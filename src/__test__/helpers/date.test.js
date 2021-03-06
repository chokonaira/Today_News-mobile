import { date } from "../../helpers/date";

const dates = new Date()
describe("date", () => {
  it("gets the current date of the day format", () => {
    expect(date.currentDate()).toEqual(
      `${dates.getFullYear()}-${dates.getMonth() + 1}-${dates.getDate()}`
    );
  });

  it("gets the header date of the day format", () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    expect(date.headerDate()).toEqual(
      `${dates.getDate()}.${dates.getMonth() + 1}.${dates.getFullYear()}, ${
        days[dates.getDate()]
      }`
    );
  });
});
