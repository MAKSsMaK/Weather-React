import React, {useState, useEffect} from 'react';
import {useCustomDispatch} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {Style} from "../../style/Style";

const Input = () => {

    /*------------------------------------------------------------------------------*/

    const dispatch = useCustomDispatch();
    useEffect(() => {
        dispatch(fetchCurrentWeather("Kiev"));
    }, []);

    /*------------------------------------------------------------------------------*/

    const [usersFromSearch,  setUsersFromSearch]  = useState("");
    const handleChange = (event: { target: { value: string } }) => {
        const value = event.target.value;
        setUsersFromSearch(value);
    }

    /*------------------------------------------------------------------------------*/

    const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event?.key === 'Enter' && dispatch(fetchCurrentWeather(usersFromSearch))
    }

    /*------------------------------------------------------------------------------*/

    return (
        <div>
            <input
                onChange={handleChange}
                onKeyPress={search}
                value={usersFromSearch}
                className={`${Style.Header.input} ${Style.darkMode.backb}`}
                placeholder="Search the city"
                type="text"
            />
        </div>
    );
};

export default Input;