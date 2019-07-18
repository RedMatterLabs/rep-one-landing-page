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
                    <h2>Get ready, RepOne preorders are coming.</h2>
                    <p>Sign up for the mailing list to be first in line when they're released.</p>
                </div>
            </a>
        );
    }
}

export default Teaser;
