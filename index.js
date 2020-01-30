!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).VuetifyImageInput=e()}(this,(function(){"use strict";function t(){return(this.overriddenMaxZoom-this.overriddenMinZoom)/1e3}var e={dark:function(){return this.theme.isDark},originalImageDataURL:function(){var t=this.originalImage;return t?t.src:null},originalImageHeight:function(){var t=this.originalImage;return t?t.naturalHeight:0},originalImageWidth:function(){var t=this.originalImage;return t?t.naturalWidth:0},overriddenMaxZoom:function(){return 2},overriddenMinZoom:function(){return 1},rtl:t,zoomDelta:function(){return(this.overriddenMaxZoom-this.overriddenMinZoom)/10},zoomSnap:t};function o(){}var n={theme:{default:{isDark:!1}}};var i={clear:function(){this.originalImage=null},flipHorizontally:function(){},flipVertically:function(){},load:function(){},rotateClockwise:function(){},rotateCounterClockwise:function(){},setZoom:function(t){this.zoom=t},zoomIn:function(){var t=this.zoomDelta;this.zoom+=t},zoomOut:function(){var t=this.zoomDelta;this.zoom-=t}},r={cancelIcon:{type:String,default:"$cancel"},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:"$clear"},disabled:{type:Boolean,default:!1},errorIcon:{type:String,default:"$error"},flipHorizontallyIcon:{type:String,default:"mdi-flip-horizontal"},flipVerticallyIcon:{type:String,default:"mdi-flip-vertical"},fullHeight:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},imageBackgroundColor:String,imageHeight:{type:Number,default:256},imageWidth:{type:Number,default:256},rotateClockwiseIcon:{type:String,default:"mdi-rotate-right"},rotateCounterClockwiseIcon:{type:String,default:"mdi-rotate-left"},successIcon:{type:String,default:"$success"},uploadIcon:{type:String,default:"mdi-upload"},value:String,zoomInIcon:{type:String,default:"mdi-magnify-plus-outline"},zoomOutIcon:{type:String,default:"mdi-magnify-minus-outline"}};var a={functional:!0,render:function(t,e){var o=e.listeners,n=e.parent,i=e.props;return t("VBtn",{class:"ma-1",props:{dark:!0,disabled:n.disabled,flat:!0,icon:!0},on:o},[t("VIcon",i.icon)])}};var l={functional:!0,render:function(t,e){var o=e.parent,n=o.clear,i=o.clearIcon;return t(a,{props:{icon:i},on:{click:n}})}};var u={functional:!0,render:function(t,e){var o=e.parent,n=o.flipHorizontally,i=o.flipHorizontallyIcon;return t(a,{props:{icon:i},on:{click:n}})}};var c={functional:!0,render:function(t,e){var o=e.parent,n=o.flipVertically,i=o.flipVerticallyIcon;return t(a,{props:{icon:i},on:{click:n}})}};var d={functional:!0,render:function(t,e){var o=e.parent,n=o.rotateClockwise,i=o.rotateClockwiseIcon;return t(a,{props:{icon:i},on:{click:n}})}};var s={functional:!0,render:function(t,e){var o=e.parent,n=o.rotateCounterClockwise,i=o.rotateCounterClockwiseIcon;return t(a,{props:{icon:i},on:{click:n}})}};var f={functional:!0,render:function(t,e){var o=e.parent,n=o.disabled,i=o.overriddenMaxZoom,r=o.overriddenMinZoom,a=o.setZoom,l=o.zoom,u=o.zoomIn,c=o.zoomOut,d=o.zoomSnap;return t("VSlider",{class:"ma-1",props:{appendIcon:o.zoomInIcon,dark:!0,disabled:n,hideDetails:!0,max:i,min:r,prependIcon:o.zoomOutIcon,step:d,value:l},on:{input:a,"click:append":u,"click:prepend":c}})}};var p={functional:!0,render:function(t,e){var o=e.parent,n=o.clearable;return t("div",{style:{bottom:0,display:["-ms-grid","grid"],gridColumns:"auto 1fr auto",gridRows:"1fr auto",gridTemplateColumns:"auto 1fr auto",gridTemplateRows:"1fr auto",left:0,position:"absolute",right:0,top:0}},(o.hideActions?[]:[t("div",{style:{display:"flex",flexDirection:"column",gridColumn:1,gridRow:1,justifyContent:"center"}},[t(d),t(s),t(u),t(c)]),t("div",{style:{gridColumn:2,gridRow:2}},[t(f)])]).concat(n?[t("div",{style:{gridColumn:3,gridRow:1}},[t(l)])]:[]))}};var m={functional:!0,render:function(t){return t("div",{style:{border:"4px solid #fff",bottom:"50%",boxShadow:"0 0 4000px 4000px rgba(0,0,0,0.6)",height:"100px",maxHeight:"100%",maxWidth:"100%",pointerEvents:"none",position:"absolute",right:"50%",transform:"translate(50%,50%)",width:"100px"}})}},g="#fff url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"') repeat center center / 16px 16px";var h={functional:!0,render:function(t){return t("div",{style:{background:g,border:"1px solid #ccc",borderRadius:"4px",bottom:0,left:0,overflow:"hidden",position:"absolute",right:0,top:0}},[t(m),t(p)])}};var v={functional:!0,render:function(t){return t("div",{style:{backgroundColor:"green",height:"100%",width:"100%"}})}};var y={render:function(t){return t("div",{style:{display:"flex",minHeight:"100px",minWidth:"100px",position:"relative"}},this.$scopedSlots.default())}};var I={beforeCreate:function(){var t={originalImage:null},e=this.$options.computed;Object.keys(t).forEach((function(o){e[o]={get:function(){return t[o]},set:function(e){t[o]=e}}}))},computed:e,data:function(){return{cancelLoad:o,loadError:!1,loading:!1,loadProgress:0,loadSuccess:!1,image:!0,zoom:1}},inject:n,methods:i,name:"VImageInput",props:r,render:function(t){var e=this.fullHeight,o=this.fullWidth,n=this.image;return t(y,{style:Object.assign({},e?{height:"100%"}:{},o?{width:"100%"}:{})},[t("VFadeTransition",{props:{leaveAbsolute:!0}},[t(n?h:v)])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(I.name,I),I}));
