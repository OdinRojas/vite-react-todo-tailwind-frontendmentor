import { useEffect, useState } from "react";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === 'dark' ? true : false;

const Header = () => { 

    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() =>{
        if (darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);



    return (
        <header className="md:max-w-xl transition-all duration-700 container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="tracking-[0.3em] font-bold text-3xl uppercase text-white">Todo</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconSun /> : <IconMoon />
                    }
                </button>
            </div>
      </header>
    );
 };

 export default Header;