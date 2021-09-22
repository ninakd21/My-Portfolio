import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'resume',
    },
    { name: 'portfolio',
    description: 'The top projects completed',
  link: ' '}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>

            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
