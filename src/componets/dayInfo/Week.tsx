import React, {FC} from 'react';
import {weekWeatherType} from "../../store/types/types";
import {useCustomSelector} from "../../hooks/store";
import {Style} from "../../style/Style";
import {CurrentData, CurrentDay} from "./DataFormat";

interface weekWeatherProps {
    dayNumber: number,
}

/*------------------------------------------------------------------------------*/

const Week: FC<weekWeatherProps> = ({dayNumber}) => {

    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    const type = dayNumber as keyof weekWeatherType;

    return (
        <div>
            <div className={`${Style.Additional.infotemp}`}><CurrentDay dayNumber={type}/></div>
            <div className={Style.Week.info}><CurrentData dayNumber={type}/></div>
            <div className={Style.Week.content}>
                <div><img src={weather.forecast.forecastday[type].day.condition.icon} alt=""/></div>
                <div className={Style.Additional.infotemp}>
                    <p>{weather.forecast.forecastday[type].day.maxtemp_c}</p>
                    <p>{weather.forecast.forecastday[type].day.mintemp_c}</p>
                </div>
            </div>
        </div>
    );
};

export default Week;