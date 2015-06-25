'use strict';

var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          <div id="container">
            {this.props.children}
          </div>
        </body>
        <script src='/bundle.js'></script>
        <script src="https://fb.me/react-0.13.3.min.js"></script>
      </html>
    );
  }
});