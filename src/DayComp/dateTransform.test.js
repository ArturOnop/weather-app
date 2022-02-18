import getDate from './dateTransform';

describe("GetDate function", () => {

    test("should transform valid date", () => {
        let date = "12/10/2022";
        expect(getDate(date)).toBe("Суббота 12 октября 2022 года");
    });

    test("should throw error on invalid date", () => {
        let date = 12102022;
        expect(() => getDate(date)).toThrowError(TypeError);
        expect(() => getDate(date)).toThrowError("Invalid date format");
    });

    test("switch case on day transformation should work", () => {
        expect(getDate("14/10/2022")).toBe("Понедельник 14 октября 2022 года");
        expect(getDate("15/10/2022")).toBe("Вторник 15 октября 2022 года");
        expect(getDate("16/10/2022")).toBe("Среда 16 октября 2022 года");
        expect(getDate("17/10/2022")).toBe("Четверг 17 октября 2022 года");
        expect(getDate("18/10/2022")).toBe("Пятница 18 октября 2022 года");
        expect(getDate("19/10/2022")).toBe("Суббота 19 октября 2022 года");
        expect(getDate("20/10/2022")).toBe("Воскресенье 20 октября 2022 года");
    });

    test("switch case on month transformation should work", () => {
        expect(getDate("01/01/2022")).toBe("Вторник 1 января 2022 года");
        expect(getDate("01/02/2022")).toBe("Вторник 1 февраля 2022 года");
        expect(getDate("01/03/2022")).toBe("Пятница 1 марта 2022 года");
        expect(getDate("01/04/2022")).toBe("Воскресенье 1 апреля 2022 года");
        expect(getDate("01/05/2022")).toBe("Среда 1 мая 2022 года");
        expect(getDate("01/06/2022")).toBe("Пятница 1 июня 2022 года");
        expect(getDate("01/07/2022")).toBe("Понедельник 1 июля 2022 года");
        expect(getDate("01/08/2022")).toBe("Четверг 1 августа 2022 года");
        expect(getDate("01/09/2022")).toBe("Суббота 1 сентября 2022 года");
        expect(getDate("01/10/2022")).toBe("Вторник 1 октября 2022 года");
        expect(getDate("01/11/2022")).toBe("Четверг 1 ноября 2022 года");
        expect(getDate("01/12/2022")).toBe("Воскресенье 1 декабря 2022 года");
    });
});