import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const upload = multer({ dest: '/tmp/uploads' });

const handler = nextConnect();
handler.use(upload.single('htmlFile'));

handler.post(async (req, res) => {
    const { originalname, path: htmlFilePath } = req.file;
    const outputDir = path.join('/tmp', 'converted');
    const outputFilePath = path.join(outputDir, originalname.replace('.html', '.pdf'));

    // Ensure output directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    // Read the HTML file
    const html = fs.readFileSync(htmlFilePath, 'utf-8');

    // Launch Puppeteer and create PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({ path: outputFilePath, format: 'A4' });

    await browser.close();

    res.status(200).json({ message: 'HTML converted to PDF successfully', outputFilePath });
});

export default handler;
