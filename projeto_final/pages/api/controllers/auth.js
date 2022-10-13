import Users from "../../../src/models/Users"

export const register = async (req, res) => {
    try{
        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        await newUser.save()
        res.status(200).send("Usuário foi criado.")
    }catch(err){
        res.status(500).json(err)
    }
}