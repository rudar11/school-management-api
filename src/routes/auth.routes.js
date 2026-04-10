import express from 'express'
import { addSchool, listschool } from '../controllers/auth.controllers.js'
const router = express.Router()



/**
 * POST /api/addSchool
 */
router.post('/addSchool', addSchool)
/**
 * GET /api/listSchools
 */
router.get('/listSchools', listschool)




export default router