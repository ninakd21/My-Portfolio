import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'EasyLink',
      category: 'portfolio',
      description: 'This app is to connect people with locations. Users can search the app to find locations that match with their taste in food and drinks.',
      link: 'https://ryanblessing.github.io/Group-project-1/'
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      description: 'A Web application built to generate a password based on the users set criteria.',
      link: 'https://ninakd21.github.io/Password-Generator/'
    },
    {
      name: 'Horiseon',
      category: 'portfolio',
      description: 'A Web application built to provide businesses with assistance in seach engine use, online reputation managment and social media marketing.',
      link: 'https://ninakd21.github.io/'
    },
    {
      name: 'Run Buddy',
      category: 'portfolio',
      description: 'A Web application that offers fitness training services.',
      link: 'https://ninakd21.github.io/run-buddy1/'
    },
    {
      name: 'Deep Thoughts',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://warm-everglades-26440.herokuapp.com/'
    },
    {
      name: 'Budget Tracker',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://mighty-lowlands-41660.herokuapp.com'
    },
    {
      name: 'Resume',
      category: 'resume',
      description: '',
      link: 'https://ryanblessing.github.io/Group-project-1/'
    },
    {
      name: 'CodersOnly',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://safe-inlet-86070.herokuapp.com'
    },
    {
      name: 'CodersOnly',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://safe-inlet-86070.herokuapp.com'
    },
    {
      name: 'DeepThoughts',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://warm-everglades-26440.herokuapp.com/'
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
