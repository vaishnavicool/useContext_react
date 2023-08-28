import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    var s1 = {
        "name": "vaishnavi",
        "class": "5b"
    };

    const [state, setState] =useState(s1)

    const update=()=>{
        setTimeout(()=>{
            setState = {
                "name": "pranjan",
                "class": "5c"
            }
        },1000)
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
