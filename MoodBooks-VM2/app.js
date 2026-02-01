const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/get-book', async (req, res) => {
    const mood = req.query.mood;
    try {
        const response = await axios.get(`http://192.168.59.30:5000/predict/${mood}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error contacting VM3" });
    }
});

app.listen(4000, () => console.log('Mood Service (VM2) running on port 4000'));
