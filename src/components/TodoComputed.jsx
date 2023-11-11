const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return(
        <section className="transition-all duration-700 dark:bg-gray-800 py-4 px-4 flex rounded-b-md justify-between bg-white">
          <span className="text-gray-400">{computedItemsLeft} items left</span>
          <button 
            className="text-gray-400"
            onClick={clearCompleted}
          >
            Clear completed
          </button>
        </section>
    );
 };

 export default TodoComputed;