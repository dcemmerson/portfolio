import { Radio } from 'app/components/Radio';
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
      <Themes>
        <ToggleSwitch
          id="Toggle"
          label="Toggle Theme"
          onChange={handleThemeChange}
          isChecked={theme === 'dark'}
          value={theme === 'dark' ? 'light' : 'dark'}
        />
        {/* <Radio
        id="system"
        label="System theme"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="system"
        isSelected={theme === 'system'}
      />
      <Radio
        id="light"
        label="Light"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="light"
        isSelected={theme === 'light'}
      />
      <Radio
        id="dark"
        label="Dark"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="dark"
        isSelected={theme === 'dark'}
      /> */}
      </Themes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Themes = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;
