import { connect } from "./database"
import Places from "../../src/models/Places"

export default async function (req, res) {
    if (req.method === "GET") {
        connect()
        res.send("hello frist request!")
    }

    if (req.method === "POST") {
        await connect()
        if (req.body) {
            const newPlace = new Places(req.body)
            console.log("SAVING")   
            await newPlace.save()
            console.log("SAVED")
            res.status(200).json(newPlace)
        }

    }
} 