import Task from "../models/tasks_models.js"
import asyncErrorHandler from "../utils/asyncErrorHandler.js"
import customError from "../utils/customError.js"


const getAllTasks = asyncErrorHandler(async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json({
        status: "success",
        tasks
    })
})

const createTask = asyncErrorHandler(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncErrorHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task) {
        throw new customError(`No user avaliable with this ID: ${req.params.id}`, 404)
    }
    res.status(200).json({ task })
})

const updateTask = asyncErrorHandler(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!task) {
        throw new customError(`Failed to update Task: ${req.params.id}`, 400)
    }
    res.status(200).json({ task })
})

const deleteTask = asyncErrorHandler(async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.status(200).json({})
})


export { getAllTasks, createTask, getTask, updateTask, deleteTask }