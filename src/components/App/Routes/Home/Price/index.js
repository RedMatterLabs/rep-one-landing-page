import React from 'react';
import styles from './styles.scss';
import ReactGA from 'react-ga';

class Price extends React.Component {

  handleClick (e) {
    ReactGA.event({
      category: 'cta',
      action: 'scroll to form'
    });
  }
  
  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <h1>Flexible pricing to fit your organization</h1>
          <div className={styles.container}>
            <img src='https://assets.reponestrength.com/pricing.png' />
          </div>

          <a href="#cta" className={styles.button} onClick={this.handleClick.bind(this)}>GET IN TOUCH</a>
        </div>
      </div>
    );
  }
}

export default Price;
