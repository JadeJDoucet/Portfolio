(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{163:function(e,t,a){e.exports=a(318)},168:function(e,t,a){},169:function(e,t,a){},270:function(e,t,a){e.exports=a.p+"static/media/headshot-close.1dda9e3d.jpg"},274:function(e,t,a){e.exports=a.p+"static/media/scannar-proto-image.6e594c31.png"},275:function(e,t,a){e.exports=a.p+"static/media/scannar-products.64dead0f.png"},276:function(e,t,a){e.exports=a.p+"static/media/scannar-ar.5f3f9d7b.png"},277:function(e,t,a){e.exports=a.p+"static/media/scannar-product.4af3135f.png"},278:function(e,t,a){e.exports=a.p+"static/media/scannar-business-login.6b3954dc.png"},279:function(e,t,a){e.exports=a.p+"static/media/scannar-business-no-products.c8eea8e1.png"},280:function(e,t,a){e.exports=a.p+"static/media/scannar-business-create.b14a9f7c.png"},281:function(e,t,a){e.exports=a.p+"static/media/scannar-business-products.7f44d451.png"},282:function(e,t,a){e.exports=a.p+"static/media/readr-login.24ec0411.png"},283:function(e,t,a){e.exports=a.p+"static/media/readr-suggestion.2eabf88d.png"},284:function(e,t,a){e.exports=a.p+"static/media/readr-saved.64af019e.png"},285:function(e,t,a){e.exports=a.p+"static/media/readr-reader.822f4a51.png"},286:function(e,t,a){e.exports=a.p+"static/media/adopt-home.e8cdf96e.jpg"},287:function(e,t,a){e.exports=a.p+"static/media/adopt-report.8d3c1907.jpg"},288:function(e,t,a){e.exports=a.p+"static/media/adopt-map.f71d196b.jpg"},317:function(e,t,a){e.exports=a.p+"static/media/green-textured.33d16cac.jpg"},318:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),i=a.n(o),c=(a(168),a(43)),l=(a(169),a(327)),s=a(325),m=a(151);function d(e){var t=e.mobile,n={position:t?null:"fixed",margin:t?"auto":null,backgroundColor:"#fff",border:"1px solid #ddd",boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.2)"};return r.a.createElement(s.a,{style:n},r.a.createElement(m.a,{src:a(270),wrapped:!0,ui:!1}),r.a.createElement(s.a.Content,null,r.a.createElement(s.a.Header,null,"Jade Doucet",r.a.createElement("a",{href:"https://github.com/JadeJDoucet",style:{marginLeft:"25%",color:"black",fontSize:25}},r.a.createElement("i",{className:"github icon"})),r.a.createElement("a",{href:"https://linkedin.com/in/jadejdoucet",style:{color:"#0077B5",fontSize:25}},r.a.createElement("i",{className:"linkedin icon"}))),r.a.createElement(s.a.Meta,null,r.a.createElement("span",{className:"date"},"Software Engineer")),r.a.createElement(s.a.Description,null,"I am a full-stack software engineer from New Orleans with a passion for technology. I've built web and mobile apps with JavaScript and Node, as well as video games within Unity. I'm proficient in full stack development, whether it's designing a front-end or back-end, dealing with APIs, deploying, or constructing databases with SQL or NoSQL. For any questions, feel free to contact me via ",r.a.createElement("a",{href:"mailto:jadejdoucet@gmail.com"},"email"),".")))}function u(e){var t=e.project,a=e.mobile,o=t.name,i=t.description,s=t.coverImage,d=t.images,u=t.url,p=Object(n.useState)(null),g=Object(c.a)(p,2),f=g[0],b=g[1],h={float:"left",margin:5,borderRadius:5},E=function(e){return f===e?a?"medium":"large":a?"small":"medium"};return r.a.createElement(l.a.Row,{style:{boxShadow:"0px 1px 5px grey",borderRadius:5,marginBottom:5,backgroundColor:"rgba(255, 255, 255, 0.87)"}},r.a.createElement(l.a.Column,{width:3},r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.a,{src:s,rounded:!0,size:"large"}))),r.a.createElement(l.a.Column,{width:13},r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h1",{style:{color:"#058E3F"}},o)),r.a.createElement("p",null,i),d.length?r.a.createElement("ul",{style:{listStyleType:"none",margin:0,padding:0,overflow:"hidden"}},d.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(m.a,{src:e,size:(n=e,"Readr"===o?E(n):f===n?a?"small":"medium":a?"tiny":"small"),bordered:!0,style:h,onClick:function(){return function(e){b(e===f?null:e)}(e)}}));var n}))):null))}var p=[{name:"Scannar (Customer)",description:"Augmented reality pricing solution",url:"https://github.com/Assert-Reconceptualization/ScannAr",coverImage:a(274),images:[a(275),a(276),a(277)]},{name:"Scannar (Business)",description:"Augmented reality pricing solution",url:"https://github.com/Assert-Reconceptualization/ScannAr",coverImage:a(278),images:[a(279),a(280),a(281)]},{name:"Readr",description:"Reading suggestion / open source reading application",url:"https://github.com/Adopt-A-Pothole/Readr",coverImage:a(282),images:[a(283),a(284),a(285)]},{name:"Adopt-A-Pothole",description:"Crowdfunding app to restore New Orleans streets",url:"https://github.com/Adopt-A-Pothole/adopt-a-pothole",coverImage:a(286),images:[a(287),a(288)]}];function g(e){var t=e.mobile;return r.a.createElement(l.a,{style:{padding:15}},p.map((function(e,a){return r.a.createElement(u,{key:a,project:e,mobile:t})})))}var f=a(326),b=a(324);function h(e){var t=e.mobile,a=(e.setContact,Object(n.useState)("")),o=Object(c.a)(a,2),i=o[0],l=o[1],s={backgroundColor:"#058E3F",border:"1px solid #ddd",boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)",borderRadius:5};return t?r.a.createElement(f.a,{borderless:!0,className:"ui top fixed menu header",stackable:!0,style:s},r.a.createElement(b.a,{item:!0,icon:"bars"},r.a.createElement(b.a.Menu,null,r.a.createElement(b.a.Item,{style:{color:"#fff"}},"Email")))):r.a.createElement(f.a,{borderless:!0,className:"ui top fixed menu header",stackable:!0,style:s,onClick:function(){return l("")}},r.a.createElement(f.a.Item,{style:{color:"#fff"},className:"right item",active:"contact"===i,onClick:function(){l("contact"),window.location.href="mailto:'jadejdoucet@gmail.com';"}},"Email"))}a(317);var E=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],i={marginTop:"3.8%"},s={marginTop:"14%"},m={marginLeft:"17.5%",marginTop:"-1.6%"},u={marginLeft:5};return r.a.createElement("div",null,a?r.a.createElement("div",null,"contact page"):window.innerWidth<1e3?r.a.createElement(l.a,null,r.a.createElement(h,{mobile:!0,setContact:o}),r.a.createElement(l.a.Row,{width:5,style:s},r.a.createElement(d,{mobile:!0})),r.a.createElement(l.a.Row,{width:12},r.a.createElement(g,{mobile:!0}))):r.a.createElement("div",null,r.a.createElement(h,{setContact:o}),r.a.createElement("div",{style:i},r.a.createElement(l.a,{columns:2},r.a.createElement(l.a.Column,{width:4,style:u},r.a.createElement(d,null)),r.a.createElement(l.a.Column,{width:13,style:m},r.a.createElement(g,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[163,1,2]]]);
//# sourceMappingURL=main.e6ea031d.chunk.js.map