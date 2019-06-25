const html = require('html-template-tag');

module.exports = (content) => html`<html>
<head>
<style>
</style>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js'></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.0/react-router-dom.js'></script>
</head>
<body>
  <div id='root'></div>
  <script type='text/babel'>
    const root = document.querySelector('#root');
    const { React } from 'React'


    class App extneds React.component {

    }

    ReactDOM.render(<App />, root);
  </script>
</body>
</html>
`;
