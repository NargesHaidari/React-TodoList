
import TodoList from "./TodoList"

export default function TodoContainer(){
    return (
        <div className="shadow-md inline-flex flex-col px-6 py-6 bg-white w-[600px] gap-6">

            <h2 className="text-blue-700 text-2xl font-bold">Todo-Project | Narges Haidari Academy</h2>

            <input type="text" placeholder="What needs to be done today?" className="
            border border-gray-400 py-1 px-2 rounded-md text-sm outline-none"/>

            <TodoList/>

        </div>
    )
}