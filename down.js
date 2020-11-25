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
  await project.down(db)
  await jobs.down(db)
  // await trips.down(db)
  // await clocks.down(db);
  await tasks.down(db);
  await sites.down(db);
  // await locations.down(db);
  await user.down(db);
  
} finally{
  
  db.close()
}
})();
 