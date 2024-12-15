import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Загружаем изображения
    const fetchImages = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      setImages(response.data);
    };

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt={image.title}
            className="thumbnail"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="full-image"
            />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;