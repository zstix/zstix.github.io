parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qXjy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e="#eee",t=function(t){t.setAttribute("style",""),t.innerHTML="",t.setAttribute("style","background-color: ".concat(e))},o={color:"black",render:t,style:"background-color: ".concat(e)};exports.default=o;
},{}],"F6PD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["#800000","#FF0000","#808000","#FFFF00","#008000","#00FF00","#008080","#00FFFF","#000080","#0000FF","#0000FF","#FF00FF","#808040","#FFFF80","#004040","#00FF80","#0080FF","#80FFFF","#004080","#8080FF","#8000FF","#FF0080","#804000","#FF8040"],t={x:300,y:300},n=function(e,n){var F=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;e.fillStyle=n;for(var r=0;r<=F;r++)e.fillRect(t.x,t.y,3,3),t.x+=3*(Math.round(2*Math.random())-1),t.y+=3*(Math.round(2*Math.random())-1),t.x<=0&&(t.x=0),t.y<=0&&(t.y=0),t.x>=window.innerWidth&&(t.x=window.innerWidth),t.y>=window.innerHeight&&(t.y=window.innerHeigh)},F=function(F){F.setAttribute("style","");var r=document.createElement("canvas");F.appendChild(r),r.width=window.innerWidth,r.height=window.innerHeight;var i=r.getContext("2d");t.x=300,t.y=300;for(var d=0;d<=1e3;d++){var a=Math.round(Math.random()*e.length),o=e[a];n(i,o)}},r={color:"black",render:F,style:"background-image: radial-gradient(red, yellow, green, blue, purple)"};exports.default=r;
},{}],"Koq2":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=c(require("./plain")),t=c(require("./rainbow"));function c(e){return e&&e.__esModule?e:{default:e}}require("../scss/main.scss");var o=[e.default,t.default],r=document.querySelector(".controls"),n=document.querySelector(".background-container"),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"black",t=document.querySelectorAll(".js-colors"),c="black"===e?"black-on-white":"white-on-black";t.forEach(function(e){e.classList.remove("black-on-white"),e.classList.remove("white-on-black"),e.classList.add(c)})},a=function(e,t){var c=e.color;(0,e.render)(t),l(c)},s=function(e,t,c){e.forEach(function(e){var c=document.createElement("div");c.classList.add("control"),c.classList.add("js-colors"),c.setAttribute("style",e.style),t.appendChild(c)});a(e[1],c),t.querySelectorAll(".control").forEach(function(t,o){t.addEventListener("click",function(t){a(e[o],c)})})};s(o,r,n);
},{"./plain":"qXjy","./rainbow":"F6PD","../scss/main.scss":"Koq2"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map