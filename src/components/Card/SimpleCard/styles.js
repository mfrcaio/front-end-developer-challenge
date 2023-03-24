import styled from 'styled-components';
import openIcon from '../../../assets/icones/saiba-mais.svg';
import openIconHover from '../../../assets/icones/saiba-mais-hover.svg';

export const SimpleCardContainer = styled.div`
  height: 100px;
  width: 280px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid #B4DDC1;
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 50px 15px 15px 50px;
  padding: 10px 6px 10px 10px;
  opacity: 1;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.green.dark} url(${({ imgUrl }) => imgUrl}) 0% 0% no-repeat padding-box;
  border-radius: 50%;
  opacity: 1;
`;

export const SimpleChartContentContainer = styled.div`
  padding-left: 6.5px;
  width: 167px;
  `;

export const SimpleChartContentTitle = styled.div`
    color: ${({ theme }) => theme.green.dark};
    font-weight: bold;
`;

export const SimpleChartContentInfo = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;
`;

export const SimpleChartBodyContainer = styled.div`
  display: flex;
`;

export const SimpleChartBodyInfoContainer = styled.div`
`;

export const SimpleChartBodyInfoText = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const OpenButtonContainer = styled.div`
  margin-bottom: -6px;
  display: flex;
  align-items: flex-end;
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  background: url(${openIcon});
  border: none;

  &:hover {
    background: url(${openIconHover});
    transition: .3s;
  }
`;
