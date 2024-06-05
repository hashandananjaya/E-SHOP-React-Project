import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";


export default class UserRoutes{
    private router = express.Reuter();
    private customerController: CustomerController = new CustomerController();

    constructor() {
        this.configRoutes();

    }

    private configRoutes = (): void => {
        this.router.post("/", this.customerController.createCustomer);
        this.router.get("/", this.customerController.getAllCustomers);
        this.router.get("/:email&:password", this.customerController.checkSignIn);
      };
    
      public getRouter = (): Router => {
        return this.router;
    };

}