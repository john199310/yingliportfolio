(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    9361: function(e, t) {
        "use strict";
        t.Z = function(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
    },
    9454: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , o = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))),
                o.forEach(function(t) {
                    n(e, t, i[t])
                })
            }
            return e
        }
        i.d(t, {
            Z: function() {
                return o
            }
        })
    },
    3837: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return i(5737)
        }
        ])
    },
    8413: function(e, t, i) {
        "use strict";
        var n = i(5893)
          , o = i(1664)
          , a = i.n(o);
        t.Z = function(e) {
            var t = e.title
              , i = e.href
              , o = e.className;
            return (0,
            n.jsx)(a(), {
                href: void 0 === i ? "/" : i,
                passHref: !0,
                children: (0,
                n.jsx)("a", {
                    className: "inline-block w-max p-2 mt-6 border border-light-gray ".concat(void 0 === o ? "" : o, " dark:border-gray-700"),
                    children: (0,
                    n.jsx)("span", {
                        className: "inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 bg-primary hover:bg-black text-white hover:text-white transition duration-300 ",
                        children: void 0 === t ? "BUTTON" : t
                    })
                })
            })
        }
    },
    5788: function(e, t, i) {
        "use strict";
        var n = i(5893);
        t.Z = function(e) {
            var t = e.type;
            switch (void 0 === t ? "fixline" : t) {
            case "fixline":
                return (0,
                n.jsx)("div", {
                    className: "fixed z-[-1] w-[80%] 2xl:w-[1200px] transform right-1/2 translate-x-1/2",
                    children: (0,
                    n.jsx)("div", {
                        className: "decoration h-screen w-full"
                    })
                });
            case "threeline":
                return (0,
                n.jsxs)("div", {
                    className: "text-center mt-2 mb-3 lg:mb-5",
                    children: [(0,
                    n.jsx)("span", {
                        className: "inline-block bg-primary w-[1.5px] lg:w-[2px] h-8 lg:h-9"
                    }), (0,
                    n.jsx)("span", {
                        className: "inline-block bg-black dark:bg-white w-[1.5px] lg:w-[2px] h-8 lg:h-9 mx-1 lg:mx-[5px] -mb-2"
                    }), (0,
                    n.jsx)("span", {
                        className: "inline-block bg-primary w-[1.5px] lg:w-[2px] h-8 lg:h-9"
                    })]
                });
            default:
                return (0,
                n.jsx)("p", {
                    children: "Invalid props"
                })
            }
        }
    },
    8148: function(e, t, i) {
        "use strict";
        i.d(t, {
            V: function() {
                return o
            },
            i: function() {
                return n
            }
        });
        var n = !0
          , o = ""
    },
    1210: function(e, t) {
        "use strict";
        function i(e, t, i, n) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = i,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8045: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(9361).Z
          , o = i(4941).Z
          , a = i(3929).Z;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, i, s = e.src, l = e.sizes, m = e.unoptimized, g = void 0 !== m && m, w = e.priority, S = void 0 !== w && w, R = e.loading, C = e.lazyRoot, T = e.lazyBoundary, I = e.className, P = e.quality, N = e.width, A = e.height, L = e.style, M = e.objectFit, _ = e.objectPosition, z = e.onLoadingComplete, D = e.placeholder, H = void 0 === D ? "empty" : D, q = e.blurDataURL, W = c(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]), B = d.useContext(h.ImageConfigContext), F = d.useMemo(function() {
                var e = v || B || p.imageConfigDefault
                  , t = a(e.deviceSizes).concat(a(e.imageSizes)).sort(function(e, t) {
                    return e - t
                })
                  , i = e.deviceSizes.sort(function(e, t) {
                    return e - t
                });
                return r({}, e, {
                    allSizes: t,
                    deviceSizes: i
                })
            }, [B]), U = l ? "responsive" : "intrinsic";
            "layout"in W && (W.layout && (U = W.layout),
            delete W.layout);
            var G = j;
            if ("loader"in W) {
                if (W.loader) {
                    var Z = W.loader;
                    G = function(e) {
                        e.config;
                        var t = c(e, ["config"]);
                        return Z(t)
                    }
                }
                delete W.loader
            }
            var V = "";
            if (function(e) {
                var t;
                return "object" == typeof e && (x(e) || void 0 !== e.src)
            }(s)) {
                var J = x(s) ? s.default : s;
                if (!J.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));
                if (q = q || J.blurDataURL,
                V = J.src,
                (!U || "fill" !== U) && (A = A || J.height,
                N = N || J.width,
                !J.height || !J.width))
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))
            }
            s = "string" == typeof s ? s : V;
            var Y = !S && ("lazy" === R || void 0 === R);
            (s.startsWith("data:") || s.startsWith("blob:")) && (g = !0,
            Y = !1),
            y.has(s) && (Y = !1),
            F.unoptimized && (g = !0);
            var X = o(d.useState(!1), 2)
              , K = X[0]
              , Q = X[1]
              , $ = o(f.useIntersection({
                rootRef: void 0 === C ? null : C,
                rootMargin: T || "200px",
                disabled: !Y
            }), 3)
              , ee = $[0]
              , et = $[1]
              , ei = $[2]
              , en = !Y || et
              , eo = {
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }
              , ea = {
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }
              , er = !1
              , es = E(N)
              , el = E(A)
              , ec = E(P)
              , ed = Object.assign({}, L, {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: M,
                objectPosition: _
            })
              , eu = "blur" !== H || K ? {} : {
                backgroundSize: M || "cover",
                backgroundPosition: _ || "0% 0%",
                filter: "blur(20px)",
                backgroundImage: 'url("'.concat(q, '")')
            };
            if ("fill" === U)
                eo.display = "block",
                eo.position = "absolute",
                eo.top = 0,
                eo.left = 0,
                eo.bottom = 0,
                eo.right = 0;
            else if (void 0 !== es && void 0 !== el) {
                var ep = el / es
                  , ef = isNaN(ep) ? "100%" : "".concat(100 * ep, "%");
                "responsive" === U ? (eo.display = "block",
                eo.position = "relative",
                er = !0,
                ea.paddingTop = ef) : "intrinsic" === U ? (eo.display = "inline-block",
                eo.position = "relative",
                eo.maxWidth = "100%",
                er = !0,
                ea.maxWidth = "100%",
                t = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es, "%27%20height=%27").concat(el, "%27/%3e")) : "fixed" === U && (eo.display = "inline-block",
                eo.position = "relative",
                eo.width = es,
                eo.height = el)
            }
            var eh = {
                src: b,
                srcSet: void 0,
                sizes: void 0
            };
            en && (eh = k({
                config: F,
                src: s,
                unoptimized: g,
                layout: U,
                width: es,
                quality: ec,
                sizes: l,
                loader: G
            }));
            var em = s
              , eg = "imagesizes";
            eg = "imageSizes";
            var ev = (n(i = {}, "imageSrcSet", eh.srcSet),
            n(i, eg, eh.sizes),
            n(i, "crossOrigin", W.crossOrigin),
            i)
              , ey = d.default.useLayoutEffect
              , eb = d.useRef(z)
              , ew = d.useRef(s);
            d.useEffect(function() {
                eb.current = z
            }, [z]),
            ey(function() {
                ew.current !== s && (ei(),
                ew.current = s)
            }, [ei, s]);
            var ex = r({
                isLazy: Y,
                imgAttributes: eh,
                heightInt: el,
                widthInt: es,
                qualityInt: ec,
                layout: U,
                className: I,
                imgStyle: ed,
                blurStyle: eu,
                loading: R,
                config: F,
                unoptimized: g,
                placeholder: H,
                loader: G,
                srcString: em,
                onLoadingCompleteRef: eb,
                setBlurComplete: Q,
                setIntersection: ee,
                isVisible: en,
                noscriptSizes: l
            }, W);
            return d.default.createElement(d.default.Fragment, null, d.default.createElement("span", {
                style: eo
            }, er ? d.default.createElement("span", {
                style: ea
            }, t ? d.default.createElement("img", {
                style: {
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: t
            }) : null) : null, d.default.createElement(O, Object.assign({}, ex))), S ? d.default.createElement(u.default, null, d.default.createElement("link", Object.assign({
                key: "__nimg-" + eh.src + eh.srcSet + eh.sizes,
                rel: "preload",
                as: "image",
                href: eh.srcSet ? void 0 : eh.src
            }, ev))) : null)
        }
        ;
        var r = i(6495).Z
          , s = i(2648).Z
          , l = i(1598).Z
          , c = i(7273).Z
          , d = l(i(7294))
          , u = s(i(5443))
          , p = i(9309)
          , f = i(7190)
          , h = i(9977);
        i(3794);
        var m = i(2392);
        function g(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        var v = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        }
          , y = new Set
          , b = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          , w = new Map([["default", function(e) {
            var t = e.config
              , i = e.src
              , n = e.width
              , o = e.quality;
            return i.endsWith(".svg") && !t.dangerouslyAllowSVG ? i : "".concat(m.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(i), "&w=").concat(n, "&q=").concat(o || 75)
        }
        ], ["imgix", function(e) {
            var t = e.config
              , i = e.src
              , n = e.width
              , o = e.quality
              , a = new URL("".concat(t.path).concat(g(i)))
              , r = a.searchParams;
            return r.set("auto", r.getAll("auto").join(",") || "format"),
            r.set("fit", r.get("fit") || "max"),
            r.set("w", r.get("w") || n.toString()),
            o && r.set("q", o.toString()),
            a.href
        }
        ], ["cloudinary", function(e) {
            var t, i = e.config, n = e.src, o = e.width, a = ["f_auto", "c_limit", "w_" + o, "q_" + (e.quality || "auto")].join(",") + "/";
            return "".concat(i.path).concat(a).concat(g(n))
        }
        ], ["akamai", function(e) {
            var t = e.config
              , i = e.src
              , n = e.width;
            return "".concat(t.path).concat(g(i), "?imwidth=").concat(n)
        }
        ], ["custom", function(e) {
            var t = e.src;
            throw Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ], ]);
        function x(e) {
            return void 0 !== e.default
        }
        function k(e) {
            var t = e.config
              , i = e.src
              , n = e.unoptimized
              , o = e.layout
              , r = e.width
              , s = e.quality
              , l = e.sizes
              , c = e.loader;
            if (n)
                return {
                    src: i,
                    srcSet: void 0,
                    sizes: void 0
                };
            var d = function(e, t, i, n) {
                var o = e.deviceSizes
                  , r = e.allSizes;
                if (n && ("fill" === i || "responsive" === i)) {
                    for (var s = /(^|\s)(1?\d?\d)vw/g, l = []; c = s.exec(n); c)
                        l.push(parseInt(c[2]));
                    if (l.length) {
                        var c, d, u = .01 * (d = Math).min.apply(d, a(l));
                        return {
                            widths: r.filter(function(e) {
                                return e >= o[0] * u
                            }),
                            kind: "w"
                        }
                    }
                    return {
                        widths: r,
                        kind: "w"
                    }
                }
                return "number" != typeof t || "fill" === i || "responsive" === i ? {
                    widths: o,
                    kind: "w"
                } : {
                    widths: a(new Set([t, 2 * t].map(function(e) {
                        return r.find(function(t) {
                            return t >= e
                        }) || r[r.length - 1]
                    }))),
                    kind: "x"
                }
            }(t, r, o, l)
              , u = d.widths
              , p = d.kind
              , f = u.length - 1;
            return {
                sizes: l || "w" !== p ? l : "100vw",
                srcSet: u.map(function(e, n) {
                    return "".concat(c({
                        config: t,
                        src: i,
                        quality: s,
                        width: e
                    }), " ").concat("w" === p ? e : n + 1).concat(p)
                }).join(", "),
                src: c({
                    config: t,
                    src: i,
                    quality: s,
                    width: u[f]
                })
            }
        }
        function E(e) {
            return "number" == typeof e ? e : "string" == typeof e ? parseInt(e, 10) : void 0
        }
        function j(e) {
            var t, i = (null == (t = e.config) ? void 0 : t.loader) || "default", n = w.get(i);
            if (n)
                return n(e);
            throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(p.VALID_LOADERS.join(", "), ". Received: ").concat(i))
        }
        function S(e, t, i, n, o, a) {
            e && e.src !== b && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t,
            ("decode"in e ? e.decode() : Promise.resolve()).catch(function() {}).then(function() {
                if (e.parentNode && (y.add(t),
                "blur" === n && a(!0),
                null == o ? void 0 : o.current)) {
                    var i = e.naturalWidth
                      , r = e.naturalHeight;
                    o.current({
                        naturalWidth: i,
                        naturalHeight: r
                    })
                }
            }))
        }
        var O = function(e) {
            var t = e.imgAttributes
              , i = (e.heightInt,
            e.widthInt)
              , n = e.qualityInt
              , o = e.layout
              , a = e.className
              , s = e.imgStyle
              , l = e.blurStyle
              , u = e.isLazy
              , p = e.placeholder
              , f = e.loading
              , h = e.srcString
              , m = e.config
              , g = e.unoptimized
              , v = e.loader
              , y = e.onLoadingCompleteRef
              , b = e.setBlurComplete
              , w = e.setIntersection
              , x = e.onLoad
              , E = e.onError
              , j = (e.isVisible,
            e.noscriptSizes)
              , O = c(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);
            return f = u ? "lazy" : f,
            d.default.createElement(d.default.Fragment, null, d.default.createElement("img", Object.assign({}, O, t, {
                decoding: "async",
                "data-nimg": o,
                className: a,
                style: r({}, s, l),
                ref: d.useCallback(function(e) {
                    w(e),
                    (null == e ? void 0 : e.complete) && S(e, h, o, p, y, b)
                }, [w, h, o, p, y, b, ]),
                onLoad: function(e) {
                    S(e.currentTarget, h, o, p, y, b),
                    x && x(e)
                },
                onError: function(e) {
                    "blur" === p && b(!0),
                    E && E(e)
                }
            })), (u || "blur" === p) && d.default.createElement("noscript", null, d.default.createElement("img", Object.assign({}, O, k({
                config: m,
                src: h,
                unoptimized: g,
                layout: o,
                width: i,
                quality: n,
                sizes: j,
                loader: v
            }), {
                decoding: "async",
                "data-nimg": o,
                style: s,
                className: a,
                loading: f
            }))))
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8418: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4941).Z;
        i(5753).default,
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(2648).Z
          , a = i(7273).Z
          , r = o(i(7294))
          , s = i(6273)
          , l = i(2725)
          , c = i(3462)
          , d = i(1018)
          , u = i(7190)
          , p = i(1210)
          , f = i(8684)
          , h = {};
        function m(e, t, i, n) {
            if (e && s.isLocalURL(t)) {
                Promise.resolve(e.prefetch(t, i, n)).catch(function(e) {});
                var o = n && void 0 !== n.locale ? n.locale : e && e.locale;
                h[t + "%" + i + (o ? "%" + o : "")] = !0
            }
        }
        var g = r.default.forwardRef(function(e, t) {
            var i, o, g = e.href, v = e.as, y = e.children, b = e.prefetch, w = e.passHref, x = e.replace, k = e.shallow, E = e.scroll, j = e.locale, S = e.onClick, O = e.onMouseEnter, R = e.onTouchStart, C = e.legacyBehavior, T = void 0 === C ? !0 !== Boolean(!1) : C, I = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            i = y,
            T && ("string" == typeof i || "number" == typeof i) && (i = r.default.createElement("a", null, i));
            var P = !1 !== b
              , N = r.default.useContext(c.RouterContext)
              , A = r.default.useContext(d.AppRouterContext);
            A && (N = A);
            var L = r.default.useMemo(function() {
                var e = n(s.resolveHref(N, g, !0), 2)
                  , t = e[0]
                  , i = e[1];
                return {
                    href: t,
                    as: v ? s.resolveHref(N, v) : i || t
                }
            }, [N, g, v])
              , M = L.href
              , _ = L.as
              , z = r.default.useRef(M)
              , D = r.default.useRef(_);
            T && (o = r.default.Children.only(i));
            var H = T ? o && "object" == typeof o && o.ref : t
              , q = n(u.useIntersection({
                rootMargin: "200px"
            }), 3)
              , W = q[0]
              , B = q[1]
              , F = q[2]
              , U = r.default.useCallback(function(e) {
                (D.current !== _ || z.current !== M) && (F(),
                D.current = _,
                z.current = M),
                W(e),
                H && ("function" == typeof H ? H(e) : "object" == typeof H && (H.current = e))
            }, [_, H, M, F, W]);
            r.default.useEffect(function() {
                var e = B && P && s.isLocalURL(M)
                  , t = void 0 !== j ? j : N && N.locale
                  , i = h[M + "%" + _ + (t ? "%" + t : "")];
                e && !i && m(N, M, _, {
                    locale: t
                })
            }, [_, M, B, j, P, N]);
            var G = {
                ref: U,
                onClick: function(e) {
                    T || "function" != typeof S || S(e),
                    T && o.props && "function" == typeof o.props.onClick && o.props.onClick(e),
                    e.defaultPrevented || function(e, t, i, n, o, a, l, c, d, u) {
                        if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(f = (p = e).currentTarget.target) || "_self" === f) && !p.metaKey && !p.ctrlKey && !p.shiftKey && !p.altKey && (!p.nativeEvent || 2 !== p.nativeEvent.which) && s.isLocalURL(i)) {
                            e.preventDefault();
                            var p, f, h = function() {
                                "beforePopState"in t ? t[o ? "replace" : "push"](i, n, {
                                    shallow: a,
                                    locale: c,
                                    scroll: l
                                }) : t[o ? "replace" : "push"](i, {
                                    forceOptimisticNavigation: !u
                                })
                            };
                            d ? r.default.startTransition(h) : h()
                        }
                    }(e, N, M, _, x, k, E, j, Boolean(A), P)
                },
                onMouseEnter: function(e) {
                    T || "function" != typeof O || O(e),
                    T && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
                    !(!P && A) && s.isLocalURL(M) && m(N, M, _, {
                        priority: !0
                    })
                },
                onTouchStart: function(e) {
                    T || "function" != typeof R || R(e),
                    T && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
                    !(!P && A) && s.isLocalURL(M) && m(N, M, _, {
                        priority: !0
                    })
                }
            };
            if (!T || w || "a" === o.type && !("href"in o.props)) {
                var Z = void 0 !== j ? j : N && N.locale
                  , V = N && N.isLocaleDomain && p.getDomainLocale(_, Z, N.locales, N.domainLocales);
                G.href = V || f.addBasePath(l.addLocale(_, Z, N && N.defaultLocale))
            }
            return T ? r.default.cloneElement(o, G) : r.default.createElement("a", Object.assign({}, I, G), i)
        });
        t.default = g,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    7190: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4941).Z;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t, i = e.rootRef, c = e.rootMargin, d = e.disabled || !r, u = n(o.useState(!1), 2), p = u[0], f = u[1], h = n(o.useState(null), 2), m = h[0], g = h[1];
            return o.useEffect(function() {
                if (r) {
                    if (!d && !p && m && m.tagName) {
                        var e, t, n, o, u, h, g;
                        return t = function(e) {
                            return e && f(e)
                        }
                        ,
                        u = (o = function(e) {
                            var t, i = {
                                root: e.root || null,
                                margin: e.rootMargin || ""
                            }, n = l.find(function(e) {
                                return e.root === i.root && e.margin === i.margin
                            });
                            if (n && (t = s.get(n)))
                                return t;
                            var o = new Map;
                            return t = {
                                id: i,
                                observer: new IntersectionObserver(function(e) {
                                    e.forEach(function(e) {
                                        var t = o.get(e.target)
                                          , i = e.isIntersecting || e.intersectionRatio > 0;
                                        t && i && t(i)
                                    })
                                }
                                ,e),
                                elements: o
                            },
                            l.push(i),
                            s.set(i, t),
                            t
                        }(n = {
                            root: null == i ? void 0 : i.current,
                            rootMargin: c
                        })).id,
                        h = o.observer,
                        (g = o.elements).set(m, t),
                        h.observe(m),
                        function() {
                            if (g.delete(m),
                            h.unobserve(m),
                            0 === g.size) {
                                h.disconnect(),
                                s.delete(u);
                                var e = l.findIndex(function(e) {
                                    return e.root === u.root && e.margin === u.margin
                                });
                                e > -1 && l.splice(e, 1)
                            }
                        }
                    }
                } else if (!p) {
                    var v = a.requestIdleCallback(function() {
                        return f(!0)
                    });
                    return function() {
                        return a.cancelIdleCallback(v)
                    }
                }
            }, [m, d, c, i, p]),
            [g, p, o.useCallback(function() {
                f(!1)
            }, [])]
        }
        ;
        var o = i(7294)
          , a = i(9311)
          , r = "function" == typeof IntersectionObserver
          , s = new Map
          , l = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1018: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
        var n = (0,
        i(2648).Z)(i(7294))
          , o = n.default.createContext(null);
        t.AppRouterContext = o;
        var a = n.default.createContext(null);
        t.LayoutRouterContext = a;
        var r = n.default.createContext(null);
        t.GlobalLayoutRouterContext = r;
        var s = n.default.createContext(null);
        t.TemplateContext = s
    },
    5737: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return H
            }
        });
        var n = i(9454)
          , o = i(5893);
        i(906),
        i(6738);
        var a = i(9008)
          , r = i.n(a)
          , s = i(4298)
          , l = i.n(s)
          , c = i(7294)
          , d = i(1664)
          , u = i.n(d)
          , p = i(1163)
          , f = i(5675)
          , h = i.n(f)
          , m = i(6850)
          , g = function(e) {
            var t = e.active
              , i = void 0 !== t && t
              , n = e.onClick;
            return (0,
            o.jsxs)("a", {
                href: "#menu",
                "aria-label": "menu",
                onClick: void 0 === n ? null : n,
                className: "flex lg:hidden flex-col w-8 h-8 space-y-[6px] justify-center",
                style: {
                    WebkitTapHighlightColor: "transparent"
                },
                children: [(0,
                o.jsx)("span", {
                    className: "w-full h-[2px] bg-primary transform origin-top-right transition duration-500 ".concat(i && "-rotate-45 -translate-x-1 -translate-y-px bg-black dark:bg-white")
                }), (0,
                o.jsx)("span", {
                    className: "w-full h-[2px] bg-black dark:bg-white -ml-2 transform transition duration-500 ".concat(i && "-ml-0 translate-x-[100vw]", " ")
                }), (0,
                o.jsx)("span", {
                    className: "w-full h-[2px] bg-primary transform origin-bottom-right transition duration-500 ".concat(i && "rotate-45 translate-y-1 -translate-x-1")
                })]
            })
        }
          , v = function() {
            var e = (0,
            c.useState)(!0)
              , t = e[0]
              , i = e[1]
              , n = (0,
            c.useState)(!1)
              , a = n[0]
              , r = n[1]
              , s = (0,
            c.useState)(!1)
              , l = s[0]
              , d = s[1]
              , f = (0,
            p.useRouter)().pathname
              , v = function() {
                var e;
                window.pageYOffset >= 20 ? r(!0) : r(!1)
            }
              , y = function(e) {
                e.preventDefault(),
                d(function(e) {
                    return !e
                }),
                e.stopPropagation()
            };
            (0,
            c.useEffect)(function() {
                return window.addEventListener("scroll", v),
                localStorage.getItem("lightTheme") && (document.querySelector("html").classList.remove("dark"),
                i(!1)),
                function() {
                    window.removeEventListener("scroll", v)
                }
            }, []),
            (0,
            c.useEffect)(function() {
                return l && d(!1),
                function() {}
            }, [f]);
            var b = function() {
                document.querySelector("html").classList.toggle("dark"),
                document.querySelector("html").classList.contains("dark") ? localStorage.removeItem("lightTheme") : localStorage.setItem("lightTheme", "1"),
                i(!t)
            };
            return (0,
            o.jsxs)("nav", {
                className: "flex items-center justify-between fixed top-0 z-40 w-full max-w-[1905px] transform right-1/2 translate-x-1/2 md:px-8 2xl:px-20 md:py-3 transition duration-500 bg-white dark:bg-black ".concat(a && "bg-white dark:bg-black"),
                children: [(0,
                o.jsxs)("div", {
                    className: "flex items-center justify-between w-full z-50 transition duration-500 ".concat(l && "bg-white dark:bg-black", " ").concat(a && "bg-white dark:bg-black", " px-3 md:px-0 py-3 md:py-0"),
                    children: [(0,
                    o.jsx)(u(), {
                        href: "/",
                        passHref: !0,
                        children: (0,
                        o.jsx)("a", {
                            className: "flex items-center",
                            children: (0,
                            o.jsx)(h(), {
                                src: "myportfolio/extras/logo.png",
                                alt: "logo",
                                width: 40,
                                height: 40
                            })
                        })
                    }), (0,
                    o.jsx)("ul", {
                        className: "flex transform transition duration-500 absolute lg:static \n         bg-white dark:bg-black lg:bg-transparent dark:lg:bg-transparent left-3 right-3 border lg:border-none border-light-gray dark:border-gray-700 p-8 lg:p-0 space-y-4 lg:space-y-0 flex-col lg:flex-row space-x-0 lg:space-x-14 rounded-xl z-10\n        ".concat(l ? "translate-y-[250px]" : "translate-y-[-100vh] lg:translate-y-0"),
                        children: m.M9.map(function(e) {
                            var t;
                            return (0,
                            o.jsx)("li", {
                                children: (0,
                                o.jsx)(u(), {
                                    href: e.url,
                                    passHref: !0,
                                    children: (0,
                                    o.jsx)("a", {
                                        className: "text-sm text-center transition block py-3 lg:py-0 rounded-lg lg:bg-transparent dark:lg:bg-transparent dark:text-white tracking-widest ".concat((t = e.url,
                                        t === f || "/" !== t && f.startsWith(t) ? "font-bold text-white hover:text-white lg:hover:text-primary lg:text-primary bg-primary dark:lg:text-primary" : "bg-light-gray bg-opacity-30 hover:text-primary dark:hover:text-primary dark:bg-gray dark:bg-opacity-10")),
                                        children: e.name
                                    })
                                })
                            }, e.id)
                        })
                    }), (0,
                    o.jsxs)("div", {
                        className: "flex row align-center",
                        children: [(0,
                        o.jsx)("button", {
                            onClick: b,
                            className: "mr-8 lg:mr-0",
                            children: (0,
                            o.jsx)("svg", {
                                className: "text-black dark:text-white hover:text-primary dark:hover:text-primary",
                                width: 20,
                                height: 20,
                                children: (0,
                                o.jsx)("use", {
                                    xlinkHref: t ? "myportfolio/svg/sprite.svg#icon-moon" : "myportfolio/svg/sprite.svg#icon-sun"
                                })
                            })
                        }), (0,
                        o.jsx)(g, {
                            onClick: y,
                            active: l
                        })]
                    })]
                }), (0,
                o.jsx)("div", {
                    onClick: y,
                    "aria-hidden": "true",
                    className: "fixed h-screen top-16 bottom-0 left-0 right-0 transition duration-500 invisible bg-black bg-opacity-80 ".concat(l && "visible")
                })]
            })
        }
          , y = i(5788)
          , b = i(9470)
          , w = i.n(b)
          , x = function() {
            return (0,
            o.jsxs)("div", {
                className: "hidden md:flex justify-between fixed bottom-0 left-0 right-0 z-10 w-full px-3 md:px-10 2xl:px-20 max-w-[1905px] mx-auto",
                children: [(0,
                o.jsx)(w(), {
                    bottom: !0,
                    children: (0,
                    o.jsxs)("aside", {
                        className: "flex flex-col items-center",
                        children: [(0,
                        o.jsx)("ul", {
                            className: "flex flex-col items-center w-6 space-y-4",
                            children: m.PX.IQ.filter(function(e) {
                                return "Social Media" === e.category
                            }).map(function(e) {
                                return (0,
                                o.jsx)("li", {
                                    className: "w-max",
                                    children: (0,
                                    o.jsx)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        title: e.name,
                                        "aria-label": e.name,
                                        children: (0,
                                        o.jsx)("i", {
                                            className: "".concat(e.icon, " text-2xl transition duration-300 text-gray hover:text-primary transform hover:-translate-y-1")
                                        })
                                    })
                                }, e.id)
                            })
                        }), (0,
                        o.jsx)("div", {
                            className: "h-28 w-[2px] bg-primary mt-5"
                        })]
                    })
                }), (0,
                o.jsx)(w(), {
                    bottom: !0,
                    children: (0,
                    o.jsxs)("aside", {
                        className: "flex flex-col justify-end items-center",
                        children: [[m.PX.IQ.find(function(e) {
                            return "Email" === e.category
                        })].map(function(e) {
                            return (0,
                            o.jsx)("a", {
                                href: "mailto:".concat(e.username),
                                className: "text-gray transition duration-300 hover:text-primary tracking-widest",
                                style: {
                                    writingMode: "tb-rl"
                                },
                                children: e.username
                            }, e.id)
                        }), (0,
                        o.jsx)("div", {
                            className: "h-28 w-[2px] bg-primary mt-5"
                        })]
                    })
                })]
            })
        }
          , k = i(8413)
          , E = function() {
            return (0,
            o.jsxs)("footer", {
                children: [(0,
                o.jsx)("div", {
                    className: "py-20 border-b border-light-gray dark:border-gray-800",
                    children: (0,
                    o.jsxs)("div", {
                        className: "text-center",
                        children: [(0,
                        o.jsx)("h2", {
                            className: "text-4xl lg:text-5xl font-bold text-black dark:text-white",
                            children: "GET IN TOUCH"
                        }), (0,
                        o.jsx)("p", {
                            className: "text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2",
                            children: "Is there anything I can help you with? My inbox and Skype are always open to you, feel free to ask, I will try my best for you. Thank you for visiting."
                        }), (0,
                        o.jsx)(k.Z, {
                            title: "Say Hi..",
                            href: "contact.html/",
                            color: "primary"
                        })]
                    })
                }), (0,
                o.jsx)("div", {
                    className: "text-center text-xs md:text-md text-gray py-7",
                    children: (0,
                    o.jsxs)("p", {
                        className: "mb-1",
                        children: ["Design & Build With \uD83D\uDC95 by ", m.u2]
                    })
                })]
            })
        };
        function j(e) {
            this.init(e || {})
        }
        function S(e) {
            this.init(e || {})
        }
        function O(e) {
            var t = function(e) {
                e.touches ? (N.x = e.touches[0].pageX,
                N.y = e.touches[0].pageY) : (N.x = e.clientX,
                N.y = e.clientY),
                e.preventDefault()
            }
              , i = function(e) {
                1 == e.touches.length && (N.x = e.touches[0].pageX,
                N.y = e.touches[0].pageY)
            };
            document.removeEventListener("mousemove", O),
            document.removeEventListener("touchstart", O),
            document.addEventListener("mousemove", t),
            document.addEventListener("touchmove", t),
            document.addEventListener("touchstart", i),
            t(e),
            function() {
                A = [];
                for (var e = 0; e < L.trails; e++)
                    A.push(new S({
                        spring: .45 + e / L.trails * .025
                    }))
            }(),
            R()
        }
        function R() {
            if (T.running) {
                T.globalCompositeOperation = "source-over",
                T.clearRect(0, 0, T.canvas.width, T.canvas.height),
                T.globalCompositeOperation = "lighter",
                T.strokeStyle = "hsla(" + Math.round(I.update()) + ",90%,50%,0.25)",
                T.lineWidth = 1;
                for (var e, t = 0; t < L.trails; t++)
                    (e = A[t]).update(),
                    e.draw();
                T.frame++,
                window.requestAnimationFrame(R)
            }
        }
        function C() {
            T.canvas.width = window.innerWidth - 20,
            T.canvas.height = window.innerHeight
        }
        j.prototype = {
            init: function(e) {
                this.phase = e.phase || 0,
                this.offset = e.offset || 0,
                this.frequency = e.frequency || .001,
                this.amplitude = e.amplitude || 1
            },
            update: function() {
                return this.phase += this.frequency,
                P = this.offset + Math.sin(this.phase) * this.amplitude
            },
            value: function() {
                return P
            }
        },
        S.prototype = {
            init: function(e) {
                this.spring = e.spring + .1 * Math.random() - .05,
                this.friction = L.friction + .01 * Math.random() - .005,
                this.nodes = [];
                for (var t, i = 0; i < L.size; i++)
                    (t = new M).x = N.x,
                    t.y = N.y,
                    this.nodes.push(t)
            },
            update: function() {
                var e = this.spring
                  , t = this.nodes[0];
                t.vx += (N.x - t.x) * e,
                t.vy += (N.y - t.y) * e;
                for (var i, n = 0, o = this.nodes.length; n < o; n++)
                    t = this.nodes[n],
                    0 < n && (i = this.nodes[n - 1],
                    t.vx += (i.x - t.x) * e,
                    t.vy += (i.y - t.y) * e,
                    t.vx += i.vx * L.dampening,
                    t.vy += i.vy * L.dampening),
                    t.vx *= this.friction,
                    t.vy *= this.friction,
                    t.x += t.vx,
                    t.y += t.vy,
                    e *= L.tension
            },
            draw: function() {
                var e, t, i = this.nodes[0].x, n = this.nodes[0].y;
                T.beginPath(),
                T.moveTo(i, n);
                for (var o = 1, a = this.nodes.length - 2; o < a; o++)
                    e = this.nodes[o],
                    t = this.nodes[o + 1],
                    i = .5 * (e.x + t.x),
                    n = .5 * (e.y + t.y),
                    T.quadraticCurveTo(e.x, e.y, i, n);
                e = this.nodes[o],
                t = this.nodes[o + 1],
                T.quadraticCurveTo(e.x, e.y, t.x, t.y),
                T.stroke(),
                T.closePath()
            }
        };
        var T, I, P = 0, N = {}, A = [], L = {
            debug: !0,
            friction: .5,
            trails: 20,
            size: 50,
            dampening: .25,
            tension: .98
        }, M = function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function")
            }(this, e),
            this.x = 0,
            this.y = 0,
            this.vy = 0,
            this.vx = 0
        }, _ = function() {
            (T = document.getElementById("canvas").getContext("2d")).running = !0,
            T.frame = 1,
            I = new j({
                phase: 2 * Math.random() * Math.PI,
                amplitude: 85,
                frequency: .0015,
                offset: 285
            }),
            document.addEventListener("mousemove", O),
            document.addEventListener("touchstart", O),
            document.body.addEventListener("orientationchange", C),
            window.addEventListener("resize", C),
            window.addEventListener("focus", function() {
                T.running || (T.running = !0,
                R())
            }),
            window.addEventListener("blur", function() {
                T.running = !0
            }),
            C()
        }, z = function(e) {
            var t = e.children;
            return (0,
            c.useEffect)(function() {
                _()
            }, []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(v, {}), (0,
                o.jsx)(y.Z, {}), (0,
                o.jsx)(x, {}), (0,
                o.jsx), (0,
                o.jsx)("div", {
                    className: "max-w-[1430px] mx-auto md:px-36",
                    children: (0,
                    o.jsx)("div", {
                        className: "max-w-[1140px] xl:border-light-gray xl:border-r xl:border-l dark:border-gray-800",
                        children: (0,
                        o.jsxs)("main", {
                            className: "max-w-[1000px] mx-auto relative z-20",
                            children: [t, (0,
                            o.jsx)(E, {})]
                        })
                    })
                })]
            })
        }, D = i(8148), H = function(e) {
            var t = e.Component
              , i = e.pageProps;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(r(), {
                    children: (0,
                    o.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                }), (0,
                o.jsx)(z, {
                    children: (0,
                    o.jsx)(t, (0,
                    n.Z)({}, i))
                }), D.i ? (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(l(), {
                        strategy: "afterInteractive",
                        src: ""
                    }), (0,
                    o.jsx)(l(), {
                        id: "google-analytics",
                        children: "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-F2EP405ZSW');\n      "
                    }), (0,
                    o.jsx)(l(), {
                        id: "Adsense-id",
                        defer: !0,
                        src: "",
                        crossorigin: "anonymous"
                    })]
                }) : null]
            })
        }
    },
    906: function() {},
    6738: function() {},
    9008: function(e, t, i) {
        e.exports = i(5443)
    },
    5675: function(e, t, i) {
        e.exports = i(8045)
    },
    1664: function(e, t, i) {
        e.exports = i(8418)
    },
    1163: function(e, t, i) {
        e.exports = i(387)
    },
    4298: function(e, t, i) {
        e.exports = i(699)
    },
    2703: function(e, t, i) {
        "use strict";
        var n = i(414);
        function o() {}
        function a() {}
        a.resetWarningCache = o,
        e.exports = function() {
            function e(e, t, i, o, a, r) {
                if (r !== n) {
                    var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation",
                    s
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var i = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: o
            };
            return i.PropTypes = i,
            i
        }
    },
    5697: function(e, t, i) {
        e.exports = i(2703)()
    },
    414: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    9470: function(e, t, i) {
        "use strict";
        function n(e, t) {
            var i = t.distance
              , n = t.left
              , o = t.right
              , a = t.up
              , r = t.down
              , l = t.top
              , c = t.bottom
              , u = t.big
              , p = t.mirror
              , f = t.opposite
              , h = (i ? i.toString() : 0) + ((n ? 1 : 0) | (o ? 2 : 0) | (l || r ? 4 : 0) | (c || a ? 8 : 0) | (p ? 16 : 0) | (f ? 32 : 0) | (e ? 64 : 0) | (u ? 128 : 0));
            if (d.hasOwnProperty(h))
                return d[h];
            var m = n || o || a || r || l || c
              , g = void 0
              , v = void 0;
            if (m) {
                if (!p != !(e && f)) {
                    var y = [o, n, c, l, r, a];
                    n = y[0],
                    o = y[1],
                    l = y[2],
                    c = y[3],
                    a = y[4],
                    r = y[5]
                }
                var b = i || (u ? "2000px" : "100%");
                g = n ? "-" + b : o ? b : "0",
                v = r || l ? "-" + b : a || c ? b : "0"
            }
            return d[h] = (0,
            s.animation)((e ? "to" : "from") + " {opacity: 0;" + (m ? " transform: translate3d(" + g + ", " + v + ", 0);" : "") + "}\n     " + (e ? "from" : "to") + " {opacity: 1;transform: none;} "),
            d[h]
        }
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.defaults
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , i = e.children
              , o = (e.out,
            e.forever)
              , a = e.timeout
              , r = e.duration
              , c = void 0 === r ? s.defaults.duration : r
              , d = e.delay
              , u = void 0 === d ? s.defaults.delay : d
              , p = e.count
              , f = void 0 === p ? s.defaults.count : p
              , h = function(e, t) {
                var i = {};
                for (var n in e)
                    t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                return i
            }(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"])
              , m = {
                make: n,
                duration: void 0 === a ? c : a,
                delay: u,
                forever: o,
                count: f,
                style: {
                    animationFillMode: "both"
                },
                reverse: h.left
            };
            return t ? (0,
            l.default)(h, m, m, i) : m
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = i(5697), s = i(1017), l = (a = i(2580)) && a.__esModule ? a : {
            default: a
        }, c = {
            out: r.bool,
            left: r.bool,
            right: r.bool,
            top: r.bool,
            bottom: r.bool,
            big: r.bool,
            mirror: r.bool,
            opposite: r.bool,
            duration: r.number,
            timeout: r.number,
            distance: r.string,
            delay: r.number,
            count: r.number,
            forever: r.bool
        }, d = {};
        o.propTypes = c,
        t.default = o,
        e.exports = t.default
    },
    5792: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , a = function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var i = []
                      , n = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (i.push(r.value),
                        !t || i.length !== t); n = !0)
                            ;
                    } catch (l) {
                        o = !0,
                        a = l
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return i
                }(e, t);
            throw TypeError("Invalid attempt to destructure non-iterable instance")
        }, r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
        , s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i),
                n && e(t, n),
                t
            }
        }(), l = (n = i(7294)) && n.__esModule ? n : {
            default: n
        }, c = i(5697), d = i(1017), u = (0,
        c.shape)({
            make: c.func,
            duration: c.number.isRequired,
            delay: c.number.isRequired,
            forever: c.bool,
            count: c.number.isRequired,
            style: c.object.isRequired,
            reverse: c.bool
        }), p = {
            collapse: c.bool,
            collapseEl: c.element,
            cascade: c.bool,
            wait: c.number,
            force: c.bool,
            disabled: c.bool,
            appear: c.bool,
            enter: c.bool,
            exit: c.bool,
            fraction: c.number,
            refProp: c.string,
            innerRef: c.func,
            onReveal: c.func,
            unmountOnExit: c.bool,
            mountOnEnter: c.bool,
            inEffect: u.isRequired,
            outEffect: (0,
            c.oneOfType)([u, (0,
            c.oneOf)([!1])]).isRequired,
            ssrReveal: c.bool,
            collapseOnly: c.bool,
            ssrFadeout: c.bool
        }, f = {
            transitionGroup: c.object
        }, h = function(e) {
            function t(e, i) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                return n.isOn = void 0 === e.when || !!e.when,
                n.state = {
                    collapse: e.collapse ? t.getInitialCollapseStyle(e) : void 0,
                    style: {
                        opacity: (!n.isOn || e.ssrReveal) && e.outEffect ? 0 : void 0
                    }
                },
                n.savedChild = !1,
                n.isShown = !1,
                d.observerMode ? n.handleObserve = n.handleObserve.bind(n) : (n.revealHandler = n.makeHandler(n.reveal),
                n.resizeHandler = n.makeHandler(n.resize)),
                n.saveRef = n.saveRef.bind(n),
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            s(t, [{
                key: "saveRef",
                value: function(e) {
                    this.childRef && this.childRef(e),
                    this.props.innerRef && this.props.innerRef(e),
                    this.el !== e && (this.el = e && "offsetHeight"in e ? e : void 0,
                    this.observe(this.props, !0))
                }
            }, {
                key: "invisible",
                value: function() {
                    this && this.el && (this.savedChild = !1,
                    this.isShown || (this.setState({
                        hasExited: !0,
                        collapse: this.props.collapse ? r({}, this.state.collapse, {
                            visibility: "hidden"
                        }) : null,
                        style: {
                            opacity: 0
                        }
                    }),
                    !d.observerMode && this.props.collapse && window.document.dispatchEvent(d.collapseend)))
                }
            }, {
                key: "animationEnd",
                value: function(e, t, i) {
                    var n = this
                      , o = i.forever
                      , a = i.count
                      , r = i.delay
                      , s = i.duration;
                    if (!o) {
                        var l = function() {
                            n && n.el && (n.animationEndTimeout = void 0,
                            e.call(n))
                        };
                        this.animationEndTimeout = window.setTimeout(l, r + (s + (t ? s : 0) * a))
                    }
                }
            }, {
                key: "getDimensionValue",
                value: function() {
                    return this.el.offsetHeight + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top"), 10) + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom"), 10)
                }
            }, {
                key: "collapse",
                value: function(e, t, i) {
                    var n = i.duration + (t.cascade ? i.duration : 0)
                      , o = this.isOn ? this.getDimensionValue() : 0
                      , a = void 0
                      , r = void 0;
                    if (t.collapseOnly)
                        a = i.duration / 3,
                        r = i.delay;
                    else {
                        var s = n >> 2
                          , l = s >> 1;
                        a = s,
                        r = i.delay + (this.isOn ? 0 : n - s - l),
                        e.style.animationDuration = n - s + (this.isOn ? l : -l) + "ms",
                        e.style.animationDelay = i.delay + (this.isOn ? s - l : 0) + "ms"
                    }
                    return e.collapse = {
                        height: o,
                        transition: "height " + a + "ms ease " + r + "ms",
                        overflow: t.collapseOnly ? "hidden" : void 0
                    },
                    e
                }
            }, {
                key: "animate",
                value: function(e) {
                    if (this && this.el && (this.unlisten(),
                    this.isShown !== this.isOn)) {
                        this.isShown = this.isOn;
                        var t = !this.isOn && e.outEffect
                          , i = e[t ? "outEffect" : "inEffect"]
                          , n = "style"in i && i.style.animationName || void 0
                          , o = void 0;
                        e.collapseOnly ? o = {
                            hasAppeared: !0,
                            hasExited: !1,
                            style: {
                                opacity: 1
                            }
                        } : ((e.outEffect || this.isOn) && i.make && (n = i.make),
                        o = {
                            hasAppeared: !0,
                            hasExited: !1,
                            collapse: void 0,
                            style: r({}, i.style, {
                                animationDuration: i.duration + "ms",
                                animationDelay: i.delay + "ms",
                                animationIterationCount: i.forever ? "infinite" : i.count,
                                opacity: 1,
                                animationName: n
                            }),
                            className: i.className
                        }),
                        this.setState(e.collapse ? this.collapse(o, e, i) : o),
                        t ? (this.savedChild = l.default.cloneElement(this.getChild()),
                        this.animationEnd(this.invisible, e.cascade, i)) : this.savedChild = !1,
                        this.onReveal(e)
                    }
                }
            }, {
                key: "onReveal",
                value: function(e) {
                    e.onReveal && this.isOn && (this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)),
                    e.wait ? this.onRevealTimeout = window.setTimeout(e.onReveal, e.wait) : e.onReveal())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.unlisten(),
                    d.ssr && (0,
                    d.disableSsr)()
                }
            }, {
                key: "handleObserve",
                value: function(e, t) {
                    a(e, 1)[0].intersectionRatio > 0 && (t.disconnect(),
                    this.observer = null,
                    this.reveal(this.props, !0))
                }
            }, {
                key: "observe",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.el && d.observerMode) {
                        if (this.observer) {
                            if (!t)
                                return;
                            this.observer.disconnect()
                        } else if (t)
                            return;
                        this.observer = new IntersectionObserver(this.handleObserve,{
                            threshold: e.fraction
                        }),
                        this.observer.observe(this.el)
                    }
                }
            }, {
                key: "reveal",
                value: function(e) {
                    var t = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    d.globalHide || (0,
                    d.hideAll)(),
                    this && this.el && (e || (e = this.props),
                    d.ssr && (0,
                    d.disableSsr)(),
                    this.isOn && this.isShown && void 0 !== e.spy ? (this.isShown = !1,
                    this.setState({
                        style: {}
                    }),
                    window.setTimeout(function() {
                        return t.reveal(e)
                    }, 200)) : i || this.inViewport(e) || e.force ? this.animate(e) : d.observerMode ? this.observe(e) : this.listen())
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.el && !this.props.disabled) {
                        this.props.collapseOnly || ("make"in this.props.inEffect && this.props.inEffect.make(!1, this.props),
                        void 0 !== this.props.when && this.props.outEffect && "make"in this.props.outEffect && this.props.outEffect.make(!0, this.props));
                        var i = this.context.transitionGroup
                          , n = i && !i.isMounting ? !("enter"in this.props && !1 === this.props.enter) : this.props.appear;
                        return this.isOn && ((void 0 !== this.props.when || void 0 !== this.props.spy) && !n || d.ssr && !d.fadeOutEnabled && !this.props.ssrFadeout && this.props.outEffect && !this.props.ssrReveal && t.getTop(this.el) < window.pageYOffset + window.innerHeight) ? (this.isShown = !0,
                        this.setState({
                            hasAppeared: !0,
                            collapse: this.props.collapse ? {
                                height: this.getDimensionValue()
                            } : this.state.collapse,
                            style: {
                                opacity: 1
                            }
                        }),
                        void this.onReveal(this.props)) : d.ssr && (d.fadeOutEnabled || this.props.ssrFadeout) && this.props.outEffect && t.getTop(this.el) < window.pageYOffset + window.innerHeight ? (this.setState({
                            style: {
                                opacity: 0,
                                transition: "opacity 1000ms 1000ms"
                            }
                        }),
                        void window.setTimeout(function() {
                            return e.reveal(e.props, !0)
                        }, 2e3)) : void (this.isOn && (this.props.force ? this.animate(this.props) : this.reveal(this.props)))
                    }
                }
            }, {
                key: "cascade",
                value: function(e) {
                    var t = this
                      , i = void 0;
                    i = "string" == typeof e ? e.split("").map(function(e, t) {
                        return l.default.createElement("span", {
                            key: t,
                            style: {
                                display: "inline-block",
                                whiteSpace: "pre"
                            }
                        }, e)
                    }) : l.default.Children.toArray(e);
                    var n = this.props[this.isOn || !this.props.outEffect ? "inEffect" : "outEffect"]
                      , a = n.duration
                      , s = n.reverse
                      , c = i.length
                      , u = 2 * a;
                    this.props.collapse && (a = (u = parseInt(this.state.style.animationDuration, 10)) / 2);
                    var p = s ? c : 0;
                    return i.map(function(e) {
                        return "object" === (void 0 === e ? "undefined" : o(e)) && e ? l.default.cloneElement(e, {
                            style: r({}, e.props.style, t.state.style, {
                                animationDuration: Math.round((0,
                                d.cascade)(s ? p-- : p++, 0, c, a, u)) + "ms"
                            })
                        }) : e
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    if (void 0 !== e.when && (this.isOn = !!e.when),
                    e.fraction !== this.props.fraction && this.observe(e, !0),
                    !this.isOn && e.onExited && "exit"in e && !1 === e.exit)
                        return void e.onExited();
                    e.disabled || (e.collapse && !this.props.collapse && (this.setState({
                        style: {},
                        collapse: t.getInitialCollapseStyle(e)
                    }),
                    this.isShown = !1),
                    e.when === this.props.when && e.spy === this.props.spy || this.reveal(e),
                    this.onRevealTimeout && !this.isOn && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)))
                }
            }, {
                key: "getChild",
                value: function() {
                    if (this.savedChild && !this.props.disabled)
                        return this.savedChild;
                    if ("object" === o(this.props.children)) {
                        var e = l.default.Children.only(this.props.children);
                        return "type"in e && "string" == typeof e.type || "ref" !== this.props.refProp ? e : l.default.createElement("div", null, e)
                    }
                    return l.default.createElement("div", null, this.props.children)
                }
            }, {
                key: "render",
                value: function() {
                    var e = void 0;
                    e = this.state.hasAppeared ? !this.props.unmountOnExit || !this.state.hasExited || this.isOn : !this.props.mountOnEnter || this.isOn;
                    var t = this.getChild();
                    "function" == typeof t.ref && (this.childRef = t.ref);
                    var i, n, o, a = !1, s = t.props, c = s.style, u = s.className, p = s.children, f = this.props.disabled ? u : (this.props.outEffect ? d.namespace : "") + (this.state.className ? " " + this.state.className : "") + (u ? " " + u : "") || void 0, h = void 0;
                    "function" == typeof this.state.style.animationName && (this.state.style.animationName = this.state.style.animationName(!this.isOn, this.props)),
                    this.props.cascade && !this.props.disabled && p && this.state.style.animationName ? (a = this.cascade(p),
                    h = r({}, c, {
                        opacity: 1
                    })) : h = this.props.disabled ? c : r({}, c, this.state.style);
                    var m = r({}, this.props.props, (i = {
                        className: f,
                        style: h
                    },
                    n = this.props.refProp,
                    o = this.saveRef,
                    n in i ? Object.defineProperty(i, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[n] = o,
                    i))
                      , g = l.default.cloneElement(t, m, e ? a || p : void 0);
                    return void 0 !== this.props.collapse ? this.props.collapseEl ? l.default.cloneElement(this.props.collapseEl, {
                        style: r({}, this.props.collapseEl.style, this.props.disabled ? void 0 : this.state.collapse),
                        children: g
                    }) : l.default.createElement("div", {
                        style: this.props.disabled ? void 0 : this.state.collapse,
                        children: g
                    }) : g
                }
            }, {
                key: "makeHandler",
                value: function(e) {
                    var t = this
                      , i = function() {
                        e.call(t, t.props),
                        t.ticking = !1
                    };
                    return function() {
                        t.ticking || ((0,
                        d.raf)(i),
                        t.ticking = !0)
                    }
                }
            }, {
                key: "inViewport",
                value: function(e) {
                    if (!this.el || window.document.hidden)
                        return !1;
                    var i = this.el.offsetHeight
                      , n = window.pageYOffset - t.getTop(this.el)
                      , o = Math.min(i, window.innerHeight) * (d.globalHide ? e.fraction : 0);
                    return n > o - window.innerHeight && n < i - o
                }
            }, {
                key: "resize",
                value: function(e) {
                    this && this.el && this.isOn && this.inViewport(e) && (this.unlisten(),
                    this.isShown = this.isOn,
                    this.setState({
                        hasExited: !this.isOn,
                        hasAppeared: !0,
                        collapse: void 0,
                        style: {
                            opacity: this.isOn || !e.outEffect ? 1 : 0
                        }
                    }),
                    this.onReveal(e))
                }
            }, {
                key: "listen",
                value: function() {
                    d.observerMode || this.isListener || (this.isListener = !0,
                    window.addEventListener("scroll", this.revealHandler, {
                        passive: !0
                    }),
                    window.addEventListener("orientationchange", this.revealHandler, {
                        passive: !0
                    }),
                    window.document.addEventListener("visibilitychange", this.revealHandler, {
                        passive: !0
                    }),
                    window.document.addEventListener("collapseend", this.revealHandler, {
                        passive: !0
                    }),
                    window.addEventListener("resize", this.resizeHandler, {
                        passive: !0
                    }))
                }
            }, {
                key: "unlisten",
                value: function() {
                    !d.observerMode && this.isListener && (window.removeEventListener("scroll", this.revealHandler, {
                        passive: !0
                    }),
                    window.removeEventListener("orientationchange", this.revealHandler, {
                        passive: !0
                    }),
                    window.document.removeEventListener("visibilitychange", this.revealHandler, {
                        passive: !0
                    }),
                    window.document.removeEventListener("collapseend", this.revealHandler, {
                        passive: !0
                    }),
                    window.removeEventListener("resize", this.resizeHandler, {
                        passive: !0
                    }),
                    this.isListener = !1),
                    this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)),
                    this.animationEndTimeout && (this.animationEndTimeout = window.clearTimeout(this.animationEndTimeout))
                }
            }], [{
                key: "getInitialCollapseStyle",
                value: function(e) {
                    return {
                        height: 0,
                        visibility: e.when ? void 0 : "hidden"
                    }
                }
            }, {
                key: "getTop",
                value: function(e) {
                    for (; void 0 === e.offsetTop; )
                        e = e.parentNode;
                    for (var t = e.offsetTop; e.offsetParent; t += e.offsetTop)
                        e = e.offsetParent;
                    return t
                }
            }]),
            t
        }(l.default.Component);
        h.propTypes = p,
        h.defaultProps = {
            fraction: .2,
            refProp: "ref"
        },
        h.contextTypes = f,
        h.displayName = "RevealBase",
        t.default = h,
        e.exports = t.default
    },
    1017: function(e, t) {
        "use strict";
        function i(e) {
            try {
                return f.insertRule(e, f.cssRules.length)
            } catch (t) {
                console.warn("react-reveal - animation failed")
            }
        }
        function n() {
            c || (t.globalHide = c = !0,
            window.removeEventListener("scroll", n, !0),
            i("." + o + " { opacity: 0; }"),
            window.removeEventListener("orientationchange", n, !0),
            window.document.removeEventListener("visibilitychange", n))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.insertRule = i,
        t.cascade = function(e, t, i, n, o) {
            var a = Math.log(n);
            return Math.exp(a + (Math.log(o) - a) / (i - t) * (e - t))
        }
        ,
        t.animation = function(e) {
            if (!f)
                return "";
            var t = "@keyframes " + (h + u) + "{" + e + "}"
              , i = p[e];
            return i ? "" + h + i : (f.insertRule(t, f.cssRules.length),
            p[e] = u,
            "" + h + u++)
        }
        ,
        t.hideAll = n,
        t.default = function(e) {
            var i = e.ssrFadeout;
            t.fadeOutEnabled = i
        }
        ;
        var o = t.namespace = "react-reveal"
          , a = (t.defaults = {
            duration: 1e3,
            delay: 0,
            count: 1
        },
        t.ssr = !0)
          , r = t.observerMode = !1
          , s = t.raf = function(e) {
            return window.setTimeout(e, 66)
        }
          , l = t.disableSsr = function() {
            return t.ssr = a = !1
        }
          , c = (t.fadeOutEnabled = !1,
        t.ssrFadeout = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return t.fadeOutEnabled = e
        }
        ,
        t.globalHide = !1)
          , d = (t.ie10 = !1,
        t.collapseend = void 0)
          , u = 1
          , p = {}
          , f = !1
          , h = o + "-" + Math.floor(1e15 * Math.random()) + "-";
        if ("undefined" != typeof window && "nodejs" !== window.name && window.document && "undefined" != typeof navigator) {
            t.observerMode = r = "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype && /\{\s*\[native code\]\s*\}/.test("" + IntersectionObserver),
            t.raf = s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || s,
            t.ssr = a = window.document.querySelectorAll("div[data-reactroot]").length > 0,
            -1 !== navigator.appVersion.indexOf("MSIE 10") && (t.ie10 = !0),
            a && "performance"in window && "timing"in window.performance && "domContentLoadedEventEnd"in window.performance.timing && window.performance.timing.domLoading && Date.now() - window.performance.timing.domLoading < 300 && (t.ssr = a = !1),
            a && window.setTimeout(l, 1500),
            r || (t.collapseend = d = document.createEvent("Event"),
            d.initEvent("collapseend", !0, !0));
            var m = document.createElement("style");
            document.head.appendChild(m),
            m.sheet && m.sheet.cssRules && m.sheet.insertRule && (f = m.sheet,
            window.addEventListener("scroll", n, !0),
            window.addEventListener("orientationchange", n, !0),
            window.document.addEventListener("visibilitychange", n))
        }
    },
    2580: function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
        ;
        t.default = function(e, t, i, n) {
            return "in"in e && (e.when = e.in),
            2 > r.default.Children.count(n) ? r.default.createElement(l.default, o({}, e, {
                inEffect: t,
                outEffect: i,
                children: n
            })) : (n = r.default.Children.map(n, function(n) {
                return r.default.createElement(l.default, o({}, e, {
                    inEffect: t,
                    outEffect: i,
                    children: n
                }))
            }),
            "Fragment"in r.default ? r.default.createElement(r.default.Fragment, null, n) : r.default.createElement("span", null, n))
        }
        ;
        var a = i(7294)
          , r = n(a)
          , s = i(5792)
          , l = n(s);
        e.exports = t.default
    },
    6850: function(e) {
        "use strict";
        e.exports = JSON.parse('{"u2":"Ying Li","i7":"Full-Stack Web Developer","or":"https://Ying.me","wK":"https://Ying.me/extras/logo.png","WL":"I am a full stack developer. My major skills are PHP, c++, Node.js, React, Vue.js. I also have rich experience in wide range of web development.","M9":[{"id":1,"name":"Home","url":"index.html"},{"id":2,"name":"Projects","url":"project.html"}, {"id":3,"name":"Contact","url":"contact.html"}],"uZ":[{"id":1,"name":"WebApps Dev","description":"I am skilled in developing high-functioning web applications with a variety of features and excellent performance. ","icon":"myportfolio/svg/sprite.svg#service-webapps"}, {"id":2,"name":"Web Development","description":"I specialize in turning stunning designs into functional and high-performing websites.","icon":"myportfolio/svg/sprite.svg#service-website"}, {"id":1,"name":"Ui Ux Design","description":"I strive to create excellent user interfaces and user experiences with visually appealing and comfortable designs.","icon":"myportfolio/svg/sprite.svg#service-uiux"}, {"id":4,"name":"Native App Dev","description":"I have experience in developing responsive and user-friendly mobile applications using React Native.","icon":"myportfolio/svg/sprite.svg#service-app"},{"id":5,"name":"Best Performance","description":"I am skilled in developing high-performing websites and web applications that provide a seamless and enjoyable user experience.","icon":"myportfolio/svg/sprite.svg#service-performance"},{"id":6,"name":"Progressive Web Apps","description":"I am proficient in creating progressive web apps that provide a native app-like experience","icon":"myportfolio/svg/sprite.svg#service-pwa"}, {"id":7,"name":"Python Dev","description":"I am a Highly skilled Senior Python Developer with a proven track record of designing and implementing innovative software solutions.","icon":"myportfolio/svg/sprite.svg#service-performance"}, {"id":8,"name":"IOS App Dev","description":"Experienced Embedded Developer with extensive knowledge in Linux OS development and C/C++ programming seeking to join a pioneering company and take the next step in my career.","icon":"myportfolio/svg/sprite.svg#service-app"}, {"id":9,"name":"AI/ML Expert","description":"A passionate AI Programmer designing and developing AI/ML applications such as gaming applications.","icon":"myportfolio/svg/sprite.svg#service-website"}],"nb":[{"id":1,"name":"HTML 5","icon":"myportfolio/svg/sprite.svg#skill-html5"},{"id":2,"name":"CSS 3","icon":"myportfolio/svg/sprite.svg#skill-css3"},{"id":3,"name":"TailwindCss","icon":"myportfolio/svg/sprite.svg#skill-tailwindcss"},{"id":4,"name":"Bootstrap","icon":"myportfolio/svg/sprite.svg#skill-bootstrap"},{"id":5,"name":"Javascript","icon":"myportfolio/svg/sprite.svg#skill-javascript"},{"id":6,"name":"React JS","icon":"myportfolio/svg/sprite.svg#skill-reactjs"},{"id":7,"name":"Next JS","icon":"myportfolio/svg/sprite.svg#skill-nextjs"},{"id":8,"name":"React Native","icon":"myportfolio/svg/sprite.svg#skill-reactjs"},{"id":9,"name":"Python","icon":"myportfolio/svg/sprite.svg#skill-python"},{"id":10,"name":"Django","icon":"myportfolio/svg/sprite.svg#skill-django"},{"id":11,"name":"C++","icon":"myportfolio/svg/sprite.svg#skill-cpp"},{"id":12,"name":"Jquery","icon":"myportfolio/svg/sprite.svg#skill-jquery"},{"id":13,"name":"Redux","icon":"myportfolio/svg/sprite.svg#skill-redux"},{"id":14,"name":"Git","icon":"myportfolio/svg/sprite.svg#skill-git"},{"id":15,"name":"Github","icon":"myportfolio/svg/sprite.svg#skill-github"},{"id":16,"name":"PHP","icon":"myportfolio/svg/sprite.svg#skill-php"}, {"id":17,"name":"Laravel","icon":"myportfolio/svg/sprite.svg#skill-laravel"}, {"id":18,"name":"Codeigniter","icon":"myportfolio/svg/sprite.svg#skill-codeigniter"}, {"id":19,"name":"Node JS","icon":"myportfolio/svg/sprite.svg#skill-nodejs"}, {"id":20,"name":"Angular","icon":"myportfolio/svg/sprite.svg#skill-angular"}, {"id":21,"name":"Vue JS","icon":"myportfolio/svg/sprite.svg#skill-vuejs"}],"iV":{"TN":"Project","eh":"I have completed a variety of projects using a range of technologies. Some examples of my work include...","IQ":[{"id":1,"top":true,"image":"myportfolio/images/FTN-Rocket-Enterprises-LLC.png","name":"FTN Rocket Enterprises LLC Website","stack":"JS, REACT, NEXTJS, PHP, LARAVEL, MYSQL","category":"Business Ecommerce Project","url":"https://ftnrocketenterprisesllc.com/"},{"id":2,"top":false,"image":"myportfolio/images/shoprevelry.png","name":"ShopRevelry","stack":"PHP, WORDPRESS, ECOMMERCE, FIGMA, ADOBE ILL","category":"Personal Project","url":"https://shoprevelry.com/"},{"id":3,"top":false,"image":"myportfolio/images/Demi_God.png","name":"Demi God UI Design","stack":"REACT, HTML, CSS, JS, UX/UI Design, Adobe XD","category":"Personal Project","url":"https://www.demigodthegame.com/"},{"id":4,"top":false,"image":"myportfolio/images/APEX_project.png","name":"APEX_project","stack":"REACT, Node.js, TypeScript, SCSS, jQuery, HTML5, Responsive Design","category":"Personal Project","url":"http://apexacq.com/"},{"id":5,"top":true,"image":"myportfolio/images/Maksellent.png","name":"Maksellent MUI","stack":"Angular, HTML5, CSS, TypeScript, Responsive Design, SCSS", "category":"Business Project","url":"https://web.maksellent.com/"},{"id":6,"top":true,"image":"myportfolio/images/lunarlab.png","name":"LUNARLAB UX & UI Design Consulting Website","stack":"JS, REACT NATIVE, ANDROID","category":"Personal Project","url":"https://lunarlab.io/"},{"id":7,"top":false,"image":"myportfolio/images/Mono_NFT Marketplace.jpg","name":"Mono(NFT Marketplace)","stack":"React, Web3, Blockchain, Solidity, UX/UI","category":"Personal Project","url":"https://www.behance.net/gallery/140501917/Monofun"},{"id":8,"top":false,"image":"myportfolio/images/Morgan_Westfield.png","name":"Morgan & Westfield","stack":"UX/UI, UIKit, Figma, HTML, CSS, WordPress","category":"Personal Project","url":"https://morganandwestfield.com/"}, {"id":9,"top":false,"image":"myportfolio/images/Marketing Agency.jpg","name":"Marketing Agency Website","stack":"UX/UI, Landing Page, Figma, HTML, CSS, WordPress","category":"Personal Project","url":"https://marketing-agencydd810b.webflow.io/"}, {"id":10,"top":false,"image":"myportfolio/images/Primz_Bowl.jpg","name":"Primz Bowl Website","stack":"PHP, MySQL, Figma, HTML, CSS, WordPress","category":"Personal Project","url":"https://primalbowls.co/"}, {"id":11,"top":false,"image":"myportfolio/images/11.png","name":"Team app concept website","stack":"CMS Development, Webflow, Figma, HTML, CSS","category":"Personal Project","url":"https://rangga-alroy.webflow.io"}, {"id":12,"top":false,"image":"myportfolio/images/12.png","name":"Loss Stross","stack":"Adobe Photoshop, Webflow, Figma, HTML, CSS, Wordpress","category":"Personal Project","url":"http://lossstross.com"}, {"id":13,"top":false,"image":"myportfolio/images/13.jpg","name":"hc-project Website","stack":"PHP, Laravel, Figma, HTML, CSS, React, Nextjs, Webflow","category":"Personal Project","url":"https://hc-project.webflow.io/"}, {"id":14,"top":false,"image":"myportfolio/images/14.png","name":"Wellsleep Website","stack":"PHP, Codeigniter, Figma, HTML, CSS, Webflow","category":"Personal Project","url":"https://wellsleep.webflow.io"}, {"id":15,"top":false,"image":"myportfolio/images/15.jpg","name":"PLANNA™","stack":"PHP, Webflow, Figma, HTML, CSS, Landing Page","category":"Personal Project","url":"https://www.architectureapp.eu/"}, {"id":16,"top":false,"image":"myportfolio/images/16.png","name":"ViolinContest","stack":"PHP, Wordpress, Figma, HTML, CSS, Landing Page","category":"Personal Project","url":"https://www.singaporeviolincompetition.com/"}, {"id":17,"top":false,"image":"myportfolio/images/17.png","name":"ET","stack":"React, Jquery, HTML, Typescript, Laravel, Mysql","category":"Learning Project","url":"https://www.ef.com/wwen/"}, {"id":18,"top":false,"image":"myportfolio/images/18.png","name":"MarinaBay","stack":"Shopify, Logo Design, HTML, Ecommerce Website, Shopify SEO","category":"Shopping Project","url":"https://shoppes.marinabaysands.com/"}, {"id":19,"top":false,"image":"myportfolio/images/19.png","name":"AugustChic","stack":"Shopify, Logo Design, HTML, Ecommerce Website, Shopify SEO","category":"Shopping Project","url":"https://augustchic.com/"},{"id":20,"top":false,"image":"myportfolio/images/20.png","name":"WTS","stack":"Wordpress, PHP, Divi, Mysql, Jquery","category":"Traveling Project","url":"https://www.worldtravel.com/"}, {"id":21,"top":false,"image":"myportfolio/images/21.png","name":"Evolution","stack":"Wordpress, PHP, Yoast SEO, Elementor, Theme Development","category":"Traveling Project","url":"https://evolution.edu.au/"}, {"id":22,"top":false,"image":"myportfolio/images/22.png","name":"RealPowerStudio","stack":"Wordpress, PHP, Yoast SEO, Elementor, WPBakery","category":"Ecommerce Project","url":"https://realpowerstudios.com/"}, {"id":23,"top":false,"image":"myportfolio/images/23.png","name":"BondsOnline","stack":"Wordpress, PHP, Mysql, Animate.css, Bootstrap","category":"Personal Project","url":"https://www.bondsonline.com/"}, {"id":24,"top":false,"image":"myportfolio/images/24.png","name":"Jessdales","stack":"Wordpress, PHP, Mysql, Theme Customization, Bootstrap","category":"Traveling Project","url":"https://www.jessdales.com/"}, {"id":25,"top":false,"image":"myportfolio/images/25.png","name":"SleepProAcademy","stack":"Wordpress, PHP, Mysql, Theme Customization, Bootstrap","category":"Traveling Project","url":"https://sleepproacademy.com/"}, {"id":26,"top":false,"image":"myportfolio/images/26.png","name":"Amandabiccum","stack":"Wordpress, PHP, Mysql, Theme Customization, Elementor","category":"Personal Project","url":"https://amandabiccum.com/"}, {"id":27,"top":false,"image":"myportfolio/images/27.png","name":"KidiKools","stack":"Shopify, PHP, AWS, React, Next.js, Klaviyo","category":"Personal Project","url":"https://kidikools.com/"}, {"id":28,"top":false,"image":"myportfolio/images/28.png","name":"Aninebing","stack":"Shopify, PHP, AWS, React, Next.js, Klaviyo","category":"Personal Project","url":"https://www.aninebing.com/"}, {"id":29,"top":false,"image":"myportfolio/images/29.png","name":"NETAYA","stack":"Shopify, Swiper, AWS, React, Next.js, Klaviyo","category":"Shopify Project","url":"https://www.netaya.com/"}, {"id":30,"top":false,"image":"myportfolio/images/30.png","name":"ONELOVE","stack":"React, Redux, Typescript, SaaS, Next.js, REST API","category":"React Project","url":"https://oneloveshop.net/"}, {"id":31,"top":false,"image":"myportfolio/images/31.png","name":"TheHope","stack":"React, React Native, Typescript, Android, IOS, Firebase","category":"React Project","url":"https://thehope.fm/"}, {"id":32,"top":false,"image":"myportfolio/images/32.png","name":"sensay","stack":"React, React Native, Typescript, Tailwind CSS, Redux, Firebase","category":"React Project","url":"https://sensay.io/"}, {"id":33,"top":false,"image":"myportfolio/images/33.png","name":"TAZO","stack":"React, Node.js, Next.js, Tailwind CSS, Webpack, Google Analytics","category":"React Project","url":"https://www.tazo.com/us/en/"}, {"id":34,"top":false,"image":"myportfolio/images/34.png","name":"UnitedCoin","stack":"React, MongoDB, Node.js, Express.js, Vue.js, Next.js, Sails.js","category":"React Project","url":"https://unitedcoin.org/"}, {"id":35,"top":false,"image":"myportfolio/images/35.png","name":"COINZIX","stack":"Node.js, MongoDB, Vue.js, Nuxt.js, LiveAgent, Hammer.js","category":"Vue Project","url":"https://unitedcoin.org/"}, {"id":36,"top":false,"image":"myportfolio/images/36.png","name":"LEEBET","stack":"Node.js, MongoDB, Next.js, Socket.io, Web3, Blockchain","category":"Vue Project","url":"https://leebet.io/"}, {"id":37,"top":false,"image":"myportfolio/images/37.png","name":"stikamah","stack":"PHP, Laravel, Mysql, HTML, CSS, Vue.js","category":"Vue Project","url":"https://leebet.io/"}, {"id":38,"top":false,"image":"myportfolio/images/38.png","name":"StudioCataldi","stack":"PHP, Laravel, Mysql, HTML, CSS, Livewire, Bootstrap","category":"Laravel Project","url":"https://formazione.studiocataldi.it/"}, {"id":39,"top":false,"image":"myportfolio/images/39.png","name":"IOUDENITCH","stack":"Squarespace, Ecommerce, Webpack, Stimulus, YUI, Lodash, Modernizr","category":"Laravel Project","url":"https://mariaioudenitch.com/"}]},"PX":{"TN":"Contact","WL":"Get to know me by chatting with me through my available contacts. You can call or message me to start a conversation.","IQ":[{"id":1,"icon":"fab fa-linkedin-in","name":"Linkedin","username":"Ying Li","category":"Social Media","url":"https://www.linkedin.com/in/"},{"id":2,"icon":"fab fa-github","name":"Github","username":"devsirius","category":"Social Media","url":"https://github.com/devsirius44"},{"id":5,"icon":"fab fa-skype","name":"Skype","username":"7Star","category":"Social Media","url":"https://web.skype.com/"},{"id":6,"icon":"far fa-envelope","name":"Gmail","username":"MidasHand44","category":"Email","url":"mailto:midashand44@gmail.com"},{"id":7,"icon":"fab fa-telegram","name":"Telegram","username":"Aurora","category":"Social Media","url":"https://t.me/Aurora"},{"id":8,"icon":"fab fa-discord","name":"discord","username":"BrightSirius","category":"discord","url":"https://discord.com/"}]}}')
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(3837),
        t(387)
    }),
    _N_E = e.O()
}
]);
