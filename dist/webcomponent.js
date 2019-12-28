components.forEach(component => {
  if (component.js != '') ts.innerHTML += component.js
  window.customElements.define(component.el,
  class extends HTMLElement {
    constructor () {
      super()
      if (component.scoped) {
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
          ${component.html}
          ${component.css != '' ? `<style>${component.css}</style>`: ''}
        `;
      }
    }
    connectedCallback() {
      if (!component.scoped) {
        this.innerHTML = `
          ${component.html}
        `;
      }
    }
  })
});