montageDefine("96e8aac","http-apps/content",{dependencies:["q","./negotiate","qs","url2"],factory:function(e,t){var n=e("q"),r=e("./negotiate"),i=e("qs"),a=e("url2");t.Content=function(e,n,r){return function(){return t.content(e,n,r)}},t.content=t.ok=function(e,t,n){return n=n||200,e=e||"","string"==typeof e&&(e=[e]),t=t||"text/plain",{status:n,headers:{"content-type":t},body:e}},t.ContentRequest=function(e){return function(t,r){return n.when(t.body.read(),function(n){return e(n,t,r)})}},t.Inspect=function(e){return r.Method({GET:function(t,r){return n.when(e(t,r),function(e){return{status:200,headers:{"content-type":"text/plain"},body:[inspect(e)]}})}})},t.ParseQuery=function(e){return function(t,n){return t.query=i.parse(a.parse(t.url).query||""),e(t,n)}}}});