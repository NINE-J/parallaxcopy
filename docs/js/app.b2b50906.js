(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a22f2b7e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/parallaxcopy/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fc1":function(e,t,n){"use strict";n("13a0")},"13a0":function(e,t,n){},"4bc1":function(e,t,n){e.exports=n.p+"img/moon.d561442c.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/parallaxcopy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Parallax")],1)},f=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"parallax-container"},[r("div",{staticClass:"img-wrapper"},[r("img",{ref:"bg",attrs:{src:n("86d5"),id:"bg",alt:"bg"}}),r("img",{ref:"moon",attrs:{src:n("4bc1"),alt:"moon"}}),r("img",{ref:"mountain",attrs:{src:n("d227"),alt:"mountain"}}),r("img",{ref:"road",attrs:{src:n("61d7"),id:"road",alt:"road"}}),r("div",{ref:"textWrapper",attrs:{id:"text-wrapper"}},[r("h2",{attrs:{id:"text"}},[e._v("Moon Light")])])]),e._m(0)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"description-wrapper"},[n("div",{staticClass:"subtitle"},[n("h2",[e._v("parallax scrolling")]),n("span",[e._v("[패럴랙스]")])]),n("p",{staticClass:"description"},[e._v(" 패럴랙스는 시차라는 뜻으로 천문학에서 사용하는 용어입니다. 즉 멀리 있는 물체는 천천히 움직이고 가까이 있는 물체는 빨리 움직이는 현상을 의미합니다. 이를 이용하여 웹페이지에서 시각적인 공간감을 느낄 수 있도록 해주는 인상적인 효과입니다. ")]),n("div",{staticClass:"animation-wrapper"},[n("div",{staticClass:"box-wrapper"},[n("div",{staticClass:"box"}),n("div",{staticClass:"box"}),n("div",{staticClass:"box"})])])])}],b={name:"Parallax",mounted:function(){var e=this.$refs.moon,t=this.$refs.mountain,n=this.$refs.road,r=this.$refs.textWrapper;window.addEventListener("scroll",(function(){var o=window.scrollY;e.style.right=.5*o+"px",t.style.top=.15*-o+"px",t.style.top=.15*-o+"px",n.style.top=.15*o+"px",r.style.top=1*o+"px"}))}},g=b,h=(n("0fc1"),Object(i["a"])(g,m,v,!1,null,"3d01bd15",null)),x=h.exports,w={name:"Home",components:{Parallax:x}},y=w,_=Object(i["a"])(y,d,f,!1,null,null,null),j=_.exports;r["a"].use(p["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new p["a"]({mode:"history",base:"/parallaxcopy/",routes:O}),P=C,k=n("2f62");r["a"].use(k["a"]);var E=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:P,store:E,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"61d7":function(e,t,n){e.exports=n.p+"img/road.d9d4d414.png"},"86d5":function(e,t,n){e.exports=n.p+"img/bg.5df9840d.jpg"},"9c0c":function(e,t,n){},d227:function(e,t,n){e.exports=n.p+"img/mountain.ecd840aa.png"}});
//# sourceMappingURL=app.b2b50906.js.map