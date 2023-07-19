import http from 'http';
import app from './config/app.mjs';
import { connectDB } from "./db.js";

const server = http.Server(app);
server.listen(4000, () => {
    return true;
})
connectDB();
app.listen(4000)
console.log('Servidor en puerto', 4000);