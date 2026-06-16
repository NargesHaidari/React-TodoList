import TodoItem from "./TodoItem";


export default function TodoList({todos , handleStatus , handleDelete}){
    return (
        <ul>
            {
            todos.map(
                (todo) => <TodoItem todo={todo} key={todo.id} handleStatus={handleStatus} handleDelete={handleDelete} />
            )
            }
        </ul>
    )
}