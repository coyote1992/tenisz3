var UT=Object.create;var D_=Object.defineProperty;var LT=Object.getOwnPropertyDescriptor;var IT=Object.getOwnPropertyNames;var PT=Object.getPrototypeOf,OT=Object.prototype.hasOwnProperty;var ua=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var zT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of IT(t))!OT.call(e,a)&&a!==n&&D_(e,a,{get:()=>t[a],enumerable:!(i=LT(t,a))||i.enumerable});return e};var Pt=(e,t,n)=>(n=e!=null?UT(PT(e)):{},zT(t||!e||!e.__esModule?D_(n,"default",{value:e,enumerable:!0}):n,e));var H_=ua(He=>{"use strict";function Op(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Pu(a,t))e[i]=t,e[n]=a,n=i;else break t}}function ha(e){return e.length===0?null:e[0]}function zu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,r=a>>>1;i<r;){var s=2*(i+1)-1,o=e[s],l=s+1,c=e[l];if(0>Pu(o,n))l<a&&0>Pu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[s]=n,i=s);else if(l<a&&0>Pu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Pu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}He.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(U_=performance,He.unstable_now=function(){return U_.now()}):(Lp=Date,L_=Lp.now(),He.unstable_now=function(){return Lp.now()-L_});var U_,Lp,L_,za=[],hr=[],BT=1,Ni=null,In=3,zp=!1,Fl=!1,kl=!1,Bp=!1,O_=typeof setTimeout=="function"?setTimeout:null,z_=typeof clearTimeout=="function"?clearTimeout:null,I_=typeof setImmediate<"u"?setImmediate:null;function Ou(e){for(var t=ha(hr);t!==null;){if(t.callback===null)zu(hr);else if(t.startTime<=e)zu(hr),t.sortIndex=t.expirationTime,Op(za,t);else break;t=ha(hr)}}function Fp(e){if(kl=!1,Ou(e),!Fl)if(ha(za)!==null)Fl=!0,ao||(ao=!0,io());else{var t=ha(hr);t!==null&&kp(Fp,t.startTime-e)}}var ao=!1,Hl=-1,B_=5,F_=-1;function k_(){return Bp?!0:!(He.unstable_now()-F_<B_)}function Ip(){if(Bp=!1,ao){var e=He.unstable_now();F_=e;var t=!0;try{t:{Fl=!1,kl&&(kl=!1,z_(Hl),Hl=-1),zp=!0;var n=In;try{e:{for(Ou(e),Ni=ha(za);Ni!==null&&!(Ni.expirationTime>e&&k_());){var i=Ni.callback;if(typeof i=="function"){Ni.callback=null,In=Ni.priorityLevel;var a=i(Ni.expirationTime<=e);if(e=He.unstable_now(),typeof a=="function"){Ni.callback=a,Ou(e),t=!0;break e}Ni===ha(za)&&zu(za),Ou(e)}else zu(za);Ni=ha(za)}if(Ni!==null)t=!0;else{var r=ha(hr);r!==null&&kp(Fp,r.startTime-e),t=!1}}break t}finally{Ni=null,In=n,zp=!1}t=void 0}}finally{t?io():ao=!1}}}var io;typeof I_=="function"?io=function(){I_(Ip)}:typeof MessageChannel<"u"?(Pp=new MessageChannel,P_=Pp.port2,Pp.port1.onmessage=Ip,io=function(){P_.postMessage(null)}):io=function(){O_(Ip,0)};var Pp,P_;function kp(e,t){Hl=O_(function(){e(He.unstable_now())},t)}He.unstable_IdlePriority=5;He.unstable_ImmediatePriority=1;He.unstable_LowPriority=4;He.unstable_NormalPriority=3;He.unstable_Profiling=null;He.unstable_UserBlockingPriority=2;He.unstable_cancelCallback=function(e){e.callback=null};He.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B_=0<e?Math.floor(1e3/e):5};He.unstable_getCurrentPriorityLevel=function(){return In};He.unstable_next=function(e){switch(In){case 1:case 2:case 3:var t=3;break;default:t=In}var n=In;In=t;try{return e()}finally{In=n}};He.unstable_requestPaint=function(){Bp=!0};He.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=In;In=e;try{return t()}finally{In=n}};He.unstable_scheduleCallback=function(e,t,n){var i=He.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:BT++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Op(hr,e),ha(za)===null&&e===ha(hr)&&(kl?(z_(Hl),Hl=-1):kl=!0,kp(Fp,n-i))):(e.sortIndex=a,Op(za,e),Fl||zp||(Fl=!0,ao||(ao=!0,io()))),e};He.unstable_shouldYield=k_;He.unstable_wrapCallback=function(e){var t=In;return function(){var n=In;In=t;try{return e.apply(this,arguments)}finally{In=n}}}});var G_=ua((r4,V_)=>{"use strict";V_.exports=H_()});var ny=ua(Vt=>{"use strict";var Gp=Symbol.for("react.transitional.element"),FT=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),HT=Symbol.for("react.strict_mode"),VT=Symbol.for("react.profiler"),GT=Symbol.for("react.consumer"),XT=Symbol.for("react.context"),WT=Symbol.for("react.forward_ref"),qT=Symbol.for("react.suspense"),YT=Symbol.for("react.memo"),Z_=Symbol.for("react.lazy"),ZT=Symbol.for("react.activity"),KT=Symbol.for("react.view_transition"),X_=Symbol.iterator;function JT(e){return e===null||typeof e!="object"?null:(e=X_&&e[X_]||e["@@iterator"],typeof e=="function"?e:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J_=Object.assign,j_={};function so(e,t,n){this.props=e,this.context=t,this.refs=j_,this.updater=n||K_}so.prototype.isReactComponent={};so.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};so.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q_(){}Q_.prototype=so.prototype;function Xp(e,t,n){this.props=e,this.context=t,this.refs=j_,this.updater=n||K_}var Wp=Xp.prototype=new Q_;Wp.constructor=Xp;J_(Wp,so.prototype);Wp.isPureReactComponent=!0;var W_=Array.isArray;function Vp(){}var Ue={H:null,A:null,T:null,S:null},$_=Object.prototype.hasOwnProperty;function qp(e,t,n){var i=n.ref;return{$$typeof:Gp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function jT(e,t){return qp(e.type,t,e.props)}function Yp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gp}function QT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var q_=/\/+/g;function Hp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?QT(""+e.key):t.toString(36)}function $T(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Vp,Vp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ro(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Gp:case FT:s=!0;break;case Z_:return s=e._init,ro(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+Hp(e,0):i,W_(a)?(n="",s!=null&&(n=s.replace(q_,"$&/")+"/"),ro(a,t,n,"",function(c){return c})):a!=null&&(Yp(a)&&(a=jT(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(q_,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(W_(e))for(var l=0;l<e.length;l++)i=e[l],r=o+Hp(i,l),s+=ro(i,t,n,r,a);else if(l=JT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+Hp(i,l++),s+=ro(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return ro($T(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Bu(e,t,n){if(e==null)return e;var i=[],a=0;return ro(e,i,"","",function(r){return t.call(n,r,a++)}),i}function tE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Y_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ty(e){var t=Ue.T,n={};n.types=t!==null?t.types:null,Ue.T=n;try{var i=e(),a=Ue.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Vp,Y_)}catch(r){Y_(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}}function ey(e){var t=Ue.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ty(ey.bind(null,e))}var eE={map:Bu,forEach:function(e,t,n){Bu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bu(e,function(){t++}),t},toArray:function(e){return Bu(e,function(t){return t})||[]},only:function(e){if(!Yp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Vt.Activity=ZT;Vt.Children=eE;Vt.Component=so;Vt.Fragment=kT;Vt.Profiler=VT;Vt.PureComponent=Xp;Vt.StrictMode=HT;Vt.Suspense=qT;Vt.ViewTransition=KT;Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Vt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Vt.addTransitionType=ey;Vt.cache=function(e){return function(){return e.apply(null,arguments)}};Vt.cacheSignal=function(){return null};Vt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=J_({},e.props),a=e.key;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)!$_.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return qp(e.type,a,i)};Vt.createContext=function(e){return e={$$typeof:XT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:GT,_context:e},e};Vt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)$_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return qp(e,r,a)};Vt.createRef=function(){return{current:null}};Vt.forwardRef=function(e){return{$$typeof:WT,render:e}};Vt.isValidElement=Yp;Vt.lazy=function(e){return{$$typeof:Z_,_payload:{_status:-1,_result:e},_init:tE}};Vt.memo=function(e,t){return{$$typeof:YT,type:e,compare:t===void 0?null:t}};Vt.startTransition=ty;Vt.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Vt.use=function(e){return Ue.H.use(e)};Vt.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Vt.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Vt.useContext=function(e){return Ue.H.useContext(e)};Vt.useDebugValue=function(){};Vt.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Vt.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Vt.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Vt.useId=function(){return Ue.H.useId()};Vt.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Vt.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Vt.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Vt.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Vt.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Vt.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Vt.useRef=function(e){return Ue.H.useRef(e)};Vt.useState=function(e){return Ue.H.useState(e)};Vt.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Vt.useTransition=function(){return Ue.H.useTransition()};Vt.version="19.3.0"});var dn=ua((o4,iy)=>{"use strict";iy.exports=ny()});var sy=ua(Pn=>{"use strict";var nE=dn();function ry(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fr(){}var Xn={d:{f:fr,r:function(){throw Error(ry(522))},D:fr,C:fr,L:fr,m:fr,X:fr,S:fr,M:fr},p:0,findDOMNode:null},iE=Symbol.for("react.portal"),aE=Symbol.for("react.recoverable"),ay=Symbol.for("react.optimistic_key");function rE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:iE,key:i==null?null:i===ay?ay:""+i,children:e,containerInfo:t,implementation:n}}var Vl=nE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Fu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xn;Pn.browser=function(e){return{$$typeof:aE,_reason:e}};Pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ry(299));return rE(e,t,null,n)};Pn.flushSync=function(e){var t=Vl.T,n=Xn.p;try{if(Vl.T=null,Xn.p=2,e)return e()}finally{Vl.T=t,Xn.p=n,Xn.d.f()}};Pn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Xn.d.C(e,t))};Pn.prefetchDNS=function(e){typeof e=="string"&&Xn.d.D(e)};Pn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Fu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&Xn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Pn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Fu(t.as,t.crossOrigin);Xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Xn.d.M(e)};Pn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Fu(n,t.crossOrigin);Xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Pn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Fu(t.as,t.crossOrigin);Xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Xn.d.m(e)};Pn.requestFormReset=function(e){Xn.d.r(e)};Pn.unstable_batchedUpdates=function(e,t){return e(t)};Pn.useFormState=function(e,t,n){return Vl.H.useFormState(e,t,n)};Pn.useFormStatus=function(){return Vl.H.useHostTransitionStatus()};Pn.version="19.3.0"});var cy=ua((c4,ly)=>{"use strict";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(e){console.error(e)}}oy(),ly.exports=sy()});var KS=ua(bf=>{"use strict";var ln=G_(),Zx=dn(),sE=cy();function nt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Kx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Jx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uy(e){if(Rc(e)!==e)throw Error(nt(188))}function oE(e){var t=e.alternate;if(!t){if(t=Rc(e),t===null)throw Error(nt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return uy(a),e;if(r===i)return uy(a),t;r=r.sibling}throw Error(nt(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(nt(189))}}if(n.alternate!==i)throw Error(nt(190))}if(n.tag!==3)throw Error(nt(188));return n.stateNode.current===n?e:t}function Qx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Qx(e),t!==null)return t;e=e.sibling}return null}function ri(e,t,n,i,a,r){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,r)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ri(e.child,t,n,i,a,r))return!0;e=e.sibling}return!1}function Ns(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function hy(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function $x(e){var t=[null,null],n=Ns(e);return n===null||tb(t,e,n.child,{foundSelf:!1}),t}function tb(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&tb(e,t,n.child,i))return!0;n=n.sibling}return!1}function on(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(nt(559))}}var po=null,Em=null;function lE(e,t,n){return e===n?!0:e===t?(po=e,!0):!1}function cE(e,t,n){return e===n?(Em=e,!1):e===t?(Em!==null&&(po=e),!0):!1}function fy(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function wm(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var r=t;r;r=n(r))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ce=Object.assign,uE=Symbol.for("react.element"),ku=Symbol.for("react.transitional.element"),Kl=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),eb=Symbol.for("react.strict_mode"),Am=Symbol.for("react.profiler"),nb=Symbol.for("react.consumer"),va=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Rm=Symbol.for("react.suspense_list"),z0=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Nm=Symbol.for("react.activity"),hE=Symbol.for("react.legacy_hidden"),fE=Symbol.for("react.memo_cache_sentinel"),Dm=Symbol.for("react.view_transition"),dE=Symbol.for("react.recoverable"),dy=Symbol.iterator;function Gl(e){return e===null||typeof e!="object"?null:(e=dy&&e[dy]||e["@@iterator"],typeof e=="function"?e:null)}var pE=Symbol.for("react.client.reference");function Um(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case Am:return"Profiler";case eb:return"StrictMode";case Cm:return"Suspense";case Rm:return"SuspenseList";case Nm:return"Activity";case Dm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Kl:return"Portal";case va:return e.displayName||"Context";case nb:return(e._context.displayName||"Context")+".Consumer";case O0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z0:return t=e.displayName||null,t!==null?t:Um(e.type)||"Memo";case gr:t=e._payload,e=e._init;try{return Um(e(t))}catch{}}return null}var Jl=Array.isArray,Ft=Zx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=sE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vs={pending:!1,data:null,method:null,action:null},Lm=[],go=-1;function Ta(e){return{current:e}}function wn(e){0>go||(e.current=Lm[go],Lm[go]=null,go--)}function Pe(e,t){go++,Lm[go]=e.current,e.current=t}var ba=Ta(null),dc=Ta(null),Er=Ta(null),wh=Ta(null);function Ah(e,t){switch(Pe(Er,t),Pe(dc,e),Pe(ba,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ax(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ax(t),e=TS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}wn(ba),Pe(ba,e)}function Oo(){wn(ba),wn(dc),wn(Er)}function Im(e){var t=e.memoizedState;t!==null&&(qo._currentValue=t.memoizedState,Pe(wh,e)),t=ba.current;var n=TS(t,e.type);t!==n&&(Pe(dc,e),Pe(ba,n))}function Ch(e){dc.current===e&&(wn(ba),wn(dc)),wh.current===e&&(wn(wh),qo._currentValue=vs)}var Zp,py;function pr(e){if(Zp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zp=t&&t[1]||"",py=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zp+e+py}var Kp=!1;function Jp(e,t){if(!e||Kp)return"";Kp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(m){var u=m}Reflect.construct(e,[],p)}else{try{p.call()}catch(m){u=m}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(m){u=m}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(m){if(m&&u&&typeof m.stack=="string")return[m.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Kp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pr(n):""}function mE(e,t){switch(e.tag){case 26:case 27:case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return e.child!==t&&t!==null?pr("Suspense Fallback"):pr("Suspense");case 19:return pr("SuspenseList");case 0:case 15:return Jp(e.type,!1);case 11:return Jp(e.type.render,!1);case 1:return Jp(e.type,!0);case 31:return pr("Activity");case 30:return pr("ViewTransition");default:return""}}function my(e){try{var t="",n=null;do t+=mE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Pm=Object.prototype.hasOwnProperty,B0=ln.unstable_scheduleCallback,jp=ln.unstable_cancelCallback,gE=ln.unstable_shouldYield,vE=ln.unstable_requestPaint,gi=ln.unstable_now,_E=ln.unstable_getCurrentPriorityLevel,ib=ln.unstable_ImmediatePriority,ab=ln.unstable_UserBlockingPriority,Rh=ln.unstable_NormalPriority,yE=ln.unstable_LowPriority,rb=ln.unstable_IdlePriority,xE=ln.log,bE=ln.unstable_setDisableYieldValue,Nc=null,vi=null;function yr(e){if(typeof xE=="function"&&bE(e),vi&&typeof vi.setStrictMode=="function")try{vi.setStrictMode(Nc,e)}catch{}}var _i=Math.clz32?Math.clz32:TE,SE=Math.log,ME=Math.LN2;function TE(e){return e>>>=0,e===0?32:31-(SE(e)/ME|0)|0}var Hu=256,Vu=262144,Gu=4194304;function fs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ef(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=fs(i):(s&=o,s!==0?a=fs(s):n||(n=o&~e,n!==0&&(a=fs(n))))):(o=i&~r,o!==0?a=fs(o):s!==0?a=fs(s):n||(n=i&~e,n!==0&&(a=fs(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Dc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sb(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-_i(n),a=1<<i;t|=e[i],n&=~a}return t}function EE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ob(){var e=Gu;return Gu<<=1,(Gu&62914560)===0&&(Gu=4194304),e}function Qp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Uc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wE(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-_i(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&lb(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function lb(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-_i(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function cb(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-_i(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function ub(e,t){var n=t&-t;return n=(n&42)!==0?1:F0(n),(n&(e.suspendedLanes|t))!==0?0:n}function F0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function k0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hb(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:qS(e.type))}function gy(e,t){var n=pe.p;try{return pe.p=e,t()}finally{pe.p=n}}var Ja=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Ja,si="__reactProps$"+Ja,Ko="__reactContainer$"+Ja,vy="__reactEvents$"+Ja,AE="__reactListeners$"+Ja,CE="__reactHandles$"+Ja,_y="__reactResources$"+Ja,Lc="__reactMarker$"+Ja,Nh="__reactLoad$"+Ja;function nf(e){delete e[Tn],delete e[si],delete e[AE],delete e[CE]}function ms(e){var t;if(t=e[Tn])return t;for(var n=e.parentNode;n;){if(t=n[Ko]||n[Tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Px(e);e!==null;){if(n=e[Tn])return n;e=Px(e)}return t}e=n,n=e.parentNode}return null}function Jo(e){if(e=e[Tn]||e[Ko]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(nt(33))}function wo(e){var t=e[_y];return t||(t=e[_y]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gn(e){e[Lc]=!0}function fb(e){e[Nh]=void 0}var db=new Set,pb={};function Ds(e,t){zo(e,t),zo(e+"Capture",t)}function zo(e,t){for(pb[e]=t,e=0;e<t.length;e++)db.add(t[e])}var RE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yy={},xy={};function NE(e){return Pm.call(xy,e)?!0:Pm.call(yy,e)?!1:RE.test(e)?xy[e]=!0:(yy[e]=!0,!1)}var he=!1;function by(){var e=he;return he=!1,e}function oh(e,t,n){if(NE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Xu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ba(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function fi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function DE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Om(e){if(!e._valueTracker){var t=mb(e)?"checked":"value";e._valueTracker=DE(e,t,""+e[t])}}function gb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=mb(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var UE=/[\n"\\]/g;function Pi(e){return e.replace(UE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zm(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+fi(t)):e.value!==""+fi(t)&&(e.value=""+fi(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?s==="number"&&e.value==t?$p(e,fi(e.value)):$p(e,fi(t)):n!=null?$p(e,fi(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+fi(o):e.removeAttribute("name")}function vb(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Om(e);return}n=n!=null?""+fi(n):"",t=t!=null?""+fi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Om(e)}function $p(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ao(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+fi(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _b(e,t,n){if(t!=null&&(t=""+fi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+fi(n):""}function yb(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(nt(92));if(Jl(i)){if(1<i.length)throw Error(nt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=fi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Om(e)}function Bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var LE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||LE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xb(e,t,n){if(t!=null&&typeof t!="object")throw Error(nt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",he=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(Sy(e,a,i),he=!0)}else for(var r in t)t.hasOwnProperty(r)&&Sy(e,r,t[r])}function H0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var IE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),PE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lh(e){return PE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var Bm=null;function V0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vo=null,Co=null;function My(e){var t=Jo(e);if(t&&(e=t.stateNode)){var n=e[si]||null;t:switch(e=t.stateNode,t.type){case"input":if(zm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Pi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[si]||null;if(!a)throw Error(nt(90));zm(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&gb(i)}break t;case"textarea":_b(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ao(e,!!n.multiple,t,!1)}}}var tm=!1;function bb(e,t,n){if(tm)return e(t,n);tm=!0;try{var i=e(t);return i}finally{if(tm=!1,(vo!==null||Co!==null)&&(vf(),vo&&(t=vo,e=Co,Co=vo=null,My(t),e)))for(t=0;t<e.length;t++)My(e[t])}}function pc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[si]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(nt(231,t,typeof n));return n}var Xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fm=!1;if(Xa)try{oo={},Object.defineProperty(oo,"passive",{get:function(){Fm=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Fm=!1}var oo,xr=null,G0=null,ch=null;function Sb(){if(ch)return ch;var e,t=G0,n=t.length,i,a="value"in xr?xr.value:xr.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return ch=a.slice(e,1<i?1-i:void 0)}function uh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wu(){return!0}function Ty(){return!1}function Zn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Wu:Ty,this.isPropagationStopped=Ty,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wu)},persist:function(){},isPersistent:Wu}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Zn(kr),Ic=Ce({},kr,{view:0,detail:0}),OE=Zn(Ic),em,nm,Xl,rf=Ce({},Ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:X0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xl&&(Xl&&e.type==="mousemove"?(em=e.screenX-Xl.screenX,nm=e.screenY-Xl.screenY):nm=em=0,Xl=e),em)},movementY:function(e){return"movementY"in e?e.movementY:nm}}),Ey=Zn(rf),zE=Ce({},rf,{dataTransfer:0}),BE=Zn(zE),FE=Ce({},Ic,{relatedTarget:0}),im=Zn(FE),kE=Ce({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),HE=Zn(kE),VE=Ce({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),GE=Zn(VE),XE=Ce({},kr,{data:0}),wy=Zn(XE),WE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YE[e])?!!t[e]:!1}function X0(){return ZE}var KE=Ce({},Ic,{key:function(e){if(e.key){var t=WE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:X0,charCode:function(e){return e.type==="keypress"?uh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),JE=Zn(KE),jE=Ce({},rf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ay=Zn(jE),QE=Ce({},kr,{submitter:0}),$E=Zn(QE),tw=Ce({},Ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:X0}),ew=Zn(tw),nw=Ce({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iw=Zn(nw),aw=Ce({},rf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=Zn(aw),sw=Ce({},kr,{newState:0,oldState:0,source:0}),ow=Zn(sw),lw=[9,13,27,32],W0=Xa&&"CompositionEvent"in window,tc=null;Xa&&"documentMode"in document&&(tc=document.documentMode);var cw=Xa&&"TextEvent"in window&&!tc,Mb=Xa&&(!W0||tc&&8<tc&&11>=tc),Cy=" ",Ry=!1;function Tb(e,t){switch(e){case"keyup":return lw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function uw(e,t){switch(e){case"compositionend":return Eb(t);case"keypress":return t.which!==32?null:(Ry=!0,Cy);case"textInput":return e=t.data,e===Cy&&Ry?null:e;default:return null}}function hw(e,t){if(_o)return e==="compositionend"||!W0&&Tb(e,t)?(e=Sb(),ch=G0=xr=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mb&&t.locale!=="ko"?null:t.data;default:return null}}var fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fw[e.type]:t==="textarea"}function wb(e,t,n,i){vo?Co?Co.push(i):Co=[i]:vo=i,t=Qh(t,"onChange"),0<t.length&&(n=new af("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ec=null,mc=null;function dw(e){bS(e,0)}function sf(e){var t=jl(e);if(gb(t))return e}function Dy(e,t){if(e==="change")return t}var Ab=!1;Xa&&(Xa?(Yu="oninput"in document,Yu||(am=document.createElement("div"),am.setAttribute("oninput","return;"),Yu=typeof am.oninput=="function"),qu=Yu):qu=!1,Ab=qu&&(!document.documentMode||9<document.documentMode));var qu,Yu,am;function Uy(){ec&&(ec.detachEvent("onpropertychange",Cb),mc=ec=null)}function Cb(e){if(e.propertyName==="value"&&sf(mc)){var t=[];wb(t,mc,e,V0(e)),bb(dw,t)}}function pw(e,t,n){e==="focusin"?(Uy(),ec=t,mc=n,ec.attachEvent("onpropertychange",Cb)):e==="focusout"&&Uy()}function mw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sf(mc)}function gw(e,t){if(e==="click")return sf(t)}function vw(e,t){if(e==="input"||e==="change")return sf(t)}function _w(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xi=typeof Object.is=="function"?Object.is:_w;function gc(e,t){if(xi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Pm.call(t,a)||!xi(e[a],t[a]))return!1}return!0}function km(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ly(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iy(e,t){var n=Ly(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ly(n)}}function Rb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nb(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=km(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=km(e.document)}return t}function q0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yw=Xa&&"documentMode"in document&&11>=document.documentMode,yo=null,Hm=null,nc=null,Vm=!1;function Py(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vm||yo==null||yo!==km(i)||(i=yo,"selectionStart"in i&&q0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nc&&gc(nc,i)||(nc=i,i=Qh(Hm,"onSelect"),0<i.length&&(t=new af("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=yo)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xo={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},rm={},Db={};Xa&&(Db=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function Us(e){if(rm[e])return rm[e];if(!xo[e])return e;var t=xo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Db)return rm[e]=t[n];return e}var Ub=Us("animationend"),Lb=Us("animationiteration"),Ib=Us("animationstart"),xw=Us("transitionrun"),bw=Us("transitionstart"),Sw=Us("transitioncancel"),Pb=Us("transitionend"),Ob=new Map,Gm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gm.push("scrollEnd");function Ki(e,t){Ob.set(e,t),Ds(t,[e])}var Mw=0;function Wa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Zi.identifierPrefix;var n=Mw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Oy(e){if(e==null||typeof e=="string")return e;var t=null,n=Po;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function ja(e,t){return e=Oy(e),t=Oy(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Dh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],bo=0,Y0=0;function of(){for(var e=bo,t=Y0=bo=0;t<e;){var n=Ui[t];Ui[t++]=null;var i=Ui[t];Ui[t++]=null;var a=Ui[t];Ui[t++]=null;var r=Ui[t];if(Ui[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&zb(n,a,r)}}function lf(e,t,n,i){Ui[bo++]=e,Ui[bo++]=t,Ui[bo++]=n,Ui[bo++]=i,Y0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Z0(e,t,n,i){return lf(e,t,n,i),Uh(e)}function Ls(e,t){return lf(e,null,null,t),Uh(e)}function zb(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-_i(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function Uh(e){if(50<fc)throw fc=0,xh=null,Error(nt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var So={};function Tw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,i){return new Tw(e,t,n,i)}function K0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Va(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bb(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hh(e,t,n,i,a,r){var s=0;if(i=e,typeof i=="function")K0(i)&&(s=1);else if(typeof i=="string")s=JA(e,n,ba.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Nm:return e=ii(31,n,t,a),e.elementType=Nm,e.lanes=r,e;case mo:return _s(n.children,a,r,t);case eb:s=8,a|=24;break;case Am:return e=ii(12,n,t,a|2),e.elementType=Am,e.lanes=r,e;case Cm:return e=ii(13,n,t,a),e.elementType=Cm,e.lanes=r,e;case Rm:return e=ii(19,n,t,a),e.elementType=Rm,e.lanes=r,e;case hE:case Dm:return e=a|32,e=ii(30,n,t,e),e.elementType=Dm,e.lanes=r,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case va:s=10;break t;case nb:s=9;break t;case O0:s=11;break t;case z0:s=14;break t;case gr:s=16,i=null;break t}s=29,n=Error(nt(130,e===null?"null":typeof e,"")),i=null}return t=ii(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function _s(e,t,n,i){return e=ii(7,e,i,t),e.lanes=n,e}function sm(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function Fb(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function om(e,t,n){return t=ii(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zy=new WeakMap;function Oi(e,t){if(typeof e=="object"&&e!==null){var n=zy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:my(t)},zy.set(e,t),t)}return{value:e,source:t,stack:my(t)}}var Mo=[],To=0,Lh=null,vc=0,Li=[],Ii=0,Pr=null,ya=1,xa="";function ka(e,t){Mo[To++]=vc,Mo[To++]=Lh,Lh=e,vc=t}function kb(e,t,n){Li[Ii++]=ya,Li[Ii++]=xa,Li[Ii++]=Pr,Pr=e;var i=ya;e=xa;var a=32-_i(i)-1;i&=~(1<<a),n+=1;var r=32-_i(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,ya=1<<32-_i(t)+a|n<<a|i,xa=r+e}else ya=1<<r|n<<a|i,xa=e}function cf(e){e.return!==null&&(ka(e,1),kb(e,1,0))}function J0(e){for(;e===Lh;)Lh=Mo[--To],Mo[To]=null,vc=Mo[--To],Mo[To]=null;for(;e===Pr;)Pr=Li[--Ii],Li[Ii]=null,xa=Li[--Ii],Li[Ii]=null,ya=Li[--Ii],Li[Ii]=null}function Hb(e,t){Li[Ii++]=ya,Li[Ii++]=xa,Li[Ii++]=Pr,ya=t.id,xa=t.overflow,Pr=e}var vn=null,Ie=null,jt=!1,wr=null,zi=!1,Xm=Error(nt(519));function Or(e){var t=Error(nt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _c(Oi(t,e)),Xm}function By(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Tn]=e,t[si]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<Sc.length;n++)ne(Sc[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),vb(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),yb(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||MS(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=_a),t=!0):t=!1,t||Or(e,!0)}function Ih(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:vn=vn.return}}function lo(e){if(e!==vn)return!1;if(!jt)return Ih(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||C0(e.type,e.memoizedProps)),n=!n),n&&Ie&&Or(e),Ih(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Ie=Ix(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Ie=Ix(e)}else t===27?(t=Ie,Hr(e.type)?(e=U0,U0=null,Ie=e):Ie=t):Ie=vn?Bi(e.stateNode.nextSibling):null;return!0}function Ss(){Ie=vn=null,jt=!1}function lm(){var e=wr;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),wr=null),e}function _c(e){wr===null?wr=[e]:wr.push(e)}var Wm=Ta(null),Is=null,Ha=null;function br(e,t,n){Pe(Wm,t._currentValue),t._currentValue=n}function Ga(e){e._currentValue=Wm.current,wn(Wm)}function fh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function qm(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),fh(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(nt(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),fh(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fh(a.return,n,e),s=a.child,s=s!==null?s.sibling:null):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ms(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(nt(387));if(s=s.memoizedProps,s!==null){var o=a.type;xi(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===wh.current){if(s=a.alternate,s===null)throw Error(nt(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}a=a.return}return e!==null&&qm(t,e,n,i),t.flags|=262144,e!==null}function Ph(e){for(e=e.firstContext;e!==null;){if(!xi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){Is=e,Ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Vb(Is,e)}function Zu(e,t){return Is===null&&Ts(e),Vb(e,t)}function Vb(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ha===null){if(e===null)throw Error(nt(308));Ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ha=Ha.next=t;return n}var Ew=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ww=ln.unstable_scheduleCallback,Aw=ln.unstable_NormalPriority,tn={$$typeof:va,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function j0(){return{controller:new Ew,data:new Map,refCount:0}}function Pc(e){e.refCount--,e.refCount===0&&ww(Aw,function(){e.controller.abort()})}function Fy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Ql=null;function Cw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ic=null,Ym=0,Es=0,Ro=null;function Rw(e,t){if(ic===null){var n=ic=[];Ym=0,Es=Eg(),Ro={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ym++,t.then(ky,ky),t}function ky(){if(--Ym===0&&(Ql=null,ic!==null)){Ro!==null&&(Ro.status="fulfilled");var e=ic;ic=null,Es=0,Ro=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Hy=Ft.S;Ft.S=function(e,t){if(sS=gi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rw(e,t),Ql!==null)for(var n=Go;n!==null;)Fy(n,Ql),n=n.next;if(n=e.types,n!==null){for(var i=Go;i!==null;)Fy(i,n),i=i.next;if(Es!==0){i=Ql,i===null&&(i=Ql=[]);for(var a=0;a<n.length;a++){var r=n[a];i.indexOf(r)===-1&&i.push(r)}}}Hy!==null&&Hy(e,t)};var ys=Ta(null);function Q0(){var e=ys.current;return e!==null?e:Ae.pooledCache}function dh(e,t){t===null?Pe(ys,ys.current):Pe(ys,t.pool)}function Gb(){var e=Q0();return e===null?null:{parent:tn._currentValue,pool:e}}var jo=Error(nt(460)),$0=Error(nt(474)),uf=Error(nt(542)),Oh={then:function(){}};function Vy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xb(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_a,_a),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xy(e),e===void 0&&!("reason"in t)?Error(nt(600)):e;default:if(typeof t.status=="string")t.then(_a,_a);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(nt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xy(e),e}throw xs=t,jo}}function ds(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xs=n,jo):n}}var xs=null;function Gy(){if(xs===null)throw Error(nt(459));var e=xs;return xs=null,e}function Xy(e){if(e===jo||e===uf)throw Error(nt(483))}var No=null,yc=0;function Ku(e){var t=yc;return yc+=1,No===null&&(No=[]),Xb(No,e,t)}function dr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ju(e,t){throw t.$$typeof===uE?Error(nt(525)):(e=Object.prototype.toString.call(t),Error(nt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wb(e){function t(f,v){if(e){var M=f.deletions;M===null?(f.deletions=[v],f.flags|=16):M.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function a(f,v){return f=Va(f,v),f.index=0,f.sibling=null,f}function r(f,v,M){return f.index=M,e?(M=f.alternate,M!==null?(M=M.index,M<v?(f.flags|=2,v):M):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function s(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,M,_){return v===null||v.tag!==6?(v=sm(M,f.mode,_),v.return=f,v):(v=a(v,M),v.return=f,v)}function l(f,v,M,_){var x=M.type;return x===mo?(f=h(f,v,M.props.children,_,M.key),dr(f,M),f):v!==null&&(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===gr&&ds(x)===v.type)?(v=a(v,M.props),dr(v,M),v.return=f,v):(v=hh(M.type,M.key,M.props,null,f.mode,_),dr(v,M),v.return=f,v)}function c(f,v,M,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=om(M,f.mode,_),v.return=f,v):(v=a(v,M.children||[]),v.return=f,v)}function h(f,v,M,_,x){return v===null||v.tag!==7?(v=_s(M,f.mode,_,x),v.return=f,v):(v=a(v,M),v.return=f,v)}function p(f,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=sm(""+v,f.mode,M),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ku:return M=hh(v.type,v.key,v.props,null,f.mode,M),dr(M,v),M.return=f,M;case Kl:return v=om(v,f.mode,M),v.return=f,v;case gr:return v=ds(v),p(f,v,M)}if(Jl(v)||Gl(v))return v=_s(v,f.mode,M,null),v.return=f,v;if(typeof v.then=="function")return p(f,Ku(v),M);if(v.$$typeof===va)return p(f,Zu(f,v),M);Ju(f,v)}return null}function u(f,v,M,_){var x=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return x!==null?null:o(f,v,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ku:return M.key===x?l(f,v,M,_):null;case Kl:return M.key===x?c(f,v,M,_):null;case gr:return M=ds(M),u(f,v,M,_)}if(Jl(M)||Gl(M))return x!==null?null:h(f,v,M,_,null);if(typeof M.then=="function")return u(f,v,Ku(M),_);if(M.$$typeof===va)return u(f,v,Zu(f,M),_);Ju(f,M)}return null}function d(f,v,M,_,x){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(M)||null,o(v,f,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ku:return f=f.get(_.key===null?M:_.key)||null,l(v,f,_,x);case Kl:return f=f.get(_.key===null?M:_.key)||null,c(v,f,_,x);case gr:return _=ds(_),d(f,v,M,_,x)}if(Jl(_)||Gl(_))return f=f.get(M)||null,h(v,f,_,x,null);if(typeof _.then=="function")return d(f,v,M,Ku(_),x);if(_.$$typeof===va)return d(f,v,M,Zu(v,_),x);Ju(v,_)}return null}function m(f,v,M,_){for(var x=null,T=null,w=v,y=v=0,A=null;w!==null&&y<M.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var R=u(f,w,M[y],_);if(R===null){w===null&&(w=A);break}e&&w&&R.alternate===null&&t(f,w),v=r(R,v,y),T===null?x=R:T.sibling=R,T=R,w=A}if(y===M.length)return n(f,w),jt&&ka(f,y),x;if(w===null){for(;y<M.length;y++)w=p(f,M[y],_),w!==null&&(v=r(w,v,y),T===null?x=w:T.sibling=w,T=w);return jt&&ka(f,y),x}for(w=i(w);y<M.length;y++)A=d(w,f,y,M[y],_),A!==null&&(e&&(R=A.alternate,R!==null&&w.delete(R.key===null?y:R.key)),v=r(A,v,y),T===null?x=A:T.sibling=A,T=A);return e&&w.forEach(function(U){return t(f,U)}),jt&&ka(f,y),x}function b(f,v,M,_){if(M==null)throw Error(nt(151));for(var x=null,T=null,w=v,y=v=0,A=null,R=M.next();w!==null&&!R.done;y++,R=M.next()){w.index>y?(A=w,w=null):A=w.sibling;var U=u(f,w,R.value,_);if(U===null){w===null&&(w=A);break}e&&w&&U.alternate===null&&t(f,w),v=r(U,v,y),T===null?x=U:T.sibling=U,T=U,w=A}if(R.done)return n(f,w),jt&&ka(f,y),x;if(w===null){for(;!R.done;y++,R=M.next())R=p(f,R.value,_),R!==null&&(v=r(R,v,y),T===null?x=R:T.sibling=R,T=R);return jt&&ka(f,y),x}for(w=i(w);!R.done;y++,R=M.next())R=d(w,f,y,R.value,_),R!==null&&(e&&(A=R.alternate,A!==null&&w.delete(A.key===null?y:A.key)),v=r(R,v,y),T===null?x=R:T.sibling=R,T=R);return e&&w.forEach(function(D){return t(f,D)}),jt&&ka(f,y),x}function g(f,v,M,_){if(typeof M=="object"&&M!==null&&M.type===mo&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ku:t:{for(var x=M.key;v!==null;){if(v.key===x){if(x=M.type,x===mo){if(v.tag===7){n(f,v.sibling),_=a(v,M.props.children),dr(_,M),_.return=f,f=_;break t}}else if(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===gr&&ds(x)===v.type){n(f,v.sibling),_=a(v,M.props),dr(_,M),_.return=f,f=_;break t}n(f,v);break}else t(f,v);v=v.sibling}M.type===mo?(_=_s(M.props.children,f.mode,_,M.key),dr(_,M),_.return=f,f=_):(_=hh(M.type,M.key,M.props,null,f.mode,_),dr(_,M),_.return=f,f=_)}return s(f);case Kl:t:{for(x=M.key;v!==null;){if(v.key===x)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(f,v.sibling),_=a(v,M.children||[]),_.return=f,f=_;break t}else{n(f,v);break}else t(f,v);v=v.sibling}_=om(M,f.mode,_),_.return=f,f=_}return s(f);case gr:return M=ds(M),g(f,v,M,_)}if(Jl(M))return m(f,v,M,_);if(Gl(M)){if(x=Gl(M),typeof x!="function")throw Error(nt(150));return M=x.call(M),b(f,v,M,_)}if(typeof M.then=="function")return g(f,v,Ku(M),_);if(M.$$typeof===va)return g(f,v,Zu(f,M),_);Ju(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(f,v.sibling),_=a(v,M),_.return=f,f=_):(n(f,v),_=sm(M,f.mode,_),_.return=f,f=_),s(f)):n(f,v)}return function(f,v,M,_){try{yc=0;var x=g(f,v,M,_);return No=null,x}catch(w){if(w===jo||w===uf)throw w;var T=ii(29,w,null,f.mode);return T.lanes=_,T.return=f,T}}}var ws=Wb(!0),qb=Wb(!1),vr=!1;function tg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Uh(e),zb(e,null,n),t}return lf(e,i,t,n),Uh(e)}function ac(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,cb(e,n)}}function cm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Km=!1;function rc(){if(Km){var e=Ro;if(e!==null)throw e}}function sc(e,t,n,i){Km=!1;var a=e.updateQueue;vr=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,h=c=l=null,o=r;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ae&u)===u:(i&u)===u){u!==0&&u===Es&&(Km=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var m=e,b=o;u=t;var g=n;switch(b.tag){case 1:if(m=b.payload,typeof m=="function"){p=m.call(g,p,u);break t}p=m;break t;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,u=typeof m=="function"?m.call(g,p,u):m,u==null)break t;p=Ce({},p,u);break t;case 2:vr=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),Fr|=s,e.lanes=s,e.memoizedState=p}}function Yb(e,t){if(typeof e!="function")throw Error(nt(191,e));e.call(t)}function Zb(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Yb(n[e],t)}var zr=Ta(null),zh=Ta(0);function Wy(e,t){e=Ka,Pe(zh,e),Pe(zr,t),Ka=e|t.baseLanes}function Jm(){Pe(zh,Ka),Pe(zr,zr.current)}function eg(){Ka=zh.current,wn(zr),wn(zh)}var Rn=Ta(null),On=null;function Rr(e){var t=e.alternate;Pe(An,An.current&1),Pe(Rn,e),On===null&&(t===null||zr.current!==null||t.memoizedState!==null)&&(On=e)}function jm(e){Pe(An,An.current),Pe(Rn,e),On===null&&(On=e)}function Kb(e){e.tag===22?(Pe(An,An.current),Pe(Rn,e),On===null&&(On=e)):Nr()}function Nr(){Pe(An,An.current),Pe(Rn,Rn.current)}function di(e){wn(Rn),On===e&&(On=null),wn(An)}var An=Ta(0);function xc(e,t){Pe(Rn,Rn.current),Pe(An,t)}function ng(e){wn(An),wn(Rn),On===e&&(On=null)}function Bh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||D0(n)||Rg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=0,Yt=null,Ee=null,$e=null,Fh=!1,Do=!1,As=!1,kh=0,bc=0,Uo=null,Dw=0;function We(){throw Error(nt(321))}function ig(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xi(e[n],t[n]))return!1;return!0}function ag(e,t,n,i,a,r){return qa=r,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ft.H=e===null||e.memoizedState===null?w1:A1,As=!1,r=n(i,a),As=!1,Do&&(r=jb(t,n,i,a)),Jb(e),r}function Jb(e){Ft.H=Hh;var t=Ee!==null&&Ee.next!==null;if(qa=0,$e=Ee=Yt=null,Fh=!1,bc=0,Uo=null,t)throw Error(nt(300));e===null||en||(e=e.dependencies,e!==null&&Ph(e)&&(en=!0))}function jb(e,t,n,i){Yt=e;var a=0;do{if(Do&&(Uo=null),bc=0,Do=!1,25<=a)throw Error(nt(301));if(a+=1,$e=Ee=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ft.H=Fw,r=t(n,i)}while(Do);return r}function Uw(){var e=Ft.H,t=e.useState()[0];return t=typeof t.then=="function"?Oc(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(Yt.flags|=1024),t}function rg(){var e=kh!==0;return kh=0,e}function sg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function og(e){if(Fh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fh=!1}qa=0,$e=Ee=Yt=null,Do=!1,bc=kh=0,Uo=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Yt.memoizedState=$e=e:$e=$e.next=e,$e}function Je(){if(Ee===null){var e=Yt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=$e===null?Yt.memoizedState:$e.next;if(t!==null)$e=t,Ee=e;else{if(e===null)throw Yt.alternate===null?Error(nt(467)):Error(nt(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},$e===null?Yt.memoizedState=$e=e:$e=$e.next=e}return $e}function hf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oc(e){var t=bc;return bc+=1,Uo===null&&(Uo=[]),e=Xb(Uo,e,t),t=Yt,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,Ft.H=t===null||t.memoizedState===null?w1:A1),e}function ff(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oc(e);if(e.$$typeof===dE)return;if(e.$$typeof===va)return En(e)}throw Error(nt(438,String(e)))}function lg(e){var t=null,n=Yt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hf(),Yt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=fE;return t.index++,n}function Ya(e,t){return typeof t=="function"?t(e):t}function ph(e){var t=Je();return cg(t,Ee,e)}function cg(e,t,n){var i=e.queue;if(i===null)throw Error(nt(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ae&p)===p:(qa&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Es&&(h=!0);else if((qa&u)===u){c=c.next,u===Es&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,s=r):l=l.next=p,Yt.lanes|=u,Fr|=u;p=c.action,As&&n(r,p),r=c.hasEagerState?c.eagerState:n(r,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,Yt.lanes|=p,Fr|=p;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!xi(r,e.memoizedState)&&(en=!0,h&&(n=Ro,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function um(e){var t=Je(),n=t.queue;if(n===null)throw Error(nt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);xi(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Qb(e,t,n){var i=Yt,a=Je(),r=jt;if(r){if(n===void 0)throw Error(nt(407));n=n()}else n=t();var s=!xi((Ee||a).memoizedState,n);if(s&&(a.memoizedState=n,en=!0),a=a.queue,ug(e1.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||s||$e!==null&&($e.memoizedState.tag&1)!==0,Fo(e?9:8,{destroy:void 0},t1.bind(null,i,a,n,t),null),e){if(i.flags|=2048,Ae===null)throw Error(nt(349));r||(qa&127)!==0||$b(i,t,n)}return n}function $b(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Yt.updateQueue,t===null?(t=hf(),Yt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function t1(e,t,n,i){t.value=n,t.getSnapshot=i,n1(t)&&i1(e)}function e1(e,t,n){return n(function(){n1(t)&&i1(e)})}function n1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xi(e,n)}catch{return!0}}function i1(e){var t=Ls(e,2);t!==null&&ai(t,e,2)}function Qm(e){var t=Yn();if(typeof e=="function"){var n=e;if(e=n(),As){yr(!0);try{n()}finally{yr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:e},t}function a1(e,t,n,i){return e.baseState=n,cg(e,Ee,typeof i=="function"?i:Ya)}function Lw(e,t,n,i,a){if(pf(e))throw Error(nt(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ft.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,r1(t,r)):(r.next=n.next,t.pending=n.next=r)}}function r1(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Ft.T,s={};s.types=r!==null?r.types:null,Ft.T=s;try{var o=n(a,i),l=Ft.S;l!==null&&l(s,o),qy(e,t,o)}catch(c){$m(e,t,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),Ft.T=r}}else try{r=n(a,i),qy(e,t,r)}catch(c){$m(e,t,c)}}function qy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yy(e,t,i)},function(i){return $m(e,t,i)}):Yy(e,t,n)}function Yy(e,t,n){t.status="fulfilled",t.value=n,s1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,r1(e,n)))}function $m(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,s1(t),t=t.next;while(t!==i)}e.action=null}function s1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function o1(e,t){return t}function Zy(e,t){if(jt){var n=Ae.formState;if(n!==null){t:{var i=Yt;if(jt){if(Ie){e:{for(var a=Ie,r=zi;a.nodeType!==8;){if(!r){a=null;break e}if(a=Bi(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ie=Bi(a.nextSibling),i=a.data==="F!";break t}}Or(i)}i=!1}i&&(t=n[0])}}return n=Yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o1,lastRenderedState:t},n.queue=i,n=M1.bind(null,Yt,i),i.dispatch=n,i=Qm(!1),r=pg.bind(null,Yt,!1,i.queue),i=Yn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Lw.bind(null,Yt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ky(e){var t=Je();return l1(t,Ee,e)}function l1(e,t,n){if(t=cg(e,t,o1)[0],e=ph(Ya)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Oc(t)}catch(s){throw s===jo?uf:s}else i=t;t=Je();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Yt.flags|=2048,Fo(9,{destroy:void 0},Iw.bind(null,a,n),null)),[i,r,e]}function Iw(e,t){e.action=t}function Jy(e){var t=Je(),n=Ee;if(n!==null)return l1(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Fo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Yt.updateQueue,t===null&&(t=hf(),Yt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function c1(){return Je().memoizedState}function mh(e,t,n,i){var a=Yn();Yt.flags|=e,a.memoizedState=Fo(1|t,{destroy:void 0},n,i===void 0?null:i)}function df(e,t,n,i){var a=Je();i=i===void 0?null:i;var r=a.memoizedState.inst;Ee!==null&&i!==null&&ig(i,Ee.memoizedState.deps)?a.memoizedState=Fo(t,r,n,i):(Yt.flags|=e,a.memoizedState=Fo(1|t,r,n,i))}function jy(e,t){mh(8390656,8,e,t)}function ug(e,t){df(2048,8,e,t)}function Pw(e){Yt.flags|=4;var t=Yt.updateQueue;if(t===null)t=hf(),Yt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function u1(e){var t=Je().memoizedState;return Pw({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(nt(440));return t.impl.apply(void 0,arguments)}}function h1(e,t){return df(4,2,e,t)}function f1(e,t){return df(4,4,e,t)}function d1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function p1(e,t,n){n=n!=null?n.concat([e]):null,df(4,4,d1.bind(null,t,e),n)}function hg(){}function m1(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ig(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function g1(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ig(t,i[1]))return i[0];if(i=e(),As){yr(!0);try{e()}finally{yr(!1)}}return n.memoizedState=[i,t],i}function fg(e,t,n){return n===void 0||(qa&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=lS(),Yt.lanes|=e,Fr|=e,n)}function v1(e,t,n,i){return xi(n,t)?n:zr.current!==null?(e=fg(e,n,i),xi(e,t)||(en=!0),e):(qa&106)===0||(qa&1073741824)!==0&&(ae&261930)===0?(en=!0,e.memoizedState=n):(e=lS(),Yt.lanes|=e,Fr|=e,t)}function _1(e,t,n,i,a){var r=pe.p;pe.p=r!==0&&8>r?r:8;var s=Ft.T,o={};o.types=s!==null?s.types:null,Ft.T=o,pg(e,!1,t,n);try{var l=a(),c=Ft.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Nw(l,i);oc(e,t,h,yi(e))}else oc(e,t,i,yi(e))}catch(p){oc(e,t,{then:function(){},status:"rejected",reason:p},yi())}finally{pe.p=r,s!==null&&o.types!==null&&(s.types=o.types),Ft.T=s}}function Ow(){}function t0(e,t,n,i){if(e.tag!==5)throw Error(nt(476));var a=y1(e).queue;_1(e,a,t,vs,n===null?Ow:function(){return x1(e),n(i)})}function y1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:vs,baseState:vs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:vs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function x1(e){var t=y1(e);t.next===null&&(t=e.alternate.memoizedState),oc(e,t.next.queue,{},yi())}function dg(){return En(qo)}function b1(){return Je().memoizedState}function S1(){return Je().memoizedState}function zw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yi();e=Ar(n);var i=Cr(t,e,n);i!==null&&(ai(i,t,n),ac(i,t,n)),t={cache:j0()},e.payload=t;return}t=t.return}}function Bw(e,t,n){var i=yi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pf(e)?T1(t,n):(n=Z0(e,t,n,i),n!==null&&(ai(n,e,i),E1(n,t,i)))}function M1(e,t,n){var i=yi();oc(e,t,n,i)}function oc(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pf(e))T1(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,xi(o,s))return lf(e,t,a,0),Ae===null&&of(),!1}catch{}if(n=Z0(e,t,a,i),n!==null)return ai(n,e,i),E1(n,t,i),!0}return!1}function pg(e,t,n,i){if(i={lane:2,revertLane:Eg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},pf(e)){if(t)throw Error(nt(479))}else t=Z0(e,n,i,2),t!==null&&ai(t,e,2)}function pf(e){var t=e.alternate;return e===Yt||t!==null&&t===Yt}function T1(e,t){Do=Fh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,cb(e,n)}}var Hh={readContext:En,use:ff,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We,useEffectEvent:We},w1={readContext:En,use:ff,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:jy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mh(4194308,4,d1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mh(4194308,4,e,t)},useInsertionEffect:function(e,t){mh(4,2,e,t)},useMemo:function(e,t){var n=Yn();t=t===void 0?null:t;var i=e();if(As){yr(!0);try{e()}finally{yr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Yn();if(n!==void 0){var a=n(t);if(As){yr(!0);try{n(t)}finally{yr(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Bw.bind(null,Yt,e),[i.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:function(e){e=Qm(e);var t=e.queue,n=M1.bind(null,Yt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hg,useDeferredValue:function(e,t){var n=Yn();return fg(n,e,t)},useTransition:function(){var e=Qm(!1);return e=_1.bind(null,Yt,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Yt,a=Yn();if(jt){if(n===void 0)throw Error(nt(407));n=n()}else{if(n=t(),Ae===null)throw Error(nt(349));(ae&127)!==0||$b(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,jy(e1.bind(null,i,r,e),[e]),i.flags|=2048,Fo(9,{destroy:void 0},t1.bind(null,i,r,n,t),null),n},useId:function(){var e=Yn(),t=Ae.identifierPrefix;if(jt){var n=xa,i=ya;n=(i&~(1<<32-_i(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=kh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Dw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:dg,useFormState:Zy,useActionState:Zy,useOptimistic:function(e){var t=Yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pg.bind(null,Yt,!0,n),n.dispatch=t,[e,t]},useMemoCache:lg,useCacheRefresh:function(){return Yn().memoizedState=zw.bind(null,Yt)},useEffectEvent:function(e){var t=Yn(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(nt(440));return n.impl.apply(void 0,arguments)}}},A1={readContext:En,use:ff,useCallback:m1,useContext:En,useEffect:ug,useImperativeHandle:p1,useInsertionEffect:h1,useLayoutEffect:f1,useMemo:g1,useReducer:ph,useRef:c1,useState:function(){return ph(Ya)},useDebugValue:hg,useDeferredValue:function(e,t){var n=Je();return v1(n,Ee.memoizedState,e,t)},useTransition:function(){var e=ph(Ya)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Oc(e),t]},useSyncExternalStore:Qb,useId:b1,useHostTransitionStatus:dg,useFormState:Ky,useActionState:Ky,useOptimistic:function(e,t){var n=Je();return a1(n,Ee,e,t)},useMemoCache:lg,useCacheRefresh:S1,useEffectEvent:u1},Fw={readContext:En,use:ff,useCallback:m1,useContext:En,useEffect:ug,useImperativeHandle:p1,useInsertionEffect:h1,useLayoutEffect:f1,useMemo:g1,useReducer:um,useRef:c1,useState:function(){return um(Ya)},useDebugValue:hg,useDeferredValue:function(e,t){var n=Je();return Ee===null?fg(n,e,t):v1(n,Ee.memoizedState,e,t)},useTransition:function(){var e=um(Ya)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Oc(e),t]},useSyncExternalStore:Qb,useId:b1,useHostTransitionStatus:dg,useFormState:Jy,useActionState:Jy,useOptimistic:function(e,t){var n=Je();return Ee!==null?a1(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lg,useCacheRefresh:S1,useEffectEvent:u1};function hm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var e0={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=yi(),a=Ar(i);a.payload=t,n!=null&&(a.callback=n),t=Cr(e,a,i),t!==null&&(ai(t,e,i),ac(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=yi(),a=Ar(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cr(e,a,i),t!==null&&(ai(t,e,i),ac(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yi(),i=Ar(n);i.tag=2,t!=null&&(i.callback=t),t=Cr(e,i,n),t!==null&&(ai(t,e,n),ac(t,e,n))}};function Qy(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!gc(n,i)||!gc(a,r):!0}function $y(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&e0.enqueueReplaceState(t,t.state,null)}function Cs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function C1(e){Dh(e)}function R1(e){console.error(e)}function N1(e){Dh(e)}function Vh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function tx(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function n0(e,t,n){return n=Ar(n),n.tag=3,n.payload={element:null},n.callback=function(){Vh(e,t)},n}function D1(e){return e=Ar(e),e.tag=3,e}function U1(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){tx(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){tx(t,n,i),typeof a!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function kw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ms(t,n,a,!0),n=Rn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return On===null?Jh():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Oh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),_m(e,i,a)),!1;case 22:return n.flags|=65536,i===Oh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),_m(e,i,a)),!1}throw Error(nt(435,n.tag))}return _m(e,i,a),Jh(),!1}if(jt)return t=Rn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Xm&&(e=Error(nt(422),{cause:i}),_c(Oi(e,n)))):(i!==Xm&&(t=Error(nt(423),{cause:i}),_c(Oi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Oi(i,n),a=n0(e.stateNode,i,a),cm(e,a),qe!==4&&(qe=2)),!1;var r=Error(nt(520),{cause:i});if(r=Oi(r,n),hc===null?hc=[r]:hc.push(r),qe!==4&&(qe=2),t===null)return!0;i=Oi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=n0(n.stateNode,i,e),cm(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=D1(a),U1(a,e,n,i),cm(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var mg=Error(nt(461)),en=!1;function sn(e,t,n,i){t.child=e===null?qb(t,null,n,i):ws(t,e.child,n,i)}function ex(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Ts(t),i=ag(e,t,n,s,r,a),o=rg(),e!==null&&!en?(sg(e,t,a),Za(e,t,a)):(jt&&o&&cf(t),t.flags|=1,sn(e,t,i,a),t.child)}function nx(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!K0(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,L1(e,t,r,i,a)):(e=hh(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!vg(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:gc,n(s,i)&&e.ref===t.ref)return Za(e,t,a)}return t.flags|=1,e=Va(r,i),e.ref=t.ref,e.return=t,t.child=e}function L1(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(gc(r,i)&&e.ref===t.ref)if(en=!1,t.pendingProps=i=r,vg(e,a))(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,Za(e,t,a)}return i0(e,t,n,i,a)}function I1(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return ix(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&dh(t,r!==null?r.cachePool:null),r!==null?Wy(t,r):Jm(),Kb(t);else return i=t.lanes=536870912,ix(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(dh(t,r.cachePool),Wy(t,r),Nr(),t.memoizedState=null):(e!==null&&dh(t,null),Jm(),Nr());return sn(e,t,a,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ix(e,t,n,i,a){var r=Q0();return r=r===null?null:{parent:tn._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&dh(t,null),Jm(),Kb(t),e!==null&&Ms(e,t,i,!0),t.childLanes=a,null}function gh(e,t){return t=mf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ax(e,t,n){return ws(t,e.child,null,n),e=gh(t,t.pendingProps),e.flags|=2,di(t),t.memoizedState=null,e}function Hw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(jt){if(i.mode==="hidden")return e=gh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},lc(null,e);if(jm(t),(e=Ie)?(e=IS(e,zi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pr!==null?{id:ya,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},n=Fb(e),n.return=t,t.child=n,vn=t,Ie=null)):e=null,e===null)throw Or(t);return t.lanes=536870912,null}return gh(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(jm(t),a)if(t.flags&256)t.flags&=-257,t=ax(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(nt(558));else if(en||Ms(e,t,n,!1),a=(n&e.childLanes)!==0,en||a){if(zr.current===null){if(i=Ae,i!==null&&(s=ub(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Ls(e,s),ai(i,e,s),mg;Jh()}t=ax(e,t,n)}else e=r.treeContext,Ie=Bi(s.nextSibling),vn=t,jt=!0,wr=null,zi=!1,e!==null&&Hb(t,e),t=gh(t,i),t.flags|=134221824;return t}return e=Va(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(nt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function i0(e,t,n,i,a){return Ts(t),n=ag(e,t,n,i,void 0,a),i=rg(),e!==null&&!en?(sg(e,t,a),Za(e,t,a)):(jt&&i&&cf(t),t.flags|=1,sn(e,t,n,a),t.child)}function rx(e,t,n,i,a,r){return Ts(t),t.updateQueue=null,n=jb(t,i,n,a),Jb(e),i=rg(),e!==null&&!en?(sg(e,t,r),Za(e,t,r)):(jt&&i&&cf(t),t.flags|=1,sn(e,t,n,r),t.child)}function sx(e,t,n,i,a){if(Ts(t),t.stateNode===null){var r=So,s=n.contextType;typeof s=="object"&&s!==null&&(r=En(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=e0,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},tg(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?En(s):So,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(hm(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&e0.enqueueReplaceState(r,r.state,null),sc(t,i,r,a),rc(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Cs(n,o);r.props=l;var c=r.context,h=n.contextType;s=So,typeof h=="object"&&h!==null&&(s=En(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&$y(t,r,i,s),vr=!1;var u=t.memoizedState;r.state=u,sc(t,i,r,a),rc(),c=t.memoizedState,o||u!==c||vr?(typeof p=="function"&&(hm(t,n,p,i),c=t.memoizedState),(l=vr||Qy(t,n,l,i,u,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Zm(e,t),s=t.memoizedProps,h=Cs(n,s),r.props=h,p=t.pendingProps,u=r.context,c=n.contextType,l=So,typeof c=="object"&&c!==null&&(l=En(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||u!==l)&&$y(t,r,i,l),vr=!1,u=t.memoizedState,r.state=u,sc(t,i,r,a),rc();var d=t.memoizedState;s!==p||u!==d||vr||e!==null&&e.dependencies!==null&&Ph(e.dependencies)?(typeof o=="function"&&(hm(t,n,o,i),d=t.memoizedState),(h=vr||Qy(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Ph(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,d,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),r.props=i,r.state=d,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,uo(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ws(t,e.child,null,a),t.child=ws(t,null,n,a)):sn(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Za(e,t,a),e}function ox(e,t,n,i){return Ss(),t.flags|=256,sn(e,t,n,i),t.child}var a0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function r0(e){return{baseLanes:e,cachePool:Gb()}}function s0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=mi),e}function P1(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(An.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(a?Rr(t):Nr(),(e=Ie)?(e=IS(e,zi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pr!==null?{id:ya,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},n=Fb(e),n.return=t,t.child=n,vn=t,Ie=null)):e=null,e===null)throw Or(t);return Rg(e)?t.lanes=32:t.lanes=536870912,null}return r=i.children,i=i.fallback,a?(Nr(),a=t.mode,r=mf({mode:"hidden",children:r},a),i=_s(i,a,n,null),r.return=t,i.return=t,r.sibling=i,t.child=r,i=t.child,i.memoizedState=r0(n),i.childLanes=s0(e,s,n),t.memoizedState=a0,lc(null,i)):(Rr(t),gg(t,r))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return Vw(e,t,r,s,i,l,o,n)}return a?(Nr(),a=i.fallback,r=t.mode,o=e.child,l=o.sibling,i=Va(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Va(l,a):(a=_s(a,r,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,lc(null,i),i=t.child,a=e.child.memoizedState,a===null?a=r0(n):(r=a.cachePool,r!==null?(o=tn._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=Gb(),a={baseLanes:a.baseLanes|n,cachePool:r}),i.memoizedState=a,i.childLanes=s0(e,s,n),t.memoizedState=a0,lc(e.child,i)):(Rr(t),n=e.child,e=n.sibling,n=Va(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function gg(e,t){return t=mf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mf(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function ju(e,t,n){return ws(t,e.child,null,n),e=gg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vw(e,t,n,i,a,r,s,o){if(n)return t.flags&256?(Rr(t),t.flags&=-257,ju(e,t,o)):t.memoizedState!==null?(Nr(),t.child=e.child,t.flags|=128,null):(Nr(),r=a.fallback,s=t.mode,a=mf({mode:"visible",children:a.children},s),r=_s(r,s,o,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,ws(t,e.child,null,o),a=t.child,a.memoizedState=r0(o),a.childLanes=s0(e,i,o),t.memoizedState=a0,lc(null,a));if(Rr(t),Rg(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(nt(419)),a.stack="",a.digest=i,_c({value:a,source:null,stack:null})),ju(e,t,o)}if(en||Ms(e,t,o,!1),i=(o&e.childLanes)!==0,en||i){if(zr.current!==null)return ju(e,t,o);if(i=Ae,i!==null&&(a=ub(i,o),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ls(e,a),ai(i,e,a),mg;return D0(r)||Jh(),ju(e,t,o)}return D0(r)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Ie=Bi(r.nextSibling),vn=t,jt=!0,wr=null,zi=!1,e!==null&&Hb(t,e),t=gg(t,a.children),t.flags|=134221824,t)}function lx(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fh(e.return,t,n)}function cx(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bh(n)===null&&(t=e),e=e.sibling}return t}function Qu(e,t,n,i,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function fm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function o0(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=An.current;if(t.flags&128)return xc(t,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,xc(t,s),a==="backwards"&&e!==null?(fm(e),sn(e,t,i,n),fm(e)):sn(e,t,i,n),i=jt?vc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lx(e,n,t);else if(e.tag===19)lx(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=cx(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,fm(t)),Qu(t,!0,a,null,r,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Bh(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Qu(t,!0,n,null,r,i);break;case"together":Qu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=cx(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Qu(t,!1,a,n,r,i)}return t.child}function ux(e,t,n){var i=t.pendingProps;return br(t,t.type,i.value),sn(e,t,i.children,n),t.child}function Za(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ms(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(nt(153));if(t.child!==null){for(e=t.child,n=Va(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Va(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ph(e)))}function Gw(e,t,n){switch(t.tag){case 3:Ah(t,t.stateNode.containerInfo),br(t,tn,e.memoizedState.cache),Ss();break;case 27:case 5:Im(t);break;case 4:Ah(t,t.stateNode.containerInfo);break;case 10:br(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Rr(t),t.flags|=128,null;i=Ms(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?P1(e,t,n):(Rr(t),e=Za(e,t,n),e!==null?e.sibling:null)}Rr(t);break;case 19:if(t.flags&128)return o0(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ms(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return o0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xc(t,An.current),i)break;return null;case 22:return t.lanes=0,I1(e,t,n,t.pendingProps);case 24:br(t,tn,e.memoizedState.cache)}return Za(e,t,n)}function O1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)en=!0;else{if(!vg(e,n)&&(t.flags&128)===0)return en=!1,Gw(e,t,n);en=(e.flags&131072)!==0}else en=!1,jt&&(t.flags&1048576)!==0&&kb(t,vc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ds(t.elementType),t.type=e,typeof e=="function")K0(e)?(i=Cs(e,i),t.tag=1,t=sx(null,t,e,i,n)):(t.tag=0,t=i0(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===O0){t.tag=11,t=ex(null,t,e,i,n);break t}else if(a===z0){t.tag=14,t=nx(null,t,e,i,n);break t}else if(a===va){t.tag=10,t.type=e,t=ux(null,t,n);break t}}throw t=Um(e)||e,Error(nt(306,t,""))}}return t;case 0:return i0(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Cs(i,t.pendingProps),sx(e,t,i,a,n);case 3:t:{if(Ah(t,t.stateNode.containerInfo),e===null)throw Error(nt(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Zm(e,t),sc(t,i,null,n);var s=t.memoizedState;if(i=s.cache,br(t,tn,i),i!==r.cache&&qm(t,[tn],n,!0),rc(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ox(e,t,i,n);break t}else if(i!==a){a=Oi(Error(nt(424)),t),_c(a),t=ox(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ie=Bi(e.firstChild),vn=t,jt=!0,wr=null,zi=!0,n=qb(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ss(),i===a){t=Za(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return uo(e,t),e===null?(n=zx(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(t.stateNode=ES(t.type,t.pendingProps,Er.current,t)):t.memoizedState=zx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Im(t),e===null&&jt&&(i=t.stateNode=PS(t.type,t.pendingProps,Er.current),vn=t,zi=!0,a=Ie,Hr(t.type)?(U0=a,Ie=Bi(i.firstChild)):Ie=a),sn(e,t,t.pendingProps.children,n),uo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((a=i=Ie)&&(i=PA(i,t.type,t.pendingProps,zi),i!==null?(t.stateNode=i,vn=t,Ie=Bi(i.firstChild),zi=!1,a=!0):a=!1),a||Or(t)),Im(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,C0(a,r)?i=null:s!==null&&C0(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ag(e,t,Uw,null,null,n),qo._currentValue=a),uo(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=Ie)&&(n=OA(n,t.pendingProps,zi),n!==null?(t.stateNode=n,vn=t,Ie=null,e=!0):e=!1),e||Or(t)),null;case 13:return P1(e,t,n);case 4:return Ah(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ws(t,null,i,n):sn(e,t,i,n),t.child;case 11:return ex(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,uo(e,t),sn(e,t,i,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return ux(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,Ts(t),a=En(a),i=i(a),t.flags|=1,sn(e,t,i,n),t.child;case 14:return nx(e,t,t.type,t.pendingProps,n);case 15:return L1(e,t,t.type,t.pendingProps,n);case 19:return o0(e,t,n);case 31:return Hw(e,t,n);case 22:return I1(e,t,n,t.pendingProps);case 24:return Ts(t),i=En(tn),e===null?(a=Q0(),a===null&&(a=Ae,r=j0(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},tg(t),br(t,tn,a)):((e.lanes&n)!==0&&(Zm(e,t),sc(t,null,null,n),rc()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),br(t,tn,i)):(i=r.cache,br(t,tn,i),i!==a.cache&&qm(t,[tn],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:jt&&cf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:uo(e,t),sn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(nt(156,t.tag))}function Fa(e){e.flags|=4}function dm(e,t,n,i,a){var r;if((r=(e.mode&32)!==0)&&(r=n===null?kx(t,i):kx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(hS())e.flags|=8192;else throw xs=Oh,$0}else e.flags&=-16777217}function hx(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!FS(t))if(hS())e.flags|=8192;else throw xs=Oh,$0}function $u(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ob():536870912,e.lanes|=t,ko|=t)}function Wl(e,t){if(!jt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Xw(e,t,n){var i=t.pendingProps;switch(J0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ga(tn),Oo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(lo(t)?Fa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lm())),Le(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(Fa(t),r!==null?(Le(t),hx(t,r)):(Le(t),dm(t,a,null,i,n))):r?r!==e.memoizedState?(Fa(t),Le(t),hx(t,r)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Fa(t),Le(t),dm(t,a,e,i,n)),null;case 27:if(Ch(t),n=Er.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fa(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Le(t),t.subtreeFlags&=-33554433,null}e=ba.current,lo(t)?By(t,e):(e=PS(a,i,n),t.stateNode=e,Fa(t))}return Le(t),t.subtreeFlags&=-33554433,null;case 5:if(Ch(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fa(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Le(t),t.subtreeFlags&=-33554433,null}if(r=ba.current,lo(t))By(t,r);else{var s=Tc(Er.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[Tn]=t,r[si]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;t:switch(Cn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Fa(t)}}return Le(t),t.subtreeFlags&=-33554433,dm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Fa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(nt(166));if(e=Er.current,lo(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=vn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Tn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||MS(e.nodeValue,n)),e||Or(t,!0)}else e=Tc(e).createTextNode(i),e[Tn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=lo(t),n!==null){if(e===null){if(!i)throw Error(nt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(557));e[Tn]=t}else Ss(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(di(t),t):(di(t),null);if((t.flags&128)!==0)throw Error(nt(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=lo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(nt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(nt(317));a[Tn]=t}else Ss(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else a=lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(di(t),t):(di(t),null)}return di(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$u(t,t.updateQueue),Le(t),null);case 4:return Oo(),e===null&&wg(t.stateNode.containerInfo),t.flags|=67108864,Le(t),null;case 10:return Ga(t.type),Le(t),null;case 19:if(ng(t),i=t.memoizedState,i===null)return Le(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Wl(i,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Bh(e),r!==null){for(t.flags|=128,Wl(i,!1),e=r.updateQueue,t.updateQueue=e,$u(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bb(n,e),n=n.sibling;return xc(t,An.current&1|2),jt&&ka(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&gi()>Zh&&(t.flags|=128,a=!0,Wl(i,!1),t.lanes=4194304)}else{if(!a)if(e=Bh(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,$u(t,e),Wl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!jt)return Le(t),null}else 2*gi()-i.renderingStartTime>Zh&&n!==536870912&&(t.flags|=128,a=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gi(),e.sibling=null,r=An.current,r=a?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||jt?xc(t,r):(n=r,Pe(Rn,t),Pe(An,n),On===null&&(On=t)),jt&&ka(t,i.treeForkCount),e}return Le(t),null;case 22:case 23:return di(t),eg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&$u(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&wn(ys),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ga(tn),Le(t),null;case 25:return null;case 30:return t.flags|=33554432,Le(t),null}throw Error(nt(156,t.tag))}function Ww(e,t){switch(J0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ga(tn),Oo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ch(t),null;case 31:if(t.memoizedState!==null){if(di(t),t.alternate===null)throw Error(nt(340));Ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(di(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(nt(340));Ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ng(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Oo(),null;case 10:return Ga(t.type),null;case 22:case 23:return di(t),eg(),e!==null&&wn(ys),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ga(tn),null;case 25:return null;default:return null}}function z1(e,t){switch(J0(t),t.tag){case 3:Ga(tn),Oo();break;case 26:case 27:case 5:Ch(t);break;case 4:Oo();break;case 31:t.memoizedState!==null&&di(t);break;case 13:di(t);break;case 19:ng(t);break;case 10:Ga(t.type);break;case 22:case 23:di(t),eg(),e!==null&&wn(ys);break;case 24:Ga(tn)}}function zc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Se(t,t.return,o)}}function Br(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){Se(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){Se(t,t.return,h)}}function B1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zb(t,n)}catch(i){Se(e,e.return,i)}}}function F1(e,t,n){n.props=Cs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Se(e,t,i)}}function ma(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,r=Wa(e.memoizedProps,a);(a.ref===null||a.ref.name!==r)&&(a.ref=RS(r)),i=a.ref;break;case 7:if(e.stateNode===null){var s=new bi(e);ri(e.child,!1,LA,s,void 0,void 0),e.stateNode=s}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Se(e,t,o)}}function Mn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Se(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Se(e,t,a)}else n.current=null}function Gh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)LS(e.stateNode,t[n])}function fx(e){for(var t=e.return;t!==null&&(yg(t)&&LS(e.stateNode,t.stateNode),!_g(t));)t=t.return}function cc(e){for(var t=e.return;t!==null&&(yg(t)&&IA(e.stateNode,t.stateNode),!_g(t));)t=t.return}function _g(e){return e.tag===5||e.tag===3||e.tag===27}function yg(e){return e&&e.tag===7&&e.stateNode!==null}function l0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Se(e,e.return,a)}}function pm(e,t,n){try{var i=e.stateNode;mA(i,e.type,n,t),i[si]=t}catch(a){Se(e,e.return,a)}}function k1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hr(e.type)||e.tag===4}function mm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||k1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function c0(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_a)),Gh(e,i),he=!0;else if(a!==4&&(a===27&&(Gh(e,i),i=null,Hr(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(c0(e,t,n,i),e=e.sibling;e!==null;)c0(e,t,n,i),e=e.sibling}function Xh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Gh(e,i),he=!0;else if(a!==4&&(a===27&&(Gh(e,i),i=null,Hr(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Xh(e,t,n,i),e=e.sibling;e!==null;)Xh(e,t,n,i),e=e.sibling}function H1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Cn(t,i,n),t[Tn]=e,t[si]=n}catch(r){Se(e,e.return,r)}}var Wh=!1,pi=null;function dx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Wh=!0)}var ga=null;function px(){var e=ga;return ga=null,e}var ni=0;function Qo(e,t,n,i,a){return ni=0,V1(e.child,t,n,i,a)}function V1(e,t,n,i,a){for(var r=!1;e!==null;){if(e.tag===5){var s=e.stateNode;if(i!==null){var o=R0(s);i.push(o),o.view&&(r=!0)}else r||R0(s).view&&(r=!0);Wh=!0,wS(s,ni===0?t:t+"_"+ni,n),ni++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||V1(e.child,t,n,i,a)&&(r=!0));e=e.sibling}return r}function Ma(e,t){for(;e!==null;)e.tag===5?AS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ma(e.child,t)),e=e.sibling}function vh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(vh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(nt(544));var n=t.name;t=ja(t.default,t.share),t!=="none"&&(Qo(e,n,t,null,!1)||Ma(e.child,!1))}e=e.sibling}}function u0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Wa(i,n),r=ja(i.default,n.paired?i.share:i.enter);r!=="none"?Qo(e,a,r,null,!1)?(vh(e),n.paired||t||Ho(e,i.onEnter)):Ma(e.child,!1):vh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)u0(e,t),e=e.sibling;else vh(e)}function h0(e){if(pi!==null&&pi.size!==0){var t=pi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var r=ja(n.default,n.share);if(r!=="none"&&(Qo(e,i,r,null,!1)?(r=e.stateNode,a.paired=r,r.paired=a,Ho(e,n.onShare)):Ma(e.child,!1)),t.delete(i),t.size===0)break}}}h0(e)}e=e.sibling}}}function f0(e){if(e.tag===30){var t=e.memoizedProps,n=Wa(t,e.stateNode),i=pi!==null?pi.get(n):void 0,a=ja(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Qo(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,pi.delete(n),Ho(e,t.onShare)):Ho(e,t.onExit):Ma(e.child,!1)),pi!==null&&h0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)f0(e),e=e.sibling;else pi!==null&&h0(e)}function G1(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Wa(t,e.stateNode);t=ja(t.default,t.update),e.flags&=-5,t!=="none"&&Qo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&G1(e);e=e.sibling}}function d0(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ma(e.child,!1))}d0(e)}e=e.sibling}}function _h(e){if(e.tag===30)e.stateNode.paired=null,Ma(e.child,!1),d0(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_h(e),e=e.sibling;else d0(e)}function X1(e){for(e=e.child;e!==null;)e.tag===30?Ma(e.child,!1):(e.subtreeFlags&33554432)!==0&&X1(e),e=e.sibling}function xg(e,t,n,i,a,r,s){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(r!==null&&ni<r.length){var c=r[ni],h=R0(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&wS(l,ni===0?n:n+"_"+ni,a),o&&(e.flags&4)!==0||(ga===null&&(ga=[]),ga.push(l,ni===0?i:i+"_"+ni,t.memoizedProps)),ni++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&s?e.flags|=t.flags&32:xg(e,t.child,n,i,a,r,s)&&(o=!0));t=t.sibling}return o}function W1(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Wa(n,i),r=ja(n.default,n.update);if(t){i=i.clones;var s=i===null?null:i.map(bA)}else s=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ni=0,a=xg(i,o,a,a,r,s,!1),(e.flags&4)!==0&&a&&(t||Ho(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&W1(e,t);e=e.sibling}}var pn=!1,_e=!1,fa=!1,gm=!1,mx=typeof WeakSet=="function"?WeakSet:Set,mn=null,da=!1,$l=!1,qh=!1,p0=!1;function qw(e,t,n){if(e=e.containerInfo,w0=Yo,e=Nb(e),q0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var m;u!==i||r!==0&&u.nodeType!==3||(l=o+r),u!==s||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)d=u,u=m;for(;;){if(u===e)break e;if(d===i&&++h===r&&(l=o),d===s&&++p===a&&(c=o),(m=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=m}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(A0={focusedElem:e,selectionRange:i},Yo=!1,n=(n&335544064)===n,mn=t,t=n?9270:1024;mn!==null;){if(e=mn,n&&(i=e.deletions,i!==null))for(r=0;r<i.length;r++)n&&f0(i[r]);if(e.alternate===null&&(e.flags&2)!==0)n&&dx(e),th(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&f0(i),th(n);continue}else if(i!==null&&i.memoizedState!==null){n&&dx(e),th(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,mn=i):(n&&G1(e),th(n))}}pi=null}function th(e){for(;mn!==null;){var t=mn,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var r=t.stateNode;try{var s=Cs(t.type,a);n=r.getSnapshotBeforeUpdate(s,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(o){Se(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)N0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":N0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Wa(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=ja(a.default,a.update),a!=="none"&&Qo(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(nt(163))}if(i=t.sibling,i!==null){i.return=t.return,mn=i;break}mn=t.return}}function q1(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:pa(e,n),i&4&&zc(5,n);break;case 1:if(pa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Se(n,n.return,s)}else{var a=Cs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Se(n,n.return,s)}}i&64&&B1(n),i&512&&ma(n,n.return);break;case 3:if(pa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zb(e,t)}catch(s){Se(n,n.return,s)}}break;case 27:t===null&&i&4&&H1(n);case 26:case 5:pa(e,n),t===null&&i&4&&l0(n),i&512&&ma(n,n.return);break;case 12:pa(e,n);break;case 31:pa(e,n),i&4&&J1(e,n);break;case 13:pa(e,n),i&4&&j1(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=aA.bind(null,n),zA(e,n))));break;case 22:if(i=n.memoizedState!==null||pn,!i){var r=t!==null&&t.memoizedState!==null||_e;t=pn,a=_e,pn=i,(_e=r)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Wi(e,n,i)):pa(e,n),pn=t,_e=a}break;case 30:pa(e,n),i&512&&ma(n,n.return);break;case 7:i&512&&ma(n,n.return);default:pa(e,n)}}function m0(e,t){for(e=e.child;e!==null;)Y1(e,t),e=e.sibling}function Y1(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,r=e.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;a.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Se(e,e.return,l)}g0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,he=!0}catch(l){Se(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Dx(o,!0):Dx(e.stateNode,!1)}catch(l){Se(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&m0(e,t);break;default:m0(e,t)}}function g0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:Y1(n,i);break t;case 22:n.memoizedState===null&&g0(n,i);break t;default:g0(n,i)}}e=e.sibling}}function Z1(e){var t=e.alternate;t!==null&&(e.alternate=null,Z1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,ti=!1;function Xi(e,t,n){for(n=n.child;n!==null;)K1(e,t,n),n=n.sibling}function K1(e,t,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 26:_e||Mn(n,t),Xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!_e&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_e||Mn(n,t),cc(n);var i=Ve,a=ti;Hr(n.type)&&(Ve=n.stateNode,ti=!1),Xi(e,t,n),OS(n.stateNode,n.type,n.memoizedProps),Ve=i,ti=a;break;case 5:_e||Mn(n,t),cc(n);case 6:if(n.tag===6&&cc(n),i=Ve,a=ti,Ve=null,Xi(e,t,n),Ve=i,ti=a,Ve!==null)if(ti)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode),he=!0}catch(r){Se(n,t,r)}else try{Ve.removeChild(n.stateNode),he=!0}catch(r){Se(n,t,r)}break;case 18:Ve!==null&&(ti?(e=Ve,Nx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Zo(e)):Nx(Ve,n.stateNode));break;case 4:i=Ve,a=ti,Ve=n.stateNode.containerInfo,ti=!0,Xi(e,t,n),Ve=i,ti=a;break;case 0:case 11:case 14:case 15:Br(2,n,t),_e||Br(4,n,t),Xi(e,t,n);break;case 1:_e||(Mn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&F1(n,t,i)),Xi(e,t,n);break;case 21:Xi(e,t,n);break;case 22:_e=(i=_e)||n.memoizedState!==null,Xi(e,t,n),_e=i;break;case 30:Mn(n,t),Xi(e,t,n);break;case 7:_e||Mn(n,t),Xi(e,t,n);break;default:Xi(e,t,n)}}function J1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zo(e)}catch(n){Se(t,t.return,n)}}}function j1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zo(e)}catch(n){Se(t,t.return,n)}}function Yw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mx),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mx),t;default:throw Error(nt(435,e.tag))}}function eh(e,t){var n=Yw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=rA.bind(null,e,i);i.then(a,a)}})}function Wn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var r=i[a],s=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Hr(l.type)){Ve=l.stateNode,ti=!1;break t}break;case 5:Ve=l.stateNode,ti=!1;break t;case 3:case 4:Ve=l.stateNode.containerInfo,ti=!0;break t}l=l.return}if(Ve===null)throw Error(nt(160));K1(s,o,r),Ve=null,ti=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Q1(t,e,n),t=t.sibling}var qi=null;function Q1(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var s=i[r];s.ref.impl=s.nextImpl}Wn(t,e,n),qn(e),a&4&&(Br(3,e,e.return),zc(3,e),Br(5,e,e.return));break;case 1:Wn(t,e,n),qn(e),a&512&&(_e||i===null||Mn(i,i.return)),a&64&&pn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(r=qi,Wn(t,e,n),qn(e),a&512&&(_e||i===null||Mn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(pn)e.stateNode=ES(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=r.ownerDocument||r;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Lc]||i[Tn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),Cn(i,t,n),i[Tn]=e,gn(i),t=i;break t;case"link":if(r=Fx("link","href",a).get(t+(n.href||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break e}}i=a.createElement(t),Cn(i,t,n),a.head.appendChild(i);break;case"meta":if(r=Fx("meta","content",a).get(t+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break e}}i=a.createElement(t),Cn(i,t,n),a.head.appendChild(i);break;default:throw Error(nt(468,t))}i[Tn]=e,gn(i),t=i}e.stateNode=t}else pn||L0(r,e.type,e.stateNode);else e.stateNode=Bx(r,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||_e||t.parentNode.removeChild(t)):a.count--,n===null?pn||L0(r,e.type,e.stateNode):Bx(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pm(e,e.memoizedProps,i.memoizedProps);break;case 27:Wn(t,e,n),qn(e),a&512&&(_e||i===null||Mn(i,i.return)),i!==null&&a&4&&pm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(r=fa,fa=!1,Wn(t,e,n),fa=r,qn(e),a&512&&(_e||i===null||Mn(i,i.return)),e.flags&32){t=e.stateNode;try{Bo(t,""),he=!0}catch(h){Se(e,e.return,h)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,pm(e,t,i!==null?i.memoizedProps:t)),a&1024&&(gm=!0);break;case 6:if(Wn(t,e,n),qn(e),a&4){if(e.stateNode===null)throw Error(nt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,he=!0}catch(h){Se(e,e.return,h)}}break;case 3:if(he=!1,Sh=null,r=qi,qi=Ec(t.containerInfo),Wn(t,e,n),qi=r,qn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Zo(t.containerInfo)}catch(h){Se(e,e.return,h)}gm&&(gm=!1,$1(e)),he=!1;break;case 4:a=fa,fa=pn,i=by(),r=qi,qi=Ec(e.stateNode.containerInfo),Wn(t,e,n),qn(e),qi=r,he&&$l&&(qh=!0),he=i,fa=a;break;case 12:Wn(t,e,n),qn(e);break;case 31:Wn(t,e,n),qn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,eh(e,t)));break;case 13:Wn(t,e,n),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(gf=gi()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,eh(e,t)));break;case 22:r=e.memoizedState!==null,s=i!==null&&i.memoizedState!==null;var o=pn,l=_e,c=fa;pn=o||r,fa=c||r,_e=l||s,Wn(t,e,n),_e=l,fa=c,pn=o,qn(e),a&8192&&(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,!r||i===null||s||pn||_e||(t=s||_e,n=pn,i=_e,pn=r||pn,_e=t,mr(e,2),pn=n,_e=i),!r&&fa||m0(e,r)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,eh(e,n))));break;case 19:Wn(t,e,n),qn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,eh(e,t)));break;case 30:a&512&&(_e||i===null||Mn(i,i.return)),a=by(),r=$l,s=(n&335544064)===n,o=e.memoizedProps,$l=s&&ja(o.default,o.update)!=="none",Wn(t,e,n),qn(e),s&&i!==null&&he&&(e.flags|=4),$l=r,he=a;break;case 21:break;case 7:a&512&&(_e||i===null||Mn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Wn(t,e,n),qn(e)}}function qn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(k1(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(yg(a)){var r=a.stateNode;i===null?i=[r]:i.push(r)}if(_g(a))break;a=a.return}var s=i;if(n==null)throw Error(nt(160));switch(n.tag){case 27:var o=n.stateNode,l=mm(e);Xh(e,l,o,s);break;case 5:var c=n.stateNode;n.flags&32&&(Bo(c,""),n.flags&=-33);var h=mm(e);Xh(e,h,c,s);break;case 3:case 4:var p=n.stateNode.containerInfo,u=mm(e);c0(e,u,p,s);break;default:throw Error(nt(161))}}catch(d){Se(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$1(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Yo=!0,t.reset(),Yo=!1),e=e.sibling}}function co(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)tS(t,e),t=t.sibling;else W1(t,!1)}function tS(e,t){var n=e.alternate;if(n===null)u0(e,!1);else switch(e.tag){case 3:if(p0=da=!1,px(),co(t,e),!da&&!qh){if(e=ga,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];AS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),p0=!0}ga=null;break;case 5:co(t,e);break;case 4:i=da,da=!1,co(t,e),da&&(qh=!0),da=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?u0(e,!1):co(t,e));break;case 30:i=da,a=px(),da=!1,co(t,e),da&&(e.flags|=4);var r=e.memoizedProps,s=e.stateNode;t=Wa(r,s),s=Wa(n.memoizedProps,s);var o=ja(r.default,r.update);o==="none"?t=!1:(r=n.memoizedState,n.memoizedState=null,n=e.child,ni=0,t=xg(e,n,t,s,o,r,!0),ni!==(r===null?0:r.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ho(e,e.memoizedProps.onUpdate),ga=a):a!==null&&(a.push.apply(a,ga),ga=a),da=(e.flags&32)!==0?!0:i;break;default:co(t,e)}}function pa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)q1(e,t.alternate,t),t=t.sibling}function mr(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Br(4,n,n.return),mr(n,i);break;case 1:Mn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&F1(n,n.return,a),mr(n,i);break;case 27:(i&2)!==0&&OS(n.stateNode,n.type,n.memoizedProps);case 5:Mn(n,n.return),n.tag!==5&&n.tag!==27||cc(n),mr(n,i);break;case 6:cc(n);break;case 26:Mn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||_e||a.parentNode.removeChild(a),mr(n,i);break;case 22:n.memoizedState===null&&mr(n,i);break;case 30:Mn(n,n.return),mr(n,i);break;case 7:Mn(n,n.return);default:mr(n,i)}e=e.sibling}}function Wi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags,o=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:Wi(a,r,n),zc(4,r);break;case 1:if(Wi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){Se(i,i.return,h)}if(i=r,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)Yb(c[a],l)}catch(h){Se(i,i.return,h)}}o&&s&64&&B1(r),ma(r,r.return);break;case 27:(n&2)!==0&&H1(r);case 5:r.tag!==5&&r.tag!==27||fx(r),Wi(a,r,n),o&&i===null&&s&4&&l0(r),ma(r,r.return);break;case 6:fx(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||pn||L0(Ec(l.ownerDocument),r.type,l),Wi(a,r,n),o&&i===null&&s&4&&l0(r),ma(r,r.return);break;case 12:Wi(a,r,n);break;case 31:Wi(a,r,n),o&&s&4&&J1(a,r);break;case 13:Wi(a,r,n),o&&s&4&&j1(a,r);break;case 22:r.memoizedState===null&&Wi(a,r,n),ma(r,r.return);break;case 30:Wi(a,r,n),ma(r,r.return);break;case 7:ma(r,r.return);default:Wi(a,r,n)}t=t.sibling}}function bg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pc(n))}function Sg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pc(e))}function Di(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)eS(e,t,n,i),t=t.sibling;else a&&X1(t)}function eS(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&_h(t);var r=t.flags;switch(t.tag){case 0:case 11:case 15:Di(e,t,n,i),r&2048&&zc(9,t);break;case 1:Di(e,t,n,i);break;case 3:Di(e,t,n,i),a&&p0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),r&2048&&(r=null,t.alternate!==null&&(r=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==r&&(t.refCount++,r!=null&&Pc(r)));break;case 12:if(r&2048){Di(e,t,n,i),r=t.stateNode;try{var s=t.memoizedProps,o=s.id,l=s.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Se(t,t.return,c)}}else Di(e,t,n,i);break;case 31:Di(e,t,n,i);break;case 13:Di(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&_h(o),s._visibility&2?Di(e,t,n,i):uc(e,t)):(a&&o!==null&&o.memoizedState!==null&&_h(t),s._visibility&2?Di(e,t,n,i):(s._visibility|=2,ho(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),r&2048&&bg(o,t);break;case 24:Di(e,t,n,i),r&2048&&Sg(t.alternate,t);break;case 30:a&&(r=t.alternate,r!==null&&(Ma(r.child,!0),Ma(t.child,!0))),Di(e,t,n,i);break;default:Di(e,t,n,i)}}function ho(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:ho(r,s,o,l,a),zc(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?ho(r,s,o,l,a):uc(r,s):(h._visibility|=2,ho(r,s,o,l,a)),a&&c&2048&&bg(s.alternate,s);break;case 24:ho(r,s,o,l,a),a&&c&2048&&Sg(s.alternate,s);break;default:ho(r,s,o,l,a)}t=t.sibling}}function uc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:uc(n,i),a&2048&&bg(i.alternate,i);break;case 24:uc(n,i),a&2048&&Sg(i.alternate,i);break;default:uc(n,i)}t=t.sibling}}var ps=8192;function hs(e,t,n){if(e.subtreeFlags&ps)for(e=e.child;e!==null;)nS(e,t,n),e=e.sibling}function nS(e,t,n){switch(e.tag){case 26:hs(e,t,n),e.flags&ps&&(e.memoizedState!==null?jA(n,qi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Hx(n,e)));break;case 5:hs(e,t,n),e.flags&ps&&(e=e.stateNode,(t&335544128)===t&&Hx(n,e));break;case 3:case 4:var i=qi;qi=Ec(e.stateNode.containerInfo),hs(e,t,n),qi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ps,ps=16777216,hs(e,t,n),ps=i):hs(e,t,n));break;case 30:if((e.flags&ps)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,pi===null&&(pi=new Map),pi.set(i,a)}hs(e,t,n);break;default:hs(e,t,n)}}function iS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];mn=i,rS(i,e)}iS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)aS(e),e=e.sibling}function aS(e){switch(e.tag){case 0:case 11:case 15:ql(e),e.flags&2048&&Br(9,e,e.return);break;case 3:ql(e);break;case 12:ql(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yh(e)):ql(e);break;default:ql(e)}}function yh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];mn=i,rS(i,e)}iS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Br(8,t,t.return),yh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yh(t));break;default:yh(t)}e=e.sibling}}function rS(e,t){for(;mn!==null;){var n=mn;switch(n.tag){case 0:case 11:case 15:Br(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Pc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,mn=i;else t:for(n=e;mn!==null;){i=mn;var a=i.sibling,r=i.return;if(Z1(i),i===n){mn=null;break t}if(a!==null){a.return=r,mn=a;break t}mn=r}}}var Zw={getCacheForType:function(e){var t=En(tn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return En(tn).controller.signal}},Kw=typeof WeakMap=="function"?WeakMap:Map,de=0,Ae=null,ie=null,ae=0,xe=0,hi=null,Sr=!1,$o=!1,Mg=!1,Ka=0,qe=0,Fr=0,bs=0,Yh=0,mi=0,ko=0,hc=null,ei=null,v0=!1,gf=0,sS=0,Zh=1/0,Kh=null,Dr=null,Ge=0,Zi=null,Rs=null,Sa=0,_0=0,y0=null,oS=null,Lo=null,Io=null,Po=null,fc=0,xh=null;function yi(){return(de&2)!==0&&ae!==0?ae&-ae:Ft.T!==null?Eg():hb()}function lS(){if(mi===0)if((ae&536870912)===0||jt){var e=Vu;Vu<<=1,(Vu&3932160)===0&&(Vu=262144),mi=e}else mi=536870912;return e=Rn.current,e!==null&&(e.flags|=32),mi}function Ho(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=RS(Wa(e.memoizedProps,n))),Io===null&&(Io=[]),Io.push(t.bind(null,i))}}function ai(e,t,n){(e===Ae&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Vo(e,0),Mr(e,ae,mi,!1)),Uc(e,n),((de&2)===0||e!==Ae)&&(e===Ae&&((de&2)===0&&(bs|=n),qe===4&&Mr(e,ae,mi,!1)),Ea(e))}function cS(e,t,n){if((de&6)!==0)throw Error(nt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Dc(e,t),a=i?Qw(e,t):vm(e,t,!0),r=i;do{if(a===0){$o&&!i&&Mr(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Jw(n)){a=vm(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=hc;var l=o.current.memoizedState.isDehydrated;if(l&&(Vo(o,s).flags|=256),s=vm(o,s,!1),s!==2&&s!==6){if(Mg&&!l){o.errorRecoveryDisabledLanes|=r,bs|=r,a=4;break t}r=ei,ei=a,r!==null&&(ei===null?ei=r:ei.push.apply(ei,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Vo(e,0),Mr(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(nt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Mr(i,t,mi,!Sr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(nt(329))}if((t&62914560)===t&&(a=gf+300-gi(),10<a)){if(Mr(i,t,mi,!Sr),ef(i,0,!0)!==0)break t;Sa=t,i.timeoutHandle=Ag(gx.bind(null,i,n,ei,Kh,v0,t,mi,bs,ko,Sr,r,"Throttled",-0,0),a);break t}gx(i,n,ei,Kh,v0,t,mi,bs,ko,Sr,r,null,-0,0)}}break}while(!0);Ea(e)}function gx(e,t,n,i,a,r,s,o,l,c,h,p,u,d){e.timeoutHandle=-1;var m=t.subtreeFlags,b=(r&335544064)===r;if(p=null,(b||m&8192||(m&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},pi=null,nS(t,r,p),b&&(m=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(m.count++,m.waitingForViewTransition=!0,m=wc.bind(m),b.finished.then(m,m))),m=(r&62914560)===r?gf-gi():(r&4194048)===r?sS-gi():0,m=QA(p,m),m!==null)){Sa=r,e.cancelPendingCommit=m(_x.bind(null,e,t,r,n,i,a,s,o,l,c,h,p,null,u,d)),Mr(e,r,s,!c);return}_x(e,t,r,n,i,a,s,o,l,c,h,p)}function Jw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!xi(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t,n,i){t=sb(e,t),t&=~Yh,t&=~bs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-_i(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&lb(e,n,t)}function vf(){return(de&6)===0?(Bc(0,!1),!1):!0}function Tg(){if(ie!==null){if(xe===0)var e=ie.return;else e=ie,Ha=Is=null,og(e),No=null,yc=0,e=ie;for(;e!==null;)z1(e.alternate,e),e=e.return;ie=null}}function Vo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_A(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sa=0,Tg(),Ae=e,ie=n=Va(e.current,null),ae=t,xe=0,hi=null,Sr=!1,$o=Dc(e,t),Mg=!1,ko=mi=Yh=bs=Fr=qe=0,ei=hc=null,v0=!1,Ka=sb(e,t),of(),n}function uS(e,t){Yt=null,Ft.H=Hh,t===jo||t===uf?(t=Gy(),xe=3):t===$0?(t=Gy(),xe=4):xe=t===mg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,hi=t,ie===null&&(qe=1,Vh(e,Oi(t,e.current)))}function hS(){var e=Rn.current;return e===null?!0:(ae&4194048)===ae?On===null:(ae&62914560)===ae||(ae&536870912)!==0?e===On:!1}function fS(){var e=Ft.H;return Ft.H=Hh,e===null?Hh:e}function dS(){var e=Ft.A;return Ft.A=Zw,e}function Jh(){qe=4,Sr||(ae&4194048)!==ae&&Rn.current!==null||($o=!0),(Fr&134217727)===0&&(bs&134217727)===0||Ae===null||Mr(Ae,ae,mi,!1)}function vm(e,t,n){var i=de;de|=2;var a=fS(),r=dS();(Ae!==e||ae!==t)&&(Kh=null,Vo(e,t)),t=!1;var s=qe;t:do try{if(xe!==0&&ie!==null){var o=ie,l=hi;switch(xe){case 8:Tg(),s=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(t=!0);var c=xe;if(xe=0,hi=null,Eo(e,o,l,c),n&&$o){s=0;break t}break;default:c=xe,xe=0,hi=null,Eo(e,o,l,c)}}jw(),s=qe;break}catch(h){uS(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ha=Is=null,de=i,Ft.H=a,Ft.A=r,ie===null&&(Ae=null,ae=0,of()),s}function jw(){for(;ie!==null;)pS(ie)}function Qw(e,t){var n=de;de|=2;var i=fS(),a=dS();Ae!==e||ae!==t?(Kh=null,Zh=gi()+500,Vo(e,t)):$o=Dc(e,t);t:do try{if(xe!==0&&ie!==null){t=ie;var r=hi;e:switch(xe){case 1:xe=0,hi=null,Eo(e,t,r,1);break;case 2:case 9:if(Vy(r)){xe=0,hi=null,vx(t);break}t=function(){xe!==2&&xe!==9||Ae!==e||(xe=7),Ea(e)},r.then(t,t);break t;case 3:xe=7;break t;case 4:xe=5;break t;case 7:Vy(r)?(xe=0,hi=null,vx(t)):(xe=0,hi=null,Eo(e,t,r,7));break;case 5:var s=null;switch(ie.tag){case 26:s=ie.memoizedState;case 5:case 27:var o=ie;if(s?FS(s):o.stateNode.complete){xe=0,hi=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,_f(c)):ie=null}break e}}xe=0,hi=null,Eo(e,t,r,5);break;case 6:xe=0,hi=null,Eo(e,t,r,6);break;case 8:Tg(),qe=6;break t;default:throw Error(nt(462))}}$w();break}catch(h){uS(e,h)}while(!0);return Ha=Is=null,Ft.H=i,Ft.A=a,de=n,ie!==null?0:(Ae=null,ae=0,of(),qe)}function $w(){for(;ie!==null&&!gE();)pS(ie)}function pS(e){var t=O1(e.alternate,e,Ka);e.memoizedProps=e.pendingProps,t===null?_f(e):ie=t}function vx(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rx(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=rx(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:og(t);var i=t;i===vn&&(jt?(Ih(i),i.tag===5&&i.stateNode!=null&&(Ie=i.stateNode)):(Ih(i),jt=!0));default:z1(n,t),t=ie=Bb(t,Ka),t=O1(n,t,Ka)}e.memoizedProps=e.pendingProps,t===null?_f(e):ie=t}function Eo(e,t,n,i){Ha=Is=null,og(t),No=null,yc=0;var a=t.return;try{if(kw(e,a,t,n,ae)){qe=1,Vh(e,Oi(n,e.current)),ie=null;return}}catch(r){if(a!==null)throw ie=a,r;qe=1,Vh(e,Oi(n,e.current)),ie=null;return}t.flags&32768?(jt||i===1?e=!0:$o||(ae&536870912)!==0?e=!1:(Sr=e=!0,(i===2||i===9||i===3||i===6)&&(i=Rn.current,i!==null&&i.tag===13&&(i.flags|=16384))),mS(t,e)):_f(t)}function _f(e){var t=e;do{if((t.flags&32768)!==0){mS(t,Sr);return}e=t.return;var n=Xw(t.alternate,t,Ka);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);qe===0&&(qe=5)}function mS(e,t){do{var n=Ww(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);qe=6,ie=null}function _x(e,t,n,i,a,r,s,o,l,c,h,p){e.cancelPendingCommit=null;do yf();while(Ge!==0);if((de&6)!==0)throw Error(nt(327));if(t!==null){if(t===e.current)throw Error(nt(177));e===Ae&&(ie=Ae=null,ae=0),Rs=t,Zi=e,Sa=n,y0=a,oS=i,tA(e,t,n,s,o,l,p)}}function tA(e,t,n,i,a,r,s){var o=t.lanes|t.childLanes;if(_0=o,o|=Y0,wE(e,n,o,i,a,r),Io=null,(n&335544064)===n?(Po=Cw(e),i=10262):(Po=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,sA(Rh,function(){return M0(),null})):(e.callbackNode=null,e.callbackPriority=0),Wh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null,a=pe.p,pe.p=2,r=de,de|=4;try{qw(e,t,n)}finally{de=r,pe.p=a,Ft.T=i}}Ge=1,Wh?Lo=TA(s,e.containerInfo,Po,x0,b0,nA,S0,M0,eA,null,null):(x0(),b0(),S0())}function eA(e){if(Ge!==0){var t=Zi.onRecoverableError;t(e,{componentStack:null})}}function nA(){Ge===3&&(Ge=0,tS(Rs,Zi),Ge=4)}function x0(){if(Ge===1){Ge=0;var e=Zi,t=Rs,n=Sa,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null;var a=pe.p;pe.p=2;var r=de;de|=4;try{$l=qh=!1,Q1(t,e,n),n=A0;var s=Nb(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&Rb(o.ownerDocument.documentElement,o)){if(l!==null&&q0(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),m=o.textContent.length,b=Math.min(l.start,m),g=l.end===void 0?b:Math.min(l.end,m);!d.extend&&b>g&&(s=g,g=b,b=s);var f=Iy(o,b),v=Iy(o,g);if(f&&v&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==v.node||d.focusOffset!==v.offset)){var M=p.createRange();M.setStart(f.node,f.offset),d.removeAllRanges(),b>g?(d.addRange(M),d.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),d.addRange(M))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Yo=!!w0,A0=w0=null}finally{de=r,pe.p=a,Ft.T=i}}e.current=t,Ge=2}}function b0(){if(Ge===2){Ge=0;var e=Zi,t=Rs,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ft.T,Ft.T=null;var i=pe.p;pe.p=2;var a=de;de|=4;try{q1(e,t.alternate,t)}finally{de=a,pe.p=i,Ft.T=n}}Ge=3}}function S0(){if(Ge===4||Ge===3){Ge=0;var e=Lo;Lo=null,vE();var t=Zi,n=Rs,i=Sa,a=oS,r=(i&335544064)===i?10262:10256;if((n.subtreeFlags&r)!==0||(n.flags&r)!==0?Ge=5:(Ge=0,Rs=Zi=null,gS(t,t.pendingLanes)),r=t.pendingLanes,r===0&&(Dr=null),k0(i),n=n.stateNode,vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Nc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Ft.T,r=pe.p,pe.p=2,Ft.T=null;try{for(var s=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];s(l.value,{componentStack:l.stack})}}finally{Ft.T=n,pe.p=r}}if(a=Io,s=Po,Po=null,a!==null&&(Io=null,s===null&&(s=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(s),n!==void 0&&e.finished.finally(n);(Sa&3)!==0&&yf(),Ea(t),r=t.pendingLanes,(i&261930)!==0&&(r&42)!==0?t===xh?fc++:(fc=0,xh=t):(fc=0,xh=null),Bc(0,!1)}}function gS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pc(t)))}function yf(){return Lo!==null&&(Lo.skipTransition(),Lo=null),x0(),b0(),S0(),M0()}function M0(){if(Ge!==5)return!1;var e=Zi,t=_0;_0=0;var n=k0(Sa),i=Ft.T,a=pe.p;try{pe.p=32>n?32:n,Ft.T=null,n=y0,y0=null;var r=Zi,s=Sa;if(Ge=0,Rs=Zi=null,Sa=0,(de&6)!==0)throw Error(nt(331));var o=de;if(de|=4,aS(r.current),eS(r,r.current,s,n),de=o,Bc(0,!1),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Nc,r)}catch{}return!0}finally{pe.p=a,Ft.T=i,gS(e,t)}}function yx(e,t,n){t=Oi(n,t),t=n0(e.stateNode,t,2),e=Cr(e,t,2),e!==null&&(Uc(e,2),Ea(e))}function Se(e,t,n){if(e.tag===3)yx(e,e,n);else for(;t!==null;){if(t.tag===3){yx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dr===null||!Dr.has(i))){e=Oi(n,e),n=D1(2),i=Cr(t,n,2),i!==null&&(U1(n,i,t,e),Uc(i,2),Ea(i));break}}t=t.return}}function _m(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Kw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Mg=!0,a.add(n),e=iA.bind(null,e,t,n),t.then(e,e))}function iA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(ae&n)===n&&((qe===4||qe===3&&(ae&62914560)===ae&&300>gi()-gf)&&(de&2)===0?Vo(e,0):Yh|=n,ko===ae&&(ko=0)),Ea(e)}function vS(e,t){t===0&&(t=ob()),e=Ls(e,t),e!==null&&(Uc(e,t),Ea(e))}function aA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vS(e,n)}function rA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(nt(314))}i!==null&&i.delete(t),vS(e,n)}function sA(e,t){return B0(e,t)}var Go=null,fo=null,T0=!1,jh=!1,ym=!1,Tr=0;function Ea(e){e!==fo&&e.next===null&&(fo===null?Go=fo=e:fo=fo.next=e),jh=!0,T0||(T0=!0,lA())}function Bc(e,t){if(!ym&&jh){ym=!0;do for(var n=!1,i=Go;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-_i(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,xx(i,r))}else r=ae,r=ef(i,i===Ae?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Dc(i,r)||(n=!0,xx(i,r));i=i.next}while(n);ym=!1}}function oA(){_S()}function _S(){jh=T0=!1;var e=0;Tr!==0&&vA()&&(e=Tr);for(var t=gi(),n=null,i=Go;i!==null;){var a=i.next,r=yS(i,t);r===0?(i.next=null,n===null?Go=a:n.next=a,a===null&&(fo=n)):(n=i,(e!==0||(r&3)!==0)&&(jh=!0)),i=a}Ge!==0&&Ge!==5||Bc(e,!1),Tr!==0&&(Tr=0)}function yS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-_i(r),o=1<<s,l=a[s];l===-1?((o&n)===0||(o&i)!==0)&&(a[s]=EE(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=Ae,n=ae,n=ef(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&jp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Dc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&jp(i),k0(n)){case 2:case 8:n=ab;break;case 32:n=Rh;break;case 268435456:n=rb;break;default:n=Rh}return i=xS.bind(null,e),n=B0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&jp(i),e.callbackPriority=2,e.callbackNode=null,2}function xS(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yf()&&e.callbackNode!==n)return null;var i=ae;return i=ef(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(cS(e,i,t),yS(e,gi()),e.callbackNode!=null&&e.callbackNode===n?xS.bind(null,e):null)}function xx(e,t){if(yf())return null;cS(e,t,!0)}function lA(){yA(function(){(de&6)!==0?B0(ib,oA):_S()})}function Eg(){if(Tr===0){var e=Es;e===0&&(e=Hu,Hu<<=1,(Hu&261888)===0&&(Hu=256)),Tr=e}return Tr}function bx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lh(e)}function cA(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=bx((a[si]||null).action),s=i.submitter;s&&(t=(t=s[si]||null)?bx(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new af("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Tr!==0){var l=new FormData(a,s);t0(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=new FormData(a,s),t0(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(nh=0;nh<Gm.length;nh++)ih=Gm[nh],Sx=ih.toLowerCase(),Mx=ih[0].toUpperCase()+ih.slice(1),Ki(Sx,"on"+Mx);var ih,Sx,Mx,nh;Ki(Ub,"onAnimationEnd");Ki(Lb,"onAnimationIteration");Ki(Ib,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(xw,"onTransitionRun");Ki(bw,"onTransitionStart");Ki(Sw,"onTransitionCancel");Ki(Pb,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sc));function bS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){Dh(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){Dh(h)}a.currentTarget=null,r=l}}}}function ne(e,t){var n=t[vy];n===void 0&&(n=t[vy]=new Set);var i=e+"__bubble";n.has(i)||(SS(t,e,2,!1),n.add(i))}function xm(e,t,n){var i=0;t&&(i|=4),SS(n,e,i,t)}var ah="_reactListening"+Math.random().toString(36).slice(2);function wg(e){if(!e[ah]){e[ah]=!0,db.forEach(function(n){n!=="selectionchange"&&(uA.has(n)||xm(n,!1,e),xm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ah]||(t[ah]=!0,xm("selectionchange",!1,t))}}function SS(e,t,n,i){switch(qS(t)){case 2:var a=n3;break;case 8:a=i3;break;default:a=Lg}n=a.bind(null,t,n,e),a=void 0,!Fm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bm(e,t,n,i,a){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=ms(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}bb(function(){var c=r,h=V0(n),p=[];t:{var u=Ob.get(e);if(u!==void 0){var d=af,m=e;switch(e){case"keypress":if(uh(n)===0)break t;case"keydown":case"keyup":d=JE;break;case"focusin":m="focus",d=im;break;case"focusout":m="blur",d=im;break;case"beforeblur":case"afterblur":d=im;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Ey;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=BE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=ew;break;case Ub:case Lb:case Ib:d=HE;break;case Pb:d=iw;break;case"scroll":case"scrollend":d=OE;break;case"wheel":d=rw;break;case"copy":case"cut":case"paste":d=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Ay;break;case"submit":d=$E;break;case"toggle":case"beforetoggle":d=ow}var b=(t&4)!==0,g=!b&&(e==="scroll"||e==="scrollend"),f=b?u!==null?u+"Capture":null:u;b=[];for(var v=c,M;v!==null;){var _=v;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||f===null||(_=pc(v,f),_!=null&&b.push(Mc(v,_,M))),g)break;v=v.return}0<b.length&&(u=new d(u,m,null,n,h),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Bm&&(m=n.relatedTarget||n.fromElement)&&(ms(m)||m[Ko]))break t;(u||d)&&(m=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?ms(d):null,d!==null&&(g=Rc(d),b=d.tag,d!==g||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=Ey,_="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ay,_="onPointerLeave",f="onPointerEnter",v="pointer"),g=u==null?m:jl(u),M=d==null?m:jl(d),m=new b(_,v+"leave",u,n,h),m.target=g,m.relatedTarget=M,_=null,ms(h)===c&&(b=new b(f,v+"enter",d,n,h),b.target=M,b.relatedTarget=g,_=b),g=_,b=u&&d?wm(u,d,hA):null,u!==null&&Tx(p,m,u,b,!1),d!==null&&g!==null&&Tx(p,g,d,b,!0)))}t:{if(u=c?jl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var x=Dy;else if(Ny(u))if(Ab)x=vw;else{x=mw;var T=pw}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&H0(c.elementType)&&(x=Dy):x=gw;if(x&&(x=x(e,c))){wb(p,x,n,h);break t}T&&T(e,u,c)}switch(T=c?jl(c):window,e){case"focusin":(Ny(T)||T.contentEditable==="true")&&(yo=T,Hm=c,nc=null);break;case"focusout":nc=Hm=yo=null;break;case"mousedown":Vm=!0;break;case"contextmenu":case"mouseup":case"dragend":Vm=!1,Py(p,n,h);break;case"selectionchange":if(yw)break;case"keydown":case"keyup":Py(p,n,h)}var w;if(W0)t:{switch(e){case"compositionstart":var y="onCompositionStart";break t;case"compositionend":y="onCompositionEnd";break t;case"compositionupdate":y="onCompositionUpdate";break t}y=void 0}else _o?Tb(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Mb&&n.locale!=="ko"&&(_o||y!=="onCompositionStart"?y==="onCompositionEnd"&&_o&&(w=Sb()):(xr=h,G0="value"in xr?xr.value:xr.textContent,_o=!0)),T=Qh(c,y),0<T.length&&(y=new wy(y,e,null,n,h),p.push({event:y,listeners:T}),w?y.data=w:(w=Eb(n),w!==null&&(y.data=w)))),(w=cw?uw(e,n):hw(e,n))&&(y=Qh(c,"onBeforeInput"),0<y.length&&(T=new wy("onBeforeInput","beforeinput",null,n,h),p.push({event:T,listeners:y}),T.data=w)),cA(p,e,c,n,h)}bS(p,t)})}function Mc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qh(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=pc(e,n),a!=null&&i.unshift(Mc(e,a,r)),a=pc(e,t),a!=null&&i.push(Mc(e,a,r))),e.tag===3)return i;e=e.return}return[]}function hA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tx(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=pc(n,r),c!=null&&s.unshift(Mc(n,c,l))):a||(c=pc(n,r),c!=null&&s.push(Mc(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var fA=/\r\n?/g,dA=/\u0000|\uFFFD/g;function Ex(e){return(typeof e=="string"?e:""+e).replace(fA,`
`).replace(dA,"")}function MS(e,t){return t=Ex(t),Ex(e)===t}function be(e,t,n,i,a,r){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Bo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Bo(e,""+i);else return;break;case"className":Xu(e,"class",i);break;case"tabIndex":Xu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Xu(e,n,i);break;case"style":xb(e,i,r);return;case"data":if(t!=="object"){Xu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",a.name,a,null),be(e,t,"formEncType",a.formEncType,a,null),be(e,t,"formMethod",a.formMethod,a,null),be(e,t,"formTarget",a.formTarget,a,null)):(be(e,t,"encType",a.encType,a,null),be(e,t,"method",a.method,a,null),be(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=_a);return;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));r?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=lh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),oh(e,"popover",i);break;case"xlinkActuate":Ba(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ba(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ba(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ba(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ba(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ba(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ba(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ba(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ba(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":oh(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=IE.get(n)||n,oh(e,n,i);else return}he=!0}function E0(e,t,n,i,a,r){switch(n){case"style":xb(e,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));r?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Bo(e,i);else if(typeof i=="number"||typeof i=="bigint")Bo(e,""+i);else return;break;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"onClick":i!=null&&(e.onclick=_a);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!pb.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),t=e[si]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(r,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(r,i,a);break t}he=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):oh(e,n,i)}return}he=!0}function Cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:be(e,t,r,s,n,null)}}a&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(nt(137,t));break;default:be(e,t,i,h,n,null)}}vb(e,r,o,l,c,s,a,!1);return;case"select":ne("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:be(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Ao(e,!!i,t,!1):n!=null&&Ao(e,!!i,n,!0);return;case"textarea":ne("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(nt(91));break;default:be(e,t,s,o,n,null)}yb(e,i,a,r);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":be(e,t,l,i,n,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<Sc.length;i++)ne(Sc[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:be(e,t,c,i,n,null)}return;default:if(H0(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&E0(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}var pA={};function mA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||be(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(he=!0),r=d;break;case"name":d!==p&&(he=!0),a=d;break;case"checked":d!==p&&(he=!0),c=d;break;case"defaultChecked":d!==p&&(he=!0),h=d;break;case"value":d!==p&&(he=!0),s=d;break;case"defaultValue":d!==p&&(he=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(nt(137,t));break;default:d!==p&&be(e,t,u,d,i,p)}}zm(e,s,o,l,c,h,r,a);return;case"select":d=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(r)||be(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":r!==l&&(he=!0),u=r;break;case"defaultValue":r!==l&&(he=!0),o=r;break;case"multiple":r!==l&&(he=!0),s=r;default:r!==l&&be(e,t,a,r,i,l)}t=o,n=s,i=d,u!=null?Ao(e,!!n,u,!1):!!i!=!!n&&(t!=null?Ao(e,!!n,t,!0):Ao(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":a!==r&&(he=!0),u=a;break;case"defaultValue":a!==r&&(he=!0),d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(nt(91));break;default:a!==r&&be(e,t,s,a,i,r)}_b(e,u,d);return;case"option":for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!=null&&!i.hasOwnProperty(m)&&(m==="selected"?e.selected=!1:be(e,t,m,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(he=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):be(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&be(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(nt(137,t));break;default:be(e,t,c,u,i,d)}return;default:if(H0(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&E0(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||E0(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&be(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||be(e,t,p,u,i,d)}function wx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&wx(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&wx(p)&&(l=l.responseEnd,s+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var w0=null,A0=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function Ax(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ES(e,t,n,i){return n=Tc(n).createElement(e),n[Tn]=i,n[si]=t,Cn(n,e,t),gn(n),n}function C0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sm=null;function vA(){var e=window.event;return e&&e.type==="popstate"?e===Sm?!1:(Sm=e,!0):(Sm=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,_A=typeof clearTimeout=="function"?clearTimeout:void 0,Cx=typeof Promise=="function"?Promise:void 0,Rx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ag,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof Cx<"u"?function(e){return Cx.resolve(null).then(e).catch(xA)}:Ag;function xA(e){setTimeout(function(){throw e})}function Hr(e){return e==="head"}function Nx(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Zo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Tm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Tm(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[Lc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Tm(e.ownerDocument.body);n=a}while(n);Zo(t)}function Dx(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function wS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var r=t[a];0<r.width&&0<r.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function AS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function CS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function R0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return CS(t,n,e)}function bA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return CS(t,n,e)}function SA(e){return e.documentElement.clientHeight}function MA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function TA(e,t,n,i,a,r,s,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,m=c.fonts.status;i();var b=[];if(m==="loaded"&&(SA(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),m=b.length,e!==null)for(var g=e.suspenseyImages,f=0,v=0;v<g.length;v++){var M=g[v];if(!M.complete){var _=M.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<u.innerHeight&&_.left<u.innerWidth){if(f+=kS(M),f>Mh){b.length=m;break}M=new Promise(MA.bind(M)),b.push(M)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(x){return setTimeout(x,500)})]).then(a,a),(d?Promise.allSettled([d.finished,u]):u).then(r,r);if(a(),d)return d.finished.then(r,r);r()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var m=u[d],b=m.effect,g=b.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(m),m=b.getKeyframes();for(var f=g=void 0,v=!0,M=0;M<m.length;M++){var _=m[M],x=_.width;if(g===void 0)g=x;else if(g!==x){v=!1;break}if(x=_.height,f===void 0)f=x;else if(f!==x){v=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}v&&g!==void 0&&f!==void 0&&(b.setKeyframes(m),v=getComputedStyle(b.target,b.pseudoElement),v.width!==g||v.height!==f)&&(v=m[0],v.width=g,v.height=f,v=m[m.length-1],v.width=g,v.height=f,b.setKeyframes(m))}}s()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),a(),s()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),a(),s(),null}}function gs(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}gs.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ce({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};gs.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var r=n[a].effect;r!==null&&r.target===e&&r.pseudoElement===t&&i.push(n[a])}return i};gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function RS(e){return{name:e,group:new gs("group",e),imagePair:new gs("image-pair",e),old:new gs("old",e),new:new gs("new",e)}}function bi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}bi.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(NS(r,e,t,n)===-1){var s=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){s.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=s.removeEventListener.bind(s,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Xo(n),r.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),ri(this._fragmentFiber.child,!1,EA,e,o,i)}this._eventListeners=r}};function EA(e,t,n,i){return on(e).addEventListener(t,n,i),!1}bi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=NS(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var r=a.cleanup;a=Xo(a.optionsOrUseCapture),ri(this._fragmentFiber.child,!1,wA,e,n,a),i.splice(t,1),r!==null&&r()}};function wA(e,t,n,i){return on(e).removeEventListener(t,n,i),!1}function Xo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ux(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function NS(e,t,n,i){if(e.length===0)return-1;i=Ux(i);for(var a=0;a<e.length;a++){var r=e[a];if(r.type===t&&r.listener===n&&Ux(r.optionsOrUseCapture)===i)return a}return-1}bi.prototype.dispatchEvent=function(e){var t=Ns(this._fragmentFiber);if(t===null)return!0;t=on(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var r=n[a];i.addEventListener(r.type,r.attachedListener,Xo(r.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)r=n[a],i.removeEventListener(r.type,r.attachedListener,Xo(r.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};bi.prototype.focus=function(e){ri(this._fragmentFiber.child,!0,DS,e,void 0,void 0)};function DS(e,t){return e.tag===6?!1:(e=on(e),BA(e,t))}bi.prototype.focusLast=function(e){var t=[];ri(this._fragmentFiber.child,!0,Cg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!DS(t[n],e);n--);};function Cg(e,t){return t.push(e),!1}bi.prototype.blur=function(){var e=Ns(this._fragmentFiber);e!==null&&(e=on(e),e=Tc(e).activeElement,e!==null&&ri(this._fragmentFiber.child,!1,AA,e,void 0,void 0))};function AA(e,t){return e.tag===6?!1:(e=on(e),e===t||e.contains(t)?(t.blur(),!0):!1)}bi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ri(this._fragmentFiber.child,!1,CA,e,void 0,void 0)};function CA(e,t){return e.tag===6||(e=on(e),t.observe(e)),!1}bi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ri(this._fragmentFiber.child,!1,RA,e,void 0,void 0);for(var n=t=0;n<Yi.length;n++){var i=Yi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Yi[t++]=i}Yi.length=t}};function RA(e,t){return e.tag===6||(e=on(e),t.unobserve(e)),!1}var Yi=[],Mm=!1;function NA(e,t,n){Yi.push({fragmentInstance:e,observer:t,instance:n}),Mm||(Mm=!0,FA(function(){Mm=!1;var i=Yi;Yi=[];for(var a=0;a<i.length;a++){var r=i[a];r.observer.unobserve(r.instance)}}))}bi.prototype.getClientRects=function(){var e=[];return ri(this._fragmentFiber.child,!1,DA,e,void 0,void 0),e};function DA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=on(e),t.push.apply(t,e.getClientRects());return!1}bi.prototype.getRootNode=function(e){var t=Ns(this._fragmentFiber);return t===null?this:on(t).getRootNode(e)};bi.prototype.compareDocumentPosition=function(e){var t=Ns(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ri(this._fragmentFiber.child,!1,Cg,n,void 0,void 0);var i=on(t);if(n.length===0){if(n=i,hy(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=$x(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=on(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=on(n[0]),a=on(n[n.length-1]);var r=hy(this._fragmentFiber)?t.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||r&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!r&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||UA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function UA(e,t,n,i,a){var r=ms(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)t:{for(;r!==null;){if(r.tag===7&&(r===t||r.alternate===t)){n=!0;break t}r=r.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=a.ownerDocument,a===r||a===r.documentElement||a===r.body;t:{for(r=t,t=Ns(t);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==t&&r.alternate!==t)){r=!0;break t}r=r.return}r=!1}return r}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!r)&&!(t=r===n)&&(t=wm(n,r,fy),t===null?t=!1:(ri(t,!0,lE,r,n),r=po,po=null,t=r!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!r)&&!(t=r===i)&&(t=wm(i,r,fy),t===null?t=!1:(ri(t,!0,cE,r,i),r=po,Em=po=null,t=r!==null)),t):!1}function Lx(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}bi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(nt(566));var t=[];ri(this._fragmentFiber.child,!1,Cg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=$x(this._fragmentFiber);if(i=n?i[1]||i[0]||Ns(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=on(i),Lx(e,n);return}if(i=on(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=on(a),Lx(a,n)):on(a).scrollIntoView(e),i+=n?-1:1}};function LA(e,t){return e=on(e),US(e,t),!1}function US(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function LS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,Xo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){for(var s=0,o=0;o<Yi.length;o++){var l=Yi[o];(l.fragmentInstance!==t||l.observer!==r||l.instance!==e)&&(Yi[s++]=l)}Yi.length=s,r.observe(e)}),US(e,t))}function IA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,Xo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?NA(t,r,e):r.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function N0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":N0(n),nf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function PA(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Lc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function OA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bi(e.nextSibling),e===null))return null;return e}function IS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Bi(e.nextSibling),e===null))return null;return e}function D0(e){return e.data==="$?"||e.data==="$~"}function Rg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var U0=null;function Ix(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Bi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Px(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function BA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function FA(e){Rx(function(){Rx(function(t){return e(t)})})}function PS(e,t,n){switch(t=Tc(n),e){case"html":if(e=t.documentElement,!e)throw Error(nt(452));return e;case"head":if(e=t.head,!e)throw Error(nt(453));return e;case"body":if(e=t.body,!e)throw Error(nt(454));return e;default:throw Error(nt(451))}}function OS(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&be(e,t,i,null,pA,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===_a&&(e.onclick=null),nf(e)}function Tm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nf(e)}var Fi=new Map,Ox=new Set;function Ec(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Qa=pe.d;pe.d={f:kA,r:HA,D:VA,C:GA,L:XA,m:WA,X:YA,S:qA,M:ZA};function kA(){var e=Qa.f(),t=vf();return e||t}function HA(e){var t=Jo(e);t!==null&&t.tag===5&&t.type==="form"?x1(t):Qa.r(e)}var tl=typeof document>"u"?null:document;function zS(e,t,n){var i=tl;if(i&&typeof t=="string"&&t){var a=Pi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Ox.has(a)||(Ox.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Cn(t,"link",e),gn(t),i.head.appendChild(t)))}}function VA(e){Qa.D(e),zS("dns-prefetch",e,null)}function GA(e,t){Qa.C(e,t),zS("preconnect",e,t)}function XA(e,t,n){Qa.L(e,t,n);var i=tl;if(i&&e&&t){var a='link[rel="preload"][as="'+Pi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Pi(n.imageSizes)+'"]')):a+='[href="'+Pi(e)+'"]';var r=a;switch(t){case"style":r=Wo(e);break;case"script":r=el(e)}if(!(Fi.has(r)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Fi.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Fc(r))||t==="script"&&i.querySelector(kc(r))))){var s=i.createElement("link");Cn(s,"link",e),t==="style"&&(s[Nh]=!0,s.onload=s.onerror=function(){fb(s)}),gn(s),i.head.appendChild(s)}}}function WA(e,t){Qa.m(e,t);var n=tl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Pi(i)+'"][href="'+Pi(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=el(e)}if(!Fi.has(r)&&(e=Ce({rel:"modulepreload",href:e},t),Fi.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kc(r)))return}i=n.createElement("link"),Cn(i,"link",e),gn(i),n.head.appendChild(i)}}}function qA(e,t,n){Qa.S(e,t,n);var i=tl;if(i&&e){var a=wo(i).hoistableStyles,r=Wo(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Fc(r)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fi.get(r))&&Ng(e,n);var l=s=i.createElement("link");gn(l),Cn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,bh(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function YA(e,t){Qa.X(e,t);var n=tl;if(n&&e){var i=wo(n).hoistableScripts,a=el(e),r=i.get(a);r||(r=n.querySelector(kc(a)),r||(e=Ce({src:e,async:!0},t),(t=Fi.get(a))&&Dg(e,t),r=n.createElement("script"),gn(r),Cn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function ZA(e,t){Qa.M(e,t);var n=tl;if(n&&e){var i=wo(n).hoistableScripts,a=el(e),r=i.get(a);r||(r=n.querySelector(kc(a)),r||(e=Ce({src:e,async:!0,type:"module"},t),(t=Fi.get(a))&&Dg(e,t),r=n.createElement("script"),gn(r),Cn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function zx(e,t,n,i){var a=(a=Er.current)?Ec(a):null;if(!a)throw Error(nt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Wo(n.href),t=wo(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wo(n.href);var r=wo(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Fc(e)))?r._p||(s.instance=r,s.state.loading=5):(r=Fi.get(e),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fi.set(e,r)),KA(a,e,r,s.state))),t&&i===null)throw Error(nt(528,""));return s}if(t&&i!==null)throw Error(nt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=el(n),t=wo(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(nt(444,e))}}function Wo(e){return'href="'+Pi(e)+'"'}function Fc(e){return'link[rel="stylesheet"]['+e+"]"}function BS(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function KA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Nh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Nh]=!0,t.onload=t.onerror=fb.bind(null,t),Cn(t,"link",n),gn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function el(e){return'[src="'+Pi(e)+'"]'}function kc(e){return"script[async]"+e}function Bx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Pi(n.href)+'"]');if(i)return t.instance=i,gn(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),gn(i),Cn(i,"style",a),bh(i,n.precedence,e),t.instance=i;case"stylesheet":a=Wo(n.href);var r=e.querySelector(Fc(a));if(r)return t.state.loading|=4,t.instance=r,gn(r),r;i=BS(n),(a=Fi.get(a))&&Ng(i,a),r=(e.ownerDocument||e).createElement("link"),gn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Cn(r,"link",i),t.state.loading|=4,bh(r,n.precedence,e),t.instance=r;case"script":return r=el(n.src),(a=e.querySelector(kc(r)))?(t.instance=a,gn(a),a):(i=n,(a=Fi.get(r))&&(i=Ce({},n),Dg(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),gn(a),Cn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(nt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bh(i,n.precedence,e));return t.instance}function bh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ng(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sh=null;function Fx(e,t,n){if(Sh===null){var i=new Map,a=Sh=new Map;a.set(n,i)}else a=Sh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Lc]||r[Tn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function L0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function JA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function FS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Hx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=kS(t),e.suspenseyImages.push(t)),e=$A.bind(e),t.decode().then(e,e))}function jA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Wo(i.href),r=t.querySelector(Fc(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,gn(r);return}r=t.ownerDocument||t,i=BS(i),(a=Fi.get(a))&&Ng(i,a),r=r.createElement("link"),gn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Cn(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=wc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Mh=0;function QA(e,t){return e.stylesheets&&e.count===0&&Th(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Th(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Mh===0&&(Mh=62500*gA());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Th(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Mh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function HS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Th(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function wc(){this.count--,HS(this)}function $A(){this.imgCount--,HS(this)}var $h=null;function Th(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$h=new Map,t.forEach(t3,e),$h=null,wc.call(e))}function t3(e,t){if(!(t.state.loading&4)){var n=$h.get(e);if(n)var i=n.get(null);else{n=new Map,$h.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=wc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var qo={$$typeof:va,Provider:null,Consumer:null,_currentValue:vs,_currentValue2:vs,_threadCount:0};function e3(e,t,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qp(0),this.hiddenUpdates=Qp(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function VS(e,t,n,i,a,r,s,o,l,c,h,p){return e=new e3(e,t,n,s,l,c,h,p,o),t=1,r===!0&&(t|=24),r=ii(3,null,null,t),e.current=r,r.stateNode=e,t=j0(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},tg(r),e}function GS(e){return e?(e=So,e):So}function XS(e,t,n,i,a,r){a=GS(a),i.context===null?i.context=a:i.pendingContext=a,i=Ar(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Cr(e,i,t),n!==null&&(ai(n,e,t),ac(n,e,t))}function Vx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ug(e,t){Vx(e,t),(e=e.alternate)&&Vx(e,t)}function WS(e){if(e.tag===13||e.tag===31){var t=Ls(e,67108864);t!==null&&ai(t,e,67108864),Ug(e,67108864)}}function Gx(e){if(e.tag===13||e.tag===31){var t=yi();t=F0(t);var n=Ls(e,t);n!==null&&ai(n,e,t),Ug(e,t)}}var Yo=!0;function n3(e,t,n,i){var a=Ft.T;Ft.T=null;var r=pe.p;try{pe.p=2,Lg(e,t,n,i)}finally{pe.p=r,Ft.T=a}}function i3(e,t,n,i){var a=Ft.T;Ft.T=null;var r=pe.p;try{pe.p=8,Lg(e,t,n,i)}finally{pe.p=r,Ft.T=a}}function Lg(e,t,n,i){if(Yo){var a=I0(i);if(a===null)bm(e,t,i,tf,n),Xx(e,i);else if(r3(a,e,t,n,i))i.stopPropagation();else if(Xx(e,i),t&4&&-1<a3.indexOf(e)){for(;a!==null;){var r=Jo(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=fs(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-_i(s);o.entanglements[1]|=l,s&=~l}Ea(r),(de&6)===0&&(Zh=gi()+500,Bc(0,!1))}}break;case 31:case 13:o=Ls(r,2),o!==null&&ai(o,r,2),vf(),Ug(r,2)}if(r=I0(i),r===null&&bm(e,t,i,tf,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else bm(e,t,i,null,n)}}function I0(e){return e=V0(e),Ig(e)}var tf=null;function Ig(e){if(tf=null,e=ms(e),e!==null){var t=Rc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Jx(t),e!==null)return e;e=null}else if(n===31){if(e=jx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tf=e,null}function qS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_E()){case ib:return 2;case ab:return 8;case Rh:case yE:return 32;case rb:return 268435456;default:return 32}default:return 32}}var P0=!1,Ur=null,Lr=null,Ir=null,Ac=new Map,Cc=new Map,_r=[],a3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xx(e,t){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ac.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cc.delete(t.pointerId)}}function Yl(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Jo(t),t!==null&&WS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function r3(e,t,n,i,a){switch(t){case"focusin":return Ur=Yl(Ur,e,t,n,i,a),!0;case"dragenter":return Lr=Yl(Lr,e,t,n,i,a),!0;case"mouseover":return Ir=Yl(Ir,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Ac.set(r,Yl(Ac.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Cc.set(r,Yl(Cc.get(r)||null,e,t,n,i,a)),!0}return!1}function YS(e){var t=ms(e.target);if(t!==null){var n=Rc(t);if(n!==null){if(t=n.tag,t===13){if(t=Jx(n),t!==null){e.blockedOn=t,gy(e.priority,function(){Gx(n)});return}}else if(t===31){if(t=jx(n),t!==null){e.blockedOn=t,gy(e.priority,function(){Gx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=I0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Bm=i,n.target.dispatchEvent(i),Bm=null}else return t=Jo(n),t!==null&&WS(t),e.blockedOn=n,!1;t.shift()}return!0}function Wx(e,t,n){Eh(e)&&n.delete(t)}function s3(){P0=!1,Ur!==null&&Eh(Ur)&&(Ur=null),Lr!==null&&Eh(Lr)&&(Lr=null),Ir!==null&&Eh(Ir)&&(Ir=null),Ac.forEach(Wx),Cc.forEach(Wx)}function rh(e,t){e.blockedOn===t&&(e.blockedOn=null,P0||(P0=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,s3)))}var sh=null;function qx(e){sh!==e&&(sh=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){sh===e&&(sh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Ig(i||n)===null)continue;break}var r=Jo(n);r!==null&&(e.splice(t,3),t-=3,t0(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Zo(e){function t(l){return rh(l,e)}Ur!==null&&rh(Ur,e),Lr!==null&&rh(Lr,e),Ir!==null&&rh(Ir,e),Ac.forEach(t),Cc.forEach(t);for(var n=0;n<_r.length;n++){var i=_r[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)YS(n),n.blockedOn===null&&_r.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[si]||null;if(typeof r=="function")s||qx(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[si]||null)o=s.formAction;else if(Ig(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),qx(n)}}}function ZS(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Pg(e){this._internalRoot=e}xf.prototype.render=Pg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(nt(409));var n=t.current,i=yi();XS(n,i,e,t,null,null)};xf.prototype.unmount=Pg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;XS(e.current,2,null,e,null,null),vf(),t[Ko]=null}};function xf(e){this._internalRoot=e}xf.prototype.unstable_scheduleHydration=function(e){if(e){var t=hb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_r.length&&t!==0&&t<_r[n].priority;n++);_r.splice(n,0,e),n===0&&YS(e)}};var Yx=Zx.version;if(Yx!=="19.3.0")throw Error(nt(527,Yx,"19.3.0"));pe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(nt(188)):(e=Object.keys(e).join(","),Error(nt(268,e)));return e=oE(t),e=e!==null?Qx(e):null,e=e===null?null:e.stateNode,e};var o3={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ft,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Zl.isDisabled&&Zl.supportsFiber))try{Nc=Zl.inject(o3),vi=Zl}catch{}var Zl;bf.createRoot=function(e,t){if(!Kx(e))throw Error(nt(299));var n=!1,i="",a=C1,r=R1,s=N1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=VS(e,1,!1,null,null,n,i,null,a,r,s,ZS),e[Ko]=t.current,wg(e),new Pg(t)};bf.hydrateRoot=function(e,t,n){if(!Kx(e))throw Error(nt(299));var i=!1,a="",r=C1,s=R1,o=N1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=VS(e,1,!0,t,n??null,i,a,l,r,s,o,ZS),t.context=GS(null),n=t.current,i=yi(),i=F0(i),a=Ar(i),a.callback=null,Cr(n,a,i),n=i,t.current.lanes=n,Uc(t,n),Ea(t),e[Ko]=t.current,wg(e),new xf(t)};bf.version="19.3.0"});var QS=ua((h4,jS)=>{"use strict";function JS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JS)}catch(e){console.error(e)}}JS(),jS.exports=KS()});var eM=ua(Mf=>{"use strict";var l3=Symbol.for("react.transitional.element"),c3=Symbol.for("react.fragment");function tM(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:l3,type:e,key:i,ref:t!==void 0?t:null,props:n}}Mf.Fragment=c3;Mf.jsx=tM;Mf.jsxs=tM});var Qt=ua((g4,nM)=>{"use strict";nM.exports=eM()});var MT=Pt(QS());var Ps=Pt(dn());var $S=(e,t,n)=>Array.from({length:n},(i,a)=>`assets/${e}/${t}${String(a).padStart(2,"0")}.webp`),nl={racket:$S("racket","r",72),clay:$S("clay","c",40)},Sf=["img/hero-serve.jpg","assets/hero-serve-depth.webp",...nl.racket.filter((e,t)=>t%3===0),...nl.clay.filter((e,t)=>t%4===0)];var il=Pt(dn()),iM=Pt(Qt());function Tf({progress:e,capacity:t=26,tone:n="dark",onFull:i}){let a=(0,il.useRef)(null),r=(0,il.useRef)(e),s=(0,il.useRef)(i);return r.current=e,s.current=i,(0,il.useEffect)(()=>{let o=a.current,l=o.getContext("2d"),c=Math.min(devicePixelRatio||1,2),h=o.clientWidth,p=o.clientHeight;o.width=h*c,o.height=p*c;let u=Math.min(h,p)*.052,d=h*.22,m=h*.78,b=p*.36,g=p*.9,f=h*.035,v=[[d,b,d+f,g],[d+f,g,m-f,g],[m-f,g,m,b]],M=[],_=0,x=!1,T=0,w=(D,[I,C,L,k])=>{let B=L-I,V=k-C,z=B*B+V*V,O=Math.max(0,Math.min(1,((D.x-I)*B+(D.y-C)*V)/z)),Y=I+B*O,ot=C+V*O,it=D.x-Y,Ot=D.y-ot,Ut=Math.hypot(it,Ot);if(Ut<u&&Ut>1e-6){let lt=u-Ut;D.x+=it/Ut*lt,D.y+=Ot/Ut*lt}},y=(D,I,C)=>{let L=l.createRadialGradient(D-u*.35,I-u*.4,u*.1,D,I,u);L.addColorStop(0,"#f1f59a"),L.addColorStop(.6,"#d9e05a"),L.addColorStop(1,"#98a31a"),l.fillStyle=L,l.beginPath(),l.arc(D,I,u,0,Math.PI*2),l.fill(),l.save(),l.beginPath(),l.arc(D,I,u,0,Math.PI*2),l.clip(),l.translate(D,I),l.rotate(C),l.strokeStyle="rgba(251,251,242,.95)",l.lineWidth=Math.max(1,u*.14),l.beginPath(),l.arc(-u*1.25,0,u*.9,-.95,.95),l.stroke(),l.beginPath(),l.arc(u*1.25,0,u*.9,Math.PI-.95,Math.PI+.95),l.stroke(),l.restore()},A=n==="dark"?"rgba(245,240,230,.75)":"rgba(21,36,26,.7)",R=n==="dark"?"rgba(245,240,230,.28)":"rgba(21,36,26,.25)",U=D=>{_=requestAnimationFrame(U);let I=Math.round(Math.max(0,Math.min(1,r.current))*t);if(M.length<I&&D-T>55){T=D;let V=h*.5+(Math.random()-.5)*(m-d)*.5;M.push({x:V,y:-u*2,px:V-(Math.random()-.5)*2,py:-u*2-3,rot:Math.random()*6,born:D})}for(let V of M){let z=(V.x-V.px)*.995,O=(V.y-V.py)*.995;V.px=V.x,V.py=V.y,V.x+=z,V.y+=O+.55,V.rot+=z/u}for(let V=0;V<4;V++)for(let z=0;z<M.length;z++){let O=M[z];for(let Y=z+1;Y<M.length;Y++){let ot=M[Y],it=ot.x-O.x,Ot=ot.y-O.y,Ut=Math.hypot(it,Ot);if(Ut<2*u&&Ut>1e-6){let lt=(2*u-Ut)/Ut/2;O.x-=it*lt,O.y-=Ot*lt,ot.x+=it*lt,ot.y+=Ot*lt}}for(let Y of v)w(O,Y);O.y>b&&(O.x=Math.max(d+u*.6,Math.min(m-u*.6,O.x)))}l.setTransform(c,0,0,c,0,0),l.clearRect(0,0,h,p),l.strokeStyle=R,l.lineWidth=1.2,l.beginPath(),l.ellipse(h/2,b,(m-d)/2,p*.035,0,Math.PI,Math.PI*2),l.stroke(),l.fillStyle=n==="dark"?"rgba(0,0,0,.3)":"rgba(21,36,26,.12)",l.beginPath(),l.ellipse(h/2,g+p*.045,(m-d)*.55,p*.025,0,0,Math.PI*2),l.fill();for(let V of M)y(V.x,V.y,V.rot);l.strokeStyle=A,l.lineWidth=1.4,l.beginPath();let C=9;for(let V=0;V<=C;V++){let z=V/C,O=d+(m-d)*z,Y=d+f+(m-d-2*f)*z,ot=Math.sin(z*Math.PI)*p*.035;l.moveTo(O,b+ot),l.lineTo(Y,g+ot*.7)}for(let V of[0,.5,1]){let z=b+(g-b)*V,O=f*V;l.moveTo(d+O,z),l.ellipse(h/2,z,(m-d)/2-O,p*.035,0,Math.PI,0,!0)}l.stroke(),l.lineWidth=2,l.beginPath(),l.moveTo(d+f,g),l.lineTo(d+f-h*.04,g+p*.06),l.moveTo(m-f,g),l.lineTo(m-f+h*.04,g+p*.06);let L=M.length/t,k=p*.02+(1-L)*p*0;l.moveTo(d,b),l.quadraticCurveTo(d-h*.08,b-p*.2-k,h*.5-h*.06,b-p*.27-k),l.moveTo(m,b),l.quadraticCurveTo(m+h*.08,b-p*.2-k,h*.5+h*.06,b-p*.27-k),l.stroke(),M.length>=t&&D-T>750&&!x&&(x=!0,s.current?.())};return _=requestAnimationFrame(U),()=>cancelAnimationFrame(_)},[t,n]),(0,iM.jsx)("canvas",{ref:a,className:"lab-basket","aria-hidden":!0})}var wa=Pt(Qt());function aM(){let[e,t]=(0,Ps.useState)(0),[n,i]=(0,Ps.useState)(0),[a,r]=(0,Ps.useState)(!1),[s,o]=(0,Ps.useState)(!1);(0,Ps.useEffect)(()=>{let c=0,h=!0,p=Sf.length,u=performance.now(),d=setTimeout(()=>h&&t(1),6e3);return Sf.forEach(m=>{let b=new Image;b.onload=b.onerror=()=>{c++;let g=Math.max(0,900*(c/p)-(performance.now()-u));setTimeout(()=>{h&&(t(f=>Math.max(f,c/p)),i(c))},g)},b.src=m}),document.documentElement.classList.add("lab-loading"),()=>{h=!1,clearTimeout(d),document.documentElement.classList.remove("lab-loading")}},[]);let l=()=>{setTimeout(()=>o(!0),250),setTimeout(()=>{r(!0),document.documentElement.classList.remove("lab-loading")},1250)};return a?null:(0,wa.jsx)("div",{className:`lab-preload${s?" is-lift":""}`,"aria-hidden":!0,children:(0,wa.jsxs)("div",{className:"lab-preload__inner",children:[(0,wa.jsx)(Tf,{progress:e,capacity:24,tone:"dark",onFull:l}),(0,wa.jsxs)("p",{className:"lab-preload__count",children:[(0,wa.jsx)("b",{children:Math.round(e*24)})," / 24 labda"]}),(0,wa.jsx)("p",{className:"lab-preload__note",children:e<1?"P\xE1ly\xE1t k\xE9sz\xEDt\xFCnk el\u0151\u2026":"Mehet!"}),(0,wa.jsxs)("span",{className:"lab-preload__tag",children:[(0,wa.jsx)("b",{children:"42"})," Ball basket progress \xB7 ",n,"/",Sf.length," f\xE1jl"]})]})})}var Hc=Pt(dn()),al=Pt(Qt());function rM(){let e=(0,Hc.useRef)(null),t=(0,Hc.useRef)(null);return(0,Hc.useEffect)(()=>{let n=0,i="bar",a=0,r={x:0,y:0},s=0,o=0,l=0,c=9,h=()=>{let u=document.getElementById("lab-cta");if(!u)return null;let d=u.getBoundingClientRect();return{x:d.left+d.width*.8,y:d.top-c,vis:d.top<innerHeight*.72&&d.top>90}},p=u=>{n=requestAnimationFrame(p);let d=document.documentElement.scrollHeight-innerHeight,m=d>0?Math.min(1,scrollY/d):0,b=document.querySelector(".header")?.getBoundingClientRect().bottom??68,g=12+m*(innerWidth-24),f=Math.max(68,b)-c,v=h(),M=!!v?.vis;if(i==="bar"&&M?(i="drop",a=u,r={x:s,y:o}):(i==="rest"||i==="drop")&&!M&&(i="back",a=u,r={x:s,y:o}),i==="bar"){let _=g;l+=(_-s)/c,s=_,o=f}else if(i==="drop"&&v){let _=Math.min(1,(u-a)/1100),x=r.x+(v.x-r.x)*Math.min(1,_*1.6),T=[.55,.8,1],w;if(_<T[0]){let y=_/T[0];w=r.y+(v.y-r.y)*y*y}else if(_<T[1]){let y=(_-T[0])/(T[1]-T[0]);w=v.y-4*y*(1-y)*46}else{let y=(_-T[1])/(T[2]-T[1]);w=v.y-4*y*(1-y)*12}l+=(x-s)/c,s=x,o=w,_>=T[0]&&!t.current.dataset.hit&&(t.current.dataset.hit="1",dispatchEvent(new CustomEvent("lab:balldrop",{detail:{x:v.x,y:v.y+c}}))),_>=1&&(i="rest")}else if(i==="rest"&&v)s=v.x,o=v.y;else if(i==="back"){let _=Math.min(1,(u-a)/500),x=1-(1-_)**3;s=r.x+(g-r.x)*x,o=r.y+(f-r.y)*x,_>=1&&(i="bar",delete t.current.dataset.hit)}e.current&&(e.current.style.transform=`scaleX(${m})`),t.current&&(t.current.style.transform=`translate3d(${s-c}px, ${o-c}px, 0) rotate(${l}rad)`)};return n=requestAnimationFrame(p),()=>cancelAnimationFrame(n)},[]),(0,al.jsxs)("div",{className:"lab-progress","aria-hidden":!0,children:[(0,al.jsx)("div",{className:"lab-progress__track"}),(0,al.jsx)("div",{ref:e,className:"lab-progress__line"}),(0,al.jsx)("div",{ref:t,className:"lab-progress__ball"})]})}var wu=Pt(dn());var Eu=Pt(dn());var CM=0,hv=1,RM=2;var lu=1,NM=2,Al=3,es=0,Jn=1,Ua=2,La=0,Cl=1,fv=2,dv=3,pv=4,Cd=5;var Zs=100,DM=101,UM=102,LM=103,IM=104,PM=200,cu=201,OM=202,zM=203,mv=204,uu=205,BM=206,FM=207,kM=208,HM=209,VM=210,GM=211,XM=212,WM=213,qM=214,Kf=0,Jf=1,jf=2,xl=3,Qf=4,$f=5,td=6,ed=7,gv=0,YM=1,ZM=2,ea=0,vv=1,_v=2,yv=3,xv=4,bv=5,Sv=6,Mv=7;var Tv=300,ns=301,Ks=302,Rd=303,Nd=304,hu=306,nd=1e3,Ca=1001,id=1002,yn=1003,KM=1004;var fu=1005;var cn=1006,Dd=1007;var is=1008;var Ci=1009,Ev=1010,wv=1011,Rl=1012,Ud=1013,na=1014,ia=1015,aa=1016,Ld=1017,Id=1018,Nl=1020,Av=35902,Cv=35899,Rv=1021,Nv=1022,Vi=1023,Ra=1026,as=1027,Dv=1028,Pd=1029,rs=1030,Od=1031;var zd=1033,du=33776,pu=33777,mu=33778,gu=33779,Bd=35840,Fd=35841,kd=35842,Hd=35843,Vd=36196,Gd=37492,Xd=37496,Wd=37488,qd=37489,vu=37490,Yd=37491,Zd=37808,Kd=37809,Jd=37810,jd=37811,Qd=37812,$d=37813,tp=37814,ep=37815,np=37816,ip=37817,ap=37818,rp=37819,sp=37820,op=37821,lp=36492,cp=36494,up=36495,hp=36283,fp=36284,_u=36285,dp=36286;var Yc=2300,ad=2301,qf=2302,av=2303,rv=2400,sv=2401,ov=2402;var JM=3200;var Uv=0,jM=1,ra="",Ti="srgb",Vs="srgb-linear",Zc="linear",ye="srgb";var Yf=7680;var QM=519,$M=512,t2=513,e2=514,pp=515,n2=516,i2=517,mp=518,a2=519,r2=35044;var Lv="300 es",ta=2e3,Kc=2001;function u3(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function h3(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function bl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function s2(){let e=bl("canvas");return e.style.display="block",e}var sM={},Sl=null;function Iv(...e){let t="THREE."+e.shift();Sl?Sl("log",t,...e):console.log(t,...e)}function o2(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Bt(...e){e=o2(e);let t="THREE."+e.shift();if(Sl)Sl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function kt(...e){e=o2(e);let t="THREE."+e.shift();if(Sl)Sl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Hs(...e){let t=e.join(" ");t in sM||(sM[t]=!0,Bt(...e))}function l2(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var c2={[Kf]:Jf,[jf]:td,[Qf]:ed,[xl]:$f,[Jf]:Kf,[td]:jf,[ed]:Qf,[$f]:xl},Na=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Og=Math.PI/180,rd=180/Math.PI;function yu(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[e&255]+zn[e>>8&255]+zn[e>>16&255]+zn[e>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function se(e,t,n){return Math.max(t,Math.min(n,e))}function f3(e,t){return(e%t+t)%t}function zg(e,t,n){return(1-n)*e+n*t}function Vc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fv=class Fv{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fv.prototype.isVector2=!0;var Wt=Fv,Da=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=r[s+0],d=r[s+1],m=r[s+2],b=r[s+3];if(p!==b||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+p*b;g<0&&(u=-u,d=-d,m=-m,b=-b,g=-g);let f=1-o;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);f=Math.sin(f*v)/M,o=Math.sin(o*v)/M,l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+b*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+b*o;let v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,r,s){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=r[s],u=r[s+1],d=r[s+2],m=r[s+3];return t[n]=o*m+h*p+l*d-c*u,t[n+1]=l*m+h*u+c*p-o*d,t[n+2]=c*m+h*d+o*u-l*p,t[n+3]=h*m-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(r/2),u=l(i/2),d=l(a/2),m=l(r/2);switch(s){case"XYZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"YXZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"ZXY":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"ZYX":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"YZX":this._x=u*h*p+c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p-u*d*m;break;case"XZY":this._x=u*h*p-c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p+u*d*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(s-a)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+s)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(r-c)/d,this._x=(a+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(s-a)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,r=t._z,s=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kv=class kv{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(oM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(oM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*c+s*p-o*h,this.y=i+l*h+o*c-r*p,this.z=a+l*p+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bg.copy(this).projectOnVector(t),this.sub(Bg)}reflect(t){return this.sub(Bg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kv.prototype.isVector3=!0;var Z=kv,Bg=new Z,oM=new Da,Hv=class Hv{constructor(t,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],m=i[8],b=a[0],g=a[3],f=a[6],v=a[1],M=a[4],_=a[7],x=a[2],T=a[5],w=a[8];return r[0]=s*b+o*v+l*x,r[3]=s*g+o*M+l*T,r[6]=s*f+o*_+l*w,r[1]=c*b+h*v+p*x,r[4]=c*g+h*M+p*T,r[7]=c*f+h*_+p*w,r[2]=u*b+d*v+m*x,r[5]=u*g+d*M+m*T,r[8]=u*f+d*_+m*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*s-o*c,u=o*l-h*r,d=c*r-s*l,m=n*p+i*u+a*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=p*b,t[1]=(a*c-h*i)*b,t[2]=(o*i-a*s)*b,t[3]=u*b,t[4]=(h*n-a*l)*b,t[5]=(a*r-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(s*n-i*r)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fg.makeScale(t,n)),this}rotate(t){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fg.makeRotation(-t)),this}translate(t,n){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hv.prototype.isMatrix3=!0;var Gt=Hv,Fg=new Gt,lM=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cM=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d3(){let e={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ye&&(a.r=ar(a.r),a.g=ar(a.g),a.b=ar(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ye&&(a.r=yl(a.r),a.g=yl(a.g),a.b=yl(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ra?Zc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Vs]:{primaries:t,whitePoint:i,transfer:Zc,toXYZ:lM,fromXYZ:cM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:lM,fromXYZ:cM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),e}var re=d3();function ar(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var rl,sd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rl===void 0&&(rl=bl("canvas")),rl.width=t.width,rl.height=t.height;let a=rl.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=rl}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=bl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ar(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ar(n[i]/255)*255):n[i]=ar(n[i]);return{data:n,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},p3=0,Ml=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p3++}),this.uuid=yu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(kg(a[s].image)):r.push(kg(a[s]))}else r=kg(a);i.url=r}return n||(t.images[this.uuid]=i),i}};function kg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?sd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var m3=0,Hg=new Z,Kn=class e extends Na{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ca,a=Ca,r=cn,s=is,o=Vi,l=Ci,c=e.DEFAULT_ANISOTROPY,h=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m3++}),this.uuid=yu(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hg).x}get height(){return this.source.getSize(Hg).y}get depth(){return this.source.getSize(Hg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Bt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Bt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Tv;Kn.DEFAULT_ANISOTROPY=1;var Vv=class Vv{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],m=l[9],b=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,_=(d+1)/2,x=(f+1)/2,T=(h+u)/4,w=(p+b)/4,y=(m+g)/4;return M>_&&M>x?M<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(M),a=T/i,r=w/i):_>x?_<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),i=T/a,r=y/a):x<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(x),i=w/r,a=y/r),this.set(i,a,r,n),this}let v=Math.sqrt((g-m)*(g-m)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(p-b)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this.w=se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this.w=se(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vv.prototype.isVector4=!0;var Xe=Vv,od=class extends Na{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},r=new Kn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new Ml(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends od{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Jc=class extends Kn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ld=class extends Kn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ad=class Ad{constructor(t,n,i,a,r,s,o,l,c,h,p,u,d,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,p,u,d,m,b,g)}set(t,n,i,a,r,s,o,l,c,h,p,u,d,m,b,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=m,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ad().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/sl.setFromMatrixColumn(t,0).length(),r=1/sl.setFromMatrixColumn(t,1).length(),s=1/sl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=s*h,d=s*p,m=o*h,b=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+m*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=m+d*c,n[10]=s*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,m=c*h,b=c*p;n[0]=u+b*o,n[4]=m*o-d,n[8]=s*c,n[1]=s*p,n[5]=s*h,n[9]=-o,n[2]=d*o-m,n[6]=b+u*o,n[10]=s*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,m=c*h,b=c*p;n[0]=u-b*o,n[4]=-s*p,n[8]=m+d*o,n[1]=d+m*o,n[5]=s*h,n[9]=b-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){let u=s*h,d=s*p,m=o*h,b=o*p;n[0]=l*h,n[4]=m*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-m,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){let u=s*l,d=s*c,m=o*l,b=o*c;n[0]=l*h,n[4]=b-u*p,n[8]=m*p+d,n[1]=p,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+m,n[10]=u-b*p}else if(t.order==="XZY"){let u=s*l,d=s*c,m=o*l,b=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+b,n[5]=s*h,n[9]=d*p-m,n[2]=m*p-d,n[6]=o*h,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g3,t,v3)}lookAt(t,n,i){let a=this.elements;return Si.subVectors(t,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Vr.crossVectors(i,Si),Vr.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Vr.crossVectors(i,Si)),Vr.normalize(),Ef.crossVectors(Si,Vr),a[0]=Vr.x,a[4]=Ef.x,a[8]=Si.x,a[1]=Vr.y,a[5]=Ef.y,a[9]=Si.y,a[2]=Vr.z,a[6]=Ef.z,a[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],m=i[2],b=i[6],g=i[10],f=i[14],v=i[3],M=i[7],_=i[11],x=i[15],T=a[0],w=a[4],y=a[8],A=a[12],R=a[1],U=a[5],D=a[9],I=a[13],C=a[2],L=a[6],k=a[10],B=a[14],V=a[3],z=a[7],O=a[11],Y=a[15];return r[0]=s*T+o*R+l*C+c*V,r[4]=s*w+o*U+l*L+c*z,r[8]=s*y+o*D+l*k+c*O,r[12]=s*A+o*I+l*B+c*Y,r[1]=h*T+p*R+u*C+d*V,r[5]=h*w+p*U+u*L+d*z,r[9]=h*y+p*D+u*k+d*O,r[13]=h*A+p*I+u*B+d*Y,r[2]=m*T+b*R+g*C+f*V,r[6]=m*w+b*U+g*L+f*z,r[10]=m*y+b*D+g*k+f*O,r[14]=m*A+b*I+g*B+f*Y,r[3]=v*T+M*R+_*C+x*V,r[7]=v*w+M*U+_*L+x*z,r[11]=v*y+M*D+_*k+x*O,r[15]=v*A+M*I+_*B+x*Y,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],m=t[3],b=t[7],g=t[11],f=t[15],v=l*d-c*u,M=o*d-c*p,_=o*u-l*p,x=s*d-c*h,T=s*u-l*h,w=s*p-o*h;return n*(b*v-g*M+f*_)-i*(m*v-g*x+f*T)+a*(m*M-b*x+f*w)-r*(m*_-b*T+g*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(s*h-o*c)-i*(r*h-o*l)+a*(r*c-s*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],m=t[12],b=t[13],g=t[14],f=t[15],v=n*o-i*s,M=n*l-a*s,_=n*c-r*s,x=i*l-a*o,T=i*c-r*o,w=a*c-r*l,y=h*b-p*m,A=h*g-u*m,R=h*f-d*m,U=p*g-u*b,D=p*f-d*b,I=u*f-d*g,C=v*I-M*D+_*U+x*R-T*A+w*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=(o*I-l*D+c*U)*L,t[1]=(a*D-i*I-r*U)*L,t[2]=(b*w-g*T+f*x)*L,t[3]=(u*T-p*w-d*x)*L,t[4]=(l*R-s*I-c*A)*L,t[5]=(n*I-a*R+r*A)*L,t[6]=(g*_-m*w-f*M)*L,t[7]=(h*w-u*_+d*M)*L,t[8]=(s*D-o*R+c*y)*L,t[9]=(i*R-n*D-r*y)*L,t[10]=(m*T-b*_+f*v)*L,t[11]=(p*_-h*T-d*v)*L,t[12]=(o*A-s*U-l*y)*L,t[13]=(n*U-i*A+a*y)*L,t[14]=(b*M-m*x-g*v)*L,t[15]=(h*x-p*M+u*v)*L,this}scale(t){let n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,p=o+o,u=r*c,d=r*h,m=r*p,b=s*h,g=s*p,f=o*p,v=l*c,M=l*h,_=l*p,x=i.x,T=i.y,w=i.z;return a[0]=(1-(b+f))*x,a[1]=(d+_)*x,a[2]=(m-M)*x,a[3]=0,a[4]=(d-_)*T,a[5]=(1-(u+f))*T,a[6]=(g+v)*T,a[7]=0,a[8]=(m+M)*w,a[9]=(g-v)*w,a[10]=(1-(u+b))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=sl.set(a[0],a[1],a[2]).length(),o=sl.set(a[4],a[5],a[6]).length(),l=sl.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Ji.copy(this);let c=1/s,h=1/o,p=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=p,Ji.elements[9]*=p,Ji.elements[10]*=p,n.setFromRotationMatrix(Ji),i.x=s,i.y=o,i.z=l,this}makePerspective(t,n,i,a,r,s,o=ta,l=!1){let c=this.elements,h=2*r/(n-t),p=2*r/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a),m,b;if(l)m=r/(s-r),b=s*r/(s-r);else if(o===ta)m=-(s+r)/(s-r),b=-2*s*r/(s-r);else if(o===Kc)m=-s/(s-r),b=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=ta,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a),m,b;if(l)m=1/(s-r),b=s/(s-r);else if(o===ta)m=-2/(s-r),b=-(s+r)/(s-r);else if(o===Kc)m=-1/(s-r),b=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Ad.prototype.isMatrix4=!0;var Ye=Ad,sl=new Z,Ji=new Ye,g3=new Z(0,0,0),v3=new Z(1,1,1),Vr=new Z,Ef=new Z,Si=new Z,uM=new Ye,hM=new Da,Zr=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-se(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return uM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hM.setFromEuler(this),this.setFromQuaternion(hM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zr.DEFAULT_ORDER="XYZ";var jc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_3=0,fM=new Z,ol=new Da,$a=new Ye,wf=new Z,Gc=new Z,y3=new Z,x3=new Da,dM=new Z(1,0,0),pM=new Z(0,1,0),mM=new Z(0,0,1),gM={type:"added"},b3={type:"removed"},ll={type:"childadded",child:null},Vg={type:"childremoved",child:null},Ei=class e extends Na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_3++}),this.uuid=yu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new Zr,i=new Da,a=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Gt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ol.setFromAxisAngle(t,n),this.quaternion.multiply(ol),this}rotateOnWorldAxis(t,n){return ol.setFromAxisAngle(t,n),this.quaternion.premultiply(ol),this}rotateX(t){return this.rotateOnAxis(dM,t)}rotateY(t){return this.rotateOnAxis(pM,t)}rotateZ(t){return this.rotateOnAxis(mM,t)}translateOnAxis(t,n){return fM.copy(t).applyQuaternion(this.quaternion),this.position.add(fM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(dM,t)}translateY(t){return this.translateOnAxis(pM,t)}translateZ(t){return this.translateOnAxis(mM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($a.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?wf.copy(t):wf.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$a.lookAt(Gc,wf,this.up):$a.lookAt(wf,Gc,this.up),this.quaternion.setFromRotationMatrix($a),a&&($a.extractRotation(a.matrixWorld),ol.setFromRotationMatrix($a),this.quaternion.premultiply(ol.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gM),ll.child=t,this.dispatchEvent(ll),ll.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(b3),Vg.child=t,this.dispatchEvent(Vg),Vg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$a.multiply(t.parent.matrixWorld)),t.applyMatrix4($a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gM),ll.child=t,this.dispatchEvent(ll),ll.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gc,t,y3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gc,x3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),p=s(t.shapes),u=s(t.skeletons),d=s(t.animations),m=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ei.DEFAULT_UP=new Z(0,1,0);Ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ks=class extends Ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},S3={type:"move"},Tl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=n.getJointPose(b,i),f=this._getHandJoint(c,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S3)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},u2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Af={h:0,s:0,l:0};function Gg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var le=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=re.workingColorSpace){if(t=f3(t,1),n=se(n,0,1),i=se(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Gg(s,r,t+1/3),this.g=Gg(s,r,t),this.b=Gg(s,r,t-1/3)}return re.colorSpaceToWorking(this,a),this}setStyle(t,n=Ti){function i(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Bt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ti){let i=u2[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=yl(t.r),this.g=yl(t.g),this.b=yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return re.workingToColorSpace(Bn.copy(this),t),Math.round(se(Bn.r*255,0,255))*65536+Math.round(se(Bn.g*255,0,255))*256+Math.round(se(Bn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(Bn.copy(this),n);let i=Bn.r,a=Bn.g,r=Bn.b,s=Math.max(i,a,r),o=Math.min(i,a,r),l,c,h=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=h<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ti){re.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,a=Bn.b;return t!==Ti?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Gr),this.setHSL(Gr.h+t,Gr.s+n,Gr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Gr),t.getHSL(Af);let i=zg(Gr.h,Af.h,n),a=zg(Gr.s,Af.s,n),r=zg(Gr.l,Af.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new le;le.NAMES=u2;var Gs=class extends Ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},ji=new Z,tr=new Z,Xg=new Z,er=new Z,cl=new Z,ul=new Z,vM=new Z,Wg=new Z,qg=new Z,Yg=new Z,Zg=new Xe,Kg=new Xe,Jg=new Xe,Yr=class e{constructor(t=new Z,n=new Z,i=new Z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ji.subVectors(t,n),a.cross(ji);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){ji.subVectors(a,n),tr.subVectors(i,n),Xg.subVectors(t,n);let s=ji.dot(ji),o=ji.dot(tr),l=ji.dot(Xg),c=tr.dot(tr),h=tr.dot(Xg),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,m=(s*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,er.x),l.addScaledVector(s,er.y),l.addScaledVector(o,er.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Zg.setScalar(0),Kg.setScalar(0),Jg.setScalar(0),Zg.fromBufferAttribute(t,n),Kg.fromBufferAttribute(t,i),Jg.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Zg,r.x),s.addScaledVector(Kg,r.y),s.addScaledVector(Jg,r.z),s}static isFrontFacing(t,n,i,a){return ji.subVectors(i,n),tr.subVectors(t,n),ji.cross(tr).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),ji.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,r=this.c,s,o;cl.subVectors(a,i),ul.subVectors(r,i),Wg.subVectors(t,i);let l=cl.dot(Wg),c=ul.dot(Wg);if(l<=0&&c<=0)return n.copy(i);qg.subVectors(t,a);let h=cl.dot(qg),p=ul.dot(qg);if(h>=0&&p<=h)return n.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(cl,s);Yg.subVectors(t,r);let d=cl.dot(Yg),m=ul.dot(Yg);if(m>=0&&d<=m)return n.copy(r);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(ul,o);let g=h*m-d*p;if(g<=0&&p-h>=0&&d-m>=0)return vM.subVectors(r,a),o=(p-h)/(p-h+(d-m)),n.copy(a).addScaledVector(vM,o);let f=1/(g+b+u);return s=b*f,o=u*f,n.copy(i).addScaledVector(cl,s).addScaledVector(ul,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kr=class{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Qi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Qi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Qi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Qi):Qi.fromBufferAttribute(r,s),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cf.copy(i.boundingBox)),Cf.applyMatrix4(t.matrixWorld),this.union(Cf)}let a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xc),Rf.subVectors(this.max,Xc),hl.subVectors(t.a,Xc),fl.subVectors(t.b,Xc),dl.subVectors(t.c,Xc),Xr.subVectors(fl,hl),Wr.subVectors(dl,fl),Os.subVectors(hl,dl);let n=[0,-Xr.z,Xr.y,0,-Wr.z,Wr.y,0,-Os.z,Os.y,Xr.z,0,-Xr.x,Wr.z,0,-Wr.x,Os.z,0,-Os.x,-Xr.y,Xr.x,0,-Wr.y,Wr.x,0,-Os.y,Os.x,0];return!jg(n,hl,fl,dl,Rf)||(n=[1,0,0,0,1,0,0,0,1],!jg(n,hl,fl,dl,Rf))?!1:(Nf.crossVectors(Xr,Wr),n=[Nf.x,Nf.y,Nf.z],jg(n,hl,fl,dl,Rf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Qi=new Z,Cf=new Kr,hl=new Z,fl=new Z,dl=new Z,Xr=new Z,Wr=new Z,Os=new Z,Xc=new Z,Rf=new Z,Nf=new Z,zs=new Z;function jg(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){zs.fromArray(e,r);let o=a.x*Math.abs(zs.x)+a.y*Math.abs(zs.y)+a.z*Math.abs(zs.z),l=t.dot(zs),c=n.dot(zs),h=i.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new Z,Df=new Wt,M3=0,an=class extends Na{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=r2,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Df.fromBufferAttribute(this,n),Df.applyMatrix3(t),this.setXY(n,Df.x,Df.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Vc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Vc(n,this.array)),n}setX(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Vc(n,this.array)),n}setY(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Vc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Vc(n,this.array)),n}setW(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),a=oi(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=oi(n,this.array),i=oi(i,this.array),a=oi(a,this.array),r=oi(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qc=class extends an{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var $c=class extends an{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Hi=class extends an{constructor(t,n,i){super(new Float32Array(t),n,i)}},T3=new Kr,Wc=new Z,Qg=new Z,Xs=class{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):T3.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wc.subVectors(t,this.center);let n=Wc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Wc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wc.copy(t.center).add(Qg)),this.expandByPoint(Wc.copy(t.center).sub(Qg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},E3=0,ki=new Ye,$g=new Ei,pl=new Z,Mi=new Kr,qc=new Kr,_n=new Z,wi=class e extends Na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E3++}),this.uuid=yu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u3(t)?$c:Qc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,n,i){return ki.makeTranslation(t,n,i),this.applyMatrix4(ki),this}scale(t,n,i){return ki.makeScale(t,n,i),this.applyMatrix4(ki),this}lookAt(t){return $g.lookAt(t),$g.updateMatrix(),this.applyMatrix4($g.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pl).negate(),this.translate(pl.x,pl.y,pl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,r=t.length;a<r;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Hi(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let r=n[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){let o=n[r];qc.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Mi.min,qc.min),Mi.expandByPoint(_n),_n.addVectors(Mi.max,qc.max),Mi.expandByPoint(_n)):(Mi.expandByPoint(qc.min),Mi.expandByPoint(qc.max))}Mi.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)_n.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(_n));if(n)for(let r=0,s=n.length;r<s;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(pl.fromBufferAttribute(t,c),_n.add(pl)),a=Math.max(a,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,r=n.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new Z,l[y]=new Z;let c=new Z,h=new Z,p=new Z,u=new Wt,d=new Wt,m=new Wt,b=new Z,g=new Z;function f(y,A,R){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),h.sub(c),p.sub(c),d.sub(u),m.sub(u);let U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(U),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(U),o[y].add(b),o[A].add(b),o[R].add(b),l[y].add(g),l[A].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,A=v.length;y<A;++y){let R=v[y],U=R.start,D=R.count;for(let I=U,C=U+D;I<C;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let M=new Z,_=new Z,x=new Z,T=new Z;function w(y){x.fromBufferAttribute(a,y),T.copy(x);let A=o[y];M.copy(A),M.sub(x.multiplyScalar(x.dot(A))).normalize(),_.crossVectors(T,A);let U=_.dot(l[y])<0?-1:1;s.setXYZW(y,M.x,M.y,M.z,U)}for(let y=0,A=v.length;y<A;++y){let R=v[y],U=R.start,D=R.count;for(let I=U,C=U+D;I<C;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let a=new Z,r=new Z,s=new Z,o=new Z,l=new Z,c=new Z,h=new Z,p=new Z;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),b=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,m),r.fromBufferAttribute(n,b),s.fromBufferAttribute(n,g),h.subVectors(s,r),p.subVectors(a,r),h.cross(p),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),h.subVectors(s,r),p.subVectors(a,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let f=0;f<h;f++)u[m++]=c[d++]}return new an(u,h,p)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tv=new Z,w3=new Z,A3=new Gt,$i=class{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=tv.subVectors(i,n).cross(w3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(tv),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(t.start).addScaledVector(a,s)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||A3.getNormalMatrix(t),a=this.coplanarPoint(tv).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},C3=0,Jr=class extends Na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C3++}),this.uuid=yu(),this.name="",this.type="Material",this.blending=Cl,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mv,this.blendDst=uu,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yf,this.stencilZFail=Yf,this.stencilZPass=Yf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Bt(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Bt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(n){let r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ir=new Z,ev=new Z,Uf=new Z,Lf=new Z,tu=class{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ir)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ir.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ir.copy(this.origin).addScaledVector(this.direction,n),ir.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){ev.copy(t).add(n).multiplyScalar(.5),Uf.copy(n).sub(t).normalize(),Lf.copy(this.origin).sub(ev);let r=t.distanceTo(n)*.5,s=-this.direction.dot(Uf),o=Lf.dot(this.direction),l=-Lf.dot(Uf),c=Lf.lengthSq(),h=Math.abs(1-s*s),p,u,d,m;if(h>0)if(p=s*l-o,u=s*o-l,m=r*h,p>=0)if(u>=-m)if(u<=m){let b=1/h;p*=b,u*=b,d=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(ev).addScaledVector(Uf,u),d}intersectSphere(t,n){if(t.radius<0)return null;ir.subVectors(t.center,this.origin);let i=ir.dot(this.direction),a=ir.dot(ir)-i*i,r=t.radius*t.radius;if(a>r)return null;let s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ir)!==null}intersectTriangle(t,n,i,a,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-s.x,u=t.y-s.y,d=t.z-s.z,m=n.x-s.x,b=n.y-s.y,g=n.z-s.z,f=i.x-s.x,v=i.y-s.y,M=i.z-s.z,_=Math.abs(l),x=Math.abs(c),T=Math.abs(h),w,y,A,R,U,D,I,C,L,k,B,V;if(_>=x&&_>=T?(A=l,D=p,L=m,V=f,l>=0?(w=c,y=h,R=u,U=d,I=b,C=g,k=v,B=M):(w=h,y=c,R=d,U=u,I=g,C=b,k=M,B=v)):x>=T?(A=c,D=u,L=b,V=v,c>=0?(w=h,y=l,R=d,U=p,I=g,C=m,k=M,B=f):(w=l,y=h,R=p,U=d,I=m,C=g,k=f,B=M)):(A=h,D=d,L=g,V=M,h>=0?(w=l,y=c,R=p,U=u,I=m,C=b,k=f,B=v):(w=c,y=l,R=u,U=p,I=b,C=m,k=v,B=f)),A===0)return null;let z=w/A,O=y/A,Y=1/A,ot=R-z*D,it=U-O*D,Ot=I-z*L,Ut=C-O*L,lt=k-z*V,q=B-O*V,Q=lt*Ut-q*Ot,j=ot*q-it*lt,gt=Ot*it-Ut*ot;if(a){if(Q<0||j<0||gt<0)return null}else if((Q<0||j<0||gt<0)&&(Q>0||j>0||gt>0))return null;let rt=Q+j+gt;if(rt===0)return null;let St=Y*(Q*D+j*L+gt*V);return(rt>0?St<0:St>0)?null:this.at(St/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},eu=class extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_M=new Ye,Bs=new tu,If=new Xs,yM=new Z,Pf=new Z,Of=new Z,zf=new Z,nv=new Z,Bf=new Z,xM=new Z,Ff=new Z,ui=class extends Ei{constructor(t=new wi,n=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(r&&o){Bf.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(nv.fromBufferAttribute(p,t),s?Bf.addScaledVector(nv,h):Bf.addScaledVector(nv.sub(n),h))}n.add(Bf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),If.copy(i.boundingSphere),If.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(If.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(If,yM)===null||Bs.origin.distanceToSquared(yM)>(t.far-t.near)**2))&&(_M.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(_M),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Bs)))}_computeIntersections(t,n,i){let a,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,b=u.length;m<b;m++){let g=u[m],f=s[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,x=M;_<x;_+=3){let T=o.getX(_),w=o.getX(_+1),y=o.getX(_+2);a=kf(this,f,t,i,c,h,p,T,w,y),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let m=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let g=m,f=b;g<f;g+=3){let v=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);a=kf(this,s,t,i,c,h,p,v,M,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,b=u.length;m<b;m++){let g=u[m],f=s[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,x=M;_<x;_+=3){let T=_,w=_+1,y=_+2;a=kf(this,f,t,i,c,h,p,T,w,y),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=m,f=b;g<f;g+=3){let v=g,M=g+1,_=g+2;a=kf(this,s,t,i,c,h,p,v,M,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}};function R3(e,t,n,i,a,r,s,o){let l;if(t.side===Jn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===es,o),l===null)return null;Ff.copy(o),Ff.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Ff);return c<n.near||c>n.far?null:{distance:c,point:Ff.clone(),object:e}}function kf(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,Pf),e.getVertexPosition(l,Of),e.getVertexPosition(c,zf);let h=R3(e,t,n,i,Pf,Of,zf,xM);if(h){let p=new Z;Yr.getBarycoord(xM,Pf,Of,zf,p),a&&(h.uv=Yr.getInterpolatedAttribute(a,o,l,c,p,new Wt)),r&&(h.uv1=Yr.getInterpolatedAttribute(r,o,l,c,p,new Wt)),s&&(h.normal=Yr.getInterpolatedAttribute(s,o,l,c,p,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Yr.getNormal(Pf,Of,zf,u.normal),h.face=u,h.barycoord=p}return h}var cd=class extends Kn{constructor(t=null,n=1,i=1,a,r,s,o,l,c=yn,h=yn,p,u){super(null,s,o,l,c,h,a,r,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=new Xs,N3=new Wt(.5,.5),Hf=new Z,nu=class{constructor(t=new $i,n=new $i,i=new $i,a=new $i,r=new $i,s=new $i){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ta,i=!1){let a=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],m=r[8],b=r[9],g=r[10],f=r[11],v=r[12],M=r[13],_=r[14],x=r[15];if(a[0].setComponents(c-s,d-h,f-m,x-v).normalize(),a[1].setComponents(c+s,d+h,f+m,x+v).normalize(),a[2].setComponents(c+o,d+p,f+b,x+M).normalize(),a[3].setComponents(c-o,d-p,f-b,x-M).normalize(),i)a[4].setComponents(l,u,g,_).normalize(),a[5].setComponents(c-l,d-u,f-g,x-_).normalize();else if(a[4].setComponents(c-l,d-u,f-g,x-_).normalize(),n===ta)a[5].setComponents(c+l,d+u,f+g,x+_).normalize();else if(n===Kc)a[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let n=N3.distanceTo(t.center);return Fs.radius=.7071067811865476+n,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Hf.x=a.normal.x>0?t.max.x:t.min.x,Hf.y=a.normal.y>0?t.max.y:t.min.y,Hf.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Hf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ud=class extends Jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bM=new Ye,lv=new tu,Vf=new Xs,Gf=new Z,iu=class extends Ei{constructor(t=new wi,n=new ud){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.matrixWorld,r=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vf.copy(i.boundingSphere),Vf.applyMatrix4(a),Vf.radius+=r,t.ray.intersectsSphere(Vf)===!1)return;bM.copy(a).invert(),lv.copy(t.ray).applyMatrix4(bM);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=u,b=d;m<b;m++){let g=c.getX(m);Gf.fromBufferAttribute(p,g),SM(Gf,g,l,a,t,n,this)}}else{let u=Math.max(0,s.start),d=Math.min(p.count,s.start+s.count);for(let m=u,b=d;m<b;m++)Gf.fromBufferAttribute(p,m),SM(Gf,m,l,a,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function SM(e,t,n,i,a,r,s){let o=lv.distanceSqToPoint(e);if(o<n){let l=new Z;lv.closestPointToPoint(e,l),l.applyMatrix4(i);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var au=class extends Kn{constructor(t=[],n=ns,i,a,r,s,o,l,c,h){super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var jr=class extends Kn{constructor(t,n,i=na,a,r,s,o=yn,l=yn,c,h=Ra,p=1){if(h!==Ra&&h!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},hd=class extends jr{constructor(t,n=na,i=ns,a,r,s=yn,o=yn,l,c=Ra){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ru=class extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},El=class e extends wi{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};let o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=0,d=0;m("z","y","x",-1,-1,i,n,t,s,r,0),m("z","y","x",1,-1,i,n,-t,s,r,1),m("x","z","y",1,1,t,i,n,a,s,2),m("x","z","y",1,-1,t,i,-n,a,s,3),m("x","y","z",1,-1,t,n,i,a,r,4),m("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Hi(c,3)),this.setAttribute("normal",new Hi(h,3)),this.setAttribute("uv",new Hi(p,2));function m(b,g,f,v,M,_,x,T,w,y,A){let R=_/w,U=x/y,D=_/2,I=x/2,C=T/2,L=w+1,k=y+1,B=0,V=0,z=new Z;for(let O=0;O<k;O++){let Y=O*U-I;for(let ot=0;ot<L;ot++){let it=ot*R-D;z[b]=it*v,z[g]=Y*M,z[f]=C,c.push(z.x,z.y,z.z),z[b]=0,z[g]=0,z[f]=T>0?1:-1,h.push(z.x,z.y,z.z),p.push(ot/w),p.push(1-O/y),B+=1}}for(let O=0;O<y;O++)for(let Y=0;Y<w;Y++){let ot=u+Y+L*O,it=u+Y+L*(O+1),Ot=u+(Y+1)+L*(O+1),Ut=u+(Y+1)+L*O;l.push(ot,it,Ut),l.push(it,Ot,Ut),V+=6}o.addGroup(d,V,A),d+=V,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ws=class e extends wi{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],m=[],b=[],g=[];for(let f=0;f<h;f++){let v=f*u-s;for(let M=0;M<c;M++){let _=M*p-r;m.push(_,-v,0),b.push(0,0,1),g.push(M/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let M=v+c*f,_=v+c*(f+1),x=v+1+c*(f+1),T=v+1+c*f;d.push(M,_,T),d.push(_,x,T)}this.setIndex(d),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(b,3)),this.setAttribute("uv",new Hi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Js(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(MM(a))a.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(MM(a[0])){let r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();t[n][i]=r}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Fn(e){let t={};for(let n=0;n<e.length;n++){let i=Js(e[n]);for(let a in i)t[a]=i[a]}return t}function MM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function D3(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Pv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var h2={clone:Js,merge:Fn},U3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U3,this.fragmentShader=L3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=D3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(a.value);break;case"v2":this.uniforms[i].value=new Wt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Xe().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fd=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var dd=class extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pd=class extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ml(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function iv(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Qr=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],r=n[i-1];t:{e:{let s;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=a,a=n[++i],t<a)break e}s=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=r,r=n[--i-1],t>=r)break e}s=i,i=0;break n}break t}for(;i<s;){let o=i+s>>>1;t<n[o]?s=o:i=o+1}if(a=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=t*a;for(let s=0;s!==a;++s)n[s]=i[r+s];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},md=class extends Qr{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rv,endingEnd:rv}}intervalChanged_(t,n,i){let a=this.parameterPositions,r=t-2,s=t+1,o=a[r],l=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case sv:r=t,o=2*n-i;break;case ov:r=a.length-2,o=n+a[r]-a[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sv:s=t,l=2*i-n;break;case ov:s=1,l=i+a[1]-a[0];break;default:s=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-n)/(a-n),b=m*m,g=b*m,f=-u*g+2*u*b-u*m,v=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*m+1,M=(-1-d)*g+(1.5+d)*b+.5*m,_=d*g-d*b;for(let x=0;x!==o;++x)r[x]=f*s[h+x]+v*s[c+x]+M*s[l+x]+_*s[p+x];return r}},gd=class extends Qr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),p=1-h;for(let u=0;u!==o;++u)r[u]=s[c+u]*p+s[l+u]*h;return r}},vd=class extends Qr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},_d=class extends Qr{interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(i-n)/(a-n),b=1-m;for(let g=0;g!==o;++g)r[g]=s[c+g]*b+s[l+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let b=s[c+m],g=s[l+m],f=d*u+m*2,v=p[f],M=p[f+1],_=t*u+m*2,x=h[_],T=h[_+1],w=P3(i,n,v,x,a);r[m]=f2(w,b,M,T,g)}return r}};function f2(e,t,n,i,a){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*a}function I3(e,t,n,i,a){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(a-i)}function P3(e,t,n,i,a){let r=(e-t)/(a-t);for(let s=0;s<8;s++){let o=f2(r,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=I3(r,t,n,i,a);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ai=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ml(n,this.TimeBufferType),this.values=ml(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ml(t.times,Array),values:ml(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),iv(t.settings)&&(i.settings={inTangents:ml(t.settings.inTangents,Array),outTangents:ml(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new vd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new _d(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Yc:n=this.InterpolantFactoryMethodDiscrete;break;case ad:n=this.InterpolantFactoryMethodLinear;break;case qf:n=this.InterpolantFactoryMethodSmooth;break;case av:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Bt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yc;case this.InterpolantFactoryMethodLinear:return ad;case this.InterpolantFactoryMethodSmooth:return qf;case this.InterpolantFactoryMethodBezier:return av}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;iv(this.settings)&&(TM(this.settings.inTangents,t),TM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,r=0,s=a-1;for(;r!==a&&i[r]<t;)++r;for(;s!==-1&&i[s]>n;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,r=i.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(s!==null&&s>l){kt("KeyframeTrack: Out of order keys.",this,o,l,s),t=!1;break}s=l}if(a!==void 0&&h3(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===qf,r=t.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let m=0;m!==i;++m){let b=n[p+m];if(b!==n[u+m]||b!==n[d+m]){l=!0;break}}}if(l){if(o!==s){t[s]=t[o];let p=o*i,u=s*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*i,l=s*i,c=0;c!==i;++c)n[l+c]=n[o+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=n.slice(0,s*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,iv(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function TM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=ad;var $r=class extends Ai{constructor(t,n,i){super(t,n,i)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Yc;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var yd=class extends Ai{constructor(t,n,i,a){super(t,n,i,a)}};yd.prototype.ValueTypeName="color";var xd=class extends Ai{constructor(t,n,i,a){super(t,n,i,a)}};xd.prototype.ValueTypeName="number";var bd=class extends Qr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)Da.slerpFlat(r,0,s,c-o,s,c,l);return r}},su=class extends Ai{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new bd(this.times,this.values,this.getValueSize(),t)}};su.prototype.ValueTypeName="quaternion";su.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Ai{constructor(t,n,i){super(t,n,i)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Yc;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Sd=class extends Ai{constructor(t,n,i,a){super(t,n,i,a)}};Sd.prototype.ValueTypeName="vector";var Zf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(EM(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!EM(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function EM(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Md=class{constructor(t,n,i){let a=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],m=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},d2=new Md,wl=class{constructor(t){this.manager=t!==void 0?t:d2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=new WeakMap,Td=class extends wl{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Zf.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0);else{let p=gl.get(s);p===void 0&&(p=[],gl.set(s,p)),p.push({onLoad:n,onError:a})}return s}let o=bl("img");function l(){h(),n&&n(this);let p=gl.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}gl.delete(this),r.manager.itemEnd(t)}function c(p){h(),a&&a(p),Zf.remove(`image:${t}`);let u=gl.get(this)||[];for(let d=0;d<u.length;d++){let m=u[d];m.onError&&m.onError(p)}gl.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zf.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var ou=class extends wl{constructor(t){super(t)}load(t,n,i,a){let r=new Kn,s=new Td(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}};var Xf=new Z,Wf=new Da,Aa=new Z,qs=class extends Ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xf,Wf,Aa),Aa.x===1&&Aa.y===1&&Aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xf,Wf,Aa.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Xf,Wf,Aa),Aa.x===1&&Aa.y===1&&Aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xf,Wf,Aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qr=new Z,wM=new Wt,AM=new Wt,li=class extends qs{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Og*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Og*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-t/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-t/qr.z)}getViewSize(t,n){return this.getViewBounds(t,wM,AM),n.subVectors(AM,wM)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Og*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Ys=class extends qs{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var vl=-90,_l=1,Ed=class extends Ei{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new li(vl,_l,t,n);a.layers=this.layers,this.add(a);let r=new li(vl,_l,t,n);r.layers=this.layers,this.add(r);let s=new li(vl,_l,t,n);s.layers=this.layers,this.add(s);let o=new li(vl,_l,t,n);o.layers=this.layers,this.add(o);let l=new li(vl,_l,t,n);l.layers=this.layers,this.add(l);let c=new li(vl,_l,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(let c of n)this.remove(c);if(t===ta)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},wd=class extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ov="\\[\\]\\.:\\/",O3=new RegExp("["+Ov+"]","g"),zv="[^"+Ov+"]",z3="[^"+Ov.replace("\\.","")+"]",B3=/((?:WC+[\/:])*)/.source.replace("WC",zv),F3=/(WCOD+)?/.source.replace("WCOD",z3),k3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zv),H3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zv),V3=new RegExp("^"+B3+F3+k3+H3+"$"),G3=["material","materials","bones","map"],cv=class{constructor(t,n,i){let a=i||Fe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Fe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(O3,"")}static parseTrackName(t){let n=V3.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=i.nodeName.substring(a+1);G3.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=n.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=cv;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S4=new Float32Array(1);var Gv=class Gv{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=a,this}};Gv.prototype.isMatrix2=!0;var uv=Gv;function Bv(e,t,n,i){let a=X3(i);switch(n){case Rv:return e*t;case Dv:return e*t/a.components*a.byteLength;case Pd:return e*t/a.components*a.byteLength;case rs:return e*t*2/a.components*a.byteLength;case Od:return e*t*2/a.components*a.byteLength;case Nv:return e*t*3/a.components*a.byteLength;case Vi:return e*t*4/a.components*a.byteLength;case zd:return e*t*4/a.components*a.byteLength;case du:case pu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case mu:case gu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Hd:return Math.max(e,16)*Math.max(t,8)/4;case Bd:case kd:return Math.max(e,8)*Math.max(t,8)/2;case Vd:case Gd:case Wd:case qd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xd:case vu:case Yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case tp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ep:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case np:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ip:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case rp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case sp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case op:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case lp:case cp:case up:return Math.ceil(e/4)*Math.ceil(t/4)*16;case hp:case fp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case _u:case dp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function X3(e){switch(e){case Ci:case Ev:return{byteLength:1,components:1};case Rl:case wv:case aa:return{byteLength:2,components:1};case Ld:case Id:return{byteLength:2,components:4};case na:case Ud:case ia:return{byteLength:4,components:1};case Av:case Cv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function P2(){let e=null,t=!1,n=null,i=null;function a(r,s){i=e.requestAnimationFrame(a),n(r,s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function q3(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<p.length;d++){let m=p[u],b=p[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,m=p.length;d<m;d++){let b=p[d];e.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Y3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_C=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MC="gl_FragColor = linearToOutputTexel( gl_FragColor );",TC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,FC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,JC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_R=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,MR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ER=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_N=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Y3,alphahash_pars_fragment:Z3,alphamap_fragment:K3,alphamap_pars_fragment:J3,alphatest_fragment:j3,alphatest_pars_fragment:Q3,aomap_fragment:$3,aomap_pars_fragment:tC,batching_pars_vertex:eC,batching_vertex:nC,begin_vertex:iC,beginnormal_vertex:aC,bsdfs:rC,iridescence_fragment:sC,bumpmap_pars_fragment:oC,clipping_planes_fragment:lC,clipping_planes_pars_fragment:cC,clipping_planes_pars_vertex:uC,clipping_planes_vertex:hC,color_fragment:fC,color_pars_fragment:dC,color_pars_vertex:pC,color_vertex:mC,common:gC,cube_uv_reflection_fragment:vC,defaultnormal_vertex:_C,displacementmap_pars_vertex:yC,displacementmap_vertex:xC,emissivemap_fragment:bC,emissivemap_pars_fragment:SC,colorspace_fragment:MC,colorspace_pars_fragment:TC,envmap_fragment:EC,envmap_common_pars_fragment:wC,envmap_pars_fragment:AC,envmap_pars_vertex:CC,envmap_physical_pars_fragment:FC,envmap_vertex:RC,fog_vertex:NC,fog_pars_vertex:DC,fog_fragment:UC,fog_pars_fragment:LC,gradientmap_pars_fragment:IC,lightmap_pars_fragment:PC,lights_lambert_fragment:OC,lights_lambert_pars_fragment:zC,lights_pars_begin:BC,lights_toon_fragment:kC,lights_toon_pars_fragment:HC,lights_phong_fragment:VC,lights_phong_pars_fragment:GC,lights_physical_fragment:XC,lights_physical_pars_fragment:WC,lights_fragment_begin:qC,lights_fragment_maps:YC,lights_fragment_end:ZC,lightprobes_pars_fragment:KC,logdepthbuf_fragment:JC,logdepthbuf_pars_fragment:jC,logdepthbuf_pars_vertex:QC,logdepthbuf_vertex:$C,map_fragment:tR,map_pars_fragment:eR,map_particle_fragment:nR,map_particle_pars_fragment:iR,metalnessmap_fragment:aR,metalnessmap_pars_fragment:rR,morphinstance_vertex:sR,morphcolor_vertex:oR,morphnormal_vertex:lR,morphtarget_pars_vertex:cR,morphtarget_vertex:uR,normal_fragment_begin:hR,normal_fragment_maps:fR,normal_pars_fragment:dR,normal_pars_vertex:pR,normal_vertex:mR,normalmap_pars_fragment:gR,clearcoat_normal_fragment_begin:vR,clearcoat_normal_fragment_maps:_R,clearcoat_pars_fragment:yR,iridescence_pars_fragment:xR,opaque_fragment:bR,packing:SR,premultiplied_alpha_fragment:MR,project_vertex:TR,dithering_fragment:ER,dithering_pars_fragment:wR,roughnessmap_fragment:AR,roughnessmap_pars_fragment:CR,shadowmap_pars_fragment:RR,shadowmap_pars_vertex:NR,shadowmap_vertex:DR,shadowmask_pars_fragment:UR,skinbase_vertex:LR,skinning_pars_vertex:IR,skinning_vertex:PR,skinnormal_vertex:OR,specularmap_fragment:zR,specularmap_pars_fragment:BR,tonemapping_fragment:FR,tonemapping_pars_fragment:kR,transmission_fragment:HR,transmission_pars_fragment:VR,uv_pars_fragment:GR,uv_pars_vertex:XR,uv_vertex:WR,worldpos_vertex:qR,background_vert:YR,background_frag:ZR,backgroundCube_vert:KR,backgroundCube_frag:JR,cube_vert:jR,cube_frag:QR,depth_vert:$R,depth_frag:tN,distance_vert:eN,distance_frag:nN,equirect_vert:iN,equirect_frag:aN,linedashed_vert:rN,linedashed_frag:sN,meshbasic_vert:oN,meshbasic_frag:lN,meshlambert_vert:cN,meshlambert_frag:uN,meshmatcap_vert:hN,meshmatcap_frag:fN,meshnormal_vert:dN,meshnormal_frag:pN,meshphong_vert:mN,meshphong_frag:gN,meshphysical_vert:vN,meshphysical_frag:_N,meshtoon_vert:yN,meshtoon_frag:xN,points_vert:bN,points_frag:SN,shadow_vert:MN,shadow_frag:TN,sprite_vert:EN,sprite_frag:wN},_t={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Pa={basic:{uniforms:Fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Fn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Fn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new le(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Fn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Fn([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Fn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Fn([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Fn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Fn([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Fn([_t.common,_t.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Fn([_t.lights,_t.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Pa.physical={uniforms:Fn([Pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var gp={r:0,b:0,g:0},AN=new Ye,O2=new Gt;O2.set(-1,0,0,0,1,0,0,0,1);function CN(e,t,n,i,a,r){let s=new le(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=t.get(M,_)}return M}function m(v){let M=!1,_=d(v);_===null?g(s,o):_&&_.isColor&&(g(_,1),M=!0);let x=e.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(v,M){let _=d(M);_&&(_.isCubeTexture||_.mapping===hu)?(c===void 0&&(c=new ui(new El(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Js(Pa.backgroundCube.uniforms),vertexShader:Pa.backgroundCube.vertexShader,fragmentShader:Pa.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AN.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(O2),c.material.toneMapped=re.getTransfer(_.colorSpace)!==ye,(h!==_||p!==_.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ui(new Ws(2,2),new Nn({name:"BackgroundMaterial",uniforms:Js(Pa.background.uniforms),vertexShader:Pa.background.vertexShader,fragmentShader:Pa.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(gp,Pv(e)),n.buffers.color.setClear(gp.r,gp.g,gp.b,M,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,M=1){s.set(v),o=M,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(s,o)},render:m,addToRenderList:b,dispose:f}}function RN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),r=a,s=!1;function o(U,D,I,C,L){let k=!1,B=p(U,C,I,D);r!==B&&(r=B,c(r.object)),k=d(U,C,I,L),k&&m(U,C,I,L),L!==null&&t.update(L,e.ELEMENT_ARRAY_BUFFER),(k||s)&&(s=!1,_(U,D,I,C),L!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function p(U,D,I,C){let L=C.wireframe===!0,k=i[D.id];k===void 0&&(k={},i[D.id]=k);let B=U.isInstancedMesh===!0?U.id:0,V=k[B];V===void 0&&(V={},k[B]=V);let z=V[I.id];z===void 0&&(z={},V[I.id]=z);let O=z[L];return O===void 0&&(O=u(l()),z[L]=O),O}function u(U){let D=[],I=[],C=[];for(let L=0;L<n;L++)D[L]=0,I[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:C,object:U,attributes:{},index:null}}function d(U,D,I,C){let L=r.attributes,k=D.attributes,B=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let Y=L[z],ot=k[z];if(ot===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor)),Y===void 0||Y.attribute!==ot||ot&&Y.data!==ot.data)return!0;B++}return r.attributesNum!==B||r.index!==C}function m(U,D,I,C){let L={},k=D.attributes,B=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let Y=k[z];Y===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));let ot={};ot.attribute=Y,Y&&Y.data&&(ot.data=Y.data),L[z]=ot,B++}r.attributes=L,r.attributesNum=B,r.index=C}function b(){let U=r.newAttributes;for(let D=0,I=U.length;D<I;D++)U[D]=0}function g(U){f(U,0)}function f(U,D){let I=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;I[U]=1,C[U]===0&&(e.enableVertexAttribArray(U),C[U]=1),L[U]!==D&&(e.vertexAttribDivisor(U,D),L[U]=D)}function v(){let U=r.newAttributes,D=r.enabledAttributes;for(let I=0,C=D.length;I<C;I++)D[I]!==U[I]&&(e.disableVertexAttribArray(I),D[I]=0)}function M(U,D,I,C,L,k,B){B===!0?e.vertexAttribIPointer(U,D,I,L,k):e.vertexAttribPointer(U,D,I,C,L,k)}function _(U,D,I,C){b();let L=C.attributes,k=I.getAttributes(),B=D.defaultAttributeValues;for(let V in k){let z=k[V];if(z.location>=0){let O=L[V];if(O===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),O!==void 0){let Y=O.normalized,ot=O.itemSize,it=t.get(O);if(it===void 0)continue;let Ot=it.buffer,Ut=it.type,lt=it.bytesPerElement,q=Ut===e.INT||Ut===e.UNSIGNED_INT||O.gpuType===Ud;if(O.isInterleavedBufferAttribute){let Q=O.data,j=Q.stride,gt=O.offset;if(Q.isInstancedInterleavedBuffer){for(let rt=0;rt<z.locationSize;rt++)f(z.location+rt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<z.locationSize;rt++)g(z.location+rt);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let rt=0;rt<z.locationSize;rt++)M(z.location+rt,ot/z.locationSize,Ut,Y,j*lt,(gt+ot/z.locationSize*rt)*lt,q)}else{if(O.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)f(z.location+Q,O.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Q=0;Q<z.locationSize;Q++)g(z.location+Q);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let Q=0;Q<z.locationSize;Q++)M(z.location+Q,ot/z.locationSize,Ut,Y,ot*lt,ot/z.locationSize*Q*lt,q)}}else if(B!==void 0){let Y=B[V];if(Y!==void 0)switch(Y.length){case 2:e.vertexAttrib2fv(z.location,Y);break;case 3:e.vertexAttrib3fv(z.location,Y);break;case 4:e.vertexAttrib4fv(z.location,Y);break;default:e.vertexAttrib1fv(z.location,Y)}}}}v()}function x(){A();for(let U in i){let D=i[U];for(let I in D){let C=D[I];for(let L in C){let k=C[L];for(let B in k)h(k[B].object),delete k[B];delete C[L]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;let D=i[U.id];for(let I in D){let C=D[I];for(let L in C){let k=C[L];for(let B in k)h(k[B].object),delete k[B];delete C[L]}}delete i[U.id]}function w(U){for(let D in i){let I=i[D];for(let C in I){let L=I[C];if(L[U.id]===void 0)continue;let k=L[U.id];for(let B in k)h(k[B].object),delete k[B];delete L[U.id]}}}function y(U){for(let D in i){let I=i[D],C=U.isInstancedMesh===!0?U.id:0,L=I[C];if(L!==void 0){for(let k in L){let B=L[k];for(let V in B)h(B[V].object),delete B[V];delete L[k]}delete I[C],Object.keys(I).length===0&&delete i[D]}}}function A(){R(),s=!0,r!==a&&(r=a,c(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function NN(e,t,n){let i;function a(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function DN(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==Vi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ci&&w!==ia&&!y&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:x,samples:T}}function UN(e){let t=this,n=null,i=0,a=!1,r=!1,s=new $i,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let m=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,M=v*4,_=f.clippingState||null;l.value=_,_=h(m,u,M,d);for(let x=0;x!==M;++x)_[x]=n[x];f.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,m){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let f=d+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,_=d;M!==b;++M,_+=4)s.copy(p[M]).applyMatrix4(v,o),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var Ul=4,LN=6,IN=20,PN=256,xu=new Ys,p2=new le,Xv=null,Wv=0,qv=0,Yv=!1,ON=new Z,js=new Z,_p=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,r={}){let{size:s=256,position:o=ON}=r;Xv=this._renderer.getRenderTarget(),Wv=this._renderer.getActiveCubeFace(),qv=this._renderer.getActiveMipmapLevel(),Yv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xv,Wv,qv),this._renderer.xr.enabled=Yv,t.scissorTest=!1,Dl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ns||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xv=this._renderer.getRenderTarget(),Wv=this._renderer.getActiveCubeFace(),qv=this._renderer.getActiveMipmapLevel(),Yv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:aa,format:Vi,colorSpace:Vs,depthBuffer:!1},a=m2(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m2(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zN(r)),this._blurMaterial=FN(r,t,n),this._ggxMaterial=BN(r,t,n)}return a}_compileMaterial(t){let n=new ui(new wi,t);this._renderer.compile(n,xu)}_sceneToCubeUV(t,n,i,a,r){let l=new li(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(p2),p.toneMapping=ea,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new El,new eu({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,f=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,f=!0):(g.color.copy(p2),f=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let x=this._cubeSize;Dl(a,_*x,M>2?x:0,x,x),p.setRenderTarget(a),f&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===ns||t.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=v2()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g2());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,xu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let l=s.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:m}=this,b=this._sizeLods[i],g=3*b*(i>m-Ul?i-m+Ul:0),f=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-n,Dl(r,g,f,3*b,2*b),a.setRenderTarget(r),a.render(o,xu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Dl(t,g,f,3*b,2*b),a.setRenderTarget(t),a.render(o,xu)}_blur(t,n,i,a){let r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,s),this._blurPass(r,t,i,i,s)}_blurPass(t,n,i,a,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[a],p=3*h*(a>this._lodMax-Ul?a-this._lodMax+Ul:0),u=4*(this._cubeSize-h);Dl(n,p,u,3*h,2*h),s.setRenderTarget(n),s.render(l,xu)}};function zN(e){let t=[],n=[],i=e,a=e-Ul+1+LN;for(let r=0;r<a;r++){let s=Math.pow(2,i);t.push(s);let o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,m=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let f=0;f<p;f++){let v=f%3*2/3-1,M=f>2?0:-1,_=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];m.set(_,d*u*f);for(let x=0;x<u;x++){let T=h[x*2]*2-1,w=h[x*2+1]*2-1;f===0?js.set(1,w,T):f===1?js.set(-T,1,-w):f===2?js.set(-T,w,1):f===3?js.set(-1,w,-T):f===4?js.set(-T,-1,w):js.set(T,w,-1),js.toArray(b,(f*u+x)*d)}}let g=new wi;g.setAttribute("position",new an(m,d)),g.setAttribute("outputDirection",new an(b,d)),n.push(new ui(g,null)),i>Ul&&i--}return{lodMeshes:n,sizeLods:t}}function m2(e,t,n){let i=new ci(e,t,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function BN(e,t,n){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function FN(e,t,n){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:IN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function g2(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function v2(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function xp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yp=class extends ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new au(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new El(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:La});r.uniforms.tEquirect.value=n;let s=new ui(a,r),o=n.minFilter;return n.minFilter===is&&(n.minFilter=cn),new Ed(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}};function kN(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Rd||d===Nd)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let b=new yp(m.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let d=u.mapping,m=d===Rd||d===Nd,b=d===ns||d===Ks;if(m||b){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new _p(e)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new _p(e)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Rd?u.mapping=ns:d===Nd&&(u.mapping=Ks),u}function l(u){let d=0,m=6;for(let b=0;b<m;b++)u[b]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function HN(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Hs("WebGLRenderer: "+i+" extension not supported."),a}}}function VN(e,t,n,i){let a={},r=new WeakMap;function s(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete a[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,m=p.attributes.position,b=0;if(m===void 0)return;if(d!==null){let v=d.array;b=d.version;for(let M=0,_=v.length;M<_;M+=3){let x=v[M+0],T=v[M+1],w=v[M+2];u.push(x,T,T,w,w,x)}}else{let v=m.array;b=m.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let x=M+0,T=M+1,w=M+2;u.push(x,T,T,w,w,x)}}let g=new(m.count>=65535?$c:Qc)(u,1);g.version=b;let f=r.get(p);f&&t.remove(f),r.set(p,g)}function h(p){let u=r.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function GN(e,t,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){e.drawElements(i,u,r,p*s),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,r,p*s,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,d);let b=0;for(let g=0;g<d;g++)b+=u[g];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function XN(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function WN(e,t,n){let i=new WeakMap,a=new Xe;function r(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var d=R;u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;m===!0&&(_=1),b===!0&&(_=2),g===!0&&(_=3);let x=o.attributes.position.count*_,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*T*4*p),y=new Jc(w,x,T,p);y.type=ia,y.needsUpdate=!0;let A=_*4;for(let U=0;U<p;U++){let D=f[U],I=v[U],C=M[U],L=x*T*4*U;for(let k=0;k<D.count;k++){let B=k*A;m===!0&&(a.fromBufferAttribute(D,k),w[L+B+0]=a.x,w[L+B+1]=a.y,w[L+B+2]=a.z,w[L+B+3]=0),b===!0&&(a.fromBufferAttribute(I,k),w[L+B+4]=a.x,w[L+B+5]=a.y,w[L+B+6]=a.z,w[L+B+7]=0),g===!0&&(a.fromBufferAttribute(C,k),w[L+B+8]=a.x,w[L+B+9]=a.y,w[L+B+10]=a.z,w[L+B+11]=C.itemSize===4?a.w:1)}}u={count:p,texture:y,size:new Wt(x,T)},i.set(o,u),o.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let b=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",b),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function qN(e,t,n,i,a){let r=new WeakMap;function s(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:s,dispose:o}}var YN={[vv]:"LINEAR_TONE_MAPPING",[_v]:"REINHARD_TONE_MAPPING",[yv]:"CINEON_TONE_MAPPING",[xv]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[Mv]:"NEUTRAL_TONE_MAPPING",[bv]:"CUSTOM_TONE_MAPPING"};function ZN(e,t,n,i,a,r){let s=new ci(t,n,{type:e,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new wi;c.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Hi([0,2,0,0,2,0],2));let h=new fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ui(c,h),u=new Ys(-1,1,1,-1,0,1),d=null,m=null,b=!1,g,f=null,v=[],M=!1;this.setSize=function(_,x){s.setSize(_,x),o!==null&&o.setSize(_,x),l!==null&&l.setSize(_,x);for(let T=0;T<v.length;T++){let w=v[T];w.setSize&&w.setSize(_,x)}},this.setEffects=function(_){v=_,M=v.length>0&&v[0].isRenderPass===!0;let x=s.width,T=s.height;v.length>0&&o===null&&(o=new ci(x,T,{type:aa,depthBuffer:!1,stencilBuffer:!1}),l=new ci(x,T,{type:aa,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let y=v[w];y.setSize&&y.setSize(x,T)}},this.begin=function(_,x){if(b||_.toneMapping===ea&&v.length===0)return!1;if(f=x,x!==null){let T=x.width,w=x.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return M===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=ea,!0},this.hasRenderPass=function(){return M},this.end=function(_,x){_.toneMapping=g,b=!0;let T=s,w=o;for(let y=0;y<v.length;y++){let A=v[y];A.enabled!==!1&&(A.render(_,w,T,x),A.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,h.defines={},re.getTransfer(d)===ye&&(h.defines.SRGB_TRANSFER="");let y=YN[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(p,u),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var z2=new Kn,Jv=new jr(1,1),B2=new Jc,F2=new ld,k2=new au,_2=[],y2=[],x2=new Float32Array(16),b2=new Float32Array(9),S2=new Float32Array(4);function Pl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,r=_2[a];if(r===void 0&&(r=new Float32Array(a),_2[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function un(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function bp(e,t){let n=y2[t];n===void 0&&(n=new Int32Array(t),y2[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function KN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function JN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function jN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(un(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function QN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function $N(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;S2.set(i),e.uniformMatrix2fv(this.addr,!1,S2),hn(n,i)}}function tD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;b2.set(i),e.uniformMatrix3fv(this.addr,!1,b2),hn(n,i)}}function eD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;x2.set(i),e.uniformMatrix4fv(this.addr,!1,x2),hn(n,i)}}function nD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function iD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function aD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function rD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function sD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function oD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function lD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function cD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function uD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Jv.compareFunction=n.isReversedDepthBuffer()?mp:pp,r=Jv):r=z2,n.setTexture2D(t||r,a)}function hD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||F2,a)}function fD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||k2,a)}function dD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||B2,a)}function pD(e){switch(e){case 5126:return KN;case 35664:return JN;case 35665:return jN;case 35666:return QN;case 35674:return $N;case 35675:return tD;case 35676:return eD;case 5124:case 35670:return nD;case 35667:case 35671:return iD;case 35668:case 35672:return aD;case 35669:case 35673:return rD;case 5125:return sD;case 36294:return oD;case 36295:return lD;case 36296:return cD;case 35678:case 36198:case 36298:case 36306:case 35682:return uD;case 35679:case 36299:case 36307:return hD;case 35680:case 36300:case 36308:case 36293:return fD;case 36289:case 36303:case 36311:case 36292:return dD}}function mD(e,t){e.uniform1fv(this.addr,t)}function gD(e,t){let n=Pl(t,this.size,2);e.uniform2fv(this.addr,n)}function vD(e,t){let n=Pl(t,this.size,3);e.uniform3fv(this.addr,n)}function _D(e,t){let n=Pl(t,this.size,4);e.uniform4fv(this.addr,n)}function yD(e,t){let n=Pl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xD(e,t){let n=Pl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bD(e,t){let n=Pl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function SD(e,t){e.uniform1iv(this.addr,t)}function MD(e,t){e.uniform2iv(this.addr,t)}function TD(e,t){e.uniform3iv(this.addr,t)}function ED(e,t){e.uniform4iv(this.addr,t)}function wD(e,t){e.uniform1uiv(this.addr,t)}function AD(e,t){e.uniform2uiv(this.addr,t)}function CD(e,t){e.uniform3uiv(this.addr,t)}function RD(e,t){e.uniform4uiv(this.addr,t)}function ND(e,t,n){let i=this.cache,a=t.length,r=bp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));let s;this.type===e.SAMPLER_2D_SHADOW?s=Jv:s=z2;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||s,r[o])}function DD(e,t,n){let i=this.cache,a=t.length,r=bp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||F2,r[s])}function UD(e,t,n){let i=this.cache,a=t.length,r=bp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||k2,r[s])}function LD(e,t,n){let i=this.cache,a=t.length,r=bp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||B2,r[s])}function ID(e){switch(e){case 5126:return mD;case 35664:return gD;case 35665:return vD;case 35666:return _D;case 35674:return yD;case 35675:return xD;case 35676:return bD;case 5124:case 35670:return SD;case 35667:case 35671:return MD;case 35668:case 35672:return TD;case 35669:case 35673:return ED;case 5125:return wD;case 36294:return AD;case 36295:return CD;case 36296:return RD;case 35678:case 36198:case 36298:case 36306:case 35682:return ND;case 35679:case 36299:case 36307:return DD;case 35680:case 36300:case 36308:case 36293:return UD;case 36289:case 36303:case 36311:case 36292:return LD}}var jv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pD(n.type)}},Qv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ID(n.type)}},$v=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let o=a[r];o.setValue(t,n[o.id],i)}}},Zv=/(\w+)(\])?(\[|\.)?/g;function M2(e,t){e.seq.push(t),e.map[t.id]=t}function PD(e,t,n){let i=e.name,a=i.length;for(Zv.lastIndex=0;;){let r=Zv.exec(i),s=Zv.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){M2(n,c===void 0?new jv(o,e,t):new Qv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new $v(o),M2(n,p)),n=p}}}var Ll=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(n,s),l=t.getUniformLocation(n,o.name);PD(o,l,this)}let a=[],r=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(t,n,i,a){let r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,r=t.length;a!==r;++a){let s=t[a];s.id in n&&i.push(s)}return i}};function T2(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var OD=37297,zD=0;function BD(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}var E2=new Gt;function FD(e){re._getMatrix(E2,re.workingColorSpace,e);let t=`mat3( ${E2.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case Zc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function w2(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+BD(e.getShaderSource(t),o)}else return r}function kD(e,t){let n=FD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var HD={[vv]:"Linear",[_v]:"Reinhard",[yv]:"Cineon",[xv]:"ACESFilmic",[Sv]:"AgX",[Mv]:"Neutral",[bv]:"Custom"};function VD(e,t){let n=HD[t];return n===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var vp=new Z;function GD(){re.getLuminanceCoefficients(vp);let e=vp.x.toFixed(4),t=vp.y.toFixed(4),n=vp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Su).join(`
`)}function WD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function qD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=e.getActiveAttrib(t,a),s=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Su(e){return e!==""}function A2(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function C2(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var YD=/^[ \t]*#include +<([\w\d./]+)>/gm;function t_(e){return e.replace(YD,KD)}var ZD=new Map;function KD(e,t){let n=Jt[t];if(n===void 0){let i=ZD.get(t);if(i!==void 0)n=Jt[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return t_(n)}var JD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R2(e){return e.replace(JD,jD)}function jD(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function N2(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var QD={[lu]:"SHADOWMAP_TYPE_PCF",[Al]:"SHADOWMAP_TYPE_VSM"};function $D(e){return QD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tU={[ns]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function eU(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":tU[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var nU={[Ks]:"ENVMAP_MODE_REFRACTION"};function iU(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":nU[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aU={[gv]:"ENVMAP_BLENDING_MULTIPLY",[YM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function rU(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":aU[e.combine]||"ENVMAP_BLENDING_NONE"}function sU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function oU(e,t,n,i){let a=e.getContext(),r=n.defines,s=n.vertexShader,o=n.fragmentShader,l=$D(n),c=eU(n),h=iU(n),p=rU(n),u=sU(n),d=XD(n),m=WD(r),b=a.createProgram(),g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Su).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Su).join(`
`),f.length>0&&(f+=`
`)):(g=[N2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Su).join(`
`),f=[N2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ea?"#define TONE_MAPPING":"",n.toneMapping!==ea?Jt.tonemapping_pars_fragment:"",n.toneMapping!==ea?VD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,kD("linearToOutputTexel",n.outputColorSpace),GD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Su).join(`
`)),s=t_(s),s=A2(s,n),s=C2(s,n),o=t_(o),o=A2(o,n),o=C2(o,n),s=R2(s),o=R2(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=v+g+s,_=v+f+o,x=T2(a,a.VERTEX_SHADER,M),T=T2(a,a.FRAGMENT_SHADER,_);a.attachShader(b,x),a.attachShader(b,T),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function w(U){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(b)||"",I=a.getShaderInfoLog(x)||"",C=a.getShaderInfoLog(T)||"",L=D.trim(),k=I.trim(),B=C.trim(),V=!0,z=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,b,x,T);else{let O=w2(a,x,"vertex"),Y=w2(a,T,"fragment");kt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+L+`
`+O+`
`+Y)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(k===""||B==="")&&(z=!1);z&&(U.diagnostics={runnable:V,programLog:L,vertexShader:{log:k,prefix:g},fragmentShader:{log:B,prefix:f}})}a.deleteShader(x),a.deleteShader(T),y=new Ll(a,b),A=qD(a,b)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(b,OD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zD++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=x,this.fragmentShader=T,this}var lU=0,e_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new n_(t),n.set(t,i)),i}},n_=class{constructor(t){this.id=lU++,this.code=t,this.usedTimes=0}};function cU(e){return e===rs||e===vu||e===_u}function uU(e,t,n,i,a,r){let s=new jc,o=new e_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,A,R,U,D,I){let C=U.fog,L=D.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||k,B),z=V&&V.mapping===hu?V.image.height:null,O=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Bt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ot=Y!==void 0?Y.length:0,it=0;L.morphAttributes.position!==void 0&&(it=1),L.morphAttributes.normal!==void 0&&(it=2),L.morphAttributes.color!==void 0&&(it=3);let Ot,Ut,lt,q;if(O){let Ne=Pa[O];Ot=Ne.vertexShader,Ut=Ne.fragmentShader}else{Ot=y.vertexShader,Ut=y.fragmentShader;let Ne=o.getVertexShaderStage(y),ge=o.getFragmentShaderStage(y);o.update(y,Ne,ge),lt=Ne.id,q=ge.id}let Q=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),gt=D.isInstancedMesh===!0,rt=D.isBatchedMesh===!0,St=!!y.map,Ht=!!y.matcap,Lt=!!V,Xt=!!y.aoMap,$t=!!y.lightMap,At=!!y.bumpMap&&y.wireframe===!1,Zt=!!y.normalMap,fe=!!y.displacementMap,ct=!!y.emissiveMap,te=!!y.metalnessMap,Re=!!y.roughnessMap,P=y.anisotropy>0,me=y.clearcoat>0,ue=y.dispersion>0,N=y.retroreflectivity>0,S=y.iridescence>0,G=y.sheen>0,K=y.transmission>0,$=P&&!!y.anisotropyMap,ut=me&&!!y.clearcoatMap,ht=me&&!!y.clearcoatNormalMap,tt=me&&!!y.clearcoatRoughnessMap,at=S&&!!y.iridescenceMap,ft=S&&!!y.iridescenceThicknessMap,Nt=G&&!!y.sheenColorMap,vt=G&&!!y.sheenRoughnessMap,dt=!!y.specularMap,Dt=!!y.specularColorMap,zt=!!y.specularIntensityMap,qt=K&&!!y.transmissionMap,H=K&&!!y.thicknessMap,pt=!!y.gradientMap,et=!!y.alphaMap,mt=y.alphaTest>0,bt=!!y.alphaHash,st=!!y.extensions,It=ea;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(It=e.toneMapping);let Ct={shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:Ut,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:rt,batchingColor:rt&&D._colorsTexture!==null,instancing:gt,instancingColor:gt&&D.instanceColor!==null,instancingMorph:gt&&D.morphTexture!==null,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:Ht,envMap:Lt,envMapMode:Lt&&V.mapping,envMapCubeUVHeight:z,aoMap:Xt,lightMap:$t,bumpMap:At,normalMap:Zt,displacementMap:fe,emissiveMap:ct,normalMapObjectSpace:Zt&&y.normalMapType===jM,normalMapTangentSpace:Zt&&y.normalMapType===Uv,packedNormalMap:Zt&&y.normalMapType===Uv&&cU(y.normalMap.format),metalnessMap:te,roughnessMap:Re,anisotropy:P,anisotropyMap:$,clearcoat:me,clearcoatMap:ut,clearcoatNormalMap:ht,clearcoatRoughnessMap:tt,dispersion:ue,retroreflection:N,iridescence:S,iridescenceMap:at,iridescenceThicknessMap:ft,sheen:G,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:dt,specularColorMap:Dt,specularIntensityMap:zt,transmission:K,transmissionMap:qt,thicknessMap:H,gradientMap:pt,opaque:y.transparent===!1&&y.blending===Cl&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:mt,alphaHash:bt,combine:y.combine,mapUv:St&&m(y.map.channel),aoMapUv:Xt&&m(y.aoMap.channel),lightMapUv:$t&&m(y.lightMap.channel),bumpMapUv:At&&m(y.bumpMap.channel),normalMapUv:Zt&&m(y.normalMap.channel),displacementMapUv:fe&&m(y.displacementMap.channel),emissiveMapUv:ct&&m(y.emissiveMap.channel),metalnessMapUv:te&&m(y.metalnessMap.channel),roughnessMapUv:Re&&m(y.roughnessMap.channel),anisotropyMapUv:$&&m(y.anisotropyMap.channel),clearcoatMapUv:ut&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(y.sheenRoughnessMap.channel),specularMapUv:dt&&m(y.specularMap.channel),specularColorMapUv:Dt&&m(y.specularColorMap.channel),specularIntensityMapUv:zt&&m(y.specularIntensityMap.channel),transmissionMapUv:qt&&m(y.transmissionMap.channel),thicknessMapUv:H&&m(y.thicknessMap.channel),alphaMapUv:et&&m(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Zt||P),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(St||et),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Zt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:j,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:it,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:It,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:ct&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ua,flipSided:y.side===Jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(f(A,y),v(A,y),A.push(e.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function f(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function M(y){let A=d[y.type],R;if(A){let U=Pa[A];R=h2.clone(U.uniforms)}else R=y.uniforms;return R}function _(y,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new oU(e,A,y,a),c.push(R),h.set(A,R)),R}function x(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:w}}function hU(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function fU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function D2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function U2(){let e=[],t=0,n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,b,g,f){let v=e[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:s(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:f},e[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=s(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=g,v.group=f),t++,v}function l(u,d,m,b,g,f,v){v.reversedDepth===!0&&(g=-g);let M=o(u,d,m,b,g,f);m.transmission>0?i.push(M):m.transparent===!0?a.push(M):n.push(M)}function c(u,d,m,b,g,f){let v=o(u,d,m,b,g,f);m.transmission>0?i.unshift(v):m.transparent===!0?a.unshift(v):n.unshift(v)}function h(u,d){n.length>1&&n.sort(u||fU),i.length>1&&i.sort(d||D2),a.length>1&&a.sort(d||D2)}function p(){for(let u=t,d=e.length;u<d;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:h}}function dU(){let e=new WeakMap;function t(i,a){let r=e.get(i),s;return r===void 0?(s=new U2,e.set(i,[s])):a>=r.length?(s=new U2,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function pU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new Z,color:new le};break;case"SpotLight":n={position:new Z,direction:new Z,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new le,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new le,groundColor:new le};break;case"RectAreaLight":n={color:new le,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return e[t.id]=n,n}}}function mU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var gU=0;function vU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function _U(e){let t=new pU,n=mU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);let a=new Z,r=new Ye,s=new Ye;function o(c){let h=0,p=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,b=0,g=0,f=0,v=0,M=0,_=0,x=0,T=0,w=0,y=0,A=0,R=0;c.sort(vU);for(let D=0,I=c.length;D<I;D++){let C=c[D],L=C.color,k=C.intensity,B=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===rs?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*k,p+=L.g*k,u+=L.b*k;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],k);R++}else if(C.isSunLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[m]=Y,i.sunShadowMap[m]=V;let ot=O.getViewportCount();for(let it=0;it<ot;it++)i.sunShadowMatrix[b+it]=O.getMatrix(it),i.sunShadowCascade[b+it]=O._cascadeData[it];b+=ot,m++}i.sun[d]=z,d++}else if(C.isDirectionalLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,i.directionalShadow[g]=Y,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=C.shadow.matrix,x++}i.directional[g]=z,g++}else if(C.isSpotLight){let z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(L).multiplyScalar(k),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[v]=z;let O=C.shadow;if(C.map&&(i.spotLightMap[y]=C.map,y++,O.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[v]=O.matrix,C.castShadow){let Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=V,w++}v++}else if(C.isRectAreaLight){let z=t.get(C);z.color.copy(L).multiplyScalar(k),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=z,M++}else if(C.isPointLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let O=C.shadow,Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=V,i.pointShadowMatrix[f]=C.shadow.matrix,T++}i.point[f]=z,f++}else if(C.isHemisphereLight){let z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(k),z.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[_]=z,_++}}M>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==f||U.spotLength!==v||U.rectAreaLength!==M||U.hemiLength!==_||U.numSunShadows!==m||U.numDirectionalShadows!==x||U.numPointShadows!==T||U.numSpotShadows!==w||U.numSpotMaps!==y||U.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=v,i.rectArea.length=M,i.point.length=f,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.directionalShadowMatrix.length=x,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,U.sunLength=d,U.directionalLength=g,U.pointLength=f,U.spotLength=v,U.rectAreaLength=M,U.hemiLength=_,U.numSunShadows=m,U.numDirectionalShadows=x,U.numPointShadows=T,U.numSpotShadows=w,U.numSpotMaps=y,U.numLightProbes=R,i.version=gU++)}function l(c,h){let p=0,u=0,d=0,m=0,b=0,g=0,f=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let _=c[v];if(_.isSunLight){let x=i.sun[p];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(f),p++}else if(_.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(f),u++}else if(_.isSpotLight){let x=i.spot[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(f),m++}else if(_.isRectAreaLight){let x=i.rectArea[b];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(f),s.identity(),r.copy(_.matrixWorld),r.premultiply(f),s.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),b++}else if(_.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let x=i.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function L2(e){let t=new _U(e),n=[],i=[],a=[];function r(u){p.camera=u,n.length=0,i.length=0,a.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function yU(e){let t=new WeakMap;function n(a,r=0){let s=t.get(a),o;return s===void 0?(o=new L2(e),t.set(a,[o])):r>=s.length?(o=new L2(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var xU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SU=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],MU=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],I2=new Ye,bu=new Z,Kv=new Z;function TU(e,t,n){let i=new nu,a=new Wt,r=new Wt,s=new Xe,o=new dd,l=new pd,c={},h=n.maxTextureSize,p={[es]:Jn,[Jn]:es,[Ua]:Ua},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:xU,fragmentShader:bU}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new wi;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ui(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let f=this.type;this.render=function(T,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===NM&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lu);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),D=e.state;D.setBlending(La),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let I=f!==this.type;I&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=T.length;C<L;C++){let k=T[C],B=k.shadow;if(B===void 0){Bt("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);let V=B.getFrameExtents();a.multiply(V),r.copy(B.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/V.x),a.x=r.x*V.x,B.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/V.y),a.y=r.y*V.y,B.mapSize.y=r.y));let z=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Al){if(k.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ci(a.x,a.y,{format:rs,type:aa,minFilter:cn,magFilter:cn,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new jr(a.x,a.y,ia),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Ra,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn}else k.isPointLight?(B.map=new yp(a.x),B.map.depthTexture=new hd(a.x,na)):(B.map=new ci(a.x,a.y),B.map.depthTexture=new jr(a.x,a.y,na)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Ra,this.type===lu?(B.map.depthTexture.compareFunction=z?mp:pp,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==a.x||B.map.height!==a.y)&&B.map.setSize(a.x,a.y);let O=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,y);for(let Y=0;Y<O;Y++){let ot=B.getCamera(Y);if(k.isPointLight){let it=B.camera,Ot=B.matrix,Ut=k.distance||it.far;Ut!==it.far&&(it.far=Ut,it.updateProjectionMatrix()),bu.setFromMatrixPosition(k.matrixWorld),it.position.copy(bu),Kv.copy(it.position),Kv.add(SU[Y]),it.up.copy(MU[Y]),it.lookAt(Kv),it.updateMatrixWorld(),Ot.makeTranslation(-bu.x,-bu.y,-bu.z),I2.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),B._frustum.setFromProjectionMatrix(I2,it.coordinateSystem,it.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,Y),e.clear();else{Y===0&&(e.setRenderTarget(B.map),e.clear());let it=B.getViewport(Y);s.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),D.viewport(s)}i=B.getFrustum(Y),_(w,y,ot,k,this.type)}B.isPointLightShadow!==!0&&this.type===Al&&v(B,y),B.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,R,U)};function v(T,w){let y=t.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new ci(a.x,a.y,{format:rs,type:aa}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(w,null,y,u,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(w,null,y,d,b,null)}function M(T,w,y,A){let R=null,U=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=y.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=R.uuid,I=w.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let L=C[I];L===void 0&&(L=R.clone(),C[I]=L,w.addEventListener("dispose",x)),R=L}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Al?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=e.properties.get(R);D.light=y}return R}function _(T,w,y,A,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Al)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=t.update(T),C=T.material;if(Array.isArray(C)){let L=I.groups;for(let k=0,B=L.length;k<B;k++){let V=L[k],z=C[V.materialIndex];if(z&&z.visible){let O=M(T,z,A,R);T.onBeforeShadow(e,T,w,y,I,O,V),e.renderBufferDirect(y,null,I,O,T,V),T.onAfterShadow(e,T,w,y,I,O,V)}}}else if(C.visible){let L=M(T,C,A,R);T.onBeforeShadow(e,T,w,y,I,L,null),e.renderBufferDirect(y,null,I,L,T,null),T.onAfterShadow(e,T,w,y,I,L,null)}}let D=T.children;for(let I=0,C=D.length;I<C;I++)_(D[I],w,y,A,R)}function x(T){T.target.removeEventListener("dispose",x);for(let y in c){let A=c[y],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function EU(e,t){function n(){let H=!1,pt=new Xe,et=null,mt=new Xe(0,0,0,0);return{setMask:function(bt){et!==bt&&!H&&(e.colorMask(bt,bt,bt,bt),et=bt)},setLocked:function(bt){H=bt},setClear:function(bt,st,It,Ct,Ne){Ne===!0&&(bt*=Ct,st*=Ct,It*=Ct),pt.set(bt,st,It,Ct),mt.equals(pt)===!1&&(e.clearColor(bt,st,It,Ct),mt.copy(pt))},reset:function(){H=!1,et=null,mt.set(-1,0,0,0)}}}function i(){let H=!1,pt=!1,et=null,mt=null,bt=null;return{setReversed:function(st){if(pt!==st){let It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let Ct=bt;bt=null,this.setClear(Ct)}},getReversed:function(){return pt},setTest:function(st){st?Q(e.DEPTH_TEST):j(e.DEPTH_TEST)},setMask:function(st){et!==st&&!H&&(e.depthMask(st),et=st)},setFunc:function(st){if(pt&&(st=c2[st]),mt!==st){switch(st){case Kf:e.depthFunc(e.NEVER);break;case Jf:e.depthFunc(e.ALWAYS);break;case jf:e.depthFunc(e.LESS);break;case xl:e.depthFunc(e.LEQUAL);break;case Qf:e.depthFunc(e.EQUAL);break;case $f:e.depthFunc(e.GEQUAL);break;case td:e.depthFunc(e.GREATER);break;case ed:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=st}},setLocked:function(st){H=st},setClear:function(st){bt!==st&&(bt=st,pt&&(st=1-st),e.clearDepth(st))},reset:function(){H=!1,et=null,mt=null,bt=null,pt=!1}}}function a(){let H=!1,pt=null,et=null,mt=null,bt=null,st=null,It=null,Ct=null,Ne=null;return{setTest:function(ge){H||(ge?Q(e.STENCIL_TEST):j(e.STENCIL_TEST))},setMask:function(ge){pt!==ge&&!H&&(e.stencilMask(ge),pt=ge)},setFunc:function(ge,Gi,la){(et!==ge||mt!==Gi||bt!==la)&&(e.stencilFunc(ge,Gi,la),et=ge,mt=Gi,bt=la)},setOp:function(ge,Gi,la){(st!==ge||It!==Gi||Ct!==la)&&(e.stencilOp(ge,Gi,la),st=ge,It=Gi,Ct=la)},setLocked:function(ge){H=ge},setClear:function(ge){Ne!==ge&&(e.clearStencil(ge),Ne=ge)},reset:function(){H=!1,pt=null,et=null,mt=null,bt=null,st=null,It=null,Ct=null,Ne=null}}}let r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,m=[],b=null,g=!1,f=null,v=null,M=null,_=null,x=null,T=null,w=null,y=new le(0,0,0),A=0,R=!1,U=null,D=null,I=null,C=null,L=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,V=0,z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=V>=2);let O=null,Y={},ot=e.getParameter(e.SCISSOR_BOX),it=e.getParameter(e.VIEWPORT),Ot=new Xe().fromArray(ot),Ut=new Xe().fromArray(it);function lt(H,pt,et,mt){let bt=new Uint8Array(4),st=e.createTexture();e.bindTexture(H,st),e.texParameteri(H,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(H,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let It=0;It<et;It++)H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY?e.texImage3D(pt,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,bt):e.texImage2D(pt+It,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,bt);return st}let q={};q[e.TEXTURE_2D]=lt(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=lt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=lt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=lt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),s.setFunc(xl),At(!1),Zt(hv),Q(e.CULL_FACE),Xt(La);function Q(H){h[H]!==!0&&(e.enable(H),h[H]=!0)}function j(H){h[H]!==!1&&(e.disable(H),h[H]=!1)}function gt(H,pt){return u[H]!==pt?(e.bindFramebuffer(H,pt),u[H]=pt,H===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=pt),H===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=pt),!0):!1}function rt(H,pt){let et=m,mt=!1;if(H){et=d.get(pt),et===void 0&&(et=[],d.set(pt,et));let bt=H.textures;if(et.length!==bt.length||et[0]!==e.COLOR_ATTACHMENT0){for(let st=0,It=bt.length;st<It;st++)et[st]=e.COLOR_ATTACHMENT0+st;et.length=bt.length,mt=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,mt=!0);mt&&e.drawBuffers(et)}function St(H){return b!==H?(e.useProgram(H),b=H,!0):!1}let Ht={[Zs]:e.FUNC_ADD,[DM]:e.FUNC_SUBTRACT,[UM]:e.FUNC_REVERSE_SUBTRACT};Ht[LM]=e.MIN,Ht[IM]=e.MAX;let Lt={[PM]:e.ZERO,[cu]:e.ONE,[OM]:e.SRC_COLOR,[mv]:e.SRC_ALPHA,[VM]:e.SRC_ALPHA_SATURATE,[kM]:e.DST_COLOR,[BM]:e.DST_ALPHA,[zM]:e.ONE_MINUS_SRC_COLOR,[uu]:e.ONE_MINUS_SRC_ALPHA,[HM]:e.ONE_MINUS_DST_COLOR,[FM]:e.ONE_MINUS_DST_ALPHA,[GM]:e.CONSTANT_COLOR,[XM]:e.ONE_MINUS_CONSTANT_COLOR,[WM]:e.CONSTANT_ALPHA,[qM]:e.ONE_MINUS_CONSTANT_ALPHA};function Xt(H,pt,et,mt,bt,st,It,Ct,Ne,ge){if(H===La){g===!0&&(j(e.BLEND),g=!1);return}if(g===!1&&(Q(e.BLEND),g=!0),H!==Cd){if(H!==f||ge!==R){if((v!==Zs||x!==Zs)&&(e.blendEquation(e.FUNC_ADD),v=Zs,x=Zs),ge)switch(H){case Cl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fv:e.blendFunc(e.ONE,e.ONE);break;case dv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case pv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:kt("WebGLState: Invalid blending: ",H);break}else switch(H){case Cl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case dv:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",H);break}M=null,_=null,T=null,w=null,y.set(0,0,0),A=0,f=H,R=ge}return}bt=bt||pt,st=st||et,It=It||mt,(pt!==v||bt!==x)&&(e.blendEquationSeparate(Ht[pt],Ht[bt]),v=pt,x=bt),(et!==M||mt!==_||st!==T||It!==w)&&(e.blendFuncSeparate(Lt[et],Lt[mt],Lt[st],Lt[It]),M=et,_=mt,T=st,w=It),(Ct.equals(y)===!1||Ne!==A)&&(e.blendColor(Ct.r,Ct.g,Ct.b,Ne),y.copy(Ct),A=Ne),f=H,R=!1}function $t(H,pt){H.side===Ua?j(e.CULL_FACE):Q(e.CULL_FACE);let et=H.side===Jn;pt&&(et=!et),At(et),H.blending===Cl&&H.transparent===!1?Xt(La):Xt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),r.setMask(H.colorWrite);let mt=H.stencilWrite;o.setTest(mt),mt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ct(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):j(e.SAMPLE_ALPHA_TO_COVERAGE)}function At(H){U!==H&&(H?e.frontFace(e.CW):e.frontFace(e.CCW),U=H)}function Zt(H){H!==CM?(Q(e.CULL_FACE),H!==D&&(H===hv?e.cullFace(e.BACK):H===RM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):j(e.CULL_FACE),D=H}function fe(H){H!==I&&(B&&e.lineWidth(H),I=H)}function ct(H,pt,et){H?(Q(e.POLYGON_OFFSET_FILL),(C!==pt||L!==et)&&(C=pt,L=et,s.getReversed()&&(pt=-pt),e.polygonOffset(pt,et))):j(e.POLYGON_OFFSET_FILL)}function te(H){H?Q(e.SCISSOR_TEST):j(e.SCISSOR_TEST)}function Re(H){H===void 0&&(H=e.TEXTURE0+k-1),O!==H&&(e.activeTexture(H),O=H)}function P(H,pt,et){et===void 0&&(O===null?et=e.TEXTURE0+k-1:et=O);let mt=Y[et];mt===void 0&&(mt={type:void 0,texture:void 0},Y[et]=mt),(mt.type!==H||mt.texture!==pt)&&(O!==et&&(e.activeTexture(et),O=et),e.bindTexture(H,pt||q[H]),mt.type=H,mt.texture=pt)}function me(){let H=Y[O];H!==void 0&&H.type!==void 0&&(e.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ue(){try{e.compressedTexImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function S(){try{e.texSubImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function G(){try{e.texSubImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function ut(){try{e.texStorage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function ht(){try{e.texStorage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function tt(){try{e.texImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function at(){try{e.texImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function ft(H){return p[H]!==void 0?p[H]:e.getParameter(H)}function Nt(H,pt){p[H]!==pt&&(e.pixelStorei(H,pt),p[H]=pt)}function vt(H){Ot.equals(H)===!1&&(e.scissor(H.x,H.y,H.z,H.w),Ot.copy(H))}function dt(H){Ut.equals(H)===!1&&(e.viewport(H.x,H.y,H.z,H.w),Ut.copy(H))}function Dt(H,pt){let et=c.get(pt);et===void 0&&(et=new WeakMap,c.set(pt,et));let mt=et.get(H);mt===void 0&&(mt=e.getUniformBlockIndex(pt,H.name),et.set(H,mt))}function zt(H,pt){let mt=c.get(pt).get(H);l.get(pt)!==mt&&(e.uniformBlockBinding(pt,mt,H.__bindingPointIndex),l.set(pt,mt))}function qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},O=null,Y={},u={},d=new WeakMap,m=[],b=null,g=!1,f=null,v=null,M=null,_=null,x=null,T=null,w=null,y=new le(0,0,0),A=0,R=!1,U=null,D=null,I=null,C=null,L=null,Ot.set(0,0,e.canvas.width,e.canvas.height),Ut.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Q,disable:j,bindFramebuffer:gt,drawBuffers:rt,useProgram:St,setBlending:Xt,setMaterial:$t,setFlipSided:At,setCullFace:Zt,setLineWidth:fe,setPolygonOffset:ct,setScissorTest:te,activeTexture:Re,bindTexture:P,unbindTexture:me,compressedTexImage2D:ue,compressedTexImage3D:N,texImage2D:tt,texImage3D:at,pixelStorei:Nt,getParameter:ft,updateUBOMapping:Dt,uniformBlockBinding:zt,texStorage2D:ut,texStorage3D:ht,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:K,compressedTexSubImage3D:$,scissor:vt,viewport:dt,reset:qt}}function wU(e,t,n,i,a,r,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,p=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,S){return m?new OffscreenCanvas(N,S):bl("canvas")}function g(N,S,G){let K=1,$=ue(N);if(($.width>G||$.height>G)&&(K=G/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ut=Math.floor(K*$.width),ht=Math.floor(K*$.height);u===void 0&&(u=b(ut,ht));let tt=S?b(ut,ht):u;return tt.width=ut,tt.height=ht,tt.getContext("2d").drawImage(N,0,0,ut,ht),Bt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ut+"x"+ht+")."),tt}else return"data"in N&&Bt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),N;return N}function f(N){return N.generateMipmaps}function v(N){e.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?e.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(N,S,G,K,$,ut=!1){if(N!==null){if(e[N]!==void 0)return e[N];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht;K&&(ht=t.get("EXT_texture_norm16"),ht||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===e.RED&&(G===e.FLOAT&&(tt=e.R32F),G===e.HALF_FLOAT&&(tt=e.R16F),G===e.UNSIGNED_BYTE&&(tt=e.R8),G===e.UNSIGNED_SHORT&&ht&&(tt=ht.R16_EXT),G===e.SHORT&&ht&&(tt=ht.R16_SNORM_EXT)),S===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(tt=e.R8UI),G===e.UNSIGNED_SHORT&&(tt=e.R16UI),G===e.UNSIGNED_INT&&(tt=e.R32UI),G===e.BYTE&&(tt=e.R8I),G===e.SHORT&&(tt=e.R16I),G===e.INT&&(tt=e.R32I)),S===e.RG&&(G===e.FLOAT&&(tt=e.RG32F),G===e.HALF_FLOAT&&(tt=e.RG16F),G===e.UNSIGNED_BYTE&&(tt=e.RG8),G===e.UNSIGNED_SHORT&&ht&&(tt=ht.RG16_EXT),G===e.SHORT&&ht&&(tt=ht.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(tt=e.RG8UI),G===e.UNSIGNED_SHORT&&(tt=e.RG16UI),G===e.UNSIGNED_INT&&(tt=e.RG32UI),G===e.BYTE&&(tt=e.RG8I),G===e.SHORT&&(tt=e.RG16I),G===e.INT&&(tt=e.RG32I)),S===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(tt=e.RGB8UI),G===e.UNSIGNED_SHORT&&(tt=e.RGB16UI),G===e.UNSIGNED_INT&&(tt=e.RGB32UI),G===e.BYTE&&(tt=e.RGB8I),G===e.SHORT&&(tt=e.RGB16I),G===e.INT&&(tt=e.RGB32I)),S===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(tt=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(tt=e.RGBA16UI),G===e.UNSIGNED_INT&&(tt=e.RGBA32UI),G===e.BYTE&&(tt=e.RGBA8I),G===e.SHORT&&(tt=e.RGBA16I),G===e.INT&&(tt=e.RGBA32I)),S===e.RGB&&(G===e.UNSIGNED_SHORT&&ht&&(tt=ht.RGB16_EXT),G===e.SHORT&&ht&&(tt=ht.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(tt=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(tt=e.R11F_G11F_B10F)),S===e.RGBA){let at=ut?Zc:re.getTransfer($);G===e.FLOAT&&(tt=e.RGBA32F),G===e.HALF_FLOAT&&(tt=e.RGBA16F),G===e.UNSIGNED_BYTE&&(tt=at===ye?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&ht&&(tt=ht.RGBA16_EXT),G===e.SHORT&&ht&&(tt=ht.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(tt=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(tt=e.RGB5_A1)}return(tt===e.R16F||tt===e.R32F||tt===e.RG16F||tt===e.RG32F||tt===e.RGBA16F||tt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(N,S){let G;return N?S===null||S===na||S===Nl?G=e.DEPTH24_STENCIL8:S===ia?G=e.DEPTH32F_STENCIL8:S===Rl&&(G=e.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===na||S===Nl?G=e.DEPTH_COMPONENT24:S===ia?G=e.DEPTH_COMPONENT32F:S===Rl&&(G=e.DEPTH_COMPONENT16),G}function T(N,S){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==yn&&N.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function w(N){let S=N.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function y(N){let S=N.target;S.removeEventListener("dispose",y),U(S)}function A(N){let S=i.get(N);if(S.__webglInit===void 0)return;let G=N.source,K=d.get(G);if(K){let $=K[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(N),Object.keys(K).length===0&&d.delete(G)}i.remove(N)}function R(N){let S=i.get(N);e.deleteTexture(S.__webglTexture);let G=N.source,K=d.get(G);delete K[S.__cacheKey],s.memory.textures--}function U(N){let S=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let $=0;$<S.__webglFramebuffer[K].length;$++)e.deleteFramebuffer(S.__webglFramebuffer[K][$]);else e.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)e.deleteFramebuffer(S.__webglFramebuffer[K]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=N.textures;for(let K=0,$=G.length;K<$;K++){let ut=i.get(G[K]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),s.memory.textures--),i.remove(G[K])}i.remove(N)}let D=0;function I(){D=0}function C(){return D}function L(N){D=N}function k(){let N=D;return N>=a.maxTextures&&Bt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+a.maxTextures),D+=1,N}function B(N){let S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function V(N,S){let G=i.get(N);if(N.isVideoTexture&&P(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let K=N.image;if(K===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,N,S);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+S)}function z(N,S){let G=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){j(G,N,S);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+S)}function O(N,S){let G=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){j(G,N,S);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+S)}function Y(N,S){let G=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){gt(G,N,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+S)}let ot={[nd]:e.REPEAT,[Ca]:e.CLAMP_TO_EDGE,[id]:e.MIRRORED_REPEAT},it={[yn]:e.NEAREST,[KM]:e.NEAREST_MIPMAP_NEAREST,[fu]:e.NEAREST_MIPMAP_LINEAR,[cn]:e.LINEAR,[Dd]:e.LINEAR_MIPMAP_NEAREST,[is]:e.LINEAR_MIPMAP_LINEAR},Ot={[$M]:e.NEVER,[a2]:e.ALWAYS,[t2]:e.LESS,[pp]:e.LEQUAL,[e2]:e.EQUAL,[mp]:e.GEQUAL,[n2]:e.GREATER,[i2]:e.NOTEQUAL};function Ut(N,S){if(S.type===ia&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Dd||S.magFilter===fu||S.magFilter===is||S.minFilter===cn||S.minFilter===Dd||S.minFilter===fu||S.minFilter===is)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(N,e.TEXTURE_WRAP_S,ot[S.wrapS]),e.texParameteri(N,e.TEXTURE_WRAP_T,ot[S.wrapT]),(N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY)&&e.texParameteri(N,e.TEXTURE_WRAP_R,ot[S.wrapR]),e.texParameteri(N,e.TEXTURE_MAG_FILTER,it[S.magFilter]),e.texParameteri(N,e.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(e.texParameteri(N,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(N,e.TEXTURE_COMPARE_FUNC,Ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==fu&&S.minFilter!==is||S.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function lt(N,S){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",w));let K=S.source,$=d.get(K);$===void 0&&($={},d.set(K,$));let ut=B(S);if(ut!==N.__cacheKey){$[ut]===void 0&&($[ut]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),$[ut].usedTimes++;let ht=$[N.__cacheKey];ht!==void 0&&($[N.__cacheKey].usedTimes--,ht.usedTimes===0&&R(S)),N.__cacheKey=ut,N.__webglTexture=$[ut].texture}return G}function q(N,S,G){return Math.floor(Math.floor(N/G)/S)}function Q(N,S,G,K){let ut=N.updateRanges;if(ut.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,G,K,S.data);else{ut.sort((Nt,vt)=>Nt.start-vt.start);let ht=0;for(let Nt=1;Nt<ut.length;Nt++){let vt=ut[ht],dt=ut[Nt],Dt=vt.start+vt.count,zt=q(dt.start,S.width,4),qt=q(vt.start,S.width,4);dt.start<=Dt+1&&zt===qt&&q(dt.start+dt.count-1,S.width,4)===zt?vt.count=Math.max(vt.count,dt.start+dt.count-vt.start):(++ht,ut[ht]=dt)}ut.length=ht+1;let tt=n.getParameter(e.UNPACK_ROW_LENGTH),at=n.getParameter(e.UNPACK_SKIP_PIXELS),ft=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let Nt=0,vt=ut.length;Nt<vt;Nt++){let dt=ut[Nt],Dt=Math.floor(dt.start/4),zt=Math.ceil(dt.count/4),qt=Dt%S.width,H=Math.floor(Dt/S.width),pt=zt,et=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,qt),n.pixelStorei(e.UNPACK_SKIP_ROWS,H),n.texSubImage2D(e.TEXTURE_2D,0,qt,H,pt,et,G,K,S.data)}N.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,tt),n.pixelStorei(e.UNPACK_SKIP_PIXELS,at),n.pixelStorei(e.UNPACK_SKIP_ROWS,ft)}}function j(N,S,G){let K=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=e.TEXTURE_3D);let $=lt(N,S),ut=S.source;n.bindTexture(K,N.__webglTexture,e.TEXTURE0+G);let ht=i.get(ut);if(ut.version!==ht.__version||$===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let et=re.getPrimaries(re.workingColorSpace),mt=S.colorSpace===ra?null:re.getPrimaries(S.colorSpace),bt=S.colorSpace===ra||et===mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let at=g(S.image,!1,a.maxTextureSize);at=me(S,at);let ft=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),vt=_(S.internalFormat,ft,Nt,S.normalized,S.colorSpace,S.isVideoTexture);Ut(K,S);let dt,Dt=S.mipmaps,zt=S.isVideoTexture!==!0,qt=ht.__version===void 0||$===!0,H=ut.dataReady,pt=T(S,at);if(S.isDepthTexture)vt=x(S.format===as,S.type),qt&&(zt?n.texStorage2D(e.TEXTURE_2D,1,vt,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,vt,at.width,at.height,0,ft,Nt,null));else if(S.isDataTexture)if(Dt.length>0){zt&&qt&&n.texStorage2D(e.TEXTURE_2D,pt,vt,Dt[0].width,Dt[0].height);for(let et=0,mt=Dt.length;et<mt;et++)dt=Dt[et],zt?H&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,dt.width,dt.height,ft,Nt,dt.data):n.texImage2D(e.TEXTURE_2D,et,vt,dt.width,dt.height,0,ft,Nt,dt.data);S.generateMipmaps=!1}else zt?(qt&&n.texStorage2D(e.TEXTURE_2D,pt,vt,at.width,at.height),H&&Q(S,at,ft,Nt)):n.texImage2D(e.TEXTURE_2D,0,vt,at.width,at.height,0,ft,Nt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,vt,Dt[0].width,Dt[0].height,at.depth);for(let et=0,mt=Dt.length;et<mt;et++)if(dt=Dt[et],S.format!==Vi)if(ft!==null)if(zt){if(H)if(S.layerUpdates.size>0){let bt=Bv(dt.width,dt.height,S.format,S.type);for(let st of S.layerUpdates){let It=dt.data.subarray(st*bt/dt.data.BYTES_PER_ELEMENT,(st+1)*bt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,st,dt.width,dt.height,1,ft,It)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,at.depth,ft,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,vt,dt.width,dt.height,at.depth,0,dt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?H&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,at.depth,ft,Nt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,vt,dt.width,dt.height,at.depth,0,ft,Nt,dt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{zt&&qt&&n.texStorage2D(e.TEXTURE_2D,pt,vt,Dt[0].width,Dt[0].height);for(let et=0,mt=Dt.length;et<mt;et++)dt=Dt[et],S.format!==Vi?ft!==null?zt?H&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,dt.width,dt.height,ft,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,vt,dt.width,dt.height,0,dt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?H&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,dt.width,dt.height,ft,Nt,dt.data):n.texImage2D(e.TEXTURE_2D,et,vt,dt.width,dt.height,0,ft,Nt,dt.data)}else if(S.isDataArrayTexture)if(zt){if(qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,vt,at.width,at.height,at.depth),H)if(S.layerUpdates.size>0){let et=Bv(at.width,at.height,S.format,S.type);for(let mt of S.layerUpdates){let bt=at.data.subarray(mt*et/at.data.BYTES_PER_ELEMENT,(mt+1)*et/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,mt,at.width,at.height,1,ft,Nt,bt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ft,Nt,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,vt,at.width,at.height,at.depth,0,ft,Nt,at.data);else if(S.isData3DTexture)zt?(qt&&n.texStorage3D(e.TEXTURE_3D,pt,vt,at.width,at.height,at.depth),H&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ft,Nt,at.data)):n.texImage3D(e.TEXTURE_3D,0,vt,at.width,at.height,at.depth,0,ft,Nt,at.data);else if(S.isFramebufferTexture){if(qt)if(zt)n.texStorage2D(e.TEXTURE_2D,pt,vt,at.width,at.height);else{let et=at.width,mt=at.height;for(let bt=0;bt<pt;bt++)n.texImage2D(e.TEXTURE_2D,bt,vt,et,mt,0,ft,Nt,null),et>>=1,mt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let et=e.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),at.parentNode!==et){et.appendChild(at),p.add(S),et.onpaint=mt=>{let bt=mt.changedElements;for(let st of p)bt.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,at);else{let bt=e.RGBA,st=e.RGBA,It=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,bt,st,It,at)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(zt&&qt){let et=ue(Dt[0]);n.texStorage2D(e.TEXTURE_2D,pt,vt,et.width,et.height)}for(let et=0,mt=Dt.length;et<mt;et++)dt=Dt[et],zt?H&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,Nt,dt):n.texImage2D(e.TEXTURE_2D,et,vt,ft,Nt,dt);S.generateMipmaps=!1}else if(zt){if(qt){let et=ue(at);n.texStorage2D(e.TEXTURE_2D,pt,vt,et.width,et.height)}H&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Nt,at)}else n.texImage2D(e.TEXTURE_2D,0,vt,ft,Nt,at);f(S)&&v(K),ht.__version=ut.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function gt(N,S,G){if(S.image.length!==6)return;let K=lt(N,S),$=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+G);let ut=i.get($);if($.version!==ut.__version||K===!0){n.activeTexture(e.TEXTURE0+G);let ht=re.getPrimaries(re.workingColorSpace),tt=S.colorSpace===ra?null:re.getPrimaries(S.colorSpace),at=S.colorSpace===ra||ht===tt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ft=S.isCompressedTexture||S.image[0].isCompressedTexture,Nt=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!ft&&!Nt?vt[st]=g(S.image[st],!0,a.maxCubemapSize):vt[st]=Nt?S.image[st].image:S.image[st],vt[st]=me(S,vt[st]);let dt=vt[0],Dt=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),qt=_(S.internalFormat,Dt,zt,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,pt=ut.__version===void 0||K===!0,et=$.dataReady,mt=T(S,dt);Ut(e.TEXTURE_CUBE_MAP,S);let bt;if(ft){H&&pt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,qt,dt.width,dt.height);for(let st=0;st<6;st++){bt=vt[st].mipmaps;for(let It=0;It<bt.length;It++){let Ct=bt[It];S.format!==Vi?Dt!==null?H?et&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Ct.width,Ct.height,Dt,Ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,qt,Ct.width,Ct.height,0,Ct.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Ct.width,Ct.height,Dt,zt,Ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,qt,Ct.width,Ct.height,0,Dt,zt,Ct.data)}}}else{if(bt=S.mipmaps,H&&pt){bt.length>0&&mt++;let st=ue(vt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,qt,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){H?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Dt,zt,vt[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,vt[st].width,vt[st].height,0,Dt,zt,vt[st].data);for(let It=0;It<bt.length;It++){let Ne=bt[It].image[st].image;H?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,Ne.width,Ne.height,Dt,zt,Ne.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,qt,Ne.width,Ne.height,0,Dt,zt,Ne.data)}}else{H?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,zt,vt[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,Dt,zt,vt[st]);for(let It=0;It<bt.length;It++){let Ct=bt[It];H?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,Dt,zt,Ct.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,qt,Dt,zt,Ct.image[st])}}}f(S)&&v(e.TEXTURE_CUBE_MAP),ut.__version=$.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function rt(N,S,G,K,$,ut){let ht=r.convert(G.format,G.colorSpace),tt=r.convert(G.type),at=_(G.internalFormat,ht,tt,G.normalized,G.colorSpace),ft=i.get(S),Nt=i.get(G);if(Nt.__renderTarget=S,!ft.__hasExternalTextures){let vt=Math.max(1,S.width>>ut),dt=Math.max(1,S.height>>ut);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,ut,at,vt,dt,S.depth,0,ht,tt,null):n.texImage2D($,ut,at,vt,dt,0,ht,tt,null)}n.bindFramebuffer(e.FRAMEBUFFER,N),Re(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,$,Nt.__webglTexture,0,te(S)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,$,Nt.__webglTexture,ut),n.bindFramebuffer(e.FRAMEBUFFER,null)}function St(N,S,G){if(e.bindRenderbuffer(e.RENDERBUFFER,N),S.depthBuffer){let K=S.depthTexture,$=K&&K.isDepthTexture?K.type:null,ut=x(S.stencilBuffer,$),ht=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Re(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te(S),ut,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,te(S),ut,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ut,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,N)}else{let K=S.textures;for(let $=0;$<K.length;$++){let ut=K[$],ht=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),at=_(ut.internalFormat,ht,tt,ut.normalized,ut.colorSpace);Re(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te(S),at,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,te(S),at,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,at,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ht(N,S,G){let K=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,S.depthTexture);let ft=r.convert(S.depthTexture.format),Nt=r.convert(S.depthTexture.type),vt;S.depthTexture.format===Ra?vt=e.DEPTH_COMPONENT24:S.depthTexture.format===as&&(vt=e.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,vt,S.width,S.height,0,ft,Nt,null)}}else V(S.depthTexture,0);let ut=$.__webglTexture,ht=te(S),tt=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,at=S.depthTexture.format===as?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ra)Re(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,at,tt,ut,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,at,tt,ut,0);else if(S.depthTexture.format===as)Re(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,at,tt,ut,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,at,tt,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(N){let S=i.get(N),G=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=K}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let K=0;K<6;K++)Ht(S.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?Ht(S.__webglFramebuffer[0],N,0):Ht(S.__webglFramebuffer,N,0)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=e.createRenderbuffer(),St(S.__webglDepthbuffer[K],N,!1);else{let $=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ut)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),St(S.__webglDepthbuffer,N,!1);else{let $=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ut)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Xt(N,S,G){let K=i.get(N);S!==void 0&&rt(K.__webglFramebuffer,N,N.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Lt(N)}function $t(N){let S=N.texture,G=i.get(N),K=i.get(S);N.addEventListener("dispose",y);let $=N.textures,ut=N.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=S.version,s.memory.textures++),ut){G.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[tt]=[];for(let at=0;at<S.mipmaps.length;at++)G.__webglFramebuffer[tt][at]=e.createFramebuffer()}else G.__webglFramebuffer[tt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)G.__webglFramebuffer[tt]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(ht)for(let tt=0,at=$.length;tt<at;tt++){let ft=i.get($[tt]);ft.__webglTexture===void 0&&(ft.__webglTexture=e.createTexture(),s.memory.textures++)}if(N.samples>0&&Re(N)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let tt=0;tt<$.length;tt++){let at=$[tt];G.__webglColorRenderbuffer[tt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[tt]);let ft=r.convert(at.format,at.colorSpace),Nt=r.convert(at.type),vt=_(at.internalFormat,ft,Nt,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),dt=te(N);e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,vt,N.width,N.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.RENDERBUFFER,G.__webglColorRenderbuffer[tt])}e.bindRenderbuffer(e.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),St(G.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ut){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)rt(G.__webglFramebuffer[tt][at],N,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at);else rt(G.__webglFramebuffer[tt],N,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);f(S)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ht){for(let tt=0,at=$.length;tt<at;tt++){let ft=$[tt],Nt=i.get(ft),vt=e.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(vt=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(vt,Nt.__webglTexture),Ut(vt,ft),rt(G.__webglFramebuffer,N,ft,e.COLOR_ATTACHMENT0+tt,vt,0),f(ft)&&v(vt)}n.unbindTexture()}else{let tt=e.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(tt=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(tt,K.__webglTexture),Ut(tt,S),S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)rt(G.__webglFramebuffer[at],N,S,e.COLOR_ATTACHMENT0,tt,at);else rt(G.__webglFramebuffer,N,S,e.COLOR_ATTACHMENT0,tt,0);f(S)&&v(tt),n.unbindTexture()}N.depthBuffer&&Lt(N)}function At(N){let S=N.textures;for(let G=0,K=S.length;G<K;G++){let $=S[G];if(f($)){let ut=M(N),ht=i.get($).__webglTexture;n.bindTexture(ut,ht),v(ut),n.unbindTexture()}}}let Zt=[],fe=[];function ct(N){if(N.samples>0){if(Re(N)===!1){let S=N.textures,G=N.width,K=N.height,$=e.COLOR_BUFFER_BIT,ut=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(N),tt=S.length>1;if(tt)for(let ft=0;ft<S.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let at=N.texture.mipmaps;at&&at.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(N.resolveDepthBuffer&&(N.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),tt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);let Nt=i.get(S[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Nt,0)}e.blitFramebuffer(0,0,G,K,0,0,G,K,$,e.NEAREST),l===!0&&(Zt.length=0,fe.length=0,Zt.push(e.COLOR_ATTACHMENT0+ft),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Zt.push(ut),fe.push(ut),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,fe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Zt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),tt)for(let ft=0;ft<S.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);let Nt=i.get(S[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let S=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function te(N){return Math.min(a.maxSamples,N.samples)}function Re(N){let S=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function P(N){let S=s.render.frame;h.get(N)!==S&&(h.set(N,S),N.update())}function me(N,S){let G=N.colorSpace,K=N.format,$=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Vs&&G!==ra&&(re.getTransfer(G)===ye?(K!==Vi||$!==Ci)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",G)),S}function ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AU(e,t){function n(i,a=ra){let r,s=re.getTransfer(a);if(i===Ci)return e.UNSIGNED_BYTE;if(i===Ld)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Av)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Cv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ev)return e.BYTE;if(i===wv)return e.SHORT;if(i===Rl)return e.UNSIGNED_SHORT;if(i===Ud)return e.INT;if(i===na)return e.UNSIGNED_INT;if(i===ia)return e.FLOAT;if(i===aa)return e.HALF_FLOAT;if(i===Rv)return e.ALPHA;if(i===Nv)return e.RGB;if(i===Vi)return e.RGBA;if(i===Ra)return e.DEPTH_COMPONENT;if(i===as)return e.DEPTH_STENCIL;if(i===Dv)return e.RED;if(i===Pd)return e.RED_INTEGER;if(i===rs)return e.RG;if(i===Od)return e.RG_INTEGER;if(i===zd)return e.RGBA_INTEGER;if(i===du||i===pu||i===mu||i===gu)if(s===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===du)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===du)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===Fd||i===kd||i===Hd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===Xd||i===Wd||i===qd||i===vu||i===Yd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vd||i===Gd)return s===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xd)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return r.COMPRESSED_R11_EAC;if(i===qd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vu)return r.COMPRESSED_RG11_EAC;if(i===Yd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zd||i===Kd||i===Jd||i===jd||i===Qd||i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===rp||i===sp||i===op)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zd)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jd)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$d)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tp)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ep)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===np)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ip)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ap)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rp)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sp)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===op)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lp||i===cp||i===up)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===lp)return s===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===up)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hp||i===fp||i===_u||i===dp)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===hp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var CU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,i_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ru(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Nn({vertexShader:CU,fragmentShader:RU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new Ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},a_=class extends Na{constructor(t,n){super();let i=this,a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,m=null,b=typeof XRWebGLBinding<"u",g=new i_,f={},v=n.getContextAttributes(),M=null,_=null,x=[],T=[],w=new Wt,y=null,A=null,R=new li;R.viewport=new Xe;let U=new li;U.viewport=new Xe;let D=[R,U],I=new wd,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new Tl,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new Tl,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new Tl,x[q]=Q),Q.getHandSpace()};function k(q){let Q=T.indexOf(q.inputSource);if(Q===-1)return;let j=x[Q];j!==void 0&&(j.update(q.inputSource,q.frame,c||s),j.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",V);for(let q=0;q<x.length;q++){let Q=T[q];Q!==null&&(T[q]=null,x[q].disconnect(Q))}C=null,L=null,g.reset();for(let q in f)delete f[q];if(t.setRenderTarget(M),d=null,u=null,p=null,a=null,_=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),A!==null){let q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(M=t.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",B),a.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,gt=null,rt=null;v.depth&&(rt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=v.stencil?as:Ra,gt=v.stencil?Nl:na);let St={colorFormat:n.RGBA8,depthFormat:rt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(St),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ci(u.textureWidth,u.textureHeight,{format:Vi,type:Ci,depthTexture:new jr(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(a,n,j),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ci(d.framebufferWidth,d.framebufferHeight,{format:Vi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),lt.setContext(a),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let Q=0;Q<q.removed.length;Q++){let j=q.removed[Q],gt=T.indexOf(j);gt>=0&&(T[gt]=null,x[gt].disconnect(j))}for(let Q=0;Q<q.added.length;Q++){let j=q.added[Q],gt=T.indexOf(j);if(gt===-1){for(let St=0;St<x.length;St++)if(St>=T.length){T.push(j),gt=St;break}else if(T[St]===null){T[St]=j,gt=St;break}if(gt===-1)break}let rt=x[gt];rt&&rt.connect(j)}}let z=new Z,O=new Z;function Y(q,Q,j){z.setFromMatrixPosition(Q.matrixWorld),O.setFromMatrixPosition(j.matrixWorld);let gt=z.distanceTo(O),rt=Q.projectionMatrix.elements,St=j.projectionMatrix.elements,Ht=rt[14]/(rt[10]-1),Lt=rt[14]/(rt[10]+1),Xt=(rt[9]+1)/rt[5],$t=(rt[9]-1)/rt[5],At=(rt[8]-1)/rt[0],Zt=(St[8]+1)/St[0],fe=Ht*At,ct=Ht*Zt,te=gt/(-At+Zt),Re=te*-At;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Re),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),rt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let P=Ht+te,me=Lt+te,ue=fe-Re,N=ct+(gt-Re),S=Xt*Lt/me*P,G=$t*Lt/me*P;q.projectionMatrix.makePerspective(ue,N,S,G,P,me),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let Q=q.near,j=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(j=g.depthFar)),I.near=U.near=R.near=Q,I.far=U.far=R.far=j,(C!==I.near||L!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,L=I.far),I.layers.mask=q.layers.mask|6,R.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;let gt=q.parent,rt=I.cameras;ot(I,gt);for(let St=0;St<rt.length;St++)ot(rt[St],gt);rt.length===2?Y(I,R,U):I.projectionMatrix.copy(R.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),it(q,I,gt)};function it(q,Q,j){j===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(j.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(q){return f[q]};let Ot=null;function Ut(q,Q){if(h=Q.getViewerPose(c||s),m=Q,h!==null){let j=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let gt=!1;j.length!==I.cameras.length&&(I.cameras.length=0,gt=!0);for(let Lt=0;Lt<j.length;Lt++){let Xt=j[Lt],$t=null;if(d!==null)$t=d.getViewport(Xt);else{let Zt=p.getViewSubImage(u,Xt);$t=Zt.viewport,Lt===0&&(t.setRenderTargetTextures(_,Zt.colorTexture,Zt.depthStencilTexture),t.setRenderTarget(_))}let At=D[Lt];At===void 0&&(At=new li,At.layers.enable(Lt),At.viewport=new Xe,D[Lt]=At),At.matrix.fromArray(Xt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Xt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set($t.x,$t.y,$t.width,$t.height),Lt===0&&(I.matrix.copy(At.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),gt===!0&&I.cameras.push(At)}let rt=a.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Lt=p.getDepthInformation(j[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(Lt,a.renderState)}if(rt&&rt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Lt=0;Lt<j.length;Lt++){let Xt=j[Lt].camera;if(Xt){let $t=f[Xt];$t||($t=new ru,f[Xt]=$t);let At=p.getCameraImage(Xt);$t.sourceTexture=At}}}}for(let j=0;j<x.length;j++){let gt=T[j],rt=x[j];gt!==null&&rt!==void 0&&rt.update(gt,Q,c||s)}Ot&&Ot(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}let lt=new P2;lt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){Ot=q},this.dispose=function(){}}},NU=new Ye,H2=new Gt;H2.set(-1,0,0,0,1,0,0,0,1);function DU(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Pv(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,v,M,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,v,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Jn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Jn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let v=t.get(f),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(NU.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(H2),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=M*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let v=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function UU(e,t,n,i){let a={},r={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let T=x.program;i.uniformBlockBinding(_,T)}function c(_,x){let T=a[_.id];T===void 0&&(g(_),T=h(_),a[_.id]=T,_.addEventListener("dispose",v));let w=x.program;i.updateUBOMapping(_,w);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let x=p();_.__bindingPointIndex=x;let T=e.createBuffer(),w=_.__size,y=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,w,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,T),T}function p(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let x=a[_.id],T=_.uniforms,w=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let y=0,A=T.length;y<A;y++){let R=T[y];if(Array.isArray(R))for(let U=0,D=R.length;U<D;U++)d(R[U],y,U,w);else d(R,y,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(_,x,T,w){if(b(_,x,T,w)===!0){let y=_.__offset,A=_.value;if(Array.isArray(A)){let R=0;for(let U=0;U<A.length;U++){let D=A[U],I=f(D);m(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,_.__data)}}function m(_,x,T){typeof _=="number"||typeof _=="boolean"?x[0]=_:_.isMatrix3?(x[0]=_.elements[0],x[1]=_.elements[1],x[2]=_.elements[2],x[3]=0,x[4]=_.elements[3],x[5]=_.elements[4],x[6]=_.elements[5],x[7]=0,x[8]=_.elements[6],x[9]=_.elements[7],x[10]=_.elements[8],x[11]=0):ArrayBuffer.isView(_)?x.set(new _.constructor(_.buffer,_.byteOffset,x.length)):_.toArray(x,T)}function b(_,x,T,w){let y=_.value,A=x+"_"+T;if(w[A]===void 0)return typeof y=="number"||typeof y=="boolean"?w[A]=y:ArrayBuffer.isView(y)?w[A]=y.slice():w[A]=y.clone(),!0;{let R=w[A];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(_){let x=_.uniforms,T=0,w=16;for(let A=0,R=x.length;A<R;A++){let U=Array.isArray(x[A])?x[A]:[x[A]];for(let D=0,I=U.length;D<I;D++){let C=U[D],L=Array.isArray(C.value)?C.value:[C.value];for(let k=0,B=L.length;k<B;k++){let V=L[k],z=f(V),O=T%w,Y=O%z.boundary,ot=O+Y;T+=Y,ot!==0&&w-ot<z.storage&&(T+=w-ot),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=z.storage}}}let y=T%w;return y>0&&(T+=w-y),_.__size=T,_.__cache={},this}function f(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(x.boundary=16,x.storage=_.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",_),x}function v(_){let x=_.target;x.removeEventListener("dispose",v);let T=s.indexOf(x.__bindingPointIndex);s.splice(T,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function M(){for(let _ in a)e.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:l,update:c,dispose:M}}var LU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ia=null;function IU(){return Ia===null&&(Ia=new cd(LU,16,16,rs,aa),Ia.name="DFG_LUT",Ia.minFilter=cn,Ia.magFilter=cn,Ia.wrapS=Ca,Ia.wrapT=Ca,Ia.generateMipmaps=!1,Ia.needsUpdate=!0),Ia}var Il=class{constructor(t={}){let{canvas:n=s2(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ci}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let b=d,g=new Set([zd,Od,Pd]),f=new Set([Ci,na,Rl,Nl,Ld,Id]),v=new Uint32Array(4),M=new Int32Array(4),_=new Z,x=null,T=null,w=[],y=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,D=null,I=null,C=null,L=null;this._outputColorSpace=Ti;let k=0,B=0,V=null,z=-1,O=null,Y=new Xe,ot=new Xe,it=null,Ot=new le(0),Ut=0,lt=n.width,q=n.height,Q=1,j=null,gt=null,rt=new Xe(0,0,lt,q),St=new Xe(0,0,lt,q),Ht=!1,Lt=new nu,Xt=!1,$t=!1,At=new Ye,Zt=new Z,fe=new Xe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function Re(){return V===null?Q:1}let P=i;function me(E,F){return n.getContext(E,F)}let ue,N,S,G,K,$,ut,ht,tt,at,ft,Nt,vt,dt,Dt,zt,qt,H,pt,et,mt,bt,st;try{let E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",Gi,!1),P===null){let F="webgl2";if(P=me(F,E),P===null)throw me(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(E){throw n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Gi,!1),kt("WebGLRenderer: "+E.message),E}function It(){ue=new HN(P),ue.init(),mt=new AU(P,ue),N=new DN(P,ue,t,mt),S=new EU(P,ue),N.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),I=P.createFramebuffer(),C=P.createFramebuffer(),L=P.createFramebuffer(),G=new XN(P),K=new hU,$=new wU(P,ue,S,K,N,mt,G),ut=new kN(R),ht=new q3(P),bt=new RN(P,ht),tt=new VN(P,ht,G,bt),at=new qN(P,tt,ht,bt,G),H=new WN(P,N,$),Dt=new UN(K),ft=new uU(R,ut,ue,N,bt,Dt),Nt=new DU(R,K),vt=new dU,dt=new yU(ue),qt=new CN(R,ut,S,at,m,l),zt=new TU(R,at,N),st=new UU(P,G,N,S),pt=new NN(P,ue,G),et=new GN(P,ue,G),G.programs=ft.programs,R.capabilities=N,R.extensions=ue,R.properties=K,R.renderLists=vt,R.shadowMap=zt,R.state=S,R.info=G}b!==Ci&&(A=new ZN(b,n.width,n.height,o,a,r));let Ct=new a_(R,P);this.xr=Ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(lt,q,!1))},this.getSize=function(E){return E.set(lt,q)},this.setSize=function(E,F,J=!0){if(Ct.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=E,q=F,n.width=Math.floor(E*Q),n.height=Math.floor(F*Q),J===!0&&(n.style.width=E+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(lt*Q,q*Q).floor()},this.setDrawingBufferSize=function(E,F,J){lt=E,q=F,Q=J,n.width=Math.floor(E*J),n.height=Math.floor(F*J),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(b===Ci){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,F,J,X){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,F,J,X),S.viewport(Y.copy(rt).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,F,J,X){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,F,J,X),S.scissor(ot.copy(St).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(E){S.setScissorTest(Ht=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,J=!0){let X=0;if(E){let W=!1;if(V!==null){let xt=V.texture.format;W=g.has(xt)}if(W){let xt=V.texture.type,Tt=f.has(xt),yt=qt.getClearColor(),Et=qt.getClearAlpha(),Rt=yt.r,Kt=yt.g,ee=yt.b;Tt?(v[0]=Rt,v[1]=Kt,v[2]=ee,v[3]=Et,P.clearBufferuiv(P.COLOR,0,v)):(M[0]=Rt,M[1]=Kt,M[2]=ee,M[3]=Et,P.clearBufferiv(P.COLOR,0,M))}else X|=P.COLOR_BUFFER_BIT}F&&(X|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Gi,!1),qt.dispose(),vt.dispose(),dt.dispose(),K.dispose(),ut.dispose(),at.dispose(),bt.dispose(),st.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",S_),Ct.removeEventListener("sessionend",M_),cs.stop()};function Ne(E){E.preventDefault(),Iv("WebGLRenderer: Context Lost."),U=!0}function ge(){Iv("WebGLRenderer: Context Restored."),U=!1;let E=G.autoReset,F=zt.enabled,J=zt.autoUpdate,X=zt.needsUpdate,W=zt.type;It(),G.autoReset=E,zt.enabled=F,zt.autoUpdate=J,zt.needsUpdate=X,zt.type=W}function Gi(E){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function la(E){let F=E.target;F.removeEventListener("dispose",la),ET(F)}function ET(E){wT(E),K.remove(E)}function wT(E){let F=K.get(E).programs;F!==void 0&&(F.forEach(function(J){ft.releaseProgram(J)}),E.isShaderMaterial&&ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,J,X,W,xt){F===null&&(F=ct);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,yt=RT(E,F,J,X,W);S.setMaterial(X,Tt);let Et=J.index,Rt=1;if(X.wireframe===!0){if(Et=tt.getWireframeAttribute(J),Et===void 0)return;Rt=2}let Kt=J.drawRange,ee=J.attributes.position,wt=Kt.start*Rt,ve=(Kt.start+Kt.count)*Rt;xt!==null&&(wt=Math.max(wt,xt.start*Rt),ve=Math.min(ve,(xt.start+xt.count)*Rt)),Et!==null?(wt=Math.max(wt,0),ve=Math.min(ve,Et.count)):ee!=null&&(wt=Math.max(wt,0),ve=Math.min(ve,ee.count));let Qe=ve-wt;if(Qe<0||Qe===1/0)return;bt.setup(W,X,yt,J,Et);let Be,we=pt;if(Et!==null&&(Be=ht.get(Et),we=et,we.setIndex(Be)),W.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*Re()),we.setMode(P.LINES)):we.setMode(P.TRIANGLES);else if(W.isLine){let Ln=X.linewidth;Ln===void 0&&(Ln=1),S.setLineWidth(Ln*Re()),W.isLineSegments?we.setMode(P.LINES):W.isLineLoop?we.setMode(P.LINE_LOOP):we.setMode(P.LINE_STRIP)}else W.isPoints?we.setMode(P.POINTS):W.isSprite&&we.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))we.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ln=W._multiDrawStarts,Mt=W._multiDrawCounts,Gn=W._multiDrawCount,ce=Et?ht.get(Et).bytesPerElement:1,Ri=K.get(X).currentProgram.getUniforms();for(let ca=0;ca<Gn;ca++)Ri.setValue(P,"_gl_DrawID",ca),we.render(Ln[ca]/ce,Mt[ca])}else if(W.isInstancedMesh)we.renderInstances(wt,Qe,W.count);else if(J.isInstancedBufferGeometry){let Ln=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mt=Math.min(J.instanceCount,Ln);we.renderInstances(wt,Qe,Mt)}else we.render(wt,Qe)};function b_(E,F,J,X){D!==null&&E.isNodeMaterial&&D.setObject(X,E),Xt===!0&&Dt.setState(E,J,!1),E.transparent===!0&&E.side===Ua&&E.forceSinglePass===!1?(E.side=Jn,E.needsUpdate=!0,Iu(E,F,X),E.side=es,E.needsUpdate=!0,Iu(E,F,X),E.side=Ua):Iu(E,F,X)}this.compile=function(E,F,J=null){J===null&&(J=E),D!==null&&D.renderStart(E,F,J),T=dt.get(J),T.init(F),y.push(T),J.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==J&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),$t=this.localClippingEnabled,Xt=Dt.init(this.clippingPlanes,$t),Xt===!0&&Dt.setGlobalState(this.clippingPlanes,F),D!==null&&zt.render(T.state.shadowsArray,J,F);let X=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xt=W.material;if(xt)if(Array.isArray(xt))for(let Tt=0;Tt<xt.length;Tt++){let yt=xt[Tt];b_(yt,J,F,W),X.add(yt)}else b_(xt,J,F,W),X.add(xt)}),T=y.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(E,F,J=null){let X=this.compile(E,F,J);return new Promise(W=>{function xt(){if(X.forEach(function(Tt){let Et=K.get(Tt).currentProgram;(Et===void 0||Et.isReady())&&X.delete(Tt)}),X.size===0){W(E);return}setTimeout(xt,10)}ue.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Dp=null;function AT(E){Dp&&Dp(E)}function S_(){cs.stop()}function M_(){cs.start()}let cs=new P2;cs.setAnimationLoop(AT),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(E){Dp=E,Ct.setAnimationLoop(E),E===null?cs.stop():cs.start()},Ct.addEventListener("sessionstart",S_),Ct.addEventListener("sessionend",M_),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(E,F);let J=Ct.enabled===!0&&Ct.isPresenting===!0,X=A!==null&&(V===null||J)&&A.begin(R,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(F),F=Ct.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,F,V),T=dt.get(E,y.length),T.init(F),T.state.textureUnits=$.getTextureUnits(),y.push(T),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Lt.setFromProjectionMatrix(At,ta,F.reversedDepth),$t=this.localClippingEnabled,Xt=Dt.init(this.clippingPlanes,$t),x=vt.get(E,w.length),x.init(),w.push(x),Ct.enabled===!0&&Ct.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Up(Tt,F,-1/0,R.sortObjects)}Up(E,F,0,R.sortObjects),x.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&x.sort(j,gt),te=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,te&&qt.addToRenderList(x,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&Dt.beginShadows();let W=T.state.shadowsArray;if(zt.render(W,E,F),Xt===!0&&Dt.endShadows(),(X&&A.hasRenderPass())===!1){let Tt=x.opaque,yt=x.transmissive;if(T.setupLights(),F.isArrayCamera){let Et=F.cameras;if(yt.length>0)for(let Rt=0,Kt=Et.length;Rt<Kt;Rt++){let ee=Et[Rt];E_(Tt,yt,E,ee)}te&&qt.render(E);for(let Rt=0,Kt=Et.length;Rt<Kt;Rt++){let ee=Et[Rt];T_(x,E,ee,ee.viewport)}}else yt.length>0&&E_(Tt,yt,E,F),te&&qt.render(E),T_(x,E,F)}V!==null&&B===0&&($.updateMultisampleRenderTarget(V),$.updateRenderTargetMipmap(V)),X&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,F),bt.resetDefaultState(),z=-1,O=null,y.pop(),y.length>0?(T=y[y.length-1],$.setTextureUnits(T.state.textureUnits),Xt===!0&&Dt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?x=w[w.length-1]:x=null,D!==null&&D.renderEnd()};function Up(E,F,J,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Lt)){X&&fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);let Tt=at.update(E),yt=E.material;yt.visible&&x.push(E,Tt,yt,J,fe.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Lt))){let Tt=at.update(E),yt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),fe.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),fe.copy(Tt.boundingSphere.center)),fe.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(yt)){let Et=Tt.groups;for(let Rt=0,Kt=Et.length;Rt<Kt;Rt++){let ee=Et[Rt],wt=yt[ee.materialIndex];wt&&wt.visible&&x.push(E,Tt,wt,J,fe.z,ee,F)}}else yt.visible&&x.push(E,Tt,yt,J,fe.z,null,F)}}let xt=E.children;for(let Tt=0,yt=xt.length;Tt<yt;Tt++)Up(xt[Tt],F,J,X)}function T_(E,F,J,X){let{opaque:W,transmissive:xt,transparent:Tt}=E;T.setupLightsView(J),Xt===!0&&Dt.setGlobalState(R.clippingPlanes,J),X&&S.viewport(Y.copy(X)),W.length>0&&Lu(W,F,J),xt.length>0&&Lu(xt,F,J),Tt.length>0&&Lu(Tt,F,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function E_(E,F,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let wt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new ci(1,1,{generateMipmaps:!0,type:wt?aa:Ci,minFilter:is,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let xt=T.state.transmissionRenderTarget[X.id],Tt=X.viewport||Y;xt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(Ot),Ut=R.getClearAlpha(),Ut<1&&R.setClearColor(16777215,.5),R.clear(),te&&qt.render(J);let Kt=R.toneMapping;R.toneMapping=ea;let ee=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),Xt===!0&&Dt.setGlobalState(R.clippingPlanes,X),Lu(E,J,X),$.updateMultisampleRenderTarget(xt),$.updateRenderTargetMipmap(xt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ve=0,Qe=F.length;ve<Qe;ve++){let Be=F[ve],{object:we,geometry:Ln,material:Mt,group:Gn}=Be;if(Mt.side===Ua&&we.layers.test(X.layers)){let ce=Mt.side;Mt.side=Jn,Mt.needsUpdate=!0,w_(we,J,X,Ln,Mt,Gn),Mt.side=ce,Mt.needsUpdate=!0,wt=!0}}wt===!0&&($.updateMultisampleRenderTarget(xt),$.updateRenderTargetMipmap(xt))}R.setRenderTarget(yt,Et,Rt),R.setClearColor(Ot,Ut),ee!==void 0&&(X.viewport=ee),R.toneMapping=Kt}function Lu(E,F,J){let X=F.isScene===!0?F.overrideMaterial:null;for(let W=0,xt=E.length;W<xt;W++){let Tt=E[W],{object:yt,geometry:Et,group:Rt}=Tt,Kt=Tt.material;Kt.allowOverride===!0&&X!==null&&(Kt=X),yt.layers.test(J.layers)&&w_(yt,F,J,Et,Kt,Rt)}}function w_(E,F,J,X,W,xt){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(R,F,J,X,W,xt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,F,J,X,E,xt),W.transparent===!0&&W.side===Ua&&W.forceSinglePass===!1?(W.side=Jn,W.needsUpdate=!0,R.renderBufferDirect(J,F,X,W,E,xt),W.side=es,W.needsUpdate=!0,R.renderBufferDirect(J,F,X,W,E,xt),W.side=Ua):R.renderBufferDirect(J,F,X,W,E,xt),E.onAfterRender(R,F,J,X,W,xt)}function Iu(E,F,J){F.isScene!==!0&&(F=ct);let X=K.get(E),W=T.state.lights,xt=T.state.shadowsArray,Tt=W.state.version,yt=ft.getParameters(E,W.state,xt,F,J,T.state.lightProbeGridArray),Et=ft.getProgramCacheKey(yt),Rt=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let Kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ut.get(E.envMap||X.environment,Kt),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",la),Rt=new Map,X.programs=Rt);let ee=Rt.get(Et);if(ee!==void 0){if(X.currentProgram===ee&&X.lightsStateVersion===Tt)return C_(E,yt),ee}else yt.uniforms=ft.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,J,yt),E.onBeforeCompile(yt,R),ee=ft.acquireProgram(yt,Et),Rt.set(Et,ee),X.uniforms=yt.uniforms;let wt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=Dt.uniform),C_(E,yt),X.needsLights=DT(E),X.lightsStateVersion=Tt,X.needsLights&&(wt.ambientLightColor.value=W.state.ambient,wt.lightProbe.value=W.state.probe,wt.sunLights.value=W.state.sun,wt.sunLightShadows.value=W.state.sunShadow,wt.directionalLights.value=W.state.directional,wt.directionalLightShadows.value=W.state.directionalShadow,wt.spotLights.value=W.state.spot,wt.spotLightShadows.value=W.state.spotShadow,wt.rectAreaLights.value=W.state.rectArea,wt.ltc_1.value=W.state.rectAreaLTC1,wt.ltc_2.value=W.state.rectAreaLTC2,wt.pointLights.value=W.state.point,wt.pointLightShadows.value=W.state.pointShadow,wt.hemisphereLights.value=W.state.hemi,wt.sunShadowMatrix.value=W.state.sunShadowMatrix,wt.sunShadowCascade.value=W.state.sunShadowCascade,wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,wt.spotLightMatrix.value=W.state.spotLightMatrix,wt.spotLightMap.value=W.state.spotLightMap,wt.pointShadowMatrix.value=W.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=ee,X.uniformsList=null,ee}function A_(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Ll.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function C_(E,F){let J=K.get(E);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function CT(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let J=0,X=E.length;J<X;J++){let W=E[J];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function RT(E,F,J,X,W){F.isScene!==!0&&(F=ct),$.resetTextureUnits();let xt=F.fog,Tt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,yt=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:re.workingColorSpace,Et=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Rt=ut.get(X.envMap||Tt,Et),Kt=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ee=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!J.morphAttributes.position,ve=!!J.morphAttributes.normal,Qe=!!J.morphAttributes.color,Be=ea;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Be=R.toneMapping);let we=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ln=we!==void 0?we.length:0,Mt=K.get(X),Gn=T.state.lights;if(Xt===!0&&($t===!0||E!==O)){let De=E===O&&X.id===z;Dt.setState(X,E,De)}let ce=!1;X.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Gn.state.version||Mt.outputColorSpace!==yt||W.isBatchedMesh&&Mt.batching===!1||!W.isBatchedMesh&&Mt.batching===!0||W.isBatchedMesh&&Mt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Mt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Mt.instancing===!1||!W.isInstancedMesh&&Mt.instancing===!0||W.isSkinnedMesh&&Mt.skinning===!1||!W.isSkinnedMesh&&Mt.skinning===!0||W.isInstancedMesh&&Mt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Mt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Mt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Mt.instancingMorph===!1&&W.morphTexture!==null||Mt.envMap!==Rt||X.fog===!0&&Mt.fog!==xt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Dt.numPlanes||Mt.numIntersection!==Dt.numIntersection)||Mt.vertexAlphas!==Kt||Mt.vertexTangents!==ee||Mt.morphTargets!==wt||Mt.morphNormals!==ve||Mt.morphColors!==Qe||Mt.toneMapping!==Be||Mt.morphTargetsCount!==Ln||!!Mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Mt.__version=X.version);let Ri=Mt.currentProgram;ce===!0&&(Ri=Iu(X,F,W),D&&X.isNodeMaterial&&D.onUpdateProgram(X,Ri,Mt));let ca=!1,lr=!1,eo=!1,Te=Ri.getUniforms(),Ke=Mt.uniforms;if(S.useProgram(Ri.program)&&(ca=!0,lr=!0,eo=!0),X.id!==z&&(z=X.id,lr=!0),Mt.needsLights){let De=CT(T.state.lightProbeGridArray,W);Mt.lightProbeGrid!==De&&(Mt.lightProbeGrid=De,lr=!0)}if(ca||O!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Te.setValue(P,"projectionMatrix",E.projectionMatrix),Te.setValue(P,"viewMatrix",E.matrixWorldInverse);let ur=Te.map.cameraPosition;ur!==void 0&&ur.setValue(P,Zt.setFromMatrixPosition(E.matrixWorld)),N.logarithmicDepthBuffer&&Te.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Te.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,lr=!0,eo=!0)}if(Mt.needsLights&&(Gn.state.sunShadowMap.length>0&&Te.setValue(P,"sunShadowMap",Gn.state.sunShadowMap,$),Gn.state.directionalShadowMap.length>0&&Te.setValue(P,"directionalShadowMap",Gn.state.directionalShadowMap,$),Gn.state.spotShadowMap.length>0&&Te.setValue(P,"spotShadowMap",Gn.state.spotShadowMap,$),Gn.state.pointShadowMap.length>0&&Te.setValue(P,"pointShadowMap",Gn.state.pointShadowMap,$)),W.isSkinnedMesh){Te.setOptional(P,W,"bindMatrix"),Te.setOptional(P,W,"bindMatrixInverse");let De=W.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Te.setValue(P,"boneTexture",De.boneTexture,$))}W.isBatchedMesh&&(Te.setOptional(P,W,"batchingTexture"),Te.setValue(P,"batchingTexture",W._matricesTexture,$),Te.setOptional(P,W,"batchingIdTexture"),Te.setValue(P,"batchingIdTexture",W._indirectTexture,$),Te.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Te.setValue(P,"batchingColorTexture",W._colorsTexture,$));let cr=J.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&H.update(W,J,Ri),(lr||Mt.receiveShadow!==W.receiveShadow)&&(Mt.receiveShadow=W.receiveShadow,Te.setValue(P,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Ke.envMapIntensity.value=F.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=IU()),lr){if(Te.setValue(P,"toneMappingExposure",R.toneMappingExposure),Mt.needsLights&&NT(Ke,eo),xt&&X.fog===!0&&Nt.refreshFogUniforms(Ke,xt),Nt.refreshMaterialUniforms(Ke,X,Q,q,T.state.transmissionRenderTarget[E.id]),Mt.needsLights&&Mt.lightProbeGrid){let De=Mt.lightProbeGrid;Ke.probesSH.value=De.texture,Ke.probesMin.value.copy(De.boundingBox.min),Ke.probesMax.value.copy(De.boundingBox.max),Ke.probesResolution.value.copy(De.resolution)}Ll.upload(P,A_(Mt),Ke,$)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ll.upload(P,A_(Mt),Ke,$),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Te.setValue(P,"center",W.center),Te.setValue(P,"modelViewMatrix",W.modelViewMatrix),Te.setValue(P,"normalMatrix",W.normalMatrix),Te.setValue(P,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){let De=X.uniformsGroups;for(let ur=0,no=De.length;ur<no;ur++){let N_=De[ur];st.update(N_,Ri),st.bind(N_,Ri)}}return Ri}function NT(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function DT(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,F,J){let X=K.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=F,K.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let J=K.get(E);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,J=0){V=E,k=F,B=J;let X=null,W=!1,xt=!1;if(E){let yt=K.get(E);if(yt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(P.FRAMEBUFFER,yt.__webglFramebuffer),Y.copy(E.viewport),ot.copy(E.scissor),it=E.scissorTest,S.viewport(Y),S.scissor(ot),S.setScissorTest(it),z=-1;return}else if(yt.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(yt.__hasExternalTextures)$.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Kt=E.depthTexture;if(yt.__boundDepthTexture!==Kt){if(Kt!==null&&K.has(Kt)&&(E.width!==Kt.image.width||E.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}let Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(xt=!0);let Rt=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[F])?X=Rt[F][J]:X=Rt[F],W=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?X=K.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?X=Rt[J]:X=Rt,Y.copy(E.viewport),ot.copy(E.scissor),it=E.scissorTest}else Y.copy(rt).multiplyScalar(Q).floor(),ot.copy(St).multiplyScalar(Q).floor(),it=Ht;if(J!==0&&(X=I),S.bindFramebuffer(P.FRAMEBUFFER,X)&&S.drawBuffers(E,X),S.viewport(Y),S.scissor(ot),S.setScissorTest(it),W){let yt=K.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,J)}else if(xt){let yt=F;for(let Et=0;Et<E.textures.length;Et++){let Rt=K.get(E.textures[Et]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Et,Rt.__webglTexture,J,yt)}}else if(E!==null&&J!==0){let yt=K.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,J)}z=-1};function R_(E){let F=K.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=N.textureFormatReadable(E.format),F.__typeReadable=N.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,J,X,W,xt,Tt,yt=0){if(!(E&&E.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Et=Et[Tt]),Et){S.bindFramebuffer(P.FRAMEBUFFER,Et);try{let Rt=E.textures[yt],Kt=Rt.format,ee=Rt.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+yt);let wt=R_(Rt);if(wt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&J>=0&&J<=E.height-W&&P.readPixels(F,J,X,W,mt.convert(Kt),mt.convert(ee),xt)}finally{let Rt=V!==null?K.get(V).__webglFramebuffer:null;S.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,F,J,X,W,xt,Tt,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Et=Et[Tt]),Et)if(F>=0&&F<=E.width-X&&J>=0&&J<=E.height-W){S.bindFramebuffer(P.FRAMEBUFFER,Et);let Rt=E.textures[yt],Kt=Rt.format,ee=Rt.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+yt);let wt=R_(Rt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.bufferData(P.PIXEL_PACK_BUFFER,xt.byteLength,P.STREAM_READ),P.readPixels(F,J,X,W,mt.convert(Kt),mt.convert(ee),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Qe=V!==null?K.get(V).__webglFramebuffer:null;S.bindFramebuffer(P.FRAMEBUFFER,Qe);let Be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await l2(P,Be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ve),P.deleteSync(Be),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,J=0){let X=Math.pow(2,-J),W=Math.floor(E.image.width*X),xt=Math.floor(E.image.height*X),Tt=F!==null?F.x:0,yt=F!==null?F.y:0;$.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Tt,yt,W,xt),S.unbindTexture()},this.copyTextureToTexture=function(E,F,J=null,X=null,W=0,xt=0){let Tt,yt,Et,Rt,Kt,ee,wt,ve,Qe,Be=E.isCompressedTexture?E.mipmaps[xt]:E.image;if(J!==null)Tt=J.max.x-J.min.x,yt=J.max.y-J.min.y,Et=J.isBox3?J.max.z-J.min.z:1,Rt=J.min.x,Kt=J.min.y,ee=J.isBox3?J.min.z:0;else{let Ke=Math.pow(2,-W);Tt=Math.floor(Be.width*Ke),yt=Math.floor(Be.height*Ke),E.isDataArrayTexture?Et=Be.depth:E.isData3DTexture?Et=Math.floor(Be.depth*Ke):Et=1,Rt=0,Kt=0,ee=0}X!==null?(wt=X.x,ve=X.y,Qe=X.z):(wt=0,ve=0,Qe=0);let we=mt.convert(F.format),Ln=mt.convert(F.type),Mt;F.isData3DTexture?($.setTexture3D(F,0),Mt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Mt=P.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Mt=P.TEXTURE_2D),S.activeTexture(P.TEXTURE0),S.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let Gn=S.getParameter(P.UNPACK_ROW_LENGTH),ce=S.getParameter(P.UNPACK_IMAGE_HEIGHT),Ri=S.getParameter(P.UNPACK_SKIP_PIXELS),ca=S.getParameter(P.UNPACK_SKIP_ROWS),lr=S.getParameter(P.UNPACK_SKIP_IMAGES);S.pixelStorei(P.UNPACK_ROW_LENGTH,Be.width),S.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Be.height),S.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),S.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),S.pixelStorei(P.UNPACK_SKIP_IMAGES,ee);let eo=E.isDataArrayTexture||E.isData3DTexture,Te=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Ke=K.get(E),cr=K.get(F),De=K.get(Ke.__renderTarget),ur=K.get(cr.__renderTarget);S.bindFramebuffer(P.READ_FRAMEBUFFER,De.__webglFramebuffer),S.bindFramebuffer(P.DRAW_FRAMEBUFFER,ur.__webglFramebuffer);for(let no=0;no<Et;no++)eo&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,K.get(E).__webglTexture,W,ee+no),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,K.get(F).__webglTexture,xt,Qe+no)),P.blitFramebuffer(Rt,Kt,Tt,yt,wt,ve,Tt,yt,P.DEPTH_BUFFER_BIT,P.NEAREST);S.bindFramebuffer(P.READ_FRAMEBUFFER,null),S.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||K.has(E)){let Ke=K.get(E),cr=K.get(F);S.bindFramebuffer(P.READ_FRAMEBUFFER,C),S.bindFramebuffer(P.DRAW_FRAMEBUFFER,L);for(let De=0;De<Et;De++)eo?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ke.__webglTexture,W,ee+De):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ke.__webglTexture,W),Te?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cr.__webglTexture,xt,Qe+De):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cr.__webglTexture,xt),W!==0?P.blitFramebuffer(Rt,Kt,Tt,yt,wt,ve,Tt,yt,P.COLOR_BUFFER_BIT,P.NEAREST):Te?P.copyTexSubImage3D(Mt,xt,wt,ve,Qe+De,Rt,Kt,Tt,yt):P.copyTexSubImage2D(Mt,xt,wt,ve,Rt,Kt,Tt,yt);S.bindFramebuffer(P.READ_FRAMEBUFFER,null),S.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Te?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Mt,xt,wt,ve,Qe,Tt,yt,Et,we,Ln,Be.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,xt,wt,ve,Qe,Tt,yt,Et,we,Be.data):P.texSubImage3D(Mt,xt,wt,ve,Qe,Tt,yt,Et,we,Ln,Be):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,xt,wt,ve,Tt,yt,we,Ln,Be.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,xt,wt,ve,Be.width,Be.height,we,Be.data):P.texSubImage2D(P.TEXTURE_2D,xt,wt,ve,Tt,yt,we,Ln,Be);S.pixelStorei(P.UNPACK_ROW_LENGTH,Gn),S.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce),S.pixelStorei(P.UNPACK_SKIP_PIXELS,Ri),S.pixelStorei(P.UNPACK_SKIP_ROWS,ca),S.pixelStorei(P.UNPACK_SKIP_IMAGES,lr),xt===0&&F.generateMipmaps&&P.generateMipmap(Mt),S.unbindTexture()},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){k=0,B=0,V=null,S.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}};function r_(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Mu=class{constructor(t){this.n=t;this.i=0;this.pos=new Float32Array(t*3),this.role=new Uint8Array(t)}push(t,n,i,a){this.i>=this.n||(this.pos.set([t,n,i],this.i*3),this.role[this.i++]=a)}done(t){let n=Math.max(1,this.i);for(;this.i<this.n;){let i=Math.floor(t()*n);this.push(this.pos[i*3]+(t()-.5)*.01,this.pos[i*3+1]+(t()-.5)*.01,this.pos[i*3+2],this.role[i])}return{pos:this.pos,role:this.role}}};function s_(e){let t=r_(2),n=new Mu(e),i=.42,a=.42,r=.54,s=e*.44,o=e*.2,l=e*.13;for(let d=0;d<s;d++){let m=t()*Math.PI*2,b=1+(t()-.5)*.07;n.push(Math.cos(m)*a*b,i+Math.sin(m)*r*b,(t()-.5)*.06,d%9===0?2:1)}let c=8,h=10;for(let d=0;d<o;d++)if(t()<.47){let m=-a+(Math.floor(t()*c)+.5)/c*2*a,b=r*Math.sqrt(Math.max(0,1-(m/a)**2));n.push(m,i+(t()*2-1)*b*.97,0,0)}else{let m=-r+(Math.floor(t()*h)+.5)/h*2*r,b=a*Math.sqrt(Math.max(0,1-(m/r)**2));n.push((t()*2-1)*b*.97,i+m,0,0)}let p=-Math.PI/2-.85,u=-Math.PI/2+.85;for(let d=0;d<l;d++){let m=t()<.5?p:u,b=t(),g=Math.cos(m)*a,f=i+Math.sin(m)*r,v=Math.sign(g)*.03;n.push(g+(v-g)*(1-(1-b)**2)+(t()-.5)*.03,f+(-.42-f)*b,(t()-.5)*.05,1)}for(;n.i<e;){let d=-.42-t()*.66,m=d<-.6,b=m?.07:.045,g=t()*Math.PI*2;n.push(Math.cos(g)*b*.5,d,Math.sin(g)*b*.5,m?2:1)}return n.done(t)}function Sp(e,t=!0){let n=r_(4),i=new Mu(e),a=2.7/23.77,r=10.97/2*a,s=8.23/2*a,o=23.77/2*a,l=6.4*a,c=[[-r,-o,r,-o],[-r,o,r,o],[-r,-o,-r,o],[r,-o,r,o],[-s,-o,-s,o],[s,-o,s,o],[-s,-l,s,-l],[-s,l,s,l],[0,-l,0,l],[0,-o,0,-o+.15*a*2],[0,o,0,o-.15*a*2]],h=c.map(([_,x,T,w])=>Math.hypot(T-_,w-x)),p=h.reduce((_,x)=>_+x,0),u=e*(t?.64:.74);for(let _=0;_<u;_++){let x=n()*p,T=0;for(;x>h[T]&&T<h.length-1;)x-=h[T++];let[w,y,A,R]=c[T],U=x/h[T];i.push(w+(A-w)*U+(n()-.5)*.012,0,y+(R-y)*U+(n()-.5)*.012,1)}let d=e*(t?.2:.23),m=r+.914*a,b=_=>(.914+(1.07-.914)*(Math.abs(_)/m)**2)*a*1.6;for(let _=0;_<d;_++){let x=(n()*2-1)*m,T=n()<.5,w=T?Math.round(n()*b(x)/.03)*.03:n()*b(x);i.push(T?x:Math.round(x/.03)*.03,Math.min(w,b(x)),0,1)}for(let _=0;_<e*.03;_++){let x=(n()*2-1)*m;i.push(x,b(x),0,1)}for(;t&&i.i<e;)i.push((n()*2-1)*(r+.35),-.005,(n()*2-1)*(o+.4),2);let g=i.done(n),f=.62,v=Math.cos(f),M=Math.sin(f);for(let _=0;_<e;_++){let x=g.pos[_*3+1],T=g.pos[_*3+2];g.pos[_*3+1]=x*v-T*M-.05,g.pos[_*3+2]=x*M+T*v}return g}function G2(e,t,n){return e>.7&&t<.75&&n<.65&&e-t>.12?2:n<.62&&t>.7?e>.8?0:3:1}function Tu(e,t,n={}){let{size:i=2.6,depth:a=.08,seed:r=7}=n,s=r_(r),o=e.getContext("2d"),{width:l,height:c}=e,h=o.getImageData(0,0,l,c).data,p=[];for(let b=0;b<c;b++)for(let g=0;g<l;g++)h[(b*l+g)*4+3]>140&&p.push(g,b);let u=new Mu(t),d=p.length/2,m=i/l;for(let b=0;b<t&&d;b++){let g=Math.floor(s()*d)*2,f=(p[g+1]*l+p[g])*4,v=n.role?n.role(s):G2(h[f]/255,h[f+1]/255,h[f+2]/255);u.push((p[g]+s()-.5-l/2)*m,-(p[g+1]+s()-.5-c/2)*m,(s()-.5)*a,v)}return u.done(s)}async function o_(e,t,n="italic 400 230px Georgia, serif"){try{await document.fonts.load(n,t)}catch{}let i=document.createElement("canvas"),a=i.getContext("2d");a.font=n;let r=Math.ceil(a.measureText(t).width)+80;return i.width=Math.max(900,r),i.height=300,a.font=n,a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",a.fillText(t,i.width/2,150),Tu(i,e,{size:.0034*i.width,depth:.06,seed:6,role:s=>s()<.12?0:1})}async function l_(e,t,n={}){let i=new Image;i.crossOrigin="anonymous",i.src=t,await i.decode();let a=document.createElement("canvas"),r=Math.min(1,600/Math.max(i.naturalWidth,i.naturalHeight));a.width=Math.round(i.naturalWidth*r),a.height=Math.round(i.naturalHeight*r);let s=a.getContext("2d");s.drawImage(i,0,0,a.width,a.height);let o=s.getImageData(0,0,a.width,a.height),l=o.data,c=0;for(let p=3;p<l.length;p+=4)l[p]>250&&c++;if(c>l.length/4*.95){for(let p=0;p<l.length;p+=4)l[p+3]=(l[p]+l[p+1]+l[p+2])/3<128?255:0;s.putImageData(o,0,0)}let h=n.role;return Tu(a,e,{size:n.size??2.4,role:h===void 0?void 0:()=>h})}var Mp={count:[7e3,3e3],palette:["#e6e28c","#f5f0e6","#e5875a","#c9d34f"],blend:"add",alpha:.62,halo:.1,parallax:.25,ballSpin:4e-4,pace:.0022,font:"italic 400 230px Georgia, serif"};var Tp=Math.PI*2,Oa=7,kn=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},PU=`
  attribute vec2 aNoise;               // loose state, 0..1 of the box
  attribute float aBallType;           // 0 surface, 1 seam, 2 silhouette (does not turn)
  attribute vec3 aT0; attribute vec3 aT1; attribute vec3 aT2; attribute vec3 aT3; attribute vec3 aT4;
  attribute float aCol;                // colour role per state, packed base 4
  attribute vec4 aDot;                 // radius px, phase, drift speed, twinkle speed
  attribute vec2 aStag;                // morph stagger, halo flag
  uniform float uMorph, uTime, uDpr, uRepelR, uRepelA, uLast, uAlpha, uScroll, uParallax, uSpin;
  uniform float uStateA[${Oa}];
  uniform vec3 uPlace[${Oa}];  // per state: centre x, centre y, scale (px per unit)
  uniform float uKind[${Oa}];  // 0 loose, 1 ball, 2 static shape, 3 black hole
  uniform float uSlot[${Oa}];
  uniform vec2 uRes, uMouse;
  uniform vec3 uPal[4];
  varying vec3 vCol; varying float vA;

  vec2 project(vec3 v, vec3 pl){ float k = 4.2 / (4.2 - v.z); return vec2(pl.x + v.x * pl.z * k, pl.y - v.y * pl.z * k); }
  vec2 ballPos(vec3 pl){
    if (aBallType > 1.5) return project(vec3(position.xy, 0.), pl);
    float a = uTime * uSpin, ca = cos(a), sa = sin(a), ct = cos(.35), st = sin(.35);
    float x = position.x * ca + position.z * sa, z = -position.x * sa + position.z * ca;
    return project(vec3(x, position.y * ct - z * st, position.y * st + z * ct), pl);
  }
  vec3 slot(float s){ return s < .5 ? aT0 : s < 1.5 ? aT1 : s < 2.5 ? aT2 : s < 3.5 ? aT3 : aT4; }
  vec2 statePos(int k){
    float kind = uKind[k];
    if (kind < .5) {
      vec2 q = aNoise * uRes;
      float depth = .25 + .75 * (aDot.x - .75) / 1.35;
      q.y = mod(q.y - uScroll * uParallax * depth, uRes.y + 40.) - 20.;
      return q;
    }
    if (kind < 1.5) return ballPos(uPlace[k]);
    if (kind > 2.5) return uPlace[k].xy;
    return project(slot(uSlot[k]), uPlace[k]);
  }
  float colIndex(int k){
    float b = k == 0 ? 1. : k == 1 ? 4. : k == 2 ? 16. : k == 3 ? 64. : k == 4 ? 256. : k == 5 ? 1024. : 4096.;
    return mod(floor((aCol + .5) / b), 4.);
  }
  void main(){
    float halo = aStag.y;
    int k = int(min(uLast - 1., floor(uMorph)));
    float local = uMorph - float(k);
    float f = halo > .5 ? 0. : smoothstep(aStag.x, aStag.x + .75, local);
    int ka = halo > .5 ? 0 : k, kb = halo > .5 ? 0 : k + 1;
    float sinkA = uKind[ka] > 2.5 ? 1. : 0., sinkB = uKind[kb] > 2.5 ? 1. : 0.;
    vec2 pa = statePos(ka), pb = statePos(kb);
    vec2 pos = mix(pa, pb, sinkB > .5 ? f * f : f);
    if (sinkB > .5) {
      float ang = f * f * 5.;
      vec2 d = pos - pb;
      pos = pb + vec2(d.x * cos(ang) - d.y * sin(ang), d.x * sin(ang) + d.y * cos(ang));
    }
    float loose = halo > .5 ? 1. : 1. - clamp(uMorph, 0., 1.);
    float wob = uTime * aDot.z + aDot.y, amp = (3. + 12. * loose) * (sinkB > .5 ? 1. - f : 1.);
    pos += vec2(cos(wob), sin(wob * 1.27 + aDot.y)) * amp;
    vec2 d = pos - uMouse;
    float r2 = dot(d, d);
    pos += d * inversesqrt(r2 + 1.) * uRepelA * exp(-r2 / (uRepelR * uRepelR));
    vec2 clip = pos / uRes * 2. - 1.;
    gl_Position = vec4(clip.x, -clip.y, 0., 1.);
    gl_PointSize = (aDot.x * 2. + 1.) * uDpr * (sinkB > .5 ? 1. - .7 * f : 1.);
    vCol = uPal[int(f < .5 ? colIndex(ka) : colIndex(kb))];
    float tw = .5 + .5 * sin(uTime * aDot.w + aDot.y * 13.7);
    vA = (halo > .5 ? .34 : .34 + .48 * tw) * uAlpha * (halo > .5 ? 1. : mix(uStateA[ka], uStateA[kb], f));
    if (halo < .5) vA *= sinkA > .5 ? 0. : sinkB > .5 ? 1. - smoothstep(.6, 1., f) : 1.;
  }
`,OU=`
  varying vec3 vCol; varying float vA;
  void main(){
    float d = length(gl_PointCoord - .5) * 2.;
    float a = vA * (1. - smoothstep(.6, 1., d));
    if (a < .01) discard;
    gl_FragColor = vec4(vCol * a, a);
  }
`,zU=e=>new Z(parseInt(e.slice(1,3),16)/255,parseInt(e.slice(3,5),16)/255,parseInt(e.slice(5,7),16)/255);function Ep(e,t){let n={...Mp,...t},{shapes:i,places:a,palette:r,blend:s,alpha:o,halo:l,parallax:c,ballSpin:h,pace:p,font:u}=n,d=n.wide??{x:.5,y:.5,sw:.2,sh:.3},m=n.narrow??{x:.5,y:.36,sw:.36,sh:.3},b=matchMedia("(prefers-reduced-motion: reduce)").matches,g=Math.min(Oa,i.length+1),f=!1,v=0,M=!1,_=!1,x=new Il({alpha:!0,antialias:!1,powerPreference:"high-performance"});x.setClearColor(0,0),e.appendChild(x.domElement);let T=new Gs,w=new qs,y=new Array(Oa).fill(0),A=new Array(Oa).fill(0),R={uMorph:{value:0},uTime:{value:0},uDpr:{value:1},uLast:{value:g-1},uKind:{value:y},uSlot:{value:A},uRes:{value:new Wt(1,1)},uMouse:{value:new Wt(-1e4,-1e4)},uPlace:{value:Array.from({length:Oa},()=>new Z)},uAlpha:{value:o},uScroll:{value:0},uParallax:{value:c},uSpin:{value:h},uStateA:{value:Array.from({length:Oa},(lt,q)=>q===0?1:a?.[q-1]?.alpha??1)},uRepelR:{value:70},uRepelA:{value:0},uPal:{value:r.map(zU)}},U=new Nn({vertexShader:PU,fragmentShader:OU,uniforms:R,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cd,blendSrc:cu,blendDst:s==="add"?cu:uu}),D=new wi,I=[],C=async()=>{let lt=innerWidth<=768?n.count[1]:n.count[0],q=new Float32Array(lt*2),Q=new Float32Array(lt*3),j=new Float32Array(lt),gt=new Float32Array(lt*4),rt=new Float32Array(lt*2),St=new Float32Array(lt),Ht=new Uint8Array(lt),Lt=.66,Xt=.34,$t=2*Math.sqrt(Lt*Xt),At=.85;for(let ct=0;ct<lt;ct++){let te=kn(ct,20);Ht[ct]=te<.45?0:te<.75?1:te<.9?2:3,gt.set([.75+kn(ct,21)*1.35,kn(ct,22)*Tp,26e-5+kn(ct,23)*16e-5,7e-4+kn(ct,24)*8e-4],ct*4),rt.set([kn(ct,8)*.25,kn(ct,30)<l?1:0],ct*2),q.set([kn(ct,1),kn(ct,2)],ct*2);let Re=kn(ct,40);if(Re<.3){let P=kn(ct,41)*Tp,me=At+(kn(ct,42)-.5)*.03;Q.set([(Lt*Math.cos(P)+Xt*Math.cos(3*P))*me,(Lt*Math.sin(P)-Xt*Math.sin(3*P))*me,$t*Math.sin(2*P)*me],ct*3),j[ct]=1}else if(Re<.62){let P=kn(ct,43)*Tp,me=At*(1+(kn(ct,44)-.5)*.04);Q.set([Math.cos(P)*me,Math.sin(P)*me,0],ct*3),j[ct]=2}else{let P=kn(ct,45)*2-1,me=kn(ct,46)*Tp,ue=Math.sqrt(1-P*P);Q.set([ue*Math.cos(me)*At,P*At,ue*Math.sin(me)*At],ct*3),j[ct]=0}}let Zt=[];I=[];for(let ct of i.slice(0,g-1)){if(ct==="ball"||ct==="blackhole"){I.push(ct);continue}let te=ct==="racket"?s_(lt):ct==="court"?Sp(lt):ct==="courtLines"?Sp(lt,!1):"word"in ct?await o_(lt,ct.word,ct.font??u):"image"in ct?await l_(lt,ct.image,{size:ct.size}):await ct.cloud(lt);Zt.push(te),I.push(te)}if(f)return;I.forEach((ct,te)=>{y[te+1]=ct==="ball"?1:ct==="blackhole"?3:2,A[te+1]=typeof ct=="string"?0:Zt.indexOf(ct)});for(let ct=0;ct<lt;ct++){let te=j[ct]===1?1:Ht[ct]===2?3:Ht[ct]===1?0:Ht[ct],Re=Ht[ct],P=4;for(let me of I)Re+=(me==="ball"?te:me==="blackhole"?Ht[ct]:me.role[ct])*P,P*=4;St[ct]=Re}D.setAttribute("position",new an(Q,3)),D.setAttribute("aBallType",new an(j,1)),D.setAttribute("aNoise",new an(q,2));for(let ct=0;ct<5;ct++)D.setAttribute("aT"+ct,new an(Zt[ct]?.pos??new Float32Array(lt*3),3));D.setAttribute("aCol",new an(St,1)),D.setAttribute("aDot",new an(gt,4)),D.setAttribute("aStag",new an(rt,2));let fe=new iu(D,U);fe.frustumCulled=!1,T.add(fe),_=!0,L(),v=requestAnimationFrame(Ut)},L=()=>{let lt=e.clientWidth,q=e.clientHeight;if(!lt||!q)return;let Q=Math.min(devicePixelRatio||1,2);x.setPixelRatio(Q),x.setSize(lt,q,!1),R.uDpr.value=Q,R.uRes.value.set(lt,q);for(let j=1;j<Oa;j++){let gt=a?.[j-1],rt=lt>900?gt?.wide??d:gt?.narrow??m;R.uPlace.value[j].set(lt*rt.x,rt.py??q*rt.y,Math.min(lt*rt.sw,q*rt.sh))}R.uRepelR.value=Math.max(56,Math.min(innerWidth,innerHeight)*.11)},k=new ResizeObserver(L);k.observe(e);let B=0,V=0,z=0,O=-1e4,Y=-1e4,ot=0,it=lt=>{let q=e.getBoundingClientRect(),Q=lt.clientX-q.left,j=lt.clientY-q.top,gt=Q>=0&&j>=0&&Q<=q.width&&j<=q.height;O=gt?Q:-1e4,Y=gt?j:-1e4};addEventListener("pointermove",it,{passive:!0}),addEventListener("pointerdown",it,{passive:!0});let Ot=new IntersectionObserver(([lt])=>M=lt.isIntersecting);Ot.observe(e);function Ut(lt){v=requestAnimationFrame(Ut);let q=z?Math.min(lt-z,1e3):16.7;if(z=lt,!M||n.paused?.())return;V+=(t.stage()-V)*Math.min(1,q*(b?1:p)),B=Math.min(g-1,V);let Q=R.uMouse.value,j=O>-1e3;j&&(ot<.01?Q.set(O,Y):Q.lerp(new Wt(O,Y),Math.min(1,q*.012))),ot+=((j?1:0)-ot)*Math.min(1,q*.004),R.uRepelA.value=b?0:42*ot,R.uMorph.value=B,R.uScroll.value=scrollY,R.uTime.value=b?0:lt,x.render(T,w),t.onFrame?.(B)}return C(),{destroy(){f=!0,cancelAnimationFrame(v),Ot.disconnect(),k.disconnect(),removeEventListener("pointermove",it),removeEventListener("pointerdown",it),D.dispose(),U.dispose(),x.dispose(),x.domElement.remove()},progress:()=>B,rects(){if(!_)return[];let lt=e.getBoundingClientRect();return I.map((q,Q)=>{let j=R.uPlace.value[Q+1];if(q==="blackhole")return null;if(q==="ball"){let Lt=.85*j.z*1.2537313432835822;return{left:lt.left+j.x-Lt,top:lt.top+j.y-Lt,right:lt.left+j.x+Lt,bottom:lt.top+j.y+Lt}}let gt=1/0,rt=1/0,St=-1/0,Ht=-1/0;for(let Lt=0;Lt<q.pos.length;Lt+=12){let Xt=4.2/(4.2-q.pos[Lt+2]),$t=j.x+q.pos[Lt]*j.z*Xt,At=j.y-q.pos[Lt+1]*j.z*Xt;gt=Math.min(gt,$t),St=Math.max(St,$t),rt=Math.min(rt,At),Ht=Math.max(Ht,At)}return{left:lt.left+gt,top:lt.top+rt,right:lt.left+St,bottom:lt.top+Ht}})}}}var W2=Pt(Qt());function X2({className:e,...t}){let n=(0,Eu.useRef)(null),i=(0,Eu.useRef)(t);return i.current=t,(0,Eu.useEffect)(()=>{let a=Ep(n.current,{...i.current,stage:()=>i.current.stage(),onFrame:r=>i.current.onFrame?.(r)});return()=>a.destroy()},[]),(0,W2.jsx)("div",{ref:n,className:e,"aria-hidden":!0})}function Dn(e,t,n,i,a){let r=n[0]-t[0],s=n[1]-t[1],o=Math.hypot(r,s)||1e-6,l=Math.atan2(s,r);e.beginPath(),e.arc(t[0],t[1],i,l+Math.PI/2,l-Math.PI/2),e.arc(n[0],n[1],a,l-Math.PI/2,l+Math.PI/2),e.closePath(),e.fill()}function q2(e,t,n){let{x:i,y:a,s:r,f:s,kit:o}=n,l=C=>[i+s*C[0]*r,a-C[1]*r],c=C=>C*r;e.save(),e.lineJoin=e.lineCap="round",e.fillStyle="rgba(20, 30, 20, .16)",e.beginPath(),e.ellipse(i+s*c(.05),a+1,c(.42),c(.06),0,0,Math.PI*2),e.fill();let h=l(t.pelvis),p=l(t.S),u=l(t.rS),d=l(t.lS),m=l(t.fK),b=l(t.fA),g=l(t.bK),f=l(t.bA),v=(C,L,k)=>{let B=L*Math.PI/180,V=[C[0]+s*Math.cos(B)*c(.2),C[1]-Math.sin(B)*c(.2)+c(.035)],z=[C[0]-s*c(.04),C[1]+c(.04)];e.fillStyle=k,Dn(e,z,V,c(.045),c(.04)),e.fillStyle=o.accent,e.fillRect(Math.min(z[0],V[0]),Math.max(z[1],V[1])+c(.025),Math.abs(V[0]-z[0]),c(.016))},M=(C,L,k,B,V)=>{e.fillStyle=k,Dn(e,h,C,c(.07),c(.05)),Dn(e,C,L,c(.052),c(.032)),e.fillStyle="#f7f4ec";let z=[L[0]+(C[0]-L[0])*.18,L[1]+(C[1]-L[1])*.18];Dn(e,z,L,c(.036),c(.033)),e.fillStyle=B;let O=[h[0]+(C[0]-h[0])*.5,h[1]+(C[1]-h[1])*.5];Dn(e,h,O,c(.095),c(.078))},_=(C,L,k,B,V,z)=>{e.fillStyle=B,Dn(e,C,L,c(.048),c(.038)),Dn(e,L,k,c(.04),c(.028)),e.fillStyle=V;let O=[C[0]+(L[0]-C[0])*.45,C[1]+(L[1]-C[1])*.45];if(Dn(e,C,O,c(.062),c(.054)),z){e.fillStyle=o.accent;let Y=[k[0]+(L[0]-k[0])*.18,k[1]+(L[1]-k[1])*.18];Dn(e,Y,[k[0]+(L[0]-k[0])*.05,k[1]+(L[1]-k[1])*.05],c(.032),c(.03))}};M(g,f,o.skinShade,o.bottomShade),v(f,t.bf,"#e7e1d4"),_(d,l(t.lE),l(t.lH),o.skinShade,o.shade,!1),e.fillStyle=o.skinShade,e.beginPath(),e.arc(l(t.lH)[0],l(t.lH)[1],c(.035),0,Math.PI*2),e.fill();let x=[p[0]-h[0],p[1]-h[1]],T=Math.hypot(x[0],x[1]),w=[-x[1]/T,x[0]/T],y=(C,L)=>[h[0]+x[0]*C+w[0]*L,h[1]+x[1]*C+w[1]*L],A=Math.cos(t.twist*Math.PI/180),R=c(.13)*(.9+.1*Math.abs(A));e.fillStyle=o.shirt,e.beginPath();let U=[y(-.02,c(.1)),y(.45,c(.105)),y(.82,R),y(1.02,c(.09)),y(1.02,-c(.09)),y(.82,-R*.95),y(.45,-c(.1)),y(-.02,-c(.1))];e.moveTo(...U[0]);for(let C=1;C<U.length;C++){let L=U[C-1],k=U[C];e.quadraticCurveTo(L[0],L[1],(L[0]+k[0])/2,(L[1]+k[1])/2)}if(e.closePath(),e.fill(),e.strokeStyle=o.shade,e.lineWidth=c(.012),e.beginPath(),e.moveTo(...y(.15,c(.02)*s)),e.lineTo(...y(.9,c(.03)*s)),e.stroke(),e.fillStyle=o.accent,Dn(e,y(1,-c(.05)),y(1,c(.05)),c(.014),c(.014)),e.fillStyle=o.bottom,o.female){e.beginPath();let C=y(.12,c(.11)),L=y(.12,-c(.11)),k=[h[0]+w[0]*c(.19)-x[0]*.38,h[1]+w[1]*c(.19)-x[1]*.38],B=[h[0]-w[0]*c(.19)-x[0]*.38,h[1]-w[1]*c(.19)-x[1]*.38];e.moveTo(...C),e.lineTo(...k),e.lineTo(...B),e.lineTo(...L),e.closePath(),e.fill()}else Dn(e,y(.1,0),y(-.08,0),c(.108),c(.1));M(m,b,o.skin,o.bottom),v(b,t.ff,"#fbfaf6");let D=l(t.head),I=l(t.neck);if(e.fillStyle=o.skin,Dn(e,I,[I[0]+(D[0]-I[0])*.5,I[1]+(D[1]-I[1])*.5],c(.045),c(.045)),e.beginPath(),e.arc(D[0],D[1],c(.112),0,Math.PI*2),e.fill(),e.fillStyle=o.hair,e.beginPath(),e.arc(D[0]-s*c(.02),D[1]-c(.015),c(.112),s>0?Math.PI*.55:-Math.PI*.45,s>0?Math.PI*1.95:Math.PI*.95),e.fill(),o.female){let C=Math.sin(n.time*6)*.04+t.twist/90*.08,L=[D[0]-s*c(.1),D[1]-c(.02)],k=[L[0]-s*c(.16+C),L[1]+c(.16)];Dn(e,L,k,c(.045),c(.02))}e.fillStyle=o.skinShade,e.beginPath(),e.arc(D[0]+s*c(.005),D[1]+c(.01),c(.025),0,Math.PI*2),e.fill(),e.fillStyle=o.accent,o.head==="cap"?(e.beginPath(),e.arc(D[0],D[1]-c(.02),c(.118),Math.PI*1.02,Math.PI*1.98),e.fill(),Dn(e,[D[0]+s*c(.02),D[1]-c(.04)],[D[0]+s*c(.2),D[1]-c(.03)],c(.02),c(.016))):o.head==="visor"?(Dn(e,[D[0]-s*c(.1),D[1]-c(.06)],[D[0]+s*c(.08),D[1]-c(.07)],c(.022),c(.022)),Dn(e,[D[0]+s*c(.06),D[1]-c(.07)],[D[0]+s*c(.2),D[1]-c(.055)],c(.016),c(.012))):Dn(e,[D[0]-s*c(.11),D[1]-c(.035)],[D[0]+s*c(.1),D[1]-c(.06)],c(.022),c(.022)),FU(e,t.racket,l,r,s,o),_(u,l(t.rE),l(t.rH),o.skin,o.shirt,!0),e.fillStyle=o.skin,e.beginPath(),e.arc(l(t.rH)[0],l(t.rH)[1],c(.038),0,Math.PI*2),e.fill(),e.restore()}function FU(e,t,n,i,a,r){let s=m=>m*i,o=n(t.butt),l=n(t.throat),c=n(t.center),h=Math.atan2(c[1]-l[1],c[0]-l[0]),p=s(.165),u=s(.128)*Math.max(.14,Math.abs(Math.cos(t.roll*Math.PI/180)));e.lineCap="round",e.strokeStyle="#232825",e.lineWidth=s(.032),e.beginPath(),e.moveTo(...o),e.lineTo(...l),e.stroke(),e.strokeStyle=r.accent==="#f7f4ec"?"#e6e28c":r.accent,e.lineWidth=s(.026),e.beginPath(),e.moveTo(...o),e.lineTo(o[0]+(l[0]-o[0])*.55,o[1]+(l[1]-o[1])*.55),e.stroke(),e.save(),e.translate(c[0],c[1]),e.rotate(h),e.strokeStyle="#232825",e.lineWidth=s(.015);let d=-Math.hypot(c[0]-l[0],c[1]-l[1]);e.beginPath(),e.moveTo(d,0),e.quadraticCurveTo(-p*.95,0,-p*.82,u*.62),e.moveTo(d,0),e.quadraticCurveTo(-p*.95,0,-p*.82,-u*.62),e.stroke(),e.save(),e.beginPath(),e.ellipse(0,0,p*.93,u*.9,0,0,Math.PI*2),e.clip(),e.fillStyle="rgba(240, 236, 220, .14)",e.fill(),e.strokeStyle="rgba(245, 240, 225, .75)",e.lineWidth=Math.max(.5,s(.0035)),e.beginPath();for(let m=-6;m<=6;m++){let b=m/6.5*u;e.moveTo(-p,b),e.lineTo(p,b)}for(let m=-8;m<=8;m++){let b=m/8.5*p;e.moveTo(b,-u),e.lineTo(b,u)}e.stroke(),e.restore(),e.strokeStyle="#1c201e",e.lineWidth=s(.02),e.beginPath(),e.ellipse(0,0,p,u,0,0,Math.PI*2),e.stroke(),e.strokeStyle=r.accent==="#f7f4ec"?"#e6e28c":r.accent,e.lineWidth=s(.009),e.beginPath(),e.ellipse(0,0,p,u,0,-.9,.9),e.stroke(),e.restore()}var sr={ready:{drop:.1,lean:14,twist:20,head:0,rs:30,re:60,rw:30,rr:35,ls:35,le:50,fh:22,fk:38,bh:-14,bk:28,ff:0,bf:0,th:0},split:{drop:.02,lean:10,twist:20,head:0,rs:28,re:62,rw:30,rr:35,ls:32,le:50,fh:16,fk:14,bh:-12,bk:14,ff:6,bf:-6,th:0},keepup:{drop:.05,lean:8,twist:25,head:12,rs:42,re:44,rw:4,rr:88,ls:20,le:40,fh:14,fk:20,bh:-12,bk:18,ff:0,bf:0,th:0},cushion:{drop:.12,lean:18,twist:15,head:5,rs:58,re:30,rw:2,rr:80,ls:10,le:45,fh:30,fk:40,bh:-20,bk:28,ff:0,bf:-10,th:0},fhBack:{drop:.13,lean:8,twist:-65,head:20,rs:-62,re:32,rw:-100,rr:55,ls:88,le:4,fh:30,fk:34,bh:-24,bk:38,ff:0,bf:0,th:0},fhLoop:{drop:.14,lean:10,twist:-45,head:18,rs:-40,re:20,rw:-10,rr:70,ls:70,le:10,fh:32,fk:32,bh:-28,bk:26,ff:0,bf:-8,th:0},fhHit:{drop:.1,lean:15,twist:10,head:8,rs:56,re:24,rw:10,rr:78,ls:12,le:50,fh:33,fk:24,bh:-28,bk:22,ff:0,bf:-28,th:0},fhFollow:{drop:.06,lean:18,twist:78,head:0,rs:172,re:70,rw:32,rr:40,ls:-32,le:82,fh:20,fk:14,bh:-10,bk:42,ff:0,bf:-50,th:0},svStance:{drop:.02,lean:4,twist:-30,head:0,rs:22,re:40,rw:20,rr:40,ls:26,le:30,fh:10,fk:6,bh:-16,bk:10,ff:0,bf:0,th:0},svToss:{drop:.08,lean:-6,twist:-50,head:25,rs:-40,re:10,rw:-40,rr:50,ls:150,le:0,fh:14,fk:26,bh:-10,bk:26,ff:0,bf:0,th:0},svTrophy:{drop:.16,lean:-18,twist:-62,head:30,rs:-95,re:-95,rw:168,rr:60,ls:176,le:0,fh:18,fk:50,bh:-6,bk:46,ff:0,bf:0,th:0},svHit:{drop:-.16,lean:8,twist:12,head:20,rs:174,re:0,rw:6,rr:82,ls:42,le:62,fh:6,fk:10,bh:-14,bk:26,ff:-20,bf:-30,th:0},svFollow:{drop:.12,lean:42,twist:72,head:0,rs:34,re:-30,rw:-40,rr:40,ls:-12,le:62,fh:30,fk:32,bh:-52,bk:72,ff:0,bf:-40,th:0},bhBack:{drop:.13,lean:4,twist:80,head:22,rs:-18,re:50,rw:-125,rr:55,ls:-10,le:40,fh:30,fk:36,bh:-24,bk:30,ff:0,bf:0,th:1},bhLoop:{drop:.14,lean:8,twist:60,head:18,rs:-5,re:30,rw:-45,rr:70,ls:0,le:30,fh:33,fk:32,bh:-27,bk:26,ff:0,bf:-8,th:1},bhHit:{drop:.1,lean:14,twist:15,head:6,rs:52,re:22,rw:14,rr:80,ls:50,le:22,fh:35,fk:24,bh:-28,bk:22,ff:0,bf:-28,th:1},bhFollow:{drop:.05,lean:14,twist:-45,head:0,rs:165,re:40,rw:45,rr:40,ls:150,le:40,fh:22,fk:14,bh:-12,bk:40,ff:0,bf:-45,th:1},catch:{drop:.04,lean:6,twist:35,head:10,rs:24,re:40,rw:60,rr:30,ls:150,le:20,fh:14,fk:12,bh:-14,bk:12,ff:0,bf:0,th:0}},kU=Object.keys(sr.ready),HU=(e,t,n)=>e+(t-e)*n;var Y2={inOut:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,out:e=>1-Math.pow(1-e,3),in:e=>e*e*e,smooth:e=>e*e*(3-2*e)};function VU(e,t,n){let i={};for(let a of kU)i[a]=HU(e[a],t[a],n);return i}function c_(e){return t=>{if(t<=e[0][0])return sr[e[0][1]];for(let n=0;n<e.length-1;n++){let[i,a]=e[n],[r,s,o]=e[n+1];if(t<=r)return VU(sr[a],sr[s],(Y2[o]||Y2.inOut)((t-i)/(r-i)))}return sr[e[e.length-1][1]]}}var GU={thigh:.46,shin:.45,upper:.3,fore:.27,torso:.52,neck:.07,headR:.112,shoulder:.17,hipH:.93},rr=e=>{let t=e*Math.PI/180;return[Math.sin(t),-Math.cos(t)]},Hn=(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n];function wp(e){let t=GU,n=[0,t.hipH-e.drop],i=[Math.sin(e.lean*Math.PI/180),Math.cos(e.lean*Math.PI/180)],a=Hn(n,i,t.torso),r=Hn(n,i,t.torso-.03),s=Math.sin(e.twist*Math.PI/180)*t.shoulder,o=[r[0]+s,r[1]],l=[r[0]-s,r[1]],c=Hn(a,[Math.sin((e.lean+e.head*.3)*Math.PI/180),Math.cos((e.lean+e.head*.3)*Math.PI/180)],t.neck+t.headR),h=Hn(o,rr(e.rs),t.upper),p=Hn(h,rr(e.rs+e.re),t.fore),u=Hn(l,rr(e.ls),t.upper),d=Hn(u,rr(e.ls+e.le),t.fore),m=Hn(n,rr(e.fh),t.thigh),b=Hn(m,rr(e.fh-e.fk),t.shin),g=Hn(n,rr(e.bh),t.thigh),f=Hn(g,rr(e.bh-e.bk),t.shin),v=e.rs+e.re+e.rw,M=rr(v),_=u,x=d;if(e.th>.01){let w=Hn(p,M,.075),y=w[0]-l[0],A=w[1]-l[1],R=Math.min(Math.max(Math.hypot(y,A),.08),t.upper+t.fore-.005),U=Math.atan2(A,y),D=Math.acos((t.upper*t.upper+R*R-t.fore*t.fore)/(2*t.upper*R)),I=[l[0]+Math.cos(U-D)*t.upper,l[1]+Math.sin(U-D)*t.upper],C=[l[0]+Math.cos(U+D)*t.upper,l[1]+Math.sin(U+D)*t.upper],L=I[1]<C[1]?I:C,k=[l[0]+y/Math.hypot(y,A)*R,l[1]+A/Math.hypot(y,A)*R],B=e.th;_=[u[0]+(L[0]-u[0])*B,u[1]+(L[1]-u[1])*B],x=[d[0]+(k[0]-d[0])*B,d[1]+(k[1]-d[1])*B]}let T={angle:v,roll:e.rr,butt:Hn(p,M,-.05),throat:Hn(p,M,.15),center:Hn(p,M,.15+.165),tip:Hn(p,M,.15+.33),dir:M};return{pelvis:n,neck:a,S:r,rS:o,lS:l,head:c,rE:h,rH:p,lE:_,lH:x,fK:m,fA:b,bK:g,bA:f,racket:T,twist:e.twist,ff:e.ff,bf:e.bf,lean:e.lean}}var Z2={forehand:{pose:c_([[0,"keepup"],[.32,"fhBack","inOut"],[.5,"fhLoop","in"],[.62,"fhHit","in"],[.95,"fhFollow","out"],[1.75,"ready","inOut"]]),contact:.62,contactPose:"fhHit"},backhand:{pose:c_([[0,"keepup"],[.34,"bhBack","inOut"],[.5,"bhLoop","in"],[.62,"bhHit","in"],[.95,"bhFollow","out"],[1.75,"ready","inOut"]]),contact:.62,contactPose:"bhHit"},serve:{pose:c_([[0,"keepup"],[.25,"svStance","inOut"],[.62,"svToss","inOut"],[.98,"svTrophy","inOut"],[1.16,"svHit","in"],[1.5,"svFollow","out"],[2.3,"ready","inOut"]]),contact:1.16,contactPose:"svHit",toss:{catchAt:.25,releaseAt:.66}}};function K2(e){let t=document.createElement("canvas");t.width=300,t.height=400;let n={shirt:"#f5f0e6",shade:"#d9d2c2",bottom:"#c96a3f",bottomShade:"#a9552f",accent:"#e6e28c",head:"cap",hair:"#e7b797",skin:"#e7b797",skinShade:"#d39b78",female:!1};return q2(t.getContext("2d"),wp(sr.svHit),{x:130,y:382,s:150,f:1,kit:n,time:0}),Tu(t,e,{size:.0058*300,depth:.12,seed:3})}var Ap=Pt(Qt());function Ze({n:e,name:t,dark:n=!1}){return(0,Ap.jsxs)("span",{className:`lab-tag${n?" lab-tag--dark":""}`,children:[(0,Ap.jsx)("b",{children:e})," ",t]})}var xn=Pt(Qt()),J2=[{kicker:"1996 \xF3ta",title:"Itt pattog a labda.",text:"Az \xFAjszegedi Gell\xE9rt 1996-ban nyitott. Az\xF3ta magyar bajnoks\xE1got, Davis Kup\xE1t \xE9s Fed Kup\xE1t is l\xE1tott."},{kicker:"\xDCt\u0151k\xF6lcs\xF6nz\xE9s",title:"\xDCt\u0151t mi adunk.",text:"\xDCt\u0151 a recepci\xF3n k\xF6lcs\xF6n\xF6zhet\u0151, 600 Ft / db. Az els\u0151 \xF3r\xE1hoz nem kell saj\xE1t felszerel\xE9s."},{kicker:"Tenisziskola",title:"5 \xE9ves kort\xF3l.",text:"Tenisziskola 5\u201317 \xE9veseknek, \xE9s feln\u0151tteknek is."},{kicker:"P\xE1ly\xE1k",title:"12 salakp\xE1lya.",text:"Szabadt\xE9ri salakp\xE1ly\xE1k a ny\xE1ri szezonban, ebb\u0151l 5 vil\xE1g\xEDt\xE1ssal, este 10 \xF3r\xE1ig."},{kicker:"Szeged, Derkovits fasor 113.",title:"Gell\xE9rt.",text:"P\xE1lyafoglal\xE1s telefonon, a recepci\xF3n: +36 70 686 5124."}],h_=e=>e<0?0:e>1?1:e,XU=(e,t,n)=>{let i=h_((n-e)/(t-e));return i*i*(3-2*i)},u_=["ball","racket",{cloud:K2},"court",{word:"Gell\xE9rt",font:'italic 400 230px "Newsreader Variable", Georgia, serif'}];function j2(){let e=(0,wu.useRef)(null),t=(0,wu.useRef)([]),n=(0,wu.useRef)(null),i=(0,wu.useRef)(null);return(0,xn.jsx)("section",{ref:e,className:"lab-flow","aria-label":"Bevezet\u0151",children:(0,xn.jsxs)("div",{className:"lab-flow__stage",children:[(0,xn.jsx)(X2,{shapes:u_,stage:()=>{let s=e.current;if(!s)return 0;let o=s.getBoundingClientRect(),l=h_(-o.top/(o.height-innerHeight))*u_.length,c=Math.floor(l);return Math.min(u_.length,c+XU(.3,1,l-c))},onFrame:s=>{let o=Math.round(s);if(t.current.forEach((l,c)=>{if(!l)return;let h=c+1===o;l.style.opacity=h?"1":"0",l.style.transform=`translateY(${h?0:c+1<o?-16:16}px)`}),n.current){let l=h_(1-s*1.6);n.current.style.opacity=String(l),n.current.style.transform=`translateY(${(1-l)*-20}px)`}i.current?.querySelectorAll("span").forEach((l,c)=>l.classList.toggle("on",c+1===o))},className:"lab-flow__canvas",wide:{x:.66,y:.52,sw:.2,sh:.3},narrow:{x:.5,y:.36,sw:.36,sh:.3},alpha:1,halo:.07,parallax:0,ballSpin:18e-5,paused:()=>document.documentElement.classList.contains("lab-loading")}),(0,xn.jsxs)("div",{className:"container lab-flow__copy",children:[(0,xn.jsxs)("div",{ref:n,className:"lab-flow__intro",children:[(0,xn.jsx)("p",{className:"eyebrow eyebrow--light",children:"Labor \xB7 tizenk\xE9t \xF6tlet \xE9lesben"}),(0,xn.jsxs)("h1",{className:"h1",children:["A p\xE1lya, ",(0,xn.jsx)("em",{children:"ahogy m\xE9g nem l\xE1ttad."})]}),(0,xn.jsx)("p",{className:"lead",children:"G\xF6rgess lassan. Minden, ami ezen az oldalon mozog, a Gell\xE9rt val\xF3di adataib\xF3l \xE9s fot\xF3ib\xF3l \xE9p\xFCl."})]}),J2.map((s,o)=>(0,xn.jsxs)("div",{ref:l=>{t.current[o]=l},className:"lab-flow__cap",style:{opacity:0},children:[(0,xn.jsx)("p",{className:"eyebrow eyebrow--light",children:s.kicker}),(0,xn.jsx)("h2",{className:"h1",children:s.title}),(0,xn.jsx)("p",{className:"lead",children:s.text})]},o))]}),(0,xn.jsx)("div",{ref:i,className:"lab-flow__dots","aria-hidden":!0,children:J2.map((s,o)=>(0,xn.jsx)("span",{},o))}),(0,xn.jsx)(Ze,{n:"86",name:"Dot field \xB7 after thedent.ai",dark:!0})]})})}var ss=Pt(dn());var fn=Pt(Qt()),WU=`
  uniform sampler2D uImg, uDepth;
  uniform vec2 uOff, uRes, uImgRes;
  uniform float uFocus, uBlur, uTime;
  varying vec2 vUv;

  vec2 cover(vec2 uv){
    float ra = uRes.x / uRes.y, ri = uImgRes.x / uImgRes.y;
    vec2 s = ra > ri ? vec2(1., ri / ra) : vec2(ra / ri, 1.);
    // on portrait screens keep the woman in front in frame (she stands left of centre)
    float cx = mix(.5, .4, clamp((ri / ra - 1.) * .5, 0., 1.));
    return (uv - .5) * s * .93 + vec2(cx, .5);
  }
  void main(){
    vec2 uv = cover(vUv);
    // parallax: near pixels move more than far ones; three refinement steps
    vec2 p = uv;
    for (int i = 0; i < 3; i++) {
      float d = texture2D(uDepth, p).r;
      p = uv - uOff * (d - .35) * .045;
    }
    float d0 = texture2D(uDepth, p).r;
    float coc = clamp(abs(d0 - uFocus) * uBlur, 0., 1.);
    vec3 acc = vec3(0.); float wsum = 0.;
    const float GA = 2.39996;
    for (int i = 0; i < 24; i++) {
      float fi = float(i);
      float r = sqrt(fi / 24.) * coc * .011;
      vec2 o = vec2(cos(fi * GA), sin(fi * GA)) * r * vec2(uRes.y / uRes.x, 1.);
      vec3 c = texture2D(uImg, p + o).rgb;
      float w = 1. + dot(c, vec3(.3)) * coc * 2.;
      acc += c * w; wsum += w;
    }
    vec3 col = acc / wsum;
    // warm grade, vignette and a whisper of grain
    float v = smoothstep(1.1, .35, length((vUv - .5) * vec2(1.2, 1.)));
    col *= mix(.72, 1., v);
    col = mix(col, col * vec3(1.04, 1., .94), .5);
    float g = fract(sin(dot(vUv * uRes + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    col += (g - .5) * .025;
    gl_FragColor = vec4(col, 1.);
  }
`;function Q2(){let e=(0,ss.useRef)(null),t=(0,ss.useRef)(null),n=(0,ss.useRef)(null),i=(0,ss.useRef)(null),a=(0,ss.useRef)(null);return(0,ss.useEffect)(()=>{let r=t.current,s=e.current,o=matchMedia("(prefers-reduced-motion: reduce)").matches,l=new Il({antialias:!1});l.setPixelRatio(Math.min(devicePixelRatio,1.75)),r.appendChild(l.domElement);let c=new Gs,h=new Ys(-1,1,1,-1,0,1),p=U=>new ou().load(U,D=>{D.colorSpace=ra}),u=p("img/hero-serve.jpg");u.minFilter=cn;let d=p("assets/hero-serve-depth.webp"),m={uImg:{value:u},uDepth:{value:d},uOff:{value:new Wt},uRes:{value:new Wt(1,1)},uImgRes:{value:new Wt(1920,1064)},uFocus:{value:.56},uBlur:{value:2.2},uTime:{value:0}},b=new Nn({uniforms:m,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:WU});c.add(new ui(new Ws(2,2),b)),l.outputColorSpace=Vs;let g=()=>{let U=r.clientWidth,D=r.clientHeight;l.setSize(U,D,!1),m.uRes.value.set(U,D)};g(),addEventListener("resize",g);let f=new Wt,v=new Wt,M=!1,_=U=>{let D=r.getBoundingClientRect();v.set((U.clientX-D.left)/D.width*2-1,(U.clientY-D.top)/D.height*2-1),M=!0},x=()=>M=!1;s.addEventListener("pointermove",_),s.addEventListener("pointerleave",x);let T=!1,w=new IntersectionObserver(([U])=>T=U.isIntersecting);w.observe(s);let y=0,A=performance.now(),R=U=>{if(y=requestAnimationFrame(R),!T)return;let D=(U-A)/1e3;M||v.set(Math.sin(D*.35)*.55,Math.sin(D*.23)*.25),f.lerp(v,o?1:.06),m.uOff.value.copy(o?new Wt:f),m.uTime.value=D;let I=s.getBoundingClientRect(),C=Math.min(1,Math.max(0,-I.top/(I.height-innerHeight))),L=Math.min(1,Math.max(0,(C-.3)/.4)),k=L*L*(3-2*L);m.uFocus.value=.56-k*.5,n.current&&(n.current.style.opacity=String(1-k)),i.current&&(i.current.style.opacity=String(k)),a.current&&(a.current.style.setProperty("--k",String(k)),a.current.querySelector("b").textContent=(1.2+k*4.6).toFixed(1).replace(".",",")+" m"),l.render(c,h)};return y=requestAnimationFrame(R),()=>{cancelAnimationFrame(y),w.disconnect(),removeEventListener("resize",g),s.removeEventListener("pointermove",_),s.removeEventListener("pointerleave",x),b.dispose(),u.dispose(),d.dispose(),l.dispose(),l.domElement.remove()}},[]),(0,fn.jsx)("section",{ref:e,className:"lab-photo","aria-label":"\xC9l\u0151 fot\xF3",children:(0,fn.jsxs)("div",{className:"lab-photo__stage",children:[(0,fn.jsx)("div",{ref:t,className:"lab-photo__canvas",role:"img","aria-label":"K\xE9t j\xE1t\xE9kos a salakp\xE1ly\xE1n, az el\u0151t\xE9rben egy l\xE1ny feldobja a labd\xE1t"}),(0,fn.jsxs)("div",{className:"container lab-photo__copy",children:[(0,fn.jsxs)("div",{ref:n,className:"lab-photo__cap",children:[(0,fn.jsx)("p",{className:"eyebrow eyebrow--light",children:"Az els\u0151 labda"}),(0,fn.jsxs)("h2",{className:"h1",children:["Minden \xF3ra egy ",(0,fn.jsx)("em",{children:"feldob\xE1ssal"})," kezd\u0151dik."]})]}),(0,fn.jsxs)("div",{ref:i,className:"lab-photo__cap",style:{opacity:0},children:[(0,fn.jsx)("p",{className:"eyebrow eyebrow--light",children:"A t\xFAloldalon"}),(0,fn.jsxs)("h2",{className:"h1",children:["\u2026\xE9s a h\xE1l\xF3 m\xF6g\xF6tt ",(0,fn.jsx)("em",{children:"mindig v\xE1r valaki."})]})]})]}),(0,fn.jsxs)("div",{ref:a,className:"lab-photo__focus","aria-hidden":!0,children:[(0,fn.jsx)("span",{children:"F\xF3kusz"}),(0,fn.jsx)("i",{}),(0,fn.jsx)("b",{children:"1,2 m"})]}),(0,fn.jsx)(Ze,{n:"21",name:"Living photograph",dark:!0})]})})}var Cp=Pt(dn()),Rp=Pt(Qt());function $2({tone:e="paper",bg:t,children:n}){let i=(0,Cp.useRef)(null);return(0,Cp.useEffect)(()=>{let a=i.current,r=a.getContext("2d"),s=matchMedia("(prefers-reduced-motion: reduce)").matches,o=72,l=new Float32Array(o),c=new Float32Array(o),h=0,p=0,u=1,d=!1,m=scrollY,b=0,g=-1,f=-1,v=()=>{u=Math.min(devicePixelRatio||1,2),h=a.clientWidth,p=a.clientHeight,a.width=h*u,a.height=p*u};v(),addEventListener("resize",v);let M=new IntersectionObserver(([R])=>d=R.isIntersecting);M.observe(a);let _=R=>{let U=a.getBoundingClientRect();g=R.clientX-U.left,f=R.clientY-U.top},x=()=>g=f=-1;a.addEventListener("pointermove",_),a.addEventListener("pointerleave",x);let T=e==="dark",w=T?"rgba(245,240,230,.34)":"rgba(21,36,26,.42)",y=T?"#e6e28c":"#21492b",A=()=>{b=requestAnimationFrame(A);let R=scrollY-m;if(m=scrollY,!d)return;let U=s?0:Math.max(-14,Math.min(14,R*.06));for(let O=1;O<o-1;O++){let Y=Math.sin(O/(o-1)*Math.PI),ot=(l[O-1]+l[O+1]-2*l[O])*.5-l[O]*.012+U*Y*.08;if(g>=0){let it=O/(o-1)*h,Ot=(it-g)/60;ot+=Math.exp(-Ot*Ot)*(f<p*.5?.9:.4)}c[O]=(c[O]+ot)*.92}for(let O=1;O<o-1;O++)l[O]+=c[O];r.setTransform(u,0,0,u,0,0),r.clearRect(0,0,h,p);let D=22,I=h-22,C=26,L=p-16,k=L-C,B=O=>{let Y=(O-D)/(I-D),ot=Y*(o-1),it=Math.max(0,Math.min(o-2,Math.floor(ot))),Ot=ot-it;return 6*Math.sin(Y*Math.PI)+l[it]+(l[it+1]-l[it])*Ot};r.fillStyle=T?"rgba(0,0,0,.22)":"rgba(21,36,26,.07)",r.fillRect(D,L+6,I-D,4),r.strokeStyle=w,r.lineWidth=.8,r.beginPath();let V=9;for(let O=D;O<=I;O+=V)for(let Y=0;Y<=1;Y+=.05){let ot=C+B(O)*(1-Y)+Y*k+Math.sin(O*.02)*0;Y===0?r.moveTo(O,ot):r.lineTo(O+B(O)*.02*Y,ot)}for(let O=V/k;O<1;O+=V/k)for(let Y=D;Y<=I;Y+=12){let ot=C+B(Y)*(1-O)+O*k;Y===D?r.moveTo(Y,ot):r.lineTo(Y,ot)}r.stroke(),r.strokeStyle=w,r.lineWidth=1.6,r.beginPath(),r.moveTo(D,L),r.lineTo(I,L),r.stroke();let z=(D+I)/2;r.fillStyle=T?"#f5f0e6":"#fbf8f2",r.beginPath(),r.moveTo(z-5,C+B(z)),r.lineTo(z+5,C+B(z)),r.lineTo(z+5,L),r.lineTo(z-5,L),r.fill(),r.strokeStyle="rgba(21,36,26,.18)",r.lineWidth=1,r.stroke(),r.lineCap="butt",r.strokeStyle="rgba(21,36,26,.16)",r.lineWidth=9,r.beginPath();for(let O=D;O<=I;O+=6)O===D?r.moveTo(O,C+B(O)+2):r.lineTo(O,C+B(O)+2);r.stroke(),r.strokeStyle="#fbf8f2",r.lineWidth=8,r.beginPath();for(let O=D;O<=I;O+=6)O===D?r.moveTo(O,C+B(O)):r.lineTo(O,C+B(O));r.stroke(),r.fillStyle=y;for(let O of[D-6,I+1])r.beginPath(),r.roundRect(O,C-10,5,L-C+18,2),r.fill(),r.beginPath(),r.arc(O+2.5,C-10,4,0,Math.PI*2),r.fill()};return b=requestAnimationFrame(A),()=>{cancelAnimationFrame(b),M.disconnect(),removeEventListener("resize",v),a.removeEventListener("pointermove",_),a.removeEventListener("pointerleave",x)}},[e]),(0,Rp.jsxs)("div",{className:`net-divider net-divider--${e}`,style:t?{background:t}:void 0,children:[(0,Rp.jsx)("canvas",{ref:i,"aria-hidden":!0}),n]})}var f_=Pt(Qt());function d_({tone:e="paper",tag:t=!0}){return(0,f_.jsx)($2,{tone:e,children:t&&(0,f_.jsx)(Ze,{n:"12",name:"Net divider",dark:e==="dark"})})}var Au=Pt(dn());var bn={name:"Gell\xE9rt Szabadid\u0151k\xF6zpont",short:"Gell\xE9rt Tenisz",url:"https://gellert.szeged.hu",phone:"+36 70 686 5124",phoneHref:"tel:+36706865124",email:"szabadidokozpont@gellertesfiai.hu",address:{street:"Derkovits fasor 113.",zip:"6726",city:"Szeged",district:"\xDAjszeged"},mapsUrl:"https://maps.app.goo.gl/2Promqf6wFUueNJ78",mapsEmbed:"https://www.google.com/maps?q=Gell%C3%A9rt+Szabadid%C5%91k%C3%B6zpont,+Szeged,+Derkovits+fasor+113&output=embed",hours:{courts:{label:"P\xE1ly\xE1k",days:"H\xE9tf\u0151 \u2013 Vas\xE1rnap",time:"07:00 \u2013 22:00"},reception:{label:"Recepci\xF3",days:"H\xE9tf\u0151 \u2013 Vas\xE1rnap",time:"08:00 \u2013 20:00"}},social:{facebook:"https://www.facebook.com/gellertszabadidokozpont/",instagram:"https://www.instagram.com/gellert_szabadidokozpont/",instagramTennis:"https://www.instagram.com/gellerttenisz",youtube:"https://www.youtube.com/channel/UCcza_Cp5GwkgBM16M12W9XQ"},club:{name:"Gell\xE9rt Szabadid\u0151k\xF6zpont Sportegyes\xFClet",shortName:"Gell\xE9rt SE",url:"https://gellertse.hu/",headCoach:"Kiss Gy\xF6rgy",headCoachRole:"a tenisz szakoszt\xE1ly vezet\u0151je",headCoachPhone:"+36 70 457 9133",headCoachPhoneHref:"tel:+36704579133"},operator:{name:"Gell\xE9rt \xE9s Fiai Consulting Kft.",address:"6724 Szeged, Kossuth Lajos sgt. 109.",phone:"+36 62 556 700",email:"info@gellertesfiai.hu",taxId:"11093565-2-06"},legacy:{legal:"https://gellert.szeged.hu/jogi-nyilatkozat/",grants:"https://gellert.szeged.hu/palyazatok/",privacy:"https://gellert.szeged.hu/adatvedelmi-es-felhasznalasi-feltetelek/",virtualTour:"https://magicview.hu/virtualtour/gellert"}};var p_={label:"2025-\xF6s ny\xE1ri szezon",range:"2025. \xE1prilis 14. \u2013 okt\xF3ber 19.",source:"/docs/gellert-arjegyzek-2025-nyar.jpg"},tT={weekday:[{time:"07:00 \u2013 14:00",season:"2 000",ten:"24 000",single:"3 200"},{time:"14:00 \u2013 19:00",season:"2 900",ten:"35 000",single:"4 400"},{time:"19:00 \u2013 21:00",season:"3 400",ten:"40 000",single:"5 200"}],weekend:[{time:"07:00 \u2013 19:00",season:"2 200",ten:"24 000",single:"3 200"},{time:"19:00 \u2013 21:00",season:"2 500",ten:"30 000",single:"4 000"}],covered:[{time:"07:00 \u2013 21:00",single:"4 800"}]};var Oe=Pt(Qt());function eT(){let e=(0,Au.useRef)(null),t=(0,Au.useRef)(null);return(0,Au.useEffect)(()=>{let n=e.current,i=n.getContext("2d"),a=nl.racket,r=a.length,s=a.map(T=>{let w=new Image;return w.decoding="async",w.src=T,w}),o=matchMedia("(prefers-reduced-motion: reduce)").matches,l=0,c=o?0:.12,h=!1,p=0,u=scrollY,d=!1,m=0,b=-1,g=()=>{let T=Math.min(devicePixelRatio||1,2);n.width=n.clientWidth*T,n.height=n.clientHeight*T,b=-1};g(),addEventListener("resize",g);let f=new IntersectionObserver(([T])=>d=T.isIntersecting);f.observe(n);let v=T=>{h=!0,p=T.clientX,n.setPointerCapture(T.pointerId),n.classList.add("is-drag")},M=T=>{if(!h)return;let w=T.clientX-p;p=T.clientX,c=w*.6,l+=w*.6},_=()=>{h=!1,n.classList.remove("is-drag")};n.addEventListener("pointerdown",v),n.addEventListener("pointermove",M),n.addEventListener("pointerup",_),n.addEventListener("pointercancel",_);let x=()=>{m=requestAnimationFrame(x);let T=scrollY-u;if(u=scrollY,!d)return;h||(c+=((o?0:.18)-c)*.02,l+=c+(o?0:T*.12));let w=(Math.round(l/360*r)%r+r)%r;if(t.current&&t.current.style.setProperty("--a",`${(l%360+360)%360}deg`),w===b||!s[w].complete||!s[w].naturalWidth)return;b=w;let y=s[w],A=Math.min(n.width/y.naturalWidth,n.height/y.naturalHeight),R=y.naturalWidth*A,U=y.naturalHeight*A;i.clearRect(0,0,n.width,n.height),i.drawImage(y,(n.width-R)/2,(n.height-U)/2,R,U)};return m=requestAnimationFrame(x),()=>{cancelAnimationFrame(m),f.disconnect(),removeEventListener("resize",g)}},[]),(0,Oe.jsxs)("section",{className:"section lab-racket","aria-labelledby":"lab-racket-title",children:[(0,Oe.jsxs)("div",{className:"container lab-racket__grid",children:[(0,Oe.jsxs)("div",{className:"lab-racket__copy",children:[(0,Oe.jsx)("p",{className:"eyebrow",children:"Felszerel\xE9s"}),(0,Oe.jsxs)("h2",{id:"lab-racket-title",className:"h2",children:["Nem kell saj\xE1t \xFCt\u0151. ",(0,Oe.jsx)("em",{children:"Itt van egy."})]}),(0,Oe.jsx)("p",{className:"lead",children:"\xDCt\u0151 a recepci\xF3n k\xF6lcs\xF6n\xF6zhet\u0151, labda ugyanott v\xE1s\xE1rolhat\xF3. Az els\u0151 \xF3r\xE1hoz nem kell saj\xE1t felszerel\xE9s."}),(0,Oe.jsxs)("dl",{className:"lab-specs",children:[(0,Oe.jsxs)("div",{children:[(0,Oe.jsx)("dt",{children:"\xDCt\u0151k\xF6lcs\xF6nz\xE9s"}),(0,Oe.jsx)("dd",{children:"600 Ft / db"})]}),(0,Oe.jsxs)("div",{children:[(0,Oe.jsx)("dt",{children:"Labda"}),(0,Oe.jsx)("dd",{children:"a recepci\xF3n"})]}),(0,Oe.jsxs)("div",{children:[(0,Oe.jsx)("dt",{children:"Recepci\xF3"}),(0,Oe.jsx)("dd",{children:bn.hours.reception.time.replace(/ /g,"")})]})]})]}),(0,Oe.jsxs)("div",{className:"lab-racket__stage",children:[(0,Oe.jsx)("canvas",{ref:e,className:"lab-racket__canvas","aria-label":"Forgathat\xF3 tenisz\xFCt\u0151. H\xFAzd oldalra a forgat\xE1shoz.",role:"img"}),(0,Oe.jsx)("div",{className:"lab-racket__floor","aria-hidden":!0}),(0,Oe.jsxs)("div",{ref:t,className:"lab-racket__dial","aria-hidden":!0,children:[(0,Oe.jsx)("i",{}),(0,Oe.jsx)("span",{children:"H\xFAzd a forgat\xE1shoz"})]})]})]}),(0,Oe.jsx)(Ze,{n:"01",name:"Racket turntable"})]})}var os=Pt(dn());var nT=[{top:[.7577,.4807],dyn:[.7552,.509],base:[.7501,.5654],drain:[.7444,.6294],soil:[.7398,.6813]},{top:[.7577,.4802],dyn:[.7552,.5085],base:[.7501,.5652],drain:[.7444,.6293],soil:[.7398,.6813]},{top:[.7579,.4786],dyn:[.7553,.5074],base:[.7502,.5644],drain:[.7445,.6289],soil:[.7398,.6813]},{top:[.7581,.4759],dyn:[.7555,.5054],base:[.7503,.5632],drain:[.7445,.6283],soil:[.7398,.6813]},{top:[.7584,.4723],dyn:[.7557,.5028],base:[.7505,.5615],drain:[.7446,.6275],soil:[.7398,.6813]},{top:[.7588,.4678],dyn:[.756,.4995],base:[.7507,.5594],drain:[.7447,.6265],soil:[.7398,.6813]},{top:[.7593,.4625],dyn:[.7563,.4955],base:[.7509,.5569],drain:[.7448,.6253],soil:[.7398,.6813]},{top:[.7598,.4563],dyn:[.7568,.491],base:[.7511,.554],drain:[.7449,.6239],soil:[.7398,.6813]},{top:[.7605,.4494],dyn:[.7572,.4859],base:[.7514,.5507],drain:[.745,.6224],soil:[.7398,.6813]},{top:[.7611,.4417],dyn:[.7577,.4803],base:[.7517,.5472],drain:[.7452,.6207],soil:[.7398,.6813]},{top:[.7619,.4334],dyn:[.7582,.4743],base:[.7521,.5433],drain:[.7454,.6189],soil:[.7398,.6813]},{top:[.7627,.4245],dyn:[.7588,.4678],base:[.7525,.5392],drain:[.7455,.6169],soil:[.7398,.6813]},{top:[.7635,.415],dyn:[.7594,.4609],base:[.7528,.5348],drain:[.7457,.6148],soil:[.7398,.6813]},{top:[.7644,.4049],dyn:[.7601,.4536],base:[.7533,.5302],drain:[.7459,.6127],soil:[.7398,.6813]},{top:[.7654,.3945],dyn:[.7608,.446],base:[.7537,.5254],drain:[.7461,.6104],soil:[.7398,.6813]},{top:[.7663,.3836],dyn:[.7615,.4381],base:[.7541,.5204],drain:[.7463,.6081],soil:[.7398,.6813]},{top:[.7673,.3723],dyn:[.7622,.43],base:[.7546,.5153],drain:[.7465,.6057],soil:[.7398,.6813]},{top:[.7684,.3608],dyn:[.7629,.4216],base:[.7551,.5101],drain:[.7468,.6032],soil:[.7398,.6813]},{top:[.7694,.3489],dyn:[.7637,.4132],base:[.7555,.5048],drain:[.747,.6007],soil:[.7398,.6813]},{top:[.7705,.337],dyn:[.7645,.4045],base:[.756,.4994],drain:[.7472,.5982],soil:[.7398,.6813]},{top:[.7716,.3248],dyn:[.7652,.3959],base:[.7565,.494],drain:[.7474,.5957],soil:[.7398,.6813]},{top:[.7727,.3126],dyn:[.766,.3872],base:[.757,.4885],drain:[.7476,.5932],soil:[.7398,.6813]},{top:[.7737,.3005],dyn:[.7668,.3785],base:[.7575,.4831],drain:[.7479,.5907],soil:[.7398,.6813]},{top:[.7748,.2883],dyn:[.7676,.3698],base:[.7579,.4778],drain:[.7481,.5882],soil:[.7398,.6813]},{top:[.7759,.2764],dyn:[.7683,.3613],base:[.7584,.4725],drain:[.7483,.5858],soil:[.7398,.6813]},{top:[.7769,.2646],dyn:[.7691,.353],base:[.7589,.4674],drain:[.7485,.5834],soil:[.7398,.6813]},{top:[.778,.2531],dyn:[.7698,.3449],base:[.7593,.4624],drain:[.7487,.5811],soil:[.7398,.6813]},{top:[.779,.2419],dyn:[.7705,.337],base:[.7597,.4575],drain:[.7489,.5788],soil:[.7398,.6813]},{top:[.7799,.2312],dyn:[.7712,.3294],base:[.7602,.4529],drain:[.7491,.5767],soil:[.7398,.6813]},{top:[.7808,.221],dyn:[.7718,.3223],base:[.7605,.4485],drain:[.7493,.5747],soil:[.7398,.6813]},{top:[.7817,.2114],dyn:[.7724,.3155],base:[.7609,.4443],drain:[.7495,.5728],soil:[.7398,.6813]},{top:[.7825,.2024],dyn:[.773,.3092],base:[.7613,.4405],drain:[.7496,.5711],soil:[.7398,.6813]},{top:[.7832,.1942],dyn:[.7735,.3035],base:[.7616,.437],drain:[.7498,.5695],soil:[.7398,.6813]},{top:[.7839,.1869],dyn:[.7739,.2983],base:[.7618,.4339],drain:[.7499,.568],soil:[.7398,.6813]},{top:[.7844,.1804],dyn:[.7743,.2938],base:[.7621,.4311],drain:[.75,.5668],soil:[.7398,.6813]},{top:[.7849,.175],dyn:[.7747,.29],base:[.7623,.4288],drain:[.7501,.5657],soil:[.7398,.6813]},{top:[.7853,.1706],dyn:[.7749,.287],base:[.7625,.427],drain:[.7502,.5649],soil:[.7398,.6813]},{top:[.7856,.1674],dyn:[.7751,.2847],base:[.7626,.4256],drain:[.7502,.5643],soil:[.7398,.6813]},{top:[.7858,.1654],dyn:[.7753,.2833],base:[.7627,.4248],drain:[.7503,.5639],soil:[.7398,.6813]},{top:[.7858,.1647],dyn:[.7753,.2829],base:[.7627,.4245],drain:[.7503,.5638],soil:[.7398,.6813]}];var Un=Pt(Qt()),iT=[{key:"top",name:"Fed\u0151r\xE9teg",sub:"t\xE9gla\u0151rlem\xE9ny",text:"\xC9getett, finomra \u0151r\xF6lt t\xE9gla. Ett\u0151l v\xF6r\xF6s a p\xE1lya, \xE9s ezen lehet cs\xFAszni."},{key:"dyn",name:"Dinamikus r\xE9teg",sub:"salak \xE9s klinker",text:"Rugalmas, v\xEDz\xE1tereszt\u0151 kever\xE9k. Ett\u0151l puha a p\xE1lya j\xE1r\xE1sa."},{key:"base",name:"Tart\xF3r\xE9teg",sub:"z\xFAzottk\u0151",text:"Teherb\xEDr\xF3 alap, ami egyenletesen tartja a fels\u0151 r\xE9tegeket."},{key:"drain",name:"Sziv\xE1rg\xF3r\xE9teg",sub:"kavics",text:"Elvezeti a lefel\xE9 sziv\xE1rg\xF3 vizet."},{key:"soil",name:"Altalaj",sub:"t\xF6m\xF6r\xEDtett f\xF6ld",text:"Erre \xE9p\xFCl minden m\xE1s."}];function aT(){let e=(0,os.useRef)(null),t=(0,os.useRef)(null),n=(0,os.useRef)(null),i=(0,os.useRef)([]),a=(0,os.useRef)(null);return(0,os.useEffect)(()=>{let r=e.current,s=t.current,o=s.getContext("2d"),l=nl.clay.map(f=>{let v=new Image;return v.src=f,v}),c=nT,h=0,p=-1,u=!1,d=()=>{let f=Math.min(devicePixelRatio||1,2);s.width=s.clientWidth*f,s.height=s.clientHeight*f,p=-1};d(),addEventListener("resize",d);let m=new IntersectionObserver(([f])=>u=f.isIntersecting);m.observe(r);let b=0,g=()=>{if(h=requestAnimationFrame(g),!u)return;let f=r.getBoundingClientRect(),v=Math.min(1,Math.max(0,-f.top/(f.height-innerHeight))),M=Math.min(1,v/.75);b+=(M-b)*.12;let _=Math.min(l.length-1,Math.round(b*(l.length-1)));_!==p&&l[_].complete&&l[_].naturalWidth&&(p=_,o.clearRect(0,0,s.width,s.height),o.drawImage(l[_],0,0,s.width,s.height));let x=s.getBoundingClientRect(),T=a.current.getBoundingClientRect(),w=c[Math.min(c.length-1,Math.round(b*(c.length-1)))],y=[];iT.forEach((A,R)=>{let U=i.current[R];if(!U)return;let D=Math.min(1,Math.max(0,(b-.15-R*.12)/.2));U.style.opacity=String(D),U.style.setProperty("--full",b>.8?"1":"0");let[I,C]=w[A.key],L=x.left-T.left+I*x.width,k=x.top-T.top+C*x.height,B=U.getBoundingClientRect(),V=B.left-T.left-10,z=B.top-T.top+14;U.style.setProperty("--y",`${k-14}px`),D>.02&&y.push(`<path d="M${L+6},${k} C${(L+V)/2},${k} ${(L+V)/2},${z} ${V},${z}" opacity="${D}"/><circle cx="${L+6}" cy="${k}" r="3" opacity="${D}"/>`)}),n.current&&(n.current.innerHTML=y.join(""))};return h=requestAnimationFrame(g),()=>{cancelAnimationFrame(h),m.disconnect(),removeEventListener("resize",d)}},[]),(0,Un.jsx)("section",{ref:e,className:"lab-clay","aria-labelledby":"lab-clay-title",children:(0,Un.jsxs)("div",{ref:a,className:"lab-clay__stage",children:[(0,Un.jsxs)("div",{className:"container lab-clay__head",children:[(0,Un.jsx)("p",{className:"eyebrow",children:"A salak"}),(0,Un.jsxs)("h2",{id:"lab-clay-title",className:"h2",children:["Mi van a ",(0,Un.jsx)("em",{children:"l\xE1bad alatt?"})]}),(0,Un.jsx)("p",{className:"lab-clay__note",children:"Egy salakp\xE1lya tipikus r\xE9tegrendje. Illusztr\xE1ci\xF3, a r\xE9tegvastags\xE1gok nem m\xE9retar\xE1nyosak."})]}),(0,Un.jsx)("canvas",{ref:t,className:"lab-clay__canvas",role:"img","aria-label":"Salakp\xE1lya r\xE9tegei sz\xE9tnyitva: fed\u0151r\xE9teg, dinamikus r\xE9teg, tart\xF3r\xE9teg, sziv\xE1rg\xF3r\xE9teg, altalaj"}),(0,Un.jsx)("svg",{ref:n,className:"lab-clay__lines","aria-hidden":!0}),(0,Un.jsx)("div",{className:"lab-clay__labels",children:iT.map((r,s)=>(0,Un.jsxs)("div",{ref:o=>{i.current[s]=o},className:"lab-clay__label",style:{opacity:0},children:[(0,Un.jsx)("b",{children:r.name}),(0,Un.jsx)("span",{children:r.sub}),(0,Un.jsx)("p",{children:r.text})]},r.key))}),(0,Un.jsx)(Ze,{n:"04",name:"Clay specimen"})]})})}var Cu=Pt(dn());var ze=Pt(Qt());function rT(){let e=(0,Cu.useRef)(null),t=(0,Cu.useRef)(null);(0,Cu.useEffect)(()=>{let i=e.current,a=t.current,r=a.getContext("2d"),s=matchMedia("(prefers-reduced-motion: reduce)").matches,o=0,l=0,c=1,h=0,p=!1,u=null,d,m,b=()=>{let I=document.createElement("canvas");I.width=a.width,I.height=a.height;let C=I.getContext("2d");C.fillStyle="#b65a31",C.fillRect(0,0,I.width,I.height);let L=I.width*I.height/28;for(let k=0;k<L;k++){let B=Math.random()*I.width,V=Math.random()*I.height,z=Math.random();C.fillStyle=z<.5?`rgba(120,48,20,${.12+z*.2})`:`rgba(235,150,105,${(z-.5)*.35})`,C.fillRect(B,V,1+Math.random()*1.5*c,1+Math.random()*1.5*c)}for(let k=0;k<40;k++){let B=Math.random()*I.width,V=Math.random()*I.height,z=(80+Math.random()*200)*c,O=C.createRadialGradient(B,V,0,B,V,z),Y=Math.random()<.5;O.addColorStop(0,Y?"rgba(110,45,20,.12)":"rgba(220,140,95,.12)"),O.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=O,C.fillRect(B-z,V-z,z*2,z*2)}C.globalAlpha=.05,C.strokeStyle="#f3c19c";for(let k=0;k<I.height;k+=3*c)C.beginPath(),C.moveTo(0,k+Math.sin(k)*2),C.lineTo(I.width,k+Math.cos(k)*2),C.stroke();return C.globalAlpha=1,I},g=()=>{c=Math.min(devicePixelRatio||1,2),o=i.clientWidth,l=i.clientHeight,a.width=o*c,a.height=l*c,u=b(),d=document.createElement("canvas"),d.width=a.width,d.height=a.height,m=d.getContext("2d")};g();let f=new ResizeObserver(()=>{(Math.abs(i.clientWidth-o)>2||Math.abs(i.clientHeight-l)>2)&&g()});f.observe(i);let v=new IntersectionObserver(([I])=>p=I.isIntersecting);v.observe(i);let M=-1,_=-1,x=-1,T=-1,w=0,y=0,A=I=>{if(I.pointerType==="touch")return;let C=i.getBoundingClientRect();M=I.clientX-C.left,_=I.clientY-C.top,w=performance.now()};i.addEventListener("pointermove",A);let R=(I,C,L,k)=>{let B=L-I,V=k-C,z=Math.hypot(B,V);if(z<.5)return;y=Math.atan2(V,B);let O=-V/z,Y=B/z,ot=64;m.save(),m.scale(c,c),m.lineCap="round";for(let it=-ot;it<=ot;it+=3){let Ot=1-Math.abs(it)/ot,Ut=it/3%2===0;m.strokeStyle=Ut?`rgba(248,180,132,${.5*Ot+.08})`:`rgba(98,36,14,${.42*Ot+.06})`,m.lineWidth=1.3,m.beginPath(),m.moveTo(I+O*it,C+Y*it),m.lineTo(L+O*it,k+Y*it),m.stroke()}m.restore()},U=performance.now(),D=I=>{if(h=requestAnimationFrame(D),!p||!u)return;let C=I-w>2500;if(C&&!s){let L=(I-U)/1e3,k=o*.5+Math.sin(L*.45)*o*.42,B=l*.5+Math.sin(L*.9)*l*.32;x>=0&&R(x,T,k,B),x=k,T=B}else M>=0&&(x>=0&&R(x,T,M,_),x=M,T=_);if(m.globalCompositeOperation="destination-out",m.fillStyle="rgba(0,0,0,.012)",m.fillRect(0,0,d.width,d.height),m.globalCompositeOperation="source-over",r.drawImage(u,0,0),r.drawImage(d,0,0),x>=0&&(I-w<300||C)){r.save(),r.scale(c,c),r.translate(x,T),r.rotate(y+Math.PI/2),r.fillStyle="rgba(30,30,25,.22)",r.fillRect(-66,-14,132,22),r.strokeStyle="rgba(250,245,235,.5)",r.lineWidth=1;for(let L=-66;L<=66;L+=6)r.beginPath(),r.moveTo(L,-14),r.lineTo(L,8),r.stroke();r.fillStyle="rgba(21,36,26,.85)",r.fillRect(-68,-16,136,4),r.restore()}};return h=requestAnimationFrame(D),()=>{cancelAnimationFrame(h),f.disconnect(),v.disconnect(),i.removeEventListener("pointermove",A)}},[]);let n=tT.weekday;return(0,ze.jsxs)("section",{ref:e,className:"lab-brush","aria-labelledby":"lab-brush-title",children:[(0,ze.jsx)("canvas",{ref:t,className:"lab-brush__canvas","aria-hidden":!0}),(0,ze.jsxs)("div",{className:"container lab-brush__inner",children:[(0,ze.jsxs)("div",{className:"lab-brush__card",children:[(0,ze.jsxs)("p",{className:"eyebrow",children:["\xC1rak \xB7 ",p_.label]}),(0,ze.jsxs)("h2",{id:"lab-brush-title",className:"h2",children:["Egy \xF3ra salak, ",(0,ze.jsx)("em",{children:"h\xE9tk\xF6znap."})]}),(0,ze.jsxs)("table",{className:"lab-brush__table",children:[(0,ze.jsx)("thead",{children:(0,ze.jsxs)("tr",{children:[(0,ze.jsx)("th",{scope:"col",children:"Id\u0151s\xE1v"}),(0,ze.jsx)("th",{scope:"col",children:"Alkalom"}),(0,ze.jsx)("th",{scope:"col",children:"10-es b\xE9rlet"}),(0,ze.jsx)("th",{scope:"col",children:"Szezonb\xE9rlet*"})]})}),(0,ze.jsx)("tbody",{children:n.map(i=>(0,ze.jsxs)("tr",{children:[(0,ze.jsx)("td",{children:i.time}),(0,ze.jsx)("td",{children:(0,ze.jsxs)("b",{children:[i.single," Ft"]})}),(0,ze.jsxs)("td",{children:[i.ten," Ft"]}),(0,ze.jsxs)("td",{children:[i.season," Ft"]})]},i.time))})]}),(0,ze.jsxs)("p",{className:"lab-brush__fine",children:["* 27 h\xE9tre sz\xF3l, alkalmank\xE9nti d\xEDj. ",p_.range]})]}),(0,ze.jsx)("p",{className:"lab-brush__hint","aria-hidden":!0,children:"H\xFAzd v\xE9gig az egeret a salakon"})]}),(0,ze.jsx)(Ze,{n:"10",name:"Brush the clay"})]})}var Qs=Pt(dn());var Me=Pt(Qt()),sT=[{y:-1.2,x:0,k:"Nyitvatart\xE1s",t:`P\xE1ly\xE1k ${bn.hours.courts.time}`,s:`Recepci\xF3 ${bn.hours.reception.time} \xB7 minden nap`},{y:4.2,x:-2.4,k:"Fizet\xE9s",t:"K\xE9szp\xE9nz, k\xE1rtya",s:"SZ\xC9P-k\xE1rtya, AYCM Sportpass"},{y:4.2,x:2.4,k:"Lemond\xE1s",t:"24 \xF3r\xE1val el\u0151tte",s:"A lemondott b\xE9rletes \xF3r\xE1k a szezonban lej\xE1tszhat\xF3k."},{y:9.2,x:0,k:"Este",t:"Vil\xE1g\xEDt\xE1s 19 \xF3r\xE1t\xF3l",s:"Automatikusan kapcsoljuk a vil\xE1g\xEDt\xE1ssal rendelkez\u0151 p\xE1ly\xE1kon."},{y:16.6,x:-2.4,k:"Tenisziskola",t:"5\u201317 \xE9veseknek",s:"\xE9s feln\u0151tteknek is"},{y:16.6,x:2.4,k:"T\xE9len is",t:"3 + 2 fedett p\xE1lya",s:"h\xE1rom \xE1lland\xF3an fedett, kett\u0151 s\xE1torban"},{y:23,x:0,k:"Gell\xE9rt Szabadid\u0151k\xF6zpont",t:bn.phone,s:`${bn.address.zip} ${bn.address.city}, ${bn.address.street}`}],sa=36.6,Sn=18.3,oT=(sa-23.77)/2,YU=62;function lT(){let e=(0,Qs.useRef)(null),t=(0,Qs.useRef)(null),n=(0,Qs.useRef)([]),i=(0,Qs.useRef)(null);(0,Qs.useEffect)(()=>{let s=e.current,o=t.current,l=0,c=!1,h=30,p=()=>{let m=Math.min(innerWidth*.94,860);h=m/Sn,o.style.width=`${m}px`,o.style.height=`${sa*h}px`,o.style.setProperty("--k",`${h}px`)};p(),addEventListener("resize",p);let u=new IntersectionObserver(([m])=>c=m.isIntersecting);u.observe(s);let d=()=>{if(l=requestAnimationFrame(d),!c)return;let m=s.getBoundingClientRect(),b=Math.min(1,Math.max(0,-m.top/(m.height-innerHeight))),g=(-2+b*25)*h;o.style.transform=`translateX(-50%) rotateX(${YU}deg) translateY(${g}px)`,i.current&&(i.current.textContent=Math.max(0,Math.min(23.77,b*25-.4)).toFixed(1).replace(".",",")),sT.forEach((f,v)=>{let M=n.current[v];if(!M)return;let _=f.y-(b*25-2)-3,x=_<-1.5?Math.max(0,1+(_+1.5)/2.5):_>9?Math.max(0,1-(_-9)/5):1;M.firstElementChild.style.opacity=String(x)})};return l=requestAnimationFrame(d),()=>{cancelAnimationFrame(l),u.disconnect(),removeEventListener("resize",p)}},[]);let a=sa-oT,r=oT;return(0,Me.jsx)("section",{ref:e,className:"lab-courtpage","aria-labelledby":"lab-courtpage-title",children:(0,Me.jsxs)("div",{className:"lab-courtpage__stage",children:[(0,Me.jsxs)("div",{className:"container lab-courtpage__head",children:[(0,Me.jsx)("p",{className:"eyebrow eyebrow--light",children:"V\xE9gig a p\xE1ly\xE1n"}),(0,Me.jsxs)("h2",{id:"lab-courtpage-title",className:"h2",children:["Minden, amit tudni kell, ",(0,Me.jsx)("em",{children:"alapvonalt\xF3l alapvonalig."})]})]}),(0,Me.jsx)("div",{className:"lab-courtpage__view",children:(0,Me.jsxs)("div",{ref:t,className:"lab-courtpage__plane",children:[(0,Me.jsxs)("svg",{className:"lab-courtpage__lines",viewBox:`0 0 ${Sn} ${sa}`,preserveAspectRatio:"none","aria-hidden":!0,children:[(0,Me.jsx)("rect",{x:(Sn-10.97)/2,y:r,width:10.97,height:23.77}),(0,Me.jsx)("line",{x1:(Sn-8.23)/2,y1:r,x2:(Sn-8.23)/2,y2:a}),(0,Me.jsx)("line",{x1:(Sn+8.23)/2,y1:r,x2:(Sn+8.23)/2,y2:a}),(0,Me.jsx)("line",{x1:(Sn-8.23)/2,y1:sa/2-6.4,x2:(Sn+8.23)/2,y2:sa/2-6.4}),(0,Me.jsx)("line",{x1:(Sn-8.23)/2,y1:sa/2+6.4,x2:(Sn+8.23)/2,y2:sa/2+6.4}),(0,Me.jsx)("line",{x1:Sn/2,y1:sa/2-6.4,x2:Sn/2,y2:sa/2+6.4}),(0,Me.jsx)("line",{x1:Sn/2,y1:r,x2:Sn/2,y2:r+.3}),(0,Me.jsx)("line",{x1:Sn/2,y1:a,x2:Sn/2,y2:a-.3})]}),(0,Me.jsx)("div",{className:"lab-courtpage__net",style:{top:`calc(var(--k) * ${sa/2})`},"aria-hidden":!0,children:(0,Me.jsx)("span",{})}),sT.map((s,o)=>(0,Me.jsx)("div",{ref:l=>{n.current[o]=l},className:"lab-courtpage__sign",style:{left:`calc(var(--k) * (${Sn/2} + ${s.x} * var(--spread, 1)))`,top:`calc(var(--k) * ${a-s.y})`},children:(0,Me.jsxs)("div",{className:"lab-courtpage__card",children:[(0,Me.jsx)("small",{children:s.k}),(0,Me.jsx)("b",{children:s.t}),(0,Me.jsx)("span",{children:s.s})]})},o))]})}),(0,Me.jsxs)("div",{className:"lab-courtpage__meter","aria-hidden":!0,children:[(0,Me.jsx)("span",{ref:i,children:"0,0"})," / 23,77 m"]}),(0,Me.jsx)(Ze,{n:"08",name:"The page is a court",dark:!0})]})})}var zl=Pt(dn());var jn=Pt(Qt()),ke=23.77/2,je=10.97/2,oa=8.23/2,ls=6.4,Ru="#e6e28c",m_="#f0a982",Nu="#f5f0e6",Qn=[{by:0,kind:"serve",tc:1.16,at:[-12,2.75,-.7],bounce:[5.6,0,3.7],tb:1.66,arc:.15,label:"Szerva \xB7 kifel\xE9"},{by:1,kind:"backhand",tc:2.06,at:[11.4,.95,4.7],bounce:[-7.4,0,-3],tb:2.86,arc:1.25,label:"Fon\xE1k return \xB7 keresztbe"},{by:0,kind:"forehand",tc:3.3,at:[-11.6,.95,-3.5],bounce:[7.9,0,2.6],tb:4.08,arc:1.4,label:"Tenyeres \xB7 keresztbe"},{by:1,kind:"forehand",tc:4.5,at:[11.7,1,3],bounce:[-8.2,0,.6],tb:5.3,arc:1.5,label:"Tenyeres \xB7 k\xF6z\xE9pre"},{by:0,kind:"forehand",tc:5.72,at:[-11.2,.95,.9],bounce:[9.6,0,-4],tb:6.38,arc:.9,label:"Tenyeres nyer\u0151 \xB7 a vonalra"}],cT=8.2,rn=(e,t,n)=>e+(t-e)*n,or=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),to=e=>{let t=or(e);return t*t*(3-2*t)};function g_(e){let t=Qn[0];if(e<.66)return null;if(e<t.tc){let n=(e-.66)/(t.tc-.66);return[t.at[0]+.25,rn(1.5,t.at[1],n)+4*n*(1-n)*.55,t.at[2]-.15]}for(let n=0;n<Qn.length;n++){let i=Qn[n],a=Qn[n+1];if(e<i.tb){let r=(e-i.tc)/(i.tb-i.tc);return[rn(i.at[0],i.bounce[0],r),rn(i.at[1],0,r)+4*r*(1-r)*i.arc,rn(i.at[2],i.bounce[2],r)]}if(a&&e<a.tc){let r=(e-i.tb)/(a.tc-i.tb);return[rn(i.bounce[0],a.at[0],r),rn(0,a.at[1],r)+4*r*(1-r)*1.1,rn(i.bounce[2],a.at[2],r)]}if(!a){let r=e-i.tb,s=(i.bounce[0]-i.at[0])/(i.tb-i.tc),o=(i.bounce[2]-i.at[2])/(i.tb-i.tc),l=r<.7?4*(r/.7)*(1-r/.7)*.9:r<1.05?4*((r-.7)/.35)*(1-(r-.7)/.35)*.2:0,c=r<1.05?r:1.05+(r-1.05)*.4;return[Math.min(17.5,i.bounce[0]+s*.55*c),l,i.bounce[2]+o*.55*c]}}return null}function uT(e,t){let n=Qn.filter(l=>l.by===e),i=Qn.filter(l=>l.by!==e),a=[];e===0?a.push([0,-12.2,-.6]):a.push([0,11.6,3.4]);for(let l of Qn)if(l.by===e){let c=l.kind==="serve"?[0,0]:[-Math.sign(l.at[0])*.55,l.kind==="forehand"?-.8*Math.sign(l.at[0]):.8*Math.sign(l.at[0])];a.push([l.tc,l.at[0]+c[0],l.at[2]+c[1]]),a.push([l.tc+.7,l.at[0]+c[0]-Math.sign(l.at[0])*.3,rn(l.at[2]+c[1],0,.45)])}a.sort((l,c)=>l[0]-c[0]);let r=a[0][1],s=a[0][2];for(let l=0;l<a.length-1;l++)if(t>=a[l][0]&&t<=a[l+1][0]){let c=to((t-a[l][0])/(a[l+1][0]-a[l][0]));r=rn(a[l][1],a[l+1][1],c),s=rn(a[l][2],a[l+1][2],c)}else t>a[a.length-1][0]&&(r=a[a.length-1][1],s=a[a.length-1][2]);if(e===1){let l=Qn[Qn.length-1];t>l.tc&&(s=rn(s,-2.2,to((t-l.tc)/.9)))}let o=sr.ready;for(let l of n){let c=Z2[l.kind],h=l.tc-c.contact;t>=h&&t<h+(l.kind==="serve"?2.3:1.75)&&(o=c.pose(t-h))}return{pos:[r,0,s],pose:o}}function hT(e,t,n){let i=wp(e),a=e.twist*Math.PI/180,r=(o,l)=>[t[0]+n*o[0],o[1],t[2]+l*n],s=Math.cos(a)*.17;return{head:r(i.head,0),neck:r(i.neck,0),pelvis:r(i.pelvis,0),rS:r(i.rS,s),lS:r(i.lS,-s),rE:r(i.rE,s*1.25),rH:r(i.rH,s*1.3),lE:r(i.lE,-s*1.25),lH:r(i.lH,-s*1.2),rHip:r([i.pelvis[0],i.pelvis[1]-.02],.11),lHip:r([i.pelvis[0],i.pelvis[1]-.02],-.11),fK:r(i.fK,-.13),fA:r(i.fA,-.14),bK:r(i.bK,.13),bA:r(i.bA,.14),rThroat:r(i.racket.throat,s*1.3),rTip:r(i.racket.tip,s*1.3),rCenter:r(i.racket.center,s*1.3)}}function vT(){let e=(0,zl.useRef)(null),t=(0,zl.useRef)(null),n=(0,zl.useRef)(null);return(0,zl.useEffect)(()=>{let i=e.current,a=t.current,r=a.getContext("2d"),s=0,o=0,l=1,c=0,h=!1,p=0,u=0,d=()=>{l=Math.min(devicePixelRatio||1,2),s=a.clientWidth,o=a.clientHeight,a.width=s*l,a.height=o*l};d(),addEventListener("resize",d);let m=new IntersectionObserver(([f])=>h=f.isIntersecting);m.observe(i);let b=f=>`500 ${f}px "DM Sans Variable", "DM Sans", system-ui, sans-serif`,g=()=>{if(c=requestAnimationFrame(g),!h)return;let f=i.getBoundingClientRect(),v=or(-f.top/(f.height-innerHeight));p+=(v-p)*.14;let M=p,_=or(M/.26),x=to((M-.27)/.15),T=or((M-.44)/.54),w=T*cT,y=s<700,A=to(T*7),R=T>0?g_(w):null,U=(R?or(R[0]*.3,-3.5,3.5):w<1?-3:u)*A;u+=(U-u)*.1;let D=rn(89.5,y?30:rn(22,19,A),x)*(Math.PI/180),I=34,C=[u,I*Math.sin(D),-I*Math.cos(D)],L=[u,rn(0,1.2,x),rn(0,1.5,x)],k=pT(fT(L,C)),B=pT(dT([0,1,0],k)),V=dT(k,B),z=y?13.5:15.5,O=(y?.36:.4)*s*I/z*rn(1,y?1.12:1.25,x)*rn(1,y?1.1:1.14,A),Y=s/2,ot=o*rn(y?.56:.54,y?.54:.5,x),it=j=>{let gt=fT(j,C),rt=v_(gt,k);return[Y+v_(gt,B)/rt*O,ot-v_(gt,V)/rt*O,rt]};r.setTransform(l,0,0,l,0,0),r.clearRect(0,0,s,o),r.strokeStyle=`rgba(245,240,230,${.05*(1-x)+.02})`,r.lineWidth=1,r.beginPath();for(let j=s/2%24;j<s;j+=24)r.moveTo(j,0),r.lineTo(j,o);for(let j=o/2%24;j<o;j+=24)r.moveTo(0,j),r.lineTo(s,j);if(r.stroke(),x>0){r.strokeStyle=`rgba(245,240,230,${.06*x})`,r.beginPath();for(let j=-18;j<=18;j+=2)$s(r,it,[j,0,-9],[j,0,9]);for(let j=-9;j<=9;j+=2)$s(r,it,[-18,0,j],[18,0,j]);r.stroke()}let Ot=[[[-ke,0,-je],[ke,0,-je]],[[-ke,0,je],[ke,0,je]],[[-ke,0,-je],[-ke,0,je]],[[ke,0,-je],[ke,0,je]],[[-ke,0,-oa],[ke,0,-oa]],[[-ke,0,oa],[ke,0,oa]],[[-ls,0,-oa],[-ls,0,oa]],[[ls,0,-oa],[ls,0,oa]],[[-ls,0,0],[ls,0,0]],[[-ke,0,0],[-ke+.3,0,0]],[[ke,0,0],[ke-.3,0,0]]];r.strokeStyle=Nu,r.lineWidth=1.6,r.lineCap="round",Ot.forEach(([j,gt],rt)=>{let St=or(_*Ot.length*1.15-rt);St<=0||(r.beginPath(),$s(r,it,j,[rn(j[0],gt[0],St),0,rn(j[2],gt[2],St)]),r.stroke())});let Ut=or(_*1.4-.25),lt=j=>(.914+(1.07-.914)*(Math.abs(j)/(je+.914))**2)*x;if(Ut>0){let j=je+.914;r.strokeStyle=`rgba(245,240,230,${.25+.2*x})`,r.lineWidth=.8,r.beginPath();for(let rt=-j;rt<=j;rt+=.5)$s(r,it,[0,0,rt],[0,lt(rt),rt]);for(let rt=.15;rt<1.07;rt+=.15){let St=[];for(let Ht=-j;Ht<=j;Ht+=.5)lt(Ht)>rt&&St.push([0,rt,Ht]);for(let Ht=0;Ht<St.length-1;Ht++)$s(r,it,St[Ht],St[Ht+1])}r.stroke(),r.strokeStyle=Nu,r.lineWidth=2.2,r.beginPath();let gt=!0;for(let rt=-j;rt<=j+1e-6;rt+=.25){let[St,Ht]=it([0,lt(rt),rt*Ut]);gt?r.moveTo(St,Ht):r.lineTo(St,Ht),gt=!1}r.stroke(),r.lineWidth=3,r.beginPath(),$s(r,it,[0,0,-j],[0,lt(j)+.02*x,-j]),$s(r,it,[0,0,j],[0,lt(j)+.02*x,j]),r.stroke()}let q=or(_*1.3-.35)*(1-x*.85);r.font=b(y?10:11.5),q>0&&(r.globalAlpha=q,Ol(r,it,[-ke,0,-je-1.4],[ke,0,-je-1.4],"23,77 m",0,14),Ol(r,it,[-ke-1.4,0,-je],[-ke-1.4,0,je],"10,97 m",1,0),Ol(r,it,[ke+1.4,0,-oa],[ke+1.4,0,oa],"8,23 m",2,0),Ol(r,it,[0,0,je+1.2],[ls,0,je+1.2],"6,40 m",0,-8),Ol(r,it,[ls,0,je+1.2],[ke,0,je+1.2],"5,49 m",0,-8),Ol(r,it,[-ke-.6,0,oa],[-ke-.6,0,je],"1,37",1,0),r.globalAlpha=1);let Q=to((M-.33)/.08)*(1-to((M-.47)/.06));if(Q>0){r.globalAlpha=Q;let[j,gt]=it([0,0,0]),[,rt]=it([0,.914,0]),[St,Ht]=it([0,0,-(je+.914)]),[,Lt]=it([0,1.07,-(je+.914)]);mT(r,j+22,gt,j+22,rt,"0,914 m",Ru),mT(r,St-22,Ht,St-22,Lt,"1,07 m",Ru,!0),r.globalAlpha=1}if(r.globalAlpha=or(_*2-.4)*(1-x),r.globalAlpha>0){let j=y?196:250,gt=54,rt=s-j-(y?16:40),St=o-gt-(y?70:40);r.strokeStyle="rgba(245,240,230,.6)",r.lineWidth=1,r.strokeRect(rt,St,j,gt),r.beginPath(),r.moveTo(rt,St+22),r.lineTo(rt+j,St+22),r.stroke(),r.fillStyle=Nu,r.font=b(10),r.fillText("GELL\xC9RT \xB7 TENISZP\xC1LYA \xB7 ALAPRAJZ",rt+8,St+15),r.fillStyle="rgba(245,240,230,.6)",r.fillText("ITF szabv\xE1nym\xE9retek \xB7 p\xE1ros p\xE1lya",rt+8,St+36),r.fillText("Lap 1/1",rt+8,St+48)}if(r.globalAlpha=1,x>.6){let j=to((x-.6)/.4);r.globalAlpha=j,Qn.forEach((At,Zt)=>{if(w<At.tb)return;let[fe,ct]=it(At.bounce),te=At.by===0?Ru:m_;r.strokeStyle=te,r.lineWidth=1.4,r.beginPath(),r.ellipse(fe,ct,7,2.6,0,0,Math.PI*2),r.stroke(),r.font=b(10),r.fillStyle=te,r.fillText(String(Zt+1),fe+9,ct+3)}),r.setLineDash([3,4]),r.strokeStyle="rgba(245,240,230,.55)",r.lineWidth=1,r.beginPath();let gt=!1;for(let At=Math.max(.66,w-1.4);At<=w;At+=1/60){let Zt=g_(At);if(!Zt)continue;let[fe,ct]=it(Zt);gt?r.lineTo(fe,ct):r.moveTo(fe,ct),gt=!0}r.stroke(),r.setLineDash([]);let rt=uT(0,w),St=uT(1,w),Ht=hT(rt.pose,rt.pos,1),Lt=hT(St.pose,St.pos,-1);gT(r,it,Lt,m_);let Xt=g_(w);if(gT(r,it,Ht,Ru),Xt){let[At,Zt]=it(Xt),[fe,ct]=it([Xt[0],0,Xt[2]]);r.fillStyle="rgba(0,0,0,.35)",r.beginPath(),r.ellipse(fe,ct,4,1.5,0,0,Math.PI*2),r.fill(),r.fillStyle="#d9e05a",r.beginPath(),r.arc(At,Zt,y?3.2:4,0,Math.PI*2),r.fill()}r.globalAlpha=1;let $t=-1;if(Qn.forEach((At,Zt)=>{w>=At.tc-.05&&($t=Zt)}),n.current){let At=w>Qn[Qn.length-1].tb+.6,Zt=At?"Pont \xB7 15 : 0":$t>=0?`${$t+1}. ${Qn[$t].label}`:"Szerva el\u0151tt",fe=At?Nu:$t>=0?Qn[$t].by===0?Ru:m_:Nu;n.current.dataset.l!==Zt&&(n.current.dataset.l=Zt,n.current.querySelector("b").textContent=Zt,n.current.style.setProperty("--c",fe),n.current.classList.remove("is-new"),n.current.offsetWidth,n.current.classList.add("is-new")),n.current.style.opacity=String(j);let ct=n.current.querySelector("i");ct&&(ct.style.transform=`scaleX(${w/cT})`)}}else n.current&&(n.current.style.opacity="0")};return c=requestAnimationFrame(g),()=>{cancelAnimationFrame(c),m.disconnect(),removeEventListener("resize",d)}},[]),(0,jn.jsx)("section",{ref:e,className:"lab-blueprint","aria-labelledby":"lab-bp-title",children:(0,jn.jsxs)("div",{className:"lab-blueprint__stage",children:[(0,jn.jsx)("canvas",{ref:t,className:"lab-blueprint__canvas",role:"img","aria-label":"Teniszp\xE1lya alaprajza a hivatalos m\xE9retekkel, majd oldaln\xE9zetben k\xE9t j\xE1t\xE9kos egy labdamenete"}),(0,jn.jsxs)("div",{className:"container lab-blueprint__head",children:[(0,jn.jsx)("p",{className:"eyebrow eyebrow--light",children:"M\xE9retek"}),(0,jn.jsxs)("h2",{id:"lab-bp-title",className:"h2",children:["23,77 \xD7 10,97 m\xE9ter. ",(0,jn.jsx)("em",{children:"Pontosan."})]})]}),(0,jn.jsxs)("div",{ref:n,className:"lab-blueprint__cap",style:{opacity:0},"aria-live":"polite",children:[(0,jn.jsx)("b",{children:"Szerva el\u0151tt"}),(0,jn.jsx)("span",{children:(0,jn.jsx)("i",{})}),(0,jn.jsx)("small",{children:"G\xF6rgess el\u0151re \xE9s vissza: te tekered a labdamenetet."})]}),(0,jn.jsx)(Ze,{n:"81",name:"Blueprint mode \xB7 skeleton point",dark:!0})]})})}function fT(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function v_(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function dT(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function pT(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function $s(e,t,n,i){let[a,r]=t(n),[s,o]=t(i);e.moveTo(a,r),e.lineTo(s,o)}function Ol(e,t,n,i,a,r,s){let[o,l]=t(n),[c,h]=t(i);e.strokeStyle="#e6e28c",e.fillStyle="#e6e28c",e.lineWidth=1,e.beginPath(),e.moveTo(o,l),e.lineTo(c,h);let p=Math.atan2(h-l,c-o),u=-Math.sin(p)*5,d=Math.cos(p)*5;for(let[f,v]of[[o,l],[c,h]])e.moveTo(f-u,v-d),e.lineTo(f+u,v+d);e.stroke();let m=(o+c)/2,b=(l+h)/2,g=e.measureText(a).width;r===0?e.fillText(a,m-g/2,b+s):(e.save(),e.translate(m+(r===1?-8:14),b),e.rotate(-Math.PI/2),e.fillText(a,-g/2,0),e.restore())}function mT(e,t,n,i,a,r,s,o=!1){e.strokeStyle=s,e.fillStyle=s,e.lineWidth=1,e.beginPath(),e.moveTo(t,n),e.lineTo(i,a),e.moveTo(t-4,n),e.lineTo(t+4,n),e.moveTo(i-4,a),e.lineTo(i+4,a),e.stroke();let l=e.measureText(r).width;e.fillText(r,o?t-l-8:t+8,(n+a)/2+4)}function gT(e,t,n,i){let a=T=>t(n[T]);e.strokeStyle="rgba(0,0,0,.28)",e.lineWidth=2,e.beginPath();for(let[T,w]of[["pelvis","fA"],["pelvis","bA"],["neck","pelvis"],["rS","rH"],["lS","lH"]]){let y=n[T],A=n[w],R=t([y[0]+y[1]*.35,0,y[2]+y[1]*.2]),U=t([A[0]+A[1]*.35,0,A[2]+A[1]*.2]);e.moveTo(R[0],R[1]),e.lineTo(U[0],U[1])}e.stroke();let r=[["neck","pelvis"],["lS","rS"],["rS","rE"],["rE","rH"],["lS","lE"],["lE","lH"],["lHip","rHip"],["lHip","fK"],["fK","fA"],["rHip","bK"],["bK","bA"]];e.strokeStyle=i,e.lineWidth=2.6,e.lineCap="round",e.shadowColor=i,e.shadowBlur=10,e.beginPath();for(let[T,w]of r){let[y,A]=a(T),[R,U]=a(w);e.moveTo(y,A),e.lineTo(R,U)}e.stroke();let[s,o,l]=a("head"),[c,h]=a("neck"),p=Math.max(2.5,Math.hypot(s-c,o-h)*.55);e.beginPath(),e.arc(s,o,p,0,Math.PI*2),e.stroke();let[u,d]=a("rThroat"),[m,b]=a("rTip"),[g,f]=a("rCenter"),[v,M]=a("rH");e.lineWidth=1.4,e.beginPath(),e.moveTo(v,M),e.lineTo(u,d);let _=Math.atan2(b-d,m-u),x=Math.hypot(m-u,b-d)/2;e.moveTo(g+Math.cos(_)*x,f+Math.sin(_)*x),e.ellipse(g,f,x,x*.55,_,0,Math.PI*2),e.stroke(),e.shadowBlur=0,e.fillStyle=i;for(let T of["rS","lS","rE","lE","rH","lH","fK","bK","fA","bA","pelvis"]){let[w,y]=a(T);e.beginPath(),e.arc(w,y,2.6,0,Math.PI*2),e.fill()}}var Np=Pt(dn());var $n=Pt(Qt()),__=[{src:"img/forehand.jpg",alt:"Fi\xFA tenyeresre k\xE9sz\xFCl a salakp\xE1ly\xE1n",cap:"Tenyeres",dir:-.15,span:"wide"},{src:"img/volley-lunge.jpg",alt:"J\xE1t\xE9kos m\xE9ly kit\xF6r\xE9sben r\xF6pt\xE9zik a h\xE1l\xF3 el\u0151tt",cap:"R\xF6pte a h\xE1l\xF3n\xE1l",dir:.1,span:"tall"},{src:"img/junior-forehand.jpg",alt:"Kisl\xE1ny tenyeres \xFCt\xE9s k\xF6zben",cap:"Tenisziskola",dir:.05,span:""},{src:"img/between-points.jpg",alt:"K\xE9t j\xE1t\xE9kos besz\xE9lget k\xE9t labdamenet k\xF6z\xF6tt",cap:"K\xE9t labdamenet k\xF6z\xF6tt",dir:0,span:""},{src:"img/stadium-court.jpg",alt:"A centerp\xE1lya telt lel\xE1t\xF3val, fel\xFClr\u0151l",cap:"A centerp\xE1lya",dir:.35,span:"wide"},{src:"img/school-group-court.jpg",alt:"A tenisziskola csoportk\xE9pe a salakp\xE1ly\xE1n",cap:"A Gell\xE9rt Tenisziskola",dir:0,span:""}],y_=["1/15","1/30","1/60","1/125","1/250","1/500","1/1000","1/2000"];function _T(){let e=(0,Np.useRef)(null);return(0,Np.useEffect)(()=>{let t=Array.from(e.current.querySelectorAll(".lab-shot")),n=matchMedia("(prefers-reduced-motion: reduce)").matches,i=[];return t.forEach((a,r)=>{let s=a.querySelector("canvas"),o=s.getContext("2d"),l=a.querySelector(".lab-shot__speed"),c=new Image;c.src=__[r].src;let h=__[r].dir,p=0,u=0,d=!1,m=!1,b=()=>{let x=Math.min(devicePixelRatio||1,2);s.width=s.clientWidth*x,s.height=s.clientHeight*x},g=(x,T)=>{if(!c.complete||!c.naturalWidth)return;let w=s.width,y=s.height,A=Math.max(w/c.naturalWidth,y/c.naturalHeight)*1.04,R=c.naturalWidth*A,U=c.naturalHeight*A,D=(w-R)/2,I=(y-U)/2;o.clearRect(0,0,w,y);let C=x>.01?18:1,L=x*w*.09,k=Math.cos(h),B=Math.sin(h);for(let V=0;V<C;V++){let z=C===1?0:(V/(C-1)-.5)*L;o.globalAlpha=1/(V+1),o.drawImage(c,D+k*z,I+B*z,R,U)}o.globalAlpha=1,T>0&&(o.fillStyle=`rgba(255,252,240,${T})`,o.fillRect(0,0,w,y))},f=()=>{cancelAnimationFrame(p),u=performance.now(),a.classList.add("is-shooting");let x=T=>{let w=Math.min(1,(T-u)/900),y=n?0:Math.max(0,1-w/.7)**2,A=n?0:w>.7&&w<.86?(1-Math.abs((w-.78)/.08))*.55:0;g(y,A),l.textContent=y_[Math.min(y_.length-1,Math.floor(w/.72*y_.length))]+" s",w<1?p=requestAnimationFrame(x):a.classList.remove("is-shooting")};p=requestAnimationFrame(x)};b(),c.onload=()=>{b(),g(d?0:1,0),m&&!d&&(d=!0,f())};let v=new IntersectionObserver(([x])=>{m=x.isIntersecting,x.isIntersecting&&!d&&c.complete&&(d=!0,setTimeout(f,r%3*140))},{threshold:.45});v.observe(a);let M=()=>d&&f();a.addEventListener("pointerenter",M);let _=new ResizeObserver(()=>{b(),g(d?0:1,0)});_.observe(s),i.push(()=>{cancelAnimationFrame(p),v.disconnect(),_.disconnect(),a.removeEventListener("pointerenter",M)})}),()=>i.forEach(a=>a())},[]),(0,$n.jsxs)("section",{className:"section lab-shutter","aria-labelledby":"lab-shutter-title",children:[(0,$n.jsxs)("div",{className:"container",children:[(0,$n.jsxs)("div",{className:"lab-shutter__head",children:[(0,$n.jsx)("p",{className:"eyebrow",children:"Pillanatok"}),(0,$n.jsxs)("h2",{id:"lab-shutter-title",className:"h2",children:["Egy \xFCt\xE9s ",(0,$n.jsx)("em",{children:"1/2000 m\xE1sodperc alatt."})]})]}),(0,$n.jsx)("div",{ref:e,className:"lab-shutter__grid",children:__.map(t=>(0,$n.jsxs)("figure",{className:`lab-shot${t.span?" lab-shot--"+t.span:""}`,children:[(0,$n.jsx)("canvas",{role:"img","aria-label":t.alt}),(0,$n.jsxs)("figcaption",{children:[(0,$n.jsx)("span",{children:t.cap}),(0,$n.jsx)("span",{className:"lab-shot__speed",children:"1/15 s"})]})]},t.src))})]}),(0,$n.jsx)(Ze,{n:"58",name:"Shutter-speed reveal"})]})}var Bl=Pt(dn());var Du=Pt(dn()),Uu=Pt(Qt()),x_=null;function yT(e=1){try{x_=x_||new AudioContext;let t=x_,n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="sine",i.frequency.setValueAtTime(1250,n),i.frequency.exponentialRampToValueAtTime(520,n+.05),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.22*e,n+.004),a.gain.exponentialRampToValueAtTime(1e-4,n+.11),i.connect(a).connect(t.destination),i.start(n),i.stop(n+.12);let r=t.createBuffer(1,t.sampleRate*.04,t.sampleRate),s=r.getChannelData(0);for(let h=0;h<s.length;h++)s[h]=(Math.random()*2-1)*(1-h/s.length)**3;let o=t.createBufferSource(),l=t.createBiquadFilter(),c=t.createGain();o.buffer=r,l.type="bandpass",l.frequency.value=2400,c.gain.value=.18*e,o.connect(l).connect(c).connect(t.destination),o.start(n)}catch{}}function xT({href:e,children:t,id:n}){let i=(0,Du.useRef)(null),a=(0,Du.useRef)(null);return(0,Du.useEffect)(()=>{let r=i.current,s=a.current,o=s.getContext("2d"),l=matchMedia("(prefers-reduced-motion: reduce)").matches,c=0,h=0,p=1,u=0,d=.5,m=.5,b=!1,g=0,f=0,v=0,M=.5,_=.5,x=()=>{p=Math.min(devicePixelRatio||1,2),c=r.clientWidth,h=r.clientHeight,s.width=c*p,s.height=h*p};x();let T=new ResizeObserver(x);T.observe(r);let w=I=>{let C=r.getBoundingClientRect();d=(I.clientX-C.left)/C.width,m=(I.clientY-C.top)/C.height},y=I=>{b=!0,w(I),v=7},A=()=>{b=!1,v=0},R=I=>{w(I),M=d,_=m,f+=9,yT(1)},U=I=>{let C=r.getBoundingClientRect(),{x:L}=I.detail;M=(L-C.left)/C.width,_=.25,f+=12,yT(.8)};r.addEventListener("pointerenter",y),r.addEventListener("pointermove",w),r.addEventListener("pointerleave",A),r.addEventListener("pointerdown",R),n&&addEventListener("lab:balldrop",U);let D=()=>{u=requestAnimationFrame(D),f+=(v-g)*.12,f*=.86,g+=f,b?(M+=(d-M)*.25,_+=(m-_)*.25):(M+=(.5-M)*.02,_+=(.5-_)*.02),o.setTransform(p,0,0,p,0,0),o.clearRect(0,0,c,h);let I=M*c,C=_*h,L=34,k=l?0:g,B=(z,O)=>{let Y=z-I,ot=O-C,it=Y*Y+ot*ot,Ot=k*Math.exp(-it/(L*L))/Math.max(8,Math.sqrt(it));return[z+Y*Ot,O+ot*Ot]},V=8;o.lineWidth=1.1;for(let z=0;z<2;z++){let O=Math.floor(z===0?c/V:h/V);for(let Y=1;Y<O;Y++){o.strokeStyle=Y%2?"rgba(255,246,232,.5)":"rgba(255,246,232,.32)",o.beginPath();let ot=26;for(let it=0;it<=ot;it++){let Ot=it/ot,[Ut,lt]=z===0?B(Y*V,Ot*h):B(Ot*c,Y*V);it===0?o.moveTo(Ut,lt):o.lineTo(Ut,lt)}o.stroke()}}if(k>.5){let z=o.createRadialGradient(I,C,0,I,C,L*1.2);z.addColorStop(0,`rgba(255,240,215,${Math.min(.28,k*.025)})`),z.addColorStop(1,"rgba(255,240,215,0)"),o.fillStyle=z,o.fillRect(0,0,c,h)}};return u=requestAnimationFrame(D),()=>{cancelAnimationFrame(u),T.disconnect(),r.removeEventListener("pointerenter",y),r.removeEventListener("pointermove",w),r.removeEventListener("pointerleave",A),r.removeEventListener("pointerdown",R),n&&removeEventListener("lab:balldrop",U)}},[n]),(0,Uu.jsxs)("a",{ref:i,id:n,href:e,className:"lab-strings",children:[(0,Uu.jsx)("canvas",{ref:a,"aria-hidden":!0}),(0,Uu.jsx)("span",{className:"lab-strings__label",children:t})]})}var oe=Pt(Qt());function ZU(){let[e,t]=(0,Bl.useState)("idle"),[n,i]=(0,Bl.useState)(0),[a,r]=(0,Bl.useState)(!1);return(0,Bl.useEffect)(()=>{if(e!=="loading")return;let s=setInterval(()=>i(o=>a?1:o+(.9-o)*.08),120);return()=>clearInterval(s)},[e,a]),(0,oe.jsxs)("div",{className:"lab-map",children:[e!=="idle"&&(0,oe.jsx)("iframe",{src:bn.mapsEmbed,title:"Gell\xE9rt Szabadid\u0151k\xF6zpont a t\xE9rk\xE9pen",referrerPolicy:"no-referrer-when-downgrade",onLoad:()=>{r(!0),i(1)},style:{opacity:e==="ready"?1:0}}),e!=="ready"&&(0,oe.jsxs)("div",{className:"lab-map__cover",children:[(0,oe.jsx)("img",{src:"img/courts-13-14.jpg",alt:""}),(0,oe.jsx)("div",{className:"lab-map__inner",children:e==="idle"?(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)("p",{className:"h4",children:[bn.address.zip," ",bn.address.city,", ",bn.address.street]}),(0,oe.jsx)("p",{children:"A t\xE9rk\xE9p a Google Maps szolg\xE1ltat\xE1s\xE1t t\xF6lti be."}),(0,oe.jsx)("button",{type:"button",className:"btn btn--lime",onClick:()=>t("loading"),children:"T\xE9rk\xE9p bet\xF6lt\xE9se"})]}):(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(Tf,{progress:n,capacity:18,tone:"dark",onFull:()=>setTimeout(()=>t("ready"),300)}),(0,oe.jsx)("p",{className:"lab-map__loading",children:"T\xE9rk\xE9p bet\xF6lt\xE9se\u2026"})]})})]})]})}function bT(){return(0,oe.jsx)("section",{className:"section section--forest lab-finale","aria-labelledby":"lab-finale-title",children:(0,oe.jsxs)("div",{className:"container lab-finale__grid",children:[(0,oe.jsxs)("div",{className:"lab-finale__copy",children:[(0,oe.jsx)("p",{className:"eyebrow eyebrow--light",children:"P\xE1lyafoglal\xE1s"}),(0,oe.jsxs)("h2",{id:"lab-finale-title",className:"h1",children:["Foglalj p\xE1ly\xE1t. ",(0,oe.jsx)("em",{children:"Egy h\xEDv\xE1s."})]}),(0,oe.jsxs)("p",{className:"lead",children:["Telefonon, a recepci\xF3n. ",bn.hours.reception.days,", ",bn.hours.reception.time.replace(/ /g,""),". Egy \xF3ra, t\xEDz alkalom vagy eg\xE9sz szezon."]}),(0,oe.jsx)("div",{className:"lab-finale__cta",children:(0,oe.jsxs)(xT,{href:bn.phoneHref,id:"lab-cta",children:[(0,oe.jsx)("small",{children:"H\xEDvd a recepci\xF3t"}),(0,oe.jsx)("b",{children:bn.phone})]})}),(0,oe.jsx)("p",{className:"lab-finale__hint",children:"Nyomd meg a h\xFArokat. A g\xF6rget\u0151s\xE1v labd\xE1ja is ide \xE9rkezik."}),(0,oe.jsxs)("div",{className:"lab-finale__tags",children:[(0,oe.jsx)(Ze,{n:"26",name:"String-bed button",dark:!0}),(0,oe.jsx)(Ze,{n:"30",name:"Ball progress lands here",dark:!0})]})]}),(0,oe.jsxs)("div",{className:"lab-finale__map",children:[(0,oe.jsx)(ZU,{}),(0,oe.jsx)(Ze,{n:"42",name:"Ball basket while the map loads",dark:!0})]})]})})}var Vn=Pt(Qt());function ST(){return(0,Vn.jsxs)("div",{className:"lab",children:[(0,Vn.jsx)(aM,{}),(0,Vn.jsx)(rM,{}),(0,Vn.jsx)(j2,{}),(0,Vn.jsx)(Q2,{}),(0,Vn.jsx)(d_,{}),(0,Vn.jsx)(eT,{}),(0,Vn.jsx)(aT,{}),(0,Vn.jsx)(rT,{}),(0,Vn.jsx)(lT,{}),(0,Vn.jsx)(d_,{tone:"dark",tag:!1}),(0,Vn.jsx)(vT,{}),(0,Vn.jsx)(_T,{}),(0,Vn.jsx)(bT,{})]})}var TT=Pt(Qt());document.documentElement.classList.add("js");(0,MT.createRoot)(document.getElementById("root")).render((0,TT.jsx)(ST,{}));
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
