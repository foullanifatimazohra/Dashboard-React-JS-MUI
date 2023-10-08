import { useField } from "formik";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme, InputBase } from "@mui/material";

function TextField({ label, placeholder, ...props }) {
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
      <InputBase
        sx={{
          py: 1,
          px: 2,
          flex: 1,
          background: colors.primary[400],
          borderRadius: "3px",
          border: error.length ? "1px solid" : "",
          borderColor: error.length ? "#FF3333 !important" : "",
        }}
        placeholder={placeholder}
        {...field}
        {...meta}
      />
      {error.length ? <p>{error}</p> : ""}
    </Box>
  );
}

export default TextField;
