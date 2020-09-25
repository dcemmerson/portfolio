import { ToggleSwitch } from 'app/components/ToggleSwitch';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { selectThemeKey, changeTheme } from 'styles/theme/slice';
import { ThemeKeyType } from 'styles/theme/types';
import { saveTheme } from 'styles/theme/utils';

export function ThemeSwitch() {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(changeTheme(value));
  };

  return (
    <Wrapper>
      <ToggleSwitch
        id="Toggle"
        label="Toggle Theme"
        onChange={handleThemeChange}
        isChecked={theme === 'dark'}
        value={theme === 'dark' ? 'light' : 'dark'}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
