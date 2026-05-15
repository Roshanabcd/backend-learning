// import router from "express.Router";
import express from "express";
import userController from "../controllers/userController.js";

const router=express.Router();
router.post("/",userController.createUser);
router.get("/",userController.getUsers);
router.get("/:id",userController.getUserById);
router.put("/:id",userController.userUpdate);
router.delete("/:id",userController.deleteUser);

export default router;