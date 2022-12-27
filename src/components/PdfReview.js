import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from 'react';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function PdfReview({filename}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
  );

  return (
    <div className='pdf'>
      <nav>
        <p>
          <b>Project Report: </b>Page {pageNumber} of {numPages}
        </p>
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
      </nav>

      <Document
          file={filename}
          onLoadSuccess={onDocumentLoadSuccess}
      >
          <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PdfReview;