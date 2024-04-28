import React from "react";

const DownloadCSV = ({ jsonData, filename }) => {
  const handleDownload = () => {
    const csvContent =
      "Name,Year,Domain,State\n" +
      jsonData
        .map(
          (student) =>
            `${student.name},${student.Year},${student.domain},${student.state}`
        )
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url); // Clean up memory usage
  };

  return <button onClick={handleDownload}>Download CSV</button>;
};

export default DownloadCSV;
