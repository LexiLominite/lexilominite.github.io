(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),i=t(0),l=t.n(i),s=t(1),o=t.n(s),c=t(5),m=t(277),u=t(26),d=t(17),p=t(276),h=t(22),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.classes;return l.a.createElement(m.a,{className:e.root},l.a.createElement(u.a,{stagger:!0},l.a.createElement("h1",null,l.a.createElement(d.a,null,"Download")),l.a.createElement("div",{className:e.albums},l.a.createElement("div",{className:e.album},l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},l.a.createElement("img",{alt:"Kali Linux",src:"/images/kalilinux.jpg"}))),l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},l.a.createElement("center",null,"Kali Linux ")))),l.a.createElement("div",{className:e.album},l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://parrotlinux.org/",target:"parrotos"},l.a.createElement("img",{alt:"Parrot Security",src:"/images/parrot.jpg"}))),l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://parrotlinux.org/",target:"parrotos"},l.a.createElement("center",null,"Parrot Security ")))),l.a.createElement("div",{className:e.album},l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://ghidra-sre.org/",target:"ghidra"},l.a.createElement("img",{alt:"GHIDRA",src:"/images/ghidra.jpg"}))),l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://ghidra-sre.org/",target:"ghidra"},l.a.createElement("center",null,"GHIDRA")))),l.a.createElement("div",{className:e.album},l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://www.wireshark.org/",target:"wireshark"},l.a.createElement("img",{alt:"Wireshark",src:"/images/wireshark.jpg"}))),l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://www.wireshark.org/",target:"wireshark"},l.a.createElement("center",null,"Wireshark")))),l.a.createElement("div",{className:e.album},l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://nmap.org/",target:"Nmap"},l.a.createElement("img",{alt:"Nmap",src:"/images/nmap.jpeg"}))),l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://nmap.org/",target:"nmap"},l.a.createElement("center",null,"Nmap")))),l.a.createElement("div",{className:e.album},l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},l.a.createElement("img",{alt:"Kali Linux",src:"/images/kalilinux.jpg"}))),l.a.createElement(p.a,{className:e.albumCover},l.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},l.a.createElement("center",null,"Kali Linux ")))))))},a}(l.a.Component);g.propTypes={classes:o.a.object},a.default=Object(c.a)(function(e){return{root:{},albums:{display:"flex",flexDirection:"row",flexWrap:"wrap"},album:{padding:[0,0,20],width:"100%"},albumCover:{display:"block",margin:[0,0,20],width:"100%","& img":{margin:0,width:"100%",maxWidth:"100%"}},albumFrame:{display:"block",width:"100%"},"@media screen and (min-width: 768px)":{album:{padding:10,width:"50%"}}}})(g)},276:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(9),l=t(6),s=t.n(l),o=(t(8),t(3)),c=t.n(o),m=t(0),u=t.n(m),d=t(1),p=t.n(d),h=t(4),g=t.n(h),f=t(2),E=function(e){function a(){return e.apply(this,arguments)||this}c()(a,e);var t=a.prototype;return t.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},t.enter=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},t.exit=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},t.animate=function(e){this.unanimate(),Object(f.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},t.unanimate=function(){f.a.remove(this.element)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=(a.energy,a.audio,a.sounds,a.className),r=a.children,i=a.node,l=s()(a,["theme","classes","energy","audio","sounds","className","children","node"]);return u.a.createElement(i,Object.assign({ref:function(a){return e.element=a},className:g()(t.root,n)},l),r)},a}(u.a.PureComponent);E.displayName="Fader",E.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},E.defaultProps={node:"span"};t.d(a,"a",function(){return b});var b=Object(r.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(E)))},277:function(e,a,t){"use strict";var n=t(5),r=(t(8),t(6)),i=t.n(r),l=t(3),s=t.n(l),o=t(0),c=t.n(o),m=t(1),u=t.n(m),d=t(4),p=t.n(d),h=t(276),g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&a.element.exit()},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},t.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=a.className,r=a.children,l=i()(a,["theme","classes","className","children"]);return c.a.createElement(h.a,Object.assign({className:p()(t.root,n),node:"main",ref:function(a){return e.element=a}},l),c.a.createElement("div",{className:t.frame}),c.a.createElement("div",{className:t.content},r))},a}(c.a.Component);g.displayName="Main",g.propTypes={theme:u.a.object.isRequired,classes:u.a.object.isRequired,className:u.a.any,children:u.a.any};var f=t(13);t.d(a,"a",function(){return E});var E=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(f.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(g)}}]);
//# sourceMappingURL=component---src-pages-files-js-bfc297a60593675bee86.js.map