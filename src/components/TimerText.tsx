import React, { FC } from 'react';
import styled from '@emotion/styled';
import { formatToTimeZone } from 'date-fns-timezone';
import { mui_theme } from '../styles/theme';

export const TimerText: FC<{
  event_name: string;
  current: Date;
  to: Date;
  className?: string;
}> = ({ event_name, current, to, className }) => {
  const current_time = current.getTime();
  const to_time = to.getTime();
  const remaining_time = to_time - current_time;

  const hour = 1000 * 60 * 60;
  const day = hour * 24;
  const remaining_days = remaining_time / day;
  const remaining_date = new Date(remaining_time % day);

  return (
    <div className={className}>
      {current_time <= to_time ? (
        <>
          <span className="middle">{event_name}</span>
          まで
          <span className="big">{Math.floor(remaining_days)}日</span>
          <br />
          {formatToTimeZone(remaining_date, 'H時間mm分ss秒SSS', {
            timeZone: 'Etc/UTC',
          })}
        </>
      ) : (
        <>
          <span className="middle">{event_name}</span>は終了しました
        </>
      )}
    </div>
  );
};

export const StyledTimerText = styled(TimerText)`
  color: ${mui_theme.palette.text.primary};
  font-size: 2rem;

  .big {
    font-size: 5rem;
  }
  .middle {
    font-size: 3rem;
  }
`;

export default StyledTimerText;
