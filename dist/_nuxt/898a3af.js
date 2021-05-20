/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19,30],{296:function(e,t,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("e11822ba",content,!0,{sourceMap:!1})},300:function(e,t,n){"use strict";n.r(t);n(10),n(16);var r=n(1),o={name:"PhotoTags",props:["tags","showHeader"],computed:{hasClarifaiTags:function(){return this.$props.tags.some((function(e){return"clarifai"===e.provider}))}},methods:{isClarifaiTag:function(e){return"clarifai"===e},searchByTagName:function(e){this.$store.commit(r.A,{query:{q:e}})},getValidTags:function(){return this.$props.tags.filter((function(e){return!!e.name}))}}},l=(n(338),n(7)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.tags&&e.tags.length?n("div",{staticClass:"photo_tags"},[e.showHeader?n("h3",{staticClass:"b-header"},[e._v("\n    "+e._s(e.$t("photo-details.information.tags"))+"\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"margin-top-normal"},[e._l(e.getValidTags(),(function(t,r){return[n("button",{key:r,staticClass:"button tag margin-smaller",on:{click:function(n){return e.searchByTagName(t.name)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.searchByTagName(t.name)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])]}))],2)]):e._e()}),[],!1,null,"7185e248",null);t.default=component.exports},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(10);var r=n(333);function o(e,t){if(!e)return Object(r.capital)(t)||"";var n=e.filter((function(p){return p.source_name===t}))[0];return n?n.display_name:Object(r.capital)(t)||""}},333:function(e,t,n){(function(){"use strict";var t=function(s,e){return e=e||"",s.replace(/(^|-)/g,"$1\\u"+e).replace(/,/g,"\\u"+e)},n=t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),r="a-z"+t("DF-F6,F8-FF","00"),o="A-Z"+t("C0-D6,D8-DE","00"),l=function(e,t,l,c){return e=e||n,t=t||r,l=l||o,c=c||"A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",{capitalize:new RegExp("(^|["+e+"])(["+t+"])","g"),pascal:new RegExp("(^|["+e+"])+(["+t+l+"])","g"),fill:new RegExp("["+e+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+t+"])","g"),improper:new RegExp("\\b("+c+")\\b","g"),relax:new RegExp("([^"+l+"])(["+l+"]*)(["+l+"])(?=[^"+l+"]|$)","g"),upper:new RegExp("^[^"+t+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+e+"]")}},c=l(),d={re:c,unicodes:t,regexps:l,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(s){return d.up.call(s.charAt(0))+s.slice(1)},decap:function(s){return d.low.call(s.charAt(0))+s.slice(1)},deapostrophe:function(s){return s.replace(c.apostrophe,"")},fill:function(s,e,t){return null!=e&&(s=s.replace(c.fill,(function(t,n){return n?e+n:""}))),t&&(s=d.deapostrophe(s)),s},prep:function(s,e,t,n){if(s=null==s?"":s+"",!n&&c.upper.test(s)&&(s=d.low.call(s)),!e&&!c.hole.test(s)){var r=d.fill(s," ");c.hole.test(r)&&(s=r)}return t||c.room.test(s)||(s=s.replace(c.relax,d.relax)),s},relax:function(e,t,n,r){return t+" "+(n?n+" ":"")+r}},f={_:d,of:function(s){for(var i=0,e=d.types.length;i<e;i++)if(f[d.types[i]].apply(f,arguments)===s)return d.types[i]},flip:function(s){return s.replace(/\w/g,(function(e){return(e==d.up.call(e)?d.low:d.up).call(e)}))},random:function(s){return s.replace(/\w/g,(function(e){return(Math.round(Math.random())?d.up:d.low).call(e)}))},type:function(e,t){f[e]=t,d.types.push(e)}},m={lower:function(s,e,t){return d.fill(d.low.call(d.prep(s,e)),e,t)},snake:function(s){return f.lower(s,"_",!0)},constant:function(s){return f.upper(s,"_",!0)},camel:function(s){return d.decap(f.pascal(s))},kebab:function(s){return f.lower(s,"-",!0)},upper:function(s,e,t){return d.fill(d.up.call(d.prep(s,e,!1,!0)),e,t)},capital:function(s,e,t){return d.fill(d.prep(s).replace(c.capitalize,(function(e,t,n){return t+d.up.call(n)})),e,t)},header:function(s){return f.capital(s,"-",!0)},pascal:function(s){return d.fill(d.prep(s,!1,!0).replace(c.pascal,(function(e,t,n){return d.up.call(n)})),"",!0)},title:function(s){return f.capital(s).replace(c.improper,(function(small,p,i,s){return i>0&&i<s.lastIndexOf(" ")?d.low.call(small):small}))},sentence:function(s,e,t){return s=f.lower(s).replace(c.sentence,(function(e,t,n){return t+d.up.call(n)})),e&&e.forEach((function(e){s=s.replace(new RegExp("\\b"+f.lower(e)+"\\b","g"),d.cap)})),t&&t.forEach((function(abbr){s=s.replace(new RegExp("(\\b"+f.lower(abbr)+"\\. +)(\\w)"),(function(e,t,n){return t+d.low.call(n)}))})),s}};for(var h in m.squish=m.pascal,f.default=f,m)f.type(h,m[h]);var v="function"==typeof v?v:function(){};v(e.exports?e.exports=f:this.Case=f)}).call(this)},338:function(e,t,n){"use strict";n(296)},339:function(e,t,n){var r=n(33)(!1);r.push([e.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),r.push([e.i,".photo-detail-page[data-v-7185e248]{width:100%}.photo_license[data-v-7185e248]{text-transform:uppercase}.photo[data-v-7185e248]{width:100%;background:#f5f5f5}.icon[data-v-7185e248]{vertical-align:middle}.photo_image.loading[data-v-7185e248]{width:100%}.photo_image-ctr[data-v-7185e248]{overflow:hidden;text-align:center}.photo_image-ctr img[data-v-7185e248]{position:relative;width:100%;height:auto;max-height:44rem;max-width:100%;-o-object-fit:contain;object-fit:contain}@media screen and (max-width:768px){.photo_image-ctr[data-v-7185e248]{padding:30px 15px}}@media screen and (max-width:768px){.photo_info-ctr[data-v-7185e248]{padding:30px 0}}.help-icon[data-v-7185e248]{height:24px}.provider-logo[data-v-7185e248]{height:64px;display:block}.back[data-v-7185e248]{vertical-align:middle}",""]),e.exports=r},340:function(e,t,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("4ee9a376",content,!0,{sourceMap:!1})},376:function(e,t,n){"use strict";n(340)},377:function(e,t,n){var r=n(33)(!1);r.push([e.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),r.push([e.i,".report[data-v-140bb144]{font-size:.8rem!important;text-transform:none!important}.report[data-v-140bb144]:focus,.report[data-v-140bb144]:hover{background:none!important}dl[data-v-140bb144]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}dt[data-v-140bb144]{font-weight:700;width:92px;margin-right:24px;display:inline-block}dd[data-v-140bb144]{width:calc(100% - 120px)}",""]),e.exports=r},406:function(e,t,n){"use strict";n.r(t);n(60);var r=n(28),o=n(300),l=n(301),c=n(343),d={name:"ImageInfo",components:{PhotoTags:o.default},props:["image","ccLicenseURL","fullLicenseName","imageWidth","imageHeight","imageType"],computed:{providerName:function(){return Object(l.a)(this.$store.state.imageProviders,this.$props.image.provider)},prettyImageType:function(){return this.imageType&&this.imageType.split("/").length>1?this.imageType.split("/")[1].toUpperCase():"Unknown"},sourceName:function(){return Object(l.a)(this.$store.state.imageProviders,this.$props.image.source)}},methods:{getProviderLogo:function(e){return Object(c.a)(e)},onPhotoSourceLinkClicked:function(){this.$store.dispatch(r.b,{eventType:r.a.SOURCE_CLICKED,resultUuid:this.$props.image.id})}}},f=(n(376),n(7)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar_section"},[n("div",{staticClass:"margin-bottom-big"},[n("dl",[n("dt",{staticClass:"margin-bottom-small"},[e._v("\n        "+e._s(e.$t("photo-details.information.type"))+"\n      ")]),e._v(" "),n("dd",[e._v(e._s(e.prettyImageType))]),e._v(" "),n("dt",{staticClass:"margin-bottom-small"},[e._v("\n        "+e._s(e.$t("photo-details.information.dimensions"))+"\n      ")]),e._v(" "),n("dd",[e._v("\n        "+e._s(e.imageWidth)+" × "+e._s(e.imageHeight)+"\n        "),e._v("\n        "+e._s(e.$t("photo-details.information.pixels"))+"\n      ")]),e._v(" "),e.providerName!=e.sourceName?n("dt",{staticClass:"margin-bottom-small"},[e._v("\n        "+e._s(e.$t("photo-details.information.provider"))+"\n      ")]):e._e(),e._v(" "),e.providerName!=e.sourceName?n("dd",[e._v("\n        "+e._s(e.providerName)+"\n      ")]):e._e(),e._v(" "),n("dt",{staticClass:"margin-bottom-small"},[e._v("\n        "+e._s(e.$t("photo-details.information.source"))+"\n      ")]),e._v(" "),n("dd",[n("a",{attrs:{"aria-label":e.sourceName,href:e.image.foreign_landing_url,target:"blank",rel:"noopener noreferrer"},on:{click:e.onPhotoSourceLinkClicked,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onPhotoSourceLinkClicked(t)}}},[e._v("\n          "+e._s(e.sourceName)+"\n        ")])])])]),e._v(" "),n("div",{staticClass:"margin-bottom-big"},[n("h5",{staticClass:"is-block margin-bottom-small b-header"},[e._v("\n      "+e._s(e.$t("photo-details.information.tags"))+"\n    ")]),e._v(" "),n("PhotoTags",{attrs:{tags:e.image.tags,"show-header":!1}})],1)])}),[],!1,null,"140bb144",null);t.default=component.exports;installComponents(component,{PhotoTags:n(300).default})}}]);