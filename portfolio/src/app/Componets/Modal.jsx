import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image'; // If using Next.js
import './ImageGallery.css'; // Add your custom styles for the gallery here

// Sample images stored locally (replace with your own image paths)
const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
];

Modal.setAppElement('#__next'); // Required for accessibility with Next.js

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open the modal and set the starting image
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(index)}>
            <Image src={image} alt={`Image ${index + 1}`} width={200} height={200} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Gallery Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-body">
          <button className="arrow prev" onClick={prevImage}>
            &lt;
          </button>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={800}
            height={600}
            className="gallery-img"
          />
          <button className="arrow next" onClick={nextImage}>
            &gt;
          </button>
          <button className="close-modal" onClick={closeModal}>
            &times;
          </button>
        </div>
      </Modal>
    </>
  );
}
