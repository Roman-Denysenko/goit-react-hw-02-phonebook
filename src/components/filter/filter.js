import React, { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilter = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.onFilter(value);
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <label>
          Find contact by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleFilter}
          ></input>
        </label>
      </>
    );
  }
}

export default Filter;
