import React, { Component } from 'react';
import classNames from 'classnames';
// page 1
// total Pages 500

export default class Pagination extends Component {
  onClickNextPage = () => {
    this.props.nextPage();
  };

  onClickPrevPage = () => {
    this.props.prevPage();
  };

  render() {
    const classnames = classNames('page-item', {
      ' disabled': this.props.currentPage === 1,
    });
    const pageLinkDisabled = classNames('page-link', {
      ' disabled': this.props.currentPage === 1,
    });
    const nextPageDisabled = classNames('page-item', {
      ' disabled': this.props.currentPage === this.props.totalPages,
    });
    const prevPageLinkDisabled = classNames('page-link', {
      ' disabled': this.props.currentPage === this.props.totalPages,
    });
    return (
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          <li className={classnames}>
            <a
              className={pageLinkDisabled}
              href="#prev"
              tabIndex="-1"
              onClick={() => this.onClickPrevPage()}
            >
              Previous
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link disabled" href="#2">
              {this.props.currentPage} of {this.props.totalPages}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className={nextPageDisabled}>
            <a
              className={prevPageLinkDisabled}
              href="#next"
              onClick={() => this.onClickNextPage()}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
