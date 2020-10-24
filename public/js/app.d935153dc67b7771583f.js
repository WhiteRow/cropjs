!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var r=n((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),s=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?s(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),o=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=o.svg,u=o.xlink,a={};a[i.name]=i.uri,a[u.name]=u.uri;var s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(a,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(0))},function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),s=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?s(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),r=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),o=r.svg,i=r.xlink,u={};u[o.name]=o.uri,u[i.name]=i.uri;var a,s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(u,e||{}))+">"+t+"</svg>"},c=r.svg,d=r.xlink,f={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},a[c.name]=c.uri,a[d.name]=d.uri,a)},l=function(t){this.config=n(f,t||{}),this.symbols=[]};l.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},l.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},l.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},l.prototype.has=function(t){return null!==this.find(t)},l.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return s(e,t)},l.prototype.toString=function(){return this.stringify()},l.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},y=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),m={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},v=function(t){return Array.prototype.slice.call(t,0)},g=function(){return/firefox/i.test(navigator.userAgent)},w=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},b=function(){return/edge/i.test(navigator.userAgent)},x=function(t){return(t||window.location.href).split("#")[0]},_=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,r){var o,i,u;o=t,i={oldUrl:r,newUrl:n},(u=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,i),window.dispatchEvent(u)}))}])},E=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),v(t.querySelectorAll("symbol")).forEach((function(t){v(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},S=r.xlink.uri,O=/[{}|\\\^\[\]`"<>]/g;function A(t){return t.replace(O,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var j,C=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],M=C.map((function(t){return"["+t+"]"})).join(","),k=function(t,e,n,r){var o=A(n),i=A(r);(function(t,e){return v(t).reduce((function(t,n){if(!n.attributes)return t;var r=v(n.attributes),o=e?r.filter(e):r;return t.concat(o)}),[])})(t.querySelectorAll(M),(function(t){var e=t.localName,n=t.value;return-1!==C.indexOf(e)&&-1!==n.indexOf("url("+o)})).forEach((function(t){return t.value=t.value.replace(new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){v(t).forEach((function(t){var r=t.getAttribute("xlink:href");if(r&&0===r.indexOf(e)){var o=r.replace(e,n);t.setAttributeNS(S,"xlink:href",o)}}))}(e,o,i)},N="mount",B="symbol_mount",T=function(t){function e(e){var r=this;void 0===e&&(e={}),t.call(this,n(m,e));var o,i=(o=o||Object.create(null),{on:function(t,e){(o[t]||(o[t]=[])).push(e)},off:function(t,e){o[t]&&o[t].splice(o[t].indexOf(e)>>>0,1)},emit:function(t,e){(o[t]||[]).map((function(t){t(e)})),(o["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(e),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(N,(function(){return r.updateUrls("#",a)}))}var s=this._handleLocationChange.bind(this);this._handleLocationChange=s,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,s),u.locationChangeAngularEmitter&&_(u.locationChangeEvent),i.on(N,(function(t){u.moveGradientsOutsideSymbol&&E(t)})),i.on(B,(function(t){var e;u.moveGradientsOutsideSymbol&&E(t.parentNode),(w()||b())&&(e=[],v(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=g())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(B,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(B,t.node)})),v(r.querySelectorAll("symbol")).forEach((function(t){var e=y.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(N,r),r},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e&&n.childNodes[0]?n.insertBefore(r,n.childNodes[0]):n.appendChild(r),this._emitter.emit(N,r),r},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return k(this.node,n,x(t)+"#",x(e)+"#"),!0},Object.defineProperties(e.prototype,r),e}(l),P=t((function(t){var e,n,r,o,i;t.exports=(n=[],r=document,o=r.documentElement.doScroll,(i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState))||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),function(t){i?setTimeout(t,0):n.push(t)})}));window.__SVG_SPRITE__?j=window.__SVG_SPRITE__:(j=new T({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=j);var L=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?j.attach(t):j.mount(document.body,!0)};return document.body?L():P(L),j},t.exports=n()}).call(this,n(0))},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(2),u=n.n(i),a=new o.a({id:"cursor",use:"cursor-usage",viewBox:"0 0 300 300",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="cursor"><path d="M149.996 0C67.157 0 .001 67.161.001 149.997S67.157 300 149.996 300s150.003-67.163 150.003-150.003S232.835 0 149.996 0zM208.8 94.181l-38.097 107.473a2.59 2.59 0 01-2.067 1.699 2.597 2.597 0 01-2.469-1.032l-19.346-26.434-31.981 31.979c-.506.506-1.17.76-1.834.76s-1.328-.254-1.834-.76L91.806 188.5a2.59 2.59 0 010-3.667l31.979-31.984-26.436-19.343a2.594 2.594 0 01.664-4.536l107.473-38.097a2.588 2.588 0 012.7.609c.71.704.949 1.755.614 2.699z" /></symbol>'});u.a.add(a),n(3);console.log("App included")}]);