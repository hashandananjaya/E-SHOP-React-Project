import { Document, Schema, model} from "mongoose";
export interface ICustomer extends Document {
    useName: string;
    email: string;
    password: string;

}
const CustomerSchema =new Schema({
    userName: {
        type: "String",
        required: true,
    },
    email: {
        tepe: "string",
        required: true,
    },
    password: {
        tepe: "string",
        required: true,
    },


},
{timestamps: true}
);

export const Customer = model<ICustomer>("Customer", CustomerSchema);