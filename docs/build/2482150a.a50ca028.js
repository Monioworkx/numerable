(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={code:"ar",delimiters:{thousands:"\u066c",decimal:"\u066b"},abbreviations:"|||\u0623\u0644\u0641\u200e|||\u0645\u0644\u064a\u0648\u0646\u200e|||\u0645\u0644\u064a\u0627\u0631\u200e|||\u062a\u0631\u0644\u064a\u0648\u0646\u200e",ordinal:function(){return"."},numeralSystem:["\u0660","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"].map((function(e){return e+"\u200e"}))};t.default=r},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"de",delimiters:{thousands:".",decimal:","},abbreviations:"||||||Mio.|||Mrd.|||Bio.",ordinal:function(){return"."}}},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"en-gb",delimiters:{thousands:",",decimal:"."}}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"en-in",delimiters:{thousands:",",decimal:"."},abbreviations:"|||T||L||Cr|||TCr||LCr",digitGroupingStyle:[3,2]}},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"en",delimiters:{thousands:",",decimal:"."},abbreviations:"|||K|||M|||B|||T",ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"}}},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"es",delimiters:{thousands:".",decimal:","},abbreviations:"|||mil|||M|||mil M|||B",ordinal:function(){return"\xba"}}},106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"fr",delimiters:{thousands:" ",decimal:","},abbreviations:"|||k|||M|||Md|||Bn",ordinal:function(e){return 1===e?"er":"e"}}},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"hi",delimiters:{thousands:",",decimal:"."},abbreviations:"|||\u0939\u091c\u093c\u093e\u0930||\u0932\u093e\u0916||\u0915\u0970||\u0905\u0970||\u0916\u0970||\u0928\u0940\u0932",ordinal:function(){return"."},digitGroupingStyle:[3,2],numeralSystem:["\u0966","\u0967","\u0968","\u0969","\u096a","\u096b","\u096c","\u096d","\u096e","\u096f"]}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"id",delimiters:{thousands:".",decimal:","},abbreviations:"|||rb|||jt|||M|||T",ordinal:function(){return"."}}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"ja",delimiters:{thousands:",",decimal:"."},abbreviations:"||||\u4e07||||\u5104||||\u5146",ordinal:function(){return"."},digitGroupingStyle:[4]}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"pt",delimiters:{thousands:".",decimal:","},abbreviations:"|||mil|||mi|||bi|||tri",ordinal:function(){return"\xba"}}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"ru",delimiters:{thousands:" ",decimal:","},abbreviations:"|||\u0442\u044b\u0441.|||\u043c\u043b\u043d.|||\u043c\u043b\u0440\u0434.|||\u0442\u0440\u043b\u043d.",ordinal:function(){return"."}}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"zh",delimiters:{thousands:",",decimal:"."},abbreviations:"||||\u4e07||||\u4ebf||||\u4e07\u4ebf",ordinal:function(){return"."},digitGroupingStyle:[4]}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(93)),o=(n(96),{id:"format-number-interface",title:"format() interface",sidebar_label:"format() interface"}),u={unversionedId:"format-number-interface",id:"format-number-interface",isDocsHomePage:!1,title:"format() interface",description:'Examples on this page are formatted with the "en" locale:',source:"@site/docs\\format-number-interface.md",slug:"/format-number-interface",permalink:"/numerable/docs/format-number-interface",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/format-number-interface.md",version:"current",sidebar_label:"format() interface"},l=[{value:"format() interface",id:"format-interface",children:[]},{value:"error",id:"error",children:[]},{value:"Return type",id:"return-type",children:[]}],s={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Examples on this page are formatted with the "en" locale:'),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("strong",{parentName:"li"},","),'" for thousands separator (or grouping)'),Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("strong",{parentName:"li"},"."),'" for decimals separator (or fraction digits)'))),Object(i.b)("h2",{id:"format-interface"},"format() interface"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"format(1234.56, '0,0.0'); // Returns \"1,234.6\"\n\nformat(1234.56, '0,0.00', { nullFormat: '-' }); // Returns \"1,234.560\"\n\nformat(1234.56); // Returns \"1,234.560\"\n\nformat(1234.56, { locale: en }); // Returns \"1,234.560\"\n\nformat(null, '0,0.00', '-'); // Returns \"-\"\nformat(undefined, '0,0.00', '-'); // Returns \"-\"\nformat(NaN, '0,0.00', '-'); // Returns \"-\"\n")),Object(i.b)("h2",{id:"error"},"error"),Object(i.b)("p",null,"If an error occurs during the format process, an empty string will be returned."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const brokenRoundingFunction = () => { throw new Error(); };\nformat(1, '0.00', { rounding: brokenRoundingFunction }); // Returns \"\"\n")),Object(i.b)("h2",{id:"return-type"},"Return type"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"format()"))," function will always return an string.",Object(i.b)("br",{parentName:"p"}),"\n","If you implement your own ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/"}),"format (see here how to implement custom formats)"),", be sure that you always return an string. Otherwise numerable will fallback to an empty string.  "))}c.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||i;return n?a.a.createElement(m,u(u({ref:t},s),{},{components:n})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";var r=n(94),a=n(0),i=n.n(a),o=n(97),u=n.n(o),l=n(155),s=n(55),c=n.n(s),d=n(98);t.a=function(e){var t=e.defaultPattern,n=e.defaultValue,o=e.localeSelector,s=e.editable,f=void 0===s||s,p=Object(a.useState)(null!=t?t:"0,0.00"),m=p[0],b=p[1],h=Object(a.useState)(null!=n?n:"1234.567"),y=h[0],v=h[1],g=Object(a.useState)("en"),O=g[0],j=g[1],w="null"===y?null:"undefined"!==y?parseFloat(y):void 0,P=function(e){return j(e.target.value)},_={en:null,"en-in":d.enIN,zh:d.zh,hi:d.hi,"ar-eg":d.arEG}[O],E=Object(l.a)(w,m,{locale:_});return i.a.createElement("div",null,i.a.createElement("div",{className:"margin-bottom--md"},!!o&&i.a.createElement("div",null,i.a.createElement("input",{type:"radio",value:"en",onChange:P,checked:"en"===O})," en",i.a.createElement("input",{type:"radio",value:"en-in",onChange:P,checked:"en-in"===O})," en-IN",i.a.createElement("input",{type:"radio",value:"zh",onChange:P,checked:"zh"===O})," zh",i.a.createElement("input",{type:"radio",value:"hi",onChange:P,checked:"hi"===O})," hi",i.a.createElement("input",{type:"radio",value:"ar-eg",onChange:P,checked:"ar-eg"===O})," ar-eg"),i.a.createElement("div",{className:c.a.playgroundCodeContainer},i.a.createElement("div",null,i.a.createElement("span",{className:c.a.functionNameColor}," formatNumber"),i.a.createElement("span",{className:c.a.neutralCodeColor},"("),i.a.createElement(u.a,{inputClassName:Object(r.a)(c.a.playgroundInput,c.a.numberColor),value:y,onChange:function(e){return v(e.target.value)},minWidth:28,disabled:!f}),i.a.createElement("span",{className:c.a.neutralCodeColor},",\xa0"),i.a.createElement("span",{className:c.a.stringColor},"'"),i.a.createElement(u.a,{inputClassName:Object(r.a)(c.a.playgroundInput,c.a.stringColor),value:m,onChange:function(e){return b(e.target.value)},minWidth:28,disabled:!f}),i.a.createElement("span",{className:c.a.stringColor},"'"),"en"!==O&&i.a.createElement("span",{className:c.a.neutralCodeColor},", { locale: ",{en:"en","en-in":"enIN",zh:"zh",hi:"hi","ar-eg":"arEG"}[O]," }"),i.a.createElement("span",{className:c.a.neutralCodeColor},");")),i.a.createElement("div",null,i.a.createElement("span",{className:Object(r.a)(c.a.commentColor,c.a.resultLine)},"// Returns '",E,"'")))))}},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),o=l(i),u=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var s={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},c=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],d=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},f=!("undefined"==typeof window||!window.navigator)&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),p=function(){return f?"_"+Math.random().toString(36).substr(2,12):void 0},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.inputRef=function(e){n.input=e,"function"==typeof n.props.inputRef&&n.props.inputRef(e)},n.placeHolderSizerRef=function(e){n.placeHolderSizer=e},n.sizerRef=function(e){n.sizer=e},n.state={inputWidth:e.minWidth,inputId:e.id||p()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.id;t!==this.props.id&&this.setState({inputId:t||p()})}},{key:"componentDidUpdate",value:function(e,t){t.inputWidth!==this.state.inputWidth&&"function"==typeof this.props.onAutosize&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(this.mounted&&window.getComputedStyle){var e=this.input&&window.getComputedStyle(this.input);e&&(d(e,this.sizer),this.placeHolderSizer&&d(e,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(this.mounted&&this.sizer&&void 0!==this.sizer.scrollWidth){var e=void 0;e=this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:this.sizer.scrollWidth+2,(e+="number"===this.props.type&&void 0===this.props.extraWidth?16:parseInt(this.props.extraWidth)||0)<this.props.minWidth&&(e=this.props.minWidth),e!==this.state.inputWidth&&this.setState({inputWidth:e})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var e=this.props.injectStyles;return f&&e?o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var e=[this.props.defaultValue,this.props.value,""].reduce((function(e,t){return null!=e?e:t})),t=r({},this.props.style);t.display||(t.display="inline-block");var n=r({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(this.props,[]);return function(e){c.forEach((function(t){return delete e[t]}))}(a),a.className=this.props.inputClassName,a.id=this.state.inputId,a.style=n,o.default.createElement("div",{className:this.props.className,style:t},this.renderStyles(),o.default.createElement("input",r({},a,{ref:this.inputRef})),o.default.createElement("div",{ref:this.sizerRef,style:s},e),this.props.placeholder?o.default.createElement("div",{ref:this.placeHolderSizerRef,style:s},this.props.placeholder):null)}}]),t}(i.Component);m.propTypes={className:u.default.string,defaultValue:u.default.any,extraWidth:u.default.oneOfType([u.default.number,u.default.string]),id:u.default.string,injectStyles:u.default.bool,inputClassName:u.default.string,inputRef:u.default.func,inputStyle:u.default.object,minWidth:u.default.oneOfType([u.default.number,u.default.string]),onAutosize:u.default.func,onChange:u.default.func,placeholder:u.default.string,placeholderIsMinWidth:u.default.bool,style:u.default.object,value:u.default.any},m.defaultProps={minWidth:1,injectStyles:!0},t.default=m},98:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.zh=t.ru=t.pt=t.ja=t.id=t.hi=t.fr=t.es=t.en=t.enIN=t.enGB=t.de=t.ar=t.arEG=void 0;var a=n(99);Object.defineProperty(t,"arEG",{enumerable:!0,get:function(){return r(a).default}});var i=n(100);Object.defineProperty(t,"ar",{enumerable:!0,get:function(){return r(i).default}});var o=n(101);Object.defineProperty(t,"de",{enumerable:!0,get:function(){return r(o).default}});var u=n(102);Object.defineProperty(t,"enGB",{enumerable:!0,get:function(){return r(u).default}});var l=n(103);Object.defineProperty(t,"enIN",{enumerable:!0,get:function(){return r(l).default}});var s=n(104);Object.defineProperty(t,"en",{enumerable:!0,get:function(){return r(s).default}});var c=n(105);Object.defineProperty(t,"es",{enumerable:!0,get:function(){return r(c).default}});var d=n(106);Object.defineProperty(t,"fr",{enumerable:!0,get:function(){return r(d).default}});var f=n(107);Object.defineProperty(t,"hi",{enumerable:!0,get:function(){return r(f).default}});var p=n(108);Object.defineProperty(t,"id",{enumerable:!0,get:function(){return r(p).default}});var m=n(109);Object.defineProperty(t,"ja",{enumerable:!0,get:function(){return r(m).default}});var b=n(110);Object.defineProperty(t,"pt",{enumerable:!0,get:function(){return r(b).default}});var h=n(111);Object.defineProperty(t,"ru",{enumerable:!0,get:function(){return r(h).default}});var y=n(112);Object.defineProperty(t,"zh",{enumerable:!0,get:function(){return r(y).default}})},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={code:"ar-eg",delimiters:{thousands:"\u066c",decimal:"\u066b"},abbreviations:"|||\u0623\u0644\u0641\u200e|||\u0645\u0644\u064a\u0648\u0646\u200e|||\u0645\u0644\u064a\u0627\u0631\u200e|||\u062a\u0631\u0644\u064a\u0648\u0646\u200e",ordinal:function(){return"."},numeralSystem:["\u0660","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"].map((function(e){return e+"\u200e"}))};t.default=r}}]);