const { connectDb, getDb } = require('./mongoose');
const project = require('./migrations/project');
const jobs = require('./migrations/jobs');
const trips = require('./migrations/trips');
const locations = require('./migrations/locations');
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
  await trips.down(db)
  await locations.down(db);
  
} finally{
  
  db.close()
}
})();
 