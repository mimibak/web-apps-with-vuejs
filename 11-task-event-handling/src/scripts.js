Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    mouseMovePointer(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeItem(fruitRemove) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== fruitRemove;
      });
    },
  },
}).mount("#app");
