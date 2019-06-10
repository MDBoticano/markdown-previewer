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
    this.loadDefaultMD = this.loadDefaultMD.bind(this);
  }

  // Lifecycle: once component has mounted, right before rendering
  componentDidMount() {
    this.loadDefaultMD();
  }

  // Loads default markdown file to preview
  loadDefaultMD() {
    // Path for Default.md
    let defaultPath = require("./Default.md");

    // Update state to include editor text
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
      <div id="editor-body">
        <h2 id="editor-title">Editor</h2>
        <textarea id="editor" value={this.state.editorText}
          onChange={this.handleTextAreaChange}>
        </textarea>
      </div>
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