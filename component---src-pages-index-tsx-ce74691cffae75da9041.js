"use strict";(self.webpackChunksatria_technology=self.webpackChunksatria_technology||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),A=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),A=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?A(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const A=e[o];s&&t.test(A)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(A)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(A)===A&&n(A)!==A,l=i,i=n(A)===A&&r(A)!==A)}return e})(e,s,A)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=A(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,A)};e.exports=A,e.exports.default=A},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return x},P:function(){return y},S:function(){return F},_:function(){return l},a:function(){return i},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function A(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const A={};s&&(A.backgroundColor=s,"fixed"===a?(A.width=r,A.height=n,A.backgroundColor=s,A.position="relative"):("constrained"===a||"fullWidth"===a)&&(A.position="absolute",A.top=0,A.left=0,A.bottom=0,A.right=0)),l&&(A.objectFit=l),o&&(A.objectPosition=o);const c=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},A)});return c}const u=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,A=l(e,g);return r.createElement("img",i({},A,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},h=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,b);const o=s.sizes||(null==t?void 0:t.sizes),A=r.createElement(f,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),A):A};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},h.displayName="Picture",h.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],y=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(h,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};y.displayName="Placeholder",y.propTypes={fallback:n.string,sources:null==(w=h.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(h,i({},e)),r.createElement("noscript",null,r.createElement(h,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=h.propTypes;const v=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],N=e=>e.replace(/\n/g,""),B=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},j={image:s().object.isRequired,alt:B},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],Q=["style","className"],C=new Set;let R,I;const Y=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,b=l(e,S);const{width:f,height:h,layout:w}=n,E=A(f,h,w),{style:y,className:x}=E,v=l(E,Q),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const B=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(w,f,h);return(0,r.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(N);if(I&&C.has(N))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:C.has(N),image:n},b)),C.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,N,C,s,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{C.has(N)&&I&&(k.current.innerHTML=I(i({isLoading:C.has(N),isLoaded:C.has(N),image:n},b)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},v,{style:i({},y,s,{backgroundColor:c}),className:`${x}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:B},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(Y,e):null}));T.propTypes=j,T.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,D);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const L=P((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:u="lazy",imgClassName:m,imgStyle:g,backgroundColor:b,objectFit:f,objectPosition:h}=e,w=l(e,v);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),g=i({objectFit:f,objectPosition:h,backgroundColor:b},g);const{width:E,height:B,layout:j,images:S,placeholder:Q,backgroundColor:C}=o,R=A(E,B,j),{style:I,className:Y}=R,T=l(R,k),D={fallback:void 0,sources:[]};return S.fallback&&(D.fallback=i({},S.fallback,{srcSet:S.fallback.srcSet?N(S.fallback.srcSet):void 0})),S.sources&&(D.sources=S.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,i({},T,{style:i({},I,s,{backgroundColor:b}),className:`${Y}${a?` ${a}`:""}`}),r.createElement(p,{layout:j,width:E,height:B},r.createElement(y,i({},d(Q,!1,j,E,B,C,f,h))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:m},w,c("eager"===u,!1,D,u,g)))))})),O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),G={src:s().string.isRequired,alt:B,width:O,height:O,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};L.displayName="StaticImage",L.propTypes=G;const F=P(T);F.displayName="StaticImage",F.propTypes=G},2134:function(e,t,a){a.r(t),a.d(t,{Head:function(){return w},default:function(){return h}});var r=a(7294),n=a(8032);function s(e,t,a,r){return new(a||(a=Promise))((function(n,s){function i(e){try{o(r.next(e))}catch(e){s(e)}}function l(e){try{o(r.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}o((r=r.apply(e,t||[])).next())}))}function i(e,t){var a,r,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],r=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,n,s=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)i.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(a=s.return)&&a.call(s)}finally{if(n)throw n.error}}return i}function A(e,t,a){if(a||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))}function c(e,t,a,r,n){for(var c=[],m=5;m<arguments.length;m++)c[m-5]=arguments[m];return s(this,void 0,void 0,(function(){var s,m,p,g,b,f;return i(this,(function(i){switch(i.label){case 0:i.trys.push([0,12,13,14]),s=l(c),m=s.next(),i.label=1;case 1:if(m.done)return[3,11];switch(typeof(p=m.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,d(e,t,p,a,r,n)];case 3:return i.sent(),[3,10];case 4:return[4,u(p)];case 5:return i.sent(),[3,10];case 6:return[4,p.apply(void 0,A([e,t,a,r,n],o(c),!1))];case 7:return i.sent(),[3,10];case 8:return[4,p];case 9:i.sent(),i.label=10;case 10:return m=s.next(),[3,1];case 11:return[3,14];case 12:return g=i.sent(),b={error:g},[3,14];case 13:try{m&&!m.done&&(f=s.return)&&f.call(s)}finally{if(b)throw b.error}return[7];case 14:return[2]}}))}))}function d(e,t,a,r,n,l){return s(this,void 0,void 0,(function(){var s,c;return i(this,(function(i){switch(i.label){case 0:return s=e.textContent||"",c=function(e,t){var a=o(t).slice(0);return A(A([],o(e),!1),[NaN],!1).findIndex((function(e,t){return a[t]!==e}))}(s,a),[4,m(e,A(A([],o(g(s,t,c)),!1),o(p(a,t,c)),!1),r,n,l)];case 1:return i.sent(),[2]}}))}))}function u(e){return s(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function m(e,t,a,r,n){return s(this,void 0,void 0,(function(){var s,A,c,d,m,p,g,b,f,h,w,E,y;return i(this,(function(x){switch(x.label){case 0:if(s=t,n){for(A=0,c=1;c<t.length;c++)if(d=o([t[c-1],t[c]],2),m=d[0],(p=d[1]).length>m.length||""===p){A=c;break}s=t.slice(A,t.length)}x.label=1;case 1:x.trys.push([1,6,7,8]),g=l(function(e){var t,a,r,n,s,o,A;return i(this,(function(c){switch(c.label){case 0:t=function(e){return i(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var a=t.textContent||"";return""===e||a.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},c.label=1;case 1:c.trys.push([1,6,7,8]),a=l(e),r=a.next(),c.label=2;case 2:return r.done?[3,5]:(n=r.value,[5,t(n)]);case 3:c.sent(),c.label=4;case 4:return r=a.next(),[3,2];case 5:return[3,8];case 6:return s=c.sent(),o={error:s},[3,8];case 7:try{r&&!r.done&&(A=a.return)&&A.call(a)}finally{if(o)throw o.error}return[7];case 8:return[2]}}))}(s)),b=g.next(),x.label=2;case 2:return b.done?[3,5]:(f=b.value,h="WRITING"===f.opCode(e)?a+a*(Math.random()-.5):r+r*(Math.random()-.5),f.op(e),[4,u(h)]);case 3:x.sent(),x.label=4;case 4:return b=g.next(),[3,2];case 5:return[3,8];case 6:return w=x.sent(),E={error:w},[3,8];case 7:try{b&&!b.done&&(y=g.return)&&y.call(g)}finally{if(E)throw E.error}return[7];case 8:return[2]}}))}))}function p(e,t,a){var r,n;return void 0===a&&(a=0),i(this,(function(s){switch(s.label){case 0:r=t(e),n=r.length,s.label=1;case 1:return a<n?[4,r.slice(0,++a).join("")]:[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}}))}function g(e,t,a){var r,n;return void 0===a&&(a=0),i(this,(function(s){switch(s.label){case 0:r=t(e),n=r.length,s.label=1;case 1:return n>a?[4,r.slice(0,--n).join("")]:[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}}))}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var b=(0,r.memo)((0,r.forwardRef)((function(e,t){var a=e.sequence,n=e.repeat,s=e.className,i=e.speed,l=void 0===i?40:i,d=e.deletionSpeed,u=e.omitDeletionAnimation,m=void 0!==u&&u,p=e.preRenderFirstString,g=void 0!==p&&p,b=e.wrapper,f=void 0===b?"span":b,h=e.splitter,w=void 0===h?function(e){return A([],o(e),!1)}:h,E=e.cursor,y=void 0===E||E,x=e.style,v=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),k=v["aria-label"],N=v["aria-hidden"],B=v.role;d||(d=l);var j=new Array(2).fill(40);[l,d].forEach((function(e,t){switch(typeof e){case"number":j[t]=Math.abs(e-100);break;case"object":var a=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===a&&(j[t]=r)}}));var S,Q,C,R,I,Y,T=j[0],D=j[1],P=function(e,t){void 0===t&&(t=null);var a=(0,r.useRef)(t);return(0,r.useEffect)((function(){e&&("function"==typeof e?e(a.current):e.current=a.current)}),[e]),a}(t),L="index-module_type__E-SaG";S=s?"".concat(y?L+" ":"").concat(s):y?L:"",Q=(0,r.useRef)((function(){var e,t=a;n===1/0?e=c:"number"==typeof n&&(t=Array(1+n).fill(a).flat());var r=e?A(A([],o(t),!1),[e],!1):A([],o(t),!1);return c.apply(void 0,A([P.current,w,T,D,m],o(r),!1)),function(){P.current}})),C=(0,r.useRef)(),R=(0,r.useRef)(!1),I=(0,r.useRef)(!1),Y=o((0,r.useState)(0),2)[1],R.current&&(I.current=!0),(0,r.useEffect)((function(){return R.current||(C.current=Q.current(),R.current=!0),Y((function(e){return e+1})),function(){I.current&&C.current&&C.current()}}),[]);var O=f,M=g?a.find((function(e){return"string"==typeof e}))||"":null;return r.createElement(O,{"aria-hidden":N,"aria-label":k,role:B,style:x,className:S,children:k?r.createElement("span",{"aria-hidden":"true",ref:P,children:M}):M,ref:k?void 0:P})})),(function(e,t){return!0}));const f=["Go","Ruby","JavaScript","Python","Java","Sinatra","Active Record","MySQL","MariaDB","Redis","RabbitMQ","Kafka","NSQ","Google Pub Sub","AWS","GCP","Azure","ELK Stack","Datadog","Grafana","Next.js","TypeScript","AppSmith","Google Cloud Platform","Amazon Web Service","Kubernetes","LLM","Gen AI","Blockchain","FinTech","Payment Processing"];var h=()=>r.createElement("div",{className:"min-h-screen flex flex-col"},r.createElement("header",{className:"bg-gradient-to-r from-slate-100 to-red-100"},r.createElement("div",{className:"mx-auto max-w-screen-lg container"},r.createElement("div",{className:"lg:flex lg:justify-between lg:items-center py-6"},r.createElement("div",{className:"flex justify-between items-center"},r.createElement("div",null,r.createElement("a",{href:"/",className:"font-extrabold text-lg uppercase"},"satria.technology")))))),r.createElement("div",null,r.createElement("div",{className:"bg-gradient-to-r from-slate-100 to-red-100 mb-40 sm:mb-32 sm:mb-0"},r.createElement("div",{className:"max-w-screen-lg container mx-auto relative flex flex-col-reverse sm:items-center sm:grid sm:grid-cols-2 sm:gap-4"},r.createElement("div",{className:"absolute sm:relative bg-white sm:bg-transparent h-fit max-w-[90%] sm:max-w-[100%] border-4 sm:border-none border-b-slate-500 border-r-slate-500 border-t-slate-50 border-l-slate-50 -bottom-28 sm:bottom-0 p-3 sm:p-0 space-y-3"},r.createElement("p",{className:"text-lg md:text-4xl"},"This is"," ",r.createElement("span",{className:"font-semibold sm:font-bold"},"Satria"),"."),r.createElement(b,{preRenderFirstString:!0,wrapper:"p",repeat:1/0,speed:70,className:"text-lg md:text-4xl font-semibold sm:font-bold",sequence:["I'm a Software Engineer",1e3,"I'm a Tech Leader",1e3,"Business Oriented",1e3,"Product Engineer",1e3]}),r.createElement("a",{href:"https://calendly.com/satriahrh/talk",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-black font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:from-slate-100 hover:to-red-100"},"Let's talk")),r.createElement(n.S,{src:"../images/asian-man-saying-good-job.webp",placeholder:"blurred",alt:"Stock Photo",__imageData:a(3998)}))),r.createElement("main",null,r.createElement("div",{className:"container max-w-screen-xl mx-auto my-8 px-3"},r.createElement("div",{className:"my-16"},r.createElement("h2",{className:"text-center text-4xl font-bold mb-8"},"Collaboration and Technical Excelence to Deliver Business Value"),r.createElement("div",{className:"flex flex-row flex-wrap justify-center gap-2 sm:gap-4"},f.map((e=>r.createElement("span",{key:e,className:"bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold"},e)))),r.createElement("div",{className:"text-center"},r.createElement(n.S,{src:"../images/half-globe-down.png",placeholder:"blurred",alt:"Stock Photo",className:"mx-auto",__imageData:a(3574)}))),r.createElement("div",{className:"my-16"},r.createElement("h2",{className:"text-center text-4xl font-bold mb-4"},"Consultation-First Software Solution"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},r.createElement("div",{className:"bg-white border-l border-t border-r-4 border-b-4 border-slate-500 p-4"},r.createElement(n.S,{src:"../images/i-have-idea.jpg",placeholder:"blurred",alt:"Stock Photo",__imageData:a(2441)}),r.createElement("h3",{className:"text-2xl font-bold mt-4 mb-2"},"Tech Consulting"),r.createElement("p",null,"Kami memberikan saran ahli untuk membantu Anda mengarungi dunia teknologi yang kompleks. Konsultan kami akan membimbing Anda dalam membuat keputusan yang terinformasi tentang solusi teknologi terbaik untuk memenuhi kebutuhan bisnis Anda, memastikan Anda tetap unggul di era digital.")),r.createElement("div",{className:"bg-white border-l border-t border-r-4 border-b-4 border-slate-500 p-4"},r.createElement(n.S,{src:"../images/discussing-mobile-app.jpg",placeholder:"blurred",alt:"Stock Photo",__imageData:a(6766)}),r.createElement("h3",{className:"text-2xl font-bold mt-4 mb-2"},"Product Ideation"),r.createElement("p",null,"Kami mengubah ide-ide Anda menjadi kenyataan. Tim manajer produk dan desainer berpengalaman kami bekerja secara kolaboratif untuk membangun produk perangkat lunak inovatif dan berkualitas tinggi yang disesuaikan dengan kebutuhan bisnis Anda.")),r.createElement("div",{className:"bg-white border-l border-t border-r-4 border-b-4 border-slate-500 p-4"},r.createElement(n.S,{src:"../images/business-executives-reading-sticky-notes.jpg",placeholder:"blurred",alt:"Stock Photo",__imageData:a(5222)}),r.createElement("h3",{className:"text-2xl font-bold mt-4 mb-2"},"Software Development"),r.createElement("p",null,"Kami ahli dalam menciptakan solusi perangkat lunak yang tangguh, dapat diukur, dan efisien. Tim pengembang terampil kami menggunakan teknologi terbaru dan praktik terbaik untuk menghasilkan aplikasi perangkat lunak kustom yang meningkatkan operasi bisnis dan mendorong pertumbuhan.")))),r.createElement("div",{className:"my-16 text-center grid sm:grid-cols-2 border-l border-t border-r-4 border-b-4 border-slate-500"},r.createElement("div",{className:"text-left p-8 bg-red-50"},r.createElement(b,{preRenderFirstString:!0,wrapper:"p",repeat:1/0,speed:70,className:"text-4xl font-bold mb-4",sequence:["Interested in my profile?",1e3,"Need a tech expert?",1e3,"Catch up and reconnect?",1e3]}),r.createElement("a",{href:"https://calendly.com/satriahrh/talk",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-black font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:from-slate-100 hover:to-red-100"},"Let's talk")),r.createElement("div",{className:"text-left p-8 bg-red-600 text-white"},r.createElement("p",{className:"font-bold text-lg"},"Satria Hafizh Rizkitama Harsono"),r.createElement("p",{className:"mt-2 text-md"},"t: +62 851 6262 xxxx"),r.createElement("p",{className:"mt-2 text-md"},"e: info@satria.technology"),r.createElement("a",{href:"https://www.linkedin.com/in/satriahrh",className:"mt-4 block w-fit bg-white border border-r-2 border-b-2 border-black drop-shadow text-black font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:from-slate-100 hover:to-red-100"},"Lihat Profil Linkedin"))),r.createElement("div",{className:"text-xs text-center container mx-auto max-w-screen-lg text-slate-400"},r.createElement("span",null,r.createElement("a",{href:"https://www.freepik.com/free-photo/asian-man-saying-good-job_6802044.htm"},"Hero image by pressfoto")),", on Freepik")))),r.createElement("footer",{className:"bg-slate-800 text-white py-12"},r.createElement("div",{className:"container max-w-screen-lg mx-auto pb-4 mb-4 border-b border-white flex flex-col gap-6 sm:gap-0 sm:grid sm:grid-cols-3"},r.createElement("div",null,r.createElement("p",{className:"text-md mt-4"},"Collaboration and Technical Excelence to Deliver Business Value"),r.createElement("div",{className:"flex flex-row gap-4 mt-4"},r.createElement("a",{href:"https://www.facebook.com/satriahrh",className:"text-blue-600 hover:text-blue-800"},r.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"}))),r.createElement("a",{href:"https://www.instagram.com/satriahrh",className:"text-blue-400 hover:text-blue-600 text-2xl"},r.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.createElement("path",{d:"M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H384c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"}))),r.createElement("a",{href:"https://www.twitter.com/satriahrh",className:"text-pink-600 hover:text-pink-800 text-2xl"},r.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"}))),r.createElement("a",{href:"https://www.linkedin.com/in/satriahrh",className:"text-blue-700 hover:text-blue-900 text-2xl"},r.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))))),r.createElement("div",null),r.createElement("div",null,r.createElement("p",{className:"font-bold text-lg mb-2"},"Satria Hafizh Rizkitama Harsono"),r.createElement("p",{className:"mt-2 text-sm"},"t: +62 851 6262 xxxx"),r.createElement("p",{className:"mt-2 text-sm"},"e: info@satria.technology"))),r.createElement("div",{className:"container mx-auto text-center"},"© 2024 - satria.technology")));const w=()=>r.createElement("title",null,"Satria H R Harsono - Software Engineer")},3998:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRoABAABXRUJQVlA4WAoAAAAQAAAAEwAAGgAAQUxQSKQAAAABgGPb2rHn+ZGks9WmS2snpQfgEdiaRypbfdqURsXStnGje98pRMQEmBgdZM5Z2zjPdwk4AHAd5JCKv0kOjf+kOBR+AHhPdLBRANXmGHwIzJvuq1wGsBwv5W/h36c+Dwt+AK9gmRAHWJmyxOqUFx9pVpBMWqVi0it1kXppnKRJG8T6v4SPMGKnSghbF1aMLwozzHMhLDA7EwaY70koYv5ntu/9A1ZQOCC2AAAAEAUAnQEqFAAbAD7RVqZNqCQjojAYCAEAGglmALsBi/5wWgo4K+NmPwE/Pz9gtHOtIAD+7pj2N9HSYCS+shWfV2Y7v5+xygxsdFV3EL00BsKnZjj/IS13Tnif+dFYjfEo5ZXNSQDL6NhAsoQNFiVX/A/Y2CD7YJ6PXPbKq4CYOvtK39joqNEcOyqnWllqhaWm73v3PCZ9/sT273TMR5T2lFgN25uuQylh6JGBNCV/b3/cvTsAAAA="},"images":{"fallback":{"src":"/static/72a601f8f9959377841ed4eb67562105/d9033/asian-man-saying-good-job.webp","srcSet":"/static/72a601f8f9959377841ed4eb67562105/31860/asian-man-saying-good-job.webp 250w,\\n/static/72a601f8f9959377841ed4eb67562105/dfe62/asian-man-saying-good-job.webp 501w,\\n/static/72a601f8f9959377841ed4eb67562105/d9033/asian-man-saying-good-job.webp 1001w","sizes":"(min-width: 1001px) 1001px, 100vw"},"sources":[]},"width":1001,"height":1335}')},2441:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAGRiKClGiL/xAAbEAEBAAEFAAAAAAAAAAAAAAACAwEABBETIv/aAAgBAQABBQILy9xnFLU7KRzpTPFASv/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAgBAwEBPwGNf//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/Aaf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhAkH/2gAIAQEABj8CVd9FdhRYc9vaRI//xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/IahdjaKZ4VyXlTDGHw9/Zu0qTJmRXs//2gAMAwEAAgADAAAAEMgP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EBppBi//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAECAQE/EFDqU2//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMVFxQWH/2gAIAQEAAT8QaqdjtCfF48hVWJFWLo/oQFysKsCiPoGib64ziAIUQOnv2VZ4OlZ//9k="},"images":{"fallback":{"src":"/static/ea6db783d30bbb7e163d2c40da7b0471/1b035/i-have-idea.jpg","srcSet":"/static/ea6db783d30bbb7e163d2c40da7b0471/99f43/i-have-idea.jpg 250w,\\n/static/ea6db783d30bbb7e163d2c40da7b0471/28380/i-have-idea.jpg 500w,\\n/static/ea6db783d30bbb7e163d2c40da7b0471/1b035/i-have-idea.jpg 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/ea6db783d30bbb7e163d2c40da7b0471/48571/i-have-idea.webp 250w,\\n/static/ea6db783d30bbb7e163d2c40da7b0471/76f01/i-have-idea.webp 500w,\\n/static/ea6db783d30bbb7e163d2c40da7b0471/b7ef5/i-have-idea.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":667}')},3574:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAjklEQVR42pVQiw6AIAhMRO219f9/G7WjTrZqsZ3gkPOOYbgjAdlQkEdDM6wGod5RT4ZqmA1KHOchyIqhhsEFKMCGnoJwobvzXMpcXUZjxuMpqMmoFQ4KEXZ22ZLS735365WIBJlFdaQZtdIeW1Ci5EJpXR1ZVCo06Lut4SPhvX2FBBuJSH4RvalOT7vi2AE0WQH1LvW0ygAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/4245a750525f9629b962be31fa28b8ed/74309/half-globe-down.png","srcSet":"/static/4245a750525f9629b962be31fa28b8ed/a2986/half-globe-down.png 744w,\\n/static/4245a750525f9629b962be31fa28b8ed/ceda6/half-globe-down.png 1487w,\\n/static/4245a750525f9629b962be31fa28b8ed/74309/half-globe-down.png 2974w","sizes":"(min-width: 2974px) 2974px, 100vw"},"sources":[{"srcSet":"/static/4245a750525f9629b962be31fa28b8ed/75cc5/half-globe-down.webp 744w,\\n/static/4245a750525f9629b962be31fa28b8ed/1a585/half-globe-down.webp 1487w,\\n/static/4245a750525f9629b962be31fa28b8ed/84c06/half-globe-down.webp 2974w","type":"image/webp","sizes":"(min-width: 2974px) 2974px, 100vw"}]},"width":2974,"height":1120}')},5222:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABy/kfJqjVP//EABoQAAIDAQEAAAAAAAAAAAAAAAECAxESACH/2gAIAQEAAQUCgYHkIrSXJWFbyNBIv//EABURAQEAAAAAAAAAAAAAAAAAABEQ/9oACAEDAQE/AVn/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRIf/aAAgBAgEBPwGSpmn/xAAbEAACAgMBAAAAAAAAAAAAAAAAEQECEBIhkf/aAAgBAQAGPwK1Udw10ZtM29P/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUFRcf/aAAgBAQABPyEXKiU+wOvcVXe+RWkhOSKtb9lIK3gj/9oADAMBAAIAAwAAABBTL//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAx1kv/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QpJp//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBYZH/2gAIAQEAAT8Q9qeNL15KBQNGLJhakTj5OJeLOEicK27QW7QKYBrk/9k="},"images":{"fallback":{"src":"/static/9b524aa0aad0b026ac35f40282ea3e25/43434/business-executives-reading-sticky-notes.jpg","srcSet":"/static/9b524aa0aad0b026ac35f40282ea3e25/41616/business-executives-reading-sticky-notes.jpg 1677w,\\n/static/9b524aa0aad0b026ac35f40282ea3e25/1ee85/business-executives-reading-sticky-notes.jpg 3354w,\\n/static/9b524aa0aad0b026ac35f40282ea3e25/43434/business-executives-reading-sticky-notes.jpg 6708w","sizes":"(min-width: 6708px) 6708px, 100vw"},"sources":[{"srcSet":"/static/9b524aa0aad0b026ac35f40282ea3e25/cfb08/business-executives-reading-sticky-notes.webp 1677w,\\n/static/9b524aa0aad0b026ac35f40282ea3e25/d2909/business-executives-reading-sticky-notes.webp 3354w,\\n/static/9b524aa0aad0b026ac35f40282ea3e25/78606/business-executives-reading-sticky-notes.webp 6708w","type":"image/webp","sizes":"(min-width: 6708px) 6708px, 100vw"}]},"width":6708,"height":4472}')},6766:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAGrSwOUYU//xAAcEAEAAgEFAAAAAAAAAAAAAAACAQMRABITISL/2gAIAQEAAQUC2mSY7sHoZ4ypjVleX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEQITJBYYH/2gAIAQEABj8C0OjbH1krd8Ybs//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFhMUH/2gAIAQEAAT8hdTgfJSjfGxCpSYX3Dr+0Moi5O+T/2gAMAwEAAgADAAAAEDgf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/EMJb/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/EDYL/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFRQWGB0f/aAAgBAQABPxA0GKPRa58Yp4aCglun5GlZ2WB3CQmy6O5V5lkN5tzz9nZFq2PHZ//Z"},"images":{"fallback":{"src":"/static/4f4d984cf77f34e631d936a958172c04/ac0ec/discussing-mobile-app.jpg","srcSet":"/static/4f4d984cf77f34e631d936a958172c04/e4b93/discussing-mobile-app.jpg 375w,\\n/static/4f4d984cf77f34e631d936a958172c04/7284f/discussing-mobile-app.jpg 750w,\\n/static/4f4d984cf77f34e631d936a958172c04/ac0ec/discussing-mobile-app.jpg 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/static/4f4d984cf77f34e631d936a958172c04/7dad0/discussing-mobile-app.webp 375w,\\n/static/4f4d984cf77f34e631d936a958172c04/57584/discussing-mobile-app.webp 750w,\\n/static/4f4d984cf77f34e631d936a958172c04/87439/discussing-mobile-app.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1000.9999999999999}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ce74691cffae75da9041.js.map