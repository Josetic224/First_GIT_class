const express = require('express')
const {createStudent, getStudents, getStudent, updateStudent,deleteStudent } = require('../controllers/studentController')

const router = express.Router();

router.post('/create', createStudent)
router.get('/getall', getStudents)
router.get('/getone/:studentId', getStudent)
router.put('/update/:studentId', updateStudent)
router.delete('/delete/:studentId', deleteStudent)


module.exports = router;
