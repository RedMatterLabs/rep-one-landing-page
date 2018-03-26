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
                <li>275 Brooklyn St.</li>
                <li>Williamsburg, NY, 12345</li>
                <li>United States</li>
              </ul>
              <br />
              <a href="mailto:squatsandscience@gmail.com">squatsandscience@gmail.com</a>
            </div>
            <div className={styles.footerSocialIcons}>
              <ul className={styles.socialIcons}>
                <li>
                  <a href="" className={styles.socialIcon}>
                    {' '}<i className="icon fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="" className={styles.socialIcon}>
                    {' '}<i className="icon fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="" className={styles.socialIcon}>
                    {' '}<i className="icon fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="" className={styles.socialIcon}>
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
