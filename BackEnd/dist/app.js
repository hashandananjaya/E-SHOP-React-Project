"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
// dotenv configuration
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const allowedOrigins = ["http://loacalhost:4000"];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
}));
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/", routes_1.default);
app.use((error, req, res) => {
    res.status(500).json({ message: error.message });
});
mongoose_1.default.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("DB Connected");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on PORT : " + process.env.PORT);
    });
}).catch((error) => {
    console.log("Something went wrong : " + error);
});
