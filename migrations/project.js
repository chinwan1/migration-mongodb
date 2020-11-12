const projects = require('../data/projects.json')
const collection = 'projects'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(projects.map(async (project) => {
      const jobs = project.jobs.map((item) =>  { return ObjectId(item)})
      const managers = project.managers.map((item) => { return ObjectId(item)})
      await db.collection(collection).insert({
        ...project,
        jobs,
        managers,
        _id: ObjectId(project._id),
        createdAt: new Date(project.createdAt),
        updatedAt: new Date(project.updatedAt),
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
