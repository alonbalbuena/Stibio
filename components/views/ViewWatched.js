import Component from "../lib/Component.js";
export default class ViewWatched extends Component {
    constructor() {
        super();
        this.shadow.innerHTML = `
    <link rel="stylesheet" href="./public/styles/watched-view.css">
    <header>
        <header-title ></header-title>
        <header-search class="head-search"></header-search>
    </header>
    <main></main>
    <footer></footer>`;
    }
}
window.customElements.define("watched-view", ViewWatched);
//# sourceMappingURL=ViewWatched.js.map