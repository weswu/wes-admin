(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d81b547a"],{"2b95":function(t,e,i){t.exports=i.p+"img/article-7.06fbdc1d.jpg"},"669b":function(t,e,i){"use strict";var a=i("1a8a");e["a"]=a["a"]},"87da":function(t,e,i){t.exports=i.p+"img/article-5.a966cb55.jpg"},b0a1:function(t,e,i){},bb80:function(t,e,i){"use strict";var a=i("c0a4");e["a"]=a["default"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";const a=i.filter(t=>!1===t.isComment&&" "!==t.text);return a.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}})},bed0:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-info-card",{attrs:{title:"Recent Articles"}},[i("v-list",{staticClass:"py-0"},[t._l(t.articles,(function(e,a){return[i("v-list-item",{key:a,staticClass:"px-0",attrs:{"three-line":""}},[i("base-img",{staticClass:"mr-4",attrs:{src:e.src,color:"grey lighten-1",height:"72","max-width":"72"}}),i("v-list-item-content",[i("v-list-item-subtitle",{staticClass:"text-uppercase subtitle-2 font-weight-bold text--primary mb-n2",domProps:{textContent:t._s(e.title)}}),i("v-list-item-subtitle",{staticClass:"font-weight-bold",domProps:{textContent:t._s(e.date)}})],1)],1),i("v-divider",{key:"divider-"+a})]}))],2)],1)},s=[],n={name:"NewsRecentArticles",data:function(){return{articles:[{date:"Jan 12, 2020",title:"Lorem ipsum dolor, sit amet",src:i("87da")},{date:"Oct 19, 2019",title:"Lorem ipsum dolor, sit amet",src:i("deac")},{date:"Jul 24, 2019",title:"Lorem ipsum dolor, sit amet",src:i("2b95")}]}}},r=n,l=i("5d22"),c=i("7aad"),o=i.n(c),d=i("0175"),u=i("bd87"),m=i("04ee"),p=i("c140"),b=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=b.exports;o()(b,{VDivider:d["a"],VList:u["a"],VListItem:m["a"],VListItemContent:p["a"],VListItemSubtitle:p["b"]})},c140:function(t,e,i){"use strict";i.d(e,"a",(function(){return h})),i.d(e,"c",(function(){return f})),i.d(e,"b",(function(){return _}));var a=i("fee5"),s=i("bd87"),n=i("4374"),r=i("04ee"),l=(i("b0a1"),i("1e63")),c=i("c9b6"),o=i("9103"),d=Object(o["a"])(l["a"],c["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...l["a"].options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...l["a"].options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),u=i("bb80"),m=i("669b"),p=m["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...m["a"].options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=m["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),b=i("64f3");const v=Object(a["i"])("v-list-item__action-text","span"),h=Object(a["i"])("v-list-item__content","div"),f=Object(a["i"])("v-list-item__title","div"),_=Object(a["i"])("v-list-item__subtitle","div");s["a"],n["a"],r["a"],u["a"],b["a"]},deac:function(t,e,i){t.exports=i.p+"img/article-6.dc516d73.jpg"}}]);