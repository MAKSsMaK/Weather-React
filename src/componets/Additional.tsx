import React, {FC} from 'react';
import {Style} from "../style/Style";
import {useCustomSelector} from "../hooks/store";
import {
    GraficOne,
    GraficThree,
    GraficTwo,
    HrElem,
} from "./grafic/Grafic";

interface DarkMode {
    currentTheme: string;
}

const Additional: FC<DarkMode> = ({currentTheme}) => {
    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)
    const style = `${Style.Additional.addBlock} ${Style.darkMode.backb}`
    return (
        <div className="flex justify-between">
            <div className={style}>
                <div className={Style.Additional.infotext}><p>UV Index</p>
                    <p>{weather.forecast.forecastday[0].day.uv} UV</p></div>
                <div className={`${Style.Additional.svgBlock} relative`}><GraficOne currentTheme={currentTheme}/></div>
                <div className={Style.Additional.vector}><HrElem currentTheme={currentTheme}/></div>

            </div>
            <div className={style}>
                <div className={Style.Additional.infotext}><p>Sunrise and Sunset</p></div>
                <div className={`${Style.Additional.svgBlock}`}><GraficTwo currentTheme={currentTheme}/></div>
                <div className={Style.Additional.vector}><HrElem currentTheme={currentTheme}/></div>
                <div className="flex justify-between"><p>Sunrise</p><p>Sunset</p></div>
                <div className="flex justify-between"><p>{weather.forecast.forecastday[0].astro.sunrise}</p>
                    <p>{weather.forecast.forecastday[0].astro.sunset}</p></div>
            </div>
            <div className={style}>
                <div className={Style.Additional.infotext}><p>Humidity</p>
                    <p>{weather.forecast.forecastday[0].day.avghumidity}%</p></div>
                <div className={`${Style.Additional.svgBlock} relative`}><GraficThree currentTheme={currentTheme}/>
                </div>
                <div className={Style.Additional.vector}><HrElem currentTheme={currentTheme}/></div>
                <div className="flex justify-between"><p>0</p><p>25</p><p>50</p><p>75</p><p>100</p></div>
            </div>
        </div>
    );
};

export default Additional;
