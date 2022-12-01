import puppeteer from 'puppeteer';
import { getPerksJson } from './scrape-script';
import fs from 'fs';
import path from 'path';

async function scrapePerks() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://renownedexplorers.fandom.com/wiki/Skills');
  const perksData = await page.evaluate(getPerksJson);

  fs.writeFileSync(
    path.join(__dirname, '..', '..', 'client', 'src', 'perks-data.json'),
    perksData
  );

  return browser.close();
}

scrapePerks().then(() => {
  console.log('scraping RE data done!');
  process.exit();
});
