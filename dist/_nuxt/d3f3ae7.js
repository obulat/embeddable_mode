(window.webpackJsonp=window.webpackJsonp||[]).push([[37,24],{281:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("9a63b338",content,!0,{sourceMap:!1})},282:function(t,e,o){"use strict";o.r(e);o(60),o(18);var n={by:"by",nc:"nc",nd:"nd",sa:"sa",cc0:"zero",pdm:"pd"},r={name:"license-icons",components:{},props:{license:""},methods:{getLicenseIcon:function(t){var e=[];return t&&(e=t.split("-")),e.map((function(t){return n[t]}))}}},c=(o(286),o(7)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"photo-license-icons"},[o("i",{staticClass:"icon cc-logo is-size-4 has-text-black has-background-white",attrs:{title:"CC"}}),t._l(t.getLicenseIcon(t.license),(function(e,i){var n;return[e?o("i",{key:i,class:(n={icon:!0},n["has-text-black"]=!0,n["has-background-white"]=!0,n["is-size-4"]=!0,n["cc-"+e]=!0,n),attrs:{alt:""+e.toUpperCase()}}):t._e()]}))],2)}),[],!1,null,"857ef062",null);e.default=component.exports},286:function(t,e,o){"use strict";o(281)},287:function(t,e,o){var n=o(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".icon[data-v-857ef062]{vertical-align:middle;margin-right:.3rem}",""]),t.exports=n},327:function(t,e,o){var content=o(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("7b0f849c",content,!0,{sourceMap:!1})},368:function(t,e,o){"use strict";o(327)},369:function(t,e,o){var n=o(33)(!1);n.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),n.push([t.i,".search-grid_image-ctr[data-v-3b2c7b39]{background:#ebece4;display:block;width:100%}.search-grid_item-container[data-v-3b2c7b39]{margin:10px}.search-grid_item[data-v-3b2c7b39]{overflow:hidden}.search-grid_item i[data-v-3b2c7b39]{display:block}.search-grid_item a[data-v-3b2c7b39]{position:absolute;vertical-align:bottom}.search-grid_item a img[data-v-3b2c7b39]{width:100%}.search-grid_item:hover .overlay[data-v-3b2c7b39]{opacity:1;bottom:0}.overlay[data-v-3b2c7b39]{position:absolute;opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;color:#fff;display:block;top:-100%}.overlay__top[data-v-3b2c7b39]{top:0;width:100%;height:2rem}.overlay__bottom[data-v-3b2c7b39]{background-color:#000;bottom:-100%;top:auto;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100%}@media (hover:none){.overlay[data-v-3b2c7b39]{position:absolute;opacity:1;bottom:0}}.search-grid_item[data-v-3b2c7b39]{width:100%;position:relative;display:block;float:left;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;cursor:pointer}.search-grid_image[data-v-3b2c7b39]{margin:auto;display:block}.search-grid_image__fill[data-v-3b2c7b39]{width:100%}",""]),t.exports=n},400:function(t,e,o){"use strict";o.r(e);var n=o(282),r=o(343),c=o(367),l=3/4,d=16/9,m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return t.indexOf("http://")>=0||t.indexOf("https://")>=0?t:"".concat(e).concat(t)},h={name:"SearchGridCell",components:{LicenseIcons:n.default},props:["image","shouldContainImage"],data:function(){return{widthBasis:253.125,imgHeight:this.image.height||100,imgWidth:this.image.width||100}},computed:{imageAspect:function(){return this.imgWidth/this.imgHeight},containerAspect:function(){return this.imageAspect>d?d:this.imageAspect<l?l:this.imageAspect},iPadding:function(){return this.imageAspect<l?1/l*100:this.imageAspect>d?56.25:1/this.imageAspect*100},imageWidth:function(){return this.imageAspect<d?100:this.imageAspect/d*100},imageTop:function(){return this.imageAspect>l?0:(l-this.imageAspect)/(this.imageAspect*l*l)*-50},imageLeft:function(){return this.imageAspect<d?0:(this.imageAspect-d)/d*-50}},methods:{getImageUrl:function(image){if(!image)return"";var t=image.thumbnail||image.url;return this.imageAspect,m(t)},getImageForeignUrl:function(image){return m(image.foreign_landing_url)},getProviderLogo:function(t){return Object(r.a)(t)},onGotoDetailPage:function(t,image){if(!t.metaKey&&!t.ctrlKey){t.preventDefault();var e=this.localeRoute({name:"photo-detail-page",params:{id:image.id,location:window.scrollY}});this.$router.push(e)}},onImageLoadError:function(t,image){var element=t.target;element.src!==image.url?element.src=image.url:element.src=c},getImgDimension:function(t){this.imgHeight=t.target.naturalHeight,this.imgWidth=t.target.naturalWidth}}},f=(o(368),o(7)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-grid_item-container",style:"width: "+t.containerAspect*t.widthBasis+"px;\n  flex-grow: "+t.containerAspect*t.widthBasis,attrs:{"aria-label":t.image.title}},[o("figure",{staticClass:"search-grid_item"},[o("i",{style:"padding-bottom:"+t.iPadding+"%"}),t._v(" "),o("NuxtLink",{staticClass:"search-grid_image-ctr",style:"width: "+t.imageWidth+"%; top: "+t.imageTop+"%; left:"+t.imageLeft+"%;",attrs:{to:t.localePath("/photos/"+t.image.id)},on:{click:function(e){return t.onGotoDetailPage(e,t.image)}}},[o("img",{ref:"img",class:{"search-grid_image":!0,"search-grid_image__fill":!t.shouldContainImage},attrs:{loading:"lazy",alt:t.image.title,src:t.getImageUrl(t.image)},on:{load:t.getImgDimension,error:function(e){return t.onImageLoadError(e,t.image)}}})]),t._v(" "),o("figcaption",{staticClass:"overlay overlay__top padding-small"},[o("LicenseIcons",{attrs:{license:t.image.license}})],1),t._v(" "),o("figcaption",{staticClass:"overlay overlay__bottom padding-vertical-small padding-horizontal-normal"},[o("span",{staticClass:"caption has-text-weight-semibold"},[t._v(t._s(t.image.title))])])],1)])}),[],!1,null,"3b2c7b39",null);e.default=component.exports;installComponents(component,{LicenseIcons:o(282).default})}}]);