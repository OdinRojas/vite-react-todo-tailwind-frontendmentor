import IconCross from "./IconCross";
import IconCheck from "./IconCheck";

const TodoItem = ({todo, removeTodo, updateTodo}) => { 

    const {id, title, completed} = todo;

    
    return(
        <article className="transition-all duration-700 flex gap-4 border-b border-b-gray-400 items-center px-4 dark:bg-gray-800 dark:text-gray-400">
            
            <button 
                className={`border-2 w-5 h-5 rounded-full ${
                    completed 
                    ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block flex-none"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`"text-gray-600 " ${completed && "line-through text-gray-400"}`}>{title}</p>
            <button 
                className="flex-none"
                onClick={() => removeTodo(id)}
            >
                <IconCross />
            </button>
        </article>
    );
 };

 export default TodoItem;