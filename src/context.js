import axios from 'axios';
import React, { createContext, useContext, useEffect } from 'react';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const url = '';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello '>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
