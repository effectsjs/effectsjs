(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{234:function(e,t,n){"use strict";n.r(t);var r=n(235),o=n(85),a=n(154),i=n(236),c=n.n(i),s=n(237),l=n.n(s),u=n(88),f=n(69),p=n(2),d=n.n(p),h=n(86),y=[{title:"Why do I need to use 'use effects'?",a:"whyuseeffects",answer:"The 'use effects' directive is not desired for part of the specification. It is a temporary, syntactical necessity to enable the babel compiler to support effectjs at runtime."},{title:"Can I perform an effect from within an effect?",a:"nestedeffects",answer:"Currently, no.  In the future, maybe!"}];t.default=function(){var e=r.data,t=e.references.html,n=e.keywords.html,i=e.elevator_pitch.html;return d.a.createElement(u.a,null,d.a.createElement(h.a,{title:"Home"}),d.a.createElement("div",{className:"node",children:d.a.createElement("h2",{children:"What is it?"})}),d.a.createElement("p",{className:"node"},"Extensions to the javascript language, enabling new control flows that may be well suited to a variety of general purpose programming contexts."),d.a.createElement("div",{className:"node",children:d.a.createElement("h2",{children:"Example"})}),d.a.createElement(l.a,{className:"node full-width",language:"js",children:c.a}),d.a.createElement(a.a,{className:"node",children:i}),d.a.createElement("h3",{className:"node"},"Effects keywords"),d.a.createElement(a.a,{className:"node",children:n}),d.a.createElement("div",{className:"node funsies",children:d.a.createElement(f.a,null)}),d.a.createElement("div",{className:"node"},d.a.createElement("h2",{children:"Getting started"}),d.a.createElement("p",null,"There are two ways to get started:"),d.a.createElement("ul",null,d.a.createElement("li",{children:d.a.createElement(o.a,{to:"/examples"},"Try our editor and examples online, now!")}),d.a.createElement("li",{children:d.a.createElement(o.a,{to:"/installation"},"(pending) Install effects into your javascript or typescript project")}))),d.a.createElement("div",{className:"node funsies",children:d.a.createElement(f.a,null)}),d.a.createElement("h3",{className:"node"},"References"),d.a.createElement(a.a,{className:"node",children:t}),d.a.createElement("h2",{className:"node"},"FAQ"),y.map((function(e){var t=e.title,n=e.a,r=e.answer;return d.a.createElement(d.a.Fragment,{key:n},d.a.createElement("h3",{className:"node"},t),d.a.createElement("a",{name:n,href:n})," ",d.a.createElement("p",{className:"node",children:r}))})))}},235:function(e){e.exports=JSON.parse('{"data":{"references":{"html":"<table>\\n<thead>\\n<tr>\\n<th>Reference</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Source code</td>\\n<td><a href=\\"https://github.com/effectsjs/effectsjs\\">github.com/effectsjs/effectsjs</a></td>\\n</tr>\\n<tr>\\n<td>Dan\'s Conceptualization</td>\\n<td><a href=\\"https://overreacted.io/algebraic-effects-for-the-rest-of-us/\\">Algebraic Effects for the Rest of Us</a></td>\\n</tr>\\n</tbody>\\n</table>"},"elevator_pitch":{"html":"<h2>TLDR, What are Algebraic Effects?</h2>\\n<p>The best way to conceptualize the effect control flow is to expand upon an already well-known programming language construct: Exceptions.</p>\\n<p>Consider the following example:</p>\\n<pre><code class=\\"language-javascript\\">const child = () => {\\n    throw \\"Hello\\"\\n};\\n\\nconst parent = () => {\\n    child();\\n    doMoreWork();\\n};\\n\\nconst main = () => {\\n    try{\\n      parent();\\n    }catch(e){\\n      console.log(e);\\n    }\\n}\\n</code></pre>\\n<p>Function calls get pushed onto the call-stack as they are invoked. Normally, as a function completes it\'s frame is\\npopped off of the call stack and the previous stack frame is resumed. The above example demonstrates an alternative flow:\\nwhen <code>child</code> throws an exception, the exception \\"bubbles\\" up the call-stack until a call-site with an exception handler is found.</p>\\n<p>If you\'ve been programming in a language that offers first-class support for exception handling as outlined above, you\'re most-likely\\ncomfortable with the flow just described.</p>\\n<p>Now let\'s tweak our existing mental model for this new concept. Imagine a catch-block that can resume back to the throwing call-site.\\nIn the above example, our <code>catch</code> block in main, would recall to <code>child</code>. </p>\\n<p>This is the crash course for the proposed control flow, and the keywords to facilitate it.</p>"},"keywords":{"html":"<table>\\n<thead>\\n<tr>\\n<th>Keyword</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>perform</code></td>\\n<td>Initiates an effect. The current function halts, and later resumes when an effect handler <code>resume</code>s</td>\\n</tr>\\n<tr>\\n<td><code>handle</code></td>\\n<td><code>try/handle</code> blocks allow users to specify handlers for effect events, using well-known <code>try/catch</code>-like semantics.  <code>try/handle</code> is <em>not</em> compatible with <code>try/catch</code></td>\\n</tr>\\n<tr>\\n<td><code>recall</code></td>\\n<td>Recalls the previously halted function, who called <code>perform</code>.</td>\\n</tr>\\n</tbody>\\n</table>"}}}')},236:function(e,t){e.exports="'use effects'\ntry {\n  await work()\n} handle 'log' with ({message}) {\n      console.log(message)\n  }\n}\n\nasync function work () {\n  const res = await fetch(...)\n  perform { type: 'log', message: `fetch completed with status: ${res.status}` }\n  return res.json()\n}\n"},237:function(e,t,n){n(17),n(14),n(22),n(12),n(13),n(10),n(50),n(4),n(3),n(1),n(8),n(21),n(20),n(26),n(38),n(29),n(49),n(25),n(23),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),a=l(o),i=l(n(4)),c=n(14),s=l(n(15));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){s.default.highlightBlock((0,c.findDOMNode)(this.refs.code))}},{key:"componentDidUpdate",value:function(){s.default.initHighlighting.called=!1,s.default.highlightBlock((0,c.findDOMNode)(this.refs.code))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.language,o=e.style;return a.default.createElement("pre",{className:n,style:o},a.default.createElement("code",{className:r,ref:"code"},t))}}]),t}(o.Component);p.propTypes={children:i.default.node.isRequired,className:i.default.string,language:i.default.string,style:i.default.object},t.default=p},function(e,t){e.exports=n(2)},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(6)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(13)()}).call(t,n(5))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,l=[],u=!1,f=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=c(p);u=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";var r=n(7),o=n(8),a=n(9),i=n(10),c=n(11),s=n(12);e.exports=function(e,n){var l="function"==typeof Symbol&&Symbol.iterator;var u={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:d(r.thatReturnsNull),arrayOf:function(e){return d((function(t,n,r,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new p("Invalid "+o+" `"+a+"` of type `"+m(i)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<i.length;s++){var l=e(i,s,r,o,a+"["+s+"]",c);if(l instanceof Error)return l}return null}))},element:d((function(t,n,r,o,a){var i=t[n];return e(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+m(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return d((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||"<<anonymous>>";return new p("Invalid "+o+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:d((function(e,t,n,r,o){return y(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(t,n,r,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=m(i);if("object"!==s)return new p("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(i.hasOwnProperty(l)){var u=e(i,l,r,o,a+"."+l,c);if(u instanceof Error)return u}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull;return d((function(t,n,r,o,a){for(var i=t[n],c=0;c<e.length;c++)if(f(i,e[c]))return null;return new p("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",b(o),n),r.thatReturnsNull}return d((function(t,n,r,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,n,r,o,a,c))return null}return new p("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return d((function(t,n,r,o,a){var i=t[n],s=m(i);if("object"!==s)return new p("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if(u){var f=u(i,l,r,o,a+"."+l,c);if(f)return f}}return null}))},exact:function(e){return d((function(t,n,r,o,a){var s=t[n],l=m(s);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=i({},t[n],e);for(var f in u){var d=e[f];if(!d)return new p("Invalid "+o+" `"+a+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(s,f,r,o,a+"."+f,c);if(h)return h}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){this.message=e,this.stack=""}function d(e){if("production"!==t.env.NODE_ENV)var r={},i=0;function s(s,l,u,f,d,h,y){if(f=f||"<<anonymous>>",h=h||u,y!==c)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var m=f+":"+u;!r[m]&&i<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,f),r[m]=!0,i++)}return null==l[u]?s?null===l[u]?new p("The "+d+" `"+h+"` is marked as required in `"+f+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(l,u,f,d,h)}var l=s.bind(null,!1);return l.isRequired=s.bind(null,!0),l}function h(e){return d((function(t,n,r,o,a,i){var c=t[n];return m(c)!==e?new p("Invalid "+o+" `"+a+"` of type `"+v(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!y(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,u.checkPropTypes=s,u.PropTypes=u,u}}).call(t,n(5))},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,a,i,c,s){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,o,a,i,c,s],f=0;(l=new Error(t.replace(/%s/g,(function(){return u[f++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}}).call(t,n(5))},function(e,t,n){(function(t){"use strict";var r=n(7);if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(i){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];o.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(5))},function(e,t){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var i,c,s=a(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(s[u]=i[u]);if(n){c=n(i);for(var f=0;f<c.length;f++)o.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(t){"use strict";if("production"!==t.env.NODE_ENV)var r=n(8),o=n(9),a=n(11),i={};e.exports=function(e,n,c,s,l){if("production"!==t.env.NODE_ENV)for(var u in e)if(e.hasOwnProperty(u)){var f;try{r("function"==typeof e[u],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",s||"React class",c,u,typeof e[u]),f=e[u](n,u,s,c,null,a)}catch(d){f=d}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",c,u,typeof f),f instanceof Error&&!(f.message in i)){i[f.message]=!0;var p=l?l():"";o(!1,"Failed %s type: %s%s",c,f.message,null!=p?p:"")}}}}).call(t,n(5))},function(e,t,n){"use strict";var r=n(7),o=n(8),a=n(11);e.exports=function(){function e(e,t,n,r,i,c){c!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){e.exports=n(108)},function(e,t){e.exports=n(149)}])}}]);
//# sourceMappingURL=component---src-pages-index-js-8f8cf2fbbedaf0bd0cdd.js.map