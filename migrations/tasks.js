
const tasks = require('../data/1tasks.json')
const collection = 'tasks'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(tasks.map(async (task) => {
      const jobs = task.jobs.map((item) =>  { return ObjectId(item)})
      await db.collection(collection).insert({
        ...task,
        _id: ObjectId(task._id),
        jobs,
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
