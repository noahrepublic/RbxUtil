(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85,6],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28408:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(63366),a=n(87462),o=n(67294),c=n(86010),l=n(24973),i=n(941),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",p=["id"],d=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},f=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,d=(0,r.Z)(e,p),f=(0,i.LU)().navbar.hideOnScroll;return a?o.createElement(t,d,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor","anchor__"+t,(n={},n[u]=f,n[s]=!f,n)),id:a}),d.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,d)});var t}},42682:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(67294),a=n(86010),o=n(95505),c=n(3905),l=n(87462),i=n(63366),s=n(99105),u=n(36742),p={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},d={Prism:n(87410).default,theme:p};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var h=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},v=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=m({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=m({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var k=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),f(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?v(e.theme,e.language):void 0;return t.themeDict=n})),f(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=m({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?m({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),f(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),f(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=m({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?m({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),f(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=r[c]++)<a[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=g(u,p.type),p.alias&&(u=g(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(h),f=d.length;l.push({types:u,content:d[0]});for(var m=1;m<f;m++)y(l),i.push(l=[]),l.push({types:u,content:d[m]})}else c++,t.push(u),n.push(s),r.push(0),a.push(s.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return y(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),E=k;var O=n(87594),j=n.n(O),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},x=n(85350),C=n(941),T=function(){var e=(0,C.LU)().prism,t=(0,x.Z)().isDarkTheme,n=e.theme||N,r=e.darkTheme||n;return t?r:n},_=n(24973),P="codeBlockContainer_K1bP",S="codeBlockContent_hGly",Z="codeBlockTitle_eoMF",w="codeBlock_23N8",L="copyButton_Ue-o",B="codeBlockLines_39YC",D=/{([\d,-]+)}/,A=["js","jsBlock","jsx","python","html"],I={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},R=["highlight-next-line","highlight-start","highlight-end"],z=function(e){void 0===e&&(e=A);var t=e.map((function(e){var t=I[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+R.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function F(e){var t=e.children,n=e.className,o=e.metastring,c=e.title,i=(0,C.LU)().prism,s=(0,r.useState)(!1),u=s[0],p=s[1],f=(0,r.useState)(!1),m=f[0],h=f[1];(0,r.useEffect)((function(){h(!0)}),[]);var y=(0,C.bc)(o)||c,g=(0,r.useRef)(null),v=[],b=T(),k=Array.isArray(t)?t.join(""):t;if(o&&D.test(o)){var O=o.match(D)[1];v=j()(O).filter((function(e){return e>0}))}var N=null==n?void 0:n.replace(/language-/,"");!N&&i.defaultLanguage&&(N=i.defaultLanguage);var x=k.replace(/\n$/,"");if(0===v.length&&void 0!==N){for(var A,I="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return z(["js","jsBlock"]);case"jsx":case"tsx":return z(["js","jsBlock","jsx"]);case"html":return z(["js","jsBlock","html"]);case"python":case"py":return z(["python"]);default:return z()}}(N),F=k.replace(/\n$/,"").split("\n"),M=0;M<F.length;){var U=M+1,V=F[M].match(R);if(null!==V){switch(V.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=U+",";break;case"highlight-start":A=U;break;case"highlight-end":I+=A+"-"+(U-1)+","}F.splice(M,1)}else M+=1}v=j()(I),x=F.join("\n")}var $=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(x),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(E,(0,l.Z)({},d,{key:String(m),theme:b,code:x,language:N}),(function(e){var t=e.className,n=e.style,o=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:P},y&&r.createElement("div",{style:n,className:Z},y),r.createElement("div",{className:(0,a.Z)(S,N)},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,w,"thin-scrollbar"),style:n},r.createElement("code",{className:B},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,l.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,l.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:g,type:"button","aria-label":(0,_.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(L,"clean-btn"),onClick:$},u?r.createElement(_.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(_.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var M=n(28408),U="details_1VDD";function V(e){var t=Object.assign({},e);return r.createElement(C.PO,(0,l.Z)({},t,{className:(0,a.Z)("alert alert--info",U,t.className)}))}var $=["mdxType","originalType"];var H={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,i.Z)(a,$));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(s.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(F,e):r.createElement("code",e)},a:function(e){return r.createElement(u.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(F,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(V,(0,l.Z)({},e,{summary:n}),a)},h1:(0,M.Z)("h1"),h2:(0,M.Z)("h2"),h3:(0,M.Z)("h3"),h4:(0,M.Z)("h4"),h5:(0,M.Z)("h5"),h6:(0,M.Z)("h6")},W=n(571),q="mdxPageWrapper_3qD3";var K=function(e){var t=e.content,n=t.frontMatter,l=t.metadata,i=n.title,s=n.description,u=n.wrapperClassName,p=n.hide_table_of_contents,d=l.permalink;return r.createElement(o.Z,{title:i,description:s,permalink:d,wrapperClassName:null!=u?u:C.kM.wrapper.mdxPages,pageClassName:C.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",q)},r.createElement("div",{className:(0,a.Z)("col",!p&&"col--8")},r.createElement(c.Zo,{components:H},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(W.Z,{toc:t.toc})))))}},571:function(e,t,n){"use strict";n.d(t,{r:function(){return f},Z:function(){return m}});var r=n(67294),a=n(86010),o=n(941);function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function l(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return c(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function i(){var e=(0,r.useRef)(0),t=(0,o.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,r.useRef)(void 0),n=i();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=l({anchorTopOffset:n.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])},u="tableOfContents_35-E",p="table-of-contents__link",d={linkClassName:p,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:p,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))}))):null}var m=function(e){var t=e.toc;return s(d),r.createElement("div",{className:(0,a.Z)(u,"thin-scrollbar")},r.createElement(f,{toc:t}))}},6979:function(e,t,n){"use strict";var r=n(5977),a=n(52263),o=n(28084),c=n(94184),l=n.n(c),i=n(67294);t.Z=function(e){var t=(0,i.useRef)(!1),c=(0,i.useRef)(null),s=(0,r.k6)(),u=(0,a.Z)().siteConfig,p=(void 0===u?{}:u).baseUrl;(0,i.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||c.current&&e.srcElement===document.body&&(e.preventDefault(),c.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var d=(0,o.usePluginData)("docusaurus-lunr-search"),f=function(){t.current||(Promise.all([fetch(""+p+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+p+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(878),n.e(452)]).then(n.bind(n,57780)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,53343))]).then((function(e){var t=e[0],n=e[1],r=e[2].default;0!==t.length&&function(e,t,n){new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var r=p+n.url;document.createElement("a").href=r,s.push(r)}})}(t,n,r)})),t.current=!0)},m=(0,i.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return i.createElement("div",{className:"navbar__search",key:"search-box"},i.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),i.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:m,onBlur:m,ref:c}))}},87594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);