import { User } from '../schemas/userSchema.js'
import { genToken } from '../utils/gen.js'

const userController = {
    createUser : async (req, res, next) => {
        const { name, email, password } = req.body;

        try {
            const user = new User({ name, email, password });
            await user.save();
            const token = genToken(user._id);
            res.cookie('token', token).status(201).json({
                user
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
    }
}
export default userController