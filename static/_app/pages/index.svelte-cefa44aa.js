import{C as z,S as $,i as D,s as I,e as b,t as A,c as v,a as k,g as C,d,b as g,f as S,H as h,h as V,k as R,n as T,I as f,J as j,l as E,K as F,x as w,u as y,L as G,j as B,m as H,o as P,v as q,r as Q,w as U,M as X,N as Y}from"../chunks/vendor-b703df73.js";const Z={orderedEntries:[]},J=z(Z);function M(l){let t,r;return{c(){t=b("div"),r=A(l[1]),this.h()},l(a){t=v(a,"DIV",{class:!0});var e=k(t);r=C(e,l[1]),e.forEach(d),this.h()},h(){g(t,"class","summary")},m(a,e){S(a,t,e),h(t,r)},p(a,e){e&2&&V(r,a[1])},d(a){a&&d(t)}}}function x(l){let t,r,a,e,s,n,i,o,_,c=l[1]&&M(l);return{c(){t=b("div"),r=b("div"),a=b("h1"),e=b("a"),s=A(l[0]),n=R(),c&&c.c(),i=R(),o=b("div"),_=A(l[2]),this.h()},l(u){t=v(u,"DIV",{class:!0});var m=k(t);r=v(m,"DIV",{class:!0});var p=k(r);a=v(p,"H1",{});var K=k(a);e=v(K,"A",{href:!0});var L=k(e);s=C(L,l[0]),L.forEach(d),K.forEach(d),n=T(p),c&&c.l(p),i=T(p),o=v(p,"DIV",{class:!0});var N=k(o);_=C(N,l[2]),N.forEach(d),p.forEach(d),m.forEach(d),this.h()},h(){g(e,"href",l[0]),g(o,"class","date"),g(r,"class","detail"),g(t,"class","entry-overview")},m(u,m){S(u,t,m),h(t,r),h(r,a),h(a,e),h(e,s),h(r,n),c&&c.m(r,null),h(r,i),h(r,o),h(o,_)},p(u,[m]){m&1&&V(s,u[0]),m&1&&g(e,"href",u[0]),u[1]?c?c.p(u,m):(c=M(u),c.c(),c.m(r,i)):c&&(c.d(1),c=null),m&4&&V(_,u[2])},i:f,o:f,d(u){u&&d(t),c&&c.d()}}}function ee(l,t,r){let{link:a}=t,{summary:e}=t,{date:s}=t;return l.$$set=n=>{"link"in n&&r(0,a=n.link),"summary"in n&&r(1,e=n.summary),"date"in n&&r(2,s=n.date)},[a,e,s]}class te extends ${constructor(t){super();D(this,t,ee,x,I,{link:0,summary:1,date:2})}}function O(l,t,r){const a=l.slice();return a[3]=t[r],a}function ae(l){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function ne(l){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function re(l){let t,r,a=l[0].orderedEntries,e=[];for(let n=0;n<a.length;n+=1)e[n]=W(O(l,a,n));const s=n=>y(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=E()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=E()},m(n,i){for(let o=0;o<e.length;o+=1)e[o].m(n,i);S(n,t,i),r=!0},p(n,i){if(i&1){a=n[0].orderedEntries;let o;for(o=0;o<a.length;o+=1){const _=O(n,a,o);e[o]?(e[o].p(_,i),w(e[o],1)):(e[o]=W(_),e[o].c(),w(e[o],1),e[o].m(t.parentNode,t))}for(Q(),o=a.length;o<e.length;o+=1)s(o);U()}},i(n){if(!r){for(let i=0;i<a.length;i+=1)w(e[i]);r=!0}},o(n){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)y(e[i]);r=!1},d(n){X(e,n),n&&d(t)}}}function W(l){var a;let t,r;return t=new te({props:{link:l[3],summary:(a=l[0][l[3]])==null?void 0:a.summary,date:l[3]}}),{c(){B(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){P(t,e,s),r=!0},p(e,s){var i;const n={};s&1&&(n.link=e[3]),s&1&&(n.summary=(i=e[0][e[3]])==null?void 0:i.summary),s&1&&(n.date=e[3]),t.$set(n)},i(e){r||(w(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function le(l){let t,r,a,e={ctx:l,current:null,token:null,hasCatch:!1,pending:re,then:ne,catch:ae,blocks:[,,,]};return j(r=l[0],e),{c(){t=E(),e.block.c()},l(s){t=E(),e.block.l(s)},m(s,n){S(s,t,n),e.block.m(s,e.anchor=n),e.mount=()=>t.parentNode,e.anchor=t,a=!0},p(s,[n]){l=s,e.ctx=l,n&1&&r!==(r=l[0])&&j(r,e)||F(e,l,n)},i(s){a||(w(e.block),a=!0)},o(s){for(let n=0;n<3;n+=1){const i=e.blocks[n];y(i)}a=!1},d(s){s&&d(t),e.block.d(s),e.token=null,e=null}}}function se(l,t,r){const a=J.subscribe(s=>{});G(a);let{appState:e}=t;return console.log(e),l.$$set=s=>{"appState"in s&&r(0,e=s.appState)},[e]}class ie extends ${constructor(t){super();D(this,t,se,le,I,{appState:0})}}function oe(l){let t,r;return t=new ie({props:{appState:l[0]}}),{c(){B(t.$$.fragment)},l(a){H(t.$$.fragment,a)},m(a,e){P(t,a,e),r=!0},p(a,[e]){const s={};e&1&&(s.appState=a[0]),t.$set(s)},i(a){r||(w(t.$$.fragment,a),r=!0)},o(a){y(t.$$.fragment,a),r=!1},d(a){q(t,a)}}}function de({fetch:l}){return!0}async function ce(){globalThis.window&&(globalThis.window.fetch=fetch)}function fe(l,t,r){Y.init({variableBinding:"PARSED_ARTICLES",namespaceId:"fed04a36ac7545b8a6c0fcfb31842baa",accountId:"ff404933c2aa00ddef4fe1e588481df5",email:"matt.deboard@gmail.com",apiKey:"429806504f417b880c1b205cbae58fb7902b8"});let a;return Promise.resolve(""),J.subscribe(async e=>{await e,r(0,a=e)}),ce(),[a]}class me extends ${constructor(t){super();D(this,t,fe,oe,I,{})}}export{me as default,de as load};
