const app = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      currentDate: new Date().toLocaleString("en-us"),
    };
  },
}).mount("#app");
