import { combineReducers } from 'redux'
import NOTEReducer from './NoteReducer'

const MainReduces= combineReducers({
    NOTEReducer,
})
export default MainReduces;
