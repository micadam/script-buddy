import{S as Re,i as Ae,s as Le,k as P,l as T,m as F,h as m,n as A,b as y,H as te,J as Se,w as Ue,q as C,a as D,r as H,c as J,K as je,G as S,L as ue,M as q,N as ne,O as se,u as G,e as X,P as Fe,p as V}from"../chunks/index.8b214ad8.js";var K={};K.Mapping=class{constructor(l,n,e,t,r){this.pairs=this.pairs.bind(this),this.alignment=this.alignment.bind(this),this.a=l,this.b=n,this.distance=e,this.track=t,this.backtrackFn=r,this.pairCache=null}pairs(){return this.pairCache==null&&(this.pairCache=this.backtrackFn(this.a,this.b,this.track)),this.pairCache}alignment(){var l,n,e,t,r,s,c;for(s=this.pairs(),l=[],n=[],c=s.reverse(),e=0,t=c.length;e<t;e++)r=c[e],l.push(r[0]),n.push(r[1]);return{alignmentA:l,alignmentB:n}}};K.zero=function(i,l){var n,e,t,r,s,c,h,a;for(h=new Array(i),n=t=0,s=i;t<s;n=t+=1)for(a=h[n]=new Array(l),e=r=0,c=l;r<c;e=r+=1)a[e]=0;return h};K.trackedMin=function(i,l,n){var e;return e={value:i,index:0},l<e.value&&(e.value=l,e.index=1),n<e.value&&(e.value=n,e.index=2),e};var we,Ee,ye,Me,Ne,W;({Mapping:we,zero:W,trackedMin:Ne}=K);Ee=function(i,l,n){var e,t,r,s,c,h,a,g,_,k,v;for(k=[],v=[],k.push([void 0,i]);k.length>0;)for([s,a]=k.pop(),t=l(a),r=(g=t!=null?t[0]:void 0)!=null?g:null,v.push([s,a,r]),_=t??[],s=c=0,h=_.length;c<h;s=++c)e=_[s],k.push([s,e]);for(;v.length>0;)[s,a,r]=v.pop(),n(s,a,r)};ye=function(i,l,n,e,t,r){var s,c,h,a,g,_,k,v,b,p,d,o,E,f,N,I;for(v=function(z){var R;return R={nodes:[],llds:[],keyroots:[]},Ee(z,n,function(u,M,U){var w,O,L;L=R.nodes.length,R.nodes.push(M),U==null?O=L:(w=R.nodes.indexOf(U),O=R.llds[w]),R.llds.push(O),u!==0&&R.keyroots.push(L)}),R},N=function(z,R){var u,M,U,w,O,L,j,B,Q,Y,Z,$,x,ee,ie,oe,le,ae,ce,he,fe;for(M=d.llds,O=o.llds,U=d.nodes,L=o.nodes,j=M[z]-1,B=O[R]-1,Z=z-M[z]+2,x=R-O[R]+2,u=Q=1,ae=Z;Q<ae;u=Q+=1)s[u][0]=s[u-1][0]+t(U[u+j]);for(w=Y=1,ce=x;Y<ce;w=Y+=1)s[0][w]=s[0][w-1]+e(L[w+B]);for(u=ee=1,he=Z;ee<he;u=ee+=1)for(w=le=1,fe=x;le<fe;w=le+=1)M[z]===M[u+j]&&O[R]===O[w+B]?($=Ne(s[u-1][w]+t(U[u+j]),s[u][w-1]+e(L[w+B]),s[u-1][w-1]+r(U[u+j],L[w+B])),I[u+j][w+B]=$.index,E[u+j][w+B]=s[u][w]=$.value):(ie=M[u+j]-1-j,oe=O[w+B]-1-B,s[u][w]=Math.min(s[u-1][w]+t(U[u+j]),s[u][w-1]+e(L[w+B]),s[ie][oe]+E[u+j][w+B]))},d=v(i),o=v(l),I=W(d.nodes.length,o.nodes.length),E=W(d.nodes.length,o.nodes.length),s=W(d.nodes.length+1,o.nodes.length+1),b=d.keyroots,a=0,_=b.length;a<_;a++)for(c=b[a],p=o.keyroots,g=0,k=p.length;g<k;g++)h=p[g],N(c,h);return f=E[d.nodes.length-1][o.nodes.length-1],new we(d,o,f,I,Me)};Me=function(i,l,n){var e,t,r;for(r=[],e=i.nodes.length-1,t=l.nodes.length-1;e>=0&&t>=0;)switch(n[e][t]){case 0:r.push([i.nodes[e],null]),--e;break;case 1:r.push([null,l.nodes[t]]),--t;break;case 2:r.push([i.nodes[e],l.nodes[t]]),--e,--t;break;default:throw new Error(`Invalid operation ${n[e][t]} at (${e}, ${t})`)}if(e===-1&&t!==-1)for(;t>=0;)r.push([null,l.nodes[t]]),--t;if(e!==-1&&t===-1)for(;e>=0;)r.push([i.nodes[e],null]),--e;return r};var ze=ye,Ie,Oe,Pe,Te,re;({Mapping:Ie,zero:re,trackedMin:Te}=K);Oe=function(i,l,n,e,t){var r,s,c,h,a,g,_,k,v,b,p,d,o,E,f,N,I,z;for(r=i,c=l,z=re(r.length+1,c.length+1),a=re(r.length+1,c.length+1),_=v=1,E=r.length;v<=E;_=v+=1)a[_][0]=_;for(k=b=1,f=c.length;b<=f;k=b+=1)a[0][k]=k;for(_=p=1,N=r.length;p<=N;_=p+=1)for(k=o=1,I=c.length;o<=I;k=o+=1)s=r[_-1],h=c[k-1],d=Te(a[_-1][k]+e(s),a[_][k-1]+n(h),a[_-1][k-1]+t(s,h)),z[_][k]=d.index,a[_][k]=d.value;return g=a[r.length][c.length],new Ie(r,c,g,z,Pe)};Pe=function(i,l,n){var e,t,r;for(e=i.length,t=l.length,r=[];e>0&&t>0;)switch(n[e][t]){case 0:r.push([i[e-1],null]),--e;break;case 1:r.push([null,l[t-1]]),--t;break;case 2:r.push([i[e-1],l[t-1]]),--e,--t;break;default:throw new Error(`Invalid operation ${n[e][t]} at (${e}, ${t})`)}if(e===0&&t!==0)for(;t>0;)r.push([null,l[t-1]]),--t;if(e!==0&&t===0)for(;e>0;)r.push([i[e-1],null]),--e;return r};var Be=Oe,Ce={ted:ze,levenshtein:Be};function _e(i,l,n){const e=i.slice();return e[21]=l[n],e}function pe(i,l,n){const e=i.slice();return e[24]=l[n],e}function de(i,l,n){const e=i.slice();return e[27]=l[n],e}function He(i){let l,n,e,t,r,s,c,h,a,g,_,k=i[0],v=[];for(let o=0;o<k.length;o+=1)v[o]=ke(de(i,k,o));let b=i[6].lines,p=[];for(let o=0;o<b.length;o+=1)p[o]=me(_e(i,b,o));let d=i[6].lines[i[2]-1].character==i[1]&&be(i);return{c(){l=P("input"),n=C(` Fast forward
		
		`),e=P("button"),t=C("Pick line"),r=D(),s=P("select");for(let o=0;o<v.length;o+=1)v[o].c();c=D(),h=P("ul");for(let o=0;o<p.length;o+=1)p[o].c();a=D(),d&&d.c(),this.h()},l(o){l=T(o,"INPUT",{type:!0}),n=H(o,` Fast forward
		
		`),e=T(o,"BUTTON",{});var E=F(e);t=H(E,"Pick line"),E.forEach(m),r=J(o),s=T(o,"SELECT",{class:!0});var f=F(s);for(let I=0;I<v.length;I+=1)v[I].l(f);f.forEach(m),c=J(o),h=T(o,"UL",{class:!0});var N=F(h);for(let I=0;I<p.length;I+=1)p[I].l(N);a=J(N),d&&d.l(N),N.forEach(m),this.h()},h(){A(l,"type","checkbox"),A(s,"class","svelte-8hoacd"),i[1]===void 0&&je(()=>i[15].call(s)),A(h,"class","svelte-8hoacd")},m(o,E){y(o,l,E),l.checked=i[4],y(o,n,E),y(o,e,E),S(e,t),y(o,r,E),y(o,s,E);for(let f=0;f<v.length;f+=1)v[f].m(s,null);ue(s,i[1]),y(o,c,E),y(o,h,E);for(let f=0;f<p.length;f+=1)p[f].m(h,null);S(h,a),d&&d.m(h,null),g||(_=[q(l,"change",i[13]),q(e,"click",i[14]),q(s,"change",i[15]),q(s,"change",i[12])],g=!0)},p(o,E){if(E&16&&(l.checked=o[4]),E&1){k=o[0];let f;for(f=0;f<k.length;f+=1){const N=de(o,k,f);v[f]?v[f].p(N,E):(v[f]=ke(N),v[f].c(),v[f].m(s,null))}for(;f<v.length;f+=1)v[f].d(1);v.length=k.length}if(E&3&&ue(s,o[1]),E&2414){b=o[6].lines;let f;for(f=0;f<b.length;f+=1){const N=_e(o,b,f);p[f]?p[f].p(N,E):(p[f]=me(N),p[f].c(),p[f].m(h,a))}for(;f<p.length;f+=1)p[f].d(1);p.length=b.length}o[6].lines[o[2]-1].character==o[1]?d?d.p(o,E):(d=be(o),d.c(),d.m(h,null)):d&&(d.d(1),d=null)},d(o){o&&m(l),o&&m(n),o&&m(e),o&&m(r),o&&m(s),ne(v,o),o&&m(c),o&&m(h),ne(p,o),d&&d.d(),g=!1,se(_)}}}function qe(i){let l,n,e,t,r,s,c,h;return{c(){l=P("h1"),n=C("No script uploaded"),e=C(`
		Upload a script in .json format to get started.
		`),t=P("br"),r=D(),s=P("input"),this.h()},l(a){l=T(a,"H1",{});var g=F(l);n=H(g,"No script uploaded"),g.forEach(m),e=H(a,`
		Upload a script in .json format to get started.
		`),t=T(a,"BR",{}),r=J(a),s=T(a,"INPUT",{type:!0,accept:!0}),this.h()},h(){A(s,"type","file"),A(s,"accept",".json")},m(a,g){y(a,l,g),S(l,n),y(a,e,g),y(a,t,g),y(a,r,g),y(a,s,g),c||(h=q(s,"change",i[9]),c=!0)},p:te,d(a){a&&m(l),a&&m(e),a&&m(t),a&&m(r),a&&m(s),c=!1,h()}}}function ke(i){let l,n=i[27]+"",e,t;return{c(){l=P("option"),e=C(n),this.h()},l(r){l=T(r,"OPTION",{});var s=F(l);e=H(s,n),s.forEach(m),this.h()},h(){l.__value=t=i[27],l.value=l.__value},m(r,s){y(r,l,s),S(l,e)},p(r,s){s&1&&n!==(n=r[27]+"")&&G(e,n),s&1&&t!==(t=r[27])&&(l.__value=t,l.value=l.__value)},d(r){r&&m(l)}}}function ge(i){let l,n,e=i[21].character+"",t,r,s,c,h;function a(b,p){return p&352&&(s=null),s==null&&(s=!!(!b[5]&&b[8].has(b[21].line_no))),s?Je:De}let g=a(i,-1),_=g(i);function k(){return i[16](i[21])}function v(...b){return i[17](i[21],...b)}return{c(){l=P("li"),n=P("h4"),t=C(e),r=D(),_.c(),this.h()},l(b){l=T(b,"LI",{class:!0});var p=F(l);n=T(p,"H4",{class:!0});var d=F(n);t=H(d,e),d.forEach(m),r=J(p),_.l(p),p.forEach(m),this.h()},h(){A(n,"class","svelte-8hoacd"),A(l,"class","svelte-8hoacd")},m(b,p){y(b,l,p),S(l,n),S(n,t),S(l,r),_.m(l,null),c||(h=[q(l,"click",k),q(l,"keypress",v)],c=!0)},p(b,p){i=b,p&64&&e!==(e=i[21].character+"")&&G(t,e),g===(g=a(i,p))&&_?_.p(i,p):(_.d(1),_=g(i),_&&(_.c(),_.m(l,null)))},d(b){b&&m(l),_.d(),c=!1,se(h)}}}function De(i){let l=i[21].line+"",n;return{c(){n=C(l)},l(e){n=H(e,l)},m(e,t){y(e,n,t)},p(e,t){t&64&&l!==(l=e[21].line+"")&&G(n,l)},d(e){e&&m(n)}}}function Je(i){let l,n=i[8].get(i[21].line_no)||[{correct:"ERROR",color:"red"}],e=[];for(let t=0;t<n.length;t+=1)e[t]=ve(pe(i,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=X()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);l=X()},m(t,r){for(let s=0;s<e.length;s+=1)e[s].m(t,r);y(t,l,r)},p(t,r){if(r&320){n=t[8].get(t[21].line_no)||[{correct:"ERROR",color:"red"}];let s;for(s=0;s<n.length;s+=1){const c=pe(t,n,s);e[s]?e[s].p(c,r):(e[s]=ve(c),e[s].c(),e[s].m(l.parentNode,l))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},d(t){ne(e,t),t&&m(l)}}}function ve(i){let l,n=i[24].correct+"",e,t,r=i[24].incorrect+"",s;return{c(){l=P("span"),e=C(n),t=P("span"),s=C(r),this.h()},l(c){l=T(c,"SPAN",{style:!0,class:!0});var h=F(l);e=H(h,n),t=T(h,"SPAN",{style:!0,class:!0});var a=F(t);s=H(a,r),a.forEach(m),h.forEach(m),this.h()},h(){V(t,"text-decoration","line-through"),V(t,"font-size","8pt"),A(t,"class","svelte-8hoacd"),V(l,"color",i[24].color),A(l,"class","svelte-8hoacd")},m(c,h){y(c,l,h),S(l,e),S(l,t),S(t,s)},p(c,h){h&320&&n!==(n=c[24].correct+"")&&G(e,n),h&320&&r!==(r=c[24].incorrect+"")&&G(s,r),h&320&&V(l,"color",c[24].color)},d(c){c&&m(l)}}}function me(i){let l,n=(i[5]||i[21].line_no>=i[3]&&i[21].line_no<=i[2]&&!(i[21].line_no==i[2]&&i[21].character==i[1]))&&ge(i);return{c(){n&&n.c(),l=X()},l(e){n&&n.l(e),l=X()},m(e,t){n&&n.m(e,t),y(e,l,t)},p(e,t){e[5]||e[21].line_no>=e[3]&&e[21].line_no<=e[2]&&!(e[21].line_no==e[2]&&e[21].character==e[1])?n?n.p(e,t):(n=ge(e),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&m(l)}}}function be(i){let l,n,e,t,r,s,c;return{c(){l=P("li"),n=P("h4"),e=C(i[1]),t=D(),r=P("textarea"),this.h()},l(h){l=T(h,"LI",{class:!0});var a=F(l);n=T(a,"H4",{class:!0});var g=F(n);e=H(g,i[1]),g.forEach(m),t=J(a),r=T(a,"TEXTAREA",{id:!0,class:!0}),F(r).forEach(m),a.forEach(m),this.h()},h(){A(n,"class","svelte-8hoacd"),A(r,"id","user_input"),A(r,"class","svelte-8hoacd"),A(l,"class","svelte-8hoacd")},m(h,a){y(h,l,a),S(l,n),S(n,e),S(l,t),S(l,r),i[18](r),s||(c=[q(r,"keyup",i[10]),Fe(Ve.call(null,r))],s=!0)},p(h,a){a&2&&G(e,h[1])},d(h){h&&m(l),i[18](null),s=!1,se(c)}}}function Ge(i){let l;function n(r,s){return r[6]==null?qe:He}let e=n(i),t=e(i);return{c(){l=P("div"),t.c(),this.h()},l(r){l=T(r,"DIV",{id:!0,class:!0});var s=F(l);t.l(s),s.forEach(m),this.h()},h(){A(l,"id","script"),A(l,"class","svelte-8hoacd")},m(r,s){y(r,l,s),t.m(l,null)},p(r,[s]){e===(e=n(r))&&t?t.p(r,s):(t.d(1),t=e(r),t&&(t.c(),t.m(l,null)))},i:te,o:te,d(r){r&&m(l),t.d()}}}function Ke(i){let l="",n="",e="";const t=[];for(const r of i.pairs().reverse()){const[s,c]=r,h=s===c?"green":"red";h!=l&&(n!=""||e!="")&&(t.push({correct:n,incorrect:e,color:l}),n="",e=""),l=h,s!=null&&(n+=s),c!=null&&s!=c&&(e+=c)}return(n!=""||e!="")&&t.push({correct:n,incorrect:e,color:l}),t}function Ve(i){i.focus()}function We(i,l,n){let e=[],t="",r=1,s=1,c=!1,h=!1,a=null,g=null,_,k=new Map;const v=u=>{if(u.target.files.length==0)return;const M=u.target.files[0],U=new FileReader;U.readAsText(M),U.onload=w=>{var L;const O=(L=w.target)==null?void 0:L.result;n(6,a={lines:JSON.parse(O)}),n(0,e=[...new Set(a.lines.map(j=>j.character))]),n(1,t=e[0]),b()}};function b(){async function u(){if(a!=null)for(;a.lines[r-1].character!=t;)n(2,r+=1),c||await new Promise(M=>setTimeout(M,1e3))}g=g||u().then(()=>{g=null})}function p(u){if(u.key!="Enter"||a==null)return;const M=u.target.value,U=Ce.levenshtein(a.lines[r-1].line,M,O=>1,O=>1,(O,L)=>O==L?0:1),w=Ke(U);k.set(r,w),n(8,k),n(2,r+=1),n(7,_.value="",_),b()}function d(u,M){!h||M!=null&&M.key!="Enter"||(n(5,h=!1),n(3,s=u.line_no-5),n(2,r=u.line_no),n(8,k=new Map))}function o(u){n(8,k=new Map),b()}function E(){c=this.checked,n(4,c)}const f=()=>{n(5,h=!0)};function N(){t=Se(this),n(1,t),n(0,e)}const I=u=>{d(u)},z=(u,M)=>{d(u,M)};function R(u){Ue[u?"unshift":"push"](()=>{_=u,n(7,_)})}return[e,t,r,s,c,h,a,_,k,v,p,d,o,E,f,N,I,z,R]}class Ye extends Re{constructor(l){super(),Ae(this,l,We,Ge,Le,{})}}export{Ye as default};
