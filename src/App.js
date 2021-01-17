import React, { Component } from 'react';
import s from './App.module.css';

import ContactForm from './components/contactForm';
import ContactList from './components/contactList';
import Filter from './components/filter';

class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    filter: '',
  };

  handleTakeSubmitForm = data => {
    this.setState({ contacts: data });
  };

  handleFindContactsFromInput = data => {
    const { contacts } = this.state;
    this.setState({ filter: data });
    const result = contacts.find(el =>
      el.name.toLowerCase().includes(data.toLowerCase()),
    );
    console.log(result);
  };

  handleDeleteContact = e => {
    const { contacts } = this.state;
    const { id } = e.target;
    const resultContacts = contacts.filter(item => item.id !== id);
    this.setState({
      contacts: resultContacts,
    });
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleTakeSubmitForm} />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleFindContactsFromInput} />
        <ContactList
          items={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
