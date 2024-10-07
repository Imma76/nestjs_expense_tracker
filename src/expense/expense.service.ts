import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpenseDTO } from 'src/dto/expense.dto';
import { Expense } from 'src/schema/expense.schema';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  create(expense: ExpenseDTO) {
    return this.expenseModel.create(expense);
  }
  update(expense: ExpenseDTO) {
    return this.expenseModel.updateOne({ id: expense.id }, expense);
  }
  delete(id: string) {
    return this.expenseModel.deleteOne({ id });
  }
  findbyMonth(startDate: string, endDate: string) {
    return this.expenseModel.find({
      $gte: startDate, // Start date
      $lte: endDate, // End date });
    });
  }
}
