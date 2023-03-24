/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import getChartProps from '../../../utils/getChartProps';
import PlayerSwitchButton from '../../PlayerSwitchButton';
import {
  ImageContainer,
  ExpandedCardContainer,
  ExpandedCardAsideContainer,
  ExpandedCardContentContainer,
  ExpandedCardFooterContainer,
  ExpandedCardBodyContainer,
  ExpandedCardBodyContent,
  ExpandedCardBodyTitle,
  CloseButtonContainer,
  ExpandedCardAsideContentContainer,
  ExpandedCardAsideText,
  ExpandedCardAsideFooterText,
  ExpandedCardAsideFooterContainer,
  Overlay,
  CloseButton,
} from './styles';

function ExpandedCard({ selectedPlayer, cards, handleIsCardOpenChange }) {
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
  const { options, data } = getChartProps(jogos, gols, 'expanded');
  const index = cards.findIndex((item) => item.nome === renderedPlayer.nome);

  const aside = () => (
    <ExpandedCardAsideContainer>
      <ImageContainer imgUrl={`/jogadores/${foto}`} />

      <ExpandedCardAsideContentContainer>
        <ExpandedCardAsideText style={{ fontWeight: 'bold' }}>{`${posicao}`}</ExpandedCardAsideText>
        <ExpandedCardAsideText>{`${idade} Anos`}</ExpandedCardAsideText>
        <Chart
          chartType="ColumnChart"
          data={data}
          options={options}
        />
      </ExpandedCardAsideContentContainer>

      <ExpandedCardAsideFooterContainer>
        <ExpandedCardAsideFooterText>Jogos</ExpandedCardAsideFooterText>
        <ExpandedCardAsideFooterText>Gols</ExpandedCardAsideFooterText>
      </ExpandedCardAsideFooterContainer>
    </ExpandedCardAsideContainer>
  );

  const body = () => (
    <ExpandedCardBodyContainer>
      <CloseButtonContainer>
        <CloseButton onClick={handleIsCardOpenChange} />
      </CloseButtonContainer>

      <ExpandedCardBodyTitle>{nome}</ExpandedCardBodyTitle>
      <ExpandedCardBodyContent>
        {texto}
      </ExpandedCardBodyContent>
    </ExpandedCardBodyContainer>
  );

  const footer = () => (
    <ExpandedCardFooterContainer>
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
    </ExpandedCardFooterContainer>
  );

  return (
    <Overlay onClick={handleIsCardOpenChange}>
      <ExpandedCardContainer onClick={(e) => e.stopPropagation()}>
        <ExpandedCardContentContainer>
          { aside() }
          { body() }
        </ExpandedCardContentContainer>
        { footer() }
      </ExpandedCardContainer>
    </Overlay>
  );
}

export default ExpandedCard;
