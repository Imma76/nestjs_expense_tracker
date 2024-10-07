import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserDTO } from "src/dto/user.dto";


@Schema()
export class Expense {
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    amount: number;
    @Prop({ required: true })
    date: string;
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user?: UserDTO;
}

export const expenseSchema = SchemaFactory.createForClass(Expense);