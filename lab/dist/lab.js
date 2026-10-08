var NT=Object.create;var A_=Object.defineProperty;var DT=Object.getOwnPropertyDescriptor;var UT=Object.getOwnPropertyNames;var LT=Object.getPrototypeOf,IT=Object.prototype.hasOwnProperty;var fa=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var PT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of UT(t))!IT.call(e,a)&&a!==n&&A_(e,a,{get:()=>t[a],enumerable:!(i=DT(t,a))||i.enumerable});return e};var Pt=(e,t,n)=>(n=e!=null?NT(LT(e)):{},PT(t||!e||!e.__esModule?A_(n,"default",{value:e,enumerable:!0}):n,e));var z_=fa(He=>{"use strict";function Pp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Ou(a,t))e[i]=t,e[n]=a,n=i;else break t}}function da(e){return e.length===0?null:e[0]}function Bu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,r=a>>>1;i<r;){var s=2*(i+1)-1,o=e[s],l=s+1,c=e[l];if(0>Ou(o,n))l<a&&0>Ou(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[s]=n,i=s);else if(l<a&&0>Ou(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ou(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}He.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(C_=performance,He.unstable_now=function(){return C_.now()}):(Up=Date,R_=Up.now(),He.unstable_now=function(){return Up.now()-R_});var C_,Up,R_,Ba=[],fr=[],OT=1,Di=null,In=3,Op=!1,Vl=!1,Gl=!1,zp=!1,U_=typeof setTimeout=="function"?setTimeout:null,L_=typeof clearTimeout=="function"?clearTimeout:null,N_=typeof setImmediate<"u"?setImmediate:null;function zu(e){for(var t=da(fr);t!==null;){if(t.callback===null)Bu(fr);else if(t.startTime<=e)Bu(fr),t.sortIndex=t.expirationTime,Pp(Ba,t);else break;t=da(fr)}}function Bp(e){if(Gl=!1,zu(e),!Vl)if(da(Ba)!==null)Vl=!0,so||(so=!0,ro());else{var t=da(fr);t!==null&&Fp(Bp,t.startTime-e)}}var so=!1,Xl=-1,I_=5,P_=-1;function O_(){return zp?!0:!(He.unstable_now()-P_<I_)}function Lp(){if(zp=!1,so){var e=He.unstable_now();P_=e;var t=!0;try{t:{Vl=!1,Gl&&(Gl=!1,L_(Xl),Xl=-1),Op=!0;var n=In;try{e:{for(zu(e),Di=da(Ba);Di!==null&&!(Di.expirationTime>e&&O_());){var i=Di.callback;if(typeof i=="function"){Di.callback=null,In=Di.priorityLevel;var a=i(Di.expirationTime<=e);if(e=He.unstable_now(),typeof a=="function"){Di.callback=a,zu(e),t=!0;break e}Di===da(Ba)&&Bu(Ba),zu(e)}else Bu(Ba);Di=da(Ba)}if(Di!==null)t=!0;else{var r=da(fr);r!==null&&Fp(Bp,r.startTime-e),t=!1}}break t}finally{Di=null,In=n,Op=!1}t=void 0}}finally{t?ro():so=!1}}}var ro;typeof N_=="function"?ro=function(){N_(Lp)}:typeof MessageChannel<"u"?(Ip=new MessageChannel,D_=Ip.port2,Ip.port1.onmessage=Lp,ro=function(){D_.postMessage(null)}):ro=function(){U_(Lp,0)};var Ip,D_;function Fp(e,t){Xl=U_(function(){e(He.unstable_now())},t)}He.unstable_IdlePriority=5;He.unstable_ImmediatePriority=1;He.unstable_LowPriority=4;He.unstable_NormalPriority=3;He.unstable_Profiling=null;He.unstable_UserBlockingPriority=2;He.unstable_cancelCallback=function(e){e.callback=null};He.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I_=0<e?Math.floor(1e3/e):5};He.unstable_getCurrentPriorityLevel=function(){return In};He.unstable_next=function(e){switch(In){case 1:case 2:case 3:var t=3;break;default:t=In}var n=In;In=t;try{return e()}finally{In=n}};He.unstable_requestPaint=function(){zp=!0};He.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=In;In=e;try{return t()}finally{In=n}};He.unstable_scheduleCallback=function(e,t,n){var i=He.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:OT++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Pp(fr,e),da(Ba)===null&&e===da(fr)&&(Gl?(L_(Xl),Xl=-1):Gl=!0,Fp(Bp,n-i))):(e.sortIndex=a,Pp(Ba,e),Vl||Op||(Vl=!0,so||(so=!0,ro()))),e};He.unstable_shouldYield=O_;He.unstable_wrapCallback=function(e){var t=In;return function(){var n=In;In=t;try{return e.apply(this,arguments)}finally{In=n}}}});var F_=fa((s4,B_)=>{"use strict";B_.exports=z_()});var Q_=fa(Gt=>{"use strict";var Vp=Symbol.for("react.transitional.element"),zT=Symbol.for("react.portal"),BT=Symbol.for("react.fragment"),FT=Symbol.for("react.strict_mode"),kT=Symbol.for("react.profiler"),HT=Symbol.for("react.consumer"),VT=Symbol.for("react.context"),GT=Symbol.for("react.forward_ref"),XT=Symbol.for("react.suspense"),WT=Symbol.for("react.memo"),X_=Symbol.for("react.lazy"),qT=Symbol.for("react.activity"),YT=Symbol.for("react.view_transition"),k_=Symbol.iterator;function ZT(e){return e===null||typeof e!="object"?null:(e=k_&&e[k_]||e["@@iterator"],typeof e=="function"?e:null)}var W_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,Y_={};function lo(e,t,n){this.props=e,this.context=t,this.refs=Y_,this.updater=n||W_}lo.prototype.isReactComponent={};lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z_(){}Z_.prototype=lo.prototype;function Gp(e,t,n){this.props=e,this.context=t,this.refs=Y_,this.updater=n||W_}var Xp=Gp.prototype=new Z_;Xp.constructor=Gp;q_(Xp,lo.prototype);Xp.isPureReactComponent=!0;var H_=Array.isArray;function Hp(){}var Ue={H:null,A:null,T:null,S:null},K_=Object.prototype.hasOwnProperty;function Wp(e,t,n){var i=n.ref;return{$$typeof:Vp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function KT(e,t){return Wp(e.type,t,e.props)}function qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vp}function JT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var V_=/\/+/g;function kp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?JT(""+e.key):t.toString(36)}function jT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Hp,Hp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function oo(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vp:case zT:s=!0;break;case X_:return s=e._init,oo(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+kp(e,0):i,H_(a)?(n="",s!=null&&(n=s.replace(V_,"$&/")+"/"),oo(a,t,n,"",function(c){return c})):a!=null&&(qp(a)&&(a=KT(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(V_,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(H_(e))for(var l=0;l<e.length;l++)i=e[l],r=o+kp(i,l),s+=oo(i,t,n,r,a);else if(l=ZT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+kp(i,l++),s+=oo(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return oo(jT(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Fu(e,t,n){if(e==null)return e;var i=[],a=0;return oo(e,i,"","",function(r){return t.call(n,r,a++)}),i}function QT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var G_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function J_(e){var t=Ue.T,n={};n.types=t!==null?t.types:null,Ue.T=n;try{var i=e(),a=Ue.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Hp,G_)}catch(r){G_(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}}function j_(e){var t=Ue.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else J_(j_.bind(null,e))}var $T={map:Fu,forEach:function(e,t,n){Fu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fu(e,function(){t++}),t},toArray:function(e){return Fu(e,function(t){return t})||[]},only:function(e){if(!qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Activity=qT;Gt.Children=$T;Gt.Component=lo;Gt.Fragment=BT;Gt.Profiler=kT;Gt.PureComponent=Gp;Gt.StrictMode=FT;Gt.Suspense=XT;Gt.ViewTransition=YT;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Gt.addTransitionType=j_;Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cacheSignal=function(){return null};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=q_({},e.props),a=e.key;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)!K_.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Wp(e.type,a,i)};Gt.createContext=function(e){return e={$$typeof:VT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:HT,_context:e},e};Gt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)K_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Wp(e,r,a)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:GT,render:e}};Gt.isValidElement=qp;Gt.lazy=function(e){return{$$typeof:X_,_payload:{_status:-1,_result:e},_init:QT}};Gt.memo=function(e,t){return{$$typeof:WT,type:e,compare:t===void 0?null:t}};Gt.startTransition=J_;Gt.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Gt.use=function(e){return Ue.H.use(e)};Gt.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Gt.useContext=function(e){return Ue.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Gt.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Gt.useId=function(){return Ue.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Gt.useRef=function(e){return Ue.H.useRef(e)};Gt.useState=function(e){return Ue.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Ue.H.useTransition()};Gt.version="19.3.0"});var dn=fa((l4,$_)=>{"use strict";$_.exports=Q_()});var nx=fa(Pn=>{"use strict";var tE=dn();function ex(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function dr(){}var Xn={d:{f:dr,r:function(){throw Error(ex(522))},D:dr,C:dr,L:dr,m:dr,X:dr,S:dr,M:dr},p:0,findDOMNode:null},eE=Symbol.for("react.portal"),nE=Symbol.for("react.recoverable"),tx=Symbol.for("react.optimistic_key");function iE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eE,key:i==null?null:i===tx?tx:""+i,children:e,containerInfo:t,implementation:n}}var Wl=tE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ku(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xn;Pn.browser=function(e){return{$$typeof:nE,_reason:e}};Pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ex(299));return iE(e,t,null,n)};Pn.flushSync=function(e){var t=Wl.T,n=Xn.p;try{if(Wl.T=null,Xn.p=2,e)return e()}finally{Wl.T=t,Xn.p=n,Xn.d.f()}};Pn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Xn.d.C(e,t))};Pn.prefetchDNS=function(e){typeof e=="string"&&Xn.d.D(e)};Pn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=ku(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&Xn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Pn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ku(t.as,t.crossOrigin);Xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Xn.d.M(e)};Pn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=ku(n,t.crossOrigin);Xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Pn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ku(t.as,t.crossOrigin);Xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Xn.d.m(e)};Pn.requestFormReset=function(e){Xn.d.r(e)};Pn.unstable_batchedUpdates=function(e,t){return e(t)};Pn.useFormState=function(e,t,n){return Wl.H.useFormState(e,t,n)};Pn.useFormStatus=function(){return Wl.H.useHostTransitionStatus()};Pn.version="19.3.0"});var rx=fa((u4,ax)=>{"use strict";function ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix)}catch(e){console.error(e)}}ix(),ax.exports=nx()});var WS=fa(Sf=>{"use strict";var ln=F_(),Xy=dn(),aE=rx();function nt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function qy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sx(e){if(Uc(e)!==e)throw Error(nt(188))}function rE(e){var t=e.alternate;if(!t){if(t=Uc(e),t===null)throw Error(nt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return sx(a),e;if(r===i)return sx(a),t;r=r.sibling}throw Error(nt(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(nt(189))}}if(n.alternate!==i)throw Error(nt(190))}if(n.tag!==3)throw Error(nt(188));return n.stateNode.current===n?e:t}function Zy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Zy(e),t!==null)return t;e=e.sibling}return null}function si(e,t,n,i,a,r){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,r)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&si(e.child,t,n,i,a,r))return!0;e=e.sibling}return!1}function Ds(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ox(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Ky(e){var t=[null,null],n=Ds(e);return n===null||Jy(t,e,n.child,{foundSelf:!1}),t}function Jy(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Jy(e,t,n.child,i))return!0;n=n.sibling}return!1}function on(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(nt(559))}}var go=null,Tm=null;function sE(e,t,n){return e===n?!0:e===t?(go=e,!0):!1}function oE(e,t,n){return e===n?(Tm=e,!1):e===t?(Tm!==null&&(go=e),!0):!1}function lx(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Em(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var r=t;r;r=n(r))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Re=Object.assign,lE=Symbol.for("react.element"),Hu=Symbol.for("react.transitional.element"),Ql=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),Qy=Symbol.for("react.consumer"),xa=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Cm=Symbol.for("react.suspense_list"),O0=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Rm=Symbol.for("react.activity"),cE=Symbol.for("react.legacy_hidden"),uE=Symbol.for("react.memo_cache_sentinel"),Nm=Symbol.for("react.view_transition"),hE=Symbol.for("react.recoverable"),cx=Symbol.iterator;function ql(e){return e===null||typeof e!="object"?null:(e=cx&&e[cx]||e["@@iterator"],typeof e=="function"?e:null)}var fE=Symbol.for("react.client.reference");function Dm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vo:return"Fragment";case wm:return"Profiler";case jy:return"StrictMode";case Am:return"Suspense";case Cm:return"SuspenseList";case Rm:return"Activity";case Nm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ql:return"Portal";case xa:return e.displayName||"Context";case Qy:return(e._context.displayName||"Context")+".Consumer";case P0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O0:return t=e.displayName||null,t!==null?t:Dm(e.type)||"Memo";case vr:t=e._payload,e=e._init;try{return Dm(e(t))}catch{}}return null}var $l=Array.isArray,kt=Xy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=aE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_s={pending:!1,data:null,method:null,action:null},Um=[],_o=-1;function wa(e){return{current:e}}function wn(e){0>_o||(e.current=Um[_o],Um[_o]=null,_o--)}function Pe(e,t){_o++,Um[_o]=e.current,e.current=t}var Ma=wa(null),gc=wa(null),wr=wa(null),Ah=wa(null);function Ch(e,t){switch(Pe(wr,t),Pe(gc,e),Pe(Ma,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?My(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=My(t),e=yS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}wn(Ma),Pe(Ma,e)}function Bo(){wn(Ma),wn(gc),wn(wr)}function Lm(e){var t=e.memoizedState;t!==null&&(Zo._currentValue=t.memoizedState,Pe(Ah,e)),t=Ma.current;var n=yS(t,e.type);t!==n&&(Pe(gc,e),Pe(Ma,n))}function Rh(e){gc.current===e&&(wn(Ma),wn(gc)),Ah.current===e&&(wn(Ah),Zo._currentValue=_s)}var Yp,ux;function mr(e){if(Yp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yp=t&&t[1]||"",ux=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yp+e+ux}var Zp=!1;function Kp(e,t){if(!e||Zp)return"";Zp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(m){var u=m}Reflect.construct(e,[],p)}else{try{p.call()}catch(m){u=m}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(m){u=m}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(m){if(m&&u&&typeof m.stack=="string")return[m.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Zp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?mr(n):""}function dE(e,t){switch(e.tag){case 26:case 27:case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return e.child!==t&&t!==null?mr("Suspense Fallback"):mr("Suspense");case 19:return mr("SuspenseList");case 0:case 15:return Kp(e.type,!1);case 11:return Kp(e.type.render,!1);case 1:return Kp(e.type,!0);case 31:return mr("Activity");case 30:return mr("ViewTransition");default:return""}}function hx(e){try{var t="",n=null;do t+=dE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Im=Object.prototype.hasOwnProperty,z0=ln.unstable_scheduleCallback,Jp=ln.unstable_cancelCallback,pE=ln.unstable_shouldYield,mE=ln.unstable_requestPaint,vi=ln.unstable_now,gE=ln.unstable_getCurrentPriorityLevel,$y=ln.unstable_ImmediatePriority,tb=ln.unstable_UserBlockingPriority,Nh=ln.unstable_NormalPriority,vE=ln.unstable_LowPriority,eb=ln.unstable_IdlePriority,_E=ln.log,xE=ln.unstable_setDisableYieldValue,Lc=null,_i=null;function yr(e){if(typeof _E=="function"&&xE(e),_i&&typeof _i.setStrictMode=="function")try{_i.setStrictMode(Lc,e)}catch{}}var xi=Math.clz32?Math.clz32:SE,yE=Math.log,bE=Math.LN2;function SE(e){return e>>>=0,e===0?32:31-(yE(e)/bE|0)|0}var Vu=256,Gu=262144,Xu=4194304;function ds(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=ds(i):(s&=o,s!==0?a=ds(s):n||(n=o&~e,n!==0&&(a=ds(n))))):(o=i&~r,o!==0?a=ds(o):s!==0?a=ds(s):n||(n=i&~e,n!==0&&(a=ds(n)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ic(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nb(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-xi(n),a=1<<i;t|=e[i],n&=~a}return t}function ME(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ib(){var e=Xu;return Xu<<=1,(Xu&62914560)===0&&(Xu=4194304),e}function jp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function TE(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-xi(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&ab(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function ab(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function rb(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-xi(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function sb(e,t){var n=t&-t;return n=(n&42)!==0?1:B0(n),(n&(e.suspendedLanes|t))!==0?0:n}function B0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function F0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ob(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:VS(e.type))}function fx(e,t){var n=pe.p;try{return pe.p=e,t()}finally{pe.p=n}}var ja=Math.random().toString(36).slice(2),Tn="__reactFiber$"+ja,oi="__reactProps$"+ja,jo="__reactContainer$"+ja,dx="__reactEvents$"+ja,EE="__reactListeners$"+ja,wE="__reactHandles$"+ja,px="__reactResources$"+ja,Oc="__reactMarker$"+ja,Dh="__reactLoad$"+ja;function af(e){delete e[Tn],delete e[oi],delete e[EE],delete e[wE]}function gs(e){var t;if(t=e[Tn])return t;for(var n=e.parentNode;n;){if(t=n[jo]||n[Tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dy(e);e!==null;){if(n=e[Tn])return n;e=Dy(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){if(e=e[Tn]||e[jo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(nt(33))}function Co(e){var t=e[px];return t||(t=e[px]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gn(e){e[Oc]=!0}function lb(e){e[Dh]=void 0}var cb=new Set,ub={};function Us(e,t){Fo(e,t),Fo(e+"Capture",t)}function Fo(e,t){for(ub[e]=t,e=0;e<t.length;e++)cb.add(t[e])}var AE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mx={},gx={};function CE(e){return Im.call(gx,e)?!0:Im.call(mx,e)?!1:AE.test(e)?gx[e]=!0:(mx[e]=!0,!1)}var fe=!1;function vx(){var e=fe;return fe=!1,e}function lh(e,t,n){if(CE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Wu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Fa(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function di(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function RE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pm(e){if(!e._valueTracker){var t=hb(e)?"checked":"value";e._valueTracker=RE(e,t,""+e[t])}}function fb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hb(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var NE=/[\n"\\]/g;function Oi(e){return e.replace(NE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Om(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+di(t)):e.value!==""+di(t)&&(e.value=""+di(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?s==="number"&&e.value==t?Qp(e,di(e.value)):Qp(e,di(t)):n!=null?Qp(e,di(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+di(o):e.removeAttribute("name")}function db(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Pm(e);return}n=n!=null?""+di(n):"",t=t!=null?""+di(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Pm(e)}function Qp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ro(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+di(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function pb(e,t,n){if(t!=null&&(t=""+di(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+di(n):""}function mb(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(nt(92));if($l(i)){if(1<i.length)throw Error(nt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=di(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Pm(e)}function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var DE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _x(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||DE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gb(e,t,n){if(t!=null&&typeof t!="object")throw Error(nt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",fe=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(_x(e,a,i),fe=!0)}else for(var r in t)t.hasOwnProperty(r)&&_x(e,r,t[r])}function k0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var UE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),LE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ch(e){return LE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var zm=null;function H0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,No=null;function xx(e){var t=Qo(e);if(t&&(e=t.stateNode)){var n=e[oi]||null;t:switch(e=t.stateNode,t.type){case"input":if(Om(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Oi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[oi]||null;if(!a)throw Error(nt(90));Om(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fb(i)}break t;case"textarea":pb(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ro(e,!!n.multiple,t,!1)}}}var $p=!1;function vb(e,t,n){if($p)return e(t,n);$p=!0;try{var i=e(t);return i}finally{if($p=!1,(xo!==null||No!==null)&&(_f(),xo&&(t=xo,e=No,No=xo=null,xx(t),e)))for(t=0;t<e.length;t++)xx(e[t])}}function vc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[oi]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(nt(231,t,typeof n));return n}var Wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bm=!1;if(Wa)try{co={},Object.defineProperty(co,"passive",{get:function(){Bm=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Bm=!1}var co,br=null,V0=null,uh=null;function _b(){if(uh)return uh;var e,t=V0,n=t.length,i,a="value"in br?br.value:br.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return uh=a.slice(e,1<i?1-i:void 0)}function hh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qu(){return!0}function yx(){return!1}function Zn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qu:yx,this.isPropagationStopped=yx,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=Zn(Hr),zc=Re({},Hr,{view:0,detail:0}),IE=Zn(zc),tm,em,Yl,sf=Re({},zc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:G0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(tm=e.screenX-Yl.screenX,em=e.screenY-Yl.screenY):em=tm=0,Yl=e),tm)},movementY:function(e){return"movementY"in e?e.movementY:em}}),bx=Zn(sf),PE=Re({},sf,{dataTransfer:0}),OE=Zn(PE),zE=Re({},zc,{relatedTarget:0}),nm=Zn(zE),BE=Re({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=Zn(BE),kE=Re({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),HE=Zn(kE),VE=Re({},Hr,{data:0}),Sx=Zn(VE),GE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=WE[e])?!!t[e]:!1}function G0(){return qE}var YE=Re({},zc,{key:function(e){if(e.key){var t=GE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?XE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:G0,charCode:function(e){return e.type==="keypress"?hh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZE=Zn(YE),KE=Re({},sf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mx=Zn(KE),JE=Re({},Hr,{submitter:0}),jE=Zn(JE),QE=Re({},zc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:G0}),$E=Zn(QE),tw=Re({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ew=Zn(tw),nw=Re({},sf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=Zn(nw),aw=Re({},Hr,{newState:0,oldState:0,source:0}),rw=Zn(aw),sw=[9,13,27,32],X0=Wa&&"CompositionEvent"in window,ic=null;Wa&&"documentMode"in document&&(ic=document.documentMode);var ow=Wa&&"TextEvent"in window&&!ic,xb=Wa&&(!X0||ic&&8<ic&&11>=ic),Tx=" ",Ex=!1;function yb(e,t){switch(e){case"keyup":return sw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yo=!1;function lw(e,t){switch(e){case"compositionend":return bb(t);case"keypress":return t.which!==32?null:(Ex=!0,Tx);case"textInput":return e=t.data,e===Tx&&Ex?null:e;default:return null}}function cw(e,t){if(yo)return e==="compositionend"||!X0&&yb(e,t)?(e=_b(),uh=V0=br=null,yo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xb&&t.locale!=="ko"?null:t.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uw[e.type]:t==="textarea"}function Sb(e,t,n,i){xo?No?No.push(i):No=[i]:xo=i,t=$h(t,"onChange"),0<t.length&&(n=new rf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ac=null,_c=null;function hw(e){vS(e,0)}function of(e){var t=tc(e);if(fb(t))return e}function Ax(e,t){if(e==="change")return t}var Mb=!1;Wa&&(Wa?(Zu="oninput"in document,Zu||(im=document.createElement("div"),im.setAttribute("oninput","return;"),Zu=typeof im.oninput=="function"),Yu=Zu):Yu=!1,Mb=Yu&&(!document.documentMode||9<document.documentMode));var Yu,Zu,im;function Cx(){ac&&(ac.detachEvent("onpropertychange",Tb),_c=ac=null)}function Tb(e){if(e.propertyName==="value"&&of(_c)){var t=[];Sb(t,_c,e,H0(e)),vb(hw,t)}}function fw(e,t,n){e==="focusin"?(Cx(),ac=t,_c=n,ac.attachEvent("onpropertychange",Tb)):e==="focusout"&&Cx()}function dw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return of(_c)}function pw(e,t){if(e==="click")return of(t)}function mw(e,t){if(e==="input"||e==="change")return of(t)}function gw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bi=typeof Object.is=="function"?Object.is:gw;function xc(e,t){if(bi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Im.call(t,a)||!bi(e[a],t[a]))return!1}return!0}function Fm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nx(e,t){var n=Rx(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Rx(n)}}function Eb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wb(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fm(e.document)}return t}function W0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vw=Wa&&"documentMode"in document&&11>=document.documentMode,bo=null,km=null,rc=null,Hm=!1;function Dx(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hm||bo==null||bo!==Fm(i)||(i=bo,"selectionStart"in i&&W0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),rc&&xc(rc,i)||(rc=i,i=$h(km,"onSelect"),0<i.length&&(t=new rf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=bo)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var So={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},am={},Ab={};Wa&&(Ab=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Ls(e){if(am[e])return am[e];if(!So[e])return e;var t=So[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ab)return am[e]=t[n];return e}var Cb=Ls("animationend"),Rb=Ls("animationiteration"),Nb=Ls("animationstart"),_w=Ls("transitionrun"),xw=Ls("transitionstart"),yw=Ls("transitioncancel"),Db=Ls("transitionend"),Ub=new Map,Vm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vm.push("scrollEnd");function Ji(e,t){Ub.set(e,t),Us(t,[e])}var bw=0;function qa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ki.identifierPrefix;var n=bw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Ux(e){if(e==null||typeof e=="string")return e;var t=null,n=zo;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Qa(e,t){return e=Ux(e),t=Ux(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Uh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Li=[],Mo=0,q0=0;function lf(){for(var e=Mo,t=q0=Mo=0;t<e;){var n=Li[t];Li[t++]=null;var i=Li[t];Li[t++]=null;var a=Li[t];Li[t++]=null;var r=Li[t];if(Li[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&Lb(n,a,r)}}function cf(e,t,n,i){Li[Mo++]=e,Li[Mo++]=t,Li[Mo++]=n,Li[Mo++]=i,q0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Y0(e,t,n,i){return cf(e,t,n,i),Lh(e)}function Is(e,t){return cf(e,null,null,t),Lh(e)}function Lb(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-xi(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function Lh(e){if(50<mc)throw mc=0,bh=null,Error(nt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var To={};function Sw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,t,n,i){return new Sw(e,t,n,i)}function Z0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ga(e,t){var n=e.alternate;return n===null?(n=ai(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ib(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fh(e,t,n,i,a,r){var s=0;if(i=e,typeof i=="function")Z0(i)&&(s=1);else if(typeof i=="string")s=ZA(e,n,Ma.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Rm:return e=ai(31,n,t,a),e.elementType=Rm,e.lanes=r,e;case vo:return xs(n.children,a,r,t);case jy:s=8,a|=24;break;case wm:return e=ai(12,n,t,a|2),e.elementType=wm,e.lanes=r,e;case Am:return e=ai(13,n,t,a),e.elementType=Am,e.lanes=r,e;case Cm:return e=ai(19,n,t,a),e.elementType=Cm,e.lanes=r,e;case cE:case Nm:return e=a|32,e=ai(30,n,t,e),e.elementType=Nm,e.lanes=r,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case xa:s=10;break t;case Qy:s=9;break t;case P0:s=11;break t;case O0:s=14;break t;case vr:s=16,i=null;break t}s=29,n=Error(nt(130,e===null?"null":typeof e,"")),i=null}return t=ai(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function xs(e,t,n,i){return e=ai(7,e,i,t),e.lanes=n,e}function rm(e,t,n){return e=ai(6,e,null,t),e.lanes=n,e}function Pb(e){var t=ai(18,null,null,0);return t.stateNode=e,t}function sm(e,t,n){return t=ai(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Lx=new WeakMap;function zi(e,t){if(typeof e=="object"&&e!==null){var n=Lx.get(e);return n!==void 0?n:(t={value:e,source:t,stack:hx(t)},Lx.set(e,t),t)}return{value:e,source:t,stack:hx(t)}}var Eo=[],wo=0,Ih=null,yc=0,Ii=[],Pi=0,Or=null,ba=1,Sa="";function Ha(e,t){Eo[wo++]=yc,Eo[wo++]=Ih,Ih=e,yc=t}function Ob(e,t,n){Ii[Pi++]=ba,Ii[Pi++]=Sa,Ii[Pi++]=Or,Or=e;var i=ba;e=Sa;var a=32-xi(i)-1;i&=~(1<<a),n+=1;var r=32-xi(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,ba=1<<32-xi(t)+a|n<<a|i,Sa=r+e}else ba=1<<r|n<<a|i,Sa=e}function uf(e){e.return!==null&&(Ha(e,1),Ob(e,1,0))}function K0(e){for(;e===Ih;)Ih=Eo[--wo],Eo[wo]=null,yc=Eo[--wo],Eo[wo]=null;for(;e===Or;)Or=Ii[--Pi],Ii[Pi]=null,Sa=Ii[--Pi],Ii[Pi]=null,ba=Ii[--Pi],Ii[Pi]=null}function zb(e,t){Ii[Pi++]=ba,Ii[Pi++]=Sa,Ii[Pi++]=Or,ba=t.id,Sa=t.overflow,Or=e}var vn=null,Ie=null,Qt=!1,Ar=null,Bi=!1,Gm=Error(nt(519));function zr(e){var t=Error(nt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bc(zi(t,e)),Gm}function Ix(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Tn]=e,t[oi]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<Ec.length;n++)ne(Ec[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),db(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),mb(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||xS(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=ya),t=!0):t=!1,t||zr(e,!0)}function Ph(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:vn=vn.return}}function uo(e){if(e!==vn)return!1;if(!Qt)return Ph(e),Qt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||A0(e.type,e.memoizedProps)),n=!n),n&&Ie&&zr(e),Ph(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Ie=Ny(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Ie=Ny(e)}else t===27?(t=Ie,Vr(e.type)?(e=D0,D0=null,Ie=e):Ie=t):Ie=vn?Fi(e.stateNode.nextSibling):null;return!0}function Ms(){Ie=vn=null,Qt=!1}function om(){var e=Ar;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ar=null),e}function bc(e){Ar===null?Ar=[e]:Ar.push(e)}var Xm=wa(null),Ps=null,Va=null;function Sr(e,t,n){Pe(Xm,t._currentValue),t._currentValue=n}function Xa(e){e._currentValue=Xm.current,wn(Xm)}function dh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Wm(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),dh(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(nt(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),dh(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),dh(a.return,n,e),s=a.child,s=s!==null?s.sibling:null):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ts(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if((a.flags&524288)!==0)r=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(nt(387));if(s=s.memoizedProps,s!==null){var o=a.type;bi(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Ah.current){if(s=a.alternate,s===null)throw Error(nt(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}a=a.return}return e!==null&&Wm(t,e,n,i),t.flags|=262144,e!==null}function Oh(e){for(e=e.firstContext;e!==null;){if(!bi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ps=e,Va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Bb(Ps,e)}function Ku(e,t){return Ps===null&&Es(e),Bb(e,t)}function Bb(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Va===null){if(e===null)throw Error(nt(308));Va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Va=Va.next=t;return n}var Mw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Tw=ln.unstable_scheduleCallback,Ew=ln.unstable_NormalPriority,tn={$$typeof:xa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function J0(){return{controller:new Mw,data:new Map,refCount:0}}function Bc(e){e.refCount--,e.refCount===0&&Tw(Ew,function(){e.controller.abort()})}function Px(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var ec=null;function ww(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var sc=null,qm=0,ws=0,Do=null;function Aw(e,t){if(sc===null){var n=sc=[];qm=0,ws=Tg(),Do={status:"pending",value:void 0,then:function(i){n.push(i)}}}return qm++,t.then(Ox,Ox),t}function Ox(){if(--qm===0&&(ec=null,sc!==null)){Do!==null&&(Do.status="fulfilled");var e=sc;sc=null,ws=0,Do=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var zx=kt.S;kt.S=function(e,t){if(nS=vi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Aw(e,t),ec!==null)for(var n=Wo;n!==null;)Px(n,ec),n=n.next;if(n=e.types,n!==null){for(var i=Wo;i!==null;)Px(i,n),i=i.next;if(ws!==0){i=ec,i===null&&(i=ec=[]);for(var a=0;a<n.length;a++){var r=n[a];i.indexOf(r)===-1&&i.push(r)}}}zx!==null&&zx(e,t)};var ys=wa(null);function j0(){var e=ys.current;return e!==null?e:Ce.pooledCache}function ph(e,t){t===null?Pe(ys,ys.current):Pe(ys,t.pool)}function Fb(){var e=j0();return e===null?null:{parent:tn._currentValue,pool:e}}var $o=Error(nt(460)),Q0=Error(nt(474)),hf=Error(nt(542)),zh={then:function(){}};function Bx(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kb(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ya,ya),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kx(e),e===void 0&&!("reason"in t)?Error(nt(600)):e;default:if(typeof t.status=="string")t.then(ya,ya);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(nt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kx(e),e}throw bs=t,$o}}function ps(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(bs=n,$o):n}}var bs=null;function Fx(){if(bs===null)throw Error(nt(459));var e=bs;return bs=null,e}function kx(e){if(e===$o||e===hf)throw Error(nt(483))}var Uo=null,Sc=0;function Ju(e){var t=Sc;return Sc+=1,Uo===null&&(Uo=[]),kb(Uo,e,t)}function pr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ju(e,t){throw t.$$typeof===lE?Error(nt(525)):(e=Object.prototype.toString.call(t),Error(nt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hb(e){function t(f,v){if(e){var b=f.deletions;b===null?(f.deletions=[v],f.flags|=16):b.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function a(f,v){return f=Ga(f,v),f.index=0,f.sibling=null,f}function r(f,v,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<v?(f.flags|=2,v):b):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function s(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,b,_){return v===null||v.tag!==6?(v=rm(b,f.mode,_),v.return=f,v):(v=a(v,b),v.return=f,v)}function l(f,v,b,_){var M=b.type;return M===vo?(f=h(f,v,b.props.children,_,b.key),pr(f,b),f):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===vr&&ps(M)===v.type)?(v=a(v,b.props),pr(v,b),v.return=f,v):(v=fh(b.type,b.key,b.props,null,f.mode,_),pr(v,b),v.return=f,v)}function c(f,v,b,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=sm(b,f.mode,_),v.return=f,v):(v=a(v,b.children||[]),v.return=f,v)}function h(f,v,b,_,M){return v===null||v.tag!==7?(v=xs(b,f.mode,_,M),v.return=f,v):(v=a(v,b),v.return=f,v)}function p(f,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=rm(""+v,f.mode,b),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hu:return b=fh(v.type,v.key,v.props,null,f.mode,b),pr(b,v),b.return=f,b;case Ql:return v=sm(v,f.mode,b),v.return=f,v;case vr:return v=ps(v),p(f,v,b)}if($l(v)||ql(v))return v=xs(v,f.mode,b,null),v.return=f,v;if(typeof v.then=="function")return p(f,Ju(v),b);if(v.$$typeof===xa)return p(f,Ku(f,v),b);ju(f,v)}return null}function u(f,v,b,_){var M=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return M!==null?null:o(f,v,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Hu:return b.key===M?l(f,v,b,_):null;case Ql:return b.key===M?c(f,v,b,_):null;case vr:return b=ps(b),u(f,v,b,_)}if($l(b)||ql(b))return M!==null?null:h(f,v,b,_,null);if(typeof b.then=="function")return u(f,v,Ju(b),_);if(b.$$typeof===xa)return u(f,v,Ku(f,b),_);ju(f,b)}return null}function d(f,v,b,_,M){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(b)||null,o(v,f,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hu:return f=f.get(_.key===null?b:_.key)||null,l(v,f,_,M);case Ql:return f=f.get(_.key===null?b:_.key)||null,c(v,f,_,M);case vr:return _=ps(_),d(f,v,b,_,M)}if($l(_)||ql(_))return f=f.get(b)||null,h(v,f,_,M,null);if(typeof _.then=="function")return d(f,v,b,Ju(_),M);if(_.$$typeof===xa)return d(f,v,b,Ku(v,_),M);ju(v,_)}return null}function m(f,v,b,_){for(var M=null,T=null,w=v,x=v=0,A=null;w!==null&&x<b.length;x++){w.index>x?(A=w,w=null):A=w.sibling;var N=u(f,w,b[x],_);if(N===null){w===null&&(w=A);break}e&&w&&N.alternate===null&&t(f,w),v=r(N,v,x),T===null?M=N:T.sibling=N,T=N,w=A}if(x===b.length)return n(f,w),Qt&&Ha(f,x),M;if(w===null){for(;x<b.length;x++)w=p(f,b[x],_),w!==null&&(v=r(w,v,x),T===null?M=w:T.sibling=w,T=w);return Qt&&Ha(f,x),M}for(w=i(w);x<b.length;x++)A=d(w,f,x,b[x],_),A!==null&&(e&&(N=A.alternate,N!==null&&w.delete(N.key===null?x:N.key)),v=r(A,v,x),T===null?M=A:T.sibling=A,T=A);return e&&w.forEach(function(L){return t(f,L)}),Qt&&Ha(f,x),M}function S(f,v,b,_){if(b==null)throw Error(nt(151));for(var M=null,T=null,w=v,x=v=0,A=null,N=b.next();w!==null&&!N.done;x++,N=b.next()){w.index>x?(A=w,w=null):A=w.sibling;var L=u(f,w,N.value,_);if(L===null){w===null&&(w=A);break}e&&w&&L.alternate===null&&t(f,w),v=r(L,v,x),T===null?M=L:T.sibling=L,T=L,w=A}if(N.done)return n(f,w),Qt&&Ha(f,x),M;if(w===null){for(;!N.done;x++,N=b.next())N=p(f,N.value,_),N!==null&&(v=r(N,v,x),T===null?M=N:T.sibling=N,T=N);return Qt&&Ha(f,x),M}for(w=i(w);!N.done;x++,N=b.next())N=d(w,f,x,N.value,_),N!==null&&(e&&(A=N.alternate,A!==null&&w.delete(A.key===null?x:A.key)),v=r(N,v,x),T===null?M=N:T.sibling=N,T=N);return e&&w.forEach(function(D){return t(f,D)}),Qt&&Ha(f,x),M}function g(f,v,b,_){if(typeof b=="object"&&b!==null&&b.type===vo&&b.key===null&&b.props.ref===void 0&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Hu:t:{for(var M=b.key;v!==null;){if(v.key===M){if(M=b.type,M===vo){if(v.tag===7){n(f,v.sibling),_=a(v,b.props.children),pr(_,b),_.return=f,f=_;break t}}else if(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===vr&&ps(M)===v.type){n(f,v.sibling),_=a(v,b.props),pr(_,b),_.return=f,f=_;break t}n(f,v);break}else t(f,v);v=v.sibling}b.type===vo?(_=xs(b.props.children,f.mode,_,b.key),pr(_,b),_.return=f,f=_):(_=fh(b.type,b.key,b.props,null,f.mode,_),pr(_,b),_.return=f,f=_)}return s(f);case Ql:t:{for(M=b.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(f,v.sibling),_=a(v,b.children||[]),_.return=f,f=_;break t}else{n(f,v);break}else t(f,v);v=v.sibling}_=sm(b,f.mode,_),_.return=f,f=_}return s(f);case vr:return b=ps(b),g(f,v,b,_)}if($l(b))return m(f,v,b,_);if(ql(b)){if(M=ql(b),typeof M!="function")throw Error(nt(150));return b=M.call(b),S(f,v,b,_)}if(typeof b.then=="function")return g(f,v,Ju(b),_);if(b.$$typeof===xa)return g(f,v,Ku(f,b),_);ju(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,v!==null&&v.tag===6?(n(f,v.sibling),_=a(v,b),_.return=f,f=_):(n(f,v),_=rm(b,f.mode,_),_.return=f,f=_),s(f)):n(f,v)}return function(f,v,b,_){try{Sc=0;var M=g(f,v,b,_);return Uo=null,M}catch(w){if(w===$o||w===hf)throw w;var T=ai(29,w,null,f.mode);return T.lanes=_,T.return=f,T}}}var As=Hb(!0),Vb=Hb(!1),_r=!1;function $0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Lh(e),Lb(e,null,n),t}return cf(e,i,t,n),Lh(e)}function oc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rb(e,n)}}function lm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Zm=!1;function lc(){if(Zm){var e=Do;if(e!==null)throw e}}function cc(e,t,n,i){Zm=!1;var a=e.updateQueue;_r=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,h=c=l=null,o=r;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ae&u)===u:(i&u)===u){u!==0&&u===ws&&(Zm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var m=e,S=o;u=t;var g=n;switch(S.tag){case 1:if(m=S.payload,typeof m=="function"){p=m.call(g,p,u);break t}p=m;break t;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,u=typeof m=="function"?m.call(g,p,u):m,u==null)break t;p=Re({},p,u);break t;case 2:_r=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),kr|=s,e.lanes=s,e.memoizedState=p}}function Gb(e,t){if(typeof e!="function")throw Error(nt(191,e));e.call(t)}function Xb(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Gb(n[e],t)}var Br=wa(null),Bh=wa(0);function Hx(e,t){e=Ja,Pe(Bh,e),Pe(Br,t),Ja=e|t.baseLanes}function Km(){Pe(Bh,Ja),Pe(Br,Br.current)}function tg(){Ja=Bh.current,wn(Br),wn(Bh)}var Rn=wa(null),On=null;function Nr(e){var t=e.alternate;Pe(An,An.current&1),Pe(Rn,e),On===null&&(t===null||Br.current!==null||t.memoizedState!==null)&&(On=e)}function Jm(e){Pe(An,An.current),Pe(Rn,e),On===null&&(On=e)}function Wb(e){e.tag===22?(Pe(An,An.current),Pe(Rn,e),On===null&&(On=e)):Dr()}function Dr(){Pe(An,An.current),Pe(Rn,Rn.current)}function pi(e){wn(Rn),On===e&&(On=null),wn(An)}var An=wa(0);function Mc(e,t){Pe(Rn,Rn.current),Pe(An,t)}function eg(e){wn(An),wn(Rn),On===e&&(On=null)}function Fh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||N0(n)||Cg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=0,Yt=null,we=null,$e=null,kh=!1,Lo=!1,Cs=!1,Hh=0,Tc=0,Io=null,Rw=0;function We(){throw Error(nt(321))}function ng(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bi(e[n],t[n]))return!1;return!0}function ig(e,t,n,i,a,r){return Ya=r,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kt.H=e===null||e.memoizedState===null?S1:M1,Cs=!1,r=n(i,a),Cs=!1,Lo&&(r=Yb(t,n,i,a)),qb(e),r}function qb(e){kt.H=Vh;var t=we!==null&&we.next!==null;if(Ya=0,$e=we=Yt=null,kh=!1,Tc=0,Io=null,t)throw Error(nt(300));e===null||en||(e=e.dependencies,e!==null&&Oh(e)&&(en=!0))}function Yb(e,t,n,i){Yt=e;var a=0;do{if(Lo&&(Io=null),Tc=0,Lo=!1,25<=a)throw Error(nt(301));if(a+=1,$e=we=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}kt.H=zw,r=t(n,i)}while(Lo);return r}function Nw(){var e=kt.H,t=e.useState()[0];return t=typeof t.then=="function"?Fc(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(Yt.flags|=1024),t}function ag(){var e=Hh!==0;return Hh=0,e}function rg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sg(e){if(kh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}kh=!1}Ya=0,$e=we=Yt=null,Lo=!1,Tc=Hh=0,Io=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Yt.memoizedState=$e=e:$e=$e.next=e,$e}function Je(){if(we===null){var e=Yt.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=$e===null?Yt.memoizedState:$e.next;if(t!==null)$e=t,we=e;else{if(e===null)throw Yt.alternate===null?Error(nt(467)):Error(nt(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},$e===null?Yt.memoizedState=$e=e:$e=$e.next=e}return $e}function ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fc(e){var t=Tc;return Tc+=1,Io===null&&(Io=[]),e=kb(Io,e,t),t=Yt,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,kt.H=t===null||t.memoizedState===null?S1:M1),e}function df(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fc(e);if(e.$$typeof===hE)return;if(e.$$typeof===xa)return En(e)}throw Error(nt(438,String(e)))}function og(e){var t=null,n=Yt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ff(),Yt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=uE;return t.index++,n}function Za(e,t){return typeof t=="function"?t(e):t}function mh(e){var t=Je();return lg(t,we,e)}function lg(e,t,n){var i=e.queue;if(i===null)throw Error(nt(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ae&p)===p:(Ya&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===ws&&(h=!0);else if((Ya&u)===u){c=c.next,u===ws&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,s=r):l=l.next=p,Yt.lanes|=u,kr|=u;p=c.action,Cs&&n(r,p),r=c.hasEagerState?c.eagerState:n(r,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,Yt.lanes|=p,kr|=p;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!bi(r,e.memoizedState)&&(en=!0,h&&(n=Do,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function cm(e){var t=Je(),n=t.queue;if(n===null)throw Error(nt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);bi(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Zb(e,t,n){var i=Yt,a=Je(),r=Qt;if(r){if(n===void 0)throw Error(nt(407));n=n()}else n=t();var s=!bi((we||a).memoizedState,n);if(s&&(a.memoizedState=n,en=!0),a=a.queue,cg(jb.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||s||$e!==null&&($e.memoizedState.tag&1)!==0,Ho(e?9:8,{destroy:void 0},Jb.bind(null,i,a,n,t),null),e){if(i.flags|=2048,Ce===null)throw Error(nt(349));r||(Ya&127)!==0||Kb(i,t,n)}return n}function Kb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Yt.updateQueue,t===null?(t=ff(),Yt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jb(e,t,n,i){t.value=n,t.getSnapshot=i,Qb(t)&&$b(e)}function jb(e,t,n){return n(function(){Qb(t)&&$b(e)})}function Qb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bi(e,n)}catch{return!0}}function $b(e){var t=Is(e,2);t!==null&&ri(t,e,2)}function jm(e){var t=Yn();if(typeof e=="function"){var n=e;if(e=n(),Cs){yr(!0);try{n()}finally{yr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},t}function t1(e,t,n,i){return e.baseState=n,lg(e,we,typeof i=="function"?i:Za)}function Dw(e,t,n,i,a){if(mf(e))throw Error(nt(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};kt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,e1(t,r)):(r.next=n.next,t.pending=n.next=r)}}function e1(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=kt.T,s={};s.types=r!==null?r.types:null,kt.T=s;try{var o=n(a,i),l=kt.S;l!==null&&l(s,o),Vx(e,t,o)}catch(c){Qm(e,t,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),kt.T=r}}else try{r=n(a,i),Vx(e,t,r)}catch(c){Qm(e,t,c)}}function Vx(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Gx(e,t,i)},function(i){return Qm(e,t,i)}):Gx(e,t,n)}function Gx(e,t,n){t.status="fulfilled",t.value=n,n1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,e1(e,n)))}function Qm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,n1(t),t=t.next;while(t!==i)}e.action=null}function n1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function i1(e,t){return t}function Xx(e,t){if(Qt){var n=Ce.formState;if(n!==null){t:{var i=Yt;if(Qt){if(Ie){e:{for(var a=Ie,r=Bi;a.nodeType!==8;){if(!r){a=null;break e}if(a=Fi(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ie=Fi(a.nextSibling),i=a.data==="F!";break t}}zr(i)}i=!1}i&&(t=n[0])}}return n=Yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i1,lastRenderedState:t},n.queue=i,n=x1.bind(null,Yt,i),i.dispatch=n,i=jm(!1),r=dg.bind(null,Yt,!1,i.queue),i=Yn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Dw.bind(null,Yt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Wx(e){var t=Je();return a1(t,we,e)}function a1(e,t,n){if(t=lg(e,t,i1)[0],e=mh(Za)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Fc(t)}catch(s){throw s===$o?hf:s}else i=t;t=Je();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Yt.flags|=2048,Ho(9,{destroy:void 0},Uw.bind(null,a,n),null)),[i,r,e]}function Uw(e,t){e.action=t}function qx(e){var t=Je(),n=we;if(n!==null)return a1(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ho(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Yt.updateQueue,t===null&&(t=ff(),Yt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function r1(){return Je().memoizedState}function gh(e,t,n,i){var a=Yn();Yt.flags|=e,a.memoizedState=Ho(1|t,{destroy:void 0},n,i===void 0?null:i)}function pf(e,t,n,i){var a=Je();i=i===void 0?null:i;var r=a.memoizedState.inst;we!==null&&i!==null&&ng(i,we.memoizedState.deps)?a.memoizedState=Ho(t,r,n,i):(Yt.flags|=e,a.memoizedState=Ho(1|t,r,n,i))}function Yx(e,t){gh(8390656,8,e,t)}function cg(e,t){pf(2048,8,e,t)}function Lw(e){Yt.flags|=4;var t=Yt.updateQueue;if(t===null)t=ff(),Yt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function s1(e){var t=Je().memoizedState;return Lw({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(nt(440));return t.impl.apply(void 0,arguments)}}function o1(e,t){return pf(4,2,e,t)}function l1(e,t){return pf(4,4,e,t)}function c1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function u1(e,t,n){n=n!=null?n.concat([e]):null,pf(4,4,c1.bind(null,t,e),n)}function ug(){}function h1(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ng(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function f1(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ng(t,i[1]))return i[0];if(i=e(),Cs){yr(!0);try{e()}finally{yr(!1)}}return n.memoizedState=[i,t],i}function hg(e,t,n){return n===void 0||(Ya&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=aS(),Yt.lanes|=e,kr|=e,n)}function d1(e,t,n,i){return bi(n,t)?n:Br.current!==null?(e=hg(e,n,i),bi(e,t)||(en=!0),e):(Ya&106)===0||(Ya&1073741824)!==0&&(ae&261930)===0?(en=!0,e.memoizedState=n):(e=aS(),Yt.lanes|=e,kr|=e,t)}function p1(e,t,n,i,a){var r=pe.p;pe.p=r!==0&&8>r?r:8;var s=kt.T,o={};o.types=s!==null?s.types:null,kt.T=o,dg(e,!1,t,n);try{var l=a(),c=kt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Cw(l,i);uc(e,t,h,yi(e))}else uc(e,t,i,yi(e))}catch(p){uc(e,t,{then:function(){},status:"rejected",reason:p},yi())}finally{pe.p=r,s!==null&&o.types!==null&&(s.types=o.types),kt.T=s}}function Iw(){}function $m(e,t,n,i){if(e.tag!==5)throw Error(nt(476));var a=m1(e).queue;p1(e,a,t,_s,n===null?Iw:function(){return g1(e),n(i)})}function m1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_s,baseState:_s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:_s},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function g1(e){var t=m1(e);t.next===null&&(t=e.alternate.memoizedState),uc(e,t.next.queue,{},yi())}function fg(){return En(Zo)}function v1(){return Je().memoizedState}function _1(){return Je().memoizedState}function Pw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yi();e=Cr(n);var i=Rr(t,e,n);i!==null&&(ri(i,t,n),oc(i,t,n)),t={cache:J0()},e.payload=t;return}t=t.return}}function Ow(e,t,n){var i=yi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mf(e)?y1(t,n):(n=Y0(e,t,n,i),n!==null&&(ri(n,e,i),b1(n,t,i)))}function x1(e,t,n){var i=yi();uc(e,t,n,i)}function uc(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mf(e))y1(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,bi(o,s))return cf(e,t,a,0),Ce===null&&lf(),!1}catch{}if(n=Y0(e,t,a,i),n!==null)return ri(n,e,i),b1(n,t,i),!0}return!1}function dg(e,t,n,i){if(i={lane:2,revertLane:Tg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},mf(e)){if(t)throw Error(nt(479))}else t=Y0(e,n,i,2),t!==null&&ri(t,e,2)}function mf(e){var t=e.alternate;return e===Yt||t!==null&&t===Yt}function y1(e,t){Lo=kh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function b1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rb(e,n)}}var Vh={readContext:En,use:df,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We,useEffectEvent:We},S1={readContext:En,use:df,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:Yx,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gh(4194308,4,c1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gh(4194308,4,e,t)},useInsertionEffect:function(e,t){gh(4,2,e,t)},useMemo:function(e,t){var n=Yn();t=t===void 0?null:t;var i=e();if(Cs){yr(!0);try{e()}finally{yr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Yn();if(n!==void 0){var a=n(t);if(Cs){yr(!0);try{n(t)}finally{yr(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Ow.bind(null,Yt,e),[i.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:function(e){e=jm(e);var t=e.queue,n=x1.bind(null,Yt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ug,useDeferredValue:function(e,t){var n=Yn();return hg(n,e,t)},useTransition:function(){var e=jm(!1);return e=p1.bind(null,Yt,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Yt,a=Yn();if(Qt){if(n===void 0)throw Error(nt(407));n=n()}else{if(n=t(),Ce===null)throw Error(nt(349));(ae&127)!==0||Kb(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Yx(jb.bind(null,i,r,e),[e]),i.flags|=2048,Ho(9,{destroy:void 0},Jb.bind(null,i,r,n,t),null),n},useId:function(){var e=Yn(),t=Ce.identifierPrefix;if(Qt){var n=Sa,i=ba;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Hh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Rw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fg,useFormState:Xx,useActionState:Xx,useOptimistic:function(e){var t=Yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dg.bind(null,Yt,!0,n),n.dispatch=t,[e,t]},useMemoCache:og,useCacheRefresh:function(){return Yn().memoizedState=Pw.bind(null,Yt)},useEffectEvent:function(e){var t=Yn(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(nt(440));return n.impl.apply(void 0,arguments)}}},M1={readContext:En,use:df,useCallback:h1,useContext:En,useEffect:cg,useImperativeHandle:u1,useInsertionEffect:o1,useLayoutEffect:l1,useMemo:f1,useReducer:mh,useRef:r1,useState:function(){return mh(Za)},useDebugValue:ug,useDeferredValue:function(e,t){var n=Je();return d1(n,we.memoizedState,e,t)},useTransition:function(){var e=mh(Za)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Fc(e),t]},useSyncExternalStore:Zb,useId:v1,useHostTransitionStatus:fg,useFormState:Wx,useActionState:Wx,useOptimistic:function(e,t){var n=Je();return t1(n,we,e,t)},useMemoCache:og,useCacheRefresh:_1,useEffectEvent:s1},zw={readContext:En,use:df,useCallback:h1,useContext:En,useEffect:cg,useImperativeHandle:u1,useInsertionEffect:o1,useLayoutEffect:l1,useMemo:f1,useReducer:cm,useRef:r1,useState:function(){return cm(Za)},useDebugValue:ug,useDeferredValue:function(e,t){var n=Je();return we===null?hg(n,e,t):d1(n,we.memoizedState,e,t)},useTransition:function(){var e=cm(Za)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Fc(e),t]},useSyncExternalStore:Zb,useId:v1,useHostTransitionStatus:fg,useFormState:qx,useActionState:qx,useOptimistic:function(e,t){var n=Je();return we!==null?t1(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:og,useCacheRefresh:_1,useEffectEvent:s1};function um(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var t0={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=yi(),a=Cr(i);a.payload=t,n!=null&&(a.callback=n),t=Rr(e,a,i),t!==null&&(ri(t,e,i),oc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=yi(),a=Cr(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Rr(e,a,i),t!==null&&(ri(t,e,i),oc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yi(),i=Cr(n);i.tag=2,t!=null&&(i.callback=t),t=Rr(e,i,n),t!==null&&(ri(t,e,n),oc(t,e,n))}};function Zx(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!xc(n,i)||!xc(a,r):!0}function Kx(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&t0.enqueueReplaceState(t,t.state,null)}function Rs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Re({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function T1(e){Uh(e)}function E1(e){console.error(e)}function w1(e){Uh(e)}function Gh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Jx(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function e0(e,t,n){return n=Cr(n),n.tag=3,n.payload={element:null},n.callback=function(){Gh(e,t)},n}function A1(e){return e=Cr(e),e.tag=3,e}function C1(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Jx(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Jx(t,n,i),typeof a!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Bw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ts(t,n,a,!0),n=Rn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return On===null?jh():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===zh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),vm(e,i,a)),!1;case 22:return n.flags|=65536,i===zh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),vm(e,i,a)),!1}throw Error(nt(435,n.tag))}return vm(e,i,a),jh(),!1}if(Qt)return t=Rn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Gm&&(e=Error(nt(422),{cause:i}),bc(zi(e,n)))):(i!==Gm&&(t=Error(nt(423),{cause:i}),bc(zi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=zi(i,n),a=e0(e.stateNode,i,a),lm(e,a),qe!==4&&(qe=2)),!1;var r=Error(nt(520),{cause:i});if(r=zi(r,n),pc===null?pc=[r]:pc.push(r),qe!==4&&(qe=2),t===null)return!0;i=zi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=e0(n.stateNode,i,e),lm(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=A1(a),C1(a,e,n,i),lm(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var pg=Error(nt(461)),en=!1;function sn(e,t,n,i){t.child=e===null?Vb(t,null,n,i):As(t,e.child,n,i)}function jx(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Es(t),i=ig(e,t,n,s,r,a),o=ag(),e!==null&&!en?(rg(e,t,a),Ka(e,t,a)):(Qt&&o&&uf(t),t.flags|=1,sn(e,t,i,a),t.child)}function Qx(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Z0(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,R1(e,t,r,i,a)):(e=fh(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!gg(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:xc,n(s,i)&&e.ref===t.ref)return Ka(e,t,a)}return t.flags|=1,e=Ga(r,i),e.ref=t.ref,e.return=t,t.child=e}function R1(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(xc(r,i)&&e.ref===t.ref)if(en=!1,t.pendingProps=i=r,gg(e,a))(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,Ka(e,t,a)}return n0(e,t,n,i,a)}function N1(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return $x(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ph(t,r!==null?r.cachePool:null),r!==null?Hx(t,r):Km(),Wb(t);else return i=t.lanes=536870912,$x(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(ph(t,r.cachePool),Hx(t,r),Dr(),t.memoizedState=null):(e!==null&&ph(t,null),Km(),Dr());return sn(e,t,a,n),t.child}function hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $x(e,t,n,i,a){var r=j0();return r=r===null?null:{parent:tn._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&ph(t,null),Km(),Wb(t),e!==null&&Ts(e,t,i,!0),t.childLanes=a,null}function vh(e,t){return t=gf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ty(e,t,n){return As(t,e.child,null,n),e=vh(t,t.pendingProps),e.flags|=2,pi(t),t.memoizedState=null,e}function Fw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Qt){if(i.mode==="hidden")return e=vh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hc(null,e);if(Jm(t),(e=Ie)?(e=NS(e,Bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Or!==null?{id:ba,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},n=Pb(e),n.return=t,t.child=n,vn=t,Ie=null)):e=null,e===null)throw zr(t);return t.lanes=536870912,null}return vh(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(Jm(t),a)if(t.flags&256)t.flags&=-257,t=ty(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(nt(558));else if(en||Ts(e,t,n,!1),a=(n&e.childLanes)!==0,en||a){if(Br.current===null){if(i=Ce,i!==null&&(s=sb(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Is(e,s),ri(i,e,s),pg;jh()}t=ty(e,t,n)}else e=r.treeContext,Ie=Fi(s.nextSibling),vn=t,Qt=!0,Ar=null,Bi=!1,e!==null&&zb(t,e),t=vh(t,i),t.flags|=134221824;return t}return e=Ga(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(nt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function n0(e,t,n,i,a){return Es(t),n=ig(e,t,n,i,void 0,a),i=ag(),e!==null&&!en?(rg(e,t,a),Ka(e,t,a)):(Qt&&i&&uf(t),t.flags|=1,sn(e,t,n,a),t.child)}function ey(e,t,n,i,a,r){return Es(t),t.updateQueue=null,n=Yb(t,i,n,a),qb(e),i=ag(),e!==null&&!en?(rg(e,t,r),Ka(e,t,r)):(Qt&&i&&uf(t),t.flags|=1,sn(e,t,n,r),t.child)}function ny(e,t,n,i,a){if(Es(t),t.stateNode===null){var r=To,s=n.contextType;typeof s=="object"&&s!==null&&(r=En(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=t0,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},$0(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?En(s):To,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(um(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&t0.enqueueReplaceState(r,r.state,null),cc(t,i,r,a),lc(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Rs(n,o);r.props=l;var c=r.context,h=n.contextType;s=To,typeof h=="object"&&h!==null&&(s=En(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Kx(t,r,i,s),_r=!1;var u=t.memoizedState;r.state=u,cc(t,i,r,a),lc(),c=t.memoizedState,o||u!==c||_r?(typeof p=="function"&&(um(t,n,p,i),c=t.memoizedState),(l=_r||Zx(t,n,l,i,u,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Ym(e,t),s=t.memoizedProps,h=Rs(n,s),r.props=h,p=t.pendingProps,u=r.context,c=n.contextType,l=To,typeof c=="object"&&c!==null&&(l=En(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||u!==l)&&Kx(t,r,i,l),_r=!1,u=t.memoizedState,r.state=u,cc(t,i,r,a),lc();var d=t.memoizedState;s!==p||u!==d||_r||e!==null&&e.dependencies!==null&&Oh(e.dependencies)?(typeof o=="function"&&(um(t,n,o,i),d=t.memoizedState),(h=_r||Zx(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Oh(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,d,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),r.props=i,r.state=d,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,fo(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=As(t,e.child,null,a),t.child=As(t,null,n,a)):sn(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Ka(e,t,a),e}function iy(e,t,n,i){return Ms(),t.flags|=256,sn(e,t,n,i),t.child}var i0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function a0(e){return{baseLanes:e,cachePool:Fb()}}function r0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gi),e}function D1(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(An.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Qt){if(a?Nr(t):Dr(),(e=Ie)?(e=NS(e,Bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Or!==null?{id:ba,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},n=Pb(e),n.return=t,t.child=n,vn=t,Ie=null)):e=null,e===null)throw zr(t);return Cg(e)?t.lanes=32:t.lanes=536870912,null}return r=i.children,i=i.fallback,a?(Dr(),a=t.mode,r=gf({mode:"hidden",children:r},a),i=xs(i,a,n,null),r.return=t,i.return=t,r.sibling=i,t.child=r,i=t.child,i.memoizedState=a0(n),i.childLanes=r0(e,s,n),t.memoizedState=i0,hc(null,i)):(Nr(t),mg(t,r))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return kw(e,t,r,s,i,l,o,n)}return a?(Dr(),a=i.fallback,r=t.mode,o=e.child,l=o.sibling,i=Ga(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Ga(l,a):(a=xs(a,r,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,hc(null,i),i=t.child,a=e.child.memoizedState,a===null?a=a0(n):(r=a.cachePool,r!==null?(o=tn._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=Fb(),a={baseLanes:a.baseLanes|n,cachePool:r}),i.memoizedState=a,i.childLanes=r0(e,s,n),t.memoizedState=i0,hc(e.child,i)):(Nr(t),n=e.child,e=n.sibling,n=Ga(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function mg(e,t){return t=gf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gf(e,t){return e=ai(22,e,null,t),e.lanes=0,e}function Qu(e,t,n){return As(t,e.child,null,n),e=mg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kw(e,t,n,i,a,r,s,o){if(n)return t.flags&256?(Nr(t),t.flags&=-257,Qu(e,t,o)):t.memoizedState!==null?(Dr(),t.child=e.child,t.flags|=128,null):(Dr(),r=a.fallback,s=t.mode,a=gf({mode:"visible",children:a.children},s),r=xs(r,s,o,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,As(t,e.child,null,o),a=t.child,a.memoizedState=a0(o),a.childLanes=r0(e,i,o),t.memoizedState=i0,hc(null,a));if(Nr(t),Cg(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(nt(419)),a.stack="",a.digest=i,bc({value:a,source:null,stack:null})),Qu(e,t,o)}if(en||Ts(e,t,o,!1),i=(o&e.childLanes)!==0,en||i){if(Br.current!==null)return Qu(e,t,o);if(i=Ce,i!==null&&(a=sb(i,o),a!==0&&a!==s.retryLane))throw s.retryLane=a,Is(e,a),ri(i,e,a),pg;return N0(r)||jh(),Qu(e,t,o)}return N0(r)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Ie=Fi(r.nextSibling),vn=t,Qt=!0,Ar=null,Bi=!1,e!==null&&zb(t,e),t=mg(t,a.children),t.flags|=134221824,t)}function ay(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),dh(e.return,t,n)}function ry(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Fh(n)===null&&(t=e),e=e.sibling}return t}function $u(e,t,n,i,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function hm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function s0(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=An.current;if(t.flags&128)return Mc(t,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,Mc(t,s),a==="backwards"&&e!==null?(hm(e),sn(e,t,i,n),hm(e)):sn(e,t,i,n),i=Qt?yc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ay(e,n,t);else if(e.tag===19)ay(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=ry(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,hm(t)),$u(t,!0,a,null,r,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Fh(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$u(t,!0,n,null,r,i);break;case"together":$u(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ry(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$u(t,!1,a,n,r,i)}return t.child}function sy(e,t,n){var i=t.pendingProps;return Sr(t,t.type,i.value),sn(e,t,i.children,n),t.child}function Ka(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ts(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(nt(153));if(t.child!==null){for(e=t.child,n=Ga(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ga(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oh(e)))}function Hw(e,t,n){switch(t.tag){case 3:Ch(t,t.stateNode.containerInfo),Sr(t,tn,e.memoizedState.cache),Ms();break;case 27:case 5:Lm(t);break;case 4:Ch(t,t.stateNode.containerInfo);break;case 10:Sr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Jm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Nr(t),t.flags|=128,null;i=Ts(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?D1(e,t,n):(Nr(t),e=Ka(e,t,n),e!==null?e.sibling:null)}Nr(t);break;case 19:if(t.flags&128)return s0(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ts(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return s0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Mc(t,An.current),i)break;return null;case 22:return t.lanes=0,N1(e,t,n,t.pendingProps);case 24:Sr(t,tn,e.memoizedState.cache)}return Ka(e,t,n)}function U1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)en=!0;else{if(!gg(e,n)&&(t.flags&128)===0)return en=!1,Hw(e,t,n);en=(e.flags&131072)!==0}else en=!1,Qt&&(t.flags&1048576)!==0&&Ob(t,yc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ps(t.elementType),t.type=e,typeof e=="function")Z0(e)?(i=Rs(e,i),t.tag=1,t=ny(null,t,e,i,n)):(t.tag=0,t=n0(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===P0){t.tag=11,t=jx(null,t,e,i,n);break t}else if(a===O0){t.tag=14,t=Qx(null,t,e,i,n);break t}else if(a===xa){t.tag=10,t.type=e,t=sy(null,t,n);break t}}throw t=Dm(e)||e,Error(nt(306,t,""))}}return t;case 0:return n0(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Rs(i,t.pendingProps),ny(e,t,i,a,n);case 3:t:{if(Ch(t,t.stateNode.containerInfo),e===null)throw Error(nt(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Ym(e,t),cc(t,i,null,n);var s=t.memoizedState;if(i=s.cache,Sr(t,tn,i),i!==r.cache&&Wm(t,[tn],n,!0),lc(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=iy(e,t,i,n);break t}else if(i!==a){a=zi(Error(nt(424)),t),bc(a),t=iy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ie=Fi(e.firstChild),vn=t,Qt=!0,Ar=null,Bi=!0,n=Vb(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ms(),i===a){t=Ka(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return fo(e,t),e===null?(n=Ly(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qt||(t.stateNode=bS(t.type,t.pendingProps,wr.current,t)):t.memoizedState=Ly(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Lm(t),e===null&&Qt&&(i=t.stateNode=DS(t.type,t.pendingProps,wr.current),vn=t,Bi=!0,a=Ie,Vr(t.type)?(D0=a,Ie=Fi(i.firstChild)):Ie=a),sn(e,t,t.pendingProps.children,n),fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Qt&&((a=i=Ie)&&(i=LA(i,t.type,t.pendingProps,Bi),i!==null?(t.stateNode=i,vn=t,Ie=Fi(i.firstChild),Bi=!1,a=!0):a=!1),a||zr(t)),Lm(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,A0(a,r)?i=null:s!==null&&A0(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ig(e,t,Nw,null,null,n),Zo._currentValue=a),fo(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&Qt&&((e=n=Ie)&&(n=IA(n,t.pendingProps,Bi),n!==null?(t.stateNode=n,vn=t,Ie=null,e=!0):e=!1),e||zr(t)),null;case 13:return D1(e,t,n);case 4:return Ch(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=As(t,null,i,n):sn(e,t,i,n),t.child;case 11:return jx(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,fo(e,t),sn(e,t,i,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return sy(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,Es(t),a=En(a),i=i(a),t.flags|=1,sn(e,t,i,n),t.child;case 14:return Qx(e,t,t.type,t.pendingProps,n);case 15:return R1(e,t,t.type,t.pendingProps,n);case 19:return s0(e,t,n);case 31:return Fw(e,t,n);case 22:return N1(e,t,n,t.pendingProps);case 24:return Es(t),i=En(tn),e===null?(a=j0(),a===null&&(a=Ce,r=J0(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},$0(t),Sr(t,tn,a)):((e.lanes&n)!==0&&(Ym(e,t),cc(t,null,null,n),lc()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Sr(t,tn,i)):(i=r.cache,Sr(t,tn,i),i!==a.cache&&Wm(t,[tn],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Qt&&uf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:fo(e,t),sn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(nt(156,t.tag))}function ka(e){e.flags|=4}function fm(e,t,n,i,a){var r;if((r=(e.mode&32)!==0)&&(r=n===null?Oy(t,i):Oy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(oS())e.flags|=8192;else throw bs=zh,Q0}else e.flags&=-16777217}function oy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!PS(t))if(oS())e.flags|=8192;else throw bs=zh,Q0}function th(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ib():536870912,e.lanes|=t,Vo|=t)}function Zl(e,t){if(!Qt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Vw(e,t,n){var i=t.pendingProps;switch(K0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Xa(tn),Bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(uo(t)?ka(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,om())),Le(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(ka(t),r!==null?(Le(t),oy(t,r)):(Le(t),fm(t,a,null,i,n))):r?r!==e.memoizedState?(ka(t),Le(t),oy(t,r)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ka(t),Le(t),fm(t,a,e,i,n)),null;case 27:if(Rh(t),n=wr.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ka(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Le(t),t.subtreeFlags&=-33554433,null}e=Ma.current,uo(t)?Ix(t,e):(e=DS(a,i,n),t.stateNode=e,ka(t))}return Le(t),t.subtreeFlags&=-33554433,null;case 5:if(Rh(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ka(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Le(t),t.subtreeFlags&=-33554433,null}if(r=Ma.current,uo(t))Ix(t,r);else{var s=Ac(wr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[Tn]=t,r[oi]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;t:switch(Cn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ka(t)}}return Le(t),t.subtreeFlags&=-33554433,fm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ka(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(nt(166));if(e=wr.current,uo(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=vn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Tn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||xS(e.nodeValue,n)),e||zr(t,!0)}else e=Ac(e).createTextNode(i),e[Tn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=uo(t),n!==null){if(e===null){if(!i)throw Error(nt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(557));e[Tn]=t}else Ms(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=om(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pi(t),t):(pi(t),null);if((t.flags&128)!==0)throw Error(nt(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=uo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(nt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(nt(317));a[Tn]=t}else Ms(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else a=om(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(pi(t),t):(pi(t),null)}return pi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),th(t,t.updateQueue),Le(t),null);case 4:return Bo(),e===null&&Eg(t.stateNode.containerInfo),t.flags|=67108864,Le(t),null;case 10:return Xa(t.type),Le(t),null;case 19:if(eg(t),i=t.memoizedState,i===null)return Le(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Zl(i,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Fh(e),r!==null){for(t.flags|=128,Zl(i,!1),e=r.updateQueue,t.updateQueue=e,th(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ib(n,e),n=n.sibling;return Mc(t,An.current&1|2),Qt&&Ha(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vi()>Kh&&(t.flags|=128,a=!0,Zl(i,!1),t.lanes=4194304)}else{if(!a)if(e=Fh(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,th(t,e),Zl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!Qt)return Le(t),null}else 2*vi()-i.renderingStartTime>Kh&&n!==536870912&&(t.flags|=128,a=!0,Zl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vi(),e.sibling=null,r=An.current,r=a?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Qt?Mc(t,r):(n=r,Pe(Rn,t),Pe(An,n),On===null&&(On=t)),Qt&&Ha(t,i.treeForkCount),e}return Le(t),null;case 22:case 23:return pi(t),tg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&th(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&wn(ys),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xa(tn),Le(t),null;case 25:return null;case 30:return t.flags|=33554432,Le(t),null}throw Error(nt(156,t.tag))}function Gw(e,t){switch(K0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xa(tn),Bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Rh(t),null;case 31:if(t.memoizedState!==null){if(pi(t),t.alternate===null)throw Error(nt(340));Ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(nt(340));Ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return eg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Bo(),null;case 10:return Xa(t.type),null;case 22:case 23:return pi(t),tg(),e!==null&&wn(ys),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xa(tn),null;case 25:return null;default:return null}}function L1(e,t){switch(K0(t),t.tag){case 3:Xa(tn),Bo();break;case 26:case 27:case 5:Rh(t);break;case 4:Bo();break;case 31:t.memoizedState!==null&&pi(t);break;case 13:pi(t);break;case 19:eg(t);break;case 10:Xa(t.type);break;case 22:case 23:pi(t),tg(),e!==null&&wn(ys);break;case 24:Xa(tn)}}function kc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Se(t,t.return,o)}}function Fr(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){Se(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){Se(t,t.return,h)}}function I1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xb(t,n)}catch(i){Se(e,e.return,i)}}}function P1(e,t,n){n.props=Rs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Se(e,t,i)}}function va(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,r=qa(e.memoizedProps,a);(a.ref===null||a.ref.name!==r)&&(a.ref=ES(r)),i=a.ref;break;case 7:if(e.stateNode===null){var s=new Si(e);si(e.child,!1,DA,s,void 0,void 0),e.stateNode=s}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Se(e,t,o)}}function Mn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Se(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Se(e,t,a)}else n.current=null}function Xh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)RS(e.stateNode,t[n])}function ly(e){for(var t=e.return;t!==null&&(_g(t)&&RS(e.stateNode,t.stateNode),!vg(t));)t=t.return}function fc(e){for(var t=e.return;t!==null&&(_g(t)&&UA(e.stateNode,t.stateNode),!vg(t));)t=t.return}function vg(e){return e.tag===5||e.tag===3||e.tag===27}function _g(e){return e&&e.tag===7&&e.stateNode!==null}function o0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Se(e,e.return,a)}}function dm(e,t,n){try{var i=e.stateNode;dA(i,e.type,n,t),i[oi]=t}catch(a){Se(e,e.return,a)}}function O1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vr(e.type)||e.tag===4}function pm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||O1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function l0(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya)),Xh(e,i),fe=!0;else if(a!==4&&(a===27&&(Xh(e,i),i=null,Vr(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(l0(e,t,n,i),e=e.sibling;e!==null;)l0(e,t,n,i),e=e.sibling}function Wh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Xh(e,i),fe=!0;else if(a!==4&&(a===27&&(Xh(e,i),i=null,Vr(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Wh(e,t,n,i),e=e.sibling;e!==null;)Wh(e,t,n,i),e=e.sibling}function z1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Cn(t,i,n),t[Tn]=e,t[oi]=n}catch(r){Se(e,e.return,r)}}var qh=!1,mi=null;function cy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(qh=!0)}var _a=null;function uy(){var e=_a;return _a=null,e}var ii=0;function tl(e,t,n,i,a){return ii=0,B1(e.child,t,n,i,a)}function B1(e,t,n,i,a){for(var r=!1;e!==null;){if(e.tag===5){var s=e.stateNode;if(i!==null){var o=C0(s);i.push(o),o.view&&(r=!0)}else r||C0(s).view&&(r=!0);qh=!0,SS(s,ii===0?t:t+"_"+ii,n),ii++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||B1(e.child,t,n,i,a)&&(r=!0));e=e.sibling}return r}function Ea(e,t){for(;e!==null;)e.tag===5?MS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ea(e.child,t)),e=e.sibling}function _h(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(_h(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(nt(544));var n=t.name;t=Qa(t.default,t.share),t!=="none"&&(tl(e,n,t,null,!1)||Ea(e.child,!1))}e=e.sibling}}function c0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=qa(i,n),r=Qa(i.default,n.paired?i.share:i.enter);r!=="none"?tl(e,a,r,null,!1)?(_h(e),n.paired||t||Go(e,i.onEnter)):Ea(e.child,!1):_h(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)c0(e,t),e=e.sibling;else _h(e)}function u0(e){if(mi!==null&&mi.size!==0){var t=mi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var r=Qa(n.default,n.share);if(r!=="none"&&(tl(e,i,r,null,!1)?(r=e.stateNode,a.paired=r,r.paired=a,Go(e,n.onShare)):Ea(e.child,!1)),t.delete(i),t.size===0)break}}}u0(e)}e=e.sibling}}}function h0(e){if(e.tag===30){var t=e.memoizedProps,n=qa(t,e.stateNode),i=mi!==null?mi.get(n):void 0,a=Qa(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(tl(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,mi.delete(n),Go(e,t.onShare)):Go(e,t.onExit):Ea(e.child,!1)),mi!==null&&u0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)h0(e),e=e.sibling;else mi!==null&&u0(e)}function F1(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=qa(t,e.stateNode);t=Qa(t.default,t.update),e.flags&=-5,t!=="none"&&tl(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&F1(e);e=e.sibling}}function f0(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ea(e.child,!1))}f0(e)}e=e.sibling}}function xh(e){if(e.tag===30)e.stateNode.paired=null,Ea(e.child,!1),f0(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xh(e),e=e.sibling;else f0(e)}function k1(e){for(e=e.child;e!==null;)e.tag===30?Ea(e.child,!1):(e.subtreeFlags&33554432)!==0&&k1(e),e=e.sibling}function xg(e,t,n,i,a,r,s){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(r!==null&&ii<r.length){var c=r[ii],h=C0(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&SS(l,ii===0?n:n+"_"+ii,a),o&&(e.flags&4)!==0||(_a===null&&(_a=[]),_a.push(l,ii===0?i:i+"_"+ii,t.memoizedProps)),ii++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&s?e.flags|=t.flags&32:xg(e,t.child,n,i,a,r,s)&&(o=!0));t=t.sibling}return o}function H1(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=qa(n,i),r=Qa(n.default,n.update);if(t){i=i.clones;var s=i===null?null:i.map(xA)}else s=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ii=0,a=xg(i,o,a,a,r,s,!1),(e.flags&4)!==0&&a&&(t||Go(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&H1(e,t);e=e.sibling}}var pn=!1,ve=!1,pa=!1,mm=!1,hy=typeof WeakSet=="function"?WeakSet:Set,mn=null,ma=!1,nc=!1,Yh=!1,d0=!1;function Xw(e,t,n){if(e=e.containerInfo,E0=Ko,e=wb(e),W0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var m;u!==i||r!==0&&u.nodeType!==3||(l=o+r),u!==s||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)d=u,u=m;for(;;){if(u===e)break e;if(d===i&&++h===r&&(l=o),d===s&&++p===a&&(c=o),(m=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=m}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(w0={focusedElem:e,selectionRange:i},Ko=!1,n=(n&335544064)===n,mn=t,t=n?9270:1024;mn!==null;){if(e=mn,n&&(i=e.deletions,i!==null))for(r=0;r<i.length;r++)n&&h0(i[r]);if(e.alternate===null&&(e.flags&2)!==0)n&&cy(e),eh(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&h0(i),eh(n);continue}else if(i!==null&&i.memoizedState!==null){n&&cy(e),eh(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,mn=i):(n&&F1(e),eh(n))}}mi=null}function eh(e){for(;mn!==null;){var t=mn,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var r=t.stateNode;try{var s=Rs(t.type,a);n=r.getSnapshotBeforeUpdate(s,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(o){Se(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)R0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":R0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=qa(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Qa(a.default,a.update),a!=="none"&&tl(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(nt(163))}if(i=t.sibling,i!==null){i.return=t.return,mn=i;break}mn=t.return}}function V1(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ga(e,n),i&4&&kc(5,n);break;case 1:if(ga(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Se(n,n.return,s)}else{var a=Rs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Se(n,n.return,s)}}i&64&&I1(n),i&512&&va(n,n.return);break;case 3:if(ga(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xb(e,t)}catch(s){Se(n,n.return,s)}}break;case 27:t===null&&i&4&&z1(n);case 26:case 5:ga(e,n),t===null&&i&4&&o0(n),i&512&&va(n,n.return);break;case 12:ga(e,n);break;case 31:ga(e,n),i&4&&q1(e,n);break;case 13:ga(e,n),i&4&&Y1(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nA.bind(null,n),PA(e,n))));break;case 22:if(i=n.memoizedState!==null||pn,!i){var r=t!==null&&t.memoizedState!==null||ve;t=pn,a=ve,pn=i,(ve=r)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),qi(e,n,i)):ga(e,n),pn=t,ve=a}break;case 30:ga(e,n),i&512&&va(n,n.return);break;case 7:i&512&&va(n,n.return);default:ga(e,n)}}function p0(e,t){for(e=e.child;e!==null;)G1(e,t),e=e.sibling}function G1(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,r=e.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;a.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Se(e,e.return,l)}m0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,fe=!0}catch(l){Se(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Ay(o,!0):Ay(e.stateNode,!1)}catch(l){Se(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&p0(e,t);break;default:p0(e,t)}}function m0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:G1(n,i);break t;case 22:n.memoizedState===null&&m0(n,i);break t;default:m0(n,i)}}e=e.sibling}}function X1(e){var t=e.alternate;t!==null&&(e.alternate=null,X1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&af(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,ei=!1;function Wi(e,t,n){for(n=n.child;n!==null;)W1(e,t,n),n=n.sibling}function W1(e,t,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 26:ve||Mn(n,t),Wi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ve&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ve||Mn(n,t),fc(n);var i=Ve,a=ei;Vr(n.type)&&(Ve=n.stateNode,ei=!1),Wi(e,t,n),US(n.stateNode,n.type,n.memoizedProps),Ve=i,ei=a;break;case 5:ve||Mn(n,t),fc(n);case 6:if(n.tag===6&&fc(n),i=Ve,a=ei,Ve=null,Wi(e,t,n),Ve=i,ei=a,Ve!==null)if(ei)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode),fe=!0}catch(r){Se(n,t,r)}else try{Ve.removeChild(n.stateNode),fe=!0}catch(r){Se(n,t,r)}break;case 18:Ve!==null&&(ei?(e=Ve,wy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jo(e)):wy(Ve,n.stateNode));break;case 4:i=Ve,a=ei,Ve=n.stateNode.containerInfo,ei=!0,Wi(e,t,n),Ve=i,ei=a;break;case 0:case 11:case 14:case 15:Fr(2,n,t),ve||Fr(4,n,t),Wi(e,t,n);break;case 1:ve||(Mn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&P1(n,t,i)),Wi(e,t,n);break;case 21:Wi(e,t,n);break;case 22:ve=(i=ve)||n.memoizedState!==null,Wi(e,t,n),ve=i;break;case 30:Mn(n,t),Wi(e,t,n);break;case 7:ve||Mn(n,t),Wi(e,t,n);break;default:Wi(e,t,n)}}function q1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jo(e)}catch(n){Se(t,t.return,n)}}}function Y1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jo(e)}catch(n){Se(t,t.return,n)}}function Ww(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hy),t;default:throw Error(nt(435,e.tag))}}function nh(e,t){var n=Ww(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=iA.bind(null,e,i);i.then(a,a)}})}function Wn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var r=i[a],s=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Vr(l.type)){Ve=l.stateNode,ei=!1;break t}break;case 5:Ve=l.stateNode,ei=!1;break t;case 3:case 4:Ve=l.stateNode.containerInfo,ei=!0;break t}l=l.return}if(Ve===null)throw Error(nt(160));W1(s,o,r),Ve=null,ei=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Z1(t,e,n),t=t.sibling}var Yi=null;function Z1(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var s=i[r];s.ref.impl=s.nextImpl}Wn(t,e,n),qn(e),a&4&&(Fr(3,e,e.return),kc(3,e),Fr(5,e,e.return));break;case 1:Wn(t,e,n),qn(e),a&512&&(ve||i===null||Mn(i,i.return)),a&64&&pn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(r=Yi,Wn(t,e,n),qn(e),a&512&&(ve||i===null||Mn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(pn)e.stateNode=bS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=r.ownerDocument||r;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Oc]||i[Tn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),Cn(i,t,n),i[Tn]=e,gn(i),t=i;break t;case"link":if(r=Py("link","href",a).get(t+(n.href||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break e}}i=a.createElement(t),Cn(i,t,n),a.head.appendChild(i);break;case"meta":if(r=Py("meta","content",a).get(t+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break e}}i=a.createElement(t),Cn(i,t,n),a.head.appendChild(i);break;default:throw Error(nt(468,t))}i[Tn]=e,gn(i),t=i}e.stateNode=t}else pn||U0(r,e.type,e.stateNode);else e.stateNode=Iy(r,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||ve||t.parentNode.removeChild(t)):a.count--,n===null?pn||U0(r,e.type,e.stateNode):Iy(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&dm(e,e.memoizedProps,i.memoizedProps);break;case 27:Wn(t,e,n),qn(e),a&512&&(ve||i===null||Mn(i,i.return)),i!==null&&a&4&&dm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(r=pa,pa=!1,Wn(t,e,n),pa=r,qn(e),a&512&&(ve||i===null||Mn(i,i.return)),e.flags&32){t=e.stateNode;try{ko(t,""),fe=!0}catch(h){Se(e,e.return,h)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,dm(e,t,i!==null?i.memoizedProps:t)),a&1024&&(mm=!0);break;case 6:if(Wn(t,e,n),qn(e),a&4){if(e.stateNode===null)throw Error(nt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,fe=!0}catch(h){Se(e,e.return,h)}}break;case 3:if(fe=!1,Mh=null,r=Yi,Yi=Cc(t.containerInfo),Wn(t,e,n),Yi=r,qn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(h){Se(e,e.return,h)}mm&&(mm=!1,K1(e)),fe=!1;break;case 4:a=pa,pa=pn,i=vx(),r=Yi,Yi=Cc(e.stateNode.containerInfo),Wn(t,e,n),qn(e),Yi=r,fe&&nc&&(Yh=!0),fe=i,pa=a;break;case 12:Wn(t,e,n),qn(e);break;case 31:Wn(t,e,n),qn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,nh(e,t)));break;case 13:Wn(t,e,n),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(vf=vi()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,nh(e,t)));break;case 22:r=e.memoizedState!==null,s=i!==null&&i.memoizedState!==null;var o=pn,l=ve,c=pa;pn=o||r,pa=c||r,ve=l||s,Wn(t,e,n),ve=l,pa=c,pn=o,qn(e),a&8192&&(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,!r||i===null||s||pn||ve||(t=s||ve,n=pn,i=ve,pn=r||pn,ve=t,gr(e,2),pn=n,ve=i),!r&&pa||p0(e,r)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,nh(e,n))));break;case 19:Wn(t,e,n),qn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,nh(e,t)));break;case 30:a&512&&(ve||i===null||Mn(i,i.return)),a=vx(),r=nc,s=(n&335544064)===n,o=e.memoizedProps,nc=s&&Qa(o.default,o.update)!=="none",Wn(t,e,n),qn(e),s&&i!==null&&fe&&(e.flags|=4),nc=r,fe=a;break;case 21:break;case 7:a&512&&(ve||i===null||Mn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Wn(t,e,n),qn(e)}}function qn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(O1(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(_g(a)){var r=a.stateNode;i===null?i=[r]:i.push(r)}if(vg(a))break;a=a.return}var s=i;if(n==null)throw Error(nt(160));switch(n.tag){case 27:var o=n.stateNode,l=pm(e);Wh(e,l,o,s);break;case 5:var c=n.stateNode;n.flags&32&&(ko(c,""),n.flags&=-33);var h=pm(e);Wh(e,h,c,s);break;case 3:case 4:var p=n.stateNode.containerInfo,u=pm(e);l0(e,u,p,s);break;default:throw Error(nt(161))}}catch(d){Se(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;K1(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ko=!0,t.reset(),Ko=!1),e=e.sibling}}function ho(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)J1(t,e),t=t.sibling;else H1(t,!1)}function J1(e,t){var n=e.alternate;if(n===null)c0(e,!1);else switch(e.tag){case 3:if(d0=ma=!1,uy(),ho(t,e),!ma&&!Yh){if(e=_a,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];MS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),d0=!0}_a=null;break;case 5:ho(t,e);break;case 4:i=ma,ma=!1,ho(t,e),ma&&(Yh=!0),ma=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?c0(e,!1):ho(t,e));break;case 30:i=ma,a=uy(),ma=!1,ho(t,e),ma&&(e.flags|=4);var r=e.memoizedProps,s=e.stateNode;t=qa(r,s),s=qa(n.memoizedProps,s);var o=Qa(r.default,r.update);o==="none"?t=!1:(r=n.memoizedState,n.memoizedState=null,n=e.child,ii=0,t=xg(e,n,t,s,o,r,!0),ii!==(r===null?0:r.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Go(e,e.memoizedProps.onUpdate),_a=a):a!==null&&(a.push.apply(a,_a),_a=a),ma=(e.flags&32)!==0?!0:i;break;default:ho(t,e)}}function ga(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)V1(e,t.alternate,t),t=t.sibling}function gr(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Fr(4,n,n.return),gr(n,i);break;case 1:Mn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P1(n,n.return,a),gr(n,i);break;case 27:(i&2)!==0&&US(n.stateNode,n.type,n.memoizedProps);case 5:Mn(n,n.return),n.tag!==5&&n.tag!==27||fc(n),gr(n,i);break;case 6:fc(n);break;case 26:Mn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||ve||a.parentNode.removeChild(a),gr(n,i);break;case 22:n.memoizedState===null&&gr(n,i);break;case 30:Mn(n,n.return),gr(n,i);break;case 7:Mn(n,n.return);default:gr(n,i)}e=e.sibling}}function qi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags,o=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:qi(a,r,n),kc(4,r);break;case 1:if(qi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){Se(i,i.return,h)}if(i=r,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)Gb(c[a],l)}catch(h){Se(i,i.return,h)}}o&&s&64&&I1(r),va(r,r.return);break;case 27:(n&2)!==0&&z1(r);case 5:r.tag!==5&&r.tag!==27||ly(r),qi(a,r,n),o&&i===null&&s&4&&o0(r),va(r,r.return);break;case 6:ly(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||pn||U0(Cc(l.ownerDocument),r.type,l),qi(a,r,n),o&&i===null&&s&4&&o0(r),va(r,r.return);break;case 12:qi(a,r,n);break;case 31:qi(a,r,n),o&&s&4&&q1(a,r);break;case 13:qi(a,r,n),o&&s&4&&Y1(a,r);break;case 22:r.memoizedState===null&&qi(a,r,n),va(r,r.return);break;case 30:qi(a,r,n),va(r,r.return);break;case 7:va(r,r.return);default:qi(a,r,n)}t=t.sibling}}function yg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bc(n))}function bg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bc(e))}function Ui(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)j1(e,t,n,i),t=t.sibling;else a&&k1(t)}function j1(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&xh(t);var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ui(e,t,n,i),r&2048&&kc(9,t);break;case 1:Ui(e,t,n,i);break;case 3:Ui(e,t,n,i),a&&d0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),r&2048&&(r=null,t.alternate!==null&&(r=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==r&&(t.refCount++,r!=null&&Bc(r)));break;case 12:if(r&2048){Ui(e,t,n,i),r=t.stateNode;try{var s=t.memoizedProps,o=s.id,l=s.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Se(t,t.return,c)}}else Ui(e,t,n,i);break;case 31:Ui(e,t,n,i);break;case 13:Ui(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&xh(o),s._visibility&2?Ui(e,t,n,i):dc(e,t)):(a&&o!==null&&o.memoizedState!==null&&xh(t),s._visibility&2?Ui(e,t,n,i):(s._visibility|=2,po(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),r&2048&&yg(o,t);break;case 24:Ui(e,t,n,i),r&2048&&bg(t.alternate,t);break;case 30:a&&(r=t.alternate,r!==null&&(Ea(r.child,!0),Ea(t.child,!0))),Ui(e,t,n,i);break;default:Ui(e,t,n,i)}}function po(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:po(r,s,o,l,a),kc(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?po(r,s,o,l,a):dc(r,s):(h._visibility|=2,po(r,s,o,l,a)),a&&c&2048&&yg(s.alternate,s);break;case 24:po(r,s,o,l,a),a&&c&2048&&bg(s.alternate,s);break;default:po(r,s,o,l,a)}t=t.sibling}}function dc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:dc(n,i),a&2048&&yg(i.alternate,i);break;case 24:dc(n,i),a&2048&&bg(i.alternate,i);break;default:dc(n,i)}t=t.sibling}}var ms=8192;function fs(e,t,n){if(e.subtreeFlags&ms)for(e=e.child;e!==null;)Q1(e,t,n),e=e.sibling}function Q1(e,t,n){switch(e.tag){case 26:fs(e,t,n),e.flags&ms&&(e.memoizedState!==null?KA(n,Yi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&zy(n,e)));break;case 5:fs(e,t,n),e.flags&ms&&(e=e.stateNode,(t&335544128)===t&&zy(n,e));break;case 3:case 4:var i=Yi;Yi=Cc(e.stateNode.containerInfo),fs(e,t,n),Yi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ms,ms=16777216,fs(e,t,n),ms=i):fs(e,t,n));break;case 30:if((e.flags&ms)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,mi===null&&(mi=new Map),mi.set(i,a)}fs(e,t,n);break;default:fs(e,t,n)}}function $1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];mn=i,eS(i,e)}$1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tS(e),e=e.sibling}function tS(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&Fr(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yh(e)):Kl(e);break;default:Kl(e)}}function yh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];mn=i,eS(i,e)}$1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fr(8,t,t.return),yh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yh(t));break;default:yh(t)}e=e.sibling}}function eS(e,t){for(;mn!==null;){var n=mn;switch(n.tag){case 0:case 11:case 15:Fr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Bc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,mn=i;else t:for(n=e;mn!==null;){i=mn;var a=i.sibling,r=i.return;if(X1(i),i===n){mn=null;break t}if(a!==null){a.return=r,mn=a;break t}mn=r}}}var qw={getCacheForType:function(e){var t=En(tn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return En(tn).controller.signal}},Yw=typeof WeakMap=="function"?WeakMap:Map,de=0,Ce=null,ie=null,ae=0,ye=0,fi=null,Mr=!1,el=!1,Sg=!1,Ja=0,qe=0,kr=0,Ss=0,Zh=0,gi=0,Vo=0,pc=null,ni=null,g0=!1,vf=0,nS=0,Kh=1/0,Jh=null,Ur=null,Ge=0,Ki=null,Ns=null,Ta=0,v0=0,_0=null,iS=null,Po=null,Oo=null,zo=null,mc=0,bh=null;function yi(){return(de&2)!==0&&ae!==0?ae&-ae:kt.T!==null?Tg():ob()}function aS(){if(gi===0)if((ae&536870912)===0||Qt){var e=Gu;Gu<<=1,(Gu&3932160)===0&&(Gu=262144),gi=e}else gi=536870912;return e=Rn.current,e!==null&&(e.flags|=32),gi}function Go(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=ES(qa(e.memoizedProps,n))),Oo===null&&(Oo=[]),Oo.push(t.bind(null,i))}}function ri(e,t,n){(e===Ce&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Xo(e,0),Tr(e,ae,gi,!1)),Pc(e,n),((de&2)===0||e!==Ce)&&(e===Ce&&((de&2)===0&&(Ss|=n),qe===4&&Tr(e,ae,gi,!1)),Aa(e))}function rS(e,t,n){if((de&6)!==0)throw Error(nt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ic(e,t),a=i?Jw(e,t):gm(e,t,!0),r=i;do{if(a===0){el&&!i&&Tr(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Zw(n)){a=gm(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=pc;var l=o.current.memoizedState.isDehydrated;if(l&&(Xo(o,s).flags|=256),s=gm(o,s,!1),s!==2&&s!==6){if(Sg&&!l){o.errorRecoveryDisabledLanes|=r,Ss|=r,a=4;break t}r=ni,ni=a,r!==null&&(ni===null?ni=r:ni.push.apply(ni,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Xo(e,0),Tr(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(nt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Tr(i,t,gi,!Mr);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(nt(329))}if((t&62914560)===t&&(a=vf+300-vi(),10<a)){if(Tr(i,t,gi,!Mr),nf(i,0,!0)!==0)break t;Ta=t,i.timeoutHandle=wg(fy.bind(null,i,n,ni,Jh,g0,t,gi,Ss,Vo,Mr,r,"Throttled",-0,0),a);break t}fy(i,n,ni,Jh,g0,t,gi,Ss,Vo,Mr,r,null,-0,0)}}break}while(!0);Aa(e)}function fy(e,t,n,i,a,r,s,o,l,c,h,p,u,d){e.timeoutHandle=-1;var m=t.subtreeFlags,S=(r&335544064)===r;if(p=null,(S||m&8192||(m&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},mi=null,Q1(t,r,p),S&&(m=p,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(m.count++,m.waitingForViewTransition=!0,m=Rc.bind(m),S.finished.then(m,m))),m=(r&62914560)===r?vf-vi():(r&4194048)===r?nS-vi():0,m=JA(p,m),m!==null)){Ta=r,e.cancelPendingCommit=m(py.bind(null,e,t,r,n,i,a,s,o,l,c,h,p,null,u,d)),Tr(e,r,s,!c);return}py(e,t,r,n,i,a,s,o,l,c,h,p)}function Zw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!bi(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tr(e,t,n,i){t=nb(e,t),t&=~Zh,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-xi(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&ab(e,n,t)}function _f(){return(de&6)===0?(Hc(0,!1),!1):!0}function Mg(){if(ie!==null){if(ye===0)var e=ie.return;else e=ie,Va=Ps=null,sg(e),Uo=null,Sc=0,e=ie;for(;e!==null;)L1(e.alternate,e),e=e.return;ie=null}}function Xo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,gA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ta=0,Mg(),Ce=e,ie=n=Ga(e.current,null),ae=t,ye=0,fi=null,Mr=!1,el=Ic(e,t),Sg=!1,Vo=gi=Zh=Ss=kr=qe=0,ni=pc=null,g0=!1,Ja=nb(e,t),lf(),n}function sS(e,t){Yt=null,kt.H=Vh,t===$o||t===hf?(t=Fx(),ye=3):t===Q0?(t=Fx(),ye=4):ye=t===pg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fi=t,ie===null&&(qe=1,Gh(e,zi(t,e.current)))}function oS(){var e=Rn.current;return e===null?!0:(ae&4194048)===ae?On===null:(ae&62914560)===ae||(ae&536870912)!==0?e===On:!1}function lS(){var e=kt.H;return kt.H=Vh,e===null?Vh:e}function cS(){var e=kt.A;return kt.A=qw,e}function jh(){qe=4,Mr||(ae&4194048)!==ae&&Rn.current!==null||(el=!0),(kr&134217727)===0&&(Ss&134217727)===0||Ce===null||Tr(Ce,ae,gi,!1)}function gm(e,t,n){var i=de;de|=2;var a=lS(),r=cS();(Ce!==e||ae!==t)&&(Jh=null,Xo(e,t)),t=!1;var s=qe;t:do try{if(ye!==0&&ie!==null){var o=ie,l=fi;switch(ye){case 8:Mg(),s=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(t=!0);var c=ye;if(ye=0,fi=null,Ao(e,o,l,c),n&&el){s=0;break t}break;default:c=ye,ye=0,fi=null,Ao(e,o,l,c)}}Kw(),s=qe;break}catch(h){sS(e,h)}while(!0);return t&&e.shellSuspendCounter++,Va=Ps=null,de=i,kt.H=a,kt.A=r,ie===null&&(Ce=null,ae=0,lf()),s}function Kw(){for(;ie!==null;)uS(ie)}function Jw(e,t){var n=de;de|=2;var i=lS(),a=cS();Ce!==e||ae!==t?(Jh=null,Kh=vi()+500,Xo(e,t)):el=Ic(e,t);t:do try{if(ye!==0&&ie!==null){t=ie;var r=fi;e:switch(ye){case 1:ye=0,fi=null,Ao(e,t,r,1);break;case 2:case 9:if(Bx(r)){ye=0,fi=null,dy(t);break}t=function(){ye!==2&&ye!==9||Ce!==e||(ye=7),Aa(e)},r.then(t,t);break t;case 3:ye=7;break t;case 4:ye=5;break t;case 7:Bx(r)?(ye=0,fi=null,dy(t)):(ye=0,fi=null,Ao(e,t,r,7));break;case 5:var s=null;switch(ie.tag){case 26:s=ie.memoizedState;case 5:case 27:var o=ie;if(s?PS(s):o.stateNode.complete){ye=0,fi=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,xf(c)):ie=null}break e}}ye=0,fi=null,Ao(e,t,r,5);break;case 6:ye=0,fi=null,Ao(e,t,r,6);break;case 8:Mg(),qe=6;break t;default:throw Error(nt(462))}}jw();break}catch(h){sS(e,h)}while(!0);return Va=Ps=null,kt.H=i,kt.A=a,de=n,ie!==null?0:(Ce=null,ae=0,lf(),qe)}function jw(){for(;ie!==null&&!pE();)uS(ie)}function uS(e){var t=U1(e.alternate,e,Ja);e.memoizedProps=e.pendingProps,t===null?xf(e):ie=t}function dy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ey(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=ey(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:sg(t);var i=t;i===vn&&(Qt?(Ph(i),i.tag===5&&i.stateNode!=null&&(Ie=i.stateNode)):(Ph(i),Qt=!0));default:L1(n,t),t=ie=Ib(t,Ja),t=U1(n,t,Ja)}e.memoizedProps=e.pendingProps,t===null?xf(e):ie=t}function Ao(e,t,n,i){Va=Ps=null,sg(t),Uo=null,Sc=0;var a=t.return;try{if(Bw(e,a,t,n,ae)){qe=1,Gh(e,zi(n,e.current)),ie=null;return}}catch(r){if(a!==null)throw ie=a,r;qe=1,Gh(e,zi(n,e.current)),ie=null;return}t.flags&32768?(Qt||i===1?e=!0:el||(ae&536870912)!==0?e=!1:(Mr=e=!0,(i===2||i===9||i===3||i===6)&&(i=Rn.current,i!==null&&i.tag===13&&(i.flags|=16384))),hS(t,e)):xf(t)}function xf(e){var t=e;do{if((t.flags&32768)!==0){hS(t,Mr);return}e=t.return;var n=Vw(t.alternate,t,Ja);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);qe===0&&(qe=5)}function hS(e,t){do{var n=Gw(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);qe=6,ie=null}function py(e,t,n,i,a,r,s,o,l,c,h,p){e.cancelPendingCommit=null;do yf();while(Ge!==0);if((de&6)!==0)throw Error(nt(327));if(t!==null){if(t===e.current)throw Error(nt(177));e===Ce&&(ie=Ce=null,ae=0),Ns=t,Ki=e,Ta=n,_0=a,iS=i,Qw(e,t,n,s,o,l,p)}}function Qw(e,t,n,i,a,r,s){var o=t.lanes|t.childLanes;if(v0=o,o|=q0,TE(e,n,o,i,a,r),Oo=null,(n&335544064)===n?(zo=ww(e),i=10262):(zo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,aA(Nh,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),qh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=kt.T,kt.T=null,a=pe.p,pe.p=2,r=de,de|=4;try{Xw(e,t,n)}finally{de=r,pe.p=a,kt.T=i}}Ge=1,qh?Po=SA(s,e.containerInfo,zo,x0,y0,tA,b0,S0,$w,null,null):(x0(),y0(),b0())}function $w(e){if(Ge!==0){var t=Ki.onRecoverableError;t(e,{componentStack:null})}}function tA(){Ge===3&&(Ge=0,J1(Ns,Ki),Ge=4)}function x0(){if(Ge===1){Ge=0;var e=Ki,t=Ns,n=Ta,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=kt.T,kt.T=null;var a=pe.p;pe.p=2;var r=de;de|=4;try{nc=Yh=!1,Z1(t,e,n),n=w0;var s=wb(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&Eb(o.ownerDocument.documentElement,o)){if(l!==null&&W0(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),m=o.textContent.length,S=Math.min(l.start,m),g=l.end===void 0?S:Math.min(l.end,m);!d.extend&&S>g&&(s=g,g=S,S=s);var f=Nx(o,S),v=Nx(o,g);if(f&&v&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==v.node||d.focusOffset!==v.offset)){var b=p.createRange();b.setStart(f.node,f.offset),d.removeAllRanges(),S>g?(d.addRange(b),d.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),d.addRange(b))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ko=!!E0,w0=E0=null}finally{de=r,pe.p=a,kt.T=i}}e.current=t,Ge=2}}function y0(){if(Ge===2){Ge=0;var e=Ki,t=Ns,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=kt.T,kt.T=null;var i=pe.p;pe.p=2;var a=de;de|=4;try{V1(e,t.alternate,t)}finally{de=a,pe.p=i,kt.T=n}}Ge=3}}function b0(){if(Ge===4||Ge===3){Ge=0;var e=Po;Po=null,mE();var t=Ki,n=Ns,i=Ta,a=iS,r=(i&335544064)===i?10262:10256;if((n.subtreeFlags&r)!==0||(n.flags&r)!==0?Ge=5:(Ge=0,Ns=Ki=null,fS(t,t.pendingLanes)),r=t.pendingLanes,r===0&&(Ur=null),F0(i),n=n.stateNode,_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Lc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=kt.T,r=pe.p,pe.p=2,kt.T=null;try{for(var s=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];s(l.value,{componentStack:l.stack})}}finally{kt.T=n,pe.p=r}}if(a=Oo,s=zo,zo=null,a!==null&&(Oo=null,s===null&&(s=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(s),n!==void 0&&e.finished.finally(n);(Ta&3)!==0&&yf(),Aa(t),r=t.pendingLanes,(i&261930)!==0&&(r&42)!==0?t===bh?mc++:(mc=0,bh=t):(mc=0,bh=null),Hc(0,!1)}}function fS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bc(t)))}function yf(){return Po!==null&&(Po.skipTransition(),Po=null),x0(),y0(),b0(),S0()}function S0(){if(Ge!==5)return!1;var e=Ki,t=v0;v0=0;var n=F0(Ta),i=kt.T,a=pe.p;try{pe.p=32>n?32:n,kt.T=null,n=_0,_0=null;var r=Ki,s=Ta;if(Ge=0,Ns=Ki=null,Ta=0,(de&6)!==0)throw Error(nt(331));var o=de;if(de|=4,tS(r.current),j1(r,r.current,s,n),de=o,Hc(0,!1),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Lc,r)}catch{}return!0}finally{pe.p=a,kt.T=i,fS(e,t)}}function my(e,t,n){t=zi(n,t),t=e0(e.stateNode,t,2),e=Rr(e,t,2),e!==null&&(Pc(e,2),Aa(e))}function Se(e,t,n){if(e.tag===3)my(e,e,n);else for(;t!==null;){if(t.tag===3){my(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ur===null||!Ur.has(i))){e=zi(n,e),n=A1(2),i=Rr(t,n,2),i!==null&&(C1(n,i,t,e),Pc(i,2),Aa(i));break}}t=t.return}}function vm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Yw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Sg=!0,a.add(n),e=eA.bind(null,e,t,n),t.then(e,e))}function eA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(ae&n)===n&&((qe===4||qe===3&&(ae&62914560)===ae&&300>vi()-vf)&&(de&2)===0?Xo(e,0):Zh|=n,Vo===ae&&(Vo=0)),Aa(e)}function dS(e,t){t===0&&(t=ib()),e=Is(e,t),e!==null&&(Pc(e,t),Aa(e))}function nA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dS(e,n)}function iA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(nt(314))}i!==null&&i.delete(t),dS(e,n)}function aA(e,t){return z0(e,t)}var Wo=null,mo=null,M0=!1,Qh=!1,_m=!1,Er=0;function Aa(e){e!==mo&&e.next===null&&(mo===null?Wo=mo=e:mo=mo.next=e),Qh=!0,M0||(M0=!0,sA())}function Hc(e,t){if(!_m&&Qh){_m=!0;do for(var n=!1,i=Wo;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-xi(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,gy(i,r))}else r=ae,r=nf(i,i===Ce?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ic(i,r)||(n=!0,gy(i,r));i=i.next}while(n);_m=!1}}function rA(){pS()}function pS(){Qh=M0=!1;var e=0;Er!==0&&mA()&&(e=Er);for(var t=vi(),n=null,i=Wo;i!==null;){var a=i.next,r=mS(i,t);r===0?(i.next=null,n===null?Wo=a:n.next=a,a===null&&(mo=n)):(n=i,(e!==0||(r&3)!==0)&&(Qh=!0)),i=a}Ge!==0&&Ge!==5||Hc(e,!1),Er!==0&&(Er=0)}function mS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-xi(r),o=1<<s,l=a[s];l===-1?((o&n)===0||(o&i)!==0)&&(a[s]=ME(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=Ce,n=ae,n=nf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Jp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ic(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Jp(i),F0(n)){case 2:case 8:n=tb;break;case 32:n=Nh;break;case 268435456:n=eb;break;default:n=Nh}return i=gS.bind(null,e),n=z0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Jp(i),e.callbackPriority=2,e.callbackNode=null,2}function gS(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yf()&&e.callbackNode!==n)return null;var i=ae;return i=nf(e,e===Ce?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(rS(e,i,t),mS(e,vi()),e.callbackNode!=null&&e.callbackNode===n?gS.bind(null,e):null)}function gy(e,t){if(yf())return null;rS(e,t,!0)}function sA(){vA(function(){(de&6)!==0?z0($y,rA):pS()})}function Tg(){if(Er===0){var e=ws;e===0&&(e=Vu,Vu<<=1,(Vu&261888)===0&&(Vu=256)),Er=e}return Er}function vy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ch(e)}function oA(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=vy((a[oi]||null).action),s=i.submitter;s&&(t=(t=s[oi]||null)?vy(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new rf("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Er!==0){var l=new FormData(a,s);$m(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=new FormData(a,s),$m(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(ih=0;ih<Vm.length;ih++)ah=Vm[ih],_y=ah.toLowerCase(),xy=ah[0].toUpperCase()+ah.slice(1),Ji(_y,"on"+xy);var ah,_y,xy,ih;Ji(Cb,"onAnimationEnd");Ji(Rb,"onAnimationIteration");Ji(Nb,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(_w,"onTransitionRun");Ji(xw,"onTransitionStart");Ji(yw,"onTransitionCancel");Ji(Db,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ec));function vS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){Uh(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){Uh(h)}a.currentTarget=null,r=l}}}}function ne(e,t){var n=t[dx];n===void 0&&(n=t[dx]=new Set);var i=e+"__bubble";n.has(i)||(_S(t,e,2,!1),n.add(i))}function xm(e,t,n){var i=0;t&&(i|=4),_S(n,e,i,t)}var rh="_reactListening"+Math.random().toString(36).slice(2);function Eg(e){if(!e[rh]){e[rh]=!0,cb.forEach(function(n){n!=="selectionchange"&&(lA.has(n)||xm(n,!1,e),xm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rh]||(t[rh]=!0,xm("selectionchange",!1,t))}}function _S(e,t,n,i){switch(VS(t)){case 2:var a=t3;break;case 8:a=e3;break;default:a=Ug}n=a.bind(null,t,n,e),a=void 0,!Bm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ym(e,t,n,i,a){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=gs(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}vb(function(){var c=r,h=H0(n),p=[];t:{var u=Ub.get(e);if(u!==void 0){var d=rf,m=e;switch(e){case"keypress":if(hh(n)===0)break t;case"keydown":case"keyup":d=ZE;break;case"focusin":m="focus",d=nm;break;case"focusout":m="blur",d=nm;break;case"beforeblur":case"afterblur":d=nm;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=bx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=OE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=$E;break;case Cb:case Rb:case Nb:d=FE;break;case Db:d=ew;break;case"scroll":case"scrollend":d=IE;break;case"wheel":d=iw;break;case"copy":case"cut":case"paste":d=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Mx;break;case"submit":d=jE;break;case"toggle":case"beforetoggle":d=rw}var S=(t&4)!==0,g=!S&&(e==="scroll"||e==="scrollend"),f=S?u!==null?u+"Capture":null:u;S=[];for(var v=c,b;v!==null;){var _=v;if(b=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||b===null||f===null||(_=vc(v,f),_!=null&&S.push(wc(v,_,b))),g)break;v=v.return}0<S.length&&(u=new d(u,m,null,n,h),p.push({event:u,listeners:S}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==zm&&(m=n.relatedTarget||n.fromElement)&&(gs(m)||m[jo]))break t;(u||d)&&(m=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?gs(d):null,d!==null&&(g=Uc(d),S=d.tag,d!==g||S!==5&&S!==27&&S!==6)&&(d=null)):(u=null,d=c),u!==d&&(S=bx,_="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(S=Mx,_="onPointerLeave",f="onPointerEnter",v="pointer"),g=u==null?m:tc(u),b=d==null?m:tc(d),m=new S(_,v+"leave",u,n,h),m.target=g,m.relatedTarget=b,_=null,gs(h)===c&&(S=new S(f,v+"enter",d,n,h),S.target=b,S.relatedTarget=g,_=S),g=_,S=u&&d?Em(u,d,cA):null,u!==null&&yy(p,m,u,S,!1),d!==null&&g!==null&&yy(p,g,d,S,!0)))}t:{if(u=c?tc(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var M=Ax;else if(wx(u))if(Mb)M=mw;else{M=dw;var T=fw}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&k0(c.elementType)&&(M=Ax):M=pw;if(M&&(M=M(e,c))){Sb(p,M,n,h);break t}T&&T(e,u,c)}switch(T=c?tc(c):window,e){case"focusin":(wx(T)||T.contentEditable==="true")&&(bo=T,km=c,rc=null);break;case"focusout":rc=km=bo=null;break;case"mousedown":Hm=!0;break;case"contextmenu":case"mouseup":case"dragend":Hm=!1,Dx(p,n,h);break;case"selectionchange":if(vw)break;case"keydown":case"keyup":Dx(p,n,h)}var w;if(X0)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else yo?yb(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(xb&&n.locale!=="ko"&&(yo||x!=="onCompositionStart"?x==="onCompositionEnd"&&yo&&(w=_b()):(br=h,V0="value"in br?br.value:br.textContent,yo=!0)),T=$h(c,x),0<T.length&&(x=new Sx(x,e,null,n,h),p.push({event:x,listeners:T}),w?x.data=w:(w=bb(n),w!==null&&(x.data=w)))),(w=ow?lw(e,n):cw(e,n))&&(x=$h(c,"onBeforeInput"),0<x.length&&(T=new Sx("onBeforeInput","beforeinput",null,n,h),p.push({event:T,listeners:x}),T.data=w)),oA(p,e,c,n,h)}vS(p,t)})}function wc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $h(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=vc(e,n),a!=null&&i.unshift(wc(e,a,r)),a=vc(e,t),a!=null&&i.push(wc(e,a,r))),e.tag===3)return i;e=e.return}return[]}function cA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yy(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=vc(n,r),c!=null&&s.unshift(wc(n,c,l))):a||(c=vc(n,r),c!=null&&s.push(wc(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var uA=/\r\n?/g,hA=/\u0000|\uFFFD/g;function by(e){return(typeof e=="string"?e:""+e).replace(uA,`
`).replace(hA,"")}function xS(e,t){return t=by(t),by(e)===t}function be(e,t,n,i,a,r){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||ko(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&ko(e,""+i);else return;break;case"className":Wu(e,"class",i);break;case"tabIndex":Wu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wu(e,n,i);break;case"style":gb(e,i,r);return;case"data":if(t!=="object"){Wu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ch(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",a.name,a,null),be(e,t,"formEncType",a.formEncType,a,null),be(e,t,"formMethod",a.formMethod,a,null),be(e,t,"formTarget",a.formTarget,a,null)):(be(e,t,"encType",a.encType,a,null),be(e,t,"method",a.method,a,null),be(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ch(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ya);return;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));r?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ch(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),lh(e,"popover",i);break;case"xlinkActuate":Fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Fa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Fa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Fa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Fa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lh(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=UE.get(n)||n,lh(e,n,i);else return}fe=!0}function T0(e,t,n,i,a,r){switch(n){case"style":gb(e,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));r?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")ko(e,i);else if(typeof i=="number"||typeof i=="bigint")ko(e,""+i);else return;break;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ya);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ub.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),t=e[oi]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(r,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(r,i,a);break t}fe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):lh(e,n,i)}return}fe=!0}function Cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:be(e,t,r,s,n,null)}}a&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(nt(137,t));break;default:be(e,t,i,h,n,null)}}db(e,r,o,l,c,s,a,!1);return;case"select":ne("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:be(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Ro(e,!!i,t,!1):n!=null&&Ro(e,!!i,n,!0);return;case"textarea":ne("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(nt(91));break;default:be(e,t,s,o,n,null)}mb(e,i,a,r);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":be(e,t,l,i,n,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<Ec.length;i++)ne(Ec[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:be(e,t,c,i,n,null)}return;default:if(k0(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&T0(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}var fA={};function dA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||be(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(fe=!0),r=d;break;case"name":d!==p&&(fe=!0),a=d;break;case"checked":d!==p&&(fe=!0),c=d;break;case"defaultChecked":d!==p&&(fe=!0),h=d;break;case"value":d!==p&&(fe=!0),s=d;break;case"defaultValue":d!==p&&(fe=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(nt(137,t));break;default:d!==p&&be(e,t,u,d,i,p)}}Om(e,s,o,l,c,h,r,a);return;case"select":d=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(r)||be(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":r!==l&&(fe=!0),u=r;break;case"defaultValue":r!==l&&(fe=!0),o=r;break;case"multiple":r!==l&&(fe=!0),s=r;default:r!==l&&be(e,t,a,r,i,l)}t=o,n=s,i=d,u!=null?Ro(e,!!n,u,!1):!!i!=!!n&&(t!=null?Ro(e,!!n,t,!0):Ro(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":a!==r&&(fe=!0),u=a;break;case"defaultValue":a!==r&&(fe=!0),d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(nt(91));break;default:a!==r&&be(e,t,s,a,i,r)}pb(e,u,d);return;case"option":for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!=null&&!i.hasOwnProperty(m)&&(m==="selected"?e.selected=!1:be(e,t,m,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(fe=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):be(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S)&&be(e,t,S,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(nt(137,t));break;default:be(e,t,c,u,i,d)}return;default:if(k0(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&T0(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||T0(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&be(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||be(e,t,p,u,i,d)}function Sy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&Sy(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&Sy(p)&&(l=l.responseEnd,s+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var E0=null,w0=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function My(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bS(e,t,n,i){return n=Ac(n).createElement(e),n[Tn]=i,n[oi]=t,Cn(n,e,t),gn(n),n}function A0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bm=null;function mA(){var e=window.event;return e&&e.type==="popstate"?e===bm?!1:(bm=e,!0):(bm=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,gA=typeof clearTimeout=="function"?clearTimeout:void 0,Ty=typeof Promise=="function"?Promise:void 0,Ey=typeof requestAnimationFrame=="function"?requestAnimationFrame:wg,vA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ty<"u"?function(e){return Ty.resolve(null).then(e).catch(_A)}:wg;function _A(e){setTimeout(function(){throw e})}function Vr(e){return e==="head"}function wy(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Jo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Mm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Mm(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[Oc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Mm(e.ownerDocument.body);n=a}while(n);Jo(t)}function Ay(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function SS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var r=t[a];0<r.width&&0<r.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function MS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function TS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function C0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return TS(t,n,e)}function xA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return TS(t,n,e)}function yA(e){return e.documentElement.clientHeight}function bA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function SA(e,t,n,i,a,r,s,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,m=c.fonts.status;i();var S=[];if(m==="loaded"&&(yA(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),m=S.length,e!==null)for(var g=e.suspenseyImages,f=0,v=0;v<g.length;v++){var b=g[v];if(!b.complete){var _=b.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<u.innerHeight&&_.left<u.innerWidth){if(f+=OS(b),f>Th){S.length=m;break}b=new Promise(bA.bind(b)),S.push(b)}}}if(0<S.length)return u=Promise.race([Promise.all(S),new Promise(function(M){return setTimeout(M,500)})]).then(a,a),(d?Promise.allSettled([d.finished,u]):u).then(r,r);if(a(),d)return d.finished.then(r,r);r()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var m=u[d],S=m.effect,g=S.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(m),m=S.getKeyframes();for(var f=g=void 0,v=!0,b=0;b<m.length;b++){var _=m[b],M=_.width;if(g===void 0)g=M;else if(g!==M){v=!1;break}if(M=_.height,f===void 0)f=M;else if(f!==M){v=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}v&&g!==void 0&&f!==void 0&&(S.setKeyframes(m),v=getComputedStyle(S.target,S.pseudoElement),v.width!==g||v.height!==f)&&(v=m[0],v.width=g,v.height=f,v=m[m.length-1],v.width=g,v.height=f,S.setKeyframes(m))}}s()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),a(),s()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),a(),s(),null}}function vs(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}vs.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Re({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};vs.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var r=n[a].effect;r!==null&&r.target===e&&r.pseudoElement===t&&i.push(n[a])}return i};vs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ES(e){return{name:e,group:new vs("group",e),imagePair:new vs("image-pair",e),old:new vs("old",e),new:new vs("new",e)}}function Si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Si.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(wS(r,e,t,n)===-1){var s=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){s.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=s.removeEventListener.bind(s,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=qo(n),r.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),si(this._fragmentFiber.child,!1,MA,e,o,i)}this._eventListeners=r}};function MA(e,t,n,i){return on(e).addEventListener(t,n,i),!1}Si.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=wS(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var r=a.cleanup;a=qo(a.optionsOrUseCapture),si(this._fragmentFiber.child,!1,TA,e,n,a),i.splice(t,1),r!==null&&r()}};function TA(e,t,n,i){return on(e).removeEventListener(t,n,i),!1}function qo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Cy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function wS(e,t,n,i){if(e.length===0)return-1;i=Cy(i);for(var a=0;a<e.length;a++){var r=e[a];if(r.type===t&&r.listener===n&&Cy(r.optionsOrUseCapture)===i)return a}return-1}Si.prototype.dispatchEvent=function(e){var t=Ds(this._fragmentFiber);if(t===null)return!0;t=on(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var r=n[a];i.addEventListener(r.type,r.attachedListener,qo(r.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)r=n[a],i.removeEventListener(r.type,r.attachedListener,qo(r.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Si.prototype.focus=function(e){si(this._fragmentFiber.child,!0,AS,e,void 0,void 0)};function AS(e,t){return e.tag===6?!1:(e=on(e),OA(e,t))}Si.prototype.focusLast=function(e){var t=[];si(this._fragmentFiber.child,!0,Ag,t,void 0,void 0);for(var n=t.length-1;0<=n&&!AS(t[n],e);n--);};function Ag(e,t){return t.push(e),!1}Si.prototype.blur=function(){var e=Ds(this._fragmentFiber);e!==null&&(e=on(e),e=Ac(e).activeElement,e!==null&&si(this._fragmentFiber.child,!1,EA,e,void 0,void 0))};function EA(e,t){return e.tag===6?!1:(e=on(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),si(this._fragmentFiber.child,!1,wA,e,void 0,void 0)};function wA(e,t){return e.tag===6||(e=on(e),t.observe(e)),!1}Si.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),si(this._fragmentFiber.child,!1,AA,e,void 0,void 0);for(var n=t=0;n<Zi.length;n++){var i=Zi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Zi[t++]=i}Zi.length=t}};function AA(e,t){return e.tag===6||(e=on(e),t.unobserve(e)),!1}var Zi=[],Sm=!1;function CA(e,t,n){Zi.push({fragmentInstance:e,observer:t,instance:n}),Sm||(Sm=!0,zA(function(){Sm=!1;var i=Zi;Zi=[];for(var a=0;a<i.length;a++){var r=i[a];r.observer.unobserve(r.instance)}}))}Si.prototype.getClientRects=function(){var e=[];return si(this._fragmentFiber.child,!1,RA,e,void 0,void 0),e};function RA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=on(e),t.push.apply(t,e.getClientRects());return!1}Si.prototype.getRootNode=function(e){var t=Ds(this._fragmentFiber);return t===null?this:on(t).getRootNode(e)};Si.prototype.compareDocumentPosition=function(e){var t=Ds(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];si(this._fragmentFiber.child,!1,Ag,n,void 0,void 0);var i=on(t);if(n.length===0){if(n=i,ox(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Ky(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=on(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=on(n[0]),a=on(n[n.length-1]);var r=ox(this._fragmentFiber)?t.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||r&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!r&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||NA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function NA(e,t,n,i,a){var r=gs(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)t:{for(;r!==null;){if(r.tag===7&&(r===t||r.alternate===t)){n=!0;break t}r=r.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=a.ownerDocument,a===r||a===r.documentElement||a===r.body;t:{for(r=t,t=Ds(t);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==t&&r.alternate!==t)){r=!0;break t}r=r.return}r=!1}return r}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!r)&&!(t=r===n)&&(t=Em(n,r,lx),t===null?t=!1:(si(t,!0,sE,r,n),r=go,go=null,t=r!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!r)&&!(t=r===i)&&(t=Em(i,r,lx),t===null?t=!1:(si(t,!0,oE,r,i),r=go,Tm=go=null,t=r!==null)),t):!1}function Ry(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(nt(566));var t=[];si(this._fragmentFiber.child,!1,Ag,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Ky(this._fragmentFiber);if(i=n?i[1]||i[0]||Ds(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=on(i),Ry(e,n);return}if(i=on(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=on(a),Ry(a,n)):on(a).scrollIntoView(e),i+=n?-1:1}};function DA(e,t){return e=on(e),CS(e,t),!1}function CS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function RS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,qo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){for(var s=0,o=0;o<Zi.length;o++){var l=Zi[o];(l.fragmentInstance!==t||l.observer!==r||l.instance!==e)&&(Zi[s++]=l)}Zi.length=s,r.observe(e)}),CS(e,t))}function UA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,qo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?CA(t,r,e):r.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function R0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":R0(n),af(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function LA(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Oc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function IA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Fi(e.nextSibling),e===null))return null;return e}function NS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Fi(e.nextSibling),e===null))return null;return e}function N0(e){return e.data==="$?"||e.data==="$~"}function Cg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var D0=null;function Ny(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Fi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Dy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function OA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function zA(e){Ey(function(){Ey(function(t){return e(t)})})}function DS(e,t,n){switch(t=Ac(n),e){case"html":if(e=t.documentElement,!e)throw Error(nt(452));return e;case"head":if(e=t.head,!e)throw Error(nt(453));return e;case"body":if(e=t.body,!e)throw Error(nt(454));return e;default:throw Error(nt(451))}}function US(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&be(e,t,i,null,fA,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ya&&(e.onclick=null),af(e)}function Mm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);af(e)}var ki=new Map,Uy=new Set;function Cc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var $a=pe.d;pe.d={f:BA,r:FA,D:kA,C:HA,L:VA,m:GA,X:WA,S:XA,M:qA};function BA(){var e=$a.f(),t=_f();return e||t}function FA(e){var t=Qo(e);t!==null&&t.tag===5&&t.type==="form"?g1(t):$a.r(e)}var nl=typeof document>"u"?null:document;function LS(e,t,n){var i=nl;if(i&&typeof t=="string"&&t){var a=Oi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Uy.has(a)||(Uy.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Cn(t,"link",e),gn(t),i.head.appendChild(t)))}}function kA(e){$a.D(e),LS("dns-prefetch",e,null)}function HA(e,t){$a.C(e,t),LS("preconnect",e,t)}function VA(e,t,n){$a.L(e,t,n);var i=nl;if(i&&e&&t){var a='link[rel="preload"][as="'+Oi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Oi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Oi(n.imageSizes)+'"]')):a+='[href="'+Oi(e)+'"]';var r=a;switch(t){case"style":r=Yo(e);break;case"script":r=il(e)}if(!(ki.has(r)||(e=Re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ki.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Vc(r))||t==="script"&&i.querySelector(Gc(r))))){var s=i.createElement("link");Cn(s,"link",e),t==="style"&&(s[Dh]=!0,s.onload=s.onerror=function(){lb(s)}),gn(s),i.head.appendChild(s)}}}function GA(e,t){$a.m(e,t);var n=nl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Oi(i)+'"][href="'+Oi(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=il(e)}if(!ki.has(r)&&(e=Re({rel:"modulepreload",href:e},t),ki.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gc(r)))return}i=n.createElement("link"),Cn(i,"link",e),gn(i),n.head.appendChild(i)}}}function XA(e,t,n){$a.S(e,t,n);var i=nl;if(i&&e){var a=Co(i).hoistableStyles,r=Yo(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Vc(r)))o.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ki.get(r))&&Rg(e,n);var l=s=i.createElement("link");gn(l),Cn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Sh(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function WA(e,t){$a.X(e,t);var n=nl;if(n&&e){var i=Co(n).hoistableScripts,a=il(e),r=i.get(a);r||(r=n.querySelector(Gc(a)),r||(e=Re({src:e,async:!0},t),(t=ki.get(a))&&Ng(e,t),r=n.createElement("script"),gn(r),Cn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function qA(e,t){$a.M(e,t);var n=nl;if(n&&e){var i=Co(n).hoistableScripts,a=il(e),r=i.get(a);r||(r=n.querySelector(Gc(a)),r||(e=Re({src:e,async:!0,type:"module"},t),(t=ki.get(a))&&Ng(e,t),r=n.createElement("script"),gn(r),Cn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Ly(e,t,n,i){var a=(a=wr.current)?Cc(a):null;if(!a)throw Error(nt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Yo(n.href),t=Co(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Yo(n.href);var r=Co(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Vc(e)))?r._p||(s.instance=r,s.state.loading=5):(r=ki.get(e),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ki.set(e,r)),YA(a,e,r,s.state))),t&&i===null)throw Error(nt(528,""));return s}if(t&&i!==null)throw Error(nt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=il(n),t=Co(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(nt(444,e))}}function Yo(e){return'href="'+Oi(e)+'"'}function Vc(e){return'link[rel="stylesheet"]['+e+"]"}function IS(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function YA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Dh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Dh]=!0,t.onload=t.onerror=lb.bind(null,t),Cn(t,"link",n),gn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function il(e){return'[src="'+Oi(e)+'"]'}function Gc(e){return"script[async]"+e}function Iy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Oi(n.href)+'"]');if(i)return t.instance=i,gn(i),i;var a=Re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),gn(i),Cn(i,"style",a),Sh(i,n.precedence,e),t.instance=i;case"stylesheet":a=Yo(n.href);var r=e.querySelector(Vc(a));if(r)return t.state.loading|=4,t.instance=r,gn(r),r;i=IS(n),(a=ki.get(a))&&Rg(i,a),r=(e.ownerDocument||e).createElement("link"),gn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Cn(r,"link",i),t.state.loading|=4,Sh(r,n.precedence,e),t.instance=r;case"script":return r=il(n.src),(a=e.querySelector(Gc(r)))?(t.instance=a,gn(a),a):(i=n,(a=ki.get(r))&&(i=Re({},n),Ng(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),gn(a),Cn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(nt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Sh(i,n.precedence,e));return t.instance}function Sh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ng(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mh=null;function Py(e,t,n){if(Mh===null){var i=new Map,a=Mh=new Map;a.set(n,i)}else a=Mh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Oc]||r[Tn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function U0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ZA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Oy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function PS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function zy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=OS(t),e.suspenseyImages.push(t)),e=jA.bind(e),t.decode().then(e,e))}function KA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Yo(i.href),r=t.querySelector(Vc(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,gn(r);return}r=t.ownerDocument||t,i=IS(i),(a=ki.get(a))&&Rg(i,a),r=r.createElement("link"),gn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Cn(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Rc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Th=0;function JA(e,t){return e.stylesheets&&e.count===0&&Eh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Eh(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Th===0&&(Th=62500*pA());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Eh(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Th?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function zS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Eh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Rc(){this.count--,zS(this)}function jA(){this.imgCount--,zS(this)}var tf=null;function Eh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tf=new Map,t.forEach(QA,e),tf=null,Rc.call(e))}function QA(e,t){if(!(t.state.loading&4)){var n=tf.get(e);if(n)var i=n.get(null);else{n=new Map,tf.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Rc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Zo={$$typeof:xa,Provider:null,Consumer:null,_currentValue:_s,_currentValue2:_s,_threadCount:0};function $A(e,t,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jp(0),this.hiddenUpdates=jp(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function BS(e,t,n,i,a,r,s,o,l,c,h,p){return e=new $A(e,t,n,s,l,c,h,p,o),t=1,r===!0&&(t|=24),r=ai(3,null,null,t),e.current=r,r.stateNode=e,t=J0(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},$0(r),e}function FS(e){return e?(e=To,e):To}function kS(e,t,n,i,a,r){a=FS(a),i.context===null?i.context=a:i.pendingContext=a,i=Cr(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Rr(e,i,t),n!==null&&(ri(n,e,t),oc(n,e,t))}function By(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dg(e,t){By(e,t),(e=e.alternate)&&By(e,t)}function HS(e){if(e.tag===13||e.tag===31){var t=Is(e,67108864);t!==null&&ri(t,e,67108864),Dg(e,67108864)}}function Fy(e){if(e.tag===13||e.tag===31){var t=yi();t=B0(t);var n=Is(e,t);n!==null&&ri(n,e,t),Dg(e,t)}}var Ko=!0;function t3(e,t,n,i){var a=kt.T;kt.T=null;var r=pe.p;try{pe.p=2,Ug(e,t,n,i)}finally{pe.p=r,kt.T=a}}function e3(e,t,n,i){var a=kt.T;kt.T=null;var r=pe.p;try{pe.p=8,Ug(e,t,n,i)}finally{pe.p=r,kt.T=a}}function Ug(e,t,n,i){if(Ko){var a=L0(i);if(a===null)ym(e,t,i,ef,n),ky(e,i);else if(i3(a,e,t,n,i))i.stopPropagation();else if(ky(e,i),t&4&&-1<n3.indexOf(e)){for(;a!==null;){var r=Qo(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=ds(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-xi(s);o.entanglements[1]|=l,s&=~l}Aa(r),(de&6)===0&&(Kh=vi()+500,Hc(0,!1))}}break;case 31:case 13:o=Is(r,2),o!==null&&ri(o,r,2),_f(),Dg(r,2)}if(r=L0(i),r===null&&ym(e,t,i,ef,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else ym(e,t,i,null,n)}}function L0(e){return e=H0(e),Lg(e)}var ef=null;function Lg(e){if(ef=null,e=gs(e),e!==null){var t=Uc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=qy(t),e!==null)return e;e=null}else if(n===31){if(e=Yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ef=e,null}function VS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gE()){case $y:return 2;case tb:return 8;case Nh:case vE:return 32;case eb:return 268435456;default:return 32}default:return 32}}var I0=!1,Lr=null,Ir=null,Pr=null,Nc=new Map,Dc=new Map,xr=[],n3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ky(e,t){switch(e){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Nc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dc.delete(t.pointerId)}}function Jl(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Qo(t),t!==null&&HS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function i3(e,t,n,i,a){switch(t){case"focusin":return Lr=Jl(Lr,e,t,n,i,a),!0;case"dragenter":return Ir=Jl(Ir,e,t,n,i,a),!0;case"mouseover":return Pr=Jl(Pr,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Nc.set(r,Jl(Nc.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Dc.set(r,Jl(Dc.get(r)||null,e,t,n,i,a)),!0}return!1}function GS(e){var t=gs(e.target);if(t!==null){var n=Uc(t);if(n!==null){if(t=n.tag,t===13){if(t=qy(n),t!==null){e.blockedOn=t,fx(e.priority,function(){Fy(n)});return}}else if(t===31){if(t=Yy(n),t!==null){e.blockedOn=t,fx(e.priority,function(){Fy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=L0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zm=i,n.target.dispatchEvent(i),zm=null}else return t=Qo(n),t!==null&&HS(t),e.blockedOn=n,!1;t.shift()}return!0}function Hy(e,t,n){wh(e)&&n.delete(t)}function a3(){I0=!1,Lr!==null&&wh(Lr)&&(Lr=null),Ir!==null&&wh(Ir)&&(Ir=null),Pr!==null&&wh(Pr)&&(Pr=null),Nc.forEach(Hy),Dc.forEach(Hy)}function sh(e,t){e.blockedOn===t&&(e.blockedOn=null,I0||(I0=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,a3)))}var oh=null;function Vy(e){oh!==e&&(oh=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){oh===e&&(oh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Lg(i||n)===null)continue;break}var r=Qo(n);r!==null&&(e.splice(t,3),t-=3,$m(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Jo(e){function t(l){return sh(l,e)}Lr!==null&&sh(Lr,e),Ir!==null&&sh(Ir,e),Pr!==null&&sh(Pr,e),Nc.forEach(t),Dc.forEach(t);for(var n=0;n<xr.length;n++){var i=xr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)GS(n),n.blockedOn===null&&xr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[oi]||null;if(typeof r=="function")s||Vy(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[oi]||null)o=s.formAction;else if(Lg(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Vy(n)}}}function XS(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Ig(e){this._internalRoot=e}bf.prototype.render=Ig.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(nt(409));var n=t.current,i=yi();kS(n,i,e,t,null,null)};bf.prototype.unmount=Ig.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kS(e.current,2,null,e,null,null),_f(),t[jo]=null}};function bf(e){this._internalRoot=e}bf.prototype.unstable_scheduleHydration=function(e){if(e){var t=ob();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xr.length&&t!==0&&t<xr[n].priority;n++);xr.splice(n,0,e),n===0&&GS(e)}};var Gy=Xy.version;if(Gy!=="19.3.0")throw Error(nt(527,Gy,"19.3.0"));pe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(nt(188)):(e=Object.keys(e).join(","),Error(nt(268,e)));return e=rE(t),e=e!==null?Zy(e):null,e=e===null?null:e.stateNode,e};var r3={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:kt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(jl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!jl.isDisabled&&jl.supportsFiber))try{Lc=jl.inject(r3),_i=jl}catch{}var jl;Sf.createRoot=function(e,t){if(!Wy(e))throw Error(nt(299));var n=!1,i="",a=T1,r=E1,s=w1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=BS(e,1,!1,null,null,n,i,null,a,r,s,XS),e[jo]=t.current,Eg(e),new Ig(t)};Sf.hydrateRoot=function(e,t,n){if(!Wy(e))throw Error(nt(299));var i=!1,a="",r=T1,s=E1,o=w1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=BS(e,1,!0,t,n??null,i,a,l,r,s,o,XS),t.context=FS(null),n=t.current,i=yi(),i=B0(i),a=Cr(i),a.callback=null,Rr(n,a,i),n=i,t.current.lanes=n,Pc(t,n),Aa(t),e[jo]=t.current,Eg(e),new bf(t)};Sf.version="19.3.0"});var ZS=fa((f4,YS)=>{"use strict";function qS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qS)}catch(e){console.error(e)}}qS(),YS.exports=WS()});var jS=fa(Tf=>{"use strict";var s3=Symbol.for("react.transitional.element"),o3=Symbol.for("react.fragment");function JS(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:s3,type:e,key:i,ref:t!==void 0?t:null,props:n}}Tf.Fragment=o3;Tf.jsx=JS;Tf.jsxs=JS});var $t=fa((v4,QS)=>{"use strict";QS.exports=jS()});var bT=Pt(ZS());var Os=Pt(dn());var KS=(e,t,n)=>Array.from({length:n},(i,a)=>`assets/${e}/${t}${String(a).padStart(2,"0")}.webp`),al={racket:KS("racket","r",72),clay:KS("clay","c",40)},Mf=["img/hero-serve.jpg","assets/hero-serve-depth.webp",...al.racket.filter((e,t)=>t%3===0),...al.clay.filter((e,t)=>t%4===0)];var rl=Pt(dn()),$S=Pt($t());function Ef({progress:e,capacity:t=26,tone:n="dark",onFull:i}){let a=(0,rl.useRef)(null),r=(0,rl.useRef)(e),s=(0,rl.useRef)(i);return r.current=e,s.current=i,(0,rl.useEffect)(()=>{let o=a.current,l=o.getContext("2d"),c=Math.min(devicePixelRatio||1,2),h=o.clientWidth,p=o.clientHeight;o.width=h*c,o.height=p*c;let u=Math.min(h,p)*.052,d=h*.22,m=h*.78,S=p*.36,g=p*.9,f=h*.035,v=[[d,S,d+f,g],[d+f,g,m-f,g],[m-f,g,m,S]],b=[],_=0,M=!1,T=0,w=(D,[I,C,U,H])=>{let F=U-I,V=H-C,z=F*F+V*V,O=Math.max(0,Math.min(1,((D.x-I)*F+(D.y-C)*V)/z)),Y=I+F*O,lt=C+V*O,rt=D.x-Y,Ot=D.y-lt,bt=Math.hypot(rt,Ot);if(bt<u&&bt>1e-6){let Bt=u-bt;D.x+=rt/bt*Bt,D.y+=Ot/bt*Bt}},x=(D,I,C)=>{let U=l.createRadialGradient(D-u*.35,I-u*.4,u*.1,D,I,u);U.addColorStop(0,"#f1f59a"),U.addColorStop(.6,"#d9e05a"),U.addColorStop(1,"#98a31a"),l.fillStyle=U,l.beginPath(),l.arc(D,I,u,0,Math.PI*2),l.fill(),l.save(),l.beginPath(),l.arc(D,I,u,0,Math.PI*2),l.clip(),l.translate(D,I),l.rotate(C),l.strokeStyle="rgba(251,251,242,.95)",l.lineWidth=Math.max(1,u*.14),l.beginPath(),l.arc(-u*1.25,0,u*.9,-.95,.95),l.stroke(),l.beginPath(),l.arc(u*1.25,0,u*.9,Math.PI-.95,Math.PI+.95),l.stroke(),l.restore()},A=n==="dark"?"rgba(245,240,230,.75)":"rgba(21,36,26,.7)",N=n==="dark"?"rgba(245,240,230,.28)":"rgba(21,36,26,.25)",L=D=>{_=requestAnimationFrame(L);let I=Math.round(Math.max(0,Math.min(1,r.current))*t);if(b.length<I&&D-T>55){T=D;let V=h*.5+(Math.random()-.5)*(m-d)*.5;b.push({x:V,y:-u*2,px:V-(Math.random()-.5)*2,py:-u*2-3,rot:Math.random()*6,born:D})}for(let V of b){let z=(V.x-V.px)*.995,O=(V.y-V.py)*.995;V.px=V.x,V.py=V.y,V.x+=z,V.y+=O+.55,V.rot+=z/u}for(let V=0;V<4;V++)for(let z=0;z<b.length;z++){let O=b[z];for(let Y=z+1;Y<b.length;Y++){let lt=b[Y],rt=lt.x-O.x,Ot=lt.y-O.y,bt=Math.hypot(rt,Ot);if(bt<2*u&&bt>1e-6){let Bt=(2*u-bt)/bt/2;O.x-=rt*Bt,O.y-=Ot*Bt,lt.x+=rt*Bt,lt.y+=Ot*Bt}}for(let Y of v)w(O,Y);O.y>S&&(O.x=Math.max(d+u*.6,Math.min(m-u*.6,O.x)))}l.setTransform(c,0,0,c,0,0),l.clearRect(0,0,h,p),l.strokeStyle=N,l.lineWidth=1.2,l.beginPath(),l.ellipse(h/2,S,(m-d)/2,p*.035,0,Math.PI,Math.PI*2),l.stroke(),l.fillStyle=n==="dark"?"rgba(0,0,0,.3)":"rgba(21,36,26,.12)",l.beginPath(),l.ellipse(h/2,g+p*.045,(m-d)*.55,p*.025,0,0,Math.PI*2),l.fill();for(let V of b)x(V.x,V.y,V.rot);l.strokeStyle=A,l.lineWidth=1.4,l.beginPath();let C=9;for(let V=0;V<=C;V++){let z=V/C,O=d+(m-d)*z,Y=d+f+(m-d-2*f)*z,lt=Math.sin(z*Math.PI)*p*.035;l.moveTo(O,S+lt),l.lineTo(Y,g+lt*.7)}for(let V of[0,.5,1]){let z=S+(g-S)*V,O=f*V;l.moveTo(d+O,z),l.ellipse(h/2,z,(m-d)/2-O,p*.035,0,Math.PI,0,!0)}l.stroke(),l.lineWidth=2,l.beginPath(),l.moveTo(d+f,g),l.lineTo(d+f-h*.04,g+p*.06),l.moveTo(m-f,g),l.lineTo(m-f+h*.04,g+p*.06);let U=b.length/t,H=p*.02+(1-U)*p*0;l.moveTo(d,S),l.quadraticCurveTo(d-h*.08,S-p*.2-H,h*.5-h*.06,S-p*.27-H),l.moveTo(m,S),l.quadraticCurveTo(m+h*.08,S-p*.2-H,h*.5+h*.06,S-p*.27-H),l.stroke(),b.length>=t&&D-T>750&&!M&&(M=!0,s.current?.())};return _=requestAnimationFrame(L),()=>cancelAnimationFrame(_)},[t,n]),(0,$S.jsx)("canvas",{ref:a,className:"lab-basket","aria-hidden":!0})}var Ca=Pt($t());function tM(){let[e,t]=(0,Os.useState)(0),[n,i]=(0,Os.useState)(0),[a,r]=(0,Os.useState)(!1),[s,o]=(0,Os.useState)(!1);(0,Os.useEffect)(()=>{let c=0,h=!0,p=Mf.length,u=performance.now(),d=setTimeout(()=>h&&t(1),6e3);return Mf.forEach(m=>{let S=new Image;S.onload=S.onerror=()=>{c++;let g=Math.max(0,900*(c/p)-(performance.now()-u));setTimeout(()=>{h&&(t(f=>Math.max(f,c/p)),i(c))},g)},S.src=m}),document.documentElement.classList.add("lab-loading"),()=>{h=!1,clearTimeout(d),document.documentElement.classList.remove("lab-loading")}},[]);let l=()=>{setTimeout(()=>o(!0),250),setTimeout(()=>{r(!0),document.documentElement.classList.remove("lab-loading")},1250)};return a?null:(0,Ca.jsx)("div",{className:`lab-preload${s?" is-lift":""}`,"aria-hidden":!0,children:(0,Ca.jsxs)("div",{className:"lab-preload__inner",children:[(0,Ca.jsx)(Ef,{progress:e,capacity:24,tone:"dark",onFull:l}),(0,Ca.jsxs)("p",{className:"lab-preload__count",children:[(0,Ca.jsx)("b",{children:Math.round(e*24)})," / 24 labda"]}),(0,Ca.jsx)("p",{className:"lab-preload__note",children:e<1?"P\xE1ly\xE1t k\xE9sz\xEDt\xFCnk el\u0151\u2026":"Mehet!"}),(0,Ca.jsxs)("span",{className:"lab-preload__tag",children:[(0,Ca.jsx)("b",{children:"42"})," Ball basket progress \xB7 ",n,"/",Mf.length," f\xE1jl"]})]})})}var Xc=Pt(dn()),sl=Pt($t());function eM(){let e=(0,Xc.useRef)(null),t=(0,Xc.useRef)(null);return(0,Xc.useEffect)(()=>{let n=0,i="bar",a=0,r={x:0,y:0},s=0,o=0,l=0,c=9,h=()=>{let u=document.getElementById("lab-cta");if(!u)return null;let d=u.getBoundingClientRect();return{x:d.left+d.width*.8,y:d.top-c,vis:d.top<innerHeight*.72&&d.top>90}},p=u=>{n=requestAnimationFrame(p);let d=document.documentElement.scrollHeight-innerHeight,m=d>0?Math.min(1,scrollY/d):0,S=document.querySelector(".header")?.getBoundingClientRect().bottom??68,g=12+m*(innerWidth-24),f=Math.max(68,S)-c,v=h(),b=!!v?.vis;if(i==="bar"&&b?(i="drop",a=u,r={x:s,y:o}):(i==="rest"||i==="drop")&&!b&&(i="back",a=u,r={x:s,y:o}),i==="bar"){let _=g;l+=(_-s)/c,s=_,o=f}else if(i==="drop"&&v){let _=Math.min(1,(u-a)/1100),M=r.x+(v.x-r.x)*Math.min(1,_*1.6),T=[.55,.8,1],w;if(_<T[0]){let x=_/T[0];w=r.y+(v.y-r.y)*x*x}else if(_<T[1]){let x=(_-T[0])/(T[1]-T[0]);w=v.y-4*x*(1-x)*46}else{let x=(_-T[1])/(T[2]-T[1]);w=v.y-4*x*(1-x)*12}l+=(M-s)/c,s=M,o=w,_>=T[0]&&!t.current.dataset.hit&&(t.current.dataset.hit="1",dispatchEvent(new CustomEvent("lab:balldrop",{detail:{x:v.x,y:v.y+c}}))),_>=1&&(i="rest")}else if(i==="rest"&&v)s=v.x,o=v.y;else if(i==="back"){let _=Math.min(1,(u-a)/500),M=1-(1-_)**3;s=r.x+(g-r.x)*M,o=r.y+(f-r.y)*M,_>=1&&(i="bar",delete t.current.dataset.hit)}e.current&&(e.current.style.transform=`scaleX(${m})`),t.current&&(t.current.style.transform=`translate3d(${s-c}px, ${o-c}px, 0) rotate(${l}rad)`)};return n=requestAnimationFrame(p),()=>cancelAnimationFrame(n)},[]),(0,sl.jsxs)("div",{className:"lab-progress","aria-hidden":!0,children:[(0,sl.jsx)("div",{className:"lab-progress__track"}),(0,sl.jsx)("div",{ref:e,className:"lab-progress__line"}),(0,sl.jsx)("div",{ref:t,className:"lab-progress__ball"})]})}var Au=Pt(dn());var Bl=Pt(dn());var TM=0,uv=1,EM=2;var hu=1,wM=2,Rl=3,ns=0,Jn=1,Ia=2,Pa=0,Nl=1,hv=2,fv=3,dv=4,Rd=5;var Ks=100,AM=101,CM=102,RM=103,NM=104,DM=200,fu=201,UM=202,LM=203,pv=204,du=205,IM=206,PM=207,OM=208,zM=209,BM=210,FM=211,kM=212,HM=213,VM=214,Jf=0,jf=1,Qf=2,Sl=3,$f=4,td=5,ed=6,nd=7,mv=0,GM=1,XM=2,na=0,gv=1,vv=2,_v=3,xv=4,yv=5,bv=6,Sv=7;var Mv=300,is=301,Js=302,Nd=303,Dd=304,pu=306,id=1e3,Na=1001,ad=1002,xn=1003,WM=1004;var mu=1005;var cn=1006,Ud=1007;var as=1008;var Ri=1009,Tv=1010,Ev=1011,Dl=1012,Ld=1013,ia=1014,aa=1015,ra=1016,Id=1017,Pd=1018,Ul=1020,wv=35902,Av=35899,Cv=1021,Rv=1022,Gi=1023,Da=1026,rs=1027,Nv=1028,Od=1029,ss=1030,zd=1031;var Bd=1033,gu=33776,vu=33777,_u=33778,xu=33779,Fd=35840,kd=35841,Hd=35842,Vd=35843,Gd=36196,Xd=37492,Wd=37496,qd=37488,Yd=37489,yu=37490,Zd=37491,Kd=37808,Jd=37809,jd=37810,Qd=37811,$d=37812,tp=37813,ep=37814,np=37815,ip=37816,ap=37817,rp=37818,sp=37819,op=37820,lp=37821,cp=36492,up=36494,hp=36495,fp=36283,dp=36284,bu=36285,pp=36286;var Jc=2300,rd=2301,Yf=2302,iv=2303,av=2400,rv=2401,sv=2402;var qM=3200;var Dv=0,YM=1,sa="",Ei="srgb",Gs="srgb-linear",jc="linear",_e="srgb";var Zf=7680;var ZM=519,KM=512,JM=513,jM=514,mp=515,QM=516,$M=517,gp=518,t2=519,e2=35044;var Uv="300 es",ea=2e3,Qc=2001;function l3(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function c3(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ml(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function n2(){let e=Ml("canvas");return e.style.display="block",e}var nM={},Tl=null;function Lv(...e){let t="THREE."+e.shift();Tl?Tl("log",t,...e):console.log(t,...e)}function i2(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ft(...e){e=i2(e);let t="THREE."+e.shift();if(Tl)Tl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ht(...e){e=i2(e);let t="THREE."+e.shift();if(Tl)Tl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Vs(...e){let t=e.join(" ");t in nM||(nM[t]=!0,Ft(...e))}function a2(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var r2={[Jf]:jf,[Qf]:ed,[$f]:nd,[Sl]:td,[jf]:Jf,[ed]:Qf,[nd]:$f,[td]:Sl},Ua=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pg=Math.PI/180,sd=180/Math.PI;function Su(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[e&255]+zn[e>>8&255]+zn[e>>16&255]+zn[e>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function se(e,t,n){return Math.max(t,Math.min(n,e))}function u3(e,t){return(e%t+t)%t}function Og(e,t,n){return(1-n)*e+n*t}function Wc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function li(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bv=class Bv{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bv.prototype.isVector2=!0;var Wt=Bv,La=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=r[s+0],d=r[s+1],m=r[s+2],S=r[s+3];if(p!==S||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+p*S;g<0&&(u=-u,d=-d,m=-m,S=-S,g=-g);let f=1-o;if(g<.9995){let v=Math.acos(g),b=Math.sin(v);f=Math.sin(f*v)/b,o=Math.sin(o*v)/b,l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+S*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+S*o;let v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,r,s){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=r[s],u=r[s+1],d=r[s+2],m=r[s+3];return t[n]=o*m+h*p+l*d-c*u,t[n+1]=l*m+h*u+c*p-o*d,t[n+2]=c*m+h*d+o*u-l*p,t[n+3]=h*m-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(r/2),u=l(i/2),d=l(a/2),m=l(r/2);switch(s){case"XYZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"YXZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"ZXY":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"ZYX":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"YZX":this._x=u*h*p+c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p-u*d*m;break;case"XZY":this._x=u*h*p-c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p+u*d*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(s-a)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+s)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(r-c)/d,this._x=(a+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(s-a)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,r=t._z,s=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fv=class Fv{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(iM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(iM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*c+s*p-o*h,this.y=i+l*h+o*c-r*p,this.z=a+l*p+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zg.copy(this).projectOnVector(t),this.sub(zg)}reflect(t){return this.sub(zg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fv.prototype.isVector3=!0;var Z=Fv,zg=new Z,iM=new La,kv=class kv{constructor(t,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],m=i[8],S=a[0],g=a[3],f=a[6],v=a[1],b=a[4],_=a[7],M=a[2],T=a[5],w=a[8];return r[0]=s*S+o*v+l*M,r[3]=s*g+o*b+l*T,r[6]=s*f+o*_+l*w,r[1]=c*S+h*v+p*M,r[4]=c*g+h*b+p*T,r[7]=c*f+h*_+p*w,r[2]=u*S+d*v+m*M,r[5]=u*g+d*b+m*T,r[8]=u*f+d*_+m*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*s-o*c,u=o*l-h*r,d=c*r-s*l,m=n*p+i*u+a*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return t[0]=p*S,t[1]=(a*c-h*i)*S,t[2]=(o*i-a*s)*S,t[3]=u*S,t[4]=(h*n-a*l)*S,t[5]=(a*r-o*n)*S,t[6]=d*S,t[7]=(i*l-c*n)*S,t[8]=(s*n-i*r)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bg.makeScale(t,n)),this}rotate(t){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bg.makeRotation(-t)),this}translate(t,n){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kv.prototype.isMatrix3=!0;var Xt=kv,Bg=new Xt,aM=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rM=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h3(){let e={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===_e&&(a.r=rr(a.r),a.g=rr(a.g),a.b=rr(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_e&&(a.r=bl(a.r),a.g=bl(a.g),a.b=bl(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===sa?jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Gs]:{primaries:t,whitePoint:i,transfer:jc,toXYZ:aM,fromXYZ:rM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:aM,fromXYZ:rM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),e}var re=h3();function rr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function bl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ol,od=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ol===void 0&&(ol=Ml("canvas")),ol.width=t.width,ol.height=t.height;let a=ol.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=ol}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ml("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=rr(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(rr(n[i]/255)*255):n[i]=rr(n[i]);return{data:n,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},f3=0,El=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:f3++}),this.uuid=Su(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Fg(a[s].image)):r.push(Fg(a[s]))}else r=Fg(a);i.url=r}return n||(t.images[this.uuid]=i),i}};function Fg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?od.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var d3=0,kg=new Z,Kn=class e extends Ua{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Na,a=Na,r=cn,s=as,o=Gi,l=Ri,c=e.DEFAULT_ANISOTROPY,h=sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d3++}),this.uuid=Su(),this.name="",this.source=new El(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kg).x}get height(){return this.source.getSize(kg).y}get depth(){return this.source.getSize(kg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ft(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case id:t.x=t.x-Math.floor(t.x);break;case Na:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case id:t.y=t.y-Math.floor(t.y);break;case Na:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Mv;Kn.DEFAULT_ANISOTROPY=1;var Hv=class Hv{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],m=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+S)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(c+1)/2,_=(d+1)/2,M=(f+1)/2,T=(h+u)/4,w=(p+S)/4,x=(m+g)/4;return b>_&&b>M?b<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(b),a=T/i,r=w/i):_>M?_<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),i=T/a,r=x/a):M<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(M),i=w/r,a=x/r),this.set(i,a,r,n),this}let v=Math.sqrt((g-m)*(g-m)+(p-S)*(p-S)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(p-S)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this.w=se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this.w=se(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hv.prototype.isVector4=!0;var Xe=Hv,ld=class extends Ua{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},r=new Kn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new El(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends ld{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},$c=class extends Kn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cd=class extends Kn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Cd=class Cd{constructor(t,n,i,a,r,s,o,l,c,h,p,u,d,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,p,u,d,m,S,g)}set(t,n,i,a,r,s,o,l,c,h,p,u,d,m,S,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=m,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cd().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/ll.setFromMatrixColumn(t,0).length(),r=1/ll.setFromMatrixColumn(t,1).length(),s=1/ll.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=s*h,d=s*p,m=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+m*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=m+d*c,n[10]=s*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,m=c*h,S=c*p;n[0]=u+S*o,n[4]=m*o-d,n[8]=s*c,n[1]=s*p,n[5]=s*h,n[9]=-o,n[2]=d*o-m,n[6]=S+u*o,n[10]=s*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,m=c*h,S=c*p;n[0]=u-S*o,n[4]=-s*p,n[8]=m+d*o,n[1]=d+m*o,n[5]=s*h,n[9]=S-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){let u=s*h,d=s*p,m=o*h,S=o*p;n[0]=l*h,n[4]=m*c-d,n[8]=u*c+S,n[1]=l*p,n[5]=S*c+u,n[9]=d*c-m,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){let u=s*l,d=s*c,m=o*l,S=o*c;n[0]=l*h,n[4]=S-u*p,n[8]=m*p+d,n[1]=p,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+m,n[10]=u-S*p}else if(t.order==="XZY"){let u=s*l,d=s*c,m=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+S,n[5]=s*h,n[9]=d*p-m,n[2]=m*p-d,n[6]=o*h,n[10]=S*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(p3,t,m3)}lookAt(t,n,i){let a=this.elements;return Mi.subVectors(t,n),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Gr.crossVectors(i,Mi),Gr.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Gr.crossVectors(i,Mi)),Gr.normalize(),wf.crossVectors(Mi,Gr),a[0]=Gr.x,a[4]=wf.x,a[8]=Mi.x,a[1]=Gr.y,a[5]=wf.y,a[9]=Mi.y,a[2]=Gr.z,a[6]=wf.z,a[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],m=i[2],S=i[6],g=i[10],f=i[14],v=i[3],b=i[7],_=i[11],M=i[15],T=a[0],w=a[4],x=a[8],A=a[12],N=a[1],L=a[5],D=a[9],I=a[13],C=a[2],U=a[6],H=a[10],F=a[14],V=a[3],z=a[7],O=a[11],Y=a[15];return r[0]=s*T+o*N+l*C+c*V,r[4]=s*w+o*L+l*U+c*z,r[8]=s*x+o*D+l*H+c*O,r[12]=s*A+o*I+l*F+c*Y,r[1]=h*T+p*N+u*C+d*V,r[5]=h*w+p*L+u*U+d*z,r[9]=h*x+p*D+u*H+d*O,r[13]=h*A+p*I+u*F+d*Y,r[2]=m*T+S*N+g*C+f*V,r[6]=m*w+S*L+g*U+f*z,r[10]=m*x+S*D+g*H+f*O,r[14]=m*A+S*I+g*F+f*Y,r[3]=v*T+b*N+_*C+M*V,r[7]=v*w+b*L+_*U+M*z,r[11]=v*x+b*D+_*H+M*O,r[15]=v*A+b*I+_*F+M*Y,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],m=t[3],S=t[7],g=t[11],f=t[15],v=l*d-c*u,b=o*d-c*p,_=o*u-l*p,M=s*d-c*h,T=s*u-l*h,w=s*p-o*h;return n*(S*v-g*b+f*_)-i*(m*v-g*M+f*T)+a*(m*b-S*M+f*w)-r*(m*_-S*T+g*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(s*h-o*c)-i*(r*h-o*l)+a*(r*c-s*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],m=t[12],S=t[13],g=t[14],f=t[15],v=n*o-i*s,b=n*l-a*s,_=n*c-r*s,M=i*l-a*o,T=i*c-r*o,w=a*c-r*l,x=h*S-p*m,A=h*g-u*m,N=h*f-d*m,L=p*g-u*S,D=p*f-d*S,I=u*f-d*g,C=v*I-b*D+_*L+M*N-T*A+w*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=(o*I-l*D+c*L)*U,t[1]=(a*D-i*I-r*L)*U,t[2]=(S*w-g*T+f*M)*U,t[3]=(u*T-p*w-d*M)*U,t[4]=(l*N-s*I-c*A)*U,t[5]=(n*I-a*N+r*A)*U,t[6]=(g*_-m*w-f*b)*U,t[7]=(h*w-u*_+d*b)*U,t[8]=(s*D-o*N+c*x)*U,t[9]=(i*N-n*D-r*x)*U,t[10]=(m*T-S*_+f*v)*U,t[11]=(p*_-h*T-d*v)*U,t[12]=(o*A-s*L-l*x)*U,t[13]=(n*L-i*A+a*x)*U,t[14]=(S*b-m*M-g*v)*U,t[15]=(h*M-p*b+u*v)*U,this}scale(t){let n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,p=o+o,u=r*c,d=r*h,m=r*p,S=s*h,g=s*p,f=o*p,v=l*c,b=l*h,_=l*p,M=i.x,T=i.y,w=i.z;return a[0]=(1-(S+f))*M,a[1]=(d+_)*M,a[2]=(m-b)*M,a[3]=0,a[4]=(d-_)*T,a[5]=(1-(u+f))*T,a[6]=(g+v)*T,a[7]=0,a[8]=(m+b)*w,a[9]=(g-v)*w,a[10]=(1-(u+S))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=ll.set(a[0],a[1],a[2]).length(),o=ll.set(a[4],a[5],a[6]).length(),l=ll.set(a[8],a[9],a[10]).length();r<0&&(s=-s),ji.copy(this);let c=1/s,h=1/o,p=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=h,ji.elements[5]*=h,ji.elements[6]*=h,ji.elements[8]*=p,ji.elements[9]*=p,ji.elements[10]*=p,n.setFromRotationMatrix(ji),i.x=s,i.y=o,i.z=l,this}makePerspective(t,n,i,a,r,s,o=ea,l=!1){let c=this.elements,h=2*r/(n-t),p=2*r/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a),m,S;if(l)m=r/(s-r),S=s*r/(s-r);else if(o===ea)m=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===Qc)m=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=ea,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a),m,S;if(l)m=1/(s-r),S=s/(s-r);else if(o===ea)m=-2/(s-r),S=-(s+r)/(s-r);else if(o===Qc)m=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Cd.prototype.isMatrix4=!0;var Ye=Cd,ll=new Z,ji=new Ye,p3=new Z(0,0,0),m3=new Z(1,1,1),Gr=new Z,wf=new Z,Mi=new Z,sM=new Ye,oM=new La,Kr=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-se(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return sM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return oM.setFromEuler(this),this.setFromQuaternion(oM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kr.DEFAULT_ORDER="XYZ";var tu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},g3=0,lM=new Z,cl=new La,tr=new Ye,Af=new Z,qc=new Z,v3=new Z,_3=new La,cM=new Z(1,0,0),uM=new Z(0,1,0),hM=new Z(0,0,1),fM={type:"added"},x3={type:"removed"},ul={type:"childadded",child:null},Hg={type:"childremoved",child:null},wi=class e extends Ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g3++}),this.uuid=Su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new Kr,i=new La,a=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Xt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return cl.setFromAxisAngle(t,n),this.quaternion.multiply(cl),this}rotateOnWorldAxis(t,n){return cl.setFromAxisAngle(t,n),this.quaternion.premultiply(cl),this}rotateX(t){return this.rotateOnAxis(cM,t)}rotateY(t){return this.rotateOnAxis(uM,t)}rotateZ(t){return this.rotateOnAxis(hM,t)}translateOnAxis(t,n){return lM.copy(t).applyQuaternion(this.quaternion),this.position.add(lM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(cM,t)}translateY(t){return this.translateOnAxis(uM,t)}translateZ(t){return this.translateOnAxis(hM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Af.copy(t):Af.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),qc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(qc,Af,this.up):tr.lookAt(Af,qc,this.up),this.quaternion.setFromRotationMatrix(tr),a&&(tr.extractRotation(a.matrixWorld),cl.setFromRotationMatrix(tr),this.quaternion.premultiply(cl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fM),ul.child=t,this.dispatchEvent(ul),ul.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(x3),Hg.child=t,this.dispatchEvent(Hg),Hg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tr.multiply(t.parent.matrixWorld)),t.applyMatrix4(tr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fM),ul.child=t,this.dispatchEvent(ul),ul.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qc,t,v3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qc,_3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),p=s(t.shapes),u=s(t.skeletons),d=s(t.animations),m=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wi.DEFAULT_UP=new Z(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hs=class extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}},y3={type:"move"},wl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let S of t.hand.values()){let g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y3)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Hs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},s2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Cf={h:0,s:0,l:0};function Vg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ce=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=re.workingColorSpace){if(t=u3(t,1),n=se(n,0,1),i=se(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Vg(s,r,t+1/3),this.g=Vg(s,r,t),this.b=Vg(s,r,t-1/3)}return re.colorSpaceToWorking(this,a),this}setStyle(t,n=Ei){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ft("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ei){let i=s2[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=bl(t.r),this.g=bl(t.g),this.b=bl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return re.workingToColorSpace(Bn.copy(this),t),Math.round(se(Bn.r*255,0,255))*65536+Math.round(se(Bn.g*255,0,255))*256+Math.round(se(Bn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(Bn.copy(this),n);let i=Bn.r,a=Bn.g,r=Bn.b,s=Math.max(i,a,r),o=Math.min(i,a,r),l,c,h=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=h<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ei){re.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,a=Bn.b;return t!==Ei?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Xr),this.setHSL(Xr.h+t,Xr.s+n,Xr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Xr),t.getHSL(Cf);let i=Og(Xr.h,Cf.h,n),a=Og(Xr.s,Cf.s,n),r=Og(Xr.l,Cf.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new ce;ce.NAMES=s2;var Xs=class extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Qi=new Z,er=new Z,Gg=new Z,nr=new Z,hl=new Z,fl=new Z,dM=new Z,Xg=new Z,Wg=new Z,qg=new Z,Yg=new Xe,Zg=new Xe,Kg=new Xe,Zr=class e{constructor(t=new Z,n=new Z,i=new Z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Qi.subVectors(t,n),a.cross(Qi);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Qi.subVectors(a,n),er.subVectors(i,n),Gg.subVectors(t,n);let s=Qi.dot(Qi),o=Qi.dot(er),l=Qi.dot(Gg),c=er.dot(er),h=er.dot(Gg),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,m=(s*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nr.x),l.addScaledVector(s,nr.y),l.addScaledVector(o,nr.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Yg.setScalar(0),Zg.setScalar(0),Kg.setScalar(0),Yg.fromBufferAttribute(t,n),Zg.fromBufferAttribute(t,i),Kg.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Yg,r.x),s.addScaledVector(Zg,r.y),s.addScaledVector(Kg,r.z),s}static isFrontFacing(t,n,i,a){return Qi.subVectors(i,n),er.subVectors(t,n),Qi.cross(er).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Qi.cross(er).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,r=this.c,s,o;hl.subVectors(a,i),fl.subVectors(r,i),Xg.subVectors(t,i);let l=hl.dot(Xg),c=fl.dot(Xg);if(l<=0&&c<=0)return n.copy(i);Wg.subVectors(t,a);let h=hl.dot(Wg),p=fl.dot(Wg);if(h>=0&&p<=h)return n.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(hl,s);qg.subVectors(t,r);let d=hl.dot(qg),m=fl.dot(qg);if(m>=0&&d<=m)return n.copy(r);let S=d*c-l*m;if(S<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(fl,o);let g=h*m-d*p;if(g<=0&&p-h>=0&&d-m>=0)return dM.subVectors(r,a),o=(p-h)/(p-h+(d-m)),n.copy(a).addScaledVector(dM,o);let f=1/(g+S+u);return s=S*f,o=u*f,n.copy(i).addScaledVector(hl,s).addScaledVector(fl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jr=class{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint($i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint($i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=$i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,$i):$i.fromBufferAttribute(r,s),$i.applyMatrix4(t.matrixWorld),this.expandByPoint($i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rf.copy(i.boundingBox)),Rf.applyMatrix4(t.matrixWorld),this.union(Rf)}let a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$i),$i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yc),Nf.subVectors(this.max,Yc),dl.subVectors(t.a,Yc),pl.subVectors(t.b,Yc),ml.subVectors(t.c,Yc),Wr.subVectors(pl,dl),qr.subVectors(ml,pl),zs.subVectors(dl,ml);let n=[0,-Wr.z,Wr.y,0,-qr.z,qr.y,0,-zs.z,zs.y,Wr.z,0,-Wr.x,qr.z,0,-qr.x,zs.z,0,-zs.x,-Wr.y,Wr.x,0,-qr.y,qr.x,0,-zs.y,zs.x,0];return!Jg(n,dl,pl,ml,Nf)||(n=[1,0,0,0,1,0,0,0,1],!Jg(n,dl,pl,ml,Nf))?!1:(Df.crossVectors(Wr,qr),n=[Df.x,Df.y,Df.z],Jg(n,dl,pl,ml,Nf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ir),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ir=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],$i=new Z,Rf=new Jr,dl=new Z,pl=new Z,ml=new Z,Wr=new Z,qr=new Z,zs=new Z,Yc=new Z,Nf=new Z,Df=new Z,Bs=new Z;function Jg(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Bs.fromArray(e,r);let o=a.x*Math.abs(Bs.x)+a.y*Math.abs(Bs.y)+a.z*Math.abs(Bs.z),l=t.dot(Bs),c=n.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new Z,Uf=new Wt,b3=0,an=class extends Ua{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=e2,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uf.fromBufferAttribute(this,n),Uf.applyMatrix3(t),this.setXY(n,Uf.x,Uf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Wc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Wc(n,this.array)),n}setX(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Wc(n,this.array)),n}setY(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Wc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Wc(n,this.array)),n}setW(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),a=li(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),a=li(a,this.array),r=li(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var eu=class extends an{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var nu=class extends an{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Vi=class extends an{constructor(t,n,i){super(new Float32Array(t),n,i)}},S3=new Jr,Zc=new Z,jg=new Z,Ws=class{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):S3.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zc.subVectors(t,this.center);let n=Zc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Zc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zc.copy(t.center).add(jg)),this.expandByPoint(Zc.copy(t.center).sub(jg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},M3=0,Hi=new Ye,Qg=new wi,gl=new Z,Ti=new Jr,Kc=new Jr,_n=new Z,Ai=class e extends Ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M3++}),this.uuid=Su(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(l3(t)?nu:eu)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,i){return Hi.makeTranslation(t,n,i),this.applyMatrix4(Hi),this}scale(t,n,i){return Hi.makeScale(t,n,i),this.applyMatrix4(Hi),this}lookAt(t){return Qg.lookAt(t),Qg.updateMatrix(),this.applyMatrix4(Qg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gl).negate(),this.translate(gl.x,gl.y,gl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,r=t.length;a<r;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vi(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let r=n[i];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){let o=n[r];Kc.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Ti.min,Kc.min),Ti.expandByPoint(_n),_n.addVectors(Ti.max,Kc.max),Ti.expandByPoint(_n)):(Ti.expandByPoint(Kc.min),Ti.expandByPoint(Kc.max))}Ti.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)_n.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(_n));if(n)for(let r=0,s=n.length;r<s;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(gl.fromBufferAttribute(t,c),_n.add(gl)),a=Math.max(a,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,r=n.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new Z,l[x]=new Z;let c=new Z,h=new Z,p=new Z,u=new Wt,d=new Wt,m=new Wt,S=new Z,g=new Z;function f(x,A,N){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,N),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,N),h.sub(c),p.sub(c),d.sub(u),m.sub(u);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(S.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(L),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[x].add(S),o[A].add(S),o[N].add(S),l[x].add(g),l[A].add(g),l[N].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,A=v.length;x<A;++x){let N=v[x],L=N.start,D=N.count;for(let I=L,C=L+D;I<C;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new Z,_=new Z,M=new Z,T=new Z;function w(x){M.fromBufferAttribute(a,x),T.copy(M);let A=o[x];b.copy(A),b.sub(M.multiplyScalar(M.dot(A))).normalize(),_.crossVectors(T,A);let L=_.dot(l[x])<0?-1:1;s.setXYZW(x,b.x,b.y,b.z,L)}for(let x=0,A=v.length;x<A;++x){let N=v[x],L=N.start,D=N.count;for(let I=L,C=L+D;I<C;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let a=new Z,r=new Z,s=new Z,o=new Z,l=new Z,c=new Z,h=new Z,p=new Z;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,m),r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,g),h.subVectors(s,r),p.subVectors(a,r),h.cross(p),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),h.subVectors(s,r),p.subVectors(a,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*h;for(let f=0;f<h;f++)u[m++]=c[d++]}return new an(u,h,p)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $g=new Z,T3=new Z,E3=new Xt,ta=class{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=$g.subVectors(i,n).cross(T3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta($g),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(t.start).addScaledVector(a,s)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||E3.getNormalMatrix(t),a=this.coplanarPoint($g).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},w3=0,jr=class extends Ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w3++}),this.uuid=Su(),this.name="",this.type="Material",this.blending=Nl,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pv,this.blendDst=du,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ZM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zf,this.stencilZFail=Zf,this.stencilZPass=Zf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ft(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(n){let r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ta().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ar=new Z,tv=new Z,Lf=new Z,If=new Z,iu=class{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ar)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ar.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ar.copy(this.origin).addScaledVector(this.direction,n),ar.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){tv.copy(t).add(n).multiplyScalar(.5),Lf.copy(n).sub(t).normalize(),If.copy(this.origin).sub(tv);let r=t.distanceTo(n)*.5,s=-this.direction.dot(Lf),o=If.dot(this.direction),l=-If.dot(Lf),c=If.lengthSq(),h=Math.abs(1-s*s),p,u,d,m;if(h>0)if(p=s*l-o,u=s*o-l,m=r*h,p>=0)if(u>=-m)if(u<=m){let S=1/h;p*=S,u*=S,d=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(tv).addScaledVector(Lf,u),d}intersectSphere(t,n){if(t.radius<0)return null;ar.subVectors(t.center,this.origin);let i=ar.dot(this.direction),a=ar.dot(ar)-i*i,r=t.radius*t.radius;if(a>r)return null;let s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ar)!==null}intersectTriangle(t,n,i,a,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-s.x,u=t.y-s.y,d=t.z-s.z,m=n.x-s.x,S=n.y-s.y,g=n.z-s.z,f=i.x-s.x,v=i.y-s.y,b=i.z-s.z,_=Math.abs(l),M=Math.abs(c),T=Math.abs(h),w,x,A,N,L,D,I,C,U,H,F,V;if(_>=M&&_>=T?(A=l,D=p,U=m,V=f,l>=0?(w=c,x=h,N=u,L=d,I=S,C=g,H=v,F=b):(w=h,x=c,N=d,L=u,I=g,C=S,H=b,F=v)):M>=T?(A=c,D=u,U=S,V=v,c>=0?(w=h,x=l,N=d,L=p,I=g,C=m,H=b,F=f):(w=l,x=h,N=p,L=d,I=m,C=g,H=f,F=b)):(A=h,D=d,U=g,V=b,h>=0?(w=l,x=c,N=p,L=u,I=m,C=S,H=f,F=v):(w=c,x=l,N=u,L=p,I=S,C=m,H=v,F=f)),A===0)return null;let z=w/A,O=x/A,Y=1/A,lt=N-z*D,rt=L-O*D,Ot=I-z*U,bt=C-O*U,Bt=H-z*V,J=F-O*V,at=Bt*bt-J*Ot,it=lt*J-rt*Bt,Tt=Ot*rt-bt*lt;if(a){if(at<0||it<0||Tt<0)return null}else if((at<0||it<0||Tt<0)&&(at>0||it>0||Tt>0))return null;let ot=at+it+Tt;if(ot===0)return null;let St=Y*(at*D+it*U+Tt*V);return(ot>0?St<0:St>0)?null:this.at(St/ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},au=class extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},pM=new Ye,Fs=new iu,Pf=new Ws,mM=new Z,Of=new Z,zf=new Z,Bf=new Z,ev=new Z,Ff=new Z,gM=new Z,kf=new Z,hi=class extends wi{constructor(t=new Ai,n=new au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(r&&o){Ff.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(ev.fromBufferAttribute(p,t),s?Ff.addScaledVector(ev,h):Ff.addScaledVector(ev.sub(n),h))}n.add(Ff)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pf.copy(i.boundingSphere),Pf.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Pf.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Pf,mM)===null||Fs.origin.distanceToSquared(mM)>(t.far-t.near)**2))&&(pM.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(pM),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Fs)))}_computeIntersections(t,n,i){let a,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,S=u.length;m<S;m++){let g=u[m],f=s[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,M=b;_<M;_+=3){let T=o.getX(_),w=o.getX(_+1),x=o.getX(_+2);a=Hf(this,f,t,i,c,h,p,T,w,x),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let m=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=m,f=S;g<f;g+=3){let v=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);a=Hf(this,s,t,i,c,h,p,v,b,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,S=u.length;m<S;m++){let g=u[m],f=s[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,M=b;_<M;_+=3){let T=_,w=_+1,x=_+2;a=Hf(this,f,t,i,c,h,p,T,w,x),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let m=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=m,f=S;g<f;g+=3){let v=g,b=g+1,_=g+2;a=Hf(this,s,t,i,c,h,p,v,b,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}};function A3(e,t,n,i,a,r,s,o){let l;if(t.side===Jn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===ns,o),l===null)return null;kf.copy(o),kf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(kf);return c<n.near||c>n.far?null:{distance:c,point:kf.clone(),object:e}}function Hf(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,Of),e.getVertexPosition(l,zf),e.getVertexPosition(c,Bf);let h=A3(e,t,n,i,Of,zf,Bf,gM);if(h){let p=new Z;Zr.getBarycoord(gM,Of,zf,Bf,p),a&&(h.uv=Zr.getInterpolatedAttribute(a,o,l,c,p,new Wt)),r&&(h.uv1=Zr.getInterpolatedAttribute(r,o,l,c,p,new Wt)),s&&(h.normal=Zr.getInterpolatedAttribute(s,o,l,c,p,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Zr.getNormal(Of,zf,Bf,u.normal),h.face=u,h.barycoord=p}return h}var ud=class extends Kn{constructor(t=null,n=1,i=1,a,r,s,o,l,c=xn,h=xn,p,u){super(null,s,o,l,c,h,a,r,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=new Ws,C3=new Wt(.5,.5),Vf=new Z,ru=class{constructor(t=new ta,n=new ta,i=new ta,a=new ta,r=new ta,s=new ta){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ea,i=!1){let a=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],m=r[8],S=r[9],g=r[10],f=r[11],v=r[12],b=r[13],_=r[14],M=r[15];if(a[0].setComponents(c-s,d-h,f-m,M-v).normalize(),a[1].setComponents(c+s,d+h,f+m,M+v).normalize(),a[2].setComponents(c+o,d+p,f+S,M+b).normalize(),a[3].setComponents(c-o,d-p,f-S,M-b).normalize(),i)a[4].setComponents(l,u,g,_).normalize(),a[5].setComponents(c-l,d-u,f-g,M-_).normalize();else if(a[4].setComponents(c-l,d-u,f-g,M-_).normalize(),n===ea)a[5].setComponents(c+l,d+u,f+g,M+_).normalize();else if(n===Qc)a[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let n=C3.distanceTo(t.center);return ks.radius=.7071067811865476+n,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Vf.x=a.normal.x>0?t.max.x:t.min.x,Vf.y=a.normal.y>0?t.max.y:t.min.y,Vf.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Vf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hd=class extends jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vM=new Ye,ov=new iu,Gf=new Ws,Xf=new Z,su=class extends wi{constructor(t=new Ai,n=new hd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.matrixWorld,r=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gf.copy(i.boundingSphere),Gf.applyMatrix4(a),Gf.radius+=r,t.ray.intersectsSphere(Gf)===!1)return;vM.copy(a).invert(),ov.copy(t.ray).applyMatrix4(vM);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=u,S=d;m<S;m++){let g=c.getX(m);Xf.fromBufferAttribute(p,g),_M(Xf,g,l,a,t,n,this)}}else{let u=Math.max(0,s.start),d=Math.min(p.count,s.start+s.count);for(let m=u,S=d;m<S;m++)Xf.fromBufferAttribute(p,m),_M(Xf,m,l,a,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _M(e,t,n,i,a,r,s){let o=ov.distanceSqToPoint(e);if(o<n){let l=new Z;ov.closestPointToPoint(e,l),l.applyMatrix4(i);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ou=class extends Kn{constructor(t=[],n=is,i,a,r,s,o,l,c,h){super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Qr=class extends Kn{constructor(t,n,i=ia,a,r,s,o=xn,l=xn,c,h=Da,p=1){if(h!==Da&&h!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new El(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},fd=class extends Qr{constructor(t,n=ia,i=is,a,r,s=xn,o=xn,l,c=Da){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lu=class extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Al=class e extends Ai{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};let o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=0,d=0;m("z","y","x",-1,-1,i,n,t,s,r,0),m("z","y","x",1,-1,i,n,-t,s,r,1),m("x","z","y",1,1,t,i,n,a,s,2),m("x","z","y",1,-1,t,i,-n,a,s,3),m("x","y","z",1,-1,t,n,i,a,r,4),m("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Vi(c,3)),this.setAttribute("normal",new Vi(h,3)),this.setAttribute("uv",new Vi(p,2));function m(S,g,f,v,b,_,M,T,w,x,A){let N=_/w,L=M/x,D=_/2,I=M/2,C=T/2,U=w+1,H=x+1,F=0,V=0,z=new Z;for(let O=0;O<H;O++){let Y=O*L-I;for(let lt=0;lt<U;lt++){let rt=lt*N-D;z[S]=rt*v,z[g]=Y*b,z[f]=C,c.push(z.x,z.y,z.z),z[S]=0,z[g]=0,z[f]=T>0?1:-1,h.push(z.x,z.y,z.z),p.push(lt/w),p.push(1-O/x),F+=1}}for(let O=0;O<x;O++)for(let Y=0;Y<w;Y++){let lt=u+Y+U*O,rt=u+Y+U*(O+1),Ot=u+(Y+1)+U*(O+1),bt=u+(Y+1)+U*O;l.push(lt,rt,bt),l.push(rt,Ot,bt),V+=6}o.addGroup(d,V,A),d+=V,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qs=class e extends Ai{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],m=[],S=[],g=[];for(let f=0;f<h;f++){let v=f*u-s;for(let b=0;b<c;b++){let _=b*p-r;m.push(_,-v,0),S.push(0,0,1),g.push(b/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let b=v+c*f,_=v+c*(f+1),M=v+1+c*(f+1),T=v+1+c*f;d.push(b,_,T),d.push(_,M,T)}this.setIndex(d),this.setAttribute("position",new Vi(m,3)),this.setAttribute("normal",new Vi(S,3)),this.setAttribute("uv",new Vi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function js(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(xM(a))a.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(xM(a[0])){let r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();t[n][i]=r}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Fn(e){let t={};for(let n=0;n<e.length;n++){let i=js(e[n]);for(let a in i)t[a]=i[a]}return t}function xM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function R3(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Iv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var o2={clone:js,merge:Fn},N3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N3,this.fragmentShader=D3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=R3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new ce().setHex(a.value);break;case"v2":this.uniforms[i].value=new Wt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Xe().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dd=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var pd=class extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},md=class extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vl(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function nv(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var $r=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],r=n[i-1];t:{e:{let s;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=a,a=n[++i],t<a)break e}s=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=r,r=n[--i-1],t>=r)break e}s=i,i=0;break n}break t}for(;i<s;){let o=i+s>>>1;t<n[o]?s=o:i=o+1}if(a=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=t*a;for(let s=0;s!==a;++s)n[s]=i[r+s];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gd=class extends $r{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:av,endingEnd:av}}intervalChanged_(t,n,i){let a=this.parameterPositions,r=t-2,s=t+1,o=a[r],l=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case rv:r=t,o=2*n-i;break;case sv:r=a.length-2,o=n+a[r]-a[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rv:s=t,l=2*i-n;break;case sv:s=1,l=i+a[1]-a[0];break;default:s=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-n)/(a-n),S=m*m,g=S*m,f=-u*g+2*u*S-u*m,v=(1+u)*g+(-1.5-2*u)*S+(-.5+u)*m+1,b=(-1-d)*g+(1.5+d)*S+.5*m,_=d*g-d*S;for(let M=0;M!==o;++M)r[M]=f*s[h+M]+v*s[c+M]+b*s[l+M]+_*s[p+M];return r}},vd=class extends $r{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),p=1-h;for(let u=0;u!==o;++u)r[u]=s[c+u]*p+s[l+u]*h;return r}},_d=class extends $r{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},xd=class extends $r{interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(i-n)/(a-n),S=1-m;for(let g=0;g!==o;++g)r[g]=s[c+g]*S+s[l+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let S=s[c+m],g=s[l+m],f=d*u+m*2,v=p[f],b=p[f+1],_=t*u+m*2,M=h[_],T=h[_+1],w=L3(i,n,v,M,a);r[m]=l2(w,S,b,T,g)}return r}};function l2(e,t,n,i,a){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*a}function U3(e,t,n,i,a){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(a-i)}function L3(e,t,n,i,a){let r=(e-t)/(a-t);for(let s=0;s<8;s++){let o=l2(r,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=U3(r,t,n,i,a);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ci=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vl(n,this.TimeBufferType),this.values=vl(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:vl(t.times,Array),values:vl(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),nv(t.settings)&&(i.settings={inTangents:vl(t.settings.inTangents,Array),outTangents:vl(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _d(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new xd(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Jc:n=this.InterpolantFactoryMethodDiscrete;break;case rd:n=this.InterpolantFactoryMethodLinear;break;case Yf:n=this.InterpolantFactoryMethodSmooth;break;case iv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jc;case this.InterpolantFactoryMethodLinear:return rd;case this.InterpolantFactoryMethodSmooth:return Yf;case this.InterpolantFactoryMethodBezier:return iv}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;nv(this.settings)&&(yM(this.settings.inTangents,t),yM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,r=0,s=a-1;for(;r!==a&&i[r]<t;)++r;for(;s!==-1&&i[s]>n;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(s!==null&&s>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,s),t=!1;break}s=l}if(a!==void 0&&c3(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Yf,r=t.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let m=0;m!==i;++m){let S=n[p+m];if(S!==n[u+m]||S!==n[d+m]){l=!0;break}}}if(l){if(o!==s){t[s]=t[o];let p=o*i,u=s*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*i,l=s*i,c=0;c!==i;++c)n[l+c]=n[o+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=n.slice(0,s*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,nv(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function yM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=rd;var ts=class extends Ci{constructor(t,n,i){super(t,n,i)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Jc;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var yd=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}};yd.prototype.ValueTypeName="color";var bd=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}};bd.prototype.ValueTypeName="number";var Sd=class extends $r{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)La.slerpFlat(r,0,s,c-o,s,c,l);return r}},cu=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Sd(this.times,this.values,this.getValueSize(),t)}};cu.prototype.ValueTypeName="quaternion";cu.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Ci{constructor(t,n,i){super(t,n,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Jc;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Md=class extends Ci{constructor(t,n,i,a){super(t,n,i,a)}};Md.prototype.ValueTypeName="vector";var Kf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(bM(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!bM(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function bM(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Td=class{constructor(t,n,i){let a=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],m=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},c2=new Td,Cl=class{constructor(t){this.manager=t!==void 0?t:c2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=new WeakMap,Ed=class extends Cl{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Kf.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0);else{let p=_l.get(s);p===void 0&&(p=[],_l.set(s,p)),p.push({onLoad:n,onError:a})}return s}let o=Ml("img");function l(){h(),n&&n(this);let p=_l.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}_l.delete(this),r.manager.itemEnd(t)}function c(p){h(),a&&a(p),Kf.remove(`image:${t}`);let u=_l.get(this)||[];for(let d=0;d<u.length;d++){let m=u[d];m.onError&&m.onError(p)}_l.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kf.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var uu=class extends Cl{constructor(t){super(t)}load(t,n,i,a){let r=new Kn,s=new Ed(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}};var Wf=new Z,qf=new La,Ra=new Z,Ys=class extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wf,qf,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wf,qf,Ra.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Wf,qf,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wf,qf,Ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yr=new Z,SM=new Wt,MM=new Wt,ci=class extends Ys{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(Pg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z)}getViewSize(t,n){return this.getViewBounds(t,SM,MM),n.subVectors(MM,SM)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Pg*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Zs=class extends Ys{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var xl=-90,yl=1,wd=class extends wi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new ci(xl,yl,t,n);a.layers=this.layers,this.add(a);let r=new ci(xl,yl,t,n);r.layers=this.layers,this.add(r);let s=new ci(xl,yl,t,n);s.layers=this.layers,this.add(s);let o=new ci(xl,yl,t,n);o.layers=this.layers,this.add(o);let l=new ci(xl,yl,t,n);l.layers=this.layers,this.add(l);let c=new ci(xl,yl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(let c of n)this.remove(c);if(t===ea)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ad=class extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pv="\\[\\]\\.:\\/",I3=new RegExp("["+Pv+"]","g"),Ov="[^"+Pv+"]",P3="[^"+Pv.replace("\\.","")+"]",O3=/((?:WC+[\/:])*)/.source.replace("WC",Ov),z3=/(WCOD+)?/.source.replace("WCOD",P3),B3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ov),F3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ov),k3=new RegExp("^"+O3+z3+B3+F3+"$"),H3=["material","materials","bones","map"],lv=class{constructor(t,n,i){let a=i||Fe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Fe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I3,"")}static parseTrackName(t){let n=k3.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=i.nodeName.substring(a+1);H3.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=n.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=lv;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M4=new Float32Array(1);var Vv=class Vv{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=a,this}};Vv.prototype.isMatrix2=!0;var cv=Vv;function zv(e,t,n,i){let a=V3(i);switch(n){case Cv:return e*t;case Nv:return e*t/a.components*a.byteLength;case Od:return e*t/a.components*a.byteLength;case ss:return e*t*2/a.components*a.byteLength;case zd:return e*t*2/a.components*a.byteLength;case Rv:return e*t*3/a.components*a.byteLength;case Gi:return e*t*4/a.components*a.byteLength;case Bd:return e*t*4/a.components*a.byteLength;case gu:case vu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _u:case xu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case kd:case Vd:return Math.max(e,16)*Math.max(t,8)/4;case Fd:case Hd:return Math.max(e,8)*Math.max(t,8)/2;case Gd:case Xd:case qd:case Yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wd:case yu:case Zd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case jd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case $d:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case tp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ep:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case np:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ip:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case sp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case op:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case lp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cp:case up:case hp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case fp:case dp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case bu:case pp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function V3(e){switch(e){case Ri:case Tv:return{byteLength:1,components:1};case Dl:case Ev:case ra:return{byteLength:2,components:1};case Id:case Pd:return{byteLength:2,components:4};case ia:case Ld:case aa:return{byteLength:4,components:1};case wv:case Av:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function D2(){let e=null,t=!1,n=null,i=null;function a(r,s){i=e.requestAnimationFrame(a),n(r,s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function X3(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<p.length;d++){let m=p[u],S=p[d];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++u,p[u]=S)}p.length=u+1;for(let d=0,m=p.length;d<m;d++){let S=p[d];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var W3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q3=`#ifdef USE_ALPHAHASH
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
#endif`,Y3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j3=`#ifdef USE_AOMAP
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
#endif`,Q3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$3=`#ifdef USE_BATCHING
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
#endif`,tC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aC=`#ifdef USE_IRIDESCENCE
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
#endif`,rC=`#ifdef USE_BUMPMAP
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
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pC=`#define PI 3.141592653589793
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
} // validated`,mC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gC=`vec3 transformedNormal = objectNormal;
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
#endif`,vC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_C=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bC="gl_FragColor = linearToOutputTexel( gl_FragColor );",SC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MC=`#ifdef USE_ENVMAP
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
#endif`,TC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
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
#endif`,CC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UC=`#ifdef USE_GRADIENTMAP
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
}`,LC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zC=`#ifdef USE_ENVMAP
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
#endif`,BC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VC=`PhysicalMaterial material;
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
#endif`,GC=`uniform sampler2D dfgLUT;
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
}`,XC=`
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
#endif`,WC=`#if defined( RE_IndirectDiffuse )
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
#endif`,qC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ZC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$C=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eR=`#if defined( USE_POINTS_UV )
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
#endif`,nR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`#ifdef USE_MORPHTARGETS
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
#endif`,lR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pR=`#ifdef USE_NORMALMAP
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
#endif`,mR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_R=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ER=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NR=`float getShadowMask() {
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
}`,DR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UR=`#ifdef USE_SKINNING
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
#endif`,LR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IR=`#ifdef USE_SKINNING
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
#endif`,PR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FR=`#ifdef USE_TRANSMISSION
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
#endif`,kR=`#ifdef USE_TRANSMISSION
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
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qR=`uniform sampler2D t2D;
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`#include <common>
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
}`,QR=`#if DEPTH_PACKING == 3200
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
}`,$R=`#define DISTANCE
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
}`,tN=`#define DISTANCE
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
}`,eN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iN=`uniform float scale;
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
}`,aN=`uniform vec3 diffuse;
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
}`,rN=`#include <common>
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
}`,sN=`uniform vec3 diffuse;
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
}`,oN=`#define LAMBERT
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
}`,lN=`#define LAMBERT
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
}`,cN=`#define MATCAP
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
}`,uN=`#define MATCAP
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
}`,hN=`#define NORMAL
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
}`,fN=`#define NORMAL
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
}`,dN=`#define PHONG
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
}`,pN=`#define PHONG
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
}`,mN=`#define STANDARD
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
}`,gN=`#define STANDARD
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
}`,vN=`#define TOON
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
}`,_N=`#define TOON
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
}`,xN=`uniform float size;
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
}`,yN=`uniform vec3 diffuse;
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
}`,bN=`#include <common>
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
}`,SN=`uniform vec3 color;
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
}`,MN=`uniform float rotation;
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
}`,TN=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:W3,alphahash_pars_fragment:q3,alphamap_fragment:Y3,alphamap_pars_fragment:Z3,alphatest_fragment:K3,alphatest_pars_fragment:J3,aomap_fragment:j3,aomap_pars_fragment:Q3,batching_pars_vertex:$3,batching_vertex:tC,begin_vertex:eC,beginnormal_vertex:nC,bsdfs:iC,iridescence_fragment:aC,bumpmap_pars_fragment:rC,clipping_planes_fragment:sC,clipping_planes_pars_fragment:oC,clipping_planes_pars_vertex:lC,clipping_planes_vertex:cC,color_fragment:uC,color_pars_fragment:hC,color_pars_vertex:fC,color_vertex:dC,common:pC,cube_uv_reflection_fragment:mC,defaultnormal_vertex:gC,displacementmap_pars_vertex:vC,displacementmap_vertex:_C,emissivemap_fragment:xC,emissivemap_pars_fragment:yC,colorspace_fragment:bC,colorspace_pars_fragment:SC,envmap_fragment:MC,envmap_common_pars_fragment:TC,envmap_pars_fragment:EC,envmap_pars_vertex:wC,envmap_physical_pars_fragment:zC,envmap_vertex:AC,fog_vertex:CC,fog_pars_vertex:RC,fog_fragment:NC,fog_pars_fragment:DC,gradientmap_pars_fragment:UC,lightmap_pars_fragment:LC,lights_lambert_fragment:IC,lights_lambert_pars_fragment:PC,lights_pars_begin:OC,lights_toon_fragment:BC,lights_toon_pars_fragment:FC,lights_phong_fragment:kC,lights_phong_pars_fragment:HC,lights_physical_fragment:VC,lights_physical_pars_fragment:GC,lights_fragment_begin:XC,lights_fragment_maps:WC,lights_fragment_end:qC,lightprobes_pars_fragment:YC,logdepthbuf_fragment:ZC,logdepthbuf_pars_fragment:KC,logdepthbuf_pars_vertex:JC,logdepthbuf_vertex:jC,map_fragment:QC,map_pars_fragment:$C,map_particle_fragment:tR,map_particle_pars_fragment:eR,metalnessmap_fragment:nR,metalnessmap_pars_fragment:iR,morphinstance_vertex:aR,morphcolor_vertex:rR,morphnormal_vertex:sR,morphtarget_pars_vertex:oR,morphtarget_vertex:lR,normal_fragment_begin:cR,normal_fragment_maps:uR,normal_pars_fragment:hR,normal_pars_vertex:fR,normal_vertex:dR,normalmap_pars_fragment:pR,clearcoat_normal_fragment_begin:mR,clearcoat_normal_fragment_maps:gR,clearcoat_pars_fragment:vR,iridescence_pars_fragment:_R,opaque_fragment:xR,packing:yR,premultiplied_alpha_fragment:bR,project_vertex:SR,dithering_fragment:MR,dithering_pars_fragment:TR,roughnessmap_fragment:ER,roughnessmap_pars_fragment:wR,shadowmap_pars_fragment:AR,shadowmap_pars_vertex:CR,shadowmap_vertex:RR,shadowmask_pars_fragment:NR,skinbase_vertex:DR,skinning_pars_vertex:UR,skinning_vertex:LR,skinnormal_vertex:IR,specularmap_fragment:PR,specularmap_pars_fragment:OR,tonemapping_fragment:zR,tonemapping_pars_fragment:BR,transmission_fragment:FR,transmission_pars_fragment:kR,uv_pars_fragment:HR,uv_pars_vertex:VR,uv_vertex:GR,worldpos_vertex:XR,background_vert:WR,background_frag:qR,backgroundCube_vert:YR,backgroundCube_frag:ZR,cube_vert:KR,cube_frag:JR,depth_vert:jR,depth_frag:QR,distance_vert:$R,distance_frag:tN,equirect_vert:eN,equirect_frag:nN,linedashed_vert:iN,linedashed_frag:aN,meshbasic_vert:rN,meshbasic_frag:sN,meshlambert_vert:oN,meshlambert_frag:lN,meshmatcap_vert:cN,meshmatcap_frag:uN,meshnormal_vert:hN,meshnormal_frag:fN,meshphong_vert:dN,meshphong_frag:pN,meshphysical_vert:mN,meshphysical_frag:gN,meshtoon_vert:vN,meshtoon_frag:_N,points_vert:xN,points_frag:yN,shadow_vert:bN,shadow_frag:SN,sprite_vert:MN,sprite_frag:TN},mt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},za={basic:{uniforms:Fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Fn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Fn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ce(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Fn([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Fn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Fn([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Fn([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Fn([mt.common,mt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Fn([mt.lights,mt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};za.physical={uniforms:Fn([za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var vp={r:0,b:0,g:0},EN=new Ye,U2=new Xt;U2.set(-1,0,0,0,1,0,0,0,1);function wN(e,t,n,i,a,r){let s=new ce(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let _=v.backgroundBlurriness>0;b=t.get(b,_)}return b}function m(v){let b=!1,_=d(v);_===null?g(s,o):_&&_.isColor&&(g(_,1),b=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(v,b){let _=d(b);_&&(_.isCubeTexture||_.mapping===pu)?(c===void 0&&(c=new hi(new Al(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:js(za.backgroundCube.uniforms),vertexShader:za.backgroundCube.vertexShader,fragmentShader:za.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(EN.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(U2),c.material.toneMapped=re.getTransfer(_.colorSpace)!==_e,(h!==_||p!==_.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new hi(new qs(2,2),new Nn({name:"BackgroundMaterial",uniforms:js(za.background.uniforms),vertexShader:za.background.vertexShader,fragmentShader:za.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,b){v.getRGB(vp,Iv(e)),n.buffers.color.setClear(vp.r,vp.g,vp.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,b=1){s.set(v),o=b,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(s,o)},render:m,addToRenderList:S,dispose:f}}function AN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),r=a,s=!1;function o(L,D,I,C,U){let H=!1,F=p(L,C,I,D);r!==F&&(r=F,c(r.object)),H=d(L,C,I,U),H&&m(L,C,I,U),U!==null&&t.update(U,e.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,_(L,D,I,C),U!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function p(L,D,I,C){let U=C.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let F=L.isInstancedMesh===!0?L.id:0,V=H[F];V===void 0&&(V={},H[F]=V);let z=V[I.id];z===void 0&&(z={},V[I.id]=z);let O=z[U];return O===void 0&&(O=u(l()),z[U]=O),O}function u(L){let D=[],I=[],C=[];for(let U=0;U<n;U++)D[U]=0,I[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,D,I,C){let U=r.attributes,H=D.attributes,F=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let Y=U[z],lt=H[z];if(lt===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),Y===void 0||Y.attribute!==lt||lt&&Y.data!==lt.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function m(L,D,I,C){let U={},H=D.attributes,F=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let Y=H[z];Y===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));let lt={};lt.attribute=Y,Y&&Y.data&&(lt.data=Y.data),U[z]=lt,F++}r.attributes=U,r.attributesNum=F,r.index=C}function S(){let L=r.newAttributes;for(let D=0,I=L.length;D<I;D++)L[D]=0}function g(L){f(L,0)}function f(L,D){let I=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;I[L]=1,C[L]===0&&(e.enableVertexAttribArray(L),C[L]=1),U[L]!==D&&(e.vertexAttribDivisor(L,D),U[L]=D)}function v(){let L=r.newAttributes,D=r.enabledAttributes;for(let I=0,C=D.length;I<C;I++)D[I]!==L[I]&&(e.disableVertexAttribArray(I),D[I]=0)}function b(L,D,I,C,U,H,F){F===!0?e.vertexAttribIPointer(L,D,I,U,H):e.vertexAttribPointer(L,D,I,C,U,H)}function _(L,D,I,C){S();let U=C.attributes,H=I.getAttributes(),F=D.defaultAttributeValues;for(let V in H){let z=H[V];if(z.location>=0){let O=U[V];if(O===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),O!==void 0){let Y=O.normalized,lt=O.itemSize,rt=t.get(O);if(rt===void 0)continue;let Ot=rt.buffer,bt=rt.type,Bt=rt.bytesPerElement,J=bt===e.INT||bt===e.UNSIGNED_INT||O.gpuType===Ld;if(O.isInterleavedBufferAttribute){let at=O.data,it=at.stride,Tt=O.offset;if(at.isInstancedInterleavedBuffer){for(let ot=0;ot<z.locationSize;ot++)f(z.location+ot,at.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<z.locationSize;ot++)g(z.location+ot);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let ot=0;ot<z.locationSize;ot++)b(z.location+ot,lt/z.locationSize,bt,Y,it*Bt,(Tt+lt/z.locationSize*ot)*Bt,J)}else{if(O.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)f(z.location+at,O.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let at=0;at<z.locationSize;at++)g(z.location+at);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let at=0;at<z.locationSize;at++)b(z.location+at,lt/z.locationSize,bt,Y,lt*Bt,lt/z.locationSize*at*Bt,J)}}else if(F!==void 0){let Y=F[V];if(Y!==void 0)switch(Y.length){case 2:e.vertexAttrib2fv(z.location,Y);break;case 3:e.vertexAttrib3fv(z.location,Y);break;case 4:e.vertexAttrib4fv(z.location,Y);break;default:e.vertexAttrib1fv(z.location,Y)}}}}v()}function M(){A();for(let L in i){let D=i[L];for(let I in D){let C=D[I];for(let U in C){let H=C[U];for(let F in H)h(H[F].object),delete H[F];delete C[U]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;let D=i[L.id];for(let I in D){let C=D[I];for(let U in C){let H=C[U];for(let F in H)h(H[F].object),delete H[F];delete C[U]}}delete i[L.id]}function w(L){for(let D in i){let I=i[D];for(let C in I){let U=I[C];if(U[L.id]===void 0)continue;let H=U[L.id];for(let F in H)h(H[F].object),delete H[F];delete U[L.id]}}}function x(L){for(let D in i){let I=i[D],C=L.isInstancedMesh===!0?L.id:0,U=I[C];if(U!==void 0){for(let H in U){let F=U[H];for(let V in F)h(F[V].object),delete F[V];delete U[H]}delete I[C],Object.keys(I).length===0&&delete i[D]}}}function A(){N(),s=!0,r!==a&&(r=a,c(r.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function CN(e,t,n){let i;function a(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function RN(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==Gi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ri&&w!==aa&&!x&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:M,samples:T}}function NN(e){let t=this,n=null,i=0,a=!1,r=!1,s=new ta,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let m=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,b=v*4,_=f.clippingState||null;l.value=_,_=h(m,u,b,d);for(let M=0;M!==b;++M)_[M]=n[M];f.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,m){let S=p!==null?p.length:0,g=null;if(S!==0){if(g=l.value,m!==!0||g===null){let f=d+S*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,_=d;b!==S;++b,_+=4)s.copy(p[b]).applyMatrix4(v,o),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var Il=4,DN=6,UN=20,LN=256,Mu=new Zs,u2=new ce,Gv=null,Xv=0,Wv=0,qv=!1,IN=new Z,Qs=new Z,xp=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,r={}){let{size:s=256,position:o=IN}=r;Gv=this._renderer.getRenderTarget(),Xv=this._renderer.getActiveCubeFace(),Wv=this._renderer.getActiveMipmapLevel(),qv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gv,Xv,Wv),this._renderer.xr.enabled=qv,t.scissorTest=!1,Ll(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===is||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gv=this._renderer.getRenderTarget(),Xv=this._renderer.getActiveCubeFace(),Wv=this._renderer.getActiveMipmapLevel(),qv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ra,format:Gi,colorSpace:Gs,depthBuffer:!1},a=h2(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h2(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PN(r)),this._blurMaterial=zN(r,t,n),this._ggxMaterial=ON(r,t,n)}return a}_compileMaterial(t){let n=new hi(new Ai,t);this._renderer.compile(n,Mu)}_sceneToCubeUV(t,n,i,a,r){let l=new ci(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(u2),p.toneMapping=na,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new Al,new au({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,f=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,f=!0):(g.color.copy(u2),f=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;Ll(a,_*M,b>2?M:0,M,M),p.setRenderTarget(a),f&&p.render(S,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===is||t.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=d2()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f2());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Mu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let l=s.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:m}=this,S=this._sizeLods[i],g=3*S*(i>m-Il?i-m+Il:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-n,Ll(r,g,f,3*S,2*S),a.setRenderTarget(r),a.render(o,Mu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Ll(t,g,f,3*S,2*S),a.setRenderTarget(t),a.render(o,Mu)}_blur(t,n,i,a){let r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,s),this._blurPass(r,t,i,i,s)}_blurPass(t,n,i,a,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[a],p=3*h*(a>this._lodMax-Il?a-this._lodMax+Il:0),u=4*(this._cubeSize-h);Ll(n,p,u,3*h,2*h),s.setRenderTarget(n),s.render(l,Mu)}};function PN(e){let t=[],n=[],i=e,a=e-Il+1+DN;for(let r=0;r<a;r++){let s=Math.pow(2,i);t.push(s);let o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,m=new Float32Array(d*u*p),S=new Float32Array(d*u*p);for(let f=0;f<p;f++){let v=f%3*2/3-1,b=f>2?0:-1,_=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];m.set(_,d*u*f);for(let M=0;M<u;M++){let T=h[M*2]*2-1,w=h[M*2+1]*2-1;f===0?Qs.set(1,w,T):f===1?Qs.set(-T,1,-w):f===2?Qs.set(-T,w,1):f===3?Qs.set(-1,w,-T):f===4?Qs.set(-T,-1,w):Qs.set(T,w,-1),Qs.toArray(S,(f*u+M)*d)}}let g=new Ai;g.setAttribute("position",new an(m,d)),g.setAttribute("outputDirection",new an(S,d)),n.push(new hi(g,null)),i>Il&&i--}return{lodMeshes:n,sizeLods:t}}function h2(e,t,n){let i=new ui(e,t,n);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ll(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function ON(e,t,n){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bp(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function zN(e,t,n){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:UN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bp(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function f2(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function d2(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function bp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yp=class extends ui{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new ou(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Al(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Pa});r.uniforms.tEquirect.value=n;let s=new hi(a,r),o=n.minFilter;return n.minFilter===as&&(n.minFilter=cn),new wd(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}};function BN(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Nd||d===Dd)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let S=new yp(m.height);return S.fromEquirectangularTexture(e,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let d=u.mapping,m=d===Nd||d===Dd,S=d===is||d===Js;if(m||S){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new xp(e)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new xp(e)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Nd?u.mapping=is:d===Dd&&(u.mapping=Js),u}function l(u){let d=0,m=6;for(let S=0;S<m;S++)u[S]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function FN(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Vs("WebGLRenderer: "+i+" extension not supported."),a}}}function kN(e,t,n,i){let a={},r=new WeakMap;function s(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete a[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,m=p.attributes.position,S=0;if(m===void 0)return;if(d!==null){let v=d.array;S=d.version;for(let b=0,_=v.length;b<_;b+=3){let M=v[b+0],T=v[b+1],w=v[b+2];u.push(M,T,T,w,w,M)}}else{let v=m.array;S=m.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let M=b+0,T=b+1,w=b+2;u.push(M,T,T,w,w,M)}}let g=new(m.count>=65535?nu:eu)(u,1);g.version=S;let f=r.get(p);f&&t.remove(f),r.set(p,g)}function h(p){let u=r.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function HN(e,t,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){e.drawElements(i,u,r,p*s),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,r,p*s,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,d);let S=0;for(let g=0;g<d;g++)S+=u[g];n.update(S,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function VN(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function GN(e,t,n){let i=new WeakMap,a=new Xe;function r(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var d=N;u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;m===!0&&(_=1),S===!0&&(_=2),g===!0&&(_=3);let M=o.attributes.position.count*_,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*p),x=new $c(w,M,T,p);x.type=aa,x.needsUpdate=!0;let A=_*4;for(let L=0;L<p;L++){let D=f[L],I=v[L],C=b[L],U=M*T*4*L;for(let H=0;H<D.count;H++){let F=H*A;m===!0&&(a.fromBufferAttribute(D,H),w[U+F+0]=a.x,w[U+F+1]=a.y,w[U+F+2]=a.z,w[U+F+3]=0),S===!0&&(a.fromBufferAttribute(I,H),w[U+F+4]=a.x,w[U+F+5]=a.y,w[U+F+6]=a.z,w[U+F+7]=0),g===!0&&(a.fromBufferAttribute(C,H),w[U+F+8]=a.x,w[U+F+9]=a.y,w[U+F+10]=a.z,w[U+F+11]=C.itemSize===4?a.w:1)}}u={count:p,texture:x,size:new Wt(M,T)},i.set(o,u),o.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let S=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function XN(e,t,n,i,a){let r=new WeakMap;function s(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:s,dispose:o}}var WN={[gv]:"LINEAR_TONE_MAPPING",[vv]:"REINHARD_TONE_MAPPING",[_v]:"CINEON_TONE_MAPPING",[xv]:"ACES_FILMIC_TONE_MAPPING",[bv]:"AGX_TONE_MAPPING",[Sv]:"NEUTRAL_TONE_MAPPING",[yv]:"CUSTOM_TONE_MAPPING"};function qN(e,t,n,i,a,r){let s=new ui(t,n,{type:e,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ai;c.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vi([0,2,0,0,2,0],2));let h=new dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new hi(c,h),u=new Zs(-1,1,1,-1,0,1),d=null,m=null,S=!1,g,f=null,v=[],b=!1;this.setSize=function(_,M){s.setSize(_,M),o!==null&&o.setSize(_,M),l!==null&&l.setSize(_,M);for(let T=0;T<v.length;T++){let w=v[T];w.setSize&&w.setSize(_,M)}},this.setEffects=function(_){v=_,b=v.length>0&&v[0].isRenderPass===!0;let M=s.width,T=s.height;v.length>0&&o===null&&(o=new ui(M,T,{type:ra,depthBuffer:!1,stencilBuffer:!1}),l=new ui(M,T,{type:ra,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let x=v[w];x.setSize&&x.setSize(M,T)}},this.begin=function(_,M){if(S||_.toneMapping===na&&v.length===0)return!1;if(f=M,M!==null){let T=M.width,w=M.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return b===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=na,!0},this.hasRenderPass=function(){return b},this.end=function(_,M){_.toneMapping=g,S=!0;let T=s,w=o;for(let x=0;x<v.length;x++){let A=v[x];A.enabled!==!1&&(A.render(_,w,T,M),A.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,h.defines={},re.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let x=WN[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(p,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var L2=new Kn,Kv=new Qr(1,1),I2=new $c,P2=new cd,O2=new ou,p2=[],m2=[],g2=new Float32Array(16),v2=new Float32Array(9),_2=new Float32Array(4);function zl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,r=p2[a];if(r===void 0&&(r=new Float32Array(a),p2[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function un(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Sp(e,t){let n=m2[t];n===void 0&&(n=new Int32Array(t),m2[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function YN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ZN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function KN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(un(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function JN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function jN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;_2.set(i),e.uniformMatrix2fv(this.addr,!1,_2),hn(n,i)}}function QN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;v2.set(i),e.uniformMatrix3fv(this.addr,!1,v2),hn(n,i)}}function $N(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;g2.set(i),e.uniformMatrix4fv(this.addr,!1,g2),hn(n,i)}}function tD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function eD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function nD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function iD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function aD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function sD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function oD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function lD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Kv.compareFunction=n.isReversedDepthBuffer()?gp:mp,r=Kv):r=L2,n.setTexture2D(t||r,a)}function cD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||P2,a)}function uD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||O2,a)}function hD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||I2,a)}function fD(e){switch(e){case 5126:return YN;case 35664:return ZN;case 35665:return KN;case 35666:return JN;case 35674:return jN;case 35675:return QN;case 35676:return $N;case 5124:case 35670:return tD;case 35667:case 35671:return eD;case 35668:case 35672:return nD;case 35669:case 35673:return iD;case 5125:return aD;case 36294:return rD;case 36295:return sD;case 36296:return oD;case 35678:case 36198:case 36298:case 36306:case 35682:return lD;case 35679:case 36299:case 36307:return cD;case 35680:case 36300:case 36308:case 36293:return uD;case 36289:case 36303:case 36311:case 36292:return hD}}function dD(e,t){e.uniform1fv(this.addr,t)}function pD(e,t){let n=zl(t,this.size,2);e.uniform2fv(this.addr,n)}function mD(e,t){let n=zl(t,this.size,3);e.uniform3fv(this.addr,n)}function gD(e,t){let n=zl(t,this.size,4);e.uniform4fv(this.addr,n)}function vD(e,t){let n=zl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _D(e,t){let n=zl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xD(e,t){let n=zl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yD(e,t){e.uniform1iv(this.addr,t)}function bD(e,t){e.uniform2iv(this.addr,t)}function SD(e,t){e.uniform3iv(this.addr,t)}function MD(e,t){e.uniform4iv(this.addr,t)}function TD(e,t){e.uniform1uiv(this.addr,t)}function ED(e,t){e.uniform2uiv(this.addr,t)}function wD(e,t){e.uniform3uiv(this.addr,t)}function AD(e,t){e.uniform4uiv(this.addr,t)}function CD(e,t,n){let i=this.cache,a=t.length,r=Sp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));let s;this.type===e.SAMPLER_2D_SHADOW?s=Kv:s=L2;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||s,r[o])}function RD(e,t,n){let i=this.cache,a=t.length,r=Sp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||P2,r[s])}function ND(e,t,n){let i=this.cache,a=t.length,r=Sp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||O2,r[s])}function DD(e,t,n){let i=this.cache,a=t.length,r=Sp(n,a);un(i,r)||(e.uniform1iv(this.addr,r),hn(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||I2,r[s])}function UD(e){switch(e){case 5126:return dD;case 35664:return pD;case 35665:return mD;case 35666:return gD;case 35674:return vD;case 35675:return _D;case 35676:return xD;case 5124:case 35670:return yD;case 35667:case 35671:return bD;case 35668:case 35672:return SD;case 35669:case 35673:return MD;case 5125:return TD;case 36294:return ED;case 36295:return wD;case 36296:return AD;case 35678:case 36198:case 36298:case 36306:case 35682:return CD;case 35679:case 36299:case 36307:return RD;case 35680:case 36300:case 36308:case 36293:return ND;case 36289:case 36303:case 36311:case 36292:return DD}}var Jv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fD(n.type)}},jv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UD(n.type)}},Qv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let o=a[r];o.setValue(t,n[o.id],i)}}},Yv=/(\w+)(\])?(\[|\.)?/g;function x2(e,t){e.seq.push(t),e.map[t.id]=t}function LD(e,t,n){let i=e.name,a=i.length;for(Yv.lastIndex=0;;){let r=Yv.exec(i),s=Yv.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){x2(n,c===void 0?new Jv(o,e,t):new jv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Qv(o),x2(n,p)),n=p}}}var Pl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(n,s),l=t.getUniformLocation(n,o.name);LD(o,l,this)}let a=[],r=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(t,n,i,a){let r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,r=t.length;a!==r;++a){let s=t[a];s.id in n&&i.push(s)}return i}};function y2(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var ID=37297,PD=0;function OD(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}var b2=new Xt;function zD(e){re._getMatrix(b2,re.workingColorSpace,e);let t=`mat3( ${b2.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case jc:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function S2(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+OD(e.getShaderSource(t),o)}else return r}function BD(e,t){let n=zD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var FD={[gv]:"Linear",[vv]:"Reinhard",[_v]:"Cineon",[xv]:"ACESFilmic",[bv]:"AgX",[Sv]:"Neutral",[yv]:"Custom"};function kD(e,t){let n=FD[t];return n===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var _p=new Z;function HD(){re.getLuminanceCoefficients(_p);let e=_p.x.toFixed(4),t=_p.y.toFixed(4),n=_p.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eu).join(`
`)}function GD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function XD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=e.getActiveAttrib(t,a),s=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Eu(e){return e!==""}function M2(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function T2(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var WD=/^[ \t]*#include +<([\w\d./]+)>/gm;function $v(e){return e.replace(WD,YD)}var qD=new Map;function YD(e,t){let n=jt[t];if(n===void 0){let i=qD.get(t);if(i!==void 0)n=jt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $v(n)}var ZD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E2(e){return e.replace(ZD,KD)}function KD(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function w2(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var JD={[hu]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function jD(e){return JD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var QD={[is]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function $D(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":QD[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var tU={[Js]:"ENVMAP_MODE_REFRACTION"};function eU(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":tU[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nU={[mv]:"ENVMAP_BLENDING_MULTIPLY",[GM]:"ENVMAP_BLENDING_MIX",[XM]:"ENVMAP_BLENDING_ADD"};function iU(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":nU[e.combine]||"ENVMAP_BLENDING_NONE"}function aU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function rU(e,t,n,i){let a=e.getContext(),r=n.defines,s=n.vertexShader,o=n.fragmentShader,l=jD(n),c=$D(n),h=eU(n),p=iU(n),u=aU(n),d=VD(n),m=GD(r),S=a.createProgram(),g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Eu).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Eu).join(`
`),f.length>0&&(f+=`
`)):(g=[w2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eu).join(`
`),f=[w2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==na?"#define TONE_MAPPING":"",n.toneMapping!==na?jt.tonemapping_pars_fragment:"",n.toneMapping!==na?kD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,BD("linearToOutputTexel",n.outputColorSpace),HD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eu).join(`
`)),s=$v(s),s=M2(s,n),s=T2(s,n),o=$v(o),o=M2(o,n),o=T2(o,n),s=E2(s),o=E2(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=v+g+s,_=v+f+o,M=y2(a,a.VERTEX_SHADER,b),T=y2(a,a.FRAGMENT_SHADER,_);a.attachShader(S,M),a.attachShader(S,T),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function w(L){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(S)||"",I=a.getShaderInfoLog(M)||"",C=a.getShaderInfoLog(T)||"",U=D.trim(),H=I.trim(),F=C.trim(),V=!0,z=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,S,M,T);else{let O=S2(a,M,"vertex"),Y=S2(a,T,"fragment");Ht("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+O+`
`+Y)}else U!==""?Ft("WebGLProgram: Program Info Log:",U):(H===""||F==="")&&(z=!1);z&&(L.diagnostics={runnable:V,programLog:U,vertexShader:{log:H,prefix:g},fragmentShader:{log:F,prefix:f}})}a.deleteShader(M),a.deleteShader(T),x=new Pl(a,S),A=XD(a,S)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(S,ID)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PD++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=T,this}var sU=0,t_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new e_(t),n.set(t,i)),i}},e_=class{constructor(t){this.id=sU++,this.code=t,this.usedTimes=0}};function oU(e){return e===ss||e===yu||e===bu}function lU(e,t,n,i,a,r){let s=new tu,o=new t_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,A,N,L,D,I){let C=L.fog,U=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||H,F),z=V&&V.mapping===pu?V.image.height:null,O=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,lt=Y!==void 0?Y.length:0,rt=0;U.morphAttributes.position!==void 0&&(rt=1),U.morphAttributes.normal!==void 0&&(rt=2),U.morphAttributes.color!==void 0&&(rt=3);let Ot,bt,Bt,J;if(O){let Ne=za[O];Ot=Ne.vertexShader,bt=Ne.fragmentShader}else{Ot=x.vertexShader,bt=x.fragmentShader;let Ne=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,Ne,me),Bt=Ne.id,J=me.id}let at=e.getRenderTarget(),it=e.state.buffers.depth.getReversed(),Tt=D.isInstancedMesh===!0,ot=D.isBatchedMesh===!0,St=!!x.map,Kt=!!x.matcap,Vt=!!V,Zt=!!x.aoMap,te=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,qt=!!x.normalMap,ue=!!x.displacementMap,Te=!!x.emissiveMap,xe=!!x.metalnessMap,Nt=!!x.roughnessMap,P=x.anisotropy>0,le=x.clearcoat>0,zt=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,G=x.sheen>0,q=x.transmission>0,Q=P&&!!x.anisotropyMap,ct=le&&!!x.clearcoatMap,ft=le&&!!x.clearcoatNormalMap,$=le&&!!x.clearcoatRoughnessMap,tt=y&&!!x.iridescenceMap,ht=y&&!!x.iridescenceThicknessMap,Ct=G&&!!x.sheenColorMap,j=G&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Et=!!x.specularColorMap,xt=!!x.specularIntensityMap,Ut=q&&!!x.transmissionMap,k=q&&!!x.thicknessMap,dt=!!x.gradientMap,et=!!x.alphaMap,pt=x.alphaTest>0,_t=!!x.alphaHash,st=!!x.extensions,Lt=na;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let Rt={shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:bt,defines:x.defines,customVertexShaderID:Bt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ot,batchingColor:ot&&D._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&D.instanceColor!==null,instancingMorph:Tt&&D.morphTexture!==null,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:St,matcap:Kt,envMap:Vt,envMapMode:Vt&&V.mapping,envMapCubeUVHeight:z,aoMap:Zt,lightMap:te,bumpMap:It,normalMap:qt,displacementMap:ue,emissiveMap:Te,normalMapObjectSpace:qt&&x.normalMapType===YM,normalMapTangentSpace:qt&&x.normalMapType===Dv,packedNormalMap:qt&&x.normalMapType===Dv&&oU(x.normalMap.format),metalnessMap:xe,roughnessMap:Nt,anisotropy:P,anisotropyMap:Q,clearcoat:le,clearcoatMap:ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:$,dispersion:zt,retroreflection:R,iridescence:y,iridescenceMap:tt,iridescenceThicknessMap:ht,sheen:G,sheenColorMap:Ct,sheenRoughnessMap:j,specularMap:ut,specularColorMap:Et,specularIntensityMap:xt,transmission:q,transmissionMap:Ut,thicknessMap:k,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Nl&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:_t,combine:x.combine,mapUv:St&&m(x.map.channel),aoMapUv:Zt&&m(x.aoMap.channel),lightMapUv:te&&m(x.lightMap.channel),bumpMapUv:It&&m(x.bumpMap.channel),normalMapUv:qt&&m(x.normalMap.channel),displacementMapUv:ue&&m(x.displacementMap.channel),emissiveMapUv:Te&&m(x.emissiveMap.channel),metalnessMapUv:xe&&m(x.metalnessMap.channel),roughnessMapUv:Nt&&m(x.roughnessMap.channel),anisotropyMapUv:Q&&m(x.anisotropyMap.channel),clearcoatMapUv:ct&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&m(x.sheenRoughnessMap.channel),specularMapUv:ut&&m(x.specularMap.channel),specularColorMapUv:Et&&m(x.specularColorMap.channel),specularIntensityMapUv:xt&&m(x.specularIntensityMap.channel),transmissionMapUv:Ut&&m(x.transmissionMap.channel),thicknessMapUv:k&&m(x.thicknessMap.channel),alphaMapUv:et&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(qt||P),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(St||et),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:it,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:rt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ia,flipSided:x.side===Jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(f(A,x),v(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function b(x){let A=d[x.type],N;if(A){let L=za[A];N=o2.clone(L.uniforms)}else N=x.uniforms;return N}function _(x,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new rU(e,A,x,a),c.push(N),h.set(A,N)),N}function M(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function cU(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function uU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function A2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function C2(){let e=[],t=0,n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,S,g,f){let v=e[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:f},e[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=s(u),v.groupOrder=S,v.renderOrder=u.renderOrder,v.z=g,v.group=f),t++,v}function l(u,d,m,S,g,f,v){v.reversedDepth===!0&&(g=-g);let b=o(u,d,m,S,g,f);m.transmission>0?i.push(b):m.transparent===!0?a.push(b):n.push(b)}function c(u,d,m,S,g,f){let v=o(u,d,m,S,g,f);m.transmission>0?i.unshift(v):m.transparent===!0?a.unshift(v):n.unshift(v)}function h(u,d){n.length>1&&n.sort(u||uU),i.length>1&&i.sort(d||A2),a.length>1&&a.sort(d||A2)}function p(){for(let u=t,d=e.length;u<d;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:h}}function hU(){let e=new WeakMap;function t(i,a){let r=e.get(i),s;return r===void 0?(s=new C2,e.set(i,[s])):a>=r.length?(s=new C2,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function fU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new Z,color:new ce};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":n={color:new ce,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return e[t.id]=n,n}}}function dU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var pU=0;function mU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gU(e){let t=new fU,n=dU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);let a=new Z,r=new Ye,s=new Ye;function o(c){let h=0,p=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,S=0,g=0,f=0,v=0,b=0,_=0,M=0,T=0,w=0,x=0,A=0,N=0;c.sort(mU);for(let D=0,I=c.length;D<I;D++){let C=c[D],U=C.color,H=C.intensity,F=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ss?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*H,p+=U.g*H,u+=U.b*H;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],H);N++}else if(C.isSunLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[m]=Y,i.sunShadowMap[m]=V;let lt=O.getViewportCount();for(let rt=0;rt<lt;rt++)i.sunShadowMatrix[S+rt]=O.getMatrix(rt),i.sunShadowCascade[S+rt]=O._cascadeData[rt];S+=lt,m++}i.sun[d]=z,d++}else if(C.isDirectionalLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,i.directionalShadow[g]=Y,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=C.shadow.matrix,M++}i.directional[g]=z,g++}else if(C.isSpotLight){let z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(U).multiplyScalar(H),z.distance=F,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[v]=z;let O=C.shadow;if(C.map&&(i.spotLightMap[x]=C.map,x++,O.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[v]=O.matrix,C.castShadow){let Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=V,w++}v++}else if(C.isRectAreaLight){let z=t.get(C);z.color.copy(U).multiplyScalar(H),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[b]=z,b++}else if(C.isPointLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let O=C.shadow,Y=n.get(C);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=V,i.pointShadowMatrix[f]=C.shadow.matrix,T++}i.point[f]=z,f++}else if(C.isHemisphereLight){let z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(H),z.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[_]=z,_++}}b>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==f||L.spotLength!==v||L.rectAreaLength!==b||L.hemiLength!==_||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==w||L.numSpotMaps!==x||L.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=g,i.spot.length=v,i.rectArea.length=b,i.point.length=f,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,L.sunLength=d,L.directionalLength=g,L.pointLength=f,L.spotLength=v,L.rectAreaLength=b,L.hemiLength=_,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=w,L.numSpotMaps=x,L.numLightProbes=N,i.version=pU++)}function l(c,h){let p=0,u=0,d=0,m=0,S=0,g=0,f=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let _=c[v];if(_.isSunLight){let M=i.sun[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),p++}else if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),u++}else if(_.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),m++}else if(_.isRectAreaLight){let M=i.rectArea[S];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),s.identity(),r.copy(_.matrixWorld),r.premultiply(f),s.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),S++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function R2(e){let t=new gU(e),n=[],i=[],a=[];function r(u){p.camera=u,n.length=0,i.length=0,a.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function vU(e){let t=new WeakMap;function n(a,r=0){let s=t.get(a),o;return s===void 0?(o=new R2(e),t.set(a,[o])):r>=s.length?(o=new R2(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var _U=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xU=`uniform sampler2D shadow_pass;
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
}`,yU=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],bU=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],N2=new Ye,Tu=new Z,Zv=new Z;function SU(e,t,n){let i=new ru,a=new Wt,r=new Wt,s=new Xe,o=new pd,l=new md,c={},h=n.maxTextureSize,p={[ns]:Jn,[Jn]:ns,[Ia]:Ia},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:_U,fragmentShader:xU}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ai;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new hi(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let f=this.type;this.render=function(T,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===wM&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hu);let A=e.getRenderTarget(),N=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),D=e.state;D.setBlending(Pa),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let I=f!==this.type;I&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=T.length;C<U;C++){let H=T[C],F=H.shadow;if(F===void 0){Ft("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);let V=F.getFrameExtents();a.multiply(V),r.copy(F.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/V.x),a.x=r.x*V.x,F.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/V.y),a.y=r.y*V.y,F.mapSize.y=r.y));let z=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=z,F.map===null||I===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Rl){if(H.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ui(a.x,a.y,{format:ss,type:ra,minFilter:cn,magFilter:cn,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Qr(a.x,a.y,aa),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Da,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=xn,F.map.depthTexture.magFilter=xn}else H.isPointLight?(F.map=new yp(a.x),F.map.depthTexture=new fd(a.x,ia)):(F.map=new ui(a.x,a.y),F.map.depthTexture=new Qr(a.x,a.y,ia)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Da,this.type===hu?(F.map.depthTexture.compareFunction=z?gp:mp,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=xn,F.map.depthTexture.magFilter=xn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==a.x||F.map.height!==a.y)&&F.map.setSize(a.x,a.y);let O=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,x);for(let Y=0;Y<O;Y++){let lt=F.getCamera(Y);if(H.isPointLight){let rt=F.camera,Ot=F.matrix,bt=H.distance||rt.far;bt!==rt.far&&(rt.far=bt,rt.updateProjectionMatrix()),Tu.setFromMatrixPosition(H.matrixWorld),rt.position.copy(Tu),Zv.copy(rt.position),Zv.add(yU[Y]),rt.up.copy(bU[Y]),rt.lookAt(Zv),rt.updateMatrixWorld(),Ot.makeTranslation(-Tu.x,-Tu.y,-Tu.z),N2.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(N2,rt.coordinateSystem,rt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,Y),e.clear();else{Y===0&&(e.setRenderTarget(F.map),e.clear());let rt=F.getViewport(Y);s.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),D.viewport(s)}i=F.getFrustum(Y),_(w,x,lt,H,this.type)}F.isPointLightShadow!==!0&&this.type===Rl&&v(F,x),F.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,N,L)};function v(T,w){let x=t.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new ui(a.x,a.y,{format:ss,type:ra}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(w,null,x,u,S,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(w,null,x,d,S,null)}function b(T,w,x,A){let N=null,L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)N=L;else if(N=x.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=N.uuid,I=w.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let U=C[I];U===void 0&&(U=N.clone(),C[I]=U,w.addEventListener("dispose",M)),N=U}if(N.visible=w.visible,N.wireframe=w.wireframe,A===Rl?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:p[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let D=e.properties.get(N);D.light=x}return N}function _(T,w,x,A,N){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Rl)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let I=t.update(T),C=T.material;if(Array.isArray(C)){let U=I.groups;for(let H=0,F=U.length;H<F;H++){let V=U[H],z=C[V.materialIndex];if(z&&z.visible){let O=b(T,z,A,N);T.onBeforeShadow(e,T,w,x,I,O,V),e.renderBufferDirect(x,null,I,O,T,V),T.onAfterShadow(e,T,w,x,I,O,V)}}}else if(C.visible){let U=b(T,C,A,N);T.onBeforeShadow(e,T,w,x,I,U,null),e.renderBufferDirect(x,null,I,U,T,null),T.onAfterShadow(e,T,w,x,I,U,null)}}let D=T.children;for(let I=0,C=D.length;I<C;I++)_(D[I],w,x,A,N)}function M(T){T.target.removeEventListener("dispose",M);for(let x in c){let A=c[x],N=T.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function MU(e,t){function n(){let k=!1,dt=new Xe,et=null,pt=new Xe(0,0,0,0);return{setMask:function(_t){et!==_t&&!k&&(e.colorMask(_t,_t,_t,_t),et=_t)},setLocked:function(_t){k=_t},setClear:function(_t,st,Lt,Rt,Ne){Ne===!0&&(_t*=Rt,st*=Rt,Lt*=Rt),dt.set(_t,st,Lt,Rt),pt.equals(dt)===!1&&(e.clearColor(_t,st,Lt,Rt),pt.copy(dt))},reset:function(){k=!1,et=null,pt.set(-1,0,0,0)}}}function i(){let k=!1,dt=!1,et=null,pt=null,_t=null;return{setReversed:function(st){if(dt!==st){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),dt=st;let Rt=_t;_t=null,this.setClear(Rt)}},getReversed:function(){return dt},setTest:function(st){st?at(e.DEPTH_TEST):it(e.DEPTH_TEST)},setMask:function(st){et!==st&&!k&&(e.depthMask(st),et=st)},setFunc:function(st){if(dt&&(st=r2[st]),pt!==st){switch(st){case Jf:e.depthFunc(e.NEVER);break;case jf:e.depthFunc(e.ALWAYS);break;case Qf:e.depthFunc(e.LESS);break;case Sl:e.depthFunc(e.LEQUAL);break;case $f:e.depthFunc(e.EQUAL);break;case td:e.depthFunc(e.GEQUAL);break;case ed:e.depthFunc(e.GREATER);break;case nd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=st}},setLocked:function(st){k=st},setClear:function(st){_t!==st&&(_t=st,dt&&(st=1-st),e.clearDepth(st))},reset:function(){k=!1,et=null,pt=null,_t=null,dt=!1}}}function a(){let k=!1,dt=null,et=null,pt=null,_t=null,st=null,Lt=null,Rt=null,Ne=null;return{setTest:function(me){k||(me?at(e.STENCIL_TEST):it(e.STENCIL_TEST))},setMask:function(me){dt!==me&&!k&&(e.stencilMask(me),dt=me)},setFunc:function(me,Xi,ua){(et!==me||pt!==Xi||_t!==ua)&&(e.stencilFunc(me,Xi,ua),et=me,pt=Xi,_t=ua)},setOp:function(me,Xi,ua){(st!==me||Lt!==Xi||Rt!==ua)&&(e.stencilOp(me,Xi,ua),st=me,Lt=Xi,Rt=ua)},setLocked:function(me){k=me},setClear:function(me){Ne!==me&&(e.clearStencil(me),Ne=me)},reset:function(){k=!1,dt=null,et=null,pt=null,_t=null,st=null,Lt=null,Rt=null,Ne=null}}}let r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,m=[],S=null,g=!1,f=null,v=null,b=null,_=null,M=null,T=null,w=null,x=new ce(0,0,0),A=0,N=!1,L=null,D=null,I=null,C=null,U=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,V=0,z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=V>=2);let O=null,Y={},lt=e.getParameter(e.SCISSOR_BOX),rt=e.getParameter(e.VIEWPORT),Ot=new Xe().fromArray(lt),bt=new Xe().fromArray(rt);function Bt(k,dt,et,pt){let _t=new Uint8Array(4),st=e.createTexture();e.bindTexture(k,st),e.texParameteri(k,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(k,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Lt=0;Lt<et;Lt++)k===e.TEXTURE_3D||k===e.TEXTURE_2D_ARRAY?e.texImage3D(dt,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,_t):e.texImage2D(dt+Lt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_t);return st}let J={};J[e.TEXTURE_2D]=Bt(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=Bt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=Bt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=Bt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),at(e.DEPTH_TEST),s.setFunc(Sl),It(!1),qt(uv),at(e.CULL_FACE),Zt(Pa);function at(k){h[k]!==!0&&(e.enable(k),h[k]=!0)}function it(k){h[k]!==!1&&(e.disable(k),h[k]=!1)}function Tt(k,dt){return u[k]!==dt?(e.bindFramebuffer(k,dt),u[k]=dt,k===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=dt),k===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=dt),!0):!1}function ot(k,dt){let et=m,pt=!1;if(k){et=d.get(dt),et===void 0&&(et=[],d.set(dt,et));let _t=k.textures;if(et.length!==_t.length||et[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Lt=_t.length;st<Lt;st++)et[st]=e.COLOR_ATTACHMENT0+st;et.length=_t.length,pt=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,pt=!0);pt&&e.drawBuffers(et)}function St(k){return S!==k?(e.useProgram(k),S=k,!0):!1}let Kt={[Ks]:e.FUNC_ADD,[AM]:e.FUNC_SUBTRACT,[CM]:e.FUNC_REVERSE_SUBTRACT};Kt[RM]=e.MIN,Kt[NM]=e.MAX;let Vt={[DM]:e.ZERO,[fu]:e.ONE,[UM]:e.SRC_COLOR,[pv]:e.SRC_ALPHA,[BM]:e.SRC_ALPHA_SATURATE,[OM]:e.DST_COLOR,[IM]:e.DST_ALPHA,[LM]:e.ONE_MINUS_SRC_COLOR,[du]:e.ONE_MINUS_SRC_ALPHA,[zM]:e.ONE_MINUS_DST_COLOR,[PM]:e.ONE_MINUS_DST_ALPHA,[FM]:e.CONSTANT_COLOR,[kM]:e.ONE_MINUS_CONSTANT_COLOR,[HM]:e.CONSTANT_ALPHA,[VM]:e.ONE_MINUS_CONSTANT_ALPHA};function Zt(k,dt,et,pt,_t,st,Lt,Rt,Ne,me){if(k===Pa){g===!0&&(it(e.BLEND),g=!1);return}if(g===!1&&(at(e.BLEND),g=!0),k!==Rd){if(k!==f||me!==N){if((v!==Ks||M!==Ks)&&(e.blendEquation(e.FUNC_ADD),v=Ks,M=Ks),me)switch(k){case Nl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hv:e.blendFunc(e.ONE,e.ONE);break;case fv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case dv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ht("WebGLState: Invalid blending: ",k);break}else switch(k){case Nl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fv:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dv:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",k);break}b=null,_=null,T=null,w=null,x.set(0,0,0),A=0,f=k,N=me}return}_t=_t||dt,st=st||et,Lt=Lt||pt,(dt!==v||_t!==M)&&(e.blendEquationSeparate(Kt[dt],Kt[_t]),v=dt,M=_t),(et!==b||pt!==_||st!==T||Lt!==w)&&(e.blendFuncSeparate(Vt[et],Vt[pt],Vt[st],Vt[Lt]),b=et,_=pt,T=st,w=Lt),(Rt.equals(x)===!1||Ne!==A)&&(e.blendColor(Rt.r,Rt.g,Rt.b,Ne),x.copy(Rt),A=Ne),f=k,N=!1}function te(k,dt){k.side===Ia?it(e.CULL_FACE):at(e.CULL_FACE);let et=k.side===Jn;dt&&(et=!et),It(et),k.blending===Nl&&k.transparent===!1?Zt(Pa):Zt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);let pt=k.stencilWrite;o.setTest(pt),pt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):it(e.SAMPLE_ALPHA_TO_COVERAGE)}function It(k){L!==k&&(k?e.frontFace(e.CW):e.frontFace(e.CCW),L=k)}function qt(k){k!==TM?(at(e.CULL_FACE),k!==D&&(k===uv?e.cullFace(e.BACK):k===EM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):it(e.CULL_FACE),D=k}function ue(k){k!==I&&(F&&e.lineWidth(k),I=k)}function Te(k,dt,et){k?(at(e.POLYGON_OFFSET_FILL),(C!==dt||U!==et)&&(C=dt,U=et,s.getReversed()&&(dt=-dt),e.polygonOffset(dt,et))):it(e.POLYGON_OFFSET_FILL)}function xe(k){k?at(e.SCISSOR_TEST):it(e.SCISSOR_TEST)}function Nt(k){k===void 0&&(k=e.TEXTURE0+H-1),O!==k&&(e.activeTexture(k),O=k)}function P(k,dt,et){et===void 0&&(O===null?et=e.TEXTURE0+H-1:et=O);let pt=Y[et];pt===void 0&&(pt={type:void 0,texture:void 0},Y[et]=pt),(pt.type!==k||pt.texture!==dt)&&(O!==et&&(e.activeTexture(et),O=et),e.bindTexture(k,dt||J[k]),pt.type=k,pt.texture=dt)}function le(){let k=Y[O];k!==void 0&&k.type!==void 0&&(e.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function zt(){try{e.compressedTexImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function y(){try{e.texSubImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function G(){try{e.texSubImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function Q(){try{e.compressedTexSubImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function ct(){try{e.texStorage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function ft(){try{e.texStorage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function $(){try{e.texImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function tt(){try{e.texImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function ht(k){return p[k]!==void 0?p[k]:e.getParameter(k)}function Ct(k,dt){p[k]!==dt&&(e.pixelStorei(k,dt),p[k]=dt)}function j(k){Ot.equals(k)===!1&&(e.scissor(k.x,k.y,k.z,k.w),Ot.copy(k))}function ut(k){bt.equals(k)===!1&&(e.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Et(k,dt){let et=c.get(dt);et===void 0&&(et=new WeakMap,c.set(dt,et));let pt=et.get(k);pt===void 0&&(pt=e.getUniformBlockIndex(dt,k.name),et.set(k,pt))}function xt(k,dt){let pt=c.get(dt).get(k);l.get(dt)!==pt&&(e.uniformBlockBinding(dt,pt,k.__bindingPointIndex),l.set(dt,pt))}function Ut(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},O=null,Y={},u={},d=new WeakMap,m=[],S=null,g=!1,f=null,v=null,b=null,_=null,M=null,T=null,w=null,x=new ce(0,0,0),A=0,N=!1,L=null,D=null,I=null,C=null,U=null,Ot.set(0,0,e.canvas.width,e.canvas.height),bt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:at,disable:it,bindFramebuffer:Tt,drawBuffers:ot,useProgram:St,setBlending:Zt,setMaterial:te,setFlipSided:It,setCullFace:qt,setLineWidth:ue,setPolygonOffset:Te,setScissorTest:xe,activeTexture:Nt,bindTexture:P,unbindTexture:le,compressedTexImage2D:zt,compressedTexImage3D:R,texImage2D:$,texImage3D:tt,pixelStorei:Ct,getParameter:ht,updateUBOMapping:Et,uniformBlockBinding:xt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:j,viewport:ut,reset:Ut}}function TU(e,t,n,i,a,r,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,p=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,y){return m?new OffscreenCanvas(R,y):Ml("canvas")}function g(R,y,G){let q=1,Q=zt(R);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ct=Math.floor(q*Q.width),ft=Math.floor(q*Q.height);u===void 0&&(u=S(ct,ft));let $=y?S(ct,ft):u;return $.width=ct,$.height=ft,$.getContext("2d").drawImage(R,0,0,ct,ft),Ft("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+ft+")."),$}else return"data"in R&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){e.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(R,y,G,q,Q,ct=!1){if(R!==null){if(e[R]!==void 0)return e[R];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ft;q&&(ft=t.get("EXT_texture_norm16"),ft||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===e.RED&&(G===e.FLOAT&&($=e.R32F),G===e.HALF_FLOAT&&($=e.R16F),G===e.UNSIGNED_BYTE&&($=e.R8),G===e.UNSIGNED_SHORT&&ft&&($=ft.R16_EXT),G===e.SHORT&&ft&&($=ft.R16_SNORM_EXT)),y===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&($=e.R8UI),G===e.UNSIGNED_SHORT&&($=e.R16UI),G===e.UNSIGNED_INT&&($=e.R32UI),G===e.BYTE&&($=e.R8I),G===e.SHORT&&($=e.R16I),G===e.INT&&($=e.R32I)),y===e.RG&&(G===e.FLOAT&&($=e.RG32F),G===e.HALF_FLOAT&&($=e.RG16F),G===e.UNSIGNED_BYTE&&($=e.RG8),G===e.UNSIGNED_SHORT&&ft&&($=ft.RG16_EXT),G===e.SHORT&&ft&&($=ft.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&($=e.RG8UI),G===e.UNSIGNED_SHORT&&($=e.RG16UI),G===e.UNSIGNED_INT&&($=e.RG32UI),G===e.BYTE&&($=e.RG8I),G===e.SHORT&&($=e.RG16I),G===e.INT&&($=e.RG32I)),y===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&($=e.RGB8UI),G===e.UNSIGNED_SHORT&&($=e.RGB16UI),G===e.UNSIGNED_INT&&($=e.RGB32UI),G===e.BYTE&&($=e.RGB8I),G===e.SHORT&&($=e.RGB16I),G===e.INT&&($=e.RGB32I)),y===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&($=e.RGBA8UI),G===e.UNSIGNED_SHORT&&($=e.RGBA16UI),G===e.UNSIGNED_INT&&($=e.RGBA32UI),G===e.BYTE&&($=e.RGBA8I),G===e.SHORT&&($=e.RGBA16I),G===e.INT&&($=e.RGBA32I)),y===e.RGB&&(G===e.UNSIGNED_SHORT&&ft&&($=ft.RGB16_EXT),G===e.SHORT&&ft&&($=ft.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&($=e.R11F_G11F_B10F)),y===e.RGBA){let tt=ct?jc:re.getTransfer(Q);G===e.FLOAT&&($=e.RGBA32F),G===e.HALF_FLOAT&&($=e.RGBA16F),G===e.UNSIGNED_BYTE&&($=tt===_e?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&ft&&($=ft.RGBA16_EXT),G===e.SHORT&&ft&&($=ft.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(R,y){let G;return R?y===null||y===ia||y===Ul?G=e.DEPTH24_STENCIL8:y===aa?G=e.DEPTH32F_STENCIL8:y===Dl&&(G=e.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ia||y===Ul?G=e.DEPTH_COMPONENT24:y===aa?G=e.DEPTH_COMPONENT32F:y===Dl&&(G=e.DEPTH_COMPONENT16),G}function T(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){let y=R.target;y.removeEventListener("dispose",w),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),L(y)}function A(R){let y=i.get(R);if(y.__webglInit===void 0)return;let G=R.source,q=d.get(G);if(q){let Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(R),Object.keys(q).length===0&&d.delete(G)}i.remove(R)}function N(R){let y=i.get(R);e.deleteTexture(y.__webglTexture);let G=R.source,q=d.get(G);delete q[y.__cacheKey],s.memory.textures--}function L(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)e.deleteFramebuffer(y.__webglFramebuffer[q]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=R.textures;for(let q=0,Q=G.length;q<Q;q++){let ct=i.get(G[q]);ct.__webglTexture&&(e.deleteTexture(ct.__webglTexture),s.memory.textures--),i.remove(G[q])}i.remove(R)}let D=0;function I(){D=0}function C(){return D}function U(R){D=R}function H(){let R=D;return R>=a.maxTextures&&Ft("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),D+=1,R}function F(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function V(R,y){let G=i.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let q=R.image;if(q===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,R,y);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+y)}function z(R,y){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){it(G,R,y);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+y)}function O(R,y){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){it(G,R,y);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+y)}function Y(R,y){let G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Tt(G,R,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+y)}let lt={[id]:e.REPEAT,[Na]:e.CLAMP_TO_EDGE,[ad]:e.MIRRORED_REPEAT},rt={[xn]:e.NEAREST,[WM]:e.NEAREST_MIPMAP_NEAREST,[mu]:e.NEAREST_MIPMAP_LINEAR,[cn]:e.LINEAR,[Ud]:e.LINEAR_MIPMAP_NEAREST,[as]:e.LINEAR_MIPMAP_LINEAR},Ot={[KM]:e.NEVER,[t2]:e.ALWAYS,[JM]:e.LESS,[mp]:e.LEQUAL,[jM]:e.EQUAL,[gp]:e.GEQUAL,[QM]:e.GREATER,[$M]:e.NOTEQUAL};function bt(R,y){if(y.type===aa&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===cn||y.magFilter===Ud||y.magFilter===mu||y.magFilter===as||y.minFilter===cn||y.minFilter===Ud||y.minFilter===mu||y.minFilter===as)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,lt[y.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,lt[y.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,lt[y.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,rt[y.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,rt[y.minFilter]),y.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==mu&&y.minFilter!==as||y.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Bt(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));let q=y.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let ct=F(y);if(ct!==R.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),Q[ct].usedTimes++;let ft=Q[R.__cacheKey];ft!==void 0&&(Q[R.__cacheKey].usedTimes--,ft.usedTimes===0&&N(y)),R.__cacheKey=ct,R.__webglTexture=Q[ct].texture}return G}function J(R,y,G){return Math.floor(Math.floor(R/G)/y)}function at(R,y,G,q){let ct=R.updateRanges;if(ct.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,G,q,y.data);else{ct.sort((Ct,j)=>Ct.start-j.start);let ft=0;for(let Ct=1;Ct<ct.length;Ct++){let j=ct[ft],ut=ct[Ct],Et=j.start+j.count,xt=J(ut.start,y.width,4),Ut=J(j.start,y.width,4);ut.start<=Et+1&&xt===Ut&&J(ut.start+ut.count-1,y.width,4)===xt?j.count=Math.max(j.count,ut.start+ut.count-j.start):(++ft,ct[ft]=ut)}ct.length=ft+1;let $=n.getParameter(e.UNPACK_ROW_LENGTH),tt=n.getParameter(e.UNPACK_SKIP_PIXELS),ht=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Ct=0,j=ct.length;Ct<j;Ct++){let ut=ct[Ct],Et=Math.floor(ut.start/4),xt=Math.ceil(ut.count/4),Ut=Et%y.width,k=Math.floor(Et/y.width),dt=xt,et=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Ut),n.pixelStorei(e.UNPACK_SKIP_ROWS,k),n.texSubImage2D(e.TEXTURE_2D,0,Ut,k,dt,et,G,q,y.data)}R.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,$),n.pixelStorei(e.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function it(R,y,G){let q=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=e.TEXTURE_3D);let Q=Bt(R,y),ct=y.source;n.bindTexture(q,R.__webglTexture,e.TEXTURE0+G);let ft=i.get(ct);if(ct.version!==ft.__version||Q===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let et=re.getPrimaries(re.workingColorSpace),pt=y.colorSpace===sa?null:re.getPrimaries(y.colorSpace),_t=y.colorSpace===sa||et===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let tt=g(y.image,!1,a.maxTextureSize);tt=le(y,tt);let ht=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type),j=_(y.internalFormat,ht,Ct,y.normalized,y.colorSpace,y.isVideoTexture);bt(q,y);let ut,Et=y.mipmaps,xt=y.isVideoTexture!==!0,Ut=ft.__version===void 0||Q===!0,k=ct.dataReady,dt=T(y,tt);if(y.isDepthTexture)j=M(y.format===rs,y.type),Ut&&(xt?n.texStorage2D(e.TEXTURE_2D,1,j,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,j,tt.width,tt.height,0,ht,Ct,null));else if(y.isDataTexture)if(Et.length>0){xt&&Ut&&n.texStorage2D(e.TEXTURE_2D,dt,j,Et[0].width,Et[0].height);for(let et=0,pt=Et.length;et<pt;et++)ut=Et[et],xt?k&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ut.width,ut.height,ht,Ct,ut.data):n.texImage2D(e.TEXTURE_2D,et,j,ut.width,ut.height,0,ht,Ct,ut.data);y.generateMipmaps=!1}else xt?(Ut&&n.texStorage2D(e.TEXTURE_2D,dt,j,tt.width,tt.height),k&&at(y,tt,ht,Ct)):n.texImage2D(e.TEXTURE_2D,0,j,tt.width,tt.height,0,ht,Ct,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){xt&&Ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,j,Et[0].width,Et[0].height,tt.depth);for(let et=0,pt=Et.length;et<pt;et++)if(ut=Et[et],y.format!==Gi)if(ht!==null)if(xt){if(k)if(y.layerUpdates.size>0){let _t=zv(ut.width,ut.height,y.format,y.type);for(let st of y.layerUpdates){let Lt=ut.data.subarray(st*_t/ut.data.BYTES_PER_ELEMENT,(st+1)*_t/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,st,ut.width,ut.height,1,ht,Lt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,tt.depth,ht,ut.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,j,ut.width,ut.height,tt.depth,0,ut.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?k&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,tt.depth,ht,Ct,ut.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,j,ut.width,ut.height,tt.depth,0,ht,Ct,ut.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{xt&&Ut&&n.texStorage2D(e.TEXTURE_2D,dt,j,Et[0].width,Et[0].height);for(let et=0,pt=Et.length;et<pt;et++)ut=Et[et],y.format!==Gi?ht!==null?xt?k&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,ut.width,ut.height,ht,ut.data):n.compressedTexImage2D(e.TEXTURE_2D,et,j,ut.width,ut.height,0,ut.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?k&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ut.width,ut.height,ht,Ct,ut.data):n.texImage2D(e.TEXTURE_2D,et,j,ut.width,ut.height,0,ht,Ct,ut.data)}else if(y.isDataArrayTexture)if(xt){if(Ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,j,tt.width,tt.height,tt.depth),k)if(y.layerUpdates.size>0){let et=zv(tt.width,tt.height,y.format,y.type);for(let pt of y.layerUpdates){let _t=tt.data.subarray(pt*et/tt.data.BYTES_PER_ELEMENT,(pt+1)*et/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pt,tt.width,tt.height,1,ht,Ct,_t)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Ct,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ht,Ct,tt.data);else if(y.isData3DTexture)xt?(Ut&&n.texStorage3D(e.TEXTURE_3D,dt,j,tt.width,tt.height,tt.depth),k&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Ct,tt.data)):n.texImage3D(e.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ht,Ct,tt.data);else if(y.isFramebufferTexture){if(Ut)if(xt)n.texStorage2D(e.TEXTURE_2D,dt,j,tt.width,tt.height);else{let et=tt.width,pt=tt.height;for(let _t=0;_t<dt;_t++)n.texImage2D(e.TEXTURE_2D,_t,j,et,pt,0,ht,Ct,null),et>>=1,pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let et=e.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),tt.parentNode!==et){et.appendChild(tt),p.add(y),et.onpaint=pt=>{let _t=pt.changedElements;for(let st of p)_t.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,tt);else{let _t=e.RGBA,st=e.RGBA,Lt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,_t,st,Lt,tt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Et.length>0){if(xt&&Ut){let et=zt(Et[0]);n.texStorage2D(e.TEXTURE_2D,dt,j,et.width,et.height)}for(let et=0,pt=Et.length;et<pt;et++)ut=Et[et],xt?k&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ht,Ct,ut):n.texImage2D(e.TEXTURE_2D,et,j,ht,Ct,ut);y.generateMipmaps=!1}else if(xt){if(Ut){let et=zt(tt);n.texStorage2D(e.TEXTURE_2D,dt,j,et.width,et.height)}k&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,Ct,tt)}else n.texImage2D(e.TEXTURE_2D,0,j,ht,Ct,tt);f(y)&&v(q),ft.__version=ct.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Tt(R,y,G){if(y.image.length!==6)return;let q=Bt(R,y),Q=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+G);let ct=i.get(Q);if(Q.version!==ct.__version||q===!0){n.activeTexture(e.TEXTURE0+G);let ft=re.getPrimaries(re.workingColorSpace),$=y.colorSpace===sa?null:re.getPrimaries(y.colorSpace),tt=y.colorSpace===sa||ft===$?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ht=y.isCompressedTexture||y.image[0].isCompressedTexture,Ct=y.image[0]&&y.image[0].isDataTexture,j=[];for(let st=0;st<6;st++)!ht&&!Ct?j[st]=g(y.image[st],!0,a.maxCubemapSize):j[st]=Ct?y.image[st].image:y.image[st],j[st]=le(y,j[st]);let ut=j[0],Et=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Ut=_(y.internalFormat,Et,xt,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,dt=ct.__version===void 0||q===!0,et=Q.dataReady,pt=T(y,ut);bt(e.TEXTURE_CUBE_MAP,y);let _t;if(ht){k&&dt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ut,ut.width,ut.height);for(let st=0;st<6;st++){_t=j[st].mipmaps;for(let Lt=0;Lt<_t.length;Lt++){let Rt=_t[Lt];y.format!==Gi?Et!==null?k?et&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Rt.width,Rt.height,Et,Rt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Ut,Rt.width,Rt.height,0,Rt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Rt.width,Rt.height,Et,xt,Rt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Ut,Rt.width,Rt.height,0,Et,xt,Rt.data)}}}else{if(_t=y.mipmaps,k&&dt){_t.length>0&&pt++;let st=zt(j[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ut,st.width,st.height)}for(let st=0;st<6;st++)if(Ct){k?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,j[st].width,j[st].height,Et,xt,j[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ut,j[st].width,j[st].height,0,Et,xt,j[st].data);for(let Lt=0;Lt<_t.length;Lt++){let Ne=_t[Lt].image[st].image;k?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Ne.width,Ne.height,Et,xt,Ne.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Ut,Ne.width,Ne.height,0,Et,xt,Ne.data)}}else{k?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Et,xt,j[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ut,Et,xt,j[st]);for(let Lt=0;Lt<_t.length;Lt++){let Rt=_t[Lt];k?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Et,xt,Rt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Ut,Et,xt,Rt.image[st])}}}f(y)&&v(e.TEXTURE_CUBE_MAP),ct.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ot(R,y,G,q,Q,ct){let ft=r.convert(G.format,G.colorSpace),$=r.convert(G.type),tt=_(G.internalFormat,ft,$,G.normalized,G.colorSpace),ht=i.get(y),Ct=i.get(G);if(Ct.__renderTarget=y,!ht.__hasExternalTextures){let j=Math.max(1,y.width>>ct),ut=Math.max(1,y.height>>ct);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,ct,tt,j,ut,y.depth,0,ft,$,null):n.texImage2D(Q,ct,tt,j,ut,0,ft,$,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),Nt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,Ct.__webglTexture,0,xe(y)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,Ct.__webglTexture,ct),n.bindFramebuffer(e.FRAMEBUFFER,null)}function St(R,y,G){if(e.bindRenderbuffer(e.RENDERBUFFER,R),y.depthBuffer){let q=y.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ct=M(y.stencilBuffer,Q),ft=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Nt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(y),ct,y.width,y.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(y),ct,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ct,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,R)}else{let q=y.textures;for(let Q=0;Q<q.length;Q++){let ct=q[Q],ft=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),tt=_(ct.internalFormat,ft,$,ct.normalized,ct.colorSpace);Nt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(y),tt,y.width,y.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(y),tt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,tt,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Kt(R,y,G){let q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),bt(e.TEXTURE_CUBE_MAP,y.depthTexture);let ht=r.convert(y.depthTexture.format),Ct=r.convert(y.depthTexture.type),j;y.depthTexture.format===Da?j=e.DEPTH_COMPONENT24:y.depthTexture.format===rs&&(j=e.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,j,y.width,y.height,0,ht,Ct,null)}}else V(y.depthTexture,0);let ct=Q.__webglTexture,ft=xe(y),$=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,tt=y.depthTexture.format===rs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Da)Nt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,$,ct,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,tt,$,ct,0);else if(y.depthTexture.format===rs)Nt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,$,ct,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,tt,$,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(R){let y=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)Kt(y.__webglFramebuffer[q],R,q);else{let q=R.texture.mipmaps;q&&q.length>0?Kt(y.__webglFramebuffer[0],R,0):Kt(y.__webglFramebuffer,R,0)}else if(G){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=e.createRenderbuffer(),St(y.__webglDepthbuffer[q],R,!1);else{let Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,ct),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ct)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),St(y.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ct),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ct)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Zt(R,y,G){let q=i.get(R);y!==void 0&&ot(q.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Vt(R)}function te(R){let y=R.texture,G=i.get(R),q=i.get(y);R.addEventListener("dispose",x);let Q=R.textures,ct=R.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=y.version,s.memory.textures++),ct){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let tt=0;tt<y.mipmaps.length;tt++)G.__webglFramebuffer[$][tt]=e.createFramebuffer()}else G.__webglFramebuffer[$]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)G.__webglFramebuffer[$]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(ft)for(let $=0,tt=Q.length;$<tt;$++){let ht=i.get(Q[$]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&Nt(R)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let tt=Q[$];G.__webglColorRenderbuffer[$]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let ht=r.convert(tt.format,tt.colorSpace),Ct=r.convert(tt.type),j=_(tt.internalFormat,ht,Ct,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),ut=xe(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,j,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+$,e.RENDERBUFFER,G.__webglColorRenderbuffer[$])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),St(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ct){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),bt(e.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)ot(G.__webglFramebuffer[$][tt],R,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt);else ot(G.__webglFramebuffer[$],R,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(y)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ft){for(let $=0,tt=Q.length;$<tt;$++){let ht=Q[$],Ct=i.get(ht),j=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(j,Ct.__webglTexture),bt(j,ht),ot(G.__webglFramebuffer,R,ht,e.COLOR_ATTACHMENT0+$,j,0),f(ht)&&v(j)}n.unbindTexture()}else{let $=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture($,q.__webglTexture),bt($,y),y.mipmaps&&y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)ot(G.__webglFramebuffer[tt],R,y,e.COLOR_ATTACHMENT0,$,tt);else ot(G.__webglFramebuffer,R,y,e.COLOR_ATTACHMENT0,$,0);f(y)&&v($),n.unbindTexture()}R.depthBuffer&&Vt(R)}function It(R){let y=R.textures;for(let G=0,q=y.length;G<q;G++){let Q=y[G];if(f(Q)){let ct=b(R),ft=i.get(Q).__webglTexture;n.bindTexture(ct,ft),v(ct),n.unbindTexture()}}}let qt=[],ue=[];function Te(R){if(R.samples>0){if(Nt(R)===!1){let y=R.textures,G=R.width,q=R.height,Q=e.COLOR_BUFFER_BIT,ct=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=i.get(R),$=y.length>1;if($)for(let ht=0;ht<y.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let tt=R.texture.mipmaps;tt&&tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),$){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ft.__webglColorRenderbuffer[ht]);let Ct=i.get(y[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ct,0)}e.blitFramebuffer(0,0,G,q,0,0,G,q,Q,e.NEAREST),l===!0&&(qt.length=0,ue.length=0,qt.push(e.COLOR_ATTACHMENT0+ht),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(qt.push(ct),ue.push(ct),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,qt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),$)for(let ht=0;ht<y.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,ft.__webglColorRenderbuffer[ht]);let Ct=i.get(y[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Ct,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function xe(R){return Math.min(a.maxSamples,R.samples)}function Nt(R){let y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function P(R){let y=s.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function le(R,y){let G=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Gs&&G!==sa&&(re.getTransfer(G)===_e?(q!==Gi||Q!==Ri)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",G)),y}function zt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=Zt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function EU(e,t){function n(i,a=sa){let r,s=re.getTransfer(a);if(i===Ri)return e.UNSIGNED_BYTE;if(i===Id)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===wv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Av)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tv)return e.BYTE;if(i===Ev)return e.SHORT;if(i===Dl)return e.UNSIGNED_SHORT;if(i===Ld)return e.INT;if(i===ia)return e.UNSIGNED_INT;if(i===aa)return e.FLOAT;if(i===ra)return e.HALF_FLOAT;if(i===Cv)return e.ALPHA;if(i===Rv)return e.RGB;if(i===Gi)return e.RGBA;if(i===Da)return e.DEPTH_COMPONENT;if(i===rs)return e.DEPTH_STENCIL;if(i===Nv)return e.RED;if(i===Od)return e.RED_INTEGER;if(i===ss)return e.RG;if(i===zd)return e.RG_INTEGER;if(i===Bd)return e.RGBA_INTEGER;if(i===gu||i===vu||i===_u||i===xu)if(s===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_u)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_u)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===kd||i===Hd||i===Vd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Xd||i===Wd||i===qd||i===Yd||i===yu||i===Zd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gd||i===Xd)return s===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wd)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qd)return r.COMPRESSED_R11_EAC;if(i===Yd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yu)return r.COMPRESSED_RG11_EAC;if(i===Zd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kd||i===Jd||i===jd||i===Qd||i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===rp||i===sp||i===op||i===lp)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kd)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qd)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tp)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ep)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ap)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rp)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sp)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return s===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cp||i===up||i===hp)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===cp)return s===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===up)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fp||i===dp||i===bu||i===pp)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ul?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var wU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AU=`
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

}`,n_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new lu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Nn({vertexShader:wU,fragmentShader:AU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hi(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},i_=class extends Ua{constructor(t,n){super();let i=this,a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,m=null,S=typeof XRWebGLBinding<"u",g=new n_,f={},v=n.getContextAttributes(),b=null,_=null,M=[],T=[],w=new Wt,x=null,A=null,N=new ci;N.viewport=new Xe;let L=new ci;L.viewport=new Xe;let D=[N,L],I=new Ad,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=M[J];return at===void 0&&(at=new wl,M[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=M[J];return at===void 0&&(at=new wl,M[J]=at),at.getGripSpace()},this.getHand=function(J){let at=M[J];return at===void 0&&(at=new wl,M[J]=at),at.getHandSpace()};function H(J){let at=T.indexOf(J.inputSource);if(at===-1)return;let it=M[at];it!==void 0&&(it.update(J.inputSource,J.frame,c||s),it.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",F),a.removeEventListener("inputsourceschange",V);for(let J=0;J<M.length;J++){let at=T[J];at!==null&&(T[J]=null,M[J].disconnect(at))}C=null,U=null,g.reset();for(let J in f)delete f[J];if(t.setRenderTarget(b),d=null,u=null,p=null,a=null,_=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(b=t.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",F),a.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Tt=null,ot=null;v.depth&&(ot=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=v.stencil?rs:Da,Tt=v.stencil?Ul:ia);let St={colorFormat:n.RGBA8,depthFormat:ot,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(St),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ui(u.textureWidth,u.textureHeight,{format:Gi,type:Ri,depthTexture:new Qr(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let it={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(a,n,it),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ui(d.framebufferWidth,d.framebufferHeight,{format:Gi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Bt.setContext(a),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(J){for(let at=0;at<J.removed.length;at++){let it=J.removed[at],Tt=T.indexOf(it);Tt>=0&&(T[Tt]=null,M[Tt].disconnect(it))}for(let at=0;at<J.added.length;at++){let it=J.added[at],Tt=T.indexOf(it);if(Tt===-1){for(let St=0;St<M.length;St++)if(St>=T.length){T.push(it),Tt=St;break}else if(T[St]===null){T[St]=it,Tt=St;break}if(Tt===-1)break}let ot=M[Tt];ot&&ot.connect(it)}}let z=new Z,O=new Z;function Y(J,at,it){z.setFromMatrixPosition(at.matrixWorld),O.setFromMatrixPosition(it.matrixWorld);let Tt=z.distanceTo(O),ot=at.projectionMatrix.elements,St=it.projectionMatrix.elements,Kt=ot[14]/(ot[10]-1),Vt=ot[14]/(ot[10]+1),Zt=(ot[9]+1)/ot[5],te=(ot[9]-1)/ot[5],It=(ot[8]-1)/ot[0],qt=(St[8]+1)/St[0],ue=Kt*It,Te=Kt*qt,xe=Tt/(-It+qt),Nt=xe*-It;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ot[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let P=Kt+xe,le=Vt+xe,zt=ue-Nt,R=Te+(Tt-Nt),y=Zt*Vt/le*P,G=te*Vt/le*P;J.projectionMatrix.makePerspective(zt,R,y,G,P,le),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let at=J.near,it=J.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(it=g.depthFar)),I.near=L.near=N.near=at,I.far=L.far=N.far=it,(C!==I.near||U!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,U=I.far),I.layers.mask=J.layers.mask|6,N.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;let Tt=J.parent,ot=I.cameras;lt(I,Tt);for(let St=0;St<ot.length;St++)lt(ot[St],Tt);ot.length===2?Y(I,N,L):I.projectionMatrix.copy(N.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),rt(J,I,Tt)};function rt(J,at,it){it===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(it.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(J){return f[J]};let Ot=null;function bt(J,at){if(h=at.getViewerPose(c||s),m=at,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Tt=!1;it.length!==I.cameras.length&&(I.cameras.length=0,Tt=!0);for(let Vt=0;Vt<it.length;Vt++){let Zt=it[Vt],te=null;if(d!==null)te=d.getViewport(Zt);else{let qt=p.getViewSubImage(u,Zt);te=qt.viewport,Vt===0&&(t.setRenderTargetTextures(_,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(_))}let It=D[Vt];It===void 0&&(It=new ci,It.layers.enable(Vt),It.viewport=new Xe,D[Vt]=It),It.matrix.fromArray(Zt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Zt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(te.x,te.y,te.width,te.height),Vt===0&&(I.matrix.copy(It.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Tt===!0&&I.cameras.push(It)}let ot=a.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){p=i.getBinding();let Vt=p.getDepthInformation(it[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,a.renderState)}if(ot&&ot.includes("camera-access")&&S){t.state.unbindTexture(),p=i.getBinding();for(let Vt=0;Vt<it.length;Vt++){let Zt=it[Vt].camera;if(Zt){let te=f[Zt];te||(te=new lu,f[Zt]=te);let It=p.getCameraImage(Zt);te.sourceTexture=It}}}}for(let it=0;it<M.length;it++){let Tt=T[it],ot=M[it];Tt!==null&&ot!==void 0&&ot.update(Tt,at,c||s)}Ot&&Ot(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),m=null}let Bt=new D2;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(J){Ot=J},this.dispose=function(){}}},CU=new Ye,z2=new Xt;z2.set(-1,0,0,0,1,0,0,0,1);function RU(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Iv(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,v,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),S(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,v,b):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Jn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Jn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let v=t.get(f),b=v.envMap,_=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(CU.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(z2),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=b*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){let v=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function NU(e,t,n,i){let a={},r={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let T=M.program;i.uniformBlockBinding(_,T)}function c(_,M){let T=a[_.id];T===void 0&&(g(_),T=h(_),a[_.id]=T,_.addEventListener("dispose",v));let w=M.program;i.updateUBOMapping(_,w);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let M=p();_.__bindingPointIndex=M;let T=e.createBuffer(),w=_.__size,x=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,w,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,T),T}function p(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let M=a[_.id],T=_.uniforms,w=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let x=0,A=T.length;x<A;x++){let N=T[x];if(Array.isArray(N))for(let L=0,D=N.length;L<D;L++)d(N[L],x,L,w);else d(N,x,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(_,M,T,w){if(S(_,M,T,w)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let N=0;for(let L=0;L<A.length;L++){let D=A[L],I=f(D);m(D,_.__data,N),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,_.__data)}}function m(_,M,T){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,T)}function S(_,M,T,w){let x=_.value,A=M+"_"+T;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let N=w[A];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function g(_){let M=_.uniforms,T=0,w=16;for(let A=0,N=M.length;A<N;A++){let L=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,I=L.length;D<I;D++){let C=L[D],U=Array.isArray(C.value)?C.value:[C.value];for(let H=0,F=U.length;H<F;H++){let V=U[H],z=f(V),O=T%w,Y=O%z.boundary,lt=O+Y;T+=Y,lt!==0&&w-lt<z.storage&&(T+=w-lt),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=z.storage}}}let x=T%w;return x>0&&(T+=w-x),_.__size=T,_.__cache={},this}function f(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){let M=_.target;M.removeEventListener("dispose",v);let T=s.indexOf(M.__bindingPointIndex);s.splice(T,1),e.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function b(){for(let _ in a)e.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:l,update:c,dispose:b}}var DU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oa=null;function UU(){return Oa===null&&(Oa=new ud(DU,16,16,ss,ra),Oa.name="DFG_LUT",Oa.minFilter=cn,Oa.magFilter=cn,Oa.wrapS=Na,Oa.wrapT=Na,Oa.generateMipmaps=!1,Oa.needsUpdate=!0),Oa}var Ol=class{constructor(t={}){let{canvas:n=n2(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ri}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let S=d,g=new Set([Bd,zd,Od]),f=new Set([Ri,ia,Dl,Ul,Id,Pd]),v=new Uint32Array(4),b=new Int32Array(4),_=new Z,M=null,T=null,w=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,L=!1,D=null,I=null,C=null,U=null;this._outputColorSpace=Ei;let H=0,F=0,V=null,z=-1,O=null,Y=new Xe,lt=new Xe,rt=null,Ot=new ce(0),bt=0,Bt=n.width,J=n.height,at=1,it=null,Tt=null,ot=new Xe(0,0,Bt,J),St=new Xe(0,0,Bt,J),Kt=!1,Vt=new ru,Zt=!1,te=!1,It=new Ye,qt=new Z,ue=new Xe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Nt(){return V===null?at:1}let P=i;function le(E,B){return n.getContext(E,B)}let zt,R,y,G,q,Q,ct,ft,$,tt,ht,Ct,j,ut,Et,xt,Ut,k,dt,et,pt,_t,st;try{let E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",Xi,!1),P===null){let B="webgl2";if(P=le(B,E),P===null)throw le(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(E){throw n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",Xi,!1),Ht("WebGLRenderer: "+E.message),E}function Lt(){zt=new FN(P),zt.init(),pt=new EU(P,zt),R=new RN(P,zt,t,pt),y=new MU(P,zt),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),I=P.createFramebuffer(),C=P.createFramebuffer(),U=P.createFramebuffer(),G=new VN(P),q=new cU,Q=new TU(P,zt,y,q,R,pt,G),ct=new BN(N),ft=new X3(P),_t=new AN(P,ft),$=new kN(P,ft,G,_t),tt=new XN(P,$,ft,_t,G),k=new GN(P,R,Q),Et=new NN(q),ht=new lU(N,ct,zt,R,_t,Et),Ct=new RU(N,q),j=new hU,ut=new vU(zt),Ut=new wN(N,ct,y,tt,m,l),xt=new SU(N,tt,R),st=new NU(P,G,R,y),dt=new CN(P,zt,G),et=new HN(P,zt,G),G.programs=ht.programs,N.capabilities=R,N.extensions=zt,N.properties=q,N.renderLists=j,N.shadowMap=xt,N.state=y,N.info=G}S!==Ri&&(A=new qN(S,n.width,n.height,o,a,r));let Rt=new i_(N,P);this.xr=Rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(E){E!==void 0&&(at=E,this.setSize(Bt,J,!1))},this.getSize=function(E){return E.set(Bt,J)},this.setSize=function(E,B,K=!0){if(Rt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=E,J=B,n.width=Math.floor(E*at),n.height=Math.floor(B*at),K===!0&&(n.style.width=E+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Bt*at,J*at).floor()},this.setDrawingBufferSize=function(E,B,K){Bt=E,J=B,at=K,n.width=Math.floor(E*K),n.height=Math.floor(B*K),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(S===Ri){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(ot)},this.setViewport=function(E,B,K,X){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,B,K,X),y.viewport(Y.copy(ot).multiplyScalar(at).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,B,K,X){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,B,K,X),y.scissor(lt.copy(St).multiplyScalar(at).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){y.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){Tt=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,K=!0){let X=0;if(E){let W=!1;if(V!==null){let vt=V.texture.format;W=g.has(vt)}if(W){let vt=V.texture.type,Mt=f.has(vt),gt=Ut.getClearColor(),wt=Ut.getClearAlpha(),Dt=gt.r,Jt=gt.g,ee=gt.b;Mt?(v[0]=Dt,v[1]=Jt,v[2]=ee,v[3]=wt,P.clearBufferuiv(P.COLOR,0,v)):(b[0]=Dt,b[1]=Jt,b[2]=ee,b[3]=wt,P.clearBufferiv(P.COLOR,0,b))}else X|=P.COLOR_BUFFER_BIT}B&&(X|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",Xi,!1),Ut.dispose(),j.dispose(),ut.dispose(),q.dispose(),ct.dispose(),tt.dispose(),_t.dispose(),st.dispose(),ht.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",__),Rt.removeEventListener("sessionend",x_),us.stop()};function Ne(E){E.preventDefault(),Lv("WebGLRenderer: Context Lost."),L=!0}function me(){Lv("WebGLRenderer: Context Restored."),L=!1;let E=G.autoReset,B=xt.enabled,K=xt.autoUpdate,X=xt.needsUpdate,W=xt.type;Lt(),G.autoReset=E,xt.enabled=B,xt.autoUpdate=K,xt.needsUpdate=X,xt.type=W}function Xi(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ua(E){let B=E.target;B.removeEventListener("dispose",ua),MT(B)}function MT(E){TT(E),q.remove(E)}function TT(E){let B=q.get(E).programs;B!==void 0&&(B.forEach(function(K){ht.releaseProgram(K)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,K,X,W,vt){B===null&&(B=Te);let Mt=W.isMesh&&W.matrixWorld.determinantAffine()<0,gt=AT(E,B,K,X,W);y.setMaterial(X,Mt);let wt=K.index,Dt=1;if(X.wireframe===!0){if(wt=$.getWireframeAttribute(K),wt===void 0)return;Dt=2}let Jt=K.drawRange,ee=K.attributes.position,At=Jt.start*Dt,ge=(Jt.start+Jt.count)*Dt;vt!==null&&(At=Math.max(At,vt.start*Dt),ge=Math.min(ge,(vt.start+vt.count)*Dt)),wt!==null?(At=Math.max(At,0),ge=Math.min(ge,wt.count)):ee!=null&&(At=Math.max(At,0),ge=Math.min(ge,ee.count));let Qe=ge-At;if(Qe<0||Qe===1/0)return;_t.setup(W,X,gt,K,wt);let Be,Ae=dt;if(wt!==null&&(Be=ft.get(wt),Ae=et,Ae.setIndex(Be)),W.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*Nt()),Ae.setMode(P.LINES)):Ae.setMode(P.TRIANGLES);else if(W.isLine){let Ln=X.linewidth;Ln===void 0&&(Ln=1),y.setLineWidth(Ln*Nt()),W.isLineSegments?Ae.setMode(P.LINES):W.isLineLoop?Ae.setMode(P.LINE_LOOP):Ae.setMode(P.LINE_STRIP)}else W.isPoints?Ae.setMode(P.POINTS):W.isSprite&&Ae.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ln=W._multiDrawStarts,yt=W._multiDrawCounts,Gn=W._multiDrawCount,he=wt?ft.get(wt).bytesPerElement:1,Ni=q.get(X).currentProgram.getUniforms();for(let ha=0;ha<Gn;ha++)Ni.setValue(P,"_gl_DrawID",ha),Ae.render(Ln[ha]/he,yt[ha])}else if(W.isInstancedMesh)Ae.renderInstances(At,Qe,W.count);else if(K.isInstancedBufferGeometry){let Ln=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,yt=Math.min(K.instanceCount,Ln);Ae.renderInstances(At,Qe,yt)}else Ae.render(At,Qe)};function v_(E,B,K,X){D!==null&&E.isNodeMaterial&&D.setObject(X,E),Zt===!0&&Et.setState(E,K,!1),E.transparent===!0&&E.side===Ia&&E.forceSinglePass===!1?(E.side=Jn,E.needsUpdate=!0,Pu(E,B,X),E.side=ns,E.needsUpdate=!0,Pu(E,B,X),E.side=Ia):Pu(E,B,X)}this.compile=function(E,B,K=null){K===null&&(K=E),D!==null&&D.renderStart(E,B,K),T=ut.get(K),T.init(B),x.push(T),K.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==K&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),te=this.localClippingEnabled,Zt=Et.init(this.clippingPlanes,te),Zt===!0&&Et.setGlobalState(this.clippingPlanes,B),D!==null&&xt.render(T.state.shadowsArray,K,B);let X=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let vt=W.material;if(vt)if(Array.isArray(vt))for(let Mt=0;Mt<vt.length;Mt++){let gt=vt[Mt];v_(gt,K,B,W),X.add(gt)}else v_(vt,K,B,W),X.add(vt)}),T=x.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(E,B,K=null){let X=this.compile(E,B,K);return new Promise(W=>{function vt(){if(X.forEach(function(Mt){let wt=q.get(Mt).currentProgram;(wt===void 0||wt.isReady())&&X.delete(Mt)}),X.size===0){W(E);return}setTimeout(vt,10)}zt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Np=null;function ET(E){Np&&Np(E)}function __(){us.stop()}function x_(){us.start()}let us=new D2;us.setAnimationLoop(ET),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(E){Np=E,Rt.setAnimationLoop(E),E===null?us.stop():us.start()},Rt.addEventListener("sessionstart",__),Rt.addEventListener("sessionend",x_),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,B);let K=Rt.enabled===!0&&Rt.isPresenting===!0,X=A!==null&&(V===null||K)&&A.begin(N,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(B),B=Rt.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,B,V),T=ut.get(E,x.length),T.init(B),T.state.textureUnits=Q.getTextureUnits(),x.push(T),It.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Vt.setFromProjectionMatrix(It,ea,B.reversedDepth),te=this.localClippingEnabled,Zt=Et.init(this.clippingPlanes,te),M=j.get(E,w.length),M.init(),w.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){let Mt=N.xr.getDepthSensingMesh();Mt!==null&&Dp(Mt,B,-1/0,N.sortObjects)}Dp(E,B,0,N.sortObjects),M.finish(),D!==null&&D.updateLights(T.state.lightsArray),N.sortObjects===!0&&M.sort(it,Tt),xe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,xe&&Ut.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Et.beginShadows();let W=T.state.shadowsArray;if(xt.render(W,E,B),Zt===!0&&Et.endShadows(),(X&&A.hasRenderPass())===!1){let Mt=M.opaque,gt=M.transmissive;if(T.setupLights(),B.isArrayCamera){let wt=B.cameras;if(gt.length>0)for(let Dt=0,Jt=wt.length;Dt<Jt;Dt++){let ee=wt[Dt];b_(Mt,gt,E,ee)}xe&&Ut.render(E);for(let Dt=0,Jt=wt.length;Dt<Jt;Dt++){let ee=wt[Dt];y_(M,E,ee,ee.viewport)}}else gt.length>0&&b_(Mt,gt,E,B),xe&&Ut.render(E),y_(M,E,B)}V!==null&&F===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),X&&A.end(N),E.isScene===!0&&E.onAfterRender(N,E,B),_t.resetDefaultState(),z=-1,O=null,x.pop(),x.length>0?(T=x[x.length-1],Q.setTextureUnits(T.state.textureUnits),Zt===!0&&Et.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,D!==null&&D.renderEnd()};function Dp(E,B,K,X){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Vt)){X&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);let Mt=tt.update(E),gt=E.material;gt.visible&&M.push(E,Mt,gt,K,ue.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Vt))){let Mt=tt.update(E),gt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ue.copy(Mt.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(gt)){let wt=Mt.groups;for(let Dt=0,Jt=wt.length;Dt<Jt;Dt++){let ee=wt[Dt],At=gt[ee.materialIndex];At&&At.visible&&M.push(E,Mt,At,K,ue.z,ee,B)}}else gt.visible&&M.push(E,Mt,gt,K,ue.z,null,B)}}let vt=E.children;for(let Mt=0,gt=vt.length;Mt<gt;Mt++)Dp(vt[Mt],B,K,X)}function y_(E,B,K,X){let{opaque:W,transmissive:vt,transparent:Mt}=E;T.setupLightsView(K),Zt===!0&&Et.setGlobalState(N.clippingPlanes,K),X&&y.viewport(Y.copy(X)),W.length>0&&Iu(W,B,K),vt.length>0&&Iu(vt,B,K),Mt.length>0&&Iu(Mt,B,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function b_(E,B,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let At=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new ui(1,1,{generateMipmaps:!0,type:At?ra:Ri,minFilter:as,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let vt=T.state.transmissionRenderTarget[X.id],Mt=X.viewport||Y;vt.setSize(Mt.z*N.transmissionResolutionScale,Mt.w*N.transmissionResolutionScale);let gt=N.getRenderTarget(),wt=N.getActiveCubeFace(),Dt=N.getActiveMipmapLevel();N.setRenderTarget(vt),N.getClearColor(Ot),bt=N.getClearAlpha(),bt<1&&N.setClearColor(16777215,.5),N.clear(),xe&&Ut.render(K);let Jt=N.toneMapping;N.toneMapping=na;let ee=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),Zt===!0&&Et.setGlobalState(N.clippingPlanes,X),Iu(E,K,X),Q.updateMultisampleRenderTarget(vt),Q.updateRenderTargetMipmap(vt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ge=0,Qe=B.length;ge<Qe;ge++){let Be=B[ge],{object:Ae,geometry:Ln,material:yt,group:Gn}=Be;if(yt.side===Ia&&Ae.layers.test(X.layers)){let he=yt.side;yt.side=Jn,yt.needsUpdate=!0,S_(Ae,K,X,Ln,yt,Gn),yt.side=he,yt.needsUpdate=!0,At=!0}}At===!0&&(Q.updateMultisampleRenderTarget(vt),Q.updateRenderTargetMipmap(vt))}N.setRenderTarget(gt,wt,Dt),N.setClearColor(Ot,bt),ee!==void 0&&(X.viewport=ee),N.toneMapping=Jt}function Iu(E,B,K){let X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,vt=E.length;W<vt;W++){let Mt=E[W],{object:gt,geometry:wt,group:Dt}=Mt,Jt=Mt.material;Jt.allowOverride===!0&&X!==null&&(Jt=X),gt.layers.test(K.layers)&&S_(gt,B,K,wt,Jt,Dt)}}function S_(E,B,K,X,W,vt){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(N,B,K,X,W,vt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(N,B,K,X,E,vt),W.transparent===!0&&W.side===Ia&&W.forceSinglePass===!1?(W.side=Jn,W.needsUpdate=!0,N.renderBufferDirect(K,B,X,W,E,vt),W.side=ns,W.needsUpdate=!0,N.renderBufferDirect(K,B,X,W,E,vt),W.side=Ia):N.renderBufferDirect(K,B,X,W,E,vt),E.onAfterRender(N,B,K,X,W,vt)}function Pu(E,B,K){B.isScene!==!0&&(B=Te);let X=q.get(E),W=T.state.lights,vt=T.state.shadowsArray,Mt=W.state.version,gt=ht.getParameters(E,W.state,vt,B,K,T.state.lightProbeGridArray),wt=ht.getProgramCacheKey(gt),Dt=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let Jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ct.get(E.envMap||X.environment,Jt),X.envMapRotation=X.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",ua),Dt=new Map,X.programs=Dt);let ee=Dt.get(wt);if(ee!==void 0){if(X.currentProgram===ee&&X.lightsStateVersion===Mt)return T_(E,gt),ee}else gt.uniforms=ht.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,K,gt),E.onBeforeCompile(gt,N),ee=ht.acquireProgram(gt,wt),Dt.set(wt,ee),X.uniforms=gt.uniforms;let At=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=Et.uniform),T_(E,gt),X.needsLights=RT(E),X.lightsStateVersion=Mt,X.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=ee,X.uniformsList=null,ee}function M_(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Pl.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function T_(E,B){let K=q.get(E);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function wT(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let K=0,X=E.length;K<X;K++){let W=E[K];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function AT(E,B,K,X,W){B.isScene!==!0&&(B=Te),Q.resetTextureUnits();let vt=B.fog,Mt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,gt=V===null?N.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:re.workingColorSpace,wt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Dt=ct.get(X.envMap||Mt,wt),Jt=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ee=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!K.morphAttributes.position,ge=!!K.morphAttributes.normal,Qe=!!K.morphAttributes.color,Be=na;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Be=N.toneMapping);let Ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ln=Ae!==void 0?Ae.length:0,yt=q.get(X),Gn=T.state.lights;if(Zt===!0&&(te===!0||E!==O)){let De=E===O&&X.id===z;Et.setState(X,E,De)}let he=!1;X.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Gn.state.version||yt.outputColorSpace!==gt||W.isBatchedMesh&&yt.batching===!1||!W.isBatchedMesh&&yt.batching===!0||W.isBatchedMesh&&yt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&yt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&yt.instancing===!1||!W.isInstancedMesh&&yt.instancing===!0||W.isSkinnedMesh&&yt.skinning===!1||!W.isSkinnedMesh&&yt.skinning===!0||W.isInstancedMesh&&yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&yt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&yt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&yt.instancingMorph===!1&&W.morphTexture!==null||yt.envMap!==Dt||X.fog===!0&&yt.fog!==vt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Et.numPlanes||yt.numIntersection!==Et.numIntersection)||yt.vertexAlphas!==Jt||yt.vertexTangents!==ee||yt.morphTargets!==At||yt.morphNormals!==ge||yt.morphColors!==Qe||yt.toneMapping!==Be||yt.morphTargetsCount!==Ln||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,yt.__version=X.version);let Ni=yt.currentProgram;he===!0&&(Ni=Pu(X,B,W),D&&X.isNodeMaterial&&D.onUpdateProgram(X,Ni,yt));let ha=!1,cr=!1,io=!1,Ee=Ni.getUniforms(),Ke=yt.uniforms;if(y.useProgram(Ni.program)&&(ha=!0,cr=!0,io=!0),X.id!==z&&(z=X.id,cr=!0),yt.needsLights){let De=wT(T.state.lightProbeGridArray,W);yt.lightProbeGrid!==De&&(yt.lightProbeGrid=De,cr=!0)}if(ha||O!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(P,"projectionMatrix",E.projectionMatrix),Ee.setValue(P,"viewMatrix",E.matrixWorldInverse);let hr=Ee.map.cameraPosition;hr!==void 0&&hr.setValue(P,qt.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,cr=!0,io=!0)}if(yt.needsLights&&(Gn.state.sunShadowMap.length>0&&Ee.setValue(P,"sunShadowMap",Gn.state.sunShadowMap,Q),Gn.state.directionalShadowMap.length>0&&Ee.setValue(P,"directionalShadowMap",Gn.state.directionalShadowMap,Q),Gn.state.spotShadowMap.length>0&&Ee.setValue(P,"spotShadowMap",Gn.state.spotShadowMap,Q),Gn.state.pointShadowMap.length>0&&Ee.setValue(P,"pointShadowMap",Gn.state.pointShadowMap,Q)),W.isSkinnedMesh){Ee.setOptional(P,W,"bindMatrix"),Ee.setOptional(P,W,"bindMatrixInverse");let De=W.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ee.setValue(P,"boneTexture",De.boneTexture,Q))}W.isBatchedMesh&&(Ee.setOptional(P,W,"batchingTexture"),Ee.setValue(P,"batchingTexture",W._matricesTexture,Q),Ee.setOptional(P,W,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",W._indirectTexture,Q),Ee.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",W._colorsTexture,Q));let ur=K.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&k.update(W,K,Ni),(cr||yt.receiveShadow!==W.receiveShadow)&&(yt.receiveShadow=W.receiveShadow,Ee.setValue(P,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Ke.envMapIntensity.value=B.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=UU()),cr){if(Ee.setValue(P,"toneMappingExposure",N.toneMappingExposure),yt.needsLights&&CT(Ke,io),vt&&X.fog===!0&&Ct.refreshFogUniforms(Ke,vt),Ct.refreshMaterialUniforms(Ke,X,at,J,T.state.transmissionRenderTarget[E.id]),yt.needsLights&&yt.lightProbeGrid){let De=yt.lightProbeGrid;Ke.probesSH.value=De.texture,Ke.probesMin.value.copy(De.boundingBox.min),Ke.probesMax.value.copy(De.boundingBox.max),Ke.probesResolution.value.copy(De.resolution)}Pl.upload(P,M_(yt),Ke,Q)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Pl.upload(P,M_(yt),Ke,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(P,"center",W.center),Ee.setValue(P,"modelViewMatrix",W.modelViewMatrix),Ee.setValue(P,"normalMatrix",W.normalMatrix),Ee.setValue(P,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){let De=X.uniformsGroups;for(let hr=0,ao=De.length;hr<ao;hr++){let w_=De[hr];st.update(w_,Ni),st.bind(w_,Ni)}}return Ni}function CT(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function RT(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,B,K){let X=q.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=B,q.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let K=q.get(E);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,K=0){V=E,H=B,F=K;let X=null,W=!1,vt=!1;if(E){let gt=q.get(E);if(gt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(P.FRAMEBUFFER,gt.__webglFramebuffer),Y.copy(E.viewport),lt.copy(E.scissor),rt=E.scissorTest,y.viewport(Y),y.scissor(lt),y.setScissorTest(rt),z=-1;return}else if(gt.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(gt.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Jt=E.depthTexture;if(gt.__boundDepthTexture!==Jt){if(Jt!==null&&q.has(Jt)&&(E.width!==Jt.image.width||E.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);let Dt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[B])?X=Dt[B][K]:X=Dt[B],W=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?X=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?X=Dt[K]:X=Dt,Y.copy(E.viewport),lt.copy(E.scissor),rt=E.scissorTest}else Y.copy(ot).multiplyScalar(at).floor(),lt.copy(St).multiplyScalar(at).floor(),rt=Kt;if(K!==0&&(X=I),y.bindFramebuffer(P.FRAMEBUFFER,X)&&y.drawBuffers(E,X),y.viewport(Y),y.scissor(lt),y.setScissorTest(rt),W){let gt=q.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,gt.__webglTexture,K)}else if(vt){let gt=B;for(let wt=0;wt<E.textures.length;wt++){let Dt=q.get(E.textures[wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,K,gt)}}else if(E!==null&&K!==0){let gt=q.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gt.__webglTexture,K)}z=-1};function E_(E){let B=q.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=R.textureFormatReadable(E.format),B.__typeReadable=R.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,K,X,W,vt,Mt,gt=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){y.bindFramebuffer(P.FRAMEBUFFER,wt);try{let Dt=E.textures[gt],Jt=Dt.format,ee=Dt.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+gt);let At=E_(Dt);if(At.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-X&&K>=0&&K<=E.height-W&&P.readPixels(B,K,X,W,pt.convert(Jt),pt.convert(ee),vt)}finally{let Dt=V!==null?q.get(V).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,B,K,X,W,vt,Mt,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt)if(B>=0&&B<=E.width-X&&K>=0&&K<=E.height-W){y.bindFramebuffer(P.FRAMEBUFFER,wt);let Dt=E.textures[gt],Jt=Dt.format,ee=Dt.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+gt);let At=E_(Dt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ge),P.bufferData(P.PIXEL_PACK_BUFFER,vt.byteLength,P.STREAM_READ),P.readPixels(B,K,X,W,pt.convert(Jt),pt.convert(ee),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Qe=V!==null?q.get(V).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Qe);let Be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await a2(P,Be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ge),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,vt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ge),P.deleteSync(Be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,K=0){let X=Math.pow(2,-K),W=Math.floor(E.image.width*X),vt=Math.floor(E.image.height*X),Mt=B!==null?B.x:0,gt=B!==null?B.y:0;Q.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Mt,gt,W,vt),y.unbindTexture()},this.copyTextureToTexture=function(E,B,K=null,X=null,W=0,vt=0){let Mt,gt,wt,Dt,Jt,ee,At,ge,Qe,Be=E.isCompressedTexture?E.mipmaps[vt]:E.image;if(K!==null)Mt=K.max.x-K.min.x,gt=K.max.y-K.min.y,wt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Jt=K.min.y,ee=K.isBox3?K.min.z:0;else{let Ke=Math.pow(2,-W);Mt=Math.floor(Be.width*Ke),gt=Math.floor(Be.height*Ke),E.isDataArrayTexture?wt=Be.depth:E.isData3DTexture?wt=Math.floor(Be.depth*Ke):wt=1,Dt=0,Jt=0,ee=0}X!==null?(At=X.x,ge=X.y,Qe=X.z):(At=0,ge=0,Qe=0);let Ae=pt.convert(B.format),Ln=pt.convert(B.type),yt;B.isData3DTexture?(Q.setTexture3D(B,0),yt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),yt=P.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),yt=P.TEXTURE_2D),y.activeTexture(P.TEXTURE0),y.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Gn=y.getParameter(P.UNPACK_ROW_LENGTH),he=y.getParameter(P.UNPACK_IMAGE_HEIGHT),Ni=y.getParameter(P.UNPACK_SKIP_PIXELS),ha=y.getParameter(P.UNPACK_SKIP_ROWS),cr=y.getParameter(P.UNPACK_SKIP_IMAGES);y.pixelStorei(P.UNPACK_ROW_LENGTH,Be.width),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Be.height),y.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),y.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(P.UNPACK_SKIP_IMAGES,ee);let io=E.isDataArrayTexture||E.isData3DTexture,Ee=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let Ke=q.get(E),ur=q.get(B),De=q.get(Ke.__renderTarget),hr=q.get(ur.__renderTarget);y.bindFramebuffer(P.READ_FRAMEBUFFER,De.__webglFramebuffer),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let ao=0;ao<wt;ao++)io&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,ee+ao),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,q.get(B).__webglTexture,vt,Qe+ao)),P.blitFramebuffer(Dt,Jt,Mt,gt,At,ge,Mt,gt,P.DEPTH_BUFFER_BIT,P.NEAREST);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){let Ke=q.get(E),ur=q.get(B);y.bindFramebuffer(P.READ_FRAMEBUFFER,C),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,U);for(let De=0;De<wt;De++)io?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ke.__webglTexture,W,ee+De):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ke.__webglTexture,W),Ee?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ur.__webglTexture,vt,Qe+De):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ur.__webglTexture,vt),W!==0?P.blitFramebuffer(Dt,Jt,Mt,gt,At,ge,Mt,gt,P.COLOR_BUFFER_BIT,P.NEAREST):Ee?P.copyTexSubImage3D(yt,vt,At,ge,Qe+De,Dt,Jt,Mt,gt):P.copyTexSubImage2D(yt,vt,At,ge,Dt,Jt,Mt,gt);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ee?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(yt,vt,At,ge,Qe,Mt,gt,wt,Ae,Ln,Be.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,vt,At,ge,Qe,Mt,gt,wt,Ae,Be.data):P.texSubImage3D(yt,vt,At,ge,Qe,Mt,gt,wt,Ae,Ln,Be):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,vt,At,ge,Mt,gt,Ae,Ln,Be.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,vt,At,ge,Be.width,Be.height,Ae,Be.data):P.texSubImage2D(P.TEXTURE_2D,vt,At,ge,Mt,gt,Ae,Ln,Be);y.pixelStorei(P.UNPACK_ROW_LENGTH,Gn),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),y.pixelStorei(P.UNPACK_SKIP_PIXELS,Ni),y.pixelStorei(P.UNPACK_SKIP_ROWS,ha),y.pixelStorei(P.UNPACK_SKIP_IMAGES,cr),vt===0&&B.generateMipmaps&&P.generateMipmap(yt),y.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){H=0,F=0,V=null,y.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}};function Dn(e,t,n,i,a){let r=n[0]-t[0],s=n[1]-t[1],o=Math.hypot(r,s)||1e-6,l=Math.atan2(s,r);e.beginPath(),e.arc(t[0],t[1],i,l+Math.PI/2,l-Math.PI/2),e.arc(n[0],n[1],a,l-Math.PI/2,l+Math.PI/2),e.closePath(),e.fill()}function F2(e,t,n){let{x:i,y:a,s:r,f:s,kit:o}=n,l=C=>[i+s*C[0]*r,a-C[1]*r],c=C=>C*r;e.save(),e.lineJoin=e.lineCap="round",e.fillStyle="rgba(20, 30, 20, .16)",e.beginPath(),e.ellipse(i+s*c(.05),a+1,c(.42),c(.06),0,0,Math.PI*2),e.fill();let h=l(t.pelvis),p=l(t.S),u=l(t.rS),d=l(t.lS),m=l(t.fK),S=l(t.fA),g=l(t.bK),f=l(t.bA),v=(C,U,H)=>{let F=U*Math.PI/180,V=[C[0]+s*Math.cos(F)*c(.2),C[1]-Math.sin(F)*c(.2)+c(.035)],z=[C[0]-s*c(.04),C[1]+c(.04)];e.fillStyle=H,Dn(e,z,V,c(.045),c(.04)),e.fillStyle=o.accent,e.fillRect(Math.min(z[0],V[0]),Math.max(z[1],V[1])+c(.025),Math.abs(V[0]-z[0]),c(.016))},b=(C,U,H,F,V)=>{e.fillStyle=H,Dn(e,h,C,c(.07),c(.05)),Dn(e,C,U,c(.052),c(.032)),e.fillStyle="#f7f4ec";let z=[U[0]+(C[0]-U[0])*.18,U[1]+(C[1]-U[1])*.18];Dn(e,z,U,c(.036),c(.033)),e.fillStyle=F;let O=[h[0]+(C[0]-h[0])*.5,h[1]+(C[1]-h[1])*.5];Dn(e,h,O,c(.095),c(.078))},_=(C,U,H,F,V,z)=>{e.fillStyle=F,Dn(e,C,U,c(.048),c(.038)),Dn(e,U,H,c(.04),c(.028)),e.fillStyle=V;let O=[C[0]+(U[0]-C[0])*.45,C[1]+(U[1]-C[1])*.45];if(Dn(e,C,O,c(.062),c(.054)),z){e.fillStyle=o.accent;let Y=[H[0]+(U[0]-H[0])*.18,H[1]+(U[1]-H[1])*.18];Dn(e,Y,[H[0]+(U[0]-H[0])*.05,H[1]+(U[1]-H[1])*.05],c(.032),c(.03))}};b(g,f,o.skinShade,o.bottomShade),v(f,t.bf,"#e7e1d4"),_(d,l(t.lE),l(t.lH),o.skinShade,o.shade,!1),e.fillStyle=o.skinShade,e.beginPath(),e.arc(l(t.lH)[0],l(t.lH)[1],c(.035),0,Math.PI*2),e.fill();let M=[p[0]-h[0],p[1]-h[1]],T=Math.hypot(M[0],M[1]),w=[-M[1]/T,M[0]/T],x=(C,U)=>[h[0]+M[0]*C+w[0]*U,h[1]+M[1]*C+w[1]*U],A=Math.cos(t.twist*Math.PI/180),N=c(.13)*(.9+.1*Math.abs(A));e.fillStyle=o.shirt,e.beginPath();let L=[x(-.02,c(.1)),x(.45,c(.105)),x(.82,N),x(1.02,c(.09)),x(1.02,-c(.09)),x(.82,-N*.95),x(.45,-c(.1)),x(-.02,-c(.1))];e.moveTo(...L[0]);for(let C=1;C<L.length;C++){let U=L[C-1],H=L[C];e.quadraticCurveTo(U[0],U[1],(U[0]+H[0])/2,(U[1]+H[1])/2)}if(e.closePath(),e.fill(),e.strokeStyle=o.shade,e.lineWidth=c(.012),e.beginPath(),e.moveTo(...x(.15,c(.02)*s)),e.lineTo(...x(.9,c(.03)*s)),e.stroke(),e.fillStyle=o.accent,Dn(e,x(1,-c(.05)),x(1,c(.05)),c(.014),c(.014)),e.fillStyle=o.bottom,o.female){e.beginPath();let C=x(.12,c(.11)),U=x(.12,-c(.11)),H=[h[0]+w[0]*c(.19)-M[0]*.38,h[1]+w[1]*c(.19)-M[1]*.38],F=[h[0]-w[0]*c(.19)-M[0]*.38,h[1]-w[1]*c(.19)-M[1]*.38];e.moveTo(...C),e.lineTo(...H),e.lineTo(...F),e.lineTo(...U),e.closePath(),e.fill()}else Dn(e,x(.1,0),x(-.08,0),c(.108),c(.1));b(m,S,o.skin,o.bottom),v(S,t.ff,"#fbfaf6");let D=l(t.head),I=l(t.neck);if(e.fillStyle=o.skin,Dn(e,I,[I[0]+(D[0]-I[0])*.5,I[1]+(D[1]-I[1])*.5],c(.045),c(.045)),e.beginPath(),e.arc(D[0],D[1],c(.112),0,Math.PI*2),e.fill(),e.fillStyle=o.hair,e.beginPath(),e.arc(D[0]-s*c(.02),D[1]-c(.015),c(.112),s>0?Math.PI*.55:-Math.PI*.45,s>0?Math.PI*1.95:Math.PI*.95),e.fill(),o.female){let C=Math.sin(n.time*6)*.04+t.twist/90*.08,U=[D[0]-s*c(.1),D[1]-c(.02)],H=[U[0]-s*c(.16+C),U[1]+c(.16)];Dn(e,U,H,c(.045),c(.02))}e.fillStyle=o.skinShade,e.beginPath(),e.arc(D[0]+s*c(.005),D[1]+c(.01),c(.025),0,Math.PI*2),e.fill(),e.fillStyle=o.accent,o.head==="cap"?(e.beginPath(),e.arc(D[0],D[1]-c(.02),c(.118),Math.PI*1.02,Math.PI*1.98),e.fill(),Dn(e,[D[0]+s*c(.02),D[1]-c(.04)],[D[0]+s*c(.2),D[1]-c(.03)],c(.02),c(.016))):o.head==="visor"?(Dn(e,[D[0]-s*c(.1),D[1]-c(.06)],[D[0]+s*c(.08),D[1]-c(.07)],c(.022),c(.022)),Dn(e,[D[0]+s*c(.06),D[1]-c(.07)],[D[0]+s*c(.2),D[1]-c(.055)],c(.016),c(.012))):Dn(e,[D[0]-s*c(.11),D[1]-c(.035)],[D[0]+s*c(.1),D[1]-c(.06)],c(.022),c(.022)),LU(e,t.racket,l,r,s,o),_(u,l(t.rE),l(t.rH),o.skin,o.shirt,!0),e.fillStyle=o.skin,e.beginPath(),e.arc(l(t.rH)[0],l(t.rH)[1],c(.038),0,Math.PI*2),e.fill(),e.restore()}function LU(e,t,n,i,a,r){let s=m=>m*i,o=n(t.butt),l=n(t.throat),c=n(t.center),h=Math.atan2(c[1]-l[1],c[0]-l[0]),p=s(.165),u=s(.128)*Math.max(.14,Math.abs(Math.cos(t.roll*Math.PI/180)));e.lineCap="round",e.strokeStyle="#232825",e.lineWidth=s(.032),e.beginPath(),e.moveTo(...o),e.lineTo(...l),e.stroke(),e.strokeStyle=r.accent==="#f7f4ec"?"#e6e28c":r.accent,e.lineWidth=s(.026),e.beginPath(),e.moveTo(...o),e.lineTo(o[0]+(l[0]-o[0])*.55,o[1]+(l[1]-o[1])*.55),e.stroke(),e.save(),e.translate(c[0],c[1]),e.rotate(h),e.strokeStyle="#232825",e.lineWidth=s(.015);let d=-Math.hypot(c[0]-l[0],c[1]-l[1]);e.beginPath(),e.moveTo(d,0),e.quadraticCurveTo(-p*.95,0,-p*.82,u*.62),e.moveTo(d,0),e.quadraticCurveTo(-p*.95,0,-p*.82,-u*.62),e.stroke(),e.save(),e.beginPath(),e.ellipse(0,0,p*.93,u*.9,0,0,Math.PI*2),e.clip(),e.fillStyle="rgba(240, 236, 220, .14)",e.fill(),e.strokeStyle="rgba(245, 240, 225, .75)",e.lineWidth=Math.max(.5,s(.0035)),e.beginPath();for(let m=-6;m<=6;m++){let S=m/6.5*u;e.moveTo(-p,S),e.lineTo(p,S)}for(let m=-8;m<=8;m++){let S=m/8.5*p;e.moveTo(S,-u),e.lineTo(S,u)}e.stroke(),e.restore(),e.strokeStyle="#1c201e",e.lineWidth=s(.02),e.beginPath(),e.ellipse(0,0,p,u,0,0,Math.PI*2),e.stroke(),e.strokeStyle=r.accent==="#f7f4ec"?"#e6e28c":r.accent,e.lineWidth=s(.009),e.beginPath(),e.ellipse(0,0,p,u,0,-.9,.9),e.stroke(),e.restore()}var or={ready:{drop:.1,lean:14,twist:20,head:0,rs:30,re:60,rw:30,rr:35,ls:35,le:50,fh:22,fk:38,bh:-14,bk:28,ff:0,bf:0,th:0},split:{drop:.02,lean:10,twist:20,head:0,rs:28,re:62,rw:30,rr:35,ls:32,le:50,fh:16,fk:14,bh:-12,bk:14,ff:6,bf:-6,th:0},keepup:{drop:.05,lean:8,twist:25,head:12,rs:42,re:44,rw:4,rr:88,ls:20,le:40,fh:14,fk:20,bh:-12,bk:18,ff:0,bf:0,th:0},cushion:{drop:.12,lean:18,twist:15,head:5,rs:58,re:30,rw:2,rr:80,ls:10,le:45,fh:30,fk:40,bh:-20,bk:28,ff:0,bf:-10,th:0},fhBack:{drop:.13,lean:8,twist:-65,head:20,rs:-62,re:32,rw:-100,rr:55,ls:88,le:4,fh:30,fk:34,bh:-24,bk:38,ff:0,bf:0,th:0},fhLoop:{drop:.14,lean:10,twist:-45,head:18,rs:-40,re:20,rw:-10,rr:70,ls:70,le:10,fh:32,fk:32,bh:-28,bk:26,ff:0,bf:-8,th:0},fhHit:{drop:.1,lean:15,twist:10,head:8,rs:56,re:24,rw:10,rr:78,ls:12,le:50,fh:33,fk:24,bh:-28,bk:22,ff:0,bf:-28,th:0},fhFollow:{drop:.06,lean:18,twist:78,head:0,rs:172,re:70,rw:32,rr:40,ls:-32,le:82,fh:20,fk:14,bh:-10,bk:42,ff:0,bf:-50,th:0},svStance:{drop:.02,lean:4,twist:-30,head:0,rs:22,re:40,rw:20,rr:40,ls:26,le:30,fh:10,fk:6,bh:-16,bk:10,ff:0,bf:0,th:0},svToss:{drop:.08,lean:-6,twist:-50,head:25,rs:-40,re:10,rw:-40,rr:50,ls:150,le:0,fh:14,fk:26,bh:-10,bk:26,ff:0,bf:0,th:0},svTrophy:{drop:.16,lean:-18,twist:-62,head:30,rs:-95,re:-95,rw:168,rr:60,ls:176,le:0,fh:18,fk:50,bh:-6,bk:46,ff:0,bf:0,th:0},svHit:{drop:-.16,lean:8,twist:12,head:20,rs:174,re:0,rw:6,rr:82,ls:42,le:62,fh:6,fk:10,bh:-14,bk:26,ff:-20,bf:-30,th:0},svFollow:{drop:.12,lean:42,twist:72,head:0,rs:34,re:-30,rw:-40,rr:40,ls:-12,le:62,fh:30,fk:32,bh:-52,bk:72,ff:0,bf:-40,th:0},bhBack:{drop:.13,lean:4,twist:80,head:22,rs:-18,re:50,rw:-125,rr:55,ls:-10,le:40,fh:30,fk:36,bh:-24,bk:30,ff:0,bf:0,th:1},bhLoop:{drop:.14,lean:8,twist:60,head:18,rs:-5,re:30,rw:-45,rr:70,ls:0,le:30,fh:33,fk:32,bh:-27,bk:26,ff:0,bf:-8,th:1},bhHit:{drop:.1,lean:14,twist:15,head:6,rs:52,re:22,rw:14,rr:80,ls:50,le:22,fh:35,fk:24,bh:-28,bk:22,ff:0,bf:-28,th:1},bhFollow:{drop:.05,lean:14,twist:-45,head:0,rs:165,re:40,rw:45,rr:40,ls:150,le:40,fh:22,fk:14,bh:-12,bk:40,ff:0,bf:-45,th:1},catch:{drop:.04,lean:6,twist:35,head:10,rs:24,re:40,rw:60,rr:30,ls:150,le:20,fh:14,fk:12,bh:-14,bk:12,ff:0,bf:0,th:0}},IU=Object.keys(or.ready),PU=(e,t,n)=>e+(t-e)*n;var k2={inOut:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,out:e=>1-Math.pow(1-e,3),in:e=>e*e*e,smooth:e=>e*e*(3-2*e)};function OU(e,t,n){let i={};for(let a of IU)i[a]=PU(e[a],t[a],n);return i}function a_(e){return t=>{if(t<=e[0][0])return or[e[0][1]];for(let n=0;n<e.length-1;n++){let[i,a]=e[n],[r,s,o]=e[n+1];if(t<=r)return OU(or[a],or[s],(k2[o]||k2.inOut)((t-i)/(r-i)))}return or[e[e.length-1][1]]}}var zU={thigh:.46,shin:.45,upper:.3,fore:.27,torso:.52,neck:.07,headR:.112,shoulder:.17,hipH:.93},sr=e=>{let t=e*Math.PI/180;return[Math.sin(t),-Math.cos(t)]},kn=(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n];function Mp(e){let t=zU,n=[0,t.hipH-e.drop],i=[Math.sin(e.lean*Math.PI/180),Math.cos(e.lean*Math.PI/180)],a=kn(n,i,t.torso),r=kn(n,i,t.torso-.03),s=Math.sin(e.twist*Math.PI/180)*t.shoulder,o=[r[0]+s,r[1]],l=[r[0]-s,r[1]],c=kn(a,[Math.sin((e.lean+e.head*.3)*Math.PI/180),Math.cos((e.lean+e.head*.3)*Math.PI/180)],t.neck+t.headR),h=kn(o,sr(e.rs),t.upper),p=kn(h,sr(e.rs+e.re),t.fore),u=kn(l,sr(e.ls),t.upper),d=kn(u,sr(e.ls+e.le),t.fore),m=kn(n,sr(e.fh),t.thigh),S=kn(m,sr(e.fh-e.fk),t.shin),g=kn(n,sr(e.bh),t.thigh),f=kn(g,sr(e.bh-e.bk),t.shin),v=e.rs+e.re+e.rw,b=sr(v),_=u,M=d;if(e.th>.01){let w=kn(p,b,.075),x=w[0]-l[0],A=w[1]-l[1],N=Math.min(Math.max(Math.hypot(x,A),.08),t.upper+t.fore-.005),L=Math.atan2(A,x),D=Math.acos((t.upper*t.upper+N*N-t.fore*t.fore)/(2*t.upper*N)),I=[l[0]+Math.cos(L-D)*t.upper,l[1]+Math.sin(L-D)*t.upper],C=[l[0]+Math.cos(L+D)*t.upper,l[1]+Math.sin(L+D)*t.upper],U=I[1]<C[1]?I:C,H=[l[0]+x/Math.hypot(x,A)*N,l[1]+A/Math.hypot(x,A)*N],F=e.th;_=[u[0]+(U[0]-u[0])*F,u[1]+(U[1]-u[1])*F],M=[d[0]+(H[0]-d[0])*F,d[1]+(H[1]-d[1])*F]}let T={angle:v,roll:e.rr,butt:kn(p,b,-.05),throat:kn(p,b,.15),center:kn(p,b,.15+.165),tip:kn(p,b,.15+.33),dir:b};return{pelvis:n,neck:a,S:r,rS:o,lS:l,head:c,rE:h,rH:p,lE:_,lH:M,fK:m,fA:S,bK:g,bA:f,racket:T,twist:e.twist,ff:e.ff,bf:e.bf,lean:e.lean}}var H2={forehand:{pose:a_([[0,"keepup"],[.32,"fhBack","inOut"],[.5,"fhLoop","in"],[.62,"fhHit","in"],[.95,"fhFollow","out"],[1.75,"ready","inOut"]]),contact:.62,contactPose:"fhHit"},backhand:{pose:a_([[0,"keepup"],[.34,"bhBack","inOut"],[.5,"bhLoop","in"],[.62,"bhHit","in"],[.95,"bhFollow","out"],[1.75,"ready","inOut"]]),contact:.62,contactPose:"bhHit"},serve:{pose:a_([[0,"keepup"],[.25,"svStance","inOut"],[.62,"svToss","inOut"],[.98,"svTrophy","inOut"],[1.16,"svHit","in"],[1.5,"svFollow","out"],[2.3,"ready","inOut"]]),contact:1.16,contactPose:"svHit",toss:{catchAt:.25,releaseAt:.66}}};var $s=e=>{let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},jn={lime:$s("#e6e28c"),felt:$s("#d9e05a"),feltDim:$s("#7d8526"),paper:$s("#f5f0e6"),clay:$s("#c96a3f"),claySoft:$s("#e7b797"),forest:$s("#4f8a5c")};function Tp(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var wu=class{constructor(t){this.n=t;this.i=0;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3)}push(t,n,i,a){if(this.i>=this.n)return;let r=this.i*3;this.pos[r]=t,this.pos[r+1]=n,this.pos[r+2]=i,this.col[r]=a[0],this.col[r+1]=a[1],this.col[r+2]=a[2],this.i++}done(t){let n=Math.max(1,this.i);for(;this.i<this.n;){let i=Math.floor(t()*n)*3;this.push(this.pos[i]+(t()-.5)*.01,this.pos[i+1]+(t()-.5)*.01,this.pos[i+2],[this.col[i],this.col[i+1],this.col[i+2]])}return{pos:this.pos,col:this.col}}};function V2(e){let t=Tp(2),n=new wu(e),i=.42,a=.42,r=.54,s=e*.44,o=e*.2,l=e*.13;for(let d=0;d<s;d++){let m=t()*Math.PI*2,S=1+(t()-.5)*.07;n.push(Math.cos(m)*a*S,i+Math.sin(m)*r*S,(t()-.5)*.06,d%9===0?jn.clay:jn.paper)}let c=8,h=10;for(let d=0;d<o;d++)if(t()<.47){let m=-a+(Math.floor(t()*c)+.5)/c*2*a,S=r*Math.sqrt(Math.max(0,1-(m/a)**2));n.push(m,i+(t()*2-1)*S*.97,0,jn.lime)}else{let m=-r+(Math.floor(t()*h)+.5)/h*2*r,S=a*Math.sqrt(Math.max(0,1-(m/r)**2));n.push((t()*2-1)*S*.97,i+m,0,jn.lime)}let p=-Math.PI/2-.85,u=-Math.PI/2+.85;for(let d=0;d<l;d++){let m=t()<.5?p:u,S=t(),g=Math.cos(m)*a,f=i+Math.sin(m)*r,v=Math.sign(g)*.03,b=-.42,_=g+(v-g)*(1-(1-S)**2),M=f+(b-f)*S;n.push(_+(t()-.5)*.03,M,(t()-.5)*.05,jn.paper)}for(;n.i<e;){let d=-.42-t()*.66,m=d<-.6,S=m?.07:.045,g=t()*Math.PI*2;n.push(Math.cos(g)*S*.5,d,Math.sin(g)*S*.5,m?Math.sin(d*70+g)>.4?jn.claySoft:jn.clay:jn.paper)}return n.done(t)}function G2(e,t,n,i,a,r){let s=Tp(i),o=e.getContext("2d"),{width:l,height:c}=e,h=o.getImageData(0,0,l,c).data,p=[];for(let m=0;m<c;m+=1)for(let S=0;S<l;S+=1)h[(m*l+S)*4+3]>140&&p.push(S,m);let u=new wu(t),d=p.length/2;for(let m=0;m<t&&d;m++){let S=Math.floor(s()*d)*2,g=p[S]+s()-.5,f=p[S+1]+s()-.5,v=(Math.floor(p[S+1])*l+Math.floor(p[S]))*4,b=r?r(h[v],h[v+1],h[v+2]):[h[v]/255,h[v+1]/255,h[v+2]/255];u.push((g-l/2)*n,-(f-c/2)*n,(s()-.5)*a,b)}return u.done(s)}function X2(e){let t=document.createElement("canvas");t.width=300,t.height=400;let n=t.getContext("2d"),i={shirt:"#f5f0e6",shade:"#d9d2c2",bottom:"#c96a3f",bottomShade:"#a9552f",accent:"#e6e28c",head:"cap",hair:"#e7b797",skin:"#e7b797",skinShade:"#d39b78",female:!1};return F2(n,Mp(or.svHit),{x:130,y:382,s:150,f:1,kit:i,time:0}),G2(t,e,.0058,3,.12)}function r_(e,t=!0){let n=Tp(4),i=new wu(e),a=2.7/23.77,r=10.97/2*a,s=8.23/2*a,o=23.77/2*a,l=6.4*a,c=[[-r,-o,r,-o],[-r,o,r,o],[-r,-o,-r,o],[r,-o,r,o],[-s,-o,-s,o],[s,-o,s,o],[-s,-l,s,-l],[-s,l,s,l],[0,-l,0,l],[0,-o,0,-o+.15*a*2],[0,o,0,o-.15*a*2]],h=c.map(([b,_,M,T])=>Math.hypot(M-b,T-_)),p=h.reduce((b,_)=>b+_,0),u=e*(t?.64:.74);for(let b=0;b<u;b++){let _=n()*p,M=0;for(;_>h[M]&&M<h.length-1;)_-=h[M++];let[T,w,x,A]=c[M],N=_/h[M];i.push(T+(x-T)*N+(n()-.5)*.012,0,w+(A-w)*N+(n()-.5)*.012,jn.paper)}let d=e*(t?.2:.23),m=r+.914*a;for(let b=0;b<d;b++){let _=(n()*2-1)*m,M=(.914+(1.07-.914)*(Math.abs(_)/m)**2)*a*1.6,T=n()<.5,w=T?Math.round(n()*M/.03)*.03:n()*M,x=T?_:Math.round(_/.03)*.03;i.push(x,Math.min(w,M),0,n()<.15?jn.paper:[.75,.78,.7])}for(let b=0;b<e*.03;b++){let _=(n()*2-1)*m;i.push(_,(.914+(1.07-.914)*(Math.abs(_)/m)**2)*a*1.6,0,jn.paper)}for(;t&&i.i<e;){let b=(n()*2-1)*(r+.35),_=(n()*2-1)*(o+.4);i.push(b,-.005,_,n()<.5?jn.clay:jn.claySoft)}let S=i.done(n),g=.62,f=Math.cos(g),v=Math.sin(g);for(let b=0;b<e;b++){let _=S.pos[b*3+1],M=S.pos[b*3+2];S.pos[b*3+1]=_*f-M*v-.05,S.pos[b*3+2]=_*v+M*f}return S}async function W2(e,t){try{await document.fonts.load('italic 400 220px "Newsreader Variable"')}catch{}let n=document.createElement("canvas");n.width=900,n.height=300;let i=n.getContext("2d");i.fillStyle="#f5f0e6",i.font='italic 400 230px "Newsreader Variable", Georgia, serif',i.textAlign="center",i.textBaseline="middle",i.fillText(t,450,150);let a=Tp(5);return G2(n,e,.0034,6,.06,()=>a()<.12?jn.lime:jn.paper)}var Y2=Pt($t()),BU=["#e6e28c","#f5f0e6","#e5875a","#c9d34f"],Ep=Math.PI*2,oa=7,Hn=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function FU(e,t,n){return e>.7&&t<.75&&n<.65&&e-t>.12?2:n<.62&&t>.7?e>.8?0:3:1}var kU=`
  attribute vec2 aNoise;               // loose state, 0..1 of the box
  attribute float aBallType;           // 0 surface, 1 seam, 2 silhouette (does not turn)
  attribute vec3 aT0; attribute vec3 aT1; attribute vec3 aT2; attribute vec3 aT3; attribute vec3 aT4;
  attribute float aCol;                // colour index per state, packed base 4
  attribute vec4 aDot;                 // radius px, phase, drift speed, twinkle speed
  attribute vec2 aStag;                // morph stagger, halo flag
  uniform float uMorph, uTime, uDpr, uRepelR, uRepelA, uLast, uAlpha, uScroll, uParallax, uSpin;
  uniform float uStateA[${oa}]; // per state opacity
  uniform vec3 uPlace[${oa}];  // per state: centre x, centre y, scale (px per unit)
  uniform float uKind[${oa}];  // 0 loose, 1 ball, 2 static shape, 3 black hole
  uniform float uSlot[${oa}];  // which aT slot a static state uses
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
      // the loose starfield; with parallax it scrolls past at a speed set by each dot's depth
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
    // into a black hole: pulled in ever faster, spiralling round the centre
    vec2 pos = mix(pa, pb, sinkB > .5 ? f * f : f);
    if (sinkB > .5) {
      float ang = f * f * 5.;
      vec2 d = pos - pb;
      pos = pb + vec2(d.x * cos(ang) - d.y * sin(ang), d.x * sin(ang) + d.y * cos(ang));
    }
    // loose dots wander, shaped dots only breathe
    float loose = halo > .5 ? 1. : 1. - clamp(uMorph, 0., 1.);
    float wob = uTime * aDot.z + aDot.y, amp = (3. + 12. * loose) * (sinkB > .5 ? 1. - f : 1.);
    pos += vec2(cos(wob), sin(wob * 1.27 + aDot.y)) * amp;
    // the cursor clears a small round space: dots slide out of the way and drift back
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
`,HU=`
  varying vec3 vCol; varying float vA;
  void main(){
    float d = length(gl_PointCoord - .5) * 2.;
    float a = vA * (1. - smoothstep(.6, 1., d));
    if (a < .01) discard;
    gl_FragColor = vec4(vCol * a, a);
  }
`,VU=e=>new Z(parseInt(e.slice(1,3),16)/255,parseInt(e.slice(3,5),16)/255,parseInt(e.slice(5,7),16)/255),GU={x:.66,y:.52,sw:.2,sh:.3},XU={x:.5,y:.36,sw:.36,sh:.3};function q2({shapes:e,stage:t,onFrame:n,wide:i=GU,narrow:a=XU,places:r,ballSpin:s=18e-5,count:o=[7e3,3e3],loop:l=!1,palette:c=BU,blend:h="add",alpha:p=1,halo:u=.07,parallax:d=0,className:m}){let S=(0,Bl.useRef)(null),g=(0,Bl.useRef)({stage:t,onFrame:n});g.current={stage:t,onFrame:n};let f=(0,Bl.useRef)({shapes:e,wide:i,narrow:a,places:r,ballSpin:s,count:o,loop:l,palette:c,blend:h,alpha:p,halo:u,parallax:d});return(0,Bl.useEffect)(()=>{let v=S.current,{shapes:b,wide:_,narrow:M,places:T,ballSpin:w,count:x,loop:A,palette:N,blend:L,alpha:D,halo:I,parallax:C}=f.current,U=matchMedia("(prefers-reduced-motion: reduce)").matches,H=Math.min(oa,b.length+1),F=!1,V=0,z=!1,O=new Ol({alpha:!0,antialias:!1,powerPreference:"high-performance"});O.setClearColor(0,0),v.appendChild(O.domElement);let Y=new Xs,lt=new Ys,rt=new Array(oa).fill(0),Ot=new Array(oa).fill(0),bt={uMorph:{value:0},uTime:{value:0},uDpr:{value:1},uLast:{value:H-1},uKind:{value:rt},uSlot:{value:Ot},uRes:{value:new Wt(1,1)},uMouse:{value:new Wt(-1e4,-1e4)},uPlace:{value:Array.from({length:oa},()=>new Z)},uAlpha:{value:D},uScroll:{value:0},uParallax:{value:C},uSpin:{value:w},uStateA:{value:Array.from({length:oa},(Nt,P)=>P===0?1:T?.[P-1]?.alpha??1)},uRepelR:{value:70},uRepelA:{value:0},uPal:{value:N.map(VU)}},Bt=new Nn({vertexShader:kU,fragmentShader:HU,uniforms:bt,transparent:!0,depthTest:!1,depthWrite:!1,blending:Rd,blendSrc:fu,blendDst:L==="add"?fu:du}),J=new Ai,at=async()=>{let Nt=innerWidth<=768?x[1]:x[0],P=new Float32Array(Nt*2),le=new Float32Array(Nt*3),zt=new Float32Array(Nt),R=new Float32Array(Nt*4),y=new Float32Array(Nt*2),G=new Float32Array(Nt),q=new Uint8Array(Nt),Q=.66,ct=.34,ft=2*Math.sqrt(Q*ct),$=.85;for(let j=0;j<Nt;j++){let ut=Hn(j,20);q[j]=ut<.45?0:ut<.75?1:ut<.9?2:3,R.set([.75+Hn(j,21)*1.35,Hn(j,22)*Ep,26e-5+Hn(j,23)*16e-5,7e-4+Hn(j,24)*8e-4],j*4),y.set([Hn(j,8)*.25,Hn(j,30)<I?1:0],j*2),P.set([Hn(j,1),Hn(j,2)],j*2);let Et=Hn(j,40);if(Et<.3){let xt=Hn(j,41)*Ep,Ut=$+(Hn(j,42)-.5)*.03;le.set([(Q*Math.cos(xt)+ct*Math.cos(3*xt))*Ut,(Q*Math.sin(xt)-ct*Math.sin(3*xt))*Ut,ft*Math.sin(2*xt)*Ut],j*3),zt[j]=1}else if(Et<.62){let xt=Hn(j,43)*Ep,Ut=$*(1+(Hn(j,44)-.5)*.04);le.set([Math.cos(xt)*Ut,Math.sin(xt)*Ut,0],j*3),zt[j]=2}else{let xt=Hn(j,45)*2-1,Ut=Hn(j,46)*Ep,k=Math.sqrt(1-xt*xt);le.set([k*Math.cos(Ut)*$,xt*$,k*Math.sin(Ut)*$],j*3),zt[j]=0}}let tt=[],ht=[];for(let j of b.slice(0,H-1)){if(j==="ball"||j==="blackhole"){ht.push(j);continue}let ut=j==="racket"?V2(Nt):j==="player"?X2(Nt):j==="court"?r_(Nt):j==="courtLines"?r_(Nt,!1):await W2(Nt,j.word);tt.push(ut),ht.push(ut)}if(F)return;ht.forEach((j,ut)=>{rt[ut+1]=j==="ball"?1:j==="blackhole"?3:2,Ot[ut+1]=typeof j=="string"?0:tt.indexOf(j)});for(let j=0;j<Nt;j++){let ut=zt[j]===1?1:q[j]===2?3:q[j]===1?0:q[j],Et=q[j],xt=4;for(let Ut of ht)Et+=(Ut==="ball"?ut:Ut==="blackhole"?q[j]:FU(Ut.col[j*3],Ut.col[j*3+1],Ut.col[j*3+2]))*xt,xt*=4;G[j]=Et}J.setAttribute("position",new an(le,3)),J.setAttribute("aBallType",new an(zt,1)),J.setAttribute("aNoise",new an(P,2));for(let j=0;j<5;j++)J.setAttribute("aT"+j,new an(tt[j]?.pos??new Float32Array(Nt*3),3));J.setAttribute("aCol",new an(G,1)),J.setAttribute("aDot",new an(R,4)),J.setAttribute("aStag",new an(y,2));let Ct=new su(J,Bt);Ct.frustumCulled=!1,Y.add(Ct),it(),V=requestAnimationFrame(xe)},it=()=>{let Nt=v.clientWidth,P=v.clientHeight;if(!Nt||!P)return;let le=Math.min(devicePixelRatio||1,2);O.setPixelRatio(le),O.setSize(Nt,P,!1),bt.uDpr.value=le,bt.uRes.value.set(Nt,P);for(let zt=1;zt<oa;zt++){let R=T?.[zt-1],y=Nt>900?R?.wide??_:R?.narrow??M;Tt[zt]=y,bt.uPlace.value[zt].set(Nt*y.x,y.py??P*y.y,Math.min(Nt*y.sw,P*y.sh))}ot(),bt.uRepelR.value=Math.max(56,Math.min(innerWidth,innerHeight)*.11)},Tt=[];function ot(){for(let Nt=1;Nt<oa;Nt++){let P=Tt[Nt]?.follow,le=P?document.querySelector(P):null;if(!le)continue;let zt=le.getBoundingClientRect(),R=v.getBoundingClientRect(),y=parseFloat(getComputedStyle(le).marginTop)||0;bt.uPlace.value[Nt].x=zt.left-R.left+zt.width/2,bt.uPlace.value[Nt].y=zt.top-R.top-y/2}}let St=new ResizeObserver(it);St.observe(v);let Kt=0,Vt=0,Zt=0,te=-1e4,It=-1e4,qt=0,ue=Nt=>{let P=v.getBoundingClientRect(),le=Nt.clientX-P.left,zt=Nt.clientY-P.top,R=le>=0&&zt>=0&&le<=P.width&&zt<=P.height;te=R?le:-1e4,It=R?zt:-1e4};addEventListener("pointermove",ue,{passive:!0}),addEventListener("pointerdown",ue,{passive:!0});let Te=new IntersectionObserver(([Nt])=>z=Nt.isIntersecting);Te.observe(v);function xe(Nt){V=requestAnimationFrame(xe);let P=Zt?Math.min(Nt-Zt,1e3):16.7;if(Zt=Nt,!z||document.documentElement.classList.contains("lab-loading"))return;let le=g.current.stage();Vt+=(le-Vt)*Math.min(1,P*(U?1:.0022)),Kt=A&&Vt>1?1+(Vt-1)%(H-2):Math.min(H-1,Vt);let zt=bt.uMouse.value,R=te>-1e3;R&&(qt<.01?zt.set(te,It):zt.lerp(new Wt(te,It),Math.min(1,P*.012))),qt+=((R?1:0)-qt)*Math.min(1,P*.004),bt.uRepelA.value=U?0:42*qt,bt.uMorph.value=Kt,bt.uScroll.value=scrollY,ot(),bt.uTime.value=U?0:Nt,O.render(Y,lt),g.current.onFrame?.(Kt)}return at(),()=>{F=!0,cancelAnimationFrame(V),Te.disconnect(),St.disconnect(),removeEventListener("pointermove",ue),removeEventListener("pointerdown",ue),J.dispose(),Bt.dispose(),O.dispose(),O.domElement.remove()}},[]),(0,Y2.jsx)("div",{ref:S,className:m??"dotfield","aria-hidden":!0})}var wp=Pt($t());function Ze({n:e,name:t,dark:n=!1}){return(0,wp.jsxs)("span",{className:`lab-tag${n?" lab-tag--dark":""}`,children:[(0,wp.jsx)("b",{children:e})," ",t]})}var yn=Pt($t()),Z2=[{kicker:"1996 \xF3ta",title:"Itt pattog a labda.",text:"Az \xFAjszegedi Gell\xE9rt 1996-ban nyitott. Az\xF3ta magyar bajnoks\xE1got, Davis Kup\xE1t \xE9s Fed Kup\xE1t is l\xE1tott."},{kicker:"\xDCt\u0151k\xF6lcs\xF6nz\xE9s",title:"\xDCt\u0151t mi adunk.",text:"\xDCt\u0151 a recepci\xF3n k\xF6lcs\xF6n\xF6zhet\u0151, 600 Ft / db. Az els\u0151 \xF3r\xE1hoz nem kell saj\xE1t felszerel\xE9s."},{kicker:"Tenisziskola",title:"5 \xE9ves kort\xF3l.",text:"Tenisziskola 5\u201317 \xE9veseknek, \xE9s feln\u0151tteknek is."},{kicker:"P\xE1ly\xE1k",title:"12 salakp\xE1lya.",text:"Szabadt\xE9ri salakp\xE1ly\xE1k a ny\xE1ri szezonban, ebb\u0151l 5 vil\xE1g\xEDt\xE1ssal, este 10 \xF3r\xE1ig."},{kicker:"Szeged, Derkovits fasor 113.",title:"Gell\xE9rt.",text:"P\xE1lyafoglal\xE1s telefonon, a recepci\xF3n: +36 70 686 5124."}],o_=e=>e<0?0:e>1?1:e,WU=(e,t,n)=>{let i=o_((n-e)/(t-e));return i*i*(3-2*i)},s_=["ball","racket","player","court",{word:"Gell\xE9rt"}];function K2(){let e=(0,Au.useRef)(null),t=(0,Au.useRef)([]),n=(0,Au.useRef)(null),i=(0,Au.useRef)(null);return(0,yn.jsx)("section",{ref:e,className:"lab-flow","aria-label":"Bevezet\u0151",children:(0,yn.jsxs)("div",{className:"lab-flow__stage",children:[(0,yn.jsx)(q2,{shapes:s_,stage:()=>{let s=e.current;if(!s)return 0;let o=s.getBoundingClientRect(),l=o_(-o.top/(o.height-innerHeight))*s_.length,c=Math.floor(l);return Math.min(s_.length,c+WU(.3,1,l-c))},onFrame:s=>{let o=Math.round(s);if(t.current.forEach((l,c)=>{if(!l)return;let h=c+1===o;l.style.opacity=h?"1":"0",l.style.transform=`translateY(${h?0:c+1<o?-16:16}px)`}),n.current){let l=o_(1-s*1.6);n.current.style.opacity=String(l),n.current.style.transform=`translateY(${(1-l)*-20}px)`}i.current?.querySelectorAll("span").forEach((l,c)=>l.classList.toggle("on",c+1===o))},className:"lab-flow__canvas"}),(0,yn.jsxs)("div",{className:"container lab-flow__copy",children:[(0,yn.jsxs)("div",{ref:n,className:"lab-flow__intro",children:[(0,yn.jsx)("p",{className:"eyebrow eyebrow--light",children:"Labor \xB7 tizenk\xE9t \xF6tlet \xE9lesben"}),(0,yn.jsxs)("h1",{className:"h1",children:["A p\xE1lya, ",(0,yn.jsx)("em",{children:"ahogy m\xE9g nem l\xE1ttad."})]}),(0,yn.jsx)("p",{className:"lead",children:"G\xF6rgess lassan. Minden, ami ezen az oldalon mozog, a Gell\xE9rt val\xF3di adataib\xF3l \xE9s fot\xF3ib\xF3l \xE9p\xFCl."})]}),Z2.map((s,o)=>(0,yn.jsxs)("div",{ref:l=>{t.current[o]=l},className:"lab-flow__cap",style:{opacity:0},children:[(0,yn.jsx)("p",{className:"eyebrow eyebrow--light",children:s.kicker}),(0,yn.jsx)("h2",{className:"h1",children:s.title}),(0,yn.jsx)("p",{className:"lead",children:s.text})]},o))]}),(0,yn.jsx)("div",{ref:i,className:"lab-flow__dots","aria-hidden":!0,children:Z2.map((s,o)=>(0,yn.jsx)("span",{},o))}),(0,yn.jsx)(Ze,{n:"86",name:"Dot field \xB7 after thedent.ai",dark:!0})]})})}var os=Pt(dn());var fn=Pt($t()),qU=`
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
`;function J2(){let e=(0,os.useRef)(null),t=(0,os.useRef)(null),n=(0,os.useRef)(null),i=(0,os.useRef)(null),a=(0,os.useRef)(null);return(0,os.useEffect)(()=>{let r=t.current,s=e.current,o=matchMedia("(prefers-reduced-motion: reduce)").matches,l=new Ol({antialias:!1});l.setPixelRatio(Math.min(devicePixelRatio,1.75)),r.appendChild(l.domElement);let c=new Xs,h=new Zs(-1,1,1,-1,0,1),p=L=>new uu().load(L,D=>{D.colorSpace=sa}),u=p("img/hero-serve.jpg");u.minFilter=cn;let d=p("assets/hero-serve-depth.webp"),m={uImg:{value:u},uDepth:{value:d},uOff:{value:new Wt},uRes:{value:new Wt(1,1)},uImgRes:{value:new Wt(1920,1064)},uFocus:{value:.56},uBlur:{value:2.2},uTime:{value:0}},S=new Nn({uniforms:m,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:qU});c.add(new hi(new qs(2,2),S)),l.outputColorSpace=Gs;let g=()=>{let L=r.clientWidth,D=r.clientHeight;l.setSize(L,D,!1),m.uRes.value.set(L,D)};g(),addEventListener("resize",g);let f=new Wt,v=new Wt,b=!1,_=L=>{let D=r.getBoundingClientRect();v.set((L.clientX-D.left)/D.width*2-1,(L.clientY-D.top)/D.height*2-1),b=!0},M=()=>b=!1;s.addEventListener("pointermove",_),s.addEventListener("pointerleave",M);let T=!1,w=new IntersectionObserver(([L])=>T=L.isIntersecting);w.observe(s);let x=0,A=performance.now(),N=L=>{if(x=requestAnimationFrame(N),!T)return;let D=(L-A)/1e3;b||v.set(Math.sin(D*.35)*.55,Math.sin(D*.23)*.25),f.lerp(v,o?1:.06),m.uOff.value.copy(o?new Wt:f),m.uTime.value=D;let I=s.getBoundingClientRect(),C=Math.min(1,Math.max(0,-I.top/(I.height-innerHeight))),U=Math.min(1,Math.max(0,(C-.3)/.4)),H=U*U*(3-2*U);m.uFocus.value=.56-H*.5,n.current&&(n.current.style.opacity=String(1-H)),i.current&&(i.current.style.opacity=String(H)),a.current&&(a.current.style.setProperty("--k",String(H)),a.current.querySelector("b").textContent=(1.2+H*4.6).toFixed(1).replace(".",",")+" m"),l.render(c,h)};return x=requestAnimationFrame(N),()=>{cancelAnimationFrame(x),w.disconnect(),removeEventListener("resize",g),s.removeEventListener("pointermove",_),s.removeEventListener("pointerleave",M),S.dispose(),u.dispose(),d.dispose(),l.dispose(),l.domElement.remove()}},[]),(0,fn.jsx)("section",{ref:e,className:"lab-photo","aria-label":"\xC9l\u0151 fot\xF3",children:(0,fn.jsxs)("div",{className:"lab-photo__stage",children:[(0,fn.jsx)("div",{ref:t,className:"lab-photo__canvas",role:"img","aria-label":"K\xE9t j\xE1t\xE9kos a salakp\xE1ly\xE1n, az el\u0151t\xE9rben egy l\xE1ny feldobja a labd\xE1t"}),(0,fn.jsxs)("div",{className:"container lab-photo__copy",children:[(0,fn.jsxs)("div",{ref:n,className:"lab-photo__cap",children:[(0,fn.jsx)("p",{className:"eyebrow eyebrow--light",children:"Az els\u0151 labda"}),(0,fn.jsxs)("h2",{className:"h1",children:["Minden \xF3ra egy ",(0,fn.jsx)("em",{children:"feldob\xE1ssal"})," kezd\u0151dik."]})]}),(0,fn.jsxs)("div",{ref:i,className:"lab-photo__cap",style:{opacity:0},children:[(0,fn.jsx)("p",{className:"eyebrow eyebrow--light",children:"A t\xFAloldalon"}),(0,fn.jsxs)("h2",{className:"h1",children:["\u2026\xE9s a h\xE1l\xF3 m\xF6g\xF6tt ",(0,fn.jsx)("em",{children:"mindig v\xE1r valaki."})]})]})]}),(0,fn.jsxs)("div",{ref:a,className:"lab-photo__focus","aria-hidden":!0,children:[(0,fn.jsx)("span",{children:"F\xF3kusz"}),(0,fn.jsx)("i",{}),(0,fn.jsx)("b",{children:"1,2 m"})]}),(0,fn.jsx)(Ze,{n:"21",name:"Living photograph",dark:!0})]})})}var Ap=Pt(dn()),Cp=Pt($t());function j2({tone:e="paper",bg:t,children:n}){let i=(0,Ap.useRef)(null);return(0,Ap.useEffect)(()=>{let a=i.current,r=a.getContext("2d"),s=matchMedia("(prefers-reduced-motion: reduce)").matches,o=72,l=new Float32Array(o),c=new Float32Array(o),h=0,p=0,u=1,d=!1,m=scrollY,S=0,g=-1,f=-1,v=()=>{u=Math.min(devicePixelRatio||1,2),h=a.clientWidth,p=a.clientHeight,a.width=h*u,a.height=p*u};v(),addEventListener("resize",v);let b=new IntersectionObserver(([N])=>d=N.isIntersecting);b.observe(a);let _=N=>{let L=a.getBoundingClientRect();g=N.clientX-L.left,f=N.clientY-L.top},M=()=>g=f=-1;a.addEventListener("pointermove",_),a.addEventListener("pointerleave",M);let T=e==="dark",w=T?"rgba(245,240,230,.34)":"rgba(21,36,26,.42)",x=T?"#e6e28c":"#21492b",A=()=>{S=requestAnimationFrame(A);let N=scrollY-m;if(m=scrollY,!d)return;let L=s?0:Math.max(-14,Math.min(14,N*.06));for(let O=1;O<o-1;O++){let Y=Math.sin(O/(o-1)*Math.PI),lt=(l[O-1]+l[O+1]-2*l[O])*.5-l[O]*.012+L*Y*.08;if(g>=0){let rt=O/(o-1)*h,Ot=(rt-g)/60;lt+=Math.exp(-Ot*Ot)*(f<p*.5?.9:.4)}c[O]=(c[O]+lt)*.92}for(let O=1;O<o-1;O++)l[O]+=c[O];r.setTransform(u,0,0,u,0,0),r.clearRect(0,0,h,p);let D=22,I=h-22,C=26,U=p-16,H=U-C,F=O=>{let Y=(O-D)/(I-D),lt=Y*(o-1),rt=Math.max(0,Math.min(o-2,Math.floor(lt))),Ot=lt-rt;return 6*Math.sin(Y*Math.PI)+l[rt]+(l[rt+1]-l[rt])*Ot};r.fillStyle=T?"rgba(0,0,0,.22)":"rgba(21,36,26,.07)",r.fillRect(D,U+6,I-D,4),r.strokeStyle=w,r.lineWidth=.8,r.beginPath();let V=9;for(let O=D;O<=I;O+=V)for(let Y=0;Y<=1;Y+=.05){let lt=C+F(O)*(1-Y)+Y*H+Math.sin(O*.02)*0;Y===0?r.moveTo(O,lt):r.lineTo(O+F(O)*.02*Y,lt)}for(let O=V/H;O<1;O+=V/H)for(let Y=D;Y<=I;Y+=12){let lt=C+F(Y)*(1-O)+O*H;Y===D?r.moveTo(Y,lt):r.lineTo(Y,lt)}r.stroke(),r.strokeStyle=w,r.lineWidth=1.6,r.beginPath(),r.moveTo(D,U),r.lineTo(I,U),r.stroke();let z=(D+I)/2;r.fillStyle=T?"#f5f0e6":"#fbf8f2",r.beginPath(),r.moveTo(z-5,C+F(z)),r.lineTo(z+5,C+F(z)),r.lineTo(z+5,U),r.lineTo(z-5,U),r.fill(),r.strokeStyle="rgba(21,36,26,.18)",r.lineWidth=1,r.stroke(),r.lineCap="butt",r.strokeStyle="rgba(21,36,26,.16)",r.lineWidth=9,r.beginPath();for(let O=D;O<=I;O+=6)O===D?r.moveTo(O,C+F(O)+2):r.lineTo(O,C+F(O)+2);r.stroke(),r.strokeStyle="#fbf8f2",r.lineWidth=8,r.beginPath();for(let O=D;O<=I;O+=6)O===D?r.moveTo(O,C+F(O)):r.lineTo(O,C+F(O));r.stroke(),r.fillStyle=x;for(let O of[D-6,I+1])r.beginPath(),r.roundRect(O,C-10,5,U-C+18,2),r.fill(),r.beginPath(),r.arc(O+2.5,C-10,4,0,Math.PI*2),r.fill()};return S=requestAnimationFrame(A),()=>{cancelAnimationFrame(S),b.disconnect(),removeEventListener("resize",v),a.removeEventListener("pointermove",_),a.removeEventListener("pointerleave",M)}},[e]),(0,Cp.jsxs)("div",{className:`net-divider net-divider--${e}`,style:t?{background:t}:void 0,children:[(0,Cp.jsx)("canvas",{ref:i,"aria-hidden":!0}),n]})}var l_=Pt($t());function c_({tone:e="paper",tag:t=!0}){return(0,l_.jsx)(j2,{tone:e,children:t&&(0,l_.jsx)(Ze,{n:"12",name:"Net divider",dark:e==="dark"})})}var Cu=Pt(dn());var bn={name:"Gell\xE9rt Szabadid\u0151k\xF6zpont",short:"Gell\xE9rt Tenisz",url:"https://gellert.szeged.hu",phone:"+36 70 686 5124",phoneHref:"tel:+36706865124",email:"szabadidokozpont@gellertesfiai.hu",address:{street:"Derkovits fasor 113.",zip:"6726",city:"Szeged",district:"\xDAjszeged"},mapsUrl:"https://maps.app.goo.gl/2Promqf6wFUueNJ78",mapsEmbed:"https://www.google.com/maps?q=Gell%C3%A9rt+Szabadid%C5%91k%C3%B6zpont,+Szeged,+Derkovits+fasor+113&output=embed",hours:{courts:{label:"P\xE1ly\xE1k",days:"H\xE9tf\u0151 \u2013 Vas\xE1rnap",time:"07:00 \u2013 22:00"},reception:{label:"Recepci\xF3",days:"H\xE9tf\u0151 \u2013 Vas\xE1rnap",time:"08:00 \u2013 20:00"}},social:{facebook:"https://www.facebook.com/gellertszabadidokozpont/",instagram:"https://www.instagram.com/gellert_szabadidokozpont/",instagramTennis:"https://www.instagram.com/gellerttenisz",youtube:"https://www.youtube.com/channel/UCcza_Cp5GwkgBM16M12W9XQ"},club:{name:"Gell\xE9rt Szabadid\u0151k\xF6zpont Sportegyes\xFClet",shortName:"Gell\xE9rt SE",url:"https://gellertse.hu/",headCoach:"Kiss Gy\xF6rgy",headCoachRole:"a tenisz szakoszt\xE1ly vezet\u0151je",headCoachPhone:"+36 70 457 9133",headCoachPhoneHref:"tel:+36704579133"},operator:{name:"Gell\xE9rt \xE9s Fiai Consulting Kft.",address:"6724 Szeged, Kossuth Lajos sgt. 109.",phone:"+36 62 556 700",email:"info@gellertesfiai.hu",taxId:"11093565-2-06"},legacy:{legal:"https://gellert.szeged.hu/jogi-nyilatkozat/",grants:"https://gellert.szeged.hu/palyazatok/",privacy:"https://gellert.szeged.hu/adatvedelmi-es-felhasznalasi-feltetelek/",virtualTour:"https://magicview.hu/virtualtour/gellert"}};var u_={label:"2025-\xF6s ny\xE1ri szezon",range:"2025. \xE1prilis 14. \u2013 okt\xF3ber 19.",source:"/docs/gellert-arjegyzek-2025-nyar.jpg"},Q2={weekday:[{time:"07:00 \u2013 14:00",season:"2 000",ten:"24 000",single:"3 200"},{time:"14:00 \u2013 19:00",season:"2 900",ten:"35 000",single:"4 400"},{time:"19:00 \u2013 21:00",season:"3 400",ten:"40 000",single:"5 200"}],weekend:[{time:"07:00 \u2013 19:00",season:"2 200",ten:"24 000",single:"3 200"},{time:"19:00 \u2013 21:00",season:"2 500",ten:"30 000",single:"4 000"}],covered:[{time:"07:00 \u2013 21:00",single:"4 800"}]};var Oe=Pt($t());function $2(){let e=(0,Cu.useRef)(null),t=(0,Cu.useRef)(null);return(0,Cu.useEffect)(()=>{let n=e.current,i=n.getContext("2d"),a=al.racket,r=a.length,s=a.map(T=>{let w=new Image;return w.decoding="async",w.src=T,w}),o=matchMedia("(prefers-reduced-motion: reduce)").matches,l=0,c=o?0:.12,h=!1,p=0,u=scrollY,d=!1,m=0,S=-1,g=()=>{let T=Math.min(devicePixelRatio||1,2);n.width=n.clientWidth*T,n.height=n.clientHeight*T,S=-1};g(),addEventListener("resize",g);let f=new IntersectionObserver(([T])=>d=T.isIntersecting);f.observe(n);let v=T=>{h=!0,p=T.clientX,n.setPointerCapture(T.pointerId),n.classList.add("is-drag")},b=T=>{if(!h)return;let w=T.clientX-p;p=T.clientX,c=w*.6,l+=w*.6},_=()=>{h=!1,n.classList.remove("is-drag")};n.addEventListener("pointerdown",v),n.addEventListener("pointermove",b),n.addEventListener("pointerup",_),n.addEventListener("pointercancel",_);let M=()=>{m=requestAnimationFrame(M);let T=scrollY-u;if(u=scrollY,!d)return;h||(c+=((o?0:.18)-c)*.02,l+=c+(o?0:T*.12));let w=(Math.round(l/360*r)%r+r)%r;if(t.current&&t.current.style.setProperty("--a",`${(l%360+360)%360}deg`),w===S||!s[w].complete||!s[w].naturalWidth)return;S=w;let x=s[w],A=Math.min(n.width/x.naturalWidth,n.height/x.naturalHeight),N=x.naturalWidth*A,L=x.naturalHeight*A;i.clearRect(0,0,n.width,n.height),i.drawImage(x,(n.width-N)/2,(n.height-L)/2,N,L)};return m=requestAnimationFrame(M),()=>{cancelAnimationFrame(m),f.disconnect(),removeEventListener("resize",g)}},[]),(0,Oe.jsxs)("section",{className:"section lab-racket","aria-labelledby":"lab-racket-title",children:[(0,Oe.jsxs)("div",{className:"container lab-racket__grid",children:[(0,Oe.jsxs)("div",{className:"lab-racket__copy",children:[(0,Oe.jsx)("p",{className:"eyebrow",children:"Felszerel\xE9s"}),(0,Oe.jsxs)("h2",{id:"lab-racket-title",className:"h2",children:["Nem kell saj\xE1t \xFCt\u0151. ",(0,Oe.jsx)("em",{children:"Itt van egy."})]}),(0,Oe.jsx)("p",{className:"lead",children:"\xDCt\u0151 a recepci\xF3n k\xF6lcs\xF6n\xF6zhet\u0151, labda ugyanott v\xE1s\xE1rolhat\xF3. Az els\u0151 \xF3r\xE1hoz nem kell saj\xE1t felszerel\xE9s."}),(0,Oe.jsxs)("dl",{className:"lab-specs",children:[(0,Oe.jsxs)("div",{children:[(0,Oe.jsx)("dt",{children:"\xDCt\u0151k\xF6lcs\xF6nz\xE9s"}),(0,Oe.jsx)("dd",{children:"600 Ft / db"})]}),(0,Oe.jsxs)("div",{children:[(0,Oe.jsx)("dt",{children:"Labda"}),(0,Oe.jsx)("dd",{children:"a recepci\xF3n"})]}),(0,Oe.jsxs)("div",{children:[(0,Oe.jsx)("dt",{children:"Recepci\xF3"}),(0,Oe.jsx)("dd",{children:bn.hours.reception.time.replace(/ /g,"")})]})]})]}),(0,Oe.jsxs)("div",{className:"lab-racket__stage",children:[(0,Oe.jsx)("canvas",{ref:e,className:"lab-racket__canvas","aria-label":"Forgathat\xF3 tenisz\xFCt\u0151. H\xFAzd oldalra a forgat\xE1shoz.",role:"img"}),(0,Oe.jsx)("div",{className:"lab-racket__floor","aria-hidden":!0}),(0,Oe.jsxs)("div",{ref:t,className:"lab-racket__dial","aria-hidden":!0,children:[(0,Oe.jsx)("i",{}),(0,Oe.jsx)("span",{children:"H\xFAzd a forgat\xE1shoz"})]})]})]}),(0,Oe.jsx)(Ze,{n:"01",name:"Racket turntable"})]})}var ls=Pt(dn());var tT=[{top:[.7577,.4807],dyn:[.7552,.509],base:[.7501,.5654],drain:[.7444,.6294],soil:[.7398,.6813]},{top:[.7577,.4802],dyn:[.7552,.5085],base:[.7501,.5652],drain:[.7444,.6293],soil:[.7398,.6813]},{top:[.7579,.4786],dyn:[.7553,.5074],base:[.7502,.5644],drain:[.7445,.6289],soil:[.7398,.6813]},{top:[.7581,.4759],dyn:[.7555,.5054],base:[.7503,.5632],drain:[.7445,.6283],soil:[.7398,.6813]},{top:[.7584,.4723],dyn:[.7557,.5028],base:[.7505,.5615],drain:[.7446,.6275],soil:[.7398,.6813]},{top:[.7588,.4678],dyn:[.756,.4995],base:[.7507,.5594],drain:[.7447,.6265],soil:[.7398,.6813]},{top:[.7593,.4625],dyn:[.7563,.4955],base:[.7509,.5569],drain:[.7448,.6253],soil:[.7398,.6813]},{top:[.7598,.4563],dyn:[.7568,.491],base:[.7511,.554],drain:[.7449,.6239],soil:[.7398,.6813]},{top:[.7605,.4494],dyn:[.7572,.4859],base:[.7514,.5507],drain:[.745,.6224],soil:[.7398,.6813]},{top:[.7611,.4417],dyn:[.7577,.4803],base:[.7517,.5472],drain:[.7452,.6207],soil:[.7398,.6813]},{top:[.7619,.4334],dyn:[.7582,.4743],base:[.7521,.5433],drain:[.7454,.6189],soil:[.7398,.6813]},{top:[.7627,.4245],dyn:[.7588,.4678],base:[.7525,.5392],drain:[.7455,.6169],soil:[.7398,.6813]},{top:[.7635,.415],dyn:[.7594,.4609],base:[.7528,.5348],drain:[.7457,.6148],soil:[.7398,.6813]},{top:[.7644,.4049],dyn:[.7601,.4536],base:[.7533,.5302],drain:[.7459,.6127],soil:[.7398,.6813]},{top:[.7654,.3945],dyn:[.7608,.446],base:[.7537,.5254],drain:[.7461,.6104],soil:[.7398,.6813]},{top:[.7663,.3836],dyn:[.7615,.4381],base:[.7541,.5204],drain:[.7463,.6081],soil:[.7398,.6813]},{top:[.7673,.3723],dyn:[.7622,.43],base:[.7546,.5153],drain:[.7465,.6057],soil:[.7398,.6813]},{top:[.7684,.3608],dyn:[.7629,.4216],base:[.7551,.5101],drain:[.7468,.6032],soil:[.7398,.6813]},{top:[.7694,.3489],dyn:[.7637,.4132],base:[.7555,.5048],drain:[.747,.6007],soil:[.7398,.6813]},{top:[.7705,.337],dyn:[.7645,.4045],base:[.756,.4994],drain:[.7472,.5982],soil:[.7398,.6813]},{top:[.7716,.3248],dyn:[.7652,.3959],base:[.7565,.494],drain:[.7474,.5957],soil:[.7398,.6813]},{top:[.7727,.3126],dyn:[.766,.3872],base:[.757,.4885],drain:[.7476,.5932],soil:[.7398,.6813]},{top:[.7737,.3005],dyn:[.7668,.3785],base:[.7575,.4831],drain:[.7479,.5907],soil:[.7398,.6813]},{top:[.7748,.2883],dyn:[.7676,.3698],base:[.7579,.4778],drain:[.7481,.5882],soil:[.7398,.6813]},{top:[.7759,.2764],dyn:[.7683,.3613],base:[.7584,.4725],drain:[.7483,.5858],soil:[.7398,.6813]},{top:[.7769,.2646],dyn:[.7691,.353],base:[.7589,.4674],drain:[.7485,.5834],soil:[.7398,.6813]},{top:[.778,.2531],dyn:[.7698,.3449],base:[.7593,.4624],drain:[.7487,.5811],soil:[.7398,.6813]},{top:[.779,.2419],dyn:[.7705,.337],base:[.7597,.4575],drain:[.7489,.5788],soil:[.7398,.6813]},{top:[.7799,.2312],dyn:[.7712,.3294],base:[.7602,.4529],drain:[.7491,.5767],soil:[.7398,.6813]},{top:[.7808,.221],dyn:[.7718,.3223],base:[.7605,.4485],drain:[.7493,.5747],soil:[.7398,.6813]},{top:[.7817,.2114],dyn:[.7724,.3155],base:[.7609,.4443],drain:[.7495,.5728],soil:[.7398,.6813]},{top:[.7825,.2024],dyn:[.773,.3092],base:[.7613,.4405],drain:[.7496,.5711],soil:[.7398,.6813]},{top:[.7832,.1942],dyn:[.7735,.3035],base:[.7616,.437],drain:[.7498,.5695],soil:[.7398,.6813]},{top:[.7839,.1869],dyn:[.7739,.2983],base:[.7618,.4339],drain:[.7499,.568],soil:[.7398,.6813]},{top:[.7844,.1804],dyn:[.7743,.2938],base:[.7621,.4311],drain:[.75,.5668],soil:[.7398,.6813]},{top:[.7849,.175],dyn:[.7747,.29],base:[.7623,.4288],drain:[.7501,.5657],soil:[.7398,.6813]},{top:[.7853,.1706],dyn:[.7749,.287],base:[.7625,.427],drain:[.7502,.5649],soil:[.7398,.6813]},{top:[.7856,.1674],dyn:[.7751,.2847],base:[.7626,.4256],drain:[.7502,.5643],soil:[.7398,.6813]},{top:[.7858,.1654],dyn:[.7753,.2833],base:[.7627,.4248],drain:[.7503,.5639],soil:[.7398,.6813]},{top:[.7858,.1647],dyn:[.7753,.2829],base:[.7627,.4245],drain:[.7503,.5638],soil:[.7398,.6813]}];var Un=Pt($t()),eT=[{key:"top",name:"Fed\u0151r\xE9teg",sub:"t\xE9gla\u0151rlem\xE9ny",text:"\xC9getett, finomra \u0151r\xF6lt t\xE9gla. Ett\u0151l v\xF6r\xF6s a p\xE1lya, \xE9s ezen lehet cs\xFAszni."},{key:"dyn",name:"Dinamikus r\xE9teg",sub:"salak \xE9s klinker",text:"Rugalmas, v\xEDz\xE1tereszt\u0151 kever\xE9k. Ett\u0151l puha a p\xE1lya j\xE1r\xE1sa."},{key:"base",name:"Tart\xF3r\xE9teg",sub:"z\xFAzottk\u0151",text:"Teherb\xEDr\xF3 alap, ami egyenletesen tartja a fels\u0151 r\xE9tegeket."},{key:"drain",name:"Sziv\xE1rg\xF3r\xE9teg",sub:"kavics",text:"Elvezeti a lefel\xE9 sziv\xE1rg\xF3 vizet."},{key:"soil",name:"Altalaj",sub:"t\xF6m\xF6r\xEDtett f\xF6ld",text:"Erre \xE9p\xFCl minden m\xE1s."}];function nT(){let e=(0,ls.useRef)(null),t=(0,ls.useRef)(null),n=(0,ls.useRef)(null),i=(0,ls.useRef)([]),a=(0,ls.useRef)(null);return(0,ls.useEffect)(()=>{let r=e.current,s=t.current,o=s.getContext("2d"),l=al.clay.map(f=>{let v=new Image;return v.src=f,v}),c=tT,h=0,p=-1,u=!1,d=()=>{let f=Math.min(devicePixelRatio||1,2);s.width=s.clientWidth*f,s.height=s.clientHeight*f,p=-1};d(),addEventListener("resize",d);let m=new IntersectionObserver(([f])=>u=f.isIntersecting);m.observe(r);let S=0,g=()=>{if(h=requestAnimationFrame(g),!u)return;let f=r.getBoundingClientRect(),v=Math.min(1,Math.max(0,-f.top/(f.height-innerHeight))),b=Math.min(1,v/.75);S+=(b-S)*.12;let _=Math.min(l.length-1,Math.round(S*(l.length-1)));_!==p&&l[_].complete&&l[_].naturalWidth&&(p=_,o.clearRect(0,0,s.width,s.height),o.drawImage(l[_],0,0,s.width,s.height));let M=s.getBoundingClientRect(),T=a.current.getBoundingClientRect(),w=c[Math.min(c.length-1,Math.round(S*(c.length-1)))],x=[];eT.forEach((A,N)=>{let L=i.current[N];if(!L)return;let D=Math.min(1,Math.max(0,(S-.15-N*.12)/.2));L.style.opacity=String(D),L.style.setProperty("--full",S>.8?"1":"0");let[I,C]=w[A.key],U=M.left-T.left+I*M.width,H=M.top-T.top+C*M.height,F=L.getBoundingClientRect(),V=F.left-T.left-10,z=F.top-T.top+14;L.style.setProperty("--y",`${H-14}px`),D>.02&&x.push(`<path d="M${U+6},${H} C${(U+V)/2},${H} ${(U+V)/2},${z} ${V},${z}" opacity="${D}"/><circle cx="${U+6}" cy="${H}" r="3" opacity="${D}"/>`)}),n.current&&(n.current.innerHTML=x.join(""))};return h=requestAnimationFrame(g),()=>{cancelAnimationFrame(h),m.disconnect(),removeEventListener("resize",d)}},[]),(0,Un.jsx)("section",{ref:e,className:"lab-clay","aria-labelledby":"lab-clay-title",children:(0,Un.jsxs)("div",{ref:a,className:"lab-clay__stage",children:[(0,Un.jsxs)("div",{className:"container lab-clay__head",children:[(0,Un.jsx)("p",{className:"eyebrow",children:"A salak"}),(0,Un.jsxs)("h2",{id:"lab-clay-title",className:"h2",children:["Mi van a ",(0,Un.jsx)("em",{children:"l\xE1bad alatt?"})]}),(0,Un.jsx)("p",{className:"lab-clay__note",children:"Egy salakp\xE1lya tipikus r\xE9tegrendje. Illusztr\xE1ci\xF3, a r\xE9tegvastags\xE1gok nem m\xE9retar\xE1nyosak."})]}),(0,Un.jsx)("canvas",{ref:t,className:"lab-clay__canvas",role:"img","aria-label":"Salakp\xE1lya r\xE9tegei sz\xE9tnyitva: fed\u0151r\xE9teg, dinamikus r\xE9teg, tart\xF3r\xE9teg, sziv\xE1rg\xF3r\xE9teg, altalaj"}),(0,Un.jsx)("svg",{ref:n,className:"lab-clay__lines","aria-hidden":!0}),(0,Un.jsx)("div",{className:"lab-clay__labels",children:eT.map((r,s)=>(0,Un.jsxs)("div",{ref:o=>{i.current[s]=o},className:"lab-clay__label",style:{opacity:0},children:[(0,Un.jsx)("b",{children:r.name}),(0,Un.jsx)("span",{children:r.sub}),(0,Un.jsx)("p",{children:r.text})]},r.key))}),(0,Un.jsx)(Ze,{n:"04",name:"Clay specimen"})]})})}var Ru=Pt(dn());var ze=Pt($t());function iT(){let e=(0,Ru.useRef)(null),t=(0,Ru.useRef)(null);(0,Ru.useEffect)(()=>{let i=e.current,a=t.current,r=a.getContext("2d"),s=matchMedia("(prefers-reduced-motion: reduce)").matches,o=0,l=0,c=1,h=0,p=!1,u=null,d,m,S=()=>{let I=document.createElement("canvas");I.width=a.width,I.height=a.height;let C=I.getContext("2d");C.fillStyle="#b65a31",C.fillRect(0,0,I.width,I.height);let U=I.width*I.height/28;for(let H=0;H<U;H++){let F=Math.random()*I.width,V=Math.random()*I.height,z=Math.random();C.fillStyle=z<.5?`rgba(120,48,20,${.12+z*.2})`:`rgba(235,150,105,${(z-.5)*.35})`,C.fillRect(F,V,1+Math.random()*1.5*c,1+Math.random()*1.5*c)}for(let H=0;H<40;H++){let F=Math.random()*I.width,V=Math.random()*I.height,z=(80+Math.random()*200)*c,O=C.createRadialGradient(F,V,0,F,V,z),Y=Math.random()<.5;O.addColorStop(0,Y?"rgba(110,45,20,.12)":"rgba(220,140,95,.12)"),O.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=O,C.fillRect(F-z,V-z,z*2,z*2)}C.globalAlpha=.05,C.strokeStyle="#f3c19c";for(let H=0;H<I.height;H+=3*c)C.beginPath(),C.moveTo(0,H+Math.sin(H)*2),C.lineTo(I.width,H+Math.cos(H)*2),C.stroke();return C.globalAlpha=1,I},g=()=>{c=Math.min(devicePixelRatio||1,2),o=i.clientWidth,l=i.clientHeight,a.width=o*c,a.height=l*c,u=S(),d=document.createElement("canvas"),d.width=a.width,d.height=a.height,m=d.getContext("2d")};g();let f=new ResizeObserver(()=>{(Math.abs(i.clientWidth-o)>2||Math.abs(i.clientHeight-l)>2)&&g()});f.observe(i);let v=new IntersectionObserver(([I])=>p=I.isIntersecting);v.observe(i);let b=-1,_=-1,M=-1,T=-1,w=0,x=0,A=I=>{if(I.pointerType==="touch")return;let C=i.getBoundingClientRect();b=I.clientX-C.left,_=I.clientY-C.top,w=performance.now()};i.addEventListener("pointermove",A);let N=(I,C,U,H)=>{let F=U-I,V=H-C,z=Math.hypot(F,V);if(z<.5)return;x=Math.atan2(V,F);let O=-V/z,Y=F/z,lt=64;m.save(),m.scale(c,c),m.lineCap="round";for(let rt=-lt;rt<=lt;rt+=3){let Ot=1-Math.abs(rt)/lt,bt=rt/3%2===0;m.strokeStyle=bt?`rgba(248,180,132,${.5*Ot+.08})`:`rgba(98,36,14,${.42*Ot+.06})`,m.lineWidth=1.3,m.beginPath(),m.moveTo(I+O*rt,C+Y*rt),m.lineTo(U+O*rt,H+Y*rt),m.stroke()}m.restore()},L=performance.now(),D=I=>{if(h=requestAnimationFrame(D),!p||!u)return;let C=I-w>2500;if(C&&!s){let U=(I-L)/1e3,H=o*.5+Math.sin(U*.45)*o*.42,F=l*.5+Math.sin(U*.9)*l*.32;M>=0&&N(M,T,H,F),M=H,T=F}else b>=0&&(M>=0&&N(M,T,b,_),M=b,T=_);if(m.globalCompositeOperation="destination-out",m.fillStyle="rgba(0,0,0,.012)",m.fillRect(0,0,d.width,d.height),m.globalCompositeOperation="source-over",r.drawImage(u,0,0),r.drawImage(d,0,0),M>=0&&(I-w<300||C)){r.save(),r.scale(c,c),r.translate(M,T),r.rotate(x+Math.PI/2),r.fillStyle="rgba(30,30,25,.22)",r.fillRect(-66,-14,132,22),r.strokeStyle="rgba(250,245,235,.5)",r.lineWidth=1;for(let U=-66;U<=66;U+=6)r.beginPath(),r.moveTo(U,-14),r.lineTo(U,8),r.stroke();r.fillStyle="rgba(21,36,26,.85)",r.fillRect(-68,-16,136,4),r.restore()}};return h=requestAnimationFrame(D),()=>{cancelAnimationFrame(h),f.disconnect(),v.disconnect(),i.removeEventListener("pointermove",A)}},[]);let n=Q2.weekday;return(0,ze.jsxs)("section",{ref:e,className:"lab-brush","aria-labelledby":"lab-brush-title",children:[(0,ze.jsx)("canvas",{ref:t,className:"lab-brush__canvas","aria-hidden":!0}),(0,ze.jsxs)("div",{className:"container lab-brush__inner",children:[(0,ze.jsxs)("div",{className:"lab-brush__card",children:[(0,ze.jsxs)("p",{className:"eyebrow",children:["\xC1rak \xB7 ",u_.label]}),(0,ze.jsxs)("h2",{id:"lab-brush-title",className:"h2",children:["Egy \xF3ra salak, ",(0,ze.jsx)("em",{children:"h\xE9tk\xF6znap."})]}),(0,ze.jsxs)("table",{className:"lab-brush__table",children:[(0,ze.jsx)("thead",{children:(0,ze.jsxs)("tr",{children:[(0,ze.jsx)("th",{scope:"col",children:"Id\u0151s\xE1v"}),(0,ze.jsx)("th",{scope:"col",children:"Alkalom"}),(0,ze.jsx)("th",{scope:"col",children:"10-es b\xE9rlet"}),(0,ze.jsx)("th",{scope:"col",children:"Szezonb\xE9rlet*"})]})}),(0,ze.jsx)("tbody",{children:n.map(i=>(0,ze.jsxs)("tr",{children:[(0,ze.jsx)("td",{children:i.time}),(0,ze.jsx)("td",{children:(0,ze.jsxs)("b",{children:[i.single," Ft"]})}),(0,ze.jsxs)("td",{children:[i.ten," Ft"]}),(0,ze.jsxs)("td",{children:[i.season," Ft"]})]},i.time))})]}),(0,ze.jsxs)("p",{className:"lab-brush__fine",children:["* 27 h\xE9tre sz\xF3l, alkalmank\xE9nti d\xEDj. ",u_.range]})]}),(0,ze.jsx)("p",{className:"lab-brush__hint","aria-hidden":!0,children:"H\xFAzd v\xE9gig az egeret a salakon"})]}),(0,ze.jsx)(Ze,{n:"10",name:"Brush the clay"})]})}var to=Pt(dn());var Me=Pt($t()),aT=[{y:-1.2,x:0,k:"Nyitvatart\xE1s",t:`P\xE1ly\xE1k ${bn.hours.courts.time}`,s:`Recepci\xF3 ${bn.hours.reception.time} \xB7 minden nap`},{y:4.2,x:-2.4,k:"Fizet\xE9s",t:"K\xE9szp\xE9nz, k\xE1rtya",s:"SZ\xC9P-k\xE1rtya, AYCM Sportpass"},{y:4.2,x:2.4,k:"Lemond\xE1s",t:"24 \xF3r\xE1val el\u0151tte",s:"A lemondott b\xE9rletes \xF3r\xE1k a szezonban lej\xE1tszhat\xF3k."},{y:9.2,x:0,k:"Este",t:"Vil\xE1g\xEDt\xE1s 19 \xF3r\xE1t\xF3l",s:"Automatikusan kapcsoljuk a vil\xE1g\xEDt\xE1ssal rendelkez\u0151 p\xE1ly\xE1kon."},{y:16.6,x:-2.4,k:"Tenisziskola",t:"5\u201317 \xE9veseknek",s:"\xE9s feln\u0151tteknek is"},{y:16.6,x:2.4,k:"T\xE9len is",t:"3 + 2 fedett p\xE1lya",s:"h\xE1rom \xE1lland\xF3an fedett, kett\u0151 s\xE1torban"},{y:23,x:0,k:"Gell\xE9rt Szabadid\u0151k\xF6zpont",t:bn.phone,s:`${bn.address.zip} ${bn.address.city}, ${bn.address.street}`}],la=36.6,Sn=18.3,rT=(la-23.77)/2,ZU=62;function sT(){let e=(0,to.useRef)(null),t=(0,to.useRef)(null),n=(0,to.useRef)([]),i=(0,to.useRef)(null);(0,to.useEffect)(()=>{let s=e.current,o=t.current,l=0,c=!1,h=30,p=()=>{let m=Math.min(innerWidth*.94,860);h=m/Sn,o.style.width=`${m}px`,o.style.height=`${la*h}px`,o.style.setProperty("--k",`${h}px`)};p(),addEventListener("resize",p);let u=new IntersectionObserver(([m])=>c=m.isIntersecting);u.observe(s);let d=()=>{if(l=requestAnimationFrame(d),!c)return;let m=s.getBoundingClientRect(),S=Math.min(1,Math.max(0,-m.top/(m.height-innerHeight))),g=(-2+S*25)*h;o.style.transform=`translateX(-50%) rotateX(${ZU}deg) translateY(${g}px)`,i.current&&(i.current.textContent=Math.max(0,Math.min(23.77,S*25-.4)).toFixed(1).replace(".",",")),aT.forEach((f,v)=>{let b=n.current[v];if(!b)return;let _=f.y-(S*25-2)-3,M=_<-1.5?Math.max(0,1+(_+1.5)/2.5):_>9?Math.max(0,1-(_-9)/5):1;b.firstElementChild.style.opacity=String(M)})};return l=requestAnimationFrame(d),()=>{cancelAnimationFrame(l),u.disconnect(),removeEventListener("resize",p)}},[]);let a=la-rT,r=rT;return(0,Me.jsx)("section",{ref:e,className:"lab-courtpage","aria-labelledby":"lab-courtpage-title",children:(0,Me.jsxs)("div",{className:"lab-courtpage__stage",children:[(0,Me.jsxs)("div",{className:"container lab-courtpage__head",children:[(0,Me.jsx)("p",{className:"eyebrow eyebrow--light",children:"V\xE9gig a p\xE1ly\xE1n"}),(0,Me.jsxs)("h2",{id:"lab-courtpage-title",className:"h2",children:["Minden, amit tudni kell, ",(0,Me.jsx)("em",{children:"alapvonalt\xF3l alapvonalig."})]})]}),(0,Me.jsx)("div",{className:"lab-courtpage__view",children:(0,Me.jsxs)("div",{ref:t,className:"lab-courtpage__plane",children:[(0,Me.jsxs)("svg",{className:"lab-courtpage__lines",viewBox:`0 0 ${Sn} ${la}`,preserveAspectRatio:"none","aria-hidden":!0,children:[(0,Me.jsx)("rect",{x:(Sn-10.97)/2,y:r,width:10.97,height:23.77}),(0,Me.jsx)("line",{x1:(Sn-8.23)/2,y1:r,x2:(Sn-8.23)/2,y2:a}),(0,Me.jsx)("line",{x1:(Sn+8.23)/2,y1:r,x2:(Sn+8.23)/2,y2:a}),(0,Me.jsx)("line",{x1:(Sn-8.23)/2,y1:la/2-6.4,x2:(Sn+8.23)/2,y2:la/2-6.4}),(0,Me.jsx)("line",{x1:(Sn-8.23)/2,y1:la/2+6.4,x2:(Sn+8.23)/2,y2:la/2+6.4}),(0,Me.jsx)("line",{x1:Sn/2,y1:la/2-6.4,x2:Sn/2,y2:la/2+6.4}),(0,Me.jsx)("line",{x1:Sn/2,y1:r,x2:Sn/2,y2:r+.3}),(0,Me.jsx)("line",{x1:Sn/2,y1:a,x2:Sn/2,y2:a-.3})]}),(0,Me.jsx)("div",{className:"lab-courtpage__net",style:{top:`calc(var(--k) * ${la/2})`},"aria-hidden":!0,children:(0,Me.jsx)("span",{})}),aT.map((s,o)=>(0,Me.jsx)("div",{ref:l=>{n.current[o]=l},className:"lab-courtpage__sign",style:{left:`calc(var(--k) * (${Sn/2} + ${s.x} * var(--spread, 1)))`,top:`calc(var(--k) * ${a-s.y})`},children:(0,Me.jsxs)("div",{className:"lab-courtpage__card",children:[(0,Me.jsx)("small",{children:s.k}),(0,Me.jsx)("b",{children:s.t}),(0,Me.jsx)("span",{children:s.s})]})},o))]})}),(0,Me.jsxs)("div",{className:"lab-courtpage__meter","aria-hidden":!0,children:[(0,Me.jsx)("span",{ref:i,children:"0,0"})," / 23,77 m"]}),(0,Me.jsx)(Ze,{n:"08",name:"The page is a court",dark:!0})]})})}var kl=Pt(dn());var Qn=Pt($t()),ke=23.77/2,je=10.97/2,ca=8.23/2,cs=6.4,Nu="#e6e28c",h_="#f0a982",Du="#f5f0e6",$n=[{by:0,kind:"serve",tc:1.16,at:[-12,2.75,-.7],bounce:[5.6,0,3.7],tb:1.66,arc:.15,label:"Szerva \xB7 kifel\xE9"},{by:1,kind:"backhand",tc:2.06,at:[11.4,.95,4.7],bounce:[-7.4,0,-3],tb:2.86,arc:1.25,label:"Fon\xE1k return \xB7 keresztbe"},{by:0,kind:"forehand",tc:3.3,at:[-11.6,.95,-3.5],bounce:[7.9,0,2.6],tb:4.08,arc:1.4,label:"Tenyeres \xB7 keresztbe"},{by:1,kind:"forehand",tc:4.5,at:[11.7,1,3],bounce:[-8.2,0,.6],tb:5.3,arc:1.5,label:"Tenyeres \xB7 k\xF6z\xE9pre"},{by:0,kind:"forehand",tc:5.72,at:[-11.2,.95,.9],bounce:[9.6,0,-4],tb:6.38,arc:.9,label:"Tenyeres nyer\u0151 \xB7 a vonalra"}],oT=8.2,rn=(e,t,n)=>e+(t-e)*n,lr=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),no=e=>{let t=lr(e);return t*t*(3-2*t)};function f_(e){let t=$n[0];if(e<.66)return null;if(e<t.tc){let n=(e-.66)/(t.tc-.66);return[t.at[0]+.25,rn(1.5,t.at[1],n)+4*n*(1-n)*.55,t.at[2]-.15]}for(let n=0;n<$n.length;n++){let i=$n[n],a=$n[n+1];if(e<i.tb){let r=(e-i.tc)/(i.tb-i.tc);return[rn(i.at[0],i.bounce[0],r),rn(i.at[1],0,r)+4*r*(1-r)*i.arc,rn(i.at[2],i.bounce[2],r)]}if(a&&e<a.tc){let r=(e-i.tb)/(a.tc-i.tb);return[rn(i.bounce[0],a.at[0],r),rn(0,a.at[1],r)+4*r*(1-r)*1.1,rn(i.bounce[2],a.at[2],r)]}if(!a){let r=e-i.tb,s=(i.bounce[0]-i.at[0])/(i.tb-i.tc),o=(i.bounce[2]-i.at[2])/(i.tb-i.tc),l=r<.7?4*(r/.7)*(1-r/.7)*.9:r<1.05?4*((r-.7)/.35)*(1-(r-.7)/.35)*.2:0,c=r<1.05?r:1.05+(r-1.05)*.4;return[Math.min(17.5,i.bounce[0]+s*.55*c),l,i.bounce[2]+o*.55*c]}}return null}function lT(e,t){let n=$n.filter(l=>l.by===e),i=$n.filter(l=>l.by!==e),a=[];e===0?a.push([0,-12.2,-.6]):a.push([0,11.6,3.4]);for(let l of $n)if(l.by===e){let c=l.kind==="serve"?[0,0]:[-Math.sign(l.at[0])*.55,l.kind==="forehand"?-.8*Math.sign(l.at[0]):.8*Math.sign(l.at[0])];a.push([l.tc,l.at[0]+c[0],l.at[2]+c[1]]),a.push([l.tc+.7,l.at[0]+c[0]-Math.sign(l.at[0])*.3,rn(l.at[2]+c[1],0,.45)])}a.sort((l,c)=>l[0]-c[0]);let r=a[0][1],s=a[0][2];for(let l=0;l<a.length-1;l++)if(t>=a[l][0]&&t<=a[l+1][0]){let c=no((t-a[l][0])/(a[l+1][0]-a[l][0]));r=rn(a[l][1],a[l+1][1],c),s=rn(a[l][2],a[l+1][2],c)}else t>a[a.length-1][0]&&(r=a[a.length-1][1],s=a[a.length-1][2]);if(e===1){let l=$n[$n.length-1];t>l.tc&&(s=rn(s,-2.2,no((t-l.tc)/.9)))}let o=or.ready;for(let l of n){let c=H2[l.kind],h=l.tc-c.contact;t>=h&&t<h+(l.kind==="serve"?2.3:1.75)&&(o=c.pose(t-h))}return{pos:[r,0,s],pose:o}}function cT(e,t,n){let i=Mp(e),a=e.twist*Math.PI/180,r=(o,l)=>[t[0]+n*o[0],o[1],t[2]+l*n],s=Math.cos(a)*.17;return{head:r(i.head,0),neck:r(i.neck,0),pelvis:r(i.pelvis,0),rS:r(i.rS,s),lS:r(i.lS,-s),rE:r(i.rE,s*1.25),rH:r(i.rH,s*1.3),lE:r(i.lE,-s*1.25),lH:r(i.lH,-s*1.2),rHip:r([i.pelvis[0],i.pelvis[1]-.02],.11),lHip:r([i.pelvis[0],i.pelvis[1]-.02],-.11),fK:r(i.fK,-.13),fA:r(i.fA,-.14),bK:r(i.bK,.13),bA:r(i.bA,.14),rThroat:r(i.racket.throat,s*1.3),rTip:r(i.racket.tip,s*1.3),rCenter:r(i.racket.center,s*1.3)}}function mT(){let e=(0,kl.useRef)(null),t=(0,kl.useRef)(null),n=(0,kl.useRef)(null);return(0,kl.useEffect)(()=>{let i=e.current,a=t.current,r=a.getContext("2d"),s=0,o=0,l=1,c=0,h=!1,p=0,u=0,d=()=>{l=Math.min(devicePixelRatio||1,2),s=a.clientWidth,o=a.clientHeight,a.width=s*l,a.height=o*l};d(),addEventListener("resize",d);let m=new IntersectionObserver(([f])=>h=f.isIntersecting);m.observe(i);let S=f=>`500 ${f}px "DM Sans Variable", "DM Sans", system-ui, sans-serif`,g=()=>{if(c=requestAnimationFrame(g),!h)return;let f=i.getBoundingClientRect(),v=lr(-f.top/(f.height-innerHeight));p+=(v-p)*.14;let b=p,_=lr(b/.26),M=no((b-.27)/.15),T=lr((b-.44)/.54),w=T*oT,x=s<700,A=no(T*7),N=T>0?f_(w):null,L=(N?lr(N[0]*.3,-3.5,3.5):w<1?-3:u)*A;u+=(L-u)*.1;let D=rn(89.5,x?30:rn(22,19,A),M)*(Math.PI/180),I=34,C=[u,I*Math.sin(D),-I*Math.cos(D)],U=[u,rn(0,1.2,M),rn(0,1.5,M)],H=fT(uT(U,C)),F=fT(hT([0,1,0],H)),V=hT(H,F),z=x?13.5:15.5,O=(x?.36:.4)*s*I/z*rn(1,x?1.12:1.25,M)*rn(1,x?1.1:1.14,A),Y=s/2,lt=o*rn(x?.56:.54,x?.54:.5,M),rt=it=>{let Tt=uT(it,C),ot=d_(Tt,H);return[Y+d_(Tt,F)/ot*O,lt-d_(Tt,V)/ot*O,ot]};r.setTransform(l,0,0,l,0,0),r.clearRect(0,0,s,o),r.strokeStyle=`rgba(245,240,230,${.05*(1-M)+.02})`,r.lineWidth=1,r.beginPath();for(let it=s/2%24;it<s;it+=24)r.moveTo(it,0),r.lineTo(it,o);for(let it=o/2%24;it<o;it+=24)r.moveTo(0,it),r.lineTo(s,it);if(r.stroke(),M>0){r.strokeStyle=`rgba(245,240,230,${.06*M})`,r.beginPath();for(let it=-18;it<=18;it+=2)eo(r,rt,[it,0,-9],[it,0,9]);for(let it=-9;it<=9;it+=2)eo(r,rt,[-18,0,it],[18,0,it]);r.stroke()}let Ot=[[[-ke,0,-je],[ke,0,-je]],[[-ke,0,je],[ke,0,je]],[[-ke,0,-je],[-ke,0,je]],[[ke,0,-je],[ke,0,je]],[[-ke,0,-ca],[ke,0,-ca]],[[-ke,0,ca],[ke,0,ca]],[[-cs,0,-ca],[-cs,0,ca]],[[cs,0,-ca],[cs,0,ca]],[[-cs,0,0],[cs,0,0]],[[-ke,0,0],[-ke+.3,0,0]],[[ke,0,0],[ke-.3,0,0]]];r.strokeStyle=Du,r.lineWidth=1.6,r.lineCap="round",Ot.forEach(([it,Tt],ot)=>{let St=lr(_*Ot.length*1.15-ot);St<=0||(r.beginPath(),eo(r,rt,it,[rn(it[0],Tt[0],St),0,rn(it[2],Tt[2],St)]),r.stroke())});let bt=lr(_*1.4-.25),Bt=it=>(.914+(1.07-.914)*(Math.abs(it)/(je+.914))**2)*M;if(bt>0){let it=je+.914;r.strokeStyle=`rgba(245,240,230,${.25+.2*M})`,r.lineWidth=.8,r.beginPath();for(let ot=-it;ot<=it;ot+=.5)eo(r,rt,[0,0,ot],[0,Bt(ot),ot]);for(let ot=.15;ot<1.07;ot+=.15){let St=[];for(let Kt=-it;Kt<=it;Kt+=.5)Bt(Kt)>ot&&St.push([0,ot,Kt]);for(let Kt=0;Kt<St.length-1;Kt++)eo(r,rt,St[Kt],St[Kt+1])}r.stroke(),r.strokeStyle=Du,r.lineWidth=2.2,r.beginPath();let Tt=!0;for(let ot=-it;ot<=it+1e-6;ot+=.25){let[St,Kt]=rt([0,Bt(ot),ot*bt]);Tt?r.moveTo(St,Kt):r.lineTo(St,Kt),Tt=!1}r.stroke(),r.lineWidth=3,r.beginPath(),eo(r,rt,[0,0,-it],[0,Bt(it)+.02*M,-it]),eo(r,rt,[0,0,it],[0,Bt(it)+.02*M,it]),r.stroke()}let J=lr(_*1.3-.35)*(1-M*.85);r.font=S(x?10:11.5),J>0&&(r.globalAlpha=J,Fl(r,rt,[-ke,0,-je-1.4],[ke,0,-je-1.4],"23,77 m",0,14),Fl(r,rt,[-ke-1.4,0,-je],[-ke-1.4,0,je],"10,97 m",1,0),Fl(r,rt,[ke+1.4,0,-ca],[ke+1.4,0,ca],"8,23 m",2,0),Fl(r,rt,[0,0,je+1.2],[cs,0,je+1.2],"6,40 m",0,-8),Fl(r,rt,[cs,0,je+1.2],[ke,0,je+1.2],"5,49 m",0,-8),Fl(r,rt,[-ke-.6,0,ca],[-ke-.6,0,je],"1,37",1,0),r.globalAlpha=1);let at=no((b-.33)/.08)*(1-no((b-.47)/.06));if(at>0){r.globalAlpha=at;let[it,Tt]=rt([0,0,0]),[,ot]=rt([0,.914,0]),[St,Kt]=rt([0,0,-(je+.914)]),[,Vt]=rt([0,1.07,-(je+.914)]);dT(r,it+22,Tt,it+22,ot,"0,914 m",Nu),dT(r,St-22,Kt,St-22,Vt,"1,07 m",Nu,!0),r.globalAlpha=1}if(r.globalAlpha=lr(_*2-.4)*(1-M),r.globalAlpha>0){let it=x?196:250,Tt=54,ot=s-it-(x?16:40),St=o-Tt-(x?70:40);r.strokeStyle="rgba(245,240,230,.6)",r.lineWidth=1,r.strokeRect(ot,St,it,Tt),r.beginPath(),r.moveTo(ot,St+22),r.lineTo(ot+it,St+22),r.stroke(),r.fillStyle=Du,r.font=S(10),r.fillText("GELL\xC9RT \xB7 TENISZP\xC1LYA \xB7 ALAPRAJZ",ot+8,St+15),r.fillStyle="rgba(245,240,230,.6)",r.fillText("ITF szabv\xE1nym\xE9retek \xB7 p\xE1ros p\xE1lya",ot+8,St+36),r.fillText("Lap 1/1",ot+8,St+48)}if(r.globalAlpha=1,M>.6){let it=no((M-.6)/.4);r.globalAlpha=it,$n.forEach((It,qt)=>{if(w<It.tb)return;let[ue,Te]=rt(It.bounce),xe=It.by===0?Nu:h_;r.strokeStyle=xe,r.lineWidth=1.4,r.beginPath(),r.ellipse(ue,Te,7,2.6,0,0,Math.PI*2),r.stroke(),r.font=S(10),r.fillStyle=xe,r.fillText(String(qt+1),ue+9,Te+3)}),r.setLineDash([3,4]),r.strokeStyle="rgba(245,240,230,.55)",r.lineWidth=1,r.beginPath();let Tt=!1;for(let It=Math.max(.66,w-1.4);It<=w;It+=1/60){let qt=f_(It);if(!qt)continue;let[ue,Te]=rt(qt);Tt?r.lineTo(ue,Te):r.moveTo(ue,Te),Tt=!0}r.stroke(),r.setLineDash([]);let ot=lT(0,w),St=lT(1,w),Kt=cT(ot.pose,ot.pos,1),Vt=cT(St.pose,St.pos,-1);pT(r,rt,Vt,h_);let Zt=f_(w);if(pT(r,rt,Kt,Nu),Zt){let[It,qt]=rt(Zt),[ue,Te]=rt([Zt[0],0,Zt[2]]);r.fillStyle="rgba(0,0,0,.35)",r.beginPath(),r.ellipse(ue,Te,4,1.5,0,0,Math.PI*2),r.fill(),r.fillStyle="#d9e05a",r.beginPath(),r.arc(It,qt,x?3.2:4,0,Math.PI*2),r.fill()}r.globalAlpha=1;let te=-1;if($n.forEach((It,qt)=>{w>=It.tc-.05&&(te=qt)}),n.current){let It=w>$n[$n.length-1].tb+.6,qt=It?"Pont \xB7 15 : 0":te>=0?`${te+1}. ${$n[te].label}`:"Szerva el\u0151tt",ue=It?Du:te>=0?$n[te].by===0?Nu:h_:Du;n.current.dataset.l!==qt&&(n.current.dataset.l=qt,n.current.querySelector("b").textContent=qt,n.current.style.setProperty("--c",ue),n.current.classList.remove("is-new"),n.current.offsetWidth,n.current.classList.add("is-new")),n.current.style.opacity=String(it);let Te=n.current.querySelector("i");Te&&(Te.style.transform=`scaleX(${w/oT})`)}}else n.current&&(n.current.style.opacity="0")};return c=requestAnimationFrame(g),()=>{cancelAnimationFrame(c),m.disconnect(),removeEventListener("resize",d)}},[]),(0,Qn.jsx)("section",{ref:e,className:"lab-blueprint","aria-labelledby":"lab-bp-title",children:(0,Qn.jsxs)("div",{className:"lab-blueprint__stage",children:[(0,Qn.jsx)("canvas",{ref:t,className:"lab-blueprint__canvas",role:"img","aria-label":"Teniszp\xE1lya alaprajza a hivatalos m\xE9retekkel, majd oldaln\xE9zetben k\xE9t j\xE1t\xE9kos egy labdamenete"}),(0,Qn.jsxs)("div",{className:"container lab-blueprint__head",children:[(0,Qn.jsx)("p",{className:"eyebrow eyebrow--light",children:"M\xE9retek"}),(0,Qn.jsxs)("h2",{id:"lab-bp-title",className:"h2",children:["23,77 \xD7 10,97 m\xE9ter. ",(0,Qn.jsx)("em",{children:"Pontosan."})]})]}),(0,Qn.jsxs)("div",{ref:n,className:"lab-blueprint__cap",style:{opacity:0},"aria-live":"polite",children:[(0,Qn.jsx)("b",{children:"Szerva el\u0151tt"}),(0,Qn.jsx)("span",{children:(0,Qn.jsx)("i",{})}),(0,Qn.jsx)("small",{children:"G\xF6rgess el\u0151re \xE9s vissza: te tekered a labdamenetet."})]}),(0,Qn.jsx)(Ze,{n:"81",name:"Blueprint mode \xB7 skeleton point",dark:!0})]})})}function uT(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function d_(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function hT(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function fT(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function eo(e,t,n,i){let[a,r]=t(n),[s,o]=t(i);e.moveTo(a,r),e.lineTo(s,o)}function Fl(e,t,n,i,a,r,s){let[o,l]=t(n),[c,h]=t(i);e.strokeStyle="#e6e28c",e.fillStyle="#e6e28c",e.lineWidth=1,e.beginPath(),e.moveTo(o,l),e.lineTo(c,h);let p=Math.atan2(h-l,c-o),u=-Math.sin(p)*5,d=Math.cos(p)*5;for(let[f,v]of[[o,l],[c,h]])e.moveTo(f-u,v-d),e.lineTo(f+u,v+d);e.stroke();let m=(o+c)/2,S=(l+h)/2,g=e.measureText(a).width;r===0?e.fillText(a,m-g/2,S+s):(e.save(),e.translate(m+(r===1?-8:14),S),e.rotate(-Math.PI/2),e.fillText(a,-g/2,0),e.restore())}function dT(e,t,n,i,a,r,s,o=!1){e.strokeStyle=s,e.fillStyle=s,e.lineWidth=1,e.beginPath(),e.moveTo(t,n),e.lineTo(i,a),e.moveTo(t-4,n),e.lineTo(t+4,n),e.moveTo(i-4,a),e.lineTo(i+4,a),e.stroke();let l=e.measureText(r).width;e.fillText(r,o?t-l-8:t+8,(n+a)/2+4)}function pT(e,t,n,i){let a=T=>t(n[T]);e.strokeStyle="rgba(0,0,0,.28)",e.lineWidth=2,e.beginPath();for(let[T,w]of[["pelvis","fA"],["pelvis","bA"],["neck","pelvis"],["rS","rH"],["lS","lH"]]){let x=n[T],A=n[w],N=t([x[0]+x[1]*.35,0,x[2]+x[1]*.2]),L=t([A[0]+A[1]*.35,0,A[2]+A[1]*.2]);e.moveTo(N[0],N[1]),e.lineTo(L[0],L[1])}e.stroke();let r=[["neck","pelvis"],["lS","rS"],["rS","rE"],["rE","rH"],["lS","lE"],["lE","lH"],["lHip","rHip"],["lHip","fK"],["fK","fA"],["rHip","bK"],["bK","bA"]];e.strokeStyle=i,e.lineWidth=2.6,e.lineCap="round",e.shadowColor=i,e.shadowBlur=10,e.beginPath();for(let[T,w]of r){let[x,A]=a(T),[N,L]=a(w);e.moveTo(x,A),e.lineTo(N,L)}e.stroke();let[s,o,l]=a("head"),[c,h]=a("neck"),p=Math.max(2.5,Math.hypot(s-c,o-h)*.55);e.beginPath(),e.arc(s,o,p,0,Math.PI*2),e.stroke();let[u,d]=a("rThroat"),[m,S]=a("rTip"),[g,f]=a("rCenter"),[v,b]=a("rH");e.lineWidth=1.4,e.beginPath(),e.moveTo(v,b),e.lineTo(u,d);let _=Math.atan2(S-d,m-u),M=Math.hypot(m-u,S-d)/2;e.moveTo(g+Math.cos(_)*M,f+Math.sin(_)*M),e.ellipse(g,f,M,M*.55,_,0,Math.PI*2),e.stroke(),e.shadowBlur=0,e.fillStyle=i;for(let T of["rS","lS","rE","lE","rH","lH","fK","bK","fA","bA","pelvis"]){let[w,x]=a(T);e.beginPath(),e.arc(w,x,2.6,0,Math.PI*2),e.fill()}}var Rp=Pt(dn());var ti=Pt($t()),p_=[{src:"img/forehand.jpg",alt:"Fi\xFA tenyeresre k\xE9sz\xFCl a salakp\xE1ly\xE1n",cap:"Tenyeres",dir:-.15,span:"wide"},{src:"img/volley-lunge.jpg",alt:"J\xE1t\xE9kos m\xE9ly kit\xF6r\xE9sben r\xF6pt\xE9zik a h\xE1l\xF3 el\u0151tt",cap:"R\xF6pte a h\xE1l\xF3n\xE1l",dir:.1,span:"tall"},{src:"img/junior-forehand.jpg",alt:"Kisl\xE1ny tenyeres \xFCt\xE9s k\xF6zben",cap:"Tenisziskola",dir:.05,span:""},{src:"img/between-points.jpg",alt:"K\xE9t j\xE1t\xE9kos besz\xE9lget k\xE9t labdamenet k\xF6z\xF6tt",cap:"K\xE9t labdamenet k\xF6z\xF6tt",dir:0,span:""},{src:"img/stadium-court.jpg",alt:"A centerp\xE1lya telt lel\xE1t\xF3val, fel\xFClr\u0151l",cap:"A centerp\xE1lya",dir:.35,span:"wide"},{src:"img/school-group-court.jpg",alt:"A tenisziskola csoportk\xE9pe a salakp\xE1ly\xE1n",cap:"A Gell\xE9rt Tenisziskola",dir:0,span:""}],m_=["1/15","1/30","1/60","1/125","1/250","1/500","1/1000","1/2000"];function gT(){let e=(0,Rp.useRef)(null);return(0,Rp.useEffect)(()=>{let t=Array.from(e.current.querySelectorAll(".lab-shot")),n=matchMedia("(prefers-reduced-motion: reduce)").matches,i=[];return t.forEach((a,r)=>{let s=a.querySelector("canvas"),o=s.getContext("2d"),l=a.querySelector(".lab-shot__speed"),c=new Image;c.src=p_[r].src;let h=p_[r].dir,p=0,u=0,d=!1,m=!1,S=()=>{let M=Math.min(devicePixelRatio||1,2);s.width=s.clientWidth*M,s.height=s.clientHeight*M},g=(M,T)=>{if(!c.complete||!c.naturalWidth)return;let w=s.width,x=s.height,A=Math.max(w/c.naturalWidth,x/c.naturalHeight)*1.04,N=c.naturalWidth*A,L=c.naturalHeight*A,D=(w-N)/2,I=(x-L)/2;o.clearRect(0,0,w,x);let C=M>.01?18:1,U=M*w*.09,H=Math.cos(h),F=Math.sin(h);for(let V=0;V<C;V++){let z=C===1?0:(V/(C-1)-.5)*U;o.globalAlpha=1/(V+1),o.drawImage(c,D+H*z,I+F*z,N,L)}o.globalAlpha=1,T>0&&(o.fillStyle=`rgba(255,252,240,${T})`,o.fillRect(0,0,w,x))},f=()=>{cancelAnimationFrame(p),u=performance.now(),a.classList.add("is-shooting");let M=T=>{let w=Math.min(1,(T-u)/900),x=n?0:Math.max(0,1-w/.7)**2,A=n?0:w>.7&&w<.86?(1-Math.abs((w-.78)/.08))*.55:0;g(x,A),l.textContent=m_[Math.min(m_.length-1,Math.floor(w/.72*m_.length))]+" s",w<1?p=requestAnimationFrame(M):a.classList.remove("is-shooting")};p=requestAnimationFrame(M)};S(),c.onload=()=>{S(),g(d?0:1,0),m&&!d&&(d=!0,f())};let v=new IntersectionObserver(([M])=>{m=M.isIntersecting,M.isIntersecting&&!d&&c.complete&&(d=!0,setTimeout(f,r%3*140))},{threshold:.45});v.observe(a);let b=()=>d&&f();a.addEventListener("pointerenter",b);let _=new ResizeObserver(()=>{S(),g(d?0:1,0)});_.observe(s),i.push(()=>{cancelAnimationFrame(p),v.disconnect(),_.disconnect(),a.removeEventListener("pointerenter",b)})}),()=>i.forEach(a=>a())},[]),(0,ti.jsxs)("section",{className:"section lab-shutter","aria-labelledby":"lab-shutter-title",children:[(0,ti.jsxs)("div",{className:"container",children:[(0,ti.jsxs)("div",{className:"lab-shutter__head",children:[(0,ti.jsx)("p",{className:"eyebrow",children:"Pillanatok"}),(0,ti.jsxs)("h2",{id:"lab-shutter-title",className:"h2",children:["Egy \xFCt\xE9s ",(0,ti.jsx)("em",{children:"1/2000 m\xE1sodperc alatt."})]})]}),(0,ti.jsx)("div",{ref:e,className:"lab-shutter__grid",children:p_.map(t=>(0,ti.jsxs)("figure",{className:`lab-shot${t.span?" lab-shot--"+t.span:""}`,children:[(0,ti.jsx)("canvas",{role:"img","aria-label":t.alt}),(0,ti.jsxs)("figcaption",{children:[(0,ti.jsx)("span",{children:t.cap}),(0,ti.jsx)("span",{className:"lab-shot__speed",children:"1/15 s"})]})]},t.src))})]}),(0,ti.jsx)(Ze,{n:"58",name:"Shutter-speed reveal"})]})}var Hl=Pt(dn());var Uu=Pt(dn()),Lu=Pt($t()),g_=null;function vT(e=1){try{g_=g_||new AudioContext;let t=g_,n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="sine",i.frequency.setValueAtTime(1250,n),i.frequency.exponentialRampToValueAtTime(520,n+.05),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.22*e,n+.004),a.gain.exponentialRampToValueAtTime(1e-4,n+.11),i.connect(a).connect(t.destination),i.start(n),i.stop(n+.12);let r=t.createBuffer(1,t.sampleRate*.04,t.sampleRate),s=r.getChannelData(0);for(let h=0;h<s.length;h++)s[h]=(Math.random()*2-1)*(1-h/s.length)**3;let o=t.createBufferSource(),l=t.createBiquadFilter(),c=t.createGain();o.buffer=r,l.type="bandpass",l.frequency.value=2400,c.gain.value=.18*e,o.connect(l).connect(c).connect(t.destination),o.start(n)}catch{}}function _T({href:e,children:t,id:n}){let i=(0,Uu.useRef)(null),a=(0,Uu.useRef)(null);return(0,Uu.useEffect)(()=>{let r=i.current,s=a.current,o=s.getContext("2d"),l=matchMedia("(prefers-reduced-motion: reduce)").matches,c=0,h=0,p=1,u=0,d=.5,m=.5,S=!1,g=0,f=0,v=0,b=.5,_=.5,M=()=>{p=Math.min(devicePixelRatio||1,2),c=r.clientWidth,h=r.clientHeight,s.width=c*p,s.height=h*p};M();let T=new ResizeObserver(M);T.observe(r);let w=I=>{let C=r.getBoundingClientRect();d=(I.clientX-C.left)/C.width,m=(I.clientY-C.top)/C.height},x=I=>{S=!0,w(I),v=7},A=()=>{S=!1,v=0},N=I=>{w(I),b=d,_=m,f+=9,vT(1)},L=I=>{let C=r.getBoundingClientRect(),{x:U}=I.detail;b=(U-C.left)/C.width,_=.25,f+=12,vT(.8)};r.addEventListener("pointerenter",x),r.addEventListener("pointermove",w),r.addEventListener("pointerleave",A),r.addEventListener("pointerdown",N),n&&addEventListener("lab:balldrop",L);let D=()=>{u=requestAnimationFrame(D),f+=(v-g)*.12,f*=.86,g+=f,S?(b+=(d-b)*.25,_+=(m-_)*.25):(b+=(.5-b)*.02,_+=(.5-_)*.02),o.setTransform(p,0,0,p,0,0),o.clearRect(0,0,c,h);let I=b*c,C=_*h,U=34,H=l?0:g,F=(z,O)=>{let Y=z-I,lt=O-C,rt=Y*Y+lt*lt,Ot=H*Math.exp(-rt/(U*U))/Math.max(8,Math.sqrt(rt));return[z+Y*Ot,O+lt*Ot]},V=8;o.lineWidth=1.1;for(let z=0;z<2;z++){let O=Math.floor(z===0?c/V:h/V);for(let Y=1;Y<O;Y++){o.strokeStyle=Y%2?"rgba(255,246,232,.5)":"rgba(255,246,232,.32)",o.beginPath();let lt=26;for(let rt=0;rt<=lt;rt++){let Ot=rt/lt,[bt,Bt]=z===0?F(Y*V,Ot*h):F(Ot*c,Y*V);rt===0?o.moveTo(bt,Bt):o.lineTo(bt,Bt)}o.stroke()}}if(H>.5){let z=o.createRadialGradient(I,C,0,I,C,U*1.2);z.addColorStop(0,`rgba(255,240,215,${Math.min(.28,H*.025)})`),z.addColorStop(1,"rgba(255,240,215,0)"),o.fillStyle=z,o.fillRect(0,0,c,h)}};return u=requestAnimationFrame(D),()=>{cancelAnimationFrame(u),T.disconnect(),r.removeEventListener("pointerenter",x),r.removeEventListener("pointermove",w),r.removeEventListener("pointerleave",A),r.removeEventListener("pointerdown",N),n&&removeEventListener("lab:balldrop",L)}},[n]),(0,Lu.jsxs)("a",{ref:i,id:n,href:e,className:"lab-strings",children:[(0,Lu.jsx)("canvas",{ref:a,"aria-hidden":!0}),(0,Lu.jsx)("span",{className:"lab-strings__label",children:t})]})}var oe=Pt($t());function KU(){let[e,t]=(0,Hl.useState)("idle"),[n,i]=(0,Hl.useState)(0),[a,r]=(0,Hl.useState)(!1);return(0,Hl.useEffect)(()=>{if(e!=="loading")return;let s=setInterval(()=>i(o=>a?1:o+(.9-o)*.08),120);return()=>clearInterval(s)},[e,a]),(0,oe.jsxs)("div",{className:"lab-map",children:[e!=="idle"&&(0,oe.jsx)("iframe",{src:bn.mapsEmbed,title:"Gell\xE9rt Szabadid\u0151k\xF6zpont a t\xE9rk\xE9pen",referrerPolicy:"no-referrer-when-downgrade",onLoad:()=>{r(!0),i(1)},style:{opacity:e==="ready"?1:0}}),e!=="ready"&&(0,oe.jsxs)("div",{className:"lab-map__cover",children:[(0,oe.jsx)("img",{src:"img/courts-13-14.jpg",alt:""}),(0,oe.jsx)("div",{className:"lab-map__inner",children:e==="idle"?(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)("p",{className:"h4",children:[bn.address.zip," ",bn.address.city,", ",bn.address.street]}),(0,oe.jsx)("p",{children:"A t\xE9rk\xE9p a Google Maps szolg\xE1ltat\xE1s\xE1t t\xF6lti be."}),(0,oe.jsx)("button",{type:"button",className:"btn btn--lime",onClick:()=>t("loading"),children:"T\xE9rk\xE9p bet\xF6lt\xE9se"})]}):(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(Ef,{progress:n,capacity:18,tone:"dark",onFull:()=>setTimeout(()=>t("ready"),300)}),(0,oe.jsx)("p",{className:"lab-map__loading",children:"T\xE9rk\xE9p bet\xF6lt\xE9se\u2026"})]})})]})]})}function xT(){return(0,oe.jsx)("section",{className:"section section--forest lab-finale","aria-labelledby":"lab-finale-title",children:(0,oe.jsxs)("div",{className:"container lab-finale__grid",children:[(0,oe.jsxs)("div",{className:"lab-finale__copy",children:[(0,oe.jsx)("p",{className:"eyebrow eyebrow--light",children:"P\xE1lyafoglal\xE1s"}),(0,oe.jsxs)("h2",{id:"lab-finale-title",className:"h1",children:["Foglalj p\xE1ly\xE1t. ",(0,oe.jsx)("em",{children:"Egy h\xEDv\xE1s."})]}),(0,oe.jsxs)("p",{className:"lead",children:["Telefonon, a recepci\xF3n. ",bn.hours.reception.days,", ",bn.hours.reception.time.replace(/ /g,""),". Egy \xF3ra, t\xEDz alkalom vagy eg\xE9sz szezon."]}),(0,oe.jsx)("div",{className:"lab-finale__cta",children:(0,oe.jsxs)(_T,{href:bn.phoneHref,id:"lab-cta",children:[(0,oe.jsx)("small",{children:"H\xEDvd a recepci\xF3t"}),(0,oe.jsx)("b",{children:bn.phone})]})}),(0,oe.jsx)("p",{className:"lab-finale__hint",children:"Nyomd meg a h\xFArokat. A g\xF6rget\u0151s\xE1v labd\xE1ja is ide \xE9rkezik."}),(0,oe.jsxs)("div",{className:"lab-finale__tags",children:[(0,oe.jsx)(Ze,{n:"26",name:"String-bed button",dark:!0}),(0,oe.jsx)(Ze,{n:"30",name:"Ball progress lands here",dark:!0})]})]}),(0,oe.jsxs)("div",{className:"lab-finale__map",children:[(0,oe.jsx)(KU,{}),(0,oe.jsx)(Ze,{n:"42",name:"Ball basket while the map loads",dark:!0})]})]})})}var Vn=Pt($t());function yT(){return(0,Vn.jsxs)("div",{className:"lab",children:[(0,Vn.jsx)(tM,{}),(0,Vn.jsx)(eM,{}),(0,Vn.jsx)(K2,{}),(0,Vn.jsx)(J2,{}),(0,Vn.jsx)(c_,{}),(0,Vn.jsx)($2,{}),(0,Vn.jsx)(nT,{}),(0,Vn.jsx)(iT,{}),(0,Vn.jsx)(sT,{}),(0,Vn.jsx)(c_,{tone:"dark",tag:!1}),(0,Vn.jsx)(mT,{}),(0,Vn.jsx)(gT,{}),(0,Vn.jsx)(xT,{})]})}var ST=Pt($t());document.documentElement.classList.add("js");(0,bT.createRoot)(document.getElementById("root")).render((0,ST.jsx)(yT,{}));
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
