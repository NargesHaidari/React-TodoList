
import { useState } from "react";
import TodoActions from "./TodoActions";

export default function TodoItem({todo , handleStatus , handleDelete, handleChange}){

    let [edit, setEdit] = useState(false);

    function closeInput(event){
        if(event.key == "Enter"){
            handleChange(todo.id , event.target.value);
            setEdit(false);
        }
    }

    return(
        <li className="flex relative gap-1 border-b py-4" >
            {
                edit ? <input onKeyDown={()=>{closeInput(event)}} defaultValue={todo.name} type="text" className="border border-gray-400 py-1 px-2 rounded-md text-sm outline-none w-full" /> 
                : (
                    <>
                        <input type="checkbox" checked={todo.status} onChange={()=>{handleStatus(todo)}} className="outline-none"/>
                        <p className={`${todo.status ? "line-through" : ""}`}>{todo.name}</p>
                        <TodoActions setEdit={setEdit} handleDelete ={handleDelete} todo={todo} />
                    </>
                )
            }
            
        </li>
    )
}