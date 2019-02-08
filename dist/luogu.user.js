// ==UserScript==
// @name           Scripts for Luogu
// @namespace      https://www.luogu.org/
// @version        0.5.0-beta.0
// @match          https://www.luogu.org/*
// @match          https://www.luogu.com.cn/*
// @exclude        https://www.luogu.org/blog/*
// @exclude        https://www.luogu.com.cn/blog/*
// @run-at         document-start
// @updateURL      https://github.com/sxyz-edu/user-scripts/raw/master/dist/luogu.user.js
// @downloadURL    https://github.com/sxyz-edu/user-scripts/raw/master/dist/luogu.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==
!
function(e) {
    var t = {};
    function o(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = e,
    o.c = t,
    o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    },
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) o.d(r, n,
        function(t) {
            return e[t]
        }.bind(null, n));
        return r
    },
    o.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return o.d(t, "a", t),
        t
    },
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    o.p = "",
    o(o.s = 7)
} ([function(e, t, o) {
    var r, n = 0,
    a = o(6),
    i = {
        hmr: !0
    };
    i.insertInto = void 0,
    "string" == typeof a && (a = [[e.i, a, ""]]),
    a.locals && (t.locals = a.locals),
    t.use = t.ref = function() {
        return n++||(r = o(2)(a, i)),
        t
    },
    t.unuse = t.unref = function() {
        n > 0 && !--n && (r(), r = null)
    }
},
function(e, t, o) {
    "use strict";
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var o = function(e, t) {
                    var o = e[1] || "",
                    r = e[3];
                    if (!r) return o;
                    if (t && "function" == typeof btoa) {
                        var n = (i = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                        a = r.sources.map(function(e) {
                            return "/*# sourceURL=" + r.sourceRoot + e + " */"
                        });
                        return [o].concat(a).concat([n]).join("\n")
                    }
                    var i;
                    return [o].join("\n")
                } (t, e);
                return t[2] ? "@media " + t[2] + "{" + o + "}": o
            }).join("")
        },
        t.i = function(e, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {},
            n = 0; n < this.length; n++) {
                var a = this[n][0];
                null != a && (r[a] = !0)
            }
            for (n = 0; n < e.length; n++) {
                var i = e[n];
                null != i[0] && r[i[0]] || (o && !i[2] ? i[2] = o: o && (i[2] = "(" + i[2] + ") and (" + o + ")"), t.push(i))
            }
        },
        t
    }
},
function(e, t, o) {
    var r, n, a = {},
    i = (r = function() {
        return window && document && document.all && !window.atob
    },
    function() {
        return void 0 === n && (n = r.apply(this, arguments)),
        n
    }),
    c = function(e) {
        var t = {};
        return function(e, o) {
            if ("function" == typeof e) return e();
            if (void 0 === t[e]) {
                var r = function(e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }.call(this, e, o);
                if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                    r = r.contentDocument.head
                } catch(e) {
                    r = null
                }
                t[e] = r
            }
            return t[e]
        }
    } (),
    l = null,
    s = 0,
    p = [],
    d = o(5);
    function u(e, t) {
        for (var o = 0; o < e.length; o++) {
            var r = e[o],
            n = a[r.id];
            if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) n.parts.push(x(r.parts[i], t))
            } else {
                var c = [];
                for (i = 0; i < r.parts.length; i++) c.push(x(r.parts[i], t));
                a[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: c
                }
            }
        }
    }
    function m(e, t) {
        for (var o = [], r = {},
        n = 0; n < e.length; n++) {
            var a = e[n],
            i = t.base ? a[0] + t.base: a[0],
            c = {
                css: a[1],
                media: a[2],
                sourceMap: a[3]
            };
            r[i] ? r[i].parts.push(c) : o.push(r[i] = {
                id: i,
                parts: [c]
            })
        }
        return o
    }
    function g(e, t) {
        var o = c(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = p[p.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? o.insertBefore(t, r.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild),
        p.push(t);
        else if ("bottom" === e.insertAt) o.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var n = c(e.insertAt.before, o);
            o.insertBefore(t, n)
        }
    }
    function f(e) {
        if (null === e.parentNode) return ! 1;
        e.parentNode.removeChild(e);
        var t = p.indexOf(e);
        t >= 0 && p.splice(t, 1)
    }
    function b(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function() {
                0;
                return o.nc
            } ();
            r && (e.attrs.nonce = r)
        }
        return h(t, e.attrs),
        g(e, t),
        t
    }
    function h(e, t) {
        Object.keys(t).forEach(function(o) {
            e.setAttribute(o, t[o])
        })
    }
    function x(e, t) {
        var o, r, n, a;
        if (t.transform && e.css) {
            if (! (a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.
        default(e.css))) return function() {};
            e.css = a
        }
        if (t.singleton) {
            var i = s++;
            o = l || (l = b(t)),
            r = y.bind(null, o, i, !1),
            n = y.bind(null, o, i, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
            e.attrs.rel = "stylesheet",
            h(t, e.attrs),
            g(e, t),
            t
        } (t), r = function(e, t, o) {
            var r = o.css,
            n = o.sourceMap,
            a = void 0 === t.convertToAbsoluteUrls && n; (t.convertToAbsoluteUrls || a) && (r = d(r));
            n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
            var i = new Blob([r], {
                type: "text/css"
            }),
            c = e.href;
            e.href = URL.createObjectURL(i),
            c && URL.revokeObjectURL(c)
        }.bind(null, o, t), n = function() {
            f(o),
            o.href && URL.revokeObjectURL(o.href)
        }) : (o = b(t), r = function(e, t) {
            var o = t.css,
            r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = o;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o))
            }
        }.bind(null, o), n = function() {
            f(o)
        });
        return r(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t)
            } else n()
        }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment"); (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs: {},
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var o = m(e, t);
        return u(o, t),
        function(e) {
            for (var r = [], n = 0; n < o.length; n++) {
                var i = o[n]; (c = a[i.id]).refs--,
                r.push(c)
            }
            e && u(m(e, t), t);
            for (n = 0; n < r.length; n++) {
                var c;
                if (0 === (c = r[n]).refs) {
                    for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                    delete a[c.id]
                }
            }
        }
    };
    var v, w = (v = [],
    function(e, t) {
        return v[e] = t,
        v.filter(Boolean).join("\n")
    });
    function y(e, t, o, r) {
        var n = o ? "": r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, n);
        else {
            var a = document.createTextNode(n),
            i = e.childNodes;
            i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
        }
    }
},
function(e, t, o) {
    var r = o(4);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(2)(r, n);
    r.locals && (e.exports = r.locals)
},
function(e, t, o) { (e.exports = o(1)(!1)).push([e.i, '.config-container{position:fixed;width:500px;margin-top:75px;margin-left:calc(50% - 250px);background-color:#f3f3f3;z-index:2147483647;border:1px solid #666;box-shadow:0 0 10px #aaa;display:flex;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;opacity:0;-webkit-transform:scale(.8);transform:scale(.8);transition:all .2s}.config-container.open{visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:all .5s}.config-container .menu{display:block;height:30px;text-align:right;background-color:#fff}.config-container .menu span{float:left;line-height:30px;margin-left:5px}.config-container .menu .close{height:30px;width:50px;display:inline-block;background-color:#f33;position:relative;cursor:pointer}.config-container .menu .close:after,.config-container .menu .close:before{content:"";width:20px;height:1px;background-color:#eee;top:14px;position:absolute}.config-container .menu .close:before{left:15px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.config-container .menu .close:after{right:15px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.config-container .content{flex:1}.config-container .content .item{display:block;padding:5px 20px;margin-top:10px}.config-container .content .item span{width:40%;display:inline-block}.config-container .content .item input{width:60%;display:inline-block}.config-container .buttonset{text-align:right;display:block;margin:20px 0}.config-container .buttonset .button{margin-right:20px;display:inline-block;border-radius:5px;color:#fff;cursor:pointer}', ""])
},
function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host,
        r = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
            var n, a = t.trim().replace(/^"(.*)"$/,
            function(e, t) {
                return t
            }).replace(/^'(.*)'$/,
            function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e: (n = 0 === a.indexOf("//") ? a: 0 === a.indexOf("/") ? o + a: r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
    }
},
function(e, t, o) { (e.exports = o(1)(!1)).push([e.i, 'body{background:var(--lg-wallpaper) fixed;background-size:cover;background-attachment:fixed}#app-header,.content>header{background-color:transparent!important}h1{color:#333!important;opacity:var(--lg-opacity)}#nprogress .nprogress-peg{display:none;box-shadow:none!important}::-moz-selection,::-webkit-selection{background-color:#cce2ff}::-moz-selection,::-webkit-selection,::selection{background-color:#cce2ff}::-webkit-scrollbar{width:12px;height:10px;background-color:transparent}::-webkit-scrollbar-track{background-color:rgba(0,0,0,.05)}::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2)}::-webkit-scrollbar-thumb:hover{background-color:#5e72e4}a{transition:all .15s;color:#5e72e4}a.solved{color:#1fc51f}a.unsolved{color:#f66}a.tried{color:#f90}.lg-fg-green{color:#2dce89!important}.lg-bg-red{background-color:#fb6340}.lg-bg-orange{background-color:#ff9d09}.lg-bg-purple{background-color:#8e44ad}.lg-bg-green{background-color:#2dce89}.lg-bg-bluedark{background-color:#001277}@-webkit-keyframes fadeLeft{0%{-webkit-transform:translateX(-25px);transform:translateX(-25px);opacity:0}}@keyframes fadeLeft{0%{-webkit-transform:translateX(-25px);transform:translateX(-25px);opacity:0}}.am-input-group{transition:box-shadow .15s ease}.am-form-field,.am-input-group{border:none;border-radius:.5rem!important}.am-form-field{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.am-form-field:focus{box-shadow:0 4px 6px rgba(50,50,93,.08),0 1px 3px rgba(0,0,0,.05)!important}.am-input-group-sm>.am-form-field,.am-input-group-sm>.am-input-group-label{font-size:1.35rem!important}.am-input-group-danger>.am-input-group-label{border-color:#f5365c!important;background-color:#ec0c38!important}.am-input-group-primary>.am-input-group-label{border-color:#5e72e4!important;background-color:#5e72e4!important;border-radius:.5rem!important}.am-input-group-danger,.am-input-group-primary{box-shadow:none}.am-input-group-danger>.am-input-group-label,.am-input-group-primary>.am-input-group-label{background:transparent;border:none;border-radius:.5rem!important;outline:none!important;letter-spacing:.05em;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);margin-bottom:6px;height:33.4px}.am-input-group-danger>.am-input-group-label:hover,.am-input-group-primary>.am-input-group-label:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.am-input-group-danger>.am-input-group-label:active,.am-input-group-primary>.am-input-group-label:active{box-shadow:none}textarea{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02);border:none!important}textarea:focus{box-shadow:0 4px 6px rgba(50,50,93,.08),0 1px 3px rgba(0,0,0,.05)!important}#topbar-search-text{border-radius:.5rem 0 0 .5em!important}#topbar-search{border-radius:0 .5rem .5em 0!important;border-color:#5e72e4;background-color:#5e72e4}.am-progress,.lg-article,.lg-article-sub,.lg-content-table-left,.lg-summary{opacity:var(--lg-opacity);background:rgba(255,255,255,var(--lg-opacity))}.lg-article,.lg-article-sub,.lg-summary{transition:all .15s ease;box-shadow:0 5px 15px rgba(50,50,93,.1),0 5px 8px rgba(0,0,0,.07)!important;word-wrap:break-word;border-radius:.25rem;background-color:#fcfcfc}.lg-article-sub:hover,.lg-article:hover,.lg-summary:hover{box-shadow:0 10px 30px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important}.am-btn{outline:none!important;border:none!important;letter-spacing:.05em;padding:8px 18px;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fff!important;margin-bottom:6px}.am-btn:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.am-btn:active{box-shadow:none}.lg-main-content.solution-block{margin-top:0!important}.am-input-group-sm>.am-input-group-btn>.am-btn{font-size:1.35rem!important}.am-btn-danger,.am-btn-danger:active,.am-btn-danger:focus,.am-btn-danger:hover,.am-btn-danger:visited{border-color:#f5365c;background-color:#ec0c38}.am-btn-primary,.am-btn-primary:active,.am-btn-primary:focus,.am-btn-primary:hover,.am-btn-primary:visited{border-color:#5e72e4;background-color:#5e72e4}.am-btn-success,.am-btn-success:active,.am-btn-success:focus,.am-btn-success:hover,.am-btn-success:visited{border-color:#2dce89;background-color:#2dce89}.am-btn-warning,.am-btn-warning:active,.am-btn-warning:focus,.am-btn-warning:hover,.am-btn-warning:visited{border-color:#fb6340;background-color:#fb6340}.tip-twitter{background:#172b4d;color:#fff;border-radius:50px;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.tip-twitter>div{font-weight:unset!important;font-size:13px!important;margin-left:5px;margin-right:5px}.am-badge{border-radius:50px!important;padding:4px 10px;transition:all .15s}.am-badge:hover{-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.am-badge.lg-bg-red{background-color:#f80031}.am-badge.lg-bg-orange{background-color:#ff471d}.am-badge.lg-bg-yellow{background-color:#ff9d09}.am-badge.lg-bg-green{background-color:#1aae6f}.am-badge.lg-bg-bluelight{background-color:#03acca}.am-badge.lg-bg-purple{background-color:#8e44ad}.am-badge.lg-bg-bluedark{background-color:#001277}.am-badge.am-badge-warning{background-color:#fb6340}.am-dropdown-content{padding:1.5rem;border-radius:.25rem;background:#fff;width:300px;border:none;margin-top:5px;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)}.am-dropdown-content:after,.am-dropdown-content:before{display:none!important}.lg-unread{line-height:60px;width:60px;height:60px;padding:0;text-align:center;border-radius:50%;transition:all .15s ease;color:#fff;background-color:#5e72e4;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);overflow:hidden}.am-comment-main{border:none;box-shadow:0 3px 5px rgba(50,50,93,.1),0 2px 3px rgba(0,0,0,.08);transition:all .15s;opacity:var(--lg-opacity)}.am-comment-main:hover{border:none;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);opacity:var(--lg-opacity)}.am-comment-main:after,.am-comment-main:before{display:none}.lg-toolbar>.lg-index-tool{box-shadow:0 5px 15px rgba(50,50,93,.1),0 5px 8px rgba(0,0,0,.07)!important;background:#f4f5f7;padding:50px 40px;color:#32325d}.lg-content-table-left{background:#fcfcfc;box-shadow:0 0 2rem 0 rgba(136,152,170,.15)!important;border-radius:.375rem;margin-top:20px;padding-left:30px;padding-right:30px;padding-bottom:20px;position:relative}.lg-content-table-left>.lg-table-row{width:100%!important;box-shadow:none;background:transparent;border-radius:0;border-bottom:.6px solid rgba(0,0,0,.08);border-spacing:2px;padding-bottom:20px}.lg-content-table-left>.lg-table-row:last-of-type{border-bottom:none;padding-bottom:0}.feed-selector>a{font-weight:500;transition:all .15s ease;color:#5e72e4;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:5px!important;height:50px;line-height:36px}.am-nav-tabs{border:none;margin-bottom:20px}.am-nav-tabs li>a{font-weight:500;transition:all .15s ease;color:#5e72e4;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:5px!important;height:50px;line-height:36px;padding-left:20px;padding-right:20px;border:none!important;margin-right:10px}.am-tabs-bd{border-radius:5px;border:.6px solid rgba(0,0,0,.1);background:transparent}.am-pagination{padding-top:20px;padding-bottom:20px}.am-pagination>li>a{cursor:pointer;line-height:1.25;position:relative;display:block;margin:0 3px 0 -.0625rem;padding:.5rem .75rem;color:#8898aa;border:.0625rem solid #dee2e6;background-color:#fff;font-size:15px;font-weight:unset;min-width:36px;height:36px;border-radius:100px!important;align-items:center;justify-content:center}.feed-selector.am-active>a{color:#fff;background:#5e72e4!important}.am-pagination>.am-active>a{color:#fff;border-color:#5e72e4;background-color:#5e72e4;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.am-nav-tabs li.am-active>a{color:#fff!important;background:#5e72e4!important}.am-pagination>.am-active>a:hover{color:#fff;border-color:#5e72e4;background-color:#5e72e4}.lg-record-tile{transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:3px}.lg-record-tile:hover{transition:all .15s ease;-webkit-transform:translateY(-5px);transform:translateY(-5px);box-shadow:0 10px 30px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.am-comment-avatar{box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);border:none;transition:all .15s}.am-comment-avatar:hover{box-shadow:0 1rem 3rem rgba(0,0,0,.175)}.am-panel-bd .am-comment-avatar,.lg-header-li .am-comment-avatar,.lg-inline-up .am-comment-avatar,.lg-message-contact .am-comment-avatar,.lg-message-content .am-comment-avatar{box-shadow:none}.am-panel{border:none;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.lg-mcard{border:none;transition:all .15s ease;box-shadow:0 2px 3px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:3px}.lg-mcard:hover{transition:all .15s ease;-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.lg-table-small{margin-top:5px}.am-progress{border-radius:.5rem;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.am-progress-bar,.am-progress-bar-secondary{background-color:#5e72e4}.am-ucheck-checkbox:checked+.am-ucheck-icons,.am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled)+.am-ucheck-icons,.am-ucheck-radio:checked+.am-ucheck-icons,.am-ucheck-radio:hover:not(.am-nohover):not(:disabled)+.am-ucheck-icons{color:#5e72e4}.am-checkbox-inline .am-icon-unchecked:before,.am-checkbox .am-icon-unchecked:before{content:"";border:1px solid rgba(0,0,0,.1);height:15px;width:15px;border-radius:3px;margin-top:3px}.lg-info-box{color:#fff;background-color:#555abf;padding:1rem 1.5rem;border:0;border-radius:.25rem;min-height:100px!important}.lg-info-box>#pic,.lg-info-box>.lg-stamp{display:none}.lg-info-box>.am-text-left>h1{margin-bottom:10px;margin-top:10px}.lg-info-box>.am-text-left>p{margin-top:0;margin-bottom:0}.lg-info-box>.am-text-left .lg-small{margin-top:15px;margin-bottom:15px;color:hsla(0,0%,100%,.6);display:block}.am-modal-dialog{box-shadow:0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.17);border:1px solid rgba(0,0,0,.2);border-radius:.5rem;outline:0;background-color:#fff;background-clip:padding-box}.am-modal-dialog>#lg-alert-title,.am-modal-dialog>#memtitle{font-family:inherit;font-weight:400;line-height:1.3;color:#32325d;text-align:left;padding-left:15px;padding-bottom:15px;border-bottom:.7px solid rgba(0,0,0,.1);margin-bottom:15px}.am-modal-dialog>#lg-alert-message,.am-modal-dialog>#memadmin{line-height:1.3;color:#32325d;text-align:left;padding-left:15px;padding-bottom:25px;padding-top:10px;border-bottom:.7px solid rgba(0,0,0,.1)}.am-modal-dialog .lg-model-content{margin-top:10px}.am-modal-btn{outline:none!important;border:none!important;letter-spacing:.05em;padding:8px 18px;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fafafa!important;height:unset;line-height:unset;border-radius:5px!important;margin-right:3px;display:inline-block!important;border-color:#5e72e4;background-color:#5e72e4}.am-modal-btn:active,.am-modal-btn:focus,.am-modal-btn:hover,.am-modal-btn:visited{border-color:#5e72e4;background-color:#5e72e4}.am-modal-btn:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.am-modal-btn:active{box-shadow:none}.am-modal-footer{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;display:block;margin-top:10px;margin-bottom:8px;padding:5px 5px 5px 15px}.lg-message-contact:hover{background:hsla(0,0%,78.4%,.2)}.lg-message-contact div:hover{background:transparent}.am-selected-list li:hover{background:hsla(0,0%,78.4%,.2)!important}#app-footer{margin-left:0!important}#app-sidenav{background-color:transparent!important;line-height:normal!important}#app-sidenav>a{color:#5e72e4!important}code,kbd,samp{font-family:Consolas,monospace!important}', ""])
},
function(e, t, o) {
    "use strict";
    o.r(t);
    var r = /<div class="lg-article am-hide-sm">([\s\S]*?)<\/div>/gi,
    n = /<span[\s\S]*?<\/span>/gi,
    a = /<a[^>]*?>([\s\S]*?)<\/a>/gi,
    i = function(e) {
        return (e.match(a) || []).map(function(e) {
            return e.replace(a, "$1")
        })
    },
    c = function(e) {
        var t = e.trim();
        if (!t) return show_alert("提示", "请输入内容");
        if (/^u:/i.test(t)) {
            var o = t.slice(2);
            if (! (o = o.trim())) return show_alert("提示", "请输入用户名或uid");
            /^\d+$/g.test(o) ? window.location.href = "/space/show?uid=" + o: fetch("https://www.luogu.org/space/ajax_getuid?username=" + o).then(function(e) {
                return e.json()
            }).then(function(e) {
                200 !== e.code ? show_alert("好像哪里有点问题", "找不到该用户") : window.location.href = "/space/show?uid=" + e.more.uid
            }).
            catch(function(e) {
                return console.error(e),
                show_alert("错误", "网络超时")
            })
        } else {
            o = encodeURIComponent(o);
            / ^( ? :\d + |P\d + |CF\d + [A - Z] | SP\d + |AT\d + |UVA\d + ) $ / .test(o) ? window.location.href = "/problemnew/show/".concat(o) : window.location.href = "/problemnew/lists?name=".concat(o)
        }
    },
    l = function(e) {
        e.addEventListener("keypress",
        function(e) {
            if ("Enter" === e.key) {
                var t = e.target,
                o = t && t.value || "";
                c(o)
            }
        })
    },
    s = (o(3),
    function(e) {
        var t = e.split(" ")[0],
        o = Array.from(t.match(/(^|[.#])[\w-]+/g) || []),
        r = document.createElement(o[0]);
        return o.forEach(function(e) {
            e.startsWith(".") && r.classList.add(e.slice(1)),
            e.startsWith("#") && (r.id = e.slice(1))
        }),
        r.innerText = e.slice(t.length + 1),
        r
    }),
    p = function() {
        function e(e, t, o) {
            var r = this;
            this.onsave = o;
            var n = new Map;
            try {
                var a = localStorage.getItem("config");
                a && (n = new Map(JSON.parse(a)))
            } catch(e) {
                n = new Map
            }
            this.container = s("div.config-container");
            var i = s("div.menu"),
            c = s("span 个性化");
            i.appendChild(c);
            var l = s("div.close");
            l.addEventListener("click",
            function() {
                r.hide()
            }),
            i.appendChild(l),
            this.container.appendChild(i);
            var p = s("div.content");
            this.configs = t.map(function(t) {
                var o = s("div.item"),
                r = n.has(t.key) ? n.get(t.key) : t.value,
                a = s("span " + t.key);
                o.appendChild(a);
                var i = s("input");
                switch (t.type) {
                case "text":
                    switch (i.type = "text", e) {
                    case "luogu":
                        i.classList.add("am-form-field");
                        break;
                    default:
                        throw new Error("Unknown Online Judge")
                    }
                    i.value = r;
                    break;
                case "color":
                    switch (i.type = "color", e) {
                    case "luogu":
                        i.classList.add("am-form-field");
                        break;
                    default:
                        throw new Error("Unknown Online Judge")
                    }
                    i.value = r;
                    break;
                case "number":
                    switch (i.type = "number", e) {
                    case "luogu":
                        i.classList.add("am-form-field");
                        break;
                    default:
                        throw new Error("Unknown Online Judge")
                    }
                    i.value = r,
                    t.range && (i.min = String(t.range[0]), i.max = String(t.range[1])),
                    t.step && (i.step = String(t.step));
                    break;
                case "checkbox":
                    i.type = "checkbox",
                    i.checked = r;
                    break;
                default:
                    throw new Error("Unexpected Config Type")
                }
                return o.appendChild(i),
                p.appendChild(o),
                {
                    config: t,
                    input: i
                }
            }),
            this.container.appendChild(p);
            var d = s("div.buttonset"),
            u = s("div.button 确定"),
            m = s("div.button 取消");
            switch (e) {
            case "luogu":
                u.classList.add("am-btn", "am-btn-danger", "am-btn-sm"),
                m.classList.add("am-btn", "am-btn-primary", "am-btn-sm");
                break;
            default:
                throw new Error("Unknown Online Judge")
            }
            u.addEventListener("click",
            function() {
                r.emitsave(!1),
                r.hide()
            }),
            m.addEventListener("click",
            function() {
                r.hide()
            }),
            d.appendChild(m),
            d.appendChild(u),
            this.container.appendChild(d),
            document.addEventListener("DOMContentLoaded",
            function() {
                document.body.appendChild(r.container)
            }),
            this.emitsave(!0)
        }
        return e.prototype.emitsave = function(e) {
            var t = new Map;
            this.configs.forEach(function(e) {
                var o = e.config,
                r = e.input;
                t.set(o.key, "checkbox" === o.type ? r.checked: r.value)
            }),
            localStorage.setItem("config", JSON.stringify(Array.from(t))),
            t.set("primary", e),
            this.onsave(t)
        },
        e.prototype.show = function() {
            this.container.classList.add("open")
        },
        e.prototype.hide = function() {
            this.container.classList.remove("open")
        },
        e
    } (),
    d = function() {
        function e(e) {
            var t = this;
            this.map = e,
            this.style = s("style"),
            document.addEventListener("DOMContentLoaded",
            function() {
                document.head.appendChild(t.style)
            }),
            this.flush()
        }
        return e.prototype.flush = function() {
            var e = Array.from(this.map).map(function(e) {
                return e.join(":")
            }).join(";");
            this.style.innerHTML = ":root{" + e + "}"
        },
        e.prototype.set = function(e, t) {
            this.map.set(e, t),
            this.flush()
        },
        e
    } (),
    u = o(0),
    m = o.n(u),
    g = {
        bgi: "背景图片",
        opc: "卡片透明度",
        thm: "使用特色主题"
    },
    f = [];
    f.push({
        key: g.thm,
        type: "checkbox",
        value: !0
    }),
    f.push({
        key: g.bgi,
        type: "text",
        value: ""
    }),
    f.push({
        key: g.opc,
        range: [0, 1],
        step: .01,
        type: "number",
        value: .75
    });
    var b = new d(new Map),
    h = new p("luogu", f,
    function(e) {
        e.get(g.thm) ? m.a.use() : m.a.unuse(),
        b.set("--lg-wallpaper", "url(" + e.get(g.bgi) + ")");
        var t = e.get(g.opc);
        b.set("--lg-opacity", t.toString())
    }),
    x = function(e) {
        document.addEventListener("DOMContentLoaded", e)
    };
    x(function() {
        var e = function() {
            var t = document.querySelector("nav#app-sidenav"),
            o = t.querySelectorAll("a"),
            r = o[o.length - 1];
            if (r) {
                var n = r.cloneNode(!0),
                a = n.querySelector("span.icon i"),
                i = n.querySelector("span.text");
                a.className = "fa fa-cog",
                i.innerText = "设置",
                n.addEventListener("click",
                function() {
                    h.show()
                }),
                n.setAttribute("href", "#"),
                t.append(n)
            } else setTimeout(e, 500)
        };
        setTimeout(e, 500)
    }),
    x(function() {
        if (/^\/discuss\/show\/\d+$/.test(window.location.pathname)) {
            var e = /page=(\d+)/i.exec(window.location.href),
            t = window.location.pathname,
            o = 1;
            if (e && (o = Number(e[1])), !(o > 1)) {
                var r = !1;
                window.addEventListener("scroll",
                function() {
                    var e, n;
                    e = document.body.scrollTop || document.documentElement.scrollTop,
                    n = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                    e + 2e3 > n && e + 1800 < n && !r &&
                    function(e) {
                        r = !0,
                        fetch(t + "?page=" + e).then(function(e) {
                            return e.text()
                        }).then(function(e) { (e.match(/<article[\s\S]*?<\/article>/gi) || []).slice(1).forEach(function(e) {
                                r = !1;
                                var t = document.querySelectorAll("article");
                                t[t.length - 1].outerHTML += e
                            })
                        }).
                        catch(function(e) {
                            r = !1,
                            console.error(e)
                        })
                    } (++o)
                });
                var n = document.querySelector(".pagination-centered");
                n && n.remove()
            }
        }
    }),
    x(function() {
        if ("/space/show" === window.location.pathname) {
            var e = /uid=(\d+)/.exec(window.location.href);
            if (!e) return;
            var t = e[1],
            o = /_uid=(\d+)/i.exec(document.cookie);
            if (!o) return;
            var a = o[1];
            if (t === a) return; (function(e) {
                return new Promise(function(t, o) {
                    var a = localStorage.getItem(e);
                    if (a) try {
                        var c = JSON.parse(a);
                        if (Number(new Date) - c.updateAt <= 36e5) return t(c)
                    } catch(e) {
                        console.error(e)
                    }
                    var l = function(e) {
                        return e || o(new Error("Parse error")),
                        e
                    };
                    fetch("/space/show?uid=" + e).then(function(e) {
                        return e.text()
                    }).then(function(o) {
                        var a = (o.match(r) || []).map(function(e) {
                            return e.replace(n, "")
                        }),
                        c = {
                            passedlist: i(l(a[0])),
                            triedlist: i(l(a[2])),
                            updateAt: Number(new Date)
                        };
                        localStorage.setItem(e, JSON.stringify(c)),
                        t(c)
                    }).
                    catch(o)
                })
            })(a).then(function(e) {
                var t = 0,
                o = new Set(e.passedlist),
                r = new Set(e.triedlist);
                Array.from(document.querySelectorAll("div.lg-article > a[data-pjax]")).forEach(function(e) {
                    var n = e.innerHTML;
                    o.has(n) ? e.classList.add("solved") : (++t, r.has(n) ? e.classList.add("tried") : e.classList.add("unsolved"))
                }),
                function(e) {
                    var t = document.querySelector("body > #app-body-new > div > div.am-u-md-4.lg-right >div.lg-article.am-hide-sm >h2");
                    t && (t.style.fontSize = "18px", t.textContent = "通过题目（其中你有 " + e + " 道题尚未 AC）")
                } (t)
            })
        }
    }),
    x(function() {
        var e = /\/problemnew\/show\/(\w+)/i.exec(window.location.href);
        if (e) {
            var t = e[1],
            o = /_uid=(\d+)/i.exec(document.cookie);
            if (o) {
                var r = Number(o[1]); (function(e, t) {
                    return new Promise(function(o, r) {
                        fetch("/recordnew/lists?uid=" + e + "&pid=" + t).then(function(e) {
                            return e.text()
                        }).then(function(e) {
                            var t = (new DOMParser).parseFromString(e, "text/html"),
                            r = Array.from(t.querySelectorAll('strong[class^="lg-fg-"]'));
                            r.length || (t.querySelectorAll("span.lg-bg-green").length ? o(100) : t.querySelectorAll("span.lg-bg-red").length ? o(0) : o( - 1));
                            var n = Math.max.apply(Math, [ - 1].concat(r.map(function(e) {
                                return Number(e.textContent)
                            }).filter(function(e) {
                                return ! isNaN(e)
                            })));
                            o(n)
                        }).
                        catch(r)
                    })
                })(r, t).then(function(e) {
                    var o = "";
                    o = '<a href="/recordnew/lists?uid=' + r + "&pid=" + t + '" target="_blank">' + (o = 100 === e ? '<strong class="lg-fg-green"><i class="am-icon-check"></i></strong>': e > 80 ? '<strong class="lg-fg-green">' + e + "</strong>": e > 50 ? '<strong class="lg-fg-yellow">' + e + "</strong>": e > 20 ? '<strong class="lg-fg-orange">' + e + "</strong>": e > -1 ? '<strong class="lg-fg-red">' + e + "</strong>": '<strong style="color: #515151;"><i class="am-icon-minus"></i></strong>') + "</a>";
                    var n = function() {
                        var e = document.querySelector("header h1");
                        e ? e.innerHTML = o + e.innerHTML: setTimeout(n, 500)
                    };
                    n()
                })
            }
        }
    }),
    x(function() {
        var e;
        "/" === window.location.pathname &&
        function() {
            var e = document.querySelector("[name=goto]");
            if (e) {
                var t = e.cloneNode(!0);
                e.parentNode && e.parentNode.replaceChild(t, e),
                t.textContent = "搜索",
                t.addEventListener("click",
                function(e) {
                    e.stopImmediatePropagation();
                    var t = document.querySelector("input[name=toproblem]"),
                    o = t && t.value || "";
                    c(o)
                })
            }
            var o = document.querySelector("div.lg-article.lg-index-stat > h2");
            o && (o.innerHTML = "<h2>搜索</h2>");
            var r = document.querySelector("[name=toproblem]");
            if (r) {
                var n = r.cloneNode(!0);
                n.placeholder = '使用 "u:" 搜索用户',
                r.parentNode && r.parentNode.replaceChild(n, r),
                l(n)
            }
        } (),
        e = function() {
            var t = document.querySelector(".search-wrap input");
            if (t) {
                var o = t.cloneNode(!0);
                t.parentNode && t.parentNode.replaceChild(o, t),
                l(o)
            } else setTimeout(e, 500)
        },
        setTimeout(e, 500)
    })
}]);