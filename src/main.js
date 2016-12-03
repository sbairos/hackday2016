import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ReadQueue from './ReadQueue';
import SignIn from './SignIn';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Header),
    document.getElementById('mount')
  );
  ReactDOM.render(
  	React.createElement(ReadQueue),
  	document.getElementById('mount2')
  );
  ReactDOM.render(
  	React.createElement(SignIn),
  	document.getElementById('mount3')
  );
});