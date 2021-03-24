export default class SearchBox extends HTMLFormElement {
    constructor() {
        super();
        this.moviesSection = document.querySelector(".content") ?? document.body;
        this.innerHTML = `
    <link rel="stylesheet" href="./public/styles/search-box.css">
    <primary-input ></primary-input >
    <primary-button class="button"> Send </primary-button>`;
    }
    connectedCallback() {
        this.addEventListener("submit", this.getMovies);
    }
    getMovies() {
        return () => {
            void import("../services/SearchService.js").then((module) => {
                const servicio = new module.default();
                const query = this.elements[0].value;
                void servicio
                    .request(query)
                    .then((results) => this.setMovies(results));
            });
        };
    }
    buildUrlImages(results, configuration) {
        results.forEach((result) => {
            result.poster_path =
                configuration.images.base_url +
                    configuration.images.poster_sizes[1] +
                    result.poster_path;
        });
    }
    setMovies(response) {
        this.buildUrlImages(response.search.results, response.configuration);
        void import("./Movies.js").then((module) => {
            this.moviesSection.append(new module.default(response.search.results));
        });
    }
}
window.customElements.define("search-box", SearchBox, { extends: "form" });
//# sourceMappingURL=SearchBox.js.map