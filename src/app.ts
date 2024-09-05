import cors from "cors";
import express, { Application, Request, Response } from "express";
import { useRouter } from "./app/modules/user/userRoute";
const app: Application = express();
app.use(cors());

//parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server site is running",
  });
});

app.use("/api/v1/user",useRouter);

export default app;