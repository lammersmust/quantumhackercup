import{o as l,n as f,x as A,b as d,z as u,A as O,B as _,F as L,s as C,t as m,C as v,y as T,T as Y,w as D,d as w,q as x,D as oe,E as le,u as y,c as k,G as U,_ as Z,r as G,H,R as M,P,g as de,a as h,I as Q,J as pe,K as ue,e as he}from"./BllL7jBv.js";function N(t){return t===0?!1:Array.isArray(t)&&t.length===0?!0:!t}function me(t){return(...a)=>!t(...a)}function Ae(t,a){return t===void 0&&(t="undefined"),t===null&&(t="null"),t===!1&&(t="false"),t.toString().toLowerCase().indexOf(a.trim())!==-1}function ee(t,a,s,i){return a?t.filter(p=>Ae(i(p,s),a)).sort((p,r)=>i(p,s).length-i(r,s).length):t}function be(t){return t.filter(a=>!a.$isLabel)}function F(t,a){return s=>s.reduce((i,p)=>p[t]&&p[t].length?(i.push({$groupLabel:p[a],$isLabel:!0}),i.concat(p[t])):i,[])}function fe(t,a,s,i,p){return r=>r.map(c=>{if(!c[s])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const b=ee(c[s],t,a,p);return b.length?{[i]:c[i],[s]:b}:[]})}const X=(...t)=>a=>t.reduce((s,i)=>i(s),a);var ge={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(t,a){return N(t)?"":a?t[a]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const t=this.search||"",a=t.toLowerCase().trim();let s=this.options.concat();return this.internalSearch?s=this.groupValues?this.filterAndFlat(s,a,this.label):ee(s,a,this.label,this.customLabel):s=this.groupValues?F(this.groupValues,this.groupLabel)(s):s,s=this.hideSelected?s.filter(me(this.isSelected)):s,this.taggable&&a.length&&!this.isExistingOption(a)&&(this.tagPosition==="bottom"?s.push({isTag:!0,label:t}):s.unshift({isTag:!0,label:t})),s.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(t=>t[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(a=>this.customLabel(a,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(t,a,s){return X(fe(a,s,this.groupValues,this.groupLabel,this.customLabel),F(this.groupValues,this.groupLabel))(t)},flatAndStrip(t){return X(F(this.groupValues,this.groupLabel),be)(t)},updateSearch(t){this.search=t},isExistingOption(t){return this.options?this.optionKeys.indexOf(t)>-1:!1},isSelected(t){const a=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(a)>-1},isOptionDisabled(t){return!!t.$isDisabled},getOptionLabel(t){if(N(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;const a=this.customLabel(t,this.label);return N(a)?"":a},select(t,a){if(t.$isLabel&&this.groupSelect){this.selectGroup(t);return}if(!(this.blockKeys.indexOf(a)!==-1||this.disabled||t.$isDisabled||t.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(a==="Tab"&&!this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t)){a!=="Tab"&&this.removeElement(t);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([t])):this.$emit("update:modelValue",t),this.$emit("select",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(t){const a=this.options.find(s=>s[this.groupLabel]===t.$groupLabel);if(a){if(this.wholeGroupSelected(a)){this.$emit("remove",a[this.groupValues],this.id);const s=this.trackBy?a[this.groupValues].map(p=>p[this.trackBy]):a[this.groupValues],i=this.internalValue.filter(p=>s.indexOf(this.trackBy?p[this.trackBy]:p)===-1);this.$emit("update:modelValue",i)}else{let s=a[this.groupValues].filter(i=>!(this.isOptionDisabled(i)||this.isSelected(i)));this.max&&s.splice(this.max-this.internalValue.length),this.$emit("select",s,this.id),this.$emit("update:modelValue",this.internalValue.concat(s))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(t){return t[this.groupValues].every(a=>this.isSelected(a)||this.isOptionDisabled(a))},wholeGroupDisabled(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement(t,a=!0){if(this.disabled||t.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const s=typeof t=="object"?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.multiple){const i=this.internalValue.slice(0,s).concat(this.internalValue.slice(s+1));this.$emit("update:modelValue",i)}else this.$emit("update:modelValue",null);this.$emit("remove",t,this.id),this.closeOnSelect&&a&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const t=this.$el.getBoundingClientRect().top,a=window.innerHeight-this.$el.getBoundingClientRect().bottom;a>this.maxHeight||a>t||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(a-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}},ye={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(t,a){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(a)}},groupHighlight(t,a){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":a.$isLabel}];const s=this.options.find(i=>i[this.groupLabel]===a.$groupLabel);return s&&!this.wholeGroupDisabled(s)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(s)}]:"multiselect__option--disabled"},addPointerElement({key:t}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(t){this.pointer=t,this.pointerDirty=!0}}},te={name:"vue-multiselect",mixins:[ge,ye],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:t=>`and ${t} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0},required:{type:Boolean,default:!1}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const ke={ref:"tags",class:"multiselect__tags"},ve={class:"multiselect__tags-wrap"},Te={class:"multiselect__spinner"},Se={key:0},we={class:"multiselect__option"},Ve={class:"multiselect__option"},Le=w("No elements found. Consider changing the search query."),Ee={class:"multiselect__option"},Oe=w("List is empty.");function $e(t,a,s,i,p,r){return l(),f("div",{tabindex:t.searchable?-1:s.tabindex,class:[{"multiselect--active":t.isOpen,"multiselect--disabled":s.disabled,"multiselect--above":r.isAbove,"multiselect--has-options-group":r.hasOptionGroup},"multiselect"],onFocus:a[14]||(a[14]=c=>t.activate()),onBlur:a[15]||(a[15]=c=>t.searchable?!1:t.deactivate()),onKeydown:[a[16]||(a[16]=v(u(c=>t.pointerForward(),["self","prevent"]),["down"])),a[17]||(a[17]=v(u(c=>t.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:a[18]||(a[18]=v(u(c=>t.addPointerElement(c),["stop","self"]),["enter","tab"])),onKeyup:a[19]||(a[19]=v(c=>t.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+t.id},[A(t.$slots,"caret",{toggle:t.toggle},()=>[d("div",{onMousedown:a[1]||(a[1]=u(c=>t.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),A(t.$slots,"clear",{search:t.search}),d("div",ke,[A(t.$slots,"selection",{search:t.search,remove:t.removeElement,values:r.visibleValues,isOpen:t.isOpen},()=>[O(d("div",ve,[(l(!0),f(L,null,C(r.visibleValues,(c,b)=>A(t.$slots,"tag",{option:c,search:t.search,remove:t.removeElement},()=>[(l(),f("span",{class:"multiselect__tag",key:b},[d("span",{textContent:m(t.getOptionLabel(c))},null,8,["textContent"]),d("i",{tabindex:"1",onKeypress:v(u(V=>t.removeElement(c),["prevent"]),["enter"]),onMousedown:u(V=>t.removeElement(c),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[_,r.visibleValues.length>0]]),t.internalValue&&t.internalValue.length>s.limit?A(t.$slots,"limit",{key:0},()=>[d("strong",{class:"multiselect__strong",textContent:m(s.limitText(t.internalValue.length-s.limit))},null,8,["textContent"])]):T("v-if",!0)]),d(Y,{name:"multiselect__loading"},{default:D(()=>[A(t.$slots,"loading",{},()=>[O(d("div",Te,null,512),[[_,s.loading]])])]),_:3}),t.searchable?(l(),f("input",{key:0,ref:"search",name:s.name,id:t.id,type:"text",autocomplete:"off",spellcheck:s.spellcheck,placeholder:t.placeholder,required:s.required,style:r.inputStyle,value:t.search,disabled:s.disabled,tabindex:s.tabindex,onInput:a[2]||(a[2]=c=>t.updateSearch(c.target.value)),onFocus:a[3]||(a[3]=u(c=>t.activate(),["prevent"])),onBlur:a[4]||(a[4]=u(c=>t.deactivate(),["prevent"])),onKeyup:a[5]||(a[5]=v(c=>t.deactivate(),["esc"])),onKeydown:[a[6]||(a[6]=v(u(c=>t.pointerForward(),["prevent"]),["down"])),a[7]||(a[7]=v(u(c=>t.pointerBackward(),["prevent"]),["up"])),a[9]||(a[9]=v(u(c=>t.removeLastElement(),["stop"]),["delete"]))],onKeypress:a[8]||(a[8]=v(u(c=>t.addPointerElement(c),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+t.id},null,44,["name","id","spellcheck","placeholder","required","value","disabled","tabindex","aria-controls"])):T("v-if",!0),r.isSingleLabelVisible?(l(),f("span",{key:1,class:"multiselect__single",onMousedown:a[10]||(a[10]=u((...c)=>t.toggle&&t.toggle(...c),["prevent"]))},[A(t.$slots,"singleLabel",{option:r.singleValue},()=>[w(m(t.currentOptionLabel),1)])],32)):T("v-if",!0),r.isPlaceholderVisible?(l(),f("span",{key:2,class:"multiselect__placeholder",onMousedown:a[11]||(a[11]=u((...c)=>t.toggle&&t.toggle(...c),["prevent"]))},[A(t.$slots,"placeholder",{},()=>[w(m(t.placeholder),1)])],32)):T("v-if",!0)],512),d(Y,{name:"multiselect"},{default:D(()=>[O(d("div",{class:"multiselect__content-wrapper",onFocus:a[12]||(a[12]=(...c)=>t.activate&&t.activate(...c)),tabindex:"-1",onMousedown:a[13]||(a[13]=u(()=>{},["prevent"])),style:{maxHeight:t.optimizedHeight+"px"},ref:"list"},[d("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+t.id,"aria-multiselectable":t.multiple},[A(t.$slots,"beforeList"),t.multiple&&t.max===t.internalValue.length?(l(),f("li",Se,[d("span",we,[A(t.$slots,"maxElements",{},()=>[w("Maximum of "+m(t.max)+" options selected. First remove a selected option to select another.",1)])])])):T("v-if",!0),!t.max||t.internalValue.length<t.max?(l(!0),f(L,{key:1},C(t.filteredOptions,(c,b)=>(l(),f("li",{class:"multiselect__element",key:b,"aria-selected":t.isSelected(c),id:t.id+"-"+b,role:c&&(c.$isLabel||c.$isDisabled)?null:"option"},[c&&(c.$isLabel||c.$isDisabled)?T("v-if",!0):(l(),f("span",{key:0,class:[t.optionHighlight(b,c),"multiselect__option"],onClick:u(V=>t.select(c),["stop"]),onMouseenter:u(V=>t.pointerSet(b),["self"]),"data-select":c&&c.isTag?t.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[A(t.$slots,"option",{option:c,search:t.search,index:b},()=>[d("span",null,m(t.getOptionLabel(c)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),c&&(c.$isLabel||c.$isDisabled)?(l(),f("span",{key:1,"data-select":t.groupSelect&&r.selectGroupLabelText,"data-deselect":t.groupSelect&&r.deselectGroupLabelText,class:[t.groupHighlight(b,c),"multiselect__option"],onMouseenter:u(V=>t.groupSelect&&t.pointerSet(b),["self"]),onMousedown:u(V=>t.selectGroup(c),["prevent"])},[A(t.$slots,"option",{option:c,search:t.search,index:b},()=>[d("span",null,m(t.getOptionLabel(c)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):T("v-if",!0)],8,["aria-selected","id","role"]))),128)):T("v-if",!0),O(d("li",null,[d("span",Ve,[A(t.$slots,"noResult",{search:t.search},()=>[Le])])],512),[[_,s.showNoResults&&t.filteredOptions.length===0&&t.search&&!s.loading]]),O(d("li",null,[d("span",Ee,[A(t.$slots,"noOptions",{},()=>[Oe])])],512),[[_,s.showNoOptions&&(t.options.length===0||r.hasOptionGroup===!0&&t.filteredOptions.length===0)&&!t.search&&!s.loading]]),A(t.$slots,"afterList")],12,["id","aria-multiselectable"])],36),[[_,t.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}te.render=$e;const Be=x({__name:"Select",props:oe({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=le(t,"modelValue");return(s,i)=>(l(),f(y(te),{class:"select",modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p),options:s.options},null,8,["modelValue","options"]))}}),_e={key:0,class:"tooltip__text"},Me=x({__name:"Tooltip",props:{text:{},position:{default:"top"}},setup(t){return(a,s)=>(l(),k("div",{class:U(["tooltip",`tooltip--${a.position}`])},[A(a.$slots,"default",{},void 0,!0),a.text?(l(),k("p",_e,m(a.text),1)):T("",!0)],2))}}),Pe=Z(Me,[["__scopeId","data-v-f4d88e14"]]);var e=(t=>(t.Accepted="accepted",t.Error="error",t.Expired="expired",t))(e||{});const z=[{rank:1,name:"Gennady Korotkevich (tourist)",score:100,totalTime:"2:04:50",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:2,name:"Yui Hosaka (hos.lyric)",country:"Japan",score:100,totalTime:"2:55:16",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:3,name:"Фёдор Ромашов (Ormlis)",country:"Russia",score:100,totalTime:"3:08:52",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:4,name:"Andrew Gu",score:100,totalTime:"3:35:30",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:5,name:"Fernando Fonseca",country:"Brazil",score:100,totalTime:"3:35:35",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:6,name:"Mateusz Radecki (Radewoosh)",country:"Poland",score:100,totalTime:"3:40:58",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:7,name:"Mikhail Tikhomirov (Endagorion)",score:100,totalTime:"3:49:08",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:8,name:"Rain Jiang (rainboy)",country:"United States",score:100,totalTime:"3:55:13",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:9,name:"Максим Гороховский (maksim1744)",country:"Russia",score:100,totalTime:"4:11:21",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:10,name:"Александр Голованов (Golovanov399)",country:"Russia",score:100,totalTime:"4:21:29",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:11,name:"Bùi Hồng Đức",score:100,totalTime:"4:29:21",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:12,name:"Kevin Sun (ksun48)",country:"Canada",score:100,totalTime:"4:29:41",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:13,name:"邓明扬 (Slime)",score:100,totalTime:"4:48:21",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:14,name:"Ryo Takahashi (kotatsugame)",country:"Japan",score:100,totalTime:"4:55:58",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:15,name:"Alex Ostanin",score:100,totalTime:"5:14:59",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:16,name:"Adrian Budau (adrian.budau)",country:"Romania",score:100,totalTime:"5:21:50",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:17,name:"Marcin Smulewicz",country:"Poland",score:100,totalTime:"5:29:10",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:18,name:"Tiancheng Lou (ACRush)",score:100,totalTime:"5:37:40",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:19,name:"Dragos Florian Ristache",score:100,totalTime:"5:39:30",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:20,name:"Semyon Savkin (cookiedoth)",score:100,totalTime:"9:04:18",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:21,name:"Maksim Turevskii",score:87,totalTime:"3:35:12",status:{a:e.Error,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:22,name:"Yoshiaki Matsuoka",score:87,totalTime:"3:36:19",status:{a:e.Error,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:23,name:"Rohin Garg (PurpleCrayon)",score:82,totalTime:"4:47:47",status:{a:e.Accepted,b:e.Error,c:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:24,name:"Yury Pisarchyk (Ra16bit)",score:80,totalTime:"4:21:11",status:{a:e.Accepted,b:e.Accepted,d:e.Accepted,e:e.Accepted}},{rank:25,name:"Neal Wu",country:"United States",score:76,totalTime:"1:20:19",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Expired,e:e.Accepted}},{rank:26,name:"Kamil Dębowski (Errichto)",country:"Poland",score:76,totalTime:"1:50:13",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:27,name:"Ziqian Zhong",score:76,totalTime:"2:07:36",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:28,name:"Roman Bilyi (RomaWhite)",country:"Ukraine",score:76,totalTime:"2:13:39",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:29,name:"Timon Knigge",country:"Netherlands",score:76,totalTime:"2:21:20",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:30,name:"Arvin Leung (arvindf232)",country:"Hong Kong",score:76,totalTime:"2:25:17",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:31,name:"Jay Leeds (Geothermal)",country:"United States",score:76,totalTime:"2:25:54",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:32,name:"Ashley Khoo (bala cookhouse)",country:"Singapore",score:76,totalTime:"2:36:03",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:33,name:"Iaroslav Tverdokhlib (KADR)",country:"Ukraine",score:76,totalTime:"2:38:46",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:34,name:"Kentaro Matsushita (noimi)",country:"Japan",score:76,totalTime:"2:39:37",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:35,name:"Shunya Satake (satashun)",country:"Japan",score:76,totalTime:"2:45:38",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:36,name:"Lucian Bicsi (retrograd)",country:"Romania",score:76,totalTime:"2:46:03",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:37,name:"Jingzhe Tang (skywalkert)",country:"China",score:76,totalTime:"2:52:10",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Expired,e:e.Accepted}},{rank:38,name:"Shiven Sinha (shiven)",country:"India",score:76,totalTime:"2:54:39",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:39,name:"Ryotaro Sato (hitonanode)",country:"Japan",score:76,totalTime:"2:54:42",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:40,name:"Lewin Gan (Lewin Gan (Lewin Gan))",country:"United States",score:76,totalTime:"2:59:36",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:41,name:"兼下航輔",country:"Japan",score:76,totalTime:"3:00:36",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:42,name:"Shu Nagashima (shobonvip)",country:"Japan",score:76,totalTime:"3:22:47",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:43,name:"Liwei Cai (cai_lw)",score:76,totalTime:"3:30:06",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:44,name:"Andrew Makar",country:"Ukraine",score:76,totalTime:"3:32:23",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:45,name:"Geoffry Song (goffrie)",country:"Canada",score:76,totalTime:"3:40:50",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:46,name:"Danny Mittal",score:76,totalTime:"3:42:10",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Expired,e:e.Accepted}},{rank:47,name:"Lyu Yaowei (Heltion)",country:"China",score:76,totalTime:"3:44:21",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:48,name:"Tia Shi Wei (maomao90)",country:"Singapore",score:76,totalTime:"3:46:00",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Expired,e:e.Accepted}},{rank:49,name:"Trần Quang Lộc (darkkcyan)",country:"Vietnam",score:76,totalTime:"3:47:44",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Expired,e:e.Accepted}},{rank:50,name:"Tautvydas Jasiūnas (tutis)",country:"Lithuania",score:76,totalTime:"3:54:42",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:51,name:"Koshelev Mikhail (SendThemToHell)",country:"Russia",score:76,totalTime:"3:59:58",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:52,name:"Agustín Santiago Gutiérrez (elsantodel90)",country:"Argentina",score:76,totalTime:"4:04:31",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:53,name:"Minoru Fujita",country:"Japan",score:76,totalTime:"4:06:06",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:54,name:"David Stangl (Felerius)",country:"Germany",score:76,totalTime:"4:07:48",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:55,name:"Wang Matt (LittleCube)",country:"Taiwan",score:76,totalTime:"4:16:30",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:56,name:"Jerry (jerryma)",country:"United States",score:76,totalTime:"4:17:36",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:57,name:"Kacper Paciorek",country:"Poland",score:76,totalTime:"4:18:44",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:58,name:"Dominik Wawszczak (VaVshchuck)",country:"Poland",score:76,totalTime:"4:24:57",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:59,name:"Anay Karnik (AwakeAnay)",country:"India",score:76,totalTime:"4:30:03",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:60,name:"Tatsuhito Yamagata (tatyam)",country:"Japan",score:76,totalTime:"4:31:00",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:61,name:"Jan Tułowiecki (Wielomian)",country:"Poland",score:76,totalTime:"4:35:36",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:62,name:"Alexander Georgiev (espr1t)",country:"Bulgaria",score:76,totalTime:"4:40:40",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:63,name:"Rares-Felix Tudose",country:"Romania",score:76,totalTime:"4:49:45",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:64,name:"Jeroen Op de Beek (Jeroenodb)",country:"Netherlands",score:76,totalTime:"4:50:06",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Error,e:e.Accepted}},{rank:65,name:"Igor Spiridonov (abstract_nonsense)",score:76,totalTime:"4:53:53",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:66,name:"Carlos Miguel Soto (reedef)",country:"Argentina",score:76,totalTime:"7:35:55",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,e:e.Accepted}},{rank:67,name:"Andrew He (ecnerwala)",country:"United States",score:75,totalTime:"1:36:50",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:68,name:"Ditbul Ban (79brue)",country:"South Korea",score:75,totalTime:"1:52:15",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:69,name:"Benjamin Qi (Benq)",country:"United States",score:75,totalTime:"1:54:10",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Error}},{rank:70,name:"Егор Дубовик",country:"Russia",score:75,totalTime:"1:55:45",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:71,name:"Pavel Kunyavskiy",country:"Netherlands",score:75,totalTime:"2:08:33",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:72,name:"Antonio Molina (y0105w49)",country:"Canada",score:75,totalTime:"2:16:18",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Error}},{rank:73,name:"Brian Xiao (bribritt)",country:"Singapore",score:75,totalTime:"2:23:04",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:74,name:"Teimurazi Toloraia (temotoloraia)",country:"Georgia",score:75,totalTime:"2:26:20",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:75,name:"Petr Mitrichev (Petr)",country:"Switzerland",score:75,totalTime:"2:39:54",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:76,name:"Thomas Neill (t0mmyn)",country:"United States",score:75,totalTime:"2:47:14",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:77,name:"Tähvend Uustalu (-is-this-fft-)",country:"Estonia",score:75,totalTime:"2:56:31",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:78,name:"Man Tsung Yeung (benson1029)",country:"Hong Kong",score:75,totalTime:"2:58:18",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:79,name:"Takuto Koriyama (risujiroh)",country:"Japan",score:75,totalTime:"3:05:48",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:80,name:"KR Lee (lky7674)",country:"South Korea",score:75,totalTime:"3:08:35",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:81,name:"Nguyen Nguyen (flashmt)",country:"Vietnam",score:75,totalTime:"3:08:52",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:82,name:"Yang Xiao (sheepforever)",score:75,totalTime:"3:14:00",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Error}},{rank:83,name:"黃仲群 (i_am_noob)",score:75,totalTime:"3:14:05",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:84,name:"Kosuke Fukuda",score:75,totalTime:"3:15:37",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:85,name:"Kyle Dulay (TheLostCookie)",score:75,totalTime:"3:17:08",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:86,name:"Ato Pot (kotlinlover)",score:75,totalTime:"3:20:18",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:87,name:"Yuping Luo (roosephu)",country:"China",score:75,totalTime:"3:27:18",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:88,name:"Jeff Wu",score:75,totalTime:"3:30:56",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:89,name:"Ilya Kornakov (ilyakor)",country:"Switzerland",score:75,totalTime:"3:34:12",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:90,name:"Isaac Wong (WongChun1234)",country:"Hong Kong",score:75,totalTime:"3:37:01",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:91,name:"Maksym Shcherba (mshcherba)",country:"Ukraine",score:75,totalTime:"3:41:39",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:92,name:"Daniel Wu (DanTheMan)",country:"United States",score:75,totalTime:"3:42:47",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:93,name:"Mahmoud Badawy (mahmoudbadawy)",country:"Egypt",score:75,totalTime:"3:43:57",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:94,name:"이성서 (edenooo)",country:"South Korea",score:75,totalTime:"3:51:30",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:95,name:"Mahdi Cheikhrouhou (Mtaylor)",country:"Tunisia",score:75,totalTime:"3:52:20",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:96,name:"Mikhail Ipatov",country:"Russia",score:75,totalTime:"3:52:30",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:97,name:"Steve Tell",score:75,totalTime:"3:56:29",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:98,name:"Hei Chit Cheng (chengheichit)",country:"Hong Kong",score:75,totalTime:"3:57:46",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}},{rank:99,name:"Vasyl Biletskyy",score:75,totalTime:"4:01:15",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted,e:e.Expired}},{rank:100,name:"Wai Ka Hei (wjx)",country:"Hong Kong",score:75,totalTime:"4:01:36",status:{a:e.Accepted,b:e.Accepted,c:e.Accepted,d:e.Accepted}}],Ce={class:"scoreboard"},De={class:"scoreboard__filters"},Ke={class:"scoreboard__table-wrapper"},Re={class:"scoreboard__table"},Ge={class:"scoreboard__th-letter"},He={class:"scoreboard__th-title"},Ne={key:1},Fe={class:"scoreboard__td-name"},ze={class:"scoreboard__name"},Ie={class:"scoreboard__pagination"},Je={class:"scoreboard__arrows"},Ue=["disabled"],xe=["disabled"],I=50,J="All Countries",We=x({__name:"scoreboard",setup(t){const a=G(1),s=G(z.length),i=H(()=>(a.value-1)*Math.min(I,s.value)),p=H(()=>Math.min(i.value+I,s.value)),r=G(J),c=G(""),b=[J,...Array.from(new Set(z.map(n=>n.country).filter(Boolean).sort()))],V=[{title:"Rank"},{title:"Contestant"},{title:"Score"},{title:"Total Time"},{title:"Subsonic Subway",letter:"A",path:M.PROBLEM("A"),points:P.A},{title:"Prime Subtractorization",letter:"B",path:M.PROBLEM("B"),points:P.B},{title:"Substantial Losses",letter:"C",path:M.PROBLEM("C"),points:P.C},{title:"Substitution Cipher",letter:"D",path:M.PROBLEM("D"),points:P.D},{title:"Wildcard Submissions",letter:"E",path:M.PROBLEM("E"),points:P.E}],ae=n=>(r.value!==J&&(n=n.filter(g=>g.country===r.value)),c.value&&(n=n.filter(g=>g.name.toLowerCase().includes(c.value.toLowerCase()))),n),se=H(()=>{const n=ae(z);return s.value=n.length,n.slice(i.value,p.value)}),$=n=>{switch(n){case e.Accepted:return"check";case e.Error:return"close";case e.Expired:return"arrow-circle-down";default:return""}},ce=n=>{var g,K,R,B,S,o,E,W,j,q;return{a:{name:(g=n.status)==null?void 0:g.a,icon:$((K=n.status)==null?void 0:K.a)},b:{name:(R=n.status)==null?void 0:R.b,icon:$((B=n.status)==null?void 0:B.b)},c:{name:(S=n.status)==null?void 0:S.c,icon:$((o=n.status)==null?void 0:o.c)},d:{name:(E=n.status)==null?void 0:E.d,icon:$((W=n.status)==null?void 0:W.d)},e:{name:(j=n.status)==null?void 0:j.e,icon:$((q=n.status)==null?void 0:q.e)}}},ie=n=>`flag-${n.replace(/ /g,"-").toLowerCase()}`,re=()=>{a.value>1&&a.value--},ne=()=>{a.value<Math.ceil(s.value/I)&&a.value++};return de([c,r],()=>{a.value=1}),(n,g)=>{const K=Be,R=he,B=Pe,S=ue;return l(),k("div",Ce,[g[2]||(g[2]=h("h1",{class:"scoreboard__title"},"Scoreboard",-1)),h("div",De,[d(K,{class:"scoreboard__country",options:b,modelValue:y(r),"onUpdate:modelValue":g[0]||(g[0]=o=>Q(r)?r.value=o:null),placeholder:"Select a country",allowEmpty:!1},null,8,["modelValue"]),O(h("input",{"onUpdate:modelValue":g[1]||(g[1]=o=>Q(c)?c.value=o:null),class:"scoreboard__input",type:"text",placeholder:"Search by name..."},null,512),[[pe,y(c)]])]),h("div",Ke,[h("table",Re,[h("tbody",null,[h("tr",null,[(l(),k(L,null,C(V,o=>h("th",{class:U(["scoreboard__th",{"scoreboard__th--link":o.path}]),key:o.title},[o.path?(l(),f(B,{key:0,text:`${o.title} (${o.points} points)`,position:"bottom"},{default:D(()=>[d(R,{class:"scoreboard__th-link",to:o.path},{default:D(()=>[h("span",Ge,m(o.letter),1),h("span",He,m(o.title),1)]),_:2},1032,["to"])]),_:2},1032,["text"])):(l(),k("span",Ne,m(o.title),1))],2)),64))]),(l(!0),k(L,null,C(y(se),o=>(l(),k("tr",{key:o.rank},[h("td",null,m(o.rank),1),h("td",Fe,[h("div",ze,[o.country?(l(),f(B,{key:0,text:o.country},{default:D(()=>[d(S,{name:ie(o.country),size:"20"},null,8,["name"])]),_:2},1032,["text"])):(l(),f(S,{key:1,name:"globe",size:"20"})),w(" "+m(o.name),1)])]),h("td",null,m(o.score),1),h("td",null,m(o.totalTime),1),(l(!0),k(L,null,C(ce(o),E=>(l(),k("td",{key:E.icon},[d(S,{class:U(["scoreboard__icon",[`scoreboard__icon--${E.name}`]]),name:E.icon,size:"18"},null,8,["class","name"])]))),128))]))),128))])])]),h("div",Ie,[y(s)>0?(l(),k(L,{key:0},[w(m(y(i)+1)+" - "+m(y(p))+" of "+m(y(s)),1)],64)):(l(),k(L,{key:1},[w("No entrants")],64)),h("div",Je,[h("button",{class:"scoreboard__arrow scoreboard__arrow--prev",type:"button",disabled:y(a)===1,onClick:re},[d(S,{name:"arrow-left",size:"14"})],8,Ue),h("button",{class:"scoreboard__arrow scoreboard__arrow--next",type:"button",disabled:y(p)===y(s),onClick:ne},[d(S,{name:"arrow-right",size:"14"})],8,xe)])])])}}}),qe=Z(We,[["__scopeId","data-v-76c6d80c"]]);export{qe as default};
