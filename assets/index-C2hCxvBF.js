var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function O(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+O(t)):e.value!==``+O(t)&&(e.value=``+O(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,O(n)):Zt(e,o,O(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+O(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+O(n),t=t==null?n:``+O(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+O(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+O(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+O(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=O(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function k(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=k(kn),jn=h({},kn,{view:0,detail:0}),Mn=k(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=k(In),Rn=k(h({},In,{dataTransfer:0})),zn=k(h({},jn,{relatedTarget:0})),Bn=k(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=k(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),A=k(h({},kn,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=k(h({},jn,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=k(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=k(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=k(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=k(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=k(h({},kn,{newState:0,oldState:0})),$n=[9,13,27,32],er=yn&&`CompositionEvent`in window,tr=null;yn&&`documentMode`in document&&(tr=document.documentMode);var nr=yn&&`TextEvent`in window&&!tr,rr=yn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Tn(),wn=Cn=Sn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function fr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Gt(Ot(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(yn){var yr;if(yn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,fn(e)),_n(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=yn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Kt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};yn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),Nt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),di(e)}function M(e,t){return ci(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=mi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=mi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=mi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-Je(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=me(null),Zi=null,Qi=null;function $i(e,t,n){D(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,he(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,F={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new la,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=T.S;T.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=me(null);function Ca(){var e=Sa.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?D(Sa,Sa.current):D(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:F._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function I(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Ma(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case w:return t=Ma(t),f(e,t,n)}if(ue(t)||se(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,I(t),n);if(t.$$typeof===S)return f(e,sa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Ma(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,I(n),r);if(n.$$typeof===S)return p(e,t,sa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Ma(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,I(r),i);if(r.$$typeof===S)return m(e,t,n,sa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Ma(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,I(o),c);if(o.$$typeof===S)return b(e,r,sa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return ci(e,r,t,n),di(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=_a;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ga&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=me(null),no=me(0);function ro(e,t){e=Wl,D(no,e),D(to,t),Wl=e|t.baseLanes}function io(){D(no,Wl),D(to,to.current)}function ao(){Wl=no.current,he(to),he(no)}var oo=me(null),so=null;function co(e){var t=e.alternate;D(L,L.current&1),D(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){D(L,L.current),D(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(D(L,L.current),D(oo,e),so===null&&(so=e)):fo(e)}function fo(){D(L,L.current),D(oo,oo.current)}function po(e){he(oo),so===e&&(so=null),he(L)}var L=me(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,go=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function B(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Vs:Hs,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){T.H=Bs;var t=z!==null&&z.next!==null;if(ho=0,go=z=R=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&ia(e)&&(ac=!0))}function Do(e,t,n,r){R=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,go=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Us,o=t(n,r)}while(vo);return o}function Oo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function ko(){var e=bo!==0;return bo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}ho=0,go=z=R=null,vo=!1,xo=bo=0,So=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return go===null?R.memoizedState=go=e:go=go.next=e,go}function V(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=go===null?R.memoizedState:go.next;if(t!==null)go=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},go===null?R.memoizedState=go=e:go=go.next=e}return go}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ja(So,e,t),t=R,(go===null?t.memoizedState:go.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===S)return oa(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(V(),z,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((ho&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(ac=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=V(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=R,a=V(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||go!==null&&go.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||ho&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=No(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function Ko(e){var t=M(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,z,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=R;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,R,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,R,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(V(),z,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=V();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=V(),n=z;if(n!==null)return is(t,n,e);V(),t=t.memoizedState,n=V();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=No(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return V().memoizedState}function ls(e,t,n,r){var i=Mo();R.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=V();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&wo(r,z.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(R.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=No(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=V().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||ho&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Cs(e,t,n,r){return kr(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(J&261930)?(ac=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=Ss(e,n,r),kr(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Is(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ba(c,r),pu(e)):Fs(e,t,r,pu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,de,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},pu())}function ks(){return oa(Qf)}function As(){return V().memoizedState}function js(){return V().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,pu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Ls(e){var t=e.alternate;return e===R||t!==null&&t===R}function Rs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Bs={readContext:oa,use:Fo,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B};Bs.useEffectEvent=B;var Vs={readContext:oa,use:Fo,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(Mo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,R,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=Mo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return Mo().memoizedState=Ms.bind(null,R)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:oa,use:Fo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(V(),z.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(V(),z,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:oa,use:Fo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=V();return z===null?Ss(n,e,t):Cs(n,z.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=V();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,z,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ri(e)}function Xs(e){console.error(e)}function Zs(e){ri(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Ka(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=oo.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=ec(e.stateNode,r,a),Ya(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!ac?(Ao(e,t,i),jc(e,t,i)):(P&&s&&Ii(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(ac=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),io(),fo(t)):(wa(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:F._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),io(),uo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Va(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(lo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ac||ra(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=K,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,M(e,s),hu(r,e,s),ic;Du(),t=mc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=pc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return aa(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!ac?(Ao(e,t,i),jc(e,t,i)):(P&&r&&Ii(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!ac?(Ao(e,t,a),jc(e,t,a)):(P&&r&&Ii(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Ua||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Ua||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return qi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ta()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(L.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(a?co(t):fo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(co(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(ac||ra(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=K,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,M(e,r),hu(s,e,r),ic;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ta():(l=F._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Va(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=L.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(L,o),oc(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ia(e)))}function Nc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),$i(t,F,e.memoizedState.cache),qi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(L,L.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:$i(t,F,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Mc(e,n)&&!(t.flags&128))return ac=!1,Nc(e,t,n);ac=!!(e.flags&131072)}}else ac=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,F,r),r!==o.cache&&na(t,[F],n,!0),Za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),At(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(F),e===null?(a=Ca(),a===null&&(a=K,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),$i(t,F,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,F,r),r!==a.cache&&na(t,[F],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,F,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Na=ka,Da}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(F),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=ge.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=ge.current,Ki(t))Wi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ea(t.type),H(t),null;case 19:if(he(L),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return D(L,L.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return H(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=L.current,D(L,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(F),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(F),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(L),null;case 4:return xe(),null;case 10:return ea(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&he(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(F),null;case 25:return null;default:return null}}function Hc(e,t){switch(Li(t),t.tag){case 3:ea(F),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:he(L);break;case 10:ea(t.type);break;case 22:case 23:po(t),ao(),e!==null&&he(Sa);break;case 24:ea(F)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(F),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(F).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?mt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||P){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Jl=e}else Jl=536870912}return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),st(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Vl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,jo(e),Ia=null,La=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=rt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){R=null,T.H=Bs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Qs(e,wi(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=T.H;return T.H=Bs,e===null?Bs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=rt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Qi=Zi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:jo(t);default:Hc(n,t),t=q=_i(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Qi=Zi=null,jo(t),Ia=null,La=0;var i=t.return;try{if(rc(e,i,t,n,J)){X=1,Qs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Qs(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,ct(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=ec(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=tc(2),r=qa(t,n,2),r!==null&&(nc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=M(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=nt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=nt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case qr:case Jr:case Yr:l=Bn;break;case $r:l=Xn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(j(c)){if(vr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(j(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new A(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new A(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,zt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);At(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),At(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,At(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=M(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=M(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=M(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e,t){return new URL(e,t).href},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=le(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),se(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:ce(t))}function r(e,t){ie(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ue(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return T(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function T(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function E(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=ke((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??fe(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function fe(e){let t=pe(e);return he(t),t}function pe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),pe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of me(e.path))a(e,t,!0,n)}),t}function me(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=me(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function he(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var D=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(D.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`)),Re=e=>e.replace(/\/+$/,``),ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=x.createContext(null);Ze.displayName=`DataRouter`;var Qe=x.createContext(null);Qe.displayName=`DataRouterState`;var $e=x.createContext(!1);function et(){return x.useContext($e)}var tt=x.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=x.createContext(new Map);nt.displayName=`Fetchers`;var rt=x.createContext(null);rt.displayName=`Await`;var it=x.createContext(null);it.displayName=`Navigation`;var at=x.createContext(null);at.displayName=`Location`;var ot=x.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=x.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){w(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(it),{hash:i,pathname:a,search:o}=xt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return x.useContext(at)!=null}function ht(){return w(mt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(at).location}var gt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function _t(e){x.useContext(it).static||x.useLayoutEffect(e)}function vt(){let{isDataRoute:e}=x.useContext(ot);return e?Rt():yt()}function yt(){w(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ze),{basename:t,navigator:n}=x.useContext(it),{matches:r}=x.useContext(ot),{pathname:i}=ht(),a=JSON.stringify(Pe(r)),o=x.useRef(!1);return _t(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(ie(o.current,gt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function bt(){let{matches:e}=x.useContext(ot);return e[e.length-1]?.params??{}}function xt(e,{relative:t}={}){let{matches:n}=x.useContext(ot),{pathname:r}=ht(),i=JSON.stringify(Pe(n));return x.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function St(e,t){return Ct(e,t)}function Ct(e,t,n){w(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(it),{matches:i}=x.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ht(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):E(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=At(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function wt(){let e=Lt(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Tt=x.createElement(wt,null),Et=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(ot.Provider,{value:this.props.routeContext},x.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Ot,{error:e},t):t}};Et.contextType=$e;var Dt=new WeakMap;function Ot({children:e,error:t}){let{basename:n}=x.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let r=Dt.get(t);if(r)throw r;let i=Ke(e.location,n),a=i.absoluteURL||i.to;if(Xe(a))throw Error(`Invalid redirect location`);if(Ge&&!Dt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Dt.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function kt({routeContext:e,match:t,children:n}){let r=x.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ot.Provider,{value:e},n)}function At(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Tt,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(kt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Et,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function jt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mt(e){let t=x.useContext(Ze);return w(t,jt(e)),t}function Nt(e){let t=x.useContext(Qe);return w(t,jt(e)),t}function Pt(e){let t=x.useContext(ot);return w(t,jt(e)),t}function Ft(e){let t=Pt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function It(){return Ft(`useRouteId`)}function Lt(){let e=x.useContext(st),t=Nt(`useRouteError`),n=Ft(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=Mt(`useNavigate`),t=Ft(`useNavigate`),n=x.useRef(!1);return _t(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{ie(n.current,gt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,ie(!1,n))}x.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Ct(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function O(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ht({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(it.Provider,{value:c},x.createElement(at.Provider,{children:t,value:h}))}function Ut({children:e,location:t}){return St(Wt(e),t)}x.Component;function Wt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Wt(e.props.children,i));return}w(e.type===O,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Wt(e.props.children,i)),n.push(a)}),n}var Gt=`get`,Kt=`application/x-www-form-urlencoded`;function qt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Jt(e){return qt(e)&&e.tagName.toLowerCase()===`button`}function Yt(e){return qt(e)&&e.tagName.toLowerCase()===`form`}function Xt(e){return qt(e)&&e.tagName.toLowerCase()===`input`}function Zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Zt(e)}var $t=null;function en(){if($t===null)try{new FormData(document.createElement(`form`),0),$t=!1}catch{$t=!0}return $t}var tn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function nn(e){return e!=null&&!tn.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`),null):e}function rn(e,t){let n,r,i,a,o;if(Yt(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`enctype`))||Kt,a=new FormData(e)}else if(Jt(e)||Xt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`formenctype`))||nn(o.getAttribute(`enctype`))||Kt,a=new FormData(o,e),!en()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(qt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gt,r=null,i=Kt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&ke(i.pathname,t)===`/`?`${Re(t)}/_root.${r}`:`${Re(i.pathname)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=x.useContext(Ze);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=x.useContext(Qe);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=x.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=x.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=x.useContext(vn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=et(),{nonce:r}=yn(),{router:i}=gn(),a=x.useMemo(()=>E(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(wn,{page:e,matches:a,...t}):x.createElement(Tn,{page:e,matches:a,...t})):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=ht(),{future:i}=yn(),{basename:a}=gn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=ht(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=x.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function On({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Ht,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var k=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(it),v=typeof l==`string`&&ee.test(l),y=Ke(l,h);l=y.to;let b=pt(l,{relative:r}),S=ht(),C=null;if(o){let e=Fe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=bn(n,p),w=Nn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||w(t)}let ae=!(y.isExternal||i),oe=x.createElement(`a`,{...p,...re,href:(ae?C:void 0)||y.absoluteURL||b,onClick:ae?ie:e,ref:En(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,oe,x.createElement(Sn,{page:b})):oe});k.displayName=`Link`;var kn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=xt(a,{relative:c.relative}),d=ht(),f=x.useContext(Qe),{navigator:p,basename:m}=x.useContext(it),h=f!=null&&Rn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ke(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(k,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});kn.displayName=`NavLink`;var An=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(it),g=In(),_=Ln(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mn(e){let t=x.useContext(Ze);return w(t,jn(e)),t}function Nn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=vt(),d=ht(),f=xt(e,{relative:o});return x.useCallback(p=>{if(Qt(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Pn=0,Fn=()=>`__${String(++Pn)}__`;function In(){let{router:e}=Mn(`useSubmit`),{basename:t}=x.useContext(it),n=It(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=rn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Fn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ln(e,{relative:t}={}){let{basename:n}=x.useContext(it),r=x.useContext(ot);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...xt(e||`.`,{relative:t})},o=ht();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),ce(a)}function Rn(e,{relative:t}={}){let n=x.useContext(tt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mn(`useViewTransitionState`),i=xt(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var zn=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),Bn=o(((e,t)=>{t.exports=zn()})),Vn=c(g(),1),A=Bn(),Hn={pt:{nav_home:`Início`,nav_docs:`Docs`,nav_components:`Componentes`,nav_github:`GitHub ↗`,lang_btn:`PT Idioma`,search_label:`Busca rápida`,search_placeholder:`Buscar docs...`,search_no_results:`Sem resultados.`,sidebar_title:`Documentação`,nav_getting_started:`Primeiros passos`,nav_veneer:`Veneer Spec DSL`,nav_manifest:`Manifest Schema`,nav_tooling:`CLI & Tooling`,sandbox_back:`← Voltar ao Catálogo de Componentes`,tab_sandbox:`Playground & Sandbox`,tab_doc:`Manual Técnico (.md)`,btn_see_manifest:`Ver Manifest JSON ➔`,btn_see_vnr:`← Ver Veneer Spec (.vnr)`,label_shadow_dom:`Renderização ao Vivo (Shadow DOM)`,label_vnr_editor:`Editor Veneer Spec (.vnr)`,label_manifest:`Manifesto Compilado (manifest.json)`,label_updates_live:`Atualiza ao editar o .vnr ➔`,catalog_title:`Catálogo de Componentes`,catalog_desc:`Explore os componentes React pré-construídos do ecossistema SPM para montagem em Shadow DOM.`,catalog_primitives:`Primitivas de Layout`,catalog_dedicated:`Componentes Dedicados`,home_hero_eyebrow:`ECOSSISTEMA SITE PACKAGE MANAGER`,home_hero_title:`Modernização Declarativa de Páginas Legadas em Shadow DOM`,home_hero_desc:`Transforme tabelas feias dos anos 90, formulários antigos e HTML legado em aplicações React de última geração sem alterar uma linha de código do backend.`,home_btn_docs:`Explorar Documentação →`,home_btn_components:`Ver Catálogo de Componentes`,home_map_eyebrow:`MAPA DO PORTAL`,home_map_title:`Arquitetura e Recursos do SPM`,home_showcase_eyebrow:`DEMONSTRAÇÃO AO VIVO`,home_showcase_title:`Do HTML Legado dos Anos 90 ao React Moderno`,home_pipeline_eyebrow:`FLUXO DE FUNCIONAMENTO`,home_pipeline_title:`Como o SPM Intercepta e Moderniza`,home_faq_eyebrow:`PERGUNTAS FREQUENTES (FAQ)`,home_faq_title:`Perguntas Frequentes sobre o SPM`,footer_tagline:`O ecossistema open-source de reconstrução e modernização declarativa de aplicações web legadas utilizando Shadow DOM e React.`,footer_col_nav:`Navegação`,footer_col_repos:`Repositórios GitHub`,footer_col_spec:`Especificação`,footer_copyright:`© 2026 SPM Ecosystem. Licença MIT. Desenvolvido para modernização de aplicações web.`,footer_online:`Engine v1.0.0 Online`},en:{nav_home:`Home`,nav_docs:`Docs`,nav_components:`Components`,nav_github:`GitHub ↗`,lang_btn:`EN Language`,search_label:`Quick Search`,search_placeholder:`Search docs...`,search_no_results:`No results found.`,sidebar_title:`Documentation`,nav_getting_started:`Getting Started`,nav_veneer:`Veneer Spec DSL`,nav_manifest:`Manifest Schema`,nav_tooling:`CLI & Tooling`,sandbox_back:`← Back to Component Catalog`,tab_sandbox:`Playground & Sandbox`,tab_doc:`Technical Manual (.md)`,btn_see_manifest:`View Manifest JSON ➔`,btn_see_vnr:`← View Veneer Spec (.vnr)`,label_shadow_dom:`Live Rendering (Shadow DOM)`,label_vnr_editor:`Veneer Spec (.vnr) Editor`,label_manifest:`Compiled Manifest (manifest.json)`,label_updates_live:`Updates live on .vnr edit ➔`,catalog_title:`Component Catalog`,catalog_desc:`Explore pre-built SPM ecosystem React components designed for Shadow DOM mounting.`,catalog_primitives:`Layout Primitives`,catalog_dedicated:`Dedicated Components`,home_hero_eyebrow:`SITE PACKAGE MANAGER ECOSYSTEM`,home_hero_title:`Declarative Modernization of Legacy Web Pages in Shadow DOM`,home_hero_desc:`Transform raw 90s HTML tables, legacy forms, and unstyled markup into state-of-the-art React applications without modifying a single line of backend server code.`,home_btn_docs:`Explore Documentation →`,home_btn_components:`View Component Catalog`,home_map_eyebrow:`PORTAL MAP`,home_map_title:`SPM Architecture & Features`,home_showcase_eyebrow:`LIVE SHOWCASE`,home_showcase_title:`From 90s Legacy HTML to Modern React`,home_pipeline_eyebrow:`ARCHITECTURE PIPELINE`,home_pipeline_title:`How SPM Intercepts and Modernizes`,home_faq_eyebrow:`FREQUENTLY ASKED QUESTIONS (FAQ)`,home_faq_title:`Frequently Asked Questions about SPM`,footer_tagline:`The open-source ecosystem for declarative reconstruction and modernization of legacy web applications using Shadow DOM and React.`,footer_col_nav:`Navigation`,footer_col_repos:`GitHub Repositories`,footer_col_spec:`Specification`,footer_copyright:`© 2026 SPM Ecosystem. MIT License. Built for web application modernization.`,footer_online:`Engine v1.0.0 Online`}},Un=(0,x.createContext)(void 0);function Wn({children:e}){let[t,n]=(0,x.useState)(()=>{let e=localStorage.getItem(`spm_portal_lang`);return e===`en`||e===`pt`?e:`en`});return(0,x.useEffect)(()=>{localStorage.setItem(`spm_portal_lang`,t)},[t]),(0,A.jsx)(Un.Provider,{value:{lang:t,toggleLang:()=>{n(e=>e===`pt`?`en`:`pt`)},setLang:e=>{n(e)},t:e=>Hn[t]?.[e]||Hn.en[e]||Hn.pt[e]||e},children:e})}function Gn(){let e=(0,x.useContext)(Un);if(!e)throw Error(`useLanguage must be used within a LanguageProvider`);return e}var Kn=()=>(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,A.jsx)(`img`,{src:`https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg`,alt:`SPM Logo`,style:{height:28,width:`auto`}}),(0,A.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontWeight:700,fontSize:14,color:`#fff`,letterSpacing:0},children:`Portal`})]});function qn(){let e=ht(),{toggleLang:t,t:n}=Gn(),r=(t,n)=>{let r=e.pathname===t||t!==`/`&&e.pathname.startsWith(t);return(0,A.jsx)(k,{to:t,style:{color:r?`#fff`:`var(--text-muted)`,textDecoration:`none`,fontSize:13,fontWeight:600,transition:`color 0.15s`,letterSpacing:0},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=r?`#fff`:`var(--text-muted)`,children:n})};return(0,A.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:100,background:`rgba(6,6,6,0.88)`,backdropFilter:`blur(12px)`,borderBottom:`1px solid var(--border-contrast)`,padding:`0 2rem`,height:56,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,A.jsx)(k,{to:`/`,style:{textDecoration:`none`},children:(0,A.jsx)(Kn,{})}),(0,A.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:`1.5rem`},children:[(0,A.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Trocar idioma`,style:{display:`inline-flex`,alignItems:`center`,gap:`0.4rem`,minHeight:`28px`,border:`1px solid var(--border-contrast)`,borderRadius:`4px`,background:`var(--bg-element)`,color:`#fff`,cursor:`pointer`,font:`700 11px/1 var(--font-mono)`,padding:`0 0.65rem`,transition:`border-color 0.15s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`rgba(255,255,255,0.4)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`var(--border-contrast)`,children:n(`lang_btn`)}),r(`/docs/getting-started`,n(`nav_docs`)),r(`/components`,n(`nav_components`)),(0,A.jsx)(`a`,{href:`https://github.com/spm-ecosystem`,target:`_blank`,rel:`noreferrer`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontSize:13,fontWeight:500,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:n(`nav_github`)})]})]})}function Jn(){let{t:e}=Gn();return(0,A.jsx)(`footer`,{style:{background:`var(--bg-surface)`,borderTop:`1px solid var(--border-contrast)`,color:`var(--text-muted)`,padding:`4rem 2rem 3rem`,marginTop:`auto`,fontSize:13,lineHeight:1.6},children:(0,A.jsxs)(`div`,{style:{maxWidth:1180,margin:`0 auto`},children:[(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`3rem`,marginBottom:`3.5rem`},children:[(0,A.jsxs)(`div`,{style:{gridColumn:`span 1`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:`1rem`},children:[(0,A.jsx)(`img`,{src:`https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg`,alt:`SPM Logo`,style:{height:24}}),(0,A.jsx)(`span`,{style:{color:`#fff`,fontWeight:800,fontSize:16,fontFamily:`var(--font-mono)`},children:`SPM Portal`})]}),(0,A.jsx)(`p`,{style:{color:`var(--text-subtle)`,fontSize:13,margin:`0 0 1.25rem`,lineHeight:1.65},children:e(`footer_tagline`)}),(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,A.jsx)(`span`,{style:{display:`inline-block`,width:8,height:8,borderRadius:`50%`,background:`#34d399`}}),(0,A.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:11,color:`#34d399`,fontWeight:600},children:e(`footer_online`)})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{color:`#fff`,marginBottom:`1rem`,fontWeight:700},children:e(`footer_col_nav`)}),(0,A.jsxs)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`flex`,flexDirection:`column`,gap:`0.6rem`},children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:e(`nav_home`)})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/docs/getting-started`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:e(`nav_getting_started`)})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/docs/veneer`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:e(`nav_veneer`)})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/components`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:e(`nav_components`)})})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{color:`#fff`,marginBottom:`1rem`,fontWeight:700},children:e(`footer_col_repos`)}),(0,A.jsxs)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`flex`,flexDirection:`column`,gap:`0.6rem`},children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`https://github.com/spm-ecosystem/site-package-manager`,target:`_blank`,rel:`noreferrer`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:`site-package-manager ↗`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`https://github.com/spm-ecosystem/spm-cli`,target:`_blank`,rel:`noreferrer`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:`spm-cli ↗`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`https://github.com/spm-ecosystem/spm-components`,target:`_blank`,rel:`noreferrer`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:`spm-components ↗`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`https://github.com/spm-ecosystem/spm-websites`,target:`_blank`,rel:`noreferrer`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:`spm-websites ↗`})})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{color:`#fff`,marginBottom:`1rem`,fontWeight:700},children:e(`footer_col_spec`)}),(0,A.jsxs)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`flex`,flexDirection:`column`,gap:`0.6rem`},children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/docs/manifest`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:e(`nav_manifest`)})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/docs/tooling`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:e(`nav_tooling`)})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(k,{to:`/docs/veneer/syntax`,style:{color:`var(--text-muted)`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`#fff`,onMouseLeave:e=>e.currentTarget.style.color=`var(--text-muted)`,children:`Veneer Syntax`})})]})]})]}),(0,A.jsxs)(`div`,{style:{paddingTop:`2rem`,borderTop:`1px solid var(--border-contrast)`,display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`1rem`,fontSize:12,color:`var(--text-subtle)`,fontFamily:`var(--font-mono)`},children:[(0,A.jsx)(`div`,{children:e(`footer_copyright`)}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`},children:[(0,A.jsx)(`span`,{children:`Privacy`}),(0,A.jsx)(`span`,{children:`Terms`}),(0,A.jsx)(`span`,{children:`GitHub Ecosystem`})]})]})]})})}var Yn=[{index:`01`,badge:`Guia Rápido`,title:`Documentação Operacional`,desc:`Passo a passo completo de instalação local, build da extensão Chrome, injeção de scripts no navegador e sistema de anti-flicker.`,tags:[`Instalação`,`Build MV3`,`Anti-Flicker`],href:`/docs/getting-started`},{index:`02`,badge:`Gramática DSL`,title:`Veneer Spec DSL`,desc:`Sintaxe declarativa para extrair seletores do DOM legado, definir classes com herança e mapear bindings diretamente para componentes React.`,tags:[`Classes & Herança`,`Bindings`,`Regex Raw Strings`],href:`/docs/veneer`},{index:`03`,badge:`Especificação Schema`,title:`Manifest Schema Reference`,desc:`Estrutura e contrato do formato JSON emitido pelo compilador spm-cli e consumido pela extensão para reconstrução de páginas em runtime.`,tags:[`JSON Schema`,`Props Extraction`,`Shadow DOM Slots`],href:`/docs/manifest`},{index:`04`,badge:`Biblioteca UI`,title:`Catálogo de Componentes`,desc:`Contratos e especificações dos 17 componentes React (primitivas e dedicados) pré-construídos para montar páginas modernas no Shadow DOM.`,tags:[`17 Componentes`,`CSS Variables`,`Shadow Isolation`],href:`/components`}],Xn=[{step:`01`,phase:`DOM Scraping`,title:`Inspecionar DOM Legado`,desc:`Mapeie os containers, tabelas, formulários e elementos existentes na aplicação original. O SPM identifica como os dados estão organizados no HTML legado para reutilizá-los.`,bullets:[`Identificação de seletores CSS estáveis`,`Preservação de inputs ocultos de segurança`,`Mapeamento de listas e tabelas de dados`],terminalHeader:`DOM Legado (Original)`,jsxLines:[(0,A.jsx)(`span`,{className:`syn-comment`,children:`<!-- HTML Original da Página Legada -->`},`1`),(0,A.jsxs)(`span`,{children:[`<`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`table`}),` `,(0,A.jsx)(`span`,{className:`syn-attr`,children:`id`}),`=`,(0,A.jsx)(`span`,{className:`syn-string`,children:`"legacy-grid"`}),` `,(0,A.jsx)(`span`,{className:`syn-attr`,children:`class`}),`=`,(0,A.jsx)(`span`,{className:`syn-string`,children:`"data-table"`}),`>`]},`2`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0<`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`tr`}),` `,(0,A.jsx)(`span`,{className:`syn-attr`,children:`class`}),`=`,(0,A.jsx)(`span`,{className:`syn-string`,children:`"item-row"`}),`>`]},`3`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0<`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`td`}),`><`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`a`}),` `,(0,A.jsx)(`span`,{className:`syn-attr`,children:`href`}),`=`,(0,A.jsx)(`span`,{className:`syn-string`,children:`"/item/102"`}),`>Item #102</`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`a`}),`></`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`td`}),`>`]},`4`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0<`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`td`}),`>Ativo</`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`td`}),`>`]},`5`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0</`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`tr`}),`>`]},`6`),(0,A.jsxs)(`span`,{children:[`</`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`table`}),`>`]},`7`)],align:`card-left`},{step:`02`,phase:`Layout DSL`,title:`Declarar em Veneer Spec`,desc:`Escreva regras de transformação em arquivos .vnr limpos. Mapeie os elementos raspados para propriedades de componentes React de forma declarativa e fortemente tipada.`,bullets:[`Suporte a herança de classes (extends)`,`Extratores customizados (text, attr, html)`,`Expressões regulares sem escape em Raw Strings`],terminalHeader:`Veneer Spec (.vnr)`,jsxLines:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`span`,{className:`syn-keyword`,children:`class`}),` `,(0,A.jsx)(`span`,{className:`syn-class`,children:`GridItem`}),` `,`{`]},`1`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0`,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`bind`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`title`}),`: `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"a | text"`}),`;`]},`2`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0`,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`bind`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`url`}),`:   `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"a | attr:href"`}),`;`]},`3`),(0,A.jsx)(`span`,{children:`}`},`4`),(0,A.jsx)(`span`,{children:`\xA0`},`5`),(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`span`,{className:`syn-keyword`,children:`reconstruct`}),` `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"#legacy-grid"`}),` `,(0,A.jsx)(`span`,{className:`syn-operator`,children:`->`}),` `,(0,A.jsx)(`span`,{className:`syn-class`,children:`UiTableListPage`}),` `,`{`]},`6`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0`,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`child`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`tableRows`}),` `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`extends`}),` `,(0,A.jsx)(`span`,{className:`syn-class`,children:`GridItem`}),` `,`{`]},`7`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0`,(0,A.jsx)(`span`,{className:`syn-prop`,children:`selector`}),`: `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"tr.item-row"`}),`;`]},`8`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0`,`}`]},`9`),(0,A.jsx)(`span`,{children:`}`},`10`)],align:`card-right`},{step:`03`,phase:`C++ Toolchain`,title:`Compilar com spm-cli`,desc:`O compilador spm-cli processa os arquivos .vnr em velocidade nativa C++. Ele resolve grafos de herança, valida a sintaxe e gera o manifesto JSON otimizado com suporte a hot-reload por WebSockets.`,bullets:[`Compilação nativa ultra-rápida em C++17`,`Resolução de dependências circulares`,`Servidor de Hot-Reload via WebSockets (porta 8080)`],terminalHeader:`Terminal (spm-cli)`,jsxLines:[(0,A.jsx)(`span`,{className:`syn-cmd`,children:`$ ./spm compile theme/ -o dist/manifest.json`},`1`),(0,A.jsx)(`span`,{style:{color:`#4ade80`},children:`✓ Lexing & AST parsing complete`},`2`),(0,A.jsx)(`span`,{style:{color:`#4ade80`},children:`✓ Blueprint class inheritance resolved`},`3`),(0,A.jsx)(`span`,{style:{color:`#4ade80`},children:`✓ Deep merged sibling manifest metadata`},`4`),(0,A.jsx)(`span`,{style:{color:`#60a5fa`},children:`➜ Compiled 1 manifest payload (1.2ms)`},`5`)],align:`card-left`},{step:`04`,phase:`Injeção React`,title:`Montar em Shadow DOM`,desc:`A extensão Chrome intercepta a página, aplica o CSS do tema globalmente, oculta os nós legados e renderiza o componente React 18 dentro de uma raiz de Shadow DOM isolada.`,bullets:[`Isolamento total de estilos CSS via Shadow Root`,`Preservação de eventos legados e submissão de formulários`,`Anti-flickering automático com transição suave`],terminalHeader:`Shadow DOM (React 18)`,jsxLines:[(0,A.jsxs)(`span`,{children:[`<`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`div`}),` `,(0,A.jsx)(`span`,{className:`syn-attr`,children:`class`}),`=`,(0,A.jsx)(`span`,{className:`syn-string`,children:`"modern-reconstruct-host"`}),`>`]},`1`),(0,A.jsx)(`span`,{className:`syn-comment`,children:`\xA0\xA0#shadow-root (open)`},`2`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0<`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`style`}),`>`,(0,A.jsx)(`span`,{className:`syn-comment`,children:`/* Clean Theme CSS */`}),`</`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`style`}),`>`]},`3`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0<`,(0,A.jsx)(`span`,{className:`syn-class`,children:`UiTableListPage`})]},`4`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0\xA0\xA0`,(0,A.jsx)(`span`,{className:`syn-attr`,children:`pageTitle`}),`=`,(0,A.jsx)(`span`,{className:`syn-string`,children:`"Documentos"`})]},`5`),(0,A.jsxs)(`span`,{children:[`\xA0\xA0\xA0\xA0\xA0\xA0`,(0,A.jsx)(`span`,{className:`syn-attr`,children:`tableRows`}),`=`,`{`,(0,A.jsx)(`span`,{className:`syn-prop`,children:`extractedData`}),`}`]},`6`),(0,A.jsx)(`span`,{children:`\xA0\xA0\xA0\xA0/>`},`7`),(0,A.jsxs)(`span`,{children:[`</`,(0,A.jsx)(`span`,{className:`syn-tag`,children:`div`}),`>`]},`8`)],align:`card-right`}];function Zn(){let[e,t]=(0,x.useState)(50),{t:n}=Gn(),r=(e,n)=>{let r=n.getBoundingClientRect(),i=(e-r.left)/r.width*100;t(Math.max(0,Math.min(100,i)))};return(0,A.jsxs)(`div`,{className:`spm-home`,children:[(0,A.jsx)(qn,{}),(0,A.jsxs)(`section`,{className:`home-hero-shell`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`h1`,{className:`home-hero-title`,children:[`SPM`,(0,A.jsx)(`br`,{}),`Portal`,(0,A.jsx)(`span`,{children:`Docs.`})]}),(0,A.jsx)(`p`,{className:`home-hero-copy`,children:`Plataforma central de documentação e engenharia para modernização de sistemas web com Veneer Spec, manifestos compilados e React em Shadow DOM.`}),(0,A.jsxs)(`div`,{className:`home-actions`,children:[(0,A.jsx)(k,{to:`/docs/getting-started`,className:`home-primary-action`,children:`Começar pelos Docs`}),(0,A.jsx)(k,{to:`/docs/veneer`,className:`home-secondary-action`,children:`Explorar Veneer Spec`})]})]}),(0,A.jsxs)(`a`,{className:`home-scroll-cue`,href:`#portal-map`,"aria-label":`Ir para a próxima seção`,children:[(0,A.jsx)(`span`,{children:`Scroll down`}),(0,A.jsx)(`i`,{})]})]}),(0,A.jsxs)(`section`,{className:`home-section-shell`,id:`portal-map`,children:[(0,A.jsxs)(`div`,{className:`home-section-heading`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`Mapa de Recursos`}),(0,A.jsx)(`h2`,{children:`Escolha por onde explorar`})]}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`15px`,margin:0,lineHeight:1.6},children:`Acesse os manuais técnicos do compilador, sintaxe do DSL, esquema JSON ou catálogo de componentes React.`})]}),(0,A.jsx)(`div`,{className:`home-doc-cards-grid`,children:Yn.map(e=>(0,A.jsxs)(k,{to:e.href,className:`home-portal-card`,children:[(0,A.jsxs)(`div`,{className:`portal-card-header`,children:[(0,A.jsx)(`span`,{className:`portal-card-num`,children:e.index}),(0,A.jsx)(`span`,{className:`portal-card-badge`,children:e.badge})]}),(0,A.jsx)(`h3`,{className:`portal-card-title`,children:e.title}),(0,A.jsx)(`p`,{className:`portal-card-desc`,children:e.desc}),(0,A.jsx)(`div`,{className:`portal-card-tags`,children:e.tags.map(e=>(0,A.jsx)(`span`,{className:`portal-tag-pill`,children:e},e))}),(0,A.jsxs)(`div`,{className:`portal-card-footer`,children:[(0,A.jsx)(`span`,{children:`Acessar documentação`}),(0,A.jsx)(`span`,{className:`portal-arrow`,children:`→`})]})]},e.title))})]}),(0,A.jsxs)(`section`,{className:`home-section-shell`,children:[(0,A.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{marginBottom:6},children:`Showcase Interativo`}),(0,A.jsx)(`h2`,{className:`section-title`,style:{margin:0},children:`Transformação Visual com Veneer Spec`})]}),(0,A.jsxs)(`div`,{className:`showcase-container-grid`,children:[(0,A.jsxs)(`div`,{className:`showcase-visual-column`,children:[(0,A.jsxs)(`div`,{className:`showcase-slider-bar`,children:[(0,A.jsx)(`span`,{className:`showcase-slider-title`,children:`Preview Visual ao Vivo`}),(0,A.jsx)(`span`,{className:`showcase-slider-hint`,children:`Arraste ⇔ para comparar`})]}),(0,A.jsxs)(`div`,{className:`showcase-slider-box`,onPointerDown:e=>{e.currentTarget.setPointerCapture(e.pointerId),r(e.clientX,e.currentTarget)},onPointerMove:e=>{e.buttons===1&&r(e.clientX,e.currentTarget)},children:[(0,A.jsxs)(`div`,{className:`showcase-pane showcase-pane-legacy`,children:[(0,A.jsx)(`div`,{className:`showcase-pane-badge legacy-badge`,children:`DOM Legado (Original)`}),(0,A.jsxs)(`div`,{className:`raw-legacy-page`,children:[(0,A.jsxs)(`div`,{className:`raw-legacy-header`,children:[(0,A.jsx)(`h3`,{children:`Sistema de Arquivos Legado v1.0`}),(0,A.jsx)(`small`,{children:`Servidor: 192.168.1.4 | Protocolo: HTTP/1.0`})]}),(0,A.jsxs)(`div`,{className:`raw-legacy-content`,children:[(0,A.jsx)(`p`,{className:`raw-legacy-note`,children:`Listando 3 registros brutos no banco relacional:`}),(0,A.jsxs)(`table`,{className:`raw-legacy-table`,border:1,cellPadding:6,cellSpacing:0,children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{children:`Cod`}),(0,A.jsx)(`th`,{children:`Arquivo`}),(0,A.jsx)(`th`,{children:`Categoria`}),(0,A.jsx)(`th`,{children:`Ação`})]})}),(0,A.jsxs)(`tbody`,{children:[(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:`#001`}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`a`,{href:`/docs/manual.pdf`,children:`manual_usuario.pdf`})}),(0,A.jsx)(`td`,{children:`Docs`}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`a`,{href:`/docs/manual.pdf`,children:`[Baixar]`})})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:`#002`}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`a`,{href:`/db/schema.sql`,children:`schema_banco.sql`})}),(0,A.jsx)(`td`,{children:`Database`}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`a`,{href:`/db/schema.sql`,children:`[Baixar]`})})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:`#003`}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`a`,{href:`/config/app.json`,children:`config_producao.json`})}),(0,A.jsx)(`td`,{children:`Config`}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`a`,{href:`/config/app.json`,children:`[Baixar]`})})]})]})]})]})]})]}),(0,A.jsxs)(`div`,{className:`showcase-pane showcase-pane-modern`,style:{clipPath:`inset(0 0 0 ${e}%)`},children:[(0,A.jsx)(`div`,{className:`showcase-pane-badge modern-badge`,children:`Componente React SPM (UiTableListPage)`}),(0,A.jsx)(`div`,{className:`modern-component-render`,children:(0,A.jsxs)(`div`,{className:`spm-ui-table-card`,children:[(0,A.jsxs)(`div`,{className:`spm-ui-table-header`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`spm-comp-tag`,children:`UiTableListPage`}),(0,A.jsx)(`h4`,{className:`spm-comp-title`,children:`Central de Arquivos`})]}),(0,A.jsx)(`span`,{className:`spm-item-count`,children:`3 registros`})]}),(0,A.jsxs)(`div`,{className:`spm-ui-rows-list`,children:[(0,A.jsxs)(`div`,{className:`spm-ui-row-item`,children:[(0,A.jsxs)(`div`,{className:`spm-row-info`,children:[(0,A.jsx)(`span`,{className:`spm-file-name`,children:`manual_usuario.pdf`}),(0,A.jsx)(`span`,{className:`spm-file-meta`,children:`Docs • #001`})]}),(0,A.jsx)(`span`,{className:`spm-action-btn`,children:`Baixar PDF →`})]}),(0,A.jsxs)(`div`,{className:`spm-ui-row-item`,children:[(0,A.jsxs)(`div`,{className:`spm-row-info`,children:[(0,A.jsx)(`span`,{className:`spm-file-name`,children:`schema_banco.sql`}),(0,A.jsx)(`span`,{className:`spm-file-meta`,children:`Database • #002`})]}),(0,A.jsx)(`span`,{className:`spm-action-btn`,children:`Baixar SQL →`})]}),(0,A.jsxs)(`div`,{className:`spm-ui-row-item`,children:[(0,A.jsxs)(`div`,{className:`spm-row-info`,children:[(0,A.jsx)(`span`,{className:`spm-file-name`,children:`config_producao.json`}),(0,A.jsx)(`span`,{className:`spm-file-meta`,children:`Config • #003`})]}),(0,A.jsx)(`span`,{className:`spm-action-btn`,children:`Baixar JSON →`})]})]})]})})]}),(0,A.jsx)(`div`,{className:`showcase-divider-line`,style:{left:`${e}%`}}),(0,A.jsx)(`div`,{className:`showcase-handle-circle`,style:{left:`${e}%`},"aria-hidden":`true`,children:`⇔`})]})]}),(0,A.jsxs)(`div`,{className:`showcase-code-column`,children:[(0,A.jsxs)(`div`,{className:`showcase-code-header`,children:[(0,A.jsx)(`span`,{className:`showcase-code-badge`,children:`Script de Regra Veneer`}),(0,A.jsx)(`span`,{className:`showcase-file-name`,children:`theme/files.vnr`})]}),(0,A.jsx)(`div`,{className:`showcase-code-box`,children:(0,A.jsx)(`pre`,{children:(0,A.jsxs)(`code`,{children:[(0,A.jsx)(`span`,{className:`syn-comment`,children:`// Script Veneer Spec (.vnr)`}),`
`,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`class`}),` `,(0,A.jsx)(`span`,{className:`syn-class`,children:`DocumentRow`}),` `,`{`,`
`,`  `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`bind`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`id`}),`:       `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"td:nth-child(1) | text"`}),`;`,`
`,`  `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`bind`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`fileName`}),`: `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"td:nth-child(2) a | text"`}),`;`,`
`,`  `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`bind`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`fileUrl`}),`:  `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"td:nth-child(2) a | attr:href"`}),`;`,`
`,`  `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`bind`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`category`}),`: `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"td:nth-child(3) | text"`}),`;`,`
`,`}`,`

`,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`reconstruct`}),` `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"#legacy-table"`}),` `,(0,A.jsx)(`span`,{className:`syn-operator`,children:`->`}),` `,(0,A.jsx)(`span`,{className:`syn-class`,children:`UiTableListPage`}),` `,`{`,`
`,`  `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`pageTitle`}),`: `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"Central de Arquivos"`}),`;`,`

`,`  `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`child`}),` `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`tableRows`}),` `,(0,A.jsx)(`span`,{className:`syn-keyword`,children:`extends`}),` `,(0,A.jsx)(`span`,{className:`syn-class`,children:`DocumentRow`}),` `,`{`,`
`,`    `,(0,A.jsx)(`span`,{className:`syn-prop`,children:`selector`}),`: `,(0,A.jsx)(`span`,{className:`syn-string`,children:`"tbody tr"`}),`;`,`
`,`  }`,`
`,`}`]})})})]})]})]}),(0,A.jsxs)(`section`,{className:`home-section-shell`,children:[(0,A.jsxs)(`div`,{className:`home-section-heading`,style:{marginBottom:`3rem`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`Fluxo de Arquitetura`}),(0,A.jsx)(`h2`,{children:`Como o SPM Transforma a Página`})]}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`15px`,margin:0,lineHeight:1.6},children:`Processo passo a passo de transformação contínua do HTML antigo para React 18 em Shadow DOM.`})]}),(0,A.jsx)(`div`,{className:`zigzag-pipeline-list`,children:Xn.map(e=>(0,A.jsxs)(`div`,{className:`zigzag-step-row ${e.align}`,children:[(0,A.jsx)(`div`,{className:`zigzag-card-col`,children:(0,A.jsxs)(`div`,{className:`mono-terminal-box`,children:[(0,A.jsxs)(`div`,{className:`mono-terminal-header`,children:[(0,A.jsxs)(`div`,{className:`mono-terminal-dots`,children:[(0,A.jsx)(`span`,{className:`mono-dot`}),(0,A.jsx)(`span`,{className:`mono-dot`}),(0,A.jsx)(`span`,{className:`mono-dot`})]}),(0,A.jsx)(`span`,{className:`mono-terminal-title`,children:e.terminalHeader})]}),(0,A.jsx)(`div`,{className:`mono-terminal-body`,children:e.jsxLines.map((e,t)=>(0,A.jsx)(`div`,{className:`mono-terminal-line`,children:e},t))})]})}),(0,A.jsxs)(`div`,{className:`zigzag-text-col`,children:[(0,A.jsxs)(`div`,{className:`zigzag-step-badge`,children:[(0,A.jsx)(`span`,{className:`step-num`,children:e.step}),(0,A.jsx)(`span`,{className:`phase-label`,children:e.phase})]}),(0,A.jsx)(`h3`,{className:`zigzag-title`,children:e.title}),(0,A.jsx)(`p`,{className:`zigzag-desc`,children:e.desc}),(0,A.jsx)(`ul`,{className:`zigzag-bullets`,children:e.bullets.map(e=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`span`,{className:`bullet-dash`,children:`—`}),(0,A.jsx)(`span`,{children:e})]},e))})]})]},e.step))})]}),(0,A.jsxs)(`section`,{style:{maxWidth:1180,margin:`0 auto`,padding:`6rem 2rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{textAlign:`center`,marginBottom:`0.5rem`},children:n(`home_faq_eyebrow`)}),(0,A.jsx)(`h2`,{className:`section-title`,style:{textAlign:`center`,marginBottom:`3.5rem`},children:n(`home_faq_title`)}),(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:`1.5rem`},children:[{q:`Who modernizes a website using Site Package Manager (SPM)?`,a:`Frontend engineers, enterprise developers, and UI/UX teams who need to upgrade legacy web applications (ASP.NET, PHP, Java JSP, legacy CMS) into modern React 19 interfaces without modifying backend source code.`},{q:`How to modernize a legacy website without changing backend code?`,a:`SPM modernizes legacy websites by running a browser content script engine that inspects target HTML elements, extracts un-structured data, hides legacy markup, and mounts state-of-the-art React components inside isolated Shadow DOM hosts.`},{q:`What is Veneer Spec (.vnr)?`,a:`Veneer Spec is a declarative Domain Specific Language (DSL) created for the SPM C++17 compiler (spm-cli). It provides class blueprints, single inheritance, DOM selectors, and component bindings to compile raw .vnr files into clean manifest.json theme payloads.`},{q:`Why use Shadow DOM for website modernization?`,a:`Shadow DOM guarantees full CSS and DOM encapsulation. It ensures legacy page stylesheets do not bleed into modern UI components and prevents modern component styles from breaking the host web page.`},{q:`How does SPM handle form submission and security tokens like CSRF?`,a:`SPM supports hidden input preservation via the preserve: "form | hiddenInputs" directive. It automatically extracts and moves CSRF tokens, session IDs, and security parameters from legacy forms to the modern React component DOM.`},{q:`Is Site Package Manager open-source?`,a:`Yes, Site Package Manager is 100% open-source under the MIT license, available on GitHub across the SPM ecosystem repositories.`}].map(e=>(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,padding:`1.5rem`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`},children:[(0,A.jsx)(`h3`,{style:{fontSize:`15px`,color:`#fff`,fontWeight:700,margin:`0 0 0.75rem`,lineHeight:1.4},children:e.q}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:e.a})]},e.q))})]}),(0,A.jsx)(Jn,{})]})}var Qn=[{title:`Primeiros passos`,path:`/docs/getting-started`,description:`Visão geral do SPM, fluxo de uso, instalação local da extensão, tema local, hot reload e anti-flicker.`,keywords:[`quickstart`,`instalação`,`chrome`,`extensão`,`dist`,`anti-flicker`,`tema local`,`spm dev`,`spm compile`],headings:[`O que cada parte faz`,`Fluxo mental`,`Rodar a extensão`,`Preparar um tema local`,`Anti-flickering`]},{title:`Veneer Spec DSL (Visão Geral)`,path:`/docs/veneer`,description:`Manual de referência da linguagem Veneer Spec DSL (.vnr) para compiladores SPM.`,keywords:[`veneer`,`.vnr`,`dsl`,`linguagem`,`compilador`,`spm-cli`],headings:[`Tópicos da Linguagem`,`Manual de Referência`]},{title:`Veneer: Visão Geral & Motivação`,path:`/docs/veneer/introduction`,description:`Por que a Veneer Spec foi criada, substituição de JSONs complexos e arquitetura de blueprints.`,keywords:[`motivação`,`arquitetura`,`filosofia`,`blueprint`,`declarativo`,`json vs vnr`],headings:[`Por que a Veneer Spec foi criada?`,`Filosofia de Blueprinting`,`Comparativo: JSON vs Veneer Spec`]},{title:`Veneer: Sintaxe & Gramática`,path:`/docs/veneer/syntax`,description:`Sintaxe core da linguagem .vnr: literais de string, raw strings r#"..."#, comentários e tokens reservados.`,keywords:[`sintaxe`,`gramática`,`raw string`,`comentários`,`tokens`,`literais`,`aspas`],headings:[`Estrutura de Arquivos`,`Literais de String & Raw Strings`,`Comentários`,`Tabela de Palavras-Chave Reservadas`]},{title:`Veneer: Definição de Temas (theme)`,path:`/docs/veneer/theme`,description:`Bloco theme "Nome" { ... }, variáveis CSS personalizadas (variables) e folhas de estilo globais (customStyles).`,keywords:[`theme`,`variables`,`customStyles`,`css variables`,`estilos globais`,`design tokens`],headings:[`Bloco theme`,`Mapeamento de variáveis CSS`,`Injeção de CSS Global`]},{title:`Veneer: Classes & Herança (class / extends)`,path:`/docs/veneer/classes`,description:`Criação de blueprints reutilizáveis com class e herança simples com a palavra-chave extends.`,keywords:[`class`,`extends`,`herança`,`blueprints`,`scope`,`reutilização`,`poo`],headings:[`Definição de Classes`,`Herança com extends`,`Escopamento com scope`,`Resolução de Propriedades`]},{title:`Veneer: Reconstrução (reconstruct)`,path:`/docs/veneer/reconstruct`,description:`Injeção de componentes React em Shadow DOM com reconstruct, atribuição de props e preservação de CSRF.`,keywords:[`reconstruct`,`shadow dom`,`props`,`preserve`,`media query`,`injeção`],headings:[`Injeção em Shadow DOM`,`Atribuição de Props Diretas`,`Preservação de Form Inputs (preserve)`,`Media Queries`]},{title:`Veneer: Bindings & Extratores (bind)`,path:`/docs/veneer/bindings`,description:`Extração de dados do DOM com child e operadores de bind (text, attr, html, hiddenInputs).`,keywords:[`bind`,`child`,`extrator`,`text`,`attr`,`html`,`hiddenInputs`,`pipes`,`scraping`],headings:[`Extração de Listas com child`,`Sintaxe de Binding`,`Operadores Extratores`,`Encadeamento com Pipes`]},{title:`Veneer: Seletores & Ações (selector)`,path:`/docs/veneer/selectors`,description:`Ocultamento e modificação direta de elementos legados no DOM com action: hide.`,keywords:[`selector`,`action`,`hide`,`ocultar`,`dom legado`,`remover`],headings:[`Ocultando Elementos Legados`,`Modificação Direta`]},{title:`Veneer: Diagnósticos & CLI (spm compile)`,path:`/docs/veneer/tooling`,description:`Compilação de arquivos .vnr via spm-cli, diagnósticos de erros de sintaxe e verificação de herança circular.`,keywords:[`spm compile`,`diagnósticos`,`erros de sintaxe`,`herança circular`,`cli`,`ast`],headings:[`Compilação com spm-cli`,`Diagnósticos de Erros`,`Grafos de Herança`]},{title:`Manifest Schema`,path:`/docs/manifest`,description:`Formato JSON compilado: targetUrl, theme, components, reconstructs, props, propsMap, preserve, children e infiniteScroll.`,keywords:[`manifest`,`json`,`schema`,`targetUrl`,`theme`,`components`,`reconstructs`,`propsMap`,`children`,`infiniteScroll`],headings:[`Campos raiz`,`theme`,`components`,`reconstructs`,`Exemplo mínimo`]},{title:`CLI & Tooling`,path:`/docs/tooling`,description:`spm-cli, compilação, watcher WebSocket, payload de desenvolvimento, diagnósticos de editor, publicação e comandos.`,keywords:[`spm-cli`,`compile`,`dev`,`publish`,`websocket`,`watcher`,`lexer`,`parser`,`resolver`,`emitter`,`diagnóstico`],headings:[`Contrato de compilação`,`Desenvolvimento local`,`Diagnósticos de editor`,`Publicação de temas`,`Comandos expostos`]}],$n=e=>e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``),er=Qn.map(e=>({...e,normalizedTitle:$n(e.title),normalizedDescription:$n(e.description),normalizedKeywords:$n(e.keywords.join(` `)),normalizedHeadings:$n(e.headings.join(` `)),normalizedAll:$n([e.title,e.description,e.keywords.join(` `),e.headings.join(` `)].join(` `))})),tr=e=>$n(e).split(/\s+/).map(e=>e.trim()).filter(Boolean);function nr(e,t=er,n=8){let r=tr(e);return r.length===0?[]:t.map(e=>{let t=0;for(let n of r)e.normalizedTitle.includes(n)&&(t+=42),e.normalizedKeywords.includes(n)&&(t+=30),e.normalizedHeadings.includes(n)&&(t+=20),e.normalizedDescription.includes(n)&&(t+=16),e.normalizedAll.split(/\s+/).some(e=>e.startsWith(n))&&(t+=10),e.normalizedAll.includes(n)||(t-=18);return{item:e,score:t}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score||e.item.title.localeCompare(t.item.title)).slice(0,n)}function rr(){let[e,t]=(0,x.useState)(``),n=(0,x.useDeferredValue)(e),{t:r}=Gn(),i=(0,x.useMemo)(()=>n.trim().length<3?[]:nr(n,void 0,6),[n]);return(0,A.jsxs)(`div`,{className:`docs-search`,children:[(0,A.jsx)(`label`,{className:`eyebrow`,htmlFor:`docs-search-input`,children:r(`search_label`)}),(0,A.jsx)(`input`,{id:`docs-search-input`,placeholder:r(`search_placeholder`),spellCheck:!1,value:e,onChange:e=>t(e.target.value)}),e.trim().length>=3&&(0,A.jsx)(`div`,{className:`docs-search-results`,children:i.length>0?i.map(({item:e})=>(0,A.jsxs)(k,{to:e.path,children:[(0,A.jsx)(`strong`,{children:e.title}),(0,A.jsx)(`span`,{children:e.description})]},e.path)):(0,A.jsx)(`p`,{children:r(`search_no_results`)})})]})}var ir=[{labelKey:`nav_getting_started`,to:`/docs/getting-started`},{labelKey:`nav_veneer`,to:`/docs/veneer`,children:[{label:`Visão Geral & Motivação`,to:`/docs/veneer/introduction`},{label:`Sintaxe & Gramática`,to:`/docs/veneer/syntax`},{label:`Definição de Temas`,to:`/docs/veneer/theme`},{label:`Classes & Herança`,to:`/docs/veneer/classes`},{label:`Reconstrução de Páginas`,to:`/docs/veneer/reconstruct`},{label:`Bindings & Extratores`,to:`/docs/veneer/bindings`},{label:`Seletores & Ações`,to:`/docs/veneer/selectors`},{label:`Diagnósticos & CLI`,to:`/docs/veneer/tooling`}]},{labelKey:`nav_manifest`,to:`/docs/manifest`},{labelKey:`nav_tooling`,to:`/docs/tooling`}];function ar({children:e,title:t}){let n=ht(),{t:r}=Gn();return(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`,background:`var(--bg-absolute)`},children:[(0,A.jsx)(qn,{}),(0,A.jsxs)(`div`,{style:{display:`flex`,maxWidth:1200,margin:`0 auto`,width:`100%`,flex:1},children:[(0,A.jsxs)(`aside`,{style:{width:250,flexShrink:0,paddingTop:`2.5rem`,paddingRight:`1.5rem`,position:`sticky`,top:56,height:`calc(100vh - 56px)`,overflowY:`auto`,borderRight:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(rr,{}),(0,A.jsx)(`p`,{className:`eyebrow`,style:{marginBottom:`0.75rem`,paddingLeft:`1rem`},children:r(`sidebar_title`)}),ir.map(e=>{let t=n.pathname===e.to||n.pathname.startsWith(e.to+`/`),i=n.pathname===e.to;return(0,A.jsxs)(`div`,{style:{marginBottom:`0.25rem`},children:[(0,A.jsx)(k,{to:e.to,style:{display:`block`,padding:`6px 1rem`,fontSize:13,textDecoration:`none`,borderRadius:`3px`,color:i||t?`#fff`:`var(--text-muted)`,background:i?`var(--bg-hover)`:`transparent`,borderLeft:i?`2px solid #fff`:`2px solid transparent`,fontWeight:t?600:400,transition:`all 0.12s`},onMouseEnter:e=>{i||(e.currentTarget.style.color=`#fff`,e.currentTarget.style.background=`var(--bg-element)`)},onMouseLeave:e=>{i||(e.currentTarget.style.color=t?`#fff`:`var(--text-muted)`,e.currentTarget.style.background=`transparent`)},children:r(e.labelKey)}),e.children&&t&&(0,A.jsx)(`div`,{style:{paddingLeft:`0.85rem`,marginTop:`2px`,borderLeft:`1px solid var(--border-contrast)`,marginLeft:`1rem`},children:e.children.map(e=>{let t=n.pathname===e.to;return(0,A.jsx)(k,{to:e.to,style:{display:`block`,padding:`4px 0.75rem`,fontSize:12,textDecoration:`none`,borderRadius:`3px`,fontFamily:`var(--font-mono)`,color:t?`#fff`:`var(--text-subtle)`,background:t?`var(--bg-element)`:`transparent`,fontWeight:t?600:400,transition:`all 0.12s`},onMouseEnter:e=>{t||(e.currentTarget.style.color=`#fff`)},onMouseLeave:e=>{t||(e.currentTarget.style.color=`var(--text-subtle)`)},children:e.label},e.to)})})]},e.to)})]}),(0,A.jsxs)(`main`,{style:{flex:1,padding:`2.5rem 3rem`,maxWidth:780},children:[t&&(0,A.jsx)(`h1`,{className:`section-title`,style:{marginBottom:`0.75rem`},children:t}),e]})]}),(0,A.jsx)(Jn,{})]})}function or(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var sr=new Set(`class.reconstruct.extends.child.bind.theme.selector.preserve.scope.action.media.variables.customStyles.import.export.from.function.const.let.var.return.if.else.on.push.branches.jobs.runs-on.steps.uses.name.run`.split(`.`)),cr=new Set([`spm`,`compile`,`dev`,`publish`,`install`,`npm`,`run`,`build`,`git`,`checkout`,`cd`]);function lr(e){let t=/(#.*|\b(?:spm|compile|dev|publish|install|npm|run|build|git|checkout|cd)\b|r#"[^"]*"#|"[^"]*"|'[^']*')/g,n=0,r=``,i;for(;(i=t.exec(e))!==null;){let a=e.substring(n,i.index);r+=or(a);let o=i[0];o.startsWith(`#`)?r+=`<span class="syn-comment">${or(o)}</span>`:o.startsWith(`"`)||o.startsWith(`'`)?r+=`<span class="syn-string">${or(o)}</span>`:cr.has(o)?r+=`<span class="syn-cmd">${or(o)}</span>`:r+=or(o),n=t.lastIndex}return r+=or(e.substring(n)),r}function ur(e){let t=/(r#"[^"]*"#|"[^"]*"|'[^']*'|\/\/[^\n]*|\b(?:class|reconstruct|extends|child|bind|theme|selector|preserve|scope|action|media|variables|customStyles|import|export|from|function|const|let|var|return|if|else|on|push|branches|jobs|runs-on|steps|uses|name|run)\b|\b(?:Ui[A-Za-z0-9]+|DocumentRow|FileRow|BaseMediaItem|DetailedFileRow|UserProfileCard|TableRowItem)\b|\b(?:text|html|hiddenInputs|attr:[a-zA-Z0-9_-]+)\b|->|\||\b[a-zA-Z0-9_-]+(?=\s*:))/g,n=0,r=``,i;for(;(i=t.exec(e))!==null;){let a=e.substring(n,i.index);r+=or(a);let o=i[0];o.startsWith(`"`)||o.startsWith(`'`)||o.startsWith(`r#"`)?r+=`<span class="syn-string">${or(o)}</span>`:o.startsWith(`//`)?r+=`<span class="syn-comment">${or(o)}</span>`:sr.has(o)?r+=`<span class="syn-keyword">${or(o)}</span>`:o.startsWith(`Ui`)||[`DocumentRow`,`FileRow`,`BaseMediaItem`,`DetailedFileRow`,`UserProfileCard`,`TableRowItem`].includes(o)?r+=`<span class="syn-class">${or(o)}</span>`:[`text`,`html`,`hiddenInputs`].includes(o)||o.startsWith(`attr:`)?r+=`<span class="syn-prop">${or(o)}</span>`:r+=o===`->`||o===`|`?`<span class="syn-operator">${or(o)}</span>`:`<span class="syn-prop">${or(o)}</span>`,n=t.lastIndex}return r+=or(e.substring(n)),r}function dr(e){return e.trim().split(`
`).map(e=>{let t=e.trim();return t.startsWith(`#`)||t.startsWith(`//`)||t.startsWith(`/*`)||t.startsWith(`*`)?`<span class="syn-comment">${or(e)}</span>`:t.startsWith(`spm `)||t.startsWith(`./spm`)||t.startsWith(`npm `)||t.startsWith(`git `)||t.startsWith(`cd `)?lr(e):ur(e)}).join(`
`)}function j({children:e}){let t=dr(e);return(0,A.jsx)(`pre`,{style:{margin:`1rem 0 1.5rem`,background:`#09090b`,padding:`1.25rem`,borderRadius:`4px`,border:`1px solid var(--border-contrast)`,overflowX:`auto`},children:(0,A.jsx)(`code`,{style:{fontFamily:`var(--font-mono)`,fontSize:`13px`,lineHeight:`1.7`,color:`#f4f4f5`},dangerouslySetInnerHTML:{__html:t}})})}var fr=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e}),pr=({n:e,title:t,children:n})=>(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`32px 1fr`,gap:`1rem`,marginBottom:`2rem`},children:[(0,A.jsx)(`div`,{style:{width:28,height:28,borderRadius:999,border:`1px solid var(--border-focus)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--font-mono)`,fontSize:12,color:`#fff`,fontWeight:700},children:e}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:`#fff`,margin:`2px 0 0.75rem`},children:t}),n]})]}),mr=({items:e})=>(0,A.jsx)(`ul`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.8,paddingLeft:`1.2rem`,margin:`0 0 1.5rem`},children:e.map(e=>(0,A.jsx)(`li`,{children:e},e))});function hr(){return(0,A.jsxs)(ar,{title:`Primeiros passos`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`},children:[`SPM moderniza páginas legadas sem alterar o servidor original. O fluxo é declarativo: o tema descreve seletores, o `,(0,A.jsx)(`code`,{children:`spm-cli`}),` compila um manifesto e a extensão monta componentes React isolados em Shadow DOM.`]}),(0,A.jsx)(fr,{children:`O que cada parte faz`}),(0,A.jsx)(mr,{items:[`site-package-manager: extensão MV3 que carrega manifestos, aplica tema global, extrai dados do DOM e monta componentes.`,`spm-cli: compilador C++17 que transforma arquivos .vnr em manifest.json e serve hot-reload local via WebSocket.`,`spm-components: biblioteca React usada como destino dos blocos selector e reconstruct.`,`spm-websites: lugar natural para temas por domínio, CSS e manifestos compilados.`,`spm-vscode: camada de ergonomia para syntax highlight, lint e autocomplete da Veneer Spec.`]}),(0,A.jsx)(fr,{children:`Fluxo mental`}),(0,A.jsx)(`div`,{style:{display:`grid`,gap:1,background:`var(--border-contrast)`,border:`1px solid var(--border-contrast)`,borderRadius:4,overflow:`hidden`,marginBottom:`2rem`},children:[[`1`,`Inspecionar o HTML legado`,`Identifique containers, listas, links, formulários e metadados que já existem na página.`],[`2`,`Escrever .vnr`,`Declare o alvo, o componente React e como cada prop será extraída.`],[`3`,`Compilar manifest.json`,`O spm-cli resolve classes, valida sintaxe e emite o JSON consumido pela extensão.`],[`4`,`Carregar no navegador`,`A extensão busca ou recebe o manifesto, aplica CSS e renderiza os componentes.`],[`5`,`Iterar com hot-reload`,`No modo dev, alterações no tema são recompiladas e enviadas para a extensão.`]].map(([e,t,n])=>(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 1fr`,gap:`1rem`,background:`var(--bg-surface)`,padding:`1rem`},children:[(0,A.jsx)(`code`,{children:e}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{style:{color:`#fff`,fontWeight:700,fontSize:13,margin:`0 0 0.25rem`},children:t}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.6,margin:0},children:n})]})]},e))}),(0,A.jsx)(fr,{children:`Rodar a extensão`}),(0,A.jsxs)(pr,{n:1,title:`Instalar dependências e compilar`,children:[(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`0.75rem`},children:[`Na raiz do repositório da extensão, gere a pasta `,(0,A.jsx)(`code`,{children:`dist/`}),`.`]}),(0,A.jsx)(j,{children:`
npm install
npm run build
        `})]}),(0,A.jsx)(pr,{n:2,title:`Carregar a extensão no Chrome`,children:(0,A.jsx)(mr,{items:[`Abra chrome://extensions.`,`Ative Developer Mode.`,`Clique em Load unpacked.`,`Selecione a pasta dist/ gerada pelo build.`]})}),(0,A.jsxs)(pr,{n:3,title:`Preparar um tema local`,children:[(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`0.75rem`},children:[`Um tema mínimo precisa de arquivos `,(0,A.jsx)(`code`,{children:`.vnr`}),`, CSS opcional e um manifesto compilado. O CLI aceita diretórios e varre arquivos `,(0,A.jsx)(`code`,{children:`.vnr`}),` recursivamente.`]}),(0,A.jsx)(j,{children:`
theme/
  manifest.json
  content.css
  pages/
    gallery.vnr
  shared/
    classes.vnr
        `})]}),(0,A.jsx)(pr,{n:4,title:`Compilar ou observar mudanças`,children:(0,A.jsx)(j,{children:`
# compilar uma pasta de tema
spm compile theme/ -o theme/manifest.json

# iniciar servidor de desenvolvimento
spm dev -d theme/
        `})}),(0,A.jsx)(fr,{children:`Anti-flickering`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`1rem`},children:[`A extensão evita mostrar a página antiga durante a reconstrução. O interceptor roda em `,(0,A.jsx)(`code`,{children:`document_start`}),`, esconde temporariamente o corpo da página e libera a renderização com `,(0,A.jsx)(`code`,{children:`revealPage()`}),` quando o fluxo termina ou quando a extensão decide abortar.`]}),(0,A.jsx)(mr,{items:[`O CSS anti-flicker entra antes do conteúdo legado piscar na tela.`,`O tema global aplica tokens CSS e customStyles no documento principal.`,`Os hosts React usam Shadow DOM para isolar estilos dos componentes.`,`Containers reconstruídos recebem marcação para evitar montagem duplicada.`]}),(0,A.jsx)(fr,{children:`Abrir este portal`}),(0,A.jsx)(j,{children:`
cd ImportMarkdownContent
npm install
npm run dev
      `})]})}var gr=[{title:`1. Visão Geral & Motivação`,to:`/docs/veneer/introduction`,desc:`Por que a Veneer Spec foi criada, eliminação de JSONs manuais verbosos e paradigma de blueprinting.`},{title:`2. Sintaxe & Gramática Core`,to:`/docs/veneer/syntax`,desc:`Estrutura de arquivos .vnr, literais de string, raw strings r#"..."#, comentários e tabela de palavras-chave.`},{title:`3. Definição de Temas (theme)`,to:`/docs/veneer/theme`,desc:`Bloco theme "Nome", mapeamento de variáveis CSS (variables) e folhas de estilo globais (customStyles).`},{title:`4. Classes & Herança (class / extends)`,to:`/docs/veneer/classes`,desc:`Blueprints de dados reutilizáveis com class, herança simples via extends e escopamento por seletor.`},{title:`5. Reconstrução de Páginas (reconstruct)`,to:`/docs/veneer/reconstruct`,desc:`Injeção de componentes React em Shadow DOM, atribuição de props e preservação de CSRF tokens.`},{title:`6. Bindings & Extratores (bind)`,to:`/docs/veneer/bindings`,desc:`Extração de listas com child e operadores extratores (text, attr, html, hiddenInputs).`},{title:`7. Seletores & Ações (selector)`,to:`/docs/veneer/selectors`,desc:`Ocultamento e modificação direta de elementos legados no DOM com action: hide.`},{title:`8. Diagnósticos & CLI (spm compile)`,to:`/docs/veneer/tooling`,desc:`Compilação de especificações .vnr via spm-cli, validação de AST e diagnósticos de erros de sintaxe.`}];function _r(){return(0,A.jsxs)(ar,{title:`Veneer Spec DSL Language Manual`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`A `,(0,A.jsx)(`strong`,{style:{color:`#fff`},children:`Veneer Spec (.vnr)`}),` é a linguagem de domínio específico (DSL) declarativa do ecossistema SPM. Selecione um tópico abaixo para explorar o manual completo:`]}),(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:`1.25rem`,marginBottom:`3rem`},children:gr.map(e=>(0,A.jsxs)(k,{to:e.to,style:{display:`block`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,padding:`1.4rem`,textDecoration:`none`,transition:`all 0.15s ease`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`rgba(255, 255, 255, 0.4)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`var(--border-contrast)`,e.currentTarget.style.transform=`translateY(0)`},children:[(0,A.jsx)(`h3`,{style:{color:`#fff`,fontSize:`16px`,margin:`0 0 0.5rem`,fontWeight:700},children:e.title}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:e.desc}),(0,A.jsx)(`span`,{style:{display:`inline-block`,marginTop:`1rem`,color:`#fff`,fontSize:`12px`,fontFamily:`var(--font-mono)`,fontWeight:600},children:`Acessar capítulo →`})]},e.to))})]})}var vr=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function yr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Visão Geral & Motivação`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`A `,(0,A.jsxs)(`strong`,{style:{color:`#fff`},children:[`Veneer Spec (`,(0,A.jsx)(`code`,{className:`vnr-str`,children:`.vnr`}),`)`]}),` é a linguagem DSL (Domain Specific Language) declarativa projetada especificamente para o compilador do `,(0,A.jsx)(`strong`,{children:`Site Package Manager (SPM)`}),`.`]}),(0,A.jsx)(vr,{children:`Por que a Veneer Spec foi criada?`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1.25rem`},children:[`Originalmente, o mapeamento de modernização de páginas e substituição de DOM no SPM era escrito diretamente em arquivos JSON puros (`,(0,A.jsx)(`code`,{className:`vnr-str`,children:`manifest.json`}),`). No entanto, à medida que a complexidade dos temas escalou para centenas de propriedades, seletores de dados e loops aninhados, editar JSON cru tornou-se impraticável por três razões principais:`]}),(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,marginBottom:`2rem`},children:[(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`15px`},children:`1. Verbosidade e Escape Excessivo`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:[`Expressões regulares e seletores CSS complexos em JSON exigiam múltiplos escapes de barra invertida (`,(0,A.jsx)(`code`,{children:`\\\\\\\\`}),`), tornando a escrita propensa a erros e difícil de ler.`]})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`15px`},children:`2. Repetição de Código (Falta de Herança)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:[`Listas tabulares e cartões repetidos precisavam duplicar exatamente os mesmos objetos de bindings JSON. A Veneer Spec introduziu `,(0,A.jsx)(`strong`,{children:`Orientação a Objetos por Blueprints`}),` com `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`class`}),` e `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`extends`}),`.`]})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`15px`},children:`3. Ausência de Diagnósticos de Compilação`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:[`Erros em JSON só eram detectados em tempo de execução no navegador. A Veneer Spec possui um compilador em C++17 (`,(0,A.jsx)(`code`,{className:`vnr-cmd`,children:`spm-cli`}),`) que analisa a AST, valida tipos e indica a linha exata de qualquer erro sintático antes de emitir o build final.`]})]})]}),(0,A.jsx)(vr,{children:`Filosofia de Blueprinting e Reconstrução`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`A Veneer Spec opera sob um paradigma declarativo: em vez de escrever código imperativo de manipulação de DOM (como `,(0,A.jsx)(`code`,{children:`document.querySelector`}),` ou loops manuais), você declara:`]}),(0,A.jsxs)(`ul`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.8,paddingLeft:`1.25rem`,marginBottom:`2rem`},children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`strong`,{style:{color:`#fff`},children:`O QUÊ`}),` direcionar na página antiga (seletores CSS do HTML legado).`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`strong`,{style:{color:`#fff`},children:`QUAL`}),` componente React da biblioteca SPM montar dentro do Shadow DOM isolado.`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`strong`,{style:{color:`#fff`},children:`COMO`}),` extrair os dados não estruturados da página antiga para popular as props do React.`]})]}),(0,A.jsx)(vr,{children:`Comparativo: JSON Manual vs Veneer Spec`}),(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`,marginBottom:`2.5rem`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`eyebrow`,style:{display:`block`,marginBottom:`0.5rem`},children:`Antes: JSON Manual Verbos`}),(0,A.jsx)(j,{children:`{
  "reconstructs": [{
    "containerSelector": "#table",
    "layoutComponent": "UiTableListPage",
    "children": [{
      "name": "rows",
      "selector": "tbody tr",
      "bindings": {
        "title": "td:nth-child(1) | text"
      }
    }]
  }]
}`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`eyebrow`,style:{display:`block`,marginBottom:`0.5rem`},children:`Depois: Veneer Spec (.vnr)`}),(0,A.jsx)(j,{children:`class FileRow {
  bind title: "td:nth-child(1) | text";
}

reconstruct "#table" -> UiTableListPage {
  child rows extends FileRow {
    selector: "tbody tr";
  }
}`})]})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(`div`,{}),(0,A.jsx)(k,{to:`/docs/veneer/syntax`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Sintaxe & Gramática →`})]})]})}var br=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function xr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Sintaxe & Gramática`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`A sintaxe da Veneer Spec é limpa, estritamente estruturada por blocos delimitados por chaves `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`{}`}),` e instruída por ponto e vírgula `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`;`}),`.`]}),(0,A.jsx)(br,{children:`Estrutura de Arquivos (.vnr)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Os arquivos fonte possuem a extensão `,(0,A.jsx)(`code`,{className:`vnr-str`,children:`.vnr`}),` (ex: `,(0,A.jsx)(`code`,{children:`theme/pages/dashboard.vnr`}),`). O compilador `,(0,A.jsx)(`code`,{className:`vnr-cmd`,children:`spm-cli`}),` pode ler arquivos individuais ou varrer pastas de temas recursivamente agregando e resolvendo dependências entre múltiplos arquivos `,(0,A.jsx)(`code`,{className:`vnr-str`,children:`.vnr`}),`.`]}),(0,A.jsx)(br,{children:`Literais de String & Raw Strings (r#"..."#)`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:`A Veneer Spec suporta dois formatos de literais de string:`}),(0,A.jsxs)(`ul`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.8,paddingLeft:`1.25rem`,marginBottom:`1.5rem`},children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`strong`,{style:{color:`#fff`},children:`String Padrão:`}),` Delimitada por aspas duplas `,(0,A.jsx)(`code`,{className:`vnr-str`,children:`"texto"`}),` com suporte a caracteres de escape normais como `,(0,A.jsx)(`code`,{children:`\\n`}),` ou `,(0,A.jsx)(`code`,{children:`\\"`}),`.`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`strong`,{style:{color:`#fff`},children:`Raw String Literal:`}),` Delimitada por `,(0,A.jsx)(`code`,{className:`vnr-str`,children:`r#"..."#`}),`. Ignora totalmente caracteres de escape. É ideal para seletores CSS complexos, expressões regulares e blocos de código CSS embutido.`]})]}),(0,A.jsx)(j,{children:`// String Padrão
pageTitle: "Central de Relatórios \\n Produção";

// Raw String (perfeita para seletores com aspas ou regex sem precisar escapar)
bind userAvatar: r#"td.user-cell img[src*="avatar"] | attr:src"#;`}),(0,A.jsx)(br,{children:`Comentários`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:`O compilador descarta comentários durante a fase de lexing antes de montar a AST.`}),(0,A.jsx)(j,{children:`// Este é um comentário de linha única

/*
  Este é um comentário de múltiplas linhas.
  Útil para documentar regras de temas extensos.
*/`}),(0,A.jsx)(br,{children:`Tabela de Palavras-Chave Reservadas`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:`O lexer da Veneer Spec reconhece o seguinte conjunto de tokens e palavras-chave reservadas:`}),(0,A.jsxs)(`table`,{className:`prose-spm`,style:{width:`100%`,marginBottom:`2.5rem`},children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{children:`PALAVRA-CHAVE`}),(0,A.jsx)(`th`,{children:`ESCOPO`}),(0,A.jsx)(`th`,{children:`DESCRIÇÃO / FINALIDADE`})]})}),(0,A.jsxs)(`tbody`,{children:[(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`theme`})}),(0,A.jsx)(`td`,{children:`Raiz`}),(0,A.jsx)(`td`,{children:`Define o nome do tema, variáveis CSS e estilos globais.`})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`class`})}),(0,A.jsx)(`td`,{children:`Raiz`}),(0,A.jsx)(`td`,{children:`Declara uma classe blueprint de dados reutilizável.`})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`extends`})}),(0,A.jsx)(`td`,{children:`class / child`}),(0,A.jsx)(`td`,{children:`Aplica herança simples estendendo outra classe base.`})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`selector`})}),(0,A.jsx)(`td`,{children:`Raiz`}),(0,A.jsxs)(`td`,{children:[`Aplica ações diretas em seletores do DOM (ex: `,(0,A.jsx)(`code`,{children:`action: hide;`}),`).`]})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`reconstruct`})}),(0,A.jsx)(`td`,{children:`Raiz`}),(0,A.jsx)(`td`,{children:`Mapeia um seletor container para montar um componente React.`})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`child`})}),(0,A.jsx)(`td`,{children:`reconstruct`}),(0,A.jsx)(`td`,{children:`Declara uma lista/vetor de elementos filhos extraídos do DOM.`})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`bind`})}),(0,A.jsx)(`td`,{children:`class / reconstruct`}),(0,A.jsx)(`td`,{children:`Conecta uma propriedade a um seletor CSS e extrator de valor.`})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`preserve`})}),(0,A.jsx)(`td`,{children:`reconstruct`}),(0,A.jsx)(`td`,{children:`Preserva inputs ocultos de formulário (ex: CSRF token).`})]})]})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/introduction`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Visão Geral`}),(0,A.jsx)(k,{to:`/docs/veneer/theme`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Definição de Temas (theme) →`})]})]})}var Sr=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function Cr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Definição de Temas (theme)`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`O bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`theme`}),` define a identidade visual do tema, mapeando variáveis CSS globais e customStyles aplicadas ao documento principal.`]}),(0,A.jsxs)(Sr,{children:[`Bloco theme "Nome" `,`{ ... }`]}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Toda especificação de tema completa começa com a declaração do bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`theme`}),` informando o nome identificador do tema entre aspas:`]}),(0,A.jsx)(j,{children:`theme "Obsidian" {
  variables {
    --spm-bg-primary: "#000000";
    --spm-bg-secondary: "#111111";
    --spm-text-primary: "#ffffff";
    --spm-accent: "#7c6af5";
  }

  customStyles {
    "#legacy-notice { display: none !important; }"
    "body { font-family: 'Inter', sans-serif !important; }"
  }
}`}),(0,A.jsx)(Sr,{children:`Mapeamento de Variáveis CSS (variables)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Dentro do bloco `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`variables`}),`, você declara tokens de design como propriedades CSS customizadas (CSS Variables).`]}),(0,A.jsxs)(`ul`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.8,paddingLeft:`1.25rem`,marginBottom:`1.5rem`},children:[(0,A.jsxs)(`li`,{children:[`O compilador converte esse bloco em um objeto JSON sob a chave `,(0,A.jsx)(`code`,{children:`theme.cssVariables`}),`.`]}),(0,A.jsxs)(`li`,{children:[`Em tempo de execução, a extensão SPM injeta essas variáveis diretamente na tag `,(0,A.jsx)(`code`,{children:`html`}),` do documento principal através da API `,(0,A.jsx)(`code`,{children:`document.documentElement.style.setProperty`}),`.`]})]}),(0,A.jsx)(Sr,{children:`Injeção de CSS Global (customStyles)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`O bloco `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`customStyles`}),` aceita um conjunto de regras CSS brutas como strings.`]}),(0,A.jsxs)(`ul`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.8,paddingLeft:`1.25rem`,marginBottom:`2rem`},children:[(0,A.jsxs)(`li`,{children:[`Estas regras são injetadas globalmente na página hospedada através da tag `,(0,A.jsx)(`code`,{children:`<style id="spm-global-theme-styles">`}),`.`]}),(0,A.jsx)(`li`,{children:`Útil para ajustar margens da página original, ocultar banners antigos inconvenientes ou sobrescrever fontes.`})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/syntax`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Sintaxe & Gramática`}),(0,A.jsx)(k,{to:`/docs/veneer/classes`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Classes & Herança →`})]})]})}var wr=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function Tr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Classes & Herança (class / extends)`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`As `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`class`}),` no Veneer Spec servem como `,(0,A.jsx)(`strong`,{children:`blueprints reutilizáveis de dados e seletores`}),`, permitindo estender e sobrescrever campos sem duplicação de código.`]}),(0,A.jsx)(wr,{children:`Definição de Classes Reutilizáveis`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Uma classe define um modelo de objeto contendo um conjunto de declarações de `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`bind`}),` (mapeamento de seletores):`]}),(0,A.jsx)(j,{children:`class BaseMediaItem {
  bind id:       "td:nth-child(1) | text";
  bind title:    "td:nth-child(2) a | text";
  bind pageUrl:  "td:nth-child(2) a | attr:href";
}`}),(0,A.jsx)(wr,{children:`Herança Simples com extends`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Com a palavra-chave `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`extends`}),`, uma classe derivada herda todas as variáveis e bindings da classe pai, podendo adicionar novas propriedades ou sobrescrever bindings existentes:`]}),(0,A.jsx)(j,{children:`// Classe Derivada que herda id, title e pageUrl de BaseMediaItem
class DetailedFileRow extends BaseMediaItem {
  bind category: "td:nth-child(3) | text";
  bind fileSize: "td:nth-child(4) | text";
  bind downloadUrl: "td:nth-child(5) a | attr:href";
}`}),(0,A.jsx)(wr,{children:`Escopamento com scope: "selector"`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`A propriedade opcional `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`scope`}),` dentro de uma classe restringe a busca de todos os seletores `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`bind`}),` a um sub-container específico do DOM:`]}),(0,A.jsx)(j,{children:`class UserProfileCard {
  scope: ".user-detail-box";

  bind avatarUrl: "img.user-avatar | attr:src";
  bind username:  "h3.user-name | text";
  bind userRole:  "span.role-badge | text";
}`}),(0,A.jsx)(wr,{children:`Resolução pelo Compilador`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`2rem`},children:[`Durante a fase de `,(0,A.jsx)(`strong`,{children:`Resolution`}),` no `,(0,A.jsx)(`code`,{className:`vnr-cmd`,children:`spm-cli`}),`:`]}),(0,A.jsxs)(`ul`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.8,paddingLeft:`1.25rem`,marginBottom:`2.5rem`},children:[(0,A.jsx)(`li`,{children:`O compilador constrói a árvore de herança de todas as classes.`}),(0,A.jsx)(`li`,{children:`Mescla os dicionários de bindings de baixo para cima (bottom-up), aplicando overrides.`}),(0,A.jsxs)(`li`,{children:[`Detecta e interrompe o build com erro fatal caso encontre herança circular (ex: `,(0,A.jsx)(`code`,{children:`class A extends B`}),` e `,(0,A.jsx)(`code`,{children:`class B extends A`}),`).`]})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/theme`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Definição de Temas`}),(0,A.jsx)(k,{to:`/docs/veneer/reconstruct`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Reconstrução (reconstruct) →`})]})]})}var Er=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function Dr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Reconstrução (reconstruct)`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`O bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`reconstruct`}),` é o coração da modernização no SPM. Ele intercepta seletores do DOM antigo e os substitui montando componentes React isolados em Shadow DOM.`]}),(0,A.jsx)(Er,{children:`Injeção em Shadow DOM com reconstruct`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`A sintaxe conecta um seletor container a um componente React alvo usando o operador `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`->`}),`:`]}),(0,A.jsx)(j,{children:`reconstruct "#legacy-content-wrapper" -> UiTableListPage {
  pageTitle: "Central de Relatórios";
  searchPlaceholder: "Pesquisar documentos...";
}`}),(0,A.jsx)(Er,{children:`Atribuição de Props Diretas`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Valores declarados diretamente no corpo do bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`reconstruct`}),` (como `,(0,A.jsx)(`code`,{children:`pageTitle: "..."`}),`) são passados como props estáticas para o componente React.`]}),(0,A.jsx)(Er,{children:`Preservação de Form Inputs (preserve)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Páginas legadas frequentemente dependem de elementos ocultos de segurança para submeter formulários POST (como `,(0,A.jsx)(`code`,{children:`csrfmiddlewaretoken`}),` ou `,(0,A.jsx)(`code`,{children:`session_id`}),`). O bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`preserve`}),` instrui a extensão a mover esses nós intactos para o novo DOM:`]}),(0,A.jsx)(j,{children:`reconstruct "#search-form" -> UiSearchBar {
  placeholder: "Pesquisar no sistema...";
  
  // Preserva todos os inputs type="hidden" contidos no formulário original
  preserve: "form | hiddenInputs";
}`}),(0,A.jsx)(Er,{children:`Condicionais por Media Query (media)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Você pode condicionar a reconstrução a resoluções de tela usando o parâmetro `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`media`}),`:`]}),(0,A.jsx)(j,{children:`reconstruct "#mobile-navigation" -> UiNavHeader {
  media: "(max-width: 768px)";
  siteName: "Portal Mobile";
}`}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/classes`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Classes & Herança`}),(0,A.jsx)(k,{to:`/docs/veneer/bindings`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Bindings & Extratores →`})]})]})}var Or=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function kr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Bindings & Extratores (bind)`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`A instrução `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`bind`}),` conecta propriedades de componentes a seletores CSS e extratores de conteúdo no DOM antigo.`]}),(0,A.jsx)(Or,{children:`Sintaxe de Binding`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`A sintaxe padrão de um binding segue o formato `,(0,A.jsx)(`code`,{children:`bind <propriedade>: "<Seletor CSS> | <Operador Extrator>"`}),`:`]}),(0,A.jsx)(j,{children:`bind fileName: "td:nth-child(2) a | text";
bind downloadUrl: "td:nth-child(2) a | attr:href";`}),(0,A.jsx)(Or,{children:`Operadores Extratores`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:`O SPM inclui extratores integrados para ler diferentes partes dos nós do DOM antigo:`}),(0,A.jsxs)(`table`,{className:`prose-spm`,style:{width:`100%`,marginBottom:`2rem`},children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{children:`OPERADOR`}),(0,A.jsx)(`th`,{children:`EXEMPLO`}),(0,A.jsx)(`th`,{children:`DESCRIÇÃO DO COMPORTAMENTO`})]})}),(0,A.jsxs)(`tbody`,{children:[(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-op`,children:`text`})}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{children:`"h1 | text"`})}),(0,A.jsxs)(`td`,{children:[`Extrai o texto interno limpo (`,(0,A.jsx)(`code`,{children:`textContent.trim()`}),`).`]})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-op`,children:`attr:<nome>`})}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{children:`"a | attr:href"`})}),(0,A.jsxs)(`td`,{children:[`Lê o valor do atributo HTML (ex: `,(0,A.jsx)(`code`,{children:`href`}),`, `,(0,A.jsx)(`code`,{children:`src`}),`, `,(0,A.jsx)(`code`,{children:`data-id`}),`).`]})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-op`,children:`html`})}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{children:`"div.content | html"`})}),(0,A.jsxs)(`td`,{children:[`Extrai o código HTML interno preservando formatação (`,(0,A.jsx)(`code`,{children:`innerHTML`}),`).`]})]}),(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{className:`vnr-op`,children:`hiddenInputs`})}),(0,A.jsx)(`td`,{children:(0,A.jsx)(`code`,{children:`"form | hiddenInputs"`})}),(0,A.jsxs)(`td`,{children:[`Extrai um vetor JSON com todos os pares `,(0,A.jsx)(`code`,{children:`name`}),` e `,(0,A.jsx)(`code`,{children:`value`}),` de inputs ocultos.`]})]})]})]}),(0,A.jsx)(Or,{children:`Extração de Listas Repetidas com child`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Para raspar tabelas com múltiplas linhas ou grades de cartões, use o bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`child`}),` dentro do `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`reconstruct`}),` indicando a classe blueprint de extração:`]}),(0,A.jsx)(j,{children:`class TableRowItem {
  bind id:       "td:nth-child(1) | text";
  bind name:     "td:nth-child(2) | text";
  bind link:     "td:nth-child(2) a | attr:href";
}

reconstruct "#documents-table" -> UiTableListPage {
  pageTitle: "Arquivos do Servidor";

  // Mapeia todas as tr do tbody usando a classe TableRowItem
  child tableRows extends TableRowItem {
    selector: "tbody tr";
  }
}`}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/reconstruct`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Reconstrução (reconstruct)`}),(0,A.jsx)(k,{to:`/docs/veneer/selectors`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Seletores & Ações →`})]})]})}var Ar=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function jr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Seletores & Ações (selector)`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`O bloco `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`selector`}),` permite aplicar manipulações diretas e limpas em elementos legados do DOM original sem montar componentes React.`]}),(0,A.jsx)(Ar,{children:`Ocultando Elementos Legados (action: hide)`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:`É comum querer remover menus legados quebrados, rodapés antigos ou anúncios da página sem desmontar a estrutura:`}),(0,A.jsx)(j,{children:`selector "#old-sidebar" {
  action: hide;
}

selector ".legacy-banner-ads" {
  action: hide;
}`}),(0,A.jsx)(Ar,{children:`Diferença entre selector e reconstruct`}),(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`,marginBottom:`2.5rem`},children:[(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`15px`},children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`selector`})}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:[`Apenas esconde (`,(0,A.jsx)(`code`,{children:`display: none`}),`) ou modifica nós existentes no DOM original. Leve e rápido.`]})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`15px`},children:(0,A.jsx)(`code`,{className:`vnr-kw`,children:`reconstruct`})}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.6},children:`Raspa os dados do nó, esconde o elemento original e monta um novo componente React dentro de um Shadow DOM isolado.`})]})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/bindings`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Bindings & Extratores`}),(0,A.jsx)(k,{to:`/docs/veneer/tooling`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Diagnósticos & CLI →`})]})]})}var Mr=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e});function Nr(){return(0,A.jsxs)(ar,{title:`Veneer Spec: Diagnósticos & CLI (spm compile)`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`,fontSize:`15px`,lineHeight:`1.7`,color:`var(--text-muted)`},children:[`O compilador `,(0,A.jsx)(`code`,{className:`vnr-cmd`,children:`spm-cli`}),` compila especificações Veneer Spec em um contrato JSON otimizado emitindo diagnósticos e mensagens de erro estruturadas.`]}),(0,A.jsx)(Mr,{children:`Compilação com spm-cli`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:[`Você pode compilar um diretório completo de temas contendo múltiplos arquivos `,(0,A.jsx)(`code`,{className:`vnr-str`,children:`.vnr`}),` ou compilar um arquivo isolado:`]}),(0,A.jsx)(j,{children:`# Compilar um diretório completo de tema
spm compile theme/ -o theme/manifest.json

# Compilar um arquivo isolado .vnr
spm compile theme/pages/dashboard.vnr -o /tmp/dashboard.json`}),(0,A.jsx)(Mr,{children:`Fases do Compilador C++17`}),(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`1rem`,marginBottom:`2rem`},children:[(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`14px`,fontFamily:`var(--font-mono)`},children:`1. Lexer (Análise Léxica)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.5},children:[`Tokeniza caracteres em palavras-chave (`,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`class`}),`, `,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`reconstruct`}),`), identificadores, delimitadores e literais de string.`]})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`14px`,fontFamily:`var(--font-mono)`},children:`2. Parser (Análise Sintática)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.5},children:[`Constrói a Árvores de Sintaxe Abstrata (AST) validando fechamento de chaves `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`{}`}),` e delimitadores `,(0,A.jsx)(`code`,{className:`vnr-op`,children:`;`}),`.`]})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`14px`,fontFamily:`var(--font-mono)`},children:`3. Resolver (Resolução)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.5},children:[`Mescla a herança entre classes base e derivadas (`,(0,A.jsx)(`code`,{className:`vnr-kw`,children:`extends`}),`) e verifica se há dependências circulares.`]})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`1.25rem`,borderRadius:`4px`},children:[(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:`0 0 0.5rem`,fontSize:`14px`,fontFamily:`var(--font-mono)`},children:`4. Emitter (Emissão JSON)`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0,lineHeight:1.5},children:[`Emite o manifesto final compilado preservando metadados como `,(0,A.jsx)(`code`,{children:`targetUrl`}),` e `,(0,A.jsx)(`code`,{children:`version`}),`.`]})]})]}),(0,A.jsx)(Mr,{children:`Diagnósticos de Erros`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,lineHeight:1.7,marginBottom:`1rem`},children:`Se o compilador encontrar um caractere inesperado ou chave ausente, ele retorna um erro descritivo indicando a linha e o token com erro:`}),(0,A.jsx)(j,{children:`[Veneer Parser Error] SyntaxError at line 14:
  expected ';' after binding property value 'td:nth-child(1) | text'
  got 'reconstruct'`}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,paddingTop:`1.5rem`,borderTop:`1px solid var(--border-contrast)`},children:[(0,A.jsx)(k,{to:`/docs/veneer/selectors`,style:{color:`var(--text-muted)`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13},children:`← Anterior: Seletores & Ações`}),(0,A.jsx)(k,{to:`/docs/manifest`,style:{color:`#fff`,textDecoration:`none`,fontFamily:`var(--font-mono)`,fontSize:13,fontWeight:700},children:`Próximo: Manifest Schema Reference →`})]})]})}var Pr=({children:e})=>(0,A.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#fff`,letterSpacing:0,margin:`2.5rem 0 1rem`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`},children:e}),Fr=({title:e,desc:t})=>(0,A.jsxs)(`div`,{style:{border:`1px solid var(--border-contrast)`,borderRadius:`4px`,padding:`1.25rem`,background:`var(--bg-surface)`,marginBottom:`1rem`},children:[(0,A.jsx)(`p`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,color:`#fff`,fontWeight:700,margin:`0 0 6px`},children:e}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,margin:0,lineHeight:1.65},children:t})]});function Ir(){return(0,A.jsxs)(ar,{title:`CLI & Tooling`,children:[(0,A.jsxs)(`p`,{className:`body-copy`,style:{marginBottom:`2rem`},children:[`Mapa das ferramentas que cercam o SPM. Esta página documenta o papel do `,(0,A.jsx)(`code`,{children:`spm-cli`}),`: compilar Veneer Spec, observar temas em desenvolvimento e publicar artefatos.`]}),(0,A.jsx)(Pr,{children:`Contrato de compilação`}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`1rem`},children:[`O ponto central do tooling é transformar arquivos `,(0,A.jsx)(`code`,{children:`.vnr`}),` em um `,(0,A.jsx)(`code`,{children:`manifest.json`}),` único. A extensão deve consumir esse manifesto sem depender dos detalhes internos do compilador.`]}),(0,A.jsx)(j,{children:`# Compilar uma pasta de tema
spm compile theme/ -o theme/manifest.json

# Compilar um arquivo isolado
spm compile theme/pages/gallery.vnr -o /tmp/gallery.json`}),(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`,gap:`1rem`,marginBottom:`1.5rem`},children:[{title:`Lexing`,desc:`Remove comentários e transforma a Veneer Spec em tokens.`},{title:`Parsing`,desc:`Monta a AST com blocos theme, class, selector e reconstruct.`},{title:`Resolution`,desc:`Resolve extends, herança, overrides e classes compartilhadas.`},{title:`Emission`,desc:`Gera manifest.json e preserva metadados existentes quando possível.`}].map(e=>(0,A.jsx)(Fr,{title:e.title,desc:e.desc},e.title))}),(0,A.jsx)(Pr,{children:`Desenvolvimento local`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`1rem`},children:`O modo de desenvolvimento deve observar mudanças no tema e notificar a extensão quando um manifesto novo estiver pronto para aplicação na aba aberta.`}),(0,A.jsx)(j,{children:`spm dev -d /path/to/theme/

# Saida esperada
# SPM Dev Server - ws://localhost:8080
# Monitoring: /path/to/theme/
# [Watcher] Syncing changes...`}),(0,A.jsx)(Fr,{title:`Payload do watcher`,desc:`O servidor recompila .vnr quando recebe um diretório ou arquivo, agrega CSS do tema e envia um JSON com manifest e css para a extensão.`}),(0,A.jsx)(Fr,{title:`Porta padrão`,desc:`O dev server usa WebSocket em ws://localhost:8080. A extensão pode se conectar e pedir para observar um caminho específico.`}),(0,A.jsx)(Pr,{children:`Diagnósticos de editor`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`1.5rem`},children:`Uma integração de editor deve reaproveitar as mesmas fases do compilador para devolver erros antes do build final.`}),(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`,gap:`1rem`,marginBottom:`1.5rem`},children:[{type:`Léxico`,desc:`Caracteres inesperados, strings incompletas e tokens inválidos.`},{type:`Sintático`,desc:`Blocos mal formados, chaves ausentes e pipes incorretos.`},{type:`Semântico`,desc:`Componentes, classes ou props inexistentes no catálogo carregado.`},{type:`Autocomplete`,desc:`Sugestões de componentes, props, operadores de bind e escopos.`}].map(e=>(0,A.jsxs)(`div`,{style:{border:`1px solid var(--border-contrast)`,borderRadius:`4px`,padding:`1rem`,background:`var(--bg-surface)`},children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{marginBottom:6},children:e.type}),(0,A.jsx)(`p`,{style:{color:`var(--text-primary)`,fontSize:13,margin:0,lineHeight:1.55},children:e.desc})]},e.type))}),(0,A.jsx)(Pr,{children:`Publicação de temas`}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,lineHeight:1.7,marginBottom:`1rem`},children:`A publicação deve enviar artefatos compilados, não arquivos fonte soltos. O provedor de storage fica fora do contrato do portal.`}),(0,A.jsx)(j,{children:`# Pipeline simplificado de publicação (GitHub Actions / CI/CD)
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Compilar temas
        run: spm compile themes/ -o dist/manifest.json
      - name: Publicar artefatos
        run: ./scripts/deploy-themes dist/`}),(0,A.jsx)(Pr,{children:`Comandos expostos`}),(0,A.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[(0,A.jsx)(Fr,{title:`spm install`,desc:`Instala o binário no PATH do sistema.`}),(0,A.jsx)(Fr,{title:`spm compile <source> -o <output>`,desc:`Compila arquivo .vnr ou diretório de tema para manifest.json.`}),(0,A.jsx)(Fr,{title:`spm dev -d <path>`,desc:`Inicia o servidor WebSocket de desenvolvimento observando um tema, arquivo .vnr ou manifesto.`}),(0,A.jsx)(Fr,{title:`spm publish`,desc:`Fluxo reservado para publicação de tema no registro do SPM.`})]})]})}var Lr="# LayoutPrimitives\n\n## Purpose & Use Cases\n\nLayout Primitives are foundational, lightweight React structural components (`UiBox`, `UiFlexRow`, `UiFlexColumn`, `UiGrid`, `UiText`, `UiImage`, `UiLink`, `UiScrollBox`) defined in `primitives/LayoutPrimitives.tsx`. They provide generic HTML layout primitives for constructing custom UI views without hardcoding visual styles or visual overrides.\n\n## Component Overview\n\n| Primitive | Underlying HTML Element | Key Props | Description |\n| :--- | :--- | :--- | :--- |\n| `UiBox` | `<div>` | `className`, `children` | Generic container block wrapper for borders, padding, and layout bounds. |\n| `UiFlexRow` | `<div>` (flex row) | `className`, `children` | Horizontal Flexbox row container (`flex flex-row`). |\n| `UiFlexColumn` | `<div>` (flex col) | `className`, `children` | Vertical Flexbox column container (`flex flex-col`). |\n| `UiGrid` | `<div>` (grid layout) | `className`, `children` | CSS Grid container (`grid`). |\n| `UiText` | `<span>` | `className`, `content` | Inline text span for rendering dynamic text content. |\n| `UiImage` | `<img>` | `className`, `src`, `alt` | Standard image element for rendering responsive media. |\n| `UiLink` | `<a>` | `className`, `href`, `children` | Standard hyperlink element for navigation links. |\n| `UiScrollBox` | `<div>` (scrollable) | `height`, `maxHeight`, `overflow` | Scrollable container box with explicit overflow and height controls. |\n\n## Properties (Props API)\n\n### `PrimitiveProps` (`UiBox`, `UiFlexRow`, `UiFlexColumn`, `UiGrid`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `className` | `string` | `undefined` | CSS class string appended to root container. |\n| `children` | `React.ReactNode` | `undefined` | Nested child components or elements. |\n| `...props` | `HTMLAttributes<HTMLDivElement>` | - | Standard HTML `div` attributes forwarded to element. |\n\n### `UiText` (`TextProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `content` | `string` | `undefined` | Dynamic text content string rendered inside `<span>`. |\n| `className` | `string` | `undefined` | Custom CSS class string. |\n| `...props` | `HTMLAttributes<HTMLSpanElement>` | - | Standard HTML `span` attributes forwarded to element. |\n\n### `UiImage` (`ImageProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `src` | `string` | `undefined` | Source URL of image. |\n| `alt` | `string` | `undefined` | Alternative text description for image. |\n| `className` | `string` | `undefined` | Custom CSS class string. |\n| `...props` | `ImgHTMLAttributes<HTMLImageElement>` | - | Standard HTML `img` attributes forwarded to element. |\n\n### `UiLink` (`LinkProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `href` | `string` | `undefined` | Target destination hyperlink URL. |\n| `className` | `string` | `undefined` | Custom CSS class string. |\n| `children` | `React.ReactNode` | `undefined` | Link label or child elements. |\n| `...props` | `AnchorHTMLAttributes<HTMLAnchorElement>` | - | Standard HTML `a` attributes forwarded to element. |\n\n### `UiScrollBox` (`ScrollBoxProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `height` | `string` | `undefined` | Explicit container height (e.g. `'300px'`, `'100%'`). |\n| `maxHeight` | `string` | `undefined` | Container maximum height constraint. |\n| `overflow` | `'auto' \\| 'scroll' \\| 'hidden' \\| 'visible'` | `'auto'` | CSS overflow behavior. |\n| `overflowX` | `'auto' \\| 'scroll' \\| 'hidden' \\| 'visible'` | `undefined` | Horizontal overflow behavior. |\n| `overflowY` | `'auto' \\| 'scroll' \\| 'hidden' \\| 'visible'` | `undefined` | Vertical overflow behavior. |\n| `className` | `string` | `''` | Custom CSS class string. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\nLayout Primitives are unstyled structural components. They accept styling via `className` and `style` properties, seamlessly inheriting SPM theme design tokens:\n- `var(--spm-bg-primary)`, `var(--spm-bg-secondary)`, `var(--spm-bg-tertiary)`\n- `var(--spm-text-primary)`, `var(--spm-text-secondary)`, `var(--spm-text-muted)`\n- `var(--spm-border)`, `var(--spm-radius)`, `var(--spm-accent)`\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct \"#custom-panel\" -> UiFlexColumn {\n    className: \"my-custom-panel\";\n    \n    child header -> UiFlexRow {\n        className: \"panel-header\";\n        child title -> UiText {\n            content: \"Panel Title\";\n        }\n    }\n\n    child image -> UiImage {\n        bind src: \"img | attr:src\";\n        bind alt: \"img | attr:alt\";\n    }\n\n    child link -> UiLink {\n        bind href: \"a | attr:href\";\n        child text -> UiText {\n            content: \"View Details\";\n        }\n    }\n}\n```\n",Rr='# UiCommentListPage\n\n## Purpose & Use Cases\n\n`UiCommentListPage` modernizes comment discussion feeds and message boards. It renders thread cards displaying post thumbnails, post metadata (author, date, rating, score), tag badges, speech-bubble reply threads (`UiCommentReply`), header title, and bottom pagination controls (`UiPaginationBar`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'Comments\'` | Title text displayed in header bar. |\n| `threads` | `CommentThread[]` | `[]` | List of comment thread items containing post metadata and replies array. |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links array (`{ label, url }`). |\n| `height` | `string` | `\'100vh\'` | Height constraint of layout wrapper. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `CommentThread` Schema\n\n- `id`: `string` - Unique thread identifier.\n- `thumbnailUrl`: `string` - Image thumbnail associated with post.\n- `postUrl`: `string` - Target link to main post page.\n- `postDate`: `string` - Post creation date text.\n- `postUser`: `string` - Original poster username.\n- `postRating`: `string` - Post rating descriptor (e.g. `\'Safe\'`).\n- `postScore`: `string` - Post popularity/score count.\n- `tags`: `TagItem[]` (optional) - Array of associated tag badges (`label`, `url`, `type`).\n- `comments`: `CommentItem[]` (optional) - Array of user replies (`author`, `authorUrl`, `date`, `body`).\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Page background color.\n- `var(--spm-bg-secondary)` - Thread card background color.\n- `var(--spm-bg-tertiary)` - Speech bubble reply background color.\n- `var(--spm-border)` - Thread border and speech bubble outline color.\n- `var(--spm-text-primary)` - Comment body text color.\n- `var(--spm-text-secondary)` - Author username text color.\n- `var(--spm-text-muted)` - Date stamp and post metadata text color.\n- `var(--spm-accent)` - Author link hover color and accent badges.\n- `var(--spm-radius)` - Border radius of speech bubbles and thread cards.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#content:has(#comment-list)" -> UiCommentListPage {\n    urlPattern: "page=comment&s=list";\n    pageTitle: "Comments";\n    height: "calc(100vh - 78px)";\n\n    child threads {\n        selector: "#comment-list > div.post";\n        bind id: "self | attr:id";\n        bind thumbnailUrl: ".col1 img | attr:src";\n        bind postUrl: ".col1 a | attr:href";\n        bind postDate: ".col2 span.info:nth-child(1) | text";\n        bind postUser: ".col2 span.info:nth-child(2) | text";\n        bind postRating: ".col2 span.info:nth-child(3) | text";\n        bind postScore: ".col2 span.info:nth-child(4) | text";\n\n        child tags {\n            selector: ".col2 .tags span";\n            bind label: "a | text";\n            bind url: "a | attr:href";\n            bind type: "self | attr:class";\n        }\n\n        child comments {\n            selector: ".response-list div.post";\n            bind author: ".author h6 a | text";\n            bind authorUrl: ".author h6 a | attr:href";\n            bind date: ".author span.date | text";\n            bind body: ".content .body | text";\n        }\n    }\n\n    child pageLinks extends DocumentLink {\n        selector: "#paginator .pagination a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',zr='# UiDashboardPage\n\n## Purpose & Use Cases\n\n`UiDashboardPage` provides a card-based dashboard layout component suitable for user account control panels, settings menus, options hubs, and administrative pages. It features a header section with page title and optional subtitle, and a responsive grid of action cards (`DashboardCard`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'Dashboard\'` | Title text displayed in header bar. |\n| `subTitle` | `string` | `undefined` | Optional subtitle description text rendered below title. |\n| `cards` | `DashboardCard[]` | `[]` | List of dashboard card objects (`{ title, description, url, urlLabel }`). |\n| `height` | `string` | `\'100vh\'` | Height constraint of layout wrapper. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `DashboardCard` Schema\n\n- `title`: `string` - Main title of the option card.\n- `description`: `string` (optional) - Explanation or body text describing card action.\n- `url`: `string` - Target URL destination for card action button.\n- `urlLabel`: `string` (optional) - Custom button text label (defaults to `\'Open\'`).\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Layout background color.\n- `var(--spm-bg-secondary)` - Header bar and card background color.\n- `var(--spm-border)` - Border color for cards and header divider line.\n- `var(--spm-text-primary)` - Header title and card heading text color.\n- `var(--spm-text-secondary)` - Subtitle and card description text color.\n- `var(--spm-accent)` - Card action button background and hover color.\n- `var(--spm-accent-text)` - Text color for card action buttons.\n- `var(--spm-radius)` - Border radius of dashboard cards and action buttons.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#user-index" -> UiDashboardPage {\n    urlPattern: "page=account&s=home";\n    pageTitle: "My Account Home";\n    subTitle: "Manage your settings, options, and account status.";\n    height: "calc(100vh - 78px)";\n\n    child cards {\n        selector: "#user-index h4";\n        bind title: "self | text";\n        bind url: "a | attr:href";\n        bind urlLabel: "a | text";\n        bind description: "self | nextSiblingText";\n    }\n}\n```\n',Br='# UiHeroLanding\n\n## Purpose & Use Cases\n\n`UiHeroLanding` provides a full-viewport landing page hero component for modernized index pages. It features a brand header (logo or fallback site name), tagline headline, subtext summary, prominent Call-To-Action (CTA) button, an integrated search bar (`UiSearchBar`), and quick-navigation link pills.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `siteName` | `string` | `undefined` | Fallback brand name text displayed when no logo image is supplied. |\n| `logoUrl` | `string` | `undefined` | Optional image URL for brand logo. |\n| `logoHref` | `string` | `\'/\'` | Target destination URL when clicking logo. |\n| `tagline` | `string` | `undefined` | Main hero headline text. |\n| `subtext` | `string` | `undefined` | Subtitle description text rendered below tagline. |\n| `ctaLabel` | `string` | `undefined` | Primary call-to-action button label. |\n| `ctaUrl` | `string` | `undefined` | Destination URL for CTA button. |\n| `searchPlaceholder` | `string` | `undefined` | Placeholder text for embedded search bar. |\n| `searchSubmitUrl` | `string` | `undefined` | Form submit action URL for search bar. |\n| `searchParamName` | `string` | `undefined` | Query string parameter key for search field (e.g., `\'tags\'`, `\'q\'`). |\n| `primaryLinks` | `NavLink[]` | `[]` | List of pill navigation links (`{ label: string, url: string }`). |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Hero section full viewport background color.\n- `var(--spm-bg-secondary)` - Background color for link pills and container elements.\n- `var(--spm-border)` - Border color for link pills and input borders.\n- `var(--spm-text-primary)` - Main tagline heading color.\n- `var(--spm-text-secondary)` - Subtext description text color.\n- `var(--spm-text-muted)` - Subtitle and helper label text color.\n- `var(--spm-accent)` - Primary CTA button background color.\n- `var(--spm-accent-text)` - Primary CTA button text color.\n- `var(--spm-radius)` - Border radius for CTA button, input fields, and link pills.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#static-index" -> UiHeroLanding {\n    urlPattern: R"(safebooru\\.org\\/?(?:index\\.php)?$)";\n    tagline: "Anime picture search engine";\n    subtext: "Browse millions of safe anime illustrations, updated hourly.";\n    ctaLabel: "Browse Gallery";\n    ctaUrl: "https://safebooru.org/index.php?page=post&s=list&tags=all";\n    searchPlaceholder: "Search tags... (e.g. blue_hair 1girl)";\n    searchSubmitUrl: "https://safebooru.org/index.php?page=post&s=list";\n    searchParamName: "tags";\n\n    bind siteName: "img[alt=\'Safebooru\'] | attr:alt";\n    bind logoUrl: "img[alt=\'Safebooru\'] | attr:src";\n\n    child primaryLinks extends NavLink {\n        selector: "#links a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',Vr="# UiImageCard\n\n## Purpose & Use Cases\n\n`UiImageCard` renders thumbnail card items for gallery feeds, grid layouts, and search results. It supports customizable aspect ratios (`square`, `video`, `portrait`, `auto`), hover scaling effects, object-fit options (`cover`, `contain`), optional title captions, and CSS variable custom width overrides.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `imageUrl` | `string` | **Required** | Source URL for card thumbnail image. |\n| `linkUrl` | `string` | **Required** | Target hyperlink URL when clicking card. |\n| `title` | `string` | **Required** | Title text used for caption and tooltip attributes. |\n| `id` | `string` | **Required** | Unique DOM identifier assigned to card element. |\n| `width` | `string` | `'160px'` | Default width of card container (overridden by `--spm-image-card-width` if defined). |\n| `aspectRatio` | `'square' \\| 'video' \\| 'portrait' \\| 'auto'` | `'square'` | Predefined aspect ratio (`square` = 1/1, `video` = 16/9, `portrait` = 3/4, `auto` = intrinsic). |\n| `imageFit` | `'cover' \\| 'contain'` | `'cover'` | CSS `object-fit` property applied to image. |\n| `showTitle` | `boolean` | `true` | Toggles rendering of bottom title caption block. |\n| `className` | `string` | `''` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-image-card-width)` - Custom variable controlling card width dynamically.\n- `var(--spm-bg-secondary)` - Card background color.\n- `var(--spm-border)` - Default card border color.\n- `var(--spm-text-primary)` - Title text color.\n- `var(--spm-text-secondary)` - Hover title text color.\n- `var(--spm-accent)` - Hover state border color.\n- `var(--spm-radius)` - Border radius of card container.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild items -> UiImageCard {\n    selector: \"#post-list .thumb\";\n    width: \"180px\";\n    aspectRatio: \"square\";\n    imageFit: \"cover\";\n    showTitle: true;\n\n    bind imageUrl: \"img | attr:src\";\n    bind linkUrl: \"a | attr:href\";\n    bind title: \"img | attr:title\";\n    bind id: \"self | attr:id\";\n}\n```\n",Hr="# UiImageViewer\n\n## Purpose & Use Cases\n\n`UiImageViewer` renders a full-container responsive image view. It centers the image within parent dimensions, applies CSS `object-fit` constraints (`contain` or `cover`), supports customizable background fill colors, and displays a graceful fallback state when no source image is provided.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `src` | `string` | `undefined` | Source URL of image to display. |\n| `alt` | `string` | `''` | Alt text for image element. |\n| `fit` | `'contain' \\| 'cover'` | `'contain'` | CSS `object-fit` sizing behavior (`contain` keeps full image visible, `cover` fills bounds). |\n| `background` | `string` | `var(--spm-bg-primary)` | Container background color. |\n| `className` | `string` | `''` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Default viewer background color.\n- `var(--spm-text-muted)` - Text color displayed when image source is missing.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild imageSlot -> UiImageViewer {\n    selector: \"#image\";\n    fit: \"contain\";\n\n    bind src: \"self | attr:src\";\n    bind alt: \"self | attr:alt\";\n}\n```\n",Ur='# UiModernGridPage\n\n## Purpose & Use Cases\n\n`UiModernGridPage` provides a comprehensive gallery page layout. It combines a responsive thumbnail grid (`UiImageCard`), a sidebar panel supporting grouped tag lists (`tagGroups`) or raw HTML, an integrated search bar (`UiSearchBar`), page title header, and bottom pagination controls (`UiPaginationBar`). Includes responsive mobile drawer/column adaptation.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | **Required** | Title displayed at top of gallery feed. |\n| `items` | `GridItem[]` | **Required** | Array of image thumbnail items (`{ imageUrl, linkUrl, title, id }`). |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links array (`{ label, url }`). |\n| `sidebarHtml` | `string` | `undefined` | Raw HTML content fallback for sidebar slot. |\n| `tags` | `TagItem[]` | `[]` | List of tag badges rendered in sidebar. |\n| `tagGroups` | `TagGroupConfig[]` | `[]` | Group definitions (`{ title: string, typeKey: string }`) to organize tags into categorized sections. |\n| `showSearch` | `boolean` | `false` | Enables embedded search bar. |\n| `searchPlaceholder` | `string` | `undefined` | Placeholder text for search field. |\n| `searchSubmitUrl` | `string` | `undefined` | Form submit action URL for search field. |\n| `searchParamName` | `string` | `\'tags\'` | Search field query string parameter key. |\n| `searchDefaultValue` | `string` | `\'\'` | Initial search query string. |\n| `height` | `string` | `\'100vh\'` | Height constraint of gallery container. |\n| `sidebarWidth` | `string` | `\'280px\'` | Width of sidebar panel. |\n| `hideSidebarOnMobile` | `boolean` | `true` | Hides sidebar panel on narrow viewports. |\n| `mobileBreakpoint` | `number` | `720` | Responsive mobile width threshold in pixels. |\n| `mobileColumns` | `number` | `2` | Number of grid columns on mobile screens. |\n| `mobileGap` | `string` | `\'8px\'` | Grid gap spacing on mobile screens. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Grid page background color.\n- `var(--spm-bg-secondary)` - Header bar and sidebar background color.\n- `var(--spm-border)` - Divider line border color.\n- `var(--spm-text-primary)` - Gallery title text color.\n- `var(--spm-text-muted)` - Empty feed notification text color.\n- `var(--spm-accent)` - Hover accent border and active indicators.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#post-list" -> UiModernGridPage {\n    urlPattern: "page=post&s=list";\n    pageTitle: "Gallery";\n    height: "calc(100vh - 78px)";\n    sidebarWidth: "260px";\n    hideSidebarOnMobile: true;\n    showSearch: true;\n    searchPlaceholder: "Search tags…";\n    searchSubmitUrl: "https://safebooru.org/index.php?page=post&s=list";\n    searchParamName: "tags";\n\n    mobileBreakpoint: 720;\n    mobileColumns: 2;\n    mobileGap: "8px";\n\n    tagGroups: R"([\n      { "title": "Artists", "typeKey": "artist" },\n      { "title": "Copyrights", "typeKey": "copyright" },\n      { "title": "Characters", "typeKey": "character" },\n      { "title": "General", "typeKey": "general" },\n      { "title": "Meta", "typeKey": "metadata" }\n    ])";\n\n    bind searchDefaultValue: ".sidebar form input[name=\'tags\'] | attr:value";\n\n    child items {\n        selector: "#post-list .thumb";\n        bind imageUrl: "img | attr:src";\n        bind linkUrl: "a | attr:href";\n        bind title: "img | attr:title";\n        bind id: "self | attr:id";\n    }\n\n    child pageLinks extends StandardLink {\n        selector: "#paginator .pagination a";\n    }\n\n    child tags extends TagItem {\n        selector: "#tag-sidebar li";\n        bind addUrl: "a:nth-of-type(2) | attr:href";\n        bind removeUrl: "a:nth-of-type(3) | attr:href";\n    }\n}\n```\n',Wr='# UiNavHeader\n\n## Purpose & Use Cases\n\n`UiNavHeader` provides a responsive, customizable site header component for modernized layouts. It renders a brand identity section (logo image or fallback site name text), primary navigation links, secondary action/utility links, and supports multiple layout configurations (`standard`, `stacked`, `minimal`). It includes active URL matching logic to highlight current navigation routes automatically.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `siteName` | `string` | `\'Site\'` | Fallback site title text displayed when no logo image URL is provided. |\n| `logoUrl` | `string` | `undefined` | Optional image URL for site logo. |\n| `logoHref` | `string` | `\'/\'` | Target URL when clicking logo or site title. |\n| `primaryLinks` | `NavLink[]` | `[]` | Primary navigation items (`{ label: string, url: string }`). |\n| `secondaryLinks` | `NavLink[]` | `[]` | Secondary/user action items (`{ label: string, url: string }`). |\n| `layout` | `\'standard\' \\| \'stacked\' \\| \'minimal\'` | `\'standard\'` | Header layout variant (`standard` = horizontal row, `stacked` = multi-tier header, `minimal` = compact container). |\n| `hideOnMobile` | `boolean` | `false` | When `true`, hides navigation header on viewports narrower than `mobileBreakpoint`. |\n| `mobileBreakpoint` | `number` | `720` | Pixel width threshold for mobile responsive hiding. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-secondary)` - Background color of header bar.\n- `var(--spm-bg-tertiary)` - Background for active navigation item pills.\n- `var(--spm-border)` - Bottom border color of header bar.\n- `var(--spm-text-primary)` - Site title and active link text color.\n- `var(--spm-text-secondary)` - Inactive primary navigation link color.\n- `var(--spm-text-muted)` - Secondary link text color.\n- `var(--spm-accent)` - Hover accent color for links and brand elements.\n- `var(--spm-radius)` - Border radius for nav link pills and logo wrapper.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#header" -> UiNavHeader {\n    siteName: "Safebooru";\n    logoHref: "/";\n    layout: "standard";\n    hideOnMobile: false;\n\n    bind logoUrl: "#logo img | attr:src";\n\n    child primaryLinks extends NavLink {\n        selector: "#navbar ul.main-nav a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n\n    child secondaryLinks extends NavLink {\n        selector: "#navbar ul.user-nav a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',Gr='# UiPaginationBar\n\n## Purpose & Use Cases\n\n`UiPaginationBar` renders page navigation links for paginated feeds, lists, and search results. It parses incoming `pageLinks` data, determines page offset values automatically based on query parameters (such as `pid` or `page`), renders Previous/Next controls, and highlights the currently active page.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageLinks` | `PageLink[]` | `[]` | List of page link objects (`{ label: string, url: string }`). |\n| `paramName` | `string` | `\'pid\'` | Query parameter key used to derive page offset and active status. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-secondary)` - Inactive page button background color.\n- `var(--spm-bg-tertiary)` - Button hover state background color.\n- `var(--spm-border)` - Border color of pagination buttons and container.\n- `var(--spm-text-primary)` - Inactive page number text color.\n- `var(--spm-text-secondary)` - Secondary navigation control label color.\n- `var(--spm-accent)` - Active page button background color and focus border.\n- `var(--spm-accent-text)` - Active page button text color.\n- `var(--spm-radius)` - Border radius of individual page buttons.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild pageLinks extends PageLink -> UiPaginationBar {\n    selector: "#paginator .pagination a";\n    paramName: "pid";\n    bind label: "self | text";\n    bind url: "self | attr:href";\n}\n```\n',Kr='# UiScrollPanel\n\n## Purpose & Use Cases\n\n`UiScrollPanel` provides a scrollable sidebar panel for detail views, media inspectors, and layout drawers. It aggregates search input (`UiSearchBar`), tag lists (`UiTagBadge`), categorized action buttons (`ButtonItem[]` automatically styled as `primary`, `nav`, or `ghost`), and raw statistics HTML blocks (`statisticsHtml`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `tags` | `TagItem[]` | `[]` | Array of tag badge objects (`{ name, count, type, url }`). |\n| `buttons` | `ButtonItem[]` | `[]` | List of action buttons (`{ label, url, targetSelector }`) automatically classified by label intent. |\n| `statisticsHtml` | `string` | `undefined` | Raw HTML content rendered inside a statistics panel block. |\n| `showSearch` | `boolean` | `false` | Enables integrated search bar at top of panel. |\n| `searchPlaceholder` | `string` | `undefined` | Search field placeholder text. |\n| `searchSubmitUrl` | `string` | `undefined` | Search form action URL target. |\n| `searchParamName` | `string` | `\'q\'` | Search field query parameter name. |\n| `width` | `string` | `\'280px\'` | Fixed or responsive width of panel container. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `onClose` | `() => void` | `undefined` | Optional callback executed when close button is clicked. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-secondary)` - Panel background color.\n- `var(--spm-bg-tertiary)` - Section header and button background color.\n- `var(--spm-border)` - Panel divider border color.\n- `var(--spm-text-primary)` - Panel header and primary button text color.\n- `var(--spm-text-secondary)` - Sub-heading and list item text color.\n- `var(--spm-text-muted)` - Statistics label and count text color.\n- `var(--spm-accent)` - Primary action button background and hover color.\n- `var(--spm-radius)` - Border radius for buttons and search inputs.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#sidebar" -> UiScrollPanel {\n    width: "300px";\n    showSearch: true;\n    searchPlaceholder: "Search tags...";\n    searchSubmitUrl: "https://safebooru.org/index.php?page=post&s=list";\n    searchParamName: "tags";\n\n    bind statisticsHtml: "#stats ul | html";\n\n    child tags extends TagItem {\n        selector: "#tag-sidebar li";\n        bind name: "a:last-of-type | text";\n        bind count: "span.tag-count | text";\n        bind type: "self | attr:class";\n        bind url: "a:last-of-type | attr:href";\n    }\n\n    child buttons extends ButtonItem {\n        selector: ".link-list a";\n        bind label: "self | text";\n        bind url: "self | hrefOrOnclick";\n        bind targetSelector: "self | selector";\n    }\n}\n```\n',qr='# UiSearchBar\n\n## Purpose & Use Cases\n\n`UiSearchBar` provides a styled search input form component supporting GET/POST form target navigation, query parameter binding, hidden form input forwarding, and interactive focus states. It can function as a standalone form element or be embedded within components like `UiScrollPanel`, `UiHeroLanding`, and `UiModernGridPage`.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `placeholder` | `string` | `\'Search…\'` | Placeholder text displayed when input is empty. |\n| `defaultValue` | `string` | `\'\'` | Initial text value populated in search input field. |\n| `submitUrl` | `string` | `undefined` | Target URL action for native browser form submission. |\n| `queryParamName` | `string` | `\'tags\'` | The `name` attribute key used for the search text field. |\n| `method` | `\'get\' \\| \'post\' \\| \'GET\' \\| \'POST\'` | `\'GET\'` | HTTP form submission method. |\n| `hiddenFields` | `{ name: string; value: string }[] \\| string` | `[]` | Array or JSON-parsed string of hidden form inputs (`{ name: string, value: string }`) to forward on submit. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to form wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `onSearch` | `(value: string) => void` | `undefined` | Optional JS callback executed when form is submitted (prevents default navigation if specified). |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-tertiary)` - Input field container background color.\n- `var(--spm-border)` - Default border color around search input.\n- `var(--spm-text-primary)` - Input text color.\n- `var(--spm-text-muted)` - Placeholder text color and default search icon color.\n- `var(--spm-accent)` - Focused state border color and search submit button hover color.\n- `var(--spm-radius)` - Border radius of search container.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#search-box" -> UiSearchBar {\n    placeholder: "Search posts by tag...";\n    submitUrl: "https://safebooru.org/index.php?page=post&s=list";\n    queryParamName: "tags";\n    method: "GET";\n    hiddenFields: R"([\n      { "name": "page", "value": "post" },\n      { "name": "s", "value": "list" }\n    ])";\n\n    bind defaultValue: "form input[name=\'tags\'] | attr:value";\n}\n```\n',Jr='# UiSplitLayout\n\n## Purpose & Use Cases\n\n`UiSplitLayout` provides a two-column layout shell for detail and inspection views. It pairs a main media view (rendering an image via `UiImageViewer` or arbitrary rich markup via `mainHtml`) with a scrollable information sidebar (`UiScrollPanel`). Supports side swapping (`left`/`right`), customizable sidebar width, image fit control, and search bar forwarding.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `imageSlot` | `ImageSlotItem[]` | `[]` | Media image items (`{ src, alt }`) rendered in main view using `UiImageViewer`. |\n| `tags` | `TagItem[]` | `[]` | Forwarded tag items rendered in sidebar. |\n| `buttons` | `ButtonItem[]` | `[]` | Forwarded action buttons rendered in sidebar. |\n| `statisticsHtml` | `string` | `undefined` | Forwarded HTML content string rendered in sidebar statistics block. |\n| `sidebarWidth` | `string` | `\'280px\'` | Width of sidebar panel column. |\n| `sidebarSide` | `\'left\' \\| \'right\'` | `\'left\'` | Position of sidebar column (`left` or `right`). |\n| `imageFit` | `\'contain\' \\| \'cover\'` | `\'contain\'` | Image object-fit property passed to `UiImageViewer`. |\n| `height` | `string` | `\'100vh\'` | Layout container height. |\n| `splitButtons` | `boolean` | `false` | Enables separate button placement layout. |\n| `showSearch` | `boolean` | `false` | Enables search bar in sidebar. |\n| `searchPlaceholder` | `string` | `undefined` | Forwarded search bar placeholder text. |\n| `searchSubmitUrl` | `string` | `undefined` | Forwarded search bar submission URL. |\n| `searchParamName` | `string` | `\'q\'` | Forwarded query parameter key for search bar. |\n| `mainHtml` | `string` | `undefined` | Generic HTML markup string rendered in main viewport when `imageSlot` is empty. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Main viewing pane background color.\n- `var(--spm-bg-secondary)` - Sidebar column background color.\n- `var(--spm-border)` - Divider border line separating main view and sidebar.\n- `var(--spm-text-primary)` - Primary text color.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#post-view" -> UiSplitLayout {\n    urlPattern: "page=post&s=view";\n    sidebarWidth: "300px";\n    sidebarSide: "left";\n    imageFit: "contain";\n    height: "calc(100vh - 78px)";\n    showSearch: true;\n    searchPlaceholder: "Search tags...";\n    searchSubmitUrl: "https://safebooru.org/index.php?page=post&s=list";\n    searchParamName: "tags";\n\n    bind statisticsHtml: "#stats ul | html";\n\n    child imageSlot {\n        selector: "#image";\n        bind src: "self | attr:src";\n        bind alt: "self | attr:alt";\n    }\n\n    child tags {\n        selector: "#tag-sidebar li[class*=\'tag-type-\']";\n        scope: "document";\n        bind name: "a:last-of-type | text";\n        bind count: "span.tag-count | text";\n        bind type: "self | attr:class";\n        bind url: "a:last-of-type | attr:href";\n    }\n\n    child buttons {\n        selector: ".link-list a";\n        scope: "document";\n        bind label: "self | text";\n        bind url: "self | hrefOrOnclick";\n        bind targetSelector: "self | selector";\n    }\n}\n```\n',Yr='# UiStatsDashboard\n\n## Purpose & Use Cases\n\n`UiStatsDashboard` provides a metrics and analytics leaderboard layout component. It presents top-ranked metrics and statistical breakdown tables (such as top tag usage, active users, or post upload counts) organized into section cards, complete with timeframe badges (`dateRangeText`) and navigation links (`navLinks`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'Statistics\'` | Title text displayed in header bar. |\n| `dateRangeText` | `string` | `\'All time\'` | Timeframe indicator text rendered in top date range badge. |\n| `navLinks` | `NavLink[]` | `[]` | Navigation links array (`{ label, url }`) rendered below header. |\n| `sections` | `StatSection[]` | `[]` | List of statistical leaderboard cards (`{ title, items }`). |\n| `height` | `string` | `\'100vh\'` | Height constraint of layout wrapper. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `StatSection` & `StatItem` Schemas\n\n- `StatSection`:\n  - `title`: `string` - Heading title of leaderboard section card.\n  - `items`: `StatItem[]` - Ranked item list.\n- `StatItem`:\n  - `place`: `string` (optional) - Rank index (e.g. `\'#1\'`).\n  - `amount`: `string` - Metric value count or percentage label.\n  - `name`: `string` - Item or entity name text.\n  - `profileUrl`: `string` (optional) - Hyperlink URL associated with entity.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Layout primary background color.\n- `var(--spm-bg-secondary)` - Stat section card background color.\n- `var(--spm-bg-tertiary)` - Date badge background and table row hover color.\n- `var(--spm-border)` - Section card border and row divider color.\n- `var(--spm-text-primary)` - Section title and item entity name text color.\n- `var(--spm-text-secondary)` - Navigation link text color.\n- `var(--spm-text-muted)` - Rank position label and metric count text color.\n- `var(--spm-accent)` - Hover accent border and active tab link color.\n- `var(--spm-radius)` - Border radius of stat cards and timeframe badges.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#content:has(div.toptencont)" -> UiStatsDashboard {\n    urlPattern: "page=stats";\n    pageTitle: "Booru Statistics Dashboard";\n    height: "calc(100vh - 78px)";\n\n    bind dateRangeText: "h2 | text";\n\n    child navLinks extends NavLink {\n        selector: "#content > a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n\n    child sections {\n        selector: "div.toptencont";\n        bind title: "thead tr th | text";\n\n        child items {\n            selector: "tbody tr";\n            bind place: "td:nth-child(1) | text";\n            bind amount: "td:nth-child(2) | text";\n            bind name: "td:nth-child(3) a | text";\n            bind profileUrl: "td:nth-child(3) a | attr:href";\n        }\n    }\n}\n```\n',Xr='# UiTable\n\n## Purpose & Use Cases\n\n`UiTable` provides a generic, styled HTML tabular grid component. It accepts a column configuration array (`columns`), row dataset (`data`), optional row click handler (`onRowClick`), column text alignment controls, custom widths, and custom cell rendering functions.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `columns` | `ColumnConfig<T>[]` | **Required** | Column definitions (`{ key, header, width, align, render }`). |\n| `data` | `T[]` | **Required** | Dataset array containing row objects to render. |\n| `onRowClick` | `(item: T) => void` | `undefined` | Optional click event callback executed when a table row is clicked. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to container element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `ColumnConfig<T>` Schema\n\n- `key`: `keyof T | string` - Object property key or identifier for column value.\n- `header`: `string` - Text heading displayed in table header cell.\n- `width`: `string` (optional) - Width constraint for column (e.g., `\'120px\'`, `\'15%\'`).\n- `align`: `\'left\' | \'center\' | \'right\'` (optional) - Text alignment inside header and data cells (defaults to `\'left\'`).\n- `render`: `(item: T) => React.ReactNode` (optional) - Custom cell rendering callback.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-secondary)` - Table container background color.\n- `var(--spm-bg-tertiary)` - Table header row (`<thead>`) background color.\n- `var(--spm-border)` - Outer border and table cell row divider color.\n- `var(--spm-text-primary)` - Cell content text color.\n- `var(--spm-text-secondary)` - Table header text color.\n- `var(--spm-accent)` - Hover highlight background and border accent color.\n- `var(--spm-radius)` - Border radius of table wrapper container.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild tableRows -> UiTable {\n    columns: R"([\n      { "key": "id", "header": "ID", "width": "60px", "align": "center" },\n      { "key": "title", "header": "Title", "align": "left" },\n      { "key": "author", "header": "Author", "width": "120px" }\n    ])";\n}\n```\n',Zr='# UiTableListPage\n\n## Purpose & Use Cases\n\n`UiTableListPage` provides a complete tabular list page layout for search result indexes, directory listings, and wiki page tables. It wraps a `UiTable` grid with page title headers, column cell formatting logic (`text`, `link`, `html`, `badge`, `checkbox`), optional infinite scroll (`onLoadMore`), and bottom pagination links (`UiPaginationBar`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'List\'` | Title text displayed in header bar. |\n| `tableRows` | `any[]` | `[]` | Data row list array. |\n| `columns` | `TableColumnConfig[]` | `undefined` | Column formatting configurations (`{ key, header, width, align, type, urlKey, badgeStyleKey }`). |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links array (`{ label, url }`). |\n| `height` | `string` | `\'100vh\'` | Height constraint of page container. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `onLoadMore` | `() => Promise<{ tableRows: any[]; hasMore: boolean }>` | `undefined` | Optional async callback executed on reaching page end to load more rows. |\n\n### `TableColumnConfig` Schema\n\n- `key`: `string` - Row property key to extract cell data from.\n- `header`: `string` - Table column header title text.\n- `width`: `string` (optional) - Width constraint for column.\n- `align`: `\'left\' | \'center\' | \'right\'` (optional) - Alignment of cell content.\n- `type`: `\'text\' | \'link\' | \'html\' | \'badge\' | \'checkbox\' | \'date\' | \'currency\'` (optional) - Cell renderer type.\n  - `\'date\'` - Renders a locale-aware date string from date strings or timestamps, supporting correct chronological sorting.\n  - `\'currency\'` - Renders numbers as formatted USD currency values (e.g. `$1,200.00`), supporting correct numerical sorting.\n- `urlKey`: `string` (optional) - Row property key containing hyperlink URL (used when `type` is `\'link\'`).\n- `badgeStyleKey`: `string` (optional) - Row property key containing badge style identifier (used when `type` is `\'badge\'`).\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Page layout primary background color.\n- `var(--spm-bg-secondary)` - Table container and header bar background color.\n- `var(--spm-bg-tertiary)` - Table header row (`<thead>`) background color.\n- `var(--spm-border)` - Table border and row divider color.\n- `var(--spm-text-primary)` - Page title and table text content color.\n- `var(--spm-text-secondary)` - Column header text color.\n- `var(--spm-accent)` - Hyperlink text color and active indicators.\n- `var(--spm-radius)` - Table container border radius.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#content:has(table.highlightable)" -> UiTableListPage {\n    urlPattern: "page=alias&s=list";\n    pageTitle: "Tag Aliases";\n    height: "calc(100vh - 78px)";\n    columns: R"([\n      { "key": "pending", "header": "Pending", "width": "60px", "type": "checkbox" },\n      { "key": "aliasName", "header": "Alias", "type": "link", "urlKey": "aliasUrl" },\n      { "key": "toName", "header": "To Tag", "type": "link", "urlKey": "toUrl" },\n      { "key": "reason", "header": "Reason / Discussion", "type": "text" }\n    ])";\n\n    child tableRows {\n        selector: "#aliases table.highlightable tr:not(.tableheader)";\n        bind pending: "td:nth-child(1) input[type=\'checkbox\'] | attr:class";\n        bind aliasName: "td:nth-child(2) a | text";\n        bind aliasUrl: "td:nth-child(2) a | attr:href";\n        bind toName: "td:nth-child(3) a | text";\n        bind toUrl: "td:nth-child(3) a | attr:href";\n        bind reason: "td:nth-child(4) | text";\n    }\n\n    child pageLinks extends DocumentLink {\n        selector: "#paginator .pagination a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',Qr='# UiTagBadge\n\n## Purpose & Use Cases\n\n`UiTagBadge` renders tag and category pill badges. It displays a category label, post count pill, primary hyperlink (`href`), and optional interactive action buttons for adding (`+` via `addUrl`) or removing (`-` via `removeUrl`) tags in search filter sidebars.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `label` | `string` | **Required** | Text label of tag or category. |\n| `count` | `string \\| number` | `undefined` | Optional post/item count displayed next to tag label. |\n| `href` | `string` | `undefined` | Hyperlink URL for tag search navigation. |\n| `addUrl` | `string` | `undefined` | Optional URL for `+` action button to append tag to current search. |\n| `removeUrl` | `string` | `undefined` | Optional URL for `-` action button to exclude tag from current search. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-tertiary)` - Background color of tag badge pill.\n- `var(--spm-border)` - Border color of tag badge pill.\n- `var(--spm-text-primary)` - Primary tag label text color.\n- `var(--spm-text-muted)` - Item count text color and action button icon color.\n- `var(--spm-accent)` - Hover border color and active state indicator.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild tags extends TagItem -> UiTagBadge {\n    selector: "#tag-sidebar li";\n    bind label: "a:nth-of-type(1) | text";\n    bind count: "span.tag-count | text";\n    bind href: "a:nth-of-type(1) | attr:href";\n    bind addUrl: "a:nth-of-type(2) | attr:href";\n    bind removeUrl: "a:nth-of-type(3) | attr:href";\n}\n```\n',$r="# UiToastContainer\n\n## Purpose & Use Cases\n\n`UiToastContainer` provides global toast feedback notifications and confirmation modal portals for user feedback. It manages animated toast items (`UiToast`) supporting four variant types (`info`, `warning`, `success`, `error`), backdrop blurs, auto-dismissal timers, and portal listening above SPM Shadow DOM overlays.\n\n## Properties (Props API)\n\n### `UiToast` Item Props API\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `message` | `string` | **Required** | Message text rendered inside toast notification. |\n| `type` | `'info' \\| 'warning' \\| 'success' \\| 'error'` | `'info'` | Feedback variant type controlling indicator border color (`info` = accent, `success` = green, `warning` = amber, `error` = red). |\n| `onClose` | `() => void` | **Required** | Callback function invoked when toast is closed or auto-dismissed. |\n| `className` | `string` | `''` | Custom CSS class name appended to toast element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `UiToastContainer` Portal Props API\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `position` | `'top-right' \\| 'top-left' \\| 'bottom-right' \\| 'bottom-left'` | `'bottom-right'` | Screen corner positioning anchor for toast stack. |\n| `className` | `string` | `''` | Custom CSS class name appended to container wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-border)` - Border color of toast card container.\n- `var(--spm-radius)` - Border radius for toast item cards.\n- `var(--spm-text-primary)` - Toast message body text color.\n- `var(--spm-accent)` - Default indicator border color for `info` type toasts.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct \"#global-toast-portal\" -> UiToastContainer {\n    urlPattern: \".*\";\n    position: \"bottom-right\";\n}\n```\n",ei="# Site Package Manager (SPM) - CLI Tooling & Pipeline Manual (`cli-tooling.md`)\n\nThe `spm-cli` C++17 binary acts as the official compiler and runtime development tools orchestrator for Site Package Manager (`spm`).\n\n---\n\n## 1. CLI Commands & Subcommands\n\n### A. Development Mode (`spm dev`)\nStarts an in-memory compiler and file watcher server with live hot-reloading for extension themes.\n```bash\nspm dev\n```\n- Monitors `.vnr` source files inside `vnr_project/` subdirectories.\n- Automatically compiles `.vnr` changes into dynamic payloads and notifies the running browser extension to hot-reload Shadow DOM styles and component mounts.\n\n### B. Project Compilation (`spm compile`)\nCompiles a Veneer Spec (`.vnr`) project folder into a standalone, production-ready `manifest.json`.\n```bash\nspm compile [path/to/vnr_project]\n```\n- Lexes, parses, resolves class inheritance, and emits formatted JSON.\n- Deep-merges preexisting metadata (`author`, `description`, `targetUrl`, `version`) into the output `manifest.json`.\n\n### C. Selector Validation (`spm validate`)\nValidates compiled manifest selectors and data extraction pipes against local HTML page snapshots offline.\n```bash\nspm validate <manifest.json> --against <snapshot.html> [--json]\n```\n- Parses HTML snapshots using a JSDOM-equivalent layout engine.\n- Matches CSS selectors for all components and reconstructs.\n- Runs data extraction pipes (`text`, `attr`, `split`, `number`, `cleanNumber`) and validates that expected properties extract successfully.\n- Outputs detailed pass/fail status reports, or clean JSON metadata if `--json` is supplied.\n\n### D. Transformation Application (`spm apply`)\nApplies compiled manifest transformations to a local HTML snapshot and saves the modernized layout result.\n```bash\nspm apply <manifest.json> --input <input.html> -o <output.html>\n```\n- Implements layout replacements, components reconstruction, and element hiding.\n- Injects theme CSS variables and custom styles directly in the `<head>` style block.\n- Outputs the finalized modern HTML file for visual verification.\n\n---\n\n## 2. Recommended Directory Layout for Themes\n\n```text\nsite-domain/\n└── theme-name/\n    ├── manifest.json              # Auto-compiled production output\n    ├── content.css                # Global CSS overrides\n    └── vnr_project/               # Veneer Spec source folder\n        ├── theme.vnr              # Theme tokens & custom styles\n        ├── classes.vnr            # Scraping blueprints\n        ├── navigation.vnr         # Header reconstructs\n        └── pages.vnr              # Feed and page reconstructs\n```\n",ti="# Site Package Manager (SPM) - Component Development Guide\n\nAll modern layout reconstructions in SPM rely on React components to replace legacy DOM structures. To maintain architectural clarity, components are divided into two distinct styles: **Layout Primitives** and **Dedicated Layout Components**.\n\n---\n\n## 1. The Component Contract\n\nComponents must follow a strict, standardized contract to ensure compatibility with dynamic property injection, auto-registration, and styling overrides.\n\n### Coding Blueprint Example\n\n```tsx\n// 1. Interface first - all props optional with sensible defaults\ninterface UiMyComponentProps {\n  items?: { label: string; url: string }[];\n  title?: string;\n  className?: string;\n  style?: React.CSSProperties;\n}\n\n// 2. Export a named function - no default exports\nexport function UiMyComponent({\n  items = [],\n  title,\n  className = '',\n  style = {},\n}: UiMyComponentProps) {\n  return (\n    <div\n      className={className}\n      style={{\n        background: 'var(--spm-bg-primary)',  // Always use visual CSS variables\n        color: 'var(--spm-text-primary)',\n        ...style,                              // Always spread incoming styles last\n      }}\n    >\n      {/* Conditional rendering - avoids orphan markup */}\n      {title && <h2>{title}</h2>}\n      \n      {items.map((item, i) => (\n        <a key={i} href={item.url}>{item.label}</a>\n      ))}\n    </div>\n  );\n}\n```\n\n### Critical Rules\n- **Named Exports Only**: Never use `export default`. The registry generator relies on named exports.\n- **Style Spreading**: Always accept `className` and `style` in the properties, and apply them directly to the root element. Spread `style` last to allow external layout properties (like width, padding, margins) to overwrite component styles at mount time.\n\n## 2. Component Documentation Index\n\nFor detailed specifications, Props API tables, design tokens, and `.vnr` (Veneer Spec) usage examples for each component, consult the dedicated documentation files below:\n\n| Component | Category | Documentation File | Description |\n| :--- | :--- | :--- | :--- |\n| `LayoutPrimitives` | Primitives | [`LayoutPrimitives.md`](components/LayoutPrimitives.md) | Generic layout building blocks (`UiBox`, `UiFlexRow`, `UiFlexColumn`, `UiGrid`, `UiText`, `UiImage`, `UiLink`, `UiScrollBox`). |\n| `UiNavHeader` | Dedicated | [`UiNavHeader.md`](components/UiNavHeader.md) | Navigation header with logo, site title, primary/secondary links, and responsive layouts. |\n| `UiHeroLanding` | Dedicated | [`UiHeroLanding.md`](components/UiHeroLanding.md) | Full viewport landing hero with logo, tagline, CTA button, search bar, and primary links. |\n| `UiSearchBar` | Dedicated | [`UiSearchBar.md`](components/UiSearchBar.md) | Form search input with GET/POST form target, query binding, and hidden field forwarding. |\n| `UiImageCard` | Dedicated | [`UiImageCard.md`](components/UiImageCard.md) | Thumbnail image card with title caption, aspect ratio controls, link, and hover effects. |\n| `UiTagBadge` | Dedicated | [`UiTagBadge.md`](components/UiTagBadge.md) | Category/tag pill badge with item count and remove/add filter action links. |\n| `UiPaginationBar` | Dedicated | [`UiPaginationBar.md`](components/UiPaginationBar.md) | Page navigation links bar for paginated feeds with active page detection. |\n| `UiModernGridPage` | Dedicated | [`UiModernGridPage.md`](components/UiModernGridPage.md) | Gallery grid page layout with optional tag sidebar slot and mobile column controls. |\n| `UiImageViewer` | Dedicated | [`UiImageViewer.md`](components/UiImageViewer.md) | Responsive image viewer with fit options (`contain`/`cover`) and background fallback. |\n| `UiScrollPanel` | Dedicated | [`UiScrollPanel.md`](components/UiScrollPanel.md) | Scrollable sidebar panel with search input, tag lists, buttons, and statistics HTML. |\n| `UiSplitLayout` | Dedicated | [`UiSplitLayout.md`](components/UiSplitLayout.md) | Two-column layout shell supporting image viewer/main HTML content and scroll panel sidebar. |\n| `UiCommentListPage` | Dedicated | [`UiCommentListPage.md`](components/UiCommentListPage.md) | Comment thread list with post thumbnails, speech bubble replies, and metadata. |\n| `UiDashboardPage` | Dedicated | [`UiDashboardPage.md`](components/UiDashboardPage.md) | Card panel dashboard layout for user account options, settings, and actions. |\n| `UiStatsDashboard` | Dedicated | [`UiStatsDashboard.md`](components/UiStatsDashboard.md) | Ranking metrics and analytics tables dashboard with date range badges. |\n| `UiTable` | Dedicated | [`UiTable.md`](components/UiTable.md) | Tabular grid layout with row click callbacks, custom cell renderers, and column configs. |\n| `UiTableListPage` | Dedicated | [`UiTableListPage.md`](components/UiTableListPage.md) | Search results table page inside a `UiTable` container with pagination and infinite scroll. |\n| `UiToastContainer` | Dedicated | [`UiToastContainer.md`](components/UiToastContainer.md) | Global toast notifications stack and modal confirm portal listener. |\n\n---\n\n## 3. Layout Primitives\n\nPrimitives are generic, lightweight building blocks located in `src/components/primitives/LayoutPrimitives.tsx`. They are used inside reconstructs to structure content without introducing visual overrides.\n\n### Primitive Registry\n\n| Component | Renders As | Key Props | Purpose |\n| :--- | :--- | :--- | :--- |\n| `UiBox` | `<div>` | Standard HTML div props | A generic box wrapper for padding, background blocks, and borders. |\n| `UiFlexRow` | `<div>` (flex row) | Standard HTML div props | A horizontal layout container for aligning elements side-by-side. |\n| `UiFlexColumn` | `<div>` (flex column) | Standard HTML div props | A vertical layout container for stacking elements. |\n| `UiGrid` | `<div>` (grid layout) | Standard HTML div props | A CSS Grid layout container for multi-column structures. |\n| `UiText` | `<span>` | `content` | Renders styled text overrides dynamically. |\n| `UiImage` | `<img>` | `src`, `alt` | Standard responsive image rendering. |\n| `UiLink` | `<a>` | `href` | Navigation hyperlinks. |\n\n---\n\n## 4. Dedicated Layout Components\n\nDedicated components are complex, pre-styled views located in `src/components/dedicated/`. They are designed to modernize major sections of the legacy page (such as full feeds, split image views, navigation headers, or comment boards).\n\n### Dedicated Components Directory\n\n| Component | Purpose | Key Props |\n| --- | --- | --- |\n| `UiNavHeader` | Site navigation header | `siteName`, `logoUrl`, `logoHref`, `primaryLinks`, `secondaryLinks`, `layout` |\n| `UiHeroLanding` | Full-viewport landing page hero | `siteName`, `logoUrl`, `logoHref`, `tagline`, `subtext`, `ctaLabel`, `ctaUrl`, `searchSubmitUrl`, `searchParamName`, `primaryLinks` |\n| `UiSearchBar` | Search input field | `placeholder`, `defaultValue`, `submitUrl`, `queryParamName` |\n| `UiImageCard` | Single image card with link | `imageUrl`, `linkUrl`, `title`, `id`, `width`, `aspectRatio`, `imageFit`, `showTitle` |\n| `UiTagBadge` | Tag pill with post count | `label`, `count`, `href` |\n| `UiPaginationBar` | Page navigation links | `pageLinks`, `paramName` |\n| `UiModernGridPage` | Gallery page with sidebar slot | `pageTitle`, `items`, `pageLinks` |\n| `UiImageViewer` | Full-height image that fills its container | `src`, `alt`, `fit` (`contain`\\|`cover`), `background` |\n| `UiScrollPanel` | Scrollable sidebar panel with search, tags, buttons, stats | `tags`, `buttons`, `statisticsHtml`, `showSearch`, `searchSubmitUrl`, `searchParamName`, `width` |\n| `UiSplitLayout` | Two-column full-height layout shell | `imageSlot`, `tags`, `buttons`, `statisticsHtml`, `sidebarWidth`, `sidebarSide`, `imageFit`, `showSearch`, `searchSubmitUrl` |\n| `UiCommentListPage` | Comment threads list with optional sidebar | `pageTitle`, `threads`, `pageLinks`, `height` |\n| `UiDashboardPage` | List panel layout for options/actions | `pageTitle`, `subTitle`, `cards`, `height` |\n| `UiStatsDashboard` | Metric tables/rankings blocks dashboard | `pageTitle`, `dateRangeText`, `navLinks`, `sections`, `height` |\n| `UiTable` | Isolated tabular grid with row callback | `columns`, `data`, `onRowClick` |\n| `UiTableListPage` | Search results page layout inside a `UiTable` | `pageTitle`, `tableRows`, `columns`, `pageLinks`, `height`, `onLoadMore` |\n| `UiToastContainer` | Toast feedback overlays & confirmation portals | - |\n\n---\n\n### Component Contracts (Props)\n\n#### `UiCommentListPage`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Comments'` | Title of the comments page |\n| `threads` | `CommentThread[]` | `[]` | Array of comment threads (`id`, `thumbnailUrl`, `postUrl`, `postDate`, `postUser`, `postRating`, `postScore`, `tags`, `comments`) |\n| `pageLinks` | `PageLink[]` | `[]` | Array of page links for pagination (`label`, `url`) |\n| `height` | `string` | `'100vh'` | Layout height |\n\n#### `UiDashboardPage`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Account Control Panel'` | Header title text |\n| `subTitle` | `string` | - | Subtitle description |\n| `cards` | `DashboardCard[]` | `[]` | Custom action cards (`title`, `description`, `url`, `urlLabel`) |\n| `height` | `string` | `'100vh'` | Layout height |\n\n#### `UiStatsDashboard`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Statistics'` | Header title text |\n| `dateRangeText` | `string` | `'All time'` | Range label tag |\n| `navLinks` | `NavLink[]` | `[]` | Navigation links (`label`, `url`) |\n| `sections` | `StatSection[]` | `[]` | Stat card groups (`title`, list of `items` with `place`, `amount`, `name`, `profileUrl`) |\n| `height` | `string` | `'100vh'` | Layout height |\n\n#### `UiTableListPage`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Wiki Pages'` | Header title text |\n| `tableRows` | `any[]` | `[]` | Data row list |\n| `columns` | `TableColumnConfig[]` | - | Configuration of columns (`key`, `header`, `width`, `align`, `type`, `urlKey`, `badgeStyleKey`) |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links |\n| `height` | `string` | `'100vh'` | Layout height |\n| `onLoadMore` | `() => Promise<{tableRows, hasMore}>` | - | Async infinite scroll trigger callback |\n\n#### `UiImageViewer`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `src` | `string` | - | Image URL |\n| `alt` | `string` | `''` | Alt text |\n| `fit` | `'contain' \\| 'cover'` | `'contain'` | CSS `object-fit` |\n| `background` | `string` | `var(--spm-bg-primary)` | Container background |\n\n#### `UiScrollPanel`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `tags` | `TagItem[]` | `[]` | Tags array (`name`, `count`, `type`, `url`) - grouped by `type` automatically |\n| `buttons` | `ButtonItem[]` | `[]` | Button array (`label`, `url`) - auto-classified into nav/primary/ghost by label keywords |\n| `statisticsHtml` | `string` | - | Raw HTML rendered in a statistics section |\n| `showSearch` | `boolean` | `false` | Show UiSearchBar at the top |\n| `searchSubmitUrl` | `string` | - | URL to submit searches to |\n| `searchParamName` | `string` | `'q'` | Query parameter name |\n| `width` | `string` | `'280px'` | Panel width |\n\n#### `UiSplitLayout`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `imageSlot` | `{src, alt}[]` | `[]` | Image data - first item is rendered via `UiImageViewer` |\n| `tags` | `TagItem[]` | `[]` | Forwarded to `UiScrollPanel` |\n| `buttons` | `ButtonItem[]` | `[]` | Forwarded to `UiScrollPanel` |\n| `statisticsHtml` | `string` | - | Forwarded to `UiScrollPanel` |\n| `sidebarWidth` | `string` | `'280px'` | Panel width |\n| `sidebarSide` | `'left' \\| 'right'` | `'left'` | Panel position |\n| `imageFit` | `'contain' \\| 'cover'` | `'contain'` | Forwarded to `UiImageViewer` |\n| `showSearch` | `boolean` | `false` | Show search in panel |\n| `searchSubmitUrl` | `string` | - | Search URL |\n| `searchParamName` | `string` | `'q'` | Search param name |\n\n#### `UiHeroLanding`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `siteName` | `string` | `'Site'` | Fallback text if no logo |\n| `logoUrl` | `string` | - | Logo image URL |\n| `logoHref` | `string` | `'/'` | Logo link URL |\n| `tagline` | `string` | - | Heading below logo |\n| `subtext` | `string` | - | Subtitle paragraph |\n| `ctaLabel` | `string` | `'Browse'` | CTA button text |\n| `ctaUrl` | `string` | `'/'` | CTA button URL |\n| `searchSubmitUrl` | `string` | - | If set, renders a search bar |\n| `searchParamName` | `string` | `'q'` | Search param name |\n| `primaryLinks` | `{label, url}[]` | `[]` | Pill nav links below CTA |\n\n---\n\n## 5. Design & Styling Conventions\n\nComponents are mounted inside an isolated **Shadow DOM** to prevent the host site's legacy styles from polluting the modern UI.\n- **Strict CSS Variables**: Never write hardcoded color or spacing values (like `#ffffff` or `12px`). Use predefined SPM theme variables (e.g. `var(--spm-bg-primary)`, `var(--spm-border)`, `var(--spm-radius)`).\n- **Conditional Rendering**: If data from a scraped property is missing, do not render a placeholder or empty tags. Use logical checks (`{data && <Element />}`) to keep the UI clean.\n\n---\n\n## 6. Auto-Registration Mechanics\n\nYou do **not** need to register your new components in registry files manually. SPM features an automated build step:\n\n### How it works:\n1.  When you run `npm run build` or `npm run dev`, the compiler executes `scripts/build-registry.js`.\n2.  The script scans all component files under `src/components/` recursively.\n3.  It extracts the component names, analyzes their TypeScript `Props` interface declarations, and generates:\n    *   [`src/components-registry.ts`](../src/components-registry.ts): The runtime registry mapping component names to their lazy-loaded TSX wrappers.\n    *   `schemas/theme-manifest-schema.json`: The layout JSON validation schema used by VS Code to validate property configurations.\n\n---\n\n## 7. Running & Writing Tests\n\nTo run the component unit tests:\n```bash\nnpm run test\n```\n\n### Writing Tests\nFor component unit tests that query DOM elements or interact with shadow roots, you must configure Vitest to run in a browser-like sandbox. Include the following environment header at the top of your test files:\n\n```ts\n// @vitest-environment jsdom\n```\n\n---\n\n## 8. Component Design Checklist (Agnostic Guidelines)\n\nTo keep the component library generic and portable across any host website or domain, all components must follow this design checklist:\n\n1. **Zero Hardcoded Metadata:**\n   - Never hardcode site titles, company names, logos, or URLs.\n   - All texts (like `\"Search...\"`, titles, placeholders) must be received via props with sensible, neutral defaults (e.g. `pageTitle = \"Dashboard\"`).\n2. **CSS Variables for Themes:**\n   - Do not hardcode specific hex colors or styles unless they are neutral layouts.\n   - Use design token variables (`var(--spm-bg-primary)`, `var(--spm-accent)`, etc.) to style components so they adapt natively to user color themes.\n3. **Container-Fluid Sizing:**\n   - Components must not have hardcoded fixed width parameters (like `width: \"800px\"`) on outer boundaries. They should fill their parent container natively (`width: \"100%\"`) and let the theme layout control sizing.\n",ni=`# Site Package Manager (SPM) - Theme Manifest Schema

The \`manifest.json\` file is the compiled output configuration generated from Veneer Spec (\`.vnr\`) sources. It is evaluated at runtime by the SPM content script to reconstruct legacy HTML elements or layout sections with React components.

---

## Root Fields

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| \`targetUrl\` | \`string\` | Yes | Matching URL glob pattern indicating which domains this theme should activate on (e.g. \`*://example.com/*\`). |
| \`version\` | \`string\` | No | Version of the theme package (e.g. \`"1.0.0"\`). |
| \`minEngineVersion\` | \`string\` | No | Minimum compatible version of the SPM extension engine (e.g. \`"1.0.0"\`). |
| \`theme\` | \`object\` | Yes | Defines global styling variables, custom styles overrides, and descriptive metadata. |
| \`components\` | \`array\` | No | List of selector overrides that target, hide, or replace individual legacy elements. |
| \`reconstructs\` | \`array\` | No | List of page-level section replacements that mount React layout components inside isolated Shadow DOM hosts. |

---

## 1. Theme Configuration

Defines styling variables (custom property mappings) and custom CSS rules injected globally.

\`\`\`json
"theme": {
  "label": "Obsidian",
  "author": "spm-ecosystem",
  "description": "Auto-versioning Obsidian dark theme on pipeline",
  "cssVariables": {
    "--spm-bg-primary": "#000000",
    "--spm-bg-secondary": "#111111",
    "--spm-bg-tertiary": "#222222",
    "--spm-text-primary": "#ffffff",
    "--spm-text-muted": "#a1a1aa",
    "--spm-accent": "#7c6af5",
    "--spm-accent-fg": "#ffffff",
    "--spm-accent-hover": "#9d8fff",
    "--spm-border": "#333333",
    "--spm-radius": "10px"
  },
  "customStyles": "#notice, #long-notice { display: none !important; }",
  "noticeSelector": "#has-mail-notice"
}
\`\`\`

### Properties
*   \`label\` (string): Human-readable name of the theme shown in the extension popup.
*   \`author\` (string): Developer signature.
*   \`description\` (string): Short explanation of theme styling goals.
*   \`cssVariables\` (object): Map of custom CSS property names to valid CSS color, spacing, or sizing values. Components should exclusively rely on these variables.
*   \`customStyles\` (string): Raw CSS stylesheet injected globally into the main document and Shadow DOM roots to hide ads, banners, or apply global page layout overrides. Automatically bundled from any \`.css\` files (e.g. \`content.css\`) in the theme project directory during compilation (\`spm compile\`) or dev server watching (\`spm dev\`).
*   \`noticeSelector\` (string): Optional selector targeting notices that should trigger extension banner overlays.

---

## 2. Components Configuration

Replaces or hides targeted elements individually.

\`\`\`json
"components": [
  {
    "name": "UiSearchBar",
    "selector": ".sidebar form",
    "action": "replace",
    "props": {
      "placeholder": "Search…",
      "submitUrl": "https://example.com/search",
      "queryParamName": "q"
    },
    "propsMap": {
      "defaultValue": "input[name='q'] | attr:value"
    }
  },
  {
    "name": "UiNavHeader",
    "selector": "#subnavbar",
    "action": "hide"
  }
]
\`\`\`

### Properties
*   \`name\` (string, required): React component name matching an entry in the React registry.
*   \`selector\` (string, required): Standard CSS selector targeting the legacy DOM element.
*   \`action\` (string, required): Action to perform. Supported:
    *   \`"replace"\`: Hides the element and mounts the React component in its place.
    *   \`"hide"\`: Sets \`display: none !important\` on the selector to remove it visually.
*   \`props\` (object): Static prop values passed directly to the React component.
*   \`propsMap\` (object): Dynamic prop mappings extracted live from the DOM at injection time (see *Prop Mapping Rules* below).

---

## 3. Reconstructs Configuration

Reconstructs entire sections or full page contents with isolated React structures in the Shadow DOM.

\`\`\`json
"reconstructs": [
  {
    "containerSelector": "#gallery",
    "layoutComponent": "UiGridPage",
    "urlPattern": "page=gallery",
    "props": {
      "pageTitle": "Gallery",
      "mobileColumns": 2,
      "mobileGap": "8px"
    },
    "propsMap": {
      "searchDefaultValue": ".sidebar form input[name='q'] | attr:value"
    },
    "preserve": {
      "sidebarSlot": ".sidebar"
    },
    "children": [
      {
        "name": "items",
        "selector": "#gallery .item",
        "propsMap": {
          "id": "self | attr:id",
          "imageUrl": "img | attr:src",
          "linkUrl": "a | attr:href",
          "title": "img | attr:title"
        }
      }
    ]
  }
]
\`\`\`

### Properties
*   \`containerSelector\` (string, required): CSS selector of the container element that will be replaced. The element will have its children hidden, and a Shadow DOM root host appended.
*   \`layoutComponent\` (string, required): Name of the React component that acts as the container layout.
*   \`urlPattern\` (string): JavaScript regular expression matched against the current page URL path/query (e.g. \`page=gallery\`). The reconstruct will only load if the pattern matches.
*   \`props\` (object): Static prop values passed directly to the layout component.
*   \`propsMap\` (object): Dynamic properties extracted from the container element's DOM before it is hidden.
*   \`preserve\` (object): Map of slot names to selectors. Targeted nodes are removed from the legacy page before hiding the container and reparented inside the Shadow DOM (into elements having \`id="{slotName}-container"\`).
*   \`children\` (array): Array of nested data extractions. Each child queries matching elements and generates an array of objects passed as a prop array to the layout component.
    *   \`name\`: Prop array name on the React component.
    *   \`selector\`: CSS selector targeting matching children.
    *   \`scope\`: (Optional) \`"document"\` to run queries from the root document instead of relative to the container element.
    *   \`propsMap\`: Data extraction rules for child item fields.
    *   \`children\`: Recursive nested child array definitions for complex layouts (e.g. threads containing comments).

---

## 4. Prop Mapping Rules

Dynamic extractions extract content from matching DOM nodes and bind it to props. Extractions follow the format:

$$\\text{Selector} \\quad | \\quad \\text{Operation}$$

| Rule Syntax | Targeted Element | Result |
| :--- | :--- | :--- |
| \`<css-selector> \\| text\` | First matching descendant | Text content (\`textContent\`) of the node. |
| \`<css-selector> \\| html\` | First matching descendant | Inner HTML (\`innerHTML\`) of the node. |
| \`<css-selector> \\| attr:<name>\` | First matching descendant | Value of the specified attribute (e.g. \`attr:src\` for images). |
| \`self \\| text\` | Targeted element itself | Text content of the targeted element itself. |
| \`self \\| html\` | Targeted element itself | Inner HTML of the targeted element itself. |
| \`self \\| attr:<name>\` | Targeted element itself | Value of the specified attribute of the targeted element itself. |
| \`self \\| hrefOrOnclick\` | Targeted element itself | Resolves \`href\` value, or extracts navigation destination from an inline \`onclick\` handler if \`href\` is empty. |
| \`<css-selector> \\| nextSiblingText\` | Matching descendant | Extracts text content from the sibling node immediately following the matched element. |

---

## 5. Metadata Merging

During compilation via \`spm compile\`, the CLI automatically parses any preexisting target \`manifest.json\` file. It performs a **deep merge** on the \`"theme"\` block:
- Global properties like \`author\`, \`description\`, \`targetUrl\`, and \`minEngineVersion\` present in the destination JSON file are **preserved** and merged back into the compilation output.
- This ensures GitOps metadata is maintained across compilations without manual restoration.
`,ri=`# Veneer Spec — Extended Language Reference & Example Cookbook

> **Scope of this document**: This is an expanded, example-driven companion to the official
> [\`veneer_spec.md\`](https://github.com/spm-ecosystem/spm-cli/blob/main/docs/veneer_spec.md) and
> [\`manifest_schema.md\`](https://github.com/spm-ecosystem/spm-cli/blob/main/docs/manifest_schema.md)
> references shipped in \`spm-cli\`. It keeps every rule from the official docs intact and adds a
> much larger set of worked examples, edge cases, anti-patterns, and full real-world theme
> walkthroughs for the Veneer Spec (\`.vnr\`) DSL compiled by \`spm-cli\`.
>
> **Important note on scope**: This file documents the **Veneer Spec language** itself (lexing,
> parsing, class resolution, emission — everything \`spm-cli\` compiles) in depth, since that is
> what is described in the \`spm-cli\` repository docs. It does **not** invent prop schemas for
> individual React components (\`UiGridPage\`, \`UiNavHeader\`, \`UiSearchBar\`, etc.) beyond what is
> already demonstrated in \`spm-cli\`'s own docs — the authoritative prop lists for those live in
> \`spm-components/docs\`, which could not be crawled directly (GitHub blocks automated access to
> that repository's file-tree view, and the docs aren't otherwise indexed). Section 12
> ("Known Components — Observed Contract") lists everything that can be safely inferred from the
> \`spm-cli\` examples, marked accordingly. If you paste the contents of \`spm-components/docs\`
> (or raw file links) into the conversation, this document can be extended with the exact,
> per-component prop tables and hundreds of additional binding examples.

---

## Table of Contents

1. [Mental Model](#1-mental-model)
2. [Lexer & Token Reference](#2-lexer--token-reference)
3. [Extraction Syntax Deep Dive](#3-extraction-syntax-deep-dive)
4. [\`theme\` — Exhaustive Examples](#4-theme--exhaustive-examples)
5. [\`class\` / \`extends\` — Exhaustive Examples](#5-class--extends--exhaustive-examples)
6. [\`selector\` — Exhaustive Examples](#6-selector--exhaustive-examples)
7. [\`reconstruct\` — Exhaustive Examples](#7-reconstruct--exhaustive-examples)
8. [\`child\` — Exhaustive Examples](#8-child--exhaustive-examples)
9. [\`bind\` — Exhaustive Examples](#9-bind--exhaustive-examples)
10. [\`preserve\` — Exhaustive Examples](#10-preserve--exhaustive-examples)
11. [\`scope\` — Exhaustive Examples](#11-scope--exhaustive-examples)
12. [Known Components — Observed Contract](#12-known-components--observed-contract)
13. [Raw String Literals — Pattern Library](#13-raw-string-literals--pattern-library)
14. [Implicit JSON Type Deserialization — Exhaustive Cases](#14-implicit-json-type-deserialization--exhaustive-cases)
15. [Workspace / Multi-file Compilation Examples](#15-workspace--multi-file-compilation-examples)
16. [Full Worked Themes](#16-full-worked-themes)
17. [Common Errors, Anti-Patterns & Fixes](#17-common-errors-anti-patterns--fixes)
18. [CLI Recipes](#18-cli-recipes)
19. [Cheat Sheet](#19-cheat-sheet)

---

## 1. Mental Model

Veneer Spec never touches the DOM itself — it is a **compiler** that turns \`.vnr\` source into a
\`manifest.json\` file. That manifest is what the SPM browser-extension runtime reads to:

1. Find legacy elements (\`selector\`, \`reconstruct\`).
2. Decide what to do with them (\`hide\` vs \`replace\`).
3. Mount a React component in their place, inside an isolated Shadow DOM host.
4. Populate that component's props — statically (plain keys) or dynamically (\`bind\`, scraped at
   injection time from the *original* legacy DOM before it's hidden).

Everything else in the language (\`class\`/\`extends\`, \`scope\`, raw strings, implicit JSON typing)
exists purely to make steps 1–4 easier to author and validate.

\`\`\`
 .vnr source files  ──lexer──▶ tokens ──parser──▶ AST ──resolver──▶ resolved AST ──emitter──▶ manifest.json
                                                (class inheritance,
                                                 circular-dep checks)
\`\`\`

---

## 2. Lexer & Token Reference

| Token category   | Examples                                              | Notes |
|-------------------|-------------------------------------------------------|-------|
| Keywords          | \`theme\`, \`class\`, \`extends\`, \`selector\`, \`reconstruct\`, \`child\`, \`bind\`, \`preserve\`, \`scope\`, \`variables\`, \`customStyles\` | Case-sensitive, lowercase only. |
| Identifiers       | \`PrimaryLink\`, \`UiGridPage\`, \`items\`, \`pageLinks\`     | Used for class names, component names, child/prop names. |
| Arrow operator    | \`->\`                                                  | Links a \`selector\`/\`reconstruct\` target to a component name. |
| String literal    | \`"Search…"\`, \`"#gallery"\`                              | Standard double-quoted string; supports normal escaping (\`\\"\`, \`\\\\\`). |
| Raw string literal| \`R"(...)"\`, \`\` R"delim(...)delim" \`\`                    | See [Section 13](#13-raw-string-literals--pattern-library). |
| Property line     | \`key: value;\`                                         | Every property assignment must terminate with \`;\`. |
| Block braces      | \`{ }\`                                                 | Delimit \`theme\`, \`class\`, \`selector\`, \`reconstruct\`, \`child\`, \`preserve\`, \`variables\` bodies. |
| Comments          | \`// line comment\`, \`/* block comment */\`               | Stripped during lexing; never appear in the emitted manifest. |

### 2.1 Comment examples

\`\`\`vnr
// This whole file configures the primary navigation
selector "#navbar" -> UiNavHeader {
    action: replace; // swap the legacy header entirely
    /*
      className below must match a CSS class already
      shipped by the UiNavHeader stylesheet bundle
    */
    className: "site-navigation-header";
}
\`\`\`

### 2.2 Whitespace & formatting

Veneer Spec is whitespace-insensitive between tokens. The following two snippets compile to an
identical AST:

\`\`\`vnr
selector "#sidebar" { action: hide; }
\`\`\`

\`\`\`vnr
selector
    "#sidebar"
{
    action
        :
        hide
    ;
}
\`\`\`

Idiomatic formatting (used throughout this document) is: one property per line, 4-space indent,
opening brace on the same line as the block keyword.

---

## 3. Extraction Syntax Deep Dive

The general shape of any dynamic extraction is:

\`\`\`
"<selector-or-self> | <base-extractor> [ | <pipe> ]*"
\`\`\`

### 3.1 Base extractor examples (one per extractor)

\`\`\`vnr
bind title:        "h2.item-title | text";
bind descriptionHtml: ".item-body | html";
bind thumbnail:     "img.cover | attr:src";
bind altText:       "img.cover | attr:alt";
bind ctaUrl:        "a.buy-now | hrefOrOnclick";
bind priceLabel:    ".price | nextSiblingText";
bind formFields:    "form#checkout | hiddenInputs";
bind ownSelector:   "self | selector";
\`\`\`

### 3.2 \`self\` vs explicit selector

\`self\` always refers to the element that was already matched by the enclosing \`selector\`,
\`reconstruct\`, or \`child\` block — it never re-queries the DOM.

\`\`\`vnr
class ExternalLink {
    // "self" = the anchor tag matched by the child's own selector
    bind label: "self | text";
    bind url:   "self | attr:href";
}

class CardWithBadge {
    // relative selectors query *inside* the matched card element
    bind title: "h3.card-title | text";
    bind badge: "span.badge | text";
    // "self" still refers to the card element itself, e.g. for its own id
    bind cardId: "self | attr:data-id";
}
\`\`\`

### 3.3 Chaining multiple pipes

\`\`\`vnr
bind tagList:      "self | attr:data-tags | split";
bind tagListCsv:    "self | attr:data-tags | split:,";
bind price:         ".price-tag | text | cleanNumber";
bind stock:         ".stock-count | text | number";
bind categoryPath:  ".breadcrumb | text | split:›";
\`\`\`

### 3.4 \`split\` examples

\`\`\`vnr
// "featured bestseller limited" -> ["featured","bestseller","limited"]
bind badges: "self | attr:data-flags | split";

// "Electronics, Computers, Laptops" -> ["Electronics","Computers","Laptops"]
bind categories: ".breadcrumbs | text | split:,";

// "red|blue|green" -> ["red","blue","green"]
bind swatches: ".variant-colors | attr:data-colors | split:|";

// "2024-06-01/2024-06-15" -> ["2024-06-01","2024-06-15"]
bind dateRange: ".availability | attr:data-range | split:/";
\`\`\`

### 3.5 \`number\` vs \`cleanNumber\`

\`\`\`vnr
// "42" -> 42 (native JSON number)
bind reviewCount: ".review-count | text | number";

// "$ 1,200.50" -> 1200.5
bind price: ".price | text | cleanNumber";

// "R$ 89,90" -> 89.9  (Brazilian Real formatting also stripped)
bind priceBr: ".preco | text | cleanNumber";

// "€349" -> 349
bind priceEu: ".price-eur | text | cleanNumber";

// "1 234,56 kr" -> depends on compiler locale rules; prefer cleanNumber only
// for currency-adjacent values, use "number" for plain integers/decimals
bind quantity: ".qty-input | attr:value | number";
\`\`\`

**Rule of thumb**: use \`number\` for already-clean numeric strings (quantities, IDs, ratings), and
\`cleanNumber\` whenever a currency symbol, thousands separator, or surrounding whitespace might be
present.

### 3.6 \`hrefOrOnclick\` examples

Legacy sites frequently wire navigation through \`onclick="location.href='...'"\` instead of a real
\`href\`. \`hrefOrOnclick\` normalizes both cases into a single destination string.

\`\`\`vnr
// <a href="/item/42">View</a>
bind detailUrl: "a.view-link | hrefOrOnclick"; // -> "/item/42"

// <a onclick="window.location='/item/42'">View</a>
bind detailUrl: "a.view-link | hrefOrOnclick"; // -> "/item/42"

// <button onclick="document.location.href='/cart/add?id=7'">Add</button>
bind addToCartUrl: "button.add | hrefOrOnclick";
\`\`\`

### 3.7 \`hiddenInputs\` examples

Useful for preserving CSRF tokens or hidden form state when a form is being replaced by a React
component but still needs to submit compatible payloads server-side.

\`\`\`vnr
selector "#login-form" -> UiLoginForm {
    action: replace;
    bind csrfFields: "self | hiddenInputs";
    // -> '[{"name":"csrf_token","value":"9f2a..."},{"name":"redirect","value":"/home"}]'
}
\`\`\`

### 3.8 \`selector\` (self-referential) examples

Occasionally a component needs to know the *unique selector string* of the element it was mounted
on, e.g. for analytics or for a "scroll back to here" feature.

\`\`\`vnr
child items {
    selector: "#results .result-row";
    bind anchorSelector: "self | selector";
}
\`\`\`

---

## 4. \`theme\` — Exhaustive Examples

### 4.1 Minimal theme

\`\`\`vnr
theme "Minimal" {
    variables {
        --spm-accent: "#2563eb";
    }
}
\`\`\`

### 4.2 Full design-token palette

\`\`\`vnr
theme "Slate" {
    variables {
        --spm-bg-primary: "#0b0f14";
        --spm-bg-secondary: "#121820";
        --spm-bg-tertiary: "#1b232d";
        --spm-text-primary: "#f5f7fa";
        --spm-text-muted: "#8b98a5";
        --spm-accent: "#38bdf8";
        --spm-accent-fg: "#03131c";
        --spm-accent-hover: "#7dd3fc";
        --spm-border: "#233040";
        --spm-radius: "8px";
        --spm-radius-lg: "16px";
        --spm-shadow-sm: "0 1px 2px rgba(0,0,0,0.4)";
        --spm-font-sans: "'Inter', system-ui, sans-serif";
        --spm-font-mono: "'JetBrains Mono', monospace";
        --spm-spacing-1: "4px";
        --spm-spacing-2: "8px";
        --spm-spacing-3: "16px";
        --spm-spacing-4: "24px";
    }
    customStyles {
        "#legacy-ad-slot, #newsletter-modal, .cookie-banner { display: none !important; }"
    }
}
\`\`\`

### 4.3 Theme with only global CSS overrides (no custom variables)

\`\`\`vnr
theme "Bare" {
    variables {}
    customStyles {
        R"(
        body { overflow-x: hidden !important; }
        #legacy-footer-ads { display: none !important; }
        .popup-overlay { display: none !important; }
        )"
    }
}
\`\`\`

### 4.4 Theme hiding multiple ad/tracking regions at once

\`\`\`vnr
theme "AdFree" {
    variables {
        --spm-accent: "#16a34a";
    }
    customStyles {
        R"(
        #top-leaderboard-ad,
        #sidebar-ad-300x250,
        #interstitial-ad,
        .sponsored-listing,
        [id^="google_ads_"] { display: none !important; }
        )"
    }
}
\`\`\`

### 4.5 Light/dark-ready token set (values chosen so the same class names work under either scheme)

\`\`\`vnr
theme "AdaptiveContrast" {
    variables {
        --spm-bg-primary: "#ffffff";
        --spm-bg-secondary: "#f4f5f7";
        --spm-text-primary: "#111318";
        --spm-text-muted: "#5b6472";
        --spm-accent: "#7c3aed";
        --spm-accent-fg: "#ffffff";
        --spm-border: "#e2e4e9";
        --spm-radius: "12px";
    }
    customStyles {
        ""
    }
}
\`\`\`

> **Note**: exactly one \`theme\` block is allowed per compiled project (per the base
> \`spm-cli\` docs). Declaring a second \`theme\` block anywhere in the workspace — even in a
> different \`.vnr\` file — is a compile-time error.

---

## 5. \`class\` / \`extends\` — Exhaustive Examples

### 5.1 Base link class + two specializations

\`\`\`vnr
class BaseLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}

class DocumentScopedLink extends BaseLink {
    scope: "document";
}

class ExternalLink extends BaseLink {
    bind isExternal: "self | attr:data-external | number";
}
\`\`\`

### 5.2 Two-level inheritance chain

\`\`\`vnr
class Interactive {
    bind isDisabled: "self | attr:disabled";
}

class Clickable extends Interactive {
    bind url: "self | attr:href";
}

class TrackedClickable extends Clickable {
    bind trackingId: "self | attr:data-track-id";
}
\`\`\`

\`TrackedClickable\` resolves, at compile time, to the union of all three classes' bindings:
\`isDisabled\`, \`url\`, \`trackingId\`.

### 5.3 Overriding a parent binding

\`\`\`vnr
class GenericCard {
    bind title: ".title | text";
    bind image: "img | attr:src";
}

class LazyLoadedCard extends GenericCard {
    // overrides GenericCard's "image" binding to read the lazy-load attribute instead
    bind image: "img | attr:data-src";
}
\`\`\`

Compiled \`LazyLoadedCard\` usage keeps \`title\` from the parent and uses the child's \`image\` rule.

### 5.4 Class used purely for scope, no bindings of its own

\`\`\`vnr
class GlobalPaginationLink {
    scope: "document";
    bind label: "self | text";
    bind url: "self | attr:href";
    bind isCurrent: "self | attr:aria-current";
}
\`\`\`

### 5.5 Sibling classes referencing each other's shape (not inheritance, just consistent fields)

\`\`\`vnr
class CommentAuthor {
    bind name: ".author-name | text";
    bind avatarUrl: ".author-avatar img | attr:src";
    bind profileUrl: ".author-name a | attr:href";
}

class ForumPostAuthor {
    bind name: ".poster-name | text";
    bind avatarUrl: ".poster-avatar img | attr:src";
    bind profileUrl: ".poster-name a | attr:href";
    bind postCount: ".poster-stats .posts | text | number";
    bind joinDate: ".poster-stats .joined | text";
}
\`\`\`

### 5.6 Real usage — extending a class inside a \`child\` block

\`\`\`vnr
reconstruct "#thread" -> UiThreadPage {
    child replies extends CommentAuthor {
        selector: ".reply";
        bind body: ".reply-body | html";
        bind postedAt: ".reply-meta time | attr:datetime";
    }
}
\`\`\`

Note that \`child\` can both extend a class **and** declare its own additional \`bind\` lines — the
final \`propsMap\` is the merge of inherited + locally declared bindings, with local bindings
winning on conflicts (same override rule as class-to-class inheritance).

### 5.7 Circular dependency (compile error — shown for reference)

\`\`\`vnr
// ❌ This will fail to compile: "circular inheritance detected: A -> B -> A"
class A extends B {
    bind x: "self | text";
}

class B extends A {
    bind y: "self | text";
}
\`\`\`

### 5.8 Referencing an undeclared class in the same file (compile error)

\`\`\`vnr
// ❌ Fails unless \`MissingBase\` is declared somewhere in this file or a sibling .vnr
// file in the same directory (see Sibling Class Autoloading, §15.3)
class Derived extends MissingBase {
    bind z: "self | text";
}
\`\`\`

---

## 6. \`selector\` — Exhaustive Examples

### 6.1 Simple hide

\`\`\`vnr
selector ".newsletter-signup-banner" {
    action: hide;
}
\`\`\`

### 6.2 Hide with a comma-separated multi-target selector

\`\`\`vnr
selector "#top-banner, .promo-strip, .site-notice" {
    action: hide;
}
\`\`\`

### 6.3 Replace with only static props

\`\`\`vnr
selector ".search-box" -> UiSearchBar {
    action: replace;
    placeholder: "Search the catalog…";
    submitUrl: "https://example.com/search";
    queryParamName: "q";
}
\`\`\`

### 6.4 Replace with a mix of static props and \`bind\`

\`\`\`vnr
selector "#account-widget" -> UiAccountMenu {
    action: replace;
    loginUrl: "https://example.com/login";
    logoutUrl: "https://example.com/logout";
    bind isLoggedIn: "self | attr:data-authenticated | number";
    bind username: ".account-name | text";
    bind avatarUrl: ".account-avatar img | attr:src";
}
\`\`\`

### 6.5 Multiple independent \`selector\` blocks in one file

\`\`\`vnr
selector "#top-nav" -> UiNavHeader {
    action: replace;
    logoHref: "https://example.com/";
}

selector "#footer-links" -> UiFooter {
    action: replace;
    bind columns: "self | attr:data-footer-json";
}

selector ".legacy-breadcrumbs" {
    action: hide;
}
\`\`\`

### 6.6 Component with a large static JSON array prop, via raw strings

\`\`\`vnr
selector "#quick-nav" -> UiQuickNav {
    action: replace;
    items: R"([
      { "icon": "home", "label": "Home", "url": "/" },
      { "icon": "search", "label": "Browse", "url": "/browse" },
      { "icon": "user", "label": "Account", "url": "/account" },
      { "icon": "cart", "label": "Cart", "url": "/cart" }
    ])";
}
\`\`\`

### 6.7 Search bar with regex-validated submit target (illustrative)

\`\`\`vnr
selector "#hero-search form" -> UiSearchBar {
    action: replace;
    placeholder: "Try 'wireless headphones'";
    submitUrl: "https://example.com/s";
    queryParamName: "query";
    bind defaultValue: "input[name='query'] | attr:value";
}
\`\`\`

### 6.8 \`selector\` inside a nested subdirectory file (\`layout/headers/top_nav.vnr\`)

\`\`\`vnr
// layout/headers/top_nav.vnr
selector "header.site-header" -> UiNavHeader {
    action: replace;
    className: "modernized-header";
    bind logoUrl: ".brand img | attr:src";

    child navLinks extends BaseLink {
        selector: "nav.primary a";
    }
}
\`\`\`

---

## 7. \`reconstruct\` — Exhaustive Examples

### 7.1 Minimal reconstruct (no constraints)

\`\`\`vnr
reconstruct "#app-root" -> UiHomePage {
    pageTitle: "Home";
}
\`\`\`

### 7.2 Reconstruct constrained by \`urlPattern\` (plain substring)

\`\`\`vnr
reconstruct "#listings" -> UiGridPage {
    urlPattern: "type=listing";
    pageTitle: "All Listings";
}
\`\`\`

### 7.3 Reconstruct constrained by \`urlPattern\` (regex via raw string)

\`\`\`vnr
reconstruct "#home" -> UiHeroLanding {
    urlPattern: R"(^https?:\\/\\/example\\.com\\/?(?:\\?.*)?$)";
    tagline: "Find anything. Instantly.";
}
\`\`\`

### 7.4 Reconstruct with \`mediaQuery\` gating (mobile-only mount)

\`\`\`vnr
reconstruct "#mobile-nav-drawer" -> UiMobileDrawer {
    mediaQuery: "(max-width: 768px)";
    pageTitle: "Menu";
}
\`\`\`

### 7.5 Reconstruct with static + dynamic props + one \`child\`

\`\`\`vnr
reconstruct "#directory" -> UiDirectoryPage {
    urlPattern: "page=directory";
    pageTitle: "Business Directory";
    resultsPerPage: 24;
    showMap: true;

    bind searchDefaultValue: ".directory-search input[name='q'] | attr:value";

    child entries {
        selector: ".directory-entry";
        bind name: ".entry-name | text";
        bind category: ".entry-category | text";
        bind phone: ".entry-phone | text";
        bind url: ".entry-name a | attr:href";
    }
}
\`\`\`

### 7.6 Reconstruct with multiple \`child\` blocks

\`\`\`vnr
reconstruct "#forum-index" -> UiForumIndexPage {
    urlPattern: "board=index";
    pageTitle: "Forum";

    child categories {
        selector: ".forum-category";
        bind name: ".category-title | text";
        bind description: ".category-desc | text";
        bind topicCount: ".category-stats .topics | text | number";
        bind postCount: ".category-stats .posts | text | number";
    }

    child announcements {
        scope: "document";
        selector: "#sitewide-announcements li";
        bind title: "a | text";
        bind url: "a | attr:href";
    }
}
\`\`\`

### 7.7 Reconstruct + \`preserve\` + \`child\` together (full combination)

\`\`\`vnr
reconstruct "#item-detail" -> UiItemDetailsPage {
    urlPattern: R"(\\/item\\/\\d+)";
    pageTitle: "Item Details";

    bind title: "h1.item-title | text";
    bind description: ".item-description | html";
    bind price: ".item-price | text | cleanNumber";
    bind imageUrl: ".item-gallery img.main | attr:src";

    preserve {
        commentsSlot: "#legacy-comments-widget";
        purchaseFormSlot: "#legacy-buy-box form";
    }

    child gallery {
        selector: ".item-gallery .thumb";
        bind imageUrl: "img | attr:src";
        bind altText: "img | attr:alt";
    }

    child specifications {
        selector: ".spec-table tr";
        bind label: "td:first-child | text";
        bind value: "td:last-child | text";
    }
}
\`\`\`

### 7.8 Reconstruct with nested (recursive) children — comment threads

\`\`\`vnr
reconstruct "#thread-view" -> UiThreadPage {
    urlPattern: "thread=";
    pageTitle: "Discussion Thread";

    child topLevelComments extends CommentAuthor {
        selector: ".comment.depth-0";
        bind body: ".comment-body | html";
        bind commentId: "self | attr:data-comment-id";

        child replies extends CommentAuthor {
            selector: ".comment.depth-1";
            bind body: ".comment-body | html";
            bind commentId: "self | attr:data-comment-id";
        }
    }
}
\`\`\`

### 7.9 Reconstruct targeting several possible container selectors

\`\`\`vnr
reconstruct "#results-grid, .search-results-container" -> UiGridPage {
    urlPattern: "q=";
    pageTitle: "Search Results";
}
\`\`\`

### 7.10 Two reconstructs in the same file, gated by mutually-exclusive URL patterns

\`\`\`vnr
reconstruct "#catalog" -> UiGridPage {
    urlPattern: R"(\\/browse\\/?$)";
    pageTitle: "Browse Catalog";
}

reconstruct "#catalog" -> UiListPage {
    urlPattern: R"(\\/browse\\?view=list)";
    pageTitle: "Browse Catalog (List View)";
}
\`\`\`

---

## 8. \`child\` — Exhaustive Examples

### 8.1 Minimal child list

\`\`\`vnr
child items {
    selector: ".item-card";
    bind title: ".title | text";
}
\`\`\`

### 8.2 Child list with several bindings

\`\`\`vnr
child products {
    selector: ".product-tile";
    bind id: "self | attr:data-product-id";
    bind title: ".product-name | text";
    bind price: ".product-price | text | cleanNumber";
    bind imageUrl: "img.product-image | attr:src";
    bind inStock: ".stock-badge | attr:data-in-stock | number";
    bind url: "a.product-link | attr:href";
}
\`\`\`

### 8.3 Child extending a class, with local overrides

\`\`\`vnr
child footerLinks extends BaseLink {
    selector: "#footer nav a";
    // adds a field not present on BaseLink
    bind section: "self | attr:data-section";
}
\`\`\`

### 8.4 Child with \`scope: "document"\` for elements outside the reconstruct container

\`\`\`vnr
child paginationLinks extends BaseLink {
    scope: "document";
    selector: "#pager .page-link";
}
\`\`\`

### 8.5 Nested (recursive) child — category tree, 3 levels deep

\`\`\`vnr
child rootCategories {
    selector: ".category-tree > .category-node";
    bind name: "> .category-label | text";
    bind slug: "self | attr:data-slug";

    child subCategories {
        selector: "> .category-children > .category-node";
        bind name: "> .category-label | text";
        bind slug: "self | attr:data-slug";

        child leafCategories {
            selector: "> .category-children > .category-node";
            bind name: "> .category-label | text";
            bind slug: "self | attr:data-slug";
        }
    }
}
\`\`\`

### 8.6 Multiple sibling \`child\` blocks with different purposes inside one \`reconstruct\`

\`\`\`vnr
reconstruct "#dashboard" -> UiDashboardPage {
    child metrics {
        selector: ".metric-tile";
        bind label: ".metric-label | text";
        bind value: ".metric-value | text | cleanNumber";
        bind trend: ".metric-trend | attr:data-trend";
    }

    child recentActivity {
        selector: ".activity-row";
        bind actor: ".activity-actor | text";
        bind action: ".activity-action | text";
        bind timestamp: ".activity-time | attr:datetime";
    }

    child quickLinks extends BaseLink {
        selector: ".quick-link";
    }
}
\`\`\`

### 8.7 Child list scraping a data table (rows -> objects)

\`\`\`vnr
child tableRows {
    selector: "table#report-table tbody tr";
    bind rank: "td:nth-child(1) | text | number";
    bind name: "td:nth-child(2) | text";
    bind score: "td:nth-child(3) | text | cleanNumber";
    bind change: "td:nth-child(4) | text";
}
\`\`\`

### 8.8 Child list combining a \`bind\` and a nested \`child\` (item + its tags)

\`\`\`vnr
child articles {
    selector: ".article-summary";
    bind headline: "h2 | text";
    bind excerpt: ".excerpt | text";
    bind publishedAt: "time | attr:datetime";
    bind url: "h2 a | attr:href";

    child tags {
        selector: ".article-tags a";
        bind label: "self | text";
        bind url: "self | attr:href";
    }
}
\`\`\`

---

## 9. \`bind\` — Exhaustive Examples

### 9.1 Text content

\`\`\`vnr
bind title: "h1 | text";
bind subtitle: "h2.subtitle | text";
bind footerNote: "#legal-disclaimer | text";
\`\`\`

### 9.2 HTML content (rich text preserved)

\`\`\`vnr
bind bodyHtml: ".post-content | html";
bind termsHtml: "#terms-block | html";
\`\`\`

### 9.3 Attributes

\`\`\`vnr
bind imageUrl: "img.hero | attr:src";
bind videoUrl: "video source | attr:src";
bind ariaLabel: "button.close | attr:aria-label";
bind dataId: "self | attr:data-id";
bind lang: "html | attr:lang";
\`\`\`

### 9.4 Combined pipes for cleaned numeric data

\`\`\`vnr
bind rating: ".star-rating | attr:data-rating | number";
bind reviewCount: ".review-count | text | cleanNumber";
bind discountPercent: ".discount-badge | text | cleanNumber";
\`\`\`

### 9.5 Combined pipes for arrays

\`\`\`vnr
bind sizes: ".size-options | attr:data-sizes | split:,";
bind colorSwatches: ".color-options | attr:data-colors | split:|";
bind keywords: "meta[name='keywords'] | attr:content | split:,";
\`\`\`

### 9.6 Binding against \`self\` at every applicable level

\`\`\`vnr
selector "#promo-banner" -> UiPromoBanner {
    action: replace;
    bind headline: "self | attr:data-headline";
    bind ctaUrl: "self | hrefOrOnclick";
}

reconstruct "#landing" -> UiHeroLanding {
    bind backgroundImage: "self | attr:data-bg";
}

child items {
    selector: ".item";
    bind id: "self | attr:id";
}
\`\`\`

### 9.7 Multiple \`bind\` lines targeting the same descendant selector for different purposes

\`\`\`vnr
bind thumbnailUrl: "img.cover | attr:src";
bind thumbnailAlt: "img.cover | attr:alt";
bind thumbnailWidth: "img.cover | attr:width | number";
\`\`\`

### 9.8 \`bind\` used for form pre-fill values

\`\`\`vnr
selector "#filter-form" -> UiFilterPanel {
    action: replace;
    bind selectedCategory: "select[name='category'] | attr:value";
    bind minPrice: "input[name='min_price'] | attr:value | number";
    bind maxPrice: "input[name='max_price'] | attr:value | number";
    bind inStockOnly: "input[name='in_stock'] | attr:checked";
}
\`\`\`

---

## 10. \`preserve\` — Exhaustive Examples

### 10.1 Preserving a single legacy widget

\`\`\`vnr
reconstruct "#item-detail" -> UiItemDetailsPage {
    preserve {
        reviewsSlot: "#legacy-reviews-widget";
    }
}
\`\`\`

### 10.2 Preserving several widgets at once

\`\`\`vnr
reconstruct "#checkout" -> UiCheckoutPage {
    preserve {
        paymentFormSlot: "#legacy-payment-iframe";
        couponWidgetSlot: ".coupon-code-box";
        shippingCalculatorSlot: "#shipping-estimator";
    }
}
\`\`\`

### 10.3 Preserving a third-party embedded widget (chat, live support)

\`\`\`vnr
reconstruct "#support-center" -> UiSupportPage {
    preserve {
        liveChatSlot: "#zendesk-chat-widget";
    }
}
\`\`\`

### 10.4 Preserving a legacy comment form while reconstructing the whole thread

\`\`\`vnr
reconstruct "#thread" -> UiThreadPage {
    preserve {
        newCommentFormSlot: "#legacy-comment-form";
    }

    child comments extends CommentAuthor {
        selector: ".comment";
        bind body: ".comment-body | html";
    }
}
\`\`\`

> Per the manifest schema, the runtime looks for a host element with
> \`id="{slotName}-container"\` inside the React layout to reparent the preserved node into —
> layout components must declare matching containers for every slot name used in \`preserve\`.

---

## 11. \`scope\` — Exhaustive Examples

### 11.1 Default (implicit) container scope — no \`scope\` key needed

\`\`\`vnr
reconstruct "#gallery" -> UiGridPage {
    child items {
        // implicitly scoped to descendants of "#gallery"
        selector: ".item-card";
    }
}
\`\`\`

### 11.2 Explicit \`document\` scope for elements physically outside the container

\`\`\`vnr
reconstruct "#gallery" -> UiGridPage {
    child pagination extends BaseLink {
        scope: "document";
        selector: "#global-pager a";
    }
}
\`\`\`

### 11.3 Mixed scoping within the same \`reconstruct\`

\`\`\`vnr
reconstruct "#results" -> UiGridPage {
    child items {
        // scoped to "#results" (default)
        selector: ".result-card";
    }

    child filters {
        // scoped to the whole document, since filters live in the sidebar,
        // outside of #results
        scope: "document";
        selector: "#sidebar-filters .filter-option";
        bind label: "self | text";
        bind value: "self | attr:data-value";
    }
}
\`\`\`

### 11.4 \`scope\` on a class, inherited by every child that extends it

\`\`\`vnr
class GlobalNavLink {
    scope: "document";
    bind label: "self | text";
    bind url: "self | attr:href";
}

reconstruct "#page" -> UiPage {
    child topNav extends GlobalNavLink {
        selector: "#site-header nav a"; // resolved from document root, not #page
    }
}
\`\`\`

### 11.5 Why \`scope: "container"\` is never emitted

\`\`\`vnr
child items {
    scope: "container"; // explicit, but redundant — this is already the default
    selector: ".item";
}
\`\`\`

Compiled output omits the \`scope\` key entirely for this block (identical output to §11.1),
because \`"container"\` is the default and the compiler strips it to keep the manifest minimal.

---

## 12. Known Components — Observed Contract

The following components and prop names are used as illustrative examples across the official
\`spm-cli\` docs. They are documented here **only to the extent they appear in those examples** —
treat this as a partial, "as observed" reference, not an exhaustive spec. The authoritative,
complete prop tables for every component ship in \`spm-components/docs\`.

| Component | Observed static props | Observed dynamic (\`bind\`) props | Observed \`child\` usage |
|---|---|---|---|
| \`UiNavHeader\` | \`className\`, \`logoHref\`, \`primaryLinks\` (JSON array), \`secondaryLinks\` (JSON array) | \`logoUrl\`, \`siteName\` | link lists via extended classes |
| \`UiSearchBar\` | \`placeholder\`, \`submitUrl\`, \`queryParamName\` | \`defaultValue\` | — |
| \`UiGridPage\` | \`pageTitle\`, \`className\`, \`height\`, \`sidebarWidth\`, \`showSearch\`, \`searchPlaceholder\`, \`searchSubmitUrl\`, \`searchParamName\`, \`mobileColumns\`, \`mobileGap\`, \`mobilePadding\`, \`mobileShowHeader\`, \`mobileHeaderSticky\`, \`mobileShowPagination\`, \`mobileCardAspectRatio\`, \`hideSidebarOnMobile\`, \`mobileBreakpoint\`, \`tagGroups\` (JSON array) | \`searchDefaultValue\` | \`items\`, \`tags\` (extends a tag class), \`pageLinks\` (extends a link class) |
| \`UiHeroLanding\` | \`tagline\`, \`subtext\`, \`ctaLabel\`, \`ctaUrl\`, \`searchPlaceholder\`, \`searchSubmitUrl\`, \`searchParamName\` | \`logoUrl\`, \`siteName\` | \`primaryLinks\` (extends a link class) |
| \`UiItemDetailsPage\` | \`pageTitle\` (implied) | \`title\`, \`description\`, \`price\`, \`imageUrl\` (implied by \`preserve\` example) | \`preserve.sidebarSlot\`, gallery/spec children |

All numeric-looking static values (\`mobileColumns: 2\`, \`mobileBreakpoint: 720\`) are emitted as
native JSON numbers per the implicit type deserialization rules; all boolean-looking values
(\`showSearch: true\`) are emitted as native JSON booleans.

**To extend this table with the full, authoritative component catalog** (every prop each
component accepts, its type, whether it's required, and default values), share the contents of
\`spm-ecosystem/spm-components/docs\` — either pasted directly or as individual raw file URLs
(e.g. \`https://raw.githubusercontent.com/spm-ecosystem/spm-components/main/docs/UiGridPage.md\`).
Once available, this section can be rewritten into one full sub-section per component, each with
a complete prop table and dedicated \`.vnr\` examples exercising every prop.

---

## 13. Raw String Literals — Pattern Library

Raw strings (\`R"(...)"\`) exist so regexes and inline JSON never need backslash-escaping. The
delimiter defaults to nothing (\`R"(...)"\`) but can be customized (\`\` R"delim(...)delim" \`\`) if the
content itself contains the sequence \`)"\`.

### 13.1 URL pattern regexes

\`\`\`vnr
// Root/home page only, with or without trailing slash or index.html
urlPattern: R"(example\\.com\\/?(?:index\\.html)?$)";

// Any path under /blog/
urlPattern: R"(\\/blog\\/.+)";

// A specific numeric item route
urlPattern: R"(\\/item\\/\\d+\\/?$)";

// Query string contains page=gallery, in any position
urlPattern: R"([?&]page=gallery(&|$))";

// Exclude admin subpaths while matching everything else under /shop
urlPattern: R"(\\/shop\\/(?!admin).*)";

// Multiple TLDs for the same brand
urlPattern: R"(example\\.(com|co\\.uk|de)\\/)";
\`\`\`

### 13.2 Inline JSON arrays for static props

\`\`\`vnr
primaryLinks: R"([
  { "label": "Home", "url": "https://example.com/" },
  { "label": "Shop", "url": "https://example.com/shop" },
  { "label": "About", "url": "https://example.com/about" }
])";
\`\`\`

### 13.3 Inline JSON objects with nested structures

\`\`\`vnr
tagGroups: R"([
  { "title": "Categories", "typeKey": "category" },
  { "title": "Brands", "typeKey": "brand", "collapsedByDefault": true },
  { "title": "Price Range", "typeKey": "price", "renderAs": "slider" }
])";
\`\`\`

### 13.4 Table column definitions (common in dashboard/grid components)

\`\`\`vnr
columns: R"([
  { "key": "id", "header": "ID", "width": "60px" },
  { "key": "name", "header": "Name", "type": "text" },
  { "key": "createdAt", "header": "Created", "type": "date" },
  { "key": "actions", "header": "", "type": "actions", "width": "80px" }
])";
\`\`\`

### 13.5 Custom delimiter usage (content contains the default closing sequence)

\`\`\`vnr
// The content includes literal \`)"\` inside a nested string, so a custom delimiter is required
customStyles {
    R"css(
    .quote::after { content: ")"; }
    )css"
}
\`\`\`

### 13.6 Raw strings for multi-line CSS

\`\`\`vnr
customStyles {
    R"(
    #legacy-hero-banner { display: none !important; }
    body.legacy-theme { background: var(--spm-bg-primary) !important; }
    .cta-button {
        border-radius: var(--spm-radius);
        background: var(--spm-accent);
        color: var(--spm-accent-fg);
    }
    )"
}
\`\`\`

### 13.7 Regex with alternation for multi-selector matching contexts

\`\`\`vnr
// Matches "/forum/thread/123" or "/forum/t/123"
urlPattern: R"(\\/forum\\/(?:thread|t)\\/\\d+)";
\`\`\`

### 13.8 Escaping-avoidance comparison (why raw strings matter)

\`\`\`vnr
// Without raw strings — every backslash and quote must be escaped:
urlPattern: "example\\\\.com\\\\/item\\\\/\\\\d+";

// With raw strings — written exactly as a regex engine would expect:
urlPattern: R"(example\\.com\\/item\\/\\d+)";
\`\`\`

---

## 14. Implicit JSON Type Deserialization — Exhaustive Cases

The emitter attempts to parse every property value as JSON before falling back to a plain string.

| Written value | Emitted as | Type |
|---|---|---|
| \`mobileColumns: 2;\` | \`2\` | number |
| \`mobileGap: "8px";\` | \`"8px"\` | string (fails JSON number parse) |
| \`showSearch: true;\` | \`true\` | boolean |
| \`hideSidebarOnMobile: false;\` | \`false\` | boolean |
| \`mobileBreakpoint: 720;\` | \`720\` | number |
| \`tagGroups: R"([{"title":"Tags"}])";\` | \`[{"title":"Tags"}]\` | array |
| \`metadata: R"({"source":"legacy"})";\` | \`{"source":"legacy"}\` | object |
| \`pageTitle: "Gallery";\` | \`"Gallery"\` | string |
| \`discountRate: "0.15";\` | \`0.15\` | number (valid JSON number literal) |
| \`phoneNumber: "5551234567";\` | \`5551234567\` | **number** — caution, see 14.1 |
| \`zipCode: "02139";\` | \`"02139"\` | string — leading zero makes it invalid JSON number, stays a string |
| \`isFeatured: "true";\` | \`true\` | boolean (quoted \`"true"\` still parses as JSON boolean) |
| \`emptyList: "[]";\` | \`[]\` | array |
| \`nullableField: "null";\` | \`null\` | null |

### 14.1 Gotcha — numeric-looking IDs silently becoming numbers

\`\`\`vnr
// DANGER: if this "phone" string is a pure digit sequence with no leading zero,
// it will be coerced to a JSON number, which can lose formatting significance
// (e.g. leading zeros, or values too large for a JS float to represent exactly).
bind accountNumber: "self | attr:data-account"; // e.g. "10023491"  -> emitted as 10023491
\`\`\`

**Mitigation**: if a value must always remain a string (phone numbers, account numbers, postal
codes with leading zeros), keep at least one non-numeric character, prefix with a stable marker,
or rely on the fact that leading zeros already force string emission:

\`\`\`vnr
// Leading zero forces string output naturally
bind zip: ".address .zip | text"; // "02139" stays a string

// For all-digit values with no leading zero, consider whether numeric emission
// is actually acceptable for the target prop's expected type before relying on it.
\`\`\`

### 14.2 Booleans from \`attr:checked\` / \`attr:disabled\`

\`\`\`vnr
// <input type="checkbox" checked> -> attr:checked returns "checked" (a string, not boolean!)
// This does NOT auto-coerce to \`true\` unless you validate with your own logic downstream.
bind subscribed: "input[name='newsletter'] | attr:checked";
\`\`\`

### 14.3 Arrays and objects only coerce from **raw strings**, not from unescaped quoted strings

\`\`\`vnr
// ❌ Will NOT parse as JSON — the escaped quotes make this a plain string containing braces
badExample: "{\\"a\\": 1}";

// ✅ Correct approach — use a raw string so the JSON body is unescaped
goodExample: R"({"a": 1})";
\`\`\`

---

## 15. Workspace / Multi-file Compilation Examples

### 15.1 Recommended nested package layout

\`\`\`
theme-project/
├── core/
│   └── classes.vnr          # shared class blueprints (BaseLink, CardBase, etc.)
├── layout/
│   ├── headers/
│   │   └── top_nav.vnr
│   └── footers/
│       └── site_footer.vnr
├── pages/
│   ├── home/
│   │   └── landing.vnr
│   ├── gallery/
│   │   └── grid_layout.vnr
│   └── item/
│       └── details.vnr
├── theme.vnr                 # single global theme block
└── manifest.json              # compiled output target (also merge source)
\`\`\`

Compile the whole tree in one pass:

\`\`\`bash
./spm compile theme-project/ -o theme-project/manifest.json
\`\`\`

### 15.2 File naming is arbitrary — this is equally valid

\`\`\`
theme-project/
├── a.vnr
├── b.vnr
├── zzz_misc_overrides.vnr
└── whatever_i_want.vnr
\`\`\`

The compiler concatenates and globally resolves every \`.vnr\` file it finds recursively,
regardless of name.

### 15.3 Sibling Class Autoloading — linter mode example

\`\`\`bash
# Compiling just pages/gallery/grid_layout.vnr in isolation (e.g. from an editor linter)
./spm compile theme-project/pages/gallery/grid_layout.vnr -o /tmp/grid_layout.json
\`\`\`

If \`grid_layout.vnr\` references \`class TagItem\` (declared in a sibling file in the same
directory, e.g. \`pages/gallery/classes.vnr\`), the compiler transparently loads that sibling file
in the background purely to resolve the class — it does **not** emit anything from that sibling
file into \`/tmp/grid_layout.json\` beyond what \`grid_layout.vnr\` itself references.

### 15.4 Class declared in a completely different top-level directory (works, because resolution is global for full-workspace compiles)

\`\`\`vnr
// core/classes.vnr
class BaseLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}
\`\`\`

\`\`\`vnr
// pages/home/landing.vnr — different directory entirely
reconstruct "#hero" -> UiHeroLanding {
    child quickLinks extends BaseLink {
        selector: ".quick-link";
    }
}
\`\`\`

This only resolves correctly when compiling the **directory** (\`spm compile theme-project/ -o ...\`),
since single-file linter mode only auto-loads *sibling* files, not the whole tree.

### 15.5 Deep merge with a pre-existing manifest (metadata preservation)

Given an existing \`manifest.json\`:

\`\`\`json
{
  "targetUrl": "*://example.com/*",
  "version": "2.3.1",
  "minEngineVersion": "1.4.0",
  "theme": {
    "author": "acme-themes",
    "description": "Official Acme dark theme"
  }
}
\`\`\`

Running \`spm compile theme-project/ -o manifest.json\` again — after editing only \`.vnr\` sources —
preserves \`targetUrl\`, \`version\`, \`minEngineVersion\`, \`author\`, and \`description\` in the freshly
emitted output, merging them with whatever the new compilation produces for \`cssVariables\`,
\`customStyles\`, \`components\`, and \`reconstructs\`.

---

## 16. Full Worked Themes

### 16.1 Marketplace theme

\`\`\`vnr
// theme.vnr
theme "MarketplaceLight" {
    variables {
        --spm-bg-primary: "#ffffff";
        --spm-bg-secondary: "#f7f7f8";
        --spm-accent: "#ff5a1f";
        --spm-accent-fg: "#ffffff";
        --spm-border: "#e5e5e5";
        --spm-radius: "10px";
    }
    customStyles {
        "#legacy-promo-carousel, .sticky-ad-footer { display: none !important; }"
    }
}
\`\`\`

\`\`\`vnr
// core/classes.vnr
class ListingLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}

class ListingCard {
    bind title: ".listing-title | text";
    bind price: ".listing-price | text | cleanNumber";
    bind imageUrl: "img.listing-photo | attr:src";
    bind location: ".listing-location | text";
    bind postedAt: ".listing-date | attr:datetime";
    bind url: "a.listing-link | attr:href";
}
\`\`\`

\`\`\`vnr
// layout/headers/top_nav.vnr
selector "#site-header" -> UiNavHeader {
    action: replace;
    className: "marketplace-header";
    logoHref: "https://example-market.com/";
    bind logoUrl: ".brand-logo img | attr:src";

    child categories extends ListingLink {
        selector: "#category-nav a";
    }
}

selector "#legacy-search-bar" -> UiSearchBar {
    action: replace;
    placeholder: "Search listings…";
    submitUrl: "https://example-market.com/search";
    queryParamName: "q";
    bind defaultValue: "input[name='q'] | attr:value";
}
\`\`\`

\`\`\`vnr
// pages/browse/grid.vnr
reconstruct "#listings-container" -> UiGridPage {
    urlPattern: R"(\\/browse\\/?(\\?.*)?$)";
    pageTitle: "Browse Listings";
    mobileColumns: 2;
    mobileGap: "8px";
    showSearch: true;

    tagGroups: R"([
      { "title": "Category", "typeKey": "category" },
      { "title": "Condition", "typeKey": "condition" },
      { "title": "Price", "typeKey": "price" }
    ])";

    child items extends ListingCard {
        selector: ".listing-card";
    }

    child pageLinks extends ListingLink {
        scope: "document";
        selector: "#pagination a";
    }
}
\`\`\`

\`\`\`vnr
// pages/item/details.vnr
reconstruct "#listing-detail" -> UiItemDetailsPage {
    urlPattern: R"(\\/listing\\/\\d+)";

    bind title: "h1.listing-title | text";
    bind description: ".listing-description | html";
    bind price: ".listing-price | text | cleanNumber";
    bind sellerName: ".seller-info .name | text";

    preserve {
        contactSellerSlot: "#legacy-contact-form";
    }

    child gallery {
        selector: ".listing-gallery .thumb";
        bind imageUrl: "img | attr:src";
    }
}
\`\`\`

### 16.2 Forum theme

\`\`\`vnr
theme "ForumDark" {
    variables {
        --spm-bg-primary: "#12141a";
        --spm-accent: "#5865f2";
        --spm-text-primary: "#e6e7ec";
        --spm-border: "#23252d";
    }
    customStyles {
        "#forum-sponsor-bar { display: none !important; }"
    }
}

class UserRef {
    scope: "document";
    bind username: "self | text";
    bind profileUrl: "self | attr:href";
}

reconstruct "#board-index" -> UiForumIndexPage {
    urlPattern: "board=index";
    pageTitle: "Community Forum";

    child categories {
        selector: ".forum-category-block";
        bind name: ".cat-title | text";
        bind topicCount: ".cat-stats .topics | text | number";
        bind postCount: ".cat-stats .posts | text | number";

        child lastPoster extends UserRef {
            selector: ".cat-last-post .username a";
        }
    }
}

reconstruct "#thread-view" -> UiThreadPage {
    urlPattern: R"(\\/thread\\/\\d+)";
    pageTitle: "Thread";

    preserve {
        replyFormSlot: "#legacy-reply-box";
    }

    child posts {
        selector: ".forum-post";
        bind body: ".post-content | html";
        bind postedAt: ".post-meta time | attr:datetime";

        child author extends UserRef {
            selector: ".post-author a.username";
        }
    }
}
\`\`\`

### 16.3 News / blog theme

\`\`\`vnr
theme "EditorialClean" {
    variables {
        --spm-bg-primary: "#ffffff";
        --spm-text-primary: "#1a1a1a";
        --spm-accent: "#c0392b";
        --spm-font-sans: "'Source Sans Pro', sans-serif";
    }
    customStyles {
        "#autoplay-video-widget, .paywall-nag { display: none !important; }"
    }
}

class ArticleLink {
    bind headline: "h3 | text";
    bind url: "h3 a | attr:href";
    bind imageUrl: "img | attr:src";
    bind category: ".kicker | text";
    bind publishedAt: "time | attr:datetime";
}

reconstruct "#front-page" -> UiHeroLanding {
    urlPattern: R"(^https?:\\/\\/example-news\\.com\\/?$)";
    tagline: "Today's Top Stories";

    child topStories extends ArticleLink {
        selector: ".top-story";
    }
}

reconstruct "#category-feed" -> UiGridPage {
    urlPattern: R"(\\/section\\/[a-z-]+\\/?$)";
    pageTitle: "Section";
    mobileColumns: 1;

    child items extends ArticleLink {
        selector: ".article-teaser";
    }
}

reconstruct "#article-body" -> UiItemDetailsPage {
    urlPattern: R"(\\/article\\/\\d+)";

    bind title: "h1.headline | text";
    bind byline: ".byline | text";
    bind bodyHtml: ".article-content | html";
    bind publishedAt: "time.published | attr:datetime";

    preserve {
        commentsSlot: "#legacy-comments-plugin";
    }
}
\`\`\`

### 16.4 Job board theme

\`\`\`vnr
theme "CareerBoard" {
    variables {
        --spm-accent: "#0a66c2";
        --spm-radius: "6px";
    }
    customStyles {
        ""
    }
}

class JobCard {
    bind title: ".job-title | text";
    bind company: ".job-company | text";
    bind location: ".job-location | text";
    bind salary: ".job-salary | text | cleanNumber";
    bind postedAt: ".job-posted | attr:datetime";
    bind url: "a.job-link | attr:href";
    bind remote: "self | attr:data-remote | number";
}

reconstruct "#job-search-results" -> UiGridPage {
    urlPattern: "q=";
    pageTitle: "Job Search";
    mobileColumns: 1;
    showSearch: true;
    searchPlaceholder: "Job title, keyword, or company";
    searchSubmitUrl: "https://example-jobs.com/search";
    searchParamName: "q";

    bind searchDefaultValue: "#job-search-input | attr:value";

    child items extends JobCard {
        selector: ".job-result-row";
    }

    child pageLinks {
        scope: "document";
        selector: "#results-pager a";
        bind label: "self | text";
        bind url: "self | attr:href";
    }
}
\`\`\`

### 16.5 Real estate theme

\`\`\`vnr
theme "PropertyModern" {
    variables {
        --spm-accent: "#0f766e";
        --spm-bg-secondary: "#f0fdfa";
    }
    customStyles {
        ""
    }
}

class ListingSummary {
    bind price: ".price | text | cleanNumber";
    bind beds: ".beds | text | number";
    bind baths: ".baths | text | number";
    bind sqft: ".sqft | text | cleanNumber";
    bind address: ".address | text";
    bind imageUrl: "img.primary-photo | attr:src";
    bind url: "a.listing-link | attr:href";
}

reconstruct "#property-search" -> UiGridPage {
    urlPattern: "listings";
    pageTitle: "Property Listings";
    mobileColumns: 1;
    tagGroups: R"([
      { "title": "Beds", "typeKey": "beds" },
      { "title": "Price Range", "typeKey": "price" },
      { "title": "Property Type", "typeKey": "type" }
    ])";

    child items extends ListingSummary {
        selector: ".property-card";
    }
}

reconstruct "#property-detail" -> UiItemDetailsPage {
    urlPattern: R"(\\/property\\/\\d+)";

    bind address: "h1.property-address | text";
    bind price: ".property-price | text | cleanNumber";
    bind description: ".property-description | html";

    preserve {
        contactAgentSlot: "#legacy-agent-contact-form";
        mortgageCalculatorSlot: "#legacy-mortgage-calc";
    }

    child photos {
        selector: ".property-gallery img";
        bind imageUrl: "self | attr:src";
    }

    child features {
        selector: ".feature-list li";
        bind label: "self | text";
    }
}
\`\`\`

---

## 17. Common Errors, Anti-Patterns & Fixes

### 17.1 Missing semicolon

\`\`\`vnr
// ❌ compile error: expected ';' after property value
selector "#nav" -> UiNavHeader {
    action: replace
    logoHref: "https://example.com/";
}
\`\`\`

\`\`\`vnr
// ✅
selector "#nav" -> UiNavHeader {
    action: replace;
    logoHref: "https://example.com/";
}
\`\`\`

### 17.2 Two \`theme\` blocks in the workspace

\`\`\`vnr
// file: a.vnr
theme "First" { variables {} }

// file: b.vnr — ❌ compile error: duplicate theme declaration
theme "Second" { variables {} }
\`\`\`

### 17.3 Unescaped backslashes in a plain (non-raw) string regex

\`\`\`vnr
// ❌ almost certainly not what was intended — "\\d" is not a valid escape
// sequence in a plain string literal and will likely be mis-parsed or rejected
urlPattern: "\\d+";

// ✅ use a raw string for anything regex-flavored
urlPattern: R"(\\d+)";
\`\`\`

### 17.4 Forgetting \`action\` on a \`selector\` block

\`\`\`vnr
// ❌ compile error: selector block missing required "action" key
selector "#promo" -> UiPromoBanner {
    headline: "Sale!";
}
\`\`\`

\`\`\`vnr
// ✅
selector "#promo" -> UiPromoBanner {
    action: replace;
    headline: "Sale!";
}
\`\`\`

### 17.5 Extending a class declared later in the same file, in a workspace/full-directory compile

This is actually **fine** — class resolution happens after full parsing, so declaration order
across the workspace does not matter for a directory compile:

\`\`\`vnr
reconstruct "#page" -> UiPage {
    child links extends LinkClassDeclaredBelow {
        selector: ".link";
    }
}

class LinkClassDeclaredBelow {
    bind label: "self | text";
    bind url: "self | attr:href";
}
\`\`\`

It only becomes a problem in **single-file linter mode** if the class lives in a file the
compiler's sibling autoloader can't find (e.g. it's in a different top-level directory) — see
§15.3–15.4.

### 17.6 Using \`child\` outside of a \`selector\`/\`reconstruct\` block

\`\`\`vnr
// ❌ compile error: "child" is only valid nested inside a selector or reconstruct block
child orphanList {
    selector: ".x";
}
\`\`\`

### 17.7 Typo'd base extractor name

\`\`\`vnr
// ❌ compile error: unknown base extractor "txt" (did you mean "text"?)
bind title: "h2 | txt";
\`\`\`

### 17.8 Reusing a \`child\` name twice at the same nesting level

\`\`\`vnr
// ❌ likely a compile-time or resolver-level conflict: duplicate child name "items"
// within the same parent block
reconstruct "#page" -> UiGridPage {
    child items {
        selector: ".a";
    }
    child items {
        selector: ".b";
    }
}
\`\`\`

\`\`\`vnr
// ✅ give each list a distinct prop name
reconstruct "#page" -> UiGridPage {
    child primaryItems {
        selector: ".a";
    }
    child secondaryItems {
        selector: ".b";
    }
}
\`\`\`

### 17.9 Raw string delimiter collision

\`\`\`vnr
// ❌ the default raw-string terminator \`)"\` appears inside the content itself,
// closing the literal prematurely and leaving trailing garbage that fails to parse
badRegex: R"(\\)")"; 
\`\`\`

\`\`\`vnr
// ✅ use a custom delimiter so the closing sequence becomes unambiguous
badRegex: R"tag(\\)")tag";
\`\`\`

### 17.10 Forgetting that \`preserve\` slot names must match layout-side container IDs

A \`preserve\` block referencing \`mySlot\` compiles successfully even if \`UiSomePage\` has no
\`id="mySlot-container"\` element in its rendered output — the *compiler* has no way to validate
against the React component internals. This fails silently at **runtime** (the node is removed
from the legacy DOM but never reparented anywhere visible), not at compile time. Always confirm
slot names against the target component's actual implementation/docs.

---

## 18. CLI Recipes

\`\`\`bash
# Compile a full workspace to a manifest
./spm compile theme-project/ -o theme-project/manifest.json

# Lint a single file without writing a permanent manifest
./spm compile theme-project/pages/home/landing.vnr -o /tmp/landing.json

# Iterate on a single page's markup while live-reloading via the browser extension
./spm dev theme-project/

# Typical CI step: compile and fail the build on any compiler diagnostic
./spm compile theme-project/ -o theme-project/manifest.json || exit 1
\`\`\`

---

## 19. Cheat Sheet

\`\`\`
theme "<Label>" {
    variables { --token-name: "<value>"; }
    customStyles {
        "<raw-css>"
    }
}

class <Name> [extends <Parent>] {
    [scope: "document";]
    bind <prop>: "<selector-or-self> | <extractor> [| <pipe>]*";
}

selector "<css-selector>" [-> <Component>] {
    action: hide | replace;
    <staticProp>: <value>;
    bind <prop>: "<extraction>";
    [child <name> [extends <Class>] { ... }]
}

reconstruct "<css-selector>" -> <Component> {
    [urlPattern: "<substring-or-regex>";]
    [mediaQuery: "<css-media-query>";]
    <staticProp>: <value>;
    bind <prop>: "<extraction>";
    [preserve { <slotName>: "<selector>"; }]
    [child <name> [extends <Class>] {
        [scope: "document";]
        selector: "<selector>";
        bind <prop>: "<extraction>";
        [child <nestedName> { ... }]
    }]
}
\`\`\`

**Base extractors**: \`text\` · \`html\` · \`attr:<name>\` · \`hrefOrOnclick\` · \`nextSiblingText\` ·
\`hiddenInputs\` · \`selector\`

**Pipes**: \`split\` · \`split:<delim>\` · \`number\` · \`cleanNumber\`

**Implicit JSON typing**: numbers, booleans, arrays (\`R"([...])"\`), objects (\`R"({...})"\`) all
auto-coerce from string literals when valid JSON; everything else stays a string.
`,ii=`# Veneer Spec Language Reference Manual

The Veneer Spec (\`.vnr\`) configuration language is a custom declarative Domain Specific Language (DSL) built for the Site Package Manager (SPM) compiler. 

---

## 1. Introduction & Rationale

Traditionally, layout overrides and DOM modernization mappings in SPM were written directly as raw JSON files (\`manifest.json\`). However, as configuration complexity scales (with hundreds of properties, nested loops, data scraping selectors, and layout variables), writing raw JSON becomes extremely verbose, difficult to validate at write-time, and error-prone due to character escaping.

Veneer Spec solves these issues by providing:
1.  **Strong Typing and Semantic Syntax**: Structural keywords instead of generic JSON key-value pairs.
2.  **Object-Oriented blue-printing (\`class\` / \`extends\`)**: Allows creating base layouts and inheriting selectors/bindings, removing duplication (DRY configuration).
3.  **Raw String Literal Blocks**: Bypasses backslash escaping for regexes and pure JSON lists/tables.
4.  **Static Validation and Compiler Diagnostics**: Resolves inheritance paths, detects circular dependencies, checks type compatibility, and reports exact syntax error lines before compiling.

---

## 2. Core Concepts & Mental Model

### The Layout Override Paradigm
SPM works by intercepting the legacy site's HTML, hiding targeted sections, and injecting modern React views. The Veneer DSL defines **what** parts of the page to target, **which** React component to mount, and **how** to extract unstructured data from the legacy DOM to populate the React component's props.

### Scraping Mappings & Bindings
A key concept of the Veneer Spec is the declarative binding of HTML nodes to component props using the extraction syntax:

$$\\text{Selector} \\quad | \\quad \\text{BaseExtractor} \\quad [ \\ | \\ \\text{Pipe} \\ ]^*$$

The Veneer engine evaluates this query at runtime against the page structure, scraping text content, attributes, or raw HTML, and then running any subsequent pipeline operations sequentially.

#### 1. Base Extractors
*   \`text\` - Extracts the \`textContent\` of the matched element.
*   \`html\` - Extracts the \`innerHTML\` of the matched element.
*   \`attr:<name>\` - Extracts the specified attribute value (e.g. \`attr:src\`, \`attr:href\`).
*   \`hrefOrOnclick\` - Automatically resolves link destination from \`href\` or fallback inline \`onclick\` assignment.
*   \`nextSiblingText\` - Extracts the text content of the immediate next sibling element.
*   \`hiddenInputs\` - Collects all \`<input type="hidden">\` tags within the element as a JSON array string.
*   \`selector\` - Generates a unique selector string for the element.

#### 2. Pipe Operations (Sequential Processing)
Pipes can be chained together sequentially using the \`|\` character.
*   \`split\` - Splits a space-separated text string into a JSON stringified array of tokens (e.g. \`"tag1 tag2"\` -> \`["tag1", "tag2"]\`).
*   \`split:<delimiter>\` - Splits a string by a custom delimiter and trims each token (e.g. \`split:,\` turns \`"tag1, tag2"\` -> \`["tag1", "tag2"]\`).
*   \`number\` - Converts a valid number string directly into a JSON numeric value.
*   \`cleanNumber\` - Strips currency symbols (\`$\`, \`R$\`, \`€\`), commas, and spacing, then parses the value into a JSON float number (e.g. \`"$ 1,200.50"\` -> \`1200.5\`).

---

## 3. Keyword-by-Keyword Reference

### \`theme\`
The \`theme\` block defines the metadata, visual design tokens (CSS custom properties), and raw CSS stylesheet modifications injected into the global document scope.

*   **Role**: Groups styling tokens and global page overrides under a single visual label.
*   **Rules**:
    *   Only one \`theme\` block is allowed per compiled project.
    *   Variables are defined inside the \`variables\` sub-block and compile to the manifest's \`"cssVariables"\`.
    *   Custom stylesheet rules are defined under \`customStyles { "<raw-css>" }\`.
*   **Syntax**:
    \`\`\`scss
    theme "ModernDark" {
        variables {
            --spm-accent: "#7c6af5";
            --spm-bg-primary: "#000000";
        }
        customStyles {
            "#advertisement-banner { display: none !important; }"
        }
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "theme": {
      "label": "ModernDark",
      "cssVariables": {
        "--spm-accent": "#7c6af5",
        "--spm-bg-primary": "#000000"
      },
      "customStyles": "#advertisement-banner { display: none !important; }"
    }
    \`\`\`

---

### \`class\` & \`extends\`
Classes act as blueprints defining reusable data extraction fields and scopes.

*   **Role**: Simplifies the declaration of repetitive structures (like list item cards, buttons, or navigation links) by letting child nodes inherit and override properties.
*   **Rules**:
    *   Classes are resolved at compile-time and are completely omitted from the final JSON output (zero runtime cost).
    *   A class can inherit properties from a parent class using the \`extends\` keyword.
    *   If a property or binding is declared in both the child and parent, the child's value overrides the parent's.
*   **Syntax**:
    \`\`\`scss
    class LinkBase {
        bind label: "self | text";
        bind url: "self | attr:href";
    }

    class DocumentLink extends LinkBase {
        scope: "document";
    }
    \`\`\`

---

### \`selector\`
A \`selector\` block targets an individual legacy element in the DOM to replace it with an isolated React component or hide it entirely.

*   **Role**: Alters targeted, individual legacy elements (like headers, sidebars, or search bars) without replacing the whole page grid.
*   **Rules**:
    *   Must specify a target string representing the CSS selector of the legacy node.
    *   Can map directly to a component using the arrow syntax: \`selector "#element" -> UiComponent\`.
    *   Must contain an \`action\` key (either \`hide\` or \`replace\`).
*   **Syntax**:
    \`\`\`scss
    selector "#sub-navbar" {
        action: hide;
    }

    selector "#search-input" -> UiSearchBar {
        action: replace;
        placeholder: "Search…";
        bind defaultValue: "input[name='q'] | attr:value";
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "components": [
      {
        "selector": "#sub-navbar",
        "action": "hide"
      },
      {
        "selector": "#search-input",
        "name": "UiSearchBar",
        "action": "replace",
        "props": {
          "placeholder": "Search…"
        },
        "propsMap": {
          "defaultValue": "input[name='q'] | attr:value"
        }
      }
    ]
    \`\`\`

---

### \`reconstruct\`
Transforms a large page container (like a full catalog feed, comment board, or landing page) into a modern React view mounted inside an isolated Shadow DOM host.

*   **Role**: Performs full-viewport page overrides.
*   **Rules**:
    *   Targets a container using a CSS selector (which gets its legacy children hidden at injection).
    *   Maps to a React layout component using the arrow syntax: \`reconstruct "#container" -> LayoutComponent\`.
    *   Can configure constraints like \`urlPattern\` or \`mediaQuery\` so the layout only mounts on specific pages or device breakpoints.
*   **Syntax**:
    \`\`\`scss
    reconstruct "#gallery" -> UiGridPage {
        urlPattern: "page=gallery";
        pageTitle: "Catalog Gallery";
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "reconstructs": [
      {
        "containerSelector": "#gallery",
        "layoutComponent": "UiGridPage",
        "urlPattern": "page=gallery",
        "props": {
          "pageTitle": "Catalog Gallery"
        }
      }
    ]
    \`\`\`

---

### \`child\`
Defines a nested data array scraped from matching legacy elements inside the page.

*   **Role**: Creates list arrays (like item grids, comments, tags, or nav lists) and sends them to the parent React layout as a prop array.
*   **Rules**:
    *   Declares a name that maps to the prop array key on the layout component (e.g. \`child items\` defines the \`items\` prop array).
    *   Can extend a class to inherit pre-configured bindings.
    *   Must specify a \`selector\` indicating which elements inside the container represent the list items.
*   **Syntax**:
    \`\`\`scss
    reconstruct "#gallery" -> UiGridPage {
        child items {
            selector: "#gallery .item-card";
            bind id: "self | attr:id";
            bind imageUrl: "img | attr:src";
        }
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "reconstructs": [
      {
        "containerSelector": "#gallery",
        "layoutComponent": "UiGridPage",
        "children": [
          {
            "name": "items",
            "selector": "#gallery .item-card",
            "propsMap": {
              "id": "self | attr:id",
              "imageUrl": "img | attr:src"
            }
          }
        ]
      }
    ]
    \`\`\`

---

### \`bind\`
Sets up dynamic scraping instructions. 

*   **Role**: Tells the engine how to extract a property value from the matched element's DOM at runtime.
*   **Rules**:
    *   Follows the pattern \`bind <prop-name>: "<selector> | <operation>";\`.
    *   Compiles into the \`"propsMap"\` object of the target manifest item.
*   **Syntax**:
    \`\`\`scss
    bind title: "h2 | text";
    bind logoUrl: "img.brand | attr:src";
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "propsMap": {
      "title": "h2 | text",
      "logoUrl": "img.brand | attr:src"
    }
    \`\`\`

---

### \`preserve\`
Prevents specific interactive elements (like a legacy comment form or complex sidebar) from being hidden, reparenting them inside dedicated slot templates in the modern React Shadow DOM.

*   **Role**: Links legacy interactive DOM structures into the new modern React layout without breaking their event handlers, cookies, or states.
*   **Rules**:
    *   Maps a React layout slot name (e.g. \`sidebarSlot\`) to the legacy element CSS selector (e.g. \`.sidebar\`).
    *   Compiles into the \`"preserve"\` block of the target manifest reconstruct.
*   **Syntax**:
    \`\`\`scss
    reconstruct "#item-view" -> UiItemDetailsPage {
        preserve {
            sidebarSlot: ".sidebar";
        }
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "reconstructs": [
      {
        "containerSelector": "#item-view",
        "layoutComponent": "UiItemDetailsPage",
        "preserve": {
          "sidebarSlot": ".sidebar"
        }
      }
    ]
    \`\`\`

---

### \`scope\`
Configures the boundary limits of the CSS selector query.

*   **Role**: Tells the runtime engine whether it should search for elements only within the container element's boundary (\`scope: "container"\`) or search the entire page (\`scope: "document"\`).
*   **Rules**:
    *   The default scope is \`"container"\` (meaning selectors inside child nodes only query descendants of the parent reconstruct container).
    *   Setting \`scope: "document";\` is useful for items like global pagination elements or secondary search bars located outside the main layout container.
    *   If \`"container"\` is configured, the compiler omits the key in the compiled output to keep the JSON clean.
*   **Syntax**:
    \`\`\`scss
    child pageLinks {
        scope: "document";
        selector: "#paginator .pagination a";
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "children": [
      {
        "name": "pageLinks",
        "selector": "#paginator .pagination a",
        "scope": "document"
      }
    ]
    \`\`\`

---

## 4. Delimiters & Type Rules

### Raw String Literals: \`R"delim(content)delim"\`
In standard string literal syntax, special characters like backslashes (\`\\\`) or double quotes (\`"\`) must be escaped (e.g. \`"\\\\w+"\` or \`"\\"value\\""\`). This makes regex rules and complex JSON configurations difficult to read.

Veneer Spec supports C++ style **Raw String Literals**, which treat everything inside \`R"delim(...)delim"\` as a raw, unescaped string.
*   **Usage**: Recommended for compiling regular expressions (like \`urlPattern\`) and inline JSON blocks (like table \`columns\` or array data sets).
*   **Syntax**:
    \`\`\`scss
    urlPattern: R"(example\\.com\\/?(?:index\\.html)?$)";
    
    columns: R"([
      { "key": "id", "header": "ID", "width": "50px" },
      { "key": "name", "header": "Item Title", "type": "text" }
    ])";
    \`\`\`

### Implicit JSON Type Deserialization
When emitting properties to the manifest JSON, the compiler automatically runs a deserialization check on all values:
- If a value represents a valid JSON type (a number \`3\`, a boolean \`true\`, an array \`[...]\`, or an object \`{...}\`), it parses and emits it as a **native JSON type** instead of a string.
- If it fails parsing (like \`"280px"\`), it is emitted as a standard string.

---

## 5. Advanced Workspace Features

### Workspace directory compilation & Package structures
When executing \`spm compile <directory_path> -o manifest.json\`, the compiler recursively searches all \`.vnr\` files under the target path, concatenates their source contents, and resolves class blueprints globally. 

*   **Arbitrary File Naming**: File names are completely arbitrary; they do not need to follow standard names like \`navigation.vnr\` or \`classes.vnr\`. The compiler will read and parse any file ending with the \`.vnr\` extension.
*   **Nested Package Structures (Java-style)**: You are not restricted to keeping files in a single flat directory. You can organize your theme configuration into deeply nested folders and subpackages (e.g. \`core/models/blueprints.vnr\`, \`layout/headers/top_nav.vnr\`, \`pages/gallery/grid_layout.vnr\`). The compiler traverses all subfolders recursively, merging all declarations into a single global compilation context. This allows developers to build large-scale, modular theme packages.


### Sibling Class Autoloading
When compiling a single file (like \`pages.vnr\`), the compiler automatically inspects its directory context. If it detects that a class is referenced as a base but not declared in the current file, it loads and parses sibling \`.vnr\` files in the background to import their class blueprints. This resolves the classes automatically, allowing isolated background validation for syntax linters.

---

## 6. Complete Theme: Agnostic Example

The following is a modular layout configuration for a generic catalog page.

### \`classes.vnr\`
\`\`\`scss
class StandardLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}

class DocumentLink extends StandardLink {
    scope: "document";
}

class TagItem {
    scope: "document";
    bind name: "a:last-of-type | text";
    bind count: "span.count-badge | text";
    bind type: "self | attr:class";
    bind url: "a:last-of-type | attr:href";
}
\`\`\`

### \`theme.vnr\`
\`\`\`scss
theme "ModernDark" {
    variables {
        --spm-accent: "#7c6af5";
        --spm-accent-fg: "#ffffff";
        --spm-accent-hover: "#9d8fff";
        --spm-bg-primary: "#000000";
        --spm-bg-secondary: "#111111";
        --spm-bg-tertiary: "#222222";
        --spm-border: "#333333";
        --spm-radius: "10px";
        --spm-text-muted: "#a1a1aa";
        --spm-text-primary: "#ffffff";
    }
    customStyles {
        "#system-banner, #cookie-consent-bar { display: none !important; }"
    }
}
\`\`\`

### \`navigation.vnr\`
\`\`\`scss
selector "#header-container, #navbar, header" -> UiNavHeader {
    action: replace;
    className: "site-navigation-header";
    logoHref: "https://example.com/";
    
    primaryLinks: R"([
      { "label": "My Account", "url": "https://example.com/account" },
      { "label": "Items", "url": "https://example.com/items?action=list" },
      { "label": "Comments", "url": "https://example.com/comments" },
      { "label": "Wiki Pages", "url": "https://example.com/wiki" },
      { "label": "Statistics", "url": "https://example.com/stats" },
      { "label": "Help Desk", "url": "https://example.com/help" }
    ])";

    secondaryLinks: R"([
      { "label": "Upload Item", "url": "https://example.com/items/upload" },
      { "label": "My Favorites", "url": "https://example.com/favorites" },
      { "label": "Random Item", "url": "https://example.com/items/random" },
      { "label": "Contact Us", "url": "https://example.com/contact" },
      { "label": "Terms of Service", "url": "https://example.com/tos" }
    ])";

    bind logoUrl: "#site-logo img | attr:src";
    bind siteName: "#site-logo a | text";
}

selector "#sub-navbar" {
    action: hide;
}

selector "#sidebar-search form, .search-container form" -> UiSearchBar {
    action: replace;
    placeholder: "Search items…";
    submitUrl: "https://example.com/items";
    queryParamName: "q";
    bind defaultValue: "input[name='q'] | attr:value";
}
\`\`\`

### \`pages.vnr\`
\`\`\`scss
reconstruct "#home-landing" -> UiHeroLanding {
    urlPattern: R"(example\\.com\\/?(?:index\\.html)?$)";
    tagline: "The Modern Search Engine";
    subtext: "Browse millions of cataloged resources, updated in real time.";
    ctaLabel: "Browse Catalog";
    ctaUrl: "https://example.com/items?action=list";
    searchPlaceholder: "Search catalog... (e.g. category:news keyword)";
    searchSubmitUrl: "https://example.com/items";
    searchParamName: "q";

    bind logoUrl: "img[alt='Company Logo'] | attr:src";
    bind siteName: "img[alt='Company Logo'] | attr:alt";

    child primaryLinks extends StandardLink {
        selector: "#quick-links a";
    }
}

reconstruct "#gallery-view" -> UiGridPage {
    urlPattern: "page=gallery";
    pageTitle: "Catalog Gallery";
    className: "modern-grid-gallery";
    height: "calc(100vh - 80px)";
    sidebarWidth: "260px";
    showSearch: true;
    searchPlaceholder: "Search items…";
    searchSubmitUrl: "https://example.com/items";
    searchParamName: "q";
    mobileColumns: 2;
    mobileGap: "8px";
    mobilePadding: "8px";
    mobileShowHeader: true;
    mobileHeaderSticky: true;
    mobileShowPagination: true;
    mobileCardAspectRatio: "1 / 1.28";
    hideSidebarOnMobile: true;
    mobileBreakpoint: 720;
    
    tagGroups: R"([
      { "title": "Categories", "typeKey": "category" },
      { "title": "Tags", "typeKey": "tag" },
      { "title": "Creators", "typeKey": "creator" },
      { "title": "System Data", "typeKey": "metadata" }
    ])";

    bind searchDefaultValue: ".sidebar-filter form input[name='q'] | attr:value";

    child items {
        selector: "#gallery-view .item-card";
        bind id: "self | attr:id";
        bind imageUrl: "img | attr:src";
        bind linkUrl: "a | attr:href";
        bind title: "img | attr:title";
    }

    child tags extends TagItem {
        selector: "#sidebar-tags li";
    }

    child pageLinks extends StandardLink {
        selector: "#paginator .pagination a";
    }
}
\`\`\`
`;function ai(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var oi=ai();function si(e){oi=e}var ci={exec:()=>null};function li(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function M(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(di.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ui=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),di={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:li(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:li(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:li(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:li(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:li(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:li(e=>RegExp(`^ {0,${e}}>`))},fi=/^(?:[ \t]*(?:\n|$))+/,pi=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,mi=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,gi=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_i=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,vi=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,yi=M(vi).replace(/bull/g,_i).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),bi=M(vi).replace(/bull/g,_i).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),xi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Si=/^[^\n]+/,Ci=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,wi=M(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ci).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ti=M(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,_i).getRegex(),Ei=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Di=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Oi=M(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Di).replace(`tag`,Ei).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ki=e=>M(xi).replace(`hr`,hi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ei).getRegex(),Ai=ki(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),ji=ki(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Mi={blockquote:M(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,ji).getRegex(),code:pi,def:wi,fences:mi,heading:gi,hr:hi,html:Oi,lheading:yi,list:Ti,newline:fi,paragraph:Ai,table:ci,text:Si},Ni=M(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,hi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ei).getRegex(),Pi={...Mi,lheading:bi,table:Ni,paragraph:M(xi).replace(`hr`,hi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ni).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ei).getRegex()},Fi={...Mi,html:M(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Di).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ci,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:M(xi).replace(`hr`,hi).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,yi).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ii=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Li=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ri=/^( {2,}|\\)\n(?!\s*$)/,zi=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,N=/[\p{P}\p{S}]/u,P=/[\s\p{P}\p{S}]/u,Bi=/[^\s\p{P}\p{S}]/u,Vi=M(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,P).getRegex(),Hi=/[\p{Pi}\p{Ps}"']/u,Ui=/(?!~)[\p{P}\p{S}]/u,Wi=/(?!~)[\s\p{P}\p{S}]/u,Gi=/(?:[^\s\p{P}\p{S}]|~)/u,Ki=M(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ui?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),qi=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ji=M(qi,`u`).replace(/punct/g,N).getRegex(),Yi=M(qi,`u`).replace(/punct/g,Ui).getRegex(),Xi=M(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Hi).replace(/punct/g,N).getRegex(),Zi=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Qi=M(Zi,`gu`).replace(/notPunctSpace/g,Bi).replace(/punctSpace/g,P).replace(/punct/g,N).getRegex(),$i=M(Zi,`gu`).replace(/notPunctSpace/g,Gi).replace(/punctSpace/g,Wi).replace(/punct/g,Ui).getRegex(),ea=M(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Bi).replace(/punctSpace/g,P).replace(/punct/g,N).getRegex(),ta=M(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Bi).replace(/punctSpace/g,P).replace(/punct/g,N).getRegex(),na=M(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Bi).replace(/punctSpace/g,P).replace(/punct/g,N).getRegex(),ra=M(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,N).getRegex(),ia=M(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Bi).replace(/punctSpace/g,P).replace(/punct/g,N).getRegex(),aa=M(/\\(punct)/,`gu`).replace(/punct/g,N).getRegex(),oa=M(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sa=M(Di).replace(`(?:-->|$)`,`-->`).getRegex(),ca=M(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,sa).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),la=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,ua=M(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,la).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),da=M(/^!?\[(label)\]\[(ref)\]/).replace(`label`,la).replace(`ref`,Ci).getRegex(),F=M(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ci).getRegex(),fa=M(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,da).replace(`nolink`,F).getRegex(),pa=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ma={_backpedal:ci,anyPunctuation:aa,autolink:oa,blockSkip:Ki,br:Ri,code:Li,del:ci,delLDelim:ci,delRDelim:ci,emStrongLDelim:Ji,emStrongRDelimAst:Qi,emStrongRDelimUnd:ta,escape:Ii,link:ua,nolink:F,punctuation:Vi,reflink:da,reflinkSearch:fa,tag:ca,text:zi,url:ci},ha={...ma,emStrongLDelim:Xi,emStrongRDelimAst:ea,emStrongRDelimUnd:na,link:M(/^!?\[(label)\]\((.*?)\)/).replace(`label`,la).getRegex(),reflink:M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,la).getRegex()},ga={...ma,emStrongRDelimAst:$i,emStrongLDelim:Yi,delLDelim:ra,delRDelim:ia,url:M(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,pa).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:M(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,pa).getRegex()},_a={...ga,br:M(Ri).replace(`{2,}`,`*`).getRegex(),text:M(ga.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},va={normal:Mi,gfm:Pi,pedantic:Fi},ya={normal:ma,gfm:ga,breaks:_a,pedantic:ha},ba={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},xa=e=>ba[e];function Sa(e,t){if(t){if(di.escapeTest.test(e))return e.replace(di.escapeReplace,xa)}else if(di.escapeTestNoEncode.test(e))return e.replace(di.escapeReplaceNoEncode,xa);return e}function Ca(e){try{e=encodeURI(e).replace(di.percentDecode,`%`)}catch{return null}return e}function wa(e,t){let n=e.replace(di.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(di.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(di.slashPipe,`|`);return n}function Ta(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Ea(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&di.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Da(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Oa(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function ka(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Aa(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var ja=class{options;rules;lexer;constructor(e){this.options=e||oi}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Ea(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Aa(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ta(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ta(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ta(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ta(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Oa(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Ea(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ta(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=wa(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ta(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(wa(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ta(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Ta(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Da(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ka(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return ka(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Ma=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||oi,this.options.tokenizer=this.options.tokenizer||new ja,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:di,block:va.normal,inline:ya.normal};this.options.pedantic?(t.block=va.pedantic,t.inline=ya.pedantic):this.options.gfm&&(t.block=va.gfm,t.inline=this.options.breaks?ya.breaks:ya.gfm),this.tokenizer.rules=t}static get rules(){return{block:va,inline:ya}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(di.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(di.tabCharGlobal,`    `).replace(di.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,`++`),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Na=class{options;parser;constructor(e){this.options=e||oi}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(di.notSpaceStart)?.[0],i=e.replace(di.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Sa(r)+`">`+(n?i:Sa(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Sa(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Sa(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Ca(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Sa(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ca(e);if(i===null)return Sa(n);e=i;let a=`<img src="${e}" alt="${Sa(n)}"`;return t&&(a+=` title="${Sa(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Sa(e.text)}},Pa=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Fa=class e{options;renderer;textRenderer;constructor(e){this.options=e||oi,this.options.renderer=this.options.renderer||new Na,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pa}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Ia=class{options;block;constructor(e){this.options=e||oi}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ma.lex:Ma.lexInline}provideParser(e=this.block){return e?Fa.parse:Fa.parseInline}},La=new class{defaults=ai();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Fa;Renderer=Na;TextRenderer=Pa;Lexer=Ma;Tokenizer=ja;Hooks=Ia;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Na(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new ja(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Ia;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Ia.passThroughHooks.has(n)?e=>{if(this.defaults.async&&Ia.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ma.lex(e,t??this.defaults)}parser(e,t){return Fa.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Ma.lex:Ma.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Fa.parse:Fa.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Ma.lex:Ma.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Fa.parse:Fa.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Sa(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function I(e,t){return La.parse(e,t)}I.options=I.setOptions=function(e){return La.setOptions(e),I.defaults=La.defaults,si(I.defaults),I},I.getDefaults=ai,I.defaults=oi;function Ra(...e){return La.use(...e),I.defaults=La.defaults,si(I.defaults),I}I.use=Ra,I.walkTokens=function(e,t){return La.walkTokens(e,t)},I.parseInline=La.parseInline,I.Parser=Fa,I.parser=Fa.parse,I.Renderer=Na,I.TextRenderer=Pa,I.Lexer=Ma,I.lexer=Ma.lex,I.Tokenizer=ja,I.Hooks=Ia,I.parse=I,I.options,I.setOptions,I.walkTokens,I.parseInline,Fa.parse,Ma.lex;function za(e){return e.replace(/\$\$\\text\{Selector\}\s*\\quad\s*\|\s*\\quad\s*\\text\{Operation\}\$\$/g,"`selector | operation`").replace(/\$\$\\text\{([^\}]+)\}\s*\\quad\s*\|\s*\\quad\s*\\text\{([^\}]+)\}\$\$/g,"`$1 | $2`").replace(/\$\$(.*?)\$\$/g,"`$1`")}function Ba(e){if(typeof window>`u`)return e;let t=new DOMParser().parseFromString(e,`text/html`);return t.querySelectorAll(`pre code`).forEach(e=>{e.innerHTML=dr(e.textContent||``)}),t.body.innerHTML}var Va=Object.assign({"/src/docs/LayoutPrimitives.md":Lr,"/src/docs/UiCommentListPage.md":Rr,"/src/docs/UiDashboardPage.md":zr,"/src/docs/UiHeroLanding.md":Br,"/src/docs/UiImageCard.md":Vr,"/src/docs/UiImageViewer.md":Hr,"/src/docs/UiModernGridPage.md":Ur,"/src/docs/UiNavHeader.md":Wr,"/src/docs/UiPaginationBar.md":Gr,"/src/docs/UiScrollPanel.md":Kr,"/src/docs/UiSearchBar.md":qr,"/src/docs/UiSplitLayout.md":Jr,"/src/docs/UiStatsDashboard.md":Yr,"/src/docs/UiTable.md":Xr,"/src/docs/UiTableListPage.md":Zr,"/src/docs/UiTagBadge.md":Qr,"/src/docs/UiToastContainer.md":$r,"/src/docs/cli_tooling.md":ei,"/src/docs/components.md":ti,"/src/docs/manifest_schema.md":ni,"/src/docs/veneer-spec-reference.md":ri,"/src/docs/veneer_spec.md":ii});function Ha(e){try{let t=e.split(`/`).pop();if(!t)return null;let n=Object.keys(Va).find(e=>e.endsWith(`/`+t));return n?Va[n]:null}catch{return null}}function Ua({url:e,fallbackContent:t}){let[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(!0),[o,s]=(0,x.useState)(null);return(0,x.useEffect)(()=>{let n=!0;a(!0),s(null);let i=Ha(e);return(i?Promise.resolve(i):fetch(e).then(e=>{if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return e.text()})).then(async e=>{if(!n)return;let t=za(e),i=Ba(await I.parse(t));r(i),a(!1)}).catch(e=>{if(n){if(t){let e=za(t);Promise.resolve(I.parse(e)).then(e=>{if(n){let t=Ba(e);r(t),a(!1)}})}else s(e.message),a(!1)}}),()=>{n=!1}},[e,t]),i?(0,A.jsx)(`div`,{style:{padding:`2rem 0`,color:`var(--text-muted)`,fontFamily:`var(--font-mono)`,fontSize:13},children:`Carregando documentação...`}):o?(0,A.jsxs)(`div`,{style:{padding:`1rem`,background:`#2d1517`,border:`1px solid #5c2225`,borderRadius:4,color:`#f87171`,fontSize:13},children:[`Falha ao carregar documentação ao vivo: `,o]}):(0,A.jsx)(`div`,{className:`prose-spm`,dangerouslySetInnerHTML:{__html:n}})}function Wa(){return(0,A.jsx)(ar,{title:`Theme Manifest Schema Reference`,children:(0,A.jsx)(Ua,{url:`https://raw.githubusercontent.com/spm-ecosystem/spm-cli/main/docs/manifest_schema.md`})})}var Ga=[{name:`LayoutPrimitives`,slug:`layout-primitives`,desc:`Primitivas de layout (UiBox, UiFlexRow, UiFlexColumn, UiGrid, UiText, UiImage, UiLink).`}],Ka=[{name:`UiNavHeader`,slug:`ui-nav-header`,desc:`Barra de navegação topo com logo, siteName e links primários/secundários.`},{name:`UiHeroLanding`,slug:`ui-hero-landing`,desc:`Full-viewport hero com CTA, slogan e barra de busca integrada.`},{name:`UiSearchBar`,slug:`ui-search-bar`,desc:`Campo de pesquisa com formulário GET/POST e preservação de campos hidden.`},{name:`UiImageCard`,slug:`ui-image-card`,desc:`Card de mídia com imagem, título, link e efeitos interativos de hover.`},{name:`UiTagBadge`,slug:`ui-tag-badge`,desc:`Pílula de tag categorizada com contador e acionadores de adição/remoção.`},{name:`UiPaginationBar`,slug:`ui-pagination-bar`,desc:`Barra de controle para paginação de feeds e resultados.`},{name:`UiModernGridPage`,slug:`ui-modern-grid-page`,desc:`Página de galeria em grade responsiva com slot lateral para sidebar.`},{name:`UiImageViewer`,slug:`ui-image-viewer`,desc:`Visualizador de imagens principais com galeria de thumbnails.`},{name:`UiScrollPanel`,slug:`ui-scroll-panel`,desc:`Container rolável com barra de rolagem estilizada.`},{name:`UiSplitLayout`,slug:`ui-split-layout`,desc:`Layout com conteúdo principal e sidebar de metadados.`},{name:`UiCommentListPage`,slug:`ui-comment-list-page`,desc:`Lista de comentários com avatar, autor e HTML preservado.`},{name:`UiDashboardPage`,slug:`ui-dashboard-page`,desc:`Página completa de painel com estatísticas e gráficos de runtime.`},{name:`UiStatsDashboard`,slug:`ui-stats-dashboard`,desc:`Rankings e métricas agrupadas com filtros.`},{name:`UiTable`,slug:`ui-table`,desc:`Tabela genérica moderna com colunas tipadas.`},{name:`UiTableListPage`,slug:`ui-table-list-page`,desc:`Página tabular densa com busca integrada e ações.`},{name:`UiToastContainer`,slug:`ui-toast-container`,desc:`Host de notificações toast em tempo real.`}];function qa(){return(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`,background:`var(--bg-absolute)`},children:[(0,A.jsx)(qn,{}),(0,A.jsxs)(`main`,{style:{flex:1,maxWidth:1e3,margin:`0 auto`,padding:`3rem 2rem 6rem`,width:`100%`},children:[(0,A.jsx)(`h1`,{className:`page-title`,style:{margin:`0 0 0.5rem`},children:`Catálogo de Componentes`}),(0,A.jsx)(`p`,{className:`body-copy`,style:{maxWidth:700,margin:`0 0 3rem`},children:`Explore os componentes React pré-construídos do ecossistema SPM para montagem em Shadow DOM.`}),(0,A.jsxs)(`section`,{style:{marginBottom:`3rem`},children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{marginBottom:`1rem`},children:`Primitivas de Layout`}),Ga.map(e=>(0,A.jsxs)(k,{to:`/components/dedicated/${e.slug}`,style:{display:`block`,padding:`1.25rem 1.5rem`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`4px`,textDecoration:`none`,marginBottom:`0.75rem`,transition:`all 0.15s`},onMouseEnter:e=>e.currentTarget.style.background=`var(--bg-element)`,onMouseLeave:e=>e.currentTarget.style.background=`var(--bg-surface)`,children:[(0,A.jsx)(`p`,{style:{fontFamily:`var(--font-mono)`,fontSize:14,color:`#fff`,fontWeight:600,margin:`0 0 4px`},children:e.name}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:13,margin:0},children:e.desc})]},e.slug))]}),(0,A.jsxs)(`section`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,style:{marginBottom:`1rem`},children:`Componentes Dedicados`}),(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:`0.75rem`},children:Ka.map(e=>(0,A.jsxs)(k,{to:`/components/dedicated/${e.slug}`,style:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,padding:`1rem 1.25rem`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`4px`,textDecoration:`none`,transition:`all 0.15s`},onMouseEnter:e=>e.currentTarget.style.background=`var(--bg-element)`,onMouseLeave:e=>e.currentTarget.style.background=`var(--bg-surface)`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{style:{fontFamily:`var(--font-mono)`,fontSize:13,color:`#fff`,fontWeight:600,margin:`0 0 4px`},children:e.name}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:12,margin:0,lineHeight:1.5},children:e.desc})]}),(0,A.jsx)(`span`,{style:{color:`var(--text-muted)`,fontSize:14,flexShrink:0},children:`→`})]},e.slug))})]})]}),(0,A.jsx)(Jn,{})]})}function Ja(e){if(e.trim().startsWith(`//`))return`<span class="syn-comment">${Xa(e)}</span>`;let t=Xa(e);return t=t.replace(/("[^"]*")/g,`<span class="syn-string">$1</span>`),t=t.replace(/\b(class|reconstruct|extends|child|bind)\b/g,`<span class="syn-keyword">$1</span>`),t=t.replace(/\b(Ui[A-Za-z0-9]+|DocumentRow|GridItem|FileRow)\b/g,`<span class="syn-class">$1</span>`),t=t.replace(/(-&gt;)/g,`<span class="syn-operator">$1</span>`),t=t.replace(/\b([a-zA-Z0-9_]+)(?=:)/g,`<span class="syn-prop">$1</span>`),t}function Ya(e){let t=Xa(e);return t=t.replace(/("[\w-]+")\s*:/g,`<span class="syn-prop">$1</span>:`),t=t.replace(/:\s*(".*?")/g,`: <span class="syn-string">$1</span>`),t=t.replace(/:\s*(\d+)/g,`: <span class="syn-cmd">$1</span>`),t=t.replace(/:\s*(true|false)/g,`: <span class="syn-keyword">$1</span>`),t}function Xa(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Za(e,t,n){let r=RegExp(`${t}:\\s*"([^"]+)"`,`i`),i=e.match(r);return i?i[1]:n}var Qa={"ui-table-list-page":{name:`UiTableListPage`,category:`Componentes Dedicados`,description:`Página de listagem tabular densa com barra de pesquisa integrada, paginação e ações dinâmicas.`,initialVnr:`class DocumentRow {
  bind id:       "td:nth-child(1) | text";
  bind fileName: "td:nth-child(2) a | text";
  bind fileUrl:  "td:nth-child(2) a | attr:href";
  bind category: "td:nth-child(3) | text";
}

reconstruct "#legacy-table" -> UiTableListPage {
  pageTitle: "Central de Arquivos";
  placeholder: "Filtrar documentos...";

  child tableRows extends DocumentRow {
    selector: "tbody tr";
  }
}`,parseVnrToProps:e=>({pageTitle:Za(e,`pageTitle`,`Central de Arquivos`),placeholder:Za(e,`placeholder`,`Filtrar documentos...`)}),generateManifestJson:e=>JSON.stringify({reconstructs:[{containerSelector:`#legacy-table`,layoutComponent:`UiTableListPage`,props:{pageTitle:e.pageTitle,placeholder:e.placeholder},children:[{name:`tableRows`,selector:`tbody tr`,bindings:{id:`td:nth-child(1) | text`,fileName:`td:nth-child(2) a | text`,fileUrl:`td:nth-child(2) a | attr:href`,category:`td:nth-child(3) | text`}}]}]},null,2),renderPreview:e=>(0,A.jsxs)(`div`,{className:`spm-ui-table-card`,style:{width:`100%`},children:[(0,A.jsxs)(`div`,{className:`spm-ui-table-header`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`spm-comp-tag`,children:`UiTableListPage`}),(0,A.jsx)(`h4`,{className:`spm-comp-title`,children:e.pageTitle})]}),(0,A.jsx)(`span`,{className:`spm-item-count`,children:`3 registros`})]}),(0,A.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,A.jsx)(`input`,{type:`text`,placeholder:e.placeholder,readOnly:!0,style:{width:`100%`,padding:`8px 12px`,background:`var(--bg-element)`,border:`1px solid var(--border-contrast)`,borderRadius:`4px`,color:`#fff`,fontSize:`12px`,fontFamily:`var(--font-mono)`}})}),(0,A.jsxs)(`div`,{className:`spm-ui-rows-list`,children:[(0,A.jsxs)(`div`,{className:`spm-ui-row-item`,children:[(0,A.jsxs)(`div`,{className:`spm-row-info`,children:[(0,A.jsx)(`span`,{className:`spm-file-name`,children:`manual_usuario.pdf`}),(0,A.jsx)(`span`,{className:`spm-file-meta`,children:`Documentação • #001`})]}),(0,A.jsx)(`span`,{className:`spm-action-btn`,children:`Baixar PDF →`})]}),(0,A.jsxs)(`div`,{className:`spm-ui-row-item`,children:[(0,A.jsxs)(`div`,{className:`spm-row-info`,children:[(0,A.jsx)(`span`,{className:`spm-file-name`,children:`schema_banco.sql`}),(0,A.jsx)(`span`,{className:`spm-file-meta`,children:`Database • #002`})]}),(0,A.jsx)(`span`,{className:`spm-action-btn`,children:`Baixar SQL →`})]}),(0,A.jsxs)(`div`,{className:`spm-ui-row-item`,children:[(0,A.jsxs)(`div`,{className:`spm-row-info`,children:[(0,A.jsx)(`span`,{className:`spm-file-name`,children:`config_producao.json`}),(0,A.jsx)(`span`,{className:`spm-file-meta`,children:`Config • #003`})]}),(0,A.jsx)(`span`,{className:`spm-action-btn`,children:`Baixar JSON →`})]})]})]})},"ui-search-bar":{name:`UiSearchBar`,category:`Componentes Dedicados`,description:`Campo de pesquisa autônomo com preservação de inputs ocultos de segurança (CSRF token).`,initialVnr:`reconstruct "#search-form" -> UiSearchBar {
  placeholder: "Pesquisar na base...";
  buttonText: "Buscar Agora";
}`,parseVnrToProps:e=>({placeholder:Za(e,`placeholder`,`Pesquisar na base...`),buttonText:Za(e,`buttonText`,`Buscar Agora`)}),generateManifestJson:e=>JSON.stringify({reconstructs:[{containerSelector:`#search-form`,layoutComponent:`UiSearchBar`,props:{placeholder:e.placeholder,buttonText:e.buttonText}}]},null,2),renderPreview:e=>(0,A.jsxs)(`div`,{style:{width:`100%`,padding:`1.5rem`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`},children:[(0,A.jsx)(`span`,{className:`eyebrow`,style:{display:`block`,marginBottom:`0.5rem`},children:`UiSearchBar`}),(0,A.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),style:{display:`flex`,gap:`0.5rem`},children:[(0,A.jsx)(`input`,{type:`text`,placeholder:e.placeholder,style:{flex:1,padding:`10px 14px`,background:`var(--bg-element)`,border:`1px solid var(--border-contrast)`,borderRadius:`4px`,color:`#fff`,fontSize:`13px`,fontFamily:`var(--font-mono)`}}),(0,A.jsx)(`button`,{type:`button`,style:{padding:`0 1.25rem`,background:`#fff`,color:`#000`,border:`none`,borderRadius:`4px`,fontWeight:700,fontSize:`13px`,cursor:`pointer`},children:e.buttonText})]})]})},"ui-stats-dashboard":{name:`UiStatsDashboard`,category:`Componentes Dedicados`,description:`Painel compacto de métricas operacionais e estatísticas de runtime em grade.`,initialVnr:`reconstruct "#stats-panel" -> UiStatsDashboard {
  stat1Title: "Requisições/s";
  stat1Value: "14,250";
  stat2Title: "Latência Média";
  stat2Value: "1.2ms";
}`,parseVnrToProps:e=>({stat1Title:Za(e,`stat1Title`,`Requisições/s`),stat1Value:Za(e,`stat1Value`,`14,250`),stat2Title:Za(e,`stat2Title`,`Latência Média`),stat2Value:Za(e,`stat2Value`,`1.2ms`)}),generateManifestJson:e=>JSON.stringify({reconstructs:[{containerSelector:`#stats-panel`,layoutComponent:`UiStatsDashboard`,props:{stat1Title:e.stat1Title,stat1Value:e.stat1Value,stat2Title:e.stat2Title,stat2Value:e.stat2Value}}]},null,2),renderPreview:e=>(0,A.jsxs)(`div`,{style:{width:`100%`,display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`1rem`},children:[(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,padding:`1.25rem`},children:[(0,A.jsx)(`span`,{className:`eyebrow`,children:e.stat1Title}),(0,A.jsx)(`h3`,{style:{color:`#fff`,fontSize:`24px`,margin:`0.25rem 0 0`,fontWeight:800},children:e.stat1Value}),(0,A.jsx)(`span`,{style:{color:`#34d399`,fontSize:`11px`,fontFamily:`var(--font-mono)`},children:`+12.4% este mês`})]}),(0,A.jsxs)(`div`,{style:{background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,padding:`1.25rem`},children:[(0,A.jsx)(`span`,{className:`eyebrow`,children:e.stat2Title}),(0,A.jsx)(`h3`,{style:{color:`#fff`,fontSize:`24px`,margin:`0.25rem 0 0`,fontWeight:800},children:e.stat2Value}),(0,A.jsx)(`span`,{style:{color:`#60a5fa`,fontSize:`11px`,fontFamily:`var(--font-mono)`},children:`Otimizado via C++`})]})]})},"ui-nav-header":{name:`UiNavHeader`,category:`Componentes Dedicados`,description:`Barra de cabeçalho topo fixa com suporte a logo org, links primários e toggle de temas.`,initialVnr:`reconstruct "#header" -> UiNavHeader {
  siteName: "SPM Portal";
  activeTab: "Início";
}`,parseVnrToProps:e=>({siteName:Za(e,`siteName`,`SPM Portal`),activeTab:Za(e,`activeTab`,`Início`)}),generateManifestJson:e=>JSON.stringify({reconstructs:[{containerSelector:`#header`,layoutComponent:`UiNavHeader`,props:{siteName:e.siteName,activeTab:e.activeTab}}]},null,2),renderPreview:e=>(0,A.jsxs)(`div`,{style:{width:`100%`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,padding:`0.85rem 1.25rem`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,A.jsx)(`img`,{src:`https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg`,alt:`Logo`,style:{height:24}}),(0,A.jsx)(`span`,{style:{color:`#fff`,fontWeight:700,fontSize:`14px`,fontFamily:`var(--font-mono)`},children:e.siteName})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`1.25rem`,fontSize:`13px`,fontWeight:600},children:[(0,A.jsx)(`span`,{style:{color:`#fff`},children:e.activeTab}),(0,A.jsx)(`span`,{style:{color:`var(--text-muted)`},children:`Docs`}),(0,A.jsx)(`span`,{style:{color:`var(--text-muted)`},children:`Componentes`})]})]})}},$a=e=>({name:e,category:`Componentes Dedicados`,description:`Componente React do ecossistema SPM para reconstrução de páginas modernas no Shadow DOM.`,initialVnr:`reconstruct "#container" -> ${e} {
  title: "${e} Demo";
  bind content: ".item | text";
}`,parseVnrToProps:t=>({title:Za(t,`title`,`${e} Demo`)}),generateManifestJson:t=>JSON.stringify({reconstructs:[{containerSelector:`#container`,layoutComponent:e,props:{title:t.title}}]},null,2),renderPreview:t=>(0,A.jsxs)(`div`,{style:{width:`100%`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,padding:`1.5rem`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`1rem`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`eyebrow`,children:e}),(0,A.jsx)(`h4`,{style:{color:`#fff`,margin:0,fontSize:`18px`},children:t.title})]}),(0,A.jsx)(`span`,{style:{fontSize:`11px`,fontFamily:`var(--font-mono)`,background:`var(--bg-element)`,padding:`3px 8px`,borderRadius:`4px`,border:`1px solid var(--border-contrast)`,color:`#fff`},children:`Shadow DOM Active`})]}),(0,A.jsxs)(`p`,{style:{color:`var(--text-muted)`,fontSize:`13px`,margin:0},children:[`Visualização de demonstração reativa para `,(0,A.jsx)(`code`,{style:{color:`#fff`},children:e}),`.`]})]})});function eo(){let{slug:e}=bt(),t=e||`ui-table-list-page`,{t:n}=Gn(),r=Qa[t]||$a(t.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(``)),[i,a]=(0,x.useState)(`sandbox`),[o,s]=(0,x.useState)(`vnr`),[c,l]=(0,x.useState)(r.initialVnr),u=(0,x.useRef)(null),d=(0,x.useRef)(null),f=()=>{u.current&&d.current&&(d.current.scrollTop=u.current.scrollTop,d.current.scrollLeft=u.current.scrollLeft)},p=(0,x.useMemo)(()=>r.parseVnrToProps(c),[c,r]),m=(0,x.useMemo)(()=>r.generateManifestJson(p),[p,r]),h=`https://raw.githubusercontent.com/spm-ecosystem/spm-components/main/docs/components/${r.name}.md`;return(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`,background:`var(--bg-absolute)`},children:[(0,A.jsx)(qn,{}),(0,A.jsxs)(`main`,{style:{flex:1,maxWidth:1180,margin:`0 auto`,padding:`2.5rem 2rem 6rem`,width:`100%`},children:[(0,A.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,A.jsx)(k,{to:`/components`,style:{color:`var(--text-subtle)`,textDecoration:`none`,fontSize:12,fontFamily:`var(--font-mono)`,fontWeight:600,display:`inline-flex`,alignItems:`center`,gap:`0.4rem`,marginBottom:`1rem`},children:n(`sandbox_back`)}),(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,marginBottom:`0.4rem`},children:[(0,A.jsx)(`h1`,{className:`page-title`,style:{fontSize:`2rem`,margin:0},children:r.name}),(0,A.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:11,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,padding:`2px 8px`,borderRadius:4,color:`var(--text-muted)`},children:r.category})]}),(0,A.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:14,margin:0,maxWidth:680,lineHeight:1.6},children:r.description})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,borderBottom:`1px solid var(--border-contrast)`,marginBottom:`2rem`,paddingBottom:`0.5rem`},children:[(0,A.jsx)(`button`,{type:`button`,onClick:()=>a(`sandbox`),style:{padding:`8px 16px`,background:i===`sandbox`?`#fff`:`transparent`,color:i===`sandbox`?`#000`:`var(--text-muted)`,border:`1px solid`,borderColor:i===`sandbox`?`#fff`:`var(--border-contrast)`,borderRadius:`4px`,fontSize:12,fontFamily:`var(--font-mono)`,fontWeight:700,cursor:`pointer`},children:n(`tab_sandbox`)}),(0,A.jsx)(`button`,{type:`button`,onClick:()=>a(`doc`),style:{padding:`8px 16px`,background:i===`doc`?`#fff`:`transparent`,color:i===`doc`?`#000`:`var(--text-muted)`,border:`1px solid`,borderColor:i===`doc`?`#fff`:`var(--border-contrast)`,borderRadius:`4px`,fontSize:12,fontFamily:`var(--font-mono)`,fontWeight:700,cursor:`pointer`},children:n(`tab_doc`)})]}),i===`sandbox`&&(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1.05fr) minmax(0, 0.95fr)`,gap:`2rem`,alignItems:`stretch`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,overflow:`hidden`},children:[(0,A.jsxs)(`div`,{style:{background:`var(--bg-element)`,borderBottom:`1px solid var(--border-contrast)`,padding:`8px 14px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:11,color:`#fff`,fontWeight:700},children:n(`label_shadow_dom`)}),(0,A.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:10,color:`var(--text-subtle)`},children:n(`label_updates_live`)})]}),(0,A.jsx)(`div`,{style:{padding:`1.75rem`,background:`#060606`,flexGrow:1,display:`flex`,alignItems:`center`},children:r.renderPreview(p)})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`6px`,overflow:`hidden`},children:[(0,A.jsxs)(`div`,{style:{background:`var(--bg-element)`,borderBottom:`1px solid var(--border-contrast)`,padding:`8px 14px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:11,color:`#fff`,fontWeight:700},children:n(o===`vnr`?`label_vnr_editor`:`label_manifest`)}),(0,A.jsx)(`button`,{type:`button`,onClick:()=>s(e=>e===`vnr`?`json`:`vnr`),style:{padding:`3px 10px`,background:`var(--bg-surface)`,color:`#fff`,border:`1px solid var(--border-contrast)`,borderRadius:`3px`,fontSize:11,fontFamily:`var(--font-mono)`,fontWeight:600,cursor:`pointer`},children:n(o===`vnr`?`btn_see_manifest`:`btn_see_vnr`)})]}),(0,A.jsx)(`div`,{style:{flexGrow:1,background:`#060606`,padding:`1rem`,position:`relative`},children:o===`vnr`?(0,A.jsxs)(`div`,{className:`code-editor-wrapper`,children:[(0,A.jsx)(`pre`,{ref:d,className:`code-editor-pre`,children:(0,A.jsx)(`code`,{children:c.split(`
`).map((e,t)=>(0,A.jsx)(`div`,{dangerouslySetInnerHTML:{__html:Ja(e)||`&nbsp;`}},t))})}),(0,A.jsx)(`textarea`,{ref:u,value:c,onChange:e=>l(e.target.value),onScroll:f,spellCheck:!1,className:`code-editor-textarea`})]}):(0,A.jsx)(`div`,{style:{fontFamily:`var(--font-mono)`,fontSize:12,lineHeight:1.75,overflowX:`auto`,padding:`4px`},children:m.split(`
`).map((e,t)=>(0,A.jsx)(`div`,{className:`mono-terminal-line`,dangerouslySetInnerHTML:{__html:Ya(e)}},t))})})]})]}),i===`doc`&&(0,A.jsx)(Ua,{url:h})]}),(0,A.jsx)(Jn,{})]})}function to(){return(0,A.jsx)(On,{children:(0,A.jsxs)(Ut,{children:[(0,A.jsx)(O,{path:`/`,element:(0,A.jsx)(Zn,{})}),(0,A.jsx)(O,{path:`/docs/getting-started`,element:(0,A.jsx)(hr,{})}),(0,A.jsx)(O,{path:`/docs/veneer`,element:(0,A.jsx)(_r,{})}),(0,A.jsx)(O,{path:`/docs/veneer/introduction`,element:(0,A.jsx)(yr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/syntax`,element:(0,A.jsx)(xr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/theme`,element:(0,A.jsx)(Cr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/classes`,element:(0,A.jsx)(Tr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/reconstruct`,element:(0,A.jsx)(Dr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/bindings`,element:(0,A.jsx)(kr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/selectors`,element:(0,A.jsx)(jr,{})}),(0,A.jsx)(O,{path:`/docs/veneer/tooling`,element:(0,A.jsx)(Nr,{})}),(0,A.jsx)(O,{path:`/docs/manifest`,element:(0,A.jsx)(Wa,{})}),(0,A.jsx)(O,{path:`/docs/tooling`,element:(0,A.jsx)(Ir,{})}),(0,A.jsx)(O,{path:`/components`,element:(0,A.jsx)(qa,{})}),(0,A.jsx)(O,{path:`/components/dedicated/:slug`,element:(0,A.jsx)(eo,{})})]})})}Vn.createRoot(document.getElementById(`root`)).render((0,A.jsx)(x.StrictMode,{children:(0,A.jsx)(Wn,{children:(0,A.jsx)(to,{})})}));