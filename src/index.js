import React from 'react';
import ReactDOM from 'react-dom';

import { MathJaxContext } from 'better-react-mathjax';

import './dark-theme-bootstrap.min.css';
import './index.css';

import Main from '@components';

const config = {
  hideUntilTypeset: "every",
  tex: {
    inlineMath: [['\$', '\$'], ["\\(", "\\)"]],
    processEscapes: true,
  },
}

ReactDOM.render(
  <React.StrictMode>
    <MathJaxContext config={config}>
      <Main />
    </MathJaxContext>
  </React.StrictMode>,
  document.getElementById('root')
);
