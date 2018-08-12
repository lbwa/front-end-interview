(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{150:function(t,e,n){t.exports=n.p+"assets/img/execution-context.3deef437.png"},168:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"执行上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("本章节主要讲述在事件循环中，每一个宏任务或每一个微任务是如何被具体执行的。即被推入执行上下文栈（"),e("code",[this._v("execution context stack")]),this._v("，亦称调用栈 "),e("code",[this._v("call stack")]),this._v("）的代码是如何被具体执行的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"执行上下文定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文定义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"执行上下文栈（亦称调用栈）定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈（亦称调用栈）定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文栈（亦称调用栈）定义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("执行上下文栈（"),e("code",[this._v("execution context stack")]),this._v("，亦称调用栈 "),e("code",[this._v("call stack")]),this._v("）用于追踪执行上下文。当前执行上下文总是执行上下文栈中最上层的那一个执行上下文。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("执行上下文栈即是执行上下文的"),e("strong",[this._v("容器")]),this._v("。")]),e("p",[e("img",{attrs:{src:n(150),alt:"execution-context"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"running-execution-context-的更替"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-execution-context-的更替","aria-hidden":"true"}},[this._v("#")]),this._v(" Running execution context 的更替")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("A new execution context is created whenever control is transferred from the executable code associated with the currently running execution context to executable code that is not associated with that execution context.The newly created execution context is pushed onto the stack and becomes the running execution context.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Once the running execution context has been suspended a different execution context may become the running execution context and commence evaluating its code. At some later time a suspended execution context may again become the running execution context and continue evaluating its code at the point where it had previously been suspended.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("从当前运行的执行上下文相关联的可执行代码转移控制权（"),e("code",[this._v("control")]),this._v("，可理解为执行权）到与该执行上下文不相关的可执行代码时，就会创建新的执行上下文。")]),e("ul",[e("li",[this._v("可理解为在一个函数中调用另一个函数时，就会创建一个新的执行上下文。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("新的执行上下文将会"),e("strong",[this._v("代替")]),this._v("之前的执行上下文成为当前执行的执行上下文（"),e("code",[this._v("running execution context")]),this._v("）并推入执行上下文栈中（"),e("code",[this._v("execution context stack")]),this._v("）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以上可以解释 "),e("code",[this._v("JavaScript 语言精粹")]),this._v(" P27中，作者介绍到，在一个函数（称为 a）中调用一个函数（称为 b）时，a 会暂停执行，进入 "),e("code",[this._v("冻结")]),this._v(" 状态，并将当前执行权转移给函数 b。待 b 执行完成后，执行权由 b 回到 a，这样 a 得以继续恢复执行接下来的代码。")])}],r=n(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("p",[t._v("执行上下文（"),n("code",[t._v("execution context")]),t._v("（"),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/#sec-execution-contexts",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript"),n("OutboundLink")],1),t._v("））用于"),n("strong",[t._v("追踪代码的执行")]),t._v("。在任何时候在一个客户端中"),n("strong",[t._v("最多")]),t._v("只存在一个当前"),n("strong",[t._v("正在执行")]),t._v("代码的执行上下文，并且被称作客户端的 "),n("strong",[t._v("当前执行上下文")]),t._v("（"),n("code",[t._v("running execution context")]),t._v("）。")]),t._m(3),t._m(4),n("p",[t._v("注：")]),t._m(5),t._m(6),n("p",[t._v("（"),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/#sec-execution-contexts",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源"),n("OutboundLink")],1),t._v("）")]),t._m(7),n("p",[t._v("（"),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/#table-22",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源"),n("OutboundLink")],1),t._v("）")]),t._m(8),n("ol",[t._m(9),t._m(10),n("li",[n("p",[t._v("之前的执行上下文将会进入"),n("code",[t._v("冻结")]),t._v("状态（"),n("code",[t._v("suspended")]),t._v("）（"),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/#table-22",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源"),n("OutboundLink")],1),t._v("），并等待新的执行上下文执行完成。待新的执行上下文执行完成将会恢复之前的执行上下文的执行。")])])]),t._m(11)])},i,!1,null,null,null);e.default=s.exports}}]);