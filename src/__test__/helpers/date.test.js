import { date } from "../../helpers/date";

const dates = new Date()
describe("date", () => {
  it("gets the current date of the day format", () => {
    expect(date.currentDate()).toEqual(
      `${dates.getFullYear()}-${dates.getMonth() + 1}-${dates.getDate()}`
    );
  });
});
