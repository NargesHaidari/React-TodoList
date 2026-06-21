
import { useContext, useState } from "react";
import TodoActions from "./TodoActions";
import { NewContext } from "./NewContext";

export default function TodoItem({todo}){

    let {handleChange , handleStatus} = useContext(NewContext);

    let [edit, setEdit] = useState(false);
    let [editValue, setEditValue] = useState(todo.name);

    function closeInput(event){
        if(event.key === "Enter"){
            handleChange(todo.id , editValue);
            setEdit(false);
        }
    }

    return(
        <li className="flex relative gap-1 border-b py-4" >
            {
                edit ? <input onChange={e => setEditValue(e.target.value)} onKeyDown={closeInput} defaultValue={editValue} type="text" className="border border-gray-400 py-1 px-2 rounded-md text-sm outline-none w-full" /> 
                : (
                    <>
                        <input type="checkbox" checked={todo.status} onChange={()=>{handleStatus(todo)}} className="outline-none"/>
                        <p className={`${todo.status ? "line-through" : ""}`}>{todo.name}</p>
                        <TodoActions setEdit={setEdit} todo={todo} />
                    </>
                )
            }
            
        </li>
    )
}