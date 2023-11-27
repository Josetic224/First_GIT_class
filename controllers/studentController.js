const studentModel = require('../models/studentModel')

exports.createStudent = async (req, res)=>{
    try {
        const student = await studentModel.create(req.body)
        
       if(!student){
        res.status(400).json({
            status:"failed",
            message: "student could not be created!"
        })
       }

       res.status(200).json({
        status:"success",
        message:"congratulations student has been created ",
        data:student
       })
    } catch (error) {
      res.status(500).json({
        message:error.message
      })  
    }
} 

exports.getStudents = async (req, res) =>{
    const students = await studentModel.find()
    if(!students){
        res.status(400).json({
           status:"failed",
           message:"sorry , could not get all students"

        })
    }
    res.status(200).json({
        status:"success",
        message:"students has been found",
        data:students,
})
}

// get a student
exports.getStudent = async (req, res) =>{
    const studentId = req.params.studentId
    const student = await studentModel.findById(studentId)

    if(!student){
        res.status(400).json({
          status:"failed",
          message:`could not get student with ${studentId}`
        })
    }
    res.status(200).json({
        status:"success",
        message: `student with studentId ${studentId} gotten successfully.`
    })
}

//update a student

exports.updateStudent = async (req, res) =>{
    try {
        
    
    const studentId = req.params.studentId
    const student = await studentModel.findById(studentId)
    
    const studentData ={
        name: req.body.name || student.name,
        stack:req.body.stack || student.stack,
        score:{
            html:req.body.html || student.score.html,
            css:req.body.css || student.score.css,javaScript:req.body.javascript ||student.score.javascript,
            node:req.body.node || student.score.node,
           

        },
        
    }
} catch (error) {
    res.status(500).json({
         message:error.message
    })
       
    }
    const updateStudent  = await studentModel.findByIdAndDelete(student, studentData)

    if(!updateStudent){
        res.status(400).json({
            status:"failed",
            message:"could not update student"
        })

        res.status(200).json({
            status:"success",
            message:"student updated successfully",
            data:updateStudent
        })
    }

}