"use client";
import { useState } from 'react';

export default function PdfToWord() {
    const [file, setFile] = useState(null);
    const [convertedContent, setConvertedContent] = useState('');
    const [isConverting, setIsConverting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setErrorMessage('');
        } else {
            setErrorMessage('Please upload a valid PDF file.');
            setFile(null);
        }
    };

    const handleConvert = async () => {
        if (!file) return;
        setIsConverting(true);
        const formData = new FormData();
        formData.append('pdfFile', file);

        try {
            const res = await fetch('/api/pdf-to-word', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) throw new Error('Failed to convert');
            const result = await res.json();
            setConvertedContent(result.wordContent);
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred during conversion.');
            setConvertedContent('');
        }
        setIsConverting(false);
    };

    const handleClear = () => {
        setFile(null);
        setConvertedContent('');
        setErrorMessage('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Convert PDF to Word</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Upload PDF File</h2>
                <input type="file" onChange={handleFileChange} className="border rounded p-2 w-full" />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button onClick={handleConvert} disabled={!file || isConverting} className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 transition">
                    Convert
                </button>
                <button onClick={handleClear} className="bg-red-500 text-white py-2 px-4 rounded mt-4 ml-2 hover:bg-red-600 transition">
                    Clear
                </button>
            </div>
            {convertedContent && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Converted Word Content</h2>
                    <pre className="bg-gray-100 p-4 rounded">{convertedContent}</pre>
                </div>
            )}
        </div>
    );
}
