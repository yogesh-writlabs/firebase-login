import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Home() {
  function Clock({ time }) {
    let hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
      className = "night";
    } else {
      className = "day";
    }
    return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
  }

  function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }
  const time = useTime();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="col-6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        To create your own todo list please Login.
      </div>
      <div
        className="col-6"
        style={{
          display: "flex",
          height: "auto",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Calendar />
        <Clock time={time} />
      </div>
    </div>
  );
}

export default Home;
