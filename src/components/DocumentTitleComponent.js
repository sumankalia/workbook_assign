import React from "react";

const DocumentTitleComponent = ({ workbookName, updateWorkBookName }) => {
  return (
    <table className="table table-bordered" style={{ marginBottom: 0 }}>
      <thead>
        <tr>
          <th style={{ padding: 0 }}>
            <input
              type="text"
              className="form-control"
              defaultValue={workbookName}
              style={{ border: "none" }}
              onChange={(e) => updateWorkBookName(e.target.value)}
            />
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default DocumentTitleComponent;
