import Movie from "../models/movie.js";

export default class MovieCard extends HTMLElement {
  constructor(dataMovie: Movie) {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/styles/movie.css">
      <h1 class="title">${dataMovie.title}</h1>
      <h2>${dataMovie.release_date}</h2>
      <h3>${dataMovie.overview}</h3>
      <img src="${dataMovie.poster_path}" alt="${dataMovie.title}" loading="lazy"/>
      `;
    }
  }
}

window.customElements.define("movie-card", MovieCard);
