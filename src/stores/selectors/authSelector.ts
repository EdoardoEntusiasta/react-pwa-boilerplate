import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@stores/store';

export const selectAuth = (state: RootState) => state.auth;

export const authSelector = createSelector(selectAuth, (auth) => auth);

export const userSelector = createSelector(authSelector, (auth) => auth.user);

export const authErrorSelector = createSelector(authSelector, (auth) => auth.error);

export const authLoadingSelector = createSelector(authSelector, (auth) => auth.isLoading);
