export function currentDate() {
  const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();
  return `${year}-${month}-${day}`;
}

export function headerDate() {
  const date = new Date(),
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();
  return `${day}.${month}.${year}, ${days[day]}`;
}
