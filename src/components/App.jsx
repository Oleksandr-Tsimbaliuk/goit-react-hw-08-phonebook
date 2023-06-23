import React, { useEffect } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form title="Phonebook"></Form>
      {contacts.length > 0 && !isLoading && <Filter></Filter>}
      <ContactsList contacts={contacts} title="Contacts"></ContactsList>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
