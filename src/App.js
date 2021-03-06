import React from 'react';

// Styling
import './App.css';

// React-Redux
import { Provider } from 'react-redux';
import { createStore} from 'redux';

// Components
import Editor from './Editor';
import Preview from './Preview';

// ---------------------------- Redux Code ---------------------------------- //
// Consts for action types
const PREVIEW = 'PREVIEW';

// Action creator for 'PREVIEW'
// const previewText = (text) => {
//   return {
//     type: PREVIEW,
//     text: text
//   }
// }

// Reducer
const editorReducer = (state = '', action) => {
  switch (action.type) {
    case (PREVIEW):
      return [action.text];
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(editorReducer);

// ---------------------------- React Code ---------------------------------- //

// Styling for body
let styles = {
  body : {
    "background-color": "#ddd",
    "min-height": "100vh"
  }
}

// Class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: "",
      previewText: ""
    };
    this.previewUpdater = this.previewUpdater.bind(this);
    this.loadStyles = this.loadStyles.bind(this);
  }

  // Function: callback to update parent using child
  previewUpdater = (childText) => {
    this.setState({
      previewText: childText
    });
  }

  loadStyles = () => {
    for (var i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
    console.log("Styles loaded");
  }

  componentWillMount() {
    this.loadStyles();
  }



  // Subscribe to store
  // store.subscribe = () => {
  //   this.setState({
  //     editorText: store.getState().editorText;
  //   });
  // }

  // Render
  render() {
    return (
      <div id="app-body">
        <Editor previewUpdater={this.previewUpdater}/>
        <Preview editorText={this.state.previewText}/>
      </div>
    );
  }
}




// Wrap App with Provider to provide access to store
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <App />
      </Provider>
    );
  }
}


export default AppWrapper;