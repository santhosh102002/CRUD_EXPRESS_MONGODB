
const app = require('./app.js')

const connectToDB = require('./Config/db.Config.js')

PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
})