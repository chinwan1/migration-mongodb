const { connectDb, getDb } = require('./mongoose');
const project = require('./migrations/project');
const jobs = require('./migrations/jobs');
const trips = require('./migrations/trips');
const clocks = require('./migrations/clocks');
const tasks = require('./migrations/tasks');
const sites = require('./migrations/sites');
const locations = require('./migrations/locations');
const user = require('./migrations/user');
(async () => {
  const success = await connectDb();
  if(success.hasError) {
    console.log(success.meesage)
    return
  }
  const db = getDb();
  try {
    await project.up(db)
    await jobs.up(db)
    // await trips.up(db);
    // await clocks.up(db);
    await tasks.up(db);
    await sites.up(db);
    // await locations.up(db);
    await user.up(db);
  }  finally{
  
    db.close()
  }
})();
