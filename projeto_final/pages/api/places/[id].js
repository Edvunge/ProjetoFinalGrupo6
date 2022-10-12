import { connect } from "../database"
import Places from "../../../src/models/Places"

export default async function (req, res) {
  
    //UPDATE
    if (req.method === "PUT") {
        await connect()
       /* if (req.body) {
           
            const newPlace = new Places(req.body)
            await newPlace.save()
            res.status(200).json(newPlace)   
        }*/
        try {
            const updatedPlaces = await Places.findByIdAndUpdate(req.query.id, {$set: req.body})
            res.status(200).json(updatedPlaces);
        } catch (err){
            res.status(500).json(err);
        }
    }
} 