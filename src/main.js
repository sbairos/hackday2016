import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import ReadQueue from './ReadQueue';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
  ReactDOM.render(
  	React.createElement(ReadQueue),
  	document.getElementById('mount2')
  );
});