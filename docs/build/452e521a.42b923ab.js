(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(93));const a={id:"with-options",title:".withOptions()",sidebar_label:".withOptions()"},i={unversionedId:"with-options",id:"with-options",isDocsHomePage:!1,title:".withOptions()",description:"---",source:"@site/docs\\with-options.md",slug:"/with-options",permalink:"/numerable/docs/with-options",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/with-options.md",version:"current",sidebar_label:".withOptions()"},c=[{value:"Usage",id:"usage",children:[]}],l={rightToc:c};function u({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// my-app/utils/format.js\n\nimport { es, fr, enIN } from 'numerable/locale';\nimport { format } from 'numerable';\n\nconst locales = { es, fr, 'en-in': enIN };\n\nexport const format = format.withOptions({\n    defaultPattern: '0,0.000',\n    nullFormat: 'N/A',\n    rounding: 'truncate',\n    locale: () => {\n        return locales[window.__myLocaleId__];\n    },\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Later...\n\nimport format from 'my-app/utils/format';\n\u200b\n// Using the defaultPattern ('0,0.000') defined in .withOptions()\nformat(123456789.12);\n// => \"123,456,789.120\"\n\n// Using the nullFormat ('N/A') defined in .withOptions()\nformat(null, '0.00');\n// => \"N/A\"\n\n// Using the rounding ('truncate') defined in .withOptions()\nformat(1.28, '0.0');\n// => \"1,2\"\n\n// Using the locale resolved from the locale function in .withOptions()\nwindow.__myLocaleId__ = 'fr';\nformat(1234.56, '0,0.000');\n// => \"1 234,560\"\n\u200b\n")))}u.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);