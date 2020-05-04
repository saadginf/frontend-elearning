import React from 'react'
import styled from 'styled-components';
const StyledButton = styled.button`
  width: ${({ contain }) => (contain ? contain : '100%')};
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 20px;
  color: white;
  font-weight: 700;
 margin-top: 10px;
  background-color: ${({ color }) => (color? color : 'white')};
  
  border: none;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
  return (
    <StyledButton color={color} contain={contain} disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;