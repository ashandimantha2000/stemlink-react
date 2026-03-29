import React, { useEffect, useState } from "react";

function Interval() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>Timer</h1>
      <h3>now it's {seconds} seconds</h3>
    </div>
  );
}

export default Interval;
