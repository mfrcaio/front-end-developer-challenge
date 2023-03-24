import styled from 'styled-components';
import imgHeader from '../../assets/img-header.jpg';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1500px;
  min-height: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};

  @media(max-width: 480px) {
    min-height: 1000px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 842px;
  background: transparent url(${imgHeader}) 0% 0% no-repeat padding-box;
  padding-inline: 8%;
  padding-top: 203px;

  @media(max-width: 480px) {
    padding-inline: 10px;
    min-height: 550px;
    background: transparent url(${imgHeader}) 0% 0% no-repeat padding-box;
    background-size: 100% 244px;
    background-color: ${({ theme }) => theme.white};
    padding-top: 113px;
  }
`;

export const ActionBarContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 80px;
  margin-top: -62px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 18%;
  box-shadow: ${({ theme }) => theme.green.dark} 1px 15px 0px 0px;

  @media(max-width: 1280px) {
    padding-inline: 10%;
  }

  @media(max-width: 1024px) {
    padding-inline: 5%;
  }

  @media(max-width: 768px) {
    height: 220px;
    display: flex;
    flex-direction: column;
    padding-inline: 0%;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 50px;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-inline: 20px;
  }
`;

export const TextContainer = styled.div`
  max-width: 500px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.green.dark} 0% 0% no-repeat padding-box;
  font: normal normal bold 60px/65px Bold;
  opacity: 1;
  padding: 5px 19px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  text-transform: uppercase;
  text-align: left;

  @media(max-width: 480px) {
    font: normal normal bold 30px/32px Bold;
    opacity: 1;
    padding: 3px 15px;
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.white} ;
  }
`;

export const SubTitle = styled.div`
  width: 359px;
  max-width: 359px;
  height: 100%;
  max-height: 49px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.green.light};
  font: normal normal normal 20px/25px Regular;
  text-transform: uppercase;

  @media(max-width: 480px) {
    max-width: 275px;
    margin-bottom: 12px;
    font: normal normal normal 15px/18px Regular;
    text-align: left;
    letter-spacing: 0.38px;
    color: ${({ theme }) => theme.white};
    opacity: 1;
  }
`;

export const PublishedInfo = styled.h4`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.gray};
  font: normal normal bold 12px/12px Arial;
  text-transform: uppercase;

  @media(max-width: 480px) {
    display: flex;
    align-items: center;
    font: normal normal bold 10px/12px Arial;
    color: ${({ theme }) => theme.green.main};
    height: 50px;
    margin-bottom: 0;
    text-transform: none;
    margin-top: 50px;
  }

  @media(max-width: 375px) {
    margin-top: 0px;
  }
`;

export const ContentInfo = styled.p`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 183px;
  font: normal normal normal 19px/27px Arial;
  color: ${({ theme }) => theme.white};

  @media(max-width: 480px) {
    font: normal normal normal 14px/24px Arial;
    color: ${({ theme }) => theme.green.dark};
    max-height: none;
  }
`;

export const CardsContainer = styled.div`
  height: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
  display: grid;
  margin-left: 10%;
  margin-right: 10%;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media(max-width: 1400px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media(max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 10%;
    margin-right: 10%;
  }

  @media(max-width: 1050px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media(max-width: 920px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 10%;
    margin-right: 10%;
  }

  @media(max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
