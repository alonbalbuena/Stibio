import RouteEvent from "../../router/RouteEvent.js";
import Component from "../lib/Component.js";
export default class WatchedButton extends Component {
    animationDuration = 1000;
    constructor() {
        super();
        this.shadow.innerHTML = `
    <link type="text/css" rel="stylesheet" href="./public/styles/watch.css" />
    <div class="watch"><img class="watch__eye" src="" /></div>`;
    }
    connectedCallback() {
        this.shadow.querySelector(".watch")?.addEventListener("click", () => {
            this.changeRoute();
        }, false);
        this.style.setProperty("--animation-duration", `${this.animationDuration}ms`);
    }
    static get observedAttributes() {
        return ["image-url"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "image-url") {
            this.shadow
                .querySelector("img")
                ?.setAttribute("src", window.location.pathname + newValue);
        }
    }
    changeRoute() {
        const parsedUrl = new URL(window.location.href);
        if (parsedUrl.pathname !== '/watched') {
            this.dispatchEvent(new RouteEvent(`/watched`, () => this.toggleAnimation(), () => this.toggleAnimation()));
        }
        else {
            this.dispatchEvent(new RouteEvent('', () => this.toggleAnimation(), () => this.toggleAnimation()));
        }
    }
    later(delay) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }
    toggleAnimation() {
        return new Promise((resolve) => {
            const watchButton = this.shadow.querySelector(".watch");
            watchButton?.classList.toggle(`${watchButton.classList[0]}--transition`);
            resolve();
        }).then(() => this.later(this.animationDuration));
    }
}
window.customElements.define("watched-button", WatchedButton);
//# sourceMappingURL=WatchedButton.js.map