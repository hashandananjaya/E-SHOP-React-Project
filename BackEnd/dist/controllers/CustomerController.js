"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Customer_1 = require("../models/Customer");
class CustomerController {
    constructor() {
        this.createCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let session = null;
            try {
                session = yield mongoose_1.default.startSession();
                session.startTransaction();
                const customer = new Customer_1.Customer(req.body);
                let newCustomer = yield customer.save();
                yield session.commitTransaction();
                session.endSession();
                return res.status(200).json({ massage: "New Customer Added.", ResponseData: newCustomer });
            }
            catch (error) {
                if (session != null) {
                    try {
                        yield session.abortTransaction();
                    }
                    catch (abortErroe) {
                        console.log(`Error aborting transaction: ${abortErroe}`);
                    }
                }
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message, responseDate: false });
                }
                else {
                    return res.status(500).json({ message: " Unknown error occured.", responseDate: false });
                }
            }
        });
        this.checkSingIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield Customer_1.Customer.find();
                for (let index = 0; index < customer.length; index++) {
                    if (customer[index].email == req.params.email) {
                        if (customer[index].password == req.params.password) {
                            return res.status(200).json({ responseData: true });
                            break;
                        }
                        else {
                            return res.status(200).json({ responseDate: false });
                        }
                    }
                    else {
                        continue;
                    }
                }
                return res.status(200).json({ responeDate: false });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ massage: error });
                }
                else {
                    return res.status(500).json({ massage: "unknown error" });
                }
            }
        });
        this.geAllCustomers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield Customer_1.Customer.find();
                return res.status(200).json({ responseDate: customer });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ massage: error.message });
                }
                else {
                    return res.status(500).json({ massage: "unknown error." });
                }
            }
        });
    }
}
exports.default = CustomerController;
