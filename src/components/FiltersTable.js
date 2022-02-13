import React from "react";
import { COLORS, FONT_SIZES, TEXT_ALIGN_OPTIONS } from "../config/constants";

const FiltersTable = ({
  handleFontSize,
  handleTextColor,
  handleBoldStyle,
  handleBgColor,
  handleItalicStyle,
  handleTextAlignmentHandler,
  backgroundColor,
  fontSize,
  color,
  textAlign,
  fontWeight,
  fontStyle,
}) => {
  return (
    <table className="table table-bordered" style={{ marginBottom: 0 }}>
      <thead>
        <tr>
          <th width="100">
            Font Size
            <select
              style={{ textTransform: "capitalize" }}
              onChange={handleFontSize}
              name="fontSize"
              value={fontSize}
            >
              {FONT_SIZES.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </th>
          <th width="150">
            Text Color
            <select
              style={{ textTransform: "capitalize" }}
              onChange={handleTextColor}
              name="textColor"
              value={color}
            >
              {COLORS.map((color) => (
                <option value={color} key={color}>
                  {color}
                </option>
              ))}
            </select>
          </th>

          <th
            width="50"
            onClick={handleBoldStyle}
            style={{ cursor: "pointer" }}
          >
            <span style={fontWeight === "bold" ? { color: "blue" } : {}}>
              Bold
            </span>
          </th>
          <th
            width="50"
            onClick={handleItalicStyle}
            style={{ cursor: "pointer" }}
          >
            <span style={fontStyle === "italic" ? { color: "blue" } : {}}>
              Italic
            </span>
          </th>
          {/* <th width="150">Line Stroke</th> */}
          <th width="150">
            BG color
            <select
              style={{ textTransform: "capitalize" }}
              onChange={handleBgColor}
              name="bgColor"
              value={backgroundColor}
            >
              {COLORS.map((color) => (
                <option value={color} key={color}>
                  {color}
                </option>
              ))}
            </select>
          </th>
          <th>
            Text Alignment
            <select
              style={{ textTransform: "capitalize" }}
              onChange={handleTextAlignmentHandler}
              name="bgColor"
              value={textAlign}
            >
              {TEXT_ALIGN_OPTIONS.map((color) => (
                <option value={color} key={color}>
                  {color}
                </option>
              ))}
            </select>
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default FiltersTable;
