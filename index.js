import express from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import privateRoutes from './routes/private.js';
import authRoutes from './routes/auth.js';
import navbar from './routes/navbar.js';
import remotes from './routes/remotes.js';


const app = express();
const PORT = 5000;

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/navbar', navbar);
app.use('/api/remotes', remotes);
app.use('/api/private', privateRoutes);

app.listen(PORT, () => {
  console.log("App is running at port "+ PORT);
})
