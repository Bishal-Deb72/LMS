import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoutes from './Routes/user.routes.js';
import courseRoutes from "./Routes/course.routes.js";
// import paymentRoutes from "./routes/payment.routes.js";
import { config } from "dotenv"; // configuration of environment variables (.env) file
import errorMiddleware from "./middlewares/error.middleware.js";
import paymentRoutes from "./Routes/payment.route.js"

config();

const app = express();

app.use(json()); 

app.use(
    cors({
      origin: [process.env.FRONTED_URI],  
      credentials: true, 
    })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/ping", (req, res) => {
    res.send("pong");
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments',paymentRoutes)

app.use(errorMiddleware); 

app.use("*", (req, res) => {
  res.status(404).send("OOPS!! 404 page not found");
});


export default app;
