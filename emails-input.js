!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var i in t)("object"==typeof exports?exports:n)[i]=t[i]}}(window,(function(){return function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=7)}([function(n,e,t){var i=t(2),r=t(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);n.exports=r.locals||{}},function(n,e,t){var i=t(2),r=t(10);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);n.exports=r.locals||{}},function(n,e,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function l(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},i=[],r=0;r<n.length;r++){var a=n[r],u=e.base?a[0]+e.base:a[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var p=l(s),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(o[p].references++,o[p].updater(m)):o.push({identifier:s,updater:_(m,e),references:1}),i.push(s)}return i}function c(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,p=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function m(n,e,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=p(e,r);else{var a=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(a,o[e]):n.appendChild(a)}}function f(n,e,t){var i=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var d=null,v=0;function _(n,e){var t,i,r;if(e.singleton){var a=v++;t=d||(d=c(e)),i=m.bind(null,t,a,!1),r=m.bind(null,t,a,!0)}else t=c(e),i=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var r=l(t[i]);o[r].references--}for(var a=u(n,e),c=0;c<t.length;c++){var s=l(t[c]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(o=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),a=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([r]).join("\n")}var o,l,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);i&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){var i=t(2),r=t(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);n.exports=r.locals||{}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMC44TDcuMiAwTDQgMy4yTDAuOCAwTDAgMC44TDMuMiA0TDAgNy4yTDAuOCA4TDQgNC44TDcuMiA4TDggNy4yTDQuOCA0TDggMC44WiIgZmlsbD0iIzA1MDAzOCIvPgo8L3N2Zz4K"},function(n,e,t){n.exports=t(11)},function(n,e,t){var i=t(3),r=t(5),a=t(6);e=i(!1);var o=r(a);e.push([n.i,".email-input__email-input {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  height: 24px;\n  margin-right: 8px;\n  margin-top: 4px;\n  min-height: 24px;\n  overflow: hidden;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.email-input__email-input .email-input__email {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.email-input__email-input .email-input__remove-email {\n  outline: none;\n  position: relative;\n}\n.email-input__email-input .email-input__remove-email .email-input__remove-icon {\n  background: url("+o+") no-repeat;\n  background-size: contain;\n  display: inline-block;\n  height: 8px;\n  margin-left: 8px;\n  width: 8px;\n}\n.email-input__email-input .email-input__remove-email .email-input__remove-icon:hover {\n  cursor: pointer;\n}\n.email-input__email-input.email-input__valid {\n  background: rgba(102, 153, 255, 0.2);\n  border-radius: 100px;\n}\n.email-input__email-input.email-input__invalid {\n  border-bottom: 1px dashed #d92929;\n}\n",""]),e.locals={"email-input":"email-input__email-input",emailInput:"email-input__email-input",email:"email-input__email","remove-email":"email-input__remove-email",removeEmail:"email-input__remove-email","remove-icon":"email-input__remove-icon",removeIcon:"email-input__remove-icon",valid:"email-input__valid",invalid:"email-input__invalid"},n.exports=e},function(n,e,t){(e=t(3)(!1)).push([n.i,".new-email-input__new-email-input {\n  border: 0;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  margin-top: 4px;\n}\n.new-email-input__new-email-input::-webkit-input-placeholder {\n  color: #c3c2cf;\n}\n.new-email-input__new-email-input::-moz-placeholder {\n  color: #c3c2cf;\n}\n.new-email-input__new-email-input:-ms-input-placeholder {\n  color: #c3c2cf;\n}\n.new-email-input__new-email-input::-ms-input-placeholder {\n  color: #c3c2cf;\n}\n.new-email-input__new-email-input::placeholder {\n  color: #c3c2cf;\n}\n.new-email-input__new-email-input:focus {\n  outline: none;\n}\n.new-email-input__new-email-input::-ms-clear {\n  display: none;\n}\n",""]),e.locals={"new-email-input":"new-email-input__new-email-input",newEmailInput:"new-email-input__new-email-input"},n.exports=e},function(n,e,t){var i=t(3),r=t(5),a=t(6);e=i(!1);var o=r(a);e.push([n.i,".emails-input__new-email-input {\n  border: 0;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  margin-top: 4px;\n}\n.emails-input__new-email-input::-webkit-input-placeholder {\n  color: #c3c2cf;\n}\n.emails-input__new-email-input::-moz-placeholder {\n  color: #c3c2cf;\n}\n.emails-input__new-email-input:-ms-input-placeholder {\n  color: #c3c2cf;\n}\n.emails-input__new-email-input::-ms-input-placeholder {\n  color: #c3c2cf;\n}\n.emails-input__new-email-input::placeholder {\n  color: #c3c2cf;\n}\n.emails-input__new-email-input:focus {\n  outline: none;\n}\n.emails-input__new-email-input::-ms-clear {\n  display: none;\n}\n.emails-input__email-input {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  height: 24px;\n  margin-right: 8px;\n  margin-top: 4px;\n  min-height: 24px;\n  overflow: hidden;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.emails-input__email-input .emails-input__email {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.emails-input__email-input .emails-input__remove-email {\n  outline: none;\n  position: relative;\n}\n.emails-input__email-input .emails-input__remove-email .emails-input__remove-icon {\n  background: url("+o+") no-repeat;\n  background-size: contain;\n  display: inline-block;\n  height: 8px;\n  margin-left: 8px;\n  width: 8px;\n}\n.emails-input__email-input .emails-input__remove-email .emails-input__remove-icon:hover {\n  cursor: pointer;\n}\n.emails-input__email-input.emails-input__valid {\n  background: rgba(102, 153, 255, 0.2);\n  border-radius: 100px;\n}\n.emails-input__email-input.emails-input__invalid {\n  border-bottom: 1px dashed #d92929;\n}\n.emails-input__emails-input {\n  background: #ffffff;\n  border: 1px solid #c3c2cf;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  height: inherit;\n  overflow: hidden;\n  padding: 4px 7px;\n}\n.emails-input__emails-input > * {\n  font-family: 'OpenSans', serif;\n}\n.emails-input__emails-input .emails-input__email-container {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  overflow-y: auto;\n}\n",""]),e.locals={"new-email-input":"emails-input__new-email-input",newEmailInput:"emails-input__new-email-input","email-input":"emails-input__email-input",emailInput:"emails-input__email-input",email:"emails-input__email","remove-email":"emails-input__remove-email",removeEmail:"emails-input__remove-email","remove-icon":"emails-input__remove-icon",removeIcon:"emails-input__remove-icon",valid:"emails-input__valid",invalid:"emails-input__invalid","emails-input":"emails-input__emails-input",emailsInput:"emails-input__emails-input","email-container":"emails-input__email-container",emailContainer:"emails-input__email-container"},n.exports=e},function(n,e,t){"use strict";function i(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}t.r(e),t.d(e,"EmailsInput",(function(){return j}));var a=function(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())},o=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=[].concat(i(t),[a]);return r.reduce((function(t,i){return t&&i(n,e)}),!0)},l=0,u=function(n){return function(e,t){return{email:e,id:(l+=1).toString(),valid:o(e,t,n)}}},c=function(n,e){return-1!==n.indexOf(e)},s=function(n){return null==n},p=function(n){return!s(n)},m=function(n,e,t){return s(t[n])?e:t[n]},f=function(n,e){var t=function(n){return n.id},i=n.map(t),r=e.map(t);return{added:e.filter((function(n){var e=n.id;return!c(i,e)})),inputs:e,removed:i.filter((function(n){return!c(r,n)}))}};function d(n){return function(n){if(Array.isArray(n))return v(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return v(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var _=function(n,e){var t=[],i=function(e){var i=d(t);t=e,n.notify(f(i,e))};return{addEmail:function(i){var r=d(t),a=u(e)(i,r);t.push(a),n.notify(f(r,t))},getAllEmails:function(){return t},removeById:function(n){i(t.filter((function(e){return e.id!==n})))},replaceAllEmails:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=n.map((function(n){return u(e)(n,d(t))}));i(r)}}},b="remove-email-input",h=t(0),g=t.n(h),y=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.showTitle,i=function(){var e=n.email,i=n.id,r=t?"<span class=".concat(g.a.email,' title="').concat(e,'">').concat(e,"</span>"):"<span class=".concat(g.a.email,">").concat(e,"</span>");return"".concat(r,"\n                <span class=").concat(g.a.removeEmail,">\n                    <i class=").concat(g.a.removeIcon,' data-id="').concat(i,'" data-type="').concat(b,'"></i>\n                </span>')},r=function(){var e=n.id,t=n.valid,r=document.createElement("span");return r.className="".concat(g.a.emailInput," ").concat(t?g.a.valid:g.a.invalid),r.innerHTML=i(),r.setAttribute("data-id",e),r};return r()},x=function(){var n=[];return{notify:function(e){n.forEach((function(n){return n(e)}))},subscribe:function(e){return n.push(e),function(e){return function(){n=n.filter((function(n){return n!==e}))}}(e)}}},w=function(n,e){var t=function(t){(function(n){return p(n)?n.split(","):[]})(t).forEach((function(t){var i,r=t.trim();p(i=r)&&""!==i&&(e.addEmail(r),n.value="")}))};return{blurListener:function(n){return t(n.target.value)},keyPressListener:function(n){var e=n.target.value;switch(n.key){case"Enter":t(e);break;case",":t(e),n.preventDefault()}},pasteListener:function(n){var e,i=(e=(n.originalEvent||n).clipboardData,p(e)?e.getData("text/plain"):window.clipboardData.getData("text"));t(i),n.preventDefault()}}},A=t(4),I=t.n(A),S=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=m("placeholder","add more people...",t),r=function(){return n.querySelector(".".concat(I.a.newEmailInput))},a=function(){return'<input \n                                class="'.concat(I.a.newEmailInput,'"\n                                placeholder="').concat(i,'"/>')},o=function(){var n=r(),t=w(n,e),i=t.blurListener,a=t.keyPressListener,o=t.pasteListener;n.addEventListener("blur",i),n.addEventListener("keypress",a),n.addEventListener("paste",o)};return{registerListeners:o,render:a}},k=function(n){return function(e){var t=e.target.dataset,i=t.id,r=t.type;b===r&&n.removeById(i)}},M=t(1),T=t.n(M);function C(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=function(n,e){if(!n)return;if("string"==typeof n)return E(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(n,e)}(n))){var e=0,t=function(){};return{s:t,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,o=!1;return{s:function(){i=n[Symbol.iterator]()},n:function(){var n=i.next();return a=n.done,n},e:function(n){o=!0,r=n},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw r}}}}function E(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var j=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=x(),i=_(t,e.validators),r={getAllEmails:function(){return i.getAllEmails()},replaceAll:function(n){return i.replaceAllEmails(n)},subscribe:function(n){return t.subscribe(n)}},a=function(){var t=S(n,i,{placeholder:e.placeholder}),r='<div class="'.concat(T.a.emailsInput,'">\n                            <div class="').concat(T.a.emailContainer,'"> \n                                ').concat(t.render(),"\n                            </div>\n                        </div>");n?(n.innerHTML=r,t.registerListeners()):console.warn('The root element for "emails-input" has not found.')},o=function(t){var i,r=t.added,a=t.removed,o=n.querySelector(".".concat(T.a.emailContainer)),l=C(r);try{for(l.s();!(i=l.n()).done;){var u=i.value,c={showTitle:e.showTitle};o.insertBefore(y(u,c),o.childNodes[o.children.length-1])}}catch(n){l.e(n)}finally{l.f()}var s,p=C(a);try{for(p.s();!(s=p.n()).done;){var m=s.value,f=o.querySelector(".".concat(g.a.emailInput,'[data-id="').concat(m,'"]'));o.removeChild(f)}}catch(n){p.e(n)}finally{p.f()}};return a(),n&&(t.subscribe(o),n.addEventListener("click",k(i))),r}}])}));