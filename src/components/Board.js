import React, { Component } from 'react';
import Note from './Note.js';
import './Board.css';

class Board extends Component {

  render() {

    const notes = this.props.notes.map((note) => (
      <Note
          title={note.title}
          content={note.content}
      />
    ));

    return (
      <div className="board">
          <header className="board-header">
            <div className="pin-green"></div>
            <h3>{this.props.title}</h3>
          </header>
          <div className="board-content">
            {notes}
          </div>
      </div>
    );
  }
}

export default Board;