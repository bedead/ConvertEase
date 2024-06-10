"use client";
import Link from "next/link";

function Home() {
  return (
    <div>
      <header className="text-center py-20 bg-green-500 text-white">
        <h1 className="text-4xl font-bold">ConvertEase</h1>
        <p className="mt-2 text-lg">Easy and efficient file conversions for your documents</p>
      </header>

      <main className="container mx-auto p-4">
        <section className="flex flex-wrap justify-center gap-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">PDF to Word</h3>
            <p className="text-gray-600">Convert your PDF documents to editable Word files effortlessly.</p>
            <Link href="/pdfconvert/to-word" className="inline-block bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 transition">
              Convert Now
            </Link>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">PDF to Word</h3>
            <p className="text-gray-600">Convert your PDF documents to editable Word files effortlessly.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Word to PDF</h3>
            <p className="text-gray-600">Transform your Word documents into PDF format easily.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">PDF to HTML</h3>
            <p className="text-gray-600">Convert your PDF documents to HTML format for web use.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">PDF to Text</h3>
            <p className="text-gray-600">Extract text content from your PDF files quickly.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-80 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">HTML to PDF</h3>
            <p className="text-gray-600">Convert your HTML files into professional PDF documents.</p>
          </div>
        </section>

        <div className="text-center">
          <Link href="/convert" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Start Converting
          </Link>
        </div>
      </main>
    </div>
  )
};

export default Home;
