import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function WeeklySummary() {
  // Dummy data: one object per day of week
  const dataset = [
    { day: 'Mon', breakfast: 300, lunch: 600, snacks: 150, dinner: 550 },
    { day: 'Tue', breakfast: 280, lunch: 650, snacks: 200, dinner: 500 },
    { day: 'Wed', breakfast: 320, lunch: 620, snacks: 180, dinner: 540 },
    { day: 'Thu', breakfast: 310, lunch: 630, snacks: 170, dinner: 520 },
    { day: 'Fri', breakfast: 300, lunch: 640, snacks: 190, dinner: 530 },
    { day: 'Sat', breakfast: 350, lunch: 700, snacks: 220, dinner: 600 },
    { day: 'Sun', breakfast: 330, lunch: 680, snacks: 210, dinner: 550 },
  ];

  return (
    <BarChart
      dataset={dataset}
      xAxis={[ { dataKey: 'day', label: 'Day of Week' } ]}
      series={[
        { dataKey: 'breakfast', label: 'Breakfast', stack: 'meals' },
        { dataKey: 'lunch',     label: 'Lunch',     stack: 'meals' },
        { dataKey: 'snacks',    label: 'Snacks',    stack: 'meals' },
        { dataKey: 'dinner',    label: 'Dinner',    stack: 'meals' },
      ]}
      height={400}
      valueFormatter={(value) => `${value} kcal`}
    />
  );
}