import { env } from "../env/actualEnvironment.js";
import RouteEvent from "../router/RouteEvent.js";
import Component from "./Component.js";
export default class WatchedButton extends Component {
    constructor() {
        super();
        this.animationDuration = 1000;
        this.shadow.innerHTML = `
    <link type="text/css" rel="stylesheet" href="./public/styles/watch.css" />
    <div class="watch"><img class="watch__eye" src="./public/icons/eye.svg" /></div>`;
        window.CSS.registerProperty({
            name: "--default-duration",
            syntax: "<number>",
            inherits: false,
            initialValue: `${this.animationDuration}`,
        });
    }
    connectedCallback() {
        this.shadow.querySelector(".watch")?.addEventListener("click", () => {
            this.changeRoute();
        }, false);
        this.style.setProperty("--animation-duration", `${this.animationDuration}ms`);
    }
    changeRoute() {
        this.dispatchEvent(new RouteEvent(`${env.landingRoute}watched`, () => this.toggleAnimation(), () => this.toggleAnimation()));
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