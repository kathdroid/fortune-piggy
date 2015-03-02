montageDefine("96e8aac","fs-boot",{dependencies:["path","./fs"],factory:function(e,t){(function(t){var n=function(e){return e.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")},r=e("path");t.ROOT=t.SEPARATOR=r.sep||("win32"===process.platform?"\\":"/"),t.ALT_SEPARATOR="\\"===r.sep?"/":void 0;var i,a,o;t.SEPARATORS_RE=function(){return(i!==t.SEPARATOR||a!==t.ALT_SEPARATOR)&&(i=t.SEPARATOR,a=t.ALT_SEPARATOR,o=RegExp("["+(i||"").replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")+(a||"").replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")+"]","g")),o},t.split=function(e){var n;try{n=(e+"").split(t.SEPARATORS_RE())}catch(r){throw Error("Cannot split "+typeof e+", "+JSON.stringify(e))}return 1===n.length&&""===n[0]?[]:n},t.join=function(){return 1===arguments.length&&Array.isArray(arguments[0])?t.normal.apply(t,arguments[0]):t.normal.apply(t,arguments)},t.resolve=function(){for(var e="",n=[],r=[],i="",a=0;arguments.length>a;a++){var o=arguments[a]+"";if(""!=o){var s=o.split(t.SEPARATORS_RE());t.isAbsolute(o)&&(e=s.shift()+t.SEPARATOR,n=[],r=[]),i=s.pop(),("."==i||".."==i)&&(s.push(i),i="");for(var l=0;s.length>l;l++){var c=s[l];"."==c||""==c||(".."==c?r.length?r.pop():e||n.push(".."):r.push(c))}}}return o=n.concat(r).join(t.SEPARATOR),o&&(i=t.SEPARATOR+i),e+o+i},t.normal=function(){for(var e="",n=[],r=[],i=0,a=arguments.length;a>i;i++){var o=arguments[i]+"";if(""!==o){var s=o.split(t.SEPARATORS_RE());t.isAbsolute(o)&&(e=s.shift()+t.SEPARATOR,n=[],r=[]);for(var l=0,c=s.length;c>l;l++){var u=s[l];"."===u||""===u||(".."==u?r.length?r.pop():e||n.push(".."):r.push(u))}}}return o=n.concat(r).join(t.SEPARATOR),e+o},t.isAbsolute=function(e){var n=t.split(e);return 0==n.length?!1:t.isRoot(n[0])},t.isRelative=function(e){return!t.isAbsolute(e)},t.isRoot=function(e){return"\\"===t.SEPARATOR?/[a-zA-Z]:$/.test(e):""==e},t.root=function(n){t.isAbsolute(n)||(n=e("./fs").absolute(n));var r=t.split(n);return t.join(r[0],"")},t.directory=function(e){e=t.normal(e),t.isAbsolute(e);var n=t.split(e);return n.length?".."==n[n.length-1]?n.push(".."):n.pop():n.unshift(".."),n.join(t.SEPARATOR)||(t.isRelative(e)?"":t.ROOT)},t.base=function(e,r){var i=e.split(t.SEPARATORS_RE()).pop();return r&&(i=i.replace(RegExp(n(r)+"$"),"")),i},t.extension=function(e){e=t.base(e),e=e.replace(/^\.*/,"");var n=e.lastIndexOf(".");return 0>=n?"":e.substring(n)}})(t!==void 0?t:FS_BOOT={})}});