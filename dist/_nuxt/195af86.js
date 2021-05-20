/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7,24,25,26,28,34,37,40],{279:function(t,e,r){"use strict";r.r(e);r(10),r(11);var n=r(283),o=r.n(n),c={ccMixter:{audio:function(t){return{url:"http://dig.ccmixter.org/search",query:{lic:"open",searchp:t.q}}}},Europeana:{audio:function(t){var e="".concat(t.q," AND RIGHTS:*creative*");return t.filters&&t.filters.commercial&&(t.filters.comercial&&(e="".concat(e," AND NOT RIGHTS:*nc*")),t.filters.modify&&(e="".concat(e," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"SOUND"',query:e}}},video:function(t){var e="".concat(t.q," AND RIGHTS:*creative*");return t.filters&&t.filters.commercial&&(t.filters.comercial&&(e="".concat(e," AND NOT RIGHTS:*nc*")),t.filters.modify&&(e="".concat(e," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"VIDEO"',query:e}}}},"Google Images":{image:function(t){return{url:"https://www.google.com/search",query:{q:t.q,tbm:"isch",tbs:"il:cl"}}}},Jamendo:{audio:function(t){return{url:"https://www.jamendo.com/search/tracks",query:{q:t.q}}}},"Open Clip Art Library":{image:function(t){return{url:"http://www.openclipart.org/search/",query:{query:t.q}}}},Nappy:{image:function(t){return{url:"https://www.nappy.co/",query:{s:t.q}}}},SoundCloud:{audio:function(t){var e="to_share";return t.filters&&t.filters.commercial&&(t.filters.commercial&&(e="to_use_commercially"),t.filters.modify&&(e="to_modify_commercially")),{url:"https://soundcloud.com/search/sounds",query:{q:t.q,"filter.license":e}}}},Vimeo:{video:function(t){return{url:"https://vimeo.com/search",query:{license:"by",q:t.q}}}},"Wikimedia Commons":{audio:function(t){return{url:"https://commons.wikimedia.org/w/index.php",query:{sort:"relevance",search:"".concat(t.q," filetype:audio"),title:"Special:Search","advancedSearch-current":'{"fields":{"filetype":"audio"}}'}}},video:function(t){return{url:"https://commons.wikimedia.org/w/index.php",query:{sort:"relevance",search:"".concat(t.q," filetype:video"),title:"Special:Search","advancedSearch-current":'{"fields":{"filetype":"audio"}}'}}}},YouTube:{video:function(t){return{url:"https://www.youtube.com/results",query:{search_query:t.q,sp:"EgIwAQ%3D%3D"}}}}},l=function(t){return function(e,r){if(!r)throw new Error("Please provide a valid query to search ".concat(e," for ").concat(t," files."));var source=c[e];if(!source)throw new Error("No data avaliable for provided legacy source: ".concat(e));var n=source[t];if(!n)throw new Error("".concat(e," does not offer meta search for ").concat(t));var l=n(r);return o()(l.url,{queryParams:l.query})}},d={name:"MetaSourceList",props:{type:{type:String},query:{type:Object}},data:function(){var t=this;return{sources:Object.keys(c).filter((function(e){return c[e][t.type]}))}},methods:{getSourceUrl:function(source){return l(this.type)(source,this.query)}}},f=r(7),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin-bottom-large"},[r("h5",{staticClass:"b-header margin-bottom-small"},[t._v("\n    "+t._s(t.$t("meta-search.sources"))+"\n  ")]),t._v(" "),r("ul",{staticClass:"buttons"},t._l(t.sources,(function(source){return r("li",{key:source},[r("a",{staticClass:"button small margin-right-small",attrs:{target:"_blank",rel:"nofollow noreferrer",href:t.getSourceUrl(source)}},[t._v("\n        "+t._s(source)+"\n        "),t._m(0,!0)])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("sup",{},[e("i",{staticClass:"margin-left-small icon external-link"})])}],!1,null,null,null);e.default=component.exports},281:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("9a63b338",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r.r(e);r(60),r(18);var n={by:"by",nc:"nc",nd:"nd",sa:"sa",cc0:"zero",pdm:"pd"},o={name:"license-icons",components:{},props:{license:""},methods:{getLicenseIcon:function(t){var e=[];return t&&(e=t.split("-")),e.map((function(t){return n[t]}))}}},c=(r(286),r(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"photo-license-icons"},[r("i",{staticClass:"icon cc-logo is-size-4 has-text-black has-background-white",attrs:{title:"CC"}}),t._l(t.getLicenseIcon(t.license),(function(e,i){var n;return[e?r("i",{key:i,class:(n={icon:!0},n["has-text-black"]=!0,n["has-background-white"]=!0,n["is-size-4"]=!0,n["cc-"+e]=!0,n),attrs:{alt:""+e.toUpperCase()}}):t._e()]}))],2)}),[],!1,null,"857ef062",null);e.default=component.exports},283:function(t,e,r){(function(){"use strict";var r=this,n=r.buildUrl,o=function(param){return null===param?"":encodeURIComponent(String(param).trim())},c=function(t,e){var r,n,c,l=[];if(c=!(!e||!e.lowerCase)&&!!e.lowerCase,null===t?n="":"object"==typeof t?(n="",e=t):n=t,e){if(e.path){n&&"/"===n[n.length-1]&&(n=n.slice(0,-1));var d=String(e.path).trim();c&&(d=d.toLowerCase()),0===d.indexOf("/")?n+=d:n+="/"+d}if(e.queryParams){for(r in e.queryParams){var param;if(e.queryParams.hasOwnProperty(r)&&void 0!==e.queryParams[r])if(e.disableCSV&&Array.isArray(e.queryParams[r])&&e.queryParams[r].length)for(var i=0;i<e.queryParams[r].length;i++)param=e.queryParams[r][i],l.push(r+"="+o(param));else param=c?e.queryParams[r].toLowerCase():e.queryParams[r],l.push(r+"="+o(param))}n+="?"+l.join("&")}e.hash&&(n+=c?"#"+String(e.hash).trim().toLowerCase():"#"+String(e.hash).trim())}return n};c.noConflict=function(){return r.buildUrl=n,c},t.exports&&(e=t.exports=c),e.buildUrl=c}).call(this)},286:function(t,e,r){"use strict";r(281)},287:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".icon[data-v-857ef062]{vertical-align:middle;margin-right:.3rem}",""]),t.exports=n},291:function(t,e,r){"use strict";r.d(e,"a",(function(){return I}));var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],o=n.join(","),c="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function l(t,e){e=e||{};var i,r,n,l=[],f=[],m=t.querySelectorAll(o);for(e.includeContainer&&c.call(t,o)&&(m=Array.prototype.slice.apply(m)).unshift(t),i=0;i<m.length;i++)d(r=m[i])&&(0===(n=h(r))?l.push(r):f.push({documentOrder:i,tabIndex:n,node:r}));return f.sort(v).map((function(a){return a.node})).concat(l)}function d(t){return!(!f(t)||function(t){return function(t){return y(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var i=0;i<t.length;i++)if(t[i].checked)return t[i]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||h(t)<0)}function f(t){return!(t.disabled||function(t){return y(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}l.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==c.call(t,o)&&d(t)},l.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==c.call(t,m)&&f(t)};var m=n.concat("iframe").join(",");function h(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function v(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex}function y(t){return"INPUT"===t.tagName}var w,_=l,x=function(){for(var t={},i=0;i<arguments.length;i++){var source=arguments[i];for(var e in source)k.call(source,e)&&(t[e]=source[e])}return t},k=Object.prototype.hasOwnProperty;var C,S=(C=[],{activateTrap:function(t){if(C.length>0){var e=C[C.length-1];e!==t&&e.pause()}var r=C.indexOf(t);-1===r||C.splice(r,1),C.push(t)},deactivateTrap:function(t){var e=C.indexOf(t);-1!==e&&C.splice(e,1),C.length>0&&C[C.length-1].unpause()}});function E(t){return setTimeout(t,0)}var O=function(element,t){var e=document,r="string"==typeof element?e.querySelector(element):element,n=x({returnFocusOnDeactivate:!0,escapeDeactivates:!0},t),o={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},c={activate:function(t){if(o.active)return;O(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=e.activeElement;var r=t&&t.onActivate?t.onActivate:n.onActivate;r&&r();return d(),c},deactivate:l,pause:function(){if(o.paused||!o.active)return;o.paused=!0,f()},unpause:function(){if(!o.paused||!o.active)return;o.paused=!1,O(),d()}};return c;function l(t){if(o.active){clearTimeout(w),f(),o.active=!1,o.paused=!1,S.deactivateTrap(c);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:n.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:n.returnFocusOnDeactivate)&&E((function(){var t;I((t=o.nodeFocusedBeforeActivation,m("setReturnFocus")||t))})),c}}function d(){if(o.active)return S.activateTrap(c),w=E((function(){I(h())})),e.addEventListener("focusin",y,!0),e.addEventListener("mousedown",v,{capture:!0,passive:!1}),e.addEventListener("touchstart",v,{capture:!0,passive:!1}),e.addEventListener("click",C,{capture:!0,passive:!1}),e.addEventListener("keydown",k,{capture:!0,passive:!1}),c}function f(){if(o.active)return e.removeEventListener("focusin",y,!0),e.removeEventListener("mousedown",v,!0),e.removeEventListener("touchstart",v,!0),e.removeEventListener("click",C,!0),e.removeEventListener("keydown",k,!0),c}function m(t){var r=n[t],o=r;if(!r)return null;if("string"==typeof r&&!(o=e.querySelector(r)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof r&&!(o=r()))throw new Error("`"+t+"` did not return a node");return o}function h(){var t;if(!(t=null!==m("initialFocus")?m("initialFocus"):r.contains(e.activeElement)?e.activeElement:o.firstTabbableNode||m("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function v(t){r.contains(t.target)||(n.clickOutsideDeactivates?l({returnFocus:!_.isFocusable(t.target)}):n.allowOutsideClick&&n.allowOutsideClick(t)||t.preventDefault())}function y(t){r.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),I(o.mostRecentlyFocusedNode||h()))}function k(t){if(!1!==n.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void l();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(O(),t.shiftKey&&t.target===o.firstTabbableNode)return t.preventDefault(),void I(o.lastTabbableNode);if(!t.shiftKey&&t.target===o.lastTabbableNode)t.preventDefault(),I(o.firstTabbableNode)}(t)}function C(t){n.clickOutsideDeactivates||r.contains(t.target)||n.allowOutsideClick&&n.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function O(){var t=_(r);o.firstTabbableNode=t[0]||h(),o.lastTabbableNode=t[t.length-1]||h()}function I(t){t!==e.activeElement&&(t&&t.focus?(t.focus(),o.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):I(h()))}},I={props:{active:{type:Boolean,default:!0},escapeDeactivates:{type:Boolean,default:!0},returnFocusOnDeactivate:{type:Boolean,default:!0},allowOutsideClick:{type:Boolean,default:!0},initialFocus:[String,Function],fallbackFocus:[String,Function]},model:{event:"update:active",prop:"active"},mounted:function(){var t=this;this.$watch("active",(function(e){e?(t.trap=O(t.$el,{escapeDeactivates:t.escapeDeactivates,allowOutsideClick:function(){return t.allowOutsideClick},returnFocusOnDeactivate:t.returnFocusOnDeactivate,onActivate:function(){t.$emit("update:active",!0),t.$emit("activate")},onDeactivate:function(){t.$emit("update:active",!1),t.$emit("deactivate")},initialFocus:t.initialFocus||function(){return t.$el},fallbackFocus:t.fallbackFocus}),t.trap.activate()):t.trap&&t.trap.deactivate()}),{immediate:!0})},beforeDestroy:function(){this.trap&&this.trap.deactivate(),this.trap=null},methods:{activate:function(){this.trap.activate()},deactivate:function(){this.trap.deactivate()}},render:function(){var content=this.$slots.default;if(!content||!content.length||content.length>1)throw new Error("FocusTrap requires exactly one child");return content[0]}}},292:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("b793b674",content,!0,{sourceMap:!1})},321:function(t,e,r){"use strict";r(292)},322:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".modal[data-v-44f48b30]{position:relative;margin:0 auto;max-width:85vw;max-height:85vh;overflow-x:hidden;overflow-y:auto;border-radius:2px;-webkit-box-shadow:0 2px 8px 3px;box-shadow:0 2px 8px 3px;background-color:#fff}.overlay[data-v-44f48b30]{position:fixed;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;z-index:600;background:rgba(0,0,0,.58039)}.has-color-gray[data-v-44f48b30]{color:#b0b0b0}.modal-header[data-v-44f48b30]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%}.close-button[data-v-44f48b30]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:auto;margin:-20px -20px -20px auto;padding:20px;background-color:transparent;line-height:1;cursor:pointer}.close-button .icon[data-v-44f48b30]{height:auto}.close-button[data-v-44f48b30]:hover{color:#787878}",""]),t.exports=n},325:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("409e2662",content,!0,{sourceMap:!1})},326:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("f144ead4",content,!0,{sourceMap:!1})},327:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("7b0f849c",content,!0,{sourceMap:!1})},328:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("3d944f40",content,!0,{sourceMap:!1})},329:function(t,e,r){var content=r(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("2825c542",content,!0,{sourceMap:!1})},342:function(t,e,r){"use strict";r.r(e);var n=r(0),o=(r(11),r(12),r(10),r(19),r(20),r(1));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"SearchGridManualLoad",props:{imagesCount:{default:0},images:{default:function(){return[]}},query:{},useInfiniteScroll:{default:!0},includeAnalytics:{default:!0},includeAddToList:{default:!0},searchTerm:{default:""}},data:function(){return{isDataInitialized:!1,shouldContainImages:!1,showMetaImageSearch:!1}},computed:{imagePage:function(){return this.$store.state.imagePage},isFetchingImagesError:function(){return this.$store.state.isFetchingImagesError},isFetchingImages:function(){return this.$store.state.isFetchingImages},_images:function(){return this.useInfiniteScroll?this.$store.state.images:this.images},currentPage:function(){return this.$store.state.imagePage},_imagesCount:function(){var t=this.useInfiniteScroll?this.$store.state.imagesCount:this.imagesCount;return t>=1e4?this.$t("browse-page.result-count-more",{count:t.toLocaleString(this.$i18n.locale)}):this.$t("browse-page.result-count",{count:t.toLocaleString(this.$i18n.locale)})},_query:function(){return this.$props.query},_errorMessage:function(){return this.$store.state.errorMsg},isFinished:function(){return this.currentPage>=this.$store.state.pageCount}},watch:{_images:{handler:function(){this.$state&&(this.$state.loaded(),this._imagesCount<20*this.currentPage&&this.$state.complete()),this.isDataInitialized=!0}},_query:{handler:function(){this.searchChanged()},deep:!0}},methods:{handleScalingChange:function(){var t=this;setTimeout((function(){t.$redrawVueMasonry()}),100)},searchChanged:function(){this.$store.commit(o.w,{images:[],page:1})},onLoadMoreImages:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({page:this.currentPage+1,shouldPersistImages:!0},this._query);this.$emit("onLoadMoreImages",t)}}},d=(r(418),r(7)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{ref:"searchGrid",class:{"search-grid":!0,"search-grid__contain-images":t.shouldContainImages}},[r("div",{ref:"gridItems",staticClass:"search-grid_ctr"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFetchingImages&&t.includeAnalytics,expression:"!isFetchingImages && includeAnalytics"}],staticClass:"results-meta"},[r("span",{staticClass:"caption has-text-weight-semibold"},[t._v("\n        "+t._s(t._imagesCount)+"\n      ")]),t._v(" "),r("div",{staticClass:"is-hidden-touch mr-auto padding-left-big"},[t._query.q?r("SearchRating",{attrs:{"search-term":t._query.q}}):t._e()],1),t._v(" "),r("div",{staticClass:"is-hidden-desktop is-block"},[t._query.q?r("SearchRating",{attrs:{"search-term":t.searchTerm}}):t._e()],1),t._v(" "),r("SaferBrowsing")],1),t._v(" "),r("div",{staticClass:"search-grid-cells"},t._l(t._images,(function(image,t){return r("SearchGridCell",{key:t,attrs:{image:image}})})),1),t._v(" "),r("div",{staticClass:"padding-bottom-big"},[r("div",{staticClass:"load-more"},[r("button",{directives:[{name:"show",rawName:"v-show",value:!t.isFetchingImages&&t.includeAnalytics,expression:"!isFetchingImages && includeAnalytics"}],staticClass:"button margin-bottom-big",attrs:{disabled:t.isFinished},on:{click:t.onLoadMoreImages,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLoadMoreImages(e)}}},[t.isFinished?r("span",[t._v(t._s(t.$t("browse-page.no-more")))]):r("span",[t._v(t._s(t.$t("browse-page.load")))])]),t._v(" "),r("LoadingIcon",{directives:[{name:"show",rawName:"v-show",value:t.isFetchingImages,expression:"isFetchingImages"}]})],1),t._v(" "),r("button",{staticClass:"meta-popup-trigger has-color-tomato text-center caption padding-normal",attrs:{type:"button"},on:{click:function(e){t.showMetaImageSearch=!0},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.showMetaImageSearch=!0}}},[t._v("\n        "+t._s(t.$t("browse-page.other-source"))+"\n      ")])]),t._v(" "),t.isFetchingImagesError?r("div",{staticClass:"search-grid_notification callout alert"},[r("h5",[t._v(t._s(t.$t("browse-page.error"))+" "+t._s(t._errorMessage))])]):t._e()]),t._v(" "),t.showMetaImageSearch?r("AppModal",{attrs:{title:"Search Images from Other Sources"},on:{close:function(e){t.showMetaImageSearch=!1}}},[r("MetaSearchCard",{attrs:{type:"image",query:t.query},on:{close:function(e){t.showMetaImageSearch=!1}}})],1):t._e()],1)}),[],!1,null,"24d95294",null);e.default=component.exports;installComponents(component,{SearchRating:r(398).default,SaferBrowsing:r(399).default,SearchGridCell:r(400).default,LoadingIcon:r(401).default,MetaSearchCard:r(402).default,AppModal:r(347).default})},347:function(t,e,r){"use strict";r.r(e);var n={name:"AppModal",components:{FocusTrap:r(291).a},props:{title:String,subTitle:String},mounted:function(){document.addEventListener("keyup",this.closeOnEsc)},destroyed:function(){document.removeEventListener("keyup",this.closeOnEsc)},methods:{closeOnEsc:function(t){27===t.keyCode&&this.$emit("close")}}},o=(r(321),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"modal",staticClass:"overlay app-modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[r("FocusTrap",{attrs:{active:!0}},[r("div",{staticClass:"modal relative",attrs:{"aria-modal":"true",role:"dialog"}},[t.title?r("header",{staticClass:"modal-header padding-top-bigger padding-left-bigger padding-right-normal padding-bottom-small"},[t._t("header",[r("h3",[t._v(t._s(t.title))])]),t._v(" "),r("button",{staticClass:"close-button has-color-gray is-size-6 is-size-4-touch",attrs:{type:"button","aria-label":t.$t("browse-page.aria.close")},on:{click:function(e){return t.$emit("close")},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("close")}}},[r("i",{staticClass:"icon cross"})])],2):t._e(),t._v(" "),t._t("default",null,{default:""})],2)])],1)}),[],!1,null,"44f48b30",null);e.default=component.exports},363:function(t,e,r){"use strict";r(325)},364:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".button.rating[data-v-ece22332]{vertical-align:middle;color:tomato;font-size:.8rem;text-decoration:none;text-transform:none}.button.rating[data-v-ece22332]:focus,.button.rating[data-v-ece22332]:hover{background:none}span[data-v-ece22332]{vertical-align:middle}",""]),t.exports=n},365:function(t,e,r){"use strict";r(326)},366:function(t,e,r){var n=r(33)(!1);n.push([t.i,".safer-browsing{position:relative}.safer-browsing>.button.tiny{font-size:.8rem}",""]),t.exports=n},368:function(t,e,r){"use strict";r(327)},369:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".search-grid_image-ctr[data-v-3b2c7b39]{background:#ebece4;display:block;width:100%}.search-grid_item-container[data-v-3b2c7b39]{margin:10px}.search-grid_item[data-v-3b2c7b39]{overflow:hidden}.search-grid_item i[data-v-3b2c7b39]{display:block}.search-grid_item a[data-v-3b2c7b39]{position:absolute;vertical-align:bottom}.search-grid_item a img[data-v-3b2c7b39]{width:100%}.search-grid_item:hover .overlay[data-v-3b2c7b39]{opacity:1;bottom:0}.overlay[data-v-3b2c7b39]{position:absolute;opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;color:#fff;display:block;top:-100%}.overlay__top[data-v-3b2c7b39]{top:0;width:100%;height:2rem}.overlay__bottom[data-v-3b2c7b39]{background-color:#000;bottom:-100%;top:auto;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100%}@media (hover:none){.overlay[data-v-3b2c7b39]{position:absolute;opacity:1;bottom:0}}.search-grid_item[data-v-3b2c7b39]{width:100%;position:relative;display:block;float:left;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;cursor:pointer}.search-grid_image[data-v-3b2c7b39]{margin:auto;display:block}.search-grid_image__fill[data-v-3b2c7b39]{width:100%}",""]),t.exports=n},370:function(t,e,r){"use strict";r(328)},371:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".lds-ring[data-v-7f2b418a]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div[data-v-7f2b418a]{display:block;position:absolute;width:51px;height:51px;margin:6px;border-radius:50%;-webkit-animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;border:6px solid transparent;border-top-color:#3b3b3b}.lds-ring div[data-v-7f2b418a]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-7f2b418a]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-7f2b418a]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=n},372:function(t,e,r){"use strict";r(329)},373:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".meta-modal-content[data-v-1c71bc08]{max-width:46rem}@media screen and (max-width:1023px){.meta-filters label[data-v-1c71bc08]{display:block;width:100%}}.meta-card[data-v-1c71bc08]{max-width:100%;overflow-x:hidden}.close-button[data-v-1c71bc08]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:transparent;padding:20px;line-height:1;height:auto;position:absolute;top:0;right:0;cursor:pointer}.close-button .icon[data-v-1c71bc08]{height:auto}.close-button[data-v-1c71bc08]:hover{color:#787878}",""]),t.exports=n},382:function(t,e,r){var content=r(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("3c736330",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";r.r(e);var n=r(28),o="NOT_SENT",c="SENT",l={name:"SearchRating",props:["searchTerm"],data:function(){return{status:o}},methods:{sendSearchRatingEvent:function(t){var e=this;this.$store.dispatch(n.e,{query:this.$props.searchTerm,relevant:t}),this.status=c,setTimeout((function(){e.status=null}),1500)}}},d=(r(363),r(7)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"caption has-text-weight-semibold"},["NOT_SENT"==t.status?r("div",[r("span",[t._v(t._s(t.$t("browse-page.search-rating.content")))]),t._v(" "),r("button",{staticClass:"button is-text tiny is-paddingless rating rating-yes is-shadowless",attrs:{"aria-label":t.$t("browse-page.aria.relevance.yes")},on:{click:function(e){return t.sendSearchRatingEvent(!0)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendSearchRatingEvent(!0)}}},[t._v("\n      "+t._s(t.$t("browse-page.search-rating.yes"))+"\n    ")]),t._v("\n    •\n    "),r("button",{staticClass:"button is-text tiny is-paddingless rating rating-no is-shadowless",attrs:{"aria-label":t.$t("browse-page.aria.relevance.no")},on:{click:function(e){return t.sendSearchRatingEvent(!1)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendSearchRatingEvent(!1)}}},[t._v("\n      "+t._s(t.$t("browse-page.search-rating.no"))+"\n    ")])]):"SENT"==t.status?r("div",[r("span",{staticClass:"thank-you"},[t._v(t._s(t.$t("browse-page.search-rating.feedback")))])]):t._e()])}),[],!1,null,"ece22332",null);e.default=component.exports},399:function(t,e,r){"use strict";r.r(e);var n=r(291),o=r(5),c={name:"SaferBrowsing",components:{FocusTrap:n.a},data:function(){return{showForm:!1}},computed:{mature:function(){return this.$store.state.filters.mature}},methods:{toggleShowForm:function(){this.showForm=!this.showForm},closeShowForm:function(){this.showForm=!1},toggleMature:function(){this.$store.dispatch(o.l,{filterType:"mature"})}}},l=(r(365),r(7)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"safer-browsing",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeShowForm(e)}}},[r("button",{staticClass:"button is-text tiny is-paddingless rating is-shadowless",on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toggleShowForm(e)},click:t.toggleShowForm}},[r("span",{staticClass:"has-color-tomato",staticStyle:{"white-space":"nowrap"}},[t._v("\n      "+t._s(t.$t("browse-page.safer-browsing.title"))+"\n      "),r("i",{staticClass:"icon flag margin-left-small"})])]),t._v(" "),r("FocusTrap",{attrs:{active:!0}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],staticClass:"padding-normal is-clearfix arrow-popup arrow-popup--anchor-right"},[r("button",{staticClass:"button close-button is-text tiny is-pulled-right is-block has-text-grey-light",on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toggleShowForm(e)},click:t.toggleShowForm}},[r("i",{staticClass:"icon cross"})]),t._v(" "),r("p",{staticClass:"caption has-text-weight-semibold padding-right-big"},[t._v("\n        "+t._s(t.$t("browse-page.safer-browsing.caption"))+"\n      ")]),t._v(" "),r("label",{staticClass:"checkbox margin-top-small",attrs:{for:"mature"}},[r("input",{staticClass:"filter-checkbox",attrs:{id:"mature",type:"checkbox"},domProps:{checked:t.mature},on:{change:t.toggleMature,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toggleMature(e)}}}),t._v("\n        "+t._s(t.$t("browse-page.safer-browsing.label"))+"\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,r){"use strict";r.r(e);var n=r(282),o=r(343),c=r(367),l=3/4,d=16/9,f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return t.indexOf("http://")>=0||t.indexOf("https://")>=0?t:"".concat(e).concat(t)},m={name:"SearchGridCell",components:{LicenseIcons:n.default},props:["image","shouldContainImage"],data:function(){return{widthBasis:253.125,imgHeight:this.image.height||100,imgWidth:this.image.width||100}},computed:{imageAspect:function(){return this.imgWidth/this.imgHeight},containerAspect:function(){return this.imageAspect>d?d:this.imageAspect<l?l:this.imageAspect},iPadding:function(){return this.imageAspect<l?1/l*100:this.imageAspect>d?56.25:1/this.imageAspect*100},imageWidth:function(){return this.imageAspect<d?100:this.imageAspect/d*100},imageTop:function(){return this.imageAspect>l?0:(l-this.imageAspect)/(this.imageAspect*l*l)*-50},imageLeft:function(){return this.imageAspect<d?0:(this.imageAspect-d)/d*-50}},methods:{getImageUrl:function(image){if(!image)return"";var t=image.thumbnail||image.url;return this.imageAspect,f(t)},getImageForeignUrl:function(image){return f(image.foreign_landing_url)},getProviderLogo:function(t){return Object(o.a)(t)},onGotoDetailPage:function(t,image){if(!t.metaKey&&!t.ctrlKey){t.preventDefault();var e=this.localeRoute({name:"photo-detail-page",params:{id:image.id,location:window.scrollY}});this.$router.push(e)}},onImageLoadError:function(t,image){var element=t.target;element.src!==image.url?element.src=image.url:element.src=c},getImgDimension:function(t){this.imgHeight=t.target.naturalHeight,this.imgWidth=t.target.naturalWidth}}},h=(r(368),r(7)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-grid_item-container",style:"width: "+t.containerAspect*t.widthBasis+"px;\n  flex-grow: "+t.containerAspect*t.widthBasis,attrs:{"aria-label":t.image.title}},[r("figure",{staticClass:"search-grid_item"},[r("i",{style:"padding-bottom:"+t.iPadding+"%"}),t._v(" "),r("NuxtLink",{staticClass:"search-grid_image-ctr",style:"width: "+t.imageWidth+"%; top: "+t.imageTop+"%; left:"+t.imageLeft+"%;",attrs:{to:t.localePath("/photos/"+t.image.id)},on:{click:function(e){return t.onGotoDetailPage(e,t.image)}}},[r("img",{ref:"img",class:{"search-grid_image":!0,"search-grid_image__fill":!t.shouldContainImage},attrs:{loading:"lazy",alt:t.image.title,src:t.getImageUrl(t.image)},on:{load:t.getImgDimension,error:function(e){return t.onImageLoadError(e,t.image)}}})]),t._v(" "),r("figcaption",{staticClass:"overlay overlay__top padding-small"},[r("LicenseIcons",{attrs:{license:t.image.license}})],1),t._v(" "),r("figcaption",{staticClass:"overlay overlay__bottom padding-vertical-small padding-horizontal-normal"},[r("span",{staticClass:"caption has-text-weight-semibold"},[t._v(t._s(t.image.title))])])],1)])}),[],!1,null,"3b2c7b39",null);e.default=component.exports;installComponents(component,{LicenseIcons:r(282).default})},401:function(t,e,r){"use strict";r.r(e);var n={name:"LoadingIcon"},o=(r(370),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ring"},[r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div")])}],!1,null,"7f2b418a",null);e.default=component.exports},402:function(t,e,r){"use strict";r.r(e);var n={name:"MetaSearchCard",components:{MetaSourceList:r(279).default},props:["type","query"],data:function(){return{editableQuery:{q:this.query.q,filters:{commercial:this.$store.state.filters.licenseTypes[0].checked,modify:this.$store.state.filters.licenseTypes[1].checked}}}}},o=(r(372),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"meta-card"},[r("hr",{staticClass:"margin-bottom-bigger"}),t._v(" "),r("div",{staticClass:"padding-left-bigger padding-right-bigger padding-bottom-bigger meta-modal-content"},[r("h5",{staticClass:"b-header margin-bottom-small"},[t._v("\n      "+t._s(t.$t("meta-search.card.search"))+"\n    ")]),t._v(" "),r("div",{staticClass:"control has-icons-left margin-bottom-bigger"},[r("label",{attrs:{for:"searchTerm"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editableQuery.q,expression:"editableQuery.q"}],staticClass:"input",staticStyle:{"max-width":"400px"},attrs:{id:"searchTerm",type:"text",placeholder:"Search"},domProps:{value:t.editableQuery.q},on:{input:function(e){e.target.composing||t.$set(t.editableQuery,"q",e.target.value)}}})]),t._v(" "),t._m(0)]),t._v(" "),r("MetaSourceList",{attrs:{type:t.type,query:t.editableQuery}}),t._v(" "),r("p",{staticClass:"caption has-text-weight-semibold"},[t._v("\n      "+t._s(t.$t("meta-search.caption"))+"\n    ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-left"},[e("i",{staticClass:"icon search is-size-5",staticStyle:{padding:"10px"}})])}],!1,null,"1c71bc08",null);e.default=component.exports;installComponents(component,{MetaSourceList:r(279).default})},418:function(t,e,r){"use strict";r(382)},419:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,'.button[disabled][data-v-24d95294]{opacity:1}.search-grid_layout-control h5[data-v-24d95294]{padding-top:1.36vh;font-size:1rem;display:inline-block;margin-right:10px}.search-grid_layout-control[data-v-24d95294]{text-align:right}.search-grid_layout-control fieldset[data-v-24d95294]{display:inline;margin-right:5px}.infinite-loading-container[data-v-24d95294]{margin-top:30px;width:100%}.search-grid_ctr .masonry-layout[data-v-24d95294]{margin:1rem auto auto}.search-grid_ctr .item[data-v-24d95294]{width:320px;margin-bottom:20px}.search-grid[data-v-24d95294]:after{content:"";display:block;clear:both}.search-grid_notification[data-v-24d95294]{width:50%;margin:auto;font-weight:500;text-align:center}.search-grid-cells[data-v-24d95294]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px}@media print,screen and (min-width:769px){.search-grid-cells[data-v-24d95294]:after{content:"";-webkit-box-flex:999999999;-ms-flex-positive:999999999;flex-grow:999999999}}label[data-v-24d95294]{color:#333}.load-more[data-v-24d95294]{text-align:center}.load-more button[data-v-24d95294]{font-size:1.2em}@media screen and (max-width:768px){.load-more button[data-v-24d95294]{padding:.5rem}.load-more button span[data-v-24d95294]{font-size:.9rem}}.results-meta[data-v-24d95294]{padding-top:.6rem;padding-left:1.3rem;padding-right:1.3rem}@media screen and (min-width:1024px){.results-meta[data-v-24d95294]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.results-meta .button.is-text[data-v-24d95294]{font-size:.8rem}.mr-auto[data-v-24d95294]{margin-right:auto}.meta-popup-trigger[data-v-24d95294]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:transparent;text-align:center;display:block;margin:0 auto;cursor:pointer}.meta-popup-trigger[data-v-24d95294]:hover{text-decoration:underline}',""]),t.exports=n}}]);