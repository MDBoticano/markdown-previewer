import React from 'react';

// Styling
import './App.css';

// React-Redux
import { Provider } from 'react-redux';
import { createStore} from 'redux';

// Components
import Editor from './Editor';
import Preview from './Preview';


// Create the Redux store
//const store = createStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Render
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
