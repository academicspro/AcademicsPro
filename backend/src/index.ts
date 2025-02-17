import express from "express";
import cors from "cors";


import schoolRoute from "./routes/superadmin/schoolRoute";
import superAdminRoute from "./routes/superadmin/superAdminRoute";
import signinRoute from "./routes/signin/signinRoute";
import forgotRoute from "./routes/forgot-password/forgotRoute";
import teacherRoutes from "./routes/admin/schoolauthroutes/teacherRoutes";
import studentRoutes from "./routes/admin/schoolauthroutes/studentRoutes";
import parentsRoutes from "./routes/admin/schoolauthroutes/parentsRoutes";
import accountRoutes from "./routes/admin/schoolauthroutes/accountRoutes";
import transportRoutes from "./routes/admin/schoolauthroutes/transportRoutes";
import hostelRoutes from "./routes/admin/schoolauthroutes/hostelRoutes";
import assignmentRoute from "./routes/dashboard/teacher/assignmentRoute";
import attendenceRoute from "./routes/dashboard/teacher/attendenceRoute";
import classRoute from "./routes/dashboard/teacher/classRoute";
import examRoute from "./routes/dashboard/teacher/examRoute";
import gradeRoute from "./routes/dashboard/teacher/gradeRoute";
import lessonRoute from "./routes/dashboard/teacher/lessonRoute";
import subjectRoute from "./routes/dashboard/teacher/subjectRoute";
import resultRoute from "./routes/dashboard/teacher/resultRoute";

import userRoutes from "./routes/superadmin/userRoutes";
import eventRoutes from "./routes/dashboard/admin/eventRoutes";
import annoumcmentRoutes from "./routes/dashboard/admin/annoumcmentRoutes";
import paymentSecreateRoute from "./routes/dashboard/admin/paymentSecreateRoute";

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Backend is live");
});

// Routes Started


// User Routes

app.use("/api/v1", userRoutes)

// Auth Routes
app.use("/api/v1", schoolRoute);
app.use("/api/v1", superAdminRoute);
app.use("/api/v1", signinRoute);
app.use("/api/v1", forgotRoute);


// School Auth Routes
app.use('/api/v1',teacherRoutes);
app.use('/api/v1',studentRoutes);
app.use('/api/v1',parentsRoutes);
app.use('/api/v1',accountRoutes);
app.use('/api/v1',transportRoutes);
app.use('/api/v1',hostelRoutes);


// Teacher Routes
app.use('/api/v1',assignmentRoute);
app.use('/api/v1',attendenceRoute);
app.use('/api/v1',classRoute);
app.use('/api/v1',examRoute);
app.use('/api/v1',gradeRoute);
app.use('/api/v1',lessonRoute);
app.use('/api/v1',resultRoute);
app.use('/api/v1',subjectRoute);


// Student Routes

// Parent Routes

// Hostel Routes

// Library Routes

// Transport Routes



// Admin Routes

app.use('/api/v1',eventRoutes);
app.use('/api/v1',annoumcmentRoutes);
app.use('/api/v1',paymentSecreateRoute);



// Super Admin Routes


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

