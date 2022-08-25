import React, { useContext } from 'react';

import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const value1 = useGlobalContext();
  return (
    <>
      <h2>quiz starter {value1}</h2>;
      <Modal />;
    </>
  );
}

export default App;
