import React,{ useState, useEffect } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { images } from '../../constants';
import { motion } from 'framer-motion';
import './About.scss';

import { urlFor, client } from '../../client';

// const abouts = [
//   { 
//     title: 'Front-end Development',
//     description: 'I am a good developer',
//     imgUrl: images.about01,
//   },
//   { 
//     title: 'Back-end Developer',
//     description: 'I am a good designer',
//     imgUrl: images.about02,
//   },
//   { 
//     title: 'Full-stack Development',
//     description: 'I am a good developer',
//     imgUrl: images.about03,
//   },
//   { 
//     title: 'MERN Stack',
//     description: 'I am a good developer',
//     imgUrl: images.about04,
//   }
// ];

const About = () => {

  const [about, setAbout] = useState([]);
  //This is where we are fetching data from sanity
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => {
      setAbout(data);
      console.log(data);
    })

  }, []);

  return (
    <>
      <h2 className='head-text'>I know that <span>Good Development</span><br /> means <span>Good Business</span></h2>

      <div className="app__profiles">
        { about.map( (about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
          >
          <img src={ urlFor(about.imgUrl) } alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{ about.title }</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{ about.description }</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
  );
