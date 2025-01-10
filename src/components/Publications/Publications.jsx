import React, { useRef, useState } from "react";
import publicationsData from "../../assets/publicationsdata";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import parse from "html-react-parser";
import "./Styles/publications.css";

// Common options for all AG Grid columns except Year
const commonColumnOptions = {
  filter: true,
  floatingFilter: true,
  autoHeight: true,
  resizable: false,
};



// Disable column autosizing
const autoSizeStrategy = {
  type: "fitCellContents",
};

const Publications = () => {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(publicationsData);
  const [columns, setColumns] = useState([
    {
      field: "Publication",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="publication-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Publisher",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="publisher-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Publication Type",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="type-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Author(s)",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="authors-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Keywords",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="keywords-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Year",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="year-cell">{parse(value)}</div>
      ),
    },
  ]);

  const clickHandler = async () => {
    const data = [];

    // Ensure the tableRef and its API exist before accessing them
    if (tableRef.current && tableRef.current.api) {
      tableRef.current.api.forEachNodeAfterFilterAndSort((node) => {
        data.push(node.data);
      });

      const json = JSON.stringify(data, null, 2);

      // Fallback for browsers that don't support `showSaveFilePicker`
      if ("showSaveFilePicker" in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: "data.json",
            types: [
              {
                description: "JSON file",
                accept: { "application/json": [".json"] },
              },
            ],
          });
          const writable = await handle.createWritable();
          await writable.write(json);
          await writable.close();
          alert("Data saved successfully!");
        } catch (error) {
          alert("File not saved");
          console.error("Error saving file:", error);
        }
      } else {
        // Fallback for older browsers
        const blob = new Blob([json], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "data.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      alert("AG Grid is not loaded or tableRef is undefined");
    }
  };

  return (
    <div className="publications">
      <div className="table ag-theme-quartz" >
        <AgGridReact
          ref={tableRef}
          rowData={rowData}
          columnDefs={columns}
          pagination={true}
          autoSizeStrategy={autoSizeStrategy}
          suppressMovableColumns={true}
        />
      </div>
      <button onClick={clickHandler} className="publication-button">
        Export Results to JSON
      </button>
    </div>
  );
};

export default Publications;
