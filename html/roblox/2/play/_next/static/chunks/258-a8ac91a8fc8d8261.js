"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{3626:function(t,n,e){var o=e(1720),r=e(7997),i=function(){return(0,r.tZ)("span",{})};n.Z=function(t){var n=t.children,e=(0,o.useState)(!1),a=e[0],s=e[1];return(0,o.useEffect)((function(){return s(!0)}),[]),(0,r.tZ)(r.HY,{children:a?n:(0,r.tZ)(i,{})})}},4672:function(t,n,e){e.d(n,{Bg:function(){return s},W:function(){return l}});var o,r,i=e(445),a=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},s=i.ZP.div(o||(o=a(["\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n\n  &:after {\n    content: '';\n    background-color: rgba(0,0,0,0.7);\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n  }\n"],["\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n\n  &:after {\n    content: '';\n    background-color: rgba(0,0,0,0.7);\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]))),l=i.ZP.div(r||(r=a(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: calc(var(--vh,1vh) * 100);\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #0b0223;\n\n  .drag-react {\n    &.--mobile {\n      touch-action: none;\n      padding: 8px;\n      width: 56px;\n      border-bottom-right-radius: 100px;\n      border-bottom-left-radius: 100px;\n\n      &.--show {\n        background: ",";\n        border-top-left-radius: 12px;\n        border-top-right-radius: 12px;\n        pointer-events: all\n      }\n\n      &.--hide {\n        min-height: 90px;\n        background: rgba(0, 0, 0, 0.7);\n        border: ",";\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px;\n        gap: 16px;\n      }\n    }\n  }\n\n  body.rotate-screen &, body.portrait-mode & {\n    width: 100%;\n    height: 100%;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: calc(var(--vh,1vh) * 100);\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #0b0223;\n\n  .drag-react {\n    &.--mobile {\n      touch-action: none;\n      padding: 8px;\n      width: 56px;\n      border-bottom-right-radius: 100px;\n      border-bottom-left-radius: 100px;\n\n      &.--show {\n        background: ",";\n        border-top-left-radius: 12px;\n        border-top-right-radius: 12px;\n        pointer-events: all\n      }\n\n      &.--hide {\n        min-height: 90px;\n        background: rgba(0, 0, 0, 0.7);\n        border: ",";\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px;\n        gap: 16px;\n      }\n    }\n  }\n\n  body.rotate-screen &, body.portrait-mode & {\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(t){var n;return null===(n=t.theme.colors)||void 0===n?void 0:n.base800}),(function(t){var n;return null===(n=t.theme.border)||void 0===n?void 0:n.base}));n.Z=l},5522:function(t,n,e){e.d(n,{Ci:function(){return i},bo:function(){return a}});var o=e(7981),r=e(1752),i=(e(4155),(0,r.default)().publicRuntimeConfig,function(){return'\n  (function(){"use strict";var t,n=function(t){var n=0;return function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}}},e="function"==typeof Object.create?Object.create:function(t){var n=function(){};return n.prototype=t,new n};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var r;t:{var o={};try{o.__proto__={a:!0},r=o.a;break t}catch(P){}r=!1}t=r?function(t,n){if(t.__proto__=n,t.__proto__!==n)throw new TypeError(t+" is not extensible");return t}:null}var i,a=t,l=function(t,n){if(t.prototype=e(n.prototype),t.prototype.constructor=t,a)a(t,n);else for(var r in n)if("prototype"!=r)if(Object.defineProperties){var o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o)}else t[r]=n[r];t.v=n.prototype},c=this||self,s=function(){},u=function(t){return t},h=function(t,n){this.g=n===d?t:""};h.prototype.toString=function(){return this.g+""};var d={},f=function(t){if(void 0===i){var n=null,e=c.trustedTypes;if(e&&e.createPolicy){try{n=e.createPolicy("goog#html",{createHTML:u,createScript:u,createScriptURL:u})}catch(t){c.console&&c.console.error(t.message)}i=n}else i=n}return t=(n=i)?n.createScriptURL(t):t,new h(t,d)},p=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)},y={},g=null,b="function"==typeof Uint8Array;function v(t,n,e){return"object"==typeof t?b&&!Array.isArray(t)&&t instanceof Uint8Array?e(t):m(t,n,e):n(t)}function m(t,n,e){if(Array.isArray(t)){for(var r=Array(t.length),o=0;o<t.length;o++){var i=t[o];null!=i&&(r[o]=v(i,n,e))}return Array.isArray(t)&&t.s&&N(r),r}for(o in r={},t)Object.prototype.hasOwnProperty.call(t,o)&&(null!=(i=t[o])&&(r[o]=v(i,n,e)));return r}var w,M={s:{value:!0,configurable:!0}},N=function(t){return Array.isArray(t)&&!Object.isFrozen(t)&&Object.defineProperties(t,M),t},Z=function(t,n,e){var r=w;if(w=null,t||(t=r),r=this.constructor.u,t||(t=r?[r]:[]),this.j=r?0:-1,this.h=null,this.g=t,t=(r=this.g.length)-1,!r||(null===(r=this.g[t])||"object"!=typeof r||Array.isArray(r)||b&&r instanceof Uint8Array)?void 0!==n&&-1<n?(this.l=Math.max(n,t+1-this.j),this.i=null):this.l=Number.MAX_VALUE:(this.l=t-this.j,this.i=r),e)for(n=0;n<e.length;n++)(t=e[n])<this.l?(t+=this.j,(r=this.g[t])?N(r):this.g[t]=V):(r=this.l+this.j,this.g[r]||(this.i=this.g[r]={}),(r=this.i[t])?N(r):this.i[t]=V)},V=Object.freeze(N([])),W=function(t,n){if(-1===n)return null;if(n<t.l){n+=t.j;var e=t.g[n];return e!==V?e:t.g[n]=N([])}return t.i?(e=t.i[n])!==V?e:t.i[n]=N([]):void 0},x=function(t,n){var e=Q;if(-1===n)return null;if(t.h||(t.h={}),!t.h[n]){var r=W(t,n);r&&(t.h[n]=new e(r))}return t.h[n]};Z.prototype.toJSON=function(){return function(t){return m(t,(function(t){return"number"==typeof t?isFinite(t)?t:String(t):t}),(function(t){var n;if(void 0===n&&(n=0),!g){g={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),r=["+/=","+/","-_=","-_.","-_"],o=0;5>o;o++){var i=e.concat(r[o].split(""));y[o]=i;for(var a=0;a<i.length;a++){var l=i[a];void 0===g[l]&&(g[l]=a)}}}for(n=y[n],e=Array(Math.floor(t.length/3)),r=n[64]||"",o=i=0;i<t.length-2;i+=3){var c=t[i],s=t[i+1];l=t[i+2],a=n[c>>2],c=n[(3&c)<<4|s>>4],s=n[(15&s)<<2|l>>6],l=n[63&l],e[o++]=""+a+c+s+l}switch(a=0,l=r,t.length-i){case 2:l=n[(15&(a=t[i+1]))<<2]||r;case 1:t=t[i],e[o]=""+n[t>>2]+n[(3&t)<<4|a>>4]+l+r}return e.join("")}))}(H(this,!1))};var H=function(t,n){if(t.h)for(var e in t.h)if(Object.prototype.hasOwnProperty.call(t.h,e)){var r=t.h[e];if(Array.isArray(r))for(var o=0;o<r.length;o++)r[o]&&H(r[o],n);else r&&H(r,n)}return t.g},S=function(t,n){return w=n=n?JSON.parse(n):null,t=new t(n),w=null,t};Z.prototype.toString=function(){return H(this,!1).toString()};var T=function(t){Z.call(this,t)};l(T,Z);var j=function(t,n){return n=String(n),"application/xhtml+xml"===t.contentType&&(n=n.toLowerCase()),t.createElement(n)},R=function(t){this.g=t||c.document||document};R.prototype.appendChild=function(t,n){t.appendChild(n)};var U=function(t,n,e,r,o,i){try{var a=t.g,l=j(t.g,"SCRIPT");l.async=!0,l.src=n instanceof h&&n.constructor===h?n.g:"type_error:TrustedResourceUrl",function(t){var n,e=(t.ownerDocument&&t.ownerDocument.defaultView||window).document,r=null===(n=e.querySelector)||void 0===n?void 0:n.call(e,"script[nonce]");(n=r&&(r.nonce||r.getAttribute("nonce"))||"")&&t.setAttribute("nonce",n)}(l),a.head.appendChild(l),l.addEventListener("load",(function(){o(),r&&a.head.removeChild(l)})),l.addEventListener("error",(function(){0<e?U(t,n,e-1,r,o,i):(r&&a.head.removeChild(l),i())}))}catch(t){i()}},X=c.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),z=c.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),Y=c.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),G=function(t,n,e){this.h=t,this.j=new R(this.h),this.g=null,this.i=[],this.l=!1,this.o=n,this.m=e},F=function(t){if(t.h.body&&!t.l){var n=function(){I(t),c.setTimeout((function(){return D(t,3)}),50)};U(t.j,t.o,2,!0,(function(){c[t.m]||n()}),n),t.l=!0}},I=function(t){for(var n=L(1,5),e=0;e<n;e++){var r=C(t);t.h.body.appendChild(r),t.i.push(r)}(n=C(t)).style.bottom="0",n.style.left="0",n.style.position="fixed",n.style.width=L(100,110).toString()+"%",n.style.zIndex=L(2147483544,2147483644).toString(),n.style["background-color"]=A(249,259,242,252,219,229),n.style["box-shadow"]="0 0 12px #888",n.style.color=A(0,10,0,10,0,10),n.style.display="flex",n.style["justify-content"]="center",n.style["font-family"]="Roboto, Arial",(e=C(t)).style.width=L(80,85).toString()+"%",e.style.maxWidth=L(750,775).toString()+"px",e.style.margin="24px",e.style.display="flex",e.style["align-items"]="flex-start",e.style["justify-content"]="center",(r=j(t.j.g,"IMG")).className=p(),r.src=X,r.style.height="24px",r.style.width="24px",r.style["padding-right"]="16px";var o=C(t),i=C(t);i.style["font-weight"]="bold",i.textContent=z;var a=C(t);for(a.textContent=Y,O(t,o,i),O(t,o,a),O(t,e,r),O(t,e,o),O(t,n,e),t.g=n,t.h.body.appendChild(t.g),n=L(1,5),e=0;e<n;e++)r=C(t),t.h.body.appendChild(r),t.i.push(r)},O=function(t,n,e){for(var r=L(1,5),o=0;o<r;o++){var i=C(t);n.appendChild(i)}for(n.appendChild(e),e=L(1,5),r=0;r<e;r++)o=C(t),n.appendChild(o)},L=function(t,n){return Math.floor(t+Math.random()*(n-t))},A=function(t,n,e,r,o,i){return"rgb("+L(Math.max(t,0),Math.min(n,255)).toString()+","+L(Math.max(e,0),Math.min(r,255)).toString()+","+L(Math.max(o,0),Math.min(i,255)).toString()+")"},C=function(t){return(t=j(t.j.g,"DIV")).className=p(),t},D=function(t,n){0>=n||null!=t.g&&0!=t.g.offsetHeight&&0!=t.g.offsetWidth||(k(t),I(t),c.setTimeout((function(){return D(t,n-1)}),50))},k=function(t){var e=t.i,r="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];for(e=r?r.call(e):{next:n(e)},r=e.next();!r.done;r=e.next())(r=r.value)&&r.parentNode&&r.parentNode.removeChild(r);t.i=[],(e=t.g)&&e.parentNode&&e.parentNode.removeChild(e),t.g=null},E=function(t,n,e,r,o){var i=J(e),a=function(e){document.body?function(e){e.appendChild(i),c.setTimeout((function(){i?(0!==i.offsetHeight&&0!==i.offsetWidth?n():t(),i.parentNode&&i.parentNode.removeChild(i)):t()}),r)}(document.body):0<e?c.setTimeout((function(){a(e-1)}),o):n()};a(3)},J=function(t){var n=document.createElement("div");return n.className=t,n.style.width="1px",n.style.height="1px",n.style.position="absolute",n.style.left="-10000px",n.style.top="-10000px",n.style.zIndex="-10000",n},Q=function(t){Z.call(this,t)};l(Q,Z);var B=function(t){Z.call(this,t)};l(B,Z);var _=function(t,n){this.l=t,this.m=new R(t.document),this.g=n,this.i=W(this.g,1),n=x(this.g,2),this.o=f(W(n,4)||""),this.h=!1,n=x(this.g,13),n=f(W(n,4)||""),this.j=new G(t.document,n,W(this.g,12))};_.prototype.start=function(){K(this)};var P,q,K=function(t){tt(t),U(t.m,t.o,3,!1,(function(){t:{var n=t.i,e=c.btoa(n);if(e=c[e]){try{var r=S(T,c.atob(e))}catch(t){n=!1;break t}n=n===W(r,1)}else n=!1}n?$(t,W(t.g,14)):($(t,W(t.g,8)),F(t.j))}),(function(){E((function(){$(t,W(t.g,7)),F(t.j)}),(function(){return $(t,W(t.g,6))}),W(t.g,9),W(t.g,10),W(t.g,11))}))},$=function(t,n){t.h||(t.h=!0,(t=new t.l.XMLHttpRequest).open("GET",n,!0),t.send())},tt=function(t){var n=c.btoa(t.i);t.l[n]&&$(t,W(t.g,5))};q=function(t){"function"==typeof window.atob&&new _(window,S(B,window.atob(t))).start()},c[P="__h82AlnkH6D91__"]=function(t){for(var n=[],e=0;e<arguments.length;++e)n[e-0]=arguments[e];c[P]=s,q.apply(null,n)}}).call(this),window.__h82AlnkH6D91__(\n    "WyJwdWItOTIzMzg3ODA4NTk4ODk3MSIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9iL3B1Yi05MjMzODc4MDg1OTg4OTcxIl0sbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9lbC9BR1NLV3hXUnFZRHlKdUs5RWFtQms0cDhlVTlEbWJCYTN1VHRCNXlMbFpueWgtX3puV08yanBfQkJERFhyNEp0ZEY4US04cWtFTFgwODFKanVSa3JQQ2hTbmRHb2pBXHUwMDNkXHUwMDNkP3RlXHUwMDNkVE9LRU5fRVhQT1NFRCIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFgwSDJFWjI2QVVYME0wTU1PWWtDc0NCQkRkZGk2cnJEYTIxOTh5NXJCU0tZZHZRRTVCMnlybTN1OXhfYWJha1gySGJPSk41bzVXOUlRZEhGTWRsZ19yTEFcdTAwM2RcdTAwM2Q/YWJcdTAwM2QxXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFVmYmRGVGZyWDBVbUxic3RPSjVzcHNQZjdMSEswX2hydlhQdFFuNDBpLWZ5M3pyanpIQjRsVG9YNm94Vmlnenp0QnBwdTNhMmp4emhGenVGaEI5aVkydmdcdTAwM2RcdTAwM2Q/YWJcdTAwM2QyXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFVBU3FOZEVhdXVFQl9HbHZrcGMwWUplbU5EdmE5OVRzWmFHV01XQTN5Q2E3bEhETGR2U0xua1VPYjAwNnBSelY3Szk4SkFDX3FHRk5DY3o2bF9iS25FYXdcdTAwM2RcdTAwM2Q/c2JmXHUwMDNkMiIsImRpdi1ncHQtYWQiLDIwLDEwMCwiY0hWaUxUa3lNek00Tnpnd09EVTVPRGc1TnpFXHUwMDNkIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tLzBlbW4vZi9wL3B1Yi05MjMzODc4MDg1OTg4OTcxLmpzP3VzcXBcdTAwM2RDQWciXSwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vZWwvQUdTS1d4V2pxMFZHSW40VkxMUnQ5WTJzcmt5Vk1wUExCcEFfSUJCMXB4QW5ZYndlbHR3THE4ell4OHpNanUwODYtc215U1pfeTNzYUhpVklya29FQjNnaFdyNzBjZ1x1MDAzZFx1MDAzZCJd"\n  );\n'}),a=function(){return"d2luZG93:bG9jYXRpb24=:aG9zdA==".split(":").reduce((function(t,n){return t[atob(n)]}),globalThis)};n.ZP=function(t,n,e){var r,i,a,s;return'\n  if (typeof window !== \'undefined\') {\n    (function() {\n    let random = bytes => crypto.getRandomValues(new Uint8Array(bytes));\n    let customRandom = (alphabet, defaultSize, getRandom) => {\n      let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1;\n      let step = -~((1.6 * mask * defaultSize) / alphabet.length);\n      return (size = defaultSize) => {\n        let id = \'\'\n        while (true) {\n          let bytes = getRandom(step)\n          let j = step\n          while (j--) {\n            id += alphabet[bytes[j] & mask] || \'\'\n            if (id.length === size) return id\n          }\n        }\n      }\n    }\n    let customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random)\n    const nanoid = customAlphabet(\'useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict\', 21);\n    var Storage={valuesMap:new Map,getItem(a){var b=String(a);return this.valuesMap.has(a)?String(this.valuesMap.get(b)):null},setItem(a,b){this.valuesMap.set(String(a),String(b))},removeItem(a){this.valuesMap.delete(a)},clear(){this.valuesMap.clear()},key(a){if(!a)throw new TypeError("Failed to execute \'key\' on \'Storage\': 1 argument required, but only 0 present.");return this.valuesMap.get(a)},get length(){return this.valuesMap.size}}\n    var isNewUser = false;\n    try {\n      localStorage.setItem("test", "test");\n      localStorage.removeItem("test");\n    } catch(e) {\n      Object.defineProperty(window, "localStorage", {\n        value: Object.assign({}, Storage),\n        configurable: !0,\n        enumerable: !0,\n        writable: !0\n      })\n    }\n\n    try {\n      sessionStorage.setItem("test", "test");\n      sessionStorage.removeItem("test");\n    } catch(e) {\n      Object.defineProperty(window, "sessionStorage", {\n        value: Object.assign({}, Storage),\n        configurable: !0,\n        enumerable: !0,\n        writable: !0\n      })\n    }\n\n    if (!localStorage.getItem("fe_uaId")) {\n      isNewUser = true;\n      sessionStorage.setItem("isNewUser", "true");\n      localStorage.setItem("fe_uaId", "ua-" + nanoid());\n    } else {\n      sessionStorage.removeItem("isNewUser");\n    }\n    if (!sessionStorage.getItem("fe_uaSessionId")) {\n      sessionStorage.setItem("fe_uaSessionId", "uasess-" + nanoid());\n    }\n\n    if(window && window.history && window.history.pushState && window.location.href.indexOf("?") > -1) {\n      let g = new URL(window.location.href);\n        a = new URLSearchParams(g.search);\n        c = a.get("utm_source");\n      c && sessionStorage.setItem("utm_source", c);\n      let d = a.get("utm_campaign");\n      d && sessionStorage.setItem("utm_campaign", d);\n      let e = a.get("utm_medium");\n      e && sessionStorage.setItem("utm_medium", e);\n      let f = a.get("deep_link");\n      f && sessionStorage.setItem("deep_link", f);\n      let h = a.get("access_code");\n      h && sessionStorage.setItem("access_code", h);\n      var final = window.location.href.split("?")[0];\n      if (final != window.location.href) {\n        window.history.pushState(null, document.title, final);\n      }\n    }\n\n    const getCookie = (cname) => {\n      if (!navigator.cookieEnabled)\n        return \'\';\n      if (typeof document !== \'undefined\') {\n        const name = cname + "=";\n        const ca = document.cookie.split(\';\');\n        for (let i = 0; i < ca.length; i += 1) {\n          let c = ca[i];\n          while (c.charAt(0) === \' \') c = c.substring(1);\n          if (c.indexOf(name) === 0) return c.substring(name.length, c.length);\n        }\n      }\n      return \'\';\n    }\n    window.gameInfo = {\n      id: "'.concat(t.appId,'",\n      fsWidget: {\n        x: ').concat("object"===typeof t.widgets?null===(i=null===(r=t.widgets)||void 0===r?void 0:r.desktopFullScreen)||void 0===i?void 0:i.left:10,",\n        y: ").concat("object"===typeof t.widgets?null===(s=null===(a=t.widgets)||void 0===a?void 0:a.desktopFullScreen)||void 0===s?void 0:s.top:10,",\n      }\n    }\n    const deviceType = !!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) ? 'ipad' : '';\n    const payload = {\n      appId: \"").concat(t.appId,'",\n      uaId: localStorage.getItem("fe_uaId") || "NA",\n      userType: "NA",\n      uaSessionId: sessionStorage.getItem("fe_uaSessionId") || "NA",\n      packageName: "').concat(n,'",\n      originTimestamp: new Date(),\n      eventName: "').concat("portal"===t.appId?"PortalBootstrap":"FeBootstrap",'",\n      extraData: isNewUser ? { isNewUaId: true } : {},\n      deviceType: deviceType || \'\',\n      utmSource: sessionStorage.getItem("utm_source") || getCookie(\'utm_source\') || "NA",\n      utmMedium: sessionStorage.getItem("utm_medium") || getCookie(\'utm_medium\')|| "NA",\n      utmCampaign: sessionStorage.getItem("utm_campaign") || getCookie(\'utm_campaign\')|| "NA"\n    };\n    window.addEventListener(\'pageshow\', (event) => {\n      if (event.persisted) {\n        window.location.reload();\n      }\n    });\n    fetch("').concat(e,'/api/play/v1/reportEvent", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        "x-ngg-fe-version": "').concat(o.f4,'"\n      },\n      body: JSON.stringify(payload)\n    }).then(response => {\n      if (response.status === 205) {\n        window.location.reload();\n      }\n    }).catch(e => {})\n    try {["start-url", "media", "now-gg-precache"].forEach(a => {caches.delete(a);});} catch (e) {}\n  })()\n}\n')}},8863:function(t,n,e){var o=(0,e(445).vJ)(["*,*::after,*::before{box-sizing:border-box;}html{font-size:10px;user-select:none;accent-color:",";}body{margin:0;padding:0;font-family:",';scrollbar-width:none;-ms-overflow-style:none;}h1,h2,h3,h4,h5,h6,p{margin:0 0 0.5em 0;}a{color:#fff;&:visited,&:hover,&:focused{color:#fff;}}::-webkit-scrollbar{display:none;width:0px;}input[type="checkbox" i]{width:16px;height:16px;cursor:pointer;outline:1px solid ',";}label:focus-within{border:none;outline:1px solid ",";}body{overflow:hidden;display:flex;flex-direction:column;width:100vw;height:100vh;@media only screen and (orientation:portrait){&.rotate-screen{display:flex;transform:rotate(90deg);transform-origin:bottom left;position:absolute;top:-100vw;height:100vw;width:100vmax;background:",";overflow:hidden;}}@media only screen and (orientation:landscape) and (max-height:575.98px){&.portrait-mode{transform:rotate(-90deg);transform-origin:top right;position:absolute;top:0;right:100vw;height:100vw;width:100vh;background:black !important;overflow:hidden;}}#__next{width:100%;height:100%;}}.overlayKey{position:absolute;min-width:25px;text-align:center;transition:left 0.1s ease-in-out,top 0.1s ease-in-out;z-index:1;opacity:0.75;pointer-events:none;&.MOBASkill,&.LBM{.overlayKeyValue:not(.MobaText){background:none;border:none;img{width:26px;}}}&.FreeLook{&.gamepad{.overlayKeyValue{position:absolute;}}}&.Dpad{> span{position:absolute;}}&.Pan{&::before,&::after{content:\"\";}&::before{height:78px;width:1px;position:absolute;background:white;transform:translate3d(-20px,-37px,10px);}&::after{width:78px;height:1px;position:absolute;background:white;transform:translate3d(-59px,-40px,10px);}&.gamepad{&::before,&::after{display:none;}.overlayKeyValue{width:auto;height:auto;padding:10px;&::before{display:none;}}}.overlayKeyValue{width:40px;height:40px;border-radius:50%;align-items:center;display:flex;justify-content:center;position:relative;z-index:1;transition:box-shadow 0.3s ease-in-out;&::before{content:\"\";position:absolute;width:52px;height:52px;left:0;right:0;top:0;bottom:0;border:1px solid white;border-radius:50%;transform:translate3d(-8px,-8px,10px);}}}}.overlayKeyValue{display:block;font-size:12px;line-height:1.1;border-radius:9px;padding:2px 6px;background-color:rgba(8,10,31,0.85);border:1px solid #f7faff;position:relative;white-space:nowrap;transform:translate(-50%,-50%);color:#f7faff;svg{width:16px;height:23px;}&.DpadImage{background:none;border:none;img{width:26px;}}}.simplebar-scrollbar:before{background-color:rgba(255,255,255,0.5);top:30px;bottom:20px;right:5px;}.Toastify__toast-container--top-center{top:100px;}.Toastify__toast-theme--colored.Toastify__toast--default{background-color:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(24px);border-radius:4px;.Toastify__toast-body{font-size:16px;letter-spacing:0.5px;line-height:1.5em;div{text-align:center;color:#ffffff;> kbd{color:#0B0223;background:#EEE3D9;padding:6px 10px;border:1px solid;margin:0 2px;font-weight:500;font-size:14px;line-height:19px;border-radius:4px;}}}}.Toastify__toast-container.Toastify__toast-container--top-center{width:420px;}.Toastify__close-button--colored{display:none;}.select-container{margin:8px 0 0 0;.select{&__control{cursor:pointer;background:rgba(255,255,255,0.1);border:none;}&__indicator-separator{display:none;}&__placeholder,&__single-value{color:rgba(255,255,255,0.6);font-size:14px;}&__menu{color:rgba(255,255,255,0.6);background:#444;}&__option:hover{color:#aaa;background:rgba(0,0,0,.4);cursor:pointer;}}}.icon-gamepad.null{position:relative;&:after{content:'';border:2px;height:29px;width:1.5px;background:currentColor;position:absolute;transform:rotate(40deg);left:10px;top:-4px;}}.hidden{display:none;visibility:hidden;}.btn-bar{position:relative;font-family:Audiowide,sans-serif;width:120px;height:44px;text-transform:uppercase;&:after,&:before{content:'';position:absolute;background:white;top:9%;height:4px;border-radius:3px;}&:after{width:10%;right:16%;}&:before{width:20%;right:30%;}}.portal-page{.quarter-4,.quarter-5{position:static;width:50%;height:auto;rotate:none;background:none;> li{position:static;rotate:none;> div{position:relative;> img{position:static;}}}}}div .fit-html{width:calc(100% - 352px);left:176px;height:auto;}"],(function(t){return t.theme.colors.ascent}),(function(t){return t.theme.fontFamily}),(function(t){return t.theme.colors.ascent}),(function(t){return t.theme.colors.ascent}),(function(t){return t.theme.colors.black}));n.Z=o}}]);
//# sourceMappingURL=258-a8ac91a8fc8d8261.js.map
