import bcrypt from "bcrypt"
import User from "../../models/User"

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        try {
            if (!req.body.username || !req.body.password) {
                return res.status(400).json('Username or password should not be empty')
            }
            const user = await User.findOne(
                { username: req.body.username }
            );
            !user && res.status(401).json("User not found");

            const isMatch = await bcrypt.compare(req.body.password, user.password)

            if (!isMatch) {
                res.status(400).json('Wrong password')
            }

            const { password, ...others } = user._doc;
            res.status(200).json({ ...others });

        } catch (err) {
            // res.status(500).json(err);
            console.log(err);
        }
    }
};

export default handler;