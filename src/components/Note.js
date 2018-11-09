import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <div className="pin-purple"></div>
        <header className="note-header">
          {this.props.title}
        </header>
        <div className="note-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Note;
