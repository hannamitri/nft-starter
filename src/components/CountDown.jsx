import React, { useState } from "react";

const CountDown = ({ timeInHours }) => {
  const timeFromNow = Date.parse(new Date()) + timeInHours * 60 * 60 * 1000;
  const deadline = new Date(timeFromNow);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeText, setTimeText] = useState("");

  function calculateTime() {
    setTimeRemaining(Date.parse(deadline) - Date.parse(new Date()));
    var seconds = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setTimeText(`${hours}h ${minutes}m ${seconds}s`);

    if (timeRemaining < 0) {
      clearInterval(x);
      setTimeText("EXPIRED");
    }
  }

  var x = setInterval(calculateTime, 1000 / 60);

  return <div className="de_countdown">{timeText}</div>;
};

export default CountDown;
