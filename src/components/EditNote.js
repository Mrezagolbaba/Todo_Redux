import React,{Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteNote, editNote, updateNote} from "../util/Redux/actions";
import del from'../assets/delete.svg'
import edit from'../assets/pencil.svg'


class EditNote extends Component{
    constructor(props){
        super(props)
        this.state={
            isEditing: false
        }

    }
    handleEdit = (e) => {
        e.preventDefault();
        const newNote = this.getTitle.value;
        const id= this.props.note.id
        const data = {
            newNote,
        };
        this.props.updateNote(data,id)
        console.log(data)
    };


    render() {
        return (
            <div className="container__row">
                <form onSubmit={this.handleEdit}>
                <div className="container__CardList" key={this.props.note.id} >
                    <div>
                        <input className={'container__CardList__textEdit'} ref={(input) => this.getTitle = input} defaultValue={this.props.note.text} />
                    </div>
                    <div>
                        <button className="container__CardList__Button" >
                            <img alt='icon' className='container__CardList__Button_icon' src={edit}/>
                        </button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            updateNote
        },
        dispatch
    );
};

export default connect(null, mapDispatchToProps)(EditNote);

