(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(93)),c={id:"number-pattern",title:"Number pattern",sidebar_label:"Number pattern"},o={unversionedId:"number-pattern",id:"number-pattern",isDocsHomePage:!1,title:"Number pattern",description:'Examples on this page are formatted with the "en" locale:',source:"@site/docs\\number-pattern.md",slug:"/number-pattern",permalink:"/numerable/docs/number-pattern",version:"current",sidebar_label:"Number pattern"},l=[{value:"- Optional decimals",id:"--optional-decimals",children:[]},{value:"- No decimals limit",id:"--no-decimals-limit",children:[]},{value:"- Strict optional decimals",id:"--strict-optional-decimals",children:[]},{value:"- Minimum decimals",id:"--minimum-decimals",children:[]},{value:"- Rounding",id:"--rounding",children:[]},{value:"- Number sign",id:"--number-sign",children:[{value:"- Forced sign",id:"--forced-sign",children:[]},{value:"- Negative sign at the right",id:"--negative-sign-at-the-right",children:[]},{value:"- Forced sign at the right",id:"--forced-sign-at-the-right",children:[]},{value:"- Parentheses",id:"--parentheses",children:[]}]}],m={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Examples on this page are formatted with the "en" locale:'),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("strong",{parentName:"li"},","),'" for thousands separator (or grouping)'),Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("strong",{parentName:"li"},"."),'" for decimals separator (or fraction digits)'))),Object(i.b)("h2",{id:"--optional-decimals"},"- Optional decimals"),Object(i.b)("p",null,'You can define optional decimals in the number pattern with the "',Object(i.b)("strong",{parentName:"p"},"#"),'" character.  '),Object(i.b)("p",null,"This will show as many decimals as defined but only in the case that the provided value has that amount of decimals.\nThis can be understood as the ",Object(i.b)("em",{parentName:"p"},"maximum amount of decimals"),"."),Object(i.b)("p",null,'The "',Object(i.b)("strong",{parentName:"p"},"#"),'" format causes the value to be rounded to the nearest digit preceding the decimal. For example, formatting 34.57 with the pattern ',Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},'"0.#"'))," would result in the value 34.6.  "),Object(i.b)("p",null,"The optional decimals character can also be mixed with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#--minimum-decimals"}),"minimum decimals")," character (",Object(i.b)("strong",{parentName:"p"},"0"),"). So a pattern like ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},'"0.00##"'))," will define a minimum amount of 2 decimals, and a maximum amount of 4.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"formatNumber(1234.23405, '0.#'); // Returns \"1234.2\"\nformatNumber(1234.23405, '0.##'); // Returns \"1234.23\"\nformatNumber(1234.23405, '0.################'); // Returns \"1234.23405\"\nformatNumber(1234.5, '0.#'); // Returns \"1234.5\"\nformatNumber(1234.5, '0.##'); // Returns \"1234.5\"\nformatNumber(1234, '0.##'); // Returns \"1234\"\nformatNumber(1234, '0.00##'); // Returns \"1234.00\"\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"--no-decimals-limit"},"- No decimals limit"),Object(i.b)("p",null,'You can define a no-decimals-limit with the "',Object(i.b)("strong",{parentName:"p"},"X"),'" character as the last character in the number pattern.  '),Object(i.b)("p",null,"This works in the same way as the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#--optional-decimals"}),"optional decimals"),", but by defining a no-limit for the decimal places. So if for example, a number contains 10 decimals, with the pattern ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},'"0.X"'))," all of them will be shown."),Object(i.b)("p",null,"The no-decimals-limit character can also be mixed with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#--minimum-decimals"}),"minimum decimals")," character (",Object(i.b)("strong",{parentName:"p"},"0"),"). So a pattern like ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},'"0.00X"'))," will define a minimum amount of 2 decimals, and no maximum amount of decimals.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"formatNumber(1234.23405, '0.X'); // Returns \"1234.23405\"\nformatNumber(1, '0.00X'); // Returns \"1.00\"\nformatNumber(1.5, '0.00X'); // Returns \"1.50\"\nformatNumber(1.531, '0.00X'); // Returns \"1.531\"\nformatNumber(1.531001, '0.00X'); // Returns \"1.531001\"\nformatNumber(0.0000000000000000000123, '0.X'); // Returns \"0.0000000000000000000123\"\nformatNumber(50300.80808, '0,0.X'); // Returns \"50,300.80808\"\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"--strict-optional-decimals"},"- Strict optional decimals"),Object(i.b)("p",null,"If ","[.]"," is defined, only display the minimum and maximum decimals if the value has decimals."),Object(i.b)("h2",{id:"--minimum-decimals"},"- Minimum decimals"),Object(i.b)("p",null,"This is the minimum decimals explanation"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"--rounding"},"- Rounding"),Object(i.b)("p",null,"Here the rounding explanation"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"--number-sign"},"- Number sign"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"--forced-sign"},"- Forced sign"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"--negative-sign-at-the-right"},"- Negative sign at the right"),Object(i.b)("p",null,"negative sign with abbreviations and at the right, should put negative sign next to number '1.2- K' vs '1.2 K-'"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"--forced-sign-at-the-right"},"- Forced sign at the right"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"--parentheses"},"- Parentheses"))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),b=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,d=u["".concat(c,".").concat(p)]||u[p]||s[p]||i;return n?a.a.createElement(d,o(o({ref:t},m),{},{components:n})):a.a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var m=2;m<i;m++)c[m]=n[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);