import{r as a,C as $e,c as E,t as it,o as Q,a as le,s as at,u as lt,g as st,b as ct,d as p,e as dt,f as mt,h as be,m as ne,i as Ae,j as we,k as he,F as Be,l as ut,n as Le,p as fe,q as ue,v as ve,w as We,x as pt,y as ze,z as gt,A as $t,B as bt,D as ht,E as ft,G as pe,H as Oe,R as Z,I as m,J as T,K as vt,O as xt}from"./index-CjfB3xB6.js";import{s as Ee,d as Ct,n as te}from"./index-CNcSnWI1.js";import{S as Xe}from"./index-Drw7Ze1T.js";import{R as It,a as St}from"./LeftOutlined-QIcDcjNA.js";import{D as yt,M as wt,u as Bt,S as zt,E as Et,R as Ge,a as Nt,b as Tt,c as Mt}from"./Envelope.esm-B0dstrCO.js";import{u as Ht,R as Pt,C as Ne}from"./row-h5l_F9KW.js";import{T as kt,g as Rt,a as Dt,b as jt,c as At,d as Lt}from"./index-CYKVXBRl.js";import{i as Te,g as Wt}from"./PurePanel-BRV3EkUD.js";import{i as re,s as Ot,a as Xt,b as Gt,c as Ft}from"./statusUtils-DMtenkVD.js";import{_ as xe}from"./extends-CF3RwP-h.js";import{S as Ce}from"./index.esm-DCZuwD6f.js";import{G as qt}from"./index-Dmi9KuvW.js";import"./colors-ucWZ7TKV.js";const Vt=o=>typeof o!="object"&&typeof o!="function"||o===null,Fe=a.createContext({}),ie=a.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1,styles:null,classNames:null}),qe=o=>{const{prefixCls:t,className:e,dashed:r,...i}=o,{getPrefixCls:s}=a.useContext($e),n=s("menu",t),c=E({[`${n}-item-divider-dashed`]:!!r},e);return a.createElement(yt,{className:c,...i})},Ve=o=>{const{className:t,children:e,icon:r,title:i,danger:s,extra:n}=o,{prefixCls:c,firstLevel:l,direction:d,disableMenuItemTitleTooltip:$,inlineCollapsed:C,styles:u,classNames:h}=a.useContext(ie),x=w=>{const N=e?.[0],z=a.createElement("span",{className:E(`${c}-title-content`,l?h?.itemContent:h?.subMenu?.itemContent,{[`${c}-title-content-with-extra`]:!!n||n===0}),style:l?u?.itemContent:u?.subMenu?.itemContent},e);return(!r||a.isValidElement(e)&&e.type==="span")&&e&&w&&l&&typeof N=="string"?a.createElement("div",{className:`${c}-inline-collapsed-noicon`},N.charAt(0)):z},{siderCollapsed:g}=a.useContext(Fe);let S=i;typeof i>"u"?S=l?e:"":i===!1&&(S="");const I={title:S};!g&&!C&&(I.title=null,I.open=!1);const y=it(e).length;let B=a.createElement(wt,{...Q(o,["title","icon","danger"]),className:E(l?h?.item:h?.subMenu?.item,{[`${c}-item-danger`]:s,[`${c}-item-only-child`]:(r?y+1:y)===1},t),style:{...l?u?.item:u?.subMenu?.item,...o.style},title:typeof i=="string"?i:void 0},le(r,w=>({className:E(`${c}-item-icon`,l?h?.itemIcon:h?.subMenu?.itemIcon,w.className),style:{...l?u?.itemIcon:u?.subMenu?.itemIcon,...w.style}})),x(C));return $||(B=a.createElement(kt,{...I,placement:d==="rtl"?"left":"right",classNames:{root:`${c}-inline-collapsed-tooltip`}},B)),B},ae=a.createContext(null),Yt=a.forwardRef((o,t)=>{const{children:e,...r}=o,i=a.useContext(ae),s=a.useMemo(()=>({...i,...r}),[i,r.prefixCls,r.mode,r.selectable,r.rootClassName]),n=at(e),c=lt(t,n?st(e):null);return a.createElement(ae.Provider,{value:s},a.createElement(ct,{space:!0},n?a.cloneElement(e,{ref:c}):e))}),_t=o=>{const{componentCls:t,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:i,lineWidth:s,lineType:n,itemPaddingInline:c}=o;return{[`${t}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${p(s)} ${n} ${i}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:c},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background-color ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},Ut=({componentCls:o,menuArrowOffset:t,calc:e})=>({[`${o}-rtl`]:{direction:"rtl"},[`${o}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${o}-rtl${o}-vertical,
    ${o}-submenu-rtl ${o}-vertical`]:{[`${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${p(e(t).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${p(t)})`}}}}),Me=o=>dt(o),He=(o,t)=>{const{componentCls:e,itemColor:r,itemSelectedColor:i,subMenuItemSelectedColor:s,groupTitleColor:n,itemBg:c,subMenuItemBg:l,itemSelectedBg:d,activeBarHeight:$,activeBarWidth:C,activeBarBorderWidth:u,motionDurationSlow:h,motionEaseInOut:x,motionEaseOut:g,itemPaddingInline:S,motionDurationMid:I,itemHoverColor:y,lineType:B,colorSplit:w,itemDisabledColor:N,dangerItemColor:z,dangerItemHoverColor:M,dangerItemSelectedColor:f,dangerItemActiveBg:v,dangerItemSelectedBg:k,popupBg:A,itemHoverBg:L,itemActiveBg:W,menuSubMenuBg:F,horizontalItemSelectedColor:H,horizontalItemSelectedBg:P,horizontalItemBorderRadius:R,horizontalItemHoverBg:O}=o;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:r,background:c,[`&${e}-root:focus-visible`]:{...Me(o)},[`${e}-item`]:{"&-group-title, &-extra":{color:n}},[`${e}-submenu-selected > ${e}-submenu-title`]:{color:s},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:{...Me(o)}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${N} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:y}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:L},"&:active":{backgroundColor:W}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:L},"&:active":{backgroundColor:W}}},[`${e}-item-danger`]:{color:z,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:M}},[`&${e}-item:active`]:{background:v}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:i,[`&${e}-item-danger`]:{color:f},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:d,[`&${e}-item-danger`]:{backgroundColor:k}},[`&${e}-submenu > ${e}`]:{backgroundColor:F},[`&${e}-popup > ${e}`]:{backgroundColor:A},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:A},[`&${e}-horizontal`]:{...t==="dark"?{borderBottom:0}:{},[`> ${e}-item, > ${e}-submenu`]:{top:u,marginTop:o.calc(u).mul(-1).equal(),marginBottom:0,borderRadius:R,"&::after":{position:"absolute",insetInline:S,bottom:0,borderBottom:`${p($)} solid transparent`,transition:`border-color ${h} ${x}`,content:'""'},"&:hover, &-active, &-open":{background:O,"&::after":{borderBottomWidth:$,borderBottomColor:H}},"&-selected":{color:H,backgroundColor:P,"&:hover":{backgroundColor:P},"&::after":{borderBottomWidth:$,borderBottomColor:H}}}},[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${p(u)} ${B} ${w}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:l},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${p(C)} solid ${i}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${I} ${g}`,`opacity ${I} ${g}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:f}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${I} ${x}`,`opacity ${I} ${x}`].join(",")}}}}}},Pe=o=>{const{componentCls:t,itemHeight:e,itemMarginInline:r,padding:i,menuArrowSize:s,marginXS:n,itemMarginBlock:c,itemWidth:l,itemPaddingInline:d}=o,$=o.calc(s).add(i).add(n).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:p(e),paddingInline:d,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:c,width:l},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:p(e)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:$}}},Zt=o=>{const{componentCls:t,iconCls:e,itemHeight:r,colorTextLightSolid:i,dropdownWidth:s,controlHeightLG:n,motionEaseOut:c,paddingXL:l,itemMarginInline:d,fontSizeLG:$,motionDurationFast:C,motionDurationSlow:u,paddingXS:h,boxShadowSecondary:x,collapsedWidth:g,collapsedIconSize:S}=o,I={height:r,lineHeight:p(r),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":{[`&${t}-root`]:{boxShadow:"none"},...Pe(o)}},[`${t}-submenu-popup`]:{[`${t}-vertical`]:{...Pe(o),boxShadow:x}}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:s,maxHeight:`calc(100vh - ${p(o.calc(n).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${u}`,`background-color ${u}`,`padding ${C} ${c}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:I,[`& ${t}-item-group-title`]:{paddingInlineStart:l}},[`${t}-item`]:I}},{[`${t}-inline-collapsed`]:{width:g,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:$,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${p(o.calc(S).div(2).equal())} - ${p(d)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:S,lineHeight:p(r),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:i}},[`${t}-item-group-title`]:{...mt,paddingInline:h}}}]},ke=o=>{const{componentCls:t,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:i,motionEaseOut:s,iconCls:n,iconSize:c,iconMarginInlineEnd:l}=o;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background-color ${e}`,`padding calc(${e} + 0.1s) ${i}`].join(","),[`${t}-item-icon, ${n}`]:{minWidth:c,fontSize:c,transition:[`font-size ${r} ${s}`,`margin ${e} ${i}`,`color ${e}`].join(","),"+ span":{marginInlineStart:l,opacity:1,transition:[`opacity ${e} ${i}`,`margin ${e}`,`color ${e}`].join(",")}},[`${t}-item-icon`]:{...ut()},[`&${t}-item-only-child`]:{[`> ${n}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important",cursor:"not-allowed",pointerEvents:"none"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},Re=o=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:r,borderRadius:i,menuArrowSize:s,menuArrowOffset:n}=o;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:o.margin,width:s,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:o.calc(s).mul(.6).equal(),height:o.calc(s).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:i,transition:[`background-color ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${p(o.calc(n).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${p(n)})`}}}}},Kt=o=>{const{antCls:t,componentCls:e,fontSize:r,motionDurationSlow:i,motionDurationMid:s,motionEaseInOut:n,paddingXS:c,padding:l,colorSplit:d,lineWidth:$,zIndexPopup:C,borderRadiusLG:u,subMenuItemBorderRadius:h,menuArrowSize:x,menuArrowOffset:g,lineType:S,groupTitleLineHeight:I,groupTitleFontSize:y}=o;return[{"":{[e]:{...we(),"&-hidden":{display:"none"}}},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:{...he(o),...we(),marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${i} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:o.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${p(c)} ${p(l)}`,fontSize:y,lineHeight:I,transition:`all ${i}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${i} ${n}`,`background-color ${i} ${n}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${i} ${n}`,`background-color ${i} ${n}`,`padding ${s} ${n}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background-color ${i} ${n}`,`padding ${i} ${n}`].join(",")},[`${e}-title-content`]:{transition:`color ${i}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${e}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:o.padding}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:d,borderStyle:S,borderWidth:0,borderTopWidth:$,marginBlock:$,padding:0,"&-dashed":{borderStyle:"dashed"}},...ke(o),[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${p(o.calc(r).mul(2).equal())} ${p(l)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:C,borderRadius:u,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:{borderRadius:u,...ke(o),...Re(o),[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:h},[`${e}-submenu-title::after`]:{transition:`transform ${i} ${n}`}}},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:o.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:o.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:o.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:o.paddingXS}},...Re(o),[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${p(g)})`},"&::after":{transform:`rotate(45deg) translateX(${p(o.calc(g).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${p(o.calc(x).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${p(o.calc(g).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${p(g)})`}}}},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},Jt=o=>{const{colorPrimary:t,colorError:e,colorTextDisabled:r,colorErrorBg:i,colorText:s,colorTextDescription:n,colorBgContainer:c,colorFillAlter:l,colorFillContent:d,lineWidth:$,lineWidthBold:C,controlItemBgActive:u,colorBgTextHover:h,controlHeightLG:x,lineHeight:g,colorBgElevated:S,marginXXS:I,padding:y,fontSize:B,controlHeightSM:w,fontSizeLG:N,colorTextLightSolid:z,colorErrorHover:M}=o,f=o.activeBarWidth??0,v=o.activeBarBorderWidth??$,k=o.itemMarginInline??o.marginXXS,A=new Be(z).setA(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:t,horizontalItemHoverColor:t,colorGroupTitle:n,groupTitleColor:n,colorItemTextSelected:t,itemSelectedColor:t,subMenuItemSelectedColor:t,colorItemTextSelectedHorizontal:t,horizontalItemSelectedColor:t,colorItemBg:c,itemBg:c,colorItemBgHover:h,itemHoverBg:h,colorItemBgActive:d,itemActiveBg:u,colorSubItemBg:l,subMenuItemBg:l,colorItemBgSelected:u,itemSelectedBg:u,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:f,colorActiveBarHeight:C,activeBarHeight:C,colorActiveBarBorderSize:$,activeBarBorderWidth:v,colorItemTextDisabled:r,itemDisabledColor:r,colorDangerItemText:e,dangerItemColor:e,colorDangerItemTextHover:e,dangerItemHoverColor:e,colorDangerItemTextSelected:e,dangerItemSelectedColor:e,colorDangerItemBgActive:i,dangerItemActiveBg:i,colorDangerItemBgSelected:i,dangerItemSelectedBg:i,itemMarginInline:k,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:x,groupTitleLineHeight:g,collapsedWidth:x*2,popupBg:S,itemMarginBlock:I,itemPaddingInline:y,horizontalLineHeight:`${x*1.15}px`,iconSize:B,iconMarginInlineEnd:w-B,collapsedIconSize:N,groupTitleFontSize:B,darkItemDisabledColor:new Be(z).setA(.25).toRgbString(),darkItemColor:A,darkDangerItemColor:e,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:z,darkItemSelectedBg:t,darkDangerItemSelectedBg:e,darkItemHoverBg:"transparent",darkGroupTitleColor:A,darkItemHoverColor:z,darkDangerItemHoverColor:M,darkDangerItemSelectedColor:z,darkDangerItemActiveBg:e,itemWidth:f?`calc(100% + ${v}px)`:`calc(100% - ${k*2}px)`}},Qt=(o,t=o,e=!0)=>be("Menu",i=>{const{colorBgElevated:s,controlHeightLG:n,fontSize:c,darkItemColor:l,darkDangerItemColor:d,darkItemBg:$,darkSubMenuItemBg:C,darkItemSelectedColor:u,darkItemSelectedBg:h,darkDangerItemSelectedBg:x,darkItemHoverBg:g,darkGroupTitleColor:S,darkItemHoverColor:I,darkItemDisabledColor:y,darkDangerItemHoverColor:B,darkDangerItemSelectedColor:w,darkDangerItemActiveBg:N,popupBg:z,darkPopupBg:M}=i,f=i.calc(c).div(7).mul(5).equal(),v=ne(i,{menuArrowSize:f,menuHorizontalHeight:i.calc(n).mul(1.15).equal(),menuArrowOffset:i.calc(f).mul(.25).equal(),menuSubMenuBg:s,calc:i.calc,popupBg:z}),k=ne(v,{itemColor:l,itemHoverColor:I,groupTitleColor:S,itemSelectedColor:u,subMenuItemSelectedColor:u,itemBg:$,popupBg:M,subMenuItemBg:C,itemActiveBg:"transparent",itemSelectedBg:h,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:g,itemDisabledColor:y,dangerItemColor:d,dangerItemHoverColor:B,dangerItemSelectedColor:w,dangerItemActiveBg:N,dangerItemSelectedBg:x,menuSubMenuBg:C,horizontalItemSelectedColor:u,horizontalItemSelectedBg:h});return[Kt(v),_t(v),Zt(v),He(v,"light"),He(k,"dark"),Ut(v),Rt(v),re(v,"slide-up"),re(v,"slide-down"),Ae(v,"zoom-big")]},Jt,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(o,t),Ye=o=>{const{popupClassName:t,icon:e,title:r,theme:i}=o,s=a.useContext(ie),{prefixCls:n,inlineCollapsed:c,theme:l,classNames:d,styles:$}=s,C=Bt();let u;if(!e)u=c&&!C.length&&r&&typeof r=="string"?a.createElement("div",{className:`${n}-inline-collapsed-noicon`},r.charAt(0)):a.createElement("span",{className:`${n}-title-content`},r);else{const g=a.isValidElement(r)&&r.type==="span";u=a.createElement(a.Fragment,null,le(e,S=>({className:E(S.className,`${n}-item-icon`,d?.itemIcon),style:{...S.style,...$?.itemIcon}})),g?r:a.createElement("span",{className:`${n}-title-content`},r))}const h=a.useMemo(()=>({...s,firstLevel:!1}),[s]),[x]=Le("Menu");return a.createElement(ie.Provider,{value:h},a.createElement(zt,{...Q(o,["icon"]),title:u,classNames:{list:d?.subMenu?.list,listTitle:d?.subMenu?.itemTitle},styles:{list:$?.subMenu?.list,listTitle:$?.subMenu?.itemTitle},popupClassName:E(n,t,d?.popup?.root,`${n}-${i||l}`),popupStyle:{zIndex:x,...o.popupStyle,...$?.popup?.root}}))};function me(o){return o===null||o===!1}const eo={item:Ve,submenu:Ye,divider:qe},to=a.forwardRef((o,t)=>{const e=a.useContext(ae),r=e||{},{prefixCls:i,className:s,style:n,theme:c="light",expandIcon:l,_internalDisableMenuItemTitleTooltip:d,inlineCollapsed:$,siderCollapsed:C,rootClassName:u,mode:h,selectable:x,onClick:g,overflowedIndicatorPopupClassName:S,classNames:I,styles:y,...B}=o,{menu:w}=a.useContext($e),{getPrefixCls:N,getPopupContainer:z,direction:M,className:f,style:v,classNames:k,styles:A}=fe("menu"),L=N(),W=Q(B,["collapsedWidth"]);r.validator?.({mode:h});const F=ue((...q)=>{g?.(...q),r.onClick?.()}),H=r.mode||h,P=x??r.selectable,R=$??C,O={...o,mode:H,inlineCollapsed:R,selectable:P,theme:c},[D,X]=ve([k,I],[A,y],{props:O},{popup:{_default:"root"},subMenu:{_default:"item"}}),J={horizontal:{motionName:`${L}-slide-up`},inline:pt(L),other:{motionName:`${L}-zoom-big`}},b=N("menu",i||r.prefixCls),j=We(b),[K,V]=Qt(b,j,!e),Y=E(`${b}-${c}`,f,s),G=a.useMemo(()=>{if(typeof l=="function"||me(l))return l||null;if(typeof r.expandIcon=="function"||me(r.expandIcon))return r.expandIcon||null;if(typeof w?.expandIcon=="function"||me(w?.expandIcon))return w?.expandIcon||null;const q=l??r?.expandIcon??w?.expandIcon;return le(q,{className:E(`${b}-submenu-expand-icon`,a.isValidElement(q)?q.props?.className:void 0)})},[l,r?.expandIcon,w?.expandIcon,b]),ee=a.useMemo(()=>({prefixCls:b,inlineCollapsed:R||!1,direction:M,firstLevel:!0,theme:c,mode:H,disableMenuItemTitleTooltip:d,classNames:D,styles:X}),[b,R,M,d,c,H,D,X]);return a.createElement(ae.Provider,{value:null},a.createElement(ie.Provider,{value:ee},a.createElement(Et,{getPopupContainer:z,overflowedIndicator:a.createElement(Ge,null),overflowedIndicatorPopupClassName:E(b,`${b}-${c}`,S),classNames:{list:D.list,listTitle:D.itemTitle},styles:{list:X.list,listTitle:X.itemTitle},mode:H,selectable:P,onClick:F,...W,inlineCollapsed:R,style:{...X.root,...v,...n},className:Y,prefixCls:b,direction:M,defaultMotions:J,expandIcon:G,ref:t,rootClassName:E(u,K,r.rootClassName,V,j,D.root),_internalComponents:eo})))}),oe=a.forwardRef((o,t)=>{const e=a.useRef(null),r=a.useContext(Fe);return a.useImperativeHandle(t,()=>({menu:e.current,focus:i=>{e.current?.focus(i)}})),a.createElement(to,{ref:e,...o,...r})});oe.Item=Ve;oe.SubMenu=Ye;oe.Divider=qe;oe.ItemGroup=Nt;const oo=o=>{const{componentCls:t,menuCls:e,colorError:r,colorTextLightSolid:i}=o,s=`${e}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${e} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:r,"&:hover":{color:i,backgroundColor:r}}}}}},no=o=>{const{componentCls:t,menuCls:e,zIndexPopup:r,dropdownArrowDistance:i,sizePopupArrow:s,antCls:n,iconCls:c,motionDurationMid:l,paddingBlock:d,fontSize:$,dropdownEdgeChildPadding:C,colorTextDisabled:u,fontSizeIcon:h,controlPaddingHorizontal:x,colorBgElevated:g}=o;return[{[t]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:r,display:"block","&::before":{position:"absolute",insetBlock:o.calc(s).div(2).sub(i).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},[`&-trigger${n}-btn`]:{[`& > ${c}-down, & > ${n}-btn-icon > ${c}-down`]:{fontSize:h}},[`${t}-wrap`]:{position:"relative",[`${n}-btn > ${c}-down`]:{fontSize:h},[`${c}-down::before`]:{transition:`transform ${l}`}},[`${t}-wrap-open`]:{[`${c}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottomLeft,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottomLeft,
          &${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottom,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottom,
          &${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottomRight,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:Ft},[`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-top,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-top,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-topRight`]:{animationName:Gt},[`&${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottomLeft,
          &${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottom,
          &${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:Xt},[`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-top,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-topRight`]:{animationName:Ot}}},Dt(o,g,{arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${e}`]:{position:"relative",margin:0},[`${e}-submenu-popup`]:{position:"absolute",zIndex:r,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:{...he(o),[e]:{padding:C,listStyleType:"none",backgroundColor:g,backgroundClip:"padding-box",borderRadius:o.borderRadiusLG,outline:"none",boxShadow:o.boxShadowSecondary,...ze(o),"&:empty":{padding:0,boxShadow:"none"},[`${e}-item-group-title`]:{padding:`${p(d)} ${p(x)}`,color:o.colorTextDescription,transition:`all ${l}`},[`${e}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${e}-item-icon`]:{minWidth:$,marginInlineEnd:o.marginXS,fontSize:o.fontSizeSM},[`${e}-title-content`]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:`all ${l}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${e}-item-extra`]:{paddingInlineStart:o.padding,marginInlineStart:"auto",fontSize:o.fontSizeSM,color:o.colorTextDescription}},[`${e}-item, ${e}-submenu-title`]:{display:"flex",margin:0,padding:`${p(d)} ${p(x)}`,color:o.colorText,fontWeight:"normal",fontSize:$,lineHeight:o.lineHeight,cursor:"pointer",transition:`all ${l}`,borderRadius:o.borderRadiusSM,"&:hover, &-active":{backgroundColor:o.controlItemBgHover},...ze(o),"&-selected":{color:o.colorPrimary,backgroundColor:o.controlItemBgActive,"&:hover, &-active":{backgroundColor:o.controlItemBgActiveHover}},"&-disabled":{color:u,cursor:"not-allowed","&:hover":{color:u,backgroundColor:g,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${p(o.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:o.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:o.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:o.colorIcon,fontSize:h,fontStyle:"normal"}}},[`${e}-item-group-list`]:{margin:`0 ${p(o.marginXS)}`,padding:0,listStyle:"none"},[`${e}-submenu-title`]:{paddingInlineEnd:o.calc(x).add(o.fontSizeSM).equal()},[`${e}-submenu-vertical`]:{position:"relative"},[`${e}-submenu${e}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:u,backgroundColor:g,cursor:"not-allowed"}},[`${e}-submenu-selected ${t}-menu-submenu-title`]:{color:o.colorPrimary}}}},[re(o,"slide-up"),re(o,"slide-down"),Te(o,"move-up"),Te(o,"move-down"),Ae(o,"zoom-big")]]},ro=o=>({zIndexPopup:o.zIndexPopupBase+50,paddingBlock:(o.controlHeight-o.fontSize*o.lineHeight)/2,...At({contentRadius:o.borderRadiusLG,limitVerticalRadius:!0}),...jt(o)}),io=be("Dropdown",o=>{const{marginXXS:t,sizePopupArrow:e,paddingXXS:r,componentCls:i}=o,s=ne(o,{menuCls:`${i}-menu`,dropdownArrowDistance:o.calc(e).div(2).add(t).equal(),dropdownEdgeChildPadding:r});return[no(s),oo(s)]},ro,{resetStyle:!1}),se=o=>{const{menu:t,arrow:e,prefixCls:r,children:i,trigger:s,disabled:n,dropdownRender:c,popupRender:l,getPopupContainer:d,overlayClassName:$,rootClassName:C,overlayStyle:u,open:h,onOpenChange:x,mouseEnterDelay:g=.15,mouseLeaveDelay:S=.1,autoAdjustOverflow:I=!0,placement:y="",transitionName:B,classNames:w,styles:N,destroyPopupOnHide:z,destroyOnHidden:M}=o,{getPrefixCls:f,direction:v,getPopupContainer:k,className:A,style:L,classNames:W,styles:F}=fe("dropdown"),H={...o,mouseEnterDelay:g,mouseLeaveDelay:S,autoAdjustOverflow:I},[P,R]=ve([W,w],[F,N],{props:H}),O={...L,...u,...R.root},D=l||c,X=a.useMemo(()=>{const _=f();return B!==void 0?B:y.includes("top")?`${_}-slide-down`:`${_}-slide-up`},[f,y,B]),J=a.useMemo(()=>y?y.includes("Center")?y.slice(0,y.indexOf("Center")):y:v==="rtl"?"bottomRight":"bottomLeft",[y,v]),b=f("dropdown",r),j=We(b),[K,V]=io(b,j),[,Y]=gt(),G=a.Children.only(Vt(i)?a.createElement("span",null,i):i),ee=le(G,{className:E(`${b}-trigger`,{[`${b}-rtl`]:v==="rtl"},G.props.className),disabled:G.props.disabled??n}),q=n?[]:s,ce=!!q?.includes("contextMenu"),[Je,Ie]=Ht(!1,h),Qe=ue(_=>{x?.(_,{source:"trigger"}),Ie(_)}),et=E($,C,K,V,j,A,P.root,{[`${b}-rtl`]:v==="rtl"}),tt=Lt({arrowPointAtCenter:typeof e=="object"&&e.pointAtCenter,autoAdjustOverflow:I,offset:Y.marginXXS,arrowWidth:e?Y.sizePopupArrow:0,borderRadius:Y.borderRadius}),ot=ue(()=>{t?.selectable&&t?.multiple||(x?.(!1,{source:"menu"}),Ie(!1))}),nt=()=>{const _=Q(P,["root"]),ye=Q(R,["root"]);let U;return t?.items&&(U=a.createElement(oe,{...t,classNames:{..._,subMenu:{..._}},styles:{...ye,subMenu:{...ye}}})),D&&(U=D(U)),U=a.Children.only(typeof U=="string"?a.createElement("span",null,U):U),a.createElement(Yt,{prefixCls:`${b}-menu`,rootClassName:E(V,j),expandIcon:a.createElement("span",{className:`${b}-menu-submenu-arrow`},v==="rtl"?a.createElement(It,{className:`${b}-menu-submenu-arrow-icon`}):a.createElement(St,{className:`${b}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:ot,validator:({mode:jo})=>{}},U)},[Se,rt]=Le("Dropdown",O.zIndex);let de=a.createElement(Tt,{alignPoint:ce,...Q(o,["rootClassName","onOpenChange"]),mouseEnterDelay:g,mouseLeaveDelay:S,visible:Je,builtinPlacements:tt,arrow:!!e,overlayClassName:et,prefixCls:b,getPopupContainer:d||k,transitionName:X,trigger:q,overlay:nt,placement:J,onVisibleChange:Qe,overlayStyle:{...O,zIndex:Se},autoDestroy:M??z},ee);return Se&&(de=a.createElement($t.Provider,{value:rt},de)),de},ao=Wt(se,"align",void 0,"dropdown",o=>o),lo=o=>a.createElement(ao,{...o},a.createElement("span",null));se._InternalPanelDoNotUseOrYouWillBeFired=lo;const so=o=>{const{componentCls:t}=o;return{[t]:{"&-horizontal":{[`&${t}`]:{"&-sm":{marginBlock:o.marginXS},"&-md":{marginBlock:o.margin}}}}}},co=o=>{const{componentCls:t,sizePaddingEdgeHorizontal:e,colorSplit:r,lineWidth:i,textPaddingInline:s,orientationMargin:n,verticalMarginInline:c}=o,l=`${t}-rail`;return{[t]:{...he(o),borderBlockStart:`${p(i)} solid ${r}`,[l]:{borderBlockStart:`${p(i)} solid ${r}`},"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${p(i)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${p(o.marginLG)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${p(o.dividerHorizontalWithTextGutterMargin)} 0`,color:o.colorTextHeading,fontWeight:500,fontSize:o.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,[`${l}-start, ${l}-end`]:{width:"50%",borderBlockStartColor:"inherit",borderBlockEnd:0,content:"''"}},[`&-horizontal${t}-with-text-start`]:{[`${l}-start`]:{width:`calc(${n} * 100%)`},[`${l}-end`]:{width:`calc(100% - ${n} * 100%)`}},[`&-horizontal${t}-with-text-end`]:{[`${l}-start`]:{width:`calc(100% - ${n} * 100%)`},[`${l}-end`]:{width:`calc(${n} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:s},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${p(i)} 0 0`,[l]:{borderBlockStart:`${p(i)} dashed ${r}`}},[`&-horizontal${t}-with-text${t}-dashed`]:{[`${l}-start, ${l}-end`]:{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${p(i)} 0 0`,[l]:{borderBlockStart:`${p(i)} dotted ${r}`}},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:o.colorText,fontWeight:"normal",fontSize:o.fontSize},[`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]:{[`${l}-start`]:{width:0},[`${l}-end`]:{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:e}},[`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]:{[`${l}-start`]:{width:"100%"},[`${l}-end`]:{width:0},[`${t}-inner-text`]:{paddingInlineEnd:e}}}}},mo=o=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:o.marginXS}),uo=be("Divider",o=>{const t=ne(o,{dividerHorizontalWithTextGutterMargin:o.margin,sizePaddingEdgeHorizontal:0});return[co(t),so(t)]},mo,{unitless:{orientationMargin:!0}}),po=["left","right","center","start","end"],go={small:"sm",middle:"md"},$o=o=>{const{getPrefixCls:t,direction:e,className:r,style:i,classNames:s,styles:n}=fe("divider"),{prefixCls:c,type:l,orientation:d,vertical:$,titlePlacement:C,orientationMargin:u,className:h,rootClassName:x,children:g,dashed:S,variant:I="solid",plain:y,style:B,size:w,classNames:N,styles:z,...M}=o,f=t("divider",c),v=`${f}-rail`,[k,A]=uo(f),L=bt(w),W=go[L],F=!!g,H=po.includes(d||""),P=a.useMemo(()=>{const G=C??(H?d:"center");return G==="left"?e==="rtl"?"end":"start":G==="right"?e==="rtl"?"start":"end":G},[e,d,C,H]),R=P==="start"&&u!=null,O=P==="end"&&u!=null,[D,X]=ht(d,$,l),J={...o,orientation:D,titlePlacement:P,size:L},[b,j]=ve([s,N],[n,z],{props:J}),K=E(f,r,k,A,`${f}-${D}`,{[`${f}-with-text`]:F,[`${f}-with-text-${P}`]:F,[`${f}-dashed`]:!!S,[`${f}-${I}`]:I!=="solid",[`${f}-plain`]:!!y,[`${f}-rtl`]:e==="rtl",[`${f}-no-default-orientation-margin-start`]:R,[`${f}-no-default-orientation-margin-end`]:O,[`${f}-${W}`]:!!W,[v]:!g,[b.rail]:b.rail&&!g},h,x,b.root),V=a.useMemo(()=>typeof u=="number"?u:/^\d+$/.test(u)?Number(u):u,[u]),Y={marginInlineStart:R?V:void 0,marginInlineEnd:O?V:void 0};return a.createElement("div",{className:K,style:{...i,...j.root,...g?{}:j.rail,...B},...M,role:"separator"},g&&!X&&a.createElement(a.Fragment,null,a.createElement("div",{className:E(v,`${v}-start`,b.rail),style:j.rail}),a.createElement("span",{className:E(`${f}-inner-text`,b.content),style:{...Y,...j.content}},g),a.createElement("div",{className:E(v,`${v}-end`,b.rail),style:j.rail})))},_e=o=>{const{getPopupContainer:t,getPrefixCls:e,direction:r}=a.useContext($e),{prefixCls:i,type:s="default",danger:n,disabled:c,loading:l,onClick:d,htmlType:$,children:C,className:u,menu:h,arrow:x,autoFocus:g,trigger:S,align:I,open:y,onOpenChange:B,placement:w,getPopupContainer:N,href:z,icon:M=a.createElement(Ge,null),title:f,buttonsRender:v=ce=>ce,mouseEnterDelay:k,mouseLeaveDelay:A,overlayClassName:L,overlayStyle:W,destroyOnHidden:F,destroyPopupOnHide:H,dropdownRender:P,popupRender:R,...O}=o,D=e("dropdown",i),X=`${D}-button`,b={menu:h,arrow:x,autoFocus:g,align:I,disabled:c,trigger:c?[]:S,onOpenChange:B,getPopupContainer:N||t,mouseEnterDelay:k,mouseLeaveDelay:A,classNames:{root:L},styles:{root:W},destroyOnHidden:F,popupRender:R||P},{compactSize:j,compactItemClassnames:K}=ft(D,r),V=E(X,K,u);"destroyPopupOnHide"in o&&(b.destroyPopupOnHide=H),"open"in o&&(b.open=y),"placement"in o?b.placement=w:b.placement=r==="rtl"?"bottomLeft":"bottomRight";const Y=a.createElement(pe,{type:s,danger:n,disabled:c,loading:l,onClick:d,htmlType:$,href:z,title:f},C),G=a.createElement(pe,{type:s,danger:n,icon:M}),[ee,q]=v([Y,G]);return a.createElement(Xe.Compact,{className:V,size:j,block:!0,...O},ee,a.createElement(se,{...b},q))};_e.__ANT_BUTTON=!0;const Ue=se;Ue.Button=_e;var Ze=a.forwardRef(function(o,t){var e={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return a.createElement(Ce,xe({iconAttrs:e,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512"},o,{ref:t}),a.createElement("path",{fill:"currentColor",d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"}))});Ze.displayName="ChevronDown";var ge=a.forwardRef(function(o,t){var e={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return a.createElement(Ce,xe({iconAttrs:e,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512"},o,{ref:t}),a.createElement("path",{fill:"currentColor",d:"m57.7 193 9.4 16.4c8.3 14.5 21.9 25.2 38 29.8l57.9 16.5c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6 16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5 4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5.3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3-92.8 0-171.5 60.9-198.2 145zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256z"}))});ge.displayName="EarthAmericas";const{useBreakpoint:bo}=qt,De=[{path:"/",label:"home"},{path:"/about",label:"about"},{path:"/portfolio",label:"portfolio"},{path:"/contact",label:"contact"}],je=[{value:"zh-TW",label:"繁體中文"},{value:"en",label:"English"}];function ho(){const{t:o,i18n:t}=Oe(),e=bo(),[r,i]=Z.useState(!1),[s,n]=Z.useState(!1),c=Z.useRef(),l=Z.useCallback(async d=>{d!==t.language&&(i(!1),n(!1),Ee(!0),await Ct(500),t.changeLanguage(d),Ee(!1))},[t]);return Z.useEffect(()=>{const d=$=>{c.current&&!c.current.contains($.target)&&n(!1)};return s&&document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[s]),Z.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),m.jsxs(Z.Fragment,{children:[m.jsx(vo,{src:new URL("/assets/logo-B5T4k9bF.png",import.meta.url).href,alt:"Logo",onClick:()=>{te("/")}}),m.jsx(fo,{children:m.jsx("div",{className:"container",children:m.jsx("nav",{children:!e.xs&&m.jsxs(Xe,{children:[m.jsx("ul",{children:De.map(d=>{if(d.label!=="home")return m.jsx("li",{children:m.jsx(xo,{type:"link",onClick:()=>{te(d.path)},children:o(`nav.${d.label}`)})},d.label)})}),m.jsx($o,{vertical:!0,style:{borderColor:"var(--dark-gray-color)",height:25}}),m.jsx(Ue,{menu:{items:[{key:"zh-TW",label:"繁體中文"},{key:"en",label:"English"}],selectable:!0,defaultSelectedKeys:[t.language],onClick:({key:d})=>{l(d)},style:{minWidth:80,borderRadius:8,textAlign:"center"}},children:m.jsxs("div",{className:"lang-dropdown",children:[m.jsx(ge,{size:20,color:"#333"}),t.language==="en"?"EN":"繁中"]})})]})})})}),e.xs&&m.jsx(Co,{className:r&&"active",onClick:()=>i(!r)}),m.jsxs(Io,{className:r&&"active",children:[m.jsx("ul",{children:De.map(d=>m.jsx("li",{children:m.jsx("span",{onClick:()=>{te(d.path),i(!1)},children:o(`nav.${d.label}`)})},d.label))}),m.jsxs(So,{ref:c,children:[m.jsxs(yo,{onClick:()=>n(!s),children:[m.jsx("div",{className:"prefix",children:m.jsx(ge,{size:14})}),m.jsx("div",{className:"value",children:je.find(d=>d.value===t.language)?.label}),m.jsx(Ze,{size:12,className:`arrow ${s?"up":""}`})]}),m.jsx(wo,{className:s?"open":"",children:je.map(d=>m.jsx("div",{className:`option ${t.language===d.value?"selected":""}`,onClick:()=>{l(d.value)},children:d.label},d.value))})]})]})]})}const fo=T.header`
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;

  & > .container {
    height: 100%;
    display: flex;
    align-items: center;

    & > nav {
      margin-left: auto;

      & ul {
        display: flex;
      }

      & .lang-dropdown {
        font-family: 'TW_Bd', sans-serif;
        padding: 0 var(--base-padding);
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
    }
  }
`,vo=T.img`
  max-width: 150px;
  object-fit: contain;
  mix-blend-mode: difference;
  cursor: pointer;
  position: fixed;
  top: calc(var(--navbar-height) / 2);
  left: var(--base-padding);
  transform: translateY(-50%);
  z-index: 998;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1200px) {
    left: calc((100vw - 1200px) / 2 + var(--base-padding));
  }
`,xo=T(pe)`
  &&& {
    color: inherit;
    font-family: 'TW_Bd', sans-serif;
    position; relative;

    &::before {
      content: '';
      width: 0;
      height: 2px;
      background: var(--secondary-color);
      border-radius: 1rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      transition: width 0.3s;
    }

    &:hover {
      color: inherit;

      &::before {
        width: 80%;
      }
    }
  }
`,Co=T.div`
  --height: 36px;
  width: 42px;
  height: var(--height);
  position: fixed;
  top: calc(var(--navbar-height) / 2);
  right: var(--base-padding);
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 45%;
    border-radius: 100rem;
    transition: all 0.5s;
  }

  &::before {
    background: var(--primary-color);
  }

  &::after {
    background: var(--dark-gray-color);
  }

  &.active {
    &::before {
      background: #fff;
      transform: translateY(calc(var(--height) / 2 - 50%)) rotate(20deg);
    }

    &::after {
      background: var(--primary-color);
      transform: translateY(calc(var(--height) / 2 * (-1) + 50%)) rotate(-20deg);
    }
  }

  @media (min-width: 1200px) {
    right: calc((100vw - 1200px) / 2 + var(--base-padding));
  }
`,Io=T.section`
  width: 100vw;
  height: 100vh;
  background: var(--dark-gray-color);
  padding: var(--navbar-height) calc(var(--base-padding) * 3);
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(50%);
  z-index: 999;
  transition: all 0.5s ease-out;
  pointer-events: none;

  &.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  & > ul {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'TW_Bd', sans-serif;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`,So=T.div`
  position: relative;
  width: 160px; /* 稍微放寬以容納文字 */
  margin: auto auto 10vh auto;
  font-family: 'TW_Bd', sans-serif;
`,yo=T.div`
  background: #fff;
  height: 40px;
  border-radius: 100rem;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  border: 1px solid #d9d9d9;

  .prefix {
    display: flex;
    color: #666;
  }

  .value {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .arrow {
    transition: transform 0.3s;
    color: #bfbfbf;
    &.up {
      transform: rotate(180deg);
    }
  }
`,wo=T.div`
  position: absolute;
  bottom: calc(100% + 8px); /* 向上彈出，符合原 UI 邏輯 */
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 1001;
  padding: 4px;

  &.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .option {
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
    text-align: center;
    color: #333;

    &:hover {
      background: #f5f5f5;
    }

    &.selected {
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color), transparent 92%);
      font-weight: 600;
    }
  }
`;var Ke=a.forwardRef(function(o,t){var e={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return a.createElement(Ce,xe({iconAttrs:e,iconVerticalAlign:"middle",iconViewBox:"0 0 496 512"},o,{ref:t}),a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))});Ke.displayName="Github";const Bo=[{key:"home",path:"/"},{key:"about",path:"/about"},{key:"portfolio",path:"/portfolio"},{key:"contact",path:"/contact"}];function zo(){const{t:o}=Oe();return m.jsx(Eo,{children:m.jsxs("div",{className:"container",children:[m.jsxs(Pt,{justify:"space-between",align:"middle",gutter:[32,32],children:[m.jsxs(Ne,{xs:24,md:12,children:[m.jsx(No,{src:new URL("/assets/logo-B5T4k9bF.png",import.meta.url).href,alt:"Logo",onClick:()=>te("/")}),m.jsx("p",{className:"desc",children:o("about.intro.desc1")}),m.jsxs(Mo,{children:[m.jsx("a",{href:"https://github.com/xuanlin129",target:"_blank",rel:"noopener noreferrer",children:m.jsx(Ke,{size:24})}),m.jsx("a",{href:"mailto:xuanlin129@gmail.com",children:m.jsx(Mt,{size:24})})]})]}),m.jsx(Ne,{xs:24,md:12,children:m.jsx(To,{children:Bo.map(t=>m.jsx("li",{onClick:()=>te(t.path),children:o(`nav.${t.key}`)},t.key))})})]}),m.jsx(Ho,{}),m.jsx("div",{className:"copyright",children:m.jsxs("p",{children:["© ",new Date().getFullYear()," Xuan. All rights reserved."]})})]})})}const Eo=T.footer`
  color: #fff;
  background: var(--dark-gray-color);
  padding: 80px 0 40px;

  .desc {
    color: #a0a0a0;
    margin-top: 16px;
    max-width: 400px;
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .copyright {
    text-align: center;
    color: #666;
    font-size: 0.85rem;
  }
`,No=T.img`
  height: 32px;
  cursor: pointer;
  filter: brightness(100);
  opacity: 0.9;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`,To=T.ul`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    cursor: pointer;
    font-size: 0.95rem;
    color: #ccc;
    transition: all 0.3s;
    position: relative;
    padding: 4px 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--primary-color);
      transition: width 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:hover {
      color: #fff;

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;

    li {
      width: fit-content;
    }
  }
`,Mo=T.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  a {
    color: #a0a0a0;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      color: #fff;
      background: var(--primary-color);
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }
  }
`,Ho=T.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 40px 0 30px;
`,Po="/assets/bg-cover-6wtDBveq.png";function ko(){return m.jsxs(Ro,{children:[m.jsx("div",{className:"bg-base"}),m.jsx("div",{className:"bg-texture"})]})}const Ro=T.section`
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;

  & > .bg-base,
  & > .bg-texture {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  & > .bg-base {
    background: #fffffff7;
  }
  & > .bg-texture {
    background: url(${Po}) repeat center center/cover;
    mix-blend-mode: soft-light;
    opacity: 0.5;
    mix-blend-mode: overlay;
  }
`;function Ko(){const{pathname:o}=vt();return Z.useEffect(()=>{window.scrollTo(0,0)},[o]),m.jsxs(Do,{children:[m.jsx(ho,{}),m.jsx(xt,{}),m.jsx(zo,{}),m.jsx(ko,{})]})}const Do=T.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;T.main`
  padding-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  flex: 1;
`;export{Ko as default};
