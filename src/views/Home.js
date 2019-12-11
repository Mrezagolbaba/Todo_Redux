import React,{Component} from 'react';
import '../sass/App.scss';

import CreateNote from "../components/CreateNote";
import ListNote from "../components/ListNote";
class Home extends Component{
    render() {
        return (
            <div className="container">
                <CreateNote/>
                <ListNote/>
            </div>
        );
    }
}

export default Home;
