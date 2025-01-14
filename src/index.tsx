import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"; // Importer PersistGate
import { store , persistor } from "./redux/store";
import { router } from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <RouterProvider router={router}>
         </RouterProvider>
       </PersistGate> 
    </Provider>
  </React.StrictMode>
);

// {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
//</PersistGate> 