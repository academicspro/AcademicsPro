import express from "express";

import  schoolRoute  from "./routes/superadmin/schoolRoute";
import superAdminRoute from "./routes/superadmin/superAdminRoute";


const app = express();

app.use(express.json());

// Routes Started

// app.use("/api/v1", registerSuperAdmin);
app.use("/api/v1",schoolRoute)

// Auth Routes
app.use("/api/v1", superAdminRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
