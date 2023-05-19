function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequired7c6=s),s.register("cTOKP",(function(n,i){t(n.exports,"fetchBooksForID",(function(){return o}));var r=s("arKRi");async function o(t){return await e(r).get(`https://books-backend.p.goit.global/books/${t}`)}})),s.register("arKRi",(function(e,t){var i=s("ihoyg").Buffer;e.exports,e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function l(e,t){return function(){return e.apply(t,arguments)}}var c,u=Object.prototype.toString,h=Object.getPrototypeOf,d=(c=Object.create(null),function(e){var t=u.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())}),f=function(e){return e=e.toLowerCase(),function(t){return d(t)===e}},p=function(t){return function(n){return e(n)===t}},m=Array.isArray,g=p("undefined"),y=f("ArrayBuffer"),v=p("string"),w=p("function"),b=p("number"),x=function(t){return null!==t&&"object"===e(t)},E=function(e){if("object"!==d(e))return!1;var t=h(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},k=f("Date"),T=f("File"),S=f("Blob"),I=f("FileList"),C=f("URLSearchParams");function N(t,n){var i,r,s=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).allOwnKeys,o=void 0!==s&&s;if(null!=t)if("object"!==e(t)&&(t=[t]),m(t))for(i=0,r=t.length;i<r;i++)n.call(null,t[i],i,t);else{var a,l=o?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;for(i=0;i<c;i++)a=l[i],n.call(null,t[a],a,t)}}function _(e,t){t=t.toLowerCase();for(var n,i=Object.keys(e),r=i.length;r-- >0;)if(t===(n=i[r]).toLowerCase())return n;return null}var A,L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n,R=function(e){return!g(e)&&e!==L},O=(A="undefined"!=typeof Uint8Array&&h(Uint8Array),function(e){return A&&e instanceof A}),D=f("HTMLFormElement"),P=function(e){var t=Object.prototype.hasOwnProperty;return function(e,n){return t.call(e,n)}}(),M=f("RegExp"),F=function(e,t){var n=Object.getOwnPropertyDescriptors(e),i={};N(n,(function(n,r){!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},U="abcdefghijklmnopqrstuvwxyz",B="0123456789",z={DIGIT:B,ALPHA:U,ALPHA_DIGIT:U+U.toUpperCase()+B},j=f("AsyncFunction"),V={isArray:m,isArrayBuffer:y,isBuffer:function(e){return null!==e&&!g(e)&&null!==e.constructor&&!g(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t;return e&&("function"==typeof FormData&&e instanceof FormData||w(e.append)&&("formdata"===(t=d(e))||"object"===t&&w(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&y(e.buffer)},isString:v,isNumber:b,isBoolean:function(e){return!0===e||!1===e},isObject:x,isPlainObject:E,isUndefined:g,isDate:k,isFile:T,isBlob:S,isRegExp:M,isFunction:w,isStream:function(e){return x(e)&&w(e.pipe)},isURLSearchParams:C,isTypedArray:O,isFileList:I,forEach:N,merge:function e(){for(var t=(R(this)&&this||{}).caseless,n={},i=function(i,r){var s=t&&_(n,r)||r;E(n[s])&&E(i)?n[s]=e(n[s],i):E(i)?n[s]=e({},i):m(i)?n[s]=i.slice():n[s]=i},r=0,s=arguments.length;r<s;r++)arguments[r]&&N(arguments[r],i);return n},extend:function(e,t,n){return N(t,(function(t,i){n&&w(t)?e[i]=l(t,n):e[i]=t}),{allOwnKeys:(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n,i){var r,s,o,a={};if(t=t||{},null==e)return t;do{for(s=(r=Object.getOwnPropertyNames(e)).length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&h(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:d,kindOfTest:f,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var i=e.indexOf(t,n);return-1!==i&&i===n},toArray:function(e){if(!e)return null;if(m(e))return e;var t=e.length;if(!b(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},forEachEntry:function(e,t){for(var n,i=(e&&e[Symbol.iterator]).call(e);(n=i.next())&&!n.done;){var r=n.value;t.call(e,r[0],r[1])}},matchAll:function(e,t){for(var n,i=[];null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:D,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:F,freezeMethods:function(e){F(e,(function(t,n){if(w(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;var i=e[n];w(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:function(e,t){var n={},i=function(e){e.forEach((function(e){n[e]=!0}))};return m(e)?i(e):i(String(e).split(t)),n},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:_,global:L,isContextDefined:R,ALPHABET:z,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z.ALPHA_DIGIT,n="",i=t.length;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&w(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=new Array(10);return function e(n,i){if(x(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;var r=m(n)?[]:{};return N(n,(function(t,n){var s=e(t,i+1);!g(s)&&(r[n]=s)})),t[i]=void 0,r}}return n}(e,0)},isAsyncFn:j,isThenable:function(e){return e&&(x(e)||w(e))&&w(e.then)&&w(e.catch)}};function W(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}V.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var q=W.prototype,$={};function H(e){return V.isPlainObject(e)||V.isArray(e)}function G(e){return V.endsWith(e,"[]")?e.slice(0,-2):e}function K(e,t,n){return e?e.concat(t).map((function(e,t){return e=G(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){$[e]={value:e}})),Object.defineProperties(W,$),Object.defineProperty(q,"isAxiosError",{value:!0}),W.from=function(e,t,n,i,r,s){var o=Object.create(q);return V.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),W.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var X=V.toFlatObject(V,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Q(t,n,r){if(!V.isObject(t))throw new TypeError("target must be an object");n=n||new FormData;var s=(r=V.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!V.isUndefined(t[e])}))).metaTokens,o=r.visitor||h,a=r.dots,l=r.indexes,c=(r.Blob||"undefined"!=typeof Blob&&Blob)&&V.isSpecCompliantForm(n);if(!V.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(V.isDate(e))return e.toISOString();if(!c&&V.isBlob(e))throw new W("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(e)||V.isTypedArray(e)?c&&"function"==typeof Blob?new Blob([e]):i.from(e):e}function h(t,i,r){var o=t;if(t&&!r&&"object"===e(t))if(V.endsWith(i,"{}"))i=s?i:i.slice(0,-2),t=JSON.stringify(t);else if(V.isArray(t)&&function(e){return V.isArray(e)&&!e.some(H)}(t)||(V.isFileList(t)||V.endsWith(i,"[]"))&&(o=V.toArray(t)))return i=G(i),o.forEach((function(e,t){!V.isUndefined(e)&&null!==e&&n.append(!0===l?K([i],t,a):null===l?i:i+"[]",u(e))})),!1;return!!H(t)||(n.append(K(r,i,a),u(t)),!1)}var d=[],f=Object.assign(X,{defaultVisitor:h,convertValue:u,isVisitable:H});if(!V.isObject(t))throw new TypeError("data must be an object");return function e(t,i){if(!V.isUndefined(t)){if(-1!==d.indexOf(t))throw Error("Circular reference detected in "+i.join("."));d.push(t),V.forEach(t,(function(t,r){!0===(!(V.isUndefined(t)||null===t)&&o.call(n,t,V.isString(r)?r.trim():r,i,f))&&e(t,i?i.concat(r):[r])})),d.pop()}}(t),n}function Y(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function J(e,t){this._pairs=[],e&&Q(e,this,t)}var Z=J.prototype;function ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function te(e,t,n){if(!t)return e;var i,r=n&&n.encode||ee,s=n&&n.serialize;if(i=s?s(t,n):V.isURLSearchParams(t)?t.toString():new J(t,n).toString(r)){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}Z.append=function(e,t){this._pairs.push([e,t])},Z.toString=function(e){var t=e?function(t){return e.call(this,t,Y)}:Y;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ne,ie=function(){function e(){t(this,e),this.handlers=[]}return s(e,[{key:"use",value:function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}(),re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},se={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:J,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:("undefined"==typeof navigator||"ReactNative"!==(ne=navigator.product)&&"NativeScript"!==ne&&"NS"!==ne)&&"undefined"!=typeof window&&"undefined"!=typeof document,isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function oe(e){function t(e,n,i,r){var s=e[r++],o=Number.isFinite(+s),a=r>=e.length;return s=!s&&V.isArray(i)?i.length:s,a?(V.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o):(i[s]&&V.isObject(i[s])||(i[s]=[]),t(e,n,i[s],r)&&V.isArray(i[s])&&(i[s]=function(e){var t,n,i={},r=Object.keys(e),s=r.length;for(t=0;t<s;t++)i[n=r[t]]=e[n];return i}(i[s])),!o)}if(V.isFormData(e)&&V.isFunction(e.entries)){var n={};return V.forEachEntry(e,(function(e,i){t(function(e){return V.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),i,n,0)})),n}return null}var ae={"Content-Type":void 0},le={transitional:re,adapter:["xhr","http"],transformRequest:[function(e,t){var n,i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=V.isObject(e);if(s&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return r&&r?JSON.stringify(oe(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Q(e,new se.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return se.isNode&&V.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((n=V.isFileList(e))||i.indexOf("multipart/form-data")>-1){var o=this.env&&this.env.FormData;return Q(n?{"files[]":e}:e,o&&new o,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),function(e,t,n){if(V.isString(e))try{return(t||JSON.parse)(e),V.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||le.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&V.isString(e)&&(n&&!this.responseType||i)){var r=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw W.from(e,W.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:se.classes.FormData,Blob:se.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};V.forEach(["delete","get","head"],(function(e){le.headers[e]={}})),V.forEach(["post","put","patch"],(function(e){le.headers[e]=V.merge(ae)}));var ce=le,ue=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),he=Symbol("internals");function de(e){return e&&String(e).trim().toLowerCase()}function fe(e){return!1===e||null==e?e:V.isArray(e)?e.map(fe):String(e)}function pe(e,t,n,i,r){return V.isFunction(i)?i.call(this,t,n):(r&&(t=n),V.isString(t)?V.isString(i)?-1!==t.indexOf(i):V.isRegExp(i)?i.test(t):void 0:void 0)}var me=function(e,n){function i(e){t(this,i),e&&this.set(e)}return s(i,[{key:"set",value:function(e,t,n){var i=this;function r(e,t,n){var r=de(t);if(!r)throw new Error("header name must be a non-empty string");var s=V.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=fe(e))}var s,o,a,l,c,u=function(e,t){return V.forEach(e,(function(e,n){return r(e,n,t)}))};return V.isPlainObject(e)||e instanceof this.constructor?u(e,t):V.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?u((c={},(s=e)&&s.split("\n").forEach((function(e){l=e.indexOf(":"),o=e.substring(0,l).trim().toLowerCase(),a=e.substring(l+1).trim(),!o||c[o]&&ue[o]||("set-cookie"===o?c[o]?c[o].push(a):c[o]=[a]:c[o]=c[o]?c[o]+", "+a:a)})),c),t):null!=e&&r(t,e,n),this}},{key:"get",value:function(e,t){if(e=de(e)){var n=V.findKey(this,e);if(n){var i=this[n];if(!t)return i;if(!0===t)return function(e){for(var t,n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=i.exec(e);)n[t[1]]=t[2];return n}(i);if(V.isFunction(t))return t.call(this,i,n);if(V.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=de(e)){var n=V.findKey(this,e);return!(!n||void 0===this[n]||t&&!pe(0,this[n],n,t))}return!1}},{key:"delete",value:function(e,t){var n=this,i=!1;function r(e){if(e=de(e)){var r=V.findKey(n,e);!r||t&&!pe(0,n[r],r,t)||(delete n[r],i=!0)}}return V.isArray(e)?e.forEach(r):r(e),i}},{key:"clear",value:function(e){for(var t=Object.keys(this),n=t.length,i=!1;n--;){var r=t[n];e&&!pe(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}},{key:"normalize",value:function(e){var t=this,n={};return V.forEach(this,(function(i,r){var s=V.findKey(n,r);if(s)return t[s]=fe(i),void delete t[r];var o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))}(r):String(r).trim();o!==r&&delete t[r],t[o]=fe(i),n[o]=!0})),this}},{key:"concat",value:function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=this.constructor).concat.apply(e,[this].concat(n))}},{key:"toJSON",value:function(e){var t=Object.create(null);return V.forEach(this,(function(n,i){null!=n&&!1!==n&&(t[i]=e&&V.isArray(n)?n.join(", "):n)})),t}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=o(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=new this(e),n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return i.forEach((function(e){return t.set(e)})),t}},{key:"accessor",value:function(e){var t=(this[he]=this[he]={accessors:{}}).accessors,n=this.prototype;function i(e){var i=de(e);t[i]||(function(e,t){var n=V.toCamelCase(" "+t);["get","set","has"].forEach((function(i){Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return V.isArray(e)?e.forEach(i):i(e),this}}]),i}();me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.freezeMethods(me.prototype),V.freezeMethods(me);var ge=me;function ye(e,t){var n=this||ce,i=t||n,r=ge.from(i.headers),s=i.data;return V.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function ve(e){return!(!e||!e.__CANCEL__)}function we(e,t,n){W.call(this,null==e?"canceled":e,W.ERR_CANCELED,t,n),this.name="CanceledError"}V.inherits(we,W,{__CANCEL__:!0});var be=se.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){var o=[];o.push(e+"="+encodeURIComponent(t)),V.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),V.isString(i)&&o.push("path="+i),V.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Ee=se.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var i=e;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=V.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function ke(e,t){var n=0,i=function(e,t){e=e||10;var n,i=new Array(e),r=new Array(e),s=0,o=0;return t=void 0!==t?t:1e3,function(a){var l=Date.now(),c=r[o];n||(n=l),i[s]=a,r[s]=l;for(var u=o,h=0;u!==s;)h+=i[u++],u%=e;if((s=(s+1)%e)===o&&(o=(o+1)%e),!(l-n<t)){var d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}}(50,250);return function(r){var s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;var c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var Te={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){var i,r=e.data,s=ge.from(e.headers).normalize(),o=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}V.isFormData(r)&&(se.isStandardBrowserEnv||se.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));var l=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(c+":"+u))}var h=xe(e.baseURL,e.url);function d(){if(l){var i=ge.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}}if(l.open(e.method.toUpperCase(),te(h,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new W("Request aborted",W.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new W("Network Error",W.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",i=e.transitional||re;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new W(t,i.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,l)),l=null},se.isStandardBrowserEnv){var f=(e.withCredentials||Ee(h))&&e.xsrfCookieName&&be.read(e.xsrfCookieName);f&&s.set(e.xsrfHeaderName,f)}void 0===r&&s.setContentType(null),"setRequestHeader"in l&&V.forEach(s.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),V.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&"json"!==o&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",ke(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=function(t){l&&(n(!t||t.type?new we(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));var p,m=(p=/^([-+\w]{1,25})(:?\/\/|:)/.exec(h))&&p[1]||"";m&&-1===se.protocols.indexOf(m)?n(new W("Unsupported protocol "+m+":",W.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};V.forEach(Te,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Se=function(e){for(var t,n,i=(e=V.isArray(e)?e:[e]).length,r=0;r<i&&(t=e[r],!(n=V.isString(t)?Te[t.toLowerCase()]:t));r++);if(!n){if(!1===n)throw new W("Adapter ".concat(t," is not supported by the environment"),"ERR_NOT_SUPPORT");throw new Error(V.hasOwnProp(Te,t)?"Adapter '".concat(t,"' is not available in the build"):"Unknown adapter '".concat(t,"'"))}if(!V.isFunction(n))throw new TypeError("adapter is not a function");return n};function Ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new we(null,e)}function Ce(e){return Ie(e),e.headers=ge.from(e.headers),e.data=ye.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Se(e.adapter||ce.adapter)(e).then((function(t){return Ie(e),t.data=ye.call(e,e.transformResponse,t),t.headers=ge.from(t.headers),t}),(function(t){return ve(t)||(Ie(e),t&&t.response&&(t.response.data=ye.call(e,e.transformResponse,t.response),t.response.headers=ge.from(t.response.headers))),Promise.reject(t)}))}var Ne=function(e){return e instanceof ge?e.toJSON():e};function _e(e,t){t=t||{};var n={};function i(e,t,n){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:n},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function r(e,t,n){return V.isUndefined(t)?V.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!V.isUndefined(t))return i(void 0,t)}function o(e,t){return V.isUndefined(t)?V.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}var l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:function(e,t){return r(Ne(e),Ne(t),!0)}};return V.forEach(Object.keys(Object.assign({},e,t)),(function(i){var s=l[i]||r,o=s(e[i],t[i],i);V.isUndefined(o)&&s!==a||(n[i]=o)})),n}var Ae="1.4.0",Le={};["object","boolean","number","function","string","symbol"].forEach((function(t,n){Le[t]=function(i){return e(i)===t||"a"+(n<1?"n ":" ")+t}}));var Re={};Le.transitional=function(e,t,n){function i(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new W(i(r," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!Re[r]&&(Re[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var Oe={assertOptions:function(t,n,i){if("object"!==e(t))throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var o=r[s],a=n[o];if(a){var l=t[o],c=void 0===l||a(l,o,t);if(!0!==c)throw new W("option "+o+" must be "+c,W.ERR_BAD_OPTION_VALUE)}else if(!0!==i)throw new W("Unknown option "+o,W.ERR_BAD_OPTION)}},validators:Le},De=Oe.validators,Pe=function(){function e(n){t(this,e),this.defaults=n,this.interceptors={request:new ie,response:new ie}}return s(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var n,i=t=_e(this.defaults,t),r=i.transitional,s=i.paramsSerializer,o=i.headers;void 0!==r&&Oe.assertOptions(r,{silentJSONParsing:De.transitional(De.boolean),forcedJSONParsing:De.transitional(De.boolean),clarifyTimeoutError:De.transitional(De.boolean)},!1),null!=s&&(V.isFunction(s)?t.paramsSerializer={serialize:s}:Oe.assertOptions(s,{encode:De.function,serialize:De.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),(n=o&&V.merge(o.common,o[t.method]))&&V.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete o[e]})),t.headers=ge.concat(n,o);var a=[],l=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));var c,u=[];this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)}));var h,d=0;if(!l){var f=[Ce.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,u),h=f.length,c=Promise.resolve(t);d<h;)c=c.then(f[d++],f[d++]);return c}h=a.length;var p=t;for(d=0;d<h;){var m=a[d++],g=a[d++];try{p=m(p)}catch(e){g.call(this,e);break}}try{c=Ce.call(this,p)}catch(e){return Promise.reject(e)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}},{key:"getUri",value:function(e){return te(xe((e=_e(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),e}();V.forEach(["delete","get","head","options"],(function(e){Pe.prototype[e]=function(t,n){return this.request(_e(n||{},{method:e,url:t,data:(n||{}).data}))}})),V.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(_e(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Pe.prototype[e]=t(),Pe.prototype[e+"Form"]=t(!0)}));var Me=Pe,Fe=function(){function e(n){if(t(this,e),"function"!=typeof n)throw new TypeError("executor must be a function.");var i;this.promise=new Promise((function(e){i=e}));var r=this;this.promise.then((function(e){if(r._listeners){for(var t=r._listeners.length;t-- >0;)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},n((function(e,t,n){r.reason||(r.reason=new we(e,t,n),i(r.reason))}))}return s(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}(),Ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ue).forEach((function(e){var t=o(e,2),n=t[0],i=t[1];Ue[i]=n}));var Be=Ue,ze=function e(t){var n=new Me(t),i=l(Me.prototype.request,n);return V.extend(i,Me.prototype,n,{allOwnKeys:!0}),V.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(_e(t,n))},i}(ce);return ze.Axios=Me,ze.CanceledError=we,ze.CancelToken=Fe,ze.isCancel=ve,ze.VERSION=Ae,ze.toFormData=Q,ze.AxiosError=W,ze.Cancel=ze.CanceledError,ze.all=function(e){return Promise.all(e)},ze.spread=function(e){return function(t){return e.apply(null,t)}},ze.isAxiosError=function(e){return V.isObject(e)&&!0===e.isAxiosError},ze.mergeConfig=_e,ze.AxiosHeaders=ge,ze.formToJSON=function(e){return oe(V.isHTMLForm(e)?new FormData(e):e)},ze.HttpStatusCode=Be,ze.default=ze,ze}()})),s.register("ihoyg",(function(e,n){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var i,r;t(e.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(e){return r=e}));var o=s("hqZtu"),a=s("5WQj6");const l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=h,r=50;const c=2147483647;function u(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let i=u(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(J(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(J(e,ArrayBuffer)||e&&J(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(J(e,SharedArrayBuffer)||e&&J(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return h.from(i,t,n);const r=function(e){if(h.isBuffer(e)){const t=0|y(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|y(e))}function m(e){const t=e.length<0?0:0|y(e.length),n=u(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,h.prototype),i}function y(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function v(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||J(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(e).length;default:if(r)return i?-1:X(e).length;t=(""+t).toLowerCase(),r=!0}}function w(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return _(this,t,n);case"ascii":return L(this,t,n);case"latin1":case"binary":return R(this,t,n);case"base64":return N(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function b(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function x(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=h.from(t,i)),h.isBuffer(t))return 0===t.length?-1:E(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,i,r){let s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(e,s+i)!==c(t,i)){n=!1;break}if(n)return s}return-1}function k(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(Z(i))return o;e[n+o]=i}return o}function T(e,t,n,i){return Y(X(t,e.length-n),e,n,i)}function S(e,t,n,i){return Y(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function I(e,t,n,i){return Y(Q(t),e,n,i)}function C(e,t,n,i){return Y(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function N(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function _(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=A));return n}(i)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(J(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),J(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=h.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(J(t,Uint8Array))r+t.length>i.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?_(this,0,e):w.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(h.prototype[l]=h.prototype.inspect),h.prototype.compare=function(e,t,n,i,r){if(J(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return x(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return x(this,e,t,n,!1)},h.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return k(this,e,t,n);case"utf8":case"utf-8":return T(this,e,t,n);case"ascii":case"latin1":case"binary":return S(this,e,t,n);case"base64":return I(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function L(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function R(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function O(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=ee[e[i]];return r}function D(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function P(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,i,r,s){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function F(e,t,n,i,r){$(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function U(e,t,n,i,r){$(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function B(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function z(e,t,n,i,r){return t=+t,n>>>=0,r||B(e,0,n,4),a.write(e,t,n,i,23,4),n+4}function j(e,t,n,i,r){return t=+t,n>>>=0,r||B(e,0,n,8),a.write(e,t,n,i,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,h.prototype),i},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),h.prototype.readBigUInt64BE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},h.prototype.readInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||P(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||P(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=te((function(e){H(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||P(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||P(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||P(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||P(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te((function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},h.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te((function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(e,t,n){return z(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return z(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,i){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},h.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!h.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=h.isBuffer(e)?e:h.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const V={};function W(e,t,n){V[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function q(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function $(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new V.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){H(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||G(t,e.length-(n+1))}(i,r,s)}function H(e,t){if("number"!=typeof e)throw new V.ERR_INVALID_ARG_TYPE(t,"number",e)}function G(e,t,n){if(Math.floor(e)!==e)throw H(e,n),new V.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new V.ERR_BUFFER_OUT_OF_BOUNDS;throw new V.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}W("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),W("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),W("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=q(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=q(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const K=/[^+/0-9A-Za-z-_]/g;function X(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Q(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(K,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function J(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(e,n){var i,r;t(e.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),t(e.exports,"fromByteArray",(function(){return r}),(function(e){return r=e})),i=function(e){var t,n,i=u(e),r=i[0],s=i[1],l=new a(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),c=0,h=s>0?r-4:r;for(n=0;n<h;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;2===s&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,l[c++]=255&t);1===s&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t);return l},r=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,a=0,l=n-i;a<l;a+=o)r.push(h(e,a,a+o>l?l:a+o));1===i?(t=e[n-1],r.push(s[t>>2]+s[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return r.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0;c<64;++c)s[c]=l[c],o[l.charCodeAt(c)]=c;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var i,r,o=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(s[(r=i)>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,r;t(e.exports,"read",(function(){return i}),(function(e){return i=e})),t(e.exports,"write",(function(){return r}),(function(e){return r=e})),i=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=c}return(f?-1:1)*o*Math.pow(2,s-i)},r=function(e,t,n,i,r,s){var o,a,l,c=8*s-r-1,u=(1<<c)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*m}})),s.register("fUP9p",(function(e,n){t(e.exports,"refEl",(function(){return a})),t(e.exports,"IS_USER_LOG",(function(){return u})),t(e.exports,"openForm",(function(){return h}));var i=s("dQL0x"),r=s("7Y9D8"),o=s("kAe2l");const a={formSignIn:document.querySelector("#sign-in"),formSignUp:document.querySelector("#sign-up"),formChangerOnSignUp:document.querySelector(".js__sign-up"),formChangerOnSignIn:document.querySelector(".js__sign-in"),formSubmit:document.querySelector(".form__submit"),checkAuth:document.querySelector(".check__auth"),openFormBtn:document.querySelector(".sign-up-btn__page-header"),userProfileBtn:document.querySelector(".auth-component__user-name"),openFormBtnMobile:document.querySelector(".sign-up-btn-openModal"),navHeaderMobile:document.querySelector(".menu-container__page-nav"),nameUser:document.querySelector(".user__name-mobile"),singOutMobile:document.querySelector(".auth-component__sign-out-button-mobile"),backdrop:document.querySelector(".backdrop"),closeBtns:document.querySelectorAll(".form__close"),signOutbtn:document.querySelector(".log-out-btn"),pageHeader:document.querySelector(".page-header__container")},l=new(0,i.User);!async function(){try{if(await l.isAuthenticated()){console.log("Пользователь аутентифицирован");const e=await l.getInfoUserFromDb(o.auth.currentUser.email);return a.userProfileBtn.textContent=e.userName,a.nameUser.textContent=e.userName,a.openFormBtn.style.display="none",document.body.classList.add("is-logged"),a.pageHeader.classList.add("is-logged"),void(u=!0)}return console.log("Пользователь не аутентифицирован"),a.openFormBtn.addEventListener("click",h),a.openFormBtnMobile.addEventListener("click",h),a.userProfileBtn.style.display="none",void(u=!1)}catch(e){console.error("Ошибка при проверке аутентификации:",e)}}();let c=!1,u=!1;function h(){c||(a.backdrop.classList.remove("hidden"),a.formSignUp.classList.add("active"),c=!0,a.formChangerOnSignIn.addEventListener("click",d),a.formSignUp.addEventListener("submit",p)),c&&(a.closeBtns.forEach((function(e){e.addEventListener("click",(function(){e.closest(".form").classList.remove("active"),a.backdrop.classList.add("hidden")}))})),c=!1)}function d(e){if(e.target===a.formChangerOnSignIn)return a.formSignIn.reset(),a.formSignUp.classList.toggle("active"),a.formSignIn.classList.toggle("active"),a.formSignUp.removeEventListener("click",d),a.formSignIn.addEventListener("click",f),a.formSignIn.addEventListener("submit",m),void a.formSignUp.removeEventListener("submit",p)}function f(e){if(e.target===a.formChangerOnSignUp)return e.currentTarget.reset(),a.formSignIn.classList.toggle("active"),a.formSignUp.classList.toggle("active"),a.formSignIn.removeEventListener("click",f),a.formSignUp.addEventListener("click",d),a.formSignUp.addEventListener("submit",p),void a.formSignIn.removeEventListener("submit",m)}async function p(e){e.preventDefault();const{elements:{userName:t,userEmail:n,userPassword:i}}=a.formSignUp;l.signUp(t.value,n.value,i.value)}async function m(e){e.preventDefault();const{elements:{userEmail:t,userPassword:n}}=a.formSignIn;l.signIn(t.value,n.value)}a.signOutbtn.addEventListener("click",(function(){l.signOut(),a.openFormBtn.textContent="Sign Up / Sign In",a.pageHeader.classList.remove("is-logged"),r.Notify.success("You have been logged out.")})),a.singOutMobile.addEventListener("click",(function(){l.signOut(),a.openFormBtn.textContent="Sign Up / Sign In",a.pageHeader.classList.remove("is-logged"),r.Notify.success("You have been logged out.")}))})),s.register("dQL0x",(function(e,n){t(e.exports,"User",(function(){return c}));var i=s("fUP9p"),r=s("7Y9D8");s("eyjy7");var o=s("la1jY"),a=s("kAe2l");s("ftYLF");var l=s("3PjDZ");i=s("fUP9p");class c{constructor(){this.auth=(0,o.o)(),this.currentUser=null,this.isAuthenticated()}async isAuthenticated(){return new Promise(((e,t)=>{(0,o.x)(this.auth,(t=>{t?(this.currentUser=t,e(!0)):(this.currentUser=null,e(!1))}),t)}))}async getInfoUserFromDb(e){const t=(0,l.collection)(a.db,"users"),n=(0,l.query)(t,(0,l.where)("userEmail","==",e));try{const e=await(0,l.getDocs)(n);if(e.empty)return void console.error("User not found");const t=e.docs[0],i=t.data(),r=t.id,s={...i,id:r};this.currentUser=s;const o={id:s.id,wishList:s.userWishList};return localStorage.setItem("currentUser",JSON.stringify(o)),s}catch(e){return void console.error(e.message)}}async addToWishList(e,t){try{const n=await this.getInfoUserFromDb(t);if(!n)return void console.error("User not found");const i=n.userWishList;if(i.includes(e))return void console.log("Book already exists in the wishlist");i.push(e),await(0,l.updateDoc)((0,l.doc)(a.db,"users",n.id),{userWishList:i});const s={id:n.id,wishList:i};localStorage.setItem("currentUser",JSON.stringify(s)),r.Notify.info("Book added to shopping list")}catch(e){console.error(e.message)}}async removeFromWishlist(e,t){try{const n=await this.getInfoUserFromDb(t);if(!n)return void console.error("User not found");const i=n.userWishList;if(!i.includes(e))return void console.log("Book does not exist in the wishlist");const s=i.filter((t=>t!==e));await(0,l.updateDoc)((0,l.doc)(a.db,"users",n.id),{userWishList:s});const o={id:n.id,wishList:s};localStorage.setItem("currentUser",JSON.stringify(o)),r.Notify.info("Book removed from shopping list")}catch(e){console.error(e.message)}}async getWishList(e){try{const t=await this.getInfoUserFromDb(e);if(!t)return void console.error("User not found");return t.userWishList}catch(e){console.error(e.message)}}async signUp(e,t,n){try{r.Loading.hourglass(),await(0,o.a8)(a.auth,t.trim(),n.trim()),await(0,o.ai)(a.auth.currentUser,{displayName:e}),await(0,l.addDoc)(a.colRef,{userName:e.trim(),userEmail:t.trim().toLowerCase(),userPassword:n.trim(),userWishList:[]}),await this.getInfoUserFromDb(t),r.Notify.success(`Good job ${e.trim()}! Your account is created!`),i.refEl.formSignUp.reset();const s={id:this.currentUser.id,wishList:this.currentUser.userWishList};localStorage.setItem("currentUser",JSON.stringify(s)),await this.signIn(t,n)}catch(e){console.error(e.message),r.Notify.failure(e.code)}finally{r.Loading.remove()}}async signIn(e,t){try{r.Loading.hourglass();const n=await(0,o.a9)(a.auth,e.toLowerCase(),t);if(r.Notify.success("You logged in successfully"),n){i.refEl.formSignIn.reset(),await this.getInfoUserFromDb(e);const t={id:this.currentUser.id,wishList:[]};localStorage.setItem("currentUser",JSON.stringify(t)),location.reload()}}catch(e){console.error(e.message),r.Notify.failure(e.code)}finally{r.Loading.remove()}}async signOut(){try{r.Loading.hourglass(),await(0,o.B)(a.auth),localStorage.removeItem("currentUser"),r.Notify.success("Signed out"),window.location.replace("index.html")}catch(e){console.error(e.message),r.Notify.failure(e.code)}finally{r.Loading.remove()}}}})),s.register("7Y9D8",(function(e,t){var i,r;i=void 0===n?"undefined"==typeof window?e.exports:window:n,r=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",w="Ask",b="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},E="Standard",k="Hourglass",T="Circle",S="Arrows",I="Dots",C="Pulse",N="Custom",_="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},L="Standard",R="Hourglass",O="Circle",D="Arrows",P="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},B=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},z=function(t){return t||(t="head"),null!==e.document[t]||(U('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!z("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},V=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?V(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},W=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,J=function(n,i,r,s){if(!z("body"))return!1;t||ce.Notify.init({});var o=V(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),t=V(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=W(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=V(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"");else{var w="";n===l?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=w+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var x=e.document.getElementById(y.id);if(x){var E,k,T=function(){x.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(E)},S=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){T();var e=setTimeout((function(){S(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),T();var e=setTimeout((function(){S(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var I=function(){E=setTimeout((function(){T()}),t.timeout),k=setTimeout((function(){S()}),t.timeout+t.cssAnimationDuration)};I(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(E),clearTimeout(k)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),I()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var C,N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),_=0;_<N.length;_++)null!==(C=N[_]).parentNode&&C.parentNode.removeChild(C);t=V(!0,t,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,s,o,l){if(!z("body"))return!1;n||ce.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof o?u=o:"object"==typeof l&&(u=l),c=V(!0,n,{}),n=V(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=W(i),r=W(r),s=W(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",w=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(w?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b="";if(t===f?b=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===p?b=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?b=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(b=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+b+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var x=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),x()})),v&&w&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=V(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,s,o,l,c,u,h){if(!z("body"))return!1;i||ce.Confirm.init({});var d=V(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=V(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),o=W(o),l=W(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",l="..."),(o.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,E=void 0;if(t===w||t===b){v=s||"";var k=t===w||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+v+'"':"")+' maxlength="'+k+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var T=e.document.getElementById(f.id),S=e.document.getElementById("NXConfirmButtonOk"),I=e.document.getElementById("NXConfirmValidationInput");I&&(I.focus(),I.setSelectionRange(0,(I.value||"").length),I.addEventListener("keyup",(function(e){var n=e.target.value;t===w&&n!==v?(e.preventDefault(),I.classList.add("nx-validation-failure"),I.classList.remove("nx-validation-success")):(t===w&&(I.classList.remove("nx-validation-failure"),I.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&S.dispatchEvent(new Event("click")))}))),S.addEventListener("click",(function(e){if(t===w&&v&&I){if((I.value||"").toString()!==v)return I.focus(),I.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;I.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&I&&(E=I.value||""),c(E)),T.classList.add("nx-remove");var n=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===b&&I&&(E=I.value||""),u(E)),T.classList.add("nx-remove");var e=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(e))}),i.cssAnimationDuration)}))}i=V(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,s,o){if(!z("body"))return!1;r||ce.Loading.init({});var l=V(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=V(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(t===E)d=q(r.svgSize,r.svgColor);else if(t===k)d=$(r.svgSize,r.svgColor);else if(t===T)d=H(r.svgSize,r.svgColor);else if(t===S)d=G(r.svgSize,r.svgColor);else if(t===I)d=K(r.svgSize,r.svgColor);else if(t===C)d=X(r.svgSize,r.svgColor);else if(t===N&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(t===N&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===N&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),r.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(A.ID))var v=e.document.getElementById(A.ID),w=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(w)}),o);r=V(!0,r,l)},se=function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(A.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?W(t).substring(0,r.messageMaxLength)+"...":W(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var s=e.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=t,n.appendChild(s)}}else U("Where is the new message?")},oe=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,le=function(t,n,i,r,o,l){var c;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}s||ce.Block.init({});var h=V(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=V(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=F.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var v,w=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=c[b]){if(-1<w.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var E="";n&&(E=n===R?$(s.svgSize,s.svgColor):n===O?H(s.svgSize,s.svgColor):n===D?G(s.svgSize,s.svgColor):n===P?K(s.svgSize,s.svgColor):n===M?X(s.svgSize,s.svgColor):q(s.svgSize,s.svgColor));var k='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+E+"</span>",T="";0<f.length&&(f=f.length>s.messageMaxLength?W(f).substring(0,s.messageMaxLength)+"...":W(f),T='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),ae++;var S=e.document.createElement("div");S.id=F.ID+"-"+ae,S.className=p+(s.cssAnimation?" nx-with-animation":""),S.style.position=s.position,S.style.zIndex=s.zindex,S.style.background=s.backgroundColor,S.style.animationDuration=s.cssAnimationDuration+"ms",S.style.fontFamily='"'+s.fontFamily+'", '+a,S.style.display="flex",S.style.flexWrap="wrap",S.style.flexDirection="column",S.style.alignItems="center",S.style.justifyContent="center",s.rtl&&(S.setAttribute("dir","rtl"),S.classList.add("nx-rtl-on")),S.innerHTML=k+T;var I,C=e.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof C?C.toLocaleLowerCase("en"):"relative",_=Math.round(1.25*parseInt(s.svgSize))+40,A="";_>(v.offsetHeight||0)&&(A="min-height:"+_+"px;"),I=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var L="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(j||0<A.length){if(!z("head"))return!1;j&&(L="position:relative!important;");var Q='<style id="Style-'+F.ID+"-"+ae+'">'+I+"."+y+"{"+L+A+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(Q);e.document.head.appendChild(J),v.classList.add(y)}v.appendChild(S)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else B("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),s.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),x=e.querySelectorAll("[id^="+F.ID+"]"),ee(x));clearTimeout(ne)}),l);s=V(!0,s,h)},ce={Notify:{init:function(e){t=V(!0,d,e),j(Q,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=V(!0,t,e)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){J(l,e,t,n)},failure:function(e,t,n){J(c,e,t,n)},warning:function(e,t,n){J(u,e,t,n)},info:function(e,t,n){J(h,e,t,n)}},Report:{init:function(e){n=V(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=V(!0,n,e)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(f,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(p,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=V(!0,x,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=V(!0,i,e)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,s,o){ne(v,e,t,null,n,i,r,s,o)},ask:function(e,t,n,i,r,s,o,a){ne(w,e,t,n,i,r,s,o,a)},prompt:function(e,t,n,i,r,s,o,a){ne(b,e,t,n,i,r,s,o,a)}},Loading:{init:function(e){r=V(!0,A,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=V(!0,r,e)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(E,e,t,!0,0)},hourglass:function(e,t){re(k,e,t,!0,0)},circle:function(e,t){re(T,e,t,!0,0)},arrows:function(e,t){re(S,e,t,!0,0)},dots:function(e,t){re(I,e,t,!0,0)},pulse:function(e,t){re(C,e,t,!0,0)},custom:function(e,t){re(N,e,t,!0,0)},notiflix:function(e,t){re(_,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(e){se(e)}},Block:{init:function(e){s=V(!0,F,e),j(oe,"NotiflixBlockInternalCSS")},merge:function(e){return s?void(s=V(!0,s,e)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){le(!0,L,e,t,n)},hourglass:function(e,t,n){le(!0,R,e,t,n)},circle:function(e,t,n){le(!0,O,e,t,n)},arrows:function(e,t,n){le(!0,D,e,t,n)},dots:function(e,t,n){le(!0,P,e,t,n)},pulse:function(e,t,n){le(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),le(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?V(!0,e.Notiflix,{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}):{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}},"function"==typeof define&&define.amd?define([],(function(){return r(i)})):"object"==typeof e.exports?e.exports=r(i):i.Notiflix=r(i)})),s.register("eyjy7",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return s("la1jY").a8})),t(e.exports,"getAuth",(function(){return s("la1jY").o})),t(e.exports,"onAuthStateChanged",(function(){return s("la1jY").x})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("la1jY").a9})),t(e.exports,"signOut",(function(){return s("la1jY").B})),t(e.exports,"updateProfile",(function(){return s("la1jY").ai})),s("1iO0g")})),s.register("1iO0g",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return s("la1jY").a8})),t(e.exports,"getAuth",(function(){return s("la1jY").o})),t(e.exports,"onAuthStateChanged",(function(){return s("la1jY").x})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("la1jY").a9})),t(e.exports,"signOut",(function(){return s("la1jY").B})),t(e.exports,"updateProfile",(function(){return s("la1jY").ai}));s("la1jY");s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH")})),s.register("la1jY",(function(e,n){t(e.exports,"a8",(function(){return Ke})),t(e.exports,"a9",(function(){return Xe})),t(e.exports,"ai",(function(){return Qe})),t(e.exports,"x",(function(){return Ye})),t(e.exports,"B",(function(){return Je})),t(e.exports,"o",(function(){return yn}));var i=s("ffjl9"),r=s("ix4Jr"),o=s("l73V3"),a=s("7vF8m"),l=s("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,a.Logger)("@firebase/auth");function f(e,...t){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function g(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",r).create(t,{appName:e.name})}function y(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return h.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||w(t)}
/**
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
 */function x(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */
/**
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
 */
class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(E()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
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
 */function S(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class I{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},N=new T(3e4,6e4);
/**
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
 */function _(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function A(e,t,n,r,s={}){return L(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),I.fetch()(O(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function L(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},C),t);try{const t=new D(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw P(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw P(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw P(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw P(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);p(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;p(e,"network-request-failed",{message:String(t)})}}async function R(e,t,n,i,r={}){const s=await A(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function O(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?S(e.config,r):`${e.config.apiScheme}://${r}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function P(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=m(e,t,i);return r.customData._tokenResponse=n,r}
/**
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
 */
/**
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
 */
function M(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function F(e){return 1e3*Number(e)}function U(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function B(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class j{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=M(this.lastLoginAt),this.creationTime=M(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function V(e){var t;const n=e.auth,i=await e.getIdToken(),r=await B(e,async function(e,t){return A(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));v(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,u=a,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const h=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==l?void 0:l.length)),f=!!h&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new j(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
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
 */
class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=U(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
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
 */
async function(e,t){const n=await L(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=O(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",I.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new W;return n&&(v("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(v("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(v("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
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
 */function q(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ${constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new j(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await B(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),r=await n.getIdToken(t),s=U(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:M(F(s.auth_time)),issuedAtTime:M(F(s.iat)),expirationTime:M(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await V(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await V(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await B(this,async function(e,t){return A(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:b,isAnonymous:x,providerData:E,stsTokenManager:k}=t;v(w&&k,e,"internal-error");const T=W.fromJSON(this.name,k);v("string"==typeof w,e,"internal-error"),q(u,e.name),q(h,e.name),v("boolean"==typeof b,e,"internal-error"),v("boolean"==typeof x,e,"internal-error"),q(d,e.name),q(f,e.name),q(p,e.name),q(m,e.name),q(g,e.name),q(y,e.name);const S=new $({uid:w,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:x,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new W;i.updateFromServerResponse(t);const r=new $({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await V(r),r}}
/**
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
 */const H=new Map;function G(e){b(e instanceof Function,"Expected a class definition");let t=H.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,H.set(e,t),t)}
/**
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
 */class K{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K.type="NONE";const X=K;
/**
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
 */function Q(e,t,n){return`firebase:${e}:${t}:${n}`}class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Q(this.userKey,i.apiKey,r),this.fullPersistenceKey=Q("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(G(X),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||G(X);const s=Q(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=$._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Y(r,e,n)):new Y(r,e,n)}}
/**
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
 */function J(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(re(t))return"Blackberry";if(se(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(e=(0,i.getUA)()){return/firefox\//i.test(e)}function ee(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=(0,i.getUA)()){return/crios\//i.test(e)}function ne(e=(0,i.getUA)()){return/iemobile/i.test(e)}function ie(e=(0,i.getUA)()){return/android/i.test(e)}function re(e=(0,i.getUA)()){return/blackberry/i.test(e)}function se(e=(0,i.getUA)()){return/webos/i.test(e)}function oe(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ae(e=(0,i.getUA)()){return oe(e)||ie(e)||se(e)||re(e)||/windows phone/i.test(e)||ne(e)}
/**
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
 */
function le(e,t=[]){let n;switch(e){case"Browser":n=J((0,i.getUA)());break;case"Worker":n=`${J((0,i.getUA)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${s}`}
/**
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
 */async function ce(e,t){return A(e,"GET","/v2/recaptchaConfig",_(e,t))}
/**
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
 */function ue(e){return void 0!==e&&void 0!==e.enterprise}class he{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function de(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function fe(e){return`__${e}${Math.floor(1e6*Math.random())}`}class pe{constructor(e){this.type="recaptcha-enterprise",this.auth=ve(e)}async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;ue(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{ce(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new he(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&ue(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));de("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function me(e,t,n,i=!1){const r=new pe(e);let s;try{s=await r.verify(n)}catch(e){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */class ge{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
 */class ye{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new we(this),this.idTokenSubscription=new we(this),this.beforeStateQueue=new ge(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=G(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await V(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(G(e))}))}async initializeRecaptchaConfig(){const e=await ce(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new he(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new pe(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&G(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[G(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){d.logLevel<=a.LogLevel.WARN&&d.warn(`Auth (${r.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ve(e){return(0,i.getModularInstance)(e)}class we{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function be(e,t,n){const i=ve(e);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=xe(t),{host:o,port:a}=function(e){const t=xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ee(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ee(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ee(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ke{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
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
 */async function Te(e,t){return A(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function Se(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",_(e,t))}
/**
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
 */
class Ie extends ke{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ie(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ie(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await me(e,n,"signInWithPassword");return Se(e,t)}return Se(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await me(e,n,"signInWithPassword");return Se(e,t)}return Promise.reject(t)}));case"emailLink":
/**
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
 */
return async function(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Te(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Ce(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",_(e,t))}
/**
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
 */class Ne extends ke{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,o.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ne(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Ce(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ce(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ce(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}}
/**
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
 */const _e={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Ae extends ke{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ae({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ae({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await R(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t));if(n.temporaryProof)throw P(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),_e)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ae({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */class Le{constructor(e){var t,n,r,s,o,a;const l=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new Le(t)}catch(e){return null}}}
/**
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
 */
class Re{constructor(){this.providerId=Re.PROVIDER_ID}static credential(e,t){return Ie._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Le.parseLink(t);return v(n,"argument-error"),Ie._fromEmailAndCode(e,n.code,n.tenantId)}}Re.PROVIDER_ID="password",Re.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Re.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Oe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class De extends Oe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Pe extends De{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch(e){return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pe.PROVIDER_ID="facebook.com";
/**
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
 */
class Me extends De{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ne._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Me.credential(t,n)}catch(e){return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
/**
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
 */
class Fe extends De{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";
/**
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
 */
class Ue extends De{constructor(){super("twitter.com")}static credential(e,t){return Ne._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ue.credential(t,n)}catch(e){return null}}}
/**
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
 */
async function Be(e,t){return R(e,"POST","/v1/accounts:signUp",_(e,t))}
/**
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
 */Ue.TWITTER_SIGN_IN_METHOD="twitter.com",Ue.PROVIDER_ID="twitter.com";class ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await $._fromIdTokenResponse(e,n,i),s=je(n);return new ze({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=je(n);return new ze({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function je(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Ve extends i.FirebaseError{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ve.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ve(e,t,n,i)}}function We(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ve._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
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
 */async function qe(e,t,n=!1){const i=await B(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ze._forOperation(e,"link",i)}
/**
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
 */
async function $e(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await B(e,We(i,r,t,e),n);v(s.idToken,i,"internal-error");const o=U(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(e.uid===a,i,"user-mismatch"),ze._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(i,"user-mismatch"),e}}
/**
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
 */async function He(e,t,n=!1){const i="signIn",r=await We(e,i,t),s=await ze._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Ge(e,t){return He(ve(e),t)}async function Ke(e,t,n){var i;const r=ve(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await me(r,s,"signUpPassword");o=Be(r,e)}else o=Be(r,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await me(r,s,"signUpPassword");return Be(r,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await ze._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Xe(e,t,n){return Ge((0,i.getModularInstance)(e),Re.credential(t,n))}
/**
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
 */
/**
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
 */
async function Qe(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.getModularInstance)(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await B(r,
/**
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
 */
async function(e,t){return A(e,"POST","/v1/accounts:update",t)}(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Ye(e,t,n,r){return(0,i.getModularInstance)(e).onAuthStateChanged(t,n,r)}function Je(e){return(0,i.getModularInstance)(e).signOut()}new WeakMap;const Ze="__sak";
/**
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
 */class et{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ze,"1"),this.storage.removeItem(Ze),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class tt extends et{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tt.type="LOCAL";const nt=tt;
/**
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
 */class it extends et{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}it.type="SESSION";const rt=it;
/**
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
 */
/**
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
 */
class st{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new st(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function ot(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */st.receivers=[];class at{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=ot("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function lt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(){return void 0!==lt().WorkerGlobalScope&&"function"==typeof lt().importScripts}
/**
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
 */
const ut="firebaseLocalStorageDb",ht="firebaseLocalStorage",dt="fbase_key";class ft{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function pt(e,t){return e.transaction([ht],t?"readwrite":"readonly").objectStore(ht)}function mt(){const e=indexedDB.open(ut,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ht,{keyPath:dt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ht)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ut);return new ft(e).toPromise()}(),t(await mt()))}))}))}async function gt(e,t,n){const i=pt(e,!0).put({[dt]:t,value:n});return new ft(i).toPromise()}function yt(e,t){const n=pt(e,!0).delete(t);return new ft(n).toPromise()}class vt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await mt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ct()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=st._getInstance(ct()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new at(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mt();return await gt(e,Ze,"1"),await yt(e,Ze),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=pt(e,!1).get(t),i=await new ft(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>yt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=pt(e,!1).getAll();return new ft(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vt.type="LOCAL";const wt=vt;
/**
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
 */
/**
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
 */
fe("rcb"),new T(3e4,6e4);
/**
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
 */
const bt="recaptcha";async function xt(e,t,n){var i;const r=await n.verify();try{let s;if(v("string"==typeof r,e,"argument-error"),v(n.type===bt,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:start",_(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await function(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:start",_(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return A(e,"POST","/v1/accounts:sendVerificationCode",_(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
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
 */
class Et{constructor(e){this.providerId=Et.PROVIDER_ID,this.auth=ve(e)}verifyPhoneNumber(e,t){return xt(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Ae._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Et.credentialFromTaggedObject(t)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ae._fromTokenResponse(t,n):null}}
/**
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
 */
function kt(e,t){return t?G(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Et.PROVIDER_ID="phone",Et.PHONE_SIGN_IN_METHOD="phone";class Tt extends ke{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ce(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function St(e){return He(e.auth,new Tt(e),e.bypassAuthState)}function It(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),$e(n,new Tt(e),e.bypassAuthState)}async function Ct(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),qe(n,new Tt(e),e.bypassAuthState)}
/**
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
 */class Nt{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return St;case"linkViaPopup":case"linkViaRedirect":return Ct;case"reauthViaPopup":case"reauthViaRedirect":return It;default:p(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const _t=new T(2e3,1e4);class At extends Nt{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=ot();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,_t.get())};e()}}At.currentPopupAction=null;
/**
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
 */
const Lt="pendingRedirect",Rt=new Map;class Ot extends Nt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Rt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Mt(t),i=Pt(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Rt.set(this.auth._key(),e)}return this.bypassAuthState||Rt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Dt(e,t){Rt.set(e._key(),t)}function Pt(e){return G(e._redirectPersistence)}function Mt(e){return Q(Lt,e.config.apiKey,e.name)}
/**
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
 */async function Ft(e,t,n=!1){const i=ve(e),r=kt(i,t),s=new Ot(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Ut{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zt(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zt(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bt(e))}saveEventToCache(e){this.cachedEventUids.add(Bt(e)),this.lastProcessedEventTime=Date.now()}}function Bt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function zt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const jt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vt=/^https?/;async function Wt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return A(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(qt(e))return}catch(e){}p(e,"unauthorized-domain")}function qt(e){const t=x(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Vt.test(n))return!1;if(jt.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new T(3e4,6e4);function Ht(){const e=lt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Gt=null;function Kt(e){return Gt=Gt||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Ht(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ht(),n(m(e,"network-request-failed"))},timeout:$t.get()})}if(null===(r=null===(i=lt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=lt().gapi)||void 0===s?void 0:s.load)){const t=fe("iframefcb");return lt()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},de(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Gt=null,e}))}(e),Gt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new T(5e3,15e3),Qt="__/auth/iframe",Yt="emulator/auth/iframe",Jt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function en(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,Yt):`https://${e.config.authDomain}/${Qt}`,s={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},o=Zt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rn(e,t,n,r=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},tn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.getUA)().toLowerCase();n&&(l=te(u)?"_blank":n),Z(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */(t||"",l),new nn(null);const d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new nn(d)}const sn="__/auth/handler",on="emulator/auth/handler",an=encodeURIComponent("fac");async function ln(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.SDK_VERSION,eventId:o};if(t instanceof Oe){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof De){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];const u=await e._getAppCheckToken(),h=u?`#${an}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?S(e,on):`https://${e.authDomain}/${sn}`}
/**
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
 */(e)}?${(0,i.querystring)(c).slice(1)}${h}`}const cn="webStorageSupport";const un=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rt,this._completeRedirectFn=Ft,this._overrideRedirectResult=Dt}async _openPopup(e,t,n,i){var r;b(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return rn(e,await ln(e,t,n,x(),i),ot())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){lt().location.href=e}(await ln(e,t,n,x(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Kt(e),n=lt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:en(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jt,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=m(e,"network-request-failed"),s=lt().setTimeout((()=>{i(r)}),Xt.get());function o(){lt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Ut(e);return t.register("authEvent",(t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cn,{type:cn},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[cn];void 0!==r&&t(!!r),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}};var hn="@firebase/auth",dn="0.23.2";
/**
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
 */
class fn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const pn=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let mn=null;const gn=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>pn)return;const r=null==n?void 0:n.token;mn!==r&&(mn=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function yn(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:un,persistence:[wt,nt,rt]}),s=(0,i.getExperimentalSetting)("authTokenSyncURL");if(s){const e=gn(s);!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}const o=(0,i.getDefaultEmulatorHost)("auth");return o&&be(n,`http://${o}`),n}var vn;vn="Browser",(0,r._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;v(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:vn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(vn)},l=new ye(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(G);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new(0,l.Component)("auth-internal",(e=>(e=>new fn(e))(ve(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(hn,dn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vn)),(0,r.registerVersion)(hn,dn,"esm2017")})),s.register("ffjl9",(function(e,i){t(e.exports,"base64urlEncodeWithoutPadding",(function(){return c})),t(e.exports,"base64Decode",(function(){return u})),t(e.exports,"getDefaultEmulatorHost",(function(){return f})),t(e.exports,"getDefaultEmulatorHostnameAndPort",(function(){return p})),t(e.exports,"getDefaultAppConfig",(function(){return m})),t(e.exports,"getExperimentalSetting",(function(){return g})),t(e.exports,"Deferred",(function(){return y})),t(e.exports,"createMockUserToken",(function(){return v})),t(e.exports,"getUA",(function(){return w})),t(e.exports,"isMobileCordova",(function(){return b})),t(e.exports,"isBrowserExtension",(function(){return x})),t(e.exports,"isReactNative",(function(){return E})),t(e.exports,"isIE",(function(){return k})),t(e.exports,"isSafari",(function(){return T})),t(e.exports,"isIndexedDBAvailable",(function(){return S})),t(e.exports,"validateIndexedDBOpenable",(function(){return I})),t(e.exports,"FirebaseError",(function(){return C})),t(e.exports,"ErrorFactory",(function(){return N})),t(e.exports,"isEmpty",(function(){return A})),t(e.exports,"deepEqual",(function(){return L})),t(e.exports,"querystring",(function(){return O})),t(e.exports,"querystringDecode",(function(){return D})),t(e.exports,"extractQuerystring",(function(){return P})),t(e.exports,"createSubscribe",(function(){return M})),t(e.exports,"getModularInstance",(function(){return B}));
/**
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
 */
var r=s("4TNnu");const o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new l;const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){return function(e){const t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},u=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
const h=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,d=()=>{try{return h()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},f=e=>{var t,n;return null===(n=null===(t=d())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},p=e=>{const t=f(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},m=()=>{var e;return null===(e=d())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=d())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function v(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(s)),""].join(".")}
/**
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
 */function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function x(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){return!function(){var e;const t=null===(e=d())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}function I(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(_,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new C(i,o,n)}}const _=/\{\$([^}]+)}/g;
/**
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
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(R(n)&&R(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function O(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function D(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function M(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=U),void 0===i.error&&(i.error=U),void 0===i.complete&&(i.complete=U);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(){}
/**
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
 */
/**
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
 */
function B(e){return e&&e._delegate?e._delegate:e}})),s.register("4TNnu",(function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return k})),t(e.exports,"initializeApp",(function(){return T})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return I}));var i=s("4a6xH"),r=s("7vF8m"),o=s("ffjl9"),a=(o=s("ffjl9"),s("cCiiD"));
/**
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
 */
class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",u="0.9.10",h=new(0,r.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n=d){v(e,t).clearInstance(n)}
/**
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
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x=new(0,o.ErrorFactory)("app","Firebase",b);
/**
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
 */
class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
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
 */const k="9.22.0";function T(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw x.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw x.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw x.create("duplicate-app",{appName:s})}const l=new(0,i.ComponentContainer)(s);for(const e of m.values())l.addComponent(e);const c=new E(n,r,l);return p.set(s,c),c}function S(e=d){const t=p.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return T();if(!t)throw x.create("no-app",{appName:e});return t}function I(e,t,n){var r;let s=null!==(r=f[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}y(new(0,i.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
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
 */
const C="firebase-heartbeat-database",N=1,_="firebase-heartbeat-store";let A=null;function L(){return A||(A=(0,a.openDB)(C,N,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(_)}}).catch((e=>{throw x.create("idb-open",{originalErrorMessage:e.message})}))),A}async function R(e,t){try{const n=(await L()).transaction(_,"readwrite"),i=n.objectStore(_);await i.put(t,O(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=x.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function O(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class D{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new M(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=P();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=P(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),F(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),F(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function P(){return(new Date).toISOString().substring(0,10)}class M{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await L();return await t.transaction(_).objectStore(_).get(O(e))}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=x.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function F(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var U;U="",y(new(0,i.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(e=>new D(e)),"PRIVATE")),I(c,u,U),I(c,u,"esm2017"),I("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return r})),t(e.exports,"ComponentContainer",(function(){return l}));var i=s("ffjl9");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return r})),t(e.exports,"Logger",(function(){return u})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
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
 */
const i=[];var r,s;(s=r||(r={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=l[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function h(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return r}));var i=s("ekHjI");i=s("ekHjI");function r(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",(e=>{r((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),l.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return l.set(t,s),s}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return m})),t(e.exports,"r",(function(){return d}));const i=(e,t)=>t.some((t=>e instanceof t));let r,s;const o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){h=e(h)}function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),m(o.get(this))}:function(...t){return m(e.apply(g(this),t))}:function(t,...n){const i=e.call(g(this),t,...n);return l.set(i,t.sort?t.sort():[t]),m(i)}}function p(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));a.set(e,t)}(e),i(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)}function m(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(m(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=p(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const g=e=>u.get(e)})),s.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create})),s.register("kAe2l",(function(e,n){t(e.exports,"db",(function(){return l})),t(e.exports,"auth",(function(){return c})),t(e.exports,"colRef",(function(){return u})),s("gKkQl");var i=s("ix4Jr");s("ftYLF");var r=s("3PjDZ");s("eyjy7");var o=s("la1jY");const a=(0,i.initializeApp)({apiKey:"AIzaSyCMJ4oS1RcIdUOr4jrAkCF8F7w-W-dX16A",authDomain:"bookshelf-9ce7f.firebaseapp.com",projectId:"bookshelf-9ce7f",storageBucket:"bookshelf-9ce7f.appspot.com",messagingSenderId:"697346964275",appId:"1:697346964275:web:09e1e0b8d99621c0c5dc46",measurementId:"G-DTV56C5RE2"}),l=(0,r.getFirestore)(a),c=(0,o.o)(a),u=(0,r.collection)(l,"users")})),s.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
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
 */
(0,s("ix4Jr").registerVersion)("firebase","9.22.0","app")})),s.register("ftYLF",(function(e,n){t(e.exports,"addDoc",(function(){return s("3PjDZ").addDoc})),t(e.exports,"collection",(function(){return s("3PjDZ").collection})),t(e.exports,"doc",(function(){return s("3PjDZ").doc})),t(e.exports,"getDocs",(function(){return s("3PjDZ").getDocs})),t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"query",(function(){return s("3PjDZ").query})),t(e.exports,"updateDoc",(function(){return s("3PjDZ").updateDoc})),t(e.exports,"where",(function(){return s("3PjDZ").where})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"collection",(function(){return fo})),t(e.exports,"doc",(function(){return po})),t(e.exports,"getFirestore",(function(){return yo})),t(e.exports,"query",(function(){return Yo})),t(e.exports,"where",(function(){return Zo})),t(e.exports,"getDocs",(function(){return fa})),t(e.exports,"updateDoc",(function(){return pa})),t(e.exports,"addDoc",(function(){return ma}));var i=s("ix4Jr"),r=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),l=s("4bwHs");s("4TNnu");const c="@firebase/firestore";
/**
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
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
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
 */
let h="9.22.0";
/**
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
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(e,...t){if(d.logLevel<=o.LogLevel.DEBUG){const n=t.map(y);d.debug(`Firestore (${h}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.LogLevel.ERROR){const n=t.map(y);d.error(`Firestore (${h}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.LogLevel.WARN){const n=t.map(y);d.warn(`Firestore (${h}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function v(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function w(e,t){e||v()}function b(e,t){return e}
/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class k{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(u.UNAUTHENTICATED)))}shutdown(){}}class I{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new k;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new k,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new k)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new u(e)}}class N{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class _{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(u.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(w("string"==typeof e.token),this.T=e.token,new A(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
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
 */class O{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=R(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%62))}return n}}function D(e,t){return e<t?-1:e>t?1:0}function P(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
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
 */
class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new M(0,0))}static max(){return new F(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends U{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new B(t)}static emptyPath(){return new B([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends U{construct(e,t,n){return new j(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new E(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new E(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new E(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new j(t)}static emptyPath(){return new j([])}}
/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(B.fromString(e))}static fromName(e){return new V(B.fromString(e).popFirst(5))}static empty(){return new V(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new B(e.slice()))}}
/**
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
 */class W{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}W.UNKNOWN_ID=-1;function q(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=F.fromTimestamp(1e9===i?new M(n+1,0):new M(n,i));return new H(r,V.empty(),t)}function $(e){return new H(e.readTime,e.key,-1)}class H{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new H(F.min(),V.empty(),-1)}static max(){return new H(F.max(),V.empty(),-1)}}function G(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=V.comparator(e.documentKey,t.documentKey),0!==n?n:D(e.largestBatchId,t.largestBatchId))}
/**
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
 */const K="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function Q(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==K)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(e){return Y.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,n)=>{t(e)}))}static reject(e){return new Y(((t,n)=>{n(e)}))}static waitFor(e){return new Y(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Y.resolve(!1);for(const n of e)t=t.next((e=>e?Y.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Y(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new Y(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
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
 */function J(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */
class Z{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ee(e){return null==e}function te(e){return 0===e&&1/e==-1/0}function ne(e){return"number"==typeof e&&Number.isInteger(e)&&!te(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */Z.ct=-1;const ie=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],re=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],se=re;
/**
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
 */
/**
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
 */
function oe(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ae(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function le(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||he.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ue(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ue(this.root,e,this.comparator,!1)}getReverseIterator(){return new ue(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ue(this.root,e,this.comparator,!0)}}class ue{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:he.RED,this.left=null!=i?i:he.EMPTY,this.right=null!=r?r:he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new he(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return he.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1,he.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,i,r){return this}insert(e,t,n){return new he(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class de{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fe(this.data.getIterator())}getIteratorFrom(e){return new fe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof de))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class fe{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class pe{constructor(e){this.fields=e,e.sort(j.comparator)}static empty(){return new pe([])}unionWith(e){let t=new de(j.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return P(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class me extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new me("Invalid base64 string: "+e):e}}(e);return new ge(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const ye=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(e){if(w(!!e),"string"==typeof e){let t=0;const n=ye.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:we(e.seconds),nanos:we(e.nanos)}}function we(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function be(e){return"string"==typeof e?ge.fromBase64String(e):ge.fromUint8Array(e)}
/**
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
 */function xe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ee(e){const t=e.mapValue.fields.__previous_value__;return xe(t)?Ee(t):t}function ke(e){const t=ve(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}
/**
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
 */class Te{constructor(e,t,n,i,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Se{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Se("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Se&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const Ie={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ce(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xe(e)?4:je(e)?9007199254740991:10:v()}function Ne(e,t){if(e===t)return!0;const n=Ce(e);if(n!==Ce(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ke(e).isEqual(ke(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ve(e.timestampValue),i=ve(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return be(e.bytesValue).isEqual(be(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return we(e.geoPointValue.latitude)===we(t.geoPointValue.latitude)&&we(e.geoPointValue.longitude)===we(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return we(e.integerValue)===we(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=we(e.doubleValue),i=we(t.doubleValue);return n===i?te(n)===te(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return P(e.arrayValue.values||[],t.arrayValue.values||[],Ne);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(oe(n)!==oe(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Ne(n[e],i[e])))return!1;return!0}(e,t);default:return v()}}function _e(e,t){return void 0!==(e.values||[]).find((e=>Ne(e,t)))}function Ae(e,t){if(e===t)return 0;const n=Ce(e),i=Ce(t);if(n!==i)return D(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=we(e.integerValue||e.doubleValue),i=we(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Le(e.timestampValue,t.timestampValue);case 4:return Le(ke(e),ke(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(e,t){const n=be(e),i=be(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=D(n[e],i[e]);if(0!==t)return t}return D(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=D(we(e.latitude),we(t.latitude));return 0!==n?n:D(we(e.longitude),we(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Ae(n[e],i[e]);if(t)return t}return D(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ie.mapValue&&t===Ie.mapValue)return 0;if(e===Ie.mapValue)return 1;if(t===Ie.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=D(i[e],s[e]);if(0!==t)return t;const o=Ae(n[i[e]],r[s[e]]);if(0!==o)return o}return D(i.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function Le(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return D(e,t);const n=ve(e),i=ve(t),r=D(n.seconds,i.seconds);return 0!==r?r:D(n.nanos,i.nanos)}function Re(e){return Oe(e)}function Oe(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ve(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?be(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,V.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Oe(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Oe(e.fields[r])}`;return n+"}"}(e.mapValue):v()}function De(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Pe(e){return!!e&&"integerValue"in e}function Me(e){return!!e&&"arrayValue"in e}function Fe(e){return!!e&&"nullValue"in e}function Ue(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Be(e){return!!e&&"mapValue"in e}function ze(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ae(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ze(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ze(e.arrayValue.values[n]);return t}return Object.assign({},e)}function je(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Be(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ze(t)}setAll(e){let t=j.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=ze(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Be(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ne(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Be(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ae(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ve(ze(this.value))}}function We(e){const t=[];return ae(e.fields,((e,n)=>{const i=new j([e]);if(Be(n)){const e=We(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new pe(t)
/**
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
 */}class qe{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new qe(e,0,F.min(),F.min(),F.min(),Ve.empty(),0)}static newFoundDocument(e,t,n,i){return new qe(e,1,t,F.min(),n,i,0)}static newNoDocument(e,t){return new qe(e,2,t,F.min(),F.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,F.min(),F.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class $e{constructor(e,t){this.position=e,this.inclusive=t}}function He(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?V.comparator(V.fromName(o.referenceValue),n.key):Ae(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ge(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ne(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Ke{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Qe{}class Ye extends Qe{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new st(e,t,n):"array-contains"===t?new ct(e,n):"in"===t?new ut(e,n):"not-in"===t?new ht(e,n):"array-contains-any"===t?new dt(e,n):new Ye(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ot(e,n):new at(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ae(t,this.value)):null!==t&&Ce(this.value)===Ce(t)&&this.matchesComparison(Ae(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Je extends Qe{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Je(e,t)}matches(e){return Ze(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ze(e){return"and"===e.op}function et(e){return tt(e)&&Ze(e)}function tt(e){for(const t of e.filters)if(t instanceof Je)return!1;return!0}function nt(e){if(e instanceof Ye)return e.field.canonicalString()+e.op.toString()+Re(e.value);if(et(e))return e.filters.map((e=>nt(e))).join(",");{const t=e.filters.map((e=>nt(e))).join(",");return`${e.op}(${t})`}}function it(e,t){return e instanceof Ye?function(e,t){return t instanceof Ye&&e.op===t.op&&e.field.isEqual(t.field)&&Ne(e.value,t.value)}(e,t):e instanceof Je?function(e,t){return t instanceof Je&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&it(n,t.filters[i])),!0)}(e,t):void v()}function rt(e){return e instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Re(e.value)}`}(e):e instanceof Je?function(e){return e.op.toString()+" {"+e.getFilters().map(rt).join(" ,")+"}"}(e):"Filter"}class st extends Ye{constructor(e,t,n){super(e,t,n),this.key=V.fromName(n.referenceValue)}matches(e){const t=V.comparator(e.key,this.key);return this.matchesComparison(t)}}class ot extends Ye{constructor(e,t){super(e,"in",t),this.keys=lt("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class at extends Ye{constructor(e,t){super(e,"not-in",t),this.keys=lt("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>V.fromName(e.referenceValue)))}class ct extends Ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Me(t)&&_e(t.arrayValue,this.value)}}class ut extends Ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&_e(this.value.arrayValue,t)}}class ht extends Ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(_e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!_e(this.value.arrayValue,t)}}class dt extends Ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Me(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>_e(this.value.arrayValue,e)))}}
/**
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
 */class ft{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.dt=null}}function pt(e,t=null,n=[],i=[],r=null,s=null,o=null){return new ft(e,t,n,i,r,s,o)}function mt(e){const t=b(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>nt(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ee(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Re(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Re(e))).join(",")),t.dt=e}return t.dt}function gt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xe(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!it(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ge(e.startAt,t.startAt)&&Ge(e.endAt,t.endAt)}function yt(e){return V.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */
class vt{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function wt(e,t,n,i,r,s,o,a){return new vt(e,t,n,i,r,s,o,a)}function bt(e){return new vt(e)}function xt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Et(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function kt(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Tt(e){return null!==e.collectionGroup}function St(e){const t=b(e);if(null===t.wt){t.wt=[];const e=kt(t),n=Et(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Ke(e)),t.wt.push(new Ke(j.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Ke(j.keyField(),e))}}}return t.wt}function It(e){const t=b(e);if(!t._t)if("F"===t.limitType)t._t=pt(t.path,t.collectionGroup,St(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of St(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Ke(n.field,t))}const n=t.endAt?new $e(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new $e(t.startAt.position,t.startAt.inclusive):null;t._t=pt(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Ct(e,t){t.getFirstInequalityField(),kt(e);const n=e.filters.concat([t]);return new vt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Nt(e,t,n){return new vt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function _t(e,t){return gt(It(e),It(t))&&e.limitType===t.limitType}function At(e){return`${mt(It(e))}|lt:${e.limitType}`}function Lt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>rt(e))).join(", ")}]`),ee(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Re(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Re(e))).join(",")),`Target(${t})`}(It(e))}; limitType=${e.limitType})`}function Rt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):V.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of St(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=He(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,St(e),t))&&!(e.endAt&&!function(e,t,n){const i=He(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,St(e),t))}(e,t)}function Ot(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Dt(e){return(t,n)=>{let i=!1;for(const r of St(e)){const e=Pt(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function Pt(e,t,n){const i=e.field.isKeyField()?V.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Ae(i,r):v()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return v()}}
/**
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
 */class Mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ae(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return le(this.inner)}size(){return this.innerSize}}
/**
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
 */const Ft=new ce(V.comparator);function Ut(){return Ft}const Bt=new ce(V.comparator);function zt(...e){let t=Bt;for(const n of e)t=t.insert(n.key,n);return t}function jt(e){let t=Bt;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Vt(){return qt()}function Wt(){return qt()}function qt(){return new Mt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const $t=new ce(V.comparator),Ht=new de(V.comparator);function Gt(...e){let t=Ht;for(const n of e)t=t.add(n);return t}const Kt=new de(D);function Xt(){return Kt}
/**
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
 */function Qt(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:te(t)?"-0":t}}function Yt(e){return{integerValue:""+e}}function Jt(e,t){return ne(t)?Yt(t):Qt(e,t)}
/**
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
 */class Zt{constructor(){this._=void 0}}function en(e,t,n){return e instanceof rn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&xe(t)&&(t=Ee(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof sn?on(e,t):e instanceof an?ln(e,t):function(e,t){const n=nn(e,t),i=un(n)+un(e.gt);return Pe(n)&&Pe(e.gt)?Yt(i):Qt(e.serializer,i)}(e,t)}function tn(e,t,n){return e instanceof sn?on(e,t):e instanceof an?ln(e,t):n}function nn(e,t){var n;return e instanceof cn?Pe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class rn extends Zt{}class sn extends Zt{constructor(e){super(),this.elements=e}}function on(e,t){const n=hn(t);for(const t of e.elements)n.some((e=>Ne(e,t)))||n.push(t);return{arrayValue:{values:n}}}class an extends Zt{constructor(e){super(),this.elements=e}}function ln(e,t){let n=hn(t);for(const t of e.elements)n=n.filter((e=>!Ne(e,t)));return{arrayValue:{values:n}}}class cn extends Zt{constructor(e,t){super(),this.serializer=e,this.gt=t}}function un(e){return we(e.integerValue||e.doubleValue)}function hn(e){return Me(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class dn{constructor(e,t){this.version=e,this.transformResults=t}}class fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class mn{}function gn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new In(e.key,fn.none()):new xn(e.key,e.data,fn.none());{const n=e.data,i=Ve.empty();let r=new de(j.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new En(e.key,i,new pe(r.toArray()),fn.none())}}function yn(e,t,n){e instanceof xn?function(e,t,n){const i=e.value.clone(),r=Tn(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof En?function(e,t,n){if(!pn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Tn(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(kn(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function vn(e,t,n,i){return e instanceof xn?function(e,t,n,i){if(!pn(e.precondition,t))return n;const r=e.value.clone(),s=Sn(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof En?function(e,t,n,i){if(!pn(e.precondition,t))return n;const r=Sn(e.fieldTransforms,i,t),s=t.data;return s.setAll(kn(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return pn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function wn(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=nn(i.transform,e||null);null!=r&&(null===n&&(n=Ve.empty()),n.set(i.field,r))}return n||null}function bn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&P(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof sn&&t instanceof sn||e instanceof an&&t instanceof an?P(e.elements,t.elements,Ne):e instanceof cn&&t instanceof cn?Ne(e.gt,t.gt):e instanceof rn&&t instanceof rn}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class xn extends mn{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class En extends mn{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function kn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Tn(e,t,n){const i=new Map;w(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,tn(o,a,n[r]))}return i}function Sn(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,en(e,s,t))}return i}class In extends mn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cn extends mn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Nn{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&yn(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=vn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=vn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wt();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=gn(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Gt())}isEqual(e){return this.batchId===e.batchId&&P(this.mutations,e.mutations,((e,t)=>bn(e,t)))&&P(this.baseMutations,e.baseMutations,((e,t)=>bn(e,t)))}}class _n{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){w(e.mutations.length===n.length);let i=$t;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new _n(e,t,n,i)}}
/**
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
 */class An{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class Ln{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var Rn,On;function Dn(e){switch(e){default:return v();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Pn(e){if(void 0===e)return m("GRPC error has no .code"),x.UNKNOWN;switch(e){case Rn.OK:return x.OK;case Rn.CANCELLED:return x.CANCELLED;case Rn.UNKNOWN:return x.UNKNOWN;case Rn.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Rn.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Rn.INTERNAL:return x.INTERNAL;case Rn.UNAVAILABLE:return x.UNAVAILABLE;case Rn.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Rn.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Rn.NOT_FOUND:return x.NOT_FOUND;case Rn.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Rn.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Rn.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Rn.ABORTED:return x.ABORTED;case Rn.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Rn.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Rn.DATA_LOSS:return x.DATA_LOSS;default:return v()}}(On=Rn||(Rn={}))[On.OK=0]="OK",On[On.CANCELLED=1]="CANCELLED",On[On.UNKNOWN=2]="UNKNOWN",On[On.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",On[On.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",On[On.NOT_FOUND=5]="NOT_FOUND",On[On.ALREADY_EXISTS=6]="ALREADY_EXISTS",On[On.PERMISSION_DENIED=7]="PERMISSION_DENIED",On[On.UNAUTHENTICATED=16]="UNAUTHENTICATED",On[On.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",On[On.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",On[On.ABORTED=10]="ABORTED",On[On.OUT_OF_RANGE=11]="OUT_OF_RANGE",On[On.UNIMPLEMENTED=12]="UNIMPLEMENTED",On[On.INTERNAL=13]="INTERNAL",On[On.UNAVAILABLE=14]="UNAVAILABLE",On[On.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Mn{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fn}static getOrCreateInstance(){return null===Fn&&(Fn=new Mn),Fn}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Fn=null;
/**
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
 */function Un(){return new TextEncoder}
/**
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
 */const Bn=new(0,l.Integer)([4294967295,4294967295],0);function zn(e){const t=Un().encode(e),n=new(0,l.Md5);return n.update(t),new Uint8Array(n.digest())}function jn(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new(0,l.Integer)([n,i],0),new(0,l.Integer)([r,s],0)]}class Vn{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Wn(`Invalid padding: ${t}`);if(n<0)throw new Wn(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Wn(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Wn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=l.Integer.fromNumber(this.It)}Et(e,t,n){let i=e.add(t.multiply(l.Integer.fromNumber(n)));return 1===i.compare(Bn)&&(i=new(0,l.Integer)([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=zn(e),[n,i]=jn(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new Vn(r,i,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=zn(e),[n,i]=jn(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class qn{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,$n.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qn(F.min(),i,new ce(D),Ut(),Gt())}}class $n{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new $n(n,t,Gt(),Gt(),Gt())}}
/**
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
 */class Hn{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class Gn{constructor(e,t){this.targetId=e,this.Vt=t}}class Kn{constructor(e,t,n=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Xn{constructor(){this.St=0,this.Dt=Jn(),this.Ct=ge.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Gt(),t=Gt(),n=Gt();return this.Dt.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:v()}})),new $n(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Jn()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Qn{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ut(),this.zt=Yn(),this.Wt=new ce(D)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:v()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,r=this.se(n);if(r){const s=r.target;if(yt(s))if(0===i){const e=new V(s.path);this.Yt(n,e,qe.newNoDocument(e,F.min()))}else w(1===i);else{const r=this.ie(n);if(r!==i){const i=this.re(e,r);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Mn.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,r,s,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(i=null==u?void 0:u.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(s=null===(r=null==u?void 0:u.bits)||void 0===r?void 0:r.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}(i,r,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=n;let a,l;try{a=be(r).toUint8Array()}catch(e){if(e instanceof me)return g("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new Vn(a,s,o)}catch(e){return g(e instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const r=this.Gt.ue(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const r=this.se(i);if(r){if(n.current&&yt(r.target)){const t=new V(r.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,qe.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=Gt();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new qn(e,t,this.Wt,this.jt,n);return this.jt=Ut(),this.zt=Yn(),this.Wt=new ce(D),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Xn,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new de(D),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Xn),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Yn(){return new ce(V.comparator)}function Jn(){return new ce(V.comparator)}const Zn={asc:"ASCENDING",desc:"DESCENDING"},ei={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ti={and:"AND",or:"OR"};class ni{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ii(e,t){return e.useProto3Json||ee(t)?t:{value:t}}function ri(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function si(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function oi(e,t){return ri(e,t.toTimestamp())}function ai(e){return w(!!e),F.fromTimestamp(function(e){const t=ve(e);return new M(t.seconds,t.nanos)}(e))}function li(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ci(e){const t=B.fromString(e);return w(_i(t)),t}function ui(e,t){return li(e.databaseId,t.path)}function hi(e,t){const n=ci(t);if(n.get(1)!==e.databaseId.projectId)throw new E(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new V(mi(n))}function di(e,t){return li(e.databaseId,t)}function fi(e){const t=ci(e);return 4===t.length?B.emptyPath():mi(t)}function pi(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mi(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function gi(e,t,n){return{name:ui(e,t),fields:n.value.mapValue.fields}}function yi(e,t){let n;if(t instanceof xn)n={update:gi(e,t.key,t.value)};else if(t instanceof In)n={delete:ui(e,t.key)};else if(t instanceof En)n={update:gi(e,t.key,t.data),updateMask:Ni(t.fieldMask)};else{if(!(t instanceof Cn))return v();n={verify:ui(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof rn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof an)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof cn)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw v()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:oi(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function vi(e,t){return{documents:[di(e,t.path)]}}function wi(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=di(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=di(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return Ci(Je.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Si(e.field),direction:Ei(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ii(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function bi(e){let t=fi(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){w(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=xi(e);return t instanceof Je&&et(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Ke(Ii(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ee(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new $e(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new $e(n,t)}(n.endAt)),wt(t,r,o,s,a,"F",l,c)}function xi(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ii(e.unaryFilter.field);return Ye.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ii(e.unaryFilter.field);return Ye.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(e.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ii(e.unaryFilter.field);return Ye.create(r,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(e):void 0!==e.fieldFilter?function(e){return Ye.create(Ii(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Je.create(e.compositeFilter.filters.map((e=>xi(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))}(e):v()}function Ei(e){return Zn[e]}function ki(e){return ei[e]}function Ti(e){return ti[e]}function Si(e){return{fieldPath:e.canonicalString()}}function Ii(e){return j.fromServerFormat(e.fieldPath)}function Ci(e){return e instanceof Ye?function(e){if("=="===e.op){if(Ue(e.value))return{unaryFilter:{field:Si(e.field),op:"IS_NAN"}};if(Fe(e.value))return{unaryFilter:{field:Si(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ue(e.value))return{unaryFilter:{field:Si(e.field),op:"IS_NOT_NAN"}};if(Fe(e.value))return{unaryFilter:{field:Si(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Si(e.field),op:ki(e.op),value:e.value}}}(e):e instanceof Je?function(e){const t=e.getFilters().map((e=>Ci(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ti(e.op),filters:t}}}(e):v()}function Ni(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function _i(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Ai{constructor(e,t,n,i,r=F.min(),s=F.min(),o=ge.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class Li{constructor(e){this.fe=e}}function Ri(e){const t=bi({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Nt(t,t.limit,"L"):t}
/**
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
 */class Oi{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(we(e.integerValue));else if("doubleValue"in e){const n=we(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),te(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(be(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?je(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):v()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),V.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Oi.Ve=new Oi;
/**
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
 */
class Di{constructor(){this.rn=new Pi}addToCollectionParentIndex(e,t){return this.rn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(H.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(H.min())}updateCollectionGroup(e,t,n){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class Pi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new de(B.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new de(B.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Mi{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Mi(e,Mi.DEFAULT_COLLECTION_PERCENTILE,Mi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Mi.DEFAULT_COLLECTION_PERCENTILE=10,Mi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mi.DEFAULT=new Mi(41943040,Mi.DEFAULT_COLLECTION_PERCENTILE,Mi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mi.DISABLED=new Mi(-1,0,0);
/**
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
 */
class Fi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Fi(0)}static Mn(){return new Fi(-1)}}
/**
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
 */
/**
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
 */
class Ui{constructor(){this.changes=new Mt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Y.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Bi{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class zi{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&vn(n.mutation,e,pe.empty(),M.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Gt()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Gt()){const i=Vt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=zt();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Vt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Gt())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=Ut();const s=qt(),o=qt();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof En)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),vn(o.mutation,t,o.mutation.getFieldMask(),M.now())):s.set(t.key,pe.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Bi(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=qt();let i=new ce(((e,t)=>e-t)),r=Gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||pe.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Gt()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Wt();l.forEach((e=>{if(!r.has(e)){const i=gn(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Y.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return V.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):Y.resolve(Vt());let o=-1,a=r;return s.next((t=>Y.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Y.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Gt()))).next((e=>({batchId:o,changes:jt(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next((e=>{let t=zt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=zt();return this.indexManager.getCollectionParents(e,i).next((s=>Y.forEach(s,(s=>{const o=function(e,t){return new vt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,qe.newInvalidDocument(i)))}));let n=zt();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&vn(s.mutation,r,pe.empty(),M.now()),Rt(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
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
 */class ji{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Y.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:ai(n.createTime)}),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Ri(e.bundledQuery),readTime:ai(e.readTime)}}(t)),Y.resolve()}}
/**
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
 */class Vi{constructor(){this.overlays=new ce(V.comparator),this.ls=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Vt();return Y.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),Y.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Y.resolve()}getOverlaysForCollection(e,t,n){const i=Vt(),r=t.length+1,s=new V(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new ce(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Vt(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Vt(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return Y.resolve(o)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new An(t,n));let r=this.ls.get(t);void 0===r&&(r=Gt(),this.ls.set(t,r)),this.ls.set(t,r.add(n.key))}}
/**
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
 */class Wi{constructor(){this.fs=new de(qi.ds),this.ws=new de(qi._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new qi(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new qi(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new V(new B([])),n=new qi(t,e),i=new qi(t,e+1),r=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),r.push(e.key)})),r}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new V(new B([])),n=new qi(t,e),i=new qi(t,e+1);let r=Gt();return this.ws.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new qi(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class qi{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return V.comparator(e.key,t.key)||D(e.As,t.As)}static _s(e,t){return D(e.As,t.As)||V.comparator(e.key,t.key)}}
/**
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
 */class $i{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new de(qi.ds)}checkEmpty(e){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Nn(r,t,n,i);this.mutationQueue.push(s);for(const t of i)this.Rs=this.Rs.add(new qi(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(e,t){return Y.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new qi(t,0),i=new qi(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);r.push(t)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(D);return t.forEach((e=>{const t=new qi(e,0),i=new qi(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),Y.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;V.isDocumentKey(r)||(r=r.child(""));const s=new qi(new V(r),0);let o=new de(D);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.As)),!0)}),s),Y.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){w(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Y.forEach(t.mutations,(i=>{const r=new qi(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new qi(t,0),i=this.Rs.firstAfterOrEqual(n);return Y.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class Hi{constructor(e){this.Ds=e,this.docs=new ce(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Y.resolve(n?n.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let n=Ut();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():qe.newInvalidDocument(e))})),Y.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Ut();const s=t.path,o=new V(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||G($(o),n)<=0||(i.has(o.key)||Rt(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(e,t,n,i){v()}Cs(e,t){return Y.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Gi(this)}getSize(e){return Y.resolve(this.size)}}class Gi extends Ui{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),Y.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
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
 */class Ki{constructor(e){this.persistence=e,this.xs=new Mt((e=>mt(e)),gt),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Wi,this.targetCount=0,this.Ms=Fi.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Y.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Fi(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Fn(t),Y.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Y.waitFor(r).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Y.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Y.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Y.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Y.resolve(n)}containsKey(e,t){return Y.resolve(this.ks.containsKey(t))}}
/**
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
 */class Xi{constructor(e,t){this.$s={},this.overlays={},this.Os=new Z(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Ki(this),this.indexManager=new Di,this.remoteDocumentCache=function(e){return new Hi(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Li(t),this.qs=new ji(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vi,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new $i(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new Qi(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return Y.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Qi extends X{constructor(e){super(),this.currentSequenceNumber=e}}class Yi{constructor(e){this.persistence=e,this.Qs=new Wi,this.js=null}static zs(e){return new Yi(e)}get Ws(){if(this.js)return this.js;throw v()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Y.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ws,(n=>{const i=V.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,F.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Y.or([()=>Y.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
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
 */
class Ji{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}static Li(e,t){let n=Gt(),i=Gt();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Ji(e,t.fromCache,n,i)}}
/**
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
 */class Zi{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((r=>r||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(xt(t))return Y.resolve(null);let n=It(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Nt(t,null,"F"),n=It(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=Gt(...i);return this.Ui.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,i);return this.zi(t,s,r,n.readTime)?this.Ki(e,Nt(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,i){return xt(t)||i.isEqual(F.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((r=>{const s=this.ji(t,r);return this.zi(t,s,n,i)?this.Qi(e,t):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lt(t)),this.Wi(e,s,t,q(i,-1)))}))}ji(e,t){let n=new de(Dt(e));return t.forEach(((t,i)=>{Rt(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,t){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Lt(t)),this.Ui.getDocumentsMatchingQuery(e,t,H.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class er{constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new ce(D),this.Yi=new Mt((e=>mt(e)),gt),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zi(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function tr(e,t,n,i){return new er(e,t,n,i)}async function nr(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=Gt();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function ir(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function rr(e,t,n){let i=Gt(),r=Gt();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Ut();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(F.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:i,sr:r}}))}function sr(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function or(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((r=>r?(i=r,Y.resolve(i)):n.Bs.allocateTargetId(e).next((r=>(i=new Ai(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function ar(e,t,n){const i=b(e),r=i.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!J(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(r.target)}function lr(e,t,n){const i=b(e);let r=F.min(),s=Gt();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=b(e),r=i.Yi.get(n);return void 0!==r?Y.resolve(i.Ji.get(r)):i.Bs.getTargetData(t,n)}(i,e,It(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?r:F.min(),n?s:Gt()))).next((e=>(cr(i,Ot(t),e),{documents:e,ir:s})))))}function cr(e,t,n){let i=e.Xi.get(t)||F.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class ur{constructor(){this.activeTargetIds=Xt()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hr{constructor(){this.Hr=new ur,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ur,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class dr{Yr(e){}shutdown(){}}
/**
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
 */class fr{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let pr=null;function mr(){return null===pr?pr=268435456+Math.round(2147483648*Math.random()):pr++,"0x"+pr.toString(16)
/**
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
 */}const gr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class yr{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
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
 */const vr="WebChannelConnection";class wr extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,i,r){const s=mr(),o=this.To(e,t);p("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,i,r),this.Ao(e,o,a,n).then((t=>(p("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw g("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,r,s){return this.Io(e,t,n,i,r)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=gr[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,i){const r=mr();return new Promise(((s,o)=>{const a=new(0,l.XhrIo);a.setWithCredentials(!0),a.listenOnce(l.EventType.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case l.ErrorCode.NO_ERROR:const t=a.getResponseJson();p(vr,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case l.ErrorCode.TIMEOUT:p(vr,`RPC '${e}' ${r} timed out`),o(new E(x.DEADLINE_EXCEEDED,"Request time out"));break;case l.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(p(vr,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(t)>=0?t:x.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(x.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p(vr,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);p(vr,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const i=mr(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,l.createWebChannelTransport)(),o=(0,l.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new(0,l.FetchXmlHttpFactory)({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=r.join("");p(vr,`Creating RPC '${e}' stream ${i}: ${u}`,a);const h=s.createWebChannel(u,a);let d=!1,f=!1;const m=new yr({ro:t=>{f?p(vr,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(p(vr,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),p(vr,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},oo:()=>h.close()}),y=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return y(h,l.WebChannel.EventType.OPEN,(()=>{f||p(vr,`RPC '${e}' stream ${i} transport opened.`)})),y(h,l.WebChannel.EventType.CLOSE,(()=>{f||(f=!0,p(vr,`RPC '${e}' stream ${i} transport closed`),m.wo())})),y(h,l.WebChannel.EventType.ERROR,(t=>{f||(f=!0,g(vr,`RPC '${e}' stream ${i} transport errored:`,t),m.wo(new E(x.UNAVAILABLE,"The operation could not be completed")))})),y(h,l.WebChannel.EventType.MESSAGE,(t=>{var n;if(!f){const r=t.data[0];w(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){p(vr,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Rn[e];if(void 0!==t)return Pn(t)}(t),r=o.message;void 0===n&&(n=x.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),f=!0,m.wo(new E(n,r)),h.close()}else p(vr,`RPC '${e}' stream ${i} received:`,r),m._o(r)}})),y(o,l.Event.STAT_EVENT,(t=>{t.stat===l.Stat.PROXY?p(vr,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===l.Stat.NOPROXY&&p(vr,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{m.fo()}),0),m}}
/**
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
 */
/**
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
 */function br(){return"undefined"!=typeof document?document:null}
/**
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
 */function xr(e){return new ni(e,!0)}
/**
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
 */class Er{constructor(e,t,n=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
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
 */class kr{constructor(e,t,n,i,r,s,o,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Er(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new E(x.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tr extends kr{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(w(void 0===t||"string"==typeof t),ge.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),ge.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?x.UNKNOWN:Pn(e.code);return new E(t,e.message||"")}(o);n=new Kn(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=hi(e,i.document.name),s=ai(i.document.updateTime),o=i.document.createTime?ai(i.document.createTime):F.min(),a=new Ve({mapValue:{fields:i.document.fields}}),l=qe.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Hn(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=hi(e,i.document),s=i.readTime?ai(i.readTime):F.min(),o=qe.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Hn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=hi(e,i.document),s=i.removedTargetIds||[];n=new Hn([],s,r,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:r}=e,s=new Ln(i,r),o=e.targetId;n=new Gn(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return F.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?ai(t.readTime):F.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=pi(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=yt(i)?{documents:vi(e,i)}:{query:wi(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=si(e,t.resumeToken);const i=ii(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(F.min())>0){n.readTime=ri(e,t.snapshotVersion.toTimestamp());const i=ii(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=pi(this.serializer),t.removeTarget=e,this.Wo(t)}}class Sr extends kr{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(w(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ai(e.updateTime):ai(t);return n.isEqual(F.min())&&(n=ai(t)),new dn(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=ai(e.commitTime);return this.listener.cu(n,t)}return w(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=pi(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>yi(this.serializer,e)))};this.Wo(t)}}
/**
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
 */class Ir extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new E(x.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Io(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(x.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.vo(e,t,n,r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(x.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Cr{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(m(t),this.mu=!1):p("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
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
 */class Nr{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Fr(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.vu.add(4),await Ar(t),t.bu.set("Unknown"),t.vu.delete(4),await _r(t)}(this))}))})),this.bu=new Cr(n,i)}}async function _r(e){if(Fr(e))for(const t of e.Ru)await t(!0)}async function Ar(e){for(const t of e.Ru)await t(!1)}function Lr(e,t){const n=b(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Mr(n)?Pr(n):ts(n).Ko()&&Or(n,t))}function Rr(e,t){const n=b(e),i=ts(n);n.Au.delete(t),i.Ko()&&Dr(n,t),0===n.Au.size&&(i.Ko()?i.jo():Fr(n)&&n.bu.set("Unknown"))}function Or(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ts(e).su(t)}function Dr(e,t){e.Vu.qt(t),ts(e).iu(t)}function Pr(e){e.Vu=new Qn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),ts(e).start(),e.bu.gu()}function Mr(e){return Fr(e)&&!ts(e).Uo()&&e.Au.size>0}function Fr(e){return 0===b(e).vu.size}function Ur(e){e.Vu=void 0}async function Br(e){e.Au.forEach(((t,n)=>{Or(e,t)}))}async function zr(e,t){Ur(e),Mr(e)?(e.bu.Iu(t),Pr(e)):e.bu.set("Unknown")}async function jr(e,t,n){if(e.bu.set("Online"),t instanceof Kn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Vr(e,n)}else if(t instanceof Hn?e.Vu.Ht(t):t instanceof Gn?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(F.min()))try{const t=await ir(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.Au.get(i);r&&e.Au.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(ge.EMPTY_BYTE_STRING,i.snapshotVersion)),Dr(e,t);const r=new Ai(i.target,t,n,i.sequenceNumber);Or(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Vr(e,t)}}async function Vr(e,t,n){if(!J(t))throw t;e.vu.add(1),await Ar(e),e.bu.set("Offline"),n||(n=()=>ir(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await _r(e)}))}function Wr(e,t){return t().catch((n=>Vr(e,n,t)))}async function qr(e){const t=b(e),n=ns(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;$r(t);)try{const e=await sr(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,Hr(t,e)}catch(e){await Vr(t,e)}Gr(t)&&Kr(t)}function $r(e){return Fr(e)&&e.Eu.length<10}function Hr(e,t){e.Eu.push(t);const n=ns(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Gr(e){return Fr(e)&&!ns(e).Uo()&&e.Eu.length>0}function Kr(e){ns(e).start()}async function Xr(e){ns(e).hu()}async function Qr(e){const t=ns(e);for(const n of e.Eu)t.uu(n.mutations)}async function Yr(e,t,n){const i=e.Eu.shift(),r=_n.from(i,t,n);await Wr(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await qr(e)}async function Jr(e,t){t&&ns(e).ou&&await async function(e,t){if(Dn(n=t.code)&&n!==x.ABORTED){const n=e.Eu.shift();ns(e).Qo(),await Wr(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await qr(e)}var n}(e,t),Gr(e)&&Kr(e)}async function Zr(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Fr(n);n.vu.add(3),await Ar(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await _r(n)}async function es(e,t){const n=b(e);t?(n.vu.delete(2),await _r(n)):t||(n.vu.add(2),await Ar(n),n.bu.set("Unknown"))}function ts(e){return e.Su||(e.Su=function(e,t,n){const i=b(e);return i.fu(),new Tr(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Br.bind(null,e),ao:zr.bind(null,e),nu:jr.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Mr(e)?Pr(e):e.bu.set("Unknown")):(await e.Su.stop(),Ur(e))}))),e.Su}function ns(e){return e.Du||(e.Du=function(e,t,n){const i=b(e);return i.fu(),new Sr(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Xr.bind(null,e),ao:Jr.bind(null,e),au:Qr.bind(null,e),cu:Yr.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await qr(e)):(await e.Du.stop(),e.Eu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
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
 */}class is{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new is(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rs(e,t){if(m("AsyncQueue",`${t}: ${e}`),J(e))return new E(x.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class ss{constructor(e){this.comparator=e?(t,n)=>e(t,n)||V.comparator(t.key,n.key):(e,t)=>V.comparator(e.key,t.key),this.keyedMap=zt(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new ss(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ss))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ss;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class os{constructor(){this.Cu=new ce(V.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):v():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class as{constructor(e,t,n,i,r,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new as(e,t,ss.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_t(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
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
 */class ls{constructor(){this.Nu=void 0,this.listeners=[]}}class cs{constructor(){this.queries=new Mt((e=>At(e)),_t),this.onlineState="Unknown",this.ku=new Set}}async function us(e,t){const n=b(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new ls),r)try{s.Nu=await n.onListen(i)}catch(e){const n=rs(e,`Initialization of query '${Lt(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&ps(n)}async function hs(e,t){const n=b(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function ds(e,t){const n=b(e);let i=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.$u(e)&&(i=!0);r.Nu=e}}i&&ps(n)}function fs(e,t,n){const i=b(e),r=i.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);i.queries.delete(t)}function ps(e){e.ku.forEach((e=>{e.next()}))}class ms{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new as(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
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
 */
/**
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
 */
class gs{constructor(e){this.key=e}}class ys{constructor(e){this.key=e}}class vs{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Gt(),this.mutatedKeys=Gt(),this.tc=Dt(e),this.ec=new ss(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new os,i=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=Rt(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||l&&this.tc(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==r.length||a?{snapshot:new as(this.query,e.ec,i,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new os,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Gt(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new ys(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new gs(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Gt();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return as.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class ws{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class bs{constructor(e){this.key=e,this.fc=!1}}class xs{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Mt((e=>At(e)),_t),this._c=new Map,this.mc=new Set,this.gc=new ce(V.comparator),this.yc=new Map,this.Ic=new Wi,this.Tc={},this.Ec=new Map,this.Ac=Fi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Es(e,t){const n=zs(e);let i,r;const s=n.wc.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.lc();else{const e=await or(n.localStore,It(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await ks(n,t,i,"current"===s,e.resumeToken),n.isPrimaryClient&&Lr(n.remoteStore,e)}return r}async function ks(e,t,n,i,r){e.Rc=(t,n,i)=>async function(e,t,n,i){let r=t.view.sc(n);r.zi&&(r=await lr(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return Ds(e,t.targetId,o.cc),o.snapshot}(e,t,n,i);const s=await lr(e.localStore,t,!0),o=new vs(t,s.ir),a=o.sc(s.documents),l=$n.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),c=o.applyChanges(a,e.isPrimaryClient,l);Ds(e,n,c.cc);const u=new ws(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Ts(e,t){const n=b(e),i=n.wc.get(t),r=n._c.get(i.targetId);if(r.length>1)return n._c.set(i.targetId,r.filter((e=>!_t(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ar(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Rr(n.remoteStore,i.targetId),Rs(n,i.targetId)})).catch(Q)):(Rs(n,i.targetId),await ar(n.localStore,i.targetId,!0))}async function Ss(e,t){const n=b(e);try{const e=await function(e,t){const n=b(e),i=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const l=r.get(a);if(!l)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(ge.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,i)),r=r.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,s)&&o.push(n.Bs.updateTargetData(e,c))}));let a=Ut(),l=Gt();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(rr(e,s,t.documentUpdates).next((e=>{a=e.nr,l=e.sr}))),!i.isEqual(F.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Y.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ji=r,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?w(i.fc):e.removedDocuments.size>0&&(w(i.fc),i.fc=!1))})),await Fs(n,e,t)}catch(e){await Q(e)}}function Is(e,t,n){const i=b(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const r=i.view.Mu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=b(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&ps(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Cs(e,t,n){const i=b(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.yc.get(t),s=r&&r.key;if(s){let e=new ce(V.comparator);e=e.insert(s,qe.newNoDocument(s,F.min()));const n=Gt().add(s),r=new qn(F.min(),new Map,new ce(D),e,n);await Ss(i,r),i.gc=i.gc.remove(s),i.yc.delete(t),Ms(i)}else await ar(i.localStore,t,!1).then((()=>Rs(i,t,n))).catch(Q)}async function Ns(e,t){const n=b(e),i=t.batch.batchId;try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Y.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);w(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Gt();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Ls(n,i,null),As(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Fs(n,e)}catch(e){await Q(e)}}async function _s(e,t,n){const i=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(w(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Ls(i,t,n),As(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Fs(i,e)}catch(n){await Q(n)}}function As(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Ls(e,t,n){const i=b(e);let r=i.Tc[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Tc[i.currentUser.toKey()]=r}}function Rs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Os(e,t)}))}function Os(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Rr(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Ms(e))}function Ds(e,t,n){for(const i of n)i instanceof gs?(e.Ic.addReference(i.key,t),Ps(e,i)):i instanceof ys?(p("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Os(e,i.key)):v()}function Ps(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(p("SyncEngine","New document in limbo: "+n),e.mc.add(i),Ms(e))}function Ms(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new V(B.fromString(t)),i=e.Ac.next();e.yc.set(i,new bs(n)),e.gc=e.gc.insert(n,i),Lr(e.remoteStore,new Ai(It(bt(n.path)),i,"TargetPurposeLimboResolution",Z.ct))}}async function Fs(e,t,n){const i=b(e),r=[],s=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{o.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=Ji.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.dc.nu(r),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Y.forEach(t,(t=>Y.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Y.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!J(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,r)}}}(i.localStore,s))}async function Us(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await nr(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new E(x.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Fs(n,e.er)}}function Bs(e,t){const n=b(e),i=n.yc.get(t);if(i&&i.fc)return Gt().add(i.key);{let e=Gt();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function zs(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ss.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bs.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cs.bind(null,t),t.dc.nu=ds.bind(null,t.eventManager),t.dc.Pc=fs.bind(null,t.eventManager),t}function js(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ns.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_s.bind(null,t),t}class Vs{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return tr(this.persistence,new Zi,e.initialUser,this.serializer)}createPersistence(e){return new Xi(Yi.zs,this.serializer)}createSharedClientState(e){return new hr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ws{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Is(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Us.bind(null,this.syncEngine),await es(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cs}createDatastore(e){const t=xr(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new wr(i));var i;return function(e,t,n,i){return new Ir(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,i,r,s;return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Is(this.syncEngine,e,0),s=fr.D()?new fr:new dr,new Nr(t,n,i,r,s)}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new xs(e,t,n,i,r,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);p("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ar(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class qs{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */
/**
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
 */
class $s{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=O.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=rs(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Hs(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await nr(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Gs(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Xs(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Zr(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Zr(t.remoteStore,n))),e._onlineComponents=t}function Ks(e){return"FirebaseError"===e.name?e.code===x.FAILED_PRECONDITION||e.code===x.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Xs(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ks(n))throw n;g("Error using user provided cache. Falling back to memory cache: "+n),await Hs(e,new Vs)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await Hs(e,new Vs);return e._offlineComponents}async function Qs(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await Gs(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await Gs(e,new Ws))),e._onlineComponents}function Ys(e){return Qs(e).then((e=>e.syncEngine))}async function Js(e){const t=await Qs(e),n=t.eventManager;return n.onListen=Es.bind(null,t.syncEngine),n.onUnlisten=Ts.bind(null,t.syncEngine),n}function Zs(e,t,n={}){const i=new k;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new qs({next:n=>{t.enqueueAndForget((()=>hs(e,o))),n.fromCache&&"server"===i.source?r.reject(new E(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new ms(n,s,{includeMetadataChanges:!0,Ku:!0});return us(e,o)}(await Js(e),e.asyncQueue,t,n,i))),i.promise}
/**
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
 */
function eo(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const to=new Map;
/**
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
 */function no(e,t,n){if(!n)throw new E(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function io(e){if(!V.isDocumentKey(e))throw new E(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ro(e){if(V.isDocumentKey(e))throw new E(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function so(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function oo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=so(e);throw new E(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
class ao{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new E(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new E(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eo(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lo{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ao({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ao(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"firstParty":return new _(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=to.get(e);t&&(p("ComponentProvider","Removing Datastore"),to.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
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
 */
class co{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new co(this.firestore,e,this._key)}}class uo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new uo(this.firestore,e,this._query)}}class ho extends uo{constructor(e,t,n){super(e,t,bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new co(this.firestore,null,new V(e))}withConverter(e){return new ho(this.firestore,e,this._path)}}function fo(e,t,...n){if(e=(0,a.getModularInstance)(e),no("collection","path",t),e instanceof lo){const i=B.fromString(t,...n);return ro(i),new ho(e,null,i)}{if(!(e instanceof co||e instanceof ho))throw new E(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return ro(i),new ho(e.firestore,null,i)}}function po(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=O.A()),no("doc","path",t),e instanceof lo){const i=B.fromString(t,...n);return io(i),new co(e,null,new V(i))}{if(!(e instanceof co||e instanceof ho))throw new E(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return io(i),new co(e.firestore,e instanceof ho?e.converter:null,new V(i))}}
/**
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
 */
class mo{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Er(this,"async_queue_retry"),this.Xc=()=>{const e=br();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=br();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=br();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new k;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!J(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=is.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&v()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class go extends lo{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new mo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wo(this),this._firestoreClient.terminate()}}function yo(e,t){const n="object"==typeof e?e:(0,i.getApp)(),r="string"==typeof e?e:t||"(default)",s=(0,i._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var r;const s=(e=oo(e,lo))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=u.MOCK_USER;else{t=(0,a.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new E(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new I(new T(t,n))}}(s,...e)}return s}function vo(e){return e._firestoreClient||wo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wo(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new Te(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,eo(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new $s(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
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
 */
class bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bo(ge.fromBase64String(e))}catch(e){throw new E(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bo(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class xo{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Eo{constructor(e){this._methodName=e}}
/**
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
 */class ko{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}
/**
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
 */const To=/^__.*__$/;class So{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new En(e,this.data,this.fieldMask,t,this.fieldTransforms):new xn(e,this.data,t,this.fieldTransforms)}}class Io{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new En(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Co(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class No{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new No(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Wo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Co(this.ca)&&To.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class _o{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||xr(e)}ya(e,t,n,i=!1){return new No({ca:e,methodName:t,ga:n,path:j.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ao(e){const t=e._freezeSettings(),n=xr(e._databaseId);return new _o(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Lo(e,t,n,i,r,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,r);Bo("Data must be an object, but it was:",o,i);const a=Fo(i,o);let l,c;if(s.merge)l=new pe(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=zo(t,i,n);if(!o.contains(r))throw new E(x.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);qo(e,r)||e.push(r)}l=new pe(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new So(new Ve(a),l,c)}class Ro extends Eo{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ro}}function Oo(e,t,n,i){const r=e.ya(1,t,n);Bo("Data must be an object, but it was:",r,i);const s=[],o=Ve.empty();ae(i,((e,i)=>{const l=Vo(t,e,n);i=(0,a.getModularInstance)(i);const c=r.da(l);if(i instanceof Ro)s.push(l);else{const e=Mo(i,c);null!=e&&(s.push(l),o.set(l,e))}}));const l=new pe(s);return new Io(o,l,r.fieldTransforms)}function Do(e,t,n,i,r,s){const o=e.ya(1,t,n),l=[zo(t,i,n)],c=[r];if(s.length%2!=0)throw new E(x.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)l.push(zo(t,s[e])),c.push(s[e+1]);const u=[],h=Ve.empty();for(let e=l.length-1;e>=0;--e)if(!qo(u,l[e])){const t=l[e];let n=c[e];n=(0,a.getModularInstance)(n);const i=o.da(t);if(n instanceof Ro)u.push(t);else{const e=Mo(n,i);null!=e&&(u.push(t),h.set(t,e))}}const d=new pe(u);return new Io(h,d,o.fieldTransforms)}function Po(e,t,n,i=!1){return Mo(n,e.ya(i?4:3,t))}function Mo(e,t){if(Uo(e=(0,a.getModularInstance)(e)))return Bo("Unsupported field value:",t,e),Fo(e,t);if(e instanceof Eo)return function(e,t){if(!Co(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Mo(r,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Jt(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=M.fromDate(e);return{timestampValue:ri(t.serializer,n)}}if(e instanceof M){const n=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ri(t.serializer,n)}}if(e instanceof ko)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bo)return{bytesValue:si(t.serializer,e._byteString)};if(e instanceof co){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:li(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${so(e)}`)}(e,t)}function Fo(e,t){const n={};return le(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(e,((e,i)=>{const r=Mo(i,t.ha(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Uo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof ko||e instanceof bo||e instanceof co||e instanceof Eo)}function Bo(e,t,n){if(!Uo(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=so(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}}function zo(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof xo)return t._internalPath;if("string"==typeof t)return Vo(e,t);throw Wo("Field path arguments must be of type string or ",e,!1,void 0,n)}const jo=new RegExp("[~\\*/\\[\\]]");function Vo(e,t,n){if(t.search(jo)>=0)throw Wo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xo(...t.split("."))._internalPath}catch(i){throw Wo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wo(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new E(x.INVALID_ARGUMENT,a+e+l)}function qo(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class $o{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new co(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ho(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Go("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ho extends $o{data(){return super.data()}}function Go(e,t){return"string"==typeof t?Vo(e,t):t instanceof xo?t._internalPath:t._delegate._internalPath}
/**
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
 */function Ko(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xo{}class Qo extends Xo{}function Yo(e,t,...n){let i=[];t instanceof Xo&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof ea)).length,n=e.filter((e=>e instanceof Jo)).length;if(t>1||t>0&&n>0)throw new E(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const t of i)e=t._apply(e);return e}class Jo extends Qo{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Jo(e,t,n)}_apply(e){const t=this._parse(e);return ia(e._query,t),new uo(e.firestore,e.converter,Ct(e._query,t))}_parse(e){const t=Ao(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){na(o,s);const t=[];for(const n of o)t.push(ta(i,e,n));a={arrayValue:{values:t}}}else a=ta(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||na(o,s),a=Po(n,"where",o,"in"===s||"not-in"===s);return Ye.create(r,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Zo(e,t,n){const i=t,r=Go("where",e);return Jo._create(r,i,n)}class ea extends Xo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ea(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const e of i)ia(n,e),n=Ct(n,e)}(e._query,t),new uo(e.firestore,e.converter,Ct(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ta(e,t,n){if("string"==typeof(n=(0,a.getModularInstance)(n))){if(""===n)throw new E(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tt(t)&&-1!==n.indexOf("/"))throw new E(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(B.fromString(n));if(!V.isDocumentKey(i))throw new E(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return De(e,new V(i))}if(n instanceof co)return De(e,n._key);throw new E(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(n)}.`)}function na(e,t){if(!Array.isArray(e)||0===e.length)throw new E(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ia(e,t){if(t.isInequality()){const n=kt(e),i=t.field;if(null!==n&&!n.isEqual(i))throw new E(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const r=Et(e);null!==r&&ra(e,i,r)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ra(e,t,n){if(!n.isEqual(t))throw new E(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sa{convertValue(e,t="none"){switch(Ce(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(be(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ae(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new ko(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ee(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ke(e));default:return null}}convertTimestamp(e){const t=ve(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);w(_i(n));const i=new Se(n.get(1),n.get(3)),r=new V(n.popFirst(5));return i.isEqual(t)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
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
 */function oa(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
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
 */
class aa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class la extends $o{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Go("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ca extends la{data(e={}){return super.data(e)}}class ua{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new aa(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ca(this._firestore,this._userDataWriter,n.key,n,new aa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new ca(e._firestore,e._userDataWriter,n.doc.key,n.doc,new aa(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new ca(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aa(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ha(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ha(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}class da extends sa{constructor(e){super(),this.firestore=e}convertBytes(e){return new bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new co(this.firestore,null,t)}}function fa(e){e=oo(e,uo);const t=oo(e.firestore,go),n=vo(t),i=new da(t);return Ko(e._query),Zs(n,e._query).then((n=>new ua(t,i,e,n)))}function pa(e,t,n,...i){e=oo(e,co);const r=oo(e.firestore,go),s=Ao(r);let o;return o="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof xo?Do(s,"updateDoc",e._key,t,n,i):Oo(s,"updateDoc",e._key,t),ga(r,[o.toMutation(e._key,fn.exists(!0))])}function ma(e,t){const n=oo(e.firestore,go),i=po(e),r=oa(e.converter,t);return ga(n,[Lo(Ao(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,fn.exists(!1))]).then((()=>i))}function ga(e,t){return function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=js(e);try{const e=await function(e,t){const n=b(e),i=M.now(),r=t.reduce(((e,t)=>e.add(t.key)),Gt());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ut(),l=Gt();return n.Zi.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=wn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new En(e.key,t,We(t.value.mapValue),fn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:jt(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new ce(D)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Fs(i,e.changes),await qr(i.remoteStore)}catch(e){const t=rs(e,"Failed to persist write");n.reject(t)}}(await Ys(e),t,n))),n.promise}(vo(e),t)}!function(e,t=!0){!function(e){h=e}(i.SDK_VERSION),(0,i._registerComponent)(new(0,r.Component)("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new go(new C(e.getProvider("auth-internal")),new L(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Se(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,"3.12.0",e),(0,i.registerVersion)(c,"3.12.0","esm2017")}()})),s.register("4bwHs",(function(e,i){t(e.exports,"createWebChannelTransport",(function(){return yi})),t(e.exports,"getStatEventTarget",(function(){return vi})),t(e.exports,"ErrorCode",(function(){return wi})),t(e.exports,"EventType",(function(){return bi})),t(e.exports,"Event",(function(){return xi})),t(e.exports,"Stat",(function(){return Ei})),t(e.exports,"FetchXmlHttpFactory",(function(){return ki})),t(e.exports,"WebChannel",(function(){return Ti})),t(e.exports,"XhrIo",(function(){return Si})),t(e.exports,"Md5",(function(){return Ii})),t(e.exports,"Integer",(function(){return Ci}));var r,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},l=s||self;function c(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f))},w.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function x(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function E(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{l.addEventListener("test",c,t),l.removeEventListener("test",c,t)}catch(e){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}var I=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function C(e,t){return e<t?-1:e>t?1:0}function N(){var e=l.navigator;return e&&(e=e.userAgent)?e:""}function _(e){return-1!=N().indexOf(e)}function A(e){return A[" "](e),e}function L(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}A[" "]=c;var R,O,D=_("Opera"),P=_("Trident")||_("MSIE"),M=_("Edge"),F=M||P,U=_("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!_("Edge"))&&!(_("Trident")||_("MSIE"))&&!_("Edge"),B=-1!=N().toLowerCase().indexOf("webkit")&&!_("Edge");function z(){var e=l.document;return e?e.documentMode:void 0}e:{var j="",V=(O=N(),U?/rv:([^\);]+)(\)|;)/.exec(O):M?/Edge\/([\d\.]+)/.exec(O):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(O):B?/WebKit\/(\S+)/.exec(O):D?/(?:Version)[ \/]?(\S+)/.exec(O):void 0);if(V&&(j=V?V[1]:""),P){var W=z();if(null!=W&&W>parseFloat(j)){R=String(W);break e}}R=j}var q,$={};if(l.document&&P){var H=z();q=H||(parseInt(R,10)||void 0)}else q=void 0;var G=q;function K(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{A(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:X[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.$.h.call(this)}}v(K,k);var X={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++Y,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e){const t={};for(const n in e)t[n]=e[n];return t}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function re(e){this.src=e,this.g={},this.h=0}function se(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=b(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oe(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}re.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=oe(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new J(t,this.src,s,!!i,r)).ia=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),le={};function ce(e,t,n,i,r){if(i&&i.once)return he(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ce(e,t[s],n,i,r);return null}return n=ve(n),e&&e[Q]?e.O(t,n,h(i)?!!i.capture:!!i,r):ue(e,t,n,!1,i,r)}function ue(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=ge(e);if(a||(e[ae]=a=new re(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=me;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)T||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(pe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function he(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,i,r);return null}return n=ve(n),e&&e[Q]?e.P(t,n,h(i)?!!i.capture:!!i,r):ue(e,t,n,!0,i,r)}function de(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)de(e,t[s],n,i,r);else i=h(i)?!!i.capture:!!i,n=ve(n),e&&e[Q]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=oe(s=e.g[t],n,i,r))&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ge(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oe(t,n,i,r)),(n=-1<e?t[e]:null)&&fe(n))}function fe(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])se(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(pe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ge(t))?(se(n,e),0==n.h&&(n.src=null,t[ae]=null)):Z(e)}}}function pe(e){return e in le?le[e]:le[e]="on"+e}function me(e,t){if(e.fa)e=!0;else{t=new K(t,this);var n=e.listener,i=e.la||e.src;e.ia&&fe(e),e=n.call(i,t)}return e}function ge(e){return(e=e[ae])instanceof re?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function we(){w.call(this),this.i=new re(this),this.S=this,this.J=null}function be(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var r=t;ie(t=new k(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=xe(o,i,!0,t)&&r}if(r=xe(o=t.g=e,i,!0,t)&&r,r=xe(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=xe(o=t.g=n[s],i,!1,t)&&r}function xe(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&se(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}v(we,w),we.prototype[Q]=!0,we.prototype.removeEventListener=function(e,t,n,i){de(this,e,t,n,i)},we.prototype.N=function(){if(we.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Z(n[i]);delete t.g[e],t.h--}}this.J=null},we.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},we.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ee=l.JSON.stringify;function ke(){var e=Ae;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Te,Se=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ie),(e=>e.reset()));class Ie{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ce(e){l.setTimeout((()=>{throw e}),0)}function Ne(e,t){Te||function(){var e=l.Promise.resolve(void 0);Te=function(){e.then(Le)}}(),_e||(Te(),_e=!0),Ae.add(e,t)}var _e=!1,Ae=new class{constructor(){this.h=this.g=null}add(e,t){const n=Se.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Le(){for(var e;e=ke();){try{e.h.call(e.g)}catch(e){Ce(e)}var t=Se;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_e=!1}function Re(e,t){we.call(this),this.h=e||1,this.g=t||l,this.j=g(this.qb,this),this.l=Date.now()}function Oe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function De(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:l.setTimeout(e,t||0)}function Pe(e){e.g=De((()=>{e.g=null,e.i&&(e.i=!1,Pe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Re,we),(r=Re.prototype).ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(Oe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Re.$.N.call(this),Oe(this),delete this.g};class Me extends w{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){w.call(this),this.h=e,this.g={}}v(Fe,w);var Ue=[];function Be(e,t,n,i){Array.isArray(n)||(n&&(Ue[0]=n.toString()),n=Ue);for(var r=0;r<n.length;r++){var s=ce(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ze(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fe(e)}),e),e.g={}}function je(){this.g=!0}function Ve(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ee(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Fe.prototype.N=function(){Fe.$.N.call(this),ze(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Ea=function(){this.g=!1},je.prototype.info=function(){};var We={},qe=null;function $e(){return qe=qe||new we}function He(e){k.call(this,We.Ta,e)}function Ge(e){const t=$e();be(t,new He(t))}function Ke(e,t){k.call(this,We.STAT_EVENT,e),this.stat=t}function Xe(e){const t=$e();be(t,new Ke(t,e))}function Qe(e,t){k.call(this,We.Ua,e),this.size=t}function Ye(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){e()}),t)}We.Ta="serverreachability",v(He,k),We.STAT_EVENT="statevent",v(Ke,k),We.Ua="timingevent",v(Qe,k);var Je={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ze={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function et(){}function tt(e){return e.h||(e.h=e.i())}function nt(){}et.prototype.h=null;var it,rt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function st(){k.call(this,"d")}function ot(){k.call(this,"c")}function at(){}function lt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Fe(this),this.P=ut,e=F?125:void 0,this.V=new Re(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ct}function ct(){this.i=null,this.g="",this.h=!1}v(st,k),v(ot,k),v(at,et),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},it=new at;var ut=45e3,ht={},dt={};function ft(e,t,n){e.L=1,e.v=Rt(Ct(t)),e.s=n,e.S=!0,pt(e,null)}function pt(e,t){e.G=Date.now(),vt(e),e.A=Ct(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),$t(n.i,"t",i),e.C=0,n=e.l.I,e.h=new ct,e.g=$n(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Me(g(e.Pa,e,e.g),e.O)),Be(e.U,e.g,"readystatechange",e.nb),t=e.I?te(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ge(),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function mt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function gt(e,t,n){let i,r=!0;for(;!e.J&&e.C<n.length;){if(i=yt(e,n),i==dt){4==t&&(e.o=4,Xe(14),r=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}if(i==ht){e.o=4,Xe(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Ve(e.j,e.m,i,null),kt(e,i)}mt(e)&&i!=dt&&i!=ht&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Xe(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(t),t.L=!0,Xe(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),xt(e))}function yt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?dt:(n=Number(t.substring(n,i)),isNaN(n)?ht:(i+=1)+n>t.length?dt:(t=t.substr(i,n),e.C=i+n,t))}function vt(e){e.Y=Date.now()+e.P,wt(e,e.P)}function wt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ye(g(e.lb,e),t)}function bt(e){e.B&&(l.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.H||e.J||zn(e.l,e)}function Et(e){bt(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Oe(e.V),ze(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function kt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Yt(n.h,e)))if(!e.K&&Yt(n.h,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Bn(n),_n(n)}Mn(n),Xe(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&0==n.A&&!n.v&&(n.v=Ye(g(n.ib,n),6e3));if(1>=Qt(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else Vn(n,11)}else if((e.K||n.g==e)&&Bn(n),!S(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const r=c[4];null!=r&&(n.Ga=r,n.j.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Lt(i.G,i.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=qn(i,i.I?i.oa:null,i.Y),o.K){Zt(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(bt(a),vt(a)),i.g=o}else Pn(i);0<n.i.length&&Ln(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):Nn(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}Ge()}catch(e){}}function Tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(r=lt.prototype).setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==En(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const h=En(this.g);var t=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ja()||kn(this.g)))){this.J||4!=h||7==t||Ge(),bt(this);var n=this.g.da();this.aa=n;t:if(mt(this)){var i=kn(this.g);e="";var r=i.length,s=4==En(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Et(this),xt(this);var o="";break t}this.h.i=new l.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Xe(12),Et(this),xt(this);break e}Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kt(this,n)}this.S?(gt(this,h,o),F&&this.i&&3==h&&(Be(this.U,this.V,"tick",this.mb),this.V.start())):(Ve(this.j,this.m,o,null),kt(this,o)),4==h&&Et(this),this.i&&!this.J&&(4==h?zn(this.l,this):(this.i=!1,vt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),Et(this),xt(this)}}}catch(e){}},r.mb=function(){if(this.g){var e=En(this.g),t=this.g.ja();this.C<t.length&&(bt(this),gt(this,e,t),this.i&&4!=e&&vt(this))}},r.cancel=function(){this.J=!0,Et(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Ge(),Xe(17)),Et(this),this.o=2,xt(this)):wt(this,this.Y-e)};var St=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function It(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof It){this.h=void 0!==t?t:e.h,Nt(this,e.j),this.s=e.s,this.g=e.g,_t(this,e.m),this.l=e.l,t=e.i;var n=new jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),At(this,n),this.o=e.o}else e&&(n=String(e).match(St))?(this.h=!!t,Nt(this,n[1]||"",!0),this.s=Ot(n[2]||""),this.g=Ot(n[3]||"",!0),_t(this,n[4]),this.l=Ot(n[5]||"",!0),At(this,n[6]||"",!0),this.o=Ot(n[7]||"")):(this.h=!!t,this.i=new jt(null,this.h))}function Ct(e){return new It(e)}function Nt(e,t,n){e.j=n?Ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function At(e,t,n){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Wt(this,t),$t(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Dt(t,Bt)),e.i=new jt(t,e.h))}function Lt(e,t,n){e.i.set(t,n)}function Rt(e){return Lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Pt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Pt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Dt(t,Mt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Dt(t,Mt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Dt(n,"/"==n.charAt(0)?Ut:Ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Dt(n,zt)),e.join("")};var Mt=/[#\/\?@]/g,Ft=/[#\?:]/g,Ut=/[#\?]/g,Bt=/[#\?@]/g,zt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Wt(e,t){Vt(e),t=Ht(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qt(e,t){return Vt(e),t=Ht(e,t),e.g.has(t)}function $t(e,t,n){Wt(e,t),0<n.length&&(e.i=null,e.g.set(Ht(e,t),x(n)),e.h+=n.length)}function Ht(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=jt.prototype).add=function(e,t){Vt(this),this.i=null,e=Ht(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Vt(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},r.sa=function(){Vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},r.Z=function(e){Vt(this);let t=[];if("string"==typeof e)qt(this,e)&&(t=t.concat(this.g.get(Ht(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Vt(this),this.i=null,qt(this,e=Ht(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function Gt(e){this.l=e||Kt,l.PerformanceNavigationTiming?e=0<(e=l.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(l.g&&l.g.Ka&&l.g.Ka()&&l.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kt=10;function Xt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qt(e){return e.h?1:e.g?e.g.size:0}function Yt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Zt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function en(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return x(e.i)}function tn(){}function nn(){this.g=new tn}function rn(e,t,n){const i=n||"";try{Tt(e,(function(e,n){let r=e;h(e)&&(r=Ee(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function sn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function on(e){this.l=e.fc||null,this.j=e.ob||!1}function an(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gt.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},tn.prototype.stringify=function(e){return l.JSON.stringify(e,void 0)},tn.prototype.parse=function(e){return l.JSON.parse(e,void 0)},v(on,et),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),v(an,we);var ln=0;function cn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=an.prototype).open=function(e,t){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||l).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,un(this)),this.readyState=ln},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==l.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?un(this):hn(this),3==this.readyState&&cn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,un(this))},r.Ya=function(e){this.g&&(this.response=e,un(this))},r.ka=function(){this.g&&un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dn=l.JSON.parse;function fn(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pn,this.L=this.M=!1}v(fn,we);var pn="",mn=/^https?$/i,gn=["POST","PUT"];function yn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vn(e),bn(e)}function vn(e){e.F||(e.F=!0,be(e,"complete"),be(e,"error"))}function wn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=En(e)||2!=e.da()))if(e.v&&4==En(e))De(e.La,0,e);else if(be(e,"readystatechange"),4==En(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.I).match(St)[1]||null;if(!r&&l.self&&l.self.location){var s=l.self.location.protocol;r=s.substr(0,s.length-1)}i=!mn.test(r?r.toLowerCase():"")}n=i}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var o=2<En(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",vn(e)}}finally{bn(e)}}}function bn(e,t){if(e.g){xn(e);const n=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function xn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(l.clearTimeout(e.A),e.A=null)}function En(e){return e.g?e.g.readyState:0}function kn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Tn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Sn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Tn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Lt(e,t,n))}function In(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cn(e){this.Ga=0,this.i=[],this.j=new je,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=In("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=In("baseRetryDelayMs",5e3,e),this.hb=In("retryDelaySeedMs",1e4,e),this.eb=In("forwardChannelMaxRetries",2,e),this.xa=In("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Gt(e&&e.concurrentRequestLimit),this.Ja=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Nn(e){if(An(e),3==e.H){var t=e.W++,n=Ct(e.G);Lt(n,"SID",e.J),Lt(n,"RID",t),Lt(n,"TYPE","terminate"),On(e,n),(t=new lt(e,e.j,t,void 0)).L=2,t.v=Rt(Ct(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(t.v.toString(),"")),!n&&l.Image&&((new Image).src=t.v,n=!0),n||(t.g=$n(t.l,null),t.g.ha(t.v)),t.G=Date.now(),vt(t)}Wn(e)}function _n(e){e.g&&(Fn(e),e.g.cancel(),e.g=null)}function An(e){_n(e),e.u&&(l.clearTimeout(e.u),e.u=null),Bn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&l.clearTimeout(e.m),e.m=null)}function Ln(e){Xt(e.h)||e.m||(e.m=!0,Ne(e.Na,e),e.C=0)}function Rn(e,t){var n;n=t?t.m:e.W++;const i=Ct(e.G);Lt(i,"SID",e.J),Lt(i,"RID",n),Lt(i,"AID",e.V),On(e,i),e.o&&e.s&&Sn(i,e.o,e.s),n=new lt(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Dn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Jt(e.h,n),ft(n,i,t)}function On(e,t){e.ma&&ee(e.ma,(function(e,n){Lt(t,n,e)})),e.l&&Tt({},(function(e,n){Lt(t,n,e)}))}function Dn(e,t,n){n=Math.min(e.i.length,n);var i=e.l?g(e.l.Va,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{rn(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function Pn(e){e.g||e.u||(e.ba=1,Ne(e.Ma,e),e.A=0)}function Mn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Ye(g(e.Ma,e),jn(e,e.A)),e.A++,!0)}function Fn(e){null!=e.B&&(l.clearTimeout(e.B),e.B=null)}function Un(e){e.g=new lt(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ct(e.wa);Lt(t,"RID","rpc"),Lt(t,"SID",e.J),Lt(t,"CI",e.M?"0":"1"),Lt(t,"AID",e.V),Lt(t,"TYPE","xmlhttp"),On(e,t),e.o&&e.s&&Sn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Rt(Ct(t)),n.s=null,n.S=!0,pt(n,e)}function Bn(e){null!=e.v&&(l.clearTimeout(e.v),e.v=null)}function zn(e,t){var n=null;if(e.g==t){Bn(e),Fn(e),e.g=null;var i=2}else{if(!Yt(e.h,t))return;n=t.F,Zt(e.h,t),i=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;be(i=$e(),new Qe(i,n)),Ln(e)}else Pn(e);else if(3==(r=t.o)||0==r&&0<e.ta||!(1==i&&function(e,t){return!(Qt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Ye(g(e.Na,e,t),jn(e,e.C)),e.C++,0)))}(e,t)||2==i&&Mn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}function jn(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Vn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=g(e.pb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Nt(n,"https"),Rt(n)),function(e,t){const n=new je;if(l.Image){const i=new Image;i.onload=y(sn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=y(sn,n,i,"TestLoadImage: error",!1,t),i.onabort=y(sn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=y(sn,n,i,"TestLoadImage: timeout",!1,t),l.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Xe(2);e.H=0,e.l&&e.l.za(t),Wn(e),An(e)}function Wn(e){if(e.H=0,e.pa=[],e.l){const t=en(e.h);0==t.length&&0==e.i.length||(E(e.pa,t),E(e.pa,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ya()}}function qn(e,t,n){var i=n instanceof It?Ct(n):new It(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),_t(i,i.m);else{var r=l.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new It(null,void 0);i&&Nt(s,i),t&&(s.g=t),r&&_t(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&Lt(i,n,t),Lt(i,"VER",e.qa),On(e,i),i}function $n(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new fn(new on({ob:!0})):new fn(e.va)).Oa(e.I),t}function Hn(){}function Gn(){if(P&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function Kn(e,t){we.call(this),this.g=new Cn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Yn(this)}function Xn(e){st.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Qn(){ot.call(this),this.status=1}function Yn(e){this.g=e}function Jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Zn(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(t^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function ei(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}(r=fn.prototype).Oa=function(e){this.M=e},r.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():it.g(),this.C=this.u?tt(this.u):tt(it),this.g.onreadystatechange=g(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void yn(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=l.FormData&&e instanceof l.FormData,!(0<=b(gn,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xn(this),0<this.B&&((this.L=function(e){return P&&L($,9,(function(){let e=0;const t=I(String(R)).split("."),n=I("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=C(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||C(0==r[2].length,0==s[2].length)||C(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.ua,this)):this.A=De(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yn(this,e)}},r.ua=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bn(this,!0)),fn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?wn(this):this.kb())},r.kb=function(){wn(this)},r.da=function(){try{return 2<En(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=Cn.prototype).qa=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new lt(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=te(s),ie(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Dn(this,r,t),Lt(n=Ct(this.G),"RID",e),Lt(n,"CVER",22),this.F&&Lt(n,"X-HTTP-Session-Id",this.F),On(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Tn(s)))+"&"+t:this.o&&Sn(n,this.o,s)),Jt(this.h,r),this.bb&&Lt(n,"TYPE","init"),this.P?(Lt(n,"$req",t),Lt(n,"SID","null"),r.ba=!0,ft(r,n,null)):ft(r,n,t),this.H=2}}else 3==this.H&&(e?Rn(this,e):0==this.i.length||Xt(this.h)||Rn(this))},r.Ma=function(){if(this.u=null,Un(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Ye(g(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Xe(10),_n(this),Un(this))},r.ib=function(){null!=this.v&&(this.v=null,_n(this),Mn(this),Xe(19))},r.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))},(r=Hn.prototype).Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},Gn.prototype.g=function(e,t){return new Kn(e,t)},v(Kn,we),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Xe(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=qn(e,null,e.Y),Ln(e)},Kn.prototype.close=function(){Nn(this.g)},Kn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ee(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&Ln(t)},Kn.prototype.N=function(){this.g.l=null,delete this.j,Nn(this.g),delete this.g,Kn.$.N.call(this)},v(Xn,st),v(Qn,ot),v(Yn,Hn),Yn.prototype.Ba=function(){be(this.g,"a")},Yn.prototype.Aa=function(e){be(this.g,new Xn(e))},Yn.prototype.za=function(e){be(this.g,new Qn)},Yn.prototype.ya=function(){be(this.g,"b")},v(Jn,(function(){this.blockSize=-1})),Jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Jn.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)Zn(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){Zn(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){Zn(this,i),r=0;break}}this.h=r,this.i+=t},Jn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var ti={};function ni(e){return-128<=e&&128>e?L(ti,e,(function(e){return new ei([0|e],0>e?-1:0)})):new ei([0|e],0>e?-1:0)}function ii(e){if(isNaN(e)||!isFinite(e))return si;if(0>e)return ui(ii(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=ri;return new ei(t,0)}var ri=4294967296,si=ni(0),oi=ni(1),ai=ni(16777216);function li(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function ci(e){return-1==e.h}function ui(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new ei(n,~e.h).add(oi)}function hi(e,t){return e.add(ui(t))}function di(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function fi(e,t){this.g=e,this.h=t}function pi(e,t){if(li(t))throw Error("division by zero");if(li(e))return new fi(si,si);if(ci(e))return t=pi(ui(e),t),new fi(ui(t.g),ui(t.h));if(ci(t))return t=pi(e,ui(t)),new fi(ui(t.g),t.h);if(30<e.g.length){if(ci(e)||ci(t))throw Error("slowDivide_ only works with positive integers.");for(var n=oi,i=t;0>=i.X(e);)n=mi(n),i=mi(i);var r=gi(n,1),s=gi(i,1);for(i=gi(i,2),n=gi(n,2);!li(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=gi(i,1),n=gi(n,1)}return t=hi(e,r.R(t)),new fi(r,t)}for(r=si;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=ii(n)).R(t);ci(o)||0<o.X(e);)o=(s=ii(n-=i)).R(t);li(s)&&(s=oi),r=r.add(s),e=hi(e,o)}return new fi(r,e)}function mi(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new ei(n,e.h)}function gi(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ei(r,e.h)}(r=ei.prototype).ea=function(){if(ci(this))return-ui(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:ri+i)*t,t*=ri}return e},r.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(li(this))return"0";if(ci(this))return"-"+ui(this).toString(e);for(var t=ii(Math.pow(e,6)),n=this,i="";;){var r=pi(n,t).g,s=((0<(n=hi(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(li(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return ci(e=hi(this,e))?-1:li(e)?0:1},r.abs=function(){return ci(this)?ui(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new ei(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(li(this)||li(e))return si;if(ci(this))return ci(e)?ui(this).R(ui(e)):ui(ui(this).R(e));if(ci(e))return ui(this.R(ui(e)));if(0>this.X(ai)&&0>e.X(ai))return ii(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=e.D(r)>>>16,l=65535&e.D(r);n[2*i+2*r]+=o*l,di(n,2*i+2*r),n[2*i+2*r+1]+=s*l,di(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,di(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,di(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new ei(n,0)},r.gb=function(e){return pi(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new ei(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new ei(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new ei(n,this.h^e.h)},Gn.prototype.createWebChannel=Gn.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,Ze.COMPLETE="complete",nt.EventType=rt,rt.OPEN="a",rt.CLOSE="b",rt.ERROR="c",rt.MESSAGE="d",we.prototype.listen=we.prototype.O,fn.prototype.listenOnce=fn.prototype.P,fn.prototype.getLastError=fn.prototype.Sa,fn.prototype.getLastErrorCode=fn.prototype.Ia,fn.prototype.getStatus=fn.prototype.da,fn.prototype.getResponseJson=fn.prototype.Wa,fn.prototype.getResponseText=fn.prototype.ja,fn.prototype.send=fn.prototype.ha,fn.prototype.setWithCredentials=fn.prototype.Oa,Jn.prototype.digest=Jn.prototype.l,Jn.prototype.reset=Jn.prototype.reset,Jn.prototype.update=Jn.prototype.j,ei.prototype.add=ei.prototype.add,ei.prototype.multiply=ei.prototype.R,ei.prototype.modulo=ei.prototype.gb,ei.prototype.compare=ei.prototype.X,ei.prototype.toNumber=ei.prototype.ea,ei.prototype.toString=ei.prototype.toString,ei.prototype.getBits=ei.prototype.D,ei.fromNumber=ii,ei.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return ui(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=ii(Math.pow(n,8)),r=si,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=ii(Math.pow(n,o)),r=r.R(o).add(ii(a))):r=(r=r.R(i)).add(ii(a))}return r};var yi=o.createWebChannelTransport=function(){return new Gn},vi=o.getStatEventTarget=function(){return $e()},wi=o.ErrorCode=Je,bi=o.EventType=Ze,xi=o.Event=We,Ei=o.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ki=o.FetchXmlHttpFactory=on,Ti=o.WebChannel=nt,Si=o.XhrIo=fn,Ii=o.Md5=Jn,Ci=o.Integer=ei})),s.register("fuWhn",(function(e,t){s("iB56l");var n=s("iaGrY"),i=s("iSRJB"),r=s("62uwT"),o=s("7A9kL");n.default.use([i.default,r.default]);const a=new(0,n.default)(".mySwiper",{direction:"vertical",slidesPerView:4,breakpoints:{768:{slidesPerView:6}},mousewheel:{forceToAxis:!0},noSwiping:!0,noSwipingClass:"swiper-slide",navigation:{nextEl:".support-menu__swiperbutton",disabledClass:"support-menu__disabled"}});let l=0;document.querySelector(".support-menu__swiperbutton").addEventListener("click",(function(e){l++,!e.currentTarget.classList.contains("support-menu__disabled")||l%6!=0&&l%4!=0||a.slideTo(0)}));const c=document.querySelectorAll(".swiper-slide__link-js"),u=document.querySelectorAll(".swiper-slide__img-js");!function(){for(let e=0;e<o.ukraineFounds.length;e++)c[e].href=o.ukraineFounds[e].url,u[e].alt=o.ukraineFounds[e].title}();const h=document.querySelector(".support-menu");let d=0,f=()=>{h.style.background=`background linear-gradient(${d+=.5}deg,  rgba(79,46,232,1) 0%, rgba(86,86,175,1) 35%, rgba(179,122,240,1) 100%)`,requestAnimationFrame(f)};requestAnimationFrame(f)})),s.register("iB56l",(function(e,n){t(e.exports,"default",(function(){return s("iaGrY").default})),t(e.exports,"Navigation",(function(){return s("iSRJB").default})),t(e.exports,"Pagination",(function(){return s("62uwT").default}));s("iaGrY"),s("790ii"),s("fajkZ"),s("1sSHk"),s("iSRJB"),s("62uwT"),s("hKwG4"),s("ePkwZ"),s("lrfdb"),s("kjN5y"),s("eVziZ"),s("9azrO"),s("3oxNJ"),s("gs7Pm"),s("jBPWu"),s("ci9Ge"),s("eVDS1"),s("53omQ"),s("4LjcT"),s("zm2LU"),s("86nzb"),s("ajPpq"),s("5T183"),s("1w9pC")})),s.register("iaGrY",(function(e,n){t(e.exports,"default",(function(){return N}));var i=s("7xxPi"),r=s("dNWnP"),o=s("1gHsq"),a=s("agupX"),l=s("kMnIR"),c=s("kdpim"),u=s("c4Sz9"),h=s("mPJF1"),d=s("jEOyI"),f=s("4HaqR"),p=s("b4Co2"),m=s("jtnqo"),g=s("7Q6KL"),y=s("lt8Bz"),v=s("i1StC"),w=s("6Vw97"),b=s("5IPB6"),x=s("5rbog"),E=s("1AMhv"),k=s("kmZuC"),T=s("fa3Xa");const S={eventsEmitter:h.default,update:d.default,translate:f.default,transition:p.default,slide:m.default,loop:g.default,grabCursor:y.default,events:v.default,breakpoints:w.default,checkOverflow:x.default,classes:b.default},I={};class C{constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=(0,r.extend)({},n),t&&!n.el&&(n.el=t);const s=(0,i.getDocument)();if(n.el&&"string"==typeof n.el&&s.querySelectorAll(n.el).length>1){const e=[];return s.querySelectorAll(n.el).forEach((t=>{const i=(0,r.extend)({},n,{el:t});e.push(new C(i))})),e}const c=this;c.__swiper__=!0,c.support=(0,o.getSupport)(),c.device=(0,a.getDevice)({userAgent:n.userAgent}),c.browser=(0,l.getBrowser)(),c.eventsListeners={},c.eventsAnyListeners=[],c.modules=[...c.__modules__],n.modules&&Array.isArray(n.modules)&&c.modules.push(...n.modules);const u={};c.modules.forEach((e=>{e({params:n,swiper:c,extendParams:(0,k.default)(n,u),on:c.on.bind(c),once:c.once.bind(c),off:c.off.bind(c),emit:c.emit.bind(c)})}));const h=(0,r.extend)({},E.default,u);return c.params=(0,r.extend)({},h,I,n),c.originalParams=(0,r.extend)({},c.params),c.passedParams=(0,r.extend)({},n),c.params&&c.params.on&&Object.keys(c.params.on).forEach((e=>{c.on(e,c.params.on[e])})),c.params&&c.params.onAny&&c.onAny(c.params.onAny),Object.assign(c,{enabled:c.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===c.params.direction,isVertical:()=>"vertical"===c.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:c.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.emit("_swiper"),c.params.init&&c.init(),c}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=(0,r.elementChildren)(t,`.${n.slideClass}, swiper-slide`),s=(0,r.elementIndex)(i[0]);return(0,r.elementIndex)(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=(0,r.elementChildren)(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),r=(n.maxTranslate()-i)*e+i;n.translateTo(r,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:r,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?r[e]+s[e]-r[a]<o:r[e]-r[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){r[a]-r[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&(0,T.processLazyPreloader)(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)i(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(t.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return(0,r.elementChildren)(n,i())[0]})();return!s&&t.params.createElements&&(s=(0,r.createElement)("div",t.params.wrapperClass),n.append(s),(0,r.elementChildren)(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===(0,r.elementStyle)(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===(0,r.elementStyle)(n,"direction")),wrongRTL:"-webkit-box"===(0,r.elementStyle)(s,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?(0,T.processLazyPreloader)(t,e):e.addEventListener("load",(e=>{(0,T.processLazyPreloader)(t,e.target)}))})),(0,T.preload)(t),t.initialized=!0,(0,T.preload)(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:s,wrapperEl:o,slides:a}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,(0,r.deleteProps)(n)),n.destroyed=!0),null}static extendDefaults(e){(0,r.extend)(I,e)}static get extendedDefaults(){return I}static get defaults(){return E.default}static installModule(e){C.prototype.__modules__||(C.prototype.__modules__=[]);const t=C.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>C.installModule(e))),C):(C.installModule(e),C)}}Object.keys(S).forEach((e=>{Object.keys(S[e]).forEach((t=>{C.prototype[t]=S[e][t]}))})),C.use([c.default,u.default]);var N=C})),s.register("7xxPi",(function(e,n){function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function r(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:i(t[n])&&i(e[n])&&Object.keys(t[n]).length>0&&r(e[n],t[n])}))}t(e.exports,"getDocument",(function(){return o})),t(e.exports,"getWindow",(function(){return l}));const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function o(){const e="undefined"!=typeof document?document:{};return r(e,s),e}const a={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){const e="undefined"!=typeof window?window:{};return r(e,a),e}})),s.register("dNWnP",(function(e,n){t(e.exports,"deleteProps",(function(){return r})),t(e.exports,"nextTick",(function(){return o})),t(e.exports,"now",(function(){return a})),t(e.exports,"getTranslate",(function(){return l})),t(e.exports,"isObject",(function(){return c})),t(e.exports,"extend",(function(){return u})),t(e.exports,"setCSSProperty",(function(){return h})),t(e.exports,"animateCSSModeScroll",(function(){return d})),t(e.exports,"getSlideTransformEl",(function(){return f})),t(e.exports,"elementChildren",(function(){return p})),t(e.exports,"createElement",(function(){return m})),t(e.exports,"elementOffset",(function(){return g})),t(e.exports,"elementPrevAll",(function(){return y})),t(e.exports,"elementNextAll",(function(){return v})),t(e.exports,"elementStyle",(function(){return w})),t(e.exports,"elementIndex",(function(){return b})),t(e.exports,"elementParents",(function(){return x})),t(e.exports,"elementTransitionEnd",(function(){return E})),t(e.exports,"elementOuterSize",(function(){return k}));var i=s("7xxPi");function r(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function o(e,t=0){return setTimeout(e,t)}function a(){return Date.now()}function l(e,t="x"){const n=(0,i.getWindow)();let r,s,o;const a=function(e){const t=(0,i.getWindow)();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),o=new n.WebKitCSSMatrix("none"===s?"":s)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?o.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(s=n.WebKitCSSMatrix?o.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),s||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function u(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const s=e[r];if(null!=s&&(i=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],r=Object.getOwnPropertyDescriptor(s,i);void 0!==r&&r.enumerable&&(c(t[i])&&c(s[i])?s[i].__swiper__?t[i]=s[i]:u(t[i],s[i]):!c(t[i])&&c(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:u(t[i],s[i])):t[i]=s[i])}}}var i;return t}function h(e,t,n){e.style.setProperty(t,n)}function d({swiper:e,targetPosition:t,side:n}){const r=(0,i.getWindow)(),s=-e.translate;let o,a=null;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,h=()=>{o=(new Date).getTime(),null===a&&(a=o);const i=Math.max(Math.min((o-a)/l,1),0),c=.5-Math.cos(i*Math.PI)/2;let d=s+c*(t-s);if(u(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),u(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void r.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=r.requestAnimationFrame(h)};h()}function f(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function p(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function m(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function g(e){const t=(0,i.getWindow)(),n=(0,i.getDocument)(),r=e.getBoundingClientRect(),s=n.body,o=e.clientTop||s.clientTop||0,a=e.clientLeft||s.clientLeft||0,l=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:r.top+l-o,left:r.left+c-a}}function y(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function v(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function w(e,t){return(0,i.getWindow)().getComputedStyle(e,null).getPropertyValue(t)}function b(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function x(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function E(e,t){t&&e.addEventListener("transitionend",(function n(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",n))}))}function k(e,t,n){const r=(0,i.getWindow)();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}})),s.register("1gHsq",(function(e,n){t(e.exports,"getSupport",(function(){return o}));var i=s("7xxPi");let r;function o(){return r||(r=function(){const e=(0,i.getWindow)(),t=(0,i.getDocument)();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),r}})),s.register("agupX",(function(e,n){t(e.exports,"getDevice",(function(){return a}));var i=s("7xxPi"),r=s("1gHsq");let o;function a(e={}){return o||(o=function({userAgent:e}={}){const t=(0,r.getSupport)(),n=(0,i.getWindow)(),s=n.navigator.platform,o=e||n.navigator.userAgent,a={ios:!1,android:!1},l=n.screen.width,c=n.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let h=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!h&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===s;let m="MacIntel"===s;return!h&&m&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${c}`)>=0&&(h=o.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),m=!1),u&&!p&&(a.os="android",a.android=!0),(h||f||d)&&(a.os="ios",a.ios=!0),a}(e)),o}})),s.register("kMnIR",(function(e,n){t(e.exports,"getBrowser",(function(){return o}));var i=s("7xxPi");let r;function o(){return r||(r=function(){const e=(0,i.getWindow)();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),r}})),s.register("kdpim",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("7xxPi");function r({swiper:e,on:t,emit:n}){const r=(0,i.getWindow)();let s=null,o=null;const a=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==r.ResizeObserver?e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{o=r.requestAnimationFrame((()=>{const{width:n,height:i}=e;let r=n,s=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(r=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),r===n&&s===i||a()}))})),s.observe(e.el)):(r.addEventListener("resize",a),r.addEventListener("orientationchange",l))})),t("destroy",(()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",l)}))}})),s.register("c4Sz9",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("7xxPi"),r=s("dNWnP");function o({swiper:e,extendParams:t,on:n,emit:s}){const o=[],a=(0,i.getWindow)(),l=(t,n={})=>{const i=new(a.MutationObserver||a.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void s("observerUpdate",t[0]);const n=function(){s("observerUpdate",t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)}));i.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),o.push(i)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=(0,r.elementParents)(e.el);for(let e=0;e<t.length;e+=1)l(t[e])}l(e.el,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{o.forEach((e=>{e.disconnect()})),o.splice(0,o.length)}))}})),s.register("mPJF1",(function(e,n){t(e.exports,"default",(function(){return i}));var i={on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const r=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function r(...n){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,n)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,r)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,r;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),r=t):(n=e[0].events,i=e[0].data,r=e[0].context||t),i.unshift(r);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(r,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(r,i)}))})),t}}})),s.register("jEOyI",(function(e,n){t(e.exports,"default",(function(){return f}));var i=s("2nlfG"),r=s("aafDk"),o=s("jMtU7"),a=s("kPOBn"),l=s("8OSjY"),c=s("hBtS3"),u=s("29hok"),h=s("lCVGa"),d=s("3EEt9"),f={updateSize:i.default,updateSlides:r.default,updateAutoHeight:o.default,updateSlidesOffset:a.default,updateSlidesProgress:l.default,updateProgress:c.default,updateSlidesClasses:u.default,updateActiveIndex:h.default,updateClickedSlide:d.default}})),s.register("2nlfG",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(){const e=this;let t,n;const r=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt((0,i.elementStyle)(r,"padding-left")||0,10)-parseInt((0,i.elementStyle)(r,"padding-right")||0,10),n=n-parseInt((0,i.elementStyle)(r,"padding-top")||0,10)-parseInt((0,i.elementStyle)(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}})),s.register("aafDk",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{wrapperEl:s,slidesEl:o,size:a,rtlTranslate:l,wrongRTL:c}=e,u=e.virtual&&r.virtual.enabled,h=u?e.virtual.slides.length:e.slides.length,d=(0,i.elementChildren)(o,`.${e.params.slideClass}, swiper-slide`),f=u?e.virtual.slides.length:d.length;let p=[];const m=[],g=[];let y=r.slidesOffsetBefore;"function"==typeof y&&(y=r.slidesOffsetBefore.call(e));let v=r.slidesOffsetAfter;"function"==typeof v&&(v=r.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=r.spaceBetween,E=-y,k=0,T=0;if(void 0===a)return;"string"==typeof x&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*a:"string"==typeof x&&(x=parseFloat(x)),e.virtualSize=-x,d.forEach((e=>{l?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),r.centeredSlides&&r.cssMode&&((0,i.setCSSProperty)(s,"--swiper-centered-offset-before",""),(0,i.setCSSProperty)(s,"--swiper-centered-offset-after",""));const S=r.grid&&r.grid.rows>1&&e.grid;let I;S&&e.grid.initSlides(f);const C="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>void 0!==r.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<f;s+=1){let o;if(I=0,d[s]&&(o=d[s]),S&&e.grid.updateSlide(s,o,f,t),!d[s]||"none"!==(0,i.elementStyle)(o,"display")){if("auto"===r.slidesPerView){C&&(d[s].style[t("width")]="");const a=getComputedStyle(o),l=o.style.transform,c=o.style.webkitTransform;if(l&&(o.style.transform="none"),c&&(o.style.webkitTransform="none"),r.roundLengths)I=e.isHorizontal()?(0,i.elementOuterSize)(o,"width",!0):(0,i.elementOuterSize)(o,"height",!0);else{const e=n(a,"width"),t=n(a,"padding-left"),i=n(a,"padding-right"),r=n(a,"margin-left"),s=n(a,"margin-right"),l=a.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+r+s;else{const{clientWidth:n,offsetWidth:a}=o;I=e+t+i+r+s+(a-n)}}l&&(o.style.transform=l),c&&(o.style.webkitTransform=c),r.roundLengths&&(I=Math.floor(I))}else I=(a-(r.slidesPerView-1)*x)/r.slidesPerView,r.roundLengths&&(I=Math.floor(I)),d[s]&&(d[s].style[t("width")]=`${I}px`);d[s]&&(d[s].swiperSlideSize=I),g.push(I),r.centeredSlides?(E=E+I/2+k/2+x,0===k&&0!==s&&(E=E-a/2-x),0===s&&(E=E-a/2-x),Math.abs(E)<.001&&(E=0),r.roundLengths&&(E=Math.floor(E)),T%r.slidesPerGroup==0&&p.push(E),m.push(E)):(r.roundLengths&&(E=Math.floor(E)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&p.push(E),m.push(E),E=E+I+x),e.virtualSize+=I+x,k=I,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+v,l&&c&&("slide"===r.effect||"coverflow"===r.effect)&&(s.style.width=`${e.virtualSize+x}px`),r.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+x}px`),S&&e.grid.updateWrapperSize(I,p,t),!r.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let i=p[n];r.roundLengths&&(i=Math.floor(i)),p[n]<=e.virtualSize-a&&t.push(i)}p=t,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(u&&r.loop){const t=g[0]+x;if(r.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),i=t*r.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+i)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===r.slidesPerGroup&&p.push(p[p.length-1]+t),m.push(m[m.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==x){const n=e.isHorizontal()&&l?"marginLeft":t("marginRight");d.filter(((e,t)=>!(r.cssMode&&!r.loop)||t!==d.length-1)).forEach((e=>{e.style[n]=`${x}px`}))}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(x||0)})),e-=x;const t=e-a;p=p.map((e=>e<0?-y:e>t?t+v:e))}if(r.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(x||0)})),e-=x,e<a){const t=(a-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),m.forEach(((e,n)=>{m[n]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:m,slidesSizesGrid:g}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){(0,i.setCSSProperty)(s,"--swiper-centered-offset-before",-p[0]+"px"),(0,i.setCSSProperty)(s,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(f!==h&&e.emit("slidesLengthChange"),p.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==b&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!(u||r.cssMode||"slide"!==r.effect&&"fade"!==r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);f<=r.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}}})),s.register("jMtU7",(function(e,n){function i(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let r,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const e=t.activeIndex+r;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(r=0;r<n.length;r+=1)if(void 0!==n[r]){const e=n[r].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)}t(e.exports,"default",(function(){return i}))})),s.register("kPOBn",(function(e,n){function i(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()}t(e.exports,"default",(function(){return i}))})),s.register("8OSjY",(function(e,n){function i(e=this&&this.translate||0){const t=this,n=t.params,{slides:i,rtlTranslate:r,snapGrid:s}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;r&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<i.length;e+=1){const l=i[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=-(o-c),f=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||f>1&&f<=t.size||d<=0&&f>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),l.progress=r?-u:u,l.originalProgress=r?-h:h}}t(e.exports,"default",(function(){return i}))})),s.register("hBtS3",(function(e,n){function i(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===i)r=0,s=!0,o=!0;else{r=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||r<=0,o=a||r>=1,n&&(r=0),a&&(r=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),r=t.slidesGrid[n],s=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=r?(l-r)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}t(e.exports,"default",(function(){return i}))})),s.register("29hok",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:s}=e,o=e.virtual&&n.virtual.enabled,a=e=>(0,i.elementChildren)(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let l;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),o)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${t}"]`)}else l=a(`[data-swiper-slide-index="${s}"]`);else l=t[s];if(l){l.classList.add(n.slideActiveClass);let e=(0,i.elementNextAll)(l,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let r=(0,i.elementPrevAll)(l,`.${n.slideClass}, swiper-slide`)[0];n.loop,r&&r.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}})),s.register("lCVGa",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("fa3Xa");function r(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:s,activeIndex:o,realIndex:a,snapIndex:l}=t;let c,u=e;const h=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===u&&(u=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let r;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?r=e:i>=t[e]&&i<t[e+1]&&(r=e+1):i>=t[e]&&(r=e);return n.normalizeSlideIndex&&(r<0||void 0===r)&&(r=0),r}(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,u);c=e+Math.floor((u-e)/s.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),u===o)return c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=h(u)));let d;d=t.virtual&&s.virtual.enabled&&s.loop?h(u):t.slides[u]?parseInt(t.slides[u].getAttribute("data-swiper-slide-index")||u,10):u,Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:d,previousIndex:o,activeIndex:u}),t.initialized&&(0,i.preload)(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}})),s.register("fa3Xa",(function(e,n){t(e.exports,"processLazyPreloader",(function(){return i})),t(e.exports,"preload",(function(){return s}));const i=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},r=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},s=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex,o=s+i-1;if(e.params.rewind)for(let i=s-t;i<=o+t;i+=1){const t=(i%n+n)%n;t!==s&&t>o&&r(e,t)}else for(let i=Math.max(o-t,0);i<=Math.min(o+t,n-1);i+=1)i!==s&&i>o&&r(e,i)}})),s.register("3EEt9",(function(e,n){function i(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let r,s=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){s=!0,r=e;break}if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=r,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}t(e.exports,"default",(function(){return i}))})),s.register("4HaqR",(function(e,n){t(e.exports,"default",(function(){return c}));var i=s("1umi3"),r=s("1vvVW"),o=s("jVKXc"),a=s("a9I2T"),l=s("fzQVA"),c={getTranslate:i.default,setTranslate:r.default,minTranslate:o.default,maxTranslate:a.default,translateTo:l.default}})),s.register("1umi3",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:r,wrapperEl:s}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let o=(0,i.getTranslate)(s,e);return o+=this.cssOverflowAdjustment(),n&&(o=-o),o||0}})),s.register("1vvVW",(function(e,n){function i(e,t){const n=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=n;let a=0,l=0;let c;n.isHorizontal()?a=i?-e:e:l=e,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,r.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:r.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();c=0===u?0:(e-n.minTranslate())/u,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}t(e.exports,"default",(function(){return i}))})),s.register("jVKXc",(function(e,n){function i(){return-this.snapGrid[0]}t(e.exports,"default",(function(){return i}))})),s.register("a9I2T",(function(e,n){function i(){return-this.snapGrid[this.snapGrid.length-1]}t(e.exports,"default",(function(){return i}))})),s.register("fzQVA",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e=0,t=this.params.speed,n=!0,r=!0,s){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const c=o.minTranslate(),u=o.maxTranslate();let h;if(h=r&&e>c?c:r&&e<u?u:e,o.updateProgress(h),a.cssMode){const e=o.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-h;else{if(!o.support.smoothScroll)return(0,i.animateCSSModeScroll)({swiper:o,targetPosition:-h,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-h,behavior:"smooth"})}return!0}return 0===t?(o.setTransition(0),o.setTranslate(h),n&&(o.emit("beforeTransitionStart",t,s),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(h),n&&(o.emit("beforeTransitionStart",t,s),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}})),s.register("b4Co2",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("e2mnO"),r=s("C1QMZ"),o=s("3QxHx"),a={setTransition:i.default,transitionStart:r.default,transitionEnd:o.default}})),s.register("e2mnO",(function(e,n){function i(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}t(e.exports,"default",(function(){return i}))})),s.register("C1QMZ",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("g81jD");function r(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),(0,i.default)({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}})),s.register("g81jD",(function(e,n){function i({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:r,previousIndex:s}=e;let o=n;if(o||(o=r>s?"next":r<s?"prev":"reset"),e.emit(`transition${i}`),t&&r!==s){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}t(e.exports,"default",(function(){return i}))})),s.register("3QxHx",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("g81jD");function r(e=!0,t){const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),(0,i.default)({swiper:n,runCallbacks:e,direction:t,step:"End"}))}})),s.register("jtnqo",(function(e,n){t(e.exports,"default",(function(){return h}));var i=s("VoUIG"),r=s("hma03"),o=s("cNUv0"),a=s("73yc0"),l=s("30lE7"),c=s("6K2nc"),u=s("k6ufv"),h={slideTo:i.default,slideToLoop:r.default,slideNext:o.default,slidePrev:a.default,slideReset:l.default,slideToClosest:c.default,slideToClickedSlide:u.default}})),s.register("VoUIG",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e=0,t=this.params.speed,n=!0,r,s){"string"==typeof e&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:u,previousIndex:h,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=o;if(o.animating&&l.preventInteractionOnTransition||!m&&!r&&!s)return!1;const g=Math.min(o.params.slidesPerGroupSkip,a);let y=g+Math.floor((a-g)/o.params.slidesPerGroup);y>=c.length&&(y=c.length-1);const v=-c[y];if(l.normalizeSlideIndex)for(let e=0;e<u.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*u[e]),i=Math.floor(100*u[e+1]);void 0!==u[e+1]?t>=n&&t<i-(i-n)/2?a=e:t>=n&&t<i&&(a=e+1):t>=n&&(a=e)}if(o.initialized&&a!==d){if(!o.allowSlideNext&&v<o.translate&&v<o.minTranslate())return!1;if(!o.allowSlidePrev&&v>o.translate&&v>o.maxTranslate()&&(d||0)!==a)return!1}let w;if(a!==(h||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(v),w=a>d?"next":a<d?"prev":"reset",f&&-v===o.translate||!f&&v===o.translate)return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),"slide"!==l.effect&&o.setTranslate(v),"reset"!==w&&(o.transitionStart(n,w),o.transitionEnd(n,w)),!1;if(l.cssMode){const e=o.isHorizontal(),n=f?v:-v;if(0===t){const t=o.virtual&&o.params.virtual.enabled;t&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),t&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1}))}else{if(!o.support.smoothScroll)return(0,i.animateCSSModeScroll)({swiper:o,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(v),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,w),0===t?o.transitionEnd(n,w):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,w))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}})),s.register("hma03",(function(e,n){function i(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){e=parseInt(e,10)}const r=this;let s=e;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?s+=r.virtual.slidesBefore:s=r.getSlideIndexByData(s)),r.slideTo(s,t,n,i)}t(e.exports,"default",(function(){return i}))})),s.register("cNUv0",(function(e,n){function i(e=this.params.speed,t=!0,n){const i=this,{enabled:r,params:s,animating:o}=i;if(!r)return i;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return s.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("73yc0",(function(e,n){function i(e=this.params.speed,t=!0,n){const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(a?i.translate:-i.translate),f=s.map((e=>h(e)));let p=s[f.indexOf(d)-1];if(void 0===p&&r.cssMode){let e;s.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(p=s[e>0?e-1:e])}let m=0;if(void 0!==p&&(m=o.indexOf(p),m<0&&(m=i.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),r.rewind&&i.isBeginning){const r=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(r,e,t,n)}return i.slideTo(m,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("30lE7",(function(e,n){function i(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("6K2nc",(function(e,n){function i(e=this.params.speed,t=!0,n,i=.5){const r=this;let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const e=r.snapGrid[a];l-e>(r.snapGrid[a+1]-e)*i&&(s+=r.params.slidesPerGroup)}else{const e=r.snapGrid[a-1];l-e<=(r.snapGrid[a]-e)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,e,t,n)}t(e.exports,"default",(function(){return i}))})),s.register("k6ufv",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(){const e=this,{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,o=e.clickedIndex;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?o<e.loopedSlides-r/2||o>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),o=e.getSlideIndex((0,i.elementChildren)(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),(0,i.nextTick)((()=>{e.slideTo(o)}))):e.slideTo(o):o>e.slides.length-r?(e.loopFix(),o=e.getSlideIndex((0,i.elementChildren)(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),(0,i.nextTick)((()=>{e.slideTo(o)}))):e.slideTo(o)}else e.slideTo(o)}})),s.register("7Q6KL",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("jAQHU"),r=s("iefk9"),o=s("8TQCt"),a={loopCreate:i.default,loopFix:r.default,loopDestroy:o.default}})),s.register("jAQHU",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;(0,i.elementChildren)(r,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}})),s.register("iefk9",(function(e,n){function i({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:r,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:h,params:d}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&d.virtual.enabled)return t&&(d.centeredSlides||0!==a.snapIndex?d.centeredSlides&&a.snapIndex<d.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const f="auto"===d.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10));let p=d.loopedSlides||f;p%d.slidesPerGroup!=0&&(p+=d.slidesPerGroup-p%d.slidesPerGroup),a.loopedSlides=p;const m=[],g=[];let y=a.activeIndex;void 0===r?r=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(d.slideActiveClass)))[0]):y=r;const v="next"===n||!n,w="prev"===n||!n;let b=0,x=0;if(r<p){b=Math.max(p-r,d.slidesPerGroup);for(let e=0;e<p-r;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(r>a.slides.length-2*p){x=Math.max(r-(a.slides.length-2*p),d.slidesPerGroup);for(let e=0;e<x;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(w&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,h.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),v&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,h.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===d.slidesPerView&&a.updateSlides(),d.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&w)if(void 0===e){const e=a.slidesGrid[y],t=a.slidesGrid[y+b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(y+b,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else i&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&v)if(void 0===e){const e=a.slidesGrid[y],t=a.slidesGrid[y-x]-e;o?a.setTranslate(a.translate-t):(a.slideTo(y-x,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")}t(e.exports,"default",(function(){return i}))})),s.register("8TQCt",(function(e,n){function i(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}t(e.exports,"default",(function(){return i}))})),s.register("lt8Bz",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("8kBkW"),r=s("lGUvJ"),o={setGrabCursor:i.default,unsetGrabCursor:r.default}})),s.register("8kBkW",(function(e,n){function i(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))}t(e.exports,"default",(function(){return i}))})),s.register("lGUvJ",(function(e,n){function i(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}t(e.exports,"default",(function(){return i}))})),s.register("i1StC",(function(e,n){t(e.exports,"default",(function(){return m}));var i=s("7xxPi"),r=s("iDuHK"),o=s("hwZYB"),a=s("7UVOE"),l=s("i41Or"),c=s("9A257"),u=s("lI65j"),h=s("7V4dh");let d=!1;function f(){}const p=(e,t)=>{const n=(0,i.getDocument)(),{params:r,el:s,wrapperEl:o,device:a}=e,c=!!r.nested,u="on"===t?"addEventListener":"removeEventListener",h=t;s[u]("pointerdown",e.onTouchStart,{passive:!1}),n[u]("pointermove",e.onTouchMove,{passive:!1,capture:c}),n[u]("pointerup",e.onTouchEnd,{passive:!0}),n[u]("pointercancel",e.onTouchEnd,{passive:!0}),n[u]("pointerout",e.onTouchEnd,{passive:!0}),n[u]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&s[u]("click",e.onClick,!0),r.cssMode&&o[u]("scroll",e.onScroll),r.updateOnWindowResize?e[h](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",l.default,!0):e[h]("observerUpdate",l.default,!0),s[u]("load",e.onLoad,{capture:!0})};var m={attachEvents:function(){const e=this,t=(0,i.getDocument)(),{params:n}=e;e.onTouchStart=r.default.bind(e),e.onTouchMove=o.default.bind(e),e.onTouchEnd=a.default.bind(e),n.cssMode&&(e.onScroll=u.default.bind(e)),e.onClick=c.default.bind(e),e.onLoad=h.default.bind(e),d||(t.addEventListener("touchstart",f),d=!0),p(e,"on")},detachEvents:function(){p(this,"off")}}})),s.register("iDuHK",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("7xxPi"),r=s("dNWnP");function o(e){const t=this,n=(0,i.getDocument)(),s=(0,i.getWindow)(),o=t.touchEventsData;o.evCache.push(e);const{params:a,touches:l,enabled:c}=t;if(!c)return;if(!a.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let u=e;u.originalEvent&&(u=u.originalEvent);let h=u.target;if("wrapper"===a.touchEventsTarget&&!t.wrapperEl.contains(h))return;if("which"in u&&3===u.which)return;if("button"in u&&u.button>0)return;if(o.isTouched&&o.isMoved)return;const d=!!a.noSwipingClass&&""!==a.noSwipingClass,f=e.composedPath?e.composedPath():e.path;d&&u.target&&u.target.shadowRoot&&f&&(h=f[0]);const p=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,m=!(!u.target||!u.target.shadowRoot);if(a.noSwiping&&(m?function(e,t=this){return function t(n){if(!n||n===(0,i.getDocument)()||n===(0,i.getWindow)())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(e);return r||n.getRootNode?r||t(n.getRootNode().host):null}(t)}(p,h):h.closest(p)))return void(t.allowClick=!0);if(a.swipeHandler&&!h.closest(a.swipeHandler))return;l.currentX=u.pageX,l.currentY=u.pageY;const g=l.currentX,y=l.currentY,v=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,w=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(v&&(g<=w||g>=s.innerWidth-w)){if("prevent"!==v)return;e.preventDefault()}Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=g,l.startY=y,o.touchStartTime=(0,r.now)(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(o.allowThresholdMove=!1);let b=!0;h.matches(o.focusableElements)&&(b=!1,"SELECT"===h.nodeName&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==h&&n.activeElement.blur();const x=b&&t.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!x||h.isContentEditable||u.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",u)}})),s.register("hwZYB",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("7xxPi"),r=s("dNWnP");function o(e){const t=(0,i.getDocument)(),n=this,s=n.touchEventsData,{params:o,touches:a,rtlTranslate:l,enabled:c}=n;if(!c)return;if(!o.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),!s.isTouched)return void(s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",u));const h=s.evCache.findIndex((e=>e.pointerId===u.pointerId));h>=0&&(s.evCache[h]=u);const d=s.evCache.length>1?s.evCache[0]:u,f=d.pageX,p=d.pageY;if(u.preventedByNestedSwiper)return a.startX=f,void(a.startY=p);if(!n.allowTouchMove)return u.target.matches(s.focusableElements)||(n.allowClick=!1),void(s.isTouched&&(Object.assign(a,{startX:f,startY:p,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:f,currentY:p}),s.touchStartTime=(0,r.now)()));if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(p<a.startY&&n.translate<=n.maxTranslate()||p>a.startY&&n.translate>=n.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(f<a.startX&&n.translate<=n.maxTranslate()||f>a.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&u.target===t.activeElement&&u.target.matches(s.focusableElements))return s.isMoved=!0,void(n.allowClick=!1);if(s.allowTouchCallbacks&&n.emit("touchMove",u),u.targetTouches&&u.targetTouches.length>1)return;a.currentX=f,a.currentY=p;const m=a.currentX-a.startX,g=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(void 0===s.isScrolling){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,s.isScrolling=n.isHorizontal()?e>o.touchAngle:90-e>o.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",u),void 0===s.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(s.startMoving=!0)),s.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&s.evCache.length>1)return void(s.isTouched=!1);if(!s.startMoving)return;n.allowClick=!1,!o.cssMode&&u.cancelable&&u.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&u.stopPropagation();let y=n.isHorizontal()?m:g,v=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;o.oneWayMovement&&(y=Math.abs(y)*(l?1:-1),v=Math.abs(v)*(l?1:-1)),a.diff=y,y*=o.touchRatio,l&&(y=-y,v=-v);const w=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const b=n.params.loop&&!o.cssMode;if(!s.isMoved){if(b&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,!o.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let x;s.isMoved&&w!==n.touchesDirection&&b&&Math.abs(y)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),x=!0),n.emit("sliderMove",u),s.isMoved=!0,s.currentTranslate=y+s.startTranslate;let E=!0,k=o.resistanceRatio;if(o.touchReleaseOnEdges&&(k=0),y>0?(b&&!x&&s.currentTranslate>(o.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(E=!1,o.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+y)**k))):y<0&&(b&&!x&&s.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===o.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(E=!1,o.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-y)**k))),E&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),n.allowSlidePrev||n.allowSlideNext||(s.currentTranslate=s.startTranslate),o.threshold>0){if(!(Math.abs(y)>o.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,void(a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}o.followFinger&&!o.cssMode&&((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}})),s.register("7UVOE",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:s,touches:o,rtlTranslate:a,slidesGrid:l,enabled:c}=t;if(!c)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const h=(0,i.now)(),d=h-n.touchStartTime;if(t.allowClick){const e=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(e&&e[0]||u.target),t.emit("tap click",u),d<300&&h-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=(0,i.now)(),(0,i.nextTick)((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===o.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let f;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,f=s.followFinger?a?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(t.params.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:f});let p=0,m=t.slidesSizesGrid[0];for(let e=0;e<l.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[e+t]?f>=l[e]&&f<l[e+t]&&(p=e,m=l[e+t]-l[e]):f>=l[e]&&(p=e,m=l[l.length-1]-l[l.length-2])}let g=null,y=null;s.rewind&&(t.isBeginning?y=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const v=(f-l[p])/m,w=p<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(d>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(v>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?g:p+w):t.slideTo(p)),"prev"===t.swipeDirection&&(v>1-s.longSwipesRatio?t.slideTo(p+w):null!==y&&v<0&&Math.abs(v)>s.longSwipesRatio?t.slideTo(y):t.slideTo(p))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(p+w):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==g?g:p+w),"prev"===t.swipeDirection&&t.slideTo(null!==y?y:p))}}})),s.register("i41Or",(function(e,n){function i(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}t(e.exports,"default",(function(){return i}))})),s.register("9A257",(function(e,n){function i(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}t(e.exports,"default",(function(){return i}))})),s.register("lI65j",(function(e,n){function i(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let r;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();r=0===s?0:(e.translate-e.minTranslate())/s,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}t(e.exports,"default",(function(){return i}))})),s.register("7V4dh",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("fa3Xa");function r(e){(0,i.processLazyPreloader)(this,e.target),this.update()}})),s.register("6Vw97",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("6iUdR"),r=s("kp9jL"),o={setBreakpoint:i.default,getBreakpoint:r.default}})),s.register("6iUdR",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("dNWnP");const r=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function o(){const e=this,{realIndex:t,initialized:n,params:s,el:o}=e,a=s.breakpoints;if(!a||a&&0===Object.keys(a).length)return;const l=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const c=(l in a?a[l]:void 0)||e.originalParams,u=r(e,s),h=r(e,c),d=s.enabled;u&&!h?(o.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&h&&(o.classList.add(`${s.containerModifierClass}grid`),(c.grid.fill&&"column"===c.grid.fill||!c.grid.fill&&"column"===s.grid.fill)&&o.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=s[t]&&s[t].enabled,i=c[t]&&c[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const f=c.direction&&c.direction!==s.direction,p=s.loop&&(c.slidesPerView!==s.slidesPerView||f);f&&n&&e.changeDirection(),(0,i.extend)(e.params,c);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!m?e.disable():!d&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",c),p&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",c)}})),s.register("kp9jL",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("7xxPi");function r(e,t="window",n){if(!e||"container"===t&&!n)return;let r=!1;const s=(0,i.getWindow)(),o="window"===t?s.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:i,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(r=i):o<=n.clientWidth&&(r=i)}return r||"max"}})),s.register("5IPB6",(function(e,n){t(e.exports,"default",(function(){return o}));var i=s("lHwXw"),r=s("e5Gui"),o={addClasses:i.default,removeClasses:r.default}})),s.register("lHwXw",(function(e,n){function i(){const e=this,{classNames:t,params:n,rtl:i,el:r,device:s}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()}t(e.exports,"default",(function(){return i}))})),s.register("e5Gui",(function(e,n){function i(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}t(e.exports,"default",(function(){return i}))})),s.register("5rbog",(function(e,n){t(e.exports,"default",(function(){return i}));var i={checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}}})),s.register("1AMhv",(function(e,n){t(e.exports,"default",(function(){return i}));var i={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1}})),s.register("kmZuC",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e,t){return function(n={}){const r=Object.keys(n)[0],s=n[r];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in s?(!0===e[r]&&(e[r]={enabled:!0}),"object"!=typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),(0,i.extend)(t,n)):(0,i.extend)(t,n)):(0,i.extend)(t,n)}}})),s.register("790ii",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("fajkZ",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("1sSHk",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("iSRJB",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("e2yAf");function r({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const s=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function o(t){let n;return t&&"string"==typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"==typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function a(t,n){const i=e.params.navigation;(t=s(t)).forEach((t=>{t&&(t.classList[n?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass))}))}function l(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return a(n,!1),void a(t,!1);a(n,e.isBeginning&&!e.params.rewind),a(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function u(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function h(){const t=e.params.navigation;if(e.params.navigation=(0,i.default)(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=o(t.nextEl),r=o(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r}),n=s(n),r=s(r);const a=(n,i)=>{n&&n.addEventListener("click","next"===i?u:c),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>a(e,"next"))),r.forEach((e=>a(e,"prev")))}function d(){let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n);const i=(t,n)=>{t.removeEventListener("click","next"===n?u:c),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>i(e,"next"))),n.forEach((e=>i(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?f():(h(),l())})),n("toEdge fromEdge lock unlock",(()=>{l()})),n("destroy",(()=>{d()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:i,prevEl:o}=e.navigation;i=s(i),o=s(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!i.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;i.length?t=i[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),r(!0===t?"navigationShow":"navigationHide"),[...i,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),h(),l()},disable:f,update:l,init:h,destroy:d})}})),s.register("e2yAf",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach((s=>{if(!n[s]&&!0===n.auto){let o=(0,i.elementChildren)(e.el,`.${r[s]}`)[0];o||(o=(0,i.createElement)("div",r[s]),o.className=r[s],e.el.append(o)),n[s]=o,t[s]=o}})),n}})),s.register("62uwT",(function(e,n){t(e.exports,"default",(function(){return a}));var i=s("edm4W"),r=s("e2yAf"),o=s("dNWnP");function a({swiper:e,extendParams:t,on:n,emit:s}){const a="swiper-pagination";let l;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let c=0;const u=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function h(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function d(t,n){const{bulletActiveClass:i}=e.params.pagination;t&&(t=t[("prev"===n?"previous":"next")+"ElementSibling"])&&(t.classList.add(`${i}-${n}`),(t=t[("prev"===n?"previous":"next")+"ElementSibling"])&&t.classList.add(`${i}-${n}-${n}`))}function f(t){const n=t.target.closest((0,i.default)(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();const r=(0,o.elementIndex)(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;const t=e.getSlideIndexByData(r),n=e.getSlideIndexByData(e.realIndex);t>e.slides.length-e.loopedSlides&&e.loopFix({direction:t>n?"next":"prev",activeSlideIndex:t,slideTo:!1}),e.slideToLoop(r)}else e.slideTo(r)}function p(){const t=e.rtl,n=e.params.pagination;if(h())return;let r,a,f=e.pagination.el;f=u(f);const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,m=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(a=e.previousRealIndex||0,r=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):void 0!==e.snapIndex?(r=e.snapIndex,a=e.previousSnapIndex):(a=e.previousIndex||0,r=e.activeIndex||0),"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const i=e.pagination.bullets;let s,u,h;if(n.dynamicBullets&&(l=(0,o.elementOuterSize)(i[0],e.isHorizontal()?"width":"height",!0),f.forEach((t=>{t.style[e.isHorizontal()?"width":"height"]=l*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==a&&(c+=r-(a||0),c>n.dynamicMainBullets-1?c=n.dynamicMainBullets-1:c<0&&(c=0)),s=Math.max(r-c,0),u=s+(Math.min(i.length,n.dynamicMainBullets)-1),h=(u+s)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),f.length>1)i.forEach((e=>{const t=(0,o.elementIndex)(e);t===r&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets&&(t>=s&&t<=u&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),t===s&&d(e,"prev"),t===u&&d(e,"next"))}));else{const e=i[r];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets){const e=i[s],t=i[u];for(let e=s;e<=u;e+=1)i[e]&&i[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));d(e,"prev"),d(t,"next")}}if(n.dynamicBullets){const r=Math.min(i.length,n.dynamicMainBullets+4),s=(l*r-l)/2-h*l,o=t?"right":"left";i.forEach((t=>{t.style[e.isHorizontal()?o:"top"]=`${s}px`}))}}f.forEach(((t,o)=>{if("fraction"===n.type&&(t.querySelectorAll((0,i.default)(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(r+1)})),t.querySelectorAll((0,i.default)(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(m)}))),"progressbar"===n.type){let s;s=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const o=(r+1)/m;let a=1,l=1;"horizontal"===s?a=o:l=o,t.querySelectorAll((0,i.default)(n.progressbarFillClass)).forEach((t=>{t.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${l})`,t.style.transitionDuration=`${e.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(t.innerHTML=n.renderCustom(e,r+1,m),0===o&&s("paginationRender",t)):(0===o&&s("paginationRender",t),s("paginationUpdate",t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](n.lockClass)}))}function m(){const t=e.params.pagination;if(h())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let r=e.pagination.el;r=u(r);let o="";if("bullets"===t.type){let i=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&i>n&&(i=n);for(let n=0;n<i;n+=1)t.renderBullet?o+=t.renderBullet.call(e,n,t.bulletClass):o+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`}"fraction"===t.type&&(o=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),"progressbar"===t.type&&(o=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],r.forEach((n=>{"custom"!==t.type&&(n.innerHTML=o||""),"bullets"===t.type&&e.pagination.bullets.push(...n.querySelectorAll((0,i.default)(t.bulletClass)))})),"custom"!==t.type&&s("paginationRender",r[0])}function g(){e.params.pagination=(0,r.default)(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n;"string"==typeof t.el&&e.isElement&&(n=e.el.shadowRoot.querySelector(t.el)),n||"string"!=typeof t.el||(n=[...document.querySelectorAll(t.el)]),n||(n=t.el),n&&0!==n.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.filter((t=>(0,o.elementParents)(t,".swiper")[0]===e.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=u(n),n.forEach((n=>{"bullets"===t.type&&t.clickable&&n.classList.add(t.clickableClass),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),c=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener("click",f),e.enabled||n.classList.add(t.lockClass)})))}function y(){const t=e.params.pagination;if(h())return;let n=e.pagination.el;n&&(n=u(n),n.forEach((n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&n.removeEventListener("click",f)}))),e.pagination.bullets&&e.pagination.bullets.forEach((e=>e.classList.remove(...t.bulletActiveClass.split(" "))))}n("changeDirection",(()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:n}=e.pagination;n=u(n),n.forEach((n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)}))})),n("init",(()=>{!1===e.params.pagination.enabled?v():(g(),m(),p())})),n("activeIndexChange",(()=>{void 0===e.snapIndex&&p()})),n("snapIndexChange",(()=>{p()})),n("snapGridLengthChange",(()=>{m(),p()})),n("destroy",(()=>{y()})),n("enable disable",(()=>{let{el:t}=e.pagination;t&&(t=u(t),t.forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass))))})),n("lock unlock",(()=>{p()})),n("click",((t,n)=>{const i=n.target;let{el:r}=e.pagination;if(Array.isArray(r)||(r=[r].filter((e=>!!e))),e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=r[0].classList.contains(e.params.pagination.hiddenClass);s(!0===t?"paginationShow":"paginationHide"),r.forEach((t=>t.classList.toggle(e.params.pagination.hiddenClass)))}}));const v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=u(t),t.forEach((t=>t.classList.add(e.params.pagination.paginationDisabledClass)))),y()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=u(t),t.forEach((t=>t.classList.remove(e.params.pagination.paginationDisabledClass)))),g(),m(),p()},disable:v,render:m,update:p,init:g,destroy:y})}})),s.register("edm4W",(function(e,n){function i(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}t(e.exports,"default",(function(){return i}))})),s.register("hKwG4",(function(e,t){s("7xxPi"),s("dNWnP"),s("e2yAf")})),s.register("ePkwZ",(function(e,t){s("dNWnP")})),s.register("lrfdb",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("kjN5y",(function(e,t){s("dNWnP")})),s.register("eVziZ",(function(e,t){s("edm4W"),s("dNWnP")})),s.register("9azrO",(function(e,t){s("7xxPi")})),s.register("3oxNJ",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("gs7Pm",(function(e,t){s("7xxPi")})),s.register("jBPWu",(function(e,t){s("7xxPi"),s("dNWnP")})),s.register("ci9Ge",(function(e,t){s("dNWnP")})),s.register("eVDS1",(function(e,t){})),s.register("53omQ",(function(e,t){s("frRZG"),s("YUBdp"),s("86k5H"),s("83a8T"),s("dIPpB")})),s.register("frRZG",(function(e,n){function i(e){const t=this,{params:n,slidesEl:i}=t;n.loop&&t.loopDestroy();const r=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.append(t.children[0]),t.innerHTML=""}else i.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&r(e[t]);else r(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update()}t(e.exports,"default",(function(){return i}))})),s.register("YUBdp",(function(e,n){function i(e){const t=this,{params:n,activeIndex:i,slidesEl:r}=t;n.loop&&t.loopDestroy();let s=i+1;const o=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,r.prepend(t.children[0]),t.innerHTML=""}else r.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&o(e[t]);s=i+e.length}else o(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),t.slideTo(s,0,!1)}t(e.exports,"default",(function(){return i}))})),s.register("86k5H",(function(e,n){function i(e,t){const n=this,{params:i,activeIndex:r,slidesEl:s}=n;let o=r;i.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.recalcSlides());const a=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=a)return void n.appendSlide(t);let l=o>e?o+1:o;const c=[];for(let t=a-1;t>=e;t-=1){const e=n.slides[t];e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&s.append(t[e]);l=o>e?o+t.length:o}else s.append(t);for(let e=0;e<c.length;e+=1)s.append(c[e]);n.recalcSlides(),i.loop&&n.loopCreate(),i.observer&&!n.isElement||n.update(),i.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}t(e.exports,"default",(function(){return i}))})),s.register("83a8T",(function(e,n){function i(e){const t=this,{params:n,activeIndex:i}=t;let r=i;n.loop&&(r-=t.loopedSlides,t.loopDestroy());let s,o=r;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)s=e[n],t.slides[s]&&t.slides[s].remove(),s<o&&(o-=1);o=Math.max(o,0)}else s=e,t.slides[s]&&t.slides[s].remove(),s<o&&(o-=1),o=Math.max(o,0);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),n.loop?t.slideTo(o+t.loopedSlides,0,!1):t.slideTo(o,0,!1)}t(e.exports,"default",(function(){return i}))})),s.register("dIPpB",(function(e,n){function i(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}t(e.exports,"default",(function(){return i}))})),s.register("4LjcT",(function(e,t){s("lPi1I"),s("lwSOa"),s("5KAGo"),s("dNWnP")})),s.register("lPi1I",(function(e,n){function i(e){const{effect:t,swiper:n,on:i,setTranslate:r,setTransition:s,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let u;i("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),i("setTranslate",(()=>{n.params.effect===t&&r()})),i("setTransition",((e,i)=>{n.params.effect===t&&s(i)})),i("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),l()}})),i("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(r(),u=!1)})))}))}t(e.exports,"default",(function(){return i}))})),s.register("lwSOa",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e,t){const n=(0,i.getSlideTransformEl)(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}})),s.register("5KAGo",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r({swiper:e,duration:t,transformElements:n,allSlides:r}){const{activeIndex:s}=e;if(e.params.virtualTranslate&&0!==t){let t,o=!1;t=r?n:n.filter((t=>{const n=t.classList.contains("swiper-slide-transform")?(t=>{if(!t.parentElement)return e.slides.filter((e=>e.shadowEl&&e.shadowEl===t.parentNode))[0];return t.parentElement})(t):t;return e.getSlideIndex(n)===s})),t.forEach((t=>{(0,i.elementTransitionEnd)(t,(()=>{if(o)return;if(!e||e.destroyed)return;o=!0,e.animating=!1;const t=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(t)}))}))}}})),s.register("zm2LU",(function(e,t){s("lPi1I"),s("dNWnP")})),s.register("86nzb",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa"),s("5KAGo"),s("dNWnP")})),s.register("50QNq",(function(e,n){t(e.exports,"default",(function(){return r}));var i=s("dNWnP");function r(e,t,n){const r="swiper-slide-shadow"+(n?`-${n}`:""),s=(0,i.getSlideTransformEl)(t);let o=s.querySelector(`.${r}`);return o||(o=(0,i.createElement)("div","swiper-slide-shadow"+(n?`-${n}`:"")),s.append(o)),o}})),s.register("ajPpq",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa"),s("dNWnP")})),s.register("5T183",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa"),s("5KAGo"),s("dNWnP")})),s.register("1w9pC",(function(e,t){s("50QNq"),s("lPi1I"),s("lwSOa"),s("5KAGo"),s("dNWnP")})),s.register("7A9kL",(function(e,n){t(e.exports,"ukraineFounds",(function(){return i}));const i=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}]})),s.register("2uRvp",(function(e,t){const n=document.querySelector(".checkbox-label"),i=document.getElementById("checkbox");i.checked=!1,i.addEventListener("change",(()=>{console.log(i.checked),i.checked?(document.body.classList.toggle("dark-theme"),n.classList.toggle("checkbox-label--dark-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.toggle("dark-theme"),localStorage.setItem("theme","light-theme"),n.classList.toggle("checkbox-label--dark-theme"))}))})),s.register("fI3YV",(function(e,t){const n=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");i.addEventListener("click",(function(){i.setAttribute("aria-expanded",!0),i.classList.add("menu-btn--hide"),r.classList.remove("menu-btn--hide"),n.classList.add("menu-container--is-open"),document.body.classList.add("body-lock")})),r.addEventListener("click",(function(){i.setAttribute("aria-expanded",!1),i.classList.remove("menu-btn--hide"),r.classList.add("menu-btn--hide"),n.classList.remove("menu-container--is-open"),document.body.classList.remove("body-lock")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&n.classList.contains("menu-container--is-open")&&(n.classList.remove("menu-container--is-open"),i.classList.remove("menu-btn--hide"),r.classList.add("menu-btn--hide"),i.setAttribute("aria-expanded",!1),document.body.classList.remove("body-lock"))})),window.addEventListener("resize",(()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}))})),s.register("gGJi9",(function(e,t){s("aO7Lk"),s("5Fsvz"),s("hS9tM"),s("9ZLTV")})),s.register("aO7Lk",(function(e,t){!function(){const e=window.location.pathname;document.querySelectorAll(".page-nav__link").forEach((t=>{t.getAttribute("href")===e||t.getAttribute("href")===e+"index.html"?t.classList.add("page-nav__link--current"):t.classList.remove("page-nav__link--current")}))}()})),s.register("5Fsvz",(function(e,t){const n=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");i.addEventListener("click",(function(){i.setAttribute("aria-expanded",!0),i.classList.add("menu-btn--hide"),r.classList.remove("menu-btn--hide"),n.classList.add("menu-container--is-open"),document.body.classList.add("body-lock")})),r.addEventListener("click",(function(){i.setAttribute("aria-expanded",!1),i.classList.remove("menu-btn--hide"),r.classList.add("menu-btn--hide"),n.classList.remove("menu-container--is-open"),document.body.classList.remove("body-lock")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&n.classList.contains("menu-container--is-open")&&(n.classList.remove("menu-container--is-open"),i.classList.remove("menu-btn--hide"),r.classList.add("menu-btn--hide"),i.setAttribute("aria-expanded",!1),document.body.classList.remove("body-lock"))})),window.addEventListener("resize",(()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}))})),s.register("hS9tM",(function(e,t){const n=document.querySelector(".js-user");n&&n.addEventListener("click",(()=>{window.innerWidth<768||n.classList.toggle("user--is-active-btns-box")}))})),s.register("9ZLTV",(function(e,t){}));
//# sourceMappingURL=ShoppingPage.daf89342.js.map
