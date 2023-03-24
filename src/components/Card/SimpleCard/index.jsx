import PropTypes from 'prop-types';
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

SimpleCard.propTypes = {
  selectedPlayer: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    posicao: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    jogos: PropTypes.number.isRequired,
    gols: PropTypes.number.isRequired,
    texto: PropTypes.string.isRequired,
    final: PropTypes.string.isRequired,
  }).isRequired,
  handleIsCardOpenChange: PropTypes.func.isRequired,
};

export default SimpleCard;
