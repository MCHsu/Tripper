(self["webpackChunktripper"]=self["webpackChunktripper"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),l=n(7854),c=n(614),u=n(111),d=n(2597),h=n(648),p=n(6330),f=n(8880),m=n(8052),g=n(3070).f,v=n(7976),y=n(9518),w=n(7674),b=n(5112),E=n(9711),S=n(9909),T=S.enforce,I=S.get,x=l.Int8Array,_=x&&x.prototype,k=l.Uint8ClampedArray,C=k&&k.prototype,A=x&&y(x),O=_&&y(_),D=Object.prototype,P=l.TypeError,M=b("toStringTag"),R=E("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",L=o&&!!w&&"Opera"!==h(l.opera),j=!1,$={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},V=function(e){if(!u(e))return!1;var t=h(e);return"DataView"===t||d($,t)||d(F,t)},z=function(e){var t=y(e);if(u(t)){var n=I(t);return n&&d(n,N)?n[N]:z(t)}},U=function(e){if(!u(e))return!1;var t=h(e);return d($,t)||d(F,t)},B=function(e){if(U(e))return e;throw P("Target is not a typed array")},Y=function(e){if(c(e)&&(!w||v(A,e)))return e;throw P(p(e)+" is not a typed array constructor")},q=function(e,t,n,r){if(a){if(n)for(var i in $){var s=l[i];if(s&&d(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(c){}}}O[e]&&!n||m(O,e,n?t:L&&_[e]||t,r)}},H=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in $)if(i=l[r],i&&d(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return m(A,e,n?t:L&&A[e]||t)}catch(s){}}for(r in $)i=l[r],!i||i[e]&&!n||m(i,e,t)}};for(r in $)i=l[r],s=i&&i.prototype,s?T(s)[N]=i:L=!1;for(r in F)i=l[r],s=i&&i.prototype,s&&(T(s)[N]=i);if((!L||!c(A)||A===Function.prototype)&&(A=function(){throw P("Incorrect invocation")},L))for(r in $)l[r]&&w(l[r],A);if((!L||!O||O===D)&&(O=A.prototype,L))for(r in $)l[r]&&w(l[r].prototype,O);if(L&&y(C)!==O&&w(C,O),a&&!d(O,M))for(r in j=!0,g(O,M,{get:function(){return u(this)?this[R]:void 0}}),$)l[r]&&f(l[r],R,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:j&&R,aTypedArray:B,aTypedArrayConstructor:Y,exportTypedArrayMethod:q,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:z,isView:V,isTypedArray:U,TypedArray:A,TypedArrayPrototype:O}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9671:function(e,t,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,l){var c,u,d=s(n),h=i(d),p=r(a,l),f=o(h);while(f-- >0)if(c=h[f],u=p(c,f,d),u)switch(e){case 0:return c;case 1:return f}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(84),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),l=Object,c="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=l(e),a))?n:c?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var d=a[u];r(e,d)||n&&r(n,d)||l(e,d,c(t,d))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),l=n(9920),c=n(4705);e.exports=function(e,t){var n,u,d,h,p,f,m=e.target,g=e.global,v=e.stat;if(u=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(d in t){if(p=t[d],e.dontCallGetSet?(f=i(u,d),h=f&&f.value):h=u[d],n=c(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof p==typeof h)continue;l(p,h)}(e.sham||h&&h.sham)&&s(p,"sham",!0),o(u,d,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},9974:function(e,t,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},84:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=function(e){return r?o(e):function(){return s.apply(e,arguments)}}},1702:function(e,t,n){var r=n(4326),i=n(84);e.exports=function(e){if("Function"===r(e))return i(e)}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),l=n(111),c=n(8880),u=n(2597),d=n(5465),h=n(6200),p=n(3501),f="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(f);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=h("state");p[b]=!0,r=function(e,t){if(u(e,b))throw m(f);return t.facade=e,c(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,l=n(2788),c=n(9909),u=c.enforce,d=c.get,h=Object.defineProperty,p=o&&!r((function(){return 8!==h((function(){}),"length",{value:8}).length})),f=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?h(e,"name",{value:t,configurable:!0}):e.name=t),p&&n&&s(n,"arity")&&e.length!==n.arity&&h(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=u(e);return s(r,"source")||(r.source=f.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&d(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},30:function(e,t,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),l=n(490),c=n(317),u=n(6200),d=">",h="<",p="prototype",f="script",m=u("IE_PROTO"),g=function(){},v=function(e){return h+f+d+e+h+"/"+f+d},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=c("iframe"),n="java"+f+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var e=o.length;while(e--)delete b[p][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[p]=i(e),n=new g,g[p]=null,n[m]=e):n=b(),void 0===t?n:s.f(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),l=n(1956);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=l(t),c=i.length,u=0;while(c>u)s.f(e,n=i[u++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",p="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=u(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=l(t),u)try{return d(e,t)}catch(n){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),l=o("IE_PROTO"),c=Object,u=c.prototype;e.exports=a?c.getPrototypeOf:function(e){var t=s(e);if(r(t,l))return t[l];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof c?u:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);while(t.length>c)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),l=n(3307),c=i("wks"),u=r.Symbol,d=u&&u["for"],h=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(u,e)?c[e]=u[e]:c[e]=l&&d?d(t):h(t)}return c[e]}},7635:function(e,t,n){"use strict";var r=n(2109),i=n(9671).findLast,s=n(1223);r({target:"Array",proto:!0},{findLast:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("findLast")},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),l=n(7293),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),l=n(7207),c=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){l(n+r);var c=n;while(c--){var u=c+r;c in t?t[u]=t[c]:a(t,u)}for(var d=0;d<r;d++)t[d]=arguments[d]}return o(t,n+r)}})},4590:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,l=n(2597),c=n(5787),u=n(9587),d=n(6277),h=n(3678),p=n(1060),f=n(9781),m=n(1913),g="DOMException",v=s("Error"),y=s(g),w=function(){c(this,b);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=g,a(r,"stack",o(1,p(i.stack,1))),u(r,this,w),r},b=w.prototype=y.prototype,E="stack"in v(g),S="stack"in new y(1,2),T=y&&f&&Object.getOwnPropertyDescriptor(i,g),I=!!T&&!(T.writable&&T.configurable),x=E&&!I&&!S;r({global:!0,constructor:!0,forced:m||x},{DOMException:x?w:y});var _=s(g),k=_.prototype;if(k.constructor!==_)for(var C in m||a(k,"constructor",o(1,_)),h)if(l(h,C)){var A=h[C],O=A.s;l(_,O)||a(_,O,o(6,A.c))}},343:function(){},223:function(e,t,n){"use strict";n.d(t,{$s:function(){return W},BH:function(){return y},G6:function(){return x},L:function(){return l},LL:function(){return D},Pz:function(){return v},ZR:function(){return O},aH:function(){return g},b$:function(){return T},eu:function(){return k},hl:function(){return _},m9:function(){return K},ne:function(){return V},pd:function(){return F},q4:function(){return m},ru:function(){return S},tV:function(){return c},uI:function(){return b},vZ:function(){return N},w1:function(){return I},xO:function(){return j},xb:function(){return R},z$:function(){return w},zI:function(){return C},zd:function(){return $}});n(2801),n(7658);
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const l=i<e.length,c=l?n[e.charAt(i)]:64;++i;const u=i<e.length,d=u?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==c||null==d)throw new o;const h=t<<2|a>>4;if(r.push(h),64!==c){const e=a<<4&240|c>>2;if(r.push(e),64!==d){const e=c<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const d=()=>u().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/Tripper/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},p=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},f=()=>{try{return d()||h()||p()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};
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
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){var e;const t=null===(e=f())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){try{return"object"===typeof indexedDB}catch(e){return!1}}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function C(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
 */const A="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function P(e,t){return e.replace(M,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
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
 */function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(L(n)&&L(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
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
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function F(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function V(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
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
const Y=1e3,q=2,H=144e5,G=.5;function W(e,t=Y,n=q){const r=t*Math.pow(n,e),i=Math.round(G*r*(Math.random()-.5)*2);return Math.min(H,r+i)}
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
function K(e){return e&&e._delegate?e._delegate:e}},6906:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])}},6846:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})])}},9265:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])}},7677:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})])}},168:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})])}},2430:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})])}},9488:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])}},4196:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}},4217:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})])}},4350:function(e,t,n){const{createElementVNode:r,openBlock:i,createElementBlock:s}=n(6866);e.exports=function(e,t){return i(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}},4870:function(e,t,n){"use strict";n.d(t,{$y:function(){return Re},B:function(){return o},BK:function(){return et},Bj:function(){return s},EB:function(){return c},Fl:function(){return st},IU:function(){return je},Jd:function(){return C},OT:function(){return Oe},PG:function(){return Me},SU:function(){return Ke},Um:function(){return Ae},Vh:function(){return nt},WL:function(){return Qe},X$:function(){return P},X3:function(){return Le},XI:function(){return qe},Xl:function(){return $e},YS:function(){return De},ZM:function(){return Ze},cE:function(){return I},dq:function(){return Be},iH:function(){return Ye},j:function(){return O},lk:function(){return A},nZ:function(){return l},oR:function(){return We},qj:function(){return Ce},qq:function(){return S},sT:function(){return x},yT:function(){return Ne}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function l(){return i}function c(e){i&&i.cleanups.push(e)}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},d=e=>(e.w&v)>0,h=e=>(e.n&v)>0,p=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];d(i)&&!h(i)?i.delete(e):t[n++]=i,i.w&=~v,i.n&=~v}t.length=n}},m=new WeakMap;let g=0,v=1;const y=30;let w;const b=Symbol(""),E=Symbol("");class S{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=w,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=w,w=this,_=!0,v=1<<++g,g<=y?p(this):T(this),this.fn()}finally{g<=y&&f(this),v=1<<--g,w=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w===this?this.deferStop=!0:this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function I(e,t){e.effect&&(e=e.effect.fn);const n=new S(e);t&&((0,r.l7)(n,t),t.scope&&a(n,t.scope)),t&&t.lazy||n.run();const i=n.run.bind(n);return i.effect=n,i}function x(e){e.effect.stop()}let _=!0;const k=[];function C(){k.push(_),_=!1}function A(){const e=k.pop();_=void 0===e||e}function O(e,t,n){if(_&&w){let t=m.get(e);t||m.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const i=void 0;D(r,i)}}function D(e,t){let n=!1;g<=y?h(e)||(e.n|=v,n=!d(e)):n=!e.has(w),n&&(e.add(w),w.deps.push(e))}function P(e,t,n,i,s,o){const a=m.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(b)),(0,r._N)(e)&&l.push(a.get(E)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(b)),(0,r._N)(e)&&l.push(a.get(E)));break;case"set":(0,r._N)(e)&&l.push(a.get(b));break}if(1===l.length)l[0]&&M(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);M(u(e))}}function M(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==w||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),j=B(),$=B(!1,!0),F=B(!0),V=B(!0,!0),z=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=je(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(je)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){C();const n=je(this)[t].apply(this,e);return A(),n}})),e}function B(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?xe:Ie:t?Te:Se).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(z,i))return Reflect.get(z,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?L.has(i):N(i))?a:(e||O(n,"get",i),t?a:Be(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Oe(a):Ce(a):a)}}const Y=H(),q=H(!0);function H(e=!1){return function(t,n,i,s){let o=t[n];if(Re(o)&&Be(o)&&!Be(i))return!1;if(!e&&(Ne(i)||Re(i)||(o=je(o),i=je(i)),!(0,r.kJ)(t)&&Be(o)&&!Be(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,s);return t===je(s)&&(a?(0,r.aU)(i,o)&&P(t,"set",n,i,o):P(t,"add",n,i)),l}}function G(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&P(e,"delete",t,void 0,i),s}function W(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||O(e,"has",t),n}function K(e){return O(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}const X={get:j,set:Y,deleteProperty:G,has:W,ownKeys:K},Q={get:F,set(e,t){return!0},deleteProperty(e,t){return!0}},J=(0,r.l7)({},X,{get:$,set:q}),Z=(0,r.l7)({},Q,{get:V}),ee=e=>e,te=e=>Reflect.getPrototypeOf(e);function ne(e,t,n=!1,r=!1){e=e["__v_raw"];const i=je(e),s=je(t);n||(t!==s&&O(i,"get",t),O(i,"get",s));const{has:o}=te(i),a=r?ee:n?Ve:Fe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function re(e,t=!1){const n=this["__v_raw"],r=je(n),i=je(e);return t||(e!==i&&O(r,"has",e),O(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ie(e,t=!1){return e=e["__v_raw"],!t&&O(je(e),"iterate",b),Reflect.get(e,"size",e)}function se(e){e=je(e);const t=je(this),n=te(t),r=n.has.call(t,e);return r||(t.add(e),P(t,"add",e,e)),this}function oe(e,t){t=je(t);const n=je(this),{has:i,get:s}=te(n);let o=i.call(n,e);o||(e=je(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&P(n,"set",e,t,a):P(n,"add",e,t),this}function ae(e){const t=je(this),{has:n,get:r}=te(t);let i=n.call(t,e);i||(e=je(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&P(t,"delete",e,void 0,s),o}function le(){const e=je(this),t=0!==e.size,n=void 0,r=e.clear();return t&&P(e,"clear",void 0,void 0,n),r}function ce(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=je(s),a=t?ee:e?Ve:Fe;return!e&&O(o,"iterate",b),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ue(e,t,n){return function(...i){const s=this["__v_raw"],o=je(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...i),d=n?ee:t?Ve:Fe;return!t&&O(o,"iterate",c?E:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function de(e){return function(...t){return"delete"!==e&&this}}function he(){const e={get(e){return ne(this,e)},get size(){return ie(this)},has:re,add:se,set:oe,delete:ae,clear:le,forEach:ce(!1,!1)},t={get(e){return ne(this,e,!1,!0)},get size(){return ie(this)},has:re,add:se,set:oe,delete:ae,clear:le,forEach:ce(!1,!0)},n={get(e){return ne(this,e,!0)},get size(){return ie(this,!0)},has(e){return re.call(this,e,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:ce(!0,!1)},r={get(e){return ne(this,e,!0,!0)},get size(){return ie(this,!0)},has(e){return re.call(this,e,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:ce(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ue(i,!1,!1),n[i]=ue(i,!0,!1),t[i]=ue(i,!1,!0),r[i]=ue(i,!0,!0)})),[e,n,t,r]}const[pe,fe,me,ge]=he();function ve(e,t){const n=t?e?ge:me:e?fe:pe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const ye={get:ve(!1,!1)},we={get:ve(!1,!0)},be={get:ve(!0,!1)},Ee={get:ve(!0,!0)};const Se=new WeakMap,Te=new WeakMap,Ie=new WeakMap,xe=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ke(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,r.W7)(e))}function Ce(e){return Re(e)?e:Pe(e,!1,X,ye,Se)}function Ae(e){return Pe(e,!1,J,we,Te)}function Oe(e){return Pe(e,!0,Q,be,Ie)}function De(e){return Pe(e,!0,Z,Ee,xe)}function Pe(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ke(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function Me(e){return Re(e)?Me(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Re(e){return!(!e||!e["__v_isReadonly"])}function Ne(e){return!(!e||!e["__v_isShallow"])}function Le(e){return Me(e)||Re(e)}function je(e){const t=e&&e["__v_raw"];return t?je(t):e}function $e(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Fe=e=>(0,r.Kn)(e)?Ce(e):e,Ve=e=>(0,r.Kn)(e)?Oe(e):e;function ze(e){_&&w&&(e=je(e),D(e.dep||(e.dep=u())))}function Ue(e,t){e=je(e),e.dep&&M(e.dep)}function Be(e){return!(!e||!0!==e.__v_isRef)}function Ye(e){return He(e,!1)}function qe(e){return He(e,!0)}function He(e,t){return Be(e)?e:new Ge(e,t)}class Ge{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Fe(e)}get value(){return ze(this),this._value}set value(e){const t=this.__v_isShallow||Ne(e)||Re(e);e=t?e:je(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Fe(e),Ue(this,e))}}function We(e){Ue(e,void 0)}function Ke(e){return Be(e)?e.value:e}const Xe={get:(e,t,n)=>Ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Be(i)&&!Be(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qe(e){return Me(e)?e:new Proxy(e,Xe)}class Je{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>ze(this)),(()=>Ue(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Ze(e){return new Je(e)}function et(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=nt(e,n);return t}class tt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function nt(e,t,n){const r=e[t];return Be(r)?r:new tt(e,t,n)}var rt;class it{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[rt]=!1,this._dirty=!0,this.effect=new S(e,(()=>{this._dirty||(this._dirty=!0,Ue(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=je(this);return ze(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function st(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new it(i,s,o||!s,n);return a}rt="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},$y:function(){return r.$y},Ah:function(){return Qe},B:function(){return r.B},BK:function(){return r.BK},Bj:function(){return r.Bj},Bz:function(){return kr},C3:function(){return Vn},C_:function(){return i.C_},Cn:function(){return z},EB:function(){return r.EB},Eo:function(){return un},F4:function(){return Gn},FN:function(){return ar},Fl:function(){return xr},G:function(){return Yr},HX:function(){return U},HY:function(){return In},Ho:function(){return Wn},IU:function(){return r.IU},JJ:function(){return ce},Jd:function(){return Xe},KU:function(){return o},Ko:function(){return ht},LL:function(){return lt},MW:function(){return _r},MX:function(){return Vr},Mr:function(){return Fr},Nv:function(){return pt},OT:function(){return r.OT},Ob:function(){return Le},P$:function(){return Te},PG:function(){return r.PG},Q2:function(){return ct},Q6:function(){return Ae},RC:function(){return Pe},Rh:function(){return he},Rr:function(){return Or},S3:function(){return l},SU:function(){return r.SU},U2:function(){return xe},Uc:function(){return jr},Uk:function(){return Kn},Um:function(){return r.Um},Us:function(){return cn},Vh:function(){return r.Vh},WI:function(){return ft},WL:function(){return r.WL},WY:function(){return Cr},Wm:function(){return qn},X3:function(){return r.X3},XI:function(){return r.XI},Xl:function(){return r.Xl},Xn:function(){return We},Y1:function(){return vr},Y3:function(){return w},Y8:function(){return be},YP:function(){return me},YS:function(){return r.YS},Yq:function(){return Ze},ZK:function(){return s},ZM:function(){return r.ZM},Zq:function(){return $r},_:function(){return Yn},_A:function(){return i._A},aZ:function(){return Oe},b9:function(){return Ar},bT:function(){return et},bv:function(){return Ge},cE:function(){return r.cE},d1:function(){return tt},dD:function(){return V},dG:function(){return tr},dl:function(){return $e},dq:function(){return r.dq},ec:function(){return M},eq:function(){return qr},f3:function(){return ue},h:function(){return Lr},hR:function(){return i.hR},i8:function(){return Ur},iD:function(){return Ln},iH:function(){return r.iH},ic:function(){return Ke},j4:function(){return jn},j5:function(){return i.j5},kC:function(){return i.kC},kq:function(){return Qn},l1:function(){return Dr},lA:function(){return $n},lR:function(){return Sn},m0:function(){return de},mW:function(){return O},mv:function(){return Nr},mx:function(){return gt},n4:function(){return Z},nK:function(){return Ce},nQ:function(){return zr},nZ:function(){return r.nZ},oR:function(){return r.oR},of:function(){return yr},p1:function(){return Rr},qG:function(){return kn},qZ:function(){return Rn},qb:function(){return I},qj:function(){return r.qj},qq:function(){return r.qq},ry:function(){return Hr},sT:function(){return r.sT},se:function(){return Fe},sv:function(){return _n},uE:function(){return Xn},u_:function(){return Mr},up:function(){return ot},vl:function(){return Je},vs:function(){return i.vs},w5:function(){return B},wF:function(){return He},wg:function(){return On},wy:function(){return nt},xv:function(){return xn},yT:function(){return r.yT},yX:function(){return pe},zw:function(){return i.zw}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,...t){}function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){l(s,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{l(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(a(e[i],t,n,r));return s}function l(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,d=!1;const h=[];let p=0;const f=[];let m=null,g=0;const v=Promise.resolve();let y=null;function w(e){const t=y||v;return e?t.then(this?e.bind(this):e):t}function b(e){let t=p+1,n=h.length;while(t<n){const r=t+n>>>1,i=k(h[r]);i<e?t=r+1:n=r}return t}function E(e){h.length&&h.includes(e,u&&e.allowRecurse?p+1:p)||(null==e.id?h.push(e):h.splice(b(e.id),0,e),S())}function S(){u||d||(d=!0,y=v.then(A))}function T(e){const t=h.indexOf(e);t>p&&h.splice(t,1)}function I(e){(0,i.kJ)(e)?f.push(...e):m&&m.includes(e,e.allowRecurse?g+1:g)||f.push(e),S()}function x(e,t=(u?p+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function _(e){if(f.length){const e=[...new Set(f)];if(f.length=0,m)return void m.push(...e);for(m=e,m.sort(((e,t)=>k(e)-k(t))),g=0;g<m.length;g++)m[g]();m=null,g=0}}const k=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){d=!1,u=!0,h.sort(C);i.dG;try{for(p=0;p<h.length;p++){const e=h[p];e&&!1!==e.active&&o(e,null,14)}}finally{p=0,h.length=0,_(e),u=!1,y=null,(h.length||f.length)&&A(e)}}new Set;new Map;let O,D=[],P=!1;function M(e,t){var n,r;if(O=e,O)O.enabled=!0,D.forEach((({event:e,args:t})=>O.emit(e,...t))),D=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(r=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===r?void 0:r.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push((e=>{M(e,t)})),setTimeout((()=>{O||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,P=!0,D=[])}),3e3)}else P=!0,D=[]}function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),l=o&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.He))}let c;let u=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!u&&o&&(u=r[c=(0,i.hR)((0,i.rs)(t))]),u&&a(u,e,6,s);const d=r[c+"Once"];if(d){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,a(d,e,6,s)}}function N(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function L(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let j=null,$=null;function F(e){const t=j;return j=e,$=e&&e.type.__scopeId||null,t}function V(e){$=e}function z(){$=null}const U=e=>B;function B(e,t=j,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Rn(-1);const i=F(t);let s;try{s=e(...n)}finally{F(i),r._d&&Rn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Y(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:d,render:h,renderCache:p,data:f,setupState:m,ctx:g,inheritAttrs:v}=e;let y,w;const b=F(e);try{if(4&n.shapeFlag){const e=s||r;y=Jn(h.call(e,e,p,o,m,f,g)),w=u}else{const e=t;0,y=Jn(e.length>1?e(o,{attrs:u,slots:c,emit:d}):e(o,null)),w=t.props?u:H(u)}}catch(S){Cn.length=0,l(S,e,1),y=qn(_n)}let E=y;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=E;e.length&&7&t&&(a&&e.some(i.tR)&&(w=G(w,a)),E=Wn(E,w))}return n.dirs&&(E=Wn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,F(b),y}function q(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!$n(r))return;if(r.type!==_n||"v-if"===r.children){if(t)return;t=r}}return t}const H=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},G=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function W(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||K(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?K(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!L(c,n))return!0}}return!1}function K(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!L(n,s))return!0}return!1}function X({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Q=e=>e.__isSuspense,J={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,s,o,a,l,c){null==e?te(t,n,r,i,s,o,a,l,c):ne(e,t,n,r,i,o,a,l,c)},hydrate:ie,create:re,normalize:se},Z=J;function ee(e,t){const n=e.props&&e.props[t];(0,i.mf)(n)&&n()}function te(e,t,n,r,i,s,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),h=e.suspense=re(e,i,r,t,d,n,s,o,a,l);c(null,h.pendingBranch=e.ssContent,d,null,r,h,s,o),h.deps>0?(ee(e,"onPending"),ee(e,"onFallback"),c(null,e.ssFallback,t,n,r,null,s,o),le(h,e.ssFallback)):h.resolve()}function ne(e,t,n,r,i,s,o,a,{p:l,um:c,o:{createElement:u}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const h=t.ssContent,p=t.ssFallback,{activeBranch:f,pendingBranch:m,isInFallback:g,isHydrating:v}=d;if(m)d.pendingBranch=h,Fn(h,m)?(l(m,h,d.hiddenContainer,null,i,d,s,o,a),d.deps<=0?d.resolve():g&&(l(f,p,n,r,i,null,s,o,a),le(d,p))):(d.pendingId++,v?(d.isHydrating=!1,d.activeBranch=m):c(m,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),g?(l(null,h,d.hiddenContainer,null,i,d,s,o,a),d.deps<=0?d.resolve():(l(f,p,n,r,i,null,s,o,a),le(d,p))):f&&Fn(h,f)?(l(f,h,n,r,i,d,s,o,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,i,d,s,o,a),d.deps<=0&&d.resolve()));else if(f&&Fn(h,f))l(f,h,n,r,i,d,s,o,a),le(d,h);else if(ee(t,"onPending"),d.pendingBranch=h,d.pendingId++,l(null,h,d.hiddenContainer,null,i,d,s,o,a),d.deps<=0)d.resolve();else{const{timeout:e,pendingId:t}=d;e>0?setTimeout((()=>{d.pendingId===t&&d.fallback(p)}),e):0===e&&d.fallback(p)}}function re(e,t,n,r,s,o,a,c,u,d,h=!1){const{p:p,m:f,um:m,n:g,o:{parentNode:v,remove:y}}=d,w=(0,i.He)(e.props&&e.props.timeout),b={vnode:e,parent:t,parentComponent:n,isSVG:a,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof w?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:h,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:r,pendingId:i,effects:s,parentComponent:o,container:a}=b;if(b.isHydrating)b.isHydrating=!1;else if(!e){const e=n&&r.transition&&"out-in"===r.transition.mode;e&&(n.transition.afterLeave=()=>{i===b.pendingId&&f(r,a,t,0)});let{anchor:t}=b;n&&(t=g(n),m(n,o,b,!0)),e||f(r,a,t,0)}le(b,r),b.pendingBranch=null,b.isInFallback=!1;let l=b.parent,c=!1;while(l){if(l.pendingBranch){l.effects.push(...s),c=!0;break}l=l.parent}c||I(s),b.effects=[],ee(t,"onResolve")},fallback(e){if(!b.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:i,isSVG:s}=b;ee(t,"onFallback");const o=g(n),a=()=>{b.isInFallback&&(p(null,e,i,o,r,null,s,c,u),le(b,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=a),b.isInFallback=!0,m(n,r,null,!0),l||a()},move(e,t,n){b.activeBranch&&f(b.activeBranch,e,t,n),b.container=e},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(e,t){const n=!!b.pendingBranch;n&&b.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{l(t,e,0)})).then((i=>{if(e.isUnmounted||b.isUnmounted||b.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;gr(e,i,!1),r&&(s.el=r);const o=!r&&e.subTree.el;t(e,s,v(r||e.subTree.el),r?null:g(e.subTree),b,a,u),o&&y(o),X(e,s.el),n&&0===--b.deps&&b.resolve()}))},unmount(e,t){b.isUnmounted=!0,b.activeBranch&&m(b.activeBranch,n,e,t),b.pendingBranch&&m(b.pendingBranch,n,e,t)}};return b}function ie(e,t,n,r,i,s,o,a,l){const c=t.suspense=re(t,r,n,e.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=l(e,c.pendingBranch=t.ssContent,n,c,s,o);return 0===c.deps&&c.resolve(),u}function se(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=oe(r?n.default:n),e.ssFallback=r?oe(n.fallback):qn(_n)}function oe(e){let t;if((0,i.mf)(e)){const n=Mn&&e._c;n&&(e._d=!1,On()),e=e(),n&&(e._d=!0,t=An,Dn())}if((0,i.kJ)(e)){const t=q(e);0,e=t}return e=Jn(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function ae(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):I(e)}function le(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,X(r,i))}function ce(e,t){if(or){let n=or.provides;const r=or.parent&&or.parent.provides;r===n&&(n=or.provides=Object.create(r)),n[e]=t}else 0}function ue(e,t,n=!1){const r=or||j;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function de(e,t){return ge(e,null,t)}function he(e,t){return ge(e,null,{flush:"post"})}function pe(e,t){return ge(e,null,{flush:"sync"})}const fe={};function me(e,t,n){return ge(e,t,n)}function ge(e,t,{immediate:n,deep:s,flush:l,onTrack:c,onTrigger:u}=i.kT){const d=or;let h,p,f=!1,m=!1;if((0,r.dq)(e)?(h=()=>e.value,f=(0,r.yT)(e)):(0,r.PG)(e)?(h=()=>e,s=!0):(0,i.kJ)(e)?(m=!0,f=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),h=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?we(e):(0,i.mf)(e)?o(e,d,2):void 0))):h=(0,i.mf)(e)?t?()=>o(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),a(e,d,3,[v])}:i.dG,t&&s){const e=h;h=()=>we(e())}let g,v=e=>{p=S.onStop=()=>{o(e,d,4)}};if(pr){if(v=i.dG,t?n&&a(t,d,3,[h(),m?[]:void 0,v]):h(),"sync"!==l)return i.dG;{const e=$r();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(fe):fe;const w=()=>{if(S.active)if(t){const e=S.run();(s||f||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(p&&p(),a(t,d,3,[e,y===fe?void 0:m&&y[0]===fe?[]:y,v]),y=e)}else S.run()};let b;w.allowRecurse=!!t,"sync"===l?b=w:"post"===l?b=()=>ln(w,d&&d.suspense):(w.pre=!0,d&&(w.id=d.uid),b=()=>E(w));const S=new r.qq(h,b);t?n?w():y=S.run():"post"===l?ln(S.run.bind(S),d&&d.suspense):S.run();const T=()=>{S.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,S)};return g&&g.push(T),T}function ve(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?ye(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=or;lr(this);const l=ge(s,o.bind(r),n);return a?lr(a):cr(),l}function ye(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function we(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))we(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)we(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{we(e,t)}));else if((0,i.PO)(e))for(const n in e)we(e[n],t);return e}function be(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ge((()=>{e.isMounted=!0})),Xe((()=>{e.isUnmounting=!0})),e}const Ee=[Function,Array],Se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ee,onEnter:Ee,onAfterEnter:Ee,onEnterCancelled:Ee,onBeforeLeave:Ee,onLeave:Ee,onAfterLeave:Ee,onLeaveCancelled:Ee,onBeforeAppear:Ee,onAppear:Ee,onAfterAppear:Ee,onAppearCancelled:Ee},setup(e,{slots:t}){const n=ar(),i=be();let s;return()=>{const o=t.default&&Ae(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==_n){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:c}=l;if(i.isLeaving)return _e(a);const u=ke(a);if(!u)return _e(a);const d=xe(u,l,i,n);Ce(u,d);const h=n.subTree,p=h&&ke(h);let f=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(p&&p.type!==_n&&(!Fn(u,p)||f)){const e=xe(p,l,i,n);if(Ce(p,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},_e(a);"in-out"===c&&u.type!==_n&&(e.delayLeave=(e,t,n)=>{const r=Ie(i,p);r[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},Te=Se;function Ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function xe(e,t,n,r){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:p,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,E=String(e.key),S=Ie(n,e),T=(e,t)=>{e&&a(e,r,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},x={mode:o,persisted:l,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=v||c}t._leaveCb&&t._leaveCb(!0);const i=S[E];i&&Fn(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=u,r=d,i=h;if(!n.isMounted){if(!s)return;t=y||u,r=w||d,i=b||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(p,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[t]),t._leaveCb=void 0,S[i]===e&&delete S[i])};S[i]=e,f?I(f,[t,o]):o()},clone(e){return xe(e,t,n,r)}};return x}function _e(e){if(Re(e))return e=Wn(e),e.children=null,e}function ke(e){return Re(e)?e.children?e.children[0]:void 0:e}function Ce(e,t){6&e.shapeFlag&&e.component?Ce(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ae(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===In?(128&o.patchFlag&&i++,r=r.concat(Ae(o.children,t,a))):(t||o.type!==_n)&&r.push(null!=a?Wn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Oe(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const De=e=>!!e.type.__asyncLoader;function Pe(e){(0,i.mf)(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:c=!0,onError:u}=e;let d,h=null,p=0;const f=()=>(p++,h=null,m()),m=()=>{let e;return h||(e=h=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),u)return new Promise(((t,n)=>{const r=()=>t(f()),i=()=>n(e);u(e,r,i,p+1)}));throw e})).then((t=>e!==h&&h?h:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),d=t,t))))};return Oe({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return d},setup(){const e=or;if(d)return()=>Me(d,e);const t=t=>{h=null,l(t,e,13,!s)};if(c&&e.suspense||pr)return m().then((t=>()=>Me(t,e))).catch((e=>(t(e),()=>s?qn(s,{error:e}):null)));const i=(0,r.iH)(!1),u=(0,r.iH)(),p=(0,r.iH)(!!o);return o&&setTimeout((()=>{p.value=!1}),o),null!=a&&setTimeout((()=>{if(!i.value&&!u.value){const e=new Error(`Async component timed out after ${a}ms.`);t(e),u.value=e}}),a),m().then((()=>{i.value=!0,e.parent&&Re(e.parent.vnode)&&E(e.parent.update)})).catch((e=>{t(e),u.value=e})),()=>i.value&&d?Me(d,e):u.value&&s?qn(s,{error:u.value}):n&&!p.value?qn(n):void 0}})}function Me(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,o=qn(e,r,i);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const Re=e=>e.type.__isKeepAlive,Ne={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=ar(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const s=new Map,o=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:h}}}=r,p=h("div");function f(e){Ue(e),d(e,n,l,!0)}function m(e){s.forEach(((t,n)=>{const r=Tr(t.type);!r||e&&e(r)||g(n)}))}function g(e){const t=s.get(e);a&&t.type===a.type?a&&Ue(a):f(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;u(e,t,n,0,l),c(o.vnode,e,t,n,o,l,r,e.slotScopeIds,s),ln((()=>{o.isDeactivated=!1,o.a&&(0,i.ir)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&nr(t,o.parent,e)}),l)},r.deactivate=e=>{const t=e.component;u(e,p,null,1,l),ln((()=>{t.da&&(0,i.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&nr(n,t.parent,e),t.isDeactivated=!0}),l)},me((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>je(e,t))),t&&m((e=>!je(t,e)))}),{flush:"post",deep:!0});let v=null;const y=()=>{null!=v&&s.set(v,Be(n.subTree))};return Ge(y),Ke(y),Xe((()=>{s.forEach((e=>{const{subTree:t,suspense:r}=n,i=Be(t);if(e.type!==i.type)f(e);else{Ue(i);const e=i.component.da;e&&ln(e,r)}}))})),()=>{if(v=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!$n(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=Be(r);const l=i.type,c=Tr(De(i)?i.type.__asyncResolved||{}:l),{include:u,exclude:d,max:h}=e;if(u&&(!c||!je(u,c))||d&&c&&je(d,c))return a=i,r;const p=null==i.key?l:i.key,f=s.get(p);return i.el&&(i=Wn(i),128&r.shapeFlag&&(r.ssContent=i)),v=p,f?(i.el=f.el,i.component=f.component,i.transition&&Ce(i,i.transition),i.shapeFlag|=512,o.delete(p),o.add(p)):(o.add(p),h&&o.size>parseInt(h,10)&&g(o.values().next().value)),i.shapeFlag|=256,a=i,Q(r.type)?r:i}}},Le=Ne;function je(e,t){return(0,i.kJ)(e)?e.some((e=>je(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function $e(e,t){Ve(e,"a",t)}function Fe(e,t){Ve(e,"da",t)}function Ve(e,t,n=or){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ye(t,r,n),n){let e=n.parent;while(e&&e.parent)Re(e.parent.vnode)&&ze(r,t,n,e),e=e.parent}}function ze(e,t,n,r){const s=Ye(t,e,r,!0);Qe((()=>{(0,i.Od)(r[t],s)}),n)}function Ue(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Be(e){return 128&e.shapeFlag?e.ssContent:e}function Ye(e,t,n=or,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),lr(n);const s=a(t,n,e,i);return cr(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const qe=e=>(t,n=or)=>(!pr||"sp"===e)&&Ye(e,((...e)=>t(...e)),n),He=qe("bm"),Ge=qe("m"),We=qe("bu"),Ke=qe("u"),Xe=qe("bum"),Qe=qe("um"),Je=qe("sp"),Ze=qe("rtg"),et=qe("rtc");function tt(e,t=or){Ye("ec",e,t)}function nt(e,t){const n=j;if(null===n)return e;const r=Sr(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&we(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function rt(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];o&&(c.oldValue=o[l].value);let u=c.dir[i];u&&((0,r.Jd)(),a(u,n,8,[e.el,c,e,t]),(0,r.lk)())}}const it="components",st="directives";function ot(e,t){return ut(it,e,!0,t)||e}const at=Symbol();function lt(e){return(0,i.HD)(e)?ut(it,e,!1)||e:e||at}function ct(e){return ut(st,e)}function ut(e,t,n=!0,r=!1){const s=j||or;if(s){const n=s.type;if(e===it){const e=Tr(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=dt(s[e]||n[e],t)||dt(s.appContext[e],t);return!o&&r?n:o}}function dt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function ht(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function pt(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,i.kJ)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function ft(e,t,n={},r,i){if(j.isCE||j.parent&&De(j.parent)&&j.parent.isCE)return"default"!==t&&(n.name=t),qn("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),On();const o=s&&mt(s(n)),a=jn(In,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function mt(e){return e.some((e=>!$n(e)||e.type!==_n&&!(e.type===In&&!mt(e.children))))?e:null}function gt(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.hR)(r)]=e[r];return n}const vt=e=>e?ur(e)?Sr(e)||e.proxy:vt(e.parent):null,yt=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vt(e.parent),$root:e=>vt(e.root),$emit:e=>e.emit,$options:e=>kt(e),$forceUpdate:e=>e.f||(e.f=()=>E(e.update)),$nextTick:e=>e.n||(e.n=w.bind(e.proxy)),$watch:e=>ve.bind(e)}),wt=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),bt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(wt(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];St&&(l[t]=0)}}const h=yt[t];let p,f;return h?("$attrs"===t&&(0,r.j)(e,"get",t),h(e)):(p=c.__cssModules)&&(p=p[t])?p:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(f=u.config.globalProperties,(0,i.RI)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return wt(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||wt(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(yt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Et=(0,i.l7)({},bt,{get(e,t){if(t!==Symbol.unscopables)return bt.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!(0,i.e1)(t);return n}});let St=!0;function Tt(e){const t=kt(e),n=e.proxy,s=e.ctx;St=!1,t.beforeCreate&&xt(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:d,created:h,beforeMount:p,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:S,render:T,renderTracked:I,renderTriggered:x,errorCaptured:_,serverPrefetch:k,expose:C,inheritAttrs:A,components:O,directives:D,filters:P}=t,M=null;if(d&&It(d,s,M,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(St=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=xr({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)_t(c[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{ce(t,e[t])}))}function R(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&xt(h,e,"c"),R(He,p),R(Ge,f),R(We,m),R(Ke,g),R($e,v),R(Fe,y),R(tt,_),R(et,I),R(Ze,x),R(Xe,b),R(Qe,S),R(Je,k),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),O&&(e.components=O),D&&(e.directives=D)}function It(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Pt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?ue(n.from||o,n.default,!0):ue(n.from||o):ue(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function xt(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function _t(e,t,n,r){const s=r.includes(".")?ye(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&me(s,n)}else if((0,i.mf)(e))me(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>_t(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&me(s,r,e)}else 0}function kt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:s.length||n||r?(c={},s.length&&s.forEach((e=>Ct(c,e,a,!0))),Ct(c,t,a)):c=t,(0,i.Kn)(t)&&o.set(t,c),c}function Ct(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ct(e,s,n,!0),i&&i.forEach((t=>Ct(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=At[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const At={data:Ot,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Rt,directives:Rt,watch:Nt,provide:Ot,inject:Dt};function Ot(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Dt(e,t){return Rt(Pt(e),Pt(t))}function Pt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Mt(e,t){return e?[...new Set([].concat(e,t))]:t}function Rt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Nt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Mt(e[r],t[r]);return n}function Lt(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,zn,1),e.propsDefaults=Object.create(null),$t(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function jt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(o),[u]=e.propsOptions;let d=!1;if(!(s||l>0)||16&l){let r;$t(e,t,o,a)&&(d=!0);for(const s in c)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Ft(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(L(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,d=!0);else{const t=(0,i._A)(s);o[t]=Ft(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function $t(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let d;o&&(0,i.RI)(o,d=(0,i._A)(r))?a&&a.includes(d)?(l||(l={}))[d]=u:n[d]=u:L(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,c=!0)}if(a){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=Ft(o,t,l,s[l],e,!(0,i.RI)(s,l))}}return c}function Ft(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(lr(s),r=i[n]=e.call(null,t),cr())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function Vt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,i.mf)(e)){const r=e=>{c=!0;const[n,r]=Vt(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let d=0;d<o.length;d++){0;const e=(0,i._A)(o[d]);zt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(zt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=Yt(Boolean,r.type),n=Yt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return(0,i.Kn)(e)&&r.set(e,u),u}function zt(e){return"$"!==e[0]}function Ut(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Bt(e,t){return Ut(e)===Ut(t)}function Yt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>Bt(t,e))):(0,i.mf)(t)&&Bt(t,e)?0:-1}const qt=e=>"_"===e[0]||"$stable"===e,Ht=e=>(0,i.kJ)(e)?e.map(Jn):[Jn(e)],Gt=(e,t,n)=>{if(t._n)return t;const r=B(((...e)=>Ht(t(...e))),n);return r._c=!1,r},Wt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(qt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Gt(s,n,r);else if(null!=n){0;const e=Ht(n);t[s]=()=>e}}},Kt=(e,t)=>{const n=Ht(t);e.slots.default=()=>n},Xt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Wt(t,e.slots={})}else e.slots={},t&&Kt(e,t);(0,i.Nj)(e.slots,zn,1)},Qt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Wt(t,s)),a=t}else t&&(Kt(e,t),a={default:1});if(o)for(const i in s)qt(i)||i in a||delete s[i]};function Jt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zt=0;function en(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Jt(),o=new Set;let a=!1;const l=s.app={_uid:Zt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ur,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,c){if(!a){0;const u=qn(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,c),a=!0,l._container=i,i.__vue_app__=l,Sr(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function tn(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>tn(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(De(s)&&!a)return;const l=4&s.shapeFlag?Sr(s.component)||s.component.proxy:s.el,c=a?null:l,{i:u,r:d}=e;const h=t&&t.r,p=u.refs===i.kT?u.refs={}:u.refs,f=u.setupState;if(null!=h&&h!==d&&((0,i.HD)(h)?(p[h]=null,(0,i.RI)(f,h)&&(f[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(d))o(d,u,12,[c,p]);else{const t=(0,i.HD)(d),s=(0,r.dq)(d);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(f,d)?f[d]:p[d]:d.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(p[d]=[l],(0,i.RI)(f,d)&&(f[d]=p[d])):(d.value=[l],e.k&&(p[e.k]=d.value))}else t?(p[d]=c,(0,i.RI)(f,d)&&(f[d]=c)):s&&(d.value=c,e.k&&(p[e.k]=c))};c?(r.id=-1,ln(r,n)):r()}else 0}}let nn=!1;const rn=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,sn=e=>8===e.nodeType;function on(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:a,remove:l,insert:c,createComment:u}}=e,d=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),_(),void(t._vnode=e);nn=!1,h(t.firstChild,e,null,null,null),_(),t._vnode=e,nn&&console.error("Hydration completed but contains mismatches.")},h=(n,r,i,l,u,d=!1)=>{const y=sn(n)&&"["===n.data,w=()=>g(n,r,i,l,u,y),{type:b,ref:E,shapeFlag:S,patchFlag:T}=r;let I=n.nodeType;r.el=n,-2===T&&(d=!1,r.dynamicChildren=null);let x=null;switch(b){case xn:3!==I?""===r.children?(c(r.el=s(""),a(n),n),x=n):x=w():(n.data!==r.children&&(nn=!0,n.data=r.children),x=o(n));break;case _n:x=8!==I||y?w():o(n);break;case kn:if(y&&(n=o(n),I=n.nodeType),1===I||3===I){x=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===x.nodeType?x.outerHTML:x.data),t===r.staticCount-1&&(r.anchor=x),x=o(x);return y?o(x):x}w();break;case In:x=y?m(n,r,i,l,u,d):w();break;default:if(1&S)x=1!==I||r.type.toLowerCase()!==n.tagName.toLowerCase()?w():p(n,r,i,l,u,d);else if(6&S){r.slotScopeIds=u;const e=a(n);if(t(r,e,null,i,l,rn(e),d),x=y?v(n):o(n),x&&sn(x)&&"teleport end"===x.data&&(x=o(x)),De(r)){let t;y?(t=qn(In),t.anchor=x?x.previousSibling:e.lastChild):t=3===n.nodeType?Kn(""):qn("div"),t.el=n,r.component.subTree=t}}else 64&S?x=8!==I?w():r.type.hydrate(n,r,i,l,u,d,e,f):128&S&&(x=r.type.hydrate(n,r,i,l,rn(a(n)),u,d,e,h))}return null!=E&&tn(E,null,l,r),x},p=(e,t,n,s,o,a)=>{a=a||!!t.dynamicChildren;const{type:c,props:u,patchFlag:d,shapeFlag:h,dirs:p}=t,m="input"===c&&p||"option"===c;if(m||-1!==d){if(p&&rt(t,null,n,"created"),u)if(m||!a||48&d)for(const t in u)(m&&t.endsWith("value")||(0,i.F7)(t)&&!(0,i.Gg)(t))&&r(e,t,null,u[t],!1,void 0,n);else u.onClick&&r(e,"onClick",null,u.onClick,!1,void 0,n);let c;if((c=u&&u.onVnodeBeforeMount)&&nr(c,n,t),p&&rt(t,null,n,"beforeMount"),((c=u&&u.onVnodeMounted)||p)&&ae((()=>{c&&nr(c,n,t),p&&rt(t,null,n,"mounted")}),s),16&h&&(!u||!u.innerHTML&&!u.textContent)){let r=f(e.firstChild,t,e,n,s,o,a);while(r){nn=!0;const e=r;r=r.nextSibling,l(e)}}else 8&h&&e.textContent!==t.children&&(nn=!0,e.textContent=t.children)}return e.nextSibling},f=(e,t,r,i,s,o,a)=>{a=a||!!t.dynamicChildren;const l=t.children,c=l.length;for(let u=0;u<c;u++){const t=a?l[u]:l[u]=Jn(l[u]);if(e)e=h(e,t,i,s,o,a);else{if(t.type===xn&&!t.children)continue;nn=!0,n(null,t,r,null,i,s,rn(r),o)}}return e},m=(e,t,n,r,i,s)=>{const{slotScopeIds:l}=t;l&&(i=i?i.concat(l):l);const d=a(e),h=f(o(e),t,d,n,r,i,s);return h&&sn(h)&&"]"===h.data?o(t.anchor=h):(nn=!0,c(t.anchor=u("]"),d,h),h)},g=(e,t,r,i,s,c)=>{if(nn=!0,t.el=null,c){const t=v(e);while(1){const n=o(e);if(!n||n===t)break;l(n)}}const u=o(e),d=a(e);return l(e),n(null,t,d,u,r,i,rn(d),s),u},v=e=>{let t=0;while(e)if(e=o(e),e&&sn(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return o(e);t--}return e};return[d,h]}function an(){}const ln=ae;function cn(e){return dn(e)}function un(e){return dn(e,on)}function dn(e,t){an();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:d,setElementText:h,parentNode:p,nextSibling:f,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Fn(e,t)&&(r=J(e),q(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:d}=t;switch(c){case xn:y(e,t,n,r);break;case _n:w(e,t,n,r);break;case kn:null==e&&b(t,n,r,o);break;case In:R(e,t,n,r,i,s,o,a,l);break;default:1&d?k(e,t,n,r,i,s,o,a,l):6&d?N(e,t,n,r,i,s,o,a,l):(64&d||128&d)&&c.process(e,t,n,r,i,s,o,a,l,ee)}null!=u&&i&&tn(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=f(e),s(e,n,r),e=i;s(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},k=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,l):D(e,t,i,s,o,a,l)},C=(e,t,n,r,o,c,u,d)=>{let p,f;const{type:m,props:g,shapeFlag:v,transition:y,dirs:w}=e;if(p=e.el=l(e.type,c,g&&g.is,g),8&v?h(p,e.children):16&v&&O(e.children,p,null,r,o,c&&"foreignObject"!==m,u,d),w&&rt(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(p,t,null,g[t],c,e.children,r,o,Q);"value"in g&&a(p,"value",null,g.value),(f=g.onVnodeBeforeMount)&&nr(f,r,e)}A(p,e,e.scopeId,u,r),w&&rt(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(p),s(p,t,n),((f=g&&g.onVnodeMounted)||b||w)&&ln((()=>{f&&nr(f,r,e),b&&y.enter(p),w&&rt(e,null,r,"mounted")}),o)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?Zn(e[c]):Jn(e[c]);v(null,l,t,n,r,i,s,o,a)}},D=(e,t,n,r,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||i.kT,m=t.props||i.kT;let g;n&&hn(n,!1),(g=m.onVnodeBeforeUpdate)&&nr(g,n,t,e),p&&rt(t,e,n,"beforeUpdate"),n&&hn(n,!0);const v=s&&"foreignObject"!==t.type;if(d?P(e.dynamicChildren,d,c,n,r,v,o):l||V(e,t,c,null,n,r,v,o,!1),u>0){if(16&u)M(c,t,f,m,n,r,s);else if(2&u&&f.class!==m.class&&a(c,"class",null,m.class,s),4&u&&a(c,"style",f.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=f[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,r,Q)}}1&u&&e.children!==t.children&&h(c,t.children)}else l||null!=d||M(c,t,f,m,n,r,s);((g=m.onVnodeUpdated)||p)&&ln((()=>{g&&nr(g,n,t,e),p&&rt(t,e,n,"updated")}),r)},P=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===In||!Fn(l,c)||70&l.shapeFlag)?p(l.el):n;v(l,c,u,null,r,i,s,o,!0)}},M=(e,t,n,r,s,o,l)=>{if(n!==r){if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(e,c,n[c],null,l,t.children,s,o,Q);for(const c in r){if((0,i.Gg)(c))continue;const u=r[c],d=n[c];u!==d&&"value"!==c&&a(e,c,d,u,l,t.children,s,o,Q)}"value"in r&&a(e,"value",n.value,r.value)}},R=(e,t,n,r,i,o,a,l,u)=>{const d=t.el=e?e.el:c(""),h=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(d,n,r),s(h,n,r),O(t.children,n,h,i,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(P(e.dynamicChildren,f,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&pn(e,t,!0)):V(e,t,n,h,i,o,a,l,u)},N=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):L(t,n,r,i,s,o,l):j(e,t,l)},L=(e,t,n,r,i,s,o)=>{const a=e.component=sr(e,r,i);if(Re(e)&&(a.ctx.renderer=ee),fr(a),a.asyncDep){if(i&&i.registerDep(a,$),!e.el){const e=a.subTree=qn(_n);w(null,e,t,n)}}else $(a,e,t,n,i,s,o)},j=(e,t,n)=>{const r=t.component=e.component;if(W(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,T(r.update),r.update()}else t.el=e.el,r.vnode=t},$=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:c,vnode:u}=e,d=n;0,hn(e,!1),n?(n.el=u.el,F(e,n,l)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&nr(t,c,n,u),hn(e,!0);const h=Y(e);0;const f=e.subTree;e.subTree=h,v(f,h,p(f.el),J(f),e,o,a),n.el=h.el,null===d&&X(e,h.el),s&&ln(s,o),(t=n.props&&n.props.onVnodeUpdated)&&ln((()=>nr(t,c,n,u)),o)}else{let r;const{el:l,props:c}=t,{bm:u,m:d,parent:h}=e,p=De(t);if(hn(e,!1),u&&(0,i.ir)(u),!p&&(r=c&&c.onVnodeBeforeMount)&&nr(r,h,t),hn(e,!0),l&&ne){const n=()=>{e.subTree=Y(e),ne(l,e.subTree,e,o,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=Y(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(d&&ln(d,o),!p&&(r=c&&c.onVnodeMounted)){const e=t;ln((()=>nr(r,h,e)),o)}(256&t.shapeFlag||h&&De(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&ln(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(c,(()=>E(d)),e.scope),d=e.update=()=>u.run();d.id=e.uid,hn(e,!0),d()},F=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,jt(e,t.props,i,n),Qt(e,t.children,n),(0,r.Jd)(),x(),(0,r.lk)()},V=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void U(c,d,n,r,i,s,o,a,l);if(256&p)return void z(c,d,n,r,i,s,o,a,l)}8&f?(16&u&&Q(c,i,s),d!==c&&h(n,d)):16&u?16&f?U(c,d,n,r,i,s,o,a,l):Q(c,i,s,!0):(8&u&&h(n,""),16&f&&O(d,n,r,i,s,o,a,l))},z=(e,t,n,r,s,o,a,l,c)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,d=t.length,h=Math.min(u,d);let p;for(p=0;p<h;p++){const r=t[p]=c?Zn(t[p]):Jn(t[p]);v(e[p],r,n,null,s,o,a,l,c)}u>d?Q(e,s,o,!0,!1,h):O(t,n,r,s,o,a,l,c,h)},U=(e,t,n,r,s,o,a,l,c)=>{let u=0;const d=t.length;let h=e.length-1,p=d-1;while(u<=h&&u<=p){const r=e[u],i=t[u]=c?Zn(t[u]):Jn(t[u]);if(!Fn(r,i))break;v(r,i,n,null,s,o,a,l,c),u++}while(u<=h&&u<=p){const r=e[h],i=t[p]=c?Zn(t[p]):Jn(t[p]);if(!Fn(r,i))break;v(r,i,n,null,s,o,a,l,c),h--,p--}if(u>h){if(u<=p){const e=p+1,i=e<d?t[e].el:r;while(u<=p)v(null,t[u]=c?Zn(t[u]):Jn(t[u]),n,i,s,o,a,l,c),u++}}else if(u>p)while(u<=h)q(e[u],s,o,!0),u++;else{const f=u,m=u,g=new Map;for(u=m;u<=p;u++){const e=t[u]=c?Zn(t[u]):Jn(t[u]);null!=e.key&&g.set(e.key,u)}let y,w=0;const b=p-m+1;let E=!1,S=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=f;u<=h;u++){const r=e[u];if(w>=b){q(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=p;y++)if(0===T[y-m]&&Fn(r,t[y])){i=y;break}void 0===i?q(r,s,o,!0):(T[i-m]=u+1,i>=S?S=i:E=!0,v(r,t[i],n,null,s,o,a,l,c),w++)}const I=E?fn(T):i.Z6;for(y=I.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],h=e+1<d?t[e+1].el:r;0===T[u]?v(null,i,n,h,s,o,a,l,c):E&&(y<0||u!==I[y]?B(i,n,h,2):y--)}}},B=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void B(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ee);if(a===In){s(o,t,n);for(let e=0;e<c.length;e++)B(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===kn)return void S(e,t,n);const d=2!==r&&1&u&&l;if(d)if(0===r)l.beforeEnter(o),s(o,t,n),ln((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},q=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:d,dirs:h}=e;if(null!=a&&tn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&h,f=!De(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&nr(m,t,e),6&u)K(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&rt(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ee,r):c&&(s!==In||d>0&&64&d)?Q(c,t,n,!1,!0):(s===In&&384&d||!i&&16&u)&&Q(l,t,n),r&&H(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&ln((()=>{m&&nr(m,t,e),p&&rt(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===In)return void G(n,r);if(t===kn)return void I(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},G=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},K=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,q(a,e,t,n)),l&&ln(l,t),ln((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)q(e[o],t,n,r,i)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),x(),_(),t._vnode=e},ee={p:v,um:q,m:B,r:H,mt:L,mc:O,pc:V,pbc:P,n:J,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:en(Z,te)}}function hn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function pn(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Zn(s[i]),t.el=e.el),n||pn(e,t)),t.type===xn&&(t.el=e.el)}}function fn(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const mn=e=>e.__isTeleport,gn=e=>e&&(e.disabled||""===e.disabled),vn=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,yn=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},wn={__isTeleport:!0,process(e,t,n,r,i,s,o,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:p,querySelector:f,createText:m,createComment:g}}=c,v=gn(t.props);let{shapeFlag:y,children:w,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),c=t.anchor=m("");p(e,n,r),p(c,n,r);const d=t.target=yn(t.props,f),h=t.targetAnchor=m("");d&&(p(h,d),o=o||vn(d));const g=(e,t)=>{16&y&&u(w,e,t,i,s,o,a,l)};v?g(n,c):d&&g(d,h)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,p=t.targetAnchor=e.targetAnchor,m=gn(e.props),g=m?n:u,y=m?r:p;if(o=o||vn(u),b?(h(e.dynamicChildren,b,g,i,s,o,a),pn(e,t,!0)):l||d(e,t,g,y,i,s,o,a,!1),v)m||bn(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=yn(t.props,f);e&&bn(t,e,null,c,0)}else m&&bn(t,u,p,c,1)}Tn(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=e;if(d&&s(u),(o||!gn(h))&&(s(c),16&a))for(let p=0;p<l.length;p++){const e=l[p];i(e,t,n,!0,!!e.dynamicChildren)}},move:bn,hydrate:En};function bn(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,d=2===s;if(d&&r(o,t,n),(!d||gn(u))&&16&l)for(let h=0;h<c.length;h++)i(c[h],t,n,2);d&&r(a,t,n)}function En(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=yn(t.props,l);if(u){const l=u._lpa||u.firstChild;if(16&t.shapeFlag)if(gn(t.props))t.anchor=c(o(e),t,a(e),n,r,i,s),t.targetAnchor=l;else{t.anchor=o(e);let a=l;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(l,t,u,n,r,i,s)}Tn(t)}return t.anchor&&o(t.anchor)}const Sn=wn;function Tn(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const In=Symbol(void 0),xn=Symbol(void 0),_n=Symbol(void 0),kn=Symbol(void 0),Cn=[];let An=null;function On(e=!1){Cn.push(An=e?null:[])}function Dn(){Cn.pop(),An=Cn[Cn.length-1]||null}let Pn,Mn=1;function Rn(e){Mn+=e}function Nn(e){return e.dynamicChildren=Mn>0?An||i.Z6:null,Dn(),Mn>0&&An&&An.push(e),e}function Ln(e,t,n,r,i,s){return Nn(Yn(e,t,n,r,i,s,!0))}function jn(e,t,n,r,i){return Nn(qn(e,t,n,r,i,!0))}function $n(e){return!!e&&!0===e.__v_isVNode}function Fn(e,t){return e.type===t.type&&e.key===t.key}function Vn(e){Pn=e}const zn="__vInternal",Un=({key:e})=>null!=e?e:null,Bn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:j,r:e,k:t,f:!!n}:e:null;function Yn(e,t=null,n=null,r=0,s=null,o=(e===In?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Un(t),ref:t&&Bn(t),scopeId:$,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:j};return l?(er(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,i.HD)(n)?8:16),Mn>0&&!a&&An&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&An.push(c),c}const qn=Hn;function Hn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==at||(e=_n),$n(e)){const r=Wn(e,t,!0);return n&&er(r,n),Mn>0&&!a&&An&&(6&r.shapeFlag?An[An.indexOf(e)]=r:An.push(r)),r.patchFlag|=-2,r}if(Ir(e)&&(e=e.__vccOpts),t){t=Gn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:Q(e)?128:mn(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Yn(e,t,n,s,o,l,a,!0)}function Gn(e){return e?(0,r.X3)(e)||zn in e?(0,i.l7)({},e):e:null}function Wn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?tr(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Un(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Bn(t)):[s,Bn(t)]:Bn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==In?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wn(e.ssContent),ssFallback:e.ssFallback&&Wn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return c}function Kn(e=" ",t=0){return qn(xn,null,e,t)}function Xn(e,t){const n=qn(kn,null,e);return n.staticCount=t,n}function Qn(e="",t=!1){return t?(On(),jn(_n,null,e)):qn(_n,null,e)}function Jn(e){return null==e||"boolean"===typeof e?qn(_n):(0,i.kJ)(e)?qn(In,null,e.slice()):"object"===typeof e?Zn(e):qn(xn,null,String(e))}function Zn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Wn(e)}function er(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),er(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||zn in t?3===r&&j&&(1===j.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=j}}else(0,i.mf)(t)?(t={default:t,_ctx:j},n=32):(t=String(t),64&r?(n=16,t=[Kn(t)]):n=8);e.children=t,e.shapeFlag|=n}function tr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function nr(e,t,n,r=null){a(e,t,7,[n,r])}const rr=Jt();let ir=0;function sr(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||rr,a={uid:ir++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vt(s,o),emitsOptions:N(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let or=null;const ar=()=>or||j,lr=e=>{or=e,e.scope.on()},cr=()=>{or&&or.scope.off(),or=null};function ur(e){return 4&e.vnode.shapeFlag}let dr,hr,pr=!1;function fr(e,t=!1){pr=t;const{props:n,children:r}=e.vnode,i=ur(e);Lt(e,n,i,t),Xt(e,r);const s=i?mr(e,t):void 0;return pr=!1,s}function mr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,bt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Er(e):null;lr(e),(0,r.Jd)();const a=o(s,e,0,[e.props,n]);if((0,r.lk)(),cr(),(0,i.tI)(a)){if(a.then(cr,cr),t)return a.then((n=>{gr(e,n,t)})).catch((t=>{l(t,e,0)}));e.asyncDep=a}else gr(e,a,t)}else wr(e,t)}function gr(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),wr(e,n)}function vr(e){dr=e,hr=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Et))}}const yr=()=>!dr;function wr(e,t,n){const s=e.type;if(!e.render){if(!t&&dr&&!s.render){const t=s.template||kt(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=dr(t,l)}}e.render=s.render||i.dG,hr&&hr(e)}lr(e),(0,r.Jd)(),Tt(e),(0,r.lk)(),cr()}function br(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Er(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=br(e))},slots:e.slots,emit:e.emit,expose:t}}function Sr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in yt?yt[n](e):void 0},has(e,t){return t in e||t in yt}}))}function Tr(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Ir(e){return(0,i.mf)(e)&&"__vccOpts"in e}const xr=(e,t)=>(0,r.Fl)(e,t,pr);function _r(){return null}function kr(){return null}function Cr(e){0}function Ar(e,t){return null}function Or(){return Pr().slots}function Dr(){return Pr().attrs}function Pr(){const e=ar();return e.setupContext||(e.setupContext=Er(e))}function Mr(e,t){const n=(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]={},e)),{}):e;for(const r in t){const e=n[r];e?(0,i.kJ)(e)||(0,i.mf)(e)?n[r]={type:e,default:t[r]}:e.default=t[r]:null===e&&(n[r]={default:t[r]})}return n}function Rr(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Nr(e){const t=ar();let n=e();return cr(),(0,i.tI)(n)&&(n=n.catch((e=>{throw lr(t),e}))),[n,()=>lr(t)]}function Lr(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?$n(t)?qn(e,null,[t]):qn(e,t):qn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&$n(n)&&(n=[n]),qn(e,t,n))}const jr=Symbol(""),$r=()=>{{const e=ue(jr);return e}};function Fr(){return void 0}function Vr(e,t,n,r){const i=n[r];if(i&&zr(i,e))return i;const s=t();return s.memo=e.slice(),n[r]=s}function zr(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if((0,i.aU)(n[r],t[r]))return!1;return Mn>0&&An&&An.push(e),!0}const Ur="3.2.45",Br={createComponentInstance:sr,setupComponent:fr,renderComponentRoot:Y,setCurrentRenderingInstance:F,isVNode:$n,normalizeVNode:Jn},Yr=Br,qr=null,Hr=null},9242:function(e,t,n){"use strict";n.d(t,{$d:function(){return i.$d},$y:function(){return i.$y},Ah:function(){return R},B:function(){return i.B},BK:function(){return i.BK},Bj:function(){return i.Bj},Bz:function(){return i.Bz},C3:function(){return i.C3},C_:function(){return i.C_},Cn:function(){return i.Cn},D2:function(){return Me},EB:function(){return i.EB},Eo:function(){return i.Eo},F4:function(){return i.F4},F8:function(){return Re},FN:function(){return i.FN},Fl:function(){return i.Fl},G:function(){return i.G},G2:function(){return be},HX:function(){return i.HX},HY:function(){return i.HY},Ho:function(){return i.Ho},IU:function(){return i.IU},JJ:function(){return i.JJ},Jd:function(){return i.Jd},KU:function(){return i.KU},Ko:function(){return i.Ko},LL:function(){return i.LL},MW:function(){return M},MX:function(){return i.MX},Mr:function(){return i.Mr},Nd:function(){return We},Nv:function(){return i.Nv},OT:function(){return i.OT},Ob:function(){return i.Ob},P$:function(){return i.P$},PG:function(){return i.PG},Q2:function(){return i.Q2},Q6:function(){return i.Q6},RC:function(){return i.RC},Rh:function(){return i.Rh},Rr:function(){return i.Rr},S3:function(){return i.S3},SK:function(){return i.Ah},SU:function(){return i.SU},U2:function(){return i.U2},Uc:function(){return i.Uc},Uk:function(){return i.Uk},Um:function(){return i.Um},Us:function(){return i.Us},Vh:function(){return i.Vh},W3:function(){return ce},WI:function(){return i.WI},WL:function(){return i.WL},WY:function(){return i.WY},Wm:function(){return i.Wm},X3:function(){return i.X3},XI:function(){return i.XI},Xl:function(){return i.Xl},Xn:function(){return i.Xn},Y1:function(){return i.Y1},Y3:function(){return i.Y3},Y8:function(){return i.Y8},YP:function(){return i.YP},YS:function(){return i.YS},YZ:function(){return xe},Yq:function(){return i.Yq},ZB:function(){return Be},ZK:function(){return i.ZK},ZM:function(){return i.ZM},Zq:function(){return i.Zq},_:function(){return i._},_A:function(){return i._A},a2:function(){return L},aZ:function(){return i.aZ},b9:function(){return i.b9},bM:function(){return Ee},bT:function(){return i.bT},bv:function(){return i.bv},cE:function(){return i.cE},d1:function(){return i.d1},dD:function(){return i.dD},dG:function(){return i.dG},dl:function(){return i.dl},dq:function(){return i.dq},e8:function(){return ye},ec:function(){return i.ec},eq:function(){return i.eq},f3:function(){return i.f3},fb:function(){return j},h:function(){return i.h},hR:function(){return i.hR},i8:function(){return i.i8},iD:function(){return i.iD},iH:function(){return i.iH},iM:function(){return De},ic:function(){return i.ic},j4:function(){return i.j4},j5:function(){return i.j5},kC:function(){return i.kC},kq:function(){return i.kq},l1:function(){return i.l1},lA:function(){return i.lA},lR:function(){return i.lR},m0:function(){return i.m0},mW:function(){return i.mW},mv:function(){return i.mv},mx:function(){return i.mx},n4:function(){return i.n4},nK:function(){return i.nK},nQ:function(){return i.nQ},nZ:function(){return i.nZ},nr:function(){return ve},oR:function(){return i.oR},of:function(){return i.of},p1:function(){return i.p1},qG:function(){return i.qG},qZ:function(){return i.qZ},qb:function(){return i.qb},qj:function(){return i.qj},qq:function(){return i.qq},ri:function(){return Ye},ry:function(){return i.ry},sT:function(){return i.sT},sY:function(){return Ue},se:function(){return i.se},sj:function(){return $},sv:function(){return i.sv},uE:function(){return i.uE},uT:function(){return B},u_:function(){return i.u_},up:function(){return i.up},vl:function(){return i.vl},vr:function(){return qe},vs:function(){return i.vs},w5:function(){return i.w5},wF:function(){return i.wF},wg:function(){return i.wg},wy:function(){return i.wy},xv:function(){return i.xv},yT:function(){return i.yT},yX:function(){return i.yX},yb:function(){return i.MW},zw:function(){return i.zw}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const i=l.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)p(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&p(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function p(e,t,n){if((0,r.kJ)(n))n.forEach((n=>p(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function E(e,t,n,r){e.removeEventListener(t,n,r)}function S(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=I(t);if(r){const o=s[t]=C(r,i);b(e,n,o,a)}else o&&(E(e,n,o,a),s[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function I(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let x=0;const _=Promise.resolve(),k=()=>x||(_.then((()=>x=0)),x=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const O=/^on[a-z]/,D=(e,t,n,i,s=!1,o,a,l,c)=>{"class"===t?u(e,i,s):"style"===t?d(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||S(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,i,s))?w(e,t,i,o,a,l,c):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function P(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&O.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!O.test(t)||!(0,r.HD)(n))&&t in e))))}function M(e,t){const n=(0,i.aZ)(e);class r extends L{constructor(e){super(n,e,t)}}return r.def=n,r}const R=e=>M(e,Be),N="undefined"!==typeof HTMLElement?HTMLElement:class{};class L extends N{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,(0,i.Y3)((()=>{this._connected||(Ue(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})).observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:i}=e;let s;if(n&&!(0,r.kJ)(n))for(const o in n){const e=n[o];(e===Number||e&&e.type===Number)&&(o in this._props&&(this._props[o]=(0,r.He)(this._props[o])),(s||(s=Object.create(null)))[(0,r._A)(o)]=!0)}this._numberProps=s,t&&this._resolveProps(e),this._applyStyles(i),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=(0,r.kJ)(t)?t:Object.keys(t||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r],!0,!1);for(const i of n.map(r._A))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(e){this._setProp(i,e)}})}_setAttr(e){let t=this.getAttribute(e);const n=(0,r._A)(e);this._numberProps&&this._numberProps[n]&&(t=(0,r.He)(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,i=!0){t!==this._props[e]&&(this._props[e]=t,i&&this._instance&&this._update(),n&&(!0===t?this.setAttribute((0,r.rs)(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute((0,r.rs)(e),t+""):t||this.removeAttribute((0,r.rs)(e))))}_update(){Ue(this._createVNode(),this.shadowRoot)}_createVNode(){const e=(0,i.Wm)(this._def,(0,r.l7)({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),(0,r.rs)(e)!==e&&t((0,r.rs)(e),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof L){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function j(e="$style"){{const t=(0,i.FN)();if(!t)return r.kT;const n=t.type.__cssModules;if(!n)return r.kT;const s=n[e];return s||r.kT}}function $(e){const t=(0,i.FN)();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>V(e,n)))},r=()=>{const r=e(t.proxy);F(t.subTree,r),n(r)};(0,i.Rh)(r),(0,i.bv)((()=>{const e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),(0,i.Ah)((()=>e.disconnect()))}))}function F(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{F(n.activeBranch,t)}))}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)V(e.el,t);else if(e.type===i.HY)e.children.forEach((e=>F(e,t)));else if(e.type===i.qG){let{el:n,anchor:r}=e;while(n){if(V(n,t),n===r)break;n=n.nextSibling}}}function V(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const z="transition",U="animation",B=(e,{slots:t})=>(0,i.h)(i.P$,W(e),t);B.displayName="Transition";const Y={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},q=B.props=(0,r.l7)({},i.P$.props,Y),H=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},G=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function W(e){const t={};for(const r in e)r in Y||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=K(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:S,onBeforeAppear:T=y,onAppear:I=w,onAppearCancelled:x=b}=t,_=(e,t,n)=>{J(e,t?d:l),J(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,J(e,h),J(e,f),J(e,p),t&&t()},C=e=>(t,n)=>{const r=e?I:w,s=()=>_(t,e,n);H(r,[t,s]),Z((()=>{J(t,e?c:o),Q(t,e?d:l),G(r)||te(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){H(y,[e]),Q(e,o),Q(e,a)},onBeforeAppear(e){H(T,[e]),Q(e,c),Q(e,u)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);Q(e,h),se(),Q(e,p),Z((()=>{e._isLeaving&&(J(e,h),Q(e,f),G(E)||te(e,i,v,n))})),H(E,[e,n])},onEnterCancelled(e){_(e,!1),H(b,[e])},onAppearCancelled(e){_(e,!0),H(x,[e])},onLeaveCancelled(e){k(e),H(S,[e])}})}function K(e){if(null==e)return null;if((0,r.Kn)(e))return[X(e.enter),X(e.leave)];{const t=X(e);return[t,t]}}function X(e){const t=(0,r.He)(e);return t}function Q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function J(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let ee=0;function te(e,t,n,r){const i=e._endId=++ee,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=ne(e,t);if(!o)return r();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,h),s()},h=t=>{t.target===e&&++u>=l&&d()};setTimeout((()=>{u<l&&d()}),a+1),e.addEventListener(c,h)}function ne(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${z}Delay`),s=r(`${z}Duration`),o=re(i,s),a=r(`${U}Delay`),l=r(`${U}Duration`),c=re(a,l);let u=null,d=0,h=0;t===z?o>0&&(u=z,d=o,h=s.length):t===U?c>0&&(u=U,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?z:U:null,h=u?u===z?s.length:l.length:0);const p=u===z&&/\b(transform|all)(,|$)/.test(r(`${z}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function re(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>ie(t)+ie(e[n]))))}function ie(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function se(){return document.body.offsetHeight}const oe=new WeakMap,ae=new WeakMap,le={name:"TransitionGroup",props:(0,r.l7)({},q,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!pe(o[0].el,n.vnode.el,t))return;o.forEach(ue),o.forEach(de);const r=o.filter(he);se(),r.forEach((e=>{const n=e.el,r=n.style;Q(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,J(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,s.IU)(e),c=W(l);let u=l.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,c,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,c,r,n)),oe.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ce=le;function ue(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function de(e){ae.set(e,e.el.getBoundingClientRect())}function he(e){const t=oe.get(e),n=ae.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function pe(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=ne(r);return i.removeChild(r),s}const fe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function me(e){e.target.composing=!0}function ge(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ve={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=fe(s);const o=i||s.props&&"number"===s.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.He)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",me),b(e,"compositionend",ge),b(e,"change",ge))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=fe(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ye={deep:!0,created(e,t,n){e._assign=fe(n),b(e,"change",(()=>{const t=e._modelValue,n=Te(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(Ie(e,i))}))},mounted:we,beforeUpdate(e,t,n){e._assign=fe(n),we(e,t,n)}};function we(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,Ie(e,!0)))}const be={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=fe(n),b(e,"change",(()=>{e._assign(Te(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=fe(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},Ee={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(Te(e)):Te(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=fe(i)},mounted(e,{value:t}){Se(e,t)},beforeUpdate(e,t,n){e._assign=fe(n)},updated(e,{value:t}){Se(e,t)}};function Se(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=Te(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(Te(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Te(e){return"_value"in e?e._value:e.value}function Ie(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const xe={created(e,t,n){ke(e,t,n,null,"created")},mounted(e,t,n){ke(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){ke(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){ke(e,t,n,r,"updated")}};function _e(e,t){switch(e){case"SELECT":return Ee;case"TEXTAREA":return ve;default:switch(t){case"checkbox":return ye;case"radio":return be;default:return ve}}}function ke(e,t,n,r,i){const s=_e(e.tagName,n.props&&n.props.type),o=s[i];o&&o(e,t,n,r)}function Ce(){ve.getSSRProps=({value:e})=>({value:e}),be.getSSRProps=({value:e},t)=>{if(t.props&&(0,r.WV)(t.props.value,e))return{checked:!0}},ye.getSSRProps=({value:e},t)=>{if((0,r.kJ)(e)){if(t.props&&(0,r.hq)(e,t.props.value)>-1)return{checked:!0}}else if((0,r.DM)(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},xe.getSSRProps=(e,t)=>{if("string"!==typeof t.type)return;const n=_e(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const Ae=["ctrl","shift","alt","meta"],Oe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ae.some((n=>e[`${n}Key`]&&!t.includes(n)))},De=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Oe[t[e]];if(r&&r(n,t))return}return e(n,...r)},Pe={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Me=(e,t)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return t.some((e=>e===i||Pe[e]===i))?e(n):void 0},Re={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Ne(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Ne(e,!0),r.enter(e)):r.leave(e,(()=>{Ne(e,!1)})):Ne(e,t))},beforeUnmount(e,{value:t}){Ne(e,t)}};function Ne(e,t){e.style.display=t?e._vod:"none"}function Le(){Re.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const je=(0,r.l7)({patchProp:D},c);let $e,Fe=!1;function Ve(){return $e||($e=(0,i.Us)(je))}function ze(){return $e=Fe?$e:(0,i.Eo)(je),Fe=!0,$e}const Ue=(...e)=>{Ve().render(...e)},Be=(...e)=>{ze().hydrate(...e)},Ye=(...e)=>{const t=Ve().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=He(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t},qe=(...e)=>{const t=ze().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=He(e);if(t)return n(t,!0,t instanceof SVGElement)},t};function He(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}let Ge=!1;const We=()=>{Ge||(Ge=!0,Ce(),Le())}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return R},E9:function(){return se},F7:function(){return _},Gg:function(){return H},HD:function(){return j},He:function(){return re},Kn:function(){return F},NO:function(){return I},Nj:function(){return ne},Od:function(){return A},PO:function(){return Y},Pq:function(){return f},RI:function(){return D},S0:function(){return q},W7:function(){return B},WV:function(){return v},Z6:function(){return S},_A:function(){return K},_N:function(){return M},aU:function(){return ee},dG:function(){return T},e1:function(){return s},fY:function(){return r},hR:function(){return Z},hq:function(){return y},ir:function(){return te},j5:function(){return o},kC:function(){return J},kJ:function(){return P},kT:function(){return E},l7:function(){return C},mf:function(){return L},rs:function(){return Q},tI:function(){return V},tR:function(){return k},vs:function(){return h},yA:function(){return m},yk:function(){return $},zw:function(){return w}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=j(r)?u(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return j(e)||F(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,c=/\/\*.*?\*\//gs;function u(e){const t={};return e.replace(c,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(j(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function h(e){if(!e)return null;let{class:t,style:n}=e;return t&&!j(t)&&(e.class=d(t)),n&&(e.style=o(n)),e}const p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(p);function m(e){return!!e||""===e}function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=v(e[r],t[r]);return n}function v(e,t){if(e===t)return!0;let n=N(e),r=N(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=$(e),r=$(t),n||r)return e===t;if(n=P(e),r=P(t),n||r)return!(!n||!r)&&g(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!v(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex((e=>v(e,t)))}const w=e=>j(e)?e:null==e?"":P(e)||F(e)&&(e.toString===z||!L(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):M(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:R(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||P(t)||Y(t)?t:String(t),E={},S=[],T=()=>{},I=()=>!1,x=/^on[^a-z]/,_=e=>x.test(e),k=e=>e.startsWith("onUpdate:"),C=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},O=Object.prototype.hasOwnProperty,D=(e,t)=>O.call(e,t),P=Array.isArray,M=e=>"[object Map]"===U(e),R=e=>"[object Set]"===U(e),N=e=>"[object Date]"===U(e),L=e=>"function"===typeof e,j=e=>"string"===typeof e,$=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&L(e.then)&&L(e.catch),z=Object.prototype.toString,U=e=>z.call(e),B=e=>U(e).slice(8,-1),Y=e=>"[object Object]"===U(e),q=e=>j(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,K=G((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),X=/\B([A-Z])/g,Q=G((e=>e.replace(X,"-$1").toLowerCase())),J=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=G((e=>e?`on${J(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ie;const se=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},6866:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return r.P$},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return i},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=n(9242);const i=()=>{0}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return de},Xd:function(){return ue},Mq:function(){return ve},ZF:function(){return ge},KN:function(){return ye}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(S(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),S(d.get(this))}:function(...t){return S(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return p.set(r,t.sort?t.sort():[t]),S(r)}}function E(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,c())?new Proxy(e,y):e)}function S(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=E(e);return t!==e&&(f.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=S(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(S(o.result),e.oldVersion,e.newVersion,S(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const x=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],k=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!x.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}w((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
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
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const D="@firebase/app",P="0.9.9",M=new i.Yd("@firebase/app"),R="@firebase/app-compat",N="@firebase/analytics-compat",L="@firebase/analytics",j="@firebase/app-check-compat",$="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",z="@firebase/database",U="@firebase/database-compat",B="@firebase/functions",Y="@firebase/functions-compat",q="@firebase/installations",H="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",K="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.21.0",se="[DEFAULT]",oe={[D]:"fire-core",[R]:"fire-core-compat",[L]:"fire-analytics",[N]:"fire-analytics-compat",[$]:"fire-app-check",[j]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[z]:"fire-rtdb",[U]:"fire-rtdb-compat",[B]:"fire-fn",[Y]:"fire-fn-compat",[q]:"fire-iid",[H]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[K]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){M.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return M.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pe=new s.LL("app","Firebase",he);
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
class fe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}
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
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw pe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw pe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw pe.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of le.values())l.addComponent(r);const c=new fe(n,i,l);return ae.set(o,c),c}function ve(e=se){const t=ae.get(e);if(!t&&e===se)return ge();if(!t)throw pe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void M.warn(e.join(" "))}ue(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
const we="firebase-heartbeat-database",be=1,Ee="firebase-heartbeat-store";let Se=null;function Te(){return Se||(Se=I(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ee)}}}).catch((e=>{throw pe.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function Ie(e){try{const t=await Te();return t.transaction(Ee).objectStore(Ee).get(_e(e))}catch(t){if(t instanceof s.ZR)M.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});M.warn(e.message)}}}async function xe(e,t){try{const n=await Te(),r=n.transaction(Ee,"readwrite"),i=r.objectStore(Ee);return await i.put(t,_e(e)),r.done}catch(n){if(n instanceof s.ZR)M.warn(n.message);else{const e=pe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});M.warn(e.message)}}}function _e(e){return`${e.name}!${e.options.appId}`}
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
 */const ke=1024,Ce=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Oe(),{heartbeatsToSend:t,unsentEntries:n}=De(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function De(e,t=ke){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Me(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Me(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Me(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Re(e){ue(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(D,P,e),ye(D,P,"esm2017"),ye("fire-js","")}Re("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return c},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const s="[DEFAULT]";
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
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
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return c},in:function(){return i}});n(7658);
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
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},4219:function(e,t,n){"use strict";n.d(t,{Xw:function(){return P}});n(7658);var r=n(4870),i=n(3396);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((n,i)=>(t.includes(i)||(n[i]=(0,r.SU)(e[i])),n)),{})}function c(e){return"function"===typeof e}function u(e){return(0,r.PG)(e)||(0,r.$y)(e)}function d(e,t,n){let r=e;const i=t.split(".");for(let s=0;s<i.length;s++){if(!r[i[s]])return n;r=r[i[s]]}return r}function h(e,t,n){return(0,i.Fl)((()=>e.some((e=>d(t,e,{[n]:!1})[n]))))}function p(e,t,n){return(0,i.Fl)((()=>e.reduce(((e,r)=>{const i=d(t,r,{[n]:!1})[n]||[];return e.concat(i)}),[])))}function f(e,t,n,i){return e.call(i,(0,r.SU)(t),(0,r.SU)(n),i)}function m(e){return void 0!==e.$valid?!e.$valid:!e}function g(e,t,n,s,o,a,l){let{$lazy:c,$rewardEarly:u}=o,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],h=arguments.length>8?arguments[8]:void 0,p=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=(0,r.iH)(!!s.value),y=(0,r.iH)(0);n.value=!1;const w=(0,i.YP)([t,s].concat(d,g),(()=>{if(c&&!s.value||u&&!p.value&&!n.value)return;let r;try{r=f(e,t,h,l)}catch(i){r=Promise.reject(i)}y.value++,n.value=!!y.value,v.value=!1,Promise.resolve(r).then((e=>{y.value--,n.value=!!y.value,a.value=e,v.value=m(e)})).catch((e=>{y.value--,n.value=!!y.value,a.value=e,v.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:v,$unwatch:w}}function v(e,t,n,r,s,o,a,l){let{$lazy:c,$rewardEarly:u}=r;const d=()=>({}),h=(0,i.Fl)((()=>{if(c&&!n.value||u&&!l.value)return!1;let r=!0;try{const n=f(e,t,a,o);s.value=n,r=m(n)}catch(i){s.value=i}return r}));return{$unwatch:d,$invalid:h}}function y(e,t,n,s,o,a,u,d,h,p,f){const m=(0,r.iH)(!1),y=e.$params||{},w=(0,r.iH)(null);let b,E;e.$async?({$invalid:b,$unwatch:E}=g(e.$validator,t,m,n,s,w,o,e.$watchTargets,h,p,f)):({$invalid:b,$unwatch:E}=v(e.$validator,t,n,s,w,o,h,p));const S=e.$message,T=c(S)?(0,i.Fl)((()=>S(l({$pending:m,$invalid:b,$params:l(y),$model:t,$response:w,$validator:a,$propertyPath:d,$property:u})))):S||"";return{$message:T,$params:y,$pending:m,$invalid:b,$response:w,$unwatch:E}}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.SU)(e),n=Object.keys(t),i={},s={},o={};let a=null;return n.forEach((e=>{const n=t[e];switch(!0){case c(n.$validator):i[e]=n;break;case c(n):i[e]={$validator:n};break;case"$validationGroups"===e:a=n;break;case e.startsWith("$"):o[e]=n;break;default:s[e]=n}})),{rules:i,nestedValidators:s,config:o,validationGroups:a}}const b="__root";function E(e,t,n,s,o,a,l,c,u){const d=Object.keys(e),h=s.get(o,e),p=(0,r.iH)(!1),f=(0,r.iH)(!1),m=(0,r.iH)(0);if(h){if(!h.$partial)return h;h.$unwatch(),p.value=h.$dirty.value}const g={$dirty:p,$path:o,$touch:()=>{p.value||(p.value=!0)},$reset:()=>{p.value&&(p.value=!1)},$commit:()=>{}};return d.length?(d.forEach((r=>{g[r]=y(e[r],t,g.$dirty,a,l,r,n,o,u,f,m)})),g.$externalResults=(0,i.Fl)((()=>c.value?[].concat(c.value).map(((e,t)=>({$propertyPath:o,$property:n,$validator:"$externalResults",$uid:`${o}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),g.$invalid=(0,i.Fl)((()=>{const e=d.some((e=>(0,r.SU)(g[e].$invalid)));return f.value=e,!!g.$externalResults.value.length||e})),g.$pending=(0,i.Fl)((()=>d.some((e=>(0,r.SU)(g[e].$pending))))),g.$error=(0,i.Fl)((()=>!!g.$dirty.value&&(g.$pending.value||g.$invalid.value))),g.$silentErrors=(0,i.Fl)((()=>d.filter((e=>(0,r.SU)(g[e].$invalid))).map((e=>{const t=g[e];return(0,r.qj)({$propertyPath:o,$property:n,$validator:e,$uid:`${o}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(g.$externalResults.value))),g.$errors=(0,i.Fl)((()=>g.$dirty.value?g.$silentErrors.value:[])),g.$unwatch=()=>d.forEach((e=>{g[e].$unwatch()})),g.$commit=()=>{f.value=!0,m.value=Date.now()},s.set(o,e,g),g):(h&&s.set(o,e,g),g)}function S(e,t,n,r,i,s,o){const a=Object.keys(e);return a.length?a.reduce(((a,l)=>(a[l]=I({validations:e[l],state:t,key:l,parentKey:n,resultsCache:r,globalConfig:i,instance:s,externalResults:o}),a)),{}):{}}function T(e,t,n){const s=(0,i.Fl)((()=>[t,n].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,r.SU)(t)))),[]))),o=(0,i.Fl)({get(){return e.$dirty.value||!!s.value.length&&s.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),a=(0,i.Fl)((()=>{const t=(0,r.SU)(e.$silentErrors)||[],n=s.value.filter((e=>((0,r.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(n)})),l=(0,i.Fl)((()=>{const t=(0,r.SU)(e.$errors)||[],n=s.value.filter((e=>((0,r.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(n)})),c=(0,i.Fl)((()=>s.value.some((e=>e.$invalid))||(0,r.SU)(e.$invalid)||!1)),u=(0,i.Fl)((()=>s.value.some((e=>(0,r.SU)(e.$pending)))||(0,r.SU)(e.$pending)||!1)),d=(0,i.Fl)((()=>s.value.some((e=>e.$dirty))||s.value.some((e=>e.$anyDirty))||o.value)),h=(0,i.Fl)((()=>!!o.value&&(u.value||c.value))),p=()=>{e.$touch(),s.value.forEach((e=>{e.$touch()}))},f=()=>{e.$commit(),s.value.forEach((e=>{e.$commit()}))},m=()=>{e.$reset(),s.value.forEach((e=>{e.$reset()}))};return s.value.length&&s.value.every((e=>e.$dirty))&&p(),{$dirty:o,$errors:l,$invalid:c,$anyDirty:d,$error:h,$pending:u,$touch:p,$reset:m,$silentErrors:a,$commit:f}}function I(e){let{validations:t,state:n,key:s,parentKey:a,childResults:l,resultsCache:c,globalConfig:u={},instance:d,externalResults:f}=e;const m=a?`${a}.${s}`:s,{rules:g,nestedValidators:v,config:y,validationGroups:I}=w(t),x=o(o({},u),y),_=s?(0,i.Fl)((()=>{const e=(0,r.SU)(n);return e?(0,r.SU)(e[s]):void 0})):n,k=o({},(0,r.SU)(f)||{}),C=(0,i.Fl)((()=>{const e=(0,r.SU)(f);return s?e?(0,r.SU)(e[s]):void 0:e})),A=E(g,_,s,c,m,x,d,C,n),O=S(v,_,m,c,x,d,C),D={};I&&Object.entries(I).forEach((e=>{let[t,n]=e;D[t]={$invalid:h(n,O,"$invalid"),$error:h(n,O,"$error"),$pending:h(n,O,"$pending"),$errors:p(n,O,"$errors"),$silentErrors:p(n,O,"$silentErrors")}}));const{$dirty:P,$errors:M,$invalid:R,$anyDirty:N,$error:L,$pending:j,$touch:$,$reset:F,$silentErrors:V,$commit:z}=T(A,O,l),U=s?(0,i.Fl)({get:()=>(0,r.SU)(_),set:e=>{P.value=!0;const t=(0,r.SU)(n),i=(0,r.SU)(f);i&&(i[s]=k[s]),(0,r.dq)(t[s])?t[s].value=e:t[s]=e}}):null;async function B(){return $(),x.$rewardEarly&&(z(),await(0,i.Y3)()),await(0,i.Y3)(),new Promise((e=>{if(!j.value)return e(!R.value);const t=(0,i.YP)(j,(()=>{e(!R.value),t()}))}))}function Y(e){return(l.value||{})[e]}function q(){(0,r.dq)(f)?f.value=k:0===Object.keys(k).length?Object.keys(f).forEach((e=>{delete f[e]})):Object.assign(f,k)}return s&&x.$autoDirty&&(0,i.YP)(_,(()=>{P.value||$();const e=(0,r.SU)(f);e&&(e[s]=k[s])}),{flush:"sync"}),(0,r.qj)(o(o(o({},A),{},{$model:U,$dirty:P,$error:L,$errors:M,$invalid:R,$anyDirty:N,$pending:j,$touch:$,$reset:F,$path:m||b,$silentErrors:V,$validate:B,$commit:z},l&&{$getResultsForChild:Y,$clearExternalResults:q,$validationGroups:D}),O))}class x{constructor(){this.storage=new Map}set(e,t,n){this.storage.set(e,{rules:t,result:n})}checkRulesValidity(e,t,n){const i=Object.keys(n),s=Object.keys(t);if(s.length!==i.length)return!1;const o=s.every((e=>i.includes(e)));return!!o&&s.every((e=>!t[e].$params||Object.keys(t[e].$params).every((i=>(0,r.SU)(n[e].$params[i])===(0,r.SU)(t[e].$params[i])))))}get(e,t){const n=this.storage.get(e);if(!n)return;const{rules:r,result:i}=n,s=this.checkRulesValidity(e,t,r),o=i.$unwatch?i.$unwatch:()=>({});return s?i:{$dirty:i.$dirty,$partial:!0,$unwatch:o}}}const _={COLLECT_ALL:!0,COLLECT_NONE:!1},k=Symbol("vuelidate#injectChildResults"),C=Symbol("vuelidate#removeChildResults");function A(e){let{$scope:t,instance:n}=e;const s={},o=(0,r.iH)([]),a=(0,i.Fl)((()=>o.value.reduce(((e,t)=>(e[t]=(0,r.SU)(s[t]),e)),{})));function l(e,n){let{$registerAs:r,$scope:i,$stopPropagation:a}=n;a||t===_.COLLECT_NONE||i===_.COLLECT_NONE||t!==_.COLLECT_ALL&&t!==i||(s[r]=e,o.value.push(r))}function c(e){o.value=o.value.filter((t=>t!==e)),delete s[e]}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],l),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],c);const u=(0,i.f3)(k,[]);(0,i.JJ)(k,n.__vuelidateInjectInstances);const d=(0,i.f3)(C,[]);return(0,i.JJ)(C,n.__vuelidateRemoveInstances),{childResults:a,sendValidationResultsToParent:u,removeValidationResultsFromParent:d}}function O(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?O(e[t]):(0,i.Fl)((()=>e[t]))}})}let D=0;function P(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(s=e,e=void 0,t=void 0);let{$registerAs:a,$scope:l=_.COLLECT_ALL,$stopPropagation:d,$externalResults:h,currentVueInstance:p}=s;const f=p||(null===(n=(0,i.FN)())||void 0===n?void 0:n.proxy),m=f?f.$options:{};a||(D+=1,a=`_vuelidate_${D}`);const g=(0,r.iH)({}),v=new x,{childResults:y,sendValidationResultsToParent:w,removeValidationResultsFromParent:b}=f?A({$scope:l,instance:f}):{childResults:(0,r.iH)({})};if(!e&&m.validations){const e=m.validations;t=(0,r.iH)({}),(0,i.wF)((()=>{t.value=f,(0,i.YP)((()=>c(e)?e.call(t.value,new O(t.value)):e),(e=>{g.value=I({validations:e,state:t,childResults:y,resultsCache:v,globalConfig:s,instance:f,externalResults:h||f.vuelidateExternalResults})}),{immediate:!0})})),s=m.validationsConfig||s}else{const n=(0,r.dq)(e)||u(e)?e:(0,r.qj)(e||{});(0,i.YP)(n,(e=>{g.value=I({validations:e,state:t,childResults:y,resultsCache:v,globalConfig:s,instance:null!==f&&void 0!==f?f:{},externalResults:h})}),{immediate:!0})}return f&&(w.forEach((e=>e(g,{$registerAs:a,$scope:l,$stopPropagation:d}))),(0,i.Jd)((()=>b.forEach((e=>e(a)))))),(0,i.Fl)((()=>o(o({},(0,r.SU)(g.value)),y.value)))}},5420:function(e,t,n){"use strict";n.d(t,{BM:function(){return w},BS:function(){return C},C1:function(){return P},Do:function(){return _},Ei:function(){return O},Fq:function(){return E},sH:function(){return R},uR:function(){return T}});n(7658);var r=n(4870);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return"function"===typeof e}function l(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function c(e){return a(e.$validator)?s({},e):{$validator:e}}function u(e){return"object"===typeof e?e.$valid:e}function d(e){return e.$validator||e}function h(e,t){if(!l(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!l(t)&&!a(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=c(t);return n.$params=s(s({},n.$params||{}),e),n}function p(e,t){if(!a(e)&&"string"!==typeof(0,r.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!l(t)&&!a(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=c(t);return n.$message=e,n}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=c(e);return s(s({},n),{},{$async:!0,$watchTargets:t})}function m(e){return{$validator(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return(0,r.SU)(t).reduce(((t,n,r)=>{const s=Object.entries(n).reduce(((t,s)=>{let[o,a]=s;const l=e[o]||{},c=Object.entries(l).reduce(((e,t)=>{let[s,l]=t;const c=d(l),h=c.call(this,a,n,r,...i),p=u(h);if(e.$data[s]=h,e.$data.$invalid=!p||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!p){let t=l.$message||"";const n=l.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!p,$params:n,$model:a,$response:h})),e.$errors.push({$property:o,$message:t,$params:n,$response:h,$model:a,$pending:!1,$validator:s})}return{$valid:e.$valid&&p,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[o]=c.$data,t.$errors[o]=c.$errors,{$valid:t.$valid&&c.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&s.$valid,$data:t.$data.concat(s.$data),$errors:t.$errors.concat(s.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const g=e=>{if(e=(0,r.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},v=e=>(e=(0,r.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(e=(0,r.SU)(e),!g(e)||t.every((t=>(t.lastIndex=0,t.test(e)))))}var w=Object.freeze({__proto__:null,forEach:m,len:v,normalizeValidatorObject:c,regex:y,req:g,unwrap:r.SU,unwrapNormalizedValidator:d,unwrapValidatorResponse:u,withAsync:f,withMessage:p,withParams:h}),b=y(/^[a-zA-Z]*$/),E={$validator:b,$message:"The value is not alphabetical",$params:{type:"alpha"}},S=(y(/^[a-zA-Z0-9]*$/),y(/^\d*(\.\d+)?$/)),T={$validator:S,$message:"Value must be numeric",$params:{type:"numeric"}};const I=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var x=y(I),_={$validator:x,$message:"Value is not a valid email address",$params:{type:"email"}};function k(e){return t=>!g(t)||v(t)<=(0,r.SU)(e)}function C(e){return{$validator:k(e),$message:e=>{let{$params:t}=e;return`The maximum length allowed is ${t.max}`},$params:{max:e,type:"maxLength"}}}function A(e){return t=>!g(t)||v(t)>=(0,r.SU)(e)}function O(e){return{$validator:A(e),$message:e=>{let{$params:t}=e;return`This field should be at least ${t.min} characters long`},$params:{min:e,type:"minLength"}}}function D(e){return"string"===typeof e&&(e=e.trim()),g(e)}var P={$validator:D,$message:"Value is required",$params:{type:"required"}};function M(e){return t=>(0,r.SU)(t)===(0,r.SU)(e)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";return{$validator:M(e),$message:e=>`The value must be equal to the ${t} value`,$params:{equalTo:e,otherName:t,type:"sameAs"}}}const N=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;y(N);y(/(^[0-9]*$)|(^-[0-9]+$)/),y(/^[-]?\d*(\.\d+)?$/)},466:function(e,t,n){"use strict";n.d(t,{i9H:function(){return m}});n(7658),n(2801),n(3408),n(4590),n(541),n(7635);var r=n(4870);Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function i(e){return!!(0,r.nZ)()&&((0,r.EB)(e),!0)}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function s(e){return"function"===typeof e?e():(0,r.SU)(e)}const o="undefined"!==typeof window,a=(Object.prototype.toString,()=>{}),l=c();function c(){var e;return o&&(null==(e=null==window?void 0:window.navigator)?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var u=n(3396);Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function d(e){var t;const n=s(e);return null!=(t=null==n?void 0:n.$el)?t:n}const h=o?window:void 0;o&&window.document,o&&window.navigator,o&&window.location;function p(...e){let t,n,r,o;if("string"===typeof e[0]||Array.isArray(e[0])?([n,r,o]=e,t=h):[t,n,r,o]=e,!t)return a;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],c=()=>{l.forEach((e=>e())),l.length=0},p=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),f=(0,u.YP)((()=>[d(t),s(o)]),(([e,t])=>{c(),e&&l.push(...n.flatMap((n=>r.map((r=>p(e,n,r,t))))))}),{immediate:!0,flush:"post"}),m=()=>{f(),c()};return i(m),m}let f=!1;function m(e,t,n={}){const{window:r=h,ignore:i=[],capture:s=!0,detectIframe:o=!1}=n;if(!r)return;l&&!f&&(f=!0,Array.from(r.document.body.children).forEach((e=>e.addEventListener("click",a))));let c=!0;const u=e=>i.some((t=>{if("string"===typeof t)return Array.from(r.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=d(t);return n&&(e.target===n||e.composedPath().includes(n))}})),m=n=>{const r=d(e);r&&r!==n.target&&!n.composedPath().includes(r)&&(0===n.detail&&(c=!u(n)),c?t(n):c=!0)},g=[p(r,"click",m,{passive:!0,capture:s}),p(r,"pointerdown",(t=>{const n=d(e);n&&(c=!t.composedPath().includes(n)&&!u(t))}),{passive:!0}),o&&p(r,"blur",(n=>{setTimeout((()=>{var i;const s=d(e);"IFRAME"!==(null==(i=r.document.activeElement)?void 0:i.tagName)||(null==s?void 0:s.contains(r.document.activeElement))||t(n)}),0)}))].filter(Boolean),v=()=>g.forEach((e=>e()));return v}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self&&self;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable},9365:function(e,t,n){"use strict";n.d(t,{IH:function(){return Ut}});n(7658);var r=n(7077),i=n(5168),s=n(223),o=n(7142);n(2801),n(3408),n(4590);const a=(e,t)=>t.some((t=>e instanceof t));let l,c;function u(){return l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap,g=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(T(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function y(e){if(p.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));p.set(e,t)}let w={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return p.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){w=e(w)}function E(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?d().includes(e)?function(...t){return e.apply(I(this),t),T(h.get(this))}:function(...t){return T(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return f.set(r,t.sort?t.sort():[t]),T(r)}}function S(e){return"function"===typeof e?E(e):(e instanceof IDBTransaction&&y(e),a(e,u())?new Proxy(e,w):e)}function T(e){if(e instanceof IDBRequest)return v(e);if(m.has(e))return m.get(e);const t=S(e);return t!==e&&(m.set(e,t),g.set(t,e)),t}const I=e=>g.get(e);function x(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=T(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(T(o.result),e.oldVersion,e.newVersion,T(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const _=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!_.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}b((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));const O="@firebase/installations",D="0.6.4",P=1e4,M=`w:${D}`,R="FIS_v2",N="https://firebaseinstallations.googleapis.com/v1",L=36e5,j="installations",$="Installations",F={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},V=new s.LL(j,$,F);function z(e){return e instanceof s.ZR&&e.code.includes("request-failed")}
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
 */function U({projectId:e}){return`${N}/projects/${e}/installations`}function B(e){return{token:e.token,requestStatus:2,expiresIn:W(e.expiresIn),creationTime:Date.now()}}async function Y(e,t){const n=await t.json(),r=n.error;return V.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function q({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function H(e,{refreshToken:t}){const n=q(e);return n.append("Authorization",K(t)),n}async function G(e){const t=await e();return t.status>=500&&t.status<600?e():t}function W(e){return Number(e.replace("s","000"))}function K(e){return`${R} ${e}`}
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
 */async function X({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=U(e),i=q(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:R,appId:e.appId,sdkVersion:M},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await G((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:B(e.authToken)};return t}throw await Y("Create Installation",l)}
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
 */function Q(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */function J(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const Z=/^[cdef][\w-]{21}$/,ee="";function te(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=ne(e);return Z.test(n)?n:ee}catch(e){return ee}}function ne(e){const t=J(e);return t.substr(0,22)}
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
 */function re(e){return`${e.appName}!${e.appId}`}
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
 */const ie=new Map;function se(e,t){const n=re(e);oe(n,t),ae(n,t)}function oe(e,t){const n=ie.get(e);if(n)for(const r of n)r(t)}function ae(e,t){const n=ce();n&&n.postMessage({key:e,fid:t}),ue()}let le=null;function ce(){return!le&&"BroadcastChannel"in self&&(le=new BroadcastChannel("[Firebase] FID Change"),le.onmessage=e=>{oe(e.data.key,e.data.fid)}),le}function ue(){0===ie.size&&le&&(le.close(),le=null)}
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
 */const de="firebase-installations-database",he=1,pe="firebase-installations-store";let fe=null;function me(){return fe||(fe=x(de,he,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}})),fe}async function ge(e,t){const n=re(e),r=await me(),i=r.transaction(pe,"readwrite"),s=i.objectStore(pe),o=await s.get(n);return await s.put(t,n),await i.done,o&&o.fid===t.fid||se(e,t.fid),t}async function ve(e){const t=re(e),n=await me(),r=n.transaction(pe,"readwrite");await r.objectStore(pe).delete(t),await r.done}async function ye(e,t){const n=re(e),r=await me(),i=r.transaction(pe,"readwrite"),s=i.objectStore(pe),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||se(e,a.fid),a}
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
 */async function we(e){let t;const n=await ye(e.appConfig,(n=>{const r=be(n),i=Ee(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===ee?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function be(e){const t=e||{fid:te(),registrationStatus:0};return xe(t)}function Ee(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(V.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Se(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Te(e)}:{installationEntry:t}}async function Se(e,t){try{const n=await X(e,t);return ge(e.appConfig,n)}catch(n){throw z(n)&&409===n.customData.serverCode?await ve(e.appConfig):await ge(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Te(e){let t=await Ie(e.appConfig);while(1===t.registrationStatus)await Q(100),t=await Ie(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await we(e);return n||t}return t}function Ie(e){return ye(e,(e=>{if(!e)throw V.create("installation-not-found");return xe(e)}))}function xe(e){return _e(e)?{fid:e.fid,registrationStatus:0}:e}function _e(e){return 1===e.registrationStatus&&e.registrationTime+P<Date.now()}
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
 */async function ke({appConfig:e,heartbeatServiceProvider:t},n){const r=Ce(e,n),i=H(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:M,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await G((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t=B(e);return t}throw await Y("Generate Auth Token",l)}function Ce(e,{fid:t}){return`${U(e)}/${t}/authTokens:generate`}
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
 */async function Ae(e,t=!1){let n;const r=await ye(e.appConfig,(r=>{if(!Me(r))throw V.create("not-registered");const i=r.authToken;if(!t&&Re(i))return r;if(1===i.requestStatus)return n=Oe(e,t),r;{if(!navigator.onLine)throw V.create("app-offline");const t=Le(r);return n=Pe(e,t),t}})),i=n?await n:r.authToken;return i}async function Oe(e,t){let n=await De(e.appConfig);while(1===n.authToken.requestStatus)await Q(100),n=await De(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Ae(e,t):r}function De(e){return ye(e,(e=>{if(!Me(e))throw V.create("not-registered");const t=e.authToken;return je(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Pe(e,t){try{const n=await ke(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ge(e.appConfig,r),n}catch(n){if(!z(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ge(e.appConfig,n)}else await ve(e.appConfig);throw n}}function Me(e){return void 0!==e&&2===e.registrationStatus}function Re(e){return 2===e.requestStatus&&!Ne(e)}function Ne(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+L}function Le(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function je(e){return 1===e.requestStatus&&e.requestTime+P<Date.now()}
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
 */async function $e(e){const t=e,{installationEntry:n,registrationPromise:r}=await we(t);return r?r.catch(console.error):Ae(t).catch(console.error),n.fid}
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
 */async function Fe(e,t=!1){const n=e;await Ve(n);const r=await Ae(n,t);return r.token}async function Ve(e){const{registrationPromise:t}=await we(e);t&&await t}
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
function ze(e){if(!e||!e.options)throw Ue("App Configuration");if(!e.name)throw Ue("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ue(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ue(e){return V.create("missing-app-config-values",{valueName:e})}
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
 */const Be="installations",Ye="installations-internal",qe=e=>{const t=e.getProvider("app").getImmediate(),n=ze(t),i=(0,r.qX)(t,"heartbeat"),s={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},He=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,Be).getImmediate(),i={getId:()=>$e(n),getToken:e=>Fe(n,e)};return i};function Ge(){(0,r.Xd)(new o.wA(Be,qe,"PUBLIC")),(0,r.Xd)(new o.wA(Ye,He,"PRIVATE"))}Ge(),(0,r.KN)(O,D),(0,r.KN)(O,D,"esm2017");
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
const We="analytics",Ke="firebase_id",Xe="origin",Qe=6e4,Je="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ze="https://www.googletagmanager.com/gtag/js",et=new i.Yd("@firebase/analytics"),tt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new s.LL("analytics","Analytics",tt);
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
function rt(e){if(!e.startsWith(Ze)){const t=nt.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function it(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function st(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ot(e,t){const n=st("firebase-js-sdk-policy",{createScriptURL:rt}),r=document.createElement("script"),i=`${Ze}?l=${e}&id=${t}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function at(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function lt(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=await it(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){et.error(a)}e("config",i,s)}async function ct(e,t,n,r,i){try{let s=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await it(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){et.error(s)}}function ut(e,t,n,r){async function i(i,...s){try{if("event"===i){const[r,i]=s;await ct(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await lt(e,t,n,r,i,o)}else if("consent"===i){const[t]=s;e("consent","update",t)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){et.error(o)}}return i}function dt(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=ut(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function ht(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ze)&&n.src.includes(e))return n;return null}
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
 */const pt=30,ft=1e3;class mt{constructor(e={},t=ft){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gt=new mt;function vt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function yt(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:vt(r)},s=Je.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function wt(e,t=gt,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw nt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Tt;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Qe),bt({appId:r,apiKey:i,measurementId:s},o,a,t)}async function bt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=gt){var o;const{appId:a,measurementId:l}=e;try{await Et(r,t)}catch(c){if(l)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===c||void 0===c?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const t=await yt(e);return i.deleteThrottleMetadata(a),t}catch(c){const t=c;if(!St(t)){if(i.deleteThrottleMetadata(a),l)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:l};throw c}const u=503===Number(null===(o=null===t||void 0===t?void 0:t.customData)||void 0===o?void 0:o.httpStatus)?(0,s.$s)(n,i.intervalMillis,pt):(0,s.$s)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,d),et.debug(`Calling attemptFetch again in ${u} millis`),bt(e,d,r,i)}}function Et(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function St(e){if(!(e instanceof s.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */let It,xt;async function _t(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}function kt(e){xt=e}function Ct(e){It=e}
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
 */async function At(){if(!(0,s.hl)())return et.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eu)()}catch(e){return et.warn(nt.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function Ot(e,t,n,r,i,s,o){var a;const l=wt(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>et.error(e))),t.push(l);const c=At().then((e=>e?r.getId():void 0)),[u,d]=await Promise.all([l,c]);ht(s)||ot(s,u.measurementId),xt&&(i("consent","default",xt),kt(void 0)),i("js",new Date);const h=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return h[Xe]="firebase",h.update=!0,null!=d&&(h[Ke]=d),i("config",u.measurementId,h),It&&(i("set",It),Ct(void 0)),u.measurementId}
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
 */class Dt{constructor(e){this.app=e}_delete(){return delete Pt[this.app.options.appId],Promise.resolve()}}let Pt={},Mt=[];const Rt={};let Nt,Lt,jt="dataLayer",$t="gtag",Ft=!1;function Vt(){const e=[];if((0,s.ru)()&&e.push("This is a browser extension environment."),(0,s.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:t});et.warn(n.message)}}function zt(e,t,n){Vt();const r=e.options.appId;if(!r)throw nt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw nt.create("no-api-key");et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Pt[r])throw nt.create("already-exists",{id:r});if(!Ft){at(jt);const{wrappedGtag:e,gtagCore:t}=dt(Pt,Mt,Rt,jt,$t);Lt=e,Nt=t,Ft=!0}Pt[r]=Ot(e,Mt,Rt,t,Nt,jt,n);const i=new Dt(e);return i}function Ut(e=(0,r.Mq)()){e=(0,s.m9)(e);const t=(0,r.qX)(e,We);return t.isInitialized()?t.getImmediate():Bt(e)}function Bt(e,t={}){const n=(0,r.qX)(e,We);if(n.isInitialized()){const e=n.getImmediate();if((0,s.vZ)(t,n.getOptions()))return e;throw nt.create("already-initialized")}const i=n.initialize({options:t});return i}function Yt(e,t,n,r){e=(0,s.m9)(e),_t(Lt,Pt[e.app.options.appId],t,n,r).catch((e=>et.error(e)))}const qt="@firebase/analytics",Ht="0.10.0";function Gt(){function e(e){try{const t=e.getProvider(We).getImmediate();return{logEvent:(e,n,r)=>Yt(t,e,n,r)}}catch(t){throw nt.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new o.wA(We,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return zt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(qt,Ht),(0,r.KN)(qt,Ht,"esm2017")}Gt()},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.21.0";
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
(0,r.KN)(i,s,"app")},5677:function(e,t,n){"use strict";n.d(t,{Xb:function(){return xt},v0:function(){return $r},Aj:function(){return At},e5:function(){return _t},w7:function(){return Ot}});n(7658);var r=n(223),i=n(7077);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),d=new o.Yd("@firebase/auth");function h(e,...t){d.logLevel<=o["in"].WARN&&d.warn(`Auth (${i.Jn}): ${e}`,...t)}function p(e,...t){d.logLevel<=o["in"].ERROR&&d.error(`Auth (${i.Jn}): ${e}`,...t)}
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
 */function f(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},c()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function b(e,t){e||w(t)}
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
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class _{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function k(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new _(3e4,6e4);
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
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),C.fetch()(N(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},A),t);try{const t=new L(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed",{message:String(s)})}}async function R(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function N(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),O.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function $(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
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
 */function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=B(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:V(U(s.auth_time)),issuedAtTime:V(U(s.iat)),expirationTime:V(U(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function U(e){return 1e3*Number(e)}function B(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(s){return p("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Y(e){const t=B(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function q(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&H(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function H({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class G{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function K(e){var t;const n=e.auth,r=await e.getIdToken(),i=await q(e,F(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?J(s.providerUserInfo):[],a=Q(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function X(e){const t=(0,r.m9)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Q(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function J(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function Z(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=N(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ee;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function te(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return X(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:S,stsTokenManager:T}=t;y(w&&T,e,"internal-error");const I=ee.fromJSON(this.name,T);y("string"===typeof w,e,"internal-error"),te(u,e.name),te(d,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof E,e,"internal-error"),te(h,e.name),te(p,e.name),te(f,e.name),te(m,e.name),te(g,e.name),te(v,e.name);const x=new ne({uid:w,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:E,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:v});return S&&Array.isArray(S)&&(x.providerData=S.map((e=>Object.assign({},e)))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await K(i),i}}
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
 */const re=new Map;function ie(e){b(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
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
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(ie(oe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ie(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=ne._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new le(i,e,n)):new le(i,e,n)}}
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
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(fe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function fe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function be(e=(0,r.z$)()){return ve(e)||fe(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=ce((0,r.z$)());break;case"Worker":n=`${ce((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
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
 */async function Te(e,t){return P(e,"GET","/v2/recaptchaConfig",D(e,t))}
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
 */function Ie(e){return void 0!==e&&void 0!==e.enterprise}class xe{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function _e(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ke(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",_e().appendChild(r)}))}function Ce(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ae="https://www.google.com/recaptcha/enterprise.js?render=",Oe="recaptcha-enterprise",De="NO_RECAPTCHA";class Pe{constructor(e){this.type=Oe,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Te(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new xe(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Ie(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(De)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Ie(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));ke(Ae+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Me(e,t,n,r=!1){const i=new Pe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Re{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class Ne{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await Te(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new xe(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Pe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&h(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,r.m9)(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function $e(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function Fe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ve(e,t,n){const r=Le(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=ze(t),{host:o,port:a}=Ue(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ye()}function ze(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ue(e){const t=ze(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Be(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Be(t)}}}function Be(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ye(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
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
 */async function He(e,t){return P(e,"POST","/v1/accounts:update",t)}
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
async function Ge(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
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
async function We(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Ke(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
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
 */class Xe extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Me(e,n,"signInWithPassword");return Ge(e,t)}return Ge(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Me(e,n,"signInWithPassword");return Ge(e,t)}return Promise.reject(t)}));case"emailLink":return We(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return He(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Qe(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
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
 */const Je="http://localhost";class Ze extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:Je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
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
 */async function et(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function tt(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function nt(e,t){const n=await R(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return R(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),rt)}
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
 */class st extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class lt{constructor(e){var t,n,i,s,o,a;const l=(0,r.zd)((0,r.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=ot(null!==(i=l["mode"])&&void 0!==i?i:null);y(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new lt(t)}catch(n){return null}}}
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
class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return y(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ct.PROVIDER_ID="password",ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class dt extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class ht extends dt{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch(t){return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com",ht.PROVIDER_ID="facebook.com";
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
class pt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
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
class ft extends dt{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com",ft.PROVIDER_ID="github.com";
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
class mt extends dt{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}
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
async function gt(e,t){return R(e,"POST","/v1/accounts:signUp",D(e,t))}
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
 */mt.TWITTER_SIGN_IN_METHOD="twitter.com",mt.PROVIDER_ID="twitter.com";class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ne._fromIdTokenResponse(e,n,r),s=yt(n),o=new vt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=yt(n);return new vt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function yt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class wt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new wt(e,t,n,r)}}function bt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Et(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vt._forOperation(e,"link",r)}
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
async function St(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await q(e,bt(r,i,t,e),n);y(s.idToken,r,"internal-error");const o=B(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),vt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
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
 */async function Tt(e,t,n=!1){const r="signIn",i=await bt(e,r,t),s=await vt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function It(e,t){return Tt(Le(e),t)}async function xt(e,t,n){var r;const i=Le(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Me(i,s,"signUpPassword");o=gt(i,e)}else o=gt(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Me(i,s,"signUpPassword");return gt(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await vt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function _t(e,t,n){return It((0,r.m9)(e),ct.credential(t,n))}
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
 */function kt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function Ct(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function At(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function Ot(e){return(0,r.m9)(e).signOut()}
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
function Dt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Pt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Mt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Rt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const Nt="__sak";
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
 */class Lt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nt,"1"),this.storage.removeItem(Nt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function jt(){const e=(0,r.z$)();return de(e)||ve(e)}const $t=1e3,Ft=10;class Vt extends Lt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jt()&&Ee(),this.fallbackToPolling=be(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ft):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vt.type="LOCAL";const zt=Vt;
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
 */class Ut extends Lt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ut.type="SESSION";const Bt=Ut;
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
 */function Yt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Yt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ht(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */qt.receivers=[];class Gt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Ht("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Wt(){return window}function Kt(e){Wt().location.href=e}
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
 */function Xt(){return"undefined"!==typeof Wt()["WorkerGlobalScope"]&&"function"===typeof Wt()["importScripts"]}async function Qt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Zt(){return Xt()?self:null}
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
 */const en="firebaseLocalStorageDb",tn=1,nn="firebaseLocalStorage",rn="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function on(e,t){return e.transaction([nn],t?"readwrite":"readonly").objectStore(nn)}function an(){const e=indexedDB.deleteDatabase(en);return new sn(e).toPromise()}function ln(){const e=indexedDB.open(en,tn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(nn,{keyPath:rn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(nn)?t(n):(n.close(),await an(),t(await ln()))}))}))}async function cn(e,t,n){const r=on(e,!0).put({[rn]:t,value:n});return new sn(r).toPromise()}async function un(e,t){const n=on(e,!1).get(t),r=await new sn(n).toPromise();return void 0===r?null:r.value}function dn(e,t){const n=on(e,!0).delete(t);return new sn(n).toPromise()}const hn=800,pn=3;class fn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ln()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>pn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qt._getInstance(Zt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qt(),!this.activeServiceWorker)return;this.sender=new Gt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ln();return await cn(e,Nt,"1"),await dn(e,Nt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>cn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>un(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>dn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=on(e,!1).getAll();return new sn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),hn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}fn.type="LOCAL";const mn=fn;
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
 */function gn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function vn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function yn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
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
Ce("rcb"),new _(3e4,6e4);
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
const wn="recaptcha";async function bn(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===wn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await Dt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await gn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class En{constructor(e){this.providerId=En.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return bn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return En.credentialFromTaggedObject(t)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
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
function Sn(e,t){return t?ie(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */En.PROVIDER_ID="phone",En.PHONE_SIGN_IN_METHOD="phone";class Tn extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function In(e){return Tt(e.auth,new Tn(e),e.bypassAuthState)}function xn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),St(n,new Tn(e),e.bypassAuthState)}async function _n(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Et(n,new Tn(e),e.bypassAuthState)}
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
 */class kn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return In;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return xn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Cn=new _(2e3,1e4);class An extends kn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Ht();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Cn.get())};e()}}An.currentPopupAction=null;
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
const On="pendingRedirect",Dn=new Map;class Pn extends kn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Dn.get(this.auth._key());if(!e){try{const t=await Mn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Dn.set(this.auth._key(),e)}return this.bypassAuthState||Dn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Mn(e,t){const n=Ln(t),r=Nn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Rn(e,t){Dn.set(e._key(),t)}function Nn(e){return ie(e._redirectPersistence)}function Ln(e){return ae(On,e.config.apiKey,e.name)}
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
 */async function jn(e,t,n=!1){const r=Le(e),i=Sn(r,t),s=new Pn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
const $n=6e5;class Fn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Un(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$n&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vn(e))}saveEventToCache(e){this.cachedEventUids.add(Vn(e)),this.lastProcessedEventTime=Date.now()}}function Vn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function zn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Un(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zn(e);default:return!1}}
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
 */async function Bn(e,t={}){return P(e,"GET","/v1/projects",t)}
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
 */const Yn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qn=/^https?/;async function Hn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Bn(e);for(const r of t)try{if(Gn(r))return}catch(n){}f(e,"unauthorized-domain")}function Gn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!qn.test(n))return!1;if(Yn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const Wn=new _(3e4,6e4);function Kn(){const e=Wt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Xn(e){return new Promise(((t,n)=>{var r,i,s;function o(){Kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kn(),n(m(e,"network-request-failed"))},timeout:Wn.get()})}if(null===(i=null===(r=Wt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Wt().gapi)||void 0===s?void 0:s.load)){const t=Ce("iframefcb");return Wt()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},ke(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Qn=null,e}))}let Qn=null;function Jn(e){return Qn=Qn||Xn(e),Qn}
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
 */const Zn=new _(5e3,15e3),er="__/auth/iframe",tr="emulator/auth/iframe",nr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ir(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,tr):`https://${e.config.authDomain}/${er}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=rr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function sr(e){const t=await Jn(e),n=Wt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:ir(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),s=Wt().setTimeout((()=>{r(i)}),Zn.get());function o(){Wt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ar=500,lr=600,cr="_blank",ur="http://localhost";class dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function hr(e,t,n,i=ar,s=lr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},or),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(l=he(u)?cr:n),ue(u)&&(t=t||ur,c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(u)&&"_self"!==l)return pr(t||"",l),new dr(null);const h=window.open(t||"",l,d);y(h,e,"popup-blocked");try{h.focus()}catch(p){}return new dr(h)}function pr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const fr="__/auth/handler",mr="emulator/auth/handler",gr=encodeURIComponent("fac");async function vr(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof dt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const u=await e._getAppCheckToken(),d=u?`#${gr}=${encodeURIComponent(u)}`:"";return`${yr(e)}?${(0,r.xO)(c).slice(1)}${d}`}function yr({config:e}){return e.emulator?k(e,mr):`https://${e.authDomain}/${fr}`}
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
 */const wr="webStorageSupport";class br{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bt,this._completeRedirectFn=jn,this._overrideRedirectResult=Rn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await vr(e,t,n,E(),r);return hr(e,s,Ht())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await vr(e,t,n,E(),r);return Kt(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await sr(e),n=new Fn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(wr,{type:wr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[wr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return be()||de()||ve()}}const Er=br;class Sr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Tr extends Sr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Tr(e)}_finalizeEnroll(e,t,n){return Pt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ir{constructor(){}static assertion(e){return Tr._fromCredential(e)}}Ir.FACTOR_ID="phone";class xr{static assertionForEnrollment(e,t){return _r._fromSecret(e,t)}static assertionForSignIn(e,t){return _r._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;y("undefined"!==typeof t.auth,"internal-error");const n=await Mt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return kr._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}xr.FACTOR_ID="totp";class _r extends Sr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new _r(t,void 0,e)}static _fromEnrollmentId(e,t){return new _r(t,e)}async _finalizeEnroll(e,t,n){return y("undefined"!==typeof this.secret,e,"argument-error"),Rt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return yn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class kr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new kr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Cr(e)||Cr(t))&&(r=!0),r&&(Cr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Cr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Cr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ar="@firebase/auth",Or="0.23.1";
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
class Dr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Pr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),y(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},c=new Ne(r,i,s,l);return Fe(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Dr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Ar,Or,Pr(e)),(0,i.KN)(Ar,Or,"esm2017")}
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
 */const Rr=300,Nr=(0,r.Pz)("authIdTokenMaxAge")||Rr;let Lr=null;const jr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nr)return;const i=null===n||void 0===n?void 0:n.token;Lr!==i&&(Lr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $r(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$e(e,{popupRedirectResolver:Er,persistence:[mn,zt,Bt]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=jr(s);Ct(n,e,(()=>e(n.currentUser))),kt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ve(n,`http://${o}`),n}Mr("Browser")},4287:function(e,t,n){"use strict";n.d(t,{IX:function(){return Zp},ET:function(){return qf},hJ:function(){return Kp},JU:function(){return Xp},PL:function(){return Uf},LV:function(){return tf},cf:function(){return Hf},j5:function(){return Xf},n3:function(){return em},Bt:function(){return tm},pl:function(){return Bf},r7:function(){return Yf}});n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),l=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),c={},u=u||{},d=l||self;function h(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function E(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var I=0;T.prototype.s=!1,T.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==I)||m(this)},T.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function _(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(p(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",h,t),d.removeEventListener("test",h,t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}var D=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function P(e,t){return e<t?-1:e>t?1:0}function M(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function R(e){return-1!=M().indexOf(e)}function N(e){return N[" "](e),e}function L(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}N[" "]=h;var j,$=R("Opera"),F=R("Trident")||R("MSIE"),V=R("Edge"),z=V||F,U=R("Gecko")&&!(-1!=M().toLowerCase().indexOf("webkit")&&!R("Edge"))&&!(R("Trident")||R("MSIE"))&&!R("Edge"),B=-1!=M().toLowerCase().indexOf("webkit")&&!R("Edge");function Y(){var e=d.document;return e?e.documentMode:void 0}e:{var q="",H=function(){var e=M();return U?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):$?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(q=H?H[1]:""),F){var G=Y();if(null!=G&&G>parseFloat(q)){j=String(G);break e}}j=q}var W,K={};function X(){return L(K,9,(function(){let e=0;const t=D(String(j)).split("."),n=D("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=P(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==i[2].length,0==s[2].length)||P(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&F){var Q=Y();W=Q||(parseInt(j,10)||void 0)}else W=void 0;var J=W;function Z(e,t){if(C.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{N(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}S(Z,C);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ne,this.fa=this.ia=!1}function ie(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=x(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ce.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new re(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var he="closure_lm_"+(1e6*Math.random()|0),pe={};function fe(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=Ie(n),e&&e[te]?e.O(t,n,f(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=Se(e);if(a||(e[he]=a=new ce(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=Ee;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Ie(n),e&&e[te]?e.P(t,n,f(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=Ie(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Se(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[te])ue(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Se(t))?(ue(n,e),0==n.h&&(n.src=null,t[he]=null)):ie(e)}}}function be(e){return e in pe?pe[e]:pe[e]="on"+e}function Ee(e,t){if(e.fa)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.la||e.src;e.ia&&we(e),e=n.call(r,t)}return e}function Se(e){return e=e[he],e instanceof ce?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function xe(){T.call(this),this.i=new ce(this),this.S=this,this.J=null}function _e(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),le(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ke(o,r,!0,t)&&i}if(o=t.g=e,i=ke(o,r,!0,t)&&i,i=ke(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ke(o,r,!1,t)&&i}function ke(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ue(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}S(xe,T),xe.prototype[te]=!0,xe.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.J=null},xe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},xe.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=d.JSON.stringify;function Ae(){var e=$e;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const n=Pe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var De,Pe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Me),(e=>e.reset()));class Me{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Re(e){d.setTimeout((()=>{throw e}),0)}function Ne(e,t){De||Le(),je||(De(),je=!0),$e.add(e,t)}function Le(){var e=d.Promise.resolve(void 0);De=function(){e.then(Fe)}}var je=!1,$e=new Oe;function Fe(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Re(n)}var t=Pe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1}function Ve(e,t){xe.call(this),this.h=e||1,this.g=t||d,this.j=b(this.qb,this),this.l=Date.now()}function ze(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ue(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Be(e){e.g=Ue((()=>{e.g=null,e.i&&(e.i=!1,Be(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}S(Ve,xe),r=Ve.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(ze(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ve.$.N.call(this),ze(this),delete this.g};class Ye extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(e){T.call(this),this.h=e,this.g={}}S(qe,T);var He=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=fe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function We(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Ke(){this.g=!0}function Xe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&"type"==d[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}qe.prototype.N=function(){qe.$.N.call(this),We(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ke.prototype.Ea=function(){this.g=!1},Ke.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new xe}function it(e){C.call(this,tt.Ta,e)}function st(e){const t=rt();_e(t,new it(t))}function ot(e,t){C.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();_e(t,new ot(t,e))}function lt(e,t){C.call(this,tt.Ua,e),this.size=t}function ct(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}tt.Ta="serverreachability",S(it,C),tt.STAT_EVENT="statevent",S(ot,C),tt.Ua="timingevent",S(lt,C);var ut={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},dt={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ht(){}function pt(e){return e.h||(e.h=e.i())}function ft(){}ht.prototype.h=null;var mt,gt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vt(){C.call(this,"d")}function yt(){C.call(this,"c")}function wt(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new qe(this),this.P=St,e=z?125:void 0,this.V=new Ve(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}S(vt,C),S(yt,C),S(wt,ht),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var St=45e3,Tt={},It={};function xt(e,t,n){e.L=1,e.v=Gt(Ut(t)),e.s=n,e.S=!0,_t(e,null)}function _t(e,t){e.G=Date.now(),Ot(e),e.A=Ut(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.I,e.h=new Et,e.g=dr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ye(b(e.Pa,e,e.g),e.O)),Ge(e.U,e.g,"readystatechange",e.nb),t=e.I?oe(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),st(),Xe(e.j,e.u,e.A,e.m,e.W,e.s)}function kt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ct(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=At(e,n),r==It){4==t&&(e.o=4,at(14),i=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Je(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Je(e.j,e.m,r,null),Nt(e,r)}kt(e)&&r!=It&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.L=!0,at(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),Mt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?It:(t=t.substr(r,n),e.C=r+n,t)))}function Ot(e){e.Y=Date.now()+e.P,Dt(e,e.P)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ct(b(e.lb,e),t)}function Pt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Mt(e){0==e.l.H||e.J||or(e.l,e)}function Rt(e){Pt(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,ze(e.V),We(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Nt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||mn(n.h,e)))if(!e.K&&mn(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;sr(n),Wn(n)}nr(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=ct(b(n.ib,n),6e3));if(1>=fn(n.h)&&n.na){try{n.na()}catch(c){}n.na=void 0}}else lr(n,11)}else if((e.K||n.g==e)&&sr(n),!O(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=c[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.F){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Ht(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ur(r,r.I?r.oa:null,r.Y),o.K){vn(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Pt(a),Ot(a)),r.g=o}else tr(r);0<n.i.length&&Xn(n)}else"stop"!=c[0]&&"close"!=c[0]||lr(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?lr(n,7):Gn(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}st(4)}catch(c){}}function Lt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function jt(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(p(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=jt(e),r=Lt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=bt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==zn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const u=zn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(3!=u||z||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=u||7==t||st(8==t||0>=h?3:2),Pt(this);var n=this.g.da();this.aa=n;t:if(kt(this)){var r=Un(this.g);e="";var i=r.length,s=4==zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Rt(this),Mt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,at(12),Rt(this),Mt(this);break e}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nt(this,n)}this.S?(Ct(this,u,o),z&&this.i&&3==u&&(Ge(this.U,this.V,"tick",this.mb),this.V.start())):(Je(this.j,this.m,o,null),Nt(this,o)),4==u&&Rt(this),this.i&&!this.J&&(4==u?or(this.l,this):(this.i=!1,Ot(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Rt(this),Mt(this)}}}catch(u){}},r.mb=function(){if(this.g){var e=zn(this.g),t=this.g.ja();this.C<t.length&&(Pt(this),Ct(this,e,t),this.i&&4!=e&&Ot(this))}},r.cancel=function(){this.J=!0,Rt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ze(this.j,this.A),2!=this.L&&(st(),at(17)),Rt(this),this.o=2,Mt(this)):Dt(this,this.Y-e)};var Ft=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof zt){this.h=void 0!==t?t:e.h,Bt(this,e.j),this.s=e.s,this.g=e.g,Yt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qt(this,n),this.o=e.o}else e&&(n=String(e).match(Ft))?(this.h=!!t,Bt(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),Yt(this,n[4]),this.l=Wt(n[5]||"",!0),qt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Ut(e){return new zt(e)}function Bt(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qt(e,t,n){t instanceof nn?(e.i=t,cn(e.i,e.h)):(n||(t=Kt(t,en)),e.i=new nn(t,e.h))}function Ht(e,t,n){e.i.set(t,n)}function Gt(e){return Ht(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Kt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Xt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Kt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Kt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Kt(n,"/"==n.charAt(0)?Zt:Jt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Kt(n,tn)),e.join("")};var Qt=/[#\/\?@]/g,Jt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),_(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cn(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.sa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var un=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||hn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function fn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return _(e.i)}function wn(){}function bn(){this.g=new wn}function En(e,t,n){const r=n||"";try{$t(e,(function(e,n){let i=e;f(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Sn(e,t){const n=new Ke;if(d.Image){const r=new Image;r.onload=E(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=E(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=E(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=E(Tn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function In(e){this.l=e.fc||null,this.j=e.ob||!1}function xn(e,t){xe.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=_n,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},S(In,ht),In.prototype.g=function(){return new xn(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),S(xn,xe);var _n=0;function kn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=xn.prototype,r.open=function(e,t){if(this.readyState!=_n)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=_n},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):An(this),3==this.readyState&&kn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ya=function(e){this.g&&(this.response=e,Cn(this))},r.ka=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var On=d.JSON.parse;function Dn(e){xe.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pn,this.L=this.M=!1}S(Dn,xe);var Pn="",Mn=/^https?$/i,Rn=["POST","PUT"];function Nn(e){return F&&X()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Ln(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,jn(e),Fn(e)}function jn(e){e.F||(e.F=!0,_e(e,"complete"),_e(e,"error"))}function $n(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=zn(e)||2!=e.da()))if(e.v&&4==zn(e))Ue(e.La,0,e);else if(_e(e,"readystatechange"),4==zn(e)){e.h=!1;try{const l=e.da();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.I).match(Ft)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!Mn.test(i?i.toLowerCase():"")}n=r}if(n)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var o=2<zn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.da()+"]",jn(e)}}finally{Fn(e)}}}function Fn(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?h:null;e.g=null,e.C=null,t||_e(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function zn(e){return e.g?e.g.readyState:0}function Un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Xr){return null}}function Bn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Yn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Ht(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ga=0,this.i=[],this.j=new Ke,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new dn(e&&e.concurrentRequestLimit),this.Ja=new bn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Gn(e){if(Kn(e),3==e.H){var t=e.W++,n=Ut(e.G);Ht(n,"SID",e.J),Ht(n,"RID",t),Ht(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.L=2,t.v=Gt(Ut(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=dr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ot(t)}cr(e)}function Wn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Kn(e){Wn(e),e.u&&(d.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Xn(e){pn(e.h)||e.m||(e.m=!0,Ne(e.Na,e),e.C=0)}function Qn(e,t){return!(fn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.F.concat(e.i),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ct(b(e.Na,e,t),ar(e,e.C)),e.C++,!0))}function Jn(e,t){var n;n=t?t.m:e.W++;const r=Ut(e.G);Ht(r,"SID",e.J),Ht(r,"RID",n),Ht(r,"AID",e.V),Zn(e,r),e.o&&e.s&&Yn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),gn(e.h,n),xt(n,r,t)}function Zn(e,t){e.ma&&se(e.ma,(function(e,n){Ht(t,n,e)})),e.l&&$t({},(function(e,n){Ht(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{En(a,e,"req"+n+"_")}catch(ai){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function tr(e){e.g||e.u||(e.ba=1,Ne(e.Ma,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ct(b(e.Ma,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new bt(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ut(e.wa);Ht(t,"RID","rpc"),Ht(t,"SID",e.J),Ht(t,"CI",e.M?"0":"1"),Ht(t,"AID",e.V),Ht(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&Yn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Gt(Ut(t)),n.s=null,n.S=!0,_t(n,e)}function sr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.F,vn(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=rt(),_e(r,new lt(r,n)),Xn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.ta||!(1==r&&Qn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.pb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Bt(n,"https"),Gt(n)),Sn(n.toString(),r)}else at(2);e.H=0,e.l&&e.l.za(t),cr(e),Kn(e)}function cr(e){if(e.H=0,e.pa=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(k(e.pa,t),k(e.pa,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.ya()}}function ur(e,t,n){var r=n instanceof zt?Ut(n):new zt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Yt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new zt(null,void 0);r&&Bt(s,r),t&&(s.g=t),i&&Yt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ht(r,n,t),Ht(r,"VER",e.qa),Zn(e,r),r}function dr(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Dn(new In({ob:!0})):new Dn(e.va),t.Oa(e.I),t}function hr(){}function pr(){if(F&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function fr(e,t){xe.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function mr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){yt.call(this),this.status=1}function vr(e){this.g=e}function yr(){this.blockSize=-1}function wr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function br(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Er(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=Dn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?pt(this.u):pt(mt),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Ln(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=x(Rn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vn(this),0<this.B&&((this.L=Nn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Ue(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ln(this,s)}},r.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),Fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),Dn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?$n(this):this.kb())},r.kb=function(){$n(this)},r.da=function(){try{return 2<zn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),On(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.qa=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new bt(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=oe(s),le(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=Ut(this.G),Ht(n,"RID",e),Ht(n,"CVER",22),this.F&&Ht(n,"X-HTTP-Session-Id",this.F),Zn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&Yn(n,this.o,s)),gn(this.h,i),this.bb&&Ht(n,"TYPE","init"),this.P?(Ht(n,"$req",t),Ht(n,"SID","null"),i.ba=!0,xt(i,n,null)):xt(i,n,t),this.H=2}}else 3==this.H&&(e?Jn(this,e):0==this.i.length||pn(this.h)||Jn(this))},r.Ma=function(){if(this.u=null,ir(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=ct(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,at(10),Wn(this),ir(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),at(19))},r.pb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=hr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},pr.prototype.g=function(e,t){return new fr(e,t)},S(fr,xe),fr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=ur(e,null,e.Y),Xn(e)},fr.prototype.close=function(){Gn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ce(e),e=n);t.i.push(new un(t.fb++,e)),3==t.H&&Xn(t)},fr.prototype.N=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,fr.$.N.call(this)},S(mr,vt),S(gr,yt),S(vr,hr),vr.prototype.Ba=function(){_e(this.g,"a")},vr.prototype.Aa=function(e){_e(this.g,new mr(e))},vr.prototype.za=function(e){_e(this.g,new gr)},vr.prototype.ya=function(){_e(this.g,"b")},S(wr,yr),wr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},wr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)br(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){br(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){br(this,r),i=0;break}}this.h=i,this.i+=t},wr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Sr={};function Tr(e){return-128<=e&&128>e?L(Sr,e,(function(e){return new Er([0|e],0>e?-1:0)})):new Er([0|e],0>e?-1:0)}function Ir(e){if(isNaN(e)||!isFinite(e))return kr;if(0>e)return Pr(Ir(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=_r;return new Er(t,0)}function xr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Pr(xr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ir(Math.pow(t,8)),r=kr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ir(Math.pow(t,s)),r=r.R(s).add(Ir(o))):(r=r.R(n),r=r.add(Ir(o)))}return r}var _r=4294967296,kr=Tr(0),Cr=Tr(1),Ar=Tr(16777216);function Or(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Dr(e){return-1==e.h}function Pr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Er(n,~e.h).add(Cr)}function Mr(e,t){return e.add(Pr(t))}function Rr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Nr(e,t){this.g=e,this.h=t}function Lr(e,t){if(Or(t))throw Error("division by zero");if(Or(e))return new Nr(kr,kr);if(Dr(e))return t=Lr(Pr(e),t),new Nr(Pr(t.g),Pr(t.h));if(Dr(t))return t=Lr(e,Pr(t)),new Nr(Pr(t.g),t.h);if(30<e.g.length){if(Dr(e)||Dr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=jr(n),r=jr(r);var i=$r(n,1),s=$r(r,1);for(r=$r(r,2),n=$r(n,2);!Or(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=$r(r,1),n=$r(n,1)}return t=Mr(e,i.R(t)),new Nr(i,t)}for(i=kr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ir(n),o=s.R(t);Dr(o)||0<o.X(e);)n-=r,s=Ir(n),o=s.R(t);Or(s)&&(s=Cr),i=i.add(s),e=Mr(e,o)}return new Nr(i,e)}function jr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Er(n,e.h)}function $r(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Er(i,e.h)}r=Er.prototype,r.ea=function(){if(Dr(this))return-Pr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:_r+r)*t,t*=_r}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Or(this))return"0";if(Dr(this))return"-"+Pr(this).toString(e);for(var t=Ir(Math.pow(e,6)),n=this,r="";;){var i=Lr(n,t).g;n=Mr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Or(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Mr(this,e),Dr(e)?-1:Or(e)?0:1},r.abs=function(){return Dr(this)?Pr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Er(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Or(this)||Or(e))return kr;if(Dr(this))return Dr(e)?Pr(this).R(Pr(e)):Pr(Pr(this).R(e));if(Dr(e))return Pr(this.R(Pr(e)));if(0>this.X(Ar)&&0>e.X(Ar))return Ir(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=o*l,Rr(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Rr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Rr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Rr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Er(n,0)},r.gb=function(e){return Lr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Er(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Er(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Er(n,this.h^e.h)},pr.prototype.createWebChannel=pr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,dt.COMPLETE="complete",ft.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",xe.prototype.listen=xe.prototype.O,Dn.prototype.listenOnce=Dn.prototype.P,Dn.prototype.getLastError=Dn.prototype.Sa,Dn.prototype.getLastErrorCode=Dn.prototype.Ia,Dn.prototype.getStatus=Dn.prototype.da,Dn.prototype.getResponseJson=Dn.prototype.Wa,Dn.prototype.getResponseText=Dn.prototype.ja,Dn.prototype.send=Dn.prototype.ha,Dn.prototype.setWithCredentials=Dn.prototype.Oa,wr.prototype.digest=wr.prototype.l,wr.prototype.reset=wr.prototype.reset,wr.prototype.update=wr.prototype.j,Er.prototype.add=Er.prototype.add,Er.prototype.multiply=Er.prototype.R,Er.prototype.modulo=Er.prototype.gb,Er.prototype.compare=Er.prototype.X,Er.prototype.toNumber=Er.prototype.ea,Er.prototype.toString=Er.prototype.toString,Er.prototype.getBits=Er.prototype.D,Er.fromNumber=Ir,Er.fromString=xr;var Fr=c.createWebChannelTransport=function(){return new pr},Vr=c.getStatEventTarget=function(){return rt()},zr=c.ErrorCode=ut,Ur=c.EventType=dt,Br=c.Event=tt,Yr=c.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=c.FetchXmlHttpFactory=In,Hr=c.WebChannel=ft,Gr=c.XhrIo=Dn,Wr=c.Md5=wr,Kr=c.Integer=Er;const Xr="@firebase/firestore";
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
 */class Qr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
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
let Jr="9.21.0";
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
 */const Zr=new o.Yd("@firebase/firestore");function ei(){return Zr.logLevel}function ti(e,...t){if(Zr.logLevel<=o["in"].DEBUG){const n=t.map(ii);Zr.debug(`Firestore (${Jr}): ${e}`,...n)}}function ni(e,...t){if(Zr.logLevel<=o["in"].ERROR){const n=t.map(ii);Zr.error(`Firestore (${Jr}): ${e}`,...n)}}function ri(e,...t){if(Zr.logLevel<=o["in"].WARN){const n=t.map(ii);Zr.warn(`Firestore (${Jr}): ${e}`,...n)}}function ii(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function si(e="Unexpected state"){const t=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+e;throw ni(t),new Error(t)}function oi(e,t){e||si()}function ai(e,t){return e}
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
 */const li={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ci extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ui{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class di{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Qr.UNAUTHENTICATED)))}shutdown(){}}class pi{constructor(e){this.t=e,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ui,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ti("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ti("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ui)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ti("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oi("string"==typeof t.accessToken),new di(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oi(null===e||"string"==typeof e),new Qr(e)}}class fi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class mi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new fi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ti("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ti("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ti("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ti("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(oi("string"==typeof e.token),this.T=e.token,new gi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function yi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class wi{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function bi(e,t){return e<t?-1:e>t?1:0}function Ei(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Si(e){return e+"\0"}
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
 */class Ti{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ci(li.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ci(li.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ci(li.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ci(li.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ti.fromMillis(Date.now())}static fromDate(e){return Ti.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ti(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?bi(this.nanoseconds,e.nanoseconds):bi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ii{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ii(e)}static min(){return new Ii(new Ti(0,0))}static max(){return new Ii(new Ti(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class xi{constructor(e,t,n){void 0===t?t=0:t>e.length&&si(),void 0===n?n=e.length-t:n>e.length-t&&si(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===xi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _i extends xi{construct(e,t,n){return new _i(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ci(li.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new _i(t)}static emptyPath(){return new _i([])}}const ki=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ci extends xi{construct(e,t,n){return new Ci(e,t,n)}static isValidIdentifier(e){return ki.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ci.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ci(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ci(li.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ci(li.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ci(li.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ci(li.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ci(t)}static emptyPath(){return new Ci([])}}
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
 */class Ai{constructor(e){this.path=e}static fromPath(e){return new Ai(_i.fromString(e))}static fromName(e){return new Ai(_i.fromString(e).popFirst(5))}static empty(){return new Ai(_i.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===_i.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return _i.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ai(new _i(e.slice()))}}
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
 */class Oi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Di(e){return e.fields.find((e=>2===e.kind))}function Pi(e){return e.fields.filter((e=>2!==e.kind))}Oi.UNKNOWN_ID=-1;class Mi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ri{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ri(0,ji.min())}}function Ni(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ii.fromTimestamp(1e9===r?new Ti(n+1,0):new Ti(n,r));return new ji(i,Ai.empty(),t)}function Li(e){return new ji(e.readTime,e.key,-1)}class ji{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ji(Ii.min(),Ai.empty(),-1)}static max(){return new ji(Ii.max(),Ai.empty(),-1)}}function $i(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ai.comparator(e.documentKey,t.documentKey),0!==n?n:bi(e.largestBatchId,t.largestBatchId))}
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
 */const Fi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function zi(e){if(e.code!==li.FAILED_PRECONDITION||e.message!==Fi)throw e;ti("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ui{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ui(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ui?t:Ui.resolve(t)}catch(e){return Ui.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ui.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ui.reject(t)}static resolve(e){return new Ui(((t,n)=>{t(e)}))}static reject(e){return new Ui(((t,n)=>{n(e)}))}static waitFor(e){return new Ui(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ui.resolve(!1);for(const n of e)t=t.next((e=>e?Ui.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ui(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ui(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */class Bi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new ui,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Hi(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{const n=Qi(t.target.error);this.R.reject(new Hi(e,n))}}static open(e,t,n,r){try{return new Bi(t,e.transaction(r,n))}catch(e){throw new Hi(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(ti("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Wi(t)}}class Yi{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Yi.S((0,a.z$)())&&ni("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ti("SimpleDb","Removing database:",e),Ki(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,a.hl)())return!1;if(Yi.C())return!0;const e=(0,a.z$)(),t=Yi.S(e),n=0<t&&t<10,r=Yi.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/Tripper/"})||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(ti("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Hi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ci(li.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ci(li.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Hi(e,r))},r.onupgradeneeded=e=>{ti("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.$(t,r.transaction,e.oldVersion,this.version).next((()=>{ti("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=Bi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Ui.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ti("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class qi{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ki(this.L.delete())}}class Hi extends ci{constructor(e,t){super(li.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Gi(e){return"IndexedDbTransactionError"===e.name}class Wi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ti("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ti("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ki(n)}add(e){return ti("SimpleDb","ADD",this.store.name,e,e),Ki(this.store.add(e))}get(e){return Ki(this.store.get(e)).next((t=>(void 0===t&&(t=null),ti("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ti("SimpleDb","DELETE",this.store.name,e),Ki(this.store.delete(e))}count(){return ti("SimpleDb","COUNT",this.store.name),Ki(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ui(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ui(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ti("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new Ui(((n,r)=>{t.onerror=e=>{const t=Qi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Ui(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new qi(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ui){const e=o.catch((e=>(s.done(),Ui.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Ui.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ki(e){return new Ui(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Qi(e.target.error);n(t)}}))}let Xi=!1;function Qi(e){const t=Yi.S((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ci("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xi||(Xi=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Ji{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){ti("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ti("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Gi(e)?ti("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await zi(e)}await this.et(6e4)}))}}class Zi{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return Ui.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ti("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(ti("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Li(t);$i(r,n)>0&&(n=r)})),new ji(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
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
 */class es{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ts(e){return null==e}function ns(e){return 0===e&&1/e==-1/0}function rs(e){return"number"==typeof e&&Number.isInteger(e)&&!ns(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */function is(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=os(t)),t=ss(e.get(n),t);return os(t)}function ss(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function os(e){return e+""}function as(e){const t=e.length;if(oi(t>=2),2===t)return oi(""===e.charAt(0)&&""===e.charAt(1)),_i.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&si(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:si()}s=t+2}return new _i(r)}
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
 */es.ct=-1;const ls=["userId","batchId"];
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
 */function cs(e,t){return[e,is(t)]}function us(e,t,n){return[e,is(t),n]}const ds={},hs=["prefixPath","collectionGroup","readTime","documentId"],ps=["prefixPath","collectionGroup","documentId"],fs=["collectionGroup","readTime","prefixPath","documentId"],ms=["canonicalId","targetId"],gs=["targetId","path"],vs=["path","targetId"],ys=["collectionId","parent"],ws=["indexId","uid"],bs=["uid","sequenceNumber"],Es=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ss=["indexId","uid","orderedDocumentKey"],Ts=["userId","collectionPath","documentId"],Is=["userId","collectionPath","largestBatchId"],xs=["userId","collectionGroup","largestBatchId"],_s=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ks=[..._s,"documentOverlays"],Cs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],As=Cs,Os=[...As,"indexConfiguration","indexState","indexEntries"];
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
 */class Ds extends Vi{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function Ps(e,t){const n=ai(e);return Yi.M(n.at,t)}
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
 */function Ms(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Rs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ns(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Ls{constructor(e,t){this.comparator=e,this.root=t||$s.EMPTY}insert(e,t){return new Ls(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$s.BLACK,null,null))}remove(e){return new Ls(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$s.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $s{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:$s.RED,this.left=null!=r?r:$s.EMPTY,this.right=null!=i?i:$s.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new $s(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $s.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return $s.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$s.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$s.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const e=this.left.check();if(e!==this.right.check())throw si();return e+(this.isRed()?0:1)}}$s.EMPTY=null,$s.RED=!0,$s.BLACK=!1,$s.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(e,t,n,r,i){return this}insert(e,t,n){return new $s(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Fs{constructor(e){this.comparator=e,this.data=new Ls(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vs(this.data.getIterator())}getIteratorFrom(e){return new Vs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Fs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Fs(this.comparator);return t.data=e,t}}class Vs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function zs(e){return e.hasNext()?e.getNext():void 0}
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
 */class Us{constructor(e){this.fields=e,e.sort(Ci.comparator)}static empty(){return new Us([])}unionWith(e){let t=new Fs(Ci.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Us(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class Bs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Ys{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Bs("Invalid base64 string: "+e):e}}(e);return new Ys(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ys(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return bi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ys.EMPTY_BYTE_STRING=new Ys("");const qs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hs(e){if(oi(!!e),"string"==typeof e){let t=0;const n=qs.exec(e);if(oi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Gs(e.seconds),nanos:Gs(e.nanos)}}function Gs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ws(e){return"string"==typeof e?Ys.fromBase64String(e):Ys.fromUint8Array(e)}
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
 */function Ks(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Xs(e){const t=e.mapValue.fields.__previous_value__;return Ks(t)?Xs(t):t}function Qs(e){const t=Hs(e.mapValue.fields.__local_write_time__.timestampValue);return new Ti(t.seconds,t.nanos)}
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
 */class Js{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Zs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Zs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Zs&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},to={nullValue:"NULL_VALUE"};function no(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ks(e)?4:vo(e)?9007199254740991:10:si()}function ro(e,t){if(e===t)return!0;const n=no(e);if(n!==no(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qs(e).isEqual(Qs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Hs(e.timestampValue),r=Hs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ws(e.bytesValue).isEqual(Ws(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Gs(e.geoPointValue.latitude)===Gs(t.geoPointValue.latitude)&&Gs(e.geoPointValue.longitude)===Gs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Gs(e.integerValue)===Gs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Gs(e.doubleValue),r=Gs(t.doubleValue);return n===r?ns(n)===ns(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ei(e.arrayValue.values||[],t.arrayValue.values||[],ro);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ms(n)!==Ms(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ro(n[i],r[i])))return!1;return!0}(e,t);default:return si()}}function io(e,t){return void 0!==(e.values||[]).find((e=>ro(e,t)))}function so(e,t){if(e===t)return 0;const n=no(e),r=no(t);if(n!==r)return bi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return bi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Gs(e.integerValue||e.doubleValue),r=Gs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return oo(e.timestampValue,t.timestampValue);case 4:return oo(Qs(e),Qs(t));case 5:return bi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ws(e),r=Ws(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=bi(n[i],r[i]);if(0!==e)return e}return bi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=bi(Gs(e.latitude),Gs(t.latitude));return 0!==n?n:bi(Gs(e.longitude),Gs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=so(n[i],r[i]);if(e)return e}return bi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eo.mapValue&&t===eo.mapValue)return 0;if(e===eo.mapValue)return 1;if(t===eo.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=bi(r[o],s[o]);if(0!==e)return e;const t=so(n[r[o]],i[s[o]]);if(0!==t)return t}return bi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw si()}}function oo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return bi(e,t);const n=Hs(e),r=Hs(t),i=bi(n.seconds,r.seconds);return 0!==i?i:bi(n.nanos,r.nanos)}function ao(e){return lo(e)}function lo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Hs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ws(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ai.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=lo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${lo(e.fields[i])}`;return n+"}"}(e.mapValue):si();var t,n}function co(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function uo(e){return!!e&&"integerValue"in e}function ho(e){return!!e&&"arrayValue"in e}function po(e){return!!e&&"nullValue"in e}function fo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mo(e){return!!e&&"mapValue"in e}function go(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Rs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=go(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=go(e.arrayValue.values[n]);return t}return Object.assign({},e)}function vo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function yo(e){return"nullValue"in e?to:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?co(Zs.empty(),Ai.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:si()}function wo(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?co(Zs.empty(),Ai.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?eo:si()}function bo(e,t){const n=so(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Eo(e,t){const n=so(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
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
 */class So{constructor(e){this.value=e}static empty(){return new So({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(t)}setAll(e){let t=Ci.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=go(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ro(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];mo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Rs(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new So(go(this.value))}}function To(e){const t=[];return Rs(e.fields,((e,n)=>{const r=new Ci([e]);if(mo(n)){const e=To(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Us(t)
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
 */}class Io{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Io(e,0,Ii.min(),Ii.min(),Ii.min(),So.empty(),0)}static newFoundDocument(e,t,n,r){return new Io(e,1,t,Ii.min(),n,r,0)}static newNoDocument(e,t){return new Io(e,2,t,Ii.min(),Ii.min(),So.empty(),0)}static newUnknownDocument(e,t){return new Io(e,3,t,Ii.min(),Ii.min(),So.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ii.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=So.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=So.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ii.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Io&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Io(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class xo{constructor(e,t){this.position=e,this.inclusive=t}}function _o(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ai.comparator(Ai.fromName(o.referenceValue),n.key):so(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ko(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ro(e.position[n],t.position[n]))return!1;return!0}
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
 */class Co{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ao(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Oo{}class Do extends Oo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zo(e,t,n):"array-contains"===t?new qo(e,n):"in"===t?new Ho(e,n):"not-in"===t?new Go(e,n):"array-contains-any"===t?new Wo(e,n):new Do(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Uo(e,n):new Bo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(so(t,this.value)):null!==t&&no(this.value)===no(t)&&this.matchesComparison(so(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Po extends Oo{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Po(e,t)}matches(e){return Mo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Mo(e){return"and"===e.op}function Ro(e){return"or"===e.op}function No(e){return Lo(e)&&Mo(e)}function Lo(e){for(const t of e.filters)if(t instanceof Po)return!1;return!0}function jo(e){if(e instanceof Do)return e.field.canonicalString()+e.op.toString()+ao(e.value);if(No(e))return e.filters.map((e=>jo(e))).join(",");{const t=e.filters.map((e=>jo(e))).join(",");return`${e.op}(${t})`}}function $o(e,t){return e instanceof Do?function(e,t){return t instanceof Do&&e.op===t.op&&e.field.isEqual(t.field)&&ro(e.value,t.value)}(e,t):e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&$o(n,t.filters[r])),!0)}(e,t):void si()}function Fo(e,t){const n=e.filters.concat(t);return Po.create(n,e.op)}function Vo(e){return e instanceof Do?function(e){return`${e.field.canonicalString()} ${e.op} ${ao(e.value)}`}(e):e instanceof Po?function(e){return e.op.toString()+" {"+e.getFilters().map(Vo).join(" ,")+"}"}(e):"Filter"}class zo extends Do{constructor(e,t,n){super(e,t,n),this.key=Ai.fromName(n.referenceValue)}matches(e){const t=Ai.comparator(e.key,this.key);return this.matchesComparison(t)}}class Uo extends Do{constructor(e,t){super(e,"in",t),this.keys=Yo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Bo extends Do{constructor(e,t){super(e,"not-in",t),this.keys=Yo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Yo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ai.fromName(e.referenceValue)))}class qo extends Do{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ho(t)&&io(t.arrayValue,this.value)}}class Ho extends Do{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&io(this.value.arrayValue,t)}}class Go extends Do{constructor(e,t){super(e,"not-in",t)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!io(this.value.arrayValue,t)}}class Wo extends Do{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>io(this.value.arrayValue,e)))}}
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
 */class Ko{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function Xo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ko(e,t,n,r,i,s,o)}function Qo(e){const t=ai(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>jo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ts(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ao(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ao(e))).join(",")),t.ft=e}return t.ft}function Jo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ao(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$o(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ko(e.startAt,t.startAt)&&ko(e.endAt,t.endAt)}function Zo(e){return Ai.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ea(e,t){return e.filters.filter((e=>e instanceof Do&&e.field.isEqual(t)))}function ta(e,t,n){let r=to,i=!0;for(const s of ea(e,t)){let e=to,t=!0;switch(s.op){case"<":case"<=":e=yo(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=to}bo({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];bo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function na(e,t,n){let r=eo,i=!0;for(const s of ea(e,t)){let e=eo,t=!0;switch(s.op){case">=":case">":e=wo(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=eo}Eo({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
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
 */class ra{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ia(e,t,n,r,i,s,o,a){return new ra(e,t,n,r,i,s,o,a)}function sa(e){return new ra(e)}function oa(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function aa(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function la(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ca(e){return null!==e.collectionGroup}function ua(e){const t=ai(e);if(null===t.dt){t.dt=[];const e=la(t),n=aa(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Co(e)),t.dt.push(new Co(Ci.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Co(Ci.keyField(),e))}}}return t.dt}function da(e){const t=ai(e);if(!t._t)if("F"===t.limitType)t._t=Xo(t.path,t.collectionGroup,ua(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of ua(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Co(i.field,t))}const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;t._t=Xo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ha(e,t,n){return new ra(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function pa(e,t){return Jo(da(e),da(t))&&e.limitType===t.limitType}function fa(e){return`${Qo(da(e))}|lt:${e.limitType}`}function ma(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Vo(e))).join(", ")}]`),ts(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ao(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ao(e))).join(",")),`Target(${t})`}(da(e))}; limitType=${e.limitType})`}function ga(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ai.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ua(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=_o(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ua(e),t))&&!(e.endAt&&!function(e,t,n){const r=_o(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ua(e),t))}(e,t)}function va(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ya(e){return(t,n)=>{let r=!1;for(const i of ua(e)){const e=wa(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function wa(e,t,n){const r=e.field.isKeyField()?Ai.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?so(r,i):si()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
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
 */class ba{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ns(this.inner)}size(){return this.innerSize}}
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
 */const Ea=new Ls(Ai.comparator);function Sa(){return Ea}const Ta=new Ls(Ai.comparator);function Ia(...e){let t=Ta;for(const n of e)t=t.insert(n.key,n);return t}function xa(e){let t=Ta;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function _a(){return Ca()}function ka(){return Ca()}function Ca(){return new ba((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Aa=new Ls(Ai.comparator),Oa=new Fs(Ai.comparator);function Da(...e){let t=Oa;for(const n of e)t=t.add(n);return t}const Pa=new Fs(bi);function Ma(){return Pa}
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
 */function Ra(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(t)?"-0":t}}function Na(e){return{integerValue:""+e}}function La(e,t){return rs(t)?Na(t):Ra(e,t)}
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
 */class ja{constructor(){this._=void 0}}function $a(e,t,n){return e instanceof za?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ks(t)&&(t=Xs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ua?Ba(e,t):e instanceof Ya?qa(e,t):function(e,t){const n=Va(e,t),r=Ga(n)+Ga(e.wt);return uo(n)&&uo(e.wt)?Na(r):Ra(e.serializer,r)}(e,t)}function Fa(e,t,n){return e instanceof Ua?Ba(e,t):e instanceof Ya?qa(e,t):n}function Va(e,t){return e instanceof Ha?uo(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class za extends ja{}class Ua extends ja{constructor(e){super(),this.elements=e}}function Ba(e,t){const n=Wa(t);for(const r of e.elements)n.some((e=>ro(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ya extends ja{constructor(e){super(),this.elements=e}}function qa(e,t){let n=Wa(t);for(const r of e.elements)n=n.filter((e=>!ro(e,r)));return{arrayValue:{values:n}}}class Ha extends ja{constructor(e,t){super(),this.serializer=e,this.wt=t}}function Ga(e){return Gs(e.integerValue||e.doubleValue)}function Wa(e){return ho(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Ka{constructor(e,t){this.field=e,this.transform=t}}function Xa(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ua&&t instanceof Ua||e instanceof Ya&&t instanceof Ya?Ei(e.elements,t.elements,ro):e instanceof Ha&&t instanceof Ha?ro(e.wt,t.wt):e instanceof za&&t instanceof za}(e.transform,t.transform)}class Qa{constructor(e,t){this.version=e,this.transformResults=t}}class Ja{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ja}static exists(e){return new Ja(void 0,e)}static updateTime(e){return new Ja(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class el{}function tl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new dl(e.key,Ja.none()):new ol(e.key,e.data,Ja.none());{const n=e.data,r=So.empty();let i=new Fs(Ci.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new al(e.key,r,new Us(i.toArray()),Ja.none())}}function nl(e,t,n){e instanceof ol?function(e,t,n){const r=e.value.clone(),i=cl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof al?function(e,t,n){if(!Za(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=cl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ll(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function rl(e,t,n,r){return e instanceof ol?function(e,t,n,r){if(!Za(e.precondition,t))return n;const i=e.value.clone(),s=ul(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof al?function(e,t,n,r){if(!Za(e.precondition,t))return n;const i=ul(e.fieldTransforms,r,t),s=t.data;return s.setAll(ll(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Za(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function il(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Va(r.transform,e||null);null!=i&&(null===n&&(n=So.empty()),n.set(r.field,i))}return n||null}function sl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ei(e,t,((e,t)=>Xa(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ol extends el{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class al extends el{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ll(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function cl(e,t,n){const r=new Map;oi(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Fa(o,a,n[i]))}return r}function ul(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,$a(e,s,t))}return r}class dl extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hl extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class pl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&nl(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=rl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=rl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ka();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=tl(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ii.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Da())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,((e,t)=>sl(e,t)))&&Ei(this.baseMutations,e.baseMutations,((e,t)=>sl(e,t)))}}class fl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oi(e.mutations.length===n.length);let r=Aa;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new fl(e,t,n,r)}}
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
 */class ml{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class gl{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var vl,yl;function wl(e){switch(e){default:return si();case li.CANCELLED:case li.UNKNOWN:case li.DEADLINE_EXCEEDED:case li.RESOURCE_EXHAUSTED:case li.INTERNAL:case li.UNAVAILABLE:case li.UNAUTHENTICATED:return!1;case li.INVALID_ARGUMENT:case li.NOT_FOUND:case li.ALREADY_EXISTS:case li.PERMISSION_DENIED:case li.FAILED_PRECONDITION:case li.ABORTED:case li.OUT_OF_RANGE:case li.UNIMPLEMENTED:case li.DATA_LOSS:return!0}}function bl(e){if(void 0===e)return ni("GRPC error has no .code"),li.UNKNOWN;switch(e){case vl.OK:return li.OK;case vl.CANCELLED:return li.CANCELLED;case vl.UNKNOWN:return li.UNKNOWN;case vl.DEADLINE_EXCEEDED:return li.DEADLINE_EXCEEDED;case vl.RESOURCE_EXHAUSTED:return li.RESOURCE_EXHAUSTED;case vl.INTERNAL:return li.INTERNAL;case vl.UNAVAILABLE:return li.UNAVAILABLE;case vl.UNAUTHENTICATED:return li.UNAUTHENTICATED;case vl.INVALID_ARGUMENT:return li.INVALID_ARGUMENT;case vl.NOT_FOUND:return li.NOT_FOUND;case vl.ALREADY_EXISTS:return li.ALREADY_EXISTS;case vl.PERMISSION_DENIED:return li.PERMISSION_DENIED;case vl.FAILED_PRECONDITION:return li.FAILED_PRECONDITION;case vl.ABORTED:return li.ABORTED;case vl.OUT_OF_RANGE:return li.OUT_OF_RANGE;case vl.UNIMPLEMENTED:return li.UNIMPLEMENTED;case vl.DATA_LOSS:return li.DATA_LOSS;default:return si()}}(yl=vl||(vl={}))[yl.OK=0]="OK",yl[yl.CANCELLED=1]="CANCELLED",yl[yl.UNKNOWN=2]="UNKNOWN",yl[yl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yl[yl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yl[yl.NOT_FOUND=5]="NOT_FOUND",yl[yl.ALREADY_EXISTS=6]="ALREADY_EXISTS",yl[yl.PERMISSION_DENIED=7]="PERMISSION_DENIED",yl[yl.UNAUTHENTICATED=16]="UNAUTHENTICATED",yl[yl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yl[yl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yl[yl.ABORTED=10]="ABORTED",yl[yl.OUT_OF_RANGE=11]="OUT_OF_RANGE",yl[yl.UNIMPLEMENTED=12]="UNIMPLEMENTED",yl[yl.INTERNAL=13]="INTERNAL",yl[yl.UNAVAILABLE=14]="UNAVAILABLE",yl[yl.DATA_LOSS=15]="DATA_LOSS";
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
class El{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Sl}static getOrCreateInstance(){return null===Sl&&(Sl=new El),Sl}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Sl=null;
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
 */function Tl(){return new TextEncoder}
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
 */const Il=new Kr([4294967295,4294967295],0);function xl(e){const t=Tl().encode(e),n=new Wr;return n.update(t),new Uint8Array(n.digest())}function _l(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class kl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Cl(`Invalid padding: ${t}`);if(n<0)throw new Cl(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Cl(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Cl(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=Kr.fromNumber(this.yt)}Tt(e,t,n){let r=e.add(t.multiply(Kr.fromNumber(n)));return 1===r.compare(Il)&&(r=new Kr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}At(e){if(0===this.yt)return!1;const t=xl(e),[n,r]=_l(t);for(let i=0;i<this.hashCount;i++){const e=this.Tt(n,r,i);if(!this.Et(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new kl(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.yt)return;const t=xl(e),[n,r]=_l(t);for(let i=0;i<this.hashCount;i++){const e=this.Tt(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Cl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Al{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Al(Ii.min(),r,new Ls(bi),Sa(),Da())}}class Ol{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ol(n,t,Da(),Da(),Da())}}
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
 */class Dl{constructor(e,t,n,r){this.vt=e,this.removedTargetIds=t,this.key=n,this.Pt=r}}class Pl{constructor(e,t){this.targetId=e,this.bt=t}}class Ml{constructor(e,t,n=Ys.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Rl{constructor(){this.Vt=0,this.St=jl(),this.Dt=Ys.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Da(),t=Da(),n=Da();return this.St.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:si()}})),new Ol(this.Dt,this.Ct,e,t,n)}$t(){this.xt=!1,this.St=jl()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Nl{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Sa(),this.jt=Ll(),this.zt=new Ls(bi)}Wt(e){for(const t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(const t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,(t=>{const n=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&n.Mt(e.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(e.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(n.Ut(),n.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),n.Mt(e.resumeToken));break;default:si()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach(((e,n)=>{this.Zt(n)&&t(n)}))}ee(e){var t;const n=e.targetId,r=e.bt.count,i=this.ne(n);if(i){const s=i.target;if(Zo(s))if(0===r){const e=new Ai(s.path);this.Jt(n,e,Io.newNoDocument(e,Ii.min()))}else oi(1===r);else{const i=this.se(n);if(i!==r){const r=this.ie(e,i);if(0!==r){this.te(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(n,e)}null===(t=El.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(r=null==u?void 0:u.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}
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
 */(r,i,e.bt))}}}}ie(e,t){const{unchangedNames:n,count:r}=e.bt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,l;try{a=Ws(i).toUint8Array()}catch(e){if(e instanceof Bs)return ri("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new kl(a,s,o)}catch(e){return ri(e instanceof Cl?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.yt?1:r!==t-this.re(e.targetId,l)?2:0}re(e,t){const n=this.Kt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.At(s)||(this.Jt(e,n,null),r++)})),r}ue(e){const t=new Map;this.Gt.forEach(((n,r)=>{const i=this.ne(r);if(i){if(n.current&&Zo(i.target)){const t=new Ai(i.target.path);null!==this.Qt.get(t)||this.ce(r,t)||this.Jt(r,t,Io.newNoDocument(t,e))}n.kt&&(t.set(r,n.Ot()),n.$t())}}));let n=Da();this.jt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.ne(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qt.forEach(((t,n)=>n.setReadTime(e)));const r=new Al(e,t,this.zt,this.Qt,n);return this.Qt=Sa(),this.jt=Ll(),this.zt=new Ls(bi),r}Ht(e,t){if(!this.Zt(e))return;const n=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,n),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,n){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,t)?r.Ft(t,1):r.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),n&&(this.Qt=this.Qt.insert(t,n))}removeTarget(e){this.Gt.delete(e)}se(e){const t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new Rl,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new Fs(bi),this.jt=this.jt.insert(e,t)),t}Zt(e){const t=null!==this.ne(e);return t||ti("WatchChangeAggregator","Detected inactive target",e),t}ne(e){const t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Rl),this.Kt.getRemoteKeysForTarget(e).forEach((t=>{this.Jt(e,t,null)}))}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function Ll(){return new Ls(Ai.comparator)}function jl(){return new Ls(Ai.comparator)}const $l=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Fl=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Vl=(()=>{const e={and:"AND",or:"OR"};return e})();class zl{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ul(e,t){return e.useProto3Json||ts(t)?t:{value:t}}function Bl(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ql(e,t){return Bl(e,t.toTimestamp())}function Hl(e){return oi(!!e),Ii.fromTimestamp(function(e){const t=Hs(e);return new Ti(t.seconds,t.nanos)}(e))}function Gl(e,t){return function(e){return new _i(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Wl(e){const t=_i.fromString(e);return oi(wc(t)),t}function Kl(e,t){return Gl(e.databaseId,t.path)}function Xl(e,t){const n=Wl(t);if(n.get(1)!==e.databaseId.projectId)throw new ci(li.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ci(li.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ai(ec(n))}function Ql(e,t){return Gl(e.databaseId,t)}function Jl(e){const t=Wl(e);return 4===t.length?_i.emptyPath():ec(t)}function Zl(e){return new _i(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ec(e){return oi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tc(e,t,n){return{name:Kl(e,t),fields:n.value.mapValue.fields}}function nc(e,t,n){const r=Xl(e,t.name),i=Hl(t.updateTime),s=t.createTime?Hl(t.createTime):Ii.min(),o=new So({mapValue:{fields:t.fields}}),a=Io.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function rc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:si()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(oi(void 0===t||"string"==typeof t),Ys.fromBase64String(t||"")):(oi(void 0===t||t instanceof Uint8Array),Ys.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?li.UNKNOWN:bl(e.code);return new ci(t,e.message||"")}(o);n=new Ml(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xl(e,r.document.name),s=Hl(r.document.updateTime),o=r.document.createTime?Hl(r.document.createTime):Ii.min(),a=new So({mapValue:{fields:r.document.fields}}),l=Io.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Dl(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xl(e,r.document),s=r.readTime?Hl(r.readTime):Ii.min(),o=Io.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dl([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xl(e,r.document),s=r.removedTargetIds||[];n=new Dl([],s,i,null)}else{if(!("filter"in t))return si();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new gl(r,i),o=e.targetId;n=new Pl(o,s)}}return n}function ic(e,t){let n;if(t instanceof ol)n={update:tc(e,t.key,t.value)};else if(t instanceof dl)n={delete:Kl(e,t.key)};else if(t instanceof al)n={update:tc(e,t.key,t.data),updateMask:yc(t.fieldMask)};else{if(!(t instanceof hl))return si();n={verify:Kl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof za)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ua)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ya)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),increment:n.wt};throw si()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ql(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:si()}(e,t.precondition)),n}function sc(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ja.updateTime(Hl(e.updateTime)):void 0!==e.exists?Ja.exists(e.exists):Ja.none()}(t.currentDocument):Ja.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)oi("REQUEST_TIME"===t.setToServerValue),n=new za;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ua(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ya(e)}else"increment"in t?n=new Ha(e,t.increment):si();const r=Ci.fromServerFormat(t.fieldPath);return new Ka(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Xl(e,t.update.name),s=new So({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Us(t.map((e=>Ci.fromServerFormat(e))))}(t.updateMask);return new al(i,s,e,n,r)}return new ol(i,s,n,r)}if(t.delete){const r=Xl(e,t.delete);return new dl(r,n)}if(t.verify){const r=Xl(e,t.verify);return new hl(r,n)}return si()}function oc(e,t){return e&&e.length>0?(oi(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Hl(e.updateTime):Hl(t);return n.isEqual(Ii.min())&&(n=Hl(t)),new Qa(n,e.transformResults||[])}(e,t)))):[]}function ac(e,t){return{documents:[Ql(e,t.path)]}}function lc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ql(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ql(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return vc(Po.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:mc(e.field),direction:hc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ul(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function cc(e){let t=Jl(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=dc(e);return t instanceof Po&&No(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Co(gc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ts(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new xo(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new xo(n,t)}(n.endAt)),ia(t,i,o,s,a,"F",l,c)}function uc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function dc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gc(e.unaryFilter.field);return Do.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gc(e.unaryFilter.field);return Do.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gc(e.unaryFilter.field);return Do.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gc(e.unaryFilter.field);return Do.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(e):void 0!==e.fieldFilter?function(e){return Do.create(gc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Po.create(e.compositeFilter.filters.map((e=>dc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return si()}}(e.compositeFilter.op))}(e):si()}function hc(e){return $l[e]}function pc(e){return Fl[e]}function fc(e){return Vl[e]}function mc(e){return{fieldPath:e.canonicalString()}}function gc(e){return Ci.fromServerFormat(e.fieldPath)}function vc(e){return e instanceof Do?function(e){if("=="===e.op){if(fo(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NAN"}};if(po(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(fo(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NOT_NAN"}};if(po(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mc(e.field),op:pc(e.op),value:e.value}}}(e):e instanceof Po?function(e){const t=e.getFilters().map((e=>vc(e)));return 1===t.length?t[0]:{compositeFilter:{op:fc(e.op),filters:t}}}(e):si()}function yc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class bc{constructor(e,t,n,r,i=Ii.min(),s=Ii.min(),o=Ys.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new bc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class Ec{constructor(e){this.le=e}}function Sc(e,t){let n;if(t.document)n=nc(e.le,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Ai.fromSegments(t.noDocument.path),r=_c(t.noDocument.readTime);n=Io.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return si();{const e=Ai.fromSegments(t.unknownDocument.path),r=_c(t.unknownDocument.version);n=Io.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Ti(e[0],e[1]);return Ii.fromTimestamp(t)}(t.readTime)),n}function Tc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ic(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Kl(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Bl(e,t.version.toTimestamp()),createTime:Bl(e,t.createTime.toTimestamp())}}(e.le,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:xc(t.version)};else{if(!t.isUnknownDocument())return si();r.unknownDocument={path:n.path.toArray(),version:xc(t.version)}}return r}function Ic(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function xc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function _c(e){const t=new Ti(e.seconds,e.nanoseconds);return Ii.fromTimestamp(t)}function kc(e,t){const n=(t.baseMutations||[]).map((t=>sc(e.le,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>sc(e.le,t))),i=Ti.fromMillis(t.localWriteTimeMs);return new pl(t.batchId,i,n,r)}function Cc(e){const t=_c(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?_c(e.lastLimboFreeSnapshotVersion):Ii.min();let r;var i;return void 0!==e.query.documents?(oi(1===(i=e.query).documents.length),r=da(sa(Jl(i.documents[0])))):r=function(e){return da(cc(e))}(e.query),new bc(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ys.fromBase64String(e.resumeToken))}function Ac(e,t){const n=xc(t.snapshotVersion),r=xc(t.lastLimboFreeSnapshotVersion);let i;i=Zo(t.target)?ac(e.le,t.target):lc(e.le,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Qo(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Oc(e){const t=cc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ha(t,t.limit,"L"):t}function Dc(e,t){return new ml(t.largestBatchId,sc(e.le,t.overlayMutation))}function Pc(e,t){const n=t.path.lastSegment();return[e,is(t.path.popLast()),n]}function Mc(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:xc(r.readTime),documentKey:is(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class Rc{getBundleMetadata(e,t){return Nc(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:_c(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Nc(e).put({bundleId:(n=t).id,createTime:xc(Hl(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Lc(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Oc(t.bundledQuery),readTime:_c(t.readTime)};var t}))}saveNamedQuery(e,t){return Lc(e).put(function(e){return{name:e.name,readTime:xc(Hl(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Nc(e){return Ps(e,"bundles")}function Lc(e){return Ps(e,"namedQueries")}
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
 */class jc{constructor(e,t){this.serializer=e,this.userId=t}static fe(e,t){const n=t.uid||"";return new jc(e,n)}getOverlay(e,t){return $c(e).get(Pc(this.userId,t)).next((e=>e?Dc(this.serializer,e):null))}getOverlays(e,t){const n=_a();return Ui.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new ml(t,i);r.push(this.de(e,s))})),Ui.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(is(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push($c(e).J("collectionPathOverlayIndex",r))})),Ui.waitFor(i)}getOverlaysForCollection(e,t,n){const r=_a(),i=is(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return $c(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Dc(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=_a();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return $c(e).X({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Dc(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}de(e,t){return $c(e).put(function(e,t,n){const[r,i,s]=Pc(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:ic(e.le,n.mutation)}}(this.serializer,this.userId,t))}}function $c(e){return Ps(e,"documentOverlays")}
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
 */class Fc{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(Gs(e.integerValue));else if("doubleValue"in e){const n=Gs(e.doubleValue);isNaN(n)?this.ge(t,13):(this.ge(t,15),ns(n)?t.ye(0):t.ye(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ge(t,20),"string"==typeof n?t.pe(n):(t.pe(`${n.seconds||""}`),t.ye(n.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(Ws(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ge(t,45),t.ye(n.latitude||0),t.ye(n.longitude||0)}else"mapValue"in e?vo(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):si()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){const n=e.fields||{};this.ge(t,55);for(const r of Object.keys(n))this.Ie(r,t),this.we(n[r],t)}ve(e,t){const n=e.values||[];this.ge(t,50);for(const r of n)this.we(r,t)}Ae(e,t){this.ge(t,37),Ai.fromName(e).path.forEach((e=>{this.ge(t,60),this.Pe(e,t)}))}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}function Vc(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function zc(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Vc(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Fc.be=new Fc;class Uc{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Se(n.value),n=t.next();this.De()}Ce(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xe(n.value),n=t.next();this.Ne()}ke(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Se(e);else if(e<2048)this.Se(960|e>>>6),this.Se(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Se(480|e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e);else{const e=t.codePointAt(0);this.Se(240|e>>>18),this.Se(128|63&e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e)}}this.De()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.xe(e);else if(e<2048)this.xe(960|e>>>6),this.xe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.xe(480|e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e);else{const e=t.codePointAt(0);this.xe(240|e>>>18),this.xe(128|63&e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e)}}this.Ne()}Oe(e){const t=this.$e(e),n=zc(t);this.Fe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Be(e){const t=this.$e(e),n=zc(t);this.Fe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Se(e){const t=255&e;0===t?(this.qe(0),this.qe(255)):255===t?(this.qe(255),this.qe(0)):this.qe(t)}xe(e){const t=255&e;0===t?(this.Ke(0),this.Ke(255)):255===t?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Bc{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class Yc{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class qc{constructor(){this.Qe=new Uc,this.je=new Bc(this.Qe),this.ze=new Yc(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return 0===e?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}
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
 */class Hc{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}He(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Hc(this.indexId,this.documentKey,this.arrayValue,n)}}function Gc(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Wc(e.arrayValue,t.arrayValue),0!==n?n:(n=Wc(e.directionalValue,t.directionalValue),0!==n?n:Ai.comparator(e.documentKey,t.documentKey)))}function Wc(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
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
 */class Kc{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xe=e:this.Ye.push(e)}}Ze(e){oi(e.collectionGroup===this.collectionId);const t=Di(e);if(void 0!==t&&!this.tn(t))return!1;const n=Pi(e);let r=0,i=0;for(;r<n.length&&this.tn(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Xe){const e=n[r];if(!this.en(this.Xe,e)||!this.nn(this.Je[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Je.length||!this.nn(this.Je[i++],e))return!1}return!0}tn(e){for(const t of this.Ye)if(this.en(t,e))return!0;return!1}en(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}nn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
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
 */function Xc(e){var t,n;if(oi(e instanceof Do||e instanceof Po),e instanceof Do){if(e instanceof Ho){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Do.create(e.field,"==",t))))||[];return Po.create(r,"or")}return e}const r=e.filters.map((e=>Xc(e)));return Po.create(r,e.op)}function Qc(e){if(0===e.getFilters().length)return[];const t=tu(Xc(e));return oi(eu(t)),Jc(t)||Zc(t)?[t]:t.getFilters()}function Jc(e){return e instanceof Do}function Zc(e){return e instanceof Po&&No(e)}function eu(e){return Jc(e)||Zc(e)||function(e){if(e instanceof Po&&Ro(e)){for(const t of e.getFilters())if(!Jc(t)&&!Zc(t))return!1;return!0}return!1}(e)}function tu(e){if(oi(e instanceof Do||e instanceof Po),e instanceof Do)return e;if(1===e.filters.length)return tu(e.filters[0]);const t=e.filters.map((e=>tu(e)));let n=Po.create(t,e.op);return n=iu(n),eu(n)?n:(oi(n instanceof Po),oi(Mo(n)),oi(n.filters.length>1),n.filters.reduce(((e,t)=>nu(e,t))))}function nu(e,t){let n;return oi(e instanceof Do||e instanceof Po),oi(t instanceof Do||t instanceof Po),n=e instanceof Do?t instanceof Do?function(e,t){return Po.create([e,t],"and")}(e,t):ru(e,t):t instanceof Do?ru(t,e):function(e,t){if(oi(e.filters.length>0&&t.filters.length>0),Mo(e)&&Mo(t))return Fo(e,t.getFilters());const n=Ro(e)?e:t,r=Ro(e)?t:e,i=n.filters.map((e=>nu(e,r)));return Po.create(i,"or")}(e,t),iu(n)}function ru(e,t){if(Mo(t))return Fo(t,e.getFilters());{const n=t.filters.map((t=>nu(e,t)));return Po.create(n,"or")}}function iu(e){if(oi(e instanceof Do||e instanceof Po),e instanceof Do)return e;const t=e.getFilters();if(1===t.length)return iu(t[0]);if(Lo(e))return e;const n=t.map((e=>iu(e))),r=[];return n.forEach((t=>{t instanceof Do?r.push(t):t instanceof Po&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Po.create(r,e.op)
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
 */}class su{constructor(){this.sn=new ou}addToCollectionParentIndex(e,t){return this.sn.add(t),Ui.resolve()}getCollectionParents(e,t){return Ui.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return Ui.resolve()}deleteFieldIndex(e,t){return Ui.resolve()}getDocumentsMatchingTarget(e,t){return Ui.resolve(null)}getIndexType(e,t){return Ui.resolve(0)}getFieldIndexes(e,t){return Ui.resolve([])}getNextCollectionGroupToUpdate(e){return Ui.resolve(null)}getMinOffset(e,t){return Ui.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,t){return Ui.resolve(ji.min())}updateCollectionGroup(e,t,n){return Ui.resolve()}updateIndexEntries(e,t){return Ui.resolve()}}class ou{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Fs(_i.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Fs(_i.comparator)).toArray()}}
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
 */const au=new Uint8Array(0);class lu{constructor(e,t){this.user=e,this.databaseId=t,this.rn=new ou,this.on=new ba((e=>Qo(e)),((e,t)=>Jo(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.rn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.rn.add(t)}));const i={collectionId:n,parent:is(r)};return cu(e).put(i)}return Ui.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Si(t),""],!1,!0);return cu(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(as(r.parent))}return n}))}addFieldIndex(e,t){const n=du(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=hu(e);return i.next((e=>{n.put(Mc(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=du(e),r=hu(e),i=uu(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=uu(e);let r=!0;const i=new Map;return Ui.forEach(this.un(t),(t=>this.cn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Da();const r=[];return Ui.forEach(i,((i,s)=>{var o;ti("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Qo(t)}`);const a=function(e,t){const n=Di(t);if(void 0===n)return null;for(const r of ea(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),l=function(e,t){const n=new Map;for(const r of Pi(t))for(const t of ea(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),c=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?ta(e,i.fieldPath,e.startAt):na(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new xo(n,r)}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?na(e,i.fieldPath,e.endAt):ta(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new xo(n,r)}(s,i),d=this.an(i,s,c),h=this.an(i,s,u),p=this.hn(i,s,l),f=this.ln(i.indexId,a,d,c.inclusive,h,u.inclusive,p);return Ui.forEach(f,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Ai.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ui.resolve(null)}))}un(e){let t=this.on.get(e);return t||(t=0===e.filters.length?[e]:Qc(Po.create(e.filters,"and")).map((t=>Xo(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.on.set(e,t),t)}ln(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),l=a/(null!=t?t.length:1),c=[];for(let u=0;u<a;++u){const a=t?this.fn(t[u/l]):au,d=this.dn(e,a,n[u%l],r),h=this._n(e,a,i[u%l],s),p=o.map((t=>this.dn(e,a,t,!0)));c.push(...this.createRange(d,h,p))}return c}dn(e,t,n,r){const i=new Hc(e,Ai.empty(),t,n);return r?i:i.He()}_n(e,t,n,r){const i=new Hc(e,Ai.empty(),t,n);return r?i.He():i}cn(e,t){const n=new Kc(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ze(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.un(t);return Ui.forEach(r,(t=>this.cn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Fs(Ci.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}wn(e,t){const n=new qc;for(const r of Pi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.We(r.kind);Fc.be._e(e,i)}return n.Ge()}fn(e){const t=new qc;return Fc.be._e(e,t.We(0)),t.Ge()}mn(e,t){const n=new qc;return Fc.be._e(co(this.databaseId,t),n.We(function(e){const t=Pi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Ge()}hn(e,t,n){if(null===n)return[];let r=[];r.push(new qc);let i=0;for(const s of Pi(e)){const e=n[i++];for(const n of r)if(this.gn(t,s.fieldPath)&&ho(e))r=this.yn(r,s,e);else{const t=n.We(s.kind);Fc.be._e(e,t)}}return this.pn(r)}an(e,t,n){return this.hn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ge();return t}yn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new qc;n.seed(e.Ge()),Fc.be._e(s,n.We(t.kind)),i.push(n)}return i}gn(e,t){return!!e.filters.find((e=>e instanceof Do&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=du(e),r=hu(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Ui.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Ri(t.sequenceNumber,new ji(_c(t.readTime),new Ai(as(t.documentKey)),t.largestBatchId)):Ri.empty(),r=e.fields.map((([e,t])=>new Mi(Ci.fromServerFormat(e),t)));return new Oi(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:bi(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=du(e),i=hu(e);return this.In(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ui.forEach(t,(t=>i.put(Mc(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ui.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ui.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ui.forEach(i,(n=>this.Tn(e,t,n).next((t=>{const i=this.En(r,n);return t.isEqual(i)?Ui.resolve():this.An(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return uu(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,r){return uu(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}Tn(e,t,n){const r=uu(e);let i=new Fs(Gc);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},((e,r)=>{i=i.add(new Hc(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}En(e,t){let n=new Fs(Gc);const r=this.wn(t,e);if(null==r)return n;const i=Di(t);if(null!=i){const s=e.data.field(i.fieldPath);if(ho(s))for(const i of s.arrayValue.values||[])n=n.add(new Hc(t.indexId,e.key,this.fn(i),r))}else n=n.add(new Hc(t.indexId,e.key,au,r));return n}An(e,t,n,r,i){ti("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=zs(s),l=zs(o);for(;a||l;){let e=!1,t=!1;if(a&&l){const r=n(a,l);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(l),l=zs(o)):t?(i(a),a=zs(s)):(a=zs(s),l=zs(o))}}(r,i,Gc,(r=>{s.push(this.Rn(e,t,n,r))}),(r=>{s.push(this.vn(e,t,n,r))})),Ui.waitFor(s)}In(e){let t=1;return hu(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Gc(e,t))).filter(((e,t,n)=>!t||0!==Gc(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Gc(s,e),i=Gc(s,t);if(0===n)r[0]=e.He();else if(n>0&&i<0)r.push(s),r.push(s.He());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Pn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,au,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,au,[]];i.push(IDBKeyRange.bound(e,t))}return i}Pn(e,t){return Gc(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pu)}getMinOffset(e,t){return Ui.mapArray(this.un(t),(t=>this.cn(e,t).next((e=>e||si())))).next(pu)}}function cu(e){return Ps(e,"collectionParents")}function uu(e){return Ps(e,"indexEntries")}function du(e){return Ps(e,"indexConfiguration")}function hu(e){return Ps(e,"indexState")}function pu(e){oi(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;$i(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ji(t.readTime,t.documentKey,n)}
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
 */const fu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class mu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new mu(e,mu.DEFAULT_COLLECTION_PERCENTILE,mu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function gu(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},((e,t,n)=>(a++,n.delete())));s.push(l.next((()=>{oi(1===a)})));const c=[];for(const u of n.mutations){const e=us(t,u.key.path,n.batchId);s.push(i.delete(e)),c.push(u.key)}return Ui.waitFor(s).next((()=>c))}function vu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw si();t=e.noDocument}return JSON.stringify(t).length}
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
 */mu.DEFAULT_COLLECTION_PERCENTILE=10,mu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mu.DEFAULT=new mu(41943040,mu.DEFAULT_COLLECTION_PERCENTILE,mu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mu.DISABLED=new mu(-1,0,0);class yu{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.bn={}}static fe(e,t,n,r){oi(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new yu(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return bu(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Eu(e),s=bu(e);return s.add({}).next((o=>{oi("number"==typeof o);const a=new pl(o,t,n,r),l=function(e,t,n){const r=n.baseMutations.map((t=>ic(e.le,t))),i=n.mutations.map((t=>ic(e.le,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),c=[];let u=new Fs(((e,t)=>bi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=us(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),c.push(s.put(l)),c.push(i.put(t,ds))}return u.forEach((t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.bn[o]=a.keys()})),Ui.waitFor(c).next((()=>a))}))}lookupMutationBatch(e,t){return bu(e).get(t).next((e=>e?(oi(e.userId===this.userId),kc(this.serializer,e)):null))}Vn(e,t){return this.bn[t]?Ui.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.bn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return bu(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(oi(t.batchId>=n),i=kc(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return bu(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return bu(e).j("userMutationsIndex",t).next((e=>e.map((e=>kc(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=cs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Eu(e).X({range:r},((n,r,s)=>{const[o,a,l]=n,c=as(a);if(o===this.userId&&t.path.isEqual(c))return bu(e).get(l).next((e=>{if(!e)throw si();oi(e.userId===this.userId),i.push(kc(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Fs(bi);const r=[];return t.forEach((t=>{const i=cs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Eu(e).X({range:s},((e,r,i)=>{const[s,o,a]=e,l=as(o);s===this.userId&&t.path.isEqual(l)?n=n.add(a):i.done()}));r.push(o)})),Ui.waitFor(r).next((()=>this.Sn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=cs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Fs(bi);return Eu(e).X({range:s},((e,t,i)=>{const[s,a,l]=e,c=as(a);s===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(l)):i.done()})).next((()=>this.Sn(e,o)))}Sn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(bu(e).get(t).next((e=>{if(null===e)throw si();oi(e.userId===this.userId),n.push(kc(this.serializer,e))})))})),Ui.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return gu(e.at,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Dn(t.batchId)})),Ui.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ui.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Eu(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=as(e[1]);r.push(t)}else n.done()})).next((()=>{oi(0===r.length)}))}))}containsKey(e,t){return wu(e,this.userId,t)}Cn(e){return Su(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function wu(e,t,n){const r=cs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Eu(e).X({range:s,Y:!0},((e,n,r)=>{const[s,a,l]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function bu(e){return Ps(e,"mutations")}function Eu(e){return Ps(e,"documentMutations")}function Su(e){return Ps(e,"mutationQueues")}
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
 */class Tu{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Tu(0)}static kn(){return new Tu(-1)}}
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
 */class Iu{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Mn(e).next((t=>{const n=new Tu(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Mn(e).next((e=>Ii.fromTimestamp(new Ti(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Mn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Mn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.$n(e,t).next((()=>this.Mn(e).next((n=>(n.targetCount+=1,this.Fn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.$n(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>xu(e).delete(t.targetId))).next((()=>this.Mn(e))).next((t=>(oi(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return xu(e).X(((s,o)=>{const a=Cc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ui.waitFor(i))).next((()=>r))}forEachTarget(e,t){return xu(e).X(((e,n)=>{const r=Cc(n);t(r)}))}Mn(e){return _u(e).get("targetGlobalKey").next((e=>(oi(null!==e),e)))}On(e,t){return _u(e).put("targetGlobalKey",t)}$n(e,t){return xu(e).put(Ac(this.serializer,t))}Fn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Mn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Qo(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return xu(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Cc(n);Jo(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=ku(e);return t.forEach((t=>{const s=is(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ui.waitFor(r)}removeMatchingKeys(e,t,n){const r=ku(e);return Ui.forEach(t,(t=>{const i=is(t.path);return Ui.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=ku(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ku(e);let i=Da();return r.X({range:n,Y:!0},((e,t,n)=>{const r=as(e[1]),s=new Ai(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=is(t.path),r=IDBKeyRange.bound([n],[Si(n)],!1,!0);let i=0;return ku(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}he(e,t){return xu(e).get(t).next((e=>e?Cc(e):null))}}function xu(e){return Ps(e,"targets")}function _u(e){return Ps(e,"targetGlobal")}function ku(e){return Ps(e,"targetDocuments")}
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
 */function Cu([e,t],[n,r]){const i=bi(e,n);return 0===i?bi(t,r):i}class Au{constructor(e){this.Bn=e,this.buffer=new Fs(Cu),this.Ln=0}qn(){return++this.Ln}Un(e){const t=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Cu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ou{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Kn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return null!==this.Kn}Gn(e){ti("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Gi(e)?ti("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await zi(e)}await this.Gn(3e5)}))}}class Du{constructor(e,t){this.Qn=e,this.params=t}calculateTargetCount(e,t){return this.Qn.jn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ui.resolve(es.ct);const n=new Au(t);return this.Qn.forEachTarget(e,(e=>n.Un(e.sequenceNumber))).next((()=>this.Qn.zn(e,(e=>n.Un(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Qn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Qn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector","Garbage collection skipped; disabled"),Ui.resolve(fu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fu):this.Wn(e,t)))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,t){let n,r,i,s,a,l,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ti("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),ei()<=o["in"].DEBUG&&ti("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(l-a)+"ms\n"+`\tRemoved ${e} documents in `+(c-l)+"ms\n"+`Total Duration: ${c-u}ms`),Ui.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Pu(e,t){return new Du(e,t)}
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
 */class Mu{constructor(e,t){this.db=e,this.garbageCollector=Pu(this,t)}jn(e){const t=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Hn(e){let t=0;return this.zn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}zn(e,t){return this.Jn(e,((e,n)=>t(n)))}addReference(e,t,n){return Ru(e,n)}removeReference(e,t,n){return Ru(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ru(e,t)}Yn(e,t){return function(e,t){let n=!1;return Su(e).Z((r=>wu(e,r,t).next((e=>(e&&(n=!0),Ui.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Jn(e,((s,o)=>{if(o<=t){const t=this.Yn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Ii.min()),ku(e).delete([0,is(s.path)]))))}));r.push(t)}})).next((()=>Ui.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ru(e,t)}Jn(e,t){const n=ku(e);let r,i=es.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==es.ct&&t(new Ai(as(r)),i),i=o,r=s):i=es.ct})).next((()=>{i!==es.ct&&t(new Ai(as(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ru(e,t){return ku(e).put(function(e,t){return{targetId:0,path:is(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
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
 */class Nu{constructor(){this.changes=new ba((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Io.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ui.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Lu{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Vu(e).put(n)}removeEntry(e,t,n){return Vu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Ic(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Xn(e,n))))}getEntry(e,t){let n=Io.newInvalidDocument(t);return Vu(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(zu(t))},((e,r)=>{n=this.Zn(t,r)})).next((()=>n))}ts(e,t){let n={size:0,document:Io.newInvalidDocument(t)};return Vu(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(zu(t))},((e,r)=>{n={document:this.Zn(t,r),size:vu(r)}})).next((()=>n))}getEntries(e,t){let n=Sa();return this.es(e,t,((e,t)=>{const r=this.Zn(e,t);n=n.insert(e,r)})).next((()=>n))}ns(e,t){let n=Sa(),r=new Ls(Ai.comparator);return this.es(e,t,((e,t)=>{const i=this.Zn(e,t);n=n.insert(e,i),r=r.insert(e,vu(t))})).next((()=>({documents:n,ss:r})))}es(e,t,n){if(t.isEmpty())return Ui.resolve();let r=new Fs(Bu);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(zu(r.first()),zu(r.last())),s=r.getIterator();let o=s.getNext();return Vu(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Ai.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Bu(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(zu(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),Ic(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vu(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=Sa();for(const i of e){const e=this.Zn(Ai.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(ga(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Sa();const s=Uu(t,n),o=Uu(t,ji.max());return Vu(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Zn(Ai.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new $u(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Fu(e).get("remoteDocumentGlobalKey").next((e=>(oi(!!e),e)))}Xn(e,t){return Fu(e).put("remoteDocumentGlobalKey",t)}Zn(e,t){if(t){const e=Sc(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ii.min()))return e}return Io.newInvalidDocument(e)}}function ju(e){return new Lu(e)}class $u extends Nu{constructor(e,t){super(),this.rs=e,this.trackRemovals=t,this.os=new ba((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Fs(((e,t)=>bi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.os.get(i);if(t.push(this.rs.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Tc(this.rs.serializer,s);r=r.add(i.path.popLast());const l=vu(a);n+=l-o.size,t.push(this.rs.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Tc(this.rs.serializer,s.convertToNoDocument(Ii.min()));t.push(this.rs.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.rs.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.rs.updateMetadata(e,n)),Ui.waitFor(t)}getFromCache(e,t){return this.rs.ts(e,t).next((e=>(this.os.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.rs.ns(e,t).next((({documents:e,ss:t})=>(t.forEach(((t,n)=>{this.os.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Fu(e){return Ps(e,"remoteDocumentGlobal")}function Vu(e){return Ps(e,"remoteDocumentsV14")}function zu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Uu(e,t){const n=t.documentKey.path.toArray();return[e,Ic(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Bu(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=bi(n[s],r[s]),i)return i;return i=bi(n.length,r.length),i||(i=bi(n[n.length-2],r[r.length-2]),i||bi(n[n.length-1],r[r.length-1]))
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
 */}class Yu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class qu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&rl(n.mutation,e,Us.empty(),Ti.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Da()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Da()){const r=_a();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ia();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=_a();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Da())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Sa();const s=Ca(),o=Ca();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof al)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),rl(o.mutation,t,o.mutation.getFieldMask(),Ti.now())):s.set(t.key,Us.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Yu(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ca();let r=new Ls(((e,t)=>e-t)),i=Da();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Us.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Da()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=ka();l.forEach((e=>{if(!i.has(e)){const r=tl(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ui.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ai.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ca(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ui.resolve(_a());let o=-1,a=i;return s.next((t=>Ui.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ui.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Da()))).next((e=>({batchId:o,changes:xa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ai(t)).next((e=>{let t=Ia();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ia();return this.indexManager.getCollectionParents(e,r).next((s=>Ui.forEach(s,(s=>{const o=function(e,t){return new ra(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Io.newInvalidDocument(r)))}));let n=Ia();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&rl(s.mutation,i,Us.empty(),Ti.now()),ga(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class Hu{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return Ui.resolve(this.us.get(t))}saveBundleMetadata(e,t){var n;return this.us.set(t.id,{id:(n=t).id,version:n.version,createTime:Hl(n.createTime)}),Ui.resolve()}getNamedQuery(e,t){return Ui.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,function(e){return{name:e.name,query:Oc(e.bundledQuery),readTime:Hl(e.readTime)}}(t)),Ui.resolve()}}
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
 */class Gu{constructor(){this.overlays=new Ls(Ai.comparator),this.hs=new Map}getOverlay(e,t){return Ui.resolve(this.overlays.get(t))}getOverlays(e,t){const n=_a();return Ui.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.de(e,t,r)})),Ui.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hs.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hs.delete(n)),Ui.resolve()}getOverlaysForCollection(e,t,n){const r=_a(),i=t.length+1,s=new Ai(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ui.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ls(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=_a(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=_a(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ui.resolve(o)}de(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ml(t,n));let i=this.hs.get(t);void 0===i&&(i=Da(),this.hs.set(t,i)),this.hs.set(t,i.add(n.key))}}
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
 */class Wu{constructor(){this.ls=new Fs(Ku.fs),this.ds=new Fs(Ku._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){const n=new Ku(e,t);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.gs(new Ku(e,t))}ys(e,t){e.forEach((e=>this.removeReference(e,t)))}ps(e){const t=new Ai(new _i([])),n=new Ku(t,e),r=new Ku(t,e+1),i=[];return this.ds.forEachInRange([n,r],(e=>{this.gs(e),i.push(e.key)})),i}Is(){this.ls.forEach((e=>this.gs(e)))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const t=new Ai(new _i([])),n=new Ku(t,e),r=new Ku(t,e+1);let i=Da();return this.ds.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ku(e,0),n=this.ls.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ku{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return Ai.comparator(e.key,t.key)||bi(e.Es,t.Es)}static _s(e,t){return bi(e.Es,t.Es)||Ai.comparator(e.key,t.key)}}
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
 */class Xu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new Fs(Ku.fs)}checkEmpty(e){return Ui.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pl(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new Ku(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ui.resolve(s)}lookupMutationBatch(e,t){return Ui.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ps(n),i=r<0?0:r;return Ui.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ui.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(e){return Ui.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ku(t,0),r=new Ku(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.vs(e.Es);i.push(t)})),Ui.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Fs(bi);return t.forEach((e=>{const t=new Ku(e,0),r=new Ku(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.Es)}))})),Ui.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ai.isDocumentKey(i)||(i=i.child(""));const s=new Ku(new Ai(i),0);let o=new Fs(bi);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Es)),!0)}),s),Ui.resolve(this.bs(o))}bs(e){const t=[];return e.forEach((e=>{const n=this.vs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){oi(0===this.Vs(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ui.forEach(t.mutations,(r=>{const i=new Ku(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Dn(e){}containsKey(e,t){const n=new Ku(t,0),r=this.Rs.firstAfterOrEqual(n);return Ui.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ui.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}vs(e){const t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Qu{constructor(e){this.Ss=e,this.docs=new Ls(Ai.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ui.resolve(n?n.document.mutableCopy():Io.newInvalidDocument(t))}getEntries(e,t){let n=Sa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Io.newInvalidDocument(e))})),Ui.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Sa();const s=t.path,o=new Ai(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||$i(Li(o),n)<=0||(r.has(o.key)||ga(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ui.resolve(i)}getAllFromCollectionGroup(e,t,n,r){si()}Ds(e,t){return Ui.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ju(this)}getSize(e){return Ui.resolve(this.size)}}class Ju extends Nu{constructor(e){super(),this.rs=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.rs.addEntry(e,r)):this.rs.removeEntry(n)})),Ui.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}
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
 */class Zu{constructor(e){this.persistence=e,this.Cs=new ba((e=>Qo(e)),Jo),this.lastRemoteSnapshotVersion=Ii.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Wu,this.targetCount=0,this.ks=Tu.Nn()}forEachTarget(e,t){return this.Cs.forEach(((e,n)=>t(n))),Ui.resolve()}getLastRemoteSnapshotVersion(e){return Ui.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ui.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),Ui.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.xs&&(this.xs=t),Ui.resolve()}$n(e){this.Cs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ks=new Tu(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,Ui.resolve()}updateTargetData(e,t){return this.$n(t),Ui.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,Ui.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ui.waitFor(i).next((()=>r))}getTargetCount(e){return Ui.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cs.get(t)||null;return Ui.resolve(n)}addMatchingKeys(e,t,n){return this.Ns.ws(t,n),Ui.resolve()}removeMatchingKeys(e,t,n){this.Ns.ys(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ui.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),Ui.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ns.Ts(t);return Ui.resolve(n)}containsKey(e,t){return Ui.resolve(this.Ns.containsKey(t))}}
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
 */class ed{constructor(e,t){this.Ms={},this.overlays={},this.Os=new es(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new Zu(this),this.indexManager=new su,this.remoteDocumentCache=function(e){return new Qu(e)}((e=>this.referenceDelegate.Bs(e))),this.serializer=new Ec(t),this.Ls=new Hu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ms[e.toKey()];return n||(n=new Xu(t,this.referenceDelegate),this.Ms[e.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,n){ti("MemoryPersistence","Starting transaction:",e);const r=new td(this.Os.next());return this.referenceDelegate.qs(),n(r).next((e=>this.referenceDelegate.Us(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ks(e,t){return Ui.or(Object.values(this.Ms).map((n=>()=>n.containsKey(e,t))))}}class td extends Vi{constructor(e){super(),this.currentSequenceNumber=e}}class nd{constructor(e){this.persistence=e,this.Gs=new Wu,this.Qs=null}static js(e){return new nd(e)}get zs(){if(this.Qs)return this.Qs;throw si()}addReference(e,t,n){return this.Gs.addReference(n,t),this.zs.delete(n.toString()),Ui.resolve()}removeReference(e,t,n){return this.Gs.removeReference(n,t),this.zs.add(n.toString()),Ui.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),Ui.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach((e=>this.zs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.zs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}qs(){this.Qs=new Set}Us(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ui.forEach(this.zs,(n=>{const r=Ai.fromPath(n);return this.Ws(e,r).next((e=>{e||t.removeEntry(r,Ii.min())}))})).next((()=>(this.Qs=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ws(e,t).next((e=>{e?this.zs.delete(t.toString()):this.zs.add(t.toString())}))}Bs(e){return 0}Ws(e,t){return Ui.or([()=>Ui.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}
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
 */class rd{constructor(e){this.serializer=e}$(e,t,n,r){const i=new Bi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0}),e.createObjectStore("documentMutations")}(e),id(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ui.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),id(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ii.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ui.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Js(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(i))))),n<7&&r>=7&&(s=s.next((()=>this.Xs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Zs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ti(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Ts});t.createIndex("collectionPathOverlayIndex",Is,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",xs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:hs});t.createIndex("documentKeyIndex",ps),t.createIndex("collectionGroupIndex",fs)}(e))).next((()=>this.ei(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.ni(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:ws}).createIndex("sequenceNumberIndex",bs,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Es}).createIndex("documentKeyIndex",Ss,{unique:!1})}(e)))),s}Ys(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=vu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Js(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Ui.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>Ui.forEach(n,(n=>{oi(n.userId===t.userId);const r=kc(this.serializer,n);return gu(e,t.userId,r).next((()=>{}))}))))}))))}Xs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const s=new _i(n),o=function(e){return[0,is(e)]}(s);r.push(t.get(o).next((n=>n?Ui.resolve():(n=>t.put({targetId:0,path:is(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ui.waitFor(r)))}))}Zs(e,t){e.createObjectStore("collectionParents",{keyPath:ys});const n=t.store("collectionParents"),r=new ou,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:is(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new _i(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const s=as(t);return i(s.popLast())}))))}ti(e){const t=e.store("targets");return t.X(((e,n)=>{const r=Cc(n),i=Ac(this.serializer,r);return t.put(i)}))}ei(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Ai(_i.fromString(o.document.name).popFirst(5)):o.noDocument?Ai.fromSegments(o.noDocument.path):o.unknownDocument?Ai.fromSegments(o.unknownDocument.path):si()).path.toArray();var o;
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
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ui.waitFor(r)))}ni(e,t){const n=t.store("mutations"),r=ju(this.serializer),i=new ed(nd.js,this.serializer.le);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Da();kc(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ui.forEach(n,((e,n)=>{const s=new Qr(n),o=jc.fe(this.serializer,s),a=i.getIndexManager(s),l=yu.fe(s,this.serializer,a,i.referenceDelegate);return new qu(r,l,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ds(t,es.ct),e).next()}))}))}}function id(e){e.createObjectStore("targetDocuments",{keyPath:gs}).createIndex("documentTargetsIndex",vs,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ms,{unique:!0}),e.createObjectStore("targetGlobal")}const sd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class od{constructor(e,t,n,r,i,s,o,a,l,c,u=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.si=i,this.window=s,this.document=o,this.ii=l,this.ri=c,this.oi=u,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=e=>Promise.resolve(),!od.D())throw new ci(li.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Mu(this,r),this.fi=t+"main",this.serializer=new Ec(a),this.di=new Yi(this.fi,this.oi,new rd(this.serializer)),this.Fs=new Iu(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ju(this.serializer),this.Ls=new Rc,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===c&&ni("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ci(li.FAILED_PRECONDITION,sd);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Fs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new es(e,this.ii)})).then((()=>{this.$s=!0})).catch((e=>(this.di&&this.di.close(),Promise.reject(e))))}pi(e){return this.li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget((async()=>{this.started&&await this.wi()})))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ld(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ii(e).next((e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable((()=>this.li(!1))))}))})).next((()=>this.Ti(e))).next((t=>this.isPrimary&&!t?this.Ei(e).next((()=>!1)):!!t&&this.Ai(e).next((()=>!0)))))).catch((e=>{if(Gi(e))return ti("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ti("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.si.enqueueRetryable((()=>this.li(e))),this.isPrimary=e}))}Ii(e){return ad(e).get("owner").next((e=>Ui.resolve(this.Ri(e))))}vi(e){return ld(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ps(e,"clientMetadata");return t.j().next((e=>{const n=this.Vi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ui.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Si(t.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.wi().then((()=>this.Pi())).then((()=>this.yi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?Ui.resolve(!0):ad(e).get("owner").next((t=>{if(null!==t&&this.bi(t.leaseTimestampMs,5e3)&&!this.Di(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new ci(li.FAILED_PRECONDITION,sd);return!1}}return!(!this.networkEnabled||!this.inForeground)||ld(e).j().next((e=>void 0===this.Vi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ti("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Ds(e,es.ct);return this.Ei(t).next((()=>this.vi(t)))})),this.di.close(),this.ki()}Vi(e,t){return e.filter((e=>this.bi(e.updateTimeMs,t)&&!this.Di(e.clientId)))}Mi(){return this.runTransaction("getActiveClients","readonly",(e=>ld(e).j().next((e=>this.Vi(e,18e5).map((e=>e.clientId))))))}get started(){return this.$s}getMutationQueue(e,t){return yu.fe(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new lu(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return jc.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,t,n){ti("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.oi)?Os:14===s?As:13===s?Cs:12===s?ks:11===s?_s:void si();var s;let o;return this.di.runTransaction(e,r,i,(r=>(o=new Ds(r,this.Os?this.Os.next():es.ct),"readwrite-primary"===t?this.Ii(o).next((e=>!!e||this.Ti(o))).next((t=>{if(!t)throw ni(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable((()=>this.li(!1))),new ci(li.FAILED_PRECONDITION,Fi);return n(o)})).next((e=>this.Ai(o).next((()=>e)))):this.Oi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Oi(e){return ad(e).get("owner").next((e=>{if(null!==e&&this.bi(e.leaseTimestampMs,5e3)&&!this.Di(e.ownerId)&&!this.Ri(e)&&!(this.ri||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ci(li.FAILED_PRECONDITION,sd)}))}Ai(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ad(e).put("owner",t)}static D(){return Yi.D()}Ei(e){const t=ad(e);return t.get("owner").next((e=>this.Ri(e)?(ti("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ui.resolve()))}bi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ni(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.wi())))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Ci();const e=/(?:Version|Mobile)\/1[456]/;(0,a.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Si(e)));return ti("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ni("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){ni("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch(e){}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ad(e){return Ps(e,"owner")}function ld(e){return Ps(e,"clientMetadata")}function cd(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
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
 */}class ud{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Fi=r}static Bi(e,t){let n=Da(),r=Da();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ud(e,t.fromCache,n,r)}}
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
 */class dd{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ui(e,t).next((i=>i||this.Ki(e,t,r,n))).next((n=>n||this.Gi(e,t)))}Ui(e,t){if(oa(t))return Ui.resolve(null);let n=da(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ha(t,null,"F"),n=da(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Da(...r);return this.qi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Qi(t,r);return this.ji(t,s,i,n.readTime)?this.Ui(e,ha(t,null,"F")):this.zi(e,s,t,n)}))))})))))}Ki(e,t,n,r){return oa(t)||r.isEqual(Ii.min())?this.Gi(e,t):this.qi.getDocuments(e,n).next((i=>{const s=this.Qi(t,i);return this.ji(t,s,n,r)?this.Gi(e,t):(ei()<=o["in"].DEBUG&&ti("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ma(t)),this.zi(e,s,t,Ni(r,-1)))}))}Qi(e,t){let n=new Fs(ya(e));return t.forEach(((t,r)=>{ga(e,r)&&(n=n.add(r))})),n}ji(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,t){return ei()<=o["in"].DEBUG&&ti("QueryEngine","Using full collection scan to execute query:",ma(t)),this.qi.getDocumentsMatchingQuery(e,t,ji.min())}zi(e,t,n,r){return this.qi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class hd{constructor(e,t,n,r){this.persistence=e,this.Wi=t,this.serializer=r,this.Hi=new Ls(bi),this.Ji=new ba((e=>Qo(e)),Jo),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(n)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qu(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Hi)))}}function pd(e,t,n,r){return new hd(e,t,n,r)}async function fd(e,t){const n=ai(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Zi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Da();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({tr:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function md(e,t){const n=ai(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ui.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);oi(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Da();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function gd(e){const t=ai(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Fs.getLastRemoteSnapshotVersion(e)))}function vd(e,t){const n=ai(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Fs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Fs.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(Ys.EMPTY_BYTE_STRING,Ii.min()).withLastLimboFreeSnapshotVersion(Ii.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,s)&&o.push(n.Fs.updateTargetData(e,c))}));let a=Sa(),l=Da();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yd(e,s,t.documentUpdates).next((e=>{a=e.er,l=e.nr}))),!r.isEqual(Ii.min())){const t=n.Fs.getLastRemoteSnapshotVersion(e).next((t=>n.Fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ui.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Hi=i,e)))}function yd(e,t,n){let r=Da(),i=Da();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Sa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ii.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ti("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{er:r,nr:i}}))}function wd(e,t){const n=ai(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function bd(e,t){const n=ai(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Fs.getTargetData(e,t).next((i=>i?(r=i,Ui.resolve(r)):n.Fs.allocateTargetId(e).next((i=>(r=new bc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Hi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(e.targetId,e),n.Ji.set(t,e.targetId)),e}))}async function Ed(e,t,n){const r=ai(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Gi(e))throw e;ti("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Sd(e,t,n){const r=ai(e);let i=Ii.min(),s=Da();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=ai(e),i=r.Ji.get(n);return void 0!==i?Ui.resolve(r.Hi.get(i)):r.Fs.getTargetData(t,n)}(r,e,da(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Wi.getDocumentsMatchingQuery(e,t,n?i:Ii.min(),n?s:Da()))).next((e=>(xd(r,va(t),e),{documents:e,sr:s})))))}function Td(e,t){const n=ai(e),r=ai(n.Fs),i=n.Hi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.he(e,t).next((e=>e?e.target:null))))}function Id(e,t){const n=ai(e),r=n.Yi.get(t)||Ii.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Xi.getAllFromCollectionGroup(e,t,Ni(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(xd(n,t,e),e)))}function xd(e,t,n){let r=e.Yi.get(t)||Ii.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Yi.set(t,r)}function _d(e,t){return`firestore_clients_${e}_${t}`}function kd(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Cd(e,t){return`firestore_targets_${e}_${t}`}class Ad{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static cr(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ci(r.error.code,r.error.message))),s?new Ad(e,t,r.state,i):(ni("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Od{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static cr(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ci(n.error.code,n.error.message))),i?new Od(e,n.state,r):(ni("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Dd{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cr(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ma();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=rs(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Dd(e,i):(ni("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Pd{constructor(e,t){this.clientId=e,this.onlineState=t}static cr(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Pd(t.clientId,t.onlineState):(ni("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Md{constructor(){this.activeTargetIds=Ma()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rd{constructor(e,t,n,r,i){this.window=e,this.si=t,this.persistenceKey=n,this.dr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new Ls(bi),this.started=!1,this.gr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.yr=_d(this.persistenceKey,this.dr),this.pr=function(e){return`firestore_sequence_number_${e}`}
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
 */(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Md),this.Ir=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ar=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const n of e){if(n===this.dr)continue;const e=this.getItem(_d(this.persistenceKey,n));if(e){const t=Dd.cr(n,e);t&&(this.mr=this.mr.insert(t.clientId,t))}}this.vr();const t=this.storage.getItem(this.Ar);if(t){const e=this.Pr(t);e&&this.br(e)}for(const n of this.gr)this.wr(n);this.gr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let t=!1;return this.mr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,t,n){this.Sr(e,t,n),this.Dr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Cd(this.persistenceKey,e));if(n){const r=Od.cr(e,n);r&&(t=r.state)}}return this.Cr.hr(e),this.vr(),t}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Cd(this.persistenceKey,e))}updateQueryState(e,t,n){this.Nr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Dr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ti("SharedClientState","READ",e,t),t}setItem(e,t){ti("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ti("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const t=e;if(t.storageArea===this.storage){if(ti("SharedClientState","EVENT",t.key,t.newValue),t.key===this.yr)return void ni("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ir.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.$r(e,null)}{const e=this.Fr(t.key,t.newValue);if(e)return this.$r(e.clientId,e)}}else if(this.Tr.test(t.key)){if(null!==t.newValue){const e=this.Br(t.key,t.newValue);if(e)return this.Lr(e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.qr(t.key,t.newValue);if(e)return this.Ur(e)}}else if(t.key===this.Ar){if(null!==t.newValue){const e=this.Pr(t.newValue);if(e)return this.br(e)}}else if(t.key===this.pr){const e=function(e){let t=es.ct;if(null!=e)try{const n=JSON.parse(e);oi("number"==typeof n),t=n}catch(e){ni("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==es.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Kr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Gr(e))))}}else this.gr.push(t)}))}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,t,n){const r=new Ad(this.currentUser,e,t,n),i=kd(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ar())}Dr(e){const t=kd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}kr(e){const t={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(t))}Nr(e,t,n){const r=Cd(this.persistenceKey,e),i=new Od(e,t,n);this.setItem(r,i.ar())}Mr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Ir.exec(e);return t?t[1]:null}Fr(e,t){const n=this.Or(e);return Dd.cr(n,t)}Br(e,t){const n=this.Tr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ad.cr(new Qr(i),r,t)}qr(e,t){const n=this.Er.exec(e),r=Number(n[1]);return Od.cr(r,t)}Pr(e){return Pd.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);ti("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,t){const n=t?this.mr.insert(e,t):this.mr.remove(e),r=this.Vr(this.mr),i=this.Vr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.zr(s,o).then((()=>{this.mr=n}))}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let t=Ma();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Nd{constructor(){this.Wr=new Md,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,n){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Md,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Ld{Jr(e){}shutdown(){}}
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
 */class jd{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ti("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){ti("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let $d=null;function Fd(){return null===$d?$d=268435456+Math.round(2147483648*Math.random()):$d++,"0x"+$d.toString(16)
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
 */}const Vd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class zd{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}
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
 */const Ud="WebChannelConnection";class Bd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,n,r,i){const s=Fd(),o=this.Io(e,t);ti("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.To(a,r,i),this.Eo(e,o,a,n).then((t=>(ti("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ri("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Ao(e,t,n,r,i,s){return this.po(e,t,n,r,i)}To(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Io(e,t){const n=Vd[e];return`${this.wo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,n,r){const i=Fd();return new Promise(((s,o)=>{const a=new Gr;a.setWithCredentials(!0),a.listenOnce(Ur.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case zr.NO_ERROR:const t=a.getResponseJson();ti(Ud,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case zr.TIMEOUT:ti(Ud,`RPC '${e}' ${i} timed out`),o(new ci(li.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const n=a.getStatus();if(ti(Ud,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(li).indexOf(t)>=0?t:li.UNKNOWN}(t.status);o(new ci(e,t.message))}else o(new ci(li.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ci(li.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ti(Ud,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);ti(Ud,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}Ro(e,t,n){const r=Fd(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qr({})),this.To(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");ti(Ud,`Creating RPC '${e}' stream ${r}: ${l}`,a);const c=s.createWebChannel(l,a);let u=!1,d=!1;const h=new zd({io:t=>{d?ti(Ud,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(ti(Ud,`Opening RPC '${e}' stream ${r} transport.`),c.open(),u=!0),ti(Ud,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ro:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(c,Hr.EventType.OPEN,(()=>{d||ti(Ud,`RPC '${e}' stream ${r} transport opened.`)})),p(c,Hr.EventType.CLOSE,(()=>{d||(d=!0,ti(Ud,`RPC '${e}' stream ${r} transport closed`),h.fo())})),p(c,Hr.EventType.ERROR,(t=>{d||(d=!0,ri(Ud,`RPC '${e}' stream ${r} transport errored:`,t),h.fo(new ci(li.UNAVAILABLE,"The operation could not be completed")))})),p(c,Hr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ti(Ud,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=vl[e];if(void 0!==t)return bl(t)}(t),i=o.message;void 0===n&&(n=li.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,h.fo(new ci(n,i)),c.close()}else ti(Ud,`RPC '${e}' stream ${r} received:`,i),h._o(i)}})),p(o,Br.STAT_EVENT,(t=>{t.stat===Yr.PROXY?ti(Ud,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Yr.NOPROXY&&ti(Ud,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{h.lo()}),0),h}}
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
 */function Yd(){return"undefined"!=typeof window?window:null}function qd(){return"undefined"!=typeof document?document:null}
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
 */function Hd(e){return new zl(e,!0)}
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
 */class Gd{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const t=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,t-n);r>0&&ti("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Do=Date.now(),e()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}
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
 */class Wd{constructor(e,t,n,r,i,s,o,a){this.si=e,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Gd(e,t)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,(()=>this.jo())))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==e?this.Lo.reset():t&&t.code===li.RESOURCE_EXHAUSTED?(ni(t.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===li.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.$o===t&&this.Xo(e,n)}),(t=>{e((()=>{const e=new ci(li.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Zo(e)}))}))}Xo(e,t){const n=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo((()=>{n((()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener.oo())))})),this.stream.co((e=>{n((()=>this.Zo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Ko(){this.state=5,this.Lo.xo((async()=>{this.state=0,this.start()}))}Zo(e){return ti("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget((()=>this.$o===e?t():(ti("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Kd extends Wd{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();const t=rc(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ii.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ii.min():t.readTime?Hl(t.readTime):Ii.min()}(e);return this.listener.eu(t,n)}nu(e){const t={};t.database=Zl(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Zo(r)?{documents:ac(e,r)}:{query:lc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Yl(e,t.resumeToken);const r=Ul(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ii.min())>0){n.readTime=Bl(e,t.snapshotVersion.toTimestamp());const r=Ul(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=uc(this.serializer,e);n&&(t.labels=n),this.zo(t)}su(e){const t={};t.database=Zl(this.serializer),t.removeTarget=e,this.zo(t)}}class Xd extends Wd{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(oi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const t=oc(e.writeResults,e.commitTime),n=Hl(e.commitTime);return this.listener.uu(n,t)}return oi(!e.writeResults||0===e.writeResults.length),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Zl(this.serializer),this.zo(e)}ou(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ic(this.serializer,e)))};this.zo(t)}}
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
 */class Qd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new ci(li.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.po(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===li.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ci(li.UNKNOWN,e.toString())}))}Ao(e,t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===li.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ci(li.UNKNOWN,e.toString())}))}terminate(){this.hu=!0}}class Jd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve()))))}pu(e){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,"Online"===e&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ni(t),this.wu=!1):ti("OnlineStateTracker",t)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
 */class Zd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr((e=>{n.enqueueAndForget((async()=>{lh(this)&&(ti("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ai(e);t.Au.add(4),await th(t),t.Pu.set("Unknown"),t.Au.delete(4),await eh(t)}(this))}))})),this.Pu=new Jd(n,r)}}async function eh(e){if(lh(e))for(const t of e.Ru)await t(!0)}async function th(e){for(const t of e.Ru)await t(!1)}function nh(e,t){const n=ai(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),ah(n)?oh(n):_h(n).Uo()&&ih(n,t))}function rh(e,t){const n=ai(e),r=_h(n);n.Eu.delete(t),r.Uo()&&sh(n,t),0===n.Eu.size&&(r.Uo()?r.Qo():lh(n)&&n.Pu.set("Unknown"))}function ih(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ii.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}_h(e).nu(t)}function sh(e,t){e.bu.Lt(t),_h(e).su(t)}function oh(e){e.bu=new Nl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),_h(e).start(),e.Pu.mu()}function ah(e){return lh(e)&&!_h(e).qo()&&e.Eu.size>0}function lh(e){return 0===ai(e).Au.size}function ch(e){e.bu=void 0}async function uh(e){e.Eu.forEach(((t,n)=>{ih(e,t)}))}async function dh(e,t){ch(e),ah(e)?(e.Pu.pu(t),oh(e)):e.Pu.set("Unknown")}async function hh(e,t,n){if(e.Pu.set("Online"),t instanceof Ml&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Eu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Eu.delete(r),e.bu.removeTarget(r))}(e,t)}catch(n){ti("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ph(e,n)}else if(t instanceof Dl?e.bu.Wt(t):t instanceof Pl?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ii.min()))try{const t=await gd(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.bu.ue(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Eu.get(r);i&&e.Eu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Eu.get(t);if(!r)return;e.Eu.set(t,r.withResumeToken(Ys.EMPTY_BYTE_STRING,r.snapshotVersion)),sh(e,t);const i=new bc(r.target,t,n,r.sequenceNumber);ih(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ti("RemoteStore","Failed to raise snapshot:",t),await ph(e,t)}}async function ph(e,t,n){if(!Gi(t))throw t;e.Au.add(1),await th(e),e.Pu.set("Offline"),n||(n=()=>gd(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ti("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await eh(e)}))}function fh(e,t){return t().catch((n=>ph(e,n,t)))}async function mh(e){const t=ai(e),n=kh(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;gh(t);)try{const e=await wd(t.localStore,r);if(null===e){0===t.Tu.length&&n.Qo();break}r=e.batchId,vh(t,e)}catch(e){await ph(t,e)}yh(t)&&wh(t)}function gh(e){return lh(e)&&e.Tu.length<10}function vh(e,t){e.Tu.push(t);const n=kh(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function yh(e){return lh(e)&&!kh(e).qo()&&e.Tu.length>0}function wh(e){kh(e).start()}async function bh(e){kh(e).au()}async function Eh(e){const t=kh(e);for(const n of e.Tu)t.ou(n.mutations)}async function Sh(e,t,n){const r=e.Tu.shift(),i=fl.from(r,t,n);await fh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await mh(e)}async function Th(e,t){t&&kh(e).ru&&await async function(e,t){if(n=t.code,wl(n)&&n!==li.ABORTED){const n=e.Tu.shift();kh(e).Go(),await fh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await mh(e)}var n}(e,t),yh(e)&&wh(e)}async function Ih(e,t){const n=ai(e);n.asyncQueue.verifyOperationInProgress(),ti("RemoteStore","RemoteStore received new credentials");const r=lh(n);n.Au.add(3),await th(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await eh(n)}async function xh(e,t){const n=ai(e);t?(n.Au.delete(2),await eh(n)):t||(n.Au.add(2),await th(n),n.Pu.set("Unknown"))}function _h(e){return e.Vu||(e.Vu=function(e,t,n){const r=ai(e);return r.lu(),new Kd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{oo:uh.bind(null,e),co:dh.bind(null,e),eu:hh.bind(null,e)}),e.Ru.push((async t=>{t?(e.Vu.Go(),ah(e)?oh(e):e.Pu.set("Unknown")):(await e.Vu.stop(),ch(e))}))),e.Vu}function kh(e){return e.Su||(e.Su=function(e,t,n){const r=ai(e);return r.lu(),new Xd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{oo:bh.bind(null,e),co:Th.bind(null,e),cu:Eh.bind(null,e),uu:Sh.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Go(),await mh(e)):(await e.Su.stop(),e.Tu.length>0&&(ti("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))}))),e.Su
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
 */}class Ch{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ch(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ci(li.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ah(e,t){if(ni("AsyncQueue",`${t}: ${e}`),Gi(e))return new ci(li.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Oh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ai.comparator(t.key,n.key):(e,t)=>Ai.comparator(e.key,t.key),this.keyedMap=Ia(),this.sortedSet=new Ls(this.comparator)}static emptySet(e){return new Oh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Oh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Dh{constructor(){this.Du=new Ls(Ai.comparator)}track(e){const t=e.doc.key,n=this.Du.get(t);n?0!==e.type&&3===n.type?this.Du=this.Du.insert(t,e):3===e.type&&1!==n.type?this.Du=this.Du.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Du=this.Du.remove(t):1===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):si():this.Du=this.Du.insert(t,e)}Cu(){const e=[];return this.Du.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ph{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ph(e,t,Oh.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Mh{constructor(){this.xu=void 0,this.listeners=[]}}class Rh{constructor(){this.queries=new ba((e=>fa(e)),pa),this.onlineState="Unknown",this.Nu=new Set}}async function Nh(e,t){const n=ai(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Mh),i)try{s.xu=await n.onListen(r)}catch(e){const n=Ah(e,`Initialization of query '${ma(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&Fh(n)}async function Lh(e,t){const n=ai(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function jh(e,t){const n=ai(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Mu(i)&&(r=!0);t.xu=i}}r&&Fh(n)}function $h(e,t,n){const r=ai(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Fh(e){e.Nu.forEach((e=>{e.next()}))}class Vh{constructor(e,t,n){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ph(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Uu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Bu(e){if(e.docChanges.length>0)return!0;const t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qu(e){e=Ph.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}
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
class zh{constructor(e){this.key=e}}class Uh{constructor(e){this.key=e}}class Bh{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Da(),this.mutatedKeys=Da(),this.Zu=ya(e),this.tc=new Oh(this.Zu)}get ec(){return this.Ju}nc(e,t){const n=t?t.sc:new Dh,r=t?t.tc:this.tc;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=ga(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.ic(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Zu(u,a)>0||l&&this.Zu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(s=s.add(u),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tc:s,sc:n,ji:o,mutatedKeys:i}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Zu(e.doc,t.doc))),this.rc(n);const s=t?this.oc():[],o=0===this.Xu.size&&this.current?1:0,a=o!==this.Yu;return this.Yu=o,0!==i.length||a?{snapshot:new Ph(this.query,e.tc,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Dh,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach((e=>this.Ju=this.Ju.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ju=this.Ju.delete(e))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Da(),this.tc.forEach((e=>{this.cc(e.key)&&(this.Xu=this.Xu.add(e.key))}));const t=[];return e.forEach((e=>{this.Xu.has(e)||t.push(new Uh(e))})),this.Xu.forEach((n=>{e.has(n)||t.push(new zh(n))})),t}ac(e){this.Ju=e.sr,this.Xu=Da();const t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return Ph.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class Yh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qh{constructor(e){this.key=e,this.lc=!1}}class Hh{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new ba((e=>fa(e)),pa),this._c=new Map,this.wc=new Set,this.mc=new Ls(Ai.comparator),this.gc=new Map,this.yc=new Wu,this.Ic={},this.Tc=new Map,this.Ec=Tu.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function Gh(e,t){const n=Ep(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const e=await bd(n.localStore,da(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Wh(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&nh(n.remoteStore,e)}return i}async function Wh(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.nc(n);i.ji&&(i=await Sd(e.localStore,t.query,!1).then((({documents:e})=>t.view.nc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return op(e,t.targetId,o.uc),o.snapshot}(e,t,n,r);const s=await Sd(e.localStore,t,!0),o=new Bh(t,s.sr),a=o.nc(s.documents),l=Ol.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(a,e.isPrimaryClient,l);op(e,n,c.uc);const u=new Yh(t,n,o);return e.dc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Kh(e,t){const n=ai(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!pa(e,t)))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ed(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),rh(n.remoteStore,r.targetId),ip(n,r.targetId)})).catch(zi)):(ip(n,r.targetId),await Ed(n.localStore,r.targetId,!0))}async function Xh(e,t,n){const r=Sp(e);try{const e=await function(e,t){const n=ai(e),r=Ti.now(),i=t.reduce(((e,t)=>e.add(t.key)),Da());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Sa(),l=Da();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=il(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new al(e.key,t,To(t.value.mapValue),Ja.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ic[e.currentUser.toKey()];r||(r=new Ls(bi)),r=r.insert(t,n),e.Ic[e.currentUser.toKey()]=r}(r,e.batchId,n),await cp(r,e.changes),await mh(r.remoteStore)}catch(e){const t=Ah(e,"Failed to persist write");n.reject(t)}}async function Qh(e,t){const n=ai(e);try{const e=await vd(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.gc.get(t);r&&(oi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.lc=!0:e.modifiedDocuments.size>0?oi(r.lc):e.removedDocuments.size>0&&(oi(r.lc),r.lc=!1))})),await cp(n,e,t)}catch(e){await zi(e)}}function Jh(e,t,n){const r=ai(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.dc.forEach(((n,r)=>{const i=r.view.ku(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ai(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.ku(t)&&(r=!0)})),r&&Fh(n)}(r.eventManager,t),e.length&&r.fc.eu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zh(e,t,n){const r=ai(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let e=new Ls(Ai.comparator);e=e.insert(s,Io.newNoDocument(s,Ii.min()));const n=Da().add(s),i=new Al(Ii.min(),new Map,new Ls(bi),e,n);await Qh(r,i),r.mc=r.mc.remove(s),r.gc.delete(t),lp(r)}else await Ed(r.localStore,t,!1).then((()=>ip(r,t,n))).catch(zi)}async function ep(e,t){const n=ai(e),r=t.batch.batchId;try{const e=await md(n.localStore,t);rp(n,r,null),np(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cp(n,e)}catch(e){await zi(e)}}async function tp(e,t,n){const r=ai(e);try{const e=await function(e,t){const n=ai(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(oi(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);rp(r,t,n),np(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await cp(r,e)}catch(n){await zi(n)}}function np(e,t){(e.Tc.get(t)||[]).forEach((e=>{e.resolve()})),e.Tc.delete(t)}function rp(e,t,n){const r=ai(e);let i=r.Ic[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function ip(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach((t=>{e.yc.containsKey(t)||sp(e,t)}))}function sp(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);null!==n&&(rh(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),lp(e))}function op(e,t,n){for(const r of n)r instanceof zh?(e.yc.addReference(r.key,t),ap(e,r)):r instanceof Uh?(ti("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||sp(e,r.key)):si()}function ap(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ti("SyncEngine","New document in limbo: "+n),e.wc.add(r),lp(e))}function lp(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new Ai(_i.fromString(t)),r=e.Ec.next();e.gc.set(r,new qh(n)),e.mc=e.mc.insert(n,r),nh(e.remoteStore,new bc(da(sa(n.path)),r,"TargetPurposeLimboResolution",es.ct))}}async function cp(e,t,n){const r=ai(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=ud.Bi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fc.eu(i),await async function(e,t){const n=ai(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ui.forEach(t,(t=>Ui.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ui.forEach(t.Fi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Gi(e))throw e;ti("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Hi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(e,i)}}}(r.localStore,s))}async function up(e,t){const n=ai(e);if(!n.currentUser.isEqual(t)){ti("SyncEngine","User change. New user:",t.toKey());const e=await fd(n.localStore,t);n.currentUser=t,function(e,t){e.Tc.forEach((e=>{e.forEach((e=>{e.reject(new ci(li.CANCELLED,t))}))})),e.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await cp(n,e.tr)}}function dp(e,t){const n=ai(e),r=n.gc.get(t);if(r&&r.lc)return Da().add(r.key);{let e=Da();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.dc.get(t);e=e.unionWith(r.view.ec)}return e}}async function hp(e,t){const n=ai(e),r=await Sd(n.localStore,t.query,!0),i=t.view.ac(r);return n.isPrimaryClient&&op(n,t.targetId,i.uc),i}async function pp(e,t){const n=ai(e);return Id(n.localStore,t).then((e=>cp(n,e)))}async function fp(e,t,n,r){const i=ai(e),s=await function(e,t){const n=ai(e),r=ai(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Vn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Ui.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await mh(i.remoteStore):"acknowledged"===n||"rejected"===n?(rp(i,t,r||null),np(i,t),function(e,t){ai(ai(e).mutationQueue).Dn(t)}(i.localStore,t)):si(),await cp(i,s)):ti("SyncEngine","Cannot apply mutation batch with id: "+t)}async function mp(e,t){const n=ai(e);if(Ep(n),Sp(n),!0===t&&!0!==n.Ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await gp(n,e.toArray());n.Ac=!0,await xh(n.remoteStore,!0);for(const r of t)nh(n.remoteStore,r)}else if(!1===t&&!1!==n.Ac){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(ip(n,i),Ed(n.localStore,i,!0)))),rh(n.remoteStore,i)})),await t,await gp(n,e),function(e){const t=ai(e);t.gc.forEach(((e,n)=>{rh(t.remoteStore,n)})),t.yc.Is(),t.gc=new Map,t.mc=new Ls(Ai.comparator)}(n),n.Ac=!1,await xh(n.remoteStore,!1)}}async function gp(e,t,n){const r=ai(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await bd(r.localStore,da(t[0]));for(const e of t){const t=r.dc.get(e),n=await hp(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Td(r.localStore,o);e=await bd(r.localStore,t),await Wh(r,vp(t),o,!1,e.resumeToken)}i.push(e)}return r.fc.eu(s),i}function vp(e){return ia(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function yp(e){const t=ai(e);return ai(ai(t.localStore).persistence).Mi()}async function wp(e,t,n,r){const i=ai(e);if(i.Ac)return void ti("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Id(i.localStore,va(s[0])),r=Al.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ys.EMPTY_BYTE_STRING);await cp(i,e,r);break}case"rejected":await Ed(i.localStore,t,!0),ip(i,t,r);break;default:si()}}async function bp(e,t,n){const r=Ep(e);if(r.Ac){for(const e of t){if(r._c.has(e)){ti("SyncEngine","Adding an already active target "+e);continue}const t=await Td(r.localStore,e),n=await bd(r.localStore,t);await Wh(r,vp(t),n.targetId,!1,n.resumeToken),nh(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Ed(r.localStore,e,!1).then((()=>{rh(r.remoteStore,e),ip(r,e)})).catch(zi)}}function Ep(e){const t=ai(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Qh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zh.bind(null,t),t.fc.eu=jh.bind(null,t.eventManager),t.fc.vc=$h.bind(null,t.eventManager),t}function Sp(e){const t=ai(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ep.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tp.bind(null,t),t}class Tp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return pd(this.persistence,new dd,e.initialUser,this.serializer)}createPersistence(e){return new ed(nd.js,this.serializer)}createSharedClientState(e){return new Nd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ip extends Tp{constructor(e,t,n){super(),this.bc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await Sp(this.bc.syncEngine),await mh(this.bc.remoteStore),await this.persistence.pi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return pd(this.persistence,new dd,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ou(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new Zi(t,this.persistence);return new Ji(e.asyncQueue,n)}createPersistence(e){const t=cd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?mu.withCacheSize(this.cacheSizeBytes):mu.DEFAULT;return new od(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Yd(),qd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Nd}}class xp extends Ip{constructor(e,t){super(e,t,!1),this.bc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.bc.syncEngine;this.sharedClientState instanceof Rd&&(this.sharedClientState.syncEngine={Qr:fp.bind(null,t),jr:wp.bind(null,t),zr:bp.bind(null,t),Mi:yp.bind(null,t),Gr:pp.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi((async e=>{await mp(this.bc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Yd();if(!Rd.D(t))throw new ci(li.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=cd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Rd(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class _p{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Jh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=up.bind(null,this.syncEngine),await xh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Rh}createDatastore(e){const t=Hd(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Bd(r));var r;return function(e,t,n,r){return new Qd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Jh(this.syncEngine,e,0),s=jd.D()?new jd:new Ld,new Zd(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Hh(e,t,n,r,i,s);return o&&(a.Ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ai(e);ti("RemoteStore","RemoteStore shutting down."),t.Au.add(5),await th(t),t.vu.shutdown(),t.Pu.set("Unknown")}(this.remoteStore)}}
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
class kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):ni("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Cp{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=wi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ti("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ti("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ci(li.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ah(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ap(e,t){e.asyncQueue.verifyOperationInProgress(),ti("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await fd(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Op(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Pp(e);ti("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Ih(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ih(t.remoteStore,n))),e._onlineComponents=t}function Dp(e){return"FirebaseError"===e.name?e.code===li.FAILED_PRECONDITION||e.code===li.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Pp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ti("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ap(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Dp(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Ap(e,new Tp)}}else ti("FirestoreClient","Using default OfflineComponentProvider"),await Ap(e,new Tp);return e._offlineComponents}async function Mp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ti("FirestoreClient","Using user provided OnlineComponentProvider"),await Op(e,e._uninitializedComponentsProvider._online)):(ti("FirestoreClient","Using default OnlineComponentProvider"),await Op(e,new _p))),e._onlineComponents}function Rp(e){return Mp(e).then((e=>e.syncEngine))}async function Np(e){const t=await Mp(e),n=t.eventManager;return n.onListen=Gh.bind(null,t.syncEngine),n.onUnlisten=Kh.bind(null,t.syncEngine),n}function Lp(e,t,n={}){const r=new ui;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new kp({next:n=>{t.enqueueAndForget((()=>Lh(e,o))),n.fromCache&&"server"===r.source?i.reject(new ci(li.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Vh(n,s,{includeMetadataChanges:!0,Uu:!0});return Nh(e,o)}(await Np(e),e.asyncQueue,t,n,r))),r.promise}
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
const jp=new Map;
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
 */function $p(e,t,n){if(!n)throw new ci(li.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Fp(e,t,n,r){if(!0===t&&!0===r)throw new ci(li.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Vp(e){if(!Ai.isDocumentKey(e))throw new ci(li.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zp(e){if(Ai.isDocumentKey(e))throw new ci(li.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Up(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":si()}function Bp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ci(li.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Up(e);throw new ci(li.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Yp{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ci(li.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ci(li.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class qp{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ci(li.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ci(li.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new hi;switch(e.type){case"firstParty":return new mi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ci(li.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=jp.get(e);t&&(ti("ComponentProvider","Removing Datastore"),jp.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class Hp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Hp(this.firestore,e,this._key)}}class Gp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Gp(this.firestore,e,this._query)}}class Wp extends Gp{constructor(e,t,n){super(e,t,sa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Hp(this.firestore,null,new Ai(e))}withConverter(e){return new Wp(this.firestore,e,this._path)}}function Kp(e,t,...n){if(e=(0,a.m9)(e),$p("collection","path",t),e instanceof qp){const r=_i.fromString(t,...n);return zp(r),new Wp(e,null,r)}{if(!(e instanceof Hp||e instanceof Wp))throw new ci(li.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(_i.fromString(t,...n));return zp(r),new Wp(e.firestore,null,r)}}function Xp(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=wi.A()),$p("doc","path",t),e instanceof qp){const r=_i.fromString(t,...n);return Vp(r),new Hp(e,null,new Ai(r))}{if(!(e instanceof Hp||e instanceof Wp))throw new ci(li.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(_i.fromString(t,...n));return Vp(r),new Hp(e.firestore,e instanceof Wp?e.converter:null,new Ai(r))}}
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
class Qp{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Gd(this,"async_queue_retry"),this.Yc=()=>{const e=qd();e&&ti("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Lo.ko()};const e=qd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=qd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise((()=>{}));const t=new ui;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Gc.push(e),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Gi(e))throw e;ti("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(e){const t=this.Kc.then((()=>(this.Wc=!0,e().catch((e=>{this.zc=e,this.Wc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw ni("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Wc=!1,e))))));return this.Kc=t,t}enqueueAfterDelay(e,t,n){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const r=Ch.createAndSchedule(this,e,t,n,(e=>this.ea(e)));return this.jc.push(r),r}Xc(){this.zc&&si()}verifyOperationInProgress(){}async na(){let e;do{e=this.Kc,await e}while(e!==this.Kc)}sa(e){for(const t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then((()=>{this.jc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.jc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.na()}))}ra(e){this.Jc.push(e)}ea(e){const t=this.jc.indexOf(e);this.jc.splice(t,1)}}function Jp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}
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
const Zp=-1;class ef extends qp{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Qp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rf(this),this._firestoreClient.terminate()}}function tf(e,t,n){n||(n="(default)");const r=(0,i.qX)(e,"firestore");if(r.isInitialized(n)){const e=r.getImmediate({identifier:n}),i=r.getOptions(n);if((0,a.vZ)(i,t))return e;throw new ci(li.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new ci(li.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ci(li.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function nf(e){return e._firestoreClient||rf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function rf(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Js(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Cp(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class sf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sf(Ys.fromBase64String(e))}catch(e){throw new ci(li.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sf(Ys.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class of{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ci(li.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ci(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class af{constructor(e){this._methodName=e}}
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
 */class lf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ci(li.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ci(li.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return bi(this._lat,e._lat)||bi(this._long,e._long)}}
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
 */const cf=/^__.*__$/;class uf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new al(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}class df{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new al(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class pf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.la(e),r}fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Cf(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(0===e.length)throw this._a("Document fields must not be empty");if(hf(this.ua)&&cf.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class ff{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Hd(e)}ga(e,t,n,r=!1){return new pf({ua:e,methodName:t,ma:n,path:Ci.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(e){const t=e._freezeSettings(),n=Hd(e._databaseId);return new ff(e._databaseId,!!t.ignoreUndefinedProperties,n)}function gf(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);If("Data must be an object, but it was:",o,r);const a=Sf(r,o);let l,c;if(s.merge)l=new Us(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=xf(t,r,n);if(!o.contains(i))throw new ci(li.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Af(e,i)||e.push(i)}l=new Us(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new uf(new So(a),l,c)}class vf extends af{_toFieldTransform(e){if(2!==e.ua)throw 1===e.ua?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vf}}class yf extends af{_toFieldTransform(e){return new Ka(e.path,new za)}isEqual(e){return e instanceof yf}}function wf(e,t,n,r){const i=e.ga(1,t,n);If("Data must be an object, but it was:",i,r);const s=[],o=So.empty();Rs(r,((e,r)=>{const l=kf(t,e,n);r=(0,a.m9)(r);const c=i.fa(l);if(r instanceof vf)s.push(l);else{const e=Ef(r,c);null!=e&&(s.push(l),o.set(l,e))}}));const l=new Us(s);return new df(o,l,i.fieldTransforms)}function bf(e,t,n,r,i,s){const o=e.ga(1,t,n),l=[xf(t,r,n)],c=[i];if(s.length%2!=0)throw new ci(li.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)l.push(xf(t,s[a])),c.push(s[a+1]);const u=[],d=So.empty();for(let p=l.length-1;p>=0;--p)if(!Af(u,l[p])){const e=l[p];let t=c[p];t=(0,a.m9)(t);const n=o.fa(e);if(t instanceof vf)u.push(e);else{const r=Ef(t,n);null!=r&&(u.push(e),d.set(e,r))}}const h=new Us(u);return new df(d,h,o.fieldTransforms)}function Ef(e,t){if(Tf(e=(0,a.m9)(e)))return If("Unsupported field value:",t,e),Sf(e,t);if(e instanceof af)return function(e,t){if(!hf(t.ua))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&4!==t.ua)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ef(i,t.da(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return La(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ti.fromDate(e);return{timestampValue:Bl(t.serializer,n)}}if(e instanceof Ti){const n=new Ti(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Bl(t.serializer,n)}}if(e instanceof lf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sf)return{bytesValue:Yl(t.serializer,e._byteString)};if(e instanceof Hp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Up(e)}`)}(e,t)}function Sf(e,t){const n={};return Ns(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rs(e,((e,r)=>{const i=Ef(r,t.aa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Tf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ti||e instanceof lf||e instanceof sf||e instanceof Hp||e instanceof af)}function If(e,t,n){if(!Tf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Up(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function xf(e,t,n){if((t=(0,a.m9)(t))instanceof of)return t._internalPath;if("string"==typeof t)return kf(e,t);throw Cf("Field path arguments must be of type string or ",e,!1,void 0,n)}const _f=new RegExp("[~\\*/\\[\\]]");function kf(e,t,n){if(t.search(_f)>=0)throw Cf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new of(...t.split("."))._internalPath}catch(r){throw Cf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ci(li.INVALID_ARGUMENT,a+e+l)}function Af(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Of{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Hp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Df(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Df extends Of{data(){return super.data()}}function Pf(e,t){return"string"==typeof t?kf(e,t):t instanceof of?t._internalPath:t._delegate._internalPath}
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
 */function Mf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ci(li.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{convertValue(e,t="none"){switch(no(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Gs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw si()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Rs(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new lf(Gs(e.latitude),Gs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Xs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const t=Hs(e);return new Ti(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=_i.fromString(e);oi(wc(n));const r=new Zs(n.get(1),n.get(3)),i=new Ai(n.popFirst(5));return r.isEqual(t)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Nf(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class Lf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jf extends Of{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $f(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Pf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class $f extends jf{data(e={}){return super.data(e)}}class Ff{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Lf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new $f(this._firestore,this._userDataWriter,n.key,n,new Lf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ci(li.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new $f(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Lf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new $f(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Lf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Vf(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Vf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}class zf extends Rf{constructor(e){super(),this.firestore=e}convertBytes(e){return new sf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Hp(this.firestore,null,t)}}function Uf(e){e=Bp(e,Gp);const t=Bp(e.firestore,ef),n=nf(t),r=new zf(t);return Mf(e._query),Lp(n,e._query).then((n=>new Ff(t,r,e,n)))}function Bf(e,t,n){e=Bp(e,Hp);const r=Bp(e.firestore,ef),i=Nf(e.converter,t,n);return Gf(r,[gf(mf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ja.none())])}function Yf(e,t,n,...r){e=Bp(e,Hp);const i=Bp(e.firestore,ef),s=mf(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof of?bf(s,"updateDoc",e._key,t,n,r):wf(s,"updateDoc",e._key,t),Gf(i,[o.toMutation(e._key,Ja.exists(!0))])}function qf(e,t){const n=Bp(e.firestore,ef),r=Xp(e),i=Nf(e.converter,t);return Gf(n,[gf(mf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ja.exists(!1))]).then((()=>r))}function Hf(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Jp(t[o])||(s=t[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges};if(Jp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,d;if(e instanceof Hp)u=Bp(e.firestore,ef),d=sa(e._key.path),c={next:n=>{t[o]&&t[o](Wf(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Bp(e,Gp);u=Bp(n.firestore,ef),d=n._query;const r=new zf(u);c={next:e=>{t[o]&&t[o](new Ff(u,r,n,e))},error:t[o+1],complete:t[o+2]},Mf(e._query)}return function(e,t,n,r){const i=new kp(r),s=new Vh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Nh(await Np(e),s))),()=>{i.Sc(),e.asyncQueue.enqueueAndForget((async()=>Lh(await Np(e),s)))}}(nf(u),d,l,c)}function Gf(e,t){return function(e,t){const n=new ui;return e.asyncQueue.enqueueAndForget((async()=>Xh(await Rp(e),t,n))),n.promise}(nf(e),t)}function Wf(e,t,n){const r=n.docs.get(t._key),i=new zf(e);return new jf(e,i,t._key,r,new Lf(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */class Kf{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=Zf(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Xf(e){return new Kf(e)}class Qf{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new _p,this._offlineComponentProvider=new Ip(this._onlineComponentProvider,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}class Jf{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new _p,this._offlineComponentProvider=new xp(this._onlineComponentProvider,null==e?void 0:e.cacheSizeBytes)}}function Zf(e){return new Qf(null==e?void 0:e.forceOwnership)}function em(){return new Jf}
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
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const c=()=>{},u=Array.isArray;const d=/\/$/,h=e=>e.replace(d,"");function p(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=E(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function f(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return u(e)?b(e,t):u(t)?b(t,e):e===t}function b(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function E(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var S,T;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function I(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),h(e)}const x=/^[^#]+#/;function _(e,t){return e.replace(x,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=k(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function O(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function P(e,t){D.set(e,t)}function M(e){const t=D.get(e);return D.delete(e),t}let R=()=>location.protocol+"//"+location.host;function N(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function L(e,t,n,r){let i=[],s=[],o=null;const l=({state:s})=>{const a=N(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:S.pop,direction:u?u>0?T.forward:T.back:T.unknown})}))};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:h}}function j(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function $(e){const{history:t,location:n}=window,r={value:N(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:R()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,j(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function l(e,n){const o=a({},i.value,t.state,{forward:e,scroll:C()});s(o.current,o,!0);const l=a({},j(r.value,e,null),{position:o.position+1},n);s(e,l,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:o}}function F(e){e=I(e);const t=$(e),n=L(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:_.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),F(e)}function z(e){return"string"===typeof e||e&&"object"===typeof e}function U(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=Symbol("");var q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(q||(q={}));function H(e,t){return a(new Error,{type:e,[Y]:!0},t)}function G(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const W="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=a({},K,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:c}=r;s.push({name:e,repeatable:n,optional:l});const u=c||W;if(u!==W){o+=10;try{new RegExp(`(${u})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+d.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(h=l&&a.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),i+=h,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(u(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=u(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:l,stringify:c}}function J(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=J(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function d(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function h(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&d(),o()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:ne.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function ie(e,t,n){const r=Q(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,l=ae(e);l.aliasOf=r&&r.record;const d=de(t,e),h=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let p,f;for(const t of h){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(p=ie(t,n,d),r?r.alias.push(p):(f=f||p,f!==p&&f.alias.push(p),i&&e.name&&!ce(p)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],p,r&&r.children[t])}r=r||p,u(p)}return f?()=>{o(f)}:c}function o(e){if(U(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function d(e,t){let i,s,o,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw H(1,{location:e});0,o=i.record.name,l=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(l)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(l=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw H(1,{location:e,currentLocation:t});o=i.record.name,l=a({},t.params,e.params),s=i.stringify(l)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:l,matched:c,meta:ue(c)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:d,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function de(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const pe=/#/g,fe=/&/g,me=/\//g,ge=/=/g,ve=/\?/g,ye=/\+/g,we=/%5B/g,be=/%5D/g,Ee=/%5E/g,Se=/%60/g,Te=/%7B/g,Ie=/%7C/g,xe=/%7D/g,_e=/%20/g;function ke(e){return encodeURI(""+e).replace(Ie,"|").replace(we,"[").replace(be,"]")}function Ce(e){return ke(e).replace(Te,"{").replace(xe,"}").replace(Ee,"^")}function Ae(e){return ke(e).replace(ye,"%2B").replace(_e,"+").replace(pe,"%23").replace(fe,"%26").replace(Se,"`").replace(Te,"{").replace(xe,"}").replace(Ee,"^")}function Oe(e){return Ae(e).replace(ge,"%3D")}function De(e){return ke(e).replace(pe,"%23").replace(ve,"%3F")}function Pe(e){return null==e?"":De(e).replace(me,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Re(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=Me(n<0?e:e.slice(0,n)),o=n<0?null:Me(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Oe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const je=Symbol(""),$e=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),ze=Symbol("");function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(H(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Ye(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(qe(a)){const o=a.__vccOpts||a,l=o[t];l&&i.push(Be(l,n,r,s,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&Be(c,n,r,s,e)()}))))}}}return i}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(Fe),n=(0,r.f3)(Ve),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xe(n.params,s.value.params))),l=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function u(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(c):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:u}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:s}=(0,r.f3)(Fe),o=(0,r.Fl)((()=>({[Je(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ge;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(ze),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)($e,0),c=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.Fl)((()=>o.value.matched[c.value]));(0,r.JJ)($e,(0,r.Fl)((()=>c.value+1))),(0,r.JJ)(je,u),(0,r.JJ)(ze,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,l=u.value,c=l&&l.components[s];if(!c)return et(n.default,{Component:c,route:i});const h=l.props[s],p=h?!0===h?i.params:"function"===typeof h?h(i):h:null,f=e=>{e.component.isUnmounted&&(l.instances[s]=null)},m=(0,r.h)(c,a({},p,t,{onVnodeUnmounted:f,ref:d}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Re,o=e.stringifyQuery||Ne,d=e.history;const h=Ue(),m=Ue(),v=Ue(),y=(0,i.XI)(B);let w=B;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),E=l.bind(null,Pe),T=l.bind(null,Me);function I(e,n){let r,i;return U(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function x(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function _(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function D(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=p(n,e,r.path),s=t.resolve({path:i.path},r),o=d.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Me(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:p(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:E(e.params)}),r.params=E(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=b(T(s.params));const c=f(o,a({},e,{hash:Ce(l),path:s.path})),u=d.createHref(c);return a({fullPath:c,hash:l,query:o===Ne?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function R(e){return"string"===typeof e?p(n,e,y.value.path):a({},e)}function N(e,t){if(w!==e)return H(8,{from:t,to:e})}function L(e){return F(e)}function j(e){return L(a(R(e),{replace:!0}))}function $(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function F(e,t){const n=w=D(e),r=y.value,i=e.state,s=e.force,l=!0===e.replace,c=$(n);if(c)return F(a(R(c),{state:"object"===typeof c?a({},i,c.state):i,force:s,replace:l}),t||n);const u=n;let d;return u.redirectedFrom=t,!s&&g(o,r,n)&&(d=H(16,{to:u,from:r}),ne(r,r,!0,!1)),(d?Promise.resolve(d):z(u,r)).catch((e=>G(e)?G(e,2)?e:te(e):Z(e,u,r))).then((e=>{if(e){if(G(e,2))return F(a({replace:l},R(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||u)}else e=q(u,r,!0,l,i);return Y(u,r,e),e}))}function V(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e,t){let n;const[r,i,s]=it(e,t);n=Ye(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=V.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of h.list())n.push(Be(r,e,t));return n.push(o),rt(n)})).then((()=>{n=Ye(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ye(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push(Be(r,e,t));return n.push(o),rt(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function Y(e,t,n){for(const r of v.list())r(e,t,n)}function q(e,t,n,r,i){const o=N(e,t);if(o)return o;const l=t===B,c=s?history.state:{};n&&(r||l?d.replace(e.fullPath,a({scroll:l&&c&&c.scroll},i)):d.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let W;function K(){W||(W=d.listen(((e,t,n)=>{if(!ae.listening)return;const r=D(e),i=$(r);if(i)return void F(a(i,{replace:!0}),r).catch(c);w=r;const o=y.value;s&&P(O(o.fullPath,n.delta),C()),z(r,o).catch((e=>G(e,12)?e:G(e,2)?(F(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===S.pop&&d.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&d.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||q(r,o,!1),e&&(n.delta&&!G(e,8)?d.go(-n.delta,!1):n.type===S.pop&&G(e,20)&&d.go(-1,!1)),Y(r,o,e)})).catch(c)})))}let X,Q=Ue(),J=Ue();function Z(e,t,n){te(e);const r=J.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&y.value!==B?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return X||(X=!e,K(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!i&&M(O(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>d.go(e);let ie;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:I,removeRoute:x,hasRoute:k,getRoutes:_,resolve:D,options:e,push:L,replace:j,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:h.add,beforeResolve:m.add,afterEach:v.add,onError:J.add,isReady:ee,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ie&&y.value===B&&(ie=!0,L(d.location).catch((e=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Fe,t),e.provide(Ve,(0,i.qj)(n)),e.provide(ze,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=B,W&&W(),W=null,y.value=B,ie=!1,X=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}function st(){return(0,r.f3)(Fe)}function ot(){return(0,r.f3)(Ve)}},4677:function(e,t,n){"use strict";n.d(t,{ZP:function(){return qe},pm:function(){return Ye}});n(7658);var r=n(3396),i=n(9242),s=n(4870),o=n(7139),a=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e},p=e=>"function"===typeof e,f=e=>"string"===typeof e,m=e=>f(e)&&e.trim().length>0,g=e=>"number"===typeof e,v=e=>"undefined"===typeof e,y=e=>"object"===typeof e&&null!==e,w=e=>x(e,"tag")&&m(e.tag),b=e=>window.TouchEvent&&e instanceof TouchEvent,E=e=>x(e,"component")&&T(e.component),S=e=>p(e)||y(e),T=e=>!v(e)&&(f(e)||S(e)||E(e)),I=e=>y(e)&&["height","width","right","left","top","bottom"].every((t=>g(e[t]))),x=(e,t)=>(y(e)||p(e))&&t in e,_=(e=>()=>e++)(0);function k(e){return b(e)?e.targetTouches[0].clientX:e.clientX}function C(e){return b(e)?e.targetTouches[0].clientY:e.clientY}var A,O,D,P=e=>{v(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},M=e=>E(e)?M(e.component):w(e)?(0,r.aZ)({render(){return e}}):"string"===typeof e?e:(0,s.IU)((0,s.SU)(e)),R=e=>{if("string"===typeof e)return e;const t=x(e,"props")&&y(e.props)?e.props:{},n=x(e,"listeners")&&y(e.listeners)?e.listeners:{};return{component:M(e),props:t,listeners:n}},N=()=>"undefined"!==typeof window,L=class{constructor(){this.allHandlers={}}getHandlers(e){return this.allHandlers[e]||[]}on(e,t){const n=this.getHandlers(e);n.push(t),this.allHandlers[e]=n}off(e,t){const n=this.getHandlers(e);n.splice(n.indexOf(t)>>>0,1)}emit(e,t){const n=this.getHandlers(e);n.forEach((e=>e(t)))}},j=e=>["on","off","emit"].every((t=>x(e,t)&&p(e[t])));(function(e){e["SUCCESS"]="success",e["ERROR"]="error",e["WARNING"]="warning",e["INFO"]="info",e["DEFAULT"]="default"})(A||(A={})),function(e){e["TOP_LEFT"]="top-left",e["TOP_CENTER"]="top-center",e["TOP_RIGHT"]="top-right",e["BOTTOM_LEFT"]="bottom-left",e["BOTTOM_CENTER"]="bottom-center",e["BOTTOM_RIGHT"]="bottom-right"}(O||(O={})),function(e){e["ADD"]="add",e["DISMISS"]="dismiss",e["UPDATE"]="update",e["CLEAR"]="clear",e["UPDATE_DEFAULTS"]="update_defaults"}(D||(D={}));var $="Vue-Toastification",F={type:{type:String,default:A.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},V={type:F.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},z={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:F.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},U={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},B={transition:{type:[Object,String],default:`${$}__bounce`}},Y={position:{type:String,default:O.TOP_RIGHT},draggable:F.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:F.trueBoolean,pauseOnHover:F.trueBoolean,closeOnClick:F.trueBoolean,timeout:U.timeout,hideProgressBar:U.hideProgressBar,toastClassName:F.classNames,bodyClassName:F.classNames,icon:V.customIcon,closeButton:z.component,closeButtonClassName:z.classNames,showCloseButtonOnHover:z.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new L}},q={id:{type:[String,Number],required:!0,default:0},type:F.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},H={container:{type:[Object,Function],default:()=>document.body},newestOnTop:F.trueBoolean,maxToasts:{type:Number,default:20},transition:B.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:F.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},G={CORE_TOAST:Y,TOAST:q,CONTAINER:H,PROGRESS_BAR:U,ICON:V,TRANSITION:B,CLOSE_BUTTON:z},W=(0,r.aZ)({name:"VtProgressBar",props:G.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${$}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick((()=>this.hasClass=!0))}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function K(e,t){return(0,r.wg)(),(0,r.iD)("div",{style:(0,o.j5)(e.style),class:(0,o.C_)(e.cpClass)},null,6)}W.render=K;var X=W,Q=(0,r.aZ)({name:"VtCloseButton",props:G.CLOSE_BUTTON,computed:{buttonComponent(){return!1!==this.component?M(this.component):"button"},classes(){const e=[`${$}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}}),J=(0,r.Uk)(" × ");function Z(e,t){return(0,r.wg)(),(0,r.j4)((0,r.LL)(e.buttonComponent),(0,r.dG)({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:(0,r.w5)((()=>[J])),_:1},16,["aria-label","class"])}Q.render=Z;var ee=Q,te={},ne={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},re=(0,r._)("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),ie=[re];function se(e,t){return(0,r.wg)(),(0,r.iD)("svg",ne,ie)}te.render=se;var oe=te,ae={},le={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ce=(0,r._)("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),ue=[ce];function de(e,t){return(0,r.wg)(),(0,r.iD)("svg",le,ue)}ae.render=de;var he=ae,pe={},fe={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},me=(0,r._)("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),ge=[me];function ve(e,t){return(0,r.wg)(),(0,r.iD)("svg",fe,ge)}pe.render=ve;var ye=pe,we={},be={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Ee=(0,r._)("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Se=[Ee];function Te(e,t){return(0,r.wg)(),(0,r.iD)("svg",be,Se)}we.render=Te;var Ie=we,xe=(0,r.aZ)({name:"VtIcon",props:G.ICON,computed:{customIconChildren(){return x(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return f(this.customIcon)?this.trimValue(this.customIcon):x(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return x(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:T(this.customIcon)?M(this.customIcon):this.iconTypeComponent},iconTypeComponent(){const e={[A.DEFAULT]:he,[A.INFO]:he,[A.SUCCESS]:oe,[A.ERROR]:Ie,[A.WARNING]:ye};return e[this.type]},iconClasses(){const e=[`${$}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return m(e)?e.trim():t}}});function _e(e,t){return(0,r.wg)(),(0,r.j4)((0,r.LL)(e.component),{class:(0,o.C_)(e.iconClasses)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.customIconChildren),1)])),_:1},8,["class"])}xe.render=_e;var ke=xe,Ce=(0,r.aZ)({name:"VtToast",components:{ProgressBar:X,CloseButton:ee,Icon:ke},inheritAttrs:!1,props:Object.assign({},G.CORE_TOAST,G.TOAST),data(){const e={isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}};return e},computed:{classes(){const e=[`${$}__toast`,`${$}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${$}__toast--rtl`),e},bodyClasses(){const e=[`${$}__toast-${f(this.content)?"body":"component-body"}`].concat(this.bodyClassName);return e},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return I(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:x,getVueComponentFromObj:M,closeToast(){this.eventBus.emit(D.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(this.beingDragged&&this.dragStart!==this.dragPos.x||this.closeToast())},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:k(e),y:C(e)},this.dragStart=k(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:k(e),y:C(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick((()=>this.closeToast()))):setTimeout((()=>{this.beingDragged=!1,I(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0})))}}}),Ae=["role"];function Oe(e,t){const n=(0,r.up)("Icon"),s=(0,r.up)("CloseButton"),a=(0,r.up)("ProgressBar");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(e.classes),style:(0,o.j5)(e.draggableStyle),onClick:t[0]||(t[0]=(...t)=>e.clickHandler&&e.clickHandler(...t)),onMouseenter:t[1]||(t[1]=(...t)=>e.hoverPause&&e.hoverPause(...t)),onMouseleave:t[2]||(t[2]=(...t)=>e.hoverPlay&&e.hoverPlay(...t))},[e.icon?((0,r.wg)(),(0,r.j4)(n,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):(0,r.kq)("v-if",!0),(0,r._)("div",{role:e.accessibility.toastRole||"alert",class:(0,o.C_)(e.bodyClasses)},["string"===typeof e.content?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Uk)((0,o.zw)(e.content),1)],2112)):((0,r.wg)(),(0,r.j4)((0,r.LL)(e.getVueComponentFromObj(e.content)),(0,r.dG)({key:1,"toast-id":e.id},e.hasProp(e.content,"props")?e.content.props:{},(0,r.mx)(e.hasProp(e.content,"listeners")?e.content.listeners:{}),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Ae),e.closeButton?((0,r.wg)(),(0,r.j4)(s,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:(0,i.iM)(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):(0,r.kq)("v-if",!0),e.timeout?((0,r.wg)(),(0,r.j4)(a,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):(0,r.kq)("v-if",!0)],38)}Ce.render=Oe;var De=Ce,Pe=(0,r.aZ)({name:"VtTransition",props:G.TRANSITION,emits:["leave"],methods:{hasProp:x,leave(e){e instanceof HTMLElement&&(e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute")}}});function Me(e,t){return(0,r.wg)(),(0,r.j4)(i.W3,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Pe.render=Me;var Re=Pe,Ne=(0,r.aZ)({name:"VueToastification",devtools:{hide:!0},components:{Toast:De,VtTransition:Re},props:Object.assign({},G.CORE_TOAST,G.CONTAINER,G.TRANSITION),data(){const e={count:0,positions:Object.values(O),toasts:{},defaults:{}};return e},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(D.ADD,this.addToast),e.on(D.CLEAR,this.clearToasts),e.on(D.DISMISS,this.dismissToast),e.on(D.UPDATE,this.updateToast),e.on(D.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){p(e)&&(e=await e()),P(this.$el),e.appendChild(this.$el)},setToast(e){v(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=R(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];v(t)||v(t.onClose)||t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach((e=>{this.dismissToast(e)}))},getPositionToasts(e){const t=this.filteredToasts.filter((t=>t.position===e)).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){v(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){const t=[`${$}__container`,e];return t.concat(this.defaults.containerClassName)}}});function Le(e,t){const n=(0,r.up)("Toast"),i=(0,r.up)("VtTransition");return(0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.positions,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r.Wm)(i,{transition:e.defaults.transition,class:(0,o.C_)(e.getClasses(t))},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getPositionToasts(t),(e=>((0,r.wg)(),(0,r.j4)(n,(0,r.dG)({key:e.id},e),null,16)))),128))])),_:2},1032,["transition","class"])])))),128))])}Ne.render=Le;var je=Ne,$e=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new L;t&&(0,r.Y3)((()=>{const t=(0,i.ri)(je,h({},e)),n=t.mount(document.createElement("div")),r=e.onMounted;if(v(r)||r(n,t),e.shareAppContext){const n=e.shareAppContext;!0===n?console.warn(`[${$}] App to share context with was not provided.`):(t._context.components=n._context.components,t._context.directives=n._context.directives,t._context.mixins=n._context.mixins,t._context.provides=n._context.provides,t.config.globalProperties=n.config.globalProperties)}}));const s=(e,t)=>{const r=Object.assign({},{id:_(),type:A.DEFAULT},t,{content:e});return n.emit(D.ADD,r),r.id};function o(e,{content:t,options:r},i=!1){const s=Object.assign({},r,{content:t});n.emit(D.UPDATE,{id:e,options:s,create:i})}return s.clear=()=>n.emit(D.CLEAR,void 0),s.updateDefaults=e=>{n.emit(D.UPDATE_DEFAULTS,e)},s.dismiss=e=>{n.emit(D.DISMISS,e)},s.update=o,s.success=(e,t)=>s(e,Object.assign({},t,{type:A.SUCCESS})),s.info=(e,t)=>s(e,Object.assign({},t,{type:A.INFO})),s.error=(e,t)=>s(e,Object.assign({},t,{type:A.ERROR})),s.warning=(e,t)=>s(e,Object.assign({},t,{type:A.WARNING})),s},Fe=()=>{const e=()=>console.warn(`[${$}] This plugin does not support SSR!`);return new Proxy(e,{get(){return e}})};function Ve(e){return N()?j(e)?$e({eventBus:e},!1):$e(e,!0):Fe()}var ze=Symbol("VueToastification"),Ue=new L,Be=(e,t)=>{!0===(null==t?void 0:t.shareAppContext)&&(t.shareAppContext=e);const n=Ve(h({eventBus:Ue},t));e.provide(ze,n)},Ye=e=>{if(e)return Ve(e);const t=(0,r.FN)()?(0,r.f3)(ze,void 0):void 0;return t||Ve(Ue)},qe=Be}}]);
//# sourceMappingURL=chunk-vendors.93c9248d.js.map