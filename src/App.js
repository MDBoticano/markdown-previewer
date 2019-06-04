import React from 'react';
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
      <>
        <Editor />
        <Preview />
      </>
    );
  }
}

export default App;
