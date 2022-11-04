import React, {FC} from 'react';
import useDarkMode from "../../hooks/useDarkMode";

interface DarkMode {
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>
}

const Nav: FC<DarkMode> = ({setCurrentTheme}) => {
    const [colorTheme, setTheme] = useDarkMode()
    const color = () =>{
        setTheme(colorTheme)
        setCurrentTheme(colorTheme)
    }
    return (
        <span onClick={color} className="w-[50px] h-[50px] bg-indigo-500 block rounded-full shadow-lg cursor-pointer flex items-center justify-center">
            {colorTheme === 'light'?
            <svg width="30px" height="30px" viewBox="0 0 35 35" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/></svg>:
            <svg width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 88" id="Layer_88"><path d="M18,27H14a2,2,0,0,1-2-2V21.16a10,10,0,0,1-6-9.47A10.14,10.14,0,0,1,15.69,2h0A10,10,0,0,1,20,21.16V25A2,2,0,0,1,18,27ZM15.75,4A8.12,8.12,0,0,0,8,11.75a8,8,0,0,0,5.33,7.79,1,1,0,0,1,.67.94V25h4V20.48a1,1,0,0,1,.67-.94,8,8,0,0,0,2.9-13.28A7.85,7.85,0,0,0,15.75,4Z"/><path d="M19,30H13a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/><path d="M15,24V19.48a9,9,0,0,1-6-8.76c.09-3,1.71-4.93,4.52-6.32C9.49,4.47,7.12,8,7,11.72a9,9,0,0,0,6,8.76V25a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1H16A1,1,0,0,1,15,24Z"/></g></svg>}
        </span>
    );
};

export default Nav;