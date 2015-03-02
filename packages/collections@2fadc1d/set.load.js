montageDefine("2fadc1d","set",{dependencies:["./shim","./list","./fast-set","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes","set"],factory:function(e,t,n){"use strict";function r(e,t,n,i){return this instanceof r?(t=t||Object.equals,n=n||Object.hash,i=i||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=i,this.order=new this.Order(void 0,t),this.store=new this.Store(void 0,function(e,n){return t(e.value,n.value)},function(e){return n(e.value)}),this.length=0,this.addEach(e),void 0):new r(e,t,n,i)}e("./shim");var i=e("./list"),a=e("./fast-set"),s=e("./generic-collection"),o=e("./generic-set"),l=e("./listen/property-changes"),c=e("./listen/range-changes");n.exports=r,r.Set=r,Object.addEach(r.prototype,s.prototype),Object.addEach(r.prototype,o.prototype),Object.addEach(r.prototype,l.prototype),Object.addEach(r.prototype,c.prototype),r.prototype.Order=i,r.prototype.Store=a,r.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},r.prototype.has=function(e){var t=new this.order.Node(e);return this.store.has(t)},r.prototype.get=function(e,t){if(t)throw Error("Set#get does not support second argument: equals");var n=new this.order.Node(e);return n=this.store.get(n),n?n.value:this.getDefault(e)},r.prototype.add=function(e){var t=new this.order.Node(e);if(!this.store.has(t)){var n=this.length;return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],n),this.order.add(e),t=this.order.head.prev,this.store.add(t),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],n),!0}return!1},r.prototype["delete"]=function(e,t){if(t)throw Error("Set#delete does not support second argument: equals");var n=new this.order.Node(e);return this.store.has(n)?(n=this.store.get(n),this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],n.index),this.store["delete"](n),this.order.splice(n,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],n.index),!0):!1},r.prototype.pop=function(){if(this.length){var e=this.order.head.prev.value;return this["delete"](e),e}},r.prototype.shift=function(){if(this.length){var e=this.order.head.next.value;return this["delete"](e),e}},r.prototype.one=function(){return this.length>0?this.store.one().value:void 0},r.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.toArray(),this.dispatchBeforeRangeChange([],e,0)),this.store.clear(),this.order.clear(),this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},r.prototype.reduce=function(e,t){var n=arguments[2],r=this.order,i=0;return r.reduce(function(t,r){return e.call(n,t,r,i++,this)},t,this)},r.prototype.reduceRight=function(e,t){var n=arguments[2],r=this.order,i=this.length-1;return r.reduceRight(function(t,r){return e.call(n,t,r,i--,this)},t,this)},r.prototype.iterate=function(){return this.order.iterate()},r.prototype.log=function(){var e=this.store;return e.log.apply(e,arguments)},r.prototype.makeObservable=function(){this.order.makeObservable()}}});