import React, {FC, useState} from 'react';
import {weekWeatherType} from "../../store/types/types";
import {useCustomSelector} from "../../hooks/store";

interface weekWeatherProps {
    dayNumber: number,
}

/*------------------------------------------------------------------------------*/

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/*------------------------------------------------------------------------------*/

const date: Date = new Date()

/*------------------------------------------------------------------------------*/

export const CurrentData: FC<weekWeatherProps> = ({dayNumber}) => {
    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    const dateTime = new Date(weather.forecast.forecastday[dayNumber as keyof weekWeatherType].date)
    const day = dateTime.getDate()
    const month = months[dateTime.getMonth()]
    const formatDate: string = `${day} ${month}`
    return (
        <p>
            {formatDate}
        </p>
    );
}

/*------------------------------------------------------------------------------*/

export const CurrentDay: FC<weekWeatherProps> = ({dayNumber}) => {
    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    const dateTime = new Date(weather.forecast.forecastday[dayNumber as keyof weekWeatherType].date)
    const day = days[dateTime.getDay()]
    const formatDate: string = `${day}`
    return (
        <p>
            {formatDate}
        </p>
    );
}

/*------------------------------------------------------------------------------*/

export const CurrentTime = () => {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)
    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(updateTime, 1000)
    return (
        <h1>{ctime}</h1>
    )
}

/*------------------------------------------------------------------------------*/
