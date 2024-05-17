// Modal.js
import React from 'react';
import './Modal.css';

function Modal({ image, closeModal, handleRate }) {
  const handleRatingChange = (event) => {
    handleRate(image.id, parseInt(event.target.value));
    image.rating = event.target.value;
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} />
        <h2>{image.title}</h2>
        <label htmlFor="rating">Rate:</label>
        <select id="rating" onChange={handleRatingChange} value={image.rating}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </div>
  );
}

export default Modal;
