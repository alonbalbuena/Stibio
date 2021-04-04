import Component from "../lib/Component.js";
export default class ViewHome extends Component {
  constructor() {
    super();
    this.shadow.innerHTML = `
    <link rel="stylesheet" href="./public/styles/home-view.css">
    <header>
        <header-title ></header-title>
        <header-search class="head-search"></header-search>
    </header>
    <main></main>
    <footer></footer>`;
  }
}

window.customElements.define("home-view", ViewHome);
