montageDefine("2fadc1d","sorted-array-set",{dependencies:["./shim","./sorted-array","./generic-set","./listen/property-changes"],factory:function(e,t,n){"use strict";function r(e,t,n,a){return this instanceof r?(i.call(this,e,t,n,a),void 0):new r(e,t,n,a)}n.exports=r,e("./shim");var i=e("./sorted-array"),a=e("./generic-set"),s=e("./listen/property-changes");r.SortedArraySet=r,r.prototype=Object.create(i.prototype),r.prototype.constructor=r,Object.addEach(r.prototype,a.prototype),Object.addEach(r.prototype,s.prototype),r.prototype.isSorted=!0,r.prototype.add=function(e){return this.has(e)?!1:(i.prototype.add.call(this,e),!0)},r.prototype.reduce=function(e,t){var n=this,r=arguments[2];return this.array.reduce(function(t,i,a){return e.call(r,t,i,a,n)},t)},r.prototype.reduceRight=function(e,t){var n=this,r=arguments[2];return this.array.reduceRight(function(t,i,a){return e.call(r,t,i,a,n)},t)}}});