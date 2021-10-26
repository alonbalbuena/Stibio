export default class Component extends HTMLElement {
    shadow;
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        if (this.shadowRoot) {
            this.shadow = this.shadowRoot;
        }
    }
}
//# sourceMappingURL=Component.js.map