import './styles/globals.css'

import { useMount } from '@hooks';

// Lingui
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

import { defaultLocale, dynamicActivate } from '@helpers/i18n';

// Pages
import IndexPage from '@pages/index/';
import FetchPage from '@pages/fetch/';
import LoginPage from '@pages/login/';

import PrivateRoutes from '@layouts/private';
import PublicRoutes from '@layouts/public';

import { useAppDispatch } from '@stores/hooks';
import { LOCAL_STORAGE_KEYS } from '@utils/constants';
import LocalStorageManager from '@utils/LocalStorageManager';

import { checkAuth } from '@stores/reducers/authReducer';

// Router
import {
  Routes,
  Route
} from "react-router-dom";


/**
 * App
 * All ROUTES of the app are here
 * Using react-router v6
 * https://reactrouter.com/docs/en/v6/getting-started/tutorial
 */
function App() {

  const dispatch = useAppDispatch();

  useMount(() => {
    const locale = LocalStorageManager.getItem(LOCAL_STORAGE_KEYS.LOCALE);

    // With this method we dynamically load the catalogs
    dynamicActivate(locale || defaultLocale, !locale);
    dispatch(checkAuth());
  });

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/fetch" element={ <FetchPage /> }></Route>
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={ <IndexPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
        </Route>
        </Routes>
      </div>
    </I18nProvider>
  );
}

export default App;
