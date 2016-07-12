import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

//import Keyboard from './components/Keyboard';
//import SynthControls from './components/SynthControls/SynthControls';
//import Waveform from './components/Waveform';
import Synth from './components/Synth/Synth';

import tone from 'tone';
import nx from './js/nxOnLoad';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    nx;
  }
  render(){
    return(
      <h1 className='title'>Cool Audio Stuff</h1>
    );
  }
};

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

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/synth' component={App}>
        <IndexRoute component={Synth} />
      </Route>

    </Route>
  </Router>
);

// <Route path='/sampler' component={App}>
//   <IndexRoute component={Waveform} />
// </Route>

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(routes, document.getElementById('app'));
});

//<Container />
