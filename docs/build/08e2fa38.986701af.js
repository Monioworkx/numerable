(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),b=(a(0),a(93)),l={id:"value-types",title:"format() arguments",sidebar_label:"format() arguments"},m={unversionedId:"value-types",id:"value-types",isDocsHomePage:!1,title:"format() arguments",description:'Examples on this page are formatted with the "en" locale:',source:"@site/docs\\value-types.md",slug:"/value-types",permalink:"/numerable/docs/value-types",version:"current",sidebar_label:"format() arguments"},p=[{value:"Arguments",id:"arguments",children:[{value:"- <em>value</em> argument",id:"--value-argument",children:[]},{value:"- <em>pattern</em> argument",id:"--pattern-argument",children:[]},{value:"- <em>options</em> argument",id:"--options-argument",children:[]}]}],o={toc:p};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},'Examples on this page are formatted with the "en" locale:'),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},'"',Object(b.b)("strong",{parentName:"li"},","),'" for thousands separator (or grouping)'),Object(b.b)("li",{parentName:"ul"},'"',Object(b.b)("strong",{parentName:"li"},"."),'" for decimals separator (or fraction digits)'))),Object(b.b)("h2",{id:"arguments"},"Arguments"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"--value-argument"},"- ",Object(b.b)("em",{parentName:"h3"},"value")," argument"),Object(b.b)("p",null,"type: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"number"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"string"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"null"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"undefined"))),Object(b.b)("p",null,"The provided value argument can be of type:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"number"),": If value is a ",Object(b.b)("strong",{parentName:"p"},"finite number")," and not NaN, Infinity or -Infinity."),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"It will be formatted with the provided pattern.",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(1234.56, '0,0.0'); // Returns \"1,234.6\"\n"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"string"),": If the type of the value is a ",Object(b.b)("strong",{parentName:"p"},"string")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"parseFloat()")," will be applied to the given string, and then it will be processed as either ",Object(b.b)("strong",{parentName:"p"},"number")," or ",Object(b.b)("strong",{parentName:"p"},"NaN"),", depending on the parsing result.  "),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format('1234.56', '0,0.0'); // Returns \"1,234.6\"\n")),Object(b.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},Object(b.b)("strong",{parentName:"p"},"numeraljs")," applies ",Object(b.b)("em",{parentName:"p"},"unformat")," if an string is passed to numeral() (e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"numeral('1,234.5')"),"). But ",Object(b.b)("strong",{parentName:"p"},"numerable")," applies ",Object(b.b)("strong",{parentName:"p"},"parseFloat"),". If an ",Object(b.b)("em",{parentName:"p"},"unformat")," process is required, you should call unformat explicitly (e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"format(parse('1,234.5'), '0,0.00')"),")  "),Object(b.b)("pre",{parentName:"div"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"numeral('1,234').format('0.00'); // Returns \"1,234.00\"\n\nformat('1,234', '0.00'); // Returns \"1.00\", because the result of parseFloat('1,234') is 1\nformat(parse('1,234'), '0.00'); // // Returns \"1,234.00\"\n"))))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"null"),": If the type of the value is ",Object(b.b)("strong",{parentName:"p"},"null")," or ",Object(b.b)("strong",{parentName:"p"},"undefined")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"It will be formatted as ",Object(b.b)("strong",{parentName:"p"},'""')," (empty string).  "),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(null, '0.00'); // Returns \"\"\nformat(undefined, '0.00'); // Returns \"\"\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"If a ",Object(b.b)("strong",{parentName:"p"},"nullFormat")," was provided in the options, in the instance options, or defined in the global options, then the ",Object(b.b)("strong",{parentName:"p"},"nullFormat")," will be returned. See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/"}),"FormatOptions")," for details.  "),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(null, '0.00'); // Returns \"\"\nformat(null, '0.00', { nullFormat: 'N/A' }); // Returns \"N/A\"\nformat(undefined, '0.00', { nullFormat: 'N/A' }); // Returns \"N/A\"\n")),Object(b.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},Object(b.b)("strong",{parentName:"p"},"numeraljs")," processes ",Object(b.b)("em",{parentName:"p"},"null")," values as if they are ",Object(b.b)("em",{parentName:"p"},"0")," (e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"numeral(null)"),"), and therefore it returns the formatted ",Object(b.b)("em",{parentName:"p"},"0"),". But ",Object(b.b)("strong",{parentName:"p"},"numerable")," returns an empty string by default. If you want to process the value as a zero, you should pass it explicitly ",Object(b.b)("inlineCode",{parentName:"p"},"format(myPotentiallyNullValue || 0, '0,0.00')"),").  "),Object(b.b)("pre",{parentName:"div"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"numeral(null).format('0,0.00'); // Returns \"0.00\"\n\nformat(null, '0.00'); // Returns \"\" \n"))))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"NaN"),": If the value is a number and ",Object(b.b)("strong",{parentName:"p"},"NaN")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"It will be formatted as ",Object(b.b)("strong",{parentName:"p"},'""')," (empty string).  "),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(NaN, '0.00'); // Returns \"\"\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"If a ",Object(b.b)("strong",{parentName:"p"},"nanFormat")," was provided in the options, in the instance options, or defined in the global options, then the ",Object(b.b)("strong",{parentName:"p"},"nanFormat")," will be returned. Otherwise it will fallback to the ",Object(b.b)("strong",{parentName:"p"},"nullFormat")," (if provided). See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/"}),"FormatOptions")," for details.  "),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(NaN, '0.00'); // Returns \"\"\nformat(NaN, '0.00', { nanFormat: 'N/A' }); // Returns \"N/A\"\nformat(NaN, '0.00', { nullFormat: '-' }); // Returns \"-\"\nformat(NaN, '0.00', { nanFormat: 'N/A', nullFormat: '-' }); // Returns \"N/A\"\n")),Object(b.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},Object(b.b)("strong",{parentName:"p"},"numeraljs")," processes ",Object(b.b)("em",{parentName:"p"},"NaN")," values as if they are ",Object(b.b)("em",{parentName:"p"},"0")," (e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"numeral(NaN)"),"), and therefore it returns the formatted ",Object(b.b)("em",{parentName:"p"},"0"),". But ",Object(b.b)("strong",{parentName:"p"},"numerable")," returns an empty string by default. If you want to process the value as a zero, you should pass it explicitly ",Object(b.b)("inlineCode",{parentName:"p"},"format(myPotentiallyNaNValue || 0, '0,0.00')"),").  "),Object(b.b)("pre",{parentName:"div"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"numeral(NaN).format('0,0.00'); // Returns \"0.00\"\n\nformat(NaN, '0.00'); // Returns \"\" \n"))))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Infinity"),": If the value is a number and ",Object(b.b)("strong",{parentName:"p"},"Infinity")," or ",Object(b.b)("strong",{parentName:"p"},"-Infinity"),"."),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"It will be formatted as ",Object(b.b)("strong",{parentName:"li"},'"\u221e"')," or ",Object(b.b)("strong",{parentName:"li"},'"-\u221e"'),".",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(Infinity, '0.00'); // Returns \"\u221e\"\nformat(-Infinity, '0.00'); // Returns \"-\u221e\"\n")))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"--pattern-argument"},"- ",Object(b.b)("em",{parentName:"h3"},"pattern")," argument"),Object(b.b)("p",null,"type: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"string"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"null"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"undefined"))),Object(b.b)("p",null,"The pattern used to format the provided number. (See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/"}),"FormatPattern")," for details)"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Pattern examples:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'"0.00"')),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'"0,0.00##"')),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'"0,0.00 %"')),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'"0.0 a"')))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"If no valid pattern (",Object(b.b)("strong",{parentName:"p"},"null"),", ",Object(b.b)("strong",{parentName:"p"},"undefined")," or ",Object(b.b)("strong",{parentName:"p"},'""'),") is provided:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"It will fallback to the options ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"defaultPattern"))," if provided, otherwise it will try with the global ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"defaultPattern")),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"The default global pattern is: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"0,0.##########"'))," (up to ten fraction digits).")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"If no global pattern is defined, it will still fallback to ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"0,0.##########"'))),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'// Using default "0,0.##########"\nformat(1234.503); // Returns "1,234.503"\nformat(1234.503, null); // Returns "1,234.503"\nformat(1234.503, undefined); // Returns "1,234.503"\nformat(1234.503, \'\'); // Returns "1,234.503"\n\n// Using options defaultPattern\nformat(1234.503, null, { defaultPattern: \'0.0\' }); // Returns "1234.5"\nformat(1234.503, undefined, { defaultPattern: \'0.0\' }); // Returns "1234.5"\nformat(1234.503, \'\', { defaultPattern: \'0.0\' }); // Returns "1234.5"\n')))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"--options-argument"},"- ",Object(b.b)("em",{parentName:"h3"},"options")," argument"),Object(b.b)("p",null,"type: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/"}),"FormatOptions")))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"null"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"undefined"))),Object(b.b)("h5",{id:"example"},"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(1234.56, '0,0.00', {\n    defaultPattern: '0,0.##########',\n    nullFormat: 'N/A',\n    nanFormat: 'NaN',\n    zeroFormat: '-',\n    rounding: Math.floor,\n    locale: fr,\n});\n")),Object(b.b)("p",null,"The options object can contain the following properties:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"defaultPattern"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"type: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"string")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"default: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"0,0.##########"')))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},'It will be the formatting pattern applied in case that the provided pattern in the arguments is null, undefined or "" (empty string).'),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(1234.503, myPotentiallyNullPattern, { defaultPattern: '0.0' });  // Returns \"1234.5\"\nformat(1234.503, null, { defaultPattern: '0.0' });  // Returns \"1234.5\"\nformat(1234.503, undefined, { defaultPattern: '0.0' });  // Returns \"1234.5\"\nformat(1234.503, '', { defaultPattern: '0.0' });  // Returns \"1234.5\"\n")),Object(b.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},Object(b.b)("strong",{parentName:"p"},"numeraljs")," uses ",Object(b.b)("em",{parentName:"p"},'"0,0"')," as a default pattern (e.g. ",Object(b.b)("inlineCode",{parentName:"p"},'numeral(1234.45).format() // Returns "1,234"'),"). ",Object(b.b)("strong",{parentName:"p"},"numerable")," uses ",Object(b.b)("em",{parentName:"p"},'"0,0.##########"')," as a default pattern (10 optional decimal places).  "),Object(b.b)("pre",{parentName:"div"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'numeral(1234.56).format(); // Returns "1,234" (without decimals)\n\nformat(1234.56); // Returns "1,234.56" \nformat(1234.56789); // Returns "1,234.56789" \n'))))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"rounding"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"type: "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"string")),": ",Object(b.b)("em",{parentName:"li"},'"truncate"')," | ",Object(b.b)("em",{parentName:"li"},'"ceil"')," | ",Object(b.b)("em",{parentName:"li"},'"floor"')," | ",Object(b.b)("em",{parentName:"li"},'"round"'),Object(b.b)("br",{parentName:"li"}),"or"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"function")),": ",Object(b.b)("em",{parentName:"li"},"(value: number) => number")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"default: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"Math.round")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"It will be the rounding function applied to the number in the resolved maximum amount of decimal places."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Ceil\nformat(1234.52, '0.0', { rounding: 'ceil' });  // Returns \"1234.6\"\nformat(-1234.52, '0.0', { rounding: 'ceil' });  // Returns \"-1234.5\"\n\n// Floor\nformat(1234.52, '0.0', { rounding: 'floor' });  // Returns \"1234.5\"\nformat(-1234.52, '0.0', { rounding: 'floor' });  // Returns \"-1234.6\"\n\n// Truncate (rounding towards 0)\nformat(1234.52, '0.0', { rounding: 'truncate' });  // Returns \"1234.5\"\nformat(-1234.52, '0.0', { rounding: 'truncate' });  // Returns \"-1234.5\"\n\n// Round\nformat(1234.52, '0.0', { rounding: 'round' });  // Returns \"1234.5\"\nformat(1234.58, '0.0', { rounding: 'round' });  // Returns \"1234.6\"\nformat(-1234.52, '0.0', { rounding: 'round' });  // Returns \"-1234.5\"\nformat(-1234.58, '0.0', { rounding: 'round' });  // Returns \"-1234.6\"\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"truncate"')),", ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"ceil"')),", ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"floor"'))," and ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},'"round"'))," are aliases for the native Javascript rounding functions found in the Math object (e.g. Math.ceil)."),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'"truncate"'))," is Math.trunc"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'"ceil"'))," is Math.ceil"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'"floor"'))," is Math.floor"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'"round"'))," is Math.round"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"You can also provide a ",Object(b.b)("strong",{parentName:"p"},"custom rounding function")," for this option. That will be useful in case you need to apply an special rounding algorithm."),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The function will receive the already scaled value and it should return an integer."),Object(b.b)("li",{parentName:"ul"},"The ",Object(b.b)("strong",{parentName:"li"},"scaled value")," is the scaled version of the value after ",Object(b.b)("strong",{parentName:"li"},"numerable")," has already calculated the final amount of decimal places.",Object(b.b)("br",{parentName:"li"}),"For example, if you call ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"format()"))," with the value ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"12.345"))," and the pattern ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'"0.0"')),", the scaled value will be ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"123.456"))," as it will attempt to round ",Object(b.b)("strong",{parentName:"li"},".4"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Example\nconst roundAwayFromZero = scaledNumber => {\n    return scaledNumber >= 0 ? Math.ceil(scaledNumber) : Math.floor(scaledNumber);\n}\nformat(12.301, '0.0', { rounding: roundAwayFromZero }); // Returns \"12.4\"\nformat(-12.301, '0.0', { rounding: roundAwayFromZero }); // Returns \"-12.4\"\n")))))),Object(b.b)("blockquote",{parentName:"li"},Object(b.b)("p",{parentName:"blockquote"},"Take into account that ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},".5"))," will be always rounded up for both positive and negative numbers.",Object(b.b)("br",{parentName:"p"}),"\n","This is the native and default behavior of the Javascript function ",Object(b.b)("em",{parentName:"p"},"Math.round"),".",Object(b.b)("br",{parentName:"p"}),"\n","If you want a custom rounding for ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},".5"))," you can implement your custom rounding function.  "),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Example\n// The following code, will round down .5 values\nconst customRoundingFunction = number => {\n    const fractionalPart = number.toString().split('.')[1] || '';\n    return fractionalPart[0] === '5' ? Math.floor(number) : Math.round(number);\n};\nformat(1.45, '0.0', { rounding: customRoundingFunction }); // Returns \"1.4\"\nformat(-1.45, '0.0', { rounding: customRoundingFunction }); // Returns \"1.5\"\n")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"nullFormat"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"string"))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'""'))),Object(b.b)("li",{parentName:"ul"},"If defined, it will be the returned string when the value is ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"null"))," | ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"undefined"))," | ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"NaN")),".",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(null, '0.0', { nullFormat: 'N/A' }); // Returns \"N/A\"\nformat(undefined, '0.0', { nullFormat: 'N/A' }); // Returns \"N/A\"\nformat(NaN, '0.0', { nullFormat: 'N/A' }); // Returns \"N/A\"\n"))),Object(b.b)("li",{parentName:"ul"},"Take into account that if the ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"nanFormat"))," option has been defined, then this option will be ignored if the value is ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"NaN")),", and instead, the ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"nanFormat"))," string will be returned.",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const options = { nullFormat: 'N/A', nanFormat: 'NaN' };\nformat(NaN, '0.0', options); // Returns \"NaN\"\nformat(null, '0.0', options); // Returns \"N/A\"\nformat(undefined, '0.0', options); // Returns \"N/A\"\n")))),Object(b.b)("blockquote",{parentName:"li"},Object(b.b)("p",{parentName:"blockquote"},"If you want ",Object(b.b)("strong",{parentName:"p"},"a formatted zero")," (0) as a fallback for ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"null"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"undefined"))," | ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"NaN")),". You should pass 0 explicitly to the function, like in the following example."),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(myPotentiallyNullValue || 0, '0.000##'); // Returns \"0.000\"\n")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"nanFormat"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"string"))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},'""'))),Object(b.b)("li",{parentName:"ul"},"If defined, it will be the returned string when the value is ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"NaN")),".",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(NaN, '0.0', { nanFormat: 'N/A' }); // Returns \"N/A\"\n"))),Object(b.b)("li",{parentName:"ul"},"Take into account that for ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"NaN"))," values, ",Object(b.b)("strong",{parentName:"li"},"nanFormat")," has priority over ",Object(b.b)("strong",{parentName:"li"},"nullFormat"),".",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(NaN, '0.0', { nanFormat: 'TEST', nullFormat: '-' }); // Returns \"TEST\"\n")))),Object(b.b)("blockquote",{parentName:"li"},Object(b.b)("p",{parentName:"blockquote"},"If you want ",Object(b.b)("strong",{parentName:"p"},"a formatted zero")," (0) as a fallback for ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"NaN"))," values. You should pass 0 explicitly to the function, like in the following example."),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(myPotentiallyNaNValue || 0, '0.000##'); // Returns \"0.000\"\n")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"zeroFormat"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"string"))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"undefined"))),Object(b.b)("li",{parentName:"ul"},"If defined, it will be the returned string when the value is ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"0")),".",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(0, '0.0', { zeroFormat: 'N/A' }); // Returns \"N/A\"\n"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"locale"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"locale"}),"NumerableLocale")))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"en"))," ",Object(b.b)("em",{parentName:"li"},"(english ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"locale"}),"NumerableLocale"),")")),Object(b.b)("li",{parentName:"ul"},"If a ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"locale"}),Object(b.b)("strong",{parentName:"a"},"NumerableLocale"))," is provided, it will format the number with the specified locale.",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { fr } from 'numerable/locale';\nformat(1234.56, '0.000', { locale: fr }); // Returns \"1 234,560\"\n"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"scalePercentage"),": "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"boolean"))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"true"))),Object(b.b)("li",{parentName:"ul"},"If ",Object(b.b)("strong",{parentName:"li"},"true")," (default), it will multiply the number by 100 when a ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"percentage"}),"percentage format")," is detected. If ",Object(b.b)("strong",{parentName:"li"},"false"),",  the number won't be scaled when a ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"percentage"}),"percentage format")," is detected.  ",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"format(0.12, '0.0 %'); // Returns '12 %'\nformat(0.12, '0.0 %', { scalePercentage: false }); // Returns \"0.12 %\"\n")),Object(b.b)("blockquote",{parentName:"li"},Object(b.b)("p",{parentName:"blockquote"},"See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"percentage"}),"percentage format")," for details."))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"formatters")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"formatter"}),"NumerableFormatter"),"[]")),Object(b.b)("br",{parentName:"li"}),"or"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"function")),": ",Object(b.b)("em",{parentName:"li"},"(builtInFormatters: ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"formatter"}),"NumerableFormatter"),"[]) => ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"formatter"}),"NumerableFormatter"),"[]")))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("em",{parentName:"li"},"BUILT_IN_FORMATTERS")),Object(b.b)("li",{parentName:"ul"},"If ",Object(b.b)("strong",{parentName:"li"},"formatters")," option is provided, ",Object(b.b)("strong",{parentName:"li"},"numerable")," will include the provided formatters during the format process.",Object(b.b)("br",{parentName:"li"}),"If the option is an ",Object(b.b)("strong",{parentName:"li"},"array")," of formatters, the formatters will be applied after the built-in formatters.",Object(b.b)("br",{parentName:"li"}),"If the formatters option is a ",Object(b.b)("strong",{parentName:"li"},"function"),", the function will receive the built-in formatters and it should return an array of NumerableFormatters. Then, the formatters will be applied in the order of the provided array.",Object(b.b)("br",{parentName:"li"}),"See ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"formatter"}),"NumerableFormatter")," for details.",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import myCustomFormatter from './my-formatters/myCustomFormatter';\nformat(12, '0.0 EXAMPLE_TOKEN', { formatters: [myCustomFormatter] }); \n// If EXAMPLE_TOKEN matches with your custom formatter, it will return what your custom formatter is built to return.\n")))))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"type"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"type: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"string"))," | ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"null"))),Object(b.b)("li",{parentName:"ul"},"default: ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"null"))),Object(b.b)("li",{parentName:"ul"},"Implement")))))}c.isMDXComponent=!0},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return N}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),i=c(a),u=n,N=i["".concat(l,".").concat(u)]||i[u]||s[u]||b;return a?r.a.createElement(N,m(m({ref:t},o),{},{components:a})):r.a.createElement(N,m({ref:t},o))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);