import{S as Re,i as Ae,s as Se,k as R,l as A,m as D,h as b,n as O,b as y,H as ne,J as je,w as Fe,q as C,a as V,r as H,c as q,K as Ue,G as U,L as ue,M as L,N as te,O as re,u as J,e as X,P as ze,p as K}from"../chunks/index.8b214ad8.js";var G={};G.Mapping=class{constructor(l,t,e,n,s){this.pairs=this.pairs.bind(this),this.alignment=this.alignment.bind(this),this.a=l,this.b=t,this.distance=e,this.track=n,this.backtrackFn=s,this.pairCache=null}pairs(){return this.pairCache==null&&(this.pairCache=this.backtrackFn(this.a,this.b,this.track)),this.pairCache}alignment(){var l,t,e,n,s,r,c;for(r=this.pairs(),l=[],t=[],c=r.reverse(),e=0,n=c.length;e<n;e++)s=c[e],l.push(s[0]),t.push(s[1]);return{alignmentA:l,alignmentB:t}}};G.zero=function(i,l){var t,e,n,s,r,c,h,a;for(h=new Array(i),t=n=0,r=i;n<r;t=n+=1)for(a=h[t]=new Array(l),e=s=0,c=l;s<c;e=s+=1)a[e]=0;return h};G.trackedMin=function(i,l,t){var e;return e={value:i,index:0},l<e.value&&(e.value=l,e.index=1),t<e.value&&(e.value=t,e.index=2),e};var we,Ee,ye,Me,Ne,W;({Mapping:we,zero:W,trackedMin:Ne}=G);Ee=function(i,l,t){var e,n,s,r,c,h,a,g,_,v,k;for(v=[],k=[],v.push([void 0,i]);v.length>0;)for([r,a]=v.pop(),n=l(a),s=(g=n!=null?n[0]:void 0)!=null?g:null,k.push([r,a,s]),_=n??[],r=c=0,h=_.length;c<h;r=++c)e=_[r],v.push([r,e]);for(;k.length>0;)[r,a,s]=k.pop(),t(r,a,s)};ye=function(i,l,t,e,n,s){var r,c,h,a,g,_,v,k,m,p,d,o,E,f,N,P;for(k=function(B){var S;return S={nodes:[],llds:[],keyroots:[]},Ee(B,t,function(u,M,z){var w,T,j;j=S.nodes.length,S.nodes.push(M),z==null?T=j:(w=S.nodes.indexOf(z),T=S.llds[w]),S.llds.push(T),u!==0&&S.keyroots.push(j)}),S},N=function(B,S){var u,M,z,w,T,j,F,I,Q,Y,Z,$,x,ee,ie,oe,le,ae,ce,he,fe;for(M=d.llds,T=o.llds,z=d.nodes,j=o.nodes,F=M[B]-1,I=T[S]-1,Z=B-M[B]+2,x=S-T[S]+2,u=Q=1,ae=Z;Q<ae;u=Q+=1)r[u][0]=r[u-1][0]+n(z[u+F]);for(w=Y=1,ce=x;Y<ce;w=Y+=1)r[0][w]=r[0][w-1]+e(j[w+I]);for(u=ee=1,he=Z;ee<he;u=ee+=1)for(w=le=1,fe=x;le<fe;w=le+=1)M[B]===M[u+F]&&T[S]===T[w+I]?($=Ne(r[u-1][w]+n(z[u+F]),r[u][w-1]+e(j[w+I]),r[u-1][w-1]+s(z[u+F],j[w+I])),P[u+F][w+I]=$.index,E[u+F][w+I]=r[u][w]=$.value):(ie=M[u+F]-1-F,oe=T[w+I]-1-I,r[u][w]=Math.min(r[u-1][w]+n(z[u+F]),r[u][w-1]+e(j[w+I]),r[ie][oe]+E[u+F][w+I]))},d=k(i),o=k(l),P=W(d.nodes.length,o.nodes.length),E=W(d.nodes.length,o.nodes.length),r=W(d.nodes.length+1,o.nodes.length+1),m=d.keyroots,a=0,_=m.length;a<_;a++)for(c=m[a],p=o.keyroots,g=0,v=p.length;g<v;g++)h=p[g],N(c,h);return f=E[d.nodes.length-1][o.nodes.length-1],new we(d,o,f,P,Me)};Me=function(i,l,t){var e,n,s;for(s=[],e=i.nodes.length-1,n=l.nodes.length-1;e>=0&&n>=0;)switch(t[e][n]){case 0:s.push([i.nodes[e],null]),--e;break;case 1:s.push([null,l.nodes[n]]),--n;break;case 2:s.push([i.nodes[e],l.nodes[n]]),--e,--n;break;default:throw new Error(`Invalid operation ${t[e][n]} at (${e}, ${n})`)}if(e===-1&&n!==-1)for(;n>=0;)s.push([null,l.nodes[n]]),--n;if(e!==-1&&n===-1)for(;e>=0;)s.push([i.nodes[e],null]),--e;return s};var De=ye,Ie,Oe,Pe,Te,se;({Mapping:Ie,zero:se,trackedMin:Te}=G);Oe=function(i,l,t,e,n){var s,r,c,h,a,g,_,v,k,m,p,d,o,E,f,N,P,B;for(s=i,c=l,B=se(s.length+1,c.length+1),a=se(s.length+1,c.length+1),_=k=1,E=s.length;k<=E;_=k+=1)a[_][0]=_;for(v=m=1,f=c.length;m<=f;v=m+=1)a[0][v]=v;for(_=p=1,N=s.length;p<=N;_=p+=1)for(v=o=1,P=c.length;o<=P;v=o+=1)r=s[_-1],h=c[v-1],d=Te(a[_-1][v]+e(r),a[_][v-1]+t(h),a[_-1][v-1]+n(r,h)),B[_][v]=d.index,a[_][v]=d.value;return g=a[s.length][c.length],new Ie(s,c,g,B,Pe)};Pe=function(i,l,t){var e,n,s;for(e=i.length,n=l.length,s=[];e>0&&n>0;)switch(t[e][n]){case 0:s.push([i[e-1],null]),--e;break;case 1:s.push([null,l[n-1]]),--n;break;case 2:s.push([i[e-1],l[n-1]]),--e,--n;break;default:throw new Error(`Invalid operation ${t[e][n]} at (${e}, ${n})`)}if(e===0&&n!==0)for(;n>0;)s.push([null,l[n-1]]),--n;if(e!==0&&n===0)for(;e>0;)s.push([i[e-1],null]),--e;return s};var Be=Oe,Ce={ted:De,levenshtein:Be};function _e(i,l,t){const e=i.slice();return e[21]=l[t],e}function pe(i,l,t){const e=i.slice();return e[24]=l[t],e}function de(i,l,t){const e=i.slice();return e[27]=l[t],e}function He(i){let l,t,e,n,s,r,c,h,a,g,_,v=i[0],k=[];for(let o=0;o<v.length;o+=1)k[o]=ve(de(i,v,o));let m=i[6].lines,p=[];for(let o=0;o<m.length;o+=1)p[o]=me(_e(i,m,o));let d=i[6].lines[i[2]-1].character==i[1]&&be(i);return{c(){l=R("input"),t=C(` Fast forward
		
		`),e=R("button"),n=C("Pick line"),s=V(),r=R("select");for(let o=0;o<k.length;o+=1)k[o].c();c=V(),h=R("div");for(let o=0;o<p.length;o+=1)p[o].c();a=V(),d&&d.c(),this.h()},l(o){l=A(o,"INPUT",{type:!0}),t=H(o,` Fast forward
		
		`),e=A(o,"BUTTON",{class:!0});var E=D(e);n=H(E,"Pick line"),E.forEach(b),s=q(o),r=A(o,"SELECT",{class:!0});var f=D(r);for(let P=0;P<k.length;P+=1)k[P].l(f);f.forEach(b),c=q(o),h=A(o,"DIV",{class:!0});var N=D(h);for(let P=0;P<p.length;P+=1)p[P].l(N);a=q(N),d&&d.l(N),N.forEach(b),this.h()},h(){O(l,"type","checkbox"),O(e,"class","svelte-3nh1vm"),O(r,"class","svelte-3nh1vm"),i[1]===void 0&&Ue(()=>i[15].call(r)),O(h,"class","lines svelte-3nh1vm")},m(o,E){y(o,l,E),l.checked=i[4],y(o,t,E),y(o,e,E),U(e,n),y(o,s,E),y(o,r,E);for(let f=0;f<k.length;f+=1)k[f].m(r,null);ue(r,i[1]),y(o,c,E),y(o,h,E);for(let f=0;f<p.length;f+=1)p[f].m(h,null);U(h,a),d&&d.m(h,null),g||(_=[L(l,"change",i[13]),L(e,"click",i[14]),L(r,"change",i[15]),L(r,"change",i[12])],g=!0)},p(o,E){if(E&16&&(l.checked=o[4]),E&1){v=o[0];let f;for(f=0;f<v.length;f+=1){const N=de(o,v,f);k[f]?k[f].p(N,E):(k[f]=ve(N),k[f].c(),k[f].m(r,null))}for(;f<k.length;f+=1)k[f].d(1);k.length=v.length}if(E&3&&ue(r,o[1]),E&2414){m=o[6].lines;let f;for(f=0;f<m.length;f+=1){const N=_e(o,m,f);p[f]?p[f].p(N,E):(p[f]=me(N),p[f].c(),p[f].m(h,a))}for(;f<p.length;f+=1)p[f].d(1);p.length=m.length}o[6].lines[o[2]-1].character==o[1]?d?d.p(o,E):(d=be(o),d.c(),d.m(h,null)):d&&(d.d(1),d=null)},d(o){o&&b(l),o&&b(t),o&&b(e),o&&b(s),o&&b(r),te(k,o),o&&b(c),o&&b(h),te(p,o),d&&d.d(),g=!1,re(_)}}}function Le(i){let l,t,e,n,s,r,c,h;return{c(){l=R("h1"),t=C("No script uploaded"),e=C(`
		Upload a script in .json format to get started.
		`),n=R("br"),s=V(),r=R("input"),this.h()},l(a){l=A(a,"H1",{class:!0});var g=D(l);t=H(g,"No script uploaded"),g.forEach(b),e=H(a,`
		Upload a script in .json format to get started.
		`),n=A(a,"BR",{}),s=q(a),r=A(a,"INPUT",{type:!0,accept:!0}),this.h()},h(){O(l,"class","svelte-3nh1vm"),O(r,"type","file"),O(r,"accept",".json")},m(a,g){y(a,l,g),U(l,t),y(a,e,g),y(a,n,g),y(a,s,g),y(a,r,g),c||(h=L(r,"change",i[9]),c=!0)},p:ne,d(a){a&&b(l),a&&b(e),a&&b(n),a&&b(s),a&&b(r),c=!1,h()}}}function ve(i){let l,t=i[27]+"",e,n;return{c(){l=R("option"),e=C(t),this.h()},l(s){l=A(s,"OPTION",{});var r=D(l);e=H(r,t),r.forEach(b),this.h()},h(){l.__value=n=i[27],l.value=l.__value},m(s,r){y(s,l,r),U(l,e)},p(s,r){r&1&&t!==(t=s[27]+"")&&J(e,t),r&1&&n!==(n=s[27])&&(l.__value=n,l.value=l.__value)},d(s){s&&b(l)}}}function ge(i){let l,t,e=i[21].character+"",n,s,r,c,h;function a(m,p){return p&352&&(r=null),r==null&&(r=!!(!m[5]&&m[8].has(m[21].line_no))),r?qe:Ve}let g=a(i,-1),_=g(i);function v(){return i[16](i[21])}function k(...m){return i[17](i[21],...m)}return{c(){l=R("div"),t=R("h4"),n=C(e),s=V(),_.c(),this.h()},l(m){l=A(m,"DIV",{class:!0});var p=D(l);t=A(p,"H4",{class:!0});var d=D(t);n=H(d,e),d.forEach(b),s=q(p),_.l(p),p.forEach(b),this.h()},h(){O(t,"class","svelte-3nh1vm"),O(l,"class","line svelte-3nh1vm")},m(m,p){y(m,l,p),U(l,t),U(t,n),U(l,s),_.m(l,null),c||(h=[L(l,"click",v),L(l,"keypress",k)],c=!0)},p(m,p){i=m,p&64&&e!==(e=i[21].character+"")&&J(n,e),g===(g=a(i,p))&&_?_.p(i,p):(_.d(1),_=g(i),_&&(_.c(),_.m(l,null)))},d(m){m&&b(l),_.d(),c=!1,re(h)}}}function Ve(i){let l=i[21].line+"",t;return{c(){t=C(l)},l(e){t=H(e,l)},m(e,n){y(e,t,n)},p(e,n){n&64&&l!==(l=e[21].line+"")&&J(t,l)},d(e){e&&b(t)}}}function qe(i){let l,t=i[8].get(i[21].line_no)||[{correct:"ERROR",color:"red"}],e=[];for(let n=0;n<t.length;n+=1)e[n]=ke(pe(i,t,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=X()},l(n){for(let s=0;s<e.length;s+=1)e[s].l(n);l=X()},m(n,s){for(let r=0;r<e.length;r+=1)e[r].m(n,s);y(n,l,s)},p(n,s){if(s&320){t=n[8].get(n[21].line_no)||[{correct:"ERROR",color:"red"}];let r;for(r=0;r<t.length;r+=1){const c=pe(n,t,r);e[r]?e[r].p(c,s):(e[r]=ke(c),e[r].c(),e[r].m(l.parentNode,l))}for(;r<e.length;r+=1)e[r].d(1);e.length=t.length}},d(n){te(e,n),n&&b(l)}}}function ke(i){let l,t=i[24].correct+"",e,n,s=i[24].incorrect+"",r;return{c(){l=R("span"),e=C(t),n=R("span"),r=C(s),this.h()},l(c){l=A(c,"SPAN",{style:!0,class:!0});var h=D(l);e=H(h,t),n=A(h,"SPAN",{style:!0,class:!0});var a=D(n);r=H(a,s),a.forEach(b),h.forEach(b),this.h()},h(){K(n,"text-decoration","line-through"),K(n,"font-size","8pt"),O(n,"class","svelte-3nh1vm"),K(l,"color",i[24].color),O(l,"class","svelte-3nh1vm")},m(c,h){y(c,l,h),U(l,e),U(l,n),U(n,r)},p(c,h){h&320&&t!==(t=c[24].correct+"")&&J(e,t),h&320&&s!==(s=c[24].incorrect+"")&&J(r,s),h&320&&K(l,"color",c[24].color)},d(c){c&&b(l)}}}function me(i){let l,t=(i[5]||i[21].line_no>=i[3]&&i[21].line_no<=i[2]&&!(i[21].line_no==i[2]&&i[21].character==i[1]))&&ge(i);return{c(){t&&t.c(),l=X()},l(e){t&&t.l(e),l=X()},m(e,n){t&&t.m(e,n),y(e,l,n)},p(e,n){e[5]||e[21].line_no>=e[3]&&e[21].line_no<=e[2]&&!(e[21].line_no==e[2]&&e[21].character==e[1])?t?t.p(e,n):(t=ge(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&b(l)}}}function be(i){let l,t,e,n,s,r,c;return{c(){l=R("div"),t=R("h4"),e=C(i[1]),n=V(),s=R("textarea"),this.h()},l(h){l=A(h,"DIV",{class:!0});var a=D(l);t=A(a,"H4",{class:!0});var g=D(t);e=H(g,i[1]),g.forEach(b),n=q(a),s=A(a,"TEXTAREA",{id:!0,class:!0}),D(s).forEach(b),a.forEach(b),this.h()},h(){O(t,"class","svelte-3nh1vm"),O(s,"id","user_input"),O(s,"class","svelte-3nh1vm"),O(l,"class","line svelte-3nh1vm")},m(h,a){y(h,l,a),U(l,t),U(t,e),U(l,n),U(l,s),i[18](s),r||(c=[L(s,"keypress",i[10]),ze(Ke.call(null,s))],r=!0)},p(h,a){a&2&&J(e,h[1])},d(h){h&&b(l),i[18](null),r=!1,re(c)}}}function Je(i){let l;function t(s,r){return s[6]==null?Le:He}let e=t(i),n=e(i);return{c(){l=R("div"),n.c(),this.h()},l(s){l=A(s,"DIV",{id:!0,class:!0});var r=D(l);n.l(r),r.forEach(b),this.h()},h(){O(l,"id","container"),O(l,"class","svelte-3nh1vm")},m(s,r){y(s,l,r),n.m(l,null)},p(s,[r]){e===(e=t(s))&&n?n.p(s,r):(n.d(1),n=e(s),n&&(n.c(),n.m(l,null)))},i:ne,o:ne,d(s){s&&b(l),n.d()}}}function Ge(i){let l="",t="",e="";const n=[];for(const s of i.pairs().reverse()){const[r,c]=s,h=r===c?"green":"red";h!=l&&(t!=""||e!="")&&(n.push({correct:t,incorrect:e,color:l}),t="",e=""),l=h,r!=null&&(t+=r),c!=null&&r!=c&&(e+=c)}return(t!=""||e!="")&&n.push({correct:t,incorrect:e,color:l}),n}function Ke(i){i.focus()}function We(i,l,t){let e=[],n="",s=1,r=1,c=!1,h=!1,a=null,g=null,_,v=new Map;const k=u=>{if(u.target.files.length==0)return;const M=u.target.files[0],z=new FileReader;z.readAsText(M),z.onload=w=>{var F;const T=(F=w.target)==null?void 0:F.result,j=JSON.parse(T);for(let I=0;I<j.length;I++)j[I].line_no=I+1;t(6,a={lines:j}),console.log(a),t(0,e=[...new Set(a.lines.map(I=>I.character))]),t(1,n=e[0]),m()}};function m(){async function u(){if(a!=null)for(;a.lines[s-1].character!=n;)t(2,s+=1),c||await new Promise(M=>setTimeout(M,1e3))}g=g||u().then(()=>{g=null})}function p(u){if(u.key!="Enter"||a==null)return;const M=u.target.value,z=Ce.levenshtein(a.lines[s-1].line,M,T=>1,T=>1,(T,j)=>T==j?0:1),w=Ge(z);v.set(s,w),t(8,v),t(2,s+=1),t(7,_.value="",_),m()}function d(u,M){!h||M!=null&&M.key!="Enter"||(t(5,h=!1),t(3,r=u.line_no-5),t(2,s=u.line_no),t(8,v=new Map),m())}function o(u){t(8,v=new Map),m()}function E(){c=this.checked,t(4,c)}const f=()=>{t(5,h=!0)};function N(){n=je(this),t(1,n),t(0,e)}const P=u=>{d(u)},B=(u,M)=>{d(u,M)};function S(u){Fe[u?"unshift":"push"](()=>{_=u,t(7,_)})}return[e,n,s,r,c,h,a,_,v,k,p,d,o,E,f,N,P,B,S]}class Ye extends Re{constructor(l){super(),Ae(this,l,We,Je,Se,{})}}export{Ye as default};
