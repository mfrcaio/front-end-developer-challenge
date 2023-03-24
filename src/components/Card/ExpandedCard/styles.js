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

export const ExpandedCardContainer = styled.div`
  width: 356px;
  height: 390px;
  background: ${({ theme }) => theme.white} 0% 0% no-repeat padding-box;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 80px 15px 15px 15px;
  opacity: 1;
`;

export const ExpandedCardContentContainer = styled.div`
  display: flex;
  height: 339px;
  padding-bottom: 12px;
`;

export const ExpandedCardAsideContainer = styled.aside`
  width: 157px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 26px;
  background: ${({ theme }) => theme.green.dark} url(${({ imgUrl }) => imgUrl}) 20% 20% no-repeat padding-box;
  background-size: 100% 100%;
  border-radius: 50%;
  opacity: 1;
`;

export const ExpandedCardAsideContentContainer = styled.section`
    display: flex;
    -webkit-box-align: center;
    width: 100%;
    height: 170px;
    align-items: center;
    flex-direction: column;
`;

export const ExpandedCardAsideText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

export const ExpandedCardAsideFooterContainer = styled.section`
  display: flex;
  width: 100%;
  padding-inline: 40px;
  align-items: flex-start;
  justify-content: space-around;
`;

export const ExpandedCardAsideFooterText = styled.p`
  font-size: 15px;
  display: flex;
  flex-direction: row;
`;

export const ExpandedCardBodyContainer = styled.section`
  width: 204px;
  height: 339px;
  padding-top: 6px;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: end;
  padding-right: 4.2px;
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

export const ExpandedCardBodyTitle = styled.header`
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.64px;
  color: ${({ theme }) => theme.green.dark};
  opacity: 1;
  padding-top: 6px;
  padding-bottom: 26px;
`;

export const ExpandedCardBodyContent = styled.section`
  height: 250px;
  overflow: hidden scroll;
  margin-right: 10px;
  position: relative;
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

export const ExpandedCardFooterContainer = styled.footer`
  height: 51px;
  padding-top: 7px;
  display: flex;
  align-items: flex-start;
  margin-inline: 68px;
  justify-content: space-between;
  opacity: ${({ isDisabled }) => (isDisabled ? 'center' : 'space-between')};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 60px;
    left: 85px;
    width: 185px;
    height: 51px;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      ${({ theme }) => theme.white} 100%
    );
  }
`;
