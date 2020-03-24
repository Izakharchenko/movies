import React, { Component } from 'react';
import classNames from 'classnames';

export default class Navbar extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.sortBy !== nextProps.sortBy) {
      return true;
    }
    return false;
  }

  onToggleActive = (e) => {
    const value = e.target.value;
    this.props.onChangeSort(value);
  };

  render() {
    const links = [
      {
        label: 'Popularity',
        value: 'popularity.desc',
      },
      {
        label: 'Revenue',
        value: 'revenue.desc',
      },
      {
        label: 'Average',
        value: 'vote_average.desc',
      },
    ];

    const tabs = links.map((item) => {
      const activeButton = classNames('btn', {
        'btn-primary': this.props.sortBy === item.value,
      });
      return (
        <button
          className={activeButton}
          type="button"
          key={item.label}
          onClick={(e) => this.onToggleActive(e)}
          value={item.value}
        >
          {item.label}
        </button>
      );
    });

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <a className="navbar-brand" href="/">
            Movie DB
          </a>
          <div className="navbar-nav">{tabs}</div>
        </nav>
      </div>
    );
  }
}
