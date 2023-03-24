import PropTypes from 'prop-types';
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SimpleCard from './SimpleCard';
import ExpandedCard from './ExpandedCard';
import MobileCard from './MobileCard';

function Card({ selectedPlayer, cards }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width <= 480;

  const handleIsCardOpenChange = () => {
    setIsCardOpen(!isCardOpen);
  };

  function simpleCard() {
    return (
      <SimpleCard
        selectedPlayer={selectedPlayer}
        handleIsCardOpenChange={handleIsCardOpenChange}
      />
    );
  }

  function expandedCard() {
    return (
      <ExpandedCard
        selectedPlayer={selectedPlayer}
        cards={cards}
        handleIsCardOpenChange={handleIsCardOpenChange}
      />
    );
  }

  function mobileCard() {
    return (
      <MobileCard
        selectedPlayer={selectedPlayer}
        cards={cards}
        handleIsCardOpenChange={handleIsCardOpenChange}
      />
    );
  }

  return isCardOpen && !isMobile
    ? expandedCard() : isCardOpen && isMobile
      ? mobileCard() : simpleCard();
}

Card.propTypes = {
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
  cards: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    posicao: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    jogos: PropTypes.number.isRequired,
    gols: PropTypes.number.isRequired,
    texto: PropTypes.string.isRequired,
    final: PropTypes.string.isRequired,
  })).isRequired,
};

export default Card;
