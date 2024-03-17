import React from 'react';

const PDFViewer = () => {
 return (

<div className="relative w-full overflow-hidden" style={{paddingTop: '75.25%'}}>
 <iframe title="PDF Document Viewer" className="absolute top-0 left-0 w-full h-full" src="Mengmeng's Resume.pdf" frameBorder="0" allowFullScreen  />
 </div>
 );
};
export default PDFViewer;