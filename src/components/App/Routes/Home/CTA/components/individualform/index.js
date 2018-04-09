import React from 'react';
import styles from './styles.scss';

class IndividualForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone1: '',
      phone2: '',
      phone3: '',
      other: '',
    };
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
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

  handlePhoneChange1(event) {
    this.setState({phone1: event.target.value});
  }

  handlePhoneChange2(event) {
    this.setState({phone2: event.target.value});
  }

  handlePhoneChange3(event) {
    this.setState({phone3: event.target.value});
  }

  handleOtherChange(event) {
    this.setState({other: event.target.value});
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form action="https://squatsandscience.us12.list-manage.com/subscribe/post?u=a3cf758809f155c2dd9a85297&amp;id=c8b6623f1e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-NAME"><span className="asterisk">*</span></label>
              <input type="text" value={this.state.name} name="NAME" className="required" id="mce-NAME" placeholder="name" onChange={this.handleNameChange.bind(this)} />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL"><span className="asterisk">*</span></label>
              <input type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL" placeholder="email" onChange={this.handleEmailChange.bind(this)} />
            </div>
            <div className="mc-field-group size1of2">
              <label htmlFor="mce-PHONE"></label>
              <div className="phonefield phonefield-us">
                (<span className="phonearea"><input className="phonepart " pattern="[0-9]*" id="mce-PHONE-area" name="PHONE[area]" maxLength="3" size="3" value={this.state.phone1} type="text" onChange={this.handlePhoneChange1.bind(this)} /></span>)
                <span className="phonedetail1"><input className="phonepart " pattern="[0-9]*" id="mce-PHONE-detail1" name="PHONE[detail1]" maxLength="3" size="3" value={this.state.phone2} type="text" onChange={this.handlePhoneChange2.bind(this)} /></span> - 
                <span className="phonedetail2"><input className="phonepart " pattern="[0-9]*" id="mce-PHONE-detail2" name="PHONE[detail2]" maxLength="4" size="4" value={this.state.phone3} type="text" onChange={this.handlePhoneChange3.bind(this)} /></span>
                <span className="small-meta nowrap">(###) ###-####</span>
              </div>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-OTHER"></label>
              <input type="text" value={this.state.other} name="OTHER" className="" id="mce-OTHER" placeholder="anything else?" onChange={this.handleOtherChange.bind(this)} />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display:'none'}}></div>
              <div className="response" id="mce-success-response" style={{display:'none'}}></div>
            </div>
            <div style={{position: 'absolute', left: -5000}} aria-hidden="true"><input type="text" name="b_a3cf758809f155c2dd9a85297_bc978fccc8" tabIndex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Join waitlist" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
        </div>
    );
  }
}

export default IndividualForm;
