(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{294:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("29d32daa",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n.r(e);var o={name:"OtherIssueForm",data:function(){return{otherReasonDescription:""}},computed:{descriptionHasMoreThan20Chars:function(){return this.otherReasonDescription.length>=20}},methods:{onBackClick:function(){this.$emit("onBackClick")},sendContentReport:function(){this.$emit("sendContentReport",this.otherReasonDescription)}}},r=(n(334),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"other-form"},[n("h4",{staticClass:"b-header"},[t._v("\n    "+t._s(t.$t("photo-details.content-report.title"))+"\n  ")]),t._v(" "),n("legend",{staticClass:"margin-bottom-small"},[t._v("\n    "+t._s(t.$t("photo-details.content-report.issue-description"))+"\n  ")]),t._v(" "),n("label",{attrs:{for:"issue"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.otherReasonDescription,expression:"otherReasonDescription"}],staticClass:"reason padding-small has-text-weight-semibold",attrs:{id:"issue",placeholder:"Issue description required (with at least 20 characters)"},domProps:{value:t.otherReasonDescription},on:{input:function(e){e.target.composing||(t.otherReasonDescription=e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"button other-back-button is-text tiny margin-top-normal has-background-white",on:{click:function(e){return t.onBackClick()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onBackClick()}}},[n("span",[n("i",{staticClass:"icon chevron-left margin-right-small"}),t._v("\n        "+t._s(t.$t("photo-details.content-report.back"))+"\n      ")])]),t._v(" "),n("button",{staticClass:"button submit-other-button tiny is-success margin-top-normal is-pulled-right",attrs:{type:"button",disabled:!t.descriptionHasMoreThan20Chars},on:{click:function(e){return t.sendContentReport()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendContentReport()}}},[t._v("\n      "+t._s(t.$t("photo-details.content-report.submit"))+"\n    ")])])])}),[],!1,null,"6646b923",null);e.default=component.exports},334:function(t,e,n){"use strict";n(294)},335:function(t,e,n){var o=n(33)(!1);o.push([t.i,"@import url(https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css);"]),o.push([t.i,".reason[data-v-6646b923]{width:100%;height:6rem;font-size:13px;font-family:Source Sans Pro}",""]),t.exports=o}}]);