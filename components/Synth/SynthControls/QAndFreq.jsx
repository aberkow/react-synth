import React from 'react';

class QAndFreq extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <canvas id="qAndFreq1" data-nx='position' class="position"></canvas>
        <canvas id="qAndFreq2" data-nx='position' class="position"></canvas>
      </div>
    );
  }
};

module.exports = QAndFreq;
