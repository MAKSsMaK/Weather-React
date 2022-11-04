
type astro = {
        sunrise: string,
        sunset: string,
    }

type day = {
        maxtemp_c: number,
        maxtemp_f: number,
        mintemp_c: number,
        mintemp_f: number,
        avghumidity: number,
        avgtemp_c: number,
        avgtemp_f: number,
        uv: number,
        condition: {
            icon: string,
        }
}

type dayHour = {
    dewpoint_c: number,
    dewpoint_f: number,
    feelslike_c: number,
    feelslike_f: number,
    humidity: number,
    pressure_mb: number,
    wind_kph: number,
    condition: {
        icon: string,
    }
}

export type hoursType = {
    2: dayHour,
    5: dayHour,
    8: dayHour,
    11: dayHour,
    14: dayHour,
    17: dayHour,
    20: dayHour,
    23: dayHour,
}

type dataDay = {
    day: day,
    date: string,
    astro: astro,
    hour: hoursType
}

export type weekWeatherType = {
    0: dataDay,
    1: dataDay,
    2: dataDay,
    3: dataDay,
    4: dataDay,
    5: dataDay,
    6: dataDay,
    7: dataDay,
}

type location = {
    name: string,
    country: string,
}

export type Weather = {
    location: location
    forecast: {
        forecastday: weekWeatherType,
    }
}


