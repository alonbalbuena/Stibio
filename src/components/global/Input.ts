import Component from "../lib/Component.js";

export default class Input extends Component {
  constructor() {
    super();
    this.shadow.innerHTML = `
      <link type="text/css" rel="stylesheet" href="./public/styles/input.css" />
      <div class="wrapper">
        <input class="wrapper__input" type="text"/>
      </div>
      `;
  }
}

window.customElements.define("primary-input", Input);
