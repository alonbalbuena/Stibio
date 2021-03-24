import Router from "../router/Router.js";
import { routes } from "../router/Routes.js";
import LightComponent from "./LightComponent.js";
export default class View extends LightComponent {
    constructor() {
        super();
        this.innerHTML = `<watched-button></watched-button>
    <div class="view" style="height:100%;"></div>`;
    }
    connectedCallback() {
        new Router(this, routes);
    }
}
window.customElements.define("router-view", View);
//# sourceMappingURL=View.js.map