(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{613:function(e,t,n){"use strict";(function(e){n(220);var o=n(772),l=n(35);t.a={props:{id:{type:String,default:function(){return"vue-tinymce-"+Object(l.a)()}},value:String,toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table basicitem"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){var t=this;return{editor:null,showUpload:!1,apiKey:e.env.TINYMCE_KEY||"3yt64d5qdxbws6vnlpysi905awwqebibbw6x2j3j0burkfe2",init:{language:"en",height:this.height,body_class:"panel-body",content_css:"/css/tinymce.css",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:o.b,menubar:this.menubar,plugins:o.a,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,convert_urls:!1,setup:function(e){e.ui.registry.addButton("uploadimage",{text:"Upload Image",icon:"upload",onAction:function(){t.showUpload=!0}})}}}}}}).call(this,n(221))},772:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var o=["advlist anchor autolink autosave code codesample colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],l=["searchreplace | fontselect fontsizeselect formatselect | bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen | uploadimage"]},784:function(e,t,n){"use strict";n.r(t);var o=n(613).a,l=n(3),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tinymce-container",attrs:{id:e.id}},[n("editor",{attrs:{value:e.value,"api-key":e.apiKey,init:e.init},on:{input:function(t){return e.$emit("input",t)}}}),e._v(" "),e.editor?n("el-button",{staticClass:"upload-button",attrs:{size:"mini",type:"primary",icon:"el-icon-upload"}}):e._e(),e._v(" "),n("el-dialog",{attrs:{title:"Upload Image",visible:e.showUpload},on:{"update:visible":function(t){e.showUpload=t}}})],1)}),[],!1,null,null,null);t.default=component.exports},794:function(e,t,n){"use strict";n.r(t);var o={meta:{},data:function(){return{text:"<h1>Hello</h1>"}}},l=n(3),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("tinymce",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)}),[],!1,null,"7e34d365",null);t.default=component.exports;installComponents(component,{Tinymce:n(784).default})}}]);