/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{299:function(t,e,n){var r;r=function(){return function(){var t={134:function(t,e,n){"use strict";n.d(e,{default:function(){return A}});var r=n(279),o=n.n(r),c=n(370),l=n.n(c),f=n(817),h=n.n(f);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}var e,n,r;return e=t,(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=h()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=h()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==d(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&y(e.prototype,n),r&&y(e,r),t}();function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,p){return(E=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S(t);if(e){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,element){var e="data-clipboard-".concat(t);if(element.hasAttribute(e))return element.getAttribute(e)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(c,t);var e,n,r,o=k(c);function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return e=c,r=[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===v(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=l()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new m({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return T("action",t)}},{key:"defaultTarget",value:function(t){var e=T("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return T("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&w(e.prototype,n),r&&w(e,r),c}(o())},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(element,t){for(;element&&9!==element.nodeType;){if("function"==typeof element.matches&&element.matches(t))return element;element=element.parentNode}}},438:function(t,e,n){var r=n(828);function o(element,t,e,n,r){var o=c.apply(this,arguments);return element.addEventListener(e,o,r),{destroy:function(){element.removeEventListener(e,o,r)}}}function c(element,t,e,n){return function(e){e.delegateTarget=r(e.target,t),e.delegateTarget&&n.call(element,e)}}t.exports=function(t,e,n,r,c){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(element){return o(element,e,n,r,c)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(element){var t;if("SELECT"===element.nodeName)element.focus(),t=element.value;else if("INPUT"===element.nodeName||"TEXTAREA"===element.nodeName){var e=element.hasAttribute("readonly");e||element.setAttribute("readonly",""),element.select(),element.setSelectionRange(0,element.value.length),e||element.removeAttribute("readonly"),t=element.value}else{element.hasAttribute("contenteditable")&&element.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(element),n.removeAllRanges(),n.addRange(r),t=n.toString()}return t}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var data=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),i=0,n=e.length;i<n;i++)e[i].fn.apply(e[i].ctx,data);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,c=r.length;i<c;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(134)}().default},t.exports=r()},333:function(t,e,n){(function(){"use strict";var e=function(s,t){return t=t||"",s.replace(/(^|-)/g,"$1\\u"+t).replace(/,/g,"\\u"+t)},n=e("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),r="a-z"+e("DF-F6,F8-FF","00"),o="A-Z"+e("C0-D6,D8-DE","00"),c=function(t,e,c,l){return t=t||n,e=e||r,c=c||o,l=l||"A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",{capitalize:new RegExp("(^|["+t+"])(["+e+"])","g"),pascal:new RegExp("(^|["+t+"])+(["+e+c+"])","g"),fill:new RegExp("["+t+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+e+"])","g"),improper:new RegExp("\\b("+l+")\\b","g"),relax:new RegExp("([^"+c+"])(["+c+"]*)(["+c+"])(?=[^"+c+"]|$)","g"),upper:new RegExp("^[^"+e+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+t+"]")}},l=c(),f={re:l,unicodes:e,regexps:c,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(s){return f.up.call(s.charAt(0))+s.slice(1)},decap:function(s){return f.low.call(s.charAt(0))+s.slice(1)},deapostrophe:function(s){return s.replace(l.apostrophe,"")},fill:function(s,t,e){return null!=t&&(s=s.replace(l.fill,(function(e,n){return n?t+n:""}))),e&&(s=f.deapostrophe(s)),s},prep:function(s,t,e,n){if(s=null==s?"":s+"",!n&&l.upper.test(s)&&(s=f.low.call(s)),!t&&!l.hole.test(s)){var r=f.fill(s," ");l.hole.test(r)&&(s=r)}return e||l.room.test(s)||(s=s.replace(l.relax,f.relax)),s},relax:function(t,e,n,r){return e+" "+(n?n+" ":"")+r}},h={_:f,of:function(s){for(var i=0,t=f.types.length;i<t;i++)if(h[f.types[i]].apply(h,arguments)===s)return f.types[i]},flip:function(s){return s.replace(/\w/g,(function(t){return(t==f.up.call(t)?f.low:f.up).call(t)}))},random:function(s){return s.replace(/\w/g,(function(t){return(Math.round(Math.random())?f.up:f.low).call(t)}))},type:function(t,e){h[t]=e,f.types.push(t)}},d={lower:function(s,t,e){return f.fill(f.low.call(f.prep(s,t)),t,e)},snake:function(s){return h.lower(s,"_",!0)},constant:function(s){return h.upper(s,"_",!0)},camel:function(s){return f.decap(h.pascal(s))},kebab:function(s){return h.lower(s,"-",!0)},upper:function(s,t,e){return f.fill(f.up.call(f.prep(s,t,!1,!0)),t,e)},capital:function(s,t,e){return f.fill(f.prep(s).replace(l.capitalize,(function(t,e,n){return e+f.up.call(n)})),t,e)},header:function(s){return h.capital(s,"-",!0)},pascal:function(s){return f.fill(f.prep(s,!1,!0).replace(l.pascal,(function(t,e,n){return f.up.call(n)})),"",!0)},title:function(s){return h.capital(s).replace(l.improper,(function(small,p,i,s){return i>0&&i<s.lastIndexOf(" ")?f.low.call(small):small}))},sentence:function(s,t,e){return s=h.lower(s).replace(l.sentence,(function(t,e,n){return e+f.up.call(n)})),t&&t.forEach((function(t){s=s.replace(new RegExp("\\b"+h.lower(t)+"\\b","g"),f.cap)})),e&&e.forEach((function(abbr){s=s.replace(new RegExp("(\\b"+h.lower(abbr)+"\\. +)(\\w)"),(function(t,e,n){return e+f.low.call(n)}))})),s}};for(var y in d.squish=d.pascal,h.default=h,d)h.type(y,d[y]);var m="function"==typeof m?m:function(){};m(t.exports?t.exports=h:this.Case=h)}).call(this)}}]);