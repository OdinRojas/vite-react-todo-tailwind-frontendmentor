import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";
const App = () => { 
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-top-center">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">

          <h1 className="tracking-[0.3em] font-bold text-3xl uppercase text-white">Todo</h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="mt-8 px-4 flex gap-4 items-center bg-white rounded-md overflow-hidden py-4">
          <span className="inline-block rounded-full border-2 w-5 h-5"></span>
          <input 
            type="text" 
            placeholder="Create a new todo.."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 ">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 ">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 ">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>  
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>

      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center">Drag and drop to reorder list</section>

    </div>
    
  )
 }

 export default App;