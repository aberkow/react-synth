import React from 'react';

class SynthFilterSelect extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <canvas className='synthControls__filters' data-nx='select' id='filterType1'></canvas>
        <canvas className='synthControls__filters' data-nx='select' id='filterType2'></canvas>
      </div>
    );
  }
};

module.exports = SynthFilterSelect;
