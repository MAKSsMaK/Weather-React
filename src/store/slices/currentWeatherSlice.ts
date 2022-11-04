import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";
import {AxiosResponse} from "axios";
import {weatherObj} from "./weatherObj";

type CurrentWeather = {
    weather: Weather;
    isloading: boolean;
    response: Response;
}

type Response = {
    status: number;
    message: string;
}

const initialState: CurrentWeather = {
    weather: weatherObj,
    isloading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state){
            state.isloading = true
        },
        fetchCurrentWeatherSuccess(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ){
            state.weather = action.payload.data;
            state.isloading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ){
            state.weather = action.payload.data;
            state.isloading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    }
})

export default currentWeatherSlice.reducer;