import React from 'react';
import styles from './styles.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.main}>
          <div>
            <h2>Contact Us</h2>
            <ul className={styles.adress}>
              <li>415 Wythe Ave</li>
              <li>Brooklyn, NY 11249</li>
              <li>United States</li>
            </ul>
            <br />
            <a href="mailto:sales@getrepone.com">sales@getrepone.com</a>
          </div>
          <div className={styles.footerSocialIcons}>
            <ul className={styles.socialIcons}>
              <li>
                <a href="https://github.com/squatsandsciencelabs/" className={styles.socialIcon}>
                  {' '}<i className="icon fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/RepOneStrength" className={styles.socialIcon}>
                  {' '}<i className="icon fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/reponestrength/" className={styles.socialIcon}>
                  {' '}<i className="icon fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RepOneStrength" className={styles.socialIcon}>
                  {' '}<i className="icon fa fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
