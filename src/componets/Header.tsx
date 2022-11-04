import React, {FC} from 'react';
import Input from "./UiUxComponent/Input";
import {Style} from "../style/Style";
import {ButtonTemp} from "./UiUxComponent/Button";
import {useCustomSelector} from "../hooks/store";
import Nav from "./UiUxComponent/Nav";

interface HeaderType {
    setCurrentTemp: React.Dispatch<React.SetStateAction<string>>
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>
}


const Header: FC<HeaderType> = ({setCurrentTemp, setCurrentTheme}) => {

    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)

        return (
            <div className="flex justify-between mb-3">
                <div className="flex items-center justify-around min-w-[350px]">
                    <div>
                        <p className={Style.Header.text}>{weather.location.name}, {weather.location.country}</p>
                    </div>
                    <ButtonTemp setCurrentTemp={setCurrentTemp}/>
                </div>
                <div className="flex justify-between w-[450px]">
                    <Nav setCurrentTheme={setCurrentTheme}/>
                    <Input/>
                </div>
            </div>
        );
    }


export default Header;