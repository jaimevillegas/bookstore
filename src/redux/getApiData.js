import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appIdentifier = 'ZR7JHOkaLDPcvDdaWvVu';

export const getBookList = createAsyncThunk('booklist/getBooklist', async (URL, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${URL + appIdentifier}/books`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBook = createAsyncThunk('booklist/addBook', async ({ URL, newBook }, { rejectWithValue }) => {
  try {
    const data = await axios.post(`${URL + appIdentifier}/books`, newBook, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeBook = createAsyncThunk('bookList/removeBook', async ({ URL, itemId }, { rejectWithValue }) => {
  try {
    const data = await axios.delete(`${URL + appIdentifier}/books/${itemId}`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
