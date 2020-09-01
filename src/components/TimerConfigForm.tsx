import React, { FC, useState } from 'react';
import { TimerConfig } from '../types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import jaLocale from 'date-fns/locale/ja';
import styled from '@emotion/styled';
import { isValidDate } from '../utils';

const DateTimePicker: FC<{
  label: string;
  default_date: Date | null;
  className?: string;
  onChange: (date: Date) => void;
}> = ({ label, default_date, className, onChange }) => {
  const [selected_date, setSelectedDate] = useState<Date | null>(default_date);
  const setDate = (date: Date): void => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={className}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
        <Typography className="label" variant="subtitle1">
          {label}
        </Typography>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          label="date"
          value={selected_date}
          onChange={(value) => (isValidDate(value) ? setDate(value) : null)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          variant="inline"
          label="time"
          ampm={false}
          value={selected_date}
          onChange={(value) => (isValidDate(value) ? setDate(value) : null)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};
const StyledDateTimePicker = styled(DateTimePicker)`
  > .label {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  > div + div {
    margin: 0 0.5em;
  }

  > div:nth-of-type(1) {
    width: 9em;
  }
  > div:nth-of-type(2) {
    width: 6em;
  }
`;

export const TimerConfigForm: FC<{
  default_value: TimerConfig;
  onChange: (changes: Partial<TimerConfig>) => void;
}> = ({ default_value, onChange }) => {
  const [current_value, setCurrentValue] = useState<TimerConfig>(default_value);
  const changeCurrentValue = (changes: Partial<TimerConfig>): void => {
    const changed_value = Object.assign(current_value, changes);
    setCurrentValue(changed_value);
    onChange(changed_value);
  };

  return (
    <>
      <TextField
        label="イベント名"
        aria-describedby="event-name"
        defaultValue={default_value.event_name}
        onChange={(e) => changeCurrentValue({ event_name: e.target.value })}
      />
      <StyledDateTimePicker
        label="いつから？（作業開始）"
        default_date={default_value.from ? default_value.from : null}
        onChange={(d) => changeCurrentValue({ from: d })}
      />
      <StyledDateTimePicker
        label="いつまで？（締め切り）"
        default_date={default_value.to ? default_value.to : null}
        onChange={(d) => changeCurrentValue({ to: d })}
      />
    </>
  );
};
