import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  min-width: 18px;
  min-height: 18px;
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 1px;
  margin-right: 11px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.green.light};
    border-color: ${({ theme }) => theme.green.light};

    &:before {
      content: '\u2714';
      display: block;
      color: ${({ theme }) => theme.white};
      text-align: center;
      line-height: 1;
      font-size: 16px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.green.dark};
      border: 2px solid ${({ theme }) => theme.green.dark};
    }
  }

  &:not(:checked) {
    &:hover {
      border-color: ${({ theme }) => theme.green.dark};
    }
  }
`;

export const CheckboxLabel = styled.span`
  color: ${({ theme }) => theme.green.dark};
  font: normal normal 15px/18px Italic;
  text-align: left;
  letter-spacing: 0.38px;
  opacity: 1;

  @media(max-width: 768px) {
    max-width: 156px;
  }
`;
