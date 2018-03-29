import React from 'react';
import styles from './styles.scss';
import Landing from 'src/components/App/Routes/Home/Landing/index.js';
import Analytics from 'src/components/App/Routes/Home/Analytics/index.js';
import Platform from 'src/components/App/Routes/Home/Platform/index.js';
import Insights from 'src/components/App/Routes/Home/Insights/index.js';
import Exploded from 'src/components/App/Routes/Home/Exploded/index.js';
import Manage from 'src/components/App/Routes/Home/Manage/index.js';
import Teams from 'src/components/App/Routes/Home/Teams/index.js';
import CTA from 'src/components/App/Routes/Home/CTA/index.js';
import Modal from 'src/components/App/Routes/Home/Modal/index.js';

function Home() {
  return (
    <div className={styles.container}>
      <Modal link='https://www.youtube.com/watch?v=uWIAo2XFcX4' linktext='Check out this tech demonstration for our new 3D sensing.' title='Hi there!' message="This page is a work in progress, it`ll be going live soon. If you`re seeing this message, then there`s still work left to do." />
      <Landing />
      <Analytics />
      <Platform />
      <Insights />
      <Exploded />
      <Teams />
      <CTA />
    </div>
  );
}

export default Home;
