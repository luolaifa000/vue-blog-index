(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cffbfc0"],{7497:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"higtlight"},[a("div",{staticClass:"about-bg"},[a("img",{staticClass:"bg-img",attrs:{src:e("c1eb")}}),a("div",{staticClass:"bg"}),a("p",{staticClass:"mgs-title"},[t._v("Say Hello~")]),a("div",{staticClass:"input-main"},[a("div",{staticClass:"input-box main"},[a("div",{staticClass:"userbox"},[a("div",{staticClass:"user-img"},[a("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-"+t.user.id+".svg",alt:""}}),a("h4",[t._v(t._s(t.user.name||"游客"))])])]),a("div",{staticClass:"textbox"},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},maxlength:400,placeholder:t.textarea},model:{value:t.message.content,callback:function(s){t.$set(t.message,"content",s)},expression:"message.content"}}),a("div",{staticClass:"submit-box"},[a("div",{staticClass:"ykname"},[t.user?t._e():a("Input",{staticStyle:{width:"120px"},attrs:{placeholder:"游客可以选填昵称"},model:{value:t.message.name,callback:function(s){t.$set(t.message,"name",s)},expression:"message.name"}})],1),a("Button",{attrs:{type:"primary"},on:{click:t.submitMessage}},[t._v("提交评论")])],1)],1)])])]),t.loading?a("MyLoading"):a("div",{staticClass:"main"},[t._l(t.messageList,function(s,e){return a("div",{key:e,staticClass:"commentList"},[a("div",{staticClass:"user-ava"},[s.user?a("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-"+s.user.id+".svg"}}):a("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-undefined.svg"}})]),a("div",{staticClass:"comment-box animate03"},[a("div",{staticClass:"username"},[a("span",[a("Icon",{attrs:{type:"md-person"}}),t._v("\n            "+t._s(s.user?s.user.name:s.name?"游客（"+s.name+"）":"游客")+" \n            "),a("em",[t._v(t._s(1==s.user_id?"(博主)":""))]),a("span",{staticClass:"created"},[a("i",{staticClass:"el-icon-time"}),t._v(t._s(s.created_at))])],1),a("span",{staticClass:"floor"},[t._v(t._s(s.id)+"楼")])]),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"com_detail",domProps:{innerHTML:t._s(s.content)}}),a("div",{staticClass:"delete"},[a("Poptip",{attrs:{confirm:"",placement:"left",title:"是否删除该留言?"},on:{"on-ok":function(e){t.deleteComment(s)}}},[s.user_id==t.user.id&&s.user_id?a("Icon",{attrs:{type:"md-trash"}}):t._e()],1)],1)])])}),t.pageModel.sumCount>10?a("MyPage",{attrs:{pageModel:t.pageModel},on:{selectList:t.selectRoleList}}):t._e()],2)],1)},i=[],n=(e("ac6a"),e("be94")),c=e("2f62"),o=e("0e54"),d=e.n(o),m=(e("bc07"),{data:function(){return{textarea:"支持markdown语法，尾部2个空格后回车才会换行，最长400个字",autofocus:!1,loading:!0,messageList:[],message:{content:"",ykname:""},pageModel:{page:1,sumCount:10},page:2,hasMore:!0}},computed:Object(n["a"])({},Object(c["c"])(["user"]),{compiledMarkdown:function(){return d()(this.detail.content,{sanitize:!0})}}),created:function(){this.getMessage()},methods:{getMessage:function(){var t=this;this.$post("/apis/message/list",this.pageModel).then(function(s){t.loading=!1,t.pageModel.sumCount=s.data.total,t.messageList=s.data.data,t.messageList.forEach(function(t){t.content=d()(t.content,{sanitize:!0})})}).catch(function(){})},selectRoleList:function(){this.getMessage()},submitMessage:function(){var t=this;this.$post("/apis/message/add",this.message).then(function(s){t.getMessage(),t.$Message.success(s.message),t.message={content:"",name:""}}).catch(function(){})},deleteComment:function(t){var s=this;this.$post("/apis/message/delete",{id:t.id}).then(function(e){s.messageList.splice(s.messageList.indexOf(t),1),s.$Message.success(e.message)}).catch(function(){})},reply:function(t){this.autofocus=!0,this.message.content="",this.message.reply_id=t,this.textarea="回复 ".concat(t,"楼")}}}),l=m,r=(e("800f"),e("2877")),u=Object(r["a"])(l,a,i,!1,null,"5def52d4",null);u.options.__file="message.vue";s["default"]=u.exports},"800f":function(t,s,e){"use strict";var a=e("9bd7"),i=e.n(a);i.a},"9bd7":function(t,s,e){},bc07:function(t,s,e){},c1eb:function(t,s,e){t.exports=e.p+"static/img/message.ece9c690.jpg"}}]);