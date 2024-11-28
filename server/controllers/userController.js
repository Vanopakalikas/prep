import { User } from '../schemas/userSchema.js'
import { genToken } from '../utils/gen.js'

const userController = {
    createUser : async (req, res, next) => {
        const { name, email, password } = req.body;
        console.log("req.body", req.body)
        try {
            const user = new User({ name, email, password });
            console.log("user", user)
            const savedUser = await user.save();
            console.log("savedUser")
            const token = genToken({ name: name, email: email });
            // Respond with the user data and token
            res.cookie('token', token).status(201).json({ 
                user: savedUser,
                token 
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
            next()
        }
    },
    deleteUser : async (req, res, next) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    checkAuth : async (req, res, next) => {
        console.log(req.cookies, req.body)
        try {
            const token = req.cookies.token;
            if (!token) { 
                return res.send (false);
            }
            res.json({auth:true});
    }   catch (error) {
            res.send (true);
            next()
        }
    }
}

export default userController