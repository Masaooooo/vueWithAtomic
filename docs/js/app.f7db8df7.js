(function(e){function t(t){for(var o,i,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d01dc4bb"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,u.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vueWithAtomic/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2856:function(e,t,n){},5875:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var o=n("2856"),r=n.n(o);r.a},"64c4":function(e,t,n){"use strict";var o=n("5875"),r=n.n(o);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,r,a,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,s=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},p=[],d=n("c665"),v=n("dc0a"),b=n("d328"),h=n("11d9"),m=n("9ab4"),g=n("60a3"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},j=[],O=function(e){function t(){return Object(d["a"])(this,t),Object(b["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),t}(g["c"]);m["a"]([Object(g["b"])()],O.prototype,"msg",void 0),O=m["a"]([g["a"]],O);var _=O,w=_,k=(n("64c4"),Object(i["a"])(w,y,j,!1,null,"01ff82ee",null));k.options.__file="HelloWorld.vue";var x=k.exports,A=function(e){function t(){return Object(d["a"])(this,t),Object(b["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),t}(g["c"]);A=m["a"]([Object(g["a"])({components:{HelloWorld:x}})],A);var P=A,E=P,S=Object(i["a"])(E,f,p,!1,null,null,null);S.options.__file="Home.vue";var T=S.exports;o["default"].use(s["a"]);var W=new s["a"]({mode:"history",base:"/vueWithAtomic/",routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),H=n("2f62");o["default"].use(H["a"]);var C=new H["a"].Store({state:{},mutations:{},actions:{}}),M=n("9483");Object(M["a"])("".concat("/vueWithAtomic/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].config.productionTip=!1,new o["default"]({router:W,store:C,render:function(e){return e(l)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f7db8df7.js.map