/* eslint-disable react/prop-types */
import { Chart } from 'react-google-charts';
import getChartProps from '../../../utils/getChartProps';
import {
  SimpleChartBodyContainer,
  SimpleCardContainer,
  OpenButtonContainer,
  SimpleChartContentContainer,
  ImageContainer,
  SimpleChartContentTitle,
  SimpleChartContentInfo,
  SimpleChartBodyInfoText,
  SimpleChartBodyInfoContainer,
  Button,
} from './styles';

function SimpleCard({ selectedPlayer, handleIsCardOpenChange }) {
  const {
    nome,
    foto,
    posicao,
    idade,
    jogos,
    gols,
  } = selectedPlayer;
  const { options, data } = getChartProps(jogos, gols, 'simple');

  return (
    <SimpleCardContainer>
      <ImageContainer imgUrl={`/jogadores/${foto}`} />

      <SimpleChartContentContainer>
        <SimpleChartContentTitle>{nome}</SimpleChartContentTitle>
        <SimpleChartContentInfo>{`${posicao} | ${idade} Anos`}</SimpleChartContentInfo>

        <SimpleChartBodyContainer>
          <SimpleChartBodyInfoContainer>
            <SimpleChartBodyInfoText>Jogos</SimpleChartBodyInfoText>
            <SimpleChartBodyInfoText>Gols</SimpleChartBodyInfoText>
          </SimpleChartBodyInfoContainer>
          <Chart
            chartType="BarChart"
            data={data}
            options={options}
            style={{ marginLeft: '-10px' }}
          />
        </SimpleChartBodyContainer>
      </SimpleChartContentContainer>

      <OpenButtonContainer>
        <Button onClick={handleIsCardOpenChange} />
      </OpenButtonContainer>
    </SimpleCardContainer>
  );
}

export default SimpleCard;
