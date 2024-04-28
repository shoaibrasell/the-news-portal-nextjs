import React from "react";

function getCurrentDate() {
  const currentDate = new Date();

  // Get day, month, date, and year
  const day = currentDate.toLocaleString("en-US", { weekday: "long" });
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Return the current date as an object
  return {
    day,
    month,
    date,
    year,
  };
}

function DateDisplay() {
  const { day, month, date, year } = getCurrentDate();

  // Concatenate day, month, date, and year into a single string
  const dateString = `${day}, ${month} ${date}, ${year}`;

  return (
    <div>
      <p>Date: {dateString}</p>
    </div>
  );
}

export default DateDisplay;
