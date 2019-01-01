import React from "react";
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import bindActionCreator from "ui/bindActionCreator";
import * as types from "infrastructure/types";

const Setting = (state) => {

  return (
    <div
      className="setting"
    >
      <div
        className="setting_low"
      >
        <div
          className="setting_low__label"
        >
          何まで？
        </div>
        <TextField
          label=""
          type="string"
          defaultValue={state.work_name}
          onChange={e => bindActionCreator(types.SET_WORK_NAME, {value: e.target.value})}
        />
      </div>

      <div
        className="setting_low"
      >
        <div
          className="setting_low__label"
        >
          いつから？
        </div>
        <TextField
          label=""
          type="date"
          defaultValue={state.begin.date}
          onChange={e => bindActionCreator(types.SET_BEGIN_DATE, {value: e.target.value})}
        />
        <TextField
          label=""
          type="time"
          defaultValue={state.begin.time}
          onChange={e => bindActionCreator(types.SET_BEGIN_TIME, {value: e.target.value})}
        />
      </div>

      <div
        className="setting_low"
      >
        <div
          className="setting_low__label"
        >
          いつまで？
        </div>
        <TextField
          label=""
          type="date"
          defaultValue={state.deadline.date}
          onChange={e => bindActionCreator(types.SET_DEADLINE_DATE, {value: e.target.value})}
        />
        <TextField
          label=""
          type="time"
          defaultValue={state.deadline.time}
          onChange={e => bindActionCreator(types.SET_DEADLINE_TIME, {value: e.target.value})}
        />
      </div>
    </div>
  );
};

export default connect(state => state)(Setting);

