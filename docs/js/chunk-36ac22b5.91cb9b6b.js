(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ac22b5"],{"7eb3":function(t,e,i){},"81ef":function(t,e,i){},"9b1d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-lg":"","pa-0":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-basic-card",{attrs:{title:"Inline Edit - e.g.1","toolbar-height":"56"}},[i("template",{slot:"card-content"},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.list,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[t._v(t._s(e.item.name))]),i("td",[t._v(t._s(e.item.age))]),i("td",[t._v(t._s(e.item.address))]),i("td",{staticClass:"justify-center"},[i("v-icon",{staticClass:"mr-2",on:{click:function(i){return t.editItem(e.item)}}},[t._v(" edit ")]),i("v-icon",{attrs:{disabled:""}},[t._v("delete")])],1)]}}])})],1)],2)],1),i("v-flex",{attrs:{xs12:""}},[i("v-basic-card",{attrs:{title:"Inline Edit - e.g.2","toolbar-height":"56"}},[i("template",{slot:"card-content"},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.list2,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[t._v(t._s(e.item.name))]),i("td",[t._v(t._s(e.item.age))]),i("td",[e.item.edit?[i("v-text-field",{attrs:{autofocus:"","append-icon":"replay"},on:{"click:append":function(i){return t.eg2ResetItem(e.item)}},model:{value:e.item.address,callback:function(i){t.$set(e.item,"address",i)},expression:"props.item.address"}},[i("v-tooltip",{attrs:{slot:"append",bottom:""},slot:"append"},[i("v-icon",{attrs:{slot:"activator"},on:{click:function(i){return t.eg2ResetItem(e.item)}},slot:"activator"},[t._v(" replay ")]),t._v(" Reset ")],1)],1)]:i("span",[t._v(t._s(e.item.address))])],2),i("td",{staticClass:"justify-center"},[e.item.edit?i("v-icon",{staticClass:"mr-2",on:{click:function(i){return t.eg2SaveItem(e.item)}}},[t._v(" save ")]):i("v-icon",{staticClass:"mr-2",on:{click:function(i){return t.eg2EditItem(e.item)}}},[t._v(" edit ")]),i("v-icon",{attrs:{disabled:""}},[t._v("delete")])],1)]}}])})],1)],2)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Edit Item")])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{attrs:{label:"Age"},model:{value:t.editedItem.age,callback:function(e){t.$set(t.editedItem,"age",e)},expression:"editedItem.age"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{attrs:{label:"Address"},model:{value:t.editedItem.address,callback:function(e){t.$set(t.editedItem,"address",e)},expression:"editedItem.address"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1)},a=[],n=i("ca00"),o={name:"TableInlineEdit",data:function(){return{dialog:!1,editedIndex:-1,editedItem:{},headers:[{text:"Name",align:"left",sortable:!1,value:"name"},{text:"Age",value:"age",sortable:!1},{text:"Address",value:"address",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],list:[{name:"Anna",age:24,address:"Beijing, China"},{name:"Bonnie",age:23,address:"Shanghai, China"},{name:"Clementine",age:22,address:"Guangzhou, China"},{name:"Doris",age:21,address:"Shenzhen, China"},{name:"Emma",age:20,address:"Chengdu, China"}],list2:[],preItem:{},cachedItem:{}}},methods:{editItem:function(t){this.editedIndex=this.list.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem={},t.editedIndex=-1}))},save:function(){Object.assign(this.list[this.editedIndex],this.editedItem),this.close()},getListData:function(){var t=this;this.$api.readTablesList().then((function(e){var i=e.data.data||[];t.list2=i.map((function(e){return t.$set(e,"edit",!1),e}))})).catch((function(t){console.error("getListData",t)}))},eg2EditItem:function(t){this.preItem.edit&&this.eg2ResetItem(this.preItem),this.preItem=t,t.edit=!t.edit,this.cachedItem=Object(n["a"])(t)},eg2SaveItem:function(t){t.edit=!1,this.refreshItem()},eg2ResetItem:function(t){t.edit=!1,t.address=this.cachedItem.address,this.refreshItem()},refreshItem:function(){this.cachedItem={},this.preItem={}}},created:function(){this.getListData()}},r=o,c=i("5d22"),l=i("7aad"),d=i.n(l),h=i("664c"),u=i("ff16"),m=i("d84d"),v=i("3167"),g=i("c7da"),f=(i("81ef"),i("2761")),p=i("63f9"),b=i("c441"),x=i("a343"),I=i("483a"),y=i("a21e"),C=i("0bc7"),w=i("255a"),k=i("6596"),A=i("9103"),_=i("93be"),T=i("fee5");const O=Object(A["a"])(p["a"],b["a"],x["a"],I["a"],y["a"],C["a"],w["a"]);var $=O.extend({name:"v-dialog",directives:{ClickOutside:k["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(_["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):I["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===T["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(f["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(T["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(T["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),S=i("3773"),E=i("0427"),B=i("ca20"),D=i("a483"),L=i("d50c"),j=i("e7a2"),V=Object(c["a"])(r,s,a,!1,null,null,null);e["default"]=V.exports;d()(V,{VBtn:h["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VContainer:v["a"],VDataTable:g["a"],VDialog:$,VFlex:S["a"],VIcon:E["a"],VLayout:B["a"],VSpacer:D["a"],VTextField:L["a"],VTooltip:j["a"]})},e7a2:function(t,e,i){"use strict";i("7eb3");var s=i("63f9"),a=i("c9b6"),n=i("3460"),o=i("c441"),r=i("a343"),c=i("a7bc"),l=i("255a"),d=i("fee5"),h=i("93be"),u=i("9103");e["a"]=Object(u["a"])(a["a"],n["a"],o["a"],r["a"],c["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),this.calcXOverflow(a,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(d["g"])(this.maxWidth),minWidth:Object(d["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(d["t"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===d["x"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})}}]);