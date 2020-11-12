const { connectDb, getDb } = require('./mongoose');
const project = require('./migrations/project');
const jobs = require('./migrations/jobs');
(async () => {
  const success = await connectDb();
  console.log(success)
  if(success.hasError) return false;
  const db = getDb();
  try {
    await project.up(db)
    await jobs.up(db)
    
  }  finally{
  
    db.close()
  }
})();
