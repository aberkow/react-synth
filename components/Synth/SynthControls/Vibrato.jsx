import React from 'react';


class Vibrato extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <canvas className='position' data-nx='position' id='vibrato'></canvas>
    );
  }
};

module.exports = Vibrato;
