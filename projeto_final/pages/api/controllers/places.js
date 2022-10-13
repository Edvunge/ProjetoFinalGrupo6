import Places from "../../../src/models/Places"

export const createPlace = async (req,res,next)=>{
    const newPlace = new Places(req.body);

    try {
        const savedPlaces = await new Places.save();
        res.status(200).json(savedPlaces);
    } catch (err) {
        res.status(500).json(err);
    }
}