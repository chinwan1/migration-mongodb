const users = require('../data/user.json')
const collection = 'users'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(users.map(async (user) => {
      const jobs = user.jobs.map((job) => {
        return ObjectId(job);
      })
      await db.collection(collection).insert({
        ...user,
        jobs: jobs,
        _id: ObjectId(user._id),
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
