const locations = require('../data/locations.json')
const collection = 'locations'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(locations.map(async (location) => {
      await db.collection(collection).insert({
        ...location,
        _id: ObjectId(location._id),
        trip: ObjectId(location.trip),
        createdAt: Date(location.createdAt),
        updatedAt: Date(location.updatedAt)
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
