(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),c=n(4),r=n.n(c),o=(n(15),n(5)),l=n(6),h=n(2),u=n(9),m=n(8),j=(n(16),n(7)),d=n.n(j),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).useMovieSearchEngine=function(e){e.preventDefault(),i.setState({movieSearchReturnValues:[]});var t=Object(h.a)(i),n="https://www.omdbapi.com/?apikey=b3315029&type=movie&s=";n+=i.state.movieSearchTerms,fetch(n).then((function(e){return e?e.json():Promise.reject(e)})).then((function(e){for(var n in e.Search)fetch("https://www.omdbapi.com/?apikey=b3315029&i="+e.Search[n].imdbID).then((function(e){return e?e.json():Promise.reject(e)})).then((function(e){t.state.movieSearchReturnValues.push({title:e.Title,year:e.Year,imdbURL:"https://www.imdb.com/title/"+e.imdbID,plot:e.Plot,rating:e.imdbRating,genre:e.Genre,director:e.Director,nominated:!1}),t.forceUpdate()}))}))},i.changemovieSearchTerms=function(e){i.setState({movieSearchTerms:e.target.value})},i.state={movieSearchReturnValues:[],movieSearchTerms:"",nominations:[]},i}return Object(l.a)(n,[{key:"nominationsFull",value:function(){return 5===this.state.nominations.length}},{key:"nominateMovie",value:function(e){var t=this;if(0===t.state.nominations.length)for(var n in t.state.nominations.push(e),t.state.movieSearchReturnValues)t.state.movieSearchReturnValues[n]===e&&(t.state.movieSearchReturnValues[n].nominated=!0);else if(t.state.nominations.length<5)for(var i in t.state.nominations.push(e),t.state.movieSearchReturnValues)t.state.movieSearchReturnValues[i]===e&&(t.state.movieSearchReturnValues[i].nominated=!0);else d.a.fire({icon:"error",iconColor:"#f27474",title:"Oops...",text:"Something went wrong!",background:"#ffffff"});t.forceUpdate()}},{key:"removeNomination",value:function(e){var t=this;for(var n in t.state.movieSearchReturnValues)t.state.movieSearchReturnValues[n]===e&&(t.state.movieSearchReturnValues[n].nominated=!1);for(var i in t.state.nominations)t.state.nominations[i]===e&&t.state.nominations.splice(i,1);t.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.nominationsFull(),n=[],a=[],s=function(){var t=e.state.movieSearchReturnValues[c];n.push(Object(i.jsx)("div",{className:"searchResultDiv",children:Object(i.jsxs)("ul",{className:"add",children:[Object(i.jsx)("button",{type:"submit",disabled:t.nominated,onClick:function(){return e.nominateMovie(t)},children:Object(i.jsx)("span",{children:"Nominate"})}),Object(i.jsxs)("h3",{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.imdbURL,children:t.title})," : ",t.genre]}),Object(i.jsxs)("p",{children:[" Director(s): ",t.director]}),Object(i.jsx)("div",{}),Object(i.jsxs)("b",{children:[" IMDb Rating: ",t.rating,"/10"]}),Object(i.jsxs)("p",{children:["(",t.year,")"]}),Object(i.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:t.plot}})]})},c))};for(var c in this.state.movieSearchReturnValues)s();var r=function(){var t=e.state.nominations[o];a.push(Object(i.jsx)("div",{className:"searchResultDiv",children:Object(i.jsxs)("ul",{className:"add",children:[Object(i.jsx)("button",{className:"otherButton",type:"submit",onClick:function(){return e.removeNomination(t)},children:"Remove"}),Object(i.jsx)("h3",{children:t.title}),Object(i.jsxs)("p",{children:[" Director(s): ",t.director]}),Object(i.jsxs)("p",{children:["(",t.year,")"]})]})},o))};for(var o in this.state.nominations)r();return Object(i.jsxs)("div",{className:"App",children:[t&&Object(i.jsx)("h5",{children:"Thanks for nominating your picks for the 2021 Shoppies!"}),Object(i.jsxs)("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 512 512",version:"1.1",viewBox:"0 0 512 512",xmlSpace:"preserve",children:[Object(i.jsx)("path",{fill:"#5C5560",d:"M512 256c0 46.049-12.152 89.255-33.447 126.589a253.796 253.796 0 01-5.256 8.808c-27.136 43.468-66.957 78.211-114.291 99.035a252.423 252.423 0 01-23.98 9.132 248.773 248.773 0 01-14.66 4.274 244.656 244.656 0 01-13.27 3.062A257.095 257.095 0 01256 512c-50.761 0-98.053-14.764-137.843-40.249-26.049-16.666-48.87-37.93-67.344-62.631C18.902 366.414 0 313.407 0 256 0 119.986 106.078 8.746 240.013.491c3.323-.209 6.656-.345 10.01-.418h.042C252.04.021 254.015 0 256 0c141.385 0 256 114.615 256 256z"}),Object(i.jsx)("path",{fill:"#3E8E33",d:"M478.553 382.589a253.796 253.796 0 01-5.256 8.808c-27.136 43.468-66.957 78.211-114.291 99.035a252.423 252.423 0 01-23.98 9.132 248.773 248.773 0 01-14.66 4.274l32.172-444.771 39.999 34.994 42.998 1.003 43.018 287.525z"}),Object(i.jsx)("path",{fill:"#7FC029",d:"M334.503 64.92c-10.909-28.421-28.212-53.77-56.592-49.246-6.51-8.631-15.475-14.858-27.847-15.6h-.042A38.22 38.22 0 00247.536 0c-2.529 0-5.036.167-7.523.491-44.116 5.778-80.238 61.67-93.8 125.555l-61.67 20.02-33.73 263.053c18.474 24.701 41.294 45.965 67.344 62.631l188.938 35.15a252.045 252.045 0 0027.93-7.335l17.512-440.498-18.034 5.853zm-168.74 54.784s8.777-27.638 20.773-52.642c12.006-24.994 51.001-61.001 73.007-47.501.658.408 1.296.846 1.902 1.317-25.266 11.661-45.108 38.922-55.223 85.692l-40.459 13.134zm110.978-36.029l-49.622 16.102s9.467-51.493 44.534-64.136c7.753 19.916 5.088 48.034 5.088 48.034zm18.296-5.945s0-23.291-7.795-44.377c17.983 1.881 27.209 21.138 31.754 36.603l-23.959 7.774z"}),Object(i.jsx)("path",{fill:"#FDFEFD",d:"M124.166 361.18c8.989 6.496 17.982 13.095 28.394 17.355 4.479 1.833 9.049 3.257 13.847 4.031 8.615 1.39 16.428.24 21.909-7.294 5.745-7.896 4.726-16.319.905-24.618-2.627-5.703-7.027-10.088-11.685-14.164a1345.165 1345.165 0 00-18.208-15.608c-19.831-16.728-25.971-38.429-22.478-63.301 6.09-43.363 38.335-74.347 81.947-79.659 18.748-2.284 37.14-2.101 55.257 4.017 4.067 1.373 4.472 3.029 3.173 6.77a2376.112 2376.112 0 00-16.485 49.19c-1.073 3.322-1.957 3.871-5.355 2.478-13.872-5.686-28.219-9.078-43.355-6.541-10.524 1.764-18.977 6.377-21.938 17.566-2.084 7.876.677 14.423 6.278 19.929 7.749 7.619 16.779 13.654 25.338 20.269 10.342 7.995 19.913 16.743 26.603 28.148 11.917 20.317 12.047 42.002 5.861 63.793-10.463 36.858-42.119 56.749-80.196 51.942-22.131-2.794-41.667-10.842-58.611-25.37-3.81-3.266-5.243-6.207-3.364-11.47 3.967-11.105 6.995-22.546 10.398-33.852.375-1.245.428-2.629 1.765-3.611z"})]}),Object(i.jsx)("h1",{children:"The Shoppies"}),Object(i.jsx)("h2",{children:"Movie Title:"}),Object(i.jsxs)("form",{action:"",children:[Object(i.jsx)("input",{type:"text",value:this.state.movieSearchTerms||"",onChange:this.changemovieSearchTerms,placeholder:"Search..."}),Object(i.jsx)("button",{type:"submit",onClick:this.useMovieSearchEngine,children:"Search"})]}),Object(i.jsx)("div",{}),Object(i.jsxs)("div",{className:"column1",children:[Object(i.jsx)("h4",{children:"Seach Results"}),n]}),Object(i.jsxs)("div",{className:"column2",children:[Object(i.jsx)("h4",{children:"Nominations"}),a]})]})}}]),n}(s.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.11038423.chunk.js.map