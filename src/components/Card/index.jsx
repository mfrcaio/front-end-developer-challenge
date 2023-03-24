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

export default Card;
