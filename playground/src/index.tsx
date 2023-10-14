import React from 'react';
import { createRoot } from 'react-dom/client';

import {Button} from '@ds.e/react';

console.log('hello');

// ReactDOM.render(
//   <Button label='Click me'></Button>,
//   document.getElementById("root")
// );

const App = () => {
  return <div>Hello, React 18! <Button label='Click me'></Button></div>;
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
