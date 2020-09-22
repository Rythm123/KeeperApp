import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props){

    const [isExpanded,setExpanded]=useState(false);

    const [newNote,setNewNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value}=event.target;
        setNewNote(prevValue =>{
            return{
                ...prevValue,
                [name]:value
            }
        });
    }

    function clickHandler(event){
        props.onAdd(newNote)

        setNewNote({
            title:"",
            content:""
        });


        event.preventDefault();
    }

    function handleExpand(){
        setExpanded(true);
    }


    return(
        <div>
            <form className="create-note" >
            {isExpanded && <input 
            onChange={handleChange} 
            type="text" 
            name="title" 
            placeholder="Title"  
            value={newNote.title}/>}
                
            <textarea onChange={handleChange} onClick={handleExpand} name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} value={newNote.content} />
            <Zoom in={isExpanded}>
                <Fab onClick={clickHandler}>
                    <AddIcon/>
                </Fab>
            </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;