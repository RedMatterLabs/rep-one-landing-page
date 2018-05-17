import React from 'react';
import styles from './styles.scss';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MouseModal from 'components/App/Shared/MouseModal/index.js';
import Device from 'components/App/Shared/DetectDevice/index.js';
import TouchModal from 'components/App/Shared/TouchModal/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'mouse'
    };

    this.device = new Device(this.updateDevice.bind(this));
  }

  updateDevice(device) {
    this.setState({device: device})
  }

  renderModal(device) {
    if (device === 'mouse') {
      return (<MouseModal/>)
    } else if (device === 'touch') {
      return (<TouchModal/>)
    }
  }

  render() { 
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header/>
          {this.renderModal(this.state.device)}
          <div className={styles.content}>
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
