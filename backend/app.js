import express from "express";
import routes from "./src/routes/routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
const port = 3000
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;
