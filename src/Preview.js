import React from 'react';

// Styling
import './Preview.css';

// React-Redux
import { connect } from 'react-redux';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: ""
    };
  }

  // Function: Copy text from Editor and set it as Preview text

  // Function: Apply Markdown to copied text


  // Render
  render() {
    return (
      <div id="preview">
        <div id="markdown-text">
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  console.log(state.editorText);
  return {
    previewText: state.editorText
  }
}

export default connect(mapStateToProps)(Preview);