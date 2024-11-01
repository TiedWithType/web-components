export const WebComponent = selector => target => {
 customElements.define(selector, target);
}