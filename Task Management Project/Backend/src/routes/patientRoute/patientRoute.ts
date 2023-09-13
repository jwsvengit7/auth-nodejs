import express from "express";
import { createPatient } from "../../controller/patientController/createPatient";
import { searchPatient } from "../../controller/patientController/searchPatient";
import { authenticateUser } from "../../middlewares/auth";
const router = express.Router();

router.post("/createPatient",authenticateUser, createPatient);
router.get("/searchPatient",authenticateUser, searchPatient);

export default router;
