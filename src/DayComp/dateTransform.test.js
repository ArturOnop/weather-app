import getDate from './dateTransform';

describe("GetDate function", () => {

    test("should transform valid date", () => {
        let date = "12/10/2022";
        expect(getDate(date)).toBe("Saturday 12 october 2022 year");
    });

    test("should throw error on invalid date", () => {
        let date = 12102022;
        expect(() => getDate(date)).toThrowError(TypeError);
        expect(() => getDate(date)).toThrowError("Invalid date format");
    });

    test("switch case on day transformation should work", () => {
        expect(getDate("14/10/2022")).toBe("Monday 14 october 2022 year");
        expect(getDate("15/10/2022")).toBe("Tuesday 15 october 2022 year");
        expect(getDate("16/10/2022")).toBe("Wednesday 16 october 2022 year");
        expect(getDate("17/10/2022")).toBe("Thursday 17 october 2022 year");
        expect(getDate("18/10/2022")).toBe("Friday 18 october 2022 year");
        expect(getDate("19/10/2022")).toBe("Saturday 19 october 2022 year");
        expect(getDate("20/10/2022")).toBe("Sunday 20 october 2022 year");
    });

    test("switch case on month transformation should work", () => {
        expect(getDate("01/01/2022")).toBe("Tuesday 1 january 2022 year");
        expect(getDate("01/02/2022")).toBe("Tuesday 1 february 2022 year");
        expect(getDate("01/03/2022")).toBe("Friday 1 march 2022 year");
        expect(getDate("01/04/2022")).toBe("Sunday 1 april 2022 year");
        expect(getDate("01/05/2022")).toBe("Wednesday 1 may 2022 year");
        expect(getDate("01/06/2022")).toBe("Friday 1 june 2022 year");
        expect(getDate("01/07/2022")).toBe("Monday 1 july 2022 year");
        expect(getDate("01/08/2022")).toBe("Thursday 1 august 2022 year");
        expect(getDate("01/09/2022")).toBe("Saturday 1 september 2022 year");
        expect(getDate("01/10/2022")).toBe("Tuesday 1 october 2022 year");
        expect(getDate("01/11/2022")).toBe("Thursday 1 november 2022 year");
        expect(getDate("01/12/2022")).toBe("Sunday 1 december 2022 year");
    });
});