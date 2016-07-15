import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

//import Keyboard from './components/Keyboard';
//import SynthControls from './components/SynthControls/SynthControls';
//import Waveform from './components/Waveform';
import Synth from './components/Synth/Synth';
import Waveform from './components/Waveform';

//import tone from 'tone';
//import nx from './js/nxOnLoad';

// class Test extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <h2>Test</h2>
//     );
//   }
// };

class App extends React.Component {
  constructor(props){
    super(props);
  }
  // componentWillMount(){
  //   nx;
  // }
  render(){
    return(
      <div>
        <h1 className='title'>Cool Audio Stuff</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
};
//instrument route?
// /instruments (contains the general effects)
//    /synth
//    /waveform
//instrument route - within synth, waveform, etc...
//
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/synth' component={Synth} />
      <Route path='/waveform' component={Waveform} />
    </Route>
  </Router>
);

// <Route path='/sampler' component={App}>
//   <IndexRoute component={Waveform} />
// </Route>
//<IndexRoute component={Synth} />

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(routes, document.getElementById('app'));
});

//<Container />


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
