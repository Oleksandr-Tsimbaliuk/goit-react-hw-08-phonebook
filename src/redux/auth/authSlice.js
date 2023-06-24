import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        // state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        // state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        // state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducer: {},
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
