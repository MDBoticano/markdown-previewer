import React from 'react';

// Styling
import './Editor.css';

// React-Redux
import { connect } from 'react-redux';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: this.props.editorText,
      textToPreview: ""
    };
    // Bind functions
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  // Function: when textarea is modified, update state to reflect changes
  handleTextAreaChange = (event) => {
    this.setState({
      editorText: event.target.value,
    });
  }

  // Render
  render() {
    return (
      <React.Fragment>
        <textarea id="editor" value={this.state.editorText} 
        onChange={this.handleTextAreaChange}>
        </textarea>
      </React.Fragment>    
    );
  }
}

// Puts state data into store
const mapStateToProps = (state) => {
  console.log(state.editorText);
  return {
    editorText: state.editorText
  }
}

// Dispatch to actually change store
const mapDispatchToProps = (dispatch, props) => {
  return {
    editorText: props.editorText
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);