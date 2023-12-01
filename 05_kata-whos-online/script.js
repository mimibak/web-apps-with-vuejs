Vue.createApp({
  data() {
    return {
      text: "Hallo Welt",
      state: [
        {
          username: "David",
          status: "online",
          lastActivity: 10,
        },
        {
          username: "Lucy",
          status: "offline",
          lastActivity: 22,
        },
        {
          username: "Bob",
          status: "online",
          lastActivity: 104,
        },
      ],
    };
  },
  methods: {
    getActivityColor(user) {
      if (user.status === "online" && user.lastActivity <= 10) {
        return "green-bg";
      } else if (user.status === "online" && user.lastActivity > 10) {
        return "yellow-bg";
      } else if (user.status === "offline") {
        return "red-bg";
      }
    },
  },
}).mount("#app");
