import defaultNotes from './defaultNotes';

import { ADD_NOTE, ACTIVATE_NOTE, EDIT_NOTE } from '../actions';

let nextId = 7;

const intialState = {
  idCount: nextId,
  notes: defaultNotes,
  activeNote: {}
}

export default (state = intialState, action) => {
  switch (action.type) {

    case ADD_NOTE:
      const newNote = {
        id: state.idCount++,
        title: action.title,
        text: action.text
     }
      return { ...state, notes: state.notes.concat(newNote) };

    case ACTIVATE_NOTE:
     const active = state.notes.filter(note => note.id == action.payload)
     return { ...state, activeNote: active[0]}

    case EDIT_NOTE:
      const editedNote = {
        id: action.id,
        title: action.title,
        text: action.text
      }
      const notes = state.notes;
      notes.forEach(note => {
        if (note.id == editedNote.id) {
          note.title = editedNote.title;
          note.text = editedNote.text; 
        }
      })
      return { ...state, notes: notes };
    default:
      return state;
  }
}