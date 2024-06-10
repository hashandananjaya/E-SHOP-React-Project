"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CustomerController_1 = __importDefault(require("../controllers/CustomerController"));
class UserRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.customerController = new CustomerController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.customerController.createCustomer);
            this.router.get("/", this.customerController.geAllCustomers);
            this.router.get("/:email&:password", this.customerController.checkSingIn);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = UserRoutes;
