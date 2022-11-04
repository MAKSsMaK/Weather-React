import React, {FC, useEffect} from 'react';
import {Style} from "../../style/Style";
import {useCustomSelector} from "../../hooks/store";

interface ButtonType {
    setCurrentTemp: React.Dispatch<React.SetStateAction<string>>
}

export const ButtonTemp: FC<ButtonType> = ({setCurrentTemp}) => {

    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)

    const temp_c = () => setCurrentTemp(`${weather.forecast.forecastday[0].day.avgtemp_c} °C`)

    const temp_f = () => setCurrentTemp(`${weather.forecast.forecastday[0].day.avgtemp_f} F`)

    useEffect(() => {
        setCurrentTemp(`${weather.forecast.forecastday[0].day.avgtemp_c} °C`)
    }, [setCurrentTemp, weather]);

    return (
        <div className="w-[150px] flex justify-around">
            <button className={`${Style.Buttons} ${Style.darkMode.backb}`} onClick={temp_c}>°C</button>
            <button className={`${Style.Buttons} ${Style.darkMode.backb}`} onClick={temp_f}>F</button>
        </div>
    );
};

