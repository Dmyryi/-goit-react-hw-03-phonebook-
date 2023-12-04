import React, { Component } from 'react';
import PhoneBookForm from './PhoneBook/PhoneBookForm';
import PhoneBookList from './PhoneBook/PhoneBookList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (name, number) => {
    const normalizedFilter = name.toLowerCase();
    const isContactExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (isContactExist) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          width: '300px',
          padding: '20px',
          display: 'block',
        }}
      >
        <PhoneBookForm onSubmit={this.formSubmitHandler} />

        <Filter
          filter={filter}
          changeFilterHandler={this.changeFilterHandler}
        />
        <PhoneBookList
          visibleContacts={visibleContacts}
          onDeleteContact={this.deleteContactHandler}
        />
      </div>
    );
  }
}
export default App;
