import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import mammoth from 'mammoth';

const upload = multer({ dest: '/tmp/uploads' });

const handler = nextConnect();
handler.use(upload.single('wordFile'));

handler.post(async (req, res) => {
    const { originalname, path: wordFilePath } = req.file;
    const outputDir = path.join('/tmp', 'converted');
    const outputFilePath = path.join(outputDir, originalname.replace('.docx', '.pdf'));

    // Ensure output directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    // Read the Word file and convert it to HTML
    const docxBytes = fs.readFileSync(wordFilePath);
    const { value: html } = await mammoth.convertToHtml({ arrayBuffer: docxBytes });

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a page to the PDF document and set the content
    const page = pdfDoc.addPage();
    page.drawText(html, { x: 50, y: 700, size: 12 });

    // Serialize the PDF document to bytes and save it
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputFilePath, pdfBytes);

    res.status(200).json({ message: 'Word converted to PDF successfully', outputFilePath });
});

export default handler;
