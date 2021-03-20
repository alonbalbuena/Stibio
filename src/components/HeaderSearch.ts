import Component from "./Component.js";

export default class HeaderSearch extends Component {
  constructor() {
    super();
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="./public/styles/header-search.css">
      <glass-search></glass-search>
      <form class="search-box" is="search-box" onsubmit="return false"></form>
      `;
  }

  connectedCallback(): void {
    this.shadow
      .querySelector("glass-search")
      ?.addEventListener("click", () => this.open());
  }

  open(): void {
    this.classList.toggle(`${this.classList[0]}--open`);
  }
}

window.customElements.define("header-search", HeaderSearch);
