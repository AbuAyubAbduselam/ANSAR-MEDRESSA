import { Router } from "express";
import {
  validateStudentInput,
  validateIdParam,
} from "../middleware/validationMiddlware.js";
const router = Router();
import {
  getAllTeachers,
  createTeacher,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
  showStats,
} from "../controller/teachersController.js";

//router.get("/", getAllStudents);
router.post("/", createTeacher);

router.route("/").get(getAllTeachers);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(getSingleTeacher)
  .patch(validateIdParam, validateStudentInput, updateTeacher)
  .delete(validateIdParam, deleteTeacher);

export default router;
