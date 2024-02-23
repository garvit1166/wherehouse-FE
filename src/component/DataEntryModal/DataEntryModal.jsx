import React, { useState } from 'react';
import './DataEntryModal.css';
 
const DataEntryModal = ({ isOpen, onClose, onSave }) => {
    const [avatar, setAvatar] = useState('');
    const [score, setScore] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { avatar:avatar, score:score };
        onSave(formData);
        onClose();
    }
 
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-overlay" onClick={onClose}></div>
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title">Add New Entry</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="avatar" className="form-label">Avatar:</label>
            <input type="text" id="avatar" name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="score" className="form-label">Performance Score:</label>
            <input type="text" id="score" name="score" value={score} onChange={(e) => setScore(e.target.value)} className="form-input" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </div>
  );
};
 
export default DataEntryModal;