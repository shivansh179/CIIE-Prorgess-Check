import React, { useState } from "react";

const DownloadCSV = ({ jsonData, filename }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = () => {
    setIsDownloading(true);
    // Simulate some delay to show download progress (optional)
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div>
      {isDownloading ? (
        <p>Downloading...</p>
      ) : (
        <CSVDownload
          data={jsonData}
          filename={filename}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {({ onClick }) => <button onClick={onClick}>Download CSV</button>}
        </CSVDownload>
      )}
    </div>
  );
};

export default DownloadCSV;
