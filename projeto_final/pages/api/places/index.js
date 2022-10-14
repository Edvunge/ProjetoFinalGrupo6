import { connect } from "../database"
import Places from "../../../src/models/Places"
import error from "../../../src/components/backend/utils/error"

export default async function (req, res) {
    /* if (req.method === "GET") {
         await connect()
         const rooms = await getLandingPageRooms()
     }*/

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
    /*if (req.method === "PUT") {
        await connect()
        
        if (req.body && req.params.id) {
            const updatedPlace = await Places.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedPlace)
        } else {
            res.status(500).json("Não foi possível realizar a operação!")
        }
    }*/

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

    // GET ALL
    if (req.method === "GET") {
        await connect()

        try {
            const places = await Places.find();
            const placesWithWorkstations = places.map(place => {
                const nPlace = place.toObject()
                //Obter as salas deste sitio
                // Obter a quantidade de workstations de cada sala
                // Fazer um somatório das workstations
                //adicionar o somatório ao place
                const X = 13
                return ({ ...nPlace, workStations: X })
            })
            const withoutFeatured = placesWithWorkstations.filter(p => p.featured !== true)
            // const defaultAndLoved = getLovedPlaces(placesWithWorkstations)
            // getRating(place)
            // getAverage(place)

            console.log(placesWithWorkstations)
            res.status(200).json({
                featured: placesWithWorkstations.filter(p => p.featured === true).slice(0, 2),
                loved: withoutFeatured.slice(0, 3),
                default: withoutFeatured.slice(3),
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
} 