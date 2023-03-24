import styled from 'styled-components';
import closeIcon from '../../../assets/icones/fechar.svg';
import closeIconHover from '../../../assets/icones/fechar-hover.svg';

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 100, 55, 0.8);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Container = styled.div`
  width: 280px;
  height: 350px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 50px 15px 15px 15px;
  padding: 8px 5.3px 10px 8px;
  opacity: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.green.dark} url(${({ imgUrl }) => imgUrl}) 0% 0% no-repeat padding-box;
  border-radius: 50%;
  opacity: 1;
`;

export const AsideContainer = styled.div`
  padding-left: 6.5px;
  width: 165px;
`;

export const ChartTitle = styled.div`
    color: ${({ theme }) => theme.green.dark};
    font-weight: bold;
    font-size: 16px;
`;

export const ChartSubtitle = styled.div`
    font-size: 13px;
    display: flex;
    flex-direction: row;
`;

export const ChartContainer = styled.div`
  display: flex;
`;

export const ChartLegendContainer = styled.div`
`;

export const ChartLegend = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: end;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background: url(${closeIcon});
  border: none;

  &:hover {
    background: url(${closeIconHover});
    transition: .3s;
  }
`;

export const ContentContainer = styled.section`
  padding-top: 18px;
  height: 250px;
`;

export const BodyContainer = styled.section`
  position: relative;
  height: 179px;
  overflow: hidden scroll;
  margin-right: 12px;
  margin-left: 14px;
  margin-bottom: 10px;
  padding-bottom: 30px;
  padding-right: 5px;


  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.green.dark};
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.white};
    transition: 0.5s;
    height: 5px;
  }

  & > div {
    z-index: 2;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-inline: 11px;

  &::after {
    content: "";
    position: absolute;
    bottom: 37px;
    left: 0px;
    width: 236px;
    height: 51px;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      ${({ theme }) => theme.white} 100%
    );
  }
`;
