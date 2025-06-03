const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/book-trends', (req, res) => {
  res.json({
    titles: [
      {
        title: "How to Train Any Dog in 7 Days",
        keywords: ["dog training", "obedience", "puppy guide", "behavior fix", "positive reinforcement", "canine habits", "pet commands", "new puppy"],
        categories: ["Pets & Animals > Dogs", "Training > Obedience", "Animal Behavior", "Home Training"],
        monthlySearches: 4800,
        trendPercent: 42,
        price: 5.99,
        rank: 2523
      },
      {
        title: "Dear Human, I Forgive You",
        keywords: ["empathy for pets", "dog's point of view", "healing letters", "pet grief", "canine loyalty", "animal soul", "dog wisdom", "heartwarming dog story"],
        categories: ["Memoirs > Pets", "Animals & Nature > Emotions", "Companion Animals", "Pet Loss & Grief"],
        monthlySearches: 3200,
        trendPercent: 68,
        price: 7.99,
        rank: 1821
      },
      {
        title: "The Ultimate Dog Dictionary",
        keywords: ["dog language", "understanding barks", "training cues", "puppy glossary", "canine communication", "pet translation", "dog body language", "signals and sounds"],
        categories: ["Pets > Reference", "Training & Commands", "Nonfiction > Animals", "Communication"],
        monthlySearches: 2700,
        trendPercent: 51,
        price: 6.99,
        rank: 3022
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`✅ Mock server running on port ${PORT}`);
});