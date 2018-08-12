(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),n("p",[t._v("为了解决以上问题，"),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/6.0/?utm_medium=social&utm_source=wechat_session&from=singlemessage&isappinstalled=0#sec-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6"),n("OutboundLink")],1),t._v(" 标准化了 "),n("code",[t._v("模块化")]),t._v("，具体实现即是 "),n("code",[t._v("export")]),t._v(" 与 "),n("code",[t._v("import")]),t._v("。")]),t._m(4),t._m(5),t._m(6),n("p",[t._v("有了以上的分工，极大提高了代码健壮性，每个模块都有自己的功能，每个模块对外暴露自己公有方法，模块内部的一些重要变量也得以保护。防止了工具函数及其关联变量被意外修改的发生。")]),t._m(7),n("p",[n("code",[t._v("AMD")]),t._v("（"),n("a",{attrs:{href:"https://github.com/amdjs/amdjs-api/wiki/AMD",target:"_blank",rel:"noopener noreferrer"}},[t._v("github wiki"),n("OutboundLink")],1),t._v("） 规范表示 "),n("strong",[t._v("异步模块定义")]),t._v(" 规范。")]),n("p",[t._v("常用的 "),n("code",[t._v("AMD")]),t._v(" 实现之一有 "),n("code",[t._v("requirejs")]),t._v("（"),n("a",{attrs:{href:"http://requirejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1),t._v("）工具库，它会在全局作用域中暴露 "),n("code",[t._v("define")]),t._v(" （定义模块）和 "),n("code",[t._v("require")]),t._v(" 函数（加载模块）。"),n("code",[t._v("requirejs")]),t._v(" 实现了异步或动态加载依赖的模块机制。它"),n("strong",[t._v("只")]),t._v("会加载被依赖的模块。")]),t._m(8),t._m(9),t._m(10),n("ul",[n("li",[n("p",[t._v("定义模块")]),n("ul",[n("li",[t._v("参考：\n"),n("ol",[n("li",[n("a",{attrs:{href:"http://requirejs.org/docs/api.html#define",target:"_blank",rel:"noopener noreferrer"}},[t._v("定义模块"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"http://requirejs.org/docs/api.html#modulename",target:"_blank",rel:"noopener noreferrer"}},[t._v("命名模块"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"http://requirejs.org/docs/whyamd.html#sugar",target:"_blank",rel:"noopener noreferrer"}},[t._v("define 语法糖"),n("OutboundLink")],1)])])])])])]),t._m(11),t._m(12),t._m(13),n("p",[t._v("示例中，在加载 m1 和 m2 完成后，执行一个回调函数，该回调函数用于完成指定的任务。")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("未模块化带来的问题")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("浏览器会默认将不同 JS 文件（包含外联 JS 文件和嵌入式 JS）合并为一个模块（除了设置 "),s("code",[this._v('type="modules"')]),this._v(" 的外部 JS 文件），那么这将易导致三个问题：")]),s("ul",[s("li",[s("p",[this._v("全局变量污染，各个文件中的函数和变量都将存在于全局作用域内。")])]),s("li",[s("p",[this._v("各个来源之间的 JS 函数或全局作用域内的变量可能存在冲突。")])]),s("li",[s("p",[this._v("各个 JS 文件必须遵循引用关系排列，但是单从 JS 文件很难分辨模块之间的依赖关系。")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es6-模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块化","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 模块化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("常见模块化思想：将不同功能的 JS 函数封装在不同的 JS 文件中，"),s("code",[this._v("export")]),this._v(" 将模块的公有方法暴露给模块外部， "),s("code",[this._v("import")]),this._v(" 引入当前模块的外部依赖，即明确当前模块依赖哪些模块。各个模块各司其职。此举便于后期维护，也便于他人加入开发。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// utils.js 底层工具函数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// module-utils.js 模块工具函数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isArray "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./utils'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("formatData")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// target 进行一些处理后，赋值给 newTarget")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newTarget"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// module-a.js 业务逻辑")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" formatData "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./module-utils'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// arr 经过一些处理，赋值给 newArr")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("formatData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newArr"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("在示例中，依据每个 JS 文件默认都是一个独立的模块（都拥有自己独有的作用域）的原理，那么示例中可看出存在 "),n("code",[t._v("utils")]),t._v("、"),n("code",[t._v("module-utils")]),t._v("、"),n("code",[t._v("module-a")]),t._v(" 这三个模块。在开发过程中，他们各司其职，"),n("code",[t._v("utils")]),t._v(" 其中主要包含开发时可能被许多模块用到的"),n("strong",[t._v("底层")]),t._v("函数，"),n("code",[t._v("module-utils")]),t._v(" 主要包含在开发某个模块多次使用的"),n("strong",[t._v("再次被包装")]),t._v("的工具函数，"),n("code",[t._v("module-a")]),t._v(" 即是开发的业务模块。以上分类标准并非是开发的强制的分类模块标准，即如何分类不是最重要的，如何分离模块是需要结合实际开发情况来判断的，"),n("strong",[t._v("最重要")]),t._v("的是分离模块开发的这种开发思维。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"amd（-asynchronous-module-definition-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd（-asynchronous-module-definition-）","aria-hidden":"true"}},[this._v("#")]),this._v(" AMD（ Asynchronous Module Definition ）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("requirejs")]),this._v("的引入与入口")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("data-main")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scripts/main"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scripts/require.js"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("async")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}}),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("示例中，"),s("code",[this._v("data-main")]),this._v(" 表示，整体业务代码的逻辑入口，即主模块，所有代码的开端。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * API define\n * @param {String} id 模块名\n * @param {Array<String>} dependence 当前定义的模块的依赖模块，数组中的每一项为模块\n*                                    地址的字符串 \n * @param {Function/Object} fn_Or_Object 回调函数的返回值或一个对象定义当前模块的值\n */")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependence"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过回调函数的 return 定义模块的值")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 不依赖其他模块的模块")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    m1"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    m2"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 依赖其他模块的模块")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'./module-1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./module-2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 语法糖")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m1 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./module-1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      m2 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./module-2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("加载模块")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'m1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'m2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 在加载完成 m1 和 m2 后，执行本匿名回调函数")]),t._v("\n  m1"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("doSomething")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  m2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("doSomething1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"commonjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs","aria-hidden":"true"}},[this._v("#")]),this._v(" CommonJS")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("CommonJS")]),t._v(" 主要是在服务端（"),n("code",[t._v("Node.js")]),t._v("）运行的模块加载器，因为在服务端不存在像客户端一样在使用前需要先从网络下载 JS 文件，那么在 "),n("code",[t._v("CommonJS")]),t._v(" 中所有引入的模块默认都是"),n("strong",[t._v("同步")]),t._v("加载的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("常见使用即是 "),s("code",[this._v("webpack")]),this._v(" 等构建工具中的使用。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 引入 utils 模块")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" someData "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'utils.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 当前模块对模块外部的公有接口")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getSomething"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// do something ...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"amd-和-commonjs-使用场景区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-commonjs-使用场景区分","aria-hidden":"true"}},[this._v("#")]),this._v(" AMD 和 CommonJS 使用场景区分")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("需要异步加载 JS 模块，使用 AMD")])]),s("li",[s("p",[this._v("项目中引入了 npm ，则建议使用 CommonJs")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"构建工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("webpack")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("拥有各项功能的"),s("strong",[this._v("全能型")]),this._v("前端构建工具。它不仅仅局限于 JS 模块合并打包，而且还有打包样式表，外部资源，压缩代码等其他高级功能。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("适用场景")]),this._v("：常规前端项目构建打包。但不推荐 JS 库打包使用，因为过于繁重。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("rollup")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("极简")]),t._v("的 JS 模块打包工具，相对于 "),n("code",[t._v("webpack")]),t._v(" 的各项高级功能（全能手）来说，"),n("code",[t._v("rollup")]),t._v(" 只专注于"),n("strong",[t._v("模块合并打包")]),t._v("功能的实现。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("在 JS 库的打包构建中，使用 "),n("code",[t._v("rollup")]),t._v(" 打包而成的 "),n("code",[t._v("bundle.js")]),t._v(" 大小远小于 "),n("code",[t._v("webpack")]),t._v(" 打包的 "),n("code",[t._v("bundle.js``。rollup")]),t._v(" 打包生成的 "),n("code",[t._v("bundle.js")]),t._v(" 非常简洁。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("适用场景")]),this._v("：JS 库打包，如 "),s("code",[this._v("Vue.js")]),this._v(" 库就是使用了 "),s("code",[this._v("rollup")]),this._v(" 打包生成。")])}],!1,null,null,null);s.default=e.exports}}]);