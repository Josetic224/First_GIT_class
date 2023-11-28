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
        data:students
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
        message: `student with studentId ${studentId} gotten successfully.`,
        data:student
    })
}

// Update a student
exports.updateStudent = async (req, res) => {
    try {
      // track the user id
      const studentId = req.params.studentId;
      // track student with the id gotten
      const student = await studentModel.findById(studentId);
      // check for error
      if (!student) {
        res.status(404).json({
          message: `Student with id: ${studentId} is not found.`,
        });
        return; // Missing return statement added
      }
  
      // check for entity and replace with existing data
      const scores = req.body.score;
  
      const prevScores = {
        html: student.score.html,
        javascript: student.score.javascript,
        css: student.score.css,
        node: student.score.node,
      };
  
      const studentData = {
        name: req.body.name || student.name,
        stack: req.body.stack || student.stack,
        score: {
          html: scores.html || prevScores.html,
          javascript: scores.javascript || prevScores.javascript,
          css: scores.css || prevScores.css,
          node: scores.node || prevScores.node,
        },
      };
  
      // update the student
      const updateStudent = await studentModel.findByIdAndUpdate(studentId, studentData, {new: true});
      res.status(200).json({
        message: `Student with id: ${studentId} has been updated successfully.`,
        data: updateStudent,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

  exports.deleteStudent = async (req, res) =>{
    studentId = req.params.studentId
    student = await studentModel.findByIdAndDelete(studentId)
    if(!student){
        res.status(401).json({
            status:"failed",
            message:`student with id: ${studentId} could not be deleted`
        })
    }
    res.status(200).json({
        status:"success",
        message:`student with id: ${studentId} has been deleted!`,
        data:student
    })
  }