import React from "react";

export default function FormattedDate(props) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  console.log(props.date);
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes(;)
  return (
    <div>
      {day} {hour}:{minutes}
    </div>
  );
}
