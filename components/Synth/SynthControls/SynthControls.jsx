import React from 'react';
var AsdrEnvelope = require('./AsdrEnvelope');
var FilterAsdrEnvelope = require('./FilterAsdrEnvelope');
var Harmonicity = require('./Harmonicity');
var QAndFreq = require('./QAndFreq');
var SynthFilterSelect = require('./SynthFilterSelect');
var SynthVoiceWave = require('./SynthVoiceWave');
var Vibrato = require('./Vibrato');

class SynthControls extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='synthControls'>
        <h2 className='synthControls__title'>Synth Controls</h2>
        <SynthVoiceWave />
        <AsdrEnvelope />
        <Vibrato />
        <Harmonicity />
        <SynthFilterSelect />
        <FilterAsdrEnvelope />
        <QAndFreq />
      </div>
    );
  }
};

module.exports = SynthControls;
