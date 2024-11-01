export class WebElement extends HTMLElement {
 constructor(...args) {
  super(...args);
 }
 
 render() { 
  this.shadow.appendChild(this.cssRef);
  this.shadow.appendChild(this.htmlRef
  .content.cloneNode(true));
 }
 
 connectedCallback() {
  this.cssRef = document.createElement("style");
  this.htmlRef = document.createElement("template");
  this.shadow = this.attachShadow({ mode: "open" });
  
  this.cssRef.textContent = this.css ?? "";
  this.htmlRef.innerHTML = this.html ?? "";
  this.render();
 }
 
 attributeChangedCallback(attr, prev, next) {
  if(prev !== next) {
   this[attr] = next;
   this.style.setProperty(`--${attr}`, next);
  }
 }
 
 static get observedAttributes() {
  return this.prototype.observables ?? [];
 }
}