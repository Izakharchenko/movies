(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),i=a(9),c=a(1),l=a(2),m=a(4),u=a(3),p=a(5),v="http://api.themoviedb.org/3",g="3f4ca4f3a9750da53450646ced312397",d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={wishlist:!1},a.onToggleWishListAdded=function(e){a.setState({wishlist:!0}),a.props.addToWishList(e)},a.onToggleAnWatch=function(e){a.setState({wishlist:!1}),a.props.removeFromWishList(e)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.movie,r=n.title,o=n.backdrop_path,i=n.poster_path,c=n.vote_average,l=t.removeMovie,m=this.state.wishlist?s.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return e.onToggleAnWatch(a)}},"remove"):s.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:function(){return e.onToggleWishListAdded(a)}},"Add to list"),u="http://image.tmdb.org/t/p/w500",p=o||i||"./no-poster.png";return"./no-poster.png"===p&&(u=""),s.a.createElement("div",{className:"card"},s.a.createElement("img",{className:"card-img-top",src:"".concat(u).concat(p),alt:r}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"card-title"},r),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("p",{className:"mb-1"},"Rating: ",c)),s.a.createElement("div",{className:"d-flex justify-content-between"},m,s.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return l(a)}},"Delete"))))}}]),t}(n.Component),h=a(6),b=a.n(h),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).onToggleActive=function(e){var t=e.target.value;a.props.onChangeSort(t)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.sortBy!==e.sortBy}},{key:"render",value:function(){var e=this,t=[{label:"Popularity",value:"popularity.desc"},{label:"Revenue",value:"revenue.desc"},{label:"Average",value:"vote_average.desc"}].map(function(t){var a=b()("btn",{"btn-primary":e.props.sortBy===t.value});return s.a.createElement("button",{className:a,type:"button",key:t.label,onClick:function(t){return e.onToggleActive(t)},value:t.value},t.label)});return s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},s.a.createElement("a",{className:"navbar-brand",href:"/"},"Movie DB"),s.a.createElement("div",{className:"navbar-nav"},t)))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).onClickNextPage=function(){a.props.nextPage()},a.onClickPrevPage=function(){a.props.prevPage()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=b()("page-item",{" disabled":1===this.props.currentPage}),a=b()("page-link",{" disabled":1===this.props.currentPage}),n=b()("page-item",{" disabled":this.props.currentPage===this.props.totalPages}),r=b()("page-link",{" disabled":this.props.currentPage===this.props.totalPages});return s.a.createElement("nav",{"aria-label":"..."},s.a.createElement("ul",{className:"pagination justify-content-center"},s.a.createElement("li",{className:t},s.a.createElement("a",{className:a,href:"#prev",tabIndex:"-1",onClick:function(){return e.onClickPrevPage()}},"Previous")),s.a.createElement("li",{className:"page-item disabled"},s.a.createElement("a",{className:"page-link disabled",href:"#2"},this.props.currentPage," of ",this.props.totalPages,s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:n},s.a.createElement("a",{className:r,href:"#next",onClick:function(){return e.onClickNextPage()}},"Next"))))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).removeMovie=function(t){var a=e.state.movies.filter(function(e){return e.id!==t.id});e.setState({movies:a})},e.removeFromWishList=function(t){var a=e.state.wishlistMovies.filter(function(e){return e.id!==t.id});e.setState({wishlistMovies:a})},e.addToWishList=function(t){e.setState(function(e){var a=e.wishlistMovies;return{wishlistMovies:[t].concat(Object(i.a)(a))}})},e.getData=function(){var t=e.state,a=t.sortBy,n=t.page;fetch("".concat(v,"/discover/movie/?api_key=").concat(g,"&sort_by=").concat(a,"&page=").concat(n)).then(function(e){return e.json()}).then(function(t){e.setState({movies:t.results,page:t.page,totalPages:t.total_pages})}).catch(function(e){return console.log(e)})},e.onChangeSort=function(t){e.setState({sortBy:t})},e.nextPage=function(){e.setState({page:e.state.page+1})},e.prevPage=function(){e.setState({page:e.state.page-1})},e.state={movies:[],page:1,total_pages:1,wishlistMovies:[],sortBy:"popularity.desc"},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.state.sortBy!==t.sortBy&&this.getData(),this.state.page!==t.page&&this.getData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.movies,n=t.wishlistMovies,r=t.sortBy,o=t.page,i=t.totalPages,c=n.length,l=n.map(function(e){return s.a.createElement("li",{className:" list-group-item d-flex justify-content-between align-items-center",key:e.id},e.title,s.a.createElement("span",{className:"badge badge-primary badge-pill"},e.vote_average))}),m=a.map(function(t){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 mb-3",key:t.id},s.a.createElement(d,{movie:t,removeMovie:e.removeMovie,addToWishList:e.addToWishList,removeFromWishList:e.removeFromWishList}))});return s.a.createElement("div",{className:"application"},s.a.createElement(f,{sortBy:r,onChangeSort:this.onChangeSort}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-md-3 col-lg-3"},s.a.createElement("h4",null,"Will Watch: ",c),s.a.createElement("ul",{className:"list-group mb-3"},s.a.createElement("ul",{className:"list-group"},l))),s.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-9"},s.a.createElement("div",{className:"row"},m),s.a.createElement(y,{currentPage:o,totalPages:i,nextPage:this.nextPage,prevPage:this.prevPage})))))}}]),t}(n.Component);a(15);o.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.dc4fe72a.chunk.js.map