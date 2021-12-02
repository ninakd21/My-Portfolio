import React from 'react';
import coverImage from '../../assets/cover/heroPhoto.png';
function About() {
  return (
    <div className="flex-row">
    <section className="my-5">
      <h1 id="about">Nina Davis</h1>
      <img src={coverImage} className="me" alt="cover" />
      <div className="my-2">
        <p> Hello,  </p>
        <p>I’m Nina, a full-stack web developer based in Nashville, TN.  </p>

        <p> I’m experienced in: JavaScript, React, JQuery, Express, HTML, CSS and Bootstrap, with an understanding of MySQL, Mongo database and API structures.  </p>
        <p> MERN Stack: (MongoDB, Express.js, React.js, Node.js)  </p>

        <p> As a veteran and a former member of the Intelligence Community, I am driven by a passion of selfless service and committed to using technology, software and hard work to improve the life of others. </p>

        <p> Click the links at the top of the page to learn more about me, to see my projects and resume, or to contact me directly! </p>
      </div>
    </section>
    </div>
  );
}

export default About;
