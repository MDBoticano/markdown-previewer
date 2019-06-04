import React, { Component } from 'react';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <textarea id="editor">
        Hello
      </textarea>
    );
  }
}

export default Editor;