import Component from "../../lib/Component.js";
class HeaderTitle extends Component {
    constructor() {
        super();
        this.shadow.innerHTML = `
      <link rel="stylesheet" href="./public/styles/header-title.css">
      <h1 class="title">S</h1>
      `;
    }
}
window.customElements.define("header-title", HeaderTitle);
//# sourceMappingURL=HeaderTitle.js.map