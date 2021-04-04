import APIResponse from "../../../models/APIResponse.js";
import Movie from "../../../models/Movie.js";
import APIConfiguration from "../../../models/APIConfiguration.js";
import APISearch from "../../../models/APISearch.js";
import LightComponent from "../../lib/LightComponent.js";

export default class SearchBox extends LightComponent {
  moviesSection = document.querySelector(".content") ?? document.body;

  constructor() {
    super();
    this.innerHTML = `
    <link rel="stylesheet" href="./public/styles/search-box.css">
    <primary-input ></primary-input >
    <primary-button class="button"> Send </primary-button>`;
  }
  connectedCallback(): void {
    this.querySelector("primary-input")?.addEventListener("click", () =>
      this.getMovies()
    );
    this.querySelector("primary-input")?.addEventListener(
      "keyup",
      (event: Event) => {
        if ((event as KeyboardEvent).key === "Enter") {
          this.getMovies();
        }
      }
    );
    this.querySelector("primary-button")?.addEventListener("click", () =>
      this.getMovies()
    );
  }

  getMovies(): () => void {
    return (): void => {
      void import("../../../services/SearchService.js").then((module) => {
        const servicio = new module.default();
        const query = (this.querySelector("primary-input") as HTMLInputElement)
          .value;
        void servicio
          .request(query)
          .then((results: APIResponse) => this.setMovies(results));
      });
    };
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
    void import("../Movies.js").then((module) => {
      this.moviesSection.append(new module.default(response.search.results));
    });
  }
}

window.customElements.define("search-box", SearchBox);
