import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

import tone from 'tone';
//import Keyboard from './components/Keyboard';
//import SynthControls from './components/SynthControls/SynthControls';
//import Waveform from './components/Waveform';
//import Instrument from './components/Instrument';
import Synth from './components/Synth/Synth';
import Waveform from './components/Waveform';

//synth config files
import duoSynth from './js/synth/duoSynth';
import filterTypeConfig from './js/synth/filterTypeConfig';
import harmonicityConfig from './js/synth/harmonicityConfig';
import qAndFreqConfig from './js/synth/qAndFreqConfig';
import vibratoConfig from './js/synth/vibratoConfig';
import voiceWaveConfig from './js/synth/voiceWaveConfig';

var sampler = new tone.Sampler({
  0: '../js/waveform/studderSchool.wav'
}, {
  player: {
    loop: true,
  }
}).toMaster();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      instrumentType: ''
    }
    this.selectInstrument = this.selectInstrument.bind(this);
  }
  componentWillMount(){
    //load the buffer with a sample
    tone.Buffer.on('load', function(){
      waveform1.setBuffer(sampler._buffers[0]._buffer);
      waveform1.select(0, 500);
    });

    nx.onload = function(){
      keyboard1.on('*', function(data){
        var frequency;
        if (data.on > 0){
          frequency = nx.mtof(data.note);
          duoSynth.triggerAttack(frequency);
        }
        else if (data.on === 0) {
          duoSynth.triggerRelease();
        }
      });
      //select waveforms for synthesizer
      voiceWave1.choices = voiceWaveConfig.waveChoices;
      voiceWave1.init(); //call init() to populate the select boxes. Doesn't work with react?
      voiceWave2.choices = voiceWaveConfig.waveChoices;
      voiceWave2.init();
      voiceWave1.on('*', function(data){
        voiceWaveConfig.voiceWaveAssign0(data);
      });
      voiceWave2.on('*', function(data){
        voiceWaveConfig.voiceWaveAssign1(data);
      });
      //asdr envelopes
      asdr1.on('*', function(data){
        var envelope = duoSynth.voice0.envelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      asdr2.on('*', function(data){
        var envelope = duoSynth.voice1.envelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      //vibrato
      vibrato.on('*', function(data){
        vibratoConfig(data);
      });
      //harmonicity
      harmonicity.set({ value: 0.5 });
      harmonicity.on('*', function(data){
        harmonicityConfig(data);
      });
      //filter select
      filterType1.choices = filterTypeConfig.filterChoices;
      filterType1.init(); //call init() to populate the select boxes.
      filterType2.choices = filterTypeConfig.filterChoices;
      filterType2.init();
      filterType1.on('*', function(data){
        filterTypeConfig.filterTypeAssign0(data);
      });
      filterType2.on('*', function(data){
        filterTypeConfig.filterTypeAssign1(data);
      });
      //filter asdr
      filterAsdr1.on('*', function(data){
        var envelope = duoSynth.voice0.filterEnvelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      filterAsdr2.on('*', function(data){
        var envelope = duoSynth.voice1.filterEnvelope;
        envelope.attack = data.points[0].y;
        envelope.decay = data.points[1].y;
        envelope.sustain = data.points[2].y;
        envelope.release = data.points[3].y;
      });
      //filter Q and frequency
      qAndFreq1.on('*', function(data){
        qAndFreqConfig.qFreq0(data);
      });
      qAndFreq2.on('*', function(data){
        qAndFreqConfig.qFreq1(data);
      });
      //dial to control the pitch of the sampler
      var playbackRateValue;
      dial1.on('*', function(data){
        playbackRateValue = Math.round(data.value);
        sampler.player.playbackRate = playbackRateValue;
      });

      //trigger the waveform sampler.
      toggle1.on('*', function(data){
        if (data.value === 1){
          sampler.triggerAttack('0');
        } else {
          sampler.triggerRelease();
        }
      });

      //control the length of the sampler loop.
      waveform1.on('*', function(data){
        sampler.player.setLoopPoints(data.starttime/1000, data.stoptime/1000);
      });
    };
  }
  selectInstrument(evt){
    var target = evt.target;
    var option = target.options[target.selectedIndex].innerHTML;
    console.log(option, 'from selectInstrument');
    this.setState({instrumentType: option});
    console.log(this.state.instrumentType, 'from state');
  }
  // var instrumentType;
  // switch (this.state.instrumentType) {
  //   case 'Synth':
  //     instrumentType = <Synth />
  //     break;
  //   case 'Waveform Sampler':
  //     instrumentType = <Waveform />
  //     break;
  //   default:
  // {instrumentType}
  render(){

    return(
      <div>
        <h1 className='title'>Cool Audio Stuff</h1>
        <div>
          <select onChange={this.selectInstrument} id='instrumentSelect'>
            <option>Choose an Instrument</option>
            <option>Synth</option>
            <option>Waveform Sampler</option>
          </select>
          <Synth />
          <Waveform />

        </div>
      </div>
    );
  }
};
//instrument route?
//{this.props.children}
// /instruments (contains the general effects)
//    /synth
//    /waveform
//instrument route - within synth, waveform, etc...
//
// var routes = (
//   <Router history={hashHistory}>
//     <Route path='/' component={App}>
//       <Route path='/synth' component={Synth} />
//       <Route path='/waveform' component={Waveform} />
//       <Route path='/instruments' component={Instrument} />
//     </Route>
//   </Router>
// );

// <Route path='/sampler' component={App}>
//   <IndexRoute component={Waveform} />
// </Route>
//<IndexRoute component={Synth} />

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App />, document.getElementById('app'));
});

//<Container />


// class Container extends React.Component {
//   constructor(props){
//     super(props);
//
//   }
//   componentWillMount(){
//     console.log('componentWillMount');
//     nx;
//   }
//   render(){
//     return(
//       <div className='container' >
//         <h1>React Synth</h1>
//         <Keyboard />
//         <SynthControls />
//         <Waveform />
//       </div>
//     )
//   }
// }
