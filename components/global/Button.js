import Component from "../lib/Component.js";
export default class Button extends Component {
    constructor() {
        super();
        this.shadow.innerHTML = `
      <link type="text/css" rel="stylesheet" href="./public/styles/button.css" />
      <button class="button"><slot>Submit</slot></button>
      `;
    }
}
window.customElements.define("primary-button", Button);
//# sourceMappingURL=Button.js.map