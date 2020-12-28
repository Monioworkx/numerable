(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={code:"ar",delimiters:{thousands:"\u066c",decimal:"\u066b"},abbreviations:"|||\u0623\u0644\u0641\u200e|||\u0645\u0644\u064a\u0648\u0646\u200e|||\u0645\u0644\u064a\u0627\u0631\u200e|||\u062a\u0631\u0644\u064a\u0648\u0646\u200e",ordinal:function(){return"."},numeralSystem:["\u0660","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"].map((function(e){return e+"\u200e"}))};t.default=n},101:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"de",delimiters:{thousands:".",decimal:","},abbreviations:"||||||Mio.|||Mrd.|||Bio.",ordinal:function(){return"."}}},102:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"en-gb",delimiters:{thousands:",",decimal:"."}}},103:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"en-in",delimiters:{thousands:",",decimal:"."},abbreviations:"|||T||L||Cr|||TCr||LCr",digitGroupingStyle:[3,2]}},104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"en",delimiters:{thousands:",",decimal:"."},abbreviations:"|||K|||M|||B|||T",ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"}}},105:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"es",delimiters:{thousands:".",decimal:","},abbreviations:"|||mil|||M|||mil M|||B",ordinal:function(){return"\xba"}}},106:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"fr",delimiters:{thousands:" ",decimal:","},abbreviations:"|||k|||M|||Md|||Bn",ordinal:function(e){return 1===e?"er":"e"}}},107:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"hi",delimiters:{thousands:",",decimal:"."},abbreviations:"|||\u0939\u091c\u093c\u093e\u0930||\u0932\u093e\u0916||\u0915\u0970||\u0905\u0970||\u0916\u0970||\u0928\u0940\u0932",ordinal:function(){return"."},digitGroupingStyle:[3,2],numeralSystem:["\u0966","\u0967","\u0968","\u0969","\u096a","\u096b","\u096c","\u096d","\u096e","\u096f"]}},108:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"id",delimiters:{thousands:".",decimal:","},abbreviations:"|||rb|||jt|||M|||T",ordinal:function(){return"."}}},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"ja",delimiters:{thousands:",",decimal:"."},abbreviations:"||||\u4e07||||\u5104||||\u5146",ordinal:function(){return"."},digitGroupingStyle:[4]}},110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"pt",delimiters:{thousands:".",decimal:","},abbreviations:"|||mil|||mi|||bi|||tri",ordinal:function(){return"\xba"}}},111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"ru",delimiters:{thousands:" ",decimal:","},abbreviations:"|||\u0442\u044b\u0441.|||\u043c\u043b\u043d.|||\u043c\u043b\u0440\u0434.|||\u0442\u0440\u043b\u043d.",ordinal:function(){return"."}}},112:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={code:"zh",delimiters:{thousands:",",decimal:"."},abbreviations:"||||\u4e07||||\u4ebf||||\u4e07\u4ebf",ordinal:function(){return"."},digitGroupingStyle:[4]}},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),i=(a(0),a(93)),r=a(96);const o={id:"abbreviations",title:"Abbreviations",sidebar_label:"Abbreviations"},l={unversionedId:"abbreviations",id:"abbreviations",isDocsHomePage:!1,title:"Abbreviations",description:'Examples on this page are formatted with the "en" locale:',source:"@site/docs\\abbreviations.md",slug:"/abbreviations",permalink:"/numerable/docs/abbreviations",version:"current",sidebar_label:"Abbreviations"},c=[{value:"Abbreviation syntax",id:"abbreviation-syntax",children:[]},{value:"&quot;Automatic&quot; vs &quot;Specific&quot; abbreviation",id:"automatic-vs-specific-abbreviation",children:[]},{value:"Automatic abbreviation",id:"automatic-abbreviation",children:[]},{value:"Abbreviation bypass",id:"abbreviation-bypass",children:[]},{value:"Specific abbreviation scales",id:"specific-abbreviation-scales",children:[]},{value:"Language specific abbreviations",id:"language-specific-abbreviations",children:[]}],s={rightToc:c};function u({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Examples on this page are formatted with the "en" locale:'),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("strong",{parentName:"li"},","),'" for thousands separator (or grouping)'),Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("strong",{parentName:"li"},"."),'" for decimals separator (or fraction digits)'),Object(i.b)("li",{parentName:"ul"},'"K" | "M" | "B" | "T" for abbreviations.'))),Object(i.b)("hr",null),Object(i.b)("span",{style:{color:"#fc519f",fontWeight:"bold"}},"numerable")," provides an easy mechanism to round up any number with the key average.",Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)(r.a,{defaultValue:1e3,defaultPattern:"0.0 a",editable:!1,mdxType:"PlaygroundInputs"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that the abbreviation is language-specific. The examples on this page are presented using the 'en' culture."))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"abbreviation-syntax"},"Abbreviation syntax"),Object(i.b)("p",null,'The abbreviation pattern syntax is the "a" character followed by an optional specific abbreviation scale '),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\"a[k | m | b | t]\"\n\nformat(x, '0,0.0 a');\nformat(x, '0,0.0 ak');\nformat(x, '0,0.0 am');\nformat(x, '0,0.0 ab');\nformat(x, '0,0.0 at');\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"automatic-vs-specific-abbreviation"},'"Automatic" vs "Specific" abbreviation'),Object(i.b)("p",null,"Abbreviation can be ",Object(i.b)("strong",{parentName:"p"},"automatic")," if only the character ",Object(i.b)("strong",{parentName:"p"},"'a'")," is included in the format pattern, or ",Object(i.b)("strong",{parentName:"p"},"'specific'")," if an specific abbreviation scale symbol is provided ('k', 'm', 'b', 't')."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Automatic example:\nformat(1000000, '0.0 a'); //=> '1.0 M'\n\n// Specific example:\nformat(1000000, '0.0 ak'); //=> '1000.0 K'\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"automatic-abbreviation"},"Automatic abbreviation"),Object(i.b)("p",null,"If abbreviation is automatic (",Object(i.b)("inlineCode",{parentName:"p"},'"0 a"'),"), ",Object(i.b)("span",{style:{color:"#fc519f",fontWeight:"bold"}},"numerable")," will scale the number to the ",Object(i.b)("em",{parentName:"p"},"best")," abbreviation found in the locale abbreviations (See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"locale"}),"NumerableLocale")," abbreviations).  "),Object(i.b)("h5",{id:"examples-with-automatic-abbreviation"},"Examples with automatic abbreviation"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// With english locale (en)\nformat(1000, '0.0 a'); //=> '1.0 K'\nformat(981234.56999919, '0.00 a'); //=> '981.23 K'\nformat(1000000, '0.0 a'); //=> '1.0 M'\nformat(1000000000, '0.0 a'); //=> '1.0 B'\nformat(1000000000000, '0.0 a'); //=> '1.0 T'\nformat(1000000000000000, '0.0 a'); //=> '1000.0 T'\n\n\n/**\n * With chinese locale (zh)\n * <i> Note that zh locale doesn't scale on thousands.\n *     It scales on each 10 thousand.\n */ \nimport { zh } from 'numerable/locale';\nformat(1000, '0.0 a', { locale: zh }) //=> '1000.0'\nformat(10000, '0.0 a', { locale: zh }) //=> '1.0 \u4e07'\nformat(100000000, '0.0 a', { locale: zh }) //=> '1.0 \u4ebf'\n\n\n/**\n * With english-india locale (en-in)\n * <i> Note that en-in locale abbreviates following a custom pattern.\n *     The pattern is: '|||T||L||Cr|||TCr||LCr'\n */ \nimport { enIN } from 'numerable/locale';\nformat(1000, '0.0 a', { locale: enIN }) //=> '1.0 T'\nformat(100000, '0.0 a', { locale: enIN }) //=> '1.0 L'\nformat(10000000, '0.0 a', { locale: enIN }) //=> '1.0 Cr'\nformat(10000000000, '0.0 a', { locale: enIN }) //=> '1.0 TCr'\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The maximum abbreviation depends on the locale (See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"locale"}),"NumerableLocale")," abbreviations). For the language used on most of the examples of this page (",Object(i.b)("strong",{parentName:"p"},"en"),') is "trillion". Therefore, if a bigger number is provided, then it will still scale the number to the "trillion" unit. You can always define a bigger abbreviation on the ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"locale"}),"NumerableLocale"),"."),Object(i.b)("h5",Object(n.a)({parentName:"div"},{id:"example-1"}),"Example"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(1000000000000000, '0.0 a'); //=> '1000.0 T'\nformat(1000000000000000000, '0.0 a'); //=> '1000000.0 T'\n")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"abbreviation-bypass"},"Abbreviation bypass"),Object(i.b)("p",null,"If the number is smaller than the first defined abbreviation on the locale abbreviations (See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"locale"}),"NumerableLocale"),"), and the abbreviation is automatic, then the abbreviation will be ommited."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(10.23, '0.00 a'); //=> '10.23'\nformat(0.123, '0.000 a'); //=> '0.123'\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"specific-abbreviation-scales"},"Specific abbreviation scales"),Object(i.b)("p",null,"Abbreviation scaling can be specifically defined. This is achieved by appending an specific abbreviation scale symbol ('k' | 'm' | 'b' | 't') after the 'a' character. This will try forcing the abbreviation to the defined scale unit."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"'",Object(i.b)("strong",{parentName:"li"},"ak"),"': thousand scaling."),Object(i.b)("li",{parentName:"ul"},"'",Object(i.b)("strong",{parentName:"li"},"am"),"': million scaling."),Object(i.b)("li",{parentName:"ul"},"'",Object(i.b)("strong",{parentName:"li"},"ab"),"': billion scaling (in short scale)."),Object(i.b)("li",{parentName:"ul"},"'",Object(i.b)("strong",{parentName:"li"},"at"),"': trillion scaling (in short scale).")),Object(i.b)("h5",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// For english\nformat(1234, '0.00 ak'); //=> '1.23 K'\nformat(1222333, '0.00 ak'); //=> '1222.33 K'\nformat(10.23, '0.00 ak'); //=> '0.01 K'\nformat(12345.05, '0.000 am'); //=> '0.012 M'\nformat(1333555777999, '0.0 ab'); //=> '1333.6 B'\nformat(1333555777999, '0.0 at'); //=> '1.3 T'\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that not all languages have an abbreviation for the specified unit. For example, chinese doesn't have an abbreviation for ",Object(i.b)("em",{parentName:"p"},"thousand"),", so it will look (first up, then down) for the closest abbreviation to a thousand (that in the following example will be 10 thousand).",Object(i.b)("br",{parentName:"p"}),"\n","The rule is: it will use the closest available abbreviation to the specified forced unit (in terms of power of 10) and it will try giving priority to the upper one. And that means, the closest available abbreviation to a thousand, the closest available abbreviation to a million..."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// For chinese\nimport { zh } from 'numerable/locale';\nformat(1234.567, '0,0.00 ak', { locale: zh }); //=> '0.12 \u4e07'\n")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"language-specific-abbreviations"},"Language specific abbreviations"),Object(i.b)("p",null,"Abbreviations are language specific. The format resulting abbreviation will be the one defined on the specified locale."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// For italian\nimport { it } from 'numerable/locale';\nformat(1234, '0.00 ak', { locale: it }); //=> '1.23 mila'\n\n// For czech\nimport { cs } from 'numerable/locale';\nformat(1234, '0.00 ak', { locale: cs }); //=> '1.23 tis.'\n")),Object(i.b)("p",null,"You can try different languages here:"),Object(i.b)(r.a,{defaultValue:1e4,defaultPattern:"0.0 a",editable:!1,localeSelector:!0,mdxType:"PlaygroundInputs"}))}u.isMDXComponent=!0},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,f=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return a?i.a.createElement(f,l(l({ref:t},s),{},{components:a})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";var n=a(94),i=a(0),r=a.n(i),o=a(97),l=a.n(o),c=a(155),s=a(55),u=a.n(s),b=a(98);t.a=function(e){var t=e.defaultPattern,a=e.defaultValue,o=e.localeSelector,s=e.editable,d=void 0===s||s,p=Object(i.useState)(null!=t?t:"0,0.00"),f=p[0],m=p[1],h=Object(i.useState)(null!=a?a:"1234.567"),v=h[0],j=h[1],O=Object(i.useState)("en"),g=O[0],y=O[1],N="null"===v?null:"undefined"!==v?parseFloat(v):void 0,w=function(e){return y(e.target.value)},S={en:null,"en-in":b.enIN,zh:b.zh,hi:b.hi,"ar-eg":b.arEG}[g],P=Object(c.a)(N,f,{locale:S});return r.a.createElement("div",null,r.a.createElement("div",{className:"margin-bottom--md"},!!o&&r.a.createElement("div",null,r.a.createElement("input",{type:"radio",value:"en",onChange:w,checked:"en"===g})," en",r.a.createElement("input",{type:"radio",value:"en-in",onChange:w,checked:"en-in"===g})," en-IN",r.a.createElement("input",{type:"radio",value:"zh",onChange:w,checked:"zh"===g})," zh",r.a.createElement("input",{type:"radio",value:"hi",onChange:w,checked:"hi"===g})," hi",r.a.createElement("input",{type:"radio",value:"ar-eg",onChange:w,checked:"ar-eg"===g})," ar-eg"),r.a.createElement("div",{className:u.a.playgroundCodeContainer},r.a.createElement("div",null,r.a.createElement("span",{className:u.a.functionNameColor}," formatNumber"),r.a.createElement("span",{className:u.a.neutralCodeColor},"("),r.a.createElement(l.a,{inputClassName:Object(n.a)(u.a.playgroundInput,u.a.numberColor),value:v,onChange:function(e){return j(e.target.value)},minWidth:28,disabled:!d}),r.a.createElement("span",{className:u.a.neutralCodeColor},",\xa0"),r.a.createElement("span",{className:u.a.stringColor},"'"),r.a.createElement(l.a,{inputClassName:Object(n.a)(u.a.playgroundInput,u.a.stringColor),value:f,onChange:function(e){return m(e.target.value)},minWidth:28,disabled:!d}),r.a.createElement("span",{className:u.a.stringColor},"'"),"en"!==g&&r.a.createElement("span",{className:u.a.neutralCodeColor},", { locale: ",{en:"en","en-in":"enIN",zh:"zh",hi:"hi","ar-eg":"arEG"}[g]," }"),r.a.createElement("span",{className:u.a.neutralCodeColor},");")),r.a.createElement("div",null,r.a.createElement("span",{className:Object(n.a)(u.a.commentColor,u.a.resultLine)},"// Returns '",P,"'")))))}},97:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=c(r),l=c(a(1));function c(e){return e&&e.__esModule?e:{default:e}}var s={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},u=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],b=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},d=!("undefined"==typeof window||!window.navigator)&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),p=function(){return d?"_"+Math.random().toString(36).substr(2,12):void 0},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.inputRef=function(e){a.input=e,"function"==typeof a.props.inputRef&&a.props.inputRef(e)},a.placeHolderSizerRef=function(e){a.placeHolderSizer=e},a.sizerRef=function(e){a.sizer=e},a.state={inputWidth:e.minWidth,inputId:e.id||p()},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.id;t!==this.props.id&&this.setState({inputId:t||p()})}},{key:"componentDidUpdate",value:function(e,t){t.inputWidth!==this.state.inputWidth&&"function"==typeof this.props.onAutosize&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(this.mounted&&window.getComputedStyle){var e=this.input&&window.getComputedStyle(this.input);e&&(b(e,this.sizer),this.placeHolderSizer&&b(e,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(this.mounted&&this.sizer&&void 0!==this.sizer.scrollWidth){var e=void 0;e=this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:this.sizer.scrollWidth+2,(e+="number"===this.props.type&&void 0===this.props.extraWidth?16:parseInt(this.props.extraWidth)||0)<this.props.minWidth&&(e=this.props.minWidth),e!==this.state.inputWidth&&this.setState({inputWidth:e})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var e=this.props.injectStyles;return d&&e?o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var e=[this.props.defaultValue,this.props.value,""].reduce((function(e,t){return null!=e?e:t})),t=n({},this.props.style);t.display||(t.display="inline-block");var a=n({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),i=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(this.props,[]);return function(e){u.forEach((function(t){return delete e[t]}))}(i),i.className=this.props.inputClassName,i.id=this.state.inputId,i.style=a,o.default.createElement("div",{className:this.props.className,style:t},this.renderStyles(),o.default.createElement("input",n({},i,{ref:this.inputRef})),o.default.createElement("div",{ref:this.sizerRef,style:s},e),this.props.placeholder?o.default.createElement("div",{ref:this.placeHolderSizerRef,style:s},this.props.placeholder):null)}}]),t}(r.Component);f.propTypes={className:l.default.string,defaultValue:l.default.any,extraWidth:l.default.oneOfType([l.default.number,l.default.string]),id:l.default.string,injectStyles:l.default.bool,inputClassName:l.default.string,inputRef:l.default.func,inputStyle:l.default.object,minWidth:l.default.oneOfType([l.default.number,l.default.string]),onAutosize:l.default.func,onChange:l.default.func,placeholder:l.default.string,placeholderIsMinWidth:l.default.bool,style:l.default.object,value:l.default.any},f.defaultProps={minWidth:1,injectStyles:!0},t.default=f},98:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.zh=t.ru=t.pt=t.ja=t.id=t.hi=t.fr=t.es=t.en=t.enIN=t.enGB=t.de=t.ar=t.arEG=void 0;var i=a(99);Object.defineProperty(t,"arEG",{enumerable:!0,get:function(){return n(i).default}});var r=a(100);Object.defineProperty(t,"ar",{enumerable:!0,get:function(){return n(r).default}});var o=a(101);Object.defineProperty(t,"de",{enumerable:!0,get:function(){return n(o).default}});var l=a(102);Object.defineProperty(t,"enGB",{enumerable:!0,get:function(){return n(l).default}});var c=a(103);Object.defineProperty(t,"enIN",{enumerable:!0,get:function(){return n(c).default}});var s=a(104);Object.defineProperty(t,"en",{enumerable:!0,get:function(){return n(s).default}});var u=a(105);Object.defineProperty(t,"es",{enumerable:!0,get:function(){return n(u).default}});var b=a(106);Object.defineProperty(t,"fr",{enumerable:!0,get:function(){return n(b).default}});var d=a(107);Object.defineProperty(t,"hi",{enumerable:!0,get:function(){return n(d).default}});var p=a(108);Object.defineProperty(t,"id",{enumerable:!0,get:function(){return n(p).default}});var f=a(109);Object.defineProperty(t,"ja",{enumerable:!0,get:function(){return n(f).default}});var m=a(110);Object.defineProperty(t,"pt",{enumerable:!0,get:function(){return n(m).default}});var h=a(111);Object.defineProperty(t,"ru",{enumerable:!0,get:function(){return n(h).default}});var v=a(112);Object.defineProperty(t,"zh",{enumerable:!0,get:function(){return n(v).default}})},99:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={code:"ar-eg",delimiters:{thousands:"\u066c",decimal:"\u066b"},abbreviations:"|||\u0623\u0644\u0641\u200e|||\u0645\u0644\u064a\u0648\u0646\u200e|||\u0645\u0644\u064a\u0627\u0631\u200e|||\u062a\u0631\u0644\u064a\u0648\u0646\u200e",ordinal:function(){return"."},numeralSystem:["\u0660","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"].map((function(e){return e+"\u200e"}))};t.default=n}}]);