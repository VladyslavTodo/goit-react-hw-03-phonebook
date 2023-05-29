import PropTypes from 'prop-types';
import { Button } from './ContactsItem.styled';

const ContactItem = ({ deleteContact, filteredContacts }) => {
  return filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.name}:{contact.number}
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </li>
  ));
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
