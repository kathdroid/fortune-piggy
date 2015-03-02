montageDefine("2fadc1d","list",{dependencies:["./shim","./generic-collection","./generic-order","./listen/property-changes","./listen/range-changes","list"],factory:function(e,t,n){"use strict";function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);var i=this.head=new this.Node;i.next=i,i.prev=i,this.contentEquals=t||Object.equals,this.getDefault=n||Function.noop,this.length=0,this.addEach(e)}function i(e){this.head=e,this.at=e.next}function a(e){this.value=e,this.prev=null,this.next=null}n.exports=r,e("./shim");var s=e("./generic-collection"),o=e("./generic-order"),l=e("./listen/property-changes"),c=e("./listen/range-changes");r.List=r,Object.addEach(r.prototype,s.prototype),Object.addEach(r.prototype,o.prototype),Object.addEach(r.prototype,l.prototype),Object.addEach(r.prototype,c.prototype),r.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.getDefault)},r.prototype.find=function(e,t,n){t=t||this.contentEquals;for(var r=this.head,i=this.scan(n,r.next);i!==r;){if(t(i.value,e))return i;i=i.next}},r.prototype.findLast=function(e,t,n){t=t||this.contentEquals;for(var r=this.head,i=this.scan(n,r.prev);i!==r;){if(t(i.value,e))return i;i=i.prev}},r.prototype.has=function(e,t){return!!this.find(e,t)},r.prototype.get=function(e,t){var n=this.find(e,t);return n?n.value:this.getDefault(e)},r.prototype["delete"]=function(e,t){var n=this.findLast(e,t);if(n){if(this.dispatchesRangeChanges){var r=[],i=[e];this.dispatchBeforeRangeChange(r,i,n.index)}return n["delete"](),this.length--,this.dispatchesRangeChanges&&(this.updateIndexes(n.next,n.index),this.dispatchRangeChange(r,i,n.index)),!0}return!1},r.prototype.deleteAll=function(e,t){t=t||this.contentEquals;for(var n=this.head,r=n.next,i=0;r!==n;)t(e,r.value)&&(r["delete"](),i++),r=r.next;return this.length-=i,i},r.prototype.clear=function(){var e,t;this.dispatchesRangeChanges&&(t=this.toArray(),e=[],this.dispatchBeforeRangeChange(e,t,0)),this.head.next=this.head.prev=this.head,this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange(e,t,0)},r.prototype.add=function(e){var t=new this.Node(e);return this.dispatchesRangeChanges&&(t.index=this.length,this.dispatchBeforeRangeChange([e],[],t.index)),this.head.addBefore(t),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t.index),!0},r.prototype.push=function(){var e=this.head;if(this.dispatchesRangeChanges){var t=Array.prototype.slice.call(arguments),n=[],r=this.length;this.dispatchBeforeRangeChange(t,n,r);var i=this.head.prev}for(var a=0;arguments.length>a;a++){var s=arguments[a],o=new this.Node(s);e.addBefore(o)}this.length+=arguments.length,this.dispatchesRangeChanges&&(this.updateIndexes(i.next,void 0===i.index?0:i.index+1),this.dispatchRangeChange(t,n,r))},r.prototype.unshift=function(){if(this.dispatchesRangeChanges){var e=Array.prototype.slice.call(arguments),t=[];this.dispatchBeforeRangeChange(e,t,0)}for(var n=this.head,r=0;arguments.length>r;r++){var i=arguments[r],a=new this.Node(i);n.addAfter(a),n=a}this.length+=arguments.length,this.dispatchesRangeChanges&&(this.updateIndexes(this.head.next,0),this.dispatchRangeChange(e,t,0))},r.prototype.pop=function(){var e,t=this.head;if(t.prev!==t){if(e=t.prev.value,this.dispatchesRangeChanges){var n=[],r=[e],i=this.length-1;this.dispatchBeforeRangeChange(n,r,i)}t.prev["delete"](),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange(n,r,i)}return e},r.prototype.shift=function(){var e,t=this.head;if(t.prev!==t){if(e=t.next.value,this.dispatchesRangeChanges){var n=[],r=[e];this.dispatchBeforeRangeChange(n,r,0)}t.next["delete"](),this.length--,this.dispatchesRangeChanges&&(this.updateIndexes(this.head.next,0),this.dispatchRangeChange(n,r,0))}return e},r.prototype.peek=function(){return this.head!==this.head.next?this.head.next.value:void 0},r.prototype.poke=function(e){this.head!==this.head.next?this.head.next.value=e:this.push(e)},r.prototype.one=function(){return this.peek()},r.prototype.scan=function(e,t){var n=this.head;if("number"==typeof e){var r=e;if(r>=0)for(e=n.next;r&&(r--,e=e.next,e!=n););else for(e=n;0>r&&(r++,e=e.prev,e!=n););return e}return e||t},r.prototype.slice=function(e,t){var n=[],r=this.head;for(e=this.scan(e,r.next),t=this.scan(t,r);e!==t&&e!==r;)n.push(e.value),e=e.next;return n},r.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},r.prototype.swap=function(e,t,n){var r=e;e=this.scan(e,this.head),null==t&&(t=1/0),n=Array.from(n);for(var i=[],a=e;t--&&t>=0&&a!==this.head;)i.push(a.value),a=a.next;var s,o;this.dispatchesRangeChanges&&(s=e===this.head?this.length:e.prev===this.head?0:e.index,o=e.prev,this.dispatchBeforeRangeChange(n,i,s));for(var a=e,l=0,a=e;i.length>l;l++,a=a.next)a["delete"]();null==r&&a===this.head&&(a=this.head.next);for(var l=0;n.length>l;l++){var c=new this.Node(n[l]);a.addBefore(c)}return this.length+=n.length-i.length,this.dispatchesRangeChanges&&(e===this.head?this.updateIndexes(this.head.next,0):this.updateIndexes(o.next,o.index+1),this.dispatchRangeChange(n,i,s)),i},r.prototype.reverse=function(){if(this.dispatchesRangeChanges){var e=this.toArray(),t=e.reversed();this.dispatchBeforeRangeChange(t,e,0)}var n=this.head;do{var r=n.next;n.next=n.prev,n.prev=r,n=n.next}while(n!==this.head);return this.dispatchesRangeChanges&&this.dispatchRangeChange(t,e,0),this},r.prototype.sort=function(){this.swap(0,this.length,this.sorted())},r.prototype.reduce=function(e,t){for(var n=arguments[2],r=this.head,i=r.next;i!==r;)t=e.call(n,t,i.value,i,this),i=i.next;return t},r.prototype.reduceRight=function(e,t){for(var n=arguments[2],r=this.head,i=r.prev;i!==r;)t=e.call(n,t,i.value,i,this),i=i.prev;return t},r.prototype.updateIndexes=function(e,t){for(;e!==this.head;)e.index=t++,e=e.next},r.prototype.makeObservable=function(){this.head.index=-1,this.updateIndexes(this.head.next,0),this.dispatchesRangeChanges=!0},r.prototype.iterate=function(){return new i(this.head)},i.prototype.next=function(){if(this.at===this.head)throw StopIteration;var e=this.at.value;return this.at=this.at.next,e},r.prototype.Node=a,a.prototype["delete"]=function(){this.prev.next=this.next,this.next.prev=this.prev},a.prototype.addBefore=function(e){var t=this.prev;this.prev=e,e.prev=t,t.next=e,e.next=this},a.prototype.addAfter=function(e){var t=this.next;this.next=e,e.next=t,t.prev=e,e.prev=this}}});