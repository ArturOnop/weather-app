import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import db from "./db.json"
import Day from "./DayComp/Day";

let days = [];

db.days.valueOf().forEach(d => days.push(<Day key={d.date} {...d}/>));

ReactDOM.render(
    <React.StrictMode>
        {days}
    </React.StrictMode>,
    document.getElementById('root')
);
