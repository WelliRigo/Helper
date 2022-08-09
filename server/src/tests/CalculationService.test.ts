import CalculationService from '../services/CalculationService';

const calculationService = new CalculationService();

describe('testing CalculationService file', () => {
  test('calculatePositiveDivisors function', () => {
    expect(calculationService.calculatePositiveDivisors(2)).toBe(2)
    expect(calculationService.calculatePositiveDivisors(3)).toBe(2)
    expect(calculationService.calculatePositiveDivisors(4)).toBe(3)
    expect(calculationService.calculatePositiveDivisors(5)).toBe(2)
    expect(calculationService.calculatePositiveDivisors(48)).toBe(10)
  });

  test('calculateIntegers function', () => {
    expect(calculationService.calculateIntegers(2).value).toBe(0);
    expect(calculationService.calculateIntegers(3).value).toBe(1);
    expect(calculationService.calculateIntegers(4).value).toBe(1);
    expect(calculationService.calculateIntegers(5).value).toBe(1);
    expect(calculationService.calculateIntegers(50).value).toBe(8);
  });
});