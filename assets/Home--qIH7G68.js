import{r as c,L as Nn,M as yt,R as M,N as Bt,P as In,c as _,Q as me,q as Hn,S as rt,u as _n,T as Dn,U as Wn,t as St,h as xt,m as dn,d as C,f as wt,k as Ue,e as un,y as ut,p as Je,C as fn,V as On,B as pn,v as $t,w as An,j as Ct,o as Bn,W as jn,_ as g,X as Ee,Y as Le,Z as Me,$ as k,a0 as le,a1 as Oe,a2 as Ae,a3 as Gn,a4 as hn,I as T,J as oe,a5 as Tt,H as Qe,a6 as qn,G as Xn}from"./index-DNalfx-J.js";import{n as Fn}from"./index-Btrzw-0X.js";import{G as mn}from"./index-D0eX9_Us.js";import{u as jt,R as Yn,C as Kn}from"./row-QHmF9elU.js";import{C as ft}from"./CtaButton-B-hTZy4U.js";import{S as Vn}from"./index-CqTnZPRo.js";import{p as Un}from"./projects-XwLchmS9.js";import{u as Jn}from"./useVariants-DUiEByO-.js";import{E as Qn,M as Zn,b as er,R as tr,c as nr}from"./Envelope.esm-CDitLKLk.js";import{i as Gt}from"./statusUtils-C-H4A-Fy.js";import{_ as Te}from"./extends-CF3RwP-h.js";import{_ as rr}from"./index.esm-BuCjVxID.js";import"./ArrowRight.esm-BuNw6WdP.js";var ir={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function pt(){return pt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},pt.apply(this,arguments)}const ar=(n,e)=>c.createElement(Nn,pt({},n,{ref:e,icon:ir})),or=c.forwardRef(ar);var Ie={exports:{}},qt;function sr(){if(qt)return Ie.exports;qt=1,Ie.exports=t,Ie.exports.isMobile=t,Ie.exports.default=t;const n=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,e=/CrOS/,r=/android|ipad|playbook|silk/i;function t(o){o||(o={});let i=o.ua;if(!i&&typeof navigator<"u"&&(i=navigator.userAgent),i&&i.headers&&typeof i.headers["user-agent"]=="string"&&(i=i.headers["user-agent"]),typeof i!="string")return!1;let a=n.test(i)&&!e.test(i)||!!o.tablet&&r.test(i);return!a&&o.tablet&&o.featureDetect&&navigator&&navigator.maxTouchPoints>1&&i.indexOf("Macintosh")!==-1&&i.indexOf("Safari")!==-1&&(a=!0),a}return Ie.exports}var lr=sr();const cr=yt(lr);let it;const dr=(()=>(typeof it>"u"&&(it=cr()),it)),Et=c.createContext(null),ur=n=>{const{activeTabOffset:e,horizontal:r,rtl:t,indicator:o={}}=n,{size:i,align:a="center"}=o,[s,l]=c.useState(),d=c.useRef(),m=M.useCallback(h=>typeof i=="function"?i(h):typeof i=="number"?i:h,[i]);function p(){Bt.cancel(d.current)}return c.useEffect(()=>{const h={};if(e)if(r){h.width=m(e.width);const y=t?"right":"left";a==="start"&&(h[y]=e[y]),a==="center"&&(h[y]=e[y]+e.width/2,h.transform=t?"translateX(50%)":"translateX(-50%)"),a==="end"&&(h[y]=e[y]+e.width,h.transform="translateX(-100%)")}else h.height=m(e.height),a==="start"&&(h.top=e.top),a==="center"&&(h.top=e.top+e.height/2,h.transform="translateY(-50%)"),a==="end"&&(h.top=e.top+e.height,h.transform="translateY(-100%)");return p(),d.current=Bt(()=>{s&&h&&Object.keys(h).every(S=>{const f=h[S],v=s[S];return typeof f=="number"&&typeof v=="number"?Math.round(f)===Math.round(v):f===v})||l(h)}),p},[JSON.stringify(e),r,t,a,m]),{style:s}},Xt={width:0,height:0,left:0,top:0};function fr(n,e,r){return c.useMemo(()=>{const t=new Map,o=e.get(n[0]?.key)||Xt,i=o.left+o.width;for(let a=0;a<n.length;a+=1){const{key:s}=n[a];let l=e.get(s);l||(l=e.get(n[a-1]?.key)||Xt);const d=t.get(s)||{...l};d.right=i-d.left-d.width,t.set(s,d)}return t},[n.map(t=>t.key).join("_"),e,r])}function Ft(n,e){const r=c.useRef(n),[,t]=c.useState({});function o(i){const a=typeof i=="function"?i(r.current):i;a!==r.current&&e(a,r.current),r.current=a,t({})}return[r.current,o]}const pr=.1,Yt=.01,Ye=20,Kt=.995**Ye;function hr(n,e){const[r,t]=c.useState(),[o,i]=c.useState(0),[a,s]=c.useState(0),[l,d]=c.useState(),m=c.useRef();function p(x){const{screenX:u,screenY:b}=x.touches[0];t({x:u,y:b}),window.clearInterval(m.current)}function h(x){if(!r)return;const{screenX:u,screenY:b}=x.touches[0];t({x:u,y:b});const w=u-r.x,$=b-r.y;e(w,$);const L=Date.now();i(L),s(L-o),d({x:w,y:$})}function y(){if(r&&(t(null),d(null),l)){const x=l.x/a,u=l.y/a,b=Math.abs(x),w=Math.abs(u);if(Math.max(b,w)<pr)return;let $=x,L=u;m.current=window.setInterval(()=>{if(Math.abs($)<Yt&&Math.abs(L)<Yt){window.clearInterval(m.current);return}$*=Kt,L*=Kt,e($*Ye,L*Ye)},Ye)}}const S=c.useRef();function f(x){const{deltaX:u,deltaY:b}=x;let w=0;const $=Math.abs(u),L=Math.abs(b);$===L?w=S.current==="x"?u:b:$>L?(w=u,S.current="x"):(w=b,S.current="y"),e(-w,-w)&&x.preventDefault()}const v=c.useRef(null);v.current={onTouchStart:p,onTouchMove:h,onTouchEnd:y,onWheel:f},c.useEffect(()=>{function x($){v.current.onTouchStart($)}function u($){v.current.onTouchMove($)}function b($){v.current.onTouchEnd($)}function w($){v.current.onWheel($)}return document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",b,{passive:!0}),n.current.addEventListener("touchstart",x,{passive:!0}),n.current.addEventListener("wheel",w,{passive:!1}),()=>{document.removeEventListener("touchmove",u),document.removeEventListener("touchend",b)}},[])}function gn(n){const[e,r]=c.useState(0),t=c.useRef(0),o=c.useRef();return o.current=n,In(()=>{o.current?.()},[e]),()=>{t.current===e&&(t.current+=1,r(t.current))}}function mr(n){const e=c.useRef([]),[,r]=c.useState({}),t=c.useRef(typeof n=="function"?n():n),o=gn(()=>{let a=t.current;e.current.forEach(s=>{a=s(a)}),e.current=[],t.current=a,r({})});function i(a){e.current.push(a),o()}return[t.current,i]}const Vt={width:0,height:0,left:0,top:0,right:0};function gr(n,e,r,t,o,i,{tabs:a,tabPosition:s,rtl:l}){let d,m,p;return["top","bottom"].includes(s)?(d="width",m=l?"right":"left",p=Math.abs(r)):(d="height",m="top",p=-r),c.useMemo(()=>{if(!a.length)return[0,0];const h=a.length;let y=h;for(let f=0;f<h;f+=1){const v=n.get(a[f].key)||Vt;if(Math.floor(v[m]+v[d])>Math.floor(p+e)){y=f-1;break}}let S=0;for(let f=h-1;f>=0;f-=1)if((n.get(a[f].key)||Vt)[m]<p){S=f+1;break}return S>y?[0,-1]:[S,y]},[n,e,t,o,i,p,s,a.map(h=>h.key).join("_"),l])}function Ut(n){let e;return n instanceof Map?(e={},n.forEach((r,t)=>{e[t]=r})):e=n,JSON.stringify(e)}const vr="TABS_DQ";function vn(n){return String(n).replace(/"/g,vr)}function Lt(n,e,r,t){return!(!r||t||n===!1||n===void 0&&(e===!1||e===null))}const bn=c.forwardRef((n,e)=>{const{prefixCls:r,editable:t,locale:o,style:i}=n;return!t||t.showAdd===!1?null:c.createElement("button",{ref:e,type:"button",className:`${r}-nav-add`,style:i,"aria-label":o?.addAriaLabel||"Add tab",onClick:a=>{t.onEdit("add",{event:a})}},t.addIcon||"+")}),Jt=c.forwardRef((n,e)=>{const{position:r,prefixCls:t,extra:o}=n;if(!o)return null;let i,a={};return typeof o=="object"&&!c.isValidElement(o)?a=o:a.right=o,r==="right"&&(i=a.right),r==="left"&&(i=a.left),i?c.createElement("div",{className:`${t}-extra-content`,ref:e},i):null});function ht(){return ht=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},ht.apply(this,arguments)}const br=c.forwardRef((n,e)=>{const{prefixCls:r,id:t,tabs:o,locale:i,mobile:a,more:s={},style:l,className:d,editable:m,tabBarGutter:p,rtl:h,removeAriaLabel:y,onTabClick:S,getPopupContainer:f,popupClassName:v,popupStyle:x}=n,[u,b]=c.useState(!1),[w,$]=c.useState(null),{icon:L="More"}=s,q=`${t}-more-popup`,N=`${r}-dropdown`,W=w!==null?`${q}-${w}`:null,B=i?.dropdownAriaLabel;function U(P,D){P.preventDefault(),P.stopPropagation(),m.onEdit("remove",{key:D,event:P})}const E=c.createElement(Qn,{onClick:({key:P,domEvent:D})=>{S(P,D),b(!1)},prefixCls:`${N}-menu`,id:q,tabIndex:-1,role:"listbox","aria-activedescendant":W,selectedKeys:[w],"aria-label":B!==void 0?B:"expanded dropdown"},o.map(P=>{const{closable:D,disabled:j,closeIcon:F,key:Y,label:ne}=P,O=Lt(D,F,m,j);return c.createElement(Zn,{key:Y,id:`${q}-${Y}`,role:"option","aria-controls":t&&`${t}-panel-${Y}`,disabled:j},c.createElement("span",null,ne),O&&c.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:`${N}-menu-item-remove`,onClick:J=>{J.stopPropagation(),U(J,Y)}},F||m.removeIcon||"×"))}));function H(P){const D=o.filter(Y=>!Y.disabled);let j=D.findIndex(Y=>Y.key===w)||0;const F=D.length;for(let Y=0;Y<F;Y+=1){j=(j+P+F)%F;const ne=D[j];if(!ne.disabled){$(ne.key);return}}}function K(P){const{which:D}=P;if(!u){[me.DOWN,me.SPACE,me.ENTER].includes(D)&&(b(!0),P.preventDefault());return}switch(D){case me.UP:H(-1),P.preventDefault();break;case me.DOWN:H(1),P.preventDefault();break;case me.ESC:b(!1);break;case me.SPACE:case me.ENTER:w!==null&&S(w,P);break}}c.useEffect(()=>{const P=document.getElementById(W);P?.scrollIntoView&&P.scrollIntoView(!1)},[W,w]),c.useEffect(()=>{u||$(null)},[u]);const I={marginInlineStart:p};o.length||(I.visibility="hidden",I.order=1);const ee=_(v,{[`${N}-rtl`]:h}),X=a?null:c.createElement(er,ht({prefixCls:N,overlay:E,visible:o.length?u:!1,onVisibleChange:b,overlayClassName:ee,overlayStyle:x,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:f},s),c.createElement("button",{type:"button",className:`${r}-nav-more`,style:I,"aria-haspopup":"listbox","aria-controls":q,id:`${t}-more`,"aria-expanded":u,onKeyDown:K},L));return c.createElement("div",{className:_(`${r}-nav-operations`,d),style:l,ref:e},X,c.createElement(bn,{prefixCls:r,locale:i,editable:m}))}),yr=c.memo(br,(n,e)=>e.tabMoving),Sr=n=>{const{prefixCls:e,id:r,active:t,focus:o,tab:{key:i,label:a,disabled:s,closeIcon:l,icon:d},closable:m,renderWrapper:p,removeAriaLabel:h,editable:y,onClick:S,onFocus:f,onBlur:v,onKeyDown:x,onMouseDown:u,onMouseUp:b,style:w,className:$,tabCount:L,currentPosition:q}=n,N=`${e}-tab`,W=Lt(m,l,y,s);function B(I){s||S(I)}function U(I){I.preventDefault(),I.stopPropagation(),y.onEdit("remove",{key:i,event:I})}const E=c.useMemo(()=>d&&typeof a=="string"?c.createElement("span",null,a):a,[a,d]),H=c.useRef(null);c.useEffect(()=>{o&&H.current&&H.current.focus()},[o]);const K=c.createElement("div",{key:i,"data-node-key":vn(i),className:_(N,$,{[`${N}-with-remove`]:W,[`${N}-active`]:t,[`${N}-disabled`]:s,[`${N}-focus`]:o}),style:w,onClick:B},c.createElement("div",{ref:H,role:"tab","aria-selected":t,id:r&&`${r}-tab-${i}`,className:`${N}-btn`,"aria-controls":r&&`${r}-panel-${i}`,"aria-disabled":s,tabIndex:s?null:t?0:-1,onClick:I=>{I.stopPropagation(),B(I)},onKeyDown:x,onMouseDown:u,onMouseUp:b,onFocus:f,onBlur:v},o&&c.createElement("div",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},`Tab ${q} of ${L}`),d&&c.createElement("span",{className:`${N}-icon`},d),a&&E),W&&c.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:t?0:-1,className:`${N}-remove`,onClick:I=>{I.stopPropagation(),U(I)}},l||y.removeIcon||"×"));return p?p(K):K};function mt(){return mt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},mt.apply(this,arguments)}const xr=(n,e)=>{const{offsetWidth:r,offsetHeight:t,offsetTop:o,offsetLeft:i}=n,{width:a,height:s,left:l,top:d}=n.getBoundingClientRect();return Math.abs(a-r)<1?[a,s,l-e.left,d-e.top]:[r,t,i,o]},$e=n=>{const{offsetWidth:e=0,offsetHeight:r=0}=n.current||{};if(n.current){const{width:t,height:o}=n.current.getBoundingClientRect();if(Math.abs(t-e)<1)return[t,o]}return[e,r]},Xe=(n,e)=>n[e?0:1],Qt=c.forwardRef((n,e)=>{const{className:r,style:t,id:o,animated:i,activeKey:a,rtl:s,extra:l,editable:d,locale:m,tabPosition:p,tabBarGutter:h,children:y,onTabClick:S,onTabScroll:f,indicator:v,classNames:x,styles:u}=n,{prefixCls:b,tabs:w}=c.useContext(Et),$=c.useRef(null),L=c.useRef(null),q=c.useRef(null),N=c.useRef(null),W=c.useRef(null),B=c.useRef(null),U=c.useRef(null),E=p==="top"||p==="bottom",[H,K]=Ft(0,(R,z)=>{E&&f&&f({direction:R>z?"left":"right"})}),[I,ee]=Ft(0,(R,z)=>{!E&&f&&f({direction:R>z?"top":"bottom"})}),[X,P]=c.useState([0,0]),[D,j]=c.useState([0,0]),[F,Y]=c.useState([0,0]),[ne,O]=c.useState([0,0]),[J,V]=mr(new Map),G=fr(w,J,D[0]),Q=Xe(X,E),te=Xe(D,E),ue=Xe(F,E),ge=Xe(ne,E),ve=Math.floor(Q)<Math.floor(te+ue),re=ve?Q-ge:Q-ue,ye=`${b}-nav-operations-hidden`;let ie=0,ae=0;E&&s?(ie=0,ae=Math.max(0,te-re)):(ie=Math.min(0,re-te),ae=0);function be(R){return R<ie?ie:R>ae?ae:R}const Re=c.useRef(null),[Se,Be]=c.useState();function ke(){Be(Date.now())}function ze(){Re.current&&clearTimeout(Re.current)}hr(N,(R,z)=>{function A(Z,se){Z(he=>be(he+se))}return ve?(E?A(K,R):A(ee,z),ze(),ke(),!0):!1}),c.useEffect(()=>(ze(),Se&&(Re.current=setTimeout(()=>{Be(0)},100)),ze),[Se]);const[fe,pe]=gr(G,re,E?H:I,te,ue,ge,{...n,tabs:w}),je=Hn((R=a)=>{const z=G.get(R)||{width:0,height:0,left:0,right:0,top:0};if(E){let A=H;s?z.right<H?A=z.right:z.right+z.width>H+re&&(A=z.right+z.width-re):z.left<-H?A=-z.left:z.left+z.width>-H+re&&(A=-(z.left+z.width-re)),ee(0),K(be(A))}else{let A=I;z.top<-I?A=-z.top:z.top+z.height>-I+re&&(A=-(z.top+z.height-re)),K(0),ee(be(A))}}),[xe,Pe]=c.useState(),[En,zt]=c.useState(!1),ce=w.filter(R=>!R.disabled).map(R=>R.key),we=R=>{const z=ce.indexOf(xe||a),A=ce.length,Z=(z+R+A)%A,se=ce[Z];Pe(se)},Pt=(R,z)=>{const A=ce.indexOf(R),Z=w.find(he=>he.key===R);Lt(Z?.closable,Z?.closeIcon,d,Z?.disabled)&&(z.preventDefault(),z.stopPropagation(),d.onEdit("remove",{key:R,event:z}),A===ce.length-1?we(-1):we(1))},Ln=(R,z)=>{zt(!0),z.button===1&&Pt(R,z)},Mn=R=>{const{code:z}=R,A=s&&E,Z=ce[0],se=ce[ce.length-1];switch(z){case"ArrowLeft":{E&&we(A?1:-1);break}case"ArrowRight":{E&&we(A?-1:1);break}case"ArrowUp":{R.preventDefault(),E||we(-1);break}case"ArrowDown":{R.preventDefault(),E||we(1);break}case"Home":{R.preventDefault(),Pe(Z);break}case"End":{R.preventDefault(),Pe(se);break}case"Enter":case"Space":{R.preventDefault(),S(xe??a,R);break}case"Backspace":case"Delete":{Pt(xe,R);break}}},Ge={};E?Ge.marginInlineStart=h:Ge.marginTop=h;const Nt=w.map((R,z)=>{const{key:A}=R;return c.createElement(Sr,{id:o,prefixCls:b,key:A,tab:R,className:x?.item,style:z===0?u?.item:{...Ge,...u?.item},closable:R.closable,editable:d,active:A===a,focus:A===xe,renderWrapper:y,removeAriaLabel:m?.removeAriaLabel,tabCount:ce.length,currentPosition:z+1,onClick:Z=>{S(A,Z)},onKeyDown:Mn,onFocus:()=>{En||Pe(A),je(A),ke(),N.current&&(s||(N.current.scrollLeft=0),N.current.scrollTop=0)},onBlur:()=>{Pe(void 0)},onMouseDown:Z=>Ln(A,Z),onMouseUp:()=>{zt(!1)}})}),It=()=>V(()=>{const R=new Map,z=W.current?.getBoundingClientRect();return w.forEach(({key:A})=>{const Z=W.current?.querySelector(`[data-node-key="${vn(A)}"]`);if(Z){const[se,he,At,Pn]=xr(Z,z);R.set(A,{width:se,height:he,left:At,top:Pn})}}),R});c.useEffect(()=>{It()},[w.map(R=>R.key).join("_")]);const qe=gn(()=>{const R=$e($),z=$e(L),A=$e(q);P([R[0]-z[0]-A[0],R[1]-z[1]-A[1]]);const Z=$e(U);Y(Z);const se=$e(B);O(se);const he=$e(W);j([he[0]-Z[0],he[1]-Z[1]]),It()}),Rn=w.slice(0,fe),kn=w.slice(pe+1),Ht=[...Rn,...kn],_t=G.get(a),{style:zn}=ur({activeTabOffset:_t,horizontal:E,indicator:v,rtl:s});c.useEffect(()=>{je()},[a,ie,ae,Ut(_t),Ut(G),E]),c.useEffect(()=>{qe()},[s]);const Dt=!!Ht.length,Ne=`${b}-nav-wrap`;let tt,nt,Wt,Ot;return E?s?(nt=H>0,tt=H!==ae):(tt=H<0,nt=H!==ie):(Wt=I<0,Ot=I!==ie),c.createElement(rt,{onResize:qe},c.createElement("div",{ref:_n(e,$),role:"tablist","aria-orientation":E?"horizontal":"vertical",className:_(`${b}-nav`,r,x?.header),style:{...u?.header,...t},onKeyDown:()=>{ke()}},c.createElement(Jt,{ref:L,position:"left",extra:l,prefixCls:b}),c.createElement(rt,{onResize:qe},c.createElement("div",{className:_(Ne,{[`${Ne}-ping-left`]:tt,[`${Ne}-ping-right`]:nt,[`${Ne}-ping-top`]:Wt,[`${Ne}-ping-bottom`]:Ot}),ref:N},c.createElement(rt,{onResize:qe},c.createElement("div",{ref:W,className:`${b}-nav-list`,style:{transform:`translate(${H}px, ${I}px)`,transition:Se?"none":void 0}},Nt,c.createElement(bn,{ref:U,prefixCls:b,locale:m,editable:d,style:{...Nt.length===0?void 0:Ge,visibility:Dt?"hidden":null}}),c.createElement("div",{className:_(`${b}-ink-bar`,x?.indicator,{[`${b}-ink-bar-animated`]:i.inkBar}),style:{...zn,...u?.indicator}}))))),c.createElement(yr,mt({},n,{removeAriaLabel:m?.removeAriaLabel,ref:B,prefixCls:b,tabs:Ht,className:!Dt&&ye,popupStyle:u?.popup,tabMoving:!!Se})),c.createElement(Jt,{ref:q,position:"right",extra:l,prefixCls:b})))}),wr=({renderTabBar:n,...e})=>n?n(e,Qt):c.createElement(Qt,e),$r=c.forwardRef((n,e)=>{const{prefixCls:r,className:t,style:o,id:i,active:a,tabKey:s,children:l}=n,d=c.Children.count(l)>0;return c.createElement("div",{id:i&&`${i}-panel-${s}`,role:"tabpanel",tabIndex:a&&d?0:-1,"aria-labelledby":i&&`${i}-tab-${s}`,"aria-hidden":!a,style:o,className:_(r,a&&`${r}-active`,t),ref:e},l)});function Ke(){return Ke=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},Ke.apply(this,arguments)}const Cr=n=>{const{id:e,activeKey:r,animated:t,tabPosition:o,destroyOnHidden:i,contentStyle:a,contentClassName:s}=n,{prefixCls:l,tabs:d}=c.useContext(Et),m=t.tabPane,p=`${l}-tabpane`;return c.createElement("div",{className:_(`${l}-content-holder`)},c.createElement("div",{className:_(`${l}-content`,`${l}-content-${o}`,{[`${l}-content-animated`]:m})},d.map(h=>{const{key:y,forceRender:S,style:f,className:v,destroyOnHidden:x,...u}=h,b=y===r;return c.createElement(Dn,Ke({key:y,visible:b,forceRender:S,removeOnLeave:!!(i??x),leavedClassName:`${p}-hidden`},t.tabPaneMotion),({style:w,className:$},L)=>c.createElement($r,Ke({},u,{prefixCls:p,id:e,tabKey:y,animated:m,active:b,style:{...a,...f,...w},className:_(s,v,$),ref:L})))})))};function Tr(n={inkBar:!0,tabPane:!1}){let e;return n===!1?e={inkBar:!1,tabPane:!1}:n===!0?e={inkBar:!0,tabPane:!1}:e={inkBar:!0,...typeof n=="object"?n:{}},e.tabPaneMotion&&e.tabPane===void 0&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}function He(){return He=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},He.apply(this,arguments)}let Zt=0;const Er=c.forwardRef((n,e)=>{const{id:r,prefixCls:t="rc-tabs",className:o,items:i,direction:a,activeKey:s,defaultActiveKey:l,editable:d,animated:m,tabPosition:p="top",tabBarGutter:h,tabBarStyle:y,tabBarExtraContent:S,locale:f,more:v,destroyOnHidden:x,renderTabBar:u,onChange:b,onTabClick:w,onTabScroll:$,getPopupContainer:L,popupClassName:q,indicator:N,classNames:W,styles:B,...U}=n,E=c.useMemo(()=>(i||[]).filter(G=>G&&typeof G=="object"&&"key"in G),[i]),H=a==="rtl",K=Tr(m),[I,ee]=c.useState(!1);c.useEffect(()=>{ee(dr())},[]);const[X,P]=jt(l??E[0]?.key,s),[D,j]=c.useState(()=>E.findIndex(G=>G.key===X));c.useEffect(()=>{let G=E.findIndex(Q=>Q.key===X);G===-1&&(G=Math.max(0,Math.min(D,E.length-1)),P(E[G]?.key)),j(G)},[E.map(G=>G.key).join("_"),X,D]);const[F,Y]=jt(null,r);c.useEffect(()=>{r||(Y(`rc-tabs-${Zt}`),Zt+=1)},[]);function ne(G,Q){w?.(G,Q);const te=G!==X;P(G),te&&b?.(G)}const O={id:F,activeKey:X,animated:K,tabPosition:p,rtl:H,mobile:I},J={...O,editable:d,locale:f,more:v,tabBarGutter:h,onTabClick:ne,onTabScroll:$,extra:S,style:y,getPopupContainer:L,popupClassName:_(q,W?.popup),indicator:N,styles:B,classNames:W},V=c.useMemo(()=>({tabs:E,prefixCls:t}),[E,t]);return c.createElement(Et.Provider,{value:V},c.createElement("div",He({ref:e,id:r,className:_(t,`${t}-${p}`,{[`${t}-mobile`]:I,[`${t}-editable`]:d,[`${t}-rtl`]:H},o)},U),c.createElement(wr,He({},J,{renderTabBar:u})),c.createElement(Cr,He({destroyOnHidden:x},O,{contentStyle:B?.content,contentClassName:W?.content,animated:K}))))}),Lr={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Mr(n,e={inkBar:!0,tabPane:!1}){let r;return e===!1?r={inkBar:!1,tabPane:!1}:e===!0?r={inkBar:!0,tabPane:!0}:r={inkBar:!0,...typeof e=="object"?e:{}},r.tabPane&&(r.tabPaneMotion={...Lr,motionName:Wn(n,"switch")}),r}function Rr(n){return n.filter(e=>e)}function kr(n,e){if(n)return n.map(t=>({...t,destroyOnHidden:t.destroyOnHidden??t.destroyInactiveTabPane}));const r=St(e).map(t=>{if(c.isValidElement(t)){const{key:o,props:i}=t,{tab:a,...s}=i||{};return{key:String(o),...s,label:a}}return null});return Rr(r)}const zr=n=>{const{componentCls:e,motionDurationSlow:r}=n;return[{[e]:{[`${e}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${r}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${r}`}}}}},[Gt(n,"slide-up"),Gt(n,"slide-down")]]},Pr=n=>{const{componentCls:e,tabsCardPadding:r,cardBg:t,cardGutter:o,colorBorderSecondary:i,itemSelectedColor:a}=n;return{[`${e}-card`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab`]:{margin:0,padding:r,background:t,border:`${C(n.lineWidth)} ${n.lineType} ${i}`,transition:`all ${n.motionDurationSlow} ${n.motionEaseInOut}`},[`${e}-tab-active`]:{color:a,background:n.colorBgContainer},[`${e}-tab-focus:has(${e}-tab-btn:focus-visible)`]:un(n,-3),[`& ${e}-tab${e}-tab-focus ${e}-tab-btn:focus-visible`]:{outline:"none"},[`${e}-ink-bar`]:{visibility:"hidden"}},[`&${e}-top, &${e}-bottom`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab + ${e}-tab`]:{marginLeft:{_skip_check_:!0,value:C(o)}}}},[`&${e}-top`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab`]:{borderRadius:`${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)} 0 0`},[`${e}-tab-active`]:{borderBottomColor:n.colorBgContainer}}},[`&${e}-bottom`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab`]:{borderRadius:`0 0 ${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)}`},[`${e}-tab-active`]:{borderTopColor:n.colorBgContainer}}},[`&${e}-left, &${e}-right`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab + ${e}-tab`]:{marginTop:C(o)}}},[`&${e}-left`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab`]:{borderRadius:{_skip_check_:!0,value:`${C(n.borderRadiusLG)} 0 0 ${C(n.borderRadiusLG)}`}},[`${e}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:n.colorBgContainer}}}},[`&${e}-right`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)} 0`}},[`${e}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:n.colorBgContainer}}}}}}},Nr=n=>{const{componentCls:e,itemHoverColor:r,dropdownEdgeChildVerticalPadding:t}=n;return{[`${e}-dropdown`]:{...Ue(n),position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:n.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${e}-dropdown-menu`]:{maxHeight:n.tabsDropdownHeight,margin:0,padding:`${C(t)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:n.colorBgContainer,backgroundClip:"padding-box",borderRadius:n.borderRadiusLG,outline:"none",boxShadow:n.boxShadowSecondary,"&-item":{...wt,display:"flex",alignItems:"center",minWidth:n.tabsDropdownWidth,margin:0,padding:`${C(n.paddingXXS)} ${C(n.paddingSM)}`,color:n.colorText,fontWeight:"normal",fontSize:n.fontSize,lineHeight:n.lineHeight,cursor:"pointer",transition:`all ${n.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:n.marginSM},color:n.colorIcon,fontSize:n.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:n.controlItemBgHover},"&-disabled":{"&, &:hover":{color:n.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}}}}}},Ir=n=>{const{componentCls:e,margin:r,colorBorderSecondary:t,horizontalMargin:o,verticalItemPadding:i,verticalItemMargin:a,calc:s}=n;return{[`${e}-top, ${e}-bottom`]:{flexDirection:"column",[`> ${e}-nav, > div > ${e}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${C(n.lineWidth)} ${n.lineType} ${t}`,content:"''"},[`${e}-ink-bar`]:{height:n.lineWidthBold,"&-animated":{transition:`width ${n.motionDurationSlow}, left ${n.motionDurationSlow},
            right ${n.motionDurationSlow}`}},[`${e}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:n.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:n.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:n.boxShadowTabsOverflowRight},[`&${e}-nav-wrap-ping-left::before`]:{opacity:1},[`&${e}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${e}-top`]:{[`> ${e}-nav,
        > div > ${e}-nav`]:{"&::before":{bottom:0},[`${e}-ink-bar`]:{bottom:0}}},[`${e}-bottom`]:{[`> ${e}-nav, > div > ${e}-nav`]:{order:1,marginTop:r,marginBottom:0,"&::before":{top:0},[`${e}-ink-bar`]:{top:0}},[`> ${e}-content-holder, > div > ${e}-content-holder`]:{order:0}},[`${e}-left, ${e}-right`]:{[`> ${e}-nav, > div > ${e}-nav`]:{flexDirection:"column",minWidth:s(n.controlHeight).mul(1.25).equal(),[`${e}-tab`]:{padding:i,textAlign:"center"},[`${e}-tab + ${e}-tab`]:{margin:a},[`${e}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:n.controlHeight},"&::before":{top:0,boxShadow:n.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:n.boxShadowTabsOverflowBottom},[`&${e}-nav-wrap-ping-top::before`]:{opacity:1},[`&${e}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${e}-ink-bar`]:{width:n.lineWidthBold,"&-animated":{transition:`height ${n.motionDurationSlow}, top ${n.motionDurationSlow}`}},[`${e}-nav-list, ${e}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${e}-left`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${e}-content-holder, > div > ${e}-content-holder`]:{marginLeft:{_skip_check_:!0,value:C(s(n.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${C(n.lineWidth)} ${n.lineType} ${n.colorBorder}`},[`> ${e}-content > ${e}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:n.paddingLG}}}},[`${e}-right`]:{[`> ${e}-nav, > div > ${e}-nav`]:{order:1,[`${e}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${e}-content-holder, > div > ${e}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:s(n.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${C(n.lineWidth)} ${n.lineType} ${n.colorBorder}`},[`> ${e}-content > ${e}-tabpane`]:{paddingRight:{_skip_check_:!0,value:n.paddingLG}}}}}},Hr=n=>{const{componentCls:e,cardPaddingSM:r,cardPaddingLG:t,cardHeightSM:o,cardHeightLG:i,horizontalItemPaddingSM:a,horizontalItemPaddingLG:s}=n;return{[e]:{"&-small":{[`> ${e}-nav`]:{[`${e}-tab`]:{padding:a,fontSize:n.titleFontSizeSM}}},"&-large":{[`> ${e}-nav`]:{[`${e}-tab`]:{padding:s,fontSize:n.titleFontSizeLG,lineHeight:n.lineHeightLG}}}},[`${e}-card`]:{[`&${e}-small`]:{[`> ${e}-nav`]:{[`${e}-tab`]:{padding:r},[`${e}-nav-add`]:{minWidth:o,minHeight:o}},[`&${e}-bottom`]:{[`> ${e}-nav ${e}-tab`]:{borderRadius:`0 0 ${C(n.borderRadius)} ${C(n.borderRadius)}`}},[`&${e}-top`]:{[`> ${e}-nav ${e}-tab`]:{borderRadius:`${C(n.borderRadius)} ${C(n.borderRadius)} 0 0`}},[`&${e}-right`]:{[`> ${e}-nav ${e}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${C(n.borderRadius)} ${C(n.borderRadius)} 0`}}},[`&${e}-left`]:{[`> ${e}-nav ${e}-tab`]:{borderRadius:{_skip_check_:!0,value:`${C(n.borderRadius)} 0 0 ${C(n.borderRadius)}`}}}},[`&${e}-large`]:{[`> ${e}-nav`]:{[`${e}-tab`]:{padding:t},[`${e}-nav-add`]:{minWidth:i,minHeight:i}}}}}},_r=n=>{const{componentCls:e,itemActiveColor:r,itemHoverColor:t,iconCls:o,tabsHorizontalItemMargin:i,horizontalItemPadding:a,itemSelectedColor:s,itemColor:l}=n,d=`${e}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:a,fontSize:n.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:l,"&-btn, &-remove":{"&:focus:not(:focus-visible), &:active":{color:r}},"&-btn":{outline:"none",transition:`all ${n.motionDurationSlow}`,[`${d}-icon:not(:last-child)`]:{marginInlineEnd:n.marginSM}},"&-remove":{flex:"none",lineHeight:1,marginRight:{_skip_check_:!0,value:n.calc(n.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:n.marginXS},color:n.colorIcon,fontSize:n.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${n.motionDurationSlow}`,"&:hover":{color:n.colorTextHeading},...ut(n)},"&:hover":{color:t},[`&${d}-active ${d}-btn`]:{color:s},[`&${d}-focus ${d}-btn:focus-visible`]:un(n),[`&${d}-disabled`]:{color:n.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${e}-remove`]:{"&:focus, &:active":{color:n.colorTextDisabled}},[`& ${d}-remove ${o}`]:{margin:0,verticalAlign:"middle"},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:n.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:i}}}},Dr=n=>{const{componentCls:e,tabsHorizontalItemMarginRTL:r,iconCls:t,cardGutter:o,calc:i}=n;return{[`${e}-rtl`]:{direction:"rtl",[`${e}-nav`]:{[`${e}-tab`]:{margin:{_skip_check_:!0,value:r},[`${e}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[t]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:C(n.marginSM)}},[`${e}-tab-remove`]:{marginRight:{_skip_check_:!0,value:C(n.marginXS)},marginLeft:{_skip_check_:!0,value:C(i(n.marginXXS).mul(-1).equal())},[t]:{margin:0}}}},[`&${e}-left`]:{[`> ${e}-nav`]:{order:1},[`> ${e}-content-holder`]:{order:0}},[`&${e}-right`]:{[`> ${e}-nav`]:{order:0},[`> ${e}-content-holder`]:{order:1}},[`&${e}-card${e}-top, &${e}-card${e}-bottom`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-tab + ${e}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${e}-dropdown-rtl`]:{direction:"rtl"},[`${e}-menu-item`]:{[`${e}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Wr=n=>{const{componentCls:e,tabsCardPadding:r,cardHeight:t,cardGutter:o,itemHoverColor:i,itemActiveColor:a,colorBorderSecondary:s}=n;return{[e]:{...Ue(n),display:"flex",[`> ${e}-nav, > div > ${e}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${e}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${n.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${e}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${n.motionDurationSlow}`},[`${e}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${e}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${e}-nav-more`]:{position:"relative",padding:r,background:"transparent",border:0,color:n.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:n.calc(n.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${e}-nav-add`]:{minWidth:t,minHeight:t,marginLeft:{_skip_check_:!0,value:o},background:"transparent",border:`${C(n.lineWidth)} ${n.lineType} ${s}`,borderRadius:`${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:n.colorText,transition:`all ${n.motionDurationSlow} ${n.motionEaseInOut}`,"&:hover":{color:i},"&:active, &:focus:not(:focus-visible)":{color:a},...ut(n,-3)}},[`${e}-extra-content`]:{flex:"none"},[`${e}-ink-bar`]:{position:"absolute",background:n.inkBarColor,pointerEvents:"none"},..._r(n),[`${e}-content`]:{position:"relative",width:"100%"},[`${e}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${e}-tabpane`]:{...ut(n),"&-hidden":{display:"none"}}},[`${e}-centered`]:{[`> ${e}-nav, > div > ${e}-nav`]:{[`${e}-nav-wrap`]:{[`&:not([class*='${e}-nav-wrap-ping']) > ${e}-nav-list`]:{margin:"auto"}}}}}},Or=n=>{const{cardHeight:e,cardHeightSM:r,cardHeightLG:t,controlHeight:o,controlHeightLG:i}=n,a=e||i,s=r||o,l=t||i+8;return{zIndexPopup:n.zIndexPopupBase+50,cardBg:n.colorFillAlter,cardHeight:a,cardHeightSM:s,cardHeightLG:l,cardPadding:`${(a-n.fontHeight)/2-n.lineWidth}px ${n.padding}px`,cardPaddingSM:`${(s-n.fontHeight)/2-n.lineWidth}px ${n.paddingXS}px`,cardPaddingLG:`${(l-n.fontHeightLG)/2-n.lineWidth}px ${n.padding}px`,titleFontSize:n.fontSize,titleFontSizeLG:n.fontSizeLG,titleFontSizeSM:n.fontSize,inkBarColor:n.colorPrimary,horizontalMargin:`0 0 ${n.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${n.paddingSM}px 0`,horizontalItemPaddingSM:`${n.paddingXS}px 0`,horizontalItemPaddingLG:`${n.padding}px 0`,verticalItemPadding:`${n.paddingXS}px ${n.paddingLG}px`,verticalItemMargin:`${n.margin}px 0 0 0`,itemColor:n.colorText,itemSelectedColor:n.colorPrimary,itemHoverColor:n.colorPrimaryHover,itemActiveColor:n.colorPrimaryActive,cardGutter:n.marginXXS/2}},Ar=xt("Tabs",n=>{const e=dn(n,{tabsCardPadding:n.cardPadding,dropdownEdgeChildVerticalPadding:n.paddingXXS,tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${C(n.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${C(n.horizontalItemGutter)}`});return[Hr(e),Dr(e),Ir(e),Nr(e),Pr(e),Wr(e),zr(e)]},Or),Br=()=>null,jr=c.forwardRef((n,e)=>{const{type:r,className:t,rootClassName:o,size:i,onEdit:a,hideAdd:s,centered:l,addIcon:d,removeIcon:m,moreIcon:p,more:h,popupClassName:y,children:S,items:f,animated:v,style:x,indicatorSize:u,indicator:b,classNames:w,styles:$,destroyInactiveTabPane:L,destroyOnHidden:q,tabPlacement:N,tabPosition:W,...B}=n,{prefixCls:U}=B,{getPrefixCls:E,direction:H,getPopupContainer:K,className:I,style:ee,classNames:X,styles:P}=Je("tabs"),{tabs:D}=c.useContext(fn),j=E("tabs",U),F=An(j),[Y,ne]=Ar(j,F),O=c.useRef(null);c.useImperativeHandle(e,()=>({nativeElement:O.current}));let J;r==="editable-card"&&(J={onEdit:(ie,{key:ae,event:be})=>{a?.(ie==="add"?be:ae,ie)},removeIcon:m??D?.removeIcon??c.createElement(On,null),addIcon:(d??D?.addIcon)||c.createElement(or,null),showAdd:s!==!0});const V=E(),G=pn(i),Q=kr(f,S),te=Mr(j,v),ue={align:b?.align??D?.indicator?.align,size:b?.size??u??D?.indicator?.size??D?.indicatorSize},ge=c.useMemo(()=>{const ie=N??W??void 0,ae=H==="rtl";switch(ie){case"start":return ae?"right":"left";case"end":return ae?"left":"right";default:return ie}},[N,W,H]),ve={...n,size:G,tabPlacement:ge,items:Q},[re,ye]=$t([X,w],[P,$],{props:ve},{popup:{_default:"root"}});return c.createElement(Er,{ref:O,direction:H,getPopupContainer:K,...B,items:Q,className:_({[`${j}-${G}`]:G,[`${j}-card`]:["card","editable-card"].includes(r),[`${j}-editable-card`]:r==="editable-card",[`${j}-centered`]:l},I,t,o,re.root,Y,ne,F),classNames:{...re,popup:_(y,Y,ne,F,re.popup?.root)},styles:ye,style:{...ye.root,...ee,...x},editable:J,more:{icon:D?.more?.icon??D?.moreIcon??p??c.createElement(tr,null),transitionName:`${V}-slide-up`,...h},prefixCls:j,animated:te,indicator:ue,destroyOnHidden:q??L,tabPosition:ge})}),yn=jr;yn.TabPane=Br;const Sn=({prefixCls:n,className:e,hoverable:r=!0,...t})=>{const{getPrefixCls:o}=c.useContext(fn),i=o("card",n),a=_(`${i}-grid`,e,{[`${i}-grid-hoverable`]:r});return c.createElement("div",{...t,className:a})},Gr=n=>{const{antCls:e,componentCls:r,headerHeight:t,headerPadding:o,tabsMarginBottom:i}=n;return{display:"flex",justifyContent:"center",flexDirection:"column",minHeight:t,marginBottom:-1,padding:`0 ${C(o)}`,color:n.colorTextHeading,fontWeight:n.fontWeightStrong,fontSize:n.headerFontSize,background:n.headerBg,borderBottom:`${C(n.lineWidth)} ${n.lineType} ${n.colorBorderSecondary}`,borderRadius:`${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)} 0 0`,...Ct(),"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":{display:"inline-block",flex:1,...wt,[`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}},[`${e}-tabs-top`]:{clear:"both",marginBottom:i,color:n.colorText,fontWeight:"normal",fontSize:n.fontSize,"&-bar":{borderBottom:`${C(n.lineWidth)} ${n.lineType} ${n.colorBorderSecondary}`}}}},qr=n=>{const{cardPaddingBase:e,colorBorderSecondary:r,cardShadow:t,lineWidth:o}=n;return{width:"33.33%",padding:e,border:0,borderRadius:0,boxShadow:`
      ${C(o)} 0 0 0 ${r},
      0 ${C(o)} 0 0 ${r},
      ${C(o)} ${C(o)} 0 0 ${r},
      ${C(o)} 0 0 0 ${r} inset,
      0 ${C(o)} 0 0 ${r} inset;
    `,transition:`all ${n.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:t}}},Xr=n=>{const{componentCls:e,iconCls:r,actionsLiMargin:t,cardActionsIconSize:o,colorBorderSecondary:i,actionsBg:a}=n;return{margin:0,padding:0,listStyle:"none",background:a,borderTop:`${C(n.lineWidth)} ${n.lineType} ${i}`,display:"flex",borderRadius:`0 0 ${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)}`,...Ct(),"& > li":{margin:t,color:n.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:n.calc(n.cardActionsIconSize).mul(2).equal(),fontSize:n.fontSize,lineHeight:n.lineHeight,cursor:"pointer","&:hover":{color:n.colorPrimary,transition:`color ${n.motionDurationMid}`},[`a:not(${e}-btn), > ${r}`]:{display:"inline-block",width:"100%",color:n.colorIcon,lineHeight:C(n.fontHeight),transition:`color ${n.motionDurationMid}`,"&:hover":{color:n.colorPrimary}},[`> ${r}`]:{fontSize:o,lineHeight:C(n.calc(o).mul(n.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${C(n.lineWidth)} ${n.lineType} ${i}`}}}},Fr=n=>({margin:`${C(n.calc(n.marginXXS).mul(-1).equal())} 0`,display:"flex",...Ct(),"&-avatar":{paddingInlineEnd:n.padding},"&-section":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:n.marginXS}},"&-title":{color:n.colorTextHeading,fontWeight:n.fontWeightStrong,fontSize:n.fontSizeLG,...wt},"&-description":{color:n.colorTextDescription}}),Yr=n=>{const{componentCls:e,colorFillAlter:r,headerPadding:t,bodyPadding:o}=n;return{[`${e}-head`]:{padding:`0 ${C(t)}`,background:r,"&-title":{fontSize:n.fontSize}},[`${e}-body`]:{padding:`${C(n.padding)} ${C(o)}`}}},Kr=n=>{const{componentCls:e}=n;return{overflow:"hidden",[`${e}-body`]:{userSelect:"none"}}},Vr=n=>{const{componentCls:e,cardShadow:r,cardHeadPadding:t,colorBorderSecondary:o,boxShadowTertiary:i,bodyPadding:a,extraColor:s}=n;return{[e]:{...Ue(n),position:"relative",background:n.colorBgContainer,borderRadius:n.borderRadiusLG,[`&:not(${e}-bordered)`]:{boxShadow:i},[`${e}-head`]:Gr(n),[`${e}-extra`]:{marginInlineStart:"auto",color:s,fontWeight:"normal",fontSize:n.fontSize},[`${e}-body`]:{padding:a,borderRadius:`0 0 ${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)}`,"&:first-child":{borderStartStartRadius:n.borderRadiusLG,borderStartEndRadius:n.borderRadiusLG},"&:not(:last-child)":{borderEndStartRadius:0,borderEndEndRadius:0}},[`${e}-grid`]:qr(n),[`${e}-cover`]:{"> *":{display:"block",width:"100%",borderRadius:`${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)} 0 0`}},[`${e}-actions`]:Xr(n),[`${e}-meta`]:Fr(n)},[`${e}-bordered`]:{border:`${C(n.lineWidth)} ${n.lineType} ${o}`,[`${e}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${e}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${n.motionDurationMid}, border-color ${n.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:r}},[`${e}-contain-grid`]:{borderRadius:`${C(n.borderRadiusLG)} ${C(n.borderRadiusLG)} 0 0 `,[`&:not(:has(> ${e}-head))`]:{borderRadius:0},[`${e}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${e}-loading) ${e}-body`]:{marginBlockStart:n.calc(n.lineWidth).mul(-1).equal(),marginInlineStart:n.calc(n.lineWidth).mul(-1).equal(),padding:0}},[`${e}-contain-tabs`]:{[`> div${e}-head`]:{minHeight:0,[`${e}-head-title, ${e}-extra`]:{paddingTop:t}}},[`${e}-type-inner`]:Yr(n),[`${e}-loading`]:Kr(n),[`${e}-rtl`]:{direction:"rtl"}}},Ur=n=>{const{componentCls:e,bodyPaddingSM:r,headerPaddingSM:t,headerHeightSM:o,headerFontSizeSM:i}=n;return{[`${e}-small`]:{[`> ${e}-head`]:{minHeight:o,padding:`0 ${C(t)}`,fontSize:i,[`> ${e}-head-wrapper`]:{[`> ${e}-extra`]:{fontSize:n.fontSize}}},[`> ${e}-body`]:{padding:r}},[`${e}-small${e}-contain-tabs`]:{[`> ${e}-head`]:{[`${e}-head-title, ${e}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},Jr=n=>({headerBg:"transparent",headerFontSize:n.fontSizeLG,headerFontSizeSM:n.fontSize,headerHeight:n.fontSizeLG*n.lineHeightLG+n.padding*2,headerHeightSM:n.fontSize*n.lineHeight+n.paddingXS*2,actionsBg:n.colorBgContainer,actionsLiMargin:`${n.paddingSM}px 0`,tabsMarginBottom:-n.padding-n.lineWidth,extraColor:n.colorText,bodyPaddingSM:12,headerPaddingSM:12,bodyPadding:n.bodyPadding??n.paddingLG,headerPadding:n.headerPadding??n.paddingLG}),Qr=xt("Card",n=>{const e=dn(n,{cardShadow:n.boxShadowCard,cardHeadPadding:n.padding,cardPaddingBase:n.paddingLG,cardActionsIconSize:n.fontSize});return[Vr(e),Ur(e)]},Jr),Zr=n=>{const{actionClasses:e,actions:r=[],actionStyle:t}=n;return c.createElement("ul",{className:e,style:t},r.map((o,i)=>{const a=`action-${i}`;return c.createElement("li",{style:{width:`${100/r.length}%`},key:a},c.createElement("span",null,o))}))},ei=c.forwardRef((n,e)=>{const{prefixCls:r,className:t,rootClassName:o,style:i,extra:a,headStyle:s={},bodyStyle:l={},title:d,loading:m,bordered:p,variant:h,size:y,type:S,cover:f,actions:v,tabList:x,children:u,activeTabKey:b,defaultActiveTabKey:w,tabBarExtraContent:$,hoverable:L,tabProps:q={},classNames:N,styles:W,...B}=n,{getPrefixCls:U,direction:E,className:H,style:K,classNames:I,styles:ee}=Je("card"),[X]=Jn("card",h,p),P=pn(y),D={...n,size:P,variant:X,loading:m},[j,F]=$t([I,N],[ee,W],{props:D}),Y=fe=>{n.onTabChange?.(fe)},ne=c.useMemo(()=>St(u).some(pe=>c.isValidElement(pe)&&pe.type===Sn),[u]),O=U("card",r),[J,V]=Qr(O),G=c.createElement(jn,{loading:!0,active:!0,paragraph:{rows:4},title:!1},u),Q=b!==void 0,te={...q,[Q?"activeKey":"defaultActiveKey"]:Q?b:w,tabBarExtraContent:$};let ue;const ge=!P||P==="default"?"large":P,ve=x?c.createElement(yn,{size:ge,...te,className:`${O}-head-tabs`,onChange:Y,items:x.map(({tab:fe,...pe})=>({label:fe,...pe}))}):null;if(d||a||ve){const fe=_(`${O}-head`,j.header),pe=_(`${O}-head-title`,j.title),je=_(`${O}-extra`,j.extra),xe={...s,...F.header};ue=c.createElement("div",{className:fe,style:xe},c.createElement("div",{className:`${O}-head-wrapper`},d&&c.createElement("div",{className:pe,style:F.title},d),a&&c.createElement("div",{className:je,style:F.extra},a)),ve)}const re=_(`${O}-cover`,j.cover),ye=f?c.createElement("div",{className:re,style:F.cover},f):null,ie=_(`${O}-body`,j.body),ae={...l,...F.body},be=c.createElement("div",{className:ie,style:ae},m?G:u),Re=_(`${O}-actions`,j.actions),Se=v?.length?c.createElement(Zr,{actionClasses:Re,actionStyle:F.actions,actions:v}):null,Be=Bn(B,["onTabChange"]),ke=_(O,H,{[`${O}-loading`]:m,[`${O}-bordered`]:X!=="borderless",[`${O}-hoverable`]:L,[`${O}-contain-grid`]:ne,[`${O}-contain-tabs`]:x?.length,[`${O}-${P}`]:P,[`${O}-type-${S}`]:!!S,[`${O}-rtl`]:E==="rtl"},t,o,J,V,j.root),ze={...F.root,...K,...i};return c.createElement("div",{ref:e,...Be,className:ke,style:ze},ue,ye,be,Se)}),ti=n=>{const{prefixCls:e,className:r,avatar:t,title:o,description:i,style:a,classNames:s,styles:l,...d}=n,{getPrefixCls:m,className:p,style:h,classNames:y,styles:S}=Je("cardMeta"),v=`${m("card",e)}-meta`,[x,u]=$t([y,s],[S,l],{props:n}),b=_(v,r,p,x.root),w={...h,...u.root,...a},$=_(`${v}-avatar`,x.avatar),L=_(`${v}-title`,x.title),q=_(`${v}-description`,x.description),N=_(`${v}-section`,x.section),W=t?c.createElement("div",{className:$,style:u.avatar},t):null,B=o?c.createElement("div",{className:L,style:u.title},o):null,U=i?c.createElement("div",{className:q,style:u.description},i):null,E=B||U?c.createElement("div",{className:N,style:u.section},B,U):null;return c.createElement("div",{...d,className:b,style:w},W,E)},Ze=ei;Ze.Grid=Sn;Ze.Meta=ti;var ni={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};function ri(n,e,r){var t=r||{},o=t.noTrailing,i=o===void 0?!1:o,a=t.noLeading,s=a===void 0?!1:a,l=t.debounceMode,d=l===void 0?void 0:l,m,p=!1,h=0;function y(){m&&clearTimeout(m)}function S(v){var x=v||{},u=x.upcomingOnly,b=u===void 0?!1:u;y(),p=!b}function f(){for(var v=arguments.length,x=new Array(v),u=0;u<v;u++)x[u]=arguments[u];var b=this,w=Date.now()-h;if(p)return;function $(){h=Date.now(),e.apply(b,x)}function L(){m=void 0}!s&&d&&!m&&$(),y(),d===void 0&&w>n?s?(h=Date.now(),i||(m=setTimeout(d?L:$,n))):$():i!==!0&&(m=setTimeout(d?L:$,d===void 0?n-w:n))}return f.cancel=S,f}function ii(n,e,r){var t={},o=t.atBegin,i=o===void 0?!1:o;return ri(n,e,{debounceMode:i!==!1})}var gt={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return M.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return M.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};function vt(n,e,r){return Math.max(e,Math.min(n,r))}var Ce=function(e){var r=["onTouchStart","onTouchMove","onWheel"];r.includes(e._reactName)||e.preventDefault()},Ve=function(e){for(var r=[],t=xn(e),o=wn(e),i=t;i<o;i++)e.lazyLoadedList.indexOf(i)<0&&r.push(i);return r},xn=function(e){return e.currentSlide-ai(e)},wn=function(e){return e.currentSlide+oi(e)},ai=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},oi=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},bt=function(e){return e&&e.offsetWidth||0},Mt=function(e){return e&&e.offsetHeight||0},$n=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t,o,i,a;return t=e.startX-e.curX,o=e.startY-e.curY,i=Math.atan2(o,t),a=Math.round(i*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":r===!0?a>=35&&a<=135?"up":"down":"vertical"},et=function(e){var r=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(r=!1),r},at=function(e,r){var t={};return r.forEach(function(o){return t[o]=e[o]}),t},si=function(e){var r=M.Children.count(e.children),t=e.listRef,o=Math.ceil(bt(t)),i=e.trackRef&&e.trackRef.node,a=Math.ceil(bt(i)),s;if(e.vertical)s=o;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=o/100),s=Math.ceil((o-l)/e.slidesToShow)}var d=t&&Mt(t.querySelector('[data-index="0"]')),m=d*e.slidesToShow,p=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(p=r-1-e.initialSlide);var h=e.lazyLoadedList||[],y=Ve(g(g({},e),{},{currentSlide:p,lazyLoadedList:h}));h=h.concat(y);var S={slideCount:r,slideWidth:s,listWidth:o,trackWidth:a,currentSlide:p,slideHeight:d,listHeight:m,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(S.autoplaying="playing"),S},li=function(e){var r=e.waitForAnimate,t=e.animating,o=e.fade,i=e.infinite,a=e.index,s=e.slideCount,l=e.lazyLoad,d=e.currentSlide,m=e.centerMode,p=e.slidesToScroll,h=e.slidesToShow,y=e.useCSS,S=e.lazyLoadedList;if(r&&t)return{};var f=a,v,x,u,b={},w={},$=i?a:vt(a,0,s-1);if(o){if(!i&&(a<0||a>=s))return{};a<0?f=a+s:a>=s&&(f=a-s),l&&S.indexOf(f)<0&&(S=S.concat(f)),b={animating:!0,currentSlide:f,lazyLoadedList:S,targetSlide:f},w={animating:!1,targetSlide:f}}else v=f,f<0?(v=f+s,i?s%p!==0&&(v=s-s%p):v=0):!et(e)&&f>d?f=v=d:m&&f>=s?(f=i?s:s-1,v=i?0:s-1):f>=s&&(v=f-s,i?s%p!==0&&(v=0):v=s-h),!i&&f+h>=s&&(v=s-h),x=We(g(g({},e),{},{slideIndex:f})),u=We(g(g({},e),{},{slideIndex:v})),i||(x===u&&(f=v),x=u),l&&(S=S.concat(Ve(g(g({},e),{},{currentSlide:f})))),y?(b={animating:!0,currentSlide:v,trackStyle:Cn(g(g({},e),{},{left:x})),lazyLoadedList:S,targetSlide:$},w={animating:!1,currentSlide:v,trackStyle:De(g(g({},e),{},{left:u})),swipeLeft:null,targetSlide:$}):b={currentSlide:v,trackStyle:De(g(g({},e),{},{left:u})),lazyLoadedList:S,targetSlide:$};return{state:b,nextState:w}},ci=function(e,r){var t,o,i,a,s,l=e.slidesToScroll,d=e.slidesToShow,m=e.slideCount,p=e.currentSlide,h=e.targetSlide,y=e.lazyLoad,S=e.infinite;if(a=m%l!==0,t=a?0:(m-p)%l,r.message==="previous")i=t===0?l:d-t,s=p-i,y&&!S&&(o=p-i,s=o===-1?m-1:o),S||(s=h-l);else if(r.message==="next")i=t===0?l:t,s=p+i,y&&!S&&(s=(p+l)%m+t),S||(s=h+l);else if(r.message==="dots")s=r.index*r.slidesToScroll;else if(r.message==="children"){if(s=r.index,S){var f=gi(g(g({},e),{},{targetSlide:s}));s>r.currentSlide&&f==="left"?s=s-m:s<r.currentSlide&&f==="right"&&(s=s+m)}}else r.message==="index"&&(s=Number(r.index));return s},di=function(e,r,t){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!r?"":e.keyCode===37?t?"next":"previous":e.keyCode===39?t?"previous":"next":""},ui=function(e,r,t){return e.target.tagName==="IMG"&&Ce(e),!r||!t&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},fi=function(e,r){var t=r.scrolling,o=r.animating,i=r.vertical,a=r.swipeToSlide,s=r.verticalSwiping,l=r.rtl,d=r.currentSlide,m=r.edgeFriction,p=r.edgeDragged,h=r.onEdge,y=r.swiped,S=r.swiping,f=r.slideCount,v=r.slidesToScroll,x=r.infinite,u=r.touchObject,b=r.swipeEvent,w=r.listHeight,$=r.listWidth;if(!t){if(o)return Ce(e);i&&a&&s&&Ce(e);var L,q={},N=We(r);u.curX=e.touches?e.touches[0].pageX:e.clientX,u.curY=e.touches?e.touches[0].pageY:e.clientY,u.swipeLength=Math.round(Math.sqrt(Math.pow(u.curX-u.startX,2)));var W=Math.round(Math.sqrt(Math.pow(u.curY-u.startY,2)));if(!s&&!S&&W>10)return{scrolling:!0};s&&(u.swipeLength=W);var B=(l?-1:1)*(u.curX>u.startX?1:-1);s&&(B=u.curY>u.startY?1:-1);var U=Math.ceil(f/v),E=$n(r.touchObject,s),H=u.swipeLength;return x||(d===0&&(E==="right"||E==="down")||d+1>=U&&(E==="left"||E==="up")||!et(r)&&(E==="left"||E==="up"))&&(H=u.swipeLength*m,p===!1&&h&&(h(E),q.edgeDragged=!0)),!y&&b&&(b(E),q.swiped=!0),i?L=N+H*(w/$)*B:l?L=N-H*B:L=N+H*B,s&&(L=N+H*B),q=g(g({},q),{},{touchObject:u,swipeLeft:L,trackStyle:De(g(g({},r),{},{left:L}))}),Math.abs(u.curX-u.startX)<Math.abs(u.curY-u.startY)*.8||u.swipeLength>10&&(q.swiping=!0,Ce(e)),q}},pi=function(e,r){var t=r.dragging,o=r.swipe,i=r.touchObject,a=r.listWidth,s=r.touchThreshold,l=r.verticalSwiping,d=r.listHeight,m=r.swipeToSlide,p=r.scrolling,h=r.onSwipe,y=r.targetSlide,S=r.currentSlide,f=r.infinite;if(!t)return o&&Ce(e),{};var v=l?d/s:a/s,x=$n(i,l),u={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p||!i.swipeLength)return u;if(i.swipeLength>v){Ce(e),h&&h(x);var b,w,$=f?S:y;switch(x){case"left":case"up":w=$+tn(r),b=m?en(r,w):w,u.currentDirection=0;break;case"right":case"down":w=$-tn(r),b=m?en(r,w):w,u.currentDirection=1;break;default:b=$}u.triggerSlideHandler=b}else{var L=We(r);u.trackStyle=Cn(g(g({},r),{},{left:L}))}return u},hi=function(e){for(var r=e.infinite?e.slideCount*2:e.slideCount,t=e.infinite?e.slidesToShow*-1:0,o=e.infinite?e.slidesToShow*-1:0,i=[];t<r;)i.push(t),t=o+e.slidesToScroll,o+=Math.min(e.slidesToScroll,e.slidesToShow);return i},en=function(e,r){var t=hi(e),o=0;if(r>t[t.length-1])r=t[t.length-1];else for(var i in t){if(r<t[i]){r=o;break}o=t[i]}return r},tn=function(e){var r=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var t,o=e.listRef,i=o.querySelectorAll&&o.querySelectorAll(".slick-slide")||[];if(Array.from(i).every(function(l){if(e.vertical){if(l.offsetTop+Mt(l)/2>e.swipeLeft*-1)return t=l,!1}else if(l.offsetLeft-r+bt(l)/2>e.swipeLeft*-1)return t=l,!1;return!0}),!t)return 0;var a=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,s=Math.abs(t.dataset.index-a)||1;return s}else return e.slidesToScroll},Rt=function(e,r){return r.reduce(function(t,o){return t&&e.hasOwnProperty(o)},!0)?null:console.error("Keys Missing:",e)},De=function(e){Rt(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r,t;if(!e.vertical)r=mi(e)*e.slideWidth;else{var o=e.unslick?e.slideCount:e.slideCount+2*e.slidesToShow;t=o*e.slideHeight}var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=g(g({},i),{},{WebkitTransform:a,transform:s,msTransform:l})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),r&&(i.width=r),t&&(i.height=t),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},Cn=function(e){Rt(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var r=De(e);return e.useTransform?(r.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,r.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?r.transition="top "+e.speed+"ms "+e.cssEase:r.transition="left "+e.speed+"ms "+e.cssEase,r},We=function(e){if(e.unslick)return 0;Rt(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var r=e.slideIndex,t=e.trackRef,o=e.infinite,i=e.centerMode,a=e.slideCount,s=e.slidesToShow,l=e.slidesToScroll,d=e.slideWidth,m=e.listWidth,p=e.variableWidth,h=e.slideHeight,y=e.fade,S=e.vertical,f=0,v,x,u=0;if(y||e.slideCount===1)return 0;var b=0;if(o?(b=-de(e),a%l!==0&&r+l>a&&(b=-(r>a?s-(r-a):a%l)),i&&(b+=parseInt(s/2))):(a%l!==0&&r+l>a&&(b=s-a%l),i&&(b=parseInt(s/2))),f=b*d,u=b*h,S?v=r*h*-1+u:v=r*d*-1+f,p===!0){var w,$=t&&t.node;if(w=r+de(e),x=$&&$.childNodes[w],v=x?x.offsetLeft*-1:0,i===!0){w=o?r+de(e):r,x=$&&$.children[w],v=0;for(var L=0;L<w;L++)v-=$&&$.children[L]&&$.children[L].offsetWidth;v-=parseInt(e.centerPadding),v+=x&&(m-x.offsetWidth)/2}}return v},de=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},_e=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},mi=function(e){return e.slideCount===1?1:de(e)+e.slideCount+_e(e)},gi=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+vi(e)?"left":"right":e.targetSlide<e.currentSlide-bi(e)?"right":"left"},vi=function(e){var r=e.slidesToShow,t=e.centerMode,o=e.rtl,i=e.centerPadding;if(t){var a=(r-1)/2+1;return parseInt(i)>0&&(a+=1),o&&r%2===0&&(a+=1),a}return o?0:r-1},bi=function(e){var r=e.slidesToShow,t=e.centerMode,o=e.rtl,i=e.centerPadding;if(t){var a=(r-1)/2+1;return parseInt(i)>0&&(a+=1),!o&&r%2===0&&(a+=1),a}return o?r-1:0},nn=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},yi=Object.keys(gt);function Si(n){return yi.reduce(function(e,r){return n.hasOwnProperty(r)&&(e[r]=n[r]),e},{})}function xi(n,e,r){return e=le(e),Oe(n,Ae()?Reflect.construct(e,r||[],le(n).constructor):e.apply(n,r))}var ot=function(e){var r,t,o,i,a;e.rtl?a=e.slideCount-1-e.index:a=e.index,o=a<0||a>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),t=(a-e.currentSlide)%e.slideCount===0,a>e.currentSlide-i-1&&a<=e.currentSlide+i&&(r=!0)):r=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow;var s;e.targetSlide<0?s=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?s=e.targetSlide-e.slideCount:s=e.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":r,"slick-center":t,"slick-cloned":o,"slick-current":l}},wi=function(e){var r={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(r.width=e.slideWidth),e.fade&&(r.position="relative",e.vertical&&e.slideHeight?r.top=-e.index*parseInt(e.slideHeight):r.left=-e.index*parseInt(e.slideWidth),r.opacity=e.currentSlide===e.index?1:0,r.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(r.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),r},st=function(e,r){return e.key+"-"+r},$i=function(e){var r,t=[],o=[],i=[],a=M.Children.count(e.children),s=xn(e),l=wn(e);return M.Children.forEach(e.children,function(d,m){var p,h={message:"children",index:m,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(m)>=0?p=d:p=M.createElement("div",null);var y=wi(g(g({},e),{},{index:m})),S=p.props.className||"",f=ot(g(g({},e),{},{index:m}));if(t.push(M.cloneElement(p,{key:"original"+st(p,m),"data-index":m,className:_(f,S),tabIndex:"-1","aria-hidden":!f["slick-active"],style:g(g({outline:"none"},p.props.style||{}),y),onClick:function(u){p.props&&p.props.onClick&&p.props.onClick(u),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&a>1&&e.fade===!1&&!e.unslick){var v=a-m;v<=de(e)&&(r=-v,r>=s&&(p=d),f=ot(g(g({},e),{},{index:r})),o.push(M.cloneElement(p,{key:"precloned"+st(p,r),"data-index":r,tabIndex:"-1",className:_(f,S),"aria-hidden":!f["slick-active"],style:g(g({},p.props.style||{}),y),onClick:function(u){p.props&&p.props.onClick&&p.props.onClick(u),e.focusOnSelect&&e.focusOnSelect(h)}}))),m<_e(e)&&(r=a+m,r<l&&(p=d),f=ot(g(g({},e),{},{index:r})),i.push(M.cloneElement(p,{key:"postcloned"+st(p,r),"data-index":r,tabIndex:"-1",className:_(f,S),"aria-hidden":!f["slick-active"],style:g(g({},p.props.style||{}),y),onClick:function(u){p.props&&p.props.onClick&&p.props.onClick(u),e.focusOnSelect&&e.focusOnSelect(h)}})))}}),e.rtl?o.concat(t,i).reverse():o.concat(t,i)},Ci=(function(n){function e(){var r;Me(this,e);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return r=xi(this,e,[].concat(o)),k(r,"node",null),k(r,"handleRef",function(a){r.node=a}),r}return Ee(e,n),Le(e,[{key:"render",value:function(){var t=$i(this.props),o=this.props,i=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,l={onMouseEnter:i,onMouseOver:a,onMouseLeave:s};return M.createElement("div",Te({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},l),t)}}])})(M.PureComponent);function Ti(n,e,r){return e=le(e),Oe(n,Ae()?Reflect.construct(e,r||[],le(n).constructor):e.apply(n,r))}var Ei=function(e){var r;return e.infinite?r=Math.ceil(e.slideCount/e.slidesToScroll):r=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,r},Li=(function(n){function e(){return Me(this,e),Ti(this,e,arguments)}return Ee(e,n),Le(e,[{key:"clickHandler",value:function(t,o){o.preventDefault(),this.props.clickHandler(t)}},{key:"render",value:function(){for(var t=this.props,o=t.onMouseEnter,i=t.onMouseOver,a=t.onMouseLeave,s=t.infinite,l=t.slidesToScroll,d=t.slidesToShow,m=t.slideCount,p=t.currentSlide,h=Ei({slideCount:m,slidesToScroll:l,slidesToShow:d,infinite:s}),y={onMouseEnter:o,onMouseOver:i,onMouseLeave:a},S=[],f=0;f<h;f++){var v=(f+1)*l-1,x=s?v:vt(v,0,m-1),u=x-(l-1),b=s?u:vt(u,0,m-1),w=_({"slick-active":s?p>=b&&p<=x:p===b}),$={message:"dots",index:f,slidesToScroll:l,currentSlide:p},L=this.clickHandler.bind(this,$);S=S.concat(M.createElement("li",{key:f,className:w},M.cloneElement(this.props.customPaging(f),{onClick:L})))}return M.cloneElement(this.props.appendDots(S),g({className:this.props.dotsClass},y))}}])})(M.PureComponent);function Tn(n,e,r){return e=le(e),Oe(n,Ae()?Reflect.construct(e,r||[],le(n).constructor):e.apply(n,r))}var Mi=(function(n){function e(){return Me(this,e),Tn(this,e,arguments)}return Ee(e,n),Le(e,[{key:"clickHandler",value:function(t,o){o&&o.preventDefault(),this.props.clickHandler(t,o)}},{key:"render",value:function(){var t={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(t["slick-disabled"]=!0,o=null);var i={key:"0","data-role":"none",className:_(t),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=M.cloneElement(this.props.prevArrow,g(g({},i),a)):s=M.createElement("button",Te({key:"0",type:"button"},i)," ","Previous"),s}}])})(M.PureComponent),Ri=(function(n){function e(){return Me(this,e),Tn(this,e,arguments)}return Ee(e,n),Le(e,[{key:"clickHandler",value:function(t,o){o&&o.preventDefault(),this.props.clickHandler(t,o)}},{key:"render",value:function(){var t={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});et(this.props)||(t["slick-disabled"]=!0,o=null);var i={key:"1","data-role":"none",className:_(t),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=M.cloneElement(this.props.nextArrow,g(g({},i),a)):s=M.createElement("button",Te({key:"1",type:"button"},i)," ","Next"),s}}])})(M.PureComponent),ki=["animating"];function zi(n,e,r){return e=le(e),Oe(n,Ae()?Reflect.construct(e,r||[],le(n).constructor):e.apply(n,r))}var Pi=(function(n){function e(r){var t;Me(this,e),t=zi(this,e,[r]),k(t,"listRefHandler",function(i){return t.list=i}),k(t,"trackRefHandler",function(i){return t.track=i}),k(t,"adaptHeight",function(){if(t.props.adaptiveHeight&&t.list){var i=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=Mt(i)+"px"}}),k(t,"componentDidMount",function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var i=Ve(g(g({},t.props),t.state));i.length>0&&(t.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(i)}}),t.props.onLazyLoad&&t.props.onLazyLoad(i))}var a=g({listRef:t.list,trackRef:t.track},t.props);t.updateState(a,!0,function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("playing")}),t.props.lazyLoad==="progressive"&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),typeof ResizeObserver<"u"&&(t.ro=new ResizeObserver(function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout(function(){return t.onWindowResized()},t.props.speed))):t.onWindowResized()}),t.ro.observe(t.list)),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,s.onblur=t.props.pauseOnFocus?t.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)}),k(t,"componentWillUnmount",function(){var i;t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach(function(a){return clearTimeout(a)}),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),(i=t.ro)===null||i===void 0||i.disconnect()}),k(t,"componentDidUpdate",function(i){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var a=Ve(g(g({},t.props),t.state));a.length>0&&(t.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),t.props.onLazyLoad&&t.props.onLazyLoad(a))}t.adaptHeight();var s=g(g({listRef:t.list,trackRef:t.track},t.props),t.state),l=t.didPropsChange(i);l&&t.updateState(s,l,function(){t.state.currentSlide>=M.Children.count(t.props.children)&&t.changeSlide({message:"index",index:M.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),(i.autoplay!==t.props.autoplay||i.autoplaySpeed!==t.props.autoplaySpeed)&&(!i.autoplay&&t.props.autoplay?t.autoPlay("playing"):t.props.autoplay?t.autoPlay("update"):t.pause("paused"))})}),k(t,"onWindowResized",function(i){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=ii(50,function(){return t.resizeWindow(i)}),t.debouncedResize()}),k(t,"resizeWindow",function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(t.track&&t.track.node);if(a){var s=g(g({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(s,i,function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")}),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}}),k(t,"updateState",function(i,a,s){var l=si(i);i=g(g(g({},i),l),{},{slideIndex:l.currentSlide});var d=We(i);i=g(g({},i),{},{left:d});var m=De(i);(a||M.Children.count(t.props.children)!==M.Children.count(i.children))&&(l.trackStyle=m),t.setState(l,s)}),k(t,"ssrInit",function(){if(t.props.variableWidth){var i=0,a=0,s=[],l=de(g(g(g({},t.props),t.state),{},{slideCount:t.props.children.length})),d=_e(g(g(g({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach(function(L){s.push(L.props.style.width),i+=L.props.style.width});for(var m=0;m<l;m++)a+=s[s.length-1-m],i+=s[s.length-1-m];for(var p=0;p<d;p++)i+=s[p];for(var h=0;h<t.state.currentSlide;h++)a+=s[h];var y={width:i+"px",left:-a+"px"};if(t.props.centerMode){var S="".concat(s[t.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(S,") / 2 ) ")}return{trackStyle:y}}var f=M.Children.count(t.props.children),v=g(g(g({},t.props),t.state),{},{slideCount:f}),x=de(v)+_e(v)+f,u=100/t.props.slidesToShow*x,b=100/x,w=-b*(de(v)+t.state.currentSlide)*u/100;t.props.centerMode&&(w+=(100-b*u/100)/2);var $={width:u+"%",left:w+"%"};return{slideWidth:b+"%",trackStyle:$}}),k(t,"checkImagesLoad",function(){var i=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],a=i.length,s=0;Array.prototype.forEach.call(i,function(l){var d=function(){return++s&&s>=a&&t.onWindowResized()};if(!l.onclick)l.onclick=function(){return l.parentNode.focus()};else{var m=l.onclick;l.onclick=function(p){m(p),l.parentNode.focus()}}l.onload||(t.props.lazyLoad?l.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(l.onload=d,l.onerror=function(){d(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))})}),k(t,"progressiveLazyLoad",function(){for(var i=[],a=g(g({},t.props),t.state),s=t.state.currentSlide;s<t.state.slideCount+_e(a);s++)if(t.state.lazyLoadedList.indexOf(s)<0){i.push(s);break}for(var l=t.state.currentSlide-1;l>=-de(a);l--)if(t.state.lazyLoadedList.indexOf(l)<0){i.push(l);break}i.length>0?(t.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(i)}}),t.props.onLazyLoad&&t.props.onLazyLoad(i)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)}),k(t,"slideHandler",function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=t.props,l=s.asNavFor,d=s.beforeChange,m=s.onLazyLoad,p=s.speed,h=s.afterChange,y=t.state.currentSlide,S=li(g(g(g({index:i},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!a})),f=S.state,v=S.nextState;if(f){d&&d(y,f.currentSlide);var x=f.lazyLoadedList.filter(function(u){return t.state.lazyLoadedList.indexOf(u)<0});m&&x.length>0&&m(x),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),h&&h(y),delete t.animationEndCallback),t.setState(f,function(){l&&t.asNavForIndex!==i&&(t.asNavForIndex=i,l.innerSlider.slideHandler(i)),v&&(t.animationEndCallback=setTimeout(function(){var u=v.animating,b=rr(v,ki);t.setState(b,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:u})},10)),h&&h(f.currentSlide),delete t.animationEndCallback})},p))})}}),k(t,"changeSlide",function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=g(g({},t.props),t.state),l=ci(s,i);if(!(l!==0&&!l)&&(a===!0?t.slideHandler(l,a):t.slideHandler(l),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var d=t.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),k(t,"clickHandler",function(i){t.clickable===!1&&(i.stopPropagation(),i.preventDefault()),t.clickable=!0}),k(t,"keyHandler",function(i){var a=di(i,t.props.accessibility,t.props.rtl);a!==""&&t.changeSlide({message:a})}),k(t,"selectHandler",function(i){t.changeSlide(i)}),k(t,"disableBodyScroll",function(){var i=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=i}),k(t,"enableBodyScroll",function(){window.ontouchmove=null}),k(t,"swipeStart",function(i){t.props.verticalSwiping&&t.disableBodyScroll();var a=ui(i,t.props.swipe,t.props.draggable);a!==""&&t.setState(a)}),k(t,"swipeMove",function(i){var a=fi(i,g(g(g({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));a&&(a.swiping&&(t.clickable=!1),t.setState(a))}),k(t,"swipeEnd",function(i){var a=pi(i,g(g(g({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,t.setState(a),s!==void 0&&(t.slideHandler(s),t.props.verticalSwiping&&t.enableBodyScroll())}}),k(t,"touchEnd",function(i){t.swipeEnd(i),t.clickable=!0}),k(t,"slickPrev",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"previous"})},0))}),k(t,"slickNext",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"next"})},0))}),k(t,"slickGoTo",function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i=Number(i),isNaN(i))return"";t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:i,currentSlide:t.state.currentSlide},a)},0))}),k(t,"play",function(){var i;if(t.props.rtl)i=t.state.currentSlide-t.props.slidesToScroll;else if(et(g(g({},t.props),t.state)))i=t.state.currentSlide+t.props.slidesToScroll;else return!1;t.slideHandler(i)}),k(t,"autoPlay",function(i){t.autoplayTimer&&clearInterval(t.autoplayTimer);var a=t.state.autoplaying;if(i==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(i==="leave"){if(a==="paused"||a==="focused")return}else if(i==="blur"&&(a==="paused"||a==="hovered"))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})}),k(t,"pause",function(i){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var a=t.state.autoplaying;i==="paused"?t.setState({autoplaying:"paused"}):i==="focused"?(a==="hovered"||a==="playing")&&t.setState({autoplaying:"focused"}):a==="playing"&&t.setState({autoplaying:"hovered"})}),k(t,"onDotsOver",function(){return t.props.autoplay&&t.pause("hovered")}),k(t,"onDotsLeave",function(){return t.props.autoplay&&t.state.autoplaying==="hovered"&&t.autoPlay("leave")}),k(t,"onTrackOver",function(){return t.props.autoplay&&t.pause("hovered")}),k(t,"onTrackLeave",function(){return t.props.autoplay&&t.state.autoplaying==="hovered"&&t.autoPlay("leave")}),k(t,"onSlideFocus",function(){return t.props.autoplay&&t.pause("focused")}),k(t,"onSlideBlur",function(){return t.props.autoplay&&t.state.autoplaying==="focused"&&t.autoPlay("blur")}),k(t,"render",function(){var i=_("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),a=g(g({},t.props),t.state),s=at(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),l=t.props.pauseOnHover;s=g(g({},s),{},{onMouseEnter:l?t.onTrackOver:null,onMouseLeave:l?t.onTrackLeave:null,onMouseOver:l?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null});var d;if(t.props.dots===!0&&t.state.slideCount>=t.props.slidesToShow){var m=at(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=t.props.pauseOnDotsHover;m=g(g({},m),{},{clickHandler:t.changeSlide,onMouseEnter:p?t.onDotsLeave:null,onMouseOver:p?t.onDotsOver:null,onMouseLeave:p?t.onDotsLeave:null}),d=M.createElement(Li,m)}var h,y,S=at(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);S.clickHandler=t.changeSlide,t.props.arrows&&(h=M.createElement(Mi,S),y=M.createElement(Ri,S));var f=null;t.props.vertical&&(f={height:t.state.listHeight});var v=null;t.props.vertical===!1?t.props.centerMode===!0&&(v={padding:"0px "+t.props.centerPadding}):t.props.centerMode===!0&&(v={padding:t.props.centerPadding+" 0px"});var x=g(g({},f),v),u=t.props.touchMove,b={className:"slick-list",style:x,onClick:t.clickHandler,onMouseDown:u?t.swipeStart:null,onMouseMove:t.state.dragging&&u?t.swipeMove:null,onMouseUp:u?t.swipeEnd:null,onMouseLeave:t.state.dragging&&u?t.swipeEnd:null,onTouchStart:u?t.swipeStart:null,onTouchMove:t.state.dragging&&u?t.swipeMove:null,onTouchEnd:u?t.touchEnd:null,onTouchCancel:t.state.dragging&&u?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},w={className:i,dir:"ltr",style:t.props.style};return t.props.unslick&&(b={className:"slick-list"},w={className:i,style:t.props.style}),M.createElement("div",w,t.props.unslick?"":h,M.createElement("div",Te({ref:t.listRefHandler},b),M.createElement(Ci,Te({ref:t.trackRefHandler},s),t.props.children)),t.props.unslick?"":y,t.props.unslick?"":d)}),t.list=null,t.track=null,t.state=g(g({},ni),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:M.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var o=t.ssrInit();return t.state=g(g({},t.state),o),t}return Ee(e,n),Le(e,[{key:"didPropsChange",value:function(t){for(var o=!1,i=0,a=Object.keys(this.props);i<a.length;i++){var s=a[i];if(!t.hasOwnProperty(s)){o=!0;break}if(!(Gn(t[s])==="object"||typeof t[s]=="function"||isNaN(t[s]))&&t[s]!==this.props[s]){o=!0;break}}return o||M.Children.count(this.props.children)!==M.Children.count(t.children)}}])})(M.Component),lt,rn;function Ni(){if(rn)return lt;rn=1;var n=function(e){return e.replace(/[A-Z]/g,function(r){return"-"+r.toLowerCase()}).toLowerCase()};return lt=n,lt}var ct,an;function Ii(){if(an)return ct;an=1;var n=Ni(),e=function(o){var i=/[height|width]$/;return i.test(o)},r=function(o){var i="",a=Object.keys(o);return a.forEach(function(s,l){var d=o[s];s=n(s),e(s)&&typeof d=="number"&&(d=d+"px"),d===!0?i+=s:d===!1?i+="not "+s:i+="("+s+": "+d+")",l<a.length-1&&(i+=" and ")}),i},t=function(o){var i="";return typeof o=="string"?o:o instanceof Array?(o.forEach(function(a,s){i+=r(a),s<o.length-1&&(i+=", ")}),i):r(o)};return ct=t,ct}var Hi=Ii();const dt=yt(Hi);function _i(n,e,r){return e=le(e),Oe(n,Ae()?Reflect.construct(e,r||[],le(n).constructor):e.apply(n,r))}var Di=(function(n){function e(r){var t;return Me(this,e),t=_i(this,e,[r]),k(t,"innerSliderRefHandler",function(o){return t.innerSlider=o}),k(t,"slickPrev",function(){return t.innerSlider.slickPrev()}),k(t,"slickNext",function(){return t.innerSlider.slickNext()}),k(t,"slickGoTo",function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return t.innerSlider.slickGoTo(o,i)}),k(t,"slickPause",function(){return t.innerSlider.pause("paused")}),k(t,"slickPlay",function(){return t.innerSlider.autoPlay("play")}),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return Ee(e,n),Le(e,[{key:"media",value:function(t,o){var i=window.matchMedia(t),a=function(l){var d=l.matches;d&&o()};i.addListener(a),this._responsiveMediaHandlers.push({mql:i,query:t,listener:a})}},{key:"componentDidMount",value:function(){var t=this;if(this.props.responsive){var o=this.props.responsive.map(function(a){return a.breakpoint});o.sort(function(a,s){return a-s}),o.forEach(function(a,s){var l;s===0?l=dt({minWidth:0,maxWidth:a}):l=dt({minWidth:o[s-1]+1,maxWidth:a}),nn()&&t.media(l,function(){t.setState({breakpoint:a})})});var i=dt({minWidth:o.slice(-1)[0]});nn()&&this.media(i,function(){t.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(t){t.mql.removeListener(t.listener)})}},{key:"render",value:function(){var t=this,o,i;this.state.breakpoint?(i=this.props.responsive.filter(function(f){return f.breakpoint===t.state.breakpoint}),o=i[0].settings==="unslick"?"unslick":g(g(g({},gt),this.props),i[0].settings)):o=g(g({},gt),this.props),o.centerMode&&(o.slidesToScroll>1,o.slidesToScroll=1),o.fade&&(o.slidesToShow>1,o.slidesToScroll>1,o.slidesToShow=1,o.slidesToScroll=1);var a=M.Children.toArray(this.props.children);a=a.filter(function(f){return typeof f=="string"?!!f.trim():!!f}),o.variableWidth&&(o.rows>1||o.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),o.variableWidth=!1);for(var s=[],l=null,d=0;d<a.length;d+=o.rows*o.slidesPerRow){for(var m=[],p=d;p<d+o.rows*o.slidesPerRow;p+=o.slidesPerRow){for(var h=[],y=p;y<p+o.slidesPerRow&&(o.variableWidth&&a[y].props.style&&(l=a[y].props.style.width),!(y>=a.length));y+=1)h.push(M.cloneElement(a[y],{key:100*d+10*p+y,tabIndex:-1,style:{width:"".concat(100/o.slidesPerRow,"%"),display:"inline-block"}}));m.push(M.createElement("div",{key:10*d+p},h))}o.variableWidth?s.push(M.createElement("div",{key:d,style:{width:l}},m)):s.push(M.createElement("div",{key:d},m))}if(o==="unslick"){var S="regular slider "+(this.props.className||"");return M.createElement("div",{className:S},a)}else s.length<=o.slidesToShow&&(o.unslick=!0);return M.createElement(Pi,Te({style:this.props.style,ref:this.innerSliderRefHandler},Si(o)),s)}}])})(M.Component);const kt="--dot-duration",Wi=n=>{const{componentCls:e,antCls:r}=n;return{[e]:{...Ue(n),".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":{pointerEvents:"none",[`input${r}-radio-input, input${r}-checkbox-input`]:{visibility:"hidden"},"&.slick-active":{pointerEvents:"auto",[`input${r}-radio-input, input${r}-checkbox-input`]:{visibility:"visible"}},"> div > div":{verticalAlign:"bottom"}}},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"}}}},Oi=n=>{const{componentCls:e,motionDurationSlow:r,arrowSize:t,arrowOffset:o}=n,i=n.calc(t).div(Math.SQRT2).equal();return{[e]:{".slick-prev, .slick-next":{position:"absolute",top:"50%",width:t,height:t,transform:"translateY(-50%)",color:"#fff",opacity:.4,background:"transparent",padding:0,lineHeight:0,border:0,outline:"none",cursor:"pointer",zIndex:1,transition:`opacity ${r}`,"&:hover, &:focus":{opacity:1},"&.slick-disabled":{pointerEvents:"none",opacity:0},"&::after":{boxSizing:"border-box",position:"absolute",top:n.calc(t).sub(i).div(2).equal(),insetInlineStart:n.calc(t).sub(i).div(2).equal(),display:"inline-block",width:i,height:i,border:"0 solid currentcolor",borderInlineStartWidth:2,borderBlockStartWidth:2,borderRadius:1,content:'""'}},".slick-prev":{insetInlineStart:o,"&::after":{transform:"rotate(-45deg)"}},".slick-next":{insetInlineEnd:o,"&::after":{transform:"rotate(135deg)"}}}}},Ai=n=>{const{componentCls:e,dotOffset:r,dotWidth:t,dotHeight:o,dotGap:i,colorBgContainer:a,motionDurationSlow:s}=n,l=new hn(`${n.prefixCls}-dot-animation`,{from:{width:0},to:{width:n.dotActiveWidth}});return{[e]:{".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:r},"&-top":{top:r,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:t,height:o,marginInline:i,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:`all ${s}`,borderRadius:o,overflow:"hidden","&::after":{display:"block",position:"absolute",top:0,insetInlineStart:0,width:0,height:o,content:'""',background:"transparent",borderRadius:o,opacity:1,outline:"none",cursor:"pointer",overflow:"hidden"},button:{position:"relative",display:"block",width:"100%",height:o,padding:0,color:"transparent",fontSize:0,background:a,border:0,borderRadius:o,outline:"none",cursor:"pointer",opacity:.2,transition:`all ${s}`,overflow:"hidden","&:hover":{opacity:.75},"&::after":{position:"absolute",inset:n.calc(i).mul(-1).equal(),content:'""'}},"&.slick-active":{width:n.dotActiveWidth,position:"relative","&:hover":{opacity:1},"&::after":{background:a,animationName:l,animationDuration:`var(${kt})`,animationTimingFunction:"ease-out",animationFillMode:"forwards"}}}}}}},Bi=n=>{const{componentCls:e,dotOffset:r,arrowOffset:t,marginXXS:o}=n,i=new hn(`${n.prefixCls}-dot-vertical-animation`,{from:{height:0},to:{height:n.dotActiveWidth}}),a={width:n.dotHeight,height:n.dotWidth};return{[`${e}-vertical`]:{".slick-prev, .slick-next":{insetInlineStart:"50%",marginBlockStart:"unset",transform:"translateX(-50%)"},".slick-prev":{insetBlockStart:t,insetInlineStart:"50%","&::after":{transform:"rotate(45deg)"}},".slick-next":{insetBlockStart:"auto",insetBlockEnd:t,"&::after":{transform:"rotate(-135deg)"}},".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:n.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-start":{insetInlineEnd:"auto",insetInlineStart:r},"&-end":{insetInlineEnd:r,insetInlineStart:"auto"},li:{...a,margin:`${C(o)} 0`,verticalAlign:"baseline",button:a,"&::after":{...a,height:0},"&.slick-active":{...a,height:n.dotActiveWidth,button:{...a,height:n.dotActiveWidth},"&::after":{...a,animationName:i,animationDuration:`var(${kt})`,animationTimingFunction:"ease-out",animationFillMode:"forwards"}}}}}}},ji=n=>{const{componentCls:e}=n;return[{[`${e}-rtl`]:{direction:"rtl"}},{[`${e}-vertical`]:{".slick-dots":{[`${e}-rtl&`]:{flexDirection:"column"}}}}]},Gi=n=>({arrowSize:16,arrowOffset:n.marginXS,dotWidth:16,dotHeight:3,dotGap:n.marginXXS,dotOffset:12,dotWidthActive:24,dotActiveWidth:24}),qi=xt("Carousel",n=>[Wi(n),Oi(n),Ai(n),Bi(n),ji(n)],Gi,{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),on="slick-dots",sn=({currentSlide:n,slideCount:e,...r})=>c.createElement("button",{type:"button",...r}),Xi=c.forwardRef((n,e)=>{const{dots:r=!0,arrows:t=!1,prevArrow:o,nextArrow:i,draggable:a=!1,waitForAnimate:s=!1,dotPosition:l,dotPlacement:d,vertical:m,rootClassName:p,className:h,style:y,id:S,autoplay:f=!1,autoplaySpeed:v=3e3,rtl:x,...u}=n,b=c.useMemo(()=>{const J=d??l??"bottom";switch(J){case"left":return"start";case"right":return"end";default:return J}},[l,d]),w=m??(b==="start"||b==="end"),{getPrefixCls:$,direction:L,className:q,style:N}=Je("carousel"),W=c.useRef(null),B=(J,V=!1)=>{W.current.slickGoTo(J,V)};c.useImperativeHandle(e,()=>({goTo:B,autoPlay:W.current.innerSlider.autoPlay,innerSlider:W.current.innerSlider,prev:W.current.slickPrev,next:W.current.slickNext}),[W.current]);const{children:U,initialSlide:E=0}=n,K=St(U).length,I=(x??L==="rtl")&&!m;c.useEffect(()=>{if(K>0){const J=I?K-E-1:E;B(J,!1)}},[K,E,I]);const ee={vertical:w,className:_(h,q),style:{...N,...y},autoplay:!!f,...u};ee.effect==="fade"&&(ee.fade=!0);const X=$("carousel",ee.prefixCls),P=!!r,D=_(on,`${on}-${b}`,typeof r=="boolean"?!1:r?.className),[j,F]=qi(X),Y=_(X,{[`${X}-rtl`]:I,[`${X}-vertical`]:ee.vertical},j,F,p),O=f&&(typeof f=="object"?f.dotDuration:!1)?{[kt]:`${v}ms`}:{};return c.createElement("div",{className:Y,id:S,style:O},c.createElement(Di,{ref:W,...ee,dots:P,dotsClass:D,arrows:t,prevArrow:o??c.createElement(sn,{"aria-label":I?"next":"prev"}),nextArrow:i??c.createElement(sn,{"aria-label":I?"prev":"next"}),draggable:a,verticalSwiping:w,autoplaySpeed:v,waitForAnimate:s,rtl:I}))});function Fi(n){const{style:e={width:"100%"},color:r="var(--primary-color)"}=n,t=M.useRef([]),o=M.useRef(!0);return M.useEffect(()=>{const i=setTimeout(()=>{o.current=!1},3e3),a=s=>{o.current||t.current.forEach(l=>{if(!l)return;const d=l.parentElement.getBoundingClientRect(),m=d.left+d.width/2,p=d.top+d.height/2,h=Math.atan2(s.clientY-p,s.clientX-m),y=d.width*.1,S=Math.min(y,Math.hypot(s.clientX-m,s.clientY-p)/5),f=Math.cos(h)*S,v=Math.sin(h)*S,x=d.width*.1;l.style.transform=`translate(${f+x}px, ${v}px)`})};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a),clearTimeout(i)}},[]),T.jsxs(Vi,{style:e,children:[T.jsx("svg",{viewBox:"0 0 95 111",style:{width:"100%",position:"relative"},children:T.jsx("use",{href:"#icon-fany",style:{fill:r}})}),T.jsxs("div",{className:"eyes-container",children:[T.jsx("div",{className:"eye-socket",children:T.jsx("div",{className:"pupil",ref:i=>t.current[0]=i})}),T.jsx("div",{className:"eye-socket",children:T.jsx("div",{className:"pupil",ref:i=>t.current[1]=i})})]}),T.jsx("div",{className:"eye-close",children:T.jsx("svg",{viewBox:"0 0 64 11",style:{width:"100%"},children:T.jsx("use",{href:"#fany_eye_close",style:{fill:"#000"}})})})]})}const Yi=Tt`
  0% { opacity: 0; }
  10% { opacity: 1; }
  20% { opacity: 1; }
  25% { opacity: 0; }
  40% { opacity: 1; }
  50% { opacity: 1; }
  55% { opacity: 0; }
  100% { opacity: 0; }
`,Ki=Tt`
  0% { opacity: 1; }
  10% { opacity: 0; }
  20% { opacity: 0; }
  25% { opacity: 1; }
  40% { opacity: 0; }
  50% { opacity: 0; }
  55% { opacity: 1; }
  100% { opacity: 1; }
`,Vi=oe.div`
  position: relative;
  pointer-events: none;

  & > .eyes-container {
    position: absolute;
    display: flex;
    width: 30%;
    height: auto;
    aspect-ratio: 2 / 1;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);

    & > .eye-socket {
      width: 52%;
      height: auto;
      aspect-ratio: 1 / 1;
      background: #fff;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;

      & + .eye-socket {
        margin-left: -3.4%;
      }

      & > .pupil {
        width: 80%;
        height: auto;
        aspect-ratio: 1 / 1;
        background: #000;
        border-radius: 50%;
        z-index: 99;
        transition: transform 0.3s linear;
        animation: ${Ki} 1s linear 2s;
      }
    }
  }

  & > .eye-close {
    position: absolute;
    display: flex;
    width: 28%;
    top: 30%;
    left: 50%;
    transform: translate(-55%, 0);
    opacity: 0;
    animation: ${Yi} 1s linear 2s;
  }
`,{useBreakpoint:Ui}=mn;function Ji(){const{t:n}=Qe(),e=Ui();return T.jsxs(Qi,{children:[T.jsx("div",{className:"container",children:T.jsx(Yn,{style:{height:"100%"},children:T.jsxs(Kn,{xs:24,sm:12,className:"hero-content",style:{height:e.xs?"50%":"100%"},children:[T.jsx("h1",{children:"Xuan Lin"}),T.jsx("p",{children:n("home.hero.subtitle")})]})})}),T.jsx(Fi,{style:{position:"absolute",width:e.xs?"100%":"80%",maxWidth:"90dvh",right:"-100px",bottom:e.xs?"-10%":"-20%"}})]})}const Qi=oe.section`
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  overflow: hidden;
  position: sticky;
  top: var(--navbar-height);
  z-index: -1;

  & > .container {
    height: 100%;

    & .hero-content {
      color: var(--dark-gray-color);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;

      & > h1 {
        font-size: 60px;
        font-family: 'EN_He';
      }

      & > p {
        font-size: 18px;
        font-family: 'EN_Bd';
      }
    }
  }

  @media (min-width: 576px) {
    & > .container .hero-content {
      padding-bottom: var(--navbar-height);
      align-items: flex-start;

      & > h1 {
        font-size: 80px;
      }

      & > p {
        font-size: 24px;
      }
    }
  }
`;function Zi(){const{t:n}=Qe();return T.jsxs(M.Fragment,{children:[T.jsx(ln,{$clip:"#clip_bg_01_u_invert",style:{transform:"translateY(2%)",marginTop:"-8%",boxShadow:"0 -3px 2px #ccc"}}),T.jsx(ea,{children:T.jsxs("div",{className:"container",children:[T.jsx("h2",{className:"title",children:n("home.intro.title")}),T.jsxs(Vn,{className:"content",vertical:!0,size:30,children:[T.jsx("h3",{children:n("home.intro.subtitle")}),T.jsx("p",{children:n("home.intro.desc1")}),T.jsx("p",{children:n("home.intro.desc2")}),T.jsx(ft,{target:"/about"})]})]})}),T.jsx("div",{style:{background:"var(--light-gray-color)"},children:T.jsx(ln,{$clip:"#clip_bg_02_d_invert"})})]})}const ea=oe.section`
  background: #fff;
  padding: 90px 0;
  overflow-x: clip;
  position: relative;
  z-index: 1;
  --circleWidth: clamp(300px, 35vw, 450px);

  & > .container {
    position: relative;
    z-index: 1;

    & > .content {
      margin-top: 70px;

      & h3 {
        font-size: 1.5rem;
        font-family: 'TW_Bd', sans-serif;
        letter-spacing: 2px;
      }

      & p {
        line-height: 2;
      }

      & > *:last-child {
        align-self: flex-end;
      }
    }

    &::before,
    &::after {
      content: '';
      width: var(--circleWidth);
      aspect-ratio: 1;
      background: #f1f1ebf1;
      border-radius: 50%;
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: -1;
      transform: translate(-75%, 0);
    }

    &::after {
      transform: translate(-15%, 50%);
    }
  }

  @media (min-width: 768px) {
    & > .container {
      padding: calc(var(--circleWidth) * 0.38 - 100px) 0;

      & > h2 {
        width: fit-content;
        margin: 0 !important;
        position: relative;
        left: calc(50% + var(--circleWidth) / 2);
      }

      & > .content {
        width: 50%;
        padding-left: 10%;

        & h3 {
          font-size: 1.75rem;
        }

        & p {
          font-size: 1.25rem;
        }

        & > *:last-child {
          align-self: flex-start;
        }
      }

      &::before {
        transform: translate(-50%, 0);
      }

      &::after {
        transform: translate(10%, 50%);
      }
    }
  }
`,ln=oe.div`
  width: 100%;
  background: #fff;
  padding-top: 8%;
  position: relative;
  -webkit-clip-path: url(${n=>n.$clip});
  clip-path: url(${n=>n.$clip});
`;var Fe={},cn;function ta(){if(cn)return Fe;cn=1;function n(i){if(typeof window>"u")return;const a=document.createElement("style");return a.setAttribute("type","text/css"),a.innerHTML=i,document.head.appendChild(a),i}Object.defineProperty(Fe,"__esModule",{value:!0});var e=qn();function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var t=r(e);n(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const o=e.forwardRef(function({style:a={},className:s="",autoFill:l=!1,play:d=!0,pauseOnHover:m=!1,pauseOnClick:p=!1,direction:h="left",speed:y=50,delay:S=0,loop:f=0,gradient:v=!1,gradientColor:x="white",gradientWidth:u=200,onFinish:b,onCycleComplete:w,onMount:$,children:L},q){const[N,W]=e.useState(0),[B,U]=e.useState(0),[E,H]=e.useState(1),[K,I]=e.useState(!1),ee=e.useRef(null),X=q||ee,P=e.useRef(null),D=e.useCallback(()=>{if(P.current&&X.current){const V=X.current.getBoundingClientRect(),G=P.current.getBoundingClientRect();let Q=V.width,te=G.width;(h==="up"||h==="down")&&(Q=V.height,te=G.height),H(l&&Q&&te&&te<Q?Math.ceil(Q/te):1),W(Q),U(te)}},[l,X,h]);e.useEffect(()=>{if(K&&(D(),P.current&&X.current)){const V=new ResizeObserver(()=>D());return V.observe(X.current),V.observe(P.current),()=>{V&&V.disconnect()}}},[D,X,K]),e.useEffect(()=>{D()},[D,L]),e.useEffect(()=>{I(!0)},[]),e.useEffect(()=>{typeof $=="function"&&$()},[]);const j=e.useMemo(()=>l?B*E/y:B<N?N/y:B/y,[l,N,B,E,y]),F=e.useMemo(()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!d||m?"paused":"running","--pause-on-click":!d||m&&!p||p?"paused":"running","--width":h==="up"||h==="down"?"100vh":"100%","--transform":h==="up"?"rotate(-90deg)":h==="down"?"rotate(90deg)":"none"}),[a,d,m,p,h]),Y=e.useMemo(()=>({"--gradient-color":x,"--gradient-width":typeof u=="number"?`${u}px`:u}),[x,u]),ne=e.useMemo(()=>({"--play":d?"running":"paused","--direction":h==="left"?"normal":"reverse","--duration":`${j}s`,"--delay":`${S}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":l?"auto":"100%"}),[d,h,j,S,f,l]),O=e.useMemo(()=>({"--transform":h==="up"?"rotate(90deg)":h==="down"?"rotate(-90deg)":"none"}),[h]),J=e.useCallback(V=>[...Array(Number.isFinite(V)&&V>=0?V:0)].map((G,Q)=>t.default.createElement(e.Fragment,{key:Q},e.Children.map(L,te=>t.default.createElement("div",{style:O,className:"rfm-child"},te)))),[O,L]);return K?t.default.createElement("div",{ref:X,style:F,className:"rfm-marquee-container "+s},v&&t.default.createElement("div",{style:Y,className:"rfm-overlay"}),t.default.createElement("div",{className:"rfm-marquee",style:ne,onAnimationIteration:w,onAnimationEnd:b},t.default.createElement("div",{className:"rfm-initial-child-container",ref:P},e.Children.map(L,V=>t.default.createElement("div",{style:O,className:"rfm-child"},V))),J(E-1)),t.default.createElement("div",{className:"rfm-marquee",style:ne},J(E))):null});return Fe.default=o,Fe}var na=ta();const ra=yt(na),{useBreakpoint:ia}=mn;function aa(){const{t:n}=Qe(),e=ia(),r=M.useRef(),[t,o]=M.useState(!1);return M.useEffect(()=>{if(!r.current)return;const i=new IntersectionObserver(([a])=>{o(a.isIntersecting)},{threshold:.6});return i.observe(r.current),()=>i.disconnect()},[]),T.jsxs(oa,{ref:r,children:[T.jsxs("div",{className:"container",children:[T.jsx("h2",{className:"title",children:n("home.portfolio.title")}),e.md&&T.jsx(ft,{target:"/portfolio"})]}),T.jsx(ca,{speed:100,autoFill:!0,children:Un.filter(i=>i.highlight)?.map(i=>T.jsx("div",{className:"marquee-item-wrapper",children:T.jsx(sa,{onClick:()=>{window.open(i.path)},hoverable:!0,cover:T.jsxs("div",{className:"image-cover",children:[T.jsx("img",{draggable:!1,alt:i.name,src:i.image}),T.jsx("div",{className:"mask",children:"View Project"})]}),children:T.jsx(Ze.Meta,{title:n(i.name)})})},i.name))}),!e.md&&T.jsx("div",{style:{textAlign:"center"},children:T.jsx(ft,{target:"/portfolio"})})]})}const oa=oe.section`
  background: var(--light-gray-color);
  padding: 90px 0;

  @media (min-width: 768px) {
    & > .container {
      width: 80% !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`,sa=oe(Ze)`
  --padding: 16px;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-radius: 14px;

  &:hover {
    .image-cover {
      & > .mask {
        opacity: 1;
        clip-path: circle(75% at 50% 50%);
      }
    }
  }

  .ant-card-body {
    padding: 0;
  }

  .image-cover {
    width: 100%;
    padding: var(--padding);
    position: relative;

    & > .mask {
      width: calc(100% - var(--padding) * 2);
      height: calc(100% - var(--padding) * 2);
      background: #000000af;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-family: 'EN_Bd';
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      clip-path: circle(0% at 50% 50%);
      transition:
        opacity 0.3s,
        clip-path 420ms cubic-bezier(0.22, 0.9, 0.33, 1);
    }

    &::before,
    &::after {
      content: '';
      width: 15%;
      aspect-ratio: 1/1;
      position: absolute;
      filter: blur(0.1);
      z-index: 2;
    }

    &::before {
      background: linear-gradient(45deg, transparent 48%, #cccccc3f 50%, #fff 50%);
      top: calc(var(--padding) / 2);
      right: calc(var(--padding) / 2);
    }

    &::after {
      background: linear-gradient(45deg, #fff 50%, #cccccc3f 50%, transparent 52%);
      bottom: calc(var(--padding) / 2);
      left: calc(var(--padding) / 2);
    }

    & > img {
      display: block;
      border-radius: 0;
      box-shadow: 0px 0px 5px #ccc;
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      object-position: top;
    }
  }

  .ant-card-meta {
    width: 100%;
    background: #fff;
    padding: var(--padding);
    overflow: visible;
    position: relative;
  }

  .ant-card-meta-title {
    font-family: 'TW_Bd';
    margin-bottom: 6px;
  }

  .ant-card-meta-description {
    color: #666;
    font-family: 'TW_Rg';
  }

  @media (min-width: 576px) {
    --padding: 24px;

    .ant-card-meta-title {
      font-size: 1.5rem;
    }
  }
`,la=Tt`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,ca=oe(ra)`
  margin: 50px 0;

  .marquee-item-wrapper {
    width: min(80vw, 600px);
    flex: 0 0 auto;
    padding: 5px;
    transform: scale(0.9);
    transform-origin: center;
    transition: transform 0.3s;
    will-change: transform;
  }
`;oe(Xi)`
  --dotHeight: 5px;
  margin: 50px 0;

  .carousel-item-wrapper {
    max-width: 1200px;
    padding: 5px;
    transform: scale(0.9);
    transition: transform 0.3s;
  }

  .slick-list {
    overflow-x: clip;
    overflow-y: visible;
  }

  .slick-center .carousel-item-wrapper {
    transform: scale(1);
  }

  .slick-dots {
    bottom: -30px;

    li {
      width: 20px;
      height: var(--dotHeight);
      position: relative;

      button {
        height: var(--dotHeight);
        background: var(--dark-gray-color);
        transition: width 0.3s;
      }

      &.slick-active {
        width: 40px;
      }

      &.slick-active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: var(--dotHeight);
        background: var(--primary-color);
        animation: ${la} ${n=>n.$autoplaySpeed||3e3}ms linear forwards;
      }
    }
  }

  @media (min-width: 768px) {
    .carousel-item-wrapper {
      padding: 15px;
    }
  }
`;function da(){const{t:n}=Qe();return T.jsx(ua,{children:T.jsxs("div",{className:"container",children:[T.jsx("h2",{className:"title",children:n("home.contact.title")}),T.jsx("p",{style:{textAlign:"center",margin:"16px 0"},children:n("home.contact.subtitle")}),T.jsx("div",{style:{textAlign:"center"},children:T.jsxs(fa,{size:"large",type:"primary",onClick:()=>{Fn("/contact")},children:[T.jsx(nr,{size:20}),T.jsx("div",{className:"text-mask",children:T.jsxs("div",{className:"text-slider",children:[T.jsx("div",{className:"text-item",children:n("home.contact.btnText1")}),T.jsx("div",{className:"text-item",children:n("home.contact.btnText2")})]})})]})})]})})}const ua=oe.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: 'Contact';
    font-family: 'EN_He';
    opacity: 0.3;
    font-size: clamp(80px, 23vw, 200px);
    background: linear-gradient(0deg, transparent 0%, var(--secondary-color) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(25%);
    z-index: -1;
  }

  & > .container {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    & > .container {
      margin: auto;

      & > p {
        font-size: 1.25rem;
      }
    }
  }
`,fa=oe(Xn)`
  font-size: 18px !important;
  height: auto !important;
  border-radius: 100px !important;
  padding: 8px 24px !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  .text-mask {
    height: 28px;
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  .text-slider {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
  }

  .text-item {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  &:hover {
    background: var(--secondary-color) !important;
    border-color: var(--secondary-color) !important;

    .text-slider {
      transform: translateY(-28px);
    }
  }
`;function La(){return T.jsxs(pa,{children:[T.jsxs("div",{children:[T.jsx(Ji,{}),T.jsx(Zi,{})]}),T.jsx(aa,{}),T.jsx(da,{})]})}const pa=oe.main`
  padding-top: var(--navbar-height);
`;export{La as default};
