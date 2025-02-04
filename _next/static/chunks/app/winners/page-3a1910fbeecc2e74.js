(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{8009:(e,a,t)=>{Promise.resolve().then(t.bind(t,9769))},9769:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var s=t(5155),n=t(2115),r=t(8715);async function i(){let e=await fetch("".concat("https://lunatic-back.onrender.com","/battles"));if(!e.ok)throw Error("배틀 데이터를 불러오는 데 실패했습니다.");return e.json()}t(542);var l=t(5565);let o=function(){let[e,a]=(0,n.useState)([]),[t,o]=(0,n.useState)(1);(0,n.useEffect)(()=>{(async()=>{a(await i())})()},[]);let d=Math.ceil(e.length/10),c=(t-1)*10,x=e.slice(c,c+10);return(0,s.jsxs)("div",{className:"total-container",children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("div",{className:"title-container",children:[(0,s.jsx)(l.default,{className:"title-image",alt:"Trophy",src:"/lunatic_front_rebase/trophy.png"}),(0,s.jsx)("h1",{className:"title-text",children:"역대 배틀 우승자"})]}),(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)("table",{className:"battle-table",children:[(0,s.jsxs)("thead",{children:[" ",(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"배틀명"}),(0,s.jsx)("th",{children:"날짜"}),(0,s.jsx)("th",{children:"우승자"}),(0,s.jsx)("th",{children:"MVP"}),(0,s.jsx)("th",{children:"저지"}),(0,s.jsx)("th",{})]})]}),(0,s.jsxs)("tbody",{children:[x.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.battleName}),(0,s.jsx)("td",{children:e.date}),(0,s.jsx)("td",{children:e.winner.join(", ")}),(0,s.jsx)("td",{children:e.mvp.join(", ")}),(0,s.jsx)("td",{children:e.judges.join(", ")}),(0,s.jsx)("td",{children:e.youtube&&(0,s.jsx)("button",{onClick:()=>{window.open(e.youtube,"_blank","noopener,noreferrer")},className:"youtube-button",children:"\uD83D\uDD17"})})]},e._id)),Array.from({length:Math.max(0,10-x.length)}).map((e,a)=>(0,s.jsxs)("tr",{className:"empty-row",children:[(0,s.jsx)("td",{colSpan:6})," "]},"empty-".concat(a)))]})]})}),d>1&&(0,s.jsx)("div",{className:"pagination",children:Array.from({length:d},(e,a)=>(0,s.jsx)("button",{className:"page-button ".concat(t===a+1?"active":""),onClick:()=>o(a+1),children:a+1},a+1))}),(0,s.jsx)("div",{className:"overlay-box"})]})}},8715:(e,a,t)=>{"use strict";t.d(a,{default:()=>c});var s=t(5155),n=t(8803),r=t.n(n);t(2115);var i=t(8173),l=t.n(i),o=t(6046),d=t(5565);let c=()=>{let e=(0,o.usePathname)(),a=a=>e===a?"active":"";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:"jsx-aa1d531649379eb8 header",children:[(0,s.jsx)("div",{className:"jsx-aa1d531649379eb8 header-left",children:(0,s.jsx)(l(),{href:"/",className:"home-button",children:(0,s.jsx)(d.default,{src:"/lunatic_front_rebase/header_logo.png",alt:"Logo",width:137,height:20})})}),(0,s.jsxs)("nav",{className:"jsx-aa1d531649379eb8 header-center",children:[(0,s.jsx)(l(),{href:"/winners",className:"nav-item ".concat(a("/winners")),children:"역대 우승자"}),(0,s.jsx)(l(),{href:"/performances",className:"nav-item ".concat(a("/performances")),children:"역대 공연"}),(0,s.jsx)(l(),{href:"/hall-of-fame",className:"nav-item ".concat(a("/hall-of-fame")),children:"명예의 전당"}),(0,s.jsx)(l(),{href:"/lunatic-wiki",className:"nav-item ".concat(a("/lunatic-wiki")),children:"루나틱 위키"})]}),(0,s.jsxs)("div",{className:"jsx-aa1d531649379eb8 header-right",children:[(0,s.jsx)("a",{href:"https://www.youtube.com/@RealLunaTV",target:"_blank",rel:"noopener noreferrer",className:"jsx-aa1d531649379eb8",children:(0,s.jsx)(d.default,{src:"/lunatic_front_rebase/header_youtube.png",alt:"YouTube",width:28})}),(0,s.jsx)("a",{href:"https://www.instagram.com/lunatic_street/",target:"_blank",rel:"noopener noreferrer",className:"jsx-aa1d531649379eb8",children:(0,s.jsx)(d.default,{src:"/lunatic_front_rebase/header_insta.png",alt:"Instagram",width:28,height:28})})]})]}),(0,s.jsx)(r(),{id:"aa1d531649379eb8",children:".header.jsx-aa1d531649379eb8{z-index:10;top:0;left:0;width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;position:fixed;background:rgba(0,0,0,.8)}.header-left.jsx-aa1d531649379eb8 .home-button.jsx-aa1d531649379eb8{font-size:1.2rem;text-decoration:none;color:white;padding:8px 12px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-transition:background.3s;-moz-transition:background.3s;-o-transition:background.3s;transition:background.3s}.header-center.jsx-aa1d531649379eb8{position:absolute;left:50%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px}.nav-item.jsx-aa1d531649379eb8{text-decoration:none;color:white;font-size:1rem;padding:0px 15px;line-height:60px}.nav-item.active.jsx-aa1d531649379eb8{background-color:rgba(3,156,224,.2);border-bottom:3px solid#dd077d;font-weight:bold;color:#039ce0}.header-right.jsx-aa1d531649379eb8{position:absolute;left:95%;-webkit-transform:translatex(-95%);-moz-transform:translatex(-95%);-ms-transform:translatex(-95%);-o-transform:translatex(-95%);transform:translatex(-95%);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px}.header-right.jsx-aa1d531649379eb8 a.jsx-aa1d531649379eb8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.header.jsx-aa1d531649379eb8 nav.jsx-aa1d531649379eb8 ul.jsx-aa1d531649379eb8{list-style:none;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px}"})]})}},542:()=>{}},e=>{var a=a=>e(e.s=a);e.O(0,[807,234,441,517,358],()=>a(8009)),_N_E=e.O()}]);