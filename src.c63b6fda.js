parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/header@320x1-min.jpg":[["header@320x1-min.ad4a51a3.jpg","L6bq"],"L6bq"],"./../images/header@320x2-min.jpg":[["header@320x2-min.665fc311.jpg","toyP"],"toyP"],"./../images/header@768x1-min.jpg":[["header@768x1-min.f0f00259.jpg","m8bb"],"m8bb"],"./../images/header@768x2-min.jpg":[["header@768x2-min.fd33d0b3.jpg","uzA3"],"uzA3"],"./../images/header_1024x1-min.jpg":[["header_1024x1-min.4a18d2c1.jpg","LQds"],"LQds"],"./../images/header_1024x2-min.jpg":[["header_1024x2-min.25f43f08.jpg","KxTT"],"KxTT"],"./../images/headerMyLibruary@320x1-min.jpg":[["headerMyLibruary@320x1-min.e26c2fe3.jpg","CNCj"],"CNCj"],"./../images/headerMyLibruary@320x2-min.jpg":[["headerMyLibruary@320x2-min.a0e33752.jpg","cmwd"],"cmwd"],"./../images/headerMyLibruary@768x1-min.jpg":[["headerMyLibruary@768x1-min.0ce0392e.jpg","d86p"],"d86p"],"./../images/headerMyLibruary@768x2-min.jpg":[["headerMyLibruary@768x2-min.bb0a3861.jpg","qpF7"],"qpF7"],"./../images/headerMyLibruary@1024x1-min.jpg":[["headerMyLibruary@1024x1-min.e84cc8c3.jpg","Ewkf"],"Ewkf"],"./../images/headerMyLibruary@1024x2-min.jpg":[["headerMyLibruary@1024x2-min.9284e420.jpg","G72J"],"G72J"]}],"Sc1o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=document.querySelector("#spinner-js");class n{active(){return e.innerHTML='<div\nclass="loading-eclipse">\n  <div class="spinnerEl">\n    <div>\n    </div>\n  </div>\n</div>'}hidden(){e.innerHTML=""}}exports.default=n;
},{}],"Lspp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(){this.keyQueue="index",this.keyWatch="id",this.value=""}getValueQueue(){const e=localStorage.getItem(this.keyQueue);return null!==e?JSON.parse(e):[]}getValueWatched(){const e=localStorage.getItem(this.keyWatch);return null!==e?JSON.parse(e):[]}saveValueWatched(e){let t=this.getValueWatched(),a=!1;const s=t.indexOf(e);return-1===s?(t.push(e),a=!0):t.splice(s,1),localStorage.setItem(this.keyWatch,JSON.stringify(t)),{pushKey:a,keyWatched:t}}saveValueQueue(e){let t=this.getValueQueue(),a=!1;const s=t.indexOf(e);return-1===s?(t.push(e),a=!0):t.splice(s,1),localStorage.setItem(this.keyQueue,JSON.stringify(t)),{pushKey:a,keyQueue:t}}fetchWatchedCards(){try{JSON.parse(localStorage.getItem(this.keyWatch)).forEach(e=>{renderModal(e)})}catch(e){console.log(console.error(e))}}fetchQueueCards(){try{JSON.parse(localStorage.getItem(this.keyQueue)).forEach(e=>{renderModal(e)})}catch(e){console.log(console.error(e))}}}exports.default=e;
},{}],"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"EOMh":[function(require,module,exports) {
"use strict";var e=t(require("lodash.throttle"));function t(e){return e&&e.__esModule?e:{default:e}}const n=document.querySelector("#scroll-btn");function o(e){window.scrollTo({top:0,behavior:"smooth"})}function l(e){return function(t){pageYOffset<document.documentElement.clientHeight?e.classList.add("visually-hidden"):e.classList.remove("visually-hidden")}}window.addEventListener("scroll",(0,e.default)(l(n),250)),n.addEventListener("click",o);
},{"lodash.throttle":"FNyO"}],"uSnu":[function(require,module,exports) {
const e={LIGHT:"light-theme",DARK:"dark-theme"},t=document.querySelector(".section-hero"),c=document.querySelector("#theme-switch-toggle");function o(e){e.currentTarget.checked?s():n()}function s(){t.classList.add(e.DARK),t.classList.remove(e.LIGHT),localStorage.setItem("theme",e.DARK),c.checked=!0}function n(){t.classList.add(e.LIGHT),t.classList.remove(e.DARK),localStorage.setItem("theme",e.LIGHT),c.checked=!1}function a(){const t=localStorage.getItem("theme");t!==e.LIGHT&&null!==t?t!==e.DARK||s():n()}c.addEventListener("change",o),a();
},{}],"pAws":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof e&&e.amd?e([],r):"object"==typeof exports?exports.Handlebars=r():t.Handlebars=r()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";var n=r(1).default,o=r(2).default;t.__esModule=!0;var a=n(r(3)),i=o(r(36)),u=o(r(5)),l=n(r(4)),s=n(r(37)),c=o(r(43));function f(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=u.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var p=f();p.create=f,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.HandlebarsEnvironment=c;var o=r(4),a=n(r(5)),i=r(9),u=r(29),l=n(r(31)),s=r(32);t.VERSION="4.7.7";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var f=l.default.log;t.log=f,t.createFrame=o.createFrame,t.logger=l.default},function(e,t){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(n,a)},t.isEmpty=function(e){return!e&&0!==e||!(!s(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=l;var s=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=s},function(e,t,r){"use strict";var n=r(6).default;t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,i=void 0,u=void 0,l=void 0,s=void 0;r&&(i=r.start.line,u=r.end.line,l=r.start.column,s=r.end.column,e+=" - "+i+":"+l);for(var c=Error.prototype.constructor.call(this,e),f=0;f<o.length;f++)this[o[f]]=c[o[f]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=i,this.endLineNumber=u,n?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(p){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,r){e.exports={default:r(7),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),u.default(e),l.default(e),s.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(10)),a=n(r(11)),i=n(r(24)),u=n(r(25)),l=n(r(26)),s=n(r(27)),c=n(r(28))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)})},e.exports=t.default},function(e,t,r){(function(n){"use strict";var o=r(12).default,a=r(2).default;t.__esModule=!0;var i=r(4),u=a(r(5));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new u.default("Must pass iterator to #each");var r,a=t.fn,l=t.inverse,s=0,c="",f=void 0,p=void 0;function d(t,r,n){f&&(f.key=t,f.index=r,f.first=0===r,f.last=!!n,p&&(f.contextPath=p+t)),c+=a(e[t],{data:f,blockParams:i.blockParams([e[t],t],[p+t,null])})}if(t.data&&t.ids&&(p=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(f=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var h=e.length;s<h;s++)s in e&&d(s,s,s===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var v=[],m=e[n.Symbol.iterator](),g=m.next();!g.done;g=m.next())v.push(g.value);for(h=(e=v).length;s<h;s++)d(s,s,s===e.length-1)}else r=void 0,o(e).forEach(function(e){void 0!==r&&d(r,s-1),r=e,s++}),void 0!==r&&d(r,s-1,!0);return 0===s&&(c=l(this)),c})},e.exports=t.default}).call(t,function(){return this}())},function(e,t,r){e.exports={default:r(13),__esModule:!0}},function(e,t,r){r(14),e.exports=r(20).Object.keys},function(e,t,r){var n=r(15);r(17)("keys",function(e){return function(t){return e(n(t))}})},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(18),o=r(20),a=r(23);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},function(e,t,r){var n=r(19),o=r(20),a=r(21),i=function(e,t,r){var u,l,s,c=e&i.F,f=e&i.G,p=e&i.S,d=e&i.P,h=e&i.B,v=e&i.W,m=f?o:o[t]||(o[t]={}),g=f?n:p?n[t]:(n[t]||{}).prototype;for(u in f&&(r=t),r)(l=!c&&g&&u in g)&&u in m||(s=l?g[u]:r[u],m[u]=f&&"function"!=typeof g[u]?r[u]:h&&l?a(s,n):v&&g[u]==s?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(s):d&&"function"==typeof s?a(Function.call,s):s,d&&((m.prototype||(m.prototype={}))[u]=s))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(22);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=n(r(5));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("if",function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t,r){return e?r.lookupProperty(e,t):e})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var o=n(r(30))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var u=e(o,a);return r.partials=i,u}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";var n=r(33).default,o=r(12).default,a=r(1).default;t.__esModule=!0,t.createProtoAccessControl=function(e){var t=n(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=n(null);return r.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return s("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){o(l).forEach(function(e){delete l[e]})};var i=r(35),u=a(r(31)),l=n(null);function s(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==l[e]&&(l[e]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){e.exports={default:r(34),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){"use strict";var n=r(33).default;t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.extend.apply(void 0,[n(null)].concat(t))};var o=r(4)},function(e,t){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,r){"use strict";var n=r(38).default,o=r(12).default,a=r(1).default,i=r(2).default;t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)return;if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t];throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new l.default("No environment passed to template");if(!e||!e.main)throw new l.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var a={strict:function(e,t,r){if(!(e&&t in e))throw new l.default('"'+t+'" not defined in '+e,{loc:r});return a.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r?r:Object.prototype.hasOwnProperty.call(e,t)?r:p.resultIsAllowed(r,a.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++){var o=e[n]&&a.lookupProperty(e[n],t);if(null!=o)return e[n][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:u.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=u.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,n,o);var a=u.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),i=t.VM.invokePartial.call(this,r,n,a);null==i&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),i=o.partials[o.name](n,a));if(null!=i){if(o.indent){for(var s=i.split("\n"),c=0,f=s.length;c<f&&(s[c]||c+1!==f);c++)s[c]=o.indent+s[c];i=s.join("\n")}return i}throw new l.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=d(this,e,i,t,r,n,o):a||(a=this.programs[e]=d(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=u.extend({},t,e)),r},nullContext:n({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;i._setup(r),!r.partial&&e.useData&&(n=function(e,t){t&&"root"in t||((t=t?s.createFrame(t):{}).root=e);return t}(t,n));var o=void 0,u=e.useBlockParams?[]:void 0;function l(t){return""+e.main(a,t,a.helpers,a.partials,n,u,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=v(e.main,l,a,r.depths||[],n,u))(t,r)}return i.isTop=!0,i._setup=function(n){if(n.partial)a.protoAccessControl=n.protoAccessControl,a.helpers=n.helpers,a.partials=n.partials,a.decorators=n.decorators,a.hooks=n.hooks;else{var i=u.extend({},t.helpers,n.helpers);!function(e,t){o(e).forEach(function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return f.wrapHelper(e,function(e){return u.extend({lookupProperty:r},e)})}(n,t)})}(i,a),a.helpers=i,e.usePartial&&(a.partials=a.mergeIfNeeded(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=u.extend({},t.decorators,n.decorators)),a.hooks={},a.protoAccessControl=p.createProtoAccessControl(n);var l=n.allowCallsToHelperMissing||r;c.moveHelperToHooks(a,"helperMissing",l),c.moveHelperToHooks(a,"blockHelperMissing",l)}},i._child=function(t,r,n,o){if(e.useBlockParams&&!n)throw new l.default("must pass block params");if(e.useDepths&&!o)throw new l.default("must pass parent depths");return d(a,t,e[t],r,0,n,o)},i},t.wrapProgram=d,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==h&&function(){r.data=s.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=u.extend({},r.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new l.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=h;var u=a(r(4)),l=i(r(5)),s=r(3),c=r(9),f=r(42),p=r(32);function d(e,t,r,n,o,a,i){function u(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(u=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),u)}return(u=v(r,u,e,i,n,a)).program=t,u.depth=i?i.length:0,u.blockParams=o||0,u}function h(){return""}function v(e,t,r,n,o,a){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],o,a,n),u.extend(t,i)}return t}},function(e,t,r){e.exports={default:r(39),__esModule:!0}},function(e,t,r){r(40),e.exports=r(20).Object.seal},function(e,t,r){var n=r(41);r(17)("seal",function(e){return function(t){return e&&n(t)?e(t):t}})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t){(function(r){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,function(){return this}())}])});
},{}],"CoUn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=l(require("handlebars/dist/handlebars.runtime"));function l(t){return t&&t.__esModule?t:{default:t}}const n=t.default.template({compiler:[8,">= 4.3.0"],main:function(t,l,n,e,a){var i,s,o=null!=l?l:t.nullContext||{},c=t.hooks.helperMissing,r="function",u=t.escapeExpression,p=t.lookupProperty||function(t,l){if(Object.prototype.hasOwnProperty.call(t,l))return t[l]};return"<div class='movie-card js-movie-card'>\n  <picture class='img-container'>\n    <img\n      class='movie-card__image'\n      src='https://image.tmdb.org/t/p/original/"+u(typeof(s=null!=(s=p(n,"poster_path")||(null!=l?p(l,"poster_path"):l))?s:c)===r?s.call(o,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:47},end:{line:5,column:62}}}):s)+"'\n      alt='movie poster'\n    />\n  </picture>\n  <div class='movie-card__description'>\n    <h2 class='movie__title'>"+u(typeof(s=null!=(s=p(n,"original_title")||(null!=l?p(l,"original_title"):l))?s:c)===r?s.call(o,{name:"original_title",hash:{},data:a,loc:{start:{line:10,column:29},end:{line:10,column:47}}}):s)+"</h2>\n    <ul class='movie__stats-list'>\n      <li class='movie__stats-item'>\n        <p class='stats-title'>Vote / Votes</p>\n        <p class='stats-description'><span class=\"vote\">"+u(typeof(s=null!=(s=p(n,"vote_average")||(null!=l?p(l,"vote_average"):l))?s:c)===r?s.call(o,{name:"vote_average",hash:{},data:a,loc:{start:{line:14,column:56},end:{line:14,column:72}}}):s)+"</span></span> / "+u(typeof(s=null!=(s=p(n,"vote_count")||(null!=l?p(l,"vote_count"):l))?s:c)===r?s.call(o,{name:"vote_count",hash:{},data:a,loc:{start:{line:14,column:89},end:{line:14,column:103}}}):s)+"</p>\n        </li>\n      <li class='movie__stats-item'>\n        <p class='stats-title'>Popularity</p>\n        <p class='stats-description popularity'>"+u(typeof(s=null!=(s=p(n,"popularity")||(null!=l?p(l,"popularity"):l))?s:c)===r?s.call(o,{name:"popularity",hash:{},data:a,loc:{start:{line:18,column:48},end:{line:18,column:62}}}):s)+"</p>\n        </li>\n      <li class='movie__stats-item'>\n        <p class='stats-title'>Original Title</p>\n        <p class='stats-description original-title'>"+u(typeof(s=null!=(s=p(n,"original_title")||(null!=l?p(l,"original_title"):l))?s:c)===r?s.call(o,{name:"original_title",hash:{},data:a,loc:{start:{line:22,column:52},end:{line:22,column:70}}}):s)+"</p>\n        </li>\n      <li class='movie__stats-item'>\n        <p class='stats-title'>Genre</p>\n        <p class='stats-description genre'>"+u(t.lambda(null!=(i=null!=(i=null!=l?p(l,"genres"):l)?p(i,"1"):i)?p(i,"name"):i,l))+"</p>\n        </li>\n    </ul>\n    <div class='movie__description-text'>\n      <h3 class='movie__description-title'>ABOUT</h3>\n      <p class='movie__description'>"+u(typeof(s=null!=(s=p(n,"overview")||(null!=l?p(l,"overview"):l))?s:c)===r?s.call(o,{name:"overview",hash:{},data:a,loc:{start:{line:31,column:36},end:{line:31,column:48}}}):s)+"</p>\n    </div>\n    <div class='movie-card__button'>\n      <button class='library-button active-btn'>add to Watched</button>\n      <button class='library-button transparent-btn'>add to queue</button>\n    </div>\n  </div>\n</div>"},useData:!0});var e=n;exports.default=e;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"RSqK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../templates/movieCard.hbs"));function t(e){return e&&e.__esModule?e:{default:e}}const o="f67bdd430ce819844e2a075541409928",n="https://api.themoviedb.org/3/",i={modalEl:document.querySelector("#modal__win"),closeBtnEl:document.querySelector('button[data-action="close-modal"]'),bodyEl:document.querySelector("body"),modalContentEl:document.querySelector(".js-modal__content"),movieCardEl:document.querySelector(".js-movie-card"),movieTitle:document.querySelector('[data-action="modal_movie_title"]'),movieCard:document.querySelector(".movie-card__image"),movieVoteAvarage:document.querySelector('[data-action="vote_average"]'),movieVoteCount:document.querySelector('[data-action="vote_count"]'),moviePopularity:document.querySelector('[data-action="popularity"]'),movieListTitle:document.querySelector('[data-action="original-title"]'),movieGenre:document.querySelector('[data-action="genre"]'),movieAbout:document.querySelector(".movie__description"),modalBtnAddWatched:document.querySelector('[data-action="modalBtnAddWatched"]'),movieBtnQueue:document.querySelector('[data-action="movieBtnQueue"]')};async function a(t){const a=await fetch(`${n}movie/${t}?api_key=${o}&language=en-US`),d=await a.json(),r=(0,e.default)(d);i.modalContentEl.insertAdjacentHTML("beforeend",r)}function d(){i.modalContentEl.innerHTML=""}function r(e){e.preventDefault(),d(),a(e.target.id),c()}function c(){i.modalEl.classList.remove("is-hidden"),i.bodyEl.classList.add("hidden"),window.addEventListener("keydown",l)}function l(e){"Escape"===e.code&&(i.modalEl.classList.add("is-hidden"),window.removeEventListener("keydown",l),u())}function u(){i.modalEl.classList.add("is-hidden"),i.bodyEl.classList.remove("hidden")}function m(e){e.target===i.modalEl&&u()}async function s(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=6acc6746be8af475302214b8237b9c48&language=en-US`),o=await t.json();i.movieTitle.innerHTML=o.original_title,i.movieCard.src=`https://image.tmdb.org/t/p/original/${o.poster_path}`,i.movieVoteAvarage.innerHTML=o.vote_average,i.movieVoteCount.innerHTML=o.vote_count,i.moviePopularity.innerHTML=o.popularity,i.movieListTitle.innerHTML=o.original_title,i.movieGenre.innerHTML=o.genres[0].name,i.movieAbout.innerHTML=o.overview,i.modalBtnAddWatched.id=o.id,i.movieBtnQueue.id=o.id}i.closeBtnEl.addEventListener("click",u),document.addEventListener("click",m);var v=r;exports.default=v;
},{"../templates/movieCard.hbs":"CoUn"}],"hhFr":[function(require,module,exports) {
(()=>{const o={openModalFooter:document.querySelector("[data-modal-footer-open]"),closeModalFooter:document.querySelector("[data-modal-footer-close]"),footerModal:document.querySelector("[data-modal-footer]")};function e(e){o.footerModal.classList.toggle("is-hidden"),e.preventDefault()}o.openModalFooter.addEventListener("click",e),o.closeModalFooter.addEventListener("click",e)})();
},{}],"Lmr6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="6acc6746be8af475302214b8237b9c48",t="https://api.themoviedb.org/3/";class s{constructor(){this.searchQuery="",this.page=1}fetchFilms(){const s=`${t}search/movie?api_key=${e}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return fetch(s).then(e=>e.json()).then(({results:e})=>(this.incrementPage(),e))}fetchTrendingFilms(){return fetch(`${t}trending/movie/day?api_key=${e}`).then(e=>e.json()).then(({results:e})=>e)}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}exports.default=s;
},{}],"swNO":[function(require,module,exports) {
module.exports=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];
},{}],"tPRn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=n(require("../json/genres.json"));function n(e){return e&&e.__esModule?e:{default:e}}function t(n){return n.map(n=>{const{poster_path:t,original_title:i,release_date:s,genre_ids:r,vote_average:l,id:a}=n;return`<li class="film-item">\n                  <a href="" class="film-link">\n                  <img src="https://image.tmdb.org/t/p/w342/${t}" alt="{{original_title}}" class="film-img" id="${a}">\n                  <p class="film-description">${i}\n                  </p>\n                  <p class="film-description  film-gengers">${(n=>{let t=[];for(const i of n)for(const n of e.default)n.id===i&&t.push(n.name);return t.length>2&&(t.length=2),t.join(", ")})(r)},       \n          Other | ${s.slice(0,4)} <span class="film-raiting">${l}<span>\n                  </p>\n                  </a>\n                  </li>`}).join("")}
},{"../json/genres.json":"swNO"}],"RFle":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor({selector:e,hidden:s=!1}){this.refs=this.getRefs(e),s&&this.hide()}getRefs(e){const s={};return s.button=document.querySelector(e),s.label=s.button.querySelector(".label"),s.spinner=s.button.querySelector(".spinner"),s}enable(){this.refs.button.disabled=!1,this.refs.label.textContent="Show more",this.refs.spinner.classList.add("is-hidden")}disable(){this.refs.button.disabled=!0,this.refs.label.textContent="Loading...",this.refs.spinner.classList.remove("is-hidden")}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}}exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=o(require("./js/spinner")),t=o(require("./js/localStorageAPI"));require("./js/btn-scroll"),require("./js/toggle");var r=o(require("./js/modal.js"));require("./js/modal-footer");var n=o(require("./js//films-api.js")),a=o(require("./js/filmsRender")),i=o(require("./js/components/load-more-btn"));function o(e){return e&&e.__esModule?e:{default:e}}const s={searchForm:document.querySelector('[data-index="search-form"]'),filmsContainer:document.querySelector(".film-list"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},d=new i.default({selector:'[data-action="load-more"]',hidden:!0}),c=new n.default;function u(){c.fetchTrendingFilms().then(f)}function l(e){if(e.preventDefault(),c.query=e.currentTarget.query.value,""===c.query)return alert("Search result not successful. Enter the correct movie name and ");c.resetPage(),d.show(),d.disable(),b(),m(),(0,r.default)()}function m(){d.disable(),setTimeout(()=>{c.fetchFilms().then(f).then(d.enable())},1500)}function f(e){s.filmsContainer.insertAdjacentHTML("beforeend",(0,a.default)(e))}function b(){s.filmsContainer.innerHTML=""}s.filmsContainer.addEventListener("click",r.default),s.searchForm.addEventListener("submit",l),d.refs.button.addEventListener("click",m),u();const h={header:document.querySelector('[data-index="header"]'),homeBtn:document.querySelector('[data-index="home"]'),myLibraryBtn:document.querySelector('[data-index="mylibrary"]')};function y(){h.header.classList.remove("header-background-home"),h.header.classList.add("header-background-myLibrary")}h.myLibraryBtn.addEventListener("click",e=>{e.preventDefault(),y(),h.myLibraryBtn.classList.add("current"),h.homeBtn.classList.remove("current"),s.searchForm.innerHTML='<button class="library-button active-btn">\n                    WATCHED\n                </button>\n        \n                <button class="library-button inactive-btn">\n                    QUEUE\n                </button>',s.filmsContainer.innerHTML="НИЧЕГО НЕ НАЙДЕНО"});const q=new e.default,v=document.querySelector('[data-action="modalBtnAddWatched"]'),L=new t.default;v.addEventListener("click",e=>{e.preventDefault(),L.saveValueWatched(e.target.id)});
},{"./sass/main.scss":"clu1","./js/spinner":"Sc1o","./js/localStorageAPI":"Lspp","./js/btn-scroll":"EOMh","./js/toggle":"uSnu","./js/modal.js":"RSqK","./js/modal-footer":"hhFr","./js//films-api.js":"Lmr6","./js/filmsRender":"tPRn","./js/components/load-more-btn":"RFle"}]},{},["Focm"], null)
//# sourceMappingURL=/project-JS-NightCoders/src.c63b6fda.js.map