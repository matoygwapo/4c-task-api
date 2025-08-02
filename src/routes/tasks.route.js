const express = require('express')
const router = express.Router()
const tasksController  = require('../controllers/tasks.controller')

router.post('/v1/tasks', tasksController.createTask);
router.get('/v1/tasks', tasksController.getAllTasks);
router.delete('/v1/tasks/:task_id', tasksController.deleteTask);


module.exports = router