function w(){}function L(t,e){for(const n in e)t[n]=e[n];return t}function k(t){return t()}function T(){return Object.create(null)}function p(t){t.forEach(k)}function q(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(I(e,n))}function st(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?L(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,s){if(r){const c=B(e,n,i,s);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function J(){E=!0}function K(){E=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:R(1,r,y=>e[n[y]].claim_order,u))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,r=Math.max(f,r)}const s=[],c=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[l],a)}}function Q(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){E&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){Y(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function yt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function gt(t){return tt(t," ")}function xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $t(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Et(t,e){return new t(e)}let m;function h(t){m=t}function O(){if(!m)throw new Error("Function called outside component initialization");return m}function Nt(t){O().$$.on_mount.push(t)}function vt(t){O().$$.after_update.push(t)}const d=[],D=[],b=[],M=[],P=Promise.resolve();let v=!1;function z(){v||(v=!0,P.then(F))}function At(){return z(),P}function A(t){b.push(t)}const N=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const e=d[x];x++,h(e),et(e.$$)}for(h(null),d.length=0,x=0;D.length;)D.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];N.has(n)||(N.add(n),n())}b.length=0}while(d.length);for(;M.length;)M.pop()();v=!1,N.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let _;function St(){_={r:0,c:[],p:_}}function jt(){_.r||p(_.c),_=_.p}function nt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Ct(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Tt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function it(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(k).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(A)}function rt(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Mt(t,e,n,i,r,s,c,o=[-1]){const l=m;h(t);const u=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,y,...j)=>{const C=j.length?j[0]:y;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ct(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){J();const f=X(e.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&nt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),K(),F()}h(l)}class kt{$destroy(){rt(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{At as A,w as B,st as C,$t as D,Q as E,at as F,_t as G,ft as H,ot as I,wt as J,ut as K,kt as S,ht as a,dt as b,gt as c,jt as d,mt as e,nt as f,St as g,U as h,Mt as i,vt as j,V as k,yt as l,X as m,pt as n,Nt as o,bt as p,S as q,tt as r,lt as s,Ct as t,xt as u,Et as v,Tt as w,Dt as x,it as y,rt as z};
