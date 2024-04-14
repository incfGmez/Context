import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const LikesContext = createContext();

// Creamos un componente Provider para envolver la aplicación
export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
      {children}
    </LikesContext.Provider>
  );
};

// Hook para acceder al contexto
export const useLikes = () => useContext(LikesContext);
