/* 
 * @nowrap
 */
var F = function () {};
var property;

function extendF (child, parent) {
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;

  for (property in parent.prototype)
      child.prototype[property] = parent.prototype[property];
    
  return child;  
}

return extendF;