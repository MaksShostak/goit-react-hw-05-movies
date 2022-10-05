"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,s,i,o,c,u=e(5861),p=e(885),f=e(7757),l=e.n(f),h=e(2791),d=e(6039),x=e(6911),m=e(470),v=e(168),g=e(6444),w=g.ZP.div(r||(r=(0,v.Z)(["\n  margin-bottom: 20px;\n  padding: 5px;\n"]))),b=g.ZP.h2(a||(a=(0,v.Z)(["\n  padding: 5px 20px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 500ms ease-out;\n  &:hover {\n    color: crimson;\n    transform: scale(1.02);\n  }\n  border-bottom: 3px solid gray;\n  box-shadow: 2px 2px 2px grey;\n"]))),Z=g.ZP.ul(s||(s=(0,v.Z)(["\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n"]))),y=g.ZP.li(i||(i=(0,v.Z)(["\n  margin-bottom: 20px;\n  color: black;\n  font-size: 24px;\n  font-weight: 500;\n  width: 200px;\n"]))),j=g.ZP.p(o||(o=(0,v.Z)(["\n  margin-top: 10px;\n  color: #59072b;\n  font-size: 20px;\n  font-weight: 600;\n"]))),k=g.ZP.span(c||(c=(0,v.Z)(["\n  display: block;\n  margin-top: 10px;\n  color: #59072b;\n  font-size: 20px;\n  font-weight: 600;\n"]))),_=e(184),P=function(){var n=(0,h.useState)(null),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,h.useState)(!1),s=(0,p.Z)(a,2),i=s[0],o=s[1],c=(0,h.useState)(!1),f=(0,p.Z)(c,2),v=f[0],g=f[1],P=(0,m.UO)().movieId;return(0,h.useEffect)((function(){(0,u.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,x.Ue)(P);case 4:t=n.sent,r(t),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),g(!0),console.error(n.t0);case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})))()}),[P]),e?(0,_.jsxs)(w,{children:[(0,_.jsx)(b,{children:"Cast"}),i&&(0,_.jsx)(d.Z,{}),v&&(0,_.jsx)("p",{children:"Something went wrong, please reload the page and try again"}),null!==e&&void 0!==e&&e.length?(0,_.jsx)(Z,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,_.jsxs)(y,{children:[(0,_.jsxs)(j,{children:[" ",(0,_.jsx)(k,{children:" Author:"})," ",n.character.toUpperCase()]}),(0,_.jsxs)(j,{children:[" ",(0,_.jsx)(k,{children:"Actor name:"})," ",n.name]}),(0,_.jsx)(j,{children:n.profile_path?(0,_.jsx)("img",{src:"http://image.tmdb.org/t/p/w185".concat(n.profile_path),alt:""}):(0,_.jsx)("img",{src:"https://www.drupal.org/files/project-images/broken-image.jpg",alt:"",width:185})})]},n.id)}))}):(0,_.jsx)("p",{children:"We don't have any cast information for this movie"})]}):null}},6911:function(n,t,e){e.d(t,{MW:function(){return g},Ue:function(){return m},V0:function(){return l},vL:function(){return p},vz:function(){return d}});var r=e(5861),a=e(7757),s=e.n(a),i=e(4569),o=e.n(i);o().defaults.baseURL="https://api.themoviedb.org/3/",o().defaults.params={api_key:"f52fb5605503f66e762d80f647488744"};var c="movie",u="week";function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/".concat(c,"/").concat(u),{params:{page:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t),{});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits"),{});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews"),{});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.57b14f18.chunk.js.map