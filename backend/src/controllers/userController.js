import * as userService from '../service/userService/userService.js';
import bcrypt from 'bcryptjs';

export const createUserController = async (req, res) => {
    try {
        const user = req.body;
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;
        const newUser = await userService.createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error in createUserController function", error);
        res.status(500).send(error);
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const id = req.params.id;
        await userService.deleteUser(id);
        res.status(204).send();
    } catch (error) {
        console.log("Error in deleteUserController function", error);
        res.status(500).send(error);
    }
}

export const getAllUsersController = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getAllUsersController function", error);
        res.status(500).send(error);
    }
}

export const getUserByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUserByIdController function", error);
        res.status(500).send(error);
    }
}


export const updateUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;
        const updatedUser = await userService.updateUser(id, user);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log("Error in updateUserController function", error);
        res.status(500).send(error);
    }
}


