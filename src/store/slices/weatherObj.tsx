
const astro = {
    sunrise: "",
    sunset: "",
}

const day = {
    maxtemp_c: 0,
    maxtemp_f: 0,
    mintemp_c: 0,
    mintemp_f: 0,
    avghumidity: 0,
    avgtemp_c: 0,
    avgtemp_f: 0,
    uv: 0,
    condition: {
        icon: "",
    }
}

const dayHour = {
        dewpoint_c: 0,
        dewpoint_f: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        humidity: 0,
        pressure_mb: 0,
        wind_kph: 0,
        condition: {
            icon: "",
        }
}

const hoursType = {
    2: dayHour,
    5: dayHour,
    8: dayHour,
    11: dayHour,
    14: dayHour,
    17: dayHour,
    20: dayHour,
    23: dayHour,
}

const dataDay = {
    day: day,
    date: "",
    astro: astro,
    hour: hoursType,
}

const weekWeatherType = {
    0: dataDay,
    1: dataDay,
    2: dataDay,
    3: dataDay,
    4: dataDay,
    5: dataDay,
    6: dataDay,
    7: dataDay,
}

const location = {
    name: "",
    country: "",
}

export const weatherObj = {
    location: location,
    forecast: {
        forecastday: weekWeatherType,
    }
}