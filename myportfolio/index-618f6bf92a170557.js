(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    3895: function(e, o, n) {
        "use strict";
        function a(e, o) {
            (null == o || o > e.length) && (o = e.length);
            for (var n = 0, a = Array(o); n < o; n++)
                a[n] = e[n];
            return a
        }
        function t(e) {
            return function(e) {
                if (Array.isArray(e))
                    return a(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, o) {
                if (e) {
                    if ("string" == typeof e)
                        return a(e, o);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n)
                        return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return a(e, o)
                }
            }(e) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        n.d(o, {
            Z: function() {
                return t
            }
        })
    },
    4002: function(e, o, n) {
        "use strict";
        n.d(o, {
            o: function() {
                return t
            }
        });
        let a ;
        function t(e, o) {
            return "string" != typeof e ? "" : (o || (e = e.toLowerCase()),
            e.replace(a, "").replace(/ /g, "-"))
        }
    },
    5728: function(e, o, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(6737)
        }
        ])
    },
    5755: function(e, o, n) {
        "use strict";
        var a = n(5893)
          , t = n(5675)
          , s = n.n(t);
        o.Z = function(e) {
            var o = e.project;
            return (0,
            a.jsxs)("div", {
                className: "bg-white dark:bg-black border border-light-gray dark:border-gray-800 rounded-lg px-4 pt-6 text-center overflow-hidden",
                children: [(0,
                a.jsxs)("div", {
                    className: "mb-3",
                    children: [(0,
                    a.jsx)("a", {
                        href: o.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0,
                        a.jsx)("h3", {
                            className: "text-black dark:text-white text-base lg:text-xl font-semibold transition duration-300 hover:text-primary",
                            children: o.name
                        })
                    }), (0,
                    a.jsx)("p", {
                        className: "text-gray text-xs",
                        children: o.stack
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "shadow-xl",
                    children: (0,
                    a.jsx)(s(), {
                        src: o.image,
                        alt: o.name,
                        layout: "responsive",
                        width: 100,
                        height: 60,
                        quality: 10,
                        placeholder: "blur",
                        blurDataURL: o.image,
                        className: "transition duration-300 transform translate-y-5 hover:translate-y-0 ",
                        loading: "lazy"
                    })
                })]
            })
        }
    },
    8458: function(e, o, n) {
        "use strict";
        var a = n(5893)
          , t = n(5788);
        o.Z = function(e) {
            var o, n, s, r = e.title, i = e.children, l = e.decoration, u = e.noSeparator;
            return (0,
            a.jsxs)("section", {
                className: "py-10 lg:py-16 px-3 ".concat(void 0 !== u && u || "border-b border-light-gray border-opacity-50 dark:border-gray-800"),
                children: [(n = (o = (void 0 === r ? "" : r).split(" ")).slice(0, -1).join(" "),
                s = o.pop(),
                (0,
                a.jsxs)("h2", {
                    className: "text-xl lg:text-2xl font-bold mb-0 text-center dark:text-white",
                    children: [n, (0,
                    a.jsxs)("span", {
                        className: "text-primary",
                        children: [" ", s]
                    })]
                })), (void 0 === l || l) && (0,
                a.jsx)(t.Z, {
                    type: "threeline"
                }), i]
            })
        }
    },
    1942: function(e, o, n) {
        "use strict";
        n.d(o, {
            J: function() {
                return u
            }
        });
        var a = n(5893)
          , t = n(9008)
          , s = n.n(t)
          , r = n(6850)
          , i = n(1163);
        function l(e) {
            var o = e.title
              , n = void 0 === o ? r.u2 : o
              , t = e.description
              , l = void 0 === t ? r.WL : t
              , u = e.keyword
              , d = e.image
              , c = void 0 === d ? "myportfolio/extras/logo.png" : d
              , p = (0,
            i.useRouter)()
              , h = "".concat(n, " | WEBDRAGON")
              , m = Array.isArray(c) ? c[0] : c;
            return (0,
            a.jsxs)(s(), {
                children: [(0,
                a.jsx)("title", {
                    children: h
                }), (0,
                a.jsx)("meta", {
                    name: "keywords",
                    content: "".concat(u, ", Ying Li, WEBDRAGON, WEBDRAGON, Ying.me")
                }), (0,
                a.jsx)("meta", {
                    name: "description",
                    content: l
                }), (0,
                a.jsx)("meta", {
                    property: "og:title",
                    content: h
                }), (0,
                a.jsx)("meta", {
                    property: "og:description",
                    content: l
                }), (0,
                a.jsx)("meta", {
                    property: " og:type",
                    content: "article"
                }), (0,
                a.jsx)("meta", {
                    property: "og:url",
                    content: "".concat(r.or).concat(p.asPath)
                }), Array.isArray(c) ? c.map(function(e) {
                    return (0,
                    a.jsx)("meta", {
                        property: "og:image",
                        content: "https://WEBDRAGON.me".concat(e)
                    }, "https://WEBDRAGON.me".concat(e))
                }) : (0,
                a.jsx)("meta", {
                    property: "og:image",
                    content: "https://WEBDRAGON.me".concat(c)
                }), (0,
                a.jsx)("meta", {
                    property: "og:image:secure_url",
                    content: "https://WEBDRAGON.me".concat(m)
                }), (0,
                a.jsx)("meta", {
                    property: "og:site_name",
                    content: "WEBDRAGON"
                }), (0,
                a.jsx)("meta", {
                    property: "og:locale",
                    content: "en"
                }), (0,
                a.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), (0,
                a.jsx)("meta", {
                    name: "twitter:title",
                    content: h
                }), (0,
                a.jsx)("meta", {
                    name: "twitter:description",
                    content: l
                }), (0,
                a.jsx)("meta", {
                    name: "twitter:image",
                    content: "https://WEBDRAGON.me".concat(m)
                }), (0,
                a.jsx)("meta", {
                    itemProp: "name",
                    content: h
                }), (0,
                a.jsx)("meta", {
                    itemProp: "image",
                    content: "https://WEBDRAGON.me".concat(m)
                })]
            })
        }
        o.Z = l;
        var u = function(e) {
            var o = e.title
              , n = void 0 === o ? r.u2 : o
              , t = e.description
              , u = void 0 === t ? r.WL : t
              , d = e.keyword
              , c = e.image
              , p = void 0 === c ? r.wK : c
              , h = e.date
              , m = (0,
            i.useRouter)()
              , g = new Date(h).toISOString()
              , y = Array.isArray(p) ? p[0] : p
              , w = {
                "@context": "https://schema.org",
                "@type": "Article",
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": "".concat(r.or).concat(m.asPath)
                },
                headline: n,
                image: "".concat(r.or).concat(y),
                datePublished: g,
                dateModified: g,
                author: {
                    "@type": "Person",
                    name: r.u2
                },
                publisher: {
                    "@type": "Person",
                    name: r.u2,
                    logo: {
                        "@type": "ImageObject",
                        url: "".concat(r.or).concat(r.wK)
                    }
                },
                description: u
            };
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(l, {
                    title: n,
                    description: u,
                    keyword: d,
                    image: p
                }), (0,
                a.jsxs)(s(), {
                    children: [(0,
                    a.jsx)("meta", {
                        property: "article:published_time",
                        content: g
                    }), (0,
                    a.jsx)("meta", {
                        property: "article:modified_time",
                        content: g
                    }), (0,
                    a.jsx)("link", {
                        rel: "canonical",
                        href: "".concat(r.or).concat(m.asPath)
                    }), (0,
                    a.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(w, null, 2)
                        }
                    })]
                })]
            })
        }
    },
    9438: function(e, o, n) {
        "use strict";
        n.d(o, {
            Rm: function() {
                return t
            },
            gT: function() {
                return r
            }
        });
        var a = n(9454);
        function t(e) {
            return e.sort(function(e, o) {
                var n, a;
                return n = e.date,
                n > (a = o.date) ? -1 : n < a ? 1 : 0
            }).filter(function(e) {
                return !1 === e.draft
            })
        }
        n(4002);
        var s = function(e, o) {
            var n = (0,
            a.Z)({}, e);
            return o.forEach(function(e) {
                delete n[e]
            }),
            n
        };
        function r(e) {
            return s(e, ["body", "_raw", "_id"])
        }
    },
    6737: function(e, o, n) {
        "use strict";
        n.r(o),
        n.d(o, {
            default: function() {
                return w
            }
        });
        var a = n(5893)
          , t = n(1664)
          , s = n.n(t)
          , r = n(6850)
          , i = n(8458)
          , l = n(5755)
          , u = n(9470)
          , d = n.n(u)
          , c = n(8413)
          , p = function() {
            return (0,
            a.jsx)("header", {
                className: "bg-hero-pattern bg-no-repeat bg-center px-3",
                children: (0,
                a.jsx)(d(), {
                    duration: 2e3,
                    children: (0,
                    a.jsxs)("div", {
                        className: "h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left",
                        children: [(0,
                        a.jsxs)("span", {
                            className: "text-xs md:text-sm text-black flex items-center",
                            children: [(0,
                            a.jsx)("span", {
                                className: "dark:text-white",
                                children: "Hi, I'm"
                            }), (0,
                            a.jsx)("span", {
                                className: "block w-6 lg:w-11 h-1 bg-primary ml-2 rounded-lg"
                            })]
                        }), (0,
                        a.jsx)("h1", {
                            className: "text-5xl lg:text-8xl font-bold text-white",
                            children: r.u2
                        }), (0,
                        a.jsxs)("h2", {
                            className: "text-xl lg:text-4xl font-bold text-primary mt-2",
                            children: ["[", r.i7, "]"]
                        }), (0,
                        a.jsx)("p", {
                            className: "text-xs lg:text-base text-white max-w-md tracking-widest mt-2 lg:mt-3 md:ml-1",
                            children: r.WL
                        }), (0,
                        a.jsx)(c.Z, {
                            title: "GET IN TOUCH",
                            href: "/contact"
                        })]
                    })
                })
            })
        }
          , h = n(1942)
          , m = n(3895)
          , g = JSON.parse('[{"title":"YingLi WEBDRAGON","date":"2021-10-31T00:00:00.000Z","tags":["Portfolio","Ying Li"]}]');
        (0,
        m.Z)(g);
        var y = n(9438)
          , w = function() {
            var e = (0,
            y.Rm)(g).slice(0, 6);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(h.Z, {}), (0,
                a.jsx)(p, {}), (0,
                a.jsx)(i.Z, {
                    title: "What I can do",
                    children: (0,
                    a.jsx)("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 lg:gap-4",
                        children: r.uZ.map(function(e) {
                            return (0,
                            a.jsxs)("div", {
                                className: "p-6 border rounded-lg border-light-gray dark:border-gray-800",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0,
                                    a.jsx)("svg", {
                                        className: "text-black dark:text-white",
                                        width: 40,
                                        height: 40,
                                        children: (0,
                                        a.jsx)("use", {
                                            xlinkHref: e.icon
                                        })
                                    }), (0,
                                    a.jsx)("h3", {
                                        className: "ml-4 text-sm font-semibold text-black dark:text-white lg:text-base",
                                        children: e.name
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "mt-3",
                                    children: (0,
                                    a.jsx)("p", {
                                        className: "text-xs lg:text-sm text-gray",
                                        children: e.description
                                    })
                                })]
                            }, e.id)
                        })
                    })
                }), (0,
                a.jsx)(i.Z, {
                    title: "Skills & Technology",
                    children: (0,
                    a.jsx)("div", {
                        className: "grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4",
                        children: r.nb.map(function(e) {
                            return (0,
                            a.jsxs)("div", {
                                className: "flex items-center px-3 py-3 border rounded-lg border-light-gray dark:border-gray-800",
                                children: [(0,
                                a.jsx)("svg", {
                                    className: "w-6 h-6 md:w-8 md:h-8 text-black dark:text-white",
                                    width: 30,
                                    height: 30,
                                    children: (0,
                                    a.jsx)("use", {
                                        xlinkHref: e.icon
                                    })
                                }), (0,
                                a.jsx)("h3", {
                                    className: "ml-2 text-xs font-medium text-black dark:text-white md:text-sm md:ml-3",
                                    children: e.name
                                })]
                            }, e.id)
                        })
                    })
                }), (0,
                a.jsxs)(i.Z, {
                    title: "Projects I have Completed",
                    children: [(0,
                    a.jsx)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6",
                        children: r.iV.IQ.filter(function(e) {
                            return e.top
                        }).map(function(e) {
                            return (0,
                            a.jsx)(l.Z, {
                                project: e
                            }, e.id)
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "text-center py-7",
                        children: (0,
                        a.jsx)(s(), {
                            href: "project.html/",
                            passHref: !0,
                            children: (0,
                            a.jsxs)("a", {
                                className: "text-xs transition duration-300 md:text-sm text-gray hover:text-primary",
                                children: ["Show all my projects ", (0,
                                a.jsx)("i", {
                                    className: "fas fa-chevron-right"
                                })]
                            })
                        })
                    })]
                }), (0,
                a.jsxs)]
            })
        }
    }
}, function(e) {
    e.O(0, [774, 888, 179], function() {
        return e(e.s = 5728)
    }),
    _N_E = e.O()
}
]);
