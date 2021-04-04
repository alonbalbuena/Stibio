export default class Component extends HTMLElement {
  protected shadow!: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadow = this.shadowRoot;
    }
  }
}
