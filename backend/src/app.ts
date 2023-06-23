import "dotenv/config";
import express from "express";
import NoteModel from "./models/note"

const app = express();

app.get("/", async (req, res) => {
//   res.send("Hello World!!");
    const notes = await NoteModel.find().exec()
    res.status(200).json(notes)
});

export default app