import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true })
    username: string;
    @Prop({ default: Date.now })
    created_at: Date;
}

export const userSchema = SchemaFactory.createForClass(User);