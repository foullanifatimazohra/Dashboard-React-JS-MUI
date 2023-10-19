import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/ui/Header";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import TextField from "../../components/ui/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FileUploadCard from "../../components/ui/FileUpload";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SingleCategory() {
  const { id } = useParams();
  const [value, setValue] = React.useState("parent");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const initialValues = {
    title: "",
    picture: null,
  };
  const [initialValuesSub, setInitialValuesSub] = useState({
    subtitle: "",
    parentCategory: "",
  });

  useEffect(() => {
    // fetch the single category data
    //setInitialValuesParent([]);
    if (id) {
      setInitialValuesSub([]);
    }
  }, [id]);

  const validationSchema = yup.object({
    title: yup.string().required("this field is required"),
    picture: yup.mixed().required("you have to add a picture"),
  });

  return (
    <Box m="20px" pb={5}>
      <Header
        title={id ? "Update Category " : "Add a New Category"}
        subtitle="Manage your Categories "
      />
      <Box my="20px">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Please choose one type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="parent"
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              value="parent"
              control={<Radio />}
              label="Parent Category"
            />
            <FormControlLabel
              value="sub"
              control={<Radio />}
              label="Sub Category"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {value === "parent" ? (
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          validationSchema={validationSchema}
        >
          {({ setFieldValue, values }) => {
            console.log(values);
            return (
              <Form>
                <Box display="flex" flexDirection="column" gap={4}>
                  <Field
                    id="title"
                    name="title"
                    label="Category Title"
                    as={TextField}
                  />
                  <Field
                    id="picture"
                    name="picture"
                    setFieldValue={setFieldValue}
                    as={FileUploadCard}
                  />

                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      size="large"
                    >
                      {id ? "Update Category" : "Add Category"}
                    </Button>
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={initialValuesSub}
          onSubmit={(values) => {
            console.log("Sub Category:", values);
          }}
          validationSchema={yup.object({
            subtitle: yup.string().required("this field is required"),
            parentCategory: yup.string().required("this field is required"),
          })}
        >
          {({ setFieldValue }) => {
            return (
              <Form>
                <Box display="flex" flexDirection="column" gap={4}>
                  <Field
                    id="subtitle"
                    name="subtitle"
                    label="Sub Category Title"
                    as={TextField}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                      "& > label": {
                        fontSize: "16px",
                        mb: 1,
                      },
                    }}
                  >
                    <label htmlFor="parentCategory" variant="filled">
                      Parent Category
                    </label>
                    <Select
                      onChange={(e) =>
                        setFieldValue("parentCategory", e.target.value)
                      }
                      displayEmpty
                      name="parentCategory"
                    >
                      <MenuItem value={10}>Cat 1</MenuItem>
                      <MenuItem value={21}>Cat 2</MenuItem>
                      <MenuItem value={22}>Cat 3</MenuItem>
                    </Select>
                  </Box>

                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      size="large"
                    >
                      {id ? "Update Category" : "Add Category"}
                    </Button>
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
      )}
    </Box>
  );
}

export default SingleCategory;
