export const WebComponent = (selector) => (target) => {
 customElements.define(selector, target);
};

export class WebElement extends HTMLElement {
 constructor(...args) {
  super(...args);
 }

 connectedCallback() {
  this.shadow = this.attachShadow({ mode: "open" });

  this._html = document.createElement("template");
  this._css = document.createElement("style");

  this._html.innerHTML = this.html ?? "";
  this._css.textContent = this.css ?? "";

  this.render();
 }

 render() {
  this.shadow.appendChild(this._css);
  this.shadow.appendChild(this._html.content.cloneNode(true));
 }
}

@WebComponent("ui-button")
class uiButton extends WebElement {
 get css() {
  return `
  :host {
   inline-size: fit-content;
  }
  
  /* remove empty buttons from taking space */
  :host(:empty) {
   display: none;
  }
  
  button {
   inline-size: 100%;
   font-family: inherit;
   font-size: inherit;
   border: var(--border);
   background: var(--bg, #fff);
   color: var(--fg, #272727);
   padding: 8px 16px;
   border-radius: 5px;
  }
  
 `;
 }

 get html() {
  return `
  <button> <slot></slot> </button>
 `;
 }

 static get observedAttributes() {
  return ["fg", "bg", "border"];
 }

 attributeChangedCallback(attr, prev, next) {
  if (prev != next) {
   this[attr] = next;
   this.style.setProperty(`--${attr}`, next);
  }
 }
}

@WebComponent("app-root")
class AppRoot extends WebElement {
 get css() {
  return `
  :host {
   display: grid;
   gap: 10px;
  }
 `;
 }

 get html() {
  return `
  <h1>app-root works!!!</h1>
  <pre>${this.preContent ?? "no content..."}</pre>
  
  <!-- button dont take space due its empty -->
  <ui-button></ui-button>
  <ui-button fg="fff" bg="var(--primaryColor)">
   Primary button</ui-button>
  <ui-button fg="var(--accentColor)">
   Accent button</ui-button>
 `;
 }

 preContent = `${new Date().toLocaleString()}`;
}
