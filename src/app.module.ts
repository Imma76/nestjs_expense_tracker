import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseController } from './expense/expense.controller';
import { ExpenseService } from './expense/expense.service';
import { Expense, expenseSchema } from './schema/expense.schema';
import { User, userSchema } from './schema/user.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Emma:SpC9Qvv4luueqBPY@cluster0.kx41p.mongodb.net/nest_expense_tracker?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: userSchema }, { name: Expense.name, schema: expenseSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.salt,
      privateKey: process.env.privateKey,
      signOptions: { expiresIn: '10' },
    }),
  ],
  controllers: [AppController, UserController, ExpenseController],
  providers: [AppService, UserService, ExpenseService, JwtService],
})
export class AppModule { }
