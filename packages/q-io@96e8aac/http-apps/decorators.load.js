montageDefine("96e8aac","http-apps/decorators",{dependencies:["q","../http","./route","./status"],factory:function(e,t){var n=e("q"),r=e("../http"),i=e("./route"),a=e("./status");t.Normalize=function(e){return function(t,i){var t=r.normalizeRequest(t);return n.when(e(t,i),function(e){return r.normalizeResponse(e)})}},t.Date=function(e,t){return t=t||function(){return new Date},i.Trap(e,function(e){e.headers.date=""+t()})},t.Error=function(e,t){return function(r,i){return n.when(e(r,i),null,function(e){return t||(e=void 0),a.responseForStatus(r,500,e&&e.stack||e)})}},t.Debug=function(e){return t.Error(e,!0)},t.Log=function(e,t,r){return t=t||console.log,r=r||function(e){return(new Date).toISOString()+" "+e},function(i,a){var o=i.remoteHost+":"+i.remotePort,s=i.method+" "+i.path+" "+"HTTP/"+i.version.join(".");return t(r(o+" "+"-->     "+s)),n.when(e(i,a),function(e){return e?t(r(o+" "+"<== "+e.status+" "+s+" "+(e.headers["content-length"]||"-"))):t(r(o+" "+"... "+"... "+s+" (response undefined / presumed streaming)")),e},function(e){return t(r(o+" "+"!!!     "+s+" "+(e&&e.message||e))),n.reject(e)})}},t.Time=function(e){return function(t,r){var i=new Date;return n.when(e(t,r),function(e){var t=new Date;return e&&e.headers&&(e.headers["x-response-time"]=""+(t-i)),e})}},t.Headers=function(e,t){return function(r,i){return n.when(e(r,i),function(e){return e&&e.headers&&Object.keys(t).forEach(function(n){n in e.headers||(e.headers[n]=t[n])}),e})}};var o=31536e7;t.Permanent=function(e,t){return t=t||function(){return new Date((new Date).getTime()+o)},e=i.Tap(e,function(e){e.permanent=t}),e=i.Trap(e,function(e){e.headers.expires=""+t()})},t.Decorators=function(e,t){return e.reversed().forEach(function(e){t=e(t)}),t}}});