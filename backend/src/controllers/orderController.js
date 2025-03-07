import * as orderService from '../service/orderService/orderService.js';

export const createOrderController = async (req, res) => {
    try {
        const order = req.body;
        const newOrder = await orderService.createOrder(order);
        res.status(201).json(newOrder);
    } catch (error) {
        console.log("Error in createOrderController function", error);
        res.status(500).send(error);
    }
}

export const deleteOrderController = async (req, res) => {
    try {
        const id = req.params.id;
        await orderService.deleteOrder(id);
        res.status(204).send();
    } catch (error) {
        console.log("Error in deleteOrderController function", error);
        res.status(500).send(error);
    }
}

export const getAllOrdersController = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error in getAllOrdersController function", error);
        res.status(500).send(error);
    }
}

export const getOrderByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await orderService.getOrderById(id);
        res.status(200).json(order);
    } catch (error) {
        console.log("Error in getOrderByIdController function", error);
        res.status(500).send(error);
    }
}


export const updateOrderController = async (req, res) => {
    try {
        const id = req.params.id;
        const order = req.body;
        const updatedOrder = await orderService.updateOrder(id, order);
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.log("Error in updateOrderController function", error);
        res.status(500).send(error);
    }
}