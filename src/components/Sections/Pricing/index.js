import React from 'react';
import styles from './styles.scss';

function Pricing() {
    return ( <div className={styles.section} id="landing_zone">
    	<div className={styles.main}>
	        <h1> Pricing</h1>
		        <div className={styles.pricing} id='front'>
		        	<ul>
		        		<li>Hardware Up Front $349</li>
		        		<li>349 per unit</li>
		        		<li>Starting at $99 monthly</li>
		        	</ul>
		        </div>
		        <div className={styles.pricing} id='monthly'>
		        	<ul>
		        		<li>Hardware Monthly</li>
		        		<li>20+ units</li>
		        		<li>499+ monthly</li>
		        		<li>24mo contract</li>
		        	</ul>
		        </div>
		    </div>
        </div>  
    );
}

export default Pricing;
