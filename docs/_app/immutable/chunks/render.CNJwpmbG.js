import{Q as M,R as N,T as O,j as Y,V as C,f as V,W as b,X as H,Y as $,Z as j,_ as T,v as g,q as A,l as q,z as p,$ as P,a0 as W,a1 as z,a2 as B,a3 as J,a4 as Q,a5 as X,x as Z,J as F,k as E,M as G,C as K}from"./runtime.CfBsFvyO.js";import{b as U}from"./disclose-version.uGDGCbrY.js";const x=new Set,D=new Set;function m(r){var S;var e=this,s=e.ownerDocument,_=r.type,o=((S=r.composedPath)==null?void 0:S.call(r))||[],a=o[0]||r.target,d=0,h=r.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var l=o.indexOf(e);if(l===-1)return;u<=l&&(d=u)}if(a=o[d]||r.target,a!==e){M(r,"currentTarget",{configurable:!0,get(){return a||s}});var w=C,i=V;N(null),O(null);try{for(var t,n=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var c=a["__"+_];if(c!==void 0&&!a.disabled)if(Y(c)){var[I,...L]=c;I.apply(a,[r,...L])}else c.call(a,r)}catch(y){t?n.push(y):t=y}if(r.cancelBubble||f===e||f===null)break;a=f}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=e,delete r.currentTarget,N(w),O(i)}}}const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}function sr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function ar(r,e){return k(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const s=e.target,_=E,o=p;try{for(var a=H(s);a&&(a.nodeType!==8||a.data!==$);)a=j(a);if(!a)throw T;g(!0),A(a),q();const d=k(r,{...e,anchor:a});if(p===null||p.nodeType!==8||p.data!==P)throw W(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&z(),b(),B(s),g(!1),ar(r,e);throw d}finally{g(_),A(o)}}const v=new Map;function k(r,{target:e,anchor:s,props:_={},events:o,context:a,intro:d=!0}){b();var h=new Set,u=i=>{for(var t=0;t<i.length;t++){var n=i[t];if(!h.has(n)){h.add(n);var f=er(n);e.addEventListener(n,m,{passive:f});var c=v.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),v.set(n,1)):v.set(n,c+1)}}};u(J(x)),D.add(u);var l=void 0,w=Q(()=>{var i=s??e.appendChild(X());return Z(()=>{if(a){F({});var t=K;t.c=a}o&&(_.$$events=o),E&&U(i,null),l=r(i,_)||{},E&&(V.nodes_end=p),a&&G()}),()=>{var f;for(var t of h){e.removeEventListener(t,m);var n=v.get(t);--n===0?(document.removeEventListener(t,m),v.delete(t)):v.set(t,n)}D.delete(u),R.delete(l),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(l,w),l}let R=new WeakMap;function or(r){const e=R.get(r);e&&e()}export{ir as h,ar as m,sr as s,or as u};
