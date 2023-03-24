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

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.green.light};
  font-size: 16px;
  color: ${({ theme }) => theme.green.dark};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  transition: border-color 0.3s ease-in;
  letter-spacing: 0.38px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.green.dark};
  }

    option {
      /* height: 150px; */
      /* padding: 12px 20px; */
      /* font: normal normal normal 15px/18px Benton Sans; */
      font-size: 16px;
      background-color: #fff;
      color: #000;
      font-family: 'Open Sans', sans-serif;

      &:hover {
        background-color: #4caf50;
        color: #fff;
      }
    }
`;

// const Option = styled.option`
// height: 150px;
// font-size: 16px;
// padding: 12px 20px;
// background-color: #fff;
// color: #555;
// font-family: 'Open Sans', sans-serif;

// &:hover {
//   background-color: #4caf50;
//   color: #fff;
// }
// `;

export const SelectIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
