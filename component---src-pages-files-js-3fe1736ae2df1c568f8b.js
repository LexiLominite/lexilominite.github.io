(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),i=t(0),s=t.n(i),l=t(1),o=t.n(l),c=t(5),m=t(277),u=t(26),d=t(17),p=t(276),h=t(22),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.classes;return s.a.createElement(m.a,{className:e.root},s.a.createElement(u.a,{stagger:!0},s.a.createElement("h1",null,s.a.createElement(d.a,null,"Download")),s.a.createElement("div",{className:e.albums},s.a.createElement("div",{className:e.album},s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},s.a.createElement("img",{alt:"Kali Linux",src:"/images/kalilinux.jpg"}))),s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},s.a.createElement("center",null,"Kali Linux ")))),s.a.createElement("div",{className:e.album},s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://parrotlinux.org/",target:"parrotos"},s.a.createElement("img",{alt:"Parrot Security",src:"/images/parrot.jpg"}))),s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://parrotlinux.org/",target:"parrotos"},s.a.createElement("center",null,"Parrot Security ")))),s.a.createElement("div",{className:e.album},s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://ghidra-sre.org/",target:"ghidra"},s.a.createElement("img",{alt:"GHIDRA",src:"/images/ghidra.jpg"}))),s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://ghidra-sre.org/",target:"ghidra"},s.a.createElement("center",null,"GHIDRA")))),s.a.createElement("div",{className:e.album},s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://www.wireshark.org/",target:"wireshark"},s.a.createElement("img",{alt:"Wireshark",src:"/images/wireshark.jpg"}))),s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://www.wireshark.org/",target:"wireshark"},s.a.createElement("center",null,"Wireshark")))),s.a.createElement("div",{className:e.album},s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://nmap.org/",target:"Nmap"},s.a.createElement("img",{alt:"Nmap",src:"/images/nmap.jpeg"}))),s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://nmap.org/",target:"nmap"},s.a.createElement("center",null,"Nmap")))),s.a.createElement("div",{className:e.album},s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://www.acunetix.com/",target:"acunetix"},s.a.createElement("img",{alt:"Acunetix",src:"/images/acunetix.png"}))),s.a.createElement(p.a,{className:e.albumCover},s.a.createElement(h.a,{href:"https://www.acunetix.com/",target:"acunetix"},s.a.createElement("center",null,"Acunetix ")))))))},a}(s.a.Component);g.propTypes={classes:o.a.object},a.default=Object(c.a)(function(e){return{root:{},albums:{display:"flex",flexDirection:"row",flexWrap:"wrap"},album:{padding:[0,0,20],width:"100%"},albumCover:{display:"block",margin:[0,0,20],width:"100%","& img":{margin:0,width:"100%",maxWidth:"100%"}},albumFrame:{display:"block",width:"100%"},"@media screen and (min-width: 768px)":{album:{padding:10,width:"50%"}}}})(g)},276:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(9),s=t(6),l=t.n(s),o=(t(8),t(3)),c=t.n(o),m=t(0),u=t.n(m),d=t(1),p=t.n(d),h=t(4),g=t.n(h),f=t(2),E=function(e){function a(){return e.apply(this,arguments)||this}c()(a,e);var t=a.prototype;return t.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},t.enter=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},t.exit=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},t.animate=function(e){this.unanimate(),Object(f.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},t.unanimate=function(){f.a.remove(this.element)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=(a.energy,a.audio,a.sounds,a.className),r=a.children,i=a.node,s=l()(a,["theme","classes","energy","audio","sounds","className","children","node"]);return u.a.createElement(i,Object.assign({ref:function(a){return e.element=a},className:g()(t.root,n)},s),r)},a}(u.a.PureComponent);E.displayName="Fader",E.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},E.defaultProps={node:"span"};t.d(a,"a",function(){return b});var b=Object(r.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(E)))},277:function(e,a,t){"use strict";var n=t(5),r=(t(8),t(6)),i=t.n(r),s=t(3),l=t.n(s),o=t(0),c=t.n(o),m=t(1),u=t.n(m),d=t(4),p=t.n(d),h=t(276),g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&a.element.exit()},a}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},t.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=a.className,r=a.children,s=i()(a,["theme","classes","className","children"]);return c.a.createElement(h.a,Object.assign({className:p()(t.root,n),node:"main",ref:function(a){return e.element=a}},s),c.a.createElement("div",{className:t.frame}),c.a.createElement("div",{className:t.content},r))},a}(c.a.Component);g.displayName="Main",g.propTypes={theme:u.a.object.isRequired,classes:u.a.object.isRequired,className:u.a.any,children:u.a.any};var f=t(13);t.d(a,"a",function(){return E});var E=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(f.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(g)}}]);
//# sourceMappingURL=component---src-pages-files-js-3fe1736ae2df1c568f8b.js.map