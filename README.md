# react-synth
A synthesizer using React, ToneJS, and nexusUI.

This is a proof of concept and will be updated to include more features (e.g. effects). NB - In order to get nexusUI to play nicely with React, you need to modify the `manager.prototype.transform` function in `nexusUI.js` to use the attribute 'data-nx' instead of 'nx'. This is required by React.
