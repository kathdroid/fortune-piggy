montageDefine("199c172","lib/parser",{dependencies:[],factory:function(e,t){function n(e){return function(t){var n,i=0,a=1,s=e.apply(this,[function(e){return n=e,r()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var o=0;t.length>o;o++)s=s(t[o],{index:o,line:a,column:i}),"\n"===t[o]?(a++,i=0):i++;s=s("",{index:o,line:a,column:i})}catch(l){if(l.loc){var c=l.loc;l.message+=t.length>80?" at line "+c.line+", column "+c.column:" in "+JSON.stringify(t)+" at index "+c.index}throw l}return n}}function r(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function r(){return r}}}function i(e){return function(t){return function(n,r){return n===e?t(n,r):t(null,r)(n,r)}}}t.makeParser=n,t.expectEof=r,t.makeExpect=i}});