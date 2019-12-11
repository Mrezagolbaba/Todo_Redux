import {
    ADD_NOTE,
    REMOVE_NOTE,
    EDIT_NOTE, UPDATE_NOTE
} from '../constants'

let NOTEId = 2;

export const addNote = text => ({
    type: ADD_NOTE,
    id: NOTEId++,
    text,
});

export const deleteNote = (id) => ({
    type: REMOVE_NOTE,
    id: id
});
export const editNote = (id) => ({
    type: EDIT_NOTE,
    id: id
});
export const updateNote = (text,id) => ({
    type: UPDATE_NOTE,
    id: id+1,
    text
});
