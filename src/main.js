import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ReadQueue from './ReadQueue';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Header),
    document.getElementById('mount')
  );
  ReactDOM.render(
  	React.createElement(ReadQueue),
  	document.getElementById('mount2')
  );
});