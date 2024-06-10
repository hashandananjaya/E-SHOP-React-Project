"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default" : mod };
  };
Object.defineProperty(exports, "__exModule", { value : true });
const express_1 = __importDefault(require("express"));
const CustomerRouter_1 = __importDefault(require("../controllers/CustomerController"));
class UseRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.customeController = new CustomerController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.customeController.createCustomer);
            this.router.get("/", this.customeController.getAllCustomers);
            this.router.get("/", this.customeController.checkSignIn);

        };
        this.getRouter =() => {
            return this.router;
        };
        this.configRoutes();

    }
}  
exports.default = UserRoutes;