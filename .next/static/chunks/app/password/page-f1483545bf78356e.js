(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{26534:function(e,t,n){Promise.resolve().then(n.bind(n,53194))},53194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(57437),a=n(2265),l=n(60304),s=n(18087),c=n(37360),o=n(70334),h=n(95749),i=n(58563),u=n(6285),d=()=>{let[e,t]=(0,a.useState)(12),[n,d]=(0,a.useState)(!1),[x,j]=(0,a.useState)(!0),[m,g]=(0,a.useState)(!0),[k,Z]=(0,a.useState)(!1),[b,p]=(0,a.useState)("");return(0,r.jsxs)(l.Z,{sx:{my:4},children:[(0,r.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:"パスワードジェネレーター"}),(0,r.jsx)(c.Z,{label:"パスワードの長さ",type:"number",InputProps:{inputProps:{min:6,max:128}},value:e,onChange:e=>t(Number(e.target.value)),fullWidth:!0,margin:"normal"}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(h.Z,{control:(0,r.jsx)(i.Z,{checked:n,onChange:e=>d(e.target.checked)}),label:"大文字を含む"}),(0,r.jsx)(h.Z,{control:(0,r.jsx)(i.Z,{checked:x,onChange:e=>j(e.target.checked)}),label:"小文字を含む"}),(0,r.jsx)(h.Z,{control:(0,r.jsx)(i.Z,{checked:m,onChange:e=>g(e.target.checked)}),label:"数字を含む"}),(0,r.jsx)(h.Z,{control:(0,r.jsx)(i.Z,{checked:k,onChange:e=>Z(e.target.checked)}),label:"記号を含む"})]}),(0,r.jsx)(u.Z,{variant:"contained",color:"primary",onClick:()=>{let t="";n&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),x&&(t+="abcdefghijklmnopqrstuvwxyz"),m&&(t+="0123456789"),k&&(t+="!@#$%^&*()_+-=[]{}|;:'\",.<>?/");let r="";for(let n=0;n<e;n++){let e=Math.floor(Math.random()*t.length);r+=t[e]}p(r)},sx:{mt:2},children:"パスワードを生成"}),b&&(0,r.jsxs)(s.Z,{variant:"body1",sx:{mt:2,whiteSpace:"normal",wordWrap:"break-word"},children:["生成されたパスワード: ",b]})]})},x=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"パスワードジェネレーター"}),(0,r.jsx)("p",{children:"指定した長さと条件（大文字、小文字、数字、記号）でランダムなパスワードを生成します。"}),(0,r.jsx)(d,{})]})}},function(e){e.O(0,[87,606,676,499,698,971,69,744],function(){return e(e.s=26534)}),_N_E=e.O()}]);