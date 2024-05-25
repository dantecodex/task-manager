import express from "express";
import taskRoutes from "./routes/task_routes.js";
const app = express()
app.use(express.json({ limit: '10kb' }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/tasks', taskRoutes)

export default app