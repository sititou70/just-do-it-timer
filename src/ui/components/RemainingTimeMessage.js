import React from "react";
import {connect} from "react-redux";
import dateformat from "dateformat";

const RemainingTimeMessage = (state) => {
  const deadline = new Date(`${state.deadline.date}T${state.deadline.time}+09:00`);
  const current = state.current;

  if(deadline.toString() === "Invalid Date"
    || current === null
    || typeof current === "string"){
    return <div />
  }

  const remaining_time = (deadline - current);
  const hour = 1000 * 60 * 60;
  const day = hour * 24;
  const days = Math.floor(remaining_time / day);
  const time = new Date(remaining_time - (days * day) - (hour * 9));

  return (
    <div
      className="remaining_time_message"
    >
      <span
        className="work_name"
      >
        {state.work_name}
      </span>

      まで

      <span
        className="day"
      >
        {`${days}日`}
      </span>

      <span
        className="other"
      >
        {dateformat(time, "H時間M分s秒l")}
      </span>
    </div>
  );
};

export default connect(state => state)(RemainingTimeMessage);

