import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          Search
          <input
            type="text"
            value={this.props.filter}
            onChange={this.props.changeFilterHandler}
          />
        </label>
      </div>
    );
  }
}
