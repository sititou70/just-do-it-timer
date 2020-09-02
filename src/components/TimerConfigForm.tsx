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
  default_date: Date | null;
  className?: string;
  onChange: (date: Date) => void;
}> = ({ default_date, className, onChange }) => {
  const [selected_date, setSelectedDate] = useState<Date | null>(default_date);
  const setDate = (date: Date): void => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={className}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
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

const StyledDatePicker = styled(DateTimePicker)`
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
  className?: string;
  onChange: (changes: Partial<TimerConfig>) => void;
}> = ({ default_value, className, onChange }) => {
  const [current_value, setCurrentValue] = useState<TimerConfig>(default_value);
  const changeCurrentValue = (changes: Partial<TimerConfig>): void => {
    const changed_value = Object.assign(current_value, changes);
    setCurrentValue(changed_value);
    onChange(changed_value);
  };

  return (
    <div className={className}>
      <Typography className="label" variant="subtitle1">
        いつから？（作業開始）
      </Typography>
      <StyledDatePicker
        default_date={default_value.from ? default_value.from : null}
        onChange={(d) => changeCurrentValue({ from: d })}
      />

      <Typography className="label" variant="subtitle1">
        何を？
      </Typography>
      <TextField
        label="イベント名"
        aria-describedby="event-name"
        defaultValue={default_value.event_name}
        onChange={(e) => changeCurrentValue({ event_name: e.target.value })}
      />

      <Typography className="label" variant="subtitle1">
        いつまで？（イベントの締め切り）
      </Typography>
      <StyledDatePicker
        default_date={default_value.to ? default_value.to : null}
        onChange={(d) => changeCurrentValue({ to: d })}
      />
    </div>
  );
};

export const StyledTimerConfigForm = styled(TimerConfigForm)`
  > .label {
    margin-bottom: 0.5em;
    &:not(:nth-of-type(1)) {
      margin-top: 2em;
    }
  }
`;

export default StyledTimerConfigForm;
