const MongoClient = require('mongodb').MongoClient;
let conn = null;
const  mongodb = {
  url: "mongodb://localhost:30001",
  databaseName: "54group",

};


module.exports = {
   connectDb: async () => {
    return await MongoClient.connect(`${mongodb.url}/${mongodb.databaseName}`).then((db) => {
        conn = db;
        return { hasError: false,};
      }).catch((err) => {
        return { hasError: true, meesage: err.meesage};
      })
   },
   getDb: () => {
      return conn
   }
};