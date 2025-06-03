import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/book-trends', async (req, res) => {
  const topic = req.query.topic || 'general';

  const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

  // Simulate always returning mock data no matter the topic
  const mockTitles = [
    {
      title: `Mastering ${capitalizedTopic} in 7 Days`,
      monthlySearches: Math.floor(Math.random() * 5000) + 1000,
      trendPercent: Math.floor(Math.random() * 50) + 50,
      price: 5.99,
      rank: Math.floor(Math.random() * 4000) + 1000,
      keywords: [topic, 'guide', 'step by step', 'training', 'fast results', 'behavior', 'tips', 'secrets'],
      categories: ['Self Help > Training', 'Guides', 'Nonfiction > Practical']
    },
    {
      title: `${capitalizedTopic} for Beginners`,
      monthlySearches: Math.floor(Math.random() * 4000) + 800,
      trendPercent: Math.floor(Math.random() * 40) + 50,
      price: 6.99,
      rank: Math.floor(Math.random() * 3000) + 1000,
      keywords: ['intro', topic, 'basics', 'learn quickly', 'skills', 'coaching', 'foundation', 'tools'],
      categories: ['Education > General', 'Learning Skills', 'DIY & How-To']
    }
  ];

  res.json({ titles: mockTitles });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
