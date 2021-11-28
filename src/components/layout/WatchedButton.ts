import RouteEvent from "../../router/RouteEvent.js";
import Component from "../lib/Component.js";

export default class WatchedButton extends Component {
  animationDuration = 1000;
  constructor() {
    super();
    this.shadow.innerHTML = `
    <link type="text/css" rel="stylesheet" href="./public/styles/watch.css" />
    <div class="watch"><img class="watch__eye" src="" /></div>`;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    /*window.CSS.registerProperty({
      name: "--default-duration",
      syntax: "<number>",
      inherits: false,
      initialValue: `${this.animationDuration}`,
    });*/
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

  static get observedAttributes(): string[] {
    return ["image-url"];
  }

  attributeChangedCallback(
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    oldValue: string,
    newValue: string
  ): void {
    if (name === "image-url") {
      this.shadow
        .querySelector("img")
        ?.setAttribute("src", window.location.pathname + newValue);
    }
  }

  changeRoute(): void {
    const parsedUrl = new URL(window.location.href)
if(parsedUrl.pathname!=='/watched'){
    this.dispatchEvent(
      new RouteEvent(
        `/watched`,
        () => this.toggleAnimation(),
        () => this.toggleAnimation()
      )
    );
  }else{
this.dispatchEvent(new RouteEvent('',() => this.toggleAnimation(), () => this.toggleAnimation()))
    }
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
