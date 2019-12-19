import React,{Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteNote, editNote, updateNote} from "../util/Redux/actions";
import del from'../assets/delete.svg'
import edit from'../assets/pencil.svg'
import EditNote from "./EditNote";
class ListNote extends Component{

    render() {
        return (
            <div className="container__row">
                {this.props.listNote.map((item)=>{
                    return(
                        item.editing?
                            <EditNote note={item} key={item.id}/>
                            :
                            <div className="container__CardList" key={item.id} >
                                <div>
                                    <p className={'container__CardList__text'}>{item.text}</p>
                                </div>
                                <div>
                                    <button className="container__CardList__Button" onClick={() => this.props.deleteNote(item.id)} >
                                        <img alt='icon' className='container__CardList__Button_icon' src={del}/>
                                    </button>
                                    <button className="container__CardList__Button" onClick={() => this.props.editNote(item.id)}>
                                        <img alt='icon' className='container__CardList__Button_icon' src={edit}/>
                                    </button>
                                </div>
                            </div>)})}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        listNote:state.NOTEReducer
    }
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteNote,
            editNote,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNote);

