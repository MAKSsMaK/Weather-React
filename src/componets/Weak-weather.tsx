import React from 'react';
import {Style} from "../style/Style";
import Week from "./dayInfo/Week";

const WeakWeather = () => {

    const style = `${Style.Week.weekblock} ${Style.darkMode.backb}`

    return (

        <div className="flex justify-between pt-[30px]">
            <div className={style}><Week dayNumber={1}/></div>
            <div className={style}><Week dayNumber={2}/></div>
            <div className={style}><Week dayNumber={3}/></div>
            <div className={style}><Week dayNumber={4}/></div>
            <div className={style}><Week dayNumber={5}/></div>
            <div className={style}><Week dayNumber={6}/></div>
        </div>
    );
};

export default WeakWeather;

