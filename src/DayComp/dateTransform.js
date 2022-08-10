function getDate(date) {
    let day, month, year, fullDate;

    try {
        day = Number(date.split("").slice(0, 2).join(""));
        month = Number(date.split("").slice(3, 5).join(""));
        year = Number(date.split("").slice(6, 10).join(""));
        fullDate = new Date(year, month, day);
    } catch (e) {
        throw new TypeError("Invalid date format");
    }

    let daysName =
        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsName = ["december", "january", "february", "march", "april",
        "may", "june", "july", "august", "september", "october", "november"];

    let dayName = daysName[fullDate.getDay()];
    let monthName = monthsName[fullDate.getMonth()];

    return `${dayName} ${day} ${monthName} ${year} year`;
}

export default getDate;