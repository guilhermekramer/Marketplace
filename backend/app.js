import express from "express";
import userRoutes from "./src/routes/userRouter.js";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

export default app;
