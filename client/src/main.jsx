import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "./state/index";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
