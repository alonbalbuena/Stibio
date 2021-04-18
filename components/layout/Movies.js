export default class Movies extends HTMLElement {
    constructor(movies) {
        super();
        this.attachShadow({ mode: "open" });
        void import("./Movie.js").then((module) => {
            const cards = movies.map((result) => new module.default(result));
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./public/styles/movies.css">`;
                this.shadowRoot?.append(...cards);
            }
        });
    }
}
window.customElements.define("movies-section", Movies);
//# sourceMappingURL=Movies.js.map