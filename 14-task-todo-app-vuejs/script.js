Vue.createApp({
  data() {
    return {
      apiURL: "http://localhost:4730/todos",
      todosArr: [],
      filter: "all",
      newTodoInput: "",
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todosArr;
      } else if (this.filter === "open") {
        return this.todosArr.filter((todo) => !todo.done);
      } else if (this.filter === "done") {
        return this.todosArr.filter((todo) => todo.done);
      }
    },
  },
  methods: {
    readTodos() {
      fetch(this.apiURL)
        .then((response) => response.json())
        .then((jsonData) => {
          this.todosArr = jsonData;
        })
        .catch((error) => {
          console.error("Network is not ok", error);
        });
    },
    addToDo() {
      if (!this.checkDuplis()) {
        return;
      }

      const newToDo = {
        description: this.newTodoInput,
        done: false,
      };
      fetch(this.apiURL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newToDo),
      })
        .then((response) => response.json())
        .then((newToDoFromApi) => {
          this.todosArr.push(newToDoFromApi);
          this.newTodoInput = "";
        });
    },
    updateToDo(id, changedTodo) {
      fetch(this.apiURL + "/" + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(changedTodo),
      });
    },
    checkDuplis() {
      const duplicateDescription = this.newTodoInput.toLowerCase();

      for (const todo of this.todosArr) {
        if (duplicateDescription === todo.description.toLowerCase()) {
          alert("Wenn schon da, dann mach erstmal das bestehende fertig!");
          return false;
        }
      }
      return true;
    },
    deleteDoneTodos() {
      const doneTodos = this.todosArr.filter((todo) => todo.done);
      const fetches = doneTodos.map((deletedTodo) => {
        return fetch(this.apiURL + "/" + deletedTodo.id, {
          method: "DELETE",
        });
      });

      Promise.all(fetches).then(() => {
        this.readTodos();
      });
    },
    doneTask(todo) {
      this.updateToDo(todo.id, todo);
    },
  },
  created() {
    this.readTodos();
  },
}).mount("#app");
