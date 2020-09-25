import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  label: string;
  isChecked: boolean;
  className?: string;
}

export const ToggleSwitch = memo(
  ({ id, label, isChecked, className, ...restOf }: Props) => {
    return (
      <Wrapper className={className}>
        <label className="switch">
          <input type="checkbox" id={id} checked={isChecked} {...restOf} />
          <span className="slider round"></span>
          <IoMdSunny className="sun" />
          <IoMdMoon className="moon" />
        </label>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  label {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4d4d4d;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      z-index: 2;
      position: absolute;
      content: '';
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }

  input + .slider:before {
    background-color: #eee;
  }

  input:focus + .slider:before {
    box-shadow: 0 0 6px 3px ${p => p.theme.accent};
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
  }

  .moon {
    position: absolute;
    width: 18px;
    height: 20px;
    left: 4px;
    top: 2.8px;
    z-index: 1;
  }
  input:not(:checked) ~ .moon {
    transform: translateY(100%);
    transition: 0.25s ease-in;
    color: rgba(0, 0, 0, 0);
  }
  input:checked ~ .moon {
    transform: translateY(0px);
    transition: 0.25s ease-out;
    color: #ffd783;
  }
  .sun {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 4px;
    top: 2.8px;
    z-index: 1;
  }
  input:checked ~ .sun {
    transform: translateY(100%);
    transition: 0.25s ease-in;
    color: rgba(0, 0, 0, 0);
  }
  input:not(:checked) ~ .sun {
    transform: translateY(0px);
    transition: 0.25s ease-out;
    color: #ffcc4d;
  }

  /* Rounded sliders */
  .slider {
    border-radius: 26px;
  }

  .slider::before {
    border-radius: 50%;
  }
`;
