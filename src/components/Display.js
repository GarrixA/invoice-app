import React, { useState } from 'react';

import Modal from 'react-modal';
import moon from './images/icon-moon.svg';
import arrowRight from './images/icon-arrow-right.svg';
import addIcon from './images/icon-plus.svg'
import dotIcon from './images/dot.png'
import logo from './images/logo.svg';
import sun from './images/icon-sun.svg';
import trashIcon from './images/icon-delete-hover.png';
import plus from './images/plus.png';
import profile from './images/image-avatar.jpg';
import arrowDown from './images/icon-arrow-down.svg';
import Inv from './Inv';
import '../App.css';
import Form from './Form';
// import NewInvoiceForm from './createInvoice';



function Display() {
    const [popForm, setPopForm ] = useState(false);

    <Inv />
    const invoices = [
      {
        productCode: '100000',
        date: '2023-10-04',
        customerName: 'Garrix',
        totalPrice: 10.00,
        status: 'paid',
      },
      {
        productCode: '12345',
        date: '2023-10-04',
        customerName: 'John Doe',
        totalPrice: 100.00,
        status: 'pending',
      },
      {
        productCode: '12345',
        date: '2023-10-04',
        customerName: 'John Doe',
        totalPrice: 100.00,
        status: 'paid',
      },
      {
        productCode: '12345',
        date: '2023-10-04',
        customerName: 'John Doe',
        totalPrice: 100.00,
        status: 'draft',
      },
      // Add more invoice data as needed
    ];
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [filteredStatus, setFilteredStatus] = useState([]);
    const [formPopup, setFormPopup] = useState(false);
    function handleStatusFilter(status) {
      if (filteredStatus.includes(status)) {
        setFilteredStatus([]);
      } else {
        setFilteredStatus([status]);
      }
    }
    const filteredInvoices = filteredStatus.length > 0
      ? invoices.filter(invoice => filteredStatus.includes(invoice.status))
      : invoices;
    return (
      <div className="container">
        <div className="navbar">
          <img src={logo} alt="" className="logo" />
          <div className='down-nav'>
            <img src={sun} alt="" className='my-theme' /> <hr />
            <img src={profile} alt="" className='user' />
          </div>
        </div>
        <div className="main">
          <div className="main-header">
            <div className="header-text">
              <h2>Invoices</h2>
              <p>There are <span>{filteredInvoices.length}</span> total invoices.</p>
            </div>
            <span onClick={() => setShowFilterDropdown(!showFilterDropdown)}>
              Filter by status <img src={arrowDown} alt="Arrow" />
              {showFilterDropdown && (
                <div className="dropdown-content">
                  <label>
                    <input
                      type="checkbox"
                      checked={filteredStatus.includes('paid')}
                      onChange={() => handleStatusFilter('paid')}
                    /> Paid
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filteredStatus.includes('pending')}
                      onChange={() => handleStatusFilter('pending')}
                    /> Pending
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filteredStatus.includes('draft')}
                      onChange={() => handleStatusFilter('draft')}
                    /> Draft
                  </label>
                </div>
              )}
            </span>
             
          </div>
          <div className="invoice-list">
            {filteredInvoices.map((invoice, index) => (
              <div key={index} className="invoice-item">
                <span className='CId'># {invoice.productCode}</span>
                <span className='invoiceDate'>Due {invoice.date}</span>
                <span className='customerName'>{invoice.customerName}</span>
                <span className='tPrice'>£ {invoice.totalPrice}</span>
                <button className={`status-button ${invoice.status}`}> <img src={dotIcon} alt="" />
                  {invoice.status}
                </button>
              </div>
            ))}
          </div>
        </div>

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
    );
  }
  export default Display;