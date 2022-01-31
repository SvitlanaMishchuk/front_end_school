import { numberFormatter } from '../numberFormatter';

const argLessThan1000 = 998;
const argLessThanMinus1000 = -777;
const argBetween1000To1M = 2378;
const argMoreThan1M = 1238000;
const argMoreThanMinus1M = -10210000;
const argNaN = NaN;

const eRLessThan1000 = 998;
const erLessThanMinus1000 = -777;
const eRBetween1000To1M = "2.4K";
const eRMoreThan1M = "1.2M";
const eRMoreThanMinus1M = "-10.2M";
const eRArgNaN = "";

test('numberFormatter: function shoul convert number to string with suffix, if number more than 1000', () => {
    expect(numberFormatter(argLessThan1000)).toBe(eRLessThan1000);
    expect(numberFormatter(argLessThanMinus1000)).toBe(erLessThanMinus1000);
    expect(numberFormatter(argBetween1000To1M)).toBe(eRBetween1000To1M);
    expect(numberFormatter(argMoreThan1M)).toBe(eRMoreThan1M);
    expect(numberFormatter(argMoreThanMinus1M)).toBe(eRMoreThanMinus1M);
    expect(numberFormatter(argNaN)).toBe(eRArgNaN);
})