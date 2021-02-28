import Component from "./Component.js";

export default class Glass extends Component {
  constructor() {
    super();
    this.shadow.innerHTML = `
    <link rel="stylesheet" href="/public/styles/glass.css">
    <div class="glass"></div>`;
  }
}

window.customElements.define("glass-search", Glass);
