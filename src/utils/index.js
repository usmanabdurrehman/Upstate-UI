import theme from "styles/theme.module.css";
import globalStyles from "styles/global.module.css";

export const returnDefault = ({ color, variant }) => {
  const colors = ["primary", "success", "warning", "danger"];
  const variants = ["filled", "outlined"];

  const value = color || variant;
  const array = color ? colors : variants;
  return array.includes(value) ? value : array[0];
};

export const isEmpty = (value) => {
  return typeof value != "boolean" && !value;
};

export const typeToColorMapping = ({ color, variant = "filled" }) => {
  const classString = `${returnDefault({ variant })}-${returnDefault({
    color,
  })}`;
  return theme[classString];
};

export const severityToColorMapper = (severity) => {
  const severityToColorMapper = {
    error: "danger",
    info: "primary",
    success: "success",
    warning: "warning",
  };
  return severityToColorMapper[severity] || "primary";
};

export const anchorOriginToClassMapper = ({ horizontal, vertical }) => {
  return globalStyles[`${vertical}-${horizontal}`];
};

export let getThemeStyles = (theme, customStyles) => {
  let themeStyles;

  switch (theme.toLowerCase()) {
    case "tree":
      themeStyles = {
        options: {
          stripedRows: true,
        },
        searchBackground: "#43B929",
        searchColor: "white",
        searchBorder: "white",
        headerBackground: "#43B929",
        headerColor: "white",
        stripedRowsBackground: "#C0F3A5",
        stripedRowsColor: "black",
        iconsBackground: "#43B929",
        iconsColor: "white",
        paginationSelectBackground: "#43B929",
        paginationSelectColor: "white",
      };
      break;
    case "navy":
      themeStyles = {
        options: {
          stripedRows: true,
        },
        searchBackground: "#22333B",
        searchColor: "white",
        searchBorder: "white",
        headerBackground: "#22333B",
        headerColor: "white",
        stripedRowsBackground: "#CBDAE1",
        stripedRowsColor: "black",
        iconsBackground: "#22333B",
        iconsColor: "white",
        paginationSelectBackground: "#22333B",
        paginationSelectColor: "white",
      };
      break;
    case "aquamarine":
      themeStyles = {
        options: {
          stripedRows: true,
        },
        searchBackground: "#47E5BC",
        searchColor: "white",
        searchBorder: "white",
        headerBackground: "#47E5BC",
        headerColor: "white",
        stripedRowsBackground: "#EEFBFA",
        stripedRowsColor: "black",
        iconsBackground: "#47E5BC",
        iconsColor: "white",
        paginationSelectBackground: "#47E5BC",
        paginationSelectColor: "white",
      };
      break;
    default:
      themeStyles = {
        options: {
          stripedRows: true,
        },
        searchBackground: "white",
        searchColor: "gray",
        searchBorder: "gray",
        headerBackground: "white",
        headerColor: "black",
        stripedRowsBackground: "white",
        stripedRowsColor: "black",
        iconsBackground: "white",
        iconsColor: "gray",
        paginationSelectBackground: "white",
        paginationSelectColor: "black",
      };
      break;
  }
  for (const [key, value] of Object.entries(customStyles)) {
    themeStyles[key] = value;
  }
  return themeStyles;
};
