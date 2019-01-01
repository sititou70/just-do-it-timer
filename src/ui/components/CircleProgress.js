import React from "react";
import {connect} from "react-redux";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const CircleProgress = (state) => {
  const begin = new Date(`${state.begin.date}T${state.begin.time}+09:00`);
  const deadline = new Date(`${state.deadline.date}T${state.deadline.time}+09:00`);
  const current = state.current;
  let percent = 0;

  if(begin.toString() !== "Invalid Date"
    && deadline.toString() !== "Invalid Date"
    && current !== null){
    percent = (current - begin) / (deadline - begin) * 100;
  }

  return (
    <div
      className="circle_progress"
    >
      <Progress
        type="circle"
        percent={percent}
        status="default"
        theme={{
          default: {
            symbol: " ",
            trailColor: "#00162c",
            color: "#002d54",
          },
        }}
      />
    </div>
  );
};

export default connect(state => state)(CircleProgress);

