import { Box, Contact, Button } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'Redux/contactSlice';
import { getContacts } from 'Redux/contactSlice';
import { getFilters } from 'Redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
    );
  };

  return (
    <Box>
      {filterContacts().map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(removeContact(id))}>
            X
          </Button>
        </Contact>
      ))}
    </Box>
  );
};
