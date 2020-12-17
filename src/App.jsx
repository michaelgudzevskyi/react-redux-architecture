import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import theme from '~/styles/Theme';
import GlobalStyles from '~/styles/Global';
import { store, persistor } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
