import React, { Component } from 'react';
// import moviesData from '../moviesData';
import { API_URL, API_KEY_3 } from '../services/movie-service';
import MovieItem from './MovieItem';
import Navbar from './navbar';
import Pagination from './pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      total_pages: 1,
      wishlistMovies: [],
      sortBy: 'popularity.desc',
    };
  }

  removeMovie = (item) => {
    const updateMovie = this.state.movies.filter(function(element) {
      return element.id !== item.id;
    });
    this.setState({
      movies: updateMovie,
    });
  };
  removeFromWishList = (item) => {
    const newWishList = this.state.wishlistMovies.filter(function(element) {
      return element.id !== item.id;
    });
    this.setState({
      wishlistMovies: newWishList,
    });
  };

  addToWishList = (film) => {
    this.setState(({ wishlistMovies }) => {
      return {
        wishlistMovies: [film, ...wishlistMovies],
      };
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortBy !== prevState.sortBy) {
      this.getData();
    }
    if (this.state.page !== prevState.page) {
      this.getData();
    }
  }

  getData = () => {
    const { sortBy, page } = this.state;

    fetch(
      `${API_URL}/discover/movie/?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          page: data.page,
          totalPages: data.total_pages,
        });
      })
      .catch((e) => console.log(e));
  };

  onChangeSort = (value) => {
    this.setState({
      sortBy: value,
    });
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const { movies, wishlistMovies, sortBy, page, totalPages } = this.state;
    const countWishlistMovies = wishlistMovies.length;

    const wishFilms = wishlistMovies.map((el) => {
      return (
        <li
          className="
          list-group-item
          d-flex
          justify-content-between
          align-items-center"
          key={el.id}
        >
          {el.title}
          <span className="badge badge-primary badge-pill">
            {el.vote_average}
          </span>
        </li>
      );
    });

    const films = movies.map((element) => {
      return (
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3" key={element.id}>
          <MovieItem
            movie={element}
            removeMovie={this.removeMovie}
            addToWishList={this.addToWishList}
            removeFromWishList={this.removeFromWishList}
          />
        </div>
      );
    });

    return (
      <div className="application">
        <Navbar sortBy={sortBy} onChangeSort={this.onChangeSort} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h4>Will Watch: {countWishlistMovies}</h4>
              <ul className="list-group mb-3">
                <ul className="list-group">{wishFilms}</ul>
              </ul>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
              <div className="row">{films}</div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                nextPage={this.nextPage}
                prevPage={this.prevPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
