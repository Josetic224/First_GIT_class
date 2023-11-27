const express = require('express')
const {createStudent, getStudents, getStudent, updateStudent, } = require('../controllers/studentController')

const router = express.Router();

router.post('/create', createStudent)
router.get('/getall', getStudents)
router.get('/getone', getStudent)
router.put('/update', updateStudent)


module.exports = router;
