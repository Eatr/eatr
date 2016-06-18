
import React from 'react';
import App from './app.jsx';

export default React.createClass({
  render: function() {
    return <div>
      <App />
      {this.props.children}
    </div>
  }
});