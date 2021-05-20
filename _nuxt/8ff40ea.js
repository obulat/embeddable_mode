/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{291:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=o.join(","),c="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function l(e,t){t=t||{};var i,n,o,l=[],f=[],v=e.querySelectorAll(r);for(t.includeContainer&&c.call(e,r)&&(v=Array.prototype.slice.apply(v)).unshift(e),i=0;i<v.length;i++)d(n=v[i])&&(0===(o=m(n))?l.push(n):f.push({documentOrder:i,tabIndex:o,node:n}));return f.sort(h).map((function(a){return a.node})).concat(l)}function d(e){return!(!f(e)||function(e){return function(e){return y(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var i=0;i<e.length;i++)if(e[i].checked)return e[i]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||m(e)<0)}function f(e){return!(e.disabled||function(e){return y(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}l.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==c.call(e,r)&&d(e)},l.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==c.call(e,v)&&f(e)};var v=o.concat("iframe").join(",");function m(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function h(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex}function y(e){return"INPUT"===e.tagName}var k,w=l,x=function(){for(var e={},i=0;i<arguments.length;i++){var source=arguments[i];for(var t in source)E.call(source,t)&&(e[t]=source[t])}return e},E=Object.prototype.hasOwnProperty;var F,O=(F=[],{activateTrap:function(e){if(F.length>0){var t=F[F.length-1];t!==e&&t.pause()}var n=F.indexOf(e);-1===n||F.splice(n,1),F.push(e)},deactivateTrap:function(e){var t=F.indexOf(e);-1!==t&&F.splice(t,1),F.length>0&&F[F.length-1].unpause()}});function D(e){return setTimeout(e,0)}var T=function(element,e){var t=document,n="string"==typeof element?t.querySelector(element):element,o=x({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),r={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},c={activate:function(e){if(r.active)return;T(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=t.activeElement;var n=e&&e.onActivate?e.onActivate:o.onActivate;n&&n();return d(),c},deactivate:l,pause:function(){if(r.paused||!r.active)return;r.paused=!0,f()},unpause:function(){if(!r.paused||!r.active)return;r.paused=!1,T(),d()}};return c;function l(e){if(r.active){clearTimeout(k),f(),r.active=!1,r.paused=!1,O.deactivateTrap(c);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:o.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:o.returnFocusOnDeactivate)&&D((function(){var e;N((e=r.nodeFocusedBeforeActivation,v("setReturnFocus")||e))})),c}}function d(){if(r.active)return O.activateTrap(c),k=D((function(){N(m())})),t.addEventListener("focusin",y,!0),t.addEventListener("mousedown",h,{capture:!0,passive:!1}),t.addEventListener("touchstart",h,{capture:!0,passive:!1}),t.addEventListener("click",F,{capture:!0,passive:!1}),t.addEventListener("keydown",E,{capture:!0,passive:!1}),c}function f(){if(r.active)return t.removeEventListener("focusin",y,!0),t.removeEventListener("mousedown",h,!0),t.removeEventListener("touchstart",h,!0),t.removeEventListener("click",F,!0),t.removeEventListener("keydown",E,!0),c}function v(e){var n=o[e],r=n;if(!n)return null;if("string"==typeof n&&!(r=t.querySelector(n)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof n&&!(r=n()))throw new Error("`"+e+"` did not return a node");return r}function m(){var e;if(!(e=null!==v("initialFocus")?v("initialFocus"):n.contains(t.activeElement)?t.activeElement:r.firstTabbableNode||v("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return e}function h(e){n.contains(e.target)||(o.clickOutsideDeactivates?l({returnFocus:!w.isFocusable(e.target)}):o.allowOutsideClick&&o.allowOutsideClick(e)||e.preventDefault())}function y(e){n.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),N(r.mostRecentlyFocusedNode||m()))}function E(e){if(!1!==o.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void l();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(T(),e.shiftKey&&e.target===r.firstTabbableNode)return e.preventDefault(),void N(r.lastTabbableNode);if(!e.shiftKey&&e.target===r.lastTabbableNode)e.preventDefault(),N(r.firstTabbableNode)}(e)}function F(e){o.clickOutsideDeactivates||n.contains(e.target)||o.allowOutsideClick&&o.allowOutsideClick(e)||(e.preventDefault(),e.stopImmediatePropagation())}function T(){var e=w(n);r.firstTabbableNode=e[0]||m(),r.lastTabbableNode=e[e.length-1]||m()}function N(e){e!==t.activeElement&&(e&&e.focus?(e.focus(),r.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):N(m()))}},N={props:{active:{type:Boolean,default:!0},escapeDeactivates:{type:Boolean,default:!0},returnFocusOnDeactivate:{type:Boolean,default:!0},allowOutsideClick:{type:Boolean,default:!0},initialFocus:[String,Function],fallbackFocus:[String,Function]},model:{event:"update:active",prop:"active"},mounted:function(){var e=this;this.$watch("active",(function(t){t?(e.trap=T(e.$el,{escapeDeactivates:e.escapeDeactivates,allowOutsideClick:function(){return e.allowOutsideClick},returnFocusOnDeactivate:e.returnFocusOnDeactivate,onActivate:function(){e.$emit("update:active",!0),e.$emit("activate")},onDeactivate:function(){e.$emit("update:active",!1),e.$emit("deactivate")},initialFocus:e.initialFocus||function(){return e.$el},fallbackFocus:e.fallbackFocus}),e.trap.activate()):e.trap&&e.trap.deactivate()}),{immediate:!0})},beforeDestroy:function(){this.trap&&this.trap.deactivate(),this.trap=null},methods:{activate:function(){this.trap.activate()},deactivate:function(){this.trap.deactivate()}},render:function(){var content=this.$slots.default;if(!content||!content.length||content.length>1)throw new Error("FocusTrap requires exactly one child");return content[0]}}},292:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("b793b674",content,!0,{sourceMap:!1})},321:function(e,t,n){"use strict";n(292)},322:function(e,t,n){var o=n(33)(!1);o.push([e.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),o.push([e.i,".modal[data-v-44f48b30]{position:relative;margin:0 auto;max-width:85vw;max-height:85vh;overflow-x:hidden;overflow-y:auto;border-radius:2px;-webkit-box-shadow:0 2px 8px 3px;box-shadow:0 2px 8px 3px;background-color:#fff}.overlay[data-v-44f48b30]{position:fixed;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;z-index:600;background:rgba(0,0,0,.58039)}.has-color-gray[data-v-44f48b30]{color:#b0b0b0}.modal-header[data-v-44f48b30]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%}.close-button[data-v-44f48b30]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:auto;margin:-20px -20px -20px auto;padding:20px;background-color:transparent;line-height:1;cursor:pointer}.close-button .icon[data-v-44f48b30]{height:auto}.close-button[data-v-44f48b30]:hover{color:#787878}",""]),e.exports=o},347:function(e,t,n){"use strict";n.r(t);var o={name:"AppModal",components:{FocusTrap:n(291).a},props:{title:String,subTitle:String},mounted:function(){document.addEventListener("keyup",this.closeOnEsc)},destroyed:function(){document.removeEventListener("keyup",this.closeOnEsc)},methods:{closeOnEsc:function(e){27===e.keyCode&&this.$emit("close")}}},r=(n(321),n(7)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"modal",staticClass:"overlay app-modal",on:{click:function(t){return t.target!==t.currentTarget?null:e.$emit("close")}}},[n("FocusTrap",{attrs:{active:!0}},[n("div",{staticClass:"modal relative",attrs:{"aria-modal":"true",role:"dialog"}},[e.title?n("header",{staticClass:"modal-header padding-top-bigger padding-left-bigger padding-right-normal padding-bottom-small"},[e._t("header",[n("h3",[e._v(e._s(e.title))])]),e._v(" "),n("button",{staticClass:"close-button has-color-gray is-size-6 is-size-4-touch",attrs:{type:"button","aria-label":e.$t("browse-page.aria.close")},on:{click:function(t){return e.$emit("close")},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("close")}}},[n("i",{staticClass:"icon cross"})])],2):e._e(),e._v(" "),e._t("default",null,{default:""})],2)])],1)}),[],!1,null,"44f48b30",null);t.default=component.exports}}]);