import express from 'express'
import { startDatabase } from './dbConnect.js'
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()
const port = 3000

const corsOptions = {
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true,              // Allow cookies
};

startDatabase()

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())


app.use('/users',/* authMiddleware,*/ userRoutes);

app.post('/login', (req, res) => {
  console.log(req.body)
  res.status(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
