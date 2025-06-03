import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/book-trends', async (req, res) => {
  const topic = req.query.topic || 'dog training';

  // Simulated scraped titles (real scraping can be added next)
  const mockTitles = [
    {
      title: `Mastering ${topic} in 7 Days`,
      monthlySearches: 4400,
      trendPercent: 62,
      price: 5.99,
      rank: 2111,
      keywords: [`${topic}`, 'guide', 'step by step', 'training', 'fast results', 'behavior', 'tips', 'secrets'],
      categories: ['Self Help > Training', 'Guides', 'Nonfiction > Practical']
    },
    {
      title: `${topic.charAt(0).toUpperCase() + topic.slice(1)} for Beginners`,
      monthlySearches: 3900,
      trendPercent: 55,
      price: 6.99,
      rank: 2650,
      keywords: ['intro', `${topic}`, 'basics', 'learn quickly', 'skills', 'coaching', 'foundation', 'tools'],
      categories: ['Education > General', 'Learning Skills', 'DIY & How-To']
    }
  ];

  res.json({ titles: mockTitles });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
