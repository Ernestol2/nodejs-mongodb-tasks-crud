import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  renderAbout,
  renderTaskTable,
  taskIndex,
  toggleDone,
} from "../controller/tasks.controller";

const router = Router();

router.get("/", taskIndex);

router.post("/tasks/add", createTask);

router.get("/about", renderAbout);

router.get("/edit/:id", renderTaskTable);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;
