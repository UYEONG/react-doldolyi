(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"23aj":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"Audio",function(){return S}),r.d(n,"Oval",function(){return j}),r.d(n,"TailSpin",function(){return N}),r.d(n,"Spinning",function(){return A}),r.d(n,"Puff",function(){return R}),r.d(n,"Rings",function(){return T}),r.d(n,"Grid",function(){return F}),r.d(n,"Hearts",function(){return K}),r.d(n,"Preloader",function(){return L});var a=r("bVN1"),c=r.n(a),l=r("FdmI"),i=r.n(l),o=r("LkAs"),u=r("Moms"),s=r("bMj6"),f=r("hZod"),d=r("YKN3"),m=r("tEuJ"),p=r("hHgk"),v=r.n(p);function E(e,t,r){return t in e?v()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=r("0EY2"),y=r.n(h),g=r("ERkP"),b=r.n(g);var w=function(){return(w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function x(e){var t,r,n=e.duration,a=e.delay,c=void 0===a?0:a,l=e.update,i=function(e){(t||(t=e+c),e>t)&&(l&&l((e-t)%n/n));r=window.requestAnimationFrame(i)};return r=window.requestAnimationFrame(i),function(){return window.cancelAnimationFrame(r)}}var k=[{x:0,width:12.5,height:25,rx:3.75,level:[56.25,71.25,100,80,40,82.5,56.25,80,28.75,82.5,16.25,80,70,42.5,42.5,.25,28.75,95,98.75,25]},{x:18.75,width:12.5,height:100,rx:3.75,level:[68.75,41.25,6.25,93.75,28.75,91.25,41.25,15,17.5,75,100]},{x:37.5,width:12.5,height:62.5,rx:3.75,level:[62.5,42.5,97.5,28.75,70,28.75,42.5,95,100,67.5,26.25,62.25]},{x:56.25,width:12.5,height:37.5,rx:3.75,level:[37.5,56.25,16.25,100,70,90,56.25,95,42.5,28.75,71.25,37.5]}];var O=function(e){var t=e.index,r=e.x,n=e.width,a=e.height,c=e.rx,l=e.level,i=e.duration,o=function(e,t){var r=Object(g.useRef)();return Object(g.useEffect)(function(){var n=1/e.length;return x({duration:t,update:function(t){var a=Math.floor(t/n),c=0===a?e.length-1:a-1,l=(t-n*a)/n,i=e[c]+l*(e[a]-e[c]);r.current.setAttribute("height",String(i))}})},[t]),r}(l,Object(g.useMemo)(function(){return 0===t?2.15*i:2===t?.7*i:i},[i]));return b.a.createElement("rect",{ref:o,x:r,width:n,height:a,rx:c})},S=function(e){for(var t=e.strokeColor,r=e.duration,n=[],a=0,c=k.length;a<c;a+=1){var l=k[a];n[a]=b.a.createElement(O,w({},l,{key:a,index:a,duration:r}))}return b.a.createElement("div",{className:"preloader-icon__audio"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 68.75 100"},b.a.createElement("g",{transform:"matrix(1 0 0 -1 0 100)",fill:t,strokeWidth:0},n)))};var j=function(e){var t=e.strokeWidth,r=e.strokeColor,n=e.duration,a=Object(g.useMemo)(function(){return 50-t/2},[t]),c=function(e){var t=Object(g.useRef)();return Object(g.useEffect)(function(){var r=t.current;return x({duration:e,update:function(e){r.setAttribute("transform","rotate("+360*e+")")}})},[e]),t}(n);return b.a.createElement("div",{className:"preloader-icon__oval"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 100 100"},b.a.createElement("g",{fill:"none",strokeWidth:t,stroke:r},b.a.createElement("circle",{strokeOpacity:".5",r:a}),b.a.createElement("path",{ref:c,d:"M0,-"+a+" a"+a+","+a+" 0 0,1 "+a+","+a,strokeWidth:t,stroke:r}))))};var N=function(e){var t=e.strokeWidth,r=e.strokeColor,n=e.duration,a=Object(g.useMemo)(function(){return 50-t/2},[t]),c=function(e){var t=Object(g.useRef)();return Object(g.useEffect)(function(){var r=t.current;return x({duration:e,update:function(e){r.setAttribute("transform","rotate("+360*e+")")}})},[e]),t}(n);return b.a.createElement("div",{className:"preloader-icon__tail-spin"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 100 100"},b.a.createElement("defs",null,b.a.createElement("linearGradient",{id:"tail",x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%"},b.a.createElement("stop",{stopColor:r,stopOpacity:"0",offset:"0%"}),b.a.createElement("stop",{stopColor:r,stopOpacity:".631",offset:"63.146%"}),b.a.createElement("stop",{stopColor:r,offset:"100%"}))),b.a.createElement("path",{ref:c,d:"M0,-"+a+" a"+a+","+a+" 0 0,1 "+a+","+a,stroke:"url(#tail)",strokeWidth:t,strokeLinecap:"round",fill:"none"})))};var A=function(e){var t=e.strokeWidth,r=e.strokeColor,n=e.duration,a=Object(g.useMemo)(function(){return 50-t/2},[t]),c=function(e){var t=Object(g.useRef)();return Object(g.useEffect)(function(){var r=[].slice.call(t.current.children),n=r.length,a=1/n,c=0;return x({duration:e,update:function(e){var t,l,i=Math.floor(e/a);i-1===c||0===i&&c===n-1||((l=r[c]).style.fillOpacity="0",c=0===i?n-1:i-1);var o=(e-a*i)/a;t=r[i],l=r[c],t.style.fillOpacity=String(o),l.style.fillOpacity=String(1-o)}})},[e]),t}(n);return b.a.createElement("div",{className:"preloader-icon__spinning"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 540 540"},b.a.createElement("g",{ref:c,stroke:r,strokeWidth:t},b.a.createElement("circle",{cx:"490",cy:"270",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"425.56",cy:"425.56",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"270",cy:"490",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"114.43",cy:"425.56",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"50",cy:"270",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"114.43",cy:"114.43",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"269.99",cy:"50",r:a,style:{fillOpacity:0},fill:r}),b.a.createElement("circle",{cx:"425.56",cy:"114.43",r:a,style:{fillOpacity:0},fill:r}))))},_=r("9Tt7"),C=r.n(_),M=C()(.165,.84,.44,1),V=C()(.3,.61,.355,1);var R=function(e){var t=e.strokeWidth,r=e.strokeColor,n=e.duration,a=function(e,t){var r=Object(g.useRef)();return Object(g.useEffect)(function(){var n=[].slice.call(r.current.children),a=n[0],c=n[1];return x({duration:t,update:function(t){var r=t>=.5?t-.5:t+.5;a.setAttribute("r",String(M(t)*e)),c.setAttribute("r",String(M(r)*e)),a.style.strokeOpacity=String(1-V(t)),c.style.strokeOpacity=String(1-V(r))}})},[t]),r}(Object(g.useMemo)(function(){return 50-t/2},[t]),n);return b.a.createElement("div",{className:"preloader-icon__puff"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 100 100"},b.a.createElement("g",{ref:a,strokeWidth:t,stroke:r,fill:"none"},b.a.createElement("circle",{r:"0",style:{strokeOpacity:1}}),b.a.createElement("circle",{r:"0",style:{strokeOpacity:1}}))))},W=50,B=[1,2.2,4.4,6.7,8.9,11.1,13.3],P=.14285714285714285;var T=function(e){var t=e.strokeColor,r=e.strokeWidth,n=function(e,t){var r=Object(g.useRef)(),n=Object(g.useRef)(),a=Object(g.useRef)();return Object(g.useEffect)(function(){var c=x({duration:t/2,update:function(e){var t=Math.floor(e/P),r=0===t?B.length-1:t-1,n=(e-P*t)/P,c=B[r]+n*(B[t]-B[r]);a.current.setAttribute("r",String(c))}}),l=x({duration:t,delay:t/2,update:function(t){r.current.setAttribute("r",String(t*(W-13.3)+13.3)),r.current.setAttribute("stroke-opacity",String(1-t)),r.current.setAttribute("stroke-width",String(e-e*t))}}),i=x({duration:t,delay:t,update:function(t){n.current.setAttribute("r",String(t*(W-13.3)+13.3)),n.current.setAttribute("stroke-opacity",String(1-t)),n.current.setAttribute("stroke-width",String(e-e*t))}});return function(){c(),l(),i()}},[t,e]),[r,n,a]}(r,e.duration),a=n[0],c=n[1],l=n[2];return b.a.createElement("div",{className:"preloader-icon__oval"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 100 100"},b.a.createElement("g",{stroke:t,strokeWidth:r,fill:"none"},b.a.createElement("circle",{ref:a,cx:"0",cy:"0",r:"13.3",strokeOpacity:"0"}),b.a.createElement("circle",{ref:c,cx:"0",cy:"0",r:"13.3",strokeOpacity:"0"}),b.a.createElement("circle",{ref:l,cx:"0",cy:"0",r:"13.3"}))))},z=[0,.3,.8,.1,.6,.4,.7,.5,.2];var F=function(e){var t=e.strokeColor,r=function(e){var t=Object(g.useRef)();return Object(g.useEffect)(function(){for(var r=[].slice.call(t.current.children),n=[],a=function(t,a){n[t]=x({duration:e,delay:e*z[t],update:function(e){var n=Math.abs(1-2*e);r[t].setAttribute("fill-opacity",String(.2+.8*n))}})},c=0,l=r.length;c<l;c+=1)a(c);return function(){for(var e=0,t=n.length;e<t;e+=1)n[e]()}},[e]),t}(e.duration);return b.a.createElement("div",{className:"preloader-icon__grid"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},b.a.createElement("g",{ref:r,fill:t},b.a.createElement("circle",{cx:"12",cy:"12",r:"12"}),b.a.createElement("circle",{cx:"50",cy:"12",r:"12"}),b.a.createElement("circle",{cx:"88",cy:"12",r:"12"}),b.a.createElement("circle",{cx:"12",cy:"50",r:"12"}),b.a.createElement("circle",{cx:"50",cy:"50",r:"12"}),b.a.createElement("circle",{cx:"88",cy:"50",r:"12"}),b.a.createElement("circle",{cx:"12",cy:"88",r:"12"}),b.a.createElement("circle",{cx:"50",cy:"88",r:"12"}),b.a.createElement("circle",{cx:"88",cy:"88",r:"12"}))))};var K=function(e){var t=e.strokeColor,r=function(e){var t=Object(g.useRef)(),r=Object(g.useRef)();return Object(g.useEffect)(function(){return x({duration:e,update:function(e){var n=e<=.5?2*e:2*(1-e),a=Math.abs(1-2*e);t.current.setAttribute("fill-opacity",String(.5+.5*n)),r.current.setAttribute("fill-opacity",String(.5+.5*a))}})},[e]),[t,r]}(e.duration),n=r[0],a=r[1];return b.a.createElement("div",{className:"preloader-icon__hearts"},b.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 140 64"},b.a.createElement("g",{fill:t},b.a.createElement("path",{ref:n,d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z"}),b.a.createElement("path",{ref:a,d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z"}),b.a.createElement("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"}))))},L=function(e){var t=e.className,r=void 0===t?"":t,n=e.style,a=void 0===n?{}:n,c=e.use,l=e.size,i=void 0===l?"100%":l,o=e.strokeWidth,u=void 0===o?3:o,s=e.strokeColor,f=void 0===s?"#f0ad4e":s,d=e.duration,m=void 0===d?800:d,p=Number.isNaN(Number(i))?i:i+"px";return b.a.createElement("div",{className:"preloader-icon "+r,style:w({width:p},a)},b.a.createElement("div",{className:"preloader-icon__inner",style:{width:"100%",position:"relative",overflow:"hidden",backfaceVisibility:"hidden",lineHeight:0}},b.a.createElement("em",{className:"preloader-icon__title",style:{position:"absolute",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:"0"}},"Loading..."),b.a.createElement(c,{strokeWidth:u,strokeColor:f,duration:m})))},U=r("PGnZ"),G=r.n(U),H=L,I=function(e){function t(){var e,r;Object(o.default)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return r=Object(s.default)(this,(e=Object(f.default)(t)).call.apply(e,[this].concat(a))),E(Object(d.default)(r),"state",{loader:"Oval",size:"60",strokeWidth:"6",strokeColor:"#262626",duration:"2000"}),E(Object(d.default)(r),"onChangeSelect",function(e){var t=e.currentTarget;r.setState({loader:t.value})}),E(Object(d.default)(r),"onKeyUpValue",function(e){var t=e.currentTarget,n=t.name;"Escape"===e.key&&(t.value=r.state[n]),"Enter"===e.key&&r.setState(E({},n,t.value))}),E(Object(d.default)(r),"onBlurValue",function(e){var t=e.currentTarget,n=t.name;t.value!==r.state[n]&&r.setState(E({},n,t.value))}),r}return Object(m.default)(t,e),Object(u.default)(t,[{key:"componentDidMount",value:function(){var e=(/loader=(\w+)/g.exec(location.search)||[])[1];e&&(e=(e=e.charAt(0).toUpperCase()+e.slice(1)).replace(/_(\w)/g,function(e){return e[1].toUpperCase()}),this.setState({loader:e}))}},{key:"componentDidUpdate",value:function(){window.Prism.highlightAll()}},{key:"render",value:function(){var e=this.state,t=e.loader,r=e.size,a=e.strokeWidth,l=e.strokeColor,o=e.duration;return b.a.createElement(b.a.Fragment,null,b.a.createElement(y.a,null,b.a.createElement("title",null,"Home"),b.a.createElement("meta",{name:"description",content:""}),b.a.createElement("meta",{name:"keywords",content:""})),b.a.createElement("article",{className:G.a.wrapper},b.a.createElement("div",{className:G.a.playground},b.a.createElement("section",{className:G.a.document},b.a.createElement("h1",{className:G.a.title},"React Preloader Icon"),b.a.createElement("p",{className:G.a.plain},"SVG loading icons component for React."),b.a.createElement("p",{className:G.a.plain},"Thank to ",b.a.createElement("a",{href:"https://github.com/SamHerbert/SVG-Loaders"},"SVG-Loaders")),b.a.createElement("h2",{className:G.a.subtitle},"Installation"),b.a.createElement("code",{className:G.a.code},"$ npm install --save react-preloader-icon",b.a.createElement("br",null),"$ yarn add react-preloader-icon"),b.a.createElement("h2",{className:G.a.subtitle},"Showcase"),b.a.createElement("div",{className:G.a.form},b.a.createElement("label",null,b.a.createElement("span",null,"Loader: "),b.a.createElement("select",{name:"loader",value:t,onChange:this.onChangeSelect},b.a.createElement("option",{value:"Audio"},"Audio"),b.a.createElement("option",{value:"Oval"},"Oval"),b.a.createElement("option",{value:"TailSpin"},"TailSpin"),b.a.createElement("option",{value:"Spinning"},"Spinning"),b.a.createElement("option",{value:"Puff"},"Puff"),b.a.createElement("option",{value:"Rings"},"Rings"),b.a.createElement("option",{value:"Grid"},"Grid"),b.a.createElement("option",{value:"Hearts"},"Hearts"))),b.a.createElement("label",null,b.a.createElement("span",null,"Size :"),b.a.createElement("input",{name:"size",type:"text",defaultValue:"60",onKeyUp:this.onKeyUpValue,onBlur:this.onBlurValue})),b.a.createElement("label",null,b.a.createElement("span",null,"Stroke Width :"),b.a.createElement("input",{name:"strokeWidth",type:"number",defaultValue:"6",onKeyUp:this.onKeyUpValue,onBlur:this.onBlurValue})),b.a.createElement("label",null,b.a.createElement("span",null,"Stroke Color :"),b.a.createElement("input",{name:"strokeColor",type:"text",defaultValue:"#262626",onKeyUp:this.onKeyUpValue,onBlur:this.onBlurValue})),b.a.createElement("label",null,b.a.createElement("span",null,"Duration :"),b.a.createElement("input",{name:"duration",type:"number",defaultValue:"2000",onKeyUp:this.onKeyUpValue,onBlur:this.onBlurValue}))),b.a.createElement("div",{className:G.a.demo},b.a.createElement(H,{use:n[t],size:r,strokeWidth:i()(a,10),strokeColor:l,duration:i()(o,10)}))),b.a.createElement("section",{className:G.a.example},b.a.createElement("pre",null,b.a.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:"\n                      import React from 'react';\n                      import { Preloader, ".concat(t," } from 'react-preloader-icon';\n                      \n                      const SomeComponent = () => (\n                        &lt;Preloader>\n                          use={").concat(t,"}\n                          size=").concat(c()(Number(r))?'"'.concat(r,'"'):"{".concat(r,"}"),"\n                          strokeWidth={").concat(a,'}\n                          strokeColor="').concat(l,'"\n                          duration={').concat(o,"}\n                        />\n                      );\n                    ")}}))))))}}]),t}(b.a.Component);t.default=I},"79+t":function(e,t,r){var n=r("/6KZ"),a=r("bvQF");n(n.G+n.F*(parseInt!=a),{parseInt:a})},"8cf0":function(e,t,r){var n=r("/6KZ"),a=r("Xj5l"),c=r("/Vl9"),l=r("M5cM"),i="["+l+"]",o=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),s=function(e,t,r){var a={},i=c(function(){return!!l[e]()||"​"!="​"[e]()}),o=a[e]=i?t(f):l[e];r&&(a[r]=o),n(n.P+n.F*i,"String",a)},f=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(u,"")),e};e.exports=s},"9Tt7":function(e,t){var r=4,n=.001,a=1e-7,c=10,l=11,i=1/(l-1),o="function"==typeof Float32Array;function u(e,t){return 1-3*t+3*e}function s(e,t){return 3*t-6*e}function f(e){return 3*e}function d(e,t,r){return((u(t,r)*e+s(t,r))*e+f(t))*e}function m(e,t,r){return 3*u(t,r)*e*e+2*s(t,r)*e+f(t)}function p(e){return e}e.exports=function(e,t,u,s){if(!(0<=e&&e<=1&&0<=u&&u<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&u===s)return p;for(var f=o?new Float32Array(l):new Array(l),v=0;v<l;++v)f[v]=d(v*i,e,u);function E(t){for(var o=0,s=1,p=l-1;s!==p&&f[s]<=t;++s)o+=i;var v=o+(t-f[--s])/(f[s+1]-f[s])*i,E=m(v,e,u);return E>=n?function(e,t,n,a){for(var c=0;c<r;++c){var l=m(t,n,a);if(0===l)return t;t-=(d(t,n,a)-e)/l}return t}(t,v,e,u):0===E?v:function(e,t,r,n,l){var i,o,u=0;do{(i=d(o=t+(r-t)/2,n,l)-e)>0?r=o:t=o}while(Math.abs(i)>a&&++u<c);return o}(t,o,o+i,e,u)}return function(e){return 0===e?0:1===e?1:d(E(e),t,s)}}},FdmI:function(e,t,r){e.exports=r("n7m4")},M5cM:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},WjHl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("23aj");return{page:e.default||e}}])},X0zA:function(e,t,r){var n=r("/6KZ");n(n.S,"Number",{isNaN:function(e){return e!=e}})},bVN1:function(e,t,r){e.exports=r("tLiR")},bvQF:function(e,t,r){var n=r("41F1").parseInt,a=r("8cf0").trim,c=r("M5cM"),l=/^[-+]?0[xX]/;e.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(e,t){var r=a(String(e),3);return n(r,t>>>0||(l.test(r)?16:10))}:n},n7m4:function(e,t,r){r("79+t"),e.exports=r("TaGV").parseInt},tLiR:function(e,t,r){r("X0zA"),e.exports=r("TaGV").Number.isNaN}},[["WjHl","5d41","9da1","ad9d"]]]);