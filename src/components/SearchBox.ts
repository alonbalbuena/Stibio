import APIResponse from "../models/APIResponse.js";
import Movie from "../models/Movie.js";
import Search from "../models/APISearch.js";
import APIConfiguration from "../models/APIConfiguration.js";

class SearchBox extends HTMLFormElement {
  moviesSection = document.querySelector(".movies") ?? document.body;

  constructor() {
    super();
    this.innerHTML = `<input type="text"/><input type="submit" value="Submit">`;
  }
  connectedCallback(): void {
    this.addEventListener("submit", () => {
      void import("../Service.js").then((module) => {
        const servicio = new module.default();
        const query = (this.elements[0] as HTMLInputElement).value;
        void servicio
          .request(query)
          .then((results: APIResponse) => this.setMovies(results));
      });
    });
  }

  buildUrlImages(results: Movie[], configuration: APIConfiguration): void {
    results.forEach((result) => {
      result.poster_path =
        configuration.images.base_url +
        configuration.images.poster_sizes[1] +
        result.poster_path;
    });
  }

  setMovies(response: {
    configuration: APIConfiguration;
    search: APISearch;
  }): void {
    this.buildUrlImages(response.search.results, response.configuration);

    //dynamic import for movies component
    void import("./Movies.js").then((module) => {
      this.moviesSection.append(new module.default(response.search.results));
    });
  }
}

window.customElements.define("search-box", SearchBox, { extends: "form" });
