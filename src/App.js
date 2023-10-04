import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal'
import { useState } from 'react';
import Form from './components/Form';
import Funk from './components/Funk';
Modal.setAppElement('#root');


function App() {
  const [popForm, setPopForm ] = useState(false)
  return (
    <div>
      <button onClick={() => setPopForm(true)}>open modal</button>
      <Modal isOpen={popForm}>
        {/* <Form /> */}
        <Funk />
        <div>
          <button className='add' onClick={(addition) => setPopForm(true)}>Add</button>
          <button onClick={() => setPopForm(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
