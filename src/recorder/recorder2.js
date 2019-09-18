import React, {Component}          from 'react';
import { render }                  from 'react-dom';
import { FloatingActionButton, MuiThemeProvider } from 'material-ui';
// import injectTapEventPlugin        from 'react-tap-event-plugin';
import MicrophoneOn                from 'material-ui/svg-icons/av/mic';
import MicrophoneOff               from 'material-ui/svg-icons/av/stop';
import { ReactMic } from 'react-mic';
import { withAlert } from 'react-alert'
import ReactLoading from 'react-loading';

// import toBuffer  from 'blob-to-buffer';

// import sampleAudio                 from './sample_audio.webm';
// import ReactGA                     from 'react-ga';

require ('./styles.scss');

// injectTapEventPlugin();

// ReactGA.initialize('UA-98862819-1');

class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false,
      loading:false,
    }
    this.post=this.post.bind(this);
    this.fileUpload=this.bind(this);
  }

  render() {
    const { isRecording } = this.state;
    if(this.state.loading){
      return(
        <ReactLoading type='bubbles' delay={300} color='771010' height='50' width='50' />
      );
    }else{
      return(
        <MuiThemeProvider>
          <div>
            <br></br>
            <ReactMic
              className="oscilloscope"
              record={this.state.record}
              backgroundColor="#000000"
              visualSetting="sinewave"
              audioBitsPerSecond= {128000}
              strokeColor="#ffffff" />
            <div>
              <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
            </div>
            <br />
            <br />
            <FloatingActionButton
              backgroundColor='#1E90FF'
              className="btn"
              secondary={false}
              disabled={isRecording}
              onClick={this.startRecording}>
              <MicrophoneOn />
            </FloatingActionButton>
            <FloatingActionButton
              backgroundColor='#1E90FF'
              className="btn"
              secondary={false}
              disabled={!isRecording}>
              <MicrophoneOff />
            </FloatingActionButton>
            <br />
            <br />
            <br />
          </div>
      </MuiThemeProvider>
      );
  }
  }
}
export default Demo;

// render(<Demo/>, document.querySelector('#demo'))