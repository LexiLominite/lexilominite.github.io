(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{B4h3:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a("2z+b"),n=a("dI71"),o=a("q1tI"),r=a.n(o),s=a("TSYQ"),c=a.n(s),l=a("m/Yd");let d=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).onRouteChangeStart=e=>{let{detail:{isInternal:a}}=e;a&&t.element.exit()},t}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},a.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},a.render=function(){const{theme:e,classes:t,className:a,children:i,...n}=this.props;return r.a.createElement(l.a,Object.assign({className:c()(t.root,a),node:"main",ref:e=>this.element=e},n),r.a.createElement("div",{className:t.frame}),r.a.createElement("div",{className:t.content},i))},t}(r.a.Component);d.displayName="Main";var m=a("+IKJ");const p=Object(i.a)(e=>({root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(m.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}))(d)},euMa:function(e,t,a){"use strict";a.r(t);var i=a("dI71"),n=a("q1tI"),o=a.n(n),r=a("2z+b"),s=a("B4h3"),c=a("Qs7Y"),l=a("m/Yd"),d=a("CcRw"),m=a("746C"),p=a("7nfP"),g=a("TSYQ"),u=a.n(g),h=a("EgnG"),f=a("ww3E"),E=a("KPL4");let v=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).handleKeyDown=e=>{"Escape"===e.key&&t.props.onClose()},t.handleBackgroundClick=e=>{e.target===e.currentTarget&&t.props.onClose()},t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("keydown",this.handleKeyDown),this.enter()},a.componentWillUnmount=function(){document.removeEventListener("keydown",this.handleKeyDown)},a.enter=function(){const{energy:e}=this.props,t=this.svgElement.querySelectorAll("path");h.a.set(t,{strokeDasharray:E.a}),Object(h.a)({targets:t,strokeDashoffset:[E.a,0],easing:"linear",duration:e.duration.enter}),Object(h.a)({targets:this.element,opacity:[0,1],scale:[.9,1],duration:e.duration.enter,easing:"easeOutCubic"})},a.exit=function(){const{energy:e}=this.props,t=this.svgElement.querySelectorAll("path");Object(h.a)({targets:t,strokeDashoffset:[0,E.a],easing:"linear",duration:e.duration.exit}),Object(h.a)({targets:this.element,opacity:[1,0],scale:[1,.9],duration:e.duration.exit,easing:"easeOutCubic"})},a.render=function(){const{theme:e,classes:t,energy:a,audio:i,sounds:n,className:r,certificate:s,onClose:l,...m}=this.props;return o.a.createElement("div",Object.assign({className:u()(t.root,r),onClick:this.handleBackgroundClick},m),o.a.createElement("div",{className:t.popup,ref:e=>this.element=e},o.a.createElement("div",{className:t.frame},o.a.createElement("svg",{className:t.svg,ref:e=>this.svgElement=e,viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{className:t.path,d:"M0,10 L0,0 L10,0"}),o.a.createElement("path",{className:t.path,d:"M90,0 L100,0 L100,10"}),o.a.createElement("path",{className:t.path,d:"M10,100 L0,100 L0,90"}),o.a.createElement("path",{className:t.path,d:"M100,90 L100,100 L90,100"}))),o.a.createElement("div",{className:t.content},o.a.createElement(d.a,null,o.a.createElement("div",{className:t.header},o.a.createElement(c.a,{audio:i,animation:{animate:a.animate}},s.title)),o.a.createElement("div",{className:t.body},o.a.createElement("img",{src:s.image,alt:s.title,className:t.image})),o.a.createElement("div",{className:t.footer},o.a.createElement(f.a,{className:t.button,audio:i,animation:{animate:a.animate},onClick:l},"Close"))))))},t}(o.a.Component);v.displayName="CertificatePopup";const b=Object(m.a)()(Object(r.a)(e=>({root:{position:"fixed",left:0,top:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:1e3},popup:{position:"relative",width:"95%",maxWidth:1200,maxHeight:"95vh",backgroundColor:e.color.background.main,border:"1px solid "+e.color.tertiary.main,borderRadius:8,overflow:"hidden"},frame:{position:"absolute",width:"100%",height:"100%"},svg:{display:"block",width:"100%",height:"100%"},path:{fill:"none",stroke:e.color.tertiary.main,strokeWidth:2,vectorEffect:"non-scaling-stroke"},content:{position:"relative",padding:30,maxHeight:"95vh",overflow:"auto"},header:{marginBottom:30,textAlign:"center","& h1":{margin:0,fontSize:28,color:e.color.heading.main,textShadow:"0 0 5px "+e.color.secondary.main}},body:{marginBottom:30,textAlign:"center"},image:{width:"auto",maxWidth:"100%",maxHeight:"70vh",marginBottom:30,border:"2px solid "+e.color.tertiary.main,borderRadius:4,boxShadow:"0 0 20px "+e.color.secondary.dark},footer:{position:"sticky",bottom:0,left:0,right:0,padding:20,textAlign:"center",backgroundColor:e.color.background.main,borderTop:"1px solid "+e.color.tertiary.main},button:{display:"inline-block"},"@media screen and (min-width: 768px)":{content:{padding:50}}}))(Object(p.a)()(v)));let y=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).state={selectedCertificate:null},t.certificates=[{id:"oscp",title:"OFFENSIVE SECURITY CERTIFIED PROFESSIONAL (OSCP)",issuer:"OFFSEC (FEB 2024)",image:"/images/oscp_cert.jpeg",logo:"/images/OSCP_Logo.png",details:{intro:"Advanced penetration testing certification covering:",points:["Network Penetration Testing","Web Application Security","Buffer Overflow Exploitation","Privilege Escalation","Active Directory Attacks","Client-Side Attacks","Report Writing"],description:"Successfully completed the OSCP certification with a focus on hands-on penetration testing skills. \n          The certification involved exploiting multiple machines in a lab environment and passing a 24-hour practical exam.\n          Key achievements include mastering various exploitation techniques, developing custom scripts, and documenting findings."}},{id:"crtp",title:"CERTIFIED RED TEAM PROFESSIONAL (CRTP)",issuer:"PENTESTER ACADEMY (MAY 2022)",image:"/images/CRTP_cert.png",logo:"/images/crtp_logo.jpeg",details:{intro:"Advanced Active Directory security certification covering:",points:["Active Directory Penetration Testing","Domain Privilege Escalation","Lateral Movement Techniques","Defense Evasion"]}},{id:"ecppt",title:"ELEARNSECURITY CERTIFIED PROFESSIONAL PENETRATION TESTER (eCPPTv2)",issuer:"ELEARNSECURITY (NOV 2021)",image:"/images/ecppt_cert.png",logo:"/images/ecpptv2_logo.jpeg",details:{intro:"Professional-level penetration testing certification including:",points:["Advanced Exploitation Techniques","Post-Exploitation & Pivoting","Web Application Security","Report Writing"]}},{id:"ewpt",title:"ELEARNSECURITY WEB APPLICATION PENETRATION TESTER (eWPT)",issuer:"ELEARNSECURITY (DEC 2021)",image:"/images/ewpt_cert.png",logo:"/images/ewptv1_logo.jpeg",details:{intro:"Specialized web application security certification covering:",points:["Web Application Vulnerabilities","Authentication & Authorization","Client-Side Attacks","Advanced Exploitation"]}},{id:"pnpt",title:"PRACTICAL NETWORK PENETRATION TESTER (PNPT)",issuer:"TCM SECURITY (JUL 2021)",image:"/images/pnpt_cert.png",logo:"/images/pnpt_logo.png",details:{intro:"Hands-on network penetration testing certification (Retired in 2022):",points:["External & Internal Network Penetration Testing","Active Directory Exploitation","Advanced Report Writing","OSINT & Information Gathering","Professional Report Preparation"],description:"Note: This certification was retired in 2022 but represents practical experience in network penetration testing and reporting."}},{id:"ejpt",title:"ELEARNSECURITY JUNIOR PENETRATION TESTER (eJPT)",issuer:"ELEARNSECURITY (APR 2021)",image:"/images/ejpt_cert.png",logo:"/images/ejptv1_logo.jpeg",details:{intro:"Entry-level penetration testing certification covering:",points:["Network Penetration Testing Basics","Information Gathering Techniques","Web Application Testing Fundamentals","Basic Exploitation Methods","Traffic Analysis"]}}],t.onCertificateClick=e=>{t.setState({selectedCertificate:e})},t.onClosePopup=()=>{t.setState({selectedCertificate:null})},t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(window.location.hash){const e=window.location.hash.substring(1),t=document.getElementById(e);t&&setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"center"}),t.classList.add(this.props.classes.highlighted),setTimeout(()=>{t.classList.remove(this.props.classes.highlighted)},2e3)},500)}},a.render=function(){const{classes:e}=this.props,{selectedCertificate:t}=this.state;return o.a.createElement(s.a,{className:e.root},o.a.createElement(d.a,{stagger:!0},o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(c.a,null,"Professional Certifications"))),this.certificates.map(t=>o.a.createElement("div",{key:t.id,className:e.certification,id:"cert-"+t.id},o.a.createElement(l.a,null,o.a.createElement("div",{className:e.certContent,onClick:()=>this.onCertificateClick(t)},o.a.createElement("div",{className:e.certHeader},t.logo&&o.a.createElement("img",{src:t.logo,alt:t.title+" Logo",className:e.certLogo}),o.a.createElement("div",{className:e.certTitles},o.a.createElement("h2",null,o.a.createElement(c.a,null,t.title)),o.a.createElement("p",null,o.a.createElement(c.a,null,t.issuer)))),o.a.createElement("div",{className:e.details},o.a.createElement(c.a,null,t.details.intro),o.a.createElement("ul",null,t.details.points.map((e,t)=>o.a.createElement("li",{key:t},o.a.createElement(c.a,null,e))))))))))),t&&o.a.createElement(b,{certificate:t,onClose:this.onClosePopup}))},t}(o.a.Component);t.default=Object(r.a)(e=>({root:{position:"relative",padding:[20,20,30]},certification:{marginBottom:40,"&:last-child":{marginBottom:0}},certContent:{cursor:"pointer",padding:20,border:"1px solid "+e.color.tertiary.main,backgroundColor:"rgba(0, 0, 0, 0.3)",transition:`all ${e.animation.time}ms ease-out`,borderRadius:4,"&:hover":{borderColor:e.color.secondary.main,backgroundColor:"rgba(0, 0, 0, 0.5)",transform:"translateY(-2px)"}},details:{marginTop:20},highlighted:{animation:"$highlight 2s ease-out"},"@keyframes highlight":{"0%":{transform:"scale(1)",borderColor:e.color.secondary.main},"50%":{transform:"scale(1.02)",borderColor:e.color.tertiary.main},"100%":{transform:"scale(1)",borderColor:e.color.tertiary.main}},certHeader:{display:"flex",alignItems:"center",gap:20,marginBottom:15},certLogo:{width:60,height:60,objectFit:"contain",borderRadius:4,padding:5,backgroundColor:"rgba(0, 0, 0, 0.2)",border:"1px solid "+e.color.tertiary.main,transition:`all ${e.animation.time}ms ease-out`,"&:hover":{transform:"scale(1.05)",borderColor:e.color.secondary.main,backgroundColor:"rgba(0, 0, 0, 0.4)"}},certTitles:{flex:1,"& h2":{margin:0,marginBottom:5},"& p":{margin:0,opacity:.8}},"@media (max-width: 480px)":{root:{padding:[10,10,20]},certContent:{padding:15},certHeader:{flexDirection:"column",alignItems:"flex-start",gap:10},certLogo:{width:50,height:50}},"@media (min-width: 481px) and (max-width: 768px)":{root:{padding:[15,15,25]}},"@media (min-width: 769px) and (max-width: 1024px)":{root:{padding:[20,20,30]}}}))(y)},"m/Yd":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var i=a("2z+b"),n=a("746C"),o=a("7nfP"),r=a("dI71"),s=a("q1tI"),c=a.n(s),l=a("TSYQ"),d=a.n(l),m=a("EgnG");let p=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){const{sounds:e}=this.props;this.unanimate(),e.fade&&e.fade.stop()},a.enter=function(){const{energy:e,sounds:t}=this.props,a=e.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},a.exit=function(){const{energy:e,sounds:t}=this.props,a=e.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},a.animate=function(e){this.unanimate(),Object(m.a)({targets:this.element,easing:"easeOutCubic",...e})},a.unanimate=function(){m.a.remove(this.element)},a.render=function(){const{theme:e,classes:t,energy:a,audio:i,sounds:n,className:o,children:r,node:s,...l}=this.props;return c.a.createElement(s,{ref:e=>this.element=e,className:d()(t.root,o),...l},r)},t}(c.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};const g=Object(n.a)()(Object(i.a)(e=>({root:{display:"inline-block",opacity:0}}))(Object(o.a)()(p)))}}]);
//# sourceMappingURL=component---src-pages-certifications-js-f56143fc7cbced3a7158.js.map