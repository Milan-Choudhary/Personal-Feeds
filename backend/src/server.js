import app from './app.js';
import { connectDB } from './config/db.js';
import { PORT } from './config/env.js';

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Server failed to start', err);
  process.exit(1);
});
