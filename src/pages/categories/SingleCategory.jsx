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
function SingleCategory() {
  const { id } = useParams();
  const [value, setValue] = React.useState("parent");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [initialValues, setInitialValues] = useState({
    title: "",
    parentCategory: "",
    thumbnail: "",
    // images: [],
  });

  useEffect(() => {
    // fetch the single category data
    setInitialValues([]);
  }, [id]);

  const validationSchema = yup.object().shape({
    title: yup.string().required("this field is required"),
    description: yup.string().required("this field is required"),
    price: yup.number().min(0).required("this field is required"),
    discountPercentage: yup.number().min(0).required("this field is required"),
    rating: yup.number().min(0).required("this field is required"),
    stock: yup.number().min(0).required("this field is required"),
    brand: yup.string().required("this field is required"),
    category: yup.string().required("this field is required"),
  });
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };
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
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => {
            return (
              <Form>
                <Box display="flex" flexDirection="column" gap={4}>
                  <Field
                    id="title"
                    name="title"
                    label="Category Title"
                    as={TextField}
                  />
                  <FileUploadCard />

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
      ) : null}
    </Box>
  );
}

export default SingleCategory;
