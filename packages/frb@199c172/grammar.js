module.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,r,i){function a(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var r,i;switch(e.length){case 0:r="end of input";break;case 1:r=e[0];break;default:r=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return i=t?'"'+n(t)+'"':"end of input","Expected "+r+" but "+i+" found."}this.expected=e,this.found=t,this.offset=n,this.line=r,this.column=i,this.name="SyntaxError",this.message=a(e,t)}function n(e){function n(t){function n(t,n,r){var i,a;for(i=n;r>i;i++)a=e.charAt(i),"\n"===a?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Hi!==t&&(Hi>t&&(Hi=0,Yi={line:1,column:1,seenCR:!1}),n(Yi,Hi,t),Hi=t),Yi}function r(e){Gi>Ui||(Ui>Gi&&(Gi=Ui,Ki=[]),Ki.push(e))}function i(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function a(){var e,t;return Xi++,e=l(),Xi--,null===e&&(t=null,0===Xi&&r(Q)),e}function s(){var t,n,i,s,o,l,c;if(t=Ui,n=a(),null!==n){for(i=[],s=Ui,44===e.charCodeAt(Ui)?(o=tt,Ui++):(o=null,0===Xi&&r(nt)),null!==o?(l=F(),null!==l?(c=a(),null!==c?(o=[o,l,c],s=o):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et);null!==s;)i.push(s),s=Ui,44===e.charCodeAt(Ui)?(o=tt,Ui++):(o=null,0===Xi&&r(nt)),null!==o?(l=F(),null!==l?(c=a(),null!==c?(o=[o,l,c],s=o):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et);null!==i?(s=F(),null!==s?(Vi=t,n=rt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)}else Ui=t,t=et;return t}function o(){var t,n,i,a;return t=Ui,40===e.charCodeAt(Ui)?(n=it,Ui++):(n=null,0===Xi&&r(at)),null!==n?(i=F(),null!==i?(41===e.charCodeAt(Ui)?(a=st,Ui++):(a=null,0===Xi&&r(ot)),null!==a?(Vi=t,n=lt(),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,40===e.charCodeAt(Ui)?(n=it,Ui++):(n=null,0===Xi&&r(at)),null!==n?(i=s(),null!==i?(41===e.charCodeAt(Ui)?(a=st,Ui++):(a=null,0===Xi&&r(ot)),null!==a?(Vi=t,n=ct(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)),t}function l(){var t,n,i,s,o,l,u,h,p,d,g;return t=Ui,n=c(),null!==n?(i=F(),null!==i?(s=Ui,63===e.charCodeAt(Ui)?(o=ht,Ui++):(o=null,0===Xi&&r(pt)),null!==o?(l=F(),null!==l?(u=a(),null!==u?(h=F(),null!==h?(58===e.charCodeAt(Ui)?(p=dt,Ui++):(p=null,0===Xi&&r(gt)),null!==p?(d=F(),null!==d?(g=a(),null!==g?(o=[o,l,u,h,p,d,g],s=o):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et),null===s&&(s=ut),null!==s?(Vi=t,n=ft(n,s),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),t}function c(){var t,n,i,a,s,o,l,c;if(t=Ui,n=u(),null!==n){for(i=[],a=Ui,s=F(),null!==s?(e.substr(Ui,2)===mt?(o=mt,Ui+=2):(o=null,0===Xi&&r(vt)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,s=F(),null!==s?(e.substr(Ui,2)===mt?(o=mt,Ui+=2):(o=null,0===Xi&&r(vt)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=yt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function u(){var t,n,i,a,s,o,l,c;if(t=Ui,n=h(),null!==n){for(i=[],a=Ui,s=F(),null!==s?(e.substr(Ui,2)===_t?(o=_t,Ui+=2):(o=null,0===Xi&&r(bt)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,s=F(),null!==s?(e.substr(Ui,2)===_t?(o=_t,Ui+=2):(o=null,0===Xi&&r(bt)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=yt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function h(){var t,n,i,a,s,o,l,c,u;return t=Ui,n=p(),null!==n?(i=Ui,a=F(),null!==a?(s=Ui,e.substr(Ui,3)===Lt?(o=Lt,Ui+=3):(o=null,0===Xi&&r(Ct)),null===o&&(e.substr(Ui,2)===wt?(o=wt,Ui+=2):(o=null,0===Xi&&r(Mt)),null===o&&(e.substr(Ui,2)===xt?(o=xt,Ui+=2):(o=null,0===Xi&&r(zt)),null===o&&(o=Ui,60===e.charCodeAt(Ui)?(l=St,Ui++):(l=null,0===Xi&&r(Et)),null!==l?(c=Ui,Xi++,45===e.charCodeAt(Ui)?(u=Pt,Ui++):(u=null,0===Xi&&r(Ot)),Xi--,null===u?c=ut:(Ui=c,c=et),null!==c?(l=[l,c],o=l):(Ui=o,o=et)):(Ui=o,o=et),null===o&&(62===e.charCodeAt(Ui)?(o=Tt,Ui++):(o=null,0===Xi&&r(Dt)),null===o&&(e.substr(Ui,2)===kt?(o=kt,Ui+=2):(o=null,0===Xi&&r(At)),null===o&&(e.substr(Ui,2)===Bt?(o=Bt,Ui+=2):(o=null,0===Xi&&r(jt)))))))),null!==o&&(o=e.substring(s,Ui)),s=o,null!==s?(o=F(),null!==o?(l=p(),null!==l?(a=[a,s,o,l],i=a):(Ui=i,i=et)):(Ui=i,i=et)):(Ui=i,i=et)):(Ui=i,i=et),null===i&&(i=ut),null!==i?(Vi=t,n=It(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),t}function p(){var t,n,i,a,s,o,l,c;if(t=Ui,n=d(),null!==n){for(i=[],a=Ui,s=F(),null!==s?(o=Ui,43===e.charCodeAt(Ui)?(l=Rt,Ui++):(l=null,0===Xi&&r(Nt)),null===l&&(45===e.charCodeAt(Ui)?(l=Pt,Ui++):(l=null,0===Xi&&r(Ot))),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(c=d(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,s=F(),null!==s?(o=Ui,43===e.charCodeAt(Ui)?(l=Rt,Ui++):(l=null,0===Xi&&r(Nt)),null===l&&(45===e.charCodeAt(Ui)?(l=Pt,Ui++):(l=null,0===Xi&&r(Ot))),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(c=d(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=yt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function d(){var t,n,i,a,s,o,l,c;if(t=Ui,n=g(),null!==n){for(i=[],a=Ui,s=F(),null!==s?(o=Ui,42===e.charCodeAt(Ui)?(l=Ft,Ui++):(l=null,0===Xi&&r(qt)),null===l&&(47===e.charCodeAt(Ui)?(l=Wt,Ui++):(l=null,0===Xi&&r(Ut)),null===l&&(37===e.charCodeAt(Ui)?(l=Vt,Ui++):(l=null,0===Xi&&r(Ht)),null===l&&(e.substr(Ui,3)===Yt?(l=Yt,Ui+=3):(l=null,0===Xi&&r(Gt))))),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,s=F(),null!==s?(o=Ui,42===e.charCodeAt(Ui)?(l=Ft,Ui++):(l=null,0===Xi&&r(qt)),null===l&&(47===e.charCodeAt(Ui)?(l=Wt,Ui++):(l=null,0===Xi&&r(Ut)),null===l&&(37===e.charCodeAt(Ui)?(l=Vt,Ui++):(l=null,0===Xi&&r(Ht)),null===l&&(e.substr(Ui,3)===Yt?(l=Yt,Ui+=3):(l=null,0===Xi&&r(Gt))))),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=yt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function g(){var t,n,i,a,s,o,l,c;if(t=Ui,n=f(),null!==n){for(i=[],a=Ui,s=F(),null!==s?(o=Ui,e.substr(Ui,2)===Kt?(l=Kt,Ui+=2):(l=null,0===Xi&&r(Xt)),null===l&&(e.substr(Ui,2)===Zt?(l=Zt,Ui+=2):(l=null,0===Xi&&r(Jt)),null===l&&(e.substr(Ui,2)===$t?(l=$t,Ui+=2):(l=null,0===Xi&&r(Qt)))),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(c=f(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,s=F(),null!==s?(o=Ui,e.substr(Ui,2)===Kt?(l=Kt,Ui+=2):(l=null,0===Xi&&r(Xt)),null===l&&(e.substr(Ui,2)===Zt?(l=Zt,Ui+=2):(l=null,0===Xi&&r(Jt)),null===l&&(e.substr(Ui,2)===$t?(l=$t,Ui+=2):(l=null,0===Xi&&r(Qt)))),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(c=f(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=yt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function f(){var t,n,i,a,s,o,l,c;if(t=Ui,n=m(),null!==n){for(i=[],a=Ui,s=F(),null!==s?(e.substr(Ui,2)===en?(o=en,Ui+=2):(o=null,0===Xi&&r(tn)),null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,s=F(),null!==s?(e.substr(Ui,2)===en?(o=en,Ui+=2):(o=null,0===Xi&&r(tn)),null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=yt(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function m(){var t,n,i;return t=Ui,n=Ui,33===e.charCodeAt(Ui)?(i=nn,Ui++):(i=null,0===Xi&&r(rn)),null===i&&(43===e.charCodeAt(Ui)?(i=Rt,Ui++):(i=null,0===Xi&&r(Nt)),null===i&&(45===e.charCodeAt(Ui)?(i=Pt,Ui++):(i=null,0===Xi&&r(Ot)))),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n?(i=m(),null!==i?(Vi=t,n=an(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=v()),t}function v(){var e,t,n,r;if(e=Ui,t=b(),null!==t){for(n=[],r=y();null!==r;)n.push(r),r=y();null!==n?(Vi=e,t=sn(t,n),null===t?(Ui=e,e=t):e=t):(Ui=e,e=et)}else Ui=e,e=et;return e}function y(){var t,n,i,s;return t=Ui,46===e.charCodeAt(Ui)?(n=on,Ui++):(n=null,0===Xi&&r(ln)),null!==n?(i=_(),null!==i?(Vi=t,n=cn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,91===e.charCodeAt(Ui)?(n=un,Ui++):(n=null,0===Xi&&r(hn)),null!==n?(i=a(),null!==i?(93===e.charCodeAt(Ui)?(s=pn,Ui++):(s=null,0===Xi&&r(dn)),null!==s?(Vi=t,n=gn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)),t}function _(){var t,n,i,s,l,c,u;return t=Ui,n=Ui,i=L(),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n?(123===e.charCodeAt(Ui)?(i=fn,Ui++):(i=null,0===Xi&&r(mn)),null!==i?(s=F(),null!==s?(l=a(),null!==l?(c=F(),null!==c?(125===e.charCodeAt(Ui)?(u=vn,Ui++):(u=null,0===Xi&&r(yn)),null!==u?(Vi=t,n=_n(n,l),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,n=Ui,i=L(),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n?(i=o(),null!==i?(Vi=t,n=bn(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,n=j(),null!==n&&(Vi=t,n=Ln(n)),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,n=Ui,i=L(),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n&&(Vi=t,n=Cn(n)),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,n=S(),null!==n&&(Vi=t,n=wn(n)),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,n=E(),null!==n&&(Vi=t,n=wn(n)),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,40===e.charCodeAt(Ui)?(n=it,Ui++):(n=null,0===Xi&&r(at)),null!==n?(i=a(),null!==i?(41===e.charCodeAt(Ui)?(s=st,Ui++):(s=null,0===Xi&&r(ot)),null!==s?(Vi=t,n=wn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et))))))),t}function b(){var t,n,i,s;return t=S(),null===t&&(t=E(),null===t&&(t=C(),null===t&&(t=T(),null===t&&(t=Ui,e.substr(Ui,4)===Mn?(n=Mn,Ui+=4):(n=null,0===Xi&&r(xn)),null!==n&&(Vi=t,n=zn()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,4)===Sn?(n=Sn,Ui+=4):(n=null,0===Xi&&r(En)),null!==n&&(Vi=t,n=Pn()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,5)===On?(n=On,Ui+=5):(n=null,0===Xi&&r(Tn)),null!==n&&(Vi=t,n=Dn()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,4)===kn?(n=kn,Ui+=4):(n=null,0===Xi&&r(An)),null!==n&&(Vi=t,n=Bn()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,64===e.charCodeAt(Ui)?(n=jn,Ui++):(n=null,0===Xi&&r(In)),null!==n?(i=Ui,s=Y(),null!==s&&(s=e.substring(i,Ui)),i=s,null!==i?(Vi=t,n=Rn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,36===e.charCodeAt(Ui)?(n=Nn,Ui++):(n=null,0===Xi&&r(Fn)),null!==n?(i=Ui,s=L(),null!==s&&(s=e.substring(i,Ui)),i=s,null!==i?(Vi=t,n=qn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,36===e.charCodeAt(Ui)?(n=Nn,Ui++):(n=null,0===Xi&&r(Fn)),null!==n&&(Vi=t,n=Wn()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,35===e.charCodeAt(Ui)?(n=Un,Ui++):(n=null,0===Xi&&r(Vn)),null!==n?(i=Ui,s=L(),null!==s&&(s=e.substring(i,Ui)),i=s,null!==i?(Vi=t,n=Hn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,38===e.charCodeAt(Ui)?(n=Yn,Ui++):(n=null,0===Xi&&r(Gn)),null!==n?(i=Ui,s=L(),null!==s&&(s=e.substring(i,Ui)),i=s,null!==i?(s=o(),null!==s?(Vi=t,n=Kn(i,s),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,94===e.charCodeAt(Ui)?(n=Xn,Ui++):(n=null,0===Xi&&r(Zn)),null!==n?(i=b(),null!==i?(Vi=t,n=Jn(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,40===e.charCodeAt(Ui)?(n=it,Ui++):(n=null,0===Xi&&r(at)),null!==n?(i=a(),null!==i?(41===e.charCodeAt(Ui)?(s=st,Ui++):(s=null,0===Xi&&r(ot)),null!==s?(Vi=t,n=$n(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,n=_(),null!==n&&(Vi=t,n=Qn(n)),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,n=[],null!==n&&(Vi=t,n=er()),null===n?(Ui=t,t=n):t=n)))))))))))))))),t}function L(){var t,n;if(Xi++,t=[],nr.test(e.charAt(Ui))?(n=e.charAt(Ui),Ui++):(n=null,0===Xi&&r(rr)),null!==n)for(;null!==n;)t.push(n),nr.test(e.charAt(Ui))?(n=e.charAt(Ui),Ui++):(n=null,0===Xi&&r(rr));else t=et;return Xi--,null===t&&(n=null,0===Xi&&r(tr)),t}function C(){var t,n,i,a;if(Xi++,t=Ui,39===e.charCodeAt(Ui)?(n=ar,Ui++):(n=null,0===Xi&&r(sr)),null!==n){for(i=[],a=w();null!==a;)i.push(a),a=w();null!==i?(39===e.charCodeAt(Ui)?(a=ar,Ui++):(a=null,0===Xi&&r(sr)),null!==a?(Vi=t,n=or(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)}else Ui=t,t=et;if(null===t)if(t=Ui,34===e.charCodeAt(Ui)?(n=lr,Ui++):(n=null,0===Xi&&r(cr)),null!==n){for(i=[],a=M();null!==a;)i.push(a),a=M();null!==i?(34===e.charCodeAt(Ui)?(a=lr,Ui++):(a=null,0===Xi&&r(cr)),null!==a?(Vi=t,n=or(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)}else Ui=t,t=et;return Xi--,null===t&&(n=null,0===Xi&&r(ir)),t}function w(){var t,n;return ur.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(hr)),null===t&&(t=Ui,e.substr(Ui,2)===pr?(n=pr,Ui+=2):(n=null,0===Xi&&r(dr)),null!==n&&(Vi=t,n=gr()),null===n?(Ui=t,t=n):t=n,null===t&&(t=x())),t}function M(){var t,n;return fr.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(mr)),null===t&&(t=Ui,e.substr(Ui,2)===vr?(n=vr,Ui+=2):(n=null,0===Xi&&r(yr)),null!==n&&(Vi=t,n=_r()),null===n?(Ui=t,t=n):t=n,null===t&&(t=x())),t}function x(){var t,n,i,a,s,o,l,c;return t=Ui,e.substr(Ui,2)===br?(n=br,Ui+=2):(n=null,0===Xi&&r(Lr)),null!==n&&(Vi=t,n=Cr()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===wr?(n=wr,Ui+=2):(n=null,0===Xi&&r(Mr)),null!==n&&(Vi=t,n=xr()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===zr?(n=zr,Ui+=2):(n=null,0===Xi&&r(Sr)),null!==n&&(Vi=t,n=Er()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===Pr?(n=Pr,Ui+=2):(n=null,0===Xi&&r(Or)),null!==n&&(Vi=t,n=Tr()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===Dr?(n=Dr,Ui+=2):(n=null,0===Xi&&r(kr)),null!==n&&(Vi=t,n=Ar()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===Br?(n=Br,Ui+=2):(n=null,0===Xi&&r(jr)),null!==n&&(Vi=t,n=Ir()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===Rr?(n=Rr,Ui+=2):(n=null,0===Xi&&r(Nr)),null!==n&&(Vi=t,n=Fr()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===qr?(n=qr,Ui+=2):(n=null,0===Xi&&r(Wr)),null!==n&&(Vi=t,n=Ur()),null===n?(Ui=t,t=n):t=n,null===t&&(t=Ui,e.substr(Ui,2)===Vr?(n=Vr,Ui+=2):(n=null,0===Xi&&r(Hr)),null!==n?(i=Ui,a=Ui,s=z(),null!==s?(o=z(),null!==o?(l=z(),null!==l?(c=z(),null!==c?(s=[s,o,l,c],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et),null!==a&&(a=e.substring(i,Ui)),i=a,null!==i?(Vi=t,n=Yr(i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et))))))))),t}function z(){var t;return Gr.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(Kr)),t}function S(){var t,n,i,a,o,l;return t=Ui,91===e.charCodeAt(Ui)?(n=un,Ui++):(n=null,0===Xi&&r(hn)),null!==n?(i=F(),null!==i?(93===e.charCodeAt(Ui)?(a=pn,Ui++):(a=null,0===Xi&&r(dn)),null!==a?(Vi=t,n=Xr(),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,91===e.charCodeAt(Ui)?(n=un,Ui++):(n=null,0===Xi&&r(hn)),null!==n?(i=F(),null!==i?(a=s(),null!==a?(o=F(),null!==o?(93===e.charCodeAt(Ui)?(l=pn,Ui++):(l=null,0===Xi&&r(dn)),null!==l?(Vi=t,n=Zr(a),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)),t}function E(){var t,n,i,a,s,o;return t=Ui,123===e.charCodeAt(Ui)?(n=fn,Ui++):(n=null,0===Xi&&r(mn)),null!==n?(i=F(),null!==i?(125===e.charCodeAt(Ui)?(a=vn,Ui++):(a=null,0===Xi&&r(yn)),null!==a?(s=F(),null!==s?(Vi=t,n=Jr(),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,123===e.charCodeAt(Ui)?(n=fn,Ui++):(n=null,0===Xi&&r(mn)),null!==n?(i=F(),null!==i?(a=P(),null!==a?(125===e.charCodeAt(Ui)?(s=vn,Ui++):(s=null,0===Xi&&r(yn)),null!==s?(o=F(),null!==o?(Vi=t,n=$r(a),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)),t}function P(){var t,n,i,a,s,o,l;if(t=Ui,n=O(),null!==n){for(i=[],a=Ui,44===e.charCodeAt(Ui)?(s=tt,Ui++):(s=null,0===Xi&&r(nt)),null!==s?(o=F(),null!==o?(l=O(),null!==l?(s=[s,o,l],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==a;)i.push(a),a=Ui,44===e.charCodeAt(Ui)?(s=tt,Ui++):(s=null,0===Xi&&r(nt)),null!==s?(o=F(),null!==o?(l=O(),null!==l?(s=[s,o,l],a=s):(Ui=a,a=et)):(Ui=a,a=et)):(Ui=a,a=et);null!==i?(Vi=t,n=Qr(n,i),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function O(){var t,n,i,s,o;return t=Ui,n=Ui,i=L(),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n?(58===e.charCodeAt(Ui)?(i=dt,Ui++):(i=null,0===Xi&&r(gt)),null!==i?(s=F(),null!==s?(o=a(),null!==o?(Vi=t,n=ei(n,o),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),t}function T(){var t,n,i;return Xi++,t=Ui,n=Ui,i=D(),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n&&(Vi=t,n=ni(n)),null===n?(Ui=t,t=n):t=n,Xi--,null===t&&(n=null,0===Xi&&r(ti)),t}function D(){var e,t,n,r;return e=Ui,t=k(),null!==t?(n=A(),null!==n?(r=B(),null!==r?(t=[t,n,r],e=t):(Ui=e,e=et)):(Ui=e,e=et)):(Ui=e,e=et),null===e&&(e=Ui,t=k(),null!==t?(n=A(),null!==n?(t=[t,n],e=t):(Ui=e,e=et)):(Ui=e,e=et),null===e&&(e=Ui,t=k(),null!==t?(n=B(),null!==n?(t=[t,n],e=t):(Ui=e,e=et)):(Ui=e,e=et),null===e&&(e=k()))),e}function k(){var t,n,i,a;return t=Ui,n=N(),null!==n?(i=j(),null!==i?(n=[n,i],t=n):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=R(),null===t&&(t=Ui,45===e.charCodeAt(Ui)?(n=Pt,Ui++):(n=null,0===Xi&&r(Ot)),null!==n?(i=N(),null!==i?(a=j(),null!==a?(n=[n,i,a],t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,45===e.charCodeAt(Ui)?(n=Pt,Ui++):(n=null,0===Xi&&r(Ot)),null!==n?(i=R(),null!==i?(n=[n,i],t=n):(Ui=t,t=et)):(Ui=t,t=et)))),t}function A(){var t,n,i;return t=Ui,46===e.charCodeAt(Ui)?(n=on,Ui++):(n=null,0===Xi&&r(ln)),null!==n?(i=j(),null!==i?(n=[n,i],t=n):(Ui=t,t=et)):(Ui=t,t=et),t}function B(){var e,t,n;return e=Ui,t=I(),null!==t?(n=j(),null!==n?(t=[t,n],e=t):(Ui=e,e=et)):(Ui=e,e=et),e}function j(){var e,t;if(e=[],t=R(),null!==t)for(;null!==t;)e.push(t),t=R();else e=et;return e}function I(){var t,n,i;return t=Ui,ri.test(e.charAt(Ui))?(n=e.charAt(Ui),Ui++):(n=null,0===Xi&&r(ii)),null!==n?(ai.test(e.charAt(Ui))?(i=e.charAt(Ui),Ui++):(i=null,0===Xi&&r(si)),null===i&&(i=ut),null!==i?(n=[n,i],t=n):(Ui=t,t=et)):(Ui=t,t=et),t}function R(){var t;return oi.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(li)),t}function N(){var t;return ci.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(ui)),t}function F(){var e,t;for(e=[],t=q(),null===t&&(t=W());null!==t;)e.push(t),t=q(),null===t&&(t=W());return e}function q(){var t,n;return Xi++,pi.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(di)),null===t&&(gi.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(fi))),Xi--,null===t&&(n=null,0===Xi&&r(hi)),t}function W(){var t,n;return Xi++,vi.test(e.charAt(Ui))?(t=e.charAt(Ui),Ui++):(t=null,0===Xi&&r(yi)),Xi--,null===t&&(n=null,0===Xi&&r(mi)),t}function U(){var e,t,n,r;if(e=Ui,t=F(),null!==t){for(n=[],r=V();null!==r;)n.push(r),r=V();null!==n?(r=F(),null!==r?(Vi=e,t=_i(n),null===t?(Ui=e,e=t):e=t):(Ui=e,e=et)):(Ui=e,e=et)}else Ui=e,e=et;return e}function V(){var t,n,i,a,s,o,l,c,u,h;return t=Ui,64===e.charCodeAt(Ui)?(n=jn,Ui++):(n=null,0===Xi&&r(In)),null!==n?(i=Ui,a=Y(),null!==a&&(a=e.substring(i,Ui)),i=a,null!==i?(a=F(),null!==a?(s=H(),null===s&&(s=ut),null!==s?(123===e.charCodeAt(Ui)?(o=fn,Ui++):(o=null,0===Xi&&r(mn)),null!==o?(l=F(),null!==l?(c=G(),null!==c?(125===e.charCodeAt(Ui)?(u=vn,Ui++):(u=null,0===Xi&&r(yn)),null!==u?(h=F(),null!==h?(Vi=t,n=bi(i,s,c),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),t}function H(){var t,n,i,s,o,l,c,u;return t=Ui,60===e.charCodeAt(Ui)?(n=St,Ui++):(n=null,0===Xi&&r(Et)),null===n&&(58===e.charCodeAt(Ui)?(n=dt,Ui++):(n=null,0===Xi&&r(gt))),null!==n?(i=F(),null!==i?(s=C(),null===s&&(s=ut),null!==s?(o=F(),null!==o?(l=Ui,c=Ui,Xi++,123===e.charCodeAt(Ui)?(u=fn,Ui++):(u=null,0===Xi&&r(mn)),Xi--,null===u?c=ut:(Ui=c,c=et),null!==c?(u=a(),null!==u?(c=[c,u],l=c):(Ui=l,l=et)):(Ui=l,l=et),null===l&&(l=ut),null!==l?(c=F(),null!==c?(Vi=t,n=Li(n,s,l),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,n=F(),null!==n&&(Vi=t,n=Ci()),null===n?(Ui=t,t=n):t=n),t}function Y(){var t,n,i,a,s,o,l;if(t=Ui,n=[],wi.test(e.charAt(Ui))?(i=e.charAt(Ui),Ui++):(i=null,0===Xi&&r(Mi)),null!==i)for(;null!==i;)n.push(i),wi.test(e.charAt(Ui))?(i=e.charAt(Ui),Ui++):(i=null,0===Xi&&r(Mi));else n=et;if(null!==n){if(i=[],a=Ui,58===e.charCodeAt(Ui)?(s=dt,Ui++):(s=null,0===Xi&&r(gt)),null!==s){if(o=[],wi.test(e.charAt(Ui))?(l=e.charAt(Ui),Ui++):(l=null,0===Xi&&r(Mi)),null!==l)for(;null!==l;)o.push(l),wi.test(e.charAt(Ui))?(l=e.charAt(Ui),Ui++):(l=null,0===Xi&&r(Mi));else o=et;null!==o?(s=[s,o],a=s):(Ui=a,a=et)}else Ui=a,a=et;for(;null!==a;)if(i.push(a),a=Ui,58===e.charCodeAt(Ui)?(s=dt,Ui++):(s=null,0===Xi&&r(gt)),null!==s){if(o=[],wi.test(e.charAt(Ui))?(l=e.charAt(Ui),Ui++):(l=null,0===Xi&&r(Mi)),null!==l)for(;null!==l;)o.push(l),wi.test(e.charAt(Ui))?(l=e.charAt(Ui),Ui++):(l=null,0===Xi&&r(Mi));else o=et;null!==o?(s=[s,o],a=s):(Ui=a,a=et)}else Ui=a,a=et;null!==i?(n=[n,i],t=n):(Ui=t,t=et)}else Ui=t,t=et;return t}function G(){var t,n,i,a,s,o,l,c,u;if(t=Ui,n=K(),null!==n)if(i=F(),null!==i){for(a=[],s=Ui,59===e.charCodeAt(Ui)?(o=xi,Ui++):(o=null,0===Xi&&r(zi)),null!==o?(l=F(),null!==l?(c=K(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et);null!==s;)a.push(s),s=Ui,59===e.charCodeAt(Ui)?(o=xi,Ui++):(o=null,0===Xi&&r(zi)),null!==o?(l=F(),null!==l?(c=K(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et)):(Ui=s,s=et);null!==a?(59===e.charCodeAt(Ui)?(s=xi,Ui++):(s=null,0===Xi&&r(zi)),null===s&&(s=ut),null!==s?(o=F(),null!==o?(Vi=t,n=rt(n,a),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)}else Ui=t,t=et;else Ui=t,t=et;return null===t&&(t=Ui,n=K(),null!==n?(i=F(),null!==i?(59===e.charCodeAt(Ui)?(a=xi,Ui++):(a=null,0===Xi&&r(zi)),null===a&&(a=ut),null!==a?(s=F(),null!==s?(Vi=t,n=Si(n),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t&&(t=Ui,n=F(),null!==n&&(Vi=t,n=lt()),null===n?(Ui=t,t=n):t=n)),t}function K(){var t,n,i,s,o,l,c,u,h,p,d,g,f,m,v,y,_;if(t=Ui,e.substr(Ui,2)===Ei?(n=Ei,Ui+=2):(n=null,0===Xi&&r(Pi)),null===n&&(e.substr(Ui,6)===Oi?(n=Oi,Ui+=6):(n=null,0===Xi&&r(Ti))),null!==n?(32===e.charCodeAt(Ui)?(i=Di,Ui++):(i=null,0===Xi&&r(ki)),null!==i?(s=F(),null!==s?(o=Ui,l=L(),null!==l&&(l=e.substring(o,Ui)),o=l,null!==o?(l=F(),null!==l?(e.substr(Ui,2)===Ai?(c=Ai,Ui+=2):(c=null,0===Xi&&r(Bi)),null!==c?(u=F(),null!==u?(h=a(),null!==h?(p=F(),null!==p?(Vi=t,n=ji(n,o,h),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et),null===t){if(t=Ui,n=a(),null!==n)if(i=F(),null!==i)if(58===e.charCodeAt(Ui)?(s=dt,Ui++):(s=null,0===Xi&&r(gt)),null===s&&(e.substr(Ui,3)===Ii?(s=Ii,Ui+=3):(s=null,0===Xi&&r(Ri)),null===s&&(e.substr(Ui,2)===Ni?(s=Ni,Ui+=2):(s=null,0===Xi&&r(Fi)))),null!==s)if(o=F(),null!==o)if(l=a(),null!==l)if(c=F(),null!==c){for(u=[],h=Ui,44===e.charCodeAt(Ui)?(p=tt,Ui++):(p=null,0===Xi&&r(nt)),null!==p?(d=F(),null!==d?(g=Ui,f=L(),null!==f&&(f=e.substring(g,Ui)),g=f,null!==g?(f=F(),null!==f?(58===e.charCodeAt(Ui)?(m=dt,Ui++):(m=null,0===Xi&&r(gt)),null!==m?(v=F(),null!==v?(y=a(),null!==y?(_=F(),null!==_?(p=[p,d,g,f,m,v,y,_],h=p):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et);null!==h;)u.push(h),h=Ui,44===e.charCodeAt(Ui)?(p=tt,Ui++):(p=null,0===Xi&&r(nt)),null!==p?(d=F(),null!==d?(g=Ui,f=L(),null!==f&&(f=e.substring(g,Ui)),g=f,null!==g?(f=F(),null!==f?(58===e.charCodeAt(Ui)?(m=dt,Ui++):(m=null,0===Xi&&r(gt)),null!==m?(v=F(),null!==v?(y=a(),null!==y?(_=F(),null!==_?(p=[p,d,g,f,m,v,y,_],h=p):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et)):(Ui=h,h=et);null!==u?(Vi=t,n=qi(n,s,l,u),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)}else Ui=t,t=et;else Ui=t,t=et;else Ui=t,t=et;else Ui=t,t=et;else Ui=t,t=et;else Ui=t,t=et;null===t&&(t=Ui,n=Ui,i=L(),null!==i&&(i=e.substring(n,Ui)),n=i,null!==n?(i=F(),null!==i?(s=a(),null!==s?(o=F(),null!==o?(Vi=t,n=Wi(n,s),null===n?(Ui=t,t=n):t=n):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et)):(Ui=t,t=et))}return t}var X,Z=arguments.length>1?arguments[1]:{},J={expression:a,sheet:U},$=a,Q="expression",et=null,tt=",",nt='","',rt=function(e,t){for(var n=[e],r=0;t.length>r;r++)n.push(t[r][2]);return n},it="(",at='"("',st=")",ot='")"',lt=function(){return[]},ct=function(e){return e},ut="",ht="?",pt='"?"',dt=":",gt='":"',ft=function(e,t){if(t){var n=t[2],r=t[6];return{type:"if",args:[e,n,r]}}return e},mt="||",vt='"||"',yt=function(e,t){for(var n=0;t.length>n;n++)e={type:Zi[t[n][1]],args:[e,t[n][3]]};return e},_t="&&",bt='"&&"',Lt="<=>",Ct='"<=>"',wt="<=",Mt='"<="',xt=">=",zt='">="',St="<",Et='"<"',Pt="-",Ot='"-"',Tt=">",Dt='">"',kt="==",At='"=="',Bt="!=",jt='"!="',It=function(e,t){if(t){var n=t[1],r=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,r]}]}:{type:Zi[n],args:[e,r]}}return e},Rt="+",Nt='"+"',Ft="*",qt='"*"',Wt="/",Ut='"/"',Vt="%",Ht='"%"',Yt="rem",Gt='"rem"',Kt="**",Xt='"**"',Zt="//",Jt='"//"',$t="%%",Qt='"%%"',en="??",tn='"??"',nn="!",rn='"!"',an=function(e,t){return{type:Ji[e],args:[t]}},sn=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},on=".",ln='"."',cn=function(e){return e},un="[",hn='"["',pn="]",dn='"]"',gn=function(e){return function(t){return{type:"property",args:[t,e]}}},fn="{",mn='"{"',vn="}",yn='"}"',_n=function(e,t){return $i[e]?function(n){return{type:$i[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},bn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},Ln=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},Cn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},wn=function(e){return function(t){return{type:"with",args:[t,e]}}},Mn="this",xn='"this"',zn=function(){return{type:"value"}},Sn="true",En='"true"',Pn=function(){return{type:"literal",value:!0}},On="false",Tn='"false"',Dn=function(){return{type:"literal",value:!1}},kn="null",An='"null"',Bn=function(){return{type:"literal",value:null}},jn="@",In='"@"',Rn=function(e){return{type:"component",label:e}},Nn="$",Fn='"$"',qn=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},Wn=function(){return{type:"parameters"}},Un="#",Vn='"#"',Hn=function(e){return{type:"element",id:e}},Yn="&",Gn='"&"',Kn=function(e,t){return{type:e,args:t,inline:!0}},Xn="^",Zn='"^"',Jn=function(e){return{type:"parent",args:[e]}},$n=function(e){return e},Qn=function(e){return e({type:"value"})},er=function(){return{type:"value"}},tr="word",nr=/^[a-zA-Z_0-9\-]/,rr="[a-zA-Z_0-9\\-]",ir="string",ar="'",sr='"\'"',or=function(e){return{type:"literal",value:e.join("")}},lr='"',cr='"\\""',ur=/^[^'\\\0-\x1F]/,hr="[^'\\\\\\0-\\x1F]",pr="\\'",dr='"\\\\\'"',gr=function(){return"'"},fr=/^[^"\\\0-\x1F]/,mr='[^"\\\\\\0-\\x1F]',vr='\\"',yr='"\\\\\\""',_r=function(){return'"'},br="\\\\",Lr='"\\\\\\\\"',Cr=function(){return"\\"},wr="\\/",Mr='"\\\\/"',xr=function(){return"/"},zr="\\b",Sr='"\\\\b"',Er=function(){return"\b"},Pr="\\f",Or='"\\\\f"',Tr=function(){return"\f"},Dr="\\n",kr='"\\\\n"',Ar=function(){return"\n"},Br="\\r",jr='"\\\\r"',Ir=function(){return"\r"},Rr="\\t",Nr='"\\\\t"',Fr=function(){return"	"},qr="\\0",Wr='"\\\\0"',Ur=function(){return"\0"},Vr="\\u",Hr='"\\\\u"',Yr=function(e){return String.fromCharCode(parseInt(e,16))},Gr=/^[0-9a-fA-F]/,Kr="[0-9a-fA-F]",Xr=function(){return{type:"tuple",args:[]}},Zr=function(e){return{type:"tuple",args:e}},Jr=function(){return{type:"record",args:[]}},$r=function(e){return{type:"record",args:e}},Qr=function(e,t){var n={};n[e[0]]=e[1];for(var r=0;t.length>r;r++)n[t[r][2][0]]=t[r][2][1];return n},ei=function(e,t){return[e,t]},ti="number",ni=function(e){return{type:"literal",value:+e}},ri=/^[eE]/,ii="[eE]",ai=/^[+\-]/,si="[+\\-]",oi=/^[0-9]/,li="[0-9]",ci=/^[1-9]/,ui="[1-9]",hi="whitespace",pi=/^[\t\x0B\f \xA0\uFEFF]/,di="[\\t\\x0B\\f \\xA0\\uFEFF]",gi=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,fi="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",mi="line terminator",vi=/^[\n\r\u2028\u2029]/,yi="[\\n\\r\\u2028\\u2029]",_i=function(e){return{type:"sheet",blocks:e}},bi=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},Li=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},Ci=function(){return{}},wi=/^[a-zA-Z_0-9]/,Mi="[a-zA-Z_0-9]",xi=";",zi='";"',Si=function(e){return[e]},Ei="on",Pi='"on"',Oi="before",Ti='"before"',Di=" ",ki='" "',Ai="->",Bi='"->"',ji=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},Ii="<->",Ri='"<->"',Ni="<-",Fi='"<-"',qi=function(e,t,n,r){var i={type:Qi[t],args:[e,n]};if(r.length){for(var a={},s=0;r.length>s;s++)a[r[s][2]]=r[s][6];i.descriptor=a}return i},Wi=function(e,t){return{type:"unit",name:e,value:t}},Ui=0,Vi=0,Hi=0,Yi={line:1,column:1,seenCR:!1},Gi=0,Ki=[],Xi=0;if("startRule"in Z){if(!(Z.startRule in J))throw Error("Can't start parsing from rule \""+Z.startRule+'".');$=J[Z.startRule]}var Zi={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},Ji={"+":"toNumber","-":"neg","!":"not","^":"parent"},$i={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Qi={":":"assign","<-":"bind","<->":"bind2"};if(X=$(),null!==X&&Ui===e.length)return X;throw i(Ki),Vi=Math.max(Ui,Gi),new t(Ki,e.length>Vi?e.charAt(Vi):null,Vi,n(Vi).line,n(Vi).column)}return e(t,Error),{SyntaxError:t,parse:n}}();