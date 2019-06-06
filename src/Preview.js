import React from 'react';

// Styling
import './Preview.css';

// React-Redux
// import { connect } from 'react-redux';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: this.props.editorText,
      markdownText: ""
    };
  }

  // Function: if props changes, update state to reflect it
  // Components don't re-render unless the STATE changes
  componentDidUpdate(prevProps) {
    // Compare current props to previous props
    if (this.props.editorText !== prevProps.editorText) {
      // update state if props have been changed
      this.setState({ editorText: this.props.editorText });
    }
  }

  // Function: Copy text from Editor and set it as Preview text

  // Function: Apply Markdown to copied text


  // Render
  render() {
    return (
      <React.Fragment>
        <h2>Preview</h2>
        <div id="preview">
          <div id="markdown-text">
            <p>{this.state.editorText}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// Redux code
// const mapStateToProps = function (state) {
//   console.log(state.editorText);
//   return {
//     previewText: state.editorText
//   }
// }

// export default connect(mapStateToProps)(Preview);

export default Preview;