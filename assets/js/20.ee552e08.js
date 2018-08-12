(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{163:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"async-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-函数","aria-hidden":"true"}},[s._v("#")]),s._v(" async 函数")]),a("p",[a("code",[s._v("async")]),s._v(" 函数作为 "),a("code",[s._v("Promise")]),s._v(" 对象的补充：")]),a("ol",[a("li",[a("p",[s._v("在写法上将可以将 "),a("code",[s._v("callback")]),s._v(" 组织成为"),a("strong",[s._v("同步")]),s._v("形式，即内部各个 "),a("code",[s._v("await")]),s._v(" 之间都是同步执行。但对于 "),a("code",[s._v("async")]),s._v(" 函数外部，"),a("code",[s._v("async")]),s._v(" 函数整体仍是异步执行。")]),a("ul",[a("li",[s._v("从写法上改善了异步操作执行顺序不直观的问题。")])])]),a("li",[a("p",[s._v("从功能上，将一些多个异步操作全都"),a("strong",[s._v("封装")]),s._v("在一个 "),a("code",[s._v("async")]),s._v(" 函数中，形成一个"),a("strong",[s._v("独立的异步模块")]),s._v("。这有利于协同开发。")]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 将所有的 ajax 封装为一个异步模块 getResult")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// async 函数内部都是同步执行")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// await 接收一个 Promise 对象")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" getResult "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`https://unpkg.com/vue@2.5.16/dist/vue.min.js`")])]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" react "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`https://unpkg.com/react@16/umd/react.production.min.js`")])]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vueRes "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("getSomeData")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vue"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" reactRes "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("getSomeData")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("react"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  result"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("push")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vueRes"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("push")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reactRes"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 异步模块可在任意处引用并调用该异步模块获取数据")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("getResult")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[s._v("在 "),a("code",[s._v("async")]),s._v(" 函数内，函数执行至 "),a("code",[s._v("await")]),s._v(" 处会"),a("code",[s._v("暂停")]),s._v("当前 "),a("code",[s._v("async")]),s._v(" 函数的执行，直到 "),a("code",[s._v("await")]),s._v(" 后的 "),a("code",[s._v("Promise")]),s._v(" 对象状态发生改变后恢复 "),a("code",[s._v("async")]),s._v(" 函数的内部代码执行。")])])])])])}],!1,null,null,null);t.default=e.exports}}]);