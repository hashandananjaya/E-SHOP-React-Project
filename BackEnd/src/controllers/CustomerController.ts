import{ Request, RequestHandler, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { Customer } from "../models/Customer";


export default class CustomerController {
    createCustomer: RequestHandler = async (req:Request, res:Response): Promise<Response> => {
        let session: ClientSession | null = null;

        try{
            session = await mongoose.startSession();
            session.startTransaction();

            const customer = new Customer(req.body);

            let newCustomer = await customer.save();

            await session.commitTransaction();
            session.endSession();

            return res.status(200).json({ massage: "New Customer Added.", ResponseData: newCustomer});
        }catch (error: unknown){
            if(session !=null){
                try {
                    await session.abortTransaction();
                }catch (abortErroe) {
                    console.log(`Error aborting transaction: ${abortErroe}`);
                }
            }
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message, responseDate: false}); 
            }else{
                 return res.status(500).json({ message: " Unknown error occured.", responseDate: false});
            }

        }
        
    };
    checkSingIn = async (req:Request, res:Response): Promise<Response> => {
        try{
            const customer = await Customer.find();
            for(let index = 0; index < customer.length; index++) {
                if(customer[index].email == req.params.email){
                    if(customer[index].password == req.params.password){
                        return res.status(200).json({responseData: true});
                        break;
                    }else{
                        return res.status(200).json({responseDate: false});
                    }
                    
                    
                }else{
                    continue;
                }
            }
            return res.status(200).json({responeDate: false});

        }catch (error:unknown) {
            if (error instanceof Error){
                return res.status(500).json({massage: error});
            }else{
                return res.status(500).json({massage: "unknown error"});
            }
        }

        
    
    };
    geAllCustomers: RequestHandler = async (req: Request,res:Response): Promise<Response> => {
        try{
            const customer = await Customer.find();
            return res.status(200).json({ responseDate: customer});
        }catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({ massage: error.message });
            }else {
                return res.status(500).json({ massage: "unknown error."});
            }
        }
    };

}