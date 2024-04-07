import React, { useState } from 'react';

function FileUpload() {
    // const [selectedFile, setSelectedFile] = useState(null);
    const [pdfUrl, setPdfUrl] = useState('');

    const handleFileChange =  (event) => {
        event.preventDefault();

        const file = event.target.files[0];
        
        
        if (!file) {
            alert('Please select a file to upload!');
            return;
        }

        uploadFile(file).then(() => {
            console.log('Upload complete, now fetchinng the file...');
            return fetchPdfUrl();
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        })
    };

    async function uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        
        try {
            const response = await fetch('https://nodejsresumeevaluation.azurewebsites.net/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('File Uploaded successfully!');
            }
            else {
                alert('Failed to upload file!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading file');
        }


    };

    async function fetchPdfUrl() {
        fetch('https://nodejsresumeevaluation.azurewebsites.net/get-pdf-url')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPdfUrl(data.url);
                console.log(data.url);
            })
            .catch(error => {
                console.error('Error fetching PDF URL:', error);
                alert('Error fetching PDF file');
            });
    }


    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="file" onChange={handleFileChange} />
        //     <button type="submit">Upload File</button>
        // </form>
        <>
        <div className="flex flex-row w-full h-full">
            <div className="flex flex-col w-1/5">
                <div className="">
                    <label htmlFor="dropzone-file" className="flex flex-col  justify-center  2xl:h-20 xl:h-15 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-pink-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-orange-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center ">
                                        <svg className="2xl:w-7 h-7 lg:w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">点击</span> 或拖动上传</p>
                                        <p className="text-xs  text-gray-500 dark:text-gray-400">仅支持pdf格式文件</p>
                                    </div>
                                    <input id="dropzone-file" type="file" onChange={handleFileChange}  className="hidden" />
                            </label>
                </div>
                    
                
                <div className="p-4 text-white">Disclaimer</div>

            </div>

            <div className="w-full ">
                
            <div className="relative w-full overflow-hidden" style={{paddingTop: '99.25%'}}>
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
            </div>

            </div>

        </div>

            


    
        
        

          
            {/* <iframe title="PDF Document Viewer" className="absolute top-0 left-0 w-full h-full" src={pdfFile} frameBorder="0" allowFullScreen  /> */}
            
        </>
        
    )
}
export default FileUpload;