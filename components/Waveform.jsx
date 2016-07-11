import React from 'react';

class Sampler extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='sampler'>
        <canvas nx='waveform'></canvas>
      </div>
    );
  }
}

module.exports = Waveform;
