(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),i=n.n(r),o=(n(26),n(27),"62e9afa9b26ec1658e4f7c572663a19b"),s={fetchTrending:"/trending/all/week?api_key=".concat(o,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(o,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(o,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(o,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(o,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(o,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(o,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(o,"&with_genres=99")},l=n(4),d=n.n(l),u=n(6),f=n(5),b=n(18),v=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(46),n(19)),p=n(0);var j=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,r=Object(c.useState)([]),i=Object(f.a)(r,2),o=i[0],s=i[1],l=Object(c.useState)(""),b=Object(f.a)(l,2),j=b[0],m=b[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var g=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=4;break}m(""),e.next=9;break;case 4:if(n){e.next=9;break}return e.next=7,v.get("/movie/".concat(t.id,"/videos?api_key=fb34530271b349314af0de263d16ab5a"));case 7:a=e.sent,m(null===(c=a.data.results[0])||void 0===c?void 0:c.key);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{className:"row__posters",children:o.map((function(e){return null!==e.backdrop_path&&Object(p.jsx)("img",{onClick:function(){return g(e,a)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),j&&Object(p.jsx)(h.a,{videoId:j,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};n(61);var m=function(){var e,t,n=Object(c.useState)([]),a=Object(f.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(s.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(null===r||void 0===r?void 0:r.backdrop_path,")"),backgroundPosition:"center center"},children:[Object(p.jsxs)("div",{className:"banner__contents",children:[Object(p.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(p.jsx)("button",{className:"banner__button",children:"Play"}),Object(p.jsx)("button",{className:"banner__button",children:"My List"}),Object(p.jsx)("h1",{className:"banner__description",children:(e=null===r||void 0===r?void 0:r.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(p.jsx)("div",{className:"banner__fadeBottom"})]})};n(62);var g=function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(p.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(p.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(p.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})};var _=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{}),Object(p.jsx)(m,{}),Object(p.jsx)(j,{title:"NETFLIX ORIGNALS",fetchUrl:s.fetchNetflixOriginals,isLargeRow:!0}),Object(p.jsx)(j,{title:"Trending Now",fetchUrl:s.fetchTrending}),Object(p.jsx)(j,{title:"Top Rated",fetchUrl:s.fetchTopRated}),Object(p.jsx)(j,{title:"Action Movies",fetchUrl:s.fetchActionMovies}),Object(p.jsx)(j,{title:"Comedy Movies",fetchUrl:s.fetchComedyMovies}),Object(p.jsx)(j,{title:"Horror Movies",fetchUrl:s.fetchHorrorMovies}),Object(p.jsx)(j,{title:"Romance Movies",fetchUrl:s.fetchRomanceMovies}),Object(p.jsx)(j,{title:"Documentaries",fetchUrl:s.fetchDocumentaries})]})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5a0fd49c.chunk.js.map