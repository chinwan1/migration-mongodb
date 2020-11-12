const { connectDb, getDb } = require('./mongoose');
const project = require('./migrations/project');
const jobs = require('./migrations/jobs');
(async () => {
  const success = await connectDb();
  if(success.hasError) return false;
  const db = getDb();
try {
  await project.down(db)
  await jobs.down(db)
  
} finally{
  
  db.close()
}
})();
 