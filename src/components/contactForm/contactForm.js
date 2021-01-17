import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputName = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
    const contactItem = { id: uuidv4(), name, number };

    if (name === '' || number === '') {
      return;
    }

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already is contact`);
    } else {
      this.setState({
        contacts: [...contacts, contactItem],
      });

      this.props.onSubmitForm([...contacts, contactItem]);
      this.resetInput();
    }
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputName}
          ></input>
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputName}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
