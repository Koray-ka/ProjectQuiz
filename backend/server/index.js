const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Score = require('./models/Score');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/quiz/results', async (req, res) => {
  const { score } = req.body;
  try {
    const newScore = new Score({ score });
    await newScore.save();
    res.status(201).json({ message: 'Score saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save score' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
