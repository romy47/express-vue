import { Router } from "express";
import ticketsRouter from "./tickets.router";
import boothRouter from "./booth.router";

const router: Router = Router();
router.use("/tickets/", ticketsRouter);
router.use("/booths/", boothRouter);

export default router;
