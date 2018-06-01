(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{166:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),n("p",[t._v("当变量使用 "),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/8.0/#sec-variable-statement",target:"_blank",rel:"noopener noreferrer"}},[t._v("var"),n("OutboundLink")],1),t._v(" 声明时，分为函数体内和全局作用域两种情况。在函数体内使用 "),n("code",[t._v("var")]),t._v(" 声明的变量只能在该函数体内使用，外部是无法调用该函数体内的声明变量。在全局作用域内声明的变量，可在任意位置调用。")]),t._m(4),t._m(5),t._m(6),n("p",[t._v("原则：后代作用域能够访问在祖先作用域声明的变量，反之，不成立。")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),n("p",[t._v("闭包即是对作用域理解的实际应用。")]),t._m(12),t._m(13),t._m(14),n("p",[t._v("通常情况下，函数在执行完成后，弹出调用栈，那么该函数内部的变量和作用域都将被销毁。但是，执行完该函数（指定为 a）返回一个函数（即返回一个闭包，或理解为形成一个闭包），那么此时 a 中的作用域和变量会在内存中保存到闭包不存在为止。")]),n("p",[t._v("依据闭包形成对父级作用域和其中变量的影响，我们可以人为地去间接性（不能直接访问）临时性（生命周期因闭包是否存在而变化）存储我们所需要的一些变量。")]),n("p",[t._v("以下示例展示控制台输出 0~9")]),t._m(15),t._m(16),n("p",[t._v("fn0 中 "),n("code",[t._v("let")]),t._v(" 声明变量 i 时，形成块级作用域，那么当前变量 i "),n("strong",[t._v("只在本轮循环有效")]),t._v("（与 "),n("code",[t._v("var")]),t._v(" 区分）。依据 "),n("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/8.0/#sec-for-statement-runtime-semantics-labelledevaluation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES8 13.7.4.7"),n("OutboundLink")],1),t._v(" 中 "),n("code",[t._v("IterationStatement:for(LexicalDeclarationExpression;Expression)Statement")]),t._v(" 的相关解释：")]),t._m(17),t._m(18),t._m(19),n("p",[t._v("其他参考：")]),n("ol",[n("li",[n("a",{attrs:{href:"https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#let-loops",target:"_blank",rel:"noopener noreferrer"}},[t._v("You dont know JS - let Loops"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#let-loops",target:"_blank",rel:"noopener noreferrer"}},[t._v("You dont know JS - Block Scoping Revisited"),n("OutboundLink")],1)])]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),n("p",[t._v("在以上示例中，闭包是有权访问私有变量和私有函数的唯一公有接口。私有变量和私有函数对外都是不可访问不可修改的。")]),t._m(28),t._m(29)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域","aria-hidden":"true"}},[this._v("#")]),this._v(" 作用域")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("JavaScript")]),this._v(" 中 作用域的工作模式是 "),s("strong",[this._v("词法作用域（lexical scope）")]),this._v("，标准中称为 "),s("strong",[this._v("词法环境（lexical environments）")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作用域（lexical environments）限定了变量的有效范围。ES6 之前（不包含 ES6），"),s("code",[this._v("JavaScript")]),this._v(" 中只有函数和全局作用域。ES6 之后，"),s("code",[this._v("JavaScript")]),this._v(" 有函数、全局和"),s("strong",[this._v("块级作用域")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("块级作用域因 "),n("code",[t._v("let")]),t._v(" 和 "),n("code",[t._v("const")]),t._v(" 声明变量而出现，它"),n("strong",[t._v("只")]),t._v("对 "),n("code",[t._v("let")]),t._v(" 和 "),n("code",[t._v("const")]),t._v(" 声明的变量有效。常见块级作用域有大括号内的区域，for 循环中的小括号区域，即条件区域。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当给一个变量赋值时，若之前未使用 "),s("code",[this._v("var")]),this._v("、"),s("code",[this._v("let")]),this._v("、"),s("code",[this._v("const")]),this._v(" 之一的关键字显式声明该变量，那么该变量将默认隐式声明为全局变量。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("为了规范变量的有效范围，防止变量提升（因为极易造成混乱，遵循 "),n("code",[t._v("先声明后调用")]),t._v(" 的原则有利于后期维护。），ES6 定义了新的变量声明方式 —— "),n("code",[t._v("let")]),t._v(" 或 "),n("code",[t._v("const")]),t._v("。由它们所定义的变量只能在声明时的代码块（"),n("strong",[t._v("块级作用域")]),t._v("）内（即声明时所在的大括号内）使用。即使得变量只会出现在它们应该出现的区域。二者的不同是 "),n("code",[t._v("let")]),t._v(" 声明的是初始化后"),n("strong",[t._v("可被修改")]),t._v("的变量，"),n("code",[t._v("const")]),t._v(" 声明的是初始化后"),n("strong",[t._v("不可被修改")]),t._v("的变量（"),n("code",[t._v("constant variable")]),t._v("）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[this._v("#")]),this._v(" 作用域链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原理：在 "),s("code",[this._v("JavaScript")]),this._v(" 中，当调用某个变量时（示例为 a），首先会找到当前被调用变量的声明，并且搜索始于当前作用域。在当前作用域内未找到 a 变量的声明时，会继续向上级父作用域搜索变量 a 的声明，依照这个规律直至变量 a 的声明被找到或搜索完全局作用域。这即是 "),s("code",[this._v("JavaScript")]),this._v(" 中的作用域链的执行原理。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("特别地，浏览器对于函数声明的处理如同处理 "),s("code",[this._v("var")]),this._v(" 声明变量时一样（仅有函数内声明或全局声明），那么调用函数时的查找函数声明的原理同上。另外，函数的父级作用域是"),s("strong",[this._v("定义时")]),this._v("的就已经确定的，而不是调用时确定。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("let")]),this._v("和 "),s("code",[this._v("const")]),this._v(" 声明变量，会形成块级作用域，那么使用他们声明变量优于使用 "),s("code",[this._v("var")]),this._v(" 声明变量。因为他们更严格的限制了变量的有效范围，并形成了更为严格的作用域链，避免了因变量提升和非块级作用域导致的变量意外覆盖。那么这使得代码的健壮性得到大大提高。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[this._v("#")]),this._v(" 闭包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("自由变量\n作用域链\n闭包的两个场景")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("重要（应用闭包的原理）")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("闭包的父级作用域因与闭包关联（二者至少有一个联系，如一个变量引用）而得以保存。")])]),s("li",[s("p",[this._v("闭包的父级作用域在"),s("strong",[this._v("创建")]),this._v("（而非调用）闭包时确定。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("闭包的本质是一个函数，它是一个有权访问其他函数作用域的函数（出自 "),s("code",[this._v("JavaScript 高级程序设计")]),this._v("）。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fn0")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("fn0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 等价")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fn1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过创建闭包并传入当前循环时的 i 值，将闭包与当前循环体内作用域关联，使得当前循环时的作用域得以保存")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("fn1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"let-在-for-循环中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let-在-for-循环中的应用","aria-hidden":"true"}},[this._v("#")]),this._v(" let 在 for 循环中的应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在每次 for 循环结束时，会隐式的"),s("strong",[this._v("保存")]),this._v("当前的执行上下文以及当前的循环结果（ES8 13.7.4.7 条款 12 和 9.a）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在每次新的循环开始时，都会"),s("strong",[this._v("重新")]),this._v("声明并"),s("strong",[this._v("重新")]),this._v("绑定 (re-bind) 变量 i 为上一次循环结束时变量 i 的值，并继续判断循环条件进行或跳出循环（ES8 13.7.4.7 条款 2）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此时的执行上下文中的变量 i 是与 "),s("code",[this._v("setTimeout()")]),this._v(" 任务分发器中的函数是相关联的，就如同创建闭包时，闭包的父级作用域与闭包相关联。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"闭包在-for-循环中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包在-for-循环中的应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 闭包在 for 循环中的应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("匿名自执行函数（必须传入变量 i，以维持对变量的引用。）形成一个闭包（针对 fn1），那么在循环时，当前的循环体内作用域链（其中包含当前变量 i 值）因与闭包关联而"),s("strong",[this._v("得以保存")]),this._v("。进而在每次控制台输出 i 时，"),s("code",[this._v("setTimeout")]),this._v(" 中的匿名函数"),s("strong",[this._v("向上")]),this._v("查找变量 i 时，都是查找的分发匿名函数时的变量 i。因而每次输出的 i 都是之前循环的值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"私有变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 私有变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("依据调用函数时，在作用域链中查找函数声明的原理（详见上一节），函数的父级作用域是在 "),s("strong",[this._v("定义时")]),this._v(" 确定。那么可创建闭包来保护变量不被意外修改。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fn")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _private "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 被保护的变量")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _private"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_private"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addNum "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("addNum")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// [10]")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("示例中，外部无法修改且无法访问 "),s("code",[this._v("_private")]),this._v(" 变量，只有通过暴露的公有方法才能修改和访问 "),s("code",[this._v("_private")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"私有函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 私有函数")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fn")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("privateFn")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`I am a private function`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("privateFn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ins "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("ins")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"闭包的弊端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的弊端","aria-hidden":"true"}},[this._v("#")]),this._v(" 闭包的弊端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因本节开头介绍闭包的存在机理，父级作用域及其中变量会一直在内存中保存至该闭包被销毁。那么据此引出，创建过多的闭包将"),s("strong",[this._v("可能导致内存溢出")]),this._v("。")])}],!1,null,null,null);s.default=e.exports}}]);