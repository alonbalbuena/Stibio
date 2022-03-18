import Component from "../../lib/Component.js";
export default class HeaderSearch extends Component {
    constructor() {
        super();
        this.shadow.innerHTML = `
      <link rel="stylesheet" href="./public/styles/header-search.css">
      <glass-search></glass-search>
      <search-box class="search-box"></search-box>
      `;
    }
    connectedCallback() {
        this.shadow
            .querySelector("glass-search")
            ?.addEventListener("click", () => this.open());
    }
    open() {
        this.classList.toggle(`${this.classList[0]}--open`);
    }
}
window.customElements.define("header-search", HeaderSearch);
//# sourceMappingURL=HeaderSearch.js.map