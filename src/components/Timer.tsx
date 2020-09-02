import React, { FC, useState, useEffect } from 'react';
import {
  useQueryParams,
  StringParam,
  DateTimeParam,
  withDefault,
} from 'use-query-params';

import { TimerConfig } from '../types';
import { isValidDate } from '../utils';

import TimerConfigForm from './TimerConfigForm';
import SimpleButtonDialog from './SimpleButtonDialog';
import { ReactComponent as SettingIcon } from '../assets/setting.svg';
import TimerCircle from './TimerCircle';

import styled from '@emotion/styled';
import TimerText from './TimerText';
import CurrentMaxim from './CurrentMaxim';

export const Timer: FC<{ className?: string }> = ({ className }) => {
  const [current_date, setCurrentDate] = useState<Date>(new Date());
  useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 137);
  }, []);

  const use_timer_config_params = useQueryParams({
    event_name: withDefault(StringParam, ''),
    from: DateTimeParam,
    to: DateTimeParam,
  });
  const timer_config: TimerConfig = use_timer_config_params[0];
  const setTimerConfig = use_timer_config_params[1];

  return (
    <div className={className}>
      {isValidDate(timer_config.from) && isValidDate(timer_config.to) ? (
        <TimerCircle
          current={current_date}
          from={timer_config.from}
          to={timer_config.to}
        />
      ) : null}
      {isValidDate(timer_config.to) ? (
        <TimerText
          event_name={timer_config.event_name}
          current={current_date}
          to={timer_config.to}
        />
      ) : null}
      <CurrentMaxim current={current_date} />
      <StyledSimpleButtonDialog
        title="設定"
        button_content={<SettingIcon />}
        default_open={
          timer_config.event_name === '' || !isValidDate(timer_config.to)
        }
      >
        <TimerConfigForm
          default_value={timer_config}
          onChange={(config) => setTimerConfig(config, 'replace')}
        />
      </StyledSimpleButtonDialog>
    </div>
  );
};

const StyledSimpleButtonDialog = styled(SimpleButtonDialog)`
  button {
    position: fixed;
    top: 10px;
    right: 10px;
  }
`;

export const StyledTimer = styled(Timer)`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export default StyledTimer;
