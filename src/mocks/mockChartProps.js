const simpleOptions = {
  width: 150,
  height: 50,
  grid: 'none',
  backgroundColor: 'transparent',
  bar: { groupWidth: '90%' },
  legend: { position: 'none' },
  tooltip: { trigger: 'none' },
  hAxis: { maxValue: 15, ticks: [] },
  chartArea: { width: '70%', height: '80%' },
  annotations: {
    textStyle: {
      fontSize: 13,
      bold: true,
    },
    alwaysOutside: true,
  },
};

const simpleData = (jogos, gols) => [
  ['Element', 'data', { role: 'style' }, { role: 'annotation' }],
  [null, jogos, 'color: #B4DDC1', jogos],
  [null, gols, 'color: #72BF44', gols],
];

const expandedOptions = {
  width: 150,
  height: 130,
  grid: 'none',
  backgroundColor: 'transparent',
  legend: { position: 'none' },
  tooltip: { trigger: 'none' },
  vAxis: { maxValue: 16, ticks: [] },
  chartArea: { width: '50%', height: '100%' },
  annotations: {
    textStyle: {
      fontSize: 16,
      bold: true,
    },
    alwaysOutside: true,
  },
};

const expandedData = (jogos, gols) => [
  ['Element', 'data', { role: 'style' }, { role: 'annotation' }],
  [null, jogos, 'color: #B4DDC1', jogos],
  [null, gols, 'color: #72BF44', gols],
];

const mobileOptions = {
  width: 150,
  height: 50,
  grid: 'none',
  backgroundColor: 'transparent',
  bar: { groupWidth: '70%' },
  legend: { position: 'none' },
  tooltip: { trigger: 'none' },
  hAxis: { maxValue: 15, ticks: [] },
  chartArea: { width: '70%', height: '80%' },
  annotations: {
    textStyle: {
      fontSize: 13,
      bold: true,
    },
    alwaysOutside: true,
  },
};

const mobileData = (jogos, gols) => [
  ['Element', 'data', { role: 'style' }, { role: 'annotation' }],
  [null, jogos, 'color: #B4DDC1', jogos],
  [null, gols, 'color: #72BF44', gols],
];

export {
  simpleOptions,
  simpleData,
  expandedOptions,
  expandedData,
  mobileOptions,
  mobileData,
};
