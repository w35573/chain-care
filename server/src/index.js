import 'dotenv/config';
import app from './app';
import { initContract } from './config/contracts.config';

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    await initContract();
    console.log(`Server up on port ${PORT}!`);
});