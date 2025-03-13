import * as express from "express";
import * as userController from "../controllers/userController.js";
import * as authController from "../controllers/authController.js";
import * as orderController from "../controllers/orderController.js";
import * as productController from "../controllers/productController.js";
import { swaggerDocs, swaggerUi } from '../config/swagger.js';

import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

router.post("/login", authController.loginUserController);
router.get("/verify", authController.verifyToken);

router.get("/user", authMiddleware, userController.getAllUsersController);
router.post("/user/register", authMiddleware, userController.createUserController);
router.get("/user/:id", authMiddleware, userController.getUserByIdController);
router.put("/user/update/:id", authMiddleware, userController.updateUserController);
router.delete("/user/delete/:id", authMiddleware, userController.deleteUserController);

router.get("/order", authMiddleware, orderController.getAllOrdersController);
router.post("/order/create", authMiddleware, orderController.createOrderController);
router.get("/order/:id", authMiddleware, orderController.getOrderByIdController);
router.put("/order/update/:id", authMiddleware, orderController.updateOrderController);
router.delete("/order/delete/:id", authMiddleware, orderController.deleteOrderController);

router.get("/product", authMiddleware, productController.getAllProductsController);
router.post("/product/create", authMiddleware, productController.createProductController);
router.get("/product/:id", authMiddleware, productController.getProductByIdController);
router.put("/product/update/:id", authMiddleware, productController.updateProductController);
router.delete("/product/delete/:id", authMiddleware, productController.deleteProductController);

export default router;
