import React from 'react';

// Styling
import './Editor.css';

// React-Redux
// import { connect } from 'react-redux';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: this.props.editorText,
      textToPreview: ""
    };
    // Bind functions
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.updateParent = this.updateParent.bind(this);
  }

  // At the start, load default markdown into editor
  componentDidMount() {
    // Path for Default
    let defaultPath = require("./Default.md");

    // Update state 
    fetch(defaultPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          editorText: text
        })
      })
  }

  // Function: when textarea is modified, update state to reflect changes
  handleTextAreaChange = (event) => {
    this.setState({
      editorText: event.target.value,
    }, () => {
      this.updateParent();
    });
  }

  // Use callback function to update parent editorText
  // ISSUE: one character behind, need to handle async?
  // Function: callback function to update parent property "editorText"
  updateParent = () => {
    this.props.previewUpdater(this.state.editorText);
  }

  // Render
  render() {
    return (
      <React.Fragment>
        <h2>Editor</h2>
        <textarea id="editor" value={this.state.editorText}
          onChange={this.handleTextAreaChange}>
        </textarea>
      </React.Fragment>
    );
  }
}

// Redux store code
// // Puts state data into store
// const mapStateToProps = (state) => {
//   //console.log(state.editorText);
//   return {
//     editorText: state.editorText
//   }
// }

// // Dispatch to actually change store
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     editorText: props.editorText
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Editor);
export default Editor;