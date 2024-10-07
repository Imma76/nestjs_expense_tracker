import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ExpenseController } from './expense/expense.controller';
import { UserService } from './user/user.service';
import { ExpenseService } from './expense/expense.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, ExpenseController],
  providers: [AppService, UserService, ExpenseService],
})
export class AppModule {}
