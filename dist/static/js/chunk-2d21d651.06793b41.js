(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d651"],{d0b1:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("section",{staticClass:"wrap scroll"},[l("div",{staticClass:"main_table"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.articles,stripe:"","max-height":"600","tooltip-effect":"dark"}},[l("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),l("el-table-column",{attrs:{prop:"classify",label:"文章分类","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"title",label:"文章标题","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{label:"标签",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.tags,(function(e,a){return[l("el-tag",{key:a,attrs:{size:"mini"}},[t._v(t._s(e))])]}))]}}])}),l("el-table-column",{attrs:{prop:"view_count",label:"点击量",width:"80"}}),l("el-table-column",{attrs:{prop:"like",label:"点赞量",width:"80"}}),l("el-table-column",{attrs:{prop:"commentCount",label:"评论量",width:"80"}}),l("el-table-column",{attrs:{prop:"created_at",label:"创建日期","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{label:"是否下架",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-switch",{on:{change:function(l){return t.deleteBtn(e.row.id,e.row.deleted_at)}},model:{value:e.row.deleted_at,callback:function(l){t.$set(e.row,"deleted_at",l)},expression:"scope.row.deleted_at"}})]}}])}),l("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){return t.detail(e.row.id)}}},[t._v("查看")])]}}])})],1),t.pageModel.sumCount>10?l("MyPage",{attrs:{pageModel:t.pageModel},on:{selectList:t.selectRoleList}}):t._e()],1)])])},o=[],n=(l("ac6a"),{data:function(){return{loading:!0,articles:[],pageModel:{page:1,all:1,sumCount:10}}},created:function(){this.getArticles()},methods:{getArticles:function(){var t=this;this.loading=!0,this.$post("/api/v2/article/list",this.pageModel).then((function(e){t.articles=e.data.data,t.pageModel.sumCount=e.data.total,t.articles.forEach((function(t){t.deleted_at&&(t.deleted_at=!0)})),t.loading=!1})).catch((function(){}))},selectRoleList:function(){this.getArticles()},detail:function(t){this.$router.push("/article/edit/".concat(t))},deleteBtn:function(t,e){var l=this;1==e?this.$post("/api/v2/article/delete",{id:t}).then((function(e){console.log(e.data,"delete"),l.$message.success("文章".concat(t,"下架操作成功"))})).catch((function(){})):this.$post("/api/v2/article/restored",{id:t}).then((function(e){console.log(e.data,"restored"),l.$message.success("文章".concat(t,"恢复成功"))})).catch((function(){}))}}}),i=n,s=l("2877"),c=Object(s["a"])(i,a,o,!1,null,"a6644a8e",null);e["default"]=c.exports}}]);