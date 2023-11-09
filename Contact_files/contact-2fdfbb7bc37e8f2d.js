(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[335], {
  8367: function(t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
          return r(6741)
      }
      ])
  },
  7427: function(t, e, r) {
      "use strict";
      var n = r(5893)
        , o = r(8458);
      e.Z = function(t) {
          var e = t.title
            , r = t.description
            , a = t.highlightWord
            , s = void 0 !== a && a
            , i = t.noHighlight
            , c = void 0 !== i && i;
          return (0,
          n.jsx)(o.Z, {
              decoration: !1,
              noSeparator: !0,
              children: (0,
              n.jsxs)("div", {
                  className: "mt-10 lg:mt-20 bg-light-gray dark:bg-gray-700 dark:bg-opacity-30 p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center",
                  children: [function() {
                      if (c)
                          return (0,
                          n.jsx)("h1", {
                              className: "text-4xl lg:text-6xl font-bold text-black dark:text-white",
                              children: e
                          });
                      if (s) {
                          var t = e.split(" ")
                            , r = t[0]
                            , o = t.slice(1, t.length).join(" ");
                          return (0,
                          n.jsxs)("h1", {
                              className: "text-4xl lg:text-6xl font-bold text-black dark:text-white",
                              children: [(0,
                              n.jsx)("span", {
                                  className: "text-primary",
                                  children: "".concat(r, " ")
                              }), o]
                          })
                      }
                      var a = e.split("")
                        , i = a[0]
                        , l = a.slice(1, a.length).join("");
                      return (0,
                      n.jsxs)("h1", {
                          className: "text-4xl lg:text-6xl font-bold text-black dark:text-white",
                          children: [(0,
                          n.jsx)("span", {
                              className: "text-primary",
                              children: i
                          }), l]
                      })
                  }(), r && (0,
                  n.jsx)("p", {
                      className: "text-xs lg:text-sm text-gray max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto",
                      children: r
                  })]
              })
          })
      }
  },
  8458: function(t, e, r) {
      "use strict";
      var n = r(5893)
        , o = r(5788);
      e.Z = function(t) {
          var e, r, a, s = t.title, i = t.children, c = t.decoration, l = t.noSeparator;
          return (0,
          n.jsxs)("section", {
              className: "py-10 lg:py-16 px-3 ".concat(void 0 !== l && l || "border-b border-light-gray border-opacity-50 dark:border-gray-800"),
              children: [(r = (e = (void 0 === s ? "" : s).split(" ")).slice(0, -1).join(" "),
              a = e.pop(),
              (0,
              n.jsxs)("h2", {
                  className: "text-xl lg:text-2xl font-bold mb-0 text-center dark:text-white",
                  children: [r, (0,
                  n.jsxs)("span", {
                      className: "text-primary",
                      children: [" ", a]
                  })]
              })), (void 0 === c || c) && (0,
              n.jsx)(o.Z, {
                  type: "threeline"
              }), i]
          })
      }
  },
  1942: function(t, e, r) {
      "use strict";
      r.d(e, {
          J: function() {
              return l
          }
      });
      var n = r(5893)
        , o = r(9008)
        , a = r.n(o)
        , s = r(6850)
        , i = r(1163);
      function c(t) {
          var e = t.title
            , r = void 0 === e ? s.u2 : e
            , o = t.description
            , c = void 0 === o ? s.WL : o
            , l = t.keyword
            , d = t.image
            , m = void 0 === d ? "/extras/logo.png" : d
            , x = (0,
          i.useRouter)()
            , p = "".concat(r, " | WEBDRAGON")
            , h = Array.isArray(m) ? m[0] : m;
          return (0,
          n.jsxs)(a(), {
              children: [(0,
              n.jsx)("title", {
                  children: p
              }), (0,
              n.jsx)("meta", {
                  name: "keywords",
                  content: "".concat(l, ", ayush munot, WEBDRAGON, WEBDRAGON, WEBDRAGON.me")
              }), (0,
              n.jsx)("meta", {
                  name: "description",
                  content: c
              }), (0,
              n.jsx)("meta", {
                  property: "og:title",
                  content: p
              }), (0,
              n.jsx)("meta", {
                  property: "og:description",
                  content: c
              }), (0,
              n.jsx)("meta", {
                  property: " og:type",
                  content: "article"
              }), (0,
              n.jsx)("meta", {
                  property: "og:url",
                  content: "".concat(s.or).concat(x.asPath)
              }), Array.isArray(m) ? m.map(function(t) {
                  return (0,
                  n.jsx)("meta", {
                      property: "og:image",
                      content: "https://WEBDRAGON.me".concat(t)
                  }, "https://WEBDRAGON.me".concat(t))
              }) : (0,
              n.jsx)("meta", {
                  property: "og:image",
                  content: "https://WEBDRAGON.me".concat(m)
              }), (0,
              n.jsx)("meta", {
                  property: "og:image:secure_url",
                  content: "https://WEBDRAGON.me".concat(h)
              }), (0,
              n.jsx)("meta", {
                  property: "og:site_name",
                  content: "WEBDRAGON"
              }), (0,
              n.jsx)("meta", {
                  property: "og:locale",
                  content: "en"
              }), (0,
              n.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary"
              }), (0,
              n.jsx)("meta", {
                  name: "twitter:title",
                  content: p
              }), (0,
              n.jsx)("meta", {
                  name: "twitter:description",
                  content: c
              }), (0,
              n.jsx)("meta", {
                  name: "twitter:image",
                  content: "https://WEBDRAGON.me".concat(h)
              }), (0,
              n.jsx)("meta", {
                  itemProp: "name",
                  content: p
              }), (0,
              n.jsx)("meta", {
                  itemProp: "image",
                  content: "https://WEBDRAGON.me".concat(h)
              })]
          })
      }
      e.Z = c;
      var l = function(t) {
          var e = t.title
            , r = void 0 === e ? s.u2 : e
            , o = t.description
            , l = void 0 === o ? s.WL : o
            , d = t.keyword
            , m = t.image
            , x = void 0 === m ? s.wK : m
            , p = t.date
            , h = (0,
          i.useRouter)()
            , g = new Date(p).toISOString()
            , u = Array.isArray(x) ? x[0] : x
            , y = {
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "".concat(s.or).concat(h.asPath)
              },
              headline: r,
              image: "".concat(s.or).concat(u),
              datePublished: g,
              dateModified: g,
              author: {
                  "@type": "Person",
                  name: s.u2
              },
              publisher: {
                  "@type": "Person",
                  name: s.u2,
                  logo: {
                      "@type": "ImageObject",
                      url: "".concat(s.or).concat(s.wK)
                  }
              },
              description: l
          };
          return (0,
          n.jsxs)(n.Fragment, {
              children: [(0,
              n.jsx)(c, {
                  title: r,
                  description: l,
                  keyword: d,
                  image: x
              }), (0,
              n.jsxs)(a(), {
                  children: [(0,
                  n.jsx)("meta", {
                      property: "article:published_time",
                      content: g
                  }), (0,
                  n.jsx)("meta", {
                      property: "article:modified_time",
                      content: g
                  }), (0,
                  n.jsx)("link", {
                      rel: "canonical",
                      href: "".concat(s.or).concat(h.asPath)
                  }), (0,
                  n.jsx)("script", {
                      type: "application/ld+json",
                      dangerouslySetInnerHTML: {
                          __html: JSON.stringify(y, null, 2)
                      }
                  })]
              })]
          })
      }
  },
  6741: function(t, e, r) {
      "use strict";
      r.r(e);
      var n = r(5893)
        , o = r(6850)
        , a = r(7427)
        , s = r(8458)
        , i = r(1942);
      e.default = function() {
          return (0,
          n.jsxs)(n.Fragment, {
              children: [(0,
              n.jsx)(i.Z, {
                  title: o.PX.TN,
                  description: o.PX.WL
              }), (0,
              n.jsx)(a.Z, {
                  title: o.PX.TN,
                  description: o.PX.WL
              }), (0,
              n.jsx)(s.Z, {
                  title: "Connect With Me",
                  children: (0,
                  n.jsx)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4",
                      children: o.PX.IQ.map(function(t) {
                          return (0,
                          n.jsxs)("a", {
                              href: t.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "flex flex-col items-center border border-light-gray dark:border-gray-800 rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg",
                              children: [(0,
                              n.jsx)("div", {
                                  className: "w-12 h-12 rounded-full border border-primary grid place-items-center",
                                  children: (0,
                                  n.jsx)("i", {
                                      className: "".concat(t.icon, " text-xl dark:text-white")
                                  })
                              }), (0,
                              n.jsx)("h3", {
                                  className: "text-black dark:text-white font-semibold mt-3",
                                  children: t.name
                              }), (0,
                              n.jsx)("p", {
                                  className: "text-gray text-xs md:text-sm",
                                  children: t.username
                              })]
                          }, t.id)
                      })
                  })
              })]
          })
      }
  }
}, function(t) {
  t.O(0, [774, 888, 179], function() {
      return t(t.s = 8367)
  }),
  _N_E = t.O()
}
]);
