import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 280px;
    margin: 0;
  }
`;

export const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.green.light};
  font-size: 16px;
  color: ${({ theme }) => theme.green.dark};
  cursor: pointer;
  transition: border-color 0.3s ease-in;
  letter-spacing: 0.38px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border: 2px solid ${({ theme }) => theme.green.dark};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow-y: auto;
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: ${({ theme }) => theme.white};
  z-index: 1;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font: normal normal normal 15px/18px Regular;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.green.light};
  }
`;

export const SelectIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
