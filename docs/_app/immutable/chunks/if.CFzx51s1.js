import{S as N,o as k,a as L,b as _,c as q,s as o,d as R,U as u,g as m,f as F,h as H,i as K,j as M,k as T,l as U,p as Y,E as z,H as B,r as C,q as Z,v as A,w as O,x as S,y as D,z as G}from"./runtime.CfBsFvyO.js";function g(s,b=null,E){if(typeof s!="object"||s===null||N in s)return s;const v=K(s);if(v!==k&&v!==L)return s;var a=new Map,l=M(s),c=_(0);l&&a.set("length",_(s.length));var y;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&q();var n=a.get(e);return n===void 0?(n=_(t.value),a.set(e,n)):o(n,g(t.value,y)),!0},deleteProperty(f,e){var t=a.get(e);if(t===void 0)e in f&&a.set(e,_(u));else{if(l&&typeof e=="string"){var n=a.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&o(n,r)}o(t,u),j(c)}return!0},get(f,e,t){var d;if(e===N)return s;var n=a.get(e),r=e in f;if(n===void 0&&(!r||(d=R(f,e))!=null&&d.writable)&&(n=_(g(r?f[e]:u,y)),a.set(e,n)),n!==void 0){var i=m(n);return i===u?void 0:i}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var n=a.get(e);n&&(t.value=m(n))}else if(t===void 0){var r=a.get(e),i=r==null?void 0:r.v;if(r!==void 0&&i!==u)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return t},has(f,e){var i;if(e===N)return!0;var t=a.get(e),n=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||F!==null&&(!n||(i=R(f,e))!=null&&i.writable)){t===void 0&&(t=_(n?g(f[e],y):u),a.set(e,t));var r=m(t);if(r===u)return!1}return n},set(f,e,t,n){var I;var r=a.get(e),i=e in f;if(l&&e==="length")for(var d=t;d<r.v;d+=1){var h=a.get(d+"");h!==void 0?o(h,u):d in f&&(h=_(u),a.set(d+"",h))}r===void 0?(!i||(I=R(f,e))!=null&&I.writable)&&(r=_(void 0),o(r,g(t,y)),a.set(e,r)):(i=r.v!==u,o(r,g(t,y)));var w=Reflect.getOwnPropertyDescriptor(f,e);if(w!=null&&w.set&&w.set.call(n,t),!i){if(l&&typeof e=="string"){var P=a.get("length"),x=Number(e);Number.isInteger(x)&&x>=P.v&&o(P,x+1)}j(c)}return!0},ownKeys(f){m(c);var e=Reflect.ownKeys(f).filter(r=>{var i=a.get(r);return i===void 0||i.v!==u});for(var[t,n]of a)n.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){H()}})}function j(s,b=1){o(s,s.v+b)}function Q(s,b,E=!1){T&&U();var v=s,a=null,l=null,c=u,y=E?z:0,f=!1;const e=(n,r=!0)=>{f=!0,t(r,n)},t=(n,r)=>{if(c===(c=n))return;let i=!1;if(T){const d=v.data===B;!!c===d&&(v=C(),Z(v),A(!1),i=!0)}c?(a?O(a):r&&(a=S(()=>r(v))),l&&D(l,()=>{l=null})):(l?O(l):r&&(l=S(()=>r(v))),a&&D(a,()=>{a=null})),i&&A(!0)};Y(()=>{f=!1,b(e),f||t(null,null)},y),T&&(v=G)}export{Q as i,g as p};