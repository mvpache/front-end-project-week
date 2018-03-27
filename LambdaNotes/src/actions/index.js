export const ADD_NOTE = 'ADD_NOTE';
export const ACTIVATE_NOTE = 'ACTIVATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    title: note.title,
    text: note.text
  };
}

export const activateNote = (id) => {
  return {
    type: ACTIVATE_NOTE,
    payload: id
  };
}

export const editNote = (note) => {
  return {
    type: EDIT_NOTE,
    title: note.title,
    text: note.text
  };
}
