import React ,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

console.log(notes);


function App(){

    const [noteItems,setNoteItems]=useState([]);


    function addNote(newNote){
        console.log(newNote);
        setNoteItems(prevNotes => {
           return [...prevNotes,newNote];
        });
    }

    function deleteNote(id){
        console.log("Delete request accepted");
        setNoteItems(prevNotes => {
           return prevNotes.filter((noteItem,index)=>{
               return index!==id;
            });
        })

    }


    return(<div>
    <Header /> 
    <CreateArea 
        onAdd={addNote}
    />
    {noteItems.map( (noteItem,index) =>(
     <Note 
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
    />
))}
    
    <Footer />
    </div>)
}

export default App;