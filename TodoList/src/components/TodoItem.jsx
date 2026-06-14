import TodoActions from "./TodoActions";

export default function TodoItem(){
    return(
        <li className="flex relative gap-1 border-b py-4">
            <input type="checkbox" />
            <p>Eating breakfast at 7:00</p>
            <TodoActions/>
        </li>
    )
}