import React from 'react';
import { createRoot } from 'react-dom/client';

import {Button} from '@ds.e/react';
import '@ds.e/scss/lib/Button.css'

console.log('hello');


const App = () => {
  return <Button label='Finish adding css!'></Button>;
};

// Replace ReactDOM.render with createRoot
const rootElement = document.getElementById('root');
if (rootElement) {
  // Use createRoot instead of ReactDOM.render
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
