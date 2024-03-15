export const getPreviousDate = () => {
  const currentDate = new Date();
  const previousDate = new Date(currentDate);
  previousDate.setDate(previousDate.getDate() - 1);

  const year = previousDate.getFullYear();
  const month = String(previousDate.getMonth() + 1).padStart(2, "0");
  const day = String(previousDate.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};
