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
        locations,
        dateTimeIn: new Date(trip.dateTimeIn),
        createdAt: new Date(project.createdAt),
        updatedAt: new Date(project.updatedAt),
        dateTimeOut: new Date(project.dateTimeOut),
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
