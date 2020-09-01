import React, { FC, useState } from 'react';
import {
  useQueryParams,
  StringParam,
  DateTimeParam,
  withDefault,
} from 'use-query-params';
import { TimerConfig } from '../types';
import { TimerConfigForm } from './TimerConfigForm';
import SimpleButtonDialog from './SimpleButtonDialog';
import styled from '@emotion/styled';
import { ReactComponent as SettingIcon } from '../assets/setting.svg';

export const Timer: FC = () => {
  const [current_time, setCurrentTime] = useState<Date>(new Date());
  const use_timer_config_params = useQueryParams({
    event_name: withDefault(StringParam, ''),
    from: DateTimeParam,
    to: DateTimeParam,
  });
  const timer_config: TimerConfig = use_timer_config_params[0];
  const setTimerConfig = use_timer_config_params[1];

  return (
    <StyledSimpleButtonDialog title="Config" button_content={<SettingIcon />}>
      <TimerConfigForm
        default_value={timer_config}
        onChange={(config) => setTimerConfig(config, 'replace')}
      />
    </StyledSimpleButtonDialog>
  );
};

const StyledSimpleButtonDialog = styled(SimpleButtonDialog)`
  button {
    position: fixed;
    top: 10px;
    right: 10px;
  }
`;
