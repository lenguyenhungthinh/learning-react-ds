import React from "react";
import { createRoot } from "react-dom/client";

import { Select } from "@ds.e/react";

import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'
import '@ds.e/scss/lib/global.css'

console.log("hello");

const options = [{
  label: 'Strict Black',
  value: 'strict-black'
}, {
  label: 'Heavenly Green',
  value: 'heavenly-green'
}, {
  label: 'Sweet Pink',
  value: 'pink'
}]

const App = () => {
  return (
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>
  );
};

// Replace ReactDOM.render with createRoot
const rootElement = document.getElementById("root");
if (rootElement) {
  // Use createRoot instead of ReactDOM.render
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
