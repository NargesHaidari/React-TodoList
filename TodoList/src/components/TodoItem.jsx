
import TodoActions from "./TodoActions";

export default function TodoItem({todo , handleStatus , handleDelete}){

    return(
        <li className="flex relative gap-1 border-b py-4" >
            <input type="checkbox" checked={todo.status} onChange={()=>{handleStatus(todo)}}/>
            <p className={`${todo.status ? "line-through" : ""}`}>{todo.name}</p>
            <TodoActions handleDelete ={handleDelete} todo={todo} />
        </li>
    )
}