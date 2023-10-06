import { useState } from 'react';
import Modal from 'react-modal';
import Form from './Form';
import Display from './Display';



Modal.setAppElement('#root');

function Inv (){
    const [popForm, setPopForm ] = useState(false);
    return (
        <div className="main-inv">
            <div className="inv-text">
                <h1>Invoices</h1>
                <p>There are 7 total invoices</p>
                
            </div>
            <>
            
            </>
            <div className="btns">
                <button className="btn1" onClick={() => setPopForm(true)} > Add invoice </button>
                <Modal  isOpen={popForm}>              
                <Form />
                
                    <div>
                    <button onClick={() => setPopForm(false)}> Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Inv