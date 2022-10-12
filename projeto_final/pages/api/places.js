import { connect } from "./database"
import Places from "../../src/models/Places"

export default async function (req, res) {
    if (req.method === "GET") {
        await connect()
        res.send("hello frist request!")
    }


    //Create a new Place
    if (req.method === "POST") {
        await connect()
        if (req.body) {
            const newPlace = new Places(req.body)
            console.log("SAVING")   
            await newPlace.save()
            console.log("SAVED")
            res.status(200).json(newPlace)
        } else {
            res.status(500).json("Não foi possível realizar a operação!")
        }

    }

    //Update a Place
    if (req.method === "PUT") {
        await connect()
        if(req.body && req.params.id) {
            const updatedPlace = await Places.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})   
            res.status(200).json(updatedPlace)
        } else {
            res.status(500).json("Não foi possível realizar a operação!")
        }

    }
} 