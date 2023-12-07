Vue.createApp({
  data() {
    return {
      red: 231,
      green: 142,
      blue: 202,
    };
  },
  computed: {
    hexCode() {
      const r = this.red.toString(16);
      const g = this.green.toString(16);
      const b = this.blue.toString(16);
      return "#" + r + g + b;
    },
  },
  methods: {
    updateColorValue() {
      document.body.style.backgroundColor =
        "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
    },
  },
}).mount("#app");
