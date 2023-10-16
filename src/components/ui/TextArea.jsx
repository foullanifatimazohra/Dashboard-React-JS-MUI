import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const TextArea = ({ label, placeholder, ...props }) => {
  // have eccess to the theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error ? meta.error : "";

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        gridColumn: "span 2",
        "& > p": {
          color: "#FF3333",
        },
        "& > label": {
          color: error.length ? "#FF3333" : "",
          fontSize: "16px",
          mb: 1,
        },
      }}
    >
      <label htmlFor={field.name} variant="filled">
        {label}
      </label>
      <TextField
        sx={{
          background: colors.primary[400],
          borderRadius: "3px",
          border: error.length ? "1px solid" : "none",
          borderColor: error.length ? "#FF3333 !important" : "#00ffffff",
          "& fieldset": {
            border: "none",
          },
        }}
        {...field}
        {...meta}
        placeholder={placeholder}
        multiline
        rows={6}
      />
      {error.length ? <p>{error}</p> : ""}
    </Box>
  );
};
