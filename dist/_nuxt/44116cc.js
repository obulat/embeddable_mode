(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{296:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("e11822ba",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n.r(e);n(10),n(16);var o=n(1),r={name:"PhotoTags",props:["tags","showHeader"],computed:{hasClarifaiTags:function(){return this.$props.tags.some((function(t){return"clarifai"===t.provider}))}},methods:{isClarifaiTag:function(t){return"clarifai"===t},searchByTagName:function(t){this.$store.commit(o.A,{query:{q:t}})},getValidTags:function(){return this.$props.tags.filter((function(t){return!!t.name}))}}},c=(n(338),n(7)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags&&t.tags.length?n("div",{staticClass:"photo_tags"},[t.showHeader?n("h3",{staticClass:"b-header"},[t._v("\n    "+t._s(t.$t("photo-details.information.tags"))+"\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"margin-top-normal"},[t._l(t.getValidTags(),(function(e,o){return[n("button",{key:o,staticClass:"button tag margin-smaller",on:{click:function(n){return t.searchByTagName(e.name)},keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.searchByTagName(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])]}))],2)]):t._e()}),[],!1,null,"7185e248",null);e.default=component.exports},338:function(t,e,n){"use strict";n(296)},339:function(t,e,n){var o=n(33)(!1);o.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),o.push([t.i,".photo-detail-page[data-v-7185e248]{width:100%}.photo_license[data-v-7185e248]{text-transform:uppercase}.photo[data-v-7185e248]{width:100%;background:#f5f5f5}.icon[data-v-7185e248]{vertical-align:middle}.photo_image.loading[data-v-7185e248]{width:100%}.photo_image-ctr[data-v-7185e248]{overflow:hidden;text-align:center}.photo_image-ctr img[data-v-7185e248]{position:relative;width:100%;height:auto;max-height:44rem;max-width:100%;-o-object-fit:contain;object-fit:contain}@media screen and (max-width:768px){.photo_image-ctr[data-v-7185e248]{padding:30px 15px}}@media screen and (max-width:768px){.photo_info-ctr[data-v-7185e248]{padding:30px 0}}.help-icon[data-v-7185e248]{height:24px}.provider-logo[data-v-7185e248]{height:64px;display:block}.back[data-v-7185e248]{vertical-align:middle}",""]),t.exports=o}}]);