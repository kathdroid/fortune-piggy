montageDefine("96e8aac","http-cookie",{dependencies:["qs"],factory:function(e,t){e("qs"),t.parse=function(e,t){t=t||new Date;var n={},r=e.split(/[;,]/g),i=r.shift().split("=");return n.key=i[0],n.value=i[1],r.forEach(function(e){var r=e.split("=").map(function(e){return e.trim()}),i=r[0],a=r[1];/^domain$/i.test(i)?n.domain=a:/^path$/i.test(i)?n.path=a:/^expires$/i.test(i)?n.expires=new Date(+new Date+(new Date(a)-t)):/^max-age$/i.test(i)?n.expires=new Date((new Date).getTime()+1e3*a):/^secure$/i.test(i)?n.secure=!0:/^httponly$/i.test(i)&&(n.httpOnly=!0)}),n},t.stringify=function(e,t,n){var r=encodeURIComponent(e)+"="+encodeURIComponent(t);return n&&(n.domain&&(r+="; Domain="+encodeURIComponent(n.domain)),n.path&&(r+="; Path="+encodeURIComponent(n.path)),n.expires&&(r+="; Expires="+n.expires.toGMTString()),n.secure&&(r+="; Secure"),n.httpOnly&&(r+="; HttpOnly")),r}}});