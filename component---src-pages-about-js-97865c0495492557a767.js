(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("dI71"),r=a("q1tI"),o=a.n(r),i=a("TSYQ"),l=a.n(i),c=a("Ni3B"),s=a("B4h3"),m=a("Qs7Y"),d=a("dntC"),p=a("CcRw"),u=a("wEcs"),g=a("EgnG"),f=a("746C"),h=a("7nfP");let E=function(e){function t(t){var a;return(a=e.call(this,t)||this).startSlideshow=()=>{a.slideInterval=setInterval(()=>{a.setState(e=>({currentPhotoIndex:(e.currentPhotoIndex+1)%4}))},2e3)},a.stopSlideshow=()=>{a.slideInterval&&clearInterval(a.slideInterval)},a.enter=()=>{if(!a.element)return;const{energy:e}=a.props;return Object(g.a)({targets:a.element,easing:"easeOutCubic",translateY:[-100,0],opacity:[0,1],duration:e.duration.enter}).finished},a.exit=()=>{if(!a.element)return;const{energy:e}=a.props;return Object(g.a)({targets:a.element,easing:"easeOutCubic",translateY:[0,100],opacity:[1,0],duration:e.duration.exit}).finished},a.handlePhotoClick=e=>{console.log("Photo clicked:",e),a.setState({currentPhotoIndex:e})},a.handlePhotoHover=e=>{console.log("Photo hover state:",e),console.log("Current selected photo:",a.state.currentPhotoIndex)},a.state={showContent:!1,currentPhotoIndex:0,isHovering:!1},a.slideInterval=null,a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({showContent:!0}),this.startSlideshow()},a.componentWillUnmount=function(){this.element&&g.a.remove(this.element),this.stopSlideshow()},a.render=function(){const{classes:e,theme:t,sounds:a}=this.props,{showContent:n,currentPhotoIndex:r,isHovering:i}=this.state;return o.a.createElement(s.a,null,o.a.createElement("div",{className:e.root,ref:e=>this.element=e},o.a.createElement(p.a,{animation:{show:n}},o.a.createElement("h1",null,o.a.createElement(m.a,null,"Lalith Kumar")),o.a.createElement("div",{className:e.introSection},o.a.createElement("div",{className:e.introContent},o.a.createElement("div",{className:e.intro},o.a.createElement(m.a,null,"I am an extremely motivated and hardworking individual with a passion for cybersecurity. I possess strong technical and analytical skills that are essential for performing penetration testing and vulnerability assessments.")),o.a.createElement(m.a,{className:e.clickText},"[ hover_to_decode ]")),o.a.createElement("div",{className:e.photoSection,onMouseEnter:()=>this.setState({isHovering:!0}),onMouseLeave:()=>this.setState({isHovering:!1})},[{src:"/images/me.png",alt:"Lalith Kumar"},{src:"/images/me2.png",alt:"Lalith Kumar Alt 1"},{src:"/images/me3.png",alt:"Lalith Kumar Alt 2"},{src:"/images/meLifting.png",alt:"Lalith Kumar Lifting"}].map((t,n)=>o.a.createElement("div",{key:n,className:l()(e.photoContainer,{active:!i&&n===r,["position"+n]:i}),onClick:()=>{this.handlePhotoClick(n),a.hover&&a.hover.play()}},o.a.createElement("img",{src:t.src,alt:t.alt,className:e.photo}),o.a.createElement("div",{className:e.scanline}))))),o.a.createElement("h2",null,o.a.createElement(m.a,null,"Contact")),o.a.createElement("div",{className:e.contactGrid},o.a.createElement("div",{className:e.contactItem},o.a.createElement("i",{className:"mdi mdi-email"}),o.a.createElement("div",null,o.a.createElement(m.a,null,"lalithkumar01010@gmail.com (RIP inbox)"),o.a.createElement(m.a,null," "),o.a.createElement("span",{role:"img","aria-label":"skull"},"💀"))),o.a.createElement("div",{className:e.contactItem},o.a.createElement("i",{className:"mdi mdi-web"}),o.a.createElement(m.a,null,"lexilominite.com"))),o.a.createElement("h2",null,o.a.createElement(m.a,null,"Certifications")),o.a.createElement("div",{className:e.certificationsGrid},o.a.createElement(u.a,null,o.a.createElement(d.a,{href:"/certifications#cert-oscp",className:e.certificationItem,onMouseEnter:()=>a.hover.play()},o.a.createElement("div",{className:e.certIcon},o.a.createElement("img",{src:"/images/OSCP_Logo.png",alt:"OSCP",className:e.certLogo})),o.a.createElement("div",{className:e.certInfo},o.a.createElement("div",{className:e.certTitle},o.a.createElement(m.a,null,"OFFENSIVE SECURITY CERTIFIED PROFESSIONAL (OSCP)")),o.a.createElement("div",{className:e.certDate},o.a.createElement(m.a,null,"FEB 2024"))))),o.a.createElement(u.a,null,o.a.createElement(d.a,{href:"/certifications#cert-crtp",className:e.certificationItem,onMouseEnter:()=>a.hover.play()},o.a.createElement("div",{className:e.certIcon},o.a.createElement("img",{src:"/images/crtp_logo.jpeg",alt:"CRTP",className:e.certLogo})),o.a.createElement("div",{className:e.certInfo},o.a.createElement(m.a,null,"CERTIFIED RED TEAM PROFESSIONAL (CRTP)"),o.a.createElement("span",{className:e.certDate},"MAY 2022")))),o.a.createElement(u.a,null,o.a.createElement(d.a,{href:"/certifications#cert-ecppt",className:e.certificationItem,onMouseEnter:()=>a.hover.play()},o.a.createElement("div",{className:e.certIcon},o.a.createElement("img",{src:"/images/ecpptv2_logo.jpeg",alt:"eCPPTv2",className:e.certLogo})),o.a.createElement("div",{className:e.certInfo},o.a.createElement(m.a,null,"ELEARNSECURITY CERTIFIED PROFESSIONAL PENETRATION TESTER (eCPPTv2)"),o.a.createElement("span",{className:e.certDate},"NOV 2021")))),o.a.createElement(u.a,null,o.a.createElement(d.a,{href:"/certifications#cert-ewpt",className:e.certificationItem,onMouseEnter:()=>a.hover.play()},o.a.createElement("div",{className:e.certIcon},o.a.createElement("img",{src:"/images/ewptv1_logo.jpeg",alt:"eWPT",className:e.certLogo})),o.a.createElement("div",{className:e.certInfo},o.a.createElement(m.a,null,"ELEARNSECURITY WEB APPLICATION PENETRATION TESTER (eWPT)"),o.a.createElement("span",{className:e.certDate},"DEC 2021")))),o.a.createElement(u.a,null,o.a.createElement(d.a,{href:"/certifications#cert-pnpt",className:e.certificationItem,onMouseEnter:()=>a.hover.play()},o.a.createElement("div",{className:e.certIcon},o.a.createElement("img",{src:"/images/pnpt_logo.png",alt:"PNPT",className:e.certLogo})),o.a.createElement("div",{className:e.certInfo},o.a.createElement(m.a,null,"PRACTICAL NETWORK PENETRATION TESTER (PNPT)"),o.a.createElement("span",{className:e.certDate},"JUL 2021")))),o.a.createElement(u.a,null,o.a.createElement(d.a,{href:"/certifications#cert-ejpt",className:e.certificationItem,onMouseEnter:()=>a.hover.play()},o.a.createElement("div",{className:e.certIcon},o.a.createElement("img",{src:"/images/ejptv1_logo.jpeg",alt:"eJPT",className:e.certLogo})),o.a.createElement("div",{className:e.certInfo},o.a.createElement(m.a,null,"ELEARNSECURITY JUNIOR PENETRATION TESTER (eJPT)"),o.a.createElement("span",{className:e.certDate},"APR 2021"))))),o.a.createElement("h2",null,o.a.createElement(m.a,null,"Skills")),o.a.createElement("div",{className:e.skillsGrid},["Penetration Testing","Ethical Hacking","Web Application Security","Network Security","Vulnerability Assessment","Report Writing"].map(t=>o.a.createElement("div",{key:t,className:e.skillItem},o.a.createElement(m.a,null,t)))),o.a.createElement("h2",null,o.a.createElement(m.a,null,"Experience")),o.a.createElement("div",{className:e.timeline},o.a.createElement("div",{className:e.timelineItem},o.a.createElement("div",{className:e.companyName},o.a.createElement(m.a,null,"Ernst & Young Global Delivery Services")),o.a.createElement("div",{className:e.roleTitle},o.a.createElement(m.a,null,"Security Consultant - Level 2")),o.a.createElement("div",{className:e.duration},o.a.createElement(m.a,null,"June 2024 - Present")),o.a.createElement("div",{className:e.roleDescription},o.a.createElement(m.a,null,"• Web Application and API Security Testing • Leading security assessment engagements • Developing custom security testing frameworks"))),o.a.createElement("div",{className:e.timelineItem},o.a.createElement("div",{className:e.companyName},o.a.createElement(m.a,null,"VIEH Group")),o.a.createElement("div",{className:e.roleTitle},o.a.createElement(m.a,null,"Team Leader & Jr Penetration Tester")),o.a.createElement("div",{className:e.duration},o.a.createElement(m.a,null,"Sep 2022 - May 2024"))),o.a.createElement("div",{className:e.timelineItem},o.a.createElement("div",{className:e.companyName},o.a.createElement(m.a,null,"Security Knock")),o.a.createElement("div",{className:e.roleTitle},o.a.createElement(m.a,null,"Cybersecurity Intern")),o.a.createElement("div",{className:e.duration},o.a.createElement(m.a,null,"May 2022 - July 2022"))),o.a.createElement("div",{className:e.timelineItem},o.a.createElement("div",{className:e.companyName},o.a.createElement(m.a,null,"Bug Claim")),o.a.createElement("div",{className:e.roleTitle},o.a.createElement(m.a,null,"Penetration Tester")),o.a.createElement("div",{className:e.duration},o.a.createElement(m.a,null,"Jul 2021 - Aug 2021")))),o.a.createElement("h2",null,o.a.createElement(m.a,null,"Education")),o.a.createElement("div",{className:e.educationContainer},[{year:"2024 - 2028",degree:"Bachelor of Science in Computer Science",institute:"BITS Pilani"},{year:"2021 - 2024",degree:"Diploma in Computer Engineering",institute:"Smt B Seetha Polytechnic"},{year:"2017 - 2020",degree:"10th Class",institute:"The Future Kid's School"}].map((t,a)=>o.a.createElement("div",{key:a,className:e.educationCard},o.a.createElement("div",{className:e.educationContent},o.a.createElement("div",{className:e.educationYear},o.a.createElement(m.a,null,t.year)),o.a.createElement("div",{className:e.educationDegree},o.a.createElement(m.a,null,t.degree)),o.a.createElement("div",{className:e.educationInstitute},o.a.createElement(m.a,null,t.institute)))))),o.a.createElement("h2",null,o.a.createElement(m.a,null,"Hobbies")),o.a.createElement("div",{className:e.hobbiesContainer},o.a.createElement("div",{className:e.skillsGrid},["Playing Chess","Reading Non-Fiction & Self Improvement","Working Out & Fitness"].map(t=>o.a.createElement("div",{key:t,className:e.hobbyItem},o.a.createElement(m.a,null,t))))))))},t}(o.a.PureComponent);E.displayName="About";t.default=Object(f.a)()(Object(h.a)()(Object(c.a)(e=>(e||(console.error("Theme is undefined in styles"),e={color:{primary:{dark:"#000000",main:"#333333",light:"#666666"},secondary:{dark:"#000000",main:"#333333",light:"#666666"},tertiary:{dark:"#000000",main:"#333333",light:"#666666"},background:{dark:"#000000",main:"#333333",light:"#666666"},text:{main:"#ffffff",dark:"#cccccc"}},typography:{fontFamily:{primary:"sans-serif",secondary:"monospace"}},animation:{time:250}}),{"@global":{"html, body":{cursor:"none","& *":{cursor:"none"}}},root:{position:"relative",padding:[20,20,30],maxWidth:1e3,margin:"0 auto","& h1":{margin:[0,0,20],fontSize:32},"& h2":{margin:[0,0,10],fontSize:24}},introSection:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:40,marginBottom:30,"@media (max-width: 768px)":{flexDirection:"column",alignItems:"center",gap:20}},introContent:{flex:1},intro:{marginBottom:20,fontSize:"1.1em",lineHeight:1.6,color:e.color.text.main},contactGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:20,marginBottom:30},contactItem:{display:"flex",alignItems:"center",gap:10,padding:15,backgroundColor:"rgba(0, 0, 0, 0.2)",border:"2px solid "+e.color.primary.main,boxShadow:`0 0 20px ${e.color.primary.main}33`,borderRadius:8,"& i":{fontSize:28,color:e.color.primary.main},"&:hover":{borderColor:e.color.primary.light,boxShadow:`0 0 30px ${e.color.primary.main}66`}},skillsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:20,marginBottom:30},skillItem:{position:"relative",padding:20,backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid "+e.color.tertiary.dark,borderRadius:4,transition:`all ${e.animation.time}ms ease-out`,"&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,border:"1px solid "+e.color.tertiary.main,borderRadius:4,transform:"rotate(0deg)",transition:`all ${e.animation.time}ms ease-out`},"&:hover":{transform:"translateY(-5px)",backgroundColor:"rgba(0, 0, 0, 0.5)",borderColor:e.color.tertiary.main,"&::before":{transform:"rotate(10deg)",borderColor:e.color.tertiary.light}}},timeline:{position:"relative",marginBottom:30,paddingLeft:30,"&::before":{content:'""',position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom, \n          ${e.color.primary.dark}00, \n          ${e.color.primary.main}, \n          ${e.color.primary.dark}00)`}},timelineItem:{position:"relative",marginBottom:20,padding:20,backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid "+e.color.primary.dark,borderRadius:4,"&::before":{content:'""',position:"absolute",left:-34,top:"50%",width:12,height:12,backgroundColor:e.color.background.main,border:"2px solid "+e.color.primary.main,borderRadius:"50%",transform:"translateY(-50%)",transition:`all ${e.animation.time}ms ease-out`},"&:hover":{borderColor:e.color.primary.main,"&::before":{backgroundColor:e.color.primary.main,boxShadow:"0 0 15px "+e.color.primary.main}},"& + &":{marginTop:30}},companyName:{fontSize:"1.2em",color:e.color.secondary.main,marginBottom:5},roleTitle:{opacity:.8},educationContainer:{display:"grid",gap:20,marginBottom:30},educationCard:{position:"relative",padding:25,backgroundColor:"rgba(0, 0, 0, 0.4)",background:"linear-gradient(135deg, \n        rgba(0,0,0,0.4) 0%,\n        rgba(0,0,0,0.2) 100%)",border:"1px solid "+e.color.secondary.dark,borderRadius:8,overflow:"hidden",transition:`all ${e.animation.time}ms ease-out`,"&::after":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",background:`linear-gradient(45deg, \n          ${e.color.secondary.main}11 25%, \n          transparent 25%, \n          transparent 75%, \n          ${e.color.secondary.main}11 75%)`,backgroundSize:"4px 4px",opacity:.5,transition:`all ${e.animation.time}ms ease-out`},"&:hover":{transform:"translateY(-5px) scale(1.02)",borderColor:e.color.secondary.main,boxShadow:`0 10px 30px -10px ${e.color.secondary.main}33`,"&::after":{opacity:.8,backgroundSize:"6px 6px"}}},educationYear:{color:e.color.secondary.main,marginBottom:5},educationDegree:{fontSize:"1.1em",marginBottom:5},educationInstitute:{opacity:.8},hobbiesContainer:{marginBottom:30},hobbyItem:{padding:[15,25],backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid "+e.color.tertiary.dark,borderRadius:25,textAlign:"center",transition:`all ${e.animation.time}ms ease-out`,position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:`linear-gradient(45deg, \n          ${e.color.tertiary.dark}11 25%, \n          transparent 25%, \n          transparent 75%, \n          ${e.color.tertiary.dark}11 75%)`,backgroundSize:"4px 4px",opacity:.5,transition:`all ${e.animation.time}ms ease-out`},"&:hover":{transform:"translateY(-3px) scale(1.02)",backgroundColor:"rgba(0, 0, 0, 0.5)",borderColor:e.color.tertiary.main,boxShadow:`0 0 20px ${e.color.tertiary.main}33`,"&::before":{opacity:.8,backgroundSize:"6px 6px"}}},certificationsGrid:{display:"flex",flexDirection:"column",gap:15,marginBottom:30},certificationItem:{display:"flex",alignItems:"center",gap:20,padding:20,backgroundColor:"rgba(0, 0, 0, 0.4)",border:"1px solid "+e.color.secondary.main,borderLeft:"4px solid "+e.color.secondary.main,borderRadius:4,transition:`all ${e.animation.time}ms ease-out`,textDecoration:"none","&:hover":{transform:"translateX(10px)",backgroundColor:"rgba(0, 0, 0, 0.6)",borderLeft:"8px solid "+e.color.secondary.light,"& $certLogo":{transform:"scale(1.1) rotate(5deg)",borderColor:e.color.secondary.light}}},certIcon:{flexShrink:0,width:60,height:60,display:"flex",alignItems:"center",justifyContent:"center"},certLogo:{width:"100%",height:"100%",objectFit:"contain",padding:5,borderRadius:4,backgroundColor:"rgba(0, 0, 0, 0.2)",border:"1px solid "+e.color.tertiary.main,transition:`all ${e.animation.time}ms ease-out`},certInfo:{flex:1,display:"flex",flexDirection:"column",gap:5},certTitle:{color:e.color.text.main,marginBottom:4},certDate:{fontSize:"0.9em",color:e.color.secondary.main,opacity:.8},duration:{fontSize:"0.9em",color:e.color.tertiary.main,marginTop:5,opacity:.8},roleDescription:{marginTop:10,paddingTop:10,borderTop:`1px solid ${e.color.primary.dark}33`,fontSize:"0.95em",lineHeight:1.6,"& ul":{margin:[10,0,0],paddingLeft:20},"& li":{marginBottom:5,"&:last-child":{marginBottom:0}}},clickText:{marginTop:10,color:e.color.secondary.main,opacity:.7,animation:"$blink 1.5s ease-in-out infinite",fontFamily:e.typography.secondary},photoSection:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"2rem",position:"relative",width:250,height:250,"&:hover":{"& $photoContainer":{transform:"scale(0.5)","&.position0":{transform:"translate(-50%, -50%) scale(0.5)"},"&.position1":{transform:"translate(50%, -50%) scale(0.5)"},"&.position2":{transform:"translate(-50%, 50%) scale(0.5)"},"&.position3":{transform:"translate(50%, 50%) scale(0.5)"}}}},photoContainer:{width:"100%",height:"100%",position:"absolute",overflow:"hidden",borderRadius:"8px",border:"2px solid "+e.color.secondary.main,boxShadow:`0 0 20px ${e.color.secondary.main}33`,backgroundColor:e.color.background.dark,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",opacity:0,"&.active":{opacity:1,transform:"scale(1)",zIndex:2},"&:hover":{borderColor:e.color.secondary.light,boxShadow:`0 0 30px ${e.color.secondary.main}66`,zIndex:3,"& $photo":{transform:"scale(1.1)"}},"&.position0":{top:"50%",left:"50%",transform:"translate(-50%, -50%) scale(1)"},"&.position1":{top:"50%",left:"50%",transform:"translate(50%, -50%) scale(1)"},"&.position2":{top:"50%",left:"50%",transform:"translate(-50%, 50%) scale(1)"},"&.position3":{top:"50%",left:"50%",transform:"translate(50%, 50%) scale(1)"}},photo:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.5s ease",display:"block",backfaceVisibility:"hidden",transform:"scale(1.01)"},scanline:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`linear-gradient(\n        to bottom,\n        transparent 0%,\n        ${e.color.secondary.main}22 50%,\n        transparent 100%\n      )`,backgroundSize:"100% 4px",animation:"$scan 3s linear infinite",opacity:.5,zIndex:2,pointerEvents:"none"},"@keyframes blink":{"0%, 100%":{opacity:.3},"50%":{opacity:.8}},"@keyframes scan":{"0%":{transform:"translateY(-100%)"},"100%":{transform:"translateY(100%)"}},"@media (max-width: 480px)":{root:{padding:[10,10,20]},intro:{fontSize:"0.9em",marginBottom:20},contactGrid:{gridTemplateColumns:"1fr",gap:15},contactItem:{padding:12,"& i":{fontSize:20}},skillsGrid:{gridTemplateColumns:"1fr",gap:10},skillItem:{padding:12,fontSize:"0.9em"},timeline:{paddingLeft:20,"&::before":{left:10}},timelineItem:{padding:15,"&::before":{left:-24,width:10,height:10}},companyName:{fontSize:"1.1em"},roleTitle:{fontSize:"0.9em"},roleDescription:{fontSize:"0.85em",paddingTop:8,marginTop:8},educationContainer:{gap:15},educationCard:{padding:15,"&:hover":{transform:"translateY(-3px) scale(1.01)"}},educationYear:{fontSize:"0.9em"},educationDegree:{fontSize:"1em"},educationInstitute:{fontSize:"0.9em"},hobbiesContainer:{marginBottom:20},hobbyItem:{padding:[10,15],fontSize:"0.9em"},certificationsGrid:{gap:10},certificationItem:{padding:15,flexDirection:"column",alignItems:"flex-start",gap:10,"&:hover":{transform:"translateX(5px)"}},certIcon:{width:50,height:50},certInfo:{gap:3},certTitle:{fontSize:"0.9em",marginBottom:2},certDate:{fontSize:"0.8em"}},"@media (min-width: 481px) and (max-width: 768px)":{root:{padding:[15,15,25]},contactGrid:{gridTemplateColumns:"repeat(2, 1fr)",gap:15},skillsGrid:{gridTemplateColumns:"repeat(2, 1fr)",gap:15},timeline:{paddingLeft:25},timelineItem:{padding:18},educationContainer:{gap:18},educationCard:{padding:20},certificationsGrid:{gap:12},certificationItem:{padding:18}},"@media (min-width: 769px) and (max-width: 1024px)":{root:{padding:[20,20,30]},skillsGrid:{gridTemplateColumns:"repeat(3, 1fr)"},timeline:{paddingLeft:30},certificationsGrid:{gap:15}},"@media (min-width: 1025px) and (max-width: 1200px)":{root:{maxWidth:900},skillsGrid:{gridTemplateColumns:"repeat(3, 1fr)"}},"@media (min-width: 1201px)":{root:{maxWidth:1e3},skillsGrid:{gridTemplateColumns:"repeat(3, 1fr)"}}}))(E)))},B4h3:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("Ni3B"),r=a("dI71"),o=a("q1tI"),i=a.n(o),l=a("TSYQ"),c=a.n(l),s=a("m/Yd");let m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=e=>{let{detail:{isInternal:a}}=e;a&&t.element.exit()},t}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},a.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},a.render=function(){const{theme:e,classes:t,className:a,children:n,...r}=this.props;return i.a.createElement(s.a,Object.assign({className:c()(t.root,a),node:"main",ref:e=>this.element=e},r),i.a.createElement("div",{className:t.frame}),i.a.createElement("div",{className:t.content},n))},t}(i.a.Component);m.displayName="Main";var d=a("+IKJ");const p=Object(n.a)(e=>({root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(d.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}))(m)},"m/Yd":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("Ni3B"),r=a("746C"),o=a("7nfP"),i=a("dI71"),l=a("q1tI"),c=a.n(l),s=a("TSYQ"),m=a.n(s),d=a("EgnG");let p=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){const{sounds:e}=this.props;this.unanimate(),e.fade&&e.fade.stop()},a.enter=function(){const{energy:e,sounds:t}=this.props,a=e.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},a.exit=function(){const{energy:e,sounds:t}=this.props,a=e.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},a.animate=function(e){this.unanimate(),Object(d.a)({targets:this.element,easing:"easeOutCubic",...e})},a.unanimate=function(){d.a.remove(this.element)},a.render=function(){const{theme:e,classes:t,energy:a,audio:n,sounds:r,className:o,children:i,node:l,...s}=this.props;return c.a.createElement(l,{ref:e=>this.element=e,className:m()(t.root,o),...s},i)},t}(c.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};const u=Object(r.a)()(Object(n.a)(e=>({root:{display:"inline-block",opacity:0}}))(Object(o.a)()(p)))}}]);
//# sourceMappingURL=component---src-pages-about-js-97865c0495492557a767.js.map