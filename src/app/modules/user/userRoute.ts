import express from "express";
import userController from "./userController";
const router = express();
router.post("/", userController.createUser);
router.get("/", userController.getUser);

export const useRouter = router;
