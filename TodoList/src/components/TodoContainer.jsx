
import { useState } from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer(){

    let [todos , setTodos] = useState([
        {id : uuidv4() , name: 'Eating breakfast', status : false},
        {id : uuidv4() , name: 'Going to gym', status : false},
        {id : uuidv4() , name: 'Watching movie', status : false},
    ])

    function handleStatus(todo){
        let updatedTodos = todos.map(
            (item)=>{
                if(item.id == todo.id){
                    item.status = !item.status;
                }
                return item
            }
        )
        setTodos(updatedTodos)
    }

    function handleInput(event){

        if(event.target.value == ""){
            return;
        }

        if(event.key == "Enter"){
            let newTodo = {id : uuidv4() , name: event.target.value, status : false};
            setTodos([...todos, newTodo]);
            event.target.value = "";
        }
        
    }

    function handleDelete(todo){
        let updatedTodos = todos.filter(
            item => item.id != todo.id
        )
        setTodos(updatedTodos)
    }

    function handleChange(todoId, newName){
        let updateTodos = todos.map(
            (item)=>{
                if(item.id == todoId){
                    item.name = newName;
                    return item 
                }else{
                    return item
                }
            }
        )
        setTodos(updateTodos)
    }

    return (
        <div className="shadow-md inline-flex flex-col px-6 py-6 bg-white w-[600px] gap-6">

            <h2 className="text-blue-700 text-2xl font-bold">Todo-Project | Narges Haidari Academy</h2>

            <input type="text" placeholder="What needs to be done today?" onKeyDown={handleInput} className="
            border border-gray-400 py-1 px-2 rounded-md text-sm outline-none"/>

            <TodoList todos={todos} handleStatus={handleStatus} handleDelete={handleDelete} handleChange={handleChange} />

        </div>
    )
}