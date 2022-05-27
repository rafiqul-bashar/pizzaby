import bcrypt from "bcrypt"
import User from "../../models/User"

const handler = async (req, res) => {
    if (req.method === "POST") {
        const salt = await bcrypt.genSalt(10)
        const newUser = {
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, salt)
        }

        try {
            // console.log(newUser);
            const savedUser = await User.create(newUser);
            res.status(201).json(savedUser);
        } catch (err) {
            console.log(err);
            // res.status(500).json(err);
        }
    }

};

export default handler;