import React from 'react';
import styles from './styles.scss';
import Landing from 'src/components/Sections/Landing/index.js'
import Analytics from 'src/components/Sections/Analytics/index.js'
import Platform from 'src/components/Sections/Platform/index.js'
import Insights from 'src/components/Sections/Insights/index.js'
import Manage from 'src/components/Sections/Manage/index.js'
import Teams from 'src/components/Sections/Teams/index.js'
import Pricing from 'src/components/Sections/Pricing/index.js'
import CTA from 'src/components/Sections/CTA/index.js'


function Home() {
  return (
    <div className={styles.container}>
      <Landing></Landing>
      <Analytics></Analytics>
      <Platform></Platform>
      <Insights></Insights>
      <Manage></Manage>
      <Teams></Teams>
      <Pricing></Pricing>
      <CTA></CTA>

    </div>
  );
}

export default Home;
