import React from 'react';
import ReactDOM from 'react-dom';

import tone from 'tone';
import nx from './nxOnLoad';

class Keyboard extends React.Component {
  //all nexusUI elements need to use data-nx with React.
  //be sure to change the manager.prototype.transform function
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='keyboard'>
        <canvas id="keyboard" class='keyboard__ui' data-nx='keyboard' ></canvas>
      </div>
    );
  }
}

class Container extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){
    console.log('componentWillMount');
    nx;
  }

  render(){
    return(
      <div className='container' >
        <h1>React Synth</h1>
        <Keyboard />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container />, document.getElementById('app'));
});
