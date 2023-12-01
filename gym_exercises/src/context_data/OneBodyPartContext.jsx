import React, { createContext, useContext, useState } from 'react';

const OneBodyPartContext = createContext();

export const OneBodyPartProvider = ({ children }) => {
  const [bodyPart, setsetBodyPart] = useState('all');

  return (
    <OneBodyPartContext.Provider value={{ bodyPart, setsetBodyPart }}>
      {children}
    </OneBodyPartContext.Provider>
  );
};

export const useOneBodyPart = () => {
  const context = useContext(OneBodyPartContext);
  if (!context) {
    throw new Error('useExercises must be used within a ExercisesProvider');
  }
  return context;
};
