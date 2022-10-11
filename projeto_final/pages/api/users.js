import { connect } from "./database"
import Places from "./models/Places"

export default function (req, res) {
    if (req.method === "GET") {
        connect()
        res.send("hello frist request!")
    }

} 