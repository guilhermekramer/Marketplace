import * as express from "express";
import * as userController from "../controllers/userController.js";
import * as orderController from "../controllers/orderController.js";
import * as productController from "../controllers/productController.js";
import { swaggerDocs, swaggerUi } from '../config/swagger.js';

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Return all users
 */
router.get("/user", userController.getAllUsersController);
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 */
router.post("/user/register", userController.createUserController);
/**
 * @swagger
 * /auth:
 *   post:
 *     summary: login
 */
router.post("/login", userController.loginUserController);
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Return a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/user/:id", userController.getUserByIdController);
/**
 * @swagger
 * /user/update/{id}:
 *   put:
 *     summary: Update a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put("/user/update/:id", userController.updateUserController);
/**
 * @swagger
 * /user/delete/{id}:
 *   delete:
 *     summary: Delete a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete("/user/delete/:id", userController.deleteUserController);

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Return all orders
 */
router.get("/order", orderController.getAllOrdersController);
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 */
router.post("/order/create", orderController.createOrderController);
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Return an order by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/order/:id", orderController.getOrderByIdController);
/**
 * @swagger
 * /order/update/{id}:
 *   put:
 *     summary: Update an order by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put("/order/update/:id", orderController.updateOrderController);
/**
 * @swagger
 * /order/delete/{id}:
 *   delete:
 *     summary: Delete an order by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete("/order/delete/:id", orderController.deleteOrderController);

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Return all products
 */
router.get("/product", productController.getAllProductsController);
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 */
router.post("/product/create", productController.createProductController);
/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Return a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/product/:id", productController.getProductByIdController);
/**
 * @swagger
 * /product/update/{id}:
 *   put:
 *     summary: Update a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put("/product/update/:id", productController.updateProductController);
/**
 * @swagger
 * /product/delete/{id}:
 *   delete:
 *     summary: Delete a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete("/product/delete/:id", productController.deleteProductController);

export default router;