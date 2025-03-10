import { Router } from "express";
import tollRouter from "./toll.router";

const router: Router = Router();
router.use("/tolls/", tollRouter);

export default router;
