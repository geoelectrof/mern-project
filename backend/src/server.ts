import app from "./app"

import env from "./util/validateEnv"
import mongoose from "mongoose";


const port = env.PORT;
const mongoString = env.MONGO_CONNECTION_STRING;
// const mongoString = "mongodb+srv://dimitrisgeo:t4gTrGs9O36ZoON8@codinginflow.9wss7hb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoString)
    .then(() => {
        console.log("Mongoose connected")
    })
    .catch(console.error)

app.listen(port, () => {
    console.log("Server running on port: " + port)
});