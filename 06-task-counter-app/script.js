Vue.createApp({
  data() {
    return {
      count: 0,
      bgcolor: {
        clr: "var(--counter)" + "%",
      },
    };
  },
}).mount("#app");
