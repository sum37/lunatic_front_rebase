(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{8009:(e,t,a)=>{Promise.resolve().then(a.bind(a,9769))},9769:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5155),n=a(2115),r=a(8715);async function l(){let e=await fetch("".concat("https://lunatic-back.onrender.com","/battles"));if(!e.ok)throw Error("배틀 데이터를 불러오는 데 실패했습니다.");return e.json()}a(542);var i=a(5565);let c=function(){let[e,t]=(0,n.useState)([]),[a,c]=(0,n.useState)(1);(0,n.useEffect)(()=>{(async()=>{t(await l())})()},[]);let h=Math.ceil(e.length/10),d=(a-1)*10,o=e.slice(d,d+10);return(0,s.jsxs)("div",{className:"total-container",children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("div",{className:"title-container",children:[(0,s.jsx)(i.default,{className:"title-image",alt:"Trophy",src:"/lunatic_front_rebase/trophy.png"}),(0,s.jsx)("h1",{className:"title-text",children:"역대 배틀 우승자"})]}),(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)("table",{className:"battle-table",children:[(0,s.jsxs)("thead",{children:[" ",(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"배틀명"}),(0,s.jsx)("th",{children:"날짜"}),(0,s.jsx)("th",{children:"우승자"}),(0,s.jsx)("th",{children:"MVP"}),(0,s.jsx)("th",{children:"저지"}),(0,s.jsx)("th",{})]})]}),(0,s.jsxs)("tbody",{children:[o.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.battleName}),(0,s.jsx)("td",{children:e.date}),(0,s.jsx)("td",{children:e.winner.join(", ")}),(0,s.jsx)("td",{children:e.mvp.join(", ")}),(0,s.jsx)("td",{children:e.judges.join(", ")}),(0,s.jsx)("td",{children:e.youtube&&(0,s.jsx)("button",{onClick:()=>{window.open(e.youtube,"_blank","noopener,noreferrer")},className:"youtube-button",children:"\uD83D\uDD17"})})]},e._id)),Array.from({length:Math.max(0,10-o.length)}).map((e,t)=>(0,s.jsxs)("tr",{className:"empty-row",children:[(0,s.jsx)("td",{colSpan:6})," "]},"empty-".concat(t)))]})]})}),h>1&&(0,s.jsx)("div",{className:"pagination",children:Array.from({length:h},(e,t)=>(0,s.jsx)("button",{className:"page-button ".concat(a===t+1?"active":""),onClick:()=>c(t+1),children:t+1},t+1))}),(0,s.jsx)("div",{className:"overlay-box"})]})}},8715:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var s=a(5155);a(2115);var n=a(8173),r=a.n(n),l=a(6046);a(8019);var i=a(5565);let c=()=>{let e=(0,l.usePathname)(),t=t=>e===t?"active":"";return(0,s.jsxs)("header",{className:"header",style:{zIndex:10,top:0,left:0,width:"100%",height:"60px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px"},children:[(0,s.jsx)("div",{className:"header-left",children:(0,s.jsx)(r(),{href:"/",className:"home-button",style:{fontSize:"1.2rem",textDecoration:"none",color:"white",padding:"8px 12px",borderRadius:"5px",transition:"background 0.3s"},children:(0,s.jsx)(i.default,{src:"/header_logo.png",alt:"Logo",width:137,height:20})})}),(0,s.jsxs)("nav",{className:"header-center",style:{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"20px"},children:[(0,s.jsx)(r(),{href:"/winners",className:"nav-item ".concat(t("/winners")),children:"역대 우승자"}),(0,s.jsx)(r(),{href:"/performances",className:"nav-item ".concat(t("/performances")),children:"역대 공연"}),(0,s.jsx)(r(),{href:"/hall-of-fame",className:"nav-item ".concat(t("/hall-of-fame")),children:"명예의 전당"}),(0,s.jsx)(r(),{href:"/lunatic-wiki",className:"nav-item ".concat(t("/lunatic-wiki")),children:"루나틱 위키"})]}),(0,s.jsxs)("div",{className:"header-right",children:[(0,s.jsx)("a",{href:"https://www.youtube.com/@RealLunaTV",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(i.default,{src:"/header_youtube.png",alt:"YouTube",width:28,height:20})}),(0,s.jsx)("a",{href:"https://www.instagram.com/lunatic_street/",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(i.default,{src:"/header_insta.png",alt:"Instagram",width:28,height:28})})]})]})}},542:()=>{},8019:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[202,807,992,441,517,358],()=>t(8009)),_N_E=e.O()}]);