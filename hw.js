const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.example.com'); // измените на нужный URL

  await page.click('#myInput'); // замените "myInput" на идентификатор вашего элемента
  await page.keyboard.type('Hello World'); // замените 'Hello World' на текст, который вы хотите ввести

  await browser.close();
})();
