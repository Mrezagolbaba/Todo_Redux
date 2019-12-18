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
    updateInput(e,id) {
        this.setState({
            noteText: e.target.value,
            id:id
        })
    }
    UpdateItem(id){
        this.props.updateNote(this.state.noteText,this.state.id)
    }

    render() {
        return (
            <div className="container__row">
                {this.props.listNote.map((item)=>{
                    return(

                            <div className="container__CardList" key={item.id} >
                                <div>
                                    <input className={'container__CardList__textEdit'} defaultValue={item.text} onChange={(e)=>this.updateInput(e,item.id)}/>
                                </div>
                                <div>
                                    <button className="container__CardList__Button" onClick={() => this.props.deleteNote(item.id)} >
                                        <img alt='icon' className='container__CardList__Button_icon' src={del}/>
                                    </button>
                                    <button className="container__CardList__Button" onClick={() => this.UpdateItem(item.id) }>
                                        <img alt='icon' className='container__CardList__Button_icon' src={edit}/>
                                    </button>
                                </div>
                            </div>

                    )
                })
                }
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
            updateNote

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);

