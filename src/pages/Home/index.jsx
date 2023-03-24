import { useState } from 'react';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import Card from '../../components/Card';
import mockData from '../../mocks/mockData';
import { posicaoMock, idadeMock } from '../../mocks/mockSelectOptions';
import {
  CardsContainer,
  Container,
  ContentInfo,
  InfoContainer,
  PublishedInfo,
  SubTitle,
  TextContainer,
  Title,
  ActionBarContainer,
  CheckboxContainer,
} from './styles';

const content = `
Na conquista do tricampeonato da Libertadores pelo Palmeiras,
candidatos a herói do título não faltaram.
O carioca Deyverson de 30 anos saiu do banco na prorrogação para marcar o gol
da vitória por 2 a 1 sobre o Flamengo e ser eleito o melhor do jogo.
Com defesas importantes, Weverton também pode ser considerado um dos
protagonistas do confronto.
`;

function Home() {
  const [filterByPosition, setFilterByPosition] = useState('');
  const [filterByAge, setFilterByAge] = useState('0,99');
  const [filterByPlayedFinal, setFilterByPlayedFinal] = useState(false);
  const [filterByWhoScored, setFilterByWhoScored] = useState(false);

  const hasTheNumber = (number, interval) => {
    const intervalArray = interval.split(',');
    const minAge = intervalArray[0];
    const maxAge = intervalArray[1];

    return number >= minAge && number <= maxAge;
  };

  const filteredData = mockData.filter((item) => {
    const hasFilterByPositionCondition = filterByPosition === '' || item.posicao === filterByPosition;
    const hasFilterByAgeCondition = hasTheNumber(item.idade, filterByAge);
    const hasFilterByPlayedFinalCondition = !filterByPlayedFinal || item.final === 'sim';
    const hasFilterByWhoScoredCondition = !filterByWhoScored || item.gols > 0;

    return hasFilterByPositionCondition
      && hasFilterByAgeCondition
      && hasFilterByPlayedFinalCondition
      && hasFilterByWhoScoredCondition;
  });

  const renderCards = () => (
    filteredData.map((item) => <Card selectedPlayer={item} cards={filteredData} key={item.nome} />)
  );

  return (
    <Container>
      <InfoContainer>
        <TextContainer>
          <Title>O ELENCO DO CAMPEÃO</Title>
          <SubTitle>CONHEÇA OS JOGADORES DO PALMEIRAS, VENCEDOR DA LIBERTADORES 2021</SubTitle>
          <PublishedInfo>Publicado em 03.08.2021 • Atualizado em 04.08.2021</PublishedInfo>
          <ContentInfo>{ content }</ContentInfo>
        </TextContainer>
      </InfoContainer>

      <ActionBarContainer>
        <Select data={posicaoMock} position={filterByPosition} setPosition={setFilterByPosition} />
        <Select data={idadeMock} age={filterByAge} setAge={setFilterByAge} />
        <CheckboxContainer>
          <Checkbox label="Somente quem marcou gol" scored={setFilterByWhoScored} />
          <Checkbox label="Somente quem jogou na final" playedFinal={setFilterByPlayedFinal} />
        </CheckboxContainer>
      </ActionBarContainer>

      <CardsContainer>{ renderCards() }</CardsContainer>
    </Container>
  );
}

export default Home;
