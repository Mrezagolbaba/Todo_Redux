import React,{Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addNote} from "../util/Redux/actions"

class CreateNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            noteText: '',
        };
        this.onChangeNoteText = this.onChangeNoteText.bind(this)
        this.OnChangeButton = this.OnChangeButton.bind(this)
    }

    onChangeNoteText(e){
        this.setState({
            noteText: e.target.value
        })
    }
    OnChangeButton(){
        this.props.addNote(this.state.noteText);
        this.refs.someName.value = '';
    }

    render() {
        return (
            <div className="container__row">
                <input className="container__col" onChange={this.onChangeNoteText} ref="someName"/>
                <button className="addButton"  onClick={this.OnChangeButton }>
                    <p className="textButton">Add Note</p>
                </button>
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

