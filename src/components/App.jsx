import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyles';

import { Section, H1 } from './App.styled';

export function App() {
  return (
    <Section>
      <H1>Phonebook</H1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Section>
  );
}
