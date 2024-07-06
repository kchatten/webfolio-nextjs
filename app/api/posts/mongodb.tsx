// Example MongoDB connection logic
import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(
    process.env.MONGO_URI !== undefined ? process.env.MONGO_URI : '',
  );

  try {
    await client.connect();
    cachedClient = client;
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}