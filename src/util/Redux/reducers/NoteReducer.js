import {ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, UPDATE_NOTE} from '../constants'

const INITIAL_DATA = [];

const NOTEReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_NOTE:
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    editing:false,
                }
            ];
        case REMOVE_NOTE:
            const numIndex = parseInt(action.id);
            return state.filter(NOTE => NOTE.id !== numIndex);
        case EDIT_NOTE:
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case UPDATE_NOTE:
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    editing:false,
                }
            ];

        default:
            return state
    }
};

export default NOTEReducer
