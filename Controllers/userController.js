import user from "../Models/userSchema.js";

export const createUser = async (req, res) => {
    try {
        const newUser = await user.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllUser = async (req, res) =>{
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) =>{
    try {
        const deluser = await user.findByIdAndDelete(req.params.id);
        res.json(deluser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}