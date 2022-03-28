// Sending the Contact form data
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const msgData = req.body;

        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ksi09.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        );
        const db = client.db();
        const formMsgsCollection = db.collection('formMessagesCollection');
        const result = await formMsgsCollection.insertOne(msgData);

        client.close();        

        res.status(201).json({ message: 'Data inserted' });
    }
}
