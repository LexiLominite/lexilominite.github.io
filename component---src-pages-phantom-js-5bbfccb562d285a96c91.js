(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(0),o=n.n(i),s=n(1),l=n.n(s),c=n(5),u=n(277),d=n(22),m=n(17),p=n(276),f=n(26),h=n(282),g=n.n(h),y=n(283),b=n.n(y),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement(u.a,{className:e.root},o.a.createElement(f.a,{stagger:!0},o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(m.a,null,"phantomCTF"))),o.a.createElement("p",null,"After successfully conducting 3 CTFs , we are up with PHANTOM CTF 4.0 ( Beginner's Edition )."),o.a.createElement("p",null,' This PHANTOM CTF is specifically focussed on "first-timers" or "beginners" to give you the basic understanding of "playing CTFs", and help you all to take "your first step in field of Cybersecurity and Hacking".'),o.a.createElement("p",null," Just grab up your team and Register NOW at ",o.a.createElement("a",{href:"ctf.cybsec.in"},"ctf.cybsec.in ")),o.a.createElement("p",null,"|| NOTE || ",o.a.createElement("br",null)," 1. MAXIMUM MEMBERS PER TEAM = 3",o.a.createElement("br",null),"2. INDIVIDUAL registrations ARE ALSO ALLOWED. Each individual registration will be considered as a SEPARATE TEAM!"),o.a.createElement(p.a,null,o.a.createElement("img",{src:b.a,alt:"PhantomCTF4"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(m.a,null,"Sponsors"))),o.a.createElement(p.a,null,o.a.createElement("img",{src:g.a,alt:"Google Cloud"})),o.a.createElement("center",null,o.a.createElement("p",null,"Infrastructure Sponsored by ",o.a.createElement(d.a,{href:"https://g.co/cloud/"},"Google Cloud"))))))},t}(o.a.Component);E.propTypes={classes:l.a.object},t.default=Object(c.a)(function(e){return{root:{}}})(E)},276:function(e,t,n){"use strict";var a=n(5),r=n(7),i=n(9),o=n(6),s=n.n(o),l=(n(8),n(3)),c=n.n(l),u=n(0),d=n.n(u),m=n(1),p=n.n(m),f=n(4),h=n.n(f),g=n(2),y=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.enter;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},n.exit=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.exit;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},n.animate=function(e){this.unanimate(),Object(g.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},n.unanimate=function(){g.a.remove(this.element)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=(t.energy,t.audio,t.sounds,t.className),r=t.children,i=t.node,o=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return d.a.createElement(i,Object.assign({ref:function(t){return e.element=t},className:h()(n.root,a)},o),r)},t}(d.a.PureComponent);y.displayName="Fader",y.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},y.defaultProps={node:"span"};n.d(t,"a",function(){return b});var b=Object(r.a)()(Object(a.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(y)))},277:function(e,t,n){"use strict";var a=n(5),r=(n(8),n(6)),i=n.n(r),o=n(3),s=n.n(o),l=n(0),c=n.n(l),u=n(1),d=n.n(u),m=n(4),p=n.n(m),f=n(276),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=t.className,r=t.children,o=i()(t,["theme","classes","className","children"]);return c.a.createElement(f.a,Object.assign({className:p()(n.root,a),node:"main",ref:function(t){return e.element=t}},o),c.a.createElement("div",{className:n.frame}),c.a.createElement("div",{className:n.content},r))},t}(c.a.Component);h.displayName="Main",h.propTypes={theme:d.a.object.isRequired,classes:d.a.object.isRequired,className:d.a.any,children:d.a.any};var g=n(13);n.d(t,"a",function(){return y});var y=Object(a.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(g.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(h)},282:function(e,t,n){e.exports=n.p+"static/gcloud-8e4e54e71e5e3748a9e3b0096d3b9423.jpg"},283:function(e,t,n){e.exports=n.p+"static/phantom4-9d6a14be3f8b041f42adb1b8dc41bdf8.jpeg"}}]);
//# sourceMappingURL=component---src-pages-phantom-js-5bbfccb562d285a96c91.js.map