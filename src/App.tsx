import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./componets/Header";
import MainBlock from "./componets/Main-block";
import Additional from "./componets/Additional";
import WeakWeather from "./componets/Weak-weather";
import {Style} from "./style/Style";

function App() {

    const [currentTemp, setCurrentTemp] = useState('');
    const [currentTheme, setCurrentTheme] = useState(`dark`);

    return (
    <div className={`${Style.RootBlock} ${Style.darkMode.backg}`}>
        <Header setCurrentTemp={setCurrentTemp} setCurrentTheme={setCurrentTheme}/>
        <MainBlock currentTemp={currentTemp}/>
        <Additional currentTheme={currentTheme}/>
        <WeakWeather/>
    </div>
  );
}

export default App;
