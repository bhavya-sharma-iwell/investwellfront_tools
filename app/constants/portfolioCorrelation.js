const categoryOption = [
    { value: 'arbitrage', name: 'Arbitrage' },
    { value: 'debt', name: 'Debt' },
    { value: 'equity', name: 'Equity' },
    { value: 'hybrid', name: 'Hybrid' },
    { value: 'liquid and ultra short', name: 'Liquid and Ultra Short' },
    { value: 'other', name: 'Other' }
]

const timePeriodOption = [
    { value: 3, name: '3 months' },
    { value: 6, name: '6 months' },
    { value: 12, name: '1 year' }
]

const defaultSchemes = [
    { schid: 2706, name: 'UTI Banking and Financial Services Fund (G)', launchDate: '2022-01-02',legend: 'SC1'},
    { schid: 48988, name: 'Tata Banking and Financial Services Fund (G) Direct', launchDate: '2022-01-02',legend: 'SC2'},
    { schid: 38564, name: 'Aditya Birla SL Banking and Financial Services Fund (G) Direct', launchDate: '2022-01-02',legend: 'SC3'},
    { schid: 25435, name: 'IDBI Equity Savings Fund (G)', launchDate: '2022-01-02',legend: 'SC4'},
    { schid: 34628, name: 'PGIM India Banking & PSU Debt Fund (G) Direct', launchDate: '2022-01-02',legend: 'SC5'},
    { schid: 18291, name: 'ICICI Pru Banking and Financial Services Fund Reg (G)', launchDate: '2022-01-02',legend: 'SC6'},
    { schid: 22339, name: 'Axis Bluechip Fund (G)', launchDate: '2022-01-02',legend: 'SC7'},
    { schid: 32713, name: 'ICICI Pru Banking and Financial Services (G) Direct', launchDate: '2022-01-02',legend: 'SC8'},
    { schid: 31490, name: 'DSP Equity Opp Fund (G) Direct', launchDate: '2022-01-02',legend: 'SC9'},
    { schid: 32891, name: 'JM Flexi Cap Fund (G) Direct', launchDate: '2022-01-02',legend: 'SC10'}
]

export {
    categoryOption,
    timePeriodOption,
    defaultSchemes
}
