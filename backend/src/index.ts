import express from "express";
import cors from "cors";
// import chalk from "chalk";
// import morgan from "morgan"; 
// import { Response,Request } from "express";

import schoolRoute from "./routes/superadmin/schoolRoute";
import superAdminRoute from "./routes/superadmin/superAdminRoute";
import signinRoute from "./routes/signin/signinRoute";
import forgotRoute from "./routes/forgot-password/forgotRoute";

const app = express();

app.use(cors());
app.use(express.json());

// app.use(
//   morgan((tokens, req: Request, res: Response) => {
//     return chalk.greenBright.bold(`[💻] ${tokens.method(req, res)}`) +
//       chalk.cyan(` ${tokens.url(req, res)}`) +
//       chalk.yellowBright(` ${tokens.status(req, res)}`) +
//       chalk.magentaBright(` ${tokens['response-time'](req, res)}ms`) +
//       chalk.red(` [IP: ${req.ip}]`);
//   })
// );

app.get("/", (req, res) => {
  res.send("Backend is live");
});

// Routes Started

app.use("/api/v1", schoolRoute);

// Auth Routes
app.use("/api/v1", superAdminRoute);
app.use("/api/v1", signinRoute);
app.use("/api/v1", forgotRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

