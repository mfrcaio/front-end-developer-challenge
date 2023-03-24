/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import getChartProps from '../../../utils/getChartProps';
import PlayerSwitchButton from '../../PlayerSwitchButton';
import {
  Overlay,
  Container,
  HeaderContainer,
  ImageContainer,
  AsideContainer,
  ChartTitle,
  ChartSubtitle,
  ChartContainer,
  ChartLegendContainer,
  ChartLegend,
  CloseButtonContainer,
  CloseButton,
  ContentContainer,
  BodyContainer,
  FooterContainer,
} from './styles';

function MobileCard({ selectedPlayer, cards, handleIsCardOpenChange }) {
  const [renderedPlayer, setRenderedPlayer] = useState(selectedPlayer);
  const {
    nome,
    foto,
    posicao,
    idade,
    jogos,
    gols,
    texto,
  } = renderedPlayer;
  const { options, data } = getChartProps(jogos, gols, 'mobile');
  const index = cards.findIndex((item) => item.nome === renderedPlayer.nome);

  const header = () => (
    <HeaderContainer style={{ display: 'flex', flexDirection: 'row' }}>
      <ImageContainer imgUrl={`/jogadores/${foto}`} />

      <AsideContainer>
        <ChartTitle>{nome}</ChartTitle>
        <ChartSubtitle>{`${posicao} | ${idade} Anos`}</ChartSubtitle>

        <ChartContainer>
          <ChartLegendContainer>
            <ChartLegend>Jogos</ChartLegend>
            <ChartLegend>Gols</ChartLegend>
          </ChartLegendContainer>
          <Chart
            chartType="BarChart"
            data={data}
            options={options}
            style={{ marginLeft: '-10px' }}
          />
        </ChartContainer>
      </AsideContainer>

      <CloseButtonContainer>
        <CloseButton onClick={handleIsCardOpenChange} />
      </CloseButtonContainer>
    </HeaderContainer>
  );

  const body = () => (
    <BodyContainer>
      {texto}
    </BodyContainer>
  );

  const footer = () => (
    <FooterContainer>
      <PlayerSwitchButton
        side="left"
        setRenderedPlayer={setRenderedPlayer}
        player={cards[index - 1]}
        isDisabled={index === 0}
      />
      <PlayerSwitchButton
        side="right"
        setRenderedPlayer={setRenderedPlayer}
        player={cards[index + 1]}
        isDisabled={index === cards.length - 1}
      />
    </FooterContainer>
  );

  return (
    <Overlay onClick={handleIsCardOpenChange}>
      <Container onClick={(e) => e.stopPropagation()}>
        { header() }
        <ContentContainer>
          { body() }
          { footer() }
        </ContentContainer>
      </Container>
    </Overlay>
  );
}

export default MobileCard;
