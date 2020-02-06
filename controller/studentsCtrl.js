module.exports = {
    getAllStudents: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_students().then(students => {
            res.status(200).send(students);
            console.log(students)
        })
    },
    addStudent: (req, res, next) => {
        const db = req.app.get('db');
        const { name, cohort, campus_id } = req.body
        db.add_student([name, cohort, campus_id]).then(students => {
            res.status(200).send(students);
        })
    },
    editStudentName: (req, res, next) => {
        const db = req.app.get('db');
        db.update_student([req.body.name, req.params.id]).then(students => {
            res.status(200).send(students)
        })
    },
    deleteStudent: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_student(id).then(students => {
            res.status(200).send(students)
        })
    }
};