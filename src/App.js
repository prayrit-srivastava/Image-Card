// App.js
import React, { useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState([
    { id: 1, src: 'https://wallpapercave.com/wp/wp2599594.jpg', title: 'Image 1', rating: 0 },
    { id: 2, src: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Background-Beautiful-Nature-Full-HD.jpg', title: 'Image 2', rating: 0 },
    { id: 3, src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Amazing-high-resolution-nature-wallpapers-2560x1920.jpg', title: 'Image 3', rating: 0 },
    
    // Add more images as needed
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    const image = images.find(img => img.id === id);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleRate = (id, rating) => {
    const updatedImages = images.map(img => img.id === id ? { ...img, rating } : img);
    setImages(updatedImages);
  };

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <div className="image-grid">
        {images.map(image => (
          <ImageCard key={image.id} image={image} openModal={openModal} handleRate={handleRate} />
        ))}
      </div>
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} handleRate={handleRate} />}
    </div>
  );
}

export default App;