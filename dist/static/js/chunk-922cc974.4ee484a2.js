(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-922cc974"],{"1f44":function(t,e,a){"use strict";var i=a("5f45"),s=a.n(i);s.a},2616:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"wrap scroll ad"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addBtn}},[t._v("添 加")]),a("div",{staticClass:"main_table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.adlist,stripe:"","max-height":"600","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"80"}}),a("el-table-column",{attrs:{prop:"title",label:"标题","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"type",label:"分类","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"url",label:"链接","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"图片预览",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticClass:"imgload",attrs:{src:t.$staticUrl+e.row.url,alt:""}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.editBtn(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteBtn(e.row)}}},[t._v("删除")])]}}])})],1),t.pageModel.sumCount>10?a("MyPage",{attrs:{pageModel:t.pageModel},on:{selectList:t.selectRoleList}}):t._e()],1)],1),a("el-dialog",{staticClass:"addimg",attrs:{title:t.title,visible:t.dialogFormVisible,top:"10vh"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form,"label-width":"130px",enctype:"multipart/form-data"}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{clearable:"",size:"small"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"分类"}},[a("el-input",{attrs:{clearable:"",size:"small"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),a("el-form-item",{attrs:{label:"上传图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/v2/image/upload",name:"image",headers:t.headers,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{staticClass:"href",attrs:{label:"图片链接"}},[a("el-input",{attrs:{readonly:""},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t.form.id?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.editSubmit}},[t._v("保存修改")]):a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addSubmit}},[t._v("保 存")])],1)],1)],1)},s=[],l=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("2f62");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={data:function(){return{title:"新增广告图",dialogFormVisible:!1,loading:!0,adlist:[],imageUrl:"",form:{title:"",url:"",type:""},pageModel:{page:1,sumCount:10}}},computed:n({},Object(o["c"])(["token"]),{headers:function(){return{Authorization:this.token,"X-Requested-With":"XMLHttpRequest"}}}),created:function(){this.getAd()},methods:{getAd:function(){var t=this;this.$post("/api/v2/ad/list",this.pageModel).then((function(e){console.log(e.data),t.adlist=e.data.data,t.pageModel.sumCount=e.data.total,t.loading=!1}))},selectRoleList:function(){this.getAd()},handleAvatarSuccess:function(t,e){this.form.url&&this.handleRemove(),this.imageUrl=URL.createObjectURL(e.raw),this.$message.success("图片上传成功"),this.form.url=t.data.url},handleRemove:function(){var t=this,e={image:this.form.img};this.$post("/api/v2/image/delete",e).then((function(e){t.$message.success(e.message)}))},beforeAvatarUpload:function(t){var e="image/jpeg"==t.type||"image/png",a=t.size/1024/1024<2;return e||this.$message.error("上传图片只能是 JPG和png 格式!"),a||this.$message.error("上传图片大小不能超过 2MB!"),e&&a},deleteBtn:function(t){var e=this;this.$confirm("是否删除该广告图?","提示",{type:"warning"}).then((function(){e.$post("/api/v2/ad/delete",{id:t.id}).then((function(a){e.$message.success(a.message),e.adlist.splice(e.adlist.indexOf(t),1)}))})).catch((function(){}))},addBtn:function(){this.title="新增友情链接",this.dialogFormVisible=!0,this.imageUrl="",this.form={title:"",href:"",end_time:""}},addSubmit:function(){var t=this;this.$post("/api/v2/ad/add",this.form).then((function(e){t.$message.success(e.message),t.dialogFormVisible=!1,t.getAd()}))},editBtn:function(t){this.title="编辑广告图",this.dialogFormVisible=!0,this.form=Object.assign({},t),this.imageUrl=this.$staticUrl+this.form.url},editSubmit:function(){var t=this;this.$post("/api/v2/ad/edit",this.form).then((function(e){t.$message.success(e.message),t.dialogFormVisible=!1,t.getAd()}))}}},u=c,d=(a("db75"),a("1f44"),a("2877")),m=Object(d["a"])(u,i,s,!1,null,"934b37a2",null);e["default"]=m.exports},"5f45":function(t,e,a){},abad:function(t,e,a){},db75:function(t,e,a){"use strict";var i=a("abad"),s=a.n(i);s.a}}]);