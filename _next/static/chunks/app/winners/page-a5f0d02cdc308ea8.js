(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{8009:(e,t,l)=>{Promise.resolve().then(l.bind(l,9506))},9506:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>s});var a=l(5155),n=l(2115),i=l(8715),r=l(5565),o=l(5370);let s=function(){let[e,t]=(0,n.useState)([]),[l,s]=(0,n.useState)(1);(0,n.useEffect)(()=>{(async()=>{t(await (0,o.Cj)())})()},[]);let d=Math.ceil(e.length/10),c=(l-1)*10,b=e.slice(c,c+10);return(0,a.jsxs)("div",{style:h.totalContainer,children:[(0,a.jsx)("div",{style:h.overlayBox}),(0,a.jsx)(i.A,{}),(0,a.jsxs)("div",{style:h.titleContainer,children:[(0,a.jsx)("div",{style:h.imageWrapper,children:(0,a.jsx)(r.default,{style:h.titleImage,alt:"Trophy",src:"/trophy.png",fill:!0})}),(0,a.jsx)("h1",{style:h.titleText,children:"역대 배틀 우승자"})]}),(0,a.jsx)("div",{style:h.tableContainer,children:(0,a.jsxs)("table",{style:h.battleTable,children:[(0,a.jsx)("thead",{style:h.battleTableThead,children:(0,a.jsxs)("tr",{style:h.battleTableTr,children:[(0,a.jsx)("th",{style:h.battleTableTh1,children:"배틀명"}),(0,a.jsx)("th",{style:h.battleTableTh2,children:"날짜"}),(0,a.jsx)("th",{style:h.battleTableTh3,children:"우승자"}),(0,a.jsx)("th",{style:h.battleTableTh4,children:"MVP"}),(0,a.jsx)("th",{style:h.battleTableTh5,children:"저지"}),(0,a.jsx)("th",{style:h.battleTableTh6})]})}),(0,a.jsxs)("tbody",{children:[b.map(e=>(0,a.jsxs)("tr",{style:h.battleTableTr,children:[(0,a.jsx)("td",{style:h.battleTableTd1,children:e.battleName}),(0,a.jsx)("td",{style:h.battleTableTd2,children:e.date}),(0,a.jsx)("td",{style:h.battleTableTd3,children:e.winner.join(", ")}),(0,a.jsx)("td",{style:h.battleTableTd4,children:e.mvp.join(", ")}),(0,a.jsx)("td",{style:h.battleTableTd5,children:e.judges.join(", ")}),(0,a.jsx)("td",{style:h.battleTableTd6,children:e.youtube&&(0,a.jsx)("button",{onClick:()=>{window.open(e.youtube,"_blank","noopener,noreferrer")},style:h.youtubeButton,children:"\uD83D\uDD17"})})]},e._id)),Array.from({length:Math.max(0,10-b.length)}).map((e,t)=>(0,a.jsx)("tr",{style:h.emptyRow,children:(0,a.jsx)("td",{colSpan:6})},"empty-".concat(t)))]})]})}),d>1&&(0,a.jsx)("div",{style:h.pagination,children:Array.from({length:d},(e,t)=>(0,a.jsx)("button",{style:{...h.pageButton,...l===t+1?h.pageButtonActive:{}},onClick:()=>s(t+1),children:t+1},t+1))})]})},h={totalContainer:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"url('/main_image.jpg') no-repeat center center fixed",backgroundSize:"cover",color:"white",position:"relative"},overlayBox:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",zIndex:1},titleContainer:{width:"100%",padding:"20px 0",alignItems:"center",justifyContent:"center",textAlign:"center",zIndex:10,position:"absolute",top:"60px",display:"flex",flexDirection:"column"},imageWrapper:{position:"relative",width:"81px",height:"38px"},titleImage:{objectFit:"contain"},titleText:{},tableContainer:{zIndex:10,position:"absolute",top:"220px",width:"90%",minWidth:"800px",height:"550px"},battleTable:{width:"100%",height:"100%",padding:"20px 30px",backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(5px)",borderCollapse:"separate"},battleTableThead:{color:"#039CE0",fontSize:"1rem",textAlign:"left"},battleTableTr:{height:"50px"},battleTableTh1:{width:"25%"},battleTableTd1:{width:"25%"},battleTableTh2:{width:"10%"},battleTableTd2:{width:"10%"},battleTableTh3:{width:"15%"},battleTableTd3:{width:"15%"},battleTableTh4:{width:"15%"},battleTableTd4:{width:"15%"},battleTableTh5:{width:"20%"},battleTableTd5:{width:"20%"},battleTableTh6:{width:"5%",textAlign:"center"},battleTableTd6:{width:"5%",textAlign:"center"},emptyRow:{height:"50px"},pagination:{zIndex:10,position:"absolute",top:"870px"},pageButton:{width:"20px",height:"20px",color:"white",backgroundColor:"transparent",border:"none",cursor:"pointer",position:"relative"},pageButtonActive:{fontWeight:"bold"},youtubeButton:{background:"transparent",border:"none",cursor:"pointer"}}},8715:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});var a=l(5155);l(2115);var n=l(8173),i=l.n(n),r=l(6046),o=l(5565);let s=()=>{let e=(0,r.usePathname)(),t={textDecoration:"none",color:"white",fontSize:"1rem",padding:"0px 15px",lineHeight:"60px"},l={backgroundColor:"rgba(3,156,224,0.2)",borderBottom:"3px solid #DD077D",fontWeight:"bold",color:"#039CE0"};return(0,a.jsxs)("header",{style:{zIndex:10,top:0,left:0,width:"100%",height:"60px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",position:"fixed"},children:[(0,a.jsx)("div",{children:(0,a.jsx)(i(),{href:"/",style:{fontSize:"1.2rem",textDecoration:"none",color:"white",padding:"8px 12px",borderRadius:"5px",transition:"background 0.3s"},children:(0,a.jsx)(o.default,{src:"/header_logo.png",alt:"Logo",width:137,height:20})})}),(0,a.jsxs)("nav",{style:{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"20px"},children:[(0,a.jsx)(i(),{href:"/winners",style:"/winners"===e?{...t,...l}:t,children:"역대 우승자"}),(0,a.jsx)(i(),{href:"/performances",style:"/performances"===e?{...t,...l}:t,children:"역대 공연"}),(0,a.jsx)(i(),{href:"/hall-of-fame",style:"/hall-of-fame"===e?{...t,...l}:t,children:"명예의 전당"}),(0,a.jsx)(i(),{href:"/lunatic-wiki",style:"/lunatic-wiki"===e?{...t,...l}:t,children:"루나틱 위키"})]}),(0,a.jsxs)("div",{style:{position:"absolute",left:"95%",transform:"translateX(-95%)",display:"flex",gap:"20px"},children:[(0,a.jsx)("a",{href:"https://www.youtube.com/@RealLunaTV",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"},children:(0,a.jsx)(o.default,{src:"/header_youtube.png",alt:"YouTube",width:28,height:20})}),(0,a.jsx)("a",{href:"https://www.instagram.com/lunatic_street/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"},children:(0,a.jsx)(o.default,{src:"/header_insta.png",alt:"Instagram",width:28,height:28})})]})]})}},5370:(e,t,l)=>{"use strict";l.d(t,{Bx:()=>r,Cj:()=>n,Mj:()=>i,fR:()=>o,gm:()=>s});let a="https://lunatic-back.onrender.com";async function n(){let e=await fetch("".concat(a,"/battles"));if(!e.ok)throw Error("배틀 데이터를 불러오는 데 실패했습니다.");return e.json()}async function i(){let e=await fetch("".concat(a,"/performances"));if(!e.ok)throw Error("공연 데이터를 불러오는 데 실패했습니다.");return e.json()}async function r(){let e=await fetch("${API_BASE_URL}/hall-of-fame/winners");return await e.json()}async function o(){let e=await fetch("".concat(a,"/hall-of-fame/judges"));return await e.json()}async function s(){let e=await fetch("".concat(a,"/hall-of-fame/performers"));return await e.json()}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,441,517,358],()=>t(8009)),_N_E=e.O()}]);