const clocks  = require('../data/clocks.json')
const collection = 'clocks'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(clocks.map(async (clock) => {
      await db.collection(collection).insert({
        ...clock,
        _id: ObjectId(clock._id),
        dateTimeIn: Date(clock.dateTimeIn),
        dateTimeOut: Date(clock.dateTimeOut),
        createdAt: Date(clock.createdAt),
        updatedAt: Date(clock.updatedAt),
        job: ObjectId(clock.job)
      })
     }))
  },
  async down(db, client) {
    await db.collection(collection).drop()
  }
};