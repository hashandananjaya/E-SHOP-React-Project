import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes"

const retur: Router = Router();

const url_prefix = "/api/v1";

retur.use(`${url_prefix}/customer`, new CustomerRoutes().getRouter);

export default retur;
