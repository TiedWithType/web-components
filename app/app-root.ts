import { WebComponent } from "../web/component";
import { WebElement } from "../web/element";
import { Input } from "../web/input";

@WebComponent("ui-button")
class UiButton extends WebElement {
 get css() { return `
  :host {
   inline-size: 100%;
  }
  
  :host(:empty) {
   display: none;
  }
  
  /* Styl z kolorowym tekstem na białym tle */
.text-dark-primary {
  color: var(--darkPrimaryColor);
  background-color: #FFFFFF;
}

.text-light-primary {
  color: var(--lightPrimaryColor);
  background-color: #FFFFFF;
}

.text-primary {
  color: var(--primaryColor);
  background-color: #FFFFFF;
}

.text-accent {
  color: var(--accentColor);
  background-color: #FFFFFF;
}

/* Styl z białym tekstem na kolorowym tle */
.bg-dark-primary {
  color: #FFFFFF;
  background-color: var(--darkPrimaryColor);
}

.bg-light-primary {
  color: #FFFFFF;
  background-color: var(--lightPrimaryColor);
}

.bg-primary {
  color: #FFFFFF;
  background-color: var(--primaryColor);
}

.bg-accent {
  color: #FFFFFF;
  background-color: var(--accentColor);
}
  
  button {
   inline-size: 100%;
   font: inherit;
   border: 0;
   border-radius: 5px;
   padding: 12px 24px;
  }
 ` }
 
 get html() { return `
  <button class="${this.type}">
   <slot></slot>
  </button>
 ` }
 
 @Input() type = "";
}

@WebComponent("app-root")
export class AppRoot extends WebElement {
 get css() { return `
  :host {
   display: grid;
   inline-size: 80%;
   grid-template-columns: 1fr 1fr;
   place-content: center;
   place-items: center;
   gap: 10px;
   
  }
 ` }
 
 get html() { return `
  <ui-button type="text-dark-primary">Dark Primary Text</ui-button>
<ui-button type="text-light-primary">Light Primary Text</ui-button>
<ui-button type="text-primary">Primary Text</ui-button>
<ui-button type="text-accent">Accent Text</ui-button>

<!-- Przyciski z białym tekstem na kolorowym tle -->
<ui-button type="bg-dark-primary">Dark Primary Background</ui-button>
<ui-button type="bg-light-primary">Light Primary Background</ui-button>
<ui-button type="bg-primary">Primary Background</ui-button>
<ui-button type="bg-accent">Accent Background</ui-button>
 ` }
 
 btn = "AppRoot button";
}