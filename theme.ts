"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    jewel: [
      '#e6f7f4',
      '#ccefe9',
      '#b3e7de',
      '#99dfd4',
      '#80d7c9',
      '#66cfbe',
      '#4cc7b3',
      '#33bfa8',
      '#19b79d',
      '#087a68', // Primary color
    ],
    blue: [
      '#e6f7f4',
      '#ccefe9',
      '#b3e7de',
      '#99dfd4',
      '#80d7c9',
      '#66cfbe',
      '#4cc7b3',
      '#33bfa8',
      '#19b79d',
      '#087a68', // Override blue with our teal
    ],
  },
  primaryColor: 'jewel'
});
