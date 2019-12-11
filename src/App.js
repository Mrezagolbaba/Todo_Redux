import React from 'react';
import './sass/App.scss';
import Home from "./views/Home";
import { Provider } from 'react-redux'
import configureStore from "./util/Redux/store/store";

function App() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    );
}

export default App;
