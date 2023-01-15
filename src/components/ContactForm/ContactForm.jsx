import { nanoid } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';

import { Form, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const addedContact = event.target.name.value;

    if (
      contacts.find(
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      )
    ) {
      Report.warning('Warning', `${name} already exists`, 'Okay');

      event.target.reset();
      return;
    }

    const id = nanoid(4);
    dispatch(addContact({ name, number, id }));
    event.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          onChange={onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
