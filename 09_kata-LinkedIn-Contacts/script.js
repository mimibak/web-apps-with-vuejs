Vue.createApp({
  data() {
    return {
      apiURL: "https://dummy-apis.netlify.app/api/contact-suggestions?count=",
      persons: [],
      count: 0,
    };
  },
  methods: {
    getData() {
      fetch(this.apiURL + "8") //count auf 8 setzen, um 8 verschiedene daten für personen zu erhalten
        .then((response) => response.json())
        .then((jsonData) => {
          this.persons = jsonData.map((user) => {
            return { ...user, connectionStatus: "Connect" };
          });
        });
    },
    getSingleData() {
      return fetch(this.apiURL + "1")
        .then((response) => response.json())
        .then((jsonData) => {
          const newUser = { ...jsonData[0], connectionStatus: "Connect" };
          this.persons = [...this.persons, newUser];
        });
    },
    changeContact(user) {
      const indexToRemove = this.persons.indexOf(user);
      if (indexToRemove != -1) {
        this.persons.splice(indexToRemove, 1);
        this.getSingleData();
      }
    },
    connect(user) {
      if (user.connectionStatus === "Connect") {
        user.connectionStatus = "Pending";
        this.count++;
      } else if (user.connectionStatus === "Pending") {
        user.connectionStatus = "Connect";
        this.count--;
      }
    },
  },
  created() {
    this.getData();
  },
}).mount("#app");
