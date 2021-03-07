import Movie from "../models/Movie.js";
import APIConfiguration from "../models/APIConfiguration.js";
import APISearch from "../models/APISearch.js";
export default class SearchBox extends HTMLFormElement {
    moviesSection: Element;
    constructor();
    connectedCallback(): void;
    buildUrlImages(results: Movie[], configuration: APIConfiguration): void;
    setMovies(response: {
        configuration: APIConfiguration;
        search: APISearch;
    }): void;
}
//# sourceMappingURL=SearchBox.d.ts.map