import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { themeSet } from "../store/slices/UserSlice";


function DarkMode() {
    const data = useSelector((state) => {
        return state.{'redux store name'};

    });

    const [theme, setTheme] = useState(data[data.length - 1]);

    let dispatch = useDispatch();

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

        dispatch(themeSet(localStorage.getItem("theme")));
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="dark:text-white  w-fit ">
            <button onClick={handleThemeSwitch} className="text-[30px]">
                {theme === "dark" ? "Light" : "dark"}
            </button>
        </div>
    );
}

export default DarkMode;



// This is for system base 

 // useEffect(() => {
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         setTheme('dark');
    //     }
    //     else {
    //         setTheme('light');
    //     }
    // }, [])
