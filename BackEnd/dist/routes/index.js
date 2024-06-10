"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerRoutes_1 = __importDefault(require("./CustomerRoutes"));
const retur = (0, express_1.Router)();
const url_prefix = "/api/v1";
retur.use(`${url_prefix}/customer`, new CustomerRoutes_1.default().getRouter);
exports.default = retur;
