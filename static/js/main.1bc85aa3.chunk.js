(window.webpackJsonpinsight=window.webpackJsonpinsight||[]).push([[0],{19:function(e,n,t){e.exports=t(32)},32:function(e,n,t){"use strict";t.r(n);var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var r=t(16),i=t(10),c=t(11),l=t(17),s=t(12),u=t(18),f=t(14),h=t.n(f),d=t(6),g=t.n(d),m=t(13),w=t.n(m),v=t(0),p=t.n(v),b=t(7),E=t.n(b),y=["animals","clothes","food"],k=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).cardify=function(e,n){var a=p.a.createElement(g.a,{key:e,style:{width:"18rem"}},p.a.createElement(g.a.Body,null,p.a.createElement(g.a.Title,null,p.a.createElement("h5",null,e)),p.a.createElement(g.a.Subtitle,null,n," phrase",n>1?"s":"")));t.setState({cards:[].concat(Object(r.a)(t.state.cards),[a])})},t.state={cards:[]},y.map((function(e){return fetch("./data/".concat(e,".csv")).then((function(e){return e.text()})).then((function(e){return e.split("\n").map((function(e){return e.trim().split(";")}))})).then((function(e){return e.filter((function(e){return 2===e.length}))})).then((function(n){return t.cardify(e,n.length)}))})),t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return p.a.createElement(w.a,null,p.a.createElement(E.a,{className:"col-xl"},p.a.createElement("h1",null,"Insight")),p.a.createElement(E.a,{className:"col-xl"},this.state.cards),p.a.createElement(E.a,{className:"col-xl"},p.a.createElement(h.a,null,"Lets go")))}}]),n}(p.a.Component),j=t(15);t.n(j).a.render(p.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/insight-flashcards",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/insight-flashcards","/service-worker.js");a?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(n,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.1bc85aa3.chunk.js.map