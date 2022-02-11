import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children}) => {


    return (
        <WeatherContext.Provider>

        </WeatherContext.Provider>
    )
}

export default WeatherContext