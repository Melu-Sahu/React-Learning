import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { ExercisesProvider } from './context_data/ExerciseData';
import { BodyPartProvider } from './context_data/BodyPart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExercisesProvider>
        <BodyPartProvider>
          <App />
        </BodyPartProvider>
      </ExercisesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
