import {
  simpleOptions, simpleData, expandedOptions, expandedData, mobileOptions, mobileData,
} from '../mocks/mockChartProps';

const getChartProps = (jogos, gols, type) => {
  let options;
  let data;

  if (type === 'simple') {
    options = simpleOptions;
    data = simpleData(jogos, gols);
  }

  if (type === 'expanded') {
    options = expandedOptions;
    data = expandedData(jogos, gols);
  }

  if (type === 'mobile') {
    options = mobileOptions;
    data = mobileData(jogos, gols);
  }

  return { options, data };
};

export default getChartProps;
