import express from "express";
import { deleteSchool, getAllSchools, getSchoolById, registerSchool, updateSchool } from "../../controller/superadmin/schoolRegisterController";
import multer from 'multer';


const router = express.Router();
const upload = multer();

router.post("/school/register",upload.single("profilePic"), registerSchool);
router.get("/schools", getAllSchools);
router.get("/school/:id", getSchoolById);
router.put("/school/:id", updateSchool);
router.delete("/school/:id", deleteSchool);

export default router;