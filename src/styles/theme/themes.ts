const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  textAccent: 'rgba(36, 145, 255, 0.9)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.4)',
  borderSecondary: 'rgba(58,52,51,0.22)',
  borderLight: 'rgba(58,52,51,0.05)',
  accent: 'rgba(70, 146, 245, 1)',
  navbarBackgroundColor: 'rgba(255, 255, 255, 0.8)',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',

  text: 'rgba(231,233,241,0.8)',
  textSecondary: 'rgba(231,233,241,0.5)',
  textAccent: 'rgba(36, 145, 255, 0.6)',
  background: 'rgba(15,15,16,1)',
  backgroundVariant: 'rgba(26,26,28,1)',
  border: 'rgba(241,233,231, 0.35)',
  borderSecondary: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  accent: 'rgba(70, 146, 245, 1)',
  navbarBackgroundColor: 'rgba(15, 15, 16, 0.85)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
