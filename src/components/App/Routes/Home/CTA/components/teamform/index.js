import React from 'react';
import styles from '../../styles.scss';
import ReactGA from 'react-ga';

class TeamForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      job: '',
      email: '',
      phone: '',
      organization: '',
      teams: '',
      athletes: '',
      stations: '',
      other: '',
    };
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = false;
    script.setAttribute("id", "mailchimp team validate");
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://assets.reponestrength.com/mailchimp.teams.js";
    script2.async = false;
    script2.setAttribute("id", "mailchimp team repone");
    document.body.appendChild(script2);
  }

  componentWillUnmount() {
    try {
      const script = document.getElementById("mailchimp team validate");
      script.parentNode.removeChild(script);

      const script2 = document.getElementById("mailchimp team repone");
      script2.parentNode.removeChild(script2);
    } catch (e) {
      console.log("Scripts don't exist");
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleJobChange(event) {
    this.setState({job: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleOrganizationChange(event) {
    this.setState({organization: event.target.value});
  }

  handleTeamsChange(event) {
    this.setState({teams: event.target.value});
  }

  handleAthletesChange(event) {
    this.setState({athletes: event.target.value});
  }

  handleStationsChange(event) {
    this.setState({stations: event.target.value});
  }

  handleOtherChange(event) {
    this.setState({other: event.target.value});
  }

  submit(event) {
    ReactGA.event({
      category: 'cta',
      action: 'team signup'
    });
    window.fbq('track', 'Lead');
  }

  render() {
    return (
      <div className={styles.form} id="mc_embed_signup">
        <form action="https://reponestrength.us15.list-manage.com/subscribe/post?u=078ce319da053f89d04c3128b&amp;id=9537b0d2f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className={styles.mcfieldgroup}>
              <label htmlFor="mce-NAME">Name<span className={`${styles.floatright} asterisk`}>*</span></label>
              <input type="text" value={this.state.name} name="NAME" className="required" id="mce-NAME" onChange={this.handleNameChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of2}`}>
              <label className={styles.inputlabel} htmlFor="mce-EMAIL">Email<span className={`${styles.floatright} asterisk`}>*</span></label>
              <input type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.handleEmailChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of2} ${styles.phone}`}>
              <label className={styles.inputlabel} htmlFor="mce-PHONE">Phone</label>
              <input type="text" name="PHONE" className={styles.width100} value={this.state.phone} id="mce-PHONE" onChange={this.handlePhoneChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of2}`}>
              <label htmlFor="mce-ORGNAME">Organization<span className={`${styles.floatright} asterisk`}>*</span></label>
              <input type="text" value={this.state.organization} name="ORGNAME" className="required" id="mce-ORGNAME" onChange={this.handleOrganizationChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of2}`}>
              <label className={styles.inputlabel} htmlFor="mce-JOBTITLE">Job Title</label>
              <input type="text" value={this.state.job} name="JOBTITLE" className="" id="mce-JOBTITLE" onChange={this.handleJobChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of3}`}>
              <label className={styles.inputlabel} htmlFor="mce-NUMTEAMS"># teams</label>
              <input type="number" name="NUMTEAMS" className="" value={this.state.teams} id="mce-NUMTEAMS" onChange={this.handleTeamsChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of3}`}>
              <label className={styles.inputlabel} htmlFor="mce-NUMATHLETE"># athletes</label>
              <input type="number" name="NUMATHLETE" className="" value={this.state.athletes} id="mce-NUMATHLETE" onChange={this.handleAthletesChange.bind(this)} />
            </div>
            <div className={`${styles.mcfieldgroup} ${styles.size1of3}`}>
              <label  className={styles.inputlabel} htmlFor="mce-NUMSTATION"># stations to outfit</label>
              <input type="number" name="NUMSTATION" className="" value={this.state.stations} id="mce-NUMSTATION" onChange={this.handleStationsChange.bind(this)} />
            </div>
            <div className={styles.mcfieldgroup}>
              <label className={styles.inputlabel} htmlFor="mce-OTHER">Anything else?</label>
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
            <div className={`clear ${styles.centered}`}><input type="submit" value="Get in touch" name="subscribe" id="mc-embedded-subscribe" className={styles.button} onClick={this.submit.bind(this)} /></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TeamForm;
