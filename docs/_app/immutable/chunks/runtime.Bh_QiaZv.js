var yn=Array.isArray,wn=Array.from,Tn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,mn=Object.prototype,An=Array.prototype,Bt=Object.getPrototypeOf;const kn=()=>{};function gn(t){return typeof(t==null?void 0:t.then)=="function"}function In(t){return t()}function it(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,ft=4,C=8,_t=16,k=32,Z=64,R=128,U=256,p=512,A=1024,M=2048,N=4096,L=8192,Vt=16384,ct=32768,Rn=65536,Gt=1<<18,vt=1<<19,ot=Symbol("$state"),Sn=Symbol("");function pt(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Kt(t,this.v)}function $t(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Dn(){throw new Error("hydration_failed")}function xn(t){throw new Error("props_invalid_value")}function On(){throw new Error("state_descriptors_fixed")}function Nn(){throw new Error("state_prototype_fixed")}function zt(){throw new Error("state_unsafe_local_read")}function Jt(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Cn(t){return Qt(rt(t))}function qn(t){var r;const n=rt(t);return n.equals=ht,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function Qt(t){return u!==null&&u.f&w&&(E===null?_n([t]):E.push(t)),t}function bn(t,n){return u!==null&&tt()&&u.f&w&&(E===null||!E.includes(t))&&Jt(),t.equals(n)||(t.v=n,t.version=Pt(),dt(t,A),tt()&&l!==null&&l.f&p&&!(l.f&k)&&(v!==null&&v.includes(t)?(y(l,A),X(l)):m===null?cn([t]):m.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),s=r.length,o=0;o<s;o++){var a=r[o],i=a.f;i&A||!e&&a===l||(y(a,n),i&(p|R)&&(i&w?dt(a,M):X(a)))}}const Pn=1,Fn=2,Mn=16,Ln=1,Yn=2,jn=4,Hn=8,Un=16,Bn=1,Vn=2,tn="[",nn="[!",rn="]",Et={},Gn=Symbol();function yt(t){console.warn("hydration_mismatch")}let I=!1;function Kn(t){I=t}let d;function B(t){if(t===null)throw yt(),Et;return d=t}function $n(){return B(S(d))}function Zn(t){if(I){if(S(d)!==null)throw yt(),Et;d=t}}function Wn(t=1){if(I){for(var n=t,r=d;n--;)r=S(r);d=r}}function Xn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===rn){if(t===0)return n;t-=1}else(r===tn||r===nn)&&(t+=1)}var e=S(n);n.remove(),n=e}}var at,wt,Tt;function zn(){if(at===void 0){at=window;var t=Element.prototype,n=Node.prototype;wt=st(n,"firstChild").get,Tt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function mt(t=""){return document.createTextNode(t)}function z(t){return wt.call(t)}function S(t){return Tt.call(t)}function Jn(t){if(!I)return z(t);var n=z(d);return n===null&&(n=d.appendChild(mt())),B(n),n}function Qn(t,n){if(!I){var r=z(t);return r instanceof Comment&&r.data===""?S(r):r}return d}function tr(t,n=1,r=!1){let e=I?d:t;for(;n--;)e=S(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var o=mt();return e==null||e.before(o),B(o),o}return B(e),e}function nr(t){t.textContent=""}function At(t){l===null&&u===null&&Wt(),u!==null&&u.f&R&&Zt(),et&&$t()}function en(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,o=l,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{lt(!0),W(a),a.f|=Vt}catch(T){throw Y(a),T}finally{lt(i)}}else n!==null&&X(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&vt)===0;if(!_&&!s&&e&&(o!==null&&en(a,o),u!==null&&u.f&w)){var c=u;(c.children??(c.children=[])).push(a)}return a}function rr(t){const n=q(C,null,!1);return y(n,p),n.teardown=t,n}function er(t){At();var n=l!==null&&(l.f&C)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=kt(t);return e}}function sr(t){return At(),gt(t)}function or(t){const n=q(Z,t,!0);return()=>{Y(n)}}function kt(t){return q(ft,t,!1)}function gt(t){return q(C,t,!0)}function ar(t){return gt(t)}function lr(t,n=0){return q(C|_t|n,t,!0)}function ur(t,n=!0){return q(C|k,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=et,e=u;ut(!0),K(null);try{n.call(null)}finally{ut(r),K(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:S(e);e.remove(),e=o}r=!0}Mt(t,n&&!r),F(t,0),y(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ir(t,n){var r=[];St(t,r,!0),sn(r,()=>{Y(t),n&&n()})}function sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function St(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&ct)!==0||(e.f&k)!==0;St(e,n,o?r:!1),e=s}}}function fr(t){Dt(t,!0)}function Dt(t,n){if(t.f&N){t.f^=N,j(t)&&W(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&k)!==0;Dt(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}const on=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,J=[],Q=[];function xt(){V=!1;const t=J.slice();J=[],it(t)}function Ot(){G=!1;const t=Q.slice();Q=[],it(t)}function _r(t){V||(V=!0,queueMicrotask(xt)),J.push(t)}function cr(t){G||(G=!0,on(Ot)),Q.push(t)}function an(){V&&xt(),G&&Ot()}function ln(t){let n=w|A;l===null?n|=R:l.f|=vt;const r={children:null,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&w){var e=u;(e.children??(e.children=[])).push(r)}return r}function vr(t){const n=ln(t);return n.equals=ht,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?un(e):Y(e)}}}function Ct(t){var n,r=l;$(t.parent);try{Nt(t),n=Ft(t)}finally{$(r)}var e=(D||t.f&R)&&t.deps!==null?M:p;y(t,e),t.equals(n)||(t.v=n,t.version=Pt())}function un(t){Nt(t),F(t,0),y(t,L),t.children=t.deps=t.reactions=t.fn=null}const qt=0,fn=1;let H=qt,P=!1,x=!1,et=!1;function lt(t){x=t}function ut(t){et=t}let g=[],O=0;let u=null;function K(t){u=t}let l=null;function $(t){l=t}let E=null;function _n(t){E=t}let v=null,h=0,m=null;function cn(t){m=t}let bt=0,D=!1,f=null;function pr(t){f=t}function Pt(){return++bt}function tt(){return f!==null&&f.l===null}function j(t){var a,i;var n=t.f;if(n&A)return!0;if(n&M){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var o=r[s];if(j(o)&&Ct(o),e&&l!==null&&!D&&!((i=o==null?void 0:o.reactions)!=null&&i.includes(t))&&(o.reactions??(o.reactions=[])).push(t),o.version>t.version)return!0}}e||y(t,p)}return!1}function vn(t,n,r){throw t}function Ft(t){var T;var n=v,r=h,e=m,s=u,o=D,a=E;v=null,h=0,m=null,u=t.f&(k|Z)?null:t,D=!x&&(t.f&R)!==0,E=null;try{var i=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(F(t,h),_!==null&&h>0)for(_.length=h+v.length,c=0;c<v.length;c++)_[h+c]=v[c];else t.deps=_=v;if(!D)for(c=h;c<_.length;c++)((T=_[c]).reactions??(T.reactions=[])).push(t)}else _!==null&&h<_.length&&(F(t,h),_.length=h);return i}finally{v=n,h=r,m=e,u=s,D=o,E=a}}function pn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(v===null||!v.includes(n))&&(y(n,M),n.f&(R|U)||(n.f^=U),F(n,0))}function F(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)pn(t,r[e])}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function W(t){var n=t.f;if(!(n&L)){y(t,p);var r=l,e=f;l=t,f=t.ctx;try{n&_t||Mt(t),It(t);var s=Ft(t);t.teardown=typeof s=="function"?s:null,t.version=bt}catch(o){vn(o)}finally{l=r,f=e}}}function Lt(){O>1e3&&(O=0,Xt()),O++}function Yt(t){var n=t.length;if(n!==0){Lt();var r=x;x=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var o=[];jt(s,o),hn(o)}}finally{x=r}}}function hn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(L|N))&&j(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}}function dn(){if(P=!1,O>1001)return;const t=g;g=[],Yt(t),P||(O=0)}function X(t){H===qt&&(P||(P=!0,queueMicrotask(dn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|k)){if(!(r&p))return;n.f^=p}}g.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&k)!==0,a=o&&(s&p)!==0;if(!a&&!(s&N))if(s&C){o?r.f^=p:j(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ft&&e.push(r);var _=r.next;if(_===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var c=b.next;if(c!==null){r=c;continue t}b=b.parent}}r=_}for(var T=0;T<e.length;T++)i=e[T],n.push(i),jt(i,n)}function Ht(t){var n=H,r=g;try{Lt();const s=[];H=fn,g=s,P=!1,Yt(r);var e=t==null?void 0:t();return an(),(g.length>0||s.length>0)&&Ht(),O=0,e}finally{H=n,g=r}}async function hr(){await Promise.resolve(),Ht()}function dr(t){var n=t.f;if(n&L)return t.v;if(u!==null){E!==null&&E.includes(t)&&zt();var r=u.deps;v===null&&r!==null&&r[h]===t?h++:v===null?v=[t]:v.push(t),m!==null&&l!==null&&l.f&p&&!(l.f&k)&&m.includes(t)&&(y(l,A),X(l))}if(n&w){var e=t;j(e)&&Ct(e)}return t.v}function Er(t){const n=u;try{return u=null,t()}finally{u=n}}const En=~(A|M|p);function y(t,n){t.f=t.f&En|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function wr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var o=a[s];$(o.effect),K(o.reaction),kt(o.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ot in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ot in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{kn as $,Et as A,rn as B,yt as C,Dn as D,ct as E,nr as F,wn as G,nn as H,or as I,mt as J,yr as K,wr as L,f as M,tr as N,Qn as O,Jn as P,Zn as Q,Vn as R,ot as S,Bn as T,Gn as U,sr as V,er as W,Er as X,it as Y,Tr as Z,In as _,An as a,rr as a0,qn as a1,ar as a2,kt as a3,gt as a4,_r as a5,xn as a6,Rn as a7,jn as a8,ht as a9,Ln as aa,Yn as ab,Hn as ac,ln as ad,vr as ae,Un as af,Ht as ag,hr as ah,Cn as ai,tt as aj,gn as ak,$ as al,K as am,pr as an,N as ao,Pn as ap,Mn as aq,Fn as ar,St as as,sn as at,Y as au,cr as av,Sn as aw,Wn as ax,Kt as ay,On as b,bn as c,dr as d,l as e,Nn as f,st as g,Bt as h,yn as i,I as j,$n as k,lr as l,B as m,Kn as n,mn as o,fr as p,ur as q,Xn as r,rt as s,ir as t,d as u,Tn as v,zn as w,z as x,tn as y,S as z};