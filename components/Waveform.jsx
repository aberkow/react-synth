import React from 'react';

class Waveform extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='waveform'>
        <canvas data-nx='waveform'></canvas>
      </div>
    );
  }
};

module.exports = Waveform;
