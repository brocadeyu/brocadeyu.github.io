(function(){"use strict";var t={587:function(t,e,o){var n=o(8935),i=o(4549),s=o.n(i),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"container"}},[o("div",{attrs:{id:"app"}},[o("TodoTop"),o("TodoList",{attrs:{todos:t.todos}}),o("TodoFoot",{attrs:{todos:t.todos,checkAllTodo:t.checkAllTodo,deleteDone:t.deleteDone}})],1)])},r=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top"},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),o("el-button",{on:{click:t.handleAdd}},[t._v("添加")])],1)},u=[],a=o(562),c={name:"TodoTop",methods:{handleAdd(t){if(t.target.blur(),t.target.parentNode.blur(),!this.inputValue)return this.$message("请输入内容");const e={title:this.inputValue,id:(0,a.x0)(),done:!1};this.$bus.$emit("addTodo",e),this.inputValue=""}},data(){return{inputValue:""}}},h=c,f=o(1001),p=(0,f.Z)(h,l,u,!1,null,"457b02c0",null),v=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("el-divider",{attrs:{"content-position":"center"}},[t._v("待办事项")]),t._l(t.todos,(function(t){return o("TodoItem",{key:t.id,attrs:{todo:t}})}))],2)},b=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todoitem"},[o("el-checkbox",{attrs:{value:t.todo.done},on:{change:function(e){return t.handleCheck(t.todo.id)}}},[o("el-input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"}],ref:"buttonFocus",attrs:{maxlength:"10",autofocus:"true",placeholder:"请输入内容",size:"mini"},on:{blur:function(e){return t.handleBlur(t.todo)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(" "+t._s(t.todo.title)+" ")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],attrs:{type:"success",size:"small"},on:{click:function(e){return t.handleCheck1(t.todo.id)}}},[t._v("完成")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],attrs:{type:"danger",size:"small"},on:{click:function(e){return t.handleDelete(t.todo.id)}}},[t._v("删除")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleEdit(t.todo)}}},[t._v("编辑")])],1)},$=[],g={name:"TodoItem",props:["todo"],data(){return{checked:this.todo.done,inputValue:""}},methods:{handleCheck(t){this.$bus.$emit("statusTodo",t)},handleDelete(t){this.$bus.$emit("deleteTodo",t)},handleEdit(t){this.$set(t,"isEdit",!0),this.inputValue=this.todo.title,this.$nextTick((function(){this.$refs.buttonFocus.$el.querySelector("input").focus()}))},handleBlur(t){this.inputValue?(this.$bus.$emit("editTodo",t,this.inputValue),t.isEdit=!1):(this.inputValue=this.todo.title,t.isEdit=!1,this.$message("输入不能为空"))},handleCheck1(t){this.$bus.$emit("statusTodo",t),this.checked=!this.checked}}},w=g,k=(0,f.Z)(w,T,$,!1,null,"b0084d12",null),_=k.exports,E={name:"TodoList",props:["todos"],components:{TodoItem:_}},y=E,x=(0,f.Z)(y,m,b,!1,null,"840e4918",null),O=x.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-empty",{directives:[{name:"show",rawName:"v-show",value:!t.todoLength,expression:"!todoLength"}],attrs:{description:"空空如也"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.todoLength,expression:"todoLength"}],staticClass:"foot"},[o("el-checkbox",{attrs:{value:t.isAll},on:{change:function(e){return t.checkAll()}}},[t._v("全选")]),o("span",[t._v("已完成： "+t._s(t.doneTodo)+" / 合计： "+t._s(t.todoLength))]),o("el-button",{attrs:{size:"small"},on:{click:t.handleDeleteDone}},[t._v("删除已完成")])],1)],1)},A=[],D={name:"TodoFoot",props:["todos","checkAllTodo","deleteDone"],computed:{todoLength(){return this.todos.length},doneTodo(){let t=0;return this.todos.forEach((e=>{e.done&&t++})),t},isAll(){return this.todoLength===this.doneTodo&&this.todoLength>0}},methods:{checkAll(){this.checkAllTodo(!this.isAll)},handleDeleteDone(){this.deleteDone()}}},C=D,L=(0,f.Z)(C,V,A,!1,null,"45161fb2",null),N=L.exports,S={name:"App",components:{TodoTop:v,TodoList:O,TodoFoot:N},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[{title:"吃饭",id:1,done:!0},{title:"睡觉",id:2,done:!1},{title:"代码",id:3,done:!0},{title:"本地存储，隐私++",id:4,done:!0}]}},methods:{addTodo(t){this.todos.unshift(t)},editTodo(t,e){this.todos.forEach((o=>{o.id===t.id&&(o.title=e)}))},deleteTodo(t){this.todos=this.todos.filter((e=>e.id!=t))},deleteDone(){this.todos=this.todos.filter((t=>0==t.done))},checkAllTodo(t){this.todos.forEach((e=>{e.done=t}))},statusTodo(t){this.todos.forEach((e=>{e.id===t&&(e.done=!e.done)}))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("addTodo",(t=>{this.addTodo(t)})),this.$bus.$on("statusTodo",(t=>{this.statusTodo(t)})),this.$bus.$on("deleteTodo",(t=>{this.deleteTodo(t)})),this.$bus.$on("editTodo",((t,e)=>{this.editTodo(t,e)})),this.todos.forEach((t=>{t.isEdit&&(t.isEdit=!1,this.$message("请重新输入"))}))},beforeDestroy(){this.$bus.$off("addTodo"),this.$bus.$off("statusTodo"),this.$bus.$off("deleteTodo")}},j=S,F=(0,f.Z)(j,d,r,!1,null,null,null),z=F.exports;n["default"].config.productionTip=!1,n["default"].use(s()),new n["default"]({render:t=>t(z),beforeCreate(){n["default"].prototype.$bus=this}}).$mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var d=1/0;for(a=0;a<t.length;a++){n=t[a][0],i=t[a][1],s=t[a][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||d>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(r=!1,s<d&&(d=s));if(r){t.splice(a--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var a=t.length;a>0&&t[a-1][2]>s;a--)t[a]=t[a-1];t[a]=[n,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,d=n[0],r=n[1],l=n[2],u=0;if(d.some((function(e){return 0!==t[e]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(l)var a=l(o)}for(e&&e(n);u<d.length;u++)s=d[u],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(a)},n=self["webpackChunkvue_todolist"]=self["webpackChunkvue_todolist"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(587)}));n=o.O(n)})();
//# sourceMappingURL=app.1a240078.js.map