const sites = require('../data/sites.json')
const collection = 'sites'
const ObjectId = require('mongodb').ObjectID;
module.exports = {
  
  async up(db, client) {
    Promise.all(sites.map(async (site) => {
      const jobs = site.jobs.map((item) =>  { return ObjectId(item)})
      await db.collection(collection).insert({
        ...site,
        _id: ObjectId(site._id),
        jobs,
      })
     }))
  },

  async down(db, client) {
    await db.collection(collection).drop()
  }
};
