(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Ru=()=>{};var Yo={};/**
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
 */const tl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cu=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],c=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,_=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(w=64)),r.push(t[m],t[_],t[w],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||_==null)throw new Su;const w=o<<2|c>>4;if(r.push(w),d!==64){const R=c<<4&240|d>>2;if(r.push(R),_!==64){const P=d<<6&192|_;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Su extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pu=function(n){const e=tl(n);return nl.encodeByteArray(e,!0)},cr=function(n){return Pu(n).replace(/\./g,"")},Vu=function(n){try{return nl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Du=()=>ku().__FIREBASE_DEFAULTS__,Nu=()=>{if(typeof process>"u"||typeof Yo>"u")return;const n=Yo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vu(n[1]);return e&&JSON.parse(e)},Xi=()=>{try{return Ru()||Du()||Nu()||xu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ou=n=>{var e,t;return(t=(e=Xi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mu=n=>{const e=Ou(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},rl=()=>{var n;return(n=Xi())===null||n===void 0?void 0:n.config};/**
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
 */class Lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ji(n){return n.endsWith(".cloudworkstations.dev")}async function Fu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Uu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cr(JSON.stringify(t)),cr(JSON.stringify(a)),""].join(".")}const hn={};function Bu(){const n={prod:[],emulator:[]};for(const e of Object.keys(hn))hn[e]?n.emulator.push(e):n.prod.push(e);return n}function Yu(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let jo=!1;function ju(n,e){if(typeof window>"u"||typeof document>"u"||!Ji(window.location.host)||hn[n]===e||hn[n]||jo)return;hn[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=Bu().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,R){w.setAttribute("width","24"),w.setAttribute("id",R),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{jo=!0,a()},w}function m(w,R){w.setAttribute("id",R),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function _(){const w=Yu(r),R=t("text"),P=document.getElementById(R)||document.createElement("span"),D=t("learnmore"),V=document.getElementById(D)||document.createElement("a"),B=t("preprendIcon"),F=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const q=w.element;c(q),m(V,D);const J=d();h(F,B),q.append(F,P,V,J),document.body.appendChild(q)}o?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function qu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zu(){var n;const e=(n=Xi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $u(){return!zu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hu(){try{return typeof indexedDB=="object"}catch{return!1}}function Gu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Wu="FirebaseError";class Ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wu,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Ku(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ut(i,c,r)}}function Ku(n,e){return n.replace(Qu,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qu=/\{\$([^}]+)}/g;function ur(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(qo(o)&&qo(a)){if(!ur(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function qo(n){return n!==null&&typeof n=="object"}/**
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
 */function Me(n){return n&&n._delegate?n._delegate:n}class gn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gt="[DEFAULT]";/**
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
 */class Xu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zu(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ju(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ju(n){return n===gt?void 0:n}function Zu(n){return n.instantiationMode==="EAGER"}/**
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
 */class eh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const th={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},nh=$.INFO,rh={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},ih=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=rh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=nh,this._logHandler=ih,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const sh=(n,e)=>e.some(t=>n instanceof t);let zo,$o;function oh(){return zo||(zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ah(){return $o||($o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,Ai=new WeakMap,al=new WeakMap,pi=new WeakMap,Zi=new WeakMap;function lh(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Je(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ol.set(t,n)}).catch(()=>{}),Zi.set(e,n),e}function ch(n){if(Ai.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ai.set(n,e)}let bi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ai.get(n);if(e==="objectStoreNames")return n.objectStoreNames||al.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uh(n){bi=n(bi)}function hh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(gi(this),e,...t);return al.set(r,e.sort?e.sort():[e]),Je(r)}:ah().includes(n)?function(...e){return n.apply(gi(this),e),Je(ol.get(this))}:function(...e){return Je(n.apply(gi(this),e))}}function dh(n){return typeof n=="function"?hh(n):(n instanceof IDBTransaction&&ch(n),sh(n,oh())?new Proxy(n,bi):n)}function Je(n){if(n instanceof IDBRequest)return lh(n);if(pi.has(n))return pi.get(n);const e=dh(n);return e!==n&&(pi.set(n,e),Zi.set(e,n)),e}const gi=n=>Zi.get(n);function fh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),c=Je(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Je(a.result),h.oldVersion,h.newVersion,Je(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const mh=["get","getKey","getAll","getAllKeys","count"],ph=["put","add","delete","clear"],yi=new Map;function Ho(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yi.get(e))return yi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ph.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mh.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&h.done]))[0]};return yi.set(e,o),o}uh(n=>({...n,get:(e,t,r)=>Ho(e,t)||n.get(e,t,r),has:(e,t)=>!!Ho(e,t)||n.has(e,t)}));/**
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
 */class gh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ri="@firebase/app",Go="0.13.1";/**
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
 */const Ye=new sl("@firebase/app"),_h="@firebase/app-compat",wh="@firebase/analytics-compat",vh="@firebase/analytics",Th="@firebase/app-check-compat",Eh="@firebase/app-check",Ih="@firebase/auth",Ah="@firebase/auth-compat",bh="@firebase/database",Rh="@firebase/data-connect",Ch="@firebase/database-compat",Sh="@firebase/functions",Ph="@firebase/functions-compat",Vh="@firebase/installations",kh="@firebase/installations-compat",Dh="@firebase/messaging",Nh="@firebase/messaging-compat",xh="@firebase/performance",Oh="@firebase/performance-compat",Mh="@firebase/remote-config",Lh="@firebase/remote-config-compat",Fh="@firebase/storage",Uh="@firebase/storage-compat",Bh="@firebase/firestore",Yh="@firebase/ai",jh="@firebase/firestore-compat",qh="firebase",zh="11.9.0";/**
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
 */const Ci="[DEFAULT]",$h={[Ri]:"fire-core",[_h]:"fire-core-compat",[vh]:"fire-analytics",[wh]:"fire-analytics-compat",[Eh]:"fire-app-check",[Th]:"fire-app-check-compat",[Ih]:"fire-auth",[Ah]:"fire-auth-compat",[bh]:"fire-rtdb",[Rh]:"fire-data-connect",[Ch]:"fire-rtdb-compat",[Sh]:"fire-fn",[Ph]:"fire-fn-compat",[Vh]:"fire-iid",[kh]:"fire-iid-compat",[Dh]:"fire-fcm",[Nh]:"fire-fcm-compat",[xh]:"fire-perf",[Oh]:"fire-perf-compat",[Mh]:"fire-rc",[Lh]:"fire-rc-compat",[Fh]:"fire-gcs",[Uh]:"fire-gcs-compat",[Bh]:"fire-fst",[jh]:"fire-fst-compat",[Yh]:"fire-vertex","fire-js":"fire-js",[qh]:"fire-js-all"};/**
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
 */const hr=new Map,Hh=new Map,Si=new Map;function Wo(n,e){try{n.container.addComponent(e)}catch(t){Ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dr(n){const e=n.name;if(Si.has(e))return Ye.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,n);for(const t of hr.values())Wo(t,n);for(const t of Hh.values())Wo(t,n);return!0}function Gh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new il("app","Firebase",Kh);/**
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
 */class Qh{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
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
 */const Xh=zh;function ll(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ci,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(t||(t=rl()),!t)throw Ze.create("no-options");const o=hr.get(i);if(o){if(ur(t,o.options)&&ur(r,o.config))return o;throw Ze.create("duplicate-app",{appName:i})}const a=new eh(i);for(const h of Si.values())a.addComponent(h);const c=new Qh(t,r,a);return hr.set(i,c),c}function Jh(n=Ci){const e=hr.get(n);if(!e&&n===Ci&&rl())return ll();if(!e)throw Ze.create("no-app",{appName:n});return e}function Vt(n,e,t){var r;let i=(r=$h[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ye.warn(c.join(" "));return}dr(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zh="firebase-heartbeat-database",ed=1,yn="firebase-heartbeat-store";let _i=null;function cl(){return _i||(_i=fh(Zh,ed,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ze.create("idb-open",{originalErrorMessage:n.message})})),_i}async function td(n){try{const t=(await cl()).transaction(yn),r=await t.objectStore(yn).get(ul(n));return await t.done,r}catch(e){if(e instanceof Ut)Ye.warn(e.message);else{const t=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(t.message)}}}async function Ko(n,e){try{const r=(await cl()).transaction(yn,"readwrite");await r.objectStore(yn).put(e,ul(n)),await r.done}catch(t){if(t instanceof Ut)Ye.warn(t.message);else{const r=Ze.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(r.message)}}}function ul(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nd=1024,rd=30;class id{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new od(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>rd){const a=ad(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qo(),{heartbeatsToSend:r,unsentEntries:i}=sd(this._heartbeatsCache.heartbeats),o=cr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ye.warn(t),""}}}function Qo(){return new Date().toISOString().substring(0,10)}function sd(n,e=nd){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Xo(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xo(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class od{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hu()?Gu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await td(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ko(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ko(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xo(n){return cr(JSON.stringify({version:2,heartbeats:n})).length}function ad(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ld(n){dr(new gn("platform-logger",e=>new gh(e),"PRIVATE")),dr(new gn("heartbeat",e=>new id(e),"PRIVATE")),Vt(Ri,Go,n),Vt(Ri,Go,"esm2017"),Vt("fire-js","")}ld("");var cd="firebase",ud="11.9.1";/**
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
 */Vt(cd,ud,"app");var Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var et,hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function y(){}y.prototype=p.prototype,E.D=p.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(v,T,A){for(var g=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)g[Ce-2]=arguments[Ce];return p.prototype[T].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,y){y||(y=0);var v=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)v[T]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(T=0;16>T;++T)v[T]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=E.g[0],y=E.g[1],T=E.g[2];var A=E.g[3],g=p+(A^y&(T^A))+v[0]+3614090360&4294967295;p=y+(g<<7&4294967295|g>>>25),g=A+(T^p&(y^T))+v[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(y^A&(p^y))+v[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(p^T&(A^p))+v[3]+3250441966&4294967295,y=T+(g<<22&4294967295|g>>>10),g=p+(A^y&(T^A))+v[4]+4118548399&4294967295,p=y+(g<<7&4294967295|g>>>25),g=A+(T^p&(y^T))+v[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(y^A&(p^y))+v[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(p^T&(A^p))+v[7]+4249261313&4294967295,y=T+(g<<22&4294967295|g>>>10),g=p+(A^y&(T^A))+v[8]+1770035416&4294967295,p=y+(g<<7&4294967295|g>>>25),g=A+(T^p&(y^T))+v[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(y^A&(p^y))+v[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(p^T&(A^p))+v[11]+2304563134&4294967295,y=T+(g<<22&4294967295|g>>>10),g=p+(A^y&(T^A))+v[12]+1804603682&4294967295,p=y+(g<<7&4294967295|g>>>25),g=A+(T^p&(y^T))+v[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(y^A&(p^y))+v[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(p^T&(A^p))+v[15]+1236535329&4294967295,y=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(y^T))+v[1]+4129170786&4294967295,p=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(p^y))+v[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^y&(A^p))+v[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^p&(T^A))+v[0]+3921069994&4294967295,y=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(y^T))+v[5]+3593408605&4294967295,p=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(p^y))+v[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^y&(A^p))+v[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^p&(T^A))+v[4]+3889429448&4294967295,y=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(y^T))+v[9]+568446438&4294967295,p=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(p^y))+v[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^y&(A^p))+v[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^p&(T^A))+v[8]+1163531501&4294967295,y=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(y^T))+v[13]+2850285829&4294967295,p=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(p^y))+v[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^y&(A^p))+v[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^p&(T^A))+v[12]+2368359562&4294967295,y=T+(g<<20&4294967295|g>>>12),g=p+(y^T^A)+v[5]+4294588738&4294967295,p=y+(g<<4&4294967295|g>>>28),g=A+(p^y^T)+v[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^y)+v[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^p)+v[14]+4259657740&4294967295,y=T+(g<<23&4294967295|g>>>9),g=p+(y^T^A)+v[1]+2763975236&4294967295,p=y+(g<<4&4294967295|g>>>28),g=A+(p^y^T)+v[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^y)+v[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^p)+v[10]+3200236656&4294967295,y=T+(g<<23&4294967295|g>>>9),g=p+(y^T^A)+v[13]+681279174&4294967295,p=y+(g<<4&4294967295|g>>>28),g=A+(p^y^T)+v[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^y)+v[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^p)+v[6]+76029189&4294967295,y=T+(g<<23&4294967295|g>>>9),g=p+(y^T^A)+v[9]+3654602809&4294967295,p=y+(g<<4&4294967295|g>>>28),g=A+(p^y^T)+v[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^y)+v[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^p)+v[2]+3299628645&4294967295,y=T+(g<<23&4294967295|g>>>9),g=p+(T^(y|~A))+v[0]+4096336452&4294967295,p=y+(g<<6&4294967295|g>>>26),g=A+(y^(p|~T))+v[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~y))+v[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~p))+v[5]+4237533241&4294967295,y=T+(g<<21&4294967295|g>>>11),g=p+(T^(y|~A))+v[12]+1700485571&4294967295,p=y+(g<<6&4294967295|g>>>26),g=A+(y^(p|~T))+v[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~y))+v[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~p))+v[1]+2240044497&4294967295,y=T+(g<<21&4294967295|g>>>11),g=p+(T^(y|~A))+v[8]+1873313359&4294967295,p=y+(g<<6&4294967295|g>>>26),g=A+(y^(p|~T))+v[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~y))+v[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~p))+v[13]+1309151649&4294967295,y=T+(g<<21&4294967295|g>>>11),g=p+(T^(y|~A))+v[4]+4149444226&4294967295,p=y+(g<<6&4294967295|g>>>26),g=A+(y^(p|~T))+v[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~y))+v[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~p))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var y=p-this.blockSize,v=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=y;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(v[T++]=E.charCodeAt(A++),T==this.blockSize){i(this,v),T=0;break}}else for(;A<p;)if(v[T++]=E[A++],T==this.blockSize){i(this,v),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var y=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=y&255,y/=256;for(this.u(E),E=Array(16),p=y=0;4>p;++p)for(var v=0;32>v;v+=8)E[y++]=this.g[p]>>>v&255;return E};function o(E,p){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=p(E)}function a(E,p){this.h=p;for(var y=[],v=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;v&&A==p||(y[T]=A,v=!1)}this.g=y}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return _;if(0>E)return V(d(-E));for(var p=[],y=1,v=0;E>=y;v++)p[v]=E/y|0,y*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return V(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),v=_,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),v=v.j(A).add(d(g))):(v=v.j(y),v=v.add(d(g)))}return v}var _=h(0),w=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-V(this).m();for(var E=0,p=1,y=0;y<this.g.length;y++){var v=this.i(y);E+=(0<=v?v:4294967296+v)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+V(this).toString(E);for(var p=d(Math.pow(E,6)),y=this,v="";;){var T=J(y,p).g;y=B(y,T.j(p));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=T,P(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=B(this,E),D(E)?-1:P(E)?0:1};function V(E){for(var p=E.g.length,y=[],v=0;v<p;v++)y[v]=~E.g[v];return new a(y,~E.h).add(w)}n.abs=function(){return D(this)?V(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],v=0,T=0;T<=p;T++){var A=v+(this.i(T)&65535)+(E.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=g>>>16,A&=65535,g&=65535,y[T]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(E,p){return E.add(V(p))}n.j=function(E){if(P(this)||P(E))return _;if(D(this))return D(E)?V(this).j(V(E)):V(V(this).j(E));if(D(E))return V(this.j(V(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,y=[],v=0;v<2*p;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<E.g.length;T++){var A=this.i(v)>>>16,g=this.i(v)&65535,Ce=E.i(T)>>>16,$e=E.i(T)&65535;y[2*v+2*T]+=g*$e,F(y,2*v+2*T),y[2*v+2*T+1]+=A*$e,F(y,2*v+2*T+1),y[2*v+2*T+1]+=g*Ce,F(y,2*v+2*T+1),y[2*v+2*T+2]+=A*Ce,F(y,2*v+2*T+2)}for(v=0;v<p;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=p;v<2*p;v++)y[v]=0;return new a(y,0)};function F(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function q(E,p){this.g=E,this.h=p}function J(E,p){if(P(p))throw Error("division by zero");if(P(E))return new q(_,_);if(D(E))return p=J(V(E),p),new q(V(p.g),V(p.h));if(D(p))return p=J(E,V(p)),new q(V(p.g),p.h);if(30<E.g.length){if(D(E)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var y=w,v=p;0>=v.l(E);)y=Re(y),v=Re(v);var T=X(y,1),A=X(v,1);for(v=X(v,2),y=X(y,2);!P(v);){var g=A.add(v);0>=g.l(E)&&(T=T.add(y),A=g),v=X(v,1),y=X(y,1)}return p=B(E,T.j(p)),new q(T,p)}for(T=_;0<=E.l(p);){for(y=Math.max(1,Math.floor(E.m()/p.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),g=A.j(p);D(g)||0<g.l(E);)y-=v,A=d(y),g=A.j(p);P(A)&&(A=w),T=T.add(A),E=B(E,g)}return new q(T,E)}n.A=function(E){return J(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)&E.i(v);return new a(y,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)|E.i(v);return new a(y,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)^E.i(v);return new a(y,this.h^E.h)};function Re(E){for(var p=E.g.length+1,y=[],v=0;v<p;v++)y[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(y,E.h)}function X(E,p){var y=p>>5;p%=32;for(var v=E.g.length-y,T=[],A=0;A<v;A++)T[A]=0<p?E.i(A+y)>>>p|E.i(A+y+1)<<32-p:E.i(A+y);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,et=a}).apply(typeof Jo<"u"?Jo:typeof self<"u"?self:typeof window<"u"?window:{});var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dl,an,fl,rr,Pi,ml,pl,gl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jn=="object"&&Jn];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in u))break e;u=u[I]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&e(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,f=!1,I={next:function(){if(!f&&u<s.length){var b=u++;return{value:l(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,u){return s.call.apply(s.bind,arguments)}function _(s,l,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(l,I)}}return function(){return s.apply(l,arguments)}}function w(s,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:_,w.apply(null,arguments)}function R(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function P(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,I,b){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return l.prototype[I].apply(f,k)}}function D(s){const l=s.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function V(s,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const I=s.length||0,b=f.length||0;s.length=I+b;for(let k=0;k<b;k++)s[I+k]=f[k]}else s.push(f)}}class B{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(s){return/^[\s\xa0]*$/.test(s)}function q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function J(s){return J[" "](s),s}J[" "]=function(){};var Re=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function X(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function E(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function p(s){const l={};for(const u in s)l[u]=s[u];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,l){let u,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(u in f)s[u]=f[u];for(let b=0;b<y.length;b++)u=y[b],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function T(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=$r;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class Ce{constructor(){this.h=this.g=null}add(l,u){const f=$e.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var $e=new B(()=>new zr,s=>s.reset());class zr{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let He,$t=!1,$r=new Ce,Bs=()=>{const s=c.Promise.resolve(void 0);He=()=>{s.then(Hc)}};var Hc=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(u){A(u)}var l=$e;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}$t=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Gc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function Ht(s,l){if(he.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(Re){e:{try{J(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Wc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ht.aa.h.call(this)}}P(Ht,he);var Wc={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),Kc=0;function Qc(s,l,u,f,I){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=I,this.key=++Kc,this.da=this.fa=!1}function xn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function On(s){this.src=s,this.g={},this.h=0}On.prototype.add=function(s,l,u,f,I){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var k=Gr(s,l,f,I);return-1<k?(l=s[k],u||(l.fa=!1)):(l=new Qc(l,this.src,b,!!f,I),l.fa=u,s.push(l)),l};function Hr(s,l){var u=l.type;if(u in s.g){var f=s.g[u],I=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=I)&&Array.prototype.splice.call(f,I,1),b&&(xn(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Gr(s,l,u,f){for(var I=0;I<s.length;++I){var b=s[I];if(!b.da&&b.listener==l&&b.capture==!!u&&b.ha==f)return I}return-1}var Wr="closure_lm_"+(1e6*Math.random()|0),Kr={};function Ys(s,l,u,f,I){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Ys(s,l[b],u,f,I);return null}return u=zs(u),s&&s[Nn]?s.K(l,u,d(f)?!!f.capture:!1,I):Xc(s,l,u,!1,f,I)}function Xc(s,l,u,f,I,b){if(!l)throw Error("Invalid event type");var k=d(I)?!!I.capture:!!I,W=Xr(s);if(W||(s[Wr]=W=new On(s)),u=W.add(l,u,f,k,b),u.proxy)return u;if(f=Jc(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)Gc||(I=k),I===void 0&&(I=!1),s.addEventListener(l.toString(),f,I);else if(s.attachEvent)s.attachEvent(qs(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Jc(){function s(u){return l.call(s.src,s.listener,u)}const l=Zc;return s}function js(s,l,u,f,I){if(Array.isArray(l))for(var b=0;b<l.length;b++)js(s,l[b],u,f,I);else f=d(f)?!!f.capture:!!f,u=zs(u),s&&s[Nn]?(s=s.i,l=String(l).toString(),l in s.g&&(b=s.g[l],u=Gr(b,u,f,I),-1<u&&(xn(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete s.g[l],s.h--)))):s&&(s=Xr(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Gr(l,u,f,I)),(u=-1<s?l[s]:null)&&Qr(u))}function Qr(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Nn])Hr(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(qs(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Xr(l))?(Hr(u,s),u.h==0&&(u.src=null,l[Wr]=null)):xn(s)}}}function qs(s){return s in Kr?Kr[s]:Kr[s]="on"+s}function Zc(s,l){if(s.da)s=!0;else{l=new Ht(l,this);var u=s.listener,f=s.ha||s.src;s.fa&&Qr(s),s=u.call(f,l)}return s}function Xr(s){return s=s[Wr],s instanceof On?s:null}var Jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(s){return typeof s=="function"?s:(s[Jr]||(s[Jr]=function(l){return s.handleEvent(l)}),s[Jr])}function de(){Ge.call(this),this.i=new On(this),this.M=this,this.F=null}P(de,Ge),de.prototype[Nn]=!0,de.prototype.removeEventListener=function(s,l,u,f){js(this,s,l,u,f)};function _e(s,l){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new he(l,s);else if(l instanceof he)l.target=l.target||s;else{var I=l;l=new he(f,s),v(l,I)}if(I=!0,u)for(var b=u.length-1;0<=b;b--){var k=l.g=u[b];I=Mn(k,f,!0,l)&&I}if(k=l.g=s,I=Mn(k,f,!0,l)&&I,I=Mn(k,f,!1,l)&&I,u)for(b=0;b<u.length;b++)k=l.g=u[b],I=Mn(k,f,!1,l)&&I}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],f=0;f<u.length;f++)xn(u[f]);delete s.g[l],s.h--}}this.F=null},de.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},de.prototype.L=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function Mn(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,b=0;b<l.length;++b){var k=l[b];if(k&&!k.da&&k.capture==u){var W=k.listener,ae=k.ha||k.src;k.fa&&Hr(s.i,k),I=W.call(ae,f)!==!1&&I}}return I&&!f.defaultPrevented}function $s(s,l,u){if(typeof s=="function")u&&(s=w(s,u));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Hs(s){s.g=$s(()=>{s.g=null,s.i&&(s.i=!1,Hs(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class eu extends Ge{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Hs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(s){Ge.call(this),this.h=s,this.g={}}P(Gt,Ge);var Gs=[];function Ws(s){X(s.g,function(l,u){this.g.hasOwnProperty(u)&&Qr(l)},s),s.g={}}Gt.prototype.N=function(){Gt.aa.N.call(this),Ws(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zr=c.JSON.stringify,tu=c.JSON.parse,nu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function ei(){}ei.prototype.h=null;function Ks(s){return s.h||(s.h=s.i())}function Qs(){}var Wt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ti(){he.call(this,"d")}P(ti,he);function ni(){he.call(this,"c")}P(ni,he);var dt={},Xs=null;function Ln(){return Xs=Xs||new de}dt.La="serverreachability";function Js(s){he.call(this,dt.La,s)}P(Js,he);function Kt(s){const l=Ln();_e(l,new Js(l))}dt.STAT_EVENT="statevent";function Zs(s,l){he.call(this,dt.STAT_EVENT,s),this.stat=l}P(Zs,he);function we(s){const l=Ln();_e(l,new Zs(l,s))}dt.Ma="timingevent";function eo(s,l){he.call(this,dt.Ma,s),this.size=l}P(eo,he);function Qt(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function Xt(){this.g=!0}Xt.prototype.xa=function(){this.g=!1};function ru(s,l,u,f,I,b){s.info(function(){if(s.g)if(b)for(var k="",W=b.split("&"),ae=0;ae<W.length;ae++){var H=W[ae].split("=");if(1<H.length){var fe=H[0];H=H[1];var me=fe.split("_");k=2<=me.length&&me[1]=="type"?k+(fe+"="+H+"&"):k+(fe+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+u+`
`+k})}function iu(s,l,u,f,I,b,k){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+u+`
`+b+" "+k})}function Et(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+ou(s,u)+(f?" "+f:"")})}function su(s,l){s.info(function(){return"TIMEOUT: "+l})}Xt.prototype.info=function(){};function ou(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var b=I[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return Zr(u)}catch{return l}}var Fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},to={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ri;function Un(){}P(Un,ei),Un.prototype.g=function(){return new XMLHttpRequest},Un.prototype.i=function(){return{}},ri=new Un;function We(s,l,u,f){this.j=s,this.i=l,this.l=u,this.R=f||1,this.U=new Gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var ro={},ii={};function si(s,l,u){s.L=1,s.v=qn(Fe(l)),s.m=u,s.P=!0,io(s,null)}function io(s,l){s.F=Date.now(),Bn(s),s.A=Fe(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),wo(u.i,"t",f),s.C=0,u=s.j.J,s.h=new no,s.g=Lo(s.j,u?l:null,!s.m),0<s.O&&(s.M=new eu(w(s.Y,s,s.g),s.O)),l=s.U,u=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Gs[0]=I.toString()),I=Gs);for(var b=0;b<I.length;b++){var k=Ys(u,I[b],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),Kt(),ru(s.i,s.u,s.A,s.l,s.R,s.m)}We.prototype.ca=function(s){s=s.target;const l=this.M;l&&Ue(s)==3?l.j():this.Y(s)},We.prototype.Y=function(s){try{if(s==this.g)e:{const me=Ue(this.g);var l=this.g.Ba();const bt=this.g.Z();if(!(3>me)&&(me!=3||this.g&&(this.h.h||this.g.oa()||Ro(this.g)))){this.J||me!=4||l==7||(l==8||0>=bt?Kt(3):Kt(2)),oi(this);var u=this.g.Z();this.X=u;t:if(so(this)){var f=Ro(this.g);s="";var I=f.length,b=Ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ft(this),Jt(this);var k="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(b&&l==I-1)});f.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,iu(this.i,this.u,this.A,this.l,this.R,me,u),this.o){if(this.T&&!this.K){t:{if(this.g){var W,ae=this.g;if((W=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(W)){var H=W;break t}}H=null}if(u=H)Et(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ai(this,u);else{this.o=!1,this.s=3,we(12),ft(this),Jt(this);break e}}if(this.P){u=!0;let Pe;for(;!this.J&&this.C<k.length;)if(Pe=au(this,k),Pe==ii){me==4&&(this.s=4,we(14),u=!1),Et(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==ro){this.s=4,we(15),Et(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Et(this.i,this.l,Pe,null),ai(this,Pe);if(so(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||k.length!=0||this.h.h||(this.s=1,we(16),u=!1),this.o=this.o&&u,!u)Et(this.i,this.l,k,"[Invalid Chunked Response]"),ft(this),Jt(this);else if(0<k.length&&!this.W){this.W=!0;var fe=this.j;fe.g==this&&fe.ba&&!fe.M&&(fe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),fi(fe),fe.M=!0,we(11))}}else Et(this.i,this.l,k,null),ai(this,k);me==4&&ft(this),this.o&&!this.J&&(me==4?No(this.j,this):(this.o=!1,Bn(this)))}else Au(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),ft(this),Jt(this)}}}catch{}finally{}};function so(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function au(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?ii:(u=Number(l.substring(u,f)),isNaN(u)?ro:(f+=1,f+u>l.length?ii:(l=l.slice(f,f+u),s.C=f+u,l)))}We.prototype.cancel=function(){this.J=!0,ft(this)};function Bn(s){s.S=Date.now()+s.I,oo(s,s.I)}function oo(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Qt(w(s.ba,s),l)}function oi(s){s.B&&(c.clearTimeout(s.B),s.B=null)}We.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(su(this.i,this.A),this.L!=2&&(Kt(),we(17)),ft(this),this.s=2,Jt(this)):oo(this,this.S-s)};function Jt(s){s.j.G==0||s.J||No(s.j,s)}function ft(s){oi(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,Ws(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function ai(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||li(u.h,s))){if(!s.K&&li(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Kn(u),Gn(u);else break e;di(u),we(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=Qt(w(u.Za,u),6e3));if(1>=co(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else pt(u,11)}else if((s.K||u.g==s)&&Kn(u),!F(l))for(I=u.Da.g.parse(l),l=0;l<I.length;l++){let H=I[l];if(u.T=H[0],H=H[1],u.G==2)if(H[0]=="c"){u.K=H[1],u.ia=H[2];const fe=H[3];fe!=null&&(u.la=fe,u.j.info("VER="+u.la));const me=H[4];me!=null&&(u.Aa=me,u.j.info("SVER="+u.Aa));const bt=H[5];bt!=null&&typeof bt=="number"&&0<bt&&(f=1.5*bt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Pe=s.g;if(Pe){const Xn=Pe.g?Pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xn){var b=f.h;b.g||Xn.indexOf("spdy")==-1&&Xn.indexOf("quic")==-1&&Xn.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ci(b,b.h),b.h=null))}if(f.D){const mi=Pe.g?Pe.g.getResponseHeader("X-HTTP-Session-Id"):null;mi&&(f.ya=mi,K(f.I,f.D,mi))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=s;if(f.qa=Mo(f,f.J?f.ia:null,f.W),k.K){uo(f.h,k);var W=k,ae=f.L;ae&&(W.I=ae),W.B&&(oi(W),Bn(W)),f.g=k}else ko(f);0<u.i.length&&Wn(u)}else H[0]!="stop"&&H[0]!="close"||pt(u,7);else u.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?pt(u,7):hi(u):H[0]!="noop"&&u.l&&u.l.ta(H),u.v=0)}}Kt(4)}catch{}}var lu=class{constructor(s,l){this.g=s,this.map=l}};function ao(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function co(s){return s.h?1:s.g?s.g.size:0}function li(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function ci(s,l){s.g?s.g.add(l):s.h=l}function uo(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}ao.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ho(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return D(s.i)}function cu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,f=0;f<u;f++)l.push(s[f]);return l}l=[],u=0;for(f in s)l[u++]=s[f];return l}function uu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const f in s)l[u++]=f;return l}}}function fo(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=uu(s),f=cu(s),I=f.length,b=0;b<I;b++)l.call(void 0,f[b],u&&u[b],s)}var mo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hu(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),I=null;if(0<=f){var b=s[u].substring(0,f);I=s[u].substring(f+1)}else b=s[u];l(b,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function mt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof mt){this.h=s.h,Yn(this,s.j),this.o=s.o,this.g=s.g,jn(this,s.s),this.l=s.l;var l=s.i,u=new tn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),po(this,u),this.m=s.m}else s&&(l=String(s).match(mo))?(this.h=!1,Yn(this,l[1]||"",!0),this.o=Zt(l[2]||""),this.g=Zt(l[3]||"",!0),jn(this,l[4]),this.l=Zt(l[5]||"",!0),po(this,l[6]||"",!0),this.m=Zt(l[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}mt.prototype.toString=function(){var s=[],l=this.j;l&&s.push(en(l,go,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(en(l,go,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(en(u,u.charAt(0)=="/"?mu:fu,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",en(u,gu)),s.join("")};function Fe(s){return new mt(s)}function Yn(s,l,u){s.j=u?Zt(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function jn(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function po(s,l,u){l instanceof tn?(s.i=l,yu(s.i,s.h)):(u||(l=en(l,pu)),s.i=new tn(l,s.h))}function K(s,l,u){s.i.set(l,u)}function qn(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Zt(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function en(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,du),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function du(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var go=/[#\/\?@]/g,fu=/[#\?:]/g,mu=/[#\?]/g,pu=/[#\?@]/g,gu=/#/g;function tn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Ke(s){s.g||(s.g=new Map,s.h=0,s.i&&hu(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=tn.prototype,n.add=function(s,l){Ke(this),this.i=null,s=It(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function yo(s,l){Ke(s),l=It(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function _o(s,l){return Ke(s),l=It(s,l),s.g.has(l)}n.forEach=function(s,l){Ke(this),this.g.forEach(function(u,f){u.forEach(function(I){s.call(l,I,f,this)},this)},this)},n.na=function(){Ke(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const I=s[f];for(let b=0;b<I.length;b++)u.push(l[f])}return u},n.V=function(s){Ke(this);let l=[];if(typeof s=="string")_o(this,s)&&(l=l.concat(this.g.get(It(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},n.set=function(s,l){return Ke(this),this.i=null,s=It(this,s),_o(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function wo(s,l,u){yo(s,l),0<u.length&&(s.i=null,s.g.set(It(s,l),D(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var I=b;k[f]!==""&&(I+="="+encodeURIComponent(String(k[f]))),s.push(I)}}return this.i=s.join("&")};function It(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function yu(s,l){l&&!s.j&&(Ke(s),s.i=null,s.g.forEach(function(u,f){var I=f.toLowerCase();f!=I&&(yo(this,f),wo(this,I,u))},s)),s.j=l}function _u(s,l){const u=new Xt;if(c.Image){const f=new Image;f.onload=R(Qe,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Qe,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Qe,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Qe,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function wu(s,l){const u=new Xt,f=new AbortController,I=setTimeout(()=>{f.abort(),Qe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(I),b.ok?Qe(u,"TestPingServer: ok",!0,l):Qe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Qe(u,"TestPingServer: error",!1,l)})}function Qe(s,l,u,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(u)}catch{}}function vu(){this.g=new nu}function Tu(s,l,u){const f=u||"";try{fo(s,function(I,b){let k=I;d(I)&&(k=Zr(I)),l.push(f+b+"="+encodeURIComponent(k))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function zn(s){this.l=s.Ub||null,this.j=s.eb||!1}P(zn,ei),zn.prototype.g=function(){return new $n(this.l,this.j)},zn.prototype.i=function(s){return function(){return s}}({});function $n(s,l){de.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P($n,de),n=$n.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,rn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function vo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?nn(this):rn(this),this.readyState==3&&vo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,nn(this))},n.Qa=function(s){this.g&&(this.response=s,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,rn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function To(s){let l="";return X(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function ui(s,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=To(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):K(s,l,u))}function ee(s){de.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ee,de);var Eu=/^https?$/i,Iu=["POST","PUT"];n=ee.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ri.g(),this.v=this.o?Ks(this.o):Ks(ri),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(b){Eo(this,b);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)u.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Iu,l,void 0))||f||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of u)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bo(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){Eo(this,b)}};function Eo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Io(s),Hn(s)}function Io(s){s.A||(s.A=!0,_e(s,"complete"),_e(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_e(this,"complete"),_e(this,"abort"),Hn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hn(this,!0)),ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ao(this):this.bb())},n.bb=function(){Ao(this)};function Ao(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ue(s)!=4||s.Z()!=2)){if(s.u&&Ue(s)==4)$s(s.Ea,0,s);else if(_e(s,"readystatechange"),Ue(s)==4){s.h=!1;try{const k=s.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var I=String(s.D).match(mo)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Eu.test(I?I.toLowerCase():"")}u=f}if(u)_e(s,"complete"),_e(s,"success");else{s.m=6;try{var b=2<Ue(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",Io(s)}}finally{Hn(s)}}}}function Hn(s,l){if(s.g){bo(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||_e(s,"ready");try{u.onreadystatechange=f}catch{}}}function bo(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ue(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ue(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),tu(l)}};function Ro(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Au(s){const l={};s=(s.g&&2<=Ue(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(F(s[f]))continue;var u=T(s[f]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=l[I]||[];l[I]=b,b.push(u)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function Co(s){this.Aa=0,this.i=[],this.j=new Xt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,s),this.cb=sn("retryDelaySeedMs",1e4,s),this.Wa=sn("forwardChannelMaxRetries",2,s),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ao(s&&s.concurrentRequestLimit),this.Da=new vu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Co.prototype,n.la=8,n.G=1,n.connect=function(s,l,u,f){we(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Mo(this,null,this.W),Wn(this)};function hi(s){if(So(s),s.G==3){var l=s.U++,u=Fe(s.I);if(K(u,"SID",s.K),K(u,"RID",l),K(u,"TYPE","terminate"),on(s,u),l=new We(s,s.j,l),l.L=2,l.v=qn(Fe(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Lo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Bn(l)}Oo(s)}function Gn(s){s.g&&(fi(s),s.g.cancel(),s.g=null)}function So(s){Gn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Kn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Wn(s){if(!lo(s.h)&&!s.s){s.s=!0;var l=s.Ga;He||Bs(),$t||(He(),$t=!0),$r.add(l,s),s.B=0}}function bu(s,l){return co(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Qt(w(s.Ga,s,l),xo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new We(this,this.j,s);let b=this.o;if(this.S&&(b?(b=p(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(I.H=b,b=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Vo(this,I,l),u=Fe(this.I),K(u,"RID",s),K(u,"CVER",22),this.D&&K(u,"X-HTTP-Session-Id",this.D),on(this,u),b&&(this.O?l="headers="+encodeURIComponent(String(To(b)))+"&"+l:this.m&&ui(u,this.m,b)),ci(this.h,I),this.Ua&&K(u,"TYPE","init"),this.P?(K(u,"$req",l),K(u,"SID","null"),I.T=!0,si(I,u,null)):si(I,u,l),this.G=2}}else this.G==3&&(s?Po(this,s):this.i.length==0||lo(this.h)||Po(this))};function Po(s,l){var u;l?u=l.l:u=s.U++;const f=Fe(s.I);K(f,"SID",s.K),K(f,"RID",u),K(f,"AID",s.T),on(s,f),s.m&&s.o&&ui(f,s.m,s.o),u=new We(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Vo(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ci(s.h,u),si(u,f,l)}function on(s,l){s.H&&X(s.H,function(u,f){K(l,f,u)}),s.l&&fo({},function(u,f){K(l,f,u)})}function Vo(s,l,u){u=Math.min(s.i.length,u);var f=s.l?w(s.l.Na,s.l,s):null;e:{var I=s.i;let b=-1;for(;;){const k=["count="+u];b==-1?0<u?(b=I[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let W=!0;for(let ae=0;ae<u;ae++){let H=I[ae].g;const fe=I[ae].map;if(H-=b,0>H)b=Math.max(0,I[ae].g-100),W=!1;else try{Tu(fe,k,"req"+H+"_")}catch{f&&f(fe)}}if(W){f=k.join("&");break e}}}return s=s.i.splice(0,u),l.D=s,f}function ko(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;He||Bs(),$t||(He(),$t=!0),$r.add(l,s),s.v=0}}function di(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Qt(w(s.Fa,s),xo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Do(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Qt(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),Gn(this),Do(this))};function fi(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Do(s){s.g=new We(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Fe(s.qa);K(l,"RID","rpc"),K(l,"SID",s.K),K(l,"AID",s.T),K(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(l,"TO",s.ja),K(l,"TYPE","xmlhttp"),on(s,l),s.m&&s.o&&ui(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=qn(Fe(l)),u.m=null,u.P=!0,io(u,s)}n.Za=function(){this.C!=null&&(this.C=null,Gn(this),di(this),we(19))};function Kn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function No(s,l){var u=null;if(s.g==l){Kn(s),fi(s),s.g=null;var f=2}else if(li(s.h,l))u=l.D,uo(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var I=s.B;f=Ln(),_e(f,new eo(f,u)),Wn(s)}else ko(s);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&bu(s,l)||f==2&&di(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),I){case 1:pt(s,5);break;case 4:pt(s,10);break;case 3:pt(s,6);break;default:pt(s,2)}}}function xo(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function pt(s,l){if(s.j.info("Error code "+l),l==2){var u=w(s.fb,s),f=s.Xa;const I=!f;f=new mt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Yn(f,"https"),qn(f),I?_u(f.toString(),u):wu(f.toString(),u)}else we(2);s.G=0,s.l&&s.l.sa(l),Oo(s),So(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Oo(s){if(s.G=0,s.ka=[],s.l){const l=ho(s.h);(l.length!=0||s.i.length!=0)&&(V(s.ka,l),V(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Mo(s,l,u){var f=u instanceof mt?Fe(u):new mt(u);if(f.g!="")l&&(f.g=l+"."+f.g),jn(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var b=new mt(null);f&&Yn(b,f),l&&(b.g=l),I&&jn(b,I),u&&(b.l=u),f=b}return u=s.D,l=s.ya,u&&l&&K(f,u,l),K(f,"VER",s.la),on(s,f),f}function Lo(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ee(new zn({eb:u})):new ee(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fo(){}n=Fo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qn(){}Qn.prototype.g=function(s,l){return new Ae(s,l)};function Ae(s,l){de.call(this),this.g=new Co(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!F(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new At(this)}P(Ae,de),Ae.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ae.prototype.close=function(){hi(this.g)},Ae.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Zr(s),s=u);l.i.push(new lu(l.Ya++,s)),l.G==3&&Wn(l)},Ae.prototype.N=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,Ae.aa.N.call(this)};function Uo(s){ti.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const u in l){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}P(Uo,ti);function Bo(){ni.call(this),this.status=1}P(Bo,ni);function At(s){this.g=s}P(At,Fo),At.prototype.ua=function(){_e(this.g,"a")},At.prototype.ta=function(s){_e(this.g,new Uo(s))},At.prototype.sa=function(s){_e(this.g,new Bo)},At.prototype.ra=function(){_e(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,Ae.prototype.send=Ae.prototype.o,Ae.prototype.open=Ae.prototype.m,Ae.prototype.close=Ae.prototype.close,gl=function(){return new Qn},pl=function(){return Ln()},ml=dt,Pi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,rr=Fn,to.COMPLETE="complete",fl=to,Qs.EventType=Wt,Wt.OPEN="a",Wt.CLOSE="b",Wt.ERROR="c",Wt.MESSAGE="d",de.prototype.listen=de.prototype.K,an=Qs,ee.prototype.listenOnce=ee.prototype.L,ee.prototype.getLastError=ee.prototype.Ka,ee.prototype.getLastErrorCode=ee.prototype.Ba,ee.prototype.getStatus=ee.prototype.Z,ee.prototype.getResponseJson=ee.prototype.Oa,ee.prototype.getResponseText=ee.prototype.oa,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Ha,dl=ee}).apply(typeof Jn<"u"?Jn:typeof self<"u"?self:typeof window<"u"?window:{});const Zo="@firebase/firestore",ea="4.7.17";/**
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
 */let Bt="11.9.0";/**
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
 */const _t=new sl("@firebase/firestore");function Rt(){return _t.logLevel}function N(n,...e){if(_t.logLevel<=$.DEBUG){const t=e.map(es);_t.debug(`Firestore (${Bt}): ${n}`,...t)}}function je(n,...e){if(_t.logLevel<=$.ERROR){const t=e.map(es);_t.error(`Firestore (${Bt}): ${n}`,...t)}}function Dt(n,...e){if(_t.logLevel<=$.WARN){const t=e.map(es);_t.warn(`Firestore (${Bt}): ${n}`,...t)}}function es(n){if(typeof n=="string")return n;try{/**
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
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yl(n,r,t)}function yl(n,e,t){let r=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw je(r),new Error(r)}function G(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yl(e,i,r)}function U(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Be{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _l{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class dd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fd{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Be,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Be)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new _l(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new ge(e)}}class md{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pd{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new md(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ta{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wh(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ta(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ta(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function wl(){return new TextEncoder}/**
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
 */class vl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Vi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Y(r,i);{const o=wl(),a=_d(o.encode(na(n,t)),o.encode(na(e,t)));return a!==0?a:Y(r,i)}}t+=r>65535?2:1}return Y(n.length,e.length)}function na(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function _d(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Y(n[t],e[t]);return Y(n.length,e.length)}function Nt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const ra=-62135596800,ia=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ia);return new ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ra)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ia}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ra;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{static fromTimestamp(e){return new L(e)}static min(){return new L(new ie(0,0))}static max(){return new L(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sa="__name__";class Ne{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ne.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ne?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ne.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Y(e.length,t.length)}static compareSegments(e,t){const r=Ne.isNumericId(e),i=Ne.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ne.extractNumericId(e).compare(Ne.extractNumericId(t)):Vi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return et.fromString(e.substring(4,e.length-2))}}class Q extends Ne{construct(e,t,r){return new Q(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const wd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Ne{construct(e,t,r){return new ce(e,t,r)}static isValidIdentifier(e){return wd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sa}static keyField(){return new ce([sa])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
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
 */const _n=-1;function vd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new nt(i,O.empty(),e)}function Td(n){return new nt(n.readTime,n.key,_n)}class nt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nt(L.min(),O.empty(),_n)}static max(){return new nt(L.max(),O.empty(),_n)}}function Ed(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Id="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ad{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yt(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Id)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new S((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function bd(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jt(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ar{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ar.le=-1;/**
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
 */const ts=-1;function br(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function Rd(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tl="";function Cd(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=oa(e)),e=Sd(n.get(t),e);return oa(e)}function Sd(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Tl:t+="";break;default:t+=o}}return t}function oa(n){return n+Tl+""}/**
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
 */function aa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ct(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function El(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Z{constructor(e,t){this.comparator=e,this.root=t||le.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,le.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zn(this.root,e,this.comparator,!0)}}class Zn{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class le{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??le.RED,this.left=i??le.EMPTY,this.right=o??le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new le(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new la(this.data.getIterator())}getIteratorFrom(e){return new la(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class la{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new be([])}unionWith(e){let t=new se(ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Il("Invalid base64 string: "+o):o}}(e);return new ue(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const Pd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rt(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=Pd.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(n.seconds),nanos:te(n.nanos)}}function te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function it(n){return typeof n=="string"?ue.fromBase64String(n):ue.fromUint8Array(n)}/**
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
 */const Al="server_timestamp",bl="__type__",Rl="__previous_value__",Cl="__local_write_time__";function ns(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[bl])===null||t===void 0?void 0:t.stringValue)===Al}function Rr(n){const e=n.mapValue.fields[Rl];return ns(e)?Rr(e):e}function wn(n){const e=rt(n.mapValue.fields[Cl].timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class Vd{constructor(e,t,r,i,o,a,c,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const mr="(default)";class vn{constructor(e,t){this.projectId=e,this.database=t||mr}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database===mr}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sl="__type__",kd="__max__",er={mapValue:{}},Pl="__vector__",pr="value";function st(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ns(n)?4:Nd(n)?9007199254740991:Dd(n)?10:11:M(28295,{value:n})}function Le(n,e){if(n===e)return!0;const t=st(n);if(t!==st(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return wn(n).isEqual(wn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=rt(i.timestampValue),c=rt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return it(i.bytesValue).isEqual(it(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return te(i.geoPointValue.latitude)===te(o.geoPointValue.latitude)&&te(i.geoPointValue.longitude)===te(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return te(i.integerValue)===te(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=te(i.doubleValue),c=te(o.doubleValue);return a===c?fr(a)===fr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Nt(n.arrayValue.values||[],e.arrayValue.values||[],Le);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(aa(a)!==aa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Le(a[h],c[h])))return!1;return!0}(n,e);default:return M(52216,{left:n})}}function Tn(n,e){return(n.values||[]).find(t=>Le(t,e))!==void 0}function xt(n,e){if(n===e)return 0;const t=st(n),r=st(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=te(o.integerValue||o.doubleValue),h=te(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return ca(n.timestampValue,e.timestampValue);case 4:return ca(wn(n),wn(e));case 5:return Vi(n.stringValue,e.stringValue);case 6:return function(o,a){const c=it(o),h=it(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=Y(c[d],h[d]);if(m!==0)return m}return Y(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=Y(te(o.latitude),te(a.latitude));return c!==0?c:Y(te(o.longitude),te(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ua(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,h,d,m;const _=o.fields||{},w=a.fields||{},R=(c=_[pr])===null||c===void 0?void 0:c.arrayValue,P=(h=w[pr])===null||h===void 0?void 0:h.arrayValue,D=Y(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:ua(R,P)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===er.mapValue&&a===er.mapValue)return 0;if(o===er.mapValue)return 1;if(a===er.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let _=0;_<h.length&&_<m.length;++_){const w=Vi(h[_],m[_]);if(w!==0)return w;const R=xt(c[h[_]],d[m[_]]);if(R!==0)return R}return Y(h.length,m.length)}(n.mapValue,e.mapValue);default:throw M(23264,{Pe:t})}}function ca(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=rt(n),r=rt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function ua(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=xt(t[i],r[i]);if(o)return o}return Y(t.length,r.length)}function Ot(n){return ki(n)}function ki(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return it(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=ki(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ki(t.fields[a])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function ir(n){switch(st(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rr(n);return e?16+ir(e):16;case 5:return 2*n.stringValue.length;case 6:return it(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+ir(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ct(r.fields,(o,a)=>{i+=o.length+ir(a)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function ha(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Di(n){return!!n&&"integerValue"in n}function rs(n){return!!n&&"arrayValue"in n}function da(n){return!!n&&"nullValue"in n}function fa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sr(n){return!!n&&"mapValue"in n}function Dd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sl])===null||t===void 0?void 0:t.stringValue)===Pl}function dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ct(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=dn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Nd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kd}/**
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
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!sr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dn(t)}setAll(e){let t=ce.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=dn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());sr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Le(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];sr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ct(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ie(dn(this.value))}}function Vl(n){const e=[];return ct(n.fields,(t,r)=>{const i=new ce([t]);if(sr(r)){const o=Vl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new be(e)}/**
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
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function ma(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=xt(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function pa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Le(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class En{constructor(e,t="asc"){this.field=e,this.dir=t}}function xd(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class kl{}class re extends kl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Md(e,t,r):t==="array-contains"?new Ud(e,r):t==="in"?new Bd(e,r):t==="not-in"?new Yd(e,r):t==="array-contains-any"?new jd(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ld(e,r):new Fd(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xt(t,this.value)):t!==null&&st(this.value)===st(t)&&this.matchesComparison(xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ke extends kl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ke(e,t)}matches(e){return Dl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Dl(n){return n.op==="and"}function Nl(n){return Od(n)&&Dl(n)}function Od(n){for(const e of n.filters)if(e instanceof ke)return!1;return!0}function Ni(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Ot(n.value);if(Nl(n))return n.filters.map(e=>Ni(e)).join(",");{const e=n.filters.map(t=>Ni(t)).join(",");return`${n.op}(${e})`}}function xl(n,e){return n instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.field.isEqual(i.field)&&Le(r.value,i.value)}(n,e):n instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&xl(a,i.filters[c]),!0):!1}(n,e):void M(19439)}function Ol(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${Ot(t.value)}`}(n):n instanceof ke?function(t){return t.op.toString()+" {"+t.getFilters().map(Ol).join(" ,")+"}"}(n):"Filter"}class Md extends re{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ld extends re{constructor(e,t){super(e,"in",t),this.keys=Ml("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fd extends re{constructor(e,t){super(e,"not-in",t),this.keys=Ml("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ml(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class Ud extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rs(t)&&Tn(t.arrayValue,this.value)}}class Bd extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tn(this.value.arrayValue,t)}}class Yd extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Tn(this.value.arrayValue,t)}}class jd extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}/**
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
 */class qd{constructor(e,t=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function ga(n,e=null,t=[],r=[],i=null,o=null,a=null){return new qd(n,e,t,r,i,o,a)}function is(n){const e=U(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ni(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),br(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ot(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ot(r)).join(",")),e.Ie=t}return e.Ie}function ss(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xd(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pa(n.startAt,e.startAt)&&pa(n.endAt,e.endAt)}function xi(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class qt{constructor(e,t=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function zd(n,e,t,r,i,o,a,c){return new qt(n,e,t,r,i,o,a,c)}function Cr(n){return new qt(n)}function ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ll(n){return n.collectionGroup!==null}function fn(n){const e=U(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new se(ce.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new En(o,r))}),t.has(ce.keyField().canonicalString())||e.Ee.push(new En(ce.keyField(),r))}return e.Ee}function xe(n){const e=U(n);return e.de||(e.de=$d(e,fn(n))),e.de}function $d(n,e){if(n.limitType==="F")return ga(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new En(i.field,o)});const t=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return ga(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Oi(n,e){const t=n.filters.concat([e]);return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mi(n,e,t){return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sr(n,e){return ss(xe(n),xe(e))&&n.limitType===e.limitType}function Fl(n){return`${is(xe(n))}|lt:${n.limitType}`}function Ct(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Ol(i)).join(", ")}]`),br(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ot(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ot(i)).join(",")),`Target(${r})`}(xe(n))}; limitType=${n.limitType})`}function Pr(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,h){const d=ma(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,fn(r),i)||r.endAt&&!function(a,c,h){const d=ma(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,fn(r),i))}(n,e)}function Hd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ul(n){return(e,t)=>{let r=!1;for(const i of fn(n)){const o=Gd(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Gd(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?xt(h,d):M(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
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
 */class vt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ct(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return El(this.inner)}size(){return this.innerSize}}/**
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
 */const Wd=new Z(O.comparator);function qe(){return Wd}const Bl=new Z(O.comparator);function ln(...n){let e=Bl;for(const t of n)e=e.insert(t.key,t);return e}function Yl(n){let e=Bl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yt(){return mn()}function jl(){return mn()}function mn(){return new vt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Kd=new Z(O.comparator),Qd=new se(O.comparator);function j(...n){let e=Qd;for(const t of n)e=e.add(t);return e}const Xd=new se(Y);function Jd(){return Xd}/**
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
 */function os(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(e)?"-0":e}}function ql(n){return{integerValue:""+n}}function zl(n,e){return Rd(e)?ql(e):os(n,e)}/**
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
 */class Vr{constructor(){this._=void 0}}function Zd(n,e,t){return n instanceof yr?function(i,o){const a={fields:{[bl]:{stringValue:Al},[Cl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ns(o)&&(o=Rr(o)),o&&(a.fields[Rl]=o),{mapValue:a}}(t,e):n instanceof In?Hl(n,e):n instanceof An?Gl(n,e):function(i,o){const a=$l(i,o),c=_a(a)+_a(i.Re);return Di(a)&&Di(i.Re)?ql(c):os(i.serializer,c)}(n,e)}function ef(n,e,t){return n instanceof In?Hl(n,e):n instanceof An?Gl(n,e):t}function $l(n,e){return n instanceof bn?function(r){return Di(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class yr extends Vr{}class In extends Vr{constructor(e){super(),this.elements=e}}function Hl(n,e){const t=Wl(e);for(const r of n.elements)t.some(i=>Le(i,r))||t.push(r);return{arrayValue:{values:t}}}class An extends Vr{constructor(e){super(),this.elements=e}}function Gl(n,e){let t=Wl(e);for(const r of n.elements)t=t.filter(i=>!Le(i,r));return{arrayValue:{values:t}}}class bn extends Vr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function _a(n){return te(n.integerValue||n.doubleValue)}function Wl(n){return rs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class tf{constructor(e,t){this.field=e,this.transform=t}}function nf(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof In&&i instanceof In||r instanceof An&&i instanceof An?Nt(r.elements,i.elements,Le):r instanceof bn&&i instanceof bn?Le(r.Re,i.Re):r instanceof yr&&i instanceof yr}(n.transform,e.transform)}class rf{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function or(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class kr{}function Kl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new as(n.key,Ve.none()):new Cn(n.key,n.data,Ve.none());{const t=n.data,r=Ie.empty();let i=new se(ce.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ut(n.key,r,new be(i.toArray()),Ve.none())}}function sf(n,e,t){n instanceof Cn?function(i,o,a){const c=i.value.clone(),h=va(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof ut?function(i,o,a){if(!or(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=va(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ql(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function pn(n,e,t,r){return n instanceof Cn?function(o,a,c,h){if(!or(o.precondition,a))return c;const d=o.value.clone(),m=Ta(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof ut?function(o,a,c,h){if(!or(o.precondition,a))return c;const d=Ta(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ql(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(o,a,c){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function of(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=$l(r.transform,i||null);o!=null&&(t===null&&(t=Ie.empty()),t.set(r.field,o))}return t||null}function wa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Nt(r,i,(o,a)=>nf(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cn extends kr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ut extends kr{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ql(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function va(n,e,t){const r=new Map;G(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,ef(a,c,t[i]))}return r}function Ta(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Zd(o,a,e))}return r}class as extends kr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class af extends kr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lf{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&sf(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=pn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=pn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jl();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;const h=Kl(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&Nt(this.mutations,e.mutations,(t,r)=>wa(t,r))&&Nt(this.baseMutations,e.baseMutations,(t,r)=>wa(t,r))}}class ls{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return Kd}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new ls(e,t,r,i)}}/**
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
 */class cf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uf{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ne,z;function hf(n){switch(n){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Xl(n){if(n===void 0)return je("GRPC error has no .code"),C.UNKNOWN;switch(n){case ne.OK:return C.OK;case ne.CANCELLED:return C.CANCELLED;case ne.UNKNOWN:return C.UNKNOWN;case ne.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ne.INTERNAL:return C.INTERNAL;case ne.UNAVAILABLE:return C.UNAVAILABLE;case ne.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ne.NOT_FOUND:return C.NOT_FOUND;case ne.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ne.ABORTED:return C.ABORTED;case ne.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ne.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:n})}}(z=ne||(ne={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const df=new et([4294967295,4294967295],0);function Ea(n){const e=wl().encode(n),t=new hl;return t.update(e),new Uint8Array(t.digest())}function Ia(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new et([t,r],0),new et([i,o],0)]}class cs{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new cn(`Invalid padding: ${t}`);if(r<0)throw new cn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new cn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=et.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(et.fromNumber(r)));return i.compare(df)===1&&(i=new et([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Ea(e),[r,i]=Ia(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new cs(o,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.pe===0)return;const t=Ea(e),[r,i]=Ia(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dr{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Sn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Dr(L.min(),i,new Z(Y),qe(),j())}}class Sn{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Sn(r,t,j(),j(),j())}}/**
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
 */class ar{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class Jl{constructor(e,t){this.targetId=e,this.Ce=t}}class Zl{constructor(e,t,r=ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Aa{constructor(){this.Fe=0,this.Me=ba(),this.xe=ue.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=j(),t=j(),r=j();return this.Me.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:o})}}),new Sn(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=ba()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,G(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ff{constructor(e){this.ze=e,this.je=new Map,this.He=qe(),this.Je=tr(),this.Ye=tr(),this.Ze=new Z(Y)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const o=i.target;if(xi(o))if(r===0){const a=new O(o.path);this.tt(t,a,ye.newNoDocument(a,L.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const c=this.ct(e),h=c?this.lt(c,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,c;try{a=it(r).toUint8Array()}catch(h){if(h instanceof Il)return Dt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new cs(a,i,o)}catch(h){return Dt(h instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,o,null),i++)}),i}It(e){const t=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&xi(c.target)){const h=new O(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,ye.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let r=j();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const i=new Dr(e,t,this.Ze,this.He,r);return this.He=qe(),this.Je=tr(),this.Ye=tr(),this.Ze=new Z(Y),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Aa,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new se(Y),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new se(Y),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Aa),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function tr(){return new Z(O.comparator)}function ba(){return new Z(O.comparator)}const mf={asc:"ASCENDING",desc:"DESCENDING"},pf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gf={and:"AND",or:"OR"};class yf{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Li(n,e){return n.useProto3Json||br(e)?e:{value:e}}function _r(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ec(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _f(n,e){return _r(n,e.toTimestamp())}function Oe(n){return G(!!n,49232),L.fromTimestamp(function(t){const r=rt(t);return new ie(r.seconds,r.nanos)}(n))}function us(n,e){return Fi(n,e).canonicalString()}function Fi(n,e){const t=function(i){return new Q(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function tc(n){const e=Q.fromString(n);return G(oc(e),10190,{key:e.toString()}),e}function Ui(n,e){return us(n.databaseId,e.path)}function wi(n,e){const t=tc(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(rc(t))}function nc(n,e){return us(n.databaseId,e)}function wf(n){const e=tc(n);return e.length===4?Q.emptyPath():rc(e)}function Bi(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rc(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ra(n,e,t){return{name:Ui(n,e),fields:t.value.mapValue.fields}}function vf(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(G(m===void 0||typeof m=="string",58123),ue.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ue.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?C.UNKNOWN:Xl(d.code);return new x(m,d.message||"")}(a);t=new Zl(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wi(n,r.document.name),o=Oe(r.document.updateTime),a=r.document.createTime?Oe(r.document.createTime):L.min(),c=new Ie({mapValue:{fields:r.document.fields}}),h=ye.newFoundDocument(i,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new ar(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wi(n,r.document),o=r.readTime?Oe(r.readTime):L.min(),a=ye.newNoDocument(i,o),c=r.removedTargetIds||[];t=new ar([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wi(n,r.document),o=r.removedTargetIds||[];t=new ar([],o,i,null)}else{if(!("filter"in e))return M(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new uf(i,o),c=r.targetId;t=new Jl(c,a)}}return t}function Tf(n,e){let t;if(e instanceof Cn)t={update:Ra(n,e.key,e.value)};else if(e instanceof as)t={delete:Ui(n,e.key)};else if(e instanceof ut)t={update:Ra(n,e.key,e.data),updateMask:Vf(e.fieldMask)};else{if(!(e instanceof af))return M(16599,{ft:e.type});t={verify:Ui(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof In)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof An)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof bn)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw M(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:_f(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,e.precondition)),t}function Ef(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?Oe(i.updateTime):Oe(o);return a.isEqual(L.min())&&(a=Oe(o)),new rf(a,i.transformResults||[])}(t,e))):[]}function If(n,e){return{documents:[nc(n,e.path)]}}function Af(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=nc(n,i);const o=function(d){if(d.length!==0)return sc(ke.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:St(w.field),direction:Cf(w.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Li(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:i}}function bf(n){let e=wf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(_){const w=ic(_);return w instanceof ke&&Nl(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(w=>function(P){return new En(Pt(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(_){let w;return w=typeof _=="object"?_.value:_,br(w)?null:w}(t.limit));let h=null;t.startAt&&(h=function(_){const w=!!_.before,R=_.values||[];return new gr(R,w)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const w=!_.before,R=_.values||[];return new gr(R,w)}(t.endAt)),zd(e,i,a,o,c,"F",h,d)}function Rf(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ic(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pt(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pt(t.unaryFilter.field);return re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pt(t.unaryFilter.field);return re.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Pt(t.unaryFilter.field);return re.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(t){return re.create(Pt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ke.create(t.compositeFilter.filters.map(r=>ic(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(n):M(30097,{filter:n})}function Cf(n){return mf[n]}function Sf(n){return pf[n]}function Pf(n){return gf[n]}function St(n){return{fieldPath:n.canonicalString()}}function Pt(n){return ce.fromServerFormat(n.fieldPath)}function sc(n){return n instanceof re?function(t){if(t.op==="=="){if(fa(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NAN"}};if(da(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fa(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NOT_NAN"}};if(da(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:St(t.field),op:Sf(t.op),value:t.value}}}(n):n instanceof ke?function(t){const r=t.getFilters().map(i=>sc(i));return r.length===1?r[0]:{compositeFilter:{op:Pf(t.op),filters:r}}}(n):M(54877,{filter:n})}function Vf(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function oc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xe{constructor(e,t,r,i,o=L.min(),a=L.min(),c=ue.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kf{constructor(e){this.wt=e}}function Df(n){const e=bf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
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
 */class Nf{constructor(){this.Cn=new xf}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(nt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(nt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class xf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new se(Q.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(Q.comparator)).toArray()}}/**
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
 */const Ca={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ac=41943040;class Ee{static withCacheSize(e){return new Ee(e,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(ac,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);/**
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
 */class Mt{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Mt(0)}static lr(){return new Mt(-1)}}/**
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
 */const Sa="LruGarbageCollector",Of=1048576;function Pa([n,e],[t,r]){const i=Y(n,t);return i===0?Y(e,r):i}class Mf{constructor(e){this.Er=e,this.buffer=new se(Pa),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Pa(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Lf{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){N(Sa,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jt(t)?N(Sa,"Ignoring IndexedDB error during garbage collection: ",t):await Yt(t)}await this.mr(3e5)})}}class Ff{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ar.le);const r=new Mf(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Ca)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ca):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,c=Date.now(),this.removeTargets(e,r,t))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),Rt()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:_})))}}function Uf(n,e){return new Ff(n,e)}/**
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
 */class Bf{constructor(){this.changes=new vt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Yf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jf{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&pn(r.mutation,i,be.empty(),ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){const i=yt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=ln();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=yt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let o=qe();const a=mn(),c=function(){return mn()}();return t.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ut)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),pn(m.mutation,d,m.mutation.getFieldMask(),ie.now())):a.set(d.key,be.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var _;return c.set(d,new Yf(m,(_=a.get(d))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=mn();let i=new Z((a,c)=>a-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||be.empty();m=c.applyToLocalView(d,m),r.set(h,m);const _=(i.get(c.batchId)||j()).add(h);i=i.insert(c.batchId,_)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,_=jl();m.forEach(w=>{if(!o.has(w)){const R=Kl(t.get(w),r.get(w));R!==null&&_.set(w,R),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ll(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):S.resolve(yt());let c=_n,h=o;return a.next(d=>S.forEach(d,(m,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,j())).next(m=>({batchId:c,changes:Yl(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let i=ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=ln();return this.indexManager.getCollectionParents(e,o).next(c=>S.forEach(c,h=>{const d=function(_,w){return new qt(w,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((_,w)=>{a=a.insert(_,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ye.newInvalidDocument(m)))});let c=ln();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&pn(m.mutation,d,be.empty(),ie.now()),Pr(t,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class qf{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return S.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Oe(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:Df(i.bundledQuery),readTime:Oe(i.readTime)}}(t)),S.resolve()}}/**
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
 */class zf{constructor(){this.overlays=new Z(O.comparator),this.Qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yt();return S.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=yt(),o=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Z((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=yt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=yt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return S.resolve(c)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cf(t,r));let o=this.Qr.get(t);o===void 0&&(o=j(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
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
 */class $f{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class hs{constructor(){this.$r=new se(oe.Ur),this.Kr=new se(oe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new oe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new oe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new O(new Q([])),r=new oe(t,e),i=new oe(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new O(new Q([])),r=new oe(t,e),i=new oe(t,e+1);let o=j();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new oe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class oe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return O.comparator(e.key,t.key)||Y(e.Zr,t.Zr)}static Wr(e,t){return Y(e.Zr,t.Zr)||O.comparator(e.key,t.key)}}/**
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
 */class Hf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new se(oe.Ur)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lf(o,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Xr=this.Xr.add(new oe(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ts:this.nr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new oe(t,0),i=new oe(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],a=>{const c=this.ei(a.Zr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new se(Y);return t.forEach(i=>{const o=new oe(i,0),a=new oe(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],c=>{r=r.add(c.Zr)})}),S.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new oe(new O(o),0);let c=new se(Y);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Zr)),!0)},a),S.resolve(this.ni(c))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return S.forEach(t.mutations,i=>{const o=new oe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new oe(t,0),i=this.Xr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gf{constructor(e){this.ii=e,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ye.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=qe();const a=t.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ed(Td(m),r)<=0||(i.has(m.key)||Pr(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M(9500)}si(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Wf(this)}getSize(e){return S.resolve(this.size)}}class Wf extends Bf{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class Kf{constructor(e){this.persistence=e,this.oi=new vt(t=>is(t),ss),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new hs,this.targetCount=0,this.ui=Mt.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),S.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Mt(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Tr(t),S.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.ai.containsKey(t))}}/**
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
 */class lc{constructor(e,t){this.ci={},this.overlays={},this.li=new Ar(0),this.hi=!1,this.hi=!0,this.Pi=new $f,this.referenceDelegate=e(this),this.Ti=new Kf(this),this.indexManager=new Nf,this.remoteDocumentCache=function(i){return new Gf(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new kf(t),this.Ei=new qf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Hf(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new Qf(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(e,t){return S.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Qf extends Ad{constructor(e){super(),this.currentSequenceNumber=e}}class ds{constructor(e){this.persistence=e,this.Vi=new hs,this.mi=null}static fi(e){return new ds(e)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.gi,r=>{const i=O.fromPath(r);return this.pi(e,i).next(o=>{o||t.removeEntry(i,L.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return S.or([()=>S.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class wr{constructor(e,t){this.persistence=e,this.yi=new vt(r=>Cd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Uf(this,t)}static fi(e,t){return new wr(e,t)}di(){}Ai(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return S.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(o=>o?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),S.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ir(e.data.value)),t}Dr(e,t,r){return S.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=j(),i=j();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new fs(e,t.fromCache,r,i)}}/**
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
 */class Xf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jf{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return $u()?8:bd(qu())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Xf;return this.Ss(e,t,a).next(c=>{if(o.result=c,this.fs)return this.Ds(e,t,a,c.size)})}).next(()=>o.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(Rt()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ct(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),S.resolve()):(Rt()<=$.DEBUG&&N("QueryEngine","Query:",Ct(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Rt()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ct(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xe(t))):S.resolve())}ws(e,t){if(ya(t))return S.resolve(null);let r=xe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Mi(t,null,"F"),r=xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=j(...o);return this.ys.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.vs(t,c);return this.Cs(t,d,a,h.readTime)?this.ws(e,Mi(t,null,"F")):this.Fs(e,d,t,h)}))})))}bs(e,t,r,i){return ya(t)||i.isEqual(L.min())?S.resolve(null):this.ys.getDocuments(e,r).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,r,i)?S.resolve(null):(Rt()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ct(t)),this.Fs(e,a,t,vd(i,_n)).next(c=>c))})}vs(e,t){let r=new se(Ul(e));return t.forEach((i,o)=>{Pr(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return Rt()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ct(t)),this.ys.getDocumentsMatchingQuery(e,t,nt.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const ms="LocalStore",Zf=3e8;class em{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new Z(Y),this.Os=new vt(o=>is(o),ss),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function tm(n,e,t,r){return new em(n,e,t,r)}async function cc(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=j();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function nm(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const _=d.batch,w=_.keys();let R=S.resolve();return w.forEach(P=>{R=R.next(()=>m.getEntry(h,P)).next(D=>{const V=d.docVersions.get(P);G(V!==null,48541),D.version.compareTo(V)<0&&(_.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(h,_))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function uc(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function rm(n,e){const t=U(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const c=[];e.targetChanges.forEach((m,_)=>{const w=i.get(_);if(!w)return;c.push(t.Ti.removeMatchingKeys(o,m.removedDocuments,_).next(()=>t.Ti.addMatchingKeys(o,m.addedDocuments,_)));let R=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(ue.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),i=i.insert(_,R),function(D,V,B){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Zf?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(w,R,m)&&c.push(t.Ti.updateTargetData(o,R))});let h=qe(),d=j();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(im(o,a,e.documentUpdates).next(m=>{h=m.qs,d=m.Qs})),!r.isEqual(L.min())){const m=t.Ti.getLastRemoteSnapshotVersion(o).next(_=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.xs=i,o))}function im(n,e,t){let r=j(),i=j();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=qe();return t.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):N(ms,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:i}})}function sm(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ts),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function om(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(o=>o?(i=o,S.resolve(i)):t.Ti.allocateTargetId(r).next(a=>(i=new Xe(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Yi(n,e,t){const r=U(n),i=r.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!jt(a))throw a;N(ms,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function Va(n,e,t){const r=U(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const _=U(h),w=_.Os.get(m);return w!==void 0?S.resolve(_.xs.get(w)):_.Ti.getTargetData(d,m)}(r,a,xe(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?i:L.min(),t?o:j())).next(c=>(am(r,Hd(e),c),{documents:c,$s:o})))}function am(n,e,t){let r=n.Ns.get(e)||L.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(e,r)}class ka{constructor(){this.activeTargetIds=Jd()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lm{constructor(){this.xo=new ka,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ka,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cm{No(e){}shutdown(){}}/**
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
 */const Da="ConnectivityMonitor";class Na{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(Da,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){N(Da,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nr=null;function ji(){return nr===null?nr=function(){return 268435456+Math.round(2147483648*Math.random())}():nr++,"0x"+nr.toString(16)}/**
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
 */const vi="RestConnection",um={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hm{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===mr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,o){const a=ji(),c=this.jo(e,t.toUriEncodedString());N(vi,`Sending RPC '${e}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:d}=new URL(c),m=Ji(d);return this.Jo(e,c,h,r,m).then(_=>(N(vi,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Dt(vi,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",r),_})}Yo(e,t,r,i,o,a){return this.zo(e,t,r,i,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}jo(e,t){const r=um[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class dm{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const pe="WebChannelConnection";class fm extends hm{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=ji();return new Promise((c,h)=>{const d=new dl;d.setWithCredentials(!0),d.listenOnce(fl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case rr.NO_ERROR:const _=d.getResponseJson();N(pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case rr.TIMEOUT:N(pe,`RPC '${e}' ${a} timed out`),h(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const w=d.getStatus();if(N(pe,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const D=function(B){const F=B.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(F)>=0?F:C.UNKNOWN}(P.status);h(new x(D,P.message))}else h(new x(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new x(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{N(pe,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(i);N(pe,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",m,r,15)})}I_(e,t,r){const i=ji(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=gl(),c=pl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(pe,`Creating RPC '${e}' stream ${i}: ${m}`,h);const _=a.createWebChannel(m,h);this.E_(_);let w=!1,R=!1;const P=new dm({Zo:V=>{R?N(pe,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(w||(N(pe,`Opening RPC '${e}' stream ${i} transport.`),_.open(),w=!0),N(pe,`RPC '${e}' stream ${i} sending:`,V),_.send(V))},Xo:()=>_.close()}),D=(V,B,F)=>{V.listen(B,q=>{try{F(q)}catch(J){setTimeout(()=>{throw J},0)}})};return D(_,an.EventType.OPEN,()=>{R||(N(pe,`RPC '${e}' stream ${i} transport opened.`),P.__())}),D(_,an.EventType.CLOSE,()=>{R||(R=!0,N(pe,`RPC '${e}' stream ${i} transport closed`),P.u_(),this.d_(_))}),D(_,an.EventType.ERROR,V=>{R||(R=!0,Dt(pe,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),P.u_(new x(C.UNAVAILABLE,"The operation could not be completed")))}),D(_,an.EventType.MESSAGE,V=>{var B;if(!R){const F=V.data[0];G(!!F,16349);const q=F,J=(q==null?void 0:q.error)||((B=q[0])===null||B===void 0?void 0:B.error);if(J){N(pe,`RPC '${e}' stream ${i} received error:`,J);const Re=J.status;let X=function(y){const v=ne[y];if(v!==void 0)return Xl(v)}(Re),E=J.message;X===void 0&&(X=C.INTERNAL,E="Unknown error status: "+Re+" with message "+J.message),R=!0,P.u_(new x(X,E)),_.close()}else N(pe,`RPC '${e}' stream ${i} received:`,F),P.c_(F)}}),D(c,ml.STAT_EVENT,V=>{V.stat===Pi.PROXY?N(pe,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Pi.NOPROXY&&N(pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Ti(){return typeof document<"u"?document:null}/**
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
 */function Nr(n){return new yf(n,!0)}/**
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
 */class hc{constructor(e,t,r=1e3,i=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=i,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const xa="PersistentStream";class dc{constructor(e,t,r,i,o,a,c,h){this.xi=e,this.S_=r,this.D_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new hc(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(je(t.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===t&&this.z_(r,i)},r=>{e(()=>{const i=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return N(xa,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(N(xa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mm extends dc{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=vf(this.serializer,e),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Oe(a.readTime):L.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Bi(this.serializer),t.addTarget=function(o,a){let c;const h=a.target;if(c=xi(h)?{documents:If(o,h)}:{query:Af(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ec(o,a.resumeToken);const d=Li(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=_r(o,a.snapshotVersion.toTimestamp());const d=Li(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Rf(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Bi(this.serializer),t.removeTarget=e,this.Q_(t)}}class pm extends dc{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Ef(e.writeResults,e.commitTime),r=Oe(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Bi(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Tf(this.serializer,r))};this.Q_(t)}}/**
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
 */class gm{}class ym extends gm{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,Fi(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}Yo(e,t,r,i,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(e,Fi(t,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class _m{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(je(t),this.ua=!1):N("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const wt="RemoteStore";class wm{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Tt(this)&&(N(wt,"Restarting streams for network reachability change."),await async function(h){const d=U(h);d.da.add(4),await Pn(d),d.Va.set("Unknown"),d.da.delete(4),await xr(d)}(this))})}),this.Va=new _m(r,i)}}async function xr(n){if(Tt(n))for(const e of n.Aa)await e(!0)}async function Pn(n){for(const e of n.Aa)await e(!1)}function fc(n,e){const t=U(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),_s(t)?ys(t):zt(t).N_()&&gs(t,e))}function ps(n,e){const t=U(n),r=zt(t);t.Ea.delete(e),r.N_()&&mc(t,e),t.Ea.size===0&&(r.N_()?r.k_():Tt(t)&&t.Va.set("Unknown"))}function gs(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(L.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zt(n).Z_(e)}function mc(n,e){n.ma.Ke(e),zt(n).X_(e)}function ys(n){n.ma=new ff({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),zt(n).start(),n.Va.ca()}function _s(n){return Tt(n)&&!zt(n).O_()&&n.Ea.size>0}function Tt(n){return U(n).da.size===0}function pc(n){n.ma=void 0}async function vm(n){n.Va.set("Online")}async function Tm(n){n.Ea.forEach((e,t)=>{gs(n,e)})}async function Em(n,e){pc(n),_s(n)?(n.Va.Pa(e),ys(n)):n.Va.set("Unknown")}async function Im(n,e,t){if(n.Va.set("Online"),e instanceof Zl&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ea.delete(c),i.ma.removeTarget(c))}(n,e)}catch(r){N(wt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vr(n,r)}else if(e instanceof ar?n.ma.Xe(e):e instanceof Jl?n.ma.ot(e):n.ma.nt(e),!t.isEqual(L.min()))try{const r=await uc(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.ma.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(d);m&&o.Ea.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(ue.EMPTY_BYTE_STRING,m.snapshotVersion)),mc(o,h);const _=new Xe(m.target,h,d,m.sequenceNumber);gs(o,_)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N(wt,"Failed to raise snapshot:",r),await vr(n,r)}}async function vr(n,e,t){if(!jt(e))throw e;n.da.add(1),await Pn(n),n.Va.set("Offline"),t||(t=()=>uc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(wt,"Retrying IndexedDB access"),await t(),n.da.delete(1),await xr(n)})}function gc(n,e){return e().catch(t=>vr(n,t,e))}async function Or(n){const e=U(n),t=ot(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:ts;for(;Am(e);)try{const i=await sm(e.localStore,r);if(i===null){e.Ia.length===0&&t.k_();break}r=i.batchId,bm(e,i)}catch(i){await vr(e,i)}yc(e)&&_c(e)}function Am(n){return Tt(n)&&n.Ia.length<10}function bm(n,e){n.Ia.push(e);const t=ot(n);t.N_()&&t.ea&&t.ta(e.mutations)}function yc(n){return Tt(n)&&!ot(n).O_()&&n.Ia.length>0}function _c(n){ot(n).start()}async function Rm(n){ot(n).ia()}async function Cm(n){const e=ot(n);for(const t of n.Ia)e.ta(t.mutations)}async function Sm(n,e,t){const r=n.Ia.shift(),i=ls.from(r,e,t);await gc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Or(n)}async function Pm(n,e){e&&ot(n).ea&&await async function(r,i){if(function(a){return hf(a)&&a!==C.ABORTED}(i.code)){const o=r.Ia.shift();ot(r).L_(),await gc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Or(r)}}(n,e),yc(n)&&_c(n)}async function Oa(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),N(wt,"RemoteStore received new credentials");const r=Tt(t);t.da.add(3),await Pn(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await xr(t)}async function Vm(n,e){const t=U(n);e?(t.da.delete(2),await xr(t)):e||(t.da.add(2),await Pn(t),t.Va.set("Unknown"))}function zt(n){return n.fa||(n.fa=function(t,r,i){const o=U(t);return o.oa(),new mm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:vm.bind(null,n),n_:Tm.bind(null,n),i_:Em.bind(null,n),Y_:Im.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),_s(n)?ys(n):n.Va.set("Unknown")):(await n.fa.stop(),pc(n))})),n.fa}function ot(n){return n.ga||(n.ga=function(t,r,i){const o=U(t);return o.oa(),new pm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Rm.bind(null,n),i_:Pm.bind(null,n),na:Cm.bind(null,n),ra:Sm.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Or(n)):(await n.ga.stop(),n.Ia.length>0&&(N(wt,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class ws{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,c=new ws(e,t,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vs(n,e){if(je("AsyncQueue",`${e}: ${n}`),jt(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class kt{static emptySet(e){return new kt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=ln(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new kt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ma{constructor(){this.pa=new Z(O.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Lt{constructor(e,t,r,i,o,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Lt(e,t,kt.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class km{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class Dm{constructor(){this.queries=La(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=U(t),o=i.queries;i.queries=La(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function La(){return new vt(n=>Fl(n),Sr)}async function Ts(n,e){const t=U(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Da()&&e.va()&&(r=2):(o=new km,r=e.va()?0:1);try{switch(r){case 0:o.ba=await t.onListen(i,!0);break;case 1:o.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=vs(a,`Initialization of query '${Ct(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&Is(t)}async function Es(n,e){const t=U(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=e.va()?0:1:!o.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Nm(n,e){const t=U(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const c of a.Sa)c.Ma(i)&&(r=!0);a.ba=i}}r&&Is(t)}function xm(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);r.queries.delete(e)}function Is(n){n.Ca.forEach(e=>{e.next()})}var qi,Fa;(Fa=qi||(qi={})).xa="default",Fa.Cache="cache";class As{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=Lt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==qi.Cache}}/**
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
 */class wc{constructor(e){this.key=e}}class vc{constructor(e){this.key=e}}class Om{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.Za=Ul(e),this.Xa=new kt(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new Ma,i=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,_)=>{const w=i.get(m),R=Pr(this.query,_)?_:null,P=!!w&&this.mutatedKeys.has(w.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;w&&R?w.data.isEqual(R.data)?P!==D&&(r.track({type:3,doc:R}),V=!0):this.ru(w,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Za(R,h)>0||d&&this.Za(R,d)<0)&&(c=!0)):!w&&R?(r.track({type:0,doc:R}),V=!0):w&&!R&&(r.track({type:1,doc:w}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:c,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((m,_)=>function(R,P){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:V})}};return D(R)-D(P)}(m.type,_.type)||this.Za(m.doc,_.doc)),this.iu(r),i=i!=null&&i;const c=t&&!i?this.su():[],h=this.Ya.size===0&&this.current&&!i?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new Lt(this.query,e.Xa,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ma,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=j(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new vc(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new wc(r))}),t}au(e){this.Ha=e.$s,this.Ya=j();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return Lt.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const bs="SyncEngine";class Mm{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Lm{constructor(e){this.key=e,this.cu=!1}}class Fm{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new vt(c=>Fl(c),Sr),this.Pu=new Map,this.Tu=new Set,this.Iu=new Z(O.comparator),this.Eu=new Map,this.du=new hs,this.Au={},this.Ru=new Map,this.Vu=Mt.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Um(n,e,t=!0){const r=Rc(n);let i;const o=r.hu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.uu()):i=await Tc(r,e,t,!0),i}async function Bm(n,e){const t=Rc(n);await Tc(t,e,!0,!1)}async function Tc(n,e,t,r){const i=await om(n.localStore,xe(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await Ym(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&fc(n.remoteStore,i),c}async function Ym(n,e,t,r,i){n.fu=(_,w,R)=>async function(D,V,B,F){let q=V.view.tu(B);q.Cs&&(q=await Va(D.localStore,V.query,!1).then(({documents:E})=>V.view.tu(E,q)));const J=F&&F.targetChanges.get(V.targetId),Re=F&&F.targetMismatches.get(V.targetId)!=null,X=V.view.applyChanges(q,D.isPrimaryClient,J,Re);return Ba(D,V.targetId,X.ou),X.snapshot}(n,_,w,R);const o=await Va(n.localStore,e,!0),a=new Om(e,o.$s),c=a.tu(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,h);Ba(n,t,d.ou);const m=new Mm(e,t,a);return n.hu.set(e,m),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),d.snapshot}async function jm(n,e,t){const r=U(n),i=r.hu.get(e),o=r.Pu.get(i.targetId);if(o.length>1)return r.Pu.set(i.targetId,o.filter(a=>!Sr(a,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ps(r.remoteStore,i.targetId),zi(r,i.targetId)}).catch(Yt)):(zi(r,i.targetId),await Yi(r.localStore,i.targetId,!0))}async function qm(n,e){const t=U(n),r=t.hu.get(e),i=t.Pu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ps(t.remoteStore,r.targetId))}async function zm(n,e,t){const r=Xm(n);try{const i=await function(a,c){const h=U(a),d=ie.now(),m=c.reduce((R,P)=>R.add(P.key),j());let _,w;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=qe(),D=j();return h.Bs.getEntries(R,m).next(V=>{P=V,P.forEach((B,F)=>{F.isValidDocument()||(D=D.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,P)).next(V=>{_=V;const B=[];for(const F of c){const q=of(F,_.get(F.key).overlayedDocument);q!=null&&B.push(new ut(F.key,q,Vl(q.value.mapValue),Ve.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,B,c)}).next(V=>{w=V;const B=V.applyToLocalDocumentSet(_,D);return h.documentOverlayCache.saveOverlays(R,V.batchId,B)})}).then(()=>({batchId:w.batchId,changes:Yl(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Au[a.currentUser.toKey()];d||(d=new Z(Y)),d=d.insert(c,h),a.Au[a.currentUser.toKey()]=d}(r,i.batchId,t),await Vn(r,i.changes),await Or(r.remoteStore)}catch(i){const o=vs(i,"Failed to persist write");t.reject(o)}}async function Ec(n,e){const t=U(n);try{const r=await rm(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Eu.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.cu=!0:i.modifiedDocuments.size>0?G(a.cu,14607):i.removedDocuments.size>0&&(G(a.cu,42227),a.cu=!1))}),await Vn(t,r,e)}catch(r){await Yt(r)}}function Ua(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.hu.forEach((o,a)=>{const c=a.view.Fa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=U(a);h.onlineState=c;let d=!1;h.queries.forEach((m,_)=>{for(const w of _.Sa)w.Fa(c)&&(d=!0)}),d&&Is(h)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $m(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),o=i&&i.key;if(o){let a=new Z(O.comparator);a=a.insert(o,ye.newNoDocument(o,L.min()));const c=j().add(o),h=new Dr(L.min(),new Map,new Z(Y),a,c);await Ec(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(e),Rs(r)}else await Yi(r.localStore,e,!1).then(()=>zi(r,e,t)).catch(Yt)}async function Hm(n,e){const t=U(n),r=e.batch.batchId;try{const i=await nm(t.localStore,e);Ac(t,r,null),Ic(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vn(t,i)}catch(i){await Yt(i)}}async function Gm(n,e,t){const r=U(n);try{const i=await function(a,c){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(_=>(G(_!==null,37113),m=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);Ac(r,e,t),Ic(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vn(r,i)}catch(i){await Yt(i)}}function Ic(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function Ac(n,e,t){const r=U(n);let i=r.Au[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function zi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||bc(n,r)})}function bc(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(ps(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Rs(n))}function Ba(n,e,t){for(const r of t)r instanceof wc?(n.du.addReference(r.key,e),Wm(n,r)):r instanceof vc?(N(bs,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||bc(n,r.key)):M(19791,{pu:r})}function Wm(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(N(bs,"New document in limbo: "+t),n.Tu.add(r),Rs(n))}function Rs(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new O(Q.fromString(e)),r=n.Vu.next();n.Eu.set(r,new Lm(t)),n.Iu=n.Iu.insert(t,r),fc(n.remoteStore,new Xe(xe(Cr(t.path)),r,"TargetPurposeLimboResolution",Ar.le))}}async function Vn(n,e,t){const r=U(n),i=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((c,h)=>{a.push(r.fu(h,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){i.push(d);const _=fs.Rs(h.targetId,d);o.push(_)}}))}),await Promise.all(a),r.lu.Y_(i),await async function(h,d){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>S.forEach(d,w=>S.forEach(w.ds,R=>m.persistence.referenceDelegate.addReference(_,w.targetId,R)).next(()=>S.forEach(w.As,R=>m.persistence.referenceDelegate.removeReference(_,w.targetId,R)))))}catch(_){if(!jt(_))throw _;N(ms,"Failed to update sequence numbers: "+_)}for(const _ of d){const w=_.targetId;if(!_.fromCache){const R=m.xs.get(w),P=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(P);m.xs=m.xs.insert(w,D)}}}(r.localStore,o))}async function Km(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){N(bs,"User change. New user:",e.toKey());const r=await cc(t.localStore,e);t.currentUser=e,function(o,a){o.Ru.forEach(c=>{c.forEach(h=>{h.reject(new x(C.CANCELLED,a))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vn(t,r.ks)}}function Qm(n,e){const t=U(n),r=t.Eu.get(e);if(r&&r.cu)return j().add(r.key);{let i=j();const o=t.Pu.get(e);if(!o)return i;for(const a of o){const c=t.hu.get(a);i=i.unionWith(c.view.eu)}return i}}function Rc(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ec.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$m.bind(null,e),e.lu.Y_=Nm.bind(null,e.eventManager),e.lu.gu=xm.bind(null,e.eventManager),e}function Xm(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gm.bind(null,e),e}class Tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nr(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return tm(this.persistence,new Jf,e.initialUser,this.serializer)}Su(e){return new lc(ds.fi,this.serializer)}bu(e){return new lm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tr.provider={build:()=>new Tr};class Jm extends Tr{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){G(this.persistence.referenceDelegate instanceof wr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Lf(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new lc(r=>wr.fi(r,t),this.serializer)}}class $i{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Km.bind(null,this.syncEngine),await Vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dm}()}createDatastore(e){const t=Nr(e.databaseInfo.databaseId),r=function(o){return new fm(o)}(e.databaseInfo);return function(o,a,c,h){return new ym(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,c){return new wm(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Ua(this.syncEngine,t,0),function(){return Na.C()?new Na:new cm}())}createSyncEngine(e,t){return function(i,o,a,c,h,d,m){const _=new Fm(i,o,a,c,h,d);return m&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=U(i);N(wt,"RemoteStore shutting down."),o.da.add(5),await Pn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$i.provider={build:()=>new $i};/**
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
 */class Cs{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const at="FirestoreClient";class Zm{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ge.UNAUTHENTICATED,this.clientId=vl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(at,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(at,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vs(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ei(n,e){n.asyncQueue.verifyOperationInProgress(),N(at,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cc(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ep(n);N(at,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Oa(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Oa(e.remoteStore,i)),n._onlineComponents=e}async function ep(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(at,"Using user provided OfflineComponentProvider");try{await Ei(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Dt("Error using user provided cache. Falling back to memory cache: "+t),await Ei(n,new Tr)}}else N(at,"Using default OfflineComponentProvider"),await Ei(n,new Jm(void 0));return n._offlineComponents}async function Cc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(at,"Using user provided OnlineComponentProvider"),await Ya(n,n._uninitializedComponentsProvider._online)):(N(at,"Using default OnlineComponentProvider"),await Ya(n,new $i))),n._onlineComponents}function tp(n){return Cc(n).then(e=>e.syncEngine)}async function Er(n){const e=await Cc(n),t=e.eventManager;return t.onListen=Um.bind(null,e.syncEngine),t.onUnlisten=jm.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qm.bind(null,e.syncEngine),t}function np(n,e,t={}){const r=new Be;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Cs({next:w=>{m.xu(),a.enqueueAndForget(()=>Es(o,_));const R=w.docs.has(c);!R&&w.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&h&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),_=new As(Cr(c.path),m,{includeMetadataChanges:!0,Qa:!0});return Ts(o,_)}(await Er(n),n.asyncQueue,e,t,r)),r.promise}function rp(n,e,t={}){const r=new Be;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Cs({next:w=>{m.xu(),a.enqueueAndForget(()=>Es(o,_)),w.fromCache&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),_=new As(c,m,{includeMetadataChanges:!0,Qa:!0});return Ts(o,_)}(await Er(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Sc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ja=new Map;/**
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
 */function Pc(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ip(n,e,t,r){if(e===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qa(n){if(!O.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function za(n){if(O.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Se(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mr(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Vc="firestore.googleapis.com",$a=!0;class Ha{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vc,this.ssl=$a}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$a;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ac;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Of)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ip("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lr{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ha({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ha(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hd;switch(r.type){case"firstParty":return new pd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ja.get(t);r&&(N("ComponentProvider","Removing Datastore"),ja.delete(t),r.terminate())}(this),Promise.resolve()}}function sp(n,e,t,r={}){var i;n=Se(n,Lr);const o=Ji(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(Fu(`https://${h}`),ju("Firestore",!0)),a.host!==Vc&&a.host!==h&&Dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!ur(d,c)&&(n._setSettings(d),r.mockUserToken)){let m,_;if(typeof r.mockUserToken=="string")m=r.mockUserToken,_=ge.MOCK_USER;else{m=Uu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new ge(w)}n._authCredentials=new dd(new _l(m,_))}}/**
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
 */class ht{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ht(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}}class tt extends ht{constructor(e,t,r){super(e,t,Cr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new O(e))}withConverter(e){return new tt(this.firestore,e,this._path)}}function Rn(n,e,...t){if(n=Me(n),Pc("collection","path",e),n instanceof Lr){const r=Q.fromString(e,...t);return za(r),new tt(n,null,r)}{if(!(n instanceof ve||n instanceof tt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(e,...t));return za(r),new tt(n.firestore,null,r)}}function De(n,e,...t){if(n=Me(n),arguments.length===1&&(e=vl.newId()),Pc("doc","path",e),n instanceof Lr){const r=Q.fromString(e,...t);return qa(r),new ve(n,null,new O(r))}{if(!(n instanceof ve||n instanceof tt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(e,...t));return qa(r),new ve(n.firestore,n instanceof tt?n.converter:null,new O(r))}}/**
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
 */const Ga="AsyncQueue";class Wa{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new hc(this,"async_queue_retry"),this.rc=()=>{const r=Ti();r&&N(Ga,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Ti();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Ti();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Be;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!jt(e))throw e;N(Ga,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,je("INTERNAL UNHANDLED ERROR: ",Ka(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=ws.createAndSchedule(this,e,t,r,o=>this.uc(o));return this.Zu.push(i),i}oc(){this.Xu&&M(47125,{cc:Ka(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Ka(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Qa(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class lt extends Lr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Wa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wa(e),this._firestoreClient=void 0,await e}}}function op(n,e){const t=typeof n=="object"?n:Jh(),r=typeof n=="string"?n:mr,i=Gh(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Mu("firestore");o&&sp(i,...o)}return i}function Fr(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ap(n),n._firestoreClient}function ap(n){var e,t,r;const i=n._freezeSettings(),o=function(c,h,d,m){return new Vd(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Sc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Zm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(ue.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ft(ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ur{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Br{constructor(e){this._methodName=e}}/**
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
 */class Ss{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class Ps{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const lp=/^__.*__$/;class cp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cn(e,this.data,t,this.fieldTransforms)}}class kc{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:n})}}class Vs{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Vs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ir(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Dc(this.Ic)&&lp.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class up{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Nr(e)}bc(e,t,r,i=!1){return new Vs({Ic:e,methodName:t,wc:r,path:ce.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ks(n){const e=n._freezeSettings(),t=Nr(n._databaseId);return new up(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hp(n,e,t,r,i,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,e,t,i);Ns("Data must be an object, but it was:",a,r);const c=Nc(r,a);let h,d;if(o.merge)h=new be(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const _ of o.mergeFields){const w=Hi(e,_,t);if(!a.contains(w))throw new x(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Oc(m,w)||m.push(w)}h=new be(m),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new cp(new Ie(c),h,d)}class kn extends Br{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kn}}class Ds extends Br{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){const t=new bn(e.serializer,zl(e.serializer,this.Dc));return new tf(e.path,t)}isEqual(e){return e instanceof Ds&&this.Dc===e.Dc}}function dp(n,e,t,r){const i=n.bc(1,e,t);Ns("Data must be an object, but it was:",i,r);const o=[],a=Ie.empty();ct(r,(h,d)=>{const m=xs(e,h,t);d=Me(d);const _=i.mc(m);if(d instanceof kn)o.push(m);else{const w=Dn(d,_);w!=null&&(o.push(m),a.set(m,w))}});const c=new be(o);return new kc(a,c,i.fieldTransforms)}function fp(n,e,t,r,i,o){const a=n.bc(1,e,t),c=[Hi(e,r,t)],h=[i];if(o.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Hi(e,o[w])),h.push(o[w+1]);const d=[],m=Ie.empty();for(let w=c.length-1;w>=0;--w)if(!Oc(d,c[w])){const R=c[w];let P=h[w];P=Me(P);const D=a.mc(R);if(P instanceof kn)d.push(R);else{const V=Dn(P,D);V!=null&&(d.push(R),m.set(R,V))}}const _=new be(d);return new kc(m,_,a.fieldTransforms)}function mp(n,e,t,r=!1){return Dn(t,n.bc(r?4:3,e))}function Dn(n,e){if(xc(n=Me(n)))return Ns("Unsupported field value:",e,n),Nc(n,e);if(n instanceof Br)return function(r,i){if(!Dc(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=Dn(c,i.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ie.fromDate(r);return{timestampValue:_r(i.serializer,o)}}if(r instanceof ie){const o=new ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_r(i.serializer,o)}}if(r instanceof Ss)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:ec(i.serializer,r._byteString)};if(r instanceof ve){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:us(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ps)return function(a,c){return{mapValue:{fields:{[Sl]:{stringValue:Pl},[pr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.gc("VectorValues must only contain numeric values.");return os(c.serializer,d)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${Mr(r)}`)}(n,e)}function Nc(n,e){const t={};return El(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ct(n,(r,i)=>{const o=Dn(i,e.Ac(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function xc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof Ss||n instanceof Ft||n instanceof ve||n instanceof Br||n instanceof Ps)}function Ns(n,e,t){if(!xc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Mr(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function Hi(n,e,t){if((e=Me(e))instanceof Ur)return e._internalPath;if(typeof e=="string")return xs(n,e);throw Ir("Field path arguments must be of type string or ",n,!1,void 0,t)}const pp=new RegExp("[~\\*/\\[\\]]");function xs(n,e,t){if(e.search(pp)>=0)throw Ir(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ur(...e.split("."))._internalPath}catch{throw Ir(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ir(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new x(C.INVALID_ARGUMENT,c+n+h)}function Oc(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mc{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gp extends Mc{data(){return super.data()}}function Yr(n,e){return typeof e=="string"?xs(n,e):e instanceof Ur?e._internalPath:e._delegate._internalPath}/**
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
 */function Lc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Os{}class Fc extends Os{}function Gi(n,e,...t){let r=[];e instanceof Os&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof Ms).length,c=o.filter(h=>h instanceof jr).length;if(a>1||a>0&&c>0)throw new x(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class jr extends Fc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new jr(e,t,r)}_apply(e){const t=this._parse(e);return Uc(e._query,t),new ht(e.firestore,e.converter,Oi(e._query,t))}_parse(e){const t=ks(e.firestore);return function(o,a,c,h,d,m,_){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ja(_,m);const P=[];for(const D of _)P.push(Xa(h,o,D));w={arrayValue:{values:P}}}else w=Xa(h,o,_)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ja(_,m),w=mp(c,a,_,m==="in"||m==="not-in");return re.create(d,m,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Wi(n,e,t){const r=e,i=Yr("where",n);return jr._create(i,r,t)}class Ms extends Os{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ms(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)Uc(a,h),a=Oi(a,h)}(e._query,t),new ht(e.firestore,e.converter,Oi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ls extends Fc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ls(e,t)}_apply(e){const t=function(i,o,a){if(i.startAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new En(o,a)}(e._query,this._field,this._direction);return new ht(e.firestore,e.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new qt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Ki(n,e="asc"){const t=e,r=Yr("orderBy",n);return Ls._create(r,t)}function Xa(n,e,t){if(typeof(t=Me(t))=="string"){if(t==="")throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ll(e)&&t.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Q.fromString(t));if(!O.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ha(n,new O(r))}if(t instanceof ve)return ha(n,t._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mr(t)}.`)}function Ja(n,e){if(!Array.isArray(n)||n.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uc(n,e){const t=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class yp{convertValue(e,t="none"){switch(st(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(it(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ct(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[pr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>te(a.doubleValue));return new Ps(o)}convertGeoPoint(e){return new Ss(te(e.latitude),te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Rr(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(wn(e));default:return null}}convertTimestamp(e){const t=rt(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Q.fromString(e);G(oc(r),9688,{name:e});const i=new vn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(t)||je(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function _p(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class un{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bc extends Mc{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lr extends Bc{data(e={}){return super.data(e)}}class Yc{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new un(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new lr(this._firestore,this._userDataWriter,r.key,r,new un(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new un(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new un(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:wp(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
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
 */function qr(n){n=Se(n,ve);const e=Se(n.firestore,lt);return np(Fr(e),n._key).then(t=>zc(e,n,t))}class Fs extends yp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function Za(n){n=Se(n,ht);const e=Se(n.firestore,lt),t=Fr(e),r=new Fs(e);return Lc(n._query),rp(t,n._query).then(i=>new Yc(e,r,n,i))}function ze(n,e,t,...r){n=Se(n,ve);const i=Se(n.firestore,lt),o=ks(i);let a;return a=typeof(e=Me(e))=="string"||e instanceof Ur?fp(o,"updateDoc",n._key,e,t,r):dp(o,"updateDoc",n._key,e),Us(i,[a.toMutation(n._key,Ve.exists(!0))])}function vp(n){return Us(Se(n.firestore,lt),[new as(n._key,Ve.none())])}function jc(n,e){const t=Se(n.firestore,lt),r=De(n),i=_p(n.converter,e);return Us(t,[hp(ks(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function qc(n,...e){var t,r,i;n=Me(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Qa(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Qa(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let h,d,m;if(n instanceof ve)d=Se(n.firestore,lt),m=Cr(n._key.path),h={next:_=>{e[a]&&e[a](zc(d,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Se(n,ht);d=Se(_.firestore,lt),m=_._query;const w=new Fs(d);h={next:R=>{e[a]&&e[a](new Yc(d,w,_,R))},error:e[a+1],complete:e[a+2]},Lc(n._query)}return function(w,R,P,D){const V=new Cs(D),B=new As(R,V,P);return w.asyncQueue.enqueueAndForget(async()=>Ts(await Er(w),B)),()=>{V.xu(),w.asyncQueue.enqueueAndForget(async()=>Es(await Er(w),B))}}(Fr(d),m,c,h)}function Us(n,e){return function(r,i){const o=new Be;return r.asyncQueue.enqueueAndForget(async()=>zm(await tp(r),i,o)),o.promise}(Fr(n),e)}function zc(n,e,t){const r=t.docs.get(e._key),i=new Fs(n);return new Bc(n,i,e._key,r,new un(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function Tp(){return new kn("deleteField")}function $c(n){return new Ds("increment",n)}(function(e,t=!0){(function(i){Bt=i})(Xh),dr(new gn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new lt(new fd(r.getProvider("auth-internal")),new gd(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Vt(Zo,ea,e),Vt(Zo,ea,"esm2017")})();const el={1:{ca:{"server-room":{"Investigate Server Traffic Logs":["Scanning through the IDS logs, you notice suspicious traffic indicative of automated reconnaissance and rapid-fire attacks.","Given this traffic, which IP address most likely belongs to the Rougue AI and must be urgently reviewed?"],"Check Firewall Configuration":["This won't help right now."],"Review Active Directory Logs":["This won't help right now."],"Analyse Authentication Logs":["This won't help right now."],CORRECT_ACTION:"Investigate Server Traffic Logs"},"command-centre":{"Trace Endpoint Behavior by Class":["This won't help right now."],"Update Threat Intelligence Feeds":["This won't help right now."],"Cross-check Audit Trail Against Global Events":["This won't help right now."],"Patch Exposed Service":["This won't help right now."],CORRECT_ACTION:null},"developer-hub":{"Review Access Control File":["This won't help right now."],"Check Developer Login Tokens":["This won't help right now."],"Trigger Endpoint Containment Protocol":["This won't help right now."],"Analyze Recent API Security Logs":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Review Email Gateway Rules":["This won't help right now."],"Look Up User Activity History":["You quickly pull up the latest user connection data.","As an expert in cyber security, you're used to analysing things like login times, locations, and device patterns to determine if an account has been hijacked.","If anything looks off here, you should flag it immediately before the AI burrows deeper."],"Reboot Threat Detection System":["This won't help right now."],"Run Network Speed Diagnostics":["This won't help right now."],CORRECT_ACTION:"Look Up User Activity History"}},ne:{"server-room":{"Audit Monitoring Scripts":["This won't help right now."],"Reconfigure VLAN Assignments":["This won't help right now."],"Check UPS and Cooling Network Interfaces":["This won't help right now."],"Patch Firewall Configuration":["This won't help right now."],CORRECT_ACTION:null},"command-centre":{"Review Network Topology Diagrams":["This won't help right now."],"Analyse Firewall Logs":["This won't help right now."],"Examine Firewall Rule Propagation":["This won't help right now."],"Compare Interface Access Logs":["You cross-reference interface logs from the Command Centre for irregular access times, frequency spikes, or unauthorized devices.","One of them doesn’t match the baseline. Which one is it?"],CORRECT_ACTION:"Compare Interface Access Logs"},"developer-hub":{"Audit Static IP Assignments":["This won't help right now."],"Check Network Mapping for Dev Machines":["This won't help right now."],"Monitor DHCP Lease Table":["This won't help right now."],"Trace API Traffic from Flagged IP":["You filter network flow logs for the flagged IP.","Several API calls were routed through the Developer Hub — a few to undocumented endpoints.","Which destination node has had the highest interaction with the rogue IP and should be flagged for monitoring?"],CORRECT_ACTION:"Trace API Traffic from Flagged IP"},"research-lab":{"Trace MAC Address Conflicts":["This won't help right now."],"Analyze Network Throughput to Lab Nodes":["This won't help right now."],"Scan for Rogue Access Points":["This won't help right now."],"Trigger Batch Job Trace":["This won't help right now."],CORRECT_ACTION:null}},se:{"developer-hub":{"Review Git Commit History":["This won't help right now."],"Trace Endpoint Access Logs":["This won't help right now."],"Review Classification Schema":["This won't help right now."],"Check Running Dev Services":["This won't help right now."],CORRECT_ACTION:null},"server-room":{"Audit Running Processes for Anomalies":["You scan the server’s running processes for unusual memory usage, privilege elevation, and unsigned binaries.","One process doesn’t match any verified signatures and is using significantly more resources than the rest.","Which process should be flagged for investigation?"],"Review Microservice Startup Logs":["This won't help right now."],"Check Runtime Errors on Backend Services":["This won't help right now."],"Validate Service Dependencies":["This won't help right now."],CORRECT_ACTION:"Audit Running Processes for Anomalies"},"research-lab":{"Investigate Foreign Key Mismatch":["This won't help right now."],"Review Git Commit History":["You open the commit logs from the last deployment window.","One commit stands out. It modified a crucial dataset used by the AI in production.","You flag it for rollback and notify the Data Scientist to help clean up the mess.","Which git commit did you flag?"],"Review Model Execution Logs":["This won't help right now."],"Review Active Class Overrides":["This won't help right now."],CORRECT_ACTION:"Review Git Commit History"},"command-centre":{"Scan for Unsecured Internal APIs":["This won't help right now."],"Trigger Class Hierarchy Scan":["This won't help right now."],"Review CI/CD Deployment Logs":["This won't help right now."],"Audit Token Usage in System Services":["This won't help right now."],CORRECT_ACTION:null}},ds:{"server-room":{"Analyse Model Resource Usage":["This won't help right now."],"Check Model Serving Latency":["This won't help right now."],"Run Feature Engineering Audit":["This won't help right now."],"Inspect Containerized Model Deployments":["This won't help right now."],CORRECT_ACTION:null},"command-centre":{"Adjust Intrusion Detection Signals":["This won't help right now."],"Review Alert Thresholds for Data Anomalies":["This won't help right now."],"Commence An Exploratory Data Analysis Session":["Early analysis results show wild predictions by models that were previously operating correctly.","A quick check of the summary stats reveals the issue.","What’s the best cleaning approach to prevent downstream failures caused by this commit?"],"Audit Scheduled Retraining Jobs":["This won't help right now."],CORRECT_ACTION:"Commence An Exploratory Data Analysis Session"},"developer-hub":{"Verify Data Pipeline Integrity":["This won't help right now."],"Inspect Feature Store Activity":["This won't help right now."],"Analyse User Session Logs":["You load 24 hours of user session logs and run statistical comparisons across key behavioral metrics.","One user shows a clear deviation with unusual access frequency, irregular login times, and inconsistent device usage.","What user is this?"],"Audit Prediction Rules":["This won't help right now."],CORRECT_ACTION:"Analyse User Session Logs"},"research-lab":{"Review Training Data Samples":["This won't help right now."],"Check Dataset Integrity and Labeling":["This won't help right now."],"Analyze Experiment Metrics for Outliers":["This won't help right now."],"Compare Performance of Experimental Models":["This won't help right now."],CORRECT_ACTION:null}}},2:{ca:{"server-room":{"Investigate Server Traffic Logs":["This won't help right now."],"Check Firewall Configuration":["This won't help right now."],"Review Active Directory Logs":["This won't help right now."],"Analyse Authentication Logs":["This won't help right now."],CORRECT_ACTION:null},"command-centre":{"Trace Endpoint Behavior by Class":["You scan endpoints reporting custom subclass behavior.","The Software Engineer flagged a specific subclass as malicious, likely injecting commands remotely.","Which endpoint is most likely being controlled by the injected subclass?"],"Update Threat Intelligence Feeds":["This won't help right now."],"Cross-check Audit Trail Against Global Events":["This won't help right now."],"Patch Exposed Service":["This won't help right now."],CORRECT_ACTION:"Trace Endpoint Behavior by Class"},"developer-hub":{"Review Access Control File":["This won't help right now."],"Check Developer Login Tokens":["This won't help right now."],"Trigger Endpoint Containment Protocol":["You launch the containment protocol, scanning logs for suspicious internal activity.","Several machines are acting strangely — service accounts behaving outside normal baselines.","Which of these endpoints is most likely under AI control and should be isolated immediately?"],"Analyze Recent API Security Logs":["This won't help right now."],CORRECT_ACTION:"Trigger Endpoint Containment Protocol"},"research-lab":{"Review Email Gateway Rules":["This won't help right now."],"Look Up User Activity History":["This won't help right now."],"Reboot Threat Detection System":["This won't help right now."],"Run Network Speed Diagnostics":["This won't help right now."],CORRECT_ACTION:null}},ne:{"server-room":{"Audit Monitoring Scripts":["You inspect your batch scripts used for intrusion detection across endpoints.","Which monitoring script must be patched to remove reliance on the leaky feature the Data Scientist flagged?"],"Reconfigure VLAN Assignments":["This won't help right now."],"Check UPS and Cooling Network Interfaces":["This won't help right now."],"Patch Firewall Configuration":["This won't help right now."],CORRECT_ACTION:"Audit Monitoring Scripts"},"command-centre":{"Review Network Topology Diagrams":["This won't help right now."],"Analyse Firewall Logs":["This won't help right now."],"Review Recent Script Executions":["This won't help right now."],"Compare Interface Access Logs":["This won't help right now."],CORRECT_ACTION:null},"developer-hub":{"Audit Static IP Assignments":["This won't help right now."],"Check Network Mapping for Dev Machines":["This won't help right now."],"Monitor DHCP Lease Table":["This won't help right now."],"Trace API Traffic from Flagged IP":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Trace MAC Address Conflicts":["This won't help right now."],"Analyze Network Throughput to Lab Nodes":["This won't help right now."],"Scan for Rogue Access Points":["This won't help right now."],"Trigger Batch Job Trace":["This won't help right now."],CORRECT_ACTION:null}},se:{"developer-hub":{"Review Git Commit History":["This won't help right now."],"Trace Endpoint Access Logs":["This won't help right now."],"Review Classification Schema":["This won't help right now."],"Check Running Dev Services":["This won't help right now."],CORRECT_ACTION:null},"server-room":{"Audit Running Processes for Anomalies":["This won't help right now."],"Review Microservice Startup Logs":["This won't help right now."],"Check Runtime Errors on Backend Services":["This won't help right now."],"Validate Service Dependencies":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Investigate Foreign Key Mismatch":["This won't help right now."],"Review Git Commit History":["This won't help right now."],"Review Model Execution Logs":["This won't help right now."],"Review Active Class Overrides":["You scan recently modified classes in the build pipeline.","One of them originates from the compromised developer machine flagged earlier.","Which class has most likely been modified by the AI and should be deprecated immediately?"],CORRECT_ACTION:"Review Active Class Overrides"},"command-centre":{"Scan for Unsecured Internal APIs":["This won't help right now."],"Trigger Class Hierarchy Scan":["You launch a scan of active subclasses extending from core system services.","One of them is behaving differently — injecting logic at runtime from an unknown source.","Which subclass most likely introduces AI-modified behavior and should be flagged?"],"Review CI/CD Deployment Logs":["This won't help right now."],"Audit Token Usage in System Services":["This won't help right now."],CORRECT_ACTION:"Trigger Class Hierarchy Scan"}},ds:{"server-room":{"Analyze Model Resource Usage":["This won't help right now."],"Check Model Serving Latency":["This won't help right now."],"Run Feature Engineering Audit":["You audit the engineered features feeding into the real-time detection model.","One of them has an unusually high correlation with intrusion events. Suspiciously high...","Which engineered feature is likely causing data leakage in the intrusion detection model?"],"Inspect Containerized Model Deployments":["This won't help right now."],CORRECT_ACTION:"Run Feature Engineering Audit"},"command-centre":{"Analyse Feature Stability Report":["You compare the variance and update timings of key engineered features.","One of them lines up exactly with the suspicious script injected earlier.","Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?"],"Review Alert Thresholds for Data Anomalies":["This won't help right now."],"Commence An Exploratory Data Analysis Session":["This won't help right now."],"Audit Scheduled Retraining Jobs":["This won't help right now."],CORRECT_ACTION:"Analyse Feature Stability Report"},"developer-hub":{"Verify Data Pipeline Integrity":["This won't help right now."],"Inspect Feature Store Activity":["This won't help right now."],"Analyse User Session Logs":["This won't help right now."],"Audit Prediction Rules":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Review Training Data Samples":["This won't help right now."],"Check Dataset Integrity and Labeling":["This won't help right now."],"Analyze Experiment Metrics for Outliers":["This won't help right now."],"Compare Performance of Experimental Models":["This won't help right now."],CORRECT_ACTION:null}}},3:{ca:{"server-room":{"Investigate Server Traffic Logs":["This won't help right now."],"Check Firewall Configuration":["This won't help right now."],"Review Active Directory Logs":["This won't help right now."],"Analyse Authentication Logs":["You load the latest authentication dump from `/var/log/auth.log`.","Multiple service accounts show signs of compromise — but one is clearly AI-controlled.","Which account is most likely being exploited by the AI to compromise data security?"],CORRECT_ACTION:"Analyse Authentication Logs"},"command-centre":{"Trace Endpoint Behavior by Class":["This won't help right now."],"Update Threat Intelligence Feeds":["This won't help right now."],"Cross-check Audit Trail Against Global Events":["This won't help right now."],"Patch Exposed Service":["You open the config file of the app-layer service identified by the Network Engineer.","It’s wide open — no auth, no rate limiting, open to the whole internet.","Which patch would best prevent a repeat of the AI's data breach?"],CORRECT_ACTION:"Patch Exposed Service"},"developer-hub":{"Review Access Control File":["This won't help right now."],"Check Developer Login Tokens":["This won't help right now."],"Trigger Endpoint Containment Protocol":["This won't help right now."],"Analyze Recent API Security Logs":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Review Email Gateway Rules":["This won't help right now."],"Look Up User Activity History":["This won't help right now."],"Reboot Threat Detection System":["This won't help right now."],"Run Network Speed Diagnostics":["This won't help right now."],CORRECT_ACTION:null}},ne:{"server-room":{"Audit Monitoring Scripts":["You inspect your batch scripts used for intrusion detection across endpoints.","Which monitoring script must be patched to remove reliance on the leaky feature the Data Scientist flagged?"],"Reconfigure VLAN Assignments":["This won't help right now."],"Check UPS and Cooling Network Interfaces":["This won't help right now."],"Patch Firewall Configuration":["You receive an exploit signature from the Software Engineer — malformed foreign keys like `user_id=9999` are slipping into analytics systems.","You draft several rule candidates for outbound traffic filtering.","Which rule should you apply to stop this behavior?"],CORRECT_ACTION:"Patch Firewall Configuration"},"command-centre":{"Review Network Topology Diagrams":["This won't help right now."],"Analyse Firewall Logs":["You receive a time-synced firewall log excerpt showing AI-originating traffic.","One of these protocols was used to exfiltrate internal system logs.","Which breach vector is responsible?"],"Review Recent Script Executions":["This won't help right now."],"Compare Interface Access Logs":["This won't help right now."],CORRECT_ACTION:"Analyse Firewall Logs"},"developer-hub":{"Audit Static IP Assignments":["This won't help right now."],"Check Network Mapping for Dev Machines":["This won't help right now."],"Monitor DHCP Lease Table":["This won't help right now."],"Trace API Traffic from Flagged IP":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Trace MAC Address Conflicts":["This won't help right now."],"Analyze Network Throughput to Lab Nodes":["This won't help right now."],"Scan for Rogue Access Points":["This won't help right now."],"Trigger Batch Job Trace":["This won't help right now."],CORRECT_ACTION:null}},se:{"developer-hub":{"Review Git Commit History":["This won't help right now."],"Trace Endpoint Access Logs":["This won't help right now."],"Review Classification Schema":["You load the `security_flags` table in the dashboard.","Everything looks valid at a glance, but something isn’t matching up. The AI’s allowed several malicious users to slip through.","What structural flaw could allow malicious records to bypass classification?"],"Check Running Dev Services":["This won't help right now."],CORRECT_ACTION:"Review Classification Schema"},"server-room":{"Audit Running Processes for Anomalies":["This won't help right now."],"Review Microservice Startup Logs":["This won't help right now."],"Check Runtime Errors on Backend Services":["This won't help right now."],"Validate Service Dependencies":["This won't help right now."],CORRECT_ACTION:null},"research-lab":{"Investigate Foreign Key Mismatch":["You pull the database schema for the `security_flags` table and cross-reference it with the anomaly log.","One of the foreign key references is allowing invalid data to slip through unchecked.","Which field is being misused?"],"Review Git Commit History":["This won't help right now."],"Review Model Execution Logs":["This won't help right now."],"Review Active Class Overrides":["This won't help right now."],CORRECT_ACTION:"Investigate Foreign Key Mismatch"},"command-centre":{"Scan for Unsecured Internal APIs":["This won't help right now."],"Trigger Class Hierarchy Scan":["You launch a scan of active subclasses extending from core system services.","One of them is behaving differently — injecting logic at runtime from an unknown source.","Which subclass most likely introduces AI-modified behavior and should be flagged?"],"Review CI/CD Deployment Logs":["This won't help right now."],"Audit Token Usage in System Services":["This won't help right now."],CORRECT_ACTION:"Trigger Class Hierarchy Scan"}},ds:{"server-room":{"Analyze Model Resource Usage":["This won't help right now."],"Check Model Serving Latency":["This won't help right now."],"Run Feature Engineering Audit":["You audit the engineered features feeding into the real-time detection model.","One of them has an unusually high correlation with intrusion events. Suspiciously high...","Which engineered feature is likely causing data leakage in the intrusion detection model?"],"Inspect Containerized Model Deployments":["This won't help right now."],CORRECT_ACTION:"Run Feature Engineering Audit"},"command-centre":{"Analyse Feature Stability Report":["You compare the variance and update timings of key engineered features.","One of them lines up exactly with the suspicious script injected earlier.","Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?"],"Review Alert Thresholds for Data Anomalies":["This won't help right now."],"Commence An Exploratory Data Analysis Session":["This won't help right now."],"Audit Scheduled Retraining Jobs":["This won't help right now."],CORRECT_ACTION:"Analyse Feature Stability Report"},"developer-hub":{"Verify Data Pipeline Integrity":["This won't help right now."],"Inspect Feature Store Activity":["This won't help right now."],"Analyse User Session Logs":["This won't help right now."],"Audit Prediction Rules":["You review the simplified logic extracted from the AI’s current decision engine.","One rule is causing a spike in false positives — even for clean endpoint activity.","Which line is most likely responsible?"],CORRECT_ACTION:"Audit Prediction Rules"},"research-lab":{"Review Training Data Samples":["You pull a subset of recent training data used in real-time anomaly detection.","One of them appears mislabeled, likely injected by the flagged account.","Which sample index is most likely poisoned?"],"Check Dataset Integrity and Labeling":["This won't help right now."],"Analyze Experiment Metrics for Outliers":["This won't help right now."],"Compare Performance of Experimental Models":["This won't help right now."],CORRECT_ACTION:"Review Training Data Samples"}}},"NO-ACTION":["This doesn't seem to help right now. You should try looking in some other rooms"]},Ep={1:{ca:{"server-room":{enabler:{title:"Identify Rougue IP Address",prompt:"Given this traffic, which IP address most likely belongs to the Rougue AI and must be urgently reviewed?",tableHeaders:["Timestamp","Source IP","Destination","Activity Description"],tableRows:[["9:21:03","10.0.0.45","Server_1","Routine status check"],["9:21:07","172.16.5.12","Developer_Hub","Multiple authentication attempts failed"],["9:21:10","10.0.0.77","Research_Lab","Large encrypted data transfer initiated"],["9:21:15","192.168.3.200","Server_Room","Rapid port scanning detected"]],correctAnswerIndex:3,feedback:{correct:["An external IP triggering a port scan alert is the digital equivalent of someone rattling every doorknob in your building at 3AM.","Whether it’s the AI itself or an AI-controlled node, this is the clearest sign of an automated threat in action.","It’s not guessing passwords or hiding in traffic... it’s hunting.","You send the IP address to the network engineer for urgent review.","You should investigate some other rooms in case you can assist further."],incorrect:["You send the IP address to the network engineer for urgent review.","You should investigate some other rooms in case you can assist further."]}}},"research-lab":{enabled:{title:"Idenfity Suspicious Login Attempt",prompt:"Which server login attempt confirms the Data Scientist's suspicions?",tableHeaders:["Timestamp","IP Adress","Location","Device","Result"],tableRows:[["2025-07-01 02:12:43","192.168.1.10","Melbourne","DevStation01","Success"],["2025-07-01 02:14:05","203.0.113.55","Tokyo","Unknown","Success"],["2025-07-01 02:14:22","192.168.1.10","Melbourne","DevStation01","Active Session"],["2025-07-01 02:15:10","192.168.1.12","Melbourne","DataNode03","Success"]],correctAnswerIndex:1,feedback:{correct:["The login pattern shows a classic sign of account compromise — an external IP slipping in between legitimate internal logins.","Even if the credentials were correct, the location, device, or timing should raise red flags.","This isn’t just a user on a VPN. It’s likely the Rogue AI probing for elevated access or persistence.","You’ve flagged the user as compromised.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flag the user as compromised.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ne:{"command-centre":{enabler:{title:"Identify Compromised Interface",prompt:"Which interface did the AI use to infiltrate the network?",tableHeaders:["Interface","Avg. Traffic","Recent Traffic","Protocols"],tableRows:[["eth0","200 MB","195 MB","SSH, HTTP"],["eth1","150 MB","580 MB","SSH, TCP, Unknown"],["eth2","300 MB","310 MB","FTP, SMB"],["eth3","180 MB","175 MB","DNS, NTP"]],correctAnswerIndex:1,feedback:{correct:["eth1’s lighting up like a Christmas tree.","Way above normal traffic, and something’s talking on an unknown protocol.","That’s not just noise, that’s a breach vector.","You flag it for follow-up by the Software Engineer.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the interace for follow-up.","You should investigate some other rooms in case you can assist further."]}}},"developer-hub":{enabled:{title:"Identify Infected Nodes",prompt:"Which node has the flagged IP interacted with the most?",tableHeaders:["Destination IP","Protocol","Connection Count","Last Seen"],tableRows:[["192.168.1.20","ICMP","0","—"],["192.168.2.10","TCP","4","08:53"],["192.168.3.40","UDP","1","08:50"],["192.168.3.200","TCP","13","08:51"],["10.0.0.45","TCP","3","08:49"]],correctAnswerIndex:3,feedback:{correct:["192.168.3.200 shows the most consistent interaction with the flagged IP.","This node has been contacted repeatedly, and its location deep in the network makes it a perfect bridge for lateral movement.","You isolate the destination paths and forward the trace to the Software Engineer.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flagged the node for monitoring.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},se:{"research-lab":{enabler:{title:"Identify Issue Git Commit",prompt:"Which git commit may have caused the AI to go rougue?",tableHeaders:["Commit ID","Message","Effect Summary"],tableRows:[["AA12","Skip null checks in value multiplier","May introduce NaNs downstream"],["ZZ93","Hardcode values temporarily for testing","Inserts extreme outliers, can poison ML models"],["YY54","Convert input to string for log display","Type mismatch risk in pipelines"],["BB38","Add optional status field","Adds flexibility, no core risk"]],correctAnswerIndex:1,feedback:{correct:["Commit ZZ93 introduces a malicious hardcoded value that could poison training data.","This is likely how the AI's logic was corrupted.","You’ve flagged the commit to be investigated by the Data Scientist.","You should investigate some other rooms in case you can assist further."],incorrect:["You’ve flagged the commit to be investigated by the Data Scientist.","You should investigate some other rooms in case you can assist further."]}}},"server-room":{enabled:{title:"Identify Infected Process",prompt:"Which process should be contained?",tableHeaders:["Process Name","Interface","Memory Usage","Hash Verified"],tableRows:[["db_sync","eth0","20 MB","No","Yes"],["log_agent","eth1","32 MB","No","Yes"],["systemd-1","eth1","300 MB","Yes","No"],["cache_clean","eth2","28 MB","No","Yes"]],correctAnswerIndex:2,feedback:{correct:["That’s not the real systemd process. It’s consuming 10x normal memory, and it’s not even hash-verified.","The AI’s likely masquerading behind it.","You flag `systemd-1` for code review and containment trace.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flagged the process for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ds:{"developer-hub":{enabler:{title:"Identify Compromised Account",prompt:"Which account have many been used by the AI to access the server?",tableHeaders:["User ID","Session Count","Avg. Actions","Peak Memory (mb)"],tableRows:[["user_01","4","3.2","420"],["user_02","5","3.5","390"],["user_03","4","3.0","405"],["user_99","2","15.2","950"]],correctAnswerIndex:3,feedback:{correct:["User `user_99` is acting nothing like the others.","Double the memory, five times the activity rate, that’s not just fast typing, that’s non-human.","Flagging for escalation by the Cyber Security Analyst.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the user for escalation by the Cyber Security Analyst.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Utilise Correct Data Cleaning Technique",prompt:"Which of these endpoints is most likely under AI control and should be isolated immediately?",tableHeaders:["Cleaning Step","Rationale"],tableRows:[["Drop or impute missing values","A value is missing in one of the rows."],["Remove or clip outliers","All values are abnormally high, well beyond typical bounds."],["Cast to numeric type","Values are stored as strings, could break math operations."],["No cleaning needed","Data appears complete and well-typed."]],correctAnswerIndex:1,feedback:{correct:["Extreme outliers like these can completely destabilise models, especially if they weren’t expected in training.","Clipping or removing them prevents the AI from learning skewed patterns or reacting to poisoned inputs.","You clean the data and flag the commit.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You put your expertise into action and resolve the issue.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}}},2:{ca:{"developer-hub":{enabler:{title:"Isolate AI-Controlled Endpoint",prompt:"Which of these endpoints is most likely under AI control and should be isolated immediately?",tableHeaders:["Time","Device ID","User","Activity Summary"],tableRows:[["14:22:01","DEV-045","jsimons","Attempted to disable OS-level firewall"],["14:22:03","DEV-312","svc_deploy","Established 9 simultaneous outbound SSH sessions"],["14:22:08","DEV-229","root","Launched code-signing tool without valid certificate"],["14:22:11","DEV-088","svc_devbuild","Repeated privilege escalation attempts on internal APIs"]],correctAnswerIndex:1,feedback:{correct:["Nine simultaneous outbound SSH sessions from a service account is highly suspicious and a classic lateral movement pattern.","This endpoint is likely under AI control and actively breaching internal dev tools.","You package the device ID and account details and send them to the Software Engineer for hard quarantine.","You should investigate some other rooms in case you can assist further."],incorrect:["You package the device ID and account details and send them to the Software Engineer for hard quarantine.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Isolate Subclass-Controlled Endpoint",prompt:"Which endpoint is most likely being controlled by the injected subclass?",tableHeaders:["Endpoint ID","Injected Class","Command Frequency","Outbound Ports Accessed","Notes"],tableRows:[["E-221","LoggerService","Low","1","Stable log activity"],["E-314","CommandRelay","High","6","Unusual spike in command throughput"],["E-109","TelemetryHandler","Medium","2","Polling interval slightly elevated"],["E-403","HealthCheck","Low","0","No anomalous behavior"]],correctAnswerIndex:1,feedback:{correct:["`E-314` is linked directly to the injected class and shows a high command execution rate.","It’s accessing multiple outbound ports — a clear indicator of remote instruction propagation.","You isolate the endpoint and notify the containment team to sever all outbound connections.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You isolate the selected endpoint and notify the containment team.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ne:{"research-lab":{enabler:{title:"Trace Malicious Scheduled Script",prompt:"Which scheduled script is most likely injecting manipulated telemetry data into research systems?",tableHeaders:["Script ID","Schedule","Data Type","Anomaly Rate","Triggered By"],tableRows:[["sched_001","Every 5 min","Temperature","0.3%","SensorGroupA"],["sched_019","On reboot","Pressure","0.4%","SensorGroupC"],["sched_112","Every 10 min","Thermal + Pressure","8.9%","Unknown"],["sched_072","Manual","Telemetry Sync","0.0%","System Admin"]],correctAnswerIndex:2,feedback:{correct:["`sched_112` is triggered by an unknown source and has an anomaly rate over 8%.","The script runs independently and pushes altered sensor data at regular intervals.","You flag it for investigation and send the anomaly pattern to the Data Scientist.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the script for further investigation.","You should investigate some other rooms in case you can assist further."]}}},"server-room":{enabled:{title:"Patch Faulty Monitoring Script",prompt:"Which monitoring script must be patched to remove reliance on the leaky feature?",tableHeaders:["Script Name","Feature Used","Execution Time","Devices Monitored","Confidence Score"],tableRows:[["endpoint_health.bat","session_length","02:00","42","0.71"],["trace_login_flow.cmd","login_error_count","02:02","33","0.68"],["intrusion_check.bat","post_intrusion_flag","02:05","50","0.99"],["uptime_scan.cmd","access_freq","02:01","12","0.55"]],correctAnswerIndex:2,feedback:{correct:["`intrusion_check.bat` is using the flagged feature — the same one flagged as invalid by the Data Scientist.","Its near-perfect confidence score is misleading, as it depends on a post-event feature.","You patch the script to use valid real-time signals and redeploy to all affected devices.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You patch the selected script and redeploy.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},se:{"command-centre":{enabler:{title:"Trace Malicious Subclass Injection",prompt:"Which subclass most likely introduces AI-modified behavior and should be flagged?",tableHeaders:["Class Name","Base Class","Overrides Method?","Instantiated By","Behavior Notes"],tableRows:[["TelemetryHandler","DeviceService","Yes","CoreSystem","Standard data polling"],["CommandRelay","DeviceService","Yes","Unknown","Injects dynamic runtime instructions"],["HealthCheck","SystemMonitor","No","CoreSystem","Runs at fixed intervals"],["LoggerService","DeviceService","No","DevTools","Logs standard operations"]],correctAnswerIndex:1,feedback:{correct:["The `CommandRelay` class overrides `DeviceService` but is instantiated by an unknown source — highly suspicious.","Its dynamic instruction injection is a major red flag for AI tampering.","You flag this subclass for containment and notify the Cyber Security Analyst for downstream impact analysis.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag this subclass for review and containment.","You should investigate some other rooms in case you can assist further."]}}},"research-lab":{enabled:{title:"Identify Compromised Class",prompt:"Which class has most likely been modified by the AI and should be deprecated immediately?",tableHeaders:["Class Name","Origin IP","Overrides Base?","Active Instances","Notes"],tableRows:[["TelemetryBase","10.1.2.17","Yes","3","Used by legacy sensors"],["JobRunnerAI","10.1.2.56","Yes","84","Recompiled last 2 hours ago"],["LoggerHelper","127.0.0.1","No","12","No recent changes"],["AuthManager","10.1.2.78","Yes","6","Deprecated in latest build"]],correctAnswerIndex:1,feedback:{correct:["The `JobRunnerAI` class originated from the compromised machine and was recompiled recently.","It overrides base methods and is being instantiated far more than expected — classic signs of injection.","You flag it for immediate deprecation and isolate it from the build process.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flag the class for review and quarantine.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ds:{"server-room":{enabler:{title:"Flag Leaky Feature",prompt:"Which engineered feature is likely causing data leakage in the intrusion detection model?",tableHeaders:["Feature Name","Derived From","Correlation to Intrusion","Generated At","Notes"],tableRows:[["session_length","Login timestamp","0.15","Start of session","Standard behavioral metric"],["login_error_count","Syslog messages","0.23","During session","Stable, moderately predictive"],["post_intrusion_flag","Audit logs","0.97","After incident","High correlation but occurs post-event"],["access_freq","Access logs","0.29","Start of session","Stable signal"]],correctAnswerIndex:2,feedback:{correct:["`post_intrusion_flag` is generated after the incident occurs — that’s textbook data leakage.","It’s highly predictive, but only because it includes post-event knowledge.","You flag this feature and send a report to the Network Engineer so they can patch the monitoring script that depends on this feature.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the feature for review and notify the Network Engineer.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Isolate Poisoned Feature",prompt:"Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?",tableHeaders:["Feature","Source","Variance Spike","Missing Rate","Last Affected"],tableRows:[["pressure_avg","SensorGroupC","0.8%","0.2%","Yesterday"],["temp_rate","SensorGroupA","1.1%","1.3%","3 Days Ago"],["pressure_rate","Unknown","13.4%","0.1%","Last Hour"],["thermal_flux","SensorGroupB","2.5%","0.0%","Today"]],correctAnswerIndex:2,feedback:{correct:["`pressure_rate` is sourced from an unknown system — the same signature behind the corrupted script sent over.","It shows a massive spike in variance and was last updated within the last hour.","You exclude it from your next model iteration and begin auditing upstream transformations.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You exclude the feature and log it for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}}},3:{ca:{"server-room":{enabler:{title:"Detect AI-Driven Access Pattern",prompt:`Review the excerpt from the \`/var/log/auth.log\` below. Which service account is most likely being exploited by the AI to compromise data security?
<pre><code class="language-bash">Jul 14 12:03:21 node-17 login[2321]: user=svc_build success
Jul 14 12:03:21 node-17 login[2322]: user=svc_build success
Jul 14 12:03:21 node-17 login[2323]: user=svc_build success
Jul 14 12:03:22 node-17 login[2324]: user=svc_deploy failed
Jul 14 12:03:22 node-17 login[2325]: user=svc_deploy success
Jul 14 12:04:10 node-17 login[2326]: user=svc_metrics success
Jul 14 12:04:22 node-17 login[2327]: user=svc_backup success</code></pre>`,tableHeaders:["Account"],tableRows:[["svc_deploy"],["svc_metrics"],["svc_backup"],["svc_build"]],correctAnswerIndex:3,feedback:{correct:["`svc_build` logs in three times within a single second — that’s a non-human pattern.","Its perfect timing and lack of variation suggest automation — likely AI-controlled.","You flag the account for credential revocation and send the pattern to the Data Scientist for behavior modeling.","This is a breach of integrity and confidentiality — core to the CIA Triad.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the account for investigation.","You should investigate some other rooms in case you can assist further."]}}},"command-centre":{enabled:{title:"Patch Exposed Service",prompt:`You’ve been handed logs confirming the AI used TCP port 8080 to exfiltrate sensitive data. Review the service configuration below — which patch action would best prevent this data breach?
<pre><code class="language-bash"># /etc/service_config/app-layer.conf
service_name=log_api
port=8080
auth_required=no
rate_limit=none
allowed_ips=0.0.0.0/0</code></pre>`,tableHeaders:["Patch Action"],tableRows:[["Change port to 443"],["Enable auth_required"],["Apply rate limiting"],["Restrict allowed_ips to 192.168.0.0/16"]],correctAnswerIndex:3,feedback:{correct:["Restricting access to trusted IPs (192.168.0.0/16) stops the AI from hitting the exposed endpoint.","The original config allowed anyone from anywhere — no auth, no limit — perfect for exploitation.","You update the config and commit changes to the container deployment.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You apply the selected patch and flag the service for further monitoring.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ne:{"command-centre":{enabler:{title:"Trace Firewall Breach Path",prompt:`You’ve been asked to review recent firewall logs to identify which configuration allowed the AI to exfiltrate sensitive logs.
<pre><code class="language-bash">[ALERT] Jul 15 04:12:32 ACCEPT tcp -- 10.0.0.23:445 -> 172.16.5.10:8080 [flags ACK]
[ALERT] Jul 15 04:12:33 DROP tcp -- 10.0.0.23:445 -> 172.16.5.10:443 [flags SYN]
[ALERT] Jul 15 04:12:34 ACCEPT udp -- 10.0.0.23:53 -> 172.16.5.1:53 [DNS request]
[ALERT] Jul 15 04:12:35 ACCEPT tcp -- 10.0.0.23:445 -> 172.16.5.10:8080 [flags PSH,ACK]  → 1.4 MB transferred</code></pre>`,tableHeaders:["Breach Vector"],tableRows:[["TCP port 443 (HTTPS)"],["UDP port 53 (DNS)"],["TCP port 8080 (App Layer)"],["TCP port 445 (SMB)"]],correctAnswerIndex:2,feedback:{correct:["Port 8080 (App Layer) was repeatedly accepted, and a 1.4 MB payload was transmitted — likely the log dump.","That port is normally used by web APIs and should’ve been restricted for internal-only traffic.","You flag this as the breach path and forward the trace to the Cybersecurity Analyst.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the vector for review and internal audit.","You should investigate some other rooms in case you can assist further."]}}},"server-room":{enabled:{title:"Block Exploit at Firewall Level",prompt:`You’ve received a patch note about an invalid \`user_id\` being injected into the \`security_flags\` table.
Review the current firewall rule candidates below. Which one is best suited to block outbound transmissions resulting from this malformed data injection?
<pre><code class="language-bash">Rule 1: DROP tcp -- any -> db_server port 5432 flags RST
Rule 2: REJECT tcp -- any -> analytics_server port 8080 if payload contains 'user_id=9999'
Rule 3: ACCEPT tcp -- any -> db_server port 5432 established
Rule 4: DROP udp -- any -> analytics_server port 8080</code></pre>`,tableHeaders:["Rule #"],tableRows:[["1"],["2"],["3"],["4"]],correctAnswerIndex:1,feedback:{correct:["Rule 2 explicitly blocks any payloads containing the known exploit pattern (`user_id=9999`) targeting the analytics pipeline.","That’s exactly what’s needed to catch the malformed records flagged by the Software Engineer.","You apply the rule and initiate a downstream traffic monitor.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You apply the selected rule and schedule a monitor.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},se:{"research-lab":{enabler:{title:"Trace Foreign Key Exploit",prompt:`Review the table definition and recent anomaly log below. Which foreign key relationship is most likely being exploited by the AI to bypass classification filters?
<pre><code class="language-sql">-- security_flags table
CREATE TABLE security_flags (
    id INT PRIMARY KEY,
    user_id INT,
    flag_code VARCHAR(10),
    timestamp TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- anomaly log
[ALERT] Row inserted with user_id = 9999
[ERROR] No matching user found
[INFO] Flag still processed by downstream system</code></pre>`,tableHeaders:["Field"],tableRows:[["id"],["user_id"],["flag_code"],["timestamp"]],correctAnswerIndex:1,feedback:{correct:["`user_id` is the foreign key in question — the AI is injecting IDs that don’t exist in the users table.","Despite the relational mismatch, the downstream pipeline still accepts the record.","You flag this FK logic gap and forward a patch request to the Network Engineer for downstream validation hardening.","You should investigate some other rooms in case you can assist further."],incorrect:["You flag the selected field for review and forward the report.","You should investigate some other rooms in case you can assist further."]}}},"developer-hub":{enabled:{title:"Patch AI Classification Filter",prompt:`The AI has modified internal classification logic to allow malicious users to pass as safe. Review the table schemas below. Which database issue is allowing compromised users to bypass the AI’s filters?
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
+-------------+-----------+----------+</code></pre>`,tableHeaders:["Issue"],tableRows:[["Missing NOT NULL on label column"],["Unindexed foreign key on user_id"],["Mismatched type in flag_type column"],["Invalid reference to non-existent users.id"]],correctAnswerIndex:3,feedback:{correct:["`user_id` refers to `users.id`, but `users.id` doesn’t exist — the foreign key is invalid.","The AI used this broken reference to inject orphaned flags that bypass user-level filtering.","You patch the schema and alert the Network Engineer to monitor queries against orphaned IDs.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You flag the schema issue for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}},ds:{"developer-hub":{enabler:{title:"Diagnose Faulty Model Logic",prompt:`Review the AI's simplified decision function below. One of these conditionals is likely responsible for a spike in false positives. Which one is the issue?
<pre><code class="language-python">def predict(input):
    if input["login_attempts"] &gt; 3:
        return "malicious"
    elif input["cpu_usage"] &gt; 80:
        return "malicious"
    elif input["antivirus_alerts"] > 0:
        return "safe"
    else:
        return "safe"</code></pre>`,tableHeaders:["Line #"],tableRows:[["1"],["2"],["3"],["4"]],correctAnswerIndex:2,feedback:{correct:["Line 3 misuses the presence of antivirus alerts, it's logically inverted.","It causes compromised users with antivirus warnings to be flagged as safe.","You isolate the logic flaw and send it to the Software Engineer for patching.","You should investigate some other rooms in case you can assist further."],incorrect:["You highlight the logic for review.","You should investigate some other rooms in case you can assist further."]}}},"research-lab":{enabled:{title:"Identify Label-Poisoned Sample",prompt:`Review the training log excerpt below. One of these records was most likely injected by the compromised account and labeled incorrectly to poison the model.
<pre><code class="language-python">training_data = [
    {"user": "svc_backup", "login_time": "12:04:22", "failures": 0, "label": "safe"},
    {"user": "svc_metrics", "login_time": "12:04:10", "failures": 0, "label": "safe"},
    {"user": "svc_deploy", "login_time": "12:03:22", "failures": 2, "label": "safe"},
    {"user": "svc_build", "login_time": "12:03:21", "failures": 0, "label": "safe"}
]</code></pre>`,tableHeaders:["Index"],tableRows:[["0"],["1"],["2"],["3"]],correctAnswerIndex:2,feedback:{correct:["Index 2 is marked 'safe', but it is clearly showing that it's encountered some failures.","This must be the injected user account that bypassed the detection logic, and is trying to teach the model that failures are okay.","You remove the sample and trigger an audit on the pipeline integrity.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],incorrect:["You remove the selected sample for review.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."]}}}}}},Ip={1:{ca:"ne",ne:"se",se:"ds",ds:"ca"},2:{ca:"se",ne:"ds",se:"ca",ds:"ne"},3:{ca:"ds",ne:"ca",se:"ne",ds:"se"}},Ii={1:{ca:{"server-room":{enabler:["You rush into the Server Room as alarms blare around you.","The Intrusion Detection System (IDS) urgently flashes red. The facility's experimental AI has gone rogue and infiltrated the network.","It's disguising its movements among normal system traffic.","Your task is clear: identify which IP address the AI is currently using to initiate attacks, so it can be isolated.","What should you try first?"],"enabler-complete":["You’ve already identified the rogue IP and sent it to the Network Engineer for urgent review.","The IDS has quieted — no further intrusions have been detected from that address.","You should investigate some other rooms in case you can assist further."]},"research-lab":{enabled:["The Data Scientist flagged a specific user for unusual activity.","Your job: dig into the login logs and determine if this user’s account has been hijacked.","If the behavior checks out, you can clear it.","If not — you need to flag it for immediate lockdown before the AI spreads deeper."],"enabled-complete":["You’ve already reviewed the login logs and flagged the suspicious user account.","The abnormal access pattern matched a classic account compromise — it’s now under lockdown.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You access the login logs and begin scanning recent entries for anomalies.","But without a flagged user ID, the logs feel like white noise, there's nothing that clearly stands out.","You realise the investigation can't proceed until the Data Scientist finishes their analysis and identifies a target."]}},ne:{"command-centre":{enabler:["You're inside the Command Centre now.","It’s eerily quiet. Most systems are powered down, but the access logs are alive with chatter.","Your job is to figure out how the AI infiltrated the network. By comparing interface usage patterns and anomalies, you might just find the path it slipped through."],"enabler-complete":["You double-check the logs, but your work here is done.","You already traced the AI’s point of entry through the network, the interface has been flagged.","That intel’s now with the Software Engineer. Hopefully they can figure out what the AI's doing with it.","You should investigate some other rooms in case you can assist further."]},"developer-hub":{enabled:["The Cybersecurity Analyst has flagged a suspicious IP.","Your task: determine which internal systems this IP has touched.","Accurate mapping is critical, as a false positive or missed connection could let the AI move unseen."],"enabled-complete":["You've already traced the suspicious IP across the internal network.","Every system it touched has been flagged and logged.","There’s nothing more to pull from this trace—your part in the assessment is done.","Hopefully that map gives the others a fighting chance.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You start parsing the traffic logs, looking for suspicious cross-network activity.","A few odd patterns emerge, but none have a confirmed source — it's all guesswork without a flagged IP.","You'll need to wait for the Cybersecurity Analyst to confirm the threat origin before you can act."]}},se:{"research-lab":{enabler:["Something doesn’t add up.","A recent commit went into production just hours before the AI went rogue.","Your task is to review the commit logs and identify which change may have enabled the breach."],"enabler-complete":["You already traced the malicious commit and flagged it for the Data Scientist to investigate further.","Any additional changes here would risk contaminating the forensic trail.","You should investigate some other rooms in case you can assist further."]},"server-room":{enabled:["The Network Engineer has traced unusual activity to a specific node they have flagged for you.","You’ve got access to the runtime diagnostic tools in the Server Room, where the AI seems to be probing from.","Several active windows services are bound to this interface, you need to identify which process on this interface is likely compromised."],"enabled-complete":["You’ve already reviewed the running processes and flagged the one likely compromised by the AI.","Security has been notified and the process is under containment review.","You’ve done all you can here, check in with the rest of your team.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You bring up the diagnostic console and begin reviewing active processes.","But there’s no signal yet, the suspicious interface hasn’t been confirmed.","You back out for now, waiting on the Network Engineer to complete their trace."]}},ds:{"developer-hub":{enabler:["System logs show every user session across the last 24 hours.","Your task: analyse user activity patterns and identify which user deviates significantly from the norm.","This could be a potential sign of account takeover or injection by the AI."],"enabler-complete":["You’ve already identified the user account that has been compromised.","Hopefully that brings the team one step closer to catching up to the AI.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You've been handed a dataset tied to a recent commit. The Software Engineer believes it might be compromised.","Before it can be used in any analysis, it needs to be cleaned and validated.","Your job: apply basic cleaning checks to ensure the data is safe inside the system."],"enabled-complete":["You’ve already cleaned and validated the dataset tied to the commit.","It’s now safe to enter the pipeline without risking further model corruption now.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You prepare your validation tools and load up the staging area.","But the dataset in question hasn’t arrived yet, there's nothing to analyse or clean.","You’ll need to wait until the Software Engineer flags the suspicious commit."]}}},2:{ca:{"developer-hub":{enabler:["You enter the Developer Hub, now locked down under containment protocols.","Build systems are under siege — the AI is launching internal attacks and sabotaging developer tools.","Firewall logs show erratic behavior from multiple endpoints. One of the service accounts has been hijacked.","You need to trace the breach and flag the compromised machine before the AI spreads further."],"enabler-complete":["You already identified the compromised endpoint and escalated the breach.","The Software Engineer is working to harden systems and prevent further code manipulation.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You return to the Command Centre with alerts stacking up for rogue endpoint behavior.","The Software Engineer just flagged a malicious subclass that you should investigate.","Your job is to trace which endpoint it’s controlling and shut it down before it spreads further."],"enabled-complete":["You already isolated the endpoint tied to the AI-injected subclass.","Outbound traffic from the compromised node has been cut off.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You open the endpoint diagnostics dashboard.","But there’s no known injected class yet, so you don’t know what to filter for.","You back out for now, waiting on the Software Engineer to complete their class trace."]}},ne:{"research-lab":{enabler:["You enter the Research Lab. Telemetry data is out of range across multiple panels.","Something’s tampering with sensor output, which could mean the AI is skewing research data through automation.","You work to pinpoint the source."],"enabler-complete":["You already traced the high-anomaly script and flagged it for removal.","The Data Scientist is analysing the faulty values to determine the scope of corruption.","You should investigate some other rooms in case you can assist further."]},"server-room":{enabled:["You enter the Server Room — several monitoring scripts are still firing false positives or delayed alerts.","The Data Scientist just flagged an engineered feature as invalid — it’s leaking post-event data into real-time systems.","You need to patch the script that’s using this feature before it spreads faulty alerts across the network."],"enabled-complete":["You already patched the script that relied on the invalid feature.","Real-time endpoint monitoring has been restored to safe conditions.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You review the list of active batch monitoring scripts.","But without knowing which feature is compromised, there’s no way to prioritise the fix.","You back out for now, waiting on the Data Scientist to complete their feature audit."]}},se:{"command-centre":{enabler:["You enter to the Command Centre, terminals pulse with requests from internal systems.","The AI is suspected to be injecting new logic into existing service hierarchies.","You begin reviewing class inheritance chains to identify where malicious code might be introduced."],"enabler-complete":["You already flagged the suspicious subclass and submitted its details for runtime containment.","The Network Engineer is following up to trace execution patterns.","You should investigate some other rooms in case you can assist further."]},"research-lab":{enabled:["You step into the Research Lab again, the IDEs are auto-compiling, but you didn't trigger any of it.","An endpoint just flagged by the Cybersecurity Analyst appears to be injecting malicious code into your build pipeline.","You need to review the active classes and isolate any that have been tampered with before deployment."],"enabled-complete":["You’ve already isolated the compromised class and stopped it from pushing code to production.","Build processes are stabilizing, but there's still work to be done elsewhere.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You bring up the class monitor and scan for suspicious activity in the codebase.","But without the flagged endpoint from the Cybersecurity Analyst, there’s nothing to act on yet.","You back out for now and wait for the breach report to come through."]}},ds:{"server-room":{enabler:["You enter the Server Room. Model dashboards are lighting up with inconsistent predictions.","The intrusion detection model is failing to catch obvious threats. Something’s off with the inputs.","You suspect one of the engineered features is leaking post-event information into the model.","Time to find it before the Cybersecurity team gets blindsided again."],"enabler-complete":["You already flagged the leaky feature that was compromising the intrusion detection model.","The Cybersecurity Analyst is now reviewing detection rules to patch the gap.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You return to the Command Centre and open your modeling notebook, but something’s off.","The feature distributions are spiking, and recent logs show corruption traced to the script the Network Engineer flagged.","One of your engineered features has been poisoned.","You need to isolate and remove it before the next training run goes live."],"enabled-complete":["You already excluded the anomalous feature linked to the corrupted batch script.","Model variance has stabilized, and upstream flags are in place.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You load the latest feature set into your modeling pipeline.","But without a confirmed automation source, you can’t isolate the anomaly.","You back out for now, waiting on the Network Engineer to complete their trace."]}}},3:{ca:{"server-room":{enabler:["You enter the Server Room — security dashboards are reporting anomalies in access logs.","A service account appears to be under AI control, bypassing traditional detection with near-perfect logins.","It’s compromising endpoint integrity and likely exfiltrating sensitive logs or credentials.","Time to identify the account before the Data Scientist gets fed garbage telemetry."],"enabler-complete":["You already flagged the AI-controlled service account and revoked its credentials.","The Data Scientist is using the behavior pattern to refine real-time monitoring.","You should investigate some other rooms in case you can assist further."]},"command-centre":{enabled:["You step into the Command Centre and pull the active config for `log_api` which is the service running on port 8080.","The AI used this exact vector to pull sensitive logs without triggering a firewall block.","There are multiple ways to patch this — but only one prevents this specific data exposure path."],"enabled-complete":["You already patched the exposed `log_api` service and restricted its network access.","No further breach attempts have occurred on that vector.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You begin auditing exposed services for suspicious behavior.","But without a confirmed breach vector, you can't determine which config to patch.","You back out for now, waiting on the Network Engineer to complete their analysis."]}},ne:{"command-centre":{enabler:["You return to the Command Centre and access firewall logs tied to a suspicious early-morning alert.","One of the open ports shows a large outbound data transfer — far outside protocol norms.","The AI likely used this path to bypass containment layers.","You need to identify the breach vector and notify the Cybersecurity Analyst to perform mitigation."],"enabler-complete":["You’ve already flagged the App Layer (port 8080) as the AI’s exfiltration route.","The Cybersecurity Analyst has begun patching and containment protocols for the service.","You should investigate some other rooms in case you can assist further."]},"server-room":{enabled:["You enter the Command Centre and begin reviewing the firewall’s outbound rule set.","Alerts suggest malformed user records are triggering unexpected reports in the analytics server.","The Software Engineer has identified that the AI is injecting invalid `user_id`s into `security_flags`.","Your goal is to block any resulting transmissions from making it past the firewall."],"enabled-complete":["You’ve already deployed the firewall rule blocking outbound traffic containing invalid user IDs.","Data exfiltration attempts through this exploit vector have dropped to zero.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You access the command terminal for managing firewall rules.","But there’s no specific exploit signature provided yet — you don’t know what pattern to filter.","You back out for now, waiting on the Software Engineer to complete their schema trace."]}},se:{"research-lab":{enabler:["You arrive in the Research Lab and access the classification module’s database logs.","A warning catches your eye — invalid `user_id`s are being inserted but aren’t triggering schema rejections.","The AI may be exploiting weak foreign key constraints to poison downstream systems.","You’ll need to trace the exploit and forward a correction to the Network Engineer."],"enabler-complete":["You already identified the AI’s misuse of the foreign key constraint and forwarded the vulnerability.","The Network Engineer has begun locking down schema validation rules.","You should investigate some other rooms in case you can assist further."]},"developer-hub":{enabled:["You enter the Developer Hub, where AI-modified logic is interfering with database-based access filters.","The Data Scientist sent over the faulty decision logic — it’s bypassing malicious inputs.","You suspect the flaw lies in a misconfigured table schema that’s letting the AI exploit weak relationships.","It’s your job to isolate and patch the structural issue before more bad data leaks through."],"enabled-complete":["You already traced the schema flaw that was enabling AI-bypassed users to slip through.","The foreign key has been fixed and downstream queries are now filtered properly.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You log into the internal schema management dashboard.","But the corrupted model logic hasn’t yet been isolated — you don’t know what to patch.","You back out for now, waiting on the Data Scientist to complete their trace."]}},ds:{"developer-hub":{enabler:["You enter the Developer Hub and pull the AI’s decision tree from the most recent build.","Your anomaly detection models are now misfiring — triggering no alerts on compromised data.","One of the AI's logic conditions has likely been inverted or tampered with.","Your job is to find the faulty rule and forward it to the Software Engineer for code correction."],"enabler-complete":["You already identified the faulty model logic and passed it to the Software Engineer.","The rule was patched, and false positives have been reduced significantly.","You should investigate some other rooms in case you can assist further."]},"research-lab":{enabled:["You return to the Research Lab — the real-time training stream is acting strangely.","Your pipeline is picking up contradictions: inputs flagged as 'malicious' show no actual signs of threat.","The Cybersecurity Analyst just flagged the an account as the likely AI access vector.","You suspect one of your recent training samples has been poisoned — and it’s biasing your entire model."],"enabled-complete":["You already removed the poisoned sample tied to the compromised account.","Training set variance has dropped and retraining has resumed.","You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."],"enabled-not-available":["You load the training logs from the real-time stream.","But there’s no confirmed compromised account yet so you can’t filter effectively.","You back out for now, waiting on the Cybersecurity Analyst to complete their trace."]}}},"WRONG-ROOM":["You can't see anything useful for you to do in this room at the moment."]},Ap={apiKey:"AIzaSyAzlzCHei-FyaNyWRZ7Or-iLTdQRGjLWUY",authDomain:"athena2-f5bdf.firebaseapp.com",projectId:"athena2-f5bdf",storageBucket:"athena2-f5bdf.firebasestorage.app",messagingSenderId:"571762315023",appId:"1:571762315023:web:09aea3b0fdf575ab79387a"},bp=ll(Ap),Te=op(bp);async function Dp(n){return(await jc(Rn(Te,"rooms"),{name:n,created:Date.now(),status:"waiting",currentDay:0,players:{}})).id}async function Np(n,e,t){return(await jc(Rn(Te,"users"),{userName:n,created:Date.now(),roomName:e,roomId:t})).id}async function xp(n,e,t,r){const i=De(Te,"rooms",t);await ze(i,{[`players.${n}`]:{name:e,role:null,readyStatus:0,isHost:r,enablerComplete:!1,enabledComplete:!1,enabledValue:null}})}async function Op(n,e,t,r){const i=De(Te,"rooms",r);await ze(i,{[`players.${n}`]:Tp()})}async function Mp(n=null,e=null,t=null){if(e){const r=await qr(De(Te,"rooms",e));if(!r.exists())return null;const i=r.data();return{roomName:i.name,roomPlayers:i.players,currentDay:i.currentDay,dayScores:i.dayScores}}return n?(await Za(Gi(Rn(Te,"rooms"),Wi("status","==",n),Ki("created","desc")))).docs.map(i=>({roomId:i.id,roomName:i.data().name,roomPlayers:i.data().players})):t?(await Za(Gi(Rn(Te,"rooms"),Wi("day","==",t),Ki("created","desc")))).docs.map(i=>({roomId:i.id,roomName:i.data().name,roomPlayers:i.data().players})):[]}async function Qi(n,e,t,r){const i=document.getElementById("loadingContainer");i&&(i.style.display="flex");try{if(!n||!e||!t)throw new Error(`updatePlayer failed: userId (${n}), roomId (${e}), or key (${t}) is null or undefined.`);const o=De(Te,"rooms",e);(await qr(o)).exists()?await ze(o,{[`players.${n}.${t}`]:r}):console.warn(`updatePlayer warning: Room ${e} does not exist.`)}catch(o){console.error("updatePlayer error:",o)}finally{i&&(i.style.display="none")}}async function Lp(n,e=!1){const t=De(Te,"rooms",n);e?await ze(t,{currentDay:-1}):await ze(t,{currentDay:$c(1)})}async function Rp(n,e=!1){const t=De(Te,"rooms",n);e?await ze(t,{enabledCompletions:0}):await ze(t,{enabledCompletions:$c(1)})}async function Fp(n,e){const t=De(Te,"rooms",n),r=await qr(t);if(r.exists()){const o=[...r.data().dayScores||[],e];await ze(t,{dayScores:o})}else console.error("Room does not exist")}async function Up(n){const e=De(Te,"rooms",n);await vp(e)}function Bp(n,e){const t=De(Te,"rooms",n);return qc(t,r=>{if(r.exists()){const i=r.data();e({roomId:n,roomName:i.name,roomPlayers:i.players,currentDay:i.currentDay,enabledCompletions:i.enabledCompletions})}else e(null)})}function Yp(n){const e=Rn(Te,"rooms"),t=Gi(e,Wi("status","==","waiting"),Ki("created","desc"));return qc(t,r=>{const i=r.docs.map(o=>({roomId:o.id,roomName:o.data().name,roomPlayers:o.data().players}));n(i)})}function Cp(n,e,t,r,i,o){var c,h;const a=((h=(c=Ii==null?void 0:Ii[n])==null?void 0:c[e])==null?void 0:h[t])||null;return a===null?[!1,null]:(a==null?void 0:a.enabler)||!1?r?[!1,null]:[!0,"enabler"]:!i&&o?[!0,"enabled"]:[!1,null]}function Sp(n,e,t,r){const i=n.currentDay,o=localStorage.getItem("connectedUserId"),a=el[i][t][e],c=n.roomPlayers[o].enablerComplete,h=n.roomPlayers[o].enabledComplete,d=n.roomPlayers[o].enabledValue!=null;r.innerHTML="";const[m,_]=Cp(i,t,e,c,h,d);console.log(`Player has entered an actionable room: ${m}`),console.log(`Puzzle to be generated: ${_}`);for(const[w,R]of Object.entries(a))if(w!="CORRECT_ACTION"){const P=document.createElement("button");P.id=w.replace(/\s+/g,"").toLowerCase()+"Btn",P.className="std-button role-button",P.style.width="250px",P.textContent=w;let D=R;m||(D=el["NO-ACTION"]),P.onclick=async()=>{await typewriter.showSequence(D),w===a.CORRECT_ACTION?(console.log("Correct action clicked"),_!=null&&(r.innerHTML="",Pp(r,i,e,t,_,n))):console.log("Incorrect action clicked")},r.appendChild(P)}}function jp(n,e){e.innerHTML="",n&&n.roomPlayers&&Object.entries(n.roomPlayers).forEach(([t,r])=>{const i=document.createElement("li"),a={ds:"Data Scientist",se:"Software Engineer",ne:"Network Engineer",ca:"Cybersecurity Analyst"}[r.role]||"Unassigned";i.textContent=`${r.name} - ${a}`,t===localStorage.getItem("connectedUserId")&&(i.classList.add("current-player"),i.style.fontWeight="bold",i.style.color="#4CAF50"),e.appendChild(i)})}async function Pp(n,e,t,r,i,o){var q,J,Re;const a=(Re=(J=(q=Ep[e])==null?void 0:q[r])==null?void 0:J[t])==null?void 0:Re[i];if(console.log(`PuzzleData ${a}`),!a){console.error("Puzzle data not found for:",{currentDay:e,roomName:t,currentRole:r,puzzleType:i});return}n.innerHTML="";const c=document.createElement("div");c.className="puzzle-container";const h=document.createElement("h2");h.className="puzzle-title",h.textContent=a.title,c.appendChild(h);const d=document.createElement("p");d.className="puzzle-description",d.innerHTML=a.prompt,c.appendChild(d);const m=document.createElement("div");m.className="puzzle-table-container";const _=document.createElement("table");_.className="puzzle-table";const w=document.createElement("thead"),R=document.createElement("tr");a.tableHeaders.forEach(X=>{const E=document.createElement("th");E.textContent=X,R.appendChild(E)}),w.appendChild(R),_.appendChild(w);const P=document.createElement("tbody");a.tableRows.forEach((X,E)=>{const p=document.createElement("tr");p.className="puzzle-row",p.dataset.rowIndex=E,X.forEach(y=>{const v=document.createElement("td");v.textContent=y,p.appendChild(v)}),p.addEventListener("click",()=>{document.querySelectorAll(".puzzle-row.selected").forEach(y=>{y.classList.remove("selected")}),p.classList.add("selected")}),P.appendChild(p)}),_.appendChild(P),m.appendChild(_),c.appendChild(m);const D=document.createElement("p");D.className="puzzle-instruction",D.textContent="Possible hints here",D.style.display="none",c.appendChild(D);const V=document.createElement("div");V.className="puzzle-button-container";const B=document.createElement("button");B.className="std-button puzzle-hint",B.textContent="Show Hint",B.style.marginRight="10px";const F=document.createElement("button");F.className="std-button puzzle-submit",F.textContent="Submit Answer",B.addEventListener("click",()=>{D.style.display="block",B.style.display="none"}),F.addEventListener("click",async()=>{const X=document.querySelector(".puzzle-row.selected");if(!X){const T=document.createElement("div");T.className="puzzle-error",T.textContent="Please select a row first!",c.appendChild(T),setTimeout(()=>{T.parentNode&&T.remove()},3e3);return}const E=parseInt(X.dataset.rowIndex),p=E===a.correctAnswerIndex;F.disabled=!0,F.textContent="Processing...";const y=p?a.feedback.correct:a.feedback.incorrect,v=i==="enabler"?"enablerComplete":"enabledComplete";await typewriter.showSequence(y,{onContinue:async()=>{const T=localStorage.getItem("connectedUserId"),A=localStorage.getItem("connectedRoomId");Qi(T,A,v,!0),n.innerHTML="",Sp(o,t,r,n);const g={day:e,type:i,room:t,role:r,correct:p,selectedIndex:E,timestamp:new Date().toISOString()};if(Vp(T,A,g),i==="enabler"){console.log("In Enabler Puzzle");const Ce=Ip[e][r];console.log(`Role to enable: ${Ce}`);const $e=o.roomPlayers;console.log(`Room Players: ${$e}`);for(const[zr,He]of Object.entries($e))console.log(`Role: ${He.role}`),He.role===Ce&&(console.log("Found player to update, updating"),await Qi(zr,A,"enabledValue",E))}else Rp(A)}})}),V.appendChild(B),V.appendChild(F),c.appendChild(V),n.appendChild(c)}async function Vp(n,e,t){var o;const r=De(Te,"rooms",e),i=await qr(r);if(i.exists()){const h=[...(((o=i.data().players)==null?void 0:o[n])||{}).puzzleAnswers||[],t];await ze(r,{[`players.${n}.puzzleAnswers`]:h})}}async function qp(n){const e=localStorage.getItem("connectedUserId"),t=localStorage.getItem("connectedRoomId");document.getElementById("loadingContainer").style.display="flex",await Qi(e,t,"currentRoom",n),window.location.href=`${n.toLowerCase().replace(" ","-")}.html`}export{Np as a,xp as b,Dp as c,Bp as d,Up as e,Yp as f,jp as g,Ip as h,Fp as i,Rp as j,Sp as k,Mp as l,Ii as m,qp as n,Lp as p,Op as r,Qi as u};
