import React, { Component } from 'react';
import './Preview.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: "Hello"
    };
  }

  // Function: Copy text from Editor and set it as Preview text

  // Function: Apply Markdown to copied text


  // Render
  render() {
    return (
      <div id="preview">
        <div id="markdown-text">
          {this.state.editorText}
        </div>
      </div>
    );
  }
}

export default Preview;