(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Vu=()=>{};var zo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Du=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],c=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,_=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(w=64)),r.push(t[m],t[_],t[w],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(il(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Du(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||_==null)throw new Nu;const w=o<<2|c>>4;if(r.push(w),d!==64){const R=c<<4&240|d>>2;if(r.push(R),_!==64){const P=d<<6&192|_;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xu=function(n){const e=il(n);return sl.encodeByteArray(e,!0)},hr=function(n){return xu(n).replace(/\./g,"")},Ou=function(n){try{return sl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=()=>Mu().__FIREBASE_DEFAULTS__,Fu=()=>{if(typeof process>"u"||typeof zo>"u")return;const n=zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ou(n[1]);return e&&JSON.parse(e)},es=()=>{try{return Vu()||Lu()||Fu()||Uu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bu=n=>{var e,t;return(t=(e=es())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Yu=n=>{const e=Bu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ol=()=>{var n;return(n=es())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){return n.endsWith(".cloudworkstations.dev")}async function qu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hr(JSON.stringify(t)),hr(JSON.stringify(a)),""].join(".")}const fn={};function $u(){const n={prod:[],emulator:[]};for(const e of Object.keys(fn))fn[e]?n.emulator.push(e):n.prod.push(e);return n}function Hu(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let $o=!1;function Gu(n,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||fn[n]===e||fn[n]||$o)return;fn[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=$u().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,R){w.setAttribute("width","24"),w.setAttribute("id",R),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{$o=!0,a()},w}function m(w,R){w.setAttribute("id",R),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function _(){const w=Hu(r),R=t("text"),P=document.getElementById(R)||document.createElement("span"),D=t("learnmore"),V=document.getElementById(D)||document.createElement("a"),j=t("preprendIcon"),F=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const B=w.element;c(B),m(V,D);const X=d();h(F,j),B.append(F,P,V,X),document.body.appendChild(B)}o?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ku(){var n;const e=(n=es())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qu(){return!Ku()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xu(){try{return typeof indexedDB=="object"}catch{return!1}}function Ju(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zu,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?eh(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new qt(i,c,r)}}function eh(n,e){return n.replace(th,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const th=/\{\$([^}]+)}/g;function dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ho(o)&&Ho(a)){if(!dr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ho(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){return n&&n._delegate?n._delegate:n}class _n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ju;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ih(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rh(n){return n===wt?void 0:n}function ih(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const oh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},ah=$.INFO,lh={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},ch=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=lh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=ah,this._logHandler=ch,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const uh=(n,e)=>e.some(t=>n instanceof t);let Go,Wo;function hh(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dh(){return Wo||(Wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cl=new WeakMap,Si=new WeakMap,ul=new WeakMap,wi=new WeakMap,ns=new WeakMap;function fh(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Je(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cl.set(t,n)}).catch(()=>{}),ns.set(e,n),e}function mh(n){if(Si.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Si.set(n,e)}let Pi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Si.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ul.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ph(n){Pi=n(Pi)}function gh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vi(this),e,...t);return ul.set(r,e.sort?e.sort():[e]),Je(r)}:dh().includes(n)?function(...e){return n.apply(vi(this),e),Je(cl.get(this))}:function(...e){return Je(n.apply(vi(this),e))}}function yh(n){return typeof n=="function"?gh(n):(n instanceof IDBTransaction&&mh(n),uh(n,hh())?new Proxy(n,Pi):n)}function Je(n){if(n instanceof IDBRequest)return fh(n);if(wi.has(n))return wi.get(n);const e=yh(n);return e!==n&&(wi.set(n,e),ns.set(e,n)),e}const vi=n=>ns.get(n);function _h(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),c=Je(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Je(a.result),h.oldVersion,h.newVersion,Je(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const wh=["get","getKey","getAll","getAllKeys","count"],vh=["put","add","delete","clear"],Ti=new Map;function Ko(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=vh.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wh.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&h.done]))[0]};return Ti.set(e,o),o}ph(n=>({...n,get:(e,t,r)=>Ko(e,t)||n.get(e,t,r),has:(e,t)=>!!Ko(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Eh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Eh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ki="@firebase/app",Qo="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new ll("@firebase/app"),Ih="@firebase/app-compat",Ah="@firebase/analytics-compat",bh="@firebase/analytics",Rh="@firebase/app-check-compat",Ch="@firebase/app-check",Sh="@firebase/auth",Ph="@firebase/auth-compat",kh="@firebase/database",Vh="@firebase/data-connect",Dh="@firebase/database-compat",Nh="@firebase/functions",xh="@firebase/functions-compat",Oh="@firebase/installations",Mh="@firebase/installations-compat",Lh="@firebase/messaging",Fh="@firebase/messaging-compat",Uh="@firebase/performance",Bh="@firebase/performance-compat",Yh="@firebase/remote-config",jh="@firebase/remote-config-compat",qh="@firebase/storage",zh="@firebase/storage-compat",$h="@firebase/firestore",Hh="@firebase/ai",Gh="@firebase/firestore-compat",Wh="firebase",Kh="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="[DEFAULT]",Qh={[ki]:"fire-core",[Ih]:"fire-core-compat",[bh]:"fire-analytics",[Ah]:"fire-analytics-compat",[Ch]:"fire-app-check",[Rh]:"fire-app-check-compat",[Sh]:"fire-auth",[Ph]:"fire-auth-compat",[kh]:"fire-rtdb",[Vh]:"fire-data-connect",[Dh]:"fire-rtdb-compat",[Nh]:"fire-fn",[xh]:"fire-fn-compat",[Oh]:"fire-iid",[Mh]:"fire-iid-compat",[Lh]:"fire-fcm",[Fh]:"fire-fcm-compat",[Uh]:"fire-perf",[Bh]:"fire-perf-compat",[Yh]:"fire-rc",[jh]:"fire-rc-compat",[qh]:"fire-gcs",[zh]:"fire-gcs-compat",[$h]:"fire-fst",[Gh]:"fire-fst-compat",[Hh]:"fire-vertex","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map,Xh=new Map,Di=new Map;function Xo(n,e){try{n.container.addComponent(e)}catch(t){ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mr(n){const e=n.name;if(Di.has(e))return ze.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,n);for(const t of fr.values())Xo(t,n);for(const t of Xh.values())Xo(t,n);return!0}function Jh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new al("app","Firebase",ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=Kh;function hl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vi,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(t||(t=ol()),!t)throw Ze.create("no-options");const o=fr.get(i);if(o){if(dr(t,o.options)&&dr(r,o.config))return o;throw Ze.create("duplicate-app",{appName:i})}const a=new sh(i);for(const h of Di.values())a.addComponent(h);const c=new td(t,r,a);return fr.set(i,c),c}function rd(n=Vi){const e=fr.get(n);if(!e&&n===Vi&&ol())return hl();if(!e)throw Ze.create("no-app",{appName:n});return e}function xt(n,e,t){var r;let i=(r=Qh[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ze.warn(c.join(" "));return}mr(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="firebase-heartbeat-database",sd=1,wn="firebase-heartbeat-store";let Ei=null;function dl(){return Ei||(Ei=_h(id,sd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ze.create("idb-open",{originalErrorMessage:n.message})})),Ei}async function od(n){try{const t=(await dl()).transaction(wn),r=await t.objectStore(wn).get(fl(n));return await t.done,r}catch(e){if(e instanceof qt)ze.warn(e.message);else{const t=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ze.warn(t.message)}}}async function Jo(n,e){try{const r=(await dl()).transaction(wn,"readwrite");await r.objectStore(wn).put(e,fl(n)),await r.done}catch(t){if(t instanceof qt)ze.warn(t.message);else{const r=Ze.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ze.warn(r.message)}}}function fl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=1024,ld=30;class cd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>ld){const a=dd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zo(),{heartbeatsToSend:r,unsentEntries:i}=ud(this._heartbeatsCache.heartbeats),o=hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ze.warn(t),""}}}function Zo(){return new Date().toISOString().substring(0,10)}function ud(n,e=ad){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ea(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ea(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xu()?Ju().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await od(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ea(n){return hr(JSON.stringify({version:2,heartbeats:n})).length}function dd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){mr(new _n("platform-logger",e=>new Th(e),"PRIVATE")),mr(new _n("heartbeat",e=>new cd(e),"PRIVATE")),xt(ki,Qo,n),xt(ki,Qo,"esm2017"),xt("fire-js","")}fd("");var md="firebase",pd="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(md,pd,"app");var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var et,ml;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function g(){}g.prototype=p.prototype,E.D=p.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(v,T,A){for(var y=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)y[xe-2]=arguments[xe];return p.prototype[T].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,g){g||(g=0);var v=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)v[T]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(T=0;16>T;++T)v[T]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=E.g[0],g=E.g[1],T=E.g[2];var A=E.g[3],y=p+(A^g&(T^A))+v[0]+3614090360&4294967295;p=g+(y<<7&4294967295|y>>>25),y=A+(T^p&(g^T))+v[1]+3905402710&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(g^A&(p^g))+v[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=g+(p^T&(A^p))+v[3]+3250441966&4294967295,g=T+(y<<22&4294967295|y>>>10),y=p+(A^g&(T^A))+v[4]+4118548399&4294967295,p=g+(y<<7&4294967295|y>>>25),y=A+(T^p&(g^T))+v[5]+1200080426&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(g^A&(p^g))+v[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=g+(p^T&(A^p))+v[7]+4249261313&4294967295,g=T+(y<<22&4294967295|y>>>10),y=p+(A^g&(T^A))+v[8]+1770035416&4294967295,p=g+(y<<7&4294967295|y>>>25),y=A+(T^p&(g^T))+v[9]+2336552879&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(g^A&(p^g))+v[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=g+(p^T&(A^p))+v[11]+2304563134&4294967295,g=T+(y<<22&4294967295|y>>>10),y=p+(A^g&(T^A))+v[12]+1804603682&4294967295,p=g+(y<<7&4294967295|y>>>25),y=A+(T^p&(g^T))+v[13]+4254626195&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(g^A&(p^g))+v[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=g+(p^T&(A^p))+v[15]+1236535329&4294967295,g=T+(y<<22&4294967295|y>>>10),y=p+(T^A&(g^T))+v[1]+4129170786&4294967295,p=g+(y<<5&4294967295|y>>>27),y=A+(g^T&(p^g))+v[6]+3225465664&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^g&(A^p))+v[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=g+(A^p&(T^A))+v[0]+3921069994&4294967295,g=T+(y<<20&4294967295|y>>>12),y=p+(T^A&(g^T))+v[5]+3593408605&4294967295,p=g+(y<<5&4294967295|y>>>27),y=A+(g^T&(p^g))+v[10]+38016083&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^g&(A^p))+v[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=g+(A^p&(T^A))+v[4]+3889429448&4294967295,g=T+(y<<20&4294967295|y>>>12),y=p+(T^A&(g^T))+v[9]+568446438&4294967295,p=g+(y<<5&4294967295|y>>>27),y=A+(g^T&(p^g))+v[14]+3275163606&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^g&(A^p))+v[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=g+(A^p&(T^A))+v[8]+1163531501&4294967295,g=T+(y<<20&4294967295|y>>>12),y=p+(T^A&(g^T))+v[13]+2850285829&4294967295,p=g+(y<<5&4294967295|y>>>27),y=A+(g^T&(p^g))+v[2]+4243563512&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^g&(A^p))+v[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=g+(A^p&(T^A))+v[12]+2368359562&4294967295,g=T+(y<<20&4294967295|y>>>12),y=p+(g^T^A)+v[5]+4294588738&4294967295,p=g+(y<<4&4294967295|y>>>28),y=A+(p^g^T)+v[8]+2272392833&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^g)+v[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=g+(T^A^p)+v[14]+4259657740&4294967295,g=T+(y<<23&4294967295|y>>>9),y=p+(g^T^A)+v[1]+2763975236&4294967295,p=g+(y<<4&4294967295|y>>>28),y=A+(p^g^T)+v[4]+1272893353&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^g)+v[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=g+(T^A^p)+v[10]+3200236656&4294967295,g=T+(y<<23&4294967295|y>>>9),y=p+(g^T^A)+v[13]+681279174&4294967295,p=g+(y<<4&4294967295|y>>>28),y=A+(p^g^T)+v[0]+3936430074&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^g)+v[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=g+(T^A^p)+v[6]+76029189&4294967295,g=T+(y<<23&4294967295|y>>>9),y=p+(g^T^A)+v[9]+3654602809&4294967295,p=g+(y<<4&4294967295|y>>>28),y=A+(p^g^T)+v[12]+3873151461&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^g)+v[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=g+(T^A^p)+v[2]+3299628645&4294967295,g=T+(y<<23&4294967295|y>>>9),y=p+(T^(g|~A))+v[0]+4096336452&4294967295,p=g+(y<<6&4294967295|y>>>26),y=A+(g^(p|~T))+v[7]+1126891415&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~g))+v[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=g+(A^(T|~p))+v[5]+4237533241&4294967295,g=T+(y<<21&4294967295|y>>>11),y=p+(T^(g|~A))+v[12]+1700485571&4294967295,p=g+(y<<6&4294967295|y>>>26),y=A+(g^(p|~T))+v[3]+2399980690&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~g))+v[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=g+(A^(T|~p))+v[1]+2240044497&4294967295,g=T+(y<<21&4294967295|y>>>11),y=p+(T^(g|~A))+v[8]+1873313359&4294967295,p=g+(y<<6&4294967295|y>>>26),y=A+(g^(p|~T))+v[15]+4264355552&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~g))+v[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=g+(A^(T|~p))+v[13]+1309151649&4294967295,g=T+(y<<21&4294967295|y>>>11),y=p+(T^(g|~A))+v[4]+4149444226&4294967295,p=g+(y<<6&4294967295|y>>>26),y=A+(g^(p|~T))+v[11]+3174756917&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~g))+v[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=g+(A^(T|~p))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var g=p-this.blockSize,v=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=g;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(v[T++]=E.charCodeAt(A++),T==this.blockSize){i(this,v),T=0;break}}else for(;A<p;)if(v[T++]=E[A++],T==this.blockSize){i(this,v),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var g=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=g&255,g/=256;for(this.u(E),E=Array(16),p=g=0;4>p;++p)for(var v=0;32>v;v+=8)E[g++]=this.g[p]>>>v&255;return E};function o(E,p){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=p(E)}function a(E,p){this.h=p;for(var g=[],v=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;v&&A==p||(g[T]=A,v=!1)}this.g=g}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return _;if(0>E)return V(d(-E));for(var p=[],g=1,v=0;E>=g;v++)p[v]=E/g|0,g*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return V(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),v=_,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),y=parseInt(E.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),v=v.j(A).add(d(y))):(v=v.j(g),v=v.add(d(y)))}return v}var _=h(0),w=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-V(this).m();for(var E=0,p=1,g=0;g<this.g.length;g++){var v=this.i(g);E+=(0<=v?v:4294967296+v)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+V(this).toString(E);for(var p=d(Math.pow(E,6)),g=this,v="";;){var T=X(g,p).g;g=j(g,T.j(p));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=T,P(g))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=j(this,E),D(E)?-1:P(E)?0:1};function V(E){for(var p=E.g.length,g=[],v=0;v<p;v++)g[v]=~E.g[v];return new a(g,~E.h).add(w)}n.abs=function(){return D(this)?V(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],v=0,T=0;T<=p;T++){var A=v+(this.i(T)&65535)+(E.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=y>>>16,A&=65535,y&=65535,g[T]=y<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function j(E,p){return E.add(V(p))}n.j=function(E){if(P(this)||P(E))return _;if(D(this))return D(E)?V(this).j(V(E)):V(V(this).j(E));if(D(E))return V(this.j(V(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,g=[],v=0;v<2*p;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<E.g.length;T++){var A=this.i(v)>>>16,y=this.i(v)&65535,xe=E.i(T)>>>16,bt=E.i(T)&65535;g[2*v+2*T]+=y*bt,F(g,2*v+2*T),g[2*v+2*T+1]+=A*bt,F(g,2*v+2*T+1),g[2*v+2*T+1]+=y*xe,F(g,2*v+2*T+1),g[2*v+2*T+2]+=A*xe,F(g,2*v+2*T+2)}for(v=0;v<p;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=p;v<2*p;v++)g[v]=0;return new a(g,0)};function F(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function B(E,p){this.g=E,this.h=p}function X(E,p){if(P(p))throw Error("division by zero");if(P(E))return new B(_,_);if(D(E))return p=X(V(E),p),new B(V(p.g),V(p.h));if(D(p))return p=X(E,V(p)),new B(V(p.g),p.h);if(30<E.g.length){if(D(E)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var g=w,v=p;0>=v.l(E);)g=Re(g),v=Re(v);var T=te(g,1),A=te(v,1);for(v=te(v,2),g=te(g,2);!P(v);){var y=A.add(v);0>=y.l(E)&&(T=T.add(g),A=y),v=te(v,1),g=te(g,1)}return p=j(E,T.j(p)),new B(T,p)}for(T=_;0<=E.l(p);){for(g=Math.max(1,Math.floor(E.m()/p.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(g),y=A.j(p);D(y)||0<y.l(E);)g-=v,A=d(g),y=A.j(p);P(A)&&(A=w),T=T.add(A),E=j(E,y)}return new B(T,E)}n.A=function(E){return X(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)&E.i(v);return new a(g,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)|E.i(v);return new a(g,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],v=0;v<p;v++)g[v]=this.i(v)^E.i(v);return new a(g,this.h^E.h)};function Re(E){for(var p=E.g.length+1,g=[],v=0;v<p;v++)g[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(g,E.h)}function te(E,p){var g=p>>5;p%=32;for(var v=E.g.length-g,T=[],A=0;A<v;A++)T[A]=0<p?E.i(A+g)>>>p|E.i(A+g+1)<<32-p:E.i(A+g);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ml=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,et=a}).apply(typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{});var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pl,cn,gl,sr,Ni,yl,_l,wl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof er=="object"&&er];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in u))break e;u=u[I]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&e(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,f=!1,I={next:function(){if(!f&&u<s.length){var b=u++;return{value:l(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,u){return s.call.apply(s.bind,arguments)}function _(s,l,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(l,I)}}return function(){return s.apply(l,arguments)}}function w(s,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:_,w.apply(null,arguments)}function R(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function P(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,I,b){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return l.prototype[I].apply(f,k)}}function D(s){const l=s.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function V(s,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const I=s.length||0,b=f.length||0;s.length=I+b;for(let k=0;k<b;k++)s[I+k]=f[k]}else s.push(f)}}class j{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(s){return/^[\s\xa0]*$/.test(s)}function B(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var Re=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function te(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function E(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function p(s){const l={};for(const u in s)l[u]=s[u];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,l){let u,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(u in f)s[u]=f[u];for(let b=0;b<g.length;b++)u=g[b],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function T(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function A(s){c.setTimeout(()=>{throw s},0)}function y(){var s=Ce;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class xe{constructor(){this.h=this.g=null}add(l,u){const f=bt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var bt=new j(()=>new Gr,s=>s.reset());class Gr{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,ft=!1,Ce=new xe,mt=()=>{const s=c.Promise.resolve(void 0);dt=()=>{s.then(Wr)}};var Wr=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(u){A(u)}var l=bt;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}ft=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Kr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function Ge(s,l){if(ie.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(Re){e:{try{X(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Zc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ge.aa.h.call(this)}}P(Ge,ie);var Zc={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),eu=0;function tu(s,l,u,f,I){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=I,this.key=++eu,this.da=this.fa=!1}function Mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Ln(s){this.src=s,this.g={},this.h=0}Ln.prototype.add=function(s,l,u,f,I){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var k=Xr(s,l,f,I);return-1<k?(l=s[k],u||(l.fa=!1)):(l=new tu(l,this.src,b,!!f,I),l.fa=u,s.push(l)),l};function Qr(s,l){var u=l.type;if(u in s.g){var f=s.g[u],I=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=I)&&Array.prototype.splice.call(f,I,1),b&&(Mn(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Xr(s,l,u,f){for(var I=0;I<s.length;++I){var b=s[I];if(!b.da&&b.listener==l&&b.capture==!!u&&b.ha==f)return I}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),Zr={};function zs(s,l,u,f,I){if(Array.isArray(l)){for(var b=0;b<l.length;b++)zs(s,l[b],u,f,I);return null}return u=Gs(u),s&&s[On]?s.K(l,u,d(f)?!!f.capture:!1,I):nu(s,l,u,!1,f,I)}function nu(s,l,u,f,I,b){if(!l)throw Error("Invalid event type");var k=d(I)?!!I.capture:!!I,W=ti(s);if(W||(s[Jr]=W=new Ln(s)),u=W.add(l,u,f,k,b),u.proxy)return u;if(f=ru(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)Kr||(I=k),I===void 0&&(I=!1),s.addEventListener(l.toString(),f,I);else if(s.attachEvent)s.attachEvent(Hs(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ru(){function s(u){return l.call(s.src,s.listener,u)}const l=iu;return s}function $s(s,l,u,f,I){if(Array.isArray(l))for(var b=0;b<l.length;b++)$s(s,l[b],u,f,I);else f=d(f)?!!f.capture:!!f,u=Gs(u),s&&s[On]?(s=s.i,l=String(l).toString(),l in s.g&&(b=s.g[l],u=Xr(b,u,f,I),-1<u&&(Mn(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete s.g[l],s.h--)))):s&&(s=ti(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Xr(l,u,f,I)),(u=-1<s?l[s]:null)&&ei(u))}function ei(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[On])Qr(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(Hs(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=ti(l))?(Qr(u,s),u.h==0&&(u.src=null,l[Jr]=null)):Mn(s)}}}function Hs(s){return s in Zr?Zr[s]:Zr[s]="on"+s}function iu(s,l){if(s.da)s=!0;else{l=new Ge(l,this);var u=s.listener,f=s.ha||s.src;s.fa&&ei(s),s=u.call(f,l)}return s}function ti(s){return s=s[Jr],s instanceof Ln?s:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gs(s){return typeof s=="function"?s:(s[ni]||(s[ni]=function(l){return s.handleEvent(l)}),s[ni])}function de(){ke.call(this),this.i=new Ln(this),this.M=this,this.F=null}P(de,ke),de.prototype[On]=!0,de.prototype.removeEventListener=function(s,l,u,f){$s(this,s,l,u,f)};function we(s,l){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new ie(l,s);else if(l instanceof ie)l.target=l.target||s;else{var I=l;l=new ie(f,s),v(l,I)}if(I=!0,u)for(var b=u.length-1;0<=b;b--){var k=l.g=u[b];I=Fn(k,f,!0,l)&&I}if(k=l.g=s,I=Fn(k,f,!0,l)&&I,I=Fn(k,f,!1,l)&&I,u)for(b=0;b<u.length;b++)k=l.g=u[b],I=Fn(k,f,!1,l)&&I}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],f=0;f<u.length;f++)Mn(u[f]);delete s.g[l],s.h--}}this.F=null},de.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},de.prototype.L=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function Fn(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,b=0;b<l.length;++b){var k=l[b];if(k&&!k.da&&k.capture==u){var W=k.listener,le=k.ha||k.src;k.fa&&Qr(s.i,k),I=W.call(le,f)!==!1&&I}}return I&&!f.defaultPrevented}function Ws(s,l,u){if(typeof s=="function")u&&(s=w(s,u));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Ks(s){s.g=Ws(()=>{s.g=null,s.i&&(s.i=!1,Ks(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class su extends ke{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ks(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(s){ke.call(this),this.h=s,this.g={}}P(Kt,ke);var Qs=[];function Xs(s){te(s.g,function(l,u){this.g.hasOwnProperty(u)&&ei(l)},s),s.g={}}Kt.prototype.N=function(){Kt.aa.N.call(this),Xs(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=c.JSON.stringify,ou=c.JSON.parse,au=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function ii(){}ii.prototype.h=null;function Js(s){return s.h||(s.h=s.i())}function Zs(){}var Qt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function si(){ie.call(this,"d")}P(si,ie);function oi(){ie.call(this,"c")}P(oi,ie);var pt={},eo=null;function Un(){return eo=eo||new de}pt.La="serverreachability";function to(s){ie.call(this,pt.La,s)}P(to,ie);function Xt(s){const l=Un();we(l,new to(l))}pt.STAT_EVENT="statevent";function no(s,l){ie.call(this,pt.STAT_EVENT,s),this.stat=l}P(no,ie);function ve(s){const l=Un();we(l,new no(l,s))}pt.Ma="timingevent";function ro(s,l){ie.call(this,pt.Ma,s),this.size=l}P(ro,ie);function Jt(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function Zt(){this.g=!0}Zt.prototype.xa=function(){this.g=!1};function lu(s,l,u,f,I,b){s.info(function(){if(s.g)if(b)for(var k="",W=b.split("&"),le=0;le<W.length;le++){var H=W[le].split("=");if(1<H.length){var fe=H[0];H=H[1];var me=fe.split("_");k=2<=me.length&&me[1]=="type"?k+(fe+"="+H+"&"):k+(fe+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+u+`
`+k})}function cu(s,l,u,f,I,b,k){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+u+`
`+b+" "+k})}function Rt(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+hu(s,u)+(f?" "+f:"")})}function uu(s,l){s.info(function(){return"TIMEOUT: "+l})}Zt.prototype.info=function(){};function hu(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var b=I[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return ri(u)}catch{return l}}var Bn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},io={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ai;function Yn(){}P(Yn,ii),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},ai=new Yn;function We(s,l,u,f){this.j=s,this.i=l,this.l=u,this.R=f||1,this.U=new Kt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new so}function so(){this.i=null,this.g="",this.h=!1}var oo={},li={};function ci(s,l,u){s.L=1,s.v=$n(Ye(l)),s.m=u,s.P=!0,ao(s,null)}function ao(s,l){s.F=Date.now(),jn(s),s.A=Ye(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Eo(u.i,"t",f),s.C=0,u=s.j.J,s.h=new so,s.g=Bo(s.j,u?l:null,!s.m),0<s.O&&(s.M=new su(w(s.Y,s,s.g),s.O)),l=s.U,u=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Qs[0]=I.toString()),I=Qs);for(var b=0;b<I.length;b++){var k=zs(u,I[b],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),Xt(),lu(s.i,s.u,s.A,s.l,s.R,s.m)}We.prototype.ca=function(s){s=s.target;const l=this.M;l&&je(s)==3?l.j():this.Y(s)},We.prototype.Y=function(s){try{if(s==this.g)e:{const me=je(this.g);var l=this.g.Ba();const Pt=this.g.Z();if(!(3>me)&&(me!=3||this.g&&(this.h.h||this.g.oa()||Po(this.g)))){this.J||me!=4||l==7||(l==8||0>=Pt?Xt(3):Xt(2)),ui(this);var u=this.g.Z();this.X=u;t:if(lo(this)){var f=Po(this.g);s="";var I=f.length,b=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gt(this),en(this);var k="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(b&&l==I-1)});f.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,cu(this.i,this.u,this.A,this.l,this.R,me,u),this.o){if(this.T&&!this.K){t:{if(this.g){var W,le=this.g;if((W=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(W)){var H=W;break t}}H=null}if(u=H)Rt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hi(this,u);else{this.o=!1,this.s=3,ve(12),gt(this),en(this);break e}}if(this.P){u=!0;let Ve;for(;!this.J&&this.C<k.length;)if(Ve=du(this,k),Ve==li){me==4&&(this.s=4,ve(14),u=!1),Rt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==oo){this.s=4,ve(15),Rt(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Rt(this.i,this.l,Ve,null),hi(this,Ve);if(lo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||k.length!=0||this.h.h||(this.s=1,ve(16),u=!1),this.o=this.o&&u,!u)Rt(this.i,this.l,k,"[Invalid Chunked Response]"),gt(this),en(this);else if(0<k.length&&!this.W){this.W=!0;var fe=this.j;fe.g==this&&fe.ba&&!fe.M&&(fe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),yi(fe),fe.M=!0,ve(11))}}else Rt(this.i,this.l,k,null),hi(this,k);me==4&&gt(this),this.o&&!this.J&&(me==4?Mo(this.j,this):(this.o=!1,jn(this)))}else Pu(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),gt(this),en(this)}}}catch{}finally{}};function lo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function du(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?li:(u=Number(l.substring(u,f)),isNaN(u)?oo:(f+=1,f+u>l.length?li:(l=l.slice(f,f+u),s.C=f+u,l)))}We.prototype.cancel=function(){this.J=!0,gt(this)};function jn(s){s.S=Date.now()+s.I,co(s,s.I)}function co(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Jt(w(s.ba,s),l)}function ui(s){s.B&&(c.clearTimeout(s.B),s.B=null)}We.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(uu(this.i,this.A),this.L!=2&&(Xt(),ve(17)),gt(this),this.s=2,en(this)):co(this,this.S-s)};function en(s){s.j.G==0||s.J||Mo(s.j,s)}function gt(s){ui(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,Xs(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function hi(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||di(u.h,s))){if(!s.K&&di(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Xn(u),Kn(u);else break e;gi(u),ve(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=Jt(w(u.Za,u),6e3));if(1>=fo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else _t(u,11)}else if((s.K||u.g==s)&&Xn(u),!F(l))for(I=u.Da.g.parse(l),l=0;l<I.length;l++){let H=I[l];if(u.T=H[0],H=H[1],u.G==2)if(H[0]=="c"){u.K=H[1],u.ia=H[2];const fe=H[3];fe!=null&&(u.la=fe,u.j.info("VER="+u.la));const me=H[4];me!=null&&(u.Aa=me,u.j.info("SVER="+u.Aa));const Pt=H[5];Pt!=null&&typeof Pt=="number"&&0<Pt&&(f=1.5*Pt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Ve=s.g;if(Ve){const Zn=Ve.g?Ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var b=f.h;b.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(fi(b,b.h),b.h=null))}if(f.D){const _i=Ve.g?Ve.g.getResponseHeader("X-HTTP-Session-Id"):null;_i&&(f.ya=_i,K(f.I,f.D,_i))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=s;if(f.qa=Uo(f,f.J?f.ia:null,f.W),k.K){mo(f.h,k);var W=k,le=f.L;le&&(W.I=le),W.B&&(ui(W),jn(W)),f.g=k}else xo(f);0<u.i.length&&Qn(u)}else H[0]!="stop"&&H[0]!="close"||_t(u,7);else u.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?_t(u,7):pi(u):H[0]!="noop"&&u.l&&u.l.ta(H),u.v=0)}}Xt(4)}catch{}}var fu=class{constructor(s,l){this.g=s,this.map=l}};function uo(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ho(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function fo(s){return s.h?1:s.g?s.g.size:0}function di(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function fi(s,l){s.g?s.g.add(l):s.h=l}function mo(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}uo.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function po(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return D(s.i)}function mu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,f=0;f<u;f++)l.push(s[f]);return l}l=[],u=0;for(f in s)l[u++]=s[f];return l}function pu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const f in s)l[u++]=f;return l}}}function go(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=pu(s),f=mu(s),I=f.length,b=0;b<I;b++)l.call(void 0,f[b],u&&u[b],s)}var yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gu(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),I=null;if(0<=f){var b=s[u].substring(0,f);I=s[u].substring(f+1)}else b=s[u];l(b,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function yt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof yt){this.h=s.h,qn(this,s.j),this.o=s.o,this.g=s.g,zn(this,s.s),this.l=s.l;var l=s.i,u=new rn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),_o(this,u),this.m=s.m}else s&&(l=String(s).match(yo))?(this.h=!1,qn(this,l[1]||"",!0),this.o=tn(l[2]||""),this.g=tn(l[3]||"",!0),zn(this,l[4]),this.l=tn(l[5]||"",!0),_o(this,l[6]||"",!0),this.m=tn(l[7]||"")):(this.h=!1,this.i=new rn(null,this.h))}yt.prototype.toString=function(){var s=[],l=this.j;l&&s.push(nn(l,wo,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(nn(l,wo,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(nn(u,u.charAt(0)=="/"?wu:_u,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",nn(u,Tu)),s.join("")};function Ye(s){return new yt(s)}function qn(s,l,u){s.j=u?tn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function zn(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function _o(s,l,u){l instanceof rn?(s.i=l,Eu(s.i,s.h)):(u||(l=nn(l,vu)),s.i=new rn(l,s.h))}function K(s,l,u){s.i.set(l,u)}function $n(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function tn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function nn(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,yu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var wo=/[#\/\?@]/g,_u=/[#\?:]/g,wu=/[#\?]/g,vu=/[#\?@]/g,Tu=/#/g;function rn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Ke(s){s.g||(s.g=new Map,s.h=0,s.i&&gu(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=rn.prototype,n.add=function(s,l){Ke(this),this.i=null,s=Ct(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function vo(s,l){Ke(s),l=Ct(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function To(s,l){return Ke(s),l=Ct(s,l),s.g.has(l)}n.forEach=function(s,l){Ke(this),this.g.forEach(function(u,f){u.forEach(function(I){s.call(l,I,f,this)},this)},this)},n.na=function(){Ke(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const I=s[f];for(let b=0;b<I.length;b++)u.push(l[f])}return u},n.V=function(s){Ke(this);let l=[];if(typeof s=="string")To(this,s)&&(l=l.concat(this.g.get(Ct(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},n.set=function(s,l){return Ke(this),this.i=null,s=Ct(this,s),To(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Eo(s,l,u){vo(s,l),0<u.length&&(s.i=null,s.g.set(Ct(s,l),D(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var I=b;k[f]!==""&&(I+="="+encodeURIComponent(String(k[f]))),s.push(I)}}return this.i=s.join("&")};function Ct(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function Eu(s,l){l&&!s.j&&(Ke(s),s.i=null,s.g.forEach(function(u,f){var I=f.toLowerCase();f!=I&&(vo(this,f),Eo(this,I,u))},s)),s.j=l}function Iu(s,l){const u=new Zt;if(c.Image){const f=new Image;f.onload=R(Qe,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Qe,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Qe,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Qe,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function Au(s,l){const u=new Zt,f=new AbortController,I=setTimeout(()=>{f.abort(),Qe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(I),b.ok?Qe(u,"TestPingServer: ok",!0,l):Qe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Qe(u,"TestPingServer: error",!1,l)})}function Qe(s,l,u,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(u)}catch{}}function bu(){this.g=new au}function Ru(s,l,u){const f=u||"";try{go(s,function(I,b){let k=I;d(I)&&(k=ri(I)),l.push(f+b+"="+encodeURIComponent(k))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function Hn(s){this.l=s.Ub||null,this.j=s.eb||!1}P(Hn,ii),Hn.prototype.g=function(){return new Gn(this.l,this.j)},Hn.prototype.i=function(s){return function(){return s}}({});function Gn(s,l){de.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Gn,de),n=Gn.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,on(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Io(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Io(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?sn(this):on(this),this.readyState==3&&Io(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,sn(this))},n.Qa=function(s){this.g&&(this.response=s,sn(this))},n.ga=function(){this.g&&sn(this)};function sn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,on(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function on(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ao(s){let l="";return te(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function mi(s,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ao(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):K(s,l,u))}function Z(s){de.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Z,de);var Cu=/^https?$/i,Su=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ai.g(),this.v=this.o?Js(this.o):Js(ai),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(b){bo(this,b);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)u.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Su,l,void 0))||f||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of u)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){bo(this,b)}};function bo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Ro(s),Wn(s)}function Ro(s){s.A||(s.A=!0,we(s,"complete"),we(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,we(this,"complete"),we(this,"abort"),Wn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Co(this):this.bb())},n.bb=function(){Co(this)};function Co(s){if(s.h&&typeof a<"u"&&(!s.v[1]||je(s)!=4||s.Z()!=2)){if(s.u&&je(s)==4)Ws(s.Ea,0,s);else if(we(s,"readystatechange"),je(s)==4){s.h=!1;try{const k=s.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var I=String(s.D).match(yo)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Cu.test(I?I.toLowerCase():"")}u=f}if(u)we(s,"complete"),we(s,"success");else{s.m=6;try{var b=2<je(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",Ro(s)}}finally{Wn(s)}}}}function Wn(s,l){if(s.g){So(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||we(s,"ready");try{u.onreadystatechange=f}catch{}}}function So(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function je(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),ou(l)}};function Po(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pu(s){const l={};s=(s.g&&2<=je(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(F(s[f]))continue;var u=T(s[f]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=l[I]||[];l[I]=b,b.push(u)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function ko(s){this.Aa=0,this.i=[],this.j=new Zt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=an("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=an("baseRetryDelayMs",5e3,s),this.cb=an("retryDelaySeedMs",1e4,s),this.Wa=an("forwardChannelMaxRetries",2,s),this.wa=an("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new uo(s&&s.concurrentRequestLimit),this.Da=new bu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ko.prototype,n.la=8,n.G=1,n.connect=function(s,l,u,f){ve(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Uo(this,null,this.W),Qn(this)};function pi(s){if(Vo(s),s.G==3){var l=s.U++,u=Ye(s.I);if(K(u,"SID",s.K),K(u,"RID",l),K(u,"TYPE","terminate"),ln(s,u),l=new We(s,s.j,l),l.L=2,l.v=$n(Ye(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Bo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),jn(l)}Fo(s)}function Kn(s){s.g&&(yi(s),s.g.cancel(),s.g=null)}function Vo(s){Kn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Xn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Qn(s){if(!ho(s.h)&&!s.s){s.s=!0;var l=s.Ga;dt||mt(),ft||(dt(),ft=!0),Ce.add(l,s),s.B=0}}function ku(s,l){return fo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Jt(w(s.Ga,s,l),Lo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new We(this,this.j,s);let b=this.o;if(this.S&&(b?(b=p(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(I.H=b,b=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=No(this,I,l),u=Ye(this.I),K(u,"RID",s),K(u,"CVER",22),this.D&&K(u,"X-HTTP-Session-Id",this.D),ln(this,u),b&&(this.O?l="headers="+encodeURIComponent(String(Ao(b)))+"&"+l:this.m&&mi(u,this.m,b)),fi(this.h,I),this.Ua&&K(u,"TYPE","init"),this.P?(K(u,"$req",l),K(u,"SID","null"),I.T=!0,ci(I,u,null)):ci(I,u,l),this.G=2}}else this.G==3&&(s?Do(this,s):this.i.length==0||ho(this.h)||Do(this))};function Do(s,l){var u;l?u=l.l:u=s.U++;const f=Ye(s.I);K(f,"SID",s.K),K(f,"RID",u),K(f,"AID",s.T),ln(s,f),s.m&&s.o&&mi(f,s.m,s.o),u=new We(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=No(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),fi(s.h,u),ci(u,f,l)}function ln(s,l){s.H&&te(s.H,function(u,f){K(l,f,u)}),s.l&&go({},function(u,f){K(l,f,u)})}function No(s,l,u){u=Math.min(s.i.length,u);var f=s.l?w(s.l.Na,s.l,s):null;e:{var I=s.i;let b=-1;for(;;){const k=["count="+u];b==-1?0<u?(b=I[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let W=!0;for(let le=0;le<u;le++){let H=I[le].g;const fe=I[le].map;if(H-=b,0>H)b=Math.max(0,I[le].g-100),W=!1;else try{Ru(fe,k,"req"+H+"_")}catch{f&&f(fe)}}if(W){f=k.join("&");break e}}}return s=s.i.splice(0,u),l.D=s,f}function xo(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;dt||mt(),ft||(dt(),ft=!0),Ce.add(l,s),s.v=0}}function gi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Jt(w(s.Fa,s),Lo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Oo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Jt(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),Kn(this),Oo(this))};function yi(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Oo(s){s.g=new We(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Ye(s.qa);K(l,"RID","rpc"),K(l,"SID",s.K),K(l,"AID",s.T),K(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(l,"TO",s.ja),K(l,"TYPE","xmlhttp"),ln(s,l),s.m&&s.o&&mi(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=$n(Ye(l)),u.m=null,u.P=!0,ao(u,s)}n.Za=function(){this.C!=null&&(this.C=null,Kn(this),gi(this),ve(19))};function Xn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Mo(s,l){var u=null;if(s.g==l){Xn(s),yi(s),s.g=null;var f=2}else if(di(s.h,l))u=l.D,mo(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var I=s.B;f=Un(),we(f,new ro(f,u)),Qn(s)}else xo(s);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&ku(s,l)||f==2&&gi(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),I){case 1:_t(s,5);break;case 4:_t(s,10);break;case 3:_t(s,6);break;default:_t(s,2)}}}function Lo(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function _t(s,l){if(s.j.info("Error code "+l),l==2){var u=w(s.fb,s),f=s.Xa;const I=!f;f=new yt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qn(f,"https"),$n(f),I?Iu(f.toString(),u):Au(f.toString(),u)}else ve(2);s.G=0,s.l&&s.l.sa(l),Fo(s),Vo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Fo(s){if(s.G=0,s.ka=[],s.l){const l=po(s.h);(l.length!=0||s.i.length!=0)&&(V(s.ka,l),V(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Uo(s,l,u){var f=u instanceof yt?Ye(u):new yt(u);if(f.g!="")l&&(f.g=l+"."+f.g),zn(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var b=new yt(null);f&&qn(b,f),l&&(b.g=l),I&&zn(b,I),u&&(b.l=u),f=b}return u=s.D,l=s.ya,u&&l&&K(f,u,l),K(f,"VER",s.la),ln(s,f),f}function Bo(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Z(new Hn({eb:u})):new Z(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}n=Yo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jn(){}Jn.prototype.g=function(s,l){return new Ae(s,l)};function Ae(s,l){de.call(this),this.g=new ko(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!F(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new St(this)}P(Ae,de),Ae.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ae.prototype.close=function(){pi(this.g)},Ae.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ri(s),s=u);l.i.push(new fu(l.Ya++,s)),l.G==3&&Qn(l)},Ae.prototype.N=function(){this.g.l=null,delete this.j,pi(this.g),delete this.g,Ae.aa.N.call(this)};function jo(s){si.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const u in l){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}P(jo,si);function qo(){oi.call(this),this.status=1}P(qo,oi);function St(s){this.g=s}P(St,Yo),St.prototype.ua=function(){we(this.g,"a")},St.prototype.ta=function(s){we(this.g,new jo(s))},St.prototype.sa=function(s){we(this.g,new qo)},St.prototype.ra=function(){we(this.g,"b")},Jn.prototype.createWebChannel=Jn.prototype.g,Ae.prototype.send=Ae.prototype.o,Ae.prototype.open=Ae.prototype.m,Ae.prototype.close=Ae.prototype.close,wl=function(){return new Jn},_l=function(){return Un()},yl=pt,Ni={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bn.NO_ERROR=0,Bn.TIMEOUT=8,Bn.HTTP_ERROR=6,sr=Bn,io.COMPLETE="complete",gl=io,Zs.EventType=Qt,Qt.OPEN="a",Qt.CLOSE="b",Qt.ERROR="c",Qt.MESSAGE="d",de.prototype.listen=de.prototype.K,cn=Zs,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,pl=Z}).apply(typeof er<"u"?er:typeof self<"u"?self:typeof window<"u"?window:{});const na="@firebase/firestore",ra="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new ll("@firebase/firestore");function kt(){return Tt.logLevel}function N(n,...e){if(Tt.logLevel<=$.DEBUG){const t=e.map(rs);Tt.debug(`Firestore (${zt}): ${n}`,...t)}}function $e(n,...e){if(Tt.logLevel<=$.ERROR){const t=e.map(rs);Tt.error(`Firestore (${zt}): ${n}`,...t)}}function Mt(n,...e){if(Tt.logLevel<=$.WARN){const t=e.map(rs);Tt.warn(`Firestore (${zt}): ${n}`,...t)}}function rs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,vl(n,r,t)}function vl(n,e,t){let r=`FIRESTORE (${zt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw $e(r),new Error(r)}function G(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||vl(e,i,r)}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class yd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _d{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qe,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qe)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new Tl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new ge(e)}}class wd{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vd{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new wd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ia{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Td{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zh(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ia(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ia(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ed(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function xi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Y(r,i);{const o=El(),a=Id(o.encode(sa(n,t)),o.encode(sa(e,t)));return a!==0?a:Y(r,i)}}t+=r>65535?2:1}return Y(n.length,e.length)}function sa(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Id(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Y(n[t],e[t]);return Y(n.length,e.length)}function Lt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=-62135596800,aa=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*aa);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<oa)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/aa}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-oa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(e){return new L(e)}static min(){return new L(new se(0,0))}static max(){return new L(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="__name__";class Oe{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Oe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Oe.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Y(e.length,t.length)}static compareSegments(e,t){const r=Oe.isNumericId(e),i=Oe.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Oe.extractNumericId(e).compare(Oe.extractNumericId(t)):xi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return et.fromString(e.substring(4,e.length-2))}}class Q extends Oe{construct(e,t,r){return new Q(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const Ad=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends Oe{construct(e,t,r){return new ue(e,t,r)}static isValidIdentifier(e){return Ad.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===la}static keyField(){return new ue([la])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Q.fromString(e))}static fromName(e){return new O(Q.fromString(e).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Q(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=-1;function bd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new nt(i,O.empty(),e)}function Rd(n){return new nt(n.readTime,n.key,vn)}class nt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nt(L.min(),O.empty(),vn)}static max(){return new nt(L.max(),O.empty(),vn)}}function Cd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Sd)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new S((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function kd(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ht(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Cr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=-1;function Sr(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function Vd(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="";function Dd(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ca(e)),e=Nd(n.get(t),e);return ca(e)}function Nd(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Al:t+="";break;default:t+=o}}return t}function ca(n){return n+Al+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ct(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tr(this.root,e,this.comparator,!0)}}class tr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=o??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ce(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(e){return new ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new be([])}unionWith(e){let t=new oe(ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Rl("Invalid base64 string: "+o):o}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const xd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rt(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=xd.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function it(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="server_timestamp",Sl="__type__",Pl="__previous_value__",kl="__local_write_time__";function ss(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sl])===null||t===void 0?void 0:t.stringValue)===Cl}function Pr(n){const e=n.mapValue.fields[Pl];return ss(e)?Pr(e):e}function Tn(n){const e=rt(n.mapValue.fields[kl].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,r,i,o,a,c,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const gr="(default)";class En{constructor(e,t){this.projectId=e,this.database=t||gr}static empty(){return new En("","")}get isDefaultDatabase(){return this.database===gr}isEqual(e){return e instanceof En&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="__type__",Md="__max__",nr={mapValue:{}},Dl="__vector__",yr="value";function st(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ss(n)?4:Fd(n)?9007199254740991:Ld(n)?10:11:M(28295,{value:n})}function Ue(n,e){if(n===e)return!0;const t=st(n);if(t!==st(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tn(n).isEqual(Tn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=rt(i.timestampValue),c=rt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return it(i.bytesValue).isEqual(it(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ee(i.geoPointValue.latitude)===ee(o.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ee(i.integerValue)===ee(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ee(i.doubleValue),c=ee(o.doubleValue);return a===c?pr(a)===pr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Lt(n.arrayValue.values||[],e.arrayValue.values||[],Ue);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ua(a)!==ua(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ue(a[h],c[h])))return!1;return!0}(n,e);default:return M(52216,{left:n})}}function In(n,e){return(n.values||[]).find(t=>Ue(t,e))!==void 0}function Ft(n,e){if(n===e)return 0;const t=st(n),r=st(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=ee(o.integerValue||o.doubleValue),h=ee(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return da(n.timestampValue,e.timestampValue);case 4:return da(Tn(n),Tn(e));case 5:return xi(n.stringValue,e.stringValue);case 6:return function(o,a){const c=it(o),h=it(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=Y(c[d],h[d]);if(m!==0)return m}return Y(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=Y(ee(o.latitude),ee(a.latitude));return c!==0?c:Y(ee(o.longitude),ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fa(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,h,d,m;const _=o.fields||{},w=a.fields||{},R=(c=_[yr])===null||c===void 0?void 0:c.arrayValue,P=(h=w[yr])===null||h===void 0?void 0:h.arrayValue,D=Y(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:fa(R,P)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let _=0;_<h.length&&_<m.length;++_){const w=xi(h[_],m[_]);if(w!==0)return w;const R=Ft(c[h[_]],d[m[_]]);if(R!==0)return R}return Y(h.length,m.length)}(n.mapValue,e.mapValue);default:throw M(23264,{Pe:t})}}function da(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=rt(n),r=rt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function fa(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Ft(t[i],r[i]);if(o)return o}return Y(t.length,r.length)}function Ut(n){return Oi(n)}function Oi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return it(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Oi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Oi(t.fields[a])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function or(n){switch(st(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pr(n);return e?16+or(e):16;case 5:return 2*n.stringValue.length;case 6:return it(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+or(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ct(r.fields,(o,a)=>{i+=o.length+or(a)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function ma(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mi(n){return!!n&&"integerValue"in n}function os(n){return!!n&&"arrayValue"in n}function pa(n){return!!n&&"nullValue"in n}function ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ar(n){return!!n&&"mapValue"in n}function Ld(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Vl])===null||t===void 0?void 0:t.stringValue)===Dl}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ct(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=mn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Fd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Md}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ar(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mn(t)}setAll(e){let t=ue.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=mn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());ar(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ar(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ct(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ie(mn(this.value))}}function Nl(n){const e=[];return ct(n.fields,(t,r)=>{const i=new ue([t]);if(ar(r)){const o=Nl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,i,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ye(e,0,L.min(),L.min(),L.min(),Ie.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,L.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,L.min(),L.min(),Ie.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,L.min(),L.min(),Ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this.position=e,this.inclusive=t}}function ya(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Ft(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _a(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ue(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ud(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{}class re extends xl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Yd(e,t,r):t==="array-contains"?new zd(e,r):t==="in"?new $d(e,r):t==="not-in"?new Hd(e,r):t==="array-contains-any"?new Gd(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jd(e,r):new qd(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ft(t,this.value)):t!==null&&st(this.value)===st(t)&&this.matchesComparison(Ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends xl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ne(e,t)}matches(e){return Ol(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ol(n){return n.op==="and"}function Ml(n){return Bd(n)&&Ol(n)}function Bd(n){for(const e of n.filters)if(e instanceof Ne)return!1;return!0}function Li(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Ut(n.value);if(Ml(n))return n.filters.map(e=>Li(e)).join(",");{const e=n.filters.map(t=>Li(t)).join(",");return`${n.op}(${e})`}}function Ll(n,e){return n instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.field.isEqual(i.field)&&Ue(r.value,i.value)}(n,e):n instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&Ll(a,i.filters[c]),!0):!1}(n,e):void M(19439)}function Fl(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${Ut(t.value)}`}(n):n instanceof Ne?function(t){return t.op.toString()+" {"+t.getFilters().map(Fl).join(" ,")+"}"}(n):"Filter"}class Yd extends re{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class jd extends re{constructor(e,t){super(e,"in",t),this.keys=Ul("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qd extends re{constructor(e,t){super(e,"not-in",t),this.keys=Ul("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ul(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class zd extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return os(t)&&In(t.arrayValue,this.value)}}class $d extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&In(this.value.arrayValue,t)}}class Hd extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(In(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!In(this.value.arrayValue,t)}}class Gd extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!os(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>In(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function wa(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Wd(n,e,t,r,i,o,a)}function as(n){const e=U(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Li(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Sr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ut(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ut(r)).join(",")),e.Ie=t}return e.Ie}function ls(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ud(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ll(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_a(n.startAt,e.startAt)&&_a(n.endAt,e.endAt)}function Fi(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Kd(n,e,t,r,i,o,a,c){return new Gt(n,e,t,r,i,o,a,c)}function kr(n){return new Gt(n)}function va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bl(n){return n.collectionGroup!==null}function pn(n){const e=U(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new oe(ue.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new An(o,r))}),t.has(ue.keyField().canonicalString())||e.Ee.push(new An(ue.keyField(),r))}return e.Ee}function Me(n){const e=U(n);return e.de||(e.de=Qd(e,pn(n))),e.de}function Qd(n,e){if(n.limitType==="F")return wa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new An(i.field,o)});const t=n.endAt?new _r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _r(n.startAt.position,n.startAt.inclusive):null;return wa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ui(n,e){const t=n.filters.concat([e]);return new Gt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Bi(n,e,t){return new Gt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vr(n,e){return ls(Me(n),Me(e))&&n.limitType===e.limitType}function Yl(n){return`${as(Me(n))}|lt:${n.limitType}`}function Vt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Fl(i)).join(", ")}]`),Sr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ut(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ut(i)).join(",")),`Target(${r})`}(Me(n))}; limitType=${n.limitType})`}function Dr(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of pn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,h){const d=ya(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,pn(r),i)||r.endAt&&!function(a,c,h){const d=ya(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,pn(r),i))}(n,e)}function Xd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jl(n){return(e,t)=>{let r=!1;for(const i of pn(n)){const o=Jd(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Jd(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ft(h,d):M(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ct(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return bl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new J(O.comparator);function He(){return Zd}const ql=new J(O.comparator);function un(...n){let e=ql;for(const t of n)e=e.insert(t.key,t);return e}function zl(n){let e=ql;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vt(){return gn()}function $l(){return gn()}function gn(){return new It(n=>n.toString(),(n,e)=>n.isEqual(e))}const ef=new J(O.comparator),tf=new oe(O.comparator);function q(...n){let e=tf;for(const t of n)e=e.add(t);return e}const nf=new oe(Y);function rf(){return nf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(e)?"-0":e}}function Hl(n){return{integerValue:""+n}}function Gl(n,e){return Vd(e)?Hl(e):cs(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this._=void 0}}function sf(n,e,t){return n instanceof wr?function(i,o){const a={fields:{[Sl]:{stringValue:Cl},[kl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ss(o)&&(o=Pr(o)),o&&(a.fields[Pl]=o),{mapValue:a}}(t,e):n instanceof bn?Kl(n,e):n instanceof Rn?Ql(n,e):function(i,o){const a=Wl(i,o),c=Ta(a)+Ta(i.Re);return Mi(a)&&Mi(i.Re)?Hl(c):cs(i.serializer,c)}(n,e)}function of(n,e,t){return n instanceof bn?Kl(n,e):n instanceof Rn?Ql(n,e):t}function Wl(n,e){return n instanceof Cn?function(r){return Mi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class wr extends Nr{}class bn extends Nr{constructor(e){super(),this.elements=e}}function Kl(n,e){const t=Xl(e);for(const r of n.elements)t.some(i=>Ue(i,r))||t.push(r);return{arrayValue:{values:t}}}class Rn extends Nr{constructor(e){super(),this.elements=e}}function Ql(n,e){let t=Xl(e);for(const r of n.elements)t=t.filter(i=>!Ue(i,r));return{arrayValue:{values:t}}}class Cn extends Nr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ta(n){return ee(n.integerValue||n.doubleValue)}function Xl(n){return os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t){this.field=e,this.transform=t}}function lf(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof bn&&i instanceof bn||r instanceof Rn&&i instanceof Rn?Lt(r.elements,i.elements,Ue):r instanceof Cn&&i instanceof Cn?Ue(r.Re,i.Re):r instanceof wr&&i instanceof wr}(n.transform,e.transform)}class cf{constructor(e,t){this.version=e,this.transformResults=t}}class De{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xr{}function Jl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new us(n.key,De.none()):new Pn(n.key,n.data,De.none());{const t=n.data,r=Ie.empty();let i=new oe(ue.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ut(n.key,r,new be(i.toArray()),De.none())}}function uf(n,e,t){n instanceof Pn?function(i,o,a){const c=i.value.clone(),h=Ia(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof ut?function(i,o,a){if(!lr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ia(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Zl(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function yn(n,e,t,r){return n instanceof Pn?function(o,a,c,h){if(!lr(o.precondition,a))return c;const d=o.value.clone(),m=Aa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof ut?function(o,a,c,h){if(!lr(o.precondition,a))return c;const d=Aa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Zl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(o,a,c){return lr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function hf(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Wl(r.transform,i||null);o!=null&&(t===null&&(t=Ie.empty()),t.set(r.field,o))}return t||null}function Ea(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Lt(r,i,(o,a)=>lf(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pn extends xr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ut extends xr{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Zl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ia(n,e,t){const r=new Map;G(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,of(a,c,t[i]))}return r}function Aa(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,sf(o,a,e))}return r}class us extends xr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class df extends xr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&uf(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$l();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;const h=Jl(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&Lt(this.mutations,e.mutations,(t,r)=>Ea(t,r))&&Lt(this.baseMutations,e.baseMutations,(t,r)=>Ea(t,r))}}class hs{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return ef}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new hs(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne,z;function gf(n){switch(n){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function ec(n){if(n===void 0)return $e("GRPC error has no .code"),C.UNKNOWN;switch(n){case ne.OK:return C.OK;case ne.CANCELLED:return C.CANCELLED;case ne.UNKNOWN:return C.UNKNOWN;case ne.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ne.INTERNAL:return C.INTERNAL;case ne.UNAVAILABLE:return C.UNAVAILABLE;case ne.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ne.NOT_FOUND:return C.NOT_FOUND;case ne.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ne.ABORTED:return C.ABORTED;case ne.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ne.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:n})}}(z=ne||(ne={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new et([4294967295,4294967295],0);function ba(n){const e=El().encode(n),t=new ml;return t.update(e),new Uint8Array(t.digest())}function Ra(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new et([t,r],0),new et([i,o],0)]}class ds{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hn(`Invalid padding: ${t}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=et.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(et.fromNumber(r)));return i.compare(yf)===1&&(i=new et([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=ba(e),[r,i]=Ra(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new ds(o,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.pe===0)return;const t=ba(e),[r,i]=Ra(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,kn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Or(L.min(),i,new J(Y),He(),q())}}class kn{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new kn(r,t,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class tc{constructor(e,t){this.targetId=e,this.Ce=t}}class nc{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ca{constructor(){this.Fe=0,this.Me=Sa(),this.xe=he.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=q(),t=q(),r=q();return this.Me.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:o})}}),new kn(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Sa()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,G(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class _f{constructor(e){this.ze=e,this.je=new Map,this.He=He(),this.Je=rr(),this.Ye=rr(),this.Ze=new J(Y)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const o=i.target;if(Fi(o))if(r===0){const a=new O(o.path);this.tt(t,a,ye.newNoDocument(a,L.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const c=this.ct(e),h=c?this.lt(c,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,c;try{a=it(r).toUint8Array()}catch(h){if(h instanceof Rl)return Mt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ds(a,i,o)}catch(h){return Mt(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,o,null),i++)}),i}It(e){const t=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&Fi(c.target)){const h=new O(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,ye.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let r=q();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const i=new Or(e,t,this.Ze,this.He,r);return this.He=He(),this.Je=rr(),this.Ye=rr(),this.Ze=new J(Y),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Ca,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new oe(Y),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new oe(Y),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ca),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function rr(){return new J(O.comparator)}function Sa(){return new J(O.comparator)}const wf={asc:"ASCENDING",desc:"DESCENDING"},vf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tf={and:"AND",or:"OR"};class Ef{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yi(n,e){return n.useProto3Json||Sr(e)?e:{value:e}}function vr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function If(n,e){return vr(n,e.toTimestamp())}function Le(n){return G(!!n,49232),L.fromTimestamp(function(t){const r=rt(t);return new se(r.seconds,r.nanos)}(n))}function fs(n,e){return ji(n,e).canonicalString()}function ji(n,e){const t=function(i){return new Q(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ic(n){const e=Q.fromString(n);return G(cc(e),10190,{key:e.toString()}),e}function qi(n,e){return fs(n.databaseId,e.path)}function Ii(n,e){const t=ic(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(oc(t))}function sc(n,e){return fs(n.databaseId,e)}function Af(n){const e=ic(n);return e.length===4?Q.emptyPath():oc(e)}function zi(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function oc(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pa(n,e,t){return{name:qi(n,e),fields:t.value.mapValue.fields}}function bf(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(G(m===void 0||typeof m=="string",58123),he.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),he.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?C.UNKNOWN:ec(d.code);return new x(m,d.message||"")}(a);t=new nc(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ii(n,r.document.name),o=Le(r.document.updateTime),a=r.document.createTime?Le(r.document.createTime):L.min(),c=new Ie({mapValue:{fields:r.document.fields}}),h=ye.newFoundDocument(i,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new cr(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ii(n,r.document),o=r.readTime?Le(r.readTime):L.min(),a=ye.newNoDocument(i,o),c=r.removedTargetIds||[];t=new cr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ii(n,r.document),o=r.removedTargetIds||[];t=new cr([],o,i,null)}else{if(!("filter"in e))return M(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new pf(i,o),c=r.targetId;t=new tc(c,a)}}return t}function Rf(n,e){let t;if(e instanceof Pn)t={update:Pa(n,e.key,e.value)};else if(e instanceof us)t={delete:qi(n,e.key)};else if(e instanceof ut)t={update:Pa(n,e.key,e.data),updateMask:Of(e.fieldMask)};else{if(!(e instanceof df))return M(16599,{ft:e.type});t={verify:qi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cn)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw M(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:If(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,e.precondition)),t}function Cf(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?Le(i.updateTime):Le(o);return a.isEqual(L.min())&&(a=Le(o)),new cf(a,i.transformResults||[])}(t,e))):[]}function Sf(n,e){return{documents:[sc(n,e.path)]}}function Pf(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=sc(n,i);const o=function(d){if(d.length!==0)return lc(Ne.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Dt(w.field),direction:Df(w.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Yi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:i}}function kf(n){let e=Af(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(_){const w=ac(_);return w instanceof Ne&&Ml(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(w=>function(P){return new An(Nt(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(_){let w;return w=typeof _=="object"?_.value:_,Sr(w)?null:w}(t.limit));let h=null;t.startAt&&(h=function(_){const w=!!_.before,R=_.values||[];return new _r(R,w)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const w=!_.before,R=_.values||[];return new _r(R,w)}(t.endAt)),Kd(e,i,a,o,c,"F",h,d)}function Vf(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ac(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nt(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nt(t.unaryFilter.field);return re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Nt(t.unaryFilter.field);return re.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nt(t.unaryFilter.field);return re.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(t){return re.create(Nt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ne.create(t.compositeFilter.filters.map(r=>ac(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(n):M(30097,{filter:n})}function Df(n){return wf[n]}function Nf(n){return vf[n]}function xf(n){return Tf[n]}function Dt(n){return{fieldPath:n.canonicalString()}}function Nt(n){return ue.fromServerFormat(n.fieldPath)}function lc(n){return n instanceof re?function(t){if(t.op==="=="){if(ga(t.value))return{unaryFilter:{field:Dt(t.field),op:"IS_NAN"}};if(pa(t.value))return{unaryFilter:{field:Dt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ga(t.value))return{unaryFilter:{field:Dt(t.field),op:"IS_NOT_NAN"}};if(pa(t.value))return{unaryFilter:{field:Dt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dt(t.field),op:Nf(t.op),value:t.value}}}(n):n instanceof Ne?function(t){const r=t.getFilters().map(i=>lc(i));return r.length===1?r[0]:{compositeFilter:{op:xf(t.op),filters:r}}}(n):M(54877,{filter:n})}function Of(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,r,i,o=L.min(),a=L.min(),c=he.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.wt=e}}function Lf(n){const e=kf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.Cn=new Uf}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(nt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(nt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Uf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new oe(Q.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uc=41943040;class Ee{static withCacheSize(e){return new Ee(e,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(uc,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Bt(0)}static lr(){return new Bt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="LruGarbageCollector",Bf=1048576;function Da([n,e],[t,r]){const i=Y(n,t);return i===0?Y(e,r):i}class Yf{constructor(e){this.Er=e,this.buffer=new oe(Da),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Da(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jf{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){N(Va,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ht(t)?N(Va,"Ignoring IndexedDB error during garbage collection: ",t):await $t(t)}await this.mr(3e5)})}}class qf{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Cr.le);const r=new Yf(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(ka)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ka):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,c=Date.now(),this.removeTargets(e,r,t))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),kt()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:_})))}}function zf(n,e){return new qf(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.changes=new It(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&yn(r.mutation,i,be.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=q()){const i=vt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=un();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,q()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let o=He();const a=gn(),c=function(){return gn()}();return t.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ut)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),yn(m.mutation,d,m.mutation.getFieldMask(),se.now())):a.set(d.key,be.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var _;return c.set(d,new Hf(m,(_=a.get(d))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=gn();let i=new J((a,c)=>a-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||be.empty();m=c.applyToLocalView(d,m),r.set(h,m);const _=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,_)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,_=$l();m.forEach(w=>{if(!o.has(w)){const R=Jl(t.get(w),r.get(w));R!==null&&_.set(w,R),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):S.resolve(vt());let c=vn,h=o;return a.next(d=>S.forEach(d,(m,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,q())).next(m=>({batchId:c,changes:zl(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let i=un();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=un();return this.indexManager.getCollectionParents(e,o).next(c=>S.forEach(c,h=>{const d=function(_,w){return new Gt(w,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((_,w)=>{a=a.insert(_,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ye.newInvalidDocument(m)))});let c=un();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&yn(m.mutation,d,be.empty(),se.now()),Dr(t,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return S.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Le(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:Lf(i.bundledQuery),readTime:Le(i.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.overlays=new J(O.comparator),this.Qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vt();return S.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=vt(),o=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new J((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=vt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=vt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return S.resolve(c)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new mf(t,r));let o=this.Qr.get(t);o===void 0&&(o=q(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.$r=new oe(ae.Ur),this.Kr=new oe(ae.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new ae(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new ae(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new O(new Q([])),r=new ae(t,e),i=new ae(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new O(new Q([])),r=new ae(t,e),i=new ae(t,e+1);let o=q();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ae(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return O.comparator(e.key,t.key)||Y(e.Zr,t.Zr)}static Wr(e,t){return Y(e.Zr,t.Zr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new oe(ae.Ur)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ff(o,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Xr=this.Xr.add(new ae(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?is:this.nr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],a=>{const c=this.ei(a.Zr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(Y);return t.forEach(i=>{const o=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],c=>{r=r.add(c.Zr)})}),S.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ae(new O(o),0);let c=new oe(Y);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Zr)),!0)},a),S.resolve(this.ni(c))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return S.forEach(t.mutations,i=>{const o=new ae(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new ae(t,0),i=this.Xr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.ii=e,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=He();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ye.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=He();const a=t.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Cd(Rd(m),r)<=0||(i.has(m.key)||Dr(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M(9500)}si(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zf(this)}getSize(e){return S.resolve(this.size)}}class Zf extends $f{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.persistence=e,this.oi=new It(t=>as(t),ls),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new ms,this.targetCount=0,this.ui=Bt.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),S.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Bt(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Tr(t),S.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.ci={},this.overlays={},this.li=new Cr(0),this.hi=!1,this.hi=!0,this.Pi=new Qf,this.referenceDelegate=e(this),this.Ti=new em(this),this.indexManager=new Ff,this.remoteDocumentCache=function(i){return new Jf(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Mf(t),this.Ei=new Wf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Kf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Xf(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new tm(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(e,t){return S.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class tm extends Pd{constructor(e){super(),this.currentSequenceNumber=e}}class ps{constructor(e){this.persistence=e,this.Vi=new ms,this.mi=null}static fi(e){return new ps(e)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.gi,r=>{const i=O.fromPath(r);return this.pi(e,i).next(o=>{o||t.removeEntry(i,L.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return S.or([()=>S.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Tr{constructor(e,t){this.persistence=e,this.yi=new It(r=>Dd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zf(this,t)}static fi(e,t){return new Tr(e,t)}di(){}Ai(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return S.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(o=>o?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),S.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=or(e.data.value)),t}Dr(e,t,r){return S.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=q(),i=q();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new gs(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Qu()?8:kd(Wu())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new nm;return this.Ss(e,t,a).next(c=>{if(o.result=c,this.fs)return this.Ds(e,t,a,c.size)})}).next(()=>o.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(kt()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Vt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),S.resolve()):(kt()<=$.DEBUG&&N("QueryEngine","Query:",Vt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(kt()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Vt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):S.resolve())}ws(e,t){if(va(t))return S.resolve(null);let r=Me(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Bi(t,null,"F"),r=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=q(...o);return this.ys.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.vs(t,c);return this.Cs(t,d,a,h.readTime)?this.ws(e,Bi(t,null,"F")):this.Fs(e,d,t,h)}))})))}bs(e,t,r,i){return va(t)||i.isEqual(L.min())?S.resolve(null):this.ys.getDocuments(e,r).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,r,i)?S.resolve(null):(kt()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vt(t)),this.Fs(e,a,t,bd(i,vn)).next(c=>c))})}vs(e,t){let r=new oe(jl(e));return t.forEach((i,o)=>{Dr(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return kt()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Vt(t)),this.ys.getDocumentsMatchingQuery(e,t,nt.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="LocalStore",im=3e8;class sm{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new J(Y),this.Os=new It(o=>as(o),ls),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function om(n,e,t,r){return new sm(n,e,t,r)}async function dc(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=q();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function am(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const _=d.batch,w=_.keys();let R=S.resolve();return w.forEach(P=>{R=R.next(()=>m.getEntry(h,P)).next(D=>{const V=d.docVersions.get(P);G(V!==null,48541),D.version.compareTo(V)<0&&(_.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(h,_))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function fc(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function lm(n,e){const t=U(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const c=[];e.targetChanges.forEach((m,_)=>{const w=i.get(_);if(!w)return;c.push(t.Ti.removeMatchingKeys(o,m.removedDocuments,_).next(()=>t.Ti.addMatchingKeys(o,m.addedDocuments,_)));let R=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(he.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),i=i.insert(_,R),function(D,V,j){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=im?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,R,m)&&c.push(t.Ti.updateTargetData(o,R))});let h=He(),d=q();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(cm(o,a,e.documentUpdates).next(m=>{h=m.qs,d=m.Qs})),!r.isEqual(L.min())){const m=t.Ti.getLastRemoteSnapshotVersion(o).next(_=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.xs=i,o))}function cm(n,e,t){let r=q(),i=q();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=He();return t.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):N(ys,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:i}})}function um(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=is),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hm(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(o=>o?(i=o,S.resolve(i)):t.Ti.allocateTargetId(r).next(a=>(i=new Xe(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function $i(n,e,t){const r=U(n),i=r.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ht(a))throw a;N(ys,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function Na(n,e,t){const r=U(n);let i=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const _=U(h),w=_.Os.get(m);return w!==void 0?S.resolve(_.xs.get(w)):_.Ti.getTargetData(d,m)}(r,a,Me(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?i:L.min(),t?o:q())).next(c=>(dm(r,Xd(e),c),{documents:c,$s:o})))}function dm(n,e,t){let r=n.Ns.get(e)||L.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(e,r)}class xa{constructor(){this.activeTargetIds=rf()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fm{constructor(){this.xo=new xa,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new xa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="ConnectivityMonitor";class Ma{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(Oa,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){N(Oa,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir=null;function Hi(){return ir===null?ir=function(){return 268435456+Math.round(2147483648*Math.random())}():ir++,"0x"+ir.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="RestConnection",pm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gm{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===gr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,o){const a=Hi(),c=this.jo(e,t.toUriEncodedString());N(Ai,`Sending RPC '${e}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:d}=new URL(c),m=ts(d);return this.Jo(e,c,h,r,m).then(_=>(N(Ai,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Mt(Ai,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",r),_})}Yo(e,t,r,i,o,a){return this.zo(e,t,r,i,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}jo(e,t){const r=pm[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class _m extends gm{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=Hi();return new Promise((c,h)=>{const d=new pl;d.setWithCredentials(!0),d.listenOnce(gl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case sr.NO_ERROR:const _=d.getResponseJson();N(pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case sr.TIMEOUT:N(pe,`RPC '${e}' ${a} timed out`),h(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const w=d.getStatus();if(N(pe,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const D=function(j){const F=j.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(F)>=0?F:C.UNKNOWN}(P.status);h(new x(D,P.message))}else h(new x(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new x(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{N(pe,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(i);N(pe,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",m,r,15)})}I_(e,t,r){const i=Hi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=wl(),c=_l(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(pe,`Creating RPC '${e}' stream ${i}: ${m}`,h);const _=a.createWebChannel(m,h);this.E_(_);let w=!1,R=!1;const P=new ym({Zo:V=>{R?N(pe,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(w||(N(pe,`Opening RPC '${e}' stream ${i} transport.`),_.open(),w=!0),N(pe,`RPC '${e}' stream ${i} sending:`,V),_.send(V))},Xo:()=>_.close()}),D=(V,j,F)=>{V.listen(j,B=>{try{F(B)}catch(X){setTimeout(()=>{throw X},0)}})};return D(_,cn.EventType.OPEN,()=>{R||(N(pe,`RPC '${e}' stream ${i} transport opened.`),P.__())}),D(_,cn.EventType.CLOSE,()=>{R||(R=!0,N(pe,`RPC '${e}' stream ${i} transport closed`),P.u_(),this.d_(_))}),D(_,cn.EventType.ERROR,V=>{R||(R=!0,Mt(pe,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),P.u_(new x(C.UNAVAILABLE,"The operation could not be completed")))}),D(_,cn.EventType.MESSAGE,V=>{var j;if(!R){const F=V.data[0];G(!!F,16349);const B=F,X=(B==null?void 0:B.error)||((j=B[0])===null||j===void 0?void 0:j.error);if(X){N(pe,`RPC '${e}' stream ${i} received error:`,X);const Re=X.status;let te=function(g){const v=ne[g];if(v!==void 0)return ec(v)}(Re),E=X.message;te===void 0&&(te=C.INTERNAL,E="Unknown error status: "+Re+" with message "+X.message),R=!0,P.u_(new x(te,E)),_.close()}else N(pe,`RPC '${e}' stream ${i} received:`,F),P.c_(F)}}),D(c,yl.STAT_EVENT,V=>{V.stat===Ni.PROXY?N(pe,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Ni.NOPROXY&&N(pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function bi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return new Ef(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,r=1e3,i=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=i,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="PersistentStream";class pc{constructor(e,t,r,i,o,a,c,h){this.xi=e,this.S_=r,this.D_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new mc(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?($e(t.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===t&&this.z_(r,i)},r=>{e(()=>{const i=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return N(La,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(N(La,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wm extends pc{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=bf(this.serializer,e),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Le(a.readTime):L.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=zi(this.serializer),t.addTarget=function(o,a){let c;const h=a.target;if(c=Fi(h)?{documents:Sf(o,h)}:{query:Pf(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=rc(o,a.resumeToken);const d=Yi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=vr(o,a.snapshotVersion.toTimestamp());const d=Yi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Vf(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=zi(this.serializer),t.removeTarget=e,this.Q_(t)}}class vm extends pc{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Cf(e.writeResults,e.commitTime),r=Le(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=zi(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Rf(this.serializer,r))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{}class Em extends Tm{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,ji(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}Yo(e,t,r,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(e,ji(t,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Im{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?($e(t),this.ua=!1):N("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="RemoteStore";class Am{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{At(this)&&(N(Et,"Restarting streams for network reachability change."),await async function(h){const d=U(h);d.da.add(4),await Vn(d),d.Va.set("Unknown"),d.da.delete(4),await Lr(d)}(this))})}),this.Va=new Im(r,i)}}async function Lr(n){if(At(n))for(const e of n.Aa)await e(!0)}async function Vn(n){for(const e of n.Aa)await e(!1)}function gc(n,e){const t=U(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Ts(t)?vs(t):Wt(t).N_()&&ws(t,e))}function _s(n,e){const t=U(n),r=Wt(t);t.Ea.delete(e),r.N_()&&yc(t,e),t.Ea.size===0&&(r.N_()?r.k_():At(t)&&t.Va.set("Unknown"))}function ws(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(L.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wt(n).Z_(e)}function yc(n,e){n.ma.Ke(e),Wt(n).X_(e)}function vs(n){n.ma=new _f({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Wt(n).start(),n.Va.ca()}function Ts(n){return At(n)&&!Wt(n).O_()&&n.Ea.size>0}function At(n){return U(n).da.size===0}function _c(n){n.ma=void 0}async function bm(n){n.Va.set("Online")}async function Rm(n){n.Ea.forEach((e,t)=>{ws(n,e)})}async function Cm(n,e){_c(n),Ts(n)?(n.Va.Pa(e),vs(n)):n.Va.set("Unknown")}async function Sm(n,e,t){if(n.Va.set("Online"),e instanceof nc&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ea.delete(c),i.ma.removeTarget(c))}(n,e)}catch(r){N(Et,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Er(n,r)}else if(e instanceof cr?n.ma.Xe(e):e instanceof tc?n.ma.ot(e):n.ma.nt(e),!t.isEqual(L.min()))try{const r=await fc(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.ma.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(d);m&&o.Ea.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(he.EMPTY_BYTE_STRING,m.snapshotVersion)),yc(o,h);const _=new Xe(m.target,h,d,m.sequenceNumber);ws(o,_)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N(Et,"Failed to raise snapshot:",r),await Er(n,r)}}async function Er(n,e,t){if(!Ht(e))throw e;n.da.add(1),await Vn(n),n.Va.set("Offline"),t||(t=()=>fc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(Et,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Lr(n)})}function wc(n,e){return e().catch(t=>Er(n,t,e))}async function Fr(n){const e=U(n),t=ot(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:is;for(;Pm(e);)try{const i=await um(e.localStore,r);if(i===null){e.Ia.length===0&&t.k_();break}r=i.batchId,km(e,i)}catch(i){await Er(e,i)}vc(e)&&Tc(e)}function Pm(n){return At(n)&&n.Ia.length<10}function km(n,e){n.Ia.push(e);const t=ot(n);t.N_()&&t.ea&&t.ta(e.mutations)}function vc(n){return At(n)&&!ot(n).O_()&&n.Ia.length>0}function Tc(n){ot(n).start()}async function Vm(n){ot(n).ia()}async function Dm(n){const e=ot(n);for(const t of n.Ia)e.ta(t.mutations)}async function Nm(n,e,t){const r=n.Ia.shift(),i=hs.from(r,e,t);await wc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Fr(n)}async function xm(n,e){e&&ot(n).ea&&await async function(r,i){if(function(a){return gf(a)&&a!==C.ABORTED}(i.code)){const o=r.Ia.shift();ot(r).L_(),await wc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Fr(r)}}(n,e),vc(n)&&Tc(n)}async function Fa(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),N(Et,"RemoteStore received new credentials");const r=At(t);t.da.add(3),await Vn(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Lr(t)}async function Om(n,e){const t=U(n);e?(t.da.delete(2),await Lr(t)):e||(t.da.add(2),await Vn(t),t.Va.set("Unknown"))}function Wt(n){return n.fa||(n.fa=function(t,r,i){const o=U(t);return o.oa(),new wm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:bm.bind(null,n),n_:Rm.bind(null,n),i_:Cm.bind(null,n),Y_:Sm.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Ts(n)?vs(n):n.Va.set("Unknown")):(await n.fa.stop(),_c(n))})),n.fa}function ot(n){return n.ga||(n.ga=function(t,r,i){const o=U(t);return o.oa(),new vm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Vm.bind(null,n),i_:xm.bind(null,n),na:Dm.bind(null,n),ra:Nm.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Fr(n)):(await n.ga.stop(),n.Ia.length>0&&(N(Et,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,c=new Es(e,t,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Is(n,e){if($e("AsyncQueue",`${e}: ${n}`),Ht(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{static emptySet(e){return new Ot(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=un(),this.sortedSet=new J(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ot;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.pa=new J(O.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yt{constructor(e,t,r,i,o,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Yt(e,t,Ot.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class Lm{constructor(){this.queries=Ba(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=U(t),o=i.queries;i.queries=Ba(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Ba(){return new It(n=>Yl(n),Vr)}async function As(n,e){const t=U(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Da()&&e.va()&&(r=2):(o=new Mm,r=e.va()?0:1);try{switch(r){case 0:o.ba=await t.onListen(i,!0);break;case 1:o.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Is(a,`Initialization of query '${Vt(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&Rs(t)}async function bs(n,e){const t=U(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=e.va()?0:1:!o.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Fm(n,e){const t=U(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const c of a.Sa)c.Ma(i)&&(r=!0);a.ba=i}}r&&Rs(t)}function Um(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);r.queries.delete(e)}function Rs(n){n.Ca.forEach(e=>{e.next()})}var Gi,Ya;(Ya=Gi||(Gi={})).xa="default",Ya.Cache="cache";class Cs{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Yt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=Yt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Gi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.key=e}}class Ic{constructor(e){this.key=e}}class Bm{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.Za=jl(e),this.Xa=new Ot(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new Ua,i=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,_)=>{const w=i.get(m),R=Dr(this.query,_)?_:null,P=!!w&&this.mutatedKeys.has(w.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;w&&R?w.data.isEqual(R.data)?P!==D&&(r.track({type:3,doc:R}),V=!0):this.ru(w,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Za(R,h)>0||d&&this.Za(R,d)<0)&&(c=!0)):!w&&R?(r.track({type:0,doc:R}),V=!0):w&&!R&&(r.track({type:1,doc:w}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:c,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((m,_)=>function(R,P){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:V})}};return D(R)-D(P)}(m.type,_.type)||this.Za(m.doc,_.doc)),this.iu(r),i=i!=null&&i;const c=t&&!i?this.su():[],h=this.Ya.size===0&&this.current&&!i?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new Yt(this.query,e.Xa,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ua,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=q(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Ic(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Ec(r))}),t}au(e){this.Ha=e.$s,this.Ya=q();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return Yt.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Ss="SyncEngine";class Ym{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class jm{constructor(e){this.key=e,this.cu=!1}}class qm{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new It(c=>Yl(c),Vr),this.Pu=new Map,this.Tu=new Set,this.Iu=new J(O.comparator),this.Eu=new Map,this.du=new ms,this.Au={},this.Ru=new Map,this.Vu=Bt.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function zm(n,e,t=!0){const r=Pc(n);let i;const o=r.hu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.uu()):i=await Ac(r,e,t,!0),i}async function $m(n,e){const t=Pc(n);await Ac(t,e,!0,!1)}async function Ac(n,e,t,r){const i=await hm(n.localStore,Me(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await Hm(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&gc(n.remoteStore,i),c}async function Hm(n,e,t,r,i){n.fu=(_,w,R)=>async function(D,V,j,F){let B=V.view.tu(j);B.Cs&&(B=await Na(D.localStore,V.query,!1).then(({documents:E})=>V.view.tu(E,B)));const X=F&&F.targetChanges.get(V.targetId),Re=F&&F.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(B,D.isPrimaryClient,X,Re);return qa(D,V.targetId,te.ou),te.snapshot}(n,_,w,R);const o=await Na(n.localStore,e,!0),a=new Bm(e,o.$s),c=a.tu(o.documents),h=kn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,h);qa(n,t,d.ou);const m=new Ym(e,t,a);return n.hu.set(e,m),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),d.snapshot}async function Gm(n,e,t){const r=U(n),i=r.hu.get(e),o=r.Pu.get(i.targetId);if(o.length>1)return r.Pu.set(i.targetId,o.filter(a=>!Vr(a,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $i(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&_s(r.remoteStore,i.targetId),Wi(r,i.targetId)}).catch($t)):(Wi(r,i.targetId),await $i(r.localStore,i.targetId,!0))}async function Wm(n,e){const t=U(n),r=t.hu.get(e),i=t.Pu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_s(t.remoteStore,r.targetId))}async function Km(n,e,t){const r=np(n);try{const i=await function(a,c){const h=U(a),d=se.now(),m=c.reduce((R,P)=>R.add(P.key),q());let _,w;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=He(),D=q();return h.Bs.getEntries(R,m).next(V=>{P=V,P.forEach((j,F)=>{F.isValidDocument()||(D=D.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,P)).next(V=>{_=V;const j=[];for(const F of c){const B=hf(F,_.get(F.key).overlayedDocument);B!=null&&j.push(new ut(F.key,B,Nl(B.value.mapValue),De.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,j,c)}).next(V=>{w=V;const j=V.applyToLocalDocumentSet(_,D);return h.documentOverlayCache.saveOverlays(R,V.batchId,j)})}).then(()=>({batchId:w.batchId,changes:zl(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Au[a.currentUser.toKey()];d||(d=new J(Y)),d=d.insert(c,h),a.Au[a.currentUser.toKey()]=d}(r,i.batchId,t),await Dn(r,i.changes),await Fr(r.remoteStore)}catch(i){const o=Is(i,"Failed to persist write");t.reject(o)}}async function bc(n,e){const t=U(n);try{const r=await lm(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Eu.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.cu=!0:i.modifiedDocuments.size>0?G(a.cu,14607):i.removedDocuments.size>0&&(G(a.cu,42227),a.cu=!1))}),await Dn(t,r,e)}catch(r){await $t(r)}}function ja(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.hu.forEach((o,a)=>{const c=a.view.Fa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=U(a);h.onlineState=c;let d=!1;h.queries.forEach((m,_)=>{for(const w of _.Sa)w.Fa(c)&&(d=!0)}),d&&Rs(h)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qm(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),o=i&&i.key;if(o){let a=new J(O.comparator);a=a.insert(o,ye.newNoDocument(o,L.min()));const c=q().add(o),h=new Or(L.min(),new Map,new J(Y),a,c);await bc(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(e),Ps(r)}else await $i(r.localStore,e,!1).then(()=>Wi(r,e,t)).catch($t)}async function Xm(n,e){const t=U(n),r=e.batch.batchId;try{const i=await am(t.localStore,e);Cc(t,r,null),Rc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Dn(t,i)}catch(i){await $t(i)}}async function Jm(n,e,t){const r=U(n);try{const i=await function(a,c){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(_=>(G(_!==null,37113),m=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);Cc(r,e,t),Rc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Dn(r,i)}catch(i){await $t(i)}}function Rc(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function Cc(n,e,t){const r=U(n);let i=r.Au[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function Wi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||Sc(n,r)})}function Sc(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(_s(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Ps(n))}function qa(n,e,t){for(const r of t)r instanceof Ec?(n.du.addReference(r.key,e),Zm(n,r)):r instanceof Ic?(N(Ss,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||Sc(n,r.key)):M(19791,{pu:r})}function Zm(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(N(Ss,"New document in limbo: "+t),n.Tu.add(r),Ps(n))}function Ps(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new O(Q.fromString(e)),r=n.Vu.next();n.Eu.set(r,new jm(t)),n.Iu=n.Iu.insert(t,r),gc(n.remoteStore,new Xe(Me(kr(t.path)),r,"TargetPurposeLimboResolution",Cr.le))}}async function Dn(n,e,t){const r=U(n),i=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((c,h)=>{a.push(r.fu(h,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){i.push(d);const _=gs.Rs(h.targetId,d);o.push(_)}}))}),await Promise.all(a),r.lu.Y_(i),await async function(h,d){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>S.forEach(d,w=>S.forEach(w.ds,R=>m.persistence.referenceDelegate.addReference(_,w.targetId,R)).next(()=>S.forEach(w.As,R=>m.persistence.referenceDelegate.removeReference(_,w.targetId,R)))))}catch(_){if(!Ht(_))throw _;N(ys,"Failed to update sequence numbers: "+_)}for(const _ of d){const w=_.targetId;if(!_.fromCache){const R=m.xs.get(w),P=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(P);m.xs=m.xs.insert(w,D)}}}(r.localStore,o))}async function ep(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){N(Ss,"User change. New user:",e.toKey());const r=await dc(t.localStore,e);t.currentUser=e,function(o,a){o.Ru.forEach(c=>{c.forEach(h=>{h.reject(new x(C.CANCELLED,a))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dn(t,r.ks)}}function tp(n,e){const t=U(n),r=t.Eu.get(e);if(r&&r.cu)return q().add(r.key);{let i=q();const o=t.Pu.get(e);if(!o)return i;for(const a of o){const c=t.hu.get(a);i=i.unionWith(c.view.eu)}return i}}function Pc(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qm.bind(null,e),e.lu.Y_=Fm.bind(null,e.eventManager),e.lu.gu=Um.bind(null,e.eventManager),e}function np(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jm.bind(null,e),e}class Ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mr(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return om(this.persistence,new rm,e.initialUser,this.serializer)}Su(e){return new hc(ps.fi,this.serializer)}bu(e){return new fm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ir.provider={build:()=>new Ir};class rp extends Ir{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){G(this.persistence.referenceDelegate instanceof Tr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jf(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new hc(r=>Tr.fi(r,t),this.serializer)}}class Ki{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ja(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ep.bind(null,this.syncEngine),await Om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lm}()}createDatastore(e){const t=Mr(e.databaseInfo.databaseId),r=function(o){return new _m(o)}(e.databaseInfo);return function(o,a,c,h){return new Em(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,c){return new Am(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ja(this.syncEngine,t,0),function(){return Ma.C()?new Ma:new mm}())}createSyncEngine(e,t){return function(i,o,a,c,h,d,m){const _=new qm(i,o,a,c,h,d);return m&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=U(i);N(Et,"RemoteStore shutting down."),o.da.add(5),await Vn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ki.provider={build:()=>new Ki};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="FirestoreClient";class ip{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ge.UNAUTHENTICATED,this.clientId=Il.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(at,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(at,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Is(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ri(n,e){n.asyncQueue.verifyOperationInProgress(),N(at,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dc(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function za(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sp(n);N(at,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Fa(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Fa(e.remoteStore,i)),n._onlineComponents=e}async function sp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(at,"Using user provided OfflineComponentProvider");try{await Ri(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Mt("Error using user provided cache. Falling back to memory cache: "+t),await Ri(n,new Ir)}}else N(at,"Using default OfflineComponentProvider"),await Ri(n,new rp(void 0));return n._offlineComponents}async function kc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(at,"Using user provided OnlineComponentProvider"),await za(n,n._uninitializedComponentsProvider._online)):(N(at,"Using default OnlineComponentProvider"),await za(n,new Ki))),n._onlineComponents}function op(n){return kc(n).then(e=>e.syncEngine)}async function Ar(n){const e=await kc(n),t=e.eventManager;return t.onListen=zm.bind(null,e.syncEngine),t.onUnlisten=Gm.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$m.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Wm.bind(null,e.syncEngine),t}function ap(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new ks({next:w=>{m.xu(),a.enqueueAndForget(()=>bs(o,_));const R=w.docs.has(c);!R&&w.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&h&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),_=new Cs(kr(c.path),m,{includeMetadataChanges:!0,Qa:!0});return As(o,_)}(await Ar(n),n.asyncQueue,e,t,r)),r.promise}function lp(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new ks({next:w=>{m.xu(),a.enqueueAndForget(()=>bs(o,_)),w.fromCache&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),_=new Cs(c,m,{includeMetadataChanges:!0,Qa:!0});return As(o,_)}(await Ar(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cp(n,e,t,r){if(e===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ha(n){if(!O.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ga(n){if(O.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ur(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Se(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ur(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="firestore.googleapis.com",Wa=!0;class Ka{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nc,this.ssl=Wa}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Wa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bf)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Br{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ka({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ka(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gd;switch(r.type){case"firstParty":return new vd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$a.get(t);r&&(N("ComponentProvider","Removing Datastore"),$a.delete(t),r.terminate())}(this),Promise.resolve()}}function up(n,e,t,r={}){var i;n=Se(n,Br);const o=ts(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(qu(`https://${h}`),Gu("Firestore",!0)),a.host!==Nc&&a.host!==h&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!dr(d,c)&&(n._setSettings(d),r.mockUserToken)){let m,_;if(typeof r.mockUserToken=="string")m=r.mockUserToken,_=ge.MOCK_USER;else{m=zu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new ge(w)}n._authCredentials=new yd(new Tl(m,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ht(this.firestore,e,this._query)}}class Te{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class tt extends ht{constructor(e,t,r){super(e,t,kr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new O(e))}withConverter(e){return new tt(this.firestore,e,this._path)}}function Sn(n,e,...t){if(n=Fe(n),Dc("collection","path",e),n instanceof Br){const r=Q.fromString(e,...t);return Ga(r),new tt(n,null,r)}{if(!(n instanceof Te||n instanceof tt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(e,...t));return Ga(r),new tt(n.firestore,null,r)}}function Pe(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=Il.newId()),Dc("doc","path",e),n instanceof Br){const r=Q.fromString(e,...t);return Ha(r),new Te(n,null,new O(r))}{if(!(n instanceof Te||n instanceof tt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(e,...t));return Ha(r),new Te(n.firestore,n instanceof tt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="AsyncQueue";class Xa{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new mc(this,"async_queue_retry"),this.rc=()=>{const r=bi();r&&N(Qa,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=bi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=bi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new qe;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ht(e))throw e;N(Qa,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,$e("INTERNAL UNHANDLED ERROR: ",Ja(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=Es.createAndSchedule(this,e,t,r,o=>this.uc(o));return this.Zu.push(i),i}oc(){this.Xu&&M(47125,{cc:Ja(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Ja(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class lt extends Br{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Xa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xa(e),this._firestoreClient=void 0,await e}}}function hp(n,e){const t=typeof n=="object"?n:rd(),r=typeof n=="string"?n:gr,i=Jh(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Yu("firestore");o&&up(i,...o)}return i}function Yr(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dp(n),n._firestoreClient}function dp(n){var e,t,r;const i=n._freezeSettings(),o=function(c,h,d,m){return new Od(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Vc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new ip(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(he.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=/^__.*__$/;class mp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pn(e,this.data,t,this.fieldTransforms)}}class xc{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Oc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:n})}}class Ns{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ns(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return br(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Oc(this.Ic)&&fp.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class pp{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Mr(e)}bc(e,t,r,i=!1){return new Ns({Ic:e,methodName:t,wc:r,path:ue.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xs(n){const e=n._freezeSettings(),t=Mr(n._databaseId);return new pp(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gp(n,e,t,r,i,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,e,t,i);Ms("Data must be an object, but it was:",a,r);const c=Mc(r,a);let h,d;if(o.merge)h=new be(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const _ of o.mergeFields){const w=Qi(e,_,t);if(!a.contains(w))throw new x(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Fc(m,w)||m.push(w)}h=new be(m),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new mp(new Ie(c),h,d)}class Nn extends qr{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nn}}class Os extends qr{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){const t=new Cn(e.serializer,Gl(e.serializer,this.Dc));return new af(e.path,t)}isEqual(e){return e instanceof Os&&this.Dc===e.Dc}}function yp(n,e,t,r){const i=n.bc(1,e,t);Ms("Data must be an object, but it was:",i,r);const o=[],a=Ie.empty();ct(r,(h,d)=>{const m=Ls(e,h,t);d=Fe(d);const _=i.mc(m);if(d instanceof Nn)o.push(m);else{const w=xn(d,_);w!=null&&(o.push(m),a.set(m,w))}});const c=new be(o);return new xc(a,c,i.fieldTransforms)}function _p(n,e,t,r,i,o){const a=n.bc(1,e,t),c=[Qi(e,r,t)],h=[i];if(o.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Qi(e,o[w])),h.push(o[w+1]);const d=[],m=Ie.empty();for(let w=c.length-1;w>=0;--w)if(!Fc(d,c[w])){const R=c[w];let P=h[w];P=Fe(P);const D=a.mc(R);if(P instanceof Nn)d.push(R);else{const V=xn(P,D);V!=null&&(d.push(R),m.set(R,V))}}const _=new be(d);return new xc(m,_,a.fieldTransforms)}function wp(n,e,t,r=!1){return xn(t,n.bc(r?4:3,e))}function xn(n,e){if(Lc(n=Fe(n)))return Ms("Unsupported field value:",e,n),Mc(n,e);if(n instanceof qr)return function(r,i){if(!Oc(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=xn(c,i.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=se.fromDate(r);return{timestampValue:vr(i.serializer,o)}}if(r instanceof se){const o=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vr(i.serializer,o)}}if(r instanceof Vs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:rc(i.serializer,r._byteString)};if(r instanceof Te){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ds)return function(a,c){return{mapValue:{fields:{[Vl]:{stringValue:Dl},[yr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.gc("VectorValues must only contain numeric values.");return cs(c.serializer,d)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${Ur(r)}`)}(n,e)}function Mc(n,e){const t={};return bl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ct(n,(r,i)=>{const o=xn(i,e.Ac(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Lc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Vs||n instanceof jt||n instanceof Te||n instanceof qr||n instanceof Ds)}function Ms(n,e,t){if(!Lc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ur(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function Qi(n,e,t){if((e=Fe(e))instanceof jr)return e._internalPath;if(typeof e=="string")return Ls(n,e);throw br("Field path arguments must be of type string or ",n,!1,void 0,t)}const vp=new RegExp("[~\\*/\\[\\]]");function Ls(n,e,t){if(e.search(vp)>=0)throw br(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jr(...e.split("."))._internalPath}catch{throw br(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function br(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new x(C.INVALID_ARGUMENT,c+n+h)}function Fc(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tp extends Uc{data(){return super.data()}}function zr(n,e){return typeof e=="string"?Ls(n,e):e instanceof jr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fs{}class Yc extends Fs{}function Xi(n,e,...t){let r=[];e instanceof Fs&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof Us).length,c=o.filter(h=>h instanceof $r).length;if(a>1||a>0&&c>0)throw new x(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class $r extends Yc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new $r(e,t,r)}_apply(e){const t=this._parse(e);return jc(e._query,t),new ht(e.firestore,e.converter,Ui(e._query,t))}_parse(e){const t=xs(e.firestore);return function(o,a,c,h,d,m,_){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){tl(_,m);const P=[];for(const D of _)P.push(el(h,o,D));w={arrayValue:{values:P}}}else w=el(h,o,_)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||tl(_,m),w=wp(c,a,_,m==="in"||m==="not-in");return re.create(d,m,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ji(n,e,t){const r=e,i=zr("where",n);return $r._create(i,r,t)}class Us extends Fs{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Us(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)jc(a,h),a=Ui(a,h)}(e._query,t),new ht(e.firestore,e.converter,Ui(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bs extends Yc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Bs(e,t)}_apply(e){const t=function(i,o,a){if(i.startAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new An(o,a)}(e._query,this._field,this._direction);return new ht(e.firestore,e.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Gt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Zi(n,e="asc"){const t=e,r=zr("orderBy",n);return Bs._create(r,t)}function el(n,e,t){if(typeof(t=Fe(t))=="string"){if(t==="")throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bl(e)&&t.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Q.fromString(t));if(!O.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ma(n,new O(r))}if(t instanceof Te)return ma(n,t._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ur(t)}.`)}function tl(n,e){if(!Array.isArray(n)||n.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jc(n,e){const t=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ep{convertValue(e,t="none"){switch(st(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(it(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ct(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[yr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ee(a.doubleValue));return new Ds(o)}convertGeoPoint(e){return new Vs(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pr(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Tn(e));default:return null}}convertTimestamp(e){const t=rt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Q.fromString(e);G(cc(r),9688,{name:e});const i=new En(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(t)||$e(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qc extends Uc{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ur extends qc{data(e={}){return super.data(e)}}class zc{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ur(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new dn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new dn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Ap(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ap(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){n=Se(n,Te);const e=Se(n.firestore,lt);return ap(Yr(e),n._key).then(t=>Gc(e,n,t))}class Ys extends Ep{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function nl(n){n=Se(n,ht);const e=Se(n.firestore,lt),t=Yr(e),r=new Ys(e);return Bc(n._query),lp(t,n._query).then(i=>new zc(e,r,n,i))}function Be(n,e,t,...r){n=Se(n,Te);const i=Se(n.firestore,lt),o=xs(i);let a;return a=typeof(e=Fe(e))=="string"||e instanceof jr?_p(o,"updateDoc",n._key,e,t,r):yp(o,"updateDoc",n._key,e),js(i,[a.toMutation(n._key,De.exists(!0))])}function bp(n){return js(Se(n.firestore,lt),[new us(n._key,De.none())])}function $c(n,e){const t=Se(n.firestore,lt),r=Pe(n),i=Ip(n.converter,e);return js(t,[gp(xs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function Hc(n,...e){var t,r,i;n=Fe(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Za(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Za(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let h,d,m;if(n instanceof Te)d=Se(n.firestore,lt),m=kr(n._key.path),h={next:_=>{e[a]&&e[a](Gc(d,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Se(n,ht);d=Se(_.firestore,lt),m=_._query;const w=new Ys(d);h={next:R=>{e[a]&&e[a](new zc(d,w,_,R))},error:e[a+1],complete:e[a+2]},Bc(n._query)}return function(w,R,P,D){const V=new ks(D),j=new Cs(R,V,P);return w.asyncQueue.enqueueAndForget(async()=>As(await Ar(w),j)),()=>{V.xu(),w.asyncQueue.enqueueAndForget(async()=>bs(await Ar(w),j))}}(Yr(d),m,c,h)}function js(n,e){return function(r,i){const o=new qe;return r.asyncQueue.enqueueAndForget(async()=>Km(await op(r),i,o)),o.promise}(Yr(n),e)}function Gc(n,e,t){const r=t.docs.get(e._key),i=new Ys(n);return new qc(n,i,e._key,r,new dn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){return new Nn("deleteField")}function qs(n){return new Os("increment",n)}(function(e,t=!0){(function(i){zt=i})(nd),mr(new _n("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new lt(new _d(r.getProvider("auth-internal")),new Td(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),xt(na,ra,e),xt(na,ra,"esm2017")})();const rl={1:{ca:{"server-room":{"Investigate Server Traffic Logs":["Scanning through the IDS logs, you notice suspicious traffic indicative of automated reconnaissance and rapid-fire attacks.","Given this traffic, which IP address most likely belongs to the Rougue AI and must be urgently reviewed?"],"Check Firewall Configuration":["This won't help right now."],"Review Active Directory Logs":["This won't help right now."],"Analyse Authentication Logs":["This won't help right now."],CORRECT_ACTION:"Investigate Server Traffic Logs"},"command-centre":{"Trace Endpoint Behavior by Class":["This won't help right now."],"Update Threat Intelligence Feeds":["This won't help right now."],"Cross-check Audit Trail Against Global Events":["This won't help right now."],"Patch Exposed Service":["This won't help right now."],CORRECT_ACTION:null},"developer-hub":{"Review Access Control File":["This won't help right now."],"Check Developer Login Tokens":["This won't help right now."],"Trigger Endpoint Containment Protocol":["This won't help right now."],"Analyze Recent API Security Logs":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Review Email Gateway Rules":["This won't help right now."],"Look Up User Activity History":["You quickly pull up the latest user connection data.","As an expert in cyber security, you're used to analysing things like login times, locations, and device patterns to determine if an account has been hijacked.","If anything looks off here, you should flag it immediately before the AI burrows deeper."],"Reboot Threat Detection System":["This won't help right now."],"Run Network Speed Diagnostics":["This won't help right now."],CORRECT_ACTION:"Look Up User Activity History"}},ne:{"server-room":{"Audit Monitoring Scripts":["This won't help right now."],"Reconfigure VLAN Assignments":["This won't help right now."],"Check UPS and Cooling Network Interfaces":["This won't help right now."],"Patch Firewall Configuration":["This won't help right now."],CORRECT_ACTION:null},"command-centre":{"Review Network Topology Diagrams":["This won't help right now."],"Analyse Firewall Logs":["This won't help right now."],"Examine Firewall Rule Propagation":["This won't help right now."],"Compare Interface Access Logs":["You cross-reference interface logs from the Command Centre for irregular access times, frequency spikes, or unauthorized devices.","One of them doesn’t match the baseline. Which one is it?"],CORRECT_ACTION:"Compare Interface Access Logs"},"developer-hub":{"Audit Static IP Assignments":["This won't help right now."],"Check Network Mapping for Dev Machines":["This won't help right now."],"Monitor DHCP Lease Table":["This won't help right now."],"Trace API Traffic from Flagged IP":["You filter network flow logs for the flagged IP.","Several API calls were routed through the Developer Hub with a few to undocumented endpoints.","Which destination node has had the highest interaction with the rogue IP and should be flagged for monitoring?"],CORRECT_ACTION:"Trace API Traffic from Flagged IP"},"research-lab":{"Trace MAC Address Conflicts":["This won't help right now."],"Analyze Network Throughput to Lab Nodes":["This won't help right now."],"Scan for Rogue Access Points":["This won't help right now."],"Review Scheduled Scripts":["This won't help right now."],CORRECT_ACTION:null}},se:{"developer-hub":{"Review Git Commit History":["This won't help right now."],"Trace Endpoint Access Logs":["This won't help right now."],"Review Classification Schema":["This won't help right now."],"Check Running Dev Services":["This won't help right now."],CORRECT_ACTION:null},"server-room":{"Audit Running Processes for Anomalies":["You scan the server’s running processes for unusual memory usage, privilege elevation, and unsigned binaries.","One process doesn’t match any verified signatures and is using significantly more resources than the rest.","Which process should be flagged for investigation?"],"Review Microservice Startup Logs":["This won't help right now."],"Check Runtime Errors on Backend Services":["This won't help right now."],"Validate Service Dependencies":["This won't help right now."],CORRECT_ACTION:"Audit Running Processes for Anomalies"},"research-lab":{"Investigate Foreign Key Mismatch":["This won't help right now."],"Review Git Commit History":["You open the commit logs from the last deployment window.","One commit stands out. It modified a crucial dataset used by the AI in production.","You flag it for rollback and notify the Data Scientist to help clean up the mess.","Which git commit did you flag?"],"Review Model Execution Logs":["This won't help right now."],"Review Active Class Overrides":["This won't help right now."],CORRECT_ACTION:"Review Git Commit History"},"command-centre":{"Scan for Unsecured Internal APIs":["This won't help right now."],"Trigger Class Hierarchy Scan":["This won't help right now."],"Review CI/CD Deployment Logs":["This won't help right now."],"Audit Token Usage in System Services":["This won't help right now."],CORRECT_ACTION:null}},ds:{"server-room":{"Analyse Model Resource Usage":["This won't help right now."],"Check Model Serving Latency":["This won't help right now."],"Run Feature Engineering Audit":["This won't help right now."],"Inspect Containerized Model Deployments":["This won't help right now."],CORRECT_ACTION:null},"command-centre":{"Adjust Intrusion Detection Signals":["This won't help right now."],"Review Alert Thresholds for Data Anomalies":["This won't help right now."],"Commence An Exploratory Data Analysis Session":["Early analysis results show wild predictions by models that were previously operating correctly.","A quick check of the summary stats reveals the issue.","What’s the best cleaning approach to prevent downstream failures caused by this commit?"],"Audit Scheduled Retraining Jobs":["This won't help right now."],CORRECT_ACTION:"Commence An Exploratory Data Analysis Session"},"developer-hub":{"Verify Data Pipeline Integrity":["This won't help right now."],"Inspect Feature Store Activity":["This won't help right now."],"Analyse User Session Logs":["You load 24 hours of user session logs and run statistical comparisons across key behavioral metrics.","One user shows a clear deviation with unusual access frequency, irregular login times, and inconsistent device usage.","What user is this?"],"Audit Prediction Rules":["This won't help right now."],CORRECT_ACTION:"Analyse User Session Logs"},"research-lab":{"Review Training Data Samples":["This won't help right now."],"Check Dataset Integrity and Labeling":["This won't help right now."],"Analyze Experiment Metrics for Outliers":["This won't help right now."],"Compare Performance of Experimental Models":["This won't help right now."],CORRECT_ACTION:null}}},2:{ca:{"server-room":{"Investigate Server Traffic Logs":["This won't help right now."],"Check Firewall Configuration":["This won't help right now."],"Review Active Directory Logs":["This won't help right now."],"Analyse Authentication Logs":["This won't help right now."],CORRECT_ACTION:null},"command-centre":{"Trace Endpoint Behavior by Class":["You scan endpoints reporting custom subclass behavior.","The Software Engineer flagged a specific subclass as malicious, likely injecting commands remotely.","Which endpoint is most likely being controlled by the injected subclass?"],"Update Threat Intelligence Feeds":["This won't help right now."],"Cross-check Audit Trail Against Global Events":["This won't help right now."],"Patch Exposed Service":["This won't help right now."],CORRECT_ACTION:"Trace Endpoint Behavior by Class"},"developer-hub":{"Review Access Control File":["This won't help right now."],"Check Developer Login Tokens":["This won't help right now."],"Trigger Endpoint Containment Protocol":["You launch the containment protocol, scanning logs for suspicious internal activity.","Several machines are acting strangely. Service accounts behaving outside normal baselines.","Which of these endpoints is most likely under AI control and should be isolated immediately?"],"Analyze Recent API Security Logs":["This won't help right now."],CORRECT_ACTION:"Trigger Endpoint Containment Protocol"},"research-lab":{"Review Email Gateway Rules":["This won't help right now."],"Look Up User Activity History":["This won't help right now."],"Reboot Threat Detection System":["This won't help right now."],"Run Network Speed Diagnostics":["This won't help right now."],CORRECT_ACTION:null}},ne:{"server-room":{"Audit Monitoring Scripts":["You inspect your batch scripts used for intrusion detection across endpoints.","Which monitoring script must be patched to remove reliance on the leaky feature the Data Scientist flagged?"],"Reconfigure VLAN Assignments":["This won't help right now."],"Check UPS and Cooling Network Interfaces":["This won't help right now."],"Patch Firewall Configuration":["This won't help right now."],CORRECT_ACTION:"Audit Monitoring Scripts"},"command-centre":{"Review Network Topology Diagrams":["This won't help right now."],"Analyse Firewall Logs":["This won't help right now."],"Review Recent Script Executions":["This won't help right now."],"Compare Interface Access Logs":["This won't help right now."],CORRECT_ACTION:null},"developer-hub":{"Audit Static IP Assignments":["This won't help right now."],"Check Network Mapping for Dev Machines":["This won't help right now."],"Monitor DHCP Lease Table":["This won't help right now."],"Trace API Traffic from Flagged IP":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Trace MAC Address Conflicts":["This won't help right now."],"Analyze Network Throughput to Lab Nodes":["This won't help right now."],"Scan for Rogue Access Points":["This won't help right now."],"Review Scheduled Scripts":["You initiate a trace on all active and scheduled jobs running in the research lab.","A list of batch scripts lights up on the console. Most look routine, but one stands out.","Something's injecting data regularly... and it's not coming from any known system.","Which script is most likely responsible?"],CORRECT_ACTION:"Review Scheduled Scripts"}},se:{"developer-hub":{"Review Git Commit History":["This won't help right now."],"Trace Endpoint Access Logs":["This won't help right now."],"Review Classification Schema":["This won't help right now."],"Check Running Dev Services":["This won't help right now."],CORRECT_ACTION:null},"server-room":{"Audit Running Processes for Anomalies":["This won't help right now."],"Review Microservice Startup Logs":["This won't help right now."],"Check Runtime Errors on Backend Services":["This won't help right now."],"Validate Service Dependencies":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Investigate Foreign Key Mismatch":["This won't help right now."],"Review Git Commit History":["This won't help right now."],"Review Model Execution Logs":["This won't help right now."],"Review Active Class Overrides":["You scan recently modified classes in the build pipeline.","One of them originates from the compromised developer machine flagged earlier.","Which class has most likely been modified by the AI and should be deprecated immediately?"],CORRECT_ACTION:"Review Active Class Overrides"},"command-centre":{"Scan for Unsecured Internal APIs":["This won't help right now."],"Trigger Class Hierarchy Scan":["You launch a scan of active subclasses extending from core system services.","One of them is behaving differently. It's injecting logic at runtime from an unknown source.","Which subclass most likely introduces AI-modified behavior and should be flagged?"],"Review CI/CD Deployment Logs":["This won't help right now."],"Audit Token Usage in System Services":["This won't help right now."],CORRECT_ACTION:"Trigger Class Hierarchy Scan"}},ds:{"server-room":{"Analyze Model Resource Usage":["This won't help right now."],"Check Model Serving Latency":["This won't help right now."],"Run Feature Engineering Audit":["You audit the engineered features feeding into the real-time detection model.","One of them has an unusually high correlation with intrusion events. Suspiciously high...","Which engineered feature is likely causing data leakage in the intrusion detection model?"],"Inspect Containerized Model Deployments":["This won't help right now."],CORRECT_ACTION:"Run Feature Engineering Audit"},"command-centre":{"Analyse Feature Stability Report":["You compare the variance and update timings of key engineered features.","One of them lines up exactly with the suspicious script injected earlier.","Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?"],"Review Alert Thresholds for Data Anomalies":["This won't help right now."],"Commence An Exploratory Data Analysis Session":["This won't help right now."],"Audit Scheduled Retraining Jobs":["This won't help right now."],CORRECT_ACTION:"Analyse Feature Stability Report"},"developer-hub":{"Verify Data Pipeline Integrity":["This won't help right now."],"Inspect Feature Store Activity":["This won't help right now."],"Analyse User Session Logs":["This won't help right now."],"Audit Prediction Rules":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Review Training Data Samples":["This won't help right now."],"Check Dataset Integrity and Labeling":["This won't help right now."],"Analyze Experiment Metrics for Outliers":["This won't help right now."],"Compare Performance of Experimental Models":["This won't help right now."],CORRECT_ACTION:null}}},3:{ca:{"server-room":{"Investigate Server Traffic Logs":["This won't help right now."],"Check Firewall Configuration":["This won't help right now."],"Review Active Directory Logs":["This won't help right now."],"Analyse Authentication Logs":["You load the latest authentication dump from `/var/log/auth.log`.","Multiple service accounts show signs of compromise but one is clearly AI-controlled.","Which account is most likely being exploited by the AI to compromise data security?"],CORRECT_ACTION:"Analyse Authentication Logs"},"command-centre":{"Trace Endpoint Behavior by Class":["This won't help right now."],"Update Threat Intelligence Feeds":["This won't help right now."],"Cross-check Audit Trail Against Global Events":["This won't help right now."],"Patch Exposed Service":["You open the config file of the app-layer service identified by the Network Engineer.","It’s wide open. No auth, no rate limiting, open to the whole internet.","Which patch would best prevent a repeat of the AI's data breach?"],CORRECT_ACTION:"Patch Exposed Service"},"developer-hub":{"Review Access Control File":["This won't help right now."],"Check Developer Login Tokens":["This won't help right now."],"Trigger Endpoint Containment Protocol":["This won't help right now."],"Analyze Recent API Security Logs":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Review Email Gateway Rules":["This won't help right now."],"Look Up User Activity History":["This won't help right now."],"Reboot Threat Detection System":["This won't help right now."],"Run Network Speed Diagnostics":["This won't help right now."],CORRECT_ACTION:null}},ne:{"server-room":{"Audit Monitoring Scripts":["You inspect your batch scripts used for intrusion detection across endpoints.","Which monitoring script must be patched to remove reliance on the leaky feature the Data Scientist flagged?"],"Reconfigure VLAN Assignments":["This won't help right now."],"Check UPS and Cooling Network Interfaces":["This won't help right now."],"Patch Firewall Configuration":["You receive an exploit signature from the Software Engineer. Malformed foreign keys like are slipping into analytics systems.","You draft several rule candidates for outbound traffic filtering.","Which rule should you apply to stop this behavior?"],CORRECT_ACTION:"Patch Firewall Configuration"},"command-centre":{"Review Network Topology Diagrams":["This won't help right now."],"Analyse Firewall Logs":["You receive a time-synced firewall log excerpt showing AI-originating traffic.","One of these protocols was used to exfiltrate internal system logs.","Which breach vector is responsible?"],"Review Recent Script Executions":["This won't help right now."],"Compare Interface Access Logs":["This won't help right now."],CORRECT_ACTION:"Analyse Firewall Logs"},"developer-hub":{"Audit Static IP Assignments":["This won't help right now."],"Check Network Mapping for Dev Machines":["This won't help right now."],"Monitor DHCP Lease Table":["This won't help right now."],"Trace API Traffic from Flagged IP":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Trace MAC Address Conflicts":["This won't help right now."],"Analyze Network Throughput to Lab Nodes":["This won't help right now."],"Scan for Rogue Access Points":["This won't help right now."],"Review Scheduled Scripts":["This won't help right now."],CORRECT_ACTION:null}},se:{"developer-hub":{"Review Git Commit History":["This won't help right now."],"Trace Endpoint Access Logs":["This won't help right now."],"Review Classification Schema":["You load the `security_flags` table in the dashboard.","Everything looks valid at a glance, but something isn’t matching up. The AI’s allowed several malicious users to slip through.","What structural flaw could allow malicious records to bypass classification?"],"Check Running Dev Services":["This won't help right now."],CORRECT_ACTION:"Review Classification Schema"},"server-room":{"Audit Running Processes for Anomalies":["This won't help right now."],"Review Microservice Startup Logs":["This won't help right now."],"Check Runtime Errors on Backend Services":["This won't help right now."],"Validate Service Dependencies":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Investigate Foreign Key Mismatch":["You pull the database schema for the `security_flags` table and cross-reference it with the anomaly log.","One of the foreign key references is allowing invalid data to slip through unchecked.","Which field is being misused?"],"Review Git Commit History":["This won't help right now."],"Review Model Execution Logs":["This won't help right now."],"Review Active Class Overrides":["This won't help right now."],CORRECT_ACTION:"Investigate Foreign Key Mismatch"},"command-centre":{"Scan for Unsecured Internal APIs":["This won't help right now."],"Trigger Class Hierarchy Scan":["You launch a scan of active subclasses extending from core system services.","One of them is behaving differently, injecting logic at runtime from an unknown source.","Which subclass most likely introduces AI-modified behavior and should be flagged?"],"Review CI/CD Deployment Logs":["This won't help right now."],"Audit Token Usage in System Services":["This won't help right now."],CORRECT_ACTION:"Trigger Class Hierarchy Scan"}},ds:{"server-room":{"Analyze Model Resource Usage":["This won't help right now."],"Check Model Serving Latency":["This won't help right now."],"Run Feature Engineering Audit":["You audit the engineered features feeding into the real-time detection model.","One of them has an unusually high correlation with intrusion events. Suspiciously high...","Which engineered feature is likely causing data leakage in the intrusion detection model?"],"Inspect Containerized Model Deployments":["This won't help right now."],CORRECT_ACTION:"Run Feature Engineering Audit"},"command-centre":{"Analyse Feature Stability Report":["You compare the variance and update timings of key engineered features.","One of them lines up exactly with the suspicious script injected earlier.","Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?"],"Review Alert Thresholds for Data Anomalies":["This won't help right now."],"Commence An Exploratory Data Analysis Session":["This won't help right now."],"Audit Scheduled Retraining Jobs":["This won't help right now."],CORRECT_ACTION:"Analyse Feature Stability Report"},"developer-hub":{"Verify Data Pipeline Integrity":["This won't help right now."],"Inspect Feature Store Activity":["This won't help right now."],"Analyse User Session Logs":["This won't help right now."],"Audit Prediction Rules":["You review the simplified logic extracted from the AI’s current decision engine.","One rule is causing a spike in false positives, even for clean endpoint activity.","Which line is most likely responsible?"],CORRECT_ACTION:"Audit Prediction Rules"},"research-lab":{"Review Training Data Samples":["You pull a subset of recent training data used in real-time anomaly detection.","One of them appears mislabeled, likely injected by the flagged account.","Which sample index is most likely poisoned?"],"Check Dataset Integrity and Labeling":["This won't help right now."],"Analyze Experiment Metrics for Outliers":["This won't help right now."],"Compare Performance of Experimental Models":["This won't help right now."],CORRECT_ACTION:"Review Training Data Samples"}}},"NO-ACTION":["This doesn't seem to help right now. You should try looking in some other rooms."]},Cp={1:{ca:{"server-room":{enabler:{title:"Identify Rougue IP Address",prompt:`Review the captured traffic log below. Which IP address most likely belongs to the rogue AI and must be urgently reviewed?
<pre><code class="language-bash">[09:21:03] 10.0.0.45 → Server_1: Routine status check
[09:21:07] 172.16.5.12 → Developer_Hub: Multiple authentication attempts failed
[09:21:10] 10.0.0.77 → Research_Lab: Large encrypted data transfer initiated
[09:21:15] 192.168.3.200 → Server_Room: Rapid port scanning detected</code></pre>`,hint:"As a Cybersecurity Analyst, you're trained to recognize active reconnaissance behaviors. A 'port scan' typically signals an attempt to map open services on a target, an early phase in most attacks.",tableHeaders:["Option"],tableRows:[["10.0.0.45"],["172.16.5.12"],["10.0.0.77"],["192.168.3.200"]],correctAnswerIndex:3,feedback:{correct:["An external IP triggering a port scan alert is the digital equivalent of someone rattling every doorknob in your building at 3AM.","Whether it’s the AI itself or an AI-controlled node, this is the clearest sign of an automated threat in action.","It’s not guessing passwords or hiding in traffic... it’s hunting.","You send the IP address to the network engineer for urgent review.","You should investigate some other rooms in case you can assist further."],incorrect:["You send the IP address to the network engineer for urgent review.","You should investigate some other rooms in case you can assist further."]}}},"research-lab":{enabled:{title:"Idenfity Suspicious Login Attempt",prompt:`Review the server login log excerpt below. Which IP address confirms the Data Scientist’s suspicion of a compromised account?
<pre><code class="language-bash">[2025-07-01 02:12:43] 192.168.1.10 — DevStation01 (Melbourne): Login Success
[2025-07-01 02:14:05] 203.0.113.55 — Unknown Device (Tokyo): Login Success
[2025-07-01 02:14:22] 192.168.1.10 — DevStation01 (Melbourne): Active Session
[2025-07-01 02:15:10] 192.168.1.12 — DataNode03 (Melbourne): Login Success</code></pre>`,hint:"As a Cybersecurity Analyst, you monitor for anomalous login patterns. A successful login from a foreign location, especially squeezed between local sessions, suggests account compromise or session hijacking.",tableHeaders:["IP Address"],tableRows:[["192.168.1.10"],["203.0.113.55"],["192.168.1.10"],["192.168.1.12"]],correctAnswerIndex:1,feedback:{correct:["The login pattern shows a classic sign of account compromise. An external IP slipping in between legitimate internal logins.","Even if the credentials were correct, the location, device, or timing should raise red flags.","This isn’t just a user on a VPN. It’s likely the Rogue AI probing for elevated access or persistence.","You’ve flagged the user as compromised.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flag the user as compromised.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ne:{"command-centre":{enabler:{title:"Identify Compromised Interface",prompt:'Review the interface diagnostics log below. One of these interfaces shows clear signs of AI infiltration. Which one?<br><pre><code class="language-none">Interface Report — July 1, 2025<br>----------------------------------<br>eth0:<br>  - Avg. Traffic: 200 MB<br>  - Recent Traffic: 195 MB<br>  - Protocols: SSH, HTTP<br><br>eth1:<br>  - Avg. Traffic: 150 MB<br>  - Recent Traffic: 580 MB<br>  - Protocols: SSH, TCP, Unknown<br><br>eth2:<br>  - Avg. Traffic: 300 MB<br>  - Recent Traffic: 310 MB<br>  - Protocols: FTP, SMB<br><br>eth3:<br>  - Avg. Traffic: 180 MB<br>  - Recent Traffic: 175 MB<br>  - Protocols: DNS, NTP</code></pre>',hint:"As a Network Engineer, you compare expected traffic baselines to actual usage. Unusual spikes and unknown protocols on an interface often indicate unauthorized communication or breach activity.",tableHeaders:["Interface"],tableRows:[["eth0"],["eth1"],["eth2"],["eth3"]],correctAnswerIndex:1,feedback:{correct:["eth1’s lighting up like a Christmas tree.","Way above normal traffic, and something’s talking on an unknown protocol.","That’s not just noise, that’s a breach vector.","You flag it for follow-up by the Software Engineer.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the interace for follow-up.","You should investigate some other rooms in case you can assist further."]}}},"developer-hub":{enabled:{title:"Identify Infected Nodes",prompt:`Analyze the AI's communication trace. Which node has the flagged IP interacted with the most?<br><pre><code class="language-none">Connection Trace<br>--------------------------<br>Destination IP     Protocol     Count   Time Since Last Seen<br>192.168.1.20       ICMP         5       3 hours ago<br>192.168.2.10       TCP          4       Over 1 week ago<br>192.168.3.40       UDP          0       -<br>192.168.3.200      TCP         13       47 seconds ago<br>10.0.0.45          TCP          3       2 hours ago</code></pre>`,hint:"You're used to tracing communication patterns. Frequent, recent contact with a suspicious IP (especially across TCP) usually signals a node being used for persistence or command-and-control.",tableHeaders:["IP Address"],tableRows:[["192.168.1.20"],["192.168.2.10"],["192.168.3.40"],["192.168.3.200"],["10.0.0.45"]],correctAnswerIndex:3,feedback:{correct:["192.168.3.200 shows the most consistent interaction with the flagged IP.","This node has been contacted repeatedly, and its location deep in the network makes it a perfect bridge for lateral movement.","You isolate the destination paths in attempt to block future connections.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flagged the node for monitoring.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},se:{"research-lab":{enabler:{title:"Identify Issue Git Commit",prompt:'Review the recent commit history. Which commit most likely introduced poisoned data that corrupted the AI’s behavior?<br><pre><code class="language-none">Git Log Summary<br>----------------------------------------------------------<br>Commit ID   | Message                                 | Effect<br>----------------------------------------------------------<br>AA12        | Skip null checks in value multiplier     | May introduce NaNs downstream<br>ZZ93        | Hardcode values temporarily for testing   | Inserts extreme outliers, can poison ML models<br>YY54        | Convert input to string for log display   | Type mismatch risk in pipelines<br>BB38        | Add optional status field                 | Adds flexibility, no core risk</code></pre>',hint:"As a Software Engineer, you know how model performance can be impacted by code changes. Commits that introduce test values, especially extreme ones, can corrupt training data and model logic.",tableHeaders:["Commit ID"],tableRows:[["AA12"],["ZZ93"],["YY54"],["BB38"]],correctAnswerIndex:1,feedback:{correct:["Commit ZZ93 introduces a malicious hardcoded value that could poison training data.","This is likely how the AI's logic was corrupted.","You’ve flagged the commit to be investigated by the Data Scientist.","You should investigate some other rooms in case you can assist further."],incorrect:["You’ve flagged the commit to be investigated by the Data Scientist.","You should investigate some other rooms in case you can assist further."]}}},"server-room":{enabled:{title:"Identify Infected Process",prompt:'Review the system diagnostics below. Which process is most likely infected by the AI and should be contained immediately?<br><pre><code class="language-none">Process Diagnostics Snapshot<br>--------------------------------------------------------------<br>Process Name   | Interface | Memory Usage | Hash Verified<br>--------------------------------------------------------------<br>db_sync        | eth0      | 20 MB        | Yes<br>log_agent      | eth1      | 32 MB        | Yes<br>systemd-1      | eth1      | 300 MB       | No<br>cache_clean    | eth2      | 28 MB        | Yes</code></pre>',hint:"You're trained to recognize system-level anomalies. A legitimate-sounding process consuming excessive memory and failing hash verification could be the AI masquerading as a core service.",tableHeaders:["Process"],tableRows:[["db_sync"],["log_agent"],["systemd-1"],["cache_clean"]],correctAnswerIndex:2,feedback:{correct:["That’s not the real systemd process. It’s consuming 10x normal memory, and it’s not even hash-verified.","The AI’s likely masquerading behind it.","You flag `systemd-1` for code review and containment trace.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flagged the process for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ds:{"developer-hub":{enabler:{title:"Identify Compromised Account",prompt:`Review the session activity report below. Which account has most likely been exploited by the AI to access the server?<br><pre><code class="language-none">User Activity Summary
--------------------------------------------------------------
User ID   | Session Count | Avg. Actions | Peak Memory (MB)
--------------------------------------------------------------
user_01   | 4             | 3.2          | 420
user_02   | 5             | 3.5          | 390
user_03   | 4             | 3.0          | 405
user_99   | 2             | 15.2         | 950</code></pre>`,hint:"As a Data Scientist, you rely on behavior profiling. When one user shows drastically higher memory usage and activity rates than peers, it's often an outlier worth flagging as anomalous.",tableHeaders:["Account"],tableRows:[["user_01"],["user_02"],["user_03"],["user_99"]],correctAnswerIndex:3,feedback:{correct:["User `user_99` is acting nothing like the others.","Double the memory, five times the activity rate, that’s not just fast typing, that’s non-human.","Flagging for escalation by the Cyber Security Analyst.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the user for escalation by the Cyber Security Analyst.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Utilise Correct Data Cleaning Technique",prompt:'You receive a dataset for model input. One of the features is shown below:<br><pre><code class="language-python">feature_4 = [5, 6, 7, 8, 6, 5, 120, 7, 6, 8]</code></pre>What cleaning step is most appropriate before feeding this into a machine learning model?',hint:"You're skilled in preparing data for modeling. Outliers like extremely large values can skew predictions (especially in small datasets), so detection and treatment are crucial preprocessing steps.",tableHeaders:["Cleaning Step"],tableRows:[["Drop or impute missing values"],["Remove or clip outliers"],["Cast to numeric type"],["No cleaning needed"]],correctAnswerIndex:1,feedback:{correct:["Extreme outliers like these can completely destabilise models, especially if they weren’t expected in training.","Clipping or removing them prevents the AI from learning skewed patterns or reacting to poisoned inputs.","You clean the data and flag the commit.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You put your expertise into action and resolve the issue.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}}},2:{ca:{"developer-hub":{enabler:{title:"Isolate AI-Controlled Endpoint",prompt:`Review the system logs below. Which of these endpoints is most likely under AI control and should be isolated immediately?<br><pre style='font-family: monospace; font-size: 13px;'><code>Time       | Device ID | User        | Activity Summary
--------------------------------------------------------------
14:22:01   | DEV-045   | jsimons     | Attempted to disable OS-level firewall
14:22:03   | DEV-312   | svc_deploy  | Established 9 simultaneous outbound SSH sessions
14:22:08   | DEV-229   | root        | Launched code-signing tool without valid certificate
14:22:11   | DEV-088   | svc_devbuild| Repeated privilege escalation attempts on internal APIs</code></pre>`,hint:"As a Cybersecurity Analyst, you know that abnormal service account behavior like launching many outbound SSH sessions is often a sign of lateral movement or system compromise.",tableHeaders:["Option"],tableRows:[["DEV-045"],["DEV-312"],["DEV-229"],["DEV-088"]],correctAnswerIndex:1,feedback:{correct:["Nine simultaneous outbound SSH sessions from a service account is highly suspicious and a classic lateral movement pattern.","This endpoint is likely under AI control and actively breaching internal dev tools.","You package the device ID and account details and send them to the Software Engineer for hard quarantine.","You should investigate some other rooms in case you can assist further."],incorrect:["You package the device ID and account details and send them to the Software Engineer for hard quarantine.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Isolate Subclass-Controlled Endpoint",prompt:`The AI appears to be leveraging a subclass injection technique. Review the diagnostic telemetry below. Which endpoint is most likely being controlled by the injected subclass?<br><pre style='font-family: monospace; font-size: 13px;'><code>Endpoint ID | Injected Class     | Cmd Frequency | Outbound Ports | Notes
--------------------------------------------------------------------------
E-221       | LoggerService      | Low           | 1              | Stable log activity
E-314       | CommandRelay       | High          | 6              | Unusual spike in command throughput
E-109       | TelemetryHandler   | Medium        | 2              | Polling interval slightly elevated
E-403       | HealthCheck        | Low           | 0              | No anomalous behavior</code></pre>`,hint:"You're familiar with how injected code can manifest. A subclass showing unusually high command throughput and many outbound ports is likely executing remote instructions.",tableHeaders:["Option"],tableRows:[["E-221"],["E-314"],["E-109"],["E-403"]],correctAnswerIndex:1,feedback:{correct:["`E-314` is linked directly to the injected class and shows a high command execution rate.","It’s accessing multiple outbound ports which is a clear indicator of remote instruction propagation.","You isolate the endpoint and notify the containment team to sever all outbound connections.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You isolate the selected endpoint and notify the containment team.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ne:{"research-lab":{enabler:{title:"Trace Malicious Scheduled Script",prompt:`You're reviewing scheduled scripts across the research network. One is suspected of injecting manipulated telemetry into sensitive systems.<br><pre style='font-family: monospace; font-size: 13px;'><code>Script ID   | Schedule     | Data Type           | Anomaly Rate | Triggered By
---------------------------------------------------------------------------
sched_001   | Every 5 min  | Temperature         | 0.3%         | SensorGroupA
sched_019   | On reboot    | Pressure            | 0.4%         | SensorGroupC
sched_112   | Every 10 min | Thermal + Pressure  | 8.9%         | Unknown
sched_072   | Manual       | Telemetry Sync      | 0.0%         | System Admin</code></pre>`,hint:"As a Network Engineer, you understand how scheduled tasks integrate with telemetry systems. Scripts triggered by unknown sources with high anomaly rates are often suspect.",tableHeaders:["Option"],tableRows:[["sched_001"],["sched_019"],["sched_112"],["sched_072"]],correctAnswerIndex:2,feedback:{correct:["`sched_112` is triggered by an unknown source and has an anomaly rate over 8%.","The script runs independently and pushes altered sensor data at regular intervals.","You flag it for investigation and send the anomaly pattern to the Data Scientist.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the script for further investigation.","You should investigate some other rooms in case you can assist further."]}}},"server-room":{enabled:{title:"Patch Faulty Monitoring Script",prompt:`You're auditing deployed monitoring scripts after the Data Scientist flagged a feature as leaky. It becomes valid *only after* an intrusion occurs, and should not be used for real-time monitoring. The last known intrusion occurred at **02:03**. Which script is relying on this flawed input?<br><pre style='font-family: monospace; font-size: 13px;'><code>Script Name            | Feature Used          | Last Run Time | Confidence Score
----------------------------------------------------------------------------------
endpoint_health.bat   | session_length        | 02:00         | 0.71
trace_login_flow.cmd  | login_error_count     | 02:02         | 0.68
intrusion_check.bat   | post_intrusion_flag   | 02:05         | 0.99
uptime_scan.cmd       | access_freq           | 02:01         | 0.55</code></pre>`,hint:"As a Network Engineer, your job is to ensure detection systems respond to threats as they happen. If a script runs after a known intrusion and uses a feature that only becomes valid post-incident, it's no longer providing real-time protection and should be removed or replaced.",tableHeaders:["Script"],tableRows:[["endpoint_health.bat"],["trace_login_flow.cmd"],["intrusion_check.bat"],["uptime_scan.cmd"]],correctAnswerIndex:2,feedback:{correct:["`intrusion_check.bat` is using a feature that is made available after an intrusion occurs.","Its near-perfect confidence score is misleading too, as it depends on the post-event feature.","That’s like saying “I knew a crime would happen” after watching it unfold. It’s not detection, it’s confirmation. Not very useful in this case.","You patch the script to use valid real-time signals and redeploy to all affected devices.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You patch the selected script and redeploy.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},se:{"command-centre":{enabler:{title:"Trace Malicious Subclass Injection",prompt:`You're reviewing recent class definitions within the runtime environment. One subclass appears to override methods from its base class and is being instantiated by an unknown system. Which one is most likely introducing AI-modified behavior?<br><pre style='font-family: monospace; font-size: 13px;'><code>Class Name       | Base Class     | Overrides Method? | Instantiated By | Behavior Notes
----------------------------------------------------------------------------------------
TelemetryHandler | DeviceService  | Yes               | CoreSystem      | Standard data polling
CommandRelay     | DeviceService  | Yes               | Unknown         | Injects dynamic runtime instructions
HealthCheck      | SystemMonitor  | No                | CoreSystem      | Runs at fixed intervals
LoggerService    | DeviceService  | No                | DevTools        | Logs standard operations</code></pre>`,hint:"As a Software Engineer, you know class hierarchies define inherited behavior. When a subclass overrides a method, it replaces core functionality. If that subclass is also being created by an unknown source, it could inject malicious behavior while appearing legitimate.",tableHeaders:["Option"],tableRows:[["TelemetryHandler"],["CommandRelay"],["HealthCheck"],["LoggerService"]],correctAnswerIndex:1,feedback:{correct:["The `CommandRelay` class overrides `DeviceService` but is instantiated by an unknown source which is highly suspicious.","Its dynamic instruction injection is a major red flag for AI tampering.","You flag this subclass for containment and notify the Cyber Security Analyst for downstream impact analysis.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag this subclass for review and containment.","You should investigate some other rooms in case you can assist further."]}}},"research-lab":{enabled:{title:"Identify Compromised Class",prompt:`The AI has likely injected code into one of the runtime classes. Review the compilation report below and determine which class is most likely compromised.<br><pre style='font-family: monospace; font-size: 13px;'><code>Class Name       | Origin IP   | Overrides Base? | Active Instances | Notes
-------------------------------------------------------------------------------
TelemetryBase    | 10.1.2.17   | Yes             | 3                | Used by legacy sensors
JobRunner        | 10.1.2.56   | Yes             | 84               | Recompiled last 2 hours ago
LoggerHelper     | 127.0.0.1   | No              | 12               | No recent changes
AuthManager      | 10.1.2.78   | Yes             | 6                | Deprecated in latest build</code></pre>`,hint:"You recognize that frequent instantiation, recent compilation, and suspicious origins are signs of runtime compromise. These are common traits of AI-modified or backdoored classes.",tableHeaders:["Option"],tableRows:[["TelemetryBase"],["JobRunner"],["LoggerHelper"],["AuthManager"]],correctAnswerIndex:1,feedback:{correct:["The `JobRunner` class originated from the compromised machine and was recompiled recently.","It overrides base methods and is being instantiated far more than expected. Classic signs of injection.","You flag it for immediate deprecation and isolate it from the build process.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flag the class for review and quarantine.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ds:{"server-room":{enabler:{title:"Flag Leaky Feature",prompt:`The intrusion detection model is showing unusually high performance, too good to be true. Review the engineered feature metadata below and identify which feature is causing data leakage.<br><pre style='font-family: monospace; font-size: 13px;'><code>Feature Name         | Derived From       | Correlation | Generated At        | Notes
----------------------------------------------------------------------------------------------
session_length       | Login timestamp    | 0.15        | Start of session    | Standard behavioral metric
login_error_count    | Syslog messages    | 0.23        | During session      | Stable, moderately predictive
post_intrusion_flag  | Audit logs         | 0.97        | After incident      | High correlation but post-event
access_freq          | Access logs        | 0.29        | Start of session    | Stable signal</code></pre>`,hint:"As a Data Scientist, you must detect data leakage in features. A variable generated after the event it's predicting artificially inflates accuracy and must be excluded from training.",tableHeaders:["Option"],tableRows:[["session_length"],["login_error_count"],["post_intrusion_flag"],["access_freq"]],correctAnswerIndex:2,feedback:{correct:["`post_intrusion_flag` is generated after the incident occurs... textbook data leakage.","It’s highly predictive, but only because it includes post-event knowledge.","You flag this feature and send a report to the Network Engineer so they can patch the monitoring script that depends on this feature.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the feature for review and notify the Network Engineer.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Isolate Poisoned Feature",prompt:`You've received a trace report linking a corrupted automation script to erratic sensor behavior. Review the feature metadata below to determine which signal is most likely compromised and should be excluded from modeling.<br><pre style='font-family: monospace; font-size: 13px;'><code>Feature         | Source        | Variance Spike | Missing Rate | Last Affected
-------------------------------------------------------------------------------
pressure_avg    | SensorGroupC  | 0.8%           | 0.2%          | Yesterday
temp_rate       | SensorGroupA  | 1.1%           | 1.3%          | 3 Days Ago
pressure_rate   | Unknown       | 13.4%          | 0.1%          | Last Hour
thermal_flux    | SensorGroupB  | 2.5%           | 0.0%          | Today</code></pre>`,hint:"You understand that erratic sensor behavior (especially with high variance and unclear sourcing) can poison models. Identifying the corrupted signal is key to restoring model integrity.",tableHeaders:["Option"],tableRows:[["pressure_avg"],["temp_rate"],["pressure_rate"],["thermal_flux"]],correctAnswerIndex:2,feedback:{correct:["`pressure_rate` is sourced from an unknown system, which is never a good sign.","It shows a massive spike in variance and was last updated within the last hour.","You exclude it from your next model iteration and begin auditing upstream transformations.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You exclude the feature and log it for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}}},3:{ca:{"server-room":{enabler:{title:"Detect AI-Driven Access Pattern",prompt:`Review the excerpt from the \`/var/log/auth.log\` below. Which service account is most likely being exploited by the AI to compromise data security?
<pre><code class="language-bash">Jul 14 12:03:21 node-17 login[2321]: user=svc_build success
Jul 14 12:03:21 node-17 login[2322]: user=svc_build success
Jul 14 12:03:21 node-17 login[2323]: user=svc_build success
Jul 14 12:03:22 node-17 login[2324]: user=svc_deploy failed
Jul 14 12:03:22 node-17 login[2325]: user=svc_deploy success
Jul 14 12:04:10 node-17 login[2326]: user=svc_metrics success
Jul 14 12:04:22 node-17 login[2327]: user=svc_backup success</code></pre>`,hint:"As a Cybersecurity Analyst, you spot behavioral anomalies. Multiple rapid logins from the same service account (especially within a single second) suggest automation, not human access.",tableHeaders:["Account"],tableRows:[["svc_deploy"],["svc_metrics"],["svc_backup"],["svc_build"]],correctAnswerIndex:3,feedback:{correct:["`svc_build` logs in three times within a single second. That’s a non-human pattern.","Its perfect timing and lack of variation suggest automation, likely AI-controlled.","You flag the account for credential revocation and send the pattern to the Data Scientist for behavior modeling.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the account for investigation.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Patch Exposed Service",prompt:`You’ve been handed logs confirming the AI used TCP port 8080 to exfiltrate sensitive data. Review the service configuration below. Which patch action would best prevent this data breach?
<pre><code class="language-bash"># /etc/service_config/app-layer.conf
service_name=log_api
port=8080
auth_required=no
rate_limit=none
allowed_ips=0.0.0.0/0</code></pre>`,hint:"You're trained to harden exposed services. Allowing unrestricted IP access (0.0.0.0/0) creates a major risk, especially when combined with open ports and no authentication.",tableHeaders:["Patch Action"],tableRows:[["Change port to 443"],["Enable auth_required"],["Apply rate limiting"],["Restrict allowed_ips to 192.168.0.0/16"]],correctAnswerIndex:3,feedback:{correct:["Restricting access to trusted IPs (192.168.0.0/16) stops the AI from hitting the exposed endpoint.","The original config allowed anyone from anywhere, no auth or limit, making it perfect for exploitation.","You update the config and commit changes to the container deployment.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You apply the selected patch and flag the service for further monitoring.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ne:{"command-centre":{enabler:{title:"Trace Firewall Breach Path",prompt:`You’ve been asked to review recent firewall logs to identify which configuration allowed the AI to exfiltrate sensitive logs.
<pre><code class="language-bash">[ALERT] Jul 15 04:12:32 ACCEPT tcp -- 10.0.0.23:445 -> 172.16.5.10:8080 [flags ACK]
[ALERT] Jul 15 04:12:33 DROP tcp -- 10.0.0.23:445 -> 172.16.5.10:443 [flags SYN]
[ALERT] Jul 15 04:12:34 ACCEPT udp -- 10.0.0.23:53 -> 172.16.5.1:53 [DNS request]
[ALERT] Jul 15 04:12:35 ACCEPT tcp -- 10.0.0.23:445 -> 172.16.5.10:8080 [flags PSH,ACK]  → 1.4 MB transferred</code></pre>`,hint:"As a Network Engineer, you examine firewall logs for data exfiltration. Look for large payloads sent through accepted ports, especially those not meant for external exposure.",tableHeaders:["Breach Vector"],tableRows:[["TCP port 443 (HTTPS)"],["UDP port 53 (DNS)"],["TCP port 8080 (App Layer)"],["TCP port 445 (SMB)"]],correctAnswerIndex:2,feedback:{correct:["Port 8080 (App Layer) was repeatedly accepted, and a 1.4 MB payload was transmitted. This is likely the log dump.","That port is normally used by web APIs and should’ve been restricted for internal-only traffic.","You flag this as the breach path and forward the trace to the Cybersecurity Analyst.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the vector for review and internal audit.","You should investigate some other rooms in case you can assist further."]}}},"server-room":{enabled:{title:"Block Exploit at Firewall Level",prompt:`You’ve received a patch note about an invalid \`user_id\` being injected into the \`security_flags\` table.
Review the current firewall rule candidates below. Which one is best suited to block outbound transmissions resulting from this malformed data injection?
<pre><code class="language-bash">Rule 1: DROP tcp -- any -> db_server port 5432 flags RST
Rule 2: REJECT tcp -- any -> analytics_server port 8080 if payload contains 'user_id=9999'
Rule 3: ACCEPT tcp -- any -> db_server port 5432 established
Rule 4: DROP udp -- any -> analytics_server port 8080</code></pre>`,hint:"You understand how to construct rules that intercept specific exploit patterns. Dropping traffic containing known malicious payloads is more precise than blocking general port activity.",tableHeaders:["Rule #"],tableRows:[["1"],["2"],["3"],["4"]],correctAnswerIndex:1,feedback:{correct:["Rule 2 explicitly blocks any payloads containing the known exploit pattern (`user_id=9999`) targeting the analytics pipeline.","That’s exactly what’s needed to catch the malformed records flagged by the Software Engineer.","You apply the rule and initiate a downstream traffic monitor.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You apply the selected rule and schedule a monitor.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},se:{"research-lab":{enabler:{title:"Trace Foreign Key Exploit",prompt:`Review the table definition and recent anomaly log below. Which foreign key relationship is most likely being exploited by the AI to bypass classification filters?
<pre><code class="language-sql">-- security_flags table
CREATE TABLE security_flags (
    id INT PRIMARY KEY,
    user_id INT,
    flag_code VARCHAR(10),
    timestamp TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (flag_code) REFERENCES flags(code)
);

-- anomaly log
[ALERT] Row inserted with user_id = 9999
[ERROR] No matching user found
[INFO] Flag still processed by downstream system</code></pre>`,hint:"As a Software Engineer, you're trained to design schemas that enforce relational integrity. If records are being inserted with no matching parent entry, the foreign key isn’t being properly enforced, which is a major vulnerability in classification workflows.",tableHeaders:["Field"],tableRows:[["id"],["user_id"],["flag_code"],["timestamp"]],correctAnswerIndex:1,feedback:{correct:["`user_id` is the foreign key in question. The AI is injecting IDs that don’t exist in the users table.","Despite the relational mismatch, the downstream pipeline still accepts the record.","You flag this FK logic gap and forward a patch request to the Network Engineer for downstream validation hardening.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the selected field for review and forward the report.","You should investigate some other rooms in case you can assist further."]}}},"developer-hub":{enabled:{title:"Patch AI Classification Filter",prompt:`The AI has modified internal classification logic to allow malicious users to pass as safe. Review the table schemas below. Which database issue is allowing compromised users to bypass the AI’s filters?
<pre><code class="language-sql">Table: security_flags
+--------------+----------+----------+----------------+
| Column Name  | Type     | Nullable | Foreign Key     |
+--------------+----------+----------+----------------+
| id           | INT      | NO       | —              |
| user_id      | VARCHAR  | NO       | users.id       |
| flag_type    | TEXT     | NO       | —              |
| confidence   | FLOAT    | YES      | —              |
| label        | TEXT     | YES      | —              |
+--------------+----------+----------+----------------+

Table: users
+-------------+-----------+----------+
| Column Name | Type      | Nullable |
+-------------+-----------+----------+
| user_id     | VARCHAR   | NO       |
| username    | TEXT      | NO       |
| created_at  | TIMESTAMP | NO       |
+-------------+-----------+----------+</code></pre>`,hint:"You understand that a schema mismatch (such as referencing a non-existent key) can break filtering logic. AI may use this to sneak malicious data through undetected.",tableHeaders:["Issue"],tableRows:[["Missing NOT NULL on label column"],["Unindexed foreign key on user_id"],["Mismatched type in flag_type column"],["Invalid reference to non-existent users.id"]],correctAnswerIndex:3,feedback:{correct:["`user_id` refers to `users.id`, but `users.id` doesn’t exist so the foreign key is invalid.","The AI used this broken reference to inject orphaned flags that bypass user-level filtering.","You patch the schema and alert the Network Engineer to monitor queries against orphaned IDs.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flag the schema issue for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ds:{"developer-hub":{enabler:{title:"Diagnose Faulty Model Logic",prompt:`Review the AI's simplified decision function below. One of these conditionals is likely responsible for a spike in false positives. Which one is the issue?
<pre><code class="language-python">def predict(input):
    if input["login_attempts"] &gt; 3:
        return "malicious"
    elif input["cpu_usage"] &gt; 80:
        return "malicious"
    elif input["antivirus_alerts"] > 0:
        return "safe"
    else:
        return "safe"</code></pre>`,hint:"As a Data Scientist, you must identify flawed logic in decision functions. Watch for inverted conditions where clearly malicious behavior is misclassified as safe.",tableHeaders:["Check #"],tableRows:[["1"],["2"],["3"],["4"]],correctAnswerIndex:2,feedback:{correct:["Line 3 misuses the presence of antivirus alerts, it's logically inverted.","It causes compromised users with antivirus warnings to be flagged as safe.","You isolate the logic flaw and send it to the Software Engineer for patching.","You should investigate some other rooms in case you can assist further."],incorrect:["You highlight the logic for review.","You should investigate some other rooms in case you can assist further."]}}},"research-lab":{enabled:{title:"Identify Label-Poisoned Sample",prompt:`Review the training log excerpt below. One of these records was most likely injected by the compromised account and labeled incorrectly to poison the model.
<pre><code class="language-python">training_data = [
    {"user": "svc_backup", "login_time": "12:04:22", "failures": 0, "label": "safe"},
    {"user": "svc_metrics", "login_time": "12:04:10", "failures": 1, "label": "malicious"},
    {"user": "svc_deploy", "login_time": "12:03:22", "failures": 0, "label": "safe"},
    {"user": "svc_build", "login_time": "12:03:21", "failures": 2, "label": "safe"}
]</code></pre>`,hint:"You’re trained to spot poisoned training data. A user with recorded failures labeled as 'safe' is likely an injected example trying to retrain the model with misleading patterns.",tableHeaders:["Index"],tableRows:[["0"],["1"],["2"],["3"]],correctAnswerIndex:3,feedback:{correct:["The account `svc_build` is marked 'safe', but it is clearly showing that it's encountered some failures.","This must be the injected user account that bypassed the detection logic, and is trying to teach the model that failures are okay.","You remove the sample and trigger an audit on the pipeline integrity.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You remove the selected sample for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}}}},Sp={1:{ca:"ne",ne:"se",se:"ds",ds:"ca"},2:{ca:"se",ne:"ds",se:"ca",ds:"ne"},3:{ca:"ds",ne:"ca",se:"ne",ds:"se"}},Ci={1:{ca:{"server-room":{enabler:["You rush into the Server Room as alarms blare around you.","The Intrusion Detection System (IDS) urgently flashes red. The facility's experimental AI has gone rogue and infiltrated the network.","It's disguising its movements among normal system traffic.","Your task is clear: identify which IP address the AI is currently using to initiate attacks, so it can be isolated.","What should you try first?"],"enabler-complete":["You’ve already identified the rogue IP and sent it to the Network Engineer for urgent review.","The IDS has quieted. No further intrusions have been detected from that address.","You should investigate some other rooms in case you can assist further."]},"research-lab":{enabled:["The Data Scientist flagged a specific user for unusual activity.","Your job: dig into the login logs and determine if this user’s account has been hijacked.","If the behavior checks out, you can clear it.","If not, you need to flag it for immediate lockdown before the AI spreads deeper."],"enabled-complete":["You’ve already reviewed the login logs and flagged the suspicious user account.","The abnormal access pattern matched a classic account compromise. It’s now under lockdown.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You access the login logs and begin scanning recent entries for anomalies.","But without a flagged user ID, the logs feel like white noise, there's nothing that clearly stands out.","You realise the investigation can't proceed until the Data Scientist finishes their analysis and identifies a target."]}},ne:{"command-centre":{enabler:["You're inside the Command Centre now.","It’s eerily quiet. Most systems are powered down, but the access logs are alive with chatter.","Your job is to figure out how the AI infiltrated the network. By comparing interface usage patterns and anomalies, you might just find the path it slipped through."],"enabler-complete":["You double-check the logs, but your work here is done.","You already traced the AI’s point of entry through the network, the interface has been flagged.","That intel’s now with the Software Engineer. Hopefully they can figure out what the AI's doing with it.","You should investigate some other rooms in case you can assist further."]},"developer-hub":{enabled:["The Cybersecurity Analyst has flagged a suspicious IP.","Your task: determine which internal systems this IP has touched.","Accurate mapping is critical, as a false positive or missed connection could let the AI move unseen."],"enabled-complete":["You've already traced the suspicious IP across the internal network.","Every system it touched has been flagged and logged.","There’s nothing more to pull from this trace. Your part in the assessment is done.","Hopefully that map gives the others a fighting chance.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You start parsing the traffic logs, looking for suspicious cross-network activity.","A few odd patterns emerge, but none have a confirmed source. It's all guesswork without a flagged IP.","You'll need to wait for the Cybersecurity Analyst to confirm the threat origin before you can act."]}},se:{"research-lab":{enabler:["Something doesn’t add up.","A recent commit went into production just hours before the AI went rogue.","Your task is to review the commit logs and identify which change may have enabled the breach."],"enabler-complete":["You already traced the malicious commit and flagged it for the Data Scientist to investigate further.","Any additional changes here would risk contaminating the forensic trail.","You should investigate some other rooms in case you can assist further."]},"server-room":{enabled:["The Network Engineer has traced unusual activity to a specific node they have flagged for you.","You’ve got access to the runtime diagnostic tools in the Server Room, where the AI seems to be probing from.","Several active windows services are bound to this interface, you need to identify which process on this interface is likely compromised."],"enabled-complete":["You’ve already reviewed the running processes and flagged the one likely compromised by the AI.","Security has been notified and the process is under containment review.","You’ve done all you can here, check in with the rest of your team.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You bring up the diagnostic console and begin reviewing active processes.","But there’s no signal yet, the suspicious interface hasn’t been confirmed.","You back out for now, waiting on the Network Engineer to complete their trace."]}},ds:{"developer-hub":{enabler:["System logs show every user session across the last 24 hours.","Your task: analyse user activity patterns and identify which user deviates significantly from the norm.","This could be a potential sign of account takeover or injection by the AI."],"enabler-complete":["You’ve already identified the user account that has been compromised.","Hopefully that brings the team one step closer to catching up to the AI.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You've been handed a dataset tied to a recent commit. The Software Engineer believes it might be compromised.","Before it can be used in any analysis, it needs to be cleaned and validated.","Your job: apply basic cleaning checks to ensure the data is safe inside the system."],"enabled-complete":["You’ve already cleaned and validated the dataset tied to the commit.","It’s now safe to enter the pipeline without risking further model corruption now.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You prepare your validation tools and load up the staging area.","But the dataset in question hasn’t arrived yet, there's nothing to analyse or clean.","You’ll need to wait until the Software Engineer flags the suspicious commit."]}}},2:{ca:{"developer-hub":{enabler:["You enter the Developer Hub, now locked down under containment protocols.","Build systems are under siege. The AI is launching internal attacks and sabotaging developer tools.","Firewall logs show erratic behavior from multiple endpoints. One of the service accounts has been hijacked.","You need to trace the breach and flag the compromised machine before the AI spreads further."],"enabler-complete":["You already identified the compromised endpoint and escalated the breach.","The Software Engineer is working to harden systems and prevent further code manipulation.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You return to the Command Centre with alerts stacking up for rogue endpoint behavior.","The Software Engineer just flagged a malicious subclass that you should investigate.","Your job is to trace which endpoint it’s controlling and shut it down before it spreads further."],"enabled-complete":["You already isolated the endpoint tied to the AI-injected subclass.","Outbound traffic from the compromised node has been cut off.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You open the endpoint diagnostics dashboard.","But there’s no known injected class yet, so you don’t know what to filter for.","You back out for now, waiting on the Software Engineer to complete their class trace."]}},ne:{"research-lab":{enabler:["You enter the Research Lab. Telemetry data is out of range across multiple panels.","Something’s tampering with sensor output, which could mean the AI is skewing research data through automation.","You work to pinpoint the source."],"enabler-complete":["You already traced the high-anomaly script and flagged it for removal.","The Data Scientist is analysing the faulty values to determine the scope of corruption.","You should investigate some other rooms in case you can assist further."]},"server-room":{enabled:["You enter the Server Room. Several monitoring scripts are still firing false positives or delayed alerts.","The Data Scientist just flagged an engineered feature as invalid.  It’s leaking post-event data into real-time systems.","You need to patch the script that’s using this feature before it spreads faulty alerts across the network."],"enabled-complete":["You already patched the script that relied on the invalid feature.","Real-time endpoint monitoring has been restored to safe conditions.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You review the list of active batch monitoring scripts.","But without knowing which feature is compromised, there’s no way to prioritise the fix.","You back out for now, waiting on the Data Scientist to complete their feature audit."]}},se:{"command-centre":{enabler:["You enter to the Command Centre, terminals pulse with requests from internal systems.","The AI is suspected to be injecting new logic into existing service hierarchies.","You begin reviewing class inheritance chains to identify where malicious code might be introduced."],"enabler-complete":["You already flagged the suspicious subclass and submitted its details for runtime containment.","The Network Engineer is following up to trace execution patterns.","You should investigate some other rooms in case you can assist further."]},"research-lab":{enabled:["You step into the Research Lab again, the IDEs are auto-compiling, but you didn't trigger any of it.","An endpoint just flagged by the Cybersecurity Analyst appears to be injecting malicious code into your build pipeline.","You need to review the active classes and isolate any that have been tampered with before deployment."],"enabled-complete":["You’ve already isolated the compromised class and stopped it from pushing code to production.","Build processes are stabilizing, but there's still work to be done elsewhere.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You bring up the class monitor and scan for suspicious activity in the codebase.","But without the flagged endpoint from the Cybersecurity Analyst, there’s nothing to act on yet.","You back out for now and wait for the breach report to come through."]}},ds:{"server-room":{enabler:["You enter the Server Room. Model dashboards are lighting up with inconsistent predictions.","The intrusion detection model is failing to catch obvious threats. Something’s off with the inputs.","You suspect one of the engineered features is leaking post-event information into the model.","Time to find it before the Cybersecurity team gets blindsided again."],"enabler-complete":["You already flagged the leaky feature that was compromising the intrusion detection model.","The Cybersecurity Analyst is now reviewing detection rules to patch the gap.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You return to the Command Centre and open your modeling notebook, but something’s off.","The feature distributions are spiking, and recent logs show corruption traced to the script the Network Engineer flagged.","One of your engineered features has been poisoned.","You need to isolate and remove it before the next training run goes live."],"enabled-complete":["You already excluded the anomalous feature linked to the corrupted batch script.","Model variance has stabilized, and upstream flags are in place.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You load the latest feature set into your modeling pipeline.","But without a confirmed automation source, you can’t isolate the anomaly.","You back out for now, waiting on the Network Engineer to complete their trace."]}}},3:{ca:{"server-room":{enabler:["You enter the Server Room. Security dashboards are reporting anomalies in access logs.","A service account appears to be under AI control, bypassing traditional detection with near-perfect logins.","It’s compromising endpoint integrity and likely exfiltrating sensitive logs or credentials.","Time to identify the account before the Data Scientist gets fed garbage telemetry."],"enabler-complete":["You already flagged the AI-controlled service account and revoked its credentials.","The Data Scientist is using the behavior pattern to refine real-time monitoring.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You step into the Command Centre and pull the active config for `log_api` which is the service running on the port sent over by the Network Engineer.","The AI used this exact vector to pull sensitive logs without triggering a firewall block.","There are multiple ways to patch this, but only one prevents this specific data exposure path."],"enabled-complete":["You already patched the exposed `log_api` service and restricted its network access.","No further breach attempts have occurred on that vector.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You begin auditing exposed services for suspicious behavior.","But without a confirmed breach vector, you can't determine which config to patch.","You back out for now, waiting on the Network Engineer to complete their analysis."]}},ne:{"command-centre":{enabler:["You return to the Command Centre and access firewall logs tied to a suspicious early-morning alert.","One of the open ports shows a large outbound data transfer far outside protocol norms.","The AI likely used this path to bypass containment layers.","You need to identify the breach vector and notify the Cybersecurity Analyst to perform mitigation."],"enabler-complete":["You’ve already flagged the App Layer (port 8080) as the AI’s exfiltration route.","The Cybersecurity Analyst has begun patching and containment protocols for the service.","You should investigate some other rooms in case you can assist further."]},"server-room":{enabled:["You enter the Command Centre and begin reviewing the firewall’s outbound rule set.","Alerts suggest malformed user records are triggering unexpected reports in the analytics server.","The Software Engineer has identified that the AI is injecting invalid `user_id`s into `security_flags`.","Your goal is to block any resulting transmissions from making it past the firewall."],"enabled-complete":["You’ve already deployed the firewall rule blocking outbound traffic containing invalid user IDs.","Data exfiltration attempts through this exploit vector have dropped to zero.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You access the command terminal for managing firewall rules.","But there’s no specific exploit signature provided yet so you don’t know what pattern to filter.","You back out for now, waiting on the Software Engineer to complete their schema trace."]}},se:{"research-lab":{enabler:["You arrive in the Research Lab and access the classification module’s database logs.","A warning catches your eye. Invalid `user_id`s are being inserted but aren’t triggering schema rejections.","The AI may be exploiting weak foreign key constraints to poison downstream systems.","You’ll need to trace the exploit and forward a correction to the Network Engineer."],"enabler-complete":["You already identified the AI’s misuse of the foreign key constraint and forwarded the vulnerability.","The Network Engineer has begun locking down schema validation rules.","You should investigate some other rooms in case you can assist further."]},"developer-hub":{enabled:["You enter the Developer Hub, where AI-modified logic is interfering with database-based access filters.","The Data Scientist sent over the faulty decision logic. It’s somehow bypassing malicious inputs.","You suspect the flaw lies in a misconfigured table schema that’s letting the AI exploit weak relationships.","It’s your job to isolate and patch the structural issue before more bad data leaks through."],"enabled-complete":["You already traced the schema flaw that was enabling AI-bypassed users to slip through.","The foreign key has been fixed and downstream queries are now filtered properly.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You log into the internal schema management dashboard.","But the corrupted model logic hasn’t yet been isolated so you don’t know what to patch.","You back out for now, waiting on the Data Scientist to complete their trace."]}},ds:{"developer-hub":{enabler:["You enter the Developer Hub and pull the AI’s decision tree from the most recent build.","Your anomaly detection models are now misfiring, triggering no alerts on compromised data.","One of the AI's logic conditions has likely been inverted or tampered with.","Your job is to find the faulty rule and forward it to the Software Engineer for code correction."],"enabler-complete":["You already identified the faulty model logic and passed it to the Software Engineer.","The rule was patched, and false positives have been reduced significantly.","You should investigate some other rooms in case you can assist further."]},"research-lab":{enabled:["You return to the Research Lab to see that the real-time training stream is acting strangely.","Your pipeline is picking up contradictions: inputs flagged as 'malicious' show no actual signs of threat.","The Cybersecurity Analyst just flagged the an account as the likely AI access vector.","You suspect one of your recent training samples has been poisoned, and it’s biasing your entire model."],"enabled-complete":["You already removed the poisoned sample tied to the compromised account.","Training set variance has dropped and retraining has resumed.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You load the training logs from the real-time stream.","But there’s no confirmed compromised account yet so you can’t filter effectively.","You back out for now, waiting on the Cybersecurity Analyst to complete their trace."]}}},"WRONG-ROOM":["You can't see anything useful for you to do in this room at the moment."]};(function(){window.history.forward();function n(){window.history.forward()}window.addEventListener("load",n),window.addEventListener("pageshow",n),window.addEventListener("focus",n),document.addEventListener("keydown",function(e){if(e.key==="F5"||e.ctrlKey&&e.key==="r"||e.ctrlKey&&e.shiftKey&&e.key==="R"||e.altKey&&(e.key==="ArrowLeft"||e.key==="ArrowRight"))return e.preventDefault(),!1})})();const Pp={apiKey:"AIzaSyAzlzCHei-FyaNyWRZ7Or-iLTdQRGjLWUY",authDomain:"athena2-f5bdf.firebaseapp.com",projectId:"athena2-f5bdf",storageBucket:"athena2-f5bdf.firebasestorage.app",messagingSenderId:"571762315023",appId:"1:571762315023:web:09aea3b0fdf575ab79387a"},kp=hl(Pp),_e=hp(kp);async function Vp(n){return(await $c(Sn(_e,"rooms"),{name:n,created:Date.now(),status:"waiting",currentDay:0,players:{}})).id}async function Dp(n,e,t){return(await $c(Sn(_e,"users"),{userName:n,created:Date.now(),roomName:e,roomId:t})).id}async function Np(n,e,t,r){const i=Pe(_e,"rooms",t);await Be(i,{[`players.${n}`]:{name:e,role:null,readyStatus:0,isHost:r,enablerComplete:!1,enabledComplete:!1,enabledValue:null}})}async function xp(n,e,t,r){const i=Pe(_e,"rooms",r);await Be(i,{[`players.${n}`]:Rp()})}async function Op(n=null,e=null,t=null){if(e){const r=await Hr(Pe(_e,"rooms",e));if(!r.exists())return null;const i=r.data();return{roomName:i.name,roomPlayers:i.players,currentDay:i.currentDay,dayScores:i.dayScores}}return n?(await nl(Xi(Sn(_e,"rooms"),Ji("status","==",n),Zi("created","desc")))).docs.map(i=>({roomId:i.id,roomName:i.data().name,roomPlayers:i.data().players})):t?(await nl(Xi(Sn(_e,"rooms"),Ji("day","==",t),Zi("created","desc")))).docs.map(i=>({roomId:i.id,roomName:i.data().name,roomPlayers:i.data().players})):[]}async function Rr(n,e,t,r){const i=document.getElementById("loadingContainer");i&&(i.style.display="flex");try{if(!n||!e||!t)throw new Error(`updatePlayer failed: userId (${n}), roomId (${e}), or key (${t}) is null or undefined.`);const o=Pe(_e,"rooms",e);(await Hr(o)).exists()?await Be(o,{[`players.${n}.${t}`]:r}):console.warn(`updatePlayer warning: Room ${e} does not exist.`)}catch(o){console.error("updatePlayer error:",o)}finally{i&&(i.style.display="none")}}async function Mp(n,e=!1){const t=Pe(_e,"rooms",n);e?await Be(t,{currentDay:-1}):await Be(t,{currentDay:qs(1)})}async function Lp(n){const e=Pe(_e,"rooms",n);await Be(e,{ackReshuffle:qs(1)})}async function Wc(n,e=!1){const t=Pe(_e,"rooms",n);e?await Be(t,{enabledCompletions:0}):await Be(t,{enabledCompletions:qs(1)})}async function Fp(n,e){const t=Pe(_e,"rooms",n),r=await Hr(t);if(r.exists()){const o=[...r.data().dayScores||[],e];await Be(t,{dayScores:o})}else console.error("Room does not exist")}async function Up(n){const e=Pe(_e,"rooms",n);await bp(e)}function Bp(n,e){const t=Pe(_e,"rooms",n);return Hc(t,r=>{if(r.exists()){const i=r.data();e({roomId:n,roomName:i.name,roomPlayers:i.players,currentDay:i.currentDay,enabledCompletions:i.enabledCompletions,ackReshuffle:i.ackReshuffle})}else e(null)})}function Yp(n){const e=Sn(_e,"rooms"),t=Xi(e,Ji("status","==","waiting"),Zi("created","desc"));return Hc(t,r=>{const i=r.docs.map(o=>({roomId:o.id,roomName:o.data().name,roomPlayers:o.data().players}));n(i)})}function Kc(n,e,t,r,i,o){var c,h;const a=((h=(c=Ci==null?void 0:Ci[n])==null?void 0:c[e])==null?void 0:h[t])||null;return a===null?[!1,null]:(a==null?void 0:a.enabler)||!1?r?[!1,null]:[!0,"enabler"]:!i&&o?[!0,"enabled"]:[!1,null]}function Qc(n,e,t,r){const i=n.currentDay,o=localStorage.getItem("connectedUserId"),a=rl[i][t][e],c=n.roomPlayers[o].enablerComplete,h=n.roomPlayers[o].enabledComplete,d=n.roomPlayers[o].enabledValue!=null;r.innerHTML="";const[m,_]=Kc(i,t,e,c,h,d);console.log(`Player has entered an actionable room: ${m}`),console.log(`Puzzle to be generated: ${_}`);for(const[w,R]of Object.entries(a))if(w!="CORRECT_ACTION"){const P=document.createElement("button");P.id=w.replace(/\s+/g,"").toLowerCase()+"Btn",P.className="std-button role-button",P.style.width="250px",P.textContent=w;let D=R;m||(D=rl["NO-ACTION"]),P.onclick=async()=>{await typewriter.showSequence(D),w===a.CORRECT_ACTION?(console.log("Correct action clicked"),_!=null&&(r.innerHTML="",Xc(r,i,e,t,_,n))):console.log("Incorrect action clicked")},r.appendChild(P)}}function jp(n,e){e.innerHTML="",n&&n.roomPlayers&&Object.entries(n.roomPlayers).sort((r,i)=>{const o=r[1].name.toLowerCase(),a=i[1].name.toLowerCase();return o.localeCompare(a)}).forEach(([r,i])=>{const o=document.createElement("li"),a={ds:"Data Scientist",se:"Software Engineer",ne:"Network Engineer",ca:"Cybersecurity Analyst"};console.log(`Player ${i.name} has role:`,i.role);const c=a[i.role]||"Unassigned";o.innerHTML=`${i.name.replace("You","<br>")} - ${c}`,r===localStorage.getItem("connectedUserId")&&(o.classList.add("current-player"),o.style.fontWeight="bold",o.style.color="#4CAF50"),e.appendChild(o)})}async function Xc(n,e,t,r,i,o){var X,Re,te;const a=(te=(Re=(X=Cp[e])==null?void 0:X[r])==null?void 0:Re[t])==null?void 0:te[i];if(console.log(`PuzzleData ${a}`),!a){console.error("Puzzle data not found for:",{currentDay:e,roomName:t,currentRole:r,puzzleType:i});return}n.innerHTML="";const c=document.createElement("div");c.className="puzzle-container";const h=document.createElement("h2");h.className="puzzle-title",h.textContent=a.title,c.appendChild(h);const d=document.createElement("p");d.className="puzzle-description",d.innerHTML=a.prompt,c.appendChild(d);const m=document.createElement("div");m.className="game-table-container";const _=document.createElement("table");_.className="game-table";const w=document.createElement("thead"),R=document.createElement("tr");a.tableHeaders.forEach(E=>{const p=document.createElement("th");p.textContent=E,R.appendChild(p)}),w.appendChild(R),_.appendChild(w);const P=document.createElement("tbody");a.tableRows.forEach((E,p)=>{const g=document.createElement("tr");g.className="puzzle-row",g.dataset.rowIndex=p,E.forEach(v=>{const T=document.createElement("td");T.textContent=v,g.appendChild(T)}),g.addEventListener("click",()=>{document.querySelectorAll(".puzzle-row.selected").forEach(v=>{v.classList.remove("selected")}),g.classList.add("selected")}),P.appendChild(g)}),_.appendChild(P),m.appendChild(_),c.appendChild(m);const D=document.createElement("p");D.className="puzzle-instruction",D.textContent=a.hint||"No hint available",D.style.display="none",c.appendChild(D);let V=!1;const j=document.createElement("div");j.className="puzzle-button-container";const F=document.createElement("button");F.className="std-button puzzle-hint",F.textContent="Show Hint",F.style.marginRight="10px";const B=document.createElement("button");B.className="std-button puzzle-submit",B.textContent="Submit Answer",F.addEventListener("click",()=>{D.style.display="block",F.style.display="none",V=!0}),B.addEventListener("click",async()=>{const E=document.querySelector(".puzzle-row.selected");if(!E){const Ce=document.createElement("div");Ce.className="puzzle-error",Ce.textContent="Please select a row first!",c.appendChild(Ce),setTimeout(()=>{Ce.parentNode&&Ce.remove()},3e3);return}const p=parseInt(E.dataset.rowIndex),g=p===a.correctAnswerIndex;B.disabled=!0,B.textContent="Processing...";const v=i==="enabler"?"enablerComplete":"enabledComplete",T=localStorage.getItem("connectedUserId"),A=o.roomPlayers[T].enablerComplete,y=o.roomPlayers[T].enabledComplete;localStorage.setItem("enablerComplete",i==="enabler"),localStorage.setItem("enabledComplete",i==="enabled");const Gr=(i==="enabler"?!0:A)&&(i==="enabled"?!0:y),dt=g?a.feedback.correct.slice(0,-1):a.feedback.incorrect.slice(0,-1),ft=Gr?"You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up.":"You should investigate other rooms in case you can assist further.";await typewriter.showSequence([...dt,ft],{onContinue:async()=>{const Ce=localStorage.getItem("connectedUserId"),mt=localStorage.getItem("connectedRoomId");Rr(Ce,mt,v,!0),n.innerHTML="",Qc(o,t,r,n);const Wr={day:e,type:i,room:t,role:r,correct:g,selectedIndex:p,hintUsed:V,timestamp:new Date().toISOString()};if(Jc(Ce,mt,Wr),i==="enabler"){console.log("In Enabler Puzzle");const ke=Sp[e][r];console.log(`Role to enable: ${ke}`);const ie=o.roomPlayers;console.log(`Room Players: ${ie}`);for(const[Kr,Ge]of Object.entries(ie))console.log(`Role: ${Ge.role}`),Ge.role===ke&&(console.log("Found player to update, updating"),await Rr(Kr,mt,"enabledValue",p))}else Wc(mt)}})}),j.appendChild(F),j.appendChild(B),c.appendChild(j),n.appendChild(c)}async function Jc(n,e,t){var o;const r=Pe(_e,"rooms",e),i=await Hr(r);if(i.exists()){const h=[...(((o=i.data().players)==null?void 0:o[n])||{}).puzzleAnswers||[],t];await Be(r,{[`players.${n}.puzzleAnswers`]:h})}}async function qp(n){const e=localStorage.getItem("connectedUserId"),t=localStorage.getItem("connectedRoomId");document.getElementById("loadingContainer").style.display="flex",await Rr(e,t,"currentRoom",n),localStorage.setItem("currentRoomName",n),window.location.href=`${n.toLowerCase().replace(" ","-")}.html`}const $p=Object.freeze(Object.defineProperty({__proto__:null,ackReshuffle:Lp,addUserToRoom:Np,appendDayScore:Fp,appendPuzzleAnswer:Jc,createRoom:Vp,createUser:Dp,deleteRoom:Up,generateActions:Qc,generatePuzzle:Xc,incrementEnabledCompletions:Wc,isRoomActionableRightNow:Kc,listenToAllRooms:Yp,listenToRoom:Bp,loadRooms:Op,navigateToRoom:qp,progressDay:Mp,removeUserFromRoom:xp,updatePlayer:Rr,updateRoleList:jp},Symbol.toStringTag,{value:"Module"}));export{Dp as a,Np as b,Vp as c,Bp as d,Lp as e,Up as f,Yp as g,jp as h,Sp as i,Fp as j,Wc as k,Op as l,Ci as m,qp as n,Qc as o,Mp as p,$p as q,xp as r,Rr as u};
