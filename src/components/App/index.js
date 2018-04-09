import React, { PropTypes } from 'react';
import styles from './styles.scss';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function App({ children }) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Header/>
        <div className={styles.content}>
          {children}
        </div>
        <Footer/>
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
