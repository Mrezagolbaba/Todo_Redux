import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect, } from "react-redux";
import {addNote} from "../util/Redux/actions"

class   CreateNote extends Component{

    handleSubmit =(e)=>{
        e.preventDefault();
        const text = this.getNote.value;
        const data = {
            id: new Date(),
            text,
            editing:false
        };
        this.props.addNote(data);
        this.getNote.value= ''
    };
render() {
    return (
        <div className="container__row">
            <form onSubmit={this.handleSubmit}>
                <input className="container__col"  ref={(input)=>this.getNote = input} />
                <button className="addButton">
                    <p className="textButton">Add Note</p>
                </button>
            </form>
        </div>
    );
}



}
const mapStateToProps = state => {
    return{
        listNote:state.NOTEReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addNote
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)

