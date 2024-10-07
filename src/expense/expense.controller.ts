import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ExpenseDTO } from 'src/dto/expense.dto';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService) { }

    @Post('create')
    create(@Body() expense: ExpenseDTO) {
        return this.expenseService.create(expense);
    }
    @Post('update')
    update(@Body() expense: ExpenseDTO) {
        return this.expenseService.update(expense);
    }

    @Delete('delete')
    delete(@Param('id') id: string) {
        return this.expenseService.delete(id);
    }

    @Post('getByMonth')
    getByMonth(@Body() startDate: string, endDate: string) {
        return this.expenseService.findbyMonth(startDate, endDate);
    }
}
