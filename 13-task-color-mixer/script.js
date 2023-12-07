Vue.createApp({
  data() {
    return {
      rndClr: {
        color: [],
        rgbRed: [],
        rgbBlue: [],
        rgbGreen: [],
      },
    };
  },
  computed: {
    hexCode() {
      const r = Number(this.rndClr.rgbRed).toString(16).padStart(2, "0"); //stellt sicher, dass jede Hexadezimalzahl immer mindestens 2 Zeichen lang ist => sorgt dafür, dass Hexcode nicht zu kurz oder zu lang wird
      const g = Number(this.rndClr.rgbGreen).toString(16).padStart(2, "0");
      const b = Number(this.rndClr.rgbBlue).toString(16).padStart(2, "0");
      return "#" + r + g + b;
    },
  },
  methods: {
    updateColorValue() {
      document.body.style.backgroundColor =
        "rgb(" +
        this.rndClr.rgbRed +
        "," +
        this.rndClr.rgbGreen +
        "," +
        this.rndClr.rgbBlue +
        ")";
    },
    randomColor() {
      const changeBod = document.querySelector("body");
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => response.json())
        .then((jsonData) => {
          this.rndClr.color = jsonData.color;
          this.rndClr.rgbRed = jsonData.rgb.r;
          this.rndClr.rgbBlue = jsonData.rgb.b;
          this.rndClr.rgbGreen = jsonData.rgb.g;
          changeBod.style.backgroundColor =
            "rgb(" +
            [
              this.rndClr.rgbRed,
              this.rndClr.rgbBlue,
              this.rndClr.rgbGreen,
            ].join(",") +
            ")";
        });
    },
  },
  created() {
    this.randomColor();
  },
}).mount("#app");
