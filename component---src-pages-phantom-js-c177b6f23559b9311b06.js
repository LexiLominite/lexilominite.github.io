(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(0),i=n.n(o),s=n(1),c=n.n(s),l=n(5),u=n(277),d=n(22),p=n(17),m=n(276),f=n(26),h=(n(282),n(283),n(284),n(285)),g=n.n(h),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement(u.a,{className:e.root},i.a.createElement(f.a,{stagger:!0},i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(p.a,null,"phantomCTF"))),i.a.createElement("p",null,"It is a Jeopardy Style CTF having various types of challenges like web exploitation, forensics, cryptography, binary exploitation, reverse engineering and some miscellaneous."),i.a.createElement("p",null,"Phantom 3.0 is coming soon!! Pull up your gloves and get ready for Cybsec's biggest and best yet Capture The Flag."),i.a.createElement("p",null,"For NITW students registration Link - ",i.a.createElement(d.a,{href:"http://registration.cybsec.in/"},"registration.cybsec.in")),i.a.createElement("p",null,"For Non-NITW participants - Link will be provided soon."),i.a.createElement("br",null),i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(p.a,null,"Sponsors"))),i.a.createElement(m.a,null,i.a.createElement("img",{src:g.a,alt:"Google Cloud"})),i.a.createElement("center",null,i.a.createElement("p",null,"Infrastructure Sponsored by ",i.a.createElement(d.a,{href:"https://g.co/cloud/"},"Google Cloud"))))))},t}(i.a.Component);y.propTypes={classes:c.a.object},t.default=Object(l.a)(function(e){return{root:{}}})(y)},276:function(e,t,n){"use strict";var a=n(5),r=n(7),o=n(9),i=n(6),s=n.n(i),c=(n(8),n(3)),l=n.n(c),u=n(0),d=n.n(u),p=n(1),m=n.n(p),f=n(4),h=n.n(f),g=n(2),y=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.enter;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},n.exit=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.exit;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},n.animate=function(e){this.unanimate(),Object(g.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},n.unanimate=function(){g.a.remove(this.element)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=(t.energy,t.audio,t.sounds,t.className),r=t.children,o=t.node,i=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return d.a.createElement(o,Object.assign({ref:function(t){return e.element=t},className:h()(n.root,a)},i),r)},t}(d.a.PureComponent);y.displayName="Fader",y.propTypes={theme:m.a.any.isRequired,classes:m.a.any.isRequired,energy:m.a.any.isRequired,audio:m.a.any.isRequired,sounds:m.a.any.isRequired,className:m.a.any,children:m.a.any,node:m.a.string},y.defaultProps={node:"span"};n.d(t,"a",function(){return b});var b=Object(r.a)()(Object(a.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(o.a)()(y)))},277:function(e,t,n){"use strict";var a=n(5),r=(n(8),n(6)),o=n.n(r),i=n(3),s=n.n(i),c=n(0),l=n.n(c),u=n(1),d=n.n(u),p=n(4),m=n.n(p),f=n(276),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=t.className,r=t.children,i=o()(t,["theme","classes","className","children"]);return l.a.createElement(f.a,Object.assign({className:m()(n.root,a),node:"main",ref:function(t){return e.element=t}},i),l.a.createElement("div",{className:n.frame}),l.a.createElement("div",{className:n.content},r))},t}(l.a.Component);h.displayName="Main",h.propTypes={theme:d.a.object.isRequired,classes:d.a.object.isRequired,className:d.a.any,children:d.a.any};var g=n(13);n.d(t,"a",function(){return y});var y=Object(a.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(g.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(h)},282:function(e,t,n){e.exports=n.p+"static/phantomCTF-3d6aacdd329a6507f7d35314c1596690.jpg"},283:function(e,t,n){e.exports=n.p+"static/venue-54dbf579c8e8d07eebbf20f3a615f793.jpg"},284:function(e,t,n){e.exports=n.p+"static/result-0db8a25f4ac91bf42a523955ca4b99a2.jpg"},285:function(e,t,n){e.exports=n.p+"static/gcloud-8e4e54e71e5e3748a9e3b0096d3b9423.jpg"}}]);
//# sourceMappingURL=component---src-pages-phantom-js-c177b6f23559b9311b06.js.map