import React, { memo } from 'react';
import styled from 'styled-components/macro';

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
        </label>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  span:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked span {
    background-color: #2196f3;
  }

  input:focus span {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  span {
    border-radius: 34px;
  }

  span:before {
    border-radius: 50%;
  }
`;
