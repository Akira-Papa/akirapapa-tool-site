(()=>{var e={};e.id=349,e.ids=[349],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1501:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>x,routeModule:()=>p,tree:()=>c});var o=r(482),i=r(9108),n=r(2563),s=r.n(n),a=r(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["unixtime",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3187)),"/Users/funakoshiakira/workspace/akirapapa-tool-site/app/unixtime/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"/Users/funakoshiakira/workspace/akirapapa-tool-site/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],x=["/Users/funakoshiakira/workspace/akirapapa-tool-site/app/unixtime/page.tsx"],d="/unixtime/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/unixtime/page",pathname:"/unixtime",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3957:(e,t,r)=>{Promise.resolve().then(r.bind(r,9096))},6313:(e,t,r)=>{Promise.resolve().then(r.bind(r,8925))},2634:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},9096:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var o=r(5344),i=r(3729),n=r(6506),s=r(6854),a=r(8854),l=r(3156),c=r(8755),x=r(2190),d=r(6706),h=r(2663),p=r(4183),u=r(443),m=r(4047),g=r(1354),f=r(4665);let j=()=>{let[e,t]=(0,i.useState)(!1),r=(0,s.Z)(),j=()=>{t(!e)},y=(0,a.Z)(r.breakpoints.down("lg")),[b,v]=(0,i.useState)(!0);(0,i.useEffect)(()=>{v(y)},[y]);let F=(0,o.jsxs)(l.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[o.jsx(c.ZP,{onClick:j,sx:{"&:hover":{bgcolor:"primary.light",color:"white"}},children:o.jsx(n.default,{href:"/",passHref:!0,style:{color:"inherit",textDecoration:"none"},children:o.jsx(x.Z,{primary:"ホーム",sx:{color:"#333333"}})})}),o.jsx(c.ZP,{onClick:j,sx:{"&:hover":{bgcolor:"primary.light",color:"white"}},children:o.jsx(n.default,{href:"/unixtime",passHref:!0,style:{color:"inherit",textDecoration:"none"},children:o.jsx(x.Z,{primary:"UNIXタイムスタンプ変換",sx:{color:"inherit",textDecoration:"none"}})})}),o.jsx(c.ZP,{onClick:j,sx:{"&:hover":{bgcolor:"primary.light",color:"white"}},children:o.jsx(n.default,{href:"/wordcount",passHref:!0,style:{color:"inherit",textDecoration:"none"},children:o.jsx(x.Z,{primary:"文字数カウント",sx:{color:"inherit",textDecoration:"none"}})})}),o.jsx(c.ZP,{onClick:j,sx:{"&:hover":{bgcolor:"primary.light",color:"white"}},children:o.jsx(n.default,{href:"/password",passHref:!0,style:{color:"inherit",textDecoration:"none"},children:o.jsx(x.Z,{primary:"パスワードジェネレーター",sx:{color:"inherit",textDecoration:"none"}})})}),o.jsx(c.ZP,{onClick:j,sx:{"&:hover":{bgcolor:"primary.light",color:"white"}},children:o.jsx(n.default,{href:"/qrcode",passHref:!0,style:{color:"inherit",textDecoration:"none"},children:o.jsx(x.Z,{primary:"QRコード生成",sx:{color:"inherit",textDecoration:"none"}})})}),o.jsx(c.ZP,{onClick:j,sx:{"&:hover":{bgcolor:"primary.light",color:"white"}},children:o.jsx(n.default,{href:"/colorpicker",passHref:!0,style:{color:"inherit",textDecoration:"none"},children:o.jsx(x.Z,{primary:"カラーピッカー",sx:{color:"inherit",textDecoration:"none"}})})})]});return o.jsx(d.Z,{position:"static",color:"primary",elevation:0,style:{margin:0},children:o.jsx(h.Z,{maxWidth:"lg",children:(0,o.jsxs)(p.Z,{disableGutters:!0,children:[b?o.jsx(u.Z,{size:"large",edge:"start","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:j,color:"inherit",sx:{mr:2},children:o.jsx(f.Z,{})}):null,o.jsx(m.Z,{variant:"h6",color:"#FFFFFF",noWrap:!0,sx:{flexGrow:1},children:"あきらパパツールサイト"}),b?o.jsx(g.ZP,{variant:"temporary",open:e,onClose:j,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",lg:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240,bgcolor:"background.paper",borderRight:"1px solid",borderColor:"divider"}},children:F}):(0,o.jsxs)("nav",{children:[o.jsx(n.default,{href:"/",passHref:!0,style:{textDecoration:"none"},children:o.jsx(m.Z,{variant:"button",color:"#FFFFFF",sx:{margin:"0 10px"},children:"ホーム"})}),o.jsx(n.default,{href:"/unixtime",style:{textDecoration:"none"},passHref:!0,children:o.jsx(m.Z,{variant:"button",color:"#FFFFFF",sx:{margin:"0 10px"},children:"UNIXタイムスタンプ変換"})}),o.jsx(n.default,{href:"/wordcount",style:{textDecoration:"none"},passHref:!0,children:o.jsx(m.Z,{variant:"button",color:"#FFFFFF",sx:{margin:"0 10px"},children:"文字数カウント"})}),o.jsx(n.default,{href:"/password",style:{textDecoration:"none"},passHref:!0,children:o.jsx(m.Z,{variant:"button",color:"#FFFFFF",sx:{margin:"0 10px"},children:"パスワードジェネレーター"})}),o.jsx(n.default,{href:"/qrcode",style:{textDecoration:"none"},passHref:!0,children:o.jsx(m.Z,{variant:"button",color:"#FFFFFF",sx:{margin:"0 10px"},children:"QRコード生成"})}),o.jsx(n.default,{href:"/colorpicker",style:{textDecoration:"none"},passHref:!0,children:o.jsx(m.Z,{variant:"button",color:"#FFFFFF",sx:{margin:"0 10px"},children:"カラーピッカー"})})]})]})})})},y=()=>o.jsx("footer",{style:{marginTop:"auto",position:"static",bottom:0,width:"100%",display:"flex",justifyContent:"center"},children:o.jsx("p",{children:"\xa9 2024 あきらパパツールサイト. All rights reserved."})});r(2307);let b=({children:e})=>{let[t,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{r(!0)},[t]),o.jsx("html",{lang:"ja",children:o.jsx("body",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:t?(0,o.jsxs)(o.Fragment,{children:[o.jsx(j,{}),o.jsx("main",{style:{flex:1},children:o.jsx(h.Z,{maxWidth:"lg",children:e})}),o.jsx(y,{})]}):null})})}},8925:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var o=r(5344),i=r(3729),n=r(3472),s=r(4047),a=r(5819);let l=()=>{let[e,t]=(0,i.useState)({date:"",unix:""}),[r,l]=(0,i.useState)("");return(0,i.useEffect)(()=>{t({date:new Date().toISOString().slice(0,19),unix:Math.floor(new Date().getTime()/1e3).toString()})},[]),(0,i.useEffect)(()=>{try{let r=new Date(e.date),o=Math.floor(r.getTime()/1e3).toString();if(isNaN(r.getTime()))throw Error("Invalid date format");t(e=>({...e,unix:o})),l("")}catch(e){l(e.message)}},[e.date]),(0,o.jsxs)(n.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[o.jsx(n.ZP,{item:!0,xs:12,children:o.jsx(s.Z,{variant:"h6",gutterBottom:!0,children:"UNIXタイムスタンプ変換"})}),o.jsx(n.ZP,{item:!0,xs:12,md:6,children:o.jsx(a.Z,{fullWidth:!0,label:"日付 (YYYY-MM-DDTHH:MM:SS)",type:"datetime-local",value:e.date,onChange:e=>{let r=e.target.value;try{let e=new Date(r),o=Math.floor(e.getTime()/1e3).toString();if(isNaN(e.getTime()))throw Error("Invalid date format");t({date:r,unix:o}),l("")}catch(e){l(e.message)}},InputLabelProps:{shrink:!0},error:!!r,helperText:r})}),o.jsx(n.ZP,{item:!0,xs:12,children:(0,o.jsxs)(s.Z,{variant:"body1",gutterBottom:!0,sx:{margin:"20px auto",display:"block",textAlign:"center"},children:["変換されたUNIXタイムスタンプ: ",e.unix]})})]})};var c=r(4359);let x=()=>o.jsx(o.Fragment,{children:(0,o.jsxs)(c.Z,{sx:{my:4},children:[o.jsx(s.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"UNIXタイムスタンプ変換"}),o.jsx(s.Z,{variant:"body1",children:"このページでは、UNIXタイムスタンプを日付に変換したり、日付をUNIXタイムスタンプに変換する機能を提供しています。使い方は簡単で、必要な情報を入力するだけで変換結果が表示されます。"}),o.jsx(c.Z,{sx:{margin:"4 auto",display:"block"},children:o.jsx(l,{})})]})})},2917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>s});let o=(0,r(6843).createProxy)(String.raw`/Users/funakoshiakira/workspace/akirapapa-tool-site/app/layout.tsx`),{__esModule:i,$$typeof:n}=o,s=o.default},3187:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>s});let o=(0,r(6843).createProxy)(String.raw`/Users/funakoshiakira/workspace/akirapapa-tool-site/app/unixtime/page.tsx`),{__esModule:i,$$typeof:n}=o,s=o.default},2307:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[685,507,472],()=>r(1501));module.exports=o})();