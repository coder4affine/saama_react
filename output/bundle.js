!(function (e) {
  var o = {};
  function r(n) {
    if (o[n]) return o[n].exports;
    var t = (o[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = e),
    (r.c = o),
    (r.d = function (e, o, n) {
      r.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function (e, o) {
      if ((1 & o && (e = r(e)), 8 & o)) return e;
      if (4 & o && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & o && 'string' != typeof e)
      )
        for (let t in e)
          r.d(
            n,
            t,
            function (o) {
              return e[o];
            }.bind(null, t),
          );
      return n;
    }),
    (r.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(o, 'a', o), o;
    }),
    (r.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (r.p = ''),
    r((r.s = 0));
})([
  function (e, o, r) {
    'use strict';

  r.r(o); console.log('greet me'), console.log('hello'), console.log('world'), console.log('how are you?'), console.log('how are you?'), console.log('how are you?'), console.log('how are you?'); 
}]));
