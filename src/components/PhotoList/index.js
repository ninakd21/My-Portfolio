import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'EasyLink',
      category: 'portfolio',
      description: 'https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html',
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Horiseon',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Run Buddy',
      category: 'portfolip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Deep Thoughts',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Budget Tracker',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
