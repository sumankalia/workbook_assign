import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  changeWorkbookName,
  updateSelectedCell,
  updateWorkBookData,
} from "./Redux/actions/workbook";
import WorkBookTable from "./components/WorkBookTable";
import FiltersTable from "./components/FiltersTable";
import DocumentTitleComponent from "./components/DocumentTitleComponent";
import CellDetailComponent from "./components/CellDetailComponent";
import { COLUMN_HEADERS, ROW_HEADINGS } from "./config/constants";
import "./App.css";

const renderCellName = (selectedCell) => {
  const splittedName = selectedCell?.split("-");

  return splittedName?.length === 2
    ? `${COLUMN_HEADERS[splittedName[1]] + ROW_HEADINGS[splittedName[0]]}`
    : "";
};

const getHtmlValue = (workbook, index1, index2) => {
  const cell = workbook?.find(
    (workbookRow) =>
      parseInt(workbookRow[0]) === parseInt(index1) &&
      parseInt(workbookRow[1]) === parseInt(index2)
  );

  return cell?.length === 3 ? cell[2] : null;
};

const App = ({
  setSelectedCell,
  selectedCell,
  workbook,
  updateWorkbook,
  updateWorkBookName,
  workbookName,
}) => {
  const handleChange = (name, value) => {
    const updatedValue = value ? value : "";
    const splittedName = name.split("-");

    if (splittedName.length > 1) {
      const existingIndex = workbook?.findIndex(
        (element) =>
          parseInt(element[0]) === parseInt(splittedName[0]) &&
          parseInt(element[1]) === parseInt(splittedName[1])
      );

      const element = document.getElementById(selectedCell);
      if (element) {
        // element.innerText(updatedValue);
        updateWorkbook(
          Object.assign([], workbook, {
            [existingIndex]: [splittedName[0], splittedName[1], updatedValue],
          })
        );
      }
      if (existingIndex !== -1) {
        updateWorkbook(
          Object.assign([], workbook, {
            [existingIndex]: [splittedName[0], splittedName[1], updatedValue],
          })
        );
      } else {
        updateWorkbook([
          ...workbook,
          [splittedName[0], splittedName[1], element ? element.innerHTML : ""],
        ]);
      }
    }
  };

  const handleTextAlignmentHandler = (e) => {
    const splittedName = selectedCell.split("-");

    const existingIndex = workbook.findIndex(
      (element) =>
        parseInt(element[0]) === parseInt(splittedName[0]) &&
        parseInt(element[1]) === parseInt(splittedName[1])
    );

    setTextAlign(e.target.value);
    const element = document.getElementById(selectedCell);
    if (element) {
      element.style.setProperty("text-align", `${e.target.value}`);
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else {
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `<div class='workbook_cell_internal' id=${selectedCell} style='text-align: ${e.target.value}'>${workbook[existingIndex][2]}</div>`,
          ],
        })
      );
    }
  };

  const handleFontSize = (e) => {
    const splittedName = selectedCell.split("-");

    const existingIndex = workbook.findIndex(
      (element) =>
        parseInt(element[0]) === parseInt(splittedName[0]) &&
        parseInt(element[1]) === parseInt(splittedName[1])
    );

    setFontSize(e.target.value);

    const element = document.getElementById(selectedCell);
    if (element) {
      element.style.setProperty("font-size", `${e.target.value}`);
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else {
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `<div class='workbook_cell_internal' id=${selectedCell} style='font-size: ${e.target.value}'>${workbook[existingIndex][2]}</div>`,
          ],
        })
      );
    }
  };

  const handleTextColor = (e) => {
    const splittedName = selectedCell.split("-");

    const existingIndex = workbook.findIndex(
      (element) =>
        parseInt(element[0]) === parseInt(splittedName[0]) &&
        parseInt(element[1]) === parseInt(splittedName[1])
    );

    setColor(e.target.value);
    const element = document.getElementById(selectedCell);
    if (element) {
      element.style.setProperty("color", e.target.value);
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else {
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `<div class='workbook_cell_internal' id=${selectedCell} style='color: ${e.target.value}'>${workbook[existingIndex][2]}</div>`,
          ],
        })
      );
    }
  };

  const handleBgColor = (e) => {
    const splittedName = selectedCell.split("-");

    const existingIndex = workbook.findIndex(
      (element) =>
        parseInt(element[0]) === parseInt(splittedName[0]) &&
        parseInt(element[1]) === parseInt(splittedName[1])
    );

    setBackgroundColor(e.target.value);

    const element = document.getElementById(selectedCell);
    if (element) {
      element.style.setProperty("background-color", e.target.value);
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else {
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `<div class='workbook_cell_internal' id=${selectedCell} style='background-color: ${e.target.value}'>${workbook[existingIndex][2]}</div>`,
          ],
        })
      );
    }
  };

  const handleItalicStyle = (e) => {
    const splittedName = selectedCell.split("-");

    const existingIndex = workbook.findIndex(
      (element) =>
        parseInt(element[0]) === parseInt(splittedName[0]) &&
        parseInt(element[1]) === parseInt(splittedName[1])
    );

    const element = document.getElementById(selectedCell);

    if (element && !element.style.fontStyle) {
      setFontStyle("italic");
      element.style.setProperty("font-style", "italic");
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else if (element && element.style.fontStyle) {
      setFontStyle("normal");
      element.style.removeProperty("font-style");

      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else if (!element) {
      setFontStyle("italic");
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `<div class='workbook_cell_internal' id=${selectedCell} style='font-style: italic'>${workbook[existingIndex][2]}</div>`,
          ],
        })
      );
    }
  };

  const handleBoldStyle = (e) => {
    const splittedName = selectedCell.split("-");

    const existingIndex = workbook.findIndex(
      (element) =>
        parseInt(element[0]) === parseInt(splittedName[0]) &&
        parseInt(element[1]) === parseInt(splittedName[1])
    );

    const element = document.getElementById(selectedCell);

    if (element && !element.style.fontWeight) {
      setFontWeight("bold");
      element.style.setProperty("font-weight", "bold");
      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else if (element && element.style.fontWeight) {
      setFontWeight("normal");

      element.style.removeProperty("font-weight");

      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `${element.outerHTML}`,
          ],
        })
      );
    } else if (!element) {
      setFontWeight("bold");

      updateWorkbook(
        Object.assign([], workbook, {
          [existingIndex]: [
            splittedName[0],
            splittedName[1],
            `<div class='workbook_cell_internal' id=${selectedCell} style='font-weight: bold'>${workbook[existingIndex][2]}</div>`,
          ],
        })
      );
    }
  };

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontSize, setFontSize] = useState("16px");
  const [color, setColor] = useState("black");
  const [fontWeight, setFontWeight] = useState("");
  const [fontStyle, setFontStyle] = useState("");
  const [textAlign, setTextAlign] = useState("left");

  useEffect(() => {
    const el = document.getElementById(selectedCell);
    if (el) {
      const bgColor = el.style.getPropertyValue("background-color");
      const size = el.style.getPropertyValue("font-size");
      const color = el.style.getPropertyValue("color");
      const fontWeight = el.style.getPropertyValue("font-weight");
      const fontStyle = el.style.getPropertyValue("font-style");
      const align = el.style.getPropertyValue("text-align");

      setBackgroundColor(bgColor ? bgColor : "white");
      setFontSize(size ? size : "16px");
      setColor(color ? color : "black");
      setFontWeight(fontWeight ? fontWeight : "normal");
      setFontStyle(fontStyle ? fontStyle : "normal");
      setTextAlign(align ? align : "left");
    } else {
      setBackgroundColor("white");
      setFontSize("16px");
      setColor("black");
      setFontWeight("normal");
      setFontStyle("normal");
      setTextAlign("left");
    }
  }, [document.getElementById(selectedCell)]);

  return (
    <div style={{ padding: 10 }}>
      <DocumentTitleComponent
        workbookName={workbookName}
        updateWorkBookName={updateWorkBookName}
      />
      <FiltersTable
        handleFontSize={handleFontSize}
        handleTextColor={handleTextColor}
        handleBoldStyle={handleBoldStyle}
        handleBgColor={handleBgColor}
        handleItalicStyle={handleItalicStyle}
        handleTextAlignmentHandler={handleTextAlignmentHandler}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textAlign={textAlign}
      />
      <CellDetailComponent
        renderCellName={renderCellName}
        selectedCell={selectedCell}
      />
      <WorkBookTable
        handleChange={handleChange}
        getHtmlValue={getHtmlValue}
        setSelectedCell={setSelectedCell}
        workbook={workbook}
        selectedCell={selectedCell}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  workbook: state.workbook.workbookData,
  selectedCell: state.workbook.selectedCell,
  workbookName: state.workbook.workbookName,
});

const mapDispatchToProps = (dispatch) => ({
  updateWorkbook: (payload) => updateWorkBookData(dispatch, payload),
  setSelectedCell: (payload) => updateSelectedCell(dispatch, payload),
  updateWorkBookName: (payload) => changeWorkbookName(dispatch, payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
