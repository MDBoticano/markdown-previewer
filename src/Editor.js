import React, { Component } from 'react';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: ""
    };

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  // Function: when textarea is modified, update state to reflect changes
  handleTextAreaChange = () => {

  }


  // Render
  render() {
    return (
      <textarea id="editor" onChange={this.handleTextAreaChange}>
      </textarea>
    );
  }
}

export default Editor;