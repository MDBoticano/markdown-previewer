import React from 'react';

// Styling
import './App.css';

// Components
import Editor from './Editor';
import Preview from './Preview';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="app-wrapper">
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default App;
