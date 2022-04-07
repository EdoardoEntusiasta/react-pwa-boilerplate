import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ENVIRONMENT } from '@helpers/constants';
import counterReducer from '@stores/reducers/counterReducer';
import authReducer from '@stores/reducers/authReducer';

const store = configureStore({
  devTools: ENVIRONMENT.development,
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
