import { t } from '@lingui/macro';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { IUser } from 'interfaces/IUser';
import AuthService from '@services/AuthService';
import { LOCAL_STORAGE_KEYS } from '@utils/constants';
import LocalStorageManager from '@utils/LocalStorageManager';
import { CoreResponseModel } from '@core/models/Response.model';
import axios from 'axios';
import { AuthModel } from '@models/AuthModel';

interface IAuthState {
  isLoading: boolean;
  user: IUser | null;
  error: string | null;
}

const initialState: IAuthState = {
  isLoading: false,
  user: null,
  error: null,
};

export const authLoginRequest = createAsyncThunk(
  'auth/logInRequest',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }): Promise<IUser> => {
    try {
      const res = (await AuthService.create({ username, password })) as CoreResponseModel;

      if (res.hasErrors()) {
        // @ts-ignore
        throw new Error(res.getErrorString ? res.getErrorString() : 'Errore');
      }

      const userModel = res.getData();
      
      if (!userModel.hasToken()) {
        throw new Error(t`Qualcosa è andato storto`);
      }

      // it is for redux, redux wont to save only plain object
      const user: IUser = JSON.parse(userModel.toJSONString());

      LocalStorageManager.setItem(LOCAL_STORAGE_KEYS.USER, user);

      return user;
    } catch (error: any) {
      // TODO: handle real server errors in future
      console.log('error.message', error.message);
      throw rejectWithValue(error.message);
    }
  },
);

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth: (state) => {
      const user: IUser = new AuthModel(LocalStorageManager.getItem(LOCAL_STORAGE_KEYS.USER));

      if (user) {
        state.user = user;
        const tokenName = process.env.REACT_APP_TOKEN_HEADER_NAME ? process.env.REACT_APP_TOKEN_HEADER_NAME : 'token';
        axios.defaults.headers.common[tokenName] = user.token as string;
      }
    },
    resetAuthStore: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
      LocalStorageManager.removeItem(LOCAL_STORAGE_KEYS.USER);
      const tokenName = process.env.REACT_APP_TOKEN_HEADER_NAME ? process.env.REACT_APP_TOKEN_HEADER_NAME : 'token';
      axios.defaults.headers.common[tokenName] = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginRequest.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(authLoginRequest.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(authLoginRequest.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isLoading = false;
      });
  },
});

export const { checkAuth, resetAuthStore } = authReducer.actions;

export default authReducer.reducer;
