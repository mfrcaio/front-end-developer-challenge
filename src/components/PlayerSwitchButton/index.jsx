import PropTypes from 'prop-types';
import { ReactComponent as RightArrow } from '../../assets/icones/seta-direita.svg';
import { ReactComponent as LeftArrow } from '../../assets/icones/seta-esquerda.svg';
import {
  Container, IconContainer, StylledButton, TextContainer,
} from './styles';

function PlayerSwitchButton({
  side = 'right', setRenderedPlayer, player, isDisabled,
}) {
  const buttonText = side === 'left' ? 'Anterior' : 'Próximo';

  const handleClick = () => {
    setRenderedPlayer(player);
  };

  return (
    <StylledButton onClick={handleClick} disabled={isDisabled}>
      <Container>
        <IconContainer>
          { side === 'left' && !isDisabled ? <LeftArrow width="10px" height="14px" /> : null }
        </IconContainer>
        <TextContainer>{buttonText}</TextContainer>
        <IconContainer>
          { side === 'right' && !isDisabled ? <RightArrow width="10px" height="14px" /> : null }
        </IconContainer>
      </Container>
    </StylledButton>
  );
}

PlayerSwitchButton.propTypes = {
  side: PropTypes.string.isRequired,
  setRenderedPlayer: PropTypes.func.isRequired,
  player: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    posicao: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    jogos: PropTypes.number.isRequired,
    gols: PropTypes.number.isRequired,
    texto: PropTypes.string.isRequired,
    final: PropTypes.string.isRequired,
  }),
  isDisabled: PropTypes.bool.isRequired,
};

PlayerSwitchButton.defaultProps = {
  player: undefined,
};

export default PlayerSwitchButton;
