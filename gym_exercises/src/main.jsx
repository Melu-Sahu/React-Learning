import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { ExercisesProvider } from './context_data/ExerciseDataContext.jsx';
import { BodyPartProvider } from './context_data/BodyPartContext.jsx';
import { OneBodyPartProvider } from './context_data/OneBodyPartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExercisesProvider>
        <BodyPartProvider>
          <OneBodyPartProvider>
          <App />
          </OneBodyPartProvider>
        </BodyPartProvider>
      </ExercisesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
