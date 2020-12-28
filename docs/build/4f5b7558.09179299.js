(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));var l=n(3),r=(n(0),n(93));const b={id:"locale",title:"Locale",sidebar_label:"Locale",slug:"locale"},o={unversionedId:"locale",id:"locale",isDocsHomePage:!1,title:"Locale",description:"---",source:"@site/docs\\locale.md",slug:"/locale",permalink:"/numerable/docs/locale",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/locale.md",version:"current",sidebar_label:"Locale"},c=[{value:"Description",id:"description",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Properties",id:"properties",children:[]}],a={rightToc:c};function i({components:e,...t}){return Object(r.b)("wrapper",Object(l.a)({},a,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"A locale object.",Object(r.b)("br",{parentName:"p"}),"\n","If you don't specify a locale in options, default locale is ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"en")),".  "),Object(r.b)("hr",null),Object(r.b)("h2",{id:"interface"},"Interface"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-typescript"}),"interface Locale {\n    code: string;\n\n    delimiters?: {\n        thousands: string;\n        decimal: string;\n    };\n\n    abbreviations?: string;\n\n    ordinal?: (value: number) => string;\n\n    digitGroupingStyle?: number[];\n\n    numeralSystem?: string[];\n}\n")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("td",null," Name "),Object(r.b)("td",null," Type "),Object(r.b)("td",null," Description "))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"code")," ",Object(r.b)("br",null)," (optional) "),Object(r.b)("td",null," string "),Object(r.b)("td",null," the locale code (ISO 639-1 + optional country code) ")),Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"delimiters")," ",Object(r.b)("br",null)," (optional) "),Object(r.b)("td",null," Object "),Object(r.b)("td",null,'Default are english delimiters ("," for grouping, and "." for decimals) ',Object(r.b)("br",null),"Take into account that delimiters have to be different from each other in order to be valid. ",Object(r.b)("br",null),"Properties",Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("td",null," Name "),Object(r.b)("td",null," Type "),Object(r.b)("td",null," Description "))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"thousands")," "),Object(r.b)("td",null," string "),Object(r.b)("td",null," The grouping delimiter ")),Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"decimal")," "),Object(r.b)("td",null," string "),Object(r.b)("td",null," The decimal delimiter  ")))))),Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"abbreviations")," ",Object(r.b)("br",null)," (optional) "),Object(r.b)("td",null," string "),Object(r.b)("td",null,"The localized abbreviations in the following format:  ",Object(r.b)("br",null),"For ",Object(r.b)("strong",null,"en"),': "|||K|||M|||B|||T" ',Object(r.b)("br",null),"The default abbreviation pattern would be the ",Object(r.b)("strong",null,"en")," (shown in previous line). ",Object(r.b)("br",null),'Each one of the pipes define the power of ten for the specified abbreviation. So, for the previous example, "K" will be applied to 1000, "M" to 1000000 (one million)...  ',Object(r.b)("br",null),"This allows using different types of abbreviation for languages like chinese, where the abbreviations are applied on 10000 (ten thousand) and not 1000.  ",Object(r.b)("br",null),"For example: ",Object(r.b)("br",null),Object(r.b)("strong",null,"zh"),': "||||\u4e07||||\u4ebf||||\u4e07\u4ebf" ',Object(r.b)("br",null),Object(r.b)("strong",null,"en-in"),': "|||T||L||Cr|||TCr||LCr" ',Object(r.b)("br",null))),Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"ordinal")," ",Object(r.b)("br",null)," (optional) "),Object(r.b)("td",null," Function "),Object(r.b)("td",null,"The function that calculates the ordinal numbers suffix. ",Object(r.b)("br",null),"The default ordinal is ",Object(r.b)("strong",null,"en")," (1st, 2nd, 3rd...). This function receives a number, and returns an ordinal suffix. ",Object(r.b)("br",null),"Example: ",Object(r.b)("br",null),Object(r.b)("pre",null,"For ",Object(r.b)("strong",null,"fr"),": number => number === 1 ? 'er' : 'e'"))),Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"digitGroupingStyle")," ",Object(r.b)("br",null)," (optional) "),Object(r.b)("td",null," number[] "),Object(r.b)("td",null,"An array that defines the grouping style of the locale (thousands separator groups). ",Object(r.b)("br",null),"The default digitGroupingStyle is [3] ",Object(r.b)("br",null),"The array defines the order and size of the grouping. The last value of the array is the last defined group, that will be applied subsequently to the rest of the numbers. ",Object(r.b)("br",null),"Example (value: 12345678900, pattern: '0,0'): ",Object(r.b)("br",null),"[4,3] => '1,234,567,8900' ",Object(r.b)("br",null),"[4,2] => '1,23,45,67,8900' ",Object(r.b)("br",null),"[3,2] => '12,34,56,78,900' ",Object(r.b)("br",null),"[4] => '123,4567,8900'")),Object(r.b)("tr",null,Object(r.b)("td",null," ",Object(r.b)("strong",null,"numeralSystem")," ",Object(r.b)("br",null)," (optional) "),Object(r.b)("td",null," string[] "),Object(r.b)("td",null,"An array that works as a map for the digits, from 0 to 9. ",Object(r.b)("br",null),"The default numeralSystem is Latin (0123456789). ",Object(r.b)("br",null),"This map allows defining different numeral systems like for example Devanagari digits (\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f) or Arabic digits (\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669). ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"Example: ",Object(r.b)("br",null),"import arEG from 'numerable/locales/ar-eg'; ",Object(r.b)("br",null),"formatNumber(1234567890, '0,0', { locale: arEG });"," ",Object(r.b)("br",null),'// Returns "\u0661\u066c\u0662\u0663\u0664\u066c\u0665\u0666\u0667\u066c\u0668\u0669\u0660"')))))}i.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var l=n(0),r=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,o=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),s=u(n),O=l,p=s["".concat(o,".").concat(O)]||s[O]||d[O]||b;return n?r.a.createElement(p,c(c({ref:t},i),{},{components:n})):r.a.createElement(p,c({ref:t},i))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,o=new Array(b);o[0]=O;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var i=2;i<b;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);