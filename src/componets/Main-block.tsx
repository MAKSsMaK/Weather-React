import React, {FC} from 'react';
import {useCustomSelector} from "../hooks/store";
import {Style} from "../style/Style";
import DayHours from "./dayInfo/DayHours";
import {DataFormat, CurrentTime} from "./dayInfo/DataFormat";

interface  MainBLockProps {
    currentTemp: string;
}

const MainBlock: FC<MainBLockProps> = ({currentTemp}) => {

    const {weather} = useCustomSelector(state => state.currentWeatherSliceReducer)

    return (
        <div>
            <div className={`${Style.Main.MainBlock} ${Style.darkMode.backb}`}>
                <div className={Style.Main.PicturePart}>
                    <p className={`${Style.Main.data}, flex w-[310px] justify-between`}><DataFormat/><CurrentTime/></p>
                    <div>
                        <img src = {weather.forecast.forecastday[0].day.condition.icon}  alt="" className="w-[250px]"/>
                    </div>
                    <p className={Style.Main.temp}>{currentTemp}</p>
                </div>
                <div className={Style.Main.InfoBlock}>
                    <p className="mb-4" >Temp, °C</p >
                    <p className="mb-4">Feels Like</p>
                    <p className="mb-4">Pressure,  kPa</p>
                    <p className="mb-4">Humidity, %</p>
                    <p className="mb-4">Wind, km/h</p>
                </div>
                <div className=" flex ">
                    <div className={Style.Main.blocks}>
                        <DayHours first={2} second={5} partDay={"Night"} firstTime={'2:00'} secondTime={'5:00'}/>
                    </div>
                    <div className={Style.Main.blocks}>
                        <DayHours first={8} second={11} partDay={"Morning"} firstTime={'8:00'} secondTime={'11:00'}/>
                    </div>
                    <div className={Style.Main.blocks}>
                        <DayHours first={14} second={17} partDay={"Day"} firstTime={'14:00'} secondTime={'17:00'}/>
                    </div>
                    <div className=" w-[196px] h-[313px]">
                        <DayHours first={20} second={23} partDay={"Evening"} firstTime={'20:00'} secondTime={'23:00'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBlock;