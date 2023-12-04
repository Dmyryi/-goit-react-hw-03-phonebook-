import React, { Component } from 'react';
import styles from './PhoneBookForm.module.css';

export default class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name } = evt.currentTarget;
    this.setState({ [name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label class={styles.label}>
          Number
          <input
            type="tel    "
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
