require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller/studentsCtrl')
const app = express();

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
    app.set("db", db)
    console.log('connected to db')
}).catch(err => console.log(err))

app.get('/api/students', ctrl.getAllStudents);
app.post('/api/student', ctrl.addStudent);
app.put('/api/student/:id', ctrl.editStudentName);
app.delete('/api/student/:id', ctrl.deleteStudent);

app.listen(SERVER_PORT, () => console.log(`Server coming at ya from port ${SERVER_PORT}`))