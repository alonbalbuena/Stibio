import Movie from "../models/movie.js";

export default class MovieCard extends HTMLElement {
  className = "movie";

  constructor(dataMovie: Movie) {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/styles/movie.css">
      <div class="front">
        <img class="front__poster" src="${dataMovie.poster_path}" alt="${dataMovie.title}" loading="lazy"/>
      </div>
      <div class="back">
        <h1 class="back__title">${dataMovie.title}</h1>
        <h2 class="back__release">${dataMovie.release_date}</h2>
        <p class="back__sinopsis">${dataMovie.overview}</p>
      </div>
      `;
    }
  }
}

window.customElements.define("movie-card", MovieCard);
