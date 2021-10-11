const Task = require('..models/Task')

//list all

const index =(req, res, next) =>{
    Task.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'

        })
    })
}


//Show one descript...
const show =(req, res, next) =>{
    let TaskName = req.body.TaskName
    Task.findById(task)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

// Add new task
const store =(req, res, next) => {
    let task =new task({
        description: req.body.description,
        completed:req.body.completed
    })
    task.save()
    .then(response =>{
        res.json({
            message: 'Task Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

//Update Task
const update =(req, res, next) =>{
    let TaskName = req.body.TaskName

    let updatedData={
        description: req.body.description,
        completed: req.body.completed
    }

    Task.findByIdAndUpdate(TaskName, {$set :updatedData})
    .then(()=>{
        res.json({
            message: 'Task updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}


//Delete Task

const destroy =(req, res, next) =>{
    let TaskName = req.body.TaskName
    Task.findByIdAndRemove(TaskName)
    .then(()=>{
        res.json({
            message: 'Task deleted successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}

module.exports ={
    index ,show ,store,update,destroy
}