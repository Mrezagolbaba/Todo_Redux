import {
    ADD_NOTE,
    REMOVE_NOTE,
    EDIT_NOTE, UPDATE_NOTE
} from '../constants'

let NOTEId = 2;

export const addNote = data => ({
    type: ADD_NOTE,
    data
});

export const deleteNote = (id) => ({
    type: REMOVE_NOTE,
    id: id
});
export const editNote = (id) => ({
    type: EDIT_NOTE,
    id: id
});
export const updateNote = (data,id) => ({
    type: UPDATE_NOTE,
    data,
    id
});
