import React from 'react';
import styles from './styles.scss';
import Landing from 'src/components/App/Routes/Home/Landing/index.js';
import Analytics from 'src/components/App/Routes/Home/Analytics/index.js';
import Platform from 'src/components/App/Routes/Home/Platform/index.js';
import Insights from 'src/components/App/Routes/Home/Insights/index.js';
import Manage from 'src/components/App/Routes/Home/Manage/index.js';
import Teams from 'src/components/App/Routes/Home/Teams/index.js';
import Pricing from 'src/components/App/Routes/Home/Pricing/index.js';
import CTA from 'src/components/App/Routes/Home/CTA/index.js';

function Home() {
  return (
    <div className={styles.container}>
      <Landing />
      <Analytics />
      <Platform />
      <Insights />
      <Manage />
      <Teams />
      <Pricing />
      <CTA />
    </div>
  );
}

export default Home;
