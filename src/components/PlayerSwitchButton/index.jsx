/* eslint-disable react/prop-types */
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

export default PlayerSwitchButton;
