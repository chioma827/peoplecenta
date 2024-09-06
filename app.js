// / Import required modules
const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

// Set up the port
const PORT = 3000;

// Set up the URL to scrape
const peoplecentaUrl = '(link unavailable)';

// Set up the routes
app.get('/', async (req, res) => {
  try {
    // Make a GET request to the PeopleCenta website
    const response = await axios.get(peoplecentaUrl);

    // Load the HTML into Cheerio
    const $ = cheerio.load(response.data);

    // Scrape the data you want
    const data = [];
$('article').each((index, element) => {
      const title = $(element).find('h2').text();
      const link = $(element).find('a').attr('href');
      data.push({ title, link });
    });

    // Send the scraped data back to the client
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error scraping data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
