(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[s._v("#")]),s._v(" DOM")]),n("h2",{attrs:{id:"dom-含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-含义","aria-hidden":"true"}},[s._v("#")]),s._v(" DOM 含义")]),n("p",[n("code",[s._v("DOM")]),s._v(" 的数据结构（计算机中存储、组织数据的方式）属于树（"),n("code",[s._v("Tree")]),s._v("）结构。")]),n("p",[n("code",[s._v("HTML")]),s._v(" 本质是字符串，浏览器将 "),n("code",[s._v("HTML")]),s._v(" 解析为一种树状结构模型（"),n("code",[s._v("model")]),s._v("），即 "),n("code",[s._v("DOM")]),s._v(" 树。")]),n("p",[n("code",[s._v("DOM")]),s._v(" 节点本质上是一个可被操作的 JS 对象（"),n("code",[s._v("Object")]),s._v(" 的实例）。")]),n("p",[s._v("在 "),n("code",[s._v("DOM")]),s._v(" 节点中，对象的本身的属性称为 "),n("code",[s._v("property")]),s._v("，节点（"),n("code",[s._v("HTML")]),s._v(" 标签）的属性称为 "),n("code",[s._v("attribute")]),s._v("。")]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("querySelectorAll")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token string"}},[s._v("'p'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// 类数组集合")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// property")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// attribute")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{attrs:{class:"token number"}},[s._v("0")]),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"dom-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作","aria-hidden":"true"}},[s._v("#")]),s._v(" DOM 操作")]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("// 创建节点，参数均为字符串类型")]),s._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("节点名"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// Element 类型节点，即 HTML 元素")]),s._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("createTextNode")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("文本节点内容"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// Text 类型节点，即文本节点")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token string"}},[s._v("'p'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 父节点")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parentNode "),n("span",{attrs:{class:"token comment"}},[s._v("// 优先使用 parentNode，而非 parentElement")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 子节点")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("childNodes "),n("span",{attrs:{class:"token comment"}},[s._v("// 包含 Text 类型节点（标签之间空白算做文本节点）的类数组合集，即包含文本节点和元素即节点的合集。")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children "),n("span",{attrs:{class:"token comment"}},[s._v("// 只包含 Element 类型节点（即只有 HTML 元素）的类数组合集，即不包含文本节点的合集。")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 移除子节点")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("removeChild")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 新增子节点")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// 在 childNodes 最后插入新的节点作为 p 的子节点")]),s._v("\np"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("insertBefore")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newNode"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" referenceNode"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// 在 referenceNode 前插入 newNode，作为 p 的子节点")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 克隆节点")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" newP "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("cloneNode")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("deep"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// deep 为是否深克隆，即是否克隆子节点和 DOM0 级事件监听程序。最后得到 p 节点的一个副本。")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("注：")]),n("ol",[n("li",[n("p",[s._v("DOM0 级事件处理程序指类似 "),n("code",[s._v("onclick")]),s._v(" 定义的处理程序。在深克隆节点时，只克隆在属性中定义的 DOM0 级事件处理程序，即"),n("code",[s._v('onclick="console.log(a)"')]),s._v("会被深克隆，"),n("code",[s._v("onclick=fn")]),s._v("是不会被深克隆。"),n("code",[s._v("addEventListener")]),s._v(" 定义的事件处理程序属于 DOM2 事件处理程序，是不会被 "),n("code",[s._v("cloneNode")]),s._v(" 方法克隆的。")])]),n("li",[n("p",[s._v("直接复写节点的 "),n("code",[s._v("innerText")]),s._v(" 属性，可直接复写节点的文本节点。")])]),n("li",[n("p",[s._v("直接复写节点的 "),n("code",[s._v("innerHTML")]),s._v(" 属性，可直接复写节点的所有子节点。")])]),n("li",[n("p",[s._v("直接复写节点的 "),n("code",[s._v("outerHTML")]),s._v(" 属性，可直接复写节点的所有子节点及其自身（"),n("code",[s._v("Vue.js")]),s._v(" 中的挂载功能）。")])])])])}],!1,null,null,null);t.default=e.exports}}]);