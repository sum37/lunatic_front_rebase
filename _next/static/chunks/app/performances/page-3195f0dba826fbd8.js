(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{4190:(e,t,r)=>{Promise.resolve().then(r.bind(r,7637))},7637:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(5155),a=r(2115),l=r(8715),o=r(5565),i=r(5370);let s=function(){let[e,t]=(0,a.useState)([]),[r,s]=(0,a.useState)(1);(0,a.useEffect)(()=>{(async()=>{t(await (0,i.Mj)())})()},[]);let d=Math.ceil(e.length/10),h=(r-1)*10,p=e.slice(h,h+10);return(0,n.jsxs)("div",{style:c.totalContainer,children:[(0,n.jsx)(l.A,{}),(0,n.jsxs)("div",{style:c.titleContainer,children:[(0,n.jsx)(o.default,{style:c.titleImageStage,alt:"Trophy",src:"/lunatic_front_rebase/stage.png"}),(0,n.jsx)("h1",{style:c.titleText,children:"역대 공연"})]}),(0,n.jsx)("div",{style:c.tableContainer,children:(0,n.jsxs)("table",{style:c.performanceTable,children:[(0,n.jsx)("thead",{style:c.performanceTableThead,children:(0,n.jsxs)("tr",{style:c.performanceTableTr,children:[(0,n.jsx)("th",{style:c.performanceTableTh1,children:"공연팀명"}),(0,n.jsx)("th",{style:c.performanceTableTh2,children:"장르"}),(0,n.jsx)("th",{style:c.performanceTableTh3,children:"시즌"}),(0,n.jsx)("th",{style:c.performanceTableTh4,children:"팀원"}),(0,n.jsx)("th",{style:c.performanceTableTh5})]})}),(0,n.jsxs)("tbody",{children:[p.map(e=>(0,n.jsxs)("tr",{style:c.performanceTableTr,children:[(0,n.jsx)("td",{style:c.performanceTableTd1,children:e.teamName}),(0,n.jsx)("td",{style:c.performanceTableTd2,children:e.genre.join(", ")}),(0,n.jsx)("td",{style:c.performanceTableTd3,children:e.season}),(0,n.jsx)("td",{style:c.performanceTableTd4,children:e.teamMembers.join(", ")}),(0,n.jsx)("td",{style:c.performanceTableTd5,children:e.youtube&&(0,n.jsx)("button",{onClick:()=>{window.open(e.youtube,"_blank","noopener,noreferrer")},style:c.youtubeButton,children:"\uD83D\uDD17"})})]},e._id)),Array.from({length:Math.max(0,10-p.length)}).map((e,t)=>(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:5})},"empty-".concat(t)))]})]})}),d>1&&(0,n.jsx)("div",{style:c.pagination,children:Array.from({length:d},(e,t)=>(0,n.jsx)("button",{style:{...c.pageButton,...r===t+1?c.pageButtonActive:{}},onClick:()=>s(t+1),children:t+1},t+1))}),(0,n.jsx)("div",{style:c.overlayBox})]})},c={totalContainer:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"url('/main_image.jpg') no-repeat center center fixed",backgroundSize:"cover",color:"white",position:"relative"},overlayBox:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",zIndex:1},titleContainer:{width:"100%",padding:"20px 0",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",zIndex:10,position:"absolute",top:"60px"},titleImageStage:{height:"61px",width:"100px"},tableContainer:{zIndex:10,position:"absolute",top:"220px",width:"90%",minWidth:"800px",height:"550px"},performanceTable:{width:"100%",height:"100%",padding:"20px 30px",backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(5px)",borderCollapse:"collapse"},performanceTableThead:{color:"#039CE0",fontSize:"1rem",textAlign:"left"},performanceTableTr:{height:"50px"},performanceTableTh1:{width:"30%"},performanceTableTd1:{width:"30%"},performanceTableTh2:{width:"10%"},performanceTableTd2:{width:"10%"},performanceTableTh3:{width:"10%"},performanceTableTd3:{width:"10%"},performanceTableTh4:{width:"45%"},performanceTableTd4:{width:"45%"},performanceTableTh5:{width:"10%"},performanceTableTd5:{width:"10%"},pagination:{zIndex:10,position:"absolute",top:"870px"},pageButton:{width:"20px",height:"20px",color:"white",backgroundColor:"transparent",border:"none",cursor:"pointer",position:"relative"},pageButtonActive:{fontWeight:"bold"},youtubeButton:{background:"transparent",border:"none",cursor:"pointer"}}},8715:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(5155);r(2115);var a=r(8173),l=r.n(a),o=r(6046),i=r(5565);let s=()=>{let e=(0,o.usePathname)(),t={textDecoration:"none",color:"white",fontSize:"1rem",padding:"0px 15px",lineHeight:"60px"},r={backgroundColor:"rgba(3,156,224,0.2)",borderBottom:"3px solid #DD077D",fontWeight:"bold",color:"#039CE0"};return(0,n.jsxs)("header",{style:{zIndex:10,top:0,left:0,width:"100%",height:"60px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",position:"fixed",backgroundColor:"yellow"},children:[(0,n.jsx)("div",{children:(0,n.jsx)(l(),{href:"/",style:{fontSize:"1.2rem",textDecoration:"none",color:"white",padding:"8px 12px",borderRadius:"5px",transition:"background 0.3s"},children:(0,n.jsx)(i.default,{src:"/header_logo.png",alt:"Logo",width:137,height:20})})}),(0,n.jsxs)("nav",{style:{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"20px"},children:[(0,n.jsx)(l(),{href:"/winners",style:"/winners"===e?{...t,...r}:t,children:"역대 우승자"}),(0,n.jsx)(l(),{href:"/performances",style:"/performances"===e?{...t,...r}:t,children:"역대 공연"}),(0,n.jsx)(l(),{href:"/hall-of-fame",style:"/hall-of-fame"===e?{...t,...r}:t,children:"명예의 전당"}),(0,n.jsx)(l(),{href:"/lunatic-wiki",style:"/lunatic-wiki"===e?{...t,...r}:t,children:"루나틱 위키"})]}),(0,n.jsxs)("div",{style:{position:"absolute",left:"95%",transform:"translateX(-95%)",display:"flex",gap:"20px"},children:[(0,n.jsx)("a",{href:"https://www.youtube.com/@RealLunaTV",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"},children:(0,n.jsx)(i.default,{src:"/header_youtube.png",alt:"YouTube",width:28,height:20})}),(0,n.jsx)("a",{href:"https://www.instagram.com/lunatic_street/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center"},children:(0,n.jsx)(i.default,{src:"/header_insta.png",alt:"Instagram",width:28,height:28})})]})]})}},5370:(e,t,r)=>{"use strict";r.d(t,{Bx:()=>o,Cj:()=>a,Mj:()=>l,fR:()=>i,gm:()=>s});let n="https://lunatic-back.onrender.com";async function a(){let e=await fetch("".concat(n,"/battles"));if(!e.ok)throw Error("배틀 데이터를 불러오는 데 실패했습니다.");return e.json()}async function l(){let e=await fetch("".concat(n,"/performances"));if(!e.ok)throw Error("공연 데이터를 불러오는 데 실패했습니다.");return e.json()}async function o(){let e=await fetch("${API_BASE_URL}/hall-of-fame/winners");return await e.json()}async function i(){let e=await fetch("".concat(n,"/hall-of-fame/judges"));return await e.json()}async function s(){let e=await fetch("".concat(n,"/hall-of-fame/performers"));return await e.json()}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,441,517,358],()=>t(4190)),_N_E=e.O()}]);