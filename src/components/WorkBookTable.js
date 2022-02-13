import React from "react";
import ContentEditable from "react-contenteditable";
import { COLUMN_HEADERS, ROW_HEADINGS } from "../config/constants";

const WorkBookTable = ({
  handleChange,
  getHtmlValue,
  setSelectedCell,
  workbook,
  selectedCell,
}) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th style={{ backgroundColor: "#c2c2c0" }}></th>
          {COLUMN_HEADERS.map((header) => (
            <th width="200" style={{ backgroundColor: "#c2c2c0" }} key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ROW_HEADINGS.map((row, index1) => (
          <tr key={row}>
            <td style={{ backgroundColor: "#c2c2c0" }}>{row}</td>
            {COLUMN_HEADERS.map((header, index2) => (
              <td style={{ padding: 0 }} key={header}>
                <ContentEditable
                  key={header}
                  contentEditable
                  onChange={(e) =>
                    handleChange(`${index1}-${index2}`, e.target.value)
                  }
                  html={getHtmlValue(workbook, index1, index2)}
                  style={
                    selectedCell === `${index1}-${index2}`
                      ? { border: "3px solid black", height: "100%" }
                      : { border: "none", height: "100%" }
                  }
                  onClick={(e) => {
                    setSelectedCell(`${index1}-${index2}`);
                  }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkBookTable;
