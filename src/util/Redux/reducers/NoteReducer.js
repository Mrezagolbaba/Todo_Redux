import {ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, UPDATE_NOTE} from '../constants'

const INITIAL_DATA = [];

const NOTEReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_NOTE:
            return state.concat([action.data]);
        case REMOVE_NOTE:
            return state.filter((post)=>post.id !== action.id);
        case EDIT_NOTE:
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case UPDATE_NOTE:
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        text:action.data.newNote,
                        editing: !post.editing
                    }
                } else return post;
            });
        default:
            return state
    }
};

export default NOTEReducer
