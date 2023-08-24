import express from "express";

import { logout } from "../../controller/logoutController/logoutController";

const router = express.Router();

router.get("/", logout);

export default router;
