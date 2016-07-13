import React from 'react';

class FilterAsdrEnvelope extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <canvas class="synthControls__envelope" data-nx='envelope' id="filterAsdr1"></canvas>
        <canvas class="synthControls__envelope" data-nx='envelope' id="filterAsdr2"></canvas>
      </div>
    );
  }
};

module.exports = FilterAsdrEnvelope;
