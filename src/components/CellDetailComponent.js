import React from "react";

const CellDetailComponent = ({ renderCellName, selectedCell }) => {
  return (
    <table className="table table-bordered" style={{ marginBottom: 0 }}>
      <thead>
        <tr>
          <th width="300">{renderCellName(selectedCell)}</th>
          <th>{document.getElementById(selectedCell)?.innerText}</th>
        </tr>
      </thead>
    </table>
  );
};

export default CellDetailComponent;
