import express from "express";
import { createAdminValidator } from "../../utils/utils";
import {
  getAllUsers,
  getUser,
} from "../../controller/adminController/getAllUsers";
import { getAllPatient } from "../../controller/adminController/getAllPatients";
import { createAdmin } from "../../controller/adminController/adminSignup";
import { loginAdmin } from "../../controller/adminController/adminLogin";
import { deletePatient } from "../../controller/adminController/deletePatient";
import { deleteUser } from "../../controller/adminController/deleteUser";
import { authenticateUser } from "../../middlewares/auth";
const router = express.Router();

router.post("/register", createAdmin);
router.post("/login", loginAdmin);

// User Route
router.get("/getUsers",authenticateUser, getAllUsers);
router.get("/getUser/:id",authenticateUser, getUser);

//patient Route
router.get("/getPatients",authenticateUser, getAllPatient);
router.delete("/deletePatient/:patientId",authenticateUser, deletePatient);
router.delete("/deleteUser/:id",authenticateUser, deleteUser);

export default router;
