import express from "express";

import  schoolRoute  from "./routes/superadmin/schoolRoute";
import superAdminRoute from "./routes/superadmin/superAdminRoute";
import signinRoute from "./routes/signin/signinRoute";
import forgotRoute from "./routes/forgot-password/forgotRoute";


const app = express();

app.use(express.json());

// Routes Started

app.use("/api/v1",schoolRoute)

// Auth Routes
app.use("/api/v1", superAdminRoute);
app.use('/api/v1',signinRoute);
app.use('/api/v1', forgotRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
