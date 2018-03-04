import * as React from 'react';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('message', (event) => {
      console.log(event);
    }, false);
  }
  
  render() {
    return 'Preview';
  }
}

export default App;
