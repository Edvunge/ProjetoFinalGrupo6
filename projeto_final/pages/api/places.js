import { connect } from "./database"
import Places from "../../src/models/Places"

export default async function (req, res) {
    if (req.method === "GET") {
        await connect()
        const rooms = await getLandingPageRooms()
    }

    //Create a new Place
    if (req.method === "POST") {
        await connect()
        if (req.body) {
            console.log("SAVING")
            req.body.forEach(async place => {
                console.log("SAVING PLACE")
                const newPlace = new Places(place)
                newPlace.save()
            })
            // const newPlace = new Places(req.body)
            // await newPlace.save()
            // console.log("SAVED")
            res.status(200)
        } else {
            res.status(500).json("Não foi possível realizar a operação!")
        }

    }

    //Update a Place
    if (req.method === "PUT") {
        await connect()
        if (req.body && req.params.id) {
            const updatedPlace = await Places.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedPlace)
        } else {
            res.status(500).json("Não foi possível realizar a operação!")
        }
    }

    //UPDATE
    if (req.method === "PUT") {
        await connect()

        try {
            const updatedPlaces = await Places.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedPlaces);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    //DELETE
    if (req.method === "DELETE") {
        await connect()

        try {
            await Places.findByIdAndDelete(req.params.id)
            res.status(200).json("Places has been deleted.");
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // GET
    if (req.method === "GET") {
        await connect()

        try {
            const Places = await Places.findById(req.params.id);
            res.status(200).json(places);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // GET ALL
    if (req.method === "GET") {
        await connect()

        try {
            const Places = await Places.find(req.params.id);
            res.status(200).json(places);
        } catch (err) {
            res.status(500).json(err);
        }
    }
} 