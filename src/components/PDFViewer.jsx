import React, {useState, useEffect} from 'react';

function PDFViewer() {

    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {

        fetch('http://127.0.0.1:3001/get-pdf-url')
            .then((response) => response.json())
            .then((data) => {
                setPdfUrl(data.url);
                console.log(data.url);
            })
            .catch((error) => console.error('Error fetching PDF URL:', error));
    }, []);
    return (
     

        <div className="relative w-full overflow-hidden" style={{paddingTop: '75.25%'}}>

            {pdfUrl ? (
                    <iframe
                    title="PDF Document Viewer"
                    src={pdfUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allowFullScreen
                    ></iframe>
                ) : (
                    <p>Loading PDF...</p>
                )}
        {/* <iframe title="PDF Document Viewer" className="absolute top-0 left-0 w-full h-full" src={pdfFile} frameBorder="0" allowFullScreen  /> */}
        </div>
    );
};
export default PDFViewer;