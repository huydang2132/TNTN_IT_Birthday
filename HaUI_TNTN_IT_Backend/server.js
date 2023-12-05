import express from 'express';
import colors from 'colors';
import cors from 'cors';
import connectDB from './src/config/db.js';
import posts from './src/routes/posts.js';
import register from './src/routes/register.js';
import members from './src/routes/members.js';
import accounts from './src/routes/accounts.js';

import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 6060;


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/posts', posts);
app.use('/api/register', register);
app.use('/api/members', members);
app.use('/api/accounts', accounts);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
})