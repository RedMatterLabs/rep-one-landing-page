import React from 'react';
import styles from './styles.scss';
import Landing from '../Landing/index.js'
import Analytics from '../Analytics/index.js'
import Platform from '../Platform/index.js'
import Insights from '../Insights/index.js'
import Manage from '../Manage/index.js'
import Teams from '../Teams/index.js'
import Pricing from '../Pricing/index.js'
import CTA from '../CTA/index.js'


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
