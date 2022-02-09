import { useEffect } from 'react';

import './styles/globals.css'

// Lingui
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

import { defaultLocale, dynamicActivate } from '@helpers/i18n';

// Pages
import IndexPage from '@pages/index/';
import FetchPage from '@pages/fetch/';

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

  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale)
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <Routes>
          <Route path="/fetch" element={ <FetchPage /> }></Route> 
          <Route path="/" element={ <IndexPage /> } />
        </Routes>
      </div>
    </I18nProvider>
  );
}

export default App;
