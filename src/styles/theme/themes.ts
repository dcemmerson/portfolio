const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  textAccent: 'rgba(36, 145, 255, 0.9)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.22)',
  borderLight: 'rgba(58,52,51,0.05)',
  // toggleSwitchBackground: '#4d4d4d',
  // toggleSwitchColor: '#eee',
  accent: '#2491ff',
  // accent: 'rgba(210, 100, 50, 0.95)',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  textAccent: 'rgba(36, 145, 255, 0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  // toggleSwitchBackground: '#4d4d4d',
  // toggleSwitchColor: '#eee',
  accent: '#2491ff',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
