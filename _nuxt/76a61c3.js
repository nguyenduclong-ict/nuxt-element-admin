(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{635:function(e,t,l){"use strict";l.r(t);l(23),l(12),l(7),l(6),l(15);var r=l(2),n=(l(226),l(38));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Dropzone",props:{value:{type:Array,default:function(){return[]}},type:{type:String,default:"object"},width:{type:String,default:"146px"},maxSize:{type:Number,default:1/0},limit:{type:Number,default:1/0},data:Object},data:function(){return{isShowPreview:!1,previewItem:null,uids:{},queue:[]}},computed:{multiple:function(){return this.limit>1},action:function(){return"/upload"},headers:function(){return{authorization:this.$auth.getToken("local")}},fileList:function(){var e=this;return this.value.map((function(t,l){return"string"===e.type&&(t={url:t}),t.uid=t.uid||e.uids[t.url]||Object(n.b)(),e.uids[t.url]=t.uid,{url:t.url,response:t,uid:t.uid,percentage:100,status:"success",name:t.url}}))}},methods:{handleOnBeforeUpload:function(e){if(e.size>this.maxSize)return this.$message.error({message:"Dung lượng file quá lớn"}),!1},handleOnRemove:function(e){"string"===this.type?Object(n.g)(this.value,null,(function(t){return t===e.url})):Object(n.g)(this.value,null,(function(t){return t.uid===e.uid})),this.$emit("remove",e)},handleOnPreview:function(e){this.previewItem=e,this.isShowPreview=!0},handleOnSuccess:function(e,t,l){var r=this;this.queue.push(t),l.some((function(e){return"uploading"===e.status}))||(this.queue.forEach((function(e){if("object"===r.type){var t=e.response;e.url=r.value.push(c(c({},t),{},{url:t.url,alt:t.alt,title:t.title,uid:e.uid}))}else{var l=e.response;e.url=l.url,r.uids[e.url]=e.uid,r.value.push(l.url)}r.$emit("add",e)})),this.queue=[])},handleOnError:function(e,t,l){console.log("uploadError",{error:e,file:t,fileList:l})}}},f=l(3),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"dropzone-container"},[l("el-upload",{ref:"upload",staticClass:"dropzone",style:{"--width":e.width},attrs:{drag:"",action:e.action,data:e.data,headers:e.headers,"file-list":e.fileList,limit:e.limit,multiple:e.multiple,"on-success":e.handleOnSuccess,"on-preview":e.handleOnPreview,"on-remove":e.handleOnRemove,"on-error":e.handleOnError,"before-upload":e.handleOnBeforeUpload}},[l("i",{staticClass:"el-icon-upload"}),e._v(" "),l("div",{staticClass:"el-upload__text"},[e._v("\n      Drop file here or\n      "),l("em",[e._v("click to upload")])]),e._v(" "),e.maxSize!==1/0?l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n      jpg/png files with a size less than "+e._s(e._f("number")(e.maxSize,"0 ib"))+"\n    ")]):e._e()])],1)}),[],!1,null,"65f762e0",null);t.default=component.exports},636:function(e,t,l){"use strict";l.r(t);var r={props:{data:[String,Object],errorImage:String},computed:{cData:function(){return"string"==typeof this.data?{url:this.data,alt:"",title:""}:this.data}},methods:{handleError:function(e){console.log(e)}}},n=l(3),component=Object(n.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{src:this.cData.url,alt:this.cData.alt,title:this.cData.title},on:{error:this.handleError}})}),[],!1,null,"22d6c062",null);t.default=component.exports},781:function(e,t,l){var content=l(807);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(14).default)("c0712e0e",content,!0,{sourceMap:!1})},782:function(e,t,l){var content=l(809);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(14).default)("961c412a",content,!0,{sourceMap:!1})},783:function(e,t,l){"use strict";l.r(t);l(23),l(12),l(7),l(6),l(15);var r=l(2),n=(l(226),l(38));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Upload",props:{value:{type:Array,default:function(){return[]}},type:{type:String,default:"object"},width:{type:String,default:"146px"},maxSize:{type:Number,default:1/0},limit:{type:Number,default:1/0},data:Object},data:function(){return{isShowPreview:!1,previewItem:null,uids:{},queue:[]}},computed:{multiple:function(){return this.limit>1},action:function(){return"/upload"},headers:function(){return{authorization:this.$auth.getToken("local")}},fileList:function(){var e=this;return this.value.map((function(t,l){return"string"===e.type&&(t={url:t}),t.uid=t.uid||e.uids[t.url]||Object(n.b)(),e.uids[t.url]=t.uid,{url:t.url,response:t,uid:t.uid,percentage:100,status:"success",name:t.url}}))}},methods:{handleOnBeforeUpload:function(e){if(e.size>this.maxSize)return this.$message.error({message:"Dung lượng file quá lớn"}),!1},handleOnRemove:function(e){"string"===this.type?Object(n.g)(this.value,null,(function(t){return t===e.url})):Object(n.g)(this.value,null,(function(t){return t.uid===e.uid})),this.$emit("remove",e)},handleOnPreview:function(e){this.previewItem=e,this.isShowPreview=!0},handleOnSuccess:function(e,t,l){var r=this;this.queue.push(t),l.some((function(e){return"uploading"===e.status}))||(this.queue.forEach((function(e){if("object"===r.type){var t=e.response;e.url=t.url,r.value.push(c(c({},t),{},{url:t.url,alt:t.alt,title:t.title,uid:e.uid}))}else{var l=e.response;e.url=l.url,r.uids[e.url]=e.uid,r.value.push(l.url)}r.$emit("add",e)})),this.queue=[])},handleOnError:function(e,t,l){console.log("uploadError",{error:e,file:t,fileList:l})}}},f=(l(806),l(3)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"upload",class:{"is-full":e.value.length>=e.limit}},[l("el-upload",{ref:"upload",style:{"--width":e.width},attrs:{action:e.action,data:e.data,headers:e.headers,"list-type":"picture-card","file-list":e.fileList,limit:e.limit,multiple:e.multiple,"on-success":e.handleOnSuccess,"on-preview":e.handleOnPreview,"on-remove":e.handleOnRemove,"on-error":e.handleOnError,"before-upload":e.handleOnBeforeUpload}},[l("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),e._v(" "),l("el-dialog",{attrs:{visible:e.isShowPreview,"custom-class":"upload-preview-dialog","append-to-body":""},on:{"update:visible":function(t){e.isShowPreview=t}}},[l("app-image",{attrs:{data:e.previewItem}}),e._v(" "),"object"===e.type?l("el-form",{attrs:{"label-position":"left","label-width":"48px"}},[l("el-form-item",{attrs:{label:"Alt"}},[l("el-input",{attrs:{placeholder:"Description here..."},model:{value:e.value.alt,callback:function(t){e.$set(e.value,"alt",t)},expression:"value.alt"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Title"}},[l("el-input",{attrs:{placeholder:"Description here..."},model:{value:e.value.title,callback:function(t){e.$set(e.value,"title",t)},expression:"value.title"}})],1)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppImage:l(636).default})},806:function(e,t,l){"use strict";l(781)},807:function(e,t,l){(t=l(13)(!1)).push([e.i,".el-form-item__content .upload{display:inline-block;width:100%}.upload .el-upload--picture-card,.upload .el-upload-list__item{width:var(--width);height:var(--width);line-height:var(--width)}.upload .el-upload--picture-card .el-upload-list__item-status-label,.upload .el-upload-list__item .el-upload-list__item-status-label{line-height:1.8!important}.upload.is-full div.el-upload.el-upload--picture-card{display:none}.upload-preview-dialog{overflow:hidden;max-width:60vh}.upload-preview-dialog img{-o-object-fit:contain;object-fit:contain;width:100%;max-height:60vh;border-radius:12px}.upload-preview-dialog .el-dialog__body,.upload-preview-dialog .el-dialog__header{padding:0}.upload-preview-dialog .el-form{padding:12px}",""]),t.locals={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px",sidebarCollapsed:"54px",smallRadius:"2px",largeRadius:"4px",roundRadius:"30px",radius:"12px"},e.exports=t},808:function(e,t,l){"use strict";l(782)},809:function(e,t,l){(t=l(13)(!1)).push([e.i,".upload-avatar{position:relative}.upload-avatar .mask{opacity:0;position:absolute;width:100%;height:100%;border-radius:50%;top:0;left:0;display:flex;justify-content:center;align-items:center}.upload-avatar .mask span+span{margin-left:12px}.upload-avatar:hover .mask{opacity:1;background:rgba(0,0,0,.226)}",""]),t.locals={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px",sidebarCollapsed:"54px",smallRadius:"2px",largeRadius:"4px",roundRadius:"30px",radius:"12px"},e.exports=t},811:function(e,t,l){"use strict";l.r(t);var r=l(17),n=l(38),o=l(4),c={name:"UploadSingle",props:{value:[String,Object],props:Object,type:{type:String,default:function(){return Object(r.a)(this.value||{})}}},data:function(){return{uid:Object(n.b)()}},computed:{cValue:function(){var e=this;return[this.value].filter((function(e){return"string"==typeof e?!!e:Object(o.get)(e,"url")})).map((function(t){return(t="object"===e.type?t:{url:t}).uid=t.uid||e.uid,t}))}},methods:{handleAdd:function(e){this.uid=e.uid,"object"===this.type?this.$emit("input",e):this.$emit("input",e.url)},handleRemove:function(e){this.$emit("input",void 0)}}},d=l(3),component=Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("upload",this._b({attrs:{value:this.cValue,multiple:!1,limit:1,type:"object"},on:{add:this.handleAdd,remove:this.handleRemove}},"upload",this.props,!1))}),[],!1,null,"4303e8c4",null);t.default=component.exports;installComponents(component,{Upload:l(783).default})},812:function(e,t,l){"use strict";l.r(t);var r=l(17),n=(l(226),{props:{value:{type:[Object,String],default:function(){return{url:"",alt:"",title:""}}},data:Object,size:{type:[String,Number],default:128},type:{type:String,default:function(){return Object(r.a)(this.value||{})}}},data:function(){return{show:!1}},computed:{cValue:function(){var e;return{url:(null===(e=this.value)||void 0===e?void 0:e.url)||this.value}},action:function(){return"/upload"},headers:function(){return{authorization:this.$auth.getToken("local")}}},methods:{cropSuccess:function(){},cropUploadSuccess:function(e){"object"===this.type?this.$emit("input",{url:e.url}):this.$emit("input",e.url),this.$refs.crop.setStep(1),this.show=!1},cropUploadFail:function(){},handleRemove:function(){this.$emit("input",void 0)}}}),o=(l(808),l(3)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"upload-avatar",staticStyle:{cursor:"pointer"},style:{width:e.size+"px",height:e.size+"px"}},[l("el-avatar",{attrs:{shape:"circle",size:e.size,src:e.cValue.url},nativeOn:{click:function(t){e.show=!0}}}),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:e.cValue.url,expression:"cValue.url"}],staticClass:"mask"},["object"===e.type?l("span",[l("el-popover",{attrs:{title:"Edit Image",width:300}},[l("el-form",[l("el-form-item",{attrs:{label:"Alt: "}},[l("el-input",{attrs:{placeholder:"Enter image alt..."},model:{value:e.value.alt,callback:function(t){e.$set(e.value,"alt",t)},expression:"value.alt"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Title: "}},[l("el-input",{attrs:{placeholder:"Enter image tilte..."},model:{value:e.value.title,callback:function(t){e.$set(e.value,"title",t)},expression:"value.title"}})],1)],1),e._v(" "),l("i",{staticClass:"el-icon-edit color-white",attrs:{slot:"reference"},slot:"reference"})],1)],1):e._e(),e._v(" "),l("span",{on:{click:e.handleRemove}},[l("i",{staticClass:"el-icon-delete color-white"})])]),e._v(" "),l("image-cropper",{ref:"crop",attrs:{field:"file",width:300,height:300,url:e.action,params:e.data,headers:e.headers,"img-format":"png","lang-type":"en"},on:{"crop-success":e.cropSuccess,"crop-upload-success":e.cropUploadSuccess,"crop-upload-fail":e.cropUploadFail},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)}),[],!1,null,null,null);t.default=component.exports},826:function(e,t,l){"use strict";l.r(t);var r={data:function(){return{images:[],image:null,avatar:""}}},n=l(3),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-main",[l("h3",[e._v("Upload")]),e._v(" "),l("upload",{attrs:{size:"64px",type:"object",data:{shopId:1}},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),e._v(" "),l("h3",[e._v("Upload single")]),e._v(" "),l("upload-single",{attrs:{size:"64px",type:"string"},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),e._v(" "),l("h3",[e._v("Avatar Upload")]),e._v(" "),l("avatar-upload",{model:{value:e.avatar,callback:function(t){e.avatar=t},expression:"avatar"}}),e._v(" "),l("h3",[e._v("Avatar Upload")]),e._v(" "),l("dropzone",{attrs:{"max-size":232424}})],1)}),[],!1,null,"7260471c",null);t.default=component.exports;installComponents(component,{Upload:l(783).default,UploadSingle:l(811).default,AvatarUpload:l(812).default,Dropzone:l(635).default})}}]);