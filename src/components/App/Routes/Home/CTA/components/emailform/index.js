import React from 'react';
import styles from './styles.scss';

function EmailForm() {
  return (
    <form
      className={`${styles.form} ${styles.container} ${styles.card}`}
      id="signup"
      method="post"
      action=""
    >
      <div className={styles.row}>
        <div className={`${styles.group}  ${styles.name}`}>
          <input type="text" name="name" className={`${styles.textinput}`} />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label htmlFor="POST-name">name</label>
        </div>
        <div className={`${styles.group}  ${styles.email}`}>
          <label htmlFor="POST-email">email</label>
          <input type="text" name="email" className={`${styles.textinput}`} />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label htmlFor="POST-email">email</label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.group}  ${styles.message}`}>
          <input type="text" name="message" className={`${styles.textinput} ${styles.message}`} />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label htmlFor="POST-message">message</label>
        </div>
      </div>
      <div className={styles.row}>
        <input type="submit" value="Submit" className={`${styles.button} ${styles.submit}`} />
      </div>
    </form>
  );
}

export default EmailForm;
