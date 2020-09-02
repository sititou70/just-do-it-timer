import React, { FC } from 'react';
import styled from '@emotion/styled';
import { mui_theme } from '../styles/theme';
import { Maxim } from '../types';
import maxims_json from './maxims.json';
const maxims: Maxim[] = maxims_json;
const binarysearch = require('binarysearch');

const generateGetMaxim = ({
  base_sec_par_maxim,
  sec_par_char,
}: {
  base_sec_par_maxim: number;
  sec_par_char: number;
}): ((current: Date) => { maxim: Maxim; progress: number }) => {
  const maxims_with_readtime: {
    readtime_sec: number;
    maxim: Maxim;
  }[] = maxims.map((x) => ({
    readtime_sec: x.text.length * sec_par_char + base_sec_par_maxim,
    maxim: x,
  }));

  const maxims_with_start_time: (typeof maxims_with_readtime[0] & {
    start_time_sec: number;
  })[] = [];
  let start_time_sec = 0;
  maxims_with_readtime.forEach((x) => {
    maxims_with_start_time.push({ ...x, start_time_sec });
    start_time_sec += x.readtime_sec;
  });

  const all_readtime_sec = maxims_with_readtime.reduce(
    (s, x) => s + x.readtime_sec,
    0
  );

  return (current: Date): { maxim: Maxim; progress: number } => {
    const current_time: number = current.getTime() % (all_readtime_sec * 1000);
    const index = binarysearch.closest(
      maxims_with_start_time,
      current_time / 1000,
      (elem: typeof maxims_with_start_time[0], pivot: number) =>
        elem.start_time_sec - pivot
    );

    const maxim_with_cumulative_readtime = maxims_with_start_time[index];

    const start_time_sec = maxim_with_cumulative_readtime.start_time_sec;
    const readtime = maxim_with_cumulative_readtime.readtime_sec;
    const progress = (current_time / 1000 - start_time_sec) / readtime;

    return { maxim: maxim_with_cumulative_readtime.maxim, progress };
  };
};
const getMaxim = generateGetMaxim({
  base_sec_par_maxim: 4.5,
  sec_par_char: 0.15,
});

export const CurrentMaxim: FC<{
  current: Date;
  className?: string;
}> = ({ current, className }) => {
  const { maxim, progress } = getMaxim(current);

  return (
    <div className={className}>
      <span>{maxim.text}</span>
      <Hline width_weight={1 - progress} />
      <span>{maxim.auther}</span>
    </div>
  );
};

export const StyledCurrentMaxim = styled(CurrentMaxim)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: calc(min(400px, 90vw));
  margin-top: 2em;
  color: ${mui_theme.palette.text.primary};
  font-family: serif;
  font-style: italic;
`;

const Hline = styled.div<{ width_weight: number }>`
  width: calc(100% * ${({ width_weight }) => width_weight});
  height: 1px;
  margin: 1em 0;
  background: ${mui_theme.palette.text.secondary};
`;

export default StyledCurrentMaxim;
