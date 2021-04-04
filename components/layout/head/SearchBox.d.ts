import Movie from "../../../models/Movie.js";
import APIConfiguration from "../../../models/APIConfiguration.js";
import APISearch from "../../../models/APISearch.js";
import LightComponent from "../../lib/LightComponent.js";
export default class SearchBox extends LightComponent {
    moviesSection: Element;
    constructor();
    connectedCallback(): void;
    getMovies(): () => void;
    buildUrlImages(results: Movie[], configuration: APIConfiguration): void;
    setMovies(response: {
        configuration: APIConfiguration;
        search: APISearch;
    }): void;
}
//# sourceMappingURL=SearchBox.d.ts.map