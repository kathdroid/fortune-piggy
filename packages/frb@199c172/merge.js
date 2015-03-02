"use strict";function graphOt(e,t){for(var n,r=(t.length+1)*(e.length+1),i=Array(r),a=Array(t.length+1),s=Array(t.length+1),o=0;e.length+1>o;o++){for(var l=0;t.length+1>l;l++){var c,u;if(0===o&&0===l)c=" ",u=0;else if(0===o)c="insert",u=l;else if(0===l)c="delete",u=o;else if(e[o-1]===t[l-1])c="retain",u=s[l-1];else{var h=a[l-1],p=s[l];h>p?(c="delete",u=p+1):(c="insert",u=h+1)}i[o+l*(e.length+1)]=c,a[l]=u}n=a,a=s,s=n}return{edges:i,cost:s[t.length],source:t,target:e}}function traceOt(e){for(var t,n,r=[],i=e.edges,a=t=e.target.length,s=e.source.length;t||s;){var o=i[t+s*(a+1)];if("delete"===o){if(n&&"delete"===n[0])n[1]++;else{var l=["delete",1];n=l,r.push(l)}t--}else if("insert"===o){if(n&&"insert"===n[0])n[1]++;else{var l=["insert",1];n=l,r.push(l)}s--}else if("retain"===o){var l=["retain",1];n&&"retain"===n[0]?n[1]++:(n=l,r.push(l)),t--,s--}}return r.reverse(),r}function ot(e,t){return traceOt(graphOt(e,t))}function diff(e,t){for(var n=ot(e,t),r=[],i=0,a=0,s=0;n.length>s;){var o=n[s++];if("insert"===o[0])r.push([a,0,t.slice(a,a+o[1])]),a+=o[1];else if("delete"===o[0])if(n.length>s&&"insert"===n[s][0]){var l=n[s++];r.push([a,o[1],t.slice(a,a+l[1])]),i+=o[1],a+=l[1]}else r.push([a,o[1]]),i+=o[1];else"retain"==o[0]&&(i+=o[1],a+=o[1])}return r}function apply(e,t){for(var n=0;t.length>n;n++)e.swap.apply(e,t[n])}function merge(e,t){apply(e,diff(e,t))}require("collections/shim"),exports.graphOt=graphOt,exports.traceOt=traceOt,exports.ot=ot,exports.diff=diff,exports.apply=apply,exports.merge=merge;