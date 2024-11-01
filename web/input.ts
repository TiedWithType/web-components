export const Input = () => (target, key) => {
 if(!target.constructor.prototype.observables) {
  target.constructor.prototype.observables = [];
 }
  
 target.constructor.prototype.observables.push(key);
 
 Reflect.defineProperty(target, `_${key}`, {
  get: () => {
   let value = this.getAttribute(key);
   
   try {
    return JSON.parse(value)
   } catch {
    return value;
   }
  },
  
  set: newValue => {
   if (typeof newValue !== "string") {
    this.setAttribute(key, JSON.stringify(newValue))
   } else {
    this.setAttribute(ket, newValue);
   }
  }
 })
}