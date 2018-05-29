import React from 'react';
import styles from './styles.scss';
import Landing from 'components/App/Routes/Home/Landing/index.js';
import Analytics from 'components/App/Routes/Home/Analytics/index.js';
import Platform from 'components/App/Routes/Home/Platform/index.js';
import Insights from 'components/App/Routes/Home/Insights/index.js';
import ThreeDee from 'components/App/Routes/Home/3D/index.js';
import Exploded from 'components/App/Routes/Home/Exploded/index.js';
import Teams from 'components/App/Routes/Home/Teams/index.js';
import CTA from 'components/App/Routes/Home/CTA/index.js';
import Price from 'components/App/Routes/Home/Price/index.js';
import Kiosk from 'components/App/Routes/Home/Kiosk/index.js';

function Home() {
  return (
    <div className={styles.container}>
      {/* <Modal link='https://www.youtube.com/watch?v=uWIAo2XFcX4' linktext='Check out this tech demonstration for our new 3D sensing.' title='Hi there!' message="This page is a work in progress, it`ll be going live soon. If you`re seeing this message, then there`s still work left to do." /> */}
      <Landing />
      <Analytics />
      <Kiosk />
      <Platform />
      <Insights />
      <ThreeDee />
      <Exploded />
      <Teams />
      <Price />
      <CTA />
    </div>
  );
}

export default Home;
