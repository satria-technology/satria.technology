"use strict";(self.webpackChunksatria_technology=self.webpackChunksatria_technology||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,a,n)=>{let s=!1,o=!1,l=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,l=o,o=!0,i++):o&&l&&r.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),l=o,o=!1,s=!0):(s=a(c)===c&&n(c)!==c,l=o,o=n(c)===c&&a(c)!==c)}return e})(e,s,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,i.lastIndex=0,e.replace(l,((e,r)=>t(r))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{L:function(){return f},M:function(){return E},P:function(){return x},S:function(){return $},_:function(){return l},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return i}});var a=r(7294),n=(r(3204),r(5697)),s=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(r=s[a])>=0||(n[r]=e[r]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,s,l,i){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),i&&(c.objectPosition=i);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,r=l(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:n,alt:s="",shouldLoad:i}=e,c=l(e,h);return a.createElement("img",o({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,alt:s}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,s=l(e,g);const i=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(b,o({},s,t,{sizes:i,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return a.createElement("source",{key:`${t}-${s}-${r}`,type:s,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:i})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,r=l(e,v);return t?a.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],A=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],T=new Set;let R,O;const I=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:f,onError:h}=e,g=l(e,L);const{width:b,height:y,layout:w}=n,v=c(b,y,w),{style:x,className:E}=v,N=l(v,j),k=(0,a.useRef)(),A=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const S=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(w,b,y);return(0,a.useEffect)((()=>{R||(R=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(A);if(O&&T.has(A))return;let t,a;return R.then((e=>{let{renderImageToString:r,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=r(o({isLoading:!0,isLoaded:T.has(A),image:n},g)),T.has(A)||(t=requestAnimationFrame((()=>{k.current&&(a=l(k.current,A,T,s,p,f,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{T.has(A)&&O&&(k.current.innerHTML=O(o({isLoading:T.has(A),isLoaded:T.has(A),image:n},g)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[n]),(0,a.createElement)(t,o({},N,{style:o({},x,s,{backgroundColor:u}),className:`${E}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},z=(0,a.memo)((function(e){return e.image?(0,a.createElement)(I,e):null}));z.propTypes=C,z.displayName="GatsbyImage";const H=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:r,__imageData:n,__error:s}=t,i=l(t,H);return s&&console.warn(s),n?a.createElement(e,o({image:n},i)):(console.warn("Image not loaded",r),null)}}const q=P((function(e){let{as:t="div",className:r,class:n,style:s,image:i,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:g,objectFit:b,objectPosition:y}=e,w=l(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),h=o({objectFit:b,objectPosition:y,backgroundColor:g},h);const{width:v,height:S,layout:C,images:L,placeholder:j,backgroundColor:T}=i,R=c(v,S,C),{style:O,className:I}=R,z=l(R,k),H={fallback:void 0,sources:[]};return L.fallback&&(H.fallback=o({},L.fallback,{srcSet:L.fallback.srcSet?A(L.fallback.srcSet):void 0})),L.sources&&(H.sources=L.sources.map((e=>o({},e,{srcSet:A(e.srcSet)})))),a.createElement(t,o({},z,{style:o({},O,s,{backgroundColor:g}),className:`${I}${r?` ${r}`:""}`}),a.createElement(f,{layout:C,width:v,height:S},a.createElement(x,o({},d(j,!1,C,v,S,T,b,y))),a.createElement(E,o({"data-gatsby-image-ssr":"",className:p},w,u("eager"===m,!1,H,m,h)))))})),V=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},_=new Set(["fixed","fullWidth","constrained"]),M={src:s().string.isRequired,alt:S,width:V,height:V,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=M;const $=P(z);$.displayName="StaticImage",$.propTypes=M},2134:function(e,t,r){r.r(t),r.d(t,{Head:function(){return y},default:function(){return b}});var a=r(7294),n=r(8032);function s(e,t,r,a){return new(r||(r=Promise))((function(n,s){function o(e){try{i(a.next(e))}catch(e){s(e)}}function l(e){try{i(a.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}i((a=a.apply(e,t||[])).next())}))}function o(e,t){var r,a,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,a&&(n=2&s[0]?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,a=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],a=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],a=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,s=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=s.next()).done;)o.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return o}function c(e,t,r){if(r||2===arguments.length)for(var a,n=0,s=t.length;n<s;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}function u(e,t,r,a,n){for(var u=[],p=5;p<arguments.length;p++)u[p-5]=arguments[p];return s(this,void 0,void 0,(function(){var s,p,f,h,g,b;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,12,13,14]),s=l(u),p=s.next(),o.label=1;case 1:if(p.done)return[3,11];switch(typeof(f=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,d(e,t,f,r,a,n)];case 3:return o.sent(),[3,10];case 4:return[4,m(f)];case 5:return o.sent(),[3,10];case 6:return[4,f.apply(void 0,c([e,t,r,a,n],i(u),!1))];case 7:return o.sent(),[3,10];case 8:return[4,f];case 9:o.sent(),o.label=10;case 10:return p=s.next(),[3,1];case 11:return[3,14];case 12:return h=o.sent(),g={error:h},[3,14];case 13:try{p&&!p.done&&(b=s.return)&&b.call(s)}finally{if(g)throw g.error}return[7];case 14:return[2]}}))}))}function d(e,t,r,a,n,l){return s(this,void 0,void 0,(function(){var s,u;return o(this,(function(o){switch(o.label){case 0:return s=e.textContent||"",u=function(e,t){var r=i(t).slice(0);return c(c([],i(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(s,r),[4,p(e,c(c([],i(h(s,t,u)),!1),i(f(r,t,u)),!1),a,n,l)];case 1:return o.sent(),[2]}}))}))}function m(e){return s(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function p(e,t,r,a,n){return s(this,void 0,void 0,(function(){var s,c,u,d,p,f,h,g,b,y,w,v,x;return o(this,(function(E){switch(E.label){case 0:if(s=t,n){for(c=0,u=1;u<t.length;u++)if(d=i([t[u-1],t[u]],2),p=d[0],(f=d[1]).length>p.length||""===f){c=u;break}s=t.slice(c,t.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),h=l(function(e){var t,r,a,n,s,i,c;return o(this,(function(u){switch(u.label){case 0:t=function(e){return o(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),r=l(e),a=r.next(),u.label=2;case 2:return a.done?[3,5]:(n=a.value,[5,t(n)]);case 3:u.sent(),u.label=4;case 4:return a=r.next(),[3,2];case 5:return[3,8];case 6:return s=u.sent(),i={error:s},[3,8];case 7:try{a&&!a.done&&(c=r.return)&&c.call(r)}finally{if(i)throw i.error}return[7];case 8:return[2]}}))}(s)),g=h.next(),E.label=2;case 2:return g.done?[3,5]:(b=g.value,y="WRITING"===b.opCode(e)?r+r*(Math.random()-.5):a+a*(Math.random()-.5),b.op(e),[4,m(y)]);case 3:E.sent(),E.label=4;case 4:return g=h.next(),[3,2];case 5:return[3,8];case 6:return w=E.sent(),v={error:w},[3,8];case 7:try{g&&!g.done&&(x=h.return)&&x.call(h)}finally{if(v)throw v.error}return[7];case 8:return[2]}}))}))}function f(e,t,r){var a,n;return void 0===r&&(r=0),o(this,(function(s){switch(s.label){case 0:a=t(e),n=a.length,s.label=1;case 1:return r<n?[4,a.slice(0,++r).join("")]:[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}}))}function h(e,t,r){var a,n;return void 0===r&&(r=0),o(this,(function(s){switch(s.label){case 0:a=t(e),n=a.length,s.label=1;case 1:return n>r?[4,a.slice(0,--n).join("")]:[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var g=(0,a.memo)((0,a.forwardRef)((function(e,t){var r=e.sequence,n=e.repeat,s=e.className,o=e.speed,l=void 0===o?40:o,d=e.deletionSpeed,m=e.omitDeletionAnimation,p=void 0!==m&&m,f=e.preRenderFirstString,h=void 0!==f&&f,g=e.wrapper,b=void 0===g?"span":g,y=e.splitter,w=void 0===y?function(e){return c([],i(e),!1)}:y,v=e.cursor,x=void 0===v||v,E=e.style,N=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),k=N["aria-label"],A=N["aria-hidden"],S=N.role;d||(d=l);var C=new Array(2).fill(40);[l,d].forEach((function(e,t){switch(typeof e){case"number":C[t]=Math.abs(e-100);break;case"object":var r=e.type,a=e.value;if("number"!=typeof a)break;"keyStrokeDelayInMs"===r&&(C[t]=a)}}));var L,j,T,R,O,I,z=C[0],H=C[1],P=function(e,t){void 0===t&&(t=null);var r=(0,a.useRef)(t);return(0,a.useEffect)((function(){e&&("function"==typeof e?e(r.current):e.current=r.current)}),[e]),r}(t),q="index-module_type__E-SaG";L=s?"".concat(x?q+" ":"").concat(s):x?q:"",j=(0,a.useRef)((function(){var e,t=r;n===1/0?e=u:"number"==typeof n&&(t=Array(1+n).fill(r).flat());var a=e?c(c([],i(t),!1),[e],!1):c([],i(t),!1);return u.apply(void 0,c([P.current,w,z,H,p],i(a),!1)),function(){P.current}})),T=(0,a.useRef)(),R=(0,a.useRef)(!1),O=(0,a.useRef)(!1),I=i((0,a.useState)(0),2)[1],R.current&&(O.current=!0),(0,a.useEffect)((function(){return R.current||(T.current=j.current(),R.current=!0),I((function(e){return e+1})),function(){O.current&&T.current&&T.current()}}),[]);var V=b,_=h?r.find((function(e){return"string"==typeof e}))||"":null;return a.createElement(V,{"aria-hidden":A,"aria-label":k,role:S,style:E,className:L,children:k?a.createElement("span",{"aria-hidden":"true",ref:P,children:_}):_,ref:k?void 0:P})})),(function(e,t){return!0}));var b=()=>a.createElement("div",{className:"min-h-screen flex flex-col"},a.createElement("header",{className:"bg-gradient-to-r from-slate-100 to-red-100"},a.createElement("div",{className:"mx-auto px-8 max-w-screen-lg container"},a.createElement("div",{className:"lg:flex lg:justify-between lg:items-center py-6"},a.createElement("div",{className:"flex justify-between items-center"},a.createElement("div",null,a.createElement("a",{href:"/",className:"font-extrabold text-lg uppercase"},"satria.technology")))))),a.createElement("div",null,a.createElement("div",{className:"bg-gradient-to-r from-slate-100 to-red-100 mb-32 md:mb-0"},a.createElement("div",{className:"max-w-screen-lg container mx-auto relative flex flex-col-reverse sm:items-center sm:grid sm:grid-cols-2 sm:gap-4"},a.createElement("div",{className:"absolute sm:relative bg-white sm:bg-transparent h-fit border-l-2 border-t-2 border-b-4 border-r-4 sm:border-none border-b-slate-500 border-r-slate-500 -bottom-28 sm:bottom-0 p-4 md:py-0 md:px-4 space-y-2 z-10"},a.createElement("div",{className:"space-y-2"},a.createElement("p",{className:"text-2xl md:text-4xl"},"This is"," ",a.createElement("span",{className:"font-semibold sm:font-bold"},"Satria"),"."),a.createElement(g,{preRenderFirstString:!0,wrapper:"p",repeat:1/0,speed:70,className:"text-xl md:text-4xl font-semibold sm:font-bold",sequence:["I'm a Software Engineer",1e3,"I'm a Tech Leader",1e3,"Business Oriented",1e3,"Product Engineer",1e3]}),a.createElement("div",{className:"flex flex-row gap-2 flex-wrap"},a.createElement("a",{href:"https://calendly.com/satriahrh/talk",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-gray-800 font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:bg-gray-200"},"Let's talk"),a.createElement("a",{href:"https://blog.satria.technology",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-gray-800 font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:bg-gray-200"},"Check Blog & Discuss"),a.createElement("a",{href:"https://www.linkedin.com/in/satriahrh",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-gray-800 font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:bg-gray-200"},"Check Linkedin"))),a.createElement("div",{className:"text-xs text-slate-400"},a.createElement("span",null,a.createElement("a",{href:"https://www.freepik.com/free-photo/asian-man-saying-good-job_6802044.htm"},"Hero image by pressfoto")),", on Freepik")),a.createElement(n.S,{src:"../images/asian-man-saying-good-job.webp",placeholder:"blurred",alt:"Stock Photo",__imageData:r(3998)}))),a.createElement("main",null,a.createElement("div",{className:"container max-w-screen-xl mx-auto my-12"},a.createElement("div",{className:"text-center grid sm:grid-cols-2 xl:border-b-4 xl:border-r-4 border-0 border-b-slate-500 border-r-slate-500"},a.createElement("div",{className:"text-left p-8 bg-red-50 space-y-4"},a.createElement(g,{preRenderFirstString:!0,wrapper:"p",repeat:1/0,speed:70,className:"text-xl md:text-4xl font-bold",sequence:["Interested in my profile?",1e3,"Need a tech expert?",1e3,"Catch up and reconnect?",1e3]}),a.createElement("div",{className:"flex flex-row gap-2 flex-wrap"},a.createElement("a",{href:"https://calendly.com/satriahrh/talk",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-gray-800 font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:bg-gray-200"},"Let's talk"),a.createElement("a",{href:"https://www.linkedin.com/in/satriahrh",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-gray-800 font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:bg-gray-200"},"Check Linkedin"))),a.createElement("div",{className:"text-left p-8 bg-red-600 text-white space-y-4"},a.createElement("p",{className:"text-xl md:text-2xl lg:text-4xl font-bold"},"Helping Junior Developer in navigate their career."),a.createElement("a",{href:"https://blog.satria.technology",className:"block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-gray-800 font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:bg-gray-200"},"Check Blog & Discuss")))))),a.createElement("footer",{className:"bg-slate-800 text-white py-12"},a.createElement("div",{className:"container max-w-screen-lg mx-auto pb-4 px-8 lg:px-0 mb-4 border-b border-white flex flex-col gap-6 sm:gap-0 sm:grid sm:grid-cols-3"},a.createElement("div",null,a.createElement("p",{className:"text-md mt-4"},"Collaboration and Technical Excelence to Deliver Business Value"),a.createElement("div",{className:"flex flex-row gap-4 mt-4"},a.createElement("a",{href:"https://www.facebook.com/satriahrh",className:"text-blue-600 hover:text-blue-800"},a.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"}))),a.createElement("a",{href:"https://www.instagram.com/satriahrh",className:"text-blue-400 hover:text-blue-600 text-2xl"},a.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{d:"M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H384c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"}))),a.createElement("a",{href:"https://www.twitter.com/satriahrh",className:"text-pink-600 hover:text-pink-800 text-2xl"},a.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"}))),a.createElement("a",{href:"https://www.linkedin.com/in/satriahrh",className:"text-blue-700 hover:text-blue-900 text-2xl"},a.createElement("svg",{className:"h-6 w-6",fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))))),a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"font-bold text-lg mb-2"},"Satria Hafizh Rizkitama Harsono"),a.createElement("p",{className:"mt-2 text-sm"},"t: +62 851 6262 xxxx"),a.createElement("p",{className:"mt-2 text-sm"},"e: info@satria.technology"))),a.createElement("div",{className:"container mx-auto text-center"},"© 2024 - satria.technology")));const y=()=>a.createElement("title",null,"Satria H R Harsono - Software Engineer")},3998:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRoABAABXRUJQVlA4WAoAAAAQAAAAEwAAGgAAQUxQSKQAAAABgGPb2rHn+ZGks9WmS2snpQfgEdiaRypbfdqURsXStnGje98pRMQEmBgdZM5Z2zjPdwk4AHAd5JCKv0kOjf+kOBR+AHhPdLBRANXmGHwIzJvuq1wGsBwv5W/h36c+Dwt+AK9gmRAHWJmyxOqUFx9pVpBMWqVi0it1kXppnKRJG8T6v4SPMGKnSghbF1aMLwozzHMhLDA7EwaY70koYv5ntu/9A1ZQOCC2AAAAEAUAnQEqFAAbAD7RVqZNqCQjojAYCAEAGglmALsBi/5wWgo4K+NmPwE/Pz9gtHOtIAD+7pj2N9HSYCS+shWfV2Y7v5+xygxsdFV3EL00BsKnZjj/IS13Tnif+dFYjfEo5ZXNSQDL6NhAsoQNFiVX/A/Y2CD7YJ6PXPbKq4CYOvtK39joqNEcOyqnWllqhaWm73v3PCZ9/sT273TMR5T2lFgN25uuQylh6JGBNCV/b3/cvTsAAAA="},"images":{"fallback":{"src":"/static/72a601f8f9959377841ed4eb67562105/d9033/asian-man-saying-good-job.webp","srcSet":"/static/72a601f8f9959377841ed4eb67562105/31860/asian-man-saying-good-job.webp 250w,\\n/static/72a601f8f9959377841ed4eb67562105/dfe62/asian-man-saying-good-job.webp 501w,\\n/static/72a601f8f9959377841ed4eb67562105/d9033/asian-man-saying-good-job.webp 1001w","sizes":"(min-width: 1001px) 1001px, 100vw"},"sources":[]},"width":1001,"height":1335}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3d9c7a0327d63c325b25.js.map