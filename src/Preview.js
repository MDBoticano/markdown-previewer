import React from 'react';

// Styling
import './Preview.css';

// Marked for parsing and converting to markdown
import marked from 'marked';

// React-Redux
// import { connect } from 'react-redux';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: this.props.editorText,
      markdownText: ""
    };
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

    // Update state to include converted text
    fetch(defaultPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdownText: marked(text)
        })
      })
  }

  // Function: if props changes, update state to reflect it
  // Components don't re-render unless the STATE changes
  componentDidUpdate(prevProps) {
    // Compare current props to previous props
    if (this.props.editorText !== prevProps.editorText) {
      // Update state with a converted mark down text
      // Note: editorText is unecessary, as it's the same as props
      this.setState({ editorText: this.props.editorText, markdownText: marked(this.props.editorText) });
    }
  }

  // Render
  render() {
    return (
      <div id="preview-body">
        <h2 id="preview-title">Preview</h2>
        <div id="preview" class="markdown-text"
          dangerouslySetInnerHTML={{ __html: this.state.markdownText }} />
      </div>
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