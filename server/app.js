import express from 'express'
import { startDatabase } from './dbConnect.js'
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';


const app = express()
const port = 3000

startDatabase()


app.use(express.json());
app.use(cookieParser())

app.use('/users',/* authMiddleware,*/ userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('req: Hallo world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
