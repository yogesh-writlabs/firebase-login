import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Home() {
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
        }}
      >
        <Calendar />
        <br />
      </div>
    </div>
  );
}

export default Home;
