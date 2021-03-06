import React, { memo } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
    border-color: #19bdff;

    border-radius: 50%;
  }

  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
    border-color: green;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.blue};
    background-color: green;
  }
`;

// resProps is use to make the code shorter instead of passing all the elements we can only just pass the resProps
const CustomRadio = ({ label, ...restProps }) => {
  return (
    <RadioWrapper htmlFor={restProps.id}>
      {label}
      {/* keep the order or passing them must be same as written below  */}
      <input {...restProps} type="radio" />
      <span />
    </RadioWrapper>
  );
};

export default memo(CustomRadio);
