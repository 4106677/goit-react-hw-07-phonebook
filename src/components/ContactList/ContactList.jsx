import { Box, Contact, Button } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';

import { visibleContacts } from 'Redux/selectors';
import { deleteContact, fetchContacts } from 'Redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {contacts.map(({ id, name, phone }) => (
        <Contact key={id}>
          {name}: {phone}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            X
          </Button>
        </Contact>
      ))}
    </Box>
  );
};
