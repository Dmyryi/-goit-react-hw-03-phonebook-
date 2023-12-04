import React, { Component } from 'react';

export default class PhoneBookList extends Component {
  handleDelete = id => {
    this.props.onDeleteContact(id);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.visibleContacts.map(item => (
            <li key={item.id}>
              <p>
                {item.name}: {item.number}
              </p>
              <button onClick={() => this.handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
