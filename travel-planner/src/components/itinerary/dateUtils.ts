// dateUtils.ts
import { format, eachDayOfInterval, parseISO } from 'date-fns';
import { DayInfo, DateRange } from './types';

export const generateDays = (dateRange: DateRange): DayInfo[] => {
  const start = parseISO(dateRange.start);
  const end = parseISO(dateRange.end);
  
  return eachDayOfInterval({ start, end }).map((date, index) => ({
    day: `DAY ${index + 1}`,
    date: format(date, 'EEE, do MMM'),
    weather: `H:${Math.floor(Math.random() * 10) + 25}° L:${Math.floor(Math.random() * 10) + 20}°`
  }));
};