// ==UserScript==
// @name           Scripts for Luogu
// @namespace      https://www.luogu.org/
// @version        0.5.0-alpha.1
// @match          https://www.luogu.org/*
// @match          https://www.luogu.com.cn/*
// @exclude        https://www.luogu.org/blog/*
// @exclude        https://www.luogu.com.cn/blog/*
// @run-at         document-start
// @updateURL      https://github.com/sxyz-edu/user-scripts/raw/alpha/dist/luogu.user.js
// @downloadURL    https://github.com/sxyz-edu/user-scripts/raw/alpha/dist/luogu.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1),r(6),r(7),r(8),r(9)},function(e,t,r){var o=r(2);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(4)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,'body{background:var(--lg-wallpaper) fixed;background-size:cover;background-attachment:fixed}#app-header,.content>header{background-color:transparent!important}h1{color:#333!important;opacity:var(--lg-opacity)}#nprogress .nprogress-peg{display:none;box-shadow:none!important}::-moz-selection,::-webkit-selection{background-color:#cce2ff}::-moz-selection,::-webkit-selection,::selection{background-color:#cce2ff}::-webkit-scrollbar{width:12px;height:10px;background-color:transparent}::-webkit-scrollbar-track{background-color:rgba(0,0,0,.05)}::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2)}::-webkit-scrollbar-thumb:hover{background-color:#5e72e4}a{transition:all .15s;color:#5e72e4}a.solved{color:#1fc51f}a.unsolved{color:#f66}a.tried{color:#f90}.lg-fg-green{color:#2dce89!important}.lg-bg-red{background-color:#fb6340}.lg-bg-orange{background-color:#ff9d09}.lg-bg-purple{background-color:#8e44ad}.lg-bg-green{background-color:#2dce89}.lg-bg-bluedark{background-color:#001277}@-webkit-keyframes fadeLeft{0%{-webkit-transform:translateX(-25px);transform:translateX(-25px);opacity:0}}@keyframes fadeLeft{0%{-webkit-transform:translateX(-25px);transform:translateX(-25px);opacity:0}}.am-input-group{transition:box-shadow .15s ease}.am-form-field,.am-input-group{border:none;border-radius:.5rem!important}.am-form-field{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.am-form-field:focus{box-shadow:0 4px 6px rgba(50,50,93,.08),0 1px 3px rgba(0,0,0,.05)!important}.am-input-group-sm>.am-form-field,.am-input-group-sm>.am-input-group-label{font-size:1.35rem!important}.am-input-group-danger>.am-input-group-label{border-color:#f5365c!important;background-color:#ec0c38!important}.am-input-group-primary>.am-input-group-label{border-color:#5e72e4!important;background-color:#5e72e4!important;border-radius:.5rem!important}.am-input-group-danger,.am-input-group-primary{box-shadow:none}.am-input-group-danger>.am-input-group-label,.am-input-group-primary>.am-input-group-label{background:transparent;border:none;border-radius:.5rem!important;outline:none!important;letter-spacing:.05em;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);margin-bottom:6px;height:33.4px}.am-input-group-danger>.am-input-group-label:hover,.am-input-group-primary>.am-input-group-label:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.am-input-group-danger>.am-input-group-label:active,.am-input-group-primary>.am-input-group-label:active{box-shadow:none}textarea{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02);border:none!important}textarea:focus{box-shadow:0 4px 6px rgba(50,50,93,.08),0 1px 3px rgba(0,0,0,.05)!important}#topbar-search-text{border-radius:.5rem 0 0 .5em!important}#topbar-search{border-radius:0 .5rem .5em 0!important;border-color:#5e72e4;background-color:#5e72e4}.am-progress,.lg-article,.lg-article-sub,.lg-content-table-left,.lg-summary{opacity:var(--lg-opacity);background:rgba(255,255,255,var(--lg-opacity))}.lg-article,.lg-article-sub,.lg-summary{transition:all .15s ease;box-shadow:0 5px 15px rgba(50,50,93,.1),0 5px 8px rgba(0,0,0,.07)!important;word-wrap:break-word;border-radius:.25rem;background-color:#fcfcfc}.lg-article-sub:hover,.lg-article:hover,.lg-summary:hover{box-shadow:0 10px 30px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important}.am-btn{outline:none!important;border:none!important;letter-spacing:.05em;padding:8px 18px;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fff!important;margin-bottom:6px}.am-btn:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.am-btn:active{box-shadow:none}.lg-main-content.solution-block{margin-top:0!important}.am-input-group-sm>.am-input-group-btn>.am-btn{font-size:1.35rem!important}.am-btn-danger,.am-btn-danger:active,.am-btn-danger:focus,.am-btn-danger:hover,.am-btn-danger:visited{border-color:#f5365c;background-color:#ec0c38}.am-btn-primary,.am-btn-primary:active,.am-btn-primary:focus,.am-btn-primary:hover,.am-btn-primary:visited{border-color:#5e72e4;background-color:#5e72e4}.am-btn-success,.am-btn-success:active,.am-btn-success:focus,.am-btn-success:hover,.am-btn-success:visited{border-color:#2dce89;background-color:#2dce89}.am-btn-warning,.am-btn-warning:active,.am-btn-warning:focus,.am-btn-warning:hover,.am-btn-warning:visited{border-color:#fb6340;background-color:#fb6340}.tip-twitter{background:#172b4d;color:#fff;border-radius:50px;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.tip-twitter>div{font-weight:unset!important;font-size:13px!important;margin-left:5px;margin-right:5px}.am-badge{border-radius:50px!important;padding:4px 10px;transition:all .15s}.am-badge:hover{-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.am-badge.lg-bg-red{background-color:#f80031}.am-badge.lg-bg-orange{background-color:#ff471d}.am-badge.lg-bg-yellow{background-color:#ff9d09}.am-badge.lg-bg-green{background-color:#1aae6f}.am-badge.lg-bg-bluelight{background-color:#03acca}.am-badge.lg-bg-purple{background-color:#8e44ad}.am-badge.lg-bg-bluedark{background-color:#001277}.am-badge.am-badge-warning{background-color:#fb6340}.am-dropdown-content{padding:1.5rem;border-radius:.25rem;background:#fff;width:300px;border:none;margin-top:5px;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)}.am-dropdown-content:after,.am-dropdown-content:before{display:none!important}.lg-unread{line-height:60px;width:60px;height:60px;padding:0;text-align:center;border-radius:50%;transition:all .15s ease;color:#fff;background-color:#5e72e4;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);overflow:hidden}.am-comment-main{border:none;box-shadow:0 3px 5px rgba(50,50,93,.1),0 2px 3px rgba(0,0,0,.08);transition:all .15s;opacity:var(--lg-opacity)}.am-comment-main:hover{border:none;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);opacity:var(--lg-opacity)}.am-comment-main:after,.am-comment-main:before{display:none}.lg-toolbar>.lg-index-tool{box-shadow:0 5px 15px rgba(50,50,93,.1),0 5px 8px rgba(0,0,0,.07)!important;background:#f4f5f7;padding:50px 40px;color:#32325d}.lg-content-table-left{background:#fcfcfc;box-shadow:0 0 2rem 0 rgba(136,152,170,.15)!important;border-radius:.375rem;margin-top:20px;padding-left:30px;padding-right:30px;padding-bottom:20px;position:relative}.lg-content-table-left>.lg-table-row{width:100%!important;box-shadow:none;background:transparent;border-radius:0;border-bottom:.6px solid rgba(0,0,0,.08);border-spacing:2px;padding-bottom:20px}.lg-content-table-left>.lg-table-row:last-of-type{border-bottom:none;padding-bottom:0}.feed-selector>a{font-weight:500;transition:all .15s ease;color:#5e72e4;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:5px!important;height:50px;line-height:36px}.am-nav-tabs{border:none;margin-bottom:20px}.am-nav-tabs li>a{font-weight:500;transition:all .15s ease;color:#5e72e4;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:5px!important;height:50px;line-height:36px;padding-left:20px;padding-right:20px;border:none!important;margin-right:10px}.am-tabs-bd{border-radius:5px;border:.6px solid rgba(0,0,0,.1);background:transparent}.am-pagination{padding-top:20px;padding-bottom:20px}.am-pagination>li>a{cursor:pointer;line-height:1.25;position:relative;display:block;margin:0 3px 0 -.0625rem;padding:.5rem .75rem;color:#8898aa;border:.0625rem solid #dee2e6;background-color:#fff;font-size:15px;font-weight:unset;min-width:36px;height:36px;border-radius:100px!important;align-items:center;justify-content:center}.feed-selector.am-active>a{color:#fff;background:#5e72e4!important}.am-pagination>.am-active>a{color:#fff;border-color:#5e72e4;background-color:#5e72e4;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.am-nav-tabs li.am-active>a{color:#fff!important;background:#5e72e4!important}.am-pagination>.am-active>a:hover{color:#fff;border-color:#5e72e4;background-color:#5e72e4}.lg-record-tile{transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:3px}.lg-record-tile:hover{transition:all .15s ease;-webkit-transform:translateY(-5px);transform:translateY(-5px);box-shadow:0 10px 30px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.am-comment-avatar{box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);border:none;transition:all .15s}.am-comment-avatar:hover{box-shadow:0 1rem 3rem rgba(0,0,0,.175)}.am-panel-bd .am-comment-avatar,.lg-header-li .am-comment-avatar,.lg-inline-up .am-comment-avatar,.lg-message-contact .am-comment-avatar,.lg-message-content .am-comment-avatar{box-shadow:none}.am-panel{border:none;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.lg-mcard{border:none;transition:all .15s ease;box-shadow:0 2px 3px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:3px}.lg-mcard:hover{transition:all .15s ease;-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.lg-table-small{margin-top:5px}.am-progress{border-radius:.5rem;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.am-progress-bar,.am-progress-bar-secondary{background-color:#5e72e4}.am-ucheck-checkbox:checked+.am-ucheck-icons,.am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled)+.am-ucheck-icons,.am-ucheck-radio:checked+.am-ucheck-icons,.am-ucheck-radio:hover:not(.am-nohover):not(:disabled)+.am-ucheck-icons{color:#5e72e4}.am-checkbox-inline .am-icon-unchecked:before,.am-checkbox .am-icon-unchecked:before{content:"";border:1px solid rgba(0,0,0,.1);height:15px;width:15px;border-radius:3px;margin-top:3px}.lg-info-box{color:#fff;background-color:#555abf;padding:1rem 1.5rem;border:0;border-radius:.25rem;min-height:100px!important}.lg-info-box>#pic,.lg-info-box>.lg-stamp{display:none}.lg-info-box>.am-text-left>h1{margin-bottom:10px;margin-top:10px}.lg-info-box>.am-text-left>p{margin-top:0;margin-bottom:0}.lg-info-box>.am-text-left .lg-small{margin-top:15px;margin-bottom:15px;color:hsla(0,0%,100%,.6);display:block}.am-modal-dialog{box-shadow:0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.17);border:1px solid rgba(0,0,0,.2);border-radius:.5rem;outline:0;background-color:#fff;background-clip:padding-box}.am-modal-dialog>#lg-alert-title,.am-modal-dialog>#memtitle{font-family:inherit;font-weight:400;line-height:1.3;color:#32325d;text-align:left;padding-left:15px;padding-bottom:15px;border-bottom:.7px solid rgba(0,0,0,.1);margin-bottom:15px}.am-modal-dialog>#lg-alert-message,.am-modal-dialog>#memadmin{line-height:1.3;color:#32325d;text-align:left;padding-left:15px;padding-bottom:25px;padding-top:10px;border-bottom:.7px solid rgba(0,0,0,.1)}.am-modal-dialog .lg-model-content{margin-top:10px}.am-modal-btn{outline:none!important;border:none!important;letter-spacing:.05em;padding:8px 18px;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fafafa!important;height:unset;line-height:unset;border-radius:5px!important;margin-right:3px;display:inline-block!important;border-color:#5e72e4;background-color:#5e72e4}.am-modal-btn:active,.am-modal-btn:focus,.am-modal-btn:hover,.am-modal-btn:visited{border-color:#5e72e4;background-color:#5e72e4}.am-modal-btn:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.am-modal-btn:active{box-shadow:none}.am-modal-footer{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;display:block;margin-top:10px;margin-bottom:8px;padding:5px 5px 5px 15px}.lg-message-contact:hover{background:hsla(0,0%,78.4%,.2)}.lg-message-contact div:hover{background:transparent}.am-selected-list li:hover{background:hsla(0,0%,78.4%,.2)!important}#app-footer{margin-left:0!important}#app-sidenav{background-color:transparent!important;line-height:normal!important}#app-sidenav>a{color:#5e72e4!important}code,kbd,samp{font-family:Consolas,monospace!important}',""])},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(i=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(a).concat([n]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];null!=a&&(o[a]=!0)}for(n=0;n<e.length;n++){var i=e[n];null!=i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){var o,n,a={},i=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=o.apply(this,arguments)),n}),c=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),l=null,d=0,s=[],p=r(5);function m(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=a[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(h(o.parts[i],t))}else{var c=[];for(i=0;i<o.parts.length;i++)c.push(h(o.parts[i],t));a[o.id]={id:o.id,refs:1,parts:c}}}}function u(e,t){for(var r=[],o={},n=0;n<e.length;n++){var a=e[n],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(c):r.push(o[i]={id:i,parts:[c]})}return r}function g(e,t){var r=c(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),s.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=c(e.insertAt.before,r);r.insertBefore(t,n)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function f(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return r.nc}();o&&(e.attrs.nonce=o)}return x(t,e.attrs),g(e,t),t}function x(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function h(e,t){var r,o,n,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=d++;r=l||(l=f(t)),o=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",x(t,e.attrs),g(e,t),t}(t),o=function(e,t,r){var o=r.css,n=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||a)&&(o=p(o));n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,r,t),n=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=f(t),o=function(e,t){var r=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),n=function(){b(r)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=u(e,t);return m(r,t),function(e){for(var o=[],n=0;n<r.length;n++){var i=r[n];(c=a[i.id]).refs--,o.push(c)}e&&m(u(e,t),t);for(n=0;n<o.length;n++){var c;if(0===(c=o[n]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete a[c.id]}}}};var v,w=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,o=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(n=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t){document.addEventListener("DOMContentLoaded",function(){if(/^\/discuss\/show\/\d+$/.test(window.location.pathname)){var e=/page=(\d+)/i.exec(window.location.href),t=window.location.pathname,r=1;if(e&&(r=Number(e[1])),1===r){var o=!1;window.addEventListener("scroll",function(){var e,n;e=document.body.scrollTop||document.documentElement.scrollTop,n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),e+2e3>n&&e+1800<n&&!o&&function(e){o=!0,fetch("".concat(t,"?page=").concat(e)).then(function(e){return e.text()}).then(function(e){for(var t=/<article[\s\S]*?<\/article>/gi,r=t.exec(e);r=t.exec(e);){o=!1;var n=document.querySelectorAll("article");n[n.length-1].outerHTML+=r[0]}}).catch(function(e){o=!1,console.error(e)})}(++r)});var n=document.querySelector(".pagination-centered");n&&n.remove()}}})},function(e,t){var r=/<div class="lg-article am-hide-sm">([\s\S]*?)<\/div>/gi,o=/<span[\s\S]*?<\/span>/gi,n=/<a[^>]*?>([\s\S]*?)<\/a>/gi,a=function(e){return e.match(n).map(function(e){return e.replace(n,"$1")})};document.addEventListener("DOMContentLoaded",function(){if("/space/show"===window.location.pathname){var e=/uid=(\d+)/.exec(window.location.href);if(!e)return;var t=e[1],n=/_uid=(\d+)/i.exec(document.cookie);if(!n)return;var i=n[1];if(t===i)return;(function(e){return new Promise(function(t,n){var i=localStorage.getItem(e);if(i)try{var c=JSON.parse(i);if(Number(new Date)-c.updateAt<=36e5)return void t(c)}catch(e){console.error(e)}var l=function(e){return e||n(new Error("parse error")),e};fetch("/space/show?uid=".concat(e)).then(function(e){return e.text()}).then(function(n){var i=n.match(r).map(function(e){return e.replace(o,"")}),c={passedlist:a(l(i[0])),triedlist:a(l(i[2])),updateAt:Number(new Date)};localStorage.setItem(e,JSON.stringify(c)),t(c)}).catch(n)})})(i).then(function(e){var t=0,r=new Set(e.passedlist),o=new Set(e.triedlist);Array.from(document.querySelectorAll("div.lg-article > a[data-pjax]")).forEach(function(e){var n=e.innerHTML;r.has(n)?e.classList.add("solved"):(++t,o.has(n)?e.classList.add("tried"):e.classList.add("unsolved"))}),function(e){var t="body > #app-body-new > div > div.am-u-md-4.lg-right >div.lg-article.am-hide-sm >h2";document.querySelector(t).style.fontSize="18px",document.querySelector(t).textContent="通过题目（其中你有 ".concat(e," 道题尚未 AC）")}(t)})}})},function(e,t){function r(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}document.addEventListener("DOMContentLoaded",function(){var e=/\/problemnew\/show\/(\w+)/i.exec(window.location.href);if(e){var t=e[1],o=/_uid=(\d+)/i.exec(document.cookie);if(o){var n=o[1];(function(e,t){return new Promise(function(o,n){fetch("/recordnew/lists?uid=".concat(e,"&pid=").concat(t)).then(function(e){return e.text()}).then(function(e){var t=(new DOMParser).parseFromString(e,"text/html"),n=Array.from(t.querySelectorAll('strong[class^="lg-fg-"]'));n.length||(t.querySelectorAll("span.lg-bg-green").length?o(100):t.querySelectorAll("span.lg-bg-red").length?o(0):o(-1));var a=Math.max.apply(Math,[-1].concat(r(n.map(function(e){return Number(e.textContent)}).filter(function(e){return!isNaN(e)}))));o(a)}).catch(n)})})(n,t).then(function(e){var r="";r=100===e?'<strong class="lg-fg-green"><i class="am-icon-check"></i></strong>':e>80?'<strong class="lg-fg-green">'.concat(e,"</strong>"):e>50?'<strong class="lg-fg-yellow">'.concat(e,"</strong>"):e>20?'<strong class="lg-fg-orange">'.concat(e,"</strong>"):e>-1?'<strong class="lg-fg-red">'.concat(e,"</strong>"):'<strong style="color: #515151;"><i class="am-icon-minus"></i></strong>',r='<a href="/recordnew/lists?uid='.concat(n,"&pid=").concat(t,'" target="_blank">').concat(r,"</a>");!function e(){var t=document.querySelector("header h1");t?t.innerHTML=r+t.innerHTML:setTimeout(e,500)}()})}}})},function(e,t){var r=function(e){var t=e.trim();if(!t)return show_alert("提示","请输入内容");if(/^u:/i.test(t)){var r=t.slice(2);if(!(r=r.trim()))return show_alert("提示","请输入用户名或uid");/^\d+$/g.test(r)?window.location.href="/space/show?uid=".concat(r):fetch("https://www.luogu.org/space/ajax_getuid?username=".concat(r)).then(function(e){return e.json()}).then(function(e){200!==e.code?show_alert("好像哪里有点问题","找不到该用户"):window.location.href="/space/show?uid=".concat(e.more.uid)}).catch(function(e){return console.error(e),show_alert("错误","网络超时")})}else/^(?:\d+|P\d+|CF\d+[A-Z]|SP\d+|AT\d+|UVA\d+)$/i.test(t)?window.location.href="/problemnew/show/".concat(t):window.location.href="/problemnew/lists?name=".concat(t)};document.addEventListener("DOMContentLoaded",function(){"/"===window.location.pathname&&function(){var e=document.querySelector("[name=goto]"),t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.textContent="搜索",t.addEventListener("click",function(e){e.stopImmediatePropagation();var t=document.querySelector("[name=toproblem]").value;r(t)}),document.querySelector("div.lg-article.lg-index-stat > h2").innerHTML="<h2>搜索</h2>";var o=document.querySelector("[name=toproblem]"),n=o.cloneNode(!0);n.placeholder='使用 "u:" 搜索用户',o.parentNode.replaceChild(n,o),n.addEventListener("keypress",function(e){if("Enter"===e.key){var t=e.target.value;r(t)}})}(),setTimeout(function e(){var t=document.querySelector(".search-wrap input");if(t){var o=t.cloneNode(!0);t.parentNode.replaceChild(o,t),o.addEventListener("keypress",function(e){if("Enter"===e.key){var t=e.target.value;r(t)}})}else setTimeout(e,500)},500)})}]);