(window.webpackJsonp=window.webpackJsonp||[]).push([[51,27,28],{223:function(e,r,t){"use strict";t.r(r);var o=t(227),n=t.n(o),l={ccMixter:{audio:e=>({url:"http://dig.ccmixter.org/search",query:{lic:"open",searchp:e.q}})},Europeana:{audio(e){var r="".concat(e.q," AND RIGHTS:*creative*");return e.filters&&e.filters.commercial&&(e.filters.comercial&&(r="".concat(r," AND NOT RIGHTS:*nc*")),e.filters.modify&&(r="".concat(r," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"SOUND"',query:r}}},video(e){var r="".concat(e.q," AND RIGHTS:*creative*");return e.filters&&e.filters.commercial&&(e.filters.comercial&&(r="".concat(r," AND NOT RIGHTS:*nc*")),e.filters.modify&&(r="".concat(r," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"VIDEO"',query:r}}}},"Google Images":{image:e=>({url:"https://www.google.com/search",query:{q:e.q,tbm:"isch",tbs:"il:cl"}})},Jamendo:{audio:e=>({url:"https://www.jamendo.com/search/tracks",query:{q:e.q}})},"Open Clip Art Library":{image:e=>({url:"http://www.openclipart.org/search/",query:{query:e.q}})},Nappy:{image:e=>({url:"https://www.nappy.co/",query:{s:e.q}})},SoundCloud:{audio(e){var r="to_share";return e.filters&&e.filters.commercial&&(e.filters.commercial&&(r="to_use_commercially"),e.filters.modify&&(r="to_modify_commercially")),{url:"https://soundcloud.com/search/sounds",query:{q:e.q,"filter.license":r}}}},Vimeo:{video:e=>({url:"https://vimeo.com/search",query:{license:"by",q:e.q}})},"Wikimedia Commons":{audio:e=>({url:"https://commons.wikimedia.org/w/index.php",query:{sort:"relevance",search:"".concat(e.q," filetype:audio"),title:"Special:Search","advancedSearch-current":'{"fields":{"filetype":"audio"}}'}}),video:e=>({url:"https://commons.wikimedia.org/w/index.php",query:{sort:"relevance",search:"".concat(e.q," filetype:video"),title:"Special:Search","advancedSearch-current":'{"fields":{"filetype":"audio"}}'}})},YouTube:{video:e=>({url:"https://www.youtube.com/results",query:{search_query:e.q,sp:"EgIwAQ%3D%3D"}})}},c=e=>(r,t)=>{if(!t)throw new Error("Please provide a valid query to search ".concat(r," for ").concat(e," files."));var source=l[r];if(!source)throw new Error("No data avaliable for provided legacy source: ".concat(r));var o=source[e];if(!o)throw new Error("".concat(r," does not offer meta search for ").concat(e));var c=o(t);return n()(c.url,{queryParams:c.query})},m={name:"MetaSourceList",props:{type:{type:String},query:{type:Object}},data(){return{sources:Object.keys(l).filter((e=>l[e][this.type]))}},methods:{getSourceUrl(source){return c(this.type)(source,this.query)}}},y=t(6),component=Object(y.a)(m,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"margin-bottom-large"},[t("h5",{staticClass:"b-header margin-bottom-small"},[e._v("\n    "+e._s(e.$t("meta-search.sources"))+"\n  ")]),e._v(" "),t("ul",{staticClass:"buttons"},e._l(e.sources,(function(source){return t("li",{key:source},[t("a",{staticClass:"button small margin-right-small",attrs:{target:"_blank",rel:"nofollow noreferrer",href:e.getSourceUrl(source)}},[e._v("\n        "+e._s(source)+"\n        "),e._m(0,!0)])])})),0)])}),[function(){var e=this.$createElement,r=this._self._c||e;return r("sup",{},[r("i",{staticClass:"margin-left-small icon external-link"})])}],!1,null,null,null);r.default=component.exports},227:function(e,r,t){(function(){"use strict";var t=this,o=t.buildUrl,n=function(param){return null===param?"":encodeURIComponent(String(param).trim())},l=function(e,r){var t,o,l,c=[];if(l=!(!r||!r.lowerCase)&&!!r.lowerCase,null===e?o="":"object"==typeof e?(o="",r=e):o=e,r){if(r.path){o&&"/"===o[o.length-1]&&(o=o.slice(0,-1));var m=String(r.path).trim();l&&(m=m.toLowerCase()),0===m.indexOf("/")?o+=m:o+="/"+m}if(r.queryParams){for(t in r.queryParams){var param;if(r.queryParams.hasOwnProperty(t)&&void 0!==r.queryParams[t])if(r.disableCSV&&Array.isArray(r.queryParams[t])&&r.queryParams[t].length)for(var i=0;i<r.queryParams[t].length;i++)param=r.queryParams[t][i],c.push(t+"="+n(param));else param=l?r.queryParams[t].toLowerCase():r.queryParams[t],c.push(t+"="+n(param))}o+="?"+c.join("&")}r.hash&&(o+=l?"#"+String(r.hash).trim().toLowerCase():"#"+String(r.hash).trim())}return o};l.noConflict=function(){return t.buildUrl=o,l},e.exports&&(r=e.exports=l),r.buildUrl=l}).call(this)},237:function(e,r,t){var content=t(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(19).default)("74693d1f",content,!0,{sourceMap:!1})},274:function(e,r,t){"use strict";t(237)},275:function(e,r,t){var o=t(18)(!1);o.push([e.i,".has-color-dark-gray{color:#787878}.max-w-lg{max-width:48rem}",""]),e.exports=o},293:function(e,r,t){"use strict";t.r(r);var o={name:"MetaSearch",components:{MetaSourceList:t(223).default},props:["type"],computed:{query(){return this.$store.state.query},unsupportedByUsefilter(){return"audio"===this.type?"CC Mixter, Jamendo, or Wikimedia Commons":"video"===this.type?"Wikimedia Commons or Youtube":"image"===this.type?"Google Images":""},metaQuery(){return{q:this.query.q,filters:{commercial:!!this.query.license_type&&this.query.license_type.includes("commercial"),modify:!!this.query.license_type&&this.query.license_type.includes("modification")}}}}},n=(t(274),t(6)),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{key:e.type,staticClass:"padding-normal"},[t("header",{staticClass:"margin-bottom-large"},[t("i18n",{staticClass:"b-header margin-bottom-small",attrs:{path:"meta-search.form.title",tag:"h4"},scopedSlots:e._u([{key:"type",fn:function(){return[e._v("\n        "+e._s(e.type)+"\n      ")]},proxy:!0}])}),e._v(" "),t("i18n",{attrs:{path:"meta-search.form.caption",tag:"p"},scopedSlots:e._u([{key:"type",fn:function(){return[e._v("\n        "+e._s(e.type)+"\n      ")]},proxy:!0},{key:"break",fn:function(){return[t("br")]},proxy:!0},{key:"filter",fn:function(){return[e._v("\n        "+e._s(e.unsupportedByUsefilter)+"\n      ")]},proxy:!0}])})],1),e._v(" "),t("MetaSourceList",{attrs:{type:e.type,query:e.metaQuery}}),e._v(" "),t("p",{staticClass:"caption has-text-weight-semibold has-color-dark-gray max-w-lg"},[e._v("\n    "+e._s(e.$t("meta-search.caption"))+"\n  ")])],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{MetaSourceList:t(223).default})},443:function(e,r,t){"use strict";t.r(r);var o=t(6),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("MetaSearchForm",{attrs:{id:"tab-audio",type:"audio",role:"tabpanel","aria-labelledby":"audio"}})}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{MetaSearchForm:t(293).default})}}]);