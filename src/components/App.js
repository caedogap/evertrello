import React, { Component } from 'react';
import Note from './Note.js';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {
        title: 'My first note',
        content: 'Content content content content'
      },
      {
        title: 'My second note',
        content: 'Content content content content'
      },
      {
        title: 'My third note',
        content: 'Content content content content'
      }
    ]
  };

  render() {
    const notes = this.state.notes.map((note) => (
      <Note
        title={note.title}
        content={note.content}
      />
    ));

    return (
      <div className="app">
        <header className="app-header">
          Evertrello
        </header>
        {notes}
      </div>
    );
  }
}

export default App;
