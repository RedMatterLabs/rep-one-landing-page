import React, {Component} from 'react';
import styles from './styles.scss';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MouseIdle from 'components/App/Shared/MouseIdle/index.js';
import {Device as detectDevice} from 'components/App/Shared/DetectDevice/index.js';
import TouchIdle from 'components/App/Shared/TouchIdle/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: null
    }
  }

  componentDidMount() {
    detectDevice().then((device) => {
      this._updateDevice(device);
    })   
  }

  _updateDevice(device) {
    this.setState({device: device})
  }

  _renderModal(device) {
    if (device === 'mouse') {
      return (<MouseIdle/>)
    } else if (device === 'touch') {
      return (<TouchIdle/>)
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
