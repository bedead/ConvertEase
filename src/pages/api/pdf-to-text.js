import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

const upload = multer({ dest: '/tmp/uploads' });

const handler = nextConnect();
handler.use(upload.single('pdfFile'));

handler.post(async (req, res) => {
    const { originalname, path: pdfFilePath } = req.file;
    const outputDir = path.join('/tmp', 'converted');
    const outputFilePath = path.join(outputDir, originalname.replace('.pdf', '.txt'));

    // Ensure output directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    // Load the PDF document
    const existingPdfBytes = fs.readFileSync(pdfFilePath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Extract text
    const text = await pdfDoc.getTextContent();

    // Save the text file
    fs.writeFileSync(outputFilePath, text.items.map(item => item.str).join(' '));

    res.status(200).json({ message: 'PDF converted to Text successfully', outputFilePath });
});

export default handler;
