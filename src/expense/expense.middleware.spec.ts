import { ExpenseMiddleware } from './expense.middleware';

describe('ExpenseMiddleware', () => {
  it('should be defined', () => {
    expect(new ExpenseMiddleware()).toBeDefined();
  });
});
