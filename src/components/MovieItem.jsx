import React, { Component } from 'react';

export default class MovieItem extends Component {
  state = {
    wishlist: false,
  };
  onToggleWishListAdded = (movie) => {
    this.setState({ wishlist: true });
    this.props.addToWishList(movie);
  };

  onToggleAnWatch = (movie) => {
    this.setState({ wishlist: false });
    this.props.removeFromWishList(movie);
  };

  render() {
    const {
      movie,
      movie: { title, backdrop_path, poster_path, vote_average },
      removeMovie,
    } = this.props;

    const toggleButton = this.state.wishlist ? (
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => this.onToggleAnWatch(movie)}
      >
        remove
      </button>
    ) : (
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => this.onToggleWishListAdded(movie)}
      >
        Add to list
      </button>
    );
    let pathToImage = 'http://image.tmdb.org/t/p/w500';
    const poster = backdrop_path || poster_path || './no-poster.png';
    if (poster === './no-poster.png') {
      pathToImage = '';
    }
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`${pathToImage}${poster}`}
          alt={title}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1">Rating: {vote_average}</p>
          </div>
          <div className="d-flex justify-content-between">
            {toggleButton}
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => removeMovie(movie)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
