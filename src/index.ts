import { app } from './app';
import 'dotenv/config';

// initialize port
const port = process.env.PORT || 3000;

// run express server
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
