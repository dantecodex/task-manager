import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required field"],
        maxLength: [20, "Name cannot be greater than 20"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model("Task", taskSchema)

export default Task