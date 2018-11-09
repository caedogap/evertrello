import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Board from './Board.js';
import './App.css';

class App extends Component {
  state = {
    boards: [
      {
        title: 'My Board 1',
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
          },
          {
            title: 'My fourth note',
            content: 'Content content content content'
          },
          {
            title: 'My fifth note',
            content: 'Content content content content'
          },
          {
            title: 'My sixth note',
            content: 'Content content content content'
          }
        ]
      },
      {
        title: 'My Board 2',
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
      },
      {
        title: 'My Board 3',
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
      }
    ],
  };

  render() {
    const boards = this.state.boards.map((board) => (
        <Board
          title={board.title}
          notes={board.notes}
        />
    ));

    return (
      <div className="app">
        <header className="app-header">
          <h1>EverTrello</h1>
          <FontAwesomeIcon size='2x' icon="plus-circle" />
        </header>
        {boards}
      </div>
    );
  }
}

export default App;
