import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleSimpleClick = () => {
  console.log('click')
  return true
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleSimpleClick} />
  </div>,
  document.getElementById('root')
);
