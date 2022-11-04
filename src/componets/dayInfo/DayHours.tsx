import React, {FC} from 'react';
import {hoursType} from "../../store/types/types";
import {useCustomSelector} from "../../hooks/store";
import {Style} from "../../style/Style";

interface dayHoursProps {
    first: number,
    second: number,
    partDay: string,
    firstTime: string,
    secondTime: string,
}

const DayHours: FC<dayHoursProps> = ({first, second, partDay, firstTime, secondTime}) => {

    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    return (
        <div className="relative">
            <div className={`${Style.Main.data} pt-[32px]`}>{partDay}</div>
            <div className="flex justify-around">
                <div className={Style.Main.info}>
                    <p className="text-[20px]">{firstTime}</p>
                    <img className="mb-[5px]"
                         src={weather.forecast.forecastday[0].hour[first as keyof hoursType].condition.icon} alt=""/>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[first as keyof hoursType].dewpoint_c}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[first as keyof hoursType].feelslike_c}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[first as keyof hoursType].pressure_mb}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[first as keyof hoursType].humidity}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[first as keyof hoursType].wind_kph}</p>
                </div>
                <div className={Style.Main.info}>
                    <p className="text-[20px]">{secondTime}</p>
                    <img className="mb-[5px]"
                         src={weather.forecast.forecastday[0].hour[second as keyof hoursType].condition.icon} alt=""/>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[second as keyof hoursType].dewpoint_c}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[second as keyof hoursType].feelslike_c}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[second as keyof hoursType].pressure_mb}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[second as keyof hoursType].humidity}</p>
                    <p className={Style.Main.inform}>{weather.forecast.forecastday[0].hour[second as keyof hoursType].wind_kph}</p>
                </div>
            </div>
        </div>
    );
};

export default DayHours;