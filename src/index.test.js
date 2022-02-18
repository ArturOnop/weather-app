import Day from "./DayComp/Day";
import React from "react";
import ReactDOM from "react-dom";
import db from "./db.json"

jest.mock("react-dom", () => ({render: jest.fn()}));

describe("Application root", () => {
    let days = [];

    beforeAll(() => {
        db.days.valueOf().forEach(d => days.push(<Day key={d.date} {...d}/>));
    });

    test("should render correctly", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("./index.js");
        expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode>{days}</React.StrictMode>, div);
    });
});
