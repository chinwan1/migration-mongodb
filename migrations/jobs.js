const jobs = require('../data/jobs.json')
const collection = 'jobs'
const ObjectId = require('mongodb').ObjectID
module.exports = {
  async up(db, client) {
   Promise.all(jobs.map(async (job) => {
     await db.collection(collection).insert({
       ...job,
       _id: ObjectId(job._id),
       project: ObjectId(job.project)
     })
    }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};

