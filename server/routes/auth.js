import express from 'express'
import { login, verifyUserAuth } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', login)

router.post('/verify', authMiddleware, verifyUserAuth)

export default router;