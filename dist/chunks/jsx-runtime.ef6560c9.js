import{r as a}from"./index.25d3942f.js";let o=[],v=t=>{let e,u=[],n={lc:0,value:t,set(r){n.value=r,n.notify()},get(){return n.lc||n.listen(()=>{})(),n.value},notify(r){e=u;let i=!o.length;for(let s=0;s<e.length;s++)o.push(e[s],n.value,r);if(i){for(let s=0;s<o.length;s+=3)o[s](o[s+1],o[s+2]);o.length=0}},listen(r){return u===e&&(u=u.slice()),n.lc=u.push(r),()=>{u===e&&(u=u.slice());let i=u.indexOf(r);~i&&(u.splice(i,1),n.lc--)}},subscribe(r){let i=n.listen(r);return r(n.value),i},off(){}};return n};function S(t,e,u){let n=new Set([...e,void 0]);return t.listen((r,i)=>{n.has(i)&&u(r,i)})}var p={exports:{}},y={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=a.exports;function x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _=typeof Object.is=="function"?Object.is:x,m=l.useState,h=l.useEffect,E=l.useLayoutEffect,g=l.useDebugValue;function k(t,e){var u=e(),n=m({inst:{value:u,getSnapshot:e}}),r=n[0].inst,i=n[1];return E(function(){r.value=u,r.getSnapshot=e,c(r)&&i({inst:r})},[t,u,e]),h(function(){return c(r)&&i({inst:r}),t(function(){c(r)&&i({inst:r})})},[t]),g(u),u}function c(t){var e=t.getSnapshot;t=t.value;try{var u=e();return!_(t,u)}catch{return!0}}function w(t,e){return e()}var O=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?w:k;y.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:O;(function(t){t.exports=y})(p);function T(t,e={}){let u=a.exports.useCallback(r=>e.keys?S(t,e.keys,r):t.listen(r),[e.keys,t]),n=t.get.bind(t);return p.exports.useSyncExternalStore(u,n,n)}const b=["jeux","outils","sites","blabla"],q=v([...b]);var j={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=a.exports,$=Symbol.for("react.element"),R=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,D=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,u){var n,r={},i=null,s=null;u!==void 0&&(i=""+u),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)P.call(e,n)&&!I.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:$,type:t,key:i,ref:s,props:r,_owner:D.current}}f.Fragment=R;f.jsx=d;f.jsxs=d;(function(t){t.exports=f})(j);export{q as a,b as f,j,T as u};
