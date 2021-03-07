export const date = {
  currentDate() {
    const date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();
    return `${year}-${month}-${day}`;
  }
};
