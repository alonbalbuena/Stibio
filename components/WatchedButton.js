import Component from "./Component.js";
export default class WatchedButton extends Component {
    constructor() {
        super();
        this.shadow.innerHTML = `
    <link type="text/css" rel="stylesheet" href="./public/styles/watch.css" />
    <div class="watch"><img class="watch__eye" src="/dist/public/icons/eye.svg" /></div>`;
    }
    connectedCallback() {
        this.shadow.querySelector(".watch")?.addEventListener("click", () => {
            this.changeRoute();
        }, false);
    }
    changeRoute() {
        this.toggleAnimation();
        setTimeout(() => {
            this.toggleAnimation();
        }, 1000);
    }
    toggleAnimation() {
        const watchButton = this.shadow.querySelector(".watch");
        watchButton?.classList.toggle(`${watchButton.classList[0]}--transition`);
    }
}
window.customElements.define("watched-button", WatchedButton);
//# sourceMappingURL=WatchedButton.js.map