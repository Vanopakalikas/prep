
import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.createUser);
//router.delete('', userController.deleteUser);
router.post("/checkAuth", userController.checkAuth);
export default router;
