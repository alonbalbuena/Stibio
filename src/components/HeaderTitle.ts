class HeaderTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/styles/header-title.css">
      <h1 class="title">Welcome to this site</h1>
      `;
    }
  }
}

window.customElements.define("header-title", HeaderTitle);
