"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = require("mongoose");
const CustomerSchema = new mongoose_1.Schema({
    userName: {
        type: "String",
        required: true,
    },
    email: {
        type: "String",
        required: true,
    },
    password: {
        type: "String",
        required: true,
    },
}, { timestamps: true });
exports.Customer = (0, mongoose_1.model)("Customer", CustomerSchema);
