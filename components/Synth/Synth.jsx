import React from 'react';

import Keyboard from './Keyboard';
import SynthControls from './SynthControls/SynthControls';

class Synth extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Keyboard />
        <SynthControls />
      </div>
    );
  }
};

module.exports = Synth;
