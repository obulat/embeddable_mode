(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{279:function(r,e,t){"use strict";t.r(e);t(10),t(11);var n=t(283),o=t.n(n),c={ccMixter:{audio:function(r){return{url:"http://dig.ccmixter.org/search",query:{lic:"open",searchp:r.q}}}},Europeana:{audio:function(r){var e="".concat(r.q," AND RIGHTS:*creative*");return r.filters&&r.filters.commercial&&(r.filters.comercial&&(e="".concat(e," AND NOT RIGHTS:*nc*")),r.filters.modify&&(e="".concat(e," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"SOUND"',query:e}}},video:function(r){var e="".concat(r.q," AND RIGHTS:*creative*");return r.filters&&r.filters.commercial&&(r.filters.comercial&&(e="".concat(e," AND NOT RIGHTS:*nc*")),r.filters.modify&&(e="".concat(e," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"VIDEO"',query:e}}}},"Google Images":{image:function(r){return{url:"https://www.google.com/search",query:{q:r.q,tbm:"isch",tbs:"il:cl"}}}},Jamendo:{audio:function(r){return{url:"https://www.jamendo.com/search/tracks",query:{q:r.q}}}},"Open Clip Art Library":{image:function(r){return{url:"http://www.openclipart.org/search/",query:{query:r.q}}}},Nappy:{image:function(r){return{url:"https://www.nappy.co/",query:{s:r.q}}}},SoundCloud:{audio:function(r){var e="to_share";return r.filters&&r.filters.commercial&&(r.filters.commercial&&(e="to_use_commercially"),r.filters.modify&&(e="to_modify_commercially")),{url:"https://soundcloud.com/search/sounds",query:{q:r.q,"filter.license":e}}}},Vimeo:{video:function(r){return{url:"https://vimeo.com/search",query:{license:"by",q:r.q}}}},"Wikimedia Commons":{audio:function(r){return{url:"https://commons.wikimedia.org/w/index.php",query:{sort:"relevance",search:"".concat(r.q," filetype:audio"),title:"Special:Search","advancedSearch-current":'{"fields":{"filetype":"audio"}}'}}},video:function(r){return{url:"https://commons.wikimedia.org/w/index.php",query:{sort:"relevance",search:"".concat(r.q," filetype:video"),title:"Special:Search","advancedSearch-current":'{"fields":{"filetype":"audio"}}'}}}},YouTube:{video:function(r){return{url:"https://www.youtube.com/results",query:{search_query:r.q,sp:"EgIwAQ%3D%3D"}}}}},l=function(r){return function(e,t){if(!t)throw new Error("Please provide a valid query to search ".concat(e," for ").concat(r," files."));var source=c[e];if(!source)throw new Error("No data avaliable for provided legacy source: ".concat(e));var n=source[r];if(!n)throw new Error("".concat(e," does not offer meta search for ").concat(r));var l=n(t);return o()(l.url,{queryParams:l.query})}},f={name:"MetaSourceList",props:{type:{type:String},query:{type:Object}},data:function(){var r=this;return{sources:Object.keys(c).filter((function(e){return c[e][r.type]}))}},methods:{getSourceUrl:function(source){return l(this.type)(source,this.query)}}},m=t(7),component=Object(m.a)(f,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"margin-bottom-large"},[t("h5",{staticClass:"b-header margin-bottom-small"},[r._v("\n    "+r._s(r.$t("meta-search.sources"))+"\n  ")]),r._v(" "),t("ul",{staticClass:"buttons"},r._l(r.sources,(function(source){return t("li",{key:source},[t("a",{staticClass:"button small margin-right-small",attrs:{target:"_blank",rel:"nofollow noreferrer",href:r.getSourceUrl(source)}},[r._v("\n        "+r._s(source)+"\n        "),r._m(0,!0)])])})),0)])}),[function(){var r=this.$createElement,e=this._self._c||r;return e("sup",{},[e("i",{staticClass:"margin-left-small icon external-link"})])}],!1,null,null,null);e.default=component.exports},283:function(r,e,t){(function(){"use strict";var t=this,n=t.buildUrl,o=function(param){return null===param?"":encodeURIComponent(String(param).trim())},c=function(r,e){var t,n,c,l=[];if(c=!(!e||!e.lowerCase)&&!!e.lowerCase,null===r?n="":"object"==typeof r?(n="",e=r):n=r,e){if(e.path){n&&"/"===n[n.length-1]&&(n=n.slice(0,-1));var f=String(e.path).trim();c&&(f=f.toLowerCase()),0===f.indexOf("/")?n+=f:n+="/"+f}if(e.queryParams){for(t in e.queryParams){var param;if(e.queryParams.hasOwnProperty(t)&&void 0!==e.queryParams[t])if(e.disableCSV&&Array.isArray(e.queryParams[t])&&e.queryParams[t].length)for(var i=0;i<e.queryParams[t].length;i++)param=e.queryParams[t][i],l.push(t+"="+o(param));else param=c?e.queryParams[t].toLowerCase():e.queryParams[t],l.push(t+"="+o(param))}n+="?"+l.join("&")}e.hash&&(n+=c?"#"+String(e.hash).trim().toLowerCase():"#"+String(e.hash).trim())}return n};c.noConflict=function(){return t.buildUrl=n,c},r.exports&&(e=r.exports=c),e.buildUrl=c}).call(this)}}]);