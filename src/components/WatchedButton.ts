import RouteEvent from "../router/RouteEvent.js";
import Component from "./Component.js";

export default class WatchedButton extends Component {
  animationDuration = 1000;
  constructor() {
    super();
    this.shadow.innerHTML = `
    <link type="text/css" rel="stylesheet" href="./public/styles/watch.css" />
    <div class="watch"><img class="watch__eye" src="./public/icons/eye.svg" /></div>`;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    window.CSS.registerProperty({
      name: "--default-duration",
      syntax: "<number>",
      inherits: false,
      initialValue: `${this.animationDuration}`,
    });
  }
  connectedCallback(): void {
    this.shadow.querySelector(".watch")?.addEventListener(
      "click",
      () => {
        this.changeRoute();
      },
      false
    );
    this.style.setProperty(
      "--animation-duration",
      `${this.animationDuration}ms`
    );
  }

  changeRoute(): void {
    this.dispatchEvent(
      new RouteEvent(
        "/dist/watched",
        () => this.toggleAnimation(),
        () => this.toggleAnimation()
      )
    );
  }

  later(delay: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  toggleAnimation(): Promise<void> {
    return new Promise<void>((resolve) => {
      const watchButton = this.shadow.querySelector(".watch");
      watchButton?.classList.toggle(`${watchButton.classList[0]}--transition`);
      resolve();
    }).then(() => this.later(this.animationDuration));
  }
}

window.customElements.define("watched-button", WatchedButton);
