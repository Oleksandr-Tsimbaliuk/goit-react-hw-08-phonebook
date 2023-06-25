import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://64877635beba62972790b08e.mockapi.io/api';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// GET @ /tasks
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/contact');
      const { data } = await axios.get('/tasks');
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// POST @ /tasks
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  // async (contact, thunkAPI) => {
  async (text, thunkAPI) => {
    try {
      // const response = await axios.post('/tasks', contact);
      const { data } = await axios.post('/tasks', { text });
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// DELETE @ /tasks/:id

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      // const response = await axios.delete(`/contact/${contactId}`);
      const { data } = await axios.delete(`/tasks/${contactId}`);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
