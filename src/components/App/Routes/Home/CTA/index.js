import React from 'react';
import styles from './styles.scss';
import Toggle from 'material-ui/Toggle';
import TeamForm from './components/teamform';
import IndividualForm from './components/individualform';

// TODO: move this to a css file if possible
// If it's possible to move it to a scss even better, but it seems unlikely
const toggleStyles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  }
};

class CTA extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      showingTeams: true,
    };
  }

  handleToggleChange(e) {
    console.log(e)
    this.setState({showingTeams: !this.state.showingTeams});
  }

  _renderForm() {
    if (this.state.showingTeams) {
      return <TeamForm />;
    } else {
      return <IndividualForm />;
    }
  }

  render() {
    return (
      <div className={styles.section} id="cta">
        <div className={styles.main}>
        <div className={styles.heading}>
          <h1>PRE-ORDERS COMING SOON</h1>
          <h2>Do you have questions about implementing RepOne with your organization? Sign up now to speak directly to the creators of RepOne.</h2>
          <div className={styles.center}>
          
          
          
          <div className={styles.switch}>
            <input checked={this.state.showingTeams} onChange={this.handleToggleChange.bind(this)} type="radio" className={styles.switchinput} name="view" value="week" id="week"></input>
            <label className={`${styles.switchlabel} ${styles.switchlabeloff}`}>Teams</label>
            <input checked={!this.state.showingTeams} onChange={this.handleToggleChange.bind(this)} type="radio" className={styles.switchinput} name="view" value="month" id="month"></input>
            <label className={`${styles.switchlabel} ${styles.switchlabelon}`}>Individuals</label>
            <span className={styles.switchselection}></span>
          </div>

            </div>
          </div>

          <div style={toggleStyles.block}>
            {this._renderForm()}
          </div>
        </div>
      </div>
    );
  }

}

export default CTA;
