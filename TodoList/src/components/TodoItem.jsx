import { useState } from "react";
import TodoActions from "./TodoActions";

export default function TodoItem({todo}){

    let [check, setCheck] = useState(false)

    return(
        <li className="flex relative gap-1 border-b py-4" >
            <input type="checkbox" checked={check} onChange={()=>setCheck(check ? false : true)}/>
            <p className={`${check ? "line-through" : ""}`}>{todo.name}</p>
            <TodoActions/>
        </li>
    )
}