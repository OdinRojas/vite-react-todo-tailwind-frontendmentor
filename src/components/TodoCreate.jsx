import { useState } from "react";

const TodoCreate = ({createTodo}) => { 
  
  const [title, setTitle] = useState(' ')

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  }
  
  
  return (
        <form onSubmit={handleSubmitAddTodo} className="transition-all duration-700 dark:bg-gray-800 mt-8 px-4 flex gap-4 items-center bg-white rounded-md overflow-hidden py-4">
          <span className="inline-block rounded-full border-2 w-5 h-5"></span>
          <input 
            type="text" 
            placeholder="Create a new todo.."
            value={title}
            className="w-full text-gray-400 outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    );
 };

 export default TodoCreate;