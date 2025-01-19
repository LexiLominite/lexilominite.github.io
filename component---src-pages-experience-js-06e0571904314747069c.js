(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{B4h3:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("2z+b"),l=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("TSYQ"),c=n.n(o),s=n("m/Yd");let u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=e=>{let{detail:{isInternal:n}}=e;n&&t.element.exit()},t}Object(l.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){const{theme:e,classes:t,className:n,children:a,...l}=this.props;return i.a.createElement(s.a,Object.assign({className:c()(t.root,n),node:"main",ref:e=>this.element=e},l),i.a.createElement("div",{className:t.frame}),i.a.createElement("div",{className:t.content},a))},t}(i.a.Component);u.displayName="Main";var m=n("+IKJ");const d=Object(a.a)(e=>({root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(m.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}))(u)},I4Ts:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),l=n("q1tI"),r=n.n(l),i=n("2z+b"),o=n("B4h3"),c=n("Qs7Y"),s=n("m/Yd"),u=n("CcRw");let m=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){const{classes:e}=this.props;return r.a.createElement(o.a,{className:e.root},r.a.createElement(u.a,{stagger:!0},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(c.a,null,"Professional Experience"))),r.a.createElement("div",{className:e.experience},r.a.createElement("h2",null,r.a.createElement(c.a,null,"Security Consultant - Level 2")),r.a.createElement("p",{className:e.role},r.a.createElement(c.a,null,"Ernst & Young Global Delivery Services (EY GDS)")),r.a.createElement("p",null,r.a.createElement(c.a,null,"June 2024 - Present")),r.a.createElement(s.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,null,"Conducted Web Application Penetration and API Penetration Testing")),r.a.createElement("li",null,r.a.createElement(c.a,null,"Led multiple security assessment engagements")),r.a.createElement("li",null,r.a.createElement(c.a,null,"Developed custom security testing frameworks"))))),r.a.createElement("div",{className:e.experience},r.a.createElement("h2",null,r.a.createElement(c.a,null,"Jr Penetration Tester Intern")),r.a.createElement("p",{className:e.role},r.a.createElement(c.a,null,"Security Knock")),r.a.createElement("p",null,r.a.createElement(c.a,null,"May 2022 - July 2022")),r.a.createElement(s.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,null,"Conducted penetration testing using tools like Burp Suite, Nmap, Metasploit")),r.a.createElement("li",null,r.a.createElement(c.a,null,"Identified and exploited security weaknesses")),r.a.createElement("li",null,r.a.createElement(c.a,null,"Researched emerging security trends and technologies"))))),r.a.createElement("div",{className:e.experience},r.a.createElement("h2",null,r.a.createElement(c.a,null,"Penetration Tester")),r.a.createElement("p",{className:e.role},r.a.createElement(c.a,null,"Bug Claim")),r.a.createElement("p",null,r.a.createElement(c.a,null,"Jul 2021 - Aug 2021")),r.a.createElement(s.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,null,"Participated in bug bounty programs")),r.a.createElement("li",null,r.a.createElement(c.a,null,"Reported security issues to various platforms")),r.a.createElement("li",null,r.a.createElement(c.a,null,"Utilized ethical hacking skills for vulnerability assessment"))))))))},t}(r.a.Component);t.default=Object(i.a)(e=>({root:{},experience:{marginBottom:30},role:{marginBottom:10}}))(m)},"m/Yd":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("2z+b"),l=n("746C"),r=n("7nfP"),i=n("dI71"),o=n("q1tI"),c=n.n(o),s=n("TSYQ"),u=n.n(s),m=n("EgnG");let d=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){const{sounds:e}=this.props;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){const{energy:e,sounds:t}=this.props,n=e.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},n.exit=function(){const{energy:e,sounds:t}=this.props,n=e.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},n.animate=function(e){this.unanimate(),Object(m.a)({targets:this.element,easing:"easeOutCubic",...e})},n.unanimate=function(){m.a.remove(this.element)},n.render=function(){const{theme:e,classes:t,energy:n,audio:a,sounds:l,className:r,children:i,node:o,...s}=this.props;return c.a.createElement(o,{ref:e=>this.element=e,className:u()(t.root,r),...s},i)},t}(c.a.PureComponent);d.displayName="Fader",d.defaultProps={node:"span"};const p=Object(l.a)()(Object(a.a)(e=>({root:{display:"inline-block",opacity:0}}))(Object(r.a)()(d)))}}]);
//# sourceMappingURL=component---src-pages-experience-js-06e0571904314747069c.js.map