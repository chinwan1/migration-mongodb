const trips = require('../data/trips.json')
const collection = 'trips'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(trips.map(async (trip) => {
      const locations = trip.locations.map((item) => {
        return ObjectId(item);
      })
      await db.collection(collection).insert({
        ...trip,
        _id: ObjectId(trip._id),
        job: ObjectId(trip.job),
        locations,
        dateTimeIn: new Date(trip.dateTimeIn),
        createdAt: new Date(trip.createdAt),
        updatedAt: new Date(trip.updatedAt),
        dateTimeOut: new Date(trip.dateTimeOut),
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
