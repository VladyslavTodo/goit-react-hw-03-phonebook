import { Component } from 'react';
import { Base } from './App.styled';
import { nanoid } from 'nanoid';
import ContacsForm from 'components/ContactForm/ContactsForm';
import ContactItem from 'components/ContactsItem/ContactsItem';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parse = JSON.parse(localStorage.getItem('contacts'));
    if (parse && parse.length > 0) {
      this.setState({
        contacts: parse,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubmit = (name, number) => {
    const { contacts } = this.state;

    const findSomeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findSomeName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <Base>
        <h2>Phonebook</h2>
        <ContacsForm handleSubmit={this.handleSubmit} />
        {this.state.contacts.length > 0 && (
          <>
            <Filter
              filter={filter}
              handleFilterChange={this.handleFilterChange}
            />
            <h2>Contacts</h2>
            <ul>
              <ContactItem
                id={this.id}
                name={this.name}
                number={this.number}
                filteredContacts={filteredContacts}
                deleteContact={this.deleteContact}
              />
            </ul>
          </>
        )}
      </Base>
    );
  }
}

export default App;
