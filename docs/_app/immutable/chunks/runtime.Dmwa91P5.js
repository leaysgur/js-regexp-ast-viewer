var En=Array.isArray,yn=Array.from,wn=Object.defineProperty,et=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Tn=Object.prototype,mn=Array.prototype,Bt=Object.getPrototypeOf;const An=()=>{};function kn(t){return typeof(t==null?void 0:t.then)=="function"}function gn(t){return t()}function ft(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,_t=4,C=8,ct=16,T=32,tt=64,R=128,U=256,d=512,A=1024,q=2048,N=4096,P=8192,Vt=16384,pt=32768,In=65536,Gt=1<<18,st=Symbol("$state"),Rn=Symbol("");function vt(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Kt(t,this.v)}function $t(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function xn(){throw new Error("hydration_failed")}function Sn(t){throw new Error("props_invalid_value")}function On(){throw new Error("state_descriptors_fixed")}function Dn(){throw new Error("state_prototype_fixed")}function zt(){throw new Error("state_unsafe_local_read")}function Jt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:vt,version:0}}function Nn(t){return Qt(nt(t))}function Cn(t){var r;const n=nt(t);return n.equals=ht,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function Qt(t){return l!==null&&l.f&w&&(y===null?_n([t]):y.push(t)),t}function qn(t,n){return l!==null&&J()&&l.f&w&&(y===null||!y.includes(t))&&Jt(),t.equals(n)||(t.v=n,t.version=bt(),dt(t,A),J()&&i!==null&&i.f&d&&!(i.f&T)&&(p!==null&&p.includes(t)?(h(i,A),$(i)):m===null?cn([t]):m.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=J(),s=r.length,o=0;o<s;o++){var u=r[o],_=u.f;_&A||!e&&u===i||(h(u,n),_&(d|R)&&(_&w?dt(u,q):$(u)))}}const Pn=1,bn=2,Fn=16,Mn=1,Ln=2,Yn=4,jn=8,Hn=16,Un=1,Bn=2,tn="[",nn="[!",rn="]",Et={},Vn=Symbol();function yt(t){console.warn("hydration_mismatch")}let I=!1;function Gn(t){I=t}let E;function B(t){if(t===null)throw yt(),Et;return E=t}function Kn(){return B(x(E))}function $n(t){if(I){if(x(E)!==null)throw yt(),Et;E=t}}function Zn(t=1){if(I){for(var n=t,r=E;n--;)r=x(r);E=r}}function Wn(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===rn){if(t===0)return n;t-=1}else(r===tn||r===nn)&&(t+=1)}var e=x(n);n.remove(),n=e}}var ot,wt,Tt;function Xn(){if(ot===void 0){ot=window;var t=Element.prototype,n=Node.prototype;wt=et(n,"firstChild").get,Tt=et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function mt(t=""){return document.createTextNode(t)}function W(t){return wt.call(t)}function x(t){return Tt.call(t)}function zn(t){if(!I)return W(t);var n=W(E);return n===null&&(n=E.appendChild(mt())),B(n),n}function Jn(t,n){if(!I){var r=W(t);return r instanceof Comment&&r.data===""?x(r):r}return E}function Qn(t,n=1,r=!1){let e=I?E:t;for(;n--;)e=x(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var o=mt();return e==null||e.before(o),B(o),o}return B(e),e}function tr(t){t.textContent=""}function At(t){i===null&&l===null&&Wt(),l!==null&&l.f&R&&Zt(),rt&&$t()}function en(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&tt)!==0,o=i,u={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var _=O;try{ut(!0),K(u),u.f|=Vt}catch(k){throw Y(u),k}finally{ut(_)}}else n!==null&&$(u);var a=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;if(!a&&!s&&e&&(o!==null&&en(u,o),l!==null&&l.f&w)){var c=l;(c.children??(c.children=[])).push(u)}return u}function nr(t){const n=b(C,null,!1);return h(n,d),n.teardown=t,n}function rr(t){At();var n=i!==null&&(i.f&C)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push(t)}else{var e=kt(t);return e}}function er(t){return At(),gt(t)}function sr(t){const n=b(tt,t,!0);return()=>{Y(n)}}function kt(t){return b(_t,t,!1)}function gt(t){return b(C,t,!0)}function or(t){return gt(t)}function ur(t,n=0){return b(C|ct|n,t,!0)}function lr(t,n=!0){return b(C|T,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=rt,e=l;lt(!0),at(null);try{n.call(null)}finally{lt(r),at(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:x(e);e.remove(),e=o}r=!0}Mt(t,n&&!r),L(t,0),h(t,P);var u=t.transitions;if(u!==null)for(const a of u)a.stop();It(t);var _=t.parent;_!==null&&_.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ar(t,n){var r=[];xt(t,r,!0),sn(r,()=>{Y(t),n&&n()})}function sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function xt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&pt)!==0||(e.f&T)!==0;xt(e,n,o?r:!1),e=s}}}function ir(t){St(t,!0)}function St(t,n){if(t.f&N){t.f^=N,j(t)&&K(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&T)!==0;St(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}const on=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,X=[],z=[];function Ot(){V=!1;const t=X.slice();X=[],ft(t)}function Dt(){G=!1;const t=z.slice();z=[],ft(t)}function fr(t){V||(V=!0,queueMicrotask(Ot)),X.push(t)}function _r(t){G||(G=!0,on(Dt)),z.push(t)}function un(){V&&Ot(),G&&Dt()}function ln(t){let n=w|A;i===null&&(n|=R);const r={children:null,deps:null,equals:vt,f:n,fn:t,reactions:null,v:null,version:0};if(l!==null&&l.f&w){var e=l;(e.children??(e.children=[])).push(r)}return r}function cr(t){const n=ln(t);return n.equals=ht,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?an(e):Y(e)}}}function Ct(t){var n;Nt(t),n=Ft(t);var r=(S||t.f&R)&&t.deps!==null?q:d;h(t,r),t.equals(n)||(t.v=n,t.version=bt())}function an(t){Nt(t),L(t,0),h(t,P),t.children=t.deps=t.reactions=t.fn=null}const qt=0,fn=1;let H=qt,M=!1,O=!1,rt=!1;function ut(t){O=t}function lt(t){rt=t}let g=[],D=0,l=null;function at(t){l=t}let i=null;function pr(t){i=t}let y=null;function _n(t){y=t}let p=null,v=0,m=null;function cn(t){m=t}let Pt=0,S=!1,f=null;function vr(t){f=t}function bt(){return Pt++}function J(){return f!==null&&f.l===null}function j(t){var u,_;var n=t.f;if(n&A)return!0;if(n&q){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var o=r[s];if(j(o)&&Ct(o),o.version>t.version)return!0;e&&!S&&!((_=o==null?void 0:o.reactions)!=null&&_.includes(t))&&(o.reactions??(o.reactions=[])).push(t)}}e||h(t,d)}return!1}function pn(t,n,r){throw t}function Ft(t){var k;var n=p,r=v,e=m,s=l,o=S,u=y;p=null,v=0,m=null,l=t.f&(T|tt)?null:t,S=!O&&(t.f&R)!==0,y=null;try{var _=(0,t.fn)(),a=t.deps;if(p!==null){var c;if(L(t,v),a!==null&&v>0)for(a.length=v+p.length,c=0;c<p.length;c++)a[v+c]=p[c];else t.deps=a=p;if(!S)for(c=v;c<a.length;c++)((k=a[c]).reactions??(k.reactions=[])).push(t)}else a!==null&&v<a.length&&(L(t,v),a.length=v);return _}finally{p=n,v=r,m=e,l=s,S=o,y=u}}function vn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(h(n,q),n.f&(R|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)vn(t,r[e])}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function K(t){var n=t.f;if(!(n&P)){h(t,d);var r=t.ctx,e=i,s=f;i=t,f=r;try{n&ct||Mt(t),It(t);var o=Ft(t);t.teardown=typeof o=="function"?o:null,t.version=Pt}catch(u){pn(u)}finally{i=e,f=s}}}function Lt(){D>1e3&&(D=0,Xt()),D++}function Yt(t){var n=t.length;if(n!==0){Lt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&T))it([s]);else{var o=[];jt(s,o),it(o)}}}finally{O=r}}}function it(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(P|N))&&j(e)&&(K(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}}function hn(){if(M=!1,D>1001)return;const t=g;g=[],Yt(t),M||(D=0)}function $(t){H===qt&&(M||(M=!0,queueMicrotask(hn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&T){if(!(r&d))return;h(n,q)}}g.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&(P|N))===0,u=(s&T)!==0,_=(s&d)!==0,a=r.first;if(o&&(!u||!_)){if(u&&h(r,d),s&C){if(!u&&j(r)&&K(r),a=r.first,a!==null){r=a;continue}}else if(s&_t)if(u||_){if(a!==null){r=a;continue}}else e.push(r)}var c=r.next;if(c===null){let F=r.parent;for(;F!==null;){if(t===F)break t;var k=F.next;if(k!==null){r=k;continue t}F=F.parent}}r=c}for(var Z=0;Z<e.length;Z++)a=e[Z],n.push(a),jt(a,n)}function Ht(t){var n=H,r=g;try{Lt();const s=[];H=fn,g=s,M=!1,Yt(r);var e=t==null?void 0:t();return un(),(g.length>0||s.length>0)&&Ht(),D=0,e}finally{H=n,g=r}}async function hr(){await Promise.resolve(),Ht()}function dr(t){var n=t.f;if(n&P)return t.v;if(l!==null){y!==null&&y.includes(t)&&zt();var r=l.deps;p===null&&r!==null&&r[v]===t?v++:p===null?p=[t]:p.push(t),m!==null&&i!==null&&i.f&d&&!(i.f&T)&&m.includes(t)&&(h(i,A),$(i))}if(n&w){var e=t;j(e)&&Ct(e)}return t.v}function Er(t){const n=l;try{return l=null,t()}finally{l=n}}const dn=~(A|q|d);function h(t,n){t.f=t.f&dn|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function wr(t){const n=f;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)kt(e[r])}f=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(st in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&st in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{An as $,x as A,Et as B,rn as C,yt as D,pt as E,xn as F,tr as G,nn as H,yn as I,sr as J,yr as K,wr as L,f as M,Bn as N,Qn as O,Jn as P,zn as Q,$n as R,st as S,Un as T,Vn as U,er as V,rr as W,ft as X,Er as Y,gn as Z,Tr as _,mn as a,nr as a0,Cn as a1,or as a2,kt as a3,gt as a4,fr as a5,Sn as a6,In as a7,Yn as a8,ht as a9,Mn as aa,Ln as ab,jn as ac,ln as ad,cr as ae,Hn as af,Ht as ag,hr as ah,Nn as ai,J as aj,kn as ak,pr as al,at as am,vr as an,N as ao,Pn as ap,Fn as aq,bn as ar,xt as as,sn as at,Y as au,_r as av,Rn as aw,Zn as ax,Kt as ay,On as b,qn as c,dr as d,i as e,Dn as f,et as g,Bt as h,En as i,I as j,Kn as k,ur as l,B as m,Gn as n,Tn as o,ir as p,lr as q,Wn as r,nt as s,ar as t,E as u,wn as v,mt as w,Xn as x,W as y,tn as z};