import React, { useState } from 'react';

const CustomModal = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
               <p>{message}</p>
               <div className="button-container">
              <button className="prompt-button" onClick={onConfirm}>Confirm</button>
              <button className='prompt-button' onClick={onCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;