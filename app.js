import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import taskRoutes from "./routes/task_routes.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";


const app = express()
app.set('trust proxy', 2)
app.get('/ip', (request, response) => response.send(request.ip))


// app.use(helmet()) // Content Security problem from inline script

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                "script-src": ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"],
            },
        },
    })
);

const limiter = rateLimit({
    limit: 1000,
    windowMs: 60 * 60 * 1000
})
app.use(limiter)

app.use(express.json({ limit: '10kb' }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/tasks', taskRoutes)
app.use('*', (req, res) => {
    res.status(400).send("Invalid URL")
})

app.use(globalErrorHandler)
export default app