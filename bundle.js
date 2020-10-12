window.addEventListener('DOMContentLoaded', function() {
  
   var activityHandler = null
   
   navigator.mozSetMessageHandler('activity', function(activityRequest) {
    let option = activityRequest.source

    if(option.name === "kaios") {
      activityHandler = activityRequest
    }
  })
  
  
}, false)

!function(t){"use strict";function e(t){if(!b(t))return $r;y(t.objectMaxDepth)&&($r.objectMaxDepth=n(t.objectMaxDepth)?t.objectMaxDepth:NaN),y(t.urlErrorParamsEnabled)&&T(t.urlErrorParamsEnabled)&&($r.urlErrorParamsEnabled=t.urlErrorParamsEnabled)}function n(t){return C(t)&&0<t}function r(t,e){return e=e||Error,function(){var n,r=arguments[0];for(n="["+(t?t+":":"")+r+"] http://errors.angularjs.org/1.7.4/"+(t?t+"/":"")+r,r=1;r<arguments.length;r++){n=n+(1==r?"?":"&")+"p"+(r-1)+"=";var i,o=encodeURIComponent;i=arguments[r],i="function"==typeof i?i.toString().replace(/ \{[\s\S]*$/,""):void 0===i?"undefined":"string"!=typeof i?JSON.stringify(i):i,n+=o(i)}return new e(n)}}function i(t){if(null==t||M(t))return!1;if(E(t)||x(t)||fr&&t instanceof fr)return!0;var e="length"in Object(t)&&t.length;return C(e)&&(0<=e&&e-1 in t||"function"==typeof t.item)}function o(t,e,n){var r,a;if(t)if(A(t))for(r in t)"prototype"!==r&&"length"!==r&&"name"!==r&&t.hasOwnProperty(r)&&e.call(n,t[r],r,t);else if(E(t)||i(t)){var s="object"!=typeof t;for(r=0,a=t.length;r<a;r++)(s||r in t)&&e.call(n,t[r],r,t)}else if(t.forEach&&t.forEach!==o)t.forEach(e,n,t);else if(w(t))for(r in t)e.call(n,t[r],r,t);else if("function"==typeof t.hasOwnProperty)for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t);else for(r in t)mr.call(t,r)&&e.call(n,t[r],r,t);return t}function a(t,e,n){for(var r=Object.keys(t).sort(),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function s(t){return function(e,n){t(n,e)}}function u(){return++kr}function c(t,e,n){for(var r=t.$$hashKey,i=0,o=e.length;i<o;++i){var a=e[i];if(b(a)||A(a))for(var s=Object.keys(a),u=0,l=s.length;u<l;u++){var f=s[u],h=a[f];n&&b(h)?S(h)?t[f]=new Date(h.valueOf()):O(h)?t[f]=new RegExp(h):h.nodeName?t[f]=h.cloneNode(!0):I(h)?t[f]=h.clone():(b(t[f])||(t[f]=E(h)?[]:{}),c(t[f],[h],!0)):t[f]=h}}return r?t.$$hashKey=r:delete t.$$hashKey,t}function l(t){return c(t,yr.call(arguments,1),!1)}function f(t){return c(t,yr.call(arguments,1),!0)}function h(t){return parseInt(t,10)}function p(t,e){return l(Object.create(t),e)}function $(){}function d(t){return t}function m(t){return function(){return t}}function v(t){return A(t.toString)&&t.toString!==xr}function g(t){return void 0===t}function y(t){return void 0!==t}function b(t){return null!==t&&"object"==typeof t}function w(t){return null!==t&&"object"==typeof t&&!Cr(t)}function x(t){return"string"==typeof t}function C(t){return"number"==typeof t}function S(t){return"[object Date]"===xr.call(t)}function E(t){return Array.isArray(t)||t instanceof Array}function k(t){switch(xr.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return t instanceof Error}}function A(t){return"function"==typeof t}function O(t){return"[object RegExp]"===xr.call(t)}function M(t){return t&&t.window===t}function V(t){return t&&t.$evalAsync&&t.$watch}function T(t){return"boolean"==typeof t}function N(t){return t&&C(t.length)&&Or.test(xr.call(t))}function I(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function P(t){var e={};t=t.split(",");var n;for(n=0;n<t.length;n++)e[t[n]]=!0;return e}function j(t){return vr(t.nodeName||t[0]&&t[0].nodeName)}function R(t,e){var n=t.indexOf(e);return 0<=n&&t.splice(n,1),n}function D(t,e,r){function i(t,e,n){if(0>--n)return"...";var r,i=e.$$hashKey;if(E(t)){r=0;for(var o=t.length;r<o;r++)e.push(a(t[r],n))}else if(w(t))for(r in t)e[r]=a(t[r],n);else if(t&&"function"==typeof t.hasOwnProperty)for(r in t)t.hasOwnProperty(r)&&(e[r]=a(t[r],n));else for(r in t)mr.call(t,r)&&(e[r]=a(t[r],n));return i?e.$$hashKey=i:delete e.$$hashKey,e}function a(t,e){if(!b(t))return t;var n=u.indexOf(t);if(-1!==n)return c[n];if(M(t)||V(t))throw Sr("cpws");var n=!1,r=s(t);return void 0===r&&(r=E(t)?[]:Object.create(Cr(t)),n=!0),u.push(t),c.push(r),n?i(t,r,e):r}function s(t){switch(xr.call(t)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new t.constructor(a(t.buffer),t.byteOffset,t.length);case"[object ArrayBuffer]":if(!t.slice){var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}return t.slice(0);case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new t.constructor(t.valueOf());case"[object RegExp]":return e=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0]),e.lastIndex=t.lastIndex,e;case"[object Blob]":return new t.constructor([t],{type:t.type})}if(A(t.cloneNode))return t.cloneNode(!0)}var u=[],c=[];if(r=n(r)?r:NaN,e){if(N(e)||"[object ArrayBuffer]"===xr.call(e))throw Sr("cpta");if(t===e)throw Sr("cpi");return E(e)?e.length=0:o(e,function(t,n){"$$hashKey"!==n&&delete e[n]}),u.push(t),c.push(e),i(t,e,r)}return a(t,r)}function U(t,e){return t===e||t!==t&&e!==e}function L(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var n,r=typeof t;if(r===typeof e&&"object"===r){if(!E(t)){if(S(t))return!!S(e)&&U(t.getTime(),e.getTime());if(O(t))return!!O(e)&&t.toString()===e.toString();if(V(t)||V(e)||M(t)||M(e)||E(e)||S(e)||O(e))return!1;r=ft();for(n in t)if("$"!==n.charAt(0)&&!A(t[n])){if(!L(t[n],e[n]))return!1;r[n]=!0}for(n in e)if(!(n in r)&&"$"!==n.charAt(0)&&y(e[n])&&!A(e[n]))return!1;return!0}if(!E(e))return!1;if((r=t.length)===e.length){for(n=0;n<r;n++)if(!L(t[n],e[n]))return!1;return!0}}return!1}function _(t,e,n){return t.concat(yr.call(e,n))}function F(t,e){var n=2<arguments.length?yr.call(arguments,2):[];return!A(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,_(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function q(e,n){var r=n;return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?r=void 0:M(n)?r="$WINDOW":n&&t.document===n?r="$DOCUMENT":V(n)&&(r="$SCOPE"),r}function H(t,e){if(!g(t))return C(e)||(e=e?2:null),JSON.stringify(t,q,e)}function B(t){return x(t)?JSON.parse(t):t}function z(t,e){t=t.replace(Ir,"");var n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return Ar(n)?e:n}function W(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function G(t,e,n){n=n?-1:1;var r=t.getTimezoneOffset();return e=z(e,r),W(t,n*(e-r))}function K(t){t=fr(t).clone().empty();var e=fr("<div></div>").append(t).html();try{return t[0].nodeType===Ur?vr(e):e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(t,e){return"<"+vr(e)})}catch(t){return vr(e)}}function J(t){try{return decodeURIComponent(t)}catch(t){}}function Z(t){var e={};return o((t||"").split("&"),function(t){var n,r,i;t&&(r=t=t.replace(/\+/g,"%20"),n=t.indexOf("="),-1!==n&&(r=t.substring(0,n),i=t.substring(n+1)),r=J(r),y(r)&&(i=!y(i)||J(i),mr.call(e,r)?E(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i))}),e}function Y(t){var e=[];return o(t,function(t,n){E(t)?o(t,function(t){e.push(X(n,!0)+(!0===t?"":"="+X(t,!0)))}):e.push(X(n,!0)+(!0===t?"":"="+X(t,!0)))}),e.length?e.join("&"):""}function Q(t){return X(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function X(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function tt(t,e){var n,r,i=Pr.length;for(r=0;r<i;++r)if(n=Pr[r]+e,x(n=t.getAttribute(n)))return n;return null}function et(e,n){var r,i,a={};if(o(Pr,function(t){t+="app",!r&&e.hasAttribute&&e.hasAttribute(t)&&(r=e,i=e.getAttribute(t))}),o(Pr,function(t){t+="app";var n;!r&&(n=e.querySelector("["+t.replace(":","\\:")+"]"))&&(r=n,i=n.getAttribute(t))}),r)if(jr)a.strictDi=null!==tt(r,"strict-di"),n(r,i?[i]:[],a);else try{t.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.")}catch(t){}}function nt(e,n,r){b(r)||(r={}),r=l({strictDi:!1},r);var i=function(){if(e=fr(e),e.injector()){var i=e[0]===t.document?"document":K(e);throw Sr("btstrpd",i.replace(/</,"&lt;").replace(/>/,"&gt;"))}return n=n||[],n.unshift(["$provide",function(t){t.value("$rootElement",e)}]),r.debugInfoEnabled&&n.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),n.unshift("ng"),i=Kt(n,r.strictDi),i.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),i},a=/^NG_ENABLE_DEBUG_INFO!/,s=/^NG_DEFER_BOOTSTRAP!/;if(t&&a.test(t.name)&&(r.debugInfoEnabled=!0,t.name=t.name.replace(a,"")),t&&!s.test(t.name))return i();t.name=t.name.replace(s,""),Er.resumeBootstrap=function(t){return o(t,function(t){n.push(t)}),i()},A(Er.resumeDeferredBootstrap)&&Er.resumeDeferredBootstrap()}function rt(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function it(t){if(!(t=Er.element(t).injector()))throw Sr("test");return t.get("$$testability")}function ot(t,e){return e=e||"_",t.replace(Rr,function(t,n){return(n?e:"")+t.toLowerCase()})}function at(t,e,n){if(!t)throw Sr("areq",e||"?",n||"required");return t}function st(t,e,n){return n&&E(t)&&(t=t[t.length-1]),at(A(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function ut(t,e){if("hasOwnProperty"===t)throw Sr("badname",e)}function ct(t,e,n){if(!e)return t;e=e.split(".");for(var r,i=t,o=e.length,a=0;a<o;a++)r=e[a],t&&(t=(i=t)[r]);return!n&&A(t)?F(i,t):t}function lt(t){for(var e,n=t[0],r=t[t.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(e||t[i]!==n)&&(e||(e=fr(yr.call(t,0,i))),e.push(n));return e||t}function ft(){return Object.create(null)}function ht(t){if(null==t)return"";switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=!v(t)||E(t)||S(t)?H(t):t.toString()}return t}function pt(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng");return t=e(t,"angular",Object),t.$$minErr=t.$$minErr||r,e(t,"module",function(){var t={};return function(r,o,a){var s={};if("hasOwnProperty"===r)throw i("badname","module");return o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,e,n,r){return r||(r=u),function(){return r[n||"push"]([t,e,arguments]),h}}function e(t,e,n){return n||(n=u),function(i,o){return o&&A(o)&&(o.$$moduleName=r),n.push([t,e,arguments]),h}}if(!o)throw n("nomod",r);var u=[],c=[],l=[],f=t("$injector","invoke","push",c),h={_invokeQueue:u,_configBlocks:c,_runBlocks:l,info:function(t){if(y(t)){if(!b(t))throw i("aobj","value");return s=t,this}return s},requires:o,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:e("$provide","decorator",c),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),component:e("$compileProvider","component"),config:f,run:function(t){return l.push(t),this}};return a&&f(a),h})}})}function $t(t,e){if(E(t)){e=e||[];for(var n=0,r=t.length;n<r;n++)e[n]=t[n]}else if(b(t))for(n in e=e||{},t)"$"===n.charAt(0)&&"$"===n.charAt(1)||(e[n]=t[n]);return e||t}function dt(t,e){var r=[];return n(e)&&(t=Er.copy(t,null,e)),JSON.stringify(t,function(t,e){if(e=q(t,e),b(e)){if(0<=r.indexOf(e))return"...";r.push(e)}return e})}function mt(t,e){return e.toUpperCase()}function vt(t){return t.replace(qr,mt)}function gt(t){return 1===(t=t.nodeType)||!t||9===t}function yt(t,e){var n,r,i=e.createDocumentFragment(),a=[];if(Gr.test(t)){for(n=i.appendChild(e.createElement("div")),r=(Kr.exec(t)||["",""])[1].toLowerCase(),r=Zr[r]||Zr._default,n.innerHTML=r[1]+t.replace(Jr,"<$1></$2>")+r[2],r=r[0];r--;)n=n.lastChild;a=_(a,n.childNodes),n=i.firstChild,n.textContent=""}else a.push(e.createTextNode(t));return i.textContent="",i.innerHTML="",o(a,function(t){i.appendChild(t)}),i}function bt(e){if(e instanceof bt)return e;var n;if(x(e)&&(e=Mr(e),n=!0),!(this instanceof bt)){if(n&&"<"!==e.charAt(0))throw zr("nosel");return new bt(e)}if(n){n=t.document;var r;e=(r=Wr.exec(e))?[n.createElement(r[1])]:(r=yt(e,n))?r.childNodes:[],Nt(this,e)}else A(e)?Ut(e):Nt(this,e)}function wt(t){return t.cloneNode(!0)}function xt(t,e){!e&&gt(t)&&fr.cleanData([t]),t.querySelectorAll&&fr.cleanData(t.querySelectorAll("*"))}function Ct(t){for(var e in t)return!1;return!0}function St(t){var e=t.ng339,n=e&&_r[e],r=n&&n.events,n=n&&n.data;n&&!Ct(n)||r&&!Ct(r)||(delete _r[e],t.ng339=void 0)}function Et(t,e,n,r){if(y(r))throw zr("offargs");var i=(r=At(t))&&r.events,a=r&&r.handle;if(a){if(e){var s=function(e){var r=i[e];y(n)&&R(r||[],n),y(n)&&r&&0<r.length||(t.removeEventListener(e,a),delete i[e])};o(e.split(" "),function(t){s(t),Br[t]&&s(Br[t])})}else for(e in i)"$destroy"!==e&&t.removeEventListener(e,a),delete i[e];St(t)}}function kt(t,e){var n=t.ng339;(n=n&&_r[n])&&(e?delete n.data[e]:n.data={},St(t))}function At(t,e){var n=t.ng339,n=n&&_r[n];return e&&!n&&(t.ng339=n=++Fr,n=_r[n]={events:{},data:{},handle:void 0}),n}function Ot(t,e,n){if(gt(t)){var r,i=y(n),o=!i&&e&&!b(e),a=!e;if(t=(t=At(t,!o))&&t.data,i)t[vt(e)]=n;else{if(a)return t;if(o)return t&&t[vt(e)];for(r in e)t[vt(r)]=e[r]}}}function Mt(t,e){return!!t.getAttribute&&-1<(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")}function Vt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=n;o(e.split(" "),function(t){t=Mr(t),r=r.replace(" "+t+" "," ")}),r!==n&&t.setAttribute("class",Mr(r))}}function Tt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=n;o(e.split(" "),function(t){t=Mr(t),-1===r.indexOf(" "+t+" ")&&(r+=t+" ")}),r!==n&&t.setAttribute("class",Mr(r))}}function Nt(t,e){if(e)if(e.nodeType)t[t.length++]=e;else{var n=e.length;if("number"==typeof n&&e.window!==e){if(n)for(var r=0;r<n;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function It(t,e){return Pt(t,"$"+(e||"ngController")+"Controller")}function Pt(t,e,n){for(9===t.nodeType&&(t=t.documentElement),e=E(e)?e:[e];t;){for(var r=0,i=e.length;r<i;r++)if(y(n=fr.data(t,e[r])))return n;t=t.parentNode||11===t.nodeType&&t.host}}function jt(t){for(xt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function Rt(t,e){e||xt(t);var n=t.parentNode;n&&n.removeChild(t)}function Dt(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):fr(n).on("load",e)}function Ut(e){function n(){t.document.removeEventListener("DOMContentLoaded",n),t.removeEventListener("load",n),e()}"complete"===t.document.readyState?t.setTimeout(e):(t.document.addEventListener("DOMContentLoaded",n),t.addEventListener("load",n))}function Lt(t,e){var n=Xr[e.toLowerCase()];return n&&ti[j(t)]&&n}function _t(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=e[r||n.type],o=i?i.length:0;if(o){if(g(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return!0===n.immediatePropagationStopped};var s=i.specialHandlerWrapper||Ft;1<o&&(i=$t(i));for(var u=0;u<o;u++)n.isImmediatePropagationStopped()||s(t,n,i[u])}};return n.elem=t,n}function Ft(t,e,n){n.call(t,e)}function qt(t,e,n){var r=e.relatedTarget;r&&(r===t||Yr.call(t,r))||n.call(t,e)}function Ht(){this.$get=function(){return l(bt,{hasClass:function(t,e){return t.attr&&(t=t[0]),Mt(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),Tt(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),Vt(t,e)}})}}function Bt(t,e){var n=t&&t.$$hashKey;return n?("function"==typeof n&&(n=t.$$hashKey()),n):(n=typeof t,n="function"===n||"object"===n&&null!==t?t.$$hashKey=n+":"+(e||u)():n+":"+t)}function zt(){this._keys=[],this._values=[],this._lastKey=NaN,this._lastIndex=-1}function Wt(t){return t=Function.prototype.toString.call(t).replace(ci,""),t.match(oi)||t.match(ai)}function Gt(t){return(t=Wt(t))?"function("+(t[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Kt(t,e){function n(t){return function(e,n){if(!b(e))return t(e,n);o(e,s(t))}}function r(t,e){if(ut(t,"service"),(A(e)||E(e))&&(e=$.instantiate(e)),!e.$get)throw li("pget",t);return p[t+"Provider"]=e}function i(t,e){return function(){var n=y.invoke(e,this);if(g(n))throw li("undef",t);return n}}function a(t,e,n){return r(t,{$get:!1!==n?i(t,e):e})}function u(t){at(g(t)||E(t),"modulesToLoad","not an array");var e,n=[];return o(t,function(t){function r(t){var e,n;for(e=0,n=t.length;e<n;e++){var r=t[e],i=$.get(r[0]);i[r[1]].apply(i,r[2])}}if(!h.get(t)){h.set(t,!0);try{x(t)?(e=pr(t),y.modules[t]=e,n=n.concat(u(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):A(t)?n.push($.invoke(t)):E(t)?n.push($.invoke(t)):st(t,"module")}catch(e){throw E(t)&&(t=t[t.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),li("modulerr",t,e.stack||e.message||e)}}}),n}function c(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===l)throw li("cdep",e+" <- "+f.join(" <- "));return t[e]}try{return f.unshift(e),t[e]=l,t[e]=n(e,r),t[e]}catch(n){throw t[e]===l&&delete t[e],n}finally{f.shift()}}function i(t,n,i){var o=[];t=Kt.$$annotate(t,e,i);for(var a=0,s=t.length;a<s;a++){var u=t[a];if("string"!=typeof u)throw li("itkn",u);o.push(n&&n.hasOwnProperty(u)?n[u]:r(u,i))}return o}return{invoke:function(t,e,n,r){if("string"==typeof n&&(r=n,n=null),n=i(t,n,r),E(t)&&(t=t[t.length-1]),r=t,lr||"function"!=typeof r)r=!1;else{var o=r.$$ngIsClass;T(o)||(o=r.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(r))),r=o}return r?(n.unshift(null),new(Function.prototype.bind.apply(t,n))):t.apply(e,n)},instantiate:function(t,e,n){var r=E(t)?t[t.length-1]:t;return t=i(t,e,n),t.unshift(null),new(Function.prototype.bind.apply(r,t))},get:r,annotate:Kt.$$annotate,has:function(e){return p.hasOwnProperty(e+"Provider")||t.hasOwnProperty(e)}}}e=!0===e;var l={},f=[],h=new ri,p={$provide:{provider:n(r),factory:n(a),service:n(function(t,e){return a(t,["$injector",function(t){return t.instantiate(e)}])}),value:n(function(t,e){return a(t,m(e),!1)}),constant:n(function(t,e){ut(t,"constant"),p[t]=e,d[t]=e}),decorator:function(t,e){var n=$.get(t+"Provider"),r=n.$get;n.$get=function(){var t=y.invoke(r,n);return y.invoke(e,null,{$delegate:t})}}}},$=p.$injector=c(p,function(t,e){throw Er.isString(e)&&f.push(e),li("unpr",f.join(" <- "))}),d={},v=c(d,function(t,e){var n=$.get(t+"Provider",e);return y.invoke(n.$get,n,void 0,t)}),y=v;p.$injectorProvider={$get:m(v)},y.modules=$.modules=ft();var w=u(t),y=v.get("$injector");return y.strictDi=e,o(w,function(t){t&&y.invoke(t)}),y.loadNewModules=function(t){o(u(t),function(t){t&&y.invoke(t)})},y}function Jt(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return Array.prototype.some.call(t,function(t){if("a"===j(t))return e=t,!0}),e}function o(t){if(t){t.scrollIntoView();var n;n=a.yOffset,A(n)?n=n():I(n)?(n=n[0],n="fixed"!==e.getComputedStyle(n).position?0:n.getBoundingClientRect().bottom):C(n)||(n=0),n&&(t=t.getBoundingClientRect().top,e.scrollBy(0,t-n))}else e.scrollTo(0,0)}function a(t){t=x(t)?t:C(t)?t.toString():n.hash();var e;t?(e=s.getElementById(t))?o(e):(e=i(s.getElementsByName(t)))?o(e):"top"===t&&o(null):o(null)}var s=e.document;return t&&r.$watch(function(){return n.hash()},function(t,e){t===e&&""===t||Dt(function(){r.$evalAsync(a)})}),a}]}function Zt(t,e){return t||e?t?e?(E(t)&&(t=t.join(" ")),E(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function Yt(t){x(t)&&(t=t.split(" "));var e=ft();return o(t,function(t){t.length&&(e[t]=!0)}),e}function Qt(t){return b(t)?t:{}}function Xt(t,e,n,r,i){function a(){x=null,u()}function s(){v=C(),v=g(v)?null:v,L(v,k)&&(v=k),y=k=v}function u(){var t=y;s(),b===c.url()&&t===v||(b=c.url(),y=v,o(S,function(t){t(c.url(),v)}))}var c=this,l=t.location,f=t.history,h=t.setTimeout,p=t.clearTimeout,d={},m=i(n);c.isMock=!1,c.$$completeOutstandingRequest=m.completeTask,c.$$incOutstandingRequestCount=m.incTaskCount,c.notifyWhenNoOutstandingRequests=m.notifyWhenNoPendingTasks;var v,y,b=l.href,w=e.find("base"),x=null,C=r.history?function(){try{return f.state}catch(t){}}:$;s(),c.url=function(e,n,i){if(g(i)&&(i=null),l!==t.location&&(l=t.location),f!==t.history&&(f=t.history),e){var o=y===i;if(b===e&&(!r.history||o))return c;var a=b&&Te(b)===Te(e);return b=e,y=i,!r.history||a&&o?(a||(x=e),n?l.replace(e):a?(n=l,i=e.indexOf("#"),i=-1===i?"":e.substr(i),n.hash=i):l.href=e,l.href!==e&&(x=e)):(f[n?"replaceState":"pushState"](i,"",e),s()),x&&(x=e),c}return(x||l.href).replace(/#$/,"")},c.state=function(){return v};var S=[],E=!1,k=null;c.onUrlChange=function(e){return E||(r.history&&fr(t).on("popstate",a),fr(t).on("hashchange",a),E=!0),S.push(e),e},c.$$applicationDestroyed=function(){fr(t).off("hashchange popstate",a)},c.$$checkUrlChange=u,c.baseHref=function(){var t=w.attr("href");return t?t.replace(/^(https?:)?\/\/[^\/]*/,""):""},c.defer=function(t,e,n){var r;return e=e||0,n=n||m.DEFAULT_TASK_TYPE,m.incTaskCount(n),r=h(function(){delete d[r],m.completeTask(t,n)},e),d[r]=n,r},c.defer.cancel=function(t){if(d.hasOwnProperty(t)){var e=d[t];return delete d[t],p(t),m.completeTask($,e),!0}return!1}}function te(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(t,e,n,r,i){return new Xt(t,r,e,n,i)}]}function ee(){this.$get=function(){function t(t,n){function i(t){t!==h&&(p?p===t&&(p=t.n):p=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!==e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid",t);var a=0,s=l({},n,{id:t}),u=ft(),c=n&&n.capacity||Number.MAX_VALUE,f=ft(),h=null,p=null;return e[t]={put:function(t,e){if(!g(e)){if(c<Number.MAX_VALUE){i(f[t]||(f[t]={key:t}))}return t in u||a++,u[t]=e,a>c&&this.remove(p.key),e}},get:function(t){if(c<Number.MAX_VALUE){var e=f[t];if(!e)return;i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=f[t];if(!e)return;e===h&&(h=e.p),e===p&&(p=e.n),o(e.n,e.p),delete f[t]}t in u&&(delete u[t],a--)},removeAll:function(){u=ft(),a=0,f=ft(),h=p=null},destroy:function(){f=s=u=null,delete e[t]},info:function(){return l({},s,{size:a})}}}var e={};return t.info=function(){var t={};return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function ne(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function re(e,n){function r(t,e,n){var r=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,i=ft();return o(t,function(t,o){if((t=t.trim())in C)i[o]=C[t];else{var a=t.match(r);if(!a)throw gi("iscp",e,o,t,n?"controller bindings definition":"isolate scope definition");i[o]={mode:a[1][0],collection:"*"===a[2],optional:"?"===a[3],attrName:a[4]||o},a[4]&&(C[t]=i[o])}}),i}function i(t){var e=t.charAt(0);if(!e||e!==vr(e))throw gi("baddir",t);if(t!==t.trim())throw gi("baddir",t)}function a(t){var e=t.require||t.controller&&t.name;return!E(e)&&b(e)&&o(e,function(t,n){var r=t.match(v);t.substring(r[0].length)||(e[n]=r[0]+n)}),e}var u={},c=/^\s*directive:\s*([\w-]+)\s+(.*)$/,f=/(([\w-]+)(?::([^;]+))?;?)/,h=P("ngSrc,ngSrcset,src,srcset"),v=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,w=/^(on[a-z]+|formaction)$/,C=ft();this.directive=function t(n,r){return at(n,"name"),ut(n,"directive"),x(n)?(i(n),at(r,"directiveFactory"),u.hasOwnProperty(n)||(u[n]=[],e.factory(n+"Directive",["$injector","$exceptionHandler",function(t,e){var r=[];return o(u[n],function(i,o){try{var s=t.invoke(i);A(s)?s={compile:m(s)}:!s.compile&&s.link&&(s.compile=m(s.link)),s.priority=s.priority||0,s.index=o,s.name=s.name||n,s.require=a(s);var u=s,c=s.restrict;if(c&&(!x(c)||!/[EACM]/.test(c)))throw gi("badrestrict",c,n);u.restrict=c||"EA",s.$$moduleName=i.$$moduleName,r.push(s)}catch(t){e(t)}}),r}])),u[n].push(r)):o(n,s(t)),this},this.component=function t(e,n){function r(t){function e(e){return A(e)||E(e)?function(n,r){return t.invoke(e,this,{$element:n,$attrs:r})}:e}var r=n.template||n.templateUrl?n.template:"",a={controller:i,controllerAs:ue(n.controller)||n.controllerAs||"$ctrl",template:e(r),templateUrl:e(n.templateUrl),transclude:n.transclude,scope:{},bindToController:n.bindings||{},restrict:"E",require:n.require};return o(n,function(t,e){"$"===e.charAt(0)&&(a[e]=t)}),a}if(!x(e))return o(e,s(F(this,t))),this;var i=n.controller||function(){};return o(n,function(t,e){"$"===e.charAt(0)&&(r[e]=t,A(i)&&(i[e]=t))}),r.$inject=["$injector"],this.directive(e,r)},this.aHrefSanitizationWhitelist=function(t){return y(t)?(n.aHrefSanitizationWhitelist(t),this):n.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return y(t)?(n.imgSrcSanitizationWhitelist(t),this):n.imgSrcSanitizationWhitelist()};var S=!0;this.debugInfoEnabled=function(t){return y(t)?(S=t,this):S};var O=!1;this.strictComponentBindingsEnabled=function(t){return y(t)?(O=t,this):O};var M=10;this.onChangesTtl=function(t){return arguments.length?(M=t,this):M};var N=!0;this.commentDirectivesEnabled=function(t){return arguments.length?(N=t,this):N};var I=!0;this.cssClassDirectivesEnabled=function(t){return arguments.length?(I=t,this):I};var D=ft();this.addPropertySecurityContext=function(t,e,n){var r=t.toLowerCase()+"|"+e.toLowerCase();if(r in D&&D[r]!==n)throw gi("ctxoverride",t,e,D[r],n);return D[r]=n,this},function(){function t(t,e){o(e,function(e){D[e.toLowerCase()]=t})}t(Ki.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),t(Ki.CSS,["*|style"]),t(Ki.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" ")),t(Ki.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" ")),t(Ki.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))}(),this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(e,n,i,a,s,m,y,C,P){function _(){try{if(!--It)throw Ot=void 0,gi("infchng",M);y.$apply(function(){for(var t=0,e=Ot.length;t<e;++t)try{Ot[t]()}catch(t){i(t)}Ot=void 0})}finally{It++}}function q(t,e){if(!t)return t;if(!x(t))throw gi("srcset",e,t.toString());for(var n="",r=Mr(t),i=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,i=/\s/.test(r)?i:/(,)/,r=r.split(i),i=Math.floor(r.length/2),o=0;o<i;o++)var a=2*o,n=n+C.getTrustedMediaUrl(Mr(r[a])),n=n+" "+Mr(r[a+1]);return r=Mr(r[2*o]).split(/\s/),n+=C.getTrustedMediaUrl(Mr(r[0])),2===r.length&&(n+=" "+Mr(r[1])),n}function H(t,e){if(e){var n,r,i,o=Object.keys(e);for(n=0,r=o.length;n<r;n++)i=o[n],this[i]=e[i]}else this.$attr={};this.$$element=t}function B(t,e,n){Vt.innerHTML="<span "+e+">",e=Vt.firstChild.attributes;var r=e[0];e.removeNamedItem(r.name),r.value=n,t.attributes.setNamedItem(r)}function z(t,e){try{t.addClass(e)}catch(t){}}function W(t,e,n,r,i){t instanceof fr||(t=fr(t));var o=G(t,e,t,n,r,i);W.$$addScopeClass(t);var a=null;return function(e,n,r){if(!t)throw gi("multilink");at(e,"scope"),i&&i.needsNewScope&&(e=e.$parent.$new()),r=r||{};var s=r.parentBoundTranscludeFn,u=r.transcludeControllers;if(r=r.futureParentElement,s&&s.$$boundTransclude&&(s=s.$$boundTransclude),a||(a=(r=r&&r[0])&&"foreignobject"!==j(r)&&xr.call(r).match(/SVG/)?"svg":"html"),r="html"!==a?fr(mt(a,fr("<div></div>").append(t).html())):n?Qr.clone.call(t):t,u)for(var c in u)r.data("$"+c+"Controller",u[c].instance);return W.$$addScopeInfo(r,e),n&&n(r,e),o&&o(e,r,r,s),n||(t=o=null),r}}function G(t,e,n,r,i,o){function a(t,n,r,i){var o,a,s,u,c,l,p;if(f)for(p=Array(n.length),u=0;u<h.length;u+=3)o=h[u],p[o]=n[o];else p=n;for(u=0,c=h.length;u<c;)a=p[h[u++]],n=h[u++],o=h[u++],n?(n.scope?(s=t.$new(),W.$$addScopeInfo(fr(a),s)):s=t,l=n.transcludeOnThisElement?Z(t,n.transclude,i):!n.templateOnThisElement&&i?i:!i&&e?Z(t,e):null,n(o,s,a,r,l)):o&&o(t,a.childNodes,void 0,i)}for(var s,u,c,l,f,h=[],p=E(t)||t instanceof fr,$=0;$<t.length;$++)s=new H,11===lr&&J(t,$,p),u=Y(t[$],[],s,0===$?r:void 0,i),(o=u.length?nt(u,t[$],s,e,n,null,[],[],o):null)&&o.scope&&W.$$addScopeClass(s.$$element),s=o&&o.terminal||!(c=t[$].childNodes)||!c.length?null:G(c,o?(o.transcludeOnThisElement||!o.templateOnThisElement)&&o.transclude:e),(o||s)&&(h.push($,o,s),l=!0,f=f||o),o=null;return l?a:null}function J(t,e,n){var r,i=t[e],o=i.parentNode;if(i.nodeType===Ur)for(;(r=o?i.nextSibling:t[e+1])&&r.nodeType===Ur;)i.nodeValue+=r.nodeValue,r.parentNode&&r.parentNode.removeChild(r),n&&r===t[e+1]&&t.splice(e+1,1)}function Z(t,e,n){function r(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}var i,o=r.$$slots=ft();for(i in e.$$slots)o[i]=e.$$slots[i]?Z(t,e.$$slots[i],n):null;return r}function Y(t,e,n,r,o){var a,u=n.$attr;switch(t.nodeType){case 1:a=j(t),ut(e,oe(a),"E",r,o);for(var c,l,h,p,$,d=t.attributes,m=0,v=d&&d.length;m<v;m++){var g,w=!1,C=!1,S=!1,E=!1,k=!1;c=d[m],l=c.name,p=c.value,h=oe(l.toLowerCase()),($=h.match(Dt))?(S="Attr"===$[1],E="Prop"===$[1],k="On"===$[1],l=l.replace(bi,"").toLowerCase().substr(4+$[1].length).replace(/_(.)/g,function(t,e){return e.toUpperCase()})):(g=h.match(Ut))&&ct(g[1])&&(w=l,C=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6)),E||k?(n[h]=p,u[h]=c.name,E?bt(t,e,h,l):e.push(ir(s,y,i,h,l,!1))):(h=oe(l.toLowerCase()),u[h]=l,!S&&n.hasOwnProperty(h)||(n[h]=p,Lt(t,h)&&(n[h]=!0)),xt(t,e,p,h,S),ut(e,h,"A",r,o,w,C))}if("input"===a&&"hidden"===t.getAttribute("type")&&t.setAttribute("autocomplete","off"),!Nt)break;if(u=t.className,b(u)&&(u=u.animVal),x(u)&&""!==u)for(;t=f.exec(u);)h=oe(t[2]),ut(e,h,"C",r,o)&&(n[h]=Mr(t[3])),u=u.substr(t.index+t[0].length);break;case Ur:dt(e,t.nodeValue);break;case 8:if(!Tt)break;Q(t,e,n,r,o)}return e.sort(pt),e}function Q(t,e,n,r,i){try{var o=c.exec(t.nodeValue);if(o){var a=oe(o[1]);ut(e,a,"M",r,i)&&(n[a]=Mr(o[2]))}}catch(t){}}function X(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e))do{if(!t)throw gi("uterdir",e,n);1===t.nodeType&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(0<i);else r.push(t);return fr(r)}function tt(t,e,n){return function(r,i,o,a,s){return i=X(i[0],e,n),t(r,i,o,a,s)}}function et(t,e,n,r,i,o){var a;return t?W(e,n,r,i,o):function(){return a||(a=W(e,n,r,i,o),e=n=o=null),a.apply(this,arguments)}}function nt(e,n,r,a,s,u,c,f,h){function p(t,e,n,r){t&&(n&&(t=tt(t,n,r)),t.require=d.require,t.directiveName=m,(k===d||d.$$isolateScope)&&(t=St(t,{isolateScope:!0})),c.push(t)),e&&(n&&(e=tt(e,n,r)),e.require=d.require,e.directiveName=m,(k===d||d.$$isolateScope)&&(e=St(e,{isolateScope:!0})),f.push(e))}function $(t,e,a,s,u){function h(t,e,n,r){var i;if(V(t)||(r=n,n=e,e=t,t=void 0),I&&(i=y),n||(n=I?x.parent():x),!r)return u(t,e,i,n,T);var o=u.$$slots[r];if(o)return o(t,e,i,n,T);if(g(o))throw gi("noslot",r,K(x))}var p,$,d,m,v,y,w,x;n===a?(s=r,x=r.$$element):(x=fr(a),s=new H(x,r)),v=e,k?m=e.$new(!0):C&&(v=e.$parent),u&&(w=h,w.$$boundTransclude=u,w.isSlotFilled=function(t){return!!u.$$slots[t]}),S&&(y=it(x,s,w,S,m,e,k)),k&&(W.$$addScopeInfo(x,m,!0,!(O&&(O===k||O===k.$$originalDirective))),W.$$addScopeClass(x,!0),m.$$isolateBindings=k.$$isolateBindings,$=At(e,s,m,m.$$isolateBindings,k),$.removeWatches&&m.$on("$destroy",$.removeWatches));for(p in y){$=S[p],d=y[p];var M=$.$$bindings.bindToController;d.instance=d(),x.data("$"+$.name+"Controller",d.instance),d.bindingInfo=At(v,s,d.instance,M,$)}for(o(S,function(t,e){var n=t.require;t.bindToController&&!E(n)&&b(n)&&l(y[e].instance,rt(e,n,x,y))}),o(y,function(t){var e=t.instance;if(A(e.$onChanges))try{e.$onChanges(t.bindingInfo.initialChanges)}catch(t){i(t)}if(A(e.$onInit))try{e.$onInit()}catch(t){i(t)}A(e.$doCheck)&&(v.$watch(function(){e.$doCheck()}),e.$doCheck()),A(e.$onDestroy)&&v.$on("$destroy",function(){e.$onDestroy()})}),p=0,$=c.length;p<$;p++)d=c[p],Et(d,d.isolateScope?m:e,x,s,d.require&&rt(d.directiveName,d.require,x,y),w);var T=e
;for(k&&(k.template||null===k.templateUrl)&&(T=m),t&&t(T,a.childNodes,void 0,u),p=f.length-1;0<=p;p--)d=f[p],Et(d,d.isolateScope?m:e,x,s,d.require&&rt(d.directiveName,d.require,x,y),w);o(y,function(t){t=t.instance,A(t.$postLink)&&t.$postLink()})}h=h||{};for(var d,m,v,y,w,x=-Number.MAX_VALUE,C=h.newScopeDirective,S=h.controllerDirectives,k=h.newIsolateScopeDirective,O=h.templateDirective,M=h.nonTlbTranscludeDirective,T=!1,N=!1,I=h.hasElementTranscludeDirective,P=r.$$element=fr(n),R=a,D=!1,U=!1,L=0,_=e.length;L<_;L++){d=e[L];var q=d.$$start,B=d.$$end;if(q&&(P=X(n,q,B)),v=void 0,x>d.priority)break;if((w=d.scope)&&(d.templateUrl||(b(w)?($t("new/isolated scope",k||C,d,P),k=d):$t("new/isolated scope",k,d,P)),C=C||d),m=d.name,!D&&(d.replace&&(d.templateUrl||d.template)||d.transclude&&!d.$$tlb)){for(w=L+1;D=e[w++];)if(D.transclude&&!D.$$tlb||D.replace&&(D.templateUrl||D.template)){U=!0;break}D=!0}if(!d.templateUrl&&d.controller&&(S=S||ft(),$t("'"+m+"' controller",S[m],d,P),S[m]=d),w=d.transclude)if(T=!0,d.$$tlb||($t("transclusion",M,d,P),M=d),"element"===w)I=!0,x=d.priority,v=P,P=r.$$element=fr(W.$$createComment(m,r[m])),n=P[0],Ct(s,yr.call(v,0),n),R=et(U,v,a,x,u&&u.name,{nonTlbTranscludeDirective:M});else{var z=ft();if(b(w)){v=t.document.createDocumentFragment();var G=ft(),J=ft();o(w,function(t,e){var n="?"===t.charAt(0);t=n?t.substring(1):t,G[t]=e,z[e]=null,J[e]=n}),o(P.contents(),function(e){var n=G[oe(j(e))];n?(J[n]=!0,z[n]=z[n]||t.document.createDocumentFragment(),z[n].appendChild(e)):v.appendChild(e)}),o(J,function(t,e){if(!t)throw gi("reqslot",e)});for(var Z in z)z[Z]&&(R=fr(z[Z].childNodes),z[Z]=et(U,R,a));v=fr(v.childNodes)}else v=fr(wt(n)).contents();P.empty(),R=et(U,v,a,void 0,void 0,{needsNewScope:d.$$isolateScope||d.$$newScope}),R.$$slots=z}if(d.template)if(N=!0,$t("template",O,d,P),O=d,w=A(d.template)?d.template(P,r):d.template,w=Rt(w),d.replace){if(u=d,v=Gr.test(w)?se(mt(d.templateNamespace,Mr(w))):[],n=v[0],1!==v.length||1!==n.nodeType)throw gi("tplrt",m,"");Ct(s,P,n),_={$attr:{}},w=Y(n,[],_);var Q=e.splice(L+1,e.length-(L+1));(k||C)&&st(w,k,C),e=e.concat(w).concat(Q),lt(r,_),_=e.length}else P.html(w);if(d.templateUrl)N=!0,$t("template",O,d,P),O=d,d.replace&&(u=d),$=ht(e.splice(L,e.length-L),P,r,s,T&&R,c,f,{controllerDirectives:S,newScopeDirective:C!==d&&C,newIsolateScopeDirective:k,templateDirective:O,nonTlbTranscludeDirective:M}),_=e.length;else if(d.compile)try{y=d.compile(P,r,R);var nt=d.$$originalDirective||d;A(y)?p(null,F(nt,y),q,B):y&&p(F(nt,y.pre),F(nt,y.post),q,B)}catch(t){i(t,K(P))}d.terminal&&($.terminal=!0,x=Math.max(x,d.priority))}return $.scope=C&&!0===C.scope,$.transcludeOnThisElement=T,$.templateOnThisElement=N,$.transclude=R,h.hasElementTranscludeDirective=I,$}function rt(t,e,n,r){var i;if(x(e)){var a=e.match(v);e=e.substring(a[0].length);var s=a[1]||a[3],a="?"===a[2];if("^^"===s?n=n.parent():i=(i=r&&r[e])&&i.instance,!i){var u="$"+e+"Controller";i="^^"===s&&n[0]&&9===n[0].nodeType?null:s?n.inheritedData(u):n.data(u)}if(!i&&!a)throw gi("ctreq",e,t)}else if(E(e))for(i=[],s=0,a=e.length;s<a;s++)i[s]=rt(t,e[s],n,r);else b(e)&&(i={},o(e,function(e,o){i[o]=rt(t,e,n,r)}));return i||null}function it(t,e,n,r,i,o,a){var s,u=ft();for(s in r){var c=r[s],l={$scope:c===a||c.$$isolateScope?i:o,$element:t,$attrs:e,$transclude:n},f=c.controller;"@"===f&&(f=e[c.name]),l=m(f,l,!0,c.controllerAs),u[c.name]=l,t.data("$"+c.name+"Controller",l.instance)}return u}function st(t,e,n){for(var r=0,i=t.length;r<i;r++)t[r]=p(t[r],{$$isolateScope:e,$$newScope:n})}function ut(t,n,i,o,a,s,c){if(n===a)return null;var l=null;if(u.hasOwnProperty(n)){a=e.get(n+"Directive");for(var f=0,h=a.length;f<h;f++)if(n=a[f],(g(o)||o>n.priority)&&-1!==n.restrict.indexOf(i)){if(s&&(n=p(n,{$$start:s,$$end:c})),!n.$$bindings){var $=l=n,d=n.name,m={isolateScope:null,bindToController:null};if(b($.scope)&&(!0===$.bindToController?(m.bindToController=r($.scope,d,!0),m.isolateScope={}):m.isolateScope=r($.scope,d,!1)),b($.bindToController)&&(m.bindToController=r($.bindToController,d,!0)),m.bindToController&&!$.controller)throw gi("noctrl",d);l=l.$$bindings=m,b(l.isolateScope)&&(n.$$isolateBindings=l.isolateScope)}t.push(n),l=n}}return l}function ct(t){if(u.hasOwnProperty(t))for(var n=e.get(t+"Directive"),r=0,i=n.length;r<i;r++)if(t=n[r],t.multiElement)return!0;return!1}function lt(t,e){var n=e.$attr,r=t.$attr;o(t,function(r,i){"$"!==i.charAt(0)&&(e[i]&&e[i]!==r&&(r=r.length?r+("style"===i?";":" ")+e[i]:e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,i){t.hasOwnProperty(i)||"$"===i.charAt(0)||(t[i]=e,"class"!==i&&"style"!==i&&(r[i]=n[i]))})}function ht(t,e,n,r,s,u,c,l){var f,h,$=[],d=e[0],m=t.shift(),v=p(m,{templateUrl:null,transclude:null,replace:null,$$originalDirective:m}),g=A(m.templateUrl)?m.templateUrl(e,n):m.templateUrl,y=m.templateNamespace;return e.empty(),a(g).then(function(i){var a,p;if(i=Rt(i),m.replace){if(i=Gr.test(i)?se(mt(y,Mr(i))):[],a=i[0],1!==i.length||1!==a.nodeType)throw gi("tplrt",m.name,g);i={$attr:{}},Ct(r,e,a);var w=Y(a,[],i);b(m.scope)&&st(w,!0),t=w.concat(t),lt(n,i)}else a=d,e.html(i);for(t.unshift(v),f=nt(t,a,n,s,e,m,u,c,l),o(r,function(t,n){t===a&&(r[n]=e[0])}),h=G(e[0].childNodes,s);$.length;){i=$.shift(),p=$.shift();var x=$.shift(),C=$.shift(),w=e[0];if(!i.$$destroyed){if(p!==d){var S=p.className;l.hasElementTranscludeDirective&&m.replace||(w=wt(a)),Ct(x,fr(p),w),z(fr(w),S)}p=f.transcludeOnThisElement?Z(i,f.transclude,C):C,f(h,i,w,r,p)}}$=null}).catch(function(t){k(t)&&i(t)}),function(t,e,n,r,i){t=i,e.$$destroyed||($?$.push(e,n,r,t):(f.transcludeOnThisElement&&(t=Z(e,f.transclude,i)),f(h,e,n,r,t)))}}function pt(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function $t(t,e,n,r){function i(t){return t?" (module: "+t+")":""}if(e)throw gi("multidir",e.name,i(e.$$moduleName),n.name,i(n.$$moduleName),t,K(r))}function dt(t,e){var r=n(e,!0);r&&t.push({priority:0,compile:function(t){t=t.parent();var e=!!t.length;return e&&W.$$addBindingClass(t),function(t,n){var i=n.parent();e||W.$$addBindingClass(i),W.$$addBindingInfo(i,r.expressions),t.$watch(r,function(t){n[0].nodeValue=t})}}})}function mt(e,n){switch(e=vr(e||"html")){case"svg":case"math":var r=t.document.createElement("div");return r.innerHTML="<"+e+">"+n+"</"+e+">",r.childNodes[0].childNodes;default:return n}}function vt(t,e){return"srcdoc"===e?C.HTML:"src"===e||"ngSrc"===e?-1===["img","video","audio","source","track"].indexOf(t)?C.RESOURCE_URL:C.MEDIA_URL:"xlinkHref"===e?"image"===t?C.MEDIA_URL:"a"===t?C.URL:C.RESOURCE_URL:"form"===t&&"action"===e||"base"===t&&"href"===e||"link"===t&&"href"===e?C.RESOURCE_URL:"a"!==t||"href"!==e&&"ngHref"!==e?void 0:C.URL}function gt(t,e){var n=e.toLowerCase();return D[t+"|"+n]||D["*|"+n]}function yt(t){return q(C.valueOf(t),"ng-prop-srcset")}function bt(t,e,n,r){if(w.test(r))throw gi("nodomevents");t=j(t);var i=gt(t,r),o=d;"srcset"!==r||"img"!==t&&"source"!==t?i&&(o=C.getTrusted.bind(C,i)):o=yt,e.push({priority:100,compile:function(t,e){var i=s(e[n]),a=s(e[n],function(t){return C.valueOf(t)});return{pre:function(t,e){function n(){var n=i(t);e.prop(r,o(n))}n(),t.$watch(a,n)}}}})}function xt(t,e,r,i,o){var a=j(t),s=vt(a,i),u=h[i]||o,c=n(r,!o,s,u);if(c){if("multiple"===i&&"select"===a)throw gi("selmulti",K(t));if(w.test(i))throw gi("nodomevents");e.push({priority:100,compile:function(){return{pre:function(t,e,o){e=o.$$observers||(o.$$observers=ft());var a=o[i];a!==r&&(c=a&&n(a,!0,s,u),r=a),c&&(o[i]=c(t),(e[i]||(e[i]=[])).$$inter=!0,(o.$$observers&&o.$$observers[i].$$scope||t).$watch(c,function(t,e){"class"===i&&t!==e?o.$updateClass(t,e):o.$set(i,t)}))}}}})}}function Ct(e,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(e)for(i=0,o=e.length;i<o;i++)if(e[i]===a){e[i++]=r,o=i+s-1;for(var c=e.length;i<c;i++,o++)o<c?e[i]=e[o]:delete e[i];e.length-=s-1,e.context===a&&(e.context=r);break}for(u&&u.replaceChild(r,a),e=t.document.createDocumentFragment(),i=0;i<s;i++)e.appendChild(n[i]);for(fr.hasData(a)&&(fr.data(r,fr.data(a)),fr(a).off("$destroy")),fr.cleanData(e.querySelectorAll("*")),i=1;i<s;i++)delete n[i];n[0]=r,n.length=1}function St(t,e){return l(function(){return t.apply(null,arguments)},t,e)}function Et(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(t){i(t,K(n))}}function kt(t,e){if(O)throw gi("missingattr",t,e)}function At(t,e,r,i,a){function u(e,n,i){A(r.$onChanges)&&!U(n,i)&&(Ot||(t.$$postDigest(_),Ot=[]),l||(l={},Ot.push(c)),l[e]&&(i=l[e].previousValue),l[e]=new ie(i,n))}function c(){r.$onChanges(l),l=void 0}var l,f=[],h={};return o(i,function(i,o){var c,l,p,d,m=i.attrName,v=i.optional;switch(i.mode){case"@":v||mr.call(e,m)||(kt(m,a.name),r[o]=e[m]=void 0),v=e.$observe(m,function(t){(x(t)||T(t))&&(u(o,t,r[o]),r[o]=t)}),e.$$observers[m].$$scope=t,c=e[m],x(c)?r[o]=n(c)(t):T(c)&&(r[o]=c),h[o]=new ie(yi,r[o]),f.push(v);break;case"=":if(!mr.call(e,m)){if(v)break;kt(m,a.name),e[m]=void 0}if(v&&!e[m])break;l=s(e[m]),d=l.literal?L:U,p=l.assign||function(){throw c=r[o]=l(t),gi("nonassign",e[m],m,a.name)},c=r[o]=l(t),v=function(e){return d(e,r[o])||(d(e,c)?p(t,e=r[o]):r[o]=e),c=e},v.$stateful=!0,v=i.collection?t.$watchCollection(e[m],v):t.$watch(s(e[m],v),null,l.literal),f.push(v);break;case"<":if(!mr.call(e,m)){if(v)break;kt(m,a.name),e[m]=void 0}if(v&&!e[m])break;l=s(e[m]);var g=l.literal,y=r[o]=l(t);h[o]=new ie(yi,r[o]),v=t[i.collection?"$watchCollection":"$watch"](l,function(t,e){if(e===t){if(e===y||g&&L(e,y))return;e=y}u(o,t,e),r[o]=t}),f.push(v);break;case"&":if(v||mr.call(e,m)||kt(m,a.name),(l=e.hasOwnProperty(m)?s(e[m]):$)===$&&v)break;r[o]=function(e){return l(t,e)}}}),{initialChanges:h,removeWatches:f.length&&function(){for(var t=0,e=f.length;t<e;++t)f[t]()}}}var Ot,Mt=/^\w/,Vt=t.document.createElement("div"),Tt=N,Nt=I,It=M;H.prototype={$normalize:oe,$addClass:function(t){t&&0<t.length&&P.addClass(this.$$element,t)},$removeClass:function(t){t&&0<t.length&&P.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=ae(t,e);n&&n.length&&P.addClass(this.$$element,n),(n=ae(e,t))&&n.length&&P.removeClass(this.$$element,n)},$set:function(t,e,n,r){var a=Lt(this.$$element[0],t),s=ei[t],u=t;a?(this.$$element.prop(t,e),r=a):s&&(this[s]=e,u=s),this[t]=e,r?this.$attr[t]=r:(r=this.$attr[t])||(this.$attr[t]=r=ot(t,"-")),"img"===j(this.$$element)&&"srcset"===t&&(this[t]=e=q(e,"$set('srcset', value)")),!1!==n&&(null===e||g(e)?this.$$element.removeAttr(r):Mt.test(r)?this.$$element.attr(r,e):B(this.$$element[0],r,e)),(t=this.$$observers)&&o(t[u],function(t){try{t(e)}catch(t){i(t)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=ft()),i=r[t]||(r[t]=[]);return i.push(e),y.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(t)||g(n[t])||e(n[t])}),function(){R(i,e)}}};var Pt=n.startSymbol(),jt=n.endSymbol(),Rt="{{"===Pt&&"}}"===jt?d:function(t){return t.replace(/\{\{/g,Pt).replace(/}}/g,jt)},Dt=/^ng(Attr|Prop|On)([A-Z].*)$/,Ut=/^(.+)Start$/;return W.$$addBindingInfo=S?function(t,e){var n=t.data("$binding")||[];E(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:$,W.$$addBindingClass=S?function(t){z(t,"ng-binding")}:$,W.$$addScopeInfo=S?function(t,e,n,r){t.data(n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope",e)}:$,W.$$addScopeClass=S?function(t,e){z(t,e?"ng-isolate-scope":"ng-scope")}:$,W.$$createComment=function(e,n){var r="";return S&&(r=" "+(e||"")+": ",n&&(r+=n+" ")),t.document.createComment(r)},W}]}function ie(t,e){this.previousValue=t,this.currentValue=e}function oe(t){return t.replace(bi,"").replace(wi,function(t,e,n){return n?e.toUpperCase():e})}function ae(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/),o=0;t:for(;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a===i[s])continue t;n+=(0<n.length?" ":"")+a}return n}function se(t){t=fr(t);var e=t.length;if(1>=e)return t;for(;e--;){var n=t[e];(8===n.nodeType||n.nodeType===Ur&&""===n.nodeValue.trim())&&br.call(t,e,1)}return t}function ue(t,e){if(e&&x(e))return e;if(x(t)){var n=Ci.exec(t);if(n)return n[3]}}function ce(){var t={};this.has=function(e){return t.hasOwnProperty(e)},this.register=function(e,n){ut(e,"controller"),b(e)?l(t,e):t[e]=n},this.$get=["$injector",function(e){function n(t,e,n,i){if(!t||!b(t.$scope))throw r("$controller")("noscp",i,e);t.$scope[e]=n}return function(r,i,o,a){var s,u,c;if(o=!0===o,a&&x(a)&&(c=a),x(r)){if(!(a=r.match(Ci)))throw xi("ctrlfmt",r);if(u=a[1],c=c||a[3],!(r=t.hasOwnProperty(u)?t[u]:ct(i.$scope,u,!0)))throw xi("ctrlreg",u);st(r,u,!0)}return o?(o=(E(r)?r[r.length-1]:r).prototype,s=Object.create(o||null),c&&n(i,c,s,u||r.name),l(function(){var t=e.invoke(r,s,i,u);return t!==s&&(b(t)||A(t))&&(s=t,c&&n(i,c,s,u||r.name)),s},{instance:s,identifier:c})):(s=e.instantiate(r,i,u),c&&n(i,c,s,u||r.name),s)}}]}function le(){this.$get=["$window",function(t){return fr(t.document)}]}function fe(){this.$get=["$document","$rootScope",function(t,e){function n(){i=r.hidden}var r=t[0],i=r&&r.hidden;return t.on("visibilitychange",n),e.$on("$destroy",function(){t.off("visibilitychange",n)}),function(){return i}}]}function he(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function pe(t){return b(t)?S(t)?t.toISOString():H(t):t}function $e(){this.$get=function(){return function(t){if(!t)return"";var e=[];return a(t,function(t,n){null===t||g(t)||A(t)||(E(t)?o(t,function(t){e.push(X(n)+"="+X(pe(t)))}):e.push(X(n)+"="+X(pe(t))))}),e.join("&")}}}function de(){this.$get=function(){return function(t){function e(t,r,i){E(t)?o(t,function(t,n){e(t,r+"["+(b(t)?n:"")+"]")}):b(t)&&!S(t)?a(t,function(t,n){e(t,r+(i?"":"[")+n+(i?"":"]"))}):(A(t)&&(t=t()),n.push(X(r)+"="+(null==t?"":X(pe(t)))))}if(!t)return"";var n=[];return e(t,"",!0),n.join("&")}}}function me(t,e){if(x(t)){var n=t.replace(Mi,"").trim();if(n){var r,i=e("Content-Type"),i=i&&0===i.indexOf(Ei);if((r=i)||(r=(r=n.match(Ai))&&Oi[r[0]].test(n)),r)try{t=B(n)}catch(e){if(!i)return t;throw Vi("baddata",t,e)}}}return t}function ve(t){var e,n=ft();return x(t)?o(t.split("\n"),function(t){e=t.indexOf(":");var r=vr(Mr(t.substr(0,e)));t=Mr(t.substr(e+1)),r&&(n[r]=n[r]?n[r]+", "+t:t)}):b(t)&&o(t,function(t,e){var r=vr(e),i=Mr(t);r&&(n[r]=n[r]?n[r]+", "+i:i)}),n}function ge(t){var e;return function(n){return e||(e=ve(t)),n?(n=e[vr(n)],void 0===n&&(n=null),n):e}}function ye(t,e,n,r){return A(r)?r(t,e,n):(o(r,function(r){t=r(t,e,n)}),t)}function be(){var t=this.defaults={transformResponse:[me],transformRequest:[function(t){return b(t)&&"[object File]"!==xr.call(t)&&"[object Blob]"!==xr.call(t)&&"[object FormData]"!==xr.call(t)?H(t):t}],headers:{common:{Accept:"application/json, text/plain, */*"},post:$t(ki),put:$t(ki),patch:$t(ki)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},e=!1;this.useApplyAsync=function(t){return y(t)?(e=!!t,this):e};var n=this.interceptors=[],i=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(a,s,u,c,f,h,p,d){function m(e){function n(t,e){for(var n=0,r=e.length;n<r;){var i=e[n++],o=e[n++];t=t.then(i,o)}return e.length=0,t}function i(t,e){var n,r={};return o(t,function(t,i){A(t)?null!=(n=t(e))&&(r[i]=n):r[i]=t}),r}function s(t){var e=l({},t);return e.data=ye(t.data,t.headers,t.status,u.transformResponse),t=t.status,200<=t&&300>t?e:h.reject(e)}if(!b(e))throw r("$http")("badreq",e);if(!x(d.valueOf(e.url)))throw r("$http")("badreq",e.url);var u=l({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer,jsonpCallbackParam:t.jsonpCallbackParam},e);u.headers=function(e){var n,r,o,a=t.headers,s=l({},e.headers),a=l({},a.common,a[vr(e.method)]);t:for(n in a){r=vr(n);for(o in s)if(vr(o)===r)continue t;s[n]=a[n]}return i(s,$t(e))}(e),u.method=gr(u.method),u.paramSerializer=x(u.paramSerializer)?p.get(u.paramSerializer):u.paramSerializer,a.$$incOutstandingRequestCount("$http");var c=[],f=[];return e=h.resolve(u),o(k,function(t){(t.request||t.requestError)&&c.unshift(t.request,t.requestError),(t.response||t.responseError)&&f.push(t.response,t.responseError)}),e=n(e,c),e=e.then(function(e){var n=e.headers,r=ye(e.data,ge(n),void 0,e.transformRequest);return g(r)&&o(n,function(t,e){"content-type"===vr(e)&&delete n[e]}),g(e.withCredentials)&&!g(t.withCredentials)&&(e.withCredentials=t.withCredentials),v(e,r).then(s,s)}),e=n(e,f),e=e.finally(function(){a.$$completeOutstandingRequest($,"$http")})}function v(n,r){function i(t){if(t){var n={};return o(t,function(t,r){n[r]=function(n){function r(){t(n)}e?f.$applyAsync(r):f.$$phase?r():f.$apply(r)}}),n}}function a(t,n,r,i,o){function a(){c(n,t,r,i,o)}$&&(200<=t&&300>t?$.put(N,[t,n,ve(r),i,o]):$.remove(N)),e?f.$applyAsync(a):(a(),f.$$phase||f.$apply())}function c(t,e,r,i,o){e=-1<=e?e:0,(200<=e&&300>e?k.resolve:k.reject)({data:t,status:e,headers:ge(r),config:n,statusText:i,xhrStatus:o})}function l(t){c(t.data,t.status,$t(t.headers()),t.statusText,t.xhrStatus)}function p(){var t=m.pendingRequests.indexOf(n);-1!==t&&m.pendingRequests.splice(t,1)}var $,v,k=h.defer(),M=k.promise,V=n.headers,T="jsonp"===vr(n.method),N=n.url;return T?N=d.getTrustedResourceUrl(N):x(N)||(N=d.valueOf(N)),N=w(N,n.paramSerializer(n.params)),T&&(N=C(N,n.jsonpCallbackParam)),m.pendingRequests.push(n),M.then(p,p),!n.cache&&!t.cache||!1===n.cache||"GET"!==n.method&&"JSONP"!==n.method||($=b(n.cache)?n.cache:b(t.cache)?t.cache:S),$&&(v=$.get(N),y(v)?v&&A(v.then)?v.then(l,l):E(v)?c(v[1],v[0],$t(v[2]),v[3],v[4]):c(v,200,{},"OK","complete"):$.put(N,M)),g(v)&&((v=O(n.url)?u()[n.xsrfCookieName||t.xsrfCookieName]:void 0)&&(V[n.xsrfHeaderName||t.xsrfHeaderName]=v),s(n.method,N,r,a,V,n.timeout,n.withCredentials,n.responseType,i(n.eventHandlers),i(n.uploadEventHandlers))),M}function w(t,e){return 0<e.length&&(t+=(-1===t.indexOf("?")?"?":"&")+e),t}function C(t,e){var n=t.split("?");if(2<n.length)throw Vi("badjsonp",t);return n=Z(n[1]),o(n,function(n,r){if("JSON_CALLBACK"===n)throw Vi("badjsonp",t);if(r===e)throw Vi("badjsonp",e,t)}),t+=(-1===t.indexOf("?")?"?":"&")+e+"=JSON_CALLBACK"}var S=c("$http");t.paramSerializer=x(t.paramSerializer)?p.get(t.paramSerializer):t.paramSerializer;var k=[];o(n,function(t){k.unshift(x(t)?p.get(t):p.invoke(t))});var O=mn(i);return m.pendingRequests=[],function(t){o(arguments,function(t){m[t]=function(e,n){return m(l({},n||{},{method:t,url:e}))}})}("get","delete","head","jsonp"),function(t){o(arguments,function(t){m[t]=function(e,n,r){return m(l({},r||{},{method:t,url:e,data:n}))}})}("post","put","patch"),m.defaults=t,m}]}function we(){this.$get=function(){return function(){return new t.XMLHttpRequest}}}function xe(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(t,e,n,r){return Ce(t,r,t.defer,e,n[0])}]}function Ce(t,e,n,r,i){function a(t,e,n){t=t.replace("JSON_CALLBACK",e);var o=i.createElement("script"),a=null;return o.type="text/javascript",o.src=t,o.async=!0,a=function(t){o.removeEventListener("load",a),o.removeEventListener("error",a),i.body.removeChild(o),o=null;var s=-1,u="unknown";t&&("load"!==t.type||r.wasCalled(e)||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},o.addEventListener("load",a),o.addEventListener("error",a),i.body.appendChild(o),a}return function(i,s,u,c,l,f,h,p,$,d){function m(t){C="timeout"===t,w&&w(),x&&x.abort()}function v(t,e,r,i,o,a){y(S)&&n.cancel(S),w=x=null,t(e,r,i,o,a)}if(s=s||t.url(),"jsonp"===vr(i))var b=r.createCallback(s),w=a(s,b,function(t,e){var n=200===t&&r.getResponse(b);v(c,t,n,"",e,"complete"),r.removeCallback(b)});else{var x=e(i,s),C=!1;if(x.open(i,s,!0),o(l,function(t,e){y(t)&&x.setRequestHeader(e,t)}),x.onload=function(){var t=x.statusText||"",e="response"in x?x.response:x.responseText,n=1223===x.status?204:x.status;0===n&&(n=e?200:"file"===dn(s).protocol?404:0),v(c,n,e,x.getAllResponseHeaders(),t,"complete")},x.onerror=function(){v(c,-1,null,null,"","error")},x.ontimeout=function(){v(c,-1,null,null,"","timeout")},x.onabort=function(){v(c,-1,null,null,"",C?"timeout":"abort")},o($,function(t,e){x.addEventListener(e,t)}),o(d,function(t,e){x.upload.addEventListener(e,t)}),h&&(x.withCredentials=!0),p)try{x.responseType=p}catch(t){if("json"!==p)throw t}x.send(g(u)?null:u)}if(0<f)var S=n(function(){m("timeout")},f);else f&&A(f.then)&&f.then(function(){m(y(f.$$timeoutId)?"timeout":"abort")})}}function Se(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(n){return n.replace(h,t).replace(p,e)}function s(t,e,n,r){var i=t.$watch(function(t){return i(),r(t)},e,n);return i}function u(o,u,h,p){function $(t){try{return t=h&&!d?i.getTrusted(h,t):i.valueOf(t),p&&!y(t)?t:ht(t)}catch(t){r(Ti.interr(o,t))}}var d=h===i.URL||h===i.MEDIA_URL;if(!o.length||-1===o.indexOf(t)){if(u&&!d)return;return u=a(o),d&&(u=i.getTrusted(h,u)),u=m(u),u.exp=o,u.expressions=[],u.$$watchDelegate=s,u}p=!!p;for(var v,b,w,x,C=0,S=[],E=o.length,k=[],A=[];C<E;){if(-1===(v=o.indexOf(t,C))||-1===(b=o.indexOf(e,v+c))){C!==E&&k.push(a(o.substring(C)));break}C!==v&&k.push(a(o.substring(C,v))),C=o.substring(v+c,b),S.push(C),C=b+f,A.push(k.length),k.push("")}x=1===k.length&&1===A.length;var O=d&&x?void 0:$;if(w=S.map(function(t){return n(t,O)}),!u||S.length){var M=function(t){for(var e=0,n=S.length;e<n;e++){if(p&&g(t[e]))return;k[A[e]]=t[e]}return d?i.getTrusted(h,x?k[0]:k.join("")):(h&&1<k.length&&Ti.throwNoconcat(o),k.join(""))};return l(function(t){var e=0,n=S.length,i=Array(n);try{for(;e<n;e++)i[e]=w[e](t);return M(i)}catch(t){r(Ti.interr(o,t))}},{exp:o,expressions:S,$$watchDelegate:function(t,e){var n;return t.$watchGroup(w,function(r,i){var o=M(r);e.call(this,o,r!==i?n:o,t),n=o})}})}}var c=t.length,f=e.length,h=new RegExp(t.replace(/./g,o),"g"),p=new RegExp(e.replace(/./g,o),"g");return u.startSymbol=function(){return t},u.endSymbol=function(){return e},u}]}function Ee(){this.$get=["$$intervalFactory","$window",function(t,e){var n={},r=function(t){e.clearInterval(t),delete n[t]},i=t(function(t,r,i){return t=e.setInterval(t,r),n[t]=i,t},r);return i.cancel=function(t){if(!t)return!1;if(!t.hasOwnProperty("$$intervalId"))throw Ni("badprom");if(!n.hasOwnProperty(t.$$intervalId))return!1;t=t.$$intervalId;var e=n[t];return e.promise.$$state.pur=!0,e.reject("canceled"),r(t),!0},i}]}function ke(){this.$get=["$browser","$q","$$q","$rootScope",function(t,e,n,r){return function(i,o){return function(a,s,u,c){function l(){f?a.apply(null,h):a(p)}var f=4<arguments.length,h=f?yr.call(arguments,4):[],p=0,$=y(c)&&!c,d=($?n:e).defer(),m=d.promise;return u=y(u)?u:0,m.$$intervalId=i(function(){$?t.defer(l):r.$evalAsync(l),d.notify(p++),0<u&&p>=u&&(d.resolve(p),o(m.$$intervalId)),$||r.$apply()},s,d,$),m}}}]}function Ae(t,e){var n=dn(t);e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=h(n.port)||ji[n.protocol]||null}function Oe(t,e,n){if(Di.test(t))throw Ri("badpath",t);var r="/"!==t.charAt(0);r&&(t="/"+t),t=dn(t);for(var r=(r&&"/"===t.pathname.charAt(0)?t.pathname.substring(1):t.pathname).split("/"),i=r.length;i--;)r[i]=decodeURIComponent(r[i]),n&&(r[i]=r[i].replace(/\//g,"%2F"));n=r.join("/"),e.$$path=n,e.$$search=Z(t.search),e.$$hash=decodeURIComponent(t.hash),e.$$path&&"/"!==e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function Me(t,e){return t.slice(0,e.length)===e}function Ve(t,e){if(Me(e,t))return e.substr(t.length)}function Te(t){var e=t.indexOf("#");return-1===e?t:t.substr(0,e)}function Ne(t,e,n){this.$$html5=!0,n=n||"",Ae(t,this),this.$$parse=function(t){var n=Ve(e,t);if(!x(n))throw Ri("ipthprfx",t,e);Oe(n,this,!0),this.$$path||(this.$$path="/"),this.$$compose()},this.$$normalizeUrl=function(t){return e+t.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return y(o=Ve(t,r))?(a=o,a=n&&y(o=Ve(n,o))?e+(Ve("/",o)||o):t+a):y(o=Ve(e,r))?a=e+o:e===r+"/"&&(a=e),a&&this.$$parse(a),!!a}}function Ie(t,e,n){Ae(t,this),this.$$parse=function(r){var i,o=Ve(t,r)||Ve(e,r);g(o)||"#"!==o.charAt(0)?this.$$html5?i=o:(i="",g(o)&&(t=r,this.replace())):(i=Ve(n,o),g(i)&&(i=o)),Oe(i,this,!1),r=this.$$path;var o=t,a=/^\/[A-Z]:(\/.*)/;Me(i,o)&&(i=i.replace(o,"")),a.exec(i)||(r=(i=a.exec(r))?i[1]:r),this.$$path=r,this.$$compose()},this.$$normalizeUrl=function(e){return t+(e?n+e:"")},this.$$parseLinkUrl=function(e,n){return Te(t)===Te(e)&&(this.$$parse(e),!0)}}function Pe(t,e,n){this.$$html5=!0,Ie.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return t===Te(r)?o=r:(a=Ve(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o},this.$$normalizeUrl=function(e){return t+n+e}}function je(t){return function(){return this[t]}}function Re(t,e){return function(n){return g(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function De(){var t="!",e={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(e){return y(e)?(t=e,this):t},this.html5Mode=function(t){return T(t)?(e.enabled=t,this):b(t)?(T(t.enabled)&&(e.enabled=t.enabled),T(t.requireBase)&&(e.requireBase=t.requireBase),(T(t.rewriteLinks)||x(t.rewriteLinks))&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(t,e){return t===e||dn(t).href===dn(e).href}function u(t,e,n){var i=l.url(),o=l.$$state;try{r.url(t,e,n),l.$$state=r.state()}catch(t){throw l.url(i),l.$$state=o,t}}function c(t,e){n.$broadcast("$locationChangeSuccess",l.absUrl(),t,l.$$state,e)}var l,f;f=r.baseHref();var h,p=r.url();if(e.enabled){if(!f&&e.requireBase)throw Ri("nobase");h=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(f||"/"),f=i.history?Ne:Pe}else h=Te(p),f=Ie;var $=h.substr(0,Te(h).lastIndexOf("/")+1);l=new f(h,$,"#"+t),l.$$parseLinkUrl(p,p),l.$$state=r.state();var d=/^\s*(javascript|mailto):/i;o.on("click",function(t){var i=e.rewriteLinks;if(i&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!==t.which&&2!==t.button){for(var a=fr(t.target);"a"!==j(a[0]);)if(a[0]===o[0]||!(a=a.parent())[0])return;if(!x(i)||!g(a.attr(i))){var i=a.prop("href"),s=a.attr("href")||a.attr("xlink:href");b(i)&&"[object SVGAnimatedString]"===i.toString()&&(i=dn(i.animVal).href),d.test(i)||!i||a.attr("target")||t.isDefaultPrevented()||!l.$$parseLinkUrl(i,s)||(t.preventDefault(),l.absUrl()!==r.url()&&n.$apply())}}}),l.absUrl()!==p&&r.url(l.absUrl(),!0);var m=!0;return r.onUrlChange(function(t,e){Me(t,$)?(n.$evalAsync(function(){var r,i=l.absUrl(),o=l.$$state;l.$$parse(t),l.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,l.absUrl()===t&&(r?(l.$$parse(i),l.$$state=o,u(i,!1,o)):(m=!1,c(i,o)))}),n.$$phase||n.$digest()):a.location.href=t}),n.$watch(function(){if(m||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var t=r.url(),e=l.absUrl(),o=r.state(),a=l.$$replace,f=!s(t,e)||l.$$html5&&i.history&&o!==l.$$state;(m||f)&&(m=!1,n.$evalAsync(function(){var e=l.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,l.$$state,o).defaultPrevented;l.absUrl()===e&&(r?(l.$$parse(t),l.$$state=o):(f&&u(e,a,o===l.$$state?null:l.$$state),c(t,o)))}))}l.$$replace=!1}),l}]}function Ue(){var t=!0,e=this;this.debugEnabled=function(e){return y(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return k(t)&&(t.stack&&a?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||$;return function(){var t=[];return o(arguments,function(e){t.push(r(e))}),Function.prototype.apply.call(i,e,t)}}var a=lr||/\bEdge\//.test(n.navigator&&n.navigator.userAgent);return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function Le(t){return t+""}function _e(t,e){return void 0!==t?t:e}function Fe(t,e){return void 0===t?e:void 0===e?t:t+e}function qe(t,e){switch(t.type){case Bi.MemberExpression:if(t.computed)return!1;break;case Bi.UnaryExpression:return 1;case Bi.BinaryExpression:return"+"!==t.operator&&1;case Bi.CallExpression:return!1}return void 0===e?zi:e}function He(t,e,n){var r,i,a=t.isPure=qe(t,n);switch(t.type){case Bi.Program:r=!0,o(t.body,function(t){He(t.expression,e,a),r=r&&t.expression.constant}),t.constant=r;break;case Bi.Literal:t.constant=!0,t.toWatch=[];break;case Bi.UnaryExpression:He(t.argument,e,a),t.constant=t.argument.constant,t.toWatch=t.argument.toWatch;break;case Bi.BinaryExpression:He(t.left,e,a),He(t.right,e,a),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.left.toWatch.concat(t.right.toWatch);break;case Bi.LogicalExpression:He(t.left,e,a),He(t.right,e,a),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.constant?[]:[t];break;case Bi.ConditionalExpression:He(t.test,e,a),He(t.alternate,e,a),He(t.consequent,e,a),t.constant=t.test.constant&&t.alternate.constant&&t.consequent.constant,t.toWatch=t.constant?[]:[t];break;case Bi.Identifier:t.constant=!1,t.toWatch=[t];break;case Bi.MemberExpression:He(t.object,e,a),t.computed&&He(t.property,e,a),t.constant=t.object.constant&&(!t.computed||t.property.constant),t.toWatch=t.constant?[]:[t];break;case Bi.CallExpression:r=n=!!t.filter&&!e(t.callee.name).$stateful,i=[],o(t.arguments,function(t){He(t,e,a),r=r&&t.constant,i.push.apply(i,t.toWatch)}),t.constant=r,t.toWatch=n?i:[t];break;case Bi.AssignmentExpression:He(t.left,e,a),He(t.right,e,a),t.constant=t.left.constant&&t.right.constant,t.toWatch=[t];break;case Bi.ArrayExpression:r=!0,i=[],o(t.elements,function(t){He(t,e,a),r=r&&t.constant,i.push.apply(i,t.toWatch)}),t.constant=r,t.toWatch=i;break;case Bi.ObjectExpression:r=!0,i=[],o(t.properties,function(t){He(t.value,e,a),r=r&&t.value.constant,i.push.apply(i,t.value.toWatch),t.computed&&(He(t.key,e,!1),r=r&&t.key.constant,i.push.apply(i,t.key.toWatch))}),t.constant=r,t.toWatch=i;break;case Bi.ThisExpression:t.constant=!1,t.toWatch=[];break;case Bi.LocalsExpression:t.constant=!1,t.toWatch=[]}}function Be(t){if(1===t.length){t=t[0].expression;var e=t.toWatch;return 1!==e.length?e:e[0]!==t?e:void 0}}function ze(t){return t.type===Bi.Identifier||t.type===Bi.MemberExpression}function We(t){if(1===t.body.length&&ze(t.body[0].expression))return{type:Bi.AssignmentExpression,left:t.body[0].expression,right:{type:Bi.NGValueParameter},operator:"="}}function Ge(t){this.$filter=t}function Ke(t){this.$filter=t}function Je(t,e,n){this.ast=new Bi(t,n),this.astCompiler=n.csp?new Ke(e):new Ge(e)}function Ze(t){return A(t.valueOf)?t.valueOf():_i.call(t)}function Ye(){var t,e,n=ft(),r={true:!0,false:!1,null:null,undefined:void 0};this.addLiteral=function(t,e){r[t]=e},this.setIdentifierFns=function(n,r){return t=n,e=r,this},this.$get=["$filter",function(i){function a(t,e){var r,o;switch(typeof t){case"string":return o=t=t.trim(),r=n[o],r||(r=new Hi(v),r=new Je(r,i,v).parse(t),n[o]=h(r)),m(r,e);case"function":return m(t,e);default:return m($,e)}}function s(t,e,n){return null==t||null==e?t===e:!("object"==typeof t&&"object"==typeof(t=Ze(t))&&!n)&&(t===e||t!==t&&e!==e)}function u(t,e,n,r,i){var o,a=r.inputs;if(1===a.length){var u=s,a=a[0];return t.$watch(function(t){var e=a(t);return s(e,u,a.isPure)||(o=r(t,void 0,void 0,[e]),u=e&&Ze(e)),o},e,n,i)}for(var c=[],l=[],f=0,h=a.length;f<h;f++)c[f]=s,l[f]=null;return t.$watch(function(t){for(var e=!1,n=0,i=a.length;n<i;n++){var u=a[n](t);(e||(e=!s(u,c[n],a[n].isPure)))&&(l[n]=u,c[n]=u&&Ze(u))}return e&&(o=r(t,void 0,void 0,l)),o},e,n,i)}function c(t,e,n,r,i){function o(){c(u)&&s()}function a(t,e,n,r){return u=$&&r?r[0]:f(t,e,n,r),c(u)&&t.$$postDigest(o),p(u)}var s,u,c=r.literal?l:y,f=r.$$intercepted||r,p=r.$$interceptor||d,$=r.inputs&&!f.inputs;return a.literal=r.literal,a.constant=r.constant,a.inputs=r.inputs,h(a),s=t.$watch(a,e,n,i)}function l(t){var e=!0;return o(t,function(t){y(t)||(e=!1)}),e}function f(t,e,n,r){var i=t.$watch(function(t){return i(),r(t)},e,n);return i}function h(t){
return t.constant?t.$$watchDelegate=f:t.oneTime?t.$$watchDelegate=c:t.inputs&&(t.$$watchDelegate=u),t}function p(t,e){function n(n){return e(t(n))}return n.$stateful=t.$stateful||e.$stateful,n.$$pure=t.$$pure&&e.$$pure,n}function m(t,e){if(!e)return t;t.$$interceptor&&(e=p(t.$$interceptor,e),t=t.$$intercepted);var n=!1,r=function(r,i,o,a){return r=n&&a?a[0]:t(r,i,o,a),e(r)};return r.$$intercepted=t,r.$$interceptor=e,r.literal=t.literal,r.oneTime=t.oneTime,r.constant=t.constant,e.$stateful||(n=!t.inputs,r.inputs=t.inputs?t.inputs:[t],e.$$pure||(r.inputs=r.inputs.map(function(t){return t.isPure===zi?function(e){return t(e)}:t}))),h(r)}var v={csp:Tr().noUnsafeEval,literals:D(r),isIdentifierStart:A(t)&&t,isIdentifierContinue:A(e)&&e};return a.$$getAst=function(t){return new Je(new Hi(v),i,v).getAst(t).ast},a}]}function Qe(){var t=!0;this.$get=["$rootScope","$exceptionHandler",function(e,n){return tn(function(t){e.$evalAsync(t)},n,t)}],this.errorOnUnhandledRejections=function(e){return y(e)?(t=e,this):t}}function Xe(){var t=!0;this.$get=["$browser","$exceptionHandler",function(e,n){return tn(function(t){e.defer(t)},n,t)}],this.errorOnUnhandledRejections=function(e){return y(e)?(t=e,this):t}}function tn(t,e,n){function i(){return new a}function a(){var t=this.promise=new s;this.resolve=function(e){f(t,e)},this.reject=function(e){p(t,e)},this.notify=function(e){d(t,e)}}function s(){this.$$state={status:0}}function u(){for(;!C&&S.length;){var t=S.shift();if(!t.pur){t.pur=!0;var n=t.value,n="Possibly unhandled rejection: "+("function"==typeof n?n.toString().replace(/ \{[\s\S]*$/,""):g(n)?"undefined":"string"!=typeof n?dt(n,void 0):n);k(t.value)?e(t.value,n):e(n)}}}function c(r){!n||r.pending||2!==r.status||r.pur||(0===C&&0===S.length&&t(u),S.push(r)),!r.processScheduled&&r.pending&&(r.processScheduled=!0,++C,t(function(){var i,o,a;a=r.pending,r.processScheduled=!1,r.pending=void 0;try{for(var s=0,c=a.length;s<c;++s){r.pur=!0,o=a[s][0],i=a[s][r.status];try{A(i)?f(o,i(r.value)):1===r.status?f(o,r.value):p(o,r.value)}catch(t){p(o,t),t&&!0===t.$$passToExceptionHandler&&e(t)}}}finally{--C,n&&0===C&&t(u)}}))}function f(t,e){t.$$state.status||(e===t?$(t,x("qcycle",e)):h(t,e))}function h(t,e){function n(e){a||(a=!0,h(t,e))}function r(e){a||(a=!0,$(t,e))}function i(e){d(t,e)}var o,a=!1;try{(b(e)||A(e))&&(o=e.then),A(o)?(t.$$state.status=-1,o.call(e,n,r,i)):(t.$$state.value=e,t.$$state.status=1,c(t.$$state))}catch(t){r(t)}}function p(t,e){t.$$state.status||$(t,e)}function $(t,e){t.$$state.value=e,t.$$state.status=2,c(t.$$state)}function d(n,r){var i=n.$$state.pending;0>=n.$$state.status&&i&&i.length&&t(function(){for(var t,n,o=0,a=i.length;o<a;o++){n=i[o][0],t=i[o][3];try{d(n,A(t)?t(r):r)}catch(t){e(t)}}})}function m(t){var e=new s;return p(e,t),e}function v(t,e,n){var r=null;try{A(n)&&(r=n())}catch(t){return m(t)}return r&&A(r.then)?r.then(function(){return e(t)},m):e(t)}function y(t,e,n,r){var i=new s;return f(i,t),i.then(e,n,r)}function w(t){if(!A(t))throw x("norslvr",t);var e=new s;return t(function(t){f(e,t)},function(t){p(e,t)}),e}var x=r("$q",TypeError),C=0,S=[];l(s.prototype,{then:function(t,e,n){if(g(t)&&g(e)&&g(n))return this;var r=new s;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),0<this.$$state.status&&c(this.$$state),r},catch:function(t){return this.then(null,t)},finally:function(t,e){return this.then(function(e){return v(e,O,t)},function(e){return v(e,m,t)},e)}});var O=y;return w.prototype=s.prototype,w.defer=i,w.reject=m,w.when=y,w.resolve=O,w.all=function(t){var e=new s,n=0,r=E(t)?[]:{};return o(t,function(t,i){n++,y(t).then(function(t){r[i]=t,--n||f(e,r)},function(t){p(e,t)})}),0===n&&f(e,r),e},w.race=function(t){var e=i();return o(t,function(t){y(t).then(e.resolve,e.reject)}),e.promise},w}function en(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t);return function(){r(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};return o.supported=i,o}]}function nn(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=++kr,this.$$ChildScope=null,this.$$suspended=!1}return e.prototype=t,e}var e=10,n=r("$rootScope"),a=null,s=null;this.digestTtl=function(t){return arguments.length&&(e=t),e},this.$get=["$exceptionHandler","$parse","$browser",function(r,u,c){function l(t){t.currentScope.$$destroyed=!0}function f(t){9===lr&&(t.$$childHead&&f(t.$$childHead),t.$$nextSibling&&f(t.$$nextSibling)),t.$parent=t.$$nextSibling=t.$$prevSibling=t.$$childHead=t.$$childTail=t.$root=t.$$watchers=null}function h(){this.$id=++kr,this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$suspended=this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function p(t){if(x.$$phase)throw n("inprog",x.$$phase);x.$$phase=t}function d(t,e){do{t.$$watchersCount+=e}while(t=t.$parent)}function m(t,e,n){do{t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n]}while(t=t.$parent)}function v(){}function y(){for(;E.length;)try{E.shift()()}catch(t){r(t)}s=null}function w(){null===s&&(s=c.defer(function(){x.$apply(y)},null,"$applyAsync"))}h.prototype={constructor:h,$new:function(e,n){var r;return n=n||this,e?(r=new h,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!==this)&&r.$on("$destroy",l),r},$watch:function(t,e,n,r){var i=u(t);if(e=A(e)?e:$,i.$$watchDelegate)return i.$$watchDelegate(this,e,n,i,t);var o=this,s=o.$$watchers,c={fn:e,last:v,get:i,exp:r||t,eq:!!n};return a=null,s||(s=o.$$watchers=[],s.$$digestWatchIndex=-1),s.unshift(c),s.$$digestWatchIndex++,d(this,1),function(){var t=R(s,c);0<=t&&(d(o,-1),t<s.$$digestWatchIndex&&s.$$digestWatchIndex--),a=null}},$watchGroup:function(t,e){function n(){u=!1;try{c?(c=!1,e(i,i,s)):e(i,r,s)}finally{for(var n=0;n<t.length;n++)r[n]=i[n]}}var r=Array(t.length),i=Array(t.length),a=[],s=this,u=!1,c=!0;if(!t.length){var l=!0;return s.$evalAsync(function(){l&&e(i,i,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,o){i[0]=t,r[0]=n,e(i,t===n?i:r,o)}):(o(t,function(t,e){var r=s.$watch(t,function(t){i[e]=t,u||(u=!0,s.$evalAsync(n))});a.push(r)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function n(t){r=t;var e,n,a;if(!g(r)){if(b(r))if(i(r))for(o!==h&&(o=h,d=o.length=0,l++),t=r.length,d!==t&&(l++,o.length=d=t),e=0;e<t;e++)a=o[e],n=r[e],a!==a&&n!==n||a===n||(l++,o[e]=n);else{o!==p&&(o=p={},d=0,l++),t=0;for(e in r)mr.call(r,e)&&(t++,n=r[e],a=o[e],e in o?a!==a&&n!==n||a===n||(l++,o[e]=n):(d++,o[e]=n,l++));if(d>t)for(e in l++,o)mr.call(r,e)||(d--,delete o[e])}else o!==r&&(o=r,l++);return l}}n.$$pure=u(t).literal,n.$stateful=!n.$$pure;var r,o,a,s=this,c=1<e.length,l=0,f=u(t,n),h=[],p={},$=!0,d=0;return this.$watch(f,function(){if($?($=!1,e(r,r,s)):e(r,a,s),c)if(b(r))if(i(r)){a=Array(r.length);for(var t=0;t<r.length;t++)a[t]=r[t]}else for(t in a={},r)mr.call(r,t)&&(a[t]=r[t]);else a=r})},$digest:function(){var t,i,o,u,l,f,h,$,d,m,g=e,b=C.length?x:this,w=[];p("$digest"),c.$$checkUrlChange(),this===x&&null!==s&&(c.defer.cancel(s),y()),a=null;do{for(h=!1,$=b,f=0;f<C.length;f++){try{m=C[f],(u=m.fn)(m.scope,m.locals)}catch(t){r(t)}a=null}C.length=0;t:do{if(f=!$.$$suspended&&$.$$watchers)for(f.$$digestWatchIndex=f.length;f.$$digestWatchIndex--;)try{if(t=f[f.$$digestWatchIndex])if(l=t.get,(i=l($))===(o=t.last)||(t.eq?L(i,o):Ar(i)&&Ar(o))){if(t===a){h=!1;break t}}else h=!0,a=t,t.last=t.eq?D(i,null):i,u=t.fn,u(i,o===v?i:o,$),5>g&&(d=4-g,w[d]||(w[d]=[]),w[d].push({msg:A(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:i,oldVal:o}))}catch(t){r(t)}if(!(f=!$.$$suspended&&$.$$watchersCount&&$.$$childHead||$!==b&&$.$$nextSibling))for(;$!==b&&!(f=$.$$nextSibling);)$=$.$parent}while($=f);if((h||C.length)&&!g--)throw x.$$phase=null,n("infdig",e,w)}while(h||C.length);for(x.$$phase=null;k<S.length;)try{S[k++]()}catch(t){r(t)}S.length=k=0,c.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this===x&&c.$$applicationDestroyed(),d(this,-this.$$watchersCount);for(var e in this.$$listenerCount)m(this,this.$$listenerCount[e],e);t&&t.$$childHead===this&&(t.$$childHead=this.$$nextSibling),t&&t.$$childTail===this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=$,this.$on=this.$watch=this.$watchGroup=function(){return $},this.$$listeners={},this.$$nextSibling=null,f(this)}},$eval:function(t,e){return u(t)(this,e)},$evalAsync:function(t,e){x.$$phase||C.length||c.defer(function(){C.length&&x.$digest()},null,"$evalAsync"),C.push({scope:this,fn:u(t),locals:e})},$$postDigest:function(t){S.push(t)},$apply:function(t){try{p("$apply");try{return this.$eval(t)}finally{x.$$phase=null}}catch(t){r(t)}finally{try{x.$digest()}catch(t){throw r(t),t}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this;t&&E.push(e),t=u(t),w()},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do{r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++}while(r=r.$parent);var i=this;return function(){var r=n.indexOf(e);-1!==r&&(delete n[r],m(i,1,t))}},$emit:function(t,e){var n,i,o,a=[],s=this,u=!1,c={name:t,targetScope:s,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=_([c],arguments,1);do{for(n=s.$$listeners[t]||a,c.currentScope=s,i=0,o=n.length;i<o;i++)if(n[i])try{n[i].apply(null,l)}catch(t){r(t)}else n.splice(i,1),i--,o--;if(u)break;s=s.$parent}while(s);return c.currentScope=null,c},$broadcast:function(t,e){var n=this,i=this,o={name:t,targetScope:this,preventDefault:function(){o.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[t])return o;for(var a,s,u=_([o],arguments,1);n=i;){for(o.currentScope=n,i=n.$$listeners[t]||[],a=0,s=i.length;a<s;a++)if(i[a])try{i[a].apply(null,u)}catch(t){r(t)}else i.splice(a,1),a--,s--;if(!(i=n.$$listenerCount[t]&&n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(i=n.$$nextSibling);)n=n.$parent}return o.currentScope=null,o}};var x=new h,C=x.$$asyncQueue=[],S=x.$$postDigestQueue=[],E=x.$$applyAsyncQueue=[],k=0;return x}]}function rn(){var t=/^\s*(https?|s?ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(e){return y(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return y(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i=r?e:t,o=dn(n&&n.trim()).href;return""===o||o.match(i)?n:"unsafe:"+o}}}function on(t){if("self"===t)return t;if(x(t)){if(-1<t.indexOf("***"))throw Gi("iwcard",t);return t=Vr(t).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*"),new RegExp("^"+t+"$")}if(O(t))return new RegExp("^"+t.source+"$");throw Gi("imatcher")}function an(t){var e=[];return y(t)&&o(t,function(t){e.push(on(t))}),e}function sn(){this.SCE_CONTEXTS=Ki;var e=["self"],n=[];this.resourceUrlWhitelist=function(t){return arguments.length&&(e=an(t)),e},this.resourceUrlBlacklist=function(t){return arguments.length&&(n=an(t)),n},this.$get=["$injector","$$sanitizeUri",function(r,i){function o(e,n){var r;return"self"===e?(r=vn(n,Xi))||(t.document.baseURI?r=t.document.baseURI:(Wi||(Wi=t.document.createElement("a"),Wi.href=".",Wi=Wi.cloneNode(!1)),r=Wi.href),r=vn(n,r)):r=!!e.exec(n.href),r}function a(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}var s=function(t){throw Gi("unsafe")};r.has("$sanitize")&&(s=r.get("$sanitize"));var u=a(),c={};return c[Ki.HTML]=a(u),c[Ki.CSS]=a(u),c[Ki.MEDIA_URL]=a(u),c[Ki.URL]=a(c[Ki.MEDIA_URL]),c[Ki.JS]=a(u),c[Ki.RESOURCE_URL]=a(c[Ki.URL]),{trustAs:function(t,e){var n=c.hasOwnProperty(t)?c[t]:null;if(!n)throw Gi("icontext",t,e);if(null===e||g(e)||""===e)return e;if("string"!=typeof e)throw Gi("itype",t);return new n(e)},getTrusted:function(t,r){if(null===r||g(r)||""===r)return r;var a=c.hasOwnProperty(t)?c[t]:null;if(a&&r instanceof a)return r.$$unwrapTrustedValue();if(A(r.$$unwrapTrustedValue)&&(r=r.$$unwrapTrustedValue()),t===Ki.MEDIA_URL||t===Ki.URL)return i(r.toString(),t===Ki.MEDIA_URL);if(t===Ki.RESOURCE_URL){var u,l,a=dn(r.toString()),f=!1;for(u=0,l=e.length;u<l;u++)if(o(e[u],a)){f=!0;break}if(f)for(u=0,l=n.length;u<l;u++)if(o(n[u],a)){f=!1;break}if(f)return r;throw Gi("insecurl",r.toString())}if(t===Ki.HTML)return s(r);throw Gi("unsafe")},valueOf:function(t){return t instanceof u?t.$$unwrapTrustedValue():t}}}]}function un(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&8>lr)throw Gi("iequirks");var r=$t(Ki);r.isEnabled=function(){return t},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,t||(r.trustAs=r.getTrusted=function(t,e){return e},r.valueOf=d),r.parseAs=function(t,n){var i=e(n);return i.literal&&i.constant?i:e(n,function(e){return r.getTrusted(t,e)})};var i=r.parseAs,a=r.getTrusted,s=r.trustAs;return o(Ki,function(t,e){var n=vr(e);r[("parse_as_"+n).replace(Ji,mt)]=function(e){return i(t,e)},r[("get_trusted_"+n).replace(Ji,mt)]=function(e){return a(t,e)},r[("trust_as_"+n).replace(Ji,mt)]=function(e){return s(t,e)}}),r}]}function cn(){this.$get=["$window","$document",function(t,e){var n={},r=!((!t.nw||!t.nw.process)&&t.chrome&&(t.chrome.app&&t.chrome.app.runtime||!t.chrome.app&&t.chrome.runtime&&t.chrome.runtime.id))&&t.history&&t.history.pushState,i=h((/android (\d+)/.exec(vr((t.navigator||{}).userAgent))||[])[1]),o=/Boxee/i.test((t.navigator||{}).userAgent),a=e[0]||{},s=a.body&&a.body.style,u=!1,c=!1;return s&&(u=!!("transition"in s||"webkitTransition"in s),c=!!("animation"in s||"webkitAnimation"in s)),{history:!(!r||4>i||o),hasEvent:function(t){if("input"===t&&lr)return!1;if(g(n[t])){var e=a.createElement("div");n[t]="on"+t in e}return n[t]},csp:Tr(),transitions:u,animations:c,android:i}}]}function ln(){this.$get=m(function(t){return new fn(t)})}function fn(t){function e(){var t=i.pop();return t&&t.cb}function n(t){for(var e=i.length-1;0<=e;--e){var n=i[e];if(n.type===t)return i.splice(e,1),n.cb}}var r={},i=[],o=this.ALL_TASKS_TYPE="$$all$$",a=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(i,s){s=s||a;try{i()}finally{var u;u=s||a,r[u]&&(r[u]--,r[o]--),u=r[s];var c=r[o];if(!c||!u)for(u=c?n:e;c=u(s);)try{c()}catch(e){t.error(e)}}},this.incTaskCount=function(t){t=t||a,r[t]=(r[t]||0)+1,r[o]=(r[o]||0)+1},this.notifyWhenNoPendingTasks=function(t,e){e=e||o,r[e]?i.push({type:e,cb:t}):t()}}function hn(){var t;this.httpOptions=function(e){return e?(t=e,this):t},this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(e,n,r,i,o){function a(s,u){a.totalPendingRequests++,x(s)&&!g(n.get(s))||(s=o.getTrustedResourceUrl(s));var c=r.defaults&&r.defaults.transformResponse;return E(c)?c=c.filter(function(t){return t!==me}):c===me&&(c=null),r.get(s,l({cache:n,transformResponse:c},t)).finally(function(){a.totalPendingRequests--}).then(function(t){return n.put(s,t.data)},function(t){return u||(t=Zi("tpload",s,t.status,t.statusText),e(t)),i.reject(t)})}return a.totalPendingRequests=0,a}]}function pn(){this.$get=["$rootScope","$browser","$location",function(t,e,n){return{findBindings:function(t,e,n){t=t.getElementsByClassName("ng-binding");var r=[];return o(t,function(t){var i=Er.element(t).data("$binding");i&&o(i,function(i){n?new RegExp("(^|\\s)"+Vr(e)+"(\\s|\\||$)").test(i)&&r.push(t):-1!==i.indexOf(e)&&r.push(t)})}),r},findModels:function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=t.querySelectorAll("["+r[i]+"model"+(n?"=":"*=")+'"'+e+'"]');if(o.length)return o}},getLocation:function(){return n.url()},setLocation:function(e){e!==n.url()&&(n.url(e),t.$digest())},whenStable:function(t){e.notifyWhenNoOutstandingRequests(t)}}}]}function $n(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){A(o)||(u=s,s=o,o=$);var c,l=yr.call(arguments,3),f=y(u)&&!u,h=(f?r:n).defer(),p=h.promise;return c=e.defer(function(){try{h.resolve(o.apply(null,l))}catch(t){h.reject(t),i(t)}finally{delete a[p.$$timeoutId]}f||t.$apply()},s,"$timeout"),p.$$timeoutId=c,a[c]=h,p}var a={};return o.cancel=function(t){if(!t)return!1;if(!t.hasOwnProperty("$$timeoutId"))throw Yi("badprom");if(!a.hasOwnProperty(t.$$timeoutId))return!1;t=t.$$timeoutId;var n=a[t];return n.promise.$$state.pur=!0,n.reject("canceled"),delete a[t],e.defer.cancel(t)},o}]}function dn(t){return x(t)?(lr&&(Qi.setAttribute("href",t),t=Qi.href),Qi.setAttribute("href",t),{href:Qi.href,protocol:Qi.protocol?Qi.protocol.replace(/:$/,""):"",host:Qi.host,search:Qi.search?Qi.search.replace(/^\?/,""):"",hash:Qi.hash?Qi.hash.replace(/^#/,""):"",hostname:Qi.hostname,port:Qi.port,pathname:"/"===Qi.pathname.charAt(0)?Qi.pathname:"/"+Qi.pathname}):t}function mn(t){var e=[Xi].concat(t.map(dn));return function(t){return t=dn(t),e.some(vn.bind(null,t))}}function vn(t,e){return t=dn(t),e=dn(e),t.protocol===e.protocol&&t.host===e.host}function gn(){this.$get=m(t)}function yn(t){function e(t){try{return decodeURIComponent(t)}catch(e){return t}}var n=t[0]||{},r={},i="";return function(){var t,o,a,s,u;try{t=n.cookie||""}catch(e){t=""}if(t!==i)for(i=t,t=i.split("; "),r={},a=0;a<t.length;a++)o=t[a],0<(s=o.indexOf("="))&&(u=e(o.substring(0,s)),g(r[u])&&(r[u]=e(o.substring(s+1))));return r}}function bn(){this.$get=yn}function wn(t){function e(n,r){if(b(n)){var i={};return o(n,function(t,n){i[n]=e(n,t)}),i}return t.factory(n+"Filter",r)}this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+"Filter")}}],e("currency",kn),e("date",Dn),e("filter",xn),e("json",Un),e("limitTo",Ln),e("lowercase",ao),e("number",An),e("orderBy",Fn),e("uppercase",so)}function xn(){return function(t,e,n,o){if(!i(t)){if(null==t)return t;throw r("filter")("notarray",t)}o=o||"$";var a;switch(En(e)){case"function":break;case"boolean":case"null":case"number":case"string":a=!0;case"object":e=Cn(e,n,o,a);break;default:return t}return Array.prototype.filter.call(t,e)}}function Cn(t,e,n,r){var i=b(t)&&n in t;return!0===e?e=L:A(e)||(e=function(t,e){return!g(t)&&(null===t||null===e?t===e:!(b(e)||b(t)&&!v(t))&&(t=vr(""+t),e=vr(""+e),-1!==t.indexOf(e)))}),function(o){return i&&!b(o)?Sn(o,t[n],e,n,!1):Sn(o,t,e,n,r)}}function Sn(t,e,n,r,i,o){var a=En(t),s=En(e);if("string"===s&&"!"===e.charAt(0))return!Sn(t,e.substring(1),n,r,i);if(E(t))return t.some(function(t){return Sn(t,e,n,r,i)});switch(a){case"object":var u;if(i){for(u in t)if(u.charAt&&"$"!==u.charAt(0)&&Sn(t[u],e,n,r,!0))return!0;return!o&&Sn(t,e,n,r,!1)}if("object"===s){for(u in e)if(o=e[u],!A(o)&&!g(o)&&(a=u===r,!Sn(a?t:t[u],o,n,r,a,a)))return!1;return!0}return n(t,e);case"function":return!1;default:return n(t,e)}}function En(t){return null===t?"null":typeof t}function kn(t){var e=t.NUMBER_FORMATS;return function(t,n,r){g(n)&&(n=e.CURRENCY_SYM),g(r)&&(r=e.PATTERNS[1].maxFrac);var i=n?/\u00A4/g:/\s*\u00A4\s*/g;return null==t?t:Vn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(i,n)}}function An(t){var e=t.NUMBER_FORMATS;return function(t,n){return null==t?t:Vn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function On(t){var e,n,r,i,o,a=0;for(-1<(n=t.indexOf(eo))&&(t=t.replace(eo,"")),0<(r=t.search(/e/i))?(0>n&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):0>n&&(n=t.length),r=0;t.charAt(r)===no;r++);if(r===(o=t.length))e=[0],n=1;else{for(o--;t.charAt(o)===no;)o--;for(n-=r,e=[],i=0;r<=o;r++,i++)e[i]=+t.charAt(r)}return n>to&&(e=e.splice(0,to-1),a=n-1,n=1),{d:e,e:a,i:n}}function Mn(t,e,n,r){var i=t.d,o=i.length-t.i;if(e=g(e)?Math.min(Math.max(n,o),r):+e,n=e+t.i,r=i[n],0<n){i.splice(Math.max(t.i,n));for(var a=n;a<i.length;a++)i[a]=0}else for(o=Math.max(0,o),t.i=1,i.length=Math.max(1,n=e+1),i[0]=0,a=1;a<n;a++)i[a]=0;if(5<=r)if(0>n-1){for(r=0;r>n;r--)i.unshift(0),t.i++;i.unshift(1),t.i++}else i[n-1]++;for(;o<Math.max(0,e);o++)i.push(0);(e=i.reduceRight(function(t,e,n,r){return e+=t,r[n]=e%10,Math.floor(e/10)},0))&&(i.unshift(e),t.i++)}function Vn(t,e,n,r,i){if(!x(t)&&!C(t)||isNaN(t))return"";var o=!isFinite(t),a=!1,s=Math.abs(t)+"",u="";if(o)u="∞";else{for(a=On(s),Mn(a,i,e.minFrac,e.maxFrac),u=a.d,s=a.i,i=a.e,o=[],a=u.reduce(function(t,e){return t&&!e},!0);0>s;)u.unshift(0),s++;for(0<s?o=u.splice(s,u.length):(o=u,u=[0]),s=[],u.length>=e.lgSize&&s.unshift(u.splice(-e.lgSize,u.length).join(""));u.length>e.gSize;)s.unshift(u.splice(-e.gSize,u.length).join(""));u.length&&s.unshift(u.join("")),u=s.join(n),o.length&&(u+=r+o.join("")),i&&(u+="e+"+i)}return 0>t&&!a?e.negPre+u+e.negSuf:e.posPre+u+e.posSuf}function Tn(t,e,n,r){var i="";for((0>t||r&&0>=t)&&(r?t=1-t:(t=-t,i="-")),t=""+t;t.length<e;)t=no+t;return n&&(t=t.substr(t.length-e)),i+t}function Nn(t,e,n,r,i){return n=n||0,function(o){return o=o["get"+t](),(0<n||o>-n)&&(o+=n),0===o&&-12===n&&(o=12),Tn(o,e,r,i)}}function In(t,e,n){return function(r,i){var o=r["get"+t]();return i[gr((n?"STANDALONE":"")+(e?"SHORT":"")+t)][o]}}function Pn(t){var e=new Date(t,0,1).getDay();return new Date(t,0,(4>=e?5:12)-e)}function jn(t){return function(e){var n=Pn(e.getFullYear());return e=+new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))-+n,e=1+Math.round(e/6048e5),Tn(e,t)}}function Rn(t,e){return 0>=t.getFullYear()?e.ERAS[0]:e.ERAS[1]}function Dn(t){function e(t){var e;if(e=t.match(n)){t=new Date(0);var r=0,i=0,o=e[8]?t.setUTCFullYear:t.setFullYear,a=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=h(e[9]+e[10]),i=h(e[9]+e[11])),o.call(t,h(e[1]),h(e[2])-1,h(e[3])),r=h(e[4]||0)-r,i=h(e[5]||0)-i,o=h(e[6]||0),e=Math.round(1e3*parseFloat("0."+(e[7]||0))),a.call(t,r,i,o,e)}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,r,i){var a,s,u="",c=[];if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,x(n)&&(n=oo.test(n)?h(n):e(n)),C(n)&&(n=new Date(n)),!S(n)||!isFinite(n.getTime()))return n;for(;r;)(s=io.exec(r))?(c=_(c,s,1),r=c.pop()):(c.push(r),r=null);var l=n.getTimezoneOffset();return i&&(l=z(i,l),n=G(n,i,!0)),o(c,function(e){a=ro[e],u+=a?a(n,t.DATETIME_FORMATS,l):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function Un(){return function(t,e){return g(e)&&(e=2),H(t,e)}}function Ln(){return function(t,e,n){return e=1/0===Math.abs(Number(e))?Number(e):h(e),Ar(e)?t:(C(t)&&(t=t.toString()),i(t)?(n=!n||isNaN(n)?0:h(n),n=0>n?Math.max(0,t.length+n):n,0<=e?_n(t,n,n+e):0===n?_n(t,e,t.length):_n(t,Math.max(0,n+e),n)):t)}}function _n(t,e,n){return x(t)?t.slice(e,n):yr.call(t,e,n)}function Fn(t){function e(e){return e.map(function(e){var n=1,r=d;if(A(e))r=e;else if(x(e)&&("+"!==e.charAt(0)&&"-"!==e.charAt(0)||(n="-"===e.charAt(0)?-1:1,e=e.substring(1)),""!==e&&(r=t(e),r.constant)))var i=r(),r=function(t){return t[i]};return{get:r,descending:n}})}function n(t){switch(typeof t){case"number":case"boolean":case"string":return!0;default:return!1}}function o(t,e){var n=0,r=t.type,i=e.type;if(r===i){var i=t.value,o=e.value;"string"===r?(i=i.toLowerCase(),o=o.toLowerCase()):"object"===r&&(b(i)&&(i=t.index),b(o)&&(o=e.index)),i!==o&&(n=i<o?-1:1)}else n="undefined"===r?1:"undefined"===i?-1:"null"===r?1:"null"===i?-1:r<i?-1:1;return n}return function(t,a,s,u){if(null==t)return t;if(!i(t))throw r("orderBy")("notarray",t);E(a)||(a=[a]),0===a.length&&(a=["+"]);var c=e(a),l=s?-1:1,f=A(u)?u:o;return t=Array.prototype.map.call(t,function(t,e){return{value:t,tieBreaker:{value:e,type:"number",index:e},predicateValues:c.map(function(r){var i=r.get(t);return r=typeof i,null===i?r="null":"object"===r&&(A(i.valueOf)&&(i=i.valueOf(),n(i))||v(i)&&(i=i.toString(),n(i))),{value:i,type:r,index:e}})}}),t.sort(function(t,e){for(var n=0,r=c.length;n<r;n++){var i=f(t.predicateValues[n],e.predicateValues[n]);if(i)return i*c[n].descending*l}return(f(t.tieBreaker,e.tieBreaker)||o(t.tieBreaker,e.tieBreaker))*l}),t=t.map(function(t){return t.value})}}function qn(t){return A(t)&&(t={link:t}),t.restrict=t.restrict||"AC",m(t)}function Hn(t,e,n,r,i){this.$$controls=[],this.$error={},this.$$success={},this.$pending=void 0,this.$name=i(e.name||e.ngForm||"")(n),this.$dirty=!1,this.$valid=this.$pristine=!0,this.$submitted=this.$invalid=!1,this.$$parentForm=lo,this.$$element=t,this.$$animate=r,Bn(this)}function Bn(t){t.$$classCache={},t.$$classCache[Wo]=!(t.$$classCache[zo]=t.$$element.hasClass(zo))}function zn(t){function e(t,e,n){n&&!t.$$classCache[e]?(t.$$animate.addClass(t.$$element,e),t.$$classCache[e]=!0):!n&&t.$$classCache[e]&&(t.$$animate.removeClass(t.$$element,e),t.$$classCache[e]=!1)}function n(t,n,r){n=n?"-"+ot(n,"-"):"",e(t,zo+n,!0===r),e(t,Wo+n,!1===r)}var r=t.set,i=t.unset;t.clazz.prototype.$setValidity=function(t,o,a){g(o)?(this.$pending||(this.$pending={}),r(this.$pending,t,a)):(this.$pending&&i(this.$pending,t,a),Wn(this.$pending)&&(this.$pending=void 0)),T(o)?o?(i(this.$error,t,a),r(this.$$success,t,a)):(r(this.$error,t,a),i(this.$$success,t,a)):(i(this.$error,t,a),i(this.$$success,t,a)),this.$pending?(e(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,n(this,"",null)):(e(this,"ng-pending",!1),this.$valid=Wn(this.$error),this.$invalid=!this.$valid,n(this,"",this.$valid)),o=this.$pending&&this.$pending[t]?void 0:!this.$error[t]&&(!!this.$$success[t]||null),n(this,t,o),this.$$parentForm.$setValidity(t,o,this)}}function Wn(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function Gn(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function Kn(t,e,n,r,i,o){var a=vr(e[0].type);if(!i.android){var s=!1;e.on("compositionstart",function(){s=!0}),e.on("compositionupdate",function(t){(g(t.data)||""===t.data)&&(s=!1)}),e.on("compositionend",function(){s=!1,c()})}var u,c=function(t){if(u&&(o.defer.cancel(u),u=null),!s){var i=e.val();t=t&&t.type,"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=Mr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,t)}};if(i.hasEvent("input"))e.on("input",c);else{var l=function(t,e,n){u||(u=o.defer(function(){u=null,e&&e.value===n||c(t)}))};e.on("keydown",function(t){var e=t.keyCode;91===e||15<e&&19>e||37<=e&&40>=e||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut drop",l)}e.on("change",c),So[a]&&r.$$hasNativeValidators&&a===n.type&&e.on("keydown wheel mousedown",function(t){if(!u){var e=this.validity,n=e.badInput,r=e.typeMismatch;u=o.defer(function(){u=null,e.badInput===n&&e.typeMismatch===r||c(t)})}}),r.$render=function(){var t=r.$isEmpty(r.$viewValue)?"":r.$viewValue;e.val()!==t&&e.val(t)}}function Jn(t,e){return function(n,r){var i,a;if(S(n))return n;if(x(n)){if('"'===n.charAt(0)&&'"'===n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),$o.test(n))return new Date(n);if(t.lastIndex=0,i=t.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(t,n){n<e.length&&(a[e[n]]=+t)}),i=new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0),100>a.yyyy&&i.setFullYear(a.yyyy),i}return NaN}}function Zn(t,e,n,r){return function(i,o,a,s,u,c,l){function f(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function h(t){return y(t)&&!S(t)?p(t)||void 0:t}function p(t,e){var r=s.$options.getOption("timezone");d&&d!==r&&(e=W(e,z(d)));var i=n(t,e);return!isNaN(i)&&r&&(i=G(i,r)),i}Yn(i,o,a,s,t),Kn(i,o,a,s,u,c);var $,d,m="time"===t||"datetimelocal"===t;if(s.$parsers.push(function(n){return s.$isEmpty(n)?null:e.test(n)?p(n,$):void(s.$$parserName=t)}),s.$formatters.push(function(t){if(t&&!S(t))throw Jo("datefmt",t);if(f(t)){$=t;var e=s.$options.getOption("timezone");e&&(d=e,$=G($,e,!0));var n=r;return m&&x(s.$options.getOption("timeSecondsFormat"))&&(n=r.replace("ss.sss",s.$options.getOption("timeSecondsFormat")).replace(/:$/,"")),t=l("date")(t,n,e),m&&s.$options.getOption("timeStripZeroSeconds")&&(t=t.replace(/(?::00)?(?:\.000)?$/,"")),t}return d=$=null,""}),y(a.min)||a.ngMin){var v;s.$validators.min=function(t){return!f(t)||g(v)||n(t)>=v},a.$observe("min",function(t){v=h(t),s.$validate()})}if(y(a.max)||a.ngMax){var b;s.$validators.max=function(t){return!f(t)||g(b)||n(t)<=b},a.$observe("max",function(t){b=h(t),s.$validate()})}}}function Yn(t,e,n,r,i){(r.$$hasNativeValidators=b(e[0].validity))&&r.$parsers.push(function(t){var n=e.prop("validity")||{};if(!n.badInput&&!n.typeMismatch)return t;r.$$parserName=i})}function Qn(t){t.$parsers.push(function(e){return t.$isEmpty(e)?null:go.test(e)?parseFloat(e):void(t.$$parserName="number")}),t.$formatters.push(function(e){if(!t.$isEmpty(e)){if(!C(e))throw Jo("numfmt",e);e=e.toString()}return e})}function Xn(t){return y(t)&&!C(t)&&(t=parseFloat(t)),Ar(t)?void 0:t}function tr(t){var e=t.toString(),n=e.indexOf(".");return-1===n?-1<t&&1>t&&(t=/e-(\d+)$/.exec(e))?Number(t[1]):0:e.length-n-1}function er(t,e,n){t=Number(t);var r=(0|t)!==t,i=(0|e)!==e,o=(0|n)!==n;if(r||i||o){var a=r?tr(t):0,s=i?tr(e):0,u=o?tr(n):0,a=Math.max(a,s,u),a=Math.pow(10,a);t*=a,e*=a,n*=a,r&&(t=Math.round(t)),i&&(e=Math.round(e)),o&&(n=Math.round(n))}return 0==(t-e)%n}function nr(t,e,n,r,i){if(y(r)){if(t=t(r),!t.constant)throw Jo("constexpr",n,r);return t(e)}return i}function rr(t,e){function n(t,e){if(!t||!t.length)return[];if(!e||!e.length)return t;var n=[],r=0;t:for(;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i===e[o])continue t;n.push(i)}return n}function r(t){var e=t;return E(t)?e=t.map(r).join(" "):b(t)&&(e=Object.keys(t).filter(function(e){return t[e]}).join(" ")),e}t="ngClass"+t;var i;return["$parse",function(a){return{restrict:"AC",link:function(s,u,c){function l(t,e){var n=[];return o(t,function(t){(0<e||p[t])&&(p[t]=(p[t]||0)+e,p[t]===+(0<e)&&n.push(t))}),n.join(" ")}function f(t){if(t===e){var n=h,n=l(n&&n.split(" "),1);c.$addClass(n)}else n=h,n=l(n&&n.split(" "),-1),c.$removeClass(n);$=t}var h,p=u.data("$classCounts"),$=!0;p||(p=ft(),u.data("$classCounts",p)),"ngClass"!==t&&(i||(i=a("$index",function(t){return 1&t})),s.$watch(i,f)),s.$watch(a(c[t],r),function(t){if($===e){var r=h&&h.split(" "),i=t&&t.split(" "),o=n(r,i),r=n(i,r),o=l(o,-1),r=l(r,1);c.$addClass(r),c.$removeClass(o)}h=t})}}}]}function ir(t,e,n,r,i,o){return{restrict:"A",compile:function(a,s){var u=t(s[r]);return function(t,r){r.on(i,function(r){var i=function(){u(t,{$event:r})};if(e.$$phase)if(o)t.$evalAsync(i);else try{i()}catch(t){n(t)}else t.$apply(i)})}}}}function or(t,e,n,r,i,o,a,s,u){this.$modelValue=this.$viewValue=Number.NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,this.$name=u(n.name||"",!1)(t),this.$$parentForm=lo,this.$options=Zo,this.$$updateEvents="",this.$$updateEventHandler=this.$$updateEventHandler.bind(this),this.$$parsedNgModel=i(n.ngModel),this.$$parsedNgModelAssign=this.$$parsedNgModel.assign,this.$$ngModelGet=this.$$parsedNgModel,
this.$$ngModelSet=this.$$parsedNgModelAssign,this.$$pendingDebounce=null,this.$$parserValid=void 0,this.$$parserName="parse",this.$$currentValidationRunId=0,this.$$scope=t,this.$$rootScope=t.$root,this.$$attr=n,this.$$element=r,this.$$animate=o,this.$$timeout=a,this.$$parse=i,this.$$q=s,this.$$exceptionHandler=e,Bn(this),ar(this)}function ar(t){t.$$scope.$watch(function(e){return e=t.$$ngModelGet(e),e===t.$modelValue||t.$modelValue!==t.$modelValue&&e!==e||t.$$setModelValue(e),e})}function sr(t){this.$$options=t}function ur(t,e){o(e,function(e,n){y(t[n])||(t[n]=e)})}function cr(t,e){t.prop("selected",e),t.attr("selected",e)}var lr,fr,hr,pr,$r={objectMaxDepth:5,urlErrorParamsEnabled:!0},dr=/^\/(.+)\/([a-z]*)$/,mr=Object.prototype.hasOwnProperty,vr=function(t){return x(t)?t.toLowerCase():t},gr=function(t){return x(t)?t.toUpperCase():t},yr=[].slice,br=[].splice,wr=[].push,xr=Object.prototype.toString,Cr=Object.getPrototypeOf,Sr=r("ng"),Er=t.angular||(t.angular={}),kr=0;lr=t.document.documentMode;var Ar=Number.isNaN||function(t){return t!==t};$.$inject=[],d.$inject=[];var Or=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,Mr=function(t){return x(t)?t.trim():t},Vr=function(t){return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Tr=function(){if(!y(Tr.rules)){var e=t.document.querySelector("[ng-csp]")||t.document.querySelector("[data-ng-csp]");if(e){var n=e.getAttribute("ng-csp")||e.getAttribute("data-ng-csp");Tr.rules={noUnsafeEval:!n||-1!==n.indexOf("no-unsafe-eval"),noInlineStyle:!n||-1!==n.indexOf("no-inline-style")}}else{e=Tr;try{new Function(""),n=!1}catch(t){n=!0}e.rules={noUnsafeEval:n,noInlineStyle:!1}}}return Tr.rules},Nr=function(){if(y(Nr.name_))return Nr.name_;var e,n,r,i,o=Pr.length;for(n=0;n<o;++n)if(r=Pr[n],e=t.document.querySelector("["+r.replace(":","\\:")+"jq]")){i=e.getAttribute(r+"jq");break}return Nr.name_=i},Ir=/:/g,Pr=["ng-","data-ng-","ng:","x-ng-"],jr=function(e){var n=e.currentScript;return!n||(n instanceof t.HTMLScriptElement||n instanceof t.SVGScriptElement)&&(n=n.attributes,[n.getNamedItem("src"),n.getNamedItem("href"),n.getNamedItem("xlink:href")].every(function(t){if(!t)return!0;if(!t.value)return!1;var n=e.createElement("a");if(n.href=t.value,e.location.origin===n.origin)return!0;switch(n.protocol){case"http:":case"https:":case"ftp:":case"blob:":case"file:":case"data:":return!0;default:return!1}}))}(t.document),Rr=/[A-Z]/g,Dr=!1,Ur=3,Lr={full:"1.7.4",major:1,minor:7,dot:4,codeName:"interstellar-exploration"};bt.expando="ng339";var _r=bt.cache={},Fr=1;bt._data=function(t){return this.cache[t[this.expando]]||{}};var qr=/-([a-z])/g,Hr=/^-ms-/,Br={mouseleave:"mouseout",mouseenter:"mouseover"},zr=r("jqLite"),Wr=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Gr=/<|&#?\w+;/,Kr=/<([\w:-]+)/,Jr=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Zr={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Zr.optgroup=Zr.option,Zr.tbody=Zr.tfoot=Zr.colgroup=Zr.caption=Zr.thead,Zr.th=Zr.td;var Yr=t.Node.prototype.contains||function(t){return!!(16&this.compareDocumentPosition(t))},Qr=bt.prototype={ready:Ut,toString:function(){var t=[];return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return fr(0<=t?this[t]:this[this.length+t])},length:0,push:wr,sort:[].sort,splice:[].splice},Xr={};o("multiple selected checked disabled readOnly required open".split(" "),function(t){Xr[vr(t)]=t});var ti={};o("input select option textarea button form details".split(" "),function(t){ti[t]=!0});var ei={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};o({data:Ot,removeData:kt,hasData:function(t){for(var e in _r[t.ng339])return!0;return!1},cleanData:function(t){for(var e=0,n=t.length;e<n;e++)kt(t[e]),Et(t[e])}},function(t,e){bt[e]=t}),o({data:Ot,inheritedData:Pt,scope:function(t){return fr.data(t,"$scope")||Pt(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return fr.data(t,"$isolateScope")||fr.data(t,"$isolateScopeNoTemplate")},controller:It,injector:function(t){return Pt(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:Mt,css:function(t,e,n){if(e=vt(e.replace(Hr,"ms-")),!y(n))return t.style[e];t.style[e]=n},attr:function(t,e,n){var r=t.nodeType;if(r!==Ur&&2!==r&&8!==r&&t.getAttribute){var r=vr(e),i=Xr[r];if(!y(n))return t=t.getAttribute(e),i&&null!==t&&(t=r),null===t?void 0:t;null===n||!1===n&&i?t.removeAttribute(e):t.setAttribute(e,i?r:n)}},prop:function(t,e,n){if(!y(n))return t[e];t[e]=n},text:function(){function t(t,e){if(g(e)){var n=t.nodeType;return 1===n||n===Ur?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(g(e)){if(t.multiple&&"select"===j(t)){var n=[];return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),n}return t.value}t.value=e},html:function(t,e){if(g(e))return t.innerHTML;xt(t,!0),t.innerHTML=e},empty:jt},function(t,e){bt.prototype[e]=function(e,n){var r,i,o=this.length;if(t!==jt&&g(2===t.length&&t!==Mt&&t!==It?e:n)){if(b(e)){for(r=0;r<o;r++)if(t===Ot)t(this[r],e);else for(i in e)t(this[r],i,e[i]);return this}for(r=t.$dv,o=g(r)?Math.min(o,1):o,i=0;i<o;i++){var a=t(this[i],e,n);r=r?r+a:a}return r}for(r=0;r<o;r++)t(this[r],e,n);return this}}),o({removeData:kt,on:function(t,e,n,r){if(y(r))throw zr("onargs");if(gt(t)){r=At(t,!0);var i=r.events,o=r.handle;o||(o=r.handle=_t(t,i)),r=0<=e.indexOf(" ")?e.split(" "):[e];for(var a=r.length,s=function(e,r,a){var s=i[e];s||(s=i[e]=[],s.specialHandlerWrapper=r,"$destroy"===e||a||t.addEventListener(e,o)),s.push(n)};a--;)e=r[a],Br[e]?(s(Br[e],qt),s(e,void 0,!0)):s(e)}},off:Et,one:function(t,e,n){t=fr(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode;xt(t),o(new bt(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[];return o(t.childNodes,function(t){1===t.nodeType&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType;if(1===n||11===n){e=new bt(e);for(var n=0,r=e.length;n<r;n++)t.appendChild(e[n])}},prepend:function(t,e){if(1===t.nodeType){var n=t.firstChild;o(new bt(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){var n=fr(e).eq(0).clone()[0],r=t.parentNode;r&&r.replaceChild(n,t),n.appendChild(t)},remove:Rt,detach:function(t){Rt(t,!0)},after:function(t,e){var n=t,r=t.parentNode;if(r){e=new bt(e);for(var i=0,o=e.length;i<o;i++){var a=e[i];r.insertBefore(a,n.nextSibling),n=a}}},addClass:Tt,removeClass:Vt,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n;g(r)&&(r=!Mt(t,e)),(r?Tt:Vt)(t,e)})},parent:function(t){return(t=t.parentNode)&&11!==t.nodeType?t:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:wt,triggerHandler:function(t,e,n){var r,i,a=e.type||e,s=At(t);(s=(s=s&&s.events)&&s[a])&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:$,type:a,target:t},e.type&&(r=l(r,e)),e=$t(s),i=n?[r].concat(n):[r],o(e,function(e){r.isImmediatePropagationStopped()||e.apply(t,i)}))}},function(t,e){bt.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;o<a;o++)g(i)?(i=t(this[o],e,n,r),y(i)&&(i=fr(i))):Nt(i,t(this[o],e,n,r));return y(i)?i:this}}),bt.prototype.bind=bt.prototype.on,bt.prototype.unbind=bt.prototype.off;var ni=Object.create(null);zt.prototype={_idx:function(t){return t!==this._lastKey&&(this._lastKey=t,this._lastIndex=this._keys.indexOf(t)),this._lastIndex},_transformKey:function(t){return Ar(t)?ni:t},get:function(t){if(t=this._transformKey(t),-1!==(t=this._idx(t)))return this._values[t]},has:function(t){return t=this._transformKey(t),-1!==this._idx(t)},set:function(t,e){t=this._transformKey(t);var n=this._idx(t);-1===n&&(n=this._lastIndex=this._keys.length),this._keys[n]=t,this._values[n]=e},delete:function(t){return t=this._transformKey(t),-1!==(t=this._idx(t))&&(this._keys.splice(t,1),this._values.splice(t,1),this._lastKey=NaN,this._lastIndex=-1,!0)}};var ri=zt,ii=[function(){this.$get=[function(){return ri}]}],oi=/^([^(]+?)=>/,ai=/^[^(]*\(\s*([^)]*)\)/m,si=/,/,ui=/^\s*(_?)(\S+?)\1\s*$/,ci=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,li=r("$injector");Kt.$$annotate=function(t,e,n){var r;if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw x(n)&&n||(n=t.name||Gt(t)),li("strictdi",n);e=Wt(t),o(e[1].split(si),function(t){t.replace(ui,function(t,e,n){r.push(n)})})}t.$inject=r}}else E(t)?(e=t.length-1,st(t[e],"fn"),r=t.slice(0,e)):st(t,"fn",!0);return r};var fi=r("$animate"),hi=function(){this.$get=$},pi=function(){var t=new ri,e=[];this.$get=["$$AnimateRunner","$rootScope",function(n,r){function i(t,e,n){var r=!1;return e&&(e=x(e)?e.split(" "):E(e)?e:[],o(e,function(e){e&&(r=!0,t[e]=n)})),r}function a(){o(e,function(e){var n=t.get(e);if(n){var r=Yt(e.attr("class")),i="",a="";o(n,function(t,e){t!==!!r[e]&&(t?i+=(i.length?" ":"")+e:a+=(a.length?" ":"")+e)}),o(e,function(t){i&&Tt(t,i),a&&Vt(t,a)}),t.delete(e)}}),e.length=0}return{enabled:$,on:$,off:$,pin:$,push:function(o,s,u,c){return c&&c(),u=u||{},u.from&&o.css(u.from),u.to&&o.css(u.to),(u.addClass||u.removeClass)&&(s=u.addClass,c=u.removeClass,u=t.get(o)||{},s=i(u,s,!0),c=i(u,c,!1),(s||c)&&(t.set(o,u),e.push(o),1===e.length&&r.$$postDigest(a))),o=new n,o.complete(),o}}}]},$i=["$provide",function(t){var e=this,n=null,r=null;this.$$registeredAnimations=Object.create(null),this.register=function(n,r){if(n&&"."!==n.charAt(0))throw fi("notcsel",n);var i=n+"-animation";e.$$registeredAnimations[n.substr(1)]=i,t.factory(i,r)},this.customFilter=function(t){return 1===arguments.length&&(r=A(t)?t:null),r},this.classNameFilter=function(t){if(1===arguments.length&&(n=t instanceof RegExp?t:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(n.toString()))throw n=null,fi("nongcls","ng-animate");return n},this.$get=["$$animateQueue",function(t){function e(t,e,n){if(n){var r;t:{for(r=0;r<n.length;r++){var i=n[r];if(1===i.nodeType){r=i;break t}}r=void 0}!r||r.parentNode||r.previousElementSibling||(n=null)}n?n.after(t):e.prepend(t)}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.cancel&&t.cancel()},enter:function(n,r,i,o){return r=r&&fr(r),i=i&&fr(i),r=r||i.parent(),e(n,r,i),t.push(n,"enter",Qt(o))},move:function(n,r,i,o){return r=r&&fr(r),i=i&&fr(i),r=r||i.parent(),e(n,r,i),t.push(n,"move",Qt(o))},leave:function(e,n){return t.push(e,"leave",Qt(n),function(){e.remove()})},addClass:function(e,n,r){return r=Qt(r),r.addClass=Zt(r.addclass,n),t.push(e,"addClass",r)},removeClass:function(e,n,r){return r=Qt(r),r.removeClass=Zt(r.removeClass,n),t.push(e,"removeClass",r)},setClass:function(e,n,r,i){return i=Qt(i),i.addClass=Zt(i.addClass,n),i.removeClass=Zt(i.removeClass,r),t.push(e,"setClass",i)},animate:function(e,n,r,i,o){return o=Qt(o),o.from=o.from?l(o.from,n):n,o.to=o.to?l(o.to,r):r,o.tempClasses=Zt(o.tempClasses,i||"ng-inline-animate"),t.push(e,"animate",o)}}}]}],di=function(){this.$get=["$$rAF",function(t){function e(e){n.push(e),1<n.length||t(function(){for(var t=0;t<n.length;t++)n[t]();n=[]})}var n=[];return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}]},mi=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(t,e,n,r,i){function a(t){this.setHost(t);var e=n();this._doneCallbacks=[],this._tick=function(t){r()?i(t,0,!1):e(t)},this._state=0}return a.chain=function(t,e){function n(){r===t.length?e(!0):t[r](function(t){!1===t?e(!1):(r++,n())})}var r=0;n()},a.all=function(t,e){function n(n){i=i&&n,++r===t.length&&e(i)}var r=0,i=!0;o(t,function(t){t.done(n)})},a.prototype={setHost:function(t){this.host=t||{}},done:function(t){2===this._state?t():this._doneCallbacks.push(t)},progress:$,getPromise:function(){if(!this.promise){var e=this;this.promise=t(function(t,n){e.done(function(e){!1===e?n():t()})})}return this.promise},then:function(t,e){return this.getPromise().then(t,e)},catch:function(t){return this.getPromise().catch(t)},finally:function(t){return this.getPromise().finally(t)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(t){var e=this;0===e._state&&(e._state=1,e._tick(function(){e._resolve(t)}))},_resolve:function(t){2!==this._state&&(o(this._doneCallbacks,function(e){e(t)}),this._doneCallbacks.length=0,this._state=2)}},a}]},vi=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(t,e,n){return function(e,r){function i(){return t(function(){o.addClass&&(e.addClass(o.addClass),o.addClass=null),o.removeClass&&(e.removeClass(o.removeClass),o.removeClass=null),o.to&&(e.css(o.to),o.to=null),a||s.complete(),a=!0}),s}var o=r||{};o.$$prepared||(o=D(o)),o.cleanupStyles&&(o.from=o.to=null),o.from&&(e.css(o.from),o.from=null);var a,s=new n;return{start:i,end:i}}}]},gi=r("$compile"),yi=new function(){};re.$inject=["$provide","$$sanitizeUriProvider"],ie.prototype.isFirstChange=function(){return this.previousValue===yi};var bi=/^((?:x|data)[:\-_])/i,wi=/[:\-_]+(.)/g,xi=r("$controller"),Ci=/^(\S+)(\s+as\s+([\w$]+))?$/,Si=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof fr&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Ei="application/json",ki={"Content-Type":Ei+";charset=utf-8"},Ai=/^\[|^\{(?!\{)/,Oi={"[":/]$/,"{":/}$/},Mi=/^\)]\}',?\n/,Vi=r("$http"),Ti=Er.$interpolateMinErr=r("$interpolate");Ti.throwNoconcat=function(t){throw Ti("noconcat",t)},Ti.interr=function(t,e){return Ti("interr",t,e.toString())};var Ni=r("$interval"),Ii=function(){this.$get=function(){function t(t){var e=function(t){e.data=t,e.called=!0};return e.id=t,e}var e=Er.callbacks,n={};return{createCallback:function(r){r="_"+(e.$$counter++).toString(36);var i="angular.callbacks."+r,o=t(r);return n[i]=e[r]=o,i},wasCalled:function(t){return n[t].called},getResponse:function(t){return n[t].data},removeCallback:function(t){delete e[n[t].id],delete n[t]}}}},Pi=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,ji={http:80,https:443,ftp:21},Ri=r("$location"),Di=/^\s*[\\\/]{2,}/,Ui={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var t=this.$$path,e=this.$$hash,n=Y(this.$$search),e=e?"#"+Q(e):"",t=t.split("/"),r=t.length;r--;)t[r]=Q(t[r].replace(/%2F/g,"/"));this.$$url=t.join("/")+(n?"?"+n:"")+e,this.$$absUrl=this.$$normalizeUrl(this.$$url),this.$$urlUpdatedByLocation=!0},absUrl:je("$$absUrl"),url:function(t){if(g(t))return this.$$url;var e=Pi.exec(t);return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:je("$$protocol"),host:je("$$host"),port:je("$$port"),path:Re("$$path",function(t){return t=null!==t?t.toString():"","/"===t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(x(t)||C(t))t=t.toString(),this.$$search=Z(t);else{if(!b(t))throw Ri("isrcharg");t=D(t,{}),o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:g(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:Re("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}};o([Pe,Ie,Ne],function(t){t.prototype=Object.create(Ui),t.prototype.state=function(e){if(!arguments.length)return this.$$state;if(t!==Ne||!this.$$html5)throw Ri("nostate");return this.$$state=g(e)?null:e,this.$$urlUpdatedByLocation=!0,this}});var Li=r("$parse"),_i={}.constructor.prototype.valueOf,Fi=ft();o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){Fi[t]=!0});var qi={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Hi=function(t){this.options=t};Hi.prototype={constructor:Hi,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;)if('"'===(t=this.text.charAt(this.index))||"'"===t)this.readString(t);else if(this.isNumber(t)||"."===t&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(t,"(){}[].,;:?"))this.tokens.push({index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{var e=t+this.peek(),n=e+this.peek(2),r=Fi[e],i=Fi[n];Fi[t]||r||i?(t=i?n:r?e:t,this.tokens.push({index:this.index,text:t,operator:!0}),this.index+=t.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){return t=t||1,this.index+t<this.text.length&&this.text.charAt(this.index+t)},isNumber:function(t){return"0"<=t&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"\t"===t||"\n"===t||"\v"===t||" "===t},isIdentifierStart:function(t){return this.options.isIdentifierStart?this.options.isIdentifierStart(t,this.codePointAt(t)):this.isValidIdentifierStart(t)},isValidIdentifierStart:function(t){return"a"<=t&&"z">=t||"A"<=t&&"Z">=t||"_"===t||"$"===t},isIdentifierContinue:function(t){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(t,this.codePointAt(t)):this.isValidIdentifierContinue(t)},isValidIdentifierContinue:function(t,e){return this.isValidIdentifierStart(t,e)||this.isNumber(t)},codePointAt:function(t){return 1===t.length?t.charCodeAt(0):(t.charCodeAt(0)<<10)+t.charCodeAt(1)-56613888},peekMultichar:function(){var t=this.text.charAt(this.index),e=this.peek();if(!e)return t;var n=t.charCodeAt(0),r=e.charCodeAt(0);return 55296<=n&&56319>=n&&56320<=r&&57343>=r?t+e:t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){throw n=n||this.index,e=y(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n,Li("lexerr",t,e,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=vr(this.text.charAt(this.index));if("."===n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"===n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"===t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!==t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){var t=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var e=this.peekMultichar();if(!this.isIdentifierContinue(e))break;this.index+=e.length}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index),r=r+o;if(i)"u"===o?(i=this.text.substring(this.index+1,this.index+5),i.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+i+"]"),this.index+=4,n+=String.fromCharCode(parseInt(i,16))):n+=qi[o]||o,i=!1;else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var Bi=function(t,e){this.lexer=t,this.options=e};Bi.Program="Program",Bi.ExpressionStatement="ExpressionStatement",Bi.AssignmentExpression="AssignmentExpression",Bi.ConditionalExpression="ConditionalExpression",Bi.LogicalExpression="LogicalExpression",Bi.BinaryExpression="BinaryExpression",Bi.UnaryExpression="UnaryExpression",Bi.CallExpression="CallExpression",Bi.MemberExpression="MemberExpression",Bi.Identifier="Identifier",Bi.Literal="Literal",Bi.ArrayExpression="ArrayExpression",Bi.Property="Property",Bi.ObjectExpression="ObjectExpression",Bi.ThisExpression="ThisExpression",Bi.LocalsExpression="LocalsExpression",Bi.NGValueParameter="NGValueParameter",Bi.prototype={ast:function(t){return this.text=t,this.tokens=this.lexer.lex(t),t=this.program(),0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),t},program:function(){for(var t=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:Bi.Program,body:t}},expressionStatement:function(){return{type:Bi.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t=this.expression();this.expect("|");)t=this.filter(t);return t},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary();if(this.expect("=")){if(!ze(t))throw Li("lval");t={type:Bi.AssignmentExpression,left:t,right:this.assignment(),operator:"="}}return t},ternary:function(){var t,e,n=this.logicalOR();return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:Bi.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:Bi.LogicalExpression,operator:"||",left:t,right:this.logicalAND()};return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:Bi.LogicalExpression,operator:"&&",left:t,right:this.equality()};return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:Bi.BinaryExpression,operator:t.text,left:e,right:this.relational()};return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:Bi.BinaryExpression,operator:t.text,left:e,right:this.additive()};return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:Bi.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()};return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:Bi.BinaryExpression,operator:t.text,left:e,right:this.unary()};return e},unary:function(){var t;return(t=this.expect("+","-","!"))?{type:Bi.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t;this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?t=D(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?t={type:Bi.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek());for(var e;e=this.expect("(","[",".");)"("===e.text?(t={type:Bi.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:Bi.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:Bi.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return t},filter:function(t){t=[t];for(var e={type:Bi.CallExpression,callee:this.identifier(),arguments:t,filter:!0};this.expect(":");)t.push(this.expression());return e},parseArguments:function(){var t=[];if(")"!==this.peekToken().text)do{t.push(this.filterChain())}while(this.expect(","));return t},identifier:function(){var t=this.consume();return t.identifier||this.throwError("is not a valid identifier",t),{type:Bi.Identifier,name:t.text}},constant:function(){return{type:Bi.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;t.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:Bi.ArrayExpression,elements:t}},object:function(){var t,e=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;t={type:Bi.Property,kind:"init"},this.peek().constant?(t.key=this.constant(),t.computed=!1,this.consume(":"),t.value=this.expression()):this.peek().identifier?(t.key=this.identifier(),t.computed=!1,this.peek(":")?(this.consume(":"),t.value=this.expression()):t.value=t.key):this.peek("[")?(this.consume("["),t.key=this.expression(),this.consume("]"),t.computed=!0,this.consume(":"),t.value=this.expression()):this.throwError("invalid key",this.peek()),e.push(t)}while(this.expect(","));return this.consume("}"),{type:Bi.ObjectExpression,properties:e}},throwError:function(t,e){throw Li("syntax",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw Li("ueoe",this.text);var e=this.expect(t);return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw Li("ueoe",this.text);return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){t=this.tokens[t];var o=t.text;if(o===e||o===n||o===r||o===i||!(e||n||r||i))return t}return!1},expect:function(t,e,n,r){return!!(t=this.peek(t,e,n,r))&&(this.tokens.shift(),t)},selfReferential:{this:{type:Bi.ThisExpression},$locals:{type:Bi.LocalsExpression}}};var zi=2;Ge.prototype={compile:function(t){var e=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},He(t,e.$filter);var n,r="";return this.stage="assign",(n=We(t))&&(this.state.computing="assign",r=this.nextId(),this.recurse(n,r),this.return_(r),r="fn.assign="+this.generateFunction("assign","s,v,l")),n=Be(t.body),e.stage="inputs",o(n,function(t,n){var r="fn"+n;e.state[r]={vars:[],body:[],own:{}},e.state.computing=r;var i=e.nextId();e.recurse(t,i),e.return_(i),e.state.inputs.push({name:r,isPure:t.isPure}),t.watchId=n}),this.state.computing="fn",this.stage="main",this.recurse(t),t='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+r+this.watchFns()+"return fn;",t=new Function("$filter","getStringValue","ifDefined","plus",t)(this.$filter,Le,_e,Fe),this.state=this.stage=void 0,t},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this;return o(e,function(e){t.push("var "+e.name+"="+n.generateFunction(e.name,"s")),e.isPure&&t.push(e.name,".isPure="+JSON.stringify(e.isPure)+";")}),e.length&&t.push("fn.inputs=["+e.map(function(t){return t.name}).join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this;return o(this.state.filters,function(n,r){t.push(n+"=$filter("+e.escape(r)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,n,r,i,a){var s,u,c,l,f,h=this;if(r=r||$,!a&&y(t.watchId))e=e||this.nextId(),this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,n,r,i,!0));else switch(t.type){case Bi.Program:o(t.body,function(e,n){h.recurse(e.expression,void 0,void 0,function(t){u=t}),n!==t.body.length-1?h.current().body.push(u,";"):h.return_(u)});break;case Bi.Literal:l=this.escape(t.value),this.assign(e,l),r(e||l);break;case Bi.UnaryExpression:this.recurse(t.argument,void 0,void 0,function(t){u=t}),l=t.operator+"("+this.ifDefined(u,0)+")",this.assign(e,l),r(l);break;case Bi.BinaryExpression:this.recurse(t.left,void 0,void 0,function(t){s=t}),this.recurse(t.right,void 0,void 0,function(t){u=t}),l="+"===t.operator?this.plus(s,u):"-"===t.operator?this.ifDefined(s,0)+t.operator+this.ifDefined(u,0):"("+s+")"+t.operator+"("+u+")",this.assign(e,l),r(l);break;case Bi.LogicalExpression:e=e||this.nextId(),h.recurse(t.left,e),h.if_("&&"===t.operator?e:h.not(e),h.lazyRecurse(t.right,e)),r(e);break;case Bi.ConditionalExpression:e=e||this.nextId(),h.recurse(t.test,e),h.if_(e,h.lazyRecurse(t.alternate,e),h.lazyRecurse(t.consequent,e)),r(e);break;case Bi.Identifier:e=e||this.nextId(),n&&(n.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),n.computed=!1,n.name=t.name),h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",t.name)),function(){h.if_("inputs"===h.stage||"s",function(){i&&1!==i&&h.if_(h.isNull(h.nonComputedMember("s",t.name)),h.lazyAssign(h.nonComputedMember("s",t.name),"{}")),h.assign(e,h.nonComputedMember("s",t.name))})},e&&h.lazyAssign(e,h.nonComputedMember("l",t.name))),r(e);break;case Bi.MemberExpression:s=n&&(n.context=this.nextId())||this.nextId(),e=e||this.nextId(),h.recurse(t.object,s,void 0,function(){h.if_(h.notNull(s),function(){t.computed?(u=h.nextId(),h.recurse(t.property,u),h.getStringValue(u),i&&1!==i&&h.if_(h.not(h.computedMember(s,u)),h.lazyAssign(h.computedMember(s,u),"{}")),l=h.computedMember(s,u),h.assign(e,l),n&&(n.computed=!0,n.name=u)):(i&&1!==i&&h.if_(h.isNull(h.nonComputedMember(s,t.property.name)),h.lazyAssign(h.nonComputedMember(s,t.property.name),"{}")),l=h.nonComputedMember(s,t.property.name),h.assign(e,l),n&&(n.computed=!1,n.name=t.property.name))},function(){h.assign(e,"undefined")}),r(e)},!!i);break;case Bi.CallExpression:e=e||this.nextId(),t.filter?(u=h.filter(t.callee.name),c=[],o(t.arguments,function(t){var e=h.nextId();h.recurse(t,e),c.push(e)}),l=u+"("+c.join(",")+")",h.assign(e,l),r(e)):(u=h.nextId(),s={},c=[],h.recurse(t.callee,u,s,function(){h.if_(h.notNull(u),function(){o(t.arguments,function(e){h.recurse(e,t.constant?void 0:h.nextId(),void 0,function(t){c.push(t)})}),l=s.name?h.member(s.context,s.name,s.computed)+"("+c.join(",")+")":u+"("+c.join(",")+")",h.assign(e,l)},function(){h.assign(e,"undefined")}),r(e)}));break;case Bi.AssignmentExpression:u=this.nextId(),s={},this.recurse(t.left,void 0,s,function(){h.if_(h.notNull(s.context),function(){h.recurse(t.right,u),l=h.member(s.context,s.name,s.computed)+t.operator+u,h.assign(e,l),r(e||l)})},1);break;case Bi.ArrayExpression:c=[],o(t.elements,function(e){h.recurse(e,t.constant?void 0:h.nextId(),void 0,function(t){c.push(t)})}),l="["+c.join(",")+"]",this.assign(e,l),r(e||l);break;case Bi.ObjectExpression:c=[],f=!1,o(t.properties,function(t){t.computed&&(f=!0)}),f?(e=e||this.nextId(),this.assign(e,"{}"),o(t.properties,function(t){t.computed?(s=h.nextId(),h.recurse(t.key,s)):s=t.key.type===Bi.Identifier?t.key.name:""+t.key.value,u=h.nextId(),h.recurse(t.value,u),h.assign(h.member(e,s,t.computed),u)})):(o(t.properties,function(e){h.recurse(e.value,t.constant?void 0:h.nextId(),void 0,function(t){c.push(h.escape(e.key.type===Bi.Identifier?e.key.name:""+e.key.value)+":"+t)})}),l="{"+c.join(",")+"}",this.assign(e,l)),r(e||l);break;case Bi.ThisExpression:this.assign(e,"s"),r(e||"s");break;case Bi.LocalsExpression:this.assign(e,"l"),r(e||"l");break;case Bi.NGValueParameter:this.assign(e,"v"),r(e||"v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,r=this.current().own;return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),r[n]},assign:function(t,e){if(t)return this.current().body.push(t,"=",e,";"),t},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(!0===t)e();else{var r=this.current().body;r.push("if(",t,"){"),e(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(t){return"!("+t+")"},isNull:function(t){return t+"==null"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){var n=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?t+"."+e:t+'["'+e.replace(n,this.stringEscapeFn)+'"]'},computedMember:function(t,e){
return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},getStringValue:function(t){this.assign(t,"getStringValue("+t+")")},lazyRecurse:function(t,e,n,r,i,o){var a=this;return function(){a.recurse(t,e,n,r,i,o)}},lazyAssign:function(t,e){var n=this;return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(x(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(C(t))return t.toString();if(!0===t)return"true";if(!1===t)return"false";if(null===t)return"null";if(void 0===t)return"undefined";throw Li("esc")},nextId:function(t,e){var n="v"+this.state.nextId++;return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},Ke.prototype={compile:function(t){var e=this;He(t,e.$filter);var n,r;(n=We(t))&&(r=this.recurse(n)),n=Be(t.body);var i;n&&(i=[],o(n,function(t,n){var r=e.recurse(t);r.isPure=t.isPure,t.input=r,i.push(r),t.watchId=n}));var a=[];return o(t.body,function(t){a.push(e.recurse(t.expression))}),t=0===t.body.length?$:1===t.body.length?a[0]:function(t,e){var n;return o(a,function(r){n=r(t,e)}),n},r&&(t.assign=function(t,e,n){return r(t,n,e)}),i&&(t.inputs=i),t},recurse:function(t,e,n){var r,i,a,s=this;if(t.input)return this.inputs(t.input,t.watchId);switch(t.type){case Bi.Literal:return this.value(t.value,e);case Bi.UnaryExpression:return i=this.recurse(t.argument),this["unary"+t.operator](i,e);case Bi.BinaryExpression:case Bi.LogicalExpression:return r=this.recurse(t.left),i=this.recurse(t.right),this["binary"+t.operator](r,i,e);case Bi.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e);case Bi.Identifier:return s.identifier(t.name,e,n);case Bi.MemberExpression:return r=this.recurse(t.object,!1,!!n),t.computed||(i=t.property.name),t.computed&&(i=this.recurse(t.property)),t.computed?this.computedMember(r,i,e,n):this.nonComputedMember(r,i,e,n);case Bi.CallExpression:return a=[],o(t.arguments,function(t){a.push(s.recurse(t))}),t.filter&&(i=this.$filter(t.callee.name)),t.filter||(i=this.recurse(t.callee,!0)),t.filter?function(t,n,r,o){for(var s=[],u=0;u<a.length;++u)s.push(a[u](t,n,r,o));return t=i.apply(void 0,s,o),e?{context:void 0,name:void 0,value:t}:t}:function(t,n,r,o){var s,u=i(t,n,r,o);if(null!=u.value){s=[];for(var c=0;c<a.length;++c)s.push(a[c](t,n,r,o));s=u.value.apply(u.context,s)}return e?{value:s}:s};case Bi.AssignmentExpression:return r=this.recurse(t.left,!0,1),i=this.recurse(t.right),function(t,n,o,a){var s=r(t,n,o,a);return t=i(t,n,o,a),s.context[s.name]=t,e?{value:t}:t};case Bi.ArrayExpression:return a=[],o(t.elements,function(t){a.push(s.recurse(t))}),function(t,n,r,i){for(var o=[],s=0;s<a.length;++s)o.push(a[s](t,n,r,i));return e?{value:o}:o};case Bi.ObjectExpression:return a=[],o(t.properties,function(t){t.computed?a.push({key:s.recurse(t.key),computed:!0,value:s.recurse(t.value)}):a.push({key:t.key.type===Bi.Identifier?t.key.name:""+t.key.value,computed:!1,value:s.recurse(t.value)})}),function(t,n,r,i){for(var o={},s=0;s<a.length;++s)a[s].computed?o[a[s].key(t,n,r,i)]=a[s].value(t,n,r,i):o[a[s].key]=a[s].value(t,n,r,i);return e?{value:o}:o};case Bi.ThisExpression:return function(t){return e?{value:t}:t};case Bi.LocalsExpression:return function(t,n){return e?{value:n}:n};case Bi.NGValueParameter:return function(t,n,r){return e?{value:r}:r}}},"unary+":function(t,e){return function(n,r,i,o){return n=t(n,r,i,o),n=y(n)?+n:0,e?{value:n}:n}},"unary-":function(t,e){return function(n,r,i,o){return n=t(n,r,i,o),n=y(n)?-n:-0,e?{value:n}:n}},"unary!":function(t,e){return function(n,r,i,o){return n=!t(n,r,i,o),e?{value:n}:n}},"binary+":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a);return r=e(r,i,o,a),s=Fe(s,r),n?{value:s}:s}},"binary-":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a);return r=e(r,i,o,a),s=(y(s)?s:0)-(y(r)?r:0),n?{value:s}:s}},"binary*":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)*e(r,i,o,a),n?{value:r}:r}},"binary/":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)/e(r,i,o,a),n?{value:r}:r}},"binary%":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)%e(r,i,o,a),n?{value:r}:r}},"binary===":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)===e(r,i,o,a),n?{value:r}:r}},"binary!==":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)!==e(r,i,o,a),n?{value:r}:r}},"binary==":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)==e(r,i,o,a),n?{value:r}:r}},"binary!=":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)!=e(r,i,o,a),n?{value:r}:r}},"binary<":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)<e(r,i,o,a),n?{value:r}:r}},"binary>":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)>e(r,i,o,a),n?{value:r}:r}},"binary<=":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)<=e(r,i,o,a),n?{value:r}:r}},"binary>=":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)>=e(r,i,o,a),n?{value:r}:r}},"binary&&":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)&&e(r,i,o,a),n?{value:r}:r}},"binary||":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)||e(r,i,o,a),n?{value:r}:r}},"ternary?:":function(t,e,n,r){return function(i,o,a,s){return i=t(i,o,a,s)?e(i,o,a,s):n(i,o,a,s),r?{value:i}:i}},value:function(t,e){return function(){return e?{context:void 0,name:void 0,value:t}:t}},identifier:function(t,e,n){return function(r,i,o,a){return r=i&&t in i?i:r,n&&1!==n&&r&&null==r[t]&&(r[t]={}),i=r?r[t]:void 0,e?{context:r,name:t,value:i}:i}},computedMember:function(t,e,n,r){return function(i,o,a,s){var u,c,l=t(i,o,a,s);return null!=l&&(u=e(i,o,a,s),u+="",r&&1!==r&&l&&!l[u]&&(l[u]={}),c=l[u]),n?{context:l,name:u,value:c}:c}},nonComputedMember:function(t,e,n,r){return function(i,o,a,s){return i=t(i,o,a,s),r&&1!==r&&i&&null==i[e]&&(i[e]={}),o=null!=i?i[e]:void 0,n?{context:i,name:e,value:o}:o}},inputs:function(t,e){return function(n,r,i,o){return o?o[e]:t(n,r,i)}}},Je.prototype={constructor:Je,parse:function(t){t=this.getAst(t);var e=this.astCompiler.compile(t.ast),n=t.ast;return e.literal=0===n.body.length||1===n.body.length&&(n.body[0].expression.type===Bi.Literal||n.body[0].expression.type===Bi.ArrayExpression||n.body[0].expression.type===Bi.ObjectExpression),e.constant=t.ast.constant,e.oneTime=t.oneTime,e},getAst:function(t){var e=!1;return t=t.trim(),":"===t.charAt(0)&&":"===t.charAt(1)&&(e=!0,t=t.substring(2)),{ast:this.ast.ast(t),oneTime:e}}};var Wi,Gi=r("$sce"),Ki={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Ji=/_([a-z])/g,Zi=r("$templateRequest"),Yi=r("$timeout"),Qi=t.document.createElement("a"),Xi=dn(t.location.href);yn.$inject=["$document"],wn.$inject=["$provide"];var to=22,eo=".",no="0";kn.$inject=["$locale"],An.$inject=["$locale"];var ro={yyyy:Nn("FullYear",4,0,!1,!0),yy:Nn("FullYear",2,0,!0,!0),y:Nn("FullYear",1,0,!1,!0),MMMM:In("Month"),MMM:In("Month",!0),MM:Nn("Month",2,1),M:Nn("Month",1,1),LLLL:In("Month",!1,!0),dd:Nn("Date",2),d:Nn("Date",1),HH:Nn("Hours",2),H:Nn("Hours",1),hh:Nn("Hours",2,-12),h:Nn("Hours",1,-12),mm:Nn("Minutes",2),m:Nn("Minutes",1),ss:Nn("Seconds",2),s:Nn("Seconds",1),sss:Nn("Milliseconds",3),EEEE:In("Day"),EEE:In("Day",!0),a:function(t,e){return 12>t.getHours()?e.AMPMS[0]:e.AMPMS[1]},Z:function(t,e,n){return t=-1*n,t=(0<=t?"+":"")+(Tn(Math[0<t?"floor":"ceil"](t/60),2)+Tn(Math.abs(t%60),2))},ww:jn(2),w:jn(1),G:Rn,GG:Rn,GGG:Rn,GGGG:function(t,e){return 0>=t.getFullYear()?e.ERANAMES[0]:e.ERANAMES[1]}},io=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,oo=/^-?\d+$/;Dn.$inject=["$locale"];var ao=m(vr),so=m(gr);Fn.$inject=["$parse"];var uo=m({restrict:"E",compile:function(t,e){if(!e.href&&!e.xlinkHref)return function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===xr.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),co={};o(Xr,function(t,e){function n(t,n,i){t.$watch(i[r],function(t){i.$set(e,!!t)})}if("multiple"!==t){var r=oe("ng-"+e),i=n;"checked"===t&&(i=function(t,e,i){i.ngModel!==i[r]&&n(t,e,i)}),co[r]=function(){return{restrict:"A",priority:100,link:i}}}}),o(ei,function(t,e){co[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"===r.ngPattern.charAt(0)&&(n=r.ngPattern.match(dr)))return void r.$set("ngPattern",new RegExp(n[1],n[2]));t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=oe("ng-"+t);co[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===xr.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){e?(i.$set(a,e),lr&&o&&r.prop(o,i[a])):"href"===t&&i.$set(a,null)})}}}});var lo={$addControl:$,$getControls:m([]),$$renameControl:function(t,e){t.$name=e},$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$,$setSubmitted:$,$$setSubmitted:$};Hn.$inject=["$element","$attrs","$scope","$animate","$interpolate"],Hn.prototype={$rollbackViewValue:function(){o(this.$$controls,function(t){t.$rollbackViewValue()})},$commitViewValue:function(){o(this.$$controls,function(t){t.$commitViewValue()})},$addControl:function(t){ut(t.$name,"input"),this.$$controls.push(t),t.$name&&(this[t.$name]=t),t.$$parentForm=this},$getControls:function(){return $t(this.$$controls)},$$renameControl:function(t,e){var n=t.$name;this[n]===t&&delete this[n],this[e]=t,t.$name=e},$removeControl:function(t){t.$name&&this[t.$name]===t&&delete this[t.$name],o(this.$pending,function(e,n){this.$setValidity(n,null,t)},this),o(this.$error,function(e,n){this.$setValidity(n,null,t)},this),o(this.$$success,function(e,n){this.$setValidity(n,null,t)},this),R(this.$$controls,t),t.$$parentForm=lo},$setDirty:function(){this.$$animate.removeClass(this.$$element,Go),this.$$animate.addClass(this.$$element,Ko),this.$dirty=!0,this.$pristine=!1,this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Go,Ko+" ng-submitted"),this.$dirty=!1,this.$pristine=!0,this.$submitted=!1,o(this.$$controls,function(t){t.$setPristine()})},$setUntouched:function(){o(this.$$controls,function(t){t.$setUntouched()})},$setSubmitted:function(){for(var t=this;t.$$parentForm&&t.$$parentForm!==lo;)t=t.$$parentForm;t.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted"),this.$submitted=!0,o(this.$$controls,function(t){t.$$setSubmitted&&t.$$setSubmitted()})}},zn({clazz:Hn,set:function(t,e,n){var r=t[e];r?-1===r.indexOf(n)&&r.push(n):t[e]=[n]},unset:function(t,e,n){var r=t[e];r&&(R(r,n),0===r.length&&delete t[e])}});var fo=function(t){return["$timeout","$parse",function(e,n){function r(t){return""===t?n('this[""]').assign:n(t).assign||$}return{name:"form",restrict:t?"EAC":"E",require:["form","^^?form"],controller:Hn,compile:function(n,i){n.addClass(Go).addClass(zo);var o=i.name?"name":!(!t||!i.ngForm)&&"ngForm";return{pre:function(t,n,i,a){var s=a[0];if(!("action"in i)){var u=function(e){t.$apply(function(){s.$commitViewValue(),s.$setSubmitted()}),e.preventDefault()};n[0].addEventListener("submit",u),n.on("$destroy",function(){e(function(){n[0].removeEventListener("submit",u)},0,!1)})}(a[1]||s.$$parentForm).$addControl(s);var c=o?r(s.$name):$;o&&(c(t,s),i.$observe(o,function(e){s.$name!==e&&(c(t,void 0),s.$$parentForm.$$renameControl(s,e),(c=r(s.$name))(t,s))})),n.on("$destroy",function(){s.$$parentForm.$removeControl(s),c(t,void 0),l(s,lo)})}}}}}]},ho=fo(),po=fo(!0),$o=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,mo=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,vo=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,go=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,yo=/^(\d{4,})-(\d{2})-(\d{2})$/,bo=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,wo=/^(\d{4,})-W(\d\d)$/,xo=/^(\d{4,})-(\d\d)$/,Co=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,So=ft();o(["date","datetime-local","month","time","week"],function(t){So[t]=!0});var Eo={text:function(t,e,n,r,i,o){Kn(t,e,n,r,i,o),Gn(r)},date:Zn("date",yo,Jn(yo,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":Zn("datetimelocal",bo,Jn(bo,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:Zn("time",Co,Jn(Co,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:Zn("week",wo,function(t,e){if(S(t))return t;if(x(t)){wo.lastIndex=0;var n=wo.exec(t);if(n){var r=+n[1],i=+n[2],o=n=0,a=0,s=0,u=Pn(r),i=7*(i-1);return e&&(n=e.getHours(),o=e.getMinutes(),a=e.getSeconds(),s=e.getMilliseconds()),new Date(r,0,u.getDate()+i,n,o,a,s)}}return NaN},"yyyy-Www"),month:Zn("month",xo,Jn(xo,["yyyy","MM"]),"yyyy-MM"),number:function(t,e,n,r,i,o){Yn(t,e,n,r,"number"),Qn(r),Kn(t,e,n,r,i,o);var a,s;if((y(n.min)||n.ngMin)&&(r.$validators.min=function(t,e){return r.$isEmpty(e)||g(a)||e>=a},n.$observe("min",function(t){a=Xn(t),r.$validate()})),(y(n.max)||n.ngMax)&&(r.$validators.max=function(t,e){return r.$isEmpty(e)||g(s)||e<=s},n.$observe("max",function(t){s=Xn(t),r.$validate()})),y(n.step)||n.ngStep){var u;r.$validators.step=function(t,e){return r.$isEmpty(e)||g(u)||er(e,a||0,u)},n.$observe("step",function(t){u=Xn(t),r.$validate()})}},url:function(t,e,n,r,i,o){Kn(t,e,n,r,i,o),Gn(r),r.$validators.url=function(t,e){var n=t||e;return r.$isEmpty(n)||mo.test(n)}},email:function(t,e,n,r,i,o){Kn(t,e,n,r,i,o),Gn(r),r.$validators.email=function(t,e){var n=t||e;return r.$isEmpty(n)||vo.test(n)}},radio:function(t,e,n,r){var i=!n.ngTrim||"false"!==Mr(n.ngTrim);g(n.name)&&e.attr("name",++kr),e.on("change",function(t){var o;e[0].checked&&(o=n.value,i&&(o=Mr(o)),r.$setViewValue(o,t&&t.type))}),r.$render=function(){var t=n.value;i&&(t=Mr(t)),e[0].checked=t===r.$viewValue},n.$observe("value",r.$render)},range:function(t,e,n,r,i,o){function a(t,r){e.attr(t,n[t]),n.$observe(t,r)}function s(t){f=Xn(t),Ar(r.$modelValue)||(l?(t=e.val(),f>t&&(t=f,e.val(t)),r.$setViewValue(t)):r.$validate())}function u(t){h=Xn(t),Ar(r.$modelValue)||(l?(t=e.val(),h<t&&(e.val(h),t=h<f?f:h),r.$setViewValue(t)):r.$validate())}function c(t){p=Xn(t),Ar(r.$modelValue)||(l&&r.$viewValue!==e.val()?r.$setViewValue(e.val()):r.$validate())}Yn(t,e,n,r,"range"),Qn(r),Kn(t,e,n,r,i,o);var l=r.$$hasNativeValidators&&"range"===e[0].type,f=l?0:void 0,h=l?100:void 0,p=l?1:void 0,$=e[0].validity;t=y(n.min),i=y(n.max),o=y(n.step);var d=r.$render;r.$render=l&&y($.rangeUnderflow)&&y($.rangeOverflow)?function(){d(),r.$setViewValue(e.val())}:d,t&&(r.$validators.min=l?function(){return!0}:function(t,e){return r.$isEmpty(e)||g(f)||e>=f},a("min",s)),i&&(r.$validators.max=l?function(){return!0}:function(t,e){return r.$isEmpty(e)||g(h)||e<=h},a("max",u)),o&&(r.$validators.step=l?function(){return!$.stepMismatch}:function(t,e){return r.$isEmpty(e)||g(p)||er(e,f||0,p)},a("step",c))},checkbox:function(t,e,n,r,i,o,a,s){var u=nr(s,t,"ngTrueValue",n.ngTrueValue,!0),c=nr(s,t,"ngFalseValue",n.ngFalseValue,!1);e.on("change",function(t){r.$setViewValue(e[0].checked,t&&t.type)}),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return!1===t},r.$formatters.push(function(t){return L(t,u)}),r.$parsers.push(function(t){return t?u:c})},hidden:$,button:$,submit:$,reset:$,file:$},ko=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Eo[vr(a.type)]||Eo.text)(i,o,a,s[0],e,t,n,r)}}}}],Ao=/^(true|false|\d+)$/,Oo=function(){function t(t,e,n){var r=y(n)?n:9===lr?"":null;t.prop("value",r),e.$set("value",n)}return{restrict:"A",priority:100,compile:function(e,n){return Ao.test(n.ngValue)?function(e,n,r){e=e.$eval(r.ngValue),t(n,r,e)}:function(e,n,r){e.$watch(r.ngValue,function(e){t(n,r,e)})}}}},Mo=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,n,r){t.$$addBindingInfo(n,r.ngBind),n=n[0],e.$watch(r.ngBind,function(t){n.textContent=ht(t)})}}}}],Vo=["$interpolate","$compile",function(t,e){return{compile:function(n){return e.$$addBindingClass(n),function(n,r,i){n=t(r.attr(i.$attr.ngBindTemplate)),e.$$addBindingInfo(r,n.expressions),r=r[0],i.$observe("ngBindTemplate",function(t){r.textContent=g(t)?"":t})}}}}],To=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(e){return t.valueOf(e)});return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){var n=o(e);r.html(t.getTrustedHtml(n)||"")})}}}}],No=m({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),Io=rr("",!0),Po=rr("Odd",0),jo=rr("Even",1),Ro=qn({compile:function(t,e){e.$set("ngCloak",void 0),t.removeClass("ng-cloak")}}),Do=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Uo={},Lo={blur:!0,focus:!0};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=oe("ng-"+t);Uo[e]=["$parse","$rootScope","$exceptionHandler",function(n,r,i){return ir(n,r,i,e,t,Lo[t])}]});var _o=["$animate","$compile",function(t,e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.$$createComment("end ngIf",i.ngIf),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=lt(s.clone),t.leave(c).done(function(t){!1!==t&&(c=null)}),s=null))})}}}],Fo=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Er.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll;return function(r,i,u,c,l){var f,h,p,$=0,d=function(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),p&&(n.leave(p).done(function(t){!1!==t&&(h=null)}),h=p,p=null)};r.$watch(o,function(o){var u=function(t){!1===t||!y(s)||s&&!r.$eval(s)||e()},h=++$;o?(t(o,!0).then(function(t){if(!r.$$destroyed&&h===$){var e=r.$new();c.template=t,t=l(e,function(t){d(),n.enter(t,null,i).done(u)}),f=e,p=t,f.$emit("$includeContentLoaded",o),r.$eval(a)}},function(){r.$$destroyed||h!==$||(d(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):(d(),c.template=null)})}}}}],qo=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){xr.call(r[0]).match(/SVG/)?(r.empty(),e(yt(o.template,t.document).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),e(r.contents())(n))}}}],Ho=qn({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),Bo=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,n,r){var i=n.ngList||", ",a="false"!==n.ngTrim,s=a?Mr(i):i;r.$parsers.push(function(t){if(!g(t)){var e=[];return t&&o(t.split(s),function(t){t&&e.push(a?Mr(t):t)}),e}}),r.$formatters.push(function(t){if(E(t))return t.join(i)}),r.$isEmpty=function(t){return!t||!t.length}}}},zo="ng-valid",Wo="ng-invalid",Go="ng-pristine",Ko="ng-dirty",Jo=r("ngModel");or.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" "),or.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var t=this.$$parse(this.$$attr.ngModel+"()"),e=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(e){var n=this.$$parsedNgModel(e);return A(n)&&(n=t(e)),n},this.$$ngModelSet=function(t,n){A(this.$$parsedNgModel(t))?e(t,{$$$p:n}):this.$$parsedNgModelAssign(t,n)}}else if(!this.$$parsedNgModel.assign)throw Jo("nonassign",this.$$attr.ngModel,K(this.$$element))},$render:$,$isEmpty:function(t){return g(t)||""===t||null===t||t!==t},$$updateEmptyClasses:function(t){this.$isEmpty(t)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1,this.$pristine=!0,this.$$animate.removeClass(this.$$element,Ko),this.$$animate.addClass(this.$$element,Go)},$setDirty:function(){this.$dirty=!0,this.$pristine=!1,this.$$animate.removeClass(this.$$element,Go),this.$$animate.addClass(this.$$element,Ko),this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1,this.$untouched=!0,this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0,this.$untouched=!1,this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce),this.$viewValue=this.$$lastCommittedViewValue,this.$render()},$validate:function(){if(!Ar(this.$modelValue)){var t=this.$$lastCommittedViewValue,e=this.$$rawModelValue,n=this.$valid,r=this.$modelValue,i=this.$options.getOption("allowInvalid"),o=this;this.$$runValidators(e,t,function(t){i||n===t||(o.$modelValue=t?e:void 0,o.$modelValue!==r&&o.$$writeModelToScope())})}},$$runValidators:function(t,e,n){function r(t,e){a===s.$$currentValidationRunId&&s.$setValidity(t,e)}function i(t){a===s.$$currentValidationRunId&&n(t)}this.$$currentValidationRunId++;var a=this.$$currentValidationRunId,s=this;!function(){var t=s.$$parserName;return g(s.$$parserValid)?(r(t,null),!0):(s.$$parserValid||(o(s.$validators,function(t,e){r(e,null)}),o(s.$asyncValidators,function(t,e){r(e,null)})),r(t,s.$$parserValid),s.$$parserValid)}()?i(!1):function(){var n=!0;return o(s.$validators,function(i,o){var a=Boolean(i(t,e));n=n&&a,r(o,a)}),!!n||(o(s.$asyncValidators,function(t,e){r(e,null)}),!1)}()?function(){var n=[],a=!0;o(s.$asyncValidators,function(i,o){var s=i(t,e);if(!s||!A(s.then))throw Jo("nopromise",s);r(o,void 0),n.push(s.then(function(){r(o,!0)},function(){a=!1,r(o,!1)}))}),n.length?s.$$q.all(n).then(function(){i(a)},$):i(!0)}():i(!1)},$commitViewValue:function(){var t=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce),(this.$$lastCommittedViewValue!==t||""===t&&this.$$hasNativeValidators)&&(this.$$updateEmptyClasses(t),this.$$lastCommittedViewValue=t,this.$pristine&&this.$setDirty(),this.$$parseAndValidate())},$$parseAndValidate:function(){var t=this.$$lastCommittedViewValue,e=this;if(this.$$parserValid=!g(t)||void 0,this.$setValidity(this.$$parserName,null),this.$$parserName="parse",this.$$parserValid)for(var n=0;n<this.$parsers.length;n++)if(t=this.$parsers[n](t),g(t)){this.$$parserValid=!1;break}Ar(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var r=this.$modelValue,i=this.$options.getOption("allowInvalid");this.$$rawModelValue=t,i&&(this.$modelValue=t,e.$modelValue!==r&&e.$$writeModelToScope()),this.$$runValidators(t,this.$$lastCommittedViewValue,function(n){i||(e.$modelValue=n?t:void 0,e.$modelValue!==r&&e.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue),o(this.$viewChangeListeners,function(t){try{t()}catch(t){this.$$exceptionHandler(t)}},this)},$setViewValue:function(t,e){this.$viewValue=t,this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(e)},$$debounceViewValueCommit:function(t){var e=this.$options.getOption("debounce");C(e[t])?e=e[t]:C(e.default)&&-1===this.$options.getOption("updateOn").indexOf(t)?e=e.default:C(e["*"])&&(e=e["*"]),this.$$timeout.cancel(this.$$pendingDebounce);var n=this;0<e?this.$$pendingDebounce=this.$$timeout(function(){n.$commitViewValue()},e):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){n.$commitViewValue()})},$overrideModelOptions:function(t){this.$options=this.$options.createChild(t),this.$$setUpdateOnEvents()},$processModelValue:function(){var t=this.$$format();this.$viewValue!==t&&(this.$$updateEmptyClasses(t),this.$viewValue=this.$$lastCommittedViewValue=t,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,$))},$$format:function(){for(var t=this.$formatters,e=t.length,n=this.$modelValue;e--;)n=t[e](n);return n},$$setModelValue:function(t){this.$modelValue=this.$$rawModelValue=t,this.$$parserValid=void 0,this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler),(this.$$updateEvents=this.$options.getOption("updateOn"))&&this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(t){this.$$debounceViewValueCommit(t&&t.type)}},zn({clazz:or,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]}});var Zo,Yo=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:or,priority:1,compile:function(e){return e.addClass(Go).addClass("ng-untouched").addClass(zo),{pre:function(t,e,n,r){var i=r[0];e=r[1]||i.$$parentForm,(r=r[2])&&(i.$options=r.$options),i.$$initGetterSetters(),e.$addControl(i),n.$observe("name",function(t){i.$name!==t&&i.$$parentForm.$$renameControl(i,t)}),t.$on("$destroy",function(){i.$$parentForm.$removeControl(i)})},post:function(e,n,r,i){function o(){a.$setTouched()}var a=i[0];a.$$setUpdateOnEvents(),n.on("blur",function(){a.$touched||(t.$$phase?e.$evalAsync(o):e.$apply(o))})}}}}}],Qo=/(\s+|^)default(\s+|$)/;sr.prototype={getOption:function(t){return this.$$options[t]},createChild:function(t){var e=!1;return t=l({},t),o(t,function(n,r){"$inherit"===n?"*"===r?e=!0:(t[r]=this.$$options[r],"updateOn"===r&&(t.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===r&&(t.updateOnDefault=!1,t[r]=Mr(n.replace(Qo,function(){return t.updateOnDefault=!0," "})))},this),e&&(delete t["*"],ur(t,this.$$options)),ur(t,Zo.$$options),new sr(t)}},Zo=new sr({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var Xo=function(){function t(t,e){this.$$attrs=t,this.$$scope=e}return t.$inject=["$attrs","$scope"],t.prototype={$onInit:function(){var t=this.parentCtrl?this.parentCtrl.$options:Zo,e=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=t.createChild(e)}},{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:t}},ta=qn({terminal:!0,priority:1e3}),ea=r("ngOptions"),na=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,ra=["$compile","$document","$parse",function(e,n,r){function a(t,e,n){function o(t,e,n,r,i){this.selectValue=t,this.viewValue=e,this.label=n,this.group=r,this.disabled=i}function a(t){var e;if(!c&&i(t))e=t;else{e=[];for(var n in t)t.hasOwnProperty(n)&&"$"!==n.charAt(0)&&e.push(n)}return e}var s=t.match(na);if(!s)throw ea("iexp",t,K(e));var u=s[5]||s[7],c=s[6];t=/ as /.test(s[0])&&s[1];var l=s[9];e=r(s[2]?s[1]:u);var f=t&&r(t)||e,h=l&&r(l),p=l?function(t,e){return h(n,e)}:function(t){return Bt(t)},$=function(t,e){return p(t,b(t,e))},d=r(s[2]||s[1]),m=r(s[3]||""),v=r(s[4]||""),g=r(s[8]),y={},b=c?function(t,e){return y[c]=e,y[u]=t,y}:function(t){return y[u]=t,y};return{trackBy:l,getTrackByValue:$,getWatchables:r(g,function(t){var e=[];t=t||[];for(var r=a(t),i=r.length,o=0;o<i;o++){var u=t===r?o:r[o],c=t[u],u=b(c,u),c=p(c,u);e.push(c),(s[2]||s[1])&&(c=d(n,u),e.push(c)),s[4]&&(u=v(n,u),e.push(u))}return e}),getOptions:function(){for(var t=[],e={},r=g(n)||[],i=a(r),s=i.length,u=0;u<s;u++){var c=r===i?u:i[u],h=b(r[c],c),y=f(n,h),c=p(y,h),w=d(n,h),x=m(n,h),h=v(n,h),y=new o(c,y,w,x,h);t.push(y),e[c]=y}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[$(t)]},getViewValueFromOption:function(t){return l?D(t.viewValue):t.viewValue}}}}}var s=t.document.createElement("option"),u=t.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(t,e,n,r){r[0].registerOption=$},post:function(t,r,i,c){function l(t){var e=(t=v.getOptionFromViewValue(t))&&t.element;return e&&!e.selected&&(e.selected=!0),t}function f(t,e){t.element=e,e.disabled=t.disabled,t.label!==e.label&&(e.label=t.label,e.textContent=t.label),e.value=t.selectValue}var h=c[0],p=c[1],$=i.multiple;c=0;for(var d=r.children(),m=d.length;c<m;c++)if(""===d[c].value){h.hasEmptyOption=!0,h.emptyOption=d.eq(c);break}r.empty(),c=!!h.emptyOption,fr(s.cloneNode(!1)).val("?");var v,g=a(i.ngOptions,r,t),b=n[0].createDocumentFragment();h.generateUnknownOptionValue=function(t){return"?"},$?(h.writeValue=function(t){if(v){var e=t&&t.map(l)||[];v.items.forEach(function(t){t.element.selected&&-1===Array.prototype.indexOf.call(e,t)&&(t.element.selected=!1)})}},h.readValue=function(){var t=r.val()||[],e=[];return o(t,function(t){(t=v.selectValueMap[t])&&!t.disabled&&e.push(v.getViewValueFromOption(t))}),e},g.trackBy&&t.$watchCollection(function(){if(E(p.$viewValue))return p.$viewValue.map(function(t){return g.getTrackByValue(t)})},function(){p.$render()})):(h.writeValue=function(t){if(v){var e=r[0].options[r[0].selectedIndex],n=v.getOptionFromViewValue(t);e&&e.removeAttribute("selected"),n?(r[0].value!==n.selectValue&&(h.removeUnknownOption(),r[0].value=n.selectValue,n.element.selected=!0),n.element.setAttribute("selected","selected")):h.selectUnknownOrEmptyOption(t)}},h.readValue=function(){var t=v.selectValueMap[r.val()];return t&&!t.disabled?(h.unselectEmptyOption(),h.removeUnknownOption(),v.getViewValueFromOption(t)):null},g.trackBy&&t.$watch(function(){return g.getTrackByValue(p.$viewValue)},function(){p.$render()})),c&&(e(h.emptyOption)(t),r.prepend(h.emptyOption),8===h.emptyOption[0].nodeType?(h.hasEmptyOption=!1,h.registerOption=function(t,e){""===e.val()&&(h.hasEmptyOption=!0,h.emptyOption=e,h.emptyOption.removeClass("ng-scope"),p.$render(),e.on("$destroy",function(){var t=h.$isEmptyOptionSelected();h.hasEmptyOption=!1,h.emptyOption=void 0,t&&p.$render()}))}):h.emptyOption.removeClass("ng-scope")),t.$watchCollection(g.getWatchables,function(){var t=v&&h.readValue();if(v)for(var e=v.items.length-1;0<=e;e--){var n=v.items[e];Rt(y(n.group)?n.element.parentNode:n.element)}v=g.getOptions();var i={};v.items.forEach(function(t){var e;if(y(t.group)){e=i[t.group],e||(e=u.cloneNode(!1),b.appendChild(e),e.label=null===t.group?"null":t.group,i[t.group]=e);var n=s.cloneNode(!1);e.appendChild(n),f(t,n)}else e=s.cloneNode(!1),b.appendChild(e),f(t,e)}),r[0].appendChild(b),p.$render(),p.$isEmpty(t)||(e=h.readValue(),(g.trackBy||$?L(t,e):t===e)||(p.$setViewValue(e),p.$render()))})}}}}],ia=["$locale","$interpolate","$log",function(t,e,n){var r=/{}/g,i=/^when(Minus)?(.+)$/;return{link:function(a,s,u){function c(t){s.text(t||"")}var l,f=u.count,h=u.$attr.when&&s.attr(u.$attr.when),p=u.offset||0,d=a.$eval(h)||{},m={},v=e.startSymbol(),y=e.endSymbol(),b=v+f+"-"+p+y,w=Er.noop;o(u,function(t,e){var n=i.exec(e);n&&(n=(n[1]?"-":"")+vr(n[2]),d[n]=s.attr(u.$attr[e]))}),o(d,function(t,n){m[n]=e(t.replace(r,b))}),a.$watch(f,function(e){var r=parseFloat(e),i=Ar(r);i||r in d||(r=t.pluralCat(r-p)),r===l||i&&Ar(l)||(w(),i=m[r],g(i)?(null!=e&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+h),w=$,c()):w=a.$watch(i,c),l=r)})}}}],oa=r("ngRef"),aa=["$parse",function(t){return{priority:-1,restrict:"A",compile:function(e,n){var r=oe(j(e)),i=t(n.ngRef),o=i.assign||function(){throw oa("nonassign",n.ngRef)};return function(t,e,a){var s;if(a.hasOwnProperty("ngRefRead")){if("$element"===a.ngRefRead)s=e;else if(!(s=e.data("$"+a.ngRefRead+"Controller")))throw oa("noctrl",a.ngRefRead,n.ngRef)
}else s=e.data("$"+r+"Controller");s=s||e,o(t,s),e.on("$destroy",function(){i(t)===s&&o(t,null)})}}}}],sa=["$parse","$animate","$compile",function(t,e,n){var a=r("ngRepeat"),s=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0==(1&e))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,u){var c=u.ngRepeat,l=n.$$createComment("end ngRepeat",c),f=c.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!f)throw a("iexp",c);var h=f[1],p=f[2],$=f[3],d=f[4],f=h.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!f)throw a("iidexp",h);var m=f[3]||f[1],v=f[2];if($&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($)))throw a("badident",$);var g,y,b,w,x={$id:Bt};return d?g=t(d):(b=function(t,e){return Bt(e)},w=function(t){return t}),function(t,n,r,u,f){g&&(y=function(e,n,r){return v&&(x[v]=e),x[m]=n,x.$index=r,g(t,x)});var h=ft();t.$watchCollection(p,function(r){var u,p,d,g,x,C,S,E,k,A,O=n[0],M=ft();if($&&(t[$]=r),i(r))E=r,p=y||b;else for(A in p=y||w,E=[],r)mr.call(r,A)&&"$"!==A.charAt(0)&&E.push(A);for(g=E.length,A=Array(g),u=0;u<g;u++)if(x=r===E?u:E[u],C=r[x],S=p(x,C,u),h[S])k=h[S],delete h[S],M[S]=k,A[u]=k;else{if(M[S])throw o(A,function(t){t&&t.scope&&(h[t.id]=t)}),a("dupes",c,S,C);A[u]={id:S,scope:void 0,clone:void 0},M[S]=!0}for(d in h){if(k=h[d],S=lt(k.clone),e.leave(S),S[0].parentNode)for(u=0,p=S.length;u<p;u++)S[u].$$NG_REMOVED=!0;k.scope.$destroy()}for(u=0;u<g;u++)if(x=r===E?u:E[u],C=r[x],k=A[u],k.scope){d=O;do{d=d.nextSibling}while(d&&d.$$NG_REMOVED);k.clone[0]!==d&&e.move(lt(k.clone),null,O),O=k.clone[k.clone.length-1],s(k.scope,u,m,C,v,x,g)}else f(function(t,n){k.scope=n;var r=l.cloneNode(!1);t[t.length++]=r,e.enter(t,null,O),O=r,k.clone=t,M[k.id]=k,s(k.scope,u,m,C,v,x,g)});h=M})}}}}],ua=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ca=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],la=qn(function(t,e,n){t.$watchCollection(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)})}),fa=["$animate","$compile",function(t,e){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=[],u=[],c=[],l=[],f=function(t,e){return function(n){!1!==n&&t.splice(e,1)}};n.$watch(i.ngSwitch||i.on,function(n){for(var r,i;c.length;)t.cancel(c.pop());for(r=0,i=l.length;r<i;++r){var h=lt(u[r].clone);l[r].$destroy(),(c[r]=t.leave(h)).done(f(c,r))}u.length=0,l.length=0,(s=a.cases["!"+n]||a.cases["?"])&&o(s,function(n){n.transclude(function(r,i){l.push(i);var o=n.element;r[r.length++]=e.$$createComment("end ngSwitchWhen"),u.push({clone:r}),t.enter(r,o.parent(),o)})})})}}}],ha=qn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){t=n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(t,e,n){return n[e-1]!==t}),o(t,function(t){r.cases["!"+t]=r.cases["!"+t]||[],r.cases["!"+t].push({transclude:i,element:e})})}}),pa=qn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),$a=r("ngTransclude"),da=["$compile",function(t){return{restrict:"EAC",compile:function(e){var n=t(e.contents());return e.empty(),function(t,e,r,i,o){function a(){n(t,function(t){e.append(t)})}if(!o)throw $a("orphan",K(e));r.ngTransclude===r.$attr.ngTransclude&&(r.ngTransclude=""),r=r.ngTransclude||r.ngTranscludeSlot,o(function(t,n){var r;if(r=t.length)t:{r=0;for(var i=t.length;r<i;r++){var o=t[r];if(o.nodeType!==Ur||o.nodeValue.trim()){r=!0;break t}}r=void 0}r?e.append(t):(a(),n.$destroy())},null,r),r&&!o.isSlotFilled(r)&&a()}}}}],ma=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){"text/ng-template"===n.type&&t.put(n.id,e[0].text)}}}],va={$setViewValue:$,$render:$},ga=["$element","$scope",function(e,n){function r(){s||(s=!0,n.$$postDigest(function(){s=!1,o.ngModelCtrl.$render()}))}function i(t){u||(u=!0,n.$$postDigest(function(){n.$$destroyed||(u=!1,o.ngModelCtrl.$setViewValue(o.readValue()),t&&o.ngModelCtrl.$render())}))}var o=this,a=new ri;o.selectValueMap={},o.ngModelCtrl=va,o.multiple=!1,o.unknownOption=fr(t.document.createElement("option")),o.hasEmptyOption=!1,o.emptyOption=void 0,o.renderUnknownOption=function(t){t=o.generateUnknownOptionValue(t),o.unknownOption.val(t),e.prepend(o.unknownOption),cr(o.unknownOption,!0),e.val(t)},o.updateUnknownOption=function(t){t=o.generateUnknownOptionValue(t),o.unknownOption.val(t),cr(o.unknownOption,!0),e.val(t)},o.generateUnknownOptionValue=function(t){return"? "+Bt(t)+" ?"},o.removeUnknownOption=function(){o.unknownOption.parent()&&o.unknownOption.remove()},o.selectEmptyOption=function(){o.emptyOption&&(e.val(""),cr(o.emptyOption,!0))},o.unselectEmptyOption=function(){o.hasEmptyOption&&cr(o.emptyOption,!1)},n.$on("$destroy",function(){o.renderUnknownOption=$}),o.readValue=function(){var t=e.val(),t=t in o.selectValueMap?o.selectValueMap[t]:t;return o.hasOption(t)?t:null},o.writeValue=function(t){var n=e[0].options[e[0].selectedIndex];n&&cr(fr(n),!1),o.hasOption(t)?(o.removeUnknownOption(),n=Bt(t),e.val(n in o.selectValueMap?n:t),cr(fr(e[0].options[e[0].selectedIndex]),!0)):o.selectUnknownOrEmptyOption(t)},o.addOption=function(t,e){if(8!==e[0].nodeType){ut(t,'"option value"'),""===t&&(o.hasEmptyOption=!0,o.emptyOption=e);var n=a.get(t)||0;a.set(t,n+1),r()}},o.removeOption=function(t){var e=a.get(t);e&&(1===e?(a.delete(t),""===t&&(o.hasEmptyOption=!1,o.emptyOption=void 0)):a.set(t,e-1))},o.hasOption=function(t){return!!a.get(t)},o.$hasEmptyOption=function(){return o.hasEmptyOption},o.$isUnknownOptionSelected=function(){return e[0].options[0]===o.unknownOption[0]},o.$isEmptyOptionSelected=function(){return o.hasEmptyOption&&e[0].options[e[0].selectedIndex]===o.emptyOption[0]},o.selectUnknownOrEmptyOption=function(t){null==t&&o.emptyOption?(o.removeUnknownOption(),o.selectEmptyOption()):o.unknownOption.parent().length?o.updateUnknownOption(t):o.renderUnknownOption(t)};var s=!1,u=!1;o.registerOption=function(t,e,n,a,s){if(n.$attr.ngValue){var u,c;n.$observe("value",function(t){var n,r=e.prop("selected");y(c)&&(o.removeOption(u),delete o.selectValueMap[c],n=!0),c=Bt(t),u=t,o.selectValueMap[c]=t,o.addOption(t,e),e.attr("value",c),n&&r&&i()})}else a?n.$observe("value",function(t){o.readValue();var n,r=e.prop("selected");y(u)&&(o.removeOption(u),n=!0),u=t,o.addOption(t,e),n&&r&&i()}):s?t.$watch(s,function(t,r){n.$set("value",t);var a=e.prop("selected");r!==t&&o.removeOption(r),o.addOption(t,e),r&&a&&i()}):o.addOption(n.value,e);n.$observe("disabled",function(t){("true"===t||t&&e.prop("selected"))&&(o.multiple?i(!0):(o.ngModelCtrl.$setViewValue(null),o.ngModelCtrl.$render()))}),e.on("$destroy",function(){var t=o.readValue(),e=n.value;o.removeOption(e),r(),(o.multiple&&t&&-1!==t.indexOf(e)||t===e)&&i(!0)})}}],ya=function(){return{restrict:"E",require:["select","?ngModel"],controller:ga,priority:1,link:{pre:function(t,e,n,r){var i=r[0],a=r[1];if(a){if(i.ngModelCtrl=a,e.on("change",function(){i.removeUnknownOption(),t.$apply(function(){a.$setViewValue(i.readValue())})}),n.multiple){i.multiple=!0,i.readValue=function(){var t=[];return o(e.find("option"),function(e){e.selected&&!e.disabled&&(e=e.value,t.push(e in i.selectValueMap?i.selectValueMap[e]:e))}),t},i.writeValue=function(t){o(e.find("option"),function(e){var n=!!t&&(-1!==Array.prototype.indexOf.call(t,e.value)||-1!==Array.prototype.indexOf.call(t,i.selectValueMap[e.value]));n!==e.selected&&cr(fr(e),n)})};var s,u=NaN;t.$watch(function(){u!==a.$viewValue||L(s,a.$viewValue)||(s=$t(a.$viewValue),a.$render()),u=a.$viewValue}),a.$isEmpty=function(t){return!t||0===t.length}}}else i.registerOption=$},post:function(t,e,n,r){var i=r[1];if(i){var o=r[0];i.$render=function(){o.writeValue(i.$viewValue)}}}}}},ba=["$interpolate",function(t){return{restrict:"E",priority:100,compile:function(e,n){var r,i;return y(n.ngValue)||(y(n.value)?r=t(n.value,!0):(i=t(e.text(),!0))||n.$set("value",e.text())),function(t,e,n){var o=e.parent();(o=o.data("$selectController")||o.parent().data("$selectController"))&&o.registerOption(t,e,n,r,i)}}}}],wa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},xa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,i){if(i){var o,a=n.ngPattern||n.pattern;n.$observe("pattern",function(t){if(x(t)&&0<t.length&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw r("ngPattern")("noregexp",a,t,K(e));o=t||void 0,i.$validate()}),i.$validators.pattern=function(t,e){return i.$isEmpty(e)||g(o)||o.test(e)}}}}},Ca=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1;n.$observe("maxlength",function(t){t=h(t),i=Ar(t)?-1:t,r.$validate()}),r.$validators.maxlength=function(t,e){return 0>i||r.$isEmpty(e)||e.length<=i}}}}},Sa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0;n.$observe("minlength",function(t){i=h(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}};t.angular.bootstrap?t.console:(function(){var e;if(!Dr){var n=Nr();(hr=g(n)?t.jQuery:n?t[n]:void 0)&&hr.fn.on?(fr=hr,l(hr.fn,{scope:Qr.scope,isolateScope:Qr.isolateScope,controller:Qr.controller,injector:Qr.injector,inheritedData:Qr.inheritedData})):fr=bt,e=fr.cleanData,fr.cleanData=function(t){for(var n,r,i=0;null!=(r=t[i]);i++)(n=(fr._data(r)||{}).events)&&n.$destroy&&fr(r).triggerHandler("$destroy");e(t)},Er.element=fr,Dr=!0}}(),function(n){l(n,{errorHandlingConfig:e,bootstrap:nt,copy:D,extend:l,merge:f,equals:L,element:fr,forEach:o,injector:Kt,noop:$,bind:F,toJson:H,fromJson:B,identity:d,isUndefined:g,isDefined:y,isString:x,isFunction:A,isObject:b,isNumber:C,isElement:I,isArray:E,version:Lr,isDate:S,callbacks:{$$counter:0},getTestability:it,reloadWithDebugInfo:rt,$$minErr:r,$$csp:Tr,$$encodeUriSegment:Q,$$encodeUriQuery:X,$$lowercase:vr,$$stringify:ht,$$uppercase:gr}),pr=pt(t),pr("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:rn}),t.provider("$compile",re).directive({a:uo,input:ko,textarea:ko,form:ho,script:ma,select:ya,option:ba,ngBind:Mo,ngBindHtml:To,ngBindTemplate:Vo,ngClass:Io,ngClassEven:jo,ngClassOdd:Po,ngCloak:Ro,ngController:Do,ngForm:po,ngHide:ca,ngIf:_o,ngInclude:Fo,ngInit:Ho,ngNonBindable:ta,ngPluralize:ia,ngRef:aa,ngRepeat:sa,ngShow:ua,ngStyle:la,ngSwitch:fa,ngSwitchWhen:ha,ngSwitchDefault:pa,ngOptions:ra,ngTransclude:da,ngModel:Yo,ngList:Bo,ngChange:No,pattern:xa,ngPattern:xa,required:wa,ngRequired:wa,minlength:Sa,ngMinlength:Sa,maxlength:Ca,ngMaxlength:Ca,ngValue:Oo,ngModelOptions:Xo}).directive({ngInclude:qo}).directive(co).directive(Uo),t.provider({$anchorScroll:Jt,$animate:$i,$animateCss:vi,$$animateJs:hi,$$animateQueue:pi,$$AnimateRunner:mi,$$animateAsyncRun:di,$browser:te,$cacheFactory:ee,$controller:ce,$document:le,$$isDocumentHidden:fe,$exceptionHandler:he,$filter:wn,$$forceReflow:Si,$interpolate:Se,$interval:Ee,$$intervalFactory:ke,$http:be,$httpParamSerializer:$e,$httpParamSerializerJQLike:de,$httpBackend:xe,$xhrFactory:we,$jsonpCallbacks:Ii,$location:De,$log:Ue,$parse:Ye,$rootScope:nn,$q:Qe,$$q:Xe,$sce:un,$sceDelegate:sn,$sniffer:cn,$$taskTrackerFactory:ln,$templateCache:ne,$templateRequest:hn,$$testability:pn,$timeout:$n,$window:gn,$$rAF:en,$$jqLite:Ht,$$Map:ii,$$cookieReader:bn})}]).info({angularVersion:"1.7.4"})}(Er),Er.module("ngLocale",[],["$provide",function(t){function e(t){t+="";var e=t.indexOf(".");return-1==e?0:t.length-e-1}t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(t,n){var r=0|t,i=n;return void 0===i&&(i=Math.min(e(t),3)),Math.pow(10,i),1==r&&0==i?"one":"other"}})}]),fr(function(){et(t.document,nt)}))}(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),function(t,e){"use strict";function n(t,e){var n=[],r=t.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(t,e,r,i){return t="?"===i||"*?"===i,i="*"===i||"*?"===i,n.push({name:r,optional:t}),e=e||"",(t?"(?:"+e:e+"(?:")+(i?"(.+?)":"([^/]+)")+(t?"?)?":")")}).replace(/([\/$*])/g,"\\$1");return e.ignoreTrailingSlashes&&(r=r.replace(/\/+$/,"")+"/*"),{keys:n,regexp:new RegExp("^"+r+"(?:[?#]|$)",e.caseInsensitiveMatch?"i":"")}}function r(t){l&&t.get("$route")}function i(t,n,r){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(i,o,a,s,u){function c(){p&&(r.cancel(p),p=null),f&&(f.$destroy(),f=null),h&&(p=r.leave(h),p.done(function(t){!1!==t&&(p=null)}),h=null)}function l(){var a=t.current&&t.current.locals;if(e.isDefined(a&&a.$template)){var a=i.$new(),s=t.current;h=u(a,function(t){r.enter(t,null,h||o).done(function(t){!1===t||!e.isDefined($)||$&&!i.$eval($)||n()}),c()}),f=s.scope=a,f.$emit("$viewContentLoaded"),f.$eval(d)}else c()}var f,h,p,$=a.autoscroll,d=a.onload||"";i.$on("$routeChangeSuccess",l),l()}}}function o(t,e,n){return{restrict:"ECA",priority:-400,link:function(r,i){var o=n.current,a=o.locals;i.html(a.$template);var s=t(i.contents());if(o.controller){a.$scope=r;var u=e(o.controller,a);o.controllerAs&&(r[o.controllerAs]=u),i.data("$ngControllerController",u),i.children().data("$ngControllerController",u)}r[o.resolveAs||"$resolve"]=a,s(r)}}}var a,s,u,c,l,f=e.module("ngRoute",[]).info({angularVersion:"1.7.4"}).provider("$route",function(){function t(t,n){return e.extend(Object.create(t),n)}a=e.isArray,s=e.isObject,u=e.isDefined,c=e.noop;var r={};this.when=function(t,i){var o;if(o=void 0,a(i)){o=o||[];for(var u=0,c=i.length;u<c;u++)o[u]=i[u]}else if(s(i))for(u in o=o||{},i)"$"===u.charAt(0)&&"$"===u.charAt(1)||(o[u]=i[u]);return o=o||i,e.isUndefined(o.reloadOnUrl)&&(o.reloadOnUrl=!0),e.isUndefined(o.reloadOnSearch)&&(o.reloadOnSearch=!0),e.isUndefined(o.caseInsensitiveMatch)&&(o.caseInsensitiveMatch=this.caseInsensitiveMatch),r[t]=e.extend(o,{originalPath:t},t&&n(t,o)),t&&(u="/"===t[t.length-1]?t.substr(0,t.length-1):t+"/",r[u]=e.extend({originalPath:t,redirectTo:t},n(u,o))),this},this.caseInsensitiveMatch=!1,this.otherwise=function(t){return"string"==typeof t&&(t={redirectTo:t}),this.when(null,t),this},l=!0,this.eagerInstantiationEnabled=function(t){return u(t)?(l=t,this):l},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(n,i,o,a,s,u,l,f){function p(t){var r=S.current;w=y(),(x=!C&&w&&r&&w.$$route===r.$$route&&(!w.reloadOnUrl||!w.reloadOnSearch&&e.equals(w.pathParams,r.pathParams)))||!r&&!w||n.$broadcast("$routeChangeStart",w,r).defaultPrevented&&t&&t.preventDefault()}function $(){var t=S.current,r=w;if(x)t.params=r.params,e.copy(t.params,o),n.$broadcast("$routeUpdate",t);else if(r||t){C=!1,S.current=r;var i=a.resolve(r);f.$$incOutstandingRequestCount("$route"),i.then(d).then(m).then(function(a){return a&&i.then(v).then(function(i){r===S.current&&(r&&(r.locals=i,e.copy(r.params,o)),n.$broadcast("$routeChangeSuccess",r,t))})}).catch(function(e){r===S.current&&n.$broadcast("$routeChangeError",r,t,e)}).finally(function(){f.$$completeOutstandingRequest(c,"$route")})}}function d(t){var n={route:t,hasRedirection:!1};if(t)if(t.redirectTo)if(e.isString(t.redirectTo))n.path=b(t.redirectTo,t.params),n.search=t.params,n.hasRedirection=!0;else{var r=i.path(),o=i.search();t=t.redirectTo(t.pathParams,r,o),e.isDefined(t)&&(n.url=t,n.hasRedirection=!0)}else if(t.resolveRedirectTo)return a.resolve(s.invoke(t.resolveRedirectTo)).then(function(t){return e.isDefined(t)&&(n.url=t,n.hasRedirection=!0),n});return n}function m(t){var e=!0;if(t.route!==S.current)e=!1;else if(t.hasRedirection){var n=i.url(),r=t.url;r?i.url(r).replace():r=i.path(t.path).search(t.search).replace().url(),r!==n&&(e=!1)}return e}function v(t){if(t){var n=e.extend({},t.resolve);return e.forEach(n,function(t,r){n[r]=e.isString(t)?s.get(t):s.invoke(t,null,null,r)}),t=g(t),e.isDefined(t)&&(n.$template=t),a.all(n)}}function g(t){var n,r;return e.isDefined(n=t.template)?e.isFunction(n)&&(n=n(t.params)):e.isDefined(r=t.templateUrl)&&(e.isFunction(r)&&(r=r(t.params)),e.isDefined(r)&&(t.loadedTemplateUrl=l.valueOf(r),n=u(r))),n}function y(){var n,o;return e.forEach(r,function(r,a){var s;if(s=!o){var u=i.path();s=r.keys;var c={};if(r.regexp)if(u=r.regexp.exec(u)){for(var l=1,f=u.length;l<f;++l){var h=s[l-1],p=u[l];h&&p&&(c[h.name]=p)}s=c}else s=null;else s=null;s=n=s}s&&(o=t(r,{params:e.extend({},i.search(),n),pathParams:n}),o.$$route=r)}),o||r[null]&&t(r[null],{params:{},pathParams:{}})}function b(t,n){var r=[];return e.forEach((t||"").split(":"),function(t,e){if(0===e)r.push(t);else{var i=t.match(/(\w+)(?:[?*])?(.*)/),o=i[1];r.push(n[o]),r.push(i[2]||""),delete n[o]}}),r.join("")}var w,x,C=!1,S={routes:r,reload:function(){C=!0;var t={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0,C=!1}};n.$evalAsync(function(){p(t),t.defaultPrevented||$()})},updateParams:function(t){if(!this.current||!this.current.$$route)throw h("norout");t=e.extend({},this.current.params,t),i.path(b(this.current.$$route.originalPath,t)),i.search(t)}};return n.$on("$locationChangeStart",p),n.$on("$locationChangeSuccess",$),S}]}).run(r),h=e.$$minErr("ngRoute");r.$inject=["$injector"],f.provider("$routeParams",function(){this.$get=function(){return{}}}),f.directive("ngView",i),f.directive("ngView",o),i.$inject=["$route","$anchorScroll","$animate"],o.$inject=["$compile","$controller","$route"]}(window,window.angular);
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t,n){var r,i=(t=t||ae).createElement("script");if(i.text=e,n)for(r in be)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function r(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?he[pe.call(e)]||"object":typeof e}function i(e){var t=!!e&&"length"in e&&e.length,n=r(e);return!ye(e)&&!xe(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function o(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function a(e,t,n){return ye(t)?we.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?we.grep(e,function(e){return e===t!==n}):"string"!=typeof t?we.grep(e,function(e){return fe.call(t,e)>-1!==n}):we.filter(t,e,n)}function s(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function u(e){var t={};return we.each(e.match(Oe)||[],function(e,n){t[n]=!0}),t}function c(e){return e}function l(e){throw e}function f(e,t,n,r){var i;try{e&&ye(i=e.promise)?i.call(e).done(t).fail(n):e&&ye(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function h(){ae.removeEventListener("DOMContentLoaded",h),e.removeEventListener("load",h),we.ready()}function p(e,t){return t.toUpperCase()}function d(e){return e.replace(Ye,"ms-").replace(Re,p)}function v(){this.expando=we.expando+v.uid++}function m(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Ie.test(e)?JSON.parse(e):e)}function g(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(We,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=m(n)}catch(e){}Me.set(e,t,n)}else n=void 0;return n}function y(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return we.css(e,t,"")},u=s(),c=n&&n[3]||(we.cssNumber[t]?"":"px"),l=(we.cssNumber[t]||"px"!==c&&+u)&&$e.exec(we.css(e,t));if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;a--;)we.style(e,t,l+c),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),l/=o;l*=2,we.style(e,t,l+c),n=n||[]}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}function x(e){var t,n=e.ownerDocument,r=e.nodeName,i=Ue[r];return i||(t=n.body.appendChild(n.createElement(r)),i=we.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Ue[r]=i,i)}function b(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Pe.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ze(r)&&(i[o]=x(r))):"none"!==n&&(i[o]="none",Pe.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function w(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&o(e,t)?we.merge([e],n):n}function E(e,t){for(var n=0,r=e.length;n<r;n++)Pe.set(e[n],"globalEval",!t||Pe.get(t[n],"globalEval"))}function N(e,t,n,i,o){for(var a,s,u,c,l,f,h=t.createDocumentFragment(),p=[],d=0,v=e.length;d<v;d++)if((a=e[d])||0===a)if("object"===r(a))we.merge(p,a.nodeType?[a]:a);else if(Ze.test(a)){for(s=s||h.appendChild(t.createElement("div")),u=(Je.exec(a)||["",""])[1].toLowerCase(),c=Ke[u]||Ke._default,s.innerHTML=c[1]+we.htmlPrefilter(a)+c[2],f=c[0];f--;)s=s.lastChild;we.merge(p,s.childNodes),(s=h.firstChild).textContent=""}else p.push(t.createTextNode(a));for(h.textContent="",d=0;a=p[d++];)if(i&&we.inArray(a,i)>-1)o&&o.push(a);else if(l=we.contains(a.ownerDocument,a),s=w(h.appendChild(a),"script"),l&&E(s),n)for(f=0;a=s[f++];)Qe.test(a.type||"")&&n.push(a);return h}function C(){return!0}function T(){return!1}function k(){try{return ae.activeElement}catch(e){}}function S(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)S(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=T;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return we().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=we.guid++)),e.each(function(){we.event.add(this,t,i,r,n)})}function A(e,t){return o(e,"table")&&o(11!==t.nodeType?t:t.firstChild,"tr")?we(e).children("tbody")[0]||e:e}function j(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function D(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function F(e,t){var n,r,i,o,a,s,u,c;if(1===t.nodeType){if(Pe.hasData(e)&&(o=Pe.access(e),a=Pe.set(t,o),c=o.events)){delete a.handle,a.events={};for(i in c)for(n=0,r=c[i].length;n<r;n++)we.event.add(t,i,c[i][n])}Me.hasData(e)&&(s=Me.access(e),u=we.extend({},s),Me.set(t,u))}}function O(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function q(e,t,r,i){t=ce.apply([],t);var o,a,s,u,c,l,f=0,h=e.length,p=h-1,d=t[0],v=ye(d);if(v||h>1&&"string"==typeof d&&!ge.checkClone&&at.test(d))return e.each(function(n){var o=e.eq(n);v&&(t[0]=d.call(this,n,o.html())),q(o,t,r,i)});if(h&&(o=N(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(u=(s=we.map(w(o,"script"),j)).length;f<h;f++)c=o,f!==p&&(c=we.clone(c,!0,!0),u&&we.merge(s,w(c,"script"))),r.call(e[f],c,f);if(u)for(l=s[s.length-1].ownerDocument,we.map(s,D),f=0;f<u;f++)c=s[f],Qe.test(c.type||"")&&!Pe.access(c,"globalEval")&&we.contains(l,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?we._evalUrl&&we._evalUrl(c.src):n(c.textContent.replace(st,""),l,c))}return e}function L(e,t,n){for(var r,i=t?we.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||we.cleanData(w(r)),r.parentNode&&(n&&we.contains(r.ownerDocument,r)&&E(w(r,"script")),r.parentNode.removeChild(r));return e}function X(e,t,n){var r,i,o,a,s=e.style;return(n=n||ct(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||we.contains(e.ownerDocument,e)||(a=we.style(e,t)),!ge.pixelBoxStyles()&&ut.test(a)&&lt.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Y(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function R(e){if(e in mt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=vt.length;n--;)if((e=vt[n]+t)in mt)return e}function H(e){var t=we.cssProps[e];return t||(t=we.cssProps[e]=R(e)||e),t}function P(e,t,n){var r=$e.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function M(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=we.css(e,n+_e[a],!0,i)),r?("content"===n&&(u-=we.css(e,"padding"+_e[a],!0,i)),"margin"!==n&&(u-=we.css(e,"border"+_e[a]+"Width",!0,i))):(u+=we.css(e,"padding"+_e[a],!0,i),"padding"!==n?u+=we.css(e,"border"+_e[a]+"Width",!0,i):s+=we.css(e,"border"+_e[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function I(e,t,n){var r=ct(e),i=X(e,t,r),o="border-box"===we.css(e,"boxSizing",!1,r),a=o;if(ut.test(i)){if(!n)return i;i="auto"}return a=a&&(ge.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===we.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+M(e,t,n||(o?"border":"content"),a,r,i)+"px"}function W(e,t,n,r,i){return new W.prototype.init(e,t,n,r,i)}function B(){yt&&(!1===ae.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(B):e.setTimeout(B,we.fx.interval),we.fx.tick())}function $(){return e.setTimeout(function(){gt=void 0}),gt=Date.now()}function _(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=_e[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function z(e,t,n){for(var r,i=(G.tweeners[t]||[]).concat(G.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function V(e,t,n){var r,i,o,a,s,u,c,l,f="width"in t||"height"in t,h=this,p={},d=e.style,v=e.nodeType&&ze(e),m=Pe.get(e,"fxshow");n.queue||(null==(a=we._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,h.always(function(){h.always(function(){a.unqueued--,we.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],xt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;v=!0}p[r]=m&&m[r]||we.style(e,r)}if((u=!we.isEmptyObject(t))||!we.isEmptyObject(p)){f&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(c=m&&m.display)&&(c=Pe.get(e,"display")),"none"===(l=we.css(e,"display"))&&(c?l=c:(b([e],!0),c=e.style.display||c,l=we.css(e,"display"),b([e]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===we.css(e,"float")&&(u||(h.done(function(){d.display=c}),null==c&&(l=d.display,c="none"===l?"":l)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",h.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]})),u=!1;for(r in p)u||(m?"hidden"in m&&(v=m.hidden):m=Pe.access(e,"fxshow",{display:c}),o&&(m.hidden=!v),v&&b([e],!0),h.done(function(){v||b([e]),Pe.remove(e,"fxshow");for(r in p)we.style(e,r,p[r])})),u=z(v?m[r]:0,r,h),r in m||(m[r]=u.start,v&&(u.end=u.start,u.start=0))}}function U(e,t){var n,r,i,o,a;for(n in e)if(r=d(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=we.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function G(e,t,n){var r,i,o=0,a=G.prefilters.length,s=we.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=gt||$(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(r);return s.notifyWith(e,[c,r,n]),r<1&&a?n:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:we.extend({},t),opts:we.extend(!0,{specialEasing:{},easing:we.easing._default},n),originalProperties:t,originalOptions:n,startTime:gt||$(),duration:n.duration,tweens:[],createTween:function(t,n){var r=we.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),l=c.props;for(U(l,c.opts.specialEasing);o<a;o++)if(r=G.prefilters[o].call(c,e,l,c.opts))return ye(r.stop)&&(we._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return we.map(l,z,c),ye(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),we.fx.timer(we.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c}function J(e){return(e.match(Oe)||[]).join(" ")}function Q(e){return e.getAttribute&&e.getAttribute("class")||""}function K(e){return Array.isArray(e)?e:"string"==typeof e?e.match(Oe)||[]:[]}function Z(e,t,n,i){var o;if(Array.isArray(t))we.each(t,function(t,r){n||Ft.test(e)?i(e,r):Z(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==r(t))i(e,t);else for(o in t)Z(e+"["+o+"]",t[o],n,i)}function ee(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Oe)||[];if(ye(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function te(e,t,n,r){function i(s){var u;return o[s]=!0,we.each(e[s]||[],function(e,s){var c=s(t,n,r);return"string"!=typeof c||a||o[c]?a?!(u=c):void 0:(t.dataTypes.unshift(c),i(c),!1)}),u}var o={},a=e===Bt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function ne(e,t){var n,r,i=we.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&we.extend(!0,e,r),e}function re(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function ie(e,t,n,r){var i,o,a,s,u,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=c[u+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var oe=[],ae=e.document,se=Object.getPrototypeOf,ue=oe.slice,ce=oe.concat,le=oe.push,fe=oe.indexOf,he={},pe=he.toString,de=he.hasOwnProperty,ve=de.toString,me=ve.call(Object),ge={},ye=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},xe=function(e){return null!=e&&e===e.window},be={type:!0,src:!0,noModule:!0},we=function(e,t){return new we.fn.init(e,t)},Ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;we.fn=we.prototype={jquery:"3.3.1",constructor:we,length:0,toArray:function(){return ue.call(this)},get:function(e){return null==e?ue.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=we.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return we.each(this,e)},map:function(e){return this.pushStack(we.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:le,sort:oe.sort,splice:oe.splice},we.extend=we.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||ye(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(c&&r&&(we.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&we.isPlainObject(n)?n:{},a[t]=we.extend(c,o,r)):void 0!==r&&(a[t]=r));return a},we.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==pe.call(e)||(t=se(e))&&("function"!=typeof(n=de.call(t,"constructor")&&t.constructor)||ve.call(n)!==me))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){n(e)},each:function(e,t){var n,r=0;if(i(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(Ee,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?we.merge(n,"string"==typeof e?[e]:e):le.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:fe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,o,a=0,s=[];if(i(e))for(r=e.length;a<r;a++)null!=(o=t(e[a],a,n))&&s.push(o);else for(a in e)null!=(o=t(e[a],a,n))&&s.push(o);return ce.apply([],s)},guid:1,support:ge}),"function"==typeof Symbol&&(we.fn[Symbol.iterator]=oe[Symbol.iterator]),we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){he["[object "+t+"]"]=t.toLowerCase()});var Ne=function(e){function t(e,t,n,r){var i,o,a,s,u,l,h,p=t&&t.ownerDocument,d=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==d&&9!==d&&11!==d)return n;if(!r&&((t?t.ownerDocument||t:P)!==F&&D(t),t=t||F,q)){if(11!==d&&(u=ve.exec(e)))if(i=u[1]){if(9===d){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return J.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&b.getElementsByClassName&&t.getElementsByClassName)return J.apply(n,t.getElementsByClassName(i)),n}if(b.qsa&&!$[e+" "]&&(!L||!L.test(e))){if(1!==d)p=t,h=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(xe,be):t.setAttribute("id",s=H),o=(l=C(e)).length;o--;)l[o]="#"+s+" "+f(l[o]);h=l.join(","),p=me.test(e)&&c(t.parentNode)||t}if(h)try{return J.apply(n,p.querySelectorAll(h)),n}catch(e){}finally{s===H&&t.removeAttribute("id")}}}return k(e.replace(oe,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[H]=!0,e}function i(e){var t=F.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)w.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Ee(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&void 0!==e.getElementsByTagName&&e}function l(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=I++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var c,l,f,h=[M,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[H]||(t[H]={}),l=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=l[o])&&c[0]===M&&c[1]===s)return h[2]=c[2];if(l[o]=h,h[2]=e(t,n,u))return!0}return!1}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function d(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function v(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,c=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),c&&t.push(s)));return a}function m(e,t,n,i,o,a){return i&&!i[H]&&(i=m(i)),o&&!o[H]&&(o=m(o,a)),r(function(r,a,s,u){var c,l,f,h=[],p=[],m=a.length,g=r||d(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?g:v(g,h,e,s,u),x=n?o||(r?e:m||i)?[]:a:y;if(n&&n(y,x,s,u),i)for(c=v(x,p),i(c,[],s,u),l=c.length;l--;)(f=c[l])&&(x[p[l]]=!(y[p[l]]=f));if(r){if(o||e){if(o){for(c=[],l=x.length;l--;)(f=x[l])&&c.push(y[l]=f);o(null,x=[],c,u)}for(l=x.length;l--;)(f=x[l])&&(c=o?K(r,f):h[l])>-1&&(r[c]=!(a[c]=f))}}else x=v(x===a?x.splice(m,x.length):x),o?o(null,a,x,u):J.apply(a,x)})}function g(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),c=h(function(e){return K(t,e)>-1},a,!0),l=[function(e,n,r){var i=!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):c(e,n,r));return t=null,i}];s<i;s++)if(n=w.relative[e[s].type])l=[h(p(l),n)];else{if((n=w.filter[e[s].type].apply(null,e[s].matches))[H]){for(r=++s;r<i&&!w.relative[e[r].type];r++);return m(s>1&&p(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<r&&g(e.slice(s,r)),r<i&&g(e=e.slice(r)),r<i&&f(e))}l.push(n)}return p(l)}function y(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,c){var l,f,h,p=0,d="0",m=r&&[],g=[],y=S,x=r||o&&w.find.TAG("*",c),b=M+=null==y?1:Math.random()||.1,E=x.length;for(c&&(S=a===F||a||c);d!==E&&null!=(l=x[d]);d++){if(o&&l){for(f=0,a||l.ownerDocument===F||(D(l),s=!q);h=e[f++];)if(h(l,a||F,s)){u.push(l);break}c&&(M=b)}i&&((l=!h&&l)&&p--,r&&m.push(l))}if(p+=d,i&&d!==p){for(f=0;h=n[f++];)h(m,g,a,s);if(r){if(p>0)for(;d--;)m[d]||g[d]||(g[d]=U.call(u));g=v(g)}J.apply(u,g),c&&!r&&g.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(M=b,S=y),m};return i?r(a):a}var x,b,w,E,N,C,T,k,S,A,j,D,F,O,q,L,X,Y,R,H="sizzle"+1*new Date,P=e.document,M=0,I=0,W=n(),B=n(),$=n(),_=function(e,t){return e===t&&(j=!0),0},z={}.hasOwnProperty,V=[],U=V.pop,G=V.push,J=V.push,Q=V.slice,K=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ne="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ce=new RegExp(re),le=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,de=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,ge=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,be=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},we=function(){D()},Ee=h(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{J.apply(V=Q.call(P.childNodes),P.childNodes),V[P.childNodes.length].nodeType}catch(e){J={apply:V.length?function(e,t){G.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},N=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:P;return r!==F&&9===r.nodeType&&r.documentElement?(F=r,O=F.documentElement,q=!N(F),P!==F&&(n=F.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(F.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=de.test(F.getElementsByClassName),b.getById=i(function(e){return O.appendChild(e).id=H,!F.getElementsByName||!F.getElementsByName(H).length}),b.getById?(w.filter.ID=function(e){var t=e.replace(ge,ye);return function(e){return e.getAttribute("id")===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&q){var n=t.getElementById(e);return n?[n]:[]}}):(w.filter.ID=function(e){var t=e.replace(ge,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&q){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),w.find.TAG=b.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=b.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&q)return t.getElementsByClassName(e)},X=[],L=[],(b.qsa=de.test(F.querySelectorAll))&&(i(function(e){O.appendChild(e).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+ee+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+H+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+H+"+*").length||L.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=F.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+ee+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&L.push(":enabled",":disabled"),O.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(b.matchesSelector=de.test(Y=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i(function(e){b.disconnectedMatch=Y.call(e,"*"),Y.call(e,"[s!='']:x"),X.push("!=",re)}),L=L.length&&new RegExp(L.join("|")),X=X.length&&new RegExp(X.join("|")),t=de.test(O.compareDocumentPosition),R=t||de.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},_=t?function(e,t){if(e===t)return j=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===F||e.ownerDocument===P&&R(P,e)?-1:t===F||t.ownerDocument===P&&R(P,t)?1:A?K(A,e)-K(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return j=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e===F?-1:t===F?1:i?-1:o?1:A?K(A,e)-K(A,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===P?-1:u[r]===P?1:0},F):F},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==F&&D(e),n=n.replace(ue,"='$1']"),b.matchesSelector&&q&&!$[n+" "]&&(!X||!X.test(n))&&(!L||!L.test(n)))try{var r=Y.call(e,n);if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,F,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==F&&D(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==F&&D(e);var n=w.attrHandle[t.toLowerCase()],r=n&&z.call(w.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==r?r:b.attributes||!q?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(xe,be)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(j=!b.detectDuplicates,A=!b.sortStable&&e.slice(0),e.sort(_),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},(w=t.selectors={cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ge,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ge,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ce.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ge,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,h,p,d,v=o!==a?"nextSibling":"previousSibling",m=t.parentNode,g=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(m){if(o){for(;v;){for(h=t;h=h[v];)if(s?h.nodeName.toLowerCase()===g:1===h.nodeType)return!1;d=v="only"===e&&!d&&"nextSibling"}return!0}if(d=[a?m.firstChild:m.lastChild],a&&y){for(x=(p=(c=(l=(f=(h=m)[H]||(h[H]={}))[h.uniqueID]||(f[h.uniqueID]={}))[e]||[])[0]===M&&c[1])&&c[2],h=p&&m.childNodes[p];h=++p&&h&&h[v]||(x=p=0)||d.pop();)if(1===h.nodeType&&++x&&h===t){l[e]=[M,p,x];break}}else if(y&&(x=p=(c=(l=(f=(h=t)[H]||(h[H]={}))[h.uniqueID]||(f[h.uniqueID]={}))[e]||[])[0]===M&&c[1]),!1===x)for(;(h=++p&&h&&h[v]||(x=p=0)||d.pop())&&((s?h.nodeName.toLowerCase()!==g:1!==h.nodeType)||!++x||(y&&((l=(f=h[H]||(h[H]={}))[h.uniqueID]||(f[h.uniqueID]={}))[e]=[M,x]),h!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=w.pseudos[e]||w.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[H]?o(n):o.length>1?(i=[e,e,"",n],w.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)e[r=K(e,i[a])]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=T(e.replace(oe,"$1"));return i[H]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ge,ye),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return le.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ge,ye).toLowerCase(),function(t){var n;do{if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===F.activeElement&&(!F.hasFocus||F.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:s(!1),disabled:s(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return pe.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[n<0?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=w.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[x]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(x);for(x in{submit:!0,reset:!0})w.pseudos[x]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(x);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,C=t.tokenize=function(e,n){var r,i,o,a,s,u,c,l=B[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=w.preFilter;s;){r&&!(i=ae.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=se.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(oe," ")}),s=s.slice(r.length));for(a in w.filter)!(i=fe[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):B(e,u).slice(0)},T=t.compile=function(e,t){var n,r=[],i=[],o=$[e+" "];if(!o){for(t||(t=C(e)),n=t.length;n--;)(o=g(t[n]))[H]?r.push(o):i.push(o);(o=$(e,y(i,r))).selector=e}return o},k=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,h=!r&&C(e=l.selector||e);if(n=n||[],1===h.length){if((o=h[0]=h[0].slice(0)).length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&q&&w.relative[o[1].type]){if(!(t=(w.find.ID(a.matches[0].replace(ge,ye),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=fe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((u=w.find[s])&&(r=u(a.matches[0].replace(ge,ye),me.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&f(o)))return J.apply(n,r),n;break}}return(l||T(e,h))(r,t,!q,n,!t||me.test(e)&&c(t.parentNode)||t),n},b.sortStable=H.split("").sort(_).join("")===H,b.detectDuplicates=!!j,D(),b.sortDetached=i(function(e){return 1&e.compareDocumentPosition(F.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);we.find=Ne,we.expr=Ne.selectors,we.expr[":"]=we.expr.pseudos,we.uniqueSort=we.unique=Ne.uniqueSort,we.text=Ne.getText,we.isXMLDoc=Ne.isXML,we.contains=Ne.contains,we.escapeSelector=Ne.escape;var Ce=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&we(e).is(n))break;r.push(e)}return r},Te=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},ke=we.expr.match.needsContext,Se=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;we.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?we.find.matchesSelector(r,e)?[r]:[]:we.find.matches(e,we.grep(t,function(e){return 1===e.nodeType}))},we.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(we(e).filter(function(){for(t=0;t<r;t++)if(we.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)we.find(e,i[t],n);return r>1?we.uniqueSort(n):n},filter:function(e){return this.pushStack(a(this,e||[],!1))},not:function(e){return this.pushStack(a(this,e||[],!0))},is:function(e){return!!a(this,"string"==typeof e&&ke.test(e)?we(e):e||[],!1).length}});var Ae,je=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(we.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||Ae,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:je.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof we?t[0]:t,we.merge(this,we.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ae,!0)),Se.test(r[1])&&we.isPlainObject(t))for(r in t)ye(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=ae.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ye(e)?void 0!==n.ready?n.ready(e):e(we):we.makeArray(e,this)}).prototype=we.fn,Ae=we(ae);var De=/^(?:parents|prev(?:Until|All))/,Fe={children:!0,contents:!0,next:!0,prev:!0};we.fn.extend({has:function(e){var t=we(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(we.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&we(e);if(!ke.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&we.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?we.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?fe.call(we(e),this[0]):fe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(we.uniqueSort(we.merge(this.get(),we(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),we.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Ce(e,"parentNode")},parentsUntil:function(e,t,n){return Ce(e,"parentNode",n)},next:function(e){return s(e,"nextSibling")},prev:function(e){return s(e,"previousSibling")},nextAll:function(e){return Ce(e,"nextSibling")},prevAll:function(e){return Ce(e,"previousSibling")},nextUntil:function(e,t,n){return Ce(e,"nextSibling",n)},prevUntil:function(e,t,n){return Ce(e,"previousSibling",n)},siblings:function(e){return Te((e.parentNode||{}).firstChild,e)},children:function(e){return Te(e.firstChild)},contents:function(e){return o(e,"iframe")?e.contentDocument:(o(e,"template")&&(e=e.content||e),we.merge([],e.childNodes))}},function(e,t){we.fn[e]=function(n,r){var i=we.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=we.filter(r,i)),this.length>1&&(Fe[e]||we.uniqueSort(i),De.test(e)&&i.reverse()),this.pushStack(i)}});var Oe=/[^\x20\t\r\n\f]+/g;we.Callbacks=function(e){e="string"==typeof e?u(e):we.extend({},e);var t,n,i,o,a=[],s=[],c=-1,l=function(){for(o=o||e.once,i=t=!0;s.length;c=-1)for(n=s.shift();++c<a.length;)!1===a[c].apply(n[0],n[1])&&e.stopOnFalse&&(c=a.length,n=!1);e.memory||(n=!1),t=!1,o&&(a=n?[]:"")},f={add:function(){return a&&(n&&!t&&(c=a.length-1,s.push(n)),function t(n){we.each(n,function(n,i){ye(i)?e.unique&&f.has(i)||a.push(i):i&&i.length&&"string"!==r(i)&&t(i)})}(arguments),n&&!t&&l()),this},remove:function(){return we.each(arguments,function(e,t){for(var n;(n=we.inArray(t,a,n))>-1;)a.splice(n,1),n<=c&&c--}),this},has:function(e){return e?we.inArray(e,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return o=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return o=s=[],n||t||(a=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},we.extend({Deferred:function(t){var n=[["notify","progress",we.Callbacks("memory"),we.Callbacks("memory"),2],["resolve","done",we.Callbacks("once memory"),we.Callbacks("once memory"),0,"resolved"],["reject","fail",we.Callbacks("once memory"),we.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return we.Deferred(function(t){we.each(n,function(n,r){var i=ye(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&ye(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var s=this,u=arguments,f=function(){var e,f;if(!(t<a)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"==typeof e||"function"==typeof e)&&e.then,ye(f)?i?f.call(e,o(a,n,c,i),o(a,n,l,i)):(a++,f.call(e,o(a,n,c,i),o(a,n,l,i),o(a,n,c,n.notifyWith))):(r!==c&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},h=i?f:function(){try{f()}catch(e){we.Deferred.exceptionHook&&we.Deferred.exceptionHook(e,h.stackTrace),t+1>=a&&(r!==l&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?h():(we.Deferred.getStackHook&&(h.stackTrace=we.Deferred.getStackHook()),e.setTimeout(h))}}var a=0;return we.Deferred(function(e){n[0][3].add(o(0,e,ye(i)?i:c,e.notifyWith)),n[1][3].add(o(0,e,ye(t)?t:c)),n[2][3].add(o(0,e,ye(r)?r:l))}).promise()},promise:function(e){return null!=e?we.extend(e,i):i}},o={};return we.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=ue.call(arguments),o=we.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?ue.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(f(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||ye(i[n]&&i[n].then)))return o.then();for(;n--;)f(i[n],a(n),o.reject);return o.promise()}});var qe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;we.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&qe.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},we.readyException=function(t){e.setTimeout(function(){throw t})};var Le=we.Deferred();we.fn.ready=function(e){return Le.then(e).catch(function(e){we.readyException(e)}),this},we.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--we.readyWait:we.isReady)||(we.isReady=!0,!0!==e&&--we.readyWait>0||Le.resolveWith(ae,[we]))}}),we.ready.then=Le.then,"complete"===ae.readyState||"loading"!==ae.readyState&&!ae.documentElement.doScroll?e.setTimeout(we.ready):(ae.addEventListener("DOMContentLoaded",h),e.addEventListener("load",h));var Xe=function(e,t,n,i,o,a,s){var u=0,c=e.length,l=null==n;if("object"===r(n)){o=!0;for(u in n)Xe(e,t,u,n[u],!0,a,s)}else if(void 0!==i&&(o=!0,ye(i)||(s=!0),l&&(s?(t.call(e,i),t=null):(l=t,t=function(e,t,n){return l.call(we(e),n)})),t))for(;u<c;u++)t(e[u],n,s?i:i.call(e[u],u,t(e[u],n)));return o?e:l?t.call(e):c?t(e[0],n):a},Ye=/^-ms-/,Re=/-([a-z])/g,He=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};v.uid=1,v.prototype={cache:function(e){var t=e[this.expando];return t||(t={},He(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[d(t)]=n;else for(r in t)i[d(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][d(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(d):(t=d(t))in r?[t]:t.match(Oe)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||we.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!we.isEmptyObject(t)}};var Pe=new v,Me=new v,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,We=/[A-Z]/g;we.extend({hasData:function(e){return Me.hasData(e)||Pe.hasData(e)},data:function(e,t,n){return Me.access(e,t,n)},removeData:function(e,t){Me.remove(e,t)},_data:function(e,t,n){return Pe.access(e,t,n)},_removeData:function(e,t){Pe.remove(e,t)}}),we.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Me.get(o),1===o.nodeType&&!Pe.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=d(r.slice(5)),g(o,r,i[r]));Pe.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Me.set(this,e)}):Xe(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=Me.get(o,e)))return n;if(void 0!==(n=g(o,e)))return n}else this.each(function(){Me.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Me.remove(this,e)})}}),we.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Pe.get(e,t),n&&(!r||Array.isArray(n)?r=Pe.access(e,t,we.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=we.queue(e,t),r=n.length,i=n.shift(),o=we._queueHooks(e,t),a=function(){we.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Pe.get(e,n)||Pe.access(e,n,{empty:we.Callbacks("once memory").add(function(){Pe.remove(e,[t+"queue",n])})})}}),we.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?we.queue(this[0],e):void 0===t?this:this.each(function(){var n=we.queue(this,e,t);we._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&we.dequeue(this,e)})},dequeue:function(e){return this.each(function(){we.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=we.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Pe.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$e=new RegExp("^(?:([+-])=|)("+Be+")([a-z%]*)$","i"),_e=["Top","Right","Bottom","Left"],ze=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&we.contains(e.ownerDocument,e)&&"none"===we.css(e,"display")},Ve=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},Ue={};we.fn.extend({show:function(){return b(this,!0)},hide:function(){return b(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ze(this)?we(this).show():we(this).hide()})}});var Ge=/^(?:checkbox|radio)$/i,Je=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Qe=/^$|^module$|\/(?:java|ecma)script/i,Ke={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ke.optgroup=Ke.option,Ke.tbody=Ke.tfoot=Ke.colgroup=Ke.caption=Ke.thead,Ke.th=Ke.td;var Ze=/<|&#?\w+;/;!function(){var e=ae.createDocumentFragment().appendChild(ae.createElement("div")),t=ae.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),ge.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",ge.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var et=ae.documentElement,tt=/^key/,nt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rt=/^([^.]*)(?:\.(.+)|)/;we.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,c,l,f,h,p,d,v,m=Pe.get(e);if(m)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&we.find.matchesSelector(et,i),n.guid||(n.guid=we.guid++),(u=m.events)||(u=m.events={}),(a=m.handle)||(a=m.handle=function(t){return void 0!==we&&we.event.triggered!==t.type?we.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(Oe)||[""]).length;c--;)p=v=(s=rt.exec(t[c])||[])[1],d=(s[2]||"").split(".").sort(),p&&(f=we.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=we.event.special[p]||{},l=we.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&we.expr.match.needsContext.test(i),namespace:d.join(".")},o),(h=u[p])||((h=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,d,a)||e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,l):h.push(l),we.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,c,l,f,h,p,d,v,m=Pe.hasData(e)&&Pe.get(e);if(m&&(u=m.events)){for(c=(t=(t||"").match(Oe)||[""]).length;c--;)if(s=rt.exec(t[c])||[],p=v=s[1],d=(s[2]||"").split(".").sort(),p){for(f=we.event.special[p]||{},h=u[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=h.length;o--;)l=h[o],!i&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(h.splice(o,1),l.selector&&h.delegateCount--,f.remove&&f.remove.call(e,l));a&&!h.length&&(f.teardown&&!1!==f.teardown.call(e,d,m.handle)||we.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)we.event.remove(e,p+t[c],n,r,!0);we.isEmptyObject(u)&&Pe.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=we.event.fix(e),u=new Array(arguments.length),c=(Pe.get(this,"events")||{})[s.type]||[],l=we.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=we.event.handlers.call(this,s,c),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((we.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,c=e.target;if(u&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?we(i,this).index(c)>-1:we.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<t.length&&s.push({elem:c,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(we.Event.prototype,e,{enumerable:!0,configurable:!0,get:ye(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[we.expando]?e:new we.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==k()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===k()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&o(this,"input"))return this.click(),!1},_default:function(e){return o(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},we.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},we.Event=function(e,t){if(!(this instanceof we.Event))return new we.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?C:T,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&we.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[we.expando]=!0},we.Event.prototype={constructor:we.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=C,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=C,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=C,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},we.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&tt.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&nt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},we.event.addProp),we.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){we.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||we.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),we.fn.extend({on:function(e,t,n,r){return S(this,e,t,n,r)},one:function(e,t,n,r){return S(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,we(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=T),this.each(function(){we.event.remove(this,e,n,t)})}});var it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ot=/<script|<style|<link/i,at=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;we.extend({htmlPrefilter:function(e){return e.replace(it,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=we.contains(e.ownerDocument,e);if(!(ge.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||we.isXMLDoc(e)))for(a=w(s),r=0,i=(o=w(e)).length;r<i;r++)O(o[r],a[r]);if(t)if(n)for(o=o||w(e),a=a||w(s),r=0,i=o.length;r<i;r++)F(o[r],a[r]);else F(e,s);return(a=w(s,"script")).length>0&&E(a,!u&&w(e,"script")),s},cleanData:function(e){for(var t,n,r,i=we.event.special,o=0;void 0!==(n=e[o]);o++)if(He(n)){if(t=n[Pe.expando]){if(t.events)for(r in t.events)i[r]?we.event.remove(n,r):we.removeEvent(n,r,t.handle);n[Pe.expando]=void 0}n[Me.expando]&&(n[Me.expando]=void 0)}}}),we.fn.extend({detach:function(e){return L(this,e,!0)},remove:function(e){return L(this,e)},text:function(e){return Xe(this,function(e){return void 0===e?we.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return q(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||A(this,e).appendChild(e)})},prepend:function(){return q(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return q(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return q(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(we.cleanData(w(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return we.clone(this,e,t)})},html:function(e){return Xe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ot.test(e)&&!Ke[(Je.exec(e)||["",""])[1].toLowerCase()]){e=we.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(we.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return q(this,arguments,function(t){var n=this.parentNode;we.inArray(this,e)<0&&(we.cleanData(w(this)),n&&n.replaceChild(t,this))},e)}}),we.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){we.fn[e]=function(e){for(var n,r=[],i=we(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),we(i[a])[t](n),le.apply(r,n.get());return this.pushStack(r)}});var ut=new RegExp("^("+Be+")(?!px)[a-z%]+$","i"),ct=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},lt=new RegExp(_e.join("|"),"i");!function(){function t(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",et.appendChild(u).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,s=12===n(t.marginLeft),c.style.right="60%",a=36===n(t.right),i=36===n(t.width),c.style.position="absolute",o=36===c.offsetWidth||"absolute",et.removeChild(u),c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u=ae.createElement("div"),c=ae.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",ge.clearCloneStyle="content-box"===c.style.backgroundClip,we.extend(ge,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),o}}))}();var ft=/^(none|table(?!-c[ea]).+)/,ht=/^--/,pt={position:"absolute",visibility:"hidden",display:"block"},dt={letterSpacing:"0",fontWeight:"400"},vt=["Webkit","Moz","ms"],mt=ae.createElement("div").style;we.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=X(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=d(t),u=ht.test(t),c=e.style;if(u||(t=H(s)),a=we.cssHooks[t]||we.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:c[t];"string"==(o=typeof n)&&(i=$e.exec(n))&&i[1]&&(n=y(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(we.cssNumber[s]?"":"px")),ge.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,o,a,s=d(t);return ht.test(t)||(t=H(s)),(a=we.cssHooks[t]||we.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=X(e,t,r)),"normal"===i&&t in dt&&(i=dt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),we.each(["height","width"],function(e,t){we.cssHooks[t]={get:function(e,n,r){if(n)return!ft.test(we.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?I(e,t,r):Ve(e,pt,function(){return I(e,t,r)})},set:function(e,n,r){var i,o=ct(e),a="border-box"===we.css(e,"boxSizing",!1,o),s=r&&M(e,t,r,a,o);return a&&ge.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-M(e,t,"border",!1,o)-.5)),s&&(i=$e.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=we.css(e,t)),P(e,n,s)}}}),we.cssHooks.marginLeft=Y(ge.reliableMarginLeft,function(e,t){if(t)return(parseFloat(X(e,"marginLeft"))||e.getBoundingClientRect().left-Ve(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),we.each({margin:"",padding:"",border:"Width"},function(e,t){we.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+_e[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(we.cssHooks[e+t].set=P)}),we.fn.extend({css:function(e,t){return Xe(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=ct(e),i=t.length;a<i;a++)o[t[a]]=we.css(e,t[a],!1,r);return o}return void 0!==n?we.style(e,t,n):we.css(e,t)},e,t,arguments.length>1)}}),we.Tween=W,W.prototype={constructor:W,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||we.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(we.cssNumber[n]?"":"px")},cur:function(){var e=W.propHooks[this.prop];return e&&e.get?e.get(this):W.propHooks._default.get(this)},run:function(e){var t,n=W.propHooks[this.prop];return this.options.duration?this.pos=t=we.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):W.propHooks._default.set(this),this}},W.prototype.init.prototype=W.prototype,W.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=we.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){we.fx.step[e.prop]?we.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[we.cssProps[e.prop]]&&!we.cssHooks[e.prop]?e.elem[e.prop]=e.now:we.style(e.elem,e.prop,e.now+e.unit)}}},W.propHooks.scrollTop=W.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},we.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},we.fx=W.prototype.init,we.fx.step={};var gt,yt,xt=/^(?:toggle|show|hide)$/,bt=/queueHooks$/;we.Animation=we.extend(G,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return y(n.elem,e,$e.exec(t),n),n}]},tweener:function(e,t){ye(e)?(t=e,e=["*"]):e=e.match(Oe);for(var n,r=0,i=e.length;r<i;r++)n=e[r],G.tweeners[n]=G.tweeners[n]||[],G.tweeners[n].unshift(t)},prefilters:[V],prefilter:function(e,t){t?G.prefilters.unshift(e):G.prefilters.push(e)}}),we.speed=function(e,t,n){var r=e&&"object"==typeof e?we.extend({},e):{complete:n||!n&&t||ye(e)&&e,duration:e,easing:n&&t||t&&!ye(t)&&t};return we.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in we.fx.speeds?r.duration=we.fx.speeds[r.duration]:r.duration=we.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){ye(r.old)&&r.old.call(this),r.queue&&we.dequeue(this,r.queue)},r},we.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ze).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=we.isEmptyObject(e),o=we.speed(t,n,r),a=function(){var t=G(this,we.extend({},e),o);(i||Pe.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=we.timers,a=Pe.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&bt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||we.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){
var t,n=Pe.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=we.timers,a=r?r.length:0;for(n.finish=!0,we.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),we.each(["toggle","show","hide"],function(e,t){var n=we.fn[t];we.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,r,i)}}),we.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){we.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),we.timers=[],we.fx.tick=function(){var e,t=0,n=we.timers;for(gt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||we.fx.stop(),gt=void 0},we.fx.timer=function(e){we.timers.push(e),we.fx.start()},we.fx.interval=13,we.fx.start=function(){yt||(yt=!0,B())},we.fx.stop=function(){yt=null},we.fx.speeds={slow:600,fast:200,_default:400},we.fn.delay=function(t,n){return t=we.fx?we.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=ae.createElement("input"),t=ae.createElement("select").appendChild(ae.createElement("option"));e.type="checkbox",ge.checkOn=""!==e.value,ge.optSelected=t.selected,(e=ae.createElement("input")).value="t",e.type="radio",ge.radioValue="t"===e.value}();var wt,Et=we.expr.attrHandle;we.fn.extend({attr:function(e,t){return Xe(this,we.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){we.removeAttr(this,e)})}}),we.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?we.prop(e,t,n):(1===o&&we.isXMLDoc(e)||(i=we.attrHooks[t.toLowerCase()]||(we.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void we.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=we.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!ge.radioValue&&"radio"===t&&o(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Oe);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),wt={set:function(e,t,n){return!1===t?we.removeAttr(e,n):e.setAttribute(n,n),n}},we.each(we.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Et[t]||we.find.attr;Et[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=Et[a],Et[a]=i,i=null!=n(e,t,r)?a:null,Et[a]=o),i}});var Nt=/^(?:input|select|textarea|button)$/i,Ct=/^(?:a|area)$/i;we.fn.extend({prop:function(e,t){return Xe(this,we.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[we.propFix[e]||e]})}}),we.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&we.isXMLDoc(e)||(t=we.propFix[t]||t,i=we.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=we.find.attr(e,"tabindex");return t?parseInt(t,10):Nt.test(e.nodeName)||Ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ge.optSelected||(we.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),we.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){we.propFix[this.toLowerCase()]=this}),we.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(ye(e))return this.each(function(t){we(this).addClass(e.call(this,t,Q(this)))});if((t=K(e)).length)for(;n=this[u++];)if(i=Q(n),r=1===n.nodeType&&" "+J(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=J(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(ye(e))return this.each(function(t){we(this).removeClass(e.call(this,t,Q(this)))});if(!arguments.length)return this.attr("class","");if((t=K(e)).length)for(;n=this[u++];)if(i=Q(n),r=1===n.nodeType&&" "+J(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=J(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):ye(e)?this.each(function(n){we(this).toggleClass(e.call(this,n,Q(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(i=0,o=we(this),a=K(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=Q(this))&&Pe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Pe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+J(Q(n))+" ").indexOf(t)>-1)return!0;return!1}});var Tt=/\r/g;we.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=ye(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,we(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=we.map(i,function(e){return null==e?"":e+""})),(t=we.valHooks[this.type]||we.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=we.valHooks[i.type]||we.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Tt,""):null==n?"":n:void 0}}),we.extend({valHooks:{option:{get:function(e){var t=we.find.attr(e,"value");return null!=t?t:J(we.text(e))}},select:{get:function(e){var t,n,r,i=e.options,a=e.selectedIndex,s="select-one"===e.type,u=s?null:[],c=s?a+1:i.length;for(r=a<0?c:s?a:0;r<c;r++)if(((n=i[r]).selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!o(n.parentNode,"optgroup"))){if(t=we(n).val(),s)return t;u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,o=we.makeArray(t),a=i.length;a--;)((r=i[a]).selected=we.inArray(we.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),we.each(["radio","checkbox"],function(){we.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=we.inArray(we(e).val(),t)>-1}},ge.checkOn||(we.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ge.focusin="onfocusin"in e;var kt=/^(?:focusinfocus|focusoutblur)$/,St=function(e){e.stopPropagation()};we.extend(we.event,{trigger:function(t,n,r,i){var o,a,s,u,c,l,f,h,p=[r||ae],d=de.call(t,"type")?t.type:t,v=de.call(t,"namespace")?t.namespace.split("."):[];if(a=h=s=r=r||ae,3!==r.nodeType&&8!==r.nodeType&&!kt.test(d+we.event.triggered)&&(d.indexOf(".")>-1&&(d=(v=d.split(".")).shift(),v.sort()),c=d.indexOf(":")<0&&"on"+d,t=t[we.expando]?t:new we.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:we.makeArray(n,[t]),f=we.event.special[d]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!xe(r)){for(u=f.delegateType||d,kt.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||ae)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)h=a,t.type=o>1?u:f.bindType||d,(l=(Pe.get(a,"events")||{})[t.type]&&Pe.get(a,"handle"))&&l.apply(a,n),(l=c&&a[c])&&l.apply&&He(a)&&(t.result=l.apply(a,n),!1===t.result&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(p.pop(),n)||!He(r)||c&&ye(r[d])&&!xe(r)&&((s=r[c])&&(r[c]=null),we.event.triggered=d,t.isPropagationStopped()&&h.addEventListener(d,St),r[d](),t.isPropagationStopped()&&h.removeEventListener(d,St),we.event.triggered=void 0,s&&(r[c]=s)),t.result}},simulate:function(e,t,n){var r=we.extend(new we.Event,n,{type:e,isSimulated:!0});we.event.trigger(r,null,t)}}),we.fn.extend({trigger:function(e,t){return this.each(function(){we.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return we.event.trigger(e,t,n,!0)}}),ge.focusin||we.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){we.event.simulate(t,e.target,we.event.fix(e))};we.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Pe.access(r,t);i||r.addEventListener(e,n,!0),Pe.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Pe.access(r,t)-1;i?Pe.access(r,t,i):(r.removeEventListener(e,n,!0),Pe.remove(r,t))}}});var At=e.location,jt=Date.now(),Dt=/\?/;we.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||we.error("Invalid XML: "+t),n};var Ft=/\[\]$/,Ot=/\r?\n/g,qt=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;we.param=function(e,t){var n,r=[],i=function(e,t){var n=ye(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!we.isPlainObject(e))we.each(e,function(){i(this.name,this.value)});else for(n in e)Z(n,e[n],t,i);return r.join("&")},we.fn.extend({serialize:function(){return we.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=we.prop(this,"elements");return e?we.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!we(this).is(":disabled")&&Lt.test(this.nodeName)&&!qt.test(e)&&(this.checked||!Ge.test(e))}).map(function(e,t){var n=we(this).val();return null==n?null:Array.isArray(n)?we.map(n,function(e){return{name:t.name,value:e.replace(Ot,"\r\n")}}):{name:t.name,value:n.replace(Ot,"\r\n")}}).get()}});var Xt=/%20/g,Yt=/#.*$/,Rt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,It=/^\/\//,Wt={},Bt={},$t="*/".concat("*"),_t=ae.createElement("a");_t.href=At.href,we.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:At.href,type:"GET",isLocal:Pt.test(At.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":we.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ne(ne(e,we.ajaxSettings),t):ne(we.ajaxSettings,e)},ajaxPrefilter:ee(Wt),ajaxTransport:ee(Bt),ajax:function(t,n){function r(t,n,r,s){var c,h,p,b,w,E=n;l||(l=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",N.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(b=re(d,N,r)),b=ie(d,b,N,c),c?(d.ifModified&&((w=N.getResponseHeader("Last-Modified"))&&(we.lastModified[o]=w),(w=N.getResponseHeader("etag"))&&(we.etag[o]=w)),204===t||"HEAD"===d.type?E="nocontent":304===t?E="notmodified":(E=b.state,h=b.data,c=!(p=b.error))):(p=E,!t&&E||(E="error",t<0&&(t=0))),N.status=t,N.statusText=(n||E)+"",c?g.resolveWith(v,[h,E,N]):g.rejectWith(v,[N,E,p]),N.statusCode(x),x=void 0,f&&m.trigger(c?"ajaxSuccess":"ajaxError",[N,d,c?h:p]),y.fireWith(v,[N,E]),f&&(m.trigger("ajaxComplete",[N,d]),--we.active||we.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,c,l,f,h,p,d=we.ajaxSetup({},n),v=d.context||d,m=d.context&&(v.nodeType||v.jquery)?we(v):we.event,g=we.Deferred(),y=we.Callbacks("once memory"),x=d.statusCode||{},b={},w={},E="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Ht.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return l?a:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)N.always(e[N.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||E;return i&&i.abort(t),r(0,t),this}};if(g.promise(N),d.url=((t||d.url||At.href)+"").replace(It,At.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(Oe)||[""],null==d.crossDomain){c=ae.createElement("a");try{c.href=d.url,c.href=c.href,d.crossDomain=_t.protocol+"//"+_t.host!=c.protocol+"//"+c.host}catch(e){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=we.param(d.data,d.traditional)),te(Wt,d,n,N),l)return N;(f=we.event&&d.global)&&0==we.active++&&we.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Mt.test(d.type),o=d.url.replace(Yt,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Xt,"+")):(p=d.url.slice(o.length),d.data&&(d.processData||"string"==typeof d.data)&&(o+=(Dt.test(o)?"&":"?")+d.data,delete d.data),!1===d.cache&&(o=o.replace(Rt,"$1"),p=(Dt.test(o)?"&":"?")+"_="+jt+++p),d.url=o+p),d.ifModified&&(we.lastModified[o]&&N.setRequestHeader("If-Modified-Since",we.lastModified[o]),we.etag[o]&&N.setRequestHeader("If-None-Match",we.etag[o])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&N.setRequestHeader("Content-Type",d.contentType),N.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+$t+"; q=0.01":""):d.accepts["*"]);for(h in d.headers)N.setRequestHeader(h,d.headers[h]);if(d.beforeSend&&(!1===d.beforeSend.call(v,N,d)||l))return N.abort();if(E="abort",y.add(d.complete),N.done(d.success),N.fail(d.error),i=te(Bt,d,n,N)){if(N.readyState=1,f&&m.trigger("ajaxSend",[N,d]),l)return N;d.async&&d.timeout>0&&(u=e.setTimeout(function(){N.abort("timeout")},d.timeout));try{l=!1,i.send(b,r)}catch(e){if(l)throw e;r(-1,e)}}else r(-1,"No Transport");return N},getJSON:function(e,t,n){return we.get(e,t,n,"json")},getScript:function(e,t){return we.get(e,void 0,t,"script")}}),we.each(["get","post"],function(e,t){we[t]=function(e,n,r,i){return ye(n)&&(i=i||r,r=n,n=void 0),we.ajax(we.extend({url:e,type:t,dataType:i,data:n,success:r},we.isPlainObject(e)&&e))}}),we._evalUrl=function(e){return we.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},we.fn.extend({wrapAll:function(e){var t;return this[0]&&(ye(e)&&(e=e.call(this[0])),t=we(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ye(e)?this.each(function(t){we(this).wrapInner(e.call(this,t))}):this.each(function(){var t=we(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ye(e);return this.each(function(n){we(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){we(this).replaceWith(this.childNodes)}),this}}),we.expr.pseudos.hidden=function(e){return!we.expr.pseudos.visible(e)},we.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},we.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var zt={0:200,1223:204},Vt=we.ajaxSettings.xhr();ge.cors=!!Vt&&"withCredentials"in Vt,ge.ajax=Vt=!!Vt,we.ajaxTransport(function(t){var n,r;if(ge.cors||Vt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(zt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),we.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),we.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return we.globalEval(e),e}}}),we.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),we.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=we("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),ae.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Ut=[],Gt=/(=)\?(?=&|$)|\?\?/;we.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ut.pop()||we.expando+"_"+jt++;return this[e]=!0,e}}),we.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Gt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ye(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Gt,"$1"+i):!1!==t.jsonp&&(t.url+=(Dt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||we.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?we(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ut.push(i)),a&&ye(o)&&o(a[0]),a=o=void 0}),"script"}),ge.createHTMLDocument=function(){var e=ae.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),we.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;return t||(ge.createHTMLDocument?((r=(t=ae.implementation.createHTMLDocument("")).createElement("base")).href=ae.location.href,t.head.appendChild(r)):t=ae),i=Se.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=N([e],t,o),o&&o.length&&we(o).remove(),we.merge([],i.childNodes))},we.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=J(e.slice(s)),e=e.slice(0,s)),ye(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&we.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?we("<div>").append(we.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},we.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){we.fn[t]=function(e){return this.on(t,e)}}),we.expr.pseudos.animated=function(e){return we.grep(we.timers,function(t){return e===t.elem}).length},we.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,c=we.css(e,"position"),l=we(e),f={};"static"===c&&(e.style.position="relative"),s=l.offset(),o=we.css(e,"top"),u=we.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1?(a=(r=l.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),ye(t)&&(t=t.call(e,n,we.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):l.css(f)}},we.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){we.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===we.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===we.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=we(e).offset()).top+=we.css(e,"borderTopWidth",!0),i.left+=we.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-we.css(r,"marginTop",!0),left:t.left-i.left-we.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===we.css(e,"position");)e=e.offsetParent;return e||et})}}),we.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;we.fn[e]=function(r){return Xe(this,function(e,r,i){var o;if(xe(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),we.each(["top","left"],function(e,t){we.cssHooks[t]=Y(ge.pixelPosition,function(e,n){if(n)return n=X(e,t),ut.test(n)?we(e).position()[t]+"px":n})}),we.each({Height:"height",Width:"width"},function(e,t){we.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){we.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return Xe(this,function(t,n,i){var o;return xe(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?we.css(t,n,s):we.style(t,n,i,s)},t,a?i:void 0,a)}})}),we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){we.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),we.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),we.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),we.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),ye(e))return r=ue.call(arguments,2),i=function(){return e.apply(t||this,r.concat(ue.call(arguments)))},i.guid=e.guid=e.guid||we.guid++,i},we.holdReady=function(e){e?we.readyWait++:we.ready(!0)},we.isArray=Array.isArray,we.parseJSON=JSON.parse,we.nodeName=o,we.isFunction=ye,we.isWindow=xe,we.camelCase=d,we.type=r,we.now=Date.now,we.isNumeric=function(e){var t=we.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return we});var Jt=e.jQuery,Qt=e.$;return we.noConflict=function(t){return e.$===we&&(e.$=Qt),t&&e.jQuery===we&&(e.jQuery=Jt),we},t||(e.jQuery=e.$=we),we}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.naviBoard=t():e.naviBoard=t()}(window,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(){this.currentEvent=null,this.componentRendered=null,this.matrixForNavigation=null,this.currentX=0,this.currentY=0,this.activeElement=null,this.prevComponentRendered=[],this.prevActiveElement=[],this.nextComponentRendered=null,this.arrayOfCoordinates=[],this.initialOffsetX=0,this.initialOffsetY=0,this.resume=!0,this.matrixWidth=0,this.matrixHeight=0}function i(e){for(var t=e[0].offset.left,n=e[0].offset.right,r=e[0].offset.top,i=e[0].offset.bottom,o=1,a=e.length;o<a;o++){var s=e[o].offset.left,u=e[o].offset.top,c=e[o].offset.right,l=e[o].offset.bottom;t=s<t?s:t,r=u<r?u:r,n=c>n?c:n,i=l>i?l:i}return[n-t,i-r]}var o=window;r.prototype._getLocationOfActiveElement=function(e){if(null!=this.matrixForNavigation)for(var t=0;t<this.matrixForNavigation.length;t++)for(var n=0;n<this.matrixForNavigation[0].length;n++)if(this.matrixForNavigation[t][n]==e)return[t,n];return[0,0]},r.prototype.getWindowRelativeOffset=function(e){return e.getBoundingClientRect()},r.prototype.makeNavigationRulesForComponent=function(e,t,r){var i=this,o=this,a=JSON.parse(JSON.stringify(function e(t){var n=new Array(t||0),r=t;if(arguments.length>1)for(var i=Array.prototype.slice.call(arguments,1);r--;)n[t-1-r]=e.apply(this,i);return n}(t,r)));new Promise(function(o,s){var u=i.matrixWidth/r,c=i.matrixHeight/t;o(function(e,t,n,r){var i=Array.from(Object.create(t)),o=e;if(void 0!=o&&o!=[])for(var a=0;a<o.length;a++)for(var s=0;s<o[a].length;s++){if(null!=o[a][s])var u=Math.round(o[a][s].offset.width/n),c=Math.round(o[a][s].offset.height/r);null!==o[a][s]&&(u>1||c>1)?function(e,t,n,r,i,o){for(var a=0;a<o;a++)for(var s=0;s<i;s++)e[n+a][r+s]=t}(i,o[a][s].elementToFocus,a,s,u,c):null!==o[a][s]&&(i[a][s]=o[a][s].elementToFocus)}return i}(function(e){for(var t=0;t<e.length;t++){var r=e.length*e[t].offset.x+e[t].offset.y;e[t].iValue=r}e.sort(function(e,t){var n=e.offset.y,r=t.offset.y;return n<r?-1:n>r?1:0});var i=[],o=[],a=!1;for(t=0;t<e.length;t++)a?e[t].offset.y>o[o.length-1].offset.y&&t!=e.length-1?(i.push(o),(o=[]).push(e[t])):t===e.length-1?e[t].offset.y>o[o.length-1].offset.y?(i.push(o),(o=[]).push(e[t]),i.push(o)):(o.push(e[t]),i.push(o)):o.push(e[t]):(o.push(e[t]),a=!0);o.length>0&&0==i.length&&i.push(o);for(var s=0;s<i.length;s++)i[s].sort(function(e,t){var n=e.offset.x,r=t.offset.x;return n<r?-1:n>r?1:0});var u=n(new Set(i.reduce(function(e,t){return e.concat(t.map(function(e){return e.offset.x}))},[]))).sort(function(e,t){return e-t});return i.forEach(function(e){u.forEach(function(t,n){(void 0===e[n]||e[n].offset.x>t)&&e.splice(n,0,null)})}),i}(e),a,u,c)),s(err)}).then(function(e){if(o.matrixForNavigation=e,0!=o.matrixForNavigation.length&&void 0!=o.matrixForNavigation){var t=!1;if(o.prevComponentRendered.length>=2&&o.prevActiveElement.length>=2&&o.prevComponentRendered[o.prevComponentRendered.length-2]==o.nextComponentRendered&&null!=o.prevComponentRendered[o.prevComponentRendered.length-2]&&null!=o.nextComponentRendered){var n=o.prevActiveElement[o.prevActiveElement.length-2];o.currentX=n[0],o.currentY=n[1],t=!0}if(o.matrixForNavigation.length<o.currentX&&o.matrixForNavigation[0].length<o.currentY){for(var r=0;r<o.matrixForNavigation[0].length;r++)if(null!=o.matrixForNavigation[0][r]){o.currentX=0,o.currentY=r,o.activeElement=o.matrixForNavigation[o.currentX][o.currentY],o.activeElement.focus();break}}else if(o.matrixForNavigation.length>o.currentX&&o.matrixForNavigation[0].length>o.currentY&&t)o.activeElement=o.matrixForNavigation[o.currentX][o.currentY],o.activeElement.focus();else if(o.matrixForNavigation.length>o.currentX&&o.matrixForNavigation[0].length>o.currentY){for(r=0;r<o.matrixForNavigation[0].length;r++)if(null!=o.matrixForNavigation[0][r]){o.currentX=0,o.currentY=r,o.activeElement=o.matrixForNavigation[o.currentX][o.currentY],o.activeElement.focus();break}}else for(r=0;r<o.matrixForNavigation[0].length;r++)if(null!=o.matrixForNavigation[0][r]){o.currentX=0,o.currentY=r,o.activeElement=o.matrixForNavigation[o.currentX][o.currentY],o.activeElement.focus();break}}},function(e){})};var a=(new Date).getTime();r.prototype.destroyCurrentNavigationView=function(e,t){var n=(new Date).getTime();return n-a<250?(a=n,!1):"destroy"==t?(this.prevComponentRendered.push(this.componentRendered),this.prevComponentRendered.length>=5&&(this.prevComponentRendered=this.prevComponentRendered.slice(Math.max(this.prevComponentRendered.length-5,2))),this.prevActiveElement.push(this._getLocationOfActiveElement(this.activeElement)),this.prevActiveElement.length>=5&&(this.prevActiveElement=this.prevActiveElement.slice(Math.max(this.prevActiveElement.length-5,2))),this.arrayOfCoordinates=[],s=[],u=[],this.initialOffsetX=0,this.initialOffsetY=0,this.matrixForNavigation=null,this.currentX=0,this.currentY=0,this.activeElement=null,this.currentEvent=null,this.componentRendered=null,a=n,!0):(s=[],u=[],this.arrayOfCoordinates=[],this.initialOffsetX=0,this.initialOffsetY=0,this.matrixForNavigation=null,this.currentX=0,this.currentY=0,this.activeElement=null,this.currentEvent=null,a=n,!0)};var s=[],u=[];r.prototype.increaseRowCountIfRequired=function(e,t){return e.y=Math.round(e.y),e.y>this.initialOffsetY&&e.y>Math.max.apply(Math,n(u))?(this.initialOffsetY=e.y,u.push(e.y),t+1):e.y<this.initialOffsetY&&!u.includes(e.y)?(this.initialOffsetY=e.y,u.push(e.y),t+1):t},r.prototype.increaseColumnCountIfRequired=function(e,t){return e.x=Math.round(e.x),e.x>this.initialOffsetX&&e.x>Math.max.apply(Math,n(s))?(this.initialOffsetX=e.x,s.push(e.x),t+1):e.x<this.initialOffsetX&&!s.includes(e.x)?(this.initialOffsetX=e.x,s.push(e.x),t+1):t},r.prototype.handleView=function(e){var t=this;t.arrayOfCoordinates=[],t.componentRendered=e,new Promise(function(t,n){o=document.getElementById(e),t(o.getElementsByClassName("navigable")),n(err)}).then(function(e){for(var n=0,r=0,o=0;o<e.length;o++){e[o].tabIndex=-1===e[o].tabIndex?0:e[o].tabIndex;var a=t.getWindowRelativeOffset(e[o]);n=t.increaseRowCountIfRequired(a,n),r=t.increaseColumnCountIfRequired(a,r);var s={offset:a,elementToFocus:e[o]};t.arrayOfCoordinates.push(s)}t.matrixWidth=i(t.arrayOfCoordinates)[0],t.matrixHeight=i(t.arrayOfCoordinates)[1],t.makeNavigationRulesForComponent(t.arrayOfCoordinates,n,r)},function(e){})};var c=new r;c.getActiveElement=function(){return this.activeElement},c.setNavigation=function(e){null===this.matrixForNavigation&&(this.nextComponentRendered=e,this.handleView(e))},c.destroyNavigation=function(e){this.destroyCurrentNavigationView(e,"destroy")},c.getCurrentEvent=function(e){return this.currentEvent},c.refreshNavigation=function(e,t){"refresh"==t?(this.prevComponentRendered.push(this.componentRendered),this.prevActiveElement.push(this._getLocationOfActiveElement(activeElement)),this.destroyCurrentNavigationView(e,"destroy")&&this.handleView(e)):this.destroyCurrentNavigationView(e,t)&&this.handleView(e)},c.getNavigationComponent=function(){return this.componentRendered},c.resumeNavigation=function(){this.resume=!0},c.pauseNavigation=function(){this.resume=!1};var l=function(e){if(null!==this.matrixForNavigation&&this.resume){var t=this.matrixForNavigation.length,n=this.matrixForNavigation[0].length,r=function(){for(var e=arguments[1];e>=0;){
if(void 0!==this.matrixForNavigation[arguments[0]][e]&&null!==this.matrixForNavigation[arguments[0]][e])return this.activeElement.blur(),this.currentX=arguments[0],this.currentY=e,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),!0;e--}return!1}.bind(this),i=function(){for(var e=arguments[1];e<n;){if(void 0!==this.matrixForNavigation[arguments[0]][e]&&null!==this.matrixForNavigation[arguments[0]][e])return this.activeElement.blur(),this.currentX=arguments[0],this.currentY=e,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),!0;e++}return!1}.bind(this),o=function(){for(var e=arguments[0];e>=0;){if(void 0!==this.matrixForNavigation[e][arguments[1]]&&null!==this.matrixForNavigation[e][arguments[1]])return this.activeElement.blur(),this.currentY=arguments[1],this.currentX=e,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),!0;e--}return!1}.bind(this),a=function(){for(var e=arguments[0];e<t;){if(void 0!==this.matrixForNavigation[e][arguments[1]]&&null!==this.matrixForNavigation[e][arguments[1]])return this.activeElement.blur(),this.currentY=arguments[1],this.currentX=e,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),!0;e++}return!1}.bind(this);if(null!=this.matrixForNavigation&&0!=this.matrixForNavigation.length)if(this.currentEvent=e,40==e.keyCode){if(this.currentX+1>=t);else if(void 0!=this.matrixForNavigation[this.currentX+1][this.currentY]&&this.matrixForNavigation[this.currentX+1][this.currentY]!=this.activeElement)this.activeElement.blur(),this.currentX=this.currentX+1,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();else if(void 0!==this.matrixForNavigation[this.currentX+1][this.currentY]&&this.matrixForNavigation[this.currentX+1][this.currentY]!=this.activeElement&&null===this.matrixForNavigation[this.currentX+1][this.currentY]){for(var s=this.currentX+1,u=!1;s<t;){if(null!=this.matrixForNavigation[s][this.currentY]){this.activeElement.blur(),this.currentX=s,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),u=!0;break}s++}this.currentY>=0&&!u&&0==r(this.currentX+1,this.currentY)&&i(this.currentX+1,this.currentY)}else if(this.matrixForNavigation[this.currentX+1][this.currentY]===this.activeElement)for(s=this.currentX+1;s<t;){if(this.matrixForNavigation[s][this.currentY]!=this.activeElement){this.activeElement.blur(),this.currentX=s,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();break}s++}}else if(38==e.keyCode){if(this.currentX-1<0);else if(void 0!=this.matrixForNavigation[this.currentX-1][this.currentY]&&this.matrixForNavigation[this.currentX-1][this.currentY]!=this.activeElement)this.activeElement.blur(),this.currentX=this.currentX-1,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();else if(void 0!==this.matrixForNavigation[this.currentX-1][this.currentY]&&this.matrixForNavigation[this.currentX-1][this.currentY]!=this.activeElement&&null===this.matrixForNavigation[this.currentX-1][this.currentY]){var c=this.currentX-1;for(u=!1;c>=0;){if(null!=this.matrixForNavigation[c][this.currentY]){this.activeElement.blur(),this.currentX=c,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),u=!0;break}c--}this.currentY>0&&!u&&0==r(this.currentX-1,this.currentY)&&i(this.currentX-1,this.currentY)}else if(this.matrixForNavigation[this.currentX-1][this.currentY]===this.activeElement)for(c=this.currentX-1;c>=0;){if(this.matrixForNavigation[c][this.currentY]!=this.activeElement){this.activeElement.blur(),this.currentX=c,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();break}c--}}else if(39==e.keyCode){if(this.currentY+1>=n);else if(void 0!=this.matrixForNavigation[this.currentX][this.currentY+1]&&this.matrixForNavigation[this.currentX][this.currentY+1]!=this.activeElement)this.activeElement.blur(),this.currentY=this.currentY+1,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();else if(void 0!==this.matrixForNavigation[this.currentX][this.currentY+1]&&this.matrixForNavigation[this.currentX][this.currentY+1]!=this.activeElement&&null===this.matrixForNavigation[this.currentX][this.currentY+1]){u=!1;for(var l=this.currentY+1;l<n;){if(null!=this.matrixForNavigation[this.currentX][l]){this.activeElement.blur(),this.currentY=l,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),u=!0;break}l++}this.currentY>0&&!u&&0==o(this.currentX,this.currentY+1)&&a(this.currentX,this.currentY+1)}else if(this.matrixForNavigation[this.currentX][this.currentY+1]===this.activeElement)for(l=this.currentY+1;l<n;){if(this.matrixForNavigation[this.currentX][l]!=this.activeElement){this.activeElement.blur(),this.currentY=l,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();break}l++}}else if(37==e.keyCode)if(this.currentY-1<0);else if(void 0!=this.matrixForNavigation[this.currentX][this.currentY-1]&&this.matrixForNavigation[this.currentX][this.currentY-1]!=this.activeElement)this.activeElement.blur(),this.currentY=this.currentY-1,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();else if(void 0!==this.matrixForNavigation[this.currentX][this.currentY-1]&&this.matrixForNavigation[this.currentX][this.currentY-1]!=this.activeElement&&null===this.matrixForNavigation[this.currentX][this.currentY-1]){var f=this.currentY-1;for(u=!1;f>=0;){if(null!=this.matrixForNavigation[this.currentX][f]){this.activeElement.blur(),this.currentY=f,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus(),u=!0;break}f--}this.currentX>0&&!u&&0==o(this.currentX,this.currentY-1)&&a(this.currentX,this.currentY-1)}else if(this.matrixForNavigation[this.currentX][this.currentY-1]===this.activeElement)for(f=this.currentY-1;f>=0;){if(this.matrixForNavigation[this.currentX][f]!=this.activeElement){this.activeElement.blur(),this.currentY=f,this.activeElement=this.matrixForNavigation[this.currentX][this.currentY],this.activeElement.focus();break}f--}}}.bind(c);o.addEventListener("keydown",l,!0),e.exports=c},function(e,t,n){var r=n(0);e.exports=r}])});
/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map
/*!

JSZip v3.1.5 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSZip = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var utils = require('./utils');
var support = require('./support');
// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0, len = input.length, remainingBytes = len;

    var isArray = utils.getTypeOf(input) !== "string";
    while (i < input.length) {
        remainingBytes = len - i;

        if (!isArray) {
            chr1 = input.charCodeAt(i++);
            chr2 = i < len ? input.charCodeAt(i++) : 0;
            chr3 = i < len ? input.charCodeAt(i++) : 0;
        } else {
            chr1 = input[i++];
            chr2 = i < len ? input[i++] : 0;
            chr3 = i < len ? input[i++] : 0;
        }

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = remainingBytes > 1 ? (((chr2 & 15) << 2) | (chr3 >> 6)) : 64;
        enc4 = remainingBytes > 2 ? (chr3 & 63) : 64;

        output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));

    }

    return output.join("");
};

// public method for decoding
exports.decode = function(input) {
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0, resultIndex = 0;

    var dataUrlPrefix = "data:";

    if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
        // This is a common error: people give a data url
        // (data:image/png;base64,iVBOR...) with a {base64: true} and
        // wonders why things don't work.
        // We can detect that the string input looks like a data url but we
        // *can't* be sure it is one: removing everything up to the comma would
        // be too dangerous.
        throw new Error("Invalid base64 input, it looks like a data url.");
    }

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    var totalLength = input.length * 3 / 4;
    if(input.charAt(input.length - 1) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if(input.charAt(input.length - 2) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if (totalLength % 1 !== 0) {
        // totalLength is not an integer, the length does not match a valid
        // base64 content. That can happen if:
        // - the input is not a base64 content
        // - the input is *almost* a base64 content, with a extra chars at the
        //   beginning or at the end
        // - the input uses a base64 variant (base64url for example)
        throw new Error("Invalid base64 input, bad content length.");
    }
    var output;
    if (support.uint8array) {
        output = new Uint8Array(totalLength|0);
    } else {
        output = new Array(totalLength|0);
    }

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output[resultIndex++] = chr1;

        if (enc3 !== 64) {
            output[resultIndex++] = chr2;
        }
        if (enc4 !== 64) {
            output[resultIndex++] = chr3;
        }

    }

    return output;
};

},{"./support":30,"./utils":32}],2:[function(require,module,exports){
'use strict';

var external = require("./external");
var DataWorker = require('./stream/DataWorker');
var DataLengthProbe = require('./stream/DataLengthProbe');
var Crc32Probe = require('./stream/Crc32Probe');
var DataLengthProbe = require('./stream/DataLengthProbe');

/**
 * Represent a compressed object, with everything needed to decompress it.
 * @constructor
 * @param {number} compressedSize the size of the data compressed.
 * @param {number} uncompressedSize the size of the data after decompression.
 * @param {number} crc32 the crc32 of the decompressed file.
 * @param {object} compression the type of compression, see lib/compressions.js.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the compressed data.
 */
function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
    this.compressedSize = compressedSize;
    this.uncompressedSize = uncompressedSize;
    this.crc32 = crc32;
    this.compression = compression;
    this.compressedContent = data;
}

CompressedObject.prototype = {
    /**
     * Create a worker to get the uncompressed content.
     * @return {GenericWorker} the worker.
     */
    getContentWorker : function () {
        var worker = new DataWorker(external.Promise.resolve(this.compressedContent))
        .pipe(this.compression.uncompressWorker())
        .pipe(new DataLengthProbe("data_length"));

        var that = this;
        worker.on("end", function () {
            if(this.streamInfo['data_length'] !== that.uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }
        });
        return worker;
    },
    /**
     * Create a worker to get the compressed content.
     * @return {GenericWorker} the worker.
     */
    getCompressedWorker : function () {
        return new DataWorker(external.Promise.resolve(this.compressedContent))
        .withStreamInfo("compressedSize", this.compressedSize)
        .withStreamInfo("uncompressedSize", this.uncompressedSize)
        .withStreamInfo("crc32", this.crc32)
        .withStreamInfo("compression", this.compression)
        ;
    }
};

/**
 * Chain the given worker with other workers to compress the content with the
 * given compresion.
 * @param {GenericWorker} uncompressedWorker the worker to pipe.
 * @param {Object} compression the compression object.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {GenericWorker} the new worker compressing the content.
 */
CompressedObject.createWorkerFrom = function (uncompressedWorker, compression, compressionOptions) {
    return uncompressedWorker
    .pipe(new Crc32Probe())
    .pipe(new DataLengthProbe("uncompressedSize"))
    .pipe(compression.compressWorker(compressionOptions))
    .pipe(new DataLengthProbe("compressedSize"))
    .withStreamInfo("compression", compression);
};

module.exports = CompressedObject;

},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(require,module,exports){
'use strict';

var GenericWorker = require("./stream/GenericWorker");

exports.STORE = {
    magic: "\x00\x00",
    compressWorker : function (compressionOptions) {
        return new GenericWorker("STORE compression");
    },
    uncompressWorker : function () {
        return new GenericWorker("STORE decompression");
    }
};
exports.DEFLATE = require('./flate');

},{"./flate":7,"./stream/GenericWorker":28}],4:[function(require,module,exports){
'use strict';

var utils = require('./utils');

/**
 * The following functions come from pako, from pako/lib/zlib/crc32.js
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Use ordinary array, since untyped makes no boost here
function makeTable() {
    var c, table = [];

    for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
            c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        table[n] = c;
    }

    return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

// That's all for the pako functions.

/**
 * Compute the crc32 of a string.
 * This is almost the same as the function crc32, but for strings. Using the
 * same function for the two use cases leads to horrible performances.
 * @param {Number} crc the starting value of the crc.
 * @param {String} str the string to use.
 * @param {Number} len the length of the string.
 * @param {Number} pos the starting position for the crc32 computation.
 * @return {Number} the computed crc32.
 */
function crc32str(crc, str, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

module.exports = function crc32wrapper(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if(isArray) {
        return crc32(crc|0, input, input.length, 0);
    } else {
        return crc32str(crc|0, input, input.length, 0);
    }
};

},{"./utils":32}],5:[function(require,module,exports){
'use strict';
exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = true;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;

},{}],6:[function(require,module,exports){
/* global Promise */
'use strict';

// load the global object first:
// - it should be better integrated in the system (unhandledRejection in node)
// - the environment may have a custom Promise implementation (see zone.js)
var ES6Promise = null;
if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
} else {
    ES6Promise = require("lie");
}

/**
 * Let the user use/change some implementations.
 */
module.exports = {
    Promise: ES6Promise
};

},{"lie":58}],7:[function(require,module,exports){
'use strict';
var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Uint32Array !== 'undefined');

var pako = require("pako");
var utils = require("./utils");
var GenericWorker = require("./stream/GenericWorker");

var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";

/**
 * Create a worker that uses pako to inflate/deflate.
 * @constructor
 * @param {String} action the name of the pako function to call : either "Deflate" or "Inflate".
 * @param {Object} options the options to use when (de)compressing.
 */
function FlateWorker(action, options) {
    GenericWorker.call(this, "FlateWorker/" + action);

    this._pako = null;
    this._pakoAction = action;
    this._pakoOptions = options;
    // the `meta` object from the last chunk received
    // this allow this worker to pass around metadata
    this.meta = {};
}

utils.inherits(FlateWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
FlateWorker.prototype.processChunk = function (chunk) {
    this.meta = chunk.meta;
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
};

/**
 * @see GenericWorker.flush
 */
FlateWorker.prototype.flush = function () {
    GenericWorker.prototype.flush.call(this);
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push([], true);
};
/**
 * @see GenericWorker.cleanUp
 */
FlateWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this._pako = null;
};

/**
 * Create the _pako object.
 * TODO: lazy-loading this object isn't the best solution but it's the
 * quickest. The best solution is to lazy-load the worker list. See also the
 * issue #446.
 */
FlateWorker.prototype._createPako = function () {
    this._pako = new pako[this._pakoAction]({
        raw: true,
        level: this._pakoOptions.level || -1 // default compression
    });
    var self = this;
    this._pako.onData = function(data) {
        self.push({
            data : data,
            meta : self.meta
        });
    };
};

exports.compressWorker = function (compressionOptions) {
    return new FlateWorker("Deflate", compressionOptions);
};
exports.uncompressWorker = function () {
    return new FlateWorker("Inflate", {});
};

},{"./stream/GenericWorker":28,"./utils":32,"pako":59}],8:[function(require,module,exports){
'use strict';

var utils = require('../utils');
var GenericWorker = require('../stream/GenericWorker');
var utf8 = require('../utf8');
var crc32 = require('../crc32');
var signature = require('../signature');

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "", i;
    for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
    }
    return hex;
};

/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
var generateUnixExternalFileAttr = function (unixPermissions, isDir) {

    var result = unixPermissions;
    if (!unixPermissions) {
        // I can't use octal values in strict mode, hence the hexa.
        //  040775 => 0x41fd
        // 0100664 => 0x81b4
        result = isDir ? 0x41fd : 0x81b4;
    }
    return (result & 0xFFFF) << 16;
};

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
var generateDosExternalFileAttr = function (dosPermissions, isDir) {

    // the dir flag is already set for compatibility
    return (dosPermissions || 0)  & 0x3F;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {Object} streamInfo the hash with informations about the compressed file.
 * @param {Boolean} streamedContent is the content streamed ?
 * @param {Boolean} streamingEnded is the stream finished ?
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {Object} the zip parts.
 */
var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
    var file = streamInfo['file'],
    compression = streamInfo['compression'],
    useCustomEncoding = encodeFileName !== utf8.utf8encode,
    encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
    utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
    comment = file.comment,
    encodedComment = utils.transformTo("string", encodeFileName(comment)),
    utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
    useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
    useUTF8ForComment = utfEncodedComment.length !== comment.length,
    dosTime,
    dosDate,
    extraFields = "",
    unicodePathExtraField = "",
    unicodeCommentExtraField = "",
    dir = file.dir,
    date = file.date;


    var dataInfo = {
        crc32 : 0,
        compressedSize : 0,
        uncompressedSize : 0
    };

    // if the content is streamed, the sizes/crc32 are only available AFTER
    // the end of the stream.
    if (!streamedContent || streamingEnded) {
        dataInfo.crc32 = streamInfo['crc32'];
        dataInfo.compressedSize = streamInfo['compressedSize'];
        dataInfo.uncompressedSize = streamInfo['uncompressedSize'];
    }

    var bitflag = 0;
    if (streamedContent) {
        // Bit 3: the sizes/crc32 are set to zero in the local header.
        // The correct values are put in the data descriptor immediately
        // following the compressed data.
        bitflag |= 0x0008;
    }
    if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
        // Bit 11: Language encoding flag (EFS).
        bitflag |= 0x0800;
    }


    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
        // dos or unix, we set the dos dir flag
        extFileAttr |= 0x00010;
    }
    if(platform === "UNIX") {
        versionMadeBy = 0x031E; // UNIX, version 3.0
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else { // DOS or other, fallback to DOS
        versionMadeBy = 0x0014; // DOS, version 2.0
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getUTCHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getUTCMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getUTCSeconds() / 2;

    dosDate = date.getUTCFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getUTCMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getUTCDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(encodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(crc32(encodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    header += decToHex(bitflag, 2);
    // compression method
    header += compression.magic;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(dataInfo.crc32, 4);
    // compressed size
    header += decToHex(dataInfo.compressedSize, 4);
    // uncompressed size
    header += decToHex(dataInfo.uncompressedSize, 4);
    // file name length
    header += decToHex(encodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
        // version made by (00: DOS)
        decToHex(versionMadeBy, 2) +
        // file header (common to file and central directory)
        header +
        // file comment length
        decToHex(encodedComment.length, 2) +
        // disk number start
        "\x00\x00" +
        // internal file attributes TODO
        "\x00\x00" +
        // external file attributes
        decToHex(extFileAttr, 4) +
        // relative offset of local header
        decToHex(offset, 4) +
        // file name
        encodedFileName +
        // extra field
        extraFields +
        // file comment
        encodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord
    };
};

/**
 * Generate the EOCD record.
 * @param {Number} entriesCount the number of entries in the zip file.
 * @param {Number} centralDirLength the length (in bytes) of the central dir.
 * @param {Number} localDirLength the length (in bytes) of the local dir.
 * @param {String} comment the zip file comment as a binary string.
 * @param {Function} encodeFileName the function to encode the comment.
 * @return {String} the EOCD record.
 */
var generateCentralDirectoryEnd = function (entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
    var dirEnd = "";
    var encodedComment = utils.transformTo("string", encodeFileName(comment));

    // end of central dir signature
    dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(entriesCount, 2) +
        // total number of entries in the central directory
        decToHex(entriesCount, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(encodedComment.length, 2) +
        // .ZIP file comment
        encodedComment;

    return dirEnd;
};

/**
 * Generate data descriptors for a file entry.
 * @param {Object} streamInfo the hash generated by a worker, containing informations
 * on the file entry.
 * @return {String} the data descriptors.
 */
var generateDataDescriptors = function (streamInfo) {
    var descriptor = "";
    descriptor = signature.DATA_DESCRIPTOR +
        // crc-32                          4 bytes
        decToHex(streamInfo['crc32'], 4) +
        // compressed size                 4 bytes
        decToHex(streamInfo['compressedSize'], 4) +
        // uncompressed size               4 bytes
        decToHex(streamInfo['uncompressedSize'], 4);

    return descriptor;
};


/**
 * A worker to concatenate other workers to create a zip file.
 * @param {Boolean} streamFiles `true` to stream the content of the files,
 * `false` to accumulate it.
 * @param {String} comment the comment to use.
 * @param {String} platform the platform to use, "UNIX" or "DOS".
 * @param {Function} encodeFileName the function to encode file names and comments.
 */
function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
    GenericWorker.call(this, "ZipFileWorker");
    // The number of bytes written so far. This doesn't count accumulated chunks.
    this.bytesWritten = 0;
    // The comment of the zip file
    this.zipComment = comment;
    // The platform "generating" the zip file.
    this.zipPlatform = platform;
    // the function to encode file names and comments.
    this.encodeFileName = encodeFileName;
    // Should we stream the content of the files ?
    this.streamFiles = streamFiles;
    // If `streamFiles` is false, we will need to accumulate the content of the
    // files to calculate sizes / crc32 (and write them *before* the content).
    // This boolean indicates if we are accumulating chunks (it will change a lot
    // during the lifetime of this worker).
    this.accumulate = false;
    // The buffer receiving chunks when accumulating content.
    this.contentBuffer = [];
    // The list of generated directory records.
    this.dirRecords = [];
    // The offset (in bytes) from the beginning of the zip file for the current source.
    this.currentSourceOffset = 0;
    // The total number of entries in this zip file.
    this.entriesCount = 0;
    // the name of the file currently being added, null when handling the end of the zip file.
    // Used for the emited metadata.
    this.currentFile = null;



    this._sources = [];
}
utils.inherits(ZipFileWorker, GenericWorker);

/**
 * @see GenericWorker.push
 */
ZipFileWorker.prototype.push = function (chunk) {

    var currentFilePercent = chunk.meta.percent || 0;
    var entriesCount = this.entriesCount;
    var remainingFiles = this._sources.length;

    if(this.accumulate) {
        this.contentBuffer.push(chunk);
    } else {
        this.bytesWritten += chunk.data.length;

        GenericWorker.prototype.push.call(this, {
            data : chunk.data,
            meta : {
                currentFile : this.currentFile,
                percent : entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
            }
        });
    }
};

/**
 * The worker started a new source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the new source.
 */
ZipFileWorker.prototype.openedSource = function (streamInfo) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = streamInfo['file'].name;

    var streamedContent = this.streamFiles && !streamInfo['file'].dir;

    // don't stream folders (because they don't have any content)
    if(streamedContent) {
        var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
    } else {
        // we need to wait for the whole file before pushing anything
        this.accumulate = true;
    }
};

/**
 * The worker finished a source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the finished source.
 */
ZipFileWorker.prototype.closedSource = function (streamInfo) {
    this.accumulate = false;
    var streamedContent = this.streamFiles && !streamInfo['file'].dir;
    var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);

    this.dirRecords.push(record.dirRecord);
    if(streamedContent) {
        // after the streamed file, we put data descriptors
        this.push({
            data : generateDataDescriptors(streamInfo),
            meta : {percent:100}
        });
    } else {
        // the content wasn't streamed, we need to push everything now
        // first the file record, then the content
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
        while(this.contentBuffer.length) {
            this.push(this.contentBuffer.shift());
        }
    }
    this.currentFile = null;
};

/**
 * @see GenericWorker.flush
 */
ZipFileWorker.prototype.flush = function () {

    var localDirLength = this.bytesWritten;
    for(var i = 0; i < this.dirRecords.length; i++) {
        this.push({
            data : this.dirRecords[i],
            meta : {percent:100}
        });
    }
    var centralDirLength = this.bytesWritten - localDirLength;

    var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);

    this.push({
        data : dirEnd,
        meta : {percent:100}
    });
};

/**
 * Prepare the next source to be read.
 */
ZipFileWorker.prototype.prepareNextSource = function () {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
        this.previous.pause();
    } else {
        this.previous.resume();
    }
};

/**
 * @see GenericWorker.registerPrevious
 */
ZipFileWorker.prototype.registerPrevious = function (previous) {
    this._sources.push(previous);
    var self = this;

    previous.on('data', function (chunk) {
        self.processChunk(chunk);
    });
    previous.on('end', function () {
        self.closedSource(self.previous.streamInfo);
        if(self._sources.length) {
            self.prepareNextSource();
        } else {
            self.end();
        }
    });
    previous.on('error', function (e) {
        self.error(e);
    });
    return this;
};

/**
 * @see GenericWorker.resume
 */
ZipFileWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this.previous && this._sources.length) {
        this.prepareNextSource();
        return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
        this.end();
        return true;
    }
};

/**
 * @see GenericWorker.error
 */
ZipFileWorker.prototype.error = function (e) {
    var sources = this._sources;
    if(!GenericWorker.prototype.error.call(this, e)) {
        return false;
    }
    for(var i = 0; i < sources.length; i++) {
        try {
            sources[i].error(e);
        } catch(e) {
            // the `error` exploded, nothing to do
        }
    }
    return true;
};

/**
 * @see GenericWorker.lock
 */
ZipFileWorker.prototype.lock = function () {
    GenericWorker.prototype.lock.call(this);
    var sources = this._sources;
    for(var i = 0; i < sources.length; i++) {
        sources[i].lock();
    }
};

module.exports = ZipFileWorker;

},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(require,module,exports){
'use strict';

var compressions = require('../compressions');
var ZipFileWorker = require('./ZipFileWorker');

/**
 * Find the compression to use.
 * @param {String} fileCompression the compression defined at the file level, if any.
 * @param {String} zipCompression the compression defined at the load() level.
 * @return {Object} the compression object to use.
 */
var getCompression = function (fileCompression, zipCompression) {

    var compressionName = fileCompression || zipCompression;
    var compression = compressions[compressionName];
    if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
    }
    return compression;
};

/**
 * Create a worker to generate a zip file.
 * @param {JSZip} zip the JSZip instance at the right root level.
 * @param {Object} options to generate the zip file.
 * @param {String} comment the comment to use.
 */
exports.generateWorker = function (zip, options, comment) {

    var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
    var entriesCount = 0;
    try {

        zip.forEach(function (relativePath, file) {
            entriesCount++;
            var compression = getCompression(file.options.compression, options.compression);
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
            var dir = file.dir, date = file.date;

            file._compressWorker(compression, compressionOptions)
            .withStreamInfo("file", {
                name : relativePath,
                dir : dir,
                date : date,
                comment : file.comment || "",
                unixPermissions : file.unixPermissions,
                dosPermissions : file.dosPermissions
            })
            .pipe(zipFileWorker);
        });
        zipFileWorker.entriesCount = entriesCount;
    } catch (e) {
        zipFileWorker.error(e);
    }

    return zipFileWorker;
};

},{"../compressions":3,"./ZipFileWorker":8}],10:[function(require,module,exports){
'use strict';

/**
 * Representation a of zip file in js
 * @constructor
 */
function JSZip() {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) {
        return new JSZip();
    }

    if(arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = require('./object');
JSZip.prototype.loadAsync = require('./load');
JSZip.support = require('./support');
JSZip.defaults = require('./defaults');

// TODO find a better way to handle this version,
// a require('package.json').version doesn't work with webpack, see #327
JSZip.version = "3.1.5";

JSZip.loadAsync = function (content, options) {
    return new JSZip().loadAsync(content, options);
};

JSZip.external = require("./external");
module.exports = JSZip;

},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(require,module,exports){
'use strict';
var utils = require('./utils');
var external = require("./external");
var utf8 = require('./utf8');
var utils = require('./utils');
var ZipEntries = require('./zipEntries');
var Crc32Probe = require('./stream/Crc32Probe');
var nodejsUtils = require("./nodejsUtils");

/**
 * Check the CRC32 of an entry.
 * @param {ZipEntry} zipEntry the zip entry to check.
 * @return {Promise} the result.
 */
function checkEntryCRC32(zipEntry) {
    return new external.Promise(function (resolve, reject) {
        var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
        worker.on("error", function (e) {
            reject(e);
        })
        .on("end", function () {
            if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
                reject(new Error("Corrupted zip : CRC32 mismatch"));
            } else {
                resolve();
            }
        })
        .resume();
    });
}

module.exports = function(data, options) {
    var zip = this;
    options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString: false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
    });

    if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    }

    return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64)
    .then(function(data) {
        var zipEntries = new ZipEntries(options);
        zipEntries.load(data);
        return zipEntries;
    }).then(function checkCRC32(zipEntries) {
        var promises = [external.Promise.resolve(zipEntries)];
        var files = zipEntries.files;
        if (options.checkCRC32) {
            for (var i = 0; i < files.length; i++) {
                promises.push(checkEntryCRC32(files[i]));
            }
        }
        return external.Promise.all(promises);
    }).then(function addFiles(results) {
        var zipEntries = results.shift();
        var files = zipEntries.files;
        for (var i = 0; i < files.length; i++) {
            var input = files[i];
            zip.file(input.fileNameStr, input.decompressed, {
                binary: true,
                optimizedBinaryString: true,
                date: input.date,
                dir: input.dir,
                comment : input.fileCommentStr.length ? input.fileCommentStr : null,
                unixPermissions : input.unixPermissions,
                dosPermissions : input.dosPermissions,
                createFolders: options.createFolders
            });
        }
        if (zipEntries.zipComment.length) {
            zip.comment = zipEntries.zipComment;
        }

        return zip;
    });
};

},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(require,module,exports){
"use strict";

var utils = require('../utils');
var GenericWorker = require('../stream/GenericWorker');

/**
 * A worker that use a nodejs stream as source.
 * @constructor
 * @param {String} filename the name of the file entry for this stream.
 * @param {Readable} stream the nodejs stream.
 */
function NodejsStreamInputAdapter(filename, stream) {
    GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
    this._upstreamEnded = false;
    this._bindStream(stream);
}

utils.inherits(NodejsStreamInputAdapter, GenericWorker);

/**
 * Prepare the stream and bind the callbacks on it.
 * Do this ASAP on node 0.10 ! A lazy binding doesn't always work.
 * @param {Stream} stream the nodejs stream to use.
 */
NodejsStreamInputAdapter.prototype._bindStream = function (stream) {
    var self = this;
    this._stream = stream;
    stream.pause();
    stream
    .on("data", function (chunk) {
        self.push({
            data: chunk,
            meta : {
                percent : 0
            }
        });
    })
    .on("error", function (e) {
        if(self.isPaused) {
            this.generatedError = e;
        } else {
            self.error(e);
        }
    })
    .on("end", function () {
        if(self.isPaused) {
            self._upstreamEnded = true;
        } else {
            self.end();
        }
    });
};
NodejsStreamInputAdapter.prototype.pause = function () {
    if(!GenericWorker.prototype.pause.call(this)) {
        return false;
    }
    this._stream.pause();
    return true;
};
NodejsStreamInputAdapter.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if(this._upstreamEnded) {
        this.end();
    } else {
        this._stream.resume();
    }

    return true;
};

module.exports = NodejsStreamInputAdapter;

},{"../stream/GenericWorker":28,"../utils":32}],13:[function(require,module,exports){
'use strict';

var Readable = require('readable-stream').Readable;

var utils = require('../utils');
utils.inherits(NodejsStreamOutputAdapter, Readable);

/**
* A nodejs stream using a worker as source.
* @see the SourceWrapper in http://nodejs.org/api/stream.html
* @constructor
* @param {StreamHelper} helper the helper wrapping the worker
* @param {Object} options the nodejs stream options
* @param {Function} updateCb the update callback.
*/
function NodejsStreamOutputAdapter(helper, options, updateCb) {
    Readable.call(this, options);
    this._helper = helper;

    var self = this;
    helper.on("data", function (data, meta) {
        if (!self.push(data)) {
            self._helper.pause();
        }
        if(updateCb) {
            updateCb(meta);
        }
    })
    .on("error", function(e) {
        self.emit('error', e);
    })
    .on("end", function () {
        self.push(null);
    });
}


NodejsStreamOutputAdapter.prototype._read = function() {
    this._helper.resume();
};

module.exports = NodejsStreamOutputAdapter;

},{"../utils":32,"readable-stream":16}],14:[function(require,module,exports){
'use strict';

module.exports = {
    /**
     * True if this is running in Nodejs, will be undefined in a browser.
     * In a browser, browserify won't include this file and the whole module
     * will be resolved an empty object.
     */
    isNode : typeof Buffer !== "undefined",
    /**
     * Create a new nodejs Buffer from an existing content.
     * @param {Object} data the data to pass to the constructor.
     * @param {String} encoding the encoding to use.
     * @return {Buffer} a new Buffer.
     */
    newBufferFrom: function(data, encoding) {
        // XXX We can't use `Buffer.from` which comes from `Uint8Array.from`
        // in nodejs v4 (< v.4.5). It's not the expected implementation (and
        // has a different signature).
        // see https://github.com/nodejs/node/issues/8053
        // A condition on nodejs' version won't solve the issue as we don't
        // control the Buffer polyfills that may or may not be used.
        return new Buffer(data, encoding);
    },
    /**
     * Create a new nodejs Buffer with the specified size.
     * @param {Integer} size the size of the buffer.
     * @return {Buffer} a new Buffer.
     */
    allocBuffer: function (size) {
        if (Buffer.alloc) {
            return Buffer.alloc(size);
        } else {
            return new Buffer(size);
        }
    },
    /**
     * Find out if an object is a Buffer.
     * @param {Object} b the object to test.
     * @return {Boolean} true if the object is a Buffer, false otherwise.
     */
    isBuffer : function(b){
        return Buffer.isBuffer(b);
    },

    isStream : function (obj) {
        return obj &&
            typeof obj.on === "function" &&
            typeof obj.pause === "function" &&
            typeof obj.resume === "function";
    }
};

},{}],15:[function(require,module,exports){
'use strict';
var utf8 = require('./utf8');
var utils = require('./utils');
var GenericWorker = require('./stream/GenericWorker');
var StreamHelper = require('./stream/StreamHelper');
var defaults = require('./defaults');
var CompressedObject = require('./compressedObject');
var ZipObject = require('./zipObject');
var generate = require("./generate");
var nodejsUtils = require("./nodejsUtils");
var NodejsStreamInputAdapter = require("./nodejs/NodejsStreamInputAdapter");


/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} originalOptions the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, originalOptions) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;


    /*
     * Correct options.
     */

    var o = utils.extend(originalOptions || {}, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) {
        o.compression = o.compression.toUpperCase();
    }

    if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
    }

    // UNX_IFDIR  0040000 see zipinfo.c
    if (o.unixPermissions && (o.unixPermissions & 0x4000)) {
        o.dir = true;
    }
    // Bit 4    Directory
    if (o.dosPermissions && (o.dosPermissions & 0x0010)) {
        o.dir = true;
    }

    if (o.dir) {
        name = forceTrailingSlash(name);
    }
    if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
    if (!originalOptions || typeof originalOptions.binary === "undefined") {
        o.binary = !isUnicodeString;
    }


    var isCompressedEmpty = (data instanceof CompressedObject) && data.uncompressedSize === 0;

    if (isCompressedEmpty || o.dir || !data || data.length === 0) {
        o.base64 = false;
        o.binary = true;
        data = "";
        o.compression = "STORE";
        dataType = "string";
    }

    /*
     * Convert content to fit.
     */

    var zipObjectContent = null;
    if (data instanceof CompressedObject || data instanceof GenericWorker) {
        zipObjectContent = data;
    } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        zipObjectContent = new NodejsStreamInputAdapter(name, data);
    } else {
        zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
    }

    var object = new ZipObject(name, zipObjectContent, o);
    this.files[name] = object;
    /*
    TODO: we can't throw an exception because we have async promises
    (we can have a promise of a Date() for example) but returning a
    promise is useless because file(name, data) returns the JSZip
    object for chaining. Should we break that to allow the user
    to catch the error ?

    return external.Promise.resolve(zipObjectContent)
    .then(function () {
        return object;
    });
    */
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) === '/') {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf('/');
    return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
};

/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
var forceTrailingSlash = function(path) {
    // Check the name ends with a /
    if (path.slice(-1) !== "/") {
        path += "/"; // IE doesn't like substr(-1)
    }
    return path;
};

/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    createFolders = (typeof createFolders !== 'undefined') ? createFolders : defaults.createFolders;

    name = forceTrailingSlash(name);

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
}

// return the actual prototype of JSZip
var out = {
    /**
     * @see loadAsync
     */
    load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },


    /**
     * Call a callback function for each entry at this folder level.
     * @param {Function} cb the callback function:
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     */
    forEach: function(cb) {
        var filename, relativePath, file;
        for (filename in this.files) {
            if (!this.files.hasOwnProperty(filename)) {
                continue;
            }
            file = this.files[filename];
            relativePath = filename.slice(this.root.length, filename.length);
            if (relativePath && filename.slice(0, this.root.length) === this.root) { // the file is in the current root
                cb(relativePath, file); // TODO reverse the parameters ? need to be clean AND consistent with the filter search fn...
            }
        }
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [];
        this.forEach(function (relativePath, entry) {
            if (search(relativePath, entry)) { // the file matches the function
                result.push(entry);
            }

        });
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir && regexp.test(relativePath);
                });
            }
            else { // text
                var obj = this.files[this.root + name];
                if (obj && !obj.dir) {
                    return obj;
                } else {
                    return null;
                }
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir && arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) !== "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file && !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * Generate the complete zip file
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
     */
    generate: function(options) {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },

    /**
     * Generate the complete zip file as an internal stream.
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {StreamHelper} the streamed zip file.
     */
    generateInternalStream: function(options) {
      var worker, opts = {};
      try {
          opts = utils.extend(options || {}, {
              streamFiles: false,
              compression: "STORE",
              compressionOptions : null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: 'application/zip',
              encodeFileName: utf8.utf8encode
          });

          opts.type = opts.type.toLowerCase();
          opts.compression = opts.compression.toUpperCase();

          // "binarystring" is prefered but the internals use "string".
          if(opts.type === "binarystring") {
            opts.type = "string";
          }

          if (!opts.type) {
            throw new Error("No output type specified.");
          }

          utils.checkSupport(opts.type);

          // accept nodejs `process.platform`
          if(
              opts.platform === 'darwin' ||
              opts.platform === 'freebsd' ||
              opts.platform === 'linux' ||
              opts.platform === 'sunos'
          ) {
              opts.platform = "UNIX";
          }
          if (opts.platform === 'win32') {
              opts.platform = "DOS";
          }

          var comment = opts.comment || this.comment || "";
          worker = generate.generateWorker(this, opts, comment);
      } catch (e) {
        worker = new GenericWorker("error");
        worker.error(e);
      }
      return new StreamHelper(worker, opts.type || "string", opts.mimeType);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateAsync: function(options, onUpdate) {
        return this.generateInternalStream(options).accumulate(onUpdate);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateNodeStream: function(options, onUpdate) {
        options = options || {};
        if (!options.type) {
            options.type = "nodebuffer";
        }
        return this.generateInternalStream(options).toNodejsStream(onUpdate);
    }
};
module.exports = out;

},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(require,module,exports){
/*
 * This file is used by module bundlers (browserify/webpack/etc) when
 * including a stream implementation. We use "readable-stream" to get a
 * consistent behavior between nodejs versions but bundlers often have a shim
 * for "stream". Using this shim greatly improve the compatibility and greatly
 * reduce the final size of the bundle (only one stream implementation, not
 * two).
 */
module.exports = require("stream");

},{"stream":undefined}],17:[function(require,module,exports){
'use strict';
var DataReader = require('./DataReader');
var utils = require('../utils');

function ArrayReader(data) {
    DataReader.call(this, data);
	for(var i = 0; i < this.data.length; i++) {
		data[i] = data[i] & 0xFF;
	}
}
utils.inherits(ArrayReader, DataReader);
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i - this.zero;
        }
    }

    return -1;
};
/**
 * @see DataReader.readAndCheckSignature
 */
ArrayReader.prototype.readAndCheckSignature = function (sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3),
        data = this.readData(4);
    return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = ArrayReader;

},{"../utils":32,"./DataReader":18}],18:[function(require,module,exports){
'use strict';
var utils = require('../utils');

function DataReader(data) {
    this.data = data; // type : see implementation
    this.length = data.length;
    this.index = 0;
    this.zero = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specified index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function(i) {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function(size) {
        // see implementations
    },
    /**
     * Find the last occurence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurence, -1 if not found.
     */
    lastIndexOfSignature: function(sig) {
        // see implementations
    },
    /**
     * Read the signature (4 bytes) at the current position and compare it with sig.
     * @param {string} sig the expected signature
     * @return {boolean} true if the signature matches, false otherwise.
     */
    readAndCheckSignature: function(sig) {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(Date.UTC(
        ((dostime >> 25) & 0x7f) + 1980, // year
        ((dostime >> 21) & 0x0f) - 1, // month
        (dostime >> 16) & 0x1f, // day
        (dostime >> 11) & 0x1f, // hour
        (dostime >> 5) & 0x3f, // minute
        (dostime & 0x1f) << 1)); // second
    }
};
module.exports = DataReader;

},{"../utils":32}],19:[function(require,module,exports){
'use strict';
var Uint8ArrayReader = require('./Uint8ArrayReader');
var utils = require('../utils');

function NodeBufferReader(data) {
    Uint8ArrayReader.call(this, data);
}
utils.inherits(NodeBufferReader, Uint8ArrayReader);

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;

},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(require,module,exports){
'use strict';
var DataReader = require('./DataReader');
var utils = require('../utils');

function StringReader(data) {
    DataReader.call(this, data);
}
utils.inherits(StringReader, DataReader);
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readAndCheckSignature
 */
StringReader.prototype.readAndCheckSignature = function (sig) {
    var data = this.readData(4);
    return sig === data;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "& 0xff" mask.
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;

},{"../utils":32,"./DataReader":18}],21:[function(require,module,exports){
'use strict';
var ArrayReader = require('./ArrayReader');
var utils = require('../utils');

function Uint8ArrayReader(data) {
    ArrayReader.call(this, data);
}
utils.inherits(Uint8ArrayReader, ArrayReader);
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;

},{"../utils":32,"./ArrayReader":17}],22:[function(require,module,exports){
'use strict';

var utils = require('../utils');
var support = require('../support');
var ArrayReader = require('./ArrayReader');
var StringReader = require('./StringReader');
var NodeBufferReader = require('./NodeBufferReader');
var Uint8ArrayReader = require('./Uint8ArrayReader');

/**
 * Create a reader adapted to the data.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data to read.
 * @return {DataReader} the data reader.
 */
module.exports = function (data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
        return new StringReader(data);
    }
    if (type === "nodebuffer") {
        return new NodeBufferReader(data);
    }
    if (support.uint8array) {
        return new Uint8ArrayReader(utils.transformTo("uint8array", data));
    }
    return new ArrayReader(utils.transformTo("array", data));
};

},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(require,module,exports){
'use strict';
exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";

},{}],24:[function(require,module,exports){
'use strict';

var GenericWorker = require('./GenericWorker');
var utils = require('../utils');

/**
 * A worker which convert chunks to a specified type.
 * @constructor
 * @param {String} destType the destination type.
 */
function ConvertWorker(destType) {
    GenericWorker.call(this, "ConvertWorker to " + destType);
    this.destType = destType;
}
utils.inherits(ConvertWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
ConvertWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : utils.transformTo(this.destType, chunk.data),
        meta : chunk.meta
    });
};
module.exports = ConvertWorker;

},{"../utils":32,"./GenericWorker":28}],25:[function(require,module,exports){
'use strict';

var GenericWorker = require('./GenericWorker');
var crc32 = require('../crc32');
var utils = require('../utils');

/**
 * A worker which calculate the crc32 of the data flowing through.
 * @constructor
 */
function Crc32Probe() {
    GenericWorker.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
}
utils.inherits(Crc32Probe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Crc32Probe.prototype.processChunk = function (chunk) {
    this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
    this.push(chunk);
};
module.exports = Crc32Probe;

},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(require,module,exports){
'use strict';

var utils = require('../utils');
var GenericWorker = require('./GenericWorker');

/**
 * A worker which calculate the total length of the data flowing through.
 * @constructor
 * @param {String} propName the name used to expose the length
 */
function DataLengthProbe(propName) {
    GenericWorker.call(this, "DataLengthProbe for " + propName);
    this.propName = propName;
    this.withStreamInfo(propName, 0);
}
utils.inherits(DataLengthProbe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
DataLengthProbe.prototype.processChunk = function (chunk) {
    if(chunk) {
        var length = this.streamInfo[this.propName] || 0;
        this.streamInfo[this.propName] = length + chunk.data.length;
    }
    GenericWorker.prototype.processChunk.call(this, chunk);
};
module.exports = DataLengthProbe;


},{"../utils":32,"./GenericWorker":28}],27:[function(require,module,exports){
'use strict';

var utils = require('../utils');
var GenericWorker = require('./GenericWorker');

// the size of the generated chunks
// TODO expose this as a public variable
var DEFAULT_BLOCK_SIZE = 16 * 1024;

/**
 * A worker that reads a content and emits chunks.
 * @constructor
 * @param {Promise} dataP the promise of the data to split
 */
function DataWorker(dataP) {
    GenericWorker.call(this, "DataWorker");
    var self = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";

    this._tickScheduled = false;

    dataP.then(function (data) {
        self.dataIsReady = true;
        self.data = data;
        self.max = data && data.length || 0;
        self.type = utils.getTypeOf(data);
        if(!self.isPaused) {
            self._tickAndRepeat();
        }
    }, function (e) {
        self.error(e);
    });
}

utils.inherits(DataWorker, GenericWorker);

/**
 * @see GenericWorker.cleanUp
 */
DataWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this.data = null;
};

/**
 * @see GenericWorker.resume
 */
DataWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        utils.delay(this._tickAndRepeat, [], this);
    }
    return true;
};

/**
 * Trigger a tick a schedule an other call to this function.
 */
DataWorker.prototype._tickAndRepeat = function() {
    this._tickScheduled = false;
    if(this.isPaused || this.isFinished) {
        return;
    }
    this._tick();
    if(!this.isFinished) {
        utils.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
    }
};

/**
 * Read and push a chunk.
 */
DataWorker.prototype._tick = function() {

    if(this.isPaused || this.isFinished) {
        return false;
    }

    var size = DEFAULT_BLOCK_SIZE;
    var data = null, nextIndex = Math.min(this.max, this.index + size);
    if (this.index >= this.max) {
        // EOF
        return this.end();
    } else {
        switch(this.type) {
            case "string":
                data = this.data.substring(this.index, nextIndex);
            break;
            case "uint8array":
                data = this.data.subarray(this.index, nextIndex);
            break;
            case "array":
            case "nodebuffer":
                data = this.data.slice(this.index, nextIndex);
            break;
        }
        this.index = nextIndex;
        return this.push({
            data : data,
            meta : {
                percent : this.max ? this.index / this.max * 100 : 0
            }
        });
    }
};

module.exports = DataWorker;

},{"../utils":32,"./GenericWorker":28}],28:[function(require,module,exports){
'use strict';

/**
 * A worker that does nothing but passing chunks to the next one. This is like
 * a nodejs stream but with some differences. On the good side :
 * - it works on IE 6-9 without any issue / polyfill
 * - it weights less than the full dependencies bundled with browserify
 * - it forwards errors (no need to declare an error handler EVERYWHERE)
 *
 * A chunk is an object with 2 attributes : `meta` and `data`. The former is an
 * object containing anything (`percent` for example), see each worker for more
 * details. The latter is the real data (String, Uint8Array, etc).
 *
 * @constructor
 * @param {String} name the name of the stream (mainly used for debugging purposes)
 */
function GenericWorker(name) {
    // the name of the worker
    this.name = name || "default";
    // an object containing metadata about the workers chain
    this.streamInfo = {};
    // an error which happened when the worker was paused
    this.generatedError = null;
    // an object containing metadata to be merged by this worker into the general metadata
    this.extraStreamInfo = {};
    // true if the stream is paused (and should not do anything), false otherwise
    this.isPaused = true;
    // true if the stream is finished (and should not do anything), false otherwise
    this.isFinished = false;
    // true if the stream is locked to prevent further structure updates (pipe), false otherwise
    this.isLocked = false;
    // the event listeners
    this._listeners = {
        'data':[],
        'end':[],
        'error':[]
    };
    // the previous worker, if any
    this.previous = null;
}

GenericWorker.prototype = {
    /**
     * Push a chunk to the next workers.
     * @param {Object} chunk the chunk to push
     */
    push : function (chunk) {
        this.emit("data", chunk);
    },
    /**
     * End the stream.
     * @return {Boolean} true if this call ended the worker, false otherwise.
     */
    end : function () {
        if (this.isFinished) {
            return false;
        }

        this.flush();
        try {
            this.emit("end");
            this.cleanUp();
            this.isFinished = true;
        } catch (e) {
            this.emit("error", e);
        }
        return true;
    },
    /**
     * End the stream with an error.
     * @param {Error} e the error which caused the premature end.
     * @return {Boolean} true if this call ended the worker with an error, false otherwise.
     */
    error : function (e) {
        if (this.isFinished) {
            return false;
        }

        if(this.isPaused) {
            this.generatedError = e;
        } else {
            this.isFinished = true;

            this.emit("error", e);

            // in the workers chain exploded in the middle of the chain,
            // the error event will go downward but we also need to notify
            // workers upward that there has been an error.
            if(this.previous) {
                this.previous.error(e);
            }

            this.cleanUp();
        }
        return true;
    },
    /**
     * Add a callback on an event.
     * @param {String} name the name of the event (data, end, error)
     * @param {Function} listener the function to call when the event is triggered
     * @return {GenericWorker} the current object for chainability
     */
    on : function (name, listener) {
        this._listeners[name].push(listener);
        return this;
    },
    /**
     * Clean any references when a worker is ending.
     */
    cleanUp : function () {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null;
        this._listeners = [];
    },
    /**
     * Trigger an event. This will call registered callback with the provided arg.
     * @param {String} name the name of the event (data, end, error)
     * @param {Object} arg the argument to call the callback with.
     */
    emit : function (name, arg) {
        if (this._listeners[name]) {
            for(var i = 0; i < this._listeners[name].length; i++) {
                this._listeners[name][i].call(this, arg);
            }
        }
    },
    /**
     * Chain a worker with an other.
     * @param {Worker} next the worker receiving events from the current one.
     * @return {worker} the next worker for chainability
     */
    pipe : function (next) {
        return next.registerPrevious(this);
    },
    /**
     * Same as `pipe` in the other direction.
     * Using an API with `pipe(next)` is very easy.
     * Implementing the API with the point of view of the next one registering
     * a source is easier, see the ZipFileWorker.
     * @param {Worker} previous the previous worker, sending events to this one
     * @return {Worker} the current worker for chainability
     */
    registerPrevious : function (previous) {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }

        // sharing the streamInfo...
        this.streamInfo = previous.streamInfo;
        // ... and adding our own bits
        this.mergeStreamInfo();
        this.previous =  previous;
        var self = this;
        previous.on('data', function (chunk) {
            self.processChunk(chunk);
        });
        previous.on('end', function () {
            self.end();
        });
        previous.on('error', function (e) {
            self.error(e);
        });
        return this;
    },
    /**
     * Pause the stream so it doesn't send events anymore.
     * @return {Boolean} true if this call paused the worker, false otherwise.
     */
    pause : function () {
        if(this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = true;

        if(this.previous) {
            this.previous.pause();
        }
        return true;
    },
    /**
     * Resume a paused stream.
     * @return {Boolean} true if this call resumed the worker, false otherwise.
     */
    resume : function () {
        if(!this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = false;

        // if true, the worker tried to resume but failed
        var withError = false;
        if(this.generatedError) {
            this.error(this.generatedError);
            withError = true;
        }
        if(this.previous) {
            this.previous.resume();
        }

        return !withError;
    },
    /**
     * Flush any remaining bytes as the stream is ending.
     */
    flush : function () {},
    /**
     * Process a chunk. This is usually the method overridden.
     * @param {Object} chunk the chunk to process.
     */
    processChunk : function(chunk) {
        this.push(chunk);
    },
    /**
     * Add a key/value to be added in the workers chain streamInfo once activated.
     * @param {String} key the key to use
     * @param {Object} value the associated value
     * @return {Worker} the current worker for chainability
     */
    withStreamInfo : function (key, value) {
        this.extraStreamInfo[key] = value;
        this.mergeStreamInfo();
        return this;
    },
    /**
     * Merge this worker's streamInfo into the chain's streamInfo.
     */
    mergeStreamInfo : function () {
        for(var key in this.extraStreamInfo) {
            if (!this.extraStreamInfo.hasOwnProperty(key)) {
                continue;
            }
            this.streamInfo[key] = this.extraStreamInfo[key];
        }
    },

    /**
     * Lock the stream to prevent further updates on the workers chain.
     * After calling this method, all calls to pipe will fail.
     */
    lock: function () {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }
        this.isLocked = true;
        if (this.previous) {
            this.previous.lock();
        }
    },

    /**
     *
     * Pretty print the workers chain.
     */
    toString : function () {
        var me = "Worker " + this.name;
        if (this.previous) {
            return this.previous + " -> " + me;
        } else {
            return me;
        }
    }
};

module.exports = GenericWorker;

},{}],29:[function(require,module,exports){
'use strict';

var utils = require('../utils');
var ConvertWorker = require('./ConvertWorker');
var GenericWorker = require('./GenericWorker');
var base64 = require('../base64');
var support = require("../support");
var external = require("../external");

var NodejsStreamOutputAdapter = null;
if (support.nodestream) {
    try {
        NodejsStreamOutputAdapter = require('../nodejs/NodejsStreamOutputAdapter');
    } catch(e) {}
}

/**
 * Apply the final transformation of the data. If the user wants a Blob for
 * example, it's easier to work with an U8intArray and finally do the
 * ArrayBuffer/Blob conversion.
 * @param {String} type the name of the final type
 * @param {String|Uint8Array|Buffer} content the content to transform
 * @param {String} mimeType the mime type of the content, if applicable.
 * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the content in the right format.
 */
function transformZipOutput(type, content, mimeType) {
    switch(type) {
        case "blob" :
            return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
        case "base64" :
            return base64.encode(content);
        default :
            return utils.transformTo(type, content);
    }
}

/**
 * Concatenate an array of data of the given type.
 * @param {String} type the type of the data in the given array.
 * @param {Array} dataArray the array containing the data chunks to concatenate
 * @return {String|Uint8Array|Buffer} the concatenated data
 * @throws Error if the asked type is unsupported
 */
function concat (type, dataArray) {
    var i, index = 0, res = null, totalLength = 0;
    for(i = 0; i < dataArray.length; i++) {
        totalLength += dataArray[i].length;
    }
    switch(type) {
        case "string":
            return dataArray.join("");
          case "array":
            return Array.prototype.concat.apply([], dataArray);
        case "uint8array":
            res = new Uint8Array(totalLength);
            for(i = 0; i < dataArray.length; i++) {
                res.set(dataArray[i], index);
                index += dataArray[i].length;
            }
            return res;
        case "nodebuffer":
            return Buffer.concat(dataArray);
        default:
            throw new Error("concat : unsupported type '"  + type + "'");
    }
}

/**
 * Listen a StreamHelper, accumulate its content and concatenate it into a
 * complete block.
 * @param {StreamHelper} helper the helper to use.
 * @param {Function} updateCallback a callback called on each update. Called
 * with one arg :
 * - the metadata linked to the update received.
 * @return Promise the promise for the accumulation.
 */
function accumulate(helper, updateCallback) {
    return new external.Promise(function (resolve, reject){
        var dataArray = [];
        var chunkType = helper._internalType,
            resultType = helper._outputType,
            mimeType = helper._mimeType;
        helper
        .on('data', function (data, meta) {
            dataArray.push(data);
            if(updateCallback) {
                updateCallback(meta);
            }
        })
        .on('error', function(err) {
            dataArray = [];
            reject(err);
        })
        .on('end', function (){
            try {
                var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
                resolve(result);
            } catch (e) {
                reject(e);
            }
            dataArray = [];
        })
        .resume();
    });
}

/**
 * An helper to easily use workers outside of JSZip.
 * @constructor
 * @param {Worker} worker the worker to wrap
 * @param {String} outputType the type of data expected by the use
 * @param {String} mimeType the mime type of the content, if applicable.
 */
function StreamHelper(worker, outputType, mimeType) {
    var internalType = outputType;
    switch(outputType) {
        case "blob":
        case "arraybuffer":
            internalType = "uint8array";
        break;
        case "base64":
            internalType = "string";
        break;
    }

    try {
        // the type used internally
        this._internalType = internalType;
        // the type used to output results
        this._outputType = outputType;
        // the mime type
        this._mimeType = mimeType;
        utils.checkSupport(internalType);
        this._worker = worker.pipe(new ConvertWorker(internalType));
        // the last workers can be rewired without issues but we need to
        // prevent any updates on previous workers.
        worker.lock();
    } catch(e) {
        this._worker = new GenericWorker("error");
        this._worker.error(e);
    }
}

StreamHelper.prototype = {
    /**
     * Listen a StreamHelper, accumulate its content and concatenate it into a
     * complete block.
     * @param {Function} updateCb the update callback.
     * @return Promise the promise for the accumulation.
     */
    accumulate : function (updateCb) {
        return accumulate(this, updateCb);
    },
    /**
     * Add a listener on an event triggered on a stream.
     * @param {String} evt the name of the event
     * @param {Function} fn the listener
     * @return {StreamHelper} the current helper.
     */
    on : function (evt, fn) {
        var self = this;

        if(evt === "data") {
            this._worker.on(evt, function (chunk) {
                fn.call(self, chunk.data, chunk.meta);
            });
        } else {
            this._worker.on(evt, function () {
                utils.delay(fn, arguments, self);
            });
        }
        return this;
    },
    /**
     * Resume the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    resume : function () {
        utils.delay(this._worker.resume, [], this._worker);
        return this;
    },
    /**
     * Pause the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    pause : function () {
        this._worker.pause();
        return this;
    },
    /**
     * Return a nodejs stream for this helper.
     * @param {Function} updateCb the update callback.
     * @return {NodejsStreamOutputAdapter} the nodejs stream.
     */
    toNodejsStream : function (updateCb) {
        utils.checkSupport("nodestream");
        if (this._outputType !== "nodebuffer") {
            // an object stream containing blob/arraybuffer/uint8array/string
            // is strange and I don't know if it would be useful.
            // I you find this comment and have a good usecase, please open a
            // bug report !
            throw new Error(this._outputType + " is not supported by this method");
        }

        return new NodejsStreamOutputAdapter(this, {
            objectMode : this._outputType !== "nodebuffer"
        }, updateCb);
    }
};


module.exports = StreamHelper;

},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(require,module,exports){
'use strict';

exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob('application/zip').size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

try {
    exports.nodestream = !!require('readable-stream').Readable;
} catch(e) {
    exports.nodestream = false;
}

},{"readable-stream":16}],31:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var support = require('./support');
var nodejsUtils = require('./nodejsUtils');
var GenericWorker = require('./stream/GenericWorker');

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i<256; i++) {
  _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c >>> 6);
            buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c >>> 12);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c >>> 18);
            buf[i++] = 0x80 | (c >>> 12 & 0x3f);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var str, i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
            c = (c << 6) | (buf[i++] & 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
            utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodejsUtils.newBufferFrom(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    return buf2string(buf);
};

/**
 * A worker to decode utf8 encoded binary chunks into string chunks.
 * @constructor
 */
function Utf8DecodeWorker() {
    GenericWorker.call(this, "utf-8 decode");
    // the last bytes if a chunk didn't end with a complete codepoint.
    this.leftOver = null;
}
utils.inherits(Utf8DecodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8DecodeWorker.prototype.processChunk = function (chunk) {

    var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);

    // 1st step, re-use what's left of the previous chunk
    if (this.leftOver && this.leftOver.length) {
        if(support.uint8array) {
            var previousData = data;
            data = new Uint8Array(previousData.length + this.leftOver.length);
            data.set(this.leftOver, 0);
            data.set(previousData, this.leftOver.length);
        } else {
            data = this.leftOver.concat(data);
        }
        this.leftOver = null;
    }

    var nextBoundary = utf8border(data);
    var usableData = data;
    if (nextBoundary !== data.length) {
        if (support.uint8array) {
            usableData = data.subarray(0, nextBoundary);
            this.leftOver = data.subarray(nextBoundary, data.length);
        } else {
            usableData = data.slice(0, nextBoundary);
            this.leftOver = data.slice(nextBoundary, data.length);
        }
    }

    this.push({
        data : exports.utf8decode(usableData),
        meta : chunk.meta
    });
};

/**
 * @see GenericWorker.flush
 */
Utf8DecodeWorker.prototype.flush = function () {
    if(this.leftOver && this.leftOver.length) {
        this.push({
            data : exports.utf8decode(this.leftOver),
            meta : {}
        });
        this.leftOver = null;
    }
};
exports.Utf8DecodeWorker = Utf8DecodeWorker;

/**
 * A worker to endcode string chunks into utf8 encoded binary chunks.
 * @constructor
 */
function Utf8EncodeWorker() {
    GenericWorker.call(this, "utf-8 encode");
}
utils.inherits(Utf8EncodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8EncodeWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : exports.utf8encode(chunk.data),
        meta : chunk.meta
    });
};
exports.Utf8EncodeWorker = Utf8EncodeWorker;

},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(require,module,exports){
'use strict';

var support = require('./support');
var base64 = require('./base64');
var nodejsUtils = require('./nodejsUtils');
var setImmediate = require('core-js/library/fn/set-immediate');
var external = require("./external");


/**
 * Convert a string that pass as a "binary string": it should represent a byte
 * array but may have > 255 char codes. Be sure to take only the first byte
 * and returns the byte array.
 * @param {String} str the string to transform.
 * @return {Array|Uint8Array} the string in a binary format.
 */
function string2binary(str) {
    var result = null;
    if (support.uint8array) {
      result = new Uint8Array(str.length);
    } else {
      result = new Array(str.length);
    }
    return stringToArrayLike(str, result);
}

/**
 * Create a new blob with the given content and the given type.
 * @param {String|ArrayBuffer} part the content to put in the blob. DO NOT use
 * an Uint8Array because the stock browser of android 4 won't accept it (it
 * will be silently converted to a string, "[object Uint8Array]").
 *
 * Use only ONE part to build the blob to avoid a memory leak in IE11 / Edge:
 * when a large amount of Array is used to create the Blob, the amount of
 * memory consumed is nearly 100 times the original data amount.
 *
 * @param {String} type the mime type of the blob.
 * @return {Blob} the created blob.
 */
exports.newBlob = function(part, type) {
    exports.checkSupport("blob");

    try {
        // Blob constructor
        return new Blob([part], {
            type: type
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(part);
            return builder.getBlob(type);
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
    }
    return array;
}

/**
 * An helper for the function arrayLikeToString.
 * This contains static informations and functions that
 * can be optimized by the browser JIT compiler.
 */
var arrayToStringHelper = {
    /**
     * Transform an array of int into a string, chunk by chunk.
     * See the performances notes on arrayLikeToString.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @param {String} type the type of the array.
     * @param {Integer} chunk the chunk size.
     * @return {String} the resulting string.
     * @throws Error if the chunk is too big for the stack.
     */
    stringifyByChunk: function(array, type, chunk) {
        var result = [], k = 0, len = array.length;
        // shortcut
        if (len <= chunk) {
            return String.fromCharCode.apply(null, array);
        }
        while (k < len) {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        return result.join("");
    },
    /**
     * Call String.fromCharCode on every item in the array.
     * This is the naive implementation, which generate A LOT of intermediate string.
     * This should be used when everything else fail.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @return {String} the result.
     */
    stringifyByChar: function(array){
        var resultStr = "";
        for(var i = 0; i < array.length; i++) {
            resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
    },
    applyCanBeUsed : {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array : (function () {
            try {
                return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch (e) {
                return false;
            }
        })(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer : (function () {
            try {
                return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
            } catch (e) {
                return false;
            }
        })()
    }
};

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    // TODO : we now have workers that split the work. Do we still need that ?
    var chunk = 65536,
        type = exports.getTypeOf(array),
        canUseApply = true;
    if (type === "uint8array") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
    } else if (type === "nodebuffer") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
    }

    if (canUseApply) {
        while (chunk > 1) {
            try {
                return arrayToStringHelper.stringifyByChunk(array, type, chunk);
            } catch (e) {
                chunk = Math.floor(chunk / 2);
            }
        }
    }

    // no apply or chunk error : slow and painful algorithm
    // default browser on android 4.*
    return arrayToStringHelper.stringifyByChar(array);
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
        return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this platform");
    }
};

exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = '',
        code, i;
    for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Defer the call of a function.
 * @param {Function} callback the function to call asynchronously.
 * @param {Array} args the arguments to give to the callback.
 */
exports.delay = function(callback, args, self) {
    setImmediate(function () {
        callback.apply(self || null, args || []);
    });
};

/**
 * Extends a prototype with an other, without calling a constructor with
 * side effects. Inspired by nodejs' `utils.inherits`
 * @param {Function} ctor the constructor to augment
 * @param {Function} superCtor the parent constructor to use
 */
exports.inherits = function (ctor, superCtor) {
    var Obj = function() {};
    Obj.prototype = superCtor.prototype;
    ctor.prototype = new Obj();
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};

/**
 * Transform arbitrary content into a Promise.
 * @param {String} name a name for the content being processed.
 * @param {Object} inputData the content to process.
 * @param {Boolean} isBinary true if the content is not an unicode string
 * @param {Boolean} isOptimizedBinaryString true if the string content only has one byte per character.
 * @param {Boolean} isBase64 true if the string content is encoded with base64.
 * @return {Promise} a promise in a format usable by JSZip.
 */
exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {

    // if inputData is already a promise, this flatten it.
    var promise = external.Promise.resolve(inputData).then(function(data) {
        
        
        var isBlob = support.blob && (data instanceof Blob || ['[object File]', '[object Blob]'].indexOf(Object.prototype.toString.call(data)) !== -1);

        if (isBlob && typeof FileReader !== "undefined") {
            return new external.Promise(function (resolve, reject) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    resolve(e.target.result);
                };
                reader.onerror = function(e) {
                    reject(e.target.error);
                };
                reader.readAsArrayBuffer(data);
            });
        } else {
            return data;
        }
    });

    return promise.then(function(data) {
        var dataType = exports.getTypeOf(data);

        if (!dataType) {
            return external.Promise.reject(
                new Error("Can't read the data of '" + name + "'. Is it " +
                          "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
            );
        }
        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = exports.transformTo("uint8array", data);
        } else if (dataType === "string") {
            if (isBase64) {
                data = base64.decode(data);
            }
            else if (isBinary) {
                // optimizedBinaryString === true means that the file has already been filtered with a 0xFF mask
                if (isOptimizedBinaryString !== true) {
                    // this is a string, not in a base64 format.
                    // Be sure that this is a correct "binary string"
                    data = string2binary(data);
                }
            }
        }
        return data;
    });
};

},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"core-js/library/fn/set-immediate":36}],33:[function(require,module,exports){
'use strict';
var readerFor = require('./reader/readerFor');
var utils = require('./utils');
var sig = require('./signature');
var ZipEntry = require('./zipEntry');
var utf8 = require('./utf8');
var support = require('./support');
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the specified signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        if (!this.reader.readAndCheckSignature(expectedSignature)) {
            this.reader.index -= 4;
            var signature = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded unless specified otherwise.
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.reader.skip(4);
        // this.versionMadeBy = this.reader.readString(2);
        // this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readData(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }

        if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 && this.files.length === 0) {
                // We expected some records but couldn't find ANY.
                // This is really suspicious, as if something went wrong.
                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {
                // We found some records but not all.
                // Something is wrong but we got something for the user: no error here.
                // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
                throw new Error("Can't find end of central directory : is this a zip file ? " +
                                "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
                throw new Error("Corrupted zip: can't find end of central directory");
            }

        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : JavaScript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset < 0) {
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                // console.warn("ZIP64 end of central directory not where expected.");
                this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                }
            }
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }

        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
            expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
        }

        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

        if (extraBytes > 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                // The offsets seem wrong, but we have something at the specified offset.
                // So… we keep it.
            } else {
                // the offset is wrong, update the "zero" of the reader
                // this happens if data has been prepended (crx files for example)
                this.reader.zero = extraBytes;
            }
        } else if (extraBytes < 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
    },
    prepareReader: function(data) {
        this.reader = readerFor(data);
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;

},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(require,module,exports){
'use strict';
var readerFor = require('./reader/readerFor');
var utils = require('./utils');
var CompressedObject = require('./compressedObject');
var crc32fn = require('./crc32');
var utf8 = require('./utf8');
var compressions = require('./compressions');
var support = require('./support');

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
var findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!compressions.hasOwnProperty(method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag & 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag & 0x0800) === 0x0800;
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        // the fileName is stored as binary data, the handleUTF8 method will take care of the encoding.
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize === -1 || this.uncompressedSize === -1) {
            throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
        }

        compression = findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        reader.skip(2);
        // this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        var fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        // will be read in the local part, see the comments there
        reader.skip(fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
    },

    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function () {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;

        // Check if we have the DOS directory flag set.
        // We look for it in the DOS and UNIX permissions
        // but some unknown platform could set it as a compatibility flag.
        this.dir = this.externalFileAttributes & 0x0010 ? true : false;

        if(madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes & 0x3F;
        }

        if(madeBy === MADE_BY_UNIX) {
            this.unixPermissions = (this.externalFileAttributes >> 16) & 0xFFFF;
            // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
        }

        // fail safe : if the name ends with a / it probably means a folder
        if (!this.dir && this.fileNameStr.slice(-1) === '/') {
            this.dir = true;
        }
    },

    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function(reader) {

        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = readerFor(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var end = reader.index + this.extraFieldsLength,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        if (!this.extraFields) {
            this.extraFields = {};
        }

        while (reader.index < end) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readData(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
            this.fileNameStr = utf8.utf8decode(this.fileName);
            this.fileCommentStr = utf8.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileNameStr = upath;
            } else {
                // ASCII text or unsupported code page
                var fileNameByteArray =  utils.transformTo(decodeParamType, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileCommentStr = ucomment;
            } else {
                // ASCII text or unsupported code page
                var commentByteArray =  utils.transformTo(decodeParamType, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = readerFor(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = readerFor(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;

},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(require,module,exports){
'use strict';

var StreamHelper = require('./stream/StreamHelper');
var DataWorker = require('./stream/DataWorker');
var utf8 = require('./utf8');
var CompressedObject = require('./compressedObject');
var GenericWorker = require('./stream/GenericWorker');

/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;

    this._data = data;
    this._dataBinary = options.binary;
    // keep only the compression
    this.options = {
        compression : options.compression,
        compressionOptions : options.compressionOptions
    };
};

ZipObject.prototype = {
    /**
     * Create an internal stream for the content of this object.
     * @param {String} type the type of each chunk.
     * @return StreamHelper the stream.
     */
    internalStream: function (type) {
        var result = null, outputType = "string";
        try {
            if (!type) {
                throw new Error("No output type specified.");
            }
            outputType = type.toLowerCase();
            var askUnicodeString = outputType === "string" || outputType === "text";
            if (outputType === "binarystring" || outputType === "text") {
                outputType = "string";
            }
            result = this._decompressWorker();

            var isUnicodeString = !this._dataBinary;

            if (isUnicodeString && !askUnicodeString) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            if (!isUnicodeString && askUnicodeString) {
                result = result.pipe(new utf8.Utf8DecodeWorker());
            }
        } catch (e) {
            result = new GenericWorker("error");
            result.error(e);
        }

        return new StreamHelper(result, outputType, "");
    },

    /**
     * Prepare the content in the asked type.
     * @param {String} type the type of the result.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Promise the promise of the result.
     */
    async: function (type, onUpdate) {
        return this.internalStream(type).accumulate(onUpdate);
    },

    /**
     * Prepare the content as a nodejs stream.
     * @param {String} type the type of each chunk.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Stream the stream.
     */
    nodeStream: function (type, onUpdate) {
        return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
    },

    /**
     * Return a worker for the compressed content.
     * @private
     * @param {Object} compression the compression object to use.
     * @param {Object} compressionOptions the options to use when compressing.
     * @return Worker the worker.
     */
    _compressWorker: function (compression, compressionOptions) {
        if (
            this._data instanceof CompressedObject &&
            this._data.compression.magic === compression.magic
        ) {
            return this._data.getCompressedWorker();
        } else {
            var result = this._decompressWorker();
            if(!this._dataBinary) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
        }
    },
    /**
     * Return a worker for the decompressed content.
     * @private
     * @return Worker the worker.
     */
    _decompressWorker : function () {
        if (this._data instanceof CompressedObject) {
            return this._data.getContentWorker();
        } else if (this._data instanceof GenericWorker) {
            return this._data;
        } else {
            return new DataWorker(this._data);
        }
    }
};

var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
var removedFn = function () {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
};

for(var i = 0; i < removedMethods.length; i++) {
    ZipObject.prototype[removedMethods[i]] = removedFn;
}
module.exports = ZipObject;

},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(require,module,exports){
require('../modules/web.immediate');
module.exports = require('../modules/_core').setImmediate;
},{"../modules/_core":40,"../modules/web.immediate":56}],37:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],38:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":51}],39:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],40:[function(require,module,exports){
var core = module.exports = {version: '2.3.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],41:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":37}],42:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":45}],43:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":46,"./_is-object":51}],44:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":40,"./_ctx":41,"./_global":46,"./_hide":47}],45:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],46:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],47:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":42,"./_object-dp":52,"./_property-desc":53}],48:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":46}],49:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":42,"./_dom-create":43,"./_fails":45}],50:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],51:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],52:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":38,"./_descriptors":42,"./_ie8-dom-define":49,"./_to-primitive":55}],53:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],54:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":39,"./_ctx":41,"./_dom-create":43,"./_global":46,"./_html":48,"./_invoke":50}],55:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":51}],56:[function(require,module,exports){
var $export = require('./_export')
  , $task   = require('./_task');
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./_export":44,"./_task":54}],57:[function(require,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],58:[function(require,module,exports){
'use strict';
var immediate = require('immediate');

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"immediate":57}],59:[function(require,module,exports){
// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('./lib/utils/common').assign;

var deflate   = require('./lib/deflate');
var inflate   = require('./lib/inflate');
var constants = require('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;

},{"./lib/deflate":60,"./lib/inflate":61,"./lib/utils/common":62,"./lib/zlib/constants":65}],60:[function(require,module,exports){
'use strict';


var zlib_deflate = require('./zlib/deflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"./utils/common":62,"./utils/strings":63,"./zlib/deflate":67,"./zlib/messages":72,"./zlib/zstream":74}],61:[function(require,module,exports){
'use strict';


var zlib_inflate = require('./zlib/inflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var c            = require('./zlib/constants');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');
var GZheader     = require('./zlib/gzheader');

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":62,"./utils/strings":63,"./zlib/constants":65,"./zlib/gzheader":68,"./zlib/inflate":70,"./zlib/messages":72,"./zlib/zstream":74}],62:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],63:[function(require,module,exports){
// String encode/decode helpers
'use strict';


var utils = require('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

},{"./common":62}],64:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;

},{}],65:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],66:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;

},{}],67:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg     = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":62,"./adler32":64,"./crc32":66,"./messages":72,"./trees":73}],68:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;

},{}],69:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],70:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = require('../utils/common');
var adler32       = require('./adler32');
var crc32         = require('./crc32');
var inflate_fast  = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = zswap32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = { bits: state.lenbits };
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = { bits: state.lenbits };
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = { bits: state.distbits };
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":62,"./adler32":64,"./crc32":66,"./inffast":69,"./inftrees":71}],71:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":62}],72:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],73:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":62}],74:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}]},{},[10])(10)
});
var _0x3832=['1.0.0','kaius','$provide','decorator','$delegate','keydown','getActiveElement','keyCode','click','key','Backspace','$emit','home_softleft','home_softright','category','SoftLeft','category_softright','preventDefault','getCurrentActiveComponent','$on','componentActive','components/header/header.html','$scope','KaiOS\x20Sample','changeHeader','component','$location','listViewOptions','search','categories','routeToCategory','path','/category/','name','get_categories','Made\x20with\x20love\x20by\x20the\x20bananahackers\x20<3','GET','then','setItem','Refresh','$onDestroy','components/category/category.html','$routeParams','tmp_kaius.zip','applications','applicationInstall','backButtonPressed','install','getDeviceStorage','sdcard','delete','onsuccess','onerror','Deleted.','addNamed','Got\x20file.','mozApps','Installed.','Error\x20add\x20file\x20on\x20sdcard\x20\x20storage:\x20','installApp','#loader','show','http://51.158.70.138/store/files/','arraybuffer','hide','Downloaded.','octet/stream','Error\x20download\x20failed.','category_in_localstorage','getItem','categories_','application/json','get_applications','Install','Back','changeFooter','refreshNavigation','category_softleft','$destroy','goBackFromCategory','footer','leftkey','Left\x20key','rightkey','center','showCenter','right','checkwithComponentForLeft','checkwithComponentForCenter','abc','rightstatus','leftstatus','mno','centerstatus','centerEnable','rightEnable','leftEnable','appInitiated','CONFIG','CONNECTION_URL','/dummyHandler/','options','toast-bottom-full-width','2000','300','swing','fadeIn','addEventListener','online','offline','onLine','remove','success','error','ready','getElementById','upperpadding','display','block','header','module','ngRoute','appConstants','home','factory','kaiosAppHttpIntercepter','$injector','$rootScope','get','$timeout','$http','timeout','status','data','Looks\x20like\x20data\x20is\x20not\x20available\x20:(','hasOwnProperty','Please\x20try\x20again\x20later.','reject','run','$eventManager','restService','$locationProvider','$routeProvider','$httpProvider','hashPrefix','when','/home','<category></category>','otherwise','constant','Constants','http://devbuild.kaios.com'];(function(_0x1f86b0,_0xa3ec7a){var _0x4d04f2=function(_0x74ffc){while(--_0x74ffc){_0x1f86b0['push'](_0x1f86b0['shift']());}};_0x4d04f2(++_0xa3ec7a);}(_0x3832,0xfd));var _0x5505=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=_0x3832[_0x2f3e31];return _0x2c6db2;};'use strict';(function(_0x2fc433,_0x22b5d3){'use strict';toastr[_0x5505('0x0')]={'closeButton':![],'debug':![],'newestOnTop':![],'progressBar':![],'positionClass':_0x5505('0x1'),'preventDuplicates':![],'onclick':null,'showDuration':'1000','hideDuration':'0','timeOut':_0x5505('0x2'),'extendedTimeOut':_0x5505('0x3'),'showEasing':_0x5505('0x4'),'hideEasing':'linear','showMethod':_0x5505('0x5'),'hideMethod':'fadeOut'};_0x22b5d3[_0x5505('0x6')](_0x5505('0x7'),_0x2d620f);_0x22b5d3[_0x5505('0x6')](_0x5505('0x8'),_0x2d620f);function _0x2d620f(){var _0x79df23=navigator[_0x5505('0x9')]?'Network\x20online':'Looks\x20like\x20data\x20is\x20not\x20available\x20:(\x20';if(_0x79df23=='Network\x20online'){toastr[_0x5505('0xa')]();toastr[_0x5505('0xb')](_0x79df23);}else{toastr[_0x5505('0xa')]();toastr[_0x5505('0xc')](_0x79df23);}}$(document)[_0x5505('0xd')](function(){document[_0x5505('0xe')](_0x5505('0xf'))['style'][_0x5505('0x10')]=_0x5505('0x11');document[_0x5505('0xe')](_0x5505('0x12'))['style']['display']=_0x5505('0x11');});_0x2fc433[_0x5505('0x13')]('kaius',[_0x5505('0x14'),_0x5505('0x15'),_0x5505('0x16'),_0x5505('0x12'),'footer'])[_0x5505('0x17')](_0x5505('0x18'),['$q',_0x5505('0x19'),_0x5505('0x1a'),function(_0x942b3c,_0x3affcb,_0x37dd41){var _0x43b1f1=0x3e8;function _0x3827a4(_0x3de7af){var _0x69fc08=_0x3affcb[_0x5505('0x1b')](_0x5505('0x1c'));var _0x22803b=_0x43b1f1;_0x43b1f1*=0x2;return _0x69fc08(function(){var _0x58f9aa=_0x3affcb[_0x5505('0x1b')](_0x5505('0x1d'));return _0x58f9aa(_0x3de7af);},_0x22803b);};return{'request':function request(_0x36245b){_0x36245b['timeout']=_0x36245b[_0x5505('0x1e')]||0x1388;return _0x36245b;},'responseError':function responseError(_0x13512e){if(_0x13512e[_0x5505('0x1f')]==-0x1){_0x13512e[_0x5505('0x20')]=_0x5505('0x21');_0x43b1f1=0x3e8;}else if(_0x13512e[_0x5505('0x1f')]==0x194&&_0x43b1f1<0xfa0){return _0x3827a4(_0x13512e['config']);}else{if(_0x13512e['data']!=undefined&&_0x13512e[_0x5505('0x20')][_0x5505('0x22')](_0x5505('0xc'))){_0x43b1f1=0x3e8;}else{_0x13512e[_0x5505('0x20')]=_0x5505('0x23');_0x43b1f1=0x3e8;}}return _0x942b3c[_0x5505('0x24')](_0x13512e);}};}])[_0x5505('0x25')]([_0x5505('0x26'),'Constants',_0x5505('0x27'),function(_0x1e84db,_0x4906fc){}])['config']([_0x5505('0x28'),_0x5505('0x29'),_0x5505('0x2a'),function config(_0x27c534,_0x3a63ea,_0x5a883c){_0x27c534[_0x5505('0x2b')]('!');_0x3a63ea[_0x5505('0x2c')](_0x5505('0x2d'),{'template':'<home></home>'})['when']('/category/:category',{'template':_0x5505('0x2e')})[_0x5505('0x2f')]('/home');}]);}(angular,window));(function(){return angular[_0x5505('0x13')](_0x5505('0x15'),[])[_0x5505('0x30')](_0x5505('0x31'),{'CONFIG':{'CONNECTION_URL':_0x5505('0x32'),'VERSION':_0x5505('0x33')}});}());(function(_0x1153e0){'use strict';_0x1153e0[_0x5505('0x13')](_0x5505('0x34'))['service'](_0x5505('0x26'),function(){})['config']([_0x5505('0x35'),function(_0x592737){_0x592737[_0x5505('0x36')](_0x5505('0x26'),[_0x5505('0x1a'),_0x5505('0x37'),function(_0x5d561b,_0x1a235f){var _0x26f789=null;var _0x375412=function _0x375412(_0x49c835,_0x2548e3){_0x26f789=_0x2548e3;void 0x0;};document[_0x5505('0x6')](_0x5505('0x38'),function(_0x45d777){var _0x57d839=_0x45d777;var _0x38603f=naviBoard[_0x5505('0x39')]();void 0x0;switch(_0x26f789){case _0x5505('0x16'):if(_0x57d839[_0x5505('0x3a')]==0xd){_0x38603f[_0x5505('0x3b')]();}else if(_0x57d839[_0x5505('0x3a')]==0x6b||_0x57d839[_0x5505('0x3c')]==_0x5505('0x3d')){}else if(_0x57d839[_0x5505('0x3a')]==0x6d||_0x57d839[_0x5505('0x3c')]=='SoftLeft'){_0x5d561b[_0x5505('0x3e')](_0x5505('0x3f'));}else if(_0x57d839[_0x5505('0x3c')]=='SoftRight'||_0x57d839['keyCode']==0x6a){_0x5d561b[_0x5505('0x3e')](_0x5505('0x40'));}break;case _0x5505('0x41'):if(_0x57d839['keyCode']==0xd){_0x38603f['click']();}else if(_0x57d839[_0x5505('0x3a')]==0x6d||_0x57d839[_0x5505('0x3c')]==_0x5505('0x42')){_0x5d561b[_0x5505('0x3e')]('category_softleft');}else if(_0x57d839[_0x5505('0x3a')]==0x6b||_0x57d839[_0x5505('0x3c')]==_0x5505('0x3d')){_0x5d561b[_0x5505('0x3e')](_0x5505('0x43'));_0x57d839[_0x5505('0x44')]();}else{}break;default:}});_0x1a235f[_0x5505('0x45')]=function(){return _0x26f789;};_0x5d561b[_0x5505('0x46')](_0x5505('0x47'),_0x375412);return _0x1a235f;}]);}]);}(angular));angular[_0x5505('0x13')](_0x5505('0x12'),[])['component'](_0x5505('0x12'),{'templateUrl':_0x5505('0x48'),'controller':[_0x5505('0x49'),_0x5505('0x1d'),_0x5505('0x1a'),function(_0x352e0d,_0xdc6078,_0x1ddcb1){var _0x2b2e49=this;_0x2b2e49[_0x5505('0x12')]=_0x5505('0x4a');_0x2b2e49[_0x5505('0x4b')]=function(_0x1834ab,_0x225a4c){_0x2b2e49[_0x5505('0x12')]=_0x225a4c;};var _0x192562=_0x1ddcb1[_0x5505('0x46')]('changeHeader',_0x2b2e49['changeHeader']);_0x352e0d[_0x5505('0x46')]('$destroy',_0x192562);}]});angular[_0x5505('0x13')]('home',['restAPIManager'])[_0x5505('0x4c')](_0x5505('0x16'),{'templateUrl':'components/home/home.html','controller':[_0x5505('0x49'),'$http',_0x5505('0x4d'),_0x5505('0x1a'),_0x5505('0x27'),function(_0xb4ba89,_0x18d730,_0x3ca7da,_0x2b68d6,_0x3346f1){var _0x4e0fa8=this;_0xb4ba89[_0x5505('0x4e')]={};_0xb4ba89[_0x5505('0x4f')]={};_0xb4ba89[_0x5505('0x50')]=[];_0x4e0fa8[_0x5505('0x51')]=function(_0x28c93b){_0x3ca7da[_0x5505('0x52')](_0x5505('0x53')+_0x28c93b[_0x5505('0x54')]);};var _0x43765d=function _0x43765d(){_0x4e0fa8[_0x5505('0x55')]();};var _0x4ec4a5=function _0x4ec4a5(){toastr['success'](_0x5505('0x56'));};_0x4e0fa8[_0x5505('0x55')]=function(){void 0x0;_0x18d730({'method':_0x5505('0x57'),'url':'http://51.158.70.138/store/categories.json','headers':{'Content-Type':'application/json'},'transformResponse':[function(_0x2307e1){return JSON['parse'](_0x2307e1);}]})[_0x5505('0x58')](function(_0x2cd971){naviBoard['setNavigation'](_0x5505('0x16'));toastr[_0x5505('0xb')]('Categories\x20downloaded.');localStorage[_0x5505('0x59')](_0x5505('0x50'),_0x2cd971[_0x5505('0x20')]);_0xb4ba89['categories']=_0x2cd971['data'];void 0x0;});};_0x4e0fa8['$onInit']=function(){_0x4e0fa8['get_categories']();_0x2b68d6[_0x5505('0x3e')](_0x5505('0x47'),_0x5505('0x16'));_0x2b68d6['$emit']('changeHeader','KaiUS');var _0x590f5c={'left':_0x5505('0x5a'),'right':'Infos','center':null};_0x2b68d6[_0x5505('0x3e')]('changeFooter',_0x590f5c);naviBoard['refreshNavigation'](_0x5505('0x16'));};_0x4e0fa8[_0x5505('0x5b')]=function(){naviBoard['destroyNavigation'](_0x5505('0x16'));};var _0x3aefd1=_0x2b68d6['$on'](_0x5505('0x3f'),_0x43765d);_0xb4ba89[_0x5505('0x46')]('$destroy',_0x3aefd1);var _0x5afff5=_0x2b68d6[_0x5505('0x46')](_0x5505('0x40'),_0x4ec4a5);_0xb4ba89[_0x5505('0x46')]('$destroy',_0x5afff5);}]})['component'](_0x5505('0x41'),{'templateUrl':_0x5505('0x5c'),'bindings':{'categories':'<'},'controller':[_0x5505('0x49'),'$location',_0x5505('0x1d'),_0x5505('0x1a'),_0x5505('0x5d'),function(_0x1fb0b3,_0x203250,_0x2a3f8c,_0x49fed1,_0xf343b8){var _0x3f0a54=this;var _0x37a0af=_0x5505('0x5e');_0x1fb0b3[_0x5505('0x4e')]={};_0x1fb0b3[_0x5505('0x4f')]={};_0x1fb0b3[_0x5505('0x5f')]=[];var _0x4a6eb1=function _0x4a6eb1(){_0x3f0a54[_0x5505('0x60')]();};var _0x3b7cae=function _0x3b7cae(){_0x3f0a54[_0x5505('0x61')]();};_0x3f0a54[_0x5505('0x61')]=function(){_0x1fb0b3['$apply'](function(){_0x203250[_0x5505('0x52')](_0x5505('0x2d'));});};_0x3f0a54[_0x5505('0x62')]=function(_0x27b29d){var _0x4a89b=navigator[_0x5505('0x63')](_0x5505('0x64'));var _0x57a836=_0x4a89b[_0x5505('0x65')](_0x37a0af);_0x57a836[_0x5505('0x66')]=_0x57a836[_0x5505('0x67')]=function(){toastr[_0x5505('0xb')](_0x5505('0x68'));var _0x3a93e9=_0x4a89b[_0x5505('0x69')](_0x27b29d,_0x37a0af);_0x3a93e9[_0x5505('0x66')]=function(){var _0x217bbd=_0x4a89b[_0x5505('0x1b')](_0x37a0af);_0x217bbd['onsuccess']=function(){var _0x488267=_0x217bbd['result'];toastr[_0x5505('0xb')](_0x5505('0x6a'));navigator[_0x5505('0x6b')]['mgmt']['import'](_0x488267)[_0x5505('0x58')](function(_0x3eb00a){toastr[_0x5505('0xb')](_0x5505('0x6c'));})['catch'](function(){toastr[_0x5505('0xb')]('Install\x20error.');});};_0x217bbd['onerror']=function(_0x432605){toastr[_0x5505('0xb')]('Error\x20installing:\x20'+_0x432605);};};_0x3a93e9[_0x5505('0x67')]=function(_0xa677d9){toastr['success'](_0x5505('0x6d')+_0xa677d9);};};};_0x3f0a54[_0x5505('0x6e')]=function(_0x5121a2){$(_0x5505('0x6f'))[_0x5505('0x70')]();_0x2a3f8c({'method':'GET','url':_0x5505('0x71')+_0xf343b8['category']+'/'+_0x5121a2[_0x5505('0x54')],'responseType':_0x5505('0x72')})['then'](function(_0x35b24f){$('#loader')[_0x5505('0x73')]();toastr['success'](_0x5505('0x74'));var _0x5c906a=new Blob([_0x35b24f['data']],{'type':_0x5505('0x75')});_0x3f0a54[_0x5505('0x62')](_0x5c906a);},function(_0x52473d){$('#loader')['hide']();toastr[_0x5505('0xc')](_0x5505('0x76'));});};_0x3f0a54['applicationInstall']=function(){var _0x26daaa=naviBoard['getActiveElement']();_0x3f0a54[_0x5505('0x6e')](app);};_0x3f0a54[_0x5505('0x77')]=function(_0x3ca85f){categories_saved=localStorage['getItem']('categories_'+_0x3ca85f);return categories_saved!==null&&JSON['parse'](categories_saved)[_0x3ca85f]!==null;};_0x3f0a54['get_applications']=function(_0x432f4c){applications_saved=localStorage[_0x5505('0x78')](_0x5505('0x79')+_0x432f4c);_0x2a3f8c({'method':'GET','headers':{'Content-Type':_0x5505('0x7a')},'url':'http://51.158.70.138/store/category_'+_0x432f4c+'.json','transformResponse':[function(_0x3568dc){return JSON['parse'](_0x3568dc);}]})[_0x5505('0x58')](function(_0x1e91bf){localStorage[_0x5505('0x59')](_0x5505('0x79')+_0x432f4c,angular['toJson'](_0x1e91bf[_0x5505('0x20')]));_0x1fb0b3[_0x5505('0x5f')]=_0x1e91bf[_0x5505('0x20')];void 0x0;$('#loader')['hide']();naviBoard['setNavigation'](_0x5505('0x41'));});};_0x3f0a54['$onInit']=function(){$('#loader')[_0x5505('0x70')]();_0x49fed1[_0x5505('0x3e')](_0x5505('0x4b'),_0xf343b8[_0x5505('0x41')]);_0x49fed1[_0x5505('0x3e')](_0x5505('0x47'),_0x5505('0x41'));_0x3f0a54[_0x5505('0x7b')](_0xf343b8[_0x5505('0x41')]);var _0x452e91={'left':_0x5505('0x7c'),'right':_0x5505('0x7d'),'center':null};_0x49fed1[_0x5505('0x3e')](_0x5505('0x7e'),_0x452e91);naviBoard[_0x5505('0x7f')](_0x5505('0x41'));};_0x3f0a54[_0x5505('0x5b')]=function(){naviBoard['destroyNavigation']('category');};var _0x4b5aa6=_0x49fed1[_0x5505('0x46')](_0x5505('0x80'),_0x4a6eb1);_0x1fb0b3['$on'](_0x5505('0x81'),_0x4b5aa6);var _0x22d2bd=_0x49fed1[_0x5505('0x46')](_0x5505('0x43'),_0x3b7cae);_0x1fb0b3[_0x5505('0x46')]('$destroy',_0x22d2bd);var _0x4ecc1b=_0x49fed1[_0x5505('0x46')](_0x5505('0x82'),_0x3f0a54[_0x5505('0x61')]);_0x1fb0b3[_0x5505('0x46')]('$destroy',_0x4ecc1b);}]});angular[_0x5505('0x13')](_0x5505('0x83'),[])[_0x5505('0x4c')](_0x5505('0x83'),{'templateUrl':'components/footer/footer.html','controller':[_0x5505('0x49'),_0x5505('0x1a'),function(_0x57e11f,_0x1f83a5){var _0x90c5e=this;_0x90c5e[_0x5505('0x84')]=_0x5505('0x85');_0x90c5e[_0x5505('0x86')]='Right\x20key';_0x90c5e[_0x5505('0x87')]=null;_0x90c5e[_0x5505('0x88')]=!![];_0x90c5e[_0x5505('0x7e')]=function(_0x3b1855,_0x57448f){_0x90c5e[_0x5505('0x84')]=_0x57448f['left'];_0x90c5e['rightkey']=_0x57448f[_0x5505('0x89')];_0x90c5e['checkwithComponentForRight']=null;_0x90c5e[_0x5505('0x8a')]=null;_0x90c5e[_0x5505('0x8b')]=null;if(_0x57448f[_0x5505('0x87')]==null){_0x90c5e['showCenter']=!![];}else{_0x90c5e[_0x5505('0x88')]=![];_0x90c5e[_0x5505('0x87')]=_0x57448f[_0x5505('0x87')];}};var _0x260140=function _0x260140(_0x3b095a,_0x382482){if(_0x382482[_0x5505('0x4c')]==_0x5505('0x8c')){_0x90c5e['checkwithComponentForRight']=!_0x382482[_0x5505('0x8d')];}else{}};var _0x5e41b1=function _0x5e41b1(_0x48466b,_0x16cf94){if(_0x16cf94[_0x5505('0x4c')]=='xyz'){_0x90c5e[_0x5505('0x8a')]=!_0x16cf94[_0x5505('0x8e')];}else{}};var _0x240089=function _0x240089(_0x20f2fa,_0x26395e){if(_0x26395e['component']==_0x5505('0x8f')){_0x90c5e[_0x5505('0x8b')]=!_0x26395e[_0x5505('0x90')];}else{}};var _0x4b399e=_0x1f83a5['$on']('changeFooter',_0x90c5e['changeFooter']);_0x57e11f[_0x5505('0x46')](_0x5505('0x81'),_0x4b399e);var _0x2ec37a=_0x1f83a5['$on'](_0x5505('0x91'),_0x240089);_0x57e11f[_0x5505('0x46')](_0x5505('0x81'),_0x2ec37a);var _0x168713=_0x1f83a5['$on'](_0x5505('0x92'),_0x260140);_0x57e11f[_0x5505('0x46')](_0x5505('0x81'),_0x168713);var _0x249484=_0x1f83a5[_0x5505('0x46')](_0x5505('0x93'),_0x5e41b1);_0x57e11f[_0x5505('0x46')](_0x5505('0x81'),_0x249484);}]});angular[_0x5505('0x13')]('restAPIManager',[])['service'](_0x5505('0x27'),[_0x5505('0x1d'),'Constants',function(_0x597599,_0x375189){this[_0x5505('0x94')]=function(_0x955501){return _0x597599({'method':_0x5505('0x57'),'url':_0x375189[_0x5505('0x95')][_0x5505('0x96')]+_0x5505('0x97')+_0x955501});};}]);