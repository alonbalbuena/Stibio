import Movie from "../models/Movie.js";

export default class Movies extends HTMLElement {
  constructor(movies: Movie[]) {
    super();
    this.attachShadow({ mode: "open" });

    //dynamic import for movies card
    void import("./Movie.js").then((module) => {
      const cards = movies.map((result: Movie) => new module.default(result));
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./public/styles/movies.css">`;
        this.shadowRoot?.append(...cards);
      }
    });
  }
}

window.customElements.define("movies-section", Movies);
