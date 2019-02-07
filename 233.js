// ==UserScript==
// @name           Scripts for Luogu
// @version        0.4.0
// @namespace      https://www.luogu.org/
// @match          https://www.luogu.org/*
// @match          https://www.luogu.com.cn/*
// @exclude        https://www.luogu.org/blog/*
// @exclude        https://www.luogu.com.cn/blog/*
// @run-at         document-start
// @updateURL      https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js
// @downloadURL    https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js
// @supportURL     https://github.com/sxyz-edu/user-scripts
// ==/UserScript==

"use strict";
function _toConsumableArray(a) {
    return _arrayWithoutHoles(a) || _iterableToArray(a) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}
function _iterableToArray(a) {
    if (Symbol.iterator in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a)
}
function _arrayWithoutHoles(a) {
    if (Array.isArray(a)) {
        for (var o = 0,
        r = new Array(a.length); o < a.length; o++) r[o] = a[o];
        return r
    }
}
document.addEventListener("DOMContentLoaded",
function() {
    if (/^\/discuss\/show\/\d+$/.test(window.location.pathname)) {
        var a = /page=(\d+)/i.exec(window.location.href),
        e = window.location.pathname,
        t = 1;
        if (a && (t = Number(a[1])), 1 === t) {
            var n = !1;
            window.addEventListener("scroll",
            function() {
                var a, o, r;
                o = document.body.scrollTop || document.documentElement.scrollTop,
                (r = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)) < o + 2e3 && o + 1800 < r && !n && (a = ++t, n = !0, fetch("".concat(e, "?page=").concat(a)).then(function(a) {
                    return a.text()
                }).then(function(a) {
                    for (var o = /<article[\s\S]*?<\/article>/gi,
                    r = o.exec(a); r = o.exec(a);) {
                        n = !1;
                        var e = document.querySelectorAll("article");
                        e[e.length - 1].outerHTML += r[0]
                    }
                }).
                catch(function(a) {
                    n = !1,
                    console.error(a)
                }))
            });
            var o = document.querySelector(".pagination-centered");
            o && o.remove()
        }
    }
}),
function() {
    var i = /<div class="lg-article am-hide-sm">([\s\S]*?)<\/div>/gi,
    c = /<span[\s\S]*?<\/span>/gi,
    o = /<a[^>]*?>([\s\S]*?)<\/a>/gi,
    d = function(a) {
        return a.match(o).map(function(a) {
            return a.replace(o, "$1")
        })
    };
    document.addEventListener("DOMContentLoaded",
    function() {
        if ("/space/show" === window.location.pathname) {
            var a = /uid=(\d+)/.exec(window.location.href);
            if (!a) return;
            var o = a[1],
            r = /_uid=(\d+)/i.exec(document.cookie);
            if (!r) return;
            var e = r[1];
            if (o === e) return; (n = e, new Promise(function(e, o) {
                var a = localStorage.getItem(n);
                if (a) try {
                    var r = JSON.parse(a);
                    if (Number(new Date) - r.updateAt <= 36e5) return void e(r)
                } catch(a) {
                    console.error(a)
                }
                var t = function(a) {
                    return a || o(new Error("parse error")),
                    a
                };
                fetch("/space/show?uid=".concat(n)).then(function(a) {
                    return a.text()
                }).then(function(a) {
                    var o = a.match(i).map(function(a) {
                        return a.replace(c, "")
                    }),
                    r = {
                        passedlist: d(t(o[0])),
                        triedlist: d(t(o[2])),
                        updateAt: Number(new Date)
                    };
                    localStorage.setItem(n, JSON.stringify(r)),
                    e(r)
                }).
                catch(o)
            })).then(function(a) {
                var o, r, e = 0,
                t = new Set(a.passedlist),
                n = new Set(a.triedlist);
                Array.from(document.querySelectorAll("div.lg-article > a[data-pjax]")).forEach(function(a) {
                    var o = a.innerHTML;
                    t.has(o) ? a.classList.add("solved") : (++e, n.has(o) ? a.classList.add("tried") : a.classList.add("unsolved"))
                }),
                o = e,
                r = "body > #app-body-new > div > div.am-u-md-4.lg-right >div.lg-article.am-hide-sm >h2",
                document.querySelector(r).style.fontSize = "18px",
                document.querySelector(r).textContent = "通过题目（其中你有 ".concat(o, " 道题尚未 AC）")
            })
        }
        var n
    })
} (),
document.addEventListener("DOMContentLoaded",
function() {
    var a = /\/problemnew\/show\/(\w+)/i.exec(window.location.href);
    if (a) {
        var o = a[1],
        r = /_uid=(\d+)/i.exec(document.cookie);
        if (r) {
            var e, n, t = r[1]; (e = t, n = o, new Promise(function(t, a) {
                fetch("/recordnew/lists?uid=".concat(e, "&pid=").concat(n)).then(function(a) {
                    return a.text()
                }).then(function(a) {
                    var o = (new DOMParser).parseFromString(a, "text/html"),
                    r = Array.from(o.querySelectorAll('strong[class^="lg-fg-"]'));
                    r.length || (o.querySelectorAll("span.lg-bg-green").length ? t(100) : o.querySelectorAll("span.lg-bg-red").length ? t(0) : t( - 1));
                    var e = Math.max.apply(Math, [ - 1].concat(_toConsumableArray(r.map(function(a) {
                        return Number(a.textContent)
                    }).filter(function(a) {
                        return ! isNaN(a)
                    }))));
                    t(e)
                }).
                catch(a)
            })).then(function(a) {
                var r = "";
                r = 100 === a ? '<strong class="lg-fg-green"><i class="am-icon-check"></i></strong>': 80 < a ? '<strong class="lg-fg-green">'.concat(a, "</strong>") : 50 < a ? '<strong class="lg-fg-yellow">'.concat(a, "</strong>") : 20 < a ? '<strong class="lg-fg-orange">'.concat(a, "</strong>") : -1 < a ? '<strong class="lg-fg-red">'.concat(a, "</strong>") : '<strong style="color: #515151;"><i class="am-icon-minus"></i></strong>',
                r = '<a href="/recordnew/lists?uid='.concat(t, "&pid=").concat(o, '" target="_blank">').concat(r, "</a>"),
                function a() {
                    var o = document.querySelector("header h1");
                    o ? o.innerHTML = r + o.innerHTML: setTimeout(a, 500)
                } ()
            })
        }
    }
}),
function() {
    var t = function(a) {
        var o = encodeURIComponent(a.trim());
        a = encodeURIComponent(a);
        if (!o) return show_alert("提示", "请输入内容");
        if (/^u:/i.test(o)) {
            var r = o.slice(2);
            if (! (r = r.trim())) return show_alert("提示", "请输入用户名或uid");
            /^\d+$/g.test(r) ? window.location.href = "/space/show?uid=".concat(r) : fetch("https://www.luogu.org/space/ajax_getuid?username=".concat(r)).then(function(a) {
                return a.json()
            }).then(function(a) {
                200 !== a.code ? show_alert("好像哪里有点问题", "找不到该用户") : window.location.href = "/space/show?uid=".concat(a.more.uid)
            }).
            catch(function(a) {
                return console.error(a),
                show_alert("错误", "网络超时")
            })
        } else / ^( ? :\d + |P\d + |CF\d + [A - Z] | SP\d + |AT\d + |UVA\d + ) $ / .test(o) ? window.location.href = "/problemnew/show/".concat(o) : window.location.href = "/problemnew/lists?name=".concat(o)
    };
    document.addEventListener("DOMContentLoaded",
    function() {
        "/" === window.location.pathname &&
        function() {
            var a = document.querySelector("[name=goto]"),
            o = a.cloneNode(!0);
            a.parentNode.replaceChild(o, a),
            o.textContent = "搜索",
            o.addEventListener("click",
            function(a) {
                a.stopImmediatePropagation();
                var o = document.querySelector("[name=toproblem]").value;
                t(o)
            }),
            document.querySelector("div.lg-article.lg-index-stat > h2").innerHTML = "<h2>搜索</h2>";
            var r = document.querySelector("[name=toproblem]"),
            e = r.cloneNode(!0);
            e.placeholder = '使用 "u:" 搜索用户',
            r.parentNode.replaceChild(e, r),
            e.addEventListener("keypress",
            function(a) {
                if ("Enter" === a.key) {
                    var o = a.target.value;
                    t(o)
                }
            })
        } (),
        setTimeout(function a() {
            var o = document.querySelector(".search-wrap input");
            if (o) {
                var r = o.cloneNode(!0);
                o.parentNode.replaceChild(r, o),
                r.addEventListener("keypress",
                function(a) {
                    if ("Enter" === a.key) {
                        var o = a.target.value;
                        t(o)
                    }
                })
            } else setTimeout(a, 500)
        },
        500)
    })
} (),
function() {
    var a = document.createElement("style");
    a.type = "text/css",
    a.appendChild(document.createTextNode('@-webkit-keyframes fadeLeft{0%{-webkit-transform:translateX(-25px);transform:translateX(-25px);opacity:0}}@keyframes fadeLeft{0%{-webkit-transform:translateX(-25px);transform:translateX(-25px);opacity:0}}body{background:var(--lg-wallpaper) fixed;background-size:cover;background-attachment:fixed}#app-header,.content>header{background-color:transparent!important}h1{color:#333!important;opacity:var(--lg-opacity)}#nprogress .nprogress-peg{display:none;box-shadow:none!important}::-moz-selection,::-webkit-selection{background-color:#cce2ff}::-moz-selection,::-webkit-selection,::selection{background-color:#cce2ff}::-webkit-scrollbar{width:12px;height:10px;background-color:transparent}::-webkit-scrollbar-track{background-color:rgba(0,0,0,.05)}::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2)}::-webkit-scrollbar-thumb:hover{background-color:#5e72e4}a{transition:all .15s;color:#5e72e4}a.solved{color:#1fc51f}a.unsolved{color:#f66}a.tried{color:#f90}.lg-fg-green{color:#2dce89!important}.lg-bg-red{background-color:#fb6340}.lg-bg-orange{background-color:#ff9d09}.lg-bg-purple{background-color:#8e44ad}.lg-bg-green{background-color:#2dce89}.lg-bg-bluedark{background-color:#001277}.am-form-field,.am-input-group{border:0;border-radius:.5rem!important}.am-input-group{transition:box-shadow .15s ease}.am-form-field{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.am-form-field:focus,textarea:focus{box-shadow:0 4px 6px rgba(50,50,93,.08),0 1px 3px rgba(0,0,0,.05)!important}.am-input-group-sm>.am-form-field,.am-input-group-sm>.am-input-group-label{font-size:1.35rem!important}.am-input-group-danger>.am-input-group-label{border-color:#f5365c!important;background-color:#ec0c38!important}.am-input-group-primary>.am-input-group-label{border-color:#5e72e4!important;background-color:#5e72e4!important}.am-input-group-danger>.am-input-group-label,.am-input-group-primary>.am-input-group-label{background:0 0;border:0;border-radius:.5rem!important;outline:0!important;letter-spacing:.05em;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);margin-bottom:6px;height:33.4px}.am-input-group-danger>.am-input-group-label:hover,.am-input-group-primary>.am-input-group-label:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.am-input-group-danger,.am-input-group-danger>.am-input-group-label:active,.am-input-group-primary,.am-input-group-primary>.am-input-group-label:active{box-shadow:none}textarea{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02);border:0!important}#topbar-search-text{border-radius:.5rem 0 0 .5em!important}#topbar-search{border-radius:0 .5rem .5em 0!important;border-color:#5e72e4;background-color:#5e72e4}.am-progress,.lg-article,.lg-article-sub,.lg-content-table-left,.lg-summary{opacity:var(--lg-opacity);background:rgba(255,255,255,var(--lg-opacity))}.lg-article,.lg-article-sub,.lg-summary{transition:all .15s ease;box-shadow:0 5px 15px rgba(50,50,93,.1),0 5px 8px rgba(0,0,0,.07)!important;word-wrap:break-word;border-radius:.25rem;background-color:#fcfcfc}.lg-article-sub:hover,.lg-article:hover,.lg-summary:hover{box-shadow:0 10px 30px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important}.am-btn{outline:0!important;border:0!important;letter-spacing:.05em;padding:8px 18px;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fff!important;margin-bottom:6px}.am-btn:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.am-btn:active{box-shadow:none}.lg-main-content.solution-block{margin-top:0!important}.am-input-group-sm>.am-input-group-btn>.am-btn{font-size:1.35rem!important}.am-btn-danger{border-color:#f5365c;background-color:#ec0c38}.am-btn-danger:active,.am-btn-danger:focus,.am-btn-danger:hover,.am-btn-danger:visited{border-color:#f5365c;background-color:#ec0c38}.am-btn-primary{border-color:#5e72e4;background-color:#5e72e4}.am-btn-primary:active,.am-btn-primary:focus,.am-btn-primary:hover,.am-btn-primary:visited{border-color:#5e72e4;background-color:#5e72e4}.am-btn-success{border-color:#2dce89;background-color:#2dce89}.am-btn-success:active,.am-btn-success:focus,.am-btn-success:hover,.am-btn-success:visited{border-color:#2dce89;background-color:#2dce89}.am-btn-warning{border-color:#fb6340;background-color:#fb6340}.am-btn-warning:active,.am-btn-warning:focus,.am-btn-warning:hover,.am-btn-warning:visited{border-color:#fb6340;background-color:#fb6340}.tip-twitter{background:#172b4d;color:#fff;border-radius:50px;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.tip-twitter>div{font-weight:unset!important;font-size:13px!important;margin-left:5px;margin-right:5px}.am-badge{border-radius:50px!important;padding:4px 10px;transition:all .15s}.am-badge:hover{-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.am-badge.lg-bg-red{background-color:#f80031}.am-badge.lg-bg-orange{background-color:#ff471d}.am-badge.lg-bg-yellow{background-color:#ff9d09}.am-badge.lg-bg-green{background-color:#1aae6f}.am-badge.lg-bg-bluelight{background-color:#03acca}.am-badge.lg-bg-purple{background-color:#8e44ad}.am-badge.lg-bg-bluedark{background-color:#001277}.am-badge.am-badge-warning{background-color:#fb6340}.am-dropdown-content{padding:1.5rem;border-radius:.25rem;background:#fff;width:300px;border:0;margin-top:5px;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)}.am-dropdown-content:after,.am-dropdown-content:before{display:none!important}.lg-unread{line-height:60px;width:60px;height:60px;padding:0;text-align:center;border-radius:50%;transition:all .15s ease;color:#fff;background-color:#5e72e4;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);overflow:hidden}.am-comment-main{border:0;box-shadow:0 3px 5px rgba(50,50,93,.1),0 2px 3px rgba(0,0,0,.08);transition:all .15s;opacity:var(--lg-opacity)}.am-comment-main:hover{border:0;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);opacity:var(--lg-opacity)}.am-comment-main:after,.am-comment-main:before{display:none}.lg-toolbar>.lg-index-tool{box-shadow:0 5px 15px rgba(50,50,93,.1),0 5px 8px rgba(0,0,0,.07)!important;background:#f4f5f7;padding:50px 40px;color:#32325d}.lg-content-table-left{background:#fcfcfc;box-shadow:0 0 2rem 0 rgba(136,152,170,.15)!important;border-radius:.375rem;margin-top:20px;padding-left:30px;padding-right:30px;padding-bottom:20px;position:relative}.lg-content-table-left>.lg-table-row{width:100%!important;box-shadow:none;background:0 0;border-radius:0;border-bottom:.6px solid rgba(0,0,0,.08);border-spacing:2px;padding-bottom:20px}.lg-content-table-left>.lg-table-row:last-of-type{border-bottom:none;padding-bottom:0}.am-nav-tabs li>a,.feed-selector>a{font-weight:500;transition:all .15s ease;color:#5e72e4;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:5px!important;height:50px;line-height:36px}.am-nav-tabs{border:0;margin-bottom:20px}.am-nav-tabs li>a{padding-left:20px;padding-right:20px;border:0!important;margin-right:10px}.am-tabs-bd{border-radius:5px;border:.6px solid rgba(0,0,0,.1);background:0 0}.am-pagination{padding-top:20px;padding-bottom:20px}.am-pagination>li>a{cursor:pointer;line-height:1.25;position:relative;display:block;margin:0 3px;margin-left:-.0625rem;padding:.5rem .75rem;color:#8898aa;border:.0625rem solid #dee2e6;background-color:#fff;font-size:15px;font-weight:unset;min-width:36px;height:36px;border-radius:100px!important;align-items:center;justify-content:center}.am-nav-tabs li.am-active>a,.feed-selector.am-active>a{color:#fff;background:#5e72e4!important}.am-pagination>.am-active>a{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.am-nav-tabs li.am-active>a{color:#fff!important}.am-pagination>.am-active>a,.am-pagination>.am-active>a:hover{color:#fff;border-color:#5e72e4;background-color:#5e72e4}.lg-record-tile{transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:3px}.lg-record-tile:hover{transition:all .15s ease;-webkit-transform:translateY(-5px);transform:translateY(-5px);box-shadow:0 10px 30px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.am-comment-avatar{box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);border:0;transition:all .15s}.am-comment-avatar:hover{box-shadow:0 1rem 3rem rgba(0,0,0,.175)}.am-panel-bd .am-comment-avatar,.lg-header-li .am-comment-avatar,.lg-inline-up .am-comment-avatar,.lg-message-contact .am-comment-avatar,.lg-message-content .am-comment-avatar{box-shadow:none}.am-panel{border:0;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.lg-mcard{border:0;transition:all .15s ease;box-shadow:0 2px 3px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);border-radius:3px}.lg-mcard:hover{transition:all .15s ease;-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.lg-table-small{margin-top:5px}.am-progress{border-radius:.5rem;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.am-progress-bar,.am-progress-bar-secondary{background-color:#5e72e4}.am-ucheck-checkbox:checked+.am-ucheck-icons,.am-ucheck-checkbox:hover:not(.am-nohover):not(:disabled)+.am-ucheck-icons,.am-ucheck-radio:checked+.am-ucheck-icons,.am-ucheck-radio:hover:not(.am-nohover):not(:disabled)+.am-ucheck-icons{color:#5e72e4}.am-checkbox .am-icon-unchecked:before,.am-checkbox-inline .am-icon-unchecked:before{content:"";border:1px solid rgba(0,0,0,.1);height:15px;width:15px;border-radius:3px;margin-top:3px}.lg-info-box{color:#fff;background-color:#555abf;padding:1rem 1.5rem;border:0;border-radius:.25rem;min-height:100px!important}.lg-info-box>#pic,.lg-info-box>.lg-stamp{display:none}.lg-info-box>.am-text-left>h1{margin-bottom:10px;margin-top:10px}.lg-info-box>.am-text-left>p{margin-top:0;margin-bottom:0}.lg-info-box>.am-text-left .lg-small{margin-top:15px;margin-bottom:15px;color:rgba(255,255,255,.6);display:block}.am-modal-dialog{box-shadow:0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.17);border:1px solid rgba(0,0,0,.2);border-radius:.5rem;outline:0;background-color:#fff;background-clip:padding-box}.am-modal-dialog>#lg-alert-title,.am-modal-dialog>#memtitle{font-family:inherit;font-weight:400;line-height:1.3;color:#32325d;text-align:left;padding-left:15px;padding-bottom:15px;border-bottom:.7px solid rgba(0,0,0,.1);margin-bottom:15px}.am-modal-dialog>#lg-alert-message,.am-modal-dialog>#memadmin{line-height:1.3;color:#32325d;text-align:left;padding-left:15px;padding-bottom:25px;padding-top:10px;border-bottom:.7px solid rgba(0,0,0,.1)}.am-modal-dialog .lg-model-content{margin-top:10px}.am-modal-btn{outline:0!important;border:0!important;letter-spacing:.05em;padding:8px 18px;transition:all .15s ease;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fafafa!important;height:unset;line-height:unset;border-radius:5px!important;margin-right:3px;display:inline-block!important;border-color:#5e72e4;background-color:#5e72e4}.am-modal-btn:active,.am-modal-btn:focus,.am-modal-btn:hover,.am-modal-btn:visited{border-color:#5e72e4;background-color:#5e72e4}.am-modal-btn:hover{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.am-modal-btn:active{box-shadow:none}.am-modal-footer{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;display:block;margin-top:10px;margin-bottom:8px;padding:5px 5px 5px 15px}.lg-message-contact:hover{background:rgba(200,200,200,.2)}.lg-message-contact div:hover{background:0 0}.am-selected-list li:hover{background:rgba(200,200,200,.2)!important}#app-footer{margin-left:0!important}#app-sidenav{background-color:transparent!important;line-height:normal!important}#app-sidenav>a{color:#5e72e4!important}code,kbd,samp{font-family:Consolas,monospace!important}'));
    var o = document.getElementsByTagName("head");
    0 < o.length ? o[0].appendChild(a) : document.documentElement.appendChild(a)
} ();