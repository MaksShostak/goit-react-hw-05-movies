"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[114],{5114:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,s,o,c,i=e(5861),u=e(885),p=e(7757),f=e.n(p),d=e(2791),l=e(6911),h=e(470),v=e(6039),m=e(168),x=e(6444),g=e(6731),w=x.ZP.div(r||(r=(0,m.Z)(["\n  margin-bottom: 20px;\n  padding: 5px 20px;\n"]))),Z=x.ZP.h1(a||(a=(0,m.Z)(["\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 500ms ease-out;\n  &:hover {\n    color: crimson;\n    transform: scale(1.02);\n  }\n"]))),b=x.ZP.ul(s||(s=(0,m.Z)(["\n  padding: 5px 20px;\n"]))),y=x.ZP.li(o||(o=(0,m.Z)(["\n  padding: 5px;\n  border-bottom: 1px solid gray;\n  box-shadow: 2px 2px 2px grey;\n"]))),k=(0,x.ZP)(g.OL)(c||(c=(0,m.Z)(["\n  color: rgb(97, 79, 7);\n  text-decoration: none;\n  font-weight: 700;\n\n  transition: all 500ms ease-out;\n  &.active {\n    color: crimson;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: crimson;\n  }\n"]))),_=e(184),j=function(){var n=(0,d.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(!1),s=(0,u.Z)(a,2),o=s[0],c=s[1],p=(0,d.useState)(!1),m=(0,u.Z)(p,2),x=m[0],g=m[1],j=(0,h.TH)();return console.log(j),(0,d.useEffect)((function(){(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,(0,l.vL)();case 4:t=n.sent,r(t),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),g(!0),console.error(n.t0);case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})))()}),[]),(0,_.jsxs)(w,{children:[(0,_.jsx)(Z,{children:"Trending this week"}),o&&(0,_.jsx)(v.Z,{}),e.length>0&&(0,_.jsx)(b,{children:e.map((function(n){return(0,_.jsx)(y,{children:(0,_.jsxs)(k,{to:"".concat("/home"===j.pathname?"/movies/":"").concat(n.id),state:{from:j},children:[n.title||n.name," "]})},n.id)}))}),x&&(0,_.jsx)("p",{children:"Something went wrong, please reload the page and try again"})]})}},6911:function(n,t,e){e.d(t,{MW:function(){return g},Ue:function(){return m},V0:function(){return d},vL:function(){return p},vz:function(){return h}});var r=e(5861),a=e(7757),s=e.n(a),o=e(4569),c=e.n(o);c().defaults.baseURL="https://api.themoviedb.org/3/",c().defaults.params={api_key:"f52fb5605503f66e762d80f647488744"};var i="movie",u="week";function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/".concat(i,"/").concat(u),{params:{page:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t),{params:{movie_id:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits"),{params:{movie_id:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews"),{params:{movie_id:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=114.53f64755.chunk.js.map