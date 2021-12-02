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
      name: 'CodersOnly',
      category: 'portfolio',
      description: 'This is an app that allows users to post and update blogs about any tech topic in the world.. It also lets users see and interact with other users blogs on the app.',
      link: 'https://safe-inlet-86070.herokuapp.com'
    },
    {
      name: 'Budget Tracker',
      category: 'portfolio',
      description: ' The user can add expenses and deposits to their budget with or without a connection.It allows for offline access and functionality.If the user enters transactions offline, the transaction will be updated when they are brought back online.',
      link: 'https://easybudgettracker.herokuapp.com'
    },
    {
      name: 'Resume',
      category: 'resume',
      description: '',
      link: 'https://ryanblessing.github.io/Group-project-1/'
    },
    {
      name: 'PuppyLove',
      category: 'portfolio',
      description: 'Puppy Love uses a Google Places API to filter locations of pet friendly resteraunts and stores, it also provides a safe place for pets and pet owners to connect!',
      link: 'https://safe-inlet-86070.herokuapp.com'
    },
    {
      name: 'Literary Connections',
      category: 'portfolio',
      description: 'Book search engine using MERN stack and a GraphQL API.',
      link: 'https://safe-inlet-86070.herokuapp.com'
    },
    {
      name: 'Social Network',
      category: 'portfolio',
      description: 'Backend for a social network web application where users can share thoughts, react to friends’ thoughts, and create a friend list.',
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
