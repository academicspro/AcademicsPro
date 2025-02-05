import express from "express";
import { deleteSchool, getAllSchools, getSchoolById, registerSchool, updateSchool } from "../../controller/superadmin/schoolRegisterController";



const router = express.Router();

router.post("/school/register", registerSchool);
router.get("/schools", getAllSchools);
router.get("/school/:id", getSchoolById);
router.put("/school/:id", updateSchool);
router.delete("/school/:id", deleteSchool);

export default router;