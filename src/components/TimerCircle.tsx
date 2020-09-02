import React, { FC } from 'react';
import Circle from 'react-circle';
import styled from '@emotion/styled';
import { secondary_color } from '../styles/theme';

export const TimerCircle: FC<{
  current: Date;
  from: Date;
  to: Date;
  className?: string;
}> = ({ current, from, to, className }) => {
  const current_time = current.getTime();
  const from_time = from.getTime();
  const to_time = to.getTime();

  const progress = (() => {
    if (from_time >= to_time) return 0;
    if (current_time < from_time) return 0;
    if (to_time < current_time) return 100;

    return ((current_time - from_time) / (to_time - from_time)) * 100;
  })();

  return (
    <div className={className}>
      <Circle
        progress={progress}
        responsive
        progressColor={secondary_color[700]}
        bgColor={secondary_color[800]}
        animate={false}
      />
    </div>
  );
};

export const StyledTimerCircle = styled(TimerCircle)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  svg {
    width: calc(min(100%, 100vh) - 30px);
    height: calc(min(100%, 100vh) - 30px);

    text {
      display: none;
    }
  }
`;

export default StyledTimerCircle;
