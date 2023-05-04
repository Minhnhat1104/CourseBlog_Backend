import express from "express";
import courseController from "../app/controllers/CourseControlller.js";

const router = express.Router();

// router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.post("/handle-form-actions", courseController.handleFormActions);
router.get("/:id/edit", courseController.edit);
router.get("/:slug", courseController.show);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id/force", courseController.forceDestroy);
router.delete("/:id", courseController.destroy);
router.put("/:id", courseController.update);

export default router;
