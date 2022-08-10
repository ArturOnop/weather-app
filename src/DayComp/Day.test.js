import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Day from './Day.js';

Enzyme.configure({adapter: new Adapter()});

describe("Valid Day", () => {
    let wrapper;
    let dayExample = {
        "date": "14/02/2022",
        "minTemp": -4,
        "maxTemp": -1,
        "pressure": 1011,
        "humidity": 81,
        "uvIndex": 0,
        "windSpeed": 21,
        "windDir": "north",
        "overall": "snow"
    };

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<Day {...dayExample}/>);
    });

    test("should contain classname day", () => {
        expect(wrapper.find(".day").exists()).toBe(true);
        expect(wrapper.find(".day").length).toBe(1);
    });

    test("should contain classname date with provided date", () => {
        expect(wrapper.find(".date").exists()).toBe(true);
        expect(wrapper.find(".date").length).toBe(1);
        expect(wrapper.find(".date").text()).toBe("Monday 14 february 2022 year");
    });

    test("should contain classname overall with provided imgSrc", () => {
        expect(wrapper.find(".overall").exists()).toBe(true);
        expect(wrapper.find(".overall").length).toBe(1);
        expect(wrapper.find(".overall").prop("src"))
            .toBe("https://img.icons8.com/small/32/000000/snow.png");
    });

    test("should contain classname minTemp and maxTemp with provided data", () => {
        expect(wrapper.find(".minTemp").exists()).toBe(true);
        expect(wrapper.find(".maxTemp").exists()).toBe(true);

        expect(wrapper.find(".minTemp").length).toBe(1);
        expect(wrapper.find(".maxTemp").length).toBe(1);

        expect(wrapper.find(".minTemp").text()).toBe("-4");
        expect(wrapper.find(".maxTemp").text()).toBe("-1");
    });

    test("should contain classname pressure with provided pressure", () => {
        expect(wrapper.find(".pressure").exists()).toBe(true);
        expect(wrapper.find(".pressure").length).toBe(1);
        expect(wrapper.find(".pressure").text()).toBe("Pressure: 1011 mBar");
    });

    test("should contain classname humidity with provided humidity", () => {
        expect(wrapper.find(".humidity").exists()).toBe(true);
        expect(wrapper.find(".humidity").length).toBe(1);
        expect(wrapper.find(".humidity").text()).toBe("Humidity: 81%");
    });

    test("should contain classname uvIndex with provided uvIndex", () => {
        expect(wrapper.find(".uvIndex").exists()).toBe(true);
        expect(wrapper.find(".uvIndex").length).toBe(1);
        expect(wrapper.find(".uvIndex").text()).toBe("UV Index: 0");
    });

    test("should contain classname windSpeed with provided windSpeed", () => {
        expect(wrapper.find(".windSpeed").exists()).toBe(true);
        expect(wrapper.find(".windSpeed").length).toBe(1);
        expect(wrapper.find(".windSpeed").text()).toBe("Wind speed: 21 km\\hour");
    });

    test("should contain classname windDir with provided windDir", () => {
        expect(wrapper.find(".windDir").exists()).toBe(true);
        expect(wrapper.find(".windDir").length).toBe(1);
        expect(wrapper.find(".windDir").text()).toBe("Wind direction: north");
    });

    test("should match snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});

describe("Invalid Day", () => {
    let wrapper;
    let dayExample = {
        "date": 12062022,
        "minTemp": "invalid",
        "maxTemp": "invalid",
        "pressure": "invalid",
        "humidity": "invalid",
        "uvIndex": "invalid",
        "windSpeed": "invalid",
        "windDir": 123,
        "overall": "invalid"
    };

    global.console = {error: jest.fn()};

    beforeEach(() => {
        wrapper = shallow(<Day {...dayExample}/>);
    });

    test("should contain classname date with N/A", () => {
        expect(console.error).toBeCalled();
        expect(wrapper.find(".date").text()).toBe("N/A");
    });

    test("should contain classname overall with no src", () => {
        expect(wrapper.find(".overall").prop("src")).toBe("");
    });

    test("should contain classname minTemp and maxTemp with N/A", () => {
        expect(wrapper.find(".minTemp").text()).toBe("N/A");
        expect(wrapper.find(".maxTemp").text()).toBe("N/A");
    });

    test("should contain classname pressure with N/A", () => {
        expect(wrapper.find(".pressure").text()).toBe("Pressure: N/A mBar");
    });

    test("should contain classname humidity with N/A", () => {
        expect(wrapper.find(".humidity").text()).toBe("Humidity: N/A%");
    });

    test("should contain classname uvIndex with N/A", () => {
        expect(wrapper.find(".uvIndex").text()).toBe("UV Index: N/A");
    });

    test("should contain classname windSpeed with N/A", () => {
        expect(wrapper.find(".windSpeed").text()).toBe("Wind speed: N/A km\\hour");
    });

    test("should contain classname windDir with N/A", () => {
        expect(wrapper.find(".windDir").text()).toBe("Wind direction: N/A");
    });
});
