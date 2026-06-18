

export default function TodoActions ({todo , handleDelete, setEdit}){

    return (
        <div className="absolute right-0 flex gap-1">

            <i onClick={()=>{setEdit(true)}}  className="fa-solid fa-pen-to-square text-blue-400"></i>

            <i onClick={()=>{handleDelete(todo)}} className="fa-solid fa-x text-red-500"></i>

        </div>
    )

}