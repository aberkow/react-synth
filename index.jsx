import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

//import Keyboard from './components/Keyboard';
//import SynthControls from './components/SynthControls/SynthControls';
//import Waveform from './components/Waveform';
import Synth from './components/Synth/Synth';
import Waveform from './components/Waveform';

import duoSynth from './js/synth/duoSynth';

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
    //this.loadOnce = this.loadOnce.bind(this);
  }
  componentWillMount(){
    console.log(document.location, 'from app document.location');
    console.log(window.location, 'from app window.location');
    //document.location.reload();
    nx.onload = function(){
      keyboardTest.on('*', function(data){
        var frequency;
        if (data.on > 0){
          frequency = nx.mtof(data.note);
          duoSynth.triggerAttack(frequency);
        }
        else if (data.on === 0) {
          duoSynth.triggerRelease();
        }
      });
    }
  }
  componentDidMount(){
    console.log(document.location, 'from app componentDidMount doc.loc');
    console.log(window.location, 'from app componentDidMount window.loc');


    // window.location.reload();
    // document.location.reload();
  }
  // loadOnce(){
  //   window.location.hash.reload();
  //   onLoad={this.loadOnce}
  // }
  render(){
    return(
      <div >
        <header className='header'>
          <h1 className='title'>Cool Audio Stuff</h1>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item'>
                <Link to={'/synth/'}>
                  Synth
                </Link>
              </li>
              <li className='header__nav-item'>
                <Link to={'/waveform/'}>
                  Waveform Sampler
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <canvas id="keyboardTest" className='keyboard__ui' data-nx='keyboard' ></canvas>
        </div>
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
// var routes = (
//   <Router history={hashHistory}>
//     <Route path='/' component={App}>
//       <Route path='/synth' component={Synth} />
//       <Route path='/waveform' component={Waveform} />
//     </Route>
//   </Router>
// );

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/synth/' component={App}>
        <IndexRoute component={Synth}   />
      </Route>
      <Route path='/waveform/' component={App}>
        <IndexRoute component={Waveform} />
      </Route>
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
