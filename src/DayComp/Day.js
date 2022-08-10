import React from 'react';
import db from "../db.json"
import getDate from "./dateTransform.js";

function Day(weather) {

    let minTemp = typeof weather["minTemp"] === "number" ? weather["minTemp"].toString() : "N/A";
    let maxTemp = typeof weather["maxTemp"] === "number" ? weather["maxTemp"].toString() : "N/A";
    let pressure = typeof weather["pressure"] === "number" ? weather["pressure"].toString() : "N/A";
    let humidity = typeof weather["humidity"] === "number" ? weather["humidity"].toString() : "N/A";
    let uvIndex = typeof weather["uvIndex"] === "number" ? weather["uvIndex"].toString() : "N/A";
    let windSpeed = typeof weather["windSpeed"] === "number" ? weather["windSpeed"].toString() : "N/A";
    let windDir = typeof weather["windDir"] === "string" ? weather["windDir"] : "N/A";
    let imgSrc = db.img[weather["overall"]] ? db.img[weather["overall"]] : "";

    let date;
    try {
        date = getDate(weather.date);
    } catch (e) {
        date = "N/A"
        console.error(e);
    }

    return (
        <div className="day">
            <div className="date">{date}</div>
            <img className="overall" src={imgSrc} alt="weather-icon"/>
            <div className="temp">
                From <div className="minTemp">{minTemp}</div> C°
                To <div className="maxTemp">{maxTemp}</div> C°
            </div>
            <div className="pressure">Pressure: {pressure} mBar</div>
            <div className="humidity">Humidity: {humidity}%</div>
            <div className="uvIndex">UV Index: {uvIndex}</div>
            <div className="windSpeed">Wind speed: {windSpeed} km\hour</div>
            <div className="windDir">Wind direction: {windDir}</div>
        </div>
    );
}

export default Day;
