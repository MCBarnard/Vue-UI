"use strict";(self["webpackChunkvue_ui_library"]=self["webpackChunkvue_ui_library"]||[]).push([[518],{8063:function(e,n,l){l.d(n,{Z:function(){return u}});var a=l(3396),r=l(7139);const t={class:"input-component"},d=["value"];function o(e,n,l,o,i,c){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a._)("label",null,(0,r.zw)(l.label),1),(0,a._)("input",{value:l.value},null,8,d)])}var i={props:{label:String,value:String}},c=l(89);const s=(0,c.Z)(i,[["render",o],["__scopeId","data-v-3180525a"]]);var u=s},6993:function(e,n,l){l.r(n),l.d(n,{default:function(){return I}});var a=l(3396);const r=e=>((0,a.dD)("data-v-430920ea"),e=e(),(0,a.Cn)(),e),t={class:"toggle-page"},d={class:"props-table"},o=r((()=>(0,a._)("td",null,"state",-1))),i=r((()=>(0,a._)("td",{class:"divider"},null,-1))),c=r((()=>(0,a._)("td",null,"variant",-1))),s=r((()=>(0,a._)("td",null,"label",-1))),u=r((()=>(0,a._)("td",{class:"divider"},null,-1))),g=r((()=>(0,a._)("td",null,"labelBehind",-1))),b=r((()=>(0,a._)("td",null,"size",-1))),m=r((()=>(0,a._)("td",{class:"divider"},null,-1))),$=r((()=>(0,a._)("td",null,"name",-1))),h=r((()=>(0,a._)("td",null,"disabled",-1)));function k(e,n,l,r,k,p){const f=(0,a.up)("vue-u-i-toggle-component"),v=(0,a.up)("toggle-component"),w=(0,a.up)("select-component"),x=(0,a.up)("input-component"),z=(0,a.up)("prism-component"),_=(0,a.up)("table-component"),C=(0,a.up)("ShowcaseComponent");return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.Wm)(C,null,{component:(0,a.w5)((()=>[(0,a.Wm)(f,{state:p.computedActive,label:p.computedLabel,labelBehind:p.computedLabelBehind,size:p.computedSize,variant:p.computedVariant,disabled:p.computedDisabled,name:p.computedName,onToggle:p.activeChanged},null,8,["state","label","labelBehind","size","variant","disabled","name","onToggle"])])),controls:(0,a.w5)((()=>[(0,a._)("table",d,[(0,a._)("tr",null,[o,(0,a._)("td",null,[(0,a.Wm)(v,{size:"small",variant:"info",state:p.computedActive,onToggle:p.activeChanged},null,8,["state","onToggle"])]),i,c,(0,a._)("td",null,[(0,a.Wm)(w,{state:p.computedVariant,onSelected:p.variantChanged,data:k.variantOptions,defaults:"default"},null,8,["state","onSelected","data"])])]),(0,a._)("tr",null,[s,(0,a._)("td",null,[(0,a.Wm)(x,{value:p.computedLabel,onChange:p.labelChanged},null,8,["value","onChange"])]),u,g,(0,a._)("td",null,[(0,a.Wm)(v,{size:"small",variant:"info",state:p.computedLabelBehind,onToggle:p.labelBehindChanged},null,8,["state","onToggle"])])]),(0,a._)("tr",null,[b,(0,a._)("td",null,[(0,a.Wm)(w,{state:p.computedSize,onSelected:p.sizeChanged,data:k.sizeOptions,defaults:"default"},null,8,["state","onSelected","data"])]),m,$,(0,a._)("td",null,[(0,a.Wm)(x,{value:p.computedName,onChange:p.nameChanged},null,8,["value","onChange"])])]),(0,a._)("tr",null,[h,(0,a._)("td",null,[(0,a.Wm)(v,{size:"small",variant:"info",state:p.computedDisabled,onToggle:p.disabledChanged},null,8,["state","onToggle"])])])])])),code:(0,a.w5)((()=>[(0,a.Wm)(z,{code:k.code,nameOfFile:"ToggleComponent.vue"},null,8,["code"])])),docs:(0,a.w5)((()=>[(0,a.Wm)(_,{headings:k.propHeadings,items:k.propDetails},null,8,["headings","items"])])),_:1})])}var p=l(390),f=l(2394),v=l(8063),w=l(130),x=l(7139);const z=["disabled","checked","id"],_=["for"];function C(e,n,l,r,t,d){return(0,a.wg)(),(0,a.iD)("div",{class:(0,x.C_)(["toggle-container",{dark:l.dark},{reverse:l.labelBehind},l.size,l.variant,{disabled:l.disabled}])},[l.label?((0,a.wg)(),(0,a.iD)("p",{key:0,onClick:n[0]||(n[0]=(...e)=>d.toggleButton&&d.toggleButton(...e))},(0,x.zw)(l.label),1)):(0,a.kq)("",!0),(0,a._)("input",{onChange:n[1]||(n[1]=(...e)=>d.toggled&&d.toggled(...e)),disabled:l.disabled,checked:d.computedState,type:"checkbox",id:d.computedName},null,40,z),(0,a._)("label",{for:d.computedName},null,8,_)],2)}var y={data(){return{cleanName:""}},mounted(){this.cleanName=this.name||this.generateRandomLetters(5)},props:{state:Boolean,label:String,labelBehind:Boolean,size:String,variant:String,dark:Boolean,disabled:Boolean,name:String},methods:{toggleButton(){this.disabled||this.toggled()},toggled(){this.$emit("toggle",this.state)},generateRandomLetters(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let l="";for(let a=0;a<e;a++){const e=Math.floor(Math.random()*n.length);l+=n.charAt(e)}return l}},computed:{computedState(){return this.state},computedName(){return this.cleanName}}},B=l(89);const S=(0,B.Z)(y,[["render",C],["__scopeId","data-v-557c1018"]]);var N=S,T=l(8939),D=l(4158),W='<template>\n<div\n  :class="[\n    \'toggle-container\',\n    { dark: dark },\n    { reverse: labelBehind },\n    size,\n    variant,\n    { disabled: disabled },\n  ]"\n>\n  <p v-if="label" @click="toggleButton">{{ label }}</p>\n  <input\n    @change="toggled"\n    :disabled="disabled"\n    :checked="computedState"\n    type="checkbox"\n    :id="computedName"\n  />\n  <label :for="computedName"></label>\n</div>\n</template>\n\n<script>\nexport default {\ndata() {\n  return {\n    cleanName: "",\n  };\n},\nmounted() {\n  this.cleanName = this.name || this.generateRandomLetters(5);\n},\nprops: {\n  state: Boolean, // true / false\n  label: String, // ""\n  labelBehind: Boolean, // true / false\n  size: String, // "" / small / medium / large\n  variant: String, // "" / info / success / warning / danger\n  dark: Boolean, // true / false\n  disabled: Boolean, // true / false,\n  name: String, // Unique identifier for the toggle\n},\nmethods: {\n  toggleButton() {\n    if (this.disabled) return;\n    this.toggled();\n  },\n  toggled() {\n    this.$emit("toggle", this.state);\n  },\n  generateRandomLetters(length) {\n    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";\n    let result = "";\n\n    for (let i = 0; i < length; i++) {\n      const randomIndex = Math.floor(Math.random() * letters.length);\n      result += letters.charAt(randomIndex);\n    }\n\n    return result;\n  },\n},\ncomputed: {\n  computedState() {\n    return this.state;\n  },\n  computedName() {\n    return this.cleanName;\n  },\n},\n};\n<\/script>\n\n<style scoped lang="scss">\n// =========== Colors ================== //\n$default-text-color: #000;\n$dark-text-color: #fff;\n$default-slider-color: #fff;\n$dark-slider-color: #3d3d3d;\n$default-slider-tray-color: grey;\n$dark-slider-tray-color: grey;\n$default-theme-color: #d400ff;\n$info-theme-color: #0094f9;\n$success-theme-color: #00b014;\n$warning-theme-color: #ffb000;\n$danger-theme-color: #ff0000;\n$disabled-theme-color: #b5b5b5;\n\n// =========== Sizes ================== //\n\n$small-label-width: 30px;\n$small-label-height: 16px;\n$small-position-from: 1px;\n$small-label-border-radius: 100px;\n$small-label-slider-top: 1px;\n$small-label-slider-left: 2px;\n$small-label-slider-size: 14px;\n$small-label-line-height: 18px;\n$small-label-font-size: 12px;\n$small-label-toggle-gap: 4px;\n\n$medium-label-width: 45px;\n$medium-label-height: 26px;\n$medium-position-from: 5px;\n$medium-label-border-radius: 100px;\n$medium-label-slider-top: 3px;\n$medium-label-slider-left: 3px;\n$medium-label-slider-size: 20px;\n$medium-label-line-height: 30px;\n$medium-label-font-size: 18px;\n$medium-label-toggle-gap: 8px;\n\n$large-label-width: 70px;\n$large-label-height: 36px;\n$large-position-from: 5px;\n$large-label-border-radius: 100px;\n$large-label-slider-top: 3px;\n$large-label-slider-left: 3px;\n$large-label-slider-size: 30px;\n$large-label-line-height: 40px;\n$large-label-font-size: 30px;\n$large-label-toggle-gap: 12px;\n\n// light mode\n$default-background-active: $default-theme-color;\n$default-background: $default-slider-tray-color;\n$default-slider-background: $default-slider-color;\n$default-label-color: $default-text-color;\n\n$info-background-active: $info-theme-color;\n$info-background: $default-slider-tray-color;\n$info-slider-background: $default-slider-color;\n$info-label-color: $default-text-color;\n\n$success-background-active: $success-theme-color;\n$success-background: $default-slider-tray-color;\n$success-slider-background: $default-slider-color;\n$success-label-color: $default-text-color;\n\n$warning-background-active: $warning-theme-color;\n$warning-background: $default-slider-tray-color;\n$warning-slider-background: $default-slider-color;\n$warning-label-color: $default-text-color;\n\n$danger-background-active: $danger-theme-color;\n$danger-background: $default-slider-tray-color;\n$danger-slider-background: $default-slider-color;\n$danger-label-color: $default-text-color;\n\n$disabled-background-active: $disabled-theme-color;\n$disabled-background: $default-slider-tray-color;\n$disabled-slider-background: $default-slider-color;\n$disabled-label-color: $default-text-color;\n\n// Dark mode\n$dark-default-background-active: $default-theme-color;\n$dark-default-background: $dark-slider-tray-color;\n$dark-default-slider-background: $dark-slider-color;\n$dark-default-label-color: $dark-text-color;\n\n$dark-info-background-active: $info-theme-color;\n$dark-info-background: $dark-slider-tray-color;\n$dark-info-slider-background: $dark-slider-color;\n$dark-info-label-color: $dark-text-color;\n\n$dark-success-background-active: $success-theme-color;\n$dark-success-background: $dark-slider-tray-color;\n$dark-success-slider-background: $dark-slider-color;\n$dark-success-label-color: $dark-text-color;\n\n$dark-warning-background-active: $warning-theme-color;\n$dark-warning-background: $dark-slider-tray-color;\n$dark-warning-slider-background: $dark-slider-color;\n$dark-warning-label-color: $dark-text-color;\n\n$dark-danger-background-active: $danger-theme-color;\n$dark-danger-background: $dark-slider-tray-color;\n$dark-danger-slider-background: $dark-slider-color;\n$dark-danger-label-color: $dark-text-color;\n\n$dark-disabled-background-active: $disabled-theme-color;\n$dark-disabled-background: $dark-slider-tray-color;\n$dark-disabled-slider-background: $dark-slider-color;\n$dark-disabled-label-color: $dark-text-color;\n\n.toggle-container {\ndisplay: flex;\ngap: $medium-label-toggle-gap;\n\n&.reverse {\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n\np {\n  line-height: $medium-label-line-height;\n  font-size: $medium-label-font-size;\n  margin: 0;\n  cursor: pointer;\n  color: $default-label-color;\n}\n\ninput[type="checkbox"] {\n  height: 0;\n  width: 0;\n  visibility: hidden;\n}\n\nlabel {\n  cursor: pointer;\n  width: $medium-label-width;\n  height: $medium-label-height;\n  background: $default-background;\n  display: block;\n  border-radius: $medium-label-border-radius;\n  position: relative;\n}\n\nlabel:after {\n  content: "";\n  position: absolute;\n  top: $medium-label-slider-top;\n  left: $medium-label-slider-left;\n  width: $medium-label-slider-size;\n  height: $medium-label-slider-size;\n  background: $default-slider-background;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n\ninput:checked + label {\n  background: $default-background-active;\n}\n\ninput:checked + label:after {\n  left: calc(100% - #{$medium-label-slider-left});\n  transform: translateX(-100%);\n}\n\n&.small {\n  gap: $small-label-toggle-gap;\n\n  p {\n    line-height: $small-label-line-height;\n    font-size: $small-label-font-size;\n  }\n\n  label {\n    width: $small-label-width;\n    height: $small-label-height;\n    border-radius: $small-label-border-radius;\n  }\n\n  label:after {\n    top: $small-label-slider-top;\n    left: $small-label-slider-left;\n    width: $small-label-slider-size;\n    height: $small-label-slider-size;\n  }\n\n  input:checked + label:after {\n    left: calc(100% - #{$small-label-slider-left});\n  }\n}\n\n&.large {\n  gap: $large-label-toggle-gap;\n\n  p {\n    line-height: $large-label-line-height;\n    font-size: $large-label-font-size;\n  }\n\n  label {\n    width: $large-label-width;\n    height: $large-label-height;\n    border-radius: $large-label-border-radius;\n  }\n\n  label:after {\n    top: $large-label-slider-top;\n    left: $large-label-slider-left;\n    width: $large-label-slider-size;\n    height: $large-label-slider-size;\n  }\n\n  input:checked + label:after {\n    left: calc(100% - #{$large-label-slider-left});\n  }\n}\n\n&.info {\n  p {\n    color: $info-label-color;\n  }\n\n  label {\n    background: $info-background;\n  }\n\n  label:after {\n    background: $info-slider-background;\n  }\n\n  input:checked + label {\n    background: $info-background-active;\n  }\n}\n\n&.success {\n  p {\n    color: $success-label-color;\n  }\n\n  label {\n    background: $success-background;\n  }\n\n  label:after {\n    background: $success-slider-background;\n  }\n\n  input:checked + label {\n    background: $success-background-active;\n  }\n}\n\n&.warning {\n  p {\n    color: $warning-label-color;\n  }\n\n  label {\n    background: $warning-background;\n  }\n\n  label:after {\n    background: $warning-slider-background;\n  }\n\n  input:checked + label {\n    background: $warning-background-active;\n  }\n}\n\n&.danger {\n  p {\n    color: $danger-label-color;\n  }\n\n  label {\n    background: $danger-background;\n  }\n\n  label:after {\n    background: $danger-slider-background;\n  }\n\n  input:checked + label {\n    background: $danger-background-active;\n  }\n}\n\n&.disabled {\n  p {\n    cursor: not-allowed;\n    color: $disabled-label-color;\n  }\n\n  label {\n    cursor: not-allowed;\n    background: $disabled-background;\n  }\n\n  label:after {\n    cursor: not-allowed;\n    background: $disabled-slider-background;\n  }\n\n  input:checked + label {\n    cursor: not-allowed;\n    background: $disabled-background-active;\n  }\n}\n\n&.dark {\n  p {\n    color: $dark-default-label-color;\n  }\n\n  label {\n    background: $dark-default-background;\n  }\n\n  label:after {\n    background: $dark-default-slider-background;\n  }\n\n  input:checked + label {\n    background: $dark-default-background-active;\n  }\n\n  &.info {\n    p {\n      color: $dark-info-label-color;\n    }\n\n    label {\n      background: $dark-info-background;\n    }\n\n    label:after {\n      background: $dark-info-slider-background;\n    }\n\n    input:checked + label {\n      background: $dark-info-background-active;\n    }\n  }\n\n  &.success {\n    p {\n      color: $dark-success-label-color;\n    }\n\n    label {\n      background: $dark-success-background;\n    }\n\n    label:after {\n      background: $dark-success-slider-background;\n    }\n\n    input:checked + label {\n      background: $dark-success-background-active;\n    }\n  }\n\n  &.warning {\n    p {\n      color: $dark-warning-label-color;\n    }\n\n    label {\n      background: $dark-warning-background;\n    }\n\n    label:after {\n      background: $dark-warning-slider-background;\n    }\n\n    input:checked + label {\n      background: $dark-warning-background-active;\n    }\n  }\n\n  &.danger {\n    p {\n      color: $dark-danger-label-color;\n    }\n\n    label {\n      background: $dark-danger-background;\n    }\n\n    label:after {\n      background: $dark-danger-slider-background;\n    }\n\n    input:checked + label {\n      background: $dark-danger-background-active;\n    }\n  }\n\n  &.disabled {\n    p {\n      cursor: not-allowed;\n      color: $dark-disabled-label-color;\n    }\n\n    label {\n      cursor: not-allowed;\n      background: $dark-disabled-background;\n    }\n\n    label:after {\n      cursor: not-allowed;\n      background: $dark-disabled-slider-background;\n    }\n\n    input:checked + label {\n      cursor: not-allowed;\n      background: $dark-disabled-background-active;\n    }\n  }\n}\n}\n</style>\n\n',L={components:{ShowcaseComponent:p.Z,SelectComponent:f.Z,InputComponent:v.Z,ToggleComponent:w.Z,PrismComponent:T.Z,TableComponent:D.Z,VueUIToggleComponent:N},data(){return{active:!0,variant:"",label:"Your Toggle",labelBehind:!1,size:"",disabled:!1,name:"toggle_name",variantOptions:["info","success","warning","danger"],sizeOptions:["small","medium","large"],code:W,propHeadings:["Prop","Type","Example","Required","Description"],propDetails:[["variant","String","'' / 'info' / 'success' / 'warning' / 'danger'","No","This defines what color your toggle will be."],["state","Boolean","true","Yes","This caters for programmatic changing of a toggle"],["labelBehind","Boolean","true","No","This positions your label infront or behind the toggle"],["size","String","'small' / 'medium' / 'large'","No","This will set the size of your toggle and the font size of the label"],["disabled","Boolean","true","No","This will disabled the toggle but if you programmatically update the toggle it will still change"],["name","String","some_name","No","Sets the id of the input field behind the scenes"]]}},methods:{variantChanged(e){this.variant=e},activeChanged(){this.active=!this.active},labelBehindChanged(){this.labelBehind=!this.labelBehind},labelChanged(e){(e.target.value||""===e.target.value)&&(this.label=e.target.value)},sizeChanged(e){this.size=e},disabledChanged(){this.disabled=!this.disabled},nameChanged(e){(e.target.value||""===e.target.value)&&(this.toggleName=e.target.value,alert(`This sets the toggle id behind the scenes to "${e.target.value}""`))}},computed:{computedVariant(){return this.variant},computedActive(){return this.active},computedLabel(){return this.label},computedLabelBehind(){return this.labelBehind},computedSize(){return this.size},computedDisabled(){return this.disabled},computedName(){return this.name}}};const Z=(0,B.Z)(L,[["render",k],["__scopeId","data-v-430920ea"]]);var I=Z}}]);
//# sourceMappingURL=toggle-page.fba93845.js.map