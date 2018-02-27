import React, { PropTypes } from 'react';
import styles from './styles.scss';
import Header from './Header/index.js'
import Footer from './Footer/index.js'

function App({ children }) {
  return (
    <div>
      <Header/>
      <div className={styles.content}>
        {children}
      </div>
       <Footer/>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
