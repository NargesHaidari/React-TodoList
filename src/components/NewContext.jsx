import { createContext } from "react";
import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export let NewContext = createContext();

export function AppDataProvider({children}){

    let [todos , setTodos] = useState([
        {id : uuidv4() , name: 'Eating breakfast', status : false},
        {id : uuidv4() , name: 'Going to gym', status : false},
        {id : uuidv4() , name: 'Watching movie', status : false},
    ])

    function handleStatus(todo){
        let updatedTodos = todos.map( item =>
                item.id === todo.id
                ? {...item , status: !item.status}
                : item
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
        const updatedTodos = todos.map(item =>
            item.id === todoId
                ? { ...item, name: newName }
                : item
        );

        setTodos(updatedTodos);
    }

    return (
        <NewContext.Provider value={{todos , handleStatus , handleInput , handleDelete , handleChange}}>
            {children}
        </NewContext.Provider>
    )
}