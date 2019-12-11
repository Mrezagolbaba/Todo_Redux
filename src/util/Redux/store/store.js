import {
    createStore,
    applyMiddleware
} from 'redux';
import MainReduces from '../reducers';

const configureStore = () => {
    let store;
    store = createStore(
        MainReduces,
        applyMiddleware()
    );
    return store;
};
export default configureStore;
