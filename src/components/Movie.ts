import Component from "./Component.js";
import Movie from "../models/movie.js";
import Utils from "../utils/Utils.js";

export default class MovieCard extends Component {
  constructor(dataMovie: Movie) {
    super();
    this.shadow.innerHTML = `
    <link rel="stylesheet" href="/public/styles/movie.css">
    <div class="front">
      <img class="front__poster" src="${dataMovie.poster_path}" alt="${dataMovie.title}" loading="lazy"/>
    </div>
    <div class="back">
      <h1 class="back__title">${dataMovie.title}</h1>
    </div>
    `;
  }

  connectedCallback(): void {
    const colors: string[] = [
      "hsla(218, 18%, 43%, 1)",
      "hsla(219, 18%, 32%, 1)",
      "hsla(158, 51%, 74%, 1)",
      "hsla(338, 96%, 53%, 1)",
      "hsla(218, 77%, 38%, 1)",
    ];
    const back = this.shadow.querySelector(".back") as HTMLElement;
    back.style.backgroundColor = colors[Utils.getRandomInt(0,5)];
  }
}

window.customElements.define("movie-card", MovieCard);
