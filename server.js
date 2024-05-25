import mongoose from "mongoose";
import 'dotenv/config';
import app from "./app.js";

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB connection successful');
}).catch((err) => {
    console.error(`Failed to connect with DB, ${err.message}`);
})

app.listen(process.env.PORT || 5006, () => {
    console.log('Server has been started');
})