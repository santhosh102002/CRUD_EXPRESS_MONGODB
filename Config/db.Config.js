const mongoose = require('mongoose');

const connectToDB = async () =>{
   mongoose.connect(process.env.MONGO_URL)
   .then((conn)=>{
    console.log(`Connected To DB: ${conn.connection.host}`)
   })
   .catch((err)=>{
    console.log(`Error Occured: ${err.message}`)
    process.exit(1)
   })
}

module.exports = connectToDB;
