(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebc27556"],{"669b":function(t,a,e){"use strict";var i=e("1a8a");a["a"]=i["a"]},a85c:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list-item",{staticClass:"py-12 px-0"},[e("v-avatar",{staticClass:"mr-6",attrs:{color:"grey lighten-1",size:"128"}},[e("v-img",{attrs:{src:t.src}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"mb-3 title text-uppercase",domProps:{textContent:t._s(t.name)}}),e("base-body",{attrs:{text:t.blurb,space:"3"}}),e("div",{staticClass:"mx-n2"},t._l(t.icons,(function(a){return e("v-icon",{key:a,staticClass:"px-2",attrs:{small:""},domProps:{textContent:t._s(a)},on:{click:function(){}}})})),1)],1)],1)},s=[],n={name:"NewsAuthor",props:{name:String,blurb:String,src:String},data:function(){return{icons:["mdi-twitter","mdi-facebook","mdi-github","mdi-snapchat"]}}},r=n,c=e("5d22"),o=e("7aad"),l=e.n(o),u=e("1a8a"),m=e("0427"),d=e("47ac"),v=e("04ee"),p=e("c140"),b=Object(c["a"])(r,i,s,!1,null,null,null);a["default"]=b.exports;l()(b,{VAvatar:u["a"],VIcon:m["a"],VImg:d["a"],VListItem:v["a"],VListItemContent:p["a"],VListItemTitle:p["c"]})},b0a1:function(t,a,e){},bb80:function(t,a,e){"use strict";var i=e("c0a4");a["a"]=i["default"].extend({name:"v-list-item-action",functional:!0,render(t,{data:a,children:e=[]}){a.staticClass=a.staticClass?"v-list-item__action "+a.staticClass:"v-list-item__action";const i=e.filter(t=>!1===t.isComment&&" "!==t.text);return i.length>1&&(a.staticClass+=" v-list-item__action--stack"),t("div",a,e)}})},c140:function(t,a,e){"use strict";e.d(a,"a",(function(){return h})),e.d(a,"c",(function(){return _})),e.d(a,"b",(function(){return f}));var i=e("fee5"),s=e("bd87"),n=e("4374"),r=e("04ee"),c=(e("b0a1"),e("1e63")),o=e("c9b6"),l=e("9103"),u=Object(l["a"])(c["a"],o["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...c["a"].options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...c["a"].options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),m=e("bb80"),d=e("669b"),v=d["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...d["a"].options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const a=d["a"].options.render.call(this,t);return a.data=a.data||{},a.data.staticClass+=" v-list-item__avatar",a}}),p=e("64f3");const b=Object(i["i"])("v-list-item__action-text","span"),h=Object(i["i"])("v-list-item__content","div"),_=Object(i["i"])("v-list-item__title","div"),f=Object(i["i"])("v-list-item__subtitle","div");s["a"],n["a"],r["a"],m["a"],p["a"]}}]);