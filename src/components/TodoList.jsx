import IconCross from "./IconCross";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => { 
    return (
        <div className="bg-white overflow-hidden rounded-t-md [&>article]:p-4 mt-8">
          
          {todos.map( (todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
          ))}
          
        </div>
    );
 };

 export default TodoList;