import React from 'react';
import styles from './styles.scss';
import Logo from './components/RepOneLogo/index.js';


function Landing() {
    return ( <div className={styles.section}>
	    	<div className={styles.main}>
		        <h1> Win in the weight room.</h1>
		        <h1>Win on the field.</h1>
		        <Logo></Logo>
		    </div>
        </div>
    );
}

export default Landing;
