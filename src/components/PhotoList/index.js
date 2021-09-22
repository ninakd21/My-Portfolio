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
      category: 'portfolip',
      description: 'A Web application that offers fitness training services.',
      link: 'https://ninakd21.github.io/run-buddy1/'
    },
    {
      name: 'Deep Thoughts',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/ninakd21/deep-thoughts'
    },
    {
      name: 'Budget Tracker',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://ninakd21-bc45bda431.drafts.github.io/Budget-Tracker/'
    },
    {
      name: 'Resume',
      category: 'portfolio',
      description: ' ',
      link: 'https://ryanblessing.github.io/Group-project-1/'
    },
    {
      name: 'Yellow macaw',
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://ryanblessing.github.io/Group-project-1/'
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
