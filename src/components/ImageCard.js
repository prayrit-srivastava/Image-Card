// ImageCard.js
import React from 'react';
import './ImageCard.css';

function ImageCard({ image, openModal, handleRate }) {
  const handleClick = () => {
    openModal(image.id);
  };

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value);
    handleRate(image.id, newRating);
  };

  const calculateAverageRating = () => {
    const totalRating = image.rating;
    const numberOfRatings = 1; // Initially, there's only one rating
    const averageRating = totalRating / numberOfRatings;
    return isNaN(averageRating) ? 0 : averageRating.toFixed(1);
  };

  return (
    <div className="image-card" onClick={handleClick}>
      <img src={image.src} alt={image.title} />
      <h3>{image.title}</h3>
      <div className="rating">
        <span>Rating: {calculateAverageRating()}</span>
      </div>
    </div>
  );
}

export default ImageCard;
