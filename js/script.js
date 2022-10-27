// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const { createApp } = Vue;

createApp({
  data() {
    return {
      activeSlide: 0,
      autoplay: null,
      slides: [
        {
          image: "img/01.jpg",
          title: "Svezia",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          image: "img/02.jpg",
          title: "Svizzera",
          text: "Lorem ipsum.",
        },
        {
          image: "img/03.jpg",
          title: "Gran Bretagna",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: "img/04.jpg",
          title: "Germania",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
        },
        {
          image: "img/05.jpg",
          title: "Paradise",
          text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
        },
      ],
    };
  },
  created() {
    this.startAutoplay();
  },
  methods: {
    showNext() {
      if (this.activeSlide < this.slides.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },
    showPrev() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.slides.length - 1;
      }
    },
    showItem(itemIndex) {
      this.activeSlide = itemIndex;
    },
    stopAutoplay() {
      console.log("stop");
      clearInterval(this.autoplay);
      this.autoplay = null;
    },
    startAutoplay() {
      if (this.autoplay === null) {
        this.autoplay = setInterval(() => {
          console.log("interval");
          this.showNext();
        }, 3000);
      }
    },
  },
}).mount("#app");
