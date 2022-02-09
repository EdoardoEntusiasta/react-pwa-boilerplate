import '../styles/globals.css'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'



import { Provider } from 'react-redux';
import authStore from '@stores/store';


function MyApp() {

  return (
    <Provider store={authStore}>
      <I18nProvider i18n={i18n}>
        
      </I18nProvider>
    </Provider>
  );
}

export default MyApp
