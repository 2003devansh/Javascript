const puppeteer = require('puppeteer');

async function jockeyScraper() {
    const url = 'https://www.jockeyindia.com/men/tshirts';

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    );

    try {
        console.log('Navigating to', url);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 0 });

        await autoScroll(page);

        await page.waitForSelector('.product-item-info', { timeout: 30000 });

        const products = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.product-item-info'));
            return items.map(item => {
                const title = item.querySelector('.product-item-link')?.innerText.trim() || '';
                const price = item.querySelector('.price')?.innerText.trim() || '';
                const image = item.querySelector('img.product-image-photo')?.src || '';
                const link = item.querySelector('a.product-item-link')?.href || '';
                return { title, price, image, link };
            }).filter(p => p.title && p.price && p.image && p.link);
        });

        // ✅ Log the data we're scraping
        console.log('📦 Scraped products from Jockey:\n', JSON.stringify(products, null, 2));

        await browser.close();
        return products;
    } catch (err) {
        console.error('❌ Error scraping Jockey:', err.message);
        await browser.close();
        return [];
    }
}

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= document.body.scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

module.exports = jockeyScraper;
