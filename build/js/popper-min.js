!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Popper={})}(this,(function(e){"use strict";function t(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function r(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function n(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function o(e){return e instanceof r(e).Element||e instanceof Element}function i(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return(o(e)?e.ownerDocument:e.document).documentElement}function f(e){return t(s(e)).left+n(e).scrollLeft}function p(e,o,p){var c;void 0===p&&(p=!1);var u,d,l=t(e),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return p||("body"!==a(o)&&(m=(u=o)!==r(u)&&i(u)?{scrollLeft:(d=u).scrollLeft,scrollTop:d.scrollTop}:n(u)),i(o)?((h=t(o)).x+=o.clientLeft,h.y+=o.clientTop):(c=s(o))&&(h.x=f(c))),{x:l.left+m.scrollLeft-h.x,y:l.top+m.scrollTop-h.y,width:l.width,height:l.height}}function c(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function u(e){return"html"===a(e)?e:e.parentNode||e.host||document.ownerDocument||document.documentElement}function d(e){return r(e).getComputedStyle(e)}function l(e,t){void 0===t&&(t=[]);var n=function e(t){if(["html","body","#document"].indexOf(a(t))>=0)return t.ownerDocument.body;if(i(t)){var r=d(t),n=r.overflow,o=r.overflowX,s=r.overflowY;if(/auto|scroll|overlay|hidden/.test(n+s+o))return t}return e(u(t))}(e),o="body"===a(n),s=o?r(n):n,f=t.concat(s);return o?f:f.concat(l(u(s)))}function m(e){return["table","td","th"].indexOf(a(e))>=0}var h=function(){return void 0!==window.InstallTrigger};function v(e){var t;return!i(e)||!(t=e.offsetParent)||h()&&"fixed"===d(t).position?null:t}function b(e){for(var t=r(e),n=v(e);n&&m(n);)n=v(n);return n&&"body"===a(n)&&"static"===d(n).position?t:n||t}var g="top",y="bottom",w="right",x="left",O="auto",j=[g,y,w,x],E="start",M="end",k="clippingParents",D="viewport",S="popper",P="reference",q=j.reduce((function(e,t){return e.concat([t+"-"+E,t+"-"+M])}),[]),L=[].concat(j,[O]).reduce((function(e,t){return e.concat([t,t+"-"+E,t+"-"+M])}),[]),B=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function T(e){var t=new Map,r=new Set,n=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||function e(o){r.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(n){if(!r.has(n)){var o=t.get(n);o&&e(o)}})),n.push(o)}(e)})),n}function W(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return[].concat(r).reduce((function(e,t){return e.replace(/%s/,t)}),e)}var A='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',H='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',R=["name","enabled","phase","fn","effect","requires","options"];function C(e){return e.split("-")[0]}var I="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",N="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",_={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function U(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?_:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,{},a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],m=!1,h={state:f,setOptions:function(r){v(),f.options=Object.assign({},a,{},f.options,{},r),f.scrollParents={reference:o(e)?l(e):[],popper:l(t)};var i=function(e){var t=T(e);return B.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,{},t,{options:Object.assign({},r.options,{},t.options),data:Object.assign({},r.data,{},t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,f.options.modifiers)));(f.orderedModifiers=i.filter((function(e){return e.enabled})),function(e){e.forEach((function(t){Object.keys(t).forEach((function(r){switch(r){case"name":"string"!=typeof t.name&&console.error(W(A,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":"boolean"!=typeof t.enabled&&console.error(W(A,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));case"phase":B.indexOf(t.phase)<0&&console.error(W(A,t.name,'"phase"',"either "+B.join(", "),'"'+String(t.phase)+'"'));break;case"fn":"function"!=typeof t.fn&&console.error(W(A,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":"function"!=typeof t.effect&&console.error(W(A,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":Array.isArray(t.requires)||console.error(W(A,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(W(A,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+R.map((function(e){return'"'+e+'"'})).join(", ")+'; but "'+r+'" was provided.')}t.requires&&t.requires.forEach((function(r){null==e.find((function(e){return e.name===r}))&&console.error(W(H,String(t.name),r,r))}))}))}))}((s=[].concat(i,f.options.modifiers),p=function(e){return e.name},c=new Set,s.filter((function(e){var t=p(e);if(!c.has(t))return c.add(t),!0})))),C(f.options.placement)===O)&&(f.orderedModifiers.find((function(e){return"flip"===e.name}))||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" ")));var s,p,c,m=d(t);return[m.marginTop,m.marginRight,m.marginBottom,m.marginLeft].some((function(e){return parseFloat(e)}))&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" ")),f.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:h,options:n});u.push(i||function(){})}})),h.update()},forceUpdate:function(){if(!m){var e=f.elements,t=e.reference,r=e.popper;if(F(t,r)){f.rects={reference:p(t,b(r),"fixed"===f.options.strategy),popper:c(r)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0,o=0;o<f.orderedModifiers.length;o++){if((n+=1)>100){console.error(N);break}if(!0!==f.reset){var i=f.orderedModifiers[o],a=i.fn,s=i.options,u=void 0===s?{}:s,d=i.name;"function"==typeof a&&(f=a({state:f,options:u,name:d,instance:h})||f)}else f.reset=!1,o=-1}}else console.error(I)}},update:(i=function(){return new Promise((function(e){h.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){v(),m=!0}};if(!F(e,t))return console.error(I),h;function v(){u.forEach((function(e){return e()})),u=[]}return h.setOptions(r).then((function(e){!m&&r.onFirstUpdate&&r.onFirstUpdate(e)})),h}}var V={passive:!0};function z(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?C(o):null,a=o?z(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(i){case g:t={x:s,y:r.y-n.height};break;case y:t={x:s,y:r.y+r.height};break;case w:t={x:r.x+r.width,y:f};break;case x:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var p=i?X(i):null;if(null!=p){var c="y"===p?"height":"width";switch(a){case E:t[p]=Math.floor(t[p])-Math.floor(r[c]/2-n[c]/2);break;case M:t[p]=Math.floor(t[p])+Math.ceil(r[c]/2-n[c]/2)}}return t}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,f=e.position,p=e.gpuAcceleration,c=e.adaptive,u=function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:Math.round(t*n)/n||0,y:Math.round(r*n)/n||0}}(a),d=u.x,l=u.y,m=a.hasOwnProperty("x"),h=a.hasOwnProperty("y"),v=x,O=g,j=window;if(c){var E=b(n);E===r(n)&&(E=s(n)),i===g&&(O=y,l-=E.clientHeight-o.height,l*=p?1:-1),i===x&&(v=w,d-=E.clientWidth-o.width,d*=p?1:-1)}var M,k=Object.assign({position:f},c&&G);return p?Object.assign({},k,((M={})[O]=h?"0":"",M[v]=m?"0":"",M.transform=(j.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",M)):Object.assign({},k,((t={})[O]=h?l+"px":"",t[v]=m?d+"px":"",t.transform="",t))}var K={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var Z={start:"end",end:"start"};function $(e){return e.replace(/start|end/g,(function(e){return Z[e]}))}function ee(e){return parseFloat(e)||0}function te(e){var t=r(e),n=function(e){var t=i(e)?d(e):{};return{top:ee(t.borderTopWidth),right:ee(t.borderRightWidth),bottom:ee(t.borderBottomWidth),left:ee(t.borderLeftWidth)}}(e),o="html"===a(e),s=f(e),p=e.clientWidth+n.right,c=e.clientHeight+n.bottom;return o&&t.innerHeight-e.clientHeight>50&&(c=t.innerHeight-n.bottom),{top:o?0:e.clientTop,right:e.clientLeft>n.left?n.right:o?t.innerWidth-p-s:e.offsetWidth-p,bottom:o?t.innerHeight-c:e.offsetHeight-c,left:o?s:e.clientLeft}}function re(e,t){var r=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(r){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,o){return o===D?ne(function(e){var t=r(e);return{width:t.innerWidth,height:t.innerHeight,x:0,y:0}}(e)):i(o)?t(o):ne(function(e){var t=r(e),o=n(e),i=p(s(e),t);return i.height=Math.max(i.height,t.innerHeight),i.width=Math.max(i.width,t.innerWidth),i.x=-o.scrollLeft,i.y=-o.scrollTop,i}(s(e)))}function ie(e,t,r){var n="clippingParents"===t?function(e){var t=l(e),r=["absolute","fixed"].indexOf(d(e).position)>=0&&i(e)?b(e):e;return o(r)?t.filter((function(e){return o(e)&&re(e,r)})):[]}(e):[].concat(t),a=[].concat(n,[r]),f=a[0],p=a.reduce((function(t,r){var n=oe(e,r),o=te(i(r)?r:s(e));return t.top=Math.max(n.top+o.top,t.top),t.right=Math.min(n.right-o.right,t.right),t.bottom=Math.min(n.bottom-o.bottom,t.bottom),t.left=Math.max(n.left+o.left,t.left),t}),oe(e,f));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function se(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function fe(e,r){void 0===r&&(r={});var n=r,i=n.placement,a=void 0===i?e.placement:i,f=n.boundary,p=void 0===f?k:f,c=n.rootBoundary,u=void 0===c?D:c,d=n.elementContext,l=void 0===d?S:d,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,b=void 0===v?0:v,x=ae("number"!=typeof b?b:se(b,j)),O=l===S?P:S,E=e.elements.reference,M=e.rects.popper,q=e.elements[h?O:l],L=ie(o(q)?q:s(e.elements.popper),p,u),B=t(E),T=Y({reference:B,element:M,strategy:"absolute",placement:a}),W=ne(Object.assign({},M,{},T)),A=l===S?W:B,H={top:L.top-A.top+x.top,bottom:A.bottom-L.bottom+x.bottom,left:L.left-A.left+x.left,right:A.right-L.right+x.right},R=e.modifiersData.offset;if(l===S&&R){var C=R[a];Object.keys(H).forEach((function(e){var t=[w,y].indexOf(e)>=0?1:-1,r=[g,y].indexOf(e)>=0?"y":"x";H[e]+=C[r]*t}))}return H}function pe(e,t,r){return Math.max(e,Math.min(t,r))}function ce(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ue(e){return[g,w,y,x].some((function(t){return e[t]>=0}))}var de=[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,p=r(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",n.update,V)})),f&&p.addEventListener("resize",n.update,V),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",n.update,V)})),f&&p.removeEventListener("resize",n.update,V)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=d(t.elements.popper).transitionProperty;a&&["transform","top","right","bottom","left"].some((function(e){return s.indexOf(e)>=0}))&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',"\n\n",'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.","\n\n","We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "));var f={placement:C(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};t.styles.popper=Object.assign({},t.styles.popper,{},J(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a}))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},J(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];i(o)&&a(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:"absolute",left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});i(n)&&a(n)&&(Object.assign(n.style,s),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=L.reduce((function(e,r){return e[r]=function(e,t,r){var n=C(e),o=[x,g].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[x,w].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],f=s.x,p=s.y;t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=p,t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.fallbackPlacements,i=r.padding,a=r.boundary,s=r.rootBoundary,f=r.altBoundary,p=r.flipVariations,c=void 0===p||p,u=t.options.placement,d=C(u),l=o||(d===u||!c?[Q(u)]:function(e){if(C(e)===O)return[];var t=Q(e);return[$(e),t,$(t)]}(u)),m=[u].concat(l).reduce((function(e,r){return e.concat(C(r)===O?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,f=z(n),p=(f?s?q:q.filter((function(e){return z(e)===f})):j).reduce((function(t,r){return t[r]=fe(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[C(r)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:r,boundary:a,rootBoundary:s,padding:i,flipVariations:c}):r)}),[]),h=t.rects.reference,v=t.rects.popper,b=new Map,M=!0,k=m[0],D=0;D<m.length;D++){var S=m[D],P=C(S),L=z(S)===E,B=[g,y].indexOf(P)>=0,T=B?"width":"height",W=fe(t,{placement:S,boundary:a,rootBoundary:s,altBoundary:f,padding:i}),A=B?L?w:x:L?y:g;h[T]>v[T]&&(A=Q(A));var H=Q(A),R=[W[P]<=0,W[A]<=0,W[H]<=0];if(R.every((function(e){return e}))){k=S,M=!1;break}b.set(S,R)}if(M)for(var I=function(e){var t=m.find((function(t){var r=b.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},N=c?3:1;N>0;N--){if("break"===I(N))break}t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,f=r.boundary,p=r.rootBoundary,u=r.altBoundary,d=r.padding,l=r.tether,m=void 0===l||l,h=r.tetherOffset,v=void 0===h?0:h,O=fe(t,{boundary:f,rootBoundary:p,padding:d,altBoundary:u}),j=C(t.placement),M=z(t.placement),k=!M,D=X(j),S="x"===D?"y":"x",P=t.modifiersData.popperOffsets,q=t.rects.reference,L=t.rects.popper,B="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,T={x:0,y:0};if(i){var W="y"===D?g:x,A="y"===D?y:w,H="y"===D?"height":"width",R=P[D],I=P[D]+O[W],N=P[D]-O[A],_=m?-L[H]/2:0,F=M===E?q[H]:L[H],U=M===E?-L[H]:-q[H],V=t.elements.arrow,Y=m&&V?c(V):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[W],K=G[A],Q=pe(0,q[H],Y[H]),Z=k?q[H]/2-_-Q-J-B:F-Q-J-B,$=k?-q[H]/2+_+Q+K+B:U+Q+K+B,ee=t.elements.arrow&&b(t.elements.arrow),te=ee?"y"===D?ee.clientTop||0:ee.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][D]:0,ne=P[D]+Z-re-te,oe=P[D]+$-re,ie=pe(m?Math.min(I,ne):I,R,m?Math.max(N,oe):N);P[D]=ie,T[D]=ie-R}if(s){var ae="x"===D?g:x,se="x"===D?y:w,ce=P[S],ue=pe(ce+O[ae],ce,ce-O[se]);t.modifiersData.popperOffsets[S]=ue,T[S]=ue-ce}t.modifiersData[n]=T},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=r.elements.arrow,i=r.modifiersData.popperOffsets,a=C(r.placement),s=X(a),f=[x,w].indexOf(a)>=0?"height":"width";if(o){var p=r.modifiersData[n+"#persistent"].padding,u=c(o),d="y"===s?g:x,l="y"===s?y:w,m=r.rects.reference[f]+r.rects.reference[s]-i[s]-r.rects.popper[f],h=i[s]-r.rects.reference[s],v=r.elements.arrow&&b(r.elements.arrow),O=m/2-h/2-(v?"y"===s?v.clientLeft||0:v.clientTop||0:0),j=pe(p[d],r.rects.popper[f]/2-u[f]/2+O,r.rects.popper[f]-u[f]-p[l]),E=s;r.modifiersData[n]=((t={})[E]=j,t)}},effect:function(e){var t=e.state,r=e.options,n=e.name,o=r.element,i=void 0===o?"[data-popper-arrow]":o,a=r.padding,s=void 0===a?0:a;("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&(re(t.elements.popper,i)?(t.elements.arrow=i,t.modifiersData[n+"#persistent"]={padding:ae("number"!=typeof s?s:se(s,j))}):console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper',"element."].join(" ")))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=ce(a,n),p=ce(s,o,i),c=ue(f),u=ue(p);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}],le=U({defaultModifiers:de});e.createPopper=le,e.defaultModifiers=de,e.popperGenerator=U,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper-min.js.map