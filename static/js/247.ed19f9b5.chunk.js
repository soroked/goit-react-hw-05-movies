"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,r){r.r(t);var n=r(861),c=r(439),a=r(757),s=r.n(a),i=r(340),o=r(791),u=r(689),h=r(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,o.useState)([]),r=(0,c.Z)(t,2),a=r[0],l=r[1];(0,o.useEffect)((function(){p(e)}),[e]);var p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=8dcc6c3444f0b089c2f82be63d0dc0e1&language=en-US")});case 3:r=e.sent,l(r.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Cast"}),(0,h.jsx)("ul",{children:a.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"100",src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:""}),(0,h.jsx)("p",{children:e.name}),(0,h.jsx)("p",{children:e.character})]},e.id)}))})]})}}}]);
//# sourceMappingURL=247.ed19f9b5.chunk.js.map