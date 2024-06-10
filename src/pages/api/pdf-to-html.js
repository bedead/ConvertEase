import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

const upload = multer({ dest: '/tmp/uploads' });

handler.use(upload.single('pdfFile'));

handler.post(async (req, res) => {
    const { originalname, path: pdfFilePath } = req.file;
    const outputDir = path.join('/tmp', 'converted');
    const outputFilePath = path.join(outputDir, originalname.replace('.pdf', '.html'));

    // Ensure output directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    // Load the PDF document
    const existingPdfBytes = fs.readFileSync(pdfFilePath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Extract text
    const text = await pdfDoc.getTextContent();

    // Save the HTML document
    fs.writeFileSync(outputFilePath, `<html><body><p>${text.items.map(item => item.str).join(' ')}</p></body></html>`);

    res.status(200).json({ message: 'PDF converted to HTML successfully', outputFilePath });
});

export default handler;
