montageDefine("2fadc1d","generic-collection",{dependencies:["./shim-array"],factory:function(e,t,n){"use strict";function r(){throw Error("Can't construct. GenericCollection is a mixin.")}n.exports=r,r.prototype.addEach=function(e){if(e&&Object(e)===e)if("function"==typeof e.forEach)e.forEach(this.add,this);else if("number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);else Object.keys(e).forEach(function(t){this.add(e[t],t)},this);else if(e&&"number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);return this},r.prototype.deleteEach=function(e,t){return e.forEach(function(e){this["delete"](e,t)},this),this},r.prototype.forEach=function(e){var t=arguments[1];return this.reduce(function(n,r,i,a,s){e.call(t,r,i,a,s)},void 0)},r.prototype.map=function(e){var t=arguments[1],n=[];return this.reduce(function(r,i,a,s,o){n.push(e.call(t,i,a,s,o))},void 0),n},r.prototype.enumerate=function(e){null==e&&(e=0);var t=[];return this.reduce(function(n,r){t.push([e++,r])},void 0),t},r.prototype.group=function(e,t,n){n=n||Object.equals;var r=[],i=[];return this.forEach(function(a,s,o){var l,s=e.call(t,a,s,o),c=i.indexOf(s,n);-1===c?(l=[],r.push([s,l]),i.push(s)):l=r[c][1],l.push(a)}),r},r.prototype.toArray=function(){return this.map(Function.identity)},r.prototype.toObject=function(){var e={};return this.reduce(function(t,n,r){e[r]=n},void 0),e},r.prototype.filter=function(e){var t=arguments[1],n=this.constructClone();return this.reduce(function(r,i,a,s,o){e.call(t,i,a,s,o)&&n.add(i,a)},void 0),n},r.prototype.every=function(e){var t=arguments[1];return this.reduce(function(n,r,i,a,s){return n&&e.call(t,r,i,a,s)},!0)},r.prototype.some=function(e){var t=arguments[1];return this.reduce(function(n,r,i,a,s){return n||e.call(t,r,i,a,s)},!1)},r.prototype.all=function(){return this.every(Boolean)},r.prototype.any=function(){return this.some(Boolean)},r.prototype.min=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,r){return t?(t=!1,r):0>e(r,n)?r:n},void 0)},r.prototype.max=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,r){return t?(t=!1,r):e(r,n)>0?r:n},void 0)},r.prototype.sum=function(e){return e=void 0===e?0:e,this.reduce(function(e,t){return e+t},e)},r.prototype.average=function(e){var t=void 0===e?0:e,n=void 0===e?0:e;return this.reduce(function(e,r){t+=r,n+=1},void 0),t/n},r.prototype.concat=function(){for(var e=this.constructClone(this),t=0;arguments.length>t;t++)e.addEach(arguments[t]);return e},r.prototype.flatten=function(){var e=this;return this.reduce(function(t,n){return n.forEach(function(e){this.push(e)},t,e),t},[])},r.prototype.zip=function(){var e=Array.prototype.slice.call(arguments);return e.unshift(this),Array.unzip(e)},r.prototype.join=function(e){return this.reduce(function(t,n){return void 0===t?n:t+e+n},void 0)},r.prototype.sorted=function(e,t,n){return e=e||this.contentCompare||Object.compare,e.by?(t=e.by,e=e.compare||this.contentCompare||Object.compare):t=t||Function.identity,void 0===n&&(n=1),this.map(function(e){return{by:t(e),value:e}}).sort(function(t,r){return e(t.by,r.by)*n}).map(function(e){return e.value})},r.prototype.reversed=function(){return this.constructClone(this).reverse()},r.prototype.clone=function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;var n=this.constructClone();return this.forEach(function(r,i){n.add(Object.clone(r,e-1,t),i)},this),n},r.prototype.only=function(){return 1===this.length?this.one():void 0},r.prototype.iterator=function(){return this.iterate.apply(this,arguments)},e("./shim-array")}});