import React from 'react';
// import styles from './styles.css';
import Toggle from 'material-ui/Toggle';
import TeamForm from './components/teamform';
import IndividualForm from './components/individualform';

// TODO: move this to a css file if possible
// If it's possible to move it to a scss even better, but it seems unlikely
const styles = {
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

  handleToggleChange() {
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
      <div style={styles.block}>
          <Toggle
            label=""
            toggled={!this.state.showingTeams}
            onToggle={this.handleToggleChange.bind(this)}
            thumbStyle={styles.thumbOff}
            trackStyle={styles.trackOff}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
          />
        {this._renderForm()}
      </div>
    );
  }

}

export default CTA;
