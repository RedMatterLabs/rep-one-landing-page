import React from 'react';
import styles from './styles.scss';
import ReactGA from 'react-ga';

class Teaser extends React.Component {

    handleClick (e) {
        ReactGA.event({
          category: 'cta',
          action: 'preorder moon teaser',
        });
      }

    render() {
        return (
            <a href="#cta" className={styles.container} onClick={this.handleClick.bind(this)}>
                <img className={styles.img} src="https://reponestrength.s3.us-east-2.amazonaws.com/moon_render_3.png" />
                <div className={styles.text}>
                    <h2>One giant rep for mankind</h2>
                    <p>RepOne preorders are coming soon, join the waitlist to be first in line</p>
                </div>
            </a>
        );
    }
}

export default Teaser;
