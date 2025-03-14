import express from "express";
import routes from "./src/routes/routes.js";
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
const port = 8080
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;
