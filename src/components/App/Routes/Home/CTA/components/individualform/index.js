import React from 'react';
import styles from '../../styles.scss';
import ReactGA from 'react-ga';

class IndividualForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      other: '',
    };
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = false;
    script.setAttribute("id", "mailchimp individual validate");
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://assets.reponestrength.com/mailchimp.individual.js";
    script2.async = false;
    script2.setAttribute("id", "mailchimp individual repone");
    document.body.appendChild(script2);
  }

  componentWillUnmount() {
    try {
      const script = document.getElementById("mailchimp individual validate");
      script.parentNode.removeChild(script);

      const script2 = document.getElementById("mailchimp individual repone");
      script2.parentNode.removeChild(script2);
    } catch (e) {
      console.log("Scripts don't exist");
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleOtherChange(event) {
    this.setState({other: event.target.value});
  }

  submit(event) {
    ReactGA.event({
      category: 'cta',
      action: 'individual signup'
    });
    window.fbq('track', 'Lead');
  }

  render() {
    return (
      <div id="mc_embed_signup" className={styles.form}>
        <form action="https://reponestrength.us15.list-manage.com/subscribe/post?u=078ce319da053f89d04c3128b&amp;id=7fdf2a1f6e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className={styles.mcfieldgroup}>
              <label htmlFor="mce-NAME">Name<span className="asterisk">*</span></label>
              <input type="text" value={this.state.name} name="NAME" className="required" id="mce-NAME" onChange={this.handleNameChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of2}`}>
              <label htmlFor="mce-EMAIL">Email<span className="asterisk">*</span></label>
              <input type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.handleEmailChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of2} ${styles.phone}`}>
              <label className={styles.inputlabel} htmlFor="mce-PHONE">Phone</label>
              <input type="text" name="PHONE" className={styles.width100} value={this.state.phone} id="mce-PHONE" onChange={this.handlePhoneChange.bind(this)} />
            </div>
            <div className={styles.mcfieldgroup}>
              <label htmlFor="mce-OTHER">Anything else?</label>
              <input type="text" value={this.state.other} name="OTHER" className="" id="mce-OTHER" onChange={this.handleOtherChange.bind(this)} />
            </div>
            <div className={styles.mcfieldgroup}>
              <div className={`indicates-required`}><label><span className={`asterisk`}>*</span> indicates required field</label></div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display:'none'}}></div>
              <div className="response" id="mce-success-response" style={{display:'none'}}></div>
            </div>
            <div className={styles.mcfieldgroup}>
            <div style={{position: 'absolute', left: -5000}} aria-hidden="true"><input type="text" name="b_a3cf758809f155c2dd9a85297_bc978fccc8" tabIndex="-1" value="" /></div>
              <div className={`clear ${styles.centered}`}><input type="submit" value="Join waitlist" name="subscribe" id="mc-embedded-subscribe" className={styles.button} onClick={this.submit.bind(this)} /></div>
            </div>
            </div>
          </form>
        </div>
    );
  }
}

export default IndividualForm;
