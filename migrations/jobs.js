const jobs = require('../data/jobs.json')
const collection = 'jobs'
const ObjectId = require('mongodb').ObjectID
module.exports = {
  async up(db, client) {
    Promise.all(jobs.map(async (job) => {
      const tripRecords = job.tripRecords.map((item) => {
        return ObjectId(item);
      })
      const owners = job.owners.map((item) => {
        return ObjectId(item)
      })
      await db.collection(collection).insert({
         ...job,
         owners,
         _id: ObjectId(job._id),
         tripRecords,
         project: ObjectId(job.project)
       })
    }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};

