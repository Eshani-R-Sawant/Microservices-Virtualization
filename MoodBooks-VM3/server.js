const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/moodbooks')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('DB Connection Error:', err));

const bookSchema = new mongoose.Schema({
    mood: String, title: String, author: String
});
const Book = mongoose.model('Book', bookSchema);

app.get('/predict/:mood', async (req, res) => {
    const userMood = req.params.mood;
    const books = await Book.find({ mood: new RegExp(userMood, 'i') });
    if (books.length > 0) {
        const randomBook = books[Math.floor(Math.random() * books.length)];
        res.json(randomBook);
    } else {
        res.status(404).json({ message: "Mood not found" });
    }
});

app.listen(5000, () => console.log('Data Service (VM3) running on port 5000'));
