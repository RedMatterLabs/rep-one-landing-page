import React from 'react';
import styles from './styles.scss';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MouseModal from 'components/App/Shared/MouseModalController/index.js';
import {Device as detectDevice} from 'components/App/Shared/DetectDevice/index.js';
import TouchModal from 'components/App/Shared/TouchModalController/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: null
    }

    let updateDevice = this._updateDevice.bind(this);

    detectDevice().then((device) => {
      updateDevice(device);
    })
  }

  _updateDevice(device) {
    this.setState({device: device})
  }

  _renderModal(device) {
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
          {this._renderModal(this.state.device) }}
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
