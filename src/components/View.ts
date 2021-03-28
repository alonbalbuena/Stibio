import { env } from "../env/actualEnvironment.js";
import Router from "../router/Router.js";
import { routes } from "../router/Routes.js";
import LightComponent from "./LightComponent.js";

export default class View extends LightComponent {
  constructor() {
    super();
    this.innerHTML = `<watched-button></watched-button>
    <div class="view" style="height:100%;"></div>`;
  }
  connectedCallback(): void {
    new Router(this, routes, env.landingRoute);
  }
}

window.customElements.define("router-view", View);
