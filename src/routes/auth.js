import express from "express";
import AuthController from "../app/controllers/AuthControlller.js";

const router = express.Router();

// router.get("/create", AuthController.create);
router.get("/users", AuthController.getAllUser);
router.get("/sign-in", AuthController.signIn);
router.post("/store", AuthController.store);
router.patch("/:id", AuthController.update);
router.delete("/:id", AuthController.destroy);
// router.post("/handle-form-actions", AuthController.handleFormActions);
// router.get("/:id/edit", AuthController.edit);
// router.get("/:slug", AuthController.show);
// router.patch("/:id/restore", AuthController.restore);
// router.delete("/:id/force", AuthController.forceDestroy);
// router.delete("/:id", AuthController.destroy);
// router.put("/:id", AuthController.update);

export default router;
